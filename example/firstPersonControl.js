import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { GUI } from './lil-gui.module.min.js';
import { ThreejsSceneLayer, Tileset } from 'mapbox-3d-tiles';

import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Set your Mapbox token here or via environment variable
const MAPBOX_TOKEN = 'pk.eyJ1IjoiamsyNzY5OTM4NTciLCJhIjoiY2x0bW5ubHViMWVnaDJtcDZlYW92aWt2eCJ9.mBXt-vny9iFy4lzC0g1gbw';


var map = null;
var scene = null;
var tileset = null;
var model = null;
var control = null;
var firstPersonControl = null;

// const center = [118.90601008418084, 32.10375362598216];
// const center = [120.72170130140509, 31.851969896295344];
// const center = [120.70625,31.84791];
// const center = [120.16429092736354,33.327101201891736];
const center = [118.9108, 32.1169];

const exampleParams = {
    ToggleControl: ToggleControl,
};

init();
addGUI();

function addGUI() {
    // GUI
    const gui = new GUI();
    gui.width = 300;

    gui.add(exampleParams, 'ToggleControl');
    gui.open();
}

function init() {
    const refCenter = center;

    map = window.map = new mapboxgl.Map({
        container: 'map',
        center: center,
        zoom: 21,
        bearing: 0,
        pitch: 50,
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

        
        scene.addModel({
            id: 'NNU_2_new',
            rootUrl: './data/splats/',
            fileNames: 'surveyhouse.splat',
            position: [118.9062412507131, 32.10569531706962],
            rotation: [-90, 0, 0],
            scale: 1,
            offset: [0, 0, -30],
        });

        scene.addModel({
            id: 'SM_Tesla',
            rootUrl: './data/meshes/',
            fileNames: 'SM_Tesla.glb',
            position: [118.91083364082562, 32.116922266350315],
            rotation: [90, 0, 0],
            scale: 1,
            offset: [-26.8, -4.2, 1.6],
        });

        // initDrone();
        initCharacter();
    });
}


function ToggleControl() {
    if (firstPersonControl) {
        if (firstPersonControl.enabled) {
            firstPersonControl.disable();
        } else {
            const duration = 1000;
            const mapCameraPosition = firstPersonControl.UpdateMapCameraPosition();
            map.flyTo({ ...mapCameraPosition, duration: duration });

            setTimeout(() => {
                firstPersonControl.enable();
            }, duration);
        }
    }
}

function initCharacter() {
    scene.addModel({
        id: 'character',
        position: [118.91083364082562, 32.116922266350315],
        rotation: [90, 0, 0],
        scale: 1,
        offset: [-20, -2, 1.6],
        callback: (character) => {
            const root = character.children[0];

            new GLTFLoader().load('./data/meshes/Soldier.glb', function (gltf) {
                const model = gltf.scene;
                root.add(model);

                const mixer = new THREE.AnimationMixer(model);
                const gltfAnimations = gltf.animations;
                const animClip0 = mixer.clipAction(gltfAnimations[0]);
                const animClip1 = mixer.clipAction(gltfAnimations[3]);
                const animClip2 = mixer.clipAction(gltfAnimations[1]);

                const firstPersonControlOptions = {
                    type: 'firstPerson',
                    model: model,
                    mixer: mixer,
                    idleAnimationAction: animClip0,
                    walkAnimationAction: animClip1,
                    runAnimationAction: animClip2,
                    runVelocity: 5,
                    walkVelocity: 2,
                    rotateVeclocity: 0.02,
                    upVelocity: 0.01,
                    rotateOffset: true,
                };

                firstPersonControl = scene.setControls(firstPersonControlOptions);
                firstPersonControl.disable();
            });
        },
    });
}

function initDrone() {
    scene.addModel({
        id: 'drone',
        position: [118.91083364082562, 32.116922266350315],
        rotation: [90, 0, 0],
        scale: 10,
        offset: [-20, -2, 1.6],
        callback: (drone) => {
            const root = drone.children[0];

            new THREE.GLTFLoader().load('./data/meshes/Drone.glb', function (gltf) {
                const model = gltf.scene;
                root.add(model);

                const mixer = new THREE.AnimationMixer(model);
                const gltfAnimations = gltf.animations;
                const animClip = mixer.clipAction(gltfAnimations[0]);

                const firstPersonControlOptions = {
                    type: 'firstPerson',
                    model: model,
                    mixer: mixer,
                    idleAnimationAction: animClip,
                    runVelocity: 20,
                    walkVelocity: 10,
                    rotateVeclocity: 0.02,
                    upVelocity: 0.1,
                    rotateOffset: false,
                };

                firstPersonControl = scene.setControls(firstPersonControlOptions);
                firstPersonControl.disable();
            });
        },
    });
}
