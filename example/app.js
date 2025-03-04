
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


// Set your Mapbox token here or via environment variable
const MAPBOX_TOKEN = 'pk.eyJ1IjoiamsyNzY5OTM4NTciLCJhIjoiY2x0bW5ubHViMWVnaDJtcDZlYW92aWt2eCJ9.mBXt-vny9iFy4lzC0g1gbw';


import { GUI } from "./lil-gui.module.min.js";
import { ThreejsSceneLayer, Tileset} from 'mapbox-3d-tiles'


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
  reload: reloadTiles
};

var map = null;
var scene = null;
var tileset = null;

init();
addGUI();

animate();

function init() {
  const center = [114.02639476404397, 22.444079016023963];
  const refCenter = center;

  map = window.map = new mapboxgl.Map({
    container: "map",
    center: center,
    zoom: 15,
    bearing: 0,
    pitch: 0,
    style: "mapbox://styles/mapbox/streets-v10",
    accessToken: MAPBOX_TOKEN,
  });

  map.on("load", function () {
    new mapboxgl.Marker({
      color: "red",
    })
      .setLngLat(center)
      .addTo(map);

      
    scene = new ThreejsSceneLayer({
        id: "test-scene",
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

  const tileOptions = gui.addFolder("Tiles Options");
  tileOptions.add(displayPamams, "displayActiveTiles");
  tileOptions.add(displayPamams, "autoDisableRendererCulling");
  tileOptions.add(displayPamams, "errorTarget").min(0).max(50);
  tileOptions.add(displayPamams, "maxDepth").min(1).max(100);
  tileOptions.open();

  const debug = gui.addFolder("Debug Options");
  debug.add(debugParams, "enableDebug");
  debug.add(debugParams, "displayBoxBounds");
  debug.add(debugParams, "displaySphereBounds");
  debug.add(debugParams, "displayRegionBounds");
  debug.add(debugParams, "colorMode", Tileset.getColorModes() );
  debug.open();

  gui.add( exampleParams, 'reload' );
  gui.open();
}

function animate() {
	requestAnimationFrame( animate );
    if (tileset) {
        tileset.setDebugParams(debugParams);
        tileset.setDisplayParams(displayPamams);
    }
}

function reloadTiles() {
  const center = [114.02639476404397, 22.444079016023963];
  if (tileset && tileset.id !== "test-model3") {
      map.jumpTo({ center });
      scene.setRefCenter(center);
  }
  
  if (tileset) {
      scene.removeTileset(tileset.id);
  }
  
  tileset = scene.addTileset({
      id: "test-model3",
      url: "https://services1.map.gov.hk/api/3d-data/3dtiles/ntwc1_f2/tileset.json?key=ad5940a63bd344c48b0351ef1c7a905e",
  });
}
