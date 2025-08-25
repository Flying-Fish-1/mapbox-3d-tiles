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
    testGLB: testGLBFiles,
    switchToNNU: switchToNNU,
    addTestCube: addTestCube,
    forceAdministration: forceAdministration,
};

var map = null;
var scene = null;
var tileset = null;

const center = [114.21532280695719, 22.69055458604008]; // 香港中文大学深圳行政楼

// TODO: 需要将数据发布到服务器上，并修改url
// 位置微调参数 (根据调试结果预设)
const positionAdjustment = {
    offsetX: -467,     // 根据图片中的调试值
    offsetY: 163,      // 根据图片中的调试值  
    offsetZ: 0,        // 根据图片中的调试值
    rotationX: 0,      // 根据图片中的调试值
    rotationY: 0,      // 根据图片中的调试值
    rotationZ: -2.35,  // 根据图片中的调试值
    scale: 1.0         // 根据图片中的调试值
};

// 坐标显示对象
const coordinateDisplay = {
    originalLat: 22.69055458604008,
    originalLng: 114.21532280695719,
    currentLat: 22.69202235,  // 预设的调整后纬度
    currentLng: 114.21076265, // 预设的调整后经度
    displayInfo: function() {
        console.log('📍 坐标信息:');
        console.log(`  原始坐标: ${this.originalLng.toFixed(8)}°, ${this.originalLat.toFixed(8)}°`);
        console.log(`  当前坐标: ${this.currentLng.toFixed(8)}°, ${this.currentLat.toFixed(8)}°`);
        console.log(`  偏移距离: ${this.getOffsetDistance().toFixed(2)}米`);
    },
    getOffsetDistance: function() {
        // 简单的距离计算 (大致估算)
        const latDiff = this.currentLat - this.originalLat;
        const lngDiff = this.currentLng - this.originalLng;
        const latMeters = latDiff * 111000; // 1度纬度约111km
        const lngMeters = lngDiff * 111000 * Math.cos(this.originalLat * Math.PI / 180);
        return Math.sqrt(latMeters * latMeters + lngMeters * lngMeters);
    }
};

// 全局坐标信息对象 (供GUI使用)
var coordInfo = {
    originalCoord: `原始: 114.21532281°, 22.69055459°`,
    currentCoord: `当前: 114.21076265°, 22.69202235°`,  // 预设的调整后坐标
    offsetDistance: `偏移: 494.63米`,  // 预设的偏移距离
    showCoordinates: function() {
        coordinateDisplay.displayInfo();
    },
    resetPosition: function() {
        positionAdjustment.offsetX = 0;
        positionAdjustment.offsetY = 0;
        positionAdjustment.offsetZ = 0;
        positionAdjustment.rotationX = 0;
        positionAdjustment.rotationY = 0;
        positionAdjustment.rotationZ = 0;
        positionAdjustment.scale = 1.0;
        updateTilesetPosition();
    },
    setOptimalPosition: function() {
        positionAdjustment.offsetX = -467;
        positionAdjustment.offsetY = 163;
        positionAdjustment.offsetZ = 0;
        positionAdjustment.rotationX = 0;
        positionAdjustment.rotationY = 0;
        positionAdjustment.rotationZ = -2.35;
        positionAdjustment.scale = 1.0;
        updateTilesetPosition();
        // 更新GUI显示
        if (typeof gui !== 'undefined') {
            gui.updateDisplay();
        }
    }
};

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


init();
addGUI();

animate();

