import { AnimationAction } from 'three';
import { AnimationMixer } from 'three';
import { ColorRepresentation } from 'three';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { CustomLayerInterface } from 'mapbox-gl';
import { Feature } from 'geojson';
import { GeoJSON as GeoJSON_2 } from 'geojson';
import { Geometry } from 'geojson';
import { Group } from 'three';
import { Intersection } from 'three';
import { LineString } from 'geojson';
import { LngLatLike } from 'mapbox-gl';
import { Map as Map_2 } from 'mapbox-gl';
import { Material } from 'three';
import { MercatorCoordinate } from 'mapbox-gl';
import { Mesh } from 'three';
import { MeshBasicMaterialParameters } from 'three';
import { Object3D } from 'three';
import { Object3DEventMap } from 'three';
import { PerspectiveCamera } from 'three';
import { Point } from 'mapbox-gl';
import { Point as Point_2 } from 'geojson';
import { Polygon } from 'geojson';
import { Position as Position_2 } from 'geojson';
import { Scene } from 'three';
import { Side } from 'three';
import { Texture } from 'three';
import { TilesRenderer } from '3d-tiles-renderer';
import { UnionToIntersection } from 'utility-types';
import { Vector2 } from 'three';
import { Vector3 } from 'three';
import { WebGLRenderer } from 'three';

declare type AlongPathControlsOptions = {
    path?: Position[];
    points?: Vector3[];
    pathClose?: boolean;
    duration?: number;
    cameraPitch?: number;
    cameraBearing?: number;
    cameraDistance?: number;
};

declare type Anchor = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'front' | 'back';

declare type AroundPointControlsOptions = {
    position?: Position;
    point?: Vector3;
    duration?: number;
    isClockwise?: boolean;
    cameraBearing?: number;
    cameraPitch?: number;
    cameraDistance?: number;
};

/**
 * Similar to the WorkerPool class except it creates and destroys workers automatically with a maximum of `maxWorkers` workers.
 * Workers are terminated when it is idle for at least `idleTimeElapsedBeforeRelease` milliseconds.
 */
export declare class AutoReleaseWorkerPool extends WorkerPool {
    /**
     * Default options for the constructor.
     * Override to change the defaults.
     */
    static DefaultOptions: AutoReleaseWorkerPoolOptions;
    private readonly _maxWorkers;
    private readonly _createWorkerAsync;
    private readonly _options;
    constructor(maxWorkers: number, createWorkerAsync: () => Promise<Worker>, options?: AutoReleaseWorkerPoolOptions);
    push(action: (worker: Worker, onComplete: () => void) => void): string;
    protected _execute(workerInfo: WorkerInfo, actionId: string, action: (worker: Worker, onComplete: () => void) => void): void;
}

/**
 * Options for AutoReleaseWorkerPool
 */
export declare interface AutoReleaseWorkerPoolOptions {
    /**
     * Idle time elapsed before workers are terminated.
     */
    idleTimeElapsedBeforeRelease: number;
}

/**
 * Given an array of member function names as strings, replace all of them
 * with bound versions that will always refer to `context` as `this`. This
 * is useful for classes where otherwise event bindings would reassign
 * `this` to the evented object or some other value: this lets you ensure
 * the `this` value always.
 *
 * @param fns list of member function names
 * @param context the context value
 * @example
 * function MyClass() {
 *   bindAll(['ontimer'], this);
 *   this.name = 'Tom';
 * }
 * MyClass.prototype.ontimer = function() {
 *   alert(this.name);
 * };
 * var myClass = new MyClass();
 * setTimeout(myClass.ontimer, 100);
 * @private
 */
export declare function bindAll(fns: Array<string>, context: unknown): void;

declare type BuildingMeshOptions = {
    type: 'building';
} & BuildingOptions;

declare type BuildingOptions = {
    color?: ColorRepresentation | undefined;
    opacity?: number | undefined;
    getElevation?: (feature: Feature) => number | number | undefined;
    getElevationBase?: (feature: Feature) => number | number | undefined;
    baseMaterial?: string | undefined;
    enableEdge?: boolean | undefined;
    gradient?: boolean | undefined;
    gradientColor?: ColorRepresentation | ColorRepresentation[] | undefined;
    gradientHeightMax?: number | undefined;
    gradientHeightMin?: number | undefined;
    lightColor?: ColorRepresentation | undefined;
    lightCircleTime?: number | undefined;
    lightBorderWidth?: number | undefined;
    lightMixRate?: number | undefined;
    material?: {
        top?: {
            color?: ColorRepresentation | undefined;
            opacity?: number | undefined;
            texture?: Texture | undefined;
            transparent?: boolean | undefined;
        };
        wall?: {
            color?: ColorRepresentation | undefined;
            opacity?: number | undefined;
            texture?: Texture | undefined;
            transparent?: boolean | undefined;
        };
        edge?: {
            color?: ColorRepresentation | undefined;
            opacity?: number | undefined;
            width?: number | undefined;
        };
    };
};

