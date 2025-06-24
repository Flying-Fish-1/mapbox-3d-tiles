<h3 align="center">mapbox-threejs</h3>

---

<p align="center"> 集成 mapbox-gl 与 threejs 实现在地圖上渲染 3dtiles 、3DGS、gltf 模型等功能。 
    <br> 
</p>

## 📝 目录

-   [背景介绍](#about)
-   [功能說明](#features)
-   [示例視頻](#demovideos)
-   [示例使用](#getting_started)
-   [作者说明](#authors)

## 🧐 背景介绍 <a name = "about"></a>

最初考慮在 threejs 中渲染 3dtiles，以替換 mapbox-gl + deck.gl 的解決方案。
後來發現 threejs 上還可以做更多功能，例如 3DGS 模型、gltf 模型等。

因此，決定將 mapbox-gl 與 threejs 整合，以提供更強大的渲染功能。

## 🔧 功能說明 <a name = "features"></a>

1. 支持將 threejs 和 mapbox 集成，相機同步等
2. 支持在 threejs 中渲染 3dtiles、3DGS、gltf 模型等，座標對位
3. 支持在 threejs 和 mapbox 中進行第三人稱視角下的操作，如無人機或角色控制
4. 更多功能已經實現，但未開源，請期待！

## 🚀 示例圖集 <a name = "demovideos"></a>


[![](https://i0.hdslb.com/bfs/archive/5d1b146ba418aa9c9293b8c2c6a34ccc1db47056.jpg@672w_378h_1c.webp)](https://www.bilibili.com/video/BV19eK3znEJt/)

[![](https://i0.hdslb.com/bfs/archive/0b195aebb064cd5b2222faeda00e94308dc4dea6.jpg@672w_378h_1c.webp)](https://www.bilibili.com/video/BV1qsK3z4Eo5/)


[![](https://i0.hdslb.com/bfs/archive/e498bd9893b9e55fccbe59e865c113736d123b1e.jpg@672w_378h_1c.webp)](https://www.bilibili.com/video/BV1iuKGz4EDv/)

[![](https://i0.hdslb.com/bfs/archive/31f36229e764addba673fcb48f8d421c063b5784.jpg@672w_378h_1c.webp)](https://www.bilibili.com/video/BV1ENKGzFEMa/)


## 🏁 示例使用 <a name = "getting_started"></a>

### 初始化

初始化 mapbox-gl 的 map，在 map 的 load 事件中添加 ThreejsSceneLayer，并进一步添加 tileset 、 3dgs 、gltf、glb 等模型。

```javascript
map.on('load', function () {
    var scene = new ThreejsSceneLayer({
        id: 'test-scene',
        refCenter: refCenter,
    });

    map.addLayer(scene);

    var tileset = scene.addTileset({
        id: 'test-tileset',
        url: tiles3DLayerUrl,
    });

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
});
```

## ✍️ 作者说明 <a name = "authors"></a>

杨建顺
