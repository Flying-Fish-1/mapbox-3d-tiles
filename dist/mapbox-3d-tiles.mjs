import * as Z from "three";
import { Matrix4 as z, Vector3 as x, Object3D as Tt, Vector2 as H, WebGLRenderer as co, DataTextureLoader as iA, HalfFloatType as ke, FloatType as Ve, DataUtils as ps, LinearSRGBColorSpace as he, LinearFilter as ne, Quaternion as qe, Euler as vn, Scene as rA, DirectionalLight as Zi, AmbientLight as aA, Group as le, PerspectiveCamera as Sn, EquirectangularReflectionMapping as oA, TrianglesDrawMode as Ao, TriangleFanDrawMode as Zt, TriangleStripDrawMode as Tn, Loader as ns, LoaderUtils as it, FileLoader as He, MeshPhysicalMaterial as ue, Color as X, SRGBColorSpace as Qe, SpotLight as lo, PointLight as ho, InstancedMesh as $i, InstancedBufferAttribute as Qn, TextureLoader as uo, ImageBitmapLoader as fo, BufferAttribute as oe, InterleavedBuffer as go, InterleavedBufferAttribute as xt, LinearMipmapLinearFilter as is, NearestMipmapLinearFilter as po, LinearMipmapNearestFilter as mo, NearestMipmapNearestFilter as bo, NearestFilter as $t, RepeatWrapping as es, MirroredRepeatWrapping as Eo, ClampToEdgeWrapping as fe, PointsMaterial as Rn, Material as ut, LineBasicMaterial as er, MeshStandardMaterial as rs, DoubleSide as ft, MeshBasicMaterial as ye, PropertyBinding as Co, BufferGeometry as xe, SkinnedMesh as Io, Mesh as De, LineSegments as Mn, Line as yo, LineLoop as xo, Points as tr, MathUtils as ee, OrthographicCamera as sr, Skeleton as Bo, AnimationClip as _o, Bone as wo, InterpolateDiscrete as vo, InterpolateLinear as Dn, Texture as ln, VectorKeyframeTrack as hn, NumberKeyframeTrack as un, QuaternionKeyframeTrack as dn, ColorManagement as ys, FrontSide as nr, Interpolant as So, Box3 as Le, Sphere as Fe, DefaultLoadingManager as Ln, Spherical as To, Ray as ir, Plane as Qo, Frustum as cA, Matrix3 as Ro, LoadingManager as AA, EventDispatcher as Ls, Float32BufferAttribute as Re, EdgesGeometry as Mo, BoxGeometry as lA, Box3Helper as hA, Matrix2 as uA, Vector4 as dt, WebGLRenderTarget as Ti, ShaderMaterial as Me, OneFactor as dA, ZeroFactor as fA, CustomBlending as gA, Box2 as pA, CompressedCubeTexture as mA, CompressedArrayTexture as bA, CompressedTexture as Do, NoColorSpace as vr, RGBA_BPTC_Format as Qi, RGBA_S3TC_DXT5_Format as Ri, RGBA_S3TC_DXT3_Format as Sr, RGB_S3TC_DXT1_Format as Tr, RGBA_S3TC_DXT1_Format as Mi, RGBA_ASTC_6x6_Format as Qr, RGBA_ASTC_4x4_Format as rn, RGBA_ETC2_EAC_Format as Lo, RGB_ETC2_Format as Fo, RedFormat as qt, RGFormat as Bt, RGBAFormat as Ie, UnsignedByteType as ve, DataTexture as ht, Data3DTexture as EA, RGB_PVRTC_4BPPV1_Format as CA, RGB_ETC1_Format as IA, RGBA_PVRTC_4BPPV1_Format as yA, RGB_BPTC_UNSIGNED_Format as xA, InstancedBufferGeometry as rr, DynamicDrawUsage as ko, NormalBlending as Uo, UnsignedShort4444Type as BA, UnsignedShort5551Type as _A, UnsignedInt5999Type as wA, ByteType as vA, ShortType as SA, UnsignedShortType as TA, IntType as QA, UnsignedIntType as Go, AlphaFormat as RA, RGBFormat as MA, DepthFormat as DA, DepthStencilFormat as LA, RedIntegerFormat as FA, RGIntegerFormat as kA, RGBAIntegerFormat as Po, UnsignedInt248Type as UA, UVMapping as _t, ShaderLib as an, UniformsUtils as fn, UniformsLib as Wt, InstancedInterleavedBuffer as Di, WireframeGeometry as GA, Line3 as PA, CurvePath as NA, LineCurve3 as OA, MeshMatcapMaterial as HA, MeshNormalMaterial as zA, MeshToonMaterial as jA, MeshDistanceMaterial as VA, MeshDepthMaterial as qA, MeshPhongMaterial as KA, MeshLambertMaterial as WA, AdditiveBlending as Fn, CircleGeometry as JA, CatmullRomCurve3 as ar, TubeGeometry as YA, CanvasTexture as XA, Raycaster as ZA } from "three";
import { MercatorCoordinate as Nn } from "mapbox-gl";
class No extends Tt {
  /**
   * Constructs a new CSS2D object.
   *
   * @param {DOMElement} [element] - The DOM element.
   */
  constructor(e = document.createElement("div")) {
    super(), this.isCSS2DObject = !0, this.element = e, this.element.style.position = "absolute", this.element.style.userSelect = "none", this.element.setAttribute("draggable", !1), this.center = new H(0.5, 0.5), this.addEventListener("removed", function() {
      this.traverse(function(t) {
        t.element instanceof t.element.ownerDocument.defaultView.Element && t.element.parentNode !== null && t.element.remove();
      });
    });
  }
  copy(e, t) {
    return super.copy(e, t), this.element = e.element.cloneNode(!0), this.center = e.center, this;
  }
}
const Ht = new x(), Rr = new z(), Mr = new z(), Dr = new x(), Lr = new x();
class $A {
  /**
   * Constructs a new CSS2D renderer.
   *
   * @param {CSS2DRenderer~Parameters} [parameters] - The parameters.
   */
  constructor(e = {}) {
    const t = this;
    let s, n, i, r;
    const o = {
      objects: /* @__PURE__ */ new WeakMap()
    }, c = e.element !== void 0 ? e.element : document.createElement("div");
    c.style.overflow = "hidden", this.domElement = c, this.getSize = function() {
      return {
        width: s,
        height: n
      };
    }, this.render = function(f, g) {
      f.matrixWorldAutoUpdate === !0 && f.updateMatrixWorld(), g.parent === null && g.matrixWorldAutoUpdate === !0 && g.updateMatrixWorld(), Rr.copy(g.matrixWorldInverse), Mr.multiplyMatrices(g.projectionMatrix, Rr), l(f, f, g), d(f);
    }, this.setSize = function(f, g) {
      s = f, n = g, i = s / 2, r = n / 2, c.style.width = f + "px", c.style.height = g + "px";
    };
    function A(f) {
      f.isCSS2DObject && (f.element.style.display = "none");
      for (let g = 0, p = f.children.length; g < p; g++)
        A(f.children[g]);
    }
    function l(f, g, p) {
      if (f.visible === !1) {
        A(f);
        return;
      }
      if (f.isCSS2DObject) {
        Ht.setFromMatrixPosition(f.matrixWorld), Ht.applyMatrix4(Mr);
        const b = Ht.z >= -1 && Ht.z <= 1 && f.layers.test(p.layers) === !0, m = f.element;
        m.style.display = b === !0 ? "" : "none", b === !0 && (f.onBeforeRender(t, g, p), m.style.transform = "translate(" + -100 * f.center.x + "%," + -100 * f.center.y + "%)translate(" + (Ht.x * i + i) + "px," + (-Ht.y * r + r) + "px)", m.parentNode !== c && c.appendChild(m), f.onAfterRender(t, g, p));
        const E = {
          distanceToCameraSquared: h(p, f)
        };
        o.objects.set(f, E);
      }
      for (let b = 0, m = f.children.length; b < m; b++)
        l(f.children[b], g, p);
    }
    function h(f, g) {
      return Dr.setFromMatrixPosition(f.matrixWorld), Lr.setFromMatrixPosition(g.matrixWorld), Dr.distanceToSquared(Lr);
    }
    function u(f) {
      const g = [];
      return f.traverseVisible(function(p) {
        p.isCSS2DObject && g.push(p);
      }), g;
    }
    function d(f) {
      const g = u(f).sort(function(b, m) {
        if (b.renderOrder !== m.renderOrder)
          return m.renderOrder - b.renderOrder;
        const E = o.objects.get(b).distanceToCameraSquared, C = o.objects.get(m).distanceToCameraSquared;
        return E - C;
      }), p = g.length;
      for (let b = 0, m = g.length; b < m; b++)
        g[b].element.style.zIndex = p - b;
    }
  }
}
class el {
  constructor(e, t) {
    if (this._map = e, this._renderer && this._labelRenderer)
      return;
    let s = new co({
      alpha: !0,
      antialias: !0,
      canvas: e.getCanvas(),
      context: t
    });
    s.shadowMap.enabled = !0, s.autoClear = !1;
    let n = new $A();
    n.setSize(e._containerWidth, e._containerHeight), n.domElement.style.position = "absolute", n.domElement.style.top = "0px", n.domElement.style.pointerEvents = "none", e._container.appendChild(n.domElement), e.on("resize", () => {
      n.setSize(e._containerWidth, e._containerHeight);
    }), this._renderer = s, this._labelRenderer = n;
  }
  getRenderer() {
    return this._renderer;
  }
  render(e, t) {
    this._renderer.resetState(), this._renderer.render(e, t), this._labelRenderer.render(e, t);
  }
}
class tl extends iA {
  /**
   * Constructs a new RGBE loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e), this.type = ke;
  }
  /**
   * Parses the given RGBE texture data.
   *
   * @param {ArrayBuffer} buffer - The raw texture data.
   * @return {DataTextureLoader~TexData} An object representing the parsed texture data.
   */
  parse(e) {
    const r = function(y, w) {
      switch (y) {
        case 1:
          throw new Error("THREE.RGBELoader: Read Error: " + (w || ""));
        case 2:
          throw new Error("THREE.RGBELoader: Write Error: " + (w || ""));
        case 3:
          throw new Error("THREE.RGBELoader: Bad File Format: " + (w || ""));
        default:
        case 4:
          throw new Error("THREE.RGBELoader: Memory Error: " + (w || ""));
      }
    }, h = function(y, w, v) {
      w = w || 1024;
      let L = y.pos, U = -1, F = 0, N = "", G = String.fromCharCode.apply(null, new Uint16Array(y.subarray(L, L + 128)));
      for (; 0 > (U = G.indexOf(`
`)) && F < w && L < y.byteLength; )
        N += G, F += G.length, L += 128, G += String.fromCharCode.apply(null, new Uint16Array(y.subarray(L, L + 128)));
      return -1 < U ? (y.pos += F + U + 1, N + G.slice(0, U)) : !1;
    }, u = function(y) {
      const w = /^#\?(\S+)/, v = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, S = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, L = /^\s*FORMAT=(\S+)\s*$/, U = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, F = {
        valid: 0,
        /* indicate which fields are valid */
        string: "",
        /* the actual header string */
        comments: "",
        /* comments found in header */
        programtype: "RGBE",
        /* listed at beginning of file to identify it after "#?". defaults to "RGBE" */
        format: "",
        /* RGBE format, default 32-bit_rle_rgbe */
        gamma: 1,
        /* image has already been gamma corrected with given gamma. defaults to 1.0 (no correction) */
        exposure: 1,
        /* a value of 1.0 in an image corresponds to <exposure> watts/steradian/m^2. defaults to 1.0 */
        width: 0,
        height: 0
        /* image dimensions, width/height */
      };
      let N, G;
      for ((y.pos >= y.byteLength || !(N = h(y))) && r(1, "no header found"), (G = N.match(w)) || r(3, "bad initial token"), F.valid |= 1, F.programtype = G[1], F.string += N + `
`; N = h(y), N !== !1; ) {
        if (F.string += N + `
`, N.charAt(0) === "#") {
          F.comments += N + `
`;
          continue;
        }
        if ((G = N.match(v)) && (F.gamma = parseFloat(G[1])), (G = N.match(S)) && (F.exposure = parseFloat(G[1])), (G = N.match(L)) && (F.valid |= 2, F.format = G[1]), (G = N.match(U)) && (F.valid |= 4, F.height = parseInt(G[1], 10), F.width = parseInt(G[2], 10)), F.valid & 2 && F.valid & 4) break;
      }
      return F.valid & 2 || r(3, "missing format specifier"), F.valid & 4 || r(3, "missing image size specifier"), F;
    }, d = function(y, w, v) {
      const S = w;
      if (
        // run length encoding is not allowed so read flat
        S < 8 || S > 32767 || // this file is not run length encoded
        y[0] !== 2 || y[1] !== 2 || y[2] & 128
      )
        return new Uint8Array(y);
      S !== (y[2] << 8 | y[3]) && r(3, "wrong scanline width");
      const L = new Uint8Array(4 * w * v);
      L.length || r(4, "unable to allocate buffer space");
      let U = 0, F = 0;
      const N = 4 * S, G = new Uint8Array(4), T = new Uint8Array(N);
      let q = v;
      for (; q > 0 && F < y.byteLength; ) {
        F + 4 > y.byteLength && r(1), G[0] = y[F++], G[1] = y[F++], G[2] = y[F++], G[3] = y[F++], (G[0] != 2 || G[1] != 2 || (G[2] << 8 | G[3]) != S) && r(3, "bad rgbe scanline format");
        let K = 0, V;
        for (; K < N && F < y.byteLength; ) {
          V = y[F++];
          const $ = V > 128;
          if ($ && (V -= 128), (V === 0 || K + V > N) && r(3, "bad scanline data"), $) {
            const se = y[F++];
            for (let Be = 0; Be < V; Be++)
              T[K++] = se;
          } else
            T.set(y.subarray(F, F + V), K), K += V, F += V;
        }
        const te = S;
        for (let $ = 0; $ < te; $++) {
          let se = 0;
          L[U] = T[$ + se], se += S, L[U + 1] = T[$ + se], se += S, L[U + 2] = T[$ + se], se += S, L[U + 3] = T[$ + se], U += 4;
        }
        q--;
      }
      return L;
    }, f = function(y, w, v, S) {
      const L = y[w + 3], U = Math.pow(2, L - 128) / 255;
      v[S + 0] = y[w + 0] * U, v[S + 1] = y[w + 1] * U, v[S + 2] = y[w + 2] * U, v[S + 3] = 1;
    }, g = function(y, w, v, S) {
      const L = y[w + 3], U = Math.pow(2, L - 128) / 255;
      v[S + 0] = ps.toHalfFloat(Math.min(y[w + 0] * U, 65504)), v[S + 1] = ps.toHalfFloat(Math.min(y[w + 1] * U, 65504)), v[S + 2] = ps.toHalfFloat(Math.min(y[w + 2] * U, 65504)), v[S + 3] = ps.toHalfFloat(1);
    }, p = new Uint8Array(e);
    p.pos = 0;
    const b = u(p), m = b.width, E = b.height, C = d(p.subarray(p.pos), m, E);
    let I, _, B;
    switch (this.type) {
      case Ve:
        B = C.length / 4;
        const y = new Float32Array(B * 4);
        for (let v = 0; v < B; v++)
          f(C, v * 4, y, v * 4);
        I = y, _ = Ve;
        break;
      case ke:
        B = C.length / 4;
        const w = new Uint16Array(B * 4);
        for (let v = 0; v < B; v++)
          g(C, v * 4, w, v * 4);
        I = w, _ = ke;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return {
      width: m,
      height: E,
      data: I,
      header: b.string,
      gamma: b.gamma,
      exposure: b.exposure,
      type: _
    };
  }
  /**
   * Sets the texture type.
   *
   * @param {(HalfFloatType|FloatType)} value - The texture type to set.
   * @return {RGBELoader} A reference to this loader.
   */
  setDataType(e) {
    return this.type = e, this;
  }
  load(e, t, s, n) {
    function i(r, o) {
      switch (r.type) {
        case Ve:
        case ke:
          r.colorSpace = he, r.minFilter = ne, r.magFilter = ne, r.generateMipmaps = !1, r.flipY = !0;
          break;
      }
      t && t(r, o);
    }
    return super.load(e, i, s, n);
  }
}
class st {
  // 更新世界矩阵， 需要根据 map 的中心点计算世界矩阵，将相对中心的坐标转换到墨卡托坐标系中
  static updateWorldMatrix(e, t = null) {
    const s = t || e.getCenter(), n = Nn.fromLngLat(s), i = n.meterInMercatorCoordinateUnits(), r = [0, 0, 0], o = new z();
    return o.compose(new x(n.x, n.y, n.z), new qe().setFromEuler(new vn(r[0], r[1], r[2])), new x(i, -i, i)), o;
  }
  static toScenePositionMercator(e, t) {
    return new x(t.x, t.y, t.z).applyMatrix4(e);
  }
  static toMapPositionMercator(e, t) {
    const s = t.clone().applyMatrix4(e);
    return new Nn(s.x, s.y, s.z);
  }
  static toScenePosition(e, t, s) {
    const n = Nn.fromLngLat(t, s);
    return this.toScenePositionMercator(e, n);
  }
  static toMapPosition(e, t) {
    const s = this.toMapPositionMercator(e, t), n = s.toLngLat(), i = s.toAltitude();
    return [n.lng, n.lat, i];
  }
  // 角度转弧度
  static degToRad(e) {
    return e / 180 * Math.PI;
  }
  // 角度转弧度
  static radToDeg(e) {
    return e / Math.PI * 180;
  }
  // static loadGeojson(url: string): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest();
  //     xhr.open("GET", url);
  //     xhr.onload = () => {
  //       if (xhr.status === 200) {
  //         resolve(JSON.parse(xhr.responseText));
  //       } else {
  //         reject(xhr.statusText);
  //       }
  //     };
  //     xhr.onerror = () => {
  //       reject(xhr.statusText);
  //     };
  //     xhr.send();
  //   });
  // }
  static toSceneGeometry(e) {
  }
}
class sl {
  // 创建场景
  createScene(e = !0) {
    const t = new rA();
    if (e) {
      const s = new Zi(16777215, 4);
      s.position.set(1, 2, 3), t.add(s);
      const n = new aA(16777215, 0.2);
      t.add(n);
    }
    return t;
  }
  // 创建渲染组
  createGroup(e, t) {
    const s = new le();
    return s.name = t, e.add(s), s;
  }
  // 创建相机， 默认使用 PerspectiveCamera
  createCamera(e, t) {
    const s = new Sn();
    s.name = t;
    const n = new le();
    return n.name = t + "-parent", n.add(s), e.add(n), s;
  }
  _calcProjectionMatrices(e) {
    const t = e.centerOffset;
    let s;
    const n = e._camera.getCameraToClipPerspective(e._fov, e.width / e.height, e._nearZ, e._farZ);
    if (n[8] = -t.x * 2 / e.width, n[9] = t.y * 2 / e.height, e.isOrthographic) {
      const r = (g, p, b) => (1 - b) * g + b * p, o = (g) => g * g * g * g * g, c = (g, p, b, m) => {
        for (let E = 0; E < 16; E++)
          g[E] = r(p[E], b[E], m);
        return g;
      };
      let l = 0.5 * e.height / Math.tan(e._fov / 2) * 1 * Math.tan(e._fov * 0.5), h = l * e.aspect, u = -h, d = -l;
      h -= t.x, u -= t.x, l += t.y, d += t.y, s = e._camera.getCameraToClipOrthographic(u, h, d, l, e._nearZ, e._farZ);
      const f = e.pitch >= 15 ? 1 : e.pitch / 15;
      c(s, s, n, o(f));
    } else
      s = n;
    return new z().fromArray(s);
  }
  // 更新相机矩阵，需要将 mapbox 的矩阵转换为 threejs 的矩阵
  // 转换过程中，需要将 viewMatrix 和 projectionMatrix 拆分， 以便设置正确的 view 和 projection 矩阵
  updateCameraForRender(e, t, s, n, i) {
    const r = new z().fromArray(s), o = new z().multiplyMatrices(r, n);
    e.fov = st.radToDeg(t.transform.fovX), e.aspect = t.transform.aspect, e.near = t.transform._nearZ, e.far = t.transform._farZ;
    const c = t.transform;
    this._calcProjectionMatrices(c);
    const A = this._calcProjectionMatrices(c);
    e.projectionMatrix.copy(A), e.projectionMatrixInverse.copy(e.projectionMatrix).invert();
    const l = e.projectionMatrixInverse, h = new z().multiplyMatrices(l, o), u = h.clone().invert();
    e.matrixWorld.copy(u), e.matrixWorldInverse.copy(h), e.matrixAutoUpdate = !1, e.matrixWorldAutoUpdate = !1;
    const d = new x(), f = new qe(), g = new x();
    e.matrixWorld.decompose(d, f, g), e.position.set(d.x, d.y, d.z);
    const p = new vn().setFromQuaternion(f, "YXZ");
    e.rotation.set(p.x, p.y, p.z);
  }
  // 创建环境贴图， 支持通用的 hdr 贴图和官方的压缩 env 贴图
  createEnvTexture(e, t) {
    e && e.length > 3 && e.indexOf(".hdr") === e.length - 4 && new tl().load(e, (n) => {
      n.mapping = oA, t.environment = n, t.environmentRotation.x = Math.PI / 2;
    });
  }
}
const xs = "scene-update", Li = "scene-recenter";
function Fr(a) {
  if (!a)
    return null;
  const e = a.replace(/[a-z]+:\/\/[^/]+/i, "").replace(/\?.*$/i, "").replace(/.*\//g, ""), t = e.lastIndexOf(".");
  return t === -1 ? null : e.substring(t + 1) || null;
}
const kr = 2 ** 30;
class Oo {
  get unloadPriorityCallback() {
    return this._unloadPriorityCallback;
  }
  set unloadPriorityCallback(e) {
    e.length === 1 ? (console.warn('LRUCache: "unloadPriorityCallback" function has been changed to take two arguments.'), this._unloadPriorityCallback = (t, s) => {
      const n = e(t), i = e(s);
      return n < i ? -1 : n > i ? 1 : 0;
    }) : this._unloadPriorityCallback = e;
  }
  constructor() {
    this.minSize = 6e3, this.maxSize = 8e3, this.minBytesSize = 0.3 * kr, this.maxBytesSize = 0.4 * kr, this.unloadPercent = 0.05, this.autoMarkUnused = !0, this.itemSet = /* @__PURE__ */ new Map(), this.itemList = [], this.usedSet = /* @__PURE__ */ new Set(), this.callbacks = /* @__PURE__ */ new Map(), this.unloadingHandle = -1, this.cachedBytes = 0, this.bytesMap = /* @__PURE__ */ new Map(), this.loadedSet = /* @__PURE__ */ new Set(), this._unloadPriorityCallback = null;
    const e = this.itemSet;
    this.defaultPriorityCallback = (t) => e.get(t);
  }
  // Returns whether or not the cache has reached the maximum size
  isFull() {
    return this.itemSet.size >= this.maxSize || this.cachedBytes >= this.maxBytesSize;
  }
  getMemoryUsage(e) {
    return this.bytesMap.get(e) || 0;
  }
  setMemoryUsage(e, t) {
    const { bytesMap: s, itemSet: n } = this;
    n.has(e) && (this.cachedBytes -= s.get(e) || 0, s.set(e, t), this.cachedBytes += t);
  }
  add(e, t) {
    const s = this.itemSet;
    if (s.has(e) || this.isFull())
      return !1;
    const n = this.usedSet, i = this.itemList, r = this.callbacks;
    return i.push(e), n.add(e), s.set(e, Date.now()), r.set(e, t), !0;
  }
  has(e) {
    return this.itemSet.has(e);
  }
  remove(e) {
    const t = this.usedSet, s = this.itemSet, n = this.itemList, i = this.bytesMap, r = this.callbacks, o = this.loadedSet;
    if (s.has(e)) {
      this.cachedBytes -= i.get(e) || 0, i.delete(e), r.get(e)(e);
      const c = n.indexOf(e);
      return n.splice(c, 1), t.delete(e), s.delete(e), r.delete(e), o.delete(e), !0;
    }
    return !1;
  }
  // Marks whether tiles in the cache have been completely loaded or not. Tiles that have not been completely
  // loaded are subject to being disposed early if the cache is full above its max size limits, even if they
  // are marked as used.
  setLoaded(e, t) {
    const { itemSet: s, loadedSet: n } = this;
    s.has(e) && (t === !0 ? n.add(e) : n.delete(e));
  }
  markUsed(e) {
    const t = this.itemSet, s = this.usedSet;
    t.has(e) && !s.has(e) && (t.set(e, Date.now()), s.add(e));
  }
  markUnused(e) {
    this.usedSet.delete(e);
  }
  markAllUnused() {
    this.usedSet.clear();
  }
  // TODO: this should be renamed because it's not necessarily unloading all unused content
  // Maybe call it "cleanup" or "unloadToMinSize"
  unloadUnusedContent() {
    const {
      unloadPercent: e,
      minSize: t,
      maxSize: s,
      itemList: n,
      itemSet: i,
      usedSet: r,
      loadedSet: o,
      callbacks: c,
      bytesMap: A,
      minBytesSize: l,
      maxBytesSize: h
    } = this, u = n.length - r.size, d = n.length - o.size, f = Math.max(Math.min(n.length - t, u), 0), g = this.cachedBytes - l, p = this.unloadPriorityCallback || this.defaultPriorityCallback;
    let b = !1;
    const m = f > 0 && u > 0 || d && n.length > s;
    if (u && this.cachedBytes > l || d && this.cachedBytes > h || m) {
      n.sort((v, S) => {
        const L = r.has(v), U = r.has(S);
        if (L === U) {
          const F = o.has(v), N = o.has(S);
          return F === N ? -p(v, S) : F ? 1 : -1;
        } else
          return L ? 1 : -1;
      });
      const C = Math.max(t * e, f * e), I = Math.ceil(Math.min(C, u, f)), _ = Math.max(e * g, e * l), B = Math.min(_, g);
      let y = 0, w = 0;
      for (; this.cachedBytes - w > h || n.length - y > s; ) {
        const v = n[y], S = A.get(v) || 0;
        if (r.has(v) && o.has(v) || this.cachedBytes - w - S < h && n.length - y <= s)
          break;
        w += S, y++;
      }
      for (; w < B || y < I; ) {
        const v = n[y], S = A.get(v) || 0;
        if (r.has(v) || this.cachedBytes - w - S < l && y >= I)
          break;
        w += S, y++;
      }
      n.splice(0, y).forEach((v) => {
        this.cachedBytes -= A.get(v) || 0, c.get(v)(v), A.delete(v), i.delete(v), c.delete(v), o.delete(v), r.delete(v);
      }), b = y < f || w < g && y < u, b = b && y > 0;
    }
    b && (this.unloadingHandle = requestAnimationFrame(() => this.scheduleUnload()));
  }
  scheduleUnload() {
    cancelAnimationFrame(this.unloadingHandle), this.scheduled || (this.scheduled = !0, queueMicrotask(() => {
      this.scheduled = !1, this.unloadUnusedContent();
    }));
  }
}
class On {
  // returns whether tasks are queued or actively running
  get running() {
    return this.items.length !== 0 || this.currJobs !== 0;
  }
  constructor() {
    this.maxJobs = 6, this.items = [], this.callbacks = /* @__PURE__ */ new Map(), this.currJobs = 0, this.scheduled = !1, this.autoUpdate = !0, this.priorityCallback = null, this.schedulingCallback = (e) => {
      requestAnimationFrame(e);
    }, this._runjobs = () => {
      this.scheduled = !1, this.tryRunJobs();
    };
  }
  sort() {
    const e = this.priorityCallback, t = this.items;
    e !== null && t.sort(e);
  }
  has(e) {
    return this.callbacks.has(e);
  }
  add(e, t) {
    const s = {
      callback: t,
      reject: null,
      resolve: null,
      promise: null
    };
    return s.promise = new Promise((n, i) => {
      const r = this.items, o = this.callbacks;
      s.resolve = n, s.reject = i, r.unshift(e), o.set(e, s), this.autoUpdate && this.scheduleJobRun();
    }), s.promise;
  }
  remove(e) {
    const t = this.items, s = this.callbacks, n = t.indexOf(e);
    if (n !== -1) {
      const i = s.get(e);
      i.promise.catch(() => {
      }), i.reject(new Error("PriorityQueue: Item removed.")), t.splice(n, 1), s.delete(e);
    }
  }
  removeByFilter(e) {
    const { items: t } = this;
    for (let s = 0; s < t.length; s++) {
      const n = t[s];
      e(n) && this.remove(n);
    }
  }
  tryRunJobs() {
    this.sort();
    const e = this.items, t = this.callbacks, s = this.maxJobs;
    let n = 0;
    const i = () => {
      this.currJobs--, this.autoUpdate && this.scheduleJobRun();
    };
    for (; s > this.currJobs && e.length > 0 && n < s; ) {
      this.currJobs++, n++;
      const r = e.pop(), { callback: o, resolve: c, reject: A } = t.get(r);
      t.delete(r);
      let l;
      try {
        l = o(r);
      } catch (h) {
        A(h), i();
      }
      l instanceof Promise ? l.then(c).catch(A).finally(i) : (c(l), i());
    }
  }
  scheduleJobRun() {
    this.scheduled || (this.schedulingCallback(this._runjobs), this.scheduled = !0);
  }
}
const Kt = -1, mt = 0, Fs = 1, Hn = 2, Bs = 3, Ur = 6378137, nl = 6356752314245179e-9, ks = {
  inView: !1,
  error: 1 / 0,
  distanceFromCamera: 1 / 0
}, Ho = !0;
function zo(a) {
  return a === Bs || a === Kt;
}
function vt(a, e) {
  return a.__lastFrameVisited === e && a.__used;
}
function or(a) {
  return a.__childrenProcessed === a.children.length;
}
function cr(a, e) {
  a.__lastFrameVisited !== e.frameCount && (a.__lastFrameVisited = e.frameCount, a.__used = !1, a.__inFrustum = !1, a.__isLeaf = !1, a.__visible = !1, a.__active = !1, a.__error = 1 / 0, a.__distanceFromCamera = 1 / 0, a.__allChildrenLoaded = !1, e.calculateTileViewError(a, ks), a.__inFrustum = ks.inView, a.__error = ks.error, a.__distanceFromCamera = ks.distanceFromCamera);
}
function jo(a, e) {
  if (e.ensureChildrenArePreprocessed(a), cr(a, e), Fi(a, e), a.__hasUnrenderableContent && or(a)) {
    const t = a.children;
    for (let s = 0, n = t.length; s < n; s++)
      jo(t[s], e);
  }
}
function Vo(a, e) {
  if (e.ensureChildrenArePreprocessed(a), vt(a, e.frameCount) && (a.__hasContent && e.queueTileForDownload(a), or(a))) {
    const t = a.children;
    for (let s = 0, n = t.length; s < n; s++)
      Vo(t[s], e);
  }
}
function Fi(a, e) {
  a.__used || (a.__used = !0, e.markTileUsed(a), e.stats.used++, a.__inFrustum === !0 && e.stats.inFrustum++);
}
function il(a, e) {
  return !(a.__error <= e.errorTarget && !a.__hasUnrenderableContent || e.maxDepth > 0 && a.__depth + 1 >= e.maxDepth || !or(a));
}
function ki(a, e = null, t = null) {
  const s = [];
  for (s.push(a), s.push(null), s.push(0); s.length > 0; ) {
    const n = s.pop(), i = s.pop(), r = s.pop();
    if (e && e(r, i, n)) {
      t && t(r, i, n);
      return;
    }
    const o = r.children;
    if (o)
      for (let c = o.length - 1; c >= 0; c--)
        s.push(o[c]), s.push(r), s.push(n + 1);
    t && t(r, i, n);
  }
}
function qo(a, e) {
  if (e.ensureChildrenArePreprocessed(a), cr(a, e), !a.__inFrustum)
    return;
  if (!il(a, e)) {
    Fi(a, e);
    return;
  }
  let t = !1, s = !1;
  const n = a.children;
  for (let i = 0, r = n.length; i < r; i++) {
    const o = n[i];
    qo(o, e), t = t || vt(o, e.frameCount), s = s || o.__inFrustum;
  }
  if (Fi(a, e), t && a.refine === "REPLACE" && (a.__depth !== 0 || Ho))
    for (let i = 0, r = n.length; i < r; i++) {
      const o = n[i];
      jo(o, e);
    }
}
function Ko(a, e) {
  const t = e.frameCount;
  if (!vt(a, t))
    return;
  const s = a.children;
  let n = !1;
  for (let i = 0, r = s.length; i < r; i++) {
    const o = s[i];
    n = n || vt(o, t);
  }
  if (!n)
    a.__isLeaf = !0;
  else {
    let i = !0;
    for (let r = 0, o = s.length; r < o; r++) {
      const c = s[r];
      if (Ko(c, e), vt(c, t)) {
        const A = c.__allChildrenLoaded || !c.__hasContent || c.__hasRenderableContent && zo(c.__loadingState) || c.__hasUnrenderableContent && c.__loadingState === Kt;
        i = i && A;
      }
    }
    a.__allChildrenLoaded = i;
  }
}
function Wo(a, e) {
  const t = e.stats;
  if (!vt(a, e.frameCount))
    return;
  if (a.__isLeaf) {
    a.__loadingState === Bs ? (a.__inFrustum && (a.__visible = !0, t.visible++), a.__active = !0, t.active++) : a.__hasContent && e.queueTileForDownload(a);
    return;
  }
  const s = a.children, n = a.__hasContent, i = zo(a.__loadingState) && n, r = (e.errorTarget + 1) * e.errorThreshold, o = a.__error <= r, c = a.refine === "ADD", A = a.__allChildrenLoaded || a.__depth === 0 && !Ho;
  if (n && (o || c) && e.queueTileForDownload(a), (o && i && !A || i && c) && (a.__inFrustum && (a.__visible = !0, t.visible++), a.__active = !0, t.active++), !c && o && !A)
    for (let l = 0, h = s.length; l < h; l++) {
      const u = s[l];
      vt(u, e.frameCount) && Vo(u, e);
    }
  else
    for (let l = 0, h = s.length; l < h; l++)
      Wo(s[l], e);
}
function Jo(a, e) {
  const t = vt(a, e.frameCount);
  if (t || a.__usedLastFrame) {
    let s = !1, n = !1;
    t ? (s = a.__active, e.displayActiveTiles ? n = a.__active || a.__visible : n = a.__visible) : cr(a, e), a.__hasRenderableContent && a.__loadingState === Bs && (a.__wasSetActive !== s && e.invokeOnePlugin((r) => r.setTileActive && r.setTileActive(a, s)), a.__wasSetVisible !== n && e.invokeOnePlugin((r) => r.setTileVisible && r.setTileVisible(a, n))), a.__wasSetActive = s, a.__wasSetVisible = n, a.__usedLastFrame = t;
    const i = a.children;
    for (let r = 0, o = i.length; r < o; r++) {
      const c = i[r];
      Jo(c, e);
    }
  }
}
function rl(a, e = null) {
  let t = a;
  for (; t; ) {
    const s = t.__depth, n = t.parent;
    e && e(t, n, s), t = n;
  }
}
function al(a) {
  let e = null;
  return () => {
    e === null && (e = requestAnimationFrame(() => {
      e = null, a();
    }));
  };
}
const Gr = Symbol("PLUGIN_REGISTERED"), Pr = (a, e) => {
  const t = a.priority || 0, s = e.priority || 0;
  return t !== s ? t > s ? 1 : -1 : a.__used !== e.__used ? a.__used ? 1 : -1 : a.__error !== e.__error ? a.__error > e.__error ? 1 : -1 : a.__distanceFromCamera !== e.__distanceFromCamera ? a.__distanceFromCamera > e.__distanceFromCamera ? -1 : 1 : a.__depthFromRenderedParent !== e.__depthFromRenderedParent ? a.__depthFromRenderedParent > e.__depthFromRenderedParent ? -1 : 1 : 0;
}, ol = (a, e) => {
  const t = a.priority || 0, s = e.priority || 0;
  return t !== s ? t > s ? 1 : -1 : a.__lastFrameVisited !== e.__lastFrameVisited ? a.__lastFrameVisited > e.__lastFrameVisited ? -1 : 1 : a.__depthFromRenderedParent !== e.__depthFromRenderedParent ? a.__depthFromRenderedParent > e.__depthFromRenderedParent ? 1 : -1 : a.__loadingState !== e.__loadingState ? a.__loadingState > e.__loadingState ? -1 : 1 : a.__hasUnrenderableContent !== e.__hasUnrenderableContent ? a.__hasUnrenderableContent ? -1 : 1 : a.__error !== e.__error ? a.__error > e.__error ? -1 : 1 : 0;
};
class cl {
  get root() {
    const e = this.rootTileSet;
    return e ? e.root : null;
  }
  get loadProgress() {
    const { stats: e, isLoading: t } = this, s = e.downloading + e.parsing, n = e.inCacheSinceLoad + (t ? 1 : 0);
    return n === 0 ? 1 : 1 - s / n;
  }
  get errorThreshold() {
    return this._errorThreshold;
  }
  set errorThreshold(e) {
    console.warn('TilesRenderer: The "errorThreshold" option has been deprecated.'), this._errorThreshold = e;
  }
  constructor(e = null) {
    this.rootLoadingState = mt, this.rootTileSet = null, this.rootURL = e, this.fetchOptions = {}, this.plugins = [], this.queuedTiles = [], this.cachedSinceLoadComplete = /* @__PURE__ */ new Set(), this.isLoading = !1;
    const t = new Oo();
    t.unloadPriorityCallback = ol;
    const s = new On();
    s.maxJobs = 25, s.priorityCallback = Pr;
    const n = new On();
    n.maxJobs = 5, n.priorityCallback = Pr;
    const i = new On();
    i.maxJobs = 25, this.processedTiles = /* @__PURE__ */ new WeakSet(), this.visibleTiles = /* @__PURE__ */ new Set(), this.activeTiles = /* @__PURE__ */ new Set(), this.usedSet = /* @__PURE__ */ new Set(), this.lruCache = t, this.downloadQueue = s, this.parseQueue = n, this.processNodeQueue = i, this.stats = {
      inCacheSinceLoad: 0,
      inCache: 0,
      parsing: 0,
      downloading: 0,
      failed: 0,
      inFrustum: 0,
      used: 0,
      active: 0,
      visible: 0
    }, this.frameCount = 0, this._dispatchNeedsUpdateEvent = al(() => {
      this.dispatchEvent({ type: "needs-update" });
    }), this.errorTarget = 16, this._errorThreshold = 1 / 0, this.displayActiveTiles = !1, this.maxDepth = 1 / 0;
  }
  // Plugins
  registerPlugin(e) {
    if (e[Gr] === !0)
      throw new Error("TilesRendererBase: A plugin can only be registered to a single tile set");
    const t = this.plugins, s = e.priority || 0;
    let n = t.length;
    for (let i = 0; i < t.length; i++)
      if ((t[i].priority || 0) > s) {
        n = i;
        break;
      }
    t.splice(n, 0, e), e[Gr] = !0, e.init && e.init(this);
  }
  unregisterPlugin(e) {
    const t = this.plugins;
    if (typeof e == "string" && (e = this.getPluginByName(name)), t.includes(e)) {
      const s = t.indexOf(e);
      return t.splice(s, 1), e.dispose && e.dispose(), !0;
    }
    return !1;
  }
  getPluginByName(e) {
    return this.plugins.find((t) => t.name === e) || null;
  }
  traverse(e, t, s = !0) {
    this.root && ki(this.root, (n, ...i) => (s && this.ensureChildrenArePreprocessed(n, !0), e ? e(n, ...i) : !1), t);
  }
  queueTileForDownload(e) {
    e.__loadingState !== mt || this.lruCache.isFull() || this.queuedTiles.push(e);
  }
  markTileUsed(e) {
    this.usedSet.add(e), this.lruCache.markUsed(e);
  }
  // Public API
  update() {
    const { lruCache: e, usedSet: t, stats: s, root: n, downloadQueue: i, parseQueue: r, processNodeQueue: o } = this;
    if (this.rootLoadingState === mt && (this.rootLoadingState = Fs, this.invokeOnePlugin((l) => l.loadRootTileSet && l.loadRootTileSet()).then((l) => {
      let h = this.rootURL;
      h !== null && this.invokeAllPlugins((u) => h = u.preprocessURL ? u.preprocessURL(h, null) : h), this.rootLoadingState = Bs, this.rootTileSet = l, this.dispatchEvent({ type: "needs-update" }), this.dispatchEvent({ type: "load-content" }), this.dispatchEvent({
        type: "load-tile-set",
        tileSet: l,
        url: h
      });
    }).catch((l) => {
      this.rootLoadingState = Kt, console.error(l), this.rootTileSet = null, this.dispatchEvent({
        type: "load-error",
        tile: null,
        error: l,
        url: this.rootURL
      });
    })), !n)
      return;
    s.inFrustum = 0, s.used = 0, s.active = 0, s.visible = 0, this.frameCount++, t.forEach((l) => e.markUnused(l)), t.clear(), qo(n, this), Ko(n, this), Wo(n, this), Jo(n, this);
    const c = this.queuedTiles;
    c.sort(e.unloadPriorityCallback);
    for (let l = 0, h = c.length; l < h && !e.isFull(); l++)
      this.requestTileContents(c[l]);
    c.length = 0, e.scheduleUnload(), (i.running || r.running || o.running) === !1 && this.isLoading === !0 && (this.cachedSinceLoadComplete.clear(), s.inCacheSinceLoad = 0, this.dispatchEvent({ type: "tiles-load-end" }), this.isLoading = !1);
  }
  resetFailedTiles() {
    this.rootLoadingState === Kt && (this.rootLoadingState = mt);
    const e = this.stats;
    e.failed !== 0 && (this.traverse((t) => {
      t.__loadingState === Kt && (t.__loadingState = mt);
    }, null, !1), e.failed = 0);
  }
  dispose() {
    [...this.plugins].forEach((n) => {
      this.unregisterPlugin(n);
    });
    const t = this.lruCache, s = [];
    this.traverse((n) => (s.push(n), !1), null, !1);
    for (let n = 0, i = s.length; n < i; n++)
      t.remove(s[n]);
    this.stats = {
      parsing: 0,
      downloading: 0,
      failed: 0,
      inFrustum: 0,
      used: 0,
      active: 0,
      visible: 0
    }, this.frameCount = 0;
  }
  // Overrideable
  calculateBytesUsed(e, t) {
    return 0;
  }
  dispatchEvent(e) {
  }
  fetchData(e, t) {
    return fetch(e, t);
  }
  parseTile(e, t, s) {
    return null;
  }
  disposeTile(e) {
    e.__visible && (this.invokeOnePlugin((t) => t.setTileVisible && t.setTileVisible(e, !1)), e.__visible = !1), e.__active && (this.invokeOnePlugin((t) => t.setTileActive && t.setTileActive(e, !1)), e.__active = !1);
  }
  preprocessNode(e, t, s = null) {
    var n;
    if (this.processedTiles.add(e), e.content && (!("uri" in e.content) && "url" in e.content && (e.content.uri = e.content.url, delete e.content.url), e.content.boundingVolume && !("box" in e.content.boundingVolume || "sphere" in e.content.boundingVolume || "region" in e.content.boundingVolume) && delete e.content.boundingVolume), e.parent = s, e.children = e.children || [], (n = e.content) != null && n.uri) {
      const i = Fr(e.content.uri);
      e.__hasContent = !0, e.__hasUnrenderableContent = !!(i && /json$/.test(i)), e.__hasRenderableContent = !e.__hasUnrenderableContent;
    } else
      e.__hasContent = !1, e.__hasUnrenderableContent = !1, e.__hasRenderableContent = !1;
    e.__childrenProcessed = 0, s && s.__childrenProcessed++, e.__distanceFromCamera = 1 / 0, e.__error = 1 / 0, e.__inFrustum = !1, e.__isLeaf = !1, e.__usedLastFrame = !1, e.__used = !1, e.__wasSetVisible = !1, e.__visible = !1, e.__allChildrenLoaded = !1, e.__wasSetActive = !1, e.__active = !1, e.__loadingState = mt, s === null ? (e.__depth = 0, e.__depthFromRenderedParent = e.__hasRenderableContent ? 1 : 0, e.refine = e.refine || "REPLACE") : (e.__depth = s.__depth + 1, e.__depthFromRenderedParent = s.__depthFromRenderedParent + (e.__hasRenderableContent ? 1 : 0), e.refine = e.refine || s.refine), e.__basePath = t, e.__lastFrameVisited = -1, this.invokeAllPlugins((i) => {
      i !== this && i.preprocessNode && i.preprocessNode(e, t, s);
    });
  }
  setTileActive(e, t) {
    t ? this.activeTiles.add(e) : this.activeTiles.delete(e);
  }
  setTileVisible(e, t) {
    t ? this.visibleTiles.add(e) : this.visibleTiles.delete(e);
  }
  calculateTileViewError(e, t) {
  }
  ensureChildrenArePreprocessed(e, t = !1) {
    const s = e.children;
    for (let n = 0, i = s.length; n < i; n++) {
      const r = s[n];
      if ("__depth" in r)
        break;
      t ? (this.processNodeQueue.remove(r), this.preprocessNode(r, e.__basePath, e)) : this.processNodeQueue.has(r) || this.processNodeQueue.add(r, (o) => {
        this.preprocessNode(o, e.__basePath, e), this._dispatchNeedsUpdateEvent();
      });
    }
  }
  // Private Functions
  // returns the total bytes used for by the given tile as reported by all plugins
  getBytesUsed(e) {
    let t = 0;
    return this.invokeAllPlugins((s) => {
      s.calculateBytesUsed && (t += s.calculateBytesUsed(e, e.cached.scene) || 0);
    }), t;
  }
  // force a recalculation of the tile or all tiles if no tile is provided
  recalculateBytesUsed(e = null) {
    const { lruCache: t, processedTiles: s } = this;
    e === null ? t.itemSet.forEach((n) => {
      s.has(n) && t.setMemoryUsage(n, this.getBytesUsed(n));
    }) : t.setMemoryUsage(e, this.getBytesUsed(e));
  }
  preprocessTileSet(e, t, s = null) {
    const n = e.asset.version, [i, r] = n.split(".").map((c) => parseInt(c));
    console.assert(
      i <= 1,
      "TilesRenderer: asset.version is expected to be a 1.x or a compatible version."
    ), i === 1 && r > 0 && console.warn("TilesRenderer: tiles versions at 1.1 or higher have limited support. Some new extensions and features may not be supported.");
    let o = t.replace(/\/[^/]*$/, "");
    o = new URL(o, window.location.href).toString(), this.preprocessNode(e.root, o, s);
  }
  loadRootTileSet() {
    let e = this.rootURL;
    return this.invokeAllPlugins((s) => e = s.preprocessURL ? s.preprocessURL(e, null) : e), this.invokeOnePlugin((s) => s.fetchData && s.fetchData(e, this.fetchOptions)).then((s) => {
      if (s instanceof Response) {
        if (s.ok)
          return s.json();
        throw new Error(`TilesRenderer: Failed to load tileset "${e}" with status ${s.status} : ${s.statusText}`);
      } else return s;
    }).then((s) => (this.preprocessTileSet(s, e), s));
  }
  requestTileContents(e) {
    if (e.__loadingState !== mt)
      return;
    let t = !1, s = null, n = new URL(e.content.uri, e.__basePath + "/").toString();
    this.invokeAllPlugins((d) => n = d.preprocessURL ? d.preprocessURL(n, e) : n);
    const i = this.stats, r = this.lruCache, o = this.downloadQueue, c = this.parseQueue, A = Fr(n), l = new AbortController(), h = l.signal;
    if (r.add(e, (d) => {
      l.abort(), t ? (d.children.length = 0, d.__childrenProcessed = 0) : this.invokeAllPlugins((f) => {
        f.disposeTile && f.disposeTile(d);
      }), i.inCache--, this.cachedSinceLoadComplete.has(e) && (this.cachedSinceLoadComplete.delete(e), i.inCacheSinceLoad--), d.__loadingState === Fs ? i.downloading-- : d.__loadingState === Hn && i.parsing--, d.__loadingState = mt, c.remove(d), o.remove(d);
    }))
      return this.isLoading || (this.isLoading = !0, this.dispatchEvent({ type: "tiles-load-start" })), r.setMemoryUsage(e, this.getBytesUsed(e)), this.cachedSinceLoadComplete.add(e), i.inCacheSinceLoad++, i.inCache++, i.downloading++, e.__loadingState = Fs, o.add(e, (d) => {
        if (h.aborted)
          return Promise.resolve();
        const f = this.invokeOnePlugin((g) => g.fetchData && g.fetchData(n, { ...this.fetchOptions, signal: h }));
        return this.dispatchEvent({ type: "tile-download-start", tile: e }), f;
      }).then((d) => {
        if (!h.aborted)
          if (d instanceof Response) {
            if (d.ok)
              return A === "json" ? d.json() : d.arrayBuffer();
            throw new Error(`Failed to load model with error code ${d.status}`);
          } else return d;
      }).then((d) => {
        if (!h.aborted)
          return i.downloading--, i.parsing++, e.__loadingState = Hn, c.add(e, (f) => h.aborted ? Promise.resolve() : A === "json" && d.root ? (this.preprocessTileSet(d, n, e), e.children.push(d.root), s = d, t = !0, Promise.resolve()) : this.invokeOnePlugin((g) => g.parseTile && g.parseTile(d, f, A, n, h)));
      }).then(() => {
        if (h.aborted)
          return;
        i.parsing--, e.__loadingState = Bs, r.setLoaded(e, !0);
        const d = this.getBytesUsed(e);
        if (r.getMemoryUsage(e) === 0 && d > 0 && r.isFull()) {
          r.remove(e);
          return;
        }
        r.setMemoryUsage(e, d), this.dispatchEvent({ type: "needs-update" }), this.dispatchEvent({ type: "load-content" }), t && this.dispatchEvent({
          type: "load-tile-set",
          tileSet: s,
          url: n
        }), e.cached.scene && this.dispatchEvent({
          type: "load-model",
          scene: e.cached.scene,
          tile: e
        });
      }).catch((d) => {
        h.aborted || (d.name !== "AbortError" ? (c.remove(e), o.remove(e), e.__loadingState === Hn ? i.parsing-- : e.__loadingState === Fs && i.downloading--, i.failed++, console.error(`TilesRenderer : Failed to load tile at url "${e.content.uri}".`), console.error(d), e.__loadingState = Kt, r.setLoaded(e, !0), this.dispatchEvent({
          type: "load-error",
          tile: e,
          error: d,
          url: n
        })) : r.remove(e));
      });
  }
  getAttributions(e = []) {
    return this.invokeAllPlugins((t) => t !== this && t.getAttributions && t.getAttributions(e)), e;
  }
  invokeOnePlugin(e) {
    const t = [...this.plugins, this];
    for (let s = 0; s < t.length; s++) {
      const n = e(t[s]);
      if (n)
        return n;
    }
    return null;
  }
  invokeAllPlugins(e) {
    const t = [...this.plugins, this], s = [];
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      i && s.push(i);
    }
    return s.length === 0 ? null : Promise.all(s);
  }
}
class Qs {
  constructor() {
    this.fetchOptions = {}, this.workingPath = "";
  }
  load(...e) {
    return console.warn('Loader: "load" function has been deprecated in favor of "loadAsync".'), this.loadAsync(...e);
  }
  loadAsync(e) {
    return fetch(e, this.fetchOptions).then((t) => {
      if (!t.ok)
        throw new Error(`Failed to load file "${e}" with status ${t.status} : ${t.statusText}`);
      return t.arrayBuffer();
    }).then((t) => (this.workingPath === "" && (this.workingPath = this.workingPathForURL(e)), this.parse(t)));
  }
  resolveExternalURL(e) {
    return /^[^\\/]/.test(e) && !/^http/.test(e) ? this.workingPath + "/" + e : e;
  }
  workingPathForURL(e) {
    const t = e.split(/[\\/]/g);
    return t.pop(), t.join("/") + "/";
  }
  parse(e) {
    throw new Error("LoaderBase: Parse not implemented.");
  }
}
const Al = new TextDecoder();
function Ar(a) {
  return Al.decode(a);
}
function Yo(a, e, t, s, n, i) {
  let r;
  switch (s) {
    case "SCALAR":
      r = 1;
      break;
    case "VEC2":
      r = 2;
      break;
    case "VEC3":
      r = 3;
      break;
    case "VEC4":
      r = 4;
      break;
    default:
      throw new Error(`FeatureTable : Feature type not provided for "${i}".`);
  }
  let o;
  const c = t * r;
  switch (n) {
    case "BYTE":
      o = new Int8Array(a, e, c);
      break;
    case "UNSIGNED_BYTE":
      o = new Uint8Array(a, e, c);
      break;
    case "SHORT":
      o = new Int16Array(a, e, c);
      break;
    case "UNSIGNED_SHORT":
      o = new Uint16Array(a, e, c);
      break;
    case "INT":
      o = new Int32Array(a, e, c);
      break;
    case "UNSIGNED_INT":
      o = new Uint32Array(a, e, c);
      break;
    case "FLOAT":
      o = new Float32Array(a, e, c);
      break;
    case "DOUBLE":
      o = new Float64Array(a, e, c);
      break;
    default:
      throw new Error(`FeatureTable : Feature component type not provided for "${i}".`);
  }
  return o;
}
class kn {
  constructor(e, t, s, n) {
    this.buffer = e, this.binOffset = t + s, this.binLength = n;
    let i = null;
    if (s !== 0) {
      const r = new Uint8Array(e, t, s);
      i = JSON.parse(Ar(r));
    } else
      i = {};
    this.header = i;
  }
  getKeys() {
    return Object.keys(this.header);
  }
  getData(e, t, s = null, n = null) {
    const i = this.header;
    if (!(e in i))
      return null;
    const r = i[e];
    if (r instanceof Object) {
      if (Array.isArray(r))
        return r;
      {
        const { buffer: o, binOffset: c, binLength: A } = this, l = r.byteOffset || 0, h = r.type || n, u = r.componentType || s;
        if ("type" in r && n && r.type !== n)
          throw new Error("FeatureTable: Specified type does not match expected type.");
        const d = c + l, f = Yo(o, d, t, h, u, e);
        if (d + f.byteLength > c + A)
          throw new Error("FeatureTable: Feature data read outside binary body length.");
        return f;
      }
    } else return r;
  }
  getBuffer(e, t) {
    const { buffer: s, binOffset: n } = this;
    return s.slice(n + e, n + e + t);
  }
}
class ll {
  constructor(e) {
    this.batchTable = e;
    const t = e.header.extensions["3DTILES_batch_table_hierarchy"];
    this.classes = t.classes;
    for (const n of this.classes) {
      const i = n.instances;
      for (const r in i)
        n.instances[r] = this._parseProperty(i[r], n.length, r);
    }
    if (this.instancesLength = t.instancesLength, this.classIds = this._parseProperty(t.classIds, this.instancesLength, "classIds"), t.parentCounts ? this.parentCounts = this._parseProperty(t.parentCounts, this.instancesLength, "parentCounts") : this.parentCounts = new Array(this.instancesLength).fill(1), t.parentIds) {
      const n = this.parentCounts.reduce((i, r) => i + r, 0);
      this.parentIds = this._parseProperty(t.parentIds, n, "parentIds");
    } else
      this.parentIds = null;
    this.instancesIds = [];
    const s = {};
    for (const n of this.classIds)
      s[n] = s[n] ?? 0, this.instancesIds.push(s[n]), s[n]++;
  }
  _parseProperty(e, t, s) {
    if (Array.isArray(e))
      return e;
    {
      const { buffer: n, binOffset: i } = this.batchTable, r = e.byteOffset, o = e.componentType || "UNSIGNED_SHORT", c = i + r;
      return Yo(n, c, t, "SCALAR", o, s);
    }
  }
  getDataFromId(e, t = {}) {
    const s = this.parentCounts[e];
    if (this.parentIds && s > 0) {
      let c = 0;
      for (let A = 0; A < e; A++)
        c += this.parentCounts[A];
      for (let A = 0; A < s; A++) {
        const l = this.parentIds[c + A];
        l !== e && this.getDataFromId(l, t);
      }
    }
    const n = this.classIds[e], i = this.classes[n].instances, r = this.classes[n].name, o = this.instancesIds[e];
    for (const c in i)
      t[r] = t[r] || {}, t[r][c] = i[c][o];
    return t;
  }
}
class lr extends kn {
  get batchSize() {
    return console.warn("BatchTable.batchSize has been deprecated and replaced with BatchTable.count."), this.count;
  }
  constructor(e, t, s, n, i) {
    super(e, s, n, i), this.count = t, this.extensions = {};
    const r = this.header.extensions;
    r && r["3DTILES_batch_table_hierarchy"] && (this.extensions["3DTILES_batch_table_hierarchy"] = new ll(this));
  }
  getData(e, t = null, s = null) {
    return console.warn("BatchTable: BatchTable.getData is deprecated. Use BatchTable.getDataFromId to get allproperties for an id or BatchTable.getPropertyArray for getting an array of value for a property."), super.getData(e, this.count, t, s);
  }
  getDataFromId(e, t = {}) {
    if (e < 0 || e >= this.count)
      throw new Error(`BatchTable: id value "${e}" out of bounds for "${this.count}" features number.`);
    for (const s of this.getKeys())
      s !== "extensions" && (t[s] = super.getData(s, this.count)[e]);
    for (const s in this.extensions) {
      const n = this.extensions[s];
      n.getDataFromId instanceof Function && (t[s] = t[s] || {}, n.getDataFromId(e, t[s]));
    }
    return t;
  }
  getPropertyArray(e) {
    return super.getData(e, this.count);
  }
}
function Pt(a) {
  if (a === null || a.byteLength < 4)
    return "";
  let e;
  if (a instanceof DataView ? e = a : e = new DataView(a), String.fromCharCode(e.getUint8(0)) === "{")
    return null;
  let t = "";
  for (let s = 0; s < 4; s++)
    t += String.fromCharCode(e.getUint8(s));
  return t;
}
class hl extends Qs {
  parse(e) {
    const t = new DataView(e), s = Pt(t);
    console.assert(s === "b3dm");
    const n = t.getUint32(4, !0);
    console.assert(n === 1);
    const i = t.getUint32(8, !0);
    console.assert(i === e.byteLength);
    const r = t.getUint32(12, !0), o = t.getUint32(16, !0), c = t.getUint32(20, !0), A = t.getUint32(24, !0), l = 28, h = e.slice(
      l,
      l + r + o
    ), u = new kn(
      h,
      0,
      r,
      o
    ), d = l + r + o, f = e.slice(
      d,
      d + c + A
    ), g = new lr(
      f,
      u.getData("BATCH_LENGTH"),
      0,
      c,
      A
    ), p = d + c + A, b = new Uint8Array(e, p, i - p);
    return {
      version: n,
      featureTable: u,
      batchTable: g,
      glbBytes: b
    };
  }
}
class ul extends Qs {
  parse(e) {
    const t = new DataView(e), s = Pt(t);
    console.assert(s === "i3dm");
    const n = t.getUint32(4, !0);
    console.assert(n === 1);
    const i = t.getUint32(8, !0);
    console.assert(i === e.byteLength);
    const r = t.getUint32(12, !0), o = t.getUint32(16, !0), c = t.getUint32(20, !0), A = t.getUint32(24, !0), l = t.getUint32(28, !0), h = 32, u = e.slice(
      h,
      h + r + o
    ), d = new kn(
      u,
      0,
      r,
      o
    ), f = h + r + o, g = e.slice(
      f,
      f + c + A
    ), p = new lr(
      g,
      d.getData("INSTANCES_LENGTH"),
      0,
      c,
      A
    ), b = f + c + A, m = new Uint8Array(e, b, i - b);
    let E = null, C = null, I = null;
    if (l)
      E = m, C = Promise.resolve();
    else {
      const _ = this.resolveExternalURL(Ar(m)), B = _.split(/[\\/]/g);
      B.pop(), I = B.join("/"), C = fetch(_, this.fetchOptions).then((y) => {
        if (!y.ok)
          throw new Error(`I3DMLoaderBase : Failed to load file "${_}" with status ${y.status} : ${y.statusText}`);
        return y.arrayBuffer();
      }).then((y) => {
        E = new Uint8Array(y);
      });
    }
    return C.then(() => ({
      version: n,
      featureTable: d,
      batchTable: p,
      glbBytes: E,
      gltfWorkingPath: I
    }));
  }
}
class dl extends Qs {
  parse(e) {
    const t = new DataView(e), s = Pt(t);
    console.assert(s === "pnts");
    const n = t.getUint32(4, !0);
    console.assert(n === 1);
    const i = t.getUint32(8, !0);
    console.assert(i === e.byteLength);
    const r = t.getUint32(12, !0), o = t.getUint32(16, !0), c = t.getUint32(20, !0), A = t.getUint32(24, !0), l = 28, h = e.slice(
      l,
      l + r + o
    ), u = new kn(
      h,
      0,
      r,
      o
    ), d = l + r + o, f = e.slice(
      d,
      d + c + A
    ), g = new lr(
      f,
      u.getData("BATCH_LENGTH") || u.getData("POINTS_LENGTH"),
      0,
      c,
      A
    );
    return Promise.resolve({
      version: n,
      featureTable: u,
      batchTable: g
    });
  }
}
class fl extends Qs {
  parse(e) {
    const t = new DataView(e), s = Pt(t);
    console.assert(s === "cmpt", 'CMPTLoader: The magic bytes equal "cmpt".');
    const n = t.getUint32(4, !0);
    console.assert(n === 1, 'CMPTLoader: The version listed in the header is "1".');
    const i = t.getUint32(8, !0);
    console.assert(i === e.byteLength, "CMPTLoader: The contents buffer length listed in the header matches the file.");
    const r = t.getUint32(12, !0), o = [];
    let c = 16;
    for (let A = 0; A < r; A++) {
      const l = new DataView(e, c, 12), h = Pt(l), u = l.getUint32(4, !0), d = l.getUint32(8, !0), f = new Uint8Array(e, c, d);
      o.push({
        type: h,
        buffer: f,
        version: u
      }), c += d;
    }
    return {
      version: n,
      tiles: o
    };
  }
}
function gl(a) {
  let e = 0;
  for (const s in a.attributes) {
    const n = a.getAttribute(s);
    e += n.count * n.itemSize * n.array.BYTES_PER_ELEMENT;
  }
  const t = a.getIndex();
  return e += t ? t.count * t.itemSize * t.array.BYTES_PER_ELEMENT : 0, e;
}
function Nr(a, e) {
  if (e === Ao)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), a;
  if (e === Zt || e === Tn) {
    let t = a.getIndex();
    if (t === null) {
      const r = [], o = a.getAttribute("position");
      if (o !== void 0) {
        for (let c = 0; c < o.count; c++)
          r.push(c);
        a.setIndex(r), t = a.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), a;
    }
    const s = t.count - 2, n = [];
    if (e === Zt)
      for (let r = 1; r <= s; r++)
        n.push(t.getX(0)), n.push(t.getX(r)), n.push(t.getX(r + 1));
    else
      for (let r = 0; r < s; r++)
        r % 2 === 0 ? (n.push(t.getX(r)), n.push(t.getX(r + 1)), n.push(t.getX(r + 2))) : (n.push(t.getX(r + 2)), n.push(t.getX(r + 1)), n.push(t.getX(r)));
    n.length / 3 !== s && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const i = a.clone();
    return i.setIndex(n), i.clearGroups(), i;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), a;
}
let Un = class extends ns {
  /**
   * Constructs a new glTF loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new Cl(t);
    }), this.register(function(t) {
      return new Il(t);
    }), this.register(function(t) {
      return new Ql(t);
    }), this.register(function(t) {
      return new Rl(t);
    }), this.register(function(t) {
      return new Ml(t);
    }), this.register(function(t) {
      return new xl(t);
    }), this.register(function(t) {
      return new Bl(t);
    }), this.register(function(t) {
      return new _l(t);
    }), this.register(function(t) {
      return new wl(t);
    }), this.register(function(t) {
      return new El(t);
    }), this.register(function(t) {
      return new vl(t);
    }), this.register(function(t) {
      return new yl(t);
    }), this.register(function(t) {
      return new Tl(t);
    }), this.register(function(t) {
      return new Sl(t);
    }), this.register(function(t) {
      return new ml(t);
    }), this.register(function(t) {
      return new Dl(t);
    }), this.register(function(t) {
      return new Ll(t);
    });
  }
  /**
   * Starts loading from the given URL and passes the loaded glTF asset
   * to the `onLoad()` callback.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function(GLTFLoader~LoadObject)} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Executed while the loading is in progress.
   * @param {onErrorCallback} onError - Executed when errors occur.
   */
  load(e, t, s, n) {
    const i = this;
    let r;
    if (this.resourcePath !== "")
      r = this.resourcePath;
    else if (this.path !== "") {
      const A = it.extractUrlBase(e);
      r = it.resolveURL(A, this.path);
    } else
      r = it.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(A) {
      n ? n(A) : console.error(A), i.manager.itemError(e), i.manager.itemEnd(e);
    }, c = new He(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(e, function(A) {
      try {
        i.parse(A, r, function(l) {
          t(l), i.manager.itemEnd(e);
        }, o);
      } catch (l) {
        o(l);
      }
    }, s, o);
  }
  /**
   * Sets the given Draco loader to this loader. Required for decoding assets
   * compressed with the `KHR_draco_mesh_compression` extension.
   *
   * @param {DRACOLoader} dracoLoader - The Draco loader to set.
   * @return {GLTFLoader} A reference to this loader.
   */
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  /**
   * Sets the given KTX2 loader to this loader. Required for loading KTX2
   * compressed textures.
   *
   * @param {KTX2Loader} ktx2Loader - The KTX2 loader to set.
   * @return {GLTFLoader} A reference to this loader.
   */
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  /**
   * Sets the given meshopt decoder. Required for decoding assets
   * compressed with the `EXT_meshopt_compression` extension.
   *
   * @param {Object} meshoptDecoder - The meshopt decoder to set.
   * @return {GLTFLoader} A reference to this loader.
   */
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  /**
   * Registers a plugin callback. This API is internally used to implement the various
   * glTF extensions but can also used by third-party code to add additional logic
   * to the loader.
   *
   * @param {function(parser:GLTFParser)} callback - The callback function to register.
   * @return {GLTFLoader} A reference to this loader.
   */
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  /**
   * Unregisters a plugin callback.
   *
   * @param {Function} callback - The callback function to unregister.
   * @return {GLTFLoader} A reference to this loader.
   */
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  /**
   * Parses the given FBX data and returns the resulting group.
   *
   * @param {string|ArrayBuffer} data - The raw glTF data.
   * @param {string} path - The URL base path.
   * @param {function(GLTFLoader~LoadObject)} onLoad - Executed when the loading process has been finished.
   * @param {onErrorCallback} onError - Executed when errors occur.
   */
  parse(e, t, s, n) {
    let i;
    const r = {}, o = {}, c = new TextDecoder();
    if (typeof e == "string")
      i = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (c.decode(new Uint8Array(e, 0, 4)) === Xo) {
        try {
          r[W.KHR_BINARY_GLTF] = new Fl(e);
        } catch (h) {
          n && n(h);
          return;
        }
        i = JSON.parse(r[W.KHR_BINARY_GLTF].content);
      } else
        i = JSON.parse(c.decode(e));
    else
      i = e;
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      n && n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const A = new Wl(i, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    A.fileLoader.setRequestHeader(this.requestHeader);
    for (let l = 0; l < this.pluginCallbacks.length; l++) {
      const h = this.pluginCallbacks[l](A);
      h.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[h.name] = h, r[h.name] = !0;
    }
    if (i.extensionsUsed)
      for (let l = 0; l < i.extensionsUsed.length; ++l) {
        const h = i.extensionsUsed[l], u = i.extensionsRequired || [];
        switch (h) {
          case W.KHR_MATERIALS_UNLIT:
            r[h] = new bl();
            break;
          case W.KHR_DRACO_MESH_COMPRESSION:
            r[h] = new kl(i, this.dracoLoader);
            break;
          case W.KHR_TEXTURE_TRANSFORM:
            r[h] = new Ul();
            break;
          case W.KHR_MESH_QUANTIZATION:
            r[h] = new Gl();
            break;
          default:
            u.indexOf(h) >= 0 && o[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
        }
      }
    A.setExtensions(r), A.setPlugins(o), A.parse(s, n);
  }
  /**
   * Async version of {@link GLTFLoader#parse}.
   *
   * @async
   * @param {string|ArrayBuffer} data - The raw glTF data.
   * @param {string} path - The URL base path.
   * @return {Promise<GLTFLoader~LoadObject>} A Promise that resolves with the loaded glTF when the parsing has been finished.
   */
  parseAsync(e, t) {
    const s = this;
    return new Promise(function(n, i) {
      s.parse(e, t, n, i);
    });
  }
};
function pl() {
  let a = {};
  return {
    get: function(e) {
      return a[e];
    },
    add: function(e, t) {
      a[e] = t;
    },
    remove: function(e) {
      delete a[e];
    },
    removeAll: function() {
      a = {};
    }
  };
}
const W = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
let ml = class {
  constructor(e) {
    this.parser = e, this.name = W.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let s = 0, n = t.length; s < n; s++) {
      const i = t[s];
      i.extensions && i.extensions[this.name] && i.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, i.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, s = "light:" + e;
    let n = t.cache.get(s);
    if (n) return n;
    const i = t.json, c = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e];
    let A;
    const l = new X(16777215);
    c.color !== void 0 && l.setRGB(c.color[0], c.color[1], c.color[2], he);
    const h = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        A = new Zi(l), A.target.position.set(0, 0, -1), A.add(A.target);
        break;
      case "point":
        A = new ho(l), A.distance = h;
        break;
      case "spot":
        A = new lo(l), A.distance = h, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, A.angle = c.spot.outerConeAngle, A.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, A.target.position.set(0, 0, -1), A.add(A.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return A.position.set(0, 0, 0), At(A, c), c.intensity !== void 0 && (A.intensity = c.intensity), A.name = t.createUniqueName(c.name || "light_" + e), n = Promise.resolve(A), t.cache.add(s, n), n;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, s = this.parser, i = s.json.nodes[e], o = (i.extensions && i.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(c) {
      return s._getNodeRef(t.cache, o, c);
    });
  }
}, bl = class {
  constructor() {
    this.name = W.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return ye;
  }
  extendParams(e, t, s) {
    const n = [];
    e.color = new X(1, 1, 1), e.opacity = 1;
    const i = t.pbrMetallicRoughness;
    if (i) {
      if (Array.isArray(i.baseColorFactor)) {
        const r = i.baseColorFactor;
        e.color.setRGB(r[0], r[1], r[2], he), e.opacity = r[3];
      }
      i.baseColorTexture !== void 0 && n.push(s.assignTexture(e, "map", i.baseColorTexture, Qe));
    }
    return Promise.all(n);
  }
}, El = class {
  constructor(e) {
    this.parser = e, this.name = W.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = n.extensions[this.name].emissiveStrength;
    return i !== void 0 && (t.emissiveIntensity = i), Promise.resolve();
  }
}, Cl = class {
  constructor(e) {
    this.parser = e, this.name = W.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    if (r.clearcoatFactor !== void 0 && (t.clearcoat = r.clearcoatFactor), r.clearcoatTexture !== void 0 && i.push(s.assignTexture(t, "clearcoatMap", r.clearcoatTexture)), r.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = r.clearcoatRoughnessFactor), r.clearcoatRoughnessTexture !== void 0 && i.push(s.assignTexture(t, "clearcoatRoughnessMap", r.clearcoatRoughnessTexture)), r.clearcoatNormalTexture !== void 0 && (i.push(s.assignTexture(t, "clearcoatNormalMap", r.clearcoatNormalTexture)), r.clearcoatNormalTexture.scale !== void 0)) {
      const o = r.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new H(o, o);
    }
    return Promise.all(i);
  }
}, Il = class {
  constructor(e) {
    this.parser = e, this.name = W.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : ue;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = n.extensions[this.name];
    return t.dispersion = i.dispersion !== void 0 ? i.dispersion : 0, Promise.resolve();
  }
}, yl = class {
  constructor(e) {
    this.parser = e, this.name = W.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    return r.iridescenceFactor !== void 0 && (t.iridescence = r.iridescenceFactor), r.iridescenceTexture !== void 0 && i.push(s.assignTexture(t, "iridescenceMap", r.iridescenceTexture)), r.iridescenceIor !== void 0 && (t.iridescenceIOR = r.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), r.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = r.iridescenceThicknessMinimum), r.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = r.iridescenceThicknessMaximum), r.iridescenceThicknessTexture !== void 0 && i.push(s.assignTexture(t, "iridescenceThicknessMap", r.iridescenceThicknessTexture)), Promise.all(i);
  }
}, xl = class {
  constructor(e) {
    this.parser = e, this.name = W.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [];
    t.sheenColor = new X(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const r = n.extensions[this.name];
    if (r.sheenColorFactor !== void 0) {
      const o = r.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], he);
    }
    return r.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = r.sheenRoughnessFactor), r.sheenColorTexture !== void 0 && i.push(s.assignTexture(t, "sheenColorMap", r.sheenColorTexture, Qe)), r.sheenRoughnessTexture !== void 0 && i.push(s.assignTexture(t, "sheenRoughnessMap", r.sheenRoughnessTexture)), Promise.all(i);
  }
}, Bl = class {
  constructor(e) {
    this.parser = e, this.name = W.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    return r.transmissionFactor !== void 0 && (t.transmission = r.transmissionFactor), r.transmissionTexture !== void 0 && i.push(s.assignTexture(t, "transmissionMap", r.transmissionTexture)), Promise.all(i);
  }
}, _l = class {
  constructor(e) {
    this.parser = e, this.name = W.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    t.thickness = r.thicknessFactor !== void 0 ? r.thicknessFactor : 0, r.thicknessTexture !== void 0 && i.push(s.assignTexture(t, "thicknessMap", r.thicknessTexture)), t.attenuationDistance = r.attenuationDistance || 1 / 0;
    const o = r.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new X().setRGB(o[0], o[1], o[2], he), Promise.all(i);
  }
}, wl = class {
  constructor(e) {
    this.parser = e, this.name = W.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : ue;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = n.extensions[this.name];
    return t.ior = i.ior !== void 0 ? i.ior : 1.5, Promise.resolve();
  }
}, vl = class {
  constructor(e) {
    this.parser = e, this.name = W.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    t.specularIntensity = r.specularFactor !== void 0 ? r.specularFactor : 1, r.specularTexture !== void 0 && i.push(s.assignTexture(t, "specularIntensityMap", r.specularTexture));
    const o = r.specularColorFactor || [1, 1, 1];
    return t.specularColor = new X().setRGB(o[0], o[1], o[2], he), r.specularColorTexture !== void 0 && i.push(s.assignTexture(t, "specularColorMap", r.specularColorTexture, Qe)), Promise.all(i);
  }
}, Sl = class {
  constructor(e) {
    this.parser = e, this.name = W.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    return t.bumpScale = r.bumpFactor !== void 0 ? r.bumpFactor : 1, r.bumpTexture !== void 0 && i.push(s.assignTexture(t, "bumpMap", r.bumpTexture)), Promise.all(i);
  }
}, Tl = class {
  constructor(e) {
    this.parser = e, this.name = W.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    return r.anisotropyStrength !== void 0 && (t.anisotropy = r.anisotropyStrength), r.anisotropyRotation !== void 0 && (t.anisotropyRotation = r.anisotropyRotation), r.anisotropyTexture !== void 0 && i.push(s.assignTexture(t, "anisotropyMap", r.anisotropyTexture)), Promise.all(i);
  }
}, Ql = class {
  constructor(e) {
    this.parser = e, this.name = W.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, s = t.json, n = s.textures[e];
    if (!n.extensions || !n.extensions[this.name])
      return null;
    const i = n.extensions[this.name], r = t.options.ktx2Loader;
    if (!r) {
      if (s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, i.source, r);
  }
}, Rl = class {
  constructor(e) {
    this.parser = e, this.name = W.EXT_TEXTURE_WEBP;
  }
  loadTexture(e) {
    const t = this.name, s = this.parser, n = s.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const r = i.extensions[t], o = n.images[r.source];
    let c = s.textureLoader;
    if (o.uri) {
      const A = s.options.manager.getHandler(o.uri);
      A !== null && (c = A);
    }
    return s.loadTextureImage(e, r.source, c);
  }
}, Ml = class {
  constructor(e) {
    this.parser = e, this.name = W.EXT_TEXTURE_AVIF;
  }
  loadTexture(e) {
    const t = this.name, s = this.parser, n = s.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const r = i.extensions[t], o = n.images[r.source];
    let c = s.textureLoader;
    if (o.uri) {
      const A = s.options.manager.getHandler(o.uri);
      A !== null && (c = A);
    }
    return s.loadTextureImage(e, r.source, c);
  }
}, Dl = class {
  constructor(e) {
    this.name = W.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, s = t.bufferViews[e];
    if (s.extensions && s.extensions[this.name]) {
      const n = s.extensions[this.name], i = this.parser.getDependency("buffer", n.buffer), r = this.parser.options.meshoptDecoder;
      if (!r || !r.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return i.then(function(o) {
        const c = n.byteOffset || 0, A = n.byteLength || 0, l = n.count, h = n.byteStride, u = new Uint8Array(o, c, A);
        return r.decodeGltfBufferAsync ? r.decodeGltfBufferAsync(l, h, u, n.mode, n.filter).then(function(d) {
          return d.buffer;
        }) : r.ready.then(function() {
          const d = new ArrayBuffer(l * h);
          return r.decodeGltfBuffer(new Uint8Array(d), l, h, u, n.mode, n.filter), d;
        });
      });
    } else
      return null;
  }
}, Ll = class {
  constructor(e) {
    this.name = W.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, s = t.nodes[e];
    if (!s.extensions || !s.extensions[this.name] || s.mesh === void 0)
      return null;
    const n = t.meshes[s.mesh];
    for (const A of n.primitives)
      if (A.mode !== Pe.TRIANGLES && A.mode !== Pe.TRIANGLE_STRIP && A.mode !== Pe.TRIANGLE_FAN && A.mode !== void 0)
        return null;
    const r = s.extensions[this.name].attributes, o = [], c = {};
    for (const A in r)
      o.push(this.parser.getDependency("accessor", r[A]).then((l) => (c[A] = l, c[A])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((A) => {
      const l = A.pop(), h = l.isGroup ? l.children : [l], u = A[0].count, d = [];
      for (const f of h) {
        const g = new z(), p = new x(), b = new qe(), m = new x(1, 1, 1), E = new $i(f.geometry, f.material, u);
        for (let C = 0; C < u; C++)
          c.TRANSLATION && p.fromBufferAttribute(c.TRANSLATION, C), c.ROTATION && b.fromBufferAttribute(c.ROTATION, C), c.SCALE && m.fromBufferAttribute(c.SCALE, C), E.setMatrixAt(C, g.compose(p, b, m));
        for (const C in c)
          if (C === "_COLOR_0") {
            const I = c[C];
            E.instanceColor = new Qn(I.array, I.itemSize, I.normalized);
          } else C !== "TRANSLATION" && C !== "ROTATION" && C !== "SCALE" && f.geometry.setAttribute(C, c[C]);
        Tt.prototype.copy.call(E, f), this.parser.assignFinalMaterial(E), d.push(E);
      }
      return l.isGroup ? (l.clear(), l.add(...d), l) : d[0];
    }));
  }
};
const Xo = "glTF", as = 12, Or = { JSON: 1313821514, BIN: 5130562 };
let Fl = class {
  constructor(e) {
    this.name = W.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, as), s = new TextDecoder();
    if (this.header = {
      magic: s.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Xo)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - as, i = new DataView(e, as);
    let r = 0;
    for (; r < n; ) {
      const o = i.getUint32(r, !0);
      r += 4;
      const c = i.getUint32(r, !0);
      if (r += 4, c === Or.JSON) {
        const A = new Uint8Array(e, as + r, o);
        this.content = s.decode(A);
      } else if (c === Or.BIN) {
        const A = as + r;
        this.body = e.slice(A, A + o);
      }
      r += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}, kl = class {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = W.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const s = this.json, n = this.dracoLoader, i = e.extensions[this.name].bufferView, r = e.extensions[this.name].attributes, o = {}, c = {}, A = {};
    for (const l in r) {
      const h = Ui[l] || l.toLowerCase();
      o[h] = r[l];
    }
    for (const l in e.attributes) {
      const h = Ui[l] || l.toLowerCase();
      if (r[l] !== void 0) {
        const u = s.accessors[e.attributes[l]], d = Jt[u.componentType];
        A[h] = d.name, c[h] = u.normalized === !0;
      }
    }
    return t.getDependency("bufferView", i).then(function(l) {
      return new Promise(function(h, u) {
        n.decodeDracoFile(l, function(d) {
          for (const f in d.attributes) {
            const g = d.attributes[f], p = c[f];
            p !== void 0 && (g.normalized = p);
          }
          h(d);
        }, o, A, he, u);
      });
    });
  }
}, Ul = class {
  constructor() {
    this.name = W.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}, Gl = class {
  constructor() {
    this.name = W.KHR_MESH_QUANTIZATION;
  }
}, Zo = class extends So {
  constructor(e, t, s, n) {
    super(e, t, s, n);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, s = this.sampleValues, n = this.valueSize, i = e * n * 3 + n;
    for (let r = 0; r !== n; r++)
      t[r] = s[i + r];
    return t;
  }
  interpolate_(e, t, s, n) {
    const i = this.resultBuffer, r = this.sampleValues, o = this.valueSize, c = o * 2, A = o * 3, l = n - t, h = (s - t) / l, u = h * h, d = u * h, f = e * A, g = f - A, p = -2 * d + 3 * u, b = d - u, m = 1 - p, E = b - u + h;
    for (let C = 0; C !== o; C++) {
      const I = r[g + C + o], _ = r[g + C + c] * l, B = r[f + C + o], y = r[f + C] * l;
      i[C] = m * I + E * _ + p * B + b * y;
    }
    return i;
  }
};
const Pl = new qe();
let Nl = class extends Zo {
  interpolate_(e, t, s, n) {
    const i = super.interpolate_(e, t, s, n);
    return Pl.fromArray(i).normalize().toArray(i), i;
  }
};
const Pe = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, Jt = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, Hr = {
  9728: $t,
  9729: ne,
  9984: bo,
  9985: mo,
  9986: po,
  9987: is
}, zr = {
  33071: fe,
  33648: Eo,
  10497: es
}, zn = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Ui = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, bt = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Ol = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: Dn,
  STEP: vo
}, jn = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Hl(a) {
  return a.DefaultMaterial === void 0 && (a.DefaultMaterial = new rs({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: nr
  })), a.DefaultMaterial;
}
function Mt(a, e, t) {
  for (const s in t.extensions)
    a[s] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[s] = t.extensions[s]);
}
function At(a, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(a.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function zl(a, e, t) {
  let s = !1, n = !1, i = !1;
  for (let A = 0, l = e.length; A < l; A++) {
    const h = e[A];
    if (h.POSITION !== void 0 && (s = !0), h.NORMAL !== void 0 && (n = !0), h.COLOR_0 !== void 0 && (i = !0), s && n && i) break;
  }
  if (!s && !n && !i) return Promise.resolve(a);
  const r = [], o = [], c = [];
  for (let A = 0, l = e.length; A < l; A++) {
    const h = e[A];
    if (s) {
      const u = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : a.attributes.position;
      r.push(u);
    }
    if (n) {
      const u = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : a.attributes.normal;
      o.push(u);
    }
    if (i) {
      const u = h.COLOR_0 !== void 0 ? t.getDependency("accessor", h.COLOR_0) : a.attributes.color;
      c.push(u);
    }
  }
  return Promise.all([
    Promise.all(r),
    Promise.all(o),
    Promise.all(c)
  ]).then(function(A) {
    const l = A[0], h = A[1], u = A[2];
    return s && (a.morphAttributes.position = l), n && (a.morphAttributes.normal = h), i && (a.morphAttributes.color = u), a.morphTargetsRelative = !0, a;
  });
}
function jl(a, e) {
  if (a.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, s = e.weights.length; t < s; t++)
      a.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (a.morphTargetInfluences.length === t.length) {
      a.morphTargetDictionary = {};
      for (let s = 0, n = t.length; s < n; s++)
        a.morphTargetDictionary[t[s]] = s;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Vl(a) {
  let e;
  const t = a.extensions && a.extensions[W.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Vn(t.attributes) : e = a.indices + ":" + Vn(a.attributes) + ":" + a.mode, a.targets !== void 0)
    for (let s = 0, n = a.targets.length; s < n; s++)
      e += ":" + Vn(a.targets[s]);
  return e;
}
function Vn(a) {
  let e = "";
  const t = Object.keys(a).sort();
  for (let s = 0, n = t.length; s < n; s++)
    e += t[s] + ":" + a[t[s]] + ";";
  return e;
}
function Gi(a) {
  switch (a) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function ql(a) {
  return a.search(/\.jpe?g($|\?)/i) > 0 || a.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : a.search(/\.webp($|\?)/i) > 0 || a.search(/^data\:image\/webp/) === 0 ? "image/webp" : a.search(/\.ktx2($|\?)/i) > 0 || a.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const Kl = new z();
let Wl = class {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new pl(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let s = !1, n = -1, i = !1, r = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      s = /^((?!chrome|android).)*safari/i.test(o) === !0;
      const c = o.match(/Version\/(\d+)/);
      n = s && c ? parseInt(c[1], 10) : -1, i = o.indexOf("Firefox") > -1, r = i ? o.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || s && n < 17 || i && r < 98 ? this.textureLoader = new uo(this.options.manager) : this.textureLoader = new fo(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new He(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const s = this, n = this.json, i = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(r) {
      return r._markDefs && r._markDefs();
    }), Promise.all(this._invokeAll(function(r) {
      return r.beforeRoot && r.beforeRoot();
    })).then(function() {
      return Promise.all([
        s.getDependencies("scene"),
        s.getDependencies("animation"),
        s.getDependencies("camera")
      ]);
    }).then(function(r) {
      const o = {
        scene: r[0][n.scene || 0],
        scenes: r[0],
        animations: r[1],
        cameras: r[2],
        asset: n.asset,
        parser: s,
        userData: {}
      };
      return Mt(i, o, n), At(o, n), Promise.all(s._invokeAll(function(c) {
        return c.afterRoot && c.afterRoot(o);
      })).then(function() {
        for (const c of o.scenes)
          c.updateMatrixWorld();
        e(o);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   *
   * @private
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], s = this.json.meshes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n].joints;
      for (let o = 0, c = r.length; o < c; o++)
        e[r[o]].isBone = !0;
    }
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (s[r.mesh].isSkinnedMesh = !0)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   *
   * @private
   * @param {Object} cache
   * @param {Object3D} index
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /**
   * Returns a reference to a shared resource, cloning it if necessary.
   *
   * @private
   * @param {Object} cache
   * @param {number} index
   * @param {Object} object
   * @return {Object}
   */
  _getNodeRef(e, t, s) {
    if (e.refs[t] <= 1) return s;
    const n = s.clone(), i = (r, o) => {
      const c = this.associations.get(r);
      c != null && this.associations.set(o, c);
      for (const [A, l] of r.children.entries())
        i(l, o.children[A]);
    };
    return i(s, n), n.name += "_instance_" + e.uses[t]++, n;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let s = 0; s < t.length; s++) {
      const n = e(t[s]);
      if (n) return n;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const s = [];
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      i && s.push(i);
    }
    return s;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   *
   * @private
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const s = e + ":" + t;
    let n = this.cache.get(s);
    if (!n) {
      switch (e) {
        case "scene":
          n = this.loadScene(t);
          break;
        case "node":
          n = this._invokeOne(function(i) {
            return i.loadNode && i.loadNode(t);
          });
          break;
        case "mesh":
          n = this._invokeOne(function(i) {
            return i.loadMesh && i.loadMesh(t);
          });
          break;
        case "accessor":
          n = this.loadAccessor(t);
          break;
        case "bufferView":
          n = this._invokeOne(function(i) {
            return i.loadBufferView && i.loadBufferView(t);
          });
          break;
        case "buffer":
          n = this.loadBuffer(t);
          break;
        case "material":
          n = this._invokeOne(function(i) {
            return i.loadMaterial && i.loadMaterial(t);
          });
          break;
        case "texture":
          n = this._invokeOne(function(i) {
            return i.loadTexture && i.loadTexture(t);
          });
          break;
        case "skin":
          n = this.loadSkin(t);
          break;
        case "animation":
          n = this._invokeOne(function(i) {
            return i.loadAnimation && i.loadAnimation(t);
          });
          break;
        case "camera":
          n = this.loadCamera(t);
          break;
        default:
          if (n = this._invokeOne(function(i) {
            return i != this && i.getDependency && i.getDependency(e, t);
          }), !n)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(s, n);
    }
    return n;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   *
   * @private
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const s = this, n = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(n.map(function(i, r) {
        return s.getDependency(e, r);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   *
   * @private
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], s = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[W.KHR_BINARY_GLTF].body);
    const n = this.options;
    return new Promise(function(i, r) {
      s.load(it.resolveURL(t.uri, n.path), i, void 0, function() {
        r(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   *
   * @private
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(s) {
      const n = t.byteLength || 0, i = t.byteOffset || 0;
      return s.slice(i, i + n);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   *
   * @private
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, s = this.json, n = this.json.accessors[e];
    if (n.bufferView === void 0 && n.sparse === void 0) {
      const r = zn[n.type], o = Jt[n.componentType], c = n.normalized === !0, A = new o(n.count * r);
      return Promise.resolve(new oe(A, r, c));
    }
    const i = [];
    return n.bufferView !== void 0 ? i.push(this.getDependency("bufferView", n.bufferView)) : i.push(null), n.sparse !== void 0 && (i.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(i).then(function(r) {
      const o = r[0], c = zn[n.type], A = Jt[n.componentType], l = A.BYTES_PER_ELEMENT, h = l * c, u = n.byteOffset || 0, d = n.bufferView !== void 0 ? s.bufferViews[n.bufferView].byteStride : void 0, f = n.normalized === !0;
      let g, p;
      if (d && d !== h) {
        const b = Math.floor(u / d), m = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + b + ":" + n.count;
        let E = t.cache.get(m);
        E || (g = new A(o, b * d, n.count * d / l), E = new go(g, d / l), t.cache.add(m, E)), p = new xt(E, c, u % d / l, f);
      } else
        o === null ? g = new A(n.count * c) : g = new A(o, u, n.count * c), p = new oe(g, c, f);
      if (n.sparse !== void 0) {
        const b = zn.SCALAR, m = Jt[n.sparse.indices.componentType], E = n.sparse.indices.byteOffset || 0, C = n.sparse.values.byteOffset || 0, I = new m(r[1], E, n.sparse.count * b), _ = new A(r[2], C, n.sparse.count * c);
        o !== null && (p = new oe(p.array.slice(), p.itemSize, p.normalized)), p.normalized = !1;
        for (let B = 0, y = I.length; B < y; B++) {
          const w = I[B];
          if (p.setX(w, _[B * c]), c >= 2 && p.setY(w, _[B * c + 1]), c >= 3 && p.setZ(w, _[B * c + 2]), c >= 4 && p.setW(w, _[B * c + 3]), c >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        p.normalized = f;
      }
      return p;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   *
   * @private
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, s = this.options, i = t.textures[e].source, r = t.images[i];
    let o = this.textureLoader;
    if (r.uri) {
      const c = s.manager.getHandler(r.uri);
      c !== null && (o = c);
    }
    return this.loadTextureImage(e, i, o);
  }
  loadTextureImage(e, t, s) {
    const n = this, i = this.json, r = i.textures[e], o = i.images[t], c = (o.uri || o.bufferView) + ":" + r.sampler;
    if (this.textureCache[c])
      return this.textureCache[c];
    const A = this.loadImageSource(t, s).then(function(l) {
      l.flipY = !1, l.name = r.name || o.name || "", l.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (l.name = o.uri);
      const u = (i.samplers || {})[r.sampler] || {};
      return l.magFilter = Hr[u.magFilter] || ne, l.minFilter = Hr[u.minFilter] || is, l.wrapS = zr[u.wrapS] || es, l.wrapT = zr[u.wrapT] || es, l.generateMipmaps = !l.isCompressedTexture && l.minFilter !== $t && l.minFilter !== ne, n.associations.set(l, { textures: e }), l;
    }).catch(function() {
      return null;
    });
    return this.textureCache[c] = A, A;
  }
  loadImageSource(e, t) {
    const s = this, n = this.json, i = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((h) => h.clone());
    const r = n.images[e], o = self.URL || self.webkitURL;
    let c = r.uri || "", A = !1;
    if (r.bufferView !== void 0)
      c = s.getDependency("bufferView", r.bufferView).then(function(h) {
        A = !0;
        const u = new Blob([h], { type: r.mimeType });
        return c = o.createObjectURL(u), c;
      });
    else if (r.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const l = Promise.resolve(c).then(function(h) {
      return new Promise(function(u, d) {
        let f = u;
        t.isImageBitmapLoader === !0 && (f = function(g) {
          const p = new ln(g);
          p.needsUpdate = !0, u(p);
        }), t.load(it.resolveURL(h, i.path), f, void 0, d);
      });
    }).then(function(h) {
      return A === !0 && o.revokeObjectURL(c), At(h, r), h.userData.mimeType = r.mimeType || ql(r.uri), h;
    }).catch(function(h) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", c), h;
    });
    return this.sourceCache[e] = l, l;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   *
   * @private
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @param {string} [colorSpace]
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, s, n) {
    const i = this;
    return this.getDependency("texture", s.index).then(function(r) {
      if (!r) return null;
      if (s.texCoord !== void 0 && s.texCoord > 0 && (r = r.clone(), r.channel = s.texCoord), i.extensions[W.KHR_TEXTURE_TRANSFORM]) {
        const o = s.extensions !== void 0 ? s.extensions[W.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const c = i.associations.get(r);
          r = i.extensions[W.KHR_TEXTURE_TRANSFORM].extendTexture(r, o), i.associations.set(r, c);
        }
      }
      return n !== void 0 && (r.colorSpace = n), e[t] = r, r;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   *
   * @private
   * @param {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let s = e.material;
    const n = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, r = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + s.uuid;
      let c = this.cache.get(o);
      c || (c = new Rn(), ut.prototype.copy.call(c, s), c.color.copy(s.color), c.map = s.map, c.sizeAttenuation = !1, this.cache.add(o, c)), s = c;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + s.uuid;
      let c = this.cache.get(o);
      c || (c = new er(), ut.prototype.copy.call(c, s), c.color.copy(s.color), c.map = s.map, this.cache.add(o, c)), s = c;
    }
    if (n || i || r) {
      let o = "ClonedMaterial:" + s.uuid + ":";
      n && (o += "derivative-tangents:"), i && (o += "vertex-colors:"), r && (o += "flat-shading:");
      let c = this.cache.get(o);
      c || (c = s.clone(), i && (c.vertexColors = !0), r && (c.flatShading = !0), n && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(o, c), this.associations.set(c, this.associations.get(s))), s = c;
    }
    e.material = s;
  }
  getMaterialType() {
    return rs;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   *
   * @private
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, s = this.json, n = this.extensions, i = s.materials[e];
    let r;
    const o = {}, c = i.extensions || {}, A = [];
    if (c[W.KHR_MATERIALS_UNLIT]) {
      const h = n[W.KHR_MATERIALS_UNLIT];
      r = h.getMaterialType(), A.push(h.extendParams(o, i, t));
    } else {
      const h = i.pbrMetallicRoughness || {};
      if (o.color = new X(1, 1, 1), o.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const u = h.baseColorFactor;
        o.color.setRGB(u[0], u[1], u[2], he), o.opacity = u[3];
      }
      h.baseColorTexture !== void 0 && A.push(t.assignTexture(o, "map", h.baseColorTexture, Qe)), o.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, o.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (A.push(t.assignTexture(o, "metalnessMap", h.metallicRoughnessTexture)), A.push(t.assignTexture(o, "roughnessMap", h.metallicRoughnessTexture))), r = this._invokeOne(function(u) {
        return u.getMaterialType && u.getMaterialType(e);
      }), A.push(Promise.all(this._invokeAll(function(u) {
        return u.extendMaterialParams && u.extendMaterialParams(e, o);
      })));
    }
    i.doubleSided === !0 && (o.side = ft);
    const l = i.alphaMode || jn.OPAQUE;
    if (l === jn.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, l === jn.MASK && (o.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && r !== ye && (A.push(t.assignTexture(o, "normalMap", i.normalTexture)), o.normalScale = new H(1, 1), i.normalTexture.scale !== void 0)) {
      const h = i.normalTexture.scale;
      o.normalScale.set(h, h);
    }
    if (i.occlusionTexture !== void 0 && r !== ye && (A.push(t.assignTexture(o, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && r !== ye) {
      const h = i.emissiveFactor;
      o.emissive = new X().setRGB(h[0], h[1], h[2], he);
    }
    return i.emissiveTexture !== void 0 && r !== ye && A.push(t.assignTexture(o, "emissiveMap", i.emissiveTexture, Qe)), Promise.all(A).then(function() {
      const h = new r(o);
      return i.name && (h.name = i.name), At(h, i), t.associations.set(h, { materials: e }), i.extensions && Mt(n, h, i), h;
    });
  }
  /**
   * When Object3D instances are targeted by animation, they need unique names.
   *
   * @private
   * @param {string} originalName
   * @return {string}
   */
  createUniqueName(e) {
    const t = Co.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @private
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, s = this.extensions, n = this.primitiveCache;
    function i(o) {
      return s[W.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(c) {
        return jr(c, o, t);
      });
    }
    const r = [];
    for (let o = 0, c = e.length; o < c; o++) {
      const A = e[o], l = Vl(A), h = n[l];
      if (h)
        r.push(h.promise);
      else {
        let u;
        A.extensions && A.extensions[W.KHR_DRACO_MESH_COMPRESSION] ? u = i(A) : u = jr(new xe(), A, t), n[l] = { primitive: A, promise: u }, r.push(u);
      }
    }
    return Promise.all(r);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   *
   * @private
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh|Line|Points>}
   */
  loadMesh(e) {
    const t = this, s = this.json, n = this.extensions, i = s.meshes[e], r = i.primitives, o = [];
    for (let c = 0, A = r.length; c < A; c++) {
      const l = r[c].material === void 0 ? Hl(this.cache) : this.getDependency("material", r[c].material);
      o.push(l);
    }
    return o.push(t.loadGeometries(r)), Promise.all(o).then(function(c) {
      const A = c.slice(0, c.length - 1), l = c[c.length - 1], h = [];
      for (let d = 0, f = l.length; d < f; d++) {
        const g = l[d], p = r[d];
        let b;
        const m = A[d];
        if (p.mode === Pe.TRIANGLES || p.mode === Pe.TRIANGLE_STRIP || p.mode === Pe.TRIANGLE_FAN || p.mode === void 0)
          b = i.isSkinnedMesh === !0 ? new Io(g, m) : new De(g, m), b.isSkinnedMesh === !0 && b.normalizeSkinWeights(), p.mode === Pe.TRIANGLE_STRIP ? b.geometry = Nr(b.geometry, Tn) : p.mode === Pe.TRIANGLE_FAN && (b.geometry = Nr(b.geometry, Zt));
        else if (p.mode === Pe.LINES)
          b = new Mn(g, m);
        else if (p.mode === Pe.LINE_STRIP)
          b = new yo(g, m);
        else if (p.mode === Pe.LINE_LOOP)
          b = new xo(g, m);
        else if (p.mode === Pe.POINTS)
          b = new tr(g, m);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
        Object.keys(b.geometry.morphAttributes).length > 0 && jl(b, i), b.name = t.createUniqueName(i.name || "mesh_" + e), At(b, i), p.extensions && Mt(n, b, p), t.assignFinalMaterial(b), h.push(b);
      }
      for (let d = 0, f = h.length; d < f; d++)
        t.associations.set(h[d], {
          meshes: e,
          primitives: d
        });
      if (h.length === 1)
        return i.extensions && Mt(n, h[0], i), h[0];
      const u = new le();
      i.extensions && Mt(n, u, i), t.associations.set(u, { meshes: e });
      for (let d = 0, f = h.length; d < f; d++)
        u.add(h[d]);
      return u;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   *
   * @private
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const s = this.json.cameras[e], n = s[s.type];
    if (!n) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return s.type === "perspective" ? t = new Sn(ee.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : s.type === "orthographic" && (t = new sr(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), s.name && (t.name = this.createUniqueName(s.name)), At(t, s), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   *
   * @private
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], s = [];
    for (let n = 0, i = t.joints.length; n < i; n++)
      s.push(this._loadNodeShallow(t.joints[n]));
    return t.inverseBindMatrices !== void 0 ? s.push(this.getDependency("accessor", t.inverseBindMatrices)) : s.push(null), Promise.all(s).then(function(n) {
      const i = n.pop(), r = n, o = [], c = [];
      for (let A = 0, l = r.length; A < l; A++) {
        const h = r[A];
        if (h) {
          o.push(h);
          const u = new z();
          i !== null && u.fromArray(i.array, A * 16), c.push(u);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[A]);
      }
      return new Bo(o, c);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   *
   * @private
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, s = this, n = t.animations[e], i = n.name ? n.name : "animation_" + e, r = [], o = [], c = [], A = [], l = [];
    for (let h = 0, u = n.channels.length; h < u; h++) {
      const d = n.channels[h], f = n.samplers[d.sampler], g = d.target, p = g.node, b = n.parameters !== void 0 ? n.parameters[f.input] : f.input, m = n.parameters !== void 0 ? n.parameters[f.output] : f.output;
      g.node !== void 0 && (r.push(this.getDependency("node", p)), o.push(this.getDependency("accessor", b)), c.push(this.getDependency("accessor", m)), A.push(f), l.push(g));
    }
    return Promise.all([
      Promise.all(r),
      Promise.all(o),
      Promise.all(c),
      Promise.all(A),
      Promise.all(l)
    ]).then(function(h) {
      const u = h[0], d = h[1], f = h[2], g = h[3], p = h[4], b = [];
      for (let m = 0, E = u.length; m < E; m++) {
        const C = u[m], I = d[m], _ = f[m], B = g[m], y = p[m];
        if (C === void 0) continue;
        C.updateMatrix && C.updateMatrix();
        const w = s._createAnimationTracks(C, I, _, B, y);
        if (w)
          for (let v = 0; v < w.length; v++)
            b.push(w[v]);
      }
      return new _o(i, void 0, b);
    });
  }
  createNodeMesh(e) {
    const t = this.json, s = this, n = t.nodes[e];
    return n.mesh === void 0 ? null : s.getDependency("mesh", n.mesh).then(function(i) {
      const r = s._getNodeRef(s.meshCache, n.mesh, i);
      return n.weights !== void 0 && r.traverse(function(o) {
        if (o.isMesh)
          for (let c = 0, A = n.weights.length; c < A; c++)
            o.morphTargetInfluences[c] = n.weights[c];
      }), r;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   *
   * @private
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, s = this, n = t.nodes[e], i = s._loadNodeShallow(e), r = [], o = n.children || [];
    for (let A = 0, l = o.length; A < l; A++)
      r.push(s.getDependency("node", o[A]));
    const c = n.skin === void 0 ? Promise.resolve(null) : s.getDependency("skin", n.skin);
    return Promise.all([
      i,
      Promise.all(r),
      c
    ]).then(function(A) {
      const l = A[0], h = A[1], u = A[2];
      u !== null && l.traverse(function(d) {
        d.isSkinnedMesh && d.bind(u, Kl);
      });
      for (let d = 0, f = h.length; d < f; d++)
        l.add(h[d]);
      return l;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, s = this.extensions, n = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const i = t.nodes[e], r = i.name ? n.createUniqueName(i.name) : "", o = [], c = n._invokeOne(function(A) {
      return A.createNodeMesh && A.createNodeMesh(e);
    });
    return c && o.push(c), i.camera !== void 0 && o.push(n.getDependency("camera", i.camera).then(function(A) {
      return n._getNodeRef(n.cameraCache, i.camera, A);
    })), n._invokeAll(function(A) {
      return A.createNodeAttachment && A.createNodeAttachment(e);
    }).forEach(function(A) {
      o.push(A);
    }), this.nodeCache[e] = Promise.all(o).then(function(A) {
      let l;
      if (i.isBone === !0 ? l = new wo() : A.length > 1 ? l = new le() : A.length === 1 ? l = A[0] : l = new Tt(), l !== A[0])
        for (let h = 0, u = A.length; h < u; h++)
          l.add(A[h]);
      if (i.name && (l.userData.name = i.name, l.name = r), At(l, i), i.extensions && Mt(s, l, i), i.matrix !== void 0) {
        const h = new z();
        h.fromArray(i.matrix), l.applyMatrix4(h);
      } else
        i.translation !== void 0 && l.position.fromArray(i.translation), i.rotation !== void 0 && l.quaternion.fromArray(i.rotation), i.scale !== void 0 && l.scale.fromArray(i.scale);
      if (!n.associations.has(l))
        n.associations.set(l, {});
      else if (i.mesh !== void 0 && n.meshCache.refs[i.mesh] > 1) {
        const h = n.associations.get(l);
        n.associations.set(l, { ...h });
      }
      return n.associations.get(l).nodes = e, l;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   *
   * @private
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, s = this.json.scenes[e], n = this, i = new le();
    s.name && (i.name = n.createUniqueName(s.name)), At(i, s), s.extensions && Mt(t, i, s);
    const r = s.nodes || [], o = [];
    for (let c = 0, A = r.length; c < A; c++)
      o.push(n.getDependency("node", r[c]));
    return Promise.all(o).then(function(c) {
      for (let l = 0, h = c.length; l < h; l++)
        i.add(c[l]);
      const A = (l) => {
        const h = /* @__PURE__ */ new Map();
        for (const [u, d] of n.associations)
          (u instanceof ut || u instanceof ln) && h.set(u, d);
        return l.traverse((u) => {
          const d = n.associations.get(u);
          d != null && h.set(u, d);
        }), h;
      };
      return n.associations = A(i), i;
    });
  }
  _createAnimationTracks(e, t, s, n, i) {
    const r = [], o = e.name ? e.name : e.uuid, c = [];
    bt[i.path] === bt.weights ? e.traverse(function(u) {
      u.morphTargetInfluences && c.push(u.name ? u.name : u.uuid);
    }) : c.push(o);
    let A;
    switch (bt[i.path]) {
      case bt.weights:
        A = un;
        break;
      case bt.rotation:
        A = dn;
        break;
      case bt.translation:
      case bt.scale:
        A = hn;
        break;
      default:
        switch (s.itemSize) {
          case 1:
            A = un;
            break;
          case 2:
          case 3:
          default:
            A = hn;
            break;
        }
        break;
    }
    const l = n.interpolation !== void 0 ? Ol[n.interpolation] : Dn, h = this._getArrayFromAccessor(s);
    for (let u = 0, d = c.length; u < d; u++) {
      const f = new A(
        c[u] + "." + bt[i.path],
        t.array,
        h,
        l
      );
      n.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(f), r.push(f);
    }
    return r;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const s = Gi(t.constructor), n = new Float32Array(t.length);
      for (let i = 0, r = t.length; i < r; i++)
        n[i] = t[i] * s;
      t = n;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(s) {
      const n = this instanceof dn ? Nl : Zo;
      return new n(this.times, this.values, this.getValueSize() / 3, s);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
};
function Jl(a, e, t) {
  const s = e.attributes, n = new Le();
  if (s.POSITION !== void 0) {
    const o = t.json.accessors[s.POSITION], c = o.min, A = o.max;
    if (c !== void 0 && A !== void 0) {
      if (n.set(
        new x(c[0], c[1], c[2]),
        new x(A[0], A[1], A[2])
      ), o.normalized) {
        const l = Gi(Jt[o.componentType]);
        n.min.multiplyScalar(l), n.max.multiplyScalar(l);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const i = e.targets;
  if (i !== void 0) {
    const o = new x(), c = new x();
    for (let A = 0, l = i.length; A < l; A++) {
      const h = i[A];
      if (h.POSITION !== void 0) {
        const u = t.json.accessors[h.POSITION], d = u.min, f = u.max;
        if (d !== void 0 && f !== void 0) {
          if (c.setX(Math.max(Math.abs(d[0]), Math.abs(f[0]))), c.setY(Math.max(Math.abs(d[1]), Math.abs(f[1]))), c.setZ(Math.max(Math.abs(d[2]), Math.abs(f[2]))), u.normalized) {
            const g = Gi(Jt[u.componentType]);
            c.multiplyScalar(g);
          }
          o.max(c);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    n.expandByVector(o);
  }
  a.boundingBox = n;
  const r = new Fe();
  n.getCenter(r.center), r.radius = n.min.distanceTo(n.max) / 2, a.boundingSphere = r;
}
function jr(a, e, t) {
  const s = e.attributes, n = [];
  function i(r, o) {
    return t.getDependency("accessor", r).then(function(c) {
      a.setAttribute(o, c);
    });
  }
  for (const r in s) {
    const o = Ui[r] || r.toLowerCase();
    o in a.attributes || n.push(i(s[r], o));
  }
  if (e.indices !== void 0 && !a.index) {
    const r = t.getDependency("accessor", e.indices).then(function(o) {
      a.setIndex(o);
    });
    n.push(r);
  }
  return ys.workingColorSpace !== he && "COLOR_0" in s && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ys.workingColorSpace}" not supported.`), At(a, e), Jl(a, e, t), Promise.all(n).then(function() {
    return e.targets !== void 0 ? zl(a, e.targets, t) : a;
  });
}
class $o extends hl {
  constructor(e = Ln) {
    super(), this.manager = e, this.adjustmentTransform = new z();
  }
  parse(e) {
    const t = super.parse(e), s = t.glbBytes.slice().buffer;
    return new Promise((n, i) => {
      const r = this.manager, o = this.fetchOptions, c = r.getHandler("path.gltf") || new Un(r);
      o.credentials === "include" && o.mode === "cors" && c.setCrossOrigin("use-credentials"), "credentials" in o && c.setWithCredentials(o.credentials === "include"), o.headers && c.setRequestHeader(o.headers);
      let A = this.workingPath;
      !/[\\/]$/.test(A) && A.length && (A += "/");
      const l = this.adjustmentTransform;
      c.parse(s, A, (h) => {
        const { batchTable: u, featureTable: d } = t, { scene: f } = h, g = d.getData("RTC_CENTER", 1, "FLOAT", "VEC3");
        g && (f.position.x += g[0], f.position.y += g[1], f.position.z += g[2]), h.scene.updateMatrix(), h.scene.matrix.multiply(l), h.scene.matrix.decompose(h.scene.position, h.scene.quaternion, h.scene.scale), h.batchTable = u, h.featureTable = d, f.batchTable = u, f.featureTable = d, n(h);
      }, i);
    });
  }
}
function Yl(a) {
  const e = a >> 11, t = a >> 5 & 63, s = a & 31, n = Math.round(e / 31 * 255), i = Math.round(t / 63 * 255), r = Math.round(s / 31 * 255);
  return [n, i, r];
}
const os = new H();
function Xl(a, e, t = new x()) {
  os.set(a, e).divideScalar(256).multiplyScalar(2).subScalar(1), t.set(os.x, os.y, 1 - Math.abs(os.x) - Math.abs(os.y));
  const s = ee.clamp(-t.z, 0, 1);
  return t.x >= 0 ? t.setX(t.x - s) : t.setX(t.x + s), t.y >= 0 ? t.setY(t.y - s) : t.setY(t.y + s), t.normalize(), t;
}
const Vr = {
  RGB: "color",
  POSITION: "position"
};
class ec extends dl {
  constructor(e = Ln) {
    super(), this.manager = e;
  }
  parse(e) {
    return super.parse(e).then(async (t) => {
      const { featureTable: s, batchTable: n } = t, i = new Rn(), r = s.header.extensions, o = new x();
      let c;
      if (r && r["3DTILES_draco_point_compression"]) {
        const { byteOffset: h, byteLength: u, properties: d } = r["3DTILES_draco_point_compression"], f = this.manager.getHandler("draco.drc");
        if (f == null)
          throw new Error("PNTSLoader: dracoLoader not available.");
        const g = {};
        for (const m in d)
          if (m in Vr && m in d) {
            const E = Vr[m];
            g[E] = d[m];
          }
        const p = {
          attributeIDs: g,
          attributeTypes: {
            position: "Float32Array",
            color: "Uint8Array"
          },
          useUniqueIDs: !0
        }, b = s.getBuffer(h, u);
        c = await f.decodeGeometry(b, p), c.attributes.color && (i.vertexColors = !0);
      } else {
        const h = s.getData("POINTS_LENGTH"), u = s.getData("POSITION", h, "FLOAT", "VEC3"), d = s.getData("NORMAL", h, "FLOAT", "VEC3"), f = s.getData("NORMAL", h, "UNSIGNED_BYTE", "VEC2"), g = s.getData("RGB", h, "UNSIGNED_BYTE", "VEC3"), p = s.getData("RGBA", h, "UNSIGNED_BYTE", "VEC4"), b = s.getData("RGB565", h, "UNSIGNED_SHORT", "SCALAR"), m = s.getData("CONSTANT_RGBA", h, "UNSIGNED_BYTE", "VEC4"), E = s.getData("POSITION_QUANTIZED", h, "UNSIGNED_SHORT", "VEC3"), C = s.getData("QUANTIZED_VOLUME_SCALE", h, "FLOAT", "VEC3"), I = s.getData("QUANTIZED_VOLUME_OFFSET", h, "FLOAT", "VEC3");
        if (c = new xe(), E) {
          const _ = new Float32Array(h * 3);
          for (let B = 0; B < h; B++)
            for (let y = 0; y < 3; y++) {
              const w = 3 * B + y;
              _[w] = E[w] / 65535 * C[y];
            }
          o.x = I[0], o.y = I[1], o.z = I[2], c.setAttribute("position", new oe(_, 3, !1));
        } else
          c.setAttribute("position", new oe(u, 3, !1));
        if (d !== null)
          c.setAttribute("normal", new oe(d, 3, !1));
        else if (f !== null) {
          const _ = new Float32Array(h * 3), B = new x();
          for (let y = 0; y < h; y++) {
            const w = f[y * 2], v = f[y * 2 + 1], S = Xl(w, v, B);
            _[y * 3] = S.x, _[y * 3 + 1] = S.y, _[y * 3 + 2] = S.z;
          }
          c.setAttribute("normal", new oe(_, 3, !1));
        }
        if (p !== null)
          c.setAttribute("color", new oe(p, 4, !0)), i.vertexColors = !0, i.transparent = !0, i.depthWrite = !1;
        else if (g !== null)
          c.setAttribute("color", new oe(g, 3, !0)), i.vertexColors = !0;
        else if (b !== null) {
          const _ = new Uint8Array(h * 3);
          for (let B = 0; B < h; B++) {
            const y = Yl(b[B]);
            for (let w = 0; w < 3; w++) {
              const v = 3 * B + w;
              _[v] = y[w];
            }
          }
          c.setAttribute("color", new oe(_, 3, !0)), i.vertexColors = !0;
        } else if (m !== null) {
          const _ = new X(m[0], m[1], m[2]);
          i.color = _;
          const B = m[3] / 255;
          B < 1 && (i.opacity = B, i.transparent = !0, i.depthWrite = !1);
        }
      }
      const A = new tr(c, i);
      A.position.copy(o), t.scene = A, t.scene.featureTable = s, t.scene.batchTable = n;
      const l = s.getData("RTC_CENTER", 1, "FLOAT", "VEC3");
      return l && (t.scene.position.x += l[0], t.scene.position.y += l[1], t.scene.position.z += l[2]), t;
    });
  }
}
new To();
new x();
function Zl(a) {
  const { x: e, y: t, z: s } = a;
  a.x = s, a.y = e, a.z = t;
}
function $l(a) {
  return -a + Math.PI / 2;
}
const qr = new To(), Et = new x(), Ue = new x(), qn = new x(), Ct = new z(), Je = new z(), Kr = new z(), Kn = new Fe(), Se = new vn(), Wr = new x(), Jr = new x(), Yr = new x(), Dt = new x(), Xr = new ir(), eh = 1e-12, th = 0.1, Us = 0, Zr = 1, Gs = 2;
class tc {
  constructor(e = 1, t = 1, s = 1) {
    this.name = "", this.radius = new x(e, t, s);
  }
  intersectRay(e, t) {
    return Ct.makeScale(...this.radius).invert(), Kn.center.set(0, 0, 0), Kn.radius = 1, Xr.copy(e).applyMatrix4(Ct), Xr.intersectSphere(Kn, t) ? (Ct.makeScale(...this.radius), t.applyMatrix4(Ct), t) : null;
  }
  // returns a frame with Z indicating altitude, Y pointing north, X pointing east
  getEastNorthUpFrame(e, t, s, n) {
    return s.isMatrix4 && (n = s, s = 0, console.warn('Ellipsoid: The signature for "getEastNorthUpFrame" has changed.')), this.getEastNorthUpAxes(e, t, Wr, Jr, Yr), this.getCartographicToPosition(e, t, s, Dt), n.makeBasis(Wr, Jr, Yr).setPosition(Dt);
  }
  // returns a frame with z indicating altitude and az, el, roll rotation within that frame
  // - azimuth: measured off of true north, increasing towards "east" (z-axis)
  // - elevation: measured off of the horizon, increasing towards sky (x-axis)
  // - roll: rotation around northern axis (y-axis)
  getOrientedEastNorthUpFrame(e, t, s, n, i, r, o) {
    return this.getObjectFrame(e, t, s, n, i, r, o, Us);
  }
  // returns a frame similar to the ENU frame but rotated to match three.js object and camera conventions
  // OBJECT_FRAME: oriented such that "+Y" is up and "+Z" is forward.
  // CAMERA_FRAME: oriented such that "+Y" is up and "-Z" is forward.
  getObjectFrame(e, t, s, n, i, r, o, c = Gs) {
    return this.getEastNorthUpFrame(e, t, s, Ct), Se.set(i, r, -n, "ZXY"), o.makeRotationFromEuler(Se).premultiply(Ct), c === Zr ? (Se.set(Math.PI / 2, 0, 0, "XYZ"), Je.makeRotationFromEuler(Se), o.multiply(Je)) : c === Gs && (Se.set(-Math.PI / 2, 0, Math.PI, "XYZ"), Je.makeRotationFromEuler(Se), o.multiply(Je)), o;
  }
  getCartographicFromObjectFrame(e, t, s = Gs) {
    return s === Zr ? (Se.set(-Math.PI / 2, 0, 0, "XYZ"), Je.makeRotationFromEuler(Se).premultiply(e)) : s === Gs ? (Se.set(-Math.PI / 2, 0, Math.PI, "XYZ"), Je.makeRotationFromEuler(Se).premultiply(e)) : Je.copy(e), Dt.setFromMatrixPosition(Je), this.getPositionToCartographic(Dt, t), this.getEastNorthUpFrame(t.lat, t.lon, 0, Ct).invert(), Je.premultiply(Ct), Se.setFromRotationMatrix(Je, "ZXY"), t.azimuth = -Se.z, t.elevation = Se.x, t.roll = Se.y, t;
  }
  getEastNorthUpAxes(e, t, s, n, i, r = Dt) {
    this.getCartographicToPosition(e, t, 0, r), this.getCartographicToNormal(e, t, i), s.set(-r.y, r.x, 0).normalize(), n.crossVectors(i, s).normalize();
  }
  // azimuth: measured off of true north, increasing towards "east"
  // elevation: measured off of the horizon, increasing towards sky
  // roll: rotation around northern axis
  getAzElRollFromRotationMatrix(e, t, s, n, i = Us) {
    return console.warn('Ellipsoid: "getAzElRollFromRotationMatrix" is deprecated. Use "getCartographicFromObjectFrame", instead.'), this.getCartographicToPosition(e, t, 0, Dt), Kr.copy(s).setPosition(Dt), this.getCartographicFromObjectFrame(Kr, n, i), delete n.height, delete n.lat, delete n.lon, n;
  }
  getRotationMatrixFromAzElRoll(e, t, s, n, i, r, o = Us) {
    return console.warn('Ellipsoid: "getRotationMatrixFromAzElRoll" function has been deprecated. Use "getObjectFrame", instead.'), this.getObjectFrame(e, t, 0, s, n, i, r, o), r.setPosition(0, 0, 0), r;
  }
  getFrame(e, t, s, n, i, r, o, c = Us) {
    return console.warn('Ellipsoid: "getFrame" function has been deprecated. Use "getObjectFrame", instead.'), this.getObjectFrame(e, t, r, s, n, i, o, c);
  }
  getCartographicToPosition(e, t, s, n) {
    this.getCartographicToNormal(e, t, Et);
    const i = this.radius;
    Ue.copy(Et), Ue.x *= i.x ** 2, Ue.y *= i.y ** 2, Ue.z *= i.z ** 2;
    const r = Math.sqrt(Et.dot(Ue));
    return Ue.divideScalar(r), n.copy(Ue).addScaledVector(Et, s);
  }
  getPositionToCartographic(e, t) {
    this.getPositionToSurfacePoint(e, Ue), this.getPositionToNormal(e, Et);
    const s = qn.subVectors(e, Ue);
    return t.lon = Math.atan2(Et.y, Et.x), t.lat = Math.asin(Et.z), t.height = Math.sign(s.dot(e)) * s.length(), t;
  }
  getCartographicToNormal(e, t, s) {
    return qr.set(1, $l(e), t), s.setFromSpherical(qr).normalize(), Zl(s), s;
  }
  getPositionToNormal(e, t) {
    const s = this.radius;
    return t.copy(e), t.x /= s.x ** 2, t.y /= s.y ** 2, t.z /= s.z ** 2, t.normalize(), t;
  }
  getPositionToSurfacePoint(e, t) {
    const s = this.radius, n = 1 / s.x ** 2, i = 1 / s.y ** 2, r = 1 / s.z ** 2, o = e.x * e.x * n, c = e.y * e.y * i, A = e.z * e.z * r, l = o + c + A, h = Math.sqrt(1 / l), u = Ue.copy(e).multiplyScalar(h);
    if (l < th)
      return isFinite(h) ? t.copy(u) : null;
    const d = qn.set(
      u.x * n * 2,
      u.y * i * 2,
      u.z * r * 2
    );
    let f = (1 - h) * e.length() / (0.5 * d.length()), g = 0, p, b, m, E, C, I, _, B, y, w, v;
    do {
      f -= g, m = 1 / (1 + f * n), E = 1 / (1 + f * i), C = 1 / (1 + f * r), I = m * m, _ = E * E, B = C * C, y = I * m, w = _ * E, v = B * C, p = o * I + c * _ + A * B - 1, b = o * y * n + c * w * i + A * v * r;
      const S = -2 * b;
      g = p / S;
    } while (Math.abs(p) > eh);
    return t.set(
      e.x * m,
      e.y * E,
      e.z * C
    );
  }
  calculateHorizonDistance(e, t) {
    const s = this.calculateEffectiveRadius(e);
    return Math.sqrt(2 * s * t + t ** 2);
  }
  calculateEffectiveRadius(e) {
    const t = this.radius.x, n = 1 - this.radius.z ** 2 / t ** 2, i = e * ee.DEG2RAD, r = Math.sin(i) ** 2;
    return t / Math.sqrt(1 - n * r);
  }
  getPositionElevation(e) {
    this.getPositionToSurfacePoint(e, Ue);
    const t = qn.subVectors(e, Ue);
    return Math.sign(t.dot(e)) * t.length();
  }
  copy(e) {
    return this.radius.copy(e.radius), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Gn = new tc(Ur, Ur, nl);
Gn.name = "WGS84 Earth";
const $r = /* @__PURE__ */ new x(), Wn = /* @__PURE__ */ new x(), Jn = /* @__PURE__ */ new x(), Yn = /* @__PURE__ */ new x(), Xn = /* @__PURE__ */ new qe(), Ps = /* @__PURE__ */ new x(), Ns = /* @__PURE__ */ new z(), ea = /* @__PURE__ */ new z(), ta = /* @__PURE__ */ new x(), sa = /* @__PURE__ */ new z(), Zn = /* @__PURE__ */ new qe(), $n = {};
class sc extends ul {
  constructor(e = Ln) {
    super(), this.manager = e, this.adjustmentTransform = new z(), this.ellipsoid = Gn.clone();
  }
  resolveExternalURL(e) {
    return this.manager.resolveURL(super.resolveExternalURL(e));
  }
  parse(e) {
    return super.parse(e).then((t) => {
      const { featureTable: s, batchTable: n } = t, i = t.glbBytes.slice().buffer;
      return new Promise((r, o) => {
        const c = this.fetchOptions, A = this.manager, l = A.getHandler("path.gltf") || new Un(A);
        c.credentials === "include" && c.mode === "cors" && l.setCrossOrigin("use-credentials"), "credentials" in c && l.setWithCredentials(c.credentials === "include"), c.headers && l.setRequestHeader(c.headers);
        let h = t.gltfWorkingPath ?? this.workingPath;
        /[\\/]$/.test(h) || (h += "/");
        const u = this.adjustmentTransform;
        l.parse(i, h, (d) => {
          const f = s.getData("INSTANCES_LENGTH"), g = s.getData("POSITION", f, "FLOAT", "VEC3"), p = s.getData("NORMAL_UP", f, "FLOAT", "VEC3"), b = s.getData("NORMAL_RIGHT", f, "FLOAT", "VEC3"), m = s.getData("SCALE_NON_UNIFORM", f, "FLOAT", "VEC3"), E = s.getData("SCALE", f, "FLOAT", "SCALAR"), C = s.getData("RTC_CENTER", 1, "FLOAT", "VEC3"), I = s.getData("EAST_NORTH_UP");
          [
            "QUANTIZED_VOLUME_OFFSET",
            "QUANTIZED_VOLUME_SCALE",
            "POSITION_QUANTIZED",
            "NORMAL_UP_OCT32P",
            "NORMAL_RIGHT_OCT32P"
          ].forEach((w) => {
            w in s.header && console.warn(`I3DMLoader: Unsupported FeatureTable feature "${w}" detected.`);
          });
          const _ = new x();
          for (let w = 0; w < f; w++)
            _.x += g[w * 3 + 0] / f, _.y += g[w * 3 + 1] / f, _.z += g[w * 3 + 2] / f;
          const B = [], y = [];
          d.scene.updateMatrixWorld(), d.scene.traverse((w) => {
            if (w.isMesh) {
              y.push(w);
              const { geometry: v, material: S } = w, L = new $i(v, S, f);
              L.position.copy(_), C && (L.position.x += C[0], L.position.y += C[1], L.position.z += C[2]), B.push(L);
            }
          });
          for (let w = 0; w < f; w++) {
            Yn.set(
              g[w * 3 + 0] - _.x,
              g[w * 3 + 1] - _.y,
              g[w * 3 + 2] - _.z
            ), Xn.identity(), p && (Wn.set(
              p[w * 3 + 0],
              p[w * 3 + 1],
              p[w * 3 + 2]
            ), Jn.set(
              b[w * 3 + 0],
              b[w * 3 + 1],
              b[w * 3 + 2]
            ), $r.crossVectors(Jn, Wn).normalize(), Ns.makeBasis(
              Jn,
              Wn,
              $r
            ), Xn.setFromRotationMatrix(Ns)), Ps.set(1, 1, 1), m && Ps.set(
              m[w * 3 + 0],
              m[w * 3 + 1],
              m[w * 3 + 2]
            ), E && Ps.multiplyScalar(E[w]);
            for (let v = 0, S = B.length; v < S; v++) {
              const L = B[v];
              Zn.copy(Xn), I && (L.updateMatrixWorld(), ta.copy(Yn).applyMatrix4(L.matrixWorld), this.ellipsoid.getPositionToCartographic(ta, $n), this.ellipsoid.getEastNorthUpFrame($n.lat, $n.lon, sa), Zn.setFromRotationMatrix(sa)), Ns.compose(Yn, Zn, Ps).multiply(u);
              const U = y[v];
              ea.multiplyMatrices(Ns, U.matrixWorld), L.setMatrixAt(w, ea);
            }
          }
          d.scene.clear(), d.scene.add(...B), d.batchTable = n, d.featureTable = s, d.scene.batchTable = n, d.scene.featureTable = s, r(d);
        }, o);
      });
    });
  }
}
class sh extends fl {
  constructor(e = Ln) {
    super(), this.manager = e, this.adjustmentTransform = new z(), this.ellipsoid = Gn.clone();
  }
  parse(e) {
    const t = super.parse(e), { manager: s, ellipsoid: n, adjustmentTransform: i } = this, r = [];
    for (const o in t.tiles) {
      const { type: c, buffer: A } = t.tiles[o];
      switch (c) {
        case "b3dm": {
          const l = A.slice(), h = new $o(s);
          h.workingPath = this.workingPath, h.fetchOptions = this.fetchOptions, h.adjustmentTransform.copy(i);
          const u = h.parse(l.buffer);
          r.push(u);
          break;
        }
        case "pnts": {
          const l = A.slice(), h = new ec(s);
          h.workingPath = this.workingPath, h.fetchOptions = this.fetchOptions;
          const u = h.parse(l.buffer);
          r.push(u);
          break;
        }
        case "i3dm": {
          const l = A.slice(), h = new sc(s);
          h.workingPath = this.workingPath, h.fetchOptions = this.fetchOptions, h.ellipsoid.copy(n), h.adjustmentTransform.copy(i);
          const u = h.parse(l.buffer);
          r.push(u);
          break;
        }
      }
    }
    return Promise.all(r).then((o) => {
      const c = new le();
      return o.forEach((A) => {
        c.add(A.scene);
      }), {
        tiles: o,
        scene: c
      };
    });
  }
}
const cs = new z();
class nh extends le {
  constructor(e) {
    super(), this.isTilesGroup = !0, this.name = "TilesRenderer.TilesGroup", this.tilesRenderer = e, this.matrixWorldInverse = new z();
  }
  raycast(e, t) {
    return this.tilesRenderer.optimizeRaycast ? (this.tilesRenderer.raycast(e, t), !1) : !0;
  }
  updateMatrixWorld(e) {
    if (this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldNeedsUpdate || e) {
      this.parent === null ? cs.copy(this.matrix) : cs.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1;
      const t = cs.elements, s = this.matrixWorld.elements;
      let n = !1;
      for (let i = 0; i < 16; i++) {
        const r = t[i], o = s[i];
        if (Math.abs(r - o) > Number.EPSILON) {
          n = !0;
          break;
        }
      }
      if (n) {
        this.matrixWorld.copy(cs), this.matrixWorldInverse.copy(cs).invert();
        const i = this.children;
        for (let r = 0, o = i.length; r < o; r++)
          i[r].updateMatrixWorld();
      }
    }
  }
  updateWorldMatrix(e, t) {
    this.parent && e && this.parent.updateWorldMatrix(e, !1), this.updateMatrixWorld(!0);
  }
}
const nc = new ir(), ei = new x(), Os = [];
function ic(a, e) {
  return a.distance - e.distance;
}
function rc(a, e, t, s) {
  const { scene: n } = a.cached;
  t.invokeOnePlugin((r) => r.raycastTile && r.raycastTile(a, n, e, s)) || e.intersectObject(n, !0, s);
}
function ih(a, e, t) {
  rc(a, e, t, Os), Os.sort(ic);
  const s = Os[0] || null;
  return Os.length = 0, s;
}
function ac(a) {
  return "__used" in a;
}
function oc(a, e, t, s = null) {
  const { group: n, activeTiles: i } = a;
  s === null && (s = nc, s.copy(t.ray).applyMatrix4(n.matrixWorldInverse));
  const r = [], o = e.children;
  for (let l = 0, h = o.length; l < h; l++) {
    const u = o[l];
    if (!ac(u) || !u.__used)
      continue;
    u.cached.boundingVolume.intersectRay(s, ei) !== null && (ei.applyMatrix4(n.matrixWorld), r.push({
      distance: ei.distanceToSquared(t.ray.origin),
      tile: u
    }));
  }
  r.sort(ic);
  let c = null, A = 1 / 0;
  if (i.has(e)) {
    const l = ih(e, t, a);
    l && (c = l, A = l.distance * l.distance);
  }
  for (let l = 0, h = r.length; l < h; l++) {
    const u = r[l], d = u.distance, f = u.tile;
    if (d > A)
      break;
    const g = oc(a, f, t, s);
    if (g) {
      const p = g.distance * g.distance;
      p < A && (c = g, A = p);
    }
  }
  return c;
}
function cc(a, e, t, s, n = null) {
  if (!ac(e))
    return;
  const { group: i, activeTiles: r } = a, { boundingVolume: o } = e.cached;
  if (n === null && (n = nc, n.copy(t.ray).applyMatrix4(i.matrixWorldInverse)), !e.__used || !o.intersectsRay(n))
    return;
  r.has(e) && rc(e, t, a, s);
  const c = e.children;
  for (let A = 0, l = c.length; A < l; A++)
    cc(a, c[A], t, s, n);
}
const Hs = new x(), zs = new x(), Te = new x(), js = new ir();
class na {
  constructor(e = new Le(), t = new z()) {
    this.box = e.clone(), this.transform = t.clone(), this.inverseTransform = new z(), this.points = new Array(8).fill().map(() => new x()), this.planes = new Array(6).fill().map(() => new Qo());
  }
  copy(e) {
    return this.box.copy(e.box), this.transform.copy(e.transform), this.update(), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Clamps the given point within the bounds of this OBB
   * @param {Vector3} point
   * @param {Vector3} result
   * @returns {Vector3}
   */
  clampPoint(e, t) {
    return t.copy(e).applyMatrix4(this.inverseTransform).clamp(this.box.min, this.box.max).applyMatrix4(this.transform);
  }
  /**
   * Returns the distance from any edge of this OBB to the specified point.
   * If the point lies inside of this box, the distance will be 0.
   * @param {Vector3} point
   * @returns {number}
   */
  distanceToPoint(e) {
    return this.clampPoint(e, Te).distanceTo(e);
  }
  containsPoint(e) {
    return Te.copy(e).applyMatrix4(this.inverseTransform), this.box.containsPoint(Te);
  }
  // returns boolean indicating whether the ray has intersected the obb
  intersectsRay(e) {
    return js.copy(e).applyMatrix4(this.inverseTransform), js.intersectsBox(this.box);
  }
  // Sets "target" equal to the intersection point.
  // Returns "null" if no intersection found.
  intersectRay(e, t) {
    return js.copy(e).applyMatrix4(this.inverseTransform), js.intersectBox(this.box, t) ? (t.applyMatrix4(this.transform), t) : null;
  }
  update() {
    const { points: e, inverseTransform: t, transform: s, box: n } = this;
    t.copy(s).invert();
    const { min: i, max: r } = n;
    let o = 0;
    for (let c = -1; c <= 1; c += 2)
      for (let A = -1; A <= 1; A += 2)
        for (let l = -1; l <= 1; l += 2)
          e[o].set(
            c < 0 ? i.x : r.x,
            A < 0 ? i.y : r.y,
            l < 0 ? i.z : r.z
          ).applyMatrix4(s), o++;
    this.updatePlanes();
  }
  updatePlanes() {
    Hs.copy(this.box.min).applyMatrix4(this.transform), zs.copy(this.box.max).applyMatrix4(this.transform), Te.set(0, 0, 1).transformDirection(this.transform), this.planes[0].setFromNormalAndCoplanarPoint(Te, Hs), this.planes[1].setFromNormalAndCoplanarPoint(Te, zs).negate(), Te.set(0, 1, 0).transformDirection(this.transform), this.planes[2].setFromNormalAndCoplanarPoint(Te, Hs), this.planes[3].setFromNormalAndCoplanarPoint(Te, zs).negate(), Te.set(1, 0, 0).transformDirection(this.transform), this.planes[4].setFromNormalAndCoplanarPoint(Te, Hs), this.planes[5].setFromNormalAndCoplanarPoint(Te, zs).negate();
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Te), Te.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsFrustum(e) {
    return this._intersectsPlaneShape(e.planes, e.points);
  }
  intersectsOBB(e) {
    return this._intersectsPlaneShape(e.planes, e.points);
  }
  // takes a series of 6 planes that define and enclosed shape and the 8 points that lie at the corners
  // of that shape to determine whether the OBB is intersected with.
  _intersectsPlaneShape(e, t) {
    const s = this.points, n = this.planes;
    for (let i = 0; i < 6; i++) {
      const r = e[i];
      let o = -1 / 0;
      for (let c = 0; c < 8; c++) {
        const A = s[c], l = r.distanceToPoint(A);
        o = o < l ? l : o;
      }
      if (o < 0)
        return !1;
    }
    for (let i = 0; i < 6; i++) {
      const r = n[i];
      let o = -1 / 0;
      for (let c = 0; c < 8; c++) {
        const A = t[c], l = r.distanceToPoint(A);
        o = o < l ? l : o;
      }
      if (o < 0)
        return !1;
    }
    return !0;
  }
}
const yt = Math.PI, Vs = yt / 2, As = new x(), zt = new x(), jt = new x(), ia = new z();
let ms = 0;
const ti = [];
function rh(a = !1) {
  return a ? (ti[ms] || (ti[ms] = new x()), ms++, ti[ms - 1]) : new x();
}
function ra() {
  ms = 0;
}
class Ac extends tc {
  constructor(e, t, s, n = -Vs, i = Vs, r = 0, o = 2 * yt, c = 0, A = 0) {
    super(e, t, s), this.latStart = n, this.latEnd = i, this.lonStart = r, this.lonEnd = o, this.heightStart = c, this.heightEnd = A;
  }
  _getPoints(e = !1) {
    const {
      latStart: t,
      latEnd: s,
      lonStart: n,
      lonEnd: i,
      heightStart: r,
      heightEnd: o
    } = this, c = ee.mapLinear(0.5, 0, 1, t, s), A = ee.mapLinear(0.5, 0, 1, n, i), l = Math.floor(n / Vs) * Vs, h = [
      [-yt / 2, 0],
      [yt / 2, 0],
      [0, l],
      [0, l + yt / 2],
      [0, l + yt],
      [0, l + 3 * yt / 2],
      [t, i],
      [s, i],
      [t, n],
      [s, n],
      [0, n],
      [0, i],
      [c, A],
      [t, A],
      [s, A],
      [c, n],
      [c, i]
    ], u = [], d = h.length;
    for (let f = 0; f <= 1; f++) {
      const g = ee.mapLinear(f, 0, 1, r, o);
      for (let p = 0, b = d; p < b; p++) {
        const [m, E] = h[p];
        if (m >= t && m <= s && E >= n && E <= i) {
          const C = rh(e);
          u.push(C), this.getCartographicToPosition(m, E, g, C);
        }
      }
    }
    return u;
  }
  getBoundingBox(e, t) {
    ra();
    const {
      latStart: s,
      latEnd: n,
      lonStart: i,
      lonEnd: r
    } = this;
    if (n - s < yt / 2) {
      const A = ee.mapLinear(0.5, 0, 1, s, n), l = ee.mapLinear(0.5, 0, 1, i, r);
      this.getCartographicToNormal(A, l, jt), zt.set(0, 0, 1), As.crossVectors(zt, jt), zt.crossVectors(As, jt), t.makeBasis(As, zt, jt);
    } else
      As.set(1, 0, 0), zt.set(0, 1, 0), jt.set(0, 0, 1), t.makeBasis(As, zt, jt);
    ia.copy(t).invert();
    const c = this._getPoints(!0);
    for (let A = 0, l = c.length; A < l; A++)
      c[A].applyMatrix4(ia);
    e.makeEmpty(), e.setFromPoints(c);
  }
  getBoundingSphere(e, t) {
    ra();
    const s = this._getPoints(!0);
    e.makeEmpty(), e.setFromPoints(s, t);
  }
}
const rt = new x(), at = new x(), ot = new x(), aa = new x(), oa = new x();
class ah {
  constructor() {
    this.sphere = null, this.obb = null, this.region = null, this.regionObb = null;
  }
  intersectsRay(e) {
    const t = this.sphere, s = this.obb || this.regionObb;
    return !(t && !e.intersectsSphere(t) || s && !s.intersectsRay(e));
  }
  intersectRay(e, t = null) {
    const s = this.sphere, n = this.obb || this.regionObb;
    let i = -1 / 0, r = -1 / 0;
    s && e.intersectSphere(s, aa) && (i = s.containsPoint(e.origin) ? 0 : e.origin.distanceToSquared(aa)), n && n.intersectRay(e, oa) && (r = n.containsPoint(e.origin) ? 0 : e.origin.distanceToSquared(oa));
    const o = Math.max(i, r);
    return o === -1 / 0 ? null : (e.at(Math.sqrt(o), t), t);
  }
  distanceToPoint(e) {
    const t = this.sphere, s = this.obb || this.regionObb;
    let n = -1 / 0, i = -1 / 0;
    return t && (n = Math.max(t.distanceToPoint(e), 0)), s && (i = s.distanceToPoint(e)), n > i ? n : i;
  }
  intersectsFrustum(e) {
    const t = this.obb || this.regionObb, s = this.sphere;
    return s && !e.intersectsSphere(s) || t && !t.intersectsFrustum(e) ? !1 : !!(s || t);
  }
  intersectsSphere(e) {
    const t = this.obb || this.regionObb, s = this.sphere;
    return s && !s.intersectsSphere(e) || t && !t.intersectsSphere(e) ? !1 : !!(s || t);
  }
  intersectsOBB(e) {
    const t = this.obb || this.regionObb, s = this.sphere;
    return s && !e.intersectsSphere(s) || t && !t.intersectsOBB(e) ? !1 : !!(s || t);
  }
  getOBB(e, t) {
    const s = this.obb || this.regionObb;
    s ? (e.copy(s.box), t.copy(s.transform)) : (this.getAABB(e), t.identity());
  }
  getAABB(e) {
    if (this.sphere)
      this.sphere.getBoundingBox(e);
    else {
      const t = this.obb || this.regionObb;
      e.copy(t.box).applyMatrix4(t.transform);
    }
  }
  getSphere(e) {
    if (this.sphere)
      e.copy(this.sphere);
    else if (this.region)
      this.region.getBoundingSphere(e);
    else {
      const t = this.obb || this.regionObb;
      t.box.getBoundingSphere(e), e.applyMatrix4(t.transform);
    }
  }
  setObbData(e, t) {
    const s = new na();
    rt.set(e[3], e[4], e[5]), at.set(e[6], e[7], e[8]), ot.set(e[9], e[10], e[11]);
    const n = rt.length(), i = at.length(), r = ot.length();
    rt.normalize(), at.normalize(), ot.normalize(), n === 0 && rt.crossVectors(at, ot), i === 0 && at.crossVectors(rt, ot), r === 0 && ot.crossVectors(rt, at), s.transform.set(
      rt.x,
      at.x,
      ot.x,
      e[0],
      rt.y,
      at.y,
      ot.y,
      e[1],
      rt.z,
      at.z,
      ot.z,
      e[2],
      0,
      0,
      0,
      1
    ).premultiply(t), s.box.min.set(-n, -i, -r), s.box.max.set(n, i, r), s.update(), this.obb = s;
  }
  setSphereData(e, t, s, n, i) {
    const r = new Fe();
    r.center.set(e, t, s), r.radius = n, r.applyMatrix4(i), this.sphere = r;
  }
  setRegionData(e, t, s, n, i, r, o) {
    const c = new Ac(
      ...e.radius,
      s,
      i,
      t,
      n,
      r,
      o
    ), A = new na();
    c.getBoundingBox(A.box, A.transform), A.update(), this.region = c, this.regionObb = A;
  }
}
const oh = new Ro();
function ch(a, e, t, s) {
  const n = oh.set(
    a.normal.x,
    a.normal.y,
    a.normal.z,
    e.normal.x,
    e.normal.y,
    e.normal.z,
    t.normal.x,
    t.normal.y,
    t.normal.z
  );
  return s.set(-a.constant, -e.constant, -t.constant), s.applyMatrix3(n.invert()), s;
}
class Ah extends cA {
  constructor() {
    super(), this.points = Array(8).fill().map(() => new x());
  }
  setFromProjectionMatrix(e, t) {
    return super.setFromProjectionMatrix(e, t), this.calculateFrustumPoints(), this;
  }
  calculateFrustumPoints() {
    const { planes: e, points: t } = this;
    [
      [e[0], e[3], e[4]],
      // Near top left
      [e[1], e[3], e[4]],
      // Near top right
      [e[0], e[2], e[4]],
      // Near bottom left
      [e[1], e[2], e[4]],
      // Near bottom right
      [e[0], e[3], e[5]],
      // Far top left
      [e[1], e[3], e[5]],
      // Far top right
      [e[0], e[2], e[5]],
      // Far bottom left
      [e[1], e[2], e[5]]
      // Far bottom right
    ].forEach((n, i) => {
      ch(n[0], n[1], n[2], t[i]);
    });
  }
}
function lh(a) {
  const { TextureUtils: e } = Z;
  if (!e || !a)
    return 0;
  const { format: t, type: s, image: n } = a, { width: i, height: r } = n;
  let o = e.getByteLength(i, r, t, s);
  return o *= a.generateMipmaps ? 4 / 3 : 1, o;
}
function hh(a) {
  const e = /* @__PURE__ */ new Set();
  let t = 0;
  return a.traverse((s) => {
    if (s.geometry && !e.has(s.geometry) && (t += gl(s.geometry), e.add(s.geometry)), s.material) {
      const n = s.material;
      for (const i in n) {
        const r = n[i];
        r && r.isTexture && !e.has(r) && (t += lh(r), e.add(r));
      }
    }
  }), t;
}
const ca = new z(), Aa = new vn(), lc = Symbol("INITIAL_FRUSTUM_CULLED"), qs = new z(), ls = new x(), si = new H(), Ks = {
  inView: !1,
  error: 1 / 0
}, uh = new x(1, 0, 0), dh = new x(0, 1, 0);
function la(a, e) {
  a.traverse((t) => {
    t.frustumCulled = t[lc] && e;
  });
}
class fh extends cl {
  get autoDisableRendererCulling() {
    return this._autoDisableRendererCulling;
  }
  set autoDisableRendererCulling(e) {
    this._autoDisableRendererCulling !== e && (super._autoDisableRendererCulling = e, this.forEachLoadedModel((t) => {
      la(t, !e);
    }));
  }
  get optimizeRaycast() {
    return this._optimizeRaycast;
  }
  set optimizeRaycast(e) {
    console.warn('TilesRenderer: The "optimizeRaycast" option has been deprecated.'), this._optimizeRaycast = e;
  }
  constructor(...e) {
    super(...e), this.group = new nh(this), this.ellipsoid = Gn.clone(), this.cameras = [], this.cameraMap = /* @__PURE__ */ new Map(), this.cameraInfo = [], this._optimizeRaycast = !0, this._upRotationMatrix = new z(), this._bytesUsed = /* @__PURE__ */ new WeakMap(), this._autoDisableRendererCulling = !0;
    const t = new AA();
    t.setURLModifier((s) => this.preprocessURL ? this.preprocessURL(s) : s), this.manager = t, this._listeners = {};
  }
  addEventListener(...e) {
    Ls.prototype.addEventListener.call(this, ...e);
  }
  hasEventListener(...e) {
    Ls.prototype.hasEventListener.call(this, ...e);
  }
  removeEventListener(...e) {
    Ls.prototype.removeEventListener.call(this, ...e);
  }
  dispatchEvent(...e) {
    Ls.prototype.dispatchEvent.call(this, ...e);
  }
  /* Public API */
  getBoundingBox(e) {
    if (!this.root)
      return !1;
    const t = this.root.cached.boundingVolume;
    return t ? (t.getAABB(e), !0) : !1;
  }
  getOrientedBoundingBox(e, t) {
    if (!this.root)
      return !1;
    const s = this.root.cached.boundingVolume;
    return s ? (s.getOBB(e, t), !0) : !1;
  }
  getBoundingSphere(e) {
    if (!this.root)
      return !1;
    const t = this.root.cached.boundingVolume;
    return t ? (t.getSphere(e), !0) : !1;
  }
  forEachLoadedModel(e) {
    this.traverse((t) => {
      const s = t.cached && t.cached.scene;
      s && e(s, t);
    }, null, !1);
  }
  raycast(e, t) {
    if (this.root)
      if (e.firstHitOnly) {
        const s = oc(this, this.root, e);
        s && t.push(s);
      } else
        cc(this, this.root, e, t);
  }
  hasCamera(e) {
    return this.cameraMap.has(e);
  }
  setCamera(e) {
    const t = this.cameras, s = this.cameraMap;
    return s.has(e) ? !1 : (s.set(e, new H()), t.push(e), this.dispatchEvent({ type: "add-camera", camera: e }), !0);
  }
  setResolution(e, t, s) {
    const n = this.cameraMap;
    if (!n.has(e))
      return !1;
    const i = t.isVector2 ? t.x : t, r = t.isVector2 ? t.y : s, o = n.get(e);
    return (o.width !== i || o.height !== r) && (o.set(i, r), this.dispatchEvent({ type: "camera-resolution-change" })), !0;
  }
  setResolutionFromRenderer(e, t) {
    return t.getSize(si), this.setResolution(e, si.x, si.y);
  }
  deleteCamera(e) {
    const t = this.cameras, s = this.cameraMap;
    if (s.has(e)) {
      const n = t.indexOf(e);
      return t.splice(n, 1), s.delete(e), this.dispatchEvent({ type: "delete-camera", camera: e }), !0;
    }
    return !1;
  }
  /* Overriden */
  loadRootTileSet(...e) {
    return super.loadRootTileSet(...e).then((t) => {
      const { asset: s, extensions: n = {} } = t;
      switch ((s && s.gltfUpAxis || "y").toLowerCase()) {
        case "x":
          this._upRotationMatrix.makeRotationAxis(dh, -Math.PI / 2);
          break;
        case "y":
          this._upRotationMatrix.makeRotationAxis(uh, Math.PI / 2);
          break;
      }
      if ("3DTILES_ellipsoid" in n) {
        const r = n["3DTILES_ellipsoid"], { ellipsoid: o } = this;
        o.name = r.body, r.radii ? o.radius.set(...r.radii) : o.radius.set(1, 1, 1);
      }
      return t;
    });
  }
  update() {
    let e = null;
    if (this.invokeAllPlugins((r) => {
      if (r.doTilesNeedUpdate) {
        const o = r.doTilesNeedUpdate();
        e === null ? e = o : e = !!(e || o);
      }
    }), e === !1) {
      this.dispatchEvent({ type: "update-before" }), this.dispatchEvent({ type: "update-after" });
      return;
    }
    this.dispatchEvent({ type: "update-before" });
    const t = this.group, s = this.cameras, n = this.cameraMap, i = this.cameraInfo;
    for (; i.length > s.length; )
      i.pop();
    for (; i.length < s.length; )
      i.push({
        frustum: new Ah(),
        isOrthographic: !1,
        sseDenominator: -1,
        // used if isOrthographic:false
        position: new x(),
        invScale: -1,
        pixelSize: 0
        // used if isOrthographic:true
      });
    ls.setFromMatrixScale(t.matrixWorldInverse), Math.abs(Math.max(ls.x - ls.y, ls.x - ls.z)) > 1e-6 && console.warn("ThreeTilesRenderer : Non uniform scale used for tile which may cause issues when calculating screen space error.");
    for (let r = 0, o = i.length; r < o; r++) {
      const c = s[r], A = i[r], l = A.frustum, h = A.position, u = n.get(c);
      (u.width === 0 || u.height === 0) && console.warn("TilesRenderer: resolution for camera error calculation is not set.");
      const d = c.projectionMatrix.elements;
      if (A.isOrthographic = d[15] === 1, A.isOrthographic) {
        const f = 2 / d[0], g = 2 / d[5];
        A.pixelSize = Math.max(g / u.height, f / u.width);
      } else
        A.sseDenominator = 2 / d[5] / u.height;
      qs.copy(t.matrixWorld), qs.premultiply(c.matrixWorldInverse), qs.premultiply(c.projectionMatrix), l.setFromProjectionMatrix(qs), h.set(0, 0, 0), h.applyMatrix4(c.matrixWorld), h.applyMatrix4(t.matrixWorldInverse);
    }
    if (super.update(), this.dispatchEvent({ type: "update-after" }), s.length === 0 && this.root) {
      let r = !1;
      this.invokeAllPlugins((o) => r = r || !!(o !== this && o.calculateTileViewError)), r === !1 && console.warn("TilesRenderer: no cameras defined. Cannot update 3d tiles.");
    }
  }
  preprocessNode(e, t, s = null) {
    super.preprocessNode(e, t, s);
    const n = new z();
    if (e.transform) {
      const o = e.transform;
      for (let c = 0; c < 16; c++)
        n.elements[c] = o[c];
    }
    s && n.premultiply(s.cached.transform);
    const i = new z().copy(n).invert(), r = new ah();
    "sphere" in e.boundingVolume && r.setSphereData(...e.boundingVolume.sphere, n), "box" in e.boundingVolume && r.setObbData(e.boundingVolume.box, n), "region" in e.boundingVolume && r.setRegionData(this.ellipsoid, ...e.boundingVolume.region), e.cached = {
      transform: n,
      transformInverse: i,
      active: !1,
      boundingVolume: r,
      metadata: null,
      scene: null,
      geometry: null,
      materials: null,
      textures: null
    };
  }
  async parseTile(e, t, s, n, i) {
    const r = t.cached, o = n.split(/[\\/]/g);
    o.pop();
    const c = o.join("/"), A = this.fetchOptions, l = this.manager;
    let h = null;
    const u = r.transform, d = this._upRotationMatrix, f = (Pt(e) || s).toLowerCase();
    switch (f) {
      case "b3dm": {
        const I = new $o(l);
        I.workingPath = c, I.fetchOptions = A, I.adjustmentTransform.copy(d), h = I.parse(e);
        break;
      }
      case "pnts": {
        const I = new ec(l);
        I.workingPath = c, I.fetchOptions = A, h = I.parse(e);
        break;
      }
      case "i3dm": {
        const I = new sc(l);
        I.workingPath = c, I.fetchOptions = A, I.adjustmentTransform.copy(d), I.ellipsoid.copy(this.ellipsoid), h = I.parse(e);
        break;
      }
      case "cmpt": {
        const I = new sh(l);
        I.workingPath = c, I.fetchOptions = A, I.adjustmentTransform.copy(d), I.ellipsoid.copy(this.ellipsoid), h = I.parse(e).then((_) => _.scene);
        break;
      }
      // 3DTILES_content_gltf
      case "gltf":
      case "glb": {
        const I = l.getHandler("path.gltf") || l.getHandler("path.glb") || new Un(l);
        I.setWithCredentials(A.credentials === "include"), I.setRequestHeader(A.headers || {}), A.credentials === "include" && A.mode === "cors" && I.setCrossOrigin("use-credentials");
        let _ = I.resourcePath || I.path || c;
        !/[\\/]$/.test(_) && _.length && (_ += "/"), h = I.parseAsync(e, _).then((B) => {
          B.scene = B.scene || new le();
          const { scene: y } = B;
          return y.updateMatrix(), y.matrix.multiply(d).decompose(y.position, y.quaternion, y.scale), B;
        });
        break;
      }
      default: {
        h = this.invokeOnePlugin((I) => I.parseToMesh && I.parseToMesh(e, t, s, n, i));
        break;
      }
    }
    const g = await h;
    if (g === null)
      throw new Error(`TilesRenderer: Content type "${f}" not supported.`);
    let p, b;
    g.isObject3D ? (p = g, b = null) : (p = g.scene, b = g), p.updateMatrix(), p.matrix.premultiply(u), p.matrix.decompose(p.position, p.quaternion, p.scale), await this.invokeAllPlugins((I) => I.processTileModel && I.processTileModel(p, t)), p.traverse((I) => {
      I[lc] = I.frustumCulled;
    }), la(p, !this.autoDisableRendererCulling);
    const m = [], E = [], C = [];
    if (p.traverse((I) => {
      if (I.geometry && E.push(I.geometry), I.material) {
        const _ = I.material;
        m.push(I.material);
        for (const B in _) {
          const y = _[B];
          y && y.isTexture && C.push(y);
        }
      }
    }), i.aborted) {
      for (let I = 0, _ = C.length; I < _; I++) {
        const B = C[I];
        B.image instanceof ImageBitmap && B.image.close(), B.dispose();
      }
      return;
    }
    r.materials = m, r.geometry = E, r.textures = C, r.scene = p, r.metadata = b;
  }
  disposeTile(e) {
    super.disposeTile(e);
    const t = e.cached;
    if (t.scene) {
      const s = t.materials, n = t.geometry, i = t.textures, r = t.scene.parent;
      t.scene.traverse((o) => {
        o.userData.meshFeatures && o.userData.meshFeatures.dispose(), o.userData.structuralMetadata && o.userData.structuralMetadata.dispose();
      });
      for (let o = 0, c = n.length; o < c; o++)
        n[o].dispose();
      for (let o = 0, c = s.length; o < c; o++)
        s[o].dispose();
      for (let o = 0, c = i.length; o < c; o++) {
        const A = i[o];
        A.image instanceof ImageBitmap && A.image.close(), A.dispose();
      }
      r && r.remove(t.scene), this.dispatchEvent({
        type: "dispose-model",
        scene: t.scene,
        tile: e
      }), t.scene = null, t.materials = null, t.textures = null, t.geometry = null, t.metadata = null;
    }
  }
  setTileVisible(e, t) {
    const s = e.cached.scene, n = this.group;
    t ? s && (n.add(s), s.updateMatrixWorld(!0)) : s && n.remove(s), super.setTileVisible(e, t), this.dispatchEvent({
      type: "tile-visibility-change",
      scene: s,
      tile: e,
      visible: t
    });
  }
  calculateBytesUsed(e, t) {
    const s = this._bytesUsed;
    return !s.has(e) && t && s.set(e, hh(t)), s.get(e) ?? null;
  }
  calculateTileViewError(e, t) {
    const s = e.cached, n = this.cameras, i = this.cameraInfo, r = s.boundingVolume;
    let o = !1, c = -1 / 0, A = 1 / 0, l = -1 / 0, h = 1 / 0;
    for (let u = 0, d = n.length; u < d; u++) {
      const f = i[u];
      let g, p;
      if (f.isOrthographic) {
        const m = f.pixelSize;
        g = e.geometricError / m, p = 1 / 0;
      } else {
        const m = f.sseDenominator;
        p = r.distanceToPoint(f.position), g = p === 0 ? 1 / 0 : e.geometricError / (p * m);
      }
      const b = i[u].frustum;
      r.intersectsFrustum(b) && (o = !0, c = Math.max(c, g), A = Math.min(A, p)), l = Math.max(l, g), h = Math.min(h, p);
    }
    this.invokeAllPlugins((u) => {
      u !== this && u.calculateTileViewError && (u.calculateTileViewError(e, Ks), Ks.inView && (o = !0, c = Math.max(c, Ks.error)), l = Math.max(l, Ks.error));
    }), o ? (t.inView = !0, t.error = c, t.distanceFromCamera = A) : (t.inView = !1, t.error = l, t.distanceFromCamera = h);
  }
  // adjust the rotation of the group such that Y is altitude, X is North, and Z is East
  setLatLonToYUp(e, t) {
    console.warn("TilesRenderer: setLatLonToYUp is deprecated. Use the ReorientationPlugin, instead.");
    const { ellipsoid: s, group: n } = this;
    Aa.set(Math.PI / 2, Math.PI / 2, 0), ca.makeRotationFromEuler(Aa), s.getEastNorthUpFrame(e, t, 0, n.matrix).multiply(ca).invert().decompose(
      n.position,
      n.quaternion,
      n.scale
    ), n.updateMatrixWorld(!0);
  }
  dispose() {
    super.dispose(), this.group.removeFromParent();
  }
}
class gh {
  static intersectsFrustum(e, t) {
    if (!e.intersectsFrustum(t))
      return !1;
    const s = this._getOBBAxes(e), n = this._getFrustumEdges(t), i = [...s, ...n];
    for (const r of i) {
      const o = this._projectOBB(e, r), c = this._projectFrustum(t, r);
      if (!this._intervalsOverlap(o, c))
        return !1;
    }
    return !0;
  }
  static _getOBBAxes(e) {
    return [
      e.planes[0].normal,
      e.planes[2].normal,
      e.planes[4].normal
    ];
  }
  static _getFrustumEdges(e) {
    const t = [];
    for (let s = 0; s < e.planes.length; s++) {
      for (let n = s + 1; n < e.planes.length; n++) {
        const i = new x().crossVectors(
          e.planes[s].normal,
          e.planes[n].normal
        );
        i.length() > 0 && t.push(i.normalize());
      }
      t.push(e.planes[s].normal);
    }
    return t;
  }
  static _projectOBB(e, t) {
    let s = 1 / 0, n = -1 / 0;
    for (const i of e.points) {
      const r = i.dot(t);
      s > r && (s = r), n < r && (n = r);
    }
    return { min: s, max: n };
  }
  static _projectFrustum(e, t) {
    let s = 1 / 0, n = -1 / 0;
    for (const i of e.points) {
      const r = i.dot(t);
      s > r && (s = r), n < r && (n = r);
    }
    return { min: s, max: n };
  }
  static _intervalsOverlap(e, t) {
    return e.max >= t.min && t.max >= e.min;
  }
}
const Ws = {
  inView: !1,
  error: 1 / 0
};
class ph extends fh {
  constructor() {
    super(...arguments), this.dynamicScreenSpaceError = !0;
  }
  calculateTileViewError(e, t) {
    const s = e.cached, n = this.cameras, i = this.cameraInfo, r = s.boundingVolume;
    let o = !1, c = -1 / 0, A = 1 / 0, l = -1 / 0, h = 1 / 0;
    for (let u = 0, d = n.length; u < d; u++) {
      const f = i[u];
      let g, p;
      if (f.isOrthographic) {
        const m = f.pixelSize;
        g = e.geometricError / m, p = 1 / 0;
      } else {
        const m = f.sseDenominator;
        if (p = r.distanceToPoint(f.position), g = e.geometricError / (p * m), this.dynamicScreenSpaceError) {
          const E = this._calculateDynamicScreenSpaceDistance(e, f, p);
          g = e.geometricError / (E * m);
        }
      }
      const b = i[u].frustum;
      this._intersectsFrustum(b, r) && (o = !0, c = Math.max(c, g), A = Math.min(A, p)), l = Math.max(l, g), h = Math.min(h, p);
    }
    this.invokeAllPlugins((u) => {
      u !== this && u.calculateTileViewError && (u.calculateTileViewError(e, Ws), Ws.inView && (o = !0, c = Math.max(c, Ws.error)), l = Math.max(l, Ws.error));
    }), o ? (t.inView = !0, t.error = c, t.distanceFromCamera = A) : (t.inView = !1, t.error = l, t.distanceFromCamera = h);
  }
  _calculateDynamicScreenSpaceDistance(e, t, s) {
    const n = new z().copy(e.cached.transform).invert(), i = t.frustum.planes[5].normal.clone(), r = t.position.clone();
    r.applyMatrix4(n), i.transformDirection(n);
    const o = r.z, c = r.z / Math.abs(i.z);
    if (s > c) {
      const A = o / c, h = (s - c) / A;
      return c + h;
    } else
      return s;
  }
  _intersectsFrustum(e, t) {
    const s = t.obb || t.regionObb, n = t.sphere;
    return n && !e.intersectsSphere(n) || s && !gh.intersectsFrustum(s, e) ? !1 : !!(n || s);
  }
}
function gn(a) {
  return a.__implicitRoot.implicitTiling.subdivisionScheme === "OCTREE";
}
function ni(a) {
  return gn(a) ? 8 : 4;
}
function mh(a, e) {
  if (!e)
    return [0, 0, 0];
  const t = 2 * e.__x + a.__subtreeIdx % 2, s = 2 * e.__y + Math.floor(a.__subtreeIdx / 2) % 2, n = gn(a) ? 2 * e.__z + Math.floor(a.__subtreeIdx / 4) % 2 : 0;
  return [t, s, n];
}
class ha {
  constructor(e, t) {
    this.parent = e, this.children = [], this.__level = e.__level + 1, this.__implicitRoot = e.__implicitRoot, this.__subtreeIdx = t, [this.__x, this.__y, this.__z] = mh(this, e);
  }
  static copy(e) {
    const t = {};
    return t.children = [], t.__level = e.__level, t.__implicitRoot = e.__implicitRoot, t.__subtreeIdx = e.__subtreeIdx, [t.__x, t.__y, t.__z] = [e.__x, e.__y, e.__z], t.boundingVolume = e.boundingVolume, t.geometricError = e.geometricError, t;
  }
}
class bh extends Qs {
  constructor(e) {
    super(), this.tile = e, this.rootTile = e.__implicitRoot, this.workingPath = null;
  }
  /**
   * A helper object for storing the two parts of the subtree binary
   *
   * @typedef {object} Subtree
   * @property {number} version
   * @property {JSON} subtreeJson
   * @property {ArrayBuffer} subtreeByte
   * @private
   */
  /**
   *
   * @param buffer
   * @return {Subtree}
   */
  parseBuffer(e) {
    const t = new DataView(e);
    let s = 0;
    const n = Pt(t);
    console.assert(n === "subt", 'SUBTREELoader: The magic bytes equal "subt".'), s += 4;
    const i = t.getUint32(s, !0);
    console.assert(i === 1, 'SUBTREELoader: The version listed in the header is "1".'), s += 4;
    const r = t.getUint32(s, !0);
    s += 8;
    const o = t.getUint32(s, !0);
    s += 8;
    const c = JSON.parse(Ar(new Uint8Array(e, s, r)));
    s += r;
    const A = e.slice(s, s + o);
    return {
      version: i,
      subtreeJson: c,
      subtreeByte: A
    };
  }
  async parse(e) {
    const t = this.parseBuffer(e), s = t.subtreeJson;
    s.contentAvailabilityHeaders = [].concat(s.contentAvailability);
    const n = this.preprocessBuffers(s.buffers), i = this.preprocessBufferViews(
      s.bufferViews,
      n
    );
    this.markActiveBufferViews(s, i);
    const r = await this.requestActiveBuffers(
      n,
      t.subtreeByte
    ), o = this.parseActiveBufferViews(i, r);
    this.parseAvailability(t, s, o), this.expandSubtree(this.tile, t);
  }
  /**
   * Determine which buffer views need to be loaded into memory. This includes:
   *
   * <ul>
   * <li>The tile availability bitstream (if a bitstream is defined)</li>
   * <li>The content availability bitstream(s) (if a bitstream is defined)</li>
   * <li>The child subtree availability bitstream (if a bitstream is defined)</li>
   * </ul>
   *
   * <p>
   * This function modifies the buffer view headers' isActive flags in place.
   * </p>
   *
   * @param {JSON} subtreeJson The JSON chunk from the subtree
   * @param {BufferViewHeader[]} bufferViewHeaders The preprocessed buffer view headers
   * @private
   */
  markActiveBufferViews(e, t) {
    let s;
    const n = e.tileAvailability;
    isNaN(n.bitstream) ? isNaN(n.bufferView) || (s = t[n.bufferView]) : s = t[n.bitstream], s && (s.isActive = !0, s.bufferHeader.isActive = !0);
    const i = e.contentAvailabilityHeaders;
    for (let o = 0; o < i.length; o++)
      s = void 0, isNaN(i[o].bitstream) ? isNaN(i[o].bufferView) || (s = t[i[o].bufferView]) : s = t[i[o].bitstream], s && (s.isActive = !0, s.bufferHeader.isActive = !0);
    s = void 0;
    const r = e.childSubtreeAvailability;
    isNaN(r.bitstream) ? isNaN(r.bufferView) || (s = t[r.bufferView]) : s = t[r.bitstream], s && (s.isActive = !0, s.bufferHeader.isActive = !0);
  }
  /**
   * Go through the list of buffers and gather all the active ones into
   * a dictionary.
   * <p>
   * The results are put into a dictionary object. The keys are indices of
   * buffers, and the values are Uint8Arrays of the contents. Only buffers
   * marked with the isActive flag are fetched.
   * </p>
   * <p>
   * The internal buffer (the subtree's binary chunk) is also stored in this
   * dictionary if it is marked active.
   * </p>
   * @param {BufferHeader[]} bufferHeaders The preprocessed buffer headers
   * @param {ArrayBuffer} internalBuffer The binary chunk of the subtree file
   * @returns {object} buffersU8 A dictionary of buffer index to a Uint8Array of its contents.
   * @private
   */
  async requestActiveBuffers(e, t) {
    const s = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r];
      if (!o.isActive)
        s.push(Promise.resolve());
      else if (o.isExternal) {
        const c = this.parseImplicitURIBuffer(
          this.tile,
          this.rootTile.implicitTiling.subtrees.uri,
          o.uri
        ), A = fetch(c, this.fetchOptions).then((l) => {
          if (!l.ok)
            throw new Error(`SUBTREELoader: Failed to load external buffer from ${o.uri} with error code ${l.status}.`);
          return l.arrayBuffer();
        }).then((l) => new Uint8Array(l));
        s.push(A);
      } else
        s.push(Promise.resolve(new Uint8Array(t)));
    }
    const n = await Promise.all(s), i = {};
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      o && (i[r] = o);
    }
    return i;
  }
  /**
   * Go through the list of buffer views, and if they are marked as active,
   * extract a subarray from one of the active buffers.
   *
   * @param {BufferViewHeader[]} bufferViewHeaders
   * @param {object} buffersU8 A dictionary of buffer index to a Uint8Array of its contents.
   * @returns {object} A dictionary of buffer view index to a Uint8Array of its contents.
   * @private
   */
  parseActiveBufferViews(e, t) {
    const s = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      if (!i.isActive)
        continue;
      const r = i.byteOffset, o = r + i.byteLength, c = t[i.buffer];
      s[n] = c.slice(r, o);
    }
    return s;
  }
  /**
   * A buffer header is the JSON header from the subtree JSON chunk plus
   * a couple extra boolean flags for easy reference.
   *
   * Buffers are assumed inactive until explicitly marked active. This is used
   * to avoid fetching unneeded buffers.
   *
   * @typedef {object} BufferHeader
   * @property {boolean} isActive Whether this buffer is currently used.
   * @property {string} [uri] The URI of the buffer (external buffers only)
   * @property {number} byteLength The byte length of the buffer, including any padding contained within.
   * @private
   */
  /**
   * Iterate over the list of buffers from the subtree JSON and add the isActive field for easier parsing later.
   * This modifies the objects in place.
   * @param {Object[]} [bufferHeaders=[]] The JSON from subtreeJson.buffers.
   * @returns {BufferHeader[]} The same array of headers with additional fields.
   * @private
   */
  preprocessBuffers(e = []) {
    for (let t = 0; t < e.length; t++) {
      const s = e[t];
      s.isActive = !1, s.isExternal = !!s.uri;
    }
    return e;
  }
  /**
   * A buffer view header is the JSON header from the subtree JSON chunk plus
   * the isActive flag and a reference to the header for the underlying buffer.
   *
   * @typedef {object} BufferViewHeader
   * @property {BufferHeader} bufferHeader A reference to the header for the underlying buffer
   * @property {boolean} isActive Whether this bufferView is currently used.
   * @property {number} buffer The index of the underlying buffer.
   * @property {number} byteOffset The start byte of the bufferView within the buffer.
   * @property {number} byteLength The length of the bufferView. No padding is included in this length.
   * @private
   */
  /**
   * Iterate the list of buffer views from the subtree JSON and add the
   * isActive flag. Also save a reference to the bufferHeader.
   *
   * @param {Object[]} [bufferViewHeaders=[]] The JSON from subtree.bufferViews.
   * @param {BufferHeader[]} bufferHeaders The preprocessed buffer headers.
   * @returns {BufferViewHeader[]} The same array of bufferView headers with additional fields.
   * @private
   */
  preprocessBufferViews(e = [], t) {
    for (let s = 0; s < e.length; s++) {
      const n = e[s];
      n.bufferHeader = t[n.buffer], n.isActive = !1, n.isExternal = n.bufferHeader.isExternal;
    }
    return e;
  }
  /**
   * Parse the three availability bitstreams and store them in the subtree.
   *
   * @param {Subtree} subtree The subtree to modify.
   * @param {Object} subtreeJson The subtree JSON.
   * @param {Object} bufferViewsU8 A dictionary of buffer view index to a Uint8Array of its contents.
   * @private
   */
  parseAvailability(e, t, s) {
    const n = ni(this.rootTile), i = this.rootTile.implicitTiling.subtreeLevels, r = (Math.pow(n, i) - 1) / (n - 1), o = Math.pow(n, i);
    e._tileAvailability = this.parseAvailabilityBitstream(
      t.tileAvailability,
      s,
      r
    ), e._contentAvailabilityBitstreams = [];
    for (let c = 0; c < t.contentAvailabilityHeaders.length; c++) {
      const A = this.parseAvailabilityBitstream(
        t.contentAvailabilityHeaders[c],
        s,
        // content availability has the same length as tile availability.
        r
      );
      e._contentAvailabilityBitstreams.push(A);
    }
    e._childSubtreeAvailability = this.parseAvailabilityBitstream(
      t.childSubtreeAvailability,
      s,
      o
    );
  }
  /**
   * Given the JSON describing an availability bitstream, turn it into an
   * in-memory representation using an object. This handles bitstreams from a bufferView.
   *
   * @param {Object} availabilityJson A JSON object representing the availability.
   * @param {Object} bufferViewsU8 A dictionary of buffer view index to its Uint8Array contents.
   * @param {number} lengthBits The length of the availability bitstream in bits.
   * @returns {object}
   * @private
   */
  parseAvailabilityBitstream(e, t, s) {
    if (!isNaN(e.constant))
      return {
        constant: !!e.constant,
        lengthBits: s
      };
    let n;
    return isNaN(e.bitstream) ? isNaN(e.bufferView) || (n = t[e.bufferView]) : n = t[e.bitstream], {
      bitstream: n,
      lengthBits: s
    };
  }
  /**
   * Expand a single subtree tile. This transcodes the subtree into
   * a tree of {@link SubtreeTile}. The root of this tree is stored in
   * the placeholder tile's children array. This method also creates
   * tiles for the child subtrees to be lazily expanded as needed.
   *
   * @param {Object | SubtreeTile} subtreeRoot The first node of the subtree.
   * @param {Subtree} subtree The parsed subtree.
   * @private
   */
  expandSubtree(e, t) {
    const s = ha.copy(e);
    for (let r = 0; t && r < t._contentAvailabilityBitstreams.length; r++)
      if (t && this.getBit(t._contentAvailabilityBitstreams[r], 0)) {
        s.content = { uri: this.parseImplicitURI(e, this.rootTile.content.uri) };
        break;
      }
    e.children.push(s);
    const n = this.transcodeSubtreeTiles(
      s,
      t
    ), i = this.listChildSubtrees(t, n);
    for (let r = 0; r < i.length; r++) {
      const o = i[r], c = o.tile, A = this.deriveChildTile(
        null,
        c,
        null,
        o.childMortonIndex
      );
      A.content = { uri: this.parseImplicitURI(A, this.rootTile.implicitTiling.subtrees.uri) }, c.children.push(A);
    }
  }
  /**
   * Transcode the implicitly defined tiles within this subtree and generate
   * explicit {@link SubtreeTile} objects. This function only transcodes tiles,
   * child subtrees are handled separately.
   *
   * @param {Object | SubtreeTile} subtreeRoot The root of the current subtree.
   * @param {Subtree} subtree The subtree to get availability information.
   * @returns {Array} The bottom row of transcoded tiles. This is helpful for processing child subtrees.
   * @private
   */
  transcodeSubtreeTiles(e, t) {
    let s = [e], n = [];
    for (let i = 1; i < this.rootTile.implicitTiling.subtreeLevels; i++) {
      const r = ni(this.rootTile), o = (Math.pow(r, i) - 1) / (r - 1), c = r * s.length;
      for (let A = 0; A < c; A++) {
        const l = o + A, h = A >> Math.log2(r), u = s[h];
        if (!this.getBit(t._tileAvailability, l)) {
          n.push(void 0);
          continue;
        }
        const d = this.deriveChildTile(
          t,
          u,
          l,
          A
        );
        u.children.push(d), n.push(d);
      }
      s = n, n = [];
    }
    return s;
  }
  /**
   * Given a parent tile and information about which child to create, derive
   * the properties of the child tile implicitly.
   * <p>
   * This creates a real tile for rendering.
   * </p>
   *
   * @param {Subtree} subtree The subtree the child tile belongs to.
   * @param {Object | SubtreeTile} parentTile The parent of the new child tile.
   * @param {number} childBitIndex The index of the child tile within the tile's availability information.
   * @param {number} childMortonIndex The morton index of the child tile relative to its parent.
   * @returns {SubtreeTile} The new child tile.
   * @private
   */
  deriveChildTile(e, t, s, n) {
    const i = new ha(t, n);
    i.boundingVolume = this.getTileBoundingVolume(i), i.geometricError = this.getGeometricError(i);
    for (let r = 0; e && r < e._contentAvailabilityBitstreams.length; r++)
      if (e && this.getBit(e._contentAvailabilityBitstreams[r], s)) {
        i.content = { uri: this.parseImplicitURI(i, this.rootTile.content.uri) };
        break;
      }
    return i;
  }
  /**
   * Get a bit from the bitstream as a Boolean. If the bitstream
   * is a constant, the constant value is returned instead.
   *
   * @param {ParsedBitstream} object
   * @param {number} index The integer index of the bit.
   * @returns {boolean} The value of the bit.
   * @private
   */
  getBit(e, t) {
    if (t < 0 || t >= e.lengthBits)
      throw new Error("Bit index out of bounds.");
    if (e.constant !== void 0)
      return e.constant;
    const s = t >> 3, n = t % 8;
    return (new Uint8Array(e.bitstream)[s] >> n & 1) === 1;
  }
  /**
   * //TODO Adapt for Sphere
   * To maintain numerical stability during this subdivision process,
   * the actual bounding volumes should not be computed progressively by subdividing a non-root tile volume.
   * Instead, the exact bounding volumes are computed directly for a given level.
   * @param {Object | SubtreeTile} tile
   * @return {Object} object containing the bounding volume.
   */
  getTileBoundingVolume(e) {
    const t = {};
    if (this.rootTile.boundingVolume.region) {
      const s = [...this.rootTile.boundingVolume.region], n = s[0], i = s[2], r = s[1], o = s[3], c = (i - n) / Math.pow(2, e.__level), A = (o - r) / Math.pow(2, e.__level);
      s[0] = n + c * e.__x, s[2] = n + c * (e.__x + 1), s[1] = r + A * e.__y, s[3] = r + A * (e.__y + 1);
      for (let l = 0; l < 4; l++) {
        const h = s[l];
        h < -Math.PI ? s[l] += 2 * Math.PI : h > Math.PI && (s[l] -= 2 * Math.PI);
      }
      if (gn(e)) {
        const l = s[4], u = (s[5] - l) / Math.pow(2, e.__level);
        s[4] = l + u * e.__z, s[5] = l + u * (e.__z + 1);
      }
      t.region = s;
    }
    if (this.rootTile.boundingVolume.box) {
      const s = [...this.rootTile.boundingVolume.box], n = 2 ** e.__level - 1, i = Math.pow(2, -e.__level), r = gn(e) ? 3 : 2;
      for (let o = 0; o < r; o++) {
        s[3 + o * 3 + 0] *= i, s[3 + o * 3 + 1] *= i, s[3 + o * 3 + 2] *= i;
        const c = s[3 + o * 3 + 0], A = s[3 + o * 3 + 1], l = s[3 + o * 3 + 2], h = o === 0 ? e.__x : o === 1 ? e.__y : e.__z;
        s[0] += 2 * c * (-0.5 * n + h), s[1] += 2 * A * (-0.5 * n + h), s[2] += 2 * l * (-0.5 * n + h);
      }
      t.box = s;
    }
    return t;
  }
  /**
   * Each child’s geometricError is half of its parent’s geometricError.
   * @param {Object | SubtreeTile} tile
   * @return {number}
   */
  getGeometricError(e) {
    return this.rootTile.geometricError / Math.pow(2, e.__level);
  }
  /**
   * Determine what child subtrees exist and return a list of information.
   *
   * @param {Object} subtree The subtree for looking up availability.
   * @param {Array} bottomRow The bottom row of tiles in a transcoded subtree.
   * @returns {[]} A list of identifiers for the child subtrees.
   * @private
   */
  listChildSubtrees(e, t) {
    const s = [], n = ni(this.rootTile);
    for (let i = 0; i < t.length; i++) {
      const r = t[i];
      if (r !== void 0)
        for (let o = 0; o < n; o++) {
          const c = i * n + o;
          this.getBit(e._childSubtreeAvailability, c) && s.push({
            tile: r,
            childMortonIndex: c
          });
        }
    }
    return s;
  }
  /**
   * Replaces placeholder tokens in a URI template with the corresponding tile properties.
   *
   * The URI template should contain the tokens:
   * - `{level}` for the tile's subdivision level.
   * - `{x}` for the tile's x-coordinate.
   * - `{y}` for the tile's y-coordinate.
   * - `{z}` for the tile's z-coordinate.
   *
   * @param {Object} tile - The tile object containing properties __level, __x, __y, and __z.
   * @param {string} uri - The URI template string with placeholders.
   * @returns {string} The URI with placeholders replaced by the tile's properties.
   */
  parseImplicitURI(e, t) {
    return t = t.replace("{level}", e.__level), t = t.replace("{x}", e.__x), t = t.replace("{y}", e.__y), t = t.replace("{z}", e.__z), t;
  }
  /**
   * Generates the full external buffer URI for a tile by combining an implicit URI with a buffer URI.
   *
   * First, it parses the implicit URI using the tile properties and the provided template. Then, it creates a new URL
   * relative to the tile's base path, removes the last path segment, and appends the buffer URI.
   *
   * @param {Object} tile - The tile object that contains properties:
   *   - __level: the subdivision level,
   *   - __x, __y, __z: the tile coordinates,
   * @param {string} uri - The URI template string with placeholders for the tile (e.g., `{level}`, `{x}`, `{y}`, `{z}`).
   * @param {string} bufUri - The buffer file name to append (e.g., "0_1.bin").
   * @returns {string} The full external buffer URI.
   */
  parseImplicitURIBuffer(e, t, s) {
    const n = this.parseImplicitURI(e, t), i = new URL(n, this.workingPath + "/");
    return i.pathname = i.pathname.substring(0, i.pathname.lastIndexOf("/")), new URL(i.pathname + "/" + s, this.workingPath + "/").toString();
  }
}
class Eh {
  constructor() {
    this.name = "IMPLICIT_TILING_PLUGIN";
  }
  init(e) {
    this.tiles = e;
  }
  preprocessNode(e, t, s) {
    var n;
    e.implicitTiling ? (e.__hasUnrenderableContent = !0, e.__hasRenderableContent = !1, e.__subtreeIdx = 0, e.__implicitRoot = e, e.__x = 0, e.__y = 0, e.__z = 0, e.__level = 0) : /.subtree$/i.test((n = e.content) == null ? void 0 : n.uri) && (e.__hasUnrenderableContent = !0, e.__hasRenderableContent = !1);
  }
  parseTile(e, t, s) {
    if (/^subtree$/i.test(s)) {
      const n = new bh(t);
      return n.workingPath = t.__basePath, n.fetchOptions = this.tiles.fetchOptions, n.parse(e);
    }
  }
  preprocessURL(e, t) {
    if (t && t.implicitTiling) {
      const s = t.implicitTiling.subtrees.uri.replace("{level}", t.__level).replace("{x}", t.__x).replace("{y}", t.__y).replace("{z}", t.__z);
      return new URL(s, t.__basePath + "/").toString();
    }
    return e;
  }
  disposeTile(e) {
    var t;
    /.subtree$/i.test((t = e.content) == null ? void 0 : t.uri) && (e.children.forEach((s) => {
      this.tiles.processNodeQueue.remove(s);
    }), e.children.length = 0, e.__childrenProcessed = 0);
  }
}
const Ch = new sr(-1, 1, 1, -1, 0, 1);
class Ih extends xe {
  constructor() {
    super(), this.setAttribute("position", new Re([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new Re([0, 2, 0, 0, 2, 0], 2));
  }
}
const yh = new Ih();
class xh {
  /**
   * Constructs a new full screen quad.
   *
   * @param {?Material} material - The material to render te full screen quad with.
   */
  constructor(e) {
    this._mesh = new De(yh, e);
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever the instance is no longer used in your app.
   */
  dispose() {
    this._mesh.geometry.dispose();
  }
  /**
   * Renders the full screen quad.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   */
  render(e) {
    e.render(this._mesh, Ch);
  }
  /**
   * The quad's material.
   *
   * @type {?Material}
   */
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class Bh {
  set delay(e) {
    this.deferCallbacks.delay = e;
  }
  get delay() {
    return this.deferCallbacks.delay;
  }
  set bytesTarget(e) {
    this.lruCache.minBytesSize = e;
  }
  get bytesTarget() {
    return this.lruCache.minBytesSize;
  }
  get estimatedGpuBytes() {
    return this.lruCache.cachedBytes;
  }
  constructor(e = {}) {
    const {
      delay: t = 0,
      bytesTarget: s = 0
    } = e;
    this.name = "UNLOAD_TILES_PLUGIN", this.tiles = null, this.lruCache = new Oo(), this.deferCallbacks = new _h(), this.delay = t, this.bytesTarget = s;
  }
  init(e) {
    this.tiles = e;
    const { lruCache: t, deferCallbacks: s } = this;
    s.callback = (i) => {
      t.markUnused(i), t.scheduleUnload(!1);
    };
    const n = (i) => {
      const r = i.cached.scene;
      e.visibleTiles.has(i) || e.invokeOnePlugin((c) => c.unloadTileFromGPU && c.unloadTileFromGPU(r, i));
    };
    this._onUpdateBefore = () => {
      t.unloadPriorityCallback = e.lruCache.unloadPriorityCallback, t.computeMemoryUsageCallback = e.lruCache.computeMemoryUsageCallback, t.minSize = 1 / 0, t.maxSize = 1 / 0, t.maxBytesSize = 1 / 0, t.unloadPercent = 1, t.autoMarkUnused = !1;
    }, this._onVisibilityChangeCallback = ({ tile: i, visible: r }) => {
      r ? (t.add(i, n), e.markTileUsed(i), s.cancel(i)) : s.run(i);
    }, e.forEachLoadedModel((i, r) => {
      const o = e.visibleTiles.has(r);
      this._onVisibilityChangeCallback({ scene: i, visible: o });
    }), e.addEventListener("tile-visibility-change", this._onVisibilityChangeCallback), e.addEventListener("update-before", this._onUpdateBefore);
  }
  unloadTileFromGPU(e, t) {
    e && e.traverse((s) => {
      if (s.material) {
        const n = s.material;
        n.dispose();
        for (const i in n) {
          const r = n[i];
          r && r.isTexture && r.dispose();
        }
      }
      s.geometry && s.geometry.dispose();
    });
  }
  dispose() {
    this.tiles.removeEventListener("tile-visibility-change", this._onVisibilityChangeCallback), this.tiles.removeEventListener("update-before", this._onUpdateBefore), this.deferCallbacks.cancelAll();
  }
}
class _h {
  constructor(e = () => {
  }) {
    this.map = /* @__PURE__ */ new Map(), this.callback = e, this.delay = 0;
  }
  run(e) {
    const { map: t, delay: s } = this;
    if (t.has(e))
      throw new Error("DeferCallbackManager: Callback already initialized.");
    s === 0 ? this.callback(e) : t.set(e, setTimeout(() => this.callback(e), s));
  }
  cancel(e) {
    const { map: t } = this;
    t.has(e) && (clearTimeout(t.get(e)), t.delete(e));
  }
  cancelAll() {
    this.map.forEach((e, t) => {
      this.cancel(t);
    });
  }
}
const je = new x(), ua = ["x", "y", "z"];
class wh extends Mn {
  constructor(e, t = 16776960, s = 40) {
    const n = new xe(), i = [];
    for (let r = 0; r < 3; r++) {
      const o = ua[r], c = ua[(r + 1) % 3];
      je.set(0, 0, 0);
      for (let A = 0; A < s; A++) {
        let l;
        l = 2 * Math.PI * A / (s - 1), je[o] = Math.sin(l), je[c] = Math.cos(l), i.push(je.x, je.y, je.z), l = 2 * Math.PI * (A + 1) / (s - 1), je[o] = Math.sin(l), je[c] = Math.cos(l), i.push(je.x, je.y, je.z);
      }
    }
    n.setAttribute("position", new oe(new Float32Array(i), 3)), n.computeBoundingSphere(), super(n, new er({ color: t, toneMapped: !1 })), this.sphere = e, this.type = "SphereHelper";
  }
  updateMatrixWorld(e) {
    const t = this.sphere;
    this.position.copy(t.center), this.scale.setScalar(t.radius), super.updateMatrixWorld(e);
  }
}
const ii = new x(), Js = new x(), Ye = new x();
new x();
new x();
function vh(a, { computeNormals: e = !1 } = {}) {
  const {
    latStart: t = -Math.PI / 2,
    latEnd: s = Math.PI / 2,
    lonStart: n = 0,
    lonEnd: i = 2 * Math.PI,
    heightStart: r = 0,
    heightEnd: o = 0
  } = a, c = new lA(1, 1, 1, 32, 32), { normal: A, position: l } = c.attributes, h = l.clone();
  for (let u = 0, d = l.count; u < d; u++) {
    Ye.fromBufferAttribute(l, u);
    const f = ee.mapLinear(Ye.x, -0.5, 0.5, t, s), g = ee.mapLinear(Ye.y, -0.5, 0.5, n, i);
    let p = r;
    a.getCartographicToNormal(f, g, ii), Ye.z < 0 && (p = o), a.getCartographicToPosition(f, g, p, Ye), l.setXYZ(u, ...Ye);
  }
  e && c.computeVertexNormals();
  for (let u = 0, d = h.count; u < d; u++) {
    Ye.fromBufferAttribute(h, u);
    const f = ee.mapLinear(Ye.x, -0.5, 0.5, t, s), g = ee.mapLinear(Ye.y, -0.5, 0.5, n, i);
    ii.fromBufferAttribute(A, u), a.getCartographicToNormal(f, g, Js), Math.abs(ii.dot(Js)) > 0.1 && (Ye.z > 0 && Js.multiplyScalar(-1), A.setXYZ(u, ...Js));
  }
  return c;
}
class Sh extends Mn {
  constructor(e = new Ac(), t = 16776960) {
    super(), this.ellipsoidRegion = e, this.material.color.set(t), this.update();
  }
  update() {
    const e = vh(this.ellipsoidRegion);
    this.geometry.dispose(), this.geometry = new Mo(e, 80);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
const da = Symbol("ORIGINAL_MATERIAL"), ri = Symbol("HAS_RANDOM_COLOR"), ai = Symbol("HAS_RANDOM_NODE_COLOR"), oi = Symbol("LOAD_TIME"), Lt = Symbol("PARENT_BOUND_REF_COUNT"), fa = /* @__PURE__ */ new Fe(), ci = () => {
}, Ai = {};
function li(a) {
  if (!Ai[a]) {
    const e = Math.random(), t = 0.5 + Math.random() * 0.5, s = 0.375 + Math.random() * 0.25;
    Ai[a] = new X().setHSL(e, t, s);
  }
  return Ai[a];
}
const bs = 0, hc = 1, uc = 2, dc = 3, fc = 4, gc = 5, pc = 6, on = 7, cn = 8, mc = 9, Pi = 10, Th = Object.freeze({
  NONE: bs,
  SCREEN_ERROR: hc,
  GEOMETRIC_ERROR: uc,
  DISTANCE: dc,
  DEPTH: fc,
  RELATIVE_DEPTH: gc,
  IS_LEAF: pc,
  RANDOM_COLOR: on,
  RANDOM_NODE_COLOR: cn,
  CUSTOM_COLOR: mc,
  LOAD_ORDER: Pi
});
class Qh {
  static get ColorModes() {
    return Th;
  }
  get unlit() {
    return this._unlit;
  }
  set unlit(e) {
    e !== this._unlit && (this._unlit = e, this.materialsNeedUpdate = !0);
  }
  get colorMode() {
    return this._colorMode;
  }
  set colorMode(e) {
    e !== this._colorMode && (this._colorMode = e, this.materialsNeedUpdate = !0);
  }
  constructor(e) {
    e = {
      displayParentBounds: !1,
      displayBoxBounds: !1,
      displaySphereBounds: !1,
      displayRegionBounds: !1,
      colorMode: bs,
      maxDebugDepth: -1,
      maxDebugDistance: -1,
      maxDebugError: -1,
      customColorCallback: null,
      unlit: !1,
      enabled: !0,
      ...e
    }, this.name = "DEBUG_TILES_PLUGIN", this.tiles = null, this._colorMode = null, this._unlit = null, this.materialsNeedUpdate = !1, this.extremeDebugDepth = -1, this.extremeDebugError = -1, this.boxGroup = null, this.sphereGroup = null, this.regionGroup = null, this._enabled = e.enabled, this._displayParentBounds = e.displayParentBounds, this.displayBoxBounds = e.displayBoxBounds, this.displaySphereBounds = e.displaySphereBounds, this.displayRegionBounds = e.displayRegionBounds, this.colorMode = e.colorMode, this.maxDebugDepth = e.maxDebugDepth, this.maxDebugDistance = e.maxDebugDistance, this.maxDebugError = e.maxDebugError, this.customColorCallback = e.customColorCallback, this.unlit = e.unlit, this.getDebugColor = (t, s) => {
      s.setRGB(t, t, t);
    };
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(e) {
    e !== this._enabled && this.tiles !== null && (e ? this.init(this.tiles) : this.dispose()), this._enabled = e;
  }
  get displayParentBounds() {
    return this._displayParentBounds;
  }
  set displayParentBounds(e) {
    this._displayParentBounds !== e && (this._displayParentBounds = e, e ? this.tiles.traverse((t) => {
      t.__visible && this._onTileVisibilityChange(t, !0);
    }) : ki(this.tiles.root, null, (t) => {
      t[Lt] = null, this._onTileVisibilityChange(t, t.__visible);
    }));
  }
  // initialize the groups for displaying helpers, register events, and initialize existing tiles
  init(e) {
    if (this.tiles = e, !this.enabled)
      return;
    const t = e.group;
    this.boxGroup = new le(), this.boxGroup.name = "DebugTilesRenderer.boxGroup", t.add(this.boxGroup), this.boxGroup.updateMatrixWorld(), this.sphereGroup = new le(), this.sphereGroup.name = "DebugTilesRenderer.sphereGroup", t.add(this.sphereGroup), this.sphereGroup.updateMatrixWorld(), this.regionGroup = new le(), this.regionGroup.name = "DebugTilesRenderer.regionGroup", t.add(this.regionGroup), this.regionGroup.updateMatrixWorld(), this._onLoadTileSetCB = () => {
      this._initExtremes();
    }, this._onLoadModelCB = ({ scene: s, tile: n }) => {
      this._onLoadModel(s, n);
    }, this._onDisposeModelCB = ({ tile: s }) => {
      this._onDisposeModel(s);
    }, this._onUpdateAfterCB = () => {
      this._onUpdateAfter();
    }, this._onTileVisibilityChangeCB = ({ scene: s, tile: n, visible: i }) => {
      this._onTileVisibilityChange(n, i);
    }, e.addEventListener("load-tile-set", this._onLoadTileSetCB), e.addEventListener("load-model", this._onLoadModelCB), e.addEventListener("dispose-model", this._onDisposeModelCB), e.addEventListener("update-after", this._onUpdateAfterCB), e.addEventListener("tile-visibility-change", this._onTileVisibilityChangeCB), this._initExtremes(), e.traverse((s) => {
      s.cached.scene && this._onLoadModel(s.cached.scene, s);
    }), e.visibleTiles.forEach((s) => {
      this._onTileVisibilityChange(s, !0);
    });
  }
  getTileInformationFromActiveObject(e) {
    let t = null;
    return this.tiles.activeTiles.forEach((n) => {
      if (t)
        return !0;
      const i = n.cached.scene;
      i && i.traverse((r) => {
        r === e && (t = n);
      });
    }), t ? {
      distanceToCamera: t.__distanceFromCamera,
      geometricError: t.geometricError,
      screenSpaceError: t.__error,
      depth: t.__depth,
      isLeaf: t.__isLeaf
    } : null;
  }
  _initExtremes() {
    if (!(this.tiles && this.tiles.root))
      return;
    let e = -1, t = -1;
    ki(this.tiles.root, null, (s, n, i) => {
      e = Math.max(e, i), t = Math.max(t, s.geometricError);
    }), this.extremeDebugDepth = e, this.extremeDebugError = t;
  }
  _onUpdateAfter() {
    const { tiles: e, colorMode: t } = this;
    if (!e.root)
      return;
    this.materialsNeedUpdate && (e.forEachLoadedModel((A) => {
      this._updateMaterial(A);
    }), this.materialsNeedUpdate = !1), this.boxGroup.visible = this.displayBoxBounds, this.sphereGroup.visible = this.displaySphereBounds, this.regionGroup.visible = this.displayRegionBounds;
    let s = -1;
    this.maxDebugDepth === -1 ? s = this.extremeDebugDepth : s = this.maxDebugDepth;
    let n = -1;
    this.maxDebugError === -1 ? n = this.extremeDebugError : n = this.maxDebugError;
    let i = -1;
    this.maxDebugDistance === -1 ? (e.getBoundingSphere(fa), i = fa.radius) : i = this.maxDebugDistance;
    const { errorTarget: r, visibleTiles: o } = e;
    let c;
    t === Pi && (c = Array.from(o).sort((A, l) => A[oi] - l[oi])), o.forEach((A) => {
      const l = A.cached.scene;
      let h, u, d;
      t === on && (h = Math.random(), u = 0.5 + Math.random() * 0.5, d = 0.375 + Math.random() * 0.25), l.traverse((f) => {
        if (t === cn && (h = Math.random(), u = 0.5 + Math.random() * 0.5, d = 0.375 + Math.random() * 0.25), f.material)
          switch (t !== on && delete f.material[ri], t !== cn && delete f.material[ai], t) {
            case fc: {
              const g = A.__depth / s;
              this.getDebugColor(g, f.material.color);
              break;
            }
            case gc: {
              const g = A.__depthFromRenderedParent / s;
              this.getDebugColor(g, f.material.color);
              break;
            }
            case hc: {
              const g = A.__error / r;
              g > 1 ? f.material.color.setRGB(1, 0, 0) : this.getDebugColor(g, f.material.color);
              break;
            }
            case uc: {
              const g = Math.min(A.geometricError / n, 1);
              this.getDebugColor(g, f.material.color);
              break;
            }
            case dc: {
              const g = Math.min(A.__distanceFromCamera / i, 1);
              this.getDebugColor(g, f.material.color);
              break;
            }
            case pc: {
              !A.children || A.children.length === 0 ? this.getDebugColor(1, f.material.color) : this.getDebugColor(0, f.material.color);
              break;
            }
            case cn: {
              f.material[ai] || (f.material.color.setHSL(h, u, d), f.material[ai] = !0);
              break;
            }
            case on: {
              f.material[ri] || (f.material.color.setHSL(h, u, d), f.material[ri] = !0);
              break;
            }
            case mc: {
              this.customColorCallback ? this.customColorCallback(A, f) : console.warn("DebugTilesRenderer: customColorCallback not defined");
              break;
            }
            case Pi: {
              const g = c.indexOf(A);
              this.getDebugColor(g / (c.length - 1), f.material.color);
              break;
            }
          }
      });
    });
  }
  _onTileVisibilityChange(e, t) {
    this.displayParentBounds ? rl(e, (s) => {
      s[Lt] == null && (s[Lt] = 0), t ? s[Lt]++ : s[Lt] > 0 && s[Lt]--;
      const n = s === e && t || this.displayParentBounds && s[Lt] > 0;
      this._updateBoundHelper(s, n);
    }) : this._updateBoundHelper(e, t);
  }
  _createBoundHelper(e) {
    const t = this.tiles, s = e.cached, { sphere: n, obb: i, region: r } = s.boundingVolume;
    if (i) {
      const o = new le();
      o.name = "DebugTilesRenderer.boxHelperGroup", o.matrix.copy(i.transform), o.matrixAutoUpdate = !1;
      const c = new hA(i.box, li(e.__depth));
      c.raycast = ci, o.add(c), s.boxHelperGroup = o, t.visibleTiles.has(e) && this.displayBoxBounds && (this.boxGroup.add(o), o.updateMatrixWorld(!0));
    }
    if (n) {
      const o = new wh(n, li(e.__depth));
      o.raycast = ci, s.sphereHelper = o, t.visibleTiles.has(e) && this.displaySphereBounds && (this.sphereGroup.add(o), o.updateMatrixWorld(!0));
    }
    if (r) {
      const o = new Sh(r, li(e.__depth));
      o.raycast = ci;
      const c = new Fe();
      r.getBoundingSphere(c), o.position.copy(c.center), c.center.multiplyScalar(-1), o.geometry.translate(...c.center), s.regionHelper = o, t.visibleTiles.has(e) && this.displayRegionBounds && (this.regionGroup.add(o), o.updateMatrixWorld(!0));
    }
  }
  _updateHelperMaterial(e, t) {
    e.__visible || !this.displayParentBounds ? t.opacity = 1 : t.opacity = 0.2;
    const s = t.transparent;
    t.transparent = t.opacity < 1, t.transparent !== s && (t.needsUpdate = !0);
  }
  _updateBoundHelper(e, t) {
    const s = e.cached;
    if (!s)
      return;
    const n = this.sphereGroup, i = this.boxGroup, r = this.regionGroup;
    t && s.boxHelperGroup == null && s.sphereHelper == null && s.regionHelper == null && this._createBoundHelper(e);
    const o = s.boxHelperGroup, c = s.sphereHelper, A = s.regionHelper;
    t ? (o && (i.add(o), o.updateMatrixWorld(!0), this._updateHelperMaterial(e, o.children[0].material)), c && (n.add(c), c.updateMatrixWorld(!0), this._updateHelperMaterial(e, c.material)), A && (r.add(A), A.updateMatrixWorld(!0), this._updateHelperMaterial(e, A.material))) : (o && i.remove(o), c && n.remove(c), A && r.remove(A));
  }
  _updateMaterial(e) {
    const { colorMode: t, unlit: s } = this;
    e.traverse((n) => {
      if (!n.material)
        return;
      const i = n.material, r = n[da];
      if (i !== r && i.dispose(), t !== bs || s) {
        if (n.isPoints) {
          const o = new Rn();
          o.size = r.size, o.sizeAttenuation = r.sizeAttenuation, n.material = o;
        } else s ? n.material = new ye() : (n.material = new rs(), n.material.flatShading = !0);
        t === bs && (n.material.map = r.map, n.material.color.set(r.color));
      } else
        n.material = r;
    });
  }
  _onLoadModel(e, t) {
    t[oi] = performance.now(), e.traverse((s) => {
      const n = s.material;
      n && (s[da] = n);
    }), this._updateMaterial(e);
  }
  _onDisposeModel(e) {
    const t = e.cached;
    t.boxHelperGroup && (t.boxHelperGroup.children[0].geometry.dispose(), delete t.boxHelperGroup), t.sphereHelper && (t.sphereHelper.geometry.dispose(), delete t.sphereHelper), t.regionHelper && (t.regionHelper.geometry.dispose(), delete t.regionHelper);
  }
  dispose() {
    var t, s, n;
    if (!this.enabled)
      return;
    const e = this.tiles;
    e.removeEventListener("load-tile-set", this._onLoadTileSetCB), e.removeEventListener("load-model", this._onLoadModelCB), e.removeEventListener("dispose-model", this._onDisposeModelCB), e.removeEventListener("update-after", this._onUpdateAfterCB), e.removeEventListener("tile-visibility-change", this._onTileVisibilityChangeCB), this.colorMode = bs, this.unlit = !1, e.forEachLoadedModel((i) => {
      this._updateMaterial(i);
    }), e.traverse((i) => {
      this._onDisposeModel(i);
    }), (t = this.boxGroup) == null || t.removeFromParent(), (s = this.sphereGroup) == null || s.removeFromParent(), (n = this.regionGroup) == null || n.removeFromParent();
  }
}
function ga(a, e) {
  if (e === Ao)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), a;
  if (e === Zt || e === Tn) {
    let t = a.getIndex();
    if (t === null) {
      const r = [], o = a.getAttribute("position");
      if (o !== void 0) {
        for (let c = 0; c < o.count; c++)
          r.push(c);
        a.setIndex(r), t = a.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), a;
    }
    const s = t.count - 2, n = [];
    if (e === Zt)
      for (let r = 1; r <= s; r++)
        n.push(t.getX(0)), n.push(t.getX(r)), n.push(t.getX(r + 1));
    else
      for (let r = 0; r < s; r++)
        r % 2 === 0 ? (n.push(t.getX(r)), n.push(t.getX(r + 1)), n.push(t.getX(r + 2))) : (n.push(t.getX(r + 2)), n.push(t.getX(r + 1)), n.push(t.getX(r)));
    n.length / 3 !== s && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const i = a.clone();
    return i.setIndex(n), i.clearGroups(), i;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), a;
}
class Rh extends ns {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new kh(t);
    }), this.register(function(t) {
      return new Uh(t);
    }), this.register(function(t) {
      return new qh(t);
    }), this.register(function(t) {
      return new Kh(t);
    }), this.register(function(t) {
      return new Wh(t);
    }), this.register(function(t) {
      return new Ph(t);
    }), this.register(function(t) {
      return new Nh(t);
    }), this.register(function(t) {
      return new Oh(t);
    }), this.register(function(t) {
      return new Hh(t);
    }), this.register(function(t) {
      return new Fh(t);
    }), this.register(function(t) {
      return new zh(t);
    }), this.register(function(t) {
      return new Gh(t);
    }), this.register(function(t) {
      return new Vh(t);
    }), this.register(function(t) {
      return new jh(t);
    }), this.register(function(t) {
      return new Dh(t);
    }), this.register(function(t) {
      return new Jh(t);
    }), this.register(function(t) {
      return new Yh(t);
    });
  }
  load(e, t, s, n) {
    const i = this;
    let r;
    if (this.resourcePath !== "")
      r = this.resourcePath;
    else if (this.path !== "") {
      const A = it.extractUrlBase(e);
      r = it.resolveURL(A, this.path);
    } else
      r = it.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(A) {
      n ? n(A) : console.error(A), i.manager.itemError(e), i.manager.itemEnd(e);
    }, c = new He(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(
      e,
      function(A) {
        try {
          i.parse(
            A,
            r,
            function(l) {
              t(l), i.manager.itemEnd(e);
            },
            o
          );
        } catch (l) {
          o(l);
        }
      },
      s,
      o
    );
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, s, n) {
    let i;
    const r = {}, o = {}, c = new TextDecoder();
    if (typeof e == "string")
      i = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (c.decode(new Uint8Array(e, 0, 4)) === bc) {
        try {
          r[J.KHR_BINARY_GLTF] = new Xh(e);
        } catch (h) {
          n && n(h);
          return;
        }
        i = JSON.parse(r[J.KHR_BINARY_GLTF].content);
      } else
        i = JSON.parse(c.decode(e));
    else
      i = e;
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      n && n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const A = new lu(i, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    A.fileLoader.setRequestHeader(this.requestHeader);
    for (let l = 0; l < this.pluginCallbacks.length; l++) {
      const h = this.pluginCallbacks[l](A);
      h.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[h.name] = h, r[h.name] = !0;
    }
    if (i.extensionsUsed)
      for (let l = 0; l < i.extensionsUsed.length; ++l) {
        const h = i.extensionsUsed[l], u = i.extensionsRequired || [];
        switch (h) {
          case J.KHR_MATERIALS_UNLIT:
            r[h] = new Lh();
            break;
          case J.KHR_DRACO_MESH_COMPRESSION:
            r[h] = new Zh(i, this.dracoLoader);
            break;
          case J.KHR_TEXTURE_TRANSFORM:
            r[h] = new $h();
            break;
          case J.KHR_MESH_QUANTIZATION:
            r[h] = new eu();
            break;
          default:
            u.indexOf(h) >= 0 && o[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
        }
      }
    A.setExtensions(r), A.setPlugins(o), A.parse(s, n);
  }
  parseAsync(e, t) {
    const s = this;
    return new Promise(function(n, i) {
      s.parse(e, t, n, i);
    });
  }
}
function Mh() {
  let a = {};
  return {
    get: function(e) {
      return a[e];
    },
    add: function(e, t) {
      a[e] = t;
    },
    remove: function(e) {
      delete a[e];
    },
    removeAll: function() {
      a = {};
    }
  };
}
const J = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class Dh {
  constructor(e) {
    this.parser = e, this.name = J.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let s = 0, n = t.length; s < n; s++) {
      const i = t[s];
      i.extensions && i.extensions[this.name] && i.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, i.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, s = "light:" + e;
    let n = t.cache.get(s);
    if (n) return n;
    const i = t.json, c = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e];
    let A;
    const l = new X(16777215);
    c.color !== void 0 && l.setRGB(c.color[0], c.color[1], c.color[2], he);
    const h = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        A = new Zi(l), A.target.position.set(0, 0, -1), A.add(A.target);
        break;
      case "point":
        A = new ho(l), A.distance = h;
        break;
      case "spot":
        A = new lo(l), A.distance = h, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, A.angle = c.spot.outerConeAngle, A.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, A.target.position.set(0, 0, -1), A.add(A.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return A.position.set(0, 0, 0), lt(A, c), c.intensity !== void 0 && (A.intensity = c.intensity), A.name = t.createUniqueName(c.name || "light_" + e), n = Promise.resolve(A), t.cache.add(s, n), n;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, s = this.parser, i = s.json.nodes[e], o = (i.extensions && i.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(c) {
      return s._getNodeRef(t.cache, o, c);
    });
  }
}
class Lh {
  constructor() {
    this.name = J.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return ye;
  }
  extendParams(e, t, s) {
    const n = [];
    e.color = new X(1, 1, 1), e.opacity = 1;
    const i = t.pbrMetallicRoughness;
    if (i) {
      if (Array.isArray(i.baseColorFactor)) {
        const r = i.baseColorFactor;
        e.color.setRGB(r[0], r[1], r[2], he), e.opacity = r[3];
      }
      i.baseColorTexture !== void 0 && n.push(s.assignTexture(e, "map", i.baseColorTexture, Qe));
    }
    return Promise.all(n);
  }
}
class Fh {
  constructor(e) {
    this.parser = e, this.name = J.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = n.extensions[this.name].emissiveStrength;
    return i !== void 0 && (t.emissiveIntensity = i), Promise.resolve();
  }
}
class kh {
  constructor(e) {
    this.parser = e, this.name = J.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    if (r.clearcoatFactor !== void 0 && (t.clearcoat = r.clearcoatFactor), r.clearcoatTexture !== void 0 && i.push(s.assignTexture(t, "clearcoatMap", r.clearcoatTexture)), r.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = r.clearcoatRoughnessFactor), r.clearcoatRoughnessTexture !== void 0 && i.push(s.assignTexture(t, "clearcoatRoughnessMap", r.clearcoatRoughnessTexture)), r.clearcoatNormalTexture !== void 0 && (i.push(s.assignTexture(t, "clearcoatNormalMap", r.clearcoatNormalTexture)), r.clearcoatNormalTexture.scale !== void 0)) {
      const o = r.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new H(o, o);
    }
    return Promise.all(i);
  }
}
class Uh {
  constructor(e) {
    this.parser = e, this.name = J.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : ue;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = n.extensions[this.name];
    return t.dispersion = i.dispersion !== void 0 ? i.dispersion : 0, Promise.resolve();
  }
}
class Gh {
  constructor(e) {
    this.parser = e, this.name = J.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    return r.iridescenceFactor !== void 0 && (t.iridescence = r.iridescenceFactor), r.iridescenceTexture !== void 0 && i.push(s.assignTexture(t, "iridescenceMap", r.iridescenceTexture)), r.iridescenceIor !== void 0 && (t.iridescenceIOR = r.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), r.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = r.iridescenceThicknessMinimum), r.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = r.iridescenceThicknessMaximum), r.iridescenceThicknessTexture !== void 0 && i.push(s.assignTexture(t, "iridescenceThicknessMap", r.iridescenceThicknessTexture)), Promise.all(i);
  }
}
class Ph {
  constructor(e) {
    this.parser = e, this.name = J.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [];
    t.sheenColor = new X(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const r = n.extensions[this.name];
    if (r.sheenColorFactor !== void 0) {
      const o = r.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], he);
    }
    return r.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = r.sheenRoughnessFactor), r.sheenColorTexture !== void 0 && i.push(s.assignTexture(t, "sheenColorMap", r.sheenColorTexture, Qe)), r.sheenRoughnessTexture !== void 0 && i.push(s.assignTexture(t, "sheenRoughnessMap", r.sheenRoughnessTexture)), Promise.all(i);
  }
}
class Nh {
  constructor(e) {
    this.parser = e, this.name = J.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    return r.transmissionFactor !== void 0 && (t.transmission = r.transmissionFactor), r.transmissionTexture !== void 0 && i.push(s.assignTexture(t, "transmissionMap", r.transmissionTexture)), Promise.all(i);
  }
}
class Oh {
  constructor(e) {
    this.parser = e, this.name = J.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    t.thickness = r.thicknessFactor !== void 0 ? r.thicknessFactor : 0, r.thicknessTexture !== void 0 && i.push(s.assignTexture(t, "thicknessMap", r.thicknessTexture)), t.attenuationDistance = r.attenuationDistance || 1 / 0;
    const o = r.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new X().setRGB(o[0], o[1], o[2], he), Promise.all(i);
  }
}
class Hh {
  constructor(e) {
    this.parser = e, this.name = J.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : ue;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = n.extensions[this.name];
    return t.ior = i.ior !== void 0 ? i.ior : 1.5, Promise.resolve();
  }
}
class zh {
  constructor(e) {
    this.parser = e, this.name = J.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    t.specularIntensity = r.specularFactor !== void 0 ? r.specularFactor : 1, r.specularTexture !== void 0 && i.push(s.assignTexture(t, "specularIntensityMap", r.specularTexture));
    const o = r.specularColorFactor || [1, 1, 1];
    return t.specularColor = new X().setRGB(o[0], o[1], o[2], he), r.specularColorTexture !== void 0 && i.push(s.assignTexture(t, "specularColorMap", r.specularColorTexture, Qe)), Promise.all(i);
  }
}
class jh {
  constructor(e) {
    this.parser = e, this.name = J.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    return t.bumpScale = r.bumpFactor !== void 0 ? r.bumpFactor : 1, r.bumpTexture !== void 0 && i.push(s.assignTexture(t, "bumpMap", r.bumpTexture)), Promise.all(i);
  }
}
class Vh {
  constructor(e) {
    this.parser = e, this.name = J.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    return r.anisotropyStrength !== void 0 && (t.anisotropy = r.anisotropyStrength), r.anisotropyRotation !== void 0 && (t.anisotropyRotation = r.anisotropyRotation), r.anisotropyTexture !== void 0 && i.push(s.assignTexture(t, "anisotropyMap", r.anisotropyTexture)), Promise.all(i);
  }
}
class qh {
  constructor(e) {
    this.parser = e, this.name = J.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, s = t.json, n = s.textures[e];
    if (!n.extensions || !n.extensions[this.name])
      return null;
    const i = n.extensions[this.name], r = t.options.ktx2Loader;
    if (!r) {
      if (s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, i.source, r);
  }
}
class Kh {
  constructor(e) {
    this.parser = e, this.name = J.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, s = this.parser, n = s.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const r = i.extensions[t], o = n.images[r.source];
    let c = s.textureLoader;
    if (o.uri) {
      const A = s.options.manager.getHandler(o.uri);
      A !== null && (c = A);
    }
    return this.detectSupport().then(function(A) {
      if (A) return s.loadTextureImage(e, r.source, c);
      if (n.extensionsRequired && n.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return s.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class Wh {
  constructor(e) {
    this.parser = e, this.name = J.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, s = this.parser, n = s.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const r = i.extensions[t], o = n.images[r.source];
    let c = s.textureLoader;
    if (o.uri) {
      const A = s.options.manager.getHandler(o.uri);
      A !== null && (c = A);
    }
    return this.detectSupport().then(function(A) {
      if (A) return s.loadTextureImage(e, r.source, c);
      if (n.extensionsRequired && n.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return s.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class Jh {
  constructor(e) {
    this.name = J.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, s = t.bufferViews[e];
    if (s.extensions && s.extensions[this.name]) {
      const n = s.extensions[this.name], i = this.parser.getDependency("buffer", n.buffer), r = this.parser.options.meshoptDecoder;
      if (!r || !r.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return i.then(function(o) {
        const c = n.byteOffset || 0, A = n.byteLength || 0, l = n.count, h = n.byteStride, u = new Uint8Array(o, c, A);
        return r.decodeGltfBufferAsync ? r.decodeGltfBufferAsync(l, h, u, n.mode, n.filter).then(function(d) {
          return d.buffer;
        }) : r.ready.then(function() {
          const d = new ArrayBuffer(l * h);
          return r.decodeGltfBuffer(new Uint8Array(d), l, h, u, n.mode, n.filter), d;
        });
      });
    } else
      return null;
  }
}
class Yh {
  constructor(e) {
    this.name = J.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, s = t.nodes[e];
    if (!s.extensions || !s.extensions[this.name] || s.mesh === void 0)
      return null;
    const n = t.meshes[s.mesh];
    for (const A of n.primitives)
      if (A.mode !== Ne.TRIANGLES && A.mode !== Ne.TRIANGLE_STRIP && A.mode !== Ne.TRIANGLE_FAN && A.mode !== void 0)
        return null;
    const r = s.extensions[this.name].attributes, o = [], c = {};
    for (const A in r)
      o.push(
        this.parser.getDependency("accessor", r[A]).then((l) => (c[A] = l, c[A]))
      );
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((A) => {
      const l = A.pop(), h = l.isGroup ? l.children : [l], u = A[0].count, d = [];
      for (const f of h) {
        const g = new z(), p = new x(), b = new qe(), m = new x(1, 1, 1), E = new $i(f.geometry, f.material, u);
        for (let C = 0; C < u; C++)
          c.TRANSLATION && p.fromBufferAttribute(c.TRANSLATION, C), c.ROTATION && b.fromBufferAttribute(c.ROTATION, C), c.SCALE && m.fromBufferAttribute(c.SCALE, C), E.setMatrixAt(C, g.compose(p, b, m));
        for (const C in c)
          if (C === "_COLOR_0") {
            const I = c[C];
            E.instanceColor = new Qn(I.array, I.itemSize, I.normalized);
          } else C !== "TRANSLATION" && C !== "ROTATION" && C !== "SCALE" && f.geometry.setAttribute(C, c[C]);
        Tt.prototype.copy.call(E, f), this.parser.assignFinalMaterial(E), d.push(E);
      }
      return l.isGroup ? (l.clear(), l.add(...d), l) : d[0];
    }));
  }
}
const bc = "glTF", hs = 12, pa = { JSON: 1313821514, BIN: 5130562 };
class Xh {
  constructor(e) {
    this.name = J.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, hs), s = new TextDecoder();
    if (this.header = {
      magic: s.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== bc)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - hs, i = new DataView(e, hs);
    let r = 0;
    for (; r < n; ) {
      const o = i.getUint32(r, !0);
      r += 4;
      const c = i.getUint32(r, !0);
      if (r += 4, c === pa.JSON) {
        const A = new Uint8Array(e, hs + r, o);
        this.content = s.decode(A);
      } else if (c === pa.BIN) {
        const A = hs + r;
        this.body = e.slice(A, A + o);
      }
      r += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Zh {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = J.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const s = this.json, n = this.dracoLoader, i = e.extensions[this.name].bufferView, r = e.extensions[this.name].attributes, o = {}, c = {}, A = {};
    for (const l in r) {
      const h = Ni[l] || l.toLowerCase();
      o[h] = r[l];
    }
    for (const l in e.attributes) {
      const h = Ni[l] || l.toLowerCase();
      if (r[l] !== void 0) {
        const u = s.accessors[e.attributes[l]], d = Yt[u.componentType];
        A[h] = d.name, c[h] = u.normalized === !0;
      }
    }
    return t.getDependency("bufferView", i).then(function(l) {
      return new Promise(function(h, u) {
        n.decodeDracoFile(
          l,
          function(d) {
            for (const f in d.attributes) {
              const g = d.attributes[f], p = c[f];
              p !== void 0 && (g.normalized = p);
            }
            h(d);
          },
          o,
          A,
          he,
          u
        );
      });
    });
  }
}
class $h {
  constructor() {
    this.name = J.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class eu {
  constructor() {
    this.name = J.KHR_MESH_QUANTIZATION;
  }
}
class Ec extends So {
  constructor(e, t, s, n) {
    super(e, t, s, n);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, s = this.sampleValues, n = this.valueSize, i = e * n * 3 + n;
    for (let r = 0; r !== n; r++)
      t[r] = s[i + r];
    return t;
  }
  interpolate_(e, t, s, n) {
    const i = this.resultBuffer, r = this.sampleValues, o = this.valueSize, c = o * 2, A = o * 3, l = n - t, h = (s - t) / l, u = h * h, d = u * h, f = e * A, g = f - A, p = -2 * d + 3 * u, b = d - u, m = 1 - p, E = b - u + h;
    for (let C = 0; C !== o; C++) {
      const I = r[g + C + o], _ = r[g + C + c] * l, B = r[f + C + o], y = r[f + C] * l;
      i[C] = m * I + E * _ + p * B + b * y;
    }
    return i;
  }
}
const tu = new qe();
class su extends Ec {
  interpolate_(e, t, s, n) {
    const i = super.interpolate_(e, t, s, n);
    return tu.fromArray(i).normalize().toArray(i), i;
  }
}
const Ne = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, Yt = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, ma = {
  9728: $t,
  9729: ne,
  9984: bo,
  9985: mo,
  9986: po,
  9987: is
}, ba = {
  33071: fe,
  33648: Eo,
  10497: es
}, hi = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Ni = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, It = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, nu = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: Dn,
  STEP: vo
}, ui = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function iu(a) {
  return a.DefaultMaterial === void 0 && (a.DefaultMaterial = new rs({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: nr
  })), a.DefaultMaterial;
}
function Ft(a, e, t) {
  for (const s in t.extensions)
    a[s] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[s] = t.extensions[s]);
}
function lt(a, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(a.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function ru(a, e, t) {
  let s = !1, n = !1, i = !1;
  for (let A = 0, l = e.length; A < l; A++) {
    const h = e[A];
    if (h.POSITION !== void 0 && (s = !0), h.NORMAL !== void 0 && (n = !0), h.COLOR_0 !== void 0 && (i = !0), s && n && i) break;
  }
  if (!s && !n && !i) return Promise.resolve(a);
  const r = [], o = [], c = [];
  for (let A = 0, l = e.length; A < l; A++) {
    const h = e[A];
    if (s) {
      const u = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : a.attributes.position;
      r.push(u);
    }
    if (n) {
      const u = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : a.attributes.normal;
      o.push(u);
    }
    if (i) {
      const u = h.COLOR_0 !== void 0 ? t.getDependency("accessor", h.COLOR_0) : a.attributes.color;
      c.push(u);
    }
  }
  return Promise.all([Promise.all(r), Promise.all(o), Promise.all(c)]).then(function(A) {
    const l = A[0], h = A[1], u = A[2];
    return s && (a.morphAttributes.position = l), n && (a.morphAttributes.normal = h), i && (a.morphAttributes.color = u), a.morphTargetsRelative = !0, a;
  });
}
function au(a, e) {
  if (a.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, s = e.weights.length; t < s; t++)
      a.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (a.morphTargetInfluences.length === t.length) {
      a.morphTargetDictionary = {};
      for (let s = 0, n = t.length; s < n; s++)
        a.morphTargetDictionary[t[s]] = s;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function ou(a) {
  let e;
  const t = a.extensions && a.extensions[J.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + di(t.attributes) : e = a.indices + ":" + di(a.attributes) + ":" + a.mode, a.targets !== void 0)
    for (let s = 0, n = a.targets.length; s < n; s++)
      e += ":" + di(a.targets[s]);
  return e;
}
function di(a) {
  let e = "";
  const t = Object.keys(a).sort();
  for (let s = 0, n = t.length; s < n; s++)
    e += t[s] + ":" + a[t[s]] + ";";
  return e;
}
function Oi(a) {
  switch (a) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function cu(a) {
  return a.search(/\.jpe?g($|\?)/i) > 0 || a.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : a.search(/\.webp($|\?)/i) > 0 || a.search(/^data\:image\/webp/) === 0 ? "image/webp" : a.search(/\.ktx2($|\?)/i) > 0 || a.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const Au = new z();
class lu {
  constructor(e = {}, t = {}) {
    var c;
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Mh(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let s = !1, n = -1, i = !1, r = -1;
    if (typeof navigator < "u") {
      const A = navigator.userAgent;
      s = /^((?!chrome|android).)*safari/i.test(A) === !0;
      const l = A.match(/Version\/(\d+)/);
      n = s && l ? parseInt(l[1], 10) : -1, i = A.indexOf("Firefox") > -1, r = i ? A.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    ((c = e.images) == null ? void 0 : c.some((A) => {
      var l;
      return ((l = A.uri || A.mimeType) == null ? void 0 : l.slice(-4)) === "ktx2";
    })) && this.options.ktx2Loader ? this.textureLoader = this.options.ktx2Loader : typeof createImageBitmap > "u" || s && n < 17 || i && r < 98 ? this.textureLoader = new uo(this.options.manager) : this.textureLoader = new fo(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new He(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  dispose() {
    this.extensions = {}, this.plugins = {}, this.cache.removeAll(), this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const s = this, n = this.json, i = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(r) {
      return r._markDefs && r._markDefs();
    }), Promise.all(
      this._invokeAll(function(r) {
        return r.beforeRoot && r.beforeRoot();
      })
    ).then(function() {
      return Promise.all([s.getDependencies("scene"), s.getDependencies("animation"), s.getDependencies("camera")]);
    }).then(function(r) {
      const o = {
        scene: r[0][n.scene || 0],
        scenes: r[0],
        animations: r[1],
        cameras: r[2],
        asset: n.asset,
        parser: s,
        userData: {}
      };
      return Ft(i, o, n), lt(o, n), Promise.all(
        s._invokeAll(function(c) {
          return c.afterRoot && c.afterRoot(o);
        })
      ).then(function() {
        for (const c of o.scenes)
          c.updateMatrixWorld();
        e(o);
      });
    }).catch(t).finally(function() {
      s.dispose();
    });
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], s = this.json.meshes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n].joints;
      for (let o = 0, c = r.length; o < c; o++)
        e[r[o]].isBone = !0;
    }
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (s[r.mesh].isSkinnedMesh = !0)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   *
   * @param {Object} cache
   * @param {Object3D} index
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /**
   * Returns a reference to a shared resource, cloning it if necessary.
   *
   * @param {Object} cache
   * @param {Number} index
   * @param {Object} object
   * @return {Object}
   */
  _getNodeRef(e, t, s) {
    if (e.refs[t] <= 1) return s;
    const n = s.clone(), i = (r, o) => {
      const c = this.associations.get(r);
      c != null && this.associations.set(o, c);
      for (const [A, l] of r.children.entries())
        i(l, o.children[A]);
    };
    return i(s, n), n.name += "_instance_" + e.uses[t]++, n;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let s = 0; s < t.length; s++) {
      const n = e(t[s]);
      if (n) return n;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const s = [];
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      i && s.push(i);
    }
    return s;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const s = e + ":" + t;
    let n = this.cache.get(s);
    if (!n) {
      switch (e) {
        case "scene":
          n = this.loadScene(t);
          break;
        case "node":
          n = this._invokeOne(function(i) {
            return i.loadNode && i.loadNode(t);
          });
          break;
        case "mesh":
          n = this._invokeOne(function(i) {
            return i.loadMesh && i.loadMesh(t);
          });
          break;
        case "accessor":
          n = this.loadAccessor(t);
          break;
        case "bufferView":
          n = this._invokeOne(function(i) {
            return i.loadBufferView && i.loadBufferView(t);
          });
          break;
        case "buffer":
          n = this.loadBuffer(t);
          break;
        case "material":
          n = this._invokeOne(function(i) {
            return i.loadMaterial && i.loadMaterial(t);
          });
          break;
        case "texture":
          n = this._invokeOne(function(i) {
            return i.loadTexture && i.loadTexture(t);
          });
          break;
        case "skin":
          n = this.loadSkin(t);
          break;
        case "animation":
          n = this._invokeOne(function(i) {
            return i.loadAnimation && i.loadAnimation(t);
          });
          break;
        case "camera":
          n = this.loadCamera(t);
          break;
        default:
          if (n = this._invokeOne(function(i) {
            return i != this && i.getDependency && i.getDependency(e, t);
          }), !n)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(s, n);
    }
    return n;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const s = this, n = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(
        n.map(function(i, r) {
          return s.getDependency(e, r);
        })
      ), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], s = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[J.KHR_BINARY_GLTF].body);
    const n = this.options;
    return new Promise(function(i, r) {
      s.load(it.resolveURL(t.uri, n.path), i, void 0, function() {
        r(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(s) {
      const n = t.byteLength || 0, i = t.byteOffset || 0;
      return s.slice(i, i + n);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, s = this.json, n = this.json.accessors[e];
    if (n.bufferView === void 0 && n.sparse === void 0) {
      const r = hi[n.type], o = Yt[n.componentType], c = n.normalized === !0, A = new o(n.count * r);
      return Promise.resolve(new oe(A, r, c));
    }
    const i = [];
    return n.bufferView !== void 0 ? i.push(this.getDependency("bufferView", n.bufferView)) : i.push(null), n.sparse !== void 0 && (i.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(i).then(function(r) {
      const o = r[0], c = hi[n.type], A = Yt[n.componentType], l = A.BYTES_PER_ELEMENT, h = l * c, u = n.byteOffset || 0, d = n.bufferView !== void 0 ? s.bufferViews[n.bufferView].byteStride : void 0, f = n.normalized === !0;
      let g, p;
      if (d && d !== h) {
        const b = Math.floor(u / d), m = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + b + ":" + n.count;
        let E = t.cache.get(m);
        E || (g = new A(o, b * d, n.count * d / l), E = new go(g, d / l), t.cache.add(m, E)), p = new xt(E, c, u % d / l, f);
      } else
        o === null ? g = new A(n.count * c) : g = new A(o, u, n.count * c), p = new oe(g, c, f);
      if (n.sparse !== void 0) {
        const b = hi.SCALAR, m = Yt[n.sparse.indices.componentType], E = n.sparse.indices.byteOffset || 0, C = n.sparse.values.byteOffset || 0, I = new m(r[1], E, n.sparse.count * b), _ = new A(r[2], C, n.sparse.count * c);
        o !== null && (p = new oe(p.array.slice(), p.itemSize, p.normalized)), p.normalized = !1;
        for (let B = 0, y = I.length; B < y; B++) {
          const w = I[B];
          if (p.setX(w, _[B * c]), c >= 2 && p.setY(w, _[B * c + 1]), c >= 3 && p.setZ(w, _[B * c + 2]), c >= 4 && p.setW(w, _[B * c + 3]), c >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        p.normalized = f;
      }
      return p;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, s = this.options, i = t.textures[e].source, r = t.images[i];
    let o = this.textureLoader;
    if (r.uri) {
      const c = s.manager.getHandler(r.uri);
      c !== null && (o = c);
    }
    return this.loadTextureImage(e, i, o);
  }
  loadTextureImage(e, t, s) {
    const n = this, i = this.json, r = i.textures[e], o = i.images[t], c = (o.uri || o.bufferView) + ":" + r.sampler;
    if (this.textureCache[c])
      return this.textureCache[c];
    const A = this.loadImageSource(t, s).then(function(l) {
      l.flipY = !1, l.name = r.name || o.name || "", l.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (l.name = o.uri);
      const u = (i.samplers || {})[r.sampler] || {};
      return l.magFilter = ma[u.magFilter] || ne, l.minFilter = ma[u.minFilter] || is, l.wrapS = ba[u.wrapS] || es, l.wrapT = ba[u.wrapT] || es, l.generateMipmaps = !l.isCompressedTexture && l.minFilter !== $t && l.minFilter !== ne, n.associations.set(l, { textures: e }), l;
    }).catch(function() {
      return null;
    });
    return this.textureCache[c] = A, A;
  }
  loadImageSource(e, t) {
    const s = this, n = this.json, i = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((h) => h.clone());
    const r = n.images[e], o = self.URL || self.webkitURL;
    let c = r.uri || "", A = !1;
    if (r.bufferView !== void 0)
      c = s.getDependency("bufferView", r.bufferView).then(function(h) {
        A = !0;
        const u = new Blob([h], {
          type: r.mimeType
        });
        return c = o.createObjectURL(u), c;
      });
    else if (r.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const l = Promise.resolve(c).then(function(h) {
      return new Promise(function(u, d) {
        let f = u;
        t.isImageBitmapLoader === !0 && (f = function(g) {
          const p = new ln(g);
          p.needsUpdate = !0, u(p);
        }), t.load(it.resolveURL(h, i.path), f, void 0, d);
      });
    }).then(function(h) {
      return A === !0 && o.revokeObjectURL(c), lt(h, r), h.userData.mimeType = r.mimeType || cu(r.uri), h;
    }).catch(function(h) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", c), h;
    });
    return this.sourceCache[e] = l, l;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   *
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @param {string} colorSpace
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, s, n) {
    const i = this;
    return this.getDependency("texture", s.index).then(function(r) {
      if (!r) return null;
      if (s.texCoord !== void 0 && s.texCoord > 0 && (r = r.clone(), r.channel = s.texCoord), i.extensions[J.KHR_TEXTURE_TRANSFORM]) {
        const o = s.extensions !== void 0 ? s.extensions[J.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const c = i.associations.get(r);
          r = i.extensions[J.KHR_TEXTURE_TRANSFORM].extendTexture(r, o), i.associations.set(r, c);
        }
      }
      return n !== void 0 && (r.colorSpace = n), e[t] = r, r;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let s = e.material;
    const n = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, r = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + s.uuid;
      let c = this.cache.get(o);
      c || (c = new Rn(), ut.prototype.copy.call(c, s), c.color.copy(s.color), c.map = s.map, c.sizeAttenuation = !1, this.cache.add(o, c)), s = c;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + s.uuid;
      let c = this.cache.get(o);
      c || (c = new er(), ut.prototype.copy.call(c, s), c.color.copy(s.color), c.map = s.map, this.cache.add(o, c)), s = c;
    }
    if (n || i || r) {
      let o = "ClonedMaterial:" + s.uuid + ":";
      n && (o += "derivative-tangents:"), i && (o += "vertex-colors:"), r && (o += "flat-shading:");
      let c = this.cache.get(o);
      c || (c = s.clone(), i && (c.vertexColors = !0), r && (c.flatShading = !0), n && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(o, c), this.associations.set(c, this.associations.get(s))), s = c;
    }
    e.material = s;
  }
  getMaterialType() {
    return rs;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, s = this.json, n = this.extensions, i = s.materials[e];
    let r;
    const o = {}, c = i.extensions || {}, A = [];
    if (c[J.KHR_MATERIALS_UNLIT]) {
      const h = n[J.KHR_MATERIALS_UNLIT];
      r = h.getMaterialType(), A.push(h.extendParams(o, i, t));
    } else {
      const h = i.pbrMetallicRoughness || {};
      if (o.color = new X(1, 1, 1), o.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const u = h.baseColorFactor;
        o.color.setRGB(u[0], u[1], u[2], he), o.opacity = u[3];
      }
      h.baseColorTexture !== void 0 && A.push(t.assignTexture(o, "map", h.baseColorTexture, Qe)), o.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, o.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (A.push(t.assignTexture(o, "metalnessMap", h.metallicRoughnessTexture)), A.push(t.assignTexture(o, "roughnessMap", h.metallicRoughnessTexture))), r = this._invokeOne(function(u) {
        return u.getMaterialType && u.getMaterialType(e);
      }), A.push(
        Promise.all(
          this._invokeAll(function(u) {
            return u.extendMaterialParams && u.extendMaterialParams(e, o);
          })
        )
      );
    }
    i.doubleSided === !0 && (o.side = ft);
    const l = i.alphaMode || ui.OPAQUE;
    if (l === ui.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, l === ui.MASK && (o.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && r !== ye && (A.push(t.assignTexture(o, "normalMap", i.normalTexture)), o.normalScale = new H(1, 1), i.normalTexture.scale !== void 0)) {
      const h = i.normalTexture.scale;
      o.normalScale.set(h, h);
    }
    if (i.occlusionTexture !== void 0 && r !== ye && (A.push(t.assignTexture(o, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && r !== ye) {
      const h = i.emissiveFactor;
      o.emissive = new X().setRGB(h[0], h[1], h[2], he);
    }
    return i.emissiveTexture !== void 0 && r !== ye && A.push(t.assignTexture(o, "emissiveMap", i.emissiveTexture, Qe)), Promise.all(A).then(function() {
      const h = new r(o);
      return i.name && (h.name = i.name), lt(h, i), t.associations.set(h, { materials: e }), i.extensions && Ft(n, h, i), h;
    });
  }
  /**
   * When Object3D instances are targeted by animation, they need unique names.
   *
   * @param {String} originalName
   * @return {String}
   */
  createUniqueName(e) {
    const t = Co.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, s = this.extensions, n = this.primitiveCache;
    function i(o) {
      return s[J.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(c) {
        return Ea(c, o, t);
      });
    }
    const r = [];
    for (let o = 0, c = e.length; o < c; o++) {
      const A = e[o], l = ou(A), h = n[l];
      if (h)
        r.push(h.promise);
      else {
        let u;
        A.extensions && A.extensions[J.KHR_DRACO_MESH_COMPRESSION] ? u = i(A) : u = Ea(new xe(), A, t), n[l] = {
          primitive: A,
          promise: u
        }, r.push(u);
      }
    }
    return Promise.all(r);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, s = this.json, n = this.extensions, i = s.meshes[e], r = i.primitives, o = [];
    for (let c = 0, A = r.length; c < A; c++) {
      const l = r[c].material === void 0 ? iu(this.cache) : this.getDependency("material", r[c].material);
      o.push(l);
    }
    return o.push(t.loadGeometries(r)), Promise.all(o).then(function(c) {
      const A = c.slice(0, c.length - 1), l = c[c.length - 1], h = [];
      for (let d = 0, f = l.length; d < f; d++) {
        const g = l[d], p = r[d];
        let b;
        const m = A[d];
        if (p.mode === Ne.TRIANGLES || p.mode === Ne.TRIANGLE_STRIP || p.mode === Ne.TRIANGLE_FAN || p.mode === void 0)
          b = i.isSkinnedMesh === !0 ? new Io(g, m) : new De(g, m), b.isSkinnedMesh === !0 && b.normalizeSkinWeights(), p.mode === Ne.TRIANGLE_STRIP ? b.geometry = ga(b.geometry, Tn) : p.mode === Ne.TRIANGLE_FAN && (b.geometry = ga(b.geometry, Zt));
        else if (p.mode === Ne.LINES)
          b = new Mn(g, m);
        else if (p.mode === Ne.LINE_STRIP)
          b = new yo(g, m);
        else if (p.mode === Ne.LINE_LOOP)
          b = new xo(g, m);
        else if (p.mode === Ne.POINTS)
          b = new tr(g, m);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
        Object.keys(b.geometry.morphAttributes).length > 0 && au(b, i), b.name = t.createUniqueName(i.name || "mesh_" + e), lt(b, i), p.extensions && Ft(n, b, p), t.assignFinalMaterial(b), h.push(b);
      }
      for (let d = 0, f = h.length; d < f; d++)
        t.associations.set(h[d], {
          meshes: e,
          primitives: d
        });
      if (h.length === 1)
        return i.extensions && Ft(n, h[0], i), h[0];
      const u = new le();
      i.extensions && Ft(n, u, i), t.associations.set(u, { meshes: e });
      for (let d = 0, f = h.length; d < f; d++)
        u.add(h[d]);
      return u;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const s = this.json.cameras[e], n = s[s.type];
    if (!n) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return s.type === "perspective" ? t = new Sn(ee.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : s.type === "orthographic" && (t = new sr(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), s.name && (t.name = this.createUniqueName(s.name)), lt(t, s), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], s = [];
    for (let n = 0, i = t.joints.length; n < i; n++)
      s.push(this._loadNodeShallow(t.joints[n]));
    return t.inverseBindMatrices !== void 0 ? s.push(this.getDependency("accessor", t.inverseBindMatrices)) : s.push(null), Promise.all(s).then(function(n) {
      const i = n.pop(), r = n, o = [], c = [];
      for (let A = 0, l = r.length; A < l; A++) {
        const h = r[A];
        if (h) {
          o.push(h);
          const u = new z();
          i !== null && u.fromArray(i.array, A * 16), c.push(u);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[A]);
      }
      return new Bo(o, c);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, s = this, n = t.animations[e], i = n.name ? n.name : "animation_" + e, r = [], o = [], c = [], A = [], l = [];
    for (let h = 0, u = n.channels.length; h < u; h++) {
      const d = n.channels[h], f = n.samplers[d.sampler], g = d.target, p = g.node, b = n.parameters !== void 0 ? n.parameters[f.input] : f.input, m = n.parameters !== void 0 ? n.parameters[f.output] : f.output;
      g.node !== void 0 && (r.push(this.getDependency("node", p)), o.push(this.getDependency("accessor", b)), c.push(this.getDependency("accessor", m)), A.push(f), l.push(g));
    }
    return Promise.all([Promise.all(r), Promise.all(o), Promise.all(c), Promise.all(A), Promise.all(l)]).then(function(h) {
      const u = h[0], d = h[1], f = h[2], g = h[3], p = h[4], b = [];
      for (let m = 0, E = u.length; m < E; m++) {
        const C = u[m], I = d[m], _ = f[m], B = g[m], y = p[m];
        if (C === void 0) continue;
        C.updateMatrix && C.updateMatrix();
        const w = s._createAnimationTracks(C, I, _, B, y);
        if (w)
          for (let v = 0; v < w.length; v++)
            b.push(w[v]);
      }
      return new _o(i, void 0, b);
    });
  }
  createNodeMesh(e) {
    const t = this.json, s = this, n = t.nodes[e];
    return n.mesh === void 0 ? null : s.getDependency("mesh", n.mesh).then(function(i) {
      const r = s._getNodeRef(s.meshCache, n.mesh, i);
      return n.weights !== void 0 && r.traverse(function(o) {
        if (o.isMesh)
          for (let c = 0, A = n.weights.length; c < A; c++)
            o.morphTargetInfluences[c] = n.weights[c];
      }), r;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, s = this, n = t.nodes[e], i = s._loadNodeShallow(e), r = [], o = n.children || [];
    for (let A = 0, l = o.length; A < l; A++)
      r.push(s.getDependency("node", o[A]));
    const c = n.skin === void 0 ? Promise.resolve(null) : s.getDependency("skin", n.skin);
    return Promise.all([i, Promise.all(r), c]).then(function(A) {
      const l = A[0], h = A[1], u = A[2];
      u !== null && l.traverse(function(d) {
        d.isSkinnedMesh && d.bind(u, Au);
      });
      for (let d = 0, f = h.length; d < f; d++)
        l.add(h[d]);
      return l;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, s = this.extensions, n = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const i = t.nodes[e], r = i.name ? n.createUniqueName(i.name) : "", o = [], c = n._invokeOne(function(A) {
      return A.createNodeMesh && A.createNodeMesh(e);
    });
    return c && o.push(c), i.camera !== void 0 && o.push(
      n.getDependency("camera", i.camera).then(function(A) {
        return n._getNodeRef(n.cameraCache, i.camera, A);
      })
    ), n._invokeAll(function(A) {
      return A.createNodeAttachment && A.createNodeAttachment(e);
    }).forEach(function(A) {
      o.push(A);
    }), this.nodeCache[e] = Promise.all(o).then(function(A) {
      let l;
      if (i.isBone === !0 ? l = new wo() : A.length > 1 ? l = new le() : A.length === 1 ? l = A[0] : l = new Tt(), l !== A[0])
        for (let h = 0, u = A.length; h < u; h++)
          l.add(A[h]);
      if (i.name && (l.userData.name = i.name, l.name = r), lt(l, i), i.extensions && Ft(s, l, i), i.matrix !== void 0) {
        const h = new z();
        h.fromArray(i.matrix), l.applyMatrix4(h);
      } else
        i.translation !== void 0 && l.position.fromArray(i.translation), i.rotation !== void 0 && l.quaternion.fromArray(i.rotation), i.scale !== void 0 && l.scale.fromArray(i.scale);
      return n.associations.has(l) || n.associations.set(l, {}), n.associations.get(l).nodes = e, l;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, s = this.json.scenes[e], n = this, i = new le();
    s.name && (i.name = n.createUniqueName(s.name)), lt(i, s), s.extensions && Ft(t, i, s);
    const r = s.nodes || [], o = [];
    for (let c = 0, A = r.length; c < A; c++)
      o.push(n.getDependency("node", r[c]));
    return Promise.all(o).then(function(c) {
      for (let l = 0, h = c.length; l < h; l++)
        i.add(c[l]);
      const A = (l) => {
        const h = /* @__PURE__ */ new Map();
        for (const [u, d] of n.associations)
          (u instanceof ut || u instanceof ln) && h.set(u, d);
        return l.traverse((u) => {
          const d = n.associations.get(u);
          d != null && h.set(u, d);
        }), h;
      };
      return n.associations = A(i), i;
    });
  }
  _createAnimationTracks(e, t, s, n, i) {
    const r = [], o = e.name ? e.name : e.uuid, c = [];
    It[i.path] === It.weights ? e.traverse(function(u) {
      u.morphTargetInfluences && c.push(u.name ? u.name : u.uuid);
    }) : c.push(o);
    let A;
    switch (It[i.path]) {
      case It.weights:
        A = un;
        break;
      case It.rotation:
        A = dn;
        break;
      case It.position:
      case It.scale:
        A = hn;
        break;
      default:
        switch (s.itemSize) {
          case 1:
            A = un;
            break;
          case 2:
          case 3:
          default:
            A = hn;
            break;
        }
        break;
    }
    const l = n.interpolation !== void 0 ? nu[n.interpolation] : Dn, h = this._getArrayFromAccessor(s);
    for (let u = 0, d = c.length; u < d; u++) {
      const f = new A(c[u] + "." + It[i.path], t.array, h, l);
      n.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(f), r.push(f);
    }
    return r;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const s = Oi(t.constructor), n = new Float32Array(t.length);
      for (let i = 0, r = t.length; i < r; i++)
        n[i] = t[i] * s;
      t = n;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(s) {
      const n = this instanceof dn ? su : Ec;
      return new n(this.times, this.values, this.getValueSize() / 3, s);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function hu(a, e, t) {
  const s = e.attributes, n = new Le();
  if (s.POSITION !== void 0) {
    const o = t.json.accessors[s.POSITION], c = o.min, A = o.max;
    if (c !== void 0 && A !== void 0) {
      if (n.set(new x(c[0], c[1], c[2]), new x(A[0], A[1], A[2])), o.normalized) {
        const l = Oi(Yt[o.componentType]);
        n.min.multiplyScalar(l), n.max.multiplyScalar(l);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const i = e.targets;
  if (i !== void 0) {
    const o = new x(), c = new x();
    for (let A = 0, l = i.length; A < l; A++) {
      const h = i[A];
      if (h.POSITION !== void 0) {
        const u = t.json.accessors[h.POSITION], d = u.min, f = u.max;
        if (d !== void 0 && f !== void 0) {
          if (c.setX(Math.max(Math.abs(d[0]), Math.abs(f[0]))), c.setY(Math.max(Math.abs(d[1]), Math.abs(f[1]))), c.setZ(Math.max(Math.abs(d[2]), Math.abs(f[2]))), u.normalized) {
            const g = Oi(Yt[u.componentType]);
            c.multiplyScalar(g);
          }
          o.max(c);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    n.expandByVector(o);
  }
  a.boundingBox = n;
  const r = new Fe();
  n.getCenter(r.center), r.radius = n.min.distanceTo(n.max) / 2, a.boundingSphere = r;
}
function Ea(a, e, t) {
  const s = e.attributes, n = [];
  function i(r, o) {
    return t.getDependency("accessor", r).then(function(c) {
      a.setAttribute(o, c);
    });
  }
  for (const r in s) {
    const o = Ni[r] || r.toLowerCase();
    o in a.attributes || n.push(i(s[r], o));
  }
  if (e.indices !== void 0 && !a.index) {
    const r = t.getDependency("accessor", e.indices).then(function(o) {
      a.setIndex(o);
    });
    n.push(r);
  }
  return ys.workingColorSpace !== he && "COLOR_0" in s && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ys.workingColorSpace}" not supported.`), lt(a, e), hu(a, e, t), Promise.all(n).then(function() {
    return e.targets !== void 0 ? ru(a, e.targets, t) : a;
  });
}
function ge(a, e, t) {
  return a && e in a ? a[e] : t;
}
function Cc(a) {
  return a !== "BOOLEAN" && a !== "STRING" && a !== "ENUM";
}
function uu(a) {
  return /^FLOAT/.test(a);
}
function Rs(a) {
  return /^VEC/.test(a);
}
function Ms(a) {
  return /^MAT/.test(a);
}
function Ic(a, e, t, s = null) {
  return Ms(t) || Rs(t) ? s.fromArray(a, e) : a[e];
}
function Hi(a) {
  const { type: e, componentType: t } = a;
  switch (e) {
    case "SCALAR":
      return t === "INT64" ? 0n : 0;
    case "VEC2":
      return new H();
    case "VEC3":
      return new x();
    case "VEC4":
      return new dt();
    case "MAT2":
      return new uA();
    case "MAT3":
      return new Ro();
    case "MAT4":
      return new z();
    case "BOOLEAN":
      return !1;
    case "STRING":
      return "";
    // the final value for enums is a string but are represented as integers
    // during intermediate steps
    case "ENUM":
      return 0;
  }
}
function Ca(a, e) {
  if (e == null)
    return !1;
  switch (a) {
    case "SCALAR":
      return typeof e == "number" || typeof e == "bigint";
    case "VEC2":
      return e.isVector2;
    case "VEC3":
      return e.isVector3;
    case "VEC4":
      return e.isVector4;
    case "MAT2":
      return e.isMatrix2;
    case "MAT3":
      return e.isMatrix3;
    case "MAT4":
      return e.isMatrix4;
    case "BOOLEAN":
      return typeof e == "boolean";
    case "STRING":
      return typeof e == "string";
    case "ENUM":
      return typeof e == "number" || typeof e == "bigint";
  }
  throw new Error("ClassProperty: invalid type.");
}
function _s(a, e = null) {
  switch (a) {
    case "INT8":
      return Int8Array;
    case "INT16":
      return Int16Array;
    case "INT32":
      return Int32Array;
    case "INT64":
      return BigInt64Array;
    case "UINT8":
      return Uint8Array;
    case "UINT16":
      return Uint16Array;
    case "UINT32":
      return Uint32Array;
    case "UINT64":
      return BigUint64Array;
    case "FLOAT32":
      return Float32Array;
    case "FLOAT64":
      return Float64Array;
  }
  switch (e) {
    case "BOOLEAN":
      return Uint8Array;
    case "STRING":
      return Uint8Array;
  }
  throw new Error("ClassProperty: invalid type.");
}
function du(a, e = null) {
  if (a.array) {
    e = e && Array.isArray(e) ? e : [], e.length = a.count;
    for (let s = 0, n = e.length; s < n; s++)
      e[s] = pn(a, e[s]);
  } else
    e = pn(a, e);
  return e;
}
function pn(a, e = null) {
  const t = a.default, s = a.type;
  if (e = e || Hi(a), t === null) {
    switch (s) {
      case "SCALAR":
        return 0;
      case "VEC2":
        return e.set(0, 0);
      case "VEC3":
        return e.set(0, 0, 0);
      case "VEC4":
        return e.set(0, 0, 0, 0);
      case "MAT2":
        return e.identity();
      case "MAT3":
        return e.identity();
      case "MAT4":
        return e.identity();
      case "BOOLEAN":
        return !1;
      case "STRING":
        return "";
      case "ENUM":
        return "";
    }
    throw new Error("ClassProperty: invalid type.");
  } else if (Ms(s))
    e.fromArray(t);
  else if (Rs(s))
    e.fromArray(t);
  else
    return t;
}
function fu(a, e) {
  if (a.noData === null)
    return e;
  const t = a.noData, s = a.type;
  if (Array.isArray(e))
    for (let r = 0, o = e.length; r < o; r++)
      e[r] = n(e[r]);
  else
    e = n(e);
  return e;
  function n(r) {
    return i(r) && (r = pn(a, r)), r;
  }
  function i(r) {
    if (Ms(s)) {
      const o = r.elements;
      for (let c = 0, A = t.length; c < A; c++)
        if (t[c] !== o[c])
          return !1;
      return !0;
    } else if (Rs(s)) {
      for (let o = 0, c = t.length; o < c; o++)
        if (t[o] !== r.getComponent(o))
          return !1;
      return !0;
    } else
      return t === r;
  }
}
function gu(a, e) {
  switch (a) {
    case "INT8":
      return Math.max(e / 127, -1);
    case "INT16":
      return Math.max(e, 32767, -1);
    case "INT32":
      return Math.max(e / 2147483647, -1);
    case "INT64":
      return Math.max(Number(e) / 9223372036854776e3, -1);
    // eslint-disable-line no-loss-of-precision
    case "UINT8":
      return e / 255;
    case "UINT16":
      return e / 65535;
    case "UINT32":
      return e / 4294967295;
    case "UINT64":
      return Number(e) / 18446744073709552e3;
  }
}
function pu(a, e) {
  const { type: t, componentType: s, scale: n, offset: i, normalized: r } = a;
  if (Array.isArray(e))
    for (let h = 0, u = e.length; h < u; h++)
      e[h] = o(e[h]);
  else
    e = o(e);
  return e;
  function o(h) {
    return Ms(t) ? h = A(h) : Rs(t) ? h = c(h) : h = l(h), h;
  }
  function c(h) {
    return h.x = l(h.x), h.y = l(h.y), "z" in h && (h.z = l(h.z)), "w" in h && (h.w = l(h.w)), h;
  }
  function A(h) {
    const u = h.elements;
    for (let d = 0, f = u.length; d < f; d++)
      u[d] = l(u[d]);
    return h;
  }
  function l(h) {
    return r && (h = gu(s, h)), (r || uu(s)) && (h = h * n + i), h;
  }
}
function hr(a, e, t = null) {
  if (a.array) {
    Array.isArray(e) || (e = new Array(a.count || 0)), e.length = t !== null ? t : a.count;
    for (let s = 0, n = e.length; s < n; s++)
      Ca(a.type, e[s]) || (e[s] = Hi(a));
  } else
    Ca(a.type, e) || (e = Hi(a));
  return e;
}
function mn(a, e) {
  for (const t in e)
    t in a || delete e[t];
  for (const t in a) {
    const s = a[t];
    e[t] = hr(s, e[t]);
  }
}
function mu(a) {
  switch (a) {
    case "ENUM":
      return 1;
    case "SCALAR":
      return 1;
    case "VEC2":
      return 2;
    case "VEC3":
      return 3;
    case "VEC4":
      return 4;
    case "MAT2":
      return 4;
    case "MAT3":
      return 9;
    case "MAT4":
      return 16;
    // unused
    case "BOOLEAN":
      return -1;
    case "STRING":
      return -1;
    default:
      return -1;
  }
}
class Pn {
  constructor(e, t, s = null) {
    this.name = t.name || null, this.description = t.description || null, this.type = t.type, this.componentType = t.componentType || null, this.enumType = t.enumType || null, this.array = t.array || !1, this.count = t.count || 0, this.normalized = t.normalized || !1, this.offset = t.offset || 0, this.scale = ge(t, "scale", 1), this.max = ge(t, "max", 1 / 0), this.min = ge(t, "min", -1 / 0), this.required = t.required || !1, this.noData = ge(t, "noData", null), this.default = ge(t, "default", null), this.semantic = ge(t, "semantic", null), this.enumSet = null, this.accessorProperty = s, s && (this.offset = ge(s, "offset", this.offset), this.scale = ge(s, "scale", this.scale), this.max = ge(s, "max", this.max), this.min = ge(s, "min", this.min)), t.type === "ENUM" && (this.enumSet = e[this.enumType], this.componentType === null && (this.componentType = ge(this.enumSet, "valueType", "UINT16")));
  }
  // shape the given target to match the data type of the property
  // enums are set to their integer value
  shapeToProperty(e, t = null) {
    return hr(this, e, t);
  }
  // resolve the given object to the default value for the property for a single element
  // enums are set to a default string
  resolveDefaultElement(e) {
    return pn(this, e);
  }
  // resolve the target to the default value for the property for every element if it's an array
  // enums are set to a default string
  resolveDefault(e) {
    return du(this, e);
  }
  // converts any instances of no data to the default value
  resolveNoData(e) {
    return fu(this, e);
  }
  // converts enums integers in the given target to strings
  resolveEnumsToStrings(e) {
    const t = this.enumSet;
    if (this.type === "ENUM")
      if (Array.isArray(e))
        for (let n = 0, i = e.length; n < i; n++)
          e[n] = s(e[n]);
      else
        e = s(e);
    return e;
    function s(n) {
      const i = t.values.find((r) => r.value === n);
      return i === null ? "" : i.name;
    }
  }
  // apply scales
  adjustValueScaleOffset(e) {
    return Cc(this.type) ? pu(this, e) : e;
  }
}
class ur {
  constructor(e, t = {}, s = {}, n = null) {
    this.definition = e, this.class = t[e.class], this.className = e.class, this.enums = s, this.data = n, this.name = "name" in e ? e.name : null, this.properties = null;
  }
  getPropertyNames() {
    return Object.keys(this.class.properties);
  }
  includesData(e) {
    return !!this.definition.properties[e];
  }
  dispose() {
  }
  _initProperties(e = Pn) {
    const t = {};
    for (const s in this.class.properties)
      t[s] = new e(this.enums, this.class.properties[s], this.definition.properties[s]);
    this.properties = t;
  }
}
class bu extends Pn {
  constructor(e, t, s = null) {
    super(e, t, s), this.attribute = s.attribute;
  }
}
class Eu extends ur {
  constructor(...e) {
    super(...e), this.isPropertyAttributeAccessor = !0, this._initProperties(bu);
  }
  getData(e, t, s = {}) {
    const n = this.properties;
    mn(n, s);
    for (const i in n)
      s[i] = this.getPropertyValue(i, e, t, s[i]);
    return s;
  }
  getPropertyValue(e, t, s, n = null) {
    if (t >= this.count)
      throw new Error("PropertyAttributeAccessor: Requested index is outside the range of the buffer.");
    const i = this.properties[e], r = i.type;
    if (i) {
      if (!this.definition.properties[e])
        return i.resolveDefault(n);
    } else throw new Error("PropertyAttributeAccessor: Requested class property does not exist.");
    n = i.shapeToProperty(n);
    const o = s.getAttribute(i.attribute.toLowerCase());
    if (Ms(r)) {
      const c = n.elements;
      for (let A = 0, l = c.length; A < l; A < l)
        c[A] = o.getComponent(t, A);
    } else if (Rs(r))
      n.fromBufferAttribute(o, t);
    else if (r === "SCALAR" || r === "ENUM")
      n = o.getX(t);
    else
      throw new Error("StructuredMetadata.PropertyAttributeAccessor: BOOLEAN and STRING types are not supported by property attributes.");
    return n = i.adjustValueScaleOffset(n), n = i.resolveEnumsToStrings(n), n = i.resolveNoData(n), n;
  }
}
class Cu extends Pn {
  constructor(e, t, s = null) {
    super(e, t, s), this.values = s.values, this.valueLength = mu(this.type), this.arrayOffsets = ge(s, "arrayOffsets", null), this.stringOffsets = ge(s, "stringOffsets", null), this.arrayOffsetType = ge(s, "arrayOffsetType", "UINT32"), this.stringOffsetType = ge(s, "stringOffsetType", "UINT32");
  }
  // returns the necessary array length based on the array offsets if present
  getArrayLengthFromId(e, t) {
    let s = this.count;
    if (this.arrayOffsets !== null) {
      const { arrayOffsets: n, arrayOffsetType: i } = this, r = _s(i), o = new r(e[n]);
      s = o[t + 1] - o[t];
    }
    return s;
  }
  // returns the index offset into the data buffer for the given id based on the
  // the array offsets if present
  getIndexOffsetFromId(e, t) {
    let s = t;
    if (this.arrayOffsets) {
      const { arrayOffsets: n, arrayOffsetType: i } = this, r = _s(i);
      s = new r(e[n])[s];
    } else this.array && (s *= this.count);
    return s;
  }
}
class Iu extends ur {
  constructor(...e) {
    super(...e), this.isPropertyTableAccessor = !0, this.count = this.definition.count, this._initProperties(Cu);
  }
  getData(e, t = {}) {
    const s = this.properties;
    mn(s, t);
    for (const n in s)
      t[n] = this.getPropertyValue(n, e, t[n]);
    return t;
  }
  // reads an individual element
  _readValueAtIndex(e, t, s, n = null) {
    const i = this.properties[e], { componentType: r, type: o } = i, c = this.data, A = c[i.values], l = _s(r, o), h = new l(A), u = i.getIndexOffsetFromId(c, t);
    if (Cc(o) || o === "ENUM")
      return Ic(h, (u + s) * i.valueLength, o, n);
    if (o === "STRING") {
      let d = u + s, f = 0;
      if (i.stringOffsets !== null) {
        const { stringOffsets: p, stringOffsetType: b } = i, m = _s(b), E = new m(c[p]);
        f = E[d + 1] - E[d], d = E[d];
      }
      const g = new Uint8Array(h.buffer, d, f);
      n = new TextDecoder().decode(g);
    } else if (o === "BOOLEAN") {
      const d = u + s, f = Math.floor(d / 8), g = d % 8;
      n = (h[f] >> g & 1) === 1;
    }
    return n;
  }
  // Reads the data for the given table index
  getPropertyValue(e, t, s = null) {
    if (t >= this.count)
      throw new Error("PropertyTableAccessor: Requested index is outside the range of the table.");
    const n = this.properties[e];
    if (n) {
      if (!this.definition.properties[e])
        return n.resolveDefault(s);
    } else throw new Error("PropertyTableAccessor: Requested property does not exist.");
    const i = n.array, r = this.data, o = n.getArrayLengthFromId(r, t);
    if (s = n.shapeToProperty(s, o), i)
      for (let c = 0, A = s.length; c < A; c++)
        s[c] = this._readValueAtIndex(e, t, c, s[c]);
    else
      s = this._readValueAtIndex(e, t, 0, s);
    return s = n.adjustValueScaleOffset(s), s = n.resolveEnumsToStrings(s), s = n.resolveNoData(s), s;
  }
}
const us = /* @__PURE__ */ new pA();
class Ia {
  constructor() {
    this._renderer = new co(), this._target = new Ti(1, 1), this._texTarget = new Ti(), this._quad = new xh(
      new Me({
        blending: gA,
        blendDst: fA,
        blendSrc: dA,
        uniforms: {
          map: { value: null },
          pixel: { value: new H() }
        },
        vertexShader: (
          /* glsl */
          `
				void main() {

					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`
        ),
        fragmentShader: (
          /* glsl */
          `
				uniform sampler2D map;
				uniform ivec2 pixel;

				void main() {

					gl_FragColor = texelFetch( map, pixel, 0 );

				}
			`
        )
      })
    );
  }
  // increases the width of the target render target to support more data
  increaseSizeTo(e) {
    this._target.setSize(Math.max(this._target.width, e), 1);
  }
  // read data from the rendered texture asynchronously
  readDataAsync(e) {
    const { _renderer: t, _target: s } = this;
    return t.readRenderTargetPixelsAsync(s, 0, 0, e.length / 4, 1, e);
  }
  // read data from the rendered texture
  readData(e) {
    const { _renderer: t, _target: s } = this;
    t.readRenderTargetPixels(s, 0, 0, e.length / 4, 1, e);
  }
  // render a single pixel from the source at the destination point on the render target
  // takes the texture, pixel to read from, and pixel to render in to
  renderPixelToTarget(e, t, s) {
    const { _renderer: n, _target: i } = this;
    us.min.copy(t), us.max.copy(t), us.max.x += 1, us.max.y += 1, n.initRenderTarget(i), n.copyTextureToTexture(e, i.texture, us, s, 0);
  }
}
const wt = /* @__PURE__ */ new class {
  constructor() {
    let a = null;
    Object.getOwnPropertyNames(Ia.prototype).forEach((e) => {
      e !== "constructor" && (this[e] = (...t) => (a = a || new Ia(), a[e](...t)));
    });
  }
}(), ya = /* @__PURE__ */ new H(), xa = /* @__PURE__ */ new H(), Ba = /* @__PURE__ */ new H();
function yu(a, e) {
  return e === 0 ? a.getAttribute("uv") : a.getAttribute(`uv${e}`);
}
function yc(a, e, t = new Array(3)) {
  let s = 3 * e, n = 3 * e + 1, i = 3 * e + 2;
  return a.index && (s = a.index.getX(s), n = a.index.getX(n), i = a.index.getX(i)), t[0] = s, t[1] = n, t[2] = i, t;
}
function xc(a, e, t, s, n) {
  const [i, r, o] = s, c = yu(a, e);
  ya.fromBufferAttribute(c, i), xa.fromBufferAttribute(c, r), Ba.fromBufferAttribute(c, o), n.set(0, 0, 0).addScaledVector(ya, t.x).addScaledVector(xa, t.y).addScaledVector(Ba, t.z);
}
function Bc(a, e, t, s) {
  const n = a.x - Math.floor(a.x), i = a.y - Math.floor(a.y), r = Math.floor(n * e % e), o = Math.floor(i * t % t);
  return s.set(r, o), s;
}
const _a = /* @__PURE__ */ new H(), wa = /* @__PURE__ */ new H(), va = /* @__PURE__ */ new H();
class xu extends Pn {
  constructor(e, t, s = null) {
    super(e, t, s), this.channels = ge(s, "channels", [0]), this.index = ge(s, "index", null), this.texCoord = ge(s, "texCoord", null), this.valueLength = parseInt(this.type.replace(/[^0-9]/g, "")) || 1;
  }
  // takes the buffer to read from and the value index to read
  readDataFromBuffer(e, t, s = null) {
    const n = this.type;
    if (n === "BOOLEAN" || n === "STRING")
      throw new Error("PropertyTextureAccessor: BOOLEAN and STRING types not supported.");
    return Ic(e, t * this.valueLength, n, s);
  }
}
class Bu extends ur {
  constructor(...e) {
    super(...e), this.isPropertyTextureAccessor = !0, this._asyncRead = !1, this._initProperties(xu);
  }
  // Reads the full set of property data
  getData(e, t, s, n = {}) {
    const i = this.properties;
    mn(i, n);
    const r = Object.keys(i), o = r.map((c) => n[c]);
    return this.getPropertyValuesAtTexel(r, e, t, s, o), r.forEach((c, A) => n[c] = o[A]), n;
  }
  // Reads the full set of property data asynchronously
  async getDataAsync(e, t, s, n = {}) {
    const i = this.properties;
    mn(i, n);
    const r = Object.keys(i), o = r.map((c) => n[c]);
    return await this.getPropertyValuesAtTexelAsync(r, e, t, s, o), r.forEach((c, A) => n[c] = o[A]), n;
  }
  // Reads values asynchronously
  getPropertyValuesAtTexelAsync(...e) {
    this._asyncRead = !0;
    const t = this.getPropertyValuesAtTexel(...e);
    return this._asyncRead = !1, t;
  }
  // Reads values from the textures synchronously
  getPropertyValuesAtTexel(e, t, s, n, i = []) {
    for (; i.length < e.length; ) i.push(null);
    i.length = e.length, wt.increaseSizeTo(i.length);
    const r = this.data, o = this.definition.properties, c = this.properties, A = yc(n, t);
    for (let u = 0, d = e.length; u < d; u++) {
      const f = e[u];
      if (!o[f])
        continue;
      const g = c[f], p = r[g.index];
      xc(n, g.texCoord, s, A, _a), Bc(_a, p.image.width, p.image.height, wa), va.set(u, 0), wt.renderPixelToTarget(p, wa, va);
    }
    const l = new Uint8Array(e.length * 4);
    if (this._asyncRead)
      return wt.readDataAsync(l).then(() => (h.call(this), i));
    return wt.readData(l), h.call(this), i;
    function h() {
      for (let u = 0, d = e.length; u < d; u++) {
        const f = e[u], g = c[f], p = g.type;
        if (i[u] = hr(g, i[u]), g) {
          if (!o[f]) {
            i[u] = g.resolveDefault(i);
            continue;
          }
        } else throw new Error("PropertyTextureAccessor: Requested property does not exist.");
        const b = g.valueLength * (g.count || 1), m = g.channels.map((_) => l[4 * u + _]), E = g.componentType, C = _s(E, p), I = new C(b);
        if (new Uint8Array(I.buffer).set(m), g.array) {
          const _ = i[u];
          for (let B = 0, y = _.length; B < y; B++)
            _[B] = g.readDataFromBuffer(I, B, _[B]);
        } else
          i[u] = g.readDataFromBuffer(I, 0, i[u]);
        i[u] = g.adjustValueScaleOffset(i[u]), i[u] = g.resolveEnumsToStrings(i[u]), i[u] = g.resolveNoData(i[u]);
      }
    }
  }
  // dispose all of the texture data used
  dispose() {
    this.data.forEach((e) => {
      e && (e.dispose(), e.image instanceof ImageBitmap && e.image.close());
    });
  }
}
class Sa {
  constructor(e, t, s, n = null, i = null) {
    const { schema: r, propertyTables: o = [], propertyTextures: c = [], propertyAttributes: A = [] } = e, { enums: l, classes: h } = r, u = o.map((g) => new Iu(g, h, l, s));
    let d = [], f = [];
    n && (n.propertyTextures && (d = n.propertyTextures.map((g) => new Bu(c[g], h, l, t))), n.propertyAttributes && (f = n.propertyAttributes.map((g) => new Eu(A[g], h, l)))), this.schema = r, this.tableAccessors = u, this.textureAccessors = d, this.attributeAccessors = f, this.object = i, this.textures = t, this.nodeMetadata = n;
  }
  // Property Tables
  getPropertyTableData(e, t, s = null) {
    if (!Array.isArray(e) || !Array.isArray(t))
      s = s || {}, s = this.tableAccessors[e].getData(t, s);
    else {
      s = s || [];
      const n = Math.min(e.length, t.length);
      s.length = n;
      for (let i = 0; i < n; i++) {
        const r = this.tableAccessors[e[i]];
        s[i] = r.getData(t[i], s[i]);
      }
    }
    return s;
  }
  getPropertyTableInfo(e = null) {
    if (e === null && (e = this.tableAccessors.map((t, s) => s)), Array.isArray(e))
      return e.map((t) => {
        const s = this.tableAccessors[t];
        return {
          name: s.name,
          className: s.definition.class
        };
      });
    {
      const t = this.tableAccessors[e];
      return {
        name: t.name,
        className: t.definition.class
      };
    }
  }
  // Property Textures
  getPropertyTextureData(e, t, s = []) {
    const n = this.textureAccessors;
    s.length = n.length;
    for (let i = 0; i < n.length; i++) {
      const r = n[i];
      s[i] = r.getData(e, t, this.object.geometry, s[i]);
    }
    return s;
  }
  async getPropertyTextureDataAsync(e, t, s = []) {
    const n = this.textureAccessors;
    s.length = n.length;
    const i = [];
    for (let r = 0; r < n.length; r++) {
      const c = n[r].getDataAsync(e, t, this.object.geometry, s[r]).then((A) => {
        s[r] = A;
      });
      i.push(c);
    }
    return await Promise.all(i), s;
  }
  getPropertyTextureInfo() {
    return this.textureAccessors;
  }
  // Property Attributes
  getPropertyAttributeData(e, t = []) {
    const s = this.attributeAccessors;
    t.length = s.length;
    for (let n = 0; n < s.length; n++) {
      const i = s[n];
      t[n] = i.getData(e, this.object.geometry, t[n]);
    }
    return t;
  }
  getPropertyAttributeInfo() {
    return this.attributeAccessors.map((e) => ({
      name: e.name,
      className: e.definition.class
    }));
  }
  dispose() {
    this.textureAccessors.forEach((e) => e.dispose()), this.tableAccessors.forEach((e) => e.dispose()), this.attributeAccessors.forEach((e) => e.dispose());
  }
}
const ds = "EXT_structural_metadata";
function _u(a, e = []) {
  var n;
  const t = ((n = a.json.textures) == null ? void 0 : n.length) || 0, s = new Array(t).fill(null);
  return e.forEach(({ properties: i }) => {
    for (const r in i) {
      const { index: o } = i[r];
      s[o] === null && (s[o] = a.loadTexture(o));
    }
  }), Promise.all(s);
}
function wu(a, e = []) {
  var n;
  const t = ((n = a.json.bufferViews) == null ? void 0 : n.length) || 0, s = new Array(t).fill(null);
  return e.forEach(({ properties: i }) => {
    for (const r in i) {
      const { values: o, arrayOffsets: c, stringOffsets: A } = i[r];
      s[o] === null && (s[o] = a.loadBufferView(o)), s[c] === null && (s[c] = a.loadBufferView(c)), s[A] === null && (s[A] = a.loadBufferView(A));
    }
  }), Promise.all(s);
}
class vu {
  constructor(e) {
    this.parser = e, this.name = ds;
  }
  async afterRoot({ scene: e, parser: t }) {
    const s = t.json.extensionsUsed;
    if (!s || !s.includes(ds))
      return;
    let n = null, i = t.json.extensions[ds];
    if (i.schemaUri) {
      const { manager: A, path: l, requestHeader: h, crossOrigin: u } = t.options, d = new URL(i.schemaUri, l).toString(), f = new He(A);
      f.setCrossOrigin(u), f.setResponseType("json"), f.setRequestHeader(h), n = f.loadAsync(d).then((g) => {
        i = { ...i, schema: g };
      });
    }
    const [r, o] = await Promise.all([_u(t, i.propertyTextures), wu(t, i.propertyTables), n]), c = new Sa(i, r, o);
    e.userData.structuralMetadata = c, e.traverse((A) => {
      if (t.associations.has(A)) {
        const { meshes: l, primitives: h } = t.associations.get(A), u = t.json.meshes[l].primitives[h];
        if (u && u.extensions && u.extensions[ds]) {
          const d = u.extensions[ds];
          A.userData.structuralMetadata = new Sa(i, r, o, d, A);
        } else
          A.userData.structuralMetadata = c;
      }
    });
  }
}
const Ta = /* @__PURE__ */ new H(), Qa = /* @__PURE__ */ new H(), Ra = /* @__PURE__ */ new H();
function Su(a) {
  return a.x > a.y && a.x > a.z ? 0 : a.y > a.z ? 1 : 2;
}
class Tu {
  constructor(e, t, s) {
    this.geometry = e, this.textures = t, this.data = s, this._asyncRead = !1, this.featureIds = s.featureIds.map((n) => {
      const { texture: i, ...r } = n, o = {
        label: null,
        propertyTable: null,
        nullFeatureId: null,
        ...r
      };
      return i && (o.texture = {
        texCoord: 0,
        channels: [0],
        ...i
      }), o;
    });
  }
  // returns list of textures
  getTextures() {
    return this.textures;
  }
  // returns a set of info for each feature
  getFeatureInfo() {
    return this.featureIds;
  }
  // performs texture data read back asynchronously
  getFeaturesAsync(...e) {
    this._asyncRead = !0;
    const t = this.getFeatures(...e);
    return this._asyncRead = !1, t;
  }
  // returns all features for the given point on the given triangle
  getFeatures(e, t) {
    const { geometry: s, textures: n, featureIds: i } = this, r = new Array(i.length).fill(null), o = i.length;
    wt.increaseSizeTo(o);
    const c = yc(s, e), A = c[Su(t)];
    for (let u = 0, d = i.length; u < d; u++) {
      const f = i[u], g = "nullFeatureId" in f ? f.nullFeatureId : null;
      if ("texture" in f) {
        const p = n[f.texture.index];
        xc(s, f.texture.texCoord, t, c, Ta), Bc(Ta, p.image.width, p.image.height, Qa), Ra.set(u, 0), wt.renderPixelToTarget(n[f.texture.index], Qa, Ra);
      } else if ("attribute" in f) {
        const b = s.getAttribute(`_feature_id_${f.attribute}`).getX(A);
        b !== g && (r[u] = b);
      } else {
        const p = A;
        p !== g && (r[u] = p);
      }
    }
    const l = new Uint8Array(o * 4);
    if (this._asyncRead)
      return wt.readDataAsync(l).then(() => (h(), r));
    return wt.readData(l), h(), r;
    function h() {
      const u = new Uint32Array(1);
      for (let d = 0, f = i.length; d < f; d++) {
        const g = i[d], p = "nullFeatureId" in g ? g.nullFeatureId : null;
        if ("texture" in g) {
          const { channels: b } = g.texture, m = b.map((C) => l[4 * d + C]);
          new Uint8Array(u.buffer).set(m);
          const E = u[0];
          E !== p && (r[d] = E);
        }
      }
    }
  }
  // dispose all of the texture data used
  dispose() {
    this.textures.forEach((e) => {
      e && (e.dispose(), e.image instanceof ImageBitmap && e.image.close());
    });
  }
}
const bn = "EXT_mesh_features";
function Ma(a, e, t) {
  a.traverse((s) => {
    if (e.associations.has(s)) {
      const { meshes: n, primitives: i } = e.associations.get(s), r = e.json.meshes[n].primitives[i];
      r && r.extensions && r.extensions[bn] && t(s, r.extensions[bn]);
    }
  });
}
class Qu {
  constructor(e) {
    this.parser = e, this.name = bn;
  }
  async afterRoot({ scene: e, parser: t }) {
    var o;
    const s = t.json.extensionsUsed;
    if (!s || !s.includes(bn))
      return;
    const n = ((o = t.json.textures) == null ? void 0 : o.length) || 0, i = new Array(n).fill(null);
    Ma(e, t, (c, { featureIds: A }) => {
      A.forEach((l) => {
        if (l.texture && i[l.texture.index] === null) {
          const h = l.texture.index;
          i[h] = t.loadTexture(h);
        }
      });
    });
    const r = await Promise.all(i);
    Ma(e, t, (c, A) => {
      c.userData.meshFeatures = new Tu(c.geometry, r, A);
    });
  }
}
class Ru {
  constructor() {
    this.name = "CESIUM_RTC";
  }
  afterRoot(e) {
    if (e.parser.json.extensions && e.parser.json.extensions.CESIUM_RTC) {
      const { center: t } = e.parser.json.extensions.CESIUM_RTC;
      t && (e.scene.position.x += t[0], e.scene.position.y += t[1], e.scene.position.z += t[2]);
    }
  }
}
class Mu {
  constructor(e) {
    e = {
      metadata: !0,
      rtc: !0,
      plugins: [],
      dracoLoader: null,
      ktxLoader: null,
      meshoptDecoder: null,
      autoDispose: !0,
      ...e
    }, this.tiles = null, this.metadata = e.metadata, this.rtc = e.rtc, this.plugins = e.plugins, this.autoDispose = e.autoDispose, this.dracoLoader = e.dracoLoader, this.ktxLoader = e.ktxLoader, this.meshoptDecoder = e.meshoptDecoder, this._gltfRegex = /\.(gltf|glb)$/g, this._dracoRegex = /\.drc$/g, this._loader = null;
  }
  init(e) {
    const t = new Rh(e.manager);
    this.dracoLoader && (t.setDRACOLoader(this.dracoLoader), e.manager.addHandler(this._dracoRegex, this.dracoLoader)), this.ktxLoader && t.setKTX2Loader(this.ktxLoader), this.meshoptDecoder && t.setMeshoptDecoder(this.meshoptDecoder), this.rtc && t.register(() => new Ru()), this.metadata && (t.register(() => new vu()), t.register(() => new Qu())), this.plugins.forEach((s) => t.register(s)), e.manager.addHandler(this._gltfRegex, t), this.tiles = e, this._loader = t;
  }
  dispose() {
    this.tiles.manager.removeHandler(this._gltfRegex), this.tiles.manager.removeHandler(this._dracoRegex), this.autoDispose && (this.ktxLoader.dispose(), this.dracoLoader.dispose());
  }
  disposeTile(e) {
    const t = e.cached;
    t.scene && t.scene.traverse((n) => {
      n.dispose && n.dispose();
    });
  }
}
class Du {
  constructor(e = {}) {
  }
  init(e) {
    e.lruCache.maxBytesSize = 1 / 0, e.lruCache.minSize = 0, e.lruCache.maxSize = 1 / 0;
  }
}
class Lu {
  constructor(e = {}) {
    this.rootUrl = "", this.urlParams = "";
  }
  init(e) {
    const { rootUrl: t } = e;
    t && t.length > 0 && this.setRootUrl(t);
  }
  setRootUrl(e) {
    if (e && e.length > 0) {
      this.rootUrl = e;
      const t = new URL(e);
      this.urlParams = t.search;
    }
  }
  preprocessURL(e) {
    if ((!this.rootUrl || this.rootUrl.length == 0) && this.setRootUrl(e), e != this.rootUrl && this.urlParams && this.urlParams.length > 0) {
      const t = new URL(e);
      return t.search = this.urlParams, t.toString();
    }
    return e;
  }
}
const Ce = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff"
];
function _c() {
  const a = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, s = Math.random() * 4294967295 | 0;
  return (Ce[a & 255] + Ce[a >> 8 & 255] + Ce[a >> 16 & 255] + Ce[a >> 24 & 255] + "-" + Ce[e & 255] + Ce[e >> 8 & 255] + "-" + Ce[e >> 16 & 15 | 64] + Ce[e >> 24 & 255] + "-" + Ce[t & 63 | 128] + Ce[t >> 8 & 255] + "-" + Ce[t >> 16 & 255] + Ce[t >> 24 & 255] + Ce[s & 255] + Ce[s >> 8 & 255] + Ce[s >> 16 & 255] + Ce[s >> 24 & 255]).toLowerCase();
}
let Fu = class {
  // 用于生成唯一的 actionId
  /**
   * Constructor
   * @param workers Array of workers to use for actions
   */
  constructor(e) {
    this._pendingActions = /* @__PURE__ */ new Map(), this._actionIdCounter = 0, this._workerInfos = e.map((t) => ({
      workerPromise: Promise.resolve(t),
      idle: !0,
      actionId: "",
      cancelAction: !1
      // 初始化 cancelAction 标志
    }));
  }
  /**
   * Terminates all workers and clears any pending actions.
   */
  dispose() {
    for (const e of this._workerInfos)
      e.workerPromise.then((t) => {
        t.terminate();
      });
    this._workerInfos.length = 0, this._pendingActions.clear();
  }
  /**
   * Pushes an action to the worker pool. If all the workers are active, the action will be
   * pended until a worker has completed its action.
   * @param action The action to perform. Call onComplete when the action is complete.
   * @returns A unique actionId that can be used to cancel the action.
   */
  push(e) {
    const t = this._generateActionId();
    return this._executeOnIdleWorker(t, e) || this._pendingActions.set(t, e), t;
  }
  /**
   * Cancels an action by its actionId.
   * @param actionId The unique actionId returned by the push method.
   */
  cancel(e) {
    this._pendingActions.has(e) && this._pendingActions.delete(e);
    for (const t of this._workerInfos)
      t.cancelAction && (t.cancelAction = !0, t.workerPromise.then((s) => {
        s.terminate();
      }));
  }
  /**
   * Generates a unique actionId.
   * @returns A unique actionId.
   */
  _generateActionId() {
    return _c();
  }
  /**
   * Executes an action on an idle worker.
   * @param actionId The unique actionId for the action.
   * @param action The action to perform.
   * @returns True if an idle worker was found and the action was executed, false otherwise.
   */
  _executeOnIdleWorker(e, t) {
    for (const s of this._workerInfos)
      if (s.idle)
        return this._execute(s, e, t), !0;
    return !1;
  }
  /**
   * Executes an action on a worker.
   * @param workerInfo The worker info.
   * @param actionId The unique actionId for the action.
   * @param action The action to perform.
   */
  _execute(e, t, s) {
    e.idle = !1, e.actionId = t, e.cancelAction = !1, e.workerPromise.then((n) => {
      s(n, () => {
        if (e.cancelAction)
          n.terminate();
        else {
          this._pendingActions.delete(t);
          const i = this._pendingActions.entries().next().value;
          if (i) {
            const [r, o] = i;
            this._execute(e, r, o);
          } else
            e.actionId = "", e.idle = !0;
        }
      });
    });
  }
};
const xn = class xn extends Fu {
  constructor(e, t, s = xn.DefaultOptions) {
    super([]), this._maxWorkers = e, this._createWorkerAsync = t, this._options = s;
  }
  push(e) {
    const t = this._generateActionId();
    if (!this._executeOnIdleWorker(t, e))
      if (this._workerInfos.length < this._maxWorkers) {
        const s = {
          workerPromise: this._createWorkerAsync(),
          idle: !1,
          actionId: t,
          cancelAction: !1
          // 初始化取消标志
        };
        this._workerInfos.push(s), this._execute(s, t, e);
      } else
        this._pendingActions.set(t, e);
    return t;
  }
  _execute(e, t, s) {
    e.timeoutId && (clearTimeout(e.timeoutId), delete e.timeoutId), super._execute(e, t, (n, i) => {
      s(n, () => {
        i(), e.idle && (e.timeoutId = setTimeout(() => {
          e.workerPromise.then((o) => {
            o.terminate();
          });
          const r = this._workerInfos.indexOf(e);
          r !== -1 && this._workerInfos.splice(r, 1);
        }, this._options.idleTimeElapsedBeforeRelease));
      });
    });
  }
};
xn.DefaultOptions = {
  idleTimeElapsedBeforeRelease: 1e3
};
let En = xn;
const Bn = class Bn {
  init(e) {
    const t = `(${Bn._CreateWorker.toString()})(self)`, s = URL.createObjectURL(new Blob([t], { type: "application/javascript" })), n = e.downloadQueue.maxJobs;
    this._WorkerPool = new En(n, () => {
      const i = new Worker(s);
      return Promise.resolve(i);
    });
  }
  async fetchData(e, t) {
    return new Promise((s, n) => {
      this._WorkerPool.push((i, r) => {
        const o = (A) => {
          i.removeEventListener("error", o), i.removeEventListener("message", c), n(A), r();
        }, c = (A) => {
          i.removeEventListener("error", o), i.removeEventListener("message", c);
          try {
            const { success: l, status: h, statusText: u, ok: d, data: f, error: g } = A.data;
            l ? s(f) : n({ message: g });
          } catch (l) {
            n({ message: l });
          }
          r();
        };
        i.addEventListener("error", o), i.addEventListener("message", c), i.postMessage({ url: e, options: { ...t, signal: void 0 } });
      });
    });
  }
};
Bn._CreateWorker = function(e) {
  e.onmessage = async function(t) {
    const { url: s, options: n } = t.data;
    try {
      const i = await fetch(s, n), r = s.endsWith(".json");
      let o;
      r ? o = await i.json() : o = await i.arrayBuffer(), e.postMessage({
        url: s,
        success: !0,
        status: i.status,
        statusText: i.statusText,
        ok: i.ok,
        data: o
      });
    } catch (i) {
      e.postMessage({
        url: s,
        success: !1,
        error: i.message
      });
    }
  };
};
let zi = Bn;
const fi = /* @__PURE__ */ new WeakMap();
class ku extends ns {
  /**
   * Constructs a new Draco loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
      position: "POSITION",
      normal: "NORMAL",
      color: "COLOR",
      uv: "TEX_COORD"
    }, this.defaultAttributeTypes = {
      position: "Float32Array",
      normal: "Float32Array",
      color: "Float32Array",
      uv: "Float32Array"
    };
  }
  /**
   * Provides configuration for the decoder libraries. Configuration cannot be changed after decoding begins.
   *
   * @param {string} path - The decoder path.
   * @return {DRACOLoader} A reference to this loader.
   */
  setDecoderPath(e) {
    return this.decoderPath = e, this;
  }
  /**
   * Provides configuration for the decoder libraries. Configuration cannot be changed after decoding begins.
   *
   * @param {{type:('js'|'wasm')}} config - The decoder config.
   * @return {DRACOLoader} A reference to this loader.
   */
  setDecoderConfig(e) {
    return this.decoderConfig = e, this;
  }
  /**
   * Sets the maximum number of Web Workers to be used during decoding.
   * A lower limit may be preferable if workers are also for other tasks in the application.
   *
   * @param {number} workerLimit - The worker limit.
   * @return {DRACOLoader} A reference to this loader.
   */
  setWorkerLimit(e) {
    return this.workerLimit = e, this;
  }
  /**
   * Starts loading from the given URL and passes the loaded Draco asset
   * to the `onLoad()` callback.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function(BufferGeometry)} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Executed while the loading is in progress.
   * @param {onErrorCallback} onError - Executed when errors occur.
   */
  load(e, t, s, n) {
    const i = new He(this.manager);
    i.setPath(this.path), i.setResponseType("arraybuffer"), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials), i.load(e, (r) => {
      this.parse(r, t, n);
    }, s, n);
  }
  /**
   * Parses the given Draco data.
   *
   * @param {ArrayBuffer} buffer - The raw Draco data as an array buffer.
   * @param {function(BufferGeometry)} onLoad - Executed when the loading/parsing process has been finished.
   * @param {onErrorCallback} onError - Executed when errors occur.
   */
  parse(e, t, s = () => {
  }) {
    this.decodeDracoFile(e, t, null, null, Qe, s).catch(s);
  }
  //
  decodeDracoFile(e, t, s, n, i = he, r = () => {
  }) {
    const o = {
      attributeIDs: s || this.defaultAttributeIDs,
      attributeTypes: n || this.defaultAttributeTypes,
      useUniqueIDs: !!s,
      vertexColorSpace: i
    };
    return this.decodeGeometry(e, o).then(t).catch(r);
  }
  decodeGeometry(e, t) {
    const s = JSON.stringify(t);
    if (fi.has(e)) {
      const c = fi.get(e);
      if (c.key === s)
        return c.promise;
      if (e.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let n;
    const i = this.workerNextTaskID++, r = e.byteLength, o = this._getWorker(i, r).then((c) => (n = c, new Promise((A, l) => {
      n._callbacks[i] = { resolve: A, reject: l }, n.postMessage({ type: "decode", id: i, taskConfig: t, buffer: e }, [e]);
    }))).then((c) => this._createGeometry(c.geometry));
    return o.catch(() => !0).then(() => {
      n && i && this._releaseTask(n, i);
    }), fi.set(e, {
      key: s,
      promise: o
    }), o;
  }
  _createGeometry(e) {
    const t = new xe();
    e.index && t.setIndex(new oe(e.index.array, 1));
    for (let s = 0; s < e.attributes.length; s++) {
      const n = e.attributes[s], i = n.name, r = n.array, o = n.itemSize, c = new oe(r, o);
      i === "color" && (this._assignVertexColorSpace(c, n.vertexColorSpace), c.normalized = !(r instanceof Float32Array)), t.setAttribute(i, c);
    }
    return t;
  }
  _assignVertexColorSpace(e, t) {
    if (t !== Qe) return;
    const s = new X();
    for (let n = 0, i = e.count; n < i; n++)
      s.fromBufferAttribute(e, n), ys.colorSpaceToWorking(s, Qe), e.setXYZ(n, s.r, s.g, s.b);
  }
  _loadLibrary(e, t) {
    const s = new He(this.manager);
    return s.setPath(this.decoderPath), s.setResponseType(t), s.setWithCredentials(this.withCredentials), new Promise((n, i) => {
      s.load(e, n, void 0, i);
    });
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending) return this.decoderPending;
    const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", t = [];
    return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then((s) => {
      const n = s[0];
      e || (this.decoderConfig.wasmBinary = s[1]);
      const i = Uu.toString(), r = [
        "/* draco decoder */",
        n,
        "",
        "/* worker */",
        i.substring(i.indexOf("{") + 1, i.lastIndexOf("}"))
      ].join(`
`);
      this.workerSourceURL = URL.createObjectURL(new Blob([r]));
    }), this.decoderPending;
  }
  _getWorker(e, t) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const n = new Worker(this.workerSourceURL);
        n._callbacks = {}, n._taskCosts = {}, n._taskLoad = 0, n.postMessage({ type: "init", decoderConfig: this.decoderConfig }), n.onmessage = function(i) {
          const r = i.data;
          switch (r.type) {
            case "decode":
              n._callbacks[r.id].resolve(r);
              break;
            case "error":
              n._callbacks[r.id].reject(r);
              break;
            default:
              console.error('THREE.DRACOLoader: Unexpected message, "' + r.type + '"');
          }
        }, this.workerPool.push(n);
      } else
        this.workerPool.sort(function(n, i) {
          return n._taskLoad > i._taskLoad ? -1 : 1;
        });
      const s = this.workerPool[this.workerPool.length - 1];
      return s._taskCosts[e] = t, s._taskLoad += t, s;
    });
  }
  _releaseTask(e, t) {
    e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t];
  }
  debug() {
    console.log("Task load: ", this.workerPool.map((e) => e._taskLoad));
  }
  dispose() {
    for (let e = 0; e < this.workerPool.length; ++e)
      this.workerPool[e].terminate();
    return this.workerPool.length = 0, this.workerSourceURL !== "" && URL.revokeObjectURL(this.workerSourceURL), this;
  }
}
function Uu() {
  let a, e;
  onmessage = function(r) {
    const o = r.data;
    switch (o.type) {
      case "init":
        a = o.decoderConfig, e = new Promise(function(l) {
          a.onModuleLoaded = function(h) {
            l({ draco: h });
          }, DracoDecoderModule(a);
        });
        break;
      case "decode":
        const c = o.buffer, A = o.taskConfig;
        e.then((l) => {
          const h = l.draco, u = new h.Decoder();
          try {
            const d = t(h, u, new Int8Array(c), A), f = d.attributes.map((g) => g.array.buffer);
            d.index && f.push(d.index.array.buffer), self.postMessage({ type: "decode", id: o.id, geometry: d }, f);
          } catch (d) {
            console.error(d), self.postMessage({ type: "error", id: o.id, error: d.message });
          } finally {
            h.destroy(u);
          }
        });
        break;
    }
  };
  function t(r, o, c, A) {
    const l = A.attributeIDs, h = A.attributeTypes;
    let u, d;
    const f = o.GetEncodedGeometryType(c);
    if (f === r.TRIANGULAR_MESH)
      u = new r.Mesh(), d = o.DecodeArrayToMesh(c, c.byteLength, u);
    else if (f === r.POINT_CLOUD)
      u = new r.PointCloud(), d = o.DecodeArrayToPointCloud(c, c.byteLength, u);
    else
      throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!d.ok() || u.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + d.error_msg());
    const g = { index: null, attributes: [] };
    for (const p in l) {
      const b = self[h[p]];
      let m, E;
      if (A.useUniqueIDs)
        E = l[p], m = o.GetAttributeByUniqueId(u, E);
      else {
        if (E = o.GetAttributeId(u, r[l[p]]), E === -1) continue;
        m = o.GetAttribute(u, E);
      }
      const C = n(r, o, u, p, b, m);
      p === "color" && (C.vertexColorSpace = A.vertexColorSpace), g.attributes.push(C);
    }
    return f === r.TRIANGULAR_MESH && (g.index = s(r, o, u)), r.destroy(u), g;
  }
  function s(r, o, c) {
    const l = c.num_faces() * 3, h = l * 4, u = r._malloc(h);
    o.GetTrianglesUInt32Array(c, h, u);
    const d = new Uint32Array(r.HEAPF32.buffer, u, l).slice();
    return r._free(u), { array: d, itemSize: 1 };
  }
  function n(r, o, c, A, l, h) {
    const u = h.num_components(), f = c.num_points() * u, g = f * l.BYTES_PER_ELEMENT, p = i(r, l), b = r._malloc(g);
    o.GetAttributeDataArrayForAllPoints(c, h, p, g, b);
    const m = new l(r.HEAPF32.buffer, b, f).slice();
    return r._free(b), {
      name: A,
      array: m,
      itemSize: u
    };
  }
  function i(r, o) {
    switch (o) {
      case Float32Array:
        return r.DT_FLOAT32;
      case Int8Array:
        return r.DT_INT8;
      case Int16Array:
        return r.DT_INT16;
      case Int32Array:
        return r.DT_INT32;
      case Uint8Array:
        return r.DT_UINT8;
      case Uint16Array:
        return r.DT_UINT16;
      case Uint32Array:
        return r.DT_UINT32;
    }
  }
}
class Gu {
  /**
   * Constructs a new Worker pool.
   *
   * @param {number} [pool=4] - The size of the pool.
   */
  constructor(e = 4) {
    this.pool = e, this.queue = [], this.workers = [], this.workersResolve = [], this.workerStatus = 0, this.workerCreator = null;
  }
  _initWorker(e) {
    if (!this.workers[e]) {
      const t = this.workerCreator();
      t.addEventListener("message", this._onMessage.bind(this, e)), this.workers[e] = t;
    }
  }
  _getIdleWorker() {
    for (let e = 0; e < this.pool; e++)
      if (!(this.workerStatus & 1 << e)) return e;
    return -1;
  }
  _onMessage(e, t) {
    const s = this.workersResolve[e];
    if (s && s(t), this.queue.length) {
      const { resolve: n, msg: i, transfer: r } = this.queue.shift();
      this.workersResolve[e] = n, this.workers[e].postMessage(i, r);
    } else
      this.workerStatus ^= 1 << e;
  }
  /**
   * Sets a function that is responsible for creating Workers.
   *
   * @param {Function} workerCreator - The worker creator function.
   */
  setWorkerCreator(e) {
    this.workerCreator = e;
  }
  /**
   * Sets the Worker limit
   *
   * @param {number} pool - The size of the pool.
   */
  setWorkerLimit(e) {
    this.pool = e;
  }
  /**
   * Post a message to an idle Worker. If no Worker is available,
   * the message is pushed into a message queue for later processing.
   *
   * @param {Object} msg - The message.
   * @param {Array<ArrayBuffer>} transfer - An array with array buffers for data transfer.
   * @return {Promise} A Promise that resolves when the message has been processed.
   */
  postMessage(e, t) {
    return new Promise((s) => {
      const n = this._getIdleWorker();
      n !== -1 ? (this._initWorker(n), this.workerStatus |= 1 << n, this.workersResolve[n] = s, this.workers[n].postMessage(e, t)) : this.queue.push({ resolve: s, msg: e, transfer: t });
    });
  }
  /**
   * Terminates all Workers of this pool. Call this  method whenever this
   * Worker pool is no longer used in your app.
   */
  dispose() {
    this.workers.forEach((e) => e.terminate()), this.workersResolve.length = 0, this.workers.length = 0, this.queue.length = 0, this.workerStatus = 0;
  }
}
const Pu = 0, Da = 2, Nu = 1, La = 2, Ou = 0, Hu = 1, zu = 10, ju = 0, wc = 9, vc = 15, Sc = 16, Tc = 22, Qc = 37, Rc = 43, Mc = 76, Dc = 83, Lc = 97, Fc = 100, kc = 103, Uc = 109, Vu = 131, qu = 132, Ku = 133, Wu = 134, Ju = 137, Yu = 138, Xu = 141, Zu = 142, $u = 145, ed = 146, Gc = 148, Pc = 152, td = 157, sd = 158, Nc = 165, Oc = 166, dr = 1000066e3;
class nd {
  constructor() {
    this.vkFormat = 0, this.typeSize = 1, this.pixelWidth = 0, this.pixelHeight = 0, this.pixelDepth = 0, this.layerCount = 0, this.faceCount = 1, this.supercompressionScheme = 0, this.levels = [], this.dataFormatDescriptor = [{ vendorId: 0, descriptorType: 0, descriptorBlockSize: 0, versionNumber: 2, colorModel: 0, colorPrimaries: 1, transferFunction: 2, flags: 0, texelBlockDimension: [0, 0, 0, 0], bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0], samples: [] }], this.keyValue = {}, this.globalData = null;
  }
}
class fs {
  constructor(e, t, s, n) {
    this._dataView = void 0, this._littleEndian = void 0, this._offset = void 0, this._dataView = new DataView(e.buffer, e.byteOffset + t, s), this._littleEndian = n, this._offset = 0;
  }
  _nextUint8() {
    const e = this._dataView.getUint8(this._offset);
    return this._offset += 1, e;
  }
  _nextUint16() {
    const e = this._dataView.getUint16(this._offset, this._littleEndian);
    return this._offset += 2, e;
  }
  _nextUint32() {
    const e = this._dataView.getUint32(this._offset, this._littleEndian);
    return this._offset += 4, e;
  }
  _nextUint64() {
    const e = this._dataView.getUint32(this._offset, this._littleEndian) + 4294967296 * this._dataView.getUint32(this._offset + 4, this._littleEndian);
    return this._offset += 8, e;
  }
  _nextInt32() {
    const e = this._dataView.getInt32(this._offset, this._littleEndian);
    return this._offset += 4, e;
  }
  _nextUint8Array(e) {
    const t = new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + this._offset, e);
    return this._offset += e, t;
  }
  _skip(e) {
    return this._offset += e, this;
  }
  _scan(e, t) {
    t === void 0 && (t = 0);
    const s = this._offset;
    let n = 0;
    for (; this._dataView.getUint8(this._offset) !== t && n < e; ) n++, this._offset++;
    return n < e && this._offset++, new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + s, n);
  }
}
const we = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10];
function Fa(a) {
  return new TextDecoder().decode(a);
}
function id(a) {
  const e = new Uint8Array(a.buffer, a.byteOffset, we.length);
  if (e[0] !== we[0] || e[1] !== we[1] || e[2] !== we[2] || e[3] !== we[3] || e[4] !== we[4] || e[5] !== we[5] || e[6] !== we[6] || e[7] !== we[7] || e[8] !== we[8] || e[9] !== we[9] || e[10] !== we[10] || e[11] !== we[11]) throw new Error("Missing KTX 2.0 identifier.");
  const t = new nd(), s = 17 * Uint32Array.BYTES_PER_ELEMENT, n = new fs(a, we.length, s, !0);
  t.vkFormat = n._nextUint32(), t.typeSize = n._nextUint32(), t.pixelWidth = n._nextUint32(), t.pixelHeight = n._nextUint32(), t.pixelDepth = n._nextUint32(), t.layerCount = n._nextUint32(), t.faceCount = n._nextUint32();
  const i = n._nextUint32();
  t.supercompressionScheme = n._nextUint32();
  const r = n._nextUint32(), o = n._nextUint32(), c = n._nextUint32(), A = n._nextUint32(), l = n._nextUint64(), h = n._nextUint64(), u = new fs(a, we.length + s, 3 * i * 8, !0);
  for (let T = 0; T < i; T++) t.levels.push({ levelData: new Uint8Array(a.buffer, a.byteOffset + u._nextUint64(), u._nextUint64()), uncompressedByteLength: u._nextUint64() });
  const d = new fs(a, r, o, !0), f = { vendorId: d._skip(4)._nextUint16(), descriptorType: d._nextUint16(), versionNumber: d._nextUint16(), descriptorBlockSize: d._nextUint16(), colorModel: d._nextUint8(), colorPrimaries: d._nextUint8(), transferFunction: d._nextUint8(), flags: d._nextUint8(), texelBlockDimension: [d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8()], bytesPlane: [d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8()], samples: [] }, g = (f.descriptorBlockSize / 4 - 6) / 4;
  for (let T = 0; T < g; T++) {
    const q = { bitOffset: d._nextUint16(), bitLength: d._nextUint8(), channelType: d._nextUint8(), samplePosition: [d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8()], sampleLower: -1 / 0, sampleUpper: 1 / 0 };
    64 & q.channelType ? (q.sampleLower = d._nextInt32(), q.sampleUpper = d._nextInt32()) : (q.sampleLower = d._nextUint32(), q.sampleUpper = d._nextUint32()), f.samples[T] = q;
  }
  t.dataFormatDescriptor.length = 0, t.dataFormatDescriptor.push(f);
  const p = new fs(a, c, A, !0);
  for (; p._offset < A; ) {
    const T = p._nextUint32(), q = p._scan(T), K = Fa(q);
    if (t.keyValue[K] = p._nextUint8Array(T - q.byteLength - 1), K.match(/^ktx/i)) {
      const V = Fa(t.keyValue[K]);
      t.keyValue[K] = V.substring(0, V.lastIndexOf("\0"));
    }
    p._skip(T % 4 ? 4 - T % 4 : 0);
  }
  if (h <= 0) return t;
  const b = new fs(a, l, h, !0), m = b._nextUint16(), E = b._nextUint16(), C = b._nextUint32(), I = b._nextUint32(), _ = b._nextUint32(), B = b._nextUint32(), y = [];
  for (let T = 0; T < i; T++) y.push({ imageFlags: b._nextUint32(), rgbSliceByteOffset: b._nextUint32(), rgbSliceByteLength: b._nextUint32(), alphaSliceByteOffset: b._nextUint32(), alphaSliceByteLength: b._nextUint32() });
  const w = l + b._offset, v = w + C, S = v + I, L = S + _, U = new Uint8Array(a.buffer, a.byteOffset + w, C), F = new Uint8Array(a.buffer, a.byteOffset + v, I), N = new Uint8Array(a.buffer, a.byteOffset + S, _), G = new Uint8Array(a.buffer, a.byteOffset + L, B);
  return t.globalData = { endpointCount: m, selectorCount: E, imageDescs: y, endpointsData: U, selectorsData: F, tablesData: N, extendedData: G }, t;
}
let gi, ct, ji;
const pi = { env: { emscripten_notify_memory_growth: function(a) {
  ji = new Uint8Array(ct.exports.memory.buffer);
} } };
class rd {
  init() {
    return gi || (gi = typeof fetch < "u" ? fetch("data:application/wasm;base64," + ka).then((e) => e.arrayBuffer()).then((e) => WebAssembly.instantiate(e, pi)).then(this._init) : WebAssembly.instantiate(Buffer.from(ka, "base64"), pi).then(this._init), gi);
  }
  _init(e) {
    ct = e.instance, pi.env.emscripten_notify_memory_growth(0);
  }
  decode(e, t = 0) {
    if (!ct) throw new Error("ZSTDDecoder: Await .init() before decoding.");
    const s = e.byteLength, n = ct.exports.malloc(s);
    ji.set(e, n), t = t || Number(ct.exports.ZSTD_findDecompressedSize(n, s));
    const i = ct.exports.malloc(t), r = ct.exports.ZSTD_decompress(i, t, n, s), o = ji.slice(i, i + r);
    return ct.exports.free(n), ct.exports.free(i), o;
  }
}
const ka = "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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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", ad = "display-p3", od = "display-p3-linear", mi = /* @__PURE__ */ new WeakMap();
let bi = 0, Ei;
class Oe extends ns {
  /**
   * Constructs a new KTX2 loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e), this.transcoderPath = "", this.transcoderBinary = null, this.transcoderPending = null, this.workerPool = new Gu(), this.workerSourceURL = "", this.workerConfig = null, typeof MSC_TRANSCODER < "u" && console.warn(
      'THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.'
    );
  }
  /**
   * Sets the transcoder path.
   *
   * The WASM transcoder and JS wrapper are available from the `examples/jsm/libs/basis` directory.
   *
   * @param {string} path - The transcoder path to set.
   * @return {KTX2Loader} A reference to this loader.
   */
  setTranscoderPath(e) {
    return this.transcoderPath = e, this;
  }
  /**
   * Sets the maximum number of Web Workers to be allocated by this instance.
   *
   * @param {number} workerLimit - The worker limit.
   * @return {KTX2Loader} A reference to this loader.
   */
  setWorkerLimit(e) {
    return this.workerPool.setWorkerLimit(e), this;
  }
  /**
   * Async version of {@link KTX2Loader#detectSupport}.
   *
   * @async
   * @param {WebGPURenderer|WebGLRenderer} renderer - The renderer.
   * @return {Promise} A Promise that resolves when the support has been detected.
   */
  async detectSupportAsync(e) {
    return this.workerConfig = {
      astcSupported: await e.hasFeatureAsync("texture-compression-astc"),
      astcHDRSupported: !1,
      // https://github.com/gpuweb/gpuweb/issues/3856
      etc1Supported: await e.hasFeatureAsync("texture-compression-etc1"),
      etc2Supported: await e.hasFeatureAsync("texture-compression-etc2"),
      dxtSupported: await e.hasFeatureAsync("texture-compression-bc"),
      bptcSupported: await e.hasFeatureAsync("texture-compression-bptc"),
      pvrtcSupported: await e.hasFeatureAsync("texture-compression-pvrtc")
    }, this;
  }
  /**
   * Detects hardware support for available compressed texture formats, to determine
   * the output format for the transcoder. Must be called before loading a texture.
   *
   * @param {WebGPURenderer|WebGLRenderer} renderer - The renderer.
   * @return {KTX2Loader} A reference to this loader.
   */
  detectSupport(e) {
    return e.isWebGPURenderer === !0 ? this.workerConfig = {
      astcSupported: e.hasFeature("texture-compression-astc"),
      astcHDRSupported: !1,
      // https://github.com/gpuweb/gpuweb/issues/3856
      etc1Supported: e.hasFeature("texture-compression-etc1"),
      etc2Supported: e.hasFeature("texture-compression-etc2"),
      dxtSupported: e.hasFeature("texture-compression-bc"),
      bptcSupported: e.hasFeature("texture-compression-bptc"),
      pvrtcSupported: e.hasFeature("texture-compression-pvrtc")
    } : this.workerConfig = {
      astcSupported: e.extensions.has("WEBGL_compressed_texture_astc"),
      astcHDRSupported: e.extensions.has("WEBGL_compressed_texture_astc") && e.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),
      etc1Supported: e.extensions.has("WEBGL_compressed_texture_etc1"),
      etc2Supported: e.extensions.has("WEBGL_compressed_texture_etc"),
      dxtSupported: e.extensions.has("WEBGL_compressed_texture_s3tc"),
      bptcSupported: e.extensions.has("EXT_texture_compression_bptc"),
      pvrtcSupported: e.extensions.has("WEBGL_compressed_texture_pvrtc") || e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")
    }, this;
  }
  // TODO: Make this method private
  init() {
    if (!this.transcoderPending) {
      const e = new He(this.manager);
      e.setPath(this.transcoderPath), e.setWithCredentials(this.withCredentials);
      const t = e.loadAsync("basis_transcoder.js"), s = new He(this.manager);
      s.setPath(this.transcoderPath), s.setResponseType("arraybuffer"), s.setWithCredentials(this.withCredentials);
      const n = s.loadAsync("basis_transcoder.wasm");
      this.transcoderPending = Promise.all([t, n]).then(([i, r]) => {
        const o = Oe.BasisWorker.toString(), c = [
          "/* constants */",
          "let _EngineFormat = " + JSON.stringify(Oe.EngineFormat),
          "let _EngineType = " + JSON.stringify(Oe.EngineType),
          "let _TranscoderFormat = " + JSON.stringify(Oe.TranscoderFormat),
          "let _BasisFormat = " + JSON.stringify(Oe.BasisFormat),
          "/* basis_transcoder.js */",
          i,
          "/* worker */",
          o.substring(o.indexOf("{") + 1, o.lastIndexOf("}"))
        ].join(`
`);
        this.workerSourceURL = URL.createObjectURL(new Blob([c])), this.transcoderBinary = r, this.workerPool.setWorkerCreator(() => {
          const A = new Worker(this.workerSourceURL), l = this.transcoderBinary.slice(0);
          return A.postMessage({ type: "init", config: this.workerConfig, transcoderBinary: l }, [l]), A;
        });
      }), bi > 0 && console.warn(
        "THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."
      ), bi++;
    }
    return this.transcoderPending;
  }
  /**
   * Starts loading from the given URL and passes the loaded KTX2 texture
   * to the `onLoad()` callback.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function(CompressedTexture)} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Executed while the loading is in progress.
   * @param {onErrorCallback} onError - Executed when errors occur.
   */
  load(e, t, s, n) {
    if (this.workerConfig === null)
      throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
    const i = new He(this.manager);
    i.setPath(this.path), i.setCrossOrigin(this.crossOrigin), i.setWithCredentials(this.withCredentials), i.setResponseType("arraybuffer"), i.load(e, (r) => {
      this.parse(r, t, n);
    }, s, n);
  }
  /**
   * Parses the given KTX2 data.
   *
   * @param {ArrayBuffer} buffer - The raw KTX2 data as an array buffer.
   * @param {function(CompressedTexture)} onLoad - Executed when the loading/parsing process has been finished.
   * @param {onErrorCallback} onError - Executed when errors occur.
   * @returns {Promise} A Promise that resolves when the parsing has been finished.
   */
  parse(e, t, s) {
    if (this.workerConfig === null)
      throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
    if (mi.has(e))
      return mi.get(e).promise.then(t).catch(s);
    this._createTexture(e).then((n) => t ? t(n) : null).catch(s);
  }
  _createTextureFrom(e, t) {
    const { type: s, error: n, data: { faces: i, width: r, height: o, format: c, type: A, dfdFlags: l } } = e;
    if (s === "error") return Promise.reject(n);
    let h;
    if (t.faceCount === 6)
      h = new mA(i, c, A);
    else {
      const u = i[0].mipmaps;
      h = t.layerCount > 1 ? new bA(u, r, o, t.layerCount, c, A) : new Do(u, r, o, c, A);
    }
    return h.minFilter = i[0].mipmaps.length === 1 ? ne : is, h.magFilter = ne, h.generateMipmaps = !1, h.needsUpdate = !0, h.colorSpace = Hc(t), h.premultiplyAlpha = !!(l & Nu), h;
  }
  /**
   * @private
   * @param {ArrayBuffer} buffer
   * @param {?Object} config
   * @return {Promise<CompressedTexture|CompressedArrayTexture|DataTexture|Data3DTexture>}
   */
  async _createTexture(e, t = {}) {
    const s = id(new Uint8Array(e)), n = s.vkFormat === dr && s.dataFormatDescriptor[0].colorModel === 167;
    if (!(s.vkFormat === ju || n && !this.workerConfig.astcHDRSupported))
      return Ad(s);
    const r = t, o = this.init().then(() => this.workerPool.postMessage({ type: "transcode", buffer: e, taskConfig: r }, [e])).then((c) => this._createTextureFrom(c.data, s));
    return mi.set(e, { promise: o }), o;
  }
  /**
   * Frees internal resources. This method should be called
   * when the loader is no longer required.
   */
  dispose() {
    this.workerPool.dispose(), this.workerSourceURL && URL.revokeObjectURL(this.workerSourceURL), bi--;
  }
}
Oe.BasisFormat = {
  ETC1S: 0,
  UASTC: 1,
  UASTC_HDR: 2
};
Oe.TranscoderFormat = {
  ETC1: 0,
  ETC2: 1,
  BC1: 2,
  BC3: 3,
  BC4: 4,
  BC5: 5,
  BC7_M6_OPAQUE_ONLY: 6,
  BC7_M5: 7,
  PVRTC1_4_RGB: 8,
  PVRTC1_4_RGBA: 9,
  ASTC_4x4: 10,
  ATC_RGB: 11,
  ATC_RGBA_INTERPOLATED_ALPHA: 12,
  RGBA32: 13,
  RGB565: 14,
  BGR565: 15,
  RGBA4444: 16,
  BC6H: 22,
  RGB_HALF: 24,
  RGBA_HALF: 25
};
Oe.EngineFormat = {
  RGBAFormat: Ie,
  RGBA_ASTC_4x4_Format: rn,
  RGB_BPTC_UNSIGNED_Format: xA,
  RGBA_BPTC_Format: Qi,
  RGBA_ETC2_EAC_Format: Lo,
  RGBA_PVRTC_4BPPV1_Format: yA,
  RGBA_S3TC_DXT5_Format: Ri,
  RGB_ETC1_Format: IA,
  RGB_ETC2_Format: Fo,
  RGB_PVRTC_4BPPV1_Format: CA,
  RGBA_S3TC_DXT1_Format: Mi
};
Oe.EngineType = {
  UnsignedByteType: ve,
  HalfFloatType: ke,
  FloatType: Ve
};
Oe.BasisWorker = function() {
  let a, e, t;
  const s = _EngineFormat, n = _EngineType, i = _TranscoderFormat, r = _BasisFormat;
  self.addEventListener("message", function(f) {
    const g = f.data;
    switch (g.type) {
      case "init":
        a = g.config, o(g.transcoderBinary);
        break;
      case "transcode":
        e.then(() => {
          try {
            const { faces: p, buffers: b, width: m, height: E, hasAlpha: C, format: I, type: _, dfdFlags: B } = c(g.buffer);
            self.postMessage({ type: "transcode", id: g.id, data: { faces: p, width: m, height: E, hasAlpha: C, format: I, type: _, dfdFlags: B } }, b);
          } catch (p) {
            console.error(p), self.postMessage({ type: "error", id: g.id, error: p.message });
          }
        });
        break;
    }
  });
  function o(f) {
    e = new Promise((g) => {
      t = { wasmBinary: f, onRuntimeInitialized: g }, BASIS(t);
    }).then(() => {
      t.initializeBasis(), t.KTX2File === void 0 && console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.");
    });
  }
  function c(f) {
    const g = new t.KTX2File(new Uint8Array(f));
    function p() {
      g.close(), g.delete();
    }
    if (!g.isValid())
      throw p(), new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");
    let b;
    if (g.isUASTC())
      b = r.UASTC;
    else if (g.isETC1S())
      b = r.ETC1S;
    else if (g.isHDR())
      b = r.UASTC_HDR;
    else
      throw new Error("THREE.KTX2Loader: Unknown Basis encoding");
    const m = g.getWidth(), E = g.getHeight(), C = g.getLayers() || 1, I = g.getLevels(), _ = g.getFaces(), B = g.getHasAlpha(), y = g.getDFDFlags(), { transcoderFormat: w, engineFormat: v, engineType: S } = h(b, m, E, B);
    if (!m || !E || !I)
      throw p(), new Error("THREE.KTX2Loader:	Invalid texture");
    if (!g.startTranscoding())
      throw p(), new Error("THREE.KTX2Loader: .startTranscoding failed");
    const L = [], U = [];
    for (let F = 0; F < _; F++) {
      const N = [];
      for (let G = 0; G < I; G++) {
        const T = [];
        let q, K;
        for (let te = 0; te < C; te++) {
          const $ = g.getImageLevelInfo(G, te, F);
          F === 0 && G === 0 && te === 0 && ($.origWidth % 4 !== 0 || $.origHeight % 4 !== 0) && console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."), I > 1 ? (q = $.origWidth, K = $.origHeight) : (q = $.width, K = $.height);
          let se = new Uint8Array(g.getImageTranscodedSizeInBytes(G, te, 0, w));
          const Be = g.transcodeImage(se, G, te, F, w, 0, -1, -1);
          if (S === n.HalfFloatType && (se = new Uint16Array(se.buffer, se.byteOffset, se.byteLength / Uint16Array.BYTES_PER_ELEMENT)), !Be)
            throw p(), new Error("THREE.KTX2Loader: .transcodeImage failed.");
          T.push(se);
        }
        const V = d(T);
        N.push({ data: V, width: q, height: K }), U.push(V.buffer);
      }
      L.push({ mipmaps: N, width: m, height: E, format: v, type: S });
    }
    return p(), { faces: L, buffers: U, width: m, height: E, hasAlpha: B, dfdFlags: y, format: v, type: S };
  }
  const A = [
    {
      if: "astcSupported",
      basisFormat: [r.UASTC],
      transcoderFormat: [i.ASTC_4x4, i.ASTC_4x4],
      engineFormat: [s.RGBA_ASTC_4x4_Format, s.RGBA_ASTC_4x4_Format],
      engineType: [n.UnsignedByteType],
      priorityETC1S: 1 / 0,
      priorityUASTC: 1,
      needsPowerOfTwo: !1
    },
    {
      if: "bptcSupported",
      basisFormat: [r.ETC1S, r.UASTC],
      transcoderFormat: [i.BC7_M5, i.BC7_M5],
      engineFormat: [s.RGBA_BPTC_Format, s.RGBA_BPTC_Format],
      engineType: [n.UnsignedByteType],
      priorityETC1S: 3,
      priorityUASTC: 2,
      needsPowerOfTwo: !1
    },
    {
      if: "dxtSupported",
      basisFormat: [r.ETC1S, r.UASTC],
      transcoderFormat: [i.BC1, i.BC3],
      engineFormat: [s.RGBA_S3TC_DXT1_Format, s.RGBA_S3TC_DXT5_Format],
      engineType: [n.UnsignedByteType],
      priorityETC1S: 4,
      priorityUASTC: 5,
      needsPowerOfTwo: !1
    },
    {
      if: "etc2Supported",
      basisFormat: [r.ETC1S, r.UASTC],
      transcoderFormat: [i.ETC1, i.ETC2],
      engineFormat: [s.RGB_ETC2_Format, s.RGBA_ETC2_EAC_Format],
      engineType: [n.UnsignedByteType],
      priorityETC1S: 1,
      priorityUASTC: 3,
      needsPowerOfTwo: !1
    },
    {
      if: "etc1Supported",
      basisFormat: [r.ETC1S, r.UASTC],
      transcoderFormat: [i.ETC1],
      engineFormat: [s.RGB_ETC1_Format],
      engineType: [n.UnsignedByteType],
      priorityETC1S: 2,
      priorityUASTC: 4,
      needsPowerOfTwo: !1
    },
    {
      if: "pvrtcSupported",
      basisFormat: [r.ETC1S, r.UASTC],
      transcoderFormat: [i.PVRTC1_4_RGB, i.PVRTC1_4_RGBA],
      engineFormat: [s.RGB_PVRTC_4BPPV1_Format, s.RGBA_PVRTC_4BPPV1_Format],
      engineType: [n.UnsignedByteType],
      priorityETC1S: 5,
      priorityUASTC: 6,
      needsPowerOfTwo: !0
    },
    {
      if: "bptcSupported",
      basisFormat: [r.UASTC_HDR],
      transcoderFormat: [i.BC6H],
      engineFormat: [s.RGB_BPTC_UNSIGNED_Format],
      engineType: [n.HalfFloatType],
      priorityHDR: 1,
      needsPowerOfTwo: !1
    },
    // Uncompressed fallbacks.
    {
      basisFormat: [r.ETC1S, r.UASTC],
      transcoderFormat: [i.RGBA32, i.RGBA32],
      engineFormat: [s.RGBAFormat, s.RGBAFormat],
      engineType: [n.UnsignedByteType, n.UnsignedByteType],
      priorityETC1S: 100,
      priorityUASTC: 100,
      needsPowerOfTwo: !1
    },
    {
      basisFormat: [r.UASTC_HDR],
      transcoderFormat: [i.RGBA_HALF],
      engineFormat: [s.RGBAFormat],
      engineType: [n.HalfFloatType],
      priorityHDR: 100,
      needsPowerOfTwo: !1
    }
  ], l = {
    // TODO: For ETC1S we intentionally sort by _UASTC_ priority, preserving
    // a historical accident shown to avoid performance pitfalls for Linux with
    // Firefox & AMD GPU (RadeonSI). Further work needed.
    // See https://github.com/mrdoob/three.js/pull/29730.
    [r.ETC1S]: A.filter((f) => f.basisFormat.includes(r.ETC1S)).sort((f, g) => f.priorityUASTC - g.priorityUASTC),
    [r.UASTC]: A.filter((f) => f.basisFormat.includes(r.UASTC)).sort((f, g) => f.priorityUASTC - g.priorityUASTC),
    [r.UASTC_HDR]: A.filter((f) => f.basisFormat.includes(r.UASTC_HDR)).sort((f, g) => f.priorityHDR - g.priorityHDR)
  };
  function h(f, g, p, b) {
    const m = l[f];
    for (let E = 0; E < m.length; E++) {
      const C = m[E];
      if (C.if && !a[C.if] || !C.basisFormat.includes(f) || b && C.transcoderFormat.length < 2 || C.needsPowerOfTwo && !(u(g) && u(p))) continue;
      const I = C.transcoderFormat[b ? 1 : 0], _ = C.engineFormat[b ? 1 : 0], B = C.engineType[0];
      return { transcoderFormat: I, engineFormat: _, engineType: B };
    }
    throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.");
  }
  function u(f) {
    return f <= 2 ? !0 : (f & f - 1) === 0 && f !== 0;
  }
  function d(f) {
    if (f.length === 1) return f[0];
    let g = 0;
    for (let m = 0; m < f.length; m++) {
      const E = f[m];
      g += E.byteLength;
    }
    const p = new Uint8Array(g);
    let b = 0;
    for (let m = 0; m < f.length; m++) {
      const E = f[m];
      p.set(E, b), b += E.byteLength;
    }
    return p;
  }
};
const cd = /* @__PURE__ */ new Set([Ie, Bt, qt]), Ci = {
  [Uc]: Ie,
  [Lc]: Ie,
  [Qc]: Ie,
  [Rc]: Ie,
  [kc]: Bt,
  [Dc]: Bt,
  [Sc]: Bt,
  [Tc]: Bt,
  [Fc]: qt,
  [Mc]: qt,
  [vc]: qt,
  [wc]: qt,
  [Gc]: Fo,
  [Pc]: Lo,
  [dr]: rn,
  [sd]: rn,
  [td]: rn,
  [Oc]: Qr,
  [Nc]: Qr,
  [Ku]: Mi,
  [Wu]: Mi,
  [Vu]: Tr,
  [qu]: Tr,
  [Yu]: Sr,
  [Ju]: Sr,
  [Zu]: Ri,
  [Xu]: Ri,
  [ed]: Qi,
  [$u]: Qi
}, Ii = {
  [Uc]: Ve,
  [Lc]: ke,
  [Qc]: ve,
  [Rc]: ve,
  [kc]: Ve,
  [Dc]: ke,
  [Sc]: ve,
  [Tc]: ve,
  [Fc]: Ve,
  [Mc]: ke,
  [vc]: ve,
  [wc]: ve,
  [Gc]: ve,
  [Pc]: ve,
  [dr]: ke,
  [Oc]: ve,
  [Nc]: ve
};
async function Ad(a) {
  const { vkFormat: e } = a;
  if (Ci[e] === void 0)
    throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");
  let t;
  a.supercompressionScheme === Da && (Ei || (Ei = new Promise(async (i) => {
    const r = new rd();
    await r.init(), i(r);
  })), t = await Ei);
  const s = [];
  for (let i = 0; i < a.levels.length; i++) {
    const r = Math.max(1, a.pixelWidth >> i), o = Math.max(1, a.pixelHeight >> i), c = a.pixelDepth ? Math.max(1, a.pixelDepth >> i) : 0, A = a.levels[i];
    let l;
    if (a.supercompressionScheme === Pu)
      l = A.levelData;
    else if (a.supercompressionScheme === Da)
      l = t.decode(A.levelData, A.uncompressedByteLength);
    else
      throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");
    let h;
    Ii[e] === Ve ? h = new Float32Array(
      l.buffer,
      l.byteOffset,
      l.byteLength / Float32Array.BYTES_PER_ELEMENT
    ) : Ii[e] === ke ? h = new Uint16Array(
      l.buffer,
      l.byteOffset,
      l.byteLength / Uint16Array.BYTES_PER_ELEMENT
    ) : h = l, s.push({
      data: h,
      width: r,
      height: o,
      depth: c
    });
  }
  let n;
  if (cd.has(Ci[e]))
    n = a.pixelDepth === 0 ? new ht(s[0].data, a.pixelWidth, a.pixelHeight) : new EA(s[0].data, a.pixelWidth, a.pixelHeight, a.pixelDepth);
  else {
    if (a.pixelDepth > 0) throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");
    n = new Do(s, a.pixelWidth, a.pixelHeight), n.minFilter = s.length === 1 ? ne : is, n.magFilter = ne;
  }
  return n.mipmaps = s, n.type = Ii[e], n.format = Ci[e], n.colorSpace = Hc(a), n.needsUpdate = !0, Promise.resolve(n);
}
function Hc(a) {
  const e = a.dataFormatDescriptor[0];
  return e.colorPrimaries === Hu ? e.transferFunction === La ? Qe : he : e.colorPrimaries === zu ? e.transferFunction === La ? ad : od : e.colorPrimaries === Ou ? vr : (console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`), vr);
}
var zc = (function() {
  var a = "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb", e = "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb", t = new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    4,
    1,
    96,
    0,
    0,
    3,
    3,
    2,
    0,
    0,
    5,
    3,
    1,
    0,
    1,
    12,
    1,
    0,
    10,
    22,
    2,
    12,
    0,
    65,
    0,
    65,
    0,
    65,
    0,
    252,
    10,
    0,
    0,
    11,
    7,
    0,
    65,
    0,
    253,
    15,
    26,
    11
  ]), s = new Uint8Array([
    32,
    0,
    65,
    2,
    1,
    106,
    34,
    33,
    3,
    128,
    11,
    4,
    13,
    64,
    6,
    253,
    10,
    7,
    15,
    116,
    127,
    5,
    8,
    12,
    40,
    16,
    19,
    54,
    20,
    9,
    27,
    255,
    113,
    17,
    42,
    67,
    24,
    23,
    146,
    148,
    18,
    14,
    22,
    45,
    70,
    69,
    56,
    114,
    101,
    21,
    25,
    63,
    75,
    136,
    108,
    28,
    118,
    29,
    73,
    115
  ]);
  if (typeof WebAssembly != "object")
    return {
      supported: !1
    };
  var n = WebAssembly.validate(t) ? o(e) : o(a), i, r = WebAssembly.instantiate(n, {}).then(function(b) {
    i = b.instance, i.exports.__wasm_call_ctors();
  });
  function o(b) {
    for (var m = new Uint8Array(b.length), E = 0; E < b.length; ++E) {
      var C = b.charCodeAt(E);
      m[E] = C > 96 ? C - 97 : C > 64 ? C - 39 : C + 4;
    }
    for (var I = 0, E = 0; E < b.length; ++E)
      m[I++] = m[E] < 60 ? s[m[E]] : (m[E] - 60) * 64 + m[++E];
    return m.buffer.slice(0, I);
  }
  function c(b, m, E, C, I, _, B) {
    var y = b.exports.sbrk, w = C + 3 & -4, v = y(w * I), S = y(_.length), L = new Uint8Array(b.exports.memory.buffer);
    L.set(_, S);
    var U = m(v, C, I, S, _.length);
    if (U == 0 && B && B(v, w, I), E.set(L.subarray(v, v + C * I)), y(v - y(0)), U != 0)
      throw new Error("Malformed buffer data: " + U);
  }
  var A = {
    NONE: "",
    OCTAHEDRAL: "meshopt_decodeFilterOct",
    QUATERNION: "meshopt_decodeFilterQuat",
    EXPONENTIAL: "meshopt_decodeFilterExp"
  }, l = {
    ATTRIBUTES: "meshopt_decodeVertexBuffer",
    TRIANGLES: "meshopt_decodeIndexBuffer",
    INDICES: "meshopt_decodeIndexSequence"
  }, h = [], u = 0;
  function d(b) {
    var m = {
      object: new Worker(b),
      pending: 0,
      requests: {}
    };
    return m.object.onmessage = function(E) {
      var C = E.data;
      m.pending -= C.count, m.requests[C.id][C.action](C.value), delete m.requests[C.id];
    }, m;
  }
  function f(b) {
    for (var m = "self.ready = WebAssembly.instantiate(new Uint8Array([" + new Uint8Array(n) + "]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = " + p.name + ";" + c.toString() + p.toString(), E = new Blob([m], { type: "text/javascript" }), C = URL.createObjectURL(E), I = h.length; I < b; ++I)
      h[I] = d(C);
    for (var I = b; I < h.length; ++I)
      h[I].object.postMessage({});
    h.length = b, URL.revokeObjectURL(C);
  }
  function g(b, m, E, C, I) {
    for (var _ = h[0], B = 1; B < h.length; ++B)
      h[B].pending < _.pending && (_ = h[B]);
    return new Promise(function(y, w) {
      var v = new Uint8Array(E), S = ++u;
      _.pending += b, _.requests[S] = { resolve: y, reject: w }, _.object.postMessage({ id: S, count: b, size: m, source: v, mode: C, filter: I }, [v.buffer]);
    });
  }
  function p(b) {
    var m = b.data;
    if (!m.id)
      return self.close();
    self.ready.then(function(E) {
      try {
        var C = new Uint8Array(m.count * m.size);
        c(E, E.exports[m.mode], C, m.count, m.size, m.source, E.exports[m.filter]), self.postMessage({ id: m.id, count: m.count, action: "resolve", value: C }, [C.buffer]);
      } catch (I) {
        self.postMessage({ id: m.id, count: m.count, action: "reject", value: I });
      }
    });
  }
  return {
    ready: r,
    supported: !0,
    useWorkers: function(b) {
      f(b);
    },
    decodeVertexBuffer: function(b, m, E, C, I) {
      c(i, i.exports.meshopt_decodeVertexBuffer, b, m, E, C, i.exports[A[I]]);
    },
    decodeIndexBuffer: function(b, m, E, C) {
      c(i, i.exports.meshopt_decodeIndexBuffer, b, m, E, C);
    },
    decodeIndexSequence: function(b, m, E, C) {
      c(i, i.exports.meshopt_decodeIndexSequence, b, m, E, C);
    },
    decodeGltfBuffer: function(b, m, E, C, I, _) {
      c(i, i.exports[l[I]], b, m, E, C, i.exports[A[_]]);
    },
    decodeGltfBufferAsync: function(b, m, E, C, I) {
      return h.length > 0 ? g(b, m, E, l[C], A[I]) : r.then(function() {
        var _ = new Uint8Array(b * m);
        return c(i, i.exports[l[C]], _, b, m, E, i.exports[A[I]]), _;
      });
    }
  };
})();
const _n = class _n {
  static getDracoLoader(e) {
    if (!this._dracoLoader) {
      e = e || "https://unpkg.com/three@0.173.0/examples/jsm/libs/draco/gltf/";
      const t = new ku();
      t.setDecoderPath(e), this._dracoLoader = t;
    }
    return this._dracoLoader;
  }
  static getKtxLoader(e) {
    if (!this._ktx2Loader) {
      e = e || "https://unpkg.com/three@0.173.0/examples/jsm/libs/basis/";
      const t = new Oe();
      t.setTranscoderPath(e), this._ktx2Loader = t;
    }
    return this._ktx2Loader;
  }
  static getMeshoptDecoder(e) {
    return e || zc;
  }
};
_n._dracoLoader = null, _n._ktx2Loader = null;
let kt = _n;
class Ot extends Tt {
  constructor() {
    super(), this._scene = void 0, this._parentObjectName = "unknown";
    const e = this;
    this.onSceneUpdate = function(s) {
      e.updateSceneTime(s.time, s.delta);
    }, this.onSceneRecenter = function(s) {
      e.updateSceneTransform();
    };
  }
  getOrAddParentObject() {
    const e = this._scene.getSceneRoot();
    return this._parentObject = e.getObjectByName(this._parentObjectName), this._parentObject || (this._parentObject = new le(), this._parentObject.name = this._parentObjectName, e.add(this._parentObject)), this._parentObject;
  }
  addToScene(e) {
    return this._scene = e, this._scene.addEventListener(xs, this.onSceneUpdate), this._scene.addEventListener(Li, this.onSceneRecenter), this.getOrAddParentObject().add(this), this.updateSceneTransform(), this;
  }
  removeFromScene() {
    return this._scene === void 0 ? this : (this.getOrAddParentObject().remove(this), this._scene.removeEventListener(Li, this.onSceneRecenter), this._scene.removeEventListener(xs, this.onSceneUpdate), this._scene = void 0, this);
  }
  updateSceneTime(e, t) {
  }
  updateSceneTransform() {
  }
  remove(...e) {
    return this._scene !== void 0 && (e === void 0 || e.length === 0) ? (this.removeFromScene(), this) : super.remove(...e);
  }
}
const Is = class Is extends Tt {
  constructor() {
    super(...arguments), this.isGaussianSplattingScene = !0, this.lineStart = 0, this.lineCount = 0, this.lineWidth = 1, this.vertexCount = 0, this.splatPositions = null, this.splatCovA = null, this.splatCovB = null, this.splatColors = null, this.needSort = !1, this.needRemove = !1, this.readyToRender = !1, this.geometry = null;
  }
};
Is.useRGBACovariants = !0, Is.covBSItemSize = Is.useRGBACovariants ? 4 : 2;
let et = Is;
const Ua = "KHR_gaussian_splatting", ld = {
  POSITION: "position",
  COLOR_0: "color",
  _SCALE: "scale",
  _ROTATION: "rotation",
  _OPACITY: "opacity"
}, Ga = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
};
let hd = class {
  constructor(e, t) {
    this.parser = e, this.camera = t, this.name = Ua;
  }
  loadMesh(e) {
    const t = this.parser;
    this.camera;
    const s = t.json.extensionsUsed;
    if (!s || !s.includes(Ua))
      return;
    const r = t.json.meshes[e].primitives, o = [];
    return o.push(this.loadGeometries(r)), Promise.all(o).then(function(c) {
      const A = c[c.length - 1], l = [];
      function h(u, d) {
        const f = new et();
        return f.geometry = u, new Promise((g) => {
          g(f);
        });
      }
      for (let u = 0, d = A.length; u < d; u++) {
        const f = A[u];
        l.push(h(f));
      }
      return Promise.all(l).then((u) => {
        const d = new le();
        for (let f = 0, g = u.length; f < g; f++) {
          const p = u[f];
          d.add(p);
        }
        return t.associations.set(d, { meshes: e }), d;
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   */
  loadGeometries(e) {
    const t = this.parser, s = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      let o = this.addPrimitiveAttributes(new xe(), r, t);
      s.push(o);
    }
    return Promise.all(s);
  }
  /**
   * @param {BufferGeometry} geometry
   * @param {GLTF.Primitive} primitiveDef
   * @param {GLTFParser} parser
   * @return {Promise<BufferGeometry>}
   */
  addPrimitiveAttributes(e, t, s) {
    const n = t.attributes, i = [];
    function r(o, c) {
      return s.getDependency("accessor", o).then(function(A) {
        e.setAttribute(c, A);
      });
    }
    for (const o in n) {
      const c = ld[o] || o.toLowerCase();
      c in e.attributes || i.push(r(n[o], c));
    }
    if (t.indices !== void 0 && !e.index) {
      const o = s.getDependency("accessor", t.indices).then(function(c) {
        e.setIndex(c);
      });
      i.push(o);
    }
    return ud(e, t, s), Promise.all(i).then(function() {
      return e;
    });
  }
};
function ud(a, e, t) {
  const s = e.attributes, n = new Le();
  if (s.POSITION !== void 0) {
    const o = t.json.accessors[s.POSITION], c = o.min, A = o.max;
    if (c !== void 0 && A !== void 0) {
      if (n.set(new x(c[0], c[1], c[2]), new x(A[0], A[1], A[2])), o.normalized) {
        const l = Pa(Ga[o.componentType]);
        n.min.multiplyScalar(l), n.max.multiplyScalar(l);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const i = e.targets;
  if (i !== void 0) {
    const o = new x(), c = new x();
    for (let A = 0, l = i.length; A < l; A++) {
      const h = i[A];
      if (h.POSITION !== void 0) {
        const u = t.json.accessors[h.POSITION], d = u.min, f = u.max;
        if (d !== void 0 && f !== void 0) {
          if (c.setX(Math.max(Math.abs(d[0]), Math.abs(f[0]))), c.setY(Math.max(Math.abs(d[1]), Math.abs(f[1]))), c.setZ(Math.max(Math.abs(d[2]), Math.abs(f[2]))), u.normalized) {
            const g = Pa(Ga[u.componentType]);
            c.multiplyScalar(g);
          }
          o.max(c);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    n.expandByVector(o);
  }
  a.boundingBox = n;
  const r = new Fe();
  n.getCenter(r.center), r.radius = n.min.distanceTo(n.max) / 2, a.boundingSphere = r;
}
function Pa(a) {
  switch (a) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
let Na = class {
  static build(e = 1, t = !1) {
    const s = new xe();
    if (t) {
      s.setIndex([0, 1, 2, 0, 2, 3]);
      const o = new Float32Array(12), c = new oe(o, 3);
      s.setAttribute("position", c), c.setXYZ(0, -2, -2, 0), c.setXYZ(1, -2, 2, 0), c.setXYZ(2, 2, 2, 0), c.setXYZ(3, 2, -2, 0), c.needsUpdate = !0;
    } else {
      s.setIndex([0, 1, 2]);
      const o = new Float32Array(9), c = new oe(o, 3);
      s.setAttribute("position", c), c.setXYZ(0, -3, -2, 0), c.setXYZ(1, 3, -2, 0), c.setXYZ(2, 0, 4, 0), c.needsUpdate = !0;
    }
    const n = new rr().copy(s), i = new Float32Array(e);
    for (let o = 0; o < e; o++)
      i[o] = o;
    const r = new Qn(i, 1, !1);
    return r.setUsage(ko), n.setAttribute("splatIndex", r), n.instanceCount = 0, n;
  }
};
const dd = `
precision highp float;

#include <common>

// Attributes
attribute float splatIndex;
// attribute uint sceneIndex;

// Uniforms
uniform vec2 invViewport;
uniform vec2 dataTextureSize;
uniform vec2 focal;

uniform sampler2D covariancesATexture;
uniform sampler2D covariancesBTexture;
uniform sampler2D centersTexture;
uniform sampler2D colorsTexture;

#if SH_DEGREE > 0
uniform highp usampler2D shTexture0;
#endif
#if SH_DEGREE > 1
uniform highp usampler2D shTexture1;
#endif
#if SH_DEGREE > 2
uniform highp usampler2D shTexture2;
#endif

// Output
varying vec4 vColor;
varying vec2 vPosition;

mat3 transposeMatrix(mat3 matrix) {
    return mat3(matrix[0][0], matrix[1][0], matrix[2][0],
        matrix[0][1], matrix[1][1], matrix[2][1],
        matrix[0][2], matrix[1][2], matrix[2][2]);
}

vec2 getDataUV(float index, vec2 textureSize) {
    float y = floor(index / textureSize.x);
    float x = index - y * textureSize.x;
    return vec2((x + 0.5) / textureSize.x, (y + 0.5) / textureSize.y);
}

#if SH_DEGREE > 0
ivec2 getDataUVint(float index, vec2 textureSize) {
    float y = floor(index / textureSize.x);
    float x = index - y * textureSize.x;
    return ivec2(uint(x + 0.5), uint(y + 0.5));
}
#endif

struct Splat {
    vec4 center;
    vec4 color;
    vec4 covA;
    vec4 covB;
#if SH_DEGREE > 0
    uvec4 sh0; // 4 * 32bits uint
#endif
#if SH_DEGREE > 1
    uvec4 sh1;
#endif
#if SH_DEGREE > 2
    uvec4 sh2;
#endif
};

Splat readSplat(float splatIndex)
{
    Splat splat;
    vec2 splatUV = getDataUV(splatIndex, dataTextureSize);
    splat.center = texture2D(centersTexture, splatUV);
    splat.color = texture2D(colorsTexture, splatUV);
    splat.covA = texture2D(covariancesATexture, splatUV) * splat.center.w;
    splat.covB = texture2D(covariancesBTexture, splatUV) * splat.center.w;
#if SH_DEGREE > 0
    ivec2 splatUVint = getDataUVint(splatIndex, dataTextureSize);
    splat.sh0 = texelFetch(shTexture0, splatUVint, 0);
#endif
#if SH_DEGREE > 1
    splat.sh1 = texelFetch(shTexture1, splatUVint, 0);
#endif
#if SH_DEGREE > 2
    splat.sh2 = texelFetch(shTexture2, splatUVint, 0);
#endif

    return splat;
}
    
// no SH for GS and WebGL1
// dir = normalized(splat pos - cam pos)
vec3 computeColorFromSHDegree(vec3 dir, const vec3 sh[16])
{
    const float SH_C0 = 0.28209479;
    const float SH_C1 = 0.48860251;
    float SH_C2[5];
    SH_C2[0] = 1.092548430;
    SH_C2[1] = -1.09254843;
    SH_C2[2] = 0.315391565;
    SH_C2[3] = -1.09254843;
    SH_C2[4] = 0.546274215;
    
    float SH_C3[7];
    SH_C3[0] = -0.59004358;
    SH_C3[1] = 2.890611442;
    SH_C3[2] = -0.45704579;
    SH_C3[3] = 0.373176332;
    SH_C3[4] = -0.45704579;
    SH_C3[5] = 1.445305721;
    SH_C3[6] = -0.59004358;

	vec3 result = /*SH_C0 * */sh[0];

#if SH_DEGREE > 0
    float x = dir.x;
    float y = dir.y;
    float z = dir.z;
    result += - SH_C1 * y * sh[1] + SH_C1 * z * sh[2] - SH_C1 * x * sh[3];

#if SH_DEGREE > 1
    float xx = x * x, yy = y * y, zz = z * z;
    float xy = x * y, yz = y * z, xz = x * z;
    result += 
        SH_C2[0] * xy * sh[4] +
        SH_C2[1] * yz * sh[5] +
        SH_C2[2] * (2.0f * zz - xx - yy) * sh[6] +
        SH_C2[3] * xz * sh[7] +
        SH_C2[4] * (xx - yy) * sh[8];

#if SH_DEGREE > 2
    result += 
        SH_C3[0] * y * (3.0f * xx - yy) * sh[9] +
        SH_C3[1] * xy * z * sh[10] +
        SH_C3[2] * y * (4.0f * zz - xx - yy) * sh[11] +
        SH_C3[3] * z * (2.0f * zz - 3.0f * xx - 3.0f * yy) * sh[12] +
        SH_C3[4] * x * (4.0f * zz - xx - yy) * sh[13] +
        SH_C3[5] * z * (xx - yy) * sh[14] +
        SH_C3[6] * x * (xx - 3.0f * yy) * sh[15];
#endif
#endif
#endif

    return result;
}

vec4 decompose(uint value)
{
    vec4 components = vec4(
                        float((value            ) & 255u),
                        float((value >> uint( 8)) & 255u),
                        float((value >> uint(16)) & 255u),
                        float((value >> uint(24)) & 255u));

    return components * vec4(2./255.) - vec4(1.);
}

vec3 computeSH(Splat splat, vec3 color, vec3 dir)
{
    vec3 sh[16];
    
    sh[0] = color;

#if SH_DEGREE > 0
    vec4 sh00 = decompose(splat.sh0.x);
    vec4 sh01 = decompose(splat.sh0.y);
    vec4 sh02 = decompose(splat.sh0.z);

    sh[1] = vec3(sh00.x, sh00.y, sh00.z);
    sh[2] = vec3(sh00.w, sh01.x, sh01.y);
    sh[3] = vec3(sh01.z, sh01.w, sh02.x);
#endif
#if SH_DEGREE > 1
    vec4 sh03 = decompose(splat.sh0.w);
    vec4 sh04 = decompose(splat.sh1.x);
    vec4 sh05 = decompose(splat.sh1.y);

    sh[4] = vec3(sh02.y, sh02.z, sh02.w);
    sh[5] = vec3(sh03.x, sh03.y, sh03.z);
    sh[6] = vec3(sh03.w, sh04.x, sh04.y);
    sh[7] = vec3(sh04.z, sh04.w, sh05.x);
    sh[8] = vec3(sh05.y, sh05.z, sh05.w);
#endif
#if SH_DEGREE > 2
    vec4 sh06 = decompose(splat.sh1.z);
    vec4 sh07 = decompose(splat.sh1.w);
    vec4 sh08 = decompose(splat.sh2.x);
    vec4 sh09 = decompose(splat.sh2.y);
    vec4 sh10 = decompose(splat.sh2.z);
    vec4 sh11 = decompose(splat.sh2.w);

    sh[9] = vec3(sh06.x, sh06.y, sh06.z);
    sh[10] = vec3(sh06.w, sh07.x, sh07.y);
    sh[11] = vec3(sh07.z, sh07.w, sh08.x);
    sh[12] = vec3(sh08.y, sh08.z, sh08.w);
    sh[13] = vec3(sh09.x, sh09.y, sh09.z);
    sh[14] = vec3(sh09.w, sh10.x, sh10.y);
    sh[15] = vec3(sh10.z, sh10.w, sh11.x);    
#endif

    return computeColorFromSHDegree(dir, sh);
}

vec4 gaussianSplatting(vec2 meshPos, vec3 worldPos, vec2 scale, vec3 covA, vec3 covB, mat4 worldMatrix, mat4 viewMatrix, mat4 projectionMatrix)
{
    mat4 modelView = viewMatrix * worldMatrix;
    vec4 camspace = viewMatrix * vec4(worldPos,1.);
    vec4 pos2d = projectionMatrix * camspace;

    float bounds = 1.2 * pos2d.w;
    if (pos2d.z < -pos2d.w || pos2d.x < -bounds || pos2d.x > bounds
        || pos2d.y < -bounds || pos2d.y > bounds) {
        return vec4(0.0, 0.0, 2.0, 1.0);
    }

    mat3 Vrk = mat3(
        covA.x, covA.y, covA.z, 
        covA.y, covB.x, covB.y,
        covA.z, covB.y, covB.z
    );

    mat3 J = mat3(
        focal.x / camspace.z, 0., -(focal.x * camspace.x) / (camspace.z * camspace.z), 
        0., focal.y / camspace.z, -(focal.y * camspace.y) / (camspace.z * camspace.z), 
        0., 0., 0.
    );

    mat3 T = transpose(mat3(modelView)) * J;
    mat3 cov2d = transpose(T) * Vrk * T;

    float mid = (cov2d[0][0] + cov2d[1][1]) / 2.0;
    float radius = length(vec2((cov2d[0][0] - cov2d[1][1]) / 2.0, cov2d[0][1]));
    float lambda1 = mid + radius, lambda2 = mid - radius;

    if (lambda2 < 0.0)
    {
        return vec4(0.0, 0.0, 2.0, 1.0);
    }

    vec2 diagonalVector = normalize(vec2(cov2d[0][1], lambda1 - cov2d[0][0]));
    vec2 majorAxis = min(sqrt(2.0 * lambda1), 1024.0) * diagonalVector;
    vec2 minorAxis = min(sqrt(2.0 * lambda2), 1024.0) * vec2(diagonalVector.y, -diagonalVector.x);

    vec2 vCenter = vec2(pos2d);
    return vec4(
        vCenter 
        + ((meshPos.x * majorAxis
        + meshPos.y * minorAxis) * invViewport * pos2d.w) * scale, pos2d.zw);
}

void main () {
    Splat splat = readSplat(splatIndex);
    vec3 covA = splat.covA.xyz;
    vec3 covB = vec3(splat.covA.w, splat.covB.xy);

    vec4 worldPos = modelMatrix * vec4(splat.center.xyz, 1.0);

    vColor = splat.color;
    vPosition = position.xy;

    gl_Position = gaussianSplatting(vPosition, worldPos.xyz, vec2(1.,1.), covA, covB, modelMatrix, viewMatrix, projectionMatrix);

}

`, fd = `

precision highp float;
#include <common>

varying vec4 vColor;
varying vec2 vPosition;

vec4 gaussianColor(vec4 inColor)
{
    float A = -dot(vPosition, vPosition);
    if (A < -4.0) discard;
    float B = exp(A) * inColor.a;

    vec3 color = inColor.rgb;

    return vec4(color, B);
}


void main () { 

    gl_FragColor = gaussianColor(vColor);
}
`;
let Oa = class {
  /**
   * Build the Three.js material that is used to render the splats.
   * @param {number} dynamicMode If true, it means the scene geometry represented by this splat mesh is not stationary or
   *                             that the splat count might change
   * @param {boolean} enableOptionalEffects When true, allows for usage of extra properties and attributes in the shader for effects
   *                                        such as opacity adjustment. Default is false for performance reasons.
   * @param {boolean} antialiased If true, calculate compensation factor to deal with gaussians being rendered at a significantly
   *                              different resolution than that of their training
   * @param {number} maxScreenSpaceSplatSize The maximum clip space splat size
   * @param {number} splatScale Value by which all splats are scaled in screen-space (default is 1.0)
   * @param {number} pointCloudModeEnabled Render all splats as screen-space circles
   * @param {number} maxSphericalHarmonicsDegree Degree of spherical harmonics to utilize in rendering splats
   * @return {THREE.ShaderMaterial}
   */
  static build(e = 0) {
    const t = {
      SH_DEGREE: e
    }, s = {
      invViewport: {
        type: "v2",
        value: new H()
      },
      dataTextureSize: {
        type: "v2",
        value: new H()
      },
      focal: {
        type: "v2",
        value: new H()
      },
      covariancesATexture: {
        type: "t",
        value: null
      },
      covariancesBTexture: {
        type: "t",
        value: null
      },
      centersTexture: {
        type: "t",
        value: null
      },
      colorsTexture: {
        type: "t",
        value: null
      },
      shTexture0: {
        type: "t",
        value: null
      },
      shTexture1: {
        type: "t",
        value: null
      },
      shTexture2: {
        type: "t",
        value: null
      }
    };
    return new Me({
      uniforms: s,
      defines: t,
      vertexShader: dd,
      fragmentShader: fd,
      transparent: !0,
      alphaTest: 1,
      blending: Uo,
      depthTest: !0,
      depthWrite: !1,
      side: ft
    });
  }
  static updateUniforms(e, t, s) {
    var h;
    if (!s.material || !(s.material instanceof Me)) {
      console.warn("GaussianSplattingMaterial: No material found on mesh");
      return;
    }
    const n = s.material, i = n.uniforms, r = new H();
    e.getSize(r);
    const o = r.x, c = r.y;
    if (i.invViewport.value.set(1 / (o / 1), 1 / c), t) {
      const u = t.projectionMatrix.elements[0] * 0.5 * o, d = t.projectionMatrix.elements[5] * 0.5 * c;
      i.focal.value.set(u, d);
    }
    const l = s;
    if (l.covariancesATexture) {
      const u = l.covariancesATexture.image.width, d = l.covariancesATexture.image.height;
      if (i.dataTextureSize.value.set(u, d), i.covariancesATexture.value = l.covariancesATexture, i.covariancesBTexture.value = l.covariancesBTexture, i.centersTexture.value = l.centersTexture, i.colorsTexture.value = l.colorsTexture, l.shTextures)
        for (let f = 0; f < ((h = l.shTextures) == null ? void 0 : h.length); f++)
          i[`shTexture${f}`].value = l.shTextures[f];
    }
    n.uniformsNeedUpdate = !0;
  }
};
var Gt;
let gd = (Gt = class {
  constructor(e) {
    this._cameraPositionLast = new x(), this._cameraDirectionLast = new x(), this.splatMesh = e;
    const t = `(${Gt._CreateWorker.toString()})(self)`, s = URL.createObjectURL(new Blob([t], { type: "application/javascript" }));
    this.worker = new Worker(new URL(s)), this.worker.onmessage = (n) => {
      n.data;
    };
  }
  async sortSplatMesh(e, t, s = !1) {
    if (e.length === 0)
      return new Promise((d) => {
        d({
          visibleScenes: [],
          splatIndex: null,
          updateStart: 0,
          updateCount: 0,
          vertexCount: 0
        });
      });
    const n = new x(), i = new x();
    t.getWorldPosition(n);
    const r = new z();
    r.multiplyMatrices(t.matrixWorldInverse, this.splatMesh.matrixWorld), i.set(r.elements[2], r.elements[6], r.elements[10]).normalize();
    let o = !1, c = 0;
    const A = new Le();
    for (let d = 0; d < e.length; d++) {
      const f = e[d];
      c += f.vertexCount, d === 0 ? A.copy(f.boundingBox) : A.union(f.boundingBox), f.needSort && (o = !0);
    }
    const l = 1e-3;
    if (!o && !s && this._cameraPositionLast.distanceTo(n) < l && this._cameraDirectionLast.distanceTo(i) < l)
      return new Promise((d) => {
        d({
          visibleScenes: [],
          splatIndex: null,
          updateStart: 0,
          updateCount: 0,
          vertexCount: c
        });
      });
    this._cameraPositionLast.copy(n), this._cameraDirectionLast.copy(i);
    const h = {
      visibleScenes: e.map((d) => ({
        lineStart: d.lineStart,
        lineCount: d.lineCount,
        lineWidth: d.lineWidth,
        splatPositions: d.splatPositions,
        vertexCount: d.vertexCount
      })),
      cameraPosition: { x: n.x, y: n.y, z: n.z },
      cameraDirection: { x: i.x, y: i.y, z: i.z },
      boundMin: { x: A.min.x, y: A.min.y, z: A.min.z },
      boundMax: { x: A.max.x, y: A.max.y, z: A.max.z }
    }, u = [];
    return e.forEach((d) => {
      u.push(d.splatPositions.buffer);
    }), new Promise((d, f) => {
      const g = this.worker, p = (m) => {
        g.removeEventListener("error", p), g.removeEventListener("message", b), f(m);
      }, b = (m) => {
        g.removeEventListener("error", p), g.removeEventListener("message", b), m.data.visibleScenes.forEach((E, C) => {
          e[C].splatPositions = E.splatPositions, e[C].needSort = !1;
        }), d(m.data);
      };
      g.addEventListener("error", p), g.addEventListener("message", b), g.postMessage(h, u);
    });
  }
}, Gt._CreateWorker = function(e) {
  e.onmessage = (t) => {
    const {
      visibleScenes: s,
      cameraPosition: n,
      cameraDirection: i,
      boundMin: r,
      boundMax: o
    } = t.data, c = [];
    if (s.forEach((B) => {
      c.push(B.splatPositions.buffer);
    }), s.length === 0) {
      e.postMessage({
        visibleScenes: s,
        splatIndex: null,
        updateStart: 0,
        updateCount: 0,
        vertexCount: 0
      }, c);
      return;
    }
    const A = i.x, l = i.y, h = i.z;
    let u = 0;
    for (let B = 0; B < s.length; B++) {
      const w = s[B].vertexCount;
      u += w;
    }
    let d, f;
    for (let B = 0; B < 8; ++B) {
      const y = B & 1 ? r.x : o.x, w = B & 2 ? r.y : o.y, v = B & 4 ? r.z : o.z, S = y * A + w * l + v * h;
      B === 0 ? d = f = S : (d = Math.min(d, S), f = Math.max(f, S));
    }
    if (f - d < 1e-6) {
      e.postMessage({
        visibleScenes: s,
        splatIndex: null,
        updateStart: 0,
        updateCount: 0,
        vertexCount: 0
      }, c);
      return;
    }
    const p = new Int32Array(u), b = new Uint32Array(u), m = new Int32Array(u), E = new Uint32Array(u);
    let C = 0;
    for (let B = 0; B < s.length; B++) {
      const y = s[B], w = y.vertexCount, v = y.lineStart * y.lineWidth;
      for (let S = 0; S < w; ++S) {
        const L = y.splatPositions[S * 4 + 0], U = y.splatPositions[S * 4 + 1], F = y.splatPositions[S * 4 + 2], N = L * A + U * l + F * h - d;
        p[C] = Math.floor(N * 4096), b[C] = v + S, C++;
      }
    }
    C = u;
    const I = new Uint32Array(256);
    for (let B = 0; B < 32; B += 8) {
      I.fill(0);
      for (let w = 0; w < C; w++) {
        const v = p[w] >> B & 255;
        I[v] += 1;
      }
      let y = 0;
      for (let w = 0; w < I.length; w++) {
        const v = I[w];
        I[w] = y, y += v;
      }
      for (let w = 0; w < C; w++) {
        const v = p[w] >> B & 255, S = I[v];
        I[v] += 1, m[S] = p[w], E[S] = b[w];
      }
      p.set(m), b.set(E);
    }
    const _ = new Float32Array(u);
    for (let B = 0; B < u; B++)
      _[B] = b[B];
    c.push(_.buffer), e.postMessage({
      visibleScenes: s,
      splatIndex: _,
      updateStart: 0,
      updateCount: u,
      vertexCount: u
      //@ts-ignore
    }, c);
  };
}, Gt), pd = class extends De {
  /**
   * Creates a new gaussian splatting mesh
   */
  constructor(e, t, s) {
    super(), this._sorter = null, this._centersData = null, this._covariancesAData = null, this._covariancesBData = null, this._colorsData = null, this.covariancesATexture = null, this.covariancesBTexture = null, this.centersTexture = null, this.colorsTexture = null, this.shTextures = null, this.scenes = [], this.sortingScenes = [], this.renderingScenes = [], this.removeingScenes = [], this.sortRunning = !1, this.isGaussianSplattingMesh = !0, this.renderer = e, this.camera = t, this._textureSize = s, this._maxVertexCount = this._textureSize.x * this._textureSize.y, this.geometry = Na.build(this._maxVertexCount), this.material = Oa.build(), this._sorter = new gd(this), this._initTextures(!1);
  }
  async dispose() {
  }
  resizeTextures(e) {
    if (this._textureSize.equals(e))
      return;
    const t = this._colorsData;
    this._centersData;
    const s = this._covariancesAData, n = this._covariancesBData;
    this._textureSize.copy(e), this._initTextures(!0);
    const i = et.covBSItemSize;
    et.useRGBACovariants;
    const r = this.scenes;
    this.scenes = [];
    for (const A of r) {
      const l = A.vertexCount;
      A.splatCovA = new Uint16Array(s.buffer, A.lineStart * A.lineWidth * 4, A.vertexCount), A.splatCovB = new Uint16Array(n.buffer, A.lineStart * A.lineWidth * i, A.vertexCount), A.splatColors = new Uint8Array(t.buffer, A.lineStart * A.lineWidth * 4, A.vertexCount), this._updateSceneTextureLines(A);
      const h = A.lineStart, u = A.lineCount, d = A.lineWidth;
      this._copyData(this._centersData, A.splatPositions, d, 4, l, h, u), this._copyData(this._covariancesAData, A.splatCovA, d, 4, l, h, u), this._copyData(this._covariancesBData, A.splatCovB, d, i, l, h, u), this._copyData(this._colorsData, A.splatColors, d, 4, l, h, u), A.splatCovA = null, A.splatCovB = null, A.splatColors = null, A.needSort = !0, A.readyToRender = !0, this.scenes.push(A);
    }
    this.covariancesATexture.needsUpdate = !0, this.covariancesBTexture.needsUpdate = !0, this.centersTexture.needsUpdate = !0, this.colorsTexture.needsUpdate = !0, this._maxVertexCount = this._textureSize.x * this._textureSize.y;
    const o = this.geometry.attributes.splatIndex.array, c = this.geometry.instanceCount;
    this.geometry = Na.build(this._maxVertexCount);
    for (let A = 0; A < c; A++)
      this.geometry.attributes.splatIndex.array[A] = o[A];
    this.geometry.attributes.splatIndex.needsUpdate = !0;
  }
  updateSceneTexture(e) {
    return new Promise((t, s) => {
      if (!this._updateSceneTextureLines(e))
        return s("Failed to add new scene");
      this._updateSceneTexture(e), t();
    });
  }
  addSplatScene(e) {
    this.scenes.push(e);
  }
  removeSplatScene(e) {
    const t = this.scenes.indexOf(e);
    if (t !== -1) {
      if (this.sortingScenes.includes(e) || this.renderingScenes.includes(e)) {
        this.removeingScenes.push(e);
        return;
      }
      this.scenes.splice(t, 1);
    }
  }
  async runSplatSort(e) {
    if (this.removeingScenes.length > 0)
      for (let t = this.removeingScenes.length - 1; t >= 0; t--) {
        const s = this.removeingScenes[t];
        if (!this.renderingScenes.includes(s) && !this.sortingScenes.includes(s)) {
          const n = this.scenes.indexOf(s);
          this.scenes.splice(n, 1), this.removeingScenes.splice(t, 1);
        }
      }
    this.sortRunning || (this.sortRunning = !0, this.sortingScenes = e, this._sorter.sortSplatMesh(e, this.camera).then((t) => {
      if (t.updateCount > 0) {
        for (let s = t.updateStart; s < t.updateCount; s++)
          this.geometry.attributes.splatIndex.array[s] = t.splatIndex[s];
        this.geometry.attributes.splatIndex.addUpdateRange(t.updateStart, t.updateCount), this.geometry.attributes.splatIndex.needsUpdate = !0;
      }
      this.geometry.instanceCount = t.vertexCount, this.renderingScenes = this.sortingScenes;
    }).finally(() => {
      this.sortingScenes = [], this.sortRunning = !1;
    }));
  }
  _updateSceneTextureLines(e) {
    const t = this._textureSize.x, s = this._textureSize.y, n = e.vertexCount, i = Math.ceil(n / t), r = this._findBestLineStart(s, this.scenes, i);
    return r === null ? (console.error("No space available to add new line"), !1) : (e.lineCount = i, e.lineStart = r, e.lineWidth = t, e.readyToRender = !1, !0);
  }
  _findBestLineStart(e, t, s) {
    if (t.length === 0)
      return s <= e ? 0 : null;
    if (t.sort((i, r) => i.lineStart - r.lineStart), t[0].lineStart >= s)
      return 0;
    for (let i = 0; i < t.length - 1; i++) {
      const r = t[i].lineStart + t[i].lineCount;
      if (t[i + 1].lineStart - r >= s)
        return r;
    }
    const n = t[t.length - 1].lineStart + t[t.length - 1].lineCount;
    return e - n >= s ? n : null;
  }
  _initTextures(e) {
    const t = (c, A, l, h) => {
      const u = new ht(c, A, l, h, Ve, _t, fe, fe, ne, ne);
      return u.generateMipmaps = !1, u.needsUpdate = !0, u;
    }, s = (c, A, l, h) => {
      const u = new ht(c, A, l, h, ve, _t, fe, fe, ne, ne);
      return u.generateMipmaps = !1, u.needsUpdate = !0, u;
    }, n = (c, A, l, h) => {
      const u = new ht(c, A, l, h, ke, _t, fe, fe, ne, ne);
      return u.generateMipmaps = !1, u.needsUpdate = !0, u;
    }, i = this._textureSize, r = et.covBSItemSize, o = et.useRGBACovariants;
    this._centersData = new Float32Array(i.x * i.y * 4), this._covariancesAData = new Uint16Array(i.x * i.y * 4), this._covariancesBData = new Uint16Array(i.x * i.y * r), this._colorsData = new Uint8Array(i.x * i.y * 4), this.covariancesATexture = n(e ? this._covariancesAData : null, i.x, i.y, Ie), this.covariancesBTexture = n(e ? this._covariancesBData : null, i.x, i.y, o ? Ie : Bt), this.centersTexture = t(e ? this._centersData : null, i.x, i.y, Ie), this.colorsTexture = s(e ? this._colorsData : null, i.x, i.y, Ie);
  }
  _convert(e, t) {
    return t === ve ? e.UNSIGNED_BYTE : t === BA ? e.UNSIGNED_SHORT_4_4_4_4 : t === _A ? e.UNSIGNED_SHORT_5_5_5_1 : t === wA ? e.UNSIGNED_INT_5_9_9_9_REV : t === vA ? e.BYTE : t === SA ? e.SHORT : t === TA ? e.UNSIGNED_SHORT : t === QA ? e.INT : t === Go ? e.UNSIGNED_INT : t === Ve ? e.FLOAT : t === ke ? e.HALF_FLOAT : t === RA ? e.ALPHA : t === MA ? e.RGB : t === Ie ? e.RGBA : t === DA ? e.DEPTH_COMPONENT : t === LA ? e.DEPTH_STENCIL : t === qt ? e.RED : t === FA ? e.RED_INTEGER : t === Bt ? e.RG : t === kA ? e.RG_INTEGER : t === Po ? e.RGBA_INTEGER : t === UA ? e.UNSIGNED_INT_24_8 : e[t] !== void 0 ? e[t] : null;
  }
  _copyData(e, t, s, n, i, r, o) {
    const c = r * s * n;
    for (let A = 0; A < i; A++) {
      const l = A * n, h = A * n + c;
      for (let u = 0; u < n; u++)
        e[h + u] = t[l + u];
    }
  }
  _updateSceneTexture(e) {
    const t = (f, g, p, b, m) => {
      const E = this.renderer.getContext(), C = this._textureSize, I = this.renderer ? this.renderer.properties.get(f) : null;
      if (!I || !I.__webglTexture)
        f.needsUpdate = !0;
      else {
        const _ = this._convert(E, f.type), B = this._convert(E, f.format), y = E.getParameter(E.TEXTURE_BINDING_2D);
        E.bindTexture(E.TEXTURE_2D, I.__webglTexture), E.texSubImage2D(E.TEXTURE_2D, 0, 0, b, C.x, m, B, _, g), E.bindTexture(E.TEXTURE_2D, y);
      }
    }, s = e.lineStart, n = e.lineCount, i = e.lineWidth, r = e.vertexCount, o = et.covBSItemSize;
    this._copyData(this._centersData, e.splatPositions, i, 4, r, s, n), this._copyData(this._covariancesAData, e.splatCovA, i, 4, r, s, n), this._copyData(this._covariancesBData, e.splatCovB, i, o, r, s, n), this._copyData(this._colorsData, e.splatColors, i, 4, r, s, n), e.splatCovA = null, e.splatCovB = null, e.splatColors = null;
    const c = s * i, A = n * i, l = new Uint16Array(this._covariancesAData.buffer, c * 4 * Uint16Array.BYTES_PER_ELEMENT, A * 4), h = new Uint16Array(this._covariancesBData.buffer, c * o * Uint16Array.BYTES_PER_ELEMENT, A * o), u = new Uint8Array(this._colorsData.buffer, c * 4, A * 4), d = new Float32Array(this._centersData.buffer, c * 4 * Float32Array.BYTES_PER_ELEMENT, A * 4);
    t(this.covariancesATexture, l, i, s, n), t(this.covariancesBTexture, h, i, s, n), t(this.centersTexture, d, i, s, n), t(this.colorsTexture, u, i, s, n), e.readyToRender = !0;
  }
  onBeforeRender(e, t, s, n, i, r) {
    this.updateWorldMatrix(!0, !1), Oa.updateUniforms(e, s, this), super.onBeforeRender(e, t, s, n, i, r);
  }
};
function gs(a) {
  const e = a.array, t = a.itemSize, s = a.count, n = a.normalized;
  return { array: e, itemSize: t, count: s, normalized: n };
}
const wn = class wn {
  initialize(e = 1) {
    const t = `(${wn._CreateWorker.toString()})(self)`, s = URL.createObjectURL(new Blob([t], { type: "application/javascript" }));
    this._WorkerPool = new En(e, () => {
      const n = new Worker(s);
      return Promise.resolve(n);
    });
  }
  updateDataFromGeometryAsync(e) {
    const t = e.geometry;
    return t ? new Promise((s, n) => {
      const i = gs(t.attributes.position), r = gs(t.attributes.scale), o = gs(t.attributes.rotation), c = gs(t.attributes.color), A = t.attributes.opacity ? gs(t.attributes.opacity) : null, l = t.attributes.position.count;
      this._WorkerPool.push((h, u) => {
        const d = (g) => {
          h.removeEventListener("error", d), h.removeEventListener("message", f), n(g), u();
        }, f = (g) => {
          h.removeEventListener("error", d), h.removeEventListener("message", f);
          try {
            const { vertexCount: p, splatPositions: b, splatCovA: m, splatCovB: E, splatColors: C, boundingBox: I, boundingSphere: _ } = g.data;
            e.vertexCount = p, e.splatPositions = b, e.splatCovA = m, e.splatCovB = E, e.splatColors = C, e.boundingBox = new Le(new x(I.min[0], I.min[1], I.min[2]), new x(I.max[0], I.max[1], I.max[2])), e.boundingSphere = new Fe(new x(_.center[0], _.center[1], _.center[2]), _.radius), e.needSort = !0, e.geometry.dispose(), e.geometry = null, s();
          } catch (p) {
            n({ message: p });
          }
          u();
        };
        h.addEventListener("error", d), h.addEventListener("message", f), h.postMessage(
          {
            positionBuffer: i,
            scaleBuffer: r,
            rotationBuffer: o,
            colorBuffer: c,
            opacityBuffer: A,
            vertexCount: l,
            useRGBACovariants: et.useRGBACovariants,
            covBSItemSize: et.covBSItemSize
          },
          [i.array.buffer, r.array.buffer, o.array.buffer, c.array.buffer, ...A ? [A.array.buffer] : []]
        );
      });
    }) : Promise.reject("No geometry found.");
  }
};
wn._CreateWorker = function(e) {
  const t = /* @__PURE__ */ n();
  function s(l, h, u) {
    return Math.max(h, Math.min(u, l));
  }
  function n() {
    const l = new ArrayBuffer(4), h = new Float32Array(l), u = new Uint32Array(l), d = new Uint32Array(512), f = new Uint32Array(512);
    for (let m = 0; m < 256; ++m) {
      const E = m - 127;
      E < -27 ? (d[m] = 0, d[m | 256] = 32768, f[m] = 24, f[m | 256] = 24) : E < -14 ? (d[m] = 1024 >> -E - 14, d[m | 256] = 1024 >> -E - 14 | 32768, f[m] = -E - 1, f[m | 256] = -E - 1) : E <= 15 ? (d[m] = E + 15 << 10, d[m | 256] = E + 15 << 10 | 32768, f[m] = 13, f[m | 256] = 13) : E < 128 ? (d[m] = 31744, d[m | 256] = 64512, f[m] = 24, f[m | 256] = 24) : (d[m] = 31744, d[m | 256] = 64512, f[m] = 13, f[m | 256] = 13);
    }
    const g = new Uint32Array(2048), p = new Uint32Array(64), b = new Uint32Array(64);
    for (let m = 1; m < 1024; ++m) {
      let E = m << 13, C = 0;
      for (; (E & 8388608) === 0; )
        E <<= 1, C -= 8388608;
      E &= -8388609, C += 947912704, g[m] = E | C;
    }
    for (let m = 1024; m < 2048; ++m)
      g[m] = 939524096 + (m - 1024 << 13);
    for (let m = 1; m < 31; ++m)
      p[m] = m << 23;
    p[31] = 1199570944, p[32] = 2147483648;
    for (let m = 33; m < 63; ++m)
      p[m] = 2147483648 + (m - 32 << 23);
    p[63] = 3347054592;
    for (let m = 1; m < 64; ++m)
      m !== 32 && (b[m] = 1024);
    return {
      floatView: h,
      uint32View: u,
      baseTable: d,
      shiftTable: f,
      mantissaTable: g,
      exponentTable: p,
      offsetTable: b
    };
  }
  function i(l) {
    Math.abs(l) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), l = s(l, -65504, 65504), t.floatView[0] = l;
    const h = t.uint32View[0], u = h >> 23 & 511;
    return t.baseTable[u] + ((h & 8388607) >> t.shiftTable[u]);
  }
  function r(l, h) {
    switch (h.constructor) {
      case Float32Array:
        return l;
      case Uint32Array:
        return l / 4294967295;
      case Uint16Array:
        return l / 65535;
      case Uint8Array:
        return l / 255;
      case Int32Array:
        return Math.max(l / 2147483647, -1);
      case Int16Array:
        return Math.max(l / 32767, -1);
      case Int8Array:
        return Math.max(l / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function o(l, h, u) {
    let d = l.array[h * l.itemSize + u];
    return l.normalized && (d = r(d, l.array)), d;
  }
  function c(l, h, u) {
    const d = [u];
    for (let f = 0; f < u; f++)
      d[f] = o(l, h, f);
    return d;
  }
  function A(l) {
    let h = l[0] * l[0] + l[1] * l[1] + l[2] * l[2] + l[3] * l[3];
    if (h === 0) {
      l[0] = 0, l[1] = 0, l[2] = 0, l[3] = 1;
      return;
    }
    let u = 1 / Math.sqrt(h);
    l[0] *= u, l[1] *= u, l[2] *= u, l[3] *= u;
  }
  e.onmessage = async (l) => {
    const { positionBuffer: h, scaleBuffer: u, rotationBuffer: d, colorBuffer: f, opacityBuffer: g, vertexCount: p, useRGBACovariants: b, covBSItemSize: m } = l.data, E = 255, C = new Float32Array(4 * p), I = new Uint16Array(p * 4), _ = new Uint16Array(p * m), B = new Uint8Array(p * 4);
    let y = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE], w = [-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE];
    for (let L = 0; L < p; L++) {
      const U = c(h, L, 3), F = c(u, L, 3), N = c(d, L, 4), G = g ? [...c(f, L, 3), ...c(g, L, 1)] : c(f, L, 4);
      A(N);
      for (let ae = 0; ae < 3; ae++)
        U[ae] < y[ae] && (y[ae] = U[ae]), U[ae] > w[ae] && (w[ae] = U[ae]);
      const T = N[0], q = N[1], K = N[2], V = -N[3], te = T + T, $ = q + q, se = K + K, Be = T * te, Qt = T * $, pt = T * se, _e = q * $, Ke = q * se, Rt = K * se, ce = V * te, pe = V * $, Q = V * se, M = F[0] * 2, k = F[1] * 2, O = F[2] * 2, R = Array(12);
      R[0] = (1 - (_e + Rt)) * M, R[1] = (Qt + Q) * k, R[2] = (pt - pe) * O, R[4] = (Qt - Q) * M, R[5] = (1 - (Be + Rt)) * k, R[6] = (Ke + ce) * O, R[8] = (pt + pe) * M, R[9] = (Ke - ce) * k, R[10] = (1 - (Be + _e)) * O;
      const D = R, j = Array(6);
      j[0] = D[0] * D[0] + D[1] * D[1] + D[2] * D[2], j[1] = D[0] * D[4] + D[1] * D[5] + D[2] * D[6], j[2] = D[0] * D[8] + D[1] * D[9] + D[2] * D[10], j[3] = D[4] * D[4] + D[5] * D[5] + D[6] * D[6], j[4] = D[4] * D[8] + D[5] * D[9] + D[6] * D[10], j[5] = D[8] * D[8] + D[9] * D[9] + D[10] * D[10];
      let Y = -1e4;
      for (let ae = 0; ae < 6; ae++)
        Y = Math.max(Y, Math.abs(j[ae]));
      const Ae = L, ie = Ae * 4, We = Ae * m;
      C[4 * L + 0] = U[0], C[4 * L + 1] = U[1], C[4 * L + 2] = U[2], C[4 * L + 3] = Y, I[ie + 0] = i(j[0] / Y), I[ie + 1] = i(j[1] / Y), I[ie + 2] = i(j[2] / Y), I[ie + 3] = i(j[3] / Y), _[We + 0] = i(j[4] / Y), _[We + 1] = i(j[5] / Y), B[4 * L + 0] = G[0] * E, B[4 * L + 1] = G[1] * E, B[4 * L + 2] = G[2] * E, B[4 * L + 3] = G[3] * E;
    }
    const v = [(y[0] + w[0]) / 2, (y[1] + w[1]) / 2, (y[2] + w[2]) / 2], S = Math.max(w[0] - y[0], w[1] - y[1], w[2] - y[2]) / 2;
    e.postMessage(
      {
        vertexCount: p,
        splatPositions: C,
        splatCovA: I,
        splatCovB: _,
        splatColors: B,
        boundingBox: { min: y, max: w },
        boundingSphere: { center: v, radius: S }
      },
      [C.buffer, I.buffer, _.buffer, B.buffer]
    );
  };
};
let Vi = wn;
class md {
  constructor(e, t, s) {
    this.tiles = null, this.renderer = e, this.camera = t, this.textureSize = new H(8196, 4096), s && (this.textureSize.y = Math.ceil(s / 8196)), this.maxGaussianSplatingCount = this.textureSize.x * this.textureSize.y, this._onLoadModel = ({ tile: n, scene: i }) => {
      this.onLoadModel(n, i);
    }, this._onDisposeModel = ({ tile: n, scene: i }) => {
      this.onDisposeModel(n, i);
    }, this._onUpdateBefore = () => {
      this.onUpdateBefore();
    }, this._onUpdateAfter = () => {
      this.onUpdateAfter();
    }, this._onLoadTileSet = (n, i) => {
      this.onLoadTileSet(n, i);
    }, this._onTileVisibilityChange = ({ scene: n, tile: i, visible: r }) => {
      this.onTileVisibilityChange(n, i, r);
    };
  }
  init(e) {
    this.tiles = e, e.addEventListener("load-tile-set", this._onLoadTileSet), e.addEventListener("tile-visibility-change", this._onTileVisibilityChange), e.addEventListener("load-model", this._onLoadModel), e.addEventListener("dispose-model", this._onDisposeModel), e.addEventListener("update-before", this._onUpdateBefore), e.addEventListener("update-after", this._onUpdateAfter), this.bufferWorker = new Vi(), this.bufferWorker.initialize(e.parseQueue.maxJobs);
  }
  dispose() {
    const e = this.tiles;
    e.removeEventListener("load-model", this._onLoadModel), e.removeEventListener("dispose-model", this._onDisposeModel), e.removeEventListener("update-before", this._onUpdateBefore), e.removeEventListener("update-after", this._onUpdateAfter), e.removeEventListener("load-tile-set", this._onLoadTileSet), e.removeEventListener("tile-visibility-change", this._onTileVisibilityChange);
  }
  onLoadTileSet(e, t) {
    const s = this.tiles, n = new Le(), i = new Fe();
    if ("sphere" in s.root.boundingVolume) {
      const { x: r, y: o, z: c, radius: A } = s.root.boundingVolume.sphere;
      i.center.set(r, o, c), i.radius = A, i.getBoundingBox(n);
    } else if ("box" in s.root.boundingVolume) {
      const r = s.root.boundingVolume.box;
      n.min.set(r[0] - r[3], r[1] - r[7], r[2] - r[11]), n.max.set(r[0] + r[3], r[1] + r[7], r[2] + r[11]), n.getBoundingSphere(i);
    } else {
      const r = s.root.cached.transform, o = s.root.cached.boundingVolume, c = new z().copy(r).invert();
      o.getAABB(n), n.applyMatrix4(c), n.getBoundingSphere(i);
    }
    this.splatMesh = new pd(this.renderer, this.camera, this.textureSize), this.splatMesh.frustumCulled = !1, this.splatMesh.matrix = s.root.cached.transform, this.splatMesh.matrixAutoUpdate = !1, s.group.add(this.splatMesh), this.splatMesh.matrixWorldAutoUpdate = !0, this.splatMesh.boundingBox = n, this.splatMesh.boundingSphere = i;
  }
  // async parseToMesh(buffer, tile, extension, uri, abortSignal) {
  //     if (abortSignal.aborted) {
  //         return null;
  //     }
  //     if (extension === 'spz') {
  //     }
  // }
  processTileModel(e, t) {
    const s = [];
    return e.traverse((n) => {
      const i = n;
      if (i && i.isGaussianSplattingScene) {
        const r = this.bufferWorker.updateDataFromGeometryAsync(i).then(() => {
          var o;
          (o = this.splatMesh) == null || o.updateSceneTexture(i).catch((c) => {
            throw new Error(`Failed to updateSceneTexture, try more maxGaussianSplatingCount: ${this.maxGaussianSplatingCount}`);
          });
        });
        s.push(r);
      }
    }), Promise.all(s);
  }
  onTileVisibilityChange(e, t, s) {
    e.traverse((n) => {
      const i = n;
      i && i.isGaussianSplattingScene && (i.visible = s);
    });
  }
  onDisposeModel(e, t) {
    t.traverse((s) => {
      var i;
      const n = s;
      n && n.isGaussianSplattingScene && (n.visible = !1, (i = this.splatMesh) == null || i.removeSplatScene(n));
    });
  }
  onLoadModel(e, t) {
    t.traverse((s) => {
      var i;
      const n = s;
      n && n.isGaussianSplattingScene && (n.visible = !1, (i = this.splatMesh) == null || i.addSplatScene(n));
    });
  }
  onUpdateBefore() {
  }
  onUpdateAfter() {
    var n;
    const e = this.tiles, t = this.camera;
    if (!e || !t)
      return;
    let s = [];
    e.forEachLoadedModel((i, r) => {
      i && i.traverse((o) => {
        const c = o;
        c && c.isGaussianSplattingScene && c.visible && (c.readyToRender || console.log("splatScene not ready to render"), s.push(c));
      });
    }), (n = this.splatMesh) == null || n.runSplatSort(s);
  }
}
let jc = 1;
const yi = (a, e) => Math.abs(a.__depthFromRenderedParent - e.__depthFromRenderedParent) > jc ? a.__depthFromRenderedParent > e.__depthFromRenderedParent ? -1 : 1 : a.__error !== e.__error ? a.__error > e.__error ? 1 : -1 : a.__distanceFromCamera !== e.__distanceFromCamera ? a.__distanceFromCamera > e.__distanceFromCamera ? -1 : 1 : a.__inFrustum !== e.__inFrustum ? a.__inFrustum ? 1 : -1 : a.__used !== e.__used ? a.__used ? 1 : -1 : a.__depthFromRenderedParent !== e.__depthFromRenderedParent ? a.__depthFromRenderedParent > e.__depthFromRenderedParent ? -1 : 1 : 0;
class bd {
  constructor(e = { depthLevel: 1 }) {
    this.depthLevel = e.depthLevel;
  }
  set depthLevel(e) {
    jc = e;
  }
  init(e) {
    e.downloadQueue.priorityCallback = yi, e.parseQueue.priorityCallback = yi, e.processNodeQueue.priorityCallback = yi;
  }
}
const Ed = 0, Cd = 1, Id = 2, yd = 3, xd = 4, Bd = 5, _d = 6, wd = 7, vd = 8, Sd = 9, Td = 10, Qd = Object.freeze({
  NONE: Ed,
  SCREEN_ERROR: Cd,
  GEOMETRIC_ERROR: Id,
  DISTANCE: yd,
  DEPTH: xd,
  RELATIVE_DEPTH: Bd,
  IS_LEAF: _d,
  RANDOM_COLOR: wd,
  RANDOM_NODE_COLOR: vd,
  CUSTOM_COLOR: Sd,
  LOAD_ORDER: Td
});
class Rd extends Ot {
  static getColorModes() {
    return Qd;
  }
  constructor(e) {
    super(), this.options = e, this.group = void 0, this.tiles = void 0, this.centerLngLat = void 0;
  }
  addToScene(e) {
    const t = e.getWebGLRenderer(), s = e.getCamera(), n = new le();
    this.add(n);
    const i = kt.getDracoLoader(this.options.dracoLoaderPath), r = kt.getKtxLoader(this.options.ktx2LoaderPath), o = kt.getMeshoptDecoder(this.options.meshoptDecoder);
    r.detectSupport(t);
    const c = new ph(this.options.url);
    this.options.downloadMaxJobs && (c.downloadQueue.maxJobs = this.options.downloadMaxJobs), this.options.parseMaxJobs && (c.parseQueue.maxJobs = this.options.parseMaxJobs), c.registerPlugin(new Qh()), c.registerPlugin(new Bh()), c.registerPlugin(new Du()), c.registerPlugin(new Lu()), c.registerPlugin(new zi()), c.registerPlugin(new bd()), c.registerPlugin(new Eh());
    let A = [];
    return this.options.isGaussianSplatting && (c.registerPlugin(new md(t, s, this.options.maxGaussianSplatingCount)), A.push((l) => new hd(l, s))), c.registerPlugin(
      new Mu({
        rtc: !0,
        autoDispose: !1,
        dracoLoader: i,
        ktxLoader: r,
        meshoptDecoder: o,
        plugins: A
      })
    ), c.fetchOptions.mode = "cors", c.autoDisableRendererCulling = !0, c.setCamera(s), c.setResolutionFromRenderer(s, t), n.add(c.group), this.centerLngLat = void 0, c.addEventListener("load-tile-set", () => {
      this.updateTilesetTransform();
      const { onLoadTileset: l } = this.options;
      l && l(this);
    }), this.tiles = c, this.group = n, this.options.debug && this.setDebugParams(this.options.debug), this.options.display && this.setDisplayParams(this.options.display), super.addToScene(e);
  }
  removeFromScene() {
    return this.group && this.tiles && (this.group.remove(this.tiles.group), this.tiles.dispose(), this.remove(this.group)), this.group = void 0, this.tiles = void 0, super.removeFromScene();
  }
  updateSceneTime(e, t) {
    const s = this.tiles;
    s && (s.group.updateMatrixWorld(!0), s.update());
  }
  getCenterLngLat() {
    return this.centerLngLat || { lat: 0, lon: 0 };
  }
  updateTilesetTransform() {
    const e = this.group, t = this.tiles;
    if (!e || !t || !t.root)
      return;
    this._scene.getRefCenter();
    let s = { lat: 0, lon: 0, height: 0 };
    const n = t.root.transform;
    if (n) {
      const A = new x(n[12], n[13], n[14]);
      t.ellipsoid.getPositionToCartographic(A, s);
    } else {
      let A = new Le(), l = new Fe(), h = new x();
      if (t.getBoundingBox(A))
        A.getCenter(h);
      else if (t.getBoundingSphere(l))
        h = l.center;
      else
        return;
      t.ellipsoid.getPositionToCartographic(h, s);
    }
    const i = [ee.radToDeg(s.lon), ee.radToDeg(s.lat)], r = this._scene.toScenePosition(i);
    e.position.set(r.x, r.y, r.z);
    const c = t.ellipsoid.getObjectFrame(s.lat, s.lon, s.height, 0, 0, 0, new z(), 0).clone().invert();
    c.decompose(t.group.position, t.group.quaternion, t.group.scale), t.group.matrix.copy(c), this.centerLngLat = {
      lon: ee.radToDeg(s.lon),
      lat: ee.radToDeg(s.lat)
    };
  }
  setDebugParams(e) {
    if (!this.tiles)
      return;
    const t = this.tiles.getPluginByName("DEBUG_TILES_PLUGIN");
    if (!t)
      return;
    const s = { ...this.options.debug, ...e };
    s.enableDebug !== void 0 && (t.enabled = e.enableDebug), s.displayBoxBounds !== void 0 && (t.displayBoxBounds = e.displayBoxBounds), s.displaySphereBounds !== void 0 && (t.displaySphereBounds = e.displaySphereBounds), s.displayRegionBounds !== void 0 && (t.displayRegionBounds = e.displayRegionBounds), s.colorMode !== void 0 && (t.colorMode = e.colorMode), this.options.debug = s;
  }
  setDisplayParams(e) {
    if (!this.tiles)
      return;
    const t = this.tiles, s = { ...this.options.display, ...e };
    s.errorTarget !== void 0 && (t.errorTarget = s.errorTarget), s.displayActiveTiles !== void 0 && (t.displayActiveTiles = s.displayActiveTiles), s.autoDisableRendererCulling !== void 0 && (t.autoDisableRendererCulling = s.autoDisableRendererCulling), s.maxDepth !== void 0 && (t.maxDepth = s.maxDepth), s.optimizeRaycast !== void 0 && (t.optimizeRaycast = s.optimizeRaycast), this.options.display = s;
  }
}
class xi {
  static build(e = 1, t = !1) {
    const s = new xe();
    if (t) {
      s.setIndex([0, 1, 2, 0, 2, 3]);
      const o = new Float32Array(12), c = new oe(o, 3);
      s.setAttribute("position", c), c.setXYZ(0, -2, -2, 0), c.setXYZ(1, -2, 2, 0), c.setXYZ(2, 2, 2, 0), c.setXYZ(3, 2, -2, 0), c.needsUpdate = !0;
    } else {
      s.setIndex([0, 1, 2]);
      const o = new Float32Array(9), c = new oe(o, 3);
      s.setAttribute("position", c), c.setXYZ(0, -3, -2, 0), c.setXYZ(1, 3, -2, 0), c.setXYZ(2, 0, 4, 0), c.needsUpdate = !0;
    }
    const n = new rr().copy(s), i = new Float32Array(e), r = new Qn(i, 1, !1);
    return r.setUsage(ko), n.setAttribute("splatIndex", r), n.instanceCount = 0, n;
  }
}
const Md = `
precision highp float;

#include <common>

// Attributes
attribute float splatIndex;

// Uniforms
uniform vec2 invViewport;
uniform vec2 dataTextureSize;
uniform vec2 focal;

uniform sampler2D covariancesATexture;
uniform sampler2D covariancesBTexture;
uniform sampler2D centersTexture;
uniform sampler2D colorsTexture;

#if SH_DEGREE > 0
uniform highp usampler2D shTexture0;
#endif
#if SH_DEGREE > 1
uniform highp usampler2D shTexture1;
#endif
#if SH_DEGREE > 2
uniform highp usampler2D shTexture2;
#endif

// Output
varying vec4 vColor;
varying vec2 vPosition;

mat3 transposeMatrix(mat3 matrix) {
    return mat3(matrix[0][0], matrix[1][0], matrix[2][0],
        matrix[0][1], matrix[1][1], matrix[2][1],
        matrix[0][2], matrix[1][2], matrix[2][2]);
}

vec2 getDataUV(float index, vec2 textureSize) {
    float y = floor(index / textureSize.x);
    float x = index - y * textureSize.x;
    return vec2((x + 0.5) / textureSize.x, (y + 0.5) / textureSize.y);
}

#if SH_DEGREE > 0
ivec2 getDataUVint(float index, vec2 textureSize) {
    float y = floor(index / textureSize.x);
    float x = index - y * textureSize.x;
    return ivec2(uint(x + 0.5), uint(y + 0.5));
}
#endif

struct Splat {
    vec4 center;
    vec4 color;
    vec4 covA;
    vec4 covB;
#if SH_DEGREE > 0
    uvec4 sh0; // 4 * 32bits uint
#endif
#if SH_DEGREE > 1
    uvec4 sh1;
#endif
#if SH_DEGREE > 2
    uvec4 sh2;
#endif
};

Splat readSplat(float splatIndex)
{
    Splat splat;
    vec2 splatUV = getDataUV(splatIndex, dataTextureSize);
    splat.center = texture2D(centersTexture, splatUV);
    splat.color = texture2D(colorsTexture, splatUV);
    splat.covA = texture2D(covariancesATexture, splatUV) * splat.center.w;
    splat.covB = texture2D(covariancesBTexture, splatUV) * splat.center.w;
#if SH_DEGREE > 0
    ivec2 splatUVint = getDataUVint(splatIndex, dataTextureSize);
    splat.sh0 = texelFetch(shTexture0, splatUVint, 0);
#endif
#if SH_DEGREE > 1
    splat.sh1 = texelFetch(shTexture1, splatUVint, 0);
#endif
#if SH_DEGREE > 2
    splat.sh2 = texelFetch(shTexture2, splatUVint, 0);
#endif

    return splat;
}
    
// no SH for GS and WebGL1
// dir = normalized(splat pos - cam pos)
vec3 computeColorFromSHDegree(vec3 dir, const vec3 sh[16])
{
    const float SH_C0 = 0.28209479;
    const float SH_C1 = 0.48860251;
    float SH_C2[5];
    SH_C2[0] = 1.092548430;
    SH_C2[1] = -1.09254843;
    SH_C2[2] = 0.315391565;
    SH_C2[3] = -1.09254843;
    SH_C2[4] = 0.546274215;
    
    float SH_C3[7];
    SH_C3[0] = -0.59004358;
    SH_C3[1] = 2.890611442;
    SH_C3[2] = -0.45704579;
    SH_C3[3] = 0.373176332;
    SH_C3[4] = -0.45704579;
    SH_C3[5] = 1.445305721;
    SH_C3[6] = -0.59004358;

	vec3 result = /*SH_C0 * */sh[0];

#if SH_DEGREE > 0
    float x = dir.x;
    float y = dir.y;
    float z = dir.z;
    result += - SH_C1 * y * sh[1] + SH_C1 * z * sh[2] - SH_C1 * x * sh[3];

#if SH_DEGREE > 1
    float xx = x * x, yy = y * y, zz = z * z;
    float xy = x * y, yz = y * z, xz = x * z;
    result += 
        SH_C2[0] * xy * sh[4] +
        SH_C2[1] * yz * sh[5] +
        SH_C2[2] * (2.0f * zz - xx - yy) * sh[6] +
        SH_C2[3] * xz * sh[7] +
        SH_C2[4] * (xx - yy) * sh[8];

#if SH_DEGREE > 2
    result += 
        SH_C3[0] * y * (3.0f * xx - yy) * sh[9] +
        SH_C3[1] * xy * z * sh[10] +
        SH_C3[2] * y * (4.0f * zz - xx - yy) * sh[11] +
        SH_C3[3] * z * (2.0f * zz - 3.0f * xx - 3.0f * yy) * sh[12] +
        SH_C3[4] * x * (4.0f * zz - xx - yy) * sh[13] +
        SH_C3[5] * z * (xx - yy) * sh[14] +
        SH_C3[6] * x * (xx - 3.0f * yy) * sh[15];
#endif
#endif
#endif

    return result;
}

vec4 decompose(uint value)
{
    vec4 components = vec4(
                        float((value            ) & 255u),
                        float((value >> uint( 8)) & 255u),
                        float((value >> uint(16)) & 255u),
                        float((value >> uint(24)) & 255u));

    return components * vec4(2./255.) - vec4(1.);
}

vec3 computeSH(Splat splat, vec3 color, vec3 dir)
{
    vec3 sh[16];
    
    sh[0] = color;

#if SH_DEGREE > 0
    vec4 sh00 = decompose(splat.sh0.x);
    vec4 sh01 = decompose(splat.sh0.y);
    vec4 sh02 = decompose(splat.sh0.z);

    sh[1] = vec3(sh00.x, sh00.y, sh00.z);
    sh[2] = vec3(sh00.w, sh01.x, sh01.y);
    sh[3] = vec3(sh01.z, sh01.w, sh02.x);
#endif
#if SH_DEGREE > 1
    vec4 sh03 = decompose(splat.sh0.w);
    vec4 sh04 = decompose(splat.sh1.x);
    vec4 sh05 = decompose(splat.sh1.y);

    sh[4] = vec3(sh02.y, sh02.z, sh02.w);
    sh[5] = vec3(sh03.x, sh03.y, sh03.z);
    sh[6] = vec3(sh03.w, sh04.x, sh04.y);
    sh[7] = vec3(sh04.z, sh04.w, sh05.x);
    sh[8] = vec3(sh05.y, sh05.z, sh05.w);
#endif
#if SH_DEGREE > 2
    vec4 sh06 = decompose(splat.sh1.z);
    vec4 sh07 = decompose(splat.sh1.w);
    vec4 sh08 = decompose(splat.sh2.x);
    vec4 sh09 = decompose(splat.sh2.y);
    vec4 sh10 = decompose(splat.sh2.z);
    vec4 sh11 = decompose(splat.sh2.w);

    sh[9] = vec3(sh06.x, sh06.y, sh06.z);
    sh[10] = vec3(sh06.w, sh07.x, sh07.y);
    sh[11] = vec3(sh07.z, sh07.w, sh08.x);
    sh[12] = vec3(sh08.y, sh08.z, sh08.w);
    sh[13] = vec3(sh09.x, sh09.y, sh09.z);
    sh[14] = vec3(sh09.w, sh10.x, sh10.y);
    sh[15] = vec3(sh10.z, sh10.w, sh11.x);    
#endif

    return computeColorFromSHDegree(dir, sh);
}

vec4 gaussianSplatting(vec2 meshPos, vec3 worldPos, vec2 scale, vec3 covA, vec3 covB, mat4 worldMatrix, mat4 viewMatrix, mat4 projectionMatrix)
{
    mat4 modelView = viewMatrix * worldMatrix;
    vec4 camspace = viewMatrix * vec4(worldPos,1.);
    vec4 pos2d = projectionMatrix * camspace;

    float bounds = 1.2 * pos2d.w;
    if (pos2d.z < -pos2d.w || pos2d.x < -bounds || pos2d.x > bounds
        || pos2d.y < -bounds || pos2d.y > bounds) {
        return vec4(0.0, 0.0, 2.0, 1.0);
    }

    mat3 Vrk = mat3(
        covA.x, covA.y, covA.z, 
        covA.y, covB.x, covB.y,
        covA.z, covB.y, covB.z
    );

    mat3 J = mat3(
        focal.x / camspace.z, 0., -(focal.x * camspace.x) / (camspace.z * camspace.z), 
        0., focal.y / camspace.z, -(focal.y * camspace.y) / (camspace.z * camspace.z), 
        0., 0., 0.
    );

    mat3 T = transpose(mat3(modelView)) * J;
    mat3 cov2d = transpose(T) * Vrk * T;

    float mid = (cov2d[0][0] + cov2d[1][1]) / 2.0;
    float radius = length(vec2((cov2d[0][0] - cov2d[1][1]) / 2.0, cov2d[0][1]));
    float lambda1 = mid + radius, lambda2 = mid - radius;

    if (lambda2 < 0.0)
    {
        return vec4(0.0, 0.0, 2.0, 1.0);
    }

    vec2 diagonalVector = normalize(vec2(cov2d[0][1], lambda1 - cov2d[0][0]));
    vec2 majorAxis = min(sqrt(2.0 * lambda1), 1024.0) * diagonalVector;
    vec2 minorAxis = min(sqrt(2.0 * lambda2), 1024.0) * vec2(diagonalVector.y, -diagonalVector.x);

    vec2 vCenter = vec2(pos2d);
    return vec4(
        vCenter 
        + ((meshPos.x * majorAxis
        + meshPos.y * minorAxis) * invViewport * pos2d.w) * scale, pos2d.zw);
}

void main () {
    Splat splat = readSplat(splatIndex);
    vec3 covA = splat.covA.xyz;
    vec3 covB = vec3(splat.covA.w, splat.covB.xy);

    vec4 worldPos = modelMatrix * vec4(splat.center.xyz, 1.0);

    vColor = splat.color;
    vPosition = position.xy;

    gl_Position = gaussianSplatting(vPosition, worldPos.xyz, vec2(1.,1.), covA, covB, modelMatrix, viewMatrix, projectionMatrix);

}

`, Dd = `

precision highp float;
#include <common>

varying vec4 vColor;
varying vec2 vPosition;

vec4 gaussianColor(vec4 inColor)
{
    float A = -dot(vPosition, vPosition);
    if (A < -4.0) discard;
    float B = exp(A) * inColor.a;

    vec3 color = inColor.rgb;

    return vec4(color, B);
}


void main () { 

    gl_FragColor = gaussianColor(vColor);
}
`;
class Ys {
  /**
   * Build the Three.js material that is used to render the splats.
   * @param {number} dynamicMode If true, it means the scene geometry represented by this splat mesh is not stationary or
   *                             that the splat count might change
   * @param {boolean} enableOptionalEffects When true, allows for usage of extra properties and attributes in the shader for effects
   *                                        such as opacity adjustment. Default is false for performance reasons.
   * @param {boolean} antialiased If true, calculate compensation factor to deal with gaussians being rendered at a significantly
   *                              different resolution than that of their training
   * @param {number} maxScreenSpaceSplatSize The maximum clip space splat size
   * @param {number} splatScale Value by which all splats are scaled in screen-space (default is 1.0)
   * @param {number} pointCloudModeEnabled Render all splats as screen-space circles
   * @param {number} maxSphericalHarmonicsDegree Degree of spherical harmonics to utilize in rendering splats
   * @return {THREE.ShaderMaterial}
   */
  static build(e = 0) {
    const t = {
      SH_DEGREE: e
    }, s = {
      invViewport: {
        type: "v2",
        value: new H()
      },
      dataTextureSize: {
        type: "v2",
        value: new H()
      },
      focal: {
        type: "v2",
        value: new H()
      },
      covariancesATexture: {
        type: "t",
        value: null
      },
      covariancesBTexture: {
        type: "t",
        value: null
      },
      centersTexture: {
        type: "t",
        value: null
      },
      colorsTexture: {
        type: "t",
        value: null
      },
      shTexture0: {
        type: "t",
        value: null
      },
      shTexture1: {
        type: "t",
        value: null
      },
      shTexture2: {
        type: "t",
        value: null
      }
    };
    return new Me({
      uniforms: s,
      defines: t,
      vertexShader: Md,
      fragmentShader: Dd,
      transparent: !0,
      alphaTest: 1,
      blending: Uo,
      depthTest: !0,
      depthWrite: !1,
      side: ft
    });
  }
  static updateUniforms(e, t, s) {
    var h;
    if (!s.material || !(s.material instanceof Me)) {
      console.warn("GaussianSplattingMaterial: No material found on mesh");
      return;
    }
    const n = s.material, i = n.uniforms, r = new H();
    e.getSize(r);
    const o = r.x, c = r.y;
    if (i.invViewport.value.set(1 / (o / 1), 1 / c), t) {
      const u = t.projectionMatrix.elements[0] * 0.5 * o, d = t.projectionMatrix.elements[5] * 0.5 * c;
      i.focal.value.set(u, d);
    }
    const l = s;
    if (l.covariancesATexture) {
      const u = l.covariancesATexture.image.width, d = l.covariancesATexture.image.height;
      if (i.dataTextureSize.value.set(u, d), i.covariancesATexture.value = l.covariancesATexture, i.covariancesBTexture.value = l.covariancesBTexture, i.centersTexture.value = l.centersTexture, i.colorsTexture.value = l.colorsTexture, l.shTextures)
        for (let f = 0; f < ((h = l.shTextures) == null ? void 0 : h.length); f++)
          i[`shTexture${f}`].value = l.shTextures[f];
    }
    n.uniformsNeedUpdate = !0;
  }
}
function qi(a, e, t) {
  try {
    const s = a.next();
    s.done ? e(s) : s.value ? s.value.then(() => {
      s.value = void 0, e(
        //@ts-ignore
        s
      );
    }, t) : e(s);
  } catch (s) {
    t(s);
  }
}
function Cn(a = 25) {
  let e;
  return (t, s, n) => {
    const i = performance.now();
    e === void 0 || i - e > a ? (e = i, setTimeout(() => {
      qi(t, s, n);
    }, 0)) : qi(t, s, n);
  };
}
function Vc(a, e, t, s, n) {
  const i = () => {
    let r;
    const o = (c) => {
      c.done ? t(c.value) : r === void 0 ? r = !0 : i();
    };
    do
      r = void 0, !n || !n.aborted ? e(a, o, s) : s(new Error("Aborted")), r === void 0 && (r = !1);
    while (r);
  };
  i();
}
function Ha(a, e) {
  let t;
  return Vc(
    a,
    qi,
    (s) => t = s,
    (s) => {
      throw s;
    },
    e
  ), t;
}
function In(a, e, t) {
  return new Promise((s, n) => {
    Vc(a, e, s, n, t);
  });
}
const Ge = class Ge {
  constructor() {
    this.vertexCount = 0, this.hasInit = !1, this.abortController = null, this.onmessage = null;
  }
  terminate() {
    this.abortController && (this.abortController.abort(), this.abortController = null), this.vertexCount = 0, this.positions = null, this.splatIndex = null, this.onmessage = null;
  }
  _initSortData() {
    if (this.hasInit)
      return;
    const e = this.vertexCount;
    e < 0 || (this.depthValues = new Int32Array(e), this.splatIndex = new Uint32Array(e), this.tempDepths = new Int32Array(e), this.tempIndices = new Uint32Array(e), this.hasInit = !0);
  }
  *_sortData(e, t) {
    this.hasInit || this._initSortData();
    const s = this.positions, n = this.vertexCount, i = this.depthValues, r = this.splatIndex, o = this.tempDepths, c = this.tempIndices;
    let A = 1 / 0;
    for (let u = 0; u < n; u++) {
      r[u] = u;
      const d = e[2] * s[4 * u] + e[6] * s[4 * u + 1] + e[10] * s[4 * u + 2], f = Math.floor(d * 4096);
      i[u] = f, A = Math.min(A, f);
    }
    t && (Ge._iWorkCount += n, Ge._iWorkCount > Ge._SplatBatchSize && (Ge._iWorkCount = 0, yield));
    const l = -A;
    for (let u = 0; u < n; u++)
      i[u] += l;
    const h = new Uint32Array(256);
    for (let u = 0; u < 32; u += 8) {
      h.fill(0);
      for (let f = 0; f < n; f++) {
        const g = i[f] >> u & 255;
        h[g] += 1;
      }
      let d = 0;
      for (let f = 0; f < h.length; f++) {
        const g = h[f];
        h[f] = d, d += g;
      }
      for (let f = 0; f < n; f++) {
        const g = i[f] >> u & 255, p = h[g];
        h[g] += 1, o[p] = i[f], c[p] = r[f];
      }
      i.set(o), r.set(c), t && (Ge._iWorkCount += n, Ge._iWorkCount > Ge._SplatBatchSize && (Ge._iWorkCount = 0, yield));
    }
  }
  init(e, t) {
    this.positions = e, this.vertexCount = t, this._initSortData();
  }
  async sortDataAsync(e) {
    this.abortController = new AbortController();
    const t = this.abortController.signal;
    return In(this._sortData(e, !0), Cn(), t).then(() => {
      this.onmessage && this.onmessage(this.splatIndex);
    }).catch((s) => {
      console.error(s);
    }).finally(() => {
      this.abortController = null;
    });
  }
};
Ge._SplatBatchSize = 327680, Ge._iWorkCount = 0;
let Ki = Ge;
function Vt(a) {
  return ps.toHalfFloat(a);
}
const $e = class $e extends De {
  /**
   * Creates a new gaussian splatting mesh
   * @param name defines the name of the mesh
   * @param url defines the url to load from (optional)
   * @param scene defines the hosting scene (optional)
   * @param keepInRam keep datas in ram for editing purpose
   */
  constructor() {
    super(), this._vertexCount = 0, this._worker = null, this._frameIdLastUpdate = -1, this._frameIdThisUpdate = 0, this._cameraMatrix = null, this._modelViewMatrix = null, this._canPostToWorker = !1, this._readyToDisplay = !1, this._covariancesATexture = null, this._covariancesBTexture = null, this._centersTexture = null, this._colorsTexture = null, this._splatPositions = null, this._splatPositions2 = null, this._splatIndex = null, this._splatIndex2 = null, this._shTextures = null, this._splatsData = null, this._sh = null, this._keepInRam = !1, this._oldDirection = new x(), this._useRGBACovariants = !1, this._tmpCovariances = [0, 0, 0, 0, 0, 0], this._sortIsDirty = !1, this._shDegree = 0, this.isGaussianSplattingMesh = !0, this._tempQuaternion = new qe(), this._tempPosition = new x(), this._tempScale = new x(), this._tempColor = new Uint8Array(4), this._tempMatrix = new z(), this.geometry = xi.build(), this.material = Ys.build(), this.setEnabled(!1), this._useRGBACovariants = !0;
  }
  /**
   * SH degree. 0 = no sh (default). 1 = 3 parameters. 2 = 8 parameters. 3 = 15 parameters.
   */
  get shDegree() {
    return this._shDegree;
  }
  /**
   * returns the splats data array buffer that contains in order : postions (3 floats), size (3 floats), color (4 bytes), orientation quaternion (4 bytes)
   */
  get splatsData() {
    return this._splatsData;
  }
  /**
   * Gets the covariancesA texture
   */
  get covariancesATexture() {
    return this._covariancesATexture;
  }
  /**
   * Gets the covariancesB texture
   */
  get covariancesBTexture() {
    return this._covariancesBTexture;
  }
  /**
   * Gets the centers texture
   */
  get centersTexture() {
    return this._centersTexture;
  }
  /**
   * Gets the colors texture
   */
  get colorsTexture() {
    return this._colorsTexture;
  }
  /**
   * Gets the SH textures
   */
  get shTextures() {
    return this._shTextures;
  }
  setEnabled(e) {
    this.visible = e;
  }
  /** @internal */
  _postToWorker(e = !1) {
    const t = this._frameIdThisUpdate;
    if ((e || t !== this._frameIdLastUpdate) && this._worker && this._cameraMatrix && this._canPostToWorker) {
      const s = this._cameraMatrix;
      this._modelViewMatrix = new z().multiplyMatrices(s, this.matrixWorld);
      let n = s.clone().invert(), i = new z().multiplyMatrices(n, this.matrixWorld);
      const r = new x(0, 0, 1).transformDirection(i), o = r.dot(this._oldDirection);
      if (e || Math.abs(o - 1) >= 0.01)
        return this._oldDirection.copy(r), this._frameIdLastUpdate = t, this._canPostToWorker = !1, this._worker.sortDataAsync(this._modelViewMatrix.elements);
    }
  }
  onBeforeRender(e, t, s, n, i, r) {
    this._frameIdThisUpdate = e.info.render.frame, this.sortDataAsync(s), Ys.updateUniforms(e, s, this), super.onBeforeRender(e, t, s, n, i, r);
  }
  /**
   * Loads a .splat Gaussian Splatting array buffer asynchronously
   * @param data arraybuffer containing splat file
   * @returns a promise that resolves when the operation is complete
   */
  loadDataAsync(e) {
    return this.updateDataAsync(e);
  }
  /**
   * Releases resources associated with this mesh.
   * @param doNotRecurse Set to true to not recurse into each children (recurse into each children by default)
   */
  dispose() {
    var e, t, s, n, i;
    (e = this._covariancesATexture) == null || e.dispose(), (t = this._covariancesBTexture) == null || t.dispose(), (s = this._centersTexture) == null || s.dispose(), (n = this._colorsTexture) == null || n.dispose(), this._shTextures && this._shTextures.forEach((r) => {
      r.dispose();
    }), this._covariancesATexture = null, this._covariancesBTexture = null, this._centersTexture = null, this._colorsTexture = null, this._shTextures = null, (i = this._worker) == null || i.terminate(), this._worker = null;
  }
  _copyTextures(e) {
    var t, s, n, i;
    this._covariancesATexture = (t = e.covariancesATexture) == null ? void 0 : t.clone(), this._covariancesBTexture = (s = e.covariancesBTexture) == null ? void 0 : s.clone(), this._centersTexture = (n = e.centersTexture) == null ? void 0 : n.clone(), this._colorsTexture = (i = e.colorsTexture) == null ? void 0 : i.clone(), e._shTextures && (this._shTextures = [], this._shTextures.forEach((r) => {
      var o;
      (o = this._shTextures) == null || o.push(r.clone());
    }));
  }
  /**
   * Returns a new Mesh object generated from the current mesh properties.
   * @param name is a string, the name given to the new mesh
   * @returns a new Gaussian Splatting Mesh
   */
  //@ts-ignore
  clone(e) {
    const t = new $e();
    return t.geometry = this.geometry.clone(), t.material = this.material.clone(), t._vertexCount = this._vertexCount, t._copyTextures(this), t._splatPositions = this._splatPositions, t._readyToDisplay = !1, t._instanciateWorker(), t._vertexCount = t._vertexCount, t;
  }
  _makeSplatFromComonents(e, t, s, n, i, r, o, c, A, l, h) {
    i.w = -i.w, n = n.multiplyScalar(2);
    const u = this._tempMatrix.elements, d = this._useRGBACovariants ? 4 : 2;
    this._splatPositions[4 * e + 0] = s.x, this._splatPositions[4 * e + 1] = s.y, this._splatPositions[4 * e + 2] = s.z, this._splatPositions2[4 * e + 0] = s.x, this._splatPositions2[4 * e + 1] = s.y, this._splatPositions2[4 * e + 2] = s.z, l.min(s), h.max(s);
    const f = i.x, g = i.y, p = i.z, b = i.w, m = f + f, E = g + g, C = p + p, I = f * m, _ = f * E, B = f * C, y = g * E, w = g * C, v = p * C, S = b * m, L = b * E, U = b * C, F = n.x, N = n.y, G = n.z;
    u[0] = (1 - (y + v)) * F, u[1] = (_ + U) * N, u[2] = (B - L) * G, u[4] = (_ - U) * F, u[5] = (1 - (I + v)) * N, u[6] = (w + S) * G, u[8] = (B + L) * F, u[9] = (w - S) * N, u[10] = (1 - (I + y)) * G;
    const T = u, q = this._tmpCovariances;
    q[0] = T[0] * T[0] + T[1] * T[1] + T[2] * T[2], q[1] = T[0] * T[4] + T[1] * T[5] + T[2] * T[6], q[2] = T[0] * T[8] + T[1] * T[9] + T[2] * T[10], q[3] = T[4] * T[4] + T[5] * T[5] + T[6] * T[6], q[4] = T[4] * T[8] + T[5] * T[9] + T[6] * T[10], q[5] = T[8] * T[8] + T[9] * T[9] + T[10] * T[10];
    let K = -1e4;
    for (let te = 0; te < 6; te++)
      K = Math.max(K, Math.abs(q[te]));
    this._splatPositions[4 * e + 3] = K, this._splatPositions2[4 * e + 3] = K;
    const V = K;
    o[t * 4 + 0] = Vt(q[0] / V), o[t * 4 + 1] = Vt(q[1] / V), o[t * 4 + 2] = Vt(q[2] / V), o[t * 4 + 3] = Vt(q[3] / V), c[t * d + 0] = Vt(q[4] / V), c[t * d + 1] = Vt(q[5] / V), A[t * 4 + 0] = r[0], A[t * 4 + 1] = r[1], A[t * 4 + 2] = r[2], A[t * 4 + 3] = r[3];
  }
  _makeSplatFromAttribute(e, t, s, n, i, r, o, c, A, l, h, u, d = !1) {
    const f = e, g = this._tempPosition, p = this._tempQuaternion, b = this._tempScale, m = this._tempColor, E = d ? 255 : 1;
    g.x = s.getX(f), g.y = s.getY(f), g.z = s.getZ(f), b.x = n.getX(f), b.y = n.getY(f), b.z = n.getZ(f), p.x = i.getX(f), p.y = i.getY(f), p.z = i.getZ(f), p.w = i.getW(f), p.normalize(), m[0] = r.getX(f) * E, m[1] = r.getY(f) * E, m[2] = r.getZ(f) * E, m[3] = (o ? o.getX(f) : r.getW(f)) * E, this._makeSplatFromComonents(e, t, g, b, p, m, c, A, l, h, u);
  }
  _makeSplatFromBuffer(e, t, s, n, i, r, o, c, A) {
    const l = this._tempPosition, h = this._tempQuaternion, u = this._tempScale, d = this._tempColor;
    l.x = s[8 * e + 0], l.y = s[8 * e + 1], l.z = s[8 * e + 2], u.x = s[8 * e + 3 + 0], u.y = s[8 * e + 3 + 1], u.z = s[8 * e + 3 + 2], h.x = (n[32 * e + 28 + 1] - 127.5) / 127.5, h.y = (n[32 * e + 28 + 2] - 127.5) / 127.5, h.z = (n[32 * e + 28 + 3] - 127.5) / 127.5, h.w = (n[32 * e + 28 + 0] - 127.5) / 127.5, h.normalize(), d[0] = n[32 * e + 24 + 0], d[1] = n[32 * e + 24 + 1], d[2] = n[32 * e + 24 + 2], d[3] = n[32 * e + 24 + 3], this._makeSplatFromComonents(e, t, l, u, h, d, i, r, o, c, A);
  }
  _updateTextures(e, t, s, n) {
    const i = this._getTextureSize(this._vertexCount), r = (l, h, u, d) => {
      const f = new ht(l, h, u, d, Ve, _t, fe, fe, ne, ne);
      return f.generateMipmaps = !1, f.needsUpdate = !0, f;
    }, o = (l, h, u, d) => {
      const f = new ht(l, h, u, d, ve, _t, fe, fe, ne, ne);
      return f.generateMipmaps = !1, f.needsUpdate = !0, f;
    }, c = (l, h, u, d) => {
      const f = new ht(l, h, u, d, Go, _t, fe, fe, $t, $t);
      return f.generateMipmaps = !1, f.needsUpdate = !0, f;
    }, A = (l, h, u, d) => {
      const f = new ht(l, h, u, d, ke, _t, fe, fe, ne, ne);
      return f.generateMipmaps = !1, f.needsUpdate = !0, f;
    };
    this._covariancesATexture = A(e, i.x, i.y, Ie), this._covariancesBTexture = A(t, i.x, i.y, this._useRGBACovariants ? Ie : Bt), this._centersTexture = r(this._splatPositions, i.x, i.y, Ie), this._colorsTexture = o(s, i.x, i.y, Ie), n && (this._shTextures = [], n.forEach((l) => {
      const h = new Uint32Array(l.buffer), u = c(h, i.x, i.y, Po);
      u.wrapS = fe, u.wrapT = fe, this._shTextures.push(u);
    })), this._instanciateWorker();
  }
  _updateBoundingInfo(e, t) {
    this.boundingBox = new Le(e, t), this.boundingSphere = this.boundingBox.getBoundingSphere(new Fe());
  }
  *_updateData(e, t, s) {
    this._covariancesATexture || (this._readyToDisplay = !1);
    const n = new Uint8Array(e), i = new Float32Array(n.buffer);
    this._keepInRam && (this._splatsData = e, s && (this._sh = s)), this._shDegree = s ? s.length : 0;
    const r = n.length / $e._RowOutputLength;
    r != this._vertexCount && (this._vertexCount = r, this.geometry = xi.build(this._vertexCount), this.material = Ys.build(this._shDegree), this._updateSplatIndexBuffer(this._vertexCount));
    const o = this._getTextureSize(r), c = o.x * o.y, A = o.y;
    o.x * A, this._splatPositions = new Float32Array(4 * c), this._splatPositions2 = new Float32Array(4 * r);
    const l = new Uint16Array(c * 4), h = new Uint16Array((this._useRGBACovariants ? 4 : 2) * c), u = new Uint8Array(c * 4), d = new x(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), f = new x(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
    {
      for (let g = 0; g < r; g++)
        this._makeSplatFromBuffer(g, g, i, n, l, h, u, d, f), t && g % $e._SplatBatchSize === 0 && (yield);
      this._updateTextures(l, h, u, s), this._updateBoundingInfo(d, f), this.setEnabled(!0);
    }
    this._postToWorker(!0);
  }
  /**
   * Update asynchronously the buffer
   * @param data array buffer containing center, color, orientation and scale of splats
   * @param sh optional array of uint8 array for SH data
   * @returns a promise
   */
  async updateDataAsync(e, t) {
    return In(this._updateData(e, !0, t), Cn());
  }
  /**
   * @experimental
   * Update data from GS (position, orientation, color, scaling)
   * @param data array that contain all the datas
   * @param sh optional array of uint8 array for SH data
   */
  updateData(e, t) {
    Ha(this._updateData(e, !1, t));
  }
  *_updateDataFromGeometry(e, t) {
    this._covariancesATexture || (this._readyToDisplay = !1);
    const s = e.getAttribute("position"), n = e.getAttribute("scale"), i = e.getAttribute("color"), r = e.getAttribute("opacity"), o = e.getAttribute("rotation");
    let c = i.array instanceof Float32Array, A = i.normalized;
    i.normalized = !1, this._shDegree = 0;
    const l = s.count;
    l != this._vertexCount && (this._vertexCount = l, this.geometry = xi.build(this._vertexCount), this.material = Ys.build(this._shDegree), this._updateSplatIndexBuffer(this._vertexCount));
    const h = this._getTextureSize(l), u = h.x * h.y, d = h.y;
    h.x * d, this._splatPositions = new Float32Array(4 * u), this._splatPositions2 = new Float32Array(4 * l);
    const f = new Uint16Array(u * 4), g = new Uint16Array((this._useRGBACovariants ? 4 : 2) * u), p = new Uint8Array(u * 4), b = new x(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), m = new x(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
    {
      for (let E = 0; E < l; E++)
        this._makeSplatFromAttribute(E, E, s, n, o, i, r, f, g, p, b, m, c), t && E % $e._SplatBatchSize === 0 && (yield);
      this._updateTextures(f, g, p), this._updateBoundingInfo(b, m), this.setEnabled(!0);
    }
    i.normalized = A, this._postToWorker(!0);
  }
  /**
   * Update asynchronously the buffer from geometry
   * @param geometry array buffer containing center, color, orientation and scale of splats
   * @returns a promise
   */
  updateDataFromGeometryAsync(e) {
    return In(this._updateDataFromGeometry(e, !0), Cn());
  }
  sortDataAsync(e, t = !1) {
    if (!this._worker || !e)
      return Promise.resolve();
    this._cameraMatrix = e.matrixWorldInverse;
    const s = this._postToWorker(t);
    return s || Promise.resolve();
  }
  /**
   * @experimental
   * Update data from geometry (position, orientation, color, scaling)
   * @param geometry array that contain all the datas
   */
  updateDataFromGeometry(e) {
    Ha(this._updateDataFromGeometry(e, !1));
  }
  // in case size is different
  _updateSplatIndexBuffer(e) {
    if (!this._splatIndex || e > this._splatIndex.length) {
      this._splatIndex = new Float32Array(e);
      for (let t = 0; t < e; t++)
        this._splatIndex[t] = t;
      this.geometry.attributes.splatIndex.set(this._splatIndex), this.geometry.attributes.splatIndex.needsUpdate = !0;
    }
    this.geometry.instanceCount = e;
  }
  _instanciateWorker() {
    var s;
    if (!this._vertexCount)
      return;
    this._updateSplatIndexBuffer(this._vertexCount), (s = this._worker) == null || s.terminate(), this._worker = new Ki();
    const e = this._splatPositions2, t = this._vertexCount;
    this._worker.init(e, t), this._canPostToWorker = !0, this._worker.onmessage = (n) => {
      if (this._splatIndex && n) {
        for (let i = 0; i < this._vertexCount; i++)
          this._splatIndex[i] = n[i];
        this.geometry.attributes.splatIndex.set(this._splatIndex);
      }
      this.geometry.attributes.splatIndex.needsUpdate = !0, this._canPostToWorker = !0, this._readyToDisplay = !0, this._sortIsDirty && (this._postToWorker(!0), this._sortIsDirty = !1);
    };
  }
  _getTextureSize(e) {
    let n = 1;
    for (; 4096 * n < e; )
      n *= 2;
    return n > 4096 && (console.error("GaussianSplatting texture size: (4096, " + n + "), maxTextureSize: 4096"), n = 4096), new H(4096, n);
  }
};
$e._RowOutputLength = 32, $e._SH_C0 = 0.28209479177387814, $e._SplatBatchSize = 327680, $e._PlyConversionBatchSize = 32768;
let ws = $e;
class Ld extends ns {
  constructor(e) {
    super(e);
  }
  load(e, t, s, n) {
    const i = new He(this.manager);
    i.setPath(this.path), i.setResponseType("arraybuffer"), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials), i.load(
      e,
      (r) => {
        this.parse(r, t, n);
      },
      s,
      n
    );
  }
  parse(e, t, s) {
    const n = new ws();
    n.loadDataAsync(e).then(() => {
      t(n);
    }).catch((i) => {
      s ? s(i) : console.error(i);
    });
  }
}
const nt = (a, e) => {
  const t = (1 << e) - 1;
  return (a & t) / t;
}, za = (a, e) => {
  e.x = nt(a >>> 21, 11), e.y = nt(a >>> 11, 10), e.z = nt(a, 11);
}, Fd = (a, e) => {
  e[0] = nt(a >>> 24, 8) * 255, e[1] = nt(a >>> 16, 8) * 255, e[2] = nt(a >>> 8, 8) * 255, e[3] = nt(a, 8) * 255;
}, kd = (a, e) => {
  const t = 1 / (Math.sqrt(2) * 0.5), s = (nt(a >>> 20, 10) - 0.5) * t, n = (nt(a >>> 10, 10) - 0.5) * t, i = (nt(a, 10) - 0.5) * t, r = Math.sqrt(1 - (s * s + n * n + i * i));
  switch (a >>> 30) {
    case 0:
      e.set(r, s, n, i);
      break;
    case 1:
      e.set(s, r, n, i);
      break;
    case 2:
      e.set(s, n, r, i);
      break;
    case 3:
      e.set(s, n, i, r);
      break;
  }
}, de = class de extends ns {
  constructor(e) {
    super(e);
  }
  load(e, t, s, n) {
    const i = new He(this.manager);
    i.setPath(this.path), i.setResponseType("arraybuffer"), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials), i.load(
      e,
      (r) => {
        this.parse(r, t, n);
      },
      s,
      n
    );
  }
  parse(e, t, s) {
    de.ConvertPLYToSplatAsync(e).then((n) => {
      const i = new ws();
      i.loadDataAsync(n).then(() => {
        t(i);
      });
    }).catch((n) => {
      s ? s(n) : console.error(n);
    });
  }
  /**
   * Converts a .ply data array buffer to splat
   * if data array buffer is not ply, returns the original buffer
   * @param data the .ply data to load
   * @returns the loaded splat buffer
   */
  static async ConvertPLYToSplatAsync(e) {
    return In(de.ConvertPLYToSplat(e, !0), Cn());
  }
  /**
   * Converts a .ply data array buffer to splat
   * if data array buffer is not ply, returns the original buffer
   * @param data the .ply data to load
   * @param useCoroutine use coroutine and yield
   * @returns the loaded splat buffer
   */
  static *ConvertPLYToSplat(e, t = !1) {
    const s = de.ParseHeader(e);
    if (!s)
      return e;
    const n = { value: 0 }, i = de._GetCompressedChunks(s, n);
    for (let r = 0; r < s.vertexCount; r++)
      de._GetSplat(s, r, i, n), r % de._PlyConversionBatchSize === 0 && t && (yield);
    return s.buffer;
  }
  static _GetCompressedChunks(e, t) {
    if (!e.chunkCount)
      return null;
    const s = e.dataView, n = new Array(e.chunkCount);
    for (let i = 0; i < e.chunkCount; i++) {
      const r = {
        min: new x(),
        max: new x(),
        minScale: new x(),
        maxScale: new x()
      };
      n[i] = r;
      for (let o = 0; o < e.chunkProperties.length; o++) {
        const c = e.chunkProperties[o];
        let A;
        switch (c.type) {
          case 0:
            A = s.getFloat32(c.offset + t.value, !0);
            break;
          default:
            continue;
        }
        switch (c.value) {
          case 0:
            r.min.x = A;
            break;
          case 1:
            r.min.y = A;
            break;
          case 2:
            r.min.z = A;
            break;
          case 3:
            r.max.x = A;
            break;
          case 4:
            r.max.y = A;
            break;
          case 5:
            r.max.z = A;
            break;
          case 6:
            r.minScale.x = A;
            break;
          case 7:
            r.minScale.y = A;
            break;
          case 8:
            r.minScale.z = A;
            break;
          case 9:
            r.maxScale.x = A;
            break;
          case 10:
            r.maxScale.y = A;
            break;
          case 11:
            r.maxScale.z = A;
            break;
        }
      }
      t.value += e.rowChunkLength;
    }
    return n;
  }
  static _GetSplat(e, t, s, n) {
    const i = new qe(), r = new x(), o = de._RowOutputLength, c = e.buffer, A = e.dataView, l = new Float32Array(c, t * o, 3), h = new Float32Array(c, t * o + 12, 3), u = new Uint8ClampedArray(c, t * o + 24, 4), d = new Uint8ClampedArray(c, t * o + 28, 4), f = t >> 8;
    let g = 255, p = 0, b = 0, m = 0;
    for (let E = 0; E < e.vertexProperties.length; E++) {
      const C = e.vertexProperties[E];
      let I;
      switch (C.type) {
        case 0:
          I = A.getFloat32(n.value + C.offset, !0);
          break;
        case 1:
          I = A.getInt32(n.value + C.offset, !0);
          break;
        case 2:
          I = A.getUint32(n.value + C.offset, !0);
          break;
        case 3:
          I = A.getFloat64(n.value + C.offset, !0);
          break;
        case 4:
          I = A.getUint8(n.value + C.offset);
          break;
        default:
          continue;
      }
      switch (C.value) {
        case 12:
          {
            const _ = s[f];
            za(I, r), l[0] = ee.lerp(_.min.x, _.max.x, r.x), l[1] = -ee.lerp(_.min.y, _.max.y, r.y), l[2] = ee.lerp(_.min.z, _.max.z, r.z);
          }
          break;
        case 13:
          kd(I, i), g = i.w, p = i.z, b = i.y, m = i.x;
          break;
        case 14:
          {
            const _ = s[f];
            za(I, r), h[0] = Math.exp(ee.lerp(_.minScale.x, _.maxScale.x, r.x)), h[1] = Math.exp(ee.lerp(_.minScale.y, _.maxScale.y, r.y)), h[2] = Math.exp(ee.lerp(_.minScale.z, _.maxScale.z, r.z));
          }
          break;
        case 15:
          Fd(I, u);
          break;
        case 16:
          l[0] = I;
          break;
        case 17:
          l[1] = I;
          break;
        case 18:
          l[2] = I;
          break;
        case 19:
          h[0] = Math.exp(I);
          break;
        case 20:
          h[1] = Math.exp(I);
          break;
        case 21:
          h[2] = Math.exp(I);
          break;
        case 22:
          u[0] = I;
          break;
        case 23:
          u[1] = I;
          break;
        case 24:
          u[2] = I;
          break;
        case 26:
          u[0] = (0.5 + de._SH_C0 * I) * 255;
          break;
        case 27:
          u[1] = (0.5 + de._SH_C0 * I) * 255;
          break;
        case 28:
          u[2] = (0.5 + de._SH_C0 * I) * 255;
          break;
        case 29:
          u[3] = (0.5 + de._SH_C0 * I) * 255;
          break;
        case 25:
          u[3] = 1 / (1 + Math.exp(-I)) * 255;
          break;
        case 30:
          g = I;
          break;
        case 31:
          p = I;
          break;
        case 32:
          b = I;
          break;
        case 33:
          m = I;
          break;
      }
    }
    i.set(p, b, m, g), i.normalize(), d[0] = i.w * 128 + 128, d[1] = i.x * 128 + 128, d[2] = i.y * 128 + 128, d[3] = i.z * 128 + 128, n.value += e.rowVertexLength;
  }
  static _TypeNameToEnum(e) {
    switch (e) {
      case "float":
        return 0;
      case "int":
        return 1;
      case "uint":
        return 2;
      case "double":
        return 3;
      case "uchar":
        return 4;
    }
    return 5;
  }
  static _ValueNameToEnum(e) {
    switch (e) {
      case "min_x":
        return 0;
      case "min_y":
        return 1;
      case "min_z":
        return 2;
      case "max_x":
        return 3;
      case "max_y":
        return 4;
      case "max_z":
        return 5;
      case "min_scale_x":
        return 6;
      case "min_scale_y":
        return 7;
      case "min_scale_z":
        return 8;
      case "max_scale_x":
        return 9;
      case "max_scale_y":
        return 10;
      case "max_scale_z":
        return 11;
      case "packed_position":
        return 12;
      case "packed_rotation":
        return 13;
      case "packed_scale":
        return 14;
      case "packed_color":
        return 15;
      case "x":
        return 16;
      case "y":
        return 17;
      case "z":
        return 18;
      case "scale_0":
        return 19;
      case "scale_1":
        return 20;
      case "scale_2":
        return 21;
      case "diffuse_red":
      case "red":
        return 22;
      case "diffuse_green":
      case "green":
        return 23;
      case "diffuse_blue":
      case "blue":
        return 24;
      case "f_dc_0":
        return 26;
      case "f_dc_1":
        return 27;
      case "f_dc_2":
        return 28;
      case "f_dc_3":
        return 29;
      case "opacity":
        return 25;
      case "rot_0":
        return 30;
      case "rot_1":
        return 31;
      case "rot_2":
        return 32;
      case "rot_3":
        return 33;
    }
    return 34;
  }
  /**
   * Parse a PLY file header and returns metas infos on splats and chunks
   * @param data the loaded buffer
   * @returns a PLYHeader
   */
  static ParseHeader(e) {
    const t = new Uint8Array(e), s = new TextDecoder().decode(t.slice(0, 1024 * 10)), n = `end_header
`, i = s.indexOf(n);
    if (i < 0 || !s)
      return null;
    const r = parseInt(/element vertex (\d+)\n/.exec(s)[1]), o = /element chunk (\d+)\n/.exec(s);
    let c = 0;
    o && (c = parseInt(o[1]));
    let A = 0, l = 0;
    const h = {
      double: 8,
      int: 4,
      uint: 4,
      float: 4,
      short: 2,
      ushort: 2,
      uchar: 1,
      list: 0
    };
    let u;
    ((E) => {
      E[E.Vertex = 0] = "Vertex", E[E.Chunk = 1] = "Chunk";
    })(u || (u = {}));
    let d = 1;
    const f = [], g = [], p = s.slice(0, i).split(`
`);
    for (const E of p)
      if (E.startsWith("property ")) {
        const [, C, I] = E.split(" "), _ = de._ValueNameToEnum(I), B = de._TypeNameToEnum(C);
        d == 1 ? (g.push({
          value: _,
          type: B,
          offset: l
        }), l += h[C]) : d == 0 && (f.push({
          value: _,
          type: B,
          offset: A
        }), A += h[C]);
      } else if (E.startsWith("element ")) {
        const [, C] = E.split(" ");
        C == "chunk" ? d = 1 : C == "vertex" && (d = 0);
      }
    const b = new DataView(e, i + n.length), m = new ArrayBuffer(de._RowOutputLength * r);
    return {
      vertexCount: r,
      chunkCount: c,
      rowVertexLength: A,
      rowChunkLength: l,
      vertexProperties: f,
      chunkProperties: g,
      dataView: b,
      buffer: m
    };
  }
};
de._RowOutputLength = 32, de._SH_C0 = 0.28209479177387814, de._SplatBatchSize = 327680, de._PlyConversionBatchSize = 32768;
let Wi = de;
const ja = "KHR_gaussian_splatting", Ud = {
  POSITION: "position",
  COLOR_0: "color",
  _SCALE: "scale",
  _ROTATION: "rotation",
  _OPACITY: "opacity"
}, Va = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
};
class Gd {
  constructor(e, t) {
    this.parser = e, this.camera = t, this.name = ja;
  }
  loadMesh(e) {
    const t = this.parser, s = this.camera, n = t.json.extensionsUsed;
    if (!n || !n.includes(ja))
      return;
    const o = t.json.meshes[e].primitives, c = [];
    return c.push(this.loadGeometries(o)), Promise.all(c).then(function(A) {
      const l = A[A.length - 1], h = [];
      function u(d, f) {
        const g = new ws();
        return g.updateDataFromGeometryAsync(d).then(() => (d.dispose(), g.sortDataAsync(s))).then(() => g);
      }
      for (let d = 0, f = l.length; d < f; d++) {
        const g = l[d];
        h.push(u(g));
      }
      return Promise.all(h).then((d) => {
        const f = new le();
        for (let g = 0, p = d.length; g < p; g++) {
          const b = d[g];
          f.add(b);
        }
        return t.associations.set(f, { meshes: e }), f;
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   */
  loadGeometries(e) {
    const t = this.parser, s = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      let o = this.addPrimitiveAttributes(new xe(), r, t);
      s.push(o);
    }
    return Promise.all(s);
  }
  /**
   * @param {BufferGeometry} geometry
   * @param {GLTF.Primitive} primitiveDef
   * @param {GLTFParser} parser
   * @return {Promise<BufferGeometry>}
   */
  addPrimitiveAttributes(e, t, s) {
    const n = t.attributes, i = [];
    function r(o, c) {
      return s.getDependency("accessor", o).then(function(A) {
        e.setAttribute(c, A);
      });
    }
    for (const o in n) {
      const c = Ud[o] || o.toLowerCase();
      c in e.attributes || i.push(r(n[o], c));
    }
    if (t.indices !== void 0 && !e.index) {
      const o = s.getDependency("accessor", t.indices).then(function(c) {
        e.setIndex(c);
      });
      i.push(o);
    }
    return Pd(e, t, s), Promise.all(i).then(function() {
      return e;
    });
  }
}
function Pd(a, e, t) {
  const s = e.attributes, n = new Le();
  if (s.POSITION !== void 0) {
    const o = t.json.accessors[s.POSITION], c = o.min, A = o.max;
    if (c !== void 0 && A !== void 0) {
      if (n.set(new x(c[0], c[1], c[2]), new x(A[0], A[1], A[2])), o.normalized) {
        const l = qa(Va[o.componentType]);
        n.min.multiplyScalar(l), n.max.multiplyScalar(l);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const i = e.targets;
  if (i !== void 0) {
    const o = new x(), c = new x();
    for (let A = 0, l = i.length; A < l; A++) {
      const h = i[A];
      if (h.POSITION !== void 0) {
        const u = t.json.accessors[h.POSITION], d = u.min, f = u.max;
        if (d !== void 0 && f !== void 0) {
          if (c.setX(Math.max(Math.abs(d[0]), Math.abs(f[0]))), c.setY(Math.max(Math.abs(d[1]), Math.abs(f[1]))), c.setZ(Math.max(Math.abs(d[2]), Math.abs(f[2]))), u.normalized) {
            const g = qa(Va[u.componentType]);
            c.multiplyScalar(g);
          }
          o.max(c);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    n.expandByVector(o);
  }
  a.boundingBox = n;
  const r = new Fe();
  n.getCenter(r.center), r.radius = n.min.distanceTo(n.max) / 2, a.boundingSphere = r;
}
function qa(a) {
  switch (a) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
class Nd extends Ot {
  constructor(e) {
    super(), this._options = e, this._animGroup = void 0;
  }
  addToScene(e) {
    this._scene = e, this.name = this._options.id + "-root";
    const t = new le();
    t.name = this.id + "-anim", this.add(t), this._animGroup = t;
    const { rootUrl: s, fileName: n, fileNames: i, callback: r } = this._options;
    return n ? this.loadAssetContainer(s, n, r) : Array.isArray(i) ? i.forEach((o) => {
      this.loadAssetContainer(s, o, r);
    }) : typeof i == "string" ? this.loadAssetContainer(s, i, r) : i == null && this.loadAssetContainer(s, "", r), super.addToScene(e);
  }
  removeFromScene() {
    return this._animGroup && (this._animGroup.clear(), this.remove(this._animGroup), this._animGroup = void 0), super.removeFromScene();
  }
  async onLoadModel(e, t) {
    await this._scene.compileAsync(e), this._animGroup.add(e), this.updateModelTransform(e), t && t(this._animGroup);
  }
  // 使用 SceneLoader.ImportMeshAsync 加载模型，支持 gltf、glb、 obj、splat 等格式
  async loadAssetContainer(e, t, s) {
    if (e = e || "", !t || t === "") {
      const r = e.lastIndexOf("/");
      t = e.substring(r + 1), e = e.substring(0, r + 1);
    }
    const n = (t || e).split(".").pop(), i = this;
    switch (n) {
      case "ifc":
        break;
      case "ply":
        {
          const r = new Wi();
          r.setPath(e), r.load(t, async (o) => {
            i.onLoadModel(o, s);
          });
        }
        break;
      case "splat":
        {
          const r = new Ld();
          r.setPath(e), r.load(t, async (o) => {
            i.onLoadModel(o, s);
          });
        }
        break;
      case "gltf":
      case "glb":
        {
          const r = kt.getDracoLoader(this._options.dracoLoaderPath), o = kt.getKtxLoader(this._options.ktx2LoaderPath);
          o.detectSupport(this._scene.getWebGLRenderer());
          const c = new Un();
          c.setDRACOLoader(r), c.setKTX2Loader(o), c.setMeshoptDecoder(zc), c.register((A) => new Gd(A)), c.setPath(e), c.load(t, async (A) => {
            const l = A.scene;
            i.onLoadModel(l, s);
          });
        }
        break;
      case "obj":
      // TODO: support obj
      case "fbx":
      // TODO: support fbx
      default:
        {
          n && n !== "" && console.warn("Unsupported file type: " + n);
          const r = new le();
          i.onLoadModel(r, s);
        }
        return;
    }
  }
  updateSceneTransform() {
    let e = this._options.position;
    if (!e || !this._scene) return;
    const t = this._scene.toScenePosition(e);
    this.position.set(t.x, t.y, t.z), this.updateMatrixWorld(!0);
  }
  setPosition(e) {
    (this._options.position[0] !== e[0] || this._options.position[1] !== e[1]) && (this._options.position = e, this.updateSceneTransform());
  }
  updateModelTransform(e) {
    let t = this._options.offset || [0, 0, 0], s = this._options.rotation || [0, 0, 0], n = this._options.scale || 1;
    e.position.set(t[0], t[1], t[2]), e.rotation.set(st.degToRad(s[0]), st.degToRad(s[1]), st.degToRad(s[2])), e.scale.set(n, n, n), e.updateMatrixWorld(!0);
  }
}
function Od(a) {
  if (Array.isArray(a))
    return a;
  switch (a.type) {
    case "Feature":
      return [a];
    case "FeatureCollection":
      return a.features;
    default:
      return [{ geometry: a }];
  }
}
function Hd(a, e, t = {}) {
  const s = {
    pointFeatures: [],
    lineFeatures: [],
    polygonFeatures: [],
    polygonOutlineFeatures: []
  }, { startRow: n = 0, endRow: i = a.length } = t;
  for (let r = n; r < i; r++) {
    const o = a[r], { geometry: c } = o;
    if (c)
      if (c.type === "GeometryCollection") {
        const { geometries: A } = c;
        for (let l = 0; l < A.length; l++) {
          const h = A[l];
          Wa(h, s, e, o, r);
        }
      } else
        Wa(c, s, e, o, r);
  }
  return s;
}
function Ka(a) {
  if (a.length > 2) {
    const e = a[0], t = a[a.length - 1];
    (t[0] !== e[0] || t[1] !== e[1]) && a.push(e);
  }
}
function Wa(a, e, t, s, n) {
  const { type: i, coordinates: r } = a, { pointFeatures: o, lineFeatures: c, polygonFeatures: A, polygonOutlineFeatures: l } = e;
  if (jd(i, r))
    switch (i) {
      case "Point":
        o.push(
          t(
            {
              geometry: a
            },
            s,
            n
          )
        );
        break;
      case "MultiPoint":
        r.forEach((h) => {
          o.push(
            t(
              {
                geometry: { type: "Point", coordinates: h }
              },
              s,
              n
            )
          );
        });
        break;
      case "LineString":
        c.push(
          t(
            {
              geometry: a
            },
            s,
            n
          )
        );
        break;
      case "MultiLineString":
        r.forEach((h) => {
          c.push(
            t(
              {
                geometry: { type: "LineString", coordinates: h }
              },
              s,
              n
            )
          );
        });
        break;
      case "Polygon":
        A.push(
          t(
            {
              geometry: a
            },
            s,
            n
          )
        ), r.forEach((h) => {
          Ka(h), l.push(
            t(
              {
                geometry: { type: "LineString", coordinates: h }
              },
              s,
              n
            )
          );
        });
        break;
      case "MultiPolygon":
        r.forEach((h) => {
          A.push(
            t(
              {
                geometry: { type: "Polygon", coordinates: h }
              },
              s,
              n
            )
          ), h.forEach((u) => {
            Ka(u), l.push(
              t(
                {
                  geometry: {
                    type: "LineString",
                    coordinates: u
                  }
                },
                s,
                n
              )
            );
          });
        });
        break;
    }
}
const zd = {
  Point: 1,
  MultiPoint: 2,
  LineString: 2,
  MultiLineString: 3,
  Polygon: 3,
  MultiPolygon: 4
};
function jd(a, e) {
  let t = zd[a];
  for (; e && --t > 0; )
    e = e[0];
  return e && Number.isFinite(e[0]);
}
function Cs(a, e) {
  const t = a.type;
  if (t === "Point")
    e(a.coordinates);
  else if (t === "MultiPoint" || t === "LineString")
    for (let s = 0; s < a.coordinates.length; s++)
      e(a.coordinates[s]);
  else if (t === "MultiLineString" || t === "Polygon")
    for (let s = 0; s < a.coordinates.length; s++)
      for (let n = 0; n < a.coordinates[s].length; n++)
        e(a.coordinates[s][n]);
  else if (t === "MultiPolygon")
    for (let s = 0; s < a.coordinates.length; s++)
      for (let n = 0; n < a.coordinates[s].length; n++)
        for (let i = 0; i < a.coordinates[s][n].length; i++)
          e(a.coordinates[s][n][i]);
  else if (t === "GeometryCollection")
    for (let s = 0; s < a.geometries.length; s++)
      Cs(a.geometries[s], e);
  else if (t === "Feature")
    Cs(a.geometry, e);
  else if (t === "FeatureCollection")
    for (let s = 0; s < a.features.length; s++)
      Cs(a.features[s].geometry, e);
}
function Vd(a) {
  let e = 0, t = 0, s = 0, n = 0;
  return Cs(a, function(i) {
    e += i[0], t += i[1], s += i.length > 2 ? i[2] : 0, n++;
  }), [e / n, t / n, s / n];
}
function qd(a) {
  var e, t, s, n, i, r;
  return e = t = s = 1 / 0, n = i = r = -1 / 0, Cs(a, function(o) {
    const c = o.length > 2 ? o[2] : 0;
    o[0] < e && (e = o[0]), o[1] < t && (t = o[1]), c < s && (s = c), o[0] > n && (n = o[0]), o[1] > i && (i = o[1]), c > r && (r = c);
  }), [
    [e, t, s],
    [n, i, r]
  ];
}
async function Kd(a) {
  let e;
  if (typeof a == "string") {
    const o = await fetch(a);
    if (!o.ok)
      throw new Error(`HTTP error! status: ${o.status}`);
    e = await o.json();
  } else
    Array.isArray(a) ? e = {
      type: "GeometryCollection",
      geometries: structuredClone(a)
    } : e = structuredClone(a);
  const t = (r, o, c) => (r.__source = {
    object: o,
    index: c
  }, r), s = Od(e), n = Hd(s, t), i = Vd(e);
  return {
    features: s,
    centroid: i,
    geometries: n
  };
}
function Xs(a, e) {
  const [t, s, n] = a, [i, r, o] = st.toScenePosition(e, [t, s], n || 0).toArray();
  return [i, r, o];
}
function Wd(a, e) {
  const s = st.updateWorldMatrix(null, e).clone().invert(), { features: n, centroid: i, geometries: r } = a, { pointFeatures: o, lineFeatures: c, polygonFeatures: A, polygonOutlineFeatures: l } = r;
  return o.forEach((h) => {
    const { geometry: u } = h;
    u.coordinates = Xs(u.coordinates, s);
  }), c.forEach((h) => {
    const { geometry: u } = h, { coordinates: d } = u, f = d.map((g) => Xs(g, s));
    u.coordinates = f;
  }), A.forEach((h) => {
    const { geometry: u } = h, { coordinates: d } = u, f = d.map((g) => g.map((b) => Xs(b, s)));
    u.coordinates = f;
  }), l.forEach((h) => {
    const { geometry: u } = h, { coordinates: d } = u, f = d.map((g) => Xs(g, s));
    u.coordinates = f;
  }), {
    features: n,
    centroid: i,
    geometries: r
  };
}
function ts(a, e) {
  return typeof a == "function" && e ? a(e) : a;
}
Wt.line = {
  worldUnits: { value: 1 },
  linewidth: { value: 1 },
  resolution: { value: new H(1, 1) },
  dashOffset: { value: 0 },
  dashScale: { value: 1 },
  dashSize: { value: 1 },
  gapSize: { value: 1 }
  // todo FIX - maybe change to totalSize
};
an.line = {
  uniforms: fn.merge([
    Wt.common,
    Wt.fog,
    Wt.line
  ]),
  vertexShader: (
    /* glsl */
    `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`
  ),
  fragmentShader: (
    /* glsl */
    `
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`
  )
};
class qc extends Me {
  /**
   * Constructs a new line segments geometry.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super({
      type: "LineMaterial",
      uniforms: fn.clone(an.line.uniforms),
      vertexShader: an.line.vertexShader,
      fragmentShader: an.line.fragmentShader,
      clipping: !0
      // required for clipping support
    }), this.isLineMaterial = !0, this.setValues(e);
  }
  /**
   * The material's color.
   *
   * @type {Color}
   * @default (1,1,1)
   */
  get color() {
    return this.uniforms.diffuse.value;
  }
  set color(e) {
    this.uniforms.diffuse.value = e;
  }
  /**
   * Whether the material's sizes (width, dash gaps) are in world units.
   *
   * @type {boolean}
   * @default false
   */
  get worldUnits() {
    return "WORLD_UNITS" in this.defines;
  }
  set worldUnits(e) {
    e === !0 ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
  }
  /**
   * Controls line thickness in CSS pixel units when `worldUnits` is `false` (default),
   * or in world units when `worldUnits` is `true`.
   *
   * @type {number}
   * @default 1
   */
  get linewidth() {
    return this.uniforms.linewidth.value;
  }
  set linewidth(e) {
    this.uniforms.linewidth && (this.uniforms.linewidth.value = e);
  }
  /**
   * Whether the line is dashed, or solid.
   *
   * @type {boolean}
   * @default false
   */
  get dashed() {
    return "USE_DASH" in this.defines;
  }
  set dashed(e) {
    e === !0 !== this.dashed && (this.needsUpdate = !0), e === !0 ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
  }
  /**
   * The scale of the dashes and gaps.
   *
   * @type {number}
   * @default 1
   */
  get dashScale() {
    return this.uniforms.dashScale.value;
  }
  set dashScale(e) {
    this.uniforms.dashScale.value = e;
  }
  /**
   * The size of the dash.
   *
   * @type {number}
   * @default 1
   */
  get dashSize() {
    return this.uniforms.dashSize.value;
  }
  set dashSize(e) {
    this.uniforms.dashSize.value = e;
  }
  /**
   * Where in the dash cycle the dash starts.
   *
   * @type {number}
   * @default 0
   */
  get dashOffset() {
    return this.uniforms.dashOffset.value;
  }
  set dashOffset(e) {
    this.uniforms.dashOffset.value = e;
  }
  /**
   * The size of the gap.
   *
   * @type {number}
   * @default 0
   */
  get gapSize() {
    return this.uniforms.gapSize.value;
  }
  set gapSize(e) {
    this.uniforms.gapSize.value = e;
  }
  /**
   * The opacity.
   *
   * @type {number}
   * @default 1
   */
  get opacity() {
    return this.uniforms.opacity.value;
  }
  set opacity(e) {
    this.uniforms && (this.uniforms.opacity.value = e);
  }
  /**
   * The size of the viewport, in screen pixels. This must be kept updated to make
   * screen-space rendering accurate.The `LineSegments2.onBeforeRender` callback
   * performs the update for visible objects.
   *
   * @type {Vector2}
   */
  get resolution() {
    return this.uniforms.resolution.value;
  }
  set resolution(e) {
    this.uniforms.resolution.value.copy(e);
  }
  /**
   * Whether to use alphaToCoverage or not. When enabled, this can improve the
   * anti-aliasing of line edges when using MSAA.
   *
   * @type {boolean}
   */
  get alphaToCoverage() {
    return "USE_ALPHA_TO_COVERAGE" in this.defines;
  }
  set alphaToCoverage(e) {
    this.defines && (e === !0 !== this.alphaToCoverage && (this.needsUpdate = !0), e === !0 ? this.defines.USE_ALPHA_TO_COVERAGE = "" : delete this.defines.USE_ALPHA_TO_COVERAGE);
  }
}
const Ja = new Le(), Zs = new x();
class Kc extends rr {
  /**
   * Constructs a new line segments geometry.
   */
  constructor() {
    super(), this.isLineSegmentsGeometry = !0, this.type = "LineSegmentsGeometry";
    const e = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], t = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], s = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
    this.setIndex(s), this.setAttribute("position", new Re(e, 3)), this.setAttribute("uv", new Re(t, 2));
  }
  /**
   * Applies the given 4x4 transformation matrix to the geometry.
   *
   * @param {Matrix4} matrix - The matrix to apply.
   * @return {LineSegmentsGeometry} A reference to this instance.
   */
  applyMatrix4(e) {
    const t = this.attributes.instanceStart, s = this.attributes.instanceEnd;
    return t !== void 0 && (t.applyMatrix4(e), s.applyMatrix4(e), t.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  /**
   * Sets the given line positions for this geometry. The length must be a multiple of six since
   * each line segment is defined by a start end vertex in the pattern `(xyz xyz)`.
   *
   * @param {Float32Array|Array<number>} array - The position data to set.
   * @return {LineSegmentsGeometry} A reference to this geometry.
   */
  setPositions(e) {
    let t;
    e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
    const s = new Di(t, 6, 1);
    return this.setAttribute("instanceStart", new xt(s, 3, 0)), this.setAttribute("instanceEnd", new xt(s, 3, 3)), this.instanceCount = this.attributes.instanceStart.count, this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
  /**
   * Sets the given line colors for this geometry. The length must be a multiple of six since
   * each line segment is defined by a start end color in the pattern `(rgb rgb)`.
   *
   * @param {Float32Array|Array<number>} array - The position data to set.
   * @return {LineSegmentsGeometry} A reference to this geometry.
   */
  setColors(e) {
    let t;
    e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
    const s = new Di(t, 6, 1);
    return this.setAttribute("instanceColorStart", new xt(s, 3, 0)), this.setAttribute("instanceColorEnd", new xt(s, 3, 3)), this;
  }
  /**
   * Setups this line segments geometry from the given wireframe geometry.
   *
   * @param {WireframeGeometry} geometry - The geometry that should be used as a data source for this geometry.
   * @return {LineSegmentsGeometry} A reference to this geometry.
   */
  fromWireframeGeometry(e) {
    return this.setPositions(e.attributes.position.array), this;
  }
  /**
   * Setups this line segments geometry from the given edges geometry.
   *
   * @param {EdgesGeometry} geometry - The geometry that should be used as a data source for this geometry.
   * @return {LineSegmentsGeometry} A reference to this geometry.
   */
  fromEdgesGeometry(e) {
    return this.setPositions(e.attributes.position.array), this;
  }
  /**
   * Setups this line segments geometry from the given mesh.
   *
   * @param {Mesh} mesh - The mesh geometry that should be used as a data source for this geometry.
   * @return {LineSegmentsGeometry} A reference to this geometry.
   */
  fromMesh(e) {
    return this.fromWireframeGeometry(new GA(e.geometry)), this;
  }
  /**
   * Setups this line segments geometry from the given line segments.
   *
   * @param {LineSegments} lineSegments - The line segments that should be used as a data source for this geometry.
   * Assumes the source geometry is not using indices.
   * @return {LineSegmentsGeometry} A reference to this geometry.
   */
  fromLineSegments(e) {
    const t = e.geometry;
    return this.setPositions(t.attributes.position.array), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Le());
    const e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
    e !== void 0 && t !== void 0 && (this.boundingBox.setFromBufferAttribute(e), Ja.setFromBufferAttribute(t), this.boundingBox.union(Ja));
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Fe()), this.boundingBox === null && this.computeBoundingBox();
    const e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
    if (e !== void 0 && t !== void 0) {
      const s = this.boundingSphere.center;
      this.boundingBox.getCenter(s);
      let n = 0;
      for (let i = 0, r = e.count; i < r; i++)
        Zs.fromBufferAttribute(e, i), n = Math.max(n, s.distanceToSquared(Zs)), Zs.fromBufferAttribute(t, i), n = Math.max(n, s.distanceToSquared(Zs));
      this.boundingSphere.radius = Math.sqrt(n), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this);
    }
  }
  toJSON() {
  }
}
const Bi = new dt(), Ya = new x(), Xa = new x(), me = new dt(), be = new dt(), Xe = new dt(), _i = new x(), wi = new z(), Ee = new PA(), Za = new x(), $s = new Le(), en = new Fe(), Ze = new dt();
let tt, Ut;
function $a(a, e, t) {
  return Ze.set(0, 0, -e, 1).applyMatrix4(a.projectionMatrix), Ze.multiplyScalar(1 / Ze.w), Ze.x = Ut / t.width, Ze.y = Ut / t.height, Ze.applyMatrix4(a.projectionMatrixInverse), Ze.multiplyScalar(1 / Ze.w), Math.abs(Math.max(Ze.x, Ze.y));
}
function Jd(a, e) {
  const t = a.matrixWorld, s = a.geometry, n = s.attributes.instanceStart, i = s.attributes.instanceEnd, r = Math.min(s.instanceCount, n.count);
  for (let o = 0, c = r; o < c; o++) {
    Ee.start.fromBufferAttribute(n, o), Ee.end.fromBufferAttribute(i, o), Ee.applyMatrix4(t);
    const A = new x(), l = new x();
    tt.distanceSqToSegment(Ee.start, Ee.end, l, A), l.distanceTo(A) < Ut * 0.5 && e.push({
      point: l,
      pointOnLine: A,
      distance: tt.origin.distanceTo(l),
      object: a,
      face: null,
      faceIndex: o,
      uv: null,
      uv1: null
    });
  }
}
function Yd(a, e, t) {
  const s = e.projectionMatrix, i = a.material.resolution, r = a.matrixWorld, o = a.geometry, c = o.attributes.instanceStart, A = o.attributes.instanceEnd, l = Math.min(o.instanceCount, c.count), h = -e.near;
  tt.at(1, Xe), Xe.w = 1, Xe.applyMatrix4(e.matrixWorldInverse), Xe.applyMatrix4(s), Xe.multiplyScalar(1 / Xe.w), Xe.x *= i.x / 2, Xe.y *= i.y / 2, Xe.z = 0, _i.copy(Xe), wi.multiplyMatrices(e.matrixWorldInverse, r);
  for (let u = 0, d = l; u < d; u++) {
    if (me.fromBufferAttribute(c, u), be.fromBufferAttribute(A, u), me.w = 1, be.w = 1, me.applyMatrix4(wi), be.applyMatrix4(wi), me.z > h && be.z > h)
      continue;
    if (me.z > h) {
      const E = me.z - be.z, C = (me.z - h) / E;
      me.lerp(be, C);
    } else if (be.z > h) {
      const E = be.z - me.z, C = (be.z - h) / E;
      be.lerp(me, C);
    }
    me.applyMatrix4(s), be.applyMatrix4(s), me.multiplyScalar(1 / me.w), be.multiplyScalar(1 / be.w), me.x *= i.x / 2, me.y *= i.y / 2, be.x *= i.x / 2, be.y *= i.y / 2, Ee.start.copy(me), Ee.start.z = 0, Ee.end.copy(be), Ee.end.z = 0;
    const g = Ee.closestPointToPointParameter(_i, !0);
    Ee.at(g, Za);
    const p = ee.lerp(me.z, be.z, g), b = p >= -1 && p <= 1, m = _i.distanceTo(Za) < Ut * 0.5;
    if (b && m) {
      Ee.start.fromBufferAttribute(c, u), Ee.end.fromBufferAttribute(A, u), Ee.start.applyMatrix4(r), Ee.end.applyMatrix4(r);
      const E = new x(), C = new x();
      tt.distanceSqToSegment(Ee.start, Ee.end, C, E), t.push({
        point: C,
        pointOnLine: E,
        distance: tt.origin.distanceTo(C),
        object: a,
        face: null,
        faceIndex: u,
        uv: null,
        uv1: null
      });
    }
  }
}
class Xd extends De {
  /**
   * Constructs a new wide line.
   *
   * @param {LineSegmentsGeometry} [geometry] - The line geometry.
   * @param {LineMaterial} [material] - The line material.
   */
  constructor(e = new Kc(), t = new qc({ color: Math.random() * 16777215 })) {
    super(e, t), this.isLineSegments2 = !0, this.type = "LineSegments2";
  }
  /**
   * Computes an array of distance values which are necessary for rendering dashed lines.
   * For each vertex in the geometry, the method calculates the cumulative length from the
   * current point to the very beginning of the line.
   *
   * @return {LineSegments2} A reference to this instance.
   */
  computeLineDistances() {
    const e = this.geometry, t = e.attributes.instanceStart, s = e.attributes.instanceEnd, n = new Float32Array(2 * t.count);
    for (let r = 0, o = 0, c = t.count; r < c; r++, o += 2)
      Ya.fromBufferAttribute(t, r), Xa.fromBufferAttribute(s, r), n[o] = o === 0 ? 0 : n[o - 1], n[o + 1] = n[o] + Ya.distanceTo(Xa);
    const i = new Di(n, 2, 1);
    return e.setAttribute("instanceDistanceStart", new xt(i, 1, 0)), e.setAttribute("instanceDistanceEnd", new xt(i, 1, 1)), this;
  }
  /**
   * Computes intersection points between a casted ray and this instance.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    const s = this.material.worldUnits, n = e.camera;
    n === null && !s && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');
    const i = e.params.Line2 !== void 0 && e.params.Line2.threshold || 0;
    tt = e.ray;
    const r = this.matrixWorld, o = this.geometry, c = this.material;
    Ut = c.linewidth + i, o.boundingSphere === null && o.computeBoundingSphere(), en.copy(o.boundingSphere).applyMatrix4(r);
    let A;
    if (s)
      A = Ut * 0.5;
    else {
      const h = Math.max(n.near, en.distanceToPoint(tt.origin));
      A = $a(n, h, c.resolution);
    }
    if (en.radius += A, tt.intersectsSphere(en) === !1)
      return;
    o.boundingBox === null && o.computeBoundingBox(), $s.copy(o.boundingBox).applyMatrix4(r);
    let l;
    if (s)
      l = Ut * 0.5;
    else {
      const h = Math.max(n.near, $s.distanceToPoint(tt.origin));
      l = $a(n, h, c.resolution);
    }
    $s.expandByScalar(l), tt.intersectsBox($s) !== !1 && (s ? Jd(this, t) : Yd(this, n, t));
  }
  onBeforeRender(e) {
    const t = this.material.uniforms;
    t && t.resolution && (e.getViewport(Bi), this.material.uniforms.resolution.value.set(Bi.z, Bi.w));
  }
}
function Ds(a, e = !1) {
  const t = a[0].index !== null, s = new Set(Object.keys(a[0].attributes)), n = new Set(Object.keys(a[0].morphAttributes)), i = {}, r = {}, o = a[0].morphTargetsRelative, c = new xe();
  let A = 0;
  for (let l = 0; l < a.length; ++l) {
    const h = a[l];
    let u = 0;
    if (t !== (h.index !== null))
      return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."), null;
    for (const d in h.attributes) {
      if (!s.has(d))
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + '. All geometries must have compatible attributes; make sure "' + d + '" attribute exists among all geometries, or in none of them.'), null;
      i[d] === void 0 && (i[d] = []), i[d].push(h.attributes[d]), u++;
    }
    if (u !== s.size)
      return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + ". Make sure all geometries have the same number of attributes."), null;
    if (o !== h.morphTargetsRelative)
      return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + ". .morphTargetsRelative must be consistent throughout all geometries."), null;
    for (const d in h.morphAttributes) {
      if (!n.has(d))
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + ".  .morphAttributes must be consistent throughout all geometries."), null;
      r[d] === void 0 && (r[d] = []), r[d].push(h.morphAttributes[d]);
    }
    if (e) {
      let d;
      if (t)
        d = h.index.count;
      else if (h.attributes.position !== void 0)
        d = h.attributes.position.count;
      else
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + ". The geometry must have either an index or a position attribute"), null;
      c.addGroup(A, d, l), A += d;
    }
  }
  if (t) {
    let l = 0;
    const h = [];
    for (let u = 0; u < a.length; ++u) {
      const d = a[u].index;
      for (let f = 0; f < d.count; ++f)
        h.push(d.getX(f) + l);
      l += a[u].attributes.position.count;
    }
    c.setIndex(h);
  }
  for (const l in i) {
    const h = yn(i[l]);
    if (!h)
      return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + l + " attribute."), null;
    c.setAttribute(l, h);
  }
  for (const l in r) {
    const h = r[l][0].length;
    if (h === 0) break;
    c.morphAttributes = c.morphAttributes || {}, c.morphAttributes[l] = [];
    for (let u = 0; u < h; ++u) {
      const d = [];
      for (let g = 0; g < r[l].length; ++g)
        d.push(r[l][g][u]);
      const f = yn(d);
      if (!f)
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + l + " morphAttribute."), null;
      c.morphAttributes[l].push(f);
    }
  }
  return c;
}
function yn(a) {
  let e, t, s, n = -1, i = 0;
  for (let A = 0; A < a.length; ++A) {
    const l = a[A];
    if (e === void 0 && (e = l.array.constructor), e !== l.array.constructor)
      return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."), null;
    if (t === void 0 && (t = l.itemSize), t !== l.itemSize)
      return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."), null;
    if (s === void 0 && (s = l.normalized), s !== l.normalized)
      return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."), null;
    if (n === -1 && (n = l.gpuType), n !== l.gpuType)
      return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."), null;
    i += l.count * t;
  }
  const r = new e(i), o = new oe(r, t, s);
  let c = 0;
  for (let A = 0; A < a.length; ++A) {
    const l = a[A];
    if (l.isInterleavedBufferAttribute) {
      const h = c / t;
      for (let u = 0, d = l.count; u < d; u++)
        for (let f = 0; f < t; f++) {
          const g = l.getComponent(u, f);
          o.setComponent(u + h, f, g);
        }
    } else
      r.set(l.array, c);
    c += l.count * t;
  }
  return n !== void 0 && (o.gpuType = n), o;
}
function Zd(a) {
  if (a.groups.length === 0)
    return console.warn("THREE.BufferGeometryUtils.mergeGroups(): No groups are defined. Nothing to merge."), a;
  let e = a.groups;
  if (e = e.sort((r, o) => r.materialIndex !== o.materialIndex ? r.materialIndex - o.materialIndex : r.start - o.start), a.getIndex() === null) {
    const r = a.getAttribute("position"), o = [];
    for (let c = 0; c < r.count; c += 3)
      o.push(c, c + 1, c + 2);
    a.setIndex(o);
  }
  const t = a.getIndex(), s = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r], c = o.start, A = c + o.count;
    for (let l = c; l < A; l++)
      s.push(t.getX(l));
  }
  a.dispose(), a.setIndex(s);
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    o.start = n, n += o.count;
  }
  let i = e[0];
  a.groups = [i];
  for (let r = 1; r < e.length; r++) {
    const o = e[r];
    i.materialIndex === o.materialIndex ? i.count += o.count : (i = o, a.groups.push(i));
  }
  return a;
}
function $d(a) {
  const e = a[0].index !== null, t = new Set(Object.keys(a[0].attributes)), s = new Set(Object.keys(a[0].morphAttributes)), n = {}, i = {}, r = a[0].morphTargetsRelative, o = new xe();
  let c = 0;
  for (let A = 0; A < a.length; ++A) {
    const l = a[A];
    let h = 0;
    if (e !== (l.index !== null))
      return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + A + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."), null;
    for (const u in l.attributes) {
      if (!t.has(u))
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + A + '. All geometries must have compatible attributes; make sure "' + u + '" attribute exists among all geometries, or in none of them.'), null;
      n[u] === void 0 && (n[u] = []), n[u].push(l.attributes[u]), h++;
    }
    if (h !== t.size)
      return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + A + ". Make sure all geometries have the same number of attributes."), null;
    if (r !== l.morphTargetsRelative)
      return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + A + ". .morphTargetsRelative must be consistent throughout all geometries."), null;
    for (const u in l.morphAttributes) {
      if (!s.has(u))
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + A + ".  .morphAttributes must be consistent throughout all geometries."), null;
      i[u] === void 0 && (i[u] = []), i[u].push(l.morphAttributes[u]);
    }
    {
      let u;
      if (e)
        u = l.index.count;
      else if (l.attributes.position !== void 0)
        u = l.attributes.position.count;
      else
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + A + ". The geometry must have either an index or a position attribute"), null;
      for (let d = 0; d < a[A].groups.length; ++d) {
        const f = a[A].groups[d];
        o.addGroup(f.start + c, f.count, f.materialIndex);
      }
      c += u;
    }
  }
  if (e) {
    let A = 0;
    const l = [];
    for (let h = 0; h < a.length; ++h) {
      const u = a[h].index;
      for (let d = 0; d < u.count; ++d)
        l.push(u.getX(d) + A);
      A += a[h].attributes.position.count;
    }
    o.setIndex(l);
  }
  for (const A in n) {
    const l = yn(n[A]);
    if (!l)
      return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + A + " attribute."), null;
    o.setAttribute(A, l);
  }
  for (const A in i) {
    const l = i[A][0].length;
    if (l === 0) break;
    o.morphAttributes = o.morphAttributes || {}, o.morphAttributes[A] = [];
    for (let h = 0; h < l; ++h) {
      const u = [];
      for (let f = 0; f < i[A].length; ++f)
        u.push(i[A][f][h]);
      const d = yn(u);
      if (!d)
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + A + " morphAttribute."), null;
      o.morphAttributes[A].push(d);
    }
  }
  return o.groups.length === 0 ? o : Zd(o);
}
class Ji extends NA {
  constructor(e) {
    super(), this.type = "Path3", this.currentPoint = new x(), e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y, e[0].z);
    for (let t = 1, s = e.length; t < s; t++)
      this.lineTo(e[t].x, e[t].y, e[t].z);
    return this;
  }
  moveTo(e, t, s) {
    return this.currentPoint.set(e, t, s), this;
  }
  lineTo(e, t, s) {
    const n = new OA(this.currentPoint.clone(), new x(e, t, s));
    return this.curves.push(n), this.currentPoint.set(e, t, s), this;
  }
  /**
   * @override
   */
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  /**
   * @override
   */
  toJSON() {
    const e = super.toJSON();
    return e.currentPoint = this.currentPoint.toArray(), e;
  }
  /**
   * @override
   */
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class fr extends Ji {
  constructor(e) {
    super(e), this.uuid = _c(), this.type = "Shape3", this.holes = [];
  }
  getPointsHoles(e) {
    const t = [];
    for (let s = 0, n = this.holes.length; s < n; s++)
      t[s] = this.holes[s].getPoints(e);
    return t;
  }
  // get points of shape and holes (keypoints based on segments parameter)
  extractPoints(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e)
    };
  }
  /**
   * @override
   */
  copy(e) {
    super.copy(e), this.holes = [];
    for (let t = 0, s = e.holes.length; t < s; t++) {
      const n = e.holes[t];
      this.holes.push(n.clone());
    }
    return this;
  }
  /**
   * @override
   */
  toJSON() {
    const e = super.toJSON();
    e.uuid = this.uuid, e.holes = [];
    for (let t = 0, s = this.holes.length; t < s; t++) {
      const n = this.holes[t];
      e.holes.push(n.toJSON());
    }
    return e;
  }
  /**
   * @override
   */
  fromJSON(e) {
    super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
    for (let t = 0, s = e.holes.length; t < s; t++) {
      const n = e.holes[t];
      this.holes.push(new Ji().fromJSON(n));
    }
    return this;
  }
}
function ef(a, e, t = 2) {
  const s = e && e.length, n = s ? e[0] * t : a.length;
  let i = Wc(a, 0, n, t, !0);
  const r = [];
  if (!i || i.next === i.prev) return r;
  let o, c, A;
  if (s && (i = af(a, e, i, t)), a.length > 80 * t) {
    o = a[0], c = a[1];
    let l = o, h = c;
    for (let u = t; u < n; u += t) {
      const d = a[u], f = a[u + 1];
      d < o && (o = d), f < c && (c = f), d > l && (l = d), f > h && (h = f);
    }
    A = Math.max(l - o, h - c), A = A !== 0 ? 32767 / A : 0;
  }
  return vs(i, r, t, o, c, A, 0), r;
}
function Wc(a, e, t, s, n) {
  let i;
  if (n === mf(a, e, t, s) > 0)
    for (let r = e; r < t; r += s) i = eo(r / s | 0, a[r], a[r + 1], i);
  else
    for (let r = t - s; r >= e; r -= s) i = eo(r / s | 0, a[r], a[r + 1], i);
  return i && ss(i, i.next) && (Ts(i), i = i.next), i;
}
function Nt(a, e) {
  if (!a) return a;
  e || (e = a);
  let t = a, s;
  do
    if (s = !1, !t.steiner && (ss(t, t.next) || re(t.prev, t, t.next) === 0)) {
      if (Ts(t), t = e = t.prev, t === t.next) break;
      s = !0;
    } else
      t = t.next;
  while (s || t !== e);
  return e;
}
function vs(a, e, t, s, n, i, r) {
  if (!a) return;
  !r && i && hf(a, s, n, i);
  let o = a;
  for (; a.prev !== a.next; ) {
    const c = a.prev, A = a.next;
    if (i ? sf(a, s, n, i) : tf(a)) {
      e.push(c.i, a.i, A.i), Ts(a), a = A.next, o = A.next;
      continue;
    }
    if (a = A, a === o) {
      r ? r === 1 ? (a = nf(Nt(a), e), vs(a, e, t, s, n, i, 2)) : r === 2 && rf(a, e, t, s, n, i) : vs(Nt(a), e, t, s, n, i, 1);
      break;
    }
  }
}
function tf(a) {
  const e = a.prev, t = a, s = a.next;
  if (re(e, t, s) >= 0) return !1;
  const n = e.x, i = t.x, r = s.x, o = e.y, c = t.y, A = s.y, l = Math.min(n, i, r), h = Math.min(o, c, A), u = Math.max(n, i, r), d = Math.max(o, c, A);
  let f = s.next;
  for (; f !== e; ) {
    if (f.x >= l && f.x <= u && f.y >= h && f.y <= d && Es(n, o, i, c, r, A, f.x, f.y) && re(f.prev, f, f.next) >= 0) return !1;
    f = f.next;
  }
  return !0;
}
function sf(a, e, t, s) {
  const n = a.prev, i = a, r = a.next;
  if (re(n, i, r) >= 0) return !1;
  const o = n.x, c = i.x, A = r.x, l = n.y, h = i.y, u = r.y, d = Math.min(o, c, A), f = Math.min(l, h, u), g = Math.max(o, c, A), p = Math.max(l, h, u), b = Yi(d, f, e, t, s), m = Yi(g, p, e, t, s);
  let E = a.prevZ, C = a.nextZ;
  for (; E && E.z >= b && C && C.z <= m; ) {
    if (E.x >= d && E.x <= g && E.y >= f && E.y <= p && E !== n && E !== r && Es(o, l, c, h, A, u, E.x, E.y) && re(E.prev, E, E.next) >= 0 || (E = E.prevZ, C.x >= d && C.x <= g && C.y >= f && C.y <= p && C !== n && C !== r && Es(o, l, c, h, A, u, C.x, C.y) && re(C.prev, C, C.next) >= 0)) return !1;
    C = C.nextZ;
  }
  for (; E && E.z >= b; ) {
    if (E.x >= d && E.x <= g && E.y >= f && E.y <= p && E !== n && E !== r && Es(o, l, c, h, A, u, E.x, E.y) && re(E.prev, E, E.next) >= 0) return !1;
    E = E.prevZ;
  }
  for (; C && C.z <= m; ) {
    if (C.x >= d && C.x <= g && C.y >= f && C.y <= p && C !== n && C !== r && Es(o, l, c, h, A, u, C.x, C.y) && re(C.prev, C, C.next) >= 0) return !1;
    C = C.nextZ;
  }
  return !0;
}
function nf(a, e) {
  let t = a;
  do {
    const s = t.prev, n = t.next.next;
    !ss(s, n) && Yc(s, t, t.next, n) && Ss(s, n) && Ss(n, s) && (e.push(s.i, t.i, n.i), Ts(t), Ts(t.next), t = a = n), t = t.next;
  } while (t !== a);
  return Nt(t);
}
function rf(a, e, t, s, n, i) {
  let r = a;
  do {
    let o = r.next.next;
    for (; o !== r.prev; ) {
      if (r.i !== o.i && ff(r, o)) {
        let c = Xc(r, o);
        r = Nt(r, r.next), c = Nt(c, c.next), vs(r, e, t, s, n, i, 0), vs(c, e, t, s, n, i, 0);
        return;
      }
      o = o.next;
    }
    r = r.next;
  } while (r !== a);
}
function af(a, e, t, s) {
  const n = [];
  for (let i = 0, r = e.length; i < r; i++) {
    const o = e[i] * s, c = i < r - 1 ? e[i + 1] * s : a.length, A = Wc(a, o, c, s, !1);
    A === A.next && (A.steiner = !0), n.push(df(A));
  }
  n.sort(of);
  for (let i = 0; i < n.length; i++)
    t = cf(n[i], t);
  return t;
}
function of(a, e) {
  let t = a.x - e.x;
  if (t === 0 && (t = a.y - e.y, t === 0)) {
    const s = (a.next.y - a.y) / (a.next.x - a.x), n = (e.next.y - e.y) / (e.next.x - e.x);
    t = s - n;
  }
  return t;
}
function cf(a, e) {
  const t = Af(a, e);
  if (!t)
    return e;
  const s = Xc(t, a);
  return Nt(s, s.next), Nt(t, t.next);
}
function Af(a, e) {
  let t = e;
  const s = a.x, n = a.y;
  let i = -1 / 0, r;
  if (ss(a, t)) return t;
  do {
    if (ss(a, t.next)) return t.next;
    if (n <= t.y && n >= t.next.y && t.next.y !== t.y) {
      const h = t.x + (n - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (h <= s && h > i && (i = h, r = t.x < t.next.x ? t : t.next, h === s))
        return r;
    }
    t = t.next;
  } while (t !== e);
  if (!r) return null;
  const o = r, c = r.x, A = r.y;
  let l = 1 / 0;
  t = r;
  do {
    if (s >= t.x && t.x >= c && s !== t.x && Jc(n < A ? s : i, n, c, A, n < A ? i : s, n, t.x, t.y)) {
      const h = Math.abs(n - t.y) / (s - t.x);
      Ss(t, a) && (h < l || h === l && (t.x > r.x || t.x === r.x && lf(r, t))) && (r = t, l = h);
    }
    t = t.next;
  } while (t !== o);
  return r;
}
function lf(a, e) {
  return re(a.prev, a, e.prev) < 0 && re(e.next, a, a.next) < 0;
}
function hf(a, e, t, s) {
  let n = a;
  do
    n.z === 0 && (n.z = Yi(n.x, n.y, e, t, s)), n.prevZ = n.prev, n.nextZ = n.next, n = n.next;
  while (n !== a);
  n.prevZ.nextZ = null, n.prevZ = null, uf(n);
}
function uf(a) {
  let e, t = 1;
  do {
    let s = a, n;
    a = null;
    let i = null;
    for (e = 0; s; ) {
      e++;
      let r = s, o = 0;
      for (let A = 0; A < t && (o++, r = r.nextZ, !!r); A++)
        ;
      let c = t;
      for (; o > 0 || c > 0 && r; )
        o !== 0 && (c === 0 || !r || s.z <= r.z) ? (n = s, s = s.nextZ, o--) : (n = r, r = r.nextZ, c--), i ? i.nextZ = n : a = n, n.prevZ = i, i = n;
      s = r;
    }
    i.nextZ = null, t *= 2;
  } while (e > 1);
  return a;
}
function Yi(a, e, t, s, n) {
  return a = (a - t) * n | 0, e = (e - s) * n | 0, a = (a | a << 8) & 16711935, a = (a | a << 4) & 252645135, a = (a | a << 2) & 858993459, a = (a | a << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, a | e << 1;
}
function df(a) {
  let e = a, t = a;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== a);
  return t;
}
function Jc(a, e, t, s, n, i, r, o) {
  return (n - r) * (e - o) >= (a - r) * (i - o) && (a - r) * (s - o) >= (t - r) * (e - o) && (t - r) * (i - o) >= (n - r) * (s - o);
}
function Es(a, e, t, s, n, i, r, o) {
  return !(a === r && e === o) && Jc(a, e, t, s, n, i, r, o);
}
function ff(a, e) {
  return a.next.i !== e.i && a.prev.i !== e.i && !gf(a, e) && // doesn't intersect other edges
  (Ss(a, e) && Ss(e, a) && pf(a, e) && // locally visible
  (re(a.prev, a, e.prev) || re(a, e.prev, e)) || // does not create opposite-facing sectors
  ss(a, e) && re(a.prev, a, a.next) > 0 && re(e.prev, e, e.next) > 0);
}
function re(a, e, t) {
  return (e.y - a.y) * (t.x - e.x) - (e.x - a.x) * (t.y - e.y);
}
function ss(a, e) {
  return a.x === e.x && a.y === e.y;
}
function Yc(a, e, t, s) {
  const n = sn(re(a, e, t)), i = sn(re(a, e, s)), r = sn(re(t, s, a)), o = sn(re(t, s, e));
  return !!(n !== i && r !== o || n === 0 && tn(a, t, e) || i === 0 && tn(a, s, e) || r === 0 && tn(t, a, s) || o === 0 && tn(t, e, s));
}
function tn(a, e, t) {
  return e.x <= Math.max(a.x, t.x) && e.x >= Math.min(a.x, t.x) && e.y <= Math.max(a.y, t.y) && e.y >= Math.min(a.y, t.y);
}
function sn(a) {
  return a > 0 ? 1 : a < 0 ? -1 : 0;
}
function gf(a, e) {
  let t = a;
  do {
    if (t.i !== a.i && t.next.i !== a.i && t.i !== e.i && t.next.i !== e.i && Yc(t, t.next, a, e)) return !0;
    t = t.next;
  } while (t !== a);
  return !1;
}
function Ss(a, e) {
  return re(a.prev, a, a.next) < 0 ? re(a, e, a.next) >= 0 && re(a, a.prev, e) >= 0 : re(a, e, a.prev) < 0 || re(a, a.next, e) < 0;
}
function pf(a, e) {
  let t = a, s = !1;
  const n = (a.x + e.x) / 2, i = (a.y + e.y) / 2;
  do
    t.y > i != t.next.y > i && t.next.y !== t.y && n < (t.next.x - t.x) * (i - t.y) / (t.next.y - t.y) + t.x && (s = !s), t = t.next;
  while (t !== a);
  return s;
}
function Xc(a, e) {
  const t = Xi(a.i, a.x, a.y), s = Xi(e.i, e.x, e.y), n = a.next, i = e.prev;
  return a.next = e, e.prev = a, t.next = n, n.prev = t, s.next = t, t.prev = s, i.next = s, s.prev = i, s;
}
function eo(a, e, t, s) {
  const n = Xi(a, e, t);
  return s ? (n.next = s.next, n.prev = s, s.next.prev = n, s.next = n) : (n.prev = n, n.next = n), n;
}
function Ts(a) {
  a.next.prev = a.prev, a.prev.next = a.next, a.prevZ && (a.prevZ.nextZ = a.nextZ), a.nextZ && (a.nextZ.prevZ = a.prevZ);
}
function Xi(a, e, t) {
  return {
    i: a,
    // vertex index in coordinates array
    x: e,
    y: t,
    // vertex coordinates
    prev: null,
    // previous and next vertex nodes in a polygon ring
    next: null,
    z: 0,
    // z-order curve value
    prevZ: null,
    // previous and next nodes in z-order
    nextZ: null,
    steiner: !1
    // indicates whether this is a steiner point
  };
}
function mf(a, e, t, s) {
  let n = 0;
  for (let i = e, r = t - s; i < t; i += s)
    n += (a[r] - a[i]) * (a[i + 1] + a[r + 1]), r = i;
  return n;
}
class St {
  // calculate area of the contour polygon
  static area(e) {
    const t = e.length;
    let s = 0;
    for (let n = t - 1, i = 0; i < t; n = i++)
      s += e[n].x * e[i].y - e[i].x * e[n].y;
    return s * 0.5;
  }
  static isClockWise(e) {
    return St.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const s = [], n = [], i = [];
    to(e), so(s, e);
    let r = e.length;
    t.forEach(to);
    for (let c = 0; c < t.length; c++)
      n.push(r), r += t[c].length, so(s, t[c]);
    const o = ef(s, n, 3);
    for (let c = 0; c < o.length; c += 3)
      i.push(o.slice(c, c + 3));
    return i;
  }
}
function to(a) {
  const e = a.length;
  e > 2 && a[e - 1].equals(a[0]) && a.pop();
}
function so(a, e) {
  for (let t = 0; t < e.length; t++)
    a.push(e[t].x), a.push(e[t].y), a.push(e[t].z);
}
class gr extends xe {
  constructor(e = new fr([new x(0, 0.5), new x(-0.5, -0.5), new x(0.5, -0.5)]), t = 12) {
    super(), this.type = "Shape3Geometry", this.parameters = {
      shapes: e,
      curveSegments: t
    };
    const s = [], n = [], i = [], r = [];
    let o = 0, c = 0;
    if (Array.isArray(e) === !1)
      A(e);
    else
      for (let l = 0; l < e.length; l++)
        A(e[l]), this.addGroup(o, c, l), o += c, c = 0;
    this.setIndex(s), this.setAttribute("position", new Re(n, 3)), this.setAttribute("normal", new Re(i, 3)), this.setAttribute("uv", new Re(r, 2));
    function A(l) {
      const h = n.length / 3, u = l.extractPoints(t);
      let d = u.shape;
      const f = u.holes;
      St.isClockWise(d) === !1 && (d = d.reverse());
      for (let p = 0, b = f.length; p < b; p++) {
        const m = f[p];
        St.isClockWise(m) === !0 && (f[p] = m.reverse());
      }
      const g = St.triangulateShape(d, f);
      for (let p = 0, b = f.length; p < b; p++) {
        const m = f[p];
        d = d.concat(m);
      }
      for (let p = 0, b = d.length; p < b; p++) {
        const m = d[p];
        n.push(m.x, m.y, m.z), i.push(0, 0, 1), r.push(m.x, m.y);
      }
      for (let p = 0, b = g.length; p < b; p++) {
        const m = g[p], E = m[0] + h, C = m[1] + h, I = m[2] + h;
        s.push(E, C, I), c += 3;
      }
    }
  }
  /**
   * @override
   */
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * @override
   */
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes;
    return bf(t, e);
  }
  static fromJSON(e, t) {
    const s = [];
    for (let n = 0, i = e.shapes.length; n < i; n++) {
      const r = t[e.shapes[n]];
      s.push(r);
    }
    return new gr(s, e.curveSegments);
  }
}
function bf(a, e) {
  if (e.shapes = [], Array.isArray(a))
    for (let t = 0, s = a.length; t < s; t++) {
      const n = a[t];
      e.shapes.push(n.uuid);
    }
  else
    e.shapes.push(a.uuid);
  return e;
}
class Ef extends xe {
  constructor(e = new fr([new H(0.5, 0.5), new H(-0.5, 0.5), new H(-0.5, -0.5), new H(0.5, -0.5)]), t = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: e,
      options: t
    }, e = Array.isArray(e) ? e : [e];
    const s = this, n = [], i = [];
    for (let o = 0, c = e.length; o < c; o++) {
      const A = e[o];
      r(A);
    }
    this.setAttribute("position", new Re(n, 3)), this.setAttribute("uv", new Re(i, 2)), this.computeVertexNormals();
    function r(o) {
      const c = [], A = t.curveSegments !== void 0 ? t.curveSegments : 12, l = t.steps !== void 0 ? t.steps : 1, h = t.depth !== void 0 ? t.depth : 1;
      let u = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0, d = t.bevelThickness !== void 0 ? t.bevelThickness : 0.2, f = t.bevelSize !== void 0 ? t.bevelSize : d - 0.1, g = t.bevelOffset !== void 0 ? t.bevelOffset : 0, p = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
      const b = t.extrudePath, m = t.UVGenerator !== void 0 ? t.UVGenerator : Cf;
      let E, C = !1, I, _, B, y;
      b && (E = b.getSpacedPoints(l), C = !0, u = !1, I = b.computeFrenetFrames(l, !1), _ = new x(), B = new x(), y = new x()), u || (p = 0, d = 0, f = 0, g = 0);
      const w = o.extractPoints(A);
      let v = w.shape;
      const S = w.holes;
      if (!St.isClockWise(v)) {
        v = v.reverse();
        for (let Q = 0, M = S.length; Q < M; Q++) {
          const k = S[Q];
          St.isClockWise(k) && (S[Q] = k.reverse());
        }
      }
      const U = St.triangulateShape(v, S), F = v;
      for (let Q = 0, M = S.length; Q < M; Q++) {
        const k = S[Q];
        v = v.concat(k);
      }
      function N(Q, M, k) {
        return M || console.error("THREE.ExtrudeGeometry: vec does not exist"), Q.clone().addScaledVector(M, k);
      }
      const G = v.length, T = U.length;
      function q(Q, M, k) {
        let O, R, D;
        const j = Q.x - M.x, Y = Q.y - M.y, Ae = k.x - Q.x, ie = k.y - Q.y, We = j * j + Y * Y, ae = j * ie - Y * Ae;
        if (Math.abs(ae) > Number.EPSILON) {
          const ze = Math.sqrt(We), yr = Math.sqrt(Ae * Ae + ie * ie), xr = M.x - Y / ze, Br = M.y + j / ze, sA = k.x - ie / yr, nA = k.y + Ae / yr, _r = ((sA - xr) * ie - (nA - Br) * Ae) / (j * ie - Y * Ae);
          O = xr + j * _r - Q.x, R = Br + Y * _r - Q.y;
          const wr = O * O + R * R;
          if (wr <= 2)
            return new H(O, R);
          D = Math.sqrt(wr / 2);
        } else {
          let ze = !1;
          j > Number.EPSILON ? Ae > Number.EPSILON && (ze = !0) : j < -Number.EPSILON ? Ae < -Number.EPSILON && (ze = !0) : Math.sign(Y) === Math.sign(ie) && (ze = !0), ze ? (O = -Y, R = j, D = Math.sqrt(We)) : (O = j, R = Y, D = Math.sqrt(We / 2));
        }
        return new H(O / D, R / D);
      }
      const K = [];
      for (let Q = 0, M = F.length, k = M - 1, O = Q + 1; Q < M; Q++, k++, O++)
        k === M && (k = 0), O === M && (O = 0), K[Q] = q(F[Q], F[k], F[O]);
      const V = [];
      let te, $ = K.concat();
      for (let Q = 0, M = S.length; Q < M; Q++) {
        const k = S[Q];
        te = [];
        for (let O = 0, R = k.length, D = R - 1, j = O + 1; O < R; O++, D++, j++)
          D === R && (D = 0), j === R && (j = 0), te[O] = q(k[O], k[D], k[j]);
        V.push(te), $ = $.concat(te);
      }
      for (let Q = 0; Q < p; Q++) {
        const M = Q / p, k = d * Math.cos(M * Math.PI / 2), O = f * Math.sin(M * Math.PI / 2) + g;
        for (let R = 0, D = F.length; R < D; R++) {
          const j = N(F[R], K[R], O);
          _e(j.x, j.y, -k);
        }
        for (let R = 0, D = S.length; R < D; R++) {
          const j = S[R];
          te = V[R];
          for (let Y = 0, Ae = j.length; Y < Ae; Y++) {
            const ie = N(j[Y], te[Y], O);
            _e(ie.x, ie.y, -k);
          }
        }
      }
      const se = f + g;
      for (let Q = 0; Q < G; Q++) {
        const M = u ? N(v[Q], $[Q], se) : v[Q];
        C ? (B.copy(I.normals[0]).multiplyScalar(M.x), _.copy(I.binormals[0]).multiplyScalar(M.y), y.copy(E[0]).add(B).add(_), _e(y.x, y.y, y.z)) : _e(M.x, M.y, 0);
      }
      for (let Q = 1; Q <= l; Q++)
        for (let M = 0; M < G; M++) {
          const k = u ? N(v[M], $[M], se) : v[M];
          C ? (B.copy(I.normals[Q]).multiplyScalar(k.x), _.copy(I.binormals[Q]).multiplyScalar(k.y), y.copy(E[Q]).add(B).add(_), _e(y.x, y.y, y.z)) : _e(k.x, k.y, h / l * Q);
        }
      for (let Q = p - 1; Q >= 0; Q--) {
        const M = Q / p, k = d * Math.cos(M * Math.PI / 2), O = f * Math.sin(M * Math.PI / 2) + g;
        for (let R = 0, D = F.length; R < D; R++) {
          const j = N(F[R], K[R], O);
          _e(j.x, j.y, h + k);
        }
        for (let R = 0, D = S.length; R < D; R++) {
          const j = S[R];
          te = V[R];
          for (let Y = 0, Ae = j.length; Y < Ae; Y++) {
            const ie = N(j[Y], te[Y], O);
            C ? _e(ie.x, ie.y + E[l - 1].y, E[l - 1].x + k) : _e(ie.x, ie.y, h + k);
          }
        }
      }
      Be(), Qt();
      function Be() {
        const Q = n.length / 3;
        if (u) {
          let M = 0, k = G * M;
          for (let O = 0; O < T; O++) {
            const R = U[O];
            Ke(R[2] + k, R[1] + k, R[0] + k);
          }
          M = l + p * 2, k = G * M;
          for (let O = 0; O < T; O++) {
            const R = U[O];
            Ke(R[0] + k, R[1] + k, R[2] + k);
          }
        } else {
          for (let M = 0; M < T; M++) {
            const k = U[M];
            Ke(k[2], k[1], k[0]);
          }
          for (let M = 0; M < T; M++) {
            const k = U[M];
            Ke(k[0] + G * l, k[1] + G * l, k[2] + G * l);
          }
        }
        s.addGroup(Q, n.length / 3 - Q, 0);
      }
      function Qt() {
        const Q = n.length / 3;
        let M = 0;
        pt(F, M), M += F.length;
        for (let k = 0, O = S.length; k < O; k++) {
          const R = S[k];
          pt(R, M), M += R.length;
        }
        s.addGroup(Q, n.length / 3 - Q, 1);
      }
      function pt(Q, M) {
        let k = Q.length;
        for (; --k >= 0; ) {
          const O = k;
          let R = k - 1;
          R < 0 && (R = Q.length - 1);
          for (let D = 0, j = l + p * 2; D < j; D++) {
            const Y = G * D, Ae = G * (D + 1), ie = M + O + Y, We = M + R + Y, ae = M + R + Ae, ze = M + O + Ae;
            Rt(ie, We, ae, ze);
          }
        }
      }
      function _e(Q, M, k) {
        c.push(Q), c.push(M), c.push(k);
      }
      function Ke(Q, M, k) {
        ce(Q), ce(M), ce(k);
        const O = n.length / 3, R = m.generateTopUV(s, n, O - 3, O - 2, O - 1);
        pe(R[0]), pe(R[1]), pe(R[2]);
      }
      function Rt(Q, M, k, O) {
        ce(Q), ce(M), ce(O), ce(M), ce(k), ce(O);
        const R = n.length / 3, D = m.generateSideWallUV(s, n, R - 6, R - 3, R - 2, R - 1);
        pe(D[0]), pe(D[1]), pe(D[3]), pe(D[1]), pe(D[2]), pe(D[3]);
      }
      function ce(Q) {
        n.push(c[Q * 3 + 0]), n.push(c[Q * 3 + 1]), n.push(c[Q * 3 + 2]);
      }
      function pe(Q) {
        i.push(Q.x), i.push(Q.y);
      }
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes, s = this.parameters.options;
    return If(t, s, e);
  }
  static fromJSON(e, t) {
    const s = [];
    for (let i = 0, r = e.shapes.length; i < r; i++) {
      const o = t[e.shapes[i]];
      s.push(o);
    }
    const n = e.options.extrudePath;
    return n !== void 0 && (e.options.extrudePath = new Curves[n.type]().fromJSON(n)), new ExtrudeGeometry(s, e.options);
  }
}
const Cf = {
  generateTopUV: function(a, e, t, s, n) {
    const i = e[t * 3], r = e[t * 3 + 1], o = e[s * 3], c = e[s * 3 + 1], A = e[n * 3], l = e[n * 3 + 1];
    return [new H(i, r), new H(o, c), new H(A, l)];
  },
  generateSideWallUV: function(a, e, t, s, n, i) {
    const r = e[t * 3], o = e[t * 3 + 1], c = e[t * 3 + 2], A = e[s * 3], l = e[s * 3 + 1], h = e[s * 3 + 2], u = e[n * 3], d = e[n * 3 + 1], f = e[n * 3 + 2], g = e[i * 3], p = e[i * 3 + 1], b = e[i * 3 + 2];
    return Math.abs(o - l) < Math.abs(r - A) ? [new H(r, 1 - c), new H(A, 1 - h), new H(u, 1 - f), new H(g, 1 - b)] : [new H(o, 1 - c), new H(l, 1 - h), new H(d, 1 - f), new H(p, 1 - b)];
  }
};
function If(a, e, t) {
  if (t.shapes = [], Array.isArray(a))
    for (let s = 0, n = a.length; s < n; s++) {
      const i = a[s];
      t.shapes.push(i.uuid);
    }
  else
    t.shapes.push(a.uuid);
  return t.options = Object.assign({}, e), e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
}
function Zc(a, e = 0) {
  const t = new fr(), s = a.coordinates[0], n = [];
  s.forEach((i) => {
    n.push(new x(i[0], i[1], (i[2] ?? 0) + (e ?? 0)));
  }), t.setFromPoints(n);
  for (let i = 1; i < a.coordinates.length; i++) {
    const r = a.coordinates[i], o = new Ji(), c = [];
    r.forEach((A) => {
      c.push(new x(A[0], A[1], (A[2] ?? 0) + (e ?? 0)));
    }), o.setFromPoints(c), t.holes.push(o);
  }
  return t;
}
function yf(a, e, t = 0) {
  const s = Zc(a, t);
  return new Ef(s, {
    depth: e,
    bevelEnabled: !1
  });
}
function xf(a) {
  const e = Zc(a);
  return new gr(e);
}
function $c(a) {
  const e = [];
  return a.forEach((s) => {
    const n = xf(s.geometry);
    e.push(n);
  }), Ds(e);
}
function Bf(a, e) {
  const { geometries: t } = a, s = $c(t.polygonFeatures), n = new ye({
    color: e.color,
    opacity: e.opacity,
    transparent: e.opacity && e.opacity < 1
  });
  return new De(s, n);
}
const _f = (
  /* glsl */
  `
    
#ifdef IS_VERTEX
    vec3 csm_Position;
    vec4 csm_PositionRaw;
    vec3 csm_Normal;

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize;
    #endif
#else
    vec4 csm_DiffuseColor;
    vec4 csm_FragColor;
    float csm_UnlitFac;

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive;
        float csm_Roughness;
        float csm_Metalness;
        float csm_Iridescence;
        
        #if defined IS_MESHPHYSICALMATERIAL
            float csm_Clearcoat;
            float csm_ClearcoatRoughness;
            vec3 csm_ClearcoatNormal;
            float csm_Transmission;
            float csm_Thickness;
        #endif
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        vec3 csm_Bump;
        vec3 csm_FragNormal;
    #endif

    float csm_DepthAlpha;
#endif
`
), wf = (
  /* glsl */
  `

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        csm_Position = vec3(0.0);
        csm_PositionRaw = vec4(0.0);
        csm_Normal = vec3(0.0);
    #else
        csm_Position = position;
        csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        csm_PointSize = size;
    #endif
#else
    csm_UnlitFac = 0.0;

    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHDISTANCEMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);
        csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            csm_DiffuseColor = vec4(diffuse, opacity);
            csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        csm_Emissive = emissive;
        csm_Roughness = roughness;
        csm_Metalness = metalness;

        #ifdef USE_IRIDESCENCE
            csm_Iridescence = iridescence;
        #else
            csm_Iridescence = 0.0;
        #endif

        #if defined IS_MESHPHYSICALMATERIAL
            #ifdef USE_CLEARCOAT
                csm_Clearcoat = clearcoat;
                csm_ClearcoatRoughness = clearcoatRoughness;
            #else
                csm_Clearcoat = 0.0;
                csm_ClearcoatRoughness = 0.0;
            #endif

            #ifdef USE_TRANSMISSION
                csm_Transmission = transmission;
                csm_Thickness = thickness;
            #else
                csm_Transmission = 0.0;
                csm_Thickness = 0.0;
            #endif
        #endif
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        csm_AO = 0.0;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        csm_Bump = vec3(0.0);
        #ifdef FLAT_SHADED
            vec3 fdx = dFdx( vViewPosition );
            vec3 fdy = dFdy( vViewPosition );
            csm_FragNormal = normalize( cross( fdx, fdy ) );
        #else
            csm_FragNormal = normalize(vNormal);
            #ifdef DOUBLE_SIDED
                csm_FragNormal *= gl_FrontFacing ? 1.0 : - 1.0;
            #endif
        #endif
    #endif

    csm_DepthAlpha = 1.0;
#endif
`
), vf = (
  /* glsl */
  `
    varying mat4 csm_internal_vModelViewMatrix;
`
), Sf = (
  /* glsl */
  `
    csm_internal_vModelViewMatrix = modelViewMatrix;
`
), Tf = (
  /* glsl */
  `
    varying mat4 csm_internal_vModelViewMatrix;
`
), Qf = (
  /* glsl */
  `
    
`
), P = {
  // PBR (frag)
  diffuse: "csm_DiffuseColor",
  // Color + alpha
  roughness: "csm_Roughness",
  // Roughness
  metalness: "csm_Metalness",
  // Metalness
  emissive: "csm_Emissive",
  // Emissive
  ao: "csm_AO",
  // AO
  bump: "csm_Bump",
  // Bump
  fragNormal: "csm_FragNormal",
  // Fragment Normal
  clearcoat: "csm_Clearcoat",
  // Clearcoat factor
  clearcoatRoughness: "csm_ClearcoatRoughness",
  // Clearcoat roughness
  clearcoatNormal: "csm_ClearcoatNormal",
  // Clearcoat normals
  transmission: "csm_Transmission",
  // Transmission
  thickness: "csm_Thickness",
  // Thickness
  iridescence: "csm_Iridescence",
  // Iridescence
  // Extras
  pointSize: "csm_PointSize",
  // gl_PointSize (Frag)
  fragColor: "csm_FragColor",
  // gl_FragColor (Frag)
  depthAlpha: "csm_DepthAlpha",
  // Depth (MeshDepthMaterial)
  unlitFac: "csm_UnlitFac",
  // Unlit factor (mix between csm_FragColor and csm_DiffuseColor)
  // Vert
  position: "csm_Position",
  // gl_Position
  positionRaw: "csm_PositionRaw",
  // gl_Position (without projection)
  normal: "csm_Normal"
  // Vertex Normal
}, Rf = {
  [`${P.position}`]: "*",
  [`${P.positionRaw}`]: "*",
  [`${P.normal}`]: "*",
  [`${P.depthAlpha}`]: "*",
  [`${P.pointSize}`]: ["PointsMaterial"],
  [`${P.diffuse}`]: "*",
  [`${P.fragColor}`]: "*",
  [`${P.fragNormal}`]: "*",
  [`${P.unlitFac}`]: "*",
  [`${P.emissive}`]: ["MeshStandardMaterial", "MeshPhysicalMaterial"],
  [`${P.roughness}`]: ["MeshStandardMaterial", "MeshPhysicalMaterial"],
  [`${P.metalness}`]: ["MeshStandardMaterial", "MeshPhysicalMaterial"],
  [`${P.iridescence}`]: [
    "MeshStandardMaterial",
    "MeshPhysicalMaterial"
  ],
  [`${P.ao}`]: [
    "MeshStandardMaterial",
    "MeshPhysicalMaterial",
    "MeshBasicMaterial",
    "MeshLambertMaterial",
    "MeshPhongMaterial",
    "MeshToonMaterial"
  ],
  [`${P.bump}`]: [
    "MeshLambertMaterial",
    "MeshMatcapMaterial",
    "MeshNormalMaterial",
    "MeshPhongMaterial",
    "MeshPhysicalMaterial",
    "MeshStandardMaterial",
    "MeshToonMaterial",
    "ShadowMaterial"
  ],
  [`${P.clearcoat}`]: ["MeshPhysicalMaterial"],
  [`${P.clearcoatRoughness}`]: ["MeshPhysicalMaterial"],
  [`${P.clearcoatNormal}`]: ["MeshPhysicalMaterial"],
  [`${P.transmission}`]: ["MeshPhysicalMaterial"],
  [`${P.thickness}`]: ["MeshPhysicalMaterial"]
}, Mf = {
  // VERT
  "*": {
    "#include <lights_physical_fragment>": Z.ShaderChunk.lights_physical_fragment,
    "#include <transmission_fragment>": Z.ShaderChunk.transmission_fragment
  },
  [`${P.normal}`]: {
    "#include <beginnormal_vertex>": `
    vec3 objectNormal = ${P.normal};
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `
  },
  [`${P.position}`]: {
    "#include <begin_vertex>": `
    vec3 transformed = ${P.position};
  `
  },
  [`${P.positionRaw}`]: {
    "#include <project_vertex>": `
    #include <project_vertex>
    gl_Position = ${P.positionRaw};
  `
  },
  [`${P.pointSize}`]: {
    "gl_PointSize = size;": `
    gl_PointSize = ${P.pointSize};
    `
  },
  // FRAG
  [`${P.diffuse}`]: {
    "#include <color_fragment>": `
    #include <color_fragment>
    diffuseColor = ${P.diffuse};
  `
  },
  [`${P.fragColor}`]: {
    "#include <opaque_fragment>": `
    #include <opaque_fragment>
    gl_FragColor = mix(gl_FragColor, ${P.fragColor}, ${P.unlitFac});
  `
  },
  [`${P.emissive}`]: {
    "vec3 totalEmissiveRadiance = emissive;": `
    vec3 totalEmissiveRadiance = ${P.emissive};
    `
  },
  [`${P.roughness}`]: {
    "#include <roughnessmap_fragment>": `
    #include <roughnessmap_fragment>
    roughnessFactor = ${P.roughness};
    `
  },
  [`${P.metalness}`]: {
    "#include <metalnessmap_fragment>": `
    #include <metalnessmap_fragment>
    metalnessFactor = ${P.metalness};
    `
  },
  [`${P.ao}`]: {
    "#include <aomap_fragment>": `
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - ${P.ao};
    `
  },
  [`${P.bump}`]: {
    "#include <normal_fragment_maps>": `
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = ${P.bump} - (dot(${P.bump}, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `
  },
  [`${P.fragNormal}`]: {
    "#include <normal_fragment_maps>": `
      #include <normal_fragment_maps>
      normal = ${P.fragNormal};
    `
  },
  [`${P.depthAlpha}`]: {
    "gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );": `
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * 1.0 - ${P.depthAlpha} );
    `,
    "gl_FragColor = packDepthToRGBA( fragCoordZ );": `
      if(${P.depthAlpha} < 1.0) discard;
      gl_FragColor = packDepthToRGBA( dist );
    `,
    "gl_FragColor = packDepthToRGBA( dist );": `
      if(${P.depthAlpha} < 1.0) discard;
      gl_FragColor = packDepthToRGBA( dist );
    `
  },
  [`${P.clearcoat}`]: {
    "material.clearcoat = clearcoat;": `material.clearcoat = ${P.clearcoat};`
  },
  [`${P.clearcoatRoughness}`]: {
    "material.clearcoatRoughness = clearcoatRoughness;": `material.clearcoatRoughness = ${P.clearcoatRoughness};`
  },
  [`${P.clearcoatNormal}`]: {
    "#include <clearcoat_normal_fragment_begin>": `
      vec3 csm_coat_internal_orthogonal = csm_ClearcoatNormal - (dot(csm_ClearcoatNormal, nonPerturbedNormal) * nonPerturbedNormal);
      vec3 csm_coat_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_coat_internal_orthogonal;
      vec3 clearcoatNormal = normalize(nonPerturbedNormal - csm_coat_internal_projectedbump);
    `
  },
  [`${P.transmission}`]: {
    "material.transmission = transmission;": `
      material.transmission = ${P.transmission};
    `
  },
  [`${P.thickness}`]: {
    "material.thickness = thickness;": `
      material.thickness = ${P.thickness};
    `
  },
  [`${P.iridescence}`]: {
    "material.iridescence = iridescence;": `
      material.iridescence = ${P.iridescence};
    `
  }
}, Df = {
  clearcoat: [
    P.clearcoat,
    P.clearcoatNormal,
    P.clearcoatRoughness
  ],
  transmission: [P.transmission],
  iridescence: [P.iridescence]
};
function Lf(a) {
  let e = 0;
  for (let s = 0; s < a.length; s++)
    e = a.charCodeAt(s) + (e << 6) + (e << 16) - e;
  const t = e >>> 0;
  return String(t);
}
function Ff(a) {
  try {
    new a();
  } catch (e) {
    if (e.message.indexOf("is not a constructor") >= 0)
      return !1;
  }
  return !0;
}
function no(a) {
  return a.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
}
class nn extends Z.Material {
  constructor({
    baseMaterial: e,
    vertexShader: t,
    fragmentShader: s,
    uniforms: n,
    patchMap: i,
    cacheKey: r,
    ...o
  }) {
    if (!e)
      throw new Error("CustomShaderMaterial: baseMaterial is required.");
    let c;
    if (Ff(e)) {
      const u = Object.keys(o).length === 0;
      c = new e(u ? void 0 : o);
    } else
      c = e, Object.assign(c, o);
    if (["ShaderMaterial", "RawShaderMaterial"].includes(c.type))
      throw new Error(
        `CustomShaderMaterial does not support ${c.type} as a base material.`
      );
    super(), this.uniforms = {}, this.vertexShader = "", this.fragmentShader = "";
    const A = c;
    A.name = `CustomShaderMaterial<${c.name || c.type}>`, A.update = this.update, A.__csm = {
      prevOnBeforeCompile: c.onBeforeCompile,
      baseMaterial: c,
      vertexShader: t,
      fragmentShader: s,
      uniforms: n,
      patchMap: i,
      cacheKey: r
    };
    const l = { ...A.uniforms || {}, ...n || {} };
    A.uniforms = this.uniforms = l, A.vertexShader = this.vertexShader = t || "", A.fragmentShader = this.fragmentShader = s || "", A.update({
      fragmentShader: A.fragmentShader,
      vertexShader: A.vertexShader,
      uniforms: A.uniforms,
      patchMap: i,
      cacheKey: r
    }), Object.assign(this, A);
    const h = Object.getOwnPropertyDescriptors(
      Object.getPrototypeOf(A)
    );
    for (const u in h) {
      const d = h[u];
      (d.get || d.set) && Object.defineProperty(this, u, d);
    }
    return Object.defineProperty(this, "type", {
      get() {
        return c.type;
      },
      set(u) {
        c.type = u;
      }
    }), this;
  }
  update({
    fragmentShader: e,
    vertexShader: t,
    uniforms: s,
    cacheKey: n,
    patchMap: i
  }) {
    const r = no(t || ""), o = no(e || ""), c = this;
    s && (c.uniforms = s), t && (c.vertexShader = t), e && (c.fragmentShader = e), Object.entries(Df).forEach(([u, d]) => {
      for (const f in d) {
        const g = d[f];
        (o && o.includes(g) || r && r.includes(g)) && (c[u] || (c[u] = 1));
      }
    });
    const A = c.__csm.prevOnBeforeCompile, l = (u, d, f) => {
      let g, p = "";
      if (d) {
        const b = d.search(/void\s+main\s*\(\s*\)\s*{/);
        if (b !== -1) {
          p = d.slice(0, b);
          let m = 0, E = -1;
          for (let C = b; C < d.length; C++)
            if (d[C] === "{" && m++, d[C] === "}" && (m--, m === 0)) {
              E = C;
              break;
            }
          if (E !== -1) {
            const C = d.slice(b, E + 1);
            g = C.slice(C.indexOf("{") + 1, -1);
          }
        } else
          p = d;
      }
      if (f && d && d.includes(P.fragColor) && g && (g = `csm_UnlitFac = 1.0;
` + g), u.includes("//~CSM_DEFAULTS")) {
        u = u.replace(
          "void main() {",
          `
          // THREE-CustomShaderMaterial by Faraz Shaikh: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
  
          ${p}
          
          void main() {
          `
        );
        const b = u.lastIndexOf("//~CSM_MAIN_END");
        if (b !== -1) {
          const m = `
            ${g ? `${g}` : ""}
            //~CSM_MAIN_END
          `;
          u = u.slice(0, b) + m + u.slice(b);
        }
      } else {
        const b = /void\s*main\s*\(\s*\)\s*{/gm;
        u = u.replace(
          b,
          `
          // THREE-CustomShaderMaterial by Faraz Shaikh: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
  
          //~CSM_DEFAULTS
          ${f ? Tf : vf}
          ${_f}
  
          ${p}
          
          void main() {
            {
              ${wf}
            }
            ${f ? Qf : Sf}

            ${g ? `${g}` : ""}
            //~CSM_MAIN_END
          `
        );
      }
      return u;
    };
    c.onBeforeCompile = (u, d) => {
      A == null || A(u, d);
      const f = i || {}, g = c.type, p = g ? `#define IS_${g.toUpperCase()};
` : `#define IS_UNKNOWN;
`;
      u.vertexShader = p + `#define IS_VERTEX
` + u.vertexShader, u.fragmentShader = p + `#define IS_FRAGMENT
` + u.fragmentShader;
      const b = (m) => {
        for (const E in m) {
          const C = E === "*" || r && r.includes(E);
          if (E === "*" || o && o.includes(E) || C) {
            const I = Rf[E];
            if (I && I !== "*" && (Array.isArray(I) ? !I.includes(g) : I !== g)) {
              console.error(
                `CustomShaderMaterial: ${E} is not available in ${g}. Shader cannot compile.`
              );
              return;
            }
            const _ = m[E];
            for (const B in _) {
              const y = _[B];
              if (typeof y == "object") {
                const w = y.type, v = y.value;
                w === "fs" ? u.fragmentShader = u.fragmentShader.replace(
                  B,
                  v
                ) : w === "vs" && (u.vertexShader = u.vertexShader.replace(
                  B,
                  v
                ));
              } else y && (u.vertexShader = u.vertexShader.replace(
                B,
                y
              ), u.fragmentShader = u.fragmentShader.replace(
                B,
                y
              ));
            }
          }
        }
      };
      b(Mf), b(f), u.vertexShader = l(
        u.vertexShader,
        r,
        !1
      ), u.fragmentShader = l(
        u.fragmentShader,
        o,
        !0
      ), s && (u.uniforms = { ...u.uniforms, ...c.uniforms }), c.uniforms = u.uniforms;
    };
    const h = c.customProgramCacheKey;
    c.customProgramCacheKey = () => ((n == null ? void 0 : n()) || Lf((r || "") + (o || ""))) + (h == null ? void 0 : h.call(c)), c.needsUpdate = !0;
  }
  clone() {
    const e = this;
    return new e.constructor({
      baseMaterial: e.__csm.baseMaterial.clone(),
      vertexShader: e.__csm.vertexShader,
      fragmentShader: e.__csm.fragmentShader,
      uniforms: e.__csm.uniforms,
      patchMap: e.__csm.patchMap,
      cacheKey: e.__csm.cacheKey
    });
  }
}
class kf {
  static getMeshMaterial(e) {
    switch (e) {
      case "basic":
        return ye;
      case "standard":
        return rs;
      case "lambert":
        return WA;
      case "phong":
        return KA;
      case "depth":
        return qA;
      case "distance":
        return VA;
      case "toon":
        return jA;
      case "physical":
        return ue;
      case "normal":
        return zA;
      case "matcap":
        return HA;
      default:
        return ye;
    }
  }
  //重置UV 是否从中点 还是左上角的点
  static resetUV(e, t = !1) {
    e.computeBoundingBox();
    const { max: s, min: n } = e.boundingBox;
    e.deleteAttribute("uv");
    const i = s.x - n.x, r = s.y - n.y, o = [];
    for (let A = 0; A < e.attributes.position.count; A++)
      t ? (o.push((e.attributes.position.getX(A) - (n.x + s.x) / 2) / i), o.push((e.attributes.position.getY(A) - (n.y + s.y) / 2) / r)) : (o.push((e.attributes.position.getX(A) - n.x) / i), o.push((e.attributes.position.getY(A) - n.y) / r));
    const c = new Float32Array(o);
    e.setAttribute("uv", new oe(c, 2));
  }
}
function Uf(a) {
  const { colors: e, resolution: t = 256 } = a, s = new Uint8Array(t * 4);
  for (let i = 0; i < t; i++) {
    const r = i / (t - 1) * (e.length - 1), o = Math.floor(r), c = r - o, A = e[o], l = e[Math.min(o + 1, e.length - 1)], h = new X().lerpColors(A, l, c);
    s[i * 4] = h.r * 255, s[i * 4 + 1] = h.g * 255, s[i * 4 + 2] = h.b * 255, s[i * 4 + 3] = 255;
  }
  const n = new ht(s, t, 1, Ie, ve, _t, fe, fe, ne, ne);
  return n.needsUpdate = !0, n;
}
function Gf(a, e, t) {
  const s = [];
  return a.forEach((i) => {
    const r = i.__source.object, o = ts(e, r), c = ts(t, r), A = yf(i.geometry, o, c);
    s.push(A);
  }), $d(s);
}
class Pf extends De {
  constructor(e, t = {}) {
    var n, i, r, o, c, A, l, h, u, d, f, g, p, b, m, E, C, I, _, B, y, w, v, S, L, U, F, N, G, T, q, K, V, te, $, se, Be, Qt, pt, _e, Ke, Rt;
    super(e);
    const s = kf.getMeshMaterial(t == null ? void 0 : t.baseMaterial);
    if (t != null && t.gradient) {
      let ce = [];
      if (Array.isArray(t == null ? void 0 : t.gradientColor))
        ce = t.gradientColor.map((ae) => new X(ae));
      else {
        const ae = ((i = (n = t == null ? void 0 : t.material) == null ? void 0 : n.wall) == null ? void 0 : i.color) || (t == null ? void 0 : t.color), ze = (t == null ? void 0 : t.gradientColor) || ((o = (r = t == null ? void 0 : t.material) == null ? void 0 : r.top) == null ? void 0 : o.color) || (t == null ? void 0 : t.color);
        ce.push(new X(ae)), ce.push(new X(ze));
      }
      const Q = Uf({ colors: ce }), M = `
        varying float vHeight;
        void main() {
          vHeight = position.z;
        }
      `, k = `
        varying float vHeight;

        uniform float uTime;
        uniform float uLightCircleTime;
        uniform float uLightBorderWidth;
        uniform float uLightMixRate;
        uniform vec3 uLightColor;

        uniform float uGradientHeightMax;
        uniform float uGradientHeightMin;
				uniform sampler2D uGradientSampler;
        void main() {

          bool isLight = false;
          float refHeight = (vHeight - uGradientHeightMin) / (uGradientHeightMax - uGradientHeightMin);

          vec3 gradientColor = texture2D( uGradientSampler, vec2(refHeight, 0.5) ).xyz;
          
          if(uLightBorderWidth > 0.0 && uLightCircleTime > 0.0) {
            float sinRate = sin(uTime / uLightCircleTime * PI * 2.0);
            if ((refHeight > sinRate)  && 
              (refHeight < sinRate + uLightBorderWidth ) )
            {
              csm_DiffuseColor.xyz = mix(uLightColor, gradientColor, uLightMixRate);
              isLight = true;
            } 
          }
          
          if (!isLight) {
            csm_DiffuseColor.xyz = gradientColor;
          }

        }
      `, O = (t == null ? void 0 : t.gradientHeightMax) ?? 100, R = (t == null ? void 0 : t.gradientHeightMin) ?? 0, D = (t == null ? void 0 : t.lightBorderWidth) ?? 0.01, j = (t == null ? void 0 : t.lightCircleTime) ?? 10, Y = (t == null ? void 0 : t.lightColor) ?? 16777215, Ae = (t == null ? void 0 : t.lightMixRate) ?? 0, ie = new nn({
        baseMaterial: s,
        vertexShader: M,
        fragmentShader: k,
        color: ((A = (c = t == null ? void 0 : t.material) == null ? void 0 : c.top) == null ? void 0 : A.color) || (t == null ? void 0 : t.color),
        opacity: ((h = (l = t == null ? void 0 : t.material) == null ? void 0 : l.top) == null ? void 0 : h.opacity) ?? (t == null ? void 0 : t.opacity) ?? 1,
        map: ((d = (u = t == null ? void 0 : t.material) == null ? void 0 : u.top) == null ? void 0 : d.texture) || null,
        transparent: ((g = (f = t == null ? void 0 : t.material) == null ? void 0 : f.top) == null ? void 0 : g.transparent) || t.opacity && t.opacity < 1,
        uniforms: {
          uTime: { value: 0 },
          uLightCircleTime: { value: j },
          uLightBorderWidth: { value: D },
          uLightColor: { value: new X(Y) },
          uLightMixRate: { value: Ae },
          uGradientHeightMax: { value: O },
          uGradientHeightMin: { value: R },
          uGradientSampler: { value: Q }
        }
      }), We = new nn({
        baseMaterial: s,
        vertexShader: M,
        fragmentShader: k,
        color: ((b = (p = t == null ? void 0 : t.material) == null ? void 0 : p.wall) == null ? void 0 : b.color) || (t == null ? void 0 : t.color),
        opacity: ((E = (m = t == null ? void 0 : t.material) == null ? void 0 : m.wall) == null ? void 0 : E.opacity) ?? (t == null ? void 0 : t.opacity) ?? 1,
        map: ((I = (C = t == null ? void 0 : t.material) == null ? void 0 : C.wall) == null ? void 0 : I.texture) || null,
        transparent: ((B = (_ = t == null ? void 0 : t.material) == null ? void 0 : _.wall) == null ? void 0 : B.transparent) || t.opacity && t.opacity < 1,
        uniforms: {
          uTime: { value: 0 },
          uLightCircleTime: { value: j },
          uLightBorderWidth: { value: D },
          uLightColor: { value: new X(Y) },
          uLightMixRate: { value: Ae },
          uGradientHeightMax: { value: O },
          uGradientHeightMin: { value: R },
          uGradientSampler: { value: Q }
        }
      });
      this.material = [ie, We];
    } else {
      const ce = new s({
        color: ((w = (y = t == null ? void 0 : t.material) == null ? void 0 : y.top) == null ? void 0 : w.color) || (t == null ? void 0 : t.color),
        opacity: ((S = (v = t == null ? void 0 : t.material) == null ? void 0 : v.top) == null ? void 0 : S.opacity) ?? (t == null ? void 0 : t.opacity) ?? 1,
        map: ((U = (L = t == null ? void 0 : t.material) == null ? void 0 : L.top) == null ? void 0 : U.texture) || null,
        transparent: ((N = (F = t == null ? void 0 : t.material) == null ? void 0 : F.top) == null ? void 0 : N.transparent) || t.opacity && t.opacity < 1
      }), pe = new s({
        color: ((T = (G = t == null ? void 0 : t.material) == null ? void 0 : G.wall) == null ? void 0 : T.color) || (t == null ? void 0 : t.color),
        opacity: ((K = (q = t == null ? void 0 : t.material) == null ? void 0 : q.wall) == null ? void 0 : K.opacity) ?? (t == null ? void 0 : t.opacity) ?? 1,
        map: ((te = (V = t == null ? void 0 : t.material) == null ? void 0 : V.wall) == null ? void 0 : te.texture) || null,
        transparent: ((se = ($ = t == null ? void 0 : t.material) == null ? void 0 : $.wall) == null ? void 0 : se.transparent) || t.opacity && t.opacity < 1
      });
      this.material = [ce, pe];
    }
    if (t != null && t.enableEdge) {
      const ce = ((Qt = (Be = t == null ? void 0 : t.material) == null ? void 0 : Be.edge) == null ? void 0 : Qt.color) ?? (t == null ? void 0 : t.color), pe = ((_e = (pt = t == null ? void 0 : t.material) == null ? void 0 : pt.edge) == null ? void 0 : _e.opacity) ?? (t == null ? void 0 : t.opacity) ?? 1, Q = ((Rt = (Ke = t == null ? void 0 : t.material) == null ? void 0 : Ke.edge) == null ? void 0 : Rt.width) ?? 1, M = new Mo(e);
      let O = new Kc().fromEdgesGeometry(M), R = new qc({
        color: ce,
        linewidth: Q,
        opacity: pe,
        transparent: !0,
        depthWrite: !0,
        depthTest: !0
      });
      R.resolution.set(window.innerWidth, window.innerHeight);
      const D = new Xd(O, R);
      D.name = this.name + "-edges", this.add(D);
    }
    this._startTime = 0;
  }
  updateSceneTime(e, t, s) {
    this._startTime === 0 && (this._startTime = e);
    const n = e - this._startTime;
    this.material instanceof nn ? this.material.uniforms.uTime.value = n / 1e3 : Array.isArray(this.material) && this.material.forEach((i) => {
      i instanceof nn && (i.uniforms.uTime.value = n / 1e3);
    });
  }
}
function Nf(a, e) {
  const { geometries: t } = a, { getElevation: s, getElevationBase: n } = e, i = Gf(t.polygonFeatures, s, n);
  return new Pf(i, e);
}
class gt extends Z.BufferGeometry {
  constructor() {
    super(), this.isMeshLine = !0, this.type = "MeshLine", this.positions = [], this.previous = [], this.next = [], this.side = [], this.width = [], this.indices_array = [], this.uvs = [], this.counters = [], this._points = [], this._geom = null, this.widthCallback = null, this.matrixWorld = new Z.Matrix4(), Object.defineProperties(this, {
      // this is now a bufferGeometry
      // add getter to support previous api
      geometry: {
        enumerable: !0,
        get: function() {
          return this;
        }
      },
      geom: {
        enumerable: !0,
        get: function() {
          return this._geom;
        },
        set: function(e) {
          this.setGeometry(e, this.widthCallback);
        }
      },
      // for declaritive architectures
      // to return the same value that sets the points
      // eg. this.points = points
      // console.log(this.points) -> points
      points: {
        enumerable: !0,
        get: function() {
          return this._points;
        },
        set: function(e) {
          this.setPoints(e, this.widthCallback);
        }
      }
    });
  }
}
gt.prototype.setMatrixWorld = function(a) {
  this.matrixWorld = a;
};
gt.prototype.setGeometry = function(a, e) {
  this._geometry = a, this.setPoints(a.getAttribute("position").array, e);
};
gt.prototype.setPoints = function(a, e) {
  if (!(a instanceof Float32Array) && !(a instanceof Array)) {
    console.error("ERROR: The BufferArray of points is not instancied correctly.");
    return;
  }
  if (this._points = a, this.widthCallback = e, this.positions = [], a.length && a[0] instanceof Z.Vector3)
    for (var n = 0; n < a.length - 1; n++) {
      var t = a[n];
      this.positions.push(t.x, t.y, t.z), this.positions.push(t.x, t.y, t.z);
      var t = a[n + 1];
      this.positions.push(t.x, t.y, t.z), this.positions.push(t.x, t.y, t.z);
    }
  else
    for (var n = 0; n < a.length - 3; n += 3)
      this.positions.push(a[n], a[n + 1], a[n + 2]), this.positions.push(a[n], a[n + 1], a[n + 2]), this.positions.push(a[n + 3], a[n + 4], a[n + 5]), this.positions.push(a[n + 3], a[n + 4], a[n + 5]);
  this.counters = [];
  var s = 0, n = 0;
  let i = new Z.Vector3(this.positions[n], this.positions[n + 1], this.positions[n + 2]);
  for (this.counters.push(s), this.counters.push(s), n = 6; n < this.positions.length; n += 6) {
    let o = new Z.Vector3(this.positions[n], this.positions[n + 1], this.positions[n + 2]);
    var r = o.distanceTo(i);
    i = o, s += r, this.counters.push(s), this.counters.push(s);
  }
  this.process();
};
function Of(a, e) {
  var t = new Z.Matrix4(), s = new Z.Ray(), n = new Z.Sphere(), i = new Z.Vector3(), r = this.geometry;
  if (r.boundingSphere || r.computeBoundingSphere(), n.copy(r.boundingSphere), n.applyMatrix4(this.matrixWorld), a.ray.intersectSphere(n, i) !== !1) {
    t.copy(this.matrixWorld).invert(), s.copy(a.ray).applyMatrix4(t);
    var o = new Z.Vector3(), c = new Z.Vector3(), A = new Z.Vector3(), l = this instanceof Z.LineSegments ? 2 : 1, h = r.index, u = r.attributes;
    if (h !== null)
      for (var d = h.array, f = u.position.array, g = u.width.array, p = 0, b = d.length - 1; p < b; p += l) {
        var m = d[p], E = d[p + 1];
        o.fromArray(f, m * 3), c.fromArray(f, E * 3);
        var C = g[Math.floor(p / 3)] !== void 0 ? g[Math.floor(p / 3)] : 1, I = a.params.Line.threshold + this.material.lineWidth * C / 2, _ = I * I, B = s.distanceSqToSegment(o, c, i, A);
        if (!(B > _)) {
          i.applyMatrix4(this.matrixWorld);
          var y = a.ray.origin.distanceTo(i);
          y < a.near || y > a.far || (e.push({
            distance: y,
            // What do we want? intersection point on the ray or on the segment??
            // point: raycaster.ray.at( distance ),
            point: A.clone().applyMatrix4(this.matrixWorld),
            index: p,
            face: null,
            faceIndex: null,
            object: this
          }), p = b);
        }
      }
  }
}
gt.prototype.raycast = Of;
gt.prototype.compareV3 = function(a, e) {
  var t = a * 6, s = e * 6;
  return this.positions[t] === this.positions[s] && this.positions[t + 1] === this.positions[s + 1] && this.positions[t + 2] === this.positions[s + 2];
};
gt.prototype.copyV3 = function(a) {
  var e = a * 6;
  return [this.positions[e], this.positions[e + 1], this.positions[e + 2]];
};
gt.prototype.process = function() {
  var a = this.positions.length / 6;
  this.previous = [], this.next = [], this.side = [], this.width = [], this.indices_array = [], this.uvs = [];
  var e, t;
  this.compareV3(0, a - 1) ? t = this.copyV3(a - 2) : t = this.copyV3(0), this.previous.push(t[0], t[1], t[2]), this.previous.push(t[0], t[1], t[2]);
  for (var s = 0; s < a; s++) {
    if (this.side.push(1), this.side.push(-1), this.widthCallback ? e = this.widthCallback(s / (a - 1)) : e = 1, this.width.push(e), this.width.push(e), this.uvs.push(s / (a - 1), 0), this.uvs.push(s / (a - 1), 1), s < a - 1) {
      t = this.copyV3(s), this.previous.push(t[0], t[1], t[2]), this.previous.push(t[0], t[1], t[2]);
      var n = s * 2;
      this.indices_array.push(n, n + 1, n + 2), this.indices_array.push(n + 2, n + 1, n + 3);
    }
    s > 0 && (t = this.copyV3(s), this.next.push(t[0], t[1], t[2]), this.next.push(t[0], t[1], t[2]));
  }
  this.compareV3(a - 1, 0) ? t = this.copyV3(1) : t = this.copyV3(a - 1), this.next.push(t[0], t[1], t[2]), this.next.push(t[0], t[1], t[2]), !this._attributes || this._attributes.position.count !== this.positions.length ? this._attributes = {
    position: new Z.BufferAttribute(new Float32Array(this.positions), 3),
    previous: new Z.BufferAttribute(new Float32Array(this.previous), 3),
    next: new Z.BufferAttribute(new Float32Array(this.next), 3),
    side: new Z.BufferAttribute(new Float32Array(this.side), 1),
    width: new Z.BufferAttribute(new Float32Array(this.width), 1),
    uv: new Z.BufferAttribute(new Float32Array(this.uvs), 2),
    index: new Z.BufferAttribute(new Uint16Array(this.indices_array), 1),
    counters: new Z.BufferAttribute(new Float32Array(this.counters), 1)
  } : (this._attributes.position.copyArray(new Float32Array(this.positions)), this._attributes.position.needsUpdate = !0, this._attributes.previous.copyArray(new Float32Array(this.previous)), this._attributes.previous.needsUpdate = !0, this._attributes.next.copyArray(new Float32Array(this.next)), this._attributes.next.needsUpdate = !0, this._attributes.side.copyArray(new Float32Array(this.side)), this._attributes.side.needsUpdate = !0, this._attributes.width.copyArray(new Float32Array(this.width)), this._attributes.width.needsUpdate = !0, this._attributes.uv.copyArray(new Float32Array(this.uvs)), this._attributes.uv.needsUpdate = !0, this._attributes.index.copyArray(new Uint16Array(this.indices_array)), this._attributes.index.needsUpdate = !0), this.setAttribute("position", this._attributes.position), this.setAttribute("previous", this._attributes.previous), this.setAttribute("next", this._attributes.next), this.setAttribute("side", this._attributes.side), this.setAttribute("width", this._attributes.width), this.setAttribute("uv", this._attributes.uv), this.setAttribute("counters", this._attributes.counters), this.setIndex(this._attributes.index), this.computeBoundingSphere(), this.computeBoundingBox(), this._geometry && (this._geometry.attributes = this.attributes, this._geometry.index = this.index, this._geometry.computeBoundingSphere(), this._geometry.computeBoundingBox());
};
function vi(a, e, t, s, n) {
  var i;
  if (a = a.subarray || a.slice ? a : a.buffer, t = t.subarray || t.slice ? t : t.buffer, a = e ? a.subarray ? a.subarray(e, n && e + n) : a.slice(e, n && e + n) : a, t.set)
    t.set(a, s);
  else
    for (i = 0; i < a.length; i++)
      t[i + s] = a[i];
  return t;
}
gt.prototype.advance = function(a) {
  var e = this._attributes.position.array, t = this._attributes.previous.array, s = this._attributes.next.array, n = e.length;
  vi(e, 0, t, 0, n), vi(e, 6, e, 0, n - 6), e[n - 6] = a.x, e[n - 5] = a.y, e[n - 4] = a.z, e[n - 3] = a.x, e[n - 2] = a.y, e[n - 1] = a.z, vi(e, 6, s, 0, n - 6), s[n - 6] = a.x, s[n - 5] = a.y, s[n - 4] = a.z, s[n - 3] = a.x, s[n - 2] = a.y, s[n - 1] = a.z, this._attributes.position.needsUpdate = !0, this._attributes.previous.needsUpdate = !0, this._attributes.next.needsUpdate = !0;
};
const io = {
  vertexShader: (
    /* glsl */
    `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

    attribute vec3 previous;
    attribute vec3 next;
    attribute float side;
    attribute float width;
    attribute float counters;

    uniform vec2 resolution;
    uniform float lineWidth;
    uniform vec3 color;
    uniform float opacity;
    uniform float near;
    uniform float far;
    uniform float worldUnits;
    uniform vec2 offset;
    uniform float time;
    uniform float speed;

    varying vec2 vUV;
    varying vec4 vColor;
    varying float vCounters;

		void trimSegment( const in vec4 start, inout vec4 end ) {
			// trim end segment so it terminates between the camera plane and the near plane
			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );
			end.xyz = mix( start.xyz, end.xyz, alpha );
		}

    vec2 fix( vec4 i, float aspect ) {
      vec2 res = i.xy / i.w;
      res.x *= aspect;
      return res;
    }

    void main() {
      float w = lineWidth * width;

      float uvOffsetX = time * speed;

      vUV = offset + vec2(counters / w - uvOffsetX, uv.y);
      vColor = vec4( color, opacity );
      vCounters = counters;

      if(worldUnits == 1.0){            
        vec3 dir;
        if( next == position ) dir = normalize( position - previous );
        else if( previous == position ) dir = normalize( next - position );
        else {
          vec3 dir1 = normalize( position - previous );
          vec3 dir2 = normalize( next - position );
          dir = normalize( dir1 + dir2 );
        }
        vec3 normal = normalize(vec3( -dir.y, dir.x, 0 ));
        normal *= .5 * w;
        
        vec3 finalPosition = position + normal * side;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4( finalPosition, 1.0 );
      }else{
        float aspect = resolution.x / resolution.y;
    
        vec4 currentPosEye = modelViewMatrix * vec4( position, 1.0 );
        vec4 prevPosEye = modelViewMatrix * vec4( previous, 1.0 );
        vec4 nextPosEye = modelViewMatrix * vec4( next, 1.0 );

        // special case for perspective projection, and segments that terminate either in, or behind, the camera plane
        // clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
        // but we need to perform ndc-space calculations in the shader, so we must address this issue directly
        // perhaps there is a more elegant solution -- WestLangley
  
        bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column
        if ( perspective ) {  
          if ( currentPosEye.z < 0.0 && prevPosEye.z >= 0.0 ) {  
            trimSegment( currentPosEye, prevPosEye );  
          } else if ( prevPosEye.z < 0.0 && currentPosEye.z >= 0.0 ) {  
            trimSegment( prevPosEye, currentPosEye );  
          }  
            
          if ( currentPosEye.z < 0.0 && nextPosEye.z >= 0.0 ) {  
            trimSegment( currentPosEye, nextPosEye );  
          } else if ( nextPosEye.z < 0.0 && currentPosEye.z >= 0.0 ) {  
            trimSegment( nextPosEye, currentPosEye );  
          }  
        }


        vec4 finalPosition = projectionMatrix * currentPosEye;
        vec4 prevPos = projectionMatrix * prevPosEye;
        vec4 nextPos = projectionMatrix * nextPosEye;

        vec2 currentP = fix( finalPosition, aspect );
        vec2 prevP = fix( prevPos, aspect );
        vec2 nextP = fix( nextPos, aspect );
        
        vec2 dir;
        if( nextP == currentP ) dir = normalize( currentP - prevP );
        else if( prevP == currentP ) dir = normalize( nextP - currentP );
        else {
          vec2 dir1 = normalize( currentP - prevP );
          vec2 dir2 = normalize( nextP - currentP );
          dir = normalize( dir1 + dir2 );
        }

        vec2 normal = vec2( -dir.y, dir.x );
        normal.x /= aspect;
        normal *= w;
				// adjust for clip-space to screen-space conversion
				normal /= resolution.y;
				// back to clip space
				normal *= finalPosition.w;

        finalPosition.xy += normal * side;
        gl_Position = finalPosition;
      }

      vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
      
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      #include <fog_vertex>
    }
    `
  ),
  fragmentShader: (
    /* glsl */
    `

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>


    uniform sampler2D map;
    uniform sampler2D alphaMap;
    uniform float useMap;
    uniform float useAlphaMap;
    uniform float useDash;
    uniform float dashArray;
    uniform float dashOffset;
    uniform float dashRatio;
    uniform float alphaTest;
    uniform vec2 repeat;

    varying vec2 vUV;
    varying vec4 vColor;
    varying float vCounters;

    void main() {

			#include <logdepthbuf_fragment>

      vec4 c = vColor;
      if( useMap == 1. ) c *= texture2D( map, vUV * repeat );
      if( useAlphaMap == 1. ) c.a *= texture2D( alphaMap, vUV * repeat ).a;
      if( c.a < alphaTest ) discard;
      if( useDash == 1. ){
          c.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));
      }
      gl_FragColor = c;

			#include <fog_fragment>
    }
		`
  )
};
class An extends Z.ShaderMaterial {
  constructor(e) {
    super({
      uniforms: Object.assign({}, Z.UniformsLib.fog, {
        lineWidth: { value: 1 },
        map: { value: null },
        useMap: { value: 0 },
        alphaMap: { value: null },
        useAlphaMap: { value: 0 },
        color: { value: new Z.Color(16777215) },
        opacity: { value: 1 },
        resolution: { value: new Z.Vector2(1, 1) },
        worldUnits: { value: 1 },
        dashArray: { value: 0 },
        dashOffset: { value: 0 },
        dashRatio: { value: 0.5 },
        useDash: { value: 0 },
        alphaTest: { value: 0 },
        repeat: { value: new Z.Vector2(1, 1) },
        offset: { value: new Z.Vector2(1, 1) },
        time: { value: 0 },
        speed: { value: 1 }
      }),
      transparent: !0,
      vertexShader: io.vertexShader,
      fragmentShader: io.fragmentShader
    }), this.isMeshLineMaterial = !0, this.type = "MeshLineMaterial", Object.defineProperties(this, {
      lineWidth: {
        enumerable: !0,
        get: function() {
          return this.uniforms.lineWidth.value;
        },
        set: function(t) {
          this.uniforms.lineWidth.value = t;
        }
      },
      map: {
        enumerable: !0,
        get: function() {
          return this.uniforms.map.value;
        },
        set: function(t) {
          this.uniforms.map.value = t;
        }
      },
      useMap: {
        enumerable: !0,
        get: function() {
          return this.uniforms.useMap.value;
        },
        set: function(t) {
          this.uniforms.useMap.value = t;
        }
      },
      alphaMap: {
        enumerable: !0,
        get: function() {
          return this.uniforms.alphaMap.value;
        },
        set: function(t) {
          this.uniforms.alphaMap.value = t;
        }
      },
      useAlphaMap: {
        enumerable: !0,
        get: function() {
          return this.uniforms.useAlphaMap.value;
        },
        set: function(t) {
          this.uniforms.useAlphaMap.value = t;
        }
      },
      color: {
        enumerable: !0,
        get: function() {
          return this.uniforms.color.value;
        },
        set: function(t) {
          this.uniforms.color.value = t;
        }
      },
      opacity: {
        enumerable: !0,
        get: function() {
          return this.uniforms.opacity.value;
        },
        set: function(t) {
          this.uniforms.opacity.value = t;
        }
      },
      resolution: {
        enumerable: !0,
        get: function() {
          return this.uniforms.resolution.value;
        },
        set: function(t) {
          this.uniforms.resolution.value.copy(t);
        }
      },
      worldUnits: {
        enumerable: !0,
        get: function() {
          return this.uniforms.worldUnits.value;
        },
        set: function(t) {
          this.uniforms.worldUnits.value = t;
        }
      },
      dashArray: {
        enumerable: !0,
        get: function() {
          return this.uniforms.dashArray.value;
        },
        set: function(t) {
          this.uniforms.dashArray.value = t, this.useDash = t !== 0 ? 1 : 0;
        }
      },
      dashOffset: {
        enumerable: !0,
        get: function() {
          return this.uniforms.dashOffset.value;
        },
        set: function(t) {
          this.uniforms.dashOffset.value = t;
        }
      },
      dashRatio: {
        enumerable: !0,
        get: function() {
          return this.uniforms.dashRatio.value;
        },
        set: function(t) {
          this.uniforms.dashRatio.value = t;
        }
      },
      useDash: {
        enumerable: !0,
        get: function() {
          return this.uniforms.useDash.value;
        },
        set: function(t) {
          this.uniforms.useDash.value = t;
        }
      },
      alphaTest: {
        enumerable: !0,
        get: function() {
          return this.uniforms.alphaTest.value;
        },
        set: function(t) {
          this.uniforms.alphaTest.value = t;
        }
      },
      repeat: {
        enumerable: !0,
        get: function() {
          return this.uniforms.repeat.value;
        },
        set: function(t) {
          this.uniforms.repeat.value.copy(t);
        }
      },
      offset: {
        enumerable: !0,
        get: function() {
          return this.uniforms.offset.value;
        },
        set: function(t) {
          this.uniforms.offset.value.copy(t);
        }
      },
      time: {
        enumerable: !0,
        get: function() {
          return this.uniforms.time.value;
        },
        set: function(t) {
          this.uniforms.time.value = t;
        }
      },
      speed: {
        enumerable: !0,
        get: function() {
          return this.uniforms.speed.value;
        },
        set: function(t) {
          this.uniforms.speed.value = t;
        }
      }
    }), this.setValues(e);
  }
}
An.prototype.copy = function(a) {
  return Z.ShaderMaterial.prototype.copy.call(this, a), this.lineWidth = a.lineWidth, this.map = a.map, this.useMap = a.useMap, this.alphaMap = a.alphaMap, this.useAlphaMap = a.useAlphaMap, this.color.copy(a.color), this.opacity = a.opacity, this.resolution.copy(a.resolution), this.worldUnits = a.worldUnits, this.dashArray.copy(a.dashArray), this.dashOffset.copy(a.dashOffset), this.dashRatio.copy(a.dashRatio), this.useDash = a.useDash, this.alphaTest = a.alphaTest, this.repeat.copy(a.repeat), this.time = a.time, this.speed = a.speed, this;
};
function Hf(a, e) {
  const t = new gt(), s = a.coordinates, n = [];
  return s.forEach((i) => {
    const r = new x(i[0], i[1], i.length > 2 ? i[2] : 0);
    n.push(r.x, r.y, r.z);
  }), t.setPoints(n, e ? (i) => e : void 0), t;
}
function zf(a, e) {
  const t = [];
  return a.forEach((n) => {
    const i = n.__source.object, r = ts(e, i), o = Hf(n.geometry, r);
    t.push(o);
  }), Ds(t);
}
class jf extends De {
  constructor(e, t = {}) {
    super(e);
    let s = new An(t);
    this.material = s, this._startTime = 0;
  }
  updateSceneTime(e, t, s) {
    this._startTime === 0 && (this._startTime = e);
    const n = e - this._startTime;
    this.material instanceof An && (this.material.uniforms.time.value = n / 1e3);
  }
  onBeforeRender(e, t, s, n, i, r) {
    if (this.material instanceof An) {
      const o = this.material.uniforms;
      if (o && o.resolution) {
        const c = new dt();
        e.getViewport(c);
        const A = c.z, l = c.w;
        o.resolution.value.set(A, l);
      }
    }
  }
}
function Vf(a, e) {
  const { geometries: t } = a, { getLineWidth: s, ...n } = e, i = t.lineFeatures.length > 0 ? t.lineFeatures : t.polygonOutlineFeatures.length > 0 ? t.polygonOutlineFeatures : [], r = zf(i, s);
  return new jf(r, n);
}
class qf extends De {
  constructor(e, t = {}) {
    super(e), this.isWater = !0;
    const s = this, n = t.textureWidth !== void 0 ? t.textureWidth : 512, i = t.textureHeight !== void 0 ? t.textureHeight : 512, r = t.clipBias !== void 0 ? t.clipBias : 0, o = t.alpha !== void 0 ? t.alpha : 1, c = t.time !== void 0 ? t.time : 0, A = t.waterNormals !== void 0 ? t.waterNormals : null, l = t.sunDirection !== void 0 ? t.sunDirection : new x(0.70707, 0.70707, 0), h = new X(t.sunColor !== void 0 ? t.sunColor : 16777215), u = new X(t.waterColor !== void 0 ? t.waterColor : 8355711), d = t.eye !== void 0 ? t.eye : new x(0, 0, 0), f = t.distortionScale !== void 0 ? t.distortionScale : 20, g = t.side !== void 0 ? t.side : nr, p = t.fog !== void 0 ? t.fog : !1, b = t.up !== void 0 ? t.up : new x(0, 1, 0), m = new Qo(), E = new x(), C = new x(), I = new x(), _ = new z(), B = new x(), y = new dt(), w = new x(), v = new x(), S = new dt(), L = new z(), U = new Sn(), F = new Ti(n, i), N = {
      name: "MirrorShader",
      uniforms: fn.merge([
        Wt.fog,
        Wt.lights,
        {
          normalSampler: { value: null },
          mirrorSampler: { value: null },
          alpha: { value: 1 },
          time: { value: 0 },
          size: { value: 1 },
          distortionScale: { value: 20 },
          textureMatrix: { value: new z() },
          sunColor: { value: new X(8355711) },
          sunDirection: { value: new x(0.70707, 0.70707, 0) },
          eye: { value: new x() },
          waterColor: { value: new X(5592405) }
        }
      ]),
      vertexShader: (
        /* glsl */
        `
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`
      ),
      fragmentShader: (
        /* glsl */
        `
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`
      )
    }, G = new Me({
      name: N.name,
      uniforms: fn.clone(N.uniforms),
      vertexShader: N.vertexShader,
      fragmentShader: N.fragmentShader,
      lights: !0,
      side: g,
      fog: p
    });
    G.uniforms.mirrorSampler.value = F.texture, G.uniforms.textureMatrix.value = L, G.uniforms.alpha.value = o, G.uniforms.time.value = c, G.uniforms.normalSampler.value = A, G.uniforms.sunColor.value = h, G.uniforms.waterColor.value = u, G.uniforms.sunDirection.value = l, G.uniforms.distortionScale.value = f, G.uniforms.eye.value = d, s.material = G, s.onBeforeRender = function(T, q, K) {
      if (C.setFromMatrixPosition(s.matrixWorld), I.setFromMatrixPosition(K.matrixWorld), _.extractRotation(s.matrixWorld), E.set(b.x, b.z, b.y), E.applyMatrix4(_), w.subVectors(C, I), w.dot(E) > 0) return;
      w.reflect(E).negate(), w.add(C), _.extractRotation(K.matrixWorld), B.set(-E.x, -E.y, -E.z), B.applyMatrix4(_), B.add(I), v.subVectors(C, B), v.reflect(E).negate(), v.add(C), U.position.copy(w), U.up.set(b.x, b.y, b.z), U.up.applyMatrix4(_), U.up.reflect(E), U.lookAt(v), U.far = K.far, U.updateMatrixWorld(), U.projectionMatrix.copy(K.projectionMatrix), L.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), L.multiply(U.projectionMatrix), L.multiply(U.matrixWorldInverse), m.setFromNormalAndCoplanarPoint(E, C), m.applyMatrix4(U.matrixWorldInverse), y.set(m.normal.x, m.normal.y, m.normal.z, m.constant);
      const V = U.projectionMatrix;
      S.x = (Math.sign(y.x) + V.elements[8]) / V.elements[0], S.y = (Math.sign(y.y) + V.elements[9]) / V.elements[5], S.z = -1, S.w = (1 + V.elements[10]) / V.elements[14], y.multiplyScalar(2 / y.dot(S)), V.elements[2] = y.x, V.elements[6] = y.y, V.elements[10] = y.z + 1 - r, V.elements[14] = y.w, d.setFromMatrixPosition(K.matrixWorld);
      const te = T.getRenderTarget(), $ = T.xr.enabled, se = T.shadowMap.autoUpdate;
      s.visible = !1, T.xr.enabled = !1, T.shadowMap.autoUpdate = !1, T.setRenderTarget(F), T.state.buffers.depth.setMask(!0), T.autoClear === !1 && T.clear(), T.render(q, U), s.visible = !0, T.xr.enabled = $, T.shadowMap.autoUpdate = se, T.setRenderTarget(te);
      const Be = K.viewport;
      Be !== void 0 && T.state.viewport(Be);
    };
  }
}
function Kf(a, e) {
  const { geometries: t } = a, s = $c(t.polygonFeatures);
  return e.flowDirection = new H(1, 1), e.up = new x(0, 1, 0), new qf(s, e);
}
function Wf(a, e) {
  const t = a.coordinates, s = [], n = [];
  let i = s.length, r = n.length, o = 0;
  for (let A = 0; A < t.length - 1; A++) {
    let l = 1, h = t[A], u = t[A + 1];
    const d = Math.sqrt((h[0] - u[0]) * (h[0] - u[0]) + (h[1] - u[1]) * (h[1] - u[1])) / e, f = o, g = o + d;
    s[i++] = h[0], s[i++] = h[1], s[i++] = h[2] + 0, n[r++] = f, n[r++] = 0, s[i++] = u[0], s[i++] = u[1], s[i++] = u[2] + 0, n[r++] = g, n[r++] = 0, s[i++] = h[0], s[i++] = h[1], s[i++] = h[2] + e, n[r++] = f, n[r++] = l, s[i++] = h[0], s[i++] = h[1], s[i++] = h[2] + e, n[r++] = f, n[r++] = l, s[i++] = u[0], s[i++] = u[1], s[i++] = u[2] + 0, n[r++] = g, n[r++] = 0, s[i++] = u[0], s[i++] = u[1], s[i++] = u[2] + e, n[r++] = g, n[r++] = l, o += d;
  }
  const c = new xe();
  return c.setAttribute("position", new Re(s, 3)), c.setAttribute("uv", new Re(n, 2)), c;
}
function Jf(a, e) {
  const t = [];
  return a.forEach((n) => {
    const i = n.__source.object, r = ts(e, i), o = Wf(n.geometry, r);
    t.push(o);
  }), Ds(t);
}
function pr(a, { name: e, vertexShader: t, fragmentShader: s }) {
  const n = new X(a.color !== void 0 ? a.color : 16776960), i = a.opacity !== void 0 ? a.opacity : 0.8, r = a.num !== void 0 ? a.num : 5, o = a.speed !== void 0 ? a.speed : 1, c = {
    name: e,
    side: ft,
    transparent: !0,
    depthWrite: !1,
    depthTest: !0,
    blending: Fn,
    vertexShader: t,
    fragmentShader: s,
    uniforms: {
      time: { value: 0 },
      color: { value: n },
      opacity: { value: i },
      num: { value: r },
      speed: { value: o }
    }
  };
  return new Me(c);
}
function Yf(a) {
  return new X(a.color !== void 0 ? a.color : 16776960), pr(a, {
    name: "RippleShader",
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
        `,
    fragmentShader: `
        uniform float time;
        uniform float opacity;
        uniform vec3 color;
        uniform float num;
        uniform float speed;
        varying vec2 vUv;
        #define PI 3.14159265
        void main() {
            vec4 fragColor = vec4(0.);
            float sin = sin((vUv.y - time * speed / num) * PI * 2.0 * num);
            float high = 0.92;
            float medium = 0.4;
            if (sin > high) {
                fragColor = vec4(mix(vec3(.8, 1., 1.), color, (1. - sin) / (1. - high)), 1.);
            } else if(sin > medium) {
                fragColor = vec4(color, mix(1., 0., 1.-(sin - medium) / (high - medium)));
            } else {
                fragColor = vec4(color, 0.);
            }
            vec3 fade = mix(color, vec3(0., 0., 0.), vUv.y);
            fragColor = mix(fragColor, vec4(fade, 1.), 0.85);
            gl_FragColor = vec4(fragColor.rgb, fragColor.a * opacity * (1. - vUv.y));
        }
        `
  });
}
function Xf(a) {
  return pr(a, {
    name: "WaveShader",
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
        `,
    fragmentShader: `
        uniform float time;
        uniform float opacity;
        uniform vec3 color;
        uniform float num;
        uniform float speed;
        varying vec2 vUv;
                
        void main() {                
            float amplitude = 1.;
            float x = vUv.x;
            float y = sin(x * num) ;
            float t = 0.01*(-time*130.0*speed);
            y += sin(x*num*2.1 + t)*4.5;
            y += sin(x*num*1.72 + t*1.121)*4.0;
            y += sin(x*num*2.221 + t*0.437)*5.0;
            y += sin(x*num*3.1122+ t*4.269)*2.5;
            y *= amplitude*0.06;
            y /= 3.;
            y += 0.55;
            float ap = step(vUv.y,y) * (y-vUv.y)/y;
            gl_FragColor = vec4(color,ap*opacity);
        }
        `
  });
}
function ro(a) {
  return pr(a, {
    name: "fadeShader",
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
        `,
    fragmentShader: `
        uniform float time;
        uniform float opacity;
        uniform vec3 color;
        uniform float num;
        uniform float speed;
        varying vec2 vUv;
        #define PI 3.14159265
                
        void main() {
            float timeDelta = (time * speed * 0.5 - floor(time * speed * 0.5));
            float alpha = 1.0 - vUv.y / (1.0 - timeDelta);   
            alpha = clamp( alpha, 0.0, 1.0); 
            gl_FragColor = vec4(color, alpha * opacity);
        }
        `
  });
}
class Zf extends De {
  constructor(e, t = {}) {
    super(e);
    let s;
    t.material instanceof ut ? s = t.material : t.material === "ripple" ? s = Yf(t) : t.material === "wave" ? s = Xf(t) : (t.material, s = ro(t)), this.material = s, this._startTime = 0;
  }
  updateSceneTime(e, t, s) {
    this._startTime === 0 && (this._startTime = e);
    const n = e - this._startTime;
    this.material instanceof Me && (this.material.uniforms.time.value = n / 1e3);
  }
}
function $f(a, e) {
  const { geometries: t } = a, { getElevation: s, height: n } = e, i = t.lineFeatures.length > 0 ? t.lineFeatures : t.polygonOutlineFeatures.length > 0 ? t.polygonOutlineFeatures : [], r = Jf(i, s === void 0 ? n : s);
  return new Zf(r, e);
}
function eg(a, e, t) {
  const s = a.coordinates, n = new JA(e, t);
  return n.translate(s[0], s[1], s.length > 2 ? s[2] : 0), n;
}
function tg(a, e, t) {
  const s = [];
  return a.forEach((i) => {
    const r = i.__source.object, o = ts(e, r), c = eg(i.geometry, o, t);
    s.push(c);
  }), Ds(s);
}
function sg(a) {
  const e = new X(a.color !== void 0 ? a.color : 16711680), t = a.opacity !== void 0 ? a.opacity : 0.8, s = a.radius !== void 0 ? a.radius : 1, n = a.followWidth !== void 0 ? a.followWidth : 0.2, i = a.speed !== void 0 ? a.speed : 1, r = {
    transparent: !0,
    blending: Fn,
    depthWrite: !1,
    side: ft,
    depthTest: !0,
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv.x = (uv.x - 0.5) * 2.0;
            vUv.y = (uv.y - 0.5) * 2.0;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform float radius;     
        uniform float time;            
        uniform float speed; 
        uniform float followWidth; 
        varying vec2 vUv;
        uniform vec3 color;
        uniform float opacity;
        float calcAngle(vec2 oFrag){
            float fragAngle;
            const vec2 ox = vec2(1,0);
            float dianji = oFrag.x * ox.x + oFrag.y*ox.y;
            float oFrag_length = length(oFrag); // length是内置函数
            float ox_length = length(ox); // length是内置函数
            float yuxian = dianji / (oFrag_length * ox_length);
            fragAngle = acos(yuxian);
            fragAngle = degrees(fragAngle);
            if(oFrag.y > 0.0) {
                fragAngle = -fragAngle + 360.0;
            }
            float scanAngle = (time * speed * 0.25 - floor(time * speed * 0.25)) * 360.0;
            float angle = scanAngle - fragAngle;
            if(angle < 0.0){
                angle = angle + 360.0;
            }
            return angle;
        }
        void main() {
            if(length(vUv) == 0.0 || length(vUv) > 1.0){
                gl_FragColor = vec4( color, 0.0 );
            } else {
                float angle = calcAngle(vUv);
                if(angle < followWidth * 360.0){
                    // 尾焰区域
                    float ap =  1.0 - angle / (followWidth * 360.0); 
                    gl_FragColor = vec4( color, ap * opacity );  
                } else {
                    // 其他位置的像素均为透明
                    gl_FragColor = vec4( color, 0.0 ); 
                }
            }
        }
    `,
    uniforms: {
      speed: { value: i },
      radius: { value: s },
      time: { value: 0 },
      followWidth: { value: n },
      color: { value: new X(e) },
      opacity: { value: t }
    }
  };
  return new Me(r);
}
function ao(a) {
  const e = new X(a.color !== void 0 ? a.color : 16711680), t = a.opacity !== void 0 ? a.opacity : 0.8, s = a.radius !== void 0 ? a.radius : 1, n = a.num !== void 0 ? a.num : 8, i = a.speed !== void 0 ? a.speed : 1, r = {
    transparent: !0,
    blending: Fn,
    depthWrite: !1,
    side: ft,
    depthTest: !0,
    vertexShader: `
        varying vec2 vUv;
        varying float uvLength;
        void main() {
            vUv.x = (uv.x - 0.5) * 2.0;
            vUv.y = (uv.y - 0.5) * 2.0;
            uvLength = length(vUv);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform float radius;     
        uniform float time;            
        uniform float speed; 
        uniform float num; 
        varying vec2 vUv;
        varying float uvLength;
        uniform vec3 color;
        uniform float opacity;
        #define PI 3.14159265
        void main() {
            vec4 fragColor = vec4(color, 0.0);
            float sin = sin((uvLength - time * speed / num) * PI * 2.0 * num);
            float high = 0.999;
            float medium = 0.95;
            
            if (sin > high) {
                fragColor = vec4(mix(vec3(.8, 1., 1.), color, (1. - sin) / (1. - high)), 1.);
            } else if(sin > medium) {
                fragColor = vec4(color, mix(1., 0., 1.-(sin - medium) / (high - medium)));
            } else {
                fragColor = vec4(color, 0.);
            }
            gl_FragColor = vec4(fragColor.rgb, fragColor.a * opacity * (1. - uvLength));
        }
    `,
    uniforms: {
      speed: { value: i },
      radius: { value: s },
      time: { value: 0 },
      num: { value: n },
      color: { value: new X(e) },
      opacity: { value: t }
    }
  };
  return new Me(r);
}
function ng(a) {
  const e = new X(a.color !== void 0 ? a.color : 16711680), t = a.opacity !== void 0 ? a.opacity : 0.8, s = a.radius !== void 0 ? a.radius : 1, n = a.speed !== void 0 ? a.speed : 1, i = {
    transparent: !0,
    blending: Fn,
    depthWrite: !1,
    side: ft,
    depthTest: !0,
    vertexShader: `
        varying vec2 vUv;
        varying float uvLength;
        void main() {
            vUv.x = (uv.x - 0.5) * 2.0;
            vUv.y = (uv.y - 0.5) * 2.0;
            uvLength = length(vUv);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform float radius;     
        uniform float time;            
        uniform float speed; 
        varying vec2 vUv;
        varying float uvLength;
        uniform vec3 color;
        uniform float opacity;
        #define PI 3.14159265
        void main() {
            vec4 fragColor = vec4(color, 0.0);
            float timeDelta = (time * speed - floor(time * speed));
            const float innerLength = 0.2;
            const float outerLength = 0.05;
            float midLength = timeDelta * (1.0 - innerLength - outerLength) + innerLength;
            float maxLength = clamp(midLength + outerLength, 0.0, 1.0);

            
            float alpha1 = 0.0;
            float alpha2 = sin((timeDelta + 0.7) * PI * 0.5);
            if (uvLength > maxLength) {
                alpha1 = 0.0;
            } else if (uvLength > midLength) {
                alpha1 = (maxLength - uvLength) / ( maxLength - midLength);
            } else {
                alpha1 = uvLength / midLength;
            }
            float alpha = alpha1 * alpha2;
            fragColor = vec4(color, alpha);
            gl_FragColor = vec4(fragColor.rgb, fragColor.a * opacity);
        }
    `,
    uniforms: {
      speed: { value: n },
      radius: { value: s },
      time: { value: 0 },
      color: { value: new X(e) },
      opacity: { value: t }
    }
  };
  return new Me(i);
}
class ig extends De {
  constructor(e, t = {}) {
    super(e);
    let s;
    t.material instanceof ut ? s = t.material : t.material === "ripple" ? s = ao(t) : t.material === "radar" ? s = sg(t) : t.material === "spread" ? s = ng(t) : s = ao(t), this.material = s, this._startTime = 0;
  }
  updateSceneTime(e, t, s) {
    this._startTime === 0 && (this._startTime = e);
    const n = e - this._startTime;
    this.material instanceof Me && (this.material.uniforms.time.value = n / 1e3);
  }
}
function rg(a, e) {
  const { geometries: t } = a, { getCircleRadius: s, radius: n, segments: i = 32 } = e, r = t.pointFeatures, o = tg(r, s === void 0 ? n : s, i);
  return new ig(o, e);
}
function ag(a, e, t, s) {
  const n = a.coordinates, i = [];
  n.forEach((c) => {
    const A = new x(c[0], c[1], c.length > 2 ? c[2] : 0);
    i.push(A);
  });
  const r = new ar(i);
  return new YA(r, e, t, s);
}
function og(a, e) {
  const { tubeRadius: t, tubularSegments: s, radialSegments: n, getTubeRadius: i } = e, r = [];
  return a.forEach((c) => {
    const A = c.__source.object, l = ts(i, A) | t, h = ag(c.geometry, s, l, n);
    r.push(h);
  }), Ds(r);
}
class cg extends De {
  constructor(e, t = {}) {
    super(e), this.material = t instanceof ut ? t : new ye(t), this._startTime = 0;
  }
  updateSceneTime(e, t, s) {
    if (this.material instanceof ye && this.material.map && this.speed) {
      this._startTime === 0 && (this._startTime = e);
      const n = e - this._startTime;
      this.material.map.offset.x = n / 1e3 * this.speed;
    }
  }
}
function Ag(a, e) {
  const { geometries: t } = a, { material: s, speed: n } = e, i = t.lineFeatures.length > 0 ? t.lineFeatures : t.polygonOutlineFeatures.length > 0 ? t.polygonOutlineFeatures : [], r = og(i, e), o = new cg(r, s);
  return o.speed = n, o;
}
const Si = {
  water: Kf,
  line: Vf,
  polygon: Bf,
  building: Nf,
  fence: $f,
  circle: rg,
  tube: Ag
};
class lg {
  static supportMeshLayer(e) {
    return Si.hasOwnProperty(e);
  }
  static create(e, t) {
    const { id: s, data: n, type: i, callback: r, ...o } = t;
    if (!Si.hasOwnProperty(i))
      return console.warn(`Mesh type ${i} is not supported`), null;
    const c = Si[i];
    return c ? c(e, o) : null;
  }
}
class hg extends Ot {
  constructor(e) {
    super(), this._options = e, this._featrueData = void 0, this._meshObject = void 0;
  }
  updateSceneTransform() {
    if (this._featrueData == null) return;
    const e = [this._featrueData.centroid[0], this._featrueData.centroid[1]], t = this._scene.toScenePosition(e);
    this.position.set(t.x, t.y, t.z), this.updateMatrixWorld(!0);
  }
  updateSceneTime(e, t) {
    this._meshObject && this._meshObject.updateSceneTime && this._meshObject.updateSceneTime(e, t, this._scene);
  }
  addToScene(e) {
    return Kd(this._options.data).then((t) => {
      this._featrueData = t;
      const s = [this._featrueData.centroid[0], this._featrueData.centroid[1]];
      Wd(this._featrueData, s), this._scene = e, this.updateSceneTransform();
      const n = lg.create(this._featrueData, this._options);
      n && (this._meshObject = n, this.add(n), this._options.callback && this._options.callback(n, this._featrueData));
    }), super.addToScene(e);
  }
  removeFromScene() {
    return this._meshObject && (this.remove(this._meshObject), this._meshObject = void 0), super.removeFromScene();
  }
}
class ug extends Ot {
  constructor(e, t) {
    super(), this._label = null, this._object = e, this._options = t, this._parentObjectName = "ObjectLabelGroup";
  }
  updateSceneTransform() {
    const e = this._options, t = this._object, s = e && e.anchor || "center", n = new Le().setFromObject(t), i = this._getAnchor(s, n);
    this._label.position.copy(i);
  }
  addToScene(e) {
    const t = this._options;
    let s = t instanceof HTMLElement ? t : t.element, n = new H().fromArray(t && t.offset || [0, 0]);
    return this._label = new No(s), this._label.center = n, this.add(this._label), super.addToScene(e);
  }
  removeFromScene() {
    return this._label && this.remove(this._label), super.removeFromScene();
  }
  _getAnchor(e, t) {
    const s = t.getCenter(new x());
    switch (e) {
      case "center":
        return s;
      case "top":
        return new x(s.x, s.y, t.max.z);
      case "bottom":
        return new x(s.x, s.y, t.min.z);
      case "left":
        return new x(t.min.x, s.y, s.z);
      case "right":
        return new x(t.max.x, s.y, s.z);
      case "front":
        return new x(s.x, t.min.y, s.z);
      case "back":
        return new x(s.x, t.max.y, s.z);
      default:
        return s;
    }
  }
}
class dg extends Ot {
  constructor(e, t) {
    super(), this._object = e, this._options = t, this._parentObjectName = "ObjectPathGroup", this._time = 0;
  }
  updateSceneTransform() {
    this._options.path && (this._options.points = this._options.path.map((e) => this._scene.toScenePosition(e)), this._path = new ar(this._options.points, !1)), this.updateMatrixWorld(!0);
  }
  updateSceneTime(e, t) {
    this._time += t;
    const s = this._time % this._options.duration / this._options.duration;
    let n = this._path.getPointAt(s), i = this._path.getTangentAt(s).normalize(), r = n.clone().add(i);
    if (this._object.parent) {
      const c = this._object.parent.matrixWorld.clone().invert();
      n = n.applyMatrix4(c), r = r.applyMatrix4(c);
    }
    const o = new z();
    o.lookAt(r, n, new x(0, 0, 1)), this._object.position.copy(n), this._object.quaternion.setFromRotationMatrix(o);
  }
}
class fg extends Ot {
  constructor(e) {
    super(), this._options = e, this._parentObjectName = "ObjectMarkerGroup", this._markers = [];
  }
  updateSceneTransform() {
    this._markers.length == this._options.data.length && (this._options.data.forEach((e, t) => {
      e.position && (e.point = this._scene.toScenePosition(e.position)), this._markers[t].position.copy(e.point);
    }), this.updateMatrixWorld(!0));
  }
  addToScene(e) {
    return this.name = this._options.id + "-root", this._markers = [], this._options.data.forEach((t) => {
      const s = new No(t.element);
      this.add(s), this._markers.push(s);
    }), super.addToScene(e);
  }
  removeFromScene() {
    return this.clear(), this._markers = [], super.removeFromScene();
  }
}
var Xt = {
  defaultRadius: 40,
  defaultRenderer: "canvas2d",
  defaultGradient: {
    0.25: "rgb(0,0,255)",
    0.55: "rgb(0,255,0)",
    0.85: "yellow",
    1: "rgb(255,0,0)"
  },
  defaultMaxOpacity: 1,
  defaultMinOpacity: 0,
  defaultBlur: 0.85,
  defaultXField: "x",
  defaultYField: "y",
  defaultValueField: "value",
  plugins: {}
}, gg = (function() {
  var e = function(n) {
    this._coordinator = {}, this._data = [], this._radi = [], this._min = 10, this._max = 1, this._xField = n.xField || n.defaultXField, this._yField = n.yField || n.defaultYField, this._valueField = n.valueField || n.defaultValueField, n.radius && (this._cfgRadius = n.radius);
  }, t = Xt.defaultRadius;
  return e.prototype = {
    // when forceRender = false -> called from setData, omits renderall event
    _organiseData: function(s, n) {
      var i = s[this._xField], r = s[this._yField], o = this._radi, c = this._data, A = this._max, l = this._min, h = s[this._valueField] || 1, u = s.radius || this._cfgRadius || t;
      c[i] || (c[i] = [], o[i] = []), c[i][r] ? c[i][r] += h : (c[i][r] = h, o[i][r] = u);
      var d = c[i][r];
      return d > A ? (n ? this.setDataMax(d) : this._max = d, !1) : d < l ? (n ? this.setDataMin(d) : this._min = d, !1) : {
        x: i,
        y: r,
        value: h,
        radius: u,
        min: l,
        max: A
      };
    },
    _unOrganizeData: function() {
      var s = [], n = this._data, i = this._radi;
      for (var r in n)
        for (var o in n[r])
          s.push({
            x: r,
            y: o,
            radius: i[r][o],
            value: n[r][o]
          });
      return {
        min: this._min,
        max: this._max,
        data: s
      };
    },
    _onExtremaChange: function() {
      this._coordinator.emit("extremachange", {
        min: this._min,
        max: this._max
      });
    },
    addData: function() {
      if (arguments[0].length > 0)
        for (var s = arguments[0], n = s.length; n--; )
          this.addData.call(this, s[n]);
      else {
        var i = this._organiseData(arguments[0], !0);
        i && (this._data.length === 0 && (this._min = this._max = i.value), this._coordinator.emit("renderpartial", {
          min: this._min,
          max: this._max,
          data: [i]
        }));
      }
      return this;
    },
    setData: function(s) {
      var n = s.data, i = n.length;
      this._data = [], this._radi = [];
      for (var r = 0; r < i; r++)
        this._organiseData(n[r], !1);
      return this._max = s.max, this._min = s.min || 0, this._onExtremaChange(), this._coordinator.emit("renderall", this._getInternalData()), this;
    },
    removeData: function() {
    },
    setDataMax: function(s) {
      return this._max = s, this._onExtremaChange(), this._coordinator.emit("renderall", this._getInternalData()), this;
    },
    setDataMin: function(s) {
      return this._min = s, this._onExtremaChange(), this._coordinator.emit("renderall", this._getInternalData()), this;
    },
    setCoordinator: function(s) {
      this._coordinator = s;
    },
    _getInternalData: function() {
      return {
        max: this._max,
        min: this._min,
        data: this._data,
        radi: this._radi
      };
    },
    getData: function() {
      return this._unOrganizeData();
    }
  }, e;
})(), pg = (function() {
  var e = function(i) {
    var r = i.gradient || i.defaultGradient, o = document.createElement("canvas"), c = o.getContext("2d");
    o.width = 256, o.height = 1;
    var A = c.createLinearGradient(0, 0, 256, 1);
    for (var l in r)
      A.addColorStop(l, r[l]);
    return c.fillStyle = A, c.fillRect(0, 0, 256, 1), c.getImageData(0, 0, 256, 1).data;
  }, t = function(i, r) {
    var o = document.createElement("canvas"), c = o.getContext("2d"), A = i, l = i;
    if (o.width = o.height = i * 2, r == 1)
      c.beginPath(), c.arc(A, l, i, 0, 2 * Math.PI, !1), c.fillStyle = "rgba(0,0,0,1)", c.fill();
    else {
      var h = c.createRadialGradient(A, l, i * r, A, l, i);
      h.addColorStop(0, "rgba(0,0,0,1)"), h.addColorStop(1, "rgba(0,0,0,0)"), c.fillStyle = h, c.fillRect(0, 0, 2 * i, 2 * i);
    }
    return o;
  }, s = function(l) {
    for (var r = [], o = l.min, c = l.max, A = l.radi, l = l.data, h = Object.keys(l), u = h.length; u--; )
      for (var d = h[u], f = Object.keys(l[d]), g = f.length; g--; ) {
        var p = f[g], b = l[d][p], m = A[d][p];
        r.push({
          x: d,
          y: p,
          value: b,
          radius: m
        });
      }
    return {
      min: o,
      max: c,
      data: r
    };
  };
  function n(i) {
    var r = i.container, o = this.shadowCanvas = document.createElement("canvas"), c = this.canvas = i.canvas || document.createElement("canvas");
    this._renderBoundaries = [1e4, 1e4, 0, 0];
    var A = getComputedStyle(i.container) || {};
    c.className = "heatmap-canvas", this._width = c.width = o.width = i.width || +A.width.replace(/px/, ""), this._height = c.height = o.height = i.height || +A.height.replace(/px/, ""), this.shadowCtx = o.getContext("2d"), this.ctx = c.getContext("2d"), c.style.cssText = o.style.cssText = "position:absolute;left:0;top:0;", r.style.position = "relative", r.appendChild(c), this._palette = e(i), this._templates = {}, this._setStyles(i);
  }
  return n.prototype = {
    renderPartial: function(i) {
      i.data.length > 0 && (this._drawAlpha(i), this._colorize());
    },
    renderAll: function(i) {
      this._clear(), i.data.length > 0 && (this._drawAlpha(s(i)), this._colorize());
    },
    _updateGradient: function(i) {
      this._palette = e(i);
    },
    updateConfig: function(i) {
      i.gradient && this._updateGradient(i), this._setStyles(i);
    },
    setDimensions: function(i, r) {
      this._width = i, this._height = r, this.canvas.width = this.shadowCanvas.width = i, this.canvas.height = this.shadowCanvas.height = r;
    },
    _clear: function() {
      this.shadowCtx.clearRect(0, 0, this._width, this._height), this.ctx.clearRect(0, 0, this._width, this._height);
    },
    _setStyles: function(i) {
      this._blur = i.blur == 0 ? 0 : i.blur || i.defaultBlur, i.backgroundColor && (this.canvas.style.backgroundColor = i.backgroundColor), this._width = this.canvas.width = this.shadowCanvas.width = i.width || this._width, this._height = this.canvas.height = this.shadowCanvas.height = i.height || this._height, this._opacity = (i.opacity || 0) * 255, this._maxOpacity = (i.maxOpacity || i.defaultMaxOpacity) * 255, this._minOpacity = (i.minOpacity || i.defaultMinOpacity) * 255, this._useGradientOpacity = !!i.useGradientOpacity;
    },
    _drawAlpha: function(c) {
      for (var r = this._min = c.min, o = this._max = c.max, c = c.data || [], A = c.length, l = 1 - this._blur; A--; ) {
        var h = c[A], u = h.x, d = h.y, f = h.radius, g = Math.min(h.value, o), p = u - f, b = d - f, m = this.shadowCtx, E;
        this._templates[f] ? E = this._templates[f] : this._templates[f] = E = t(f, l);
        var C = (g - r) / (o - r);
        m.globalAlpha = C < 0.01 ? 0.01 : C, m.drawImage(E, p, b), p < this._renderBoundaries[0] && (this._renderBoundaries[0] = p), b < this._renderBoundaries[1] && (this._renderBoundaries[1] = b), p + 2 * f > this._renderBoundaries[2] && (this._renderBoundaries[2] = p + 2 * f), b + 2 * f > this._renderBoundaries[3] && (this._renderBoundaries[3] = b + 2 * f);
      }
    },
    _colorize: function() {
      var i = this._renderBoundaries[0], r = this._renderBoundaries[1], o = this._renderBoundaries[2] - i, c = this._renderBoundaries[3] - r, A = this._width, l = this._height, h = this._opacity, u = this._maxOpacity, d = this._minOpacity, f = this._useGradientOpacity;
      i < 0 && (i = 0), r < 0 && (r = 0), i + o > A && (o = A - i), r + c > l && (c = l - r);
      for (var g = this.shadowCtx.getImageData(i, r, o, c), p = g.data, b = p.length, m = this._palette, E = 3; E < b; E += 4) {
        var C = p[E], I = C * 4;
        if (I) {
          var _;
          h > 0 ? _ = h : C < u ? C < d ? _ = d : _ = C : _ = u, p[E - 3] = m[I], p[E - 2] = m[I + 1], p[E - 1] = m[I + 2], p[E] = f ? m[I + 3] : _;
        }
      }
      this.ctx.putImageData(g, i, r), this._renderBoundaries = [1e3, 1e3, 0, 0];
    },
    getValueAt: function(i) {
      var r, o = this.shadowCtx, c = o.getImageData(i.x, i.y, 1, 1), A = c.data[3], l = this._max, h = this._min;
      return r = Math.abs(l - h) * (A / 255) >> 0, r;
    },
    getDataURL: function() {
      return this.canvas.toDataURL();
    }
  }, n;
})(), mg = (function() {
  var e = !1;
  return Xt.defaultRenderer === "canvas2d" && (e = pg), e;
})(), oo = {
  merge: function() {
    for (var a = {}, e = arguments.length, t = 0; t < e; t++) {
      var s = arguments[t];
      for (var n in s)
        a[n] = s[n];
    }
    return a;
  }
}, bg = (function() {
  var e = (function() {
    function i() {
      this.cStore = {};
    }
    return i.prototype = {
      on: function(r, o, c) {
        var A = this.cStore;
        A[r] || (A[r] = []), A[r].push(function(l) {
          return o.call(c, l);
        });
      },
      emit: function(r, o) {
        var c = this.cStore;
        if (c[r])
          for (var A = c[r].length, l = 0; l < A; l++) {
            var h = c[r][l];
            h(o);
          }
      }
    }, i;
  })(), t = function(n) {
    var i = n._renderer, r = n._coordinator, o = n._store;
    r.on("renderpartial", i.renderPartial, i), r.on("renderall", i.renderAll, i), r.on("extremachange", function(c) {
      n._config.onExtremaChange && n._config.onExtremaChange({
        min: c.min,
        max: c.max,
        gradient: n._config.gradient || n._config.defaultGradient
      });
    }), o.setCoordinator(r);
  };
  function s() {
    var n = this._config = oo.merge(Xt, arguments[0] || {});
    if (this._coordinator = new e(), n.plugin) {
      var i = n.plugin;
      if (Xt.plugins[i]) {
        var r = Xt.plugins[i];
        this._renderer = new r.renderer(n), this._store = new r.store(n);
      } else
        throw new Error("Plugin '" + i + "' not found. Maybe it was not registered.");
    } else
      this._renderer = new mg(n), this._store = new gg(n);
    t(this);
  }
  return s.prototype = {
    addData: function() {
      return this._store.addData.apply(this._store, arguments), this;
    },
    removeData: function() {
      return this._store.removeData && this._store.removeData.apply(this._store, arguments), this;
    },
    setData: function() {
      return this._store.setData.apply(this._store, arguments), this;
    },
    setDataMax: function() {
      return this._store.setDataMax.apply(this._store, arguments), this;
    },
    setDataMin: function() {
      return this._store.setDataMin.apply(this._store, arguments), this;
    },
    configure: function(n) {
      return this._config = oo.merge(this._config, n), this._renderer.updateConfig(this._config), this._coordinator.emit("renderall", this._store._getInternalData()), this;
    },
    repaint: function() {
      return this._coordinator.emit("renderall", this._store._getInternalData()), this;
    },
    getData: function() {
      return this._store.getData();
    },
    getDataURL: function() {
      return this._renderer.getDataURL();
    },
    getValueAt: function(n) {
      return this._store.getValueAt ? this._store.getValueAt(n) : this._renderer.getValueAt ? this._renderer.getValueAt(n) : null;
    }
  }, s;
})();
class Eg {
  static create(e) {
    return new bg(e);
  }
  static register(e, t) {
    Xt.plugins[e] = t;
  }
}
class mr extends xe {
  constructor(e = new x(-1, 1, 0), t = new x(-1, -1, 0), s = new x(1, -1, 0), n = new x(1, 1, 0), i = 1, r = 1) {
    super(), this.type = "HeatmapGeometry", this.parameters = {
      v1: e,
      v2: t,
      v3: s,
      v4: n,
      widthSegments: i,
      heightSegments: r
    };
    const o = Math.floor(i), c = Math.floor(r), A = o + 1, l = c + 1, h = [], u = [], d = [], f = [];
    for (let g = 0; g < l; g++) {
      const p = g / c, b = new x().lerpVectors(e, t, p), m = new x().lerpVectors(n, s, p);
      for (let E = 0; E < A; E++) {
        const C = E / o, I = new x().lerpVectors(b, m, C);
        u.push(I.x, I.y, I.z), d.push(0, 0, 1), f.push(C), f.push(1 - p);
      }
    }
    for (let g = 0; g < c; g++)
      for (let p = 0; p < o; p++) {
        const b = p + A * g, m = p + A * (g + 1), E = p + 1 + A * (g + 1), C = p + 1 + A * g;
        h.push(b, m, C), h.push(m, E, C);
      }
    this.setIndex(h), this.setAttribute("position", new Re(u, 3)), this.setAttribute("normal", new Re(d, 3)), this.setAttribute("uv", new Re(f, 2));
  }
  getUV(e) {
    const { v1: t, v2: s, v3: n, v4: i } = this.parameters, r = (t.y - e.y) / (t.y - s.y), o = (i.y - e.y) / (i.y - n.y), c = (r + o) / 2, A = new x().lerpVectors(t, s, c), l = new x().lerpVectors(i, n, c), h = (A.x - e.x) / (A.x - l.x);
    return new H(h, c);
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new mr(e.v1, e.v2, e.v3, e.v4, e.widthSegments, e.heightSegments);
  }
}
function Cg(a = new x(-1, 1, 0), e = new x(-1, -1, 0), t = new x(1, -1, 0), s = new x(1, 1, 0)) {
  const n = (new x().subVectors(t, e).length() + new x().subVectors(s, a).length()) / 2, i = (new x().subVectors(a, e).length() + new x().subVectors(s, t).length()) / 2;
  return [n, i];
}
class Ig extends Ot {
  constructor(e) {
    super(), this._options = e, this._meshObject = void 0, this._heatmap = void 0, this._heatmapCanvas = void 0;
  }
  updateSceneTransform() {
    let { coordinates: e, data: t } = this._options;
    if (e == null || e.length != 4) {
      const [[s, n, i], [r, o, c]] = qd({
        type: "MultiPoint",
        coordinates: t
      });
      e = [
        [s, o, i],
        [s, n, i],
        [r, n, i],
        [r, o, i]
      ];
    }
    this._boundVertices = [], e.forEach((s) => {
      const n = this._scene.toScenePosition(s);
      this._boundVertices.push(n);
    }), this._dataVertices = [], t.forEach((s) => {
      const n = this._scene.toScenePosition([s[0], s[1]]);
      this._dataVertices.push(new x(n.x, n.y, s[2]));
    }), this.buildHeatmap(), this.updateMatrixWorld(!0);
  }
  buildHeatmap() {
    const e = Cg(this._boundVertices[0], this._boundVertices[1], this._boundVertices[2], this._boundVertices[3]), t = this._options.width || e[0], s = this._options.height || (t ? t / e[0] * e[1] : e[1]), n = this._options.blur || 0.8, i = this._options.radius || 10, r = this._options.gradient || {}, o = document.createElement("heatmap-canvas");
    o.style.width = t.toString(), o.style.height = s.toString(), o.style.position = "absolute", o.style.top = "0", o.style.left = "0", this._heatmapCanvas = o, this._heatmap = Eg.create({
      container: o,
      width: t,
      height: s,
      blur: n,
      radius: i,
      gradient: r
    });
    const c = this._options.widthSegments || 128, A = this._options.heightSegments || c / e[0] * e[1], l = new mr(this._boundVertices[0], this._boundVertices[1], this._boundVertices[2], this._boundVertices[3], c, A);
    let h = [], u = 1 / 0, d = -1 / 0;
    this._dataVertices.forEach((E) => {
      const C = l.getUV(E), I = Math.round(t * C.x), _ = Math.round(s * C.y), B = E.z;
      h.push({ x: I, y: _, value: B }), B > d && (d = B), B < u && (u = B);
    }), this._heatmap.setData({
      data: h,
      max: d * 0.9,
      min: u
    });
    const f = this._options.heightRatio || 1, g = this._options.depthTest || !1, p = new XA(this._heatmap._renderer.canvas);
    p.needsUpdate = !0;
    const b = {
      transparent: !0,
      //   blending: AdditiveBlending,
      depthTest: g,
      side: ft,
      vertexShader: `
        uniform sampler2D heightMap;
        uniform float heightRatio;
        varying vec2 vUv;
        varying float hValue;
        varying vec3 cl;
        void main() {
            vUv = uv;
            vec3 pos = position;
            vec4 c = texture2D(heightMap, vUv);
            cl = c.rgb;
            hValue = c.a;
            pos.z += hValue * heightRatio;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
        }
      `,
      fragmentShader: `
        varying float hValue;
        varying vec3 cl;
        void main() {
            float v = abs(hValue - 1.);
            gl_FragColor = vec4(cl, .8 - v * v*1.1) ; 
        }
      `,
      uniforms: {
        heightMap: { value: p },
        heightRatio: { value: f }
      }
    }, m = new Me(b);
    m.uniforms.heightMap.value = p, this._meshObject = new De(l, m), this.add(this._meshObject);
  }
  updateSceneTime(e, t) {
    this._meshObject && this._meshObject.updateSceneTime && this._meshObject.updateSceneTime(e, t, this._scene);
  }
  addToScene(e) {
    return this._scene = e, super.addToScene(e);
  }
  removeFromScene() {
    return this._meshObject && (this.remove(this._meshObject), this._meshObject = void 0), this._heatmap && (this._heatmap = void 0), this._heatmapCanvas && (this._heatmapCanvas.remove(), this._heatmapCanvas = void 0), super.removeFromScene();
  }
}
class yg {
  constructor(e, t, s) {
    this.runVelocity = 5, this.walkVelocity = 2, this.upVelocity = 0.01, this.rotateVeclocity = 0.02, this.scaleVeclocity = 1, this.fadeDuration = 0.2, this.modelRotateOffset = !0, this.modelRotateAxis = new x(0, 1, 0), this.toggleRun = !1, this.moveForward = !1, this.moveBackward = !1, this.moveLeft = !1, this.moveRight = !1, this.moveUp = !1, this.moveDown = !1, this.model = e, this.mixer = t, this.camera = s;
  }
  toggleVisible() {
    this.model.visible = !this.model.visible;
  }
  _getAnimation(e) {
    switch (e) {
      case "idle":
        return this.idleAnimationAction;
      case "walk":
        return this.walkAnimationAction || this.runAnimationAction || this.idleAnimationAction;
      case "run":
        return this.runAnimationAction || this.walkAnimationAction || this.idleAnimationAction;
    }
  }
  toggleAction(e) {
    if (this.currentAction != e) {
      const t = this._getAnimation(e), s = this._getAnimation(this.currentAction);
      t !== s ? (s == null || s.fadeOut(this.fadeDuration), t == null || t.reset().fadeIn(this.fadeDuration).play()) : t == null || t.play(), this.currentAction = e;
    }
  }
  update(e) {
    var i, r, o;
    if (this.moveUp || this.moveDown) {
      const c = this.upVelocity * this.scaleVeclocity * (this.moveUp ? 1 : -1);
      this.moveWorldPosition(0, 0, c);
    }
    var t = !1;
    if (this.moveBackward || this.moveForward || this.moveLeft || this.moveRight) {
      t = !0;
      const c = new x(0, 0, 1);
      (i = this.camera) == null || i.getWorldPosition(c);
      const A = new x();
      this.model.getWorldPosition(A);
      var s = Math.atan2(c.x - A.x, -(c.y - A.y)), n = this.directionOffset();
      const l = new qe();
      l.setFromAxisAngle(this.modelRotateAxis, s + (this.modelRotateOffset ? n : 0)), this.model.quaternion.rotateTowards(l, this.rotateVeclocity);
      const h = new x(0, 0, 1), u = new x(0, 1, 0);
      (r = this.camera) == null || r.getWorldDirection(u), u.z = 0, u.normalize(), u.applyAxisAngle(h, n);
      const f = (this.toggleRun ? this.runVelocity : this.walkVelocity) * 0.01 * this.scaleVeclocity, g = u.x * f, p = u.y * f;
      this.moveWorldPosition(g, p, 0);
    }
    t ? this.toggleAction(this.toggleRun ? "run" : "walk") : this.toggleAction("idle"), (o = this.mixer) == null || o.update(e);
  }
  moveWorldPosition(e, t, s) {
    const n = new x();
    if (this.model.getWorldPosition(n), n.x += e, n.y += t, n.z += s, this.model.parent) {
      const i = new z().copy(this.model.parent.matrixWorld).invert(), r = n.clone().applyMatrix4(i);
      this.model.position.copy(r);
    } else
      this.model.position.copy(n);
  }
  directionOffset() {
    var e = 0;
    return this.moveForward ? this.moveLeft ? e = Math.PI / 4 : this.moveRight && (e = -Math.PI / 4) : this.moveBackward ? this.moveLeft ? e = Math.PI / 4 + Math.PI / 2 : this.moveRight ? e = -Math.PI / 4 - Math.PI / 2 : e = Math.PI : this.moveLeft ? e = Math.PI / 2 : this.moveRight && (e = -Math.PI / 2), e;
  }
}
function br(a, ...e) {
  for (const t of e)
    for (const s in t)
      a[s] = t[s];
  return a;
}
function eA(a, e) {
  a.forEach((t) => {
    e[t] && (e[t] = e[t].bind(e));
  });
}
class xg {
  constructor(e) {
    this.character = e, eA(["keydown", "keyup"], this);
  }
  keydown(e) {
    const t = this.character;
    switch (e.key.toLowerCase()) {
      case "shift":
        t.toggleRun = !0;
        break;
      case "=":
      case "+":
        t.scaleVeclocity *= 1.05, t.scaleVeclocity > 100 && (t.scaleVeclocity = 100);
        break;
      case "-":
      case "_":
        t.scaleVeclocity *= 0.95, t.scaleVeclocity < 0.01 && (t.scaleVeclocity = 0.01);
        break;
      case "v":
        t.toggleVisible();
        break;
      case "w":
        t.moveForward = !0;
        break;
      case "s":
        t.moveBackward = !0;
        break;
      case "a":
        t.moveLeft = !0;
        break;
      case "d":
        t.moveRight = !0;
        break;
      case "q":
        t.moveUp = !0;
        break;
      case "e":
        t.moveDown = !0;
        break;
    }
  }
  keyup(e) {
    const t = this.character;
    switch (e.key.toLowerCase()) {
      case "shift":
        t.toggleRun = !1;
        break;
      case "w":
        t.moveForward = !1;
        break;
      case "s":
        t.moveBackward = !1;
        break;
      case "a":
        t.moveLeft = !1;
        break;
      case "d":
        t.moveRight = !1;
        break;
      case "q":
        t.moveUp = !1;
        break;
      case "e":
        t.moveDown = !1;
        break;
    }
  }
  enable() {
    window.addEventListener("keyup", this.keyup), window.addEventListener("keydown", this.keydown);
  }
  disable() {
    window.removeEventListener("keyup", this.keyup), window.removeEventListener("keydown", this.keydown);
  }
  update(e) {
  }
}
class Er {
  constructor() {
    this.object = null, this.objectPosition = new x(0, 0, 0), this.objectHeight = 1, this.cameraPitch = 0, this.cameraBearing = 0, this.cameraDistance = 10, this.cameraMaxDistance = 1e4, this.cameraMinDistance = 1, this.cameraMaxPitch = 85, this.cameraMinPitch = 0, this.cameraMaxBearing = 0, this.cameraMinBearing = 0, this._cameraPosition = new x(), this._targetPosition = new x();
  }
  _limitCamera() {
    this.cameraMinBearing < this.cameraMaxBearing && (this.cameraBearing = ee.clamp(this.cameraBearing, this.cameraMinBearing, this.cameraMaxBearing)), this.cameraMinPitch < this.cameraMaxPitch && (this.cameraPitch = ee.clamp(this.cameraPitch, this.cameraMinPitch, this.cameraMaxPitch)), this.cameraMinDistance < this.cameraMaxDistance && (this.cameraDistance = ee.clamp(this.cameraDistance, this.cameraMinDistance, this.cameraMaxDistance));
  }
  _calcCameraPosition() {
    var A;
    (A = this.object) == null || A.getWorldPosition(this.objectPosition), this.objectPosition.z += this.objectHeight, this.objectPosition.z < 0.01 && (this.objectPosition.z = 0.01);
    const e = ee.degToRad(this.cameraPitch), t = ee.degToRad(this.cameraBearing), s = Math.sin(e), n = -s * Math.sin(t), i = -s * Math.cos(t), r = Math.cos(e), o = new x(n, i, r);
    let c = this.objectPosition.z / r;
    this._targetPosition.copy(this.objectPosition).addScaledVector(o, -c), this._cameraPosition.copy(this.objectPosition).addScaledVector(o, this.cameraDistance);
  }
  update(e) {
    this._limitCamera(), this._calcCameraPosition();
  }
  getCameraPosition() {
    return this._cameraPosition;
  }
  getTargetPosition() {
    return this._targetPosition;
  }
}
class Bg {
  constructor(e) {
    this.zoomSpeed = 1, this.rotateXSpeed = 1, this.rotateYSpeed = 1, this._moveLook = !1, this._pointerX = 0, this._pointerY = 0, this._pointerXLast = 0, this._pointerYLast = 0, this.followCamera = e, eA(["mousedown", "mousemove", "mouseup", "mousewheel", "contextmenu"], this);
  }
  mousewheel(e) {
    const t = this.followCamera, s = this;
    let n = e.deltaMode === WheelEvent.DOM_DELTA_LINE ? e.deltaY * 40 : e.deltaY;
    const i = s.zoomSpeed, r = Math.abs(n * 0.01), o = Math.pow(0.95, i * r);
    n < 0 ? t.cameraDistance *= o : t.cameraDistance /= o;
  }
  mousedown(e) {
    switch (this._pointerX = e.pageX, this._pointerY = e.pageY, this._pointerXLast = this._pointerX, this._pointerYLast = this._pointerY, e.button) {
      case 2:
        this._moveLook = !0;
        break;
    }
  }
  mouseup(e) {
    switch (e.button) {
      case 2:
        this._moveLook = !1;
        break;
    }
  }
  mousemove(e) {
    if (this._pointerX = e.pageX, this._pointerY = e.pageY, this._moveLook) {
      const t = this.rotateXSpeed, s = this.rotateYSpeed, n = 0.5 * t, i = (this._pointerX - this._pointerXLast) * n, r = -0.3 * s, o = (this._pointerY - this._pointerYLast) * r;
      this.followCamera.cameraBearing += i, this.followCamera.cameraPitch += o;
    }
    this._pointerXLast = this._pointerX, this._pointerYLast = this._pointerY;
  }
  contextmenu(e) {
    e.preventDefault();
  }
  enable() {
    window.addEventListener("wheel", this.mousewheel), window.addEventListener("pointerdown", this.mousedown), window.addEventListener("pointerup", this.mouseup), window.addEventListener("pointermove", this.mousemove), window.addEventListener("contextmenu", this.contextmenu);
  }
  disable() {
    window.removeEventListener("wheel", this.mousewheel), window.removeEventListener("pointerdown", this.mousedown), window.removeEventListener("pointerup", this.mouseup), window.removeEventListener("pointermove", this.mousemove), window.removeEventListener("contextmenu", this.contextmenu);
  }
  update(e) {
  }
}
class Cr {
  constructor(e) {
    this.enabled = !1, this.dragPan = void 0, this.dragRotate = void 0, this.scrollZoom = void 0, this.keyboard = void 0, this.scene = e;
  }
  enable() {
    this.enabled = !0, this.scene.addEventListener(xs, this.onSceneUpdate.bind(this));
    const e = this.scene.getMap();
    this.dragPan = e.dragPan.isEnabled(), this.dragRotate = e.dragRotate.isEnabled(), this.scrollZoom = e.scrollZoom.isEnabled(), this.keyboard = e.keyboard.isEnabled(), e.dragPan.disable(), e.dragRotate.disable(), e.scrollZoom.disable(), e.keyboard.disable();
  }
  disable() {
    const e = this.scene.getMap();
    this.dragPan ? e.dragPan.enable() : e.dragPan.disable(), this.dragRotate ? e.dragRotate.enable() : e.dragRotate.disable(), this.scrollZoom ? e.scrollZoom.enable() : e.scrollZoom.disable(), this.keyboard ? e.keyboard.enable() : e.keyboard.disable(), this.dragPan = void 0, this.dragRotate = void 0, this.scrollZoom = void 0, this.keyboard = void 0, this.scene.removeEventListener(xs, this.onSceneUpdate.bind(this)), this.enabled = !1;
  }
  onSceneUpdate(e) {
    this.update(e.delta / 1e3);
  }
  update(e) {
  }
}
function Ir(a, e) {
  const t = a.getMap(), s = e.getTargetPosition(), n = e.getCameraPosition(), i = e.cameraBearing, r = e.cameraPitch, o = new x().subVectors(n, s).length(), c = a.toMapPosition(s), A = t.transform.pixelsPerMeter / t.transform.worldSize * o, l = t.transform._zoomFromMercatorZ(A);
  return {
    // @ts-ignore
    center: c,
    bearing: i,
    pitch: r,
    zoom: l
  };
}
const _g = {
  model: void 0,
  mixer: void 0,
  idleAnimationAction: void 0,
  walkAnimationAction: void 0,
  runAnimationAction: void 0,
  runVelocity: 5,
  walkVelocity: 2,
  upVelocity: 0.01,
  rotateVeclocity: 0.02,
  scaleVeclocity: 1,
  fadeDuration: 0.2,
  modelRotateOffset: !0,
  modelRotateAxis: new x(0, 1, 0),
  objectHeight: 1,
  cameraPitch: 0,
  cameraBearing: 0,
  cameraDistance: 10,
  cameraMaxDistance: 100,
  cameraMinDistance: 1,
  cameraMaxPitch: 85,
  cameraMinPitch: 0,
  cameraMaxBearing: 0,
  cameraMinBearing: 0
};
class wg extends Cr {
  constructor(e, t) {
    super(e), this.mapCameraPosition = {}, t = br({}, _g, t);
    const s = e.getCamera(), n = t.model, i = t.mixer;
    this.character = new yg(n, i, s), this.character.idleAnimationAction = t.idleAnimationAction, this.character.walkAnimationAction = t.walkAnimationAction, this.character.runAnimationAction = t.runAnimationAction, this.character.runVelocity = t.runVelocity, this.character.walkVelocity = t.walkVelocity, this.character.upVelocity = t.upVelocity, this.character.rotateVeclocity = t.rotateVeclocity, this.character.scaleVeclocity = t.scaleVeclocity, this.character.fadeDuration = t.fadeDuration, this.character.modelRotateOffset = t.modelRotateOffset, this.character.modelRotateAxis = t.modelRotateAxis, this.followCamera = new Er(), this.followCamera.object = n, this.followCamera.objectHeight = t.objectHeight, this.followCamera.cameraPitch = t.cameraPitch, this.followCamera.cameraBearing = t.cameraBearing, this.followCamera.cameraDistance = t.cameraDistance, this.followCamera.cameraMaxDistance = t.cameraMaxDistance, this.followCamera.cameraMinDistance = t.cameraMinDistance, this.followCamera.cameraMaxPitch = t.cameraMaxPitch, this.followCamera.cameraMinPitch = t.cameraMinPitch, this.followCamera.cameraMaxBearing = t.cameraMaxBearing, this.followCamera.cameraMinBearing = t.cameraMinBearing, this.characterHandle = new xg(this.character), this.followCameraHandle = new Bg(this.followCamera);
  }
  update(e) {
    if (!this.enabled)
      return;
    this.characterHandle.update(e), this.followCameraHandle.update(e), this.UpdateMapCameraPosition(e), this.scene.getMap().jumpTo(this.mapCameraPosition);
  }
  UpdateMapCameraPosition(e = 0) {
    return this.character.update(e), this.followCamera.update(e), this.mapCameraPosition = Ir(this.scene, this.followCamera), this.mapCameraPosition;
  }
  enable() {
    super.enable(), this.characterHandle.enable(), this.followCameraHandle.enable();
  }
  disable() {
    this.characterHandle.disable(), this.followCameraHandle.disable(), super.disable();
  }
}
const vg = {
  path: [],
  points: [],
  pathClose: !1,
  duration: 10,
  cameraPitch: 45,
  cameraBearing: 0,
  cameraDistance: 10
};
class Sg extends Cr {
  constructor(e, t) {
    super(e), this.mapCameraPosition = {}, this.options = br({}, vg, t), this.followCamera = new Er(), this.updatePath();
  }
  updatePath() {
    this.options.path && (this.options.points = this.options.path.map((e) => this.scene.toScenePosition(e))), this.options.points && (this._time = 0, this._path = new ar(this.options.points, this.options.pathClose));
  }
  update(e) {
    if (!this.enabled)
      return;
    this.UpdateMapCameraPosition(e), this.scene.getMap().jumpTo(this.mapCameraPosition);
  }
  UpdateMapCameraPosition(e = 0) {
    if (this._path === void 0)
      return;
    this._time += e;
    const t = this._time % this.options.duration / this.options.duration;
    let s = this._path.getPointAt(t), n = this._path.getTangentAt(t).normalize();
    return n.projectOnPlane(new x(0, 0, 1)).normalize(), this.followCamera.cameraPitch = this.options.cameraPitch, this.followCamera.cameraDistance = this.options.cameraDistance, this.followCamera.cameraBearing = this.options.cameraBearing + ee.radToDeg(Math.atan2(n.x, n.y)), this.followCamera.objectPosition.copy(s), this.followCamera.update(e), this.mapCameraPosition = Ir(this.scene, this.followCamera), this.mapCameraPosition;
  }
}
const Tg = {
  position: void 0,
  point: void 0,
  duration: 10,
  isClockwise: !0,
  cameraBearing: 0,
  cameraPitch: 45,
  cameraDistance: 10
};
class Qg extends Cr {
  constructor(e, t) {
    super(e), this.mapCameraPosition = {}, this.options = br({}, Tg, t), this.followCamera = new Er(), this.updatePosition();
  }
  updatePosition() {
    this.options.position && (this.options.point = this.scene.toScenePosition(this.options.position)), this.options.point && (this._time = 0);
  }
  update(e) {
    if (!this.enabled)
      return;
    this.UpdateMapCameraPosition(e), this.scene.getMap().jumpTo(this.mapCameraPosition);
  }
  UpdateMapCameraPosition(e = 0) {
    if (this.options.point === void 0)
      return;
    this._time += e;
    let t = this._time % this.options.duration / this.options.duration;
    return this.options.isClockwise && (t = 1 - t), this.followCamera.cameraPitch = this.options.cameraPitch, this.followCamera.cameraDistance = this.options.cameraDistance, this.followCamera.cameraBearing = this.options.cameraBearing + t * 360, this.followCamera.objectPosition.copy(this.options.point), this.followCamera.update(e), this.mapCameraPosition = Ir(this.scene, this.followCamera), this.mapCameraPosition;
  }
}
class Rg {
  constructor(e) {
    this._scene = e, this._controls = void 0;
  }
  setControls(e) {
    let t = null;
    switch (e.type) {
      case "firstPerson":
        t = new wg(this._scene, e);
        break;
      case "alongPath":
        t = new Sg(this._scene, e);
        break;
      case "aroundPoint":
        t = new Qg(this._scene, e);
        break;
    }
    return this._setControls(t), t;
  }
  getControls() {
    return this._controls;
  }
  _setControls(e) {
    this._controls !== e && (this._controls && this._controls.disable(), this._controls = e, this._controls && this._controls.enable());
  }
}
class tA {
  constructor(e) {
    this.type = "custom", this.renderingMode = "3d", this.onAdd = (t, s) => {
      var o;
      this._map = t, this._map.transform.setOrthographicProjectionAtLowPitch(!1), this._scene = this._helper.createScene(this._options.createLight ?? !0), this._sceneRoot = this._helper.createGroup(this._scene, "scene-root"), this._camera = this._helper.createCamera(this._sceneRoot, "camera-for-render"), this._renderer = new el(t, s);
      const n = this._options.refCenter || ((o = this._map) == null ? void 0 : o.getCenter());
      this.setRefCenter(n);
      const i = this._options.envTexture;
      this.setEnvTexture(i);
      const r = this._options.envIntensity || 1;
      this.setEnvIntensity(r), this._sceneControls = new Rg(this);
    }, this.onRemove = (t, s) => {
      this._camera = void 0, this._sceneRoot = void 0, this._scene = void 0, this._renderer = void 0, this._map = void 0;
    }, this.render = (t, s) => {
      !this._map || !this._renderer || !this._scene || !this._camera || (this._helper.updateCameraForRender(this._camera, this._map, s, this._worldMatrix, this._worldMatrixInv), this.update(), this._renderer.render(this._scene, this._camera), this._map.triggerRepaint());
    }, this.id = e.id, this.slot = e.slot, this._helper = new sl(), this._options = {
      ...tA._GetDefaultOptions(),
      ...e
    };
  }
  static _GetDefaultOptions() {
    return {
      id: "threejs-scene-layer"
    };
  }
  _update() {
    var e;
    (e = this._map) == null || e.triggerRepaint();
  }
  addEventListener(e, t) {
    var s;
    (s = this._scene) == null || s.addEventListener(e, t);
  }
  removeEventListener(e, t) {
    var s;
    (s = this._scene) == null || s.removeEventListener(e, t);
  }
  dispatchEvent(e) {
    var t;
    (t = this._scene) == null || t.dispatchEvent(e);
  }
  update() {
    if (!this._map || !this._renderer || !this._scene || !this._camera)
      return;
    const e = Date.now();
    this._startTime === void 0 && (this._startTime = e, this._lastTime = e);
    const t = e - this._lastTime, s = e - this._startTime;
    this._lastTime = e;
    const n = { type: xs, time: s, delta: t };
    this.dispatchEvent(n);
  }
  ////////////////////////////
  getSceneRoot() {
    return this._sceneRoot;
  }
  getRenderer() {
    return this._renderer;
  }
  getWebGLRenderer() {
    return this._renderer.getRenderer();
  }
  getCamera() {
    return this._camera;
  }
  getScene() {
    return this._scene;
  }
  getMap() {
    return this._map;
  }
  getRefCenter() {
    return this._refCenter;
  }
  ////////////////////////////
  // 设置参考中心
  setRefCenter(e) {
    if (this._refCenter !== e && this._map) {
      this._refCenter = e, this._worldMatrix = st.updateWorldMatrix(this._map, e), this._worldMatrixInv = this._worldMatrix.clone().invert(), this._update();
      const t = { type: Li };
      this.dispatchEvent(t);
    }
  }
  // 将地图坐标转换为场景坐标
  toScenePosition(e, t) {
    return Array.isArray(e) && e.length > 2 && t === void 0 && (t = e[2]), st.toScenePosition(this._worldMatrixInv, e, t);
  }
  // 将场景坐标转换为地图坐标
  toMapPosition(e) {
    return st.toMapPosition(this._worldMatrix, e);
  }
  toMercatorCoordinate(e) {
    return st.toMapPositionMercator(this._worldMatrix, e);
  }
  // 设置环境纹理
  setEnvTexture(e) {
    this._helper.createEnvTexture(e, this._scene);
  }
  setEnvIntensity(e) {
    this._scene && (this._scene.environmentIntensity = e, this._update());
  }
  ////////////////////////////
  compileAsync(e) {
    return new Promise((t) => {
      var s;
      (s = this._renderer.getRenderer()) == null || s.compileAsync(e, this._camera, this._scene).then(() => {
        t(e);
      });
    });
  }
  findObjectByName(e, t) {
    return t ? t.getObjectByName(e) : this.findObjectByName(e, this._sceneRoot);
  }
  intersectObjects(e, t) {
    t || (t = this._sceneRoot.children), t instanceof Tt && (t = [t]);
    let s = new H();
    s.x = e.x / this._map.transform.width * 2 - 1, s.y = 1 - e.y / this._map.transform.height * 2;
    const n = new ZA();
    return n.layers.set(0), n.setFromCamera(s, this._camera), n.intersectObjects(t, !0);
  }
  ////////////////////////////
  setControls(e) {
    return this._sceneControls.setControls(e);
  }
  ////////////////////////////
  addTileset(e) {
    return new Rd(e).addToScene(this);
  }
  addModel(e) {
    return new Nd(e).addToScene(this);
  }
  addMesh(e) {
    return new hg(e).addToScene(this);
  }
  addLabel(e, t) {
    return new ug(e, t).addToScene(this);
  }
  addPath(e, t) {
    return new dg(e, t).addToScene(this);
  }
  addMarker(e) {
    return new fg(e).addToScene(this);
  }
  addHeatmap(e) {
    return new Ig(e).addToScene(this);
  }
}
export {
  En as AutoReleaseWorkerPool,
  Nd as Model,
  Ot as SceneObject,
  Li as SceneRecenterEventType,
  xs as SceneUpdateEventType,
  tA as ThreejsSceneLayer,
  Rd as Tileset,
  Fu as WorkerPool,
  eA as bindAll,
  br as extend
};