function init() {
    const refCenter = center;

    map = window.map = new mapboxgl.Map({
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
                sceneReady: scene ? true : false,
                renderer: scene ? scene.renderer : null,
                camera: scene ? scene.camera : null
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
    
    // 位置调整控制面板
    const positionFolder = gui.addFolder('位置调整 Position Adjustment');
    positionFolder.add(positionAdjustment, 'offsetX', -1000, 1000).onChange(updateTilesetPosition);
    positionFolder.add(positionAdjustment, 'offsetY', -1000, 1000).onChange(updateTilesetPosition);
    positionFolder.add(positionAdjustment, 'offsetZ', -1000, 1000).onChange(updateTilesetPosition);
    positionFolder.add(positionAdjustment, 'rotationX', -Math.PI, Math.PI).onChange(updateTilesetPosition);
    positionFolder.add(positionAdjustment, 'rotationY', -Math.PI, Math.PI).onChange(updateTilesetPosition);
    positionFolder.add(positionAdjustment, 'rotationZ', -Math.PI, Math.PI).onChange(updateTilesetPosition);
    positionFolder.add(positionAdjustment, 'scale', 0.1, 5.0).onChange(updateTilesetPosition);
    positionFolder.open();
    
    // 坐标显示面板
    const coordFolder = gui.addFolder('坐标信息 Coordinates');
    
    coordFolder.add(coordInfo, 'showCoordinates').name('显示详细坐标');
    coordFolder.add(coordInfo, 'setOptimalPosition').name('使用最佳位置');
    coordFolder.add(coordInfo, 'resetPosition').name('重置到原点');
    
    // 创建只读显示项
    const originalController = coordFolder.add(coordInfo, 'originalCoord').name('原始坐标').listen();
    const currentController = coordFolder.add(coordInfo, 'currentCoord').name('当前坐标').listen();
    const offsetController = coordFolder.add(coordInfo, 'offsetDistance').name('偏移距离').listen();
    
    // 禁用这些控制器的输入
    originalController.domElement.style.pointerEvents = 'none';
    currentController.domElement.style.pointerEvents = 'none';
    offsetController.domElement.style.pointerEvents = 'none';
    
    coordFolder.open();
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
    gui.add(exampleParams, 'testGLB').name('测试GLB文件');
    gui.add(exampleParams, 'switchToNNU').name('切换到NNU(对比)');
    gui.add(exampleParams, 'addTestCube').name('添加测试立方体');
    gui.add(exampleParams, 'forceAdministration').name('强制修复Administration');
    gui.open();
}

// 测试GLB文件是否可访问
function testGLBFiles() {
    console.log('🧪 开始测试GLB文件可访问性...');
    
    // 测试administration的一些GLB文件
    const testFiles = [
        'http://localhost:8804/splat-3dtiles/administration/15/tile_15_16383_16384.glb',
        'http://localhost:8804/splat-3dtiles/administration/16/tile_16_32767_32768.glb',
        'http://localhost:8804/splat-3dtiles/administration/17/tile_17_65535_65536.glb'
    ];
    
    testFiles.forEach((url, index) => {
        fetch(url, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    console.log(`✅ GLB文件 ${index + 1} 可访问:`, url);
                    console.log(`📏 文件大小: ${response.headers.get('content-length')} bytes`);
                } else {
                    console.warn(`⚠️ GLB文件 ${index + 1} 访问异常:`, response.status, url);
                }
            })
            .catch(error => {
                console.error(`❌ GLB文件 ${index + 1} 访问失败:`, error, url);
            });
    });
}

// 切换到NNU数据进行对比
function switchToNNU() {
    console.log('🔄 切换到NNU数据进行对比...');
    
    // 暂时保存原始配置
    const originalUrl = tilesetOptions.url;
    const originalCenter = [...center];
    
    // 切换到NNU配置
    tilesetOptions.url = 'http://localhost:8804/splat-3dtiles/NNU_2_opt/tileset.json';
    
    // 切换地图中心到南京
    const nnuCenter = [118.91083364082562, 32.116922266350315];
    map.flyTo({
        center: nnuCenter,
        zoom: 15
    });
    
    // 重新加载瓦片
    reloadTiles();
    
    console.log('📍 已切换到NNU数据，观察是否正常显示');
    console.log('💡 如果NNU正常显示，说明系统工作正常，问题在于administration数据');
}

// 添加测试立方体验证3D渲染
function addTestCube() {
    console.log('🧊 添加测试立方体验证3D渲染...');
    
    if (!scene) {
        console.error('❌ 场景未初始化！');
        return;
    }
    
    try {
        // 创建一个简单的立方体
        const geometry = new THREE.BoxGeometry(50, 50, 50);
        const material = new THREE.MeshBasicMaterial({ 
            color: 0x00ff00, 
            wireframe: true 
        });
        const cube = new THREE.Mesh(geometry, material);
        
        // 设置立方体位置（在地图中心上方）
        cube.position.set(0, 0, 100);
        
        // 添加到场景
        scene.add(cube);
        
        console.log('✅ 测试立方体已添加:', cube);
        console.log('📍 立方体位置:', cube.position);
        
        // 立方体旋转动画
        const rotateCube = () => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            requestAnimationFrame(rotateCube);
        };
        rotateCube();
        
    } catch (error) {
        console.error('❌ 添加测试立方体失败:', error);
    }
}

