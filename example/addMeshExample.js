import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import * as THREE from 'three';
import { ThreejsSceneLayer } from 'mapbox-3d-tiles';

// Set your Mapbox token here or via environment variable
const MAPBOX_TOKEN = 'pk.eyJ1IjoiamsyNzY5OTM4NTciLCJhIjoiY2x0bW5ubHViMWVnaDJtcDZlYW92aWt2eCJ9.mBXt-vny9iFy4lzC0g1gbw';

const center = [120.60325, 31.362];

// const center = [120.636602, 31.419813];
const map = (window.map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: center,
    pitch: 0,
    zoom: 15,
    minZoom: 10,
    accessToken: MAPBOX_TOKEN,
}));

var scene = null;

map.on('load', function () {
    // 添加夜晚的天空效果
    map.setFog({
        range: [10, 20],
        color: '#242B4B',
        'high-color': '#161B36',
        'space-color': '#0B1026',
        'star-intensity': 0.3,
    });

    // 获得第一个symbol图层，添加 threejs场景在其下
    const layers = map.getStyle().layers;
    // Find the index of the first symbol layer in the map style.
    let firstSymbolId;
    for (const layer of layers) {
        if (layer.type === 'symbol') {
            firstSymbolId = layer.id;
            break;
        }
    }

    // 添加threejs场景，此处使用的傍晚的环境贴图
    scene = new ThreejsSceneLayer(
        {
            id: 'test-scene',
            refCenter: center,
            envTexture: './data/env/syferfontein_1d_clear_puresky_1k.hdr',
            envIntensity: 0.33,
        },
        firstSymbolId,
    );
    map.addLayer(scene);

    // 添加模型范围
    const fences = {
        '繁花商业中心.json': 'yellow',
    };

    for (const [fenceData, fenceColor] of Object.entries(fences)) {
        scene.addMesh({
            id: fenceData,
            data: `./data/suzhou/${fenceData}`,
            type: 'fence',
            color: fenceColor,
            opacity: 0.7,
            material: 'ripple',
            num: 5,
            speed: 1,
            getElevation: 20,
        });
    }

    // 添加道路线的贴图
    const texture = new THREE.TextureLoader().load('./data/suzhou/line.png');
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    // 添加模型
    const roads = {
        'roads0.geojson': {
            color: '#FF9900',
            speed: 2.5,
            radius: 12,
        },
        'roads1.geojson': {
            color: '#FF6B00',
            speed: 1.5,
            radius: 8,
        },
        'roads2.geojson': {
            color: '#00FFFF',
            speed: 1.0,
            radius: 5,
        },
        'roads3.geojson': {
            color: '#BBBBBB',
            speed: 1.0,
            radius: 3,
        },
    };
    for (const [roadData, roadInfo] of Object.entries(roads)) {
        const color = roadInfo.color;
        const speed = roadInfo.speed;
        const radius = roadInfo.radius;
        // 添加道路线
        scene.addMesh({
            id: roadData,
            data: `./data/suzhou/${roadData}`,
            type: 'tube',
            material: {
                map: texture,
                transparent: true,
                side: THREE.BackSide,
                depthWrite: true,
                depthTest: true,
                opacity: 1.0,
                color: color,
            },
            getTubeRadius: radius,
            speed: speed,
        });
    }

    // 添加建筑
    scene.addMesh({
        id: 'building-layer',
        data: './data/suzhou/buildings.geojson',
        type: 'building',
        color: '#18396E',
        getElevation: (f) => f.properties.height || f.properties.HEIGHT,
        opacity: 1.0,
        gradient: true,
        gradientColor: ['#18396E', '#AEFFFF'],
        gradientHeightMax: 100,
        gradientHeightMin: 0,
        lightColor: '#6EFFFF',
        lightCircleTime: 20,
        lightBorderWidth: 0.02,
        lightMixRate: 0.0,
        enableEdge: true,
        material: {
            edge: {
                color: 'black',
                opacity: 0.1,
                width: 2,
            },
        },
    });

    // 添加测试点

    const pointData = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                properties: {
                    w: 100,
                },
                geometry: {
                    type: 'Point',
                    coordinates: [120.595, 31.362],
                },
            },
            {
                type: 'Feature',
                properties: {
                    w: 200,
                },
                geometry: {
                    type: 'Point',
                    coordinates: [120.62, 31.36],
                },
            },
            {
                type: 'Feature',
                properties: {
                    w: 250,
                },
                geometry: {
                    type: 'Point',
                    coordinates: [120.60, 31.36],
                },
            },
        ],
    };

    scene.addMesh({
        "id": "point",
        "data": pointData,
        "type": "circle",
        
        material: 'radar',
        color: 'yellow',
        speed: 0.5,
        followWidth: 0.2,
        opacity: 0.5,
        // radius: 1000,
        getCircleRadius: f => f.properties.w,

    });
    
    scene.addMesh({
        "id": "point",
        "data": pointData,
        "type": "circle",
        
        material: 'ripple',
        color: 'yellow',
        speed: 1,
        num: 5,
        opacity: 1.0,
        // radius: 1000,
        getCircleRadius: f => f.properties.w,

    });

    scene.addMesh({
        "id": "point",
        "data": pointData,
        "type": "circle",
        
        material: 'spread',
        color: 'red',
        speed: 1.5,
        opacity: 1.0,
        // radius: 1000,
        getCircleRadius: f => f.properties.w,

    });
});
