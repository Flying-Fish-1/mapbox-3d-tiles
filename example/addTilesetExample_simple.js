import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as THREE from 'three';

import { GUI } from './lil-gui.module.min.js';
import { ThreejsSceneLayer, Tileset } from 'mapbox-3d-tiles';

// Set your Mapbox token here or via environment variable
const MAPBOX_TOKEN = 'pk.eyJ1IjoiamsyNzY5OTM4NTciLCJhIjoiY2x0bW5ubHViMWVnaDJtcDZlYW92aWt2eCJ9.mBXt-vny9iFy4lzC0g1gbw';

// 简化的显示参数 - 无LOD优化
const displayParams = {
    errorTarget: 100,      // ❌ 大幅降低精度要求，减少LOD层级
    maxDepth: 5,          // ❌ 限制为很浅的层级，类似直接加载
    displayActiveTiles: false,
    autoDisableRendererCulling: false, // ❌ 关闭渲染剔除优化
};

const exampleParams = {
    reload: reloadTiles,
};

var map = null;
var scene = null;
var tileset = null;

const center = [114.21532280695719, 22.69055458604008]; // 香港中文大学深圳行政楼

// 简化的tileset选项 - 移除大部分优化
const tilesetOptions = {    
    id: 'simple-model',
    url: 'http://localhost:8804/splat-3dtiles/administration_correct/result/tileset.json',
    isGaussianSplatting: true,
    
    // ❌ 移除高斯点云优化限制
    // maxGaussianSplatingCount: 2048 * 2048,  // 不限制，全量加载
    
    // ❌ 移除并发控制 - 使用默认值
    // downloadMaxJobs: 6,
    // parseMaxJobs: 2,
    
    // ❌ 移除缓存策略
    // lruCache: { maxSize: 64 },
    
    // ❌ 移除缩放级别限制
    // maxZoom: 22,
    
    // 基础设置
    enableDebug: false,           // 关闭调试
    displayBoxBounds: false,      // 关闭边界框
};

// 简化的位置调整 (预设值，不提供GUI调整)
const positionAdjustment = {
    offsetX: -467,
    offsetY: 163, 
    offsetZ: 0,
    rotationX: 0,
    rotationY: 0,
    rotationZ: -2.35,
    scale: 1.0
};

init();
addGUI();

function init() {
    console.log('🚀 开始初始化简化版Mapbox 3D Tiles示例');
    console.log('⚠️  注意: 此版本移除了LOD和性能优化，类似直接加载模式');
    
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

        map.addLayer(scene);
        console.log('🎭 ThreeJS场景层已添加');

        // 加载3D Tiles (简化模式)
        loadTileset();
    });
}

function addGUI() {
    const gui = new GUI();
    gui.width = 280;

    // 简化的选项面板 - 只保留基础控制
    const tileOptions = gui.addFolder('简化模式 Simple Mode');
    tileOptions.add(displayParams, 'errorTarget').min(50).max(200).name('错误阈值 (越大越简单)');
    tileOptions.add(displayParams, 'maxDepth').min(1).max(10).name('最大深度 (越小越简单)');
    tileOptions.add(displayParams, 'autoDisableRendererCulling').name('渲染剔除');
    
    // 重新加载按钮
    gui.add(exampleParams, 'reload').name('重新加载 Reload');
    
    tileOptions.open();
    gui.open();
}

function reloadTiles() {
    console.log('🔄 重新加载Tileset (简化模式)...');
    
    if (tileset) {
        scene.removeTileset(tileset);
        tileset = null;
        console.log('🗑️ 旧的Tileset已移除');
    }

    // 应用当前的显示参数到tileset选项
    const currentOptions = {
        ...tilesetOptions,
        errorTarget: displayParams.errorTarget,
        maxDepth: displayParams.maxDepth,
        autoDisableRendererCulling: displayParams.autoDisableRendererCulling,
    };

    console.log('⚙️ 简化模式配置:', currentOptions);
    
    tileset = scene.addTileset(currentOptions);
    
    // 应用预设的位置调整
    updateTilesetPosition();
    
    console.log('🚀 简化版Tileset加载开始');
    console.log('📊 性能说明:');
    console.log('  - 无高斯点云数量限制');
    console.log('  - 无并发下载控制'); 
    console.log('  - 无LRU缓存策略');
    console.log('  - 浅层LOD (maxDepth=' + displayParams.maxDepth + ')');
    console.log('  - 高错误阈值 (errorTarget=' + displayParams.errorTarget + ')');
}

function loadTileset() {
    console.log('📦 开始加载Tileset (简化模式)');
    
    // 合并显示参数到tileset选项
    const finalOptions = {
        ...tilesetOptions,
        ...displayParams
    };

    console.log('⚙️ 最终配置:', finalOptions);

    tileset = scene.addTileset(finalOptions);

    // 应用预设的位置微调
    updateTilesetPosition();
    
    // 基础事件监听
    tileset.addEventListener('tile-load', (e) => {
        console.log('🔍 瓦片加载:', e.tile.url);
    });

    tileset.addEventListener('loaded', () => {
        console.log('✅ 简化版Tileset加载完成!');
        console.log('📈 统计:', {
            tilesLoaded: tileset.tilesLoaded,
            tilesTotal: tileset.tilesTotal,
        });
    });
}

// 更新tileset位置的函数
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
    
    console.log('🔧 位置已更新 (预设值):', {
        position: tileset.position,
        rotation: tileset.rotation, 
        scale: tileset.scale
    });
}
