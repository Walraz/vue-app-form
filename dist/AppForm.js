import { ref as P, toRaw as qe, computed as d, markRaw as gl, defineComponent as vn, getCurrentInstance as le, h as m, withDirectives as bl, unref as it, onBeforeUnmount as he, Transition as rt, provide as po, onDeactivated as ct, onActivated as mn, onMounted as dt, nextTick as de, watch as Z, openBlock as pe, createBlock as Xe, withCtx as be, resolveDynamicComponent as Ht, createElementVNode as It, createElementBlock as nt, Fragment as Dt, renderList as An, normalizeClass as Jt, renderSlot as bt, mergeProps as Ct, toHandlers as yo, createVNode as me, createCommentVNode as pl, createTextVNode as en, toDisplayString as Rn, reactive as wo, inject as So, onBeforeUpdate as yl, onUnmounted as xo, Teleport as ko, onBeforeMount as Co, onUpdated as qo } from "vue";
import Mn from "lodash.set";
import On from "lodash.get";
const _o = (e) => {
  const t = P(e), n = P({}), l = window.structuredClone(qe(e)), o = d(() => Object.values(n.value)), u = (f) => {
    t.value = { ...f };
  };
  return u(e), {
    formData: t,
    fieldError: n,
    fieldErrorTexts: o,
    resetDefaultForm: () => {
      u(window.structuredClone(l));
    },
    validateForm: (f) => {
      n.value = {};
      const h = f.safeParse(t.value);
      return h.success ? (u(h.data), !0) : (n.value = h.error.errors.reduce(
        (r, b) => (r[b.path.join(".")] = b.message, r),
        {}
      ), !1);
    },
    setFormData: u
  };
}, Ze = {
  dark: {
    type: Boolean,
    default: null
  }
};
function Je(e, t) {
  return d(() => e.dark === null ? t.dark.isActive : e.dark);
}
const se = (e) => gl(vn(e)), Vo = (e) => gl(e), Eo = {
  true: "inset",
  item: "item-inset",
  "item-thumbnail": "item-thumbnail-inset"
}, jt = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24
}, tn = se({
  name: "QSeparator",
  props: {
    ...Ze,
    spaced: [Boolean, String],
    inset: [Boolean, String],
    vertical: Boolean,
    color: String,
    size: String
  },
  setup(e) {
    const t = le(), n = Je(e, t.proxy.$q), l = d(() => e.vertical === !0 ? "vertical" : "horizontal"), o = d(() => ` q-separator--${l.value}`), u = d(() => e.inset !== !1 ? `${o.value}-${Eo[e.inset]}` : ""), a = d(
      () => `q-separator${o.value}${u.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === !0 ? " q-separator--dark" : "")
    ), s = d(() => {
      const f = {};
      if (e.size !== void 0 && (f[e.vertical === !0 ? "width" : "height"] = e.size), e.spaced !== !1) {
        const h = e.spaced === !0 ? `${jt.md}px` : e.spaced in jt ? `${jt[e.spaced]}px` : e.spaced, r = e.vertical === !0 ? ["Left", "Right"] : ["Top", "Bottom"];
        f[`margin${r[0]}`] = f[`margin${r[1]}`] = h;
      }
      return f;
    });
    return () => m("hr", {
      class: a.value,
      style: s.value,
      "aria-orientation": l.value
    });
  }
}), Bo = m("div", { class: "q-space" }), To = se({
  name: "QSpace",
  setup() {
    return () => Bo;
  }
}), nn = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
}, $t = {
  size: String
};
function Lt(e, t = nn) {
  return d(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
}
function Se(e, t) {
  return e !== void 0 && e() || t;
}
function $o(e, t) {
  if (e !== void 0) {
    const n = e();
    if (n != null)
      return n.slice();
  }
  return t;
}
function Ae(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function Lo(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function Ao(e, t, n, l, o, u) {
  t.key = l + o;
  const a = m(e, t, n);
  return o === !0 ? bl(a, u()) : a;
}
const Pn = "0 0 24 24", Fn = (e) => e, Wt = (e) => `ionicons ${e}`, wl = {
  "mdi-": (e) => `mdi ${e}`,
  "icon-": Fn,
  // fontawesome equiv
  "bt-": (e) => `bt ${e}`,
  "eva-": (e) => `eva ${e}`,
  "ion-md": Wt,
  "ion-ios": Wt,
  "ion-logo": Wt,
  "iconfont ": Fn,
  "ti-": (e) => `themify-icon ${e}`,
  "bi-": (e) => `bootstrap-icons ${e}`
}, Sl = {
  o_: "-outlined",
  r_: "-round",
  s_: "-sharp"
}, xl = {
  sym_o_: "-outlined",
  sym_r_: "-rounded",
  sym_s_: "-sharp"
}, Ro = new RegExp("^(" + Object.keys(wl).join("|") + ")"), Mo = new RegExp("^(" + Object.keys(Sl).join("|") + ")"), zn = new RegExp("^(" + Object.keys(xl).join("|") + ")"), Oo = /^[Mm]\s?[-+]?\.?\d/, Po = /^img:/, Fo = /^svguse:/, zo = /^ion-/, Ho = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, ke = se({
  name: "QIcon",
  props: {
    ...$t,
    tag: {
      type: String,
      default: "i"
    },
    name: String,
    color: String,
    left: Boolean,
    right: Boolean
  },
  setup(e, { slots: t }) {
    const { proxy: { $q: n } } = le(), l = Lt(e), o = d(
      () => "q-icon" + (e.left === !0 ? " on-left" : "") + (e.right === !0 ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")
    ), u = d(() => {
      let a, s = e.name;
      if (s === "none" || !s)
        return { none: !0 };
      if (n.iconMapFn !== null) {
        const r = n.iconMapFn(s);
        if (r !== void 0)
          if (r.icon !== void 0) {
            if (s = r.icon, s === "none" || !s)
              return { none: !0 };
          } else
            return {
              cls: r.cls,
              content: r.content !== void 0 ? r.content : " "
            };
      }
      if (Oo.test(s) === !0) {
        const [r, b = Pn] = s.split("|");
        return {
          svg: !0,
          viewBox: b,
          nodes: r.split("&&").map((v) => {
            const [c, g, B] = v.split("@@");
            return m("path", { style: g, d: c, transform: B });
          })
        };
      }
      if (Po.test(s) === !0)
        return {
          img: !0,
          src: s.substring(4)
        };
      if (Fo.test(s) === !0) {
        const [r, b = Pn] = s.split("|");
        return {
          svguse: !0,
          src: r.substring(7),
          viewBox: b
        };
      }
      let f = " ";
      const h = s.match(Ro);
      if (h !== null)
        a = wl[h[1]](s);
      else if (Ho.test(s) === !0)
        a = s;
      else if (zo.test(s) === !0)
        a = `ionicons ion-${n.platform.is.ios === !0 ? "ios" : "md"}${s.substring(3)}`;
      else if (zn.test(s) === !0) {
        a = "notranslate material-symbols";
        const r = s.match(zn);
        r !== null && (s = s.substring(6), a += xl[r[1]]), f = s;
      } else {
        a = "notranslate material-icons";
        const r = s.match(Mo);
        r !== null && (s = s.substring(2), a += Sl[r[1]]), f = s;
      }
      return {
        cls: a,
        content: f
      };
    });
    return () => {
      const a = {
        class: o.value,
        style: l.value,
        "aria-hidden": "true",
        role: "presentation"
      };
      return u.value.none === !0 ? m(e.tag, a, Se(t.default)) : u.value.img === !0 ? m("span", a, Ae(t.default, [
        m("img", { src: u.value.src })
      ])) : u.value.svg === !0 ? m("span", a, Ae(t.default, [
        m("svg", {
          viewBox: u.value.viewBox || "0 0 24 24"
        }, u.value.nodes)
      ])) : u.value.svguse === !0 ? m("span", a, Ae(t.default, [
        m("svg", {
          viewBox: u.value.viewBox
        }, [
          m("use", { "xlink:href": u.value.src })
        ])
      ])) : (u.value.cls !== void 0 && (a.class += " " + u.value.cls), m(e.tag, a, Ae(t.default, [
        u.value.content
      ])));
    };
  }
}), Io = {
  size: {
    type: [Number, String],
    default: "1em"
  },
  color: String
};
function Do(e) {
  return {
    cSize: d(() => e.size in nn ? `${nn[e.size]}px` : e.size),
    classes: d(
      () => "q-spinner" + (e.color ? ` text-${e.color}` : "")
    )
  };
}
const kl = se({
  name: "QSpinner",
  props: {
    ...Io,
    thickness: {
      type: Number,
      default: 5
    }
  },
  setup(e) {
    const { cSize: t, classes: n } = Do(e);
    return () => m("svg", {
      class: n.value + " q-spinner-mat",
      width: t.value,
      height: t.value,
      viewBox: "25 25 50 50"
    }, [
      m("circle", {
        class: "path",
        cx: "50",
        cy: "50",
        r: "20",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": e.thickness,
        "stroke-miterlimit": "10"
      })
    ]);
  }
});
function ln(e, t) {
  const n = e.style;
  for (const l in t)
    n[l] = t[l];
}
function jo(e) {
  if (e == null)
    return;
  if (typeof e == "string")
    try {
      return document.querySelector(e) || void 0;
    } catch {
      return;
    }
  const t = it(e);
  if (t)
    return t.$el || t;
}
function Cl(e, t) {
  if (e == null || e.contains(t) === !0)
    return !0;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling)
    if (n.contains(t))
      return !0;
  return !1;
}
const fe = {
  hasPassive: !1,
  passiveCapture: !0,
  notPassiveCapture: !0
};
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Object.assign(fe, {
        hasPassive: !0,
        passive: { passive: !0 },
        notPassive: { passive: !1 },
        passiveCapture: { passive: !0, capture: !0 },
        notPassiveCapture: { passive: !1, capture: !0 }
      });
    }
  });
  window.addEventListener("qtest", null, e), window.removeEventListener("qtest", null, e);
} catch {
}
function Wo() {
}
function ql(e) {
  return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), {
    top: e.clientY,
    left: e.clientX
  };
}
function No(e) {
  if (e.path)
    return e.path;
  if (e.composedPath)
    return e.composedPath();
  const t = [];
  let n = e.target;
  for (; n; ) {
    if (t.push(n), n.tagName === "HTML")
      return t.push(document), t.push(window), t;
    n = n.parentElement;
  }
}
function _e(e) {
  e.stopPropagation();
}
function we(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function ne(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function on(e, t, n) {
  const l = `__q_${t}_evt`;
  e[l] = e[l] !== void 0 ? e[l].concat(n) : n, n.forEach((o) => {
    o[0].addEventListener(o[1], e[o[2]], fe[o[3]]);
  });
}
function _l(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 && (e[n].forEach((l) => {
    l[0].removeEventListener(l[1], e[l[2]], fe[l[3]]);
  }), e[n] = void 0);
}
function Vl(e) {
  return e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0;
}
function Fe(e, t) {
  return Vl(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
function Ko(e, t = 250) {
  let n = !1, l;
  return function() {
    return n === !1 && (n = !0, setTimeout(() => {
      n = !1;
    }, t), l = e.apply(this, arguments)), l;
  };
}
function Hn(e, t, n, l) {
  n.modifiers.stop === !0 && _e(e);
  const o = n.modifiers.color;
  let u = n.modifiers.center;
  u = u === !0 || l === !0;
  const a = document.createElement("span"), s = document.createElement("span"), f = ql(e), { left: h, top: r, width: b, height: v } = t.getBoundingClientRect(), c = Math.sqrt(b * b + v * v), g = c / 2, B = `${(b - c) / 2}px`, y = u ? B : `${f.left - h - g}px`, w = `${(v - c) / 2}px`, x = u ? w : `${f.top - r - g}px`;
  s.className = "q-ripple__inner", ln(s, {
    height: `${c}px`,
    width: `${c}px`,
    transform: `translate3d(${y},${x},0) scale3d(.2,.2,1)`,
    opacity: 0
  }), a.className = `q-ripple${o ? " text-" + o : ""}`, a.setAttribute("dir", "ltr"), a.appendChild(s), t.appendChild(a);
  const p = () => {
    a.remove(), clearTimeout(k);
  };
  n.abort.push(p);
  let k = setTimeout(() => {
    s.classList.add("q-ripple__inner--enter"), s.style.transform = `translate3d(${B},${w},0) scale3d(1,1,1)`, s.style.opacity = 0.2, k = setTimeout(() => {
      s.classList.remove("q-ripple__inner--enter"), s.classList.add("q-ripple__inner--leave"), s.style.opacity = 0, k = setTimeout(() => {
        a.remove(), n.abort.splice(n.abort.indexOf(p), 1);
      }, 275);
    }, 250);
  }, 50);
}
function In(e, { modifiers: t, value: n, arg: l }) {
  const o = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = {
    early: o.early === !0,
    stop: o.stop === !0,
    center: o.center === !0,
    color: o.color || l,
    keyCodes: [].concat(o.keyCodes || 13)
  };
}
const El = Vo(
  {
    name: "ripple",
    beforeMount(e, t) {
      const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
      if (n.ripple === !1)
        return;
      const l = {
        cfg: n,
        enabled: t.value !== !1,
        modifiers: {},
        abort: [],
        start(o) {
          l.enabled === !0 && o.qSkipRipple !== !0 && o.type === (l.modifiers.early === !0 ? "pointerdown" : "click") && Hn(o, e, l, o.qKeyEvent === !0);
        },
        keystart: Ko((o) => {
          l.enabled === !0 && o.qSkipRipple !== !0 && Fe(o, l.modifiers.keyCodes) === !0 && o.type === `key${l.modifiers.early === !0 ? "down" : "up"}` && Hn(o, e, l, !0);
        }, 300)
      };
      In(l, t), e.__qripple = l, on(l, "main", [
        [e, "pointerdown", "start", "passive"],
        [e, "click", "start", "passive"],
        [e, "keydown", "keystart", "passive"],
        [e, "keyup", "keystart", "passive"]
      ]);
    },
    updated(e, t) {
      if (t.oldValue !== t.value) {
        const n = e.__qripple;
        n !== void 0 && (n.enabled = t.value !== !1, n.enabled === !0 && Object(t.value) === t.value && In(n, t));
      }
    },
    beforeUnmount(e) {
      const t = e.__qripple;
      t !== void 0 && (t.abort.forEach((n) => {
        n();
      }), _l(t, "main"), delete e._qripple);
    }
  }
), Bl = {
  left: "start",
  center: "center",
  right: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch"
}, Qo = Object.keys(Bl), Uo = {
  align: {
    type: String,
    validator: (e) => Qo.includes(e)
  }
};
function Xo(e) {
  return d(() => {
    const t = e.align === void 0 ? e.vertical === !0 ? "stretch" : "left" : e.align;
    return `${e.vertical === !0 ? "items" : "justify"}-${Bl[t]}`;
  });
}
function Nt(e) {
  if (Object(e.$parent) === e.$parent)
    return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy)
      return t.proxy;
    t = t.parent;
  }
}
function Tl(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function hn(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
function Dn(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function jn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Yo(e, t) {
  for (const n in t) {
    const l = t[n], o = e[n];
    if (typeof l == "string") {
      if (l !== o)
        return !1;
    } else if (Array.isArray(o) === !1 || o.length !== l.length || l.some((u, a) => u !== o[a]))
      return !1;
  }
  return !0;
}
function Wn(e, t) {
  return Array.isArray(t) === !0 ? e.length === t.length && e.every((n, l) => n === t[l]) : e.length === 1 && e[0] === t;
}
function Go(e, t) {
  return Array.isArray(e) === !0 ? Wn(e, t) : Array.isArray(t) === !0 ? Wn(t, e) : e === t;
}
function Zo(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (Go(e[n], t[n]) === !1)
      return !1;
  return !0;
}
const $l = {
  // router-link
  to: [String, Object],
  replace: Boolean,
  exact: Boolean,
  activeClass: {
    type: String,
    default: "q-router-link--active"
  },
  exactActiveClass: {
    type: String,
    default: "q-router-link--exact-active"
  },
  // regular <a> link
  href: String,
  target: String,
  // state
  disable: Boolean
};
function Ll({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const n = le(), { props: l, proxy: o, emit: u } = n, a = Tl(n), s = d(() => l.disable !== !0 && l.href !== void 0), f = t === !0 ? d(
    () => a === !0 && l.disable !== !0 && s.value !== !0 && l.to !== void 0 && l.to !== null && l.to !== ""
  ) : d(
    () => a === !0 && s.value !== !0 && l.to !== void 0 && l.to !== null && l.to !== ""
  ), h = d(() => f.value === !0 ? x(l.to) : null), r = d(() => h.value !== null), b = d(() => s.value === !0 || r.value === !0), v = d(() => l.type === "a" || b.value === !0 ? "a" : l.tag || e || "div"), c = d(() => s.value === !0 ? {
    href: l.href,
    target: l.target
  } : r.value === !0 ? {
    href: h.value.href,
    target: l.target
  } : {}), g = d(() => {
    if (r.value === !1)
      return -1;
    const { matched: S } = h.value, { length: R } = S, L = S[R - 1];
    if (L === void 0)
      return -1;
    const I = o.$route.matched;
    if (I.length === 0)
      return -1;
    const K = I.findIndex(
      jn.bind(null, L)
    );
    if (K > -1)
      return K;
    const J = Dn(S[R - 2]);
    return (
      // we are dealing with nested routes
      R > 1 && Dn(L) === J && I[I.length - 1].path !== J ? I.findIndex(
        jn.bind(null, S[R - 2])
      ) : K
    );
  }), B = d(
    () => r.value === !0 && g.value !== -1 && Yo(o.$route.params, h.value.params)
  ), y = d(
    () => B.value === !0 && g.value === o.$route.matched.length - 1 && Zo(o.$route.params, h.value.params)
  ), w = d(() => r.value === !0 ? y.value === !0 ? ` ${l.exactActiveClass} ${l.activeClass}` : l.exact === !0 ? "" : B.value === !0 ? ` ${l.activeClass}` : "" : "");
  function x(S) {
    try {
      return o.$router.resolve(S);
    } catch {
    }
    return null;
  }
  function p(S, { returnRouterError: R, to: L = l.to, replace: I = l.replace } = {}) {
    if (l.disable === !0)
      return S.preventDefault(), Promise.resolve(!1);
    if (
      // don't redirect with control keys;
      // should match RouterLink from Vue Router
      S.metaKey || S.altKey || S.ctrlKey || S.shiftKey || S.button !== void 0 && S.button !== 0 || l.target === "_blank"
    )
      return Promise.resolve(!1);
    S.preventDefault();
    const K = o.$router[I === !0 ? "replace" : "push"](L);
    return R === !0 ? K : K.then(() => {
    }).catch(() => {
    });
  }
  function k(S) {
    if (r.value === !0) {
      const R = (L) => p(S, L);
      u("click", S, R), S.defaultPrevented !== !0 && R();
    } else
      u("click", S);
  }
  return {
    hasRouterLink: r,
    hasHrefLink: s,
    hasLink: b,
    linkTag: v,
    resolvedLink: h,
    linkIsActive: B,
    linkIsExactActive: y,
    linkClass: w,
    linkAttrs: c,
    getLink: x,
    navigateToRouterLink: p,
    navigateOnClick: k
  };
}
const Nn = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
}, Jo = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
}, ei = ["button", "submit", "reset"], ti = /[^\s]\/[^\s]/, ni = ["flat", "outline", "push", "unelevated"], li = (e, t) => e.flat === !0 ? "flat" : e.outline === !0 ? "outline" : e.push === !0 ? "push" : e.unelevated === !0 ? "unelevated" : t, oi = {
  ...$t,
  ...$l,
  type: {
    type: String,
    default: "button"
  },
  label: [Number, String],
  icon: String,
  iconRight: String,
  ...ni.reduce(
    (e, t) => (e[t] = Boolean) && e,
    {}
  ),
  square: Boolean,
  round: Boolean,
  rounded: Boolean,
  glossy: Boolean,
  size: String,
  fab: Boolean,
  fabMini: Boolean,
  padding: String,
  color: String,
  textColor: String,
  noCaps: Boolean,
  noWrap: Boolean,
  dense: Boolean,
  tabindex: [Number, String],
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  align: {
    ...Uo.align,
    default: "center"
  },
  stack: Boolean,
  stretch: Boolean,
  loading: {
    type: Boolean,
    default: null
  },
  disable: Boolean
};
function ii(e) {
  const t = Lt(e, Jo), n = Xo(e), { hasRouterLink: l, hasLink: o, linkTag: u, linkAttrs: a, navigateOnClick: s } = Ll({
    fallbackTag: "button"
  }), f = d(() => {
    const y = e.fab === !1 && e.fabMini === !1 ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, y, {
      padding: e.padding.split(/\s+/).map((w) => w in Nn ? Nn[w] + "px" : w).join(" "),
      minWidth: "0",
      minHeight: "0"
    }) : y;
  }), h = d(
    () => e.rounded === !0 || e.fab === !0 || e.fabMini === !0
  ), r = d(
    () => e.disable !== !0 && e.loading !== !0
  ), b = d(() => r.value === !0 ? e.tabindex || 0 : -1), v = d(() => li(e, "standard")), c = d(() => {
    const y = { tabindex: b.value };
    return o.value === !0 ? Object.assign(y, a.value) : ei.includes(e.type) === !0 && (y.type = e.type), u.value === "a" ? (e.disable === !0 ? y["aria-disabled"] = "true" : y.href === void 0 && (y.role = "button"), l.value !== !0 && ti.test(e.type) === !0 && (y.type = e.type)) : e.disable === !0 && (y.disabled = "", y["aria-disabled"] = "true"), e.loading === !0 && e.percentage !== void 0 && Object.assign(y, {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": e.percentage
    }), y;
  }), g = d(() => {
    let y;
    e.color !== void 0 ? e.flat === !0 || e.outline === !0 ? y = `text-${e.textColor || e.color}` : y = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (y = `text-${e.textColor}`);
    const w = e.round === !0 ? "round" : `rectangle${h.value === !0 ? " q-btn--rounded" : e.square === !0 ? " q-btn--square" : ""}`;
    return `q-btn--${v.value} q-btn--${w}` + (y !== void 0 ? " " + y : "") + (r.value === !0 ? " q-btn--actionable q-focusable q-hoverable" : e.disable === !0 ? " disabled" : "") + (e.fab === !0 ? " q-btn--fab" : e.fabMini === !0 ? " q-btn--fab-mini" : "") + (e.noCaps === !0 ? " q-btn--no-uppercase" : "") + (e.dense === !0 ? " q-btn--dense" : "") + (e.stretch === !0 ? " no-border-radius self-stretch" : "") + (e.glossy === !0 ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), B = d(
    () => n.value + (e.stack === !0 ? " column" : " row") + (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") + (e.loading === !0 ? " q-btn__content--hidden" : "")
  );
  return {
    classes: g,
    style: f,
    innerClasses: B,
    attributes: c,
    hasLink: o,
    linkTag: u,
    navigateOnClick: s,
    isActionable: r
  };
}
const { passiveCapture: ge } = fe;
let Ke = null, Qe = null, Ue = null;
const Kn = se({
  name: "QBtn",
  props: {
    ...oi,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array]
  },
  emits: ["click", "keydown", "mousedown", "keyup"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: l } = le(), {
      classes: o,
      style: u,
      innerClasses: a,
      attributes: s,
      hasLink: f,
      linkTag: h,
      navigateOnClick: r,
      isActionable: b
    } = ii(e), v = P(null), c = P(null);
    let g = null, B, y = null;
    const w = d(
      () => e.label !== void 0 && e.label !== null && e.label !== ""
    ), x = d(() => e.disable === !0 || e.ripple === !1 ? !1 : {
      keyCodes: f.value === !0 ? [13, 32] : [13],
      ...e.ripple === !0 ? {} : e.ripple
    }), p = d(() => ({ center: e.round })), k = d(() => {
      const $ = Math.max(0, Math.min(100, e.percentage));
      return $ > 0 ? { transition: "transform 0.6s", transform: `translateX(${$ - 100}%)` } : {};
    }), S = d(() => {
      if (e.loading === !0)
        return {
          onMousedown: X,
          onTouchstart: X,
          onClick: X,
          onKeydown: X,
          onKeyup: X
        };
      if (b.value === !0) {
        const $ = {
          onClick: L,
          onKeydown: I,
          onMousedown: J
        };
        if (l.$q.platform.has.touch === !0) {
          const W = e.onTouchstart !== void 0 ? "" : "Passive";
          $[`onTouchstart${W}`] = K;
        }
        return $;
      }
      return {
        // needed; especially for disabled <a> tags
        onClick: ne
      };
    }), R = d(() => ({
      ref: v,
      class: "q-btn q-btn-item non-selectable no-outline " + o.value,
      style: u.value,
      ...s.value,
      ...S.value
    }));
    function L($) {
      if (v.value !== null) {
        if ($ !== void 0) {
          if ($.defaultPrevented === !0)
            return;
          const W = document.activeElement;
          if (e.type === "submit" && W !== document.body && v.value.contains(W) === !1 && W.contains(v.value) === !1) {
            v.value.focus();
            const G = () => {
              document.removeEventListener("keydown", ne, !0), document.removeEventListener("keyup", G, ge), v.value !== null && v.value.removeEventListener("blur", G, ge);
            };
            document.addEventListener("keydown", ne, !0), document.addEventListener("keyup", G, ge), v.value.addEventListener("blur", G, ge);
          }
        }
        r($);
      }
    }
    function I($) {
      v.value !== null && (n("keydown", $), Fe($, [13, 32]) === !0 && Qe !== v.value && (Qe !== null && z(), $.defaultPrevented !== !0 && (v.value.focus(), Qe = v.value, v.value.classList.add("q-btn--active"), document.addEventListener("keyup", N, !0), v.value.addEventListener("blur", N, ge)), ne($)));
    }
    function K($) {
      v.value !== null && (n("touchstart", $), $.defaultPrevented !== !0 && (Ke !== v.value && (Ke !== null && z(), Ke = v.value, g = $.target, g.addEventListener("touchcancel", N, ge), g.addEventListener("touchend", N, ge)), B = !0, y !== null && clearTimeout(y), y = setTimeout(() => {
        y = null, B = !1;
      }, 200)));
    }
    function J($) {
      v.value !== null && ($.qSkipRipple = B === !0, n("mousedown", $), $.defaultPrevented !== !0 && Ue !== v.value && (Ue !== null && z(), Ue = v.value, v.value.classList.add("q-btn--active"), document.addEventListener("mouseup", N, ge)));
    }
    function N($) {
      if (v.value !== null && !($ !== void 0 && $.type === "blur" && document.activeElement === v.value)) {
        if ($ !== void 0 && $.type === "keyup") {
          if (Qe === v.value && Fe($, [13, 32]) === !0) {
            const W = new MouseEvent("click", $);
            W.qKeyEvent = !0, $.defaultPrevented === !0 && we(W), $.cancelBubble === !0 && _e(W), v.value.dispatchEvent(W), ne($), $.qKeyEvent = !0;
          }
          n("keyup", $);
        }
        z();
      }
    }
    function z($) {
      const W = c.value;
      $ !== !0 && (Ke === v.value || Ue === v.value) && W !== null && W !== document.activeElement && (W.setAttribute("tabindex", -1), W.focus()), Ke === v.value && (g !== null && (g.removeEventListener("touchcancel", N, ge), g.removeEventListener("touchend", N, ge)), Ke = g = null), Ue === v.value && (document.removeEventListener("mouseup", N, ge), Ue = null), Qe === v.value && (document.removeEventListener("keyup", N, !0), v.value !== null && v.value.removeEventListener("blur", N, ge), Qe = null), v.value !== null && v.value.classList.remove("q-btn--active");
    }
    function X($) {
      ne($), $.qSkipRipple = !0;
    }
    return he(() => {
      z(!0);
    }), Object.assign(l, { click: L }), () => {
      let $ = [];
      e.icon !== void 0 && $.push(
        m(ke, {
          name: e.icon,
          left: e.stack === !1 && w.value === !0,
          role: "img",
          "aria-hidden": "true"
        })
      ), w.value === !0 && $.push(
        m("span", { class: "block" }, [e.label])
      ), $ = Ae(t.default, $), e.iconRight !== void 0 && e.round === !1 && $.push(
        m(ke, {
          name: e.iconRight,
          right: e.stack === !1 && w.value === !0,
          role: "img",
          "aria-hidden": "true"
        })
      );
      const W = [
        m("span", {
          class: "q-focus-helper",
          ref: c
        })
      ];
      return e.loading === !0 && e.percentage !== void 0 && W.push(
        m("span", {
          class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === !0 ? " q-btn__progress--dark" : "")
        }, [
          m("span", {
            class: "q-btn__progress-indicator fit block",
            style: k.value
          })
        ])
      ), W.push(
        m("span", {
          class: "q-btn__content text-center col items-center q-anchor--skip " + a.value
        }, $)
      ), e.loading !== null && W.push(
        m(rt, {
          name: "q-transition--fade"
        }, () => e.loading === !0 ? [
          m("span", {
            key: "loading",
            class: "absolute-full flex flex-center"
          }, t.loading !== void 0 ? t.loading() : [m(kl)])
        ] : null)
      ), bl(
        m(
          h.value,
          R.value,
          W
        ),
        [[
          El,
          x.value,
          void 0,
          p.value
        ]]
      );
    };
  }
});
let Re = [], st = [];
function Al(e) {
  st = st.filter((t) => t !== e);
}
function ui(e) {
  Al(e), st.push(e);
}
function Qn(e) {
  Al(e), st.length === 0 && Re.length !== 0 && (Re[Re.length - 1](), Re = []);
}
function At(e) {
  st.length === 0 ? e() : Re.push(e);
}
function ai(e) {
  Re = Re.filter((t) => t !== e);
}
const Rl = "_q_fo_", ri = se({
  name: "QForm",
  props: {
    autofocus: Boolean,
    noErrorFocus: Boolean,
    noResetFocus: Boolean,
    greedy: Boolean,
    onSubmit: Function
  },
  emits: ["reset", "validationSuccess", "validationError"],
  setup(e, { slots: t, emit: n }) {
    const l = le(), o = P(null);
    let u = 0;
    const a = [];
    function s(c) {
      const g = typeof c == "boolean" ? c : e.noErrorFocus !== !0, B = ++u, y = (p, k) => {
        n("validation" + (p === !0 ? "Success" : "Error"), k);
      }, w = (p) => {
        const k = p.validate();
        return typeof k.then == "function" ? k.then(
          (S) => ({ valid: S, comp: p }),
          (S) => ({ valid: !1, comp: p, err: S })
        ) : Promise.resolve({ valid: k, comp: p });
      };
      return (e.greedy === !0 ? Promise.all(a.map(w)).then((p) => p.filter((k) => k.valid !== !0)) : a.reduce(
        (p, k) => p.then(() => w(k).then((S) => {
          if (S.valid === !1)
            return Promise.reject(S);
        })),
        Promise.resolve()
      ).catch((p) => [p])).then((p) => {
        if (p === void 0 || p.length === 0)
          return B === u && y(!0), !0;
        if (B === u) {
          const { comp: k, err: S } = p[0];
          if (S !== void 0 && console.error(S), y(!1, k), g === !0) {
            const R = p.find(({ comp: L }) => typeof L.focus == "function" && hn(L.$) === !1);
            R !== void 0 && R.comp.focus();
          }
        }
        return !1;
      });
    }
    function f() {
      u++, a.forEach((c) => {
        typeof c.resetValidation == "function" && c.resetValidation();
      });
    }
    function h(c) {
      c !== void 0 && ne(c);
      const g = u + 1;
      s().then((B) => {
        g === u && B === !0 && (e.onSubmit !== void 0 ? n("submit", c) : c !== void 0 && c.target !== void 0 && typeof c.target.submit == "function" && c.target.submit());
      });
    }
    function r(c) {
      c !== void 0 && ne(c), n("reset"), de(() => {
        f(), e.autofocus === !0 && e.noResetFocus !== !0 && b();
      });
    }
    function b() {
      At(() => {
        if (o.value === null)
          return;
        const c = o.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || o.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || o.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(o.value.querySelectorAll("[tabindex]"), (g) => g.tabIndex > -1);
        c != null && c.focus({ preventScroll: !0 });
      });
    }
    po(Rl, {
      bindComponent(c) {
        a.push(c);
      },
      unbindComponent(c) {
        const g = a.indexOf(c);
        g > -1 && a.splice(g, 1);
      }
    });
    let v = !1;
    return ct(() => {
      v = !0;
    }), mn(() => {
      v === !0 && e.autofocus === !0 && b();
    }), dt(() => {
      e.autofocus === !0 && b();
    }), Object.assign(l.proxy, {
      validate: s,
      resetValidation: f,
      submit: h,
      reset: r,
      focus: b,
      getValidationComponents: () => a
    }), () => m("form", {
      class: "q-form",
      ref: o,
      onSubmit: h,
      onReset: r
    }, Se(t.default));
  }
}), si = {
  class: /* @__PURE__ */ Jt("row q-col-gutter-md")
}, ci = { class: "col" }, di = {
  key: 0,
  class: "col-auto flex"
}, fi = /* @__PURE__ */ vn({
  __name: "AppForm",
  props: {
    fieldWrapper: { default: () => "div" },
    actionButtonWrapper: { default: () => "div" },
    closeActionButtonText: { default: () => "Stäng" },
    confirmActionButtonText: { default: () => "Spara" },
    colGutter: { default: () => "sm" },
    modelValue: {},
    modelSchema: {},
    schema: {},
    actionButtonProps: { default: () => ({}) },
    readonly: { type: Boolean, default: () => !1 },
    disable: { type: Boolean, default: () => !1 },
    loading: { type: Boolean, default: () => !1 }
  },
  emits: ["submit", "update:modelValue", "reset", "close"],
  setup(e, { emit: t }) {
    const n = e, l = P(), o = Math.max(...n.schema.map((w) => w.layoutSlot || 1)), u = (w = {}, x) => {
      for (const p of x) {
        const k = On(
          w,
          p.scope,
          p != null && p.transform ? p == null ? void 0 : p.transform(p.defaultValue) : p.defaultValue
        );
        Mn(w, p.scope, k);
      }
      return w;
    }, { resetDefaultForm: a, validateForm: s, formData: f, fieldError: h } = _o(
      u(n.modelValue, n.schema)
    );
    Z(
      f,
      (w) => {
        t("update:modelValue", w);
      },
      {
        deep: !0,
        immediate: !0
      }
    );
    const r = (w) => On(f.value, w), b = (w, x) => {
      Mn(
        f.value,
        x.scope,
        x != null && x.transform ? x == null ? void 0 : x.transform(w) : w
      ), h.value[x.scope] && s(n.modelSchema);
    }, v = () => {
      s(n.modelSchema), s(n.modelSchema) && t("submit", qe(f.value));
    }, c = () => {
      var w;
      a(), (w = l.value) == null || w.resetValidation(), t("reset");
    }, g = () => {
      t("close");
    }, B = () => s(n.modelSchema), y = d(() => (w) => ({
      bind: {
        ...w.componentProps || {},
        readonly: n.readonly,
        disable: n.disable,
        modelValue: r(w.scope),
        error: !!h.value[w.scope],
        errorMessage: h.value[w.scope] || ""
      },
      on: {
        "update:modelValue": (x) => b(x, w)
      }
    }));
    return (w, x) => (pe(), Xe(it(ri), {
      onValidationError: B,
      onSubmit: v,
      greedy: "",
      onReset: c,
      ref_key: "form",
      ref: l
    }, {
      default: be(() => [
        (pe(), Xe(Ht(w.fieldWrapper), null, {
          default: be(() => [
            It("div", si, [
              (pe(!0), nt(Dt, null, An(it(o), (p) => (pe(), nt(Dt, { key: p }, [
                It("div", ci, [
                  It("div", {
                    class: Jt(`row q-col-gutter-${w.colGutter}`)
                  }, [
                    (pe(!0), nt(Dt, null, An(w.schema.filter((k) => {
                      const S = k.layoutSlot || 1;
                      return S > it(o) ? p === 1 : S === p;
                    }), (k) => (pe(), nt("div", {
                      key: k.scope,
                      class: Jt(`col-${k.cols || "auto"}`)
                    }, [
                      bt(w.$slots, k.scope, {
                        props: {
                          setterScope: b,
                          getterScope: r,
                          scope: k.scope,
                          ...y.value(k)
                        }
                      }, () => [
                        (pe(), Xe(Ht(k.component), Ct(y.value(k).bind, yo(y.value(k).on)), null, 16))
                      ])
                    ], 2))), 128))
                  ], 2)
                ]),
                p !== it(o) ? (pe(), nt("div", di, [
                  me(tn, { vertical: "" })
                ])) : pl("", !0)
              ], 64))), 128))
            ])
          ]),
          _: 3
        })),
        bt(w.$slots, "actions", {
          props: { bind: { ...w.actionButtonProps } }
        }, () => [
          me(tn),
          (pe(), Xe(Ht(w.actionButtonWrapper), null, {
            default: be(() => [
              bt(w.$slots, "action-button-left"),
              me(To),
              bt(w.$slots, "action-button-right", {}, () => [
                me(Kn, Ct(w.actionButtonProps, {
                  onClick: g,
                  disable: w.loading
                }), {
                  default: be(() => [
                    en(Rn(w.closeActionButtonText), 1)
                  ]),
                  _: 1
                }, 16, ["disable"]),
                me(Kn, Ct(w.actionButtonProps, {
                  type: "submit",
                  color: "primary",
                  loading: w.loading
                }), {
                  default: be(() => [
                    en(Rn(w.confirmActionButtonText), 1)
                  ]),
                  _: 1
                }, 16, ["loading"])
              ])
            ]),
            _: 3
          }))
        ])
      ]),
      _: 3
    }, 512));
  }
});
function vi(e, t) {
  const n = P(null), l = d(() => e.disable === !0 ? null : m("span", {
    ref: n,
    class: "no-outline",
    tabindex: -1
  }));
  function o(u) {
    const a = t.value;
    u !== void 0 && u.type.indexOf("key") === 0 ? a !== null && document.activeElement !== a && a.contains(document.activeElement) === !0 && a.focus() : n.value !== null && (u === void 0 || a !== null && a.contains(u.target) === !0) && n.value.focus();
  }
  return {
    refocusTargetEl: l,
    refocusTarget: o
  };
}
const Ml = {
  name: String
};
function mi(e = {}) {
  return (t, n, l) => {
    t[n](
      m("input", {
        class: "hidden" + (l || ""),
        ...e.value
      })
    );
  };
}
function hi(e) {
  return d(() => e.name || e.for);
}
const gi = {
  xs: 30,
  sm: 35,
  md: 40,
  lg: 50,
  xl: 60
}, bi = {
  ...Ze,
  ...$t,
  ...Ml,
  modelValue: {
    required: !0,
    default: null
  },
  val: {},
  trueValue: { default: !0 },
  falseValue: { default: !1 },
  indeterminateValue: { default: null },
  checkedIcon: String,
  uncheckedIcon: String,
  indeterminateIcon: String,
  toggleOrder: {
    type: String,
    validator: (e) => e === "tf" || e === "ft"
  },
  toggleIndeterminate: Boolean,
  label: String,
  leftLabel: Boolean,
  color: String,
  keepColor: Boolean,
  dense: Boolean,
  disable: Boolean,
  tabindex: [String, Number]
}, pi = ["update:modelValue"];
function yi(e, t) {
  const { props: n, slots: l, emit: o, proxy: u } = le(), { $q: a } = u, s = Je(n, a), f = P(null), { refocusTargetEl: h, refocusTarget: r } = vi(n, f), b = Lt(n, gi), v = d(
    () => n.val !== void 0 && Array.isArray(n.modelValue)
  ), c = d(() => {
    const z = qe(n.val);
    return v.value === !0 ? n.modelValue.findIndex((X) => qe(X) === z) : -1;
  }), g = d(() => v.value === !0 ? c.value > -1 : qe(n.modelValue) === qe(n.trueValue)), B = d(() => v.value === !0 ? c.value === -1 : qe(n.modelValue) === qe(n.falseValue)), y = d(
    () => g.value === !1 && B.value === !1
  ), w = d(() => n.disable === !0 ? -1 : n.tabindex || 0), x = d(
    () => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === !0 ? " disabled" : "") + (s.value === !0 ? ` q-${e}--dark` : "") + (n.dense === !0 ? ` q-${e}--dense` : "") + (n.leftLabel === !0 ? " reverse" : "")
  ), p = d(() => {
    const z = g.value === !0 ? "truthy" : B.value === !0 ? "falsy" : "indet", X = n.color !== void 0 && (n.keepColor === !0 || (e === "toggle" ? g.value === !0 : B.value !== !0)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${z}${X}`;
  }), k = d(() => {
    const z = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(z, {
      // see https://vuejs.org/guide/extras/render-function.html#creating-vnodes (.prop)
      ".checked": g.value,
      "^checked": g.value === !0 ? "checked" : void 0,
      name: n.name,
      value: v.value === !0 ? n.val : n.trueValue
    }), z;
  }), S = mi(k), R = d(() => {
    const z = {
      tabindex: w.value,
      role: e === "toggle" ? "switch" : "checkbox",
      "aria-label": n.label,
      "aria-checked": y.value === !0 ? "mixed" : g.value === !0 ? "true" : "false"
    };
    return n.disable === !0 && (z["aria-disabled"] = "true"), z;
  });
  function L(z) {
    z !== void 0 && (ne(z), r(z)), n.disable !== !0 && o("update:modelValue", I(), z);
  }
  function I() {
    if (v.value === !0) {
      if (g.value === !0) {
        const z = n.modelValue.slice();
        return z.splice(c.value, 1), z;
      }
      return n.modelValue.concat([n.val]);
    }
    if (g.value === !0) {
      if (n.toggleOrder !== "ft" || n.toggleIndeterminate === !1)
        return n.falseValue;
    } else if (B.value === !0) {
      if (n.toggleOrder === "ft" || n.toggleIndeterminate === !1)
        return n.trueValue;
    } else
      return n.toggleOrder !== "ft" ? n.trueValue : n.falseValue;
    return n.indeterminateValue;
  }
  function K(z) {
    (z.keyCode === 13 || z.keyCode === 32) && ne(z);
  }
  function J(z) {
    (z.keyCode === 13 || z.keyCode === 32) && L(z);
  }
  const N = t(g, y);
  return Object.assign(u, { toggle: L }), () => {
    const z = N();
    n.disable !== !0 && S(
      z,
      "unshift",
      ` q-${e}__native absolute q-ma-none q-pa-none`
    );
    const X = [
      m("div", {
        class: p.value,
        style: b.value,
        "aria-hidden": "true"
      }, z)
    ];
    h.value !== null && X.push(h.value);
    const $ = n.label !== void 0 ? Ae(l.default, [n.label]) : Se(l.default);
    return $ !== void 0 && X.push(
      m("div", {
        class: `q-${e}__label q-anchor--skip`
      }, $)
    ), m("div", {
      ref: f,
      class: x.value,
      ...R.value,
      onClick: L,
      onKeydown: K,
      onKeyup: J
    }, X);
  };
}
const wi = m("div", {
  key: "svg",
  class: "q-checkbox__bg absolute"
}, [
  m("svg", {
    class: "q-checkbox__svg fit absolute-full",
    viewBox: "0 0 24 24"
  }, [
    m("path", {
      class: "q-checkbox__truthy",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    }),
    m("path", {
      class: "q-checkbox__indet",
      d: "M4,14H20V10H4"
    })
  ])
]), Si = se({
  name: "QCheckbox",
  props: bi,
  emits: pi,
  setup(e) {
    function t(n, l) {
      const o = d(
        () => (n.value === !0 ? e.checkedIcon : l.value === !0 ? e.indeterminateIcon : e.uncheckedIcon) || null
      );
      return () => o.value !== null ? [
        m("div", {
          key: "icon",
          class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
        }, [
          m(ke, {
            class: "q-checkbox__icon",
            name: o.value
          })
        ])
      ] : [wi];
    }
    return yi("checkbox", t);
  }
}), qt = se({
  name: "QItemSection",
  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean
  },
  setup(e, { slots: t }) {
    const n = d(
      () => `q-item__section column q-item__section--${e.avatar === !0 || e.side === !0 || e.thumbnail === !0 ? "side" : "main"}` + (e.top === !0 ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === !0 ? " q-item__section--avatar" : "") + (e.thumbnail === !0 ? " q-item__section--thumbnail" : "") + (e.noWrap === !0 ? " q-item__section--nowrap" : "")
    );
    return () => m("div", { class: n.value }, Se(t.default));
  }
}), un = se({
  name: "QItemLabel",
  props: {
    overline: Boolean,
    caption: Boolean,
    header: Boolean,
    lines: [Number, String]
  },
  setup(e, { slots: t }) {
    const n = d(() => parseInt(e.lines, 10)), l = d(
      () => "q-item__label" + (e.overline === !0 ? " q-item__label--overline text-overline" : "") + (e.caption === !0 ? " q-item__label--caption text-caption" : "") + (e.header === !0 ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "")
    ), o = d(() => e.lines !== void 0 && n.value > 1 ? {
      overflow: "hidden",
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": n.value
    } : null);
    return () => m("div", {
      style: o.value,
      class: l.value
    }, Se(t.default));
  }
}), an = se({
  name: "QItem",
  props: {
    ...Ze,
    ...$l,
    tag: {
      type: String,
      default: "div"
    },
    active: {
      type: Boolean,
      default: null
    },
    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,
    tabindex: [String, Number],
    focused: Boolean,
    manualFocus: Boolean
  },
  emits: ["click", "keyup"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: { $q: l } } = le(), o = Je(e, l), { hasLink: u, linkAttrs: a, linkClass: s, linkTag: f, navigateOnClick: h } = Ll(), r = P(null), b = P(null), v = d(
      () => e.clickable === !0 || u.value === !0 || e.tag === "label"
    ), c = d(
      () => e.disable !== !0 && v.value === !0
    ), g = d(
      () => "q-item q-item-type row no-wrap" + (e.dense === !0 ? " q-item--dense" : "") + (o.value === !0 ? " q-item--dark" : "") + (u.value === !0 && e.active === null ? s.value : e.active === !0 ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === !0 ? " disabled" : "") + (c.value === !0 ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === !0 ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === !0 ? " q-manual-focusable--focused" : "") : "")
    ), B = d(() => e.insetLevel === void 0 ? null : {
      ["padding" + (l.lang.rtl === !0 ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px"
    });
    function y(p) {
      c.value === !0 && (b.value !== null && (p.qKeyEvent !== !0 && document.activeElement === r.value ? b.value.focus() : document.activeElement === b.value && r.value.focus()), h(p));
    }
    function w(p) {
      if (c.value === !0 && Fe(p, 13) === !0) {
        ne(p), p.qKeyEvent = !0;
        const k = new MouseEvent("click", p);
        k.qKeyEvent = !0, r.value.dispatchEvent(k);
      }
      n("keyup", p);
    }
    function x() {
      const p = $o(t.default, []);
      return c.value === !0 && p.unshift(
        m("div", { class: "q-focus-helper", tabindex: -1, ref: b })
      ), p;
    }
    return () => {
      const p = {
        ref: r,
        class: g.value,
        style: B.value,
        role: "listitem",
        onClick: y,
        onKeyup: w
      };
      return c.value === !0 ? (p.tabindex = e.tabindex || "0", Object.assign(p, a.value)) : v.value === !0 && (p["aria-disabled"] = "true"), m(
        f.value,
        p,
        x()
      );
    };
  }
});
function gn(e, t, n, l) {
  return Object.defineProperty(e, t, {
    get: n,
    set: l,
    enumerable: !0
  }), e;
}
const _t = P(
  !1
);
let bn;
function xi(e, t) {
  const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return {
    browser: n[5] || n[3] || n[1] || "",
    version: n[2] || n[4] || "0",
    versionNumber: n[4] || n[2] || "0",
    platform: t[0] || ""
  };
}
function ki(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
const Ol = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function Ci(e) {
  bn = { is: { ...e } }, delete e.mac, delete e.desktop;
  const t = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
  Object.assign(e, {
    mobile: !0,
    ios: !0,
    platform: t,
    [t]: !0
  });
}
function qi(e) {
  const t = e.toLowerCase(), n = ki(t), l = xi(t, n), o = {};
  l.browser && (o[l.browser] = !0, o.version = l.version, o.versionNumber = parseInt(l.versionNumber, 10)), l.platform && (o[l.platform] = !0);
  const u = o.android || o.ios || o.bb || o.blackberry || o.ipad || o.iphone || o.ipod || o.kindle || o.playbook || o.silk || o["windows phone"];
  return u === !0 || t.indexOf("mobile") > -1 ? (o.mobile = !0, o.edga || o.edgios ? (o.edge = !0, l.browser = "edge") : o.crios ? (o.chrome = !0, l.browser = "chrome") : o.fxios && (o.firefox = !0, l.browser = "firefox")) : o.desktop = !0, (o.ipod || o.ipad || o.iphone) && (o.ios = !0), o["windows phone"] && (o.winphone = !0, delete o["windows phone"]), (o.chrome || o.opr || o.safari || o.vivaldi || o.mobile === !0 && o.ios !== !0 && u !== !0) && (o.webkit = !0), o.edg && (l.browser = "edgechromium", o.edgeChromium = !0), (o.safari && o.blackberry || o.bb) && (l.browser = "blackberry", o.blackberry = !0), o.safari && o.playbook && (l.browser = "playbook", o.playbook = !0), o.opr && (l.browser = "opera", o.opera = !0), o.safari && o.android && (l.browser = "android", o.android = !0), o.safari && o.kindle && (l.browser = "kindle", o.kindle = !0), o.safari && o.silk && (l.browser = "silk", o.silk = !0), o.vivaldi && (l.browser = "vivaldi", o.vivaldi = !0), o.name = l.browser, o.platform = l.platform, t.indexOf("electron") > -1 ? o.electron = !0 : document.location.href.indexOf("-extension://") > -1 ? o.bex = !0 : (window.Capacitor !== void 0 ? (o.capacitor = !0, o.nativeMobile = !0, o.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (o.cordova = !0, o.nativeMobile = !0, o.nativeMobileWrapper = "cordova"), Ol === !0 && o.mac === !0 && (o.desktop === !0 && o.safari === !0 || o.nativeMobile === !0 && o.android !== !0 && o.ios !== !0 && o.ipad !== !0) && Ci(o)), o;
}
const Un = navigator.userAgent || navigator.vendor || window.opera, _i = {
  has: {
    touch: !1,
    webStorage: !1
  },
  within: { iframe: !1 }
}, re = {
  userAgent: Un,
  is: qi(Un),
  has: {
    touch: Ol
  },
  within: {
    iframe: window.self !== window.top
  }
}, rn = {
  install(e) {
    const { $q: t } = e;
    _t.value === !0 ? (e.onSSRHydrated.push(() => {
      Object.assign(t.platform, re), _t.value = !1, bn = void 0;
    }), t.platform = wo(this)) : t.platform = this;
  }
};
{
  let e;
  gn(re.has, "webStorage", () => {
    if (e !== void 0)
      return e;
    try {
      if (window.localStorage)
        return e = !0, !0;
    } catch {
    }
    return e = !1, !1;
  }), re.is.ios === !0 && window.navigator.vendor.toLowerCase().indexOf("apple"), _t.value === !0 ? Object.assign(rn, re, bn, _i) : Object.assign(rn, re);
}
function Vi({ validate: e, resetValidation: t, requiresQForm: n }) {
  const l = So(Rl, !1);
  if (l !== !1) {
    const { props: o, proxy: u } = le();
    Object.assign(u, { validate: e, resetValidation: t }), Z(() => o.disable, (a) => {
      a === !0 ? (typeof t == "function" && t(), l.unbindComponent(u)) : l.bindComponent(u);
    }), dt(() => {
      o.disable !== !0 && l.bindComponent(u);
    }), he(() => {
      o.disable !== !0 && l.unbindComponent(u);
    });
  } else
    n === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const Xn = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, Yn = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, Gn = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, pt = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, yt = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, Kt = {
  date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
  time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
  fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
  timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
  // -- RFC 5322 --
  // -- Added in v2.6.6 --
  // This is a basic helper validation.
  // For something more complex (like RFC 822) you should write and use your own rule.
  // We won't be accepting PRs to enhance the one below because of the reason above.
  // eslint-disable-next-line
  email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),
  hexColor: (e) => Xn.test(e),
  hexaColor: (e) => Yn.test(e),
  hexOrHexaColor: (e) => Gn.test(e),
  rgbColor: (e) => pt.test(e),
  rgbaColor: (e) => yt.test(e),
  rgbOrRgbaColor: (e) => pt.test(e) || yt.test(e),
  hexOrRgbColor: (e) => Xn.test(e) || pt.test(e),
  hexaOrRgbaColor: (e) => Yn.test(e) || yt.test(e),
  anyColor: (e) => Gn.test(e) || pt.test(e) || yt.test(e)
};
function Pl(e, t = 250, n) {
  let l = null;
  function o() {
    const u = arguments, a = () => {
      l = null, n !== !0 && e.apply(this, u);
    };
    l !== null ? clearTimeout(l) : n === !0 && e.apply(this, u), l = setTimeout(a, t);
  }
  return o.cancel = () => {
    l !== null && clearTimeout(l);
  }, o;
}
const Ei = [!0, !1, "ondemand"], Bi = {
  modelValue: {},
  error: {
    type: Boolean,
    default: null
  },
  errorMessage: String,
  noErrorIcon: Boolean,
  rules: Array,
  reactiveRules: Boolean,
  lazyRules: {
    type: [Boolean, String],
    validator: (e) => Ei.includes(e)
  }
};
function Ti(e, t) {
  const { props: n, proxy: l } = le(), o = P(!1), u = P(null), a = P(null);
  Vi({ validate: g, resetValidation: c });
  let s = 0, f;
  const h = d(
    () => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0
  ), r = d(
    () => n.disable !== !0 && h.value === !0
  ), b = d(
    () => n.error === !0 || o.value === !0
  ), v = d(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : u.value);
  Z(() => n.modelValue, () => {
    B();
  }), Z(() => n.reactiveRules, (w) => {
    w === !0 ? f === void 0 && (f = Z(() => n.rules, () => {
      B(!0);
    })) : f !== void 0 && (f(), f = void 0);
  }, { immediate: !0 }), Z(e, (w) => {
    w === !0 ? a.value === null && (a.value = !1) : a.value === !1 && (a.value = !0, r.value === !0 && n.lazyRules !== "ondemand" && t.value === !1 && y());
  });
  function c() {
    s++, t.value = !1, a.value = null, o.value = !1, u.value = null, y.cancel();
  }
  function g(w = n.modelValue) {
    if (r.value !== !0)
      return !0;
    const x = ++s, p = t.value !== !0 ? () => {
      a.value = !0;
    } : () => {
    }, k = (R, L) => {
      R === !0 && p(), o.value = R, u.value = L || null, t.value = !1;
    }, S = [];
    for (let R = 0; R < n.rules.length; R++) {
      const L = n.rules[R];
      let I;
      if (typeof L == "function" ? I = L(w, Kt) : typeof L == "string" && Kt[L] !== void 0 && (I = Kt[L](w)), I === !1 || typeof I == "string")
        return k(!0, I), !1;
      I !== !0 && I !== void 0 && S.push(I);
    }
    return S.length === 0 ? (k(!1), !0) : (t.value = !0, Promise.all(S).then(
      (R) => {
        if (R === void 0 || Array.isArray(R) === !1 || R.length === 0)
          return x === s && k(!1), !0;
        const L = R.find((I) => I === !1 || typeof I == "string");
        return x === s && k(L !== void 0, L), L === void 0;
      },
      (R) => (x === s && (console.error(R), k(!0)), !1)
    ));
  }
  function B(w) {
    r.value === !0 && n.lazyRules !== "ondemand" && (a.value === !0 || n.lazyRules !== !0 && w !== !0) && y();
  }
  const y = Pl(g, 0);
  return he(() => {
    f !== void 0 && f(), y.cancel();
  }), Object.assign(l, { resetValidation: c, validate: g }), gn(l, "hasError", () => b.value), {
    isDirtyModel: a,
    hasRules: h,
    hasError: b,
    errorMessage: v,
    validate: g,
    resetValidation: c
  };
}
const Zn = /^on[A-Z]/;
function $i(e, t) {
  const n = {
    listeners: P({}),
    attributes: P({})
  };
  function l() {
    const o = {}, u = {};
    for (const a in e)
      a !== "class" && a !== "style" && Zn.test(a) === !1 && (o[a] = e[a]);
    for (const a in t.props)
      Zn.test(a) === !0 && (u[a] = t.props[a]);
    n.attributes.value = o, n.listeners.value = u;
  }
  return yl(l), l(), n;
}
let Qt, wt = 0;
const ie = new Array(256);
for (let e = 0; e < 256; e++)
  ie[e] = (e + 256).toString(16).substring(1);
const Li = (() => {
  const e = typeof crypto < "u" ? crypto : typeof window < "u" ? window.crypto || window.msCrypto : void 0;
  if (e !== void 0) {
    if (e.randomBytes !== void 0)
      return e.randomBytes;
    if (e.getRandomValues !== void 0)
      return (t) => {
        const n = new Uint8Array(t);
        return e.getRandomValues(n), n;
      };
  }
  return (t) => {
    const n = [];
    for (let l = t; l > 0; l--)
      n.push(Math.floor(Math.random() * 256));
    return n;
  };
})(), Jn = 4096;
function Ai() {
  (Qt === void 0 || wt + 16 > Jn) && (wt = 0, Qt = Li(Jn));
  const e = Array.prototype.slice.call(Qt, wt, wt += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, ie[e[0]] + ie[e[1]] + ie[e[2]] + ie[e[3]] + "-" + ie[e[4]] + ie[e[5]] + "-" + ie[e[6]] + ie[e[7]] + "-" + ie[e[8]] + ie[e[9]] + "-" + ie[e[10]] + ie[e[11]] + ie[e[12]] + ie[e[13]] + ie[e[14]] + ie[e[15]];
}
function sn(e) {
  return e === void 0 ? `f_${Ai()}` : e;
}
function cn(e) {
  return e != null && ("" + e).length !== 0;
}
const pn = {
  ...Ze,
  ...Bi,
  label: String,
  stackLabel: Boolean,
  hint: String,
  hideHint: Boolean,
  prefix: String,
  suffix: String,
  labelColor: String,
  color: String,
  bgColor: String,
  filled: Boolean,
  outlined: Boolean,
  borderless: Boolean,
  standout: [Boolean, String],
  square: Boolean,
  loading: Boolean,
  labelSlot: Boolean,
  bottomSlots: Boolean,
  hideBottomSpace: Boolean,
  rounded: Boolean,
  dense: Boolean,
  itemAligned: Boolean,
  counter: Boolean,
  clearable: Boolean,
  clearIcon: String,
  disable: Boolean,
  readonly: Boolean,
  autofocus: Boolean,
  for: String,
  maxlength: [Number, String]
}, Fl = ["update:modelValue", "clear", "focus", "blur", "popupShow", "popupHide"];
function zl() {
  const { props: e, attrs: t, proxy: n, vnode: l } = le();
  return {
    isDark: Je(e, n.$q),
    editable: d(
      () => e.disable !== !0 && e.readonly !== !0
    ),
    innerLoading: P(!1),
    focused: P(!1),
    hasPopupOpen: !1,
    splitAttrs: $i(t, l),
    targetUid: P(sn(e.for)),
    rootRef: P(null),
    targetRef: P(null),
    controlRef: P(null)
    /**
         * user supplied additionals:
    
         * innerValue - computed
         * floatingLabel - computed
         * inputRef - computed
    
         * fieldClass - computed
         * hasShadow - computed
    
         * controlEvents - Object with fn(e)
    
         * getControl - fn
         * getInnerAppend - fn
         * getControlChild - fn
         * getShadowControl - fn
         * showPopup - fn
         */
  };
}
function Hl(e) {
  const { props: t, emit: n, slots: l, attrs: o, proxy: u } = le(), { $q: a } = u;
  let s = null;
  e.hasValue === void 0 && (e.hasValue = d(() => cn(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (T) => {
    n("update:modelValue", T);
  }), e.controlEvents === void 0 && (e.controlEvents = {
    onFocusin: K,
    onFocusout: J
  }), Object.assign(e, {
    clearValue: N,
    onControlFocusin: K,
    onControlFocusout: J,
    focus: L
  }), e.computedCounter === void 0 && (e.computedCounter = d(() => {
    if (t.counter !== !1) {
      const T = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === !0 ? t.modelValue.length : 0, j = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return T + (j !== void 0 ? " / " + j : "");
    }
  }));
  const {
    isDirtyModel: f,
    hasRules: h,
    hasError: r,
    errorMessage: b,
    resetValidation: v
  } = Ti(e.focused, e.innerLoading), c = e.floatingLabel !== void 0 ? d(() => t.stackLabel === !0 || e.focused.value === !0 || e.floatingLabel.value === !0) : d(() => t.stackLabel === !0 || e.focused.value === !0 || e.hasValue.value === !0), g = d(
    () => t.bottomSlots === !0 || t.hint !== void 0 || h.value === !0 || t.counter === !0 || t.error !== null
  ), B = d(() => t.filled === !0 ? "filled" : t.outlined === !0 ? "outlined" : t.borderless === !0 ? "borderless" : t.standout ? "standout" : "standard"), y = d(
    () => `q-field row no-wrap items-start q-field--${B.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === !0 ? " q-field--rounded" : "") + (t.square === !0 ? " q-field--square" : "") + (c.value === !0 ? " q-field--float" : "") + (x.value === !0 ? " q-field--labeled" : "") + (t.dense === !0 ? " q-field--dense" : "") + (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === !0 ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === !0 ? " q-field--focused" : "") + (r.value === !0 ? " q-field--error" : "") + (r.value === !0 || e.focused.value === !0 ? " q-field--highlighted" : "") + (t.hideBottomSpace !== !0 && g.value === !0 ? " q-field--with-bottom" : "") + (t.disable === !0 ? " q-field--disabled" : t.readonly === !0 ? " q-field--readonly" : "")
  ), w = d(
    () => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (r.value === !0 ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === !0 ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")
  ), x = d(
    () => t.labelSlot === !0 || t.label !== void 0
  ), p = d(
    () => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && r.value !== !0 ? ` text-${t.labelColor}` : "")
  ), k = d(() => ({
    id: e.targetUid.value,
    editable: e.editable.value,
    focused: e.focused.value,
    floatingLabel: c.value,
    modelValue: t.modelValue,
    emitValue: e.emitValue
  })), S = d(() => {
    const T = {
      for: e.targetUid.value
    };
    return t.disable === !0 ? T["aria-disabled"] = "true" : t.readonly === !0 && (T["aria-readonly"] = "true"), T;
  });
  Z(() => t.for, (T) => {
    e.targetUid.value = sn(T);
  });
  function R() {
    const T = document.activeElement;
    let j = e.targetRef !== void 0 && e.targetRef.value;
    j && (T === null || T.id !== e.targetUid.value) && (j.hasAttribute("tabindex") === !0 || (j = j.querySelector("[tabindex]")), j && j !== T && j.focus({ preventScroll: !0 }));
  }
  function L() {
    At(R);
  }
  function I() {
    ai(R);
    const T = document.activeElement;
    T !== null && e.rootRef.value.contains(T) && T.blur();
  }
  function K(T) {
    s !== null && (clearTimeout(s), s = null), e.editable.value === !0 && e.focused.value === !1 && (e.focused.value = !0, n("focus", T));
  }
  function J(T, j) {
    s !== null && clearTimeout(s), s = setTimeout(() => {
      s = null, !(document.hasFocus() === !0 && (e.hasPopupOpen === !0 || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== !1)) && (e.focused.value === !0 && (e.focused.value = !1, n("blur", T)), j !== void 0 && j());
    });
  }
  function N(T) {
    ne(T), a.platform.is.mobile !== !0 ? (e.targetRef !== void 0 && e.targetRef.value || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === !0 && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), n("update:modelValue", null), n("clear", t.modelValue), de(() => {
      v(), a.platform.is.mobile !== !0 && (f.value = !1);
    });
  }
  function z() {
    const T = [];
    return l.prepend !== void 0 && T.push(
      m("div", {
        class: "q-field__prepend q-field__marginal row no-wrap items-center",
        key: "prepend",
        onClick: we
      }, l.prepend())
    ), T.push(
      m("div", {
        class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
      }, X())
    ), r.value === !0 && t.noErrorIcon === !1 && T.push(
      W("error", [
        m(ke, { name: a.iconSet.field.error, color: "negative" })
      ])
    ), t.loading === !0 || e.innerLoading.value === !0 ? T.push(
      W(
        "inner-loading-append",
        l.loading !== void 0 ? l.loading() : [m(kl, { color: t.color })]
      )
    ) : t.clearable === !0 && e.hasValue.value === !0 && e.editable.value === !0 && T.push(
      W("inner-clearable-append", [
        m(ke, {
          class: "q-field__focusable-action",
          tag: "button",
          name: t.clearIcon || a.iconSet.field.clear,
          tabindex: 0,
          type: "button",
          "aria-hidden": null,
          role: null,
          onClick: N
        })
      ])
    ), l.append !== void 0 && T.push(
      m("div", {
        class: "q-field__append q-field__marginal row no-wrap items-center",
        key: "append",
        onClick: we
      }, l.append())
    ), e.getInnerAppend !== void 0 && T.push(
      W("inner-append", e.getInnerAppend())
    ), e.getControlChild !== void 0 && T.push(
      e.getControlChild()
    ), T;
  }
  function X() {
    const T = [];
    return t.prefix !== void 0 && t.prefix !== null && T.push(
      m("div", {
        class: "q-field__prefix no-pointer-events row items-center"
      }, t.prefix)
    ), e.getShadowControl !== void 0 && e.hasShadow.value === !0 && T.push(
      e.getShadowControl()
    ), e.getControl !== void 0 ? T.push(e.getControl()) : l.rawControl !== void 0 ? T.push(l.rawControl()) : l.control !== void 0 && T.push(
      m("div", {
        ref: e.targetRef,
        class: "q-field__native row",
        tabindex: -1,
        ...e.splitAttrs.attributes.value,
        "data-autofocus": t.autofocus === !0 || void 0
      }, l.control(k.value))
    ), x.value === !0 && T.push(
      m("div", {
        class: p.value
      }, Se(l.label, t.label))
    ), t.suffix !== void 0 && t.suffix !== null && T.push(
      m("div", {
        class: "q-field__suffix no-pointer-events row items-center"
      }, t.suffix)
    ), T.concat(Se(l.default));
  }
  function $() {
    let T, j;
    r.value === !0 ? b.value !== null ? (T = [m("div", { role: "alert" }, b.value)], j = `q--slot-error-${b.value}`) : (T = Se(l.error), j = "q--slot-error") : (t.hideHint !== !0 || e.focused.value === !0) && (t.hint !== void 0 ? (T = [m("div", t.hint)], j = `q--slot-hint-${t.hint}`) : (T = Se(l.hint), j = "q--slot-hint"));
    const ue = t.counter === !0 || l.counter !== void 0;
    if (t.hideBottomSpace === !0 && ue === !1 && T === void 0)
      return;
    const q = m("div", {
      key: j,
      class: "q-field__messages col"
    }, T);
    return m("div", {
      class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== !0 ? "animated" : "stale"),
      onClick: we
    }, [
      t.hideBottomSpace === !0 ? q : m(rt, { name: "q-transition--field-message" }, () => q),
      ue === !0 ? m("div", {
        class: "q-field__counter"
      }, l.counter !== void 0 ? l.counter() : e.computedCounter.value) : null
    ]);
  }
  function W(T, j) {
    return j === null ? null : m("div", {
      key: T,
      class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
    }, j);
  }
  let G = !1;
  return ct(() => {
    G = !0;
  }), mn(() => {
    G === !0 && t.autofocus === !0 && u.focus();
  }), dt(() => {
    _t.value === !0 && t.for === void 0 && (e.targetUid.value = sn()), t.autofocus === !0 && u.focus();
  }), he(() => {
    s !== null && clearTimeout(s);
  }), Object.assign(u, { focus: L, blur: I }), function() {
    const j = e.getControl === void 0 && l.control === void 0 ? {
      ...e.splitAttrs.attributes.value,
      "data-autofocus": t.autofocus === !0 || void 0,
      ...S.value
    } : S.value;
    return m("label", {
      ref: e.rootRef,
      class: [
        y.value,
        o.class
      ],
      style: o.style,
      ...j
    }, [
      l.before !== void 0 ? m("div", {
        class: "q-field__before q-field__marginal row no-wrap items-center",
        onClick: we
      }, l.before()) : null,
      m("div", {
        class: "q-field__inner relative-position col self-stretch"
      }, [
        m("div", {
          ref: e.controlRef,
          class: w.value,
          tabindex: -1,
          ...e.controlEvents
        }, z()),
        g.value === !0 ? $() : null
      ]),
      l.after !== void 0 ? m("div", {
        class: "q-field__after q-field__marginal row no-wrap items-center",
        onClick: we
      }, l.after()) : null
    ]);
  };
}
const Ri = se({
  name: "QField",
  inheritAttrs: !1,
  props: pn,
  emits: Fl,
  setup() {
    return Hl(zl());
  }
}), Mi = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
}, Oi = se({
  name: "QChip",
  props: {
    ...Ze,
    ...$t,
    dense: Boolean,
    icon: String,
    iconRight: String,
    iconRemove: String,
    iconSelected: String,
    label: [String, Number],
    color: String,
    textColor: String,
    modelValue: {
      type: Boolean,
      default: !0
    },
    selected: {
      type: Boolean,
      default: null
    },
    square: Boolean,
    outline: Boolean,
    clickable: Boolean,
    removable: Boolean,
    removeAriaLabel: String,
    tabindex: [String, Number],
    disable: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: !0
    }
  },
  emits: ["update:modelValue", "update:selected", "remove", "click"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: { $q: l } } = le(), o = Je(e, l), u = Lt(e, Mi), a = d(() => e.selected === !0 || e.icon !== void 0), s = d(() => e.selected === !0 ? e.iconSelected || l.iconSet.chip.selected : e.icon), f = d(() => e.iconRemove || l.iconSet.chip.remove), h = d(
      () => e.disable === !1 && (e.clickable === !0 || e.selected !== null)
    ), r = d(() => {
      const y = e.outline === !0 && e.color || e.textColor;
      return "q-chip row inline no-wrap items-center" + (e.outline === !1 && e.color !== void 0 ? ` bg-${e.color}` : "") + (y ? ` text-${y} q-chip--colored` : "") + (e.disable === !0 ? " disabled" : "") + (e.dense === !0 ? " q-chip--dense" : "") + (e.outline === !0 ? " q-chip--outline" : "") + (e.selected === !0 ? " q-chip--selected" : "") + (h.value === !0 ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === !0 ? " q-chip--square" : "") + (o.value === !0 ? " q-chip--dark q-dark" : "");
    }), b = d(() => {
      const y = e.disable === !0 ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, w = {
        ...y,
        role: "button",
        "aria-hidden": "false",
        "aria-label": e.removeAriaLabel || l.lang.label.remove
      };
      return { chip: y, remove: w };
    });
    function v(y) {
      y.keyCode === 13 && c(y);
    }
    function c(y) {
      e.disable || (n("update:selected", !e.selected), n("click", y));
    }
    function g(y) {
      (y.keyCode === void 0 || y.keyCode === 13) && (ne(y), e.disable === !1 && (n("update:modelValue", !1), n("remove")));
    }
    function B() {
      const y = [];
      h.value === !0 && y.push(
        m("div", { class: "q-focus-helper" })
      ), a.value === !0 && y.push(
        m(ke, {
          class: "q-chip__icon q-chip__icon--left",
          name: s.value
        })
      );
      const w = e.label !== void 0 ? [m("div", { class: "ellipsis" }, [e.label])] : void 0;
      return y.push(
        m("div", {
          class: "q-chip__content col row no-wrap items-center q-anchor--skip"
        }, Lo(t.default, w))
      ), e.iconRight && y.push(
        m(ke, {
          class: "q-chip__icon q-chip__icon--right",
          name: e.iconRight
        })
      ), e.removable === !0 && y.push(
        m(ke, {
          class: "q-chip__icon q-chip__icon--remove cursor-pointer",
          name: f.value,
          ...b.value.remove,
          onClick: g,
          onKeyup: g
        })
      ), y;
    }
    return () => {
      if (e.modelValue === !1)
        return;
      const y = {
        class: r.value,
        style: u.value
      };
      return h.value === !0 && Object.assign(
        y,
        b.value.chip,
        { onClick: c, onKeyup: v }
      ), Ao(
        "div",
        y,
        B(),
        "ripple",
        e.ripple !== !1 && e.disable !== !0,
        () => [[El, e.ripple]]
      );
    };
  }
});
function Pi() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), rn.is.mobile !== !0 && e.addRange(document.createRange()));
  } else
    document.selection !== void 0 && document.selection.empty();
}
const Fi = {
  target: {
    default: !0
  },
  noParentEvent: Boolean,
  contextMenu: Boolean
};
function zi({
  showing: e,
  avoidEmit: t,
  // required for QPopupProxy (true)
  configureAnchorEl: n
  // optional
}) {
  const { props: l, proxy: o, emit: u } = le(), a = P(null);
  let s = null;
  function f(c) {
    return a.value === null ? !1 : c === void 0 || c.touches === void 0 || c.touches.length <= 1;
  }
  const h = {};
  n === void 0 && (Object.assign(h, {
    hide(c) {
      o.hide(c);
    },
    toggle(c) {
      o.toggle(c), c.qAnchorHandled = !0;
    },
    toggleKey(c) {
      Fe(c, 13) === !0 && h.toggle(c);
    },
    contextClick(c) {
      o.hide(c), we(c), de(() => {
        o.show(c), c.qAnchorHandled = !0;
      });
    },
    prevent: we,
    mobileTouch(c) {
      if (h.mobileCleanup(c), f(c) !== !0)
        return;
      o.hide(c), a.value.classList.add("non-selectable");
      const g = c.target;
      on(h, "anchor", [
        [g, "touchmove", "mobileCleanup", "passive"],
        [g, "touchend", "mobileCleanup", "passive"],
        [g, "touchcancel", "mobileCleanup", "passive"],
        [a.value, "contextmenu", "prevent", "notPassive"]
      ]), s = setTimeout(() => {
        s = null, o.show(c), c.qAnchorHandled = !0;
      }, 300);
    },
    mobileCleanup(c) {
      a.value.classList.remove("non-selectable"), s !== null && (clearTimeout(s), s = null), e.value === !0 && c !== void 0 && Pi();
    }
  }), n = function(c = l.contextMenu) {
    if (l.noParentEvent === !0 || a.value === null)
      return;
    let g;
    c === !0 ? o.$q.platform.is.mobile === !0 ? g = [
      [a.value, "touchstart", "mobileTouch", "passive"]
    ] : g = [
      [a.value, "mousedown", "hide", "passive"],
      [a.value, "contextmenu", "contextClick", "notPassive"]
    ] : g = [
      [a.value, "click", "toggle", "passive"],
      [a.value, "keyup", "toggleKey", "passive"]
    ], on(h, "anchor", g);
  });
  function r() {
    _l(h, "anchor");
  }
  function b(c) {
    for (a.value = c; a.value.classList.contains("q-anchor--skip"); )
      a.value = a.value.parentNode;
    n();
  }
  function v() {
    if (l.target === !1 || l.target === "" || o.$el.parentNode === null)
      a.value = null;
    else if (l.target === !0)
      b(o.$el.parentNode);
    else {
      let c = l.target;
      if (typeof l.target == "string")
        try {
          c = document.querySelector(l.target);
        } catch {
          c = void 0;
        }
      c != null ? (a.value = c.$el || c, n()) : (a.value = null, console.error(`Anchor: target "${l.target}" not found`));
    }
  }
  return Z(() => l.contextMenu, (c) => {
    a.value !== null && (r(), n(c));
  }), Z(() => l.target, () => {
    a.value !== null && r(), v();
  }), Z(() => l.noParentEvent, (c) => {
    a.value !== null && (c === !0 ? r() : n());
  }), dt(() => {
    v(), t !== !0 && l.modelValue === !0 && a.value === null && u("update:modelValue", !1);
  }), he(() => {
    s !== null && clearTimeout(s), r();
  }), {
    anchorEl: a,
    canShow: f,
    anchorEvents: h
  };
}
function Hi(e, t) {
  const n = P(null);
  let l;
  function o(s, f) {
    const h = `${f !== void 0 ? "add" : "remove"}EventListener`, r = f !== void 0 ? f : l;
    s !== window && s[h]("scroll", r, fe.passive), window[h]("scroll", r, fe.passive), l = f;
  }
  function u() {
    n.value !== null && (o(n.value), n.value = null);
  }
  const a = Z(() => e.noParentEvent, () => {
    n.value !== null && (u(), t());
  });
  return he(a), {
    localScrollTarget: n,
    unconfigureScrollTarget: u,
    changeScrollEvent: o
  };
}
const Il = {
  modelValue: {
    type: Boolean,
    default: null
  },
  "onUpdate:modelValue": [Function, Array]
}, Dl = [
  "beforeShow",
  "show",
  "beforeHide",
  "hide"
];
function jl({
  showing: e,
  canShow: t,
  // optional
  hideOnRouteChange: n,
  // optional
  handleShow: l,
  // optional
  handleHide: o,
  // optional
  processOnMount: u
  // optional
}) {
  const a = le(), { props: s, emit: f, proxy: h } = a;
  let r;
  function b(x) {
    e.value === !0 ? g(x) : v(x);
  }
  function v(x) {
    if (s.disable === !0 || x !== void 0 && x.qAnchorHandled === !0 || t !== void 0 && t(x) !== !0)
      return;
    const p = s["onUpdate:modelValue"] !== void 0;
    p === !0 && (f("update:modelValue", !0), r = x, de(() => {
      r === x && (r = void 0);
    })), (s.modelValue === null || p === !1) && c(x);
  }
  function c(x) {
    e.value !== !0 && (e.value = !0, f("beforeShow", x), l !== void 0 ? l(x) : f("show", x));
  }
  function g(x) {
    if (s.disable === !0)
      return;
    const p = s["onUpdate:modelValue"] !== void 0;
    p === !0 && (f("update:modelValue", !1), r = x, de(() => {
      r === x && (r = void 0);
    })), (s.modelValue === null || p === !1) && B(x);
  }
  function B(x) {
    e.value !== !1 && (e.value = !1, f("beforeHide", x), o !== void 0 ? o(x) : f("hide", x));
  }
  function y(x) {
    s.disable === !0 && x === !0 ? s["onUpdate:modelValue"] !== void 0 && f("update:modelValue", !1) : x === !0 !== e.value && (x === !0 ? c : B)(r);
  }
  Z(() => s.modelValue, y), n !== void 0 && Tl(a) === !0 && Z(() => h.$route.fullPath, () => {
    n.value === !0 && e.value === !0 && g();
  }), u === !0 && dt(() => {
    y(s.modelValue);
  });
  const w = { show: v, hide: g, toggle: b };
  return Object.assign(h, w), w;
}
const el = {};
let Ii = 1, Di = document.body;
function ji(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${Ii++}` : e, el.globalNodes !== void 0) {
    const l = el.globalNodes.class;
    l !== void 0 && (n.className = l);
  }
  return Di.appendChild(n), n;
}
function Wi(e) {
  e.remove();
}
const at = [];
function Ni(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if (e.hide(t), e.$props.separateClosePopup === !0)
        return Nt(e);
    } else if (e.__qPortal === !0) {
      const n = Nt(e);
      return n !== void 0 && n.$options.name === "QPopupProxy" ? (e.hide(t), n) : e;
    }
    e = Nt(e);
  } while (e != null);
}
function Ki(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog")
      return !0;
    if (e.type.name === "QDialog" || e.type.name === "QMenu")
      return !1;
    e = e.parent;
  }
  return !1;
}
function Wl(e, t, n, l) {
  const o = P(!1), u = P(!1);
  let a = null;
  const s = {}, f = l === "dialog" && Ki(e);
  function h(b) {
    if (b === !0) {
      Qn(s), u.value = !0;
      return;
    }
    u.value = !1, o.value === !1 && (f === !1 && a === null && (a = ji(!1, l)), o.value = !0, at.push(e.proxy), ui(s));
  }
  function r(b) {
    if (u.value = !1, b !== !0)
      return;
    Qn(s), o.value = !1;
    const v = at.indexOf(e.proxy);
    v !== -1 && at.splice(v, 1), a !== null && (Wi(a), a = null);
  }
  return xo(() => {
    r(!0);
  }), e.proxy.__qPortal = !0, gn(e.proxy, "contentEl", () => t.value), {
    showPortal: h,
    hidePortal: r,
    portalIsActive: o,
    portalIsAccessible: u,
    renderPortal: () => f === !0 ? n() : o.value === !0 ? [m(ko, { to: a }, n())] : void 0
  };
}
const Nl = {
  transitionShow: {
    type: String,
    default: "fade"
  },
  transitionHide: {
    type: String,
    default: "fade"
  },
  transitionDuration: {
    type: [String, Number],
    default: 300
  }
};
function Kl(e, t = () => {
}, n = () => {
}) {
  return {
    transitionProps: d(() => {
      const l = `q-transition--${e.transitionShow || t()}`, o = `q-transition--${e.transitionHide || n()}`;
      return {
        appear: !0,
        enterFromClass: `${l}-enter-from`,
        enterActiveClass: `${l}-enter-active`,
        enterToClass: `${l}-enter-to`,
        leaveFromClass: `${o}-leave-from`,
        leaveActiveClass: `${o}-leave-active`,
        leaveToClass: `${o}-leave-to`
      };
    }),
    transitionStyle: d(() => `--q-transition-duration: ${e.transitionDuration}ms`)
  };
}
function Ql() {
  let e;
  const t = le();
  function n() {
    e = void 0;
  }
  return ct(n), he(n), {
    removeTick: n,
    registerTick(l) {
      e = l, de(() => {
        e === l && (hn(t) === !1 && e(), e = void 0);
      });
    }
  };
}
function Ul() {
  let e = null;
  const t = le();
  function n() {
    e !== null && (clearTimeout(e), e = null);
  }
  return ct(n), he(n), {
    removeTimeout: n,
    registerTimeout(l, o) {
      n(), hn(t) === !1 && (e = setTimeout(l, o));
    }
  };
}
const Qi = [null, document, document.body, document.scrollingElement, document.documentElement];
function Ui(e, t) {
  let n = jo(t);
  if (n === void 0) {
    if (e == null)
      return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return Qi.includes(n) ? window : n;
}
function Xi(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function Yi(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
let St;
function Gi() {
  if (St !== void 0)
    return St;
  const e = document.createElement("p"), t = document.createElement("div");
  ln(e, {
    width: "100%",
    height: "200px"
  }), ln(t, {
    position: "absolute",
    top: "0px",
    left: "0px",
    visibility: "hidden",
    width: "200px",
    height: "150px",
    overflow: "hidden"
  }), t.appendChild(e), document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let l = e.offsetWidth;
  return n === l && (l = t.clientWidth), t.remove(), St = n - l, St;
}
function Zi(e, t = !0) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? !1 : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
const Me = [];
let Ge;
function Ji(e) {
  Ge = e.keyCode === 27;
}
function eu() {
  Ge === !0 && (Ge = !1);
}
function tu(e) {
  Ge === !0 && (Ge = !1, Fe(e, 27) === !0 && Me[Me.length - 1](e));
}
function Xl(e) {
  window[e]("keydown", Ji), window[e]("blur", eu), window[e]("keyup", tu), Ge = !1;
}
function Yl(e) {
  re.is.desktop === !0 && (Me.push(e), Me.length === 1 && Xl("addEventListener"));
}
function Vt(e) {
  const t = Me.indexOf(e);
  t > -1 && (Me.splice(t, 1), Me.length === 0 && Xl("removeEventListener"));
}
const Oe = [];
function Gl(e) {
  Oe[Oe.length - 1](e);
}
function Zl(e) {
  re.is.desktop === !0 && (Oe.push(e), Oe.length === 1 && document.body.addEventListener("focusin", Gl));
}
function dn(e) {
  const t = Oe.indexOf(e);
  t > -1 && (Oe.splice(t, 1), Oe.length === 0 && document.body.removeEventListener("focusin", Gl));
}
const { notPassiveCapture: Et } = fe, Pe = [];
function Bt(e) {
  const t = e.target;
  if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events") === !0)
    return;
  let n = at.length - 1;
  for (; n >= 0; ) {
    const l = at[n].$;
    if (l.type.name === "QTooltip") {
      n--;
      continue;
    }
    if (l.type.name !== "QDialog")
      break;
    if (l.props.seamless !== !0)
      return;
    n--;
  }
  for (let l = Pe.length - 1; l >= 0; l--) {
    const o = Pe[l];
    if ((o.anchorEl.value === null || o.anchorEl.value.contains(t) === !1) && (t === document.body || o.innerRef.value !== null && o.innerRef.value.contains(t) === !1))
      e.qClickOutside = !0, o.onClickOutside(e);
    else
      return;
  }
}
function nu(e) {
  Pe.push(e), Pe.length === 1 && (document.addEventListener("mousedown", Bt, Et), document.addEventListener("touchstart", Bt, Et));
}
function tl(e) {
  const t = Pe.findIndex((n) => n === e);
  t > -1 && (Pe.splice(t, 1), Pe.length === 0 && (document.removeEventListener("mousedown", Bt, Et), document.removeEventListener("touchstart", Bt, Et)));
}
let nl, ll;
function ol(e) {
  const t = e.split(" ");
  return t.length !== 2 ? !1 : ["top", "center", "bottom"].includes(t[0]) !== !0 ? (console.error("Anchor/Self position must start with one of top/center/bottom"), !1) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== !0 ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), !1) : !0;
}
function lu(e) {
  return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : !0;
}
const fn = {
  "start#ltr": "left",
  "start#rtl": "right",
  "end#ltr": "right",
  "end#rtl": "left"
};
["left", "middle", "right"].forEach((e) => {
  fn[`${e}#ltr`] = e, fn[`${e}#rtl`] = e;
});
function il(e, t) {
  const n = e.split(" ");
  return {
    vertical: n[0],
    horizontal: fn[`${n[1]}#${t === !0 ? "rtl" : "ltr"}`]
  };
}
function ou(e, t) {
  let { top: n, left: l, right: o, bottom: u, width: a, height: s } = e.getBoundingClientRect();
  return t !== void 0 && (n -= t[1], l -= t[0], u += t[1], o += t[0], a += t[0], s += t[1]), {
    top: n,
    bottom: u,
    height: s,
    left: l,
    right: o,
    width: a,
    middle: l + (o - l) / 2,
    center: n + (u - n) / 2
  };
}
function iu(e, t, n) {
  let { top: l, left: o } = e.getBoundingClientRect();
  return l += t.top, o += t.left, n !== void 0 && (l += n[1], o += n[0]), {
    top: l,
    bottom: l + 1,
    height: 1,
    left: o,
    right: o + 1,
    width: 1,
    middle: o,
    center: l
  };
}
function uu(e, t) {
  return {
    top: 0,
    center: t / 2,
    bottom: t,
    left: 0,
    middle: e / 2,
    right: e
  };
}
function ul(e, t, n, l) {
  return {
    top: e[n.vertical] - t[l.vertical],
    left: e[n.horizontal] - t[l.horizontal]
  };
}
function Jl(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5)
    return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      Jl(e, t + 1);
    }, 10);
    return;
  }
  const {
    targetEl: n,
    offset: l,
    anchorEl: o,
    anchorOrigin: u,
    selfOrigin: a,
    absoluteOffset: s,
    fit: f,
    cover: h,
    maxHeight: r,
    maxWidth: b
  } = e;
  if (re.is.ios === !0 && window.visualViewport !== void 0) {
    const R = document.body.style, { offsetLeft: L, offsetTop: I } = window.visualViewport;
    L !== nl && (R.setProperty("--q-pe-left", L + "px"), nl = L), I !== ll && (R.setProperty("--q-pe-top", I + "px"), ll = I);
  }
  const { scrollLeft: v, scrollTop: c } = n, g = s === void 0 ? ou(o, h === !0 ? [0, 0] : l) : iu(o, s, l);
  Object.assign(n.style, {
    top: 0,
    left: 0,
    minWidth: null,
    minHeight: null,
    maxWidth: b || "100vw",
    maxHeight: r || "100vh",
    visibility: "visible"
  });
  const { offsetWidth: B, offsetHeight: y } = n, { elWidth: w, elHeight: x } = f === !0 || h === !0 ? { elWidth: Math.max(g.width, B), elHeight: h === !0 ? Math.max(g.height, y) : y } : { elWidth: B, elHeight: y };
  let p = { maxWidth: b, maxHeight: r };
  (f === !0 || h === !0) && (p.minWidth = g.width + "px", h === !0 && (p.minHeight = g.height + "px")), Object.assign(n.style, p);
  const k = uu(w, x);
  let S = ul(g, k, u, a);
  if (s === void 0 || l === void 0)
    Ut(S, g, k, u, a);
  else {
    const { top: R, left: L } = S;
    Ut(S, g, k, u, a);
    let I = !1;
    if (S.top !== R) {
      I = !0;
      const K = 2 * l[1];
      g.center = g.top -= K, g.bottom -= K + 2;
    }
    if (S.left !== L) {
      I = !0;
      const K = 2 * l[0];
      g.middle = g.left -= K, g.right -= K + 2;
    }
    I === !0 && (S = ul(g, k, u, a), Ut(S, g, k, u, a));
  }
  p = {
    top: S.top + "px",
    left: S.left + "px"
  }, S.maxHeight !== void 0 && (p.maxHeight = S.maxHeight + "px", g.height > S.maxHeight && (p.minHeight = p.maxHeight)), S.maxWidth !== void 0 && (p.maxWidth = S.maxWidth + "px", g.width > S.maxWidth && (p.minWidth = p.maxWidth)), Object.assign(n.style, p), n.scrollTop !== c && (n.scrollTop = c), n.scrollLeft !== v && (n.scrollLeft = v);
}
function Ut(e, t, n, l, o) {
  const u = n.bottom, a = n.right, s = Gi(), f = window.innerHeight - s, h = document.body.clientWidth;
  if (e.top < 0 || e.top + u > f)
    if (o.vertical === "center")
      e.top = t[l.vertical] > f / 2 ? Math.max(0, f - u) : 0, e.maxHeight = Math.min(u, f);
    else if (t[l.vertical] > f / 2) {
      const r = Math.min(
        f,
        l.vertical === "center" ? t.center : l.vertical === o.vertical ? t.bottom : t.top
      );
      e.maxHeight = Math.min(u, r), e.top = Math.max(0, r - u);
    } else
      e.top = Math.max(
        0,
        l.vertical === "center" ? t.center : l.vertical === o.vertical ? t.top : t.bottom
      ), e.maxHeight = Math.min(u, f - e.top);
  if (e.left < 0 || e.left + a > h)
    if (e.maxWidth = Math.min(a, h), o.horizontal === "middle")
      e.left = t[l.horizontal] > h / 2 ? Math.max(0, h - a) : 0;
    else if (t[l.horizontal] > h / 2) {
      const r = Math.min(
        h,
        l.horizontal === "middle" ? t.middle : l.horizontal === o.horizontal ? t.right : t.left
      );
      e.maxWidth = Math.min(a, r), e.left = Math.max(0, r - e.maxWidth);
    } else
      e.left = Math.max(
        0,
        l.horizontal === "middle" ? t.middle : l.horizontal === o.horizontal ? t.left : t.right
      ), e.maxWidth = Math.min(a, h - e.left);
}
const au = se({
  name: "QMenu",
  inheritAttrs: !1,
  props: {
    ...Fi,
    ...Il,
    ...Ze,
    ...Nl,
    persistent: Boolean,
    autoClose: Boolean,
    separateClosePopup: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    fit: Boolean,
    cover: Boolean,
    square: Boolean,
    anchor: {
      type: String,
      validator: ol
    },
    self: {
      type: String,
      validator: ol
    },
    offset: {
      type: Array,
      validator: lu
    },
    scrollTarget: {
      default: void 0
    },
    touchPosition: Boolean,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    }
  },
  emits: [
    ...Dl,
    "click",
    "escapeKey"
  ],
  setup(e, { slots: t, emit: n, attrs: l }) {
    let o = null, u, a, s;
    const f = le(), { proxy: h } = f, { $q: r } = h, b = P(null), v = P(!1), c = d(
      () => e.persistent !== !0 && e.noRouteDismiss !== !0
    ), g = Je(e, r), { registerTick: B, removeTick: y } = Ql(), { registerTimeout: w } = Ul(), { transitionProps: x, transitionStyle: p } = Kl(e), { localScrollTarget: k, changeScrollEvent: S, unconfigureScrollTarget: R } = Hi(e, H), { anchorEl: L, canShow: I } = zi({ showing: v }), { hide: K } = jl({
      showing: v,
      canShow: I,
      handleShow: q,
      handleHide: V,
      hideOnRouteChange: c,
      processOnMount: !0
    }), { showPortal: J, hidePortal: N, renderPortal: z } = Wl(f, b, ee, "menu"), X = {
      anchorEl: L,
      innerRef: b,
      onClickOutside(C) {
        if (e.persistent !== !0 && v.value === !0)
          return K(C), // always prevent touch event
          (C.type === "touchstart" || C.target.classList.contains("q-dialog__backdrop")) && ne(C), !0;
      }
    }, $ = d(
      () => il(
        e.anchor || (e.cover === !0 ? "center middle" : "bottom start"),
        r.lang.rtl
      )
    ), W = d(() => e.cover === !0 ? $.value : il(e.self || "top start", r.lang.rtl)), G = d(
      () => (e.square === !0 ? " q-menu--square" : "") + (g.value === !0 ? " q-menu--dark q-dark" : "")
    ), T = d(() => e.autoClose === !0 ? { onClick: U } : {}), j = d(
      () => v.value === !0 && e.persistent !== !0
    );
    Z(j, (C) => {
      C === !0 ? (Yl(A), nu(X)) : (Vt(A), tl(X));
    });
    function ue() {
      At(() => {
        let C = b.value;
        C && C.contains(document.activeElement) !== !0 && (C = C.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || C.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || C.querySelector("[autofocus], [data-autofocus]") || C, C.focus({ preventScroll: !0 }));
      });
    }
    function q(C) {
      if (o = e.noRefocus === !1 ? document.activeElement : null, Zl(O), J(), H(), u = void 0, C !== void 0 && (e.touchPosition || e.contextMenu)) {
        const oe = ql(C);
        if (oe.left !== void 0) {
          const { top: Ce, left: Ee } = L.value.getBoundingClientRect();
          u = { left: oe.left - Ee, top: oe.top - Ce };
        }
      }
      a === void 0 && (a = Z(
        () => r.screen.width + "|" + r.screen.height + "|" + e.self + "|" + e.anchor + "|" + r.lang.rtl,
        F
      )), e.noFocus !== !0 && document.activeElement.blur(), B(() => {
        F(), e.noFocus !== !0 && ue();
      }), w(() => {
        r.platform.is.ios === !0 && (s = e.autoClose, b.value.click()), F(), J(!0), n("show", C);
      }, e.transitionDuration);
    }
    function V(C) {
      y(), N(), M(!0), o !== null && // menu was hidden from code or ESC plugin
      (C === void 0 || C.qClickOutside !== !0) && (((C && C.type.indexOf("key") === 0 ? o.closest('[tabindex]:not([tabindex^="-"])') : void 0) || o).focus(), o = null), w(() => {
        N(!0), n("hide", C);
      }, e.transitionDuration);
    }
    function M(C) {
      u = void 0, a !== void 0 && (a(), a = void 0), (C === !0 || v.value === !0) && (dn(O), R(), tl(X), Vt(A)), C !== !0 && (o = null);
    }
    function H() {
      (L.value !== null || e.scrollTarget !== void 0) && (k.value = Ui(L.value, e.scrollTarget), S(k.value, F));
    }
    function U(C) {
      s !== !0 ? (Ni(h, C), n("click", C)) : s = !1;
    }
    function O(C) {
      j.value === !0 && e.noFocus !== !0 && Cl(b.value, C.target) !== !0 && ue();
    }
    function A(C) {
      n("escapeKey"), K(C);
    }
    function F() {
      Jl({
        targetEl: b.value,
        offset: e.offset,
        anchorEl: L.value,
        anchorOrigin: $.value,
        selfOrigin: W.value,
        absoluteOffset: u,
        fit: e.fit,
        cover: e.cover,
        maxHeight: e.maxHeight,
        maxWidth: e.maxWidth
      });
    }
    function ee() {
      return m(
        rt,
        x.value,
        () => v.value === !0 ? m("div", {
          role: "menu",
          ...l,
          ref: b,
          tabindex: -1,
          class: [
            "q-menu q-position-engine scroll" + G.value,
            l.class
          ],
          style: [
            l.style,
            p.value
          ],
          ...T.value
        }, Se(t.default)) : null
      );
    }
    return he(M), Object.assign(h, { focus: ue, updatePosition: F }), z;
  }
});
function ru(e, t, n) {
  function l() {
  }
  return he(() => {
    e.value === !0 && void 0;
  }), {
    removeFromHistory: l,
    addToHistory() {
    }
  };
}
let lt = 0, Xt, Yt, ut, Gt = !1, al, rl, sl, Le = null;
function su(e) {
  cu(e) && ne(e);
}
function cu(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop"))
    return !0;
  const t = No(e), n = e.shiftKey && !e.deltaX, l = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY), o = n || l ? e.deltaY : e.deltaX;
  for (let u = 0; u < t.length; u++) {
    const a = t[u];
    if (Zi(a, l))
      return l ? o < 0 && a.scrollTop === 0 ? !0 : o > 0 && a.scrollTop + a.clientHeight === a.scrollHeight : o < 0 && a.scrollLeft === 0 ? !0 : o > 0 && a.scrollLeft + a.clientWidth === a.scrollWidth;
  }
  return !0;
}
function cl(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function xt(e) {
  Gt !== !0 && (Gt = !0, requestAnimationFrame(() => {
    Gt = !1;
    const { height: t } = e.target, { clientHeight: n, scrollTop: l } = document.scrollingElement;
    (ut === void 0 || t !== window.innerHeight) && (ut = n - t, document.scrollingElement.scrollTop = l), l > ut && (document.scrollingElement.scrollTop -= Math.ceil((l - ut) / 8));
  }));
}
function dl(e) {
  const t = document.body, n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: l, overflowX: o } = window.getComputedStyle(t);
    Xt = Yi(window), Yt = Xi(window), al = t.style.left, rl = t.style.top, sl = window.location.href, t.style.left = `-${Xt}px`, t.style.top = `-${Yt}px`, o !== "hidden" && (o === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), l !== "hidden" && (l === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = !0, re.is.ios === !0 && (n === !0 ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", xt, fe.passiveCapture), window.visualViewport.addEventListener("scroll", xt, fe.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", cl, fe.passiveCapture));
  }
  re.is.desktop === !0 && re.is.mac === !0 && window[`${e}EventListener`]("wheel", su, fe.notPassive), e === "remove" && (re.is.ios === !0 && (n === !0 ? (window.visualViewport.removeEventListener("resize", xt, fe.passiveCapture), window.visualViewport.removeEventListener("scroll", xt, fe.passiveCapture)) : window.removeEventListener("scroll", cl, fe.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = !1, t.style.left = al, t.style.top = rl, window.location.href === sl && window.scrollTo(Xt, Yt), ut = void 0);
}
function du(e) {
  let t = "add";
  if (e === !0) {
    if (lt++, Le !== null) {
      clearTimeout(Le), Le = null;
      return;
    }
    if (lt > 1)
      return;
  } else {
    if (lt === 0 || (lt--, lt > 0))
      return;
    if (t = "remove", re.is.ios === !0 && re.is.nativeMobile === !0) {
      Le !== null && clearTimeout(Le), Le = setTimeout(() => {
        dl(t), Le = null;
      }, 100);
      return;
    }
  }
  dl(t);
}
function fu() {
  let e;
  return {
    preventBodyScroll(t) {
      t !== e && (e !== void 0 || t === !0) && (e = t, du(t));
    }
  };
}
let kt = 0;
const vu = {
  standard: "fixed-full flex-center",
  top: "fixed-top justify-center",
  bottom: "fixed-bottom justify-center",
  right: "fixed-right items-center",
  left: "fixed-left items-center"
}, fl = {
  standard: ["scale", "scale"],
  top: ["slide-down", "slide-up"],
  bottom: ["slide-up", "slide-down"],
  right: ["slide-left", "slide-right"],
  left: ["slide-right", "slide-left"]
}, mu = se({
  name: "QDialog",
  inheritAttrs: !1,
  props: {
    ...Il,
    ...Nl,
    transitionShow: String,
    // override useTransitionProps
    transitionHide: String,
    // override useTransitionProps
    persistent: Boolean,
    autoClose: Boolean,
    allowFocusOutside: Boolean,
    noEscDismiss: Boolean,
    noBackdropDismiss: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    noShake: Boolean,
    seamless: Boolean,
    maximized: Boolean,
    fullWidth: Boolean,
    fullHeight: Boolean,
    square: Boolean,
    position: {
      type: String,
      default: "standard",
      validator: (e) => e === "standard" || ["top", "bottom", "left", "right"].includes(e)
    }
  },
  emits: [
    ...Dl,
    "shake",
    "click",
    "escapeKey"
  ],
  setup(e, { slots: t, emit: n, attrs: l }) {
    const o = le(), u = P(null), a = P(!1), s = P(!1);
    let f = null, h = null, r, b;
    const v = d(
      () => e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0
    ), { preventBodyScroll: c } = fu(), { registerTimeout: g } = Ul(), { registerTick: B, removeTick: y } = Ql(), { transitionProps: w, transitionStyle: x } = Kl(
      e,
      () => fl[e.position][0],
      () => fl[e.position][1]
    ), { showPortal: p, hidePortal: k, portalIsAccessible: S, renderPortal: R } = Wl(
      o,
      u,
      U,
      "dialog"
    ), { hide: L } = jl({
      showing: a,
      hideOnRouteChange: v,
      handleShow: $,
      handleHide: W,
      processOnMount: !0
    }), { addToHistory: I, removeFromHistory: K } = ru(a), J = d(
      () => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === !0 ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${vu[e.position]}` + (s.value === !0 ? " q-dialog__inner--animating" : "") + (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") + (e.square === !0 ? " q-dialog__inner--square" : "")
    ), N = d(() => a.value === !0 && e.seamless !== !0), z = d(() => e.autoClose === !0 ? { onClick: V } : {}), X = d(() => [
      `q-dialog fullscreen no-pointer-events q-dialog--${N.value === !0 ? "modal" : "seamless"}`,
      l.class
    ]);
    Z(() => e.maximized, (O) => {
      a.value === !0 && q(O);
    }), Z(N, (O) => {
      c(O), O === !0 ? (Zl(H), Yl(j)) : (dn(H), Vt(j));
    });
    function $(O) {
      I(), h = e.noRefocus === !1 && document.activeElement !== null ? document.activeElement : null, q(e.maximized), p(), s.value = !0, e.noFocus !== !0 ? (document.activeElement !== null && document.activeElement.blur(), B(G)) : y(), g(() => {
        if (o.proxy.$q.platform.is.ios === !0) {
          if (e.seamless !== !0 && document.activeElement) {
            const { top: A, bottom: F } = document.activeElement.getBoundingClientRect(), { innerHeight: ee } = window, C = window.visualViewport !== void 0 ? window.visualViewport.height : ee;
            A > 0 && F > C / 2 && (document.scrollingElement.scrollTop = Math.min(
              document.scrollingElement.scrollHeight - C,
              F >= ee ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + F - C / 2)
            )), document.activeElement.scrollIntoView();
          }
          b = !0, u.value.click(), b = !1;
        }
        p(!0), s.value = !1, n("show", O);
      }, e.transitionDuration);
    }
    function W(O) {
      y(), K(), ue(!0), s.value = !0, k(), h !== null && (((O && O.type.indexOf("key") === 0 ? h.closest('[tabindex]:not([tabindex^="-"])') : void 0) || h).focus(), h = null), g(() => {
        k(!0), s.value = !1, n("hide", O);
      }, e.transitionDuration);
    }
    function G(O) {
      At(() => {
        let A = u.value;
        A === null || A.contains(document.activeElement) === !0 || (A = (O !== "" ? A.querySelector(O) : null) || A.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || A.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || A.querySelector("[autofocus], [data-autofocus]") || A, A.focus({ preventScroll: !0 }));
      });
    }
    function T(O) {
      O && typeof O.focus == "function" ? O.focus({ preventScroll: !0 }) : G(), n("shake");
      const A = u.value;
      A !== null && (A.classList.remove("q-animate--scale"), A.classList.add("q-animate--scale"), f !== null && clearTimeout(f), f = setTimeout(() => {
        f = null, u.value !== null && (A.classList.remove("q-animate--scale"), G());
      }, 170));
    }
    function j() {
      e.seamless !== !0 && (e.persistent === !0 || e.noEscDismiss === !0 ? e.maximized !== !0 && e.noShake !== !0 && T() : (n("escapeKey"), L()));
    }
    function ue(O) {
      f !== null && (clearTimeout(f), f = null), (O === !0 || a.value === !0) && (q(!1), e.seamless !== !0 && (c(!1), dn(H), Vt(j))), O !== !0 && (h = null);
    }
    function q(O) {
      O === !0 ? r !== !0 && (kt < 1 && document.body.classList.add("q-body--dialog"), kt++, r = !0) : r === !0 && (kt < 2 && document.body.classList.remove("q-body--dialog"), kt--, r = !1);
    }
    function V(O) {
      b !== !0 && (L(O), n("click", O));
    }
    function M(O) {
      e.persistent !== !0 && e.noBackdropDismiss !== !0 ? L(O) : e.noShake !== !0 && T();
    }
    function H(O) {
      e.allowFocusOutside !== !0 && S.value === !0 && Cl(u.value, O.target) !== !0 && G('[tabindex]:not([tabindex="-1"])');
    }
    Object.assign(o.proxy, {
      // expose public methods
      focus: G,
      shake: T,
      // private but needed by QSelect
      __updateRefocusTarget(O) {
        h = O || null;
      }
    }), he(ue);
    function U() {
      return m("div", {
        role: "dialog",
        "aria-modal": N.value === !0 ? "true" : "false",
        ...l,
        class: X.value
      }, [
        m(rt, {
          name: "q-transition--fade",
          appear: !0
        }, () => N.value === !0 ? m("div", {
          class: "q-dialog__backdrop fixed-full",
          style: x.value,
          "aria-hidden": "true",
          tabindex: -1,
          onClick: M
        }) : null),
        m(
          rt,
          w.value,
          () => a.value === !0 ? m("div", {
            ref: u,
            class: J.value,
            style: x.value,
            tabindex: -1,
            ...z.value
          }, Se(t.default)) : null
        )
      ]);
    }
    return R;
  }
});
let Tt = !1;
{
  const e = document.createElement("div");
  e.setAttribute("dir", "rtl"), Object.assign(e.style, {
    width: "1px",
    height: "1px",
    overflow: "auto"
  });
  const t = document.createElement("div");
  Object.assign(t.style, {
    width: "1000px",
    height: "1px"
  }), document.body.appendChild(e), e.appendChild(t), e.scrollLeft = -1e3, Tt = e.scrollLeft >= 0, e.remove();
}
const ye = 1e3, hu = [
  "start",
  "center",
  "end",
  "start-force",
  "center-force",
  "end-force"
], eo = Array.prototype.filter, gu = window.getComputedStyle(document.body).overflowAnchor === void 0 ? Wo : function(e, t) {
  e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (e === null)
      return;
    e._qOverflowAnimationFrame = void 0;
    const n = e.children || [];
    eo.call(n, (o) => o.dataset && o.dataset.qVsAnchor !== void 0).forEach((o) => {
      delete o.dataset.qVsAnchor;
    });
    const l = n[t];
    l && l.dataset && (l.dataset.qVsAnchor = "");
  }));
};
function Ye(e, t) {
  return e + t;
}
function Zt(e, t, n, l, o, u, a, s) {
  const f = e === window ? document.scrollingElement || document.documentElement : e, h = o === !0 ? "offsetWidth" : "offsetHeight", r = {
    scrollStart: 0,
    scrollViewSize: -a - s,
    scrollMaxSize: 0,
    offsetStart: -a,
    offsetEnd: -s
  };
  if (o === !0 ? (e === window ? (r.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, r.scrollViewSize += document.documentElement.clientWidth) : (r.scrollStart = f.scrollLeft, r.scrollViewSize += f.clientWidth), r.scrollMaxSize = f.scrollWidth, u === !0 && (r.scrollStart = (Tt === !0 ? r.scrollMaxSize - r.scrollViewSize : 0) - r.scrollStart)) : (e === window ? (r.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, r.scrollViewSize += document.documentElement.clientHeight) : (r.scrollStart = f.scrollTop, r.scrollViewSize += f.clientHeight), r.scrollMaxSize = f.scrollHeight), n !== null)
    for (let b = n.previousElementSibling; b !== null; b = b.previousElementSibling)
      b.classList.contains("q-virtual-scroll--skip") === !1 && (r.offsetStart += b[h]);
  if (l !== null)
    for (let b = l.nextElementSibling; b !== null; b = b.nextElementSibling)
      b.classList.contains("q-virtual-scroll--skip") === !1 && (r.offsetEnd += b[h]);
  if (t !== e) {
    const b = f.getBoundingClientRect(), v = t.getBoundingClientRect();
    o === !0 ? (r.offsetStart += v.left - b.left, r.offsetEnd -= v.width) : (r.offsetStart += v.top - b.top, r.offsetEnd -= v.height), e !== window && (r.offsetStart += r.scrollStart), r.offsetEnd += r.scrollMaxSize - r.offsetStart;
  }
  return r;
}
function vl(e, t, n, l) {
  t === "end" && (t = (e === window ? document.body : e)[n === !0 ? "scrollWidth" : "scrollHeight"]), e === window ? n === !0 ? (l === !0 && (t = (Tt === !0 ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : n === !0 ? (l === !0 && (t = (Tt === !0 ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function ot(e, t, n, l) {
  if (n >= l)
    return 0;
  const o = t.length, u = Math.floor(n / ye), a = Math.floor((l - 1) / ye) + 1;
  let s = e.slice(u, a).reduce(Ye, 0);
  return n % ye !== 0 && (s -= t.slice(u * ye, n).reduce(Ye, 0)), l % ye !== 0 && l !== o && (s -= t.slice(l, a * ye).reduce(Ye, 0)), s;
}
const bu = {
  virtualScrollSliceSize: {
    type: [Number, String],
    default: null
  },
  virtualScrollSliceRatioBefore: {
    type: [Number, String],
    default: 1
  },
  virtualScrollSliceRatioAfter: {
    type: [Number, String],
    default: 1
  },
  virtualScrollItemSize: {
    type: [Number, String],
    default: 24
  },
  virtualScrollStickySizeStart: {
    type: [Number, String],
    default: 0
  },
  virtualScrollStickySizeEnd: {
    type: [Number, String],
    default: 0
  },
  tableColspan: [Number, String]
}, pu = {
  virtualScrollHorizontal: Boolean,
  onVirtualScroll: Function,
  ...bu
};
function yu({
  virtualScrollLength: e,
  getVirtualScrollTarget: t,
  getVirtualScrollEl: n,
  virtualScrollItemSizeComputed: l
  // optional
}) {
  const o = le(), { props: u, emit: a, proxy: s } = o, { $q: f } = s;
  let h, r, b, v = [], c;
  const g = P(0), B = P(0), y = P({}), w = P(null), x = P(null), p = P(null), k = P({ from: 0, to: 0 }), S = d(() => u.tableColspan !== void 0 ? u.tableColspan : 100);
  l === void 0 && (l = d(() => u.virtualScrollItemSize));
  const R = d(() => l.value + ";" + u.virtualScrollHorizontal), L = d(
    () => R.value + ";" + u.virtualScrollSliceRatioBefore + ";" + u.virtualScrollSliceRatioAfter
  );
  Z(L, () => {
    G();
  }), Z(R, I);
  function I() {
    W(r, !0);
  }
  function K(V) {
    W(V === void 0 ? r : V);
  }
  function J(V, M) {
    const H = t();
    if (H == null || H.nodeType === 8)
      return;
    const U = Zt(
      H,
      n(),
      w.value,
      x.value,
      u.virtualScrollHorizontal,
      f.lang.rtl,
      u.virtualScrollStickySizeStart,
      u.virtualScrollStickySizeEnd
    );
    b !== U.scrollViewSize && G(U.scrollViewSize), z(
      H,
      U,
      Math.min(e.value - 1, Math.max(0, parseInt(V, 10) || 0)),
      0,
      hu.indexOf(M) > -1 ? M : r > -1 && V > r ? "end" : "start"
    );
  }
  function N() {
    const V = t();
    if (V == null || V.nodeType === 8)
      return;
    const M = Zt(
      V,
      n(),
      w.value,
      x.value,
      u.virtualScrollHorizontal,
      f.lang.rtl,
      u.virtualScrollStickySizeStart,
      u.virtualScrollStickySizeEnd
    ), H = e.value - 1, U = M.scrollMaxSize - M.offsetStart - M.offsetEnd - B.value;
    if (h === M.scrollStart)
      return;
    if (M.scrollMaxSize <= 0) {
      z(V, M, 0, 0);
      return;
    }
    b !== M.scrollViewSize && G(M.scrollViewSize), X(k.value.from);
    const O = Math.floor(M.scrollMaxSize - Math.max(M.scrollViewSize, M.offsetEnd) - Math.min(c[H], M.scrollViewSize / 2));
    if (O > 0 && Math.ceil(M.scrollStart) >= O) {
      z(
        V,
        M,
        H,
        M.scrollMaxSize - M.offsetEnd - v.reduce(Ye, 0)
      );
      return;
    }
    let A = 0, F = M.scrollStart - M.offsetStart, ee = F;
    if (F <= U && F + M.scrollViewSize >= g.value)
      F -= g.value, A = k.value.from, ee = F;
    else
      for (let C = 0; F >= v[C] && A < H; C++)
        F -= v[C], A += ye;
    for (; F > 0 && A < H; )
      F -= c[A], F > -M.scrollViewSize ? (A++, ee = F) : ee = c[A] + F;
    z(
      V,
      M,
      A,
      ee
    );
  }
  function z(V, M, H, U, O) {
    const A = typeof O == "string" && O.indexOf("-force") > -1, F = A === !0 ? O.replace("-force", "") : O, ee = F !== void 0 ? F : "start";
    let C = Math.max(0, H - y.value[ee]), oe = C + y.value.total;
    oe > e.value && (oe = e.value, C = Math.max(0, oe - y.value.total)), h = M.scrollStart;
    const Ce = C !== k.value.from || oe !== k.value.to;
    if (Ce === !1 && F === void 0) {
      j(H);
      return;
    }
    const { activeElement: Ee } = document, xe = p.value;
    Ce === !0 && xe !== null && xe !== Ee && xe.contains(Ee) === !0 && (xe.addEventListener("focusout", $), setTimeout(() => {
      xe !== null && xe.removeEventListener("focusout", $);
    })), gu(xe, H - C);
    const ft = F !== void 0 ? c.slice(C, H).reduce(Ye, 0) : 0;
    if (Ce === !0) {
      const Be = oe >= k.value.from && C <= k.value.to ? k.value.to : oe;
      k.value = { from: C, to: Be }, g.value = ot(v, c, 0, C), B.value = ot(v, c, oe, e.value), requestAnimationFrame(() => {
        k.value.to !== oe && h === M.scrollStart && (k.value = { from: k.value.from, to: oe }, B.value = ot(v, c, oe, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (h !== M.scrollStart)
        return;
      Ce === !0 && X(C);
      const Be = c.slice(C, H).reduce(Ye, 0), ze = Be + M.offsetStart + g.value, vt = ze + c[H];
      let et = ze + U;
      if (F !== void 0) {
        const Rt = Be - ft, ce = M.scrollStart + Rt;
        et = A !== !0 && ce < ze && vt < ce + M.scrollViewSize ? ce : F === "end" ? vt - M.scrollViewSize : ze - (F === "start" ? 0 : Math.round((M.scrollViewSize - c[H]) / 2));
      }
      h = et, vl(
        V,
        et,
        u.virtualScrollHorizontal,
        f.lang.rtl
      ), j(H);
    });
  }
  function X(V) {
    const M = p.value;
    if (M) {
      const H = eo.call(
        M.children,
        (C) => C.classList && C.classList.contains("q-virtual-scroll--skip") === !1
      ), U = H.length, O = u.virtualScrollHorizontal === !0 ? (C) => C.getBoundingClientRect().width : (C) => C.offsetHeight;
      let A = V, F, ee;
      for (let C = 0; C < U; ) {
        for (F = O(H[C]), C++; C < U && H[C].classList.contains("q-virtual-scroll--with-prev") === !0; )
          F += O(H[C]), C++;
        ee = F - c[A], ee !== 0 && (c[A] += ee, v[Math.floor(A / ye)] += ee), A++;
      }
    }
  }
  function $() {
    p.value !== null && p.value !== void 0 && p.value.focus();
  }
  function W(V, M) {
    const H = 1 * l.value;
    (M === !0 || Array.isArray(c) === !1) && (c = []);
    const U = c.length;
    c.length = e.value;
    for (let A = e.value - 1; A >= U; A--)
      c[A] = H;
    const O = Math.floor((e.value - 1) / ye);
    v = [];
    for (let A = 0; A <= O; A++) {
      let F = 0;
      const ee = Math.min((A + 1) * ye, e.value);
      for (let C = A * ye; C < ee; C++)
        F += c[C];
      v.push(F);
    }
    r = -1, h = void 0, g.value = ot(v, c, 0, k.value.from), B.value = ot(v, c, k.value.to, e.value), V >= 0 ? (X(k.value.from), de(() => {
      J(V);
    })) : ue();
  }
  function G(V) {
    if (V === void 0 && typeof window < "u") {
      const F = t();
      F != null && F.nodeType !== 8 && (V = Zt(
        F,
        n(),
        w.value,
        x.value,
        u.virtualScrollHorizontal,
        f.lang.rtl,
        u.virtualScrollStickySizeStart,
        u.virtualScrollStickySizeEnd
      ).scrollViewSize);
    }
    b = V;
    const M = parseFloat(u.virtualScrollSliceRatioBefore) || 0, H = parseFloat(u.virtualScrollSliceRatioAfter) || 0, U = 1 + M + H, O = V === void 0 || V <= 0 ? 1 : Math.ceil(V / l.value), A = Math.max(
      1,
      O,
      Math.ceil((u.virtualScrollSliceSize > 0 ? u.virtualScrollSliceSize : 10) / U)
    );
    y.value = {
      total: Math.ceil(A * U),
      start: Math.ceil(A * M),
      center: Math.ceil(A * (0.5 + M)),
      end: Math.ceil(A * (1 + M)),
      view: O
    };
  }
  function T(V, M) {
    const H = u.virtualScrollHorizontal === !0 ? "width" : "height", U = {
      ["--q-virtual-scroll-item-" + H]: l.value + "px"
    };
    return [
      V === "tbody" ? m(V, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: w
      }, [
        m("tr", [
          m("td", {
            style: { [H]: `${g.value}px`, ...U },
            colspan: S.value
          })
        ])
      ]) : m(V, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: w,
        style: { [H]: `${g.value}px`, ...U }
      }),
      m(V, {
        class: "q-virtual-scroll__content",
        key: "content",
        ref: p,
        tabindex: -1
      }, M.flat()),
      V === "tbody" ? m(V, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: x
      }, [
        m("tr", [
          m("td", {
            style: { [H]: `${B.value}px`, ...U },
            colspan: S.value
          })
        ])
      ]) : m(V, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: x,
        style: { [H]: `${B.value}px`, ...U }
      })
    ];
  }
  function j(V) {
    r !== V && (u.onVirtualScroll !== void 0 && a("virtualScroll", {
      index: V,
      from: k.value.from,
      to: k.value.to - 1,
      direction: V < r ? "decrease" : "increase",
      ref: s
    }), r = V);
  }
  G();
  const ue = Pl(
    N,
    f.platform.is.ios === !0 ? 120 : 35
  );
  Co(() => {
    G();
  });
  let q = !1;
  return ct(() => {
    q = !0;
  }), mn(() => {
    if (q !== !0)
      return;
    const V = t();
    h !== void 0 && V !== void 0 && V !== null && V.nodeType !== 8 ? vl(
      V,
      h,
      u.virtualScrollHorizontal,
      f.lang.rtl
    ) : J(r);
  }), he(() => {
    ue.cancel();
  }), Object.assign(s, { scrollTo: J, reset: I, refresh: K }), {
    virtualScrollSliceRange: k,
    virtualScrollSliceSizeComputed: y,
    setVirtualScrollSize: G,
    onVirtualScrollEvt: ue,
    localResetVirtualScroll: W,
    padVirtualScroll: T,
    scrollTo: J,
    reset: I,
    refresh: K
  };
}
const wu = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, Su = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, xu = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, ku = /[a-z0-9_ -]$/i;
function Cu(e) {
  return function(n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== !0)
        return;
      n.target.qComposing = !1, e(n);
    } else
      n.type === "compositionupdate" && n.target.qComposing !== !0 && typeof n.data == "string" && (re.is.firefox === !0 ? ku.test(n.data) === !1 : wu.test(n.data) === !0 || Su.test(n.data) === !0 || xu.test(n.data) === !0) === !0 && (n.target.qComposing = !0);
  };
}
function Ve(e, t) {
  if (e === t)
    return !0;
  if (e !== null && t !== null && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    let n, l;
    if (e.constructor === Array) {
      if (n = e.length, n !== t.length)
        return !1;
      for (l = n; l-- !== 0; )
        if (Ve(e[l], t[l]) !== !0)
          return !1;
      return !0;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size)
        return !1;
      let u = e.entries();
      for (l = u.next(); l.done !== !0; ) {
        if (t.has(l.value[0]) !== !0)
          return !1;
        l = u.next();
      }
      for (u = e.entries(), l = u.next(); l.done !== !0; ) {
        if (Ve(l.value[1], t.get(l.value[0])) !== !0)
          return !1;
        l = u.next();
      }
      return !0;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size)
        return !1;
      const u = e.entries();
      for (l = u.next(); l.done !== !0; ) {
        if (t.has(l.value[0]) !== !0)
          return !1;
        l = u.next();
      }
      return !0;
    }
    if (e.buffer != null && e.buffer.constructor === ArrayBuffer) {
      if (n = e.length, n !== t.length)
        return !1;
      for (l = n; l-- !== 0; )
        if (e[l] !== t[l])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const o = Object.keys(e).filter((u) => e[u] !== void 0);
    if (n = o.length, n !== Object.keys(t).filter((u) => t[u] !== void 0).length)
      return !1;
    for (l = n; l-- !== 0; ) {
      const u = o[l];
      if (Ve(e[u], t[u]) !== !0)
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ml(e, t, n) {
  if (n <= t)
    return t;
  const l = n - t + 1;
  let o = t + (e - t) % l;
  return o < t && (o = l + o), o === 0 ? 0 : o;
}
const hl = (e) => ["add", "add-unique", "toggle"].includes(e), qu = ".*+?^${}()|[]\\", _u = Object.keys(pn), Vu = se({
  name: "QSelect",
  inheritAttrs: !1,
  props: {
    ...pu,
    ...Ml,
    ...pn,
    modelValue: {
      required: !0
    },
    multiple: Boolean,
    displayValue: [String, Number],
    displayValueHtml: Boolean,
    dropdownIcon: String,
    options: {
      type: Array,
      default: () => []
    },
    optionValue: [Function, String],
    optionLabel: [Function, String],
    optionDisable: [Function, String],
    hideSelected: Boolean,
    hideDropdownIcon: Boolean,
    fillInput: Boolean,
    maxValues: [Number, String],
    optionsDense: Boolean,
    optionsDark: {
      type: Boolean,
      default: null
    },
    optionsSelectedClass: String,
    optionsHtml: Boolean,
    optionsCover: Boolean,
    menuShrink: Boolean,
    menuAnchor: String,
    menuSelf: String,
    menuOffset: Array,
    popupContentClass: String,
    popupContentStyle: [String, Array, Object],
    useInput: Boolean,
    useChips: Boolean,
    newValueMode: {
      type: String,
      validator: hl
    },
    mapOptions: Boolean,
    emitValue: Boolean,
    inputDebounce: {
      type: [Number, String],
      default: 500
    },
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
    tabindex: {
      type: [String, Number],
      default: 0
    },
    autocomplete: String,
    transitionShow: String,
    transitionHide: String,
    transitionDuration: [String, Number],
    behavior: {
      type: String,
      validator: (e) => ["default", "menu", "dialog"].includes(e),
      default: "default"
    },
    virtualScrollItemSize: {
      type: [Number, String],
      default: void 0
    },
    onNewValue: Function,
    onFilter: Function
  },
  emits: [
    ...Fl,
    "add",
    "remove",
    "inputValue",
    "newValue",
    "keyup",
    "keypress",
    "keydown",
    "filterAbort"
  ],
  setup(e, { slots: t, emit: n }) {
    const { proxy: l } = le(), { $q: o } = l, u = P(!1), a = P(!1), s = P(-1), f = P(""), h = P(!1), r = P(!1);
    let b = null, v, c, g, B = null, y, w, x, p;
    const k = P(null), S = P(null), R = P(null), L = P(null), I = P(null), K = hi(e), J = Cu(En), N = d(() => Array.isArray(e.options) ? e.options.length : 0), z = d(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === !0 ? 24 : 48 : e.virtualScrollItemSize), {
      virtualScrollSliceRange: X,
      virtualScrollSliceSizeComputed: $,
      localResetVirtualScroll: W,
      padVirtualScroll: G,
      onVirtualScrollEvt: T,
      scrollTo: j,
      setVirtualScrollSize: ue
    } = yu({
      virtualScrollLength: N,
      getVirtualScrollTarget: oo,
      getVirtualScrollEl: _n,
      virtualScrollItemSizeComputed: z
    }), q = zl(), V = d(() => {
      const i = e.mapOptions === !0 && e.multiple !== !0, E = e.modelValue !== void 0 && (e.modelValue !== null || i === !0) ? e.multiple === !0 && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
      if (e.mapOptions === !0 && Array.isArray(e.options) === !0) {
        const _ = e.mapOptions === !0 && v !== void 0 ? v : [], D = E.map((Y) => lo(Y, _));
        return e.modelValue === null && i === !0 ? D.filter((Y) => Y !== null) : D;
      }
      return E;
    }), M = d(() => {
      const i = {};
      return _u.forEach((E) => {
        const _ = e[E];
        _ !== void 0 && (i[E] = _);
      }), i;
    }), H = d(() => e.optionsDark === null ? q.isDark.value : e.optionsDark), U = d(() => cn(V.value)), O = d(() => {
      let i = "q-field__input q-placeholder col";
      return e.hideSelected === !0 || V.value.length === 0 ? [i, e.inputClass] : (i += " q-field__input--padding", e.inputClass === void 0 ? i : [i, e.inputClass]);
    }), A = d(
      () => (e.virtualScrollHorizontal === !0 ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")
    ), F = d(() => N.value === 0), ee = d(
      () => V.value.map((i) => ve.value(i)).join(", ")
    ), C = d(() => e.displayValue !== void 0 ? e.displayValue : ee.value), oe = d(() => e.optionsHtml === !0 ? () => !0 : (i) => i != null && i.html === !0), Ce = d(() => e.displayValueHtml === !0 || e.displayValue === void 0 && (e.optionsHtml === !0 || V.value.some(oe.value))), Ee = d(() => q.focused.value === !0 ? e.tabindex : -1), xe = d(() => {
      const i = {
        tabindex: e.tabindex,
        role: "combobox",
        "aria-label": e.label,
        "aria-readonly": e.readonly === !0 ? "true" : "false",
        "aria-autocomplete": e.useInput === !0 ? "list" : "none",
        "aria-expanded": u.value === !0 ? "true" : "false",
        "aria-controls": `${q.targetUid.value}_lb`
      };
      return s.value >= 0 && (i["aria-activedescendant"] = `${q.targetUid.value}_${s.value}`), i;
    }), ft = d(() => ({
      id: `${q.targetUid.value}_lb`,
      role: "listbox",
      "aria-multiselectable": e.multiple === !0 ? "true" : "false"
    })), Be = d(() => V.value.map((i, E) => ({
      index: E,
      opt: i,
      html: oe.value(i),
      selected: !0,
      removeAtIndex: no,
      toggleOption: Te,
      tabindex: Ee.value
    }))), ze = d(() => {
      if (N.value === 0)
        return [];
      const { from: i, to: E } = X.value;
      return e.options.slice(i, E).map((_, D) => {
        const Y = He.value(_) === !0, Q = i + D, te = {
          clickable: !0,
          active: !1,
          activeClass: Rt.value,
          manualFocus: !0,
          focused: !1,
          disable: Y,
          tabindex: -1,
          dense: e.optionsDense,
          dark: H.value,
          role: "option",
          id: `${q.targetUid.value}_${Q}`,
          onClick: () => {
            Te(_);
          }
        };
        return Y !== !0 && (Pt(_) === !0 && (te.active = !0), s.value === Q && (te.focused = !0), te["aria-selected"] = te.active === !0 ? "true" : "false", o.platform.is.desktop === !0 && (te.onMousemove = () => {
          u.value === !0 && Ie(Q);
        })), {
          index: Q,
          opt: _,
          html: oe.value(_),
          label: ve.value(_),
          selected: te.active,
          focused: te.focused,
          toggleOption: Te,
          setOptionIndex: Ie,
          itemProps: te
        };
      });
    }), vt = d(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : o.iconSet.arrow.dropdown), et = d(
      () => e.optionsCover === !1 && e.outlined !== !0 && e.standout !== !0 && e.borderless !== !0 && e.rounded !== !0
    ), Rt = d(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), ce = d(() => Ot(e.optionValue, "value")), ve = d(() => Ot(e.optionLabel, "label")), He = d(() => Ot(e.optionDisable, "disable")), mt = d(() => V.value.map((i) => ce.value(i))), to = d(() => {
      const i = {
        onInput: En,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange: J,
        onKeydown: qn,
        onKeyup: kn,
        onKeypress: Cn,
        onFocus: Sn,
        onClick(E) {
          c === !0 && _e(E);
        }
      };
      return i.onCompositionstart = i.onCompositionupdate = i.onCompositionend = J, i;
    });
    Z(V, (i) => {
      v = i, e.useInput === !0 && e.fillInput === !0 && e.multiple !== !0 && q.innerLoading.value !== !0 && (a.value !== !0 && u.value !== !0 || U.value !== !0) && (g !== !0 && Ne(), (a.value === !0 || u.value === !0) && De(""));
    }, { immediate: !0 }), Z(() => e.fillInput, Ne), Z(u, Ft), Z(N, bo);
    function yn(i) {
      return e.emitValue === !0 ? ce.value(i) : i;
    }
    function Mt(i) {
      if (i > -1 && i < V.value.length)
        if (e.multiple === !0) {
          const E = e.modelValue.slice();
          n("remove", { index: i, value: E.splice(i, 1)[0] }), n("update:modelValue", E);
        } else
          n("update:modelValue", null);
    }
    function no(i) {
      Mt(i), q.focus();
    }
    function wn(i, E) {
      const _ = yn(i);
      if (e.multiple !== !0) {
        e.fillInput === !0 && tt(
          ve.value(i),
          !0,
          !0
        ), n("update:modelValue", _);
        return;
      }
      if (V.value.length === 0) {
        n("add", { index: 0, value: _ }), n("update:modelValue", e.multiple === !0 ? [_] : _);
        return;
      }
      if (E === !0 && Pt(i) === !0 || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues)
        return;
      const D = e.modelValue.slice();
      n("add", { index: D.length, value: _ }), D.push(_), n("update:modelValue", D);
    }
    function Te(i, E) {
      if (q.editable.value !== !0 || i === void 0 || He.value(i) === !0)
        return;
      const _ = ce.value(i);
      if (e.multiple !== !0) {
        E !== !0 && (tt(
          e.fillInput === !0 ? ve.value(i) : "",
          !0,
          !0
        ), $e()), S.value !== null && S.value.focus(), (V.value.length === 0 || Ve(ce.value(V.value[0]), _) !== !0) && n("update:modelValue", e.emitValue === !0 ? _ : i);
        return;
      }
      if ((c !== !0 || h.value === !0) && q.focus(), Sn(), V.value.length === 0) {
        const Q = e.emitValue === !0 ? _ : i;
        n("add", { index: 0, value: Q }), n("update:modelValue", e.multiple === !0 ? [Q] : Q);
        return;
      }
      const D = e.modelValue.slice(), Y = mt.value.findIndex((Q) => Ve(Q, _));
      if (Y > -1)
        n("remove", { index: Y, value: D.splice(Y, 1)[0] });
      else {
        if (e.maxValues !== void 0 && D.length >= e.maxValues)
          return;
        const Q = e.emitValue === !0 ? _ : i;
        n("add", { index: D.length, value: Q }), D.push(Q);
      }
      n("update:modelValue", D);
    }
    function Ie(i) {
      if (o.platform.is.desktop !== !0)
        return;
      const E = i > -1 && i < N.value ? i : -1;
      s.value !== E && (s.value = E);
    }
    function ht(i = 1, E) {
      if (u.value === !0) {
        let _ = s.value;
        do
          _ = ml(
            _ + i,
            -1,
            N.value - 1
          );
        while (_ !== -1 && _ !== s.value && He.value(e.options[_]) === !0);
        s.value !== _ && (Ie(_), j(_), E !== !0 && e.useInput === !0 && e.fillInput === !0 && gt(
          _ >= 0 ? ve.value(e.options[_]) : y
        ));
      }
    }
    function lo(i, E) {
      const _ = (D) => Ve(ce.value(D), i);
      return e.options.find(_) || E.find(_) || i;
    }
    function Ot(i, E) {
      const _ = i !== void 0 ? i : E;
      return typeof _ == "function" ? _ : (D) => D !== null && typeof D == "object" && _ in D ? D[_] : D;
    }
    function Pt(i) {
      const E = ce.value(i);
      return mt.value.find((_) => Ve(_, E)) !== void 0;
    }
    function Sn(i) {
      e.useInput === !0 && S.value !== null && (i === void 0 || S.value === i.target && i.target.value === ee.value) && S.value.select();
    }
    function xn(i) {
      Fe(i, 27) === !0 && u.value === !0 && (_e(i), $e(), Ne()), n("keyup", i);
    }
    function kn(i) {
      const { value: E } = i.target;
      if (i.keyCode !== void 0) {
        xn(i);
        return;
      }
      if (i.target.value = "", b !== null && (clearTimeout(b), b = null), Ne(), typeof E == "string" && E.length !== 0) {
        const _ = E.toLocaleLowerCase(), D = (Q) => {
          const te = e.options.find((ae) => Q.value(ae).toLocaleLowerCase() === _);
          return te === void 0 ? !1 : (V.value.indexOf(te) === -1 ? Te(te) : $e(), !0);
        }, Y = (Q) => {
          D(ce) !== !0 && (D(ve) === !0 || Q === !0 || De(E, !0, () => Y(!0)));
        };
        Y();
      } else
        q.clearValue(i);
    }
    function Cn(i) {
      n("keypress", i);
    }
    function qn(i) {
      if (n("keydown", i), Vl(i) === !0)
        return;
      const E = f.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), _ = i.shiftKey !== !0 && e.multiple !== !0 && (s.value > -1 || E === !0);
      if (i.keyCode === 27) {
        we(i);
        return;
      }
      if (i.keyCode === 9 && _ === !1) {
        je();
        return;
      }
      if (i.target === void 0 || i.target.id !== q.targetUid.value || q.editable.value !== !0)
        return;
      if (i.keyCode === 40 && q.innerLoading.value !== !0 && u.value === !1) {
        ne(i), We();
        return;
      }
      if (i.keyCode === 8 && e.hideSelected !== !0 && f.value.length === 0) {
        e.multiple === !0 && Array.isArray(e.modelValue) === !0 ? Mt(e.modelValue.length - 1) : e.multiple !== !0 && e.modelValue !== null && n("update:modelValue", null);
        return;
      }
      (i.keyCode === 35 || i.keyCode === 36) && (typeof f.value != "string" || f.value.length === 0) && (ne(i), s.value = -1, ht(i.keyCode === 36 ? 1 : -1, e.multiple)), (i.keyCode === 33 || i.keyCode === 34) && $.value !== void 0 && (ne(i), s.value = Math.max(
        -1,
        Math.min(
          N.value,
          s.value + (i.keyCode === 33 ? -1 : 1) * $.value.view
        )
      ), ht(i.keyCode === 33 ? 1 : -1, e.multiple)), (i.keyCode === 38 || i.keyCode === 40) && (ne(i), ht(i.keyCode === 38 ? -1 : 1, e.multiple));
      const D = N.value;
      if ((x === void 0 || p < Date.now()) && (x = ""), D > 0 && e.useInput !== !0 && i.key !== void 0 && i.key.length === 1 && i.altKey === !1 && i.ctrlKey === !1 && i.metaKey === !1 && (i.keyCode !== 32 || x.length !== 0)) {
        u.value !== !0 && We(i);
        const Y = i.key.toLocaleLowerCase(), Q = x.length === 1 && x[0] === Y;
        p = Date.now() + 1500, Q === !1 && (ne(i), x += Y);
        const te = new RegExp("^" + x.split("").map((zt) => qu.indexOf(zt) > -1 ? "\\" + zt : zt).join(".*"), "i");
        let ae = s.value;
        if (Q === !0 || ae < 0 || te.test(ve.value(e.options[ae])) !== !0)
          do
            ae = ml(ae + 1, -1, D - 1);
          while (ae !== s.value && (He.value(e.options[ae]) === !0 || te.test(ve.value(e.options[ae])) !== !0));
        s.value !== ae && de(() => {
          Ie(ae), j(ae), ae >= 0 && e.useInput === !0 && e.fillInput === !0 && gt(ve.value(e.options[ae]));
        });
        return;
      }
      if (!(i.keyCode !== 13 && (i.keyCode !== 32 || e.useInput === !0 || x !== "") && (i.keyCode !== 9 || _ === !1))) {
        if (i.keyCode !== 9 && ne(i), s.value > -1 && s.value < D) {
          Te(e.options[s.value]);
          return;
        }
        if (E === !0) {
          const Y = (Q, te) => {
            if (te) {
              if (hl(te) !== !0)
                return;
            } else
              te = e.newValueMode;
            if (tt("", e.multiple !== !0, !0), Q == null)
              return;
            (te === "toggle" ? Te : wn)(Q, te === "add-unique"), e.multiple !== !0 && (S.value !== null && S.value.focus(), $e());
          };
          if (e.onNewValue !== void 0 ? n("newValue", f.value, Y) : Y(f.value), e.multiple !== !0)
            return;
        }
        u.value === !0 ? je() : q.innerLoading.value !== !0 && We();
      }
    }
    function _n() {
      return c === !0 ? I.value : R.value !== null && R.value.contentEl !== null ? R.value.contentEl : void 0;
    }
    function oo() {
      return _n();
    }
    function io() {
      return e.hideSelected === !0 ? [] : t["selected-item"] !== void 0 ? Be.value.map((i) => t["selected-item"](i)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === !0 ? Be.value.map((i, E) => m(Oi, {
        key: "option-" + E,
        removable: q.editable.value === !0 && He.value(i.opt) !== !0,
        dense: !0,
        textColor: e.color,
        tabindex: Ee.value,
        onRemove() {
          i.removeAtIndex(E);
        }
      }, () => m("span", {
        class: "ellipsis",
        [i.html === !0 ? "innerHTML" : "textContent"]: ve.value(i.opt)
      }))) : [
        m("span", {
          [Ce.value === !0 ? "innerHTML" : "textContent"]: C.value
        })
      ];
    }
    function Vn() {
      if (F.value === !0)
        return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: f.value }) : void 0;
      const i = t.option !== void 0 ? t.option : (_) => m(an, {
        key: _.index,
        ..._.itemProps
      }, () => m(
        qt,
        () => m(
          un,
          () => m("span", {
            [_.html === !0 ? "innerHTML" : "textContent"]: _.label
          })
        )
      ));
      let E = G("div", ze.value.map(i));
      return t["before-options"] !== void 0 && (E = t["before-options"]().concat(E)), Ae(t["after-options"], E);
    }
    function uo(i, E) {
      const _ = E === !0 ? { ...xe.value, ...q.splitAttrs.attributes.value } : void 0, D = {
        ref: E === !0 ? S : void 0,
        key: "i_t",
        class: O.value,
        style: e.inputStyle,
        value: f.value !== void 0 ? f.value : "",
        // required for Android in order to show ENTER key when in form
        type: "search",
        ..._,
        id: E === !0 ? q.targetUid.value : void 0,
        maxlength: e.maxlength,
        autocomplete: e.autocomplete,
        "data-autofocus": i === !0 || e.autofocus === !0 || void 0,
        disabled: e.disable === !0,
        readonly: e.readonly === !0,
        ...to.value
      };
      return i !== !0 && c === !0 && (Array.isArray(D.class) === !0 ? D.class = [...D.class, "no-pointer-events"] : D.class += " no-pointer-events"), m("input", D);
    }
    function En(i) {
      b !== null && (clearTimeout(b), b = null), !(i && i.target && i.target.qComposing === !0) && (gt(i.target.value || ""), g = !0, y = f.value, q.focused.value !== !0 && (c !== !0 || h.value === !0) && q.focus(), e.onFilter !== void 0 && (b = setTimeout(() => {
        b = null, De(f.value);
      }, e.inputDebounce)));
    }
    function gt(i) {
      f.value !== i && (f.value = i, n("inputValue", i));
    }
    function tt(i, E, _) {
      g = _ !== !0, e.useInput === !0 && (gt(i), (E === !0 || _ !== !0) && (y = i), E !== !0 && De(i));
    }
    function De(i, E, _) {
      if (e.onFilter === void 0 || E !== !0 && q.focused.value !== !0)
        return;
      q.innerLoading.value === !0 ? n("filterAbort") : (q.innerLoading.value = !0, r.value = !0), i !== "" && e.multiple !== !0 && V.value.length !== 0 && g !== !0 && i === ve.value(V.value[0]) && (i = "");
      const D = setTimeout(() => {
        u.value === !0 && (u.value = !1);
      }, 10);
      B !== null && clearTimeout(B), B = D, n(
        "filter",
        i,
        (Y, Q) => {
          (E === !0 || q.focused.value === !0) && B === D && (clearTimeout(B), typeof Y == "function" && Y(), r.value = !1, de(() => {
            q.innerLoading.value = !1, q.editable.value === !0 && (E === !0 ? u.value === !0 && $e() : u.value === !0 ? Ft(!0) : u.value = !0), typeof Q == "function" && de(() => {
              Q(l);
            }), typeof _ == "function" && de(() => {
              _(l);
            });
          }));
        },
        () => {
          q.focused.value === !0 && B === D && (clearTimeout(B), q.innerLoading.value = !1, r.value = !1), u.value === !0 && (u.value = !1);
        }
      );
    }
    function ao() {
      return m(au, {
        ref: R,
        class: A.value,
        style: e.popupContentStyle,
        modelValue: u.value,
        fit: e.menuShrink !== !0,
        cover: e.optionsCover === !0 && F.value !== !0 && e.useInput !== !0,
        anchor: e.menuAnchor,
        self: e.menuSelf,
        offset: e.menuOffset,
        dark: H.value,
        noParentEvent: !0,
        noRefocus: !0,
        noFocus: !0,
        square: et.value,
        transitionShow: e.transitionShow,
        transitionHide: e.transitionHide,
        transitionDuration: e.transitionDuration,
        separateClosePopup: !0,
        ...ft.value,
        onScrollPassive: T,
        onBeforeShow: Tn,
        onBeforeHide: ro,
        onShow: so
      }, Vn);
    }
    function ro(i) {
      $n(i), je();
    }
    function so() {
      ue();
    }
    function co(i) {
      _e(i), S.value !== null && S.value.focus(), h.value = !0, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
    }
    function fo(i) {
      _e(i), de(() => {
        h.value = !1;
      });
    }
    function vo() {
      const i = [
        m(Ri, {
          class: `col-auto ${q.fieldClass.value}`,
          ...M.value,
          for: q.targetUid.value,
          dark: H.value,
          square: !0,
          loading: r.value,
          itemAligned: !1,
          filled: !0,
          stackLabel: f.value.length !== 0,
          ...q.splitAttrs.listeners.value,
          onFocus: co,
          onBlur: fo
        }, {
          ...t,
          rawControl: () => q.getControl(!0),
          before: void 0,
          after: void 0
        })
      ];
      return u.value === !0 && i.push(
        m("div", {
          ref: I,
          class: A.value + " scroll",
          style: e.popupContentStyle,
          ...ft.value,
          onClick: we,
          onScrollPassive: T
        }, Vn())
      ), m(mu, {
        ref: L,
        modelValue: a.value,
        position: e.useInput === !0 ? "top" : void 0,
        transitionShow: w,
        transitionHide: e.transitionHide,
        transitionDuration: e.transitionDuration,
        onBeforeShow: Tn,
        onBeforeHide: mo,
        onHide: ho,
        onShow: go
      }, () => m("div", {
        class: "q-select__dialog" + (H.value === !0 ? " q-select__dialog--dark q-dark" : "") + (h.value === !0 ? " q-select__dialog--focused" : "")
      }, i));
    }
    function mo(i) {
      $n(i), L.value !== null && L.value.__updateRefocusTarget(
        q.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")
      ), q.focused.value = !1;
    }
    function ho(i) {
      $e(), q.focused.value === !1 && n("blur", i), Ne();
    }
    function go() {
      const i = document.activeElement;
      (i === null || i.id !== q.targetUid.value) && S.value !== null && S.value !== i && S.value.focus(), ue();
    }
    function je() {
      a.value !== !0 && (s.value = -1, u.value === !0 && (u.value = !1), q.focused.value === !1 && (B !== null && (clearTimeout(B), B = null), q.innerLoading.value === !0 && (n("filterAbort"), q.innerLoading.value = !1, r.value = !1)));
    }
    function We(i) {
      q.editable.value === !0 && (c === !0 ? (q.onControlFocusin(i), a.value = !0, de(() => {
        q.focus();
      })) : q.focus(), e.onFilter !== void 0 ? De(f.value) : (F.value !== !0 || t["no-option"] !== void 0) && (u.value = !0));
    }
    function $e() {
      a.value = !1, je();
    }
    function Ne() {
      e.useInput === !0 && tt(
        e.multiple !== !0 && e.fillInput === !0 && V.value.length !== 0 && ve.value(V.value[0]) || "",
        !0,
        !0
      );
    }
    function Ft(i) {
      let E = -1;
      if (i === !0) {
        if (V.value.length !== 0) {
          const _ = ce.value(V.value[0]);
          E = e.options.findIndex((D) => Ve(ce.value(D), _));
        }
        W(E);
      }
      Ie(E);
    }
    function bo(i, E) {
      u.value === !0 && q.innerLoading.value === !1 && (W(-1, !0), de(() => {
        u.value === !0 && q.innerLoading.value === !1 && (i > E ? W() : Ft(!0));
      }));
    }
    function Bn() {
      a.value === !1 && R.value !== null && R.value.updatePosition();
    }
    function Tn(i) {
      i !== void 0 && _e(i), n("popupShow", i), q.hasPopupOpen = !0, q.onControlFocusin(i);
    }
    function $n(i) {
      i !== void 0 && _e(i), n("popupHide", i), q.hasPopupOpen = !1, q.onControlFocusout(i);
    }
    function Ln() {
      c = o.platform.is.mobile !== !0 && e.behavior !== "dialog" ? !1 : e.behavior !== "menu" && (e.useInput === !0 ? t["no-option"] !== void 0 || e.onFilter !== void 0 || F.value === !1 : !0), w = o.platform.is.ios === !0 && c === !0 && e.useInput === !0 ? "fade" : e.transitionShow;
    }
    return yl(Ln), qo(Bn), Ln(), he(() => {
      b !== null && clearTimeout(b);
    }), Object.assign(l, {
      showPopup: We,
      hidePopup: $e,
      removeAtIndex: Mt,
      add: wn,
      toggleOption: Te,
      getOptionIndex: () => s.value,
      setOptionIndex: Ie,
      moveOptionSelection: ht,
      filter: De,
      updateMenuPosition: Bn,
      updateInputValue: tt,
      isOptionSelected: Pt,
      getEmittingOptionValue: yn,
      isOptionDisabled: (...i) => He.value.apply(null, i) === !0,
      getOptionValue: (...i) => ce.value.apply(null, i),
      getOptionLabel: (...i) => ve.value.apply(null, i)
    }), Object.assign(q, {
      innerValue: V,
      fieldClass: d(
        () => `q-select q-field--auto-height q-select--with${e.useInput !== !0 ? "out" : ""}-input q-select--with${e.useChips !== !0 ? "out" : ""}-chips q-select--${e.multiple === !0 ? "multiple" : "single"}`
      ),
      inputRef: k,
      targetRef: S,
      hasValue: U,
      showPopup: We,
      floatingLabel: d(
        () => e.hideSelected !== !0 && U.value === !0 || typeof f.value == "number" || f.value.length !== 0 || cn(e.displayValue)
      ),
      getControlChild: () => {
        if (q.editable.value !== !1 && (a.value === !0 || F.value !== !0 || t["no-option"] !== void 0))
          return c === !0 ? vo() : ao();
        q.hasPopupOpen === !0 && (q.hasPopupOpen = !1);
      },
      controlEvents: {
        onFocusin(i) {
          q.onControlFocusin(i);
        },
        onFocusout(i) {
          q.onControlFocusout(i, () => {
            Ne(), je();
          });
        },
        onClick(i) {
          if (we(i), c !== !0 && u.value === !0) {
            je(), S.value !== null && S.value.focus();
            return;
          }
          We(i);
        }
      },
      getControl: (i) => {
        const E = io(), _ = i === !0 || a.value !== !0 || c !== !0;
        if (e.useInput === !0)
          E.push(uo(i, _));
        else if (q.editable.value === !0) {
          const Y = _ === !0 ? xe.value : void 0;
          E.push(
            m("input", {
              ref: _ === !0 ? S : void 0,
              key: "d_t",
              class: "q-select__focus-target",
              id: _ === !0 ? q.targetUid.value : void 0,
              value: C.value,
              readonly: !0,
              "data-autofocus": i === !0 || e.autofocus === !0 || void 0,
              ...Y,
              onKeydown: qn,
              onKeyup: xn,
              onKeypress: Cn
            })
          ), _ === !0 && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && E.push(
            m("input", {
              class: "q-select__autocomplete-input",
              autocomplete: e.autocomplete,
              tabindex: -1,
              onKeyup: kn
            })
          );
        }
        if (K.value !== void 0 && e.disable !== !0 && mt.value.length !== 0) {
          const Y = mt.value.map((Q) => m("option", { value: Q, selected: !0 }));
          E.push(
            m("select", {
              class: "hidden",
              name: K.value,
              multiple: e.multiple
            }, Y)
          );
        }
        const D = e.useInput === !0 || _ !== !0 ? void 0 : q.splitAttrs.attributes.value;
        return m("div", {
          class: "q-field__native row items-center",
          ...D,
          ...q.splitAttrs.listeners.value
        }, E);
      },
      getInnerAppend: () => e.loading !== !0 && r.value !== !0 && e.hideDropdownIcon !== !0 ? [
        m(ke, {
          class: "q-select__dropdown-icon" + (u.value === !0 ? " rotate-180" : ""),
          name: vt.value
        })
      ] : null
    }), Hl(q);
  }
}), Eu = /* @__PURE__ */ vn({
  __name: "AppSelect",
  props: {
    modelValue: {},
    multiple: { type: Boolean, default: () => !1 },
    newValue: { type: Boolean },
    options: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, l = (r) => {
      t("update:modelValue", r);
    }, o = P(""), u = P([]), a = d(() => [...u.value, ...n.options].filter(
      (r) => !o.value || `${r.label}`.toLocaleLowerCase().includes(o.value)
    )), s = (r, b) => {
      o.value = r.toLowerCase(), b(
        () => {
          o.value = r.toLowerCase();
        },
        (v) => {
          r !== "" && v.options && v.options.length > 0 && (v.setOptionIndex(-1), v.moveOptionSelection(1, !0));
        }
      );
    }, f = () => {
      t("update:modelValue", n.multiple ? [] : null);
    }, h = (r, b) => {
      n.newValue && (u.value.push({ value: r, label: r }), b(r, "add-unique"));
    };
    return (r, b) => (pe(), Xe(Vu, {
      "model-value": r.modelValue,
      "onUpdate:modelValue": l,
      clearable: "",
      "use-input": "",
      "map-options": "",
      "options-dense": "",
      multiple: r.multiple,
      "use-chips": r.multiple,
      "emit-value": "",
      "input-debounce": "0",
      "popup-content-class": "no-border-radius",
      options: a.value,
      "virtual-scroll-item-size": 40,
      onFilter: s,
      onClear: f,
      onNewValue: h
    }, {
      option: be(({ itemProps: v, opt: c, selected: g, toggleOption: B }) => [
        me(tn),
        me(an, Ct(v, {
          disable: c.disable
        }), {
          default: be(() => [
            me(qt, { side: "" }, {
              default: be(() => [
                me(Si, {
                  dense: "",
                  "model-value": g,
                  "onUpdate:modelValue": (y) => B(c)
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            me(qt, null, {
              default: be(() => [
                me(un, {
                  innerHTML: c.label
                }, null, 8, ["innerHTML"]),
                c.caption ? (pe(), Xe(un, {
                  key: 0,
                  caption: "",
                  innerHTML: c.caption
                }, null, 8, ["innerHTML"])) : pl("", !0)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040, ["disable"])
      ]),
      "no-option": be(() => [
        me(an, null, {
          default: be(() => [
            me(qt, { class: "text-grey" }, {
              default: be(() => [
                en(" Inget resultat ")
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["model-value", "multiple", "use-chips", "options"]));
  }
}), Lu = fi, Au = Eu;
export {
  Lu as AppForm,
  Au as AppSelect,
  _o as useForm
};
