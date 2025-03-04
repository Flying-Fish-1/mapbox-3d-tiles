
<h3 align="center">mapbox-3d-tiles</h3>



---

<p align="center"> 集成 nasa 的 3d-tiles-renderer 与 mapbox-gl 实现 3D 瓦片渲染并提供插件功能。 
    <br> 
</p>

## 📝 目录

- [背景介绍](#about)
- [示例使用](#getting_started)
- [集成说明](#deployment1)
- [扩展说明](#deployment2)
- [作者说明](#authors)

## 🧐 背景介绍 <a name = "about"></a>

3d-tiles-renderer 是由 NASA 开发的，基于 threejs 渲染 3dtiles 的 js 开源库。
https://github.com/NASA-AMMOS/3DTilesRendererJS
在 mapbox-gl 渲染 3dtiles 的解决方案通常是使用 deck.gl 进行集成。

deck.gl 在渲染 3dtiles 时使用的是至顶向下逐级调度的方案，虽然参考了 cesiumJS 的大量代码，但是调度效率和渲染效率都存在较大的问题，本人尝试将 cesiumJS 的 skipLod 调度方案集成到 deck.gl 中，但渲染效率仍然较低。此外，deck.gl 的 3dtiles 相关代码已经一年多没更新了，而主要精力在 luma.gl 的更新上，目前仍存在较多问题。
因此考虑研究使用 threejs 的 3d-tiles-renderer 集成到 mapbox-gl 上

## 🏁 示例使用 <a name = "getting_started"></a>


### 初始化

初始化 mapbox-gl 的 map，在 map 的 load 事件中添加 ThreejsSceneLayer，并进一步添加 tileset 

```javascript
  map.on("load", function () {

    var scene = new ThreejsSceneLayer({
        id: "test-scene",
        refCenter: refCenter,
      });

    map.addLayer(scene);
    
    var tileset = scene.addTileset({
        id: "test-model3",
        url: "https://services1.map.gov.hk/api/3d-data/3dtiles/ntwc1_f2/tileset.json?key=ad5940a63bd344c48b0351ef1c7a905e",
    });

  });
```

### 参数设置

- 进一步的，可通过参数设置 tileset 的状态


```javascript
const displayPamams = {
  errorTarget: 6,
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

tileset.setDebugParams(debugParams);
tileset.setDisplayParams(displayPamams);
```

- 可重置参考中心和删除 tileset

```javascript
scene.setRefCenter(center);
scene.removeTileset(tileset.id);
```


## 🔧 集成说明 <a name = "deployment1"></a>

在将 3d-tiles-renderer 集成到 mapbox-gl 上时，需要解决以下基础工作：

### 设置 threejs 场景中心坐标系

把 scene 的原点放在 mapbox 的某个参考中心 refCenter 上，计算 refCenter 到 mapbox 的墨卡托坐标系下 worldMatrix，参考 ThreejsSceneHelper::updateWorldMatrix
  - 本质是将以米为单位的 scene 坐标系 转到 mapbox 的墨卡托坐标系下，需要缩放 meterInMercatorCoordinateUnits，并平移参考中心 worldOriginMercator
  - 需要注意的是，墨卡托坐标系的 Y 轴向下，进行缩放时，Y 要取反

```javascript

  // 更新世界矩阵， 需要根据 map 的中心点计算世界矩阵，将相对中心的坐标转换到墨卡托坐标系中
  updateWorldMatrix(
    map: MapboxMap,
    refCenter: LngLatLike | null = null
  ): Matrix4 {
    const mapCenter = refCenter ? refCenter : map.getCenter();

    // Calculate mercator coordinates and scale
    const worldOriginMercator = MercatorCoordinate.fromLngLat(mapCenter);
    const worldScale = worldOriginMercator.meterInMercatorCoordinateUnits();
    const worldRotate = [0, 0, 0];

    // Calculate world matrix
    const worldMatrix = new Matrix4();
    worldMatrix.compose(
      new Vector3(
        worldOriginMercator.x,
        worldOriginMercator.y,
        worldOriginMercator.z
      ),
      new Quaternion().setFromEuler(
        new Euler(worldRotate[0], worldRotate[1], worldRotate[2])
      ),
      new Vector3(worldScale, -worldScale, worldScale)
    );

    return worldMatrix;
  }
```

### 3dtiles 的坐标重定位到地图上

3d-tiles-renderer 中对 3dtiles 的坐标重定位到地图上，参照 Tileset::updateTilesetTransform
- 将 3dtiles 的坐标转到包围盒中心坐标
- 设置 threejs 场景的相对中心（经纬度），将 3dtiles 的包围盒中心坐标转换到场景相对中心坐标系


```javascript

  updateTilesetTransform(refCenter: LngLatLike) {
    const rootGroup = this.group;
    const tiles = this.tiles;

    if (!rootGroup || !tiles || !tiles.root) {
      return;
    }

    // update tiles center

    let box = new Box3();
    let sphere = new Sphere();
    let center = new Vector3();
    if (tiles.getBoundingBox(box)) {
      box.getCenter(center);
    } else if (tiles.getBoundingSphere(sphere)) {
      center = sphere.center;
    } else {
      return;
    }

    let centerLngLat = { lat: 0, lon: 0, height: 0 };
    centerLngLat = tiles.ellipsoid.getPositionToCartographic(
      center,
      centerLngLat
    );

    const modelMatrix = tiles.ellipsoid.getEastNorthUpFrame(
      centerLngLat.lat,
      centerLngLat.lon,
      new Matrix4()
    );

    const fromFixedFrameMatrix = tiles.ellipsoid.getEastNorthUpFrame(
      this.degToRad(refCenter[1]),
      this.degToRad(refCenter[0]),
      new Matrix4()
    );

    const toFixedFrameMatrix = fromFixedFrameMatrix.invert();
    const refMatrix = toFixedFrameMatrix.multiply(modelMatrix);
    refMatrix.decompose(
      rootGroup.position,
      rootGroup.quaternion,
      rootGroup.scale
    );
    rootGroup.matrix.copy(refMatrix);
    rootGroup.matrixAutoUpdate = false;

    const modelMatrixInvert = modelMatrix.clone().invert();
    modelMatrixInvert.decompose(
      tiles.group.position,
      tiles.group.quaternion,
      tiles.group.scale
    );

    tiles.group.matrix.copy(modelMatrixInvert);
    tiles.group.matrixAutoUpdate = false;

    this.centerLngLat = {
      lon: this.radToDeg(centerLngLat.lon),
      lat: this.radToDeg(centerLngLat.lat),
    };
```


### Threejs 和 mapbox 的相机同步

- Threejs 和 mapbox 的相机同步，参照 ThreejsSceneHelper::updateCameraForRender
  - Mapbox 的 render 提供的坐标系是地图的墨卡托坐标系到屏幕投影矩阵，mapMatrix
  - 将 threejs 场景中心坐标系转换到 mapbox 的墨卡托坐标系下 worldMatrix
  - 以上将 mapMatrix * worldMatrix 得到 相对中心坐标系到屏幕投影的 mvpMatrix，需要将此矩阵分解为 threeJS 相机的 viewMatrix 和 projectionMatrix
  - 其中 threejs 的相机投影矩阵 projectionMatrix 使用 mapbox 提供的 fov/aspect/near/far 计算
  - 而 viewMatrix 使用 projectionMatrixInvert * mvpMatrix 计算得到
    - projectionMatrix * viewMatrix = mvpMatrix
    - viewMatrix = projectionMatrixInvert * mvpMatrix
  - 之所以需要分解 viewMatrix 和 projectionMatrix 是因为 3dtiles 的 update 函数内需要用到矩阵中的参数


```javascript

  // 更新相机矩阵，需要将 mapbox 的矩阵转换为 threejs 的矩阵
  // 转换过程中，需要将 viewMatrix 和 projectionMatrix 拆分， 以便设置正确的 view 和 projection 矩阵
  updateCameraForRender(
    camera: PerspectiveCamera,
    map: MapboxMap,
    matrix: number[],
    worldMatrix: Matrix4,
    worldMatrixInv: Matrix4
  ) {
    const mapMatrix = new Matrix4().fromArray(matrix);
    const mvpMatrix = new Matrix4().multiplyMatrices(mapMatrix, worldMatrix);

    // 计算投影矩阵
    camera.fov = map.transform.fov;
    camera.aspect = map.transform.aspect;
    camera.near = map.transform._nearZ;
    camera.far = map.transform._farZ;
    camera.updateProjectionMatrix();
    const projectionMatrixInverse = camera.projectionMatrixInverse;

    // 计算相机矩阵
    const viewMatrix = new Matrix4().multiplyMatrices(projectionMatrixInverse, mvpMatrix);
    const viewMatrixInvert = viewMatrix.clone().invert();
    camera.matrixWorld.copy(viewMatrixInvert);
    camera.matrixWorldInverse.copy(viewMatrix);
    camera.matrixAutoUpdate = false;
    camera.matrixWorldAutoUpdate = false;
  }
```

### uThreejs 和 mapbox 的渲染集成

  - 使用 CustomLayerInterface 接口实现 ThreejsSceneLayer ，需要实现 onAdd/render 等函数
  - 注意，本文的集成是希望 一个 scene 有多个 tilesets，而非一个 scene 对应一个 tileset，因此将 scene 暴露出去更多接口，可 addTileset，后续可添加更多接口，如 addModel、addLight 等，并将 threejs 场景的更多功能通过 scene 接口暴露
  - 在集成过程中，需要注意，仅有一个 renderer 实例，但可以有多个 scene 实例，在每次 render 时需要将 renderer 的 gl 状态重置，以免冲突。

```javascript

```

## 🚀 扩展说明 <a name="deployment2"></a>


### TilesCachePlugin

- 问题描述：3d-tiles-renderer 默认的 lruCache 较少，结果导致一旦 full 就不会请求数据了...
- 解决方案：没有深入去改底层代码，使用 plugin 的方式暂时设置为无限大，后续可以通过 options 传入配置


### UrlParamsPlugin

- 问题描述：3d-tiles-renderer 在 url 中带有参数时，居然无法正常解析子 tile.json
- 解决方案：在 plugin 的 preprocessURL 中添加 URL 的 search 参数


### GLTFExtensionsPlugin
- 问题描述：当 gltf 中有 ktx2 格式的图片，但是没有添加 KHR_texture_basisu 的 extension 时，纹理无法正确加载。
  - https://github.com/mrdoob/three.js/issues/28258
  - 官方对此 issues 的建议是使用 gltf-transform 修改数据
  - 但由于用户的数据可能已经是有问题的数据无法修改时，则通过修改 loader 加载的方式来解决
- 解决方案：
  - 虽然解决方案不优雅，但是为了解决问题，是真的只能改底层代码了，好在可以使用 plugin ，而不用直接修改 3d-tiles-renderer 的库
  - 修改 'three/examples/jsm/loaders/GLTFLoader.js' 的 GLTFParser 类的构造函数
  - 仅修改以上几行代码，但是需要将整个 GLTFLoader.js 及相关引用的文件全部拷贝过来
  - 需要 "3d-tiles-renderer/plugins" 中的 GLTFExtensionsPlugin 替换成本文件中的 GLTFExtensionsPlugin
  - 然后在使用时，将 GLTFLoader 实例化时传入 ktx2Loader 实例，即可正常加载 ktx2 格式的图片
        
```javascript
        // 当 gltf 中有 ktx2 格式的图片，但是没有添加 KHR_texture_basisu 的 extension 时，
        // 使用 ktx2Loader 加载 texture，否则使用 TextureLoader
        // https://github.com/mrdoob/three.js/issues/28258
        // 官方对此 issues 的建议是使用 gltf-transform 修改数据
        // 但由于用户的数据可能已经是有问题的数据无法修改时，则通过修改 loader 加载的方式来解决
        const isKTX2 = json.images?.some((img) => (img.uri || img.mimeType)?.slice(-4) === 'ktx2'); // assuming all images are the same type
        if (isKTX2 && this.options.ktx2Loader) {            
            this.textureLoader = this.options.ktx2Loader;
        } else if ( typeof createImageBitmap === 'undefined' || ( isSafari && safariVersion < 17 ) || ( isFirefox && firefoxVersion < 98 ) ) {
            this.textureLoader = new TextureLoader( this.options.manager );
        } else {
            this.textureLoader = new ImageBitmapLoader( this.options.manager );
        }

```



## ✍️ 作者说明 <a name = "authors"></a>
杨建顺
