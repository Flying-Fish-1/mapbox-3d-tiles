import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { GUI } from './lil-gui.module.min.js';
import { ThreejsSceneLayer, Tileset } from 'mapbox-3d-tiles';

// Set your Mapbox token here or via environment variable
const MAPBOX_TOKEN = 'pk.eyJ1IjoiamsyNzY5OTM4NTciLCJhIjoiY2x0bW5ubHViMWVnaDJtcDZlYW92aWt2eCJ9.mBXt-vny9iFy4lzC0g1gbw';

const displayPamams = {
    errorTarget: 6,
    //   errorThreshold: 60,
    maxDepth: 15,
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

// TODO: 需要將 3dtiles 數據發布到文件服務

const center = [121.13, 31.437];
const tiles3DLayerUrl = 'http://localhost:8804/taicang_test_3dtiles/qingxie_3dtiles/tileset.json';

// const center = [118.912026, 32.117417];
// const tiles3DLayerUrl = 'http://localhost:8804/NNU_test_3dtiles/tileset.json'

// const center = [120.70625,31.84791];
// const tiles3DLayerUrl = "http://localhost:8804/splat-3dtiles/YONGLIAN_2022/tileset.json";

// const center = [114.02639476404397, 22.444079016023963];
// const tiles3DLayerUrl =  "https://services1.map.gov.hk/api/3d-data/3dtiles/ntwc1_f2/tileset.json?key=ad5940a63bd344c48b0351ef1c7a905e",

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
        new mapboxgl.Marker({
            color: 'red',
        })
            .setLngLat(center)
            .addTo(map);

        scene = new ThreejsSceneLayer({
            id: 'test-scene',
            refCenter: refCenter,
        });

        map.addLayer(scene);

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

function animate() {
    requestAnimationFrame(animate);
    if (tileset) {
        tileset.setDebugParams(debugParams);
        tileset.setDisplayParams(displayPamams);
    }
}

function reloadTiles() {
    if (tileset) {
        tileset.remove();
    }

    tileset = scene.addTileset({
        id: 'test-tileset',
        url: tiles3DLayerUrl,
    });
}
