import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as THREE from 'three';

import { GUI } from './lil-gui.module.min.js';
import { ThreejsSceneLayer, Tileset } from 'mapbox-3d-tiles';

// Set your Mapbox token here or via environment variable
const MAPBOX_TOKEN = 'pk.eyJ1IjoiamsyNzY5OTM4NTciLCJhIjoiY2x0bW5ubHViMWVnaDJtcDZlYW92aWt2eCJ9.mBXt-vny9iFy4lzC0g1gbw';

const displayPamams = {
    errorTarget: 12, // 恢复为原本示例的精度设置
    //   errorThreshold: 60,
    maxDepth: 20, // 恢复为原本示例的层级设置
    displayActiveTiles: false,
    autoDisableRendererCulling: true,
};

const debugParams = {
    enableDebug: true,
    displayBoxBounds: false,
    displaySphereBounds: false,
    displayRegionBounds: false,
    colorMode: 0,
};

const exampleParams = {
    reload: reloadTiles,
};

var map = null;
var scene = null;
var tileset = null;

const center = [114.21532280695719, 22.69055458604008]; // 香港中文大学深圳行政楼

// TODO: 需要将数据发布到服务器上，并修改url
const tilesetOptions = {    
    id: 'test-model1',
    // url: 'http://localhost:8804/splat-3dtiles/NNU_2/tileset.json',
    // url: 'http://localhost:8804/splat-3dtiles/NNU_2_opt/tileset.json',
    url: 'http://localhost:8804/splat-3dtiles/administration_correct/result/tileset.json',
    isGaussianSplatting: true, // 默认为 false，如果模型有3DGS效果，请设置为 true
    maxGaussianSplatingCount: 2048 * 2048, // 恢复为原本示例的高斯点云设置
    downloadMaxJobs: 6, // 恢复为原本示例的并发下载设置
    parseMaxJobs: 2,    // 恢复为原本示例的解析并发设置
    // 添加缓存和优化设置
    lruCache: {
        maxSize: 64  // 恢复为原本示例的缓存设置
    },
    maxZoom: 22,  // 恢复为原本示例的最大缩放级别
    // 调试设置
    enableDebug: true,
    displayBoxBounds: false, // 关闭边界框显示，恢复正常视觉效果
    // 新数据已有正确的transform，不需要ignoreTransform
    // ignoreTransform: true,
};

// 预设位置调整 (根据调试结果预设，用户可以通过GUI微调)
const positionAdjustment = {
    offsetX: -467,     // 根据调试值预设
    offsetY: 163,      // 根据调试值预设
    offsetZ: 0,        // 根据调试值预设
    rotationX: 0,      // 根据调试值预设
    rotationY: 0,      // 根据调试值预设
    rotationZ: -2.35,  // 根据调试值预设
    scale: 1.0         // 根据调试值预设
};

init();
addGUI();

function init() {
    console.log('🚀 开始初始化Mapbox 3D Tiles示例');
    
    const refCenter = [...center, 0];

    console.log('🗺️ 创建Mapbox地图, 中心点:', center);
    map = new mapboxgl.Map({
        container: 'map',
        center: center,
        zoom: 15,
        bearing: 0,
        pitch: 0,
        style: 'mapbox://styles/mapbox/streets-v10',
        accessToken: MAPBOX_TOKEN,
    });

    map.on('load', function () {
        console.log('🗺️ Mapbox地图加载完成');
        
        new mapboxgl.Marker({
            color: 'red',
        })
            .setLngLat(center)
            .addTo(map);
        
        console.log('📍 红色标记已添加');

        scene = new ThreejsSceneLayer({
            id: 'test-scene',
            refCenter: refCenter,
        });
        
        console.log('🎬 Three.js场景层已创建:', scene);

        map.addLayer(scene);
        
        console.log('🎭 场景层已添加到地图');
        console.log('📊 新数据期待的瓦片ID模式: tile_15_26780_14262 (深圳坐标)');
        console.log('📍 原始坐标: 114.21532281°, 22.69055459° (香港中文大学深圳行政楼)');
        
        // 验证场景是否正确初始化
        setTimeout(() => {
            console.log('🔍 场景状态检查:', {
                scene: scene,
                threeScene: scene?.three?.scene,
                camera: scene?.three?.camera,
                renderer: scene?.three?.renderer
            });
        }, 1000);

        reloadTiles();
    });
}