declare type CircleMeshOptions = {
    type: 'circle';
} & CircleOptions;

declare type CircleOptions = {
    material?: Material | string | undefined;
    color?: ColorRepresentation | undefined;
    opacity?: number | undefined;
    radius?: number | undefined;
    segments?: number | undefined;
    num?: number | undefined;
    speed?: number | undefined;
    followWidth?: number | undefined;
    getCircleRadius?: (feature: Feature) => number | number | undefined;
};

declare type ControlsOptions = {
    type: any;
} & (FirstPersonControlsOptions | AlongPathControlsOptions | AroundPointControlsOptions | undefined);

/**
 * Given a destination object and optionally many source objects,
 * copy all properties from the source objects into the destination.
 * The last source object given overrides properties from previous
 * source objects.
 *
 * @param dest destination object
 * @param sources sources from which properties are pulled
 * @private
 */
export declare function extend<T extends object, U extends Array<object | null | undefined>>(dest: T, ...sources: U): T & UnionToIntersection<U[number]>;

declare type FeatureData = {
    features: Feature[];
    centroid: Position_2;
    geometries: SeparatedGeometries;
};

declare type FenceMeshOptions = {
    type: 'fence';
} & FenceOptions;

declare type FenceOptions = {
    material?: Material | string | undefined;
    color?: ColorRepresentation | undefined;
    opacity?: number | undefined;
    num?: number | undefined;
    speed?: number | undefined;
    height?: number | undefined;
    getElevation?: (feature: Feature) => number | number | undefined;
};

declare type FirstPersonControlsOptions = {
    model?: Object3D;
    mixer?: AnimationMixer;
    idleAnimationAction?: AnimationAction;
    walkAnimationAction?: AnimationAction;
    runAnimationAction?: AnimationAction;
    runVelocity?: number;
    walkVelocity?: number;
    upVelocity?: number;
    rotateVeclocity?: number;
    scaleVeclocity?: number;
    fadeDuration?: number;
    modelRotateOffset?: boolean;
    modelRotateAxis?: Vector3;
    objectHeight?: number;
    cameraPitch?: number;
    cameraBearing?: number;
    cameraDistance?: number;
    cameraMaxDistance?: number;
    cameraMinDistance?: number;
    cameraMaxPitch?: number;
    cameraMinPitch?: number;
    cameraMaxBearing?: number;
    cameraMinBearing?: number;
};

declare class HeatmapObject extends SceneObject {
    _options: HeatmapOptions;
    _meshObject: Mesh | undefined;
    _heatmap: any | undefined;
    _heatmapCanvas: HTMLElement | undefined;
    _boundVertices: Vector3[];
    _dataVertices: Vector3[];
    constructor(options: HeatmapOptions);
    updateSceneTransform(): void;
    buildHeatmap(): void;
    updateSceneTime(time: number, delta: number): void;
    addToScene(scene: ThreejsSceneLayer): this;
    removeFromScene(): this;
}

declare type HeatmapOptions = {
    id: string;
    data: Position[];
    coordinates?: Position[];
    width?: number;
    height?: number;
    radius?: number;
    blur?: number;
    gradient?: any;
    widthSegments?: number;
    heightSegments?: number;
    heightRatio?: number;
    depthTest?: boolean;
    opacity?: number;
};

export declare interface IDisposable {
    /**
     * Releases all held resources
     */
    dispose(): void;
}

declare class LabelObject extends SceneObject {
    _object: Object3D;
    _options: LabelOptions;
    _label: CSS2DObject | null;
    constructor(obejct: Object3D, options: LabelOptions);
    updateSceneTransform(): void;
    addToScene(scene: ThreejsSceneLayer): this;
    removeFromScene(): this;
    private _getAnchor;
}

declare type LabelOptions = {
    id: string;
    element?: HTMLElement;
    offset?: [number, number];
    anchor?: Anchor;
    color?: string;
    scale?: number;
    draggable?: boolean;
    clickTolerance?: number;
    rotation?: number;
    rotationAlignment?: string;
    pitchAlignment?: string;
    occludedOpacity?: number;
    className?: string;
};

