import { ref as P, toRaw as qe, computed as f, markRaw as ml, defineComponent as fn, getCurrentInstance as le, h, withDirectives as hl, unref as gl, onBeforeUnmount as he, Transition as at, provide as bo, onDeactivated as st, onActivated as vn, onMounted as ct, nextTick as de, watch as Z, openBlock as pe, createBlock as Xe, withCtx as be, resolveDynamicComponent as zt, createElementVNode as Ht, createElementBlock as nt, Fragment as It, renderList as Ln, normalizeClass as Zt, renderSlot as gt, mergeProps as kt, toHandlers as po, createVNode as me, createCommentVNode as bl, createTextVNode as Jt, toDisplayString as An, reactive as yo, inject as wo, onBeforeUpdate as pl, onUnmounted as So, Teleport as xo, onBeforeMount as ko, onUpdated as Co } from "vue";
import Rn from "lodash.set";
import qo from "lodash.get";
const Vo = (e) => {
  const t = P(e), n = P({}), l = window.structuredClone(qe(e)), o = f(() => Object.values(n.value)), u = (v) => {
    t.value = { ...v };
  };
  return u(e), {
    formData: t,
    fieldError: n,
    fieldErrorTexts: o,
    resetDefaultForm: () => {
      u(window.structuredClone(l));
    },
    validateForm: (v) => {
      n.value = {};
      const g = v.safeParse(t.value);
      return g.success ? (u(g.data), !0) : (n.value = g.error.errors.reduce(
        (r, p) => (r[p.path.join(".")] = p.message, r),
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
  return f(() => e.dark === null ? t.dark.isActive : e.dark);
}
const se = (e) => ml(fn(e)), _o = (e) => ml(e), Eo = {
  true: "inset",
  item: "item-inset",
  "item-thumbnail": "item-thumbnail-inset"
}, Dt = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24
}, en = se({
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
    const t = le(), n = Je(e, t.proxy.$q), l = f(() => e.vertical === !0 ? "vertical" : "horizontal"), o = f(() => ` q-separator--${l.value}`), u = f(() => e.inset !== !1 ? `${o.value}-${Eo[e.inset]}` : ""), a = f(
      () => `q-separator${o.value}${u.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === !0 ? " q-separator--dark" : "")
    ), s = f(() => {
      const v = {};
      if (e.size !== void 0 && (v[e.vertical === !0 ? "width" : "height"] = e.size), e.spaced !== !1) {
        const g = e.spaced === !0 ? `${Dt.md}px` : e.spaced in Dt ? `${Dt[e.spaced]}px` : e.spaced, r = e.vertical === !0 ? ["Left", "Right"] : ["Top", "Bottom"];
        v[`margin${r[0]}`] = v[`margin${r[1]}`] = g;
      }
      return v;
    });
    return () => h("hr", {
      class: a.value,
      style: s.value,
      "aria-orientation": l.value
    });
  }
}), Bo = h("div", { class: "q-space" }), To = se({
  name: "QSpace",
  setup() {
    return () => Bo;
  }
}), tn = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
}, Tt = {
  size: String
};
function $t(e, t = tn) {
  return f(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
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
  const a = h(e, t, n);
  return o === !0 ? hl(a, u()) : a;
}
const Mn = "0 0 24 24", On = (e) => e, jt = (e) => `ionicons ${e}`, yl = {
  "mdi-": (e) => `mdi ${e}`,
  "icon-": On,
  // fontawesome equiv
  "bt-": (e) => `bt ${e}`,
  "eva-": (e) => `eva ${e}`,
  "ion-md": jt,
  "ion-ios": jt,
  "ion-logo": jt,
  "iconfont ": On,
  "ti-": (e) => `themify-icon ${e}`,
  "bi-": (e) => `bootstrap-icons ${e}`
}, wl = {
  o_: "-outlined",
  r_: "-round",
  s_: "-sharp"
}, Sl = {
  sym_o_: "-outlined",
  sym_r_: "-rounded",
  sym_s_: "-sharp"
}, Ro = new RegExp("^(" + Object.keys(yl).join("|") + ")"), Mo = new RegExp("^(" + Object.keys(wl).join("|") + ")"), Pn = new RegExp("^(" + Object.keys(Sl).join("|") + ")"), Oo = /^[Mm]\s?[-+]?\.?\d/, Po = /^img:/, Fo = /^svguse:/, zo = /^ion-/, Ho = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, ke = se({
  name: "QIcon",
  props: {
    ...Tt,
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
    const { proxy: { $q: n } } = le(), l = $t(e), o = f(
      () => "q-icon" + (e.left === !0 ? " on-left" : "") + (e.right === !0 ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")
    ), u = f(() => {
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
        const [r, p = Mn] = s.split("|");
        return {
          svg: !0,
          viewBox: p,
          nodes: r.split("&&").map((m) => {
            const [c, b, _] = m.split("@@");
            return h("path", { style: b, d: c, transform: _ });
          })
        };
      }
      if (Po.test(s) === !0)
        return {
          img: !0,
          src: s.substring(4)
        };
      if (Fo.test(s) === !0) {
        const [r, p = Mn] = s.split("|");
        return {
          svguse: !0,
          src: r.substring(7),
          viewBox: p
        };
      }
      let v = " ";
      const g = s.match(Ro);
      if (g !== null)
        a = yl[g[1]](s);
      else if (Ho.test(s) === !0)
        a = s;
      else if (zo.test(s) === !0)
        a = `ionicons ion-${n.platform.is.ios === !0 ? "ios" : "md"}${s.substring(3)}`;
      else if (Pn.test(s) === !0) {
        a = "notranslate material-symbols";
        const r = s.match(Pn);
        r !== null && (s = s.substring(6), a += Sl[r[1]]), v = s;
      } else {
        a = "notranslate material-icons";
        const r = s.match(Mo);
        r !== null && (s = s.substring(2), a += wl[r[1]]), v = s;
      }
      return {
        cls: a,
        content: v
      };
    });
    return () => {
      const a = {
        class: o.value,
        style: l.value,
        "aria-hidden": "true",
        role: "presentation"
      };
      return u.value.none === !0 ? h(e.tag, a, Se(t.default)) : u.value.img === !0 ? h("span", a, Ae(t.default, [
        h("img", { src: u.value.src })
      ])) : u.value.svg === !0 ? h("span", a, Ae(t.default, [
        h("svg", {
          viewBox: u.value.viewBox || "0 0 24 24"
        }, u.value.nodes)
      ])) : u.value.svguse === !0 ? h("span", a, Ae(t.default, [
        h("svg", {
          viewBox: u.value.viewBox
        }, [
          h("use", { "xlink:href": u.value.src })
        ])
      ])) : (u.value.cls !== void 0 && (a.class += " " + u.value.cls), h(e.tag, a, Ae(t.default, [
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
    cSize: f(() => e.size in tn ? `${tn[e.size]}px` : e.size),
    classes: f(
      () => "q-spinner" + (e.color ? ` text-${e.color}` : "")
    )
  };
}
const xl = se({
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
    return () => h("svg", {
      class: n.value + " q-spinner-mat",
      width: t.value,
      height: t.value,
      viewBox: "25 25 50 50"
    }, [
      h("circle", {
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
function nn(e, t) {
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
  const t = gl(e);
  if (t)
    return t.$el || t;
}
function kl(e, t) {
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
function Cl(e) {
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
function Ve(e) {
  e.stopPropagation();
}
function we(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function ne(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function ln(e, t, n) {
  const l = `__q_${t}_evt`;
  e[l] = e[l] !== void 0 ? e[l].concat(n) : n, n.forEach((o) => {
    o[0].addEventListener(o[1], e[o[2]], fe[o[3]]);
  });
}
function ql(e, t) {
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
function Fn(e, t, n, l) {
  n.modifiers.stop === !0 && Ve(e);
  const o = n.modifiers.color;
  let u = n.modifiers.center;
  u = u === !0 || l === !0;
  const a = document.createElement("span"), s = document.createElement("span"), v = Cl(e), { left: g, top: r, width: p, height: m } = t.getBoundingClientRect(), c = Math.sqrt(p * p + m * m), b = c / 2, _ = `${(p - c) / 2}px`, d = u ? _ : `${v.left - g - b}px`, V = `${(m - c) / 2}px`, S = u ? V : `${v.top - r - b}px`;
  s.className = "q-ripple__inner", nn(s, {
    height: `${c}px`,
    width: `${c}px`,
    transform: `translate3d(${d},${S},0) scale3d(.2,.2,1)`,
    opacity: 0
  }), a.className = `q-ripple${o ? " text-" + o : ""}`, a.setAttribute("dir", "ltr"), a.appendChild(s), t.appendChild(a);
  const y = () => {
    a.remove(), clearTimeout(E);
  };
  n.abort.push(y);
  let E = setTimeout(() => {
    s.classList.add("q-ripple__inner--enter"), s.style.transform = `translate3d(${_},${V},0) scale3d(1,1,1)`, s.style.opacity = 0.2, E = setTimeout(() => {
      s.classList.remove("q-ripple__inner--enter"), s.classList.add("q-ripple__inner--leave"), s.style.opacity = 0, E = setTimeout(() => {
        a.remove(), n.abort.splice(n.abort.indexOf(y), 1);
      }, 275);
    }, 250);
  }, 50);
}
function zn(e, { modifiers: t, value: n, arg: l }) {
  const o = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = {
    early: o.early === !0,
    stop: o.stop === !0,
    center: o.center === !0,
    color: o.color || l,
    keyCodes: [].concat(o.keyCodes || 13)
  };
}
const _l = _o(
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
          l.enabled === !0 && o.qSkipRipple !== !0 && o.type === (l.modifiers.early === !0 ? "pointerdown" : "click") && Fn(o, e, l, o.qKeyEvent === !0);
        },
        keystart: Ko((o) => {
          l.enabled === !0 && o.qSkipRipple !== !0 && Fe(o, l.modifiers.keyCodes) === !0 && o.type === `key${l.modifiers.early === !0 ? "down" : "up"}` && Fn(o, e, l, !0);
        }, 300)
      };
      zn(l, t), e.__qripple = l, ln(l, "main", [
        [e, "pointerdown", "start", "passive"],
        [e, "click", "start", "passive"],
        [e, "keydown", "keystart", "passive"],
        [e, "keyup", "keystart", "passive"]
      ]);
    },
    updated(e, t) {
      if (t.oldValue !== t.value) {
        const n = e.__qripple;
        n !== void 0 && (n.enabled = t.value !== !1, n.enabled === !0 && Object(t.value) === t.value && zn(n, t));
      }
    },
    beforeUnmount(e) {
      const t = e.__qripple;
      t !== void 0 && (t.abort.forEach((n) => {
        n();
      }), ql(t, "main"), delete e._qripple);
    }
  }
), El = {
  left: "start",
  center: "center",
  right: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch"
}, Qo = Object.keys(El), Uo = {
  align: {
    type: String,
    validator: (e) => Qo.includes(e)
  }
};
function Xo(e) {
  return f(() => {
    const t = e.align === void 0 ? e.vertical === !0 ? "stretch" : "left" : e.align;
    return `${e.vertical === !0 ? "items" : "justify"}-${El[t]}`;
  });
}
function Wt(e) {
  if (Object(e.$parent) === e.$parent)
    return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy)
      return t.proxy;
    t = t.parent;
  }
}
function Bl(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function mn(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
function Hn(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function In(e, t) {
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
function Dn(e, t) {
  return Array.isArray(t) === !0 ? e.length === t.length && e.every((n, l) => n === t[l]) : e.length === 1 && e[0] === t;
}
function Go(e, t) {
  return Array.isArray(e) === !0 ? Dn(e, t) : Array.isArray(t) === !0 ? Dn(t, e) : e === t;
}
function Zo(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (Go(e[n], t[n]) === !1)
      return !1;
  return !0;
}
const Tl = {
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
function $l({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const n = le(), { props: l, proxy: o, emit: u } = n, a = Bl(n), s = f(() => l.disable !== !0 && l.href !== void 0), v = t === !0 ? f(
    () => a === !0 && l.disable !== !0 && s.value !== !0 && l.to !== void 0 && l.to !== null && l.to !== ""
  ) : f(
    () => a === !0 && s.value !== !0 && l.to !== void 0 && l.to !== null && l.to !== ""
  ), g = f(() => v.value === !0 ? S(l.to) : null), r = f(() => g.value !== null), p = f(() => s.value === !0 || r.value === !0), m = f(() => l.type === "a" || p.value === !0 ? "a" : l.tag || e || "div"), c = f(() => s.value === !0 ? {
    href: l.href,
    target: l.target
  } : r.value === !0 ? {
    href: g.value.href,
    target: l.target
  } : {}), b = f(() => {
    if (r.value === !1)
      return -1;
    const { matched: w } = g.value, { length: R } = w, L = w[R - 1];
    if (L === void 0)
      return -1;
    const I = o.$route.matched;
    if (I.length === 0)
      return -1;
    const K = I.findIndex(
      In.bind(null, L)
    );
    if (K > -1)
      return K;
    const J = Hn(w[R - 2]);
    return (
      // we are dealing with nested routes
      R > 1 && Hn(L) === J && I[I.length - 1].path !== J ? I.findIndex(
        In.bind(null, w[R - 2])
      ) : K
    );
  }), _ = f(
    () => r.value === !0 && b.value !== -1 && Yo(o.$route.params, g.value.params)
  ), d = f(
    () => _.value === !0 && b.value === o.$route.matched.length - 1 && Zo(o.$route.params, g.value.params)
  ), V = f(() => r.value === !0 ? d.value === !0 ? ` ${l.exactActiveClass} ${l.activeClass}` : l.exact === !0 ? "" : _.value === !0 ? ` ${l.activeClass}` : "" : "");
  function S(w) {
    try {
      return o.$router.resolve(w);
    } catch {
    }
    return null;
  }
  function y(w, { returnRouterError: R, to: L = l.to, replace: I = l.replace } = {}) {
    if (l.disable === !0)
      return w.preventDefault(), Promise.resolve(!1);
    if (
      // don't redirect with control keys;
      // should match RouterLink from Vue Router
      w.metaKey || w.altKey || w.ctrlKey || w.shiftKey || w.button !== void 0 && w.button !== 0 || l.target === "_blank"
    )
      return Promise.resolve(!1);
    w.preventDefault();
    const K = o.$router[I === !0 ? "replace" : "push"](L);
    return R === !0 ? K : K.then(() => {
    }).catch(() => {
    });
  }
  function E(w) {
    if (r.value === !0) {
      const R = (L) => y(w, L);
      u("click", w, R), w.defaultPrevented !== !0 && R();
    } else
      u("click", w);
  }
  return {
    hasRouterLink: r,
    hasHrefLink: s,
    hasLink: p,
    linkTag: m,
    resolvedLink: g,
    linkIsActive: _,
    linkIsExactActive: d,
    linkClass: V,
    linkAttrs: c,
    getLink: S,
    navigateToRouterLink: y,
    navigateOnClick: E
  };
}
const jn = {
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
  ...Tt,
  ...Tl,
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
  const t = $t(e, Jo), n = Xo(e), { hasRouterLink: l, hasLink: o, linkTag: u, linkAttrs: a, navigateOnClick: s } = $l({
    fallbackTag: "button"
  }), v = f(() => {
    const d = e.fab === !1 && e.fabMini === !1 ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, d, {
      padding: e.padding.split(/\s+/).map((V) => V in jn ? jn[V] + "px" : V).join(" "),
      minWidth: "0",
      minHeight: "0"
    }) : d;
  }), g = f(
    () => e.rounded === !0 || e.fab === !0 || e.fabMini === !0
  ), r = f(
    () => e.disable !== !0 && e.loading !== !0
  ), p = f(() => r.value === !0 ? e.tabindex || 0 : -1), m = f(() => li(e, "standard")), c = f(() => {
    const d = { tabindex: p.value };
    return o.value === !0 ? Object.assign(d, a.value) : ei.includes(e.type) === !0 && (d.type = e.type), u.value === "a" ? (e.disable === !0 ? d["aria-disabled"] = "true" : d.href === void 0 && (d.role = "button"), l.value !== !0 && ti.test(e.type) === !0 && (d.type = e.type)) : e.disable === !0 && (d.disabled = "", d["aria-disabled"] = "true"), e.loading === !0 && e.percentage !== void 0 && Object.assign(d, {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": e.percentage
    }), d;
  }), b = f(() => {
    let d;
    e.color !== void 0 ? e.flat === !0 || e.outline === !0 ? d = `text-${e.textColor || e.color}` : d = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (d = `text-${e.textColor}`);
    const V = e.round === !0 ? "round" : `rectangle${g.value === !0 ? " q-btn--rounded" : e.square === !0 ? " q-btn--square" : ""}`;
    return `q-btn--${m.value} q-btn--${V}` + (d !== void 0 ? " " + d : "") + (r.value === !0 ? " q-btn--actionable q-focusable q-hoverable" : e.disable === !0 ? " disabled" : "") + (e.fab === !0 ? " q-btn--fab" : e.fabMini === !0 ? " q-btn--fab-mini" : "") + (e.noCaps === !0 ? " q-btn--no-uppercase" : "") + (e.dense === !0 ? " q-btn--dense" : "") + (e.stretch === !0 ? " no-border-radius self-stretch" : "") + (e.glossy === !0 ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), _ = f(
    () => n.value + (e.stack === !0 ? " column" : " row") + (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") + (e.loading === !0 ? " q-btn__content--hidden" : "")
  );
  return {
    classes: b,
    style: v,
    innerClasses: _,
    attributes: c,
    hasLink: o,
    linkTag: u,
    navigateOnClick: s,
    isActionable: r
  };
}
const { passiveCapture: ge } = fe;
let Ke = null, Qe = null, Ue = null;
const Wn = se({
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
      hasLink: v,
      linkTag: g,
      navigateOnClick: r,
      isActionable: p
    } = ii(e), m = P(null), c = P(null);
    let b = null, _, d = null;
    const V = f(
      () => e.label !== void 0 && e.label !== null && e.label !== ""
    ), S = f(() => e.disable === !0 || e.ripple === !1 ? !1 : {
      keyCodes: v.value === !0 ? [13, 32] : [13],
      ...e.ripple === !0 ? {} : e.ripple
    }), y = f(() => ({ center: e.round })), E = f(() => {
      const $ = Math.max(0, Math.min(100, e.percentage));
      return $ > 0 ? { transition: "transform 0.6s", transform: `translateX(${$ - 100}%)` } : {};
    }), w = f(() => {
      if (e.loading === !0)
        return {
          onMousedown: X,
          onTouchstart: X,
          onClick: X,
          onKeydown: X,
          onKeyup: X
        };
      if (p.value === !0) {
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
    }), R = f(() => ({
      ref: m,
      class: "q-btn q-btn-item non-selectable no-outline " + o.value,
      style: u.value,
      ...s.value,
      ...w.value
    }));
    function L($) {
      if (m.value !== null) {
        if ($ !== void 0) {
          if ($.defaultPrevented === !0)
            return;
          const W = document.activeElement;
          if (e.type === "submit" && W !== document.body && m.value.contains(W) === !1 && W.contains(m.value) === !1) {
            m.value.focus();
            const G = () => {
              document.removeEventListener("keydown", ne, !0), document.removeEventListener("keyup", G, ge), m.value !== null && m.value.removeEventListener("blur", G, ge);
            };
            document.addEventListener("keydown", ne, !0), document.addEventListener("keyup", G, ge), m.value.addEventListener("blur", G, ge);
          }
        }
        r($);
      }
    }
    function I($) {
      m.value !== null && (n("keydown", $), Fe($, [13, 32]) === !0 && Qe !== m.value && (Qe !== null && z(), $.defaultPrevented !== !0 && (m.value.focus(), Qe = m.value, m.value.classList.add("q-btn--active"), document.addEventListener("keyup", N, !0), m.value.addEventListener("blur", N, ge)), ne($)));
    }
    function K($) {
      m.value !== null && (n("touchstart", $), $.defaultPrevented !== !0 && (Ke !== m.value && (Ke !== null && z(), Ke = m.value, b = $.target, b.addEventListener("touchcancel", N, ge), b.addEventListener("touchend", N, ge)), _ = !0, d !== null && clearTimeout(d), d = setTimeout(() => {
        d = null, _ = !1;
      }, 200)));
    }
    function J($) {
      m.value !== null && ($.qSkipRipple = _ === !0, n("mousedown", $), $.defaultPrevented !== !0 && Ue !== m.value && (Ue !== null && z(), Ue = m.value, m.value.classList.add("q-btn--active"), document.addEventListener("mouseup", N, ge)));
    }
    function N($) {
      if (m.value !== null && !($ !== void 0 && $.type === "blur" && document.activeElement === m.value)) {
        if ($ !== void 0 && $.type === "keyup") {
          if (Qe === m.value && Fe($, [13, 32]) === !0) {
            const W = new MouseEvent("click", $);
            W.qKeyEvent = !0, $.defaultPrevented === !0 && we(W), $.cancelBubble === !0 && Ve(W), m.value.dispatchEvent(W), ne($), $.qKeyEvent = !0;
          }
          n("keyup", $);
        }
        z();
      }
    }
    function z($) {
      const W = c.value;
      $ !== !0 && (Ke === m.value || Ue === m.value) && W !== null && W !== document.activeElement && (W.setAttribute("tabindex", -1), W.focus()), Ke === m.value && (b !== null && (b.removeEventListener("touchcancel", N, ge), b.removeEventListener("touchend", N, ge)), Ke = b = null), Ue === m.value && (document.removeEventListener("mouseup", N, ge), Ue = null), Qe === m.value && (document.removeEventListener("keyup", N, !0), m.value !== null && m.value.removeEventListener("blur", N, ge), Qe = null), m.value !== null && m.value.classList.remove("q-btn--active");
    }
    function X($) {
      ne($), $.qSkipRipple = !0;
    }
    return he(() => {
      z(!0);
    }), Object.assign(l, { click: L }), () => {
      let $ = [];
      e.icon !== void 0 && $.push(
        h(ke, {
          name: e.icon,
          left: e.stack === !1 && V.value === !0,
          role: "img",
          "aria-hidden": "true"
        })
      ), V.value === !0 && $.push(
        h("span", { class: "block" }, [e.label])
      ), $ = Ae(t.default, $), e.iconRight !== void 0 && e.round === !1 && $.push(
        h(ke, {
          name: e.iconRight,
          right: e.stack === !1 && V.value === !0,
          role: "img",
          "aria-hidden": "true"
        })
      );
      const W = [
        h("span", {
          class: "q-focus-helper",
          ref: c
        })
      ];
      return e.loading === !0 && e.percentage !== void 0 && W.push(
        h("span", {
          class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === !0 ? " q-btn__progress--dark" : "")
        }, [
          h("span", {
            class: "q-btn__progress-indicator fit block",
            style: E.value
          })
        ])
      ), W.push(
        h("span", {
          class: "q-btn__content text-center col items-center q-anchor--skip " + a.value
        }, $)
      ), e.loading !== null && W.push(
        h(at, {
          name: "q-transition--fade"
        }, () => e.loading === !0 ? [
          h("span", {
            key: "loading",
            class: "absolute-full flex flex-center"
          }, t.loading !== void 0 ? t.loading() : [h(xl)])
        ] : null)
      ), hl(
        h(
          g.value,
          R.value,
          W
        ),
        [[
          _l,
          S.value,
          void 0,
          y.value
        ]]
      );
    };
  }
});
let Re = [], rt = [];
function Ll(e) {
  rt = rt.filter((t) => t !== e);
}
function ui(e) {
  Ll(e), rt.push(e);
}
function Nn(e) {
  Ll(e), rt.length === 0 && Re.length !== 0 && (Re[Re.length - 1](), Re = []);
}
function Lt(e) {
  rt.length === 0 ? e() : Re.push(e);
}
function ai(e) {
  Re = Re.filter((t) => t !== e);
}
const Al = "_q_fo_", ri = se({
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
      const b = typeof c == "boolean" ? c : e.noErrorFocus !== !0, _ = ++u, d = (y, E) => {
        n("validation" + (y === !0 ? "Success" : "Error"), E);
      }, V = (y) => {
        const E = y.validate();
        return typeof E.then == "function" ? E.then(
          (w) => ({ valid: w, comp: y }),
          (w) => ({ valid: !1, comp: y, err: w })
        ) : Promise.resolve({ valid: E, comp: y });
      };
      return (e.greedy === !0 ? Promise.all(a.map(V)).then((y) => y.filter((E) => E.valid !== !0)) : a.reduce(
        (y, E) => y.then(() => V(E).then((w) => {
          if (w.valid === !1)
            return Promise.reject(w);
        })),
        Promise.resolve()
      ).catch((y) => [y])).then((y) => {
        if (y === void 0 || y.length === 0)
          return _ === u && d(!0), !0;
        if (_ === u) {
          const { comp: E, err: w } = y[0];
          if (w !== void 0 && console.error(w), d(!1, E), b === !0) {
            const R = y.find(({ comp: L }) => typeof L.focus == "function" && mn(L.$) === !1);
            R !== void 0 && R.comp.focus();
          }
        }
        return !1;
      });
    }
    function v() {
      u++, a.forEach((c) => {
        typeof c.resetValidation == "function" && c.resetValidation();
      });
    }
    function g(c) {
      c !== void 0 && ne(c);
      const b = u + 1;
      s().then((_) => {
        b === u && _ === !0 && (e.onSubmit !== void 0 ? n("submit", c) : c !== void 0 && c.target !== void 0 && typeof c.target.submit == "function" && c.target.submit());
      });
    }
    function r(c) {
      c !== void 0 && ne(c), n("reset"), de(() => {
        v(), e.autofocus === !0 && e.noResetFocus !== !0 && p();
      });
    }
    function p() {
      Lt(() => {
        if (o.value === null)
          return;
        const c = o.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || o.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || o.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(o.value.querySelectorAll("[tabindex]"), (b) => b.tabIndex > -1);
        c != null && c.focus({ preventScroll: !0 });
      });
    }
    bo(Al, {
      bindComponent(c) {
        a.push(c);
      },
      unbindComponent(c) {
        const b = a.indexOf(c);
        b > -1 && a.splice(b, 1);
      }
    });
    let m = !1;
    return st(() => {
      m = !0;
    }), vn(() => {
      m === !0 && e.autofocus === !0 && p();
    }), ct(() => {
      e.autofocus === !0 && p();
    }), Object.assign(l.proxy, {
      validate: s,
      resetValidation: v,
      submit: g,
      reset: r,
      focus: p,
      getValidationComponents: () => a
    }), () => h("form", {
      class: "q-form",
      ref: o,
      onSubmit: g,
      onReset: r
    }, Se(t.default));
  }
}), si = {
  class: /* @__PURE__ */ Zt("row q-col-gutter-md")
}, ci = { class: "col" }, di = {
  key: 0,
  class: "col-auto flex"
}, fi = /* @__PURE__ */ fn({
  __name: "AppForm",
  props: {
    fieldWrapper: { default: () => "div" },
    actionButtonWrapper: { default: () => "div" },
    closeActionButtonText: { default: () => "Stäng" },
    confirmActionButtonText: { default: () => "Spara" },
    layoutSlots: { default: () => 1 },
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
    const n = e, l = P(), o = (d = {}, V) => {
      for (const S of V)
        Rn(
          d,
          S.scope,
          S != null && S.transform ? S == null ? void 0 : S.transform(S.defaultValue) : S.defaultValue
        );
      return d;
    }, { resetDefaultForm: u, validateForm: a, formData: s, fieldError: v } = Vo(
      o(n.modelValue, n.schema)
    );
    Z(
      s,
      (d) => {
        t("update:modelValue", d);
      },
      {
        deep: !0,
        immediate: !0
      }
    );
    const g = (d) => qo(s.value, d), r = (d, V) => {
      Rn(
        s.value,
        V.scope,
        V != null && V.transform ? V == null ? void 0 : V.transform(d) : d
      ), v.value[V.scope] && a(n.modelSchema);
    }, p = () => {
      a(n.modelSchema), a(n.modelSchema) && t("submit", qe(s.value));
    }, m = () => {
      var d;
      u(), (d = l.value) == null || d.resetValidation(), t("reset");
    }, c = () => {
      t("close");
    }, b = () => a(n.modelSchema), _ = (d) => ({
      bind: {
        ...d.componentProps,
        readonly: n.readonly,
        disable: n.disable,
        modelValue: g(d.scope),
        error: !!v.value[d.scope],
        errorMessage: v.value[d.scope] || ""
      },
      on: {
        "update:modelValue": (V) => r(V, d)
      }
    });
    return (d, V) => (pe(), Xe(gl(ri), {
      onValidationError: b,
      onSubmit: p,
      greedy: "",
      onReset: m,
      ref_key: "form",
      ref: l
    }, {
      default: be(() => [
        (pe(), Xe(zt(d.fieldWrapper), null, {
          default: be(() => [
            Ht("div", si, [
              (pe(!0), nt(It, null, Ln(d.layoutSlots, (S) => (pe(), nt(It, { key: S }, [
                Ht("div", ci, [
                  Ht("div", {
                    class: Zt(`row q-col-gutter-${d.colGutter}`)
                  }, [
                    (pe(!0), nt(It, null, Ln(d.schema.filter((y) => {
                      const E = y.layoutSlot || 1;
                      return E > d.layoutSlots ? S === 1 : E === S;
                    }), (y) => (pe(), nt("div", {
                      key: y.scope,
                      class: Zt(`col-${y.cols || "auto"}`)
                    }, [
                      gt(d.$slots, y.scope, {
                        props: {
                          setterScope: r,
                          getterScope: g,
                          scope: y.scope,
                          ..._(y)
                        }
                      }, () => [
                        (pe(), Xe(zt(y.component), kt(_(y).bind, po(_(y).on)), null, 16))
                      ])
                    ], 2))), 128))
                  ], 2)
                ]),
                S !== d.layoutSlots ? (pe(), nt("div", di, [
                  me(en, { vertical: "" })
                ])) : bl("", !0)
              ], 64))), 128))
            ])
          ]),
          _: 3
        })),
        gt(d.$slots, "actions", {
          props: { bind: { ...d.actionButtonProps } }
        }, () => [
          me(en),
          (pe(), Xe(zt(d.actionButtonWrapper), null, {
            default: be(() => [
              gt(d.$slots, "action-button-left"),
              me(To),
              gt(d.$slots, "action-button-right", {}, () => [
                me(Wn, kt(d.actionButtonProps, {
                  onClick: c,
                  disable: d.loading
                }), {
                  default: be(() => [
                    Jt(An(d.closeActionButtonText), 1)
                  ]),
                  _: 1
                }, 16, ["disable"]),
                me(Wn, kt(d.actionButtonProps, {
                  type: "submit",
                  color: "primary",
                  loading: d.loading
                }), {
                  default: be(() => [
                    Jt(An(d.confirmActionButtonText), 1)
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
  const n = P(null), l = f(() => e.disable === !0 ? null : h("span", {
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
const Rl = {
  name: String
};
function mi(e = {}) {
  return (t, n, l) => {
    t[n](
      h("input", {
        class: "hidden" + (l || ""),
        ...e.value
      })
    );
  };
}
function hi(e) {
  return f(() => e.name || e.for);
}
const gi = {
  xs: 30,
  sm: 35,
  md: 40,
  lg: 50,
  xl: 60
}, bi = {
  ...Ze,
  ...Tt,
  ...Rl,
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
  const { props: n, slots: l, emit: o, proxy: u } = le(), { $q: a } = u, s = Je(n, a), v = P(null), { refocusTargetEl: g, refocusTarget: r } = vi(n, v), p = $t(n, gi), m = f(
    () => n.val !== void 0 && Array.isArray(n.modelValue)
  ), c = f(() => {
    const z = qe(n.val);
    return m.value === !0 ? n.modelValue.findIndex((X) => qe(X) === z) : -1;
  }), b = f(() => m.value === !0 ? c.value > -1 : qe(n.modelValue) === qe(n.trueValue)), _ = f(() => m.value === !0 ? c.value === -1 : qe(n.modelValue) === qe(n.falseValue)), d = f(
    () => b.value === !1 && _.value === !1
  ), V = f(() => n.disable === !0 ? -1 : n.tabindex || 0), S = f(
    () => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === !0 ? " disabled" : "") + (s.value === !0 ? ` q-${e}--dark` : "") + (n.dense === !0 ? ` q-${e}--dense` : "") + (n.leftLabel === !0 ? " reverse" : "")
  ), y = f(() => {
    const z = b.value === !0 ? "truthy" : _.value === !0 ? "falsy" : "indet", X = n.color !== void 0 && (n.keepColor === !0 || (e === "toggle" ? b.value === !0 : _.value !== !0)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${z}${X}`;
  }), E = f(() => {
    const z = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(z, {
      // see https://vuejs.org/guide/extras/render-function.html#creating-vnodes (.prop)
      ".checked": b.value,
      "^checked": b.value === !0 ? "checked" : void 0,
      name: n.name,
      value: m.value === !0 ? n.val : n.trueValue
    }), z;
  }), w = mi(E), R = f(() => {
    const z = {
      tabindex: V.value,
      role: e === "toggle" ? "switch" : "checkbox",
      "aria-label": n.label,
      "aria-checked": d.value === !0 ? "mixed" : b.value === !0 ? "true" : "false"
    };
    return n.disable === !0 && (z["aria-disabled"] = "true"), z;
  });
  function L(z) {
    z !== void 0 && (ne(z), r(z)), n.disable !== !0 && o("update:modelValue", I(), z);
  }
  function I() {
    if (m.value === !0) {
      if (b.value === !0) {
        const z = n.modelValue.slice();
        return z.splice(c.value, 1), z;
      }
      return n.modelValue.concat([n.val]);
    }
    if (b.value === !0) {
      if (n.toggleOrder !== "ft" || n.toggleIndeterminate === !1)
        return n.falseValue;
    } else if (_.value === !0) {
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
  const N = t(b, d);
  return Object.assign(u, { toggle: L }), () => {
    const z = N();
    n.disable !== !0 && w(
      z,
      "unshift",
      ` q-${e}__native absolute q-ma-none q-pa-none`
    );
    const X = [
      h("div", {
        class: y.value,
        style: p.value,
        "aria-hidden": "true"
      }, z)
    ];
    g.value !== null && X.push(g.value);
    const $ = n.label !== void 0 ? Ae(l.default, [n.label]) : Se(l.default);
    return $ !== void 0 && X.push(
      h("div", {
        class: `q-${e}__label q-anchor--skip`
      }, $)
    ), h("div", {
      ref: v,
      class: S.value,
      ...R.value,
      onClick: L,
      onKeydown: K,
      onKeyup: J
    }, X);
  };
}
const wi = h("div", {
  key: "svg",
  class: "q-checkbox__bg absolute"
}, [
  h("svg", {
    class: "q-checkbox__svg fit absolute-full",
    viewBox: "0 0 24 24"
  }, [
    h("path", {
      class: "q-checkbox__truthy",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    }),
    h("path", {
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
      const o = f(
        () => (n.value === !0 ? e.checkedIcon : l.value === !0 ? e.indeterminateIcon : e.uncheckedIcon) || null
      );
      return () => o.value !== null ? [
        h("div", {
          key: "icon",
          class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
        }, [
          h(ke, {
            class: "q-checkbox__icon",
            name: o.value
          })
        ])
      ] : [wi];
    }
    return yi("checkbox", t);
  }
}), Ct = se({
  name: "QItemSection",
  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean
  },
  setup(e, { slots: t }) {
    const n = f(
      () => `q-item__section column q-item__section--${e.avatar === !0 || e.side === !0 || e.thumbnail === !0 ? "side" : "main"}` + (e.top === !0 ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === !0 ? " q-item__section--avatar" : "") + (e.thumbnail === !0 ? " q-item__section--thumbnail" : "") + (e.noWrap === !0 ? " q-item__section--nowrap" : "")
    );
    return () => h("div", { class: n.value }, Se(t.default));
  }
}), on = se({
  name: "QItemLabel",
  props: {
    overline: Boolean,
    caption: Boolean,
    header: Boolean,
    lines: [Number, String]
  },
  setup(e, { slots: t }) {
    const n = f(() => parseInt(e.lines, 10)), l = f(
      () => "q-item__label" + (e.overline === !0 ? " q-item__label--overline text-overline" : "") + (e.caption === !0 ? " q-item__label--caption text-caption" : "") + (e.header === !0 ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "")
    ), o = f(() => e.lines !== void 0 && n.value > 1 ? {
      overflow: "hidden",
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": n.value
    } : null);
    return () => h("div", {
      style: o.value,
      class: l.value
    }, Se(t.default));
  }
}), un = se({
  name: "QItem",
  props: {
    ...Ze,
    ...Tl,
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
    const { proxy: { $q: l } } = le(), o = Je(e, l), { hasLink: u, linkAttrs: a, linkClass: s, linkTag: v, navigateOnClick: g } = $l(), r = P(null), p = P(null), m = f(
      () => e.clickable === !0 || u.value === !0 || e.tag === "label"
    ), c = f(
      () => e.disable !== !0 && m.value === !0
    ), b = f(
      () => "q-item q-item-type row no-wrap" + (e.dense === !0 ? " q-item--dense" : "") + (o.value === !0 ? " q-item--dark" : "") + (u.value === !0 && e.active === null ? s.value : e.active === !0 ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === !0 ? " disabled" : "") + (c.value === !0 ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === !0 ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === !0 ? " q-manual-focusable--focused" : "") : "")
    ), _ = f(() => e.insetLevel === void 0 ? null : {
      ["padding" + (l.lang.rtl === !0 ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px"
    });
    function d(y) {
      c.value === !0 && (p.value !== null && (y.qKeyEvent !== !0 && document.activeElement === r.value ? p.value.focus() : document.activeElement === p.value && r.value.focus()), g(y));
    }
    function V(y) {
      if (c.value === !0 && Fe(y, 13) === !0) {
        ne(y), y.qKeyEvent = !0;
        const E = new MouseEvent("click", y);
        E.qKeyEvent = !0, r.value.dispatchEvent(E);
      }
      n("keyup", y);
    }
    function S() {
      const y = $o(t.default, []);
      return c.value === !0 && y.unshift(
        h("div", { class: "q-focus-helper", tabindex: -1, ref: p })
      ), y;
    }
    return () => {
      const y = {
        ref: r,
        class: b.value,
        style: _.value,
        role: "listitem",
        onClick: d,
        onKeyup: V
      };
      return c.value === !0 ? (y.tabindex = e.tabindex || "0", Object.assign(y, a.value)) : m.value === !0 && (y["aria-disabled"] = "true"), h(
        v.value,
        y,
        S()
      );
    };
  }
});
function hn(e, t, n, l) {
  return Object.defineProperty(e, t, {
    get: n,
    set: l,
    enumerable: !0
  }), e;
}
const qt = P(
  !1
);
let gn;
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
const Ml = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function Ci(e) {
  gn = { is: { ...e } }, delete e.mac, delete e.desktop;
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
  return u === !0 || t.indexOf("mobile") > -1 ? (o.mobile = !0, o.edga || o.edgios ? (o.edge = !0, l.browser = "edge") : o.crios ? (o.chrome = !0, l.browser = "chrome") : o.fxios && (o.firefox = !0, l.browser = "firefox")) : o.desktop = !0, (o.ipod || o.ipad || o.iphone) && (o.ios = !0), o["windows phone"] && (o.winphone = !0, delete o["windows phone"]), (o.chrome || o.opr || o.safari || o.vivaldi || o.mobile === !0 && o.ios !== !0 && u !== !0) && (o.webkit = !0), o.edg && (l.browser = "edgechromium", o.edgeChromium = !0), (o.safari && o.blackberry || o.bb) && (l.browser = "blackberry", o.blackberry = !0), o.safari && o.playbook && (l.browser = "playbook", o.playbook = !0), o.opr && (l.browser = "opera", o.opera = !0), o.safari && o.android && (l.browser = "android", o.android = !0), o.safari && o.kindle && (l.browser = "kindle", o.kindle = !0), o.safari && o.silk && (l.browser = "silk", o.silk = !0), o.vivaldi && (l.browser = "vivaldi", o.vivaldi = !0), o.name = l.browser, o.platform = l.platform, t.indexOf("electron") > -1 ? o.electron = !0 : document.location.href.indexOf("-extension://") > -1 ? o.bex = !0 : (window.Capacitor !== void 0 ? (o.capacitor = !0, o.nativeMobile = !0, o.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (o.cordova = !0, o.nativeMobile = !0, o.nativeMobileWrapper = "cordova"), Ml === !0 && o.mac === !0 && (o.desktop === !0 && o.safari === !0 || o.nativeMobile === !0 && o.android !== !0 && o.ios !== !0 && o.ipad !== !0) && Ci(o)), o;
}
const Kn = navigator.userAgent || navigator.vendor || window.opera, Vi = {
  has: {
    touch: !1,
    webStorage: !1
  },
  within: { iframe: !1 }
}, re = {
  userAgent: Kn,
  is: qi(Kn),
  has: {
    touch: Ml
  },
  within: {
    iframe: window.self !== window.top
  }
}, an = {
  install(e) {
    const { $q: t } = e;
    qt.value === !0 ? (e.onSSRHydrated.push(() => {
      Object.assign(t.platform, re), qt.value = !1, gn = void 0;
    }), t.platform = yo(this)) : t.platform = this;
  }
};
{
  let e;
  hn(re.has, "webStorage", () => {
    if (e !== void 0)
      return e;
    try {
      if (window.localStorage)
        return e = !0, !0;
    } catch {
    }
    return e = !1, !1;
  }), re.is.ios === !0 && window.navigator.vendor.toLowerCase().indexOf("apple"), qt.value === !0 ? Object.assign(an, re, gn, Vi) : Object.assign(an, re);
}
function _i({ validate: e, resetValidation: t, requiresQForm: n }) {
  const l = wo(Al, !1);
  if (l !== !1) {
    const { props: o, proxy: u } = le();
    Object.assign(u, { validate: e, resetValidation: t }), Z(() => o.disable, (a) => {
      a === !0 ? (typeof t == "function" && t(), l.unbindComponent(u)) : l.bindComponent(u);
    }), ct(() => {
      o.disable !== !0 && l.bindComponent(u);
    }), he(() => {
      o.disable !== !0 && l.unbindComponent(u);
    });
  } else
    n === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const Qn = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, Un = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, Xn = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, bt = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, pt = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, Nt = {
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
  hexColor: (e) => Qn.test(e),
  hexaColor: (e) => Un.test(e),
  hexOrHexaColor: (e) => Xn.test(e),
  rgbColor: (e) => bt.test(e),
  rgbaColor: (e) => pt.test(e),
  rgbOrRgbaColor: (e) => bt.test(e) || pt.test(e),
  hexOrRgbColor: (e) => Qn.test(e) || bt.test(e),
  hexaOrRgbaColor: (e) => Un.test(e) || pt.test(e),
  anyColor: (e) => Xn.test(e) || bt.test(e) || pt.test(e)
};
function Ol(e, t = 250, n) {
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
  _i({ validate: b, resetValidation: c });
  let s = 0, v;
  const g = f(
    () => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0
  ), r = f(
    () => n.disable !== !0 && g.value === !0
  ), p = f(
    () => n.error === !0 || o.value === !0
  ), m = f(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : u.value);
  Z(() => n.modelValue, () => {
    _();
  }), Z(() => n.reactiveRules, (V) => {
    V === !0 ? v === void 0 && (v = Z(() => n.rules, () => {
      _(!0);
    })) : v !== void 0 && (v(), v = void 0);
  }, { immediate: !0 }), Z(e, (V) => {
    V === !0 ? a.value === null && (a.value = !1) : a.value === !1 && (a.value = !0, r.value === !0 && n.lazyRules !== "ondemand" && t.value === !1 && d());
  });
  function c() {
    s++, t.value = !1, a.value = null, o.value = !1, u.value = null, d.cancel();
  }
  function b(V = n.modelValue) {
    if (r.value !== !0)
      return !0;
    const S = ++s, y = t.value !== !0 ? () => {
      a.value = !0;
    } : () => {
    }, E = (R, L) => {
      R === !0 && y(), o.value = R, u.value = L || null, t.value = !1;
    }, w = [];
    for (let R = 0; R < n.rules.length; R++) {
      const L = n.rules[R];
      let I;
      if (typeof L == "function" ? I = L(V, Nt) : typeof L == "string" && Nt[L] !== void 0 && (I = Nt[L](V)), I === !1 || typeof I == "string")
        return E(!0, I), !1;
      I !== !0 && I !== void 0 && w.push(I);
    }
    return w.length === 0 ? (E(!1), !0) : (t.value = !0, Promise.all(w).then(
      (R) => {
        if (R === void 0 || Array.isArray(R) === !1 || R.length === 0)
          return S === s && E(!1), !0;
        const L = R.find((I) => I === !1 || typeof I == "string");
        return S === s && E(L !== void 0, L), L === void 0;
      },
      (R) => (S === s && (console.error(R), E(!0)), !1)
    ));
  }
  function _(V) {
    r.value === !0 && n.lazyRules !== "ondemand" && (a.value === !0 || n.lazyRules !== !0 && V !== !0) && d();
  }
  const d = Ol(b, 0);
  return he(() => {
    v !== void 0 && v(), d.cancel();
  }), Object.assign(l, { resetValidation: c, validate: b }), hn(l, "hasError", () => p.value), {
    isDirtyModel: a,
    hasRules: g,
    hasError: p,
    errorMessage: m,
    validate: b,
    resetValidation: c
  };
}
const Yn = /^on[A-Z]/;
function $i(e, t) {
  const n = {
    listeners: P({}),
    attributes: P({})
  };
  function l() {
    const o = {}, u = {};
    for (const a in e)
      a !== "class" && a !== "style" && Yn.test(a) === !1 && (o[a] = e[a]);
    for (const a in t.props)
      Yn.test(a) === !0 && (u[a] = t.props[a]);
    n.attributes.value = o, n.listeners.value = u;
  }
  return pl(l), l(), n;
}
let Kt, yt = 0;
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
})(), Gn = 4096;
function Ai() {
  (Kt === void 0 || yt + 16 > Gn) && (yt = 0, Kt = Li(Gn));
  const e = Array.prototype.slice.call(Kt, yt, yt += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, ie[e[0]] + ie[e[1]] + ie[e[2]] + ie[e[3]] + "-" + ie[e[4]] + ie[e[5]] + "-" + ie[e[6]] + ie[e[7]] + "-" + ie[e[8]] + ie[e[9]] + "-" + ie[e[10]] + ie[e[11]] + ie[e[12]] + ie[e[13]] + ie[e[14]] + ie[e[15]];
}
function rn(e) {
  return e === void 0 ? `f_${Ai()}` : e;
}
function sn(e) {
  return e != null && ("" + e).length !== 0;
}
const bn = {
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
}, Pl = ["update:modelValue", "clear", "focus", "blur", "popupShow", "popupHide"];
function Fl() {
  const { props: e, attrs: t, proxy: n, vnode: l } = le();
  return {
    isDark: Je(e, n.$q),
    editable: f(
      () => e.disable !== !0 && e.readonly !== !0
    ),
    innerLoading: P(!1),
    focused: P(!1),
    hasPopupOpen: !1,
    splitAttrs: $i(t, l),
    targetUid: P(rn(e.for)),
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
function zl(e) {
  const { props: t, emit: n, slots: l, attrs: o, proxy: u } = le(), { $q: a } = u;
  let s = null;
  e.hasValue === void 0 && (e.hasValue = f(() => sn(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (T) => {
    n("update:modelValue", T);
  }), e.controlEvents === void 0 && (e.controlEvents = {
    onFocusin: K,
    onFocusout: J
  }), Object.assign(e, {
    clearValue: N,
    onControlFocusin: K,
    onControlFocusout: J,
    focus: L
  }), e.computedCounter === void 0 && (e.computedCounter = f(() => {
    if (t.counter !== !1) {
      const T = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === !0 ? t.modelValue.length : 0, j = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return T + (j !== void 0 ? " / " + j : "");
    }
  }));
  const {
    isDirtyModel: v,
    hasRules: g,
    hasError: r,
    errorMessage: p,
    resetValidation: m
  } = Ti(e.focused, e.innerLoading), c = e.floatingLabel !== void 0 ? f(() => t.stackLabel === !0 || e.focused.value === !0 || e.floatingLabel.value === !0) : f(() => t.stackLabel === !0 || e.focused.value === !0 || e.hasValue.value === !0), b = f(
    () => t.bottomSlots === !0 || t.hint !== void 0 || g.value === !0 || t.counter === !0 || t.error !== null
  ), _ = f(() => t.filled === !0 ? "filled" : t.outlined === !0 ? "outlined" : t.borderless === !0 ? "borderless" : t.standout ? "standout" : "standard"), d = f(
    () => `q-field row no-wrap items-start q-field--${_.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === !0 ? " q-field--rounded" : "") + (t.square === !0 ? " q-field--square" : "") + (c.value === !0 ? " q-field--float" : "") + (S.value === !0 ? " q-field--labeled" : "") + (t.dense === !0 ? " q-field--dense" : "") + (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === !0 ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === !0 ? " q-field--focused" : "") + (r.value === !0 ? " q-field--error" : "") + (r.value === !0 || e.focused.value === !0 ? " q-field--highlighted" : "") + (t.hideBottomSpace !== !0 && b.value === !0 ? " q-field--with-bottom" : "") + (t.disable === !0 ? " q-field--disabled" : t.readonly === !0 ? " q-field--readonly" : "")
  ), V = f(
    () => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (r.value === !0 ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === !0 ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")
  ), S = f(
    () => t.labelSlot === !0 || t.label !== void 0
  ), y = f(
    () => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && r.value !== !0 ? ` text-${t.labelColor}` : "")
  ), E = f(() => ({
    id: e.targetUid.value,
    editable: e.editable.value,
    focused: e.focused.value,
    floatingLabel: c.value,
    modelValue: t.modelValue,
    emitValue: e.emitValue
  })), w = f(() => {
    const T = {
      for: e.targetUid.value
    };
    return t.disable === !0 ? T["aria-disabled"] = "true" : t.readonly === !0 && (T["aria-readonly"] = "true"), T;
  });
  Z(() => t.for, (T) => {
    e.targetUid.value = rn(T);
  });
  function R() {
    const T = document.activeElement;
    let j = e.targetRef !== void 0 && e.targetRef.value;
    j && (T === null || T.id !== e.targetUid.value) && (j.hasAttribute("tabindex") === !0 || (j = j.querySelector("[tabindex]")), j && j !== T && j.focus({ preventScroll: !0 }));
  }
  function L() {
    Lt(R);
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
      m(), a.platform.is.mobile !== !0 && (v.value = !1);
    });
  }
  function z() {
    const T = [];
    return l.prepend !== void 0 && T.push(
      h("div", {
        class: "q-field__prepend q-field__marginal row no-wrap items-center",
        key: "prepend",
        onClick: we
      }, l.prepend())
    ), T.push(
      h("div", {
        class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
      }, X())
    ), r.value === !0 && t.noErrorIcon === !1 && T.push(
      W("error", [
        h(ke, { name: a.iconSet.field.error, color: "negative" })
      ])
    ), t.loading === !0 || e.innerLoading.value === !0 ? T.push(
      W(
        "inner-loading-append",
        l.loading !== void 0 ? l.loading() : [h(xl, { color: t.color })]
      )
    ) : t.clearable === !0 && e.hasValue.value === !0 && e.editable.value === !0 && T.push(
      W("inner-clearable-append", [
        h(ke, {
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
      h("div", {
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
      h("div", {
        class: "q-field__prefix no-pointer-events row items-center"
      }, t.prefix)
    ), e.getShadowControl !== void 0 && e.hasShadow.value === !0 && T.push(
      e.getShadowControl()
    ), e.getControl !== void 0 ? T.push(e.getControl()) : l.rawControl !== void 0 ? T.push(l.rawControl()) : l.control !== void 0 && T.push(
      h("div", {
        ref: e.targetRef,
        class: "q-field__native row",
        tabindex: -1,
        ...e.splitAttrs.attributes.value,
        "data-autofocus": t.autofocus === !0 || void 0
      }, l.control(E.value))
    ), S.value === !0 && T.push(
      h("div", {
        class: y.value
      }, Se(l.label, t.label))
    ), t.suffix !== void 0 && t.suffix !== null && T.push(
      h("div", {
        class: "q-field__suffix no-pointer-events row items-center"
      }, t.suffix)
    ), T.concat(Se(l.default));
  }
  function $() {
    let T, j;
    r.value === !0 ? p.value !== null ? (T = [h("div", { role: "alert" }, p.value)], j = `q--slot-error-${p.value}`) : (T = Se(l.error), j = "q--slot-error") : (t.hideHint !== !0 || e.focused.value === !0) && (t.hint !== void 0 ? (T = [h("div", t.hint)], j = `q--slot-hint-${t.hint}`) : (T = Se(l.hint), j = "q--slot-hint"));
    const ue = t.counter === !0 || l.counter !== void 0;
    if (t.hideBottomSpace === !0 && ue === !1 && T === void 0)
      return;
    const k = h("div", {
      key: j,
      class: "q-field__messages col"
    }, T);
    return h("div", {
      class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== !0 ? "animated" : "stale"),
      onClick: we
    }, [
      t.hideBottomSpace === !0 ? k : h(at, { name: "q-transition--field-message" }, () => k),
      ue === !0 ? h("div", {
        class: "q-field__counter"
      }, l.counter !== void 0 ? l.counter() : e.computedCounter.value) : null
    ]);
  }
  function W(T, j) {
    return j === null ? null : h("div", {
      key: T,
      class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
    }, j);
  }
  let G = !1;
  return st(() => {
    G = !0;
  }), vn(() => {
    G === !0 && t.autofocus === !0 && u.focus();
  }), ct(() => {
    qt.value === !0 && t.for === void 0 && (e.targetUid.value = rn()), t.autofocus === !0 && u.focus();
  }), he(() => {
    s !== null && clearTimeout(s);
  }), Object.assign(u, { focus: L, blur: I }), function() {
    const j = e.getControl === void 0 && l.control === void 0 ? {
      ...e.splitAttrs.attributes.value,
      "data-autofocus": t.autofocus === !0 || void 0,
      ...w.value
    } : w.value;
    return h("label", {
      ref: e.rootRef,
      class: [
        d.value,
        o.class
      ],
      style: o.style,
      ...j
    }, [
      l.before !== void 0 ? h("div", {
        class: "q-field__before q-field__marginal row no-wrap items-center",
        onClick: we
      }, l.before()) : null,
      h("div", {
        class: "q-field__inner relative-position col self-stretch"
      }, [
        h("div", {
          ref: e.controlRef,
          class: V.value,
          tabindex: -1,
          ...e.controlEvents
        }, z()),
        b.value === !0 ? $() : null
      ]),
      l.after !== void 0 ? h("div", {
        class: "q-field__after q-field__marginal row no-wrap items-center",
        onClick: we
      }, l.after()) : null
    ]);
  };
}
const Ri = se({
  name: "QField",
  inheritAttrs: !1,
  props: bn,
  emits: Pl,
  setup() {
    return zl(Fl());
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
    ...Tt,
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
    const { proxy: { $q: l } } = le(), o = Je(e, l), u = $t(e, Mi), a = f(() => e.selected === !0 || e.icon !== void 0), s = f(() => e.selected === !0 ? e.iconSelected || l.iconSet.chip.selected : e.icon), v = f(() => e.iconRemove || l.iconSet.chip.remove), g = f(
      () => e.disable === !1 && (e.clickable === !0 || e.selected !== null)
    ), r = f(() => {
      const d = e.outline === !0 && e.color || e.textColor;
      return "q-chip row inline no-wrap items-center" + (e.outline === !1 && e.color !== void 0 ? ` bg-${e.color}` : "") + (d ? ` text-${d} q-chip--colored` : "") + (e.disable === !0 ? " disabled" : "") + (e.dense === !0 ? " q-chip--dense" : "") + (e.outline === !0 ? " q-chip--outline" : "") + (e.selected === !0 ? " q-chip--selected" : "") + (g.value === !0 ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === !0 ? " q-chip--square" : "") + (o.value === !0 ? " q-chip--dark q-dark" : "");
    }), p = f(() => {
      const d = e.disable === !0 ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, V = {
        ...d,
        role: "button",
        "aria-hidden": "false",
        "aria-label": e.removeAriaLabel || l.lang.label.remove
      };
      return { chip: d, remove: V };
    });
    function m(d) {
      d.keyCode === 13 && c(d);
    }
    function c(d) {
      e.disable || (n("update:selected", !e.selected), n("click", d));
    }
    function b(d) {
      (d.keyCode === void 0 || d.keyCode === 13) && (ne(d), e.disable === !1 && (n("update:modelValue", !1), n("remove")));
    }
    function _() {
      const d = [];
      g.value === !0 && d.push(
        h("div", { class: "q-focus-helper" })
      ), a.value === !0 && d.push(
        h(ke, {
          class: "q-chip__icon q-chip__icon--left",
          name: s.value
        })
      );
      const V = e.label !== void 0 ? [h("div", { class: "ellipsis" }, [e.label])] : void 0;
      return d.push(
        h("div", {
          class: "q-chip__content col row no-wrap items-center q-anchor--skip"
        }, Lo(t.default, V))
      ), e.iconRight && d.push(
        h(ke, {
          class: "q-chip__icon q-chip__icon--right",
          name: e.iconRight
        })
      ), e.removable === !0 && d.push(
        h(ke, {
          class: "q-chip__icon q-chip__icon--remove cursor-pointer",
          name: v.value,
          ...p.value.remove,
          onClick: b,
          onKeyup: b
        })
      ), d;
    }
    return () => {
      if (e.modelValue === !1)
        return;
      const d = {
        class: r.value,
        style: u.value
      };
      return g.value === !0 && Object.assign(
        d,
        p.value.chip,
        { onClick: c, onKeyup: m }
      ), Ao(
        "div",
        d,
        _(),
        "ripple",
        e.ripple !== !1 && e.disable !== !0,
        () => [[_l, e.ripple]]
      );
    };
  }
});
function Pi() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), an.is.mobile !== !0 && e.addRange(document.createRange()));
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
  function v(c) {
    return a.value === null ? !1 : c === void 0 || c.touches === void 0 || c.touches.length <= 1;
  }
  const g = {};
  n === void 0 && (Object.assign(g, {
    hide(c) {
      o.hide(c);
    },
    toggle(c) {
      o.toggle(c), c.qAnchorHandled = !0;
    },
    toggleKey(c) {
      Fe(c, 13) === !0 && g.toggle(c);
    },
    contextClick(c) {
      o.hide(c), we(c), de(() => {
        o.show(c), c.qAnchorHandled = !0;
      });
    },
    prevent: we,
    mobileTouch(c) {
      if (g.mobileCleanup(c), v(c) !== !0)
        return;
      o.hide(c), a.value.classList.add("non-selectable");
      const b = c.target;
      ln(g, "anchor", [
        [b, "touchmove", "mobileCleanup", "passive"],
        [b, "touchend", "mobileCleanup", "passive"],
        [b, "touchcancel", "mobileCleanup", "passive"],
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
    let b;
    c === !0 ? o.$q.platform.is.mobile === !0 ? b = [
      [a.value, "touchstart", "mobileTouch", "passive"]
    ] : b = [
      [a.value, "mousedown", "hide", "passive"],
      [a.value, "contextmenu", "contextClick", "notPassive"]
    ] : b = [
      [a.value, "click", "toggle", "passive"],
      [a.value, "keyup", "toggleKey", "passive"]
    ], ln(g, "anchor", b);
  });
  function r() {
    ql(g, "anchor");
  }
  function p(c) {
    for (a.value = c; a.value.classList.contains("q-anchor--skip"); )
      a.value = a.value.parentNode;
    n();
  }
  function m() {
    if (l.target === !1 || l.target === "" || o.$el.parentNode === null)
      a.value = null;
    else if (l.target === !0)
      p(o.$el.parentNode);
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
    a.value !== null && r(), m();
  }), Z(() => l.noParentEvent, (c) => {
    a.value !== null && (c === !0 ? r() : n());
  }), ct(() => {
    m(), t !== !0 && l.modelValue === !0 && a.value === null && u("update:modelValue", !1);
  }), he(() => {
    s !== null && clearTimeout(s), r();
  }), {
    anchorEl: a,
    canShow: v,
    anchorEvents: g
  };
}
function Hi(e, t) {
  const n = P(null);
  let l;
  function o(s, v) {
    const g = `${v !== void 0 ? "add" : "remove"}EventListener`, r = v !== void 0 ? v : l;
    s !== window && s[g]("scroll", r, fe.passive), window[g]("scroll", r, fe.passive), l = v;
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
const Hl = {
  modelValue: {
    type: Boolean,
    default: null
  },
  "onUpdate:modelValue": [Function, Array]
}, Il = [
  "beforeShow",
  "show",
  "beforeHide",
  "hide"
];
function Dl({
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
  const a = le(), { props: s, emit: v, proxy: g } = a;
  let r;
  function p(S) {
    e.value === !0 ? b(S) : m(S);
  }
  function m(S) {
    if (s.disable === !0 || S !== void 0 && S.qAnchorHandled === !0 || t !== void 0 && t(S) !== !0)
      return;
    const y = s["onUpdate:modelValue"] !== void 0;
    y === !0 && (v("update:modelValue", !0), r = S, de(() => {
      r === S && (r = void 0);
    })), (s.modelValue === null || y === !1) && c(S);
  }
  function c(S) {
    e.value !== !0 && (e.value = !0, v("beforeShow", S), l !== void 0 ? l(S) : v("show", S));
  }
  function b(S) {
    if (s.disable === !0)
      return;
    const y = s["onUpdate:modelValue"] !== void 0;
    y === !0 && (v("update:modelValue", !1), r = S, de(() => {
      r === S && (r = void 0);
    })), (s.modelValue === null || y === !1) && _(S);
  }
  function _(S) {
    e.value !== !1 && (e.value = !1, v("beforeHide", S), o !== void 0 ? o(S) : v("hide", S));
  }
  function d(S) {
    s.disable === !0 && S === !0 ? s["onUpdate:modelValue"] !== void 0 && v("update:modelValue", !1) : S === !0 !== e.value && (S === !0 ? c : _)(r);
  }
  Z(() => s.modelValue, d), n !== void 0 && Bl(a) === !0 && Z(() => g.$route.fullPath, () => {
    n.value === !0 && e.value === !0 && b();
  }), u === !0 && ct(() => {
    d(s.modelValue);
  });
  const V = { show: m, hide: b, toggle: p };
  return Object.assign(g, V), V;
}
const Zn = {};
let Ii = 1, Di = document.body;
function ji(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${Ii++}` : e, Zn.globalNodes !== void 0) {
    const l = Zn.globalNodes.class;
    l !== void 0 && (n.className = l);
  }
  return Di.appendChild(n), n;
}
function Wi(e) {
  e.remove();
}
const ut = [];
function Ni(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if (e.hide(t), e.$props.separateClosePopup === !0)
        return Wt(e);
    } else if (e.__qPortal === !0) {
      const n = Wt(e);
      return n !== void 0 && n.$options.name === "QPopupProxy" ? (e.hide(t), n) : e;
    }
    e = Wt(e);
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
function jl(e, t, n, l) {
  const o = P(!1), u = P(!1);
  let a = null;
  const s = {}, v = l === "dialog" && Ki(e);
  function g(p) {
    if (p === !0) {
      Nn(s), u.value = !0;
      return;
    }
    u.value = !1, o.value === !1 && (v === !1 && a === null && (a = ji(!1, l)), o.value = !0, ut.push(e.proxy), ui(s));
  }
  function r(p) {
    if (u.value = !1, p !== !0)
      return;
    Nn(s), o.value = !1;
    const m = ut.indexOf(e.proxy);
    m !== -1 && ut.splice(m, 1), a !== null && (Wi(a), a = null);
  }
  return So(() => {
    r(!0);
  }), e.proxy.__qPortal = !0, hn(e.proxy, "contentEl", () => t.value), {
    showPortal: g,
    hidePortal: r,
    portalIsActive: o,
    portalIsAccessible: u,
    renderPortal: () => v === !0 ? n() : o.value === !0 ? [h(xo, { to: a }, n())] : void 0
  };
}
const Wl = {
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
function Nl(e, t = () => {
}, n = () => {
}) {
  return {
    transitionProps: f(() => {
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
    transitionStyle: f(() => `--q-transition-duration: ${e.transitionDuration}ms`)
  };
}
function Kl() {
  let e;
  const t = le();
  function n() {
    e = void 0;
  }
  return st(n), he(n), {
    removeTick: n,
    registerTick(l) {
      e = l, de(() => {
        e === l && (mn(t) === !1 && e(), e = void 0);
      });
    }
  };
}
function Ql() {
  let e = null;
  const t = le();
  function n() {
    e !== null && (clearTimeout(e), e = null);
  }
  return st(n), he(n), {
    removeTimeout: n,
    registerTimeout(l, o) {
      n(), mn(t) === !1 && (e = setTimeout(l, o));
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
let wt;
function Gi() {
  if (wt !== void 0)
    return wt;
  const e = document.createElement("p"), t = document.createElement("div");
  nn(e, {
    width: "100%",
    height: "200px"
  }), nn(t, {
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
  return n === l && (l = t.clientWidth), t.remove(), wt = n - l, wt;
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
function Ul(e) {
  window[e]("keydown", Ji), window[e]("blur", eu), window[e]("keyup", tu), Ge = !1;
}
function Xl(e) {
  re.is.desktop === !0 && (Me.push(e), Me.length === 1 && Ul("addEventListener"));
}
function Vt(e) {
  const t = Me.indexOf(e);
  t > -1 && (Me.splice(t, 1), Me.length === 0 && Ul("removeEventListener"));
}
const Oe = [];
function Yl(e) {
  Oe[Oe.length - 1](e);
}
function Gl(e) {
  re.is.desktop === !0 && (Oe.push(e), Oe.length === 1 && document.body.addEventListener("focusin", Yl));
}
function cn(e) {
  const t = Oe.indexOf(e);
  t > -1 && (Oe.splice(t, 1), Oe.length === 0 && document.body.removeEventListener("focusin", Yl));
}
const { notPassiveCapture: _t } = fe, Pe = [];
function Et(e) {
  const t = e.target;
  if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events") === !0)
    return;
  let n = ut.length - 1;
  for (; n >= 0; ) {
    const l = ut[n].$;
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
  Pe.push(e), Pe.length === 1 && (document.addEventListener("mousedown", Et, _t), document.addEventListener("touchstart", Et, _t));
}
function Jn(e) {
  const t = Pe.findIndex((n) => n === e);
  t > -1 && (Pe.splice(t, 1), Pe.length === 0 && (document.removeEventListener("mousedown", Et, _t), document.removeEventListener("touchstart", Et, _t)));
}
let el, tl;
function nl(e) {
  const t = e.split(" ");
  return t.length !== 2 ? !1 : ["top", "center", "bottom"].includes(t[0]) !== !0 ? (console.error("Anchor/Self position must start with one of top/center/bottom"), !1) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== !0 ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), !1) : !0;
}
function lu(e) {
  return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : !0;
}
const dn = {
  "start#ltr": "left",
  "start#rtl": "right",
  "end#ltr": "right",
  "end#rtl": "left"
};
["left", "middle", "right"].forEach((e) => {
  dn[`${e}#ltr`] = e, dn[`${e}#rtl`] = e;
});
function ll(e, t) {
  const n = e.split(" ");
  return {
    vertical: n[0],
    horizontal: dn[`${n[1]}#${t === !0 ? "rtl" : "ltr"}`]
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
function ol(e, t, n, l) {
  return {
    top: e[n.vertical] - t[l.vertical],
    left: e[n.horizontal] - t[l.horizontal]
  };
}
function Zl(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5)
    return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      Zl(e, t + 1);
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
    fit: v,
    cover: g,
    maxHeight: r,
    maxWidth: p
  } = e;
  if (re.is.ios === !0 && window.visualViewport !== void 0) {
    const R = document.body.style, { offsetLeft: L, offsetTop: I } = window.visualViewport;
    L !== el && (R.setProperty("--q-pe-left", L + "px"), el = L), I !== tl && (R.setProperty("--q-pe-top", I + "px"), tl = I);
  }
  const { scrollLeft: m, scrollTop: c } = n, b = s === void 0 ? ou(o, g === !0 ? [0, 0] : l) : iu(o, s, l);
  Object.assign(n.style, {
    top: 0,
    left: 0,
    minWidth: null,
    minHeight: null,
    maxWidth: p || "100vw",
    maxHeight: r || "100vh",
    visibility: "visible"
  });
  const { offsetWidth: _, offsetHeight: d } = n, { elWidth: V, elHeight: S } = v === !0 || g === !0 ? { elWidth: Math.max(b.width, _), elHeight: g === !0 ? Math.max(b.height, d) : d } : { elWidth: _, elHeight: d };
  let y = { maxWidth: p, maxHeight: r };
  (v === !0 || g === !0) && (y.minWidth = b.width + "px", g === !0 && (y.minHeight = b.height + "px")), Object.assign(n.style, y);
  const E = uu(V, S);
  let w = ol(b, E, u, a);
  if (s === void 0 || l === void 0)
    Qt(w, b, E, u, a);
  else {
    const { top: R, left: L } = w;
    Qt(w, b, E, u, a);
    let I = !1;
    if (w.top !== R) {
      I = !0;
      const K = 2 * l[1];
      b.center = b.top -= K, b.bottom -= K + 2;
    }
    if (w.left !== L) {
      I = !0;
      const K = 2 * l[0];
      b.middle = b.left -= K, b.right -= K + 2;
    }
    I === !0 && (w = ol(b, E, u, a), Qt(w, b, E, u, a));
  }
  y = {
    top: w.top + "px",
    left: w.left + "px"
  }, w.maxHeight !== void 0 && (y.maxHeight = w.maxHeight + "px", b.height > w.maxHeight && (y.minHeight = y.maxHeight)), w.maxWidth !== void 0 && (y.maxWidth = w.maxWidth + "px", b.width > w.maxWidth && (y.minWidth = y.maxWidth)), Object.assign(n.style, y), n.scrollTop !== c && (n.scrollTop = c), n.scrollLeft !== m && (n.scrollLeft = m);
}
function Qt(e, t, n, l, o) {
  const u = n.bottom, a = n.right, s = Gi(), v = window.innerHeight - s, g = document.body.clientWidth;
  if (e.top < 0 || e.top + u > v)
    if (o.vertical === "center")
      e.top = t[l.vertical] > v / 2 ? Math.max(0, v - u) : 0, e.maxHeight = Math.min(u, v);
    else if (t[l.vertical] > v / 2) {
      const r = Math.min(
        v,
        l.vertical === "center" ? t.center : l.vertical === o.vertical ? t.bottom : t.top
      );
      e.maxHeight = Math.min(u, r), e.top = Math.max(0, r - u);
    } else
      e.top = Math.max(
        0,
        l.vertical === "center" ? t.center : l.vertical === o.vertical ? t.top : t.bottom
      ), e.maxHeight = Math.min(u, v - e.top);
  if (e.left < 0 || e.left + a > g)
    if (e.maxWidth = Math.min(a, g), o.horizontal === "middle")
      e.left = t[l.horizontal] > g / 2 ? Math.max(0, g - a) : 0;
    else if (t[l.horizontal] > g / 2) {
      const r = Math.min(
        g,
        l.horizontal === "middle" ? t.middle : l.horizontal === o.horizontal ? t.right : t.left
      );
      e.maxWidth = Math.min(a, r), e.left = Math.max(0, r - e.maxWidth);
    } else
      e.left = Math.max(
        0,
        l.horizontal === "middle" ? t.middle : l.horizontal === o.horizontal ? t.left : t.right
      ), e.maxWidth = Math.min(a, g - e.left);
}
const au = se({
  name: "QMenu",
  inheritAttrs: !1,
  props: {
    ...Fi,
    ...Hl,
    ...Ze,
    ...Wl,
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
      validator: nl
    },
    self: {
      type: String,
      validator: nl
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
    ...Il,
    "click",
    "escapeKey"
  ],
  setup(e, { slots: t, emit: n, attrs: l }) {
    let o = null, u, a, s;
    const v = le(), { proxy: g } = v, { $q: r } = g, p = P(null), m = P(!1), c = f(
      () => e.persistent !== !0 && e.noRouteDismiss !== !0
    ), b = Je(e, r), { registerTick: _, removeTick: d } = Kl(), { registerTimeout: V } = Ql(), { transitionProps: S, transitionStyle: y } = Nl(e), { localScrollTarget: E, changeScrollEvent: w, unconfigureScrollTarget: R } = Hi(e, H), { anchorEl: L, canShow: I } = zi({ showing: m }), { hide: K } = Dl({
      showing: m,
      canShow: I,
      handleShow: k,
      handleHide: q,
      hideOnRouteChange: c,
      processOnMount: !0
    }), { showPortal: J, hidePortal: N, renderPortal: z } = jl(v, p, ee, "menu"), X = {
      anchorEl: L,
      innerRef: p,
      onClickOutside(x) {
        if (e.persistent !== !0 && m.value === !0)
          return K(x), // always prevent touch event
          (x.type === "touchstart" || x.target.classList.contains("q-dialog__backdrop")) && ne(x), !0;
      }
    }, $ = f(
      () => ll(
        e.anchor || (e.cover === !0 ? "center middle" : "bottom start"),
        r.lang.rtl
      )
    ), W = f(() => e.cover === !0 ? $.value : ll(e.self || "top start", r.lang.rtl)), G = f(
      () => (e.square === !0 ? " q-menu--square" : "") + (b.value === !0 ? " q-menu--dark q-dark" : "")
    ), T = f(() => e.autoClose === !0 ? { onClick: U } : {}), j = f(
      () => m.value === !0 && e.persistent !== !0
    );
    Z(j, (x) => {
      x === !0 ? (Xl(A), nu(X)) : (Vt(A), Jn(X));
    });
    function ue() {
      Lt(() => {
        let x = p.value;
        x && x.contains(document.activeElement) !== !0 && (x = x.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || x.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || x.querySelector("[autofocus], [data-autofocus]") || x, x.focus({ preventScroll: !0 }));
      });
    }
    function k(x) {
      if (o = e.noRefocus === !1 ? document.activeElement : null, Gl(O), J(), H(), u = void 0, x !== void 0 && (e.touchPosition || e.contextMenu)) {
        const oe = Cl(x);
        if (oe.left !== void 0) {
          const { top: Ce, left: Ee } = L.value.getBoundingClientRect();
          u = { left: oe.left - Ee, top: oe.top - Ce };
        }
      }
      a === void 0 && (a = Z(
        () => r.screen.width + "|" + r.screen.height + "|" + e.self + "|" + e.anchor + "|" + r.lang.rtl,
        F
      )), e.noFocus !== !0 && document.activeElement.blur(), _(() => {
        F(), e.noFocus !== !0 && ue();
      }), V(() => {
        r.platform.is.ios === !0 && (s = e.autoClose, p.value.click()), F(), J(!0), n("show", x);
      }, e.transitionDuration);
    }
    function q(x) {
      d(), N(), M(!0), o !== null && // menu was hidden from code or ESC plugin
      (x === void 0 || x.qClickOutside !== !0) && (((x && x.type.indexOf("key") === 0 ? o.closest('[tabindex]:not([tabindex^="-"])') : void 0) || o).focus(), o = null), V(() => {
        N(!0), n("hide", x);
      }, e.transitionDuration);
    }
    function M(x) {
      u = void 0, a !== void 0 && (a(), a = void 0), (x === !0 || m.value === !0) && (cn(O), R(), Jn(X), Vt(A)), x !== !0 && (o = null);
    }
    function H() {
      (L.value !== null || e.scrollTarget !== void 0) && (E.value = Ui(L.value, e.scrollTarget), w(E.value, F));
    }
    function U(x) {
      s !== !0 ? (Ni(g, x), n("click", x)) : s = !1;
    }
    function O(x) {
      j.value === !0 && e.noFocus !== !0 && kl(p.value, x.target) !== !0 && ue();
    }
    function A(x) {
      n("escapeKey"), K(x);
    }
    function F() {
      Zl({
        targetEl: p.value,
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
      return h(
        at,
        S.value,
        () => m.value === !0 ? h("div", {
          role: "menu",
          ...l,
          ref: p,
          tabindex: -1,
          class: [
            "q-menu q-position-engine scroll" + G.value,
            l.class
          ],
          style: [
            l.style,
            y.value
          ],
          ...T.value
        }, Se(t.default)) : null
      );
    }
    return he(M), Object.assign(g, { focus: ue, updatePosition: F }), z;
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
let lt = 0, Ut, Xt, it, Yt = !1, il, ul, al, Le = null;
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
function rl(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function St(e) {
  Yt !== !0 && (Yt = !0, requestAnimationFrame(() => {
    Yt = !1;
    const { height: t } = e.target, { clientHeight: n, scrollTop: l } = document.scrollingElement;
    (it === void 0 || t !== window.innerHeight) && (it = n - t, document.scrollingElement.scrollTop = l), l > it && (document.scrollingElement.scrollTop -= Math.ceil((l - it) / 8));
  }));
}
function sl(e) {
  const t = document.body, n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: l, overflowX: o } = window.getComputedStyle(t);
    Ut = Yi(window), Xt = Xi(window), il = t.style.left, ul = t.style.top, al = window.location.href, t.style.left = `-${Ut}px`, t.style.top = `-${Xt}px`, o !== "hidden" && (o === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), l !== "hidden" && (l === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = !0, re.is.ios === !0 && (n === !0 ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", St, fe.passiveCapture), window.visualViewport.addEventListener("scroll", St, fe.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", rl, fe.passiveCapture));
  }
  re.is.desktop === !0 && re.is.mac === !0 && window[`${e}EventListener`]("wheel", su, fe.notPassive), e === "remove" && (re.is.ios === !0 && (n === !0 ? (window.visualViewport.removeEventListener("resize", St, fe.passiveCapture), window.visualViewport.removeEventListener("scroll", St, fe.passiveCapture)) : window.removeEventListener("scroll", rl, fe.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = !1, t.style.left = il, t.style.top = ul, window.location.href === al && window.scrollTo(Ut, Xt), it = void 0);
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
        sl(t), Le = null;
      }, 100);
      return;
    }
  }
  sl(t);
}
function fu() {
  let e;
  return {
    preventBodyScroll(t) {
      t !== e && (e !== void 0 || t === !0) && (e = t, du(t));
    }
  };
}
let xt = 0;
const vu = {
  standard: "fixed-full flex-center",
  top: "fixed-top justify-center",
  bottom: "fixed-bottom justify-center",
  right: "fixed-right items-center",
  left: "fixed-left items-center"
}, cl = {
  standard: ["scale", "scale"],
  top: ["slide-down", "slide-up"],
  bottom: ["slide-up", "slide-down"],
  right: ["slide-left", "slide-right"],
  left: ["slide-right", "slide-left"]
}, mu = se({
  name: "QDialog",
  inheritAttrs: !1,
  props: {
    ...Hl,
    ...Wl,
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
    ...Il,
    "shake",
    "click",
    "escapeKey"
  ],
  setup(e, { slots: t, emit: n, attrs: l }) {
    const o = le(), u = P(null), a = P(!1), s = P(!1);
    let v = null, g = null, r, p;
    const m = f(
      () => e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0
    ), { preventBodyScroll: c } = fu(), { registerTimeout: b } = Ql(), { registerTick: _, removeTick: d } = Kl(), { transitionProps: V, transitionStyle: S } = Nl(
      e,
      () => cl[e.position][0],
      () => cl[e.position][1]
    ), { showPortal: y, hidePortal: E, portalIsAccessible: w, renderPortal: R } = jl(
      o,
      u,
      U,
      "dialog"
    ), { hide: L } = Dl({
      showing: a,
      hideOnRouteChange: m,
      handleShow: $,
      handleHide: W,
      processOnMount: !0
    }), { addToHistory: I, removeFromHistory: K } = ru(a), J = f(
      () => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === !0 ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${vu[e.position]}` + (s.value === !0 ? " q-dialog__inner--animating" : "") + (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") + (e.square === !0 ? " q-dialog__inner--square" : "")
    ), N = f(() => a.value === !0 && e.seamless !== !0), z = f(() => e.autoClose === !0 ? { onClick: q } : {}), X = f(() => [
      `q-dialog fullscreen no-pointer-events q-dialog--${N.value === !0 ? "modal" : "seamless"}`,
      l.class
    ]);
    Z(() => e.maximized, (O) => {
      a.value === !0 && k(O);
    }), Z(N, (O) => {
      c(O), O === !0 ? (Gl(H), Xl(j)) : (cn(H), Vt(j));
    });
    function $(O) {
      I(), g = e.noRefocus === !1 && document.activeElement !== null ? document.activeElement : null, k(e.maximized), y(), s.value = !0, e.noFocus !== !0 ? (document.activeElement !== null && document.activeElement.blur(), _(G)) : d(), b(() => {
        if (o.proxy.$q.platform.is.ios === !0) {
          if (e.seamless !== !0 && document.activeElement) {
            const { top: A, bottom: F } = document.activeElement.getBoundingClientRect(), { innerHeight: ee } = window, x = window.visualViewport !== void 0 ? window.visualViewport.height : ee;
            A > 0 && F > x / 2 && (document.scrollingElement.scrollTop = Math.min(
              document.scrollingElement.scrollHeight - x,
              F >= ee ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + F - x / 2)
            )), document.activeElement.scrollIntoView();
          }
          p = !0, u.value.click(), p = !1;
        }
        y(!0), s.value = !1, n("show", O);
      }, e.transitionDuration);
    }
    function W(O) {
      d(), K(), ue(!0), s.value = !0, E(), g !== null && (((O && O.type.indexOf("key") === 0 ? g.closest('[tabindex]:not([tabindex^="-"])') : void 0) || g).focus(), g = null), b(() => {
        E(!0), s.value = !1, n("hide", O);
      }, e.transitionDuration);
    }
    function G(O) {
      Lt(() => {
        let A = u.value;
        A === null || A.contains(document.activeElement) === !0 || (A = (O !== "" ? A.querySelector(O) : null) || A.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || A.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || A.querySelector("[autofocus], [data-autofocus]") || A, A.focus({ preventScroll: !0 }));
      });
    }
    function T(O) {
      O && typeof O.focus == "function" ? O.focus({ preventScroll: !0 }) : G(), n("shake");
      const A = u.value;
      A !== null && (A.classList.remove("q-animate--scale"), A.classList.add("q-animate--scale"), v !== null && clearTimeout(v), v = setTimeout(() => {
        v = null, u.value !== null && (A.classList.remove("q-animate--scale"), G());
      }, 170));
    }
    function j() {
      e.seamless !== !0 && (e.persistent === !0 || e.noEscDismiss === !0 ? e.maximized !== !0 && e.noShake !== !0 && T() : (n("escapeKey"), L()));
    }
    function ue(O) {
      v !== null && (clearTimeout(v), v = null), (O === !0 || a.value === !0) && (k(!1), e.seamless !== !0 && (c(!1), cn(H), Vt(j))), O !== !0 && (g = null);
    }
    function k(O) {
      O === !0 ? r !== !0 && (xt < 1 && document.body.classList.add("q-body--dialog"), xt++, r = !0) : r === !0 && (xt < 2 && document.body.classList.remove("q-body--dialog"), xt--, r = !1);
    }
    function q(O) {
      p !== !0 && (L(O), n("click", O));
    }
    function M(O) {
      e.persistent !== !0 && e.noBackdropDismiss !== !0 ? L(O) : e.noShake !== !0 && T();
    }
    function H(O) {
      e.allowFocusOutside !== !0 && w.value === !0 && kl(u.value, O.target) !== !0 && G('[tabindex]:not([tabindex="-1"])');
    }
    Object.assign(o.proxy, {
      // expose public methods
      focus: G,
      shake: T,
      // private but needed by QSelect
      __updateRefocusTarget(O) {
        g = O || null;
      }
    }), he(ue);
    function U() {
      return h("div", {
        role: "dialog",
        "aria-modal": N.value === !0 ? "true" : "false",
        ...l,
        class: X.value
      }, [
        h(at, {
          name: "q-transition--fade",
          appear: !0
        }, () => N.value === !0 ? h("div", {
          class: "q-dialog__backdrop fixed-full",
          style: S.value,
          "aria-hidden": "true",
          tabindex: -1,
          onClick: M
        }) : null),
        h(
          at,
          V.value,
          () => a.value === !0 ? h("div", {
            ref: u,
            class: J.value,
            style: S.value,
            tabindex: -1,
            ...z.value
          }, Se(t.default)) : null
        )
      ]);
    }
    return R;
  }
});
let Bt = !1;
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
  }), document.body.appendChild(e), e.appendChild(t), e.scrollLeft = -1e3, Bt = e.scrollLeft >= 0, e.remove();
}
const ye = 1e3, hu = [
  "start",
  "center",
  "end",
  "start-force",
  "center-force",
  "end-force"
], Jl = Array.prototype.filter, gu = window.getComputedStyle(document.body).overflowAnchor === void 0 ? Wo : function(e, t) {
  e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (e === null)
      return;
    e._qOverflowAnimationFrame = void 0;
    const n = e.children || [];
    Jl.call(n, (o) => o.dataset && o.dataset.qVsAnchor !== void 0).forEach((o) => {
      delete o.dataset.qVsAnchor;
    });
    const l = n[t];
    l && l.dataset && (l.dataset.qVsAnchor = "");
  }));
};
function Ye(e, t) {
  return e + t;
}
function Gt(e, t, n, l, o, u, a, s) {
  const v = e === window ? document.scrollingElement || document.documentElement : e, g = o === !0 ? "offsetWidth" : "offsetHeight", r = {
    scrollStart: 0,
    scrollViewSize: -a - s,
    scrollMaxSize: 0,
    offsetStart: -a,
    offsetEnd: -s
  };
  if (o === !0 ? (e === window ? (r.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, r.scrollViewSize += document.documentElement.clientWidth) : (r.scrollStart = v.scrollLeft, r.scrollViewSize += v.clientWidth), r.scrollMaxSize = v.scrollWidth, u === !0 && (r.scrollStart = (Bt === !0 ? r.scrollMaxSize - r.scrollViewSize : 0) - r.scrollStart)) : (e === window ? (r.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, r.scrollViewSize += document.documentElement.clientHeight) : (r.scrollStart = v.scrollTop, r.scrollViewSize += v.clientHeight), r.scrollMaxSize = v.scrollHeight), n !== null)
    for (let p = n.previousElementSibling; p !== null; p = p.previousElementSibling)
      p.classList.contains("q-virtual-scroll--skip") === !1 && (r.offsetStart += p[g]);
  if (l !== null)
    for (let p = l.nextElementSibling; p !== null; p = p.nextElementSibling)
      p.classList.contains("q-virtual-scroll--skip") === !1 && (r.offsetEnd += p[g]);
  if (t !== e) {
    const p = v.getBoundingClientRect(), m = t.getBoundingClientRect();
    o === !0 ? (r.offsetStart += m.left - p.left, r.offsetEnd -= m.width) : (r.offsetStart += m.top - p.top, r.offsetEnd -= m.height), e !== window && (r.offsetStart += r.scrollStart), r.offsetEnd += r.scrollMaxSize - r.offsetStart;
  }
  return r;
}
function dl(e, t, n, l) {
  t === "end" && (t = (e === window ? document.body : e)[n === !0 ? "scrollWidth" : "scrollHeight"]), e === window ? n === !0 ? (l === !0 && (t = (Bt === !0 ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : n === !0 ? (l === !0 && (t = (Bt === !0 ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
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
  const o = le(), { props: u, emit: a, proxy: s } = o, { $q: v } = s;
  let g, r, p, m = [], c;
  const b = P(0), _ = P(0), d = P({}), V = P(null), S = P(null), y = P(null), E = P({ from: 0, to: 0 }), w = f(() => u.tableColspan !== void 0 ? u.tableColspan : 100);
  l === void 0 && (l = f(() => u.virtualScrollItemSize));
  const R = f(() => l.value + ";" + u.virtualScrollHorizontal), L = f(
    () => R.value + ";" + u.virtualScrollSliceRatioBefore + ";" + u.virtualScrollSliceRatioAfter
  );
  Z(L, () => {
    G();
  }), Z(R, I);
  function I() {
    W(r, !0);
  }
  function K(q) {
    W(q === void 0 ? r : q);
  }
  function J(q, M) {
    const H = t();
    if (H == null || H.nodeType === 8)
      return;
    const U = Gt(
      H,
      n(),
      V.value,
      S.value,
      u.virtualScrollHorizontal,
      v.lang.rtl,
      u.virtualScrollStickySizeStart,
      u.virtualScrollStickySizeEnd
    );
    p !== U.scrollViewSize && G(U.scrollViewSize), z(
      H,
      U,
      Math.min(e.value - 1, Math.max(0, parseInt(q, 10) || 0)),
      0,
      hu.indexOf(M) > -1 ? M : r > -1 && q > r ? "end" : "start"
    );
  }
  function N() {
    const q = t();
    if (q == null || q.nodeType === 8)
      return;
    const M = Gt(
      q,
      n(),
      V.value,
      S.value,
      u.virtualScrollHorizontal,
      v.lang.rtl,
      u.virtualScrollStickySizeStart,
      u.virtualScrollStickySizeEnd
    ), H = e.value - 1, U = M.scrollMaxSize - M.offsetStart - M.offsetEnd - _.value;
    if (g === M.scrollStart)
      return;
    if (M.scrollMaxSize <= 0) {
      z(q, M, 0, 0);
      return;
    }
    p !== M.scrollViewSize && G(M.scrollViewSize), X(E.value.from);
    const O = Math.floor(M.scrollMaxSize - Math.max(M.scrollViewSize, M.offsetEnd) - Math.min(c[H], M.scrollViewSize / 2));
    if (O > 0 && Math.ceil(M.scrollStart) >= O) {
      z(
        q,
        M,
        H,
        M.scrollMaxSize - M.offsetEnd - m.reduce(Ye, 0)
      );
      return;
    }
    let A = 0, F = M.scrollStart - M.offsetStart, ee = F;
    if (F <= U && F + M.scrollViewSize >= b.value)
      F -= b.value, A = E.value.from, ee = F;
    else
      for (let x = 0; F >= m[x] && A < H; x++)
        F -= m[x], A += ye;
    for (; F > 0 && A < H; )
      F -= c[A], F > -M.scrollViewSize ? (A++, ee = F) : ee = c[A] + F;
    z(
      q,
      M,
      A,
      ee
    );
  }
  function z(q, M, H, U, O) {
    const A = typeof O == "string" && O.indexOf("-force") > -1, F = A === !0 ? O.replace("-force", "") : O, ee = F !== void 0 ? F : "start";
    let x = Math.max(0, H - d.value[ee]), oe = x + d.value.total;
    oe > e.value && (oe = e.value, x = Math.max(0, oe - d.value.total)), g = M.scrollStart;
    const Ce = x !== E.value.from || oe !== E.value.to;
    if (Ce === !1 && F === void 0) {
      j(H);
      return;
    }
    const { activeElement: Ee } = document, xe = y.value;
    Ce === !0 && xe !== null && xe !== Ee && xe.contains(Ee) === !0 && (xe.addEventListener("focusout", $), setTimeout(() => {
      xe !== null && xe.removeEventListener("focusout", $);
    })), gu(xe, H - x);
    const dt = F !== void 0 ? c.slice(x, H).reduce(Ye, 0) : 0;
    if (Ce === !0) {
      const Be = oe >= E.value.from && x <= E.value.to ? E.value.to : oe;
      E.value = { from: x, to: Be }, b.value = ot(m, c, 0, x), _.value = ot(m, c, oe, e.value), requestAnimationFrame(() => {
        E.value.to !== oe && g === M.scrollStart && (E.value = { from: E.value.from, to: oe }, _.value = ot(m, c, oe, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (g !== M.scrollStart)
        return;
      Ce === !0 && X(x);
      const Be = c.slice(x, H).reduce(Ye, 0), ze = Be + M.offsetStart + b.value, ft = ze + c[H];
      let et = ze + U;
      if (F !== void 0) {
        const At = Be - dt, ce = M.scrollStart + At;
        et = A !== !0 && ce < ze && ft < ce + M.scrollViewSize ? ce : F === "end" ? ft - M.scrollViewSize : ze - (F === "start" ? 0 : Math.round((M.scrollViewSize - c[H]) / 2));
      }
      g = et, dl(
        q,
        et,
        u.virtualScrollHorizontal,
        v.lang.rtl
      ), j(H);
    });
  }
  function X(q) {
    const M = y.value;
    if (M) {
      const H = Jl.call(
        M.children,
        (x) => x.classList && x.classList.contains("q-virtual-scroll--skip") === !1
      ), U = H.length, O = u.virtualScrollHorizontal === !0 ? (x) => x.getBoundingClientRect().width : (x) => x.offsetHeight;
      let A = q, F, ee;
      for (let x = 0; x < U; ) {
        for (F = O(H[x]), x++; x < U && H[x].classList.contains("q-virtual-scroll--with-prev") === !0; )
          F += O(H[x]), x++;
        ee = F - c[A], ee !== 0 && (c[A] += ee, m[Math.floor(A / ye)] += ee), A++;
      }
    }
  }
  function $() {
    y.value !== null && y.value !== void 0 && y.value.focus();
  }
  function W(q, M) {
    const H = 1 * l.value;
    (M === !0 || Array.isArray(c) === !1) && (c = []);
    const U = c.length;
    c.length = e.value;
    for (let A = e.value - 1; A >= U; A--)
      c[A] = H;
    const O = Math.floor((e.value - 1) / ye);
    m = [];
    for (let A = 0; A <= O; A++) {
      let F = 0;
      const ee = Math.min((A + 1) * ye, e.value);
      for (let x = A * ye; x < ee; x++)
        F += c[x];
      m.push(F);
    }
    r = -1, g = void 0, b.value = ot(m, c, 0, E.value.from), _.value = ot(m, c, E.value.to, e.value), q >= 0 ? (X(E.value.from), de(() => {
      J(q);
    })) : ue();
  }
  function G(q) {
    if (q === void 0 && typeof window < "u") {
      const F = t();
      F != null && F.nodeType !== 8 && (q = Gt(
        F,
        n(),
        V.value,
        S.value,
        u.virtualScrollHorizontal,
        v.lang.rtl,
        u.virtualScrollStickySizeStart,
        u.virtualScrollStickySizeEnd
      ).scrollViewSize);
    }
    p = q;
    const M = parseFloat(u.virtualScrollSliceRatioBefore) || 0, H = parseFloat(u.virtualScrollSliceRatioAfter) || 0, U = 1 + M + H, O = q === void 0 || q <= 0 ? 1 : Math.ceil(q / l.value), A = Math.max(
      1,
      O,
      Math.ceil((u.virtualScrollSliceSize > 0 ? u.virtualScrollSliceSize : 10) / U)
    );
    d.value = {
      total: Math.ceil(A * U),
      start: Math.ceil(A * M),
      center: Math.ceil(A * (0.5 + M)),
      end: Math.ceil(A * (1 + M)),
      view: O
    };
  }
  function T(q, M) {
    const H = u.virtualScrollHorizontal === !0 ? "width" : "height", U = {
      ["--q-virtual-scroll-item-" + H]: l.value + "px"
    };
    return [
      q === "tbody" ? h(q, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: V
      }, [
        h("tr", [
          h("td", {
            style: { [H]: `${b.value}px`, ...U },
            colspan: w.value
          })
        ])
      ]) : h(q, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: V,
        style: { [H]: `${b.value}px`, ...U }
      }),
      h(q, {
        class: "q-virtual-scroll__content",
        key: "content",
        ref: y,
        tabindex: -1
      }, M.flat()),
      q === "tbody" ? h(q, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: S
      }, [
        h("tr", [
          h("td", {
            style: { [H]: `${_.value}px`, ...U },
            colspan: w.value
          })
        ])
      ]) : h(q, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: S,
        style: { [H]: `${_.value}px`, ...U }
      })
    ];
  }
  function j(q) {
    r !== q && (u.onVirtualScroll !== void 0 && a("virtualScroll", {
      index: q,
      from: E.value.from,
      to: E.value.to - 1,
      direction: q < r ? "decrease" : "increase",
      ref: s
    }), r = q);
  }
  G();
  const ue = Ol(
    N,
    v.platform.is.ios === !0 ? 120 : 35
  );
  ko(() => {
    G();
  });
  let k = !1;
  return st(() => {
    k = !0;
  }), vn(() => {
    if (k !== !0)
      return;
    const q = t();
    g !== void 0 && q !== void 0 && q !== null && q.nodeType !== 8 ? dl(
      q,
      g,
      u.virtualScrollHorizontal,
      v.lang.rtl
    ) : J(r);
  }), he(() => {
    ue.cancel();
  }), Object.assign(s, { scrollTo: J, reset: I, refresh: K }), {
    virtualScrollSliceRange: E,
    virtualScrollSliceSizeComputed: d,
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
function _e(e, t) {
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
        if (_e(e[l], t[l]) !== !0)
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
        if (_e(l.value[1], t.get(l.value[0])) !== !0)
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
      if (_e(e[u], t[u]) !== !0)
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function fl(e, t, n) {
  if (n <= t)
    return t;
  const l = n - t + 1;
  let o = t + (e - t) % l;
  return o < t && (o = l + o), o === 0 ? 0 : o;
}
const vl = (e) => ["add", "add-unique", "toggle"].includes(e), qu = ".*+?^${}()|[]\\", Vu = Object.keys(bn), _u = se({
  name: "QSelect",
  inheritAttrs: !1,
  props: {
    ...pu,
    ...Rl,
    ...bn,
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
      validator: vl
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
    ...Pl,
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
    const { proxy: l } = le(), { $q: o } = l, u = P(!1), a = P(!1), s = P(-1), v = P(""), g = P(!1), r = P(!1);
    let p = null, m, c, b, _ = null, d, V, S, y;
    const E = P(null), w = P(null), R = P(null), L = P(null), I = P(null), K = hi(e), J = Cu(_n), N = f(() => Array.isArray(e.options) ? e.options.length : 0), z = f(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === !0 ? 24 : 48 : e.virtualScrollItemSize), {
      virtualScrollSliceRange: X,
      virtualScrollSliceSizeComputed: $,
      localResetVirtualScroll: W,
      padVirtualScroll: G,
      onVirtualScrollEvt: T,
      scrollTo: j,
      setVirtualScrollSize: ue
    } = yu({
      virtualScrollLength: N,
      getVirtualScrollTarget: lo,
      getVirtualScrollEl: qn,
      virtualScrollItemSizeComputed: z
    }), k = Fl(), q = f(() => {
      const i = e.mapOptions === !0 && e.multiple !== !0, B = e.modelValue !== void 0 && (e.modelValue !== null || i === !0) ? e.multiple === !0 && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
      if (e.mapOptions === !0 && Array.isArray(e.options) === !0) {
        const C = e.mapOptions === !0 && m !== void 0 ? m : [], D = B.map((Y) => no(Y, C));
        return e.modelValue === null && i === !0 ? D.filter((Y) => Y !== null) : D;
      }
      return B;
    }), M = f(() => {
      const i = {};
      return Vu.forEach((B) => {
        const C = e[B];
        C !== void 0 && (i[B] = C);
      }), i;
    }), H = f(() => e.optionsDark === null ? k.isDark.value : e.optionsDark), U = f(() => sn(q.value)), O = f(() => {
      let i = "q-field__input q-placeholder col";
      return e.hideSelected === !0 || q.value.length === 0 ? [i, e.inputClass] : (i += " q-field__input--padding", e.inputClass === void 0 ? i : [i, e.inputClass]);
    }), A = f(
      () => (e.virtualScrollHorizontal === !0 ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")
    ), F = f(() => N.value === 0), ee = f(
      () => q.value.map((i) => ve.value(i)).join(", ")
    ), x = f(() => e.displayValue !== void 0 ? e.displayValue : ee.value), oe = f(() => e.optionsHtml === !0 ? () => !0 : (i) => i != null && i.html === !0), Ce = f(() => e.displayValueHtml === !0 || e.displayValue === void 0 && (e.optionsHtml === !0 || q.value.some(oe.value))), Ee = f(() => k.focused.value === !0 ? e.tabindex : -1), xe = f(() => {
      const i = {
        tabindex: e.tabindex,
        role: "combobox",
        "aria-label": e.label,
        "aria-readonly": e.readonly === !0 ? "true" : "false",
        "aria-autocomplete": e.useInput === !0 ? "list" : "none",
        "aria-expanded": u.value === !0 ? "true" : "false",
        "aria-controls": `${k.targetUid.value}_lb`
      };
      return s.value >= 0 && (i["aria-activedescendant"] = `${k.targetUid.value}_${s.value}`), i;
    }), dt = f(() => ({
      id: `${k.targetUid.value}_lb`,
      role: "listbox",
      "aria-multiselectable": e.multiple === !0 ? "true" : "false"
    })), Be = f(() => q.value.map((i, B) => ({
      index: B,
      opt: i,
      html: oe.value(i),
      selected: !0,
      removeAtIndex: to,
      toggleOption: Te,
      tabindex: Ee.value
    }))), ze = f(() => {
      if (N.value === 0)
        return [];
      const { from: i, to: B } = X.value;
      return e.options.slice(i, B).map((C, D) => {
        const Y = He.value(C) === !0, Q = i + D, te = {
          clickable: !0,
          active: !1,
          activeClass: At.value,
          manualFocus: !0,
          focused: !1,
          disable: Y,
          tabindex: -1,
          dense: e.optionsDense,
          dark: H.value,
          role: "option",
          id: `${k.targetUid.value}_${Q}`,
          onClick: () => {
            Te(C);
          }
        };
        return Y !== !0 && (Ot(C) === !0 && (te.active = !0), s.value === Q && (te.focused = !0), te["aria-selected"] = te.active === !0 ? "true" : "false", o.platform.is.desktop === !0 && (te.onMousemove = () => {
          u.value === !0 && Ie(Q);
        })), {
          index: Q,
          opt: C,
          html: oe.value(C),
          label: ve.value(C),
          selected: te.active,
          focused: te.focused,
          toggleOption: Te,
          setOptionIndex: Ie,
          itemProps: te
        };
      });
    }), ft = f(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : o.iconSet.arrow.dropdown), et = f(
      () => e.optionsCover === !1 && e.outlined !== !0 && e.standout !== !0 && e.borderless !== !0 && e.rounded !== !0
    ), At = f(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), ce = f(() => Mt(e.optionValue, "value")), ve = f(() => Mt(e.optionLabel, "label")), He = f(() => Mt(e.optionDisable, "disable")), vt = f(() => q.value.map((i) => ce.value(i))), eo = f(() => {
      const i = {
        onInput: _n,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange: J,
        onKeydown: Cn,
        onKeyup: xn,
        onKeypress: kn,
        onFocus: wn,
        onClick(B) {
          c === !0 && Ve(B);
        }
      };
      return i.onCompositionstart = i.onCompositionupdate = i.onCompositionend = J, i;
    });
    Z(q, (i) => {
      m = i, e.useInput === !0 && e.fillInput === !0 && e.multiple !== !0 && k.innerLoading.value !== !0 && (a.value !== !0 && u.value !== !0 || U.value !== !0) && (b !== !0 && Ne(), (a.value === !0 || u.value === !0) && De(""));
    }, { immediate: !0 }), Z(() => e.fillInput, Ne), Z(u, Pt), Z(N, go);
    function pn(i) {
      return e.emitValue === !0 ? ce.value(i) : i;
    }
    function Rt(i) {
      if (i > -1 && i < q.value.length)
        if (e.multiple === !0) {
          const B = e.modelValue.slice();
          n("remove", { index: i, value: B.splice(i, 1)[0] }), n("update:modelValue", B);
        } else
          n("update:modelValue", null);
    }
    function to(i) {
      Rt(i), k.focus();
    }
    function yn(i, B) {
      const C = pn(i);
      if (e.multiple !== !0) {
        e.fillInput === !0 && tt(
          ve.value(i),
          !0,
          !0
        ), n("update:modelValue", C);
        return;
      }
      if (q.value.length === 0) {
        n("add", { index: 0, value: C }), n("update:modelValue", e.multiple === !0 ? [C] : C);
        return;
      }
      if (B === !0 && Ot(i) === !0 || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues)
        return;
      const D = e.modelValue.slice();
      n("add", { index: D.length, value: C }), D.push(C), n("update:modelValue", D);
    }
    function Te(i, B) {
      if (k.editable.value !== !0 || i === void 0 || He.value(i) === !0)
        return;
      const C = ce.value(i);
      if (e.multiple !== !0) {
        B !== !0 && (tt(
          e.fillInput === !0 ? ve.value(i) : "",
          !0,
          !0
        ), $e()), w.value !== null && w.value.focus(), (q.value.length === 0 || _e(ce.value(q.value[0]), C) !== !0) && n("update:modelValue", e.emitValue === !0 ? C : i);
        return;
      }
      if ((c !== !0 || g.value === !0) && k.focus(), wn(), q.value.length === 0) {
        const Q = e.emitValue === !0 ? C : i;
        n("add", { index: 0, value: Q }), n("update:modelValue", e.multiple === !0 ? [Q] : Q);
        return;
      }
      const D = e.modelValue.slice(), Y = vt.value.findIndex((Q) => _e(Q, C));
      if (Y > -1)
        n("remove", { index: Y, value: D.splice(Y, 1)[0] });
      else {
        if (e.maxValues !== void 0 && D.length >= e.maxValues)
          return;
        const Q = e.emitValue === !0 ? C : i;
        n("add", { index: D.length, value: Q }), D.push(Q);
      }
      n("update:modelValue", D);
    }
    function Ie(i) {
      if (o.platform.is.desktop !== !0)
        return;
      const B = i > -1 && i < N.value ? i : -1;
      s.value !== B && (s.value = B);
    }
    function mt(i = 1, B) {
      if (u.value === !0) {
        let C = s.value;
        do
          C = fl(
            C + i,
            -1,
            N.value - 1
          );
        while (C !== -1 && C !== s.value && He.value(e.options[C]) === !0);
        s.value !== C && (Ie(C), j(C), B !== !0 && e.useInput === !0 && e.fillInput === !0 && ht(
          C >= 0 ? ve.value(e.options[C]) : d
        ));
      }
    }
    function no(i, B) {
      const C = (D) => _e(ce.value(D), i);
      return e.options.find(C) || B.find(C) || i;
    }
    function Mt(i, B) {
      const C = i !== void 0 ? i : B;
      return typeof C == "function" ? C : (D) => D !== null && typeof D == "object" && C in D ? D[C] : D;
    }
    function Ot(i) {
      const B = ce.value(i);
      return vt.value.find((C) => _e(C, B)) !== void 0;
    }
    function wn(i) {
      e.useInput === !0 && w.value !== null && (i === void 0 || w.value === i.target && i.target.value === ee.value) && w.value.select();
    }
    function Sn(i) {
      Fe(i, 27) === !0 && u.value === !0 && (Ve(i), $e(), Ne()), n("keyup", i);
    }
    function xn(i) {
      const { value: B } = i.target;
      if (i.keyCode !== void 0) {
        Sn(i);
        return;
      }
      if (i.target.value = "", p !== null && (clearTimeout(p), p = null), Ne(), typeof B == "string" && B.length !== 0) {
        const C = B.toLocaleLowerCase(), D = (Q) => {
          const te = e.options.find((ae) => Q.value(ae).toLocaleLowerCase() === C);
          return te === void 0 ? !1 : (q.value.indexOf(te) === -1 ? Te(te) : $e(), !0);
        }, Y = (Q) => {
          D(ce) !== !0 && (D(ve) === !0 || Q === !0 || De(B, !0, () => Y(!0)));
        };
        Y();
      } else
        k.clearValue(i);
    }
    function kn(i) {
      n("keypress", i);
    }
    function Cn(i) {
      if (n("keydown", i), Vl(i) === !0)
        return;
      const B = v.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), C = i.shiftKey !== !0 && e.multiple !== !0 && (s.value > -1 || B === !0);
      if (i.keyCode === 27) {
        we(i);
        return;
      }
      if (i.keyCode === 9 && C === !1) {
        je();
        return;
      }
      if (i.target === void 0 || i.target.id !== k.targetUid.value || k.editable.value !== !0)
        return;
      if (i.keyCode === 40 && k.innerLoading.value !== !0 && u.value === !1) {
        ne(i), We();
        return;
      }
      if (i.keyCode === 8 && e.hideSelected !== !0 && v.value.length === 0) {
        e.multiple === !0 && Array.isArray(e.modelValue) === !0 ? Rt(e.modelValue.length - 1) : e.multiple !== !0 && e.modelValue !== null && n("update:modelValue", null);
        return;
      }
      (i.keyCode === 35 || i.keyCode === 36) && (typeof v.value != "string" || v.value.length === 0) && (ne(i), s.value = -1, mt(i.keyCode === 36 ? 1 : -1, e.multiple)), (i.keyCode === 33 || i.keyCode === 34) && $.value !== void 0 && (ne(i), s.value = Math.max(
        -1,
        Math.min(
          N.value,
          s.value + (i.keyCode === 33 ? -1 : 1) * $.value.view
        )
      ), mt(i.keyCode === 33 ? 1 : -1, e.multiple)), (i.keyCode === 38 || i.keyCode === 40) && (ne(i), mt(i.keyCode === 38 ? -1 : 1, e.multiple));
      const D = N.value;
      if ((S === void 0 || y < Date.now()) && (S = ""), D > 0 && e.useInput !== !0 && i.key !== void 0 && i.key.length === 1 && i.altKey === !1 && i.ctrlKey === !1 && i.metaKey === !1 && (i.keyCode !== 32 || S.length !== 0)) {
        u.value !== !0 && We(i);
        const Y = i.key.toLocaleLowerCase(), Q = S.length === 1 && S[0] === Y;
        y = Date.now() + 1500, Q === !1 && (ne(i), S += Y);
        const te = new RegExp("^" + S.split("").map((Ft) => qu.indexOf(Ft) > -1 ? "\\" + Ft : Ft).join(".*"), "i");
        let ae = s.value;
        if (Q === !0 || ae < 0 || te.test(ve.value(e.options[ae])) !== !0)
          do
            ae = fl(ae + 1, -1, D - 1);
          while (ae !== s.value && (He.value(e.options[ae]) === !0 || te.test(ve.value(e.options[ae])) !== !0));
        s.value !== ae && de(() => {
          Ie(ae), j(ae), ae >= 0 && e.useInput === !0 && e.fillInput === !0 && ht(ve.value(e.options[ae]));
        });
        return;
      }
      if (!(i.keyCode !== 13 && (i.keyCode !== 32 || e.useInput === !0 || S !== "") && (i.keyCode !== 9 || C === !1))) {
        if (i.keyCode !== 9 && ne(i), s.value > -1 && s.value < D) {
          Te(e.options[s.value]);
          return;
        }
        if (B === !0) {
          const Y = (Q, te) => {
            if (te) {
              if (vl(te) !== !0)
                return;
            } else
              te = e.newValueMode;
            if (tt("", e.multiple !== !0, !0), Q == null)
              return;
            (te === "toggle" ? Te : yn)(Q, te === "add-unique"), e.multiple !== !0 && (w.value !== null && w.value.focus(), $e());
          };
          if (e.onNewValue !== void 0 ? n("newValue", v.value, Y) : Y(v.value), e.multiple !== !0)
            return;
        }
        u.value === !0 ? je() : k.innerLoading.value !== !0 && We();
      }
    }
    function qn() {
      return c === !0 ? I.value : R.value !== null && R.value.contentEl !== null ? R.value.contentEl : void 0;
    }
    function lo() {
      return qn();
    }
    function oo() {
      return e.hideSelected === !0 ? [] : t["selected-item"] !== void 0 ? Be.value.map((i) => t["selected-item"](i)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === !0 ? Be.value.map((i, B) => h(Oi, {
        key: "option-" + B,
        removable: k.editable.value === !0 && He.value(i.opt) !== !0,
        dense: !0,
        textColor: e.color,
        tabindex: Ee.value,
        onRemove() {
          i.removeAtIndex(B);
        }
      }, () => h("span", {
        class: "ellipsis",
        [i.html === !0 ? "innerHTML" : "textContent"]: ve.value(i.opt)
      }))) : [
        h("span", {
          [Ce.value === !0 ? "innerHTML" : "textContent"]: x.value
        })
      ];
    }
    function Vn() {
      if (F.value === !0)
        return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: v.value }) : void 0;
      const i = t.option !== void 0 ? t.option : (C) => h(un, {
        key: C.index,
        ...C.itemProps
      }, () => h(
        Ct,
        () => h(
          on,
          () => h("span", {
            [C.html === !0 ? "innerHTML" : "textContent"]: C.label
          })
        )
      ));
      let B = G("div", ze.value.map(i));
      return t["before-options"] !== void 0 && (B = t["before-options"]().concat(B)), Ae(t["after-options"], B);
    }
    function io(i, B) {
      const C = B === !0 ? { ...xe.value, ...k.splitAttrs.attributes.value } : void 0, D = {
        ref: B === !0 ? w : void 0,
        key: "i_t",
        class: O.value,
        style: e.inputStyle,
        value: v.value !== void 0 ? v.value : "",
        // required for Android in order to show ENTER key when in form
        type: "search",
        ...C,
        id: B === !0 ? k.targetUid.value : void 0,
        maxlength: e.maxlength,
        autocomplete: e.autocomplete,
        "data-autofocus": i === !0 || e.autofocus === !0 || void 0,
        disabled: e.disable === !0,
        readonly: e.readonly === !0,
        ...eo.value
      };
      return i !== !0 && c === !0 && (Array.isArray(D.class) === !0 ? D.class = [...D.class, "no-pointer-events"] : D.class += " no-pointer-events"), h("input", D);
    }
    function _n(i) {
      p !== null && (clearTimeout(p), p = null), !(i && i.target && i.target.qComposing === !0) && (ht(i.target.value || ""), b = !0, d = v.value, k.focused.value !== !0 && (c !== !0 || g.value === !0) && k.focus(), e.onFilter !== void 0 && (p = setTimeout(() => {
        p = null, De(v.value);
      }, e.inputDebounce)));
    }
    function ht(i) {
      v.value !== i && (v.value = i, n("inputValue", i));
    }
    function tt(i, B, C) {
      b = C !== !0, e.useInput === !0 && (ht(i), (B === !0 || C !== !0) && (d = i), B !== !0 && De(i));
    }
    function De(i, B, C) {
      if (e.onFilter === void 0 || B !== !0 && k.focused.value !== !0)
        return;
      k.innerLoading.value === !0 ? n("filterAbort") : (k.innerLoading.value = !0, r.value = !0), i !== "" && e.multiple !== !0 && q.value.length !== 0 && b !== !0 && i === ve.value(q.value[0]) && (i = "");
      const D = setTimeout(() => {
        u.value === !0 && (u.value = !1);
      }, 10);
      _ !== null && clearTimeout(_), _ = D, n(
        "filter",
        i,
        (Y, Q) => {
          (B === !0 || k.focused.value === !0) && _ === D && (clearTimeout(_), typeof Y == "function" && Y(), r.value = !1, de(() => {
            k.innerLoading.value = !1, k.editable.value === !0 && (B === !0 ? u.value === !0 && $e() : u.value === !0 ? Pt(!0) : u.value = !0), typeof Q == "function" && de(() => {
              Q(l);
            }), typeof C == "function" && de(() => {
              C(l);
            });
          }));
        },
        () => {
          k.focused.value === !0 && _ === D && (clearTimeout(_), k.innerLoading.value = !1, r.value = !1), u.value === !0 && (u.value = !1);
        }
      );
    }
    function uo() {
      return h(au, {
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
        ...dt.value,
        onScrollPassive: T,
        onBeforeShow: Bn,
        onBeforeHide: ao,
        onShow: ro
      }, Vn);
    }
    function ao(i) {
      Tn(i), je();
    }
    function ro() {
      ue();
    }
    function so(i) {
      Ve(i), w.value !== null && w.value.focus(), g.value = !0, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
    }
    function co(i) {
      Ve(i), de(() => {
        g.value = !1;
      });
    }
    function fo() {
      const i = [
        h(Ri, {
          class: `col-auto ${k.fieldClass.value}`,
          ...M.value,
          for: k.targetUid.value,
          dark: H.value,
          square: !0,
          loading: r.value,
          itemAligned: !1,
          filled: !0,
          stackLabel: v.value.length !== 0,
          ...k.splitAttrs.listeners.value,
          onFocus: so,
          onBlur: co
        }, {
          ...t,
          rawControl: () => k.getControl(!0),
          before: void 0,
          after: void 0
        })
      ];
      return u.value === !0 && i.push(
        h("div", {
          ref: I,
          class: A.value + " scroll",
          style: e.popupContentStyle,
          ...dt.value,
          onClick: we,
          onScrollPassive: T
        }, Vn())
      ), h(mu, {
        ref: L,
        modelValue: a.value,
        position: e.useInput === !0 ? "top" : void 0,
        transitionShow: V,
        transitionHide: e.transitionHide,
        transitionDuration: e.transitionDuration,
        onBeforeShow: Bn,
        onBeforeHide: vo,
        onHide: mo,
        onShow: ho
      }, () => h("div", {
        class: "q-select__dialog" + (H.value === !0 ? " q-select__dialog--dark q-dark" : "") + (g.value === !0 ? " q-select__dialog--focused" : "")
      }, i));
    }
    function vo(i) {
      Tn(i), L.value !== null && L.value.__updateRefocusTarget(
        k.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")
      ), k.focused.value = !1;
    }
    function mo(i) {
      $e(), k.focused.value === !1 && n("blur", i), Ne();
    }
    function ho() {
      const i = document.activeElement;
      (i === null || i.id !== k.targetUid.value) && w.value !== null && w.value !== i && w.value.focus(), ue();
    }
    function je() {
      a.value !== !0 && (s.value = -1, u.value === !0 && (u.value = !1), k.focused.value === !1 && (_ !== null && (clearTimeout(_), _ = null), k.innerLoading.value === !0 && (n("filterAbort"), k.innerLoading.value = !1, r.value = !1)));
    }
    function We(i) {
      k.editable.value === !0 && (c === !0 ? (k.onControlFocusin(i), a.value = !0, de(() => {
        k.focus();
      })) : k.focus(), e.onFilter !== void 0 ? De(v.value) : (F.value !== !0 || t["no-option"] !== void 0) && (u.value = !0));
    }
    function $e() {
      a.value = !1, je();
    }
    function Ne() {
      e.useInput === !0 && tt(
        e.multiple !== !0 && e.fillInput === !0 && q.value.length !== 0 && ve.value(q.value[0]) || "",
        !0,
        !0
      );
    }
    function Pt(i) {
      let B = -1;
      if (i === !0) {
        if (q.value.length !== 0) {
          const C = ce.value(q.value[0]);
          B = e.options.findIndex((D) => _e(ce.value(D), C));
        }
        W(B);
      }
      Ie(B);
    }
    function go(i, B) {
      u.value === !0 && k.innerLoading.value === !1 && (W(-1, !0), de(() => {
        u.value === !0 && k.innerLoading.value === !1 && (i > B ? W() : Pt(!0));
      }));
    }
    function En() {
      a.value === !1 && R.value !== null && R.value.updatePosition();
    }
    function Bn(i) {
      i !== void 0 && Ve(i), n("popupShow", i), k.hasPopupOpen = !0, k.onControlFocusin(i);
    }
    function Tn(i) {
      i !== void 0 && Ve(i), n("popupHide", i), k.hasPopupOpen = !1, k.onControlFocusout(i);
    }
    function $n() {
      c = o.platform.is.mobile !== !0 && e.behavior !== "dialog" ? !1 : e.behavior !== "menu" && (e.useInput === !0 ? t["no-option"] !== void 0 || e.onFilter !== void 0 || F.value === !1 : !0), V = o.platform.is.ios === !0 && c === !0 && e.useInput === !0 ? "fade" : e.transitionShow;
    }
    return pl($n), Co(En), $n(), he(() => {
      p !== null && clearTimeout(p);
    }), Object.assign(l, {
      showPopup: We,
      hidePopup: $e,
      removeAtIndex: Rt,
      add: yn,
      toggleOption: Te,
      getOptionIndex: () => s.value,
      setOptionIndex: Ie,
      moveOptionSelection: mt,
      filter: De,
      updateMenuPosition: En,
      updateInputValue: tt,
      isOptionSelected: Ot,
      getEmittingOptionValue: pn,
      isOptionDisabled: (...i) => He.value.apply(null, i) === !0,
      getOptionValue: (...i) => ce.value.apply(null, i),
      getOptionLabel: (...i) => ve.value.apply(null, i)
    }), Object.assign(k, {
      innerValue: q,
      fieldClass: f(
        () => `q-select q-field--auto-height q-select--with${e.useInput !== !0 ? "out" : ""}-input q-select--with${e.useChips !== !0 ? "out" : ""}-chips q-select--${e.multiple === !0 ? "multiple" : "single"}`
      ),
      inputRef: E,
      targetRef: w,
      hasValue: U,
      showPopup: We,
      floatingLabel: f(
        () => e.hideSelected !== !0 && U.value === !0 || typeof v.value == "number" || v.value.length !== 0 || sn(e.displayValue)
      ),
      getControlChild: () => {
        if (k.editable.value !== !1 && (a.value === !0 || F.value !== !0 || t["no-option"] !== void 0))
          return c === !0 ? fo() : uo();
        k.hasPopupOpen === !0 && (k.hasPopupOpen = !1);
      },
      controlEvents: {
        onFocusin(i) {
          k.onControlFocusin(i);
        },
        onFocusout(i) {
          k.onControlFocusout(i, () => {
            Ne(), je();
          });
        },
        onClick(i) {
          if (we(i), c !== !0 && u.value === !0) {
            je(), w.value !== null && w.value.focus();
            return;
          }
          We(i);
        }
      },
      getControl: (i) => {
        const B = oo(), C = i === !0 || a.value !== !0 || c !== !0;
        if (e.useInput === !0)
          B.push(io(i, C));
        else if (k.editable.value === !0) {
          const Y = C === !0 ? xe.value : void 0;
          B.push(
            h("input", {
              ref: C === !0 ? w : void 0,
              key: "d_t",
              class: "q-select__focus-target",
              id: C === !0 ? k.targetUid.value : void 0,
              value: x.value,
              readonly: !0,
              "data-autofocus": i === !0 || e.autofocus === !0 || void 0,
              ...Y,
              onKeydown: Cn,
              onKeyup: Sn,
              onKeypress: kn
            })
          ), C === !0 && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && B.push(
            h("input", {
              class: "q-select__autocomplete-input",
              autocomplete: e.autocomplete,
              tabindex: -1,
              onKeyup: xn
            })
          );
        }
        if (K.value !== void 0 && e.disable !== !0 && vt.value.length !== 0) {
          const Y = vt.value.map((Q) => h("option", { value: Q, selected: !0 }));
          B.push(
            h("select", {
              class: "hidden",
              name: K.value,
              multiple: e.multiple
            }, Y)
          );
        }
        const D = e.useInput === !0 || C !== !0 ? void 0 : k.splitAttrs.attributes.value;
        return h("div", {
          class: "q-field__native row items-center",
          ...D,
          ...k.splitAttrs.listeners.value
        }, B);
      },
      getInnerAppend: () => e.loading !== !0 && r.value !== !0 && e.hideDropdownIcon !== !0 ? [
        h(ke, {
          class: "q-select__dropdown-icon" + (u.value === !0 ? " rotate-180" : ""),
          name: ft.value
        })
      ] : null
    }), zl(k);
  }
}), Eu = /* @__PURE__ */ fn({
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
    }, o = P(""), u = P([]), a = f(() => [...u.value, ...n.options].filter((r) => !o.value || `${r.value}`.toLocaleLowerCase().includes(o.value))), s = (r, p) => {
      o.value = r.toLowerCase(), p(
        () => {
          o.value = r.toLowerCase();
        },
        (m) => {
          r !== "" && m.options && m.options.length > 0 && (m.setOptionIndex(-1), m.moveOptionSelection(1, !0));
        }
      );
    }, v = () => {
      t("update:modelValue", n.multiple ? [] : null);
    }, g = (r, p) => {
      n.newValue && (u.value.push({ value: r, label: r }), p(r, "add-unique"));
    };
    return (r, p) => (pe(), Xe(_u, {
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
      onClear: v,
      onNewValue: g
    }, {
      option: be(({ itemProps: m, opt: c, selected: b, toggleOption: _ }) => [
        me(en),
        me(un, kt(m, {
          disable: c.disable
        }), {
          default: be(() => [
            me(Ct, { side: "" }, {
              default: be(() => [
                me(Si, {
                  dense: "",
                  "model-value": b,
                  "onUpdate:modelValue": (d) => _(c)
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            me(Ct, null, {
              default: be(() => [
                me(on, {
                  innerHTML: c.label
                }, null, 8, ["innerHTML"]),
                c.caption ? (pe(), Xe(on, {
                  key: 0,
                  caption: "",
                  innerHTML: c.caption
                }, null, 8, ["innerHTML"])) : bl("", !0)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040, ["disable"])
      ]),
      "no-option": be(() => [
        me(un, null, {
          default: be(() => [
            me(Ct, { class: "text-grey" }, {
              default: be(() => [
                Jt(" Inget resultat ")
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
  Vo as useForm
};