// 强制加载administration数据并修复transform问题
function forceAdministration() {
    console.log('🔧 强制加载和修复Administration数据...');
    
    // 切换回administration配置
    tilesetOptions.url = 'http://localhost:8804/splat-3dtiles/administration/tileset.json';
    
    // 使用更激进的参数强制加载
    const forceOptions = {
        ...tilesetOptions,
        errorTarget: 50, // 大幅降低精度要求
        maxDepth: 16, // 限制深度
        displayBoxBounds: true,
        displayActiveTiles: true,
        autoDisableRendererCulling: false,
        // 尝试强制位置
        onLoadTile: (tile) => {
            console.log('🎯 强制调整瓦片位置:', tile);
            if (tile.scene) {
                // 重置变换矩阵
                tile.scene.matrix.identity();
                tile.scene.updateMatrixWorld(true);
            }
        }
    };
    
    if (tileset) {
        tileset.remove();
    }
    
    console.log('🚀 使用强制参数重新加载...');
    tileset = scene.addTileset(forceOptions);
    
    // 尝试多个不同的位置
    const positions = [
        [0, 0, -100],
        [0, 0, 0],
        [0, 0, 100],
        [0, 0, -1000],
        [100, 100, -50],
        [-100, -100, -50]
    ];
    
    let posIndex = 0;
    const tryNextPosition = () => {
        if (posIndex < positions.length) {
            const pos = positions[posIndex];
            tileset.position.set(pos[0], pos[1], pos[2]);
            console.log(`📍 尝试位置 ${posIndex + 1}:`, pos);
            posIndex++;
            setTimeout(tryNextPosition, 3000); // 每3秒尝试下一个位置
        }
    };
    
    // 开始尝试不同位置
    setTimeout(tryNextPosition, 2000);
    
    // 强制触发渲染
    tileset.addEventListener('loaded', () => {
        console.log('🎉 Administration强制加载完成!');
        console.log('📊 最终统计:', {
            tilesLoaded: tileset.tilesLoaded,
            position: tileset.position,
            scale: tileset.scale,
            visible: tileset.visible
        });
    });
}

function animate() {
    requestAnimationFrame(animate);
    if (tileset) {
        tileset.setDebugParams(debugParams);
        tileset.setDisplayParams(displayPamams);
    }
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
    
    // 计算调整后的经纬度 (简化计算)
    // 注意：这是一个近似计算，真实的3D到地理坐标转换更复杂
    const meterPerDegreeLat = 111000; // 1度纬度约111km
    const meterPerDegreeLng = 111000 * Math.cos(coordinateDisplay.originalLat * Math.PI / 180);
    
    coordinateDisplay.currentLat = coordinateDisplay.originalLat + (positionAdjustment.offsetY / meterPerDegreeLat);
    coordinateDisplay.currentLng = coordinateDisplay.originalLng + (positionAdjustment.offsetX / meterPerDegreeLng);
    
    console.log('🔧 Tileset位置已更新:', {
        position: tileset.position,
        rotation: tileset.rotation,
        scale: tileset.scale
    });
    
    // 显示坐标信息
    coordinateDisplay.displayInfo();
    
    // 更新GUI中的坐标显示 (如果coordInfo已定义)
    if (typeof coordInfo !== 'undefined') {
        coordInfo.currentCoord = `当前: ${coordinateDisplay.currentLng.toFixed(8)}°, ${coordinateDisplay.currentLat.toFixed(8)}°`;
        coordInfo.offsetDistance = `偏移: ${coordinateDisplay.getOffsetDistance().toFixed(2)}米`;
    }
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
    console.log('📦 Tileset Object:', tileset);
    
    // 监听所有可能的事件
    tileset.addEventListener('tile-load-start', (e) => {
        console.log('🔄 开始加载瓦片:', e.detail);
    });
    
    tileset.addEventListener('tile-load-end', (e) => {
        console.log('✅ 瓦片加载完成:', e.detail);
        // 检查瓦片内容
        if (e.detail && e.detail.tile) {
            console.log('📦 瓦片详情:', {
                tile: e.detail.tile,
                geometry: e.detail.tile.scene?.children?.length || 0,
                boundingBox: e.detail.tile.boundingBox,
                url: e.detail.tile.content?.uri
            });
        }
    });
    
    tileset.addEventListener('load-progress', (e) => {
        console.log('📊 加载进度:', e.detail);
    });
    
    tileset.addEventListener('loaded', () => {
        console.log('🎉 Tileset 完全加载!');
        console.log('📈 最终统计:', {
            tilesLoaded: tileset.tilesLoaded,
            tilesTotal: tileset.tilesTotal,
            boundingBox: tileset.boundingBox,
            position: tileset.position
        });
    });
    
    tileset.addEventListener('error', (e) => {
        console.error('❌ 加载错误:', e.detail);
    });
    
    // 定时检查加载状态
    const checkInterval = setInterval(() => {
        console.log('⏰ 状态检查:', {
            tilesLoaded: tileset.tilesLoaded || 0,
            tilesTotal: tileset.tilesTotal || 0,
            loadingProgress: tileset.loadingProgress || 0,
            visible: tileset.visible,
            position: tileset.position,
            scale: tileset.scale
        });
        
        // 如果加载完成，停止检查
        if (tileset.tilesLoaded > 0 && tileset.tilesLoaded === tileset.tilesTotal) {
            clearInterval(checkInterval);
            console.log('🏁 检查完成，停止监控');
        }
    }, 2000); // 每2秒检查一次
    
    // 10秒后如果还没有瓦片加载，报告问题
    setTimeout(() => {
        if (!tileset.tilesLoaded || tileset.tilesLoaded === 0) {
            console.warn('⚠️ 10秒内没有瓦片加载，可能存在问题:');
            console.warn('检查网络请求:', tilesetOptions.url);
        }
    }, 10000);
}