declare type LineMeshOptions = {
    type: 'line';
} & LineOptions;

declare type LineOptions = {
    lineWidth?: number | undefined;
    map?: {
        value: null;
    };
    useMap?: number | undefined;
    alphaMap?: {
        value: null;
    };
    useAlphaMap?: number | undefined;
    color?: ColorRepresentation | undefined;
    opacity?: number | undefined;
    resolution?: Vector2 | undefined;
    sizeAttenuation?: number | undefined;
    dashArray?: number | undefined;
    dashOffset?: number | undefined;
    dashRatio?: number | undefined;
    useDash?: number | undefined;
    visibility?: number | undefined;
    alphaTest?: number | undefined;
    repeat?: Vector2 | undefined;
    offset?: Vector2 | undefined;
    getLineWidth?: (feature: Feature) => number | number | undefined;
};

declare class MarkerObject extends SceneObject {
    _options: MarkerOptions;
    _markers: CSS2DObject[];
    constructor(options: MarkerOptions);
    updateSceneTransform(): void;
    addToScene(scene: ThreejsSceneLayer): this;
    removeFromScene(): this;
}

declare type MarkerOptions = {
    id: string;
    data: {
        element?: HTMLElement;
        position?: Position;
        point?: Vector3;
    }[];
};

declare type MeshBaseOptions = {
    id: string;
    data: string | GeoJSON_2 | Geometry[];
    callback?: (object: Object3D, featureData: FeatureData) => void;
};

declare class MeshObject extends SceneObject {
    _options: MeshOptions;
    _featrueData: FeatureData | undefined;
    _meshObject: Object3D | undefined;
    constructor(options: MeshOptions);
    updateSceneTransform(): void;
    updateSceneTime(time: number, delta: number): void;
    addToScene(scene: ThreejsSceneLayer): this;
    removeFromScene(): this;
}

declare type MeshOptions = MeshBaseOptions & (WaterMeshOptions | LineMeshOptions | PolygonMeshOptions | BuildingMeshOptions | FenceMeshOptions | CircleMeshOptions | TubeMeshOptions);

export declare class Model extends SceneObject {
    _options: ModelOptions;
    _animGroup: Group | undefined;
    constructor(options: ModelOptions);
    addToScene(scene: ThreejsSceneLayer): this;
    removeFromScene(): this;
    private onLoadModel;
    private loadAssetContainer;
    updateSceneTransform(): void;
    setPosition(position: number[]): void;
    updateModelTransform(model: Group): void;
}

export declare type ModelOptions = {
    id: string;
    rootUrl?: string;
    fileName?: string | null | undefined;
    fileNames?: string | readonly string[] | null | undefined;
    position: number[];
    offset?: number[];
    rotation?: number[];
    scale?: number;
    ifcWasmPath?: string;
    dracoLoaderPath?: string;
    ktx2LoaderPath?: string;
    callback?: (model: Group) => void;
};

declare class PathObject extends SceneObject {
    private _object;
    private _options;
    private _path;
    private _time;
    constructor(object: Object3D, options: PathOptions);
    updateSceneTransform(): void;
    updateSceneTime(time: number, delta: number): void;
}

declare type PathOptions = {
    id: string;
    path?: Position[];
    points?: Vector3[];
    duration: number;
    callback?: () => void;
};

declare type PolygonMeshOptions = {
    type: 'polygon';
} & PolygonOptions;

declare type PolygonOptions = {
    color?: ColorRepresentation | undefined;
    opacity?: number | undefined;
};

declare type Position = number[];

export declare class SceneObject extends Object3D {
    readonly isSceneObject: true;
    _parentObjectName: string;
    _parentObject: Object3D | undefined;
    _scene: ThreejsSceneLayer | undefined;
    onSceneUpdate: (event: SceneUpdateEvent) => void;
    onSceneRecenter: (event: SceneRecenterEvent) => void;
    constructor();
    getOrAddParentObject(): Object3D;
    addToScene(scene: ThreejsSceneLayer): this;
    removeFromScene(): this;
    updateSceneTime(time: number, delta: number): void;
    updateSceneTransform(): void;
    remove(...object: Object3D[]): this;
    remove(): this;
}

export declare type SceneRecenterEvent = {};

export declare const SceneRecenterEventType = "scene-recenter";

export declare type SceneUpdateEvent = {
    time: number;
    delta: number;
};

export declare const SceneUpdateEventType = "scene-update";

