// @observablehq/notebook-runtime Copyright 2018 Observable, Inc.
function e(e, t, n) {
  n = n || {};var r = e.ownerDocument,
      o = r.defaultView.CustomEvent;"function" == typeof o ? o = new o(t, { detail: n }) : ((o = r.createEvent("Event")).initEvent(t, !1, !1), o.detail = n), e.dispatchEvent(o);
}function t(e) {
  return Array.isArray(e) || e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array;
}function n(e) {
  return e === (0 | e) + "";
}const r = Symbol.prototype.toString;function o(e) {
  return r.call(e);
}const { getOwnPropertySymbols: i, prototype: { hasOwnProperty: a } } = Object,
      { toStringTag: u } = Symbol,
      l = {},
      s = i;function c(e, t) {
  return a.call(e, t);
}function d(e) {
  return e[u] || e.constructor && e.constructor.name || "Object";
}function f(e, t) {
  try {
    const n = e[t];return n && n.constructor, n;
  } catch (e) {
    return l;
  }
}function p(n) {
  const r = t(n);let o, i, a;n instanceof Map ? (o = `Map(${n.size})`, i = h) : n instanceof Set ? (o = `Set(${n.size})`, i = m) : r ? (o = `${n.constructor.name}(${n.length})`, i = v) : (o = d(n), i = b);const u = document.createElement("span");u.className = "observablehq--expanded";const l = u.appendChild(document.createElement("a"));l.innerHTML = "<svg width=8 height=8 class='observablehq--caret'>\n    <path d='M4 7L0 1h8z' fill='currentColor' />\n  </svg>", l.appendChild(document.createTextNode(`${o}${r ? " [" : " {"}`)), l.addEventListener("mouseup", function (e) {
    e.stopPropagation(), W(u, y(n));
  }), i = i(n);for (let e = 0; !(a = i.next()).done && e < 20; ++e) u.appendChild(a.value);if (!a.done) {
    const t = u.appendChild(document.createElement("a"));t.className = "observablehq--field", t.style.display = "block", t.appendChild(document.createTextNode("  … more")), t.addEventListener("mouseup", function (t) {
      t.stopPropagation(), u.insertBefore(a.value, u.lastChild.previousSibling);for (let e = 0; !(a = i.next()).done && e < 19; ++e) u.insertBefore(a.value, u.lastChild.previousSibling);a.done && u.removeChild(u.lastChild.previousSibling), e(u, "load");
    });
  }return u.appendChild(document.createTextNode(r ? "]" : "}")), u;
}function* h(e) {
  for (const [t, n] of e) yield _(t, n);yield* b(e);
}function* m(e) {
  for (const t of e) yield g(t);yield* b(e);
}function* v(e) {
  for (let t = 0, n = e.length; t < n; ++t) t in e && (yield w(t, f(e, t), "observablehq--index"));for (const t in e) !n(t) && c(e, t) && (yield w(t, f(e, t), "observablehq--key"));for (const t of s(e)) yield w(o(t), f(e, t), "observablehq--symbol");
}function* b(e) {
  for (const t in e) c(e, t) && (yield w(t, f(e, t), "observablehq--key"));for (const t of s(e)) yield w(o(t), f(e, t), "observablehq--symbol");
}function w(e, t, n) {
  const r = document.createElement("div"),
        o = r.appendChild(document.createElement("span"));return r.className = "observablehq--field", o.className = n, o.textContent = `  ${e}`, r.appendChild(document.createTextNode(": ")), r.appendChild(I(t)), r;
}function _(e, t) {
  const n = document.createElement("div");return n.className = "observablehq--field", n.appendChild(document.createTextNode("  ")), n.appendChild(I(e)), n.appendChild(document.createTextNode(" => ")), n.appendChild(I(t)), n;
}function g(e) {
  const t = document.createElement("div");return t.className = "observablehq--field", t.appendChild(document.createTextNode("  ")), t.appendChild(I(e)), t;
}function y(e, n) {
  const r = t(e);let o, i, a;if (e instanceof Map ? (o = `Map(${e.size})`, i = x) : e instanceof Set ? (o = `Set(${e.size})`, i = E) : r ? (o = `${e.constructor.name}(${e.length})`, i = C) : (o = d(e), i = N), n) {
    const t = document.createElement("span");return t.className = "observablehq--shallow", t.appendChild(document.createTextNode(o)), t.addEventListener("mouseup", function (n) {
      n.stopPropagation(), W(t, y(e));
    }), t;
  }const u = document.createElement("span");u.className = "observablehq--collapsed";const l = u.appendChild(document.createElement("a"));l.innerHTML = "<svg width=8 height=8 class='observablehq--caret'>\n    <path d='M7 4L1 8V0z' fill='currentColor' />\n  </svg>", l.appendChild(document.createTextNode(`${o}${r ? " [" : " {"}`)), u.addEventListener("mouseup", function (t) {
    t.stopPropagation(), W(u, p(e));
  }, !0), i = i(e);for (let e = 0; !(a = i.next()).done && e < 20; ++e) e > 0 && u.appendChild(document.createTextNode(", ")), u.appendChild(a.value);return a.done || u.appendChild(document.createTextNode(", …")), u.appendChild(document.createTextNode(r ? "]" : "}")), u;
}function* x(e) {
  for (const [t, n] of e) yield S(t, n);yield* N(e);
}function* E(e) {
  for (const t of e) yield I(t, !0);yield* N(e);
}function* C(e) {
  for (let t = -1, n = 0, r = e.length; n < r; ++n) if (n in e) {
    let r = n - t - 1;if (r > 0) {
      const e = document.createElement("span");e.className = "observablehq--empty", e.textContent = 1 === r ? "empty" : `empty × ${n - t - 1}`, yield e;
    }yield I(f(e, n), !0), t = n;
  }for (const t in e) !n(t) && c(e, t) && (yield P(t, f(e, t), "observablehq--key"));for (const t of s(e)) yield P(o(t), f(e, t), "observablehq--symbol");
}function* N(e) {
  for (const t in e) c(e, t) && (yield P(t, f(e, t), "observablehq--key"));for (const t of s(e)) yield P(o(t), f(e, t), "observablehq--symbol");
}function P(e, t, n) {
  const r = document.createDocumentFragment(),
        o = r.appendChild(document.createElement("span"));return o.className = n, o.textContent = e, r.appendChild(document.createTextNode(": ")), r.appendChild(I(t, !0)), r;
}function S(e, t) {
  const n = document.createDocumentFragment();return n.appendChild(I(e, !0)), n.appendChild(document.createTextNode(" => ")), n.appendChild(I(t, !0)), n;
}function k(e, t) {
  var n = e + "",
      r = n.length;return r < t ? new Array(t - r + 1).join(0) + n : n;
}var q = Error.prototype.toString;var j = RegExp.prototype.toString;const L = 20;function $(e) {
  return e.replace(/[\\`\x00-\x09\x0b-\x19]|\${/g, M);
}function M(e) {
  var t = e.charCodeAt(0);return t < 16 ? "\\x0" + t.toString(16) : t < 32 ? "\\x" + t.toString(16) : "\\" + e;
}function O(e, t) {
  for (var n = 0; t.exec(e);) ++n;return n;
}var A = Function.prototype.toString,
    T = { prefix: "async ƒ" },
    R = { prefix: "async ƒ*" },
    D = { prefix: "class" },
    F = { prefix: "ƒ" },
    U = { prefix: "ƒ*" };function z(e, t) {
  var n = document.createElement("span");n.className = "observablehq--function";var r = n.appendChild(document.createElement("span"));return r.className = "observablehq--keyword", r.textContent = e.prefix, n.appendChild(document.createTextNode(" " + t)), n;
}const { prototype: { toString: H } } = Object;function I(e, t, n) {
  let r = typeof e;switch (r) {case "boolean":case "undefined":
      e += "";break;case "number":
      e = 0 === e && 1 / e < 0 ? "-0" : e + "";break;case "bigint":
      e += "n";break;case "symbol":
      e = o(e);break;case "function":
      return function (e) {
        var t,
            n,
            r = A.call(e);switch (e.constructor && e.constructor.name) {case "AsyncFunction":
            t = T;break;case "AsyncGeneratorFunction":
            t = R;break;case "GeneratorFunction":
            t = U;break;default:
            t = /^class\b/.test(r) ? D : F;}return t === D ? z(t, e.name || "") : (n = /^(?:async\s*)?(\w+)\s*=>/.exec(r)) ? z(t, "(" + n[1] + ")") : (n = /^(?:async\s*)?\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(r)) ? z(t, n[1] ? "(" + n[1].replace(/\s*,\s*/g, ", ") + ")" : "()") : (n = /^(?:async\s*)?function(?:\s*\*)?(?:\s*\w+)?\s*\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(r)) ? z(t, (e.name || "") + (n[1] ? "(" + n[1].replace(/\s*,\s*/g, ", ") + ")" : "()")) : z(t, (e.name || "") + "(…)");
      }(e);case "string":
      return function (e, t, n) {
        if (!1 === t) {
          if (O(e, /["\n]/g) <= O(e, /`|\${/g)) {
            const t = document.createElement("span");return t.className = "observablehq--string", t.textContent = JSON.stringify(e), t;
          }const r = e.split("\n");if (r.length > L && !n) {
            const n = document.createElement("div");n.className = "observablehq--string", n.textContent = "`" + $(r.slice(0, L).join("\n"));const o = n.appendChild(document.createElement("span")),
                  i = r.length - L;return o.textContent = `Show ${i} truncated line${i > 1 ? "s" : ""}`, o.className = "observablehq--string-expand", o.addEventListener("mouseup", function (r) {
              r.stopPropagation(), W(n, I(e, t, !0));
            }), n;
          }const o = document.createElement("span");return o.className = `observablehq--string${n ? " observablehq--expanded" : ""}`, o.textContent = "`" + $(e) + "`", o;
        }const r = document.createElement("span");return r.className = "observablehq--string", r.textContent = JSON.stringify(e.length > 100 ? `${e.slice(0, 50)}…${e.slice(-49)}` : e), r;
      }(e, t, n);default:
      if (null === e) {
        r = null, e = "null";break;
      }if (e instanceof Date) {
        r = "date", e = function (e) {
          return isNaN(e) ? "Invalid Date" : k(e.getFullYear(), 4) + "-" + k(e.getMonth() + 1, 2) + "-" + k(e.getDate(), 2) + (e.getMilliseconds() ? "T" + k(e.getHours(), 2) + ":" + k(e.getMinutes(), 2) + ":" + k(e.getSeconds(), 2) + "." + k(e.getMilliseconds(), 3) : e.getSeconds() ? "T" + k(e.getHours(), 2) + ":" + k(e.getMinutes(), 2) + ":" + k(e.getSeconds(), 2) : e.getMinutes() || e.getHours() ? "T" + k(e.getHours(), 2) + ":" + k(e.getMinutes(), 2) : "");
        }(e);break;
      }if (e === l) {
        r = "forbidden", e = "[forbidden]";break;
      }switch (H.call(e)) {case "[object RegExp]":
          r = "regexp", e = function (e) {
            return j.call(e);
          }(e);break;case "[object Error]":case "[object DOMException]":
          r = "error", e = function (e) {
            return e.stack || q.call(e);
          }(e);break;default:
          return (n ? p : y)(e, t);}}const i = document.createElement("span");return i.className = `observablehq--${r}`, i.textContent = e, i;
}function W(t, n) {
  t.classList.contains("observablehq--inspect") && n.classList.add("observablehq--inspect"), t.parentNode.replaceChild(n, t), e(n, "load");
}const B = /\s+\(\d+:\d+\)$/m;class V {
  constructor(e) {
    if (!e) throw new Error("invalid node");this._node = e, e.classList.add("observablehq");
  }pending() {
    const { _node: e } = this;e.classList.remove("observablehq--error"), e.classList.add("observablehq--running");
  }fulfilled(t) {
    const { _node: n } = this;if ((!(t instanceof Element || t instanceof Text) || t.parentNode && t.parentNode !== n) && (t = I(t, !1, n.firstChild && n.firstChild.classList && n.firstChild.classList.contains("observablehq--expanded"))).classList.add("observablehq--inspect"), n.classList.remove("observablehq--running", "observablehq--error"), n.firstChild !== t) if (n.firstChild) {
      for (; n.lastChild !== n.firstChild;) n.removeChild(n.lastChild);n.replaceChild(t, n.firstChild);
    } else n.appendChild(t);e(n, "update");
  }rejected(t) {
    const { _node: n } = this;for (n.classList.remove("observablehq--running"), n.classList.add("observablehq--error"); n.lastChild;) n.removeChild(n.lastChild);var r = document.createElement("span");r.className = "observablehq--inspect", r.textContent = (t + "").replace(B, ""), n.appendChild(r), e(n, "error", { error: t });
  }
}function G(e) {
  return function () {
    return e;
  };
}V.into = function (e) {
  if ("string" == typeof e && null == (e = document.querySelector(e))) throw new Error("container not found");return function () {
    return new V(e.appendChild(document.createElement("div")));
  };
};var J = { math: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
    X = 0;function Y(e) {
  this.id = e, this.href = window.location.href + "#" + e;
}Y.prototype.toString = function () {
  return "url(" + this.href + ")";
};var K = { canvas: function (e, t) {
    var n = document.createElement("canvas");return n.width = e, n.height = t, n;
  }, context2d: function (e, t, n) {
    null == n && (n = devicePixelRatio);var r = document.createElement("canvas");r.width = e * n, r.height = t * n, r.style.width = e + "px";var o = r.getContext("2d");return o.scale(n, n), o;
  }, download: function (e, t, n) {
    var r = document.createElement("a");return r.appendChild(document.createElement("button")).textContent = null == n ? "Download" : n, r.download = null == t ? "untitled" : t, r.onclick = function () {
      var t = r.href = URL.createObjectURL(e);setTimeout(function () {
        URL.revokeObjectURL(t);
      }, 50);
    }, r;
  }, element: function (e, t) {
    var n,
        r = e += "",
        o = r.indexOf(":");o >= 0 && "xmlns" !== (r = e.slice(0, o)) && (e = e.slice(o + 1));var i = J.hasOwnProperty(r) ? document.createElementNS(J[r], e) : document.createElement(e);if (t) for (var a in t) o = (r = a).indexOf(":"), n = t[a], o >= 0 && "xmlns" !== (r = a.slice(0, o)) && (a = a.slice(o + 1)), J.hasOwnProperty(r) ? i.setAttributeNS(J[r], a, n) : i.setAttribute(a, n);return i;
  }, input: function (e) {
    var t = document.createElement("input");return null != e && (t.type = e), t;
  }, range: function (e, t, n) {
    1 === arguments.length && (t = e, e = null);var r = document.createElement("input");return r.min = e = null == e ? 0 : +e, r.max = t = null == t ? 1 : +t, r.step = null == n ? "any" : n = +n, r.type = "range", r;
  }, select: function (e) {
    var t = document.createElement("select");return Array.prototype.forEach.call(e, function (e) {
      var n = document.createElement("option");n.value = n.textContent = e, t.appendChild(n);
    }), t;
  }, svg: function (e, t) {
    var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");return n.setAttribute("viewBox", [0, 0, e, t]), n.setAttribute("width", e), n.setAttribute("height", t), n;
  }, text: function (e) {
    return document.createTextNode(e);
  }, uid: function (e) {
    return new Y("O-" + (null == e ? "" : e + "-") + ++X);
  } },
    Q = { buffer: function (e) {
    return new Promise(function (t, n) {
      var r = new FileReader();r.onload = function () {
        t(r.result);
      }, r.onerror = n, r.readAsArrayBuffer(e);
    });
  }, text: function (e) {
    return new Promise(function (t, n) {
      var r = new FileReader();r.onload = function () {
        t(r.result);
      }, r.onerror = n, r.readAsText(e);
    });
  }, url: function (e) {
    return new Promise(function (t, n) {
      var r = new FileReader();r.onload = function () {
        t(r.result);
      }, r.onerror = n, r.readAsDataURL(e);
    });
  } };function Z() {
  return this;
}function ee(e, t) {
  let n = !1;return { [Symbol.iterator]: Z, next: () => n ? { done: !0 } : (n = !0, { done: !1, value: e }), return: () => (n = !0, t(e), { done: !0 }), throw: () => ({ done: n = !0 }) };
}function te(e) {
  let t,
      n,
      r = !1;const o = e(function (e) {
    return n ? (n(e), n = null) : r = !0, t = e;
  });return { [Symbol.iterator]: Z, throw: () => ({ done: !0 }), return: () => (null != o && o(), { done: !0 }), next: function () {
      return { done: !1, value: r ? (r = !1, Promise.resolve(t)) : new Promise(e => n = e) };
    } };
}function ne(e) {
  switch (e.type) {case "range":case "number":
      return e.valueAsNumber;case "date":
      return e.valueAsDate;case "checkbox":
      return e.checked;case "file":
      return e.multiple ? e.files : e.files[0];default:
      return e.value;}
}var re = { disposable: ee, filter: function* (e, t) {
    for (var n, r = -1; !(n = e.next()).done;) t(n.value, ++r) && (yield n.value);
  }, input: function (e) {
    return te(function (t) {
      var n = function (e) {
        switch (e.type) {case "button":case "submit":case "checkbox":
            return "click";case "file":
            return "change";default:
            return "input";}
      }(e),
          r = ne(e);function o() {
        t(ne(e));
      }return e.addEventListener(n, o), void 0 !== r && t(r), function () {
        e.removeEventListener(n, o);
      };
    });
  }, map: function* (e, t) {
    for (var n, r = -1; !(n = e.next()).done;) yield t(n.value, ++r);
  }, observe: te, queue: function (e) {
    let t;const n = [],
          r = e(function (e) {
      return n.push(e), t && (t(n.shift()), t = null), e;
    });return { [Symbol.iterator]: Z, throw: () => ({ done: !0 }), return: () => (null != r && r(), { done: !0 }), next: function () {
        return { done: !1, value: n.length ? Promise.resolve(n.shift()) : new Promise(e => t = e) };
      } };
  }, range: function* (e, t, n) {
    e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;for (var r = -1, o = 0 | Math.max(0, Math.ceil((t - e) / n)); ++r < o;) yield e + r * n;
  }, valueAt: function (e, t) {
    if (!(!isFinite(t = +t) || t < 0 || t != t | 0)) for (var n, r = -1; !(n = e.next()).done;) if (++r === t) return n.value;
  }, worker: function (e) {
    const t = URL.createObjectURL(new Blob([e], { type: "text/javascript" })),
          n = new Worker(t);return ee(n, () => {
      n.terminate(), URL.revokeObjectURL(t);
    });
  } };function oe(e, t) {
  return function (n) {
    var r,
        o,
        i,
        a,
        u,
        l,
        s,
        c,
        d = n[0],
        f = [],
        p = null,
        h = -1;for (u = 1, l = arguments.length; u < l; ++u) {
      if ((r = arguments[u]) instanceof Node) f[++h] = r, d += "\x3c!--o:" + h + "--\x3e";else if (Array.isArray(r)) {
        for (s = 0, c = r.length; s < c; ++s) (o = r[s]) instanceof Node ? (null === p && (f[++h] = p = document.createDocumentFragment(), d += "\x3c!--o:" + h + "--\x3e"), p.appendChild(o)) : (p = null, d += o);p = null;
      } else d += r;d += n[u];
    }if (p = e(d), ++h > 0) {
      for (i = new Array(h), a = document.createTreeWalker(p, NodeFilter.SHOW_COMMENT, null, !1); a.nextNode();) o = a.currentNode, /^o:/.test(o.nodeValue) && (i[+o.nodeValue.slice(2)] = o);for (u = 0; u < h; ++u) (o = i[u]) && o.parentNode.replaceChild(f[u], o);
    }return 1 === p.childNodes.length ? p.removeChild(p.firstChild) : 11 === p.nodeType ? ((o = t()).appendChild(p), o) : p;
  };
}var ie = oe(function (e) {
  var t = document.createElement("template");return t.innerHTML = e.trim(), document.importNode(t.content, !0);
}, function () {
  return document.createElement("div");
});function ae(e) {
  let t;Object.defineProperties(this, { generator: { value: te(e => void (t = e)) }, value: { get: () => e, set: n => t(e = n) } }), void 0 !== e && t(e);
}function* ue() {
  for (;;) yield Date.now();
}var le = new Map();function se(e, t) {
  var n;return (n = le.get(e = +e)) ? n.then(G(t)) : (n = Date.now()) >= e ? Promise.resolve(t) : function (e, t) {
    var n = new Promise(function (n) {
      le.delete(t);var r = t - e;if (!(r > 0)) throw new Error("invalid time");if (r > 2147483647) throw new Error("too long to wait");setTimeout(n, r);
    });return le.set(t, n), n;
  }(n, e).then(G(t));
}var ce = { delay: function (e, t) {
    return new Promise(function (n) {
      setTimeout(function () {
        n(t);
      }, e);
    });
  }, tick: function (e, t) {
    return se(Math.ceil((Date.now() + 1) / e) * e, t);
  }, when: se };function de(e, t) {
  if (/^(\w+:)|\/\//i.test(e)) return e;if (/^[.]{0,2}\//i.test(e)) return new URL(e, null == t ? location : t).href;if (!e.length || /^[\s._]/.test(e) || /\s$/.test(e)) throw new Error("illegal name");return "https://unpkg.com/" + e;
}const fe = new Map(),
      pe = [],
      he = pe.map,
      me = pe.some,
      ve = pe.hasOwnProperty,
      be = "https://unpkg.com/",
      we = /^((?:@[^\/@]+\/)?[^\/@]+)(?:@([^\/]+))?(?:\/(.*))?$/,
      _e = /^\d+\.\d+\.\d+(-[\w-.+]+)?$/;function ge(e) {
  return "string" == typeof e ? e : "";
}function ye(e) {
  const t = we.exec(e);return t && { name: t[1], version: t[2], path: t[3] };
}function xe(e) {
  const t = `${be}${e.name}${e.version ? `@${e.version}` : ""}/package.json`;let n = fe.get(t);return n || fe.set(t, n = fetch(t).then(e => {
    if (!e.ok) throw new Error("unable to load package.json");return e.redirected && !fe.has(e.url) && fe.set(e.url, n), e.json();
  })), n;
}const Ee = Ce(async function (e, t) {
  if (e.startsWith(be) && (e = e.substring(be.length)), /^(\w+:)|\/\//i.test(e)) return e;if (/^[.]{0,2}\//i.test(e)) return new URL(e, null == t ? location : t).href;if (!e.length || /^[\s._]/.test(e) || /\s$/.test(e)) throw new Error("illegal name");const n = ye(e);if (!n) return `${be}${e}`;if (!n.version && null != t && t.startsWith(be)) {
    const e = await xe(ye(t.substring(be.length)));n.version = e.dependencies && e.dependencies[n.name] || e.peerDependencies && e.peerDependencies[n.name];
  }if (n.path && n.version && _e.test(n.version)) return `${be}${n.name}@${n.version}/${n.path}`;const r = await xe(n);return `${be}${r.name}@${r.version}/${n.path || ge(r.unpkg) || ge(r.browser) || ge(r.main) || "index.js"}`;
});function Ce(e) {
  const t = new Map(),
        n = o(null);function r(e) {
    if ("string" != typeof e) return e;let n = t.get(e);return n || t.set(e, n = new Promise((t, n) => {
      const r = document.createElement("script");r.onload = () => {
        try {
          t(pe.pop()(o(e)));
        } catch (e) {
          n(new Error("invalid module"));
        }r.remove();
      }, r.onerror = () => {
        n(new Error("unable to load module")), r.remove();
      }, r.async = !0, r.src = e, window.define = ke, document.head.appendChild(r);
    })), n;
  }function o(t) {
    return n => Promise.resolve(e(n, t)).then(r);
  }function i(e) {
    return arguments.length > 1 ? Promise.all(he.call(arguments, n)).then(Ne) : n(e);
  }return i.alias = function (t) {
    return Ce((n, r) => n in t && (r = null, "string" != typeof (n = t[n])) ? n : e(n, r));
  }, i.resolve = e, i;
}function Ne(e) {
  const t = {};for (const n of e) for (const e in n) ve.call(n, e) && (null == n[e] ? Object.defineProperty(t, e, { get: Pe(n, e) }) : t[e] = n[e]);return t;
}function Pe(e, t) {
  return () => e[t];
}function Se(e) {
  return e + "" == "exports";
}function ke(e, t, n) {
  const r = arguments.length;r < 2 ? (n = e, t = []) : r < 3 && (n = t, t = "string" == typeof e ? [] : e), pe.push(me.call(t, Se) ? e => {
    const r = {};return Promise.all(he.call(t, t => Se(t += "") ? r : e(t))).then(e => (n.apply(null, e), r));
  } : e => Promise.all(he.call(t, e)).then(e => "function" == typeof n ? n.apply(null, e) : n));
}ke.amd = {};var qe = oe(function (e) {
  var t = document.createElementNS("http://www.w3.org/2000/svg", "g");return t.innerHTML = e.trim(), t;
}, function () {
  return document.createElementNS("http://www.w3.org/2000/svg", "g");
}),
    je = String.raw;function Le(e) {
  return new Promise(function (t, n) {
    var r = document.createElement("link");r.rel = "stylesheet", r.href = e, r.onerror = n, r.onload = t, document.head.appendChild(r);
  });
}var $e = 300;function Me() {
  return te(function (e) {
    var t = e(window.innerWidth - $e);function n() {
      var n = window.innerWidth - $e;n !== t && e(t = n);
    }return window.addEventListener("resize", n), function () {
      window.removeEventListener("resize", n);
    };
  });
}function Oe(e) {
  const t = function (e) {
    return null == e ? Ee : Ce(e);
  }(e);Object.defineProperties(this, { DOM: { value: K, writable: !0, enumerable: !0 }, Files: { value: Q, writable: !0, enumerable: !0 }, Generators: { value: re, writable: !0, enumerable: !0 }, html: { value: G(ie), writable: !0, enumerable: !0 }, md: { value: function (e) {
        return function () {
          return e("marked@0.3.12/marked.min.js").then(function (t) {
            return oe(function (n) {
              var r = document.createElement("div");r.innerHTML = t(n, { langPrefix: "" }).trim();var o = r.querySelectorAll("pre code[class]");return o.length > 0 && e("@observablehq/highlight.js@1.1.1/highlight.min.js").then(function (e) {
                o.forEach(e.highlightBlock);
              }), r;
            }, function () {
              return document.createElement("div");
            });
          });
        };
      }(t), writable: !0, enumerable: !0 }, Mutable: { value: G(ae), writable: !0, enumerable: !0 }, now: { value: ue, writable: !0, enumerable: !0 }, Promises: { value: ce, writable: !0, enumerable: !0 }, require: { value: G(t), writable: !0, enumerable: !0 }, resolve: { value: G(de), writable: !0, enumerable: !0 }, svg: { value: G(qe), writable: !0, enumerable: !0 }, tex: { value: function (e) {
        return function () {
          return Promise.all([e("@observablehq/katex@0.10.1/dist/katex.min.js"), e.resolve("@observablehq/katex@0.10.1/dist/katex.min.css").then(Le)]).then(function (e) {
            var t = e[0],
                n = r();function r(e) {
              return function () {
                var n = document.createElement("div");return t.render(je.apply(String, arguments), n, e), n.removeChild(n.firstChild);
              };
            }return n.block = r({ displayMode: !0 }), n;
          });
        };
      }(t), writable: !0, enumerable: !0 }, width: { value: Me, writable: !0, enumerable: !0 } });
}function Ae(e, t) {
  this.message = e + "", this.input = t;
}Ae.prototype = Object.create(Error.prototype), Ae.prototype.name = "RuntimeError", Ae.prototype.constructor = Ae;var Te = Array.prototype,
    Re = Te.map,
    De = Te.forEach;function Fe(e) {
  return function () {
    return e;
  };
}function Ue(e) {
  return e;
}function ze() {}var He = 1,
    Ie = 2,
    We = 3,
    Be = {};function Ve(e, t, n) {
  var r;null == n && (n = Be), Object.defineProperties(this, { _observer: { value: n, writable: !0 }, _definition: { value: Xe, writable: !0 }, _duplicate: { value: void 0, writable: !0 }, _duplicates: { value: void 0, writable: !0 }, _indegree: { value: -1, writable: !0 }, _inputs: { value: [], writable: !0 }, _invalidate: { value: ze, writable: !0 }, _module: { value: t }, _name: { value: null, writable: !0 }, _outputs: { value: new Set(), writable: !0 }, _promise: { value: Promise.resolve(void 0), writable: !0 }, _reachable: { value: n !== Be, writable: !0 }, _rejector: { value: (r = this, function (e) {
        if (e === Xe) throw new Ae(r._name + " is not defined", r._name);throw new Ae(r._name + " could not be resolved", r._name);
      }) }, _type: { value: e }, _value: { value: void 0, writable: !0 }, _version: { value: 0, writable: !0 } });
}function Ge(e) {
  e._module._runtime._dirty.add(e), e._outputs.add(this);
}function Je(e) {
  e._module._runtime._dirty.add(e), e._outputs.delete(this);
}function Xe() {
  throw Xe;
}function Ye(e) {
  return function () {
    throw new Ae(e + " is defined more than once");
  };
}function Ke(e, t, n) {
  var r = this._module._scope,
      o = this._module._runtime;if (this._inputs.forEach(Je, this), t.forEach(Ge, this), this._inputs = t, this._definition = n, this._value = void 0, e == this._name && r.get(e) === this) this._outputs.forEach(o._updates.add, o._updates);else {
    var i, a;if (this._name) if (this._outputs.size) r.delete(this._name), (a = this._module._resolve(this._name))._outputs = this._outputs, this._outputs = new Set(), a._outputs.forEach(function (e) {
      e._inputs[e._inputs.indexOf(this)] = a;
    }, this), a._outputs.forEach(o._updates.add, o._updates), o._dirty.add(a).add(this), r.set(this._name, a);else if ((a = r.get(this._name)) === this) r.delete(this._name);else {
      if (a._type !== We) throw new Error();a._duplicates.delete(this), this._duplicate = void 0, 1 === a._duplicates.size && (a = a._duplicates.keys().next().value, i = r.get(this._name), a._outputs = i._outputs, i._outputs = new Set(), a._outputs.forEach(function (e) {
        e._inputs[e._inputs.indexOf(i)] = a;
      }), a._definition = a._duplicate, a._duplicate = void 0, o._dirty.add(i).add(a), o._updates.add(a), r.set(this._name, a));
    }if (this._outputs.size) throw new Error();e && ((a = r.get(e)) ? a._type === We ? (this._definition = Ye(e), this._duplicate = n, a._duplicates.add(this)) : a._type === Ie ? (this._outputs = a._outputs, a._outputs = new Set(), this._outputs.forEach(function (e) {
      e._inputs[e._inputs.indexOf(a)] = this;
    }, this), o._dirty.add(a).add(this), r.set(e, this)) : (a._duplicate = a._definition, this._duplicate = n, (i = new Ve(We, this._module))._name = e, i._definition = this._definition = a._definition = Ye(e), i._outputs = a._outputs, a._outputs = new Set(), i._outputs.forEach(function (e) {
      e._inputs[e._inputs.indexOf(a)] = i;
    }), i._duplicates = new Set([this, a]), o._dirty.add(a).add(i), o._updates.add(a).add(i), r.set(e, i)) : r.set(e, this)), this._name = e;
  }return o._updates.add(this), o._compute(), this;
}Object.defineProperties(Ve.prototype, { _pending: { value: function () {
      this._observer.pending && this._observer.pending();
    }, writable: !0, configurable: !0 }, _fulfilled: { value: function (e) {
      this._observer.fulfilled && this._observer.fulfilled(e);
    }, writable: !0, configurable: !0 }, _rejected: { value: function (e) {
      this._observer.rejected && this._observer.rejected(e);
    }, writable: !0, configurable: !0 }, define: { value: function (e, t, n) {
      switch (arguments.length) {case 1:
          n = e, e = t = null;break;case 2:
          n = t, "string" == typeof e ? t = null : (t = e, e = null);}return Ke.call(this, null == e ? null : e + "", null == t ? [] : Re.call(t, this._module._resolve, this._module), "function" == typeof n ? n : Fe(n));
    }, writable: !0, configurable: !0 }, delete: { value: function () {
      return Ke.call(this, null, [], ze);
    }, writable: !0, configurable: !0 }, import: { value: function (e, t, n) {
      arguments.length < 3 && (n = t, t = e);return Ke.call(this, t + "", [n._resolve(e + "")], Ue);
    }, writable: !0, configurable: !0 } });var Qe = new Map();function Ze(e) {
  Object.defineProperties(this, { _runtime: { value: e }, _scope: { value: new Map() } });
}function et(e) {
  return e._name;
}Object.defineProperties(Ze.prototype, { _copy: { value: function (e, t, n) {
      var r = new Ze(this._runtime);return n.set(this, r), this._scope.forEach(function (o, i) {
        var a,
            u = new Ve(o._type, r);if (a = e.get(i)) u.import(a.name, a.alias, t);else if (o._definition === Ue) {
          var l = o._inputs[0],
              s = l._module,
              c = n.get(s) || s._copy(Qe, null, n);u.import(l._name, i, c);
        } else u.define(i, o._inputs.map(et), o._definition);
      }), r;
    }, writable: !0, configurable: !0 }, _resolve: { value: function (e) {
      var t,
          n = this._scope.get(e);n || (n = new Ve(Ie, this), this._runtime._builtin._scope.has(e) ? n.import(e, this._runtime._builtin) : void 0 !== (t = this._runtime._global(e)) ? n.define(e, Fe(t)) : "invalidation" === e ? n.define(e, tt) : "visibility" === e ? n.define(e, nt) : this._scope.set(n._name = e, n));return n;
    }, writable: !0, configurable: !0 }, define: { value: function () {
      var e = new Ve(He, this);return e.define.apply(e, arguments);
    }, writable: !0, configurable: !0 }, derive: { value: function (e, t) {
      var n = new Map();return De.call(e, function (e) {
        "object" != typeof e && (e = { name: e + "" }), null == e.alias && (e.alias = e.name), n.set(e.alias, e);
      }), this._copy(n, t, new Map());
    }, writable: !0, configurable: !0 }, import: { value: function () {
      var e = new Ve(He, this);return e.import.apply(e, arguments);
    }, writable: !0, configurable: !0 }, variable: { value: function (e) {
      return new Ve(He, this, e);
    }, writable: !0, configurable: !0 } });var tt = {},
    nt = {};function rt(e, t = function (e) {
  return window[e];
}) {
  var n = this.module();if (Object.defineProperties(this, { _dirty: { value: new Set() }, _updates: { value: new Set() }, _computing: { value: null, writable: !0 }, _builtin: { value: n }, _global: { value: t } }), e) for (var r in e) new Ve(Ie, n).define(r, [], e[r]);
}function ot(e) {
  ++e._indegree;
}function it(e) {
  return e._promise.catch(e._rejector);
}function at(e) {
  return new Promise(function (t) {
    e._invalidate = t;
  });
}function ut(e, t) {
  let n,
      r,
      o = "function" == typeof IntersectionObserver && t._observer && t._observer._node,
      i = !o,
      a = ze,
      u = ze;return o && ((r = new IntersectionObserver(([e]) => (i = e.isIntersecting) && (n = null, a()))).observe(o), e.then(() => (r.disconnect(), r = null, u()))), function (e) {
    return i ? Promise.resolve(e) : r ? (n || (n = new Promise((e, t) => (a = e, u = t))), n.then(() => e)) : Promise.reject();
  };
}function lt(e) {
  e._invalidate(), e._invalidate = ze, e._pending();var t = e._value,
      n = ++e._version,
      r = null,
      o = e._promise = Promise.all(e._inputs.map(it)).then(function (o) {
    if (e._version === n) {
      for (var i = 0, a = o.length; i < a; ++i) switch (o[i]) {case tt:
          o[i] = r = at(e);break;case nt:
          r || (r = at(e)), o[i] = ut(r, e);}return e._definition.apply(t, o);
    }
  }).then(function (t) {
    return function (e) {
      return e && "function" == typeof e.next && "function" == typeof e.return;
    }(t) ? ((r || at(e)).then((i = t, function () {
      i.return();
    })), function (e, t, n, r) {
      function o() {
        var n = new Promise(function (e) {
          e(r.next());
        }).then(function (r) {
          return r.done ? void 0 : Promise.resolve(r.value).then(function (r) {
            if (e._version === t) return st(e, r, n).then(o), e._fulfilled(r), r;
          });
        });n.catch(function (r) {
          e._version === t && (st(e, void 0, n), e._rejected(r));
        });
      }return new Promise(function (e) {
        e(r.next());
      }).then(function (e) {
        if (!e.done) return n.then(o), e.value;
      });
    }(e, n, o, t)) : t;var i;
  });o.then(function (t) {
    e._version === n && (e._value = t, e._fulfilled(t));
  }, function (t) {
    e._version === n && (e._value = void 0, e._rejected(t));
  });
}function st(e, t, n) {
  var r = e._module._runtime;return e._value = t, e._promise = n, e._outputs.forEach(r._updates.add, r._updates), r._compute();
}Object.defineProperties(rt, { load: { value: function (e, t, n) {
      if ("function" == typeof t && (n = t, t = null), "function" != typeof n) throw new Error("invalid observer");null == t && (t = new Oe());const { modules: r, id: o } = e,
            i = new Map(),
            a = new rt(t),
            u = l(o);function l(e) {
        let t = i.get(e);return t || i.set(e, t = a.module()), t;
      }for (const e of r) {
        const t = l(e.id);let r = 0;for (const o of e.variables) o.from ? t.import(o.remote, o.name, l(o.from)) : t === u ? t.variable(n(o, r, e.variables)).define(o.name, o.inputs, o.value) : t.define(o.name, o.inputs, o.value), ++r;
      }return a;
    }, writable: !0, configurable: !0 } }), Object.defineProperties(rt.prototype, { _compute: { value: function () {
      return this._computing || (this._computing = this._computeSoon());
    }, writable: !0, configurable: !0 }, _computeSoon: { value: function () {
      var e = this;return new Promise(function (t) {
        requestAnimationFrame(function () {
          t(), e._computeNow();
        });
      });
    }, writable: !0, configurable: !0 }, _computeNow: { value: function () {
      var e,
          t,
          n = [];(e = new Set(this._dirty)).forEach(function (t) {
        t._inputs.forEach(e.add, e);const n = function (e) {
          if (e._observer !== Be) return !0;var t = new Set(e._outputs);for (const e of t) {
            if (e._observer !== Be) return !0;e._outputs.forEach(t.add, t);
          }return !1;
        }(t);n > t._reachable ? this._updates.add(t) : n < t._reachable && t._invalidate(), t._reachable = n;
      }, this), (e = new Set(this._updates)).forEach(function (t) {
        t._reachable ? (t._indegree = 0, t._outputs.forEach(e.add, e)) : (t._indegree = -1, e.delete(t));
      }), this._computing = null, this._updates.clear(), this._dirty.clear(), e.forEach(function (e) {
        e._outputs.forEach(ot);
      }), e.forEach(function (e) {
        0 === e._indegree && n.push(e);
      });for (; t = n.pop();) lt(t), t._outputs.forEach(r), e.delete(t);function r(e) {
        0 == --e._indegree && n.push(e);
      }e.forEach(function (e) {
        var t = new Ae("circular definition");e._value = void 0, (e._promise = Promise.reject(t)).catch(ze), e._rejected(t);
      });
    }, writable: !0, configurable: !0 }, module: { value: function () {
      return new Ze(this);
    }, writable: !0, configurable: !0 } });
    
//export { V as Inspector, Oe as Library, rt as Runtime, Ae as RuntimeError };
// Manual exports to avoid the bad mess ES6 and CORS have
var Inspector = V, 
    Library = Oe,
    Runtime = rt,
    RuntimeError = Ae;
