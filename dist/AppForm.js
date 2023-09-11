import { ref as L, toRaw as ke, computed as f, markRaw as io, defineComponent as ll, getCurrentInstance as ee, h as p, withDirectives as on, provide as nn, onDeactivated as nt, onActivated as ol, onMounted as it, nextTick as ce, watch as U, openBlock as be, createBlock as tt, unref as Je, withCtx as Se, renderSlot as At, resolveDynamicComponent as Cl, createElementVNode as Rt, createElementBlock as Ye, Fragment as Mt, renderList as ql, normalizeClass as Nt, mergeProps as uo, toHandlers as un, createVNode as we, createCommentVNode as ro, reactive as rn, inject as an, onBeforeUnmount as me, onBeforeUpdate as ao, Transition as yt, onUnmounted as sn, Teleport as cn, onBeforeMount as dn, onUpdated as fn, createTextVNode as vn } from "vue";
import Vl from "lodash.set";
import _l from "lodash.get";
const mn = (e) => {
  const t = L(e), l = L({}), o = window.structuredClone(ke(e)), n = f(() => Object.values(l.value)), u = (d) => {
    t.value = { ...d };
  };
  return u(e), {
    formData: t,
    fieldError: l,
    fieldErrorTexts: n,
    resetDefaultForm: () => {
      u(window.structuredClone(o));
    },
    validateForm: (d) => {
      l.value = {};
      const v = d.safeParse(t.value);
      return v.success ? (u(v.data), !0) : (l.value = v.error.errors.reduce(
        (a, m) => (a[m.path.join(".")] = m.message, a),
        {}
      ), !1);
    },
    setFormData: u
  };
}, Ke = {
  dark: {
    type: Boolean,
    default: null
  }
};
function Qe(e, t) {
  return f(() => e.dark === null ? t.dark.isActive : e.dark);
}
const ve = (e) => io(ll(e)), hn = (e) => io(e), gn = {
  true: "inset",
  item: "item-inset",
  "item-thumbnail": "item-thumbnail-inset"
}, Ot = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24
}, so = ve({
  name: "QSeparator",
  props: {
    ...Ke,
    spaced: [Boolean, String],
    inset: [Boolean, String],
    vertical: Boolean,
    color: String,
    size: String
  },
  setup(e) {
    const t = ee(), l = Qe(e, t.proxy.$q), o = f(() => e.vertical === !0 ? "vertical" : "horizontal"), n = f(() => ` q-separator--${o.value}`), u = f(() => e.inset !== !1 ? `${n.value}-${gn[e.inset]}` : ""), r = f(
      () => `q-separator${n.value}${u.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (l.value === !0 ? " q-separator--dark" : "")
    ), s = f(() => {
      const d = {};
      if (e.size !== void 0 && (d[e.vertical === !0 ? "width" : "height"] = e.size), e.spaced !== !1) {
        const v = e.spaced === !0 ? `${Ot.md}px` : e.spaced in Ot ? `${Ot[e.spaced]}px` : e.spaced, a = e.vertical === !0 ? ["Left", "Right"] : ["Top", "Bottom"];
        d[`margin${a[0]}`] = d[`margin${a[1]}`] = v;
      }
      return d;
    });
    return () => p("hr", {
      class: r.value,
      style: s.value,
      "aria-orientation": o.value
    });
  }
}), fe = {
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
function pn() {
}
function co(e) {
  return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), {
    top: e.clientY,
    left: e.clientX
  };
}
function bn(e) {
  if (e.path)
    return e.path;
  if (e.composedPath)
    return e.composedPath();
  const t = [];
  let l = e.target;
  for (; l; ) {
    if (t.push(l), l.tagName === "HTML")
      return t.push(document), t.push(window), t;
    l = l.parentElement;
  }
}
function $e(e) {
  e.stopPropagation();
}
function ye(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function re(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function Kt(e, t, l) {
  const o = `__q_${t}_evt`;
  e[o] = e[o] !== void 0 ? e[o].concat(l) : l, l.forEach((n) => {
    n[0].addEventListener(n[1], e[n[2]], fe[n[3]]);
  });
}
function fo(e, t) {
  const l = `__q_${t}_evt`;
  e[l] !== void 0 && (e[l].forEach((o) => {
    o[0].removeEventListener(o[1], e[o[2]], fe[o[3]]);
  }), e[l] = void 0);
}
let Te = [], ot = [];
function vo(e) {
  ot = ot.filter((t) => t !== e);
}
function yn(e) {
  vo(e), ot.push(e);
}
function El(e) {
  vo(e), ot.length === 0 && Te.length !== 0 && (Te[Te.length - 1](), Te = []);
}
function qt(e) {
  ot.length === 0 ? e() : Te.push(e);
}
function wn(e) {
  Te = Te.filter((t) => t !== e);
}
function ge(e, t) {
  return e !== void 0 && e() || t;
}
function Sn(e, t) {
  if (e !== void 0) {
    const l = e();
    if (l != null)
      return l.slice();
  }
  return t;
}
function je(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function xn(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function kn(e, t, l, o, n, u) {
  t.key = o + n;
  const r = p(e, t, l);
  return n === !0 ? on(r, u()) : r;
}
const mo = "_q_fo_";
function Lt(e) {
  if (Object(e.$parent) === e.$parent)
    return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy)
      return t.proxy;
    t = t.parent;
  }
}
function ho(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function nl(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
const Cn = ve({
  name: "QForm",
  props: {
    autofocus: Boolean,
    noErrorFocus: Boolean,
    noResetFocus: Boolean,
    greedy: Boolean,
    onSubmit: Function
  },
  emits: ["reset", "validationSuccess", "validationError"],
  setup(e, { slots: t, emit: l }) {
    const o = ee(), n = L(null);
    let u = 0;
    const r = [];
    function s(c) {
      const b = typeof c == "boolean" ? c : e.noErrorFocus !== !0, B = ++u, h = (g, _) => {
        l("validation" + (g === !0 ? "Success" : "Error"), _);
      }, $ = (g) => {
        const _ = g.validate();
        return typeof _.then == "function" ? _.then(
          (w) => ({ valid: w, comp: g }),
          (w) => ({ valid: !1, comp: g, err: w })
        ) : Promise.resolve({ valid: _, comp: g });
      };
      return (e.greedy === !0 ? Promise.all(r.map($)).then((g) => g.filter((_) => _.valid !== !0)) : r.reduce(
        (g, _) => g.then(() => $(_).then((w) => {
          if (w.valid === !1)
            return Promise.reject(w);
        })),
        Promise.resolve()
      ).catch((g) => [g])).then((g) => {
        if (g === void 0 || g.length === 0)
          return B === u && h(!0), !0;
        if (B === u) {
          const { comp: _, err: w } = g[0];
          if (w !== void 0 && console.error(w), h(!1, _), b === !0) {
            const M = g.find(({ comp: O }) => typeof O.focus == "function" && nl(O.$) === !1);
            M !== void 0 && M.comp.focus();
          }
        }
        return !1;
      });
    }
    function d() {
      u++, r.forEach((c) => {
        typeof c.resetValidation == "function" && c.resetValidation();
      });
    }
    function v(c) {
      c !== void 0 && re(c);
      const b = u + 1;
      s().then((B) => {
        b === u && B === !0 && (e.onSubmit !== void 0 ? l("submit", c) : c !== void 0 && c.target !== void 0 && typeof c.target.submit == "function" && c.target.submit());
      });
    }
    function a(c) {
      c !== void 0 && re(c), l("reset"), ce(() => {
        d(), e.autofocus === !0 && e.noResetFocus !== !0 && m();
      });
    }
    function m() {
      qt(() => {
        if (n.value === null)
          return;
        const c = n.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || n.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || n.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(n.value.querySelectorAll("[tabindex]"), (b) => b.tabIndex > -1);
        c != null && c.focus({ preventScroll: !0 });
      });
    }
    nn(mo, {
      bindComponent(c) {
        r.push(c);
      },
      unbindComponent(c) {
        const b = r.indexOf(c);
        b > -1 && r.splice(b, 1);
      }
    });
    let S = !1;
    return nt(() => {
      S = !0;
    }), ol(() => {
      S === !0 && e.autofocus === !0 && m();
    }), it(() => {
      e.autofocus === !0 && m();
    }), Object.assign(o.proxy, {
      validate: s,
      resetValidation: d,
      submit: v,
      reset: a,
      focus: m,
      getValidationComponents: () => r
    }), () => p("form", {
      class: "q-form",
      ref: n,
      onSubmit: v,
      onReset: a
    }, ge(t.default));
  }
}), qn = {
  class: /* @__PURE__ */ Nt("row q-col-gutter-md")
}, Vn = { class: "col" }, _n = {
  key: 0,
  class: "col-auto flex"
}, En = /* @__PURE__ */ ll({
  __name: "AppForm",
  props: {
    modelSchema: {},
    schema: {},
    readonly: { type: Boolean, default: () => !1 },
    disable: { type: Boolean, default: () => !1 },
    loading: { type: Boolean, default: () => !1 },
    fieldWrapper: { default: () => "div" },
    colGutter: { default: () => "sm" },
    modelValue: {}
  },
  emits: ["submit", "update:modelValue", "reset", "close"],
  setup(e, { emit: t }) {
    const l = e, o = L(), n = Math.max(...l.schema.map((h) => h.column || 1)), u = (h = {}, $) => {
      for (const y of $) {
        const g = _l(
          h,
          y.scope,
          y != null && y.transform ? y == null ? void 0 : y.transform(y.defaultValue) : y.defaultValue
        );
        Vl(h, y.scope, g);
      }
      return h;
    }, { resetDefaultForm: r, validateForm: s, formData: d, fieldError: v } = mn(
      u(l.modelValue, l.schema)
    );
    U(
      d,
      (h) => {
        t("update:modelValue", h);
      },
      {
        deep: !0,
        immediate: !0
      }
    );
    const a = (h) => _l(d.value, h), m = (h, $) => {
      Vl(
        d.value,
        $.scope,
        $ != null && $.transform ? $ == null ? void 0 : $.transform(h) : h
      ), v.value[$.scope] && s(l.modelSchema);
    }, S = () => {
      s(l.modelSchema), s(l.modelSchema) && t("submit", ke(d.value));
    }, c = () => {
      var h;
      r(), (h = o.value) == null || h.resetValidation(), t("reset");
    }, b = () => s(l.modelSchema), B = f(() => (h) => ({
      bind: {
        ...h.componentProps || {},
        readonly: l.readonly,
        disable: l.disable,
        modelValue: a(h.scope),
        error: !!v.value[h.scope],
        errorMessage: v.value[h.scope] || ""
      },
      on: {
        "update:modelValue": ($) => m($, h)
      }
    }));
    return (h, $) => (be(), tt(Je(Cn), {
      onValidationError: b,
      onSubmit: S,
      greedy: "",
      onReset: c,
      ref_key: "form",
      ref: o
    }, {
      default: Se(() => [
        At(h.$slots, "top"),
        (be(), tt(Cl(h.fieldWrapper), null, {
          default: Se(() => [
            Rt("div", qn, [
              (be(!0), Ye(Mt, null, ql(Je(n), (y) => (be(), Ye(Mt, { key: y }, [
                Rt("div", Vn, [
                  Rt("div", {
                    class: Nt(`row q-col-gutter-${h.colGutter}`)
                  }, [
                    (be(!0), Ye(Mt, null, ql(h.schema.filter((g) => {
                      const _ = g.column || 1;
                      return _ > Je(n) ? y === 1 : _ === y;
                    }), (g) => (be(), Ye("div", {
                      key: g.scope,
                      class: Nt(`col-${g.cols || "auto"}`)
                    }, [
                      At(h.$slots, g.scope, {
                        props: {
                          setterScope: m,
                          getterScope: a,
                          scope: g.scope,
                          ...B.value(g)
                        }
                      }, () => [
                        (be(), tt(Cl(g.component), uo(B.value(g).bind, un(B.value(g).on)), null, 16))
                      ])
                    ], 2))), 128))
                  ], 2)
                ]),
                y !== Je(n) ? (be(), Ye("div", _n, [
                  we(so, { vertical: "" })
                ])) : ro("", !0)
              ], 64))), 128))
            ])
          ]),
          _: 3
        })),
        At(h.$slots, "bottom")
      ]),
      _: 3
    }, 512));
  }
}), Qt = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
}, il = {
  size: String
};
function ul(e, t = Qt) {
  return f(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
}
const Bl = "0 0 24 24", $l = (e) => e, Ft = (e) => `ionicons ${e}`, go = {
  "mdi-": (e) => `mdi ${e}`,
  "icon-": $l,
  // fontawesome equiv
  "bt-": (e) => `bt ${e}`,
  "eva-": (e) => `eva ${e}`,
  "ion-md": Ft,
  "ion-ios": Ft,
  "ion-logo": Ft,
  "iconfont ": $l,
  "ti-": (e) => `themify-icon ${e}`,
  "bi-": (e) => `bootstrap-icons ${e}`
}, po = {
  o_: "-outlined",
  r_: "-round",
  s_: "-sharp"
}, bo = {
  sym_o_: "-outlined",
  sym_r_: "-rounded",
  sym_s_: "-sharp"
}, Bn = new RegExp("^(" + Object.keys(go).join("|") + ")"), $n = new RegExp("^(" + Object.keys(po).join("|") + ")"), Tl = new RegExp("^(" + Object.keys(bo).join("|") + ")"), Tn = /^[Mm]\s?[-+]?\.?\d/, An = /^img:/, Rn = /^svguse:/, Mn = /^ion-/, On = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, Ae = ve({
  name: "QIcon",
  props: {
    ...il,
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
    const { proxy: { $q: l } } = ee(), o = ul(e), n = f(
      () => "q-icon" + (e.left === !0 ? " on-left" : "") + (e.right === !0 ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")
    ), u = f(() => {
      let r, s = e.name;
      if (s === "none" || !s)
        return { none: !0 };
      if (l.iconMapFn !== null) {
        const a = l.iconMapFn(s);
        if (a !== void 0)
          if (a.icon !== void 0) {
            if (s = a.icon, s === "none" || !s)
              return { none: !0 };
          } else
            return {
              cls: a.cls,
              content: a.content !== void 0 ? a.content : " "
            };
      }
      if (Tn.test(s) === !0) {
        const [a, m = Bl] = s.split("|");
        return {
          svg: !0,
          viewBox: m,
          nodes: a.split("&&").map((S) => {
            const [c, b, B] = S.split("@@");
            return p("path", { style: b, d: c, transform: B });
          })
        };
      }
      if (An.test(s) === !0)
        return {
          img: !0,
          src: s.substring(4)
        };
      if (Rn.test(s) === !0) {
        const [a, m = Bl] = s.split("|");
        return {
          svguse: !0,
          src: a.substring(7),
          viewBox: m
        };
      }
      let d = " ";
      const v = s.match(Bn);
      if (v !== null)
        r = go[v[1]](s);
      else if (On.test(s) === !0)
        r = s;
      else if (Mn.test(s) === !0)
        r = `ionicons ion-${l.platform.is.ios === !0 ? "ios" : "md"}${s.substring(3)}`;
      else if (Tl.test(s) === !0) {
        r = "notranslate material-symbols";
        const a = s.match(Tl);
        a !== null && (s = s.substring(6), r += bo[a[1]]), d = s;
      } else {
        r = "notranslate material-icons";
        const a = s.match($n);
        a !== null && (s = s.substring(2), r += po[a[1]]), d = s;
      }
      return {
        cls: r,
        content: d
      };
    });
    return () => {
      const r = {
        class: n.value,
        style: o.value,
        "aria-hidden": "true",
        role: "presentation"
      };
      return u.value.none === !0 ? p(e.tag, r, ge(t.default)) : u.value.img === !0 ? p("span", r, je(t.default, [
        p("img", { src: u.value.src })
      ])) : u.value.svg === !0 ? p("span", r, je(t.default, [
        p("svg", {
          viewBox: u.value.viewBox || "0 0 24 24"
        }, u.value.nodes)
      ])) : u.value.svguse === !0 ? p("span", r, je(t.default, [
        p("svg", {
          viewBox: u.value.viewBox
        }, [
          p("use", { "xlink:href": u.value.src })
        ])
      ])) : (u.value.cls !== void 0 && (r.class += " " + u.value.cls), p(e.tag, r, je(t.default, [
        u.value.content
      ])));
    };
  }
});
function Ln(e, t) {
  const l = L(null), o = f(() => e.disable === !0 ? null : p("span", {
    ref: l,
    class: "no-outline",
    tabindex: -1
  }));
  function n(u) {
    const r = t.value;
    u !== void 0 && u.type.indexOf("key") === 0 ? r !== null && document.activeElement !== r && r.contains(document.activeElement) === !0 && r.focus() : l.value !== null && (u === void 0 || r !== null && r.contains(u.target) === !0) && l.value.focus();
  }
  return {
    refocusTargetEl: o,
    refocusTarget: n
  };
}
const yo = {
  name: String
};
function Fn(e = {}) {
  return (t, l, o) => {
    t[l](
      p("input", {
        class: "hidden" + (o || ""),
        ...e.value
      })
    );
  };
}
function zn(e) {
  return f(() => e.name || e.for);
}
const Pn = {
  xs: 30,
  sm: 35,
  md: 40,
  lg: 50,
  xl: 60
}, Hn = {
  ...Ke,
  ...il,
  ...yo,
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
}, In = ["update:modelValue"];
function Dn(e, t) {
  const { props: l, slots: o, emit: n, proxy: u } = ee(), { $q: r } = u, s = Qe(l, r), d = L(null), { refocusTargetEl: v, refocusTarget: a } = Ln(l, d), m = ul(l, Pn), S = f(
    () => l.val !== void 0 && Array.isArray(l.modelValue)
  ), c = f(() => {
    const I = ke(l.val);
    return S.value === !0 ? l.modelValue.findIndex((X) => ke(X) === I) : -1;
  }), b = f(() => S.value === !0 ? c.value > -1 : ke(l.modelValue) === ke(l.trueValue)), B = f(() => S.value === !0 ? c.value === -1 : ke(l.modelValue) === ke(l.falseValue)), h = f(
    () => b.value === !1 && B.value === !1
  ), $ = f(() => l.disable === !0 ? -1 : l.tabindex || 0), y = f(
    () => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (l.disable === !0 ? " disabled" : "") + (s.value === !0 ? ` q-${e}--dark` : "") + (l.dense === !0 ? ` q-${e}--dense` : "") + (l.leftLabel === !0 ? " reverse" : "")
  ), g = f(() => {
    const I = b.value === !0 ? "truthy" : B.value === !0 ? "falsy" : "indet", X = l.color !== void 0 && (l.keepColor === !0 || (e === "toggle" ? b.value === !0 : B.value !== !0)) ? ` text-${l.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${I}${X}`;
  }), _ = f(() => {
    const I = { type: "checkbox" };
    return l.name !== void 0 && Object.assign(I, {
      // see https://vuejs.org/guide/extras/render-function.html#creating-vnodes (.prop)
      ".checked": b.value,
      "^checked": b.value === !0 ? "checked" : void 0,
      name: l.name,
      value: S.value === !0 ? l.val : l.trueValue
    }), I;
  }), w = Fn(_), M = f(() => {
    const I = {
      tabindex: $.value,
      role: e === "toggle" ? "switch" : "checkbox",
      "aria-label": l.label,
      "aria-checked": h.value === !0 ? "mixed" : b.value === !0 ? "true" : "false"
    };
    return l.disable === !0 && (I["aria-disabled"] = "true"), I;
  });
  function O(I) {
    I !== void 0 && (re(I), a(I)), l.disable !== !0 && n("update:modelValue", H(), I);
  }
  function H() {
    if (S.value === !0) {
      if (b.value === !0) {
        const I = l.modelValue.slice();
        return I.splice(c.value, 1), I;
      }
      return l.modelValue.concat([l.val]);
    }
    if (b.value === !0) {
      if (l.toggleOrder !== "ft" || l.toggleIndeterminate === !1)
        return l.falseValue;
    } else if (B.value === !0) {
      if (l.toggleOrder === "ft" || l.toggleIndeterminate === !1)
        return l.trueValue;
    } else
      return l.toggleOrder !== "ft" ? l.trueValue : l.falseValue;
    return l.indeterminateValue;
  }
  function W(I) {
    (I.keyCode === 13 || I.keyCode === 32) && re(I);
  }
  function Z(I) {
    (I.keyCode === 13 || I.keyCode === 32) && O(I);
  }
  const Q = t(b, h);
  return Object.assign(u, { toggle: O }), () => {
    const I = Q();
    l.disable !== !0 && w(
      I,
      "unshift",
      ` q-${e}__native absolute q-ma-none q-pa-none`
    );
    const X = [
      p("div", {
        class: g.value,
        style: m.value,
        "aria-hidden": "true"
      }, I)
    ];
    v.value !== null && X.push(v.value);
    const ie = l.label !== void 0 ? je(o.default, [l.label]) : ge(o.default);
    return ie !== void 0 && X.push(
      p("div", {
        class: `q-${e}__label q-anchor--skip`
      }, ie)
    ), p("div", {
      ref: d,
      class: y.value,
      ...M.value,
      onClick: O,
      onKeydown: W,
      onKeyup: Z
    }, X);
  };
}
const jn = p("div", {
  key: "svg",
  class: "q-checkbox__bg absolute"
}, [
  p("svg", {
    class: "q-checkbox__svg fit absolute-full",
    viewBox: "0 0 24 24"
  }, [
    p("path", {
      class: "q-checkbox__truthy",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    }),
    p("path", {
      class: "q-checkbox__indet",
      d: "M4,14H20V10H4"
    })
  ])
]), Wn = ve({
  name: "QCheckbox",
  props: Hn,
  emits: In,
  setup(e) {
    function t(l, o) {
      const n = f(
        () => (l.value === !0 ? e.checkedIcon : o.value === !0 ? e.indeterminateIcon : e.uncheckedIcon) || null
      );
      return () => n.value !== null ? [
        p("div", {
          key: "icon",
          class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
        }, [
          p(Ae, {
            class: "q-checkbox__icon",
            name: n.value
          })
        ])
      ] : [jn];
    }
    return Dn("checkbox", t);
  }
}), bt = ve({
  name: "QItemSection",
  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean
  },
  setup(e, { slots: t }) {
    const l = f(
      () => `q-item__section column q-item__section--${e.avatar === !0 || e.side === !0 || e.thumbnail === !0 ? "side" : "main"}` + (e.top === !0 ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === !0 ? " q-item__section--avatar" : "") + (e.thumbnail === !0 ? " q-item__section--thumbnail" : "") + (e.noWrap === !0 ? " q-item__section--nowrap" : "")
    );
    return () => p("div", { class: l.value }, ge(t.default));
  }
}), Ut = ve({
  name: "QItemLabel",
  props: {
    overline: Boolean,
    caption: Boolean,
    header: Boolean,
    lines: [Number, String]
  },
  setup(e, { slots: t }) {
    const l = f(() => parseInt(e.lines, 10)), o = f(
      () => "q-item__label" + (e.overline === !0 ? " q-item__label--overline text-overline" : "") + (e.caption === !0 ? " q-item__label--caption text-caption" : "") + (e.header === !0 ? " q-item__label--header" : "") + (l.value === 1 ? " ellipsis" : "")
    ), n = f(() => e.lines !== void 0 && l.value > 1 ? {
      overflow: "hidden",
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": l.value
    } : null);
    return () => p("div", {
      style: n.value,
      class: o.value
    }, ge(t.default));
  }
});
function Al(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function Rl(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Nn(e, t) {
  for (const l in t) {
    const o = t[l], n = e[l];
    if (typeof o == "string") {
      if (o !== n)
        return !1;
    } else if (Array.isArray(n) === !1 || n.length !== o.length || o.some((u, r) => u !== n[r]))
      return !1;
  }
  return !0;
}
function Ml(e, t) {
  return Array.isArray(t) === !0 ? e.length === t.length && e.every((l, o) => l === t[o]) : e.length === 1 && e[0] === t;
}
function Kn(e, t) {
  return Array.isArray(e) === !0 ? Ml(e, t) : Array.isArray(t) === !0 ? Ml(t, e) : e === t;
}
function Qn(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const l in e)
    if (Kn(e[l], t[l]) === !1)
      return !1;
  return !0;
}
const Un = {
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
function Xn({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const l = ee(), { props: o, proxy: n, emit: u } = l, r = ho(l), s = f(() => o.disable !== !0 && o.href !== void 0), d = t === !0 ? f(
    () => r === !0 && o.disable !== !0 && s.value !== !0 && o.to !== void 0 && o.to !== null && o.to !== ""
  ) : f(
    () => r === !0 && s.value !== !0 && o.to !== void 0 && o.to !== null && o.to !== ""
  ), v = f(() => d.value === !0 ? y(o.to) : null), a = f(() => v.value !== null), m = f(() => s.value === !0 || a.value === !0), S = f(() => o.type === "a" || m.value === !0 ? "a" : o.tag || e || "div"), c = f(() => s.value === !0 ? {
    href: o.href,
    target: o.target
  } : a.value === !0 ? {
    href: v.value.href,
    target: o.target
  } : {}), b = f(() => {
    if (a.value === !1)
      return -1;
    const { matched: w } = v.value, { length: M } = w, O = w[M - 1];
    if (O === void 0)
      return -1;
    const H = n.$route.matched;
    if (H.length === 0)
      return -1;
    const W = H.findIndex(
      Rl.bind(null, O)
    );
    if (W > -1)
      return W;
    const Z = Al(w[M - 2]);
    return (
      // we are dealing with nested routes
      M > 1 && Al(O) === Z && H[H.length - 1].path !== Z ? H.findIndex(
        Rl.bind(null, w[M - 2])
      ) : W
    );
  }), B = f(
    () => a.value === !0 && b.value !== -1 && Nn(n.$route.params, v.value.params)
  ), h = f(
    () => B.value === !0 && b.value === n.$route.matched.length - 1 && Qn(n.$route.params, v.value.params)
  ), $ = f(() => a.value === !0 ? h.value === !0 ? ` ${o.exactActiveClass} ${o.activeClass}` : o.exact === !0 ? "" : B.value === !0 ? ` ${o.activeClass}` : "" : "");
  function y(w) {
    try {
      return n.$router.resolve(w);
    } catch {
    }
    return null;
  }
  function g(w, { returnRouterError: M, to: O = o.to, replace: H = o.replace } = {}) {
    if (o.disable === !0)
      return w.preventDefault(), Promise.resolve(!1);
    if (
      // don't redirect with control keys;
      // should match RouterLink from Vue Router
      w.metaKey || w.altKey || w.ctrlKey || w.shiftKey || w.button !== void 0 && w.button !== 0 || o.target === "_blank"
    )
      return Promise.resolve(!1);
    w.preventDefault();
    const W = n.$router[H === !0 ? "replace" : "push"](O);
    return M === !0 ? W : W.then(() => {
    }).catch(() => {
    });
  }
  function _(w) {
    if (a.value === !0) {
      const M = (O) => g(w, O);
      u("click", w, M), w.defaultPrevented !== !0 && M();
    } else
      u("click", w);
  }
  return {
    hasRouterLink: a,
    hasHrefLink: s,
    hasLink: m,
    linkTag: S,
    resolvedLink: v,
    linkIsActive: B,
    linkIsExactActive: h,
    linkClass: $,
    linkAttrs: c,
    getLink: y,
    navigateToRouterLink: g,
    navigateOnClick: _
  };
}
function wo(e) {
  return e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0;
}
function ut(e, t) {
  return wo(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
const Xt = ve({
  name: "QItem",
  props: {
    ...Ke,
    ...Un,
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
  setup(e, { slots: t, emit: l }) {
    const { proxy: { $q: o } } = ee(), n = Qe(e, o), { hasLink: u, linkAttrs: r, linkClass: s, linkTag: d, navigateOnClick: v } = Xn(), a = L(null), m = L(null), S = f(
      () => e.clickable === !0 || u.value === !0 || e.tag === "label"
    ), c = f(
      () => e.disable !== !0 && S.value === !0
    ), b = f(
      () => "q-item q-item-type row no-wrap" + (e.dense === !0 ? " q-item--dense" : "") + (n.value === !0 ? " q-item--dark" : "") + (u.value === !0 && e.active === null ? s.value : e.active === !0 ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === !0 ? " disabled" : "") + (c.value === !0 ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === !0 ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === !0 ? " q-manual-focusable--focused" : "") : "")
    ), B = f(() => e.insetLevel === void 0 ? null : {
      ["padding" + (o.lang.rtl === !0 ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px"
    });
    function h(g) {
      c.value === !0 && (m.value !== null && (g.qKeyEvent !== !0 && document.activeElement === a.value ? m.value.focus() : document.activeElement === m.value && a.value.focus()), v(g));
    }
    function $(g) {
      if (c.value === !0 && ut(g, 13) === !0) {
        re(g), g.qKeyEvent = !0;
        const _ = new MouseEvent("click", g);
        _.qKeyEvent = !0, a.value.dispatchEvent(_);
      }
      l("keyup", g);
    }
    function y() {
      const g = Sn(t.default, []);
      return c.value === !0 && g.unshift(
        p("div", { class: "q-focus-helper", tabindex: -1, ref: m })
      ), g;
    }
    return () => {
      const g = {
        ref: a,
        class: b.value,
        style: B.value,
        role: "listitem",
        onClick: h,
        onKeyup: $
      };
      return c.value === !0 ? (g.tabindex = e.tabindex || "0", Object.assign(g, r.value)) : S.value === !0 && (g["aria-disabled"] = "true"), p(
        d.value,
        g,
        y()
      );
    };
  }
});
function rl(e, t, l, o) {
  return Object.defineProperty(e, t, {
    get: l,
    set: o,
    enumerable: !0
  }), e;
}
const wt = L(
  !1
);
let al;
function Yn(e, t) {
  const l = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return {
    browser: l[5] || l[3] || l[1] || "",
    version: l[2] || l[4] || "0",
    versionNumber: l[4] || l[2] || "0",
    platform: t[0] || ""
  };
}
function Gn(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
const So = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function Zn(e) {
  al = { is: { ...e } }, delete e.mac, delete e.desktop;
  const t = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
  Object.assign(e, {
    mobile: !0,
    ios: !0,
    platform: t,
    [t]: !0
  });
}
function Jn(e) {
  const t = e.toLowerCase(), l = Gn(t), o = Yn(t, l), n = {};
  o.browser && (n[o.browser] = !0, n.version = o.version, n.versionNumber = parseInt(o.versionNumber, 10)), o.platform && (n[o.platform] = !0);
  const u = n.android || n.ios || n.bb || n.blackberry || n.ipad || n.iphone || n.ipod || n.kindle || n.playbook || n.silk || n["windows phone"];
  return u === !0 || t.indexOf("mobile") > -1 ? (n.mobile = !0, n.edga || n.edgios ? (n.edge = !0, o.browser = "edge") : n.crios ? (n.chrome = !0, o.browser = "chrome") : n.fxios && (n.firefox = !0, o.browser = "firefox")) : n.desktop = !0, (n.ipod || n.ipad || n.iphone) && (n.ios = !0), n["windows phone"] && (n.winphone = !0, delete n["windows phone"]), (n.chrome || n.opr || n.safari || n.vivaldi || n.mobile === !0 && n.ios !== !0 && u !== !0) && (n.webkit = !0), n.edg && (o.browser = "edgechromium", n.edgeChromium = !0), (n.safari && n.blackberry || n.bb) && (o.browser = "blackberry", n.blackberry = !0), n.safari && n.playbook && (o.browser = "playbook", n.playbook = !0), n.opr && (o.browser = "opera", n.opera = !0), n.safari && n.android && (o.browser = "android", n.android = !0), n.safari && n.kindle && (o.browser = "kindle", n.kindle = !0), n.safari && n.silk && (o.browser = "silk", n.silk = !0), n.vivaldi && (o.browser = "vivaldi", n.vivaldi = !0), n.name = o.browser, n.platform = o.platform, t.indexOf("electron") > -1 ? n.electron = !0 : document.location.href.indexOf("-extension://") > -1 ? n.bex = !0 : (window.Capacitor !== void 0 ? (n.capacitor = !0, n.nativeMobile = !0, n.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (n.cordova = !0, n.nativeMobile = !0, n.nativeMobileWrapper = "cordova"), So === !0 && n.mac === !0 && (n.desktop === !0 && n.safari === !0 || n.nativeMobile === !0 && n.android !== !0 && n.ios !== !0 && n.ipad !== !0) && Zn(n)), n;
}
const Ol = navigator.userAgent || navigator.vendor || window.opera, ei = {
  has: {
    touch: !1,
    webStorage: !1
  },
  within: { iframe: !1 }
}, ae = {
  userAgent: Ol,
  is: Jn(Ol),
  has: {
    touch: So
  },
  within: {
    iframe: window.self !== window.top
  }
}, Yt = {
  install(e) {
    const { $q: t } = e;
    wt.value === !0 ? (e.onSSRHydrated.push(() => {
      Object.assign(t.platform, ae), wt.value = !1, al = void 0;
    }), t.platform = rn(this)) : t.platform = this;
  }
};
{
  let e;
  rl(ae.has, "webStorage", () => {
    if (e !== void 0)
      return e;
    try {
      if (window.localStorage)
        return e = !0, !0;
    } catch {
    }
    return e = !1, !1;
  }), ae.is.ios === !0 && window.navigator.vendor.toLowerCase().indexOf("apple"), wt.value === !0 ? Object.assign(Yt, ae, al, ei) : Object.assign(Yt, ae);
}
const ti = {
  size: {
    type: [Number, String],
    default: "1em"
  },
  color: String
};
function li(e) {
  return {
    cSize: f(() => e.size in Qt ? `${Qt[e.size]}px` : e.size),
    classes: f(
      () => "q-spinner" + (e.color ? ` text-${e.color}` : "")
    )
  };
}
const oi = ve({
  name: "QSpinner",
  props: {
    ...ti,
    thickness: {
      type: Number,
      default: 5
    }
  },
  setup(e) {
    const { cSize: t, classes: l } = li(e);
    return () => p("svg", {
      class: l.value + " q-spinner-mat",
      width: t.value,
      height: t.value,
      viewBox: "25 25 50 50"
    }, [
      p("circle", {
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
function ni({ validate: e, resetValidation: t, requiresQForm: l }) {
  const o = an(mo, !1);
  if (o !== !1) {
    const { props: n, proxy: u } = ee();
    Object.assign(u, { validate: e, resetValidation: t }), U(() => n.disable, (r) => {
      r === !0 ? (typeof t == "function" && t(), o.unbindComponent(u)) : o.bindComponent(u);
    }), it(() => {
      n.disable !== !0 && o.bindComponent(u);
    }), me(() => {
      n.disable !== !0 && o.unbindComponent(u);
    });
  } else
    l === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const Ll = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, Fl = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, zl = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, ft = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, vt = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, zt = {
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
  hexColor: (e) => Ll.test(e),
  hexaColor: (e) => Fl.test(e),
  hexOrHexaColor: (e) => zl.test(e),
  rgbColor: (e) => ft.test(e),
  rgbaColor: (e) => vt.test(e),
  rgbOrRgbaColor: (e) => ft.test(e) || vt.test(e),
  hexOrRgbColor: (e) => Ll.test(e) || ft.test(e),
  hexaOrRgbaColor: (e) => Fl.test(e) || vt.test(e),
  anyColor: (e) => zl.test(e) || ft.test(e) || vt.test(e)
};
function xo(e, t = 250, l) {
  let o = null;
  function n() {
    const u = arguments, r = () => {
      o = null, l !== !0 && e.apply(this, u);
    };
    o !== null ? clearTimeout(o) : l === !0 && e.apply(this, u), o = setTimeout(r, t);
  }
  return n.cancel = () => {
    o !== null && clearTimeout(o);
  }, n;
}
const ii = [!0, !1, "ondemand"], ui = {
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
    validator: (e) => ii.includes(e)
  }
};
function ri(e, t) {
  const { props: l, proxy: o } = ee(), n = L(!1), u = L(null), r = L(null);
  ni({ validate: b, resetValidation: c });
  let s = 0, d;
  const v = f(
    () => l.rules !== void 0 && l.rules !== null && l.rules.length !== 0
  ), a = f(
    () => l.disable !== !0 && v.value === !0
  ), m = f(
    () => l.error === !0 || n.value === !0
  ), S = f(() => typeof l.errorMessage == "string" && l.errorMessage.length !== 0 ? l.errorMessage : u.value);
  U(() => l.modelValue, () => {
    B();
  }), U(() => l.reactiveRules, ($) => {
    $ === !0 ? d === void 0 && (d = U(() => l.rules, () => {
      B(!0);
    })) : d !== void 0 && (d(), d = void 0);
  }, { immediate: !0 }), U(e, ($) => {
    $ === !0 ? r.value === null && (r.value = !1) : r.value === !1 && (r.value = !0, a.value === !0 && l.lazyRules !== "ondemand" && t.value === !1 && h());
  });
  function c() {
    s++, t.value = !1, r.value = null, n.value = !1, u.value = null, h.cancel();
  }
  function b($ = l.modelValue) {
    if (a.value !== !0)
      return !0;
    const y = ++s, g = t.value !== !0 ? () => {
      r.value = !0;
    } : () => {
    }, _ = (M, O) => {
      M === !0 && g(), n.value = M, u.value = O || null, t.value = !1;
    }, w = [];
    for (let M = 0; M < l.rules.length; M++) {
      const O = l.rules[M];
      let H;
      if (typeof O == "function" ? H = O($, zt) : typeof O == "string" && zt[O] !== void 0 && (H = zt[O]($)), H === !1 || typeof H == "string")
        return _(!0, H), !1;
      H !== !0 && H !== void 0 && w.push(H);
    }
    return w.length === 0 ? (_(!1), !0) : (t.value = !0, Promise.all(w).then(
      (M) => {
        if (M === void 0 || Array.isArray(M) === !1 || M.length === 0)
          return y === s && _(!1), !0;
        const O = M.find((H) => H === !1 || typeof H == "string");
        return y === s && _(O !== void 0, O), O === void 0;
      },
      (M) => (y === s && (console.error(M), _(!0)), !1)
    ));
  }
  function B($) {
    a.value === !0 && l.lazyRules !== "ondemand" && (r.value === !0 || l.lazyRules !== !0 && $ !== !0) && h();
  }
  const h = xo(b, 0);
  return me(() => {
    d !== void 0 && d(), h.cancel();
  }), Object.assign(o, { resetValidation: c, validate: b }), rl(o, "hasError", () => m.value), {
    isDirtyModel: r,
    hasRules: v,
    hasError: m,
    errorMessage: S,
    validate: b,
    resetValidation: c
  };
}
const Pl = /^on[A-Z]/;
function ai(e, t) {
  const l = {
    listeners: L({}),
    attributes: L({})
  };
  function o() {
    const n = {}, u = {};
    for (const r in e)
      r !== "class" && r !== "style" && Pl.test(r) === !1 && (n[r] = e[r]);
    for (const r in t.props)
      Pl.test(r) === !0 && (u[r] = t.props[r]);
    l.attributes.value = n, l.listeners.value = u;
  }
  return ao(o), o(), l;
}
let Pt, mt = 0;
const le = new Array(256);
for (let e = 0; e < 256; e++)
  le[e] = (e + 256).toString(16).substring(1);
const si = (() => {
  const e = typeof crypto < "u" ? crypto : typeof window < "u" ? window.crypto || window.msCrypto : void 0;
  if (e !== void 0) {
    if (e.randomBytes !== void 0)
      return e.randomBytes;
    if (e.getRandomValues !== void 0)
      return (t) => {
        const l = new Uint8Array(t);
        return e.getRandomValues(l), l;
      };
  }
  return (t) => {
    const l = [];
    for (let o = t; o > 0; o--)
      l.push(Math.floor(Math.random() * 256));
    return l;
  };
})(), Hl = 4096;
function ci() {
  (Pt === void 0 || mt + 16 > Hl) && (mt = 0, Pt = si(Hl));
  const e = Array.prototype.slice.call(Pt, mt, mt += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, le[e[0]] + le[e[1]] + le[e[2]] + le[e[3]] + "-" + le[e[4]] + le[e[5]] + "-" + le[e[6]] + le[e[7]] + "-" + le[e[8]] + le[e[9]] + "-" + le[e[10]] + le[e[11]] + le[e[12]] + le[e[13]] + le[e[14]] + le[e[15]];
}
function Gt(e) {
  return e === void 0 ? `f_${ci()}` : e;
}
function Zt(e) {
  return e != null && ("" + e).length !== 0;
}
const sl = {
  ...Ke,
  ...ui,
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
}, ko = ["update:modelValue", "clear", "focus", "blur", "popupShow", "popupHide"];
function Co() {
  const { props: e, attrs: t, proxy: l, vnode: o } = ee();
  return {
    isDark: Qe(e, l.$q),
    editable: f(
      () => e.disable !== !0 && e.readonly !== !0
    ),
    innerLoading: L(!1),
    focused: L(!1),
    hasPopupOpen: !1,
    splitAttrs: ai(t, o),
    targetUid: L(Gt(e.for)),
    rootRef: L(null),
    targetRef: L(null),
    controlRef: L(null)
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
function qo(e) {
  const { props: t, emit: l, slots: o, attrs: n, proxy: u } = ee(), { $q: r } = u;
  let s = null;
  e.hasValue === void 0 && (e.hasValue = f(() => Zt(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (E) => {
    l("update:modelValue", E);
  }), e.controlEvents === void 0 && (e.controlEvents = {
    onFocusin: W,
    onFocusout: Z
  }), Object.assign(e, {
    clearValue: Q,
    onControlFocusin: W,
    onControlFocusout: Z,
    focus: O
  }), e.computedCounter === void 0 && (e.computedCounter = f(() => {
    if (t.counter !== !1) {
      const E = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === !0 ? t.modelValue.length : 0, D = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return E + (D !== void 0 ? " / " + D : "");
    }
  }));
  const {
    isDirtyModel: d,
    hasRules: v,
    hasError: a,
    errorMessage: m,
    resetValidation: S
  } = ri(e.focused, e.innerLoading), c = e.floatingLabel !== void 0 ? f(() => t.stackLabel === !0 || e.focused.value === !0 || e.floatingLabel.value === !0) : f(() => t.stackLabel === !0 || e.focused.value === !0 || e.hasValue.value === !0), b = f(
    () => t.bottomSlots === !0 || t.hint !== void 0 || v.value === !0 || t.counter === !0 || t.error !== null
  ), B = f(() => t.filled === !0 ? "filled" : t.outlined === !0 ? "outlined" : t.borderless === !0 ? "borderless" : t.standout ? "standout" : "standard"), h = f(
    () => `q-field row no-wrap items-start q-field--${B.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === !0 ? " q-field--rounded" : "") + (t.square === !0 ? " q-field--square" : "") + (c.value === !0 ? " q-field--float" : "") + (y.value === !0 ? " q-field--labeled" : "") + (t.dense === !0 ? " q-field--dense" : "") + (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === !0 ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === !0 ? " q-field--focused" : "") + (a.value === !0 ? " q-field--error" : "") + (a.value === !0 || e.focused.value === !0 ? " q-field--highlighted" : "") + (t.hideBottomSpace !== !0 && b.value === !0 ? " q-field--with-bottom" : "") + (t.disable === !0 ? " q-field--disabled" : t.readonly === !0 ? " q-field--readonly" : "")
  ), $ = f(
    () => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (a.value === !0 ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === !0 ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")
  ), y = f(
    () => t.labelSlot === !0 || t.label !== void 0
  ), g = f(
    () => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && a.value !== !0 ? ` text-${t.labelColor}` : "")
  ), _ = f(() => ({
    id: e.targetUid.value,
    editable: e.editable.value,
    focused: e.focused.value,
    floatingLabel: c.value,
    modelValue: t.modelValue,
    emitValue: e.emitValue
  })), w = f(() => {
    const E = {
      for: e.targetUid.value
    };
    return t.disable === !0 ? E["aria-disabled"] = "true" : t.readonly === !0 && (E["aria-readonly"] = "true"), E;
  });
  U(() => t.for, (E) => {
    e.targetUid.value = Gt(E);
  });
  function M() {
    const E = document.activeElement;
    let D = e.targetRef !== void 0 && e.targetRef.value;
    D && (E === null || E.id !== e.targetUid.value) && (D.hasAttribute("tabindex") === !0 || (D = D.querySelector("[tabindex]")), D && D !== E && D.focus({ preventScroll: !0 }));
  }
  function O() {
    qt(M);
  }
  function H() {
    wn(M);
    const E = document.activeElement;
    E !== null && e.rootRef.value.contains(E) && E.blur();
  }
  function W(E) {
    s !== null && (clearTimeout(s), s = null), e.editable.value === !0 && e.focused.value === !1 && (e.focused.value = !0, l("focus", E));
  }
  function Z(E, D) {
    s !== null && clearTimeout(s), s = setTimeout(() => {
      s = null, !(document.hasFocus() === !0 && (e.hasPopupOpen === !0 || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== !1)) && (e.focused.value === !0 && (e.focused.value = !1, l("blur", E)), D !== void 0 && D());
    });
  }
  function Q(E) {
    re(E), r.platform.is.mobile !== !0 ? (e.targetRef !== void 0 && e.targetRef.value || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === !0 && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), l("update:modelValue", null), l("clear", t.modelValue), ce(() => {
      S(), r.platform.is.mobile !== !0 && (d.value = !1);
    });
  }
  function I() {
    const E = [];
    return o.prepend !== void 0 && E.push(
      p("div", {
        class: "q-field__prepend q-field__marginal row no-wrap items-center",
        key: "prepend",
        onClick: ye
      }, o.prepend())
    ), E.push(
      p("div", {
        class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
      }, X())
    ), a.value === !0 && t.noErrorIcon === !1 && E.push(
      oe("error", [
        p(Ae, { name: r.iconSet.field.error, color: "negative" })
      ])
    ), t.loading === !0 || e.innerLoading.value === !0 ? E.push(
      oe(
        "inner-loading-append",
        o.loading !== void 0 ? o.loading() : [p(oi, { color: t.color })]
      )
    ) : t.clearable === !0 && e.hasValue.value === !0 && e.editable.value === !0 && E.push(
      oe("inner-clearable-append", [
        p(Ae, {
          class: "q-field__focusable-action",
          tag: "button",
          name: t.clearIcon || r.iconSet.field.clear,
          tabindex: 0,
          type: "button",
          "aria-hidden": null,
          role: null,
          onClick: Q
        })
      ])
    ), o.append !== void 0 && E.push(
      p("div", {
        class: "q-field__append q-field__marginal row no-wrap items-center",
        key: "append",
        onClick: ye
      }, o.append())
    ), e.getInnerAppend !== void 0 && E.push(
      oe("inner-append", e.getInnerAppend())
    ), e.getControlChild !== void 0 && E.push(
      e.getControlChild()
    ), E;
  }
  function X() {
    const E = [];
    return t.prefix !== void 0 && t.prefix !== null && E.push(
      p("div", {
        class: "q-field__prefix no-pointer-events row items-center"
      }, t.prefix)
    ), e.getShadowControl !== void 0 && e.hasShadow.value === !0 && E.push(
      e.getShadowControl()
    ), e.getControl !== void 0 ? E.push(e.getControl()) : o.rawControl !== void 0 ? E.push(o.rawControl()) : o.control !== void 0 && E.push(
      p("div", {
        ref: e.targetRef,
        class: "q-field__native row",
        tabindex: -1,
        ...e.splitAttrs.attributes.value,
        "data-autofocus": t.autofocus === !0 || void 0
      }, o.control(_.value))
    ), y.value === !0 && E.push(
      p("div", {
        class: g.value
      }, ge(o.label, t.label))
    ), t.suffix !== void 0 && t.suffix !== null && E.push(
      p("div", {
        class: "q-field__suffix no-pointer-events row items-center"
      }, t.suffix)
    ), E.concat(ge(o.default));
  }
  function ie() {
    let E, D;
    a.value === !0 ? m.value !== null ? (E = [p("div", { role: "alert" }, m.value)], D = `q--slot-error-${m.value}`) : (E = ge(o.error), D = "q--slot-error") : (t.hideHint !== !0 || e.focused.value === !0) && (t.hint !== void 0 ? (E = [p("div", t.hint)], D = `q--slot-hint-${t.hint}`) : (E = ge(o.hint), D = "q--slot-hint"));
    const ne = t.counter === !0 || o.counter !== void 0;
    if (t.hideBottomSpace === !0 && ne === !1 && E === void 0)
      return;
    const k = p("div", {
      key: D,
      class: "q-field__messages col"
    }, E);
    return p("div", {
      class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== !0 ? "animated" : "stale"),
      onClick: ye
    }, [
      t.hideBottomSpace === !0 ? k : p(yt, { name: "q-transition--field-message" }, () => k),
      ne === !0 ? p("div", {
        class: "q-field__counter"
      }, o.counter !== void 0 ? o.counter() : e.computedCounter.value) : null
    ]);
  }
  function oe(E, D) {
    return D === null ? null : p("div", {
      key: E,
      class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
    }, D);
  }
  let J = !1;
  return nt(() => {
    J = !0;
  }), ol(() => {
    J === !0 && t.autofocus === !0 && u.focus();
  }), it(() => {
    wt.value === !0 && t.for === void 0 && (e.targetUid.value = Gt()), t.autofocus === !0 && u.focus();
  }), me(() => {
    s !== null && clearTimeout(s);
  }), Object.assign(u, { focus: O, blur: H }), function() {
    const D = e.getControl === void 0 && o.control === void 0 ? {
      ...e.splitAttrs.attributes.value,
      "data-autofocus": t.autofocus === !0 || void 0,
      ...w.value
    } : w.value;
    return p("label", {
      ref: e.rootRef,
      class: [
        h.value,
        n.class
      ],
      style: n.style,
      ...D
    }, [
      o.before !== void 0 ? p("div", {
        class: "q-field__before q-field__marginal row no-wrap items-center",
        onClick: ye
      }, o.before()) : null,
      p("div", {
        class: "q-field__inner relative-position col self-stretch"
      }, [
        p("div", {
          ref: e.controlRef,
          class: $.value,
          tabindex: -1,
          ...e.controlEvents
        }, I()),
        b.value === !0 ? ie() : null
      ]),
      o.after !== void 0 ? p("div", {
        class: "q-field__after q-field__marginal row no-wrap items-center",
        onClick: ye
      }, o.after()) : null
    ]);
  };
}
const di = ve({
  name: "QField",
  inheritAttrs: !1,
  props: sl,
  emits: ko,
  setup() {
    return qo(Co());
  }
});
function Jt(e, t) {
  const l = e.style;
  for (const o in t)
    l[o] = t[o];
}
function fi(e) {
  if (e == null)
    return;
  if (typeof e == "string")
    try {
      return document.querySelector(e) || void 0;
    } catch {
      return;
    }
  const t = Je(e);
  if (t)
    return t.$el || t;
}
function Vo(e, t) {
  if (e == null || e.contains(t) === !0)
    return !0;
  for (let l = e.nextElementSibling; l !== null; l = l.nextElementSibling)
    if (l.contains(t))
      return !0;
  return !1;
}
function vi(e, t = 250) {
  let l = !1, o;
  return function() {
    return l === !1 && (l = !0, setTimeout(() => {
      l = !1;
    }, t), o = e.apply(this, arguments)), o;
  };
}
function Il(e, t, l, o) {
  l.modifiers.stop === !0 && $e(e);
  const n = l.modifiers.color;
  let u = l.modifiers.center;
  u = u === !0 || o === !0;
  const r = document.createElement("span"), s = document.createElement("span"), d = co(e), { left: v, top: a, width: m, height: S } = t.getBoundingClientRect(), c = Math.sqrt(m * m + S * S), b = c / 2, B = `${(m - c) / 2}px`, h = u ? B : `${d.left - v - b}px`, $ = `${(S - c) / 2}px`, y = u ? $ : `${d.top - a - b}px`;
  s.className = "q-ripple__inner", Jt(s, {
    height: `${c}px`,
    width: `${c}px`,
    transform: `translate3d(${h},${y},0) scale3d(.2,.2,1)`,
    opacity: 0
  }), r.className = `q-ripple${n ? " text-" + n : ""}`, r.setAttribute("dir", "ltr"), r.appendChild(s), t.appendChild(r);
  const g = () => {
    r.remove(), clearTimeout(_);
  };
  l.abort.push(g);
  let _ = setTimeout(() => {
    s.classList.add("q-ripple__inner--enter"), s.style.transform = `translate3d(${B},${$},0) scale3d(1,1,1)`, s.style.opacity = 0.2, _ = setTimeout(() => {
      s.classList.remove("q-ripple__inner--enter"), s.classList.add("q-ripple__inner--leave"), s.style.opacity = 0, _ = setTimeout(() => {
        r.remove(), l.abort.splice(l.abort.indexOf(g), 1);
      }, 275);
    }, 250);
  }, 50);
}
function Dl(e, { modifiers: t, value: l, arg: o }) {
  const n = Object.assign({}, e.cfg.ripple, t, l);
  e.modifiers = {
    early: n.early === !0,
    stop: n.stop === !0,
    center: n.center === !0,
    color: n.color || o,
    keyCodes: [].concat(n.keyCodes || 13)
  };
}
const mi = hn(
  {
    name: "ripple",
    beforeMount(e, t) {
      const l = t.instance.$.appContext.config.globalProperties.$q.config || {};
      if (l.ripple === !1)
        return;
      const o = {
        cfg: l,
        enabled: t.value !== !1,
        modifiers: {},
        abort: [],
        start(n) {
          o.enabled === !0 && n.qSkipRipple !== !0 && n.type === (o.modifiers.early === !0 ? "pointerdown" : "click") && Il(n, e, o, n.qKeyEvent === !0);
        },
        keystart: vi((n) => {
          o.enabled === !0 && n.qSkipRipple !== !0 && ut(n, o.modifiers.keyCodes) === !0 && n.type === `key${o.modifiers.early === !0 ? "down" : "up"}` && Il(n, e, o, !0);
        }, 300)
      };
      Dl(o, t), e.__qripple = o, Kt(o, "main", [
        [e, "pointerdown", "start", "passive"],
        [e, "click", "start", "passive"],
        [e, "keydown", "keystart", "passive"],
        [e, "keyup", "keystart", "passive"]
      ]);
    },
    updated(e, t) {
      if (t.oldValue !== t.value) {
        const l = e.__qripple;
        l !== void 0 && (l.enabled = t.value !== !1, l.enabled === !0 && Object(t.value) === t.value && Dl(l, t));
      }
    },
    beforeUnmount(e) {
      const t = e.__qripple;
      t !== void 0 && (t.abort.forEach((l) => {
        l();
      }), fo(t, "main"), delete e._qripple);
    }
  }
), hi = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
}, gi = ve({
  name: "QChip",
  props: {
    ...Ke,
    ...il,
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
  setup(e, { slots: t, emit: l }) {
    const { proxy: { $q: o } } = ee(), n = Qe(e, o), u = ul(e, hi), r = f(() => e.selected === !0 || e.icon !== void 0), s = f(() => e.selected === !0 ? e.iconSelected || o.iconSet.chip.selected : e.icon), d = f(() => e.iconRemove || o.iconSet.chip.remove), v = f(
      () => e.disable === !1 && (e.clickable === !0 || e.selected !== null)
    ), a = f(() => {
      const h = e.outline === !0 && e.color || e.textColor;
      return "q-chip row inline no-wrap items-center" + (e.outline === !1 && e.color !== void 0 ? ` bg-${e.color}` : "") + (h ? ` text-${h} q-chip--colored` : "") + (e.disable === !0 ? " disabled" : "") + (e.dense === !0 ? " q-chip--dense" : "") + (e.outline === !0 ? " q-chip--outline" : "") + (e.selected === !0 ? " q-chip--selected" : "") + (v.value === !0 ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === !0 ? " q-chip--square" : "") + (n.value === !0 ? " q-chip--dark q-dark" : "");
    }), m = f(() => {
      const h = e.disable === !0 ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, $ = {
        ...h,
        role: "button",
        "aria-hidden": "false",
        "aria-label": e.removeAriaLabel || o.lang.label.remove
      };
      return { chip: h, remove: $ };
    });
    function S(h) {
      h.keyCode === 13 && c(h);
    }
    function c(h) {
      e.disable || (l("update:selected", !e.selected), l("click", h));
    }
    function b(h) {
      (h.keyCode === void 0 || h.keyCode === 13) && (re(h), e.disable === !1 && (l("update:modelValue", !1), l("remove")));
    }
    function B() {
      const h = [];
      v.value === !0 && h.push(
        p("div", { class: "q-focus-helper" })
      ), r.value === !0 && h.push(
        p(Ae, {
          class: "q-chip__icon q-chip__icon--left",
          name: s.value
        })
      );
      const $ = e.label !== void 0 ? [p("div", { class: "ellipsis" }, [e.label])] : void 0;
      return h.push(
        p("div", {
          class: "q-chip__content col row no-wrap items-center q-anchor--skip"
        }, xn(t.default, $))
      ), e.iconRight && h.push(
        p(Ae, {
          class: "q-chip__icon q-chip__icon--right",
          name: e.iconRight
        })
      ), e.removable === !0 && h.push(
        p(Ae, {
          class: "q-chip__icon q-chip__icon--remove cursor-pointer",
          name: d.value,
          ...m.value.remove,
          onClick: b,
          onKeyup: b
        })
      ), h;
    }
    return () => {
      if (e.modelValue === !1)
        return;
      const h = {
        class: a.value,
        style: u.value
      };
      return v.value === !0 && Object.assign(
        h,
        m.value.chip,
        { onClick: c, onKeyup: S }
      ), kn(
        "div",
        h,
        B(),
        "ripple",
        e.ripple !== !1 && e.disable !== !0,
        () => [[mi, e.ripple]]
      );
    };
  }
});
function pi() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), Yt.is.mobile !== !0 && e.addRange(document.createRange()));
  } else
    document.selection !== void 0 && document.selection.empty();
}
const bi = {
  target: {
    default: !0
  },
  noParentEvent: Boolean,
  contextMenu: Boolean
};
function yi({
  showing: e,
  avoidEmit: t,
  // required for QPopupProxy (true)
  configureAnchorEl: l
  // optional
}) {
  const { props: o, proxy: n, emit: u } = ee(), r = L(null);
  let s = null;
  function d(c) {
    return r.value === null ? !1 : c === void 0 || c.touches === void 0 || c.touches.length <= 1;
  }
  const v = {};
  l === void 0 && (Object.assign(v, {
    hide(c) {
      n.hide(c);
    },
    toggle(c) {
      n.toggle(c), c.qAnchorHandled = !0;
    },
    toggleKey(c) {
      ut(c, 13) === !0 && v.toggle(c);
    },
    contextClick(c) {
      n.hide(c), ye(c), ce(() => {
        n.show(c), c.qAnchorHandled = !0;
      });
    },
    prevent: ye,
    mobileTouch(c) {
      if (v.mobileCleanup(c), d(c) !== !0)
        return;
      n.hide(c), r.value.classList.add("non-selectable");
      const b = c.target;
      Kt(v, "anchor", [
        [b, "touchmove", "mobileCleanup", "passive"],
        [b, "touchend", "mobileCleanup", "passive"],
        [b, "touchcancel", "mobileCleanup", "passive"],
        [r.value, "contextmenu", "prevent", "notPassive"]
      ]), s = setTimeout(() => {
        s = null, n.show(c), c.qAnchorHandled = !0;
      }, 300);
    },
    mobileCleanup(c) {
      r.value.classList.remove("non-selectable"), s !== null && (clearTimeout(s), s = null), e.value === !0 && c !== void 0 && pi();
    }
  }), l = function(c = o.contextMenu) {
    if (o.noParentEvent === !0 || r.value === null)
      return;
    let b;
    c === !0 ? n.$q.platform.is.mobile === !0 ? b = [
      [r.value, "touchstart", "mobileTouch", "passive"]
    ] : b = [
      [r.value, "mousedown", "hide", "passive"],
      [r.value, "contextmenu", "contextClick", "notPassive"]
    ] : b = [
      [r.value, "click", "toggle", "passive"],
      [r.value, "keyup", "toggleKey", "passive"]
    ], Kt(v, "anchor", b);
  });
  function a() {
    fo(v, "anchor");
  }
  function m(c) {
    for (r.value = c; r.value.classList.contains("q-anchor--skip"); )
      r.value = r.value.parentNode;
    l();
  }
  function S() {
    if (o.target === !1 || o.target === "" || n.$el.parentNode === null)
      r.value = null;
    else if (o.target === !0)
      m(n.$el.parentNode);
    else {
      let c = o.target;
      if (typeof o.target == "string")
        try {
          c = document.querySelector(o.target);
        } catch {
          c = void 0;
        }
      c != null ? (r.value = c.$el || c, l()) : (r.value = null, console.error(`Anchor: target "${o.target}" not found`));
    }
  }
  return U(() => o.contextMenu, (c) => {
    r.value !== null && (a(), l(c));
  }), U(() => o.target, () => {
    r.value !== null && a(), S();
  }), U(() => o.noParentEvent, (c) => {
    r.value !== null && (c === !0 ? a() : l());
  }), it(() => {
    S(), t !== !0 && o.modelValue === !0 && r.value === null && u("update:modelValue", !1);
  }), me(() => {
    s !== null && clearTimeout(s), a();
  }), {
    anchorEl: r,
    canShow: d,
    anchorEvents: v
  };
}
function wi(e, t) {
  const l = L(null);
  let o;
  function n(s, d) {
    const v = `${d !== void 0 ? "add" : "remove"}EventListener`, a = d !== void 0 ? d : o;
    s !== window && s[v]("scroll", a, fe.passive), window[v]("scroll", a, fe.passive), o = d;
  }
  function u() {
    l.value !== null && (n(l.value), l.value = null);
  }
  const r = U(() => e.noParentEvent, () => {
    l.value !== null && (u(), t());
  });
  return me(r), {
    localScrollTarget: l,
    unconfigureScrollTarget: u,
    changeScrollEvent: n
  };
}
const _o = {
  modelValue: {
    type: Boolean,
    default: null
  },
  "onUpdate:modelValue": [Function, Array]
}, Eo = [
  "beforeShow",
  "show",
  "beforeHide",
  "hide"
];
function Bo({
  showing: e,
  canShow: t,
  // optional
  hideOnRouteChange: l,
  // optional
  handleShow: o,
  // optional
  handleHide: n,
  // optional
  processOnMount: u
  // optional
}) {
  const r = ee(), { props: s, emit: d, proxy: v } = r;
  let a;
  function m(y) {
    e.value === !0 ? b(y) : S(y);
  }
  function S(y) {
    if (s.disable === !0 || y !== void 0 && y.qAnchorHandled === !0 || t !== void 0 && t(y) !== !0)
      return;
    const g = s["onUpdate:modelValue"] !== void 0;
    g === !0 && (d("update:modelValue", !0), a = y, ce(() => {
      a === y && (a = void 0);
    })), (s.modelValue === null || g === !1) && c(y);
  }
  function c(y) {
    e.value !== !0 && (e.value = !0, d("beforeShow", y), o !== void 0 ? o(y) : d("show", y));
  }
  function b(y) {
    if (s.disable === !0)
      return;
    const g = s["onUpdate:modelValue"] !== void 0;
    g === !0 && (d("update:modelValue", !1), a = y, ce(() => {
      a === y && (a = void 0);
    })), (s.modelValue === null || g === !1) && B(y);
  }
  function B(y) {
    e.value !== !1 && (e.value = !1, d("beforeHide", y), n !== void 0 ? n(y) : d("hide", y));
  }
  function h(y) {
    s.disable === !0 && y === !0 ? s["onUpdate:modelValue"] !== void 0 && d("update:modelValue", !1) : y === !0 !== e.value && (y === !0 ? c : B)(a);
  }
  U(() => s.modelValue, h), l !== void 0 && ho(r) === !0 && U(() => v.$route.fullPath, () => {
    l.value === !0 && e.value === !0 && b();
  }), u === !0 && it(() => {
    h(s.modelValue);
  });
  const $ = { show: S, hide: b, toggle: m };
  return Object.assign(v, $), $;
}
const jl = {};
let Si = 1, xi = document.body;
function ki(e, t) {
  const l = document.createElement("div");
  if (l.id = t !== void 0 ? `q-portal--${t}--${Si++}` : e, jl.globalNodes !== void 0) {
    const o = jl.globalNodes.class;
    o !== void 0 && (l.className = o);
  }
  return xi.appendChild(l), l;
}
function Ci(e) {
  e.remove();
}
const lt = [];
function qi(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if (e.hide(t), e.$props.separateClosePopup === !0)
        return Lt(e);
    } else if (e.__qPortal === !0) {
      const l = Lt(e);
      return l !== void 0 && l.$options.name === "QPopupProxy" ? (e.hide(t), l) : e;
    }
    e = Lt(e);
  } while (e != null);
}
function Vi(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog")
      return !0;
    if (e.type.name === "QDialog" || e.type.name === "QMenu")
      return !1;
    e = e.parent;
  }
  return !1;
}
function $o(e, t, l, o) {
  const n = L(!1), u = L(!1);
  let r = null;
  const s = {}, d = o === "dialog" && Vi(e);
  function v(m) {
    if (m === !0) {
      El(s), u.value = !0;
      return;
    }
    u.value = !1, n.value === !1 && (d === !1 && r === null && (r = ki(!1, o)), n.value = !0, lt.push(e.proxy), yn(s));
  }
  function a(m) {
    if (u.value = !1, m !== !0)
      return;
    El(s), n.value = !1;
    const S = lt.indexOf(e.proxy);
    S !== -1 && lt.splice(S, 1), r !== null && (Ci(r), r = null);
  }
  return sn(() => {
    a(!0);
  }), e.proxy.__qPortal = !0, rl(e.proxy, "contentEl", () => t.value), {
    showPortal: v,
    hidePortal: a,
    portalIsActive: n,
    portalIsAccessible: u,
    renderPortal: () => d === !0 ? l() : n.value === !0 ? [p(cn, { to: r }, l())] : void 0
  };
}
const To = {
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
function Ao(e, t = () => {
}, l = () => {
}) {
  return {
    transitionProps: f(() => {
      const o = `q-transition--${e.transitionShow || t()}`, n = `q-transition--${e.transitionHide || l()}`;
      return {
        appear: !0,
        enterFromClass: `${o}-enter-from`,
        enterActiveClass: `${o}-enter-active`,
        enterToClass: `${o}-enter-to`,
        leaveFromClass: `${n}-leave-from`,
        leaveActiveClass: `${n}-leave-active`,
        leaveToClass: `${n}-leave-to`
      };
    }),
    transitionStyle: f(() => `--q-transition-duration: ${e.transitionDuration}ms`)
  };
}
function Ro() {
  let e;
  const t = ee();
  function l() {
    e = void 0;
  }
  return nt(l), me(l), {
    removeTick: l,
    registerTick(o) {
      e = o, ce(() => {
        e === o && (nl(t) === !1 && e(), e = void 0);
      });
    }
  };
}
function Mo() {
  let e = null;
  const t = ee();
  function l() {
    e !== null && (clearTimeout(e), e = null);
  }
  return nt(l), me(l), {
    removeTimeout: l,
    registerTimeout(o, n) {
      l(), nl(t) === !1 && (e = setTimeout(o, n));
    }
  };
}
const _i = [null, document, document.body, document.scrollingElement, document.documentElement];
function Ei(e, t) {
  let l = fi(t);
  if (l === void 0) {
    if (e == null)
      return window;
    l = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return _i.includes(l) ? window : l;
}
function Bi(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function $i(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
let ht;
function Ti() {
  if (ht !== void 0)
    return ht;
  const e = document.createElement("p"), t = document.createElement("div");
  Jt(e, {
    width: "100%",
    height: "200px"
  }), Jt(t, {
    position: "absolute",
    top: "0px",
    left: "0px",
    visibility: "hidden",
    width: "200px",
    height: "150px",
    overflow: "hidden"
  }), t.appendChild(e), document.body.appendChild(t);
  const l = e.offsetWidth;
  t.style.overflow = "scroll";
  let o = e.offsetWidth;
  return l === o && (o = t.clientWidth), t.remove(), ht = l - o, ht;
}
function Ai(e, t = !0) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? !1 : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
const Re = [];
let Ne;
function Ri(e) {
  Ne = e.keyCode === 27;
}
function Mi() {
  Ne === !0 && (Ne = !1);
}
function Oi(e) {
  Ne === !0 && (Ne = !1, ut(e, 27) === !0 && Re[Re.length - 1](e));
}
function Oo(e) {
  window[e]("keydown", Ri), window[e]("blur", Mi), window[e]("keyup", Oi), Ne = !1;
}
function Lo(e) {
  ae.is.desktop === !0 && (Re.push(e), Re.length === 1 && Oo("addEventListener"));
}
function St(e) {
  const t = Re.indexOf(e);
  t > -1 && (Re.splice(t, 1), Re.length === 0 && Oo("removeEventListener"));
}
const Me = [];
function Fo(e) {
  Me[Me.length - 1](e);
}
function zo(e) {
  ae.is.desktop === !0 && (Me.push(e), Me.length === 1 && document.body.addEventListener("focusin", Fo));
}
function el(e) {
  const t = Me.indexOf(e);
  t > -1 && (Me.splice(t, 1), Me.length === 0 && document.body.removeEventListener("focusin", Fo));
}
const { notPassiveCapture: xt } = fe, Oe = [];
function kt(e) {
  const t = e.target;
  if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events") === !0)
    return;
  let l = lt.length - 1;
  for (; l >= 0; ) {
    const o = lt[l].$;
    if (o.type.name === "QTooltip") {
      l--;
      continue;
    }
    if (o.type.name !== "QDialog")
      break;
    if (o.props.seamless !== !0)
      return;
    l--;
  }
  for (let o = Oe.length - 1; o >= 0; o--) {
    const n = Oe[o];
    if ((n.anchorEl.value === null || n.anchorEl.value.contains(t) === !1) && (t === document.body || n.innerRef.value !== null && n.innerRef.value.contains(t) === !1))
      e.qClickOutside = !0, n.onClickOutside(e);
    else
      return;
  }
}
function Li(e) {
  Oe.push(e), Oe.length === 1 && (document.addEventListener("mousedown", kt, xt), document.addEventListener("touchstart", kt, xt));
}
function Wl(e) {
  const t = Oe.findIndex((l) => l === e);
  t > -1 && (Oe.splice(t, 1), Oe.length === 0 && (document.removeEventListener("mousedown", kt, xt), document.removeEventListener("touchstart", kt, xt)));
}
let Nl, Kl;
function Ql(e) {
  const t = e.split(" ");
  return t.length !== 2 ? !1 : ["top", "center", "bottom"].includes(t[0]) !== !0 ? (console.error("Anchor/Self position must start with one of top/center/bottom"), !1) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== !0 ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), !1) : !0;
}
function Fi(e) {
  return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : !0;
}
const tl = {
  "start#ltr": "left",
  "start#rtl": "right",
  "end#ltr": "right",
  "end#rtl": "left"
};
["left", "middle", "right"].forEach((e) => {
  tl[`${e}#ltr`] = e, tl[`${e}#rtl`] = e;
});
function Ul(e, t) {
  const l = e.split(" ");
  return {
    vertical: l[0],
    horizontal: tl[`${l[1]}#${t === !0 ? "rtl" : "ltr"}`]
  };
}
function zi(e, t) {
  let { top: l, left: o, right: n, bottom: u, width: r, height: s } = e.getBoundingClientRect();
  return t !== void 0 && (l -= t[1], o -= t[0], u += t[1], n += t[0], r += t[0], s += t[1]), {
    top: l,
    bottom: u,
    height: s,
    left: o,
    right: n,
    width: r,
    middle: o + (n - o) / 2,
    center: l + (u - l) / 2
  };
}
function Pi(e, t, l) {
  let { top: o, left: n } = e.getBoundingClientRect();
  return o += t.top, n += t.left, l !== void 0 && (o += l[1], n += l[0]), {
    top: o,
    bottom: o + 1,
    height: 1,
    left: n,
    right: n + 1,
    width: 1,
    middle: n,
    center: o
  };
}
function Hi(e, t) {
  return {
    top: 0,
    center: t / 2,
    bottom: t,
    left: 0,
    middle: e / 2,
    right: e
  };
}
function Xl(e, t, l, o) {
  return {
    top: e[l.vertical] - t[o.vertical],
    left: e[l.horizontal] - t[o.horizontal]
  };
}
function Po(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5)
    return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      Po(e, t + 1);
    }, 10);
    return;
  }
  const {
    targetEl: l,
    offset: o,
    anchorEl: n,
    anchorOrigin: u,
    selfOrigin: r,
    absoluteOffset: s,
    fit: d,
    cover: v,
    maxHeight: a,
    maxWidth: m
  } = e;
  if (ae.is.ios === !0 && window.visualViewport !== void 0) {
    const M = document.body.style, { offsetLeft: O, offsetTop: H } = window.visualViewport;
    O !== Nl && (M.setProperty("--q-pe-left", O + "px"), Nl = O), H !== Kl && (M.setProperty("--q-pe-top", H + "px"), Kl = H);
  }
  const { scrollLeft: S, scrollTop: c } = l, b = s === void 0 ? zi(n, v === !0 ? [0, 0] : o) : Pi(n, s, o);
  Object.assign(l.style, {
    top: 0,
    left: 0,
    minWidth: null,
    minHeight: null,
    maxWidth: m || "100vw",
    maxHeight: a || "100vh",
    visibility: "visible"
  });
  const { offsetWidth: B, offsetHeight: h } = l, { elWidth: $, elHeight: y } = d === !0 || v === !0 ? { elWidth: Math.max(b.width, B), elHeight: v === !0 ? Math.max(b.height, h) : h } : { elWidth: B, elHeight: h };
  let g = { maxWidth: m, maxHeight: a };
  (d === !0 || v === !0) && (g.minWidth = b.width + "px", v === !0 && (g.minHeight = b.height + "px")), Object.assign(l.style, g);
  const _ = Hi($, y);
  let w = Xl(b, _, u, r);
  if (s === void 0 || o === void 0)
    Ht(w, b, _, u, r);
  else {
    const { top: M, left: O } = w;
    Ht(w, b, _, u, r);
    let H = !1;
    if (w.top !== M) {
      H = !0;
      const W = 2 * o[1];
      b.center = b.top -= W, b.bottom -= W + 2;
    }
    if (w.left !== O) {
      H = !0;
      const W = 2 * o[0];
      b.middle = b.left -= W, b.right -= W + 2;
    }
    H === !0 && (w = Xl(b, _, u, r), Ht(w, b, _, u, r));
  }
  g = {
    top: w.top + "px",
    left: w.left + "px"
  }, w.maxHeight !== void 0 && (g.maxHeight = w.maxHeight + "px", b.height > w.maxHeight && (g.minHeight = g.maxHeight)), w.maxWidth !== void 0 && (g.maxWidth = w.maxWidth + "px", b.width > w.maxWidth && (g.minWidth = g.maxWidth)), Object.assign(l.style, g), l.scrollTop !== c && (l.scrollTop = c), l.scrollLeft !== S && (l.scrollLeft = S);
}
function Ht(e, t, l, o, n) {
  const u = l.bottom, r = l.right, s = Ti(), d = window.innerHeight - s, v = document.body.clientWidth;
  if (e.top < 0 || e.top + u > d)
    if (n.vertical === "center")
      e.top = t[o.vertical] > d / 2 ? Math.max(0, d - u) : 0, e.maxHeight = Math.min(u, d);
    else if (t[o.vertical] > d / 2) {
      const a = Math.min(
        d,
        o.vertical === "center" ? t.center : o.vertical === n.vertical ? t.bottom : t.top
      );
      e.maxHeight = Math.min(u, a), e.top = Math.max(0, a - u);
    } else
      e.top = Math.max(
        0,
        o.vertical === "center" ? t.center : o.vertical === n.vertical ? t.top : t.bottom
      ), e.maxHeight = Math.min(u, d - e.top);
  if (e.left < 0 || e.left + r > v)
    if (e.maxWidth = Math.min(r, v), n.horizontal === "middle")
      e.left = t[o.horizontal] > v / 2 ? Math.max(0, v - r) : 0;
    else if (t[o.horizontal] > v / 2) {
      const a = Math.min(
        v,
        o.horizontal === "middle" ? t.middle : o.horizontal === n.horizontal ? t.right : t.left
      );
      e.maxWidth = Math.min(r, a), e.left = Math.max(0, a - e.maxWidth);
    } else
      e.left = Math.max(
        0,
        o.horizontal === "middle" ? t.middle : o.horizontal === n.horizontal ? t.left : t.right
      ), e.maxWidth = Math.min(r, v - e.left);
}
const Ii = ve({
  name: "QMenu",
  inheritAttrs: !1,
  props: {
    ...bi,
    ..._o,
    ...Ke,
    ...To,
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
      validator: Ql
    },
    self: {
      type: String,
      validator: Ql
    },
    offset: {
      type: Array,
      validator: Fi
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
    ...Eo,
    "click",
    "escapeKey"
  ],
  setup(e, { slots: t, emit: l, attrs: o }) {
    let n = null, u, r, s;
    const d = ee(), { proxy: v } = d, { $q: a } = v, m = L(null), S = L(!1), c = f(
      () => e.persistent !== !0 && e.noRouteDismiss !== !0
    ), b = Qe(e, a), { registerTick: B, removeTick: h } = Ro(), { registerTimeout: $ } = Mo(), { transitionProps: y, transitionStyle: g } = Ao(e), { localScrollTarget: _, changeScrollEvent: w, unconfigureScrollTarget: M } = wi(e, z), { anchorEl: O, canShow: H } = yi({ showing: S }), { hide: W } = Bo({
      showing: S,
      canShow: H,
      handleShow: k,
      handleHide: q,
      hideOnRouteChange: c,
      processOnMount: !0
    }), { showPortal: Z, hidePortal: Q, renderPortal: I } = $o(d, m, Y, "menu"), X = {
      anchorEl: O,
      innerRef: m,
      onClickOutside(x) {
        if (e.persistent !== !0 && S.value === !0)
          return W(x), // always prevent touch event
          (x.type === "touchstart" || x.target.classList.contains("q-dialog__backdrop")) && re(x), !0;
      }
    }, ie = f(
      () => Ul(
        e.anchor || (e.cover === !0 ? "center middle" : "bottom start"),
        a.lang.rtl
      )
    ), oe = f(() => e.cover === !0 ? ie.value : Ul(e.self || "top start", a.lang.rtl)), J = f(
      () => (e.square === !0 ? " q-menu--square" : "") + (b.value === !0 ? " q-menu--dark q-dark" : "")
    ), E = f(() => e.autoClose === !0 ? { onClick: N } : {}), D = f(
      () => S.value === !0 && e.persistent !== !0
    );
    U(D, (x) => {
      x === !0 ? (Lo(T), Li(X)) : (St(T), Wl(X));
    });
    function ne() {
      qt(() => {
        let x = m.value;
        x && x.contains(document.activeElement) !== !0 && (x = x.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || x.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || x.querySelector("[autofocus], [data-autofocus]") || x, x.focus({ preventScroll: !0 }));
      });
    }
    function k(x) {
      if (n = e.noRefocus === !1 ? document.activeElement : null, zo(R), Z(), z(), u = void 0, x !== void 0 && (e.touchPosition || e.contextMenu)) {
        const te = co(x);
        if (te.left !== void 0) {
          const { top: xe, left: qe } = O.value.getBoundingClientRect();
          u = { left: te.left - qe, top: te.top - xe };
        }
      }
      r === void 0 && (r = U(
        () => a.screen.width + "|" + a.screen.height + "|" + e.self + "|" + e.anchor + "|" + a.lang.rtl,
        F
      )), e.noFocus !== !0 && document.activeElement.blur(), B(() => {
        F(), e.noFocus !== !0 && ne();
      }), $(() => {
        a.platform.is.ios === !0 && (s = e.autoClose, m.value.click()), F(), Z(!0), l("show", x);
      }, e.transitionDuration);
    }
    function q(x) {
      h(), Q(), A(!0), n !== null && // menu was hidden from code or ESC plugin
      (x === void 0 || x.qClickOutside !== !0) && (((x && x.type.indexOf("key") === 0 ? n.closest('[tabindex]:not([tabindex^="-"])') : void 0) || n).focus(), n = null), $(() => {
        Q(!0), l("hide", x);
      }, e.transitionDuration);
    }
    function A(x) {
      u = void 0, r !== void 0 && (r(), r = void 0), (x === !0 || S.value === !0) && (el(R), M(), Wl(X), St(T)), x !== !0 && (n = null);
    }
    function z() {
      (O.value !== null || e.scrollTarget !== void 0) && (_.value = Ei(O.value, e.scrollTarget), w(_.value, F));
    }
    function N(x) {
      s !== !0 ? (qi(v, x), l("click", x)) : s = !1;
    }
    function R(x) {
      D.value === !0 && e.noFocus !== !0 && Vo(m.value, x.target) !== !0 && ne();
    }
    function T(x) {
      l("escapeKey"), W(x);
    }
    function F() {
      Po({
        targetEl: m.value,
        offset: e.offset,
        anchorEl: O.value,
        anchorOrigin: ie.value,
        selfOrigin: oe.value,
        absoluteOffset: u,
        fit: e.fit,
        cover: e.cover,
        maxHeight: e.maxHeight,
        maxWidth: e.maxWidth
      });
    }
    function Y() {
      return p(
        yt,
        y.value,
        () => S.value === !0 ? p("div", {
          role: "menu",
          ...o,
          ref: m,
          tabindex: -1,
          class: [
            "q-menu q-position-engine scroll" + J.value,
            o.class
          ],
          style: [
            o.style,
            g.value
          ],
          ...E.value
        }, ge(t.default)) : null
      );
    }
    return me(A), Object.assign(v, { focus: ne, updatePosition: F }), I;
  }
});
function Di(e, t, l) {
  function o() {
  }
  return me(() => {
    e.value === !0 && void 0;
  }), {
    removeFromHistory: o,
    addToHistory() {
    }
  };
}
let Ge = 0, It, Dt, et, jt = !1, Yl, Gl, Zl, Be = null;
function ji(e) {
  Wi(e) && re(e);
}
function Wi(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop"))
    return !0;
  const t = bn(e), l = e.shiftKey && !e.deltaX, o = !l && Math.abs(e.deltaX) <= Math.abs(e.deltaY), n = l || o ? e.deltaY : e.deltaX;
  for (let u = 0; u < t.length; u++) {
    const r = t[u];
    if (Ai(r, o))
      return o ? n < 0 && r.scrollTop === 0 ? !0 : n > 0 && r.scrollTop + r.clientHeight === r.scrollHeight : n < 0 && r.scrollLeft === 0 ? !0 : n > 0 && r.scrollLeft + r.clientWidth === r.scrollWidth;
  }
  return !0;
}
function Jl(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function gt(e) {
  jt !== !0 && (jt = !0, requestAnimationFrame(() => {
    jt = !1;
    const { height: t } = e.target, { clientHeight: l, scrollTop: o } = document.scrollingElement;
    (et === void 0 || t !== window.innerHeight) && (et = l - t, document.scrollingElement.scrollTop = o), o > et && (document.scrollingElement.scrollTop -= Math.ceil((o - et) / 8));
  }));
}
function eo(e) {
  const t = document.body, l = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: o, overflowX: n } = window.getComputedStyle(t);
    It = $i(window), Dt = Bi(window), Yl = t.style.left, Gl = t.style.top, Zl = window.location.href, t.style.left = `-${It}px`, t.style.top = `-${Dt}px`, n !== "hidden" && (n === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), o !== "hidden" && (o === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = !0, ae.is.ios === !0 && (l === !0 ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", gt, fe.passiveCapture), window.visualViewport.addEventListener("scroll", gt, fe.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", Jl, fe.passiveCapture));
  }
  ae.is.desktop === !0 && ae.is.mac === !0 && window[`${e}EventListener`]("wheel", ji, fe.notPassive), e === "remove" && (ae.is.ios === !0 && (l === !0 ? (window.visualViewport.removeEventListener("resize", gt, fe.passiveCapture), window.visualViewport.removeEventListener("scroll", gt, fe.passiveCapture)) : window.removeEventListener("scroll", Jl, fe.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = !1, t.style.left = Yl, t.style.top = Gl, window.location.href === Zl && window.scrollTo(It, Dt), et = void 0);
}
function Ni(e) {
  let t = "add";
  if (e === !0) {
    if (Ge++, Be !== null) {
      clearTimeout(Be), Be = null;
      return;
    }
    if (Ge > 1)
      return;
  } else {
    if (Ge === 0 || (Ge--, Ge > 0))
      return;
    if (t = "remove", ae.is.ios === !0 && ae.is.nativeMobile === !0) {
      Be !== null && clearTimeout(Be), Be = setTimeout(() => {
        eo(t), Be = null;
      }, 100);
      return;
    }
  }
  eo(t);
}
function Ki() {
  let e;
  return {
    preventBodyScroll(t) {
      t !== e && (e !== void 0 || t === !0) && (e = t, Ni(t));
    }
  };
}
let pt = 0;
const Qi = {
  standard: "fixed-full flex-center",
  top: "fixed-top justify-center",
  bottom: "fixed-bottom justify-center",
  right: "fixed-right items-center",
  left: "fixed-left items-center"
}, to = {
  standard: ["scale", "scale"],
  top: ["slide-down", "slide-up"],
  bottom: ["slide-up", "slide-down"],
  right: ["slide-left", "slide-right"],
  left: ["slide-right", "slide-left"]
}, Ui = ve({
  name: "QDialog",
  inheritAttrs: !1,
  props: {
    ..._o,
    ...To,
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
    ...Eo,
    "shake",
    "click",
    "escapeKey"
  ],
  setup(e, { slots: t, emit: l, attrs: o }) {
    const n = ee(), u = L(null), r = L(!1), s = L(!1);
    let d = null, v = null, a, m;
    const S = f(
      () => e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0
    ), { preventBodyScroll: c } = Ki(), { registerTimeout: b } = Mo(), { registerTick: B, removeTick: h } = Ro(), { transitionProps: $, transitionStyle: y } = Ao(
      e,
      () => to[e.position][0],
      () => to[e.position][1]
    ), { showPortal: g, hidePortal: _, portalIsAccessible: w, renderPortal: M } = $o(
      n,
      u,
      N,
      "dialog"
    ), { hide: O } = Bo({
      showing: r,
      hideOnRouteChange: S,
      handleShow: ie,
      handleHide: oe,
      processOnMount: !0
    }), { addToHistory: H, removeFromHistory: W } = Di(r), Z = f(
      () => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === !0 ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${Qi[e.position]}` + (s.value === !0 ? " q-dialog__inner--animating" : "") + (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") + (e.square === !0 ? " q-dialog__inner--square" : "")
    ), Q = f(() => r.value === !0 && e.seamless !== !0), I = f(() => e.autoClose === !0 ? { onClick: q } : {}), X = f(() => [
      `q-dialog fullscreen no-pointer-events q-dialog--${Q.value === !0 ? "modal" : "seamless"}`,
      o.class
    ]);
    U(() => e.maximized, (R) => {
      r.value === !0 && k(R);
    }), U(Q, (R) => {
      c(R), R === !0 ? (zo(z), Lo(D)) : (el(z), St(D));
    });
    function ie(R) {
      H(), v = e.noRefocus === !1 && document.activeElement !== null ? document.activeElement : null, k(e.maximized), g(), s.value = !0, e.noFocus !== !0 ? (document.activeElement !== null && document.activeElement.blur(), B(J)) : h(), b(() => {
        if (n.proxy.$q.platform.is.ios === !0) {
          if (e.seamless !== !0 && document.activeElement) {
            const { top: T, bottom: F } = document.activeElement.getBoundingClientRect(), { innerHeight: Y } = window, x = window.visualViewport !== void 0 ? window.visualViewport.height : Y;
            T > 0 && F > x / 2 && (document.scrollingElement.scrollTop = Math.min(
              document.scrollingElement.scrollHeight - x,
              F >= Y ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + F - x / 2)
            )), document.activeElement.scrollIntoView();
          }
          m = !0, u.value.click(), m = !1;
        }
        g(!0), s.value = !1, l("show", R);
      }, e.transitionDuration);
    }
    function oe(R) {
      h(), W(), ne(!0), s.value = !0, _(), v !== null && (((R && R.type.indexOf("key") === 0 ? v.closest('[tabindex]:not([tabindex^="-"])') : void 0) || v).focus(), v = null), b(() => {
        _(!0), s.value = !1, l("hide", R);
      }, e.transitionDuration);
    }
    function J(R) {
      qt(() => {
        let T = u.value;
        T === null || T.contains(document.activeElement) === !0 || (T = (R !== "" ? T.querySelector(R) : null) || T.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || T.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || T.querySelector("[autofocus], [data-autofocus]") || T, T.focus({ preventScroll: !0 }));
      });
    }
    function E(R) {
      R && typeof R.focus == "function" ? R.focus({ preventScroll: !0 }) : J(), l("shake");
      const T = u.value;
      T !== null && (T.classList.remove("q-animate--scale"), T.classList.add("q-animate--scale"), d !== null && clearTimeout(d), d = setTimeout(() => {
        d = null, u.value !== null && (T.classList.remove("q-animate--scale"), J());
      }, 170));
    }
    function D() {
      e.seamless !== !0 && (e.persistent === !0 || e.noEscDismiss === !0 ? e.maximized !== !0 && e.noShake !== !0 && E() : (l("escapeKey"), O()));
    }
    function ne(R) {
      d !== null && (clearTimeout(d), d = null), (R === !0 || r.value === !0) && (k(!1), e.seamless !== !0 && (c(!1), el(z), St(D))), R !== !0 && (v = null);
    }
    function k(R) {
      R === !0 ? a !== !0 && (pt < 1 && document.body.classList.add("q-body--dialog"), pt++, a = !0) : a === !0 && (pt < 2 && document.body.classList.remove("q-body--dialog"), pt--, a = !1);
    }
    function q(R) {
      m !== !0 && (O(R), l("click", R));
    }
    function A(R) {
      e.persistent !== !0 && e.noBackdropDismiss !== !0 ? O(R) : e.noShake !== !0 && E();
    }
    function z(R) {
      e.allowFocusOutside !== !0 && w.value === !0 && Vo(u.value, R.target) !== !0 && J('[tabindex]:not([tabindex="-1"])');
    }
    Object.assign(n.proxy, {
      // expose public methods
      focus: J,
      shake: E,
      // private but needed by QSelect
      __updateRefocusTarget(R) {
        v = R || null;
      }
    }), me(ne);
    function N() {
      return p("div", {
        role: "dialog",
        "aria-modal": Q.value === !0 ? "true" : "false",
        ...o,
        class: X.value
      }, [
        p(yt, {
          name: "q-transition--fade",
          appear: !0
        }, () => Q.value === !0 ? p("div", {
          class: "q-dialog__backdrop fixed-full",
          style: y.value,
          "aria-hidden": "true",
          tabindex: -1,
          onClick: A
        }) : null),
        p(
          yt,
          $.value,
          () => r.value === !0 ? p("div", {
            ref: u,
            class: Z.value,
            style: y.value,
            tabindex: -1,
            ...I.value
          }, ge(t.default)) : null
        )
      ]);
    }
    return M;
  }
});
let Ct = !1;
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
  }), document.body.appendChild(e), e.appendChild(t), e.scrollLeft = -1e3, Ct = e.scrollLeft >= 0, e.remove();
}
const he = 1e3, Xi = [
  "start",
  "center",
  "end",
  "start-force",
  "center-force",
  "end-force"
], Ho = Array.prototype.filter, Yi = window.getComputedStyle(document.body).overflowAnchor === void 0 ? pn : function(e, t) {
  e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (e === null)
      return;
    e._qOverflowAnimationFrame = void 0;
    const l = e.children || [];
    Ho.call(l, (n) => n.dataset && n.dataset.qVsAnchor !== void 0).forEach((n) => {
      delete n.dataset.qVsAnchor;
    });
    const o = l[t];
    o && o.dataset && (o.dataset.qVsAnchor = "");
  }));
};
function We(e, t) {
  return e + t;
}
function Wt(e, t, l, o, n, u, r, s) {
  const d = e === window ? document.scrollingElement || document.documentElement : e, v = n === !0 ? "offsetWidth" : "offsetHeight", a = {
    scrollStart: 0,
    scrollViewSize: -r - s,
    scrollMaxSize: 0,
    offsetStart: -r,
    offsetEnd: -s
  };
  if (n === !0 ? (e === window ? (a.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, a.scrollViewSize += document.documentElement.clientWidth) : (a.scrollStart = d.scrollLeft, a.scrollViewSize += d.clientWidth), a.scrollMaxSize = d.scrollWidth, u === !0 && (a.scrollStart = (Ct === !0 ? a.scrollMaxSize - a.scrollViewSize : 0) - a.scrollStart)) : (e === window ? (a.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, a.scrollViewSize += document.documentElement.clientHeight) : (a.scrollStart = d.scrollTop, a.scrollViewSize += d.clientHeight), a.scrollMaxSize = d.scrollHeight), l !== null)
    for (let m = l.previousElementSibling; m !== null; m = m.previousElementSibling)
      m.classList.contains("q-virtual-scroll--skip") === !1 && (a.offsetStart += m[v]);
  if (o !== null)
    for (let m = o.nextElementSibling; m !== null; m = m.nextElementSibling)
      m.classList.contains("q-virtual-scroll--skip") === !1 && (a.offsetEnd += m[v]);
  if (t !== e) {
    const m = d.getBoundingClientRect(), S = t.getBoundingClientRect();
    n === !0 ? (a.offsetStart += S.left - m.left, a.offsetEnd -= S.width) : (a.offsetStart += S.top - m.top, a.offsetEnd -= S.height), e !== window && (a.offsetStart += a.scrollStart), a.offsetEnd += a.scrollMaxSize - a.offsetStart;
  }
  return a;
}
function lo(e, t, l, o) {
  t === "end" && (t = (e === window ? document.body : e)[l === !0 ? "scrollWidth" : "scrollHeight"]), e === window ? l === !0 ? (o === !0 && (t = (Ct === !0 ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : l === !0 ? (o === !0 && (t = (Ct === !0 ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function Ze(e, t, l, o) {
  if (l >= o)
    return 0;
  const n = t.length, u = Math.floor(l / he), r = Math.floor((o - 1) / he) + 1;
  let s = e.slice(u, r).reduce(We, 0);
  return l % he !== 0 && (s -= t.slice(u * he, l).reduce(We, 0)), o % he !== 0 && o !== n && (s -= t.slice(o, r * he).reduce(We, 0)), s;
}
const Gi = {
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
}, Zi = {
  virtualScrollHorizontal: Boolean,
  onVirtualScroll: Function,
  ...Gi
};
function Ji({
  virtualScrollLength: e,
  getVirtualScrollTarget: t,
  getVirtualScrollEl: l,
  virtualScrollItemSizeComputed: o
  // optional
}) {
  const n = ee(), { props: u, emit: r, proxy: s } = n, { $q: d } = s;
  let v, a, m, S = [], c;
  const b = L(0), B = L(0), h = L({}), $ = L(null), y = L(null), g = L(null), _ = L({ from: 0, to: 0 }), w = f(() => u.tableColspan !== void 0 ? u.tableColspan : 100);
  o === void 0 && (o = f(() => u.virtualScrollItemSize));
  const M = f(() => o.value + ";" + u.virtualScrollHorizontal), O = f(
    () => M.value + ";" + u.virtualScrollSliceRatioBefore + ";" + u.virtualScrollSliceRatioAfter
  );
  U(O, () => {
    J();
  }), U(M, H);
  function H() {
    oe(a, !0);
  }
  function W(q) {
    oe(q === void 0 ? a : q);
  }
  function Z(q, A) {
    const z = t();
    if (z == null || z.nodeType === 8)
      return;
    const N = Wt(
      z,
      l(),
      $.value,
      y.value,
      u.virtualScrollHorizontal,
      d.lang.rtl,
      u.virtualScrollStickySizeStart,
      u.virtualScrollStickySizeEnd
    );
    m !== N.scrollViewSize && J(N.scrollViewSize), I(
      z,
      N,
      Math.min(e.value - 1, Math.max(0, parseInt(q, 10) || 0)),
      0,
      Xi.indexOf(A) > -1 ? A : a > -1 && q > a ? "end" : "start"
    );
  }
  function Q() {
    const q = t();
    if (q == null || q.nodeType === 8)
      return;
    const A = Wt(
      q,
      l(),
      $.value,
      y.value,
      u.virtualScrollHorizontal,
      d.lang.rtl,
      u.virtualScrollStickySizeStart,
      u.virtualScrollStickySizeEnd
    ), z = e.value - 1, N = A.scrollMaxSize - A.offsetStart - A.offsetEnd - B.value;
    if (v === A.scrollStart)
      return;
    if (A.scrollMaxSize <= 0) {
      I(q, A, 0, 0);
      return;
    }
    m !== A.scrollViewSize && J(A.scrollViewSize), X(_.value.from);
    const R = Math.floor(A.scrollMaxSize - Math.max(A.scrollViewSize, A.offsetEnd) - Math.min(c[z], A.scrollViewSize / 2));
    if (R > 0 && Math.ceil(A.scrollStart) >= R) {
      I(
        q,
        A,
        z,
        A.scrollMaxSize - A.offsetEnd - S.reduce(We, 0)
      );
      return;
    }
    let T = 0, F = A.scrollStart - A.offsetStart, Y = F;
    if (F <= N && F + A.scrollViewSize >= b.value)
      F -= b.value, T = _.value.from, Y = F;
    else
      for (let x = 0; F >= S[x] && T < z; x++)
        F -= S[x], T += he;
    for (; F > 0 && T < z; )
      F -= c[T], F > -A.scrollViewSize ? (T++, Y = F) : Y = c[T] + F;
    I(
      q,
      A,
      T,
      Y
    );
  }
  function I(q, A, z, N, R) {
    const T = typeof R == "string" && R.indexOf("-force") > -1, F = T === !0 ? R.replace("-force", "") : R, Y = F !== void 0 ? F : "start";
    let x = Math.max(0, z - h.value[Y]), te = x + h.value.total;
    te > e.value && (te = e.value, x = Math.max(0, te - h.value.total)), v = A.scrollStart;
    const xe = x !== _.value.from || te !== _.value.to;
    if (xe === !1 && F === void 0) {
      D(z);
      return;
    }
    const { activeElement: qe } = document, pe = g.value;
    xe === !0 && pe !== null && pe !== qe && pe.contains(qe) === !0 && (pe.addEventListener("focusout", ie), setTimeout(() => {
      pe !== null && pe.removeEventListener("focusout", ie);
    })), Yi(pe, z - x);
    const rt = F !== void 0 ? c.slice(x, z).reduce(We, 0) : 0;
    if (xe === !0) {
      const Ve = te >= _.value.from && x <= _.value.to ? _.value.to : te;
      _.value = { from: x, to: Ve }, b.value = Ze(S, c, 0, x), B.value = Ze(S, c, te, e.value), requestAnimationFrame(() => {
        _.value.to !== te && v === A.scrollStart && (_.value = { from: _.value.from, to: te }, B.value = Ze(S, c, te, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (v !== A.scrollStart)
        return;
      xe === !0 && X(x);
      const Ve = c.slice(x, z).reduce(We, 0), Le = Ve + A.offsetStart + b.value, at = Le + c[z];
      let Ue = Le + N;
      if (F !== void 0) {
        const Vt = Ve - rt, se = A.scrollStart + Vt;
        Ue = T !== !0 && se < Le && at < se + A.scrollViewSize ? se : F === "end" ? at - A.scrollViewSize : Le - (F === "start" ? 0 : Math.round((A.scrollViewSize - c[z]) / 2));
      }
      v = Ue, lo(
        q,
        Ue,
        u.virtualScrollHorizontal,
        d.lang.rtl
      ), D(z);
    });
  }
  function X(q) {
    const A = g.value;
    if (A) {
      const z = Ho.call(
        A.children,
        (x) => x.classList && x.classList.contains("q-virtual-scroll--skip") === !1
      ), N = z.length, R = u.virtualScrollHorizontal === !0 ? (x) => x.getBoundingClientRect().width : (x) => x.offsetHeight;
      let T = q, F, Y;
      for (let x = 0; x < N; ) {
        for (F = R(z[x]), x++; x < N && z[x].classList.contains("q-virtual-scroll--with-prev") === !0; )
          F += R(z[x]), x++;
        Y = F - c[T], Y !== 0 && (c[T] += Y, S[Math.floor(T / he)] += Y), T++;
      }
    }
  }
  function ie() {
    g.value !== null && g.value !== void 0 && g.value.focus();
  }
  function oe(q, A) {
    const z = 1 * o.value;
    (A === !0 || Array.isArray(c) === !1) && (c = []);
    const N = c.length;
    c.length = e.value;
    for (let T = e.value - 1; T >= N; T--)
      c[T] = z;
    const R = Math.floor((e.value - 1) / he);
    S = [];
    for (let T = 0; T <= R; T++) {
      let F = 0;
      const Y = Math.min((T + 1) * he, e.value);
      for (let x = T * he; x < Y; x++)
        F += c[x];
      S.push(F);
    }
    a = -1, v = void 0, b.value = Ze(S, c, 0, _.value.from), B.value = Ze(S, c, _.value.to, e.value), q >= 0 ? (X(_.value.from), ce(() => {
      Z(q);
    })) : ne();
  }
  function J(q) {
    if (q === void 0 && typeof window < "u") {
      const F = t();
      F != null && F.nodeType !== 8 && (q = Wt(
        F,
        l(),
        $.value,
        y.value,
        u.virtualScrollHorizontal,
        d.lang.rtl,
        u.virtualScrollStickySizeStart,
        u.virtualScrollStickySizeEnd
      ).scrollViewSize);
    }
    m = q;
    const A = parseFloat(u.virtualScrollSliceRatioBefore) || 0, z = parseFloat(u.virtualScrollSliceRatioAfter) || 0, N = 1 + A + z, R = q === void 0 || q <= 0 ? 1 : Math.ceil(q / o.value), T = Math.max(
      1,
      R,
      Math.ceil((u.virtualScrollSliceSize > 0 ? u.virtualScrollSliceSize : 10) / N)
    );
    h.value = {
      total: Math.ceil(T * N),
      start: Math.ceil(T * A),
      center: Math.ceil(T * (0.5 + A)),
      end: Math.ceil(T * (1 + A)),
      view: R
    };
  }
  function E(q, A) {
    const z = u.virtualScrollHorizontal === !0 ? "width" : "height", N = {
      ["--q-virtual-scroll-item-" + z]: o.value + "px"
    };
    return [
      q === "tbody" ? p(q, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: $
      }, [
        p("tr", [
          p("td", {
            style: { [z]: `${b.value}px`, ...N },
            colspan: w.value
          })
        ])
      ]) : p(q, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: $,
        style: { [z]: `${b.value}px`, ...N }
      }),
      p(q, {
        class: "q-virtual-scroll__content",
        key: "content",
        ref: g,
        tabindex: -1
      }, A.flat()),
      q === "tbody" ? p(q, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: y
      }, [
        p("tr", [
          p("td", {
            style: { [z]: `${B.value}px`, ...N },
            colspan: w.value
          })
        ])
      ]) : p(q, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: y,
        style: { [z]: `${B.value}px`, ...N }
      })
    ];
  }
  function D(q) {
    a !== q && (u.onVirtualScroll !== void 0 && r("virtualScroll", {
      index: q,
      from: _.value.from,
      to: _.value.to - 1,
      direction: q < a ? "decrease" : "increase",
      ref: s
    }), a = q);
  }
  J();
  const ne = xo(
    Q,
    d.platform.is.ios === !0 ? 120 : 35
  );
  dn(() => {
    J();
  });
  let k = !1;
  return nt(() => {
    k = !0;
  }), ol(() => {
    if (k !== !0)
      return;
    const q = t();
    v !== void 0 && q !== void 0 && q !== null && q.nodeType !== 8 ? lo(
      q,
      v,
      u.virtualScrollHorizontal,
      d.lang.rtl
    ) : Z(a);
  }), me(() => {
    ne.cancel();
  }), Object.assign(s, { scrollTo: Z, reset: H, refresh: W }), {
    virtualScrollSliceRange: _,
    virtualScrollSliceSizeComputed: h,
    setVirtualScrollSize: J,
    onVirtualScrollEvt: ne,
    localResetVirtualScroll: oe,
    padVirtualScroll: E,
    scrollTo: Z,
    reset: H,
    refresh: W
  };
}
const eu = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, tu = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, lu = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, ou = /[a-z0-9_ -]$/i;
function nu(e) {
  return function(l) {
    if (l.type === "compositionend" || l.type === "change") {
      if (l.target.qComposing !== !0)
        return;
      l.target.qComposing = !1, e(l);
    } else
      l.type === "compositionupdate" && l.target.qComposing !== !0 && typeof l.data == "string" && (ae.is.firefox === !0 ? ou.test(l.data) === !1 : eu.test(l.data) === !0 || tu.test(l.data) === !0 || lu.test(l.data) === !0) === !0 && (l.target.qComposing = !0);
  };
}
function Ce(e, t) {
  if (e === t)
    return !0;
  if (e !== null && t !== null && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    let l, o;
    if (e.constructor === Array) {
      if (l = e.length, l !== t.length)
        return !1;
      for (o = l; o-- !== 0; )
        if (Ce(e[o], t[o]) !== !0)
          return !1;
      return !0;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size)
        return !1;
      let u = e.entries();
      for (o = u.next(); o.done !== !0; ) {
        if (t.has(o.value[0]) !== !0)
          return !1;
        o = u.next();
      }
      for (u = e.entries(), o = u.next(); o.done !== !0; ) {
        if (Ce(o.value[1], t.get(o.value[0])) !== !0)
          return !1;
        o = u.next();
      }
      return !0;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size)
        return !1;
      const u = e.entries();
      for (o = u.next(); o.done !== !0; ) {
        if (t.has(o.value[0]) !== !0)
          return !1;
        o = u.next();
      }
      return !0;
    }
    if (e.buffer != null && e.buffer.constructor === ArrayBuffer) {
      if (l = e.length, l !== t.length)
        return !1;
      for (o = l; o-- !== 0; )
        if (e[o] !== t[o])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const n = Object.keys(e).filter((u) => e[u] !== void 0);
    if (l = n.length, l !== Object.keys(t).filter((u) => t[u] !== void 0).length)
      return !1;
    for (o = l; o-- !== 0; ) {
      const u = n[o];
      if (Ce(e[u], t[u]) !== !0)
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function oo(e, t, l) {
  if (l <= t)
    return t;
  const o = l - t + 1;
  let n = t + (e - t) % o;
  return n < t && (n = o + n), n === 0 ? 0 : n;
}
const no = (e) => ["add", "add-unique", "toggle"].includes(e), iu = ".*+?^${}()|[]\\", uu = Object.keys(sl), ru = ve({
  name: "QSelect",
  inheritAttrs: !1,
  props: {
    ...Zi,
    ...yo,
    ...sl,
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
      validator: no
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
    ...ko,
    "add",
    "remove",
    "inputValue",
    "newValue",
    "keyup",
    "keypress",
    "keydown",
    "filterAbort"
  ],
  setup(e, { slots: t, emit: l }) {
    const { proxy: o } = ee(), { $q: n } = o, u = L(!1), r = L(!1), s = L(-1), d = L(""), v = L(!1), a = L(!1);
    let m = null, S, c, b, B = null, h, $, y, g;
    const _ = L(null), w = L(null), M = L(null), O = L(null), H = L(null), W = zn(e), Z = nu(yl), Q = f(() => Array.isArray(e.options) ? e.options.length : 0), I = f(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === !0 ? 24 : 48 : e.virtualScrollItemSize), {
      virtualScrollSliceRange: X,
      virtualScrollSliceSizeComputed: ie,
      localResetVirtualScroll: oe,
      padVirtualScroll: J,
      onVirtualScrollEvt: E,
      scrollTo: D,
      setVirtualScrollSize: ne
    } = Ji({
      virtualScrollLength: Q,
      getVirtualScrollTarget: Wo,
      getVirtualScrollEl: pl,
      virtualScrollItemSizeComputed: I
    }), k = Co(), q = f(() => {
      const i = e.mapOptions === !0 && e.multiple !== !0, V = e.modelValue !== void 0 && (e.modelValue !== null || i === !0) ? e.multiple === !0 && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
      if (e.mapOptions === !0 && Array.isArray(e.options) === !0) {
        const C = e.mapOptions === !0 && S !== void 0 ? S : [], P = V.map((K) => jo(K, C));
        return e.modelValue === null && i === !0 ? P.filter((K) => K !== null) : P;
      }
      return V;
    }), A = f(() => {
      const i = {};
      return uu.forEach((V) => {
        const C = e[V];
        C !== void 0 && (i[V] = C);
      }), i;
    }), z = f(() => e.optionsDark === null ? k.isDark.value : e.optionsDark), N = f(() => Zt(q.value)), R = f(() => {
      let i = "q-field__input q-placeholder col";
      return e.hideSelected === !0 || q.value.length === 0 ? [i, e.inputClass] : (i += " q-field__input--padding", e.inputClass === void 0 ? i : [i, e.inputClass]);
    }), T = f(
      () => (e.virtualScrollHorizontal === !0 ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")
    ), F = f(() => Q.value === 0), Y = f(
      () => q.value.map((i) => de.value(i)).join(", ")
    ), x = f(() => e.displayValue !== void 0 ? e.displayValue : Y.value), te = f(() => e.optionsHtml === !0 ? () => !0 : (i) => i != null && i.html === !0), xe = f(() => e.displayValueHtml === !0 || e.displayValue === void 0 && (e.optionsHtml === !0 || q.value.some(te.value))), qe = f(() => k.focused.value === !0 ? e.tabindex : -1), pe = f(() => {
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
    }), rt = f(() => ({
      id: `${k.targetUid.value}_lb`,
      role: "listbox",
      "aria-multiselectable": e.multiple === !0 ? "true" : "false"
    })), Ve = f(() => q.value.map((i, V) => ({
      index: V,
      opt: i,
      html: te.value(i),
      selected: !0,
      removeAtIndex: Do,
      toggleOption: _e,
      tabindex: qe.value
    }))), Le = f(() => {
      if (Q.value === 0)
        return [];
      const { from: i, to: V } = X.value;
      return e.options.slice(i, V).map((C, P) => {
        const K = Fe.value(C) === !0, j = i + P, G = {
          clickable: !0,
          active: !1,
          activeClass: Vt.value,
          manualFocus: !0,
          focused: !1,
          disable: K,
          tabindex: -1,
          dense: e.optionsDense,
          dark: z.value,
          role: "option",
          id: `${k.targetUid.value}_${j}`,
          onClick: () => {
            _e(C);
          }
        };
        return K !== !0 && (Bt(C) === !0 && (G.active = !0), s.value === j && (G.focused = !0), G["aria-selected"] = G.active === !0 ? "true" : "false", n.platform.is.desktop === !0 && (G.onMousemove = () => {
          u.value === !0 && ze(j);
        })), {
          index: j,
          opt: C,
          html: te.value(C),
          label: de.value(C),
          selected: G.active,
          focused: G.focused,
          toggleOption: _e,
          setOptionIndex: ze,
          itemProps: G
        };
      });
    }), at = f(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : n.iconSet.arrow.dropdown), Ue = f(
      () => e.optionsCover === !1 && e.outlined !== !0 && e.standout !== !0 && e.borderless !== !0 && e.rounded !== !0
    ), Vt = f(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), se = f(() => Et(e.optionValue, "value")), de = f(() => Et(e.optionLabel, "label")), Fe = f(() => Et(e.optionDisable, "disable")), st = f(() => q.value.map((i) => se.value(i))), Io = f(() => {
      const i = {
        onInput: yl,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange: Z,
        onKeydown: gl,
        onKeyup: ml,
        onKeypress: hl,
        onFocus: fl,
        onClick(V) {
          c === !0 && $e(V);
        }
      };
      return i.onCompositionstart = i.onCompositionupdate = i.onCompositionend = Z, i;
    });
    U(q, (i) => {
      S = i, e.useInput === !0 && e.fillInput === !0 && e.multiple !== !0 && k.innerLoading.value !== !0 && (r.value !== !0 && u.value !== !0 || N.value !== !0) && (b !== !0 && De(), (r.value === !0 || u.value === !0) && Pe(""));
    }, { immediate: !0 }), U(() => e.fillInput, De), U(u, $t), U(Q, ln);
    function cl(i) {
      return e.emitValue === !0 ? se.value(i) : i;
    }
    function _t(i) {
      if (i > -1 && i < q.value.length)
        if (e.multiple === !0) {
          const V = e.modelValue.slice();
          l("remove", { index: i, value: V.splice(i, 1)[0] }), l("update:modelValue", V);
        } else
          l("update:modelValue", null);
    }
    function Do(i) {
      _t(i), k.focus();
    }
    function dl(i, V) {
      const C = cl(i);
      if (e.multiple !== !0) {
        e.fillInput === !0 && Xe(
          de.value(i),
          !0,
          !0
        ), l("update:modelValue", C);
        return;
      }
      if (q.value.length === 0) {
        l("add", { index: 0, value: C }), l("update:modelValue", e.multiple === !0 ? [C] : C);
        return;
      }
      if (V === !0 && Bt(i) === !0 || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues)
        return;
      const P = e.modelValue.slice();
      l("add", { index: P.length, value: C }), P.push(C), l("update:modelValue", P);
    }
    function _e(i, V) {
      if (k.editable.value !== !0 || i === void 0 || Fe.value(i) === !0)
        return;
      const C = se.value(i);
      if (e.multiple !== !0) {
        V !== !0 && (Xe(
          e.fillInput === !0 ? de.value(i) : "",
          !0,
          !0
        ), Ee()), w.value !== null && w.value.focus(), (q.value.length === 0 || Ce(se.value(q.value[0]), C) !== !0) && l("update:modelValue", e.emitValue === !0 ? C : i);
        return;
      }
      if ((c !== !0 || v.value === !0) && k.focus(), fl(), q.value.length === 0) {
        const j = e.emitValue === !0 ? C : i;
        l("add", { index: 0, value: j }), l("update:modelValue", e.multiple === !0 ? [j] : j);
        return;
      }
      const P = e.modelValue.slice(), K = st.value.findIndex((j) => Ce(j, C));
      if (K > -1)
        l("remove", { index: K, value: P.splice(K, 1)[0] });
      else {
        if (e.maxValues !== void 0 && P.length >= e.maxValues)
          return;
        const j = e.emitValue === !0 ? C : i;
        l("add", { index: P.length, value: j }), P.push(j);
      }
      l("update:modelValue", P);
    }
    function ze(i) {
      if (n.platform.is.desktop !== !0)
        return;
      const V = i > -1 && i < Q.value ? i : -1;
      s.value !== V && (s.value = V);
    }
    function ct(i = 1, V) {
      if (u.value === !0) {
        let C = s.value;
        do
          C = oo(
            C + i,
            -1,
            Q.value - 1
          );
        while (C !== -1 && C !== s.value && Fe.value(e.options[C]) === !0);
        s.value !== C && (ze(C), D(C), V !== !0 && e.useInput === !0 && e.fillInput === !0 && dt(
          C >= 0 ? de.value(e.options[C]) : h
        ));
      }
    }
    function jo(i, V) {
      const C = (P) => Ce(se.value(P), i);
      return e.options.find(C) || V.find(C) || i;
    }
    function Et(i, V) {
      const C = i !== void 0 ? i : V;
      return typeof C == "function" ? C : (P) => P !== null && typeof P == "object" && C in P ? P[C] : P;
    }
    function Bt(i) {
      const V = se.value(i);
      return st.value.find((C) => Ce(C, V)) !== void 0;
    }
    function fl(i) {
      e.useInput === !0 && w.value !== null && (i === void 0 || w.value === i.target && i.target.value === Y.value) && w.value.select();
    }
    function vl(i) {
      ut(i, 27) === !0 && u.value === !0 && ($e(i), Ee(), De()), l("keyup", i);
    }
    function ml(i) {
      const { value: V } = i.target;
      if (i.keyCode !== void 0) {
        vl(i);
        return;
      }
      if (i.target.value = "", m !== null && (clearTimeout(m), m = null), De(), typeof V == "string" && V.length !== 0) {
        const C = V.toLocaleLowerCase(), P = (j) => {
          const G = e.options.find((ue) => j.value(ue).toLocaleLowerCase() === C);
          return G === void 0 ? !1 : (q.value.indexOf(G) === -1 ? _e(G) : Ee(), !0);
        }, K = (j) => {
          P(se) !== !0 && (P(de) === !0 || j === !0 || Pe(V, !0, () => K(!0)));
        };
        K();
      } else
        k.clearValue(i);
    }
    function hl(i) {
      l("keypress", i);
    }
    function gl(i) {
      if (l("keydown", i), wo(i) === !0)
        return;
      const V = d.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), C = i.shiftKey !== !0 && e.multiple !== !0 && (s.value > -1 || V === !0);
      if (i.keyCode === 27) {
        ye(i);
        return;
      }
      if (i.keyCode === 9 && C === !1) {
        He();
        return;
      }
      if (i.target === void 0 || i.target.id !== k.targetUid.value || k.editable.value !== !0)
        return;
      if (i.keyCode === 40 && k.innerLoading.value !== !0 && u.value === !1) {
        re(i), Ie();
        return;
      }
      if (i.keyCode === 8 && e.hideSelected !== !0 && d.value.length === 0) {
        e.multiple === !0 && Array.isArray(e.modelValue) === !0 ? _t(e.modelValue.length - 1) : e.multiple !== !0 && e.modelValue !== null && l("update:modelValue", null);
        return;
      }
      (i.keyCode === 35 || i.keyCode === 36) && (typeof d.value != "string" || d.value.length === 0) && (re(i), s.value = -1, ct(i.keyCode === 36 ? 1 : -1, e.multiple)), (i.keyCode === 33 || i.keyCode === 34) && ie.value !== void 0 && (re(i), s.value = Math.max(
        -1,
        Math.min(
          Q.value,
          s.value + (i.keyCode === 33 ? -1 : 1) * ie.value.view
        )
      ), ct(i.keyCode === 33 ? 1 : -1, e.multiple)), (i.keyCode === 38 || i.keyCode === 40) && (re(i), ct(i.keyCode === 38 ? -1 : 1, e.multiple));
      const P = Q.value;
      if ((y === void 0 || g < Date.now()) && (y = ""), P > 0 && e.useInput !== !0 && i.key !== void 0 && i.key.length === 1 && i.altKey === !1 && i.ctrlKey === !1 && i.metaKey === !1 && (i.keyCode !== 32 || y.length !== 0)) {
        u.value !== !0 && Ie(i);
        const K = i.key.toLocaleLowerCase(), j = y.length === 1 && y[0] === K;
        g = Date.now() + 1500, j === !1 && (re(i), y += K);
        const G = new RegExp("^" + y.split("").map((Tt) => iu.indexOf(Tt) > -1 ? "\\" + Tt : Tt).join(".*"), "i");
        let ue = s.value;
        if (j === !0 || ue < 0 || G.test(de.value(e.options[ue])) !== !0)
          do
            ue = oo(ue + 1, -1, P - 1);
          while (ue !== s.value && (Fe.value(e.options[ue]) === !0 || G.test(de.value(e.options[ue])) !== !0));
        s.value !== ue && ce(() => {
          ze(ue), D(ue), ue >= 0 && e.useInput === !0 && e.fillInput === !0 && dt(de.value(e.options[ue]));
        });
        return;
      }
      if (!(i.keyCode !== 13 && (i.keyCode !== 32 || e.useInput === !0 || y !== "") && (i.keyCode !== 9 || C === !1))) {
        if (i.keyCode !== 9 && re(i), s.value > -1 && s.value < P) {
          _e(e.options[s.value]);
          return;
        }
        if (V === !0) {
          const K = (j, G) => {
            if (G) {
              if (no(G) !== !0)
                return;
            } else
              G = e.newValueMode;
            if (Xe("", e.multiple !== !0, !0), j == null)
              return;
            (G === "toggle" ? _e : dl)(j, G === "add-unique"), e.multiple !== !0 && (w.value !== null && w.value.focus(), Ee());
          };
          if (e.onNewValue !== void 0 ? l("newValue", d.value, K) : K(d.value), e.multiple !== !0)
            return;
        }
        u.value === !0 ? He() : k.innerLoading.value !== !0 && Ie();
      }
    }
    function pl() {
      return c === !0 ? H.value : M.value !== null && M.value.contentEl !== null ? M.value.contentEl : void 0;
    }
    function Wo() {
      return pl();
    }
    function No() {
      return e.hideSelected === !0 ? [] : t["selected-item"] !== void 0 ? Ve.value.map((i) => t["selected-item"](i)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === !0 ? Ve.value.map((i, V) => p(gi, {
        key: "option-" + V,
        removable: k.editable.value === !0 && Fe.value(i.opt) !== !0,
        dense: !0,
        textColor: e.color,
        tabindex: qe.value,
        onRemove() {
          i.removeAtIndex(V);
        }
      }, () => p("span", {
        class: "ellipsis",
        [i.html === !0 ? "innerHTML" : "textContent"]: de.value(i.opt)
      }))) : [
        p("span", {
          [xe.value === !0 ? "innerHTML" : "textContent"]: x.value
        })
      ];
    }
    function bl() {
      if (F.value === !0)
        return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: d.value }) : void 0;
      const i = t.option !== void 0 ? t.option : (C) => p(Xt, {
        key: C.index,
        ...C.itemProps
      }, () => p(
        bt,
        () => p(
          Ut,
          () => p("span", {
            [C.html === !0 ? "innerHTML" : "textContent"]: C.label
          })
        )
      ));
      let V = J("div", Le.value.map(i));
      return t["before-options"] !== void 0 && (V = t["before-options"]().concat(V)), je(t["after-options"], V);
    }
    function Ko(i, V) {
      const C = V === !0 ? { ...pe.value, ...k.splitAttrs.attributes.value } : void 0, P = {
        ref: V === !0 ? w : void 0,
        key: "i_t",
        class: R.value,
        style: e.inputStyle,
        value: d.value !== void 0 ? d.value : "",
        // required for Android in order to show ENTER key when in form
        type: "search",
        ...C,
        id: V === !0 ? k.targetUid.value : void 0,
        maxlength: e.maxlength,
        autocomplete: e.autocomplete,
        "data-autofocus": i === !0 || e.autofocus === !0 || void 0,
        disabled: e.disable === !0,
        readonly: e.readonly === !0,
        ...Io.value
      };
      return i !== !0 && c === !0 && (Array.isArray(P.class) === !0 ? P.class = [...P.class, "no-pointer-events"] : P.class += " no-pointer-events"), p("input", P);
    }
    function yl(i) {
      m !== null && (clearTimeout(m), m = null), !(i && i.target && i.target.qComposing === !0) && (dt(i.target.value || ""), b = !0, h = d.value, k.focused.value !== !0 && (c !== !0 || v.value === !0) && k.focus(), e.onFilter !== void 0 && (m = setTimeout(() => {
        m = null, Pe(d.value);
      }, e.inputDebounce)));
    }
    function dt(i) {
      d.value !== i && (d.value = i, l("inputValue", i));
    }
    function Xe(i, V, C) {
      b = C !== !0, e.useInput === !0 && (dt(i), (V === !0 || C !== !0) && (h = i), V !== !0 && Pe(i));
    }
    function Pe(i, V, C) {
      if (e.onFilter === void 0 || V !== !0 && k.focused.value !== !0)
        return;
      k.innerLoading.value === !0 ? l("filterAbort") : (k.innerLoading.value = !0, a.value = !0), i !== "" && e.multiple !== !0 && q.value.length !== 0 && b !== !0 && i === de.value(q.value[0]) && (i = "");
      const P = setTimeout(() => {
        u.value === !0 && (u.value = !1);
      }, 10);
      B !== null && clearTimeout(B), B = P, l(
        "filter",
        i,
        (K, j) => {
          (V === !0 || k.focused.value === !0) && B === P && (clearTimeout(B), typeof K == "function" && K(), a.value = !1, ce(() => {
            k.innerLoading.value = !1, k.editable.value === !0 && (V === !0 ? u.value === !0 && Ee() : u.value === !0 ? $t(!0) : u.value = !0), typeof j == "function" && ce(() => {
              j(o);
            }), typeof C == "function" && ce(() => {
              C(o);
            });
          }));
        },
        () => {
          k.focused.value === !0 && B === P && (clearTimeout(B), k.innerLoading.value = !1, a.value = !1), u.value === !0 && (u.value = !1);
        }
      );
    }
    function Qo() {
      return p(Ii, {
        ref: M,
        class: T.value,
        style: e.popupContentStyle,
        modelValue: u.value,
        fit: e.menuShrink !== !0,
        cover: e.optionsCover === !0 && F.value !== !0 && e.useInput !== !0,
        anchor: e.menuAnchor,
        self: e.menuSelf,
        offset: e.menuOffset,
        dark: z.value,
        noParentEvent: !0,
        noRefocus: !0,
        noFocus: !0,
        square: Ue.value,
        transitionShow: e.transitionShow,
        transitionHide: e.transitionHide,
        transitionDuration: e.transitionDuration,
        separateClosePopup: !0,
        ...rt.value,
        onScrollPassive: E,
        onBeforeShow: Sl,
        onBeforeHide: Uo,
        onShow: Xo
      }, bl);
    }
    function Uo(i) {
      xl(i), He();
    }
    function Xo() {
      ne();
    }
    function Yo(i) {
      $e(i), w.value !== null && w.value.focus(), v.value = !0, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
    }
    function Go(i) {
      $e(i), ce(() => {
        v.value = !1;
      });
    }
    function Zo() {
      const i = [
        p(di, {
          class: `col-auto ${k.fieldClass.value}`,
          ...A.value,
          for: k.targetUid.value,
          dark: z.value,
          square: !0,
          loading: a.value,
          itemAligned: !1,
          filled: !0,
          stackLabel: d.value.length !== 0,
          ...k.splitAttrs.listeners.value,
          onFocus: Yo,
          onBlur: Go
        }, {
          ...t,
          rawControl: () => k.getControl(!0),
          before: void 0,
          after: void 0
        })
      ];
      return u.value === !0 && i.push(
        p("div", {
          ref: H,
          class: T.value + " scroll",
          style: e.popupContentStyle,
          ...rt.value,
          onClick: ye,
          onScrollPassive: E
        }, bl())
      ), p(Ui, {
        ref: O,
        modelValue: r.value,
        position: e.useInput === !0 ? "top" : void 0,
        transitionShow: $,
        transitionHide: e.transitionHide,
        transitionDuration: e.transitionDuration,
        onBeforeShow: Sl,
        onBeforeHide: Jo,
        onHide: en,
        onShow: tn
      }, () => p("div", {
        class: "q-select__dialog" + (z.value === !0 ? " q-select__dialog--dark q-dark" : "") + (v.value === !0 ? " q-select__dialog--focused" : "")
      }, i));
    }
    function Jo(i) {
      xl(i), O.value !== null && O.value.__updateRefocusTarget(
        k.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")
      ), k.focused.value = !1;
    }
    function en(i) {
      Ee(), k.focused.value === !1 && l("blur", i), De();
    }
    function tn() {
      const i = document.activeElement;
      (i === null || i.id !== k.targetUid.value) && w.value !== null && w.value !== i && w.value.focus(), ne();
    }
    function He() {
      r.value !== !0 && (s.value = -1, u.value === !0 && (u.value = !1), k.focused.value === !1 && (B !== null && (clearTimeout(B), B = null), k.innerLoading.value === !0 && (l("filterAbort"), k.innerLoading.value = !1, a.value = !1)));
    }
    function Ie(i) {
      k.editable.value === !0 && (c === !0 ? (k.onControlFocusin(i), r.value = !0, ce(() => {
        k.focus();
      })) : k.focus(), e.onFilter !== void 0 ? Pe(d.value) : (F.value !== !0 || t["no-option"] !== void 0) && (u.value = !0));
    }
    function Ee() {
      r.value = !1, He();
    }
    function De() {
      e.useInput === !0 && Xe(
        e.multiple !== !0 && e.fillInput === !0 && q.value.length !== 0 && de.value(q.value[0]) || "",
        !0,
        !0
      );
    }
    function $t(i) {
      let V = -1;
      if (i === !0) {
        if (q.value.length !== 0) {
          const C = se.value(q.value[0]);
          V = e.options.findIndex((P) => Ce(se.value(P), C));
        }
        oe(V);
      }
      ze(V);
    }
    function ln(i, V) {
      u.value === !0 && k.innerLoading.value === !1 && (oe(-1, !0), ce(() => {
        u.value === !0 && k.innerLoading.value === !1 && (i > V ? oe() : $t(!0));
      }));
    }
    function wl() {
      r.value === !1 && M.value !== null && M.value.updatePosition();
    }
    function Sl(i) {
      i !== void 0 && $e(i), l("popupShow", i), k.hasPopupOpen = !0, k.onControlFocusin(i);
    }
    function xl(i) {
      i !== void 0 && $e(i), l("popupHide", i), k.hasPopupOpen = !1, k.onControlFocusout(i);
    }
    function kl() {
      c = n.platform.is.mobile !== !0 && e.behavior !== "dialog" ? !1 : e.behavior !== "menu" && (e.useInput === !0 ? t["no-option"] !== void 0 || e.onFilter !== void 0 || F.value === !1 : !0), $ = n.platform.is.ios === !0 && c === !0 && e.useInput === !0 ? "fade" : e.transitionShow;
    }
    return ao(kl), fn(wl), kl(), me(() => {
      m !== null && clearTimeout(m);
    }), Object.assign(o, {
      showPopup: Ie,
      hidePopup: Ee,
      removeAtIndex: _t,
      add: dl,
      toggleOption: _e,
      getOptionIndex: () => s.value,
      setOptionIndex: ze,
      moveOptionSelection: ct,
      filter: Pe,
      updateMenuPosition: wl,
      updateInputValue: Xe,
      isOptionSelected: Bt,
      getEmittingOptionValue: cl,
      isOptionDisabled: (...i) => Fe.value.apply(null, i) === !0,
      getOptionValue: (...i) => se.value.apply(null, i),
      getOptionLabel: (...i) => de.value.apply(null, i)
    }), Object.assign(k, {
      innerValue: q,
      fieldClass: f(
        () => `q-select q-field--auto-height q-select--with${e.useInput !== !0 ? "out" : ""}-input q-select--with${e.useChips !== !0 ? "out" : ""}-chips q-select--${e.multiple === !0 ? "multiple" : "single"}`
      ),
      inputRef: _,
      targetRef: w,
      hasValue: N,
      showPopup: Ie,
      floatingLabel: f(
        () => e.hideSelected !== !0 && N.value === !0 || typeof d.value == "number" || d.value.length !== 0 || Zt(e.displayValue)
      ),
      getControlChild: () => {
        if (k.editable.value !== !1 && (r.value === !0 || F.value !== !0 || t["no-option"] !== void 0))
          return c === !0 ? Zo() : Qo();
        k.hasPopupOpen === !0 && (k.hasPopupOpen = !1);
      },
      controlEvents: {
        onFocusin(i) {
          k.onControlFocusin(i);
        },
        onFocusout(i) {
          k.onControlFocusout(i, () => {
            De(), He();
          });
        },
        onClick(i) {
          if (ye(i), c !== !0 && u.value === !0) {
            He(), w.value !== null && w.value.focus();
            return;
          }
          Ie(i);
        }
      },
      getControl: (i) => {
        const V = No(), C = i === !0 || r.value !== !0 || c !== !0;
        if (e.useInput === !0)
          V.push(Ko(i, C));
        else if (k.editable.value === !0) {
          const K = C === !0 ? pe.value : void 0;
          V.push(
            p("input", {
              ref: C === !0 ? w : void 0,
              key: "d_t",
              class: "q-select__focus-target",
              id: C === !0 ? k.targetUid.value : void 0,
              value: x.value,
              readonly: !0,
              "data-autofocus": i === !0 || e.autofocus === !0 || void 0,
              ...K,
              onKeydown: gl,
              onKeyup: vl,
              onKeypress: hl
            })
          ), C === !0 && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && V.push(
            p("input", {
              class: "q-select__autocomplete-input",
              autocomplete: e.autocomplete,
              tabindex: -1,
              onKeyup: ml
            })
          );
        }
        if (W.value !== void 0 && e.disable !== !0 && st.value.length !== 0) {
          const K = st.value.map((j) => p("option", { value: j, selected: !0 }));
          V.push(
            p("select", {
              class: "hidden",
              name: W.value,
              multiple: e.multiple
            }, K)
          );
        }
        const P = e.useInput === !0 || C !== !0 ? void 0 : k.splitAttrs.attributes.value;
        return p("div", {
          class: "q-field__native row items-center",
          ...P,
          ...k.splitAttrs.listeners.value
        }, V);
      },
      getInnerAppend: () => e.loading !== !0 && a.value !== !0 && e.hideDropdownIcon !== !0 ? [
        p(Ae, {
          class: "q-select__dropdown-icon" + (u.value === !0 ? " rotate-180" : ""),
          name: at.value
        })
      ] : null
    }), qo(k);
  }
}), au = /* @__PURE__ */ ll({
  __name: "AppSelect",
  props: {
    modelValue: {},
    multiple: { type: Boolean, default: () => !1 },
    newValue: { type: Boolean },
    options: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, o = (a) => {
      t("update:modelValue", a);
    }, n = L(""), u = L([]), r = f(() => [...u.value, ...l.options].filter(
      (a) => !n.value || `${a.label}`.toLocaleLowerCase().includes(n.value)
    )), s = (a, m) => {
      n.value = a.toLowerCase(), m(
        () => {
          n.value = a.toLowerCase();
        },
        (S) => {
          a !== "" && S.options && S.options.length > 0 && (S.setOptionIndex(-1), S.moveOptionSelection(1, !0));
        }
      );
    }, d = () => {
      t("update:modelValue", l.multiple ? [] : null);
    }, v = (a, m) => {
      l.newValue && (u.value.push({ value: a, label: a }), m(a, "add-unique"));
    };
    return (a, m) => (be(), tt(ru, {
      "model-value": a.modelValue,
      "onUpdate:modelValue": o,
      clearable: "",
      "use-input": "",
      "map-options": "",
      "options-dense": "",
      multiple: a.multiple,
      "use-chips": a.multiple,
      "emit-value": "",
      "input-debounce": "0",
      "popup-content-class": "no-border-radius",
      options: r.value,
      "virtual-scroll-item-size": 40,
      onFilter: s,
      onClear: d,
      onNewValue: v
    }, {
      option: Se(({ itemProps: S, opt: c, selected: b, toggleOption: B }) => [
        we(so),
        we(Xt, uo(S, {
          disable: c.disable
        }), {
          default: Se(() => [
            we(bt, { side: "" }, {
              default: Se(() => [
                we(Wn, {
                  dense: "",
                  "model-value": b,
                  "onUpdate:modelValue": (h) => B(c)
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            we(bt, null, {
              default: Se(() => [
                we(Ut, {
                  innerHTML: c.label
                }, null, 8, ["innerHTML"]),
                c.caption ? (be(), tt(Ut, {
                  key: 0,
                  caption: "",
                  innerHTML: c.caption
                }, null, 8, ["innerHTML"])) : ro("", !0)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040, ["disable"])
      ]),
      "no-option": Se(() => [
        we(Xt, null, {
          default: Se(() => [
            we(bt, { class: "text-grey" }, {
              default: Se(() => [
                vn(" Inget resultat ")
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
}), fu = En, vu = au;
export {
  fu as AppForm,
  vu as AppSelect,
  mn as useForm
};