declare type SeparatedGeometries = {
    pointFeatures: {
        geometry: Point_2;
        __source: SourceInfo;
    }[];
    lineFeatures: {
        geometry: LineString;
        __source: SourceInfo;
    }[];
    polygonFeatures: {
        geometry: Polygon;
        __source: SourceInfo;
    }[];
    polygonOutlineFeatures: {
        geometry: LineString;
        __source: SourceInfo;
    }[];
};

declare type SourceInfo = {
    object: Feature;
    index: number;
};

export declare class ThreejsSceneLayer implements CustomLayerInterface {
    readonly id: string;
    readonly type: 'custom';
    readonly slot?: string;
    readonly renderingMode: '3d';
    private _helper;
    private _map?;
    private _refCenter;
    private _worldMatrix;
    private _worldMatrixInv;
    private _options;
    private _renderer;
    private _scene;
    private _sceneRoot;
    private _camera;
    private _startTime;
    private _lastTime;
    private _sceneControls;
    private static _GetDefaultOptions;
    constructor(options: ThreejsSceneLayerProps);
    onAdd: (map: Map_2, gl: WebGL2RenderingContext) => void;
    onRemove: (map: Map_2, gl: WebGL2RenderingContext) => void;
    render: (gl: WebGL2RenderingContext, matrix: number[]) => void;
    private _update;
    addEventListener(type: any, listener: any): void;
    removeEventListener(type: any, listener: any): void;
    dispatchEvent(event: any): void;
    update(): void;
    getSceneRoot(): Group;
    getRenderer(): ThreejsSceneRenderer;
    getWebGLRenderer(): WebGLRenderer;
    getCamera(): PerspectiveCamera;
    getScene(): Scene;
    getMap(): Map_2;
    getRefCenter(): LngLatLike;
    setRefCenter(center: LngLatLike): void;
    toScenePosition(position: LngLatLike | Position, altitude?: number): Vector3;
    toMapPosition(position: Vector3): Position;
    toMercatorCoordinate(position: Vector3): MercatorCoordinate;
    setEnvTexture(envTexture: string): void;
    setEnvIntensity(intensity: number): void;
    compileAsync(model: Object3D): Promise<Object3D>;
    findObjectByName(name: string, root?: Object3D): Object3D | undefined;
    intersectObjects(point: Point, objects?: Object3D[] | Object3D | null): Intersection<Object3D<Object3DEventMap>>[];
    setControls(controlsOptions: ControlsOptions): any;
    addTileset(tilesetOptions: TilesetOptions): Tileset;
    addModel(modelOptions: ModelOptions): Model;
    addMesh(meshOptions: MeshOptions): MeshObject;
    addLabel(object: Object3D, options: LabelOptions): LabelObject;
    addPath(object: Object3D, options: PathOptions): PathObject;
    addMarker(options: MarkerOptions): MarkerObject;
    addHeatmap(options: HeatmapOptions): HeatmapObject;
}

export declare type ThreejsSceneLayerProps = {
    id: string;
    slot?: string;
    refCenter?: LngLatLike;
    envTexture?: string;
    envIntensity?: number;
    createLight?: boolean;
};

declare class ThreejsSceneRenderer {
    private _map;
    private _renderer;
    private _labelRenderer;
    constructor(map: Map_2, gl: WebGL2RenderingContext);
    getRenderer(): WebGLRenderer;
    render(scene: any, camera: any): void;
}

export declare class Tileset extends SceneObject {
    group: Group | undefined;
    tiles: TilesRendererEx | undefined;
    options: TilesetOptions;
    static getColorModes(): Readonly<{
        NONE: 0;
        SCREEN_ERROR: 1;
        GEOMETRIC_ERROR: 2;
        DISTANCE: 3;
        DEPTH: 4;
        RELATIVE_DEPTH: 5;
        IS_LEAF: 6;
        RANDOM_COLOR: 7;
        RANDOM_NODE_COLOR: 8;
        CUSTOM_COLOR: 9;
        LOAD_ORDER: 10;
    }>;
    private centerLngLat;
    constructor(options: TilesetOptions);
    addToScene(scene: ThreejsSceneLayer): this;
    removeFromScene(): this;
    updateSceneTime(time: number, delta: number): void;
    getCenterLngLat(): LngLatLike;
    updateTilesetTransform(): void;
    setDebugParams(debugParams: TilesetDebugParams): void;
    setDisplayParams(displayParams: TilesetDisplayParams): void;
}

export declare type TilesetDebugParams = {
    enableDebug: boolean;
    displayBoxBounds: boolean;
    displaySphereBounds: boolean;
    displayRegionBounds: boolean;
    colorMode: number;
};