function addGUI() {
    // GUI
    const gui = new GUI();
    gui.width = 300;

    const tileOptions = gui.addFolder('Tiles Options');
    tileOptions.add(displayPamams, 'displayActiveTiles');
    tileOptions.add(displayPamams, 'autoDisableRendererCulling');
    tileOptions.add(displayPamams, 'errorTarget').min(0).max(50);
    
    // 位置调整控制面板 (简化版，只包含基本调整)
    const positionFolder = gui.addFolder('Position Adjustment');
    positionFolder.add(positionAdjustment, 'offsetX', -1000, 1000).onChange(updateTilesetPosition);
    positionFolder.add(positionAdjustment, 'offsetY', -1000, 1000).onChange(updateTilesetPosition);
    positionFolder.add(positionAdjustment, 'offsetZ', -1000, 1000).onChange(updateTilesetPosition);
    positionFolder.add(positionAdjustment, 'rotationX', -Math.PI, Math.PI).onChange(updateTilesetPosition);
    positionFolder.add(positionAdjustment, 'rotationY', -Math.PI, Math.PI).onChange(updateTilesetPosition);
    positionFolder.add(positionAdjustment, 'rotationZ', -Math.PI, Math.PI).onChange(updateTilesetPosition);
    positionFolder.add(positionAdjustment, 'scale', 0.1, 5.0).onChange(updateTilesetPosition);
    positionFolder.open();
    
    tileOptions.add(displayPamams, 'maxDepth').min(1).max(100);
    tileOptions.open();

    const debug = gui.addFolder('Debug Options');
    debug.add(debugParams, 'enableDebug');
    debug.add(debugParams, 'displayBoxBounds');
    debug.add(debugParams, 'displaySphereBounds');
    debug.add(debugParams, 'displayRegionBounds');
    debug.add(debugParams, 'colorMode', Tileset.getColorModes());
    debug.open();

    gui.add(exampleParams, 'reload');
    gui.open();
}

// 更新tileset位置的函数 (简化版)
function updateTilesetPosition() {
    if (!tileset) return;
    
    // 应用位置偏移
    tileset.position.set(
        positionAdjustment.offsetX,
        positionAdjustment.offsetY,
        positionAdjustment.offsetZ
    );
    
    // 应用旋转
    tileset.rotation.set(
        positionAdjustment.rotationX,
        positionAdjustment.rotationY,
        positionAdjustment.rotationZ
    );
    
    // 应用缩放
    tileset.scale.setScalar(positionAdjustment.scale);
    
    console.log('🔧 Tileset位置已更新');
}

function reloadTiles() {
    if (tileset) {
        tileset.remove();
    }

    tileset = scene.addTileset(tilesetOptions);

    // 应用位置微调
    updateTilesetPosition();
    
    // 添加详细的调试信息
    console.log('🚀 开始加载 Tileset');
    console.log('📍 Tileset URL:', tilesetOptions.url);
    console.log('⚙️ Tileset Options:', tilesetOptions);
    
    // 添加事件监听器
    tileset.addEventListener('tile-load-start', (event) => {
        console.log('⏳ 瓦片开始加载:', event.tile.id);
    });

    tileset.addEventListener('tile-load-end', (event) => {
        console.log('✅ 瓦片加载完成:', event.tile.id, '- 内容类型:', event.tile.content?.constructor?.name);
    });

    tileset.addEventListener('load-progress', (event) => {
        console.log('📊 加载进度:', Math.round(event.progress * 100) + '%');
    });

    tileset.addEventListener('loaded', (event) => {
        console.log('🎉 Tileset完全加载完成!');
        console.log('📈 统计信息:', {
            总瓦片数: tileset.stats.total,
            已加载: tileset.stats.loaded,
            内存使用: tileset.stats.memoryUsage + 'MB'
        });
    });

    tileset.addEventListener('error', (event) => {
        console.error('❌ Tileset加载错误:', event.error);
    });
}

function animate() {
    requestAnimationFrame(animate);
    if (tileset) {
        tileset.setDebugParams(debugParams);
        tileset.setDisplayParams(displayPamams);
    }
}

animate();
