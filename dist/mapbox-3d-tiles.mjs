import * as Z from "three";
import { Matrix4 as z, Vector3 as x, Object3D as Tt, Vector2 as H, WebGLRenderer as co, DataTextureLoader as nA, HalfFloatType as ke, FloatType as Ve, DataUtils as ps, LinearSRGBColorSpace as he, LinearFilter as ne, Quaternion as qe, Euler as vn, Scene as iA, DirectionalLight as $i, AmbientLight as rA, Group as le, PerspectiveCamera as Sn, EquirectangularReflectionMapping as aA, TrianglesDrawMode as Ao, TriangleFanDrawMode as Zt, TriangleStripDrawMode as Tn, Loader as ns, LoaderUtils as it, FileLoader as He, MeshPhysicalMaterial as ue, Color as X, SRGBColorSpace as Qe, SpotLight as lo, PointLight as ho, InstancedMesh as er, InstancedBufferAttribute as Qn, TextureLoader as uo, ImageBitmapLoader as fo, BufferAttribute as oe, InterleavedBuffer as go, InterleavedBufferAttribute as xt, LinearMipmapLinearFilter as is, NearestMipmapLinearFilter as po, LinearMipmapNearestFilter as mo, NearestMipmapNearestFilter as bo, NearestFilter as $t, RepeatWrapping as es, MirroredRepeatWrapping as Eo, ClampToEdgeWrapping as fe, PointsMaterial as Rn, Material as dt, LineBasicMaterial as tr, MeshStandardMaterial as rs, DoubleSide as gt, MeshBasicMaterial as ye, PropertyBinding as Co, BufferGeometry as xe, SkinnedMesh as Io, Mesh as De, LineSegments as Mn, Line as yo, LineLoop as xo, Points as sr, MathUtils as ee, OrthographicCamera as nr, Skeleton as Bo, AnimationClip as _o, Bone as wo, InterpolateDiscrete as vo, InterpolateLinear as Dn, Texture as ln, VectorKeyframeTrack as hn, NumberKeyframeTrack as un, QuaternionKeyframeTrack as dn, ColorManagement as ys, FrontSide as ir, Interpolant as So, Box3 as Le, Sphere as Fe, DefaultLoadingManager as Ln, Spherical as To, Ray as rr, Plane as Qo, Frustum as oA, Matrix3 as Ro, LoadingManager as cA, EventDispatcher as Ls, Float32BufferAttribute as Re, EdgesGeometry as Mo, BoxGeometry as AA, Box3Helper as lA, Matrix2 as hA, Vector4 as ft, WebGLRenderTarget as Qi, ShaderMaterial as Me, OneFactor as uA, ZeroFactor as dA, CustomBlending as fA, Box2 as gA, CompressedCubeTexture as pA, CompressedArrayTexture as mA, CompressedTexture as Do, NoColorSpace as Sr, RGBA_BPTC_Format as Ri, RGBA_S3TC_DXT5_Format as Mi, RGBA_S3TC_DXT3_Format as Tr, RGB_S3TC_DXT1_Format as Qr, RGBA_S3TC_DXT1_Format as Di, RGBA_ASTC_6x6_Format as Rr, RGBA_ASTC_4x4_Format as rn, RGBA_ETC2_EAC_Format as Lo, RGB_ETC2_Format as Fo, RedFormat as qt, RGFormat as Bt, RGBAFormat as Ie, UnsignedByteType as ve, DataTexture as ut, Data3DTexture as bA, RGB_PVRTC_4BPPV1_Format as EA, RGB_ETC1_Format as CA, RGBA_PVRTC_4BPPV1_Format as IA, RGB_BPTC_UNSIGNED_Format as yA, InstancedBufferGeometry as ar, DynamicDrawUsage as ko, NormalBlending as Po, UnsignedShort4444Type as xA, UnsignedShort5551Type as BA, UnsignedInt5999Type as _A, ByteType as wA, ShortType as vA, UnsignedShortType as SA, IntType as TA, UnsignedIntType as Go, AlphaFormat as QA, RGBFormat as RA, DepthFormat as MA, DepthStencilFormat as DA, RedIntegerFormat as LA, RGIntegerFormat as FA, RGBAIntegerFormat as Uo, UnsignedInt248Type as kA, UVMapping as _t, ShaderLib as an, UniformsUtils as fn, UniformsLib as Wt, InstancedInterleavedBuffer as Li, WireframeGeometry as PA, Line3 as GA, CurvePath as UA, LineCurve3 as NA, MeshMatcapMaterial as OA, MeshNormalMaterial as HA, MeshToonMaterial as zA, MeshDistanceMaterial as jA, MeshDepthMaterial as VA, MeshPhongMaterial as qA, MeshLambertMaterial as KA, AdditiveBlending as Fn, CircleGeometry as WA, CatmullRomCurve3 as or, TubeGeometry as JA, CanvasTexture as YA, Raycaster as XA } from "three";
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
const Ht = new x(), Mr = new z(), Dr = new z(), Lr = new x(), Fr = new x();
class ZA {
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
      f.matrixWorldAutoUpdate === !0 && f.updateMatrixWorld(), g.parent === null && g.matrixWorldAutoUpdate === !0 && g.updateMatrixWorld(), Mr.copy(g.matrixWorldInverse), Dr.multiplyMatrices(g.projectionMatrix, Mr), l(f, f, g), d(f);
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
        Ht.setFromMatrixPosition(f.matrixWorld), Ht.applyMatrix4(Dr);
        const E = Ht.z >= -1 && Ht.z <= 1 && f.layers.test(p.layers) === !0, m = f.element;
        m.style.display = E === !0 ? "" : "none", E === !0 && (f.onBeforeRender(t, g, p), m.style.transform = "translate(" + -100 * f.center.x + "%," + -100 * f.center.y + "%)translate(" + (Ht.x * i + i) + "px," + (-Ht.y * r + r) + "px)", m.parentNode !== c && c.appendChild(m), f.onAfterRender(t, g, p));
        const b = {
          distanceToCameraSquared: h(p, f)
        };
        o.objects.set(f, b);
      }
      for (let E = 0, m = f.children.length; E < m; E++)
        l(f.children[E], g, p);
    }
    function h(f, g) {
      return Lr.setFromMatrixPosition(f.matrixWorld), Fr.setFromMatrixPosition(g.matrixWorld), Lr.distanceToSquared(Fr);
    }
    function u(f) {
      const g = [];
      return f.traverseVisible(function(p) {
        p.isCSS2DObject && g.push(p);
      }), g;
    }
    function d(f) {
      const g = u(f).sort(function(E, m) {
        if (E.renderOrder !== m.renderOrder)
          return m.renderOrder - E.renderOrder;
        const b = o.objects.get(E).distanceToCameraSquared, C = o.objects.get(m).distanceToCameraSquared;
        return b - C;
      }), p = g.length;
      for (let E = 0, m = g.length; E < m; E++)
        g[E].element.style.zIndex = p - E;
    }
  }
}
class $A {
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
    let n = new ZA();
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
class el extends nA {
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
    const r = function(y, _) {
      switch (y) {
        case 1:
          throw new Error("THREE.RGBELoader: Read Error: " + (_ || ""));
        case 2:
          throw new Error("THREE.RGBELoader: Write Error: " + (_ || ""));
        case 3:
          throw new Error("THREE.RGBELoader: Bad File Format: " + (_ || ""));
        default:
        case 4:
          throw new Error("THREE.RGBELoader: Memory Error: " + (_ || ""));
      }
    }, l = `
`, h = function(y, _, v) {
      _ = _ || 1024;
      let M = y.pos, U = -1, F = 0, N = "", P = String.fromCharCode.apply(null, new Uint16Array(y.subarray(M, M + 128)));
      for (; 0 > (U = P.indexOf(l)) && F < _ && M < y.byteLength; )
        N += P, F += P.length, M += 128, P += String.fromCharCode.apply(null, new Uint16Array(y.subarray(M, M + 128)));
      return -1 < U ? (y.pos += F + U + 1, N + P.slice(0, U)) : !1;
    }, u = function(y) {
      const _ = /^#\?(\S+)/, v = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, S = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, M = /^\s*FORMAT=(\S+)\s*$/, U = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, F = {
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
      let N, P;
      for ((y.pos >= y.byteLength || !(N = h(y))) && r(1, "no header found"), (P = N.match(_)) || r(3, "bad initial token"), F.valid |= 1, F.programtype = P[1], F.string += N + `
`; N = h(y), N !== !1; ) {
        if (F.string += N + `
`, N.charAt(0) === "#") {
          F.comments += N + `
`;
          continue;
        }
        if ((P = N.match(v)) && (F.gamma = parseFloat(P[1])), (P = N.match(S)) && (F.exposure = parseFloat(P[1])), (P = N.match(M)) && (F.valid |= 2, F.format = P[1]), (P = N.match(U)) && (F.valid |= 4, F.height = parseInt(P[1], 10), F.width = parseInt(P[2], 10)), F.valid & 2 && F.valid & 4) break;
      }
      return F.valid & 2 || r(3, "missing format specifier"), F.valid & 4 || r(3, "missing image size specifier"), F;
    }, d = function(y, _, v) {
      const S = _;
      if (
        // run length encoding is not allowed so read flat
        S < 8 || S > 32767 || // this file is not run length encoded
        y[0] !== 2 || y[1] !== 2 || y[2] & 128
      )
        return new Uint8Array(y);
      S !== (y[2] << 8 | y[3]) && r(3, "wrong scanline width");
      const M = new Uint8Array(4 * _ * v);
      M.length || r(4, "unable to allocate buffer space");
      let U = 0, F = 0;
      const N = 4 * S, P = new Uint8Array(4), T = new Uint8Array(N);
      let q = v;
      for (; q > 0 && F < y.byteLength; ) {
        F + 4 > y.byteLength && r(1), P[0] = y[F++], P[1] = y[F++], P[2] = y[F++], P[3] = y[F++], (P[0] != 2 || P[1] != 2 || (P[2] << 8 | P[3]) != S) && r(3, "bad rgbe scanline format");
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
          M[U] = T[$ + se], se += S, M[U + 1] = T[$ + se], se += S, M[U + 2] = T[$ + se], se += S, M[U + 3] = T[$ + se], U += 4;
        }
        q--;
      }
      return M;
    }, f = function(y, _, v, S) {
      const M = y[_ + 3], U = Math.pow(2, M - 128) / 255;
      v[S + 0] = y[_ + 0] * U, v[S + 1] = y[_ + 1] * U, v[S + 2] = y[_ + 2] * U, v[S + 3] = 1;
    }, g = function(y, _, v, S) {
      const M = y[_ + 3], U = Math.pow(2, M - 128) / 255;
      v[S + 0] = ps.toHalfFloat(Math.min(y[_ + 0] * U, 65504)), v[S + 1] = ps.toHalfFloat(Math.min(y[_ + 1] * U, 65504)), v[S + 2] = ps.toHalfFloat(Math.min(y[_ + 2] * U, 65504)), v[S + 3] = ps.toHalfFloat(1);
    }, p = new Uint8Array(e);
    p.pos = 0;
    const E = u(p), m = E.width, b = E.height, C = d(p.subarray(p.pos), m, b);
    let I, w, B;
    switch (this.type) {
      case Ve:
        B = C.length / 4;
        const y = new Float32Array(B * 4);
        for (let v = 0; v < B; v++)
          f(C, v * 4, y, v * 4);
        I = y, w = Ve;
        break;
      case ke:
        B = C.length / 4;
        const _ = new Uint16Array(B * 4);
        for (let v = 0; v < B; v++)
          g(C, v * 4, _, v * 4);
        I = _, w = ke;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return {
      width: m,
      height: b,
      data: I,
      header: E.string,
      gamma: E.gamma,
      exposure: E.exposure,
      type: w
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
class tl {
  // 创建场景
  createScene(e = !0) {
    const t = new iA();
    if (e) {
      const s = new $i(16777215, 4);
      s.position.set(1, 2, 3), t.add(s);
      const n = new rA(16777215, 0.2);
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
      const r = (g, p, E) => (1 - E) * g + E * p, o = (g) => g * g * g * g * g, c = (g, p, E, m) => {
        for (let b = 0; b < 16; b++)
          g[b] = r(p[b], E[b], m);
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
    e && e.length > 3 && e.indexOf(".hdr") === e.length - 4 && new el().load(e, (n) => {
      n.mapping = aA, t.environment = n, t.environmentRotation.x = Math.PI / 2;
    });
  }
}
const xs = "scene-update", Fi = "scene-recenter";
function kr(a) {
  if (!a)
    return null;
  const e = a.replace(/[a-z]+:\/\/[^/]+/i, "").replace(/\?.*$/i, "").replace(/.*\//g, ""), t = e.lastIndexOf(".");
  return t === -1 ? null : e.substring(t + 1) || null;
}
const Pr = 2 ** 30;
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
    this.minSize = 6e3, this.maxSize = 8e3, this.minBytesSize = 0.3 * Pr, this.maxBytesSize = 0.4 * Pr, this.unloadPercent = 0.05, this.autoMarkUnused = !0, this.itemSet = /* @__PURE__ */ new Map(), this.itemList = [], this.usedSet = /* @__PURE__ */ new Set(), this.callbacks = /* @__PURE__ */ new Map(), this.unloadingHandle = -1, this.cachedBytes = 0, this.bytesMap = /* @__PURE__ */ new Map(), this.loadedSet = /* @__PURE__ */ new Set(), this._unloadPriorityCallback = null;
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
    let E = !1;
    const m = f > 0 && u > 0 || d && n.length > s;
    if (u && this.cachedBytes > l || d && this.cachedBytes > h || m) {
      n.sort((v, S) => {
        const M = r.has(v), U = r.has(S);
        if (M === U) {
          const F = o.has(v), N = o.has(S);
          return F === N ? -p(v, S) : F ? 1 : -1;
        } else
          return M ? 1 : -1;
      });
      const C = Math.max(t * e, f * e), I = Math.ceil(Math.min(C, u, f)), w = Math.max(e * g, e * l), B = Math.min(w, g);
      let y = 0, _ = 0;
      for (; this.cachedBytes - _ > h || n.length - y > s; ) {
        const v = n[y], S = A.get(v) || 0;
        if (r.has(v) && o.has(v) || this.cachedBytes - _ - S < h && n.length - y <= s)
          break;
        _ += S, y++;
      }
      for (; _ < B || y < I; ) {
        const v = n[y], S = A.get(v) || 0;
        if (r.has(v) || this.cachedBytes - _ - S < l && y >= I)
          break;
        _ += S, y++;
      }
      n.splice(0, y).forEach((v) => {
        this.cachedBytes -= A.get(v) || 0, c.get(v)(v), A.delete(v), i.delete(v), c.delete(v), o.delete(v), r.delete(v);
      }), E = y < f || _ < g && y < u, E = E && y > 0;
    }
    E && (this.unloadingHandle = requestAnimationFrame(() => this.scheduleUnload()));
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
    this.maxJobs = 6, this.items = [], this.callbacks = /* @__PURE__ */ new Map(), this.currJobs = 0, this.scheduled = !1, this.autoUpdate = !0, this.priorityCallback = () => {
      throw new Error("PriorityQueue: PriorityCallback function not defined.");
    }, this.schedulingCallback = (e) => {
      requestAnimationFrame(e);
    }, this._runjobs = () => {
      this.scheduled = !1, this.tryRunJobs();
    };
  }
  sort() {
    const e = this.priorityCallback;
    this.items.sort(e);
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
      s.resolve = n, s.reject = i, r.push(e), o.set(e, s), this.autoUpdate && this.scheduleJobRun();
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
const Kt = -1, ct = 0, Fs = 1, Hn = 2, Bs = 3, Gr = 6378137, sl = 6356752314245179e-9, ks = {
  inView: !1,
  error: 1 / 0,
  distanceFromCamera: 1 / 0
};
function Ho(a) {
  return a === Bs || a === Kt;
}
function vt(a, e) {
  return a.__lastFrameVisited === e && a.__used;
}
function cr(a) {
  return a.__childrenProcessed === a.children.length;
}
function Ar(a, e) {
  a.__lastFrameVisited !== e.frameCount && (a.__lastFrameVisited = e.frameCount, a.__used = !1, a.__inFrustum = !1, a.__isLeaf = !1, a.__visible = !1, a.__active = !1, a.__error = 1 / 0, a.__distanceFromCamera = 1 / 0, a.__childrenWereVisible = !1, a.__allChildrenLoaded = !1, e.calculateTileViewError(a, ks), a.__inFrustum = ks.inView, a.__error = ks.error, a.__distanceFromCamera = ks.distanceFromCamera);
}
function zo(a, e) {
  if (e.ensureChildrenArePreprocessed(a), Ar(a, e), ki(a, e), !a.__hasRenderableContent && cr(a)) {
    const t = a.children;
    for (let s = 0, n = t.length; s < n; s++)
      zo(t[s], e);
  }
}
function jo(a, e) {
  if (e.ensureChildrenArePreprocessed(a), vt(a, e.frameCount) && (a.__hasContent && a.__loadingState === ct && !e.lruCache.isFull() && e.queueTileForDownload(a), cr(a))) {
    const t = a.children;
    for (let s = 0, n = t.length; s < n; s++)
      jo(t[s], e);
  }
}
function ki(a, e) {
  a.__used || (a.__used = !0, e.markTileUsed(a), e.stats.used++, a.__inFrustum === !0 && e.stats.inFrustum++);
}
function nl(a, e) {
  return !(a.__error <= e.errorTarget || e.maxDepth > 0 && a.__depth + 1 >= e.maxDepth || !cr(a));
}
function Pi(a, e = null, t = null) {
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
function Vo(a, e) {
  if (e.ensureChildrenArePreprocessed(a), Ar(a, e), !a.__inFrustum)
    return;
  if (!nl(a, e)) {
    ki(a, e);
    return;
  }
  let t = !1, s = !1;
  const n = a.children;
  for (let i = 0, r = n.length; i < r; i++) {
    const o = n[i];
    Vo(o, e), t = t || vt(o, e.frameCount), s = s || o.__inFrustum;
  }
  if (ki(a, e), t && a.refine === "REPLACE")
    for (let i = 0, r = n.length; i < r; i++) {
      const o = n[i];
      zo(o, e);
    }
}
function qo(a, e) {
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
    let i = !1, r = !0;
    for (let o = 0, c = s.length; o < c; o++) {
      const A = s[o];
      if (qo(A, e), i = i || A.__wasSetVisible || A.__childrenWereVisible, vt(A, t)) {
        const l = A.__allChildrenLoaded || A.__hasRenderableContent && Ho(A.__loadingState) || !A.__hasContent && A.children.length === 0 || A.__hasUnrenderableContent && A.__loadingState === Kt;
        r = r && l;
      }
    }
    a.__childrenWereVisible = i, a.__allChildrenLoaded = r;
  }
}
function Ko(a, e) {
  const t = e.stats;
  if (!vt(a, e.frameCount))
    return;
  const s = e.lruCache;
  if (a.__isLeaf) {
    a.__loadingState === Bs ? (a.__inFrustum && (a.__visible = !0, t.visible++), a.__active = !0, t.active++) : !s.isFull() && a.__hasContent && e.queueTileForDownload(a);
    return;
  }
  const n = a.children, i = a.__hasContent, r = Ho(a.__loadingState) && i, o = (e.errorTarget + 1) * e.errorThreshold, c = a.__error <= o, A = a.__childrenWereVisible, l = a.__allChildrenLoaded;
  if ((c || a.refine === "ADD") && !r && !s.isFull() && i && e.queueTileForDownload(a), (c && !l && !A && r || a.refine === "ADD" && r) && (a.__inFrustum && (a.__visible = !0, t.visible++), a.__active = !0, t.active++), a.refine === "REPLACE" && c && !l)
    for (let u = 0, d = n.length; u < d; u++) {
      const f = n[u];
      vt(f, e.frameCount) && jo(f, e);
    }
  else
    for (let u = 0, d = n.length; u < d; u++)
      Ko(n[u], e);
}
function Wo(a, e) {
  const t = vt(a, e.frameCount);
  if (t || a.__usedLastFrame) {
    let s = !1, n = !1;
    t ? (s = a.__active, e.displayActiveTiles ? n = a.__active || a.__visible : n = a.__visible) : Ar(a, e), a.__hasRenderableContent && a.__loadingState === Bs && (a.__wasSetActive !== s && e.invokeOnePlugin((r) => r.setTileActive && r.setTileActive(a, s)), a.__wasSetVisible !== n && e.invokeOnePlugin((r) => r.setTileVisible && r.setTileVisible(a, n))), a.__wasSetActive = s, a.__wasSetVisible = n, a.__usedLastFrame = t;
    const i = a.children;
    for (let r = 0, o = i.length; r < o; r++) {
      const c = i[r];
      Wo(c, e);
    }
  }
}
function il(a, e = null) {
  let t = a;
  for (; t; ) {
    const s = t.__depth, n = t.parent;
    e && e(t, n, s), t = n;
  }
}
function rl(a) {
  let e = null;
  return () => {
    e === null && (e = requestAnimationFrame(() => {
      e = null, a();
    }));
  };
}
const Ur = Symbol("PLUGIN_REGISTERED"), zn = (a, e) => {
  const t = a.priority || 0, s = e.priority || 0;
  return t !== s ? t > s ? 1 : -1 : a.__depthFromRenderedParent !== e.__depthFromRenderedParent ? a.__depthFromRenderedParent > e.__depthFromRenderedParent ? -1 : 1 : a.__inFrustum !== e.__inFrustum ? a.__inFrustum ? 1 : -1 : a.__used !== e.__used ? a.__used ? 1 : -1 : a.__error !== e.__error ? a.__error > e.__error ? 1 : -1 : a.__distanceFromCamera !== e.__distanceFromCamera ? a.__distanceFromCamera > e.__distanceFromCamera ? -1 : 1 : 0;
}, al = (a, e) => {
  const t = a.priority || 0, s = e.priority || 0;
  return t !== s ? t > s ? 1 : -1 : a.__depthFromRenderedParent !== e.__depthFromRenderedParent ? a.__depthFromRenderedParent > e.__depthFromRenderedParent ? 1 : -1 : a.__loadingState !== e.__loadingState ? a.__loadingState > e.__loadingState ? -1 : 1 : a.__lastFrameVisited !== e.__lastFrameVisited ? a.__lastFrameVisited > e.__lastFrameVisited ? -1 : 1 : a.__hasUnrenderableContent !== e.__hasUnrenderableContent ? a.__hasUnrenderableContent ? -1 : 1 : a.__error !== e.__error ? a.__error > e.__error ? -1 : 1 : 0;
};
class ol {
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
    this.rootLoadingState = ct, this.rootTileSet = null, this.rootURL = e, this.fetchOptions = {}, this.plugins = [], this.queuedTiles = [], this.cachedSinceLoadComplete = /* @__PURE__ */ new Set(), this.isLoading = !1;
    const t = new Oo();
    t.unloadPriorityCallback = al;
    const s = new On();
    s.maxJobs = 25, s.priorityCallback = zn;
    const n = new On();
    n.maxJobs = 5, n.priorityCallback = zn;
    const i = new On();
    i.maxJobs = 25, i.priorityCallback = zn, i.log = !0, this.processedTiles = /* @__PURE__ */ new WeakSet(), this.visibleTiles = /* @__PURE__ */ new Set(), this.activeTiles = /* @__PURE__ */ new Set(), this.usedSet = /* @__PURE__ */ new Set(), this.lruCache = t, this.downloadQueue = s, this.parseQueue = n, this.processNodeQueue = i, this.stats = {
      inCacheSinceLoad: 0,
      inCache: 0,
      parsing: 0,
      downloading: 0,
      failed: 0,
      inFrustum: 0,
      used: 0,
      active: 0,
      visible: 0
    }, this.frameCount = 0, this._dispatchNeedsUpdateEvent = rl(() => {
      this.dispatchEvent({ type: "needs-update" });
    }), this.errorTarget = 16, this._errorThreshold = 1 / 0, this.displayActiveTiles = !1, this.maxDepth = 1 / 0;
  }
  // Plugins
  registerPlugin(e) {
    if (e[Ur] === !0)
      throw new Error("TilesRendererBase: A plugin can only be registered to a single tile set");
    const t = this.plugins, s = e.priority || 0;
    let n = t.length;
    for (let i = 0; i < t.length; i++)
      if ((t[i].priority || 0) > s) {
        n = i;
        break;
      }
    t.splice(n, 0, e), e[Ur] = !0, e.init && e.init(this);
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
    this.root && Pi(this.root, (n, ...i) => (s && this.ensureChildrenArePreprocessed(n, !0), e ? e(n, ...i) : !1), t);
  }
  queueTileForDownload(e) {
    e.__loadingState === ct && this.queuedTiles.push(e);
  }
  markTileUsed(e) {
    this.usedSet.add(e), this.lruCache.markUsed(e);
  }
  // Public API
  update() {
    const { lruCache: e, usedSet: t, stats: s, root: n, downloadQueue: i, parseQueue: r, processNodeQueue: o } = this;
    if (this.rootLoadingState === ct && (this.rootLoadingState = Fs, this.invokeOnePlugin((l) => l.loadRootTileSet && l.loadRootTileSet()).then((l) => {
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
    s.inFrustum = 0, s.used = 0, s.active = 0, s.visible = 0, this.frameCount++, t.forEach((l) => e.markUnused(l)), t.clear(), Vo(n, this), qo(n, this), Ko(n, this), Wo(n, this);
    const c = this.queuedTiles;
    c.sort(e.unloadPriorityCallback);
    for (let l = 0, h = c.length; l < h && !e.isFull(); l++)
      this.requestTileContents(c[l]);
    c.length = 0, e.scheduleUnload(), (i.running || r.running || o.running) === !1 && this.isLoading === !0 && (this.cachedSinceLoadComplete.clear(), s.inCacheSinceLoad = 0, this.dispatchEvent({ type: "tiles-load-end" }), this.isLoading = !1);
  }
  resetFailedTiles() {
    this.rootLoadingState === Kt && (this.rootLoadingState = ct);
    const e = this.stats;
    e.failed !== 0 && (this.traverse((t) => {
      t.__loadingState === Kt && (t.__loadingState = ct);
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
      const i = kr(e.content.uri);
      e.__hasContent = !0, e.__hasUnrenderableContent = !!(i && /json$/.test(i)), e.__hasRenderableContent = !e.__hasUnrenderableContent;
    } else
      e.__hasContent = !1, e.__hasUnrenderableContent = !1, e.__hasRenderableContent = !1;
    e.__childrenProcessed = 0, s && s.__childrenProcessed++, e.__distanceFromCamera = 1 / 0, e.__error = 1 / 0, e.__inFrustum = !1, e.__isLeaf = !1, e.__usedLastFrame = !1, e.__used = !1, e.__wasSetVisible = !1, e.__visible = !1, e.__childrenWereVisible = !1, e.__allChildrenLoaded = !1, e.__wasSetActive = !1, e.__active = !1, e.__loadingState = ct, s === null ? (e.__depth = 0, e.__depthFromRenderedParent = e.__hasRenderableContent ? 1 : 0, e.refine = e.refine || "REPLACE") : (e.__depth = s.__depth + 1, e.__depthFromRenderedParent = s.__depthFromRenderedParent + (e.__hasRenderableContent ? 1 : 0), e.refine = e.refine || s.refine), e.__basePath = t, e.__lastFrameVisited = -1, this.invokeAllPlugins((i) => {
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
    if (e.__loadingState !== ct)
      return;
    let t = !1, s = null, n = new URL(e.content.uri, e.__basePath + "/").toString();
    this.invokeAllPlugins((d) => n = d.preprocessURL ? d.preprocessURL(n, e) : n);
    const i = this.stats, r = this.lruCache, o = this.downloadQueue, c = this.parseQueue, A = kr(n), l = new AbortController(), h = l.signal;
    if (r.add(e, (d) => {
      l.abort(), t ? (d.children.length = 0, d.__childrenProcessed = 0) : this.invokeAllPlugins((f) => {
        f.disposeTile && f.disposeTile(d);
      }), i.inCache--, this.cachedSinceLoadComplete.has(e) && (this.cachedSinceLoadComplete.delete(e), i.inCacheSinceLoad--), d.__loadingState === Fs ? i.downloading-- : d.__loadingState === Hn && i.parsing--, d.__loadingState = ct, c.remove(d), o.remove(d);
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
        if (!h.aborted) {
          if (i.parsing--, e.__loadingState = Bs, r.setLoaded(e, !0), r.getMemoryUsage(e) === 0) {
            const d = this.getBytesUsed(e);
            if (r.isFull() && d > 0) {
              r.remove(e);
              return;
            } else
              r.setMemoryUsage(e, d);
          }
          this.dispatchEvent({ type: "needs-update" }), this.dispatchEvent({ type: "load-content" }), t && this.dispatchEvent({
            type: "load-tile-set",
            tileSet: s,
            url: n
          }), e.cached.scene && this.dispatchEvent({
            type: "load-model",
            scene: e.cached.scene,
            tile: e
          });
        }
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
const cl = new TextDecoder();
function lr(a) {
  return cl.decode(a);
}
function Jo(a, e, t, s, n, i) {
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
      i = JSON.parse(lr(r));
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
        const d = c + l, f = Jo(o, d, t, h, u, e);
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
class Al {
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
      return Jo(n, c, t, "SCALAR", o, s);
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
class hr extends kn {
  get batchSize() {
    return console.warn("BatchTable.batchSize has been deprecated and replaced with BatchTable.count."), this.count;
  }
  constructor(e, t, s, n, i) {
    super(e, s, n, i), this.count = t, this.extensions = {};
    const r = this.header.extensions;
    r && r["3DTILES_batch_table_hierarchy"] && (this.extensions["3DTILES_batch_table_hierarchy"] = new Al(this));
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
function Ut(a) {
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
class ll extends Qs {
  parse(e) {
    const t = new DataView(e), s = Ut(t);
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
    ), g = new hr(
      f,
      u.getData("BATCH_LENGTH"),
      0,
      c,
      A
    ), p = d + c + A, E = new Uint8Array(e, p, i - p);
    return {
      version: n,
      featureTable: u,
      batchTable: g,
      glbBytes: E
    };
  }
}
class hl extends Qs {
  parse(e) {
    const t = new DataView(e), s = Ut(t);
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
    ), p = new hr(
      g,
      d.getData("INSTANCES_LENGTH"),
      0,
      c,
      A
    ), E = f + c + A, m = new Uint8Array(e, E, i - E);
    let b = null, C = null, I = null;
    if (l)
      b = m, C = Promise.resolve();
    else {
      const w = this.resolveExternalURL(lr(m)), B = w.split(/[\\/]/g);
      B.pop(), I = B.join("/"), C = fetch(w, this.fetchOptions).then((y) => {
        if (!y.ok)
          throw new Error(`I3DMLoaderBase : Failed to load file "${w}" with status ${y.status} : ${y.statusText}`);
        return y.arrayBuffer();
      }).then((y) => {
        b = new Uint8Array(y);
      });
    }
    return C.then(() => ({
      version: n,
      featureTable: d,
      batchTable: p,
      glbBytes: b,
      gltfWorkingPath: I
    }));
  }
}
class ul extends Qs {
  parse(e) {
    const t = new DataView(e), s = Ut(t);
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
    ), g = new hr(
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
class dl extends Qs {
  parse(e) {
    const t = new DataView(e), s = Ut(t);
    console.assert(s === "cmpt", 'CMPTLoader: The magic bytes equal "cmpt".');
    const n = t.getUint32(4, !0);
    console.assert(n === 1, 'CMPTLoader: The version listed in the header is "1".');
    const i = t.getUint32(8, !0);
    console.assert(i === e.byteLength, "CMPTLoader: The contents buffer length listed in the header matches the file.");
    const r = t.getUint32(12, !0), o = [];
    let c = 16;
    for (let A = 0; A < r; A++) {
      const l = new DataView(e, c, 12), h = Ut(l), u = l.getUint32(4, !0), d = l.getUint32(8, !0), f = new Uint8Array(e, c, d);
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
function fl(a) {
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
let Pn = class extends ns {
  /**
   * Constructs a new glTF loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new El(t);
    }), this.register(function(t) {
      return new Cl(t);
    }), this.register(function(t) {
      return new Tl(t);
    }), this.register(function(t) {
      return new Ql(t);
    }), this.register(function(t) {
      return new Rl(t);
    }), this.register(function(t) {
      return new yl(t);
    }), this.register(function(t) {
      return new xl(t);
    }), this.register(function(t) {
      return new Bl(t);
    }), this.register(function(t) {
      return new _l(t);
    }), this.register(function(t) {
      return new bl(t);
    }), this.register(function(t) {
      return new wl(t);
    }), this.register(function(t) {
      return new Il(t);
    }), this.register(function(t) {
      return new Sl(t);
    }), this.register(function(t) {
      return new vl(t);
    }), this.register(function(t) {
      return new pl(t);
    }), this.register(function(t) {
      return new Ml(t);
    }), this.register(function(t) {
      return new Dl(t);
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
      if (c.decode(new Uint8Array(e, 0, 4)) === Yo) {
        try {
          r[W.KHR_BINARY_GLTF] = new Ll(e);
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
    const A = new Kl(i, {
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
            r[h] = new ml();
            break;
          case W.KHR_DRACO_MESH_COMPRESSION:
            r[h] = new Fl(i, this.dracoLoader);
            break;
          case W.KHR_TEXTURE_TRANSFORM:
            r[h] = new kl();
            break;
          case W.KHR_MESH_QUANTIZATION:
            r[h] = new Pl();
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
function gl() {
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
let pl = class {
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
        A = new $i(l), A.target.position.set(0, 0, -1), A.add(A.target);
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
}, ml = class {
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
}, bl = class {
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
}, El = class {
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
}, Cl = class {
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
}, Il = class {
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
}, yl = class {
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
}, xl = class {
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
}, Bl = class {
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
}, _l = class {
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
}, wl = class {
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
}, vl = class {
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
}, Sl = class {
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
}, Tl = class {
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
}, Ql = class {
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
}, Rl = class {
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
}, Ml = class {
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
}, Dl = class {
  constructor(e) {
    this.name = W.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, s = t.nodes[e];
    if (!s.extensions || !s.extensions[this.name] || s.mesh === void 0)
      return null;
    const n = t.meshes[s.mesh];
    for (const A of n.primitives)
      if (A.mode !== Ue.TRIANGLES && A.mode !== Ue.TRIANGLE_STRIP && A.mode !== Ue.TRIANGLE_FAN && A.mode !== void 0)
        return null;
    const r = s.extensions[this.name].attributes, o = [], c = {};
    for (const A in r)
      o.push(this.parser.getDependency("accessor", r[A]).then((l) => (c[A] = l, c[A])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((A) => {
      const l = A.pop(), h = l.isGroup ? l.children : [l], u = A[0].count, d = [];
      for (const f of h) {
        const g = new z(), p = new x(), E = new qe(), m = new x(1, 1, 1), b = new er(f.geometry, f.material, u);
        for (let C = 0; C < u; C++)
          c.TRANSLATION && p.fromBufferAttribute(c.TRANSLATION, C), c.ROTATION && E.fromBufferAttribute(c.ROTATION, C), c.SCALE && m.fromBufferAttribute(c.SCALE, C), b.setMatrixAt(C, g.compose(p, E, m));
        for (const C in c)
          if (C === "_COLOR_0") {
            const I = c[C];
            b.instanceColor = new Qn(I.array, I.itemSize, I.normalized);
          } else C !== "TRANSLATION" && C !== "ROTATION" && C !== "SCALE" && f.geometry.setAttribute(C, c[C]);
        Tt.prototype.copy.call(b, f), this.parser.assignFinalMaterial(b), d.push(b);
      }
      return l.isGroup ? (l.clear(), l.add(...d), l) : d[0];
    }));
  }
};
const Yo = "glTF", as = 12, Or = { JSON: 1313821514, BIN: 5130562 };
let Ll = class {
  constructor(e) {
    this.name = W.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, as), s = new TextDecoder();
    if (this.header = {
      magic: s.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Yo)
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
}, Fl = class {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = W.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const s = this.json, n = this.dracoLoader, i = e.extensions[this.name].bufferView, r = e.extensions[this.name].attributes, o = {}, c = {}, A = {};
    for (const l in r) {
      const h = Gi[l] || l.toLowerCase();
      o[h] = r[l];
    }
    for (const l in e.attributes) {
      const h = Gi[l] || l.toLowerCase();
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
}, kl = class {
  constructor() {
    this.name = W.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}, Pl = class {
  constructor() {
    this.name = W.KHR_MESH_QUANTIZATION;
  }
}, Xo = class extends So {
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
    const i = this.resultBuffer, r = this.sampleValues, o = this.valueSize, c = o * 2, A = o * 3, l = n - t, h = (s - t) / l, u = h * h, d = u * h, f = e * A, g = f - A, p = -2 * d + 3 * u, E = d - u, m = 1 - p, b = E - u + h;
    for (let C = 0; C !== o; C++) {
      const I = r[g + C + o], w = r[g + C + c] * l, B = r[f + C + o], y = r[f + C] * l;
      i[C] = m * I + b * w + p * B + E * y;
    }
    return i;
  }
};
const Gl = new qe();
let Ul = class extends Xo {
  interpolate_(e, t, s, n) {
    const i = super.interpolate_(e, t, s, n);
    return Gl.fromArray(i).normalize().toArray(i), i;
  }
};
const Ue = {
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
}, jn = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Gi = {
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
}, Nl = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: Dn,
  STEP: vo
}, Vn = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Ol(a) {
  return a.DefaultMaterial === void 0 && (a.DefaultMaterial = new rs({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: ir
  })), a.DefaultMaterial;
}
function Mt(a, e, t) {
  for (const s in t.extensions)
    a[s] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[s] = t.extensions[s]);
}
function lt(a, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(a.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Hl(a, e, t) {
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
function zl(a, e) {
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
function jl(a) {
  let e;
  const t = a.extensions && a.extensions[W.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + qn(t.attributes) : e = a.indices + ":" + qn(a.attributes) + ":" + a.mode, a.targets !== void 0)
    for (let s = 0, n = a.targets.length; s < n; s++)
      e += ":" + qn(a.targets[s]);
  return e;
}
function qn(a) {
  let e = "";
  const t = Object.keys(a).sort();
  for (let s = 0, n = t.length; s < n; s++)
    e += t[s] + ":" + a[t[s]] + ";";
  return e;
}
function Ui(a) {
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
function Vl(a) {
  return a.search(/\.jpe?g($|\?)/i) > 0 || a.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : a.search(/\.webp($|\?)/i) > 0 || a.search(/^data\:image\/webp/) === 0 ? "image/webp" : a.search(/\.ktx2($|\?)/i) > 0 || a.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const ql = new z();
let Kl = class {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new gl(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
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
      return Mt(i, o, n), lt(o, n), Promise.all(s._invokeAll(function(c) {
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
      const r = jn[n.type], o = Jt[n.componentType], c = n.normalized === !0, A = new o(n.count * r);
      return Promise.resolve(new oe(A, r, c));
    }
    const i = [];
    return n.bufferView !== void 0 ? i.push(this.getDependency("bufferView", n.bufferView)) : i.push(null), n.sparse !== void 0 && (i.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(i).then(function(r) {
      const o = r[0], c = jn[n.type], A = Jt[n.componentType], l = A.BYTES_PER_ELEMENT, h = l * c, u = n.byteOffset || 0, d = n.bufferView !== void 0 ? s.bufferViews[n.bufferView].byteStride : void 0, f = n.normalized === !0;
      let g, p;
      if (d && d !== h) {
        const E = Math.floor(u / d), m = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + E + ":" + n.count;
        let b = t.cache.get(m);
        b || (g = new A(o, E * d, n.count * d / l), b = new go(g, d / l), t.cache.add(m, b)), p = new xt(b, c, u % d / l, f);
      } else
        o === null ? g = new A(n.count * c) : g = new A(o, u, n.count * c), p = new oe(g, c, f);
      if (n.sparse !== void 0) {
        const E = jn.SCALAR, m = Jt[n.sparse.indices.componentType], b = n.sparse.indices.byteOffset || 0, C = n.sparse.values.byteOffset || 0, I = new m(r[1], b, n.sparse.count * E), w = new A(r[2], C, n.sparse.count * c);
        o !== null && (p = new oe(p.array.slice(), p.itemSize, p.normalized)), p.normalized = !1;
        for (let B = 0, y = I.length; B < y; B++) {
          const _ = I[B];
          if (p.setX(_, w[B * c]), c >= 2 && p.setY(_, w[B * c + 1]), c >= 3 && p.setZ(_, w[B * c + 2]), c >= 4 && p.setW(_, w[B * c + 3]), c >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
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
      return A === !0 && o.revokeObjectURL(c), lt(h, r), h.userData.mimeType = r.mimeType || Vl(r.uri), h;
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
      c || (c = new Rn(), dt.prototype.copy.call(c, s), c.color.copy(s.color), c.map = s.map, c.sizeAttenuation = !1, this.cache.add(o, c)), s = c;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + s.uuid;
      let c = this.cache.get(o);
      c || (c = new tr(), dt.prototype.copy.call(c, s), c.color.copy(s.color), c.map = s.map, this.cache.add(o, c)), s = c;
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
    i.doubleSided === !0 && (o.side = gt);
    const l = i.alphaMode || Vn.OPAQUE;
    if (l === Vn.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, l === Vn.MASK && (o.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && r !== ye && (A.push(t.assignTexture(o, "normalMap", i.normalTexture)), o.normalScale = new H(1, 1), i.normalTexture.scale !== void 0)) {
      const h = i.normalTexture.scale;
      o.normalScale.set(h, h);
    }
    if (i.occlusionTexture !== void 0 && r !== ye && (A.push(t.assignTexture(o, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && r !== ye) {
      const h = i.emissiveFactor;
      o.emissive = new X().setRGB(h[0], h[1], h[2], he);
    }
    return i.emissiveTexture !== void 0 && r !== ye && A.push(t.assignTexture(o, "emissiveMap", i.emissiveTexture, Qe)), Promise.all(A).then(function() {
      const h = new r(o);
      return i.name && (h.name = i.name), lt(h, i), t.associations.set(h, { materials: e }), i.extensions && Mt(n, h, i), h;
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
      const A = e[o], l = jl(A), h = n[l];
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
      const l = r[c].material === void 0 ? Ol(this.cache) : this.getDependency("material", r[c].material);
      o.push(l);
    }
    return o.push(t.loadGeometries(r)), Promise.all(o).then(function(c) {
      const A = c.slice(0, c.length - 1), l = c[c.length - 1], h = [];
      for (let d = 0, f = l.length; d < f; d++) {
        const g = l[d], p = r[d];
        let E;
        const m = A[d];
        if (p.mode === Ue.TRIANGLES || p.mode === Ue.TRIANGLE_STRIP || p.mode === Ue.TRIANGLE_FAN || p.mode === void 0)
          E = i.isSkinnedMesh === !0 ? new Io(g, m) : new De(g, m), E.isSkinnedMesh === !0 && E.normalizeSkinWeights(), p.mode === Ue.TRIANGLE_STRIP ? E.geometry = Nr(E.geometry, Tn) : p.mode === Ue.TRIANGLE_FAN && (E.geometry = Nr(E.geometry, Zt));
        else if (p.mode === Ue.LINES)
          E = new Mn(g, m);
        else if (p.mode === Ue.LINE_STRIP)
          E = new yo(g, m);
        else if (p.mode === Ue.LINE_LOOP)
          E = new xo(g, m);
        else if (p.mode === Ue.POINTS)
          E = new sr(g, m);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
        Object.keys(E.geometry.morphAttributes).length > 0 && zl(E, i), E.name = t.createUniqueName(i.name || "mesh_" + e), lt(E, i), p.extensions && Mt(n, E, p), t.assignFinalMaterial(E), h.push(E);
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
    return s.type === "perspective" ? t = new Sn(ee.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : s.type === "orthographic" && (t = new nr(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), s.name && (t.name = this.createUniqueName(s.name)), lt(t, s), Promise.resolve(t);
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
      const d = n.channels[h], f = n.samplers[d.sampler], g = d.target, p = g.node, E = n.parameters !== void 0 ? n.parameters[f.input] : f.input, m = n.parameters !== void 0 ? n.parameters[f.output] : f.output;
      g.node !== void 0 && (r.push(this.getDependency("node", p)), o.push(this.getDependency("accessor", E)), c.push(this.getDependency("accessor", m)), A.push(f), l.push(g));
    }
    return Promise.all([
      Promise.all(r),
      Promise.all(o),
      Promise.all(c),
      Promise.all(A),
      Promise.all(l)
    ]).then(function(h) {
      const u = h[0], d = h[1], f = h[2], g = h[3], p = h[4], E = [];
      for (let m = 0, b = u.length; m < b; m++) {
        const C = u[m], I = d[m], w = f[m], B = g[m], y = p[m];
        if (C === void 0) continue;
        C.updateMatrix && C.updateMatrix();
        const _ = s._createAnimationTracks(C, I, w, B, y);
        if (_)
          for (let v = 0; v < _.length; v++)
            E.push(_[v]);
      }
      return new _o(i, void 0, E);
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
        d.isSkinnedMesh && d.bind(u, ql);
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
      if (i.name && (l.userData.name = i.name, l.name = r), lt(l, i), i.extensions && Mt(s, l, i), i.matrix !== void 0) {
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
    s.name && (i.name = n.createUniqueName(s.name)), lt(i, s), s.extensions && Mt(t, i, s);
    const r = s.nodes || [], o = [];
    for (let c = 0, A = r.length; c < A; c++)
      o.push(n.getDependency("node", r[c]));
    return Promise.all(o).then(function(c) {
      for (let l = 0, h = c.length; l < h; l++)
        i.add(c[l]);
      const A = (l) => {
        const h = /* @__PURE__ */ new Map();
        for (const [u, d] of n.associations)
          (u instanceof dt || u instanceof ln) && h.set(u, d);
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
    const l = n.interpolation !== void 0 ? Nl[n.interpolation] : Dn, h = this._getArrayFromAccessor(s);
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
      const s = Ui(t.constructor), n = new Float32Array(t.length);
      for (let i = 0, r = t.length; i < r; i++)
        n[i] = t[i] * s;
      t = n;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(s) {
      const n = this instanceof dn ? Ul : Xo;
      return new n(this.times, this.values, this.getValueSize() / 3, s);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
};
function Wl(a, e, t) {
  const s = e.attributes, n = new Le();
  if (s.POSITION !== void 0) {
    const o = t.json.accessors[s.POSITION], c = o.min, A = o.max;
    if (c !== void 0 && A !== void 0) {
      if (n.set(
        new x(c[0], c[1], c[2]),
        new x(A[0], A[1], A[2])
      ), o.normalized) {
        const l = Ui(Jt[o.componentType]);
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
            const g = Ui(Jt[u.componentType]);
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
    const o = Gi[r] || r.toLowerCase();
    o in a.attributes || n.push(i(s[r], o));
  }
  if (e.indices !== void 0 && !a.index) {
    const r = t.getDependency("accessor", e.indices).then(function(o) {
      a.setIndex(o);
    });
    n.push(r);
  }
  return ys.workingColorSpace !== he && "COLOR_0" in s && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ys.workingColorSpace}" not supported.`), lt(a, e), Wl(a, e, t), Promise.all(n).then(function() {
    return e.targets !== void 0 ? Hl(a, e.targets, t) : a;
  });
}
class Zo extends ll {
  constructor(e = Ln) {
    super(), this.manager = e, this.adjustmentTransform = new z();
  }
  parse(e) {
    const t = super.parse(e), s = t.glbBytes.slice().buffer;
    return new Promise((n, i) => {
      const r = this.manager, o = this.fetchOptions, c = r.getHandler("path.gltf") || new Pn(r);
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
function Jl(a) {
  const e = a >> 11, t = a >> 5 & 63, s = a & 31, n = Math.round(e / 31 * 255), i = Math.round(t / 63 * 255), r = Math.round(s / 31 * 255);
  return [n, i, r];
}
const os = new H();
function Yl(a, e, t = new x()) {
  os.set(a, e).divideScalar(256).multiplyScalar(2).subScalar(1), t.set(os.x, os.y, 1 - Math.abs(os.x) - Math.abs(os.y));
  const s = ee.clamp(-t.z, 0, 1);
  return t.x >= 0 ? t.setX(t.x - s) : t.setX(t.x + s), t.y >= 0 ? t.setY(t.y - s) : t.setY(t.y + s), t.normalize(), t;
}
const Vr = {
  RGB: "color",
  POSITION: "position"
};
class $o extends ul {
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
            const b = Vr[m];
            g[b] = d[m];
          }
        const p = {
          attributeIDs: g,
          attributeTypes: {
            position: "Float32Array",
            color: "Uint8Array"
          },
          useUniqueIDs: !0
        }, E = s.getBuffer(h, u);
        c = await f.decodeGeometry(E, p), c.attributes.color && (i.vertexColors = !0);
      } else {
        const h = s.getData("POINTS_LENGTH"), u = s.getData("POSITION", h, "FLOAT", "VEC3"), d = s.getData("NORMAL", h, "FLOAT", "VEC3"), f = s.getData("NORMAL", h, "UNSIGNED_BYTE", "VEC2"), g = s.getData("RGB", h, "UNSIGNED_BYTE", "VEC3"), p = s.getData("RGBA", h, "UNSIGNED_BYTE", "VEC4"), E = s.getData("RGB565", h, "UNSIGNED_SHORT", "SCALAR"), m = s.getData("CONSTANT_RGBA", h, "UNSIGNED_BYTE", "VEC4"), b = s.getData("POSITION_QUANTIZED", h, "UNSIGNED_SHORT", "VEC3"), C = s.getData("QUANTIZED_VOLUME_SCALE", h, "FLOAT", "VEC3"), I = s.getData("QUANTIZED_VOLUME_OFFSET", h, "FLOAT", "VEC3");
        if (c = new xe(), b) {
          const w = new Float32Array(h * 3);
          for (let B = 0; B < h; B++)
            for (let y = 0; y < 3; y++) {
              const _ = 3 * B + y;
              w[_] = b[_] / 65535 * C[y];
            }
          o.x = I[0], o.y = I[1], o.z = I[2], c.setAttribute("position", new oe(w, 3, !1));
        } else
          c.setAttribute("position", new oe(u, 3, !1));
        if (d !== null)
          c.setAttribute("normal", new oe(d, 3, !1));
        else if (f !== null) {
          const w = new Float32Array(h * 3), B = new x();
          for (let y = 0; y < h; y++) {
            const _ = f[y * 2], v = f[y * 2 + 1], S = Yl(_, v, B);
            w[y * 3] = S.x, w[y * 3 + 1] = S.y, w[y * 3 + 2] = S.z;
          }
          c.setAttribute("normal", new oe(w, 3, !1));
        }
        if (p !== null)
          c.setAttribute("color", new oe(p, 4, !0)), i.vertexColors = !0, i.transparent = !0, i.depthWrite = !1;
        else if (g !== null)
          c.setAttribute("color", new oe(g, 3, !0)), i.vertexColors = !0;
        else if (E !== null) {
          const w = new Uint8Array(h * 3);
          for (let B = 0; B < h; B++) {
            const y = Jl(E[B]);
            for (let _ = 0; _ < 3; _++) {
              const v = 3 * B + _;
              w[v] = y[_];
            }
          }
          c.setAttribute("color", new oe(w, 3, !0)), i.vertexColors = !0;
        } else if (m !== null) {
          const w = new X(m[0], m[1], m[2]);
          i.color = w;
          const B = m[3] / 255;
          B < 1 && (i.opacity = B, i.transparent = !0, i.depthWrite = !1);
        }
      }
      const A = new sr(c, i);
      A.position.copy(o), t.scene = A, t.scene.featureTable = s, t.scene.batchTable = n;
      const l = s.getData("RTC_CENTER", 1, "FLOAT", "VEC3");
      return l && (t.scene.position.x += l[0], t.scene.position.y += l[1], t.scene.position.z += l[2]), t;
    });
  }
}
new To();
new x();
function Xl(a) {
  const { x: e, y: t, z: s } = a;
  a.x = s, a.y = e, a.z = t;
}
function Zl(a) {
  return -a + Math.PI / 2;
}
const qr = new To(), Et = new x(), Pe = new x(), Kn = new x(), Ct = new z(), Je = new z(), Kr = new z(), Wn = new Fe(), Se = new vn(), Wr = new x(), Jr = new x(), Yr = new x(), Dt = new x(), Xr = new rr(), $l = 1e-12, eh = 0.1, Ps = 0, Zr = 1, Gs = 2;
class ec {
  constructor(e = 1, t = 1, s = 1) {
    this.name = "", this.radius = new x(e, t, s);
  }
  intersectRay(e, t) {
    return Ct.makeScale(...this.radius).invert(), Wn.center.set(0, 0, 0), Wn.radius = 1, Xr.copy(e).applyMatrix4(Ct), Xr.intersectSphere(Wn, t) ? (Ct.makeScale(...this.radius), t.applyMatrix4(Ct), t) : null;
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
    return this.getObjectFrame(e, t, s, n, i, r, o, Ps);
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
  getAzElRollFromRotationMatrix(e, t, s, n, i = Ps) {
    return console.warn('Ellipsoid: "getAzElRollFromRotationMatrix" is deprecated. Use "getCartographicFromObjectFrame", instead.'), this.getCartographicToPosition(e, t, 0, Dt), Kr.copy(s).setPosition(Dt), this.getCartographicFromObjectFrame(Kr, n, i), delete n.height, delete n.lat, delete n.lon, n;
  }
  getRotationMatrixFromAzElRoll(e, t, s, n, i, r, o = Ps) {
    return console.warn('Ellipsoid: "getRotationMatrixFromAzElRoll" function has been deprecated. Use "getObjectFrame", instead.'), this.getObjectFrame(e, t, 0, s, n, i, r, o), r.setPosition(0, 0, 0), r;
  }
  getFrame(e, t, s, n, i, r, o, c = Ps) {
    return console.warn('Ellipsoid: "getFrame" function has been deprecated. Use "getObjectFrame", instead.'), this.getObjectFrame(e, t, r, s, n, i, o, c);
  }
  getCartographicToPosition(e, t, s, n) {
    this.getCartographicToNormal(e, t, Et);
    const i = this.radius;
    Pe.copy(Et), Pe.x *= i.x ** 2, Pe.y *= i.y ** 2, Pe.z *= i.z ** 2;
    const r = Math.sqrt(Et.dot(Pe));
    return Pe.divideScalar(r), n.copy(Pe).addScaledVector(Et, s);
  }
  getPositionToCartographic(e, t) {
    this.getPositionToSurfacePoint(e, Pe), this.getPositionToNormal(e, Et);
    const s = Kn.subVectors(e, Pe);
    return t.lon = Math.atan2(Et.y, Et.x), t.lat = Math.asin(Et.z), t.height = Math.sign(s.dot(e)) * s.length(), t;
  }
  getCartographicToNormal(e, t, s) {
    return qr.set(1, Zl(e), t), s.setFromSpherical(qr).normalize(), Xl(s), s;
  }
  getPositionToNormal(e, t) {
    const s = this.radius;
    return t.copy(e), t.x /= s.x ** 2, t.y /= s.y ** 2, t.z /= s.z ** 2, t.normalize(), t;
  }
  getPositionToSurfacePoint(e, t) {
    const s = this.radius, n = 1 / s.x ** 2, i = 1 / s.y ** 2, r = 1 / s.z ** 2, o = e.x * e.x * n, c = e.y * e.y * i, A = e.z * e.z * r, l = o + c + A, h = Math.sqrt(1 / l), u = Pe.copy(e).multiplyScalar(h);
    if (l < eh)
      return isFinite(h) ? t.copy(u) : null;
    const d = Kn.set(
      u.x * n * 2,
      u.y * i * 2,
      u.z * r * 2
    );
    let f = (1 - h) * e.length() / (0.5 * d.length()), g = 0, p, E, m, b, C, I, w, B, y, _, v;
    do {
      f -= g, m = 1 / (1 + f * n), b = 1 / (1 + f * i), C = 1 / (1 + f * r), I = m * m, w = b * b, B = C * C, y = I * m, _ = w * b, v = B * C, p = o * I + c * w + A * B - 1, E = o * y * n + c * _ * i + A * v * r;
      const S = -2 * E;
      g = p / S;
    } while (Math.abs(p) > $l);
    return t.set(
      e.x * m,
      e.y * b,
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
    this.getPositionToSurfacePoint(e, Pe);
    const t = Kn.subVectors(e, Pe);
    return Math.sign(t.dot(e)) * t.length();
  }
  copy(e) {
    return this.radius.copy(e.radius), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Gn = new ec(Gr, Gr, sl);
Gn.name = "WGS84 Earth";
const $r = /* @__PURE__ */ new x(), Jn = /* @__PURE__ */ new x(), Yn = /* @__PURE__ */ new x(), Xn = /* @__PURE__ */ new x(), Zn = /* @__PURE__ */ new qe(), Us = /* @__PURE__ */ new x(), Ns = /* @__PURE__ */ new z(), ea = /* @__PURE__ */ new z(), ta = /* @__PURE__ */ new x(), sa = /* @__PURE__ */ new z(), $n = /* @__PURE__ */ new qe(), ei = {};
class tc extends hl {
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
        const c = this.fetchOptions, A = this.manager, l = A.getHandler("path.gltf") || new Pn(A);
        c.credentials === "include" && c.mode === "cors" && l.setCrossOrigin("use-credentials"), "credentials" in c && l.setWithCredentials(c.credentials === "include"), c.headers && l.setRequestHeader(c.headers);
        let h = t.gltfWorkingPath ?? this.workingPath;
        /[\\/]$/.test(h) || (h += "/");
        const u = this.adjustmentTransform;
        l.parse(i, h, (d) => {
          const f = s.getData("INSTANCES_LENGTH"), g = s.getData("POSITION", f, "FLOAT", "VEC3"), p = s.getData("NORMAL_UP", f, "FLOAT", "VEC3"), E = s.getData("NORMAL_RIGHT", f, "FLOAT", "VEC3"), m = s.getData("SCALE_NON_UNIFORM", f, "FLOAT", "VEC3"), b = s.getData("SCALE", f, "FLOAT", "SCALAR"), C = s.getData("RTC_CENTER", 1, "FLOAT", "VEC3"), I = s.getData("EAST_NORTH_UP");
          [
            "QUANTIZED_VOLUME_OFFSET",
            "QUANTIZED_VOLUME_SCALE",
            "POSITION_QUANTIZED",
            "NORMAL_UP_OCT32P",
            "NORMAL_RIGHT_OCT32P"
          ].forEach((_) => {
            _ in s.header && console.warn(`I3DMLoader: Unsupported FeatureTable feature "${_}" detected.`);
          });
          const w = new x();
          for (let _ = 0; _ < f; _++)
            w.x += g[_ * 3 + 0] / f, w.y += g[_ * 3 + 1] / f, w.z += g[_ * 3 + 2] / f;
          const B = [], y = [];
          d.scene.updateMatrixWorld(), d.scene.traverse((_) => {
            if (_.isMesh) {
              y.push(_);
              const { geometry: v, material: S } = _, M = new er(v, S, f);
              M.position.copy(w), C && (M.position.x += C[0], M.position.y += C[1], M.position.z += C[2]), B.push(M);
            }
          });
          for (let _ = 0; _ < f; _++) {
            Xn.set(
              g[_ * 3 + 0] - w.x,
              g[_ * 3 + 1] - w.y,
              g[_ * 3 + 2] - w.z
            ), Zn.identity(), p && (Jn.set(
              p[_ * 3 + 0],
              p[_ * 3 + 1],
              p[_ * 3 + 2]
            ), Yn.set(
              E[_ * 3 + 0],
              E[_ * 3 + 1],
              E[_ * 3 + 2]
            ), $r.crossVectors(Yn, Jn).normalize(), Ns.makeBasis(
              Yn,
              Jn,
              $r
            ), Zn.setFromRotationMatrix(Ns)), Us.set(1, 1, 1), m && Us.set(
              m[_ * 3 + 0],
              m[_ * 3 + 1],
              m[_ * 3 + 2]
            ), b && Us.multiplyScalar(b[_]);
            for (let v = 0, S = B.length; v < S; v++) {
              const M = B[v];
              $n.copy(Zn), I && (M.updateMatrixWorld(), ta.copy(Xn).applyMatrix4(M.matrixWorld), this.ellipsoid.getPositionToCartographic(ta, ei), this.ellipsoid.getEastNorthUpFrame(ei.lat, ei.lon, sa), $n.setFromRotationMatrix(sa)), Ns.compose(Xn, $n, Us).multiply(u);
              const U = y[v];
              ea.multiplyMatrices(Ns, U.matrixWorld), M.setMatrixAt(_, ea);
            }
          }
          d.scene.clear(), d.scene.add(...B), d.batchTable = n, d.featureTable = s, d.scene.batchTable = n, d.scene.featureTable = s, r(d);
        }, o);
      });
    });
  }
}
class th extends dl {
  constructor(e = Ln) {
    super(), this.manager = e, this.adjustmentTransform = new z(), this.ellipsoid = Gn.clone();
  }
  parse(e) {
    const t = super.parse(e), { manager: s, ellipsoid: n, adjustmentTransform: i } = this, r = [];
    for (const o in t.tiles) {
      const { type: c, buffer: A } = t.tiles[o];
      switch (c) {
        case "b3dm": {
          const l = A.slice(), h = new Zo(s);
          h.workingPath = this.workingPath, h.fetchOptions = this.fetchOptions, h.adjustmentTransform.copy(i);
          const u = h.parse(l.buffer);
          r.push(u);
          break;
        }
        case "pnts": {
          const l = A.slice(), h = new $o(s);
          h.workingPath = this.workingPath, h.fetchOptions = this.fetchOptions;
          const u = h.parse(l.buffer);
          r.push(u);
          break;
        }
        case "i3dm": {
          const l = A.slice(), h = new tc(s);
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
class sh extends le {
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
const sc = new rr(), ti = new x(), Os = [];
function nc(a, e) {
  return a.distance - e.distance;
}
function ic(a, e, t, s) {
  const { scene: n } = a.cached;
  t.invokeOnePlugin((r) => r.raycastTile && r.raycastTile(a, n, e, s)) || e.intersectObject(n, !0, s);
}
function nh(a, e, t) {
  ic(a, e, t, Os), Os.sort(nc);
  const s = Os[0] || null;
  return Os.length = 0, s;
}
function rc(a) {
  return "__used" in a;
}
function ac(a, e, t, s = null) {
  const { group: n, activeTiles: i } = a;
  s === null && (s = sc, s.copy(t.ray).applyMatrix4(n.matrixWorldInverse));
  const r = [], o = e.children;
  for (let l = 0, h = o.length; l < h; l++) {
    const u = o[l];
    if (!rc(u) || !u.__used)
      continue;
    u.cached.boundingVolume.intersectRay(s, ti) !== null && (ti.applyMatrix4(n.matrixWorld), r.push({
      distance: ti.distanceToSquared(t.ray.origin),
      tile: u
    }));
  }
  r.sort(nc);
  let c = null, A = 1 / 0;
  if (i.has(e)) {
    const l = nh(e, t, a);
    l && (c = l, A = l.distance * l.distance);
  }
  for (let l = 0, h = r.length; l < h; l++) {
    const u = r[l], d = u.distance, f = u.tile;
    if (d > A)
      break;
    const g = ac(a, f, t, s);
    if (g) {
      const p = g.distance * g.distance;
      p < A && (c = g, A = p);
    }
  }
  return c;
}
function oc(a, e, t, s, n = null) {
  if (!rc(e))
    return;
  const { group: i, activeTiles: r } = a, { boundingVolume: o } = e.cached;
  if (n === null && (n = sc, n.copy(t.ray).applyMatrix4(i.matrixWorldInverse)), !e.__used || !o.intersectsRay(n))
    return;
  r.has(e) && ic(e, t, a, s);
  const c = e.children;
  for (let A = 0, l = c.length; A < l; A++)
    oc(a, c[A], t, s, n);
}
const Hs = new x(), zs = new x(), Te = new x(), js = new rr();
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
const si = [];
function ih(a = !1) {
  return a ? (si[ms] || (si[ms] = new x()), ms++, si[ms - 1]) : new x();
}
function ra() {
  ms = 0;
}
class cc extends ec {
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
      for (let p = 0, E = d; p < E; p++) {
        const [m, b] = h[p];
        if (m >= t && m <= s && b >= n && b <= i) {
          const C = ih(e);
          u.push(C), this.getCartographicToPosition(m, b, g, C);
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
class rh {
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
    const c = new cc(
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
const ah = new Ro();
function oh(a, e, t, s) {
  const n = ah.set(
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
class ch extends oA {
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
      oh(n[0], n[1], n[2], t[i]);
    });
  }
}
function Ah(a) {
  const { TextureUtils: e } = Z;
  if (!e || !a)
    return 0;
  const { format: t, type: s, image: n } = a, { width: i, height: r } = n;
  let o = e.getByteLength(i, r, t, s);
  return o *= a.generateMipmaps ? 4 / 3 : 1, o;
}
function lh(a) {
  const e = /* @__PURE__ */ new Set();
  let t = 0;
  return a.traverse((s) => {
    if (s.geometry && !e.has(s.geometry) && (t += fl(s.geometry), e.add(s.geometry)), s.material) {
      const n = s.material;
      for (const i in n) {
        const r = n[i];
        r && r.isTexture && !e.has(r) && (t += Ah(r), e.add(r));
      }
    }
  }), t;
}
const ca = new z(), Aa = new vn(), Ac = Symbol("INITIAL_FRUSTUM_CULLED"), qs = new z(), ls = new x(), ni = new H(), Ks = {
  inView: !1,
  error: 1 / 0
}, hh = new x(1, 0, 0), uh = new x(0, 1, 0);
function la(a, e) {
  a.traverse((t) => {
    t.frustumCulled = t[Ac] && e;
  });
}
class dh extends ol {
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
    super(...e), this.group = new sh(this), this.ellipsoid = Gn.clone(), this.cameras = [], this.cameraMap = /* @__PURE__ */ new Map(), this.cameraInfo = [], this._optimizeRaycast = !0, this._upRotationMatrix = new z(), this._bytesUsed = /* @__PURE__ */ new WeakMap(), this._autoDisableRendererCulling = !0;
    const t = new cA();
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
        const s = ac(this, this.root, e);
        s && t.push(s);
      } else
        oc(this, this.root, e, t);
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
    return t.getSize(ni), this.setResolution(e, ni.x, ni.y);
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
          this._upRotationMatrix.makeRotationAxis(uh, -Math.PI / 2);
          break;
        case "y":
          this._upRotationMatrix.makeRotationAxis(hh, Math.PI / 2);
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
        frustum: new ch(),
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
    const i = new z().copy(n).invert(), r = new rh();
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
    const u = r.transform, d = this._upRotationMatrix, f = (Ut(e) || s).toLowerCase();
    switch (f) {
      case "b3dm": {
        const I = new Zo(l);
        I.workingPath = c, I.fetchOptions = A, I.adjustmentTransform.copy(d), h = I.parse(e);
        break;
      }
      case "pnts": {
        const I = new $o(l);
        I.workingPath = c, I.fetchOptions = A, h = I.parse(e);
        break;
      }
      case "i3dm": {
        const I = new tc(l);
        I.workingPath = c, I.fetchOptions = A, I.adjustmentTransform.copy(d), I.ellipsoid.copy(this.ellipsoid), h = I.parse(e);
        break;
      }
      case "cmpt": {
        const I = new th(l);
        I.workingPath = c, I.fetchOptions = A, I.adjustmentTransform.copy(d), I.ellipsoid.copy(this.ellipsoid), h = I.parse(e).then((w) => w.scene);
        break;
      }
      // 3DTILES_content_gltf
      case "gltf":
      case "glb": {
        const I = l.getHandler("path.gltf") || l.getHandler("path.glb") || new Pn(l);
        I.setWithCredentials(A.credentials === "include"), I.setRequestHeader(A.headers || {}), A.credentials === "include" && A.mode === "cors" && I.setCrossOrigin("use-credentials");
        let w = I.resourcePath || I.path || c;
        !/[\\/]$/.test(w) && w.length && (w += "/"), h = I.parseAsync(e, w).then((B) => {
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
    let p, E;
    g.isObject3D ? (p = g, E = null) : (p = g.scene, E = g), p.updateMatrix(), p.matrix.premultiply(u), p.matrix.decompose(p.position, p.quaternion, p.scale), await this.invokeAllPlugins((I) => I.processTileModel && I.processTileModel(p, t)), p.traverse((I) => {
      I[Ac] = I.frustumCulled;
    }), la(p, !this.autoDisableRendererCulling);
    const m = [], b = [], C = [];
    if (p.traverse((I) => {
      if (I.geometry && b.push(I.geometry), I.material) {
        const w = I.material;
        m.push(I.material);
        for (const B in w) {
          const y = w[B];
          y && y.isTexture && C.push(y);
        }
      }
    }), i.aborted) {
      for (let I = 0, w = C.length; I < w; I++) {
        const B = C[I];
        B.image instanceof ImageBitmap && B.image.close(), B.dispose();
      }
      return;
    }
    r.materials = m, r.geometry = b, r.textures = C, r.scene = p, r.metadata = E;
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
    return !s.has(e) && t && s.set(e, lh(t)), s.get(e) ?? null;
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
      const E = i[u].frustum;
      r.intersectsFrustum(E) && (o = !0, c = Math.max(c, g), A = Math.min(A, p)), l = Math.max(l, g), h = Math.min(h, p);
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
class fh {
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
class gh extends dh {
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
          const b = this._calculateDynamicScreenSpaceDistance(e, f, p);
          g = e.geometricError / (b * m);
        }
      }
      const E = i[u].frustum;
      this._intersectsFrustum(E, r) && (o = !0, c = Math.max(c, g), A = Math.min(A, p)), l = Math.max(l, g), h = Math.min(h, p);
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
    return n && !e.intersectsSphere(n) || s && !fh.intersectsFrustum(s, e) ? !1 : !!(n || s);
  }
}
function gn(a) {
  return a.__implicitRoot.implicitTiling.subdivisionScheme === "OCTREE";
}
function ii(a) {
  return gn(a) ? 8 : 4;
}
function ph(a, e) {
  if (!e)
    return [0, 0, 0];
  const t = 2 * e.__x + a.__subtreeIdx % 2, s = 2 * e.__y + Math.floor(a.__subtreeIdx / 2) % 2, n = gn(a) ? 2 * e.__z + Math.floor(a.__subtreeIdx / 4) % 2 : 0;
  return [t, s, n];
}
class ha {
  constructor(e, t) {
    this.parent = e, this.children = [], this.__level = e.__level + 1, this.__implicitRoot = e.__implicitRoot, this.__subtreeIdx = t, [this.__x, this.__y, this.__z] = ph(this, e);
  }
  static copy(e) {
    const t = {};
    return t.children = [], t.__level = e.__level, t.__implicitRoot = e.__implicitRoot, t.__subtreeIdx = e.__subtreeIdx, [t.__x, t.__y, t.__z] = [e.__x, e.__y, e.__z], t.boundingVolume = e.boundingVolume, t.geometricError = e.geometricError, t;
  }
}
class mh extends Qs {
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
    const n = Ut(t);
    console.assert(n === "subt", 'SUBTREELoader: The magic bytes equal "subt".'), s += 4;
    const i = t.getUint32(s, !0);
    console.assert(i === 1, 'SUBTREELoader: The version listed in the header is "1".'), s += 4;
    const r = t.getUint32(s, !0);
    s += 8;
    const o = t.getUint32(s, !0);
    s += 8;
    const c = JSON.parse(lr(new Uint8Array(e, s, r)));
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
    const n = ii(this.rootTile), i = this.rootTile.implicitTiling.subtreeLevels, r = (Math.pow(n, i) - 1) / (n - 1), o = Math.pow(n, i);
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
      const r = ii(this.rootTile), o = (Math.pow(r, i) - 1) / (r - 1), c = r * s.length;
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
    const s = [], n = ii(this.rootTile);
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
class bh {
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
      const n = new mh(t);
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
const Eh = new nr(-1, 1, 1, -1, 0, 1);
class Ch extends xe {
  constructor() {
    super(), this.setAttribute("position", new Re([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new Re([0, 2, 0, 0, 2, 0], 2));
  }
}
const Ih = new Ch();
class yh {
  /**
   * Constructs a new full screen quad.
   *
   * @param {?Material} material - The material to render te full screen quad with.
   */
  constructor(e) {
    this._mesh = new De(Ih, e);
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
    e.render(this._mesh, Eh);
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
class xh {
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
    this.name = "UNLOAD_TILES_PLUGIN", this.tiles = null, this.lruCache = new Oo(), this.deferCallbacks = new Bh(), this.delay = t, this.bytesTarget = s;
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
class Bh {
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
class _h extends Mn {
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
    n.setAttribute("position", new oe(new Float32Array(i), 3)), n.computeBoundingSphere(), super(n, new tr({ color: t, toneMapped: !1 })), this.sphere = e, this.type = "SphereHelper";
  }
  updateMatrixWorld(e) {
    const t = this.sphere;
    this.position.copy(t.center), this.scale.setScalar(t.radius), super.updateMatrixWorld(e);
  }
}
const ri = new x(), Js = new x(), Ye = new x();
new x();
new x();
function wh(a, { computeNormals: e = !1 } = {}) {
  const {
    latStart: t = -Math.PI / 2,
    latEnd: s = Math.PI / 2,
    lonStart: n = 0,
    lonEnd: i = 2 * Math.PI,
    heightStart: r = 0,
    heightEnd: o = 0
  } = a, c = new AA(1, 1, 1, 32, 32), { normal: A, position: l } = c.attributes, h = l.clone();
  for (let u = 0, d = l.count; u < d; u++) {
    Ye.fromBufferAttribute(l, u);
    const f = ee.mapLinear(Ye.x, -0.5, 0.5, t, s), g = ee.mapLinear(Ye.y, -0.5, 0.5, n, i);
    let p = r;
    a.getCartographicToNormal(f, g, ri), Ye.z < 0 && (p = o), a.getCartographicToPosition(f, g, p, Ye), l.setXYZ(u, ...Ye);
  }
  e && c.computeVertexNormals();
  for (let u = 0, d = h.count; u < d; u++) {
    Ye.fromBufferAttribute(h, u);
    const f = ee.mapLinear(Ye.x, -0.5, 0.5, t, s), g = ee.mapLinear(Ye.y, -0.5, 0.5, n, i);
    ri.fromBufferAttribute(A, u), a.getCartographicToNormal(f, g, Js), Math.abs(ri.dot(Js)) > 0.1 && (Ye.z > 0 && Js.multiplyScalar(-1), A.setXYZ(u, ...Js));
  }
  return c;
}
class vh extends Mn {
  constructor(e = new cc(), t = 16776960) {
    super(), this.ellipsoidRegion = e, this.material.color.set(t), this.update();
  }
  update() {
    const e = wh(this.ellipsoidRegion);
    this.geometry.dispose(), this.geometry = new Mo(e, 80);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
const da = Symbol("ORIGINAL_MATERIAL"), ai = Symbol("HAS_RANDOM_COLOR"), oi = Symbol("HAS_RANDOM_NODE_COLOR"), ci = Symbol("LOAD_TIME"), Lt = Symbol("PARENT_BOUND_REF_COUNT"), fa = /* @__PURE__ */ new Fe(), Ai = () => {
}, li = {};
function hi(a) {
  if (!li[a]) {
    const e = Math.random(), t = 0.5 + Math.random() * 0.5, s = 0.375 + Math.random() * 0.25;
    li[a] = new X().setHSL(e, t, s);
  }
  return li[a];
}
const bs = 0, lc = 1, hc = 2, uc = 3, dc = 4, fc = 5, gc = 6, on = 7, cn = 8, pc = 9, Ni = 10, Sh = Object.freeze({
  NONE: bs,
  SCREEN_ERROR: lc,
  GEOMETRIC_ERROR: hc,
  DISTANCE: uc,
  DEPTH: dc,
  RELATIVE_DEPTH: fc,
  IS_LEAF: gc,
  RANDOM_COLOR: on,
  RANDOM_NODE_COLOR: cn,
  CUSTOM_COLOR: pc,
  LOAD_ORDER: Ni
});
class Th {
  static get ColorModes() {
    return Sh;
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
    }) : Pi(this.tiles.root, null, (t) => {
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
    Pi(this.tiles.root, null, (s, n, i) => {
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
    t === Ni && (c = Array.from(o).sort((A, l) => A[ci] - l[ci])), o.forEach((A) => {
      const l = A.cached.scene;
      let h, u, d;
      t === on && (h = Math.random(), u = 0.5 + Math.random() * 0.5, d = 0.375 + Math.random() * 0.25), l.traverse((f) => {
        if (t === cn && (h = Math.random(), u = 0.5 + Math.random() * 0.5, d = 0.375 + Math.random() * 0.25), f.material)
          switch (t !== on && delete f.material[ai], t !== cn && delete f.material[oi], t) {
            case dc: {
              const g = A.__depth / s;
              this.getDebugColor(g, f.material.color);
              break;
            }
            case fc: {
              const g = A.__depthFromRenderedParent / s;
              this.getDebugColor(g, f.material.color);
              break;
            }
            case lc: {
              const g = A.__error / r;
              g > 1 ? f.material.color.setRGB(1, 0, 0) : this.getDebugColor(g, f.material.color);
              break;
            }
            case hc: {
              const g = Math.min(A.geometricError / n, 1);
              this.getDebugColor(g, f.material.color);
              break;
            }
            case uc: {
              const g = Math.min(A.__distanceFromCamera / i, 1);
              this.getDebugColor(g, f.material.color);
              break;
            }
            case gc: {
              !A.children || A.children.length === 0 ? this.getDebugColor(1, f.material.color) : this.getDebugColor(0, f.material.color);
              break;
            }
            case cn: {
              f.material[oi] || (f.material.color.setHSL(h, u, d), f.material[oi] = !0);
              break;
            }
            case on: {
              f.material[ai] || (f.material.color.setHSL(h, u, d), f.material[ai] = !0);
              break;
            }
            case pc: {
              this.customColorCallback ? this.customColorCallback(A, f) : console.warn("DebugTilesRenderer: customColorCallback not defined");
              break;
            }
            case Ni: {
              const g = c.indexOf(A);
              this.getDebugColor(g / (c.length - 1), f.material.color);
              break;
            }
          }
      });
    });
  }
  _onTileVisibilityChange(e, t) {
    this.displayParentBounds ? il(e, (s) => {
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
      const c = new lA(i.box, hi(e.__depth));
      c.raycast = Ai, o.add(c), s.boxHelperGroup = o, t.visibleTiles.has(e) && this.displayBoxBounds && (this.boxGroup.add(o), o.updateMatrixWorld(!0));
    }
    if (n) {
      const o = new _h(n, hi(e.__depth));
      o.raycast = Ai, s.sphereHelper = o, t.visibleTiles.has(e) && this.displaySphereBounds && (this.sphereGroup.add(o), o.updateMatrixWorld(!0));
    }
    if (r) {
      const o = new vh(r, hi(e.__depth));
      o.raycast = Ai;
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
    t[ci] = performance.now(), e.traverse((s) => {
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
class Qh extends ns {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new Fh(t);
    }), this.register(function(t) {
      return new kh(t);
    }), this.register(function(t) {
      return new Vh(t);
    }), this.register(function(t) {
      return new qh(t);
    }), this.register(function(t) {
      return new Kh(t);
    }), this.register(function(t) {
      return new Gh(t);
    }), this.register(function(t) {
      return new Uh(t);
    }), this.register(function(t) {
      return new Nh(t);
    }), this.register(function(t) {
      return new Oh(t);
    }), this.register(function(t) {
      return new Lh(t);
    }), this.register(function(t) {
      return new Hh(t);
    }), this.register(function(t) {
      return new Ph(t);
    }), this.register(function(t) {
      return new jh(t);
    }), this.register(function(t) {
      return new zh(t);
    }), this.register(function(t) {
      return new Mh(t);
    }), this.register(function(t) {
      return new Wh(t);
    }), this.register(function(t) {
      return new Jh(t);
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
      if (c.decode(new Uint8Array(e, 0, 4)) === mc) {
        try {
          r[J.KHR_BINARY_GLTF] = new Yh(e);
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
    const A = new Au(i, {
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
            r[h] = new Dh();
            break;
          case J.KHR_DRACO_MESH_COMPRESSION:
            r[h] = new Xh(i, this.dracoLoader);
            break;
          case J.KHR_TEXTURE_TRANSFORM:
            r[h] = new Zh();
            break;
          case J.KHR_MESH_QUANTIZATION:
            r[h] = new $h();
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
function Rh() {
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
class Mh {
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
        A = new $i(l), A.target.position.set(0, 0, -1), A.add(A.target);
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
    return A.position.set(0, 0, 0), ht(A, c), c.intensity !== void 0 && (A.intensity = c.intensity), A.name = t.createUniqueName(c.name || "light_" + e), n = Promise.resolve(A), t.cache.add(s, n), n;
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
class Dh {
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
class Lh {
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
class Fh {
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
class kh {
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
class Ph {
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
class Gh {
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
class Uh {
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
class Nh {
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
class Oh {
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
class Hh {
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
class zh {
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
class jh {
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
class Vh {
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
class qh {
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
class Kh {
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
class Wh {
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
class Jh {
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
        const g = new z(), p = new x(), E = new qe(), m = new x(1, 1, 1), b = new er(f.geometry, f.material, u);
        for (let C = 0; C < u; C++)
          c.TRANSLATION && p.fromBufferAttribute(c.TRANSLATION, C), c.ROTATION && E.fromBufferAttribute(c.ROTATION, C), c.SCALE && m.fromBufferAttribute(c.SCALE, C), b.setMatrixAt(C, g.compose(p, E, m));
        for (const C in c)
          if (C === "_COLOR_0") {
            const I = c[C];
            b.instanceColor = new Qn(I.array, I.itemSize, I.normalized);
          } else C !== "TRANSLATION" && C !== "ROTATION" && C !== "SCALE" && f.geometry.setAttribute(C, c[C]);
        Tt.prototype.copy.call(b, f), this.parser.assignFinalMaterial(b), d.push(b);
      }
      return l.isGroup ? (l.clear(), l.add(...d), l) : d[0];
    }));
  }
}
const mc = "glTF", hs = 12, pa = { JSON: 1313821514, BIN: 5130562 };
class Yh {
  constructor(e) {
    this.name = J.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, hs), s = new TextDecoder();
    if (this.header = {
      magic: s.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== mc)
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
class Xh {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = J.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const s = this.json, n = this.dracoLoader, i = e.extensions[this.name].bufferView, r = e.extensions[this.name].attributes, o = {}, c = {}, A = {};
    for (const l in r) {
      const h = Oi[l] || l.toLowerCase();
      o[h] = r[l];
    }
    for (const l in e.attributes) {
      const h = Oi[l] || l.toLowerCase();
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
class Zh {
  constructor() {
    this.name = J.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class $h {
  constructor() {
    this.name = J.KHR_MESH_QUANTIZATION;
  }
}
class bc extends So {
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
    const i = this.resultBuffer, r = this.sampleValues, o = this.valueSize, c = o * 2, A = o * 3, l = n - t, h = (s - t) / l, u = h * h, d = u * h, f = e * A, g = f - A, p = -2 * d + 3 * u, E = d - u, m = 1 - p, b = E - u + h;
    for (let C = 0; C !== o; C++) {
      const I = r[g + C + o], w = r[g + C + c] * l, B = r[f + C + o], y = r[f + C] * l;
      i[C] = m * I + b * w + p * B + E * y;
    }
    return i;
  }
}
const eu = new qe();
class tu extends bc {
  interpolate_(e, t, s, n) {
    const i = super.interpolate_(e, t, s, n);
    return eu.fromArray(i).normalize().toArray(i), i;
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
}, ui = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Oi = {
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
}, su = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: Dn,
  STEP: vo
}, di = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function nu(a) {
  return a.DefaultMaterial === void 0 && (a.DefaultMaterial = new rs({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: ir
  })), a.DefaultMaterial;
}
function Ft(a, e, t) {
  for (const s in t.extensions)
    a[s] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[s] = t.extensions[s]);
}
function ht(a, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(a.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function iu(a, e, t) {
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
function ru(a, e) {
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
function au(a) {
  let e;
  const t = a.extensions && a.extensions[J.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + fi(t.attributes) : e = a.indices + ":" + fi(a.attributes) + ":" + a.mode, a.targets !== void 0)
    for (let s = 0, n = a.targets.length; s < n; s++)
      e += ":" + fi(a.targets[s]);
  return e;
}
function fi(a) {
  let e = "";
  const t = Object.keys(a).sort();
  for (let s = 0, n = t.length; s < n; s++)
    e += t[s] + ":" + a[t[s]] + ";";
  return e;
}
function Hi(a) {
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
function ou(a) {
  return a.search(/\.jpe?g($|\?)/i) > 0 || a.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : a.search(/\.webp($|\?)/i) > 0 || a.search(/^data\:image\/webp/) === 0 ? "image/webp" : a.search(/\.ktx2($|\?)/i) > 0 || a.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const cu = new z();
class Au {
  constructor(e = {}, t = {}) {
    var c;
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Rh(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
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
      return Ft(i, o, n), ht(o, n), Promise.all(
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
      const r = ui[n.type], o = Yt[n.componentType], c = n.normalized === !0, A = new o(n.count * r);
      return Promise.resolve(new oe(A, r, c));
    }
    const i = [];
    return n.bufferView !== void 0 ? i.push(this.getDependency("bufferView", n.bufferView)) : i.push(null), n.sparse !== void 0 && (i.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(i).then(function(r) {
      const o = r[0], c = ui[n.type], A = Yt[n.componentType], l = A.BYTES_PER_ELEMENT, h = l * c, u = n.byteOffset || 0, d = n.bufferView !== void 0 ? s.bufferViews[n.bufferView].byteStride : void 0, f = n.normalized === !0;
      let g, p;
      if (d && d !== h) {
        const E = Math.floor(u / d), m = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + E + ":" + n.count;
        let b = t.cache.get(m);
        b || (g = new A(o, E * d, n.count * d / l), b = new go(g, d / l), t.cache.add(m, b)), p = new xt(b, c, u % d / l, f);
      } else
        o === null ? g = new A(n.count * c) : g = new A(o, u, n.count * c), p = new oe(g, c, f);
      if (n.sparse !== void 0) {
        const E = ui.SCALAR, m = Yt[n.sparse.indices.componentType], b = n.sparse.indices.byteOffset || 0, C = n.sparse.values.byteOffset || 0, I = new m(r[1], b, n.sparse.count * E), w = new A(r[2], C, n.sparse.count * c);
        o !== null && (p = new oe(p.array.slice(), p.itemSize, p.normalized)), p.normalized = !1;
        for (let B = 0, y = I.length; B < y; B++) {
          const _ = I[B];
          if (p.setX(_, w[B * c]), c >= 2 && p.setY(_, w[B * c + 1]), c >= 3 && p.setZ(_, w[B * c + 2]), c >= 4 && p.setW(_, w[B * c + 3]), c >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
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
      return A === !0 && o.revokeObjectURL(c), ht(h, r), h.userData.mimeType = r.mimeType || ou(r.uri), h;
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
      c || (c = new Rn(), dt.prototype.copy.call(c, s), c.color.copy(s.color), c.map = s.map, c.sizeAttenuation = !1, this.cache.add(o, c)), s = c;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + s.uuid;
      let c = this.cache.get(o);
      c || (c = new tr(), dt.prototype.copy.call(c, s), c.color.copy(s.color), c.map = s.map, this.cache.add(o, c)), s = c;
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
    i.doubleSided === !0 && (o.side = gt);
    const l = i.alphaMode || di.OPAQUE;
    if (l === di.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, l === di.MASK && (o.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && r !== ye && (A.push(t.assignTexture(o, "normalMap", i.normalTexture)), o.normalScale = new H(1, 1), i.normalTexture.scale !== void 0)) {
      const h = i.normalTexture.scale;
      o.normalScale.set(h, h);
    }
    if (i.occlusionTexture !== void 0 && r !== ye && (A.push(t.assignTexture(o, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && r !== ye) {
      const h = i.emissiveFactor;
      o.emissive = new X().setRGB(h[0], h[1], h[2], he);
    }
    return i.emissiveTexture !== void 0 && r !== ye && A.push(t.assignTexture(o, "emissiveMap", i.emissiveTexture, Qe)), Promise.all(A).then(function() {
      const h = new r(o);
      return i.name && (h.name = i.name), ht(h, i), t.associations.set(h, { materials: e }), i.extensions && Ft(n, h, i), h;
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
      const A = e[o], l = au(A), h = n[l];
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
      const l = r[c].material === void 0 ? nu(this.cache) : this.getDependency("material", r[c].material);
      o.push(l);
    }
    return o.push(t.loadGeometries(r)), Promise.all(o).then(function(c) {
      const A = c.slice(0, c.length - 1), l = c[c.length - 1], h = [];
      for (let d = 0, f = l.length; d < f; d++) {
        const g = l[d], p = r[d];
        let E;
        const m = A[d];
        if (p.mode === Ne.TRIANGLES || p.mode === Ne.TRIANGLE_STRIP || p.mode === Ne.TRIANGLE_FAN || p.mode === void 0)
          E = i.isSkinnedMesh === !0 ? new Io(g, m) : new De(g, m), E.isSkinnedMesh === !0 && E.normalizeSkinWeights(), p.mode === Ne.TRIANGLE_STRIP ? E.geometry = ga(E.geometry, Tn) : p.mode === Ne.TRIANGLE_FAN && (E.geometry = ga(E.geometry, Zt));
        else if (p.mode === Ne.LINES)
          E = new Mn(g, m);
        else if (p.mode === Ne.LINE_STRIP)
          E = new yo(g, m);
        else if (p.mode === Ne.LINE_LOOP)
          E = new xo(g, m);
        else if (p.mode === Ne.POINTS)
          E = new sr(g, m);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
        Object.keys(E.geometry.morphAttributes).length > 0 && ru(E, i), E.name = t.createUniqueName(i.name || "mesh_" + e), ht(E, i), p.extensions && Ft(n, E, p), t.assignFinalMaterial(E), h.push(E);
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
    return s.type === "perspective" ? t = new Sn(ee.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : s.type === "orthographic" && (t = new nr(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), s.name && (t.name = this.createUniqueName(s.name)), ht(t, s), Promise.resolve(t);
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
      const d = n.channels[h], f = n.samplers[d.sampler], g = d.target, p = g.node, E = n.parameters !== void 0 ? n.parameters[f.input] : f.input, m = n.parameters !== void 0 ? n.parameters[f.output] : f.output;
      g.node !== void 0 && (r.push(this.getDependency("node", p)), o.push(this.getDependency("accessor", E)), c.push(this.getDependency("accessor", m)), A.push(f), l.push(g));
    }
    return Promise.all([Promise.all(r), Promise.all(o), Promise.all(c), Promise.all(A), Promise.all(l)]).then(function(h) {
      const u = h[0], d = h[1], f = h[2], g = h[3], p = h[4], E = [];
      for (let m = 0, b = u.length; m < b; m++) {
        const C = u[m], I = d[m], w = f[m], B = g[m], y = p[m];
        if (C === void 0) continue;
        C.updateMatrix && C.updateMatrix();
        const _ = s._createAnimationTracks(C, I, w, B, y);
        if (_)
          for (let v = 0; v < _.length; v++)
            E.push(_[v]);
      }
      return new _o(i, void 0, E);
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
        d.isSkinnedMesh && d.bind(u, cu);
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
      if (i.name && (l.userData.name = i.name, l.name = r), ht(l, i), i.extensions && Ft(s, l, i), i.matrix !== void 0) {
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
    s.name && (i.name = n.createUniqueName(s.name)), ht(i, s), s.extensions && Ft(t, i, s);
    const r = s.nodes || [], o = [];
    for (let c = 0, A = r.length; c < A; c++)
      o.push(n.getDependency("node", r[c]));
    return Promise.all(o).then(function(c) {
      for (let l = 0, h = c.length; l < h; l++)
        i.add(c[l]);
      const A = (l) => {
        const h = /* @__PURE__ */ new Map();
        for (const [u, d] of n.associations)
          (u instanceof dt || u instanceof ln) && h.set(u, d);
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
    const l = n.interpolation !== void 0 ? su[n.interpolation] : Dn, h = this._getArrayFromAccessor(s);
    for (let u = 0, d = c.length; u < d; u++) {
      const f = new A(c[u] + "." + It[i.path], t.array, h, l);
      n.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(f), r.push(f);
    }
    return r;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const s = Hi(t.constructor), n = new Float32Array(t.length);
      for (let i = 0, r = t.length; i < r; i++)
        n[i] = t[i] * s;
      t = n;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(s) {
      const n = this instanceof dn ? tu : bc;
      return new n(this.times, this.values, this.getValueSize() / 3, s);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function lu(a, e, t) {
  const s = e.attributes, n = new Le();
  if (s.POSITION !== void 0) {
    const o = t.json.accessors[s.POSITION], c = o.min, A = o.max;
    if (c !== void 0 && A !== void 0) {
      if (n.set(new x(c[0], c[1], c[2]), new x(A[0], A[1], A[2])), o.normalized) {
        const l = Hi(Yt[o.componentType]);
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
            const g = Hi(Yt[u.componentType]);
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
    const o = Oi[r] || r.toLowerCase();
    o in a.attributes || n.push(i(s[r], o));
  }
  if (e.indices !== void 0 && !a.index) {
    const r = t.getDependency("accessor", e.indices).then(function(o) {
      a.setIndex(o);
    });
    n.push(r);
  }
  return ys.workingColorSpace !== he && "COLOR_0" in s && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ys.workingColorSpace}" not supported.`), ht(a, e), lu(a, e, t), Promise.all(n).then(function() {
    return e.targets !== void 0 ? iu(a, e.targets, t) : a;
  });
}
function ge(a, e, t) {
  return a && e in a ? a[e] : t;
}
function Ec(a) {
  return a !== "BOOLEAN" && a !== "STRING" && a !== "ENUM";
}
function hu(a) {
  return /^FLOAT/.test(a);
}
function Rs(a) {
  return /^VEC/.test(a);
}
function Ms(a) {
  return /^MAT/.test(a);
}
function Cc(a, e, t, s = null) {
  return Ms(t) || Rs(t) ? s.fromArray(a, e) : a[e];
}
function zi(a) {
  const { type: e, componentType: t } = a;
  switch (e) {
    case "SCALAR":
      return t === "INT64" ? 0n : 0;
    case "VEC2":
      return new H();
    case "VEC3":
      return new x();
    case "VEC4":
      return new ft();
    case "MAT2":
      return new hA();
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
function uu(a, e = null) {
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
  if (e = e || zi(a), t === null) {
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
function du(a, e) {
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
function fu(a, e) {
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
function gu(a, e) {
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
    return r && (h = fu(s, h)), (r || hu(s)) && (h = h * n + i), h;
  }
}
function ur(a, e, t = null) {
  if (a.array) {
    Array.isArray(e) || (e = new Array(a.count || 0)), e.length = t !== null ? t : a.count;
    for (let s = 0, n = e.length; s < n; s++)
      Ca(a.type, e[s]) || (e[s] = zi(a));
  } else
    Ca(a.type, e) || (e = zi(a));
  return e;
}
function mn(a, e) {
  for (const t in e)
    t in a || delete e[t];
  for (const t in a) {
    const s = a[t];
    e[t] = ur(s, e[t]);
  }
}
function pu(a) {
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
class Un {
  constructor(e, t, s = null) {
    this.name = t.name || null, this.description = t.description || null, this.type = t.type, this.componentType = t.componentType || null, this.enumType = t.enumType || null, this.array = t.array || !1, this.count = t.count || 0, this.normalized = t.normalized || !1, this.offset = t.offset || 0, this.scale = ge(t, "scale", 1), this.max = ge(t, "max", 1 / 0), this.min = ge(t, "min", -1 / 0), this.required = t.required || !1, this.noData = ge(t, "noData", null), this.default = ge(t, "default", null), this.semantic = ge(t, "semantic", null), this.enumSet = null, this.accessorProperty = s, s && (this.offset = ge(s, "offset", this.offset), this.scale = ge(s, "scale", this.scale), this.max = ge(s, "max", this.max), this.min = ge(s, "min", this.min)), t.type === "ENUM" && (this.enumSet = e[this.enumType], this.componentType === null && (this.componentType = ge(this.enumSet, "valueType", "UINT16")));
  }
  // shape the given target to match the data type of the property
  // enums are set to their integer value
  shapeToProperty(e, t = null) {
    return ur(this, e, t);
  }
  // resolve the given object to the default value for the property for a single element
  // enums are set to a default string
  resolveDefaultElement(e) {
    return pn(this, e);
  }
  // resolve the target to the default value for the property for every element if it's an array
  // enums are set to a default string
  resolveDefault(e) {
    return uu(this, e);
  }
  // converts any instances of no data to the default value
  resolveNoData(e) {
    return du(this, e);
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
    return Ec(this.type) ? gu(this, e) : e;
  }
}
class dr {
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
  _initProperties(e = Un) {
    const t = {};
    for (const s in this.class.properties)
      t[s] = new e(this.enums, this.class.properties[s], this.definition.properties[s]);
    this.properties = t;
  }
}
class mu extends Un {
  constructor(e, t, s = null) {
    super(e, t, s), this.attribute = s.attribute;
  }
}
class bu extends dr {
  constructor(...e) {
    super(...e), this.isPropertyAttributeAccessor = !0, this._initProperties(mu);
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
class Eu extends Un {
  constructor(e, t, s = null) {
    super(e, t, s), this.values = s.values, this.valueLength = pu(this.type), this.arrayOffsets = ge(s, "arrayOffsets", null), this.stringOffsets = ge(s, "stringOffsets", null), this.arrayOffsetType = ge(s, "arrayOffsetType", "UINT32"), this.stringOffsetType = ge(s, "stringOffsetType", "UINT32");
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
class Cu extends dr {
  constructor(...e) {
    super(...e), this.isPropertyTableAccessor = !0, this.count = this.definition.count, this._initProperties(Eu);
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
    if (Ec(o) || o === "ENUM")
      return Cc(h, (u + s) * i.valueLength, o, n);
    if (o === "STRING") {
      let d = u + s, f = 0;
      if (i.stringOffsets !== null) {
        const { stringOffsets: p, stringOffsetType: E } = i, m = _s(E), b = new m(c[p]);
        f = b[d + 1] - b[d], d = b[d];
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
const us = /* @__PURE__ */ new gA();
class Ia {
  constructor() {
    this._renderer = new co(), this._target = new Qi(1, 1), this._texTarget = new Qi(), this._quad = new yh(
      new Me({
        blending: fA,
        blendDst: dA,
        blendSrc: uA,
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
function Iu(a, e) {
  return e === 0 ? a.getAttribute("uv") : a.getAttribute(`uv${e}`);
}
function Ic(a, e, t = new Array(3)) {
  let s = 3 * e, n = 3 * e + 1, i = 3 * e + 2;
  return a.index && (s = a.index.getX(s), n = a.index.getX(n), i = a.index.getX(i)), t[0] = s, t[1] = n, t[2] = i, t;
}
function yc(a, e, t, s, n) {
  const [i, r, o] = s, c = Iu(a, e);
  ya.fromBufferAttribute(c, i), xa.fromBufferAttribute(c, r), Ba.fromBufferAttribute(c, o), n.set(0, 0, 0).addScaledVector(ya, t.x).addScaledVector(xa, t.y).addScaledVector(Ba, t.z);
}
function xc(a, e, t, s) {
  const n = a.x - Math.floor(a.x), i = a.y - Math.floor(a.y), r = Math.floor(n * e % e), o = Math.floor(i * t % t);
  return s.set(r, o), s;
}
const _a = /* @__PURE__ */ new H(), wa = /* @__PURE__ */ new H(), va = /* @__PURE__ */ new H();
class yu extends Un {
  constructor(e, t, s = null) {
    super(e, t, s), this.channels = ge(s, "channels", [0]), this.index = ge(s, "index", null), this.texCoord = ge(s, "texCoord", null), this.valueLength = parseInt(this.type.replace(/[^0-9]/g, "")) || 1;
  }
  // takes the buffer to read from and the value index to read
  readDataFromBuffer(e, t, s = null) {
    const n = this.type;
    if (n === "BOOLEAN" || n === "STRING")
      throw new Error("PropertyTextureAccessor: BOOLEAN and STRING types not supported.");
    return Cc(e, t * this.valueLength, n, s);
  }
}
class xu extends dr {
  constructor(...e) {
    super(...e), this.isPropertyTextureAccessor = !0, this._asyncRead = !1, this._initProperties(yu);
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
    const r = this.data, o = this.definition.properties, c = this.properties, A = Ic(n, t);
    for (let u = 0, d = e.length; u < d; u++) {
      const f = e[u];
      if (!o[f])
        continue;
      const g = c[f], p = r[g.index];
      yc(n, g.texCoord, s, A, _a), xc(_a, p.image.width, p.image.height, wa), va.set(u, 0), wt.renderPixelToTarget(p, wa, va);
    }
    const l = new Uint8Array(e.length * 4);
    if (this._asyncRead)
      return wt.readDataAsync(l).then(() => (h.call(this), i));
    return wt.readData(l), h.call(this), i;
    function h() {
      for (let u = 0, d = e.length; u < d; u++) {
        const f = e[u], g = c[f], p = g.type;
        if (i[u] = ur(g, i[u]), g) {
          if (!o[f]) {
            i[u] = g.resolveDefault(i);
            continue;
          }
        } else throw new Error("PropertyTextureAccessor: Requested property does not exist.");
        const E = g.valueLength * (g.count || 1), m = g.channels.map((w) => l[4 * u + w]), b = g.componentType, C = _s(b, p), I = new C(E);
        if (new Uint8Array(I.buffer).set(m), g.array) {
          const w = i[u];
          for (let B = 0, y = w.length; B < y; B++)
            w[B] = g.readDataFromBuffer(I, B, w[B]);
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
    const { schema: r, propertyTables: o = [], propertyTextures: c = [], propertyAttributes: A = [] } = e, { enums: l, classes: h } = r, u = o.map((g) => new Cu(g, h, l, s));
    let d = [], f = [];
    n && (n.propertyTextures && (d = n.propertyTextures.map((g) => new xu(c[g], h, l, t))), n.propertyAttributes && (f = n.propertyAttributes.map((g) => new bu(A[g], h, l)))), this.schema = r, this.tableAccessors = u, this.textureAccessors = d, this.attributeAccessors = f, this.object = i, this.textures = t, this.nodeMetadata = n;
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
function Bu(a, e = []) {
  var n;
  const t = ((n = a.json.textures) == null ? void 0 : n.length) || 0, s = new Array(t).fill(null);
  return e.forEach(({ properties: i }) => {
    for (const r in i) {
      const { index: o } = i[r];
      s[o] === null && (s[o] = a.loadTexture(o));
    }
  }), Promise.all(s);
}
function _u(a, e = []) {
  var n;
  const t = ((n = a.json.bufferViews) == null ? void 0 : n.length) || 0, s = new Array(t).fill(null);
  return e.forEach(({ properties: i }) => {
    for (const r in i) {
      const { values: o, arrayOffsets: c, stringOffsets: A } = i[r];
      s[o] === null && (s[o] = a.loadBufferView(o)), s[c] === null && (s[c] = a.loadBufferView(c)), s[A] === null && (s[A] = a.loadBufferView(A));
    }
  }), Promise.all(s);
}
class wu {
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
    const [r, o] = await Promise.all([Bu(t, i.propertyTextures), _u(t, i.propertyTables), n]), c = new Sa(i, r, o);
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
function vu(a) {
  return a.x > a.y && a.x > a.z ? 0 : a.y > a.z ? 1 : 2;
}
class Su {
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
    const c = Ic(s, e), A = c[vu(t)];
    for (let u = 0, d = i.length; u < d; u++) {
      const f = i[u], g = "nullFeatureId" in f ? f.nullFeatureId : null;
      if ("texture" in f) {
        const p = n[f.texture.index];
        yc(s, f.texture.texCoord, t, c, Ta), xc(Ta, p.image.width, p.image.height, Qa), Ra.set(u, 0), wt.renderPixelToTarget(n[f.texture.index], Qa, Ra);
      } else if ("attribute" in f) {
        const E = s.getAttribute(`_feature_id_${f.attribute}`).getX(A);
        E !== g && (r[u] = E);
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
          const { channels: E } = g.texture, m = E.map((C) => l[4 * d + C]);
          new Uint8Array(u.buffer).set(m);
          const b = u[0];
          b !== p && (r[d] = b);
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
class Tu {
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
      c.userData.meshFeatures = new Su(c.geometry, r, A);
    });
  }
}
class Qu {
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
class Ru {
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
    const t = new Qh(e.manager);
    this.dracoLoader && (t.setDRACOLoader(this.dracoLoader), e.manager.addHandler(this._dracoRegex, this.dracoLoader)), this.ktxLoader && t.setKTX2Loader(this.ktxLoader), this.meshoptDecoder && t.setMeshoptDecoder(this.meshoptDecoder), this.rtc && t.register(() => new Qu()), this.metadata && (t.register(() => new wu()), t.register(() => new Tu())), this.plugins.forEach((s) => t.register(s)), e.manager.addHandler(this._gltfRegex, t), this.tiles = e, this._loader = t;
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
class Mu {
  constructor(e = {}) {
  }
  init(e) {
    e.lruCache.maxBytesSize = 1 / 0, e.lruCache.minSize = 0, e.lruCache.maxSize = 1 / 0;
  }
}
class Du {
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
function Bc() {
  const a = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, s = Math.random() * 4294967295 | 0;
  return (Ce[a & 255] + Ce[a >> 8 & 255] + Ce[a >> 16 & 255] + Ce[a >> 24 & 255] + "-" + Ce[e & 255] + Ce[e >> 8 & 255] + "-" + Ce[e >> 16 & 15 | 64] + Ce[e >> 24 & 255] + "-" + Ce[t & 63 | 128] + Ce[t >> 8 & 255] + "-" + Ce[t >> 16 & 255] + Ce[t >> 24 & 255] + Ce[s & 255] + Ce[s >> 8 & 255] + Ce[s >> 16 & 255] + Ce[s >> 24 & 255]).toLowerCase();
}
let Lu = class {
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
    return Bc();
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
const xn = class xn extends Lu {
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
let ji = Bn;
const gi = /* @__PURE__ */ new WeakMap();
class Fu extends ns {
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
    if (gi.has(e)) {
      const c = gi.get(e);
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
    }), gi.set(e, {
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
      const i = ku.toString(), r = [
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
function ku() {
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
      const E = self[h[p]];
      let m, b;
      if (A.useUniqueIDs)
        b = l[p], m = o.GetAttributeByUniqueId(u, b);
      else {
        if (b = o.GetAttributeId(u, r[l[p]]), b === -1) continue;
        m = o.GetAttribute(u, b);
      }
      const C = n(r, o, u, p, E, m);
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
    const u = h.num_components(), f = c.num_points() * u, g = f * l.BYTES_PER_ELEMENT, p = i(r, l), E = r._malloc(g);
    o.GetAttributeDataArrayForAllPoints(c, h, p, g, E);
    const m = new l(r.HEAPF32.buffer, E, f).slice();
    return r._free(E), {
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
class Pu {
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
const Gu = 0, Da = 2, Uu = 1, La = 2, Nu = 0, Ou = 1, Hu = 10, zu = 0, _c = 9, wc = 15, vc = 16, Sc = 22, Tc = 37, Qc = 43, Rc = 76, Mc = 83, Dc = 97, Lc = 100, Fc = 103, kc = 109, ju = 131, Vu = 132, qu = 133, Ku = 134, Wu = 137, Ju = 138, Yu = 141, Xu = 142, Zu = 145, $u = 146, Pc = 148, Gc = 152, ed = 157, td = 158, Uc = 165, Nc = 166, fr = 1000066e3;
class sd {
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
function nd(a) {
  const e = new Uint8Array(a.buffer, a.byteOffset, we.length);
  if (e[0] !== we[0] || e[1] !== we[1] || e[2] !== we[2] || e[3] !== we[3] || e[4] !== we[4] || e[5] !== we[5] || e[6] !== we[6] || e[7] !== we[7] || e[8] !== we[8] || e[9] !== we[9] || e[10] !== we[10] || e[11] !== we[11]) throw new Error("Missing KTX 2.0 identifier.");
  const t = new sd(), s = 17 * Uint32Array.BYTES_PER_ELEMENT, n = new fs(a, we.length, s, !0);
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
  const E = new fs(a, l, h, !0), m = E._nextUint16(), b = E._nextUint16(), C = E._nextUint32(), I = E._nextUint32(), w = E._nextUint32(), B = E._nextUint32(), y = [];
  for (let T = 0; T < i; T++) y.push({ imageFlags: E._nextUint32(), rgbSliceByteOffset: E._nextUint32(), rgbSliceByteLength: E._nextUint32(), alphaSliceByteOffset: E._nextUint32(), alphaSliceByteLength: E._nextUint32() });
  const _ = l + E._offset, v = _ + C, S = v + I, M = S + w, U = new Uint8Array(a.buffer, a.byteOffset + _, C), F = new Uint8Array(a.buffer, a.byteOffset + v, I), N = new Uint8Array(a.buffer, a.byteOffset + S, w), P = new Uint8Array(a.buffer, a.byteOffset + M, B);
  return t.globalData = { endpointCount: m, selectorCount: b, imageDescs: y, endpointsData: U, selectorsData: F, tablesData: N, extendedData: P }, t;
}
let pi, At, Vi;
const mi = { env: { emscripten_notify_memory_growth: function(a) {
  Vi = new Uint8Array(At.exports.memory.buffer);
} } };
class id {
  init() {
    return pi || (pi = typeof fetch < "u" ? fetch("data:application/wasm;base64," + ka).then((e) => e.arrayBuffer()).then((e) => WebAssembly.instantiate(e, mi)).then(this._init) : WebAssembly.instantiate(Buffer.from(ka, "base64"), mi).then(this._init), pi);
  }
  _init(e) {
    At = e.instance, mi.env.emscripten_notify_memory_growth(0);
  }
  decode(e, t = 0) {
    if (!At) throw new Error("ZSTDDecoder: Await .init() before decoding.");
    const s = e.byteLength, n = At.exports.malloc(s);
    Vi.set(e, n), t = t || Number(At.exports.ZSTD_findDecompressedSize(n, s));
    const i = At.exports.malloc(t), r = At.exports.ZSTD_decompress(i, t, n, s), o = Vi.slice(i, i + r);
    return At.exports.free(n), At.exports.free(i), o;
  }
}
const ka = "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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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", rd = "display-p3", ad = "display-p3-linear", bi = /* @__PURE__ */ new WeakMap();
let Ei = 0, Ci;
class Oe extends ns {
  /**
   * Constructs a new KTX2 loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e), this.transcoderPath = "", this.transcoderBinary = null, this.transcoderPending = null, this.workerPool = new Pu(), this.workerSourceURL = "", this.workerConfig = null, typeof MSC_TRANSCODER < "u" && console.warn(
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
      }), Ei > 0 && console.warn(
        "THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."
      ), Ei++;
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
    if (bi.has(e))
      return bi.get(e).promise.then(t).catch(s);
    this._createTexture(e).then((n) => t ? t(n) : null).catch(s);
  }
  _createTextureFrom(e, t) {
    const { type: s, error: n, data: { faces: i, width: r, height: o, format: c, type: A, dfdFlags: l } } = e;
    if (s === "error") return Promise.reject(n);
    let h;
    if (t.faceCount === 6)
      h = new pA(i, c, A);
    else {
      const u = i[0].mipmaps;
      h = t.layerCount > 1 ? new mA(u, r, o, t.layerCount, c, A) : new Do(u, r, o, c, A);
    }
    return h.minFilter = i[0].mipmaps.length === 1 ? ne : is, h.magFilter = ne, h.generateMipmaps = !1, h.needsUpdate = !0, h.colorSpace = Oc(t), h.premultiplyAlpha = !!(l & Uu), h;
  }
  /**
   * @private
   * @param {ArrayBuffer} buffer
   * @param {?Object} config
   * @return {Promise<CompressedTexture|CompressedArrayTexture|DataTexture|Data3DTexture>}
   */
  async _createTexture(e, t = {}) {
    const s = nd(new Uint8Array(e)), n = s.vkFormat === fr && s.dataFormatDescriptor[0].colorModel === 167;
    if (!(s.vkFormat === zu || n && !this.workerConfig.astcHDRSupported))
      return cd(s);
    const r = t, o = this.init().then(() => this.workerPool.postMessage({ type: "transcode", buffer: e, taskConfig: r }, [e])).then((c) => this._createTextureFrom(c.data, s));
    return bi.set(e, { promise: o }), o;
  }
  /**
   * Frees internal resources. This method should be called
   * when the loader is no longer required.
   */
  dispose() {
    this.workerPool.dispose(), this.workerSourceURL && URL.revokeObjectURL(this.workerSourceURL), Ei--;
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
  RGB_BPTC_UNSIGNED_Format: yA,
  RGBA_BPTC_Format: Ri,
  RGBA_ETC2_EAC_Format: Lo,
  RGBA_PVRTC_4BPPV1_Format: IA,
  RGBA_S3TC_DXT5_Format: Mi,
  RGB_ETC1_Format: CA,
  RGB_ETC2_Format: Fo,
  RGB_PVRTC_4BPPV1_Format: EA,
  RGBA_S3TC_DXT1_Format: Di
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
            const { faces: p, buffers: E, width: m, height: b, hasAlpha: C, format: I, type: w, dfdFlags: B } = c(g.buffer);
            self.postMessage({ type: "transcode", id: g.id, data: { faces: p, width: m, height: b, hasAlpha: C, format: I, type: w, dfdFlags: B } }, E);
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
    let E;
    if (g.isUASTC())
      E = r.UASTC;
    else if (g.isETC1S())
      E = r.ETC1S;
    else if (g.isHDR())
      E = r.UASTC_HDR;
    else
      throw new Error("THREE.KTX2Loader: Unknown Basis encoding");
    const m = g.getWidth(), b = g.getHeight(), C = g.getLayers() || 1, I = g.getLevels(), w = g.getFaces(), B = g.getHasAlpha(), y = g.getDFDFlags(), { transcoderFormat: _, engineFormat: v, engineType: S } = h(E, m, b, B);
    if (!m || !b || !I)
      throw p(), new Error("THREE.KTX2Loader:	Invalid texture");
    if (!g.startTranscoding())
      throw p(), new Error("THREE.KTX2Loader: .startTranscoding failed");
    const M = [], U = [];
    for (let F = 0; F < w; F++) {
      const N = [];
      for (let P = 0; P < I; P++) {
        const T = [];
        let q, K;
        for (let te = 0; te < C; te++) {
          const $ = g.getImageLevelInfo(P, te, F);
          F === 0 && P === 0 && te === 0 && ($.origWidth % 4 !== 0 || $.origHeight % 4 !== 0) && console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."), I > 1 ? (q = $.origWidth, K = $.origHeight) : (q = $.width, K = $.height);
          let se = new Uint8Array(g.getImageTranscodedSizeInBytes(P, te, 0, _));
          const Be = g.transcodeImage(se, P, te, F, _, 0, -1, -1);
          if (S === n.HalfFloatType && (se = new Uint16Array(se.buffer, se.byteOffset, se.byteLength / Uint16Array.BYTES_PER_ELEMENT)), !Be)
            throw p(), new Error("THREE.KTX2Loader: .transcodeImage failed.");
          T.push(se);
        }
        const V = d(T);
        N.push({ data: V, width: q, height: K }), U.push(V.buffer);
      }
      M.push({ mipmaps: N, width: m, height: b, format: v, type: S });
    }
    return p(), { faces: M, buffers: U, width: m, height: b, hasAlpha: B, dfdFlags: y, format: v, type: S };
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
  function h(f, g, p, E) {
    const m = l[f];
    for (let b = 0; b < m.length; b++) {
      const C = m[b];
      if (C.if && !a[C.if] || !C.basisFormat.includes(f) || E && C.transcoderFormat.length < 2 || C.needsPowerOfTwo && !(u(g) && u(p))) continue;
      const I = C.transcoderFormat[E ? 1 : 0], w = C.engineFormat[E ? 1 : 0], B = C.engineType[0];
      return { transcoderFormat: I, engineFormat: w, engineType: B };
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
      const b = f[m];
      g += b.byteLength;
    }
    const p = new Uint8Array(g);
    let E = 0;
    for (let m = 0; m < f.length; m++) {
      const b = f[m];
      p.set(b, E), E += b.byteLength;
    }
    return p;
  }
};
const od = /* @__PURE__ */ new Set([Ie, Bt, qt]), Ii = {
  [kc]: Ie,
  [Dc]: Ie,
  [Tc]: Ie,
  [Qc]: Ie,
  [Fc]: Bt,
  [Mc]: Bt,
  [vc]: Bt,
  [Sc]: Bt,
  [Lc]: qt,
  [Rc]: qt,
  [wc]: qt,
  [_c]: qt,
  [Pc]: Fo,
  [Gc]: Lo,
  [fr]: rn,
  [td]: rn,
  [ed]: rn,
  [Nc]: Rr,
  [Uc]: Rr,
  [qu]: Di,
  [Ku]: Di,
  [ju]: Qr,
  [Vu]: Qr,
  [Ju]: Tr,
  [Wu]: Tr,
  [Xu]: Mi,
  [Yu]: Mi,
  [$u]: Ri,
  [Zu]: Ri
}, yi = {
  [kc]: Ve,
  [Dc]: ke,
  [Tc]: ve,
  [Qc]: ve,
  [Fc]: Ve,
  [Mc]: ke,
  [vc]: ve,
  [Sc]: ve,
  [Lc]: Ve,
  [Rc]: ke,
  [wc]: ve,
  [_c]: ve,
  [Pc]: ve,
  [Gc]: ve,
  [fr]: ke,
  [Nc]: ve,
  [Uc]: ve
};
async function cd(a) {
  const { vkFormat: e } = a;
  if (Ii[e] === void 0)
    throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");
  let t;
  a.supercompressionScheme === Da && (Ci || (Ci = new Promise(async (i) => {
    const r = new id();
    await r.init(), i(r);
  })), t = await Ci);
  const s = [];
  for (let i = 0; i < a.levels.length; i++) {
    const r = Math.max(1, a.pixelWidth >> i), o = Math.max(1, a.pixelHeight >> i), c = a.pixelDepth ? Math.max(1, a.pixelDepth >> i) : 0, A = a.levels[i];
    let l;
    if (a.supercompressionScheme === Gu)
      l = A.levelData;
    else if (a.supercompressionScheme === Da)
      l = t.decode(A.levelData, A.uncompressedByteLength);
    else
      throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");
    let h;
    yi[e] === Ve ? h = new Float32Array(
      l.buffer,
      l.byteOffset,
      l.byteLength / Float32Array.BYTES_PER_ELEMENT
    ) : yi[e] === ke ? h = new Uint16Array(
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
  if (od.has(Ii[e]))
    n = a.pixelDepth === 0 ? new ut(s[0].data, a.pixelWidth, a.pixelHeight) : new bA(s[0].data, a.pixelWidth, a.pixelHeight, a.pixelDepth);
  else {
    if (a.pixelDepth > 0) throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");
    n = new Do(s, a.pixelWidth, a.pixelHeight), n.minFilter = s.length === 1 ? ne : is, n.magFilter = ne;
  }
  return n.mipmaps = s, n.type = yi[e], n.format = Ii[e], n.colorSpace = Oc(a), n.needsUpdate = !0, Promise.resolve(n);
}
function Oc(a) {
  const e = a.dataFormatDescriptor[0];
  return e.colorPrimaries === Ou ? e.transferFunction === La ? Qe : he : e.colorPrimaries === Hu ? e.transferFunction === La ? rd : ad : e.colorPrimaries === Nu ? Sr : (console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`), Sr);
}
var Hc = function() {
  var a = "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb", e = "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb", t = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]), s = new Uint8Array([32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115]);
  if (typeof WebAssembly != "object")
    return {
      supported: !1
    };
  var n = WebAssembly.validate(t) ? e : a, i, r = WebAssembly.instantiate(o(n), {}).then(function(E) {
    i = E.instance, i.exports.__wasm_call_ctors();
  });
  function o(E) {
    for (var m = new Uint8Array(E.length), b = 0; b < E.length; ++b) {
      var C = E.charCodeAt(b);
      m[b] = C > 96 ? C - 97 : C > 64 ? C - 39 : C + 4;
    }
    for (var I = 0, b = 0; b < E.length; ++b)
      m[I++] = m[b] < 60 ? s[m[b]] : (m[b] - 60) * 64 + m[++b];
    return m.buffer.slice(0, I);
  }
  function c(E, m, b, C, I, w) {
    var B = i.exports.sbrk, y = b + 3 & -4, _ = B(y * C), v = B(I.length), S = new Uint8Array(i.exports.memory.buffer);
    S.set(I, v);
    var M = E(_, b, C, v, I.length);
    if (M == 0 && w && w(_, y, C), m.set(S.subarray(_, _ + b * C)), B(_ - B(0)), M != 0)
      throw new Error("Malformed buffer data: " + M);
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
  function d(E) {
    var m = {
      object: new Worker(E),
      pending: 0,
      requests: {}
    };
    return m.object.onmessage = function(b) {
      var C = b.data;
      m.pending -= C.count, m.requests[C.id][C.action](C.value), delete m.requests[C.id];
    }, m;
  }
  function f(E) {
    for (var m = "var instance; var ready = WebAssembly.instantiate(new Uint8Array([" + new Uint8Array(o(n)) + "]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;" + c.toString() + p.toString(), b = new Blob([m], { type: "text/javascript" }), C = URL.createObjectURL(b), I = 0; I < E; ++I)
      h[I] = d(C);
    URL.revokeObjectURL(C);
  }
  function g(E, m, b, C, I) {
    for (var w = h[0], B = 1; B < h.length; ++B)
      h[B].pending < w.pending && (w = h[B]);
    return new Promise(function(y, _) {
      var v = new Uint8Array(b), S = u++;
      w.pending += E, w.requests[S] = { resolve: y, reject: _ }, w.object.postMessage({ id: S, count: E, size: m, source: v, mode: C, filter: I }, [v.buffer]);
    });
  }
  function p(E) {
    r.then(function() {
      var m = E.data;
      try {
        var b = new Uint8Array(m.count * m.size);
        c(i.exports[m.mode], b, m.count, m.size, m.source, i.exports[m.filter]), self.postMessage({ id: m.id, count: m.count, action: "resolve", value: b }, [b.buffer]);
      } catch (C) {
        self.postMessage({ id: m.id, count: m.count, action: "reject", value: C });
      }
    });
  }
  return {
    ready: r,
    supported: !0,
    useWorkers: function(E) {
      f(E);
    },
    decodeVertexBuffer: function(E, m, b, C, I) {
      c(i.exports.meshopt_decodeVertexBuffer, E, m, b, C, i.exports[A[I]]);
    },
    decodeIndexBuffer: function(E, m, b, C) {
      c(i.exports.meshopt_decodeIndexBuffer, E, m, b, C);
    },
    decodeIndexSequence: function(E, m, b, C) {
      c(i.exports.meshopt_decodeIndexSequence, E, m, b, C);
    },
    decodeGltfBuffer: function(E, m, b, C, I, w) {
      c(i.exports[l[I]], E, m, b, C, i.exports[A[w]]);
    },
    decodeGltfBufferAsync: function(E, m, b, C, I) {
      return h.length > 0 ? g(E, m, b, l[C], A[I]) : r.then(function() {
        var w = new Uint8Array(E * m);
        return c(i.exports[l[C]], w, E, m, b, i.exports[A[I]]), w;
      });
    }
  };
}();
const _n = class _n {
  static getDracoLoader(e) {
    if (!this._dracoLoader) {
      e = e || "https://unpkg.com/three@0.173.0/examples/jsm/libs/draco/gltf/";
      const t = new Fu();
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
    return e || Hc;
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
    return this._scene = e, this._scene.addEventListener(xs, this.onSceneUpdate), this._scene.addEventListener(Fi, this.onSceneRecenter), this.getOrAddParentObject().add(this), this.updateSceneTransform(), this;
  }
  removeFromScene() {
    return this._scene === void 0 ? this : (this.getOrAddParentObject().remove(this), this._scene.removeEventListener(Fi, this.onSceneRecenter), this._scene.removeEventListener(xs, this.onSceneUpdate), this._scene = void 0, this);
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
const Pa = "KHR_gaussian_splatting", Ad = {
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
let ld = class {
  constructor(e, t) {
    this.parser = e, this.camera = t, this.name = Pa;
  }
  loadMesh(e) {
    const t = this.parser;
    this.camera;
    const s = t.json.extensionsUsed;
    if (!s || !s.includes(Pa))
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
      const c = Ad[o] || o.toLowerCase();
      c in e.attributes || i.push(r(n[o], c));
    }
    if (t.indices !== void 0 && !e.index) {
      const o = s.getDependency("accessor", t.indices).then(function(c) {
        e.setIndex(c);
      });
      i.push(o);
    }
    return hd(e, t, s), Promise.all(i).then(function() {
      return e;
    });
  }
};
function hd(a, e, t) {
  const s = e.attributes, n = new Le();
  if (s.POSITION !== void 0) {
    const o = t.json.accessors[s.POSITION], c = o.min, A = o.max;
    if (c !== void 0 && A !== void 0) {
      if (n.set(new x(c[0], c[1], c[2]), new x(A[0], A[1], A[2])), o.normalized) {
        const l = Ua(Ga[o.componentType]);
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
            const g = Ua(Ga[u.componentType]);
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
function Ua(a) {
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
      const o = new Float32Array(4 * 3), c = new oe(o, 3);
      s.setAttribute("position", c), c.setXYZ(0, -2, -2, 0), c.setXYZ(1, -2, 2, 0), c.setXYZ(2, 2, 2, 0), c.setXYZ(3, 2, -2, 0), c.needsUpdate = !0;
    } else {
      s.setIndex([0, 1, 2]);
      const o = new Float32Array(3 * 3), c = new oe(o, 3);
      s.setAttribute("position", c), c.setXYZ(0, -3, -2, 0), c.setXYZ(1, 3, -2, 0), c.setXYZ(2, 0, 4, 0), c.needsUpdate = !0;
    }
    const n = new ar().copy(s), i = new Float32Array(e);
    for (let o = 0; o < e; o++)
      i[o] = o;
    const r = new Qn(i, 1, !1);
    return r.setUsage(ko), n.setAttribute("splatIndex", r), n.instanceCount = 0, n;
  }
};
const ud = `
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

`, dd = `

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
      vertexShader: ud,
      fragmentShader: dd,
      transparent: !0,
      alphaTest: 1,
      blending: Po,
      depthTest: !0,
      depthWrite: !1,
      side: gt
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
let fd = (Gt = class {
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
        g.removeEventListener("error", p), g.removeEventListener("message", E), f(m);
      }, E = (m) => {
        g.removeEventListener("error", p), g.removeEventListener("message", E), m.data.visibleScenes.forEach((b, C) => {
          e[C].splatPositions = b.splatPositions, e[C].needSort = !1;
        }), d(m.data);
      };
      g.addEventListener("error", p), g.addEventListener("message", E), g.postMessage(h, u);
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
      const _ = s[B].vertexCount;
      u += _;
    }
    let d, f;
    for (let B = 0; B < 8; ++B) {
      const y = B & 1 ? r.x : o.x, _ = B & 2 ? r.y : o.y, v = B & 4 ? r.z : o.z, S = y * A + _ * l + v * h;
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
    const p = new Int32Array(u), E = new Uint32Array(u), m = new Int32Array(u), b = new Uint32Array(u);
    let C = 0;
    for (let B = 0; B < s.length; B++) {
      const y = s[B], _ = y.vertexCount, v = y.lineStart * y.lineWidth;
      for (let S = 0; S < _; ++S) {
        const M = y.splatPositions[S * 4 + 0], U = y.splatPositions[S * 4 + 1], F = y.splatPositions[S * 4 + 2], N = M * A + U * l + F * h - d;
        p[C] = Math.floor(N * 4096), E[C] = v + S, C++;
      }
    }
    C = u;
    const I = new Uint32Array(256);
    for (let B = 0; B < 32; B += 8) {
      I.fill(0);
      for (let _ = 0; _ < C; _++) {
        const v = p[_] >> B & 255;
        I[v] += 1;
      }
      let y = 0;
      for (let _ = 0; _ < I.length; _++) {
        const v = I[_];
        I[_] = y, y += v;
      }
      for (let _ = 0; _ < C; _++) {
        const v = p[_] >> B & 255, S = I[v];
        I[v] += 1, m[S] = p[_], b[S] = E[_];
      }
      p.set(m), E.set(b);
    }
    const w = new Float32Array(u);
    for (let B = 0; B < u; B++)
      w[B] = E[B];
    c.push(w.buffer), e.postMessage({
      visibleScenes: s,
      splatIndex: w,
      updateStart: 0,
      updateCount: u,
      vertexCount: u
      //@ts-ignore
    }, c);
  };
}, Gt), gd = class extends De {
  /**
   * Creates a new gaussian splatting mesh
   */
  constructor(e, t, s) {
    super(), this._sorter = null, this._centersData = null, this._covariancesAData = null, this._covariancesBData = null, this._colorsData = null, this.covariancesATexture = null, this.covariancesBTexture = null, this.centersTexture = null, this.colorsTexture = null, this.shTextures = null, this.scenes = [], this.sortingScenes = [], this.renderingScenes = [], this.removeingScenes = [], this.sortRunning = !1, this.isGaussianSplattingMesh = !0, this.renderer = e, this.camera = t, this._textureSize = s, this._maxVertexCount = this._textureSize.x * this._textureSize.y, this.geometry = Na.build(this._maxVertexCount), this.material = Oa.build(), this._sorter = new fd(this), this._initTextures(!1);
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
      const u = new ut(c, A, l, h, Ve, _t, fe, fe, ne, ne);
      return u.generateMipmaps = !1, u.needsUpdate = !0, u;
    }, s = (c, A, l, h) => {
      const u = new ut(c, A, l, h, ve, _t, fe, fe, ne, ne);
      return u.generateMipmaps = !1, u.needsUpdate = !0, u;
    }, n = (c, A, l, h) => {
      const u = new ut(c, A, l, h, ke, _t, fe, fe, ne, ne);
      return u.generateMipmaps = !1, u.needsUpdate = !0, u;
    }, i = this._textureSize, r = et.covBSItemSize, o = et.useRGBACovariants;
    this._centersData = new Float32Array(i.x * i.y * 4), this._covariancesAData = new Uint16Array(i.x * i.y * 4), this._covariancesBData = new Uint16Array(i.x * i.y * r), this._colorsData = new Uint8Array(i.x * i.y * 4), this.covariancesATexture = n(e ? this._covariancesAData : null, i.x, i.y, Ie), this.covariancesBTexture = n(e ? this._covariancesBData : null, i.x, i.y, o ? Ie : Bt), this.centersTexture = t(e ? this._centersData : null, i.x, i.y, Ie), this.colorsTexture = s(e ? this._colorsData : null, i.x, i.y, Ie);
  }
  _convert(e, t) {
    return t === ve ? e.UNSIGNED_BYTE : t === xA ? e.UNSIGNED_SHORT_4_4_4_4 : t === BA ? e.UNSIGNED_SHORT_5_5_5_1 : t === _A ? e.UNSIGNED_INT_5_9_9_9_REV : t === wA ? e.BYTE : t === vA ? e.SHORT : t === SA ? e.UNSIGNED_SHORT : t === TA ? e.INT : t === Go ? e.UNSIGNED_INT : t === Ve ? e.FLOAT : t === ke ? e.HALF_FLOAT : t === QA ? e.ALPHA : t === RA ? e.RGB : t === Ie ? e.RGBA : t === MA ? e.DEPTH_COMPONENT : t === DA ? e.DEPTH_STENCIL : t === qt ? e.RED : t === LA ? e.RED_INTEGER : t === Bt ? e.RG : t === FA ? e.RG_INTEGER : t === Uo ? e.RGBA_INTEGER : t === kA ? e.UNSIGNED_INT_24_8 : e[t] !== void 0 ? e[t] : null;
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
    const t = (f, g, p, E, m) => {
      const b = this.renderer.getContext(), C = this._textureSize, I = this.renderer ? this.renderer.properties.get(f) : null;
      if (!I || !I.__webglTexture)
        f.needsUpdate = !0;
      else {
        const w = this._convert(b, f.type), B = this._convert(b, f.format), y = b.getParameter(b.TEXTURE_BINDING_2D);
        b.bindTexture(b.TEXTURE_2D, I.__webglTexture), b.texSubImage2D(b.TEXTURE_2D, 0, 0, E, C.x, m, B, w, g), b.bindTexture(b.TEXTURE_2D, y);
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
            const { vertexCount: p, splatPositions: E, splatCovA: m, splatCovB: b, splatColors: C, boundingBox: I, boundingSphere: w } = g.data;
            e.vertexCount = p, e.splatPositions = E, e.splatCovA = m, e.splatCovB = b, e.splatColors = C, e.boundingBox = new Le(new x(I.min[0], I.min[1], I.min[2]), new x(I.max[0], I.max[1], I.max[2])), e.boundingSphere = new Fe(new x(w.center[0], w.center[1], w.center[2]), w.radius), e.needSort = !0, e.geometry.dispose(), e.geometry = null, s();
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
      const b = m - 127;
      b < -27 ? (d[m] = 0, d[m | 256] = 32768, f[m] = 24, f[m | 256] = 24) : b < -14 ? (d[m] = 1024 >> -b - 14, d[m | 256] = 1024 >> -b - 14 | 32768, f[m] = -b - 1, f[m | 256] = -b - 1) : b <= 15 ? (d[m] = b + 15 << 10, d[m | 256] = b + 15 << 10 | 32768, f[m] = 13, f[m | 256] = 13) : b < 128 ? (d[m] = 31744, d[m | 256] = 64512, f[m] = 24, f[m | 256] = 24) : (d[m] = 31744, d[m | 256] = 64512, f[m] = 13, f[m | 256] = 13);
    }
    const g = new Uint32Array(2048), p = new Uint32Array(64), E = new Uint32Array(64);
    for (let m = 1; m < 1024; ++m) {
      let b = m << 13, C = 0;
      for (; (b & 8388608) === 0; )
        b <<= 1, C -= 8388608;
      b &= -8388609, C += 947912704, g[m] = b | C;
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
      m !== 32 && (E[m] = 1024);
    return {
      floatView: h,
      uint32View: u,
      baseTable: d,
      shiftTable: f,
      mantissaTable: g,
      exponentTable: p,
      offsetTable: E
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
    const { positionBuffer: h, scaleBuffer: u, rotationBuffer: d, colorBuffer: f, opacityBuffer: g, vertexCount: p, useRGBACovariants: E, covBSItemSize: m } = l.data, b = 255, C = new Float32Array(4 * p), I = new Uint16Array(p * 4), w = new Uint16Array(p * m), B = new Uint8Array(p * 4);
    let y = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE], _ = [-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE];
    for (let M = 0; M < p; M++) {
      const U = c(h, M, 3), F = c(u, M, 3), N = c(d, M, 4), P = g ? [...c(f, M, 3), ...c(g, M, 1)] : c(f, M, 4);
      A(N);
      for (let ae = 0; ae < 3; ae++)
        U[ae] < y[ae] && (y[ae] = U[ae]), U[ae] > _[ae] && (_[ae] = U[ae]);
      const T = N[0], q = N[1], K = N[2], V = -N[3], te = T + T, $ = q + q, se = K + K, Be = T * te, Qt = T * $, mt = T * se, _e = q * $, Ke = q * se, Rt = K * se, ce = V * te, pe = V * $, Q = V * se, D = F[0] * 2, k = F[1] * 2, O = F[2] * 2, R = Array(12);
      R[0] = (1 - (_e + Rt)) * D, R[1] = (Qt + Q) * k, R[2] = (mt - pe) * O, R[4] = (Qt - Q) * D, R[5] = (1 - (Be + Rt)) * k, R[6] = (Ke + ce) * O, R[8] = (mt + pe) * D, R[9] = (Ke - ce) * k, R[10] = (1 - (Be + _e)) * O;
      const L = R, j = Array(6);
      j[0] = L[0] * L[0] + L[1] * L[1] + L[2] * L[2], j[1] = L[0] * L[4] + L[1] * L[5] + L[2] * L[6], j[2] = L[0] * L[8] + L[1] * L[9] + L[2] * L[10], j[3] = L[4] * L[4] + L[5] * L[5] + L[6] * L[6], j[4] = L[4] * L[8] + L[5] * L[9] + L[6] * L[10], j[5] = L[8] * L[8] + L[9] * L[9] + L[10] * L[10];
      let Y = -1e4;
      for (let ae = 0; ae < 6; ae++)
        Y = Math.max(Y, Math.abs(j[ae]));
      const Ae = M, ie = Ae * 4, We = Ae * m;
      C[4 * M + 0] = U[0], C[4 * M + 1] = U[1], C[4 * M + 2] = U[2], C[4 * M + 3] = Y, I[ie + 0] = i(j[0] / Y), I[ie + 1] = i(j[1] / Y), I[ie + 2] = i(j[2] / Y), I[ie + 3] = i(j[3] / Y), w[We + 0] = i(j[4] / Y), w[We + 1] = i(j[5] / Y), B[4 * M + 0] = P[0] * b, B[4 * M + 1] = P[1] * b, B[4 * M + 2] = P[2] * b, B[4 * M + 3] = P[3] * b;
    }
    const v = [(y[0] + _[0]) / 2, (y[1] + _[1]) / 2, (y[2] + _[2]) / 2], S = Math.max(_[0] - y[0], _[1] - y[1], _[2] - y[2]) / 2;
    e.postMessage(
      {
        vertexCount: p,
        splatPositions: C,
        splatCovA: I,
        splatCovB: w,
        splatColors: B,
        boundingBox: { min: y, max: _ },
        boundingSphere: { center: v, radius: S }
      },
      [C.buffer, I.buffer, w.buffer, B.buffer]
    );
  };
};
let qi = wn;
class pd {
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
    this.tiles = e, e.addEventListener("load-tile-set", this._onLoadTileSet), e.addEventListener("tile-visibility-change", this._onTileVisibilityChange), e.addEventListener("load-model", this._onLoadModel), e.addEventListener("dispose-model", this._onDisposeModel), e.addEventListener("update-before", this._onUpdateBefore), e.addEventListener("update-after", this._onUpdateAfter), this.bufferWorker = new qi(), this.bufferWorker.initialize(e.parseQueue.maxJobs);
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
    this.splatMesh = new gd(this.renderer, this.camera, this.textureSize), this.splatMesh.frustumCulled = !1, this.splatMesh.matrix = s.root.cached.transform, this.splatMesh.matrixAutoUpdate = !1, s.group.add(this.splatMesh), this.splatMesh.matrixWorldAutoUpdate = !0, this.splatMesh.boundingBox = n, this.splatMesh.boundingSphere = i;
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
let zc = 1;
const xi = (a, e) => Math.abs(a.__depthFromRenderedParent - e.__depthFromRenderedParent) > zc ? a.__depthFromRenderedParent > e.__depthFromRenderedParent ? -1 : 1 : a.__error !== e.__error ? a.__error > e.__error ? 1 : -1 : a.__distanceFromCamera !== e.__distanceFromCamera ? a.__distanceFromCamera > e.__distanceFromCamera ? -1 : 1 : a.__inFrustum !== e.__inFrustum ? a.__inFrustum ? 1 : -1 : a.__used !== e.__used ? a.__used ? 1 : -1 : a.__depthFromRenderedParent !== e.__depthFromRenderedParent ? a.__depthFromRenderedParent > e.__depthFromRenderedParent ? -1 : 1 : 0;
class md {
  constructor(e = { depthLevel: 1 }) {
    this.depthLevel = e.depthLevel;
  }
  set depthLevel(e) {
    zc = e;
  }
  init(e) {
    e.downloadQueue.priorityCallback = xi, e.parseQueue.priorityCallback = xi, e.processNodeQueue.priorityCallback = xi;
  }
}
const bd = 0, Ed = 1, Cd = 2, Id = 3, yd = 4, xd = 5, Bd = 6, _d = 7, wd = 8, vd = 9, Sd = 10, Td = Object.freeze({
  NONE: bd,
  SCREEN_ERROR: Ed,
  GEOMETRIC_ERROR: Cd,
  DISTANCE: Id,
  DEPTH: yd,
  RELATIVE_DEPTH: xd,
  IS_LEAF: Bd,
  RANDOM_COLOR: _d,
  RANDOM_NODE_COLOR: wd,
  CUSTOM_COLOR: vd,
  LOAD_ORDER: Sd
});
class Qd extends Ot {
  static getColorModes() {
    return Td;
  }
  constructor(e) {
    super(), this.options = e, this.group = void 0, this.tiles = void 0, this.centerLngLat = void 0;
  }
  addToScene(e) {
    const t = e.getWebGLRenderer(), s = e.getCamera(), n = new le();
    this.add(n);
    const i = kt.getDracoLoader(this.options.dracoLoaderPath), r = kt.getKtxLoader(this.options.ktx2LoaderPath), o = kt.getMeshoptDecoder(this.options.meshoptDecoder);
    r.detectSupport(t);
    const c = new gh(this.options.url);
    this.options.downloadMaxJobs && (c.downloadQueue.maxJobs = this.options.downloadMaxJobs), this.options.parseMaxJobs && (c.parseQueue.maxJobs = this.options.parseMaxJobs), c.registerPlugin(new Th()), c.registerPlugin(new xh()), c.registerPlugin(new Mu()), c.registerPlugin(new Du()), c.registerPlugin(new ji()), c.registerPlugin(new md()), c.registerPlugin(new bh());
    let A = [];
    return this.options.isGaussianSplatting && (c.registerPlugin(new pd(t, s, this.options.maxGaussianSplatingCount)), A.push((l) => new ld(l, s))), c.registerPlugin(
      new Ru({
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
class Bi {
  static build(e = 1, t = !1) {
    const s = new xe();
    if (t) {
      s.setIndex([0, 1, 2, 0, 2, 3]);
      const o = new Float32Array(4 * 3), c = new oe(o, 3);
      s.setAttribute("position", c), c.setXYZ(0, -2, -2, 0), c.setXYZ(1, -2, 2, 0), c.setXYZ(2, 2, 2, 0), c.setXYZ(3, 2, -2, 0), c.needsUpdate = !0;
    } else {
      s.setIndex([0, 1, 2]);
      const o = new Float32Array(3 * 3), c = new oe(o, 3);
      s.setAttribute("position", c), c.setXYZ(0, -3, -2, 0), c.setXYZ(1, 3, -2, 0), c.setXYZ(2, 0, 4, 0), c.needsUpdate = !0;
    }
    const n = new ar().copy(s), i = new Float32Array(e), r = new Qn(i, 1, !1);
    return r.setUsage(ko), n.setAttribute("splatIndex", r), n.instanceCount = 0, n;
  }
}
const Rd = `
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

`, Md = `

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
      vertexShader: Rd,
      fragmentShader: Md,
      transparent: !0,
      alphaTest: 1,
      blending: Po,
      depthTest: !0,
      depthWrite: !1,
      side: gt
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
function Ki(a, e, t) {
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
      Ki(t, s, n);
    }, 0)) : Ki(t, s, n);
  };
}
function jc(a, e, t, s, n) {
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
  return jc(
    a,
    Ki,
    (s) => t = s,
    (s) => {
      throw s;
    },
    e
  ), t;
}
function In(a, e, t) {
  return new Promise((s, n) => {
    jc(a, e, s, n, t);
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
let Wi = Ge;
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
    super(), this._vertexCount = 0, this._worker = null, this._frameIdLastUpdate = -1, this._frameIdThisUpdate = 0, this._cameraMatrix = null, this._modelViewMatrix = null, this._canPostToWorker = !1, this._readyToDisplay = !1, this._covariancesATexture = null, this._covariancesBTexture = null, this._centersTexture = null, this._colorsTexture = null, this._splatPositions = null, this._splatPositions2 = null, this._splatIndex = null, this._splatIndex2 = null, this._shTextures = null, this._splatsData = null, this._sh = null, this._keepInRam = !1, this._oldDirection = new x(), this._useRGBACovariants = !1, this._tmpCovariances = [0, 0, 0, 0, 0, 0], this._sortIsDirty = !1, this._shDegree = 0, this.isGaussianSplattingMesh = !0, this._tempQuaternion = new qe(), this._tempPosition = new x(), this._tempScale = new x(), this._tempColor = new Uint8Array(4), this._tempMatrix = new z(), this.geometry = Bi.build(), this.material = Ys.build(), this.setEnabled(!1), this._useRGBACovariants = !0;
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
    const f = i.x, g = i.y, p = i.z, E = i.w, m = f + f, b = g + g, C = p + p, I = f * m, w = f * b, B = f * C, y = g * b, _ = g * C, v = p * C, S = E * m, M = E * b, U = E * C, F = n.x, N = n.y, P = n.z;
    u[0] = (1 - (y + v)) * F, u[1] = (w + U) * N, u[2] = (B - M) * P, u[4] = (w - U) * F, u[5] = (1 - (I + v)) * N, u[6] = (_ + S) * P, u[8] = (B + M) * F, u[9] = (_ - S) * N, u[10] = (1 - (I + y)) * P;
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
    const f = e, g = this._tempPosition, p = this._tempQuaternion, E = this._tempScale, m = this._tempColor, b = d ? 255 : 1;
    g.x = s.getX(f), g.y = s.getY(f), g.z = s.getZ(f), E.x = n.getX(f), E.y = n.getY(f), E.z = n.getZ(f), p.x = i.getX(f), p.y = i.getY(f), p.z = i.getZ(f), p.w = i.getW(f), p.normalize(), m[0] = r.getX(f) * b, m[1] = r.getY(f) * b, m[2] = r.getZ(f) * b, m[3] = (o ? o.getX(f) : r.getW(f)) * b, this._makeSplatFromComonents(e, t, g, E, p, m, c, A, l, h, u);
  }
  _makeSplatFromBuffer(e, t, s, n, i, r, o, c, A) {
    const l = this._tempPosition, h = this._tempQuaternion, u = this._tempScale, d = this._tempColor;
    l.x = s[8 * e + 0], l.y = s[8 * e + 1], l.z = s[8 * e + 2], u.x = s[8 * e + 3 + 0], u.y = s[8 * e + 3 + 1], u.z = s[8 * e + 3 + 2], h.x = (n[32 * e + 28 + 1] - 127.5) / 127.5, h.y = (n[32 * e + 28 + 2] - 127.5) / 127.5, h.z = (n[32 * e + 28 + 3] - 127.5) / 127.5, h.w = (n[32 * e + 28 + 0] - 127.5) / 127.5, h.normalize(), d[0] = n[32 * e + 24 + 0], d[1] = n[32 * e + 24 + 1], d[2] = n[32 * e + 24 + 2], d[3] = n[32 * e + 24 + 3], this._makeSplatFromComonents(e, t, l, u, h, d, i, r, o, c, A);
  }
  _updateTextures(e, t, s, n) {
    const i = this._getTextureSize(this._vertexCount), r = (l, h, u, d) => {
      const f = new ut(l, h, u, d, Ve, _t, fe, fe, ne, ne);
      return f.generateMipmaps = !1, f.needsUpdate = !0, f;
    }, o = (l, h, u, d) => {
      const f = new ut(l, h, u, d, ve, _t, fe, fe, ne, ne);
      return f.generateMipmaps = !1, f.needsUpdate = !0, f;
    }, c = (l, h, u, d) => {
      const f = new ut(l, h, u, d, Go, _t, fe, fe, $t, $t);
      return f.generateMipmaps = !1, f.needsUpdate = !0, f;
    }, A = (l, h, u, d) => {
      const f = new ut(l, h, u, d, ke, _t, fe, fe, ne, ne);
      return f.generateMipmaps = !1, f.needsUpdate = !0, f;
    };
    this._covariancesATexture = A(e, i.x, i.y, Ie), this._covariancesBTexture = A(t, i.x, i.y, this._useRGBACovariants ? Ie : Bt), this._centersTexture = r(this._splatPositions, i.x, i.y, Ie), this._colorsTexture = o(s, i.x, i.y, Ie), n && (this._shTextures = [], n.forEach((l) => {
      const h = new Uint32Array(l.buffer), u = c(h, i.x, i.y, Uo);
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
    r != this._vertexCount && (this._vertexCount = r, this.geometry = Bi.build(this._vertexCount), this.material = Ys.build(this._shDegree), this._updateSplatIndexBuffer(this._vertexCount));
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
    l != this._vertexCount && (this._vertexCount = l, this.geometry = Bi.build(this._vertexCount), this.material = Ys.build(this._shDegree), this._updateSplatIndexBuffer(this._vertexCount));
    const h = this._getTextureSize(l), u = h.x * h.y, d = h.y;
    h.x * d, this._splatPositions = new Float32Array(4 * u), this._splatPositions2 = new Float32Array(4 * l);
    const f = new Uint16Array(u * 4), g = new Uint16Array((this._useRGBACovariants ? 4 : 2) * u), p = new Uint8Array(u * 4), E = new x(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), m = new x(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
    {
      for (let b = 0; b < l; b++)
        this._makeSplatFromAttribute(b, b, s, n, o, i, r, f, g, p, E, m, c), t && b % $e._SplatBatchSize === 0 && (yield);
      this._updateTextures(f, g, p), this._updateBoundingInfo(E, m), this.setEnabled(!0);
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
    this._updateSplatIndexBuffer(this._vertexCount), (s = this._worker) == null || s.terminate(), this._worker = new Wi();
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
$e._RowOutputLength = 3 * 4 + 3 * 4 + 4 + 4, $e._SH_C0 = 0.28209479177387814, $e._SplatBatchSize = 327680, $e._PlyConversionBatchSize = 32768;
let ws = $e;
class Dd extends ns {
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
}, Ld = (a, e) => {
  e[0] = nt(a >>> 24, 8) * 255, e[1] = nt(a >>> 16, 8) * 255, e[2] = nt(a >>> 8, 8) * 255, e[3] = nt(a, 8) * 255;
}, Fd = (a, e) => {
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
    let g = 255, p = 0, E = 0, m = 0;
    for (let b = 0; b < e.vertexProperties.length; b++) {
      const C = e.vertexProperties[b];
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
            const w = s[f];
            za(I, r), l[0] = ee.lerp(w.min.x, w.max.x, r.x), l[1] = -ee.lerp(w.min.y, w.max.y, r.y), l[2] = ee.lerp(w.min.z, w.max.z, r.z);
          }
          break;
        case 13:
          Fd(I, i), g = i.w, p = i.z, E = i.y, m = i.x;
          break;
        case 14:
          {
            const w = s[f];
            za(I, r), h[0] = Math.exp(ee.lerp(w.minScale.x, w.maxScale.x, r.x)), h[1] = Math.exp(ee.lerp(w.minScale.y, w.maxScale.y, r.y)), h[2] = Math.exp(ee.lerp(w.minScale.z, w.maxScale.z, r.z));
          }
          break;
        case 15:
          Ld(I, u);
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
          E = I;
          break;
        case 33:
          m = I;
          break;
      }
    }
    i.set(p, E, m, g), i.normalize(), d[0] = i.w * 128 + 128, d[1] = i.x * 128 + 128, d[2] = i.y * 128 + 128, d[3] = i.z * 128 + 128, n.value += e.rowVertexLength;
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
    ((b) => {
      b[b.Vertex = 0] = "Vertex", b[b.Chunk = 1] = "Chunk";
    })(u || (u = {}));
    let d = 1;
    const f = [], g = [], p = s.slice(0, i).split(`
`);
    for (const b of p)
      if (b.startsWith("property ")) {
        const [, C, I] = b.split(" "), w = de._ValueNameToEnum(I), B = de._TypeNameToEnum(C);
        d == 1 ? (g.push({
          value: w,
          type: B,
          offset: l
        }), l += h[C]) : d == 0 && (f.push({
          value: w,
          type: B,
          offset: A
        }), A += h[C]);
      } else if (b.startsWith("element ")) {
        const [, C] = b.split(" ");
        C == "chunk" ? d = 1 : C == "vertex" && (d = 0);
      }
    const E = new DataView(e, i + n.length), m = new ArrayBuffer(de._RowOutputLength * r);
    return {
      vertexCount: r,
      chunkCount: c,
      rowVertexLength: A,
      rowChunkLength: l,
      vertexProperties: f,
      chunkProperties: g,
      dataView: E,
      buffer: m
    };
  }
};
de._RowOutputLength = 3 * 4 + 3 * 4 + 4 + 4, de._SH_C0 = 0.28209479177387814, de._SplatBatchSize = 327680, de._PlyConversionBatchSize = 32768;
let Ji = de;
const ja = "KHR_gaussian_splatting", kd = {
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
class Pd {
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
          const E = d[g];
          f.add(E);
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
      const c = kd[o] || o.toLowerCase();
      c in e.attributes || i.push(r(n[o], c));
    }
    if (t.indices !== void 0 && !e.index) {
      const o = s.getDependency("accessor", t.indices).then(function(c) {
        e.setIndex(c);
      });
      i.push(o);
    }
    return Gd(e, t, s), Promise.all(i).then(function() {
      return e;
    });
  }
}
function Gd(a, e, t) {
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
class Ud extends Ot {
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
          const r = new Ji();
          r.setPath(e), r.load(t, async (o) => {
            i.onLoadModel(o, s);
          });
        }
        break;
      case "splat":
        {
          const r = new Dd();
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
          const c = new Pn();
          c.setDRACOLoader(r), c.setKTX2Loader(o), c.setMeshoptDecoder(Hc), c.register((A) => new Pd(A)), c.setPath(e), c.load(t, async (A) => {
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
function Nd(a) {
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
function Od(a, e, t = {}) {
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
  if (zd(i, r))
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
const Hd = {
  Point: 1,
  MultiPoint: 2,
  LineString: 2,
  MultiLineString: 3,
  Polygon: 3,
  MultiPolygon: 4
};
function zd(a, e) {
  let t = Hd[a];
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
function jd(a) {
  let e = 0, t = 0, s = 0, n = 0;
  return Cs(a, function(i) {
    e += i[0], t += i[1], s += i.length > 2 ? i[2] : 0, n++;
  }), [e / n, t / n, s / n];
}
function Vd(a) {
  var e, t, s, n, i, r;
  return e = t = s = 1 / 0, n = i = r = -1 / 0, Cs(a, function(o) {
    const c = o.length > 2 ? o[2] : 0;
    o[0] < e && (e = o[0]), o[1] < t && (t = o[1]), c < s && (s = c), o[0] > n && (n = o[0]), o[1] > i && (i = o[1]), c > r && (r = c);
  }), [
    [e, t, s],
    [n, i, r]
  ];
}
async function qd(a) {
  let e;
  if (typeof a == "string") {
    const o = await fetch(a);
    if (!o.ok)
      throw new Error(`HTTP error! status: ${o.status}`);
    e = await o.json();
  } else
    Array.isArray(a) ? e = {
      type: "GeometryCollection",
      geometries: a
    } : e = a;
  const t = (r, o, c) => (r.__source = {
    object: o,
    index: c
  }, r), s = Nd(e), n = Od(s, t), i = jd(e);
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
function Kd(a, e) {
  const s = st.updateWorldMatrix(null, e).clone().invert(), { features: n, centroid: i, geometries: r } = a, { pointFeatures: o, lineFeatures: c, polygonFeatures: A, polygonOutlineFeatures: l } = r;
  return o.forEach((h) => {
    const { geometry: u } = h;
    u.coordinates = Xs(u.coordinates, s);
  }), c.forEach((h) => {
    const { geometry: u } = h, { coordinates: d } = u, f = d.map((g) => Xs(g, s));
    u.coordinates = f;
  }), A.forEach((h) => {
    const { geometry: u } = h, { coordinates: d } = u, f = d.map((g) => g.map((E) => Xs(E, s)));
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
class Vc extends Me {
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
class qc extends ar {
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
    const s = new Li(t, 6, 1);
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
    const s = new Li(t, 6, 1);
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
    return this.fromWireframeGeometry(new PA(e.geometry)), this;
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
const _i = new ft(), Ya = new x(), Xa = new x(), me = new ft(), be = new ft(), Xe = new ft(), wi = new x(), vi = new z(), Ee = new GA(), Za = new x(), $s = new Le(), en = new Fe(), Ze = new ft();
let tt, Pt;
function $a(a, e, t) {
  return Ze.set(0, 0, -e, 1).applyMatrix4(a.projectionMatrix), Ze.multiplyScalar(1 / Ze.w), Ze.x = Pt / t.width, Ze.y = Pt / t.height, Ze.applyMatrix4(a.projectionMatrixInverse), Ze.multiplyScalar(1 / Ze.w), Math.abs(Math.max(Ze.x, Ze.y));
}
function Wd(a, e) {
  const t = a.matrixWorld, s = a.geometry, n = s.attributes.instanceStart, i = s.attributes.instanceEnd, r = Math.min(s.instanceCount, n.count);
  for (let o = 0, c = r; o < c; o++) {
    Ee.start.fromBufferAttribute(n, o), Ee.end.fromBufferAttribute(i, o), Ee.applyMatrix4(t);
    const A = new x(), l = new x();
    tt.distanceSqToSegment(Ee.start, Ee.end, l, A), l.distanceTo(A) < Pt * 0.5 && e.push({
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
function Jd(a, e, t) {
  const s = e.projectionMatrix, i = a.material.resolution, r = a.matrixWorld, o = a.geometry, c = o.attributes.instanceStart, A = o.attributes.instanceEnd, l = Math.min(o.instanceCount, c.count), h = -e.near;
  tt.at(1, Xe), Xe.w = 1, Xe.applyMatrix4(e.matrixWorldInverse), Xe.applyMatrix4(s), Xe.multiplyScalar(1 / Xe.w), Xe.x *= i.x / 2, Xe.y *= i.y / 2, Xe.z = 0, wi.copy(Xe), vi.multiplyMatrices(e.matrixWorldInverse, r);
  for (let u = 0, d = l; u < d; u++) {
    if (me.fromBufferAttribute(c, u), be.fromBufferAttribute(A, u), me.w = 1, be.w = 1, me.applyMatrix4(vi), be.applyMatrix4(vi), me.z > h && be.z > h)
      continue;
    if (me.z > h) {
      const b = me.z - be.z, C = (me.z - h) / b;
      me.lerp(be, C);
    } else if (be.z > h) {
      const b = be.z - me.z, C = (be.z - h) / b;
      be.lerp(me, C);
    }
    me.applyMatrix4(s), be.applyMatrix4(s), me.multiplyScalar(1 / me.w), be.multiplyScalar(1 / be.w), me.x *= i.x / 2, me.y *= i.y / 2, be.x *= i.x / 2, be.y *= i.y / 2, Ee.start.copy(me), Ee.start.z = 0, Ee.end.copy(be), Ee.end.z = 0;
    const g = Ee.closestPointToPointParameter(wi, !0);
    Ee.at(g, Za);
    const p = ee.lerp(me.z, be.z, g), E = p >= -1 && p <= 1, m = wi.distanceTo(Za) < Pt * 0.5;
    if (E && m) {
      Ee.start.fromBufferAttribute(c, u), Ee.end.fromBufferAttribute(A, u), Ee.start.applyMatrix4(r), Ee.end.applyMatrix4(r);
      const b = new x(), C = new x();
      tt.distanceSqToSegment(Ee.start, Ee.end, C, b), t.push({
        point: C,
        pointOnLine: b,
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
class Yd extends De {
  /**
   * Constructs a new wide line.
   *
   * @param {LineSegmentsGeometry} [geometry] - The line geometry.
   * @param {LineMaterial} [material] - The line material.
   */
  constructor(e = new qc(), t = new Vc({ color: Math.random() * 16777215 })) {
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
    const i = new Li(n, 2, 1);
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
    Pt = c.linewidth + i, o.boundingSphere === null && o.computeBoundingSphere(), en.copy(o.boundingSphere).applyMatrix4(r);
    let A;
    if (s)
      A = Pt * 0.5;
    else {
      const h = Math.max(n.near, en.distanceToPoint(tt.origin));
      A = $a(n, h, c.resolution);
    }
    if (en.radius += A, tt.intersectsSphere(en) === !1)
      return;
    o.boundingBox === null && o.computeBoundingBox(), $s.copy(o.boundingBox).applyMatrix4(r);
    let l;
    if (s)
      l = Pt * 0.5;
    else {
      const h = Math.max(n.near, $s.distanceToPoint(tt.origin));
      l = $a(n, h, c.resolution);
    }
    $s.expandByScalar(l), tt.intersectsBox($s) !== !1 && (s ? Wd(this, t) : Jd(this, n, t));
  }
  onBeforeRender(e) {
    const t = this.material.uniforms;
    t && t.resolution && (e.getViewport(_i), this.material.uniforms.resolution.value.set(_i.z, _i.w));
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
function Xd(a) {
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
function Zd(a) {
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
  return o.groups.length === 0 ? o : Xd(o);
}
class Yi extends UA {
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
    const n = new NA(this.currentPoint.clone(), new x(e, t, s));
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
class gr extends Yi {
  constructor(e) {
    super(e), this.uuid = Bc(), this.type = "Shape3", this.holes = [];
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
      this.holes.push(new Yi().fromJSON(n));
    }
    return this;
  }
}
function $d(a, e, t = 2) {
  const s = e && e.length, n = s ? e[0] * t : a.length;
  let i = Kc(a, 0, n, t, !0);
  const r = [];
  if (!i || i.next === i.prev) return r;
  let o, c, A;
  if (s && (i = rf(a, e, i, t)), a.length > 80 * t) {
    o = 1 / 0, c = 1 / 0;
    let l = -1 / 0, h = -1 / 0;
    for (let u = t; u < n; u += t) {
      const d = a[u], f = a[u + 1];
      d < o && (o = d), f < c && (c = f), d > l && (l = d), f > h && (h = f);
    }
    A = Math.max(l - o, h - c), A = A !== 0 ? 32767 / A : 0;
  }
  return vs(i, r, t, o, c, A, 0), r;
}
function Kc(a, e, t, s, n) {
  let i;
  if (n === pf(a, e, t, s) > 0)
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
  !r && i && lf(a, s, n, i);
  let o = a;
  for (; a.prev !== a.next; ) {
    const c = a.prev, A = a.next;
    if (i ? tf(a, s, n, i) : ef(a)) {
      e.push(c.i, a.i, A.i), Ts(a), a = A.next, o = A.next;
      continue;
    }
    if (a = A, a === o) {
      r ? r === 1 ? (a = sf(Nt(a), e), vs(a, e, t, s, n, i, 2)) : r === 2 && nf(a, e, t, s, n, i) : vs(Nt(a), e, t, s, n, i, 1);
      break;
    }
  }
}
function ef(a) {
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
function tf(a, e, t, s) {
  const n = a.prev, i = a, r = a.next;
  if (re(n, i, r) >= 0) return !1;
  const o = n.x, c = i.x, A = r.x, l = n.y, h = i.y, u = r.y, d = Math.min(o, c, A), f = Math.min(l, h, u), g = Math.max(o, c, A), p = Math.max(l, h, u), E = Xi(d, f, e, t, s), m = Xi(g, p, e, t, s);
  let b = a.prevZ, C = a.nextZ;
  for (; b && b.z >= E && C && C.z <= m; ) {
    if (b.x >= d && b.x <= g && b.y >= f && b.y <= p && b !== n && b !== r && Es(o, l, c, h, A, u, b.x, b.y) && re(b.prev, b, b.next) >= 0 || (b = b.prevZ, C.x >= d && C.x <= g && C.y >= f && C.y <= p && C !== n && C !== r && Es(o, l, c, h, A, u, C.x, C.y) && re(C.prev, C, C.next) >= 0)) return !1;
    C = C.nextZ;
  }
  for (; b && b.z >= E; ) {
    if (b.x >= d && b.x <= g && b.y >= f && b.y <= p && b !== n && b !== r && Es(o, l, c, h, A, u, b.x, b.y) && re(b.prev, b, b.next) >= 0) return !1;
    b = b.prevZ;
  }
  for (; C && C.z <= m; ) {
    if (C.x >= d && C.x <= g && C.y >= f && C.y <= p && C !== n && C !== r && Es(o, l, c, h, A, u, C.x, C.y) && re(C.prev, C, C.next) >= 0) return !1;
    C = C.nextZ;
  }
  return !0;
}
function sf(a, e) {
  let t = a;
  do {
    const s = t.prev, n = t.next.next;
    !ss(s, n) && Jc(s, t, t.next, n) && Ss(s, n) && Ss(n, s) && (e.push(s.i, t.i, n.i), Ts(t), Ts(t.next), t = a = n), t = t.next;
  } while (t !== a);
  return Nt(t);
}
function nf(a, e, t, s, n, i) {
  let r = a;
  do {
    let o = r.next.next;
    for (; o !== r.prev; ) {
      if (r.i !== o.i && df(r, o)) {
        let c = Yc(r, o);
        r = Nt(r, r.next), c = Nt(c, c.next), vs(r, e, t, s, n, i, 0), vs(c, e, t, s, n, i, 0);
        return;
      }
      o = o.next;
    }
    r = r.next;
  } while (r !== a);
}
function rf(a, e, t, s) {
  const n = [];
  for (let i = 0, r = e.length; i < r; i++) {
    const o = e[i] * s, c = i < r - 1 ? e[i + 1] * s : a.length, A = Kc(a, o, c, s, !1);
    A === A.next && (A.steiner = !0), n.push(uf(A));
  }
  n.sort(af);
  for (let i = 0; i < n.length; i++)
    t = of(n[i], t);
  return t;
}
function af(a, e) {
  let t = a.x - e.x;
  if (t === 0 && (t = a.y - e.y, t === 0)) {
    const s = (a.next.y - a.y) / (a.next.x - a.x), n = (e.next.y - e.y) / (e.next.x - e.x);
    t = s - n;
  }
  return t;
}
function of(a, e) {
  const t = cf(a, e);
  if (!t)
    return e;
  const s = Yc(t, a);
  return Nt(s, s.next), Nt(t, t.next);
}
function cf(a, e) {
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
    if (s >= t.x && t.x >= c && s !== t.x && Wc(n < A ? s : i, n, c, A, n < A ? i : s, n, t.x, t.y)) {
      const h = Math.abs(n - t.y) / (s - t.x);
      Ss(t, a) && (h < l || h === l && (t.x > r.x || t.x === r.x && Af(r, t))) && (r = t, l = h);
    }
    t = t.next;
  } while (t !== o);
  return r;
}
function Af(a, e) {
  return re(a.prev, a, e.prev) < 0 && re(e.next, a, a.next) < 0;
}
function lf(a, e, t, s) {
  let n = a;
  do
    n.z === 0 && (n.z = Xi(n.x, n.y, e, t, s)), n.prevZ = n.prev, n.nextZ = n.next, n = n.next;
  while (n !== a);
  n.prevZ.nextZ = null, n.prevZ = null, hf(n);
}
function hf(a) {
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
function Xi(a, e, t, s, n) {
  return a = (a - t) * n | 0, e = (e - s) * n | 0, a = (a | a << 8) & 16711935, a = (a | a << 4) & 252645135, a = (a | a << 2) & 858993459, a = (a | a << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, a | e << 1;
}
function uf(a) {
  let e = a, t = a;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== a);
  return t;
}
function Wc(a, e, t, s, n, i, r, o) {
  return (n - r) * (e - o) >= (a - r) * (i - o) && (a - r) * (s - o) >= (t - r) * (e - o) && (t - r) * (i - o) >= (n - r) * (s - o);
}
function Es(a, e, t, s, n, i, r, o) {
  return !(a === r && e === o) && Wc(a, e, t, s, n, i, r, o);
}
function df(a, e) {
  return a.next.i !== e.i && a.prev.i !== e.i && !ff(a, e) && // dones't intersect other edges
  (Ss(a, e) && Ss(e, a) && gf(a, e) && // locally visible
  (re(a.prev, a, e.prev) || re(a, e.prev, e)) || // does not create opposite-facing sectors
  ss(a, e) && re(a.prev, a, a.next) > 0 && re(e.prev, e, e.next) > 0);
}
function re(a, e, t) {
  return (e.y - a.y) * (t.x - e.x) - (e.x - a.x) * (t.y - e.y);
}
function ss(a, e) {
  return a.x === e.x && a.y === e.y;
}
function Jc(a, e, t, s) {
  const n = sn(re(a, e, t)), i = sn(re(a, e, s)), r = sn(re(t, s, a)), o = sn(re(t, s, e));
  return !!(n !== i && r !== o || n === 0 && tn(a, t, e) || i === 0 && tn(a, s, e) || r === 0 && tn(t, a, s) || o === 0 && tn(t, e, s));
}
function tn(a, e, t) {
  return e.x <= Math.max(a.x, t.x) && e.x >= Math.min(a.x, t.x) && e.y <= Math.max(a.y, t.y) && e.y >= Math.min(a.y, t.y);
}
function sn(a) {
  return a > 0 ? 1 : a < 0 ? -1 : 0;
}
function ff(a, e) {
  let t = a;
  do {
    if (t.i !== a.i && t.next.i !== a.i && t.i !== e.i && t.next.i !== e.i && Jc(t, t.next, a, e)) return !0;
    t = t.next;
  } while (t !== a);
  return !1;
}
function Ss(a, e) {
  return re(a.prev, a, a.next) < 0 ? re(a, e, a.next) >= 0 && re(a, a.prev, e) >= 0 : re(a, e, a.prev) < 0 || re(a, a.next, e) < 0;
}
function gf(a, e) {
  let t = a, s = !1;
  const n = (a.x + e.x) / 2, i = (a.y + e.y) / 2;
  do
    t.y > i != t.next.y > i && t.next.y !== t.y && n < (t.next.x - t.x) * (i - t.y) / (t.next.y - t.y) + t.x && (s = !s), t = t.next;
  while (t !== a);
  return s;
}
function Yc(a, e) {
  const t = Zi(a.i, a.x, a.y), s = Zi(e.i, e.x, e.y), n = a.next, i = e.prev;
  return a.next = e, e.prev = a, t.next = n, n.prev = t, s.next = t, t.prev = s, i.next = s, s.prev = i, s;
}
function eo(a, e, t, s) {
  const n = Zi(a, e, t);
  return s ? (n.next = s.next, n.prev = s, s.next.prev = n, s.next = n) : (n.prev = n, n.next = n), n;
}
function Ts(a) {
  a.next.prev = a.prev, a.prev.next = a.next, a.prevZ && (a.prevZ.nextZ = a.nextZ), a.nextZ && (a.nextZ.prevZ = a.prevZ);
}
function Zi(a, e, t) {
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
function pf(a, e, t, s) {
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
    const o = $d(s, n, 3);
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
class pr extends xe {
  constructor(e = new gr([new x(0, 0.5), new x(-0.5, -0.5), new x(0.5, -0.5)]), t = 12) {
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
      for (let p = 0, E = f.length; p < E; p++) {
        const m = f[p];
        St.isClockWise(m) === !0 && (f[p] = m.reverse());
      }
      const g = St.triangulateShape(d, f);
      for (let p = 0, E = f.length; p < E; p++) {
        const m = f[p];
        d = d.concat(m);
      }
      for (let p = 0, E = d.length; p < E; p++) {
        const m = d[p];
        n.push(m.x, m.y, m.z), i.push(0, 0, 1), r.push(m.x, m.y);
      }
      for (let p = 0, E = g.length; p < E; p++) {
        const m = g[p], b = m[0] + h, C = m[1] + h, I = m[2] + h;
        s.push(b, C, I), c += 3;
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
    return mf(t, e);
  }
  static fromJSON(e, t) {
    const s = [];
    for (let n = 0, i = e.shapes.length; n < i; n++) {
      const r = t[e.shapes[n]];
      s.push(r);
    }
    return new pr(s, e.curveSegments);
  }
}
function mf(a, e) {
  if (e.shapes = [], Array.isArray(a))
    for (let t = 0, s = a.length; t < s; t++) {
      const n = a[t];
      e.shapes.push(n.uuid);
    }
  else
    e.shapes.push(a.uuid);
  return e;
}
class bf extends xe {
  constructor(e = new gr([new H(0.5, 0.5), new H(-0.5, 0.5), new H(-0.5, -0.5), new H(0.5, -0.5)]), t = {}) {
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
      const E = t.extrudePath, m = t.UVGenerator !== void 0 ? t.UVGenerator : Ef;
      let b, C = !1, I, w, B, y;
      E && (b = E.getSpacedPoints(l), C = !0, u = !1, I = E.computeFrenetFrames(l, !1), w = new x(), B = new x(), y = new x()), u || (p = 0, d = 0, f = 0, g = 0);
      const _ = o.extractPoints(A);
      let v = _.shape;
      const S = _.holes;
      if (!St.isClockWise(v)) {
        v = v.reverse();
        for (let Q = 0, D = S.length; Q < D; Q++) {
          const k = S[Q];
          St.isClockWise(k) && (S[Q] = k.reverse());
        }
      }
      const U = St.triangulateShape(v, S), F = v;
      for (let Q = 0, D = S.length; Q < D; Q++) {
        const k = S[Q];
        v = v.concat(k);
      }
      function N(Q, D, k) {
        return D || console.error("THREE.ExtrudeGeometry: vec does not exist"), Q.clone().addScaledVector(D, k);
      }
      const P = v.length, T = U.length;
      function q(Q, D, k) {
        let O, R, L;
        const j = Q.x - D.x, Y = Q.y - D.y, Ae = k.x - Q.x, ie = k.y - Q.y, We = j * j + Y * Y, ae = j * ie - Y * Ae;
        if (Math.abs(ae) > Number.EPSILON) {
          const ze = Math.sqrt(We), xr = Math.sqrt(Ae * Ae + ie * ie), Br = D.x - Y / ze, _r = D.y + j / ze, tA = k.x - ie / xr, sA = k.y + Ae / xr, wr = ((tA - Br) * ie - (sA - _r) * Ae) / (j * ie - Y * Ae);
          O = Br + j * wr - Q.x, R = _r + Y * wr - Q.y;
          const vr = O * O + R * R;
          if (vr <= 2)
            return new H(O, R);
          L = Math.sqrt(vr / 2);
        } else {
          let ze = !1;
          j > Number.EPSILON ? Ae > Number.EPSILON && (ze = !0) : j < -Number.EPSILON ? Ae < -Number.EPSILON && (ze = !0) : Math.sign(Y) === Math.sign(ie) && (ze = !0), ze ? (O = -Y, R = j, L = Math.sqrt(We)) : (O = j, R = Y, L = Math.sqrt(We / 2));
        }
        return new H(O / L, R / L);
      }
      const K = [];
      for (let Q = 0, D = F.length, k = D - 1, O = Q + 1; Q < D; Q++, k++, O++)
        k === D && (k = 0), O === D && (O = 0), K[Q] = q(F[Q], F[k], F[O]);
      const V = [];
      let te, $ = K.concat();
      for (let Q = 0, D = S.length; Q < D; Q++) {
        const k = S[Q];
        te = [];
        for (let O = 0, R = k.length, L = R - 1, j = O + 1; O < R; O++, L++, j++)
          L === R && (L = 0), j === R && (j = 0), te[O] = q(k[O], k[L], k[j]);
        V.push(te), $ = $.concat(te);
      }
      for (let Q = 0; Q < p; Q++) {
        const D = Q / p, k = d * Math.cos(D * Math.PI / 2), O = f * Math.sin(D * Math.PI / 2) + g;
        for (let R = 0, L = F.length; R < L; R++) {
          const j = N(F[R], K[R], O);
          _e(j.x, j.y, -k);
        }
        for (let R = 0, L = S.length; R < L; R++) {
          const j = S[R];
          te = V[R];
          for (let Y = 0, Ae = j.length; Y < Ae; Y++) {
            const ie = N(j[Y], te[Y], O);
            _e(ie.x, ie.y, -k);
          }
        }
      }
      const se = f + g;
      for (let Q = 0; Q < P; Q++) {
        const D = u ? N(v[Q], $[Q], se) : v[Q];
        C ? (B.copy(I.normals[0]).multiplyScalar(D.x), w.copy(I.binormals[0]).multiplyScalar(D.y), y.copy(b[0]).add(B).add(w), _e(y.x, y.y, y.z)) : _e(D.x, D.y, 0);
      }
      for (let Q = 1; Q <= l; Q++)
        for (let D = 0; D < P; D++) {
          const k = u ? N(v[D], $[D], se) : v[D];
          C ? (B.copy(I.normals[Q]).multiplyScalar(k.x), w.copy(I.binormals[Q]).multiplyScalar(k.y), y.copy(b[Q]).add(B).add(w), _e(y.x, y.y, y.z)) : _e(k.x, k.y, h / l * Q);
        }
      for (let Q = p - 1; Q >= 0; Q--) {
        const D = Q / p, k = d * Math.cos(D * Math.PI / 2), O = f * Math.sin(D * Math.PI / 2) + g;
        for (let R = 0, L = F.length; R < L; R++) {
          const j = N(F[R], K[R], O);
          _e(j.x, j.y, h + k);
        }
        for (let R = 0, L = S.length; R < L; R++) {
          const j = S[R];
          te = V[R];
          for (let Y = 0, Ae = j.length; Y < Ae; Y++) {
            const ie = N(j[Y], te[Y], O);
            C ? _e(ie.x, ie.y + b[l - 1].y, b[l - 1].x + k) : _e(ie.x, ie.y, h + k);
          }
        }
      }
      Be(), Qt();
      function Be() {
        const Q = n.length / 3;
        if (u) {
          let D = 0, k = P * D;
          for (let O = 0; O < T; O++) {
            const R = U[O];
            Ke(R[2] + k, R[1] + k, R[0] + k);
          }
          D = l + p * 2, k = P * D;
          for (let O = 0; O < T; O++) {
            const R = U[O];
            Ke(R[0] + k, R[1] + k, R[2] + k);
          }
        } else {
          for (let D = 0; D < T; D++) {
            const k = U[D];
            Ke(k[2], k[1], k[0]);
          }
          for (let D = 0; D < T; D++) {
            const k = U[D];
            Ke(k[0] + P * l, k[1] + P * l, k[2] + P * l);
          }
        }
        s.addGroup(Q, n.length / 3 - Q, 0);
      }
      function Qt() {
        const Q = n.length / 3;
        let D = 0;
        mt(F, D), D += F.length;
        for (let k = 0, O = S.length; k < O; k++) {
          const R = S[k];
          mt(R, D), D += R.length;
        }
        s.addGroup(Q, n.length / 3 - Q, 1);
      }
      function mt(Q, D) {
        let k = Q.length;
        for (; --k >= 0; ) {
          const O = k;
          let R = k - 1;
          R < 0 && (R = Q.length - 1);
          for (let L = 0, j = l + p * 2; L < j; L++) {
            const Y = P * L, Ae = P * (L + 1), ie = D + O + Y, We = D + R + Y, ae = D + R + Ae, ze = D + O + Ae;
            Rt(ie, We, ae, ze);
          }
        }
      }
      function _e(Q, D, k) {
        c.push(Q), c.push(D), c.push(k);
      }
      function Ke(Q, D, k) {
        ce(Q), ce(D), ce(k);
        const O = n.length / 3, R = m.generateTopUV(s, n, O - 3, O - 2, O - 1);
        pe(R[0]), pe(R[1]), pe(R[2]);
      }
      function Rt(Q, D, k, O) {
        ce(Q), ce(D), ce(O), ce(D), ce(k), ce(O);
        const R = n.length / 3, L = m.generateSideWallUV(s, n, R - 6, R - 3, R - 2, R - 1);
        pe(L[0]), pe(L[1]), pe(L[3]), pe(L[1]), pe(L[2]), pe(L[3]);
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
    return Cf(t, s, e);
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
const Ef = {
  generateTopUV: function(a, e, t, s, n) {
    const i = e[t * 3], r = e[t * 3 + 1], o = e[s * 3], c = e[s * 3 + 1], A = e[n * 3], l = e[n * 3 + 1];
    return [new H(i, r), new H(o, c), new H(A, l)];
  },
  generateSideWallUV: function(a, e, t, s, n, i) {
    const r = e[t * 3], o = e[t * 3 + 1], c = e[t * 3 + 2], A = e[s * 3], l = e[s * 3 + 1], h = e[s * 3 + 2], u = e[n * 3], d = e[n * 3 + 1], f = e[n * 3 + 2], g = e[i * 3], p = e[i * 3 + 1], E = e[i * 3 + 2];
    return Math.abs(o - l) < Math.abs(r - A) ? [new H(r, 1 - c), new H(A, 1 - h), new H(u, 1 - f), new H(g, 1 - E)] : [new H(o, 1 - c), new H(l, 1 - h), new H(d, 1 - f), new H(p, 1 - E)];
  }
};
function Cf(a, e, t) {
  if (t.shapes = [], Array.isArray(a))
    for (let s = 0, n = a.length; s < n; s++) {
      const i = a[s];
      t.shapes.push(i.uuid);
    }
  else
    t.shapes.push(a.uuid);
  return t.options = Object.assign({}, e), e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
}
function Xc(a, e = 0) {
  const t = new gr(), s = a.coordinates[0], n = [];
  s.forEach((i) => {
    n.push(new x(i[0], i[1], (i[2] ?? 0) + (e ?? 0)));
  }), t.setFromPoints(n);
  for (let i = 1; i < a.coordinates.length; i++) {
    const r = a.coordinates[i], o = new Yi(), c = [];
    r.forEach((A) => {
      c.push(new x(A[0], A[1], (A[2] ?? 0) + (e ?? 0)));
    }), o.setFromPoints(c), t.holes.push(o);
  }
  return t;
}
function If(a, e, t = 0) {
  const s = Xc(a, t);
  return new bf(s, {
    depth: e,
    bevelEnabled: !1
  });
}
function yf(a) {
  const e = Xc(a);
  return new pr(e);
}
function Zc(a) {
  const e = [];
  return a.forEach((s) => {
    const n = yf(s.geometry);
    e.push(n);
  }), Ds(e);
}
function xf(a, e) {
  const { geometries: t } = a, s = Zc(t.polygonFeatures), n = new ye({
    color: e.color,
    opacity: e.opacity,
    transparent: e.opacity && e.opacity < 1
  });
  return new De(s, n);
}
const Bf = (
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
), _f = (
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
), wf = (
  /* glsl */
  `
    varying mat4 csm_internal_vModelViewMatrix;
`
), vf = (
  /* glsl */
  `
    csm_internal_vModelViewMatrix = modelViewMatrix;
`
), Sf = (
  /* glsl */
  `
    varying mat4 csm_internal_vModelViewMatrix;
`
), Tf = (
  /* glsl */
  `
    
`
), G = {
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
}, Qf = {
  [`${G.position}`]: "*",
  [`${G.positionRaw}`]: "*",
  [`${G.normal}`]: "*",
  [`${G.depthAlpha}`]: "*",
  [`${G.pointSize}`]: ["PointsMaterial"],
  [`${G.diffuse}`]: "*",
  [`${G.fragColor}`]: "*",
  [`${G.fragNormal}`]: "*",
  [`${G.unlitFac}`]: "*",
  [`${G.emissive}`]: ["MeshStandardMaterial", "MeshPhysicalMaterial"],
  [`${G.roughness}`]: ["MeshStandardMaterial", "MeshPhysicalMaterial"],
  [`${G.metalness}`]: ["MeshStandardMaterial", "MeshPhysicalMaterial"],
  [`${G.iridescence}`]: [
    "MeshStandardMaterial",
    "MeshPhysicalMaterial"
  ],
  [`${G.ao}`]: [
    "MeshStandardMaterial",
    "MeshPhysicalMaterial",
    "MeshBasicMaterial",
    "MeshLambertMaterial",
    "MeshPhongMaterial",
    "MeshToonMaterial"
  ],
  [`${G.bump}`]: [
    "MeshLambertMaterial",
    "MeshMatcapMaterial",
    "MeshNormalMaterial",
    "MeshPhongMaterial",
    "MeshPhysicalMaterial",
    "MeshStandardMaterial",
    "MeshToonMaterial",
    "ShadowMaterial"
  ],
  [`${G.clearcoat}`]: ["MeshPhysicalMaterial"],
  [`${G.clearcoatRoughness}`]: ["MeshPhysicalMaterial"],
  [`${G.clearcoatNormal}`]: ["MeshPhysicalMaterial"],
  [`${G.transmission}`]: ["MeshPhysicalMaterial"],
  [`${G.thickness}`]: ["MeshPhysicalMaterial"]
}, Rf = {
  // VERT
  "*": {
    "#include <lights_physical_fragment>": Z.ShaderChunk.lights_physical_fragment,
    "#include <transmission_fragment>": Z.ShaderChunk.transmission_fragment
  },
  [`${G.normal}`]: {
    "#include <beginnormal_vertex>": `
    vec3 objectNormal = ${G.normal};
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `
  },
  [`${G.position}`]: {
    "#include <begin_vertex>": `
    vec3 transformed = ${G.position};
  `
  },
  [`${G.positionRaw}`]: {
    "#include <project_vertex>": `
    #include <project_vertex>
    gl_Position = ${G.positionRaw};
  `
  },
  [`${G.pointSize}`]: {
    "gl_PointSize = size;": `
    gl_PointSize = ${G.pointSize};
    `
  },
  // FRAG
  [`${G.diffuse}`]: {
    "#include <color_fragment>": `
    #include <color_fragment>
    diffuseColor = ${G.diffuse};
  `
  },
  [`${G.fragColor}`]: {
    "#include <opaque_fragment>": `
    #include <opaque_fragment>
    gl_FragColor = mix(gl_FragColor, ${G.fragColor}, ${G.unlitFac});
  `
  },
  [`${G.emissive}`]: {
    "vec3 totalEmissiveRadiance = emissive;": `
    vec3 totalEmissiveRadiance = ${G.emissive};
    `
  },
  [`${G.roughness}`]: {
    "#include <roughnessmap_fragment>": `
    #include <roughnessmap_fragment>
    roughnessFactor = ${G.roughness};
    `
  },
  [`${G.metalness}`]: {
    "#include <metalnessmap_fragment>": `
    #include <metalnessmap_fragment>
    metalnessFactor = ${G.metalness};
    `
  },
  [`${G.ao}`]: {
    "#include <aomap_fragment>": `
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - ${G.ao};
    `
  },
  [`${G.bump}`]: {
    "#include <normal_fragment_maps>": `
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = ${G.bump} - (dot(${G.bump}, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `
  },
  [`${G.fragNormal}`]: {
    "#include <normal_fragment_maps>": `
      #include <normal_fragment_maps>
      normal = ${G.fragNormal};
    `
  },
  [`${G.depthAlpha}`]: {
    "gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );": `
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * 1.0 - ${G.depthAlpha} );
    `,
    "gl_FragColor = packDepthToRGBA( fragCoordZ );": `
      if(${G.depthAlpha} < 1.0) discard;
      gl_FragColor = packDepthToRGBA( dist );
    `,
    "gl_FragColor = packDepthToRGBA( dist );": `
      if(${G.depthAlpha} < 1.0) discard;
      gl_FragColor = packDepthToRGBA( dist );
    `
  },
  [`${G.clearcoat}`]: {
    "material.clearcoat = clearcoat;": `material.clearcoat = ${G.clearcoat};`
  },
  [`${G.clearcoatRoughness}`]: {
    "material.clearcoatRoughness = clearcoatRoughness;": `material.clearcoatRoughness = ${G.clearcoatRoughness};`
  },
  [`${G.clearcoatNormal}`]: {
    "#include <clearcoat_normal_fragment_begin>": `
      vec3 csm_coat_internal_orthogonal = csm_ClearcoatNormal - (dot(csm_ClearcoatNormal, nonPerturbedNormal) * nonPerturbedNormal);
      vec3 csm_coat_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_coat_internal_orthogonal;
      vec3 clearcoatNormal = normalize(nonPerturbedNormal - csm_coat_internal_projectedbump);
    `
  },
  [`${G.transmission}`]: {
    "material.transmission = transmission;": `
      material.transmission = ${G.transmission};
    `
  },
  [`${G.thickness}`]: {
    "material.thickness = thickness;": `
      material.thickness = ${G.thickness};
    `
  },
  [`${G.iridescence}`]: {
    "material.iridescence = iridescence;": `
      material.iridescence = ${G.iridescence};
    `
  }
}, Mf = {
  clearcoat: [
    G.clearcoat,
    G.clearcoatNormal,
    G.clearcoatRoughness
  ],
  transmission: [G.transmission],
  iridescence: [G.iridescence]
};
function Df(a) {
  let e = 0;
  for (let s = 0; s < a.length; s++)
    e = a.charCodeAt(s) + (e << 6) + (e << 16) - e;
  const t = e >>> 0;
  return String(t);
}
function Lf(a) {
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
    if (Lf(e)) {
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
    s && (c.uniforms = s), t && (c.vertexShader = t), e && (c.fragmentShader = e), Object.entries(Mf).forEach(([u, d]) => {
      for (const f in d) {
        const g = d[f];
        (o && o.includes(g) || r && r.includes(g)) && (c[u] || (c[u] = 1));
      }
    });
    const A = c.__csm.prevOnBeforeCompile, l = (u, d, f) => {
      let g, p = "";
      if (d) {
        const E = d.search(/void\s+main\s*\(\s*\)\s*{/);
        if (E !== -1) {
          p = d.slice(0, E);
          let m = 0, b = -1;
          for (let C = E; C < d.length; C++)
            if (d[C] === "{" && m++, d[C] === "}" && (m--, m === 0)) {
              b = C;
              break;
            }
          if (b !== -1) {
            const C = d.slice(E, b + 1);
            g = C.slice(C.indexOf("{") + 1, -1);
          }
        } else
          p = d;
      }
      if (f && d && d.includes(G.fragColor) && g && (g = `csm_UnlitFac = 1.0;
` + g), u.includes("//~CSM_DEFAULTS")) {
        u = u.replace(
          "void main() {",
          `
          // THREE-CustomShaderMaterial by Faraz Shaikh: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
  
          ${p}
          
          void main() {
          `
        );
        const E = u.lastIndexOf("//~CSM_MAIN_END");
        if (E !== -1) {
          const m = `
            ${g ? `${g}` : ""}
            //~CSM_MAIN_END
          `;
          u = u.slice(0, E) + m + u.slice(E);
        }
      } else {
        const E = /void\s*main\s*\(\s*\)\s*{/gm;
        u = u.replace(
          E,
          `
          // THREE-CustomShaderMaterial by Faraz Shaikh: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
  
          //~CSM_DEFAULTS
          ${f ? Sf : wf}
          ${Bf}
  
          ${p}
          
          void main() {
            {
              ${_f}
            }
            ${f ? Tf : vf}

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
      const E = (m) => {
        for (const b in m) {
          const C = b === "*" || r && r.includes(b);
          if (b === "*" || o && o.includes(b) || C) {
            const I = Qf[b];
            if (I && I !== "*" && (Array.isArray(I) ? !I.includes(g) : I !== g)) {
              console.error(
                `CustomShaderMaterial: ${b} is not available in ${g}. Shader cannot compile.`
              );
              return;
            }
            const w = m[b];
            for (const B in w) {
              const y = w[B];
              if (typeof y == "object") {
                const _ = y.type, v = y.value;
                _ === "fs" ? u.fragmentShader = u.fragmentShader.replace(
                  B,
                  v
                ) : _ === "vs" && (u.vertexShader = u.vertexShader.replace(
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
      E(Rf), E(f), u.vertexShader = l(
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
    c.customProgramCacheKey = () => ((n == null ? void 0 : n()) || Df((r || "") + (o || ""))) + (h == null ? void 0 : h.call(c)), c.needsUpdate = !0;
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
class Ff {
  static getMeshMaterial(e) {
    switch (e) {
      case "basic":
        return ye;
      case "standard":
        return rs;
      case "lambert":
        return KA;
      case "phong":
        return qA;
      case "depth":
        return VA;
      case "distance":
        return jA;
      case "toon":
        return zA;
      case "physical":
        return ue;
      case "normal":
        return HA;
      case "matcap":
        return OA;
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
function kf(a) {
  const { colors: e, resolution: t = 256 } = a, s = new Uint8Array(t * 4);
  for (let i = 0; i < t; i++) {
    const r = i / (t - 1) * (e.length - 1), o = Math.floor(r), c = r - o, A = e[o], l = e[Math.min(o + 1, e.length - 1)], h = new X().lerpColors(A, l, c);
    s[i * 4] = h.r * 255, s[i * 4 + 1] = h.g * 255, s[i * 4 + 2] = h.b * 255, s[i * 4 + 3] = 255;
  }
  const n = new ut(s, t, 1, Ie, ve, _t, fe, fe, ne, ne);
  return n.needsUpdate = !0, n;
}
function Pf(a, e, t) {
  const s = [];
  return a.forEach((i) => {
    const r = i.__source.object, o = ts(e, r), c = ts(t, r), A = If(i.geometry, o, c);
    s.push(A);
  }), Zd(s);
}
class Gf extends De {
  constructor(e, t = {}) {
    var n, i, r, o, c, A, l, h, u, d, f, g, p, E, m, b, C, I, w, B, y, _, v, S, M, U, F, N, P, T, q, K, V, te, $, se, Be, Qt, mt, _e, Ke, Rt;
    super(e);
    const s = Ff.getMeshMaterial(t == null ? void 0 : t.baseMaterial);
    if (t != null && t.gradient) {
      let ce = [];
      if (Array.isArray(t == null ? void 0 : t.gradientColor))
        ce = t.gradientColor.map((ae) => new X(ae));
      else {
        const ae = ((i = (n = t == null ? void 0 : t.material) == null ? void 0 : n.wall) == null ? void 0 : i.color) || (t == null ? void 0 : t.color), ze = (t == null ? void 0 : t.gradientColor) || ((o = (r = t == null ? void 0 : t.material) == null ? void 0 : r.top) == null ? void 0 : o.color) || (t == null ? void 0 : t.color);
        ce.push(new X(ae)), ce.push(new X(ze));
      }
      const Q = kf({ colors: ce }), D = `
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
      `, O = (t == null ? void 0 : t.gradientHeightMax) ?? 100, R = (t == null ? void 0 : t.gradientHeightMin) ?? 0, L = (t == null ? void 0 : t.lightBorderWidth) ?? 0.01, j = (t == null ? void 0 : t.lightCircleTime) ?? 10, Y = (t == null ? void 0 : t.lightColor) ?? 16777215, Ae = (t == null ? void 0 : t.lightMixRate) ?? 0, ie = new nn({
        baseMaterial: s,
        vertexShader: D,
        fragmentShader: k,
        color: ((A = (c = t == null ? void 0 : t.material) == null ? void 0 : c.top) == null ? void 0 : A.color) || (t == null ? void 0 : t.color),
        opacity: ((h = (l = t == null ? void 0 : t.material) == null ? void 0 : l.top) == null ? void 0 : h.opacity) ?? (t == null ? void 0 : t.opacity) ?? 1,
        map: ((d = (u = t == null ? void 0 : t.material) == null ? void 0 : u.top) == null ? void 0 : d.texture) || null,
        transparent: ((g = (f = t == null ? void 0 : t.material) == null ? void 0 : f.top) == null ? void 0 : g.transparent) || t.opacity && t.opacity < 1,
        uniforms: {
          uTime: { value: 0 },
          uLightCircleTime: { value: j },
          uLightBorderWidth: { value: L },
          uLightColor: { value: new X(Y) },
          uLightMixRate: { value: Ae },
          uGradientHeightMax: { value: O },
          uGradientHeightMin: { value: R },
          uGradientSampler: { value: Q }
        }
      }), We = new nn({
        baseMaterial: s,
        vertexShader: D,
        fragmentShader: k,
        color: ((E = (p = t == null ? void 0 : t.material) == null ? void 0 : p.wall) == null ? void 0 : E.color) || (t == null ? void 0 : t.color),
        opacity: ((b = (m = t == null ? void 0 : t.material) == null ? void 0 : m.wall) == null ? void 0 : b.opacity) ?? (t == null ? void 0 : t.opacity) ?? 1,
        map: ((I = (C = t == null ? void 0 : t.material) == null ? void 0 : C.wall) == null ? void 0 : I.texture) || null,
        transparent: ((B = (w = t == null ? void 0 : t.material) == null ? void 0 : w.wall) == null ? void 0 : B.transparent) || t.opacity && t.opacity < 1,
        uniforms: {
          uTime: { value: 0 },
          uLightCircleTime: { value: j },
          uLightBorderWidth: { value: L },
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
        color: ((_ = (y = t == null ? void 0 : t.material) == null ? void 0 : y.top) == null ? void 0 : _.color) || (t == null ? void 0 : t.color),
        opacity: ((S = (v = t == null ? void 0 : t.material) == null ? void 0 : v.top) == null ? void 0 : S.opacity) ?? (t == null ? void 0 : t.opacity) ?? 1,
        map: ((U = (M = t == null ? void 0 : t.material) == null ? void 0 : M.top) == null ? void 0 : U.texture) || null,
        transparent: ((N = (F = t == null ? void 0 : t.material) == null ? void 0 : F.top) == null ? void 0 : N.transparent) || t.opacity && t.opacity < 1
      }), pe = new s({
        color: ((T = (P = t == null ? void 0 : t.material) == null ? void 0 : P.wall) == null ? void 0 : T.color) || (t == null ? void 0 : t.color),
        opacity: ((K = (q = t == null ? void 0 : t.material) == null ? void 0 : q.wall) == null ? void 0 : K.opacity) ?? (t == null ? void 0 : t.opacity) ?? 1,
        map: ((te = (V = t == null ? void 0 : t.material) == null ? void 0 : V.wall) == null ? void 0 : te.texture) || null,
        transparent: ((se = ($ = t == null ? void 0 : t.material) == null ? void 0 : $.wall) == null ? void 0 : se.transparent) || t.opacity && t.opacity < 1
      });
      this.material = [ce, pe];
    }
    if (t != null && t.enableEdge) {
      const ce = ((Qt = (Be = t == null ? void 0 : t.material) == null ? void 0 : Be.edge) == null ? void 0 : Qt.color) ?? (t == null ? void 0 : t.color), pe = ((_e = (mt = t == null ? void 0 : t.material) == null ? void 0 : mt.edge) == null ? void 0 : _e.opacity) ?? (t == null ? void 0 : t.opacity) ?? 1, Q = ((Rt = (Ke = t == null ? void 0 : t.material) == null ? void 0 : Ke.edge) == null ? void 0 : Rt.width) ?? 1, D = new Mo(e);
      let O = new qc().fromEdgesGeometry(D), R = new Vc({
        color: ce,
        linewidth: Q,
        opacity: pe,
        transparent: !0,
        depthWrite: !0,
        depthTest: !0
      });
      R.resolution.set(window.innerWidth, window.innerHeight);
      const L = new Yd(O, R);
      L.name = this.name + "-edges", this.add(L);
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
function Uf(a, e) {
  const { geometries: t } = a, { getElevation: s, getElevationBase: n } = e, i = Pf(t.polygonFeatures, s, n);
  return new Gf(i, e);
}
class pt extends Z.BufferGeometry {
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
pt.prototype.setMatrixWorld = function(a) {
  this.matrixWorld = a;
};
pt.prototype.setGeometry = function(a, e) {
  this._geometry = a, this.setPoints(a.getAttribute("position").array, e);
};
pt.prototype.setPoints = function(a, e) {
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
function Nf(a, e) {
  var t = new Z.Matrix4(), s = new Z.Ray(), n = new Z.Sphere(), i = new Z.Vector3(), r = this.geometry;
  if (r.boundingSphere || r.computeBoundingSphere(), n.copy(r.boundingSphere), n.applyMatrix4(this.matrixWorld), a.ray.intersectSphere(n, i) !== !1) {
    t.copy(this.matrixWorld).invert(), s.copy(a.ray).applyMatrix4(t);
    var o = new Z.Vector3(), c = new Z.Vector3(), A = new Z.Vector3(), l = this instanceof Z.LineSegments ? 2 : 1, h = r.index, u = r.attributes;
    if (h !== null)
      for (var d = h.array, f = u.position.array, g = u.width.array, p = 0, E = d.length - 1; p < E; p += l) {
        var m = d[p], b = d[p + 1];
        o.fromArray(f, m * 3), c.fromArray(f, b * 3);
        var C = g[Math.floor(p / 3)] !== void 0 ? g[Math.floor(p / 3)] : 1, I = a.params.Line.threshold + this.material.lineWidth * C / 2, w = I * I, B = s.distanceSqToSegment(o, c, i, A);
        if (!(B > w)) {
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
          }), p = E);
        }
      }
  }
}
pt.prototype.raycast = Nf;
pt.prototype.compareV3 = function(a, e) {
  var t = a * 6, s = e * 6;
  return this.positions[t] === this.positions[s] && this.positions[t + 1] === this.positions[s + 1] && this.positions[t + 2] === this.positions[s + 2];
};
pt.prototype.copyV3 = function(a) {
  var e = a * 6;
  return [this.positions[e], this.positions[e + 1], this.positions[e + 2]];
};
pt.prototype.process = function() {
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
function Si(a, e, t, s, n) {
  var i;
  if (a = a.subarray || a.slice ? a : a.buffer, t = t.subarray || t.slice ? t : t.buffer, a = e ? a.subarray ? a.subarray(e, n && e + n) : a.slice(e, n && e + n) : a, t.set)
    t.set(a, s);
  else
    for (i = 0; i < a.length; i++)
      t[i + s] = a[i];
  return t;
}
pt.prototype.advance = function(a) {
  var e = this._attributes.position.array, t = this._attributes.previous.array, s = this._attributes.next.array, n = e.length;
  Si(e, 0, t, 0, n), Si(e, 6, e, 0, n - 6), e[n - 6] = a.x, e[n - 5] = a.y, e[n - 4] = a.z, e[n - 3] = a.x, e[n - 2] = a.y, e[n - 1] = a.z, Si(e, 6, s, 0, n - 6), s[n - 6] = a.x, s[n - 5] = a.y, s[n - 4] = a.z, s[n - 3] = a.x, s[n - 2] = a.y, s[n - 1] = a.z, this._attributes.position.needsUpdate = !0, this._attributes.previous.needsUpdate = !0, this._attributes.next.needsUpdate = !0;
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
function Of(a, e) {
  const t = new pt(), s = a.coordinates, n = [];
  return s.forEach((i) => {
    const r = new x(i[0], i[1], i.length > 2 ? i[2] : 0);
    n.push(r.x, r.y, r.z);
  }), t.setPoints(n, e ? (i) => e : void 0), t;
}
function Hf(a, e) {
  const t = [];
  return a.forEach((n) => {
    const i = n.__source.object, r = ts(e, i), o = Of(n.geometry, r);
    t.push(o);
  }), Ds(t);
}
class zf extends De {
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
        const c = new ft();
        e.getViewport(c);
        const A = c.z, l = c.w;
        o.resolution.value.set(A, l);
      }
    }
  }
}
function jf(a, e) {
  const { geometries: t } = a, { getLineWidth: s, ...n } = e, i = t.lineFeatures.length > 0 ? t.lineFeatures : t.polygonOutlineFeatures.length > 0 ? t.polygonOutlineFeatures : [], r = Hf(i, s);
  return new zf(r, n);
}
class Vf extends De {
  constructor(e, t = {}) {
    super(e), this.isWater = !0;
    const s = this, n = t.textureWidth !== void 0 ? t.textureWidth : 512, i = t.textureHeight !== void 0 ? t.textureHeight : 512, r = t.clipBias !== void 0 ? t.clipBias : 0, o = t.alpha !== void 0 ? t.alpha : 1, c = t.time !== void 0 ? t.time : 0, A = t.waterNormals !== void 0 ? t.waterNormals : null, l = t.sunDirection !== void 0 ? t.sunDirection : new x(0.70707, 0.70707, 0), h = new X(t.sunColor !== void 0 ? t.sunColor : 16777215), u = new X(t.waterColor !== void 0 ? t.waterColor : 8355711), d = t.eye !== void 0 ? t.eye : new x(0, 0, 0), f = t.distortionScale !== void 0 ? t.distortionScale : 20, g = t.side !== void 0 ? t.side : ir, p = t.fog !== void 0 ? t.fog : !1, E = t.up !== void 0 ? t.up : new x(0, 1, 0), m = new Qo(), b = new x(), C = new x(), I = new x(), w = new z(), B = new x(), y = new ft(), _ = new x(), v = new x(), S = new ft(), M = new z(), U = new Sn(), F = new Qi(n, i), N = {
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
    }, P = new Me({
      name: N.name,
      uniforms: fn.clone(N.uniforms),
      vertexShader: N.vertexShader,
      fragmentShader: N.fragmentShader,
      lights: !0,
      side: g,
      fog: p
    });
    P.uniforms.mirrorSampler.value = F.texture, P.uniforms.textureMatrix.value = M, P.uniforms.alpha.value = o, P.uniforms.time.value = c, P.uniforms.normalSampler.value = A, P.uniforms.sunColor.value = h, P.uniforms.waterColor.value = u, P.uniforms.sunDirection.value = l, P.uniforms.distortionScale.value = f, P.uniforms.eye.value = d, s.material = P, s.onBeforeRender = function(T, q, K) {
      if (C.setFromMatrixPosition(s.matrixWorld), I.setFromMatrixPosition(K.matrixWorld), w.extractRotation(s.matrixWorld), b.set(E.x, E.z, E.y), b.applyMatrix4(w), _.subVectors(C, I), _.dot(b) > 0) return;
      _.reflect(b).negate(), _.add(C), w.extractRotation(K.matrixWorld), B.set(-b.x, -b.y, -b.z), B.applyMatrix4(w), B.add(I), v.subVectors(C, B), v.reflect(b).negate(), v.add(C), U.position.copy(_), U.up.set(E.x, E.y, E.z), U.up.applyMatrix4(w), U.up.reflect(b), U.lookAt(v), U.far = K.far, U.updateMatrixWorld(), U.projectionMatrix.copy(K.projectionMatrix), M.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), M.multiply(U.projectionMatrix), M.multiply(U.matrixWorldInverse), m.setFromNormalAndCoplanarPoint(b, C), m.applyMatrix4(U.matrixWorldInverse), y.set(m.normal.x, m.normal.y, m.normal.z, m.constant);
      const V = U.projectionMatrix;
      S.x = (Math.sign(y.x) + V.elements[8]) / V.elements[0], S.y = (Math.sign(y.y) + V.elements[9]) / V.elements[5], S.z = -1, S.w = (1 + V.elements[10]) / V.elements[14], y.multiplyScalar(2 / y.dot(S)), V.elements[2] = y.x, V.elements[6] = y.y, V.elements[10] = y.z + 1 - r, V.elements[14] = y.w, d.setFromMatrixPosition(K.matrixWorld);
      const te = T.getRenderTarget(), $ = T.xr.enabled, se = T.shadowMap.autoUpdate;
      s.visible = !1, T.xr.enabled = !1, T.shadowMap.autoUpdate = !1, T.setRenderTarget(F), T.state.buffers.depth.setMask(!0), T.autoClear === !1 && T.clear(), T.render(q, U), s.visible = !0, T.xr.enabled = $, T.shadowMap.autoUpdate = se, T.setRenderTarget(te);
      const Be = K.viewport;
      Be !== void 0 && T.state.viewport(Be);
    };
  }
}
function qf(a, e) {
  const { geometries: t } = a, s = Zc(t.polygonFeatures);
  return e.flowDirection = new H(1, 1), e.up = new x(0, 1, 0), new Vf(s, e);
}
function Kf(a, e) {
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
function Wf(a, e) {
  const t = [];
  return a.forEach((n) => {
    const i = n.__source.object, r = ts(e, i), o = Kf(n.geometry, r);
    t.push(o);
  }), Ds(t);
}
function mr(a, { name: e, vertexShader: t, fragmentShader: s }) {
  const n = new X(a.color !== void 0 ? a.color : 16776960), i = a.opacity !== void 0 ? a.opacity : 0.8, r = a.num !== void 0 ? a.num : 5, o = a.speed !== void 0 ? a.speed : 1, c = {
    name: e,
    side: gt,
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
function Jf(a) {
  return new X(a.color !== void 0 ? a.color : 16776960), mr(a, {
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
function Yf(a) {
  return mr(a, {
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
  return mr(a, {
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
class Xf extends De {
  constructor(e, t = {}) {
    super(e);
    let s;
    t.material instanceof dt ? s = t.material : t.material === "ripple" ? s = Jf(t) : t.material === "wave" ? s = Yf(t) : (t.material, s = ro(t)), this.material = s, this._startTime = 0;
  }
  updateSceneTime(e, t, s) {
    this._startTime === 0 && (this._startTime = e);
    const n = e - this._startTime;
    this.material instanceof Me && (this.material.uniforms.time.value = n / 1e3);
  }
}
function Zf(a, e) {
  const { geometries: t } = a, { getElevation: s, height: n } = e, i = t.lineFeatures.length > 0 ? t.lineFeatures : t.polygonOutlineFeatures.length > 0 ? t.polygonOutlineFeatures : [], r = Wf(i, s === void 0 ? n : s);
  return new Xf(r, e);
}
function $f(a, e, t) {
  const s = a.coordinates, n = new WA(e, t);
  return n.translate(s[0], s[1], s.length > 2 ? s[2] : 0), n;
}
function eg(a, e, t) {
  const s = [];
  return a.forEach((i) => {
    const r = i.__source.object, o = ts(e, r), c = $f(i.geometry, o, t);
    s.push(c);
  }), Ds(s);
}
function tg(a) {
  const e = new X(a.color !== void 0 ? a.color : 16711680), t = a.opacity !== void 0 ? a.opacity : 0.8, s = a.radius !== void 0 ? a.radius : 1, n = a.followWidth !== void 0 ? a.followWidth : 0.2, i = a.speed !== void 0 ? a.speed : 1, r = {
    transparent: !0,
    blending: Fn,
    depthWrite: !1,
    side: gt,
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
    side: gt,
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
function sg(a) {
  const e = new X(a.color !== void 0 ? a.color : 16711680), t = a.opacity !== void 0 ? a.opacity : 0.8, s = a.radius !== void 0 ? a.radius : 1, n = a.speed !== void 0 ? a.speed : 1, i = {
    transparent: !0,
    blending: Fn,
    depthWrite: !1,
    side: gt,
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
class ng extends De {
  constructor(e, t = {}) {
    super(e);
    let s;
    t.material instanceof dt ? s = t.material : t.material === "ripple" ? s = ao(t) : t.material === "radar" ? s = tg(t) : t.material === "spread" ? s = sg(t) : s = ao(t), this.material = s, this._startTime = 0;
  }
  updateSceneTime(e, t, s) {
    this._startTime === 0 && (this._startTime = e);
    const n = e - this._startTime;
    this.material instanceof Me && (this.material.uniforms.time.value = n / 1e3);
  }
}
function ig(a, e) {
  const { geometries: t } = a, { getCircleRadius: s, radius: n, segments: i = 32 } = e, r = t.pointFeatures, o = eg(r, s === void 0 ? n : s, i);
  return new ng(o, e);
}
function rg(a, e, t, s) {
  const n = a.coordinates, i = [];
  n.forEach((c) => {
    const A = new x(c[0], c[1], c.length > 2 ? c[2] : 0);
    i.push(A);
  });
  const r = new or(i);
  return new JA(r, e, t, s);
}
function ag(a, e) {
  const { tubeRadius: t, tubularSegments: s, radialSegments: n, getTubeRadius: i } = e, r = [];
  return a.forEach((c) => {
    const A = c.__source.object, l = ts(i, A) | t, h = rg(c.geometry, s, l, n);
    r.push(h);
  }), Ds(r);
}
class og extends De {
  constructor(e, t = {}) {
    super(e), this.material = t instanceof dt ? t : new ye(t), this._startTime = 0;
  }
  updateSceneTime(e, t, s) {
    if (this.material instanceof ye && this.material.map && this.speed) {
      this._startTime === 0 && (this._startTime = e);
      const n = e - this._startTime;
      this.material.map.offset.x = n / 1e3 * this.speed;
    }
  }
}
function cg(a, e) {
  const { geometries: t } = a, { material: s, speed: n } = e, i = t.lineFeatures.length > 0 ? t.lineFeatures : t.polygonOutlineFeatures.length > 0 ? t.polygonOutlineFeatures : [], r = ag(i, e), o = new og(r, s);
  return o.speed = n, o;
}
const Ti = {
  water: qf,
  line: jf,
  polygon: xf,
  building: Uf,
  fence: Zf,
  circle: ig,
  tube: cg
};
class Ag {
  static supportMeshLayer(e) {
    return Ti.hasOwnProperty(e);
  }
  static create(e, t) {
    const { id: s, data: n, type: i, callback: r, ...o } = t;
    if (!Ti.hasOwnProperty(i))
      return console.warn(`Mesh type ${i} is not supported`), null;
    const c = Ti[i];
    return c ? c(e, o) : null;
  }
}
class lg extends Ot {
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
    return qd(this._options.data).then((t) => {
      this._featrueData = t;
      const s = [this._featrueData.centroid[0], this._featrueData.centroid[1]];
      Kd(this._featrueData, s), this._scene = e, this.updateSceneTransform();
      const n = Ag.create(this._featrueData, this._options);
      n && (this._meshObject = n, this.add(n), this._options.callback && this._options.callback(n, this._featrueData));
    }), super.addToScene(e);
  }
  removeFromScene() {
    return this._meshObject && (this.remove(this._meshObject), this._meshObject = void 0), super.removeFromScene();
  }
}
class hg extends Ot {
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
class ug extends Ot {
  constructor(e, t) {
    super(), this._object = e, this._options = t, this._parentObjectName = "ObjectPathGroup", this._time = 0;
  }
  updateSceneTransform() {
    this._options.path && (this._options.points = this._options.path.map((e) => this._scene.toScenePosition(e)), this._path = new or(this._options.points, !1)), this.updateMatrixWorld(!0);
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
class dg extends Ot {
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
}, fg = function() {
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
}(), gg = function() {
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
        var p = f[g], E = l[d][p], m = A[d][p];
        r.push({
          x: d,
          y: p,
          value: E,
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
        var h = c[A], u = h.x, d = h.y, f = h.radius, g = Math.min(h.value, o), p = u - f, E = d - f, m = this.shadowCtx, b;
        this._templates[f] ? b = this._templates[f] : this._templates[f] = b = t(f, l);
        var C = (g - r) / (o - r);
        m.globalAlpha = C < 0.01 ? 0.01 : C, m.drawImage(b, p, E), p < this._renderBoundaries[0] && (this._renderBoundaries[0] = p), E < this._renderBoundaries[1] && (this._renderBoundaries[1] = E), p + 2 * f > this._renderBoundaries[2] && (this._renderBoundaries[2] = p + 2 * f), E + 2 * f > this._renderBoundaries[3] && (this._renderBoundaries[3] = E + 2 * f);
      }
    },
    _colorize: function() {
      var i = this._renderBoundaries[0], r = this._renderBoundaries[1], o = this._renderBoundaries[2] - i, c = this._renderBoundaries[3] - r, A = this._width, l = this._height, h = this._opacity, u = this._maxOpacity, d = this._minOpacity, f = this._useGradientOpacity;
      i < 0 && (i = 0), r < 0 && (r = 0), i + o > A && (o = A - i), r + c > l && (c = l - r);
      for (var g = this.shadowCtx.getImageData(i, r, o, c), p = g.data, E = p.length, m = this._palette, b = 3; b < E; b += 4) {
        var C = p[b], I = C * 4;
        if (I) {
          var w;
          h > 0 ? w = h : C < u ? C < d ? w = d : w = C : w = u, p[b - 3] = m[I], p[b - 2] = m[I + 1], p[b - 1] = m[I + 2], p[b] = f ? m[I + 3] : w;
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
}(), pg = function() {
  var e = !1;
  return Xt.defaultRenderer === "canvas2d" && (e = gg), e;
}(), oo = {
  merge: function() {
    for (var a = {}, e = arguments.length, t = 0; t < e; t++) {
      var s = arguments[t];
      for (var n in s)
        a[n] = s[n];
    }
    return a;
  }
}, mg = function() {
  var e = function() {
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
  }(), t = function(n) {
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
      this._renderer = new pg(n), this._store = new fg(n);
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
}();
class bg {
  static create(e) {
    return new mg(e);
  }
  static register(e, t) {
    Xt.plugins[e] = t;
  }
}
class br extends xe {
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
      const p = g / c, E = new x().lerpVectors(e, t, p), m = new x().lerpVectors(n, s, p);
      for (let b = 0; b < A; b++) {
        const C = b / o, I = new x().lerpVectors(E, m, C);
        u.push(I.x, I.y, I.z), d.push(0, 0, 1), f.push(C), f.push(1 - p);
      }
    }
    for (let g = 0; g < c; g++)
      for (let p = 0; p < o; p++) {
        const E = p + A * g, m = p + A * (g + 1), b = p + 1 + A * (g + 1), C = p + 1 + A * g;
        h.push(E, m, C), h.push(m, b, C);
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
    return new br(e.v1, e.v2, e.v3, e.v4, e.widthSegments, e.heightSegments);
  }
}
function Eg(a = new x(-1, 1, 0), e = new x(-1, -1, 0), t = new x(1, -1, 0), s = new x(1, 1, 0)) {
  const n = (new x().subVectors(t, e).length() + new x().subVectors(s, a).length()) / 2, i = (new x().subVectors(a, e).length() + new x().subVectors(s, t).length()) / 2;
  return [n, i];
}
class Cg extends Ot {
  constructor(e) {
    super(), this._options = e, this._meshObject = void 0, this._heatmap = void 0, this._heatmapCanvas = void 0;
  }
  updateSceneTransform() {
    let { coordinates: e, data: t } = this._options;
    if (e == null || e.length != 4) {
      const [[s, n, i], [r, o, c]] = Vd({
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
    const e = Eg(this._boundVertices[0], this._boundVertices[1], this._boundVertices[2], this._boundVertices[3]), t = this._options.width || e[0], s = this._options.height || (t ? t / e[0] * e[1] : e[1]), n = this._options.blur || 0.8, i = this._options.radius || 10, r = this._options.gradient || {}, o = document.createElement("heatmap-canvas");
    o.style.width = t.toString(), o.style.height = s.toString(), o.style.position = "absolute", o.style.top = "0", o.style.left = "0", this._heatmapCanvas = o, this._heatmap = bg.create({
      container: o,
      width: t,
      height: s,
      blur: n,
      radius: i,
      gradient: r
    });
    const c = this._options.widthSegments || 128, A = this._options.heightSegments || c / e[0] * e[1], l = new br(this._boundVertices[0], this._boundVertices[1], this._boundVertices[2], this._boundVertices[3], c, A);
    let h = [], u = 1 / 0, d = -1 / 0;
    this._dataVertices.forEach((b) => {
      const C = l.getUV(b), I = Math.round(t * C.x), w = Math.round(s * C.y), B = b.z;
      h.push({ x: I, y: w, value: B }), B > d && (d = B), B < u && (u = B);
    }), this._heatmap.setData({
      data: h,
      max: d * 0.9,
      min: u
    });
    const f = this._options.heightRatio || 1, g = this._options.depthTest || !1, p = new YA(this._heatmap._renderer.canvas);
    p.needsUpdate = !0;
    const E = {
      transparent: !0,
      //   blending: AdditiveBlending,
      depthTest: g,
      side: gt,
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
    }, m = new Me(E);
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
class Ig {
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
function Er(a, ...e) {
  for (const t of e)
    for (const s in t)
      a[s] = t[s];
  return a;
}
function $c(a, e) {
  a.forEach((t) => {
    e[t] && (e[t] = e[t].bind(e));
  });
}
class yg {
  constructor(e) {
    this.character = e, $c(["keydown", "keyup"], this);
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
class Cr {
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
class xg {
  constructor(e) {
    this.zoomSpeed = 1, this.rotateXSpeed = 1, this.rotateYSpeed = 1, this._moveLook = !1, this._pointerX = 0, this._pointerY = 0, this._pointerXLast = 0, this._pointerYLast = 0, this.followCamera = e, $c(["mousedown", "mousemove", "mouseup", "mousewheel", "contextmenu"], this);
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
class Ir {
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
function yr(a, e) {
  const t = a.getMap(), s = e.getTargetPosition(), n = e.getCameraPosition(), i = e.cameraBearing, r = e.cameraPitch, o = new x().subVectors(n, s).length(), c = a.toMapPosition(s), A = t.transform.pixelsPerMeter / t.transform.worldSize * o, l = t.transform._zoomFromMercatorZ(A);
  return {
    // @ts-ignore
    center: c,
    bearing: i,
    pitch: r,
    zoom: l
  };
}
const Bg = {
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
class _g extends Ir {
  constructor(e, t) {
    super(e), this.mapCameraPosition = {}, t = Er({}, Bg, t);
    const s = e.getCamera(), n = t.model, i = t.mixer;
    this.character = new Ig(n, i, s), this.character.idleAnimationAction = t.idleAnimationAction, this.character.walkAnimationAction = t.walkAnimationAction, this.character.runAnimationAction = t.runAnimationAction, this.character.runVelocity = t.runVelocity, this.character.walkVelocity = t.walkVelocity, this.character.upVelocity = t.upVelocity, this.character.rotateVeclocity = t.rotateVeclocity, this.character.scaleVeclocity = t.scaleVeclocity, this.character.fadeDuration = t.fadeDuration, this.character.modelRotateOffset = t.modelRotateOffset, this.character.modelRotateAxis = t.modelRotateAxis, this.followCamera = new Cr(), this.followCamera.object = n, this.followCamera.objectHeight = t.objectHeight, this.followCamera.cameraPitch = t.cameraPitch, this.followCamera.cameraBearing = t.cameraBearing, this.followCamera.cameraDistance = t.cameraDistance, this.followCamera.cameraMaxDistance = t.cameraMaxDistance, this.followCamera.cameraMinDistance = t.cameraMinDistance, this.followCamera.cameraMaxPitch = t.cameraMaxPitch, this.followCamera.cameraMinPitch = t.cameraMinPitch, this.followCamera.cameraMaxBearing = t.cameraMaxBearing, this.followCamera.cameraMinBearing = t.cameraMinBearing, this.characterHandle = new yg(this.character), this.followCameraHandle = new xg(this.followCamera);
  }
  update(e) {
    if (!this.enabled)
      return;
    this.characterHandle.update(e), this.followCameraHandle.update(e), this.UpdateMapCameraPosition(e), this.scene.getMap().jumpTo(this.mapCameraPosition);
  }
  UpdateMapCameraPosition(e = 0) {
    return this.character.update(e), this.followCamera.update(e), this.mapCameraPosition = yr(this.scene, this.followCamera), this.mapCameraPosition;
  }
  enable() {
    super.enable(), this.characterHandle.enable(), this.followCameraHandle.enable();
  }
  disable() {
    this.characterHandle.disable(), this.followCameraHandle.disable(), super.disable();
  }
}
const wg = {
  path: [],
  points: [],
  pathClose: !1,
  duration: 10,
  cameraPitch: 45,
  cameraBearing: 0,
  cameraDistance: 10
};
class vg extends Ir {
  constructor(e, t) {
    super(e), this.mapCameraPosition = {}, this.options = Er({}, wg, t), this.followCamera = new Cr(), this.updatePath();
  }
  updatePath() {
    this.options.path && (this.options.points = this.options.path.map((e) => this.scene.toScenePosition(e))), this.options.points && (this._time = 0, this._path = new or(this.options.points, this.options.pathClose));
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
    return n.projectOnPlane(new x(0, 0, 1)).normalize(), this.followCamera.cameraPitch = this.options.cameraPitch, this.followCamera.cameraDistance = this.options.cameraDistance, this.followCamera.cameraBearing = this.options.cameraBearing + ee.radToDeg(Math.atan2(n.x, n.y)), this.followCamera.objectPosition.copy(s), this.followCamera.update(e), this.mapCameraPosition = yr(this.scene, this.followCamera), this.mapCameraPosition;
  }
}
const Sg = {
  position: void 0,
  point: void 0,
  duration: 10,
  isClockwise: !0,
  cameraBearing: 0,
  cameraPitch: 45,
  cameraDistance: 10
};
class Tg extends Ir {
  constructor(e, t) {
    super(e), this.mapCameraPosition = {}, this.options = Er({}, Sg, t), this.followCamera = new Cr(), this.updatePosition();
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
    return this.options.isClockwise && (t = 1 - t), this.followCamera.cameraPitch = this.options.cameraPitch, this.followCamera.cameraDistance = this.options.cameraDistance, this.followCamera.cameraBearing = this.options.cameraBearing + t * 360, this.followCamera.objectPosition.copy(this.options.point), this.followCamera.update(e), this.mapCameraPosition = yr(this.scene, this.followCamera), this.mapCameraPosition;
  }
}
class Qg {
  constructor(e) {
    this._scene = e, this._controls = void 0;
  }
  setControls(e) {
    let t = null;
    switch (e.type) {
      case "firstPerson":
        t = new _g(this._scene, e);
        break;
      case "alongPath":
        t = new vg(this._scene, e);
        break;
      case "aroundPoint":
        t = new Tg(this._scene, e);
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
class eA {
  constructor(e) {
    this.type = "custom", this.renderingMode = "3d", this.onAdd = (t, s) => {
      var o;
      this._map = t, this._map.transform.setOrthographicProjectionAtLowPitch(!1), this._scene = this._helper.createScene(this._options.createLight || !0), this._sceneRoot = this._helper.createGroup(this._scene, "scene-root"), this._camera = this._helper.createCamera(this._sceneRoot, "camera-for-render"), this._renderer = new $A(t, s);
      const n = this._options.refCenter || ((o = this._map) == null ? void 0 : o.getCenter());
      this.setRefCenter(n);
      const i = this._options.envTexture;
      this.setEnvTexture(i);
      const r = this._options.envIntensity || 1;
      this.setEnvIntensity(r), this._sceneControls = new Qg(this);
    }, this.onRemove = (t, s) => {
      this._camera = void 0, this._sceneRoot = void 0, this._scene = void 0, this._renderer = void 0, this._map = void 0;
    }, this.render = (t, s) => {
      !this._map || !this._renderer || !this._scene || !this._camera || (this._helper.updateCameraForRender(this._camera, this._map, s, this._worldMatrix, this._worldMatrixInv), this.update(), this._renderer.render(this._scene, this._camera), this._map.triggerRepaint());
    }, this.id = e.id, this.slot = e.slot, this._helper = new tl(), this._options = {
      ...eA._GetDefaultOptions(),
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
      const t = { type: Fi };
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
    const n = new XA();
    return n.layers.set(0), n.setFromCamera(s, this._camera), n.intersectObjects(t, !0);
  }
  ////////////////////////////
  setControls(e) {
    return this._sceneControls.setControls(e);
  }
  ////////////////////////////
  addTileset(e) {
    return new Qd(e).addToScene(this);
  }
  addModel(e) {
    return new Ud(e).addToScene(this);
  }
  addMesh(e) {
    return new lg(e).addToScene(this);
  }
  addLabel(e, t) {
    return new hg(e, t).addToScene(this);
  }
  addPath(e, t) {
    return new ug(e, t).addToScene(this);
  }
  addMarker(e) {
    return new dg(e).addToScene(this);
  }
  addHeatmap(e) {
    return new Cg(e).addToScene(this);
  }
}
export {
  En as AutoReleaseWorkerPool,
  Ud as Model,
  Ot as SceneObject,
  Fi as SceneRecenterEventType,
  xs as SceneUpdateEventType,
  eA as ThreejsSceneLayer,
  Qd as Tileset,
  Lu as WorkerPool,
  $c as bindAll,
  Er as extend
};