export declare type TilesetDisplayParams = {
    errorTarget: number;
    displayActiveTiles: boolean;
    autoDisableRendererCulling: boolean;
    maxDepth: number;
    optimizeRaycast: boolean;
};

export declare type TilesetOptions = {
    id: string;
    url: string;
    dracoLoaderPath?: string;
    ktx2LoaderPath?: string;
    meshoptDecoder?: any;
    debug?: TilesetDebugParams;
    display?: TilesetDisplayParams;
    downloadMaxJobs?: number;
    parseMaxJobs?: number;
    isGaussianSplatting?: boolean;
    maxGaussianSplatingCount?: number;
    onLoadTileset?: (tileset: Tileset) => void;
};

declare class TilesRendererEx extends TilesRenderer {
    dynamicScreenSpaceError: boolean;
    calculateTileViewError(tile: any, target: any): void;
    private _calculateDynamicScreenSpaceDistance;
    private _intersectsFrustum;
}

declare type TubeMeshOptions = {
    type: 'tube';
} & TubeOptions;

declare type TubeOptions = {
    material?: MeshBasicMaterialParameters | undefined;
    speed?: number | undefined;
    tubeRadius?: number | undefined;
    tubularSegments?: number | undefined;
    radialSegments?: number | undefined;
    getTubeRadius?: (feature: Feature) => number | number | undefined;
};

declare type WaterMeshOptions = {
    type: 'water';
} & WaterOptions;

declare type WaterOptions = {
    color?: ColorRepresentation | undefined;
    textureWidth?: number | undefined;
    textureHeight?: number | undefined;
    clipBias?: number | undefined;
    flowDirection?: Vector2 | undefined;
    flowSpeed?: number | undefined;
    reflectivity?: number | undefined;
    scale?: number | undefined;
    shader?: object | undefined;
    flowMap?: Texture | undefined;
    normalMap0?: Texture | undefined;
    normalMap1?: Texture | undefined;
    up?: Vector3 | undefined;
    alpha?: number | undefined;
    waterColor?: ColorRepresentation | undefined;
    eye?: Vector3 | undefined;
    distortionScale?: number | undefined;
    side?: Side | undefined;
    fog?: boolean | undefined;
    sunColor?: ColorRepresentation | undefined;
    sunDirection?: Vector3 | undefined;
    waterNormals?: Texture | undefined;
    time?: number | undefined;
};

declare interface WorkerInfo {
    workerPromise: Promise<Worker>;
    idle: boolean;
    timeoutId?: ReturnType<typeof setTimeout>;
    actionId: string;
    cancelAction: boolean;
}

/**
 * Helper class to push actions to a pool of workers.
 */
export declare class WorkerPool implements IDisposable {
    protected _workerInfos: Array<WorkerInfo>;
    protected _pendingActions: Map<string, (worker: Worker, onComplete: () => void) => void>;
    protected _actionIdCounter: number;
    /**
     * Constructor
     * @param workers Array of workers to use for actions
     */
    constructor(workers: Array<Worker>);
    /**
     * Terminates all workers and clears any pending actions.
     */
    dispose(): void;
    /**
     * Pushes an action to the worker pool. If all the workers are active, the action will be
     * pended until a worker has completed its action.
     * @param action The action to perform. Call onComplete when the action is complete.
     * @returns A unique actionId that can be used to cancel the action.
     */
    push(action: (worker: Worker, onComplete: () => void) => void): string;
    /**
     * Cancels an action by its actionId.
     * @param actionId The unique actionId returned by the push method.
     */
    cancel(actionId: string): void;
    /**
     * Generates a unique actionId.
     * @returns A unique actionId.
     */
    protected _generateActionId(): string;
    /**
     * Executes an action on an idle worker.
     * @param actionId The unique actionId for the action.
     * @param action The action to perform.
     * @returns True if an idle worker was found and the action was executed, false otherwise.
     */
    protected _executeOnIdleWorker(actionId: string, action: (worker: Worker, onComplete: () => void) => void): boolean;
    /**
     * Executes an action on a worker.
     * @param workerInfo The worker info.
     * @param actionId The unique actionId for the action.
     * @param action The action to perform.
     */
    protected _execute(workerInfo: WorkerInfo, actionId: string, action: (worker: Worker, onComplete: () => void) => void): void;
}

export { }



declare module 'three' {
    export interface Object3D {
        userData: {
            structuralMetadata?: StructuralMetadata;
        };
    }
}



declare module 'three' {
    export interface Object3D {
        userData: {
            meshFeatures?: MeshFeatures;
        };
    }
}
