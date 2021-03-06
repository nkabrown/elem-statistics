/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, n) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? n(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : n(t.d3 = {});
}(undefined, function (t) {
  "use strict";
  function n(t) {
    var n = t += "",
        e = n.indexOf(":");return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), _i.hasOwnProperty(n) ? { space: _i[n], local: t } : t;
  }function e(t) {
    return function () {
      var n = this.ownerDocument,
          e = this.namespaceURI;return e === li && n.documentElement.namespaceURI === li ? n.createElement(t) : n.createElementNS(e, t);
    };
  }function i(t) {
    return function () {
      return this.ownerDocument.createElementNS(t.space, t.local);
    };
  }function r(t) {
    var r = n(t);return (r.local ? i : e)(r);
  }function a(t, n, e) {
    return t = o(t, n, e), function (n) {
      var e = n.relatedTarget;e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n);
    };
  }function o(t, n, e) {
    return function (i) {
      var r = xi;xi = i;try {
        t.call(this, this.__data__, n, e);
      } finally {
        xi = r;
      }
    };
  }function c(t) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var n = "",
          e = t.indexOf(".");return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), { type: t, name: n };
    });
  }function u(t) {
    return function () {
      var n = this.__on;if (n) {
        for (var e, i = 0, r = -1, a = n.length; i < a; ++i) {
          e = n[i], t.type && e.type !== t.type || e.name !== t.name ? n[++r] = e : this.removeEventListener(e.type, e.listener, e.capture);
        }++r ? n.length = r : delete this.__on;
      }
    };
  }function s(t, n, e) {
    var i = gi.hasOwnProperty(t.type) ? a : o;return function (r, a, o) {
      var c,
          u = this.__on,
          s = i(n, a, o);if (u) for (var f = 0, h = u.length; f < h; ++f) {
        if ((c = u[f]).type === t.type && c.name === t.name) return this.removeEventListener(c.type, c.listener, c.capture), this.addEventListener(c.type, c.listener = s, c.capture = e), void (c.value = n);
      }this.addEventListener(t.type, s, e), c = { type: t.type, name: t.name, value: n, listener: s, capture: e }, u ? u.push(c) : this.__on = [c];
    };
  }function f(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
  }function h(t, n, e) {
    var i = f(t),
        r = i.CustomEvent;"function" == typeof r ? r = new r(n, e) : (r = i.document.createEvent("Event"), e ? (r.initEvent(n, e.bubbles, e.cancelable), r.detail = e.detail) : r.initEvent(n, !1, !1)), t.dispatchEvent(r);
  }function l(t, n) {
    return function () {
      return h(this, t, n);
    };
  }function _(t, n) {
    return function () {
      return h(this, t, n.apply(this, arguments));
    };
  }function d() {
    var t = this.parentNode;t && t.removeChild(this);
  }function p() {}function b(t) {
    return null == t ? p : function () {
      return this.querySelector(t);
    };
  }function y() {
    return null;
  }function g() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }function x() {
    this.nextSibling && this.parentNode.appendChild(this);
  }function m() {
    this.innerHTML = "";
  }function v(t) {
    return function () {
      this.innerHTML = t;
    };
  }function w(t) {
    return function () {
      var n = t.apply(this, arguments);this.innerHTML = null == n ? "" : n;
    };
  }function M() {
    this.textContent = "";
  }function T(t) {
    return function () {
      this.textContent = t;
    };
  }function k(t) {
    return function () {
      var n = t.apply(this, arguments);this.textContent = null == n ? "" : n;
    };
  }function N(t) {
    return t.trim().split(/^|\s+/);
  }function C(t) {
    return t.classList || new S(t);
  }function S(t) {
    this._node = t, this._names = N(t.getAttribute("class") || "");
  }function A(t, n) {
    for (var e = C(t), i = -1, r = n.length; ++i < r;) {
      e.add(n[i]);
    }
  }function E(t, n) {
    for (var e = C(t), i = -1, r = n.length; ++i < r;) {
      e.remove(n[i]);
    }
  }function U(t) {
    return function () {
      A(this, t);
    };
  }function D(t) {
    return function () {
      E(this, t);
    };
  }function F(t, n) {
    return function () {
      (n.apply(this, arguments) ? A : E)(this, t);
    };
  }function H(t) {
    return function () {
      delete this[t];
    };
  }function P(t, n) {
    return function () {
      this[t] = n;
    };
  }function L(t, n) {
    return function () {
      var e = n.apply(this, arguments);null == e ? delete this[t] : this[t] = e;
    };
  }function Y(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }function q(t, n, e) {
    return function () {
      this.style.setProperty(t, n, e);
    };
  }function O(t, n, e) {
    return function () {
      var i = n.apply(this, arguments);null == i ? this.style.removeProperty(t) : this.style.setProperty(t, i, e);
    };
  }function j(t, n) {
    return t.style.getPropertyValue(n) || f(t).getComputedStyle(t, null).getPropertyValue(n);
  }function z(t) {
    return function () {
      this.removeAttribute(t);
    };
  }function $(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }function R(t, n) {
    return function () {
      this.setAttribute(t, n);
    };
  }function I(t, n) {
    return function () {
      this.setAttributeNS(t.space, t.local, n);
    };
  }function Z(t, n) {
    return function () {
      var e = n.apply(this, arguments);null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
    };
  }function X(t, n) {
    return function () {
      var e = n.apply(this, arguments);null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
    };
  }function B(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }function W(t) {
    return new Array(t.length);
  }function V(t, n) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
  }function J(t) {
    return function () {
      return t;
    };
  }function G(t, n, e, i, r, a) {
    for (var o, c = 0, u = n.length, s = a.length; c < s; ++c) {
      (o = n[c]) ? (o.__data__ = a[c], i[c] = o) : e[c] = new V(t, a[c]);
    }for (; c < u; ++c) {
      (o = n[c]) && (r[c] = o);
    }
  }function Q(t, n, e, i, r, a, o) {
    var c,
        u,
        s,
        f = {},
        h = n.length,
        l = a.length,
        _ = new Array(h);for (c = 0; c < h; ++c) {
      (u = n[c]) && (_[c] = s = mi + o.call(u, u.__data__, c, n), s in f ? r[c] = u : f[s] = u);
    }for (c = 0; c < l; ++c) {
      (u = f[s = mi + o.call(t, a[c], c, a)]) ? (i[c] = u, u.__data__ = a[c], f[s] = null) : e[c] = new V(t, a[c]);
    }for (c = 0; c < h; ++c) {
      (u = n[c]) && f[_[c]] === u && (r[c] = u);
    }
  }function K() {
    return [];
  }function tt(t) {
    return null == t ? K : function () {
      return this.querySelectorAll(t);
    };
  }function nt(t, n) {
    this._groups = t, this._parents = n;
  }function et() {}function it(t, n) {
    var e = new et();if (t instanceof et) t.each(function (t, n) {
      e.set(n, t);
    });else if (Array.isArray(t)) {
      var i,
          r = -1,
          a = t.length;if (null == n) for (; ++r < a;) {
        e.set(r, t[r]);
      } else for (; ++r < a;) {
        e.set(n(i = t[r], r, t), i);
      }
    } else if (t) for (var o in t) {
      e.set(o, t[o]);
    }return e;
  }function rt() {
    for (var t, n = 0, e = arguments.length, i = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in i) throw new Error("illegal type: " + t);i[t] = [];
    }return new at(i);
  }function at(t) {
    this._ = t;
  }function ot(t, n) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var e = "",
          i = t.indexOf(".");if (i >= 0 && (e = t.slice(i + 1), t = t.slice(0, i)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);return { type: t, name: e };
    });
  }function ct(t, n) {
    for (var e, i = 0, r = t.length; i < r; ++i) {
      if ((e = t[i]).name === n) return e.value;
    }
  }function ut(t, n, e) {
    for (var i = 0, r = t.length; i < r; ++i) {
      if (t[i].name === n) {
        t[i] = wi, t = t.slice(0, i).concat(t.slice(i + 1));break;
      }
    }return null != e && t.push({ name: n, value: e }), t;
  }function st(t, n) {
    function e(t) {
      var n,
          e = s.status;if (!e && ht(s) || e >= 200 && e < 300 || 304 === e) {
        if (a) try {
          n = a.call(i, s);
        } catch (t) {
          return void c.call("error", i, t);
        } else n = s;c.call("load", i, n);
      } else c.call("error", i, t);
    }var i,
        r,
        a,
        o,
        c = rt("beforesend", "progress", "load", "error"),
        u = it(),
        s = new XMLHttpRequest(),
        f = null,
        h = null,
        l = 0;if ("undefined" == typeof XDomainRequest || "withCredentials" in s || !/^(http(s)?:)?\/\//.test(t) || (s = new XDomainRequest()), "onload" in s ? s.onload = s.onerror = s.ontimeout = e : s.onreadystatechange = function (t) {
      s.readyState > 3 && e(t);
    }, s.onprogress = function (t) {
      c.call("progress", i, t);
    }, i = { header: function header(t, n) {
        return t = (t + "").toLowerCase(), arguments.length < 2 ? u.get(t) : (null == n ? u.remove(t) : u.set(t, n + ""), i);
      }, mimeType: function mimeType(t) {
        return arguments.length ? (r = null == t ? null : t + "", i) : r;
      }, responseType: function responseType(t) {
        return arguments.length ? (o = t, i) : o;
      }, timeout: function timeout(t) {
        return arguments.length ? (l = +t, i) : l;
      }, user: function user(t) {
        return arguments.length < 1 ? f : (f = null == t ? null : t + "", i);
      }, password: function password(t) {
        return arguments.length < 1 ? h : (h = null == t ? null : t + "", i);
      }, response: function response(t) {
        return a = t, i;
      }, get: function get(t, n) {
        return i.send("GET", t, n);
      }, post: function post(t, n) {
        return i.send("POST", t, n);
      }, send: function send(n, e, a) {
        return s.open(n, t, !0, f, h), null == r || u.has("accept") || u.set("accept", r + ",*/*"), s.setRequestHeader && u.each(function (t, n) {
          s.setRequestHeader(n, t);
        }), null != r && s.overrideMimeType && s.overrideMimeType(r), null != o && (s.responseType = o), l > 0 && (s.timeout = l), null == a && "function" == typeof e && (a = e, e = null), null != a && 1 === a.length && (a = ft(a)), null != a && i.on("error", a).on("load", function (t) {
          a(null, t);
        }), c.call("beforesend", i, s), s.send(null == e ? null : e), i;
      }, abort: function abort() {
        return s.abort(), i;
      }, on: function on() {
        var t = c.on.apply(c, arguments);return t === c ? i : t;
      } }, null != n) {
      if ("function" != typeof n) throw new Error("invalid callback: " + n);return i.get(n);
    }return i;
  }function ft(t) {
    return function (n, e) {
      t(null == n ? e : null);
    };
  }function ht(t) {
    var n = t.responseType;return n && "text" !== n ? t.response : t.responseText;
  }function lt(t) {
    return new Function("d", "return {" + t.map(function (t, n) {
      return JSON.stringify(t) + ": d[" + n + "]";
    }).join(",") + "}");
  }function _t(t, n) {
    var e = lt(t);return function (i, r) {
      return n(e(i), r, t);
    };
  }function dt(t) {
    var n = Object.create(null),
        e = [];return t.forEach(function (t) {
      for (var i in t) {
        i in n || e.push(n[i] = i);
      }
    }), e;
  }function pt(t) {
    function n(t, n) {
      function e() {
        if (f >= s) return c;if (r) return r = !1, o;var n,
            e = f;if (34 === t.charCodeAt(e)) {
          for (var i = e; i++ < s;) {
            if (34 === t.charCodeAt(i)) {
              if (34 !== t.charCodeAt(i + 1)) break;++i;
            }
          }return f = i + 2, 13 === (n = t.charCodeAt(i + 1)) ? (r = !0, 10 === t.charCodeAt(i + 2) && ++f) : 10 === n && (r = !0), t.slice(e + 1, i).replace(/""/g, '"');
        }for (; f < s;) {
          var u = 1;if (10 === (n = t.charCodeAt(f++))) r = !0;else if (13 === n) r = !0, 10 === t.charCodeAt(f) && (++f, ++u);else if (n !== a) continue;return t.slice(e, f - u);
        }return t.slice(e);
      }for (var i, r, o = {}, c = {}, u = [], s = t.length, f = 0, h = 0; (i = e()) !== c;) {
        for (var l = []; i !== o && i !== c;) {
          l.push(i), i = e();
        }n && null == (l = n(l, h++)) || u.push(l);
      }return u;
    }function e(n) {
      return n.map(i).join(t);
    }function i(t) {
      return null == t ? "" : r.test(t += "") ? '"' + t.replace(/\"/g, '""') + '"' : t;
    }var r = new RegExp('["' + t + "\n\r]"),
        a = t.charCodeAt(0);return { parse: function parse(t, e) {
        var i,
            r,
            a = n(t, function (t, n) {
          if (i) return i(t, n - 1);r = t, i = e ? _t(t, e) : lt(t);
        });return a.columns = r, a;
      }, parseRows: n, format: function format(n, e) {
        return null == e && (e = dt(n)), [e.map(i).join(t)].concat(n.map(function (n) {
          return e.map(function (t) {
            return i(n[t]);
          }).join(t);
        })).join("\n");
      }, formatRows: function formatRows(t) {
        return t.map(e).join("\n");
      } };
  }function bt(t, n) {
    return function (e) {
      return t(e.responseText, n);
    };
  }function yt(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }function gt(t) {
    return function (n, e) {
      return yt(t(n), e);
    };
  }function xt(t, n, e) {
    var i,
        r,
        a,
        o = n < t,
        c = -1;if (o && (i = t, t = n, n = i), 0 === (a = mt(t, n, e)) || !isFinite(a)) return [];if (a > 0) for (t = Math.ceil(t / a), n = Math.floor(n / a), r = new Array(i = Math.ceil(n - t + 1)); ++c < i;) {
      r[c] = (t + c) * a;
    } else for (t = Math.floor(t * a), n = Math.ceil(n * a), r = new Array(i = Math.ceil(t - n + 1)); ++c < i;) {
      r[c] = (t - c) / a;
    }return o && r.reverse(), r;
  }function mt(t, n, e) {
    var i = (n - t) / Math.max(0, e),
        r = Math.floor(Math.log(i) / Math.LN10),
        a = i / Math.pow(10, r);return r >= 0 ? (a >= Ci ? 10 : a >= Si ? 5 : a >= Ai ? 2 : 1) * Math.pow(10, r) : -Math.pow(10, -r) / (a >= Ci ? 10 : a >= Si ? 5 : a >= Ai ? 2 : 1);
  }function vt(t, n, e) {
    var i = Math.abs(n - t) / Math.max(0, e),
        r = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)),
        a = i / r;return a >= Ci ? r *= 10 : a >= Si ? r *= 5 : a >= Ai && (r *= 2), n < t ? -r : r;
  }function wt(t, n, e) {
    t.prototype = n.prototype = e, e.constructor = t;
  }function Mt(t, n) {
    var e = Object.create(t.prototype);for (var i in n) {
      e[i] = n[i];
    }return e;
  }function Tt() {}function kt(t) {
    var n;return t = (t + "").trim().toLowerCase(), (n = Li.exec(t)) ? (n = parseInt(n[1], 16), new Et(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = Yi.exec(t)) ? Nt(parseInt(n[1], 16)) : (n = qi.exec(t)) ? new Et(n[1], n[2], n[3], 1) : (n = Oi.exec(t)) ? new Et(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = ji.exec(t)) ? Ct(n[1], n[2], n[3], n[4]) : (n = zi.exec(t)) ? Ct(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = $i.exec(t)) ? Ut(n[1], n[2] / 100, n[3] / 100, 1) : (n = Ri.exec(t)) ? Ut(n[1], n[2] / 100, n[3] / 100, n[4]) : Ii.hasOwnProperty(t) ? Nt(Ii[t]) : "transparent" === t ? new Et(NaN, NaN, NaN, 0) : null;
  }function Nt(t) {
    return new Et(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
  }function Ct(t, n, e, i) {
    return i <= 0 && (t = n = e = NaN), new Et(t, n, e, i);
  }function St(t) {
    return t instanceof Tt || (t = kt(t)), t ? (t = t.rgb(), new Et(t.r, t.g, t.b, t.opacity)) : new Et();
  }function At(t, n, e, i) {
    return 1 === arguments.length ? St(t) : new Et(t, n, e, null == i ? 1 : i);
  }function Et(t, n, e, i) {
    this.r = +t, this.g = +n, this.b = +e, this.opacity = +i;
  }function Ut(t, n, e, i) {
    return i <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Ft(t, n, e, i);
  }function Dt(t) {
    if (t instanceof Ft) return new Ft(t.h, t.s, t.l, t.opacity);if (t instanceof Tt || (t = kt(t)), !t) return new Ft();if (t instanceof Ft) return t;var n = (t = t.rgb()).r / 255,
        e = t.g / 255,
        i = t.b / 255,
        r = Math.min(n, e, i),
        a = Math.max(n, e, i),
        o = NaN,
        c = a - r,
        u = (a + r) / 2;return c ? (o = n === a ? (e - i) / c + 6 * (e < i) : e === a ? (i - n) / c + 2 : (n - e) / c + 4, c /= u < .5 ? a + r : 2 - a - r, o *= 60) : c = u > 0 && u < 1 ? 0 : o, new Ft(o, c, u, t.opacity);
  }function Ft(t, n, e, i) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +i;
  }function Ht(t, n, e) {
    return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n);
  }function Pt(t) {
    if (t instanceof Lt) return new Lt(t.l, t.a, t.b, t.opacity);if (t instanceof $t) {
      var n = t.h * Zi;return new Lt(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
    }t instanceof Et || (t = St(t));var e = jt(t.r),
        i = jt(t.g),
        r = jt(t.b),
        a = Yt((.4124564 * e + .3575761 * i + .1804375 * r) / Bi),
        o = Yt((.2126729 * e + .7151522 * i + .072175 * r) / Wi);return new Lt(116 * o - 16, 500 * (a - o), 200 * (o - Yt((.0193339 * e + .119192 * i + .9503041 * r) / Vi)), t.opacity);
  }function Lt(t, n, e, i) {
    this.l = +t, this.a = +n, this.b = +e, this.opacity = +i;
  }function Yt(t) {
    return t > Ki ? Math.pow(t, 1 / 3) : t / Qi + Ji;
  }function qt(t) {
    return t > Gi ? t * t * t : Qi * (t - Ji);
  }function Ot(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
  }function jt(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  }function zt(t) {
    if (t instanceof $t) return new $t(t.h, t.c, t.l, t.opacity);t instanceof Lt || (t = Pt(t));var n = Math.atan2(t.b, t.a) * Xi;return new $t(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
  }function $t(t, n, e, i) {
    this.h = +t, this.c = +n, this.l = +e, this.opacity = +i;
  }function Rt(t) {
    if (t instanceof Zt) return new Zt(t.h, t.s, t.l, t.opacity);t instanceof Et || (t = St(t));var n = t.r / 255,
        e = t.g / 255,
        i = t.b / 255,
        r = (cr * i + ar * n - or * e) / (cr + ar - or),
        a = i - r,
        o = (rr * (e - r) - er * a) / ir,
        c = Math.sqrt(o * o + a * a) / (rr * r * (1 - r)),
        u = c ? Math.atan2(o, a) * Xi - 120 : NaN;return new Zt(u < 0 ? u + 360 : u, c, r, t.opacity);
  }function It(t, n, e, i) {
    return 1 === arguments.length ? Rt(t) : new Zt(t, n, e, null == i ? 1 : i);
  }function Zt(t, n, e, i) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +i;
  }function Xt(t) {
    return function () {
      return t;
    };
  }function Bt(t, n) {
    return function (e) {
      return t + e * n;
    };
  }function Wt(t, n, e) {
    return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (i) {
      return Math.pow(t + i * n, e);
    };
  }function Vt(t) {
    return 1 == (t = +t) ? Jt : function (n, e) {
      return e - n ? Wt(n, e, t) : Xt(isNaN(n) ? e : n);
    };
  }function Jt(t, n) {
    var e = n - t;return e ? Bt(t, e) : Xt(isNaN(t) ? n : t);
  }function Gt(t, n) {
    var e,
        i = n ? n.length : 0,
        r = t ? Math.min(i, t.length) : 0,
        a = new Array(i),
        o = new Array(i);for (e = 0; e < r; ++e) {
      a[e] = an(t[e], n[e]);
    }for (; e < i; ++e) {
      o[e] = n[e];
    }return function (t) {
      for (e = 0; e < r; ++e) {
        o[e] = a[e](t);
      }return o;
    };
  }function Qt(t, n) {
    var e = new Date();return t = +t, n -= t, function (i) {
      return e.setTime(t + n * i), e;
    };
  }function Kt(t, n) {
    return t = +t, n -= t, function (e) {
      return t + n * e;
    };
  }function tn(t, n) {
    var e,
        i = {},
        r = {};null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || (t = {}), null !== n && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) || (n = {});for (e in n) {
      e in t ? i[e] = an(t[e], n[e]) : r[e] = n[e];
    }return function (t) {
      for (e in i) {
        r[e] = i[e](t);
      }return r;
    };
  }function nn(t) {
    return function () {
      return t;
    };
  }function en(t) {
    return function (n) {
      return t(n) + "";
    };
  }function rn(t, n) {
    var e,
        i,
        r,
        a = sr.lastIndex = fr.lastIndex = 0,
        o = -1,
        c = [],
        u = [];for (t += "", n += ""; (e = sr.exec(t)) && (i = fr.exec(n));) {
      (r = i.index) > a && (r = n.slice(a, r), c[o] ? c[o] += r : c[++o] = r), (e = e[0]) === (i = i[0]) ? c[o] ? c[o] += i : c[++o] = i : (c[++o] = null, u.push({ i: o, x: Kt(e, i) })), a = fr.lastIndex;
    }return a < n.length && (r = n.slice(a), c[o] ? c[o] += r : c[++o] = r), c.length < 2 ? u[0] ? en(u[0].x) : nn(n) : (n = u.length, function (t) {
      for (var e, i = 0; i < n; ++i) {
        c[(e = u[i]).i] = e.x(t);
      }return c.join("");
    });
  }function an(t, n) {
    var e,
        i = typeof n === "undefined" ? "undefined" : _typeof(n);return null == n || "boolean" === i ? Xt(n) : ("number" === i ? Kt : "string" === i ? (e = kt(n)) ? (n = e, ur) : rn : n instanceof kt ? ur : n instanceof Date ? Qt : Array.isArray(n) ? Gt : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? tn : Kt)(t, n);
  }function on(t, n) {
    return t = +t, n -= t, function (e) {
      return Math.round(t + n * e);
    };
  }function cn(t) {
    return function n(e) {
      function i(n, i) {
        var r = t((n = It(n)).h, (i = It(i)).h),
            a = Jt(n.s, i.s),
            o = Jt(n.l, i.l),
            c = Jt(n.opacity, i.opacity);return function (t) {
          return n.h = r(t), n.s = a(t), n.l = o(Math.pow(t, e)), n.opacity = c(t), n + "";
        };
      }return e = +e, i.gamma = n, i;
    }(1);
  }function un(t) {
    return function () {
      return t;
    };
  }function sn(t) {
    return +t;
  }function fn(t, n) {
    return (n -= t = +t) ? function (e) {
      return (e - t) / n;
    } : un(n);
  }function hn(t) {
    return function (n, e) {
      var i = t(n = +n, e = +e);return function (t) {
        return t <= n ? 0 : t >= e ? 1 : i(t);
      };
    };
  }function ln(t) {
    return function (n, e) {
      var i = t(n = +n, e = +e);return function (t) {
        return t <= 0 ? n : t >= 1 ? e : i(t);
      };
    };
  }function _n(t, n, e, i) {
    var r = t[0],
        a = t[1],
        o = n[0],
        c = n[1];return a < r ? (r = e(a, r), o = i(c, o)) : (r = e(r, a), o = i(o, c)), function (t) {
      return o(r(t));
    };
  }function dn(t, n, e, i) {
    var r = Math.min(t.length, n.length) - 1,
        a = new Array(r),
        o = new Array(r),
        c = -1;for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++c < r;) {
      a[c] = e(t[c], t[c + 1]), o[c] = i(n[c], n[c + 1]);
    }return function (n) {
      var e = Ni(t, n, 1, r) - 1;return o[e](a[e](n));
    };
  }function pn(t, n) {
    return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp());
  }function bn(t, n) {
    function e() {
      return r = Math.min(c.length, u.length) > 2 ? dn : _n, a = o = null, i;
    }function i(n) {
      return (a || (a = r(c, u, f ? hn(t) : t, s)))(+n);
    }var r,
        a,
        o,
        c = _r,
        u = _r,
        s = an,
        f = !1;return i.invert = function (t) {
      return (o || (o = r(u, c, fn, f ? ln(n) : n)))(+t);
    }, i.domain = function (t) {
      return arguments.length ? (c = Ui.call(t, sn), e()) : c.slice();
    }, i.range = function (t) {
      return arguments.length ? (u = Di.call(t), e()) : u.slice();
    }, i.rangeRound = function (t) {
      return u = Di.call(t), s = on, e();
    }, i.clamp = function (t) {
      return arguments.length ? (f = !!t, e()) : f;
    }, i.interpolate = function (t) {
      return arguments.length ? (s = t, e()) : s;
    }, e();
  }function yn(t) {
    return t;
  }function gn(t, n) {
    if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;var e,
        i = t.slice(0, e);return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(e + 1)];
  }function xn(t) {
    return (t = gn(Math.abs(t))) ? t[1] : NaN;
  }function mn(t, n) {
    return function (e, i) {
      for (var r = e.length, a = [], o = 0, c = t[0], u = 0; r > 0 && c > 0 && (u + c + 1 > i && (c = Math.max(1, i - u)), a.push(e.substring(r -= c, r + c)), !((u += c + 1) > i));) {
        c = t[o = (o + 1) % t.length];
      }return a.reverse().join(n);
    };
  }function vn(t) {
    return function (n) {
      return n.replace(/[0-9]/g, function (n) {
        return t[+n];
      });
    };
  }function wn(t, n) {
    var e = gn(t, n);if (!e) return t + "";var i = e[0],
        r = e[1];return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0");
  }function Mn(t) {
    return new Tn(t);
  }function Tn(t) {
    if (!(n = pr.exec(t))) throw new Error("invalid format: " + t);var n,
        e = n[1] || " ",
        i = n[2] || ">",
        r = n[3] || "-",
        a = n[4] || "",
        o = !!n[5],
        c = n[6] && +n[6],
        u = !!n[7],
        s = n[8] && +n[8].slice(1),
        f = n[9] || "";"n" === f ? (u = !0, f = "g") : dr[f] || (f = ""), (o || "0" === e && "=" === i) && (o = !0, e = "0", i = "="), this.fill = e, this.align = i, this.sign = r, this.symbol = a, this.zero = o, this.width = c, this.comma = u, this.precision = s, this.type = f;
  }function kn(t) {
    function n(t) {
      function n(t) {
        var n,
            i,
            o,
            f = b,
            m = y;if ("c" === p) m = g(t) + m, t = "";else {
          var v = (t = +t) < 0;if (t = g(Math.abs(t), d), v && 0 == +t && (v = !1), f = (v ? "(" === s ? s : "-" : "-" === s || "(" === s ? "" : s) + f, m = m + ("s" === p ? xr[8 + hr / 3] : "") + (v && "(" === s ? ")" : ""), x) for (n = -1, i = t.length; ++n < i;) {
            if (48 > (o = t.charCodeAt(n)) || o > 57) {
              m = (46 === o ? r + t.slice(n + 1) : t.slice(n)) + m, t = t.slice(0, n);break;
            }
          }
        }_ && !h && (t = e(t, 1 / 0));var w = f.length + t.length + m.length,
            M = w < l ? new Array(l - w + 1).join(c) : "";switch (_ && h && (t = e(M + t, M.length ? l - m.length : 1 / 0), M = ""), u) {case "<":
            t = f + t + m + M;break;case "=":
            t = f + M + t + m;break;case "^":
            t = M.slice(0, w = M.length >> 1) + f + t + m + M.slice(w);break;default:
            t = M + f + t + m;}return a(t);
      }var c = (t = Mn(t)).fill,
          u = t.align,
          s = t.sign,
          f = t.symbol,
          h = t.zero,
          l = t.width,
          _ = t.comma,
          d = t.precision,
          p = t.type,
          b = "$" === f ? i[0] : "#" === f && /[boxX]/.test(p) ? "0" + p.toLowerCase() : "",
          y = "$" === f ? i[1] : /[%p]/.test(p) ? o : "",
          g = dr[p],
          x = !p || /[defgprs%]/.test(p);return d = null == d ? p ? 6 : 12 : /[gprs]/.test(p) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d)), n.toString = function () {
        return t + "";
      }, n;
    }var e = t.grouping && t.thousands ? mn(t.grouping, t.thousands) : yn,
        i = t.currency,
        r = t.decimal,
        a = t.numerals ? vn(t.numerals) : yn,
        o = t.percent || "%";return { format: n, formatPrefix: function formatPrefix(t, e) {
        var i = n((t = Mn(t), t.type = "f", t)),
            r = 3 * Math.max(-8, Math.min(8, Math.floor(xn(e) / 3))),
            a = Math.pow(10, -r),
            o = xr[8 + r / 3];return function (t) {
          return i(a * t) + o;
        };
      } };
  }function Nn(t) {
    return Math.max(0, -xn(Math.abs(t)));
  }function Cn(t, n) {
    return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(xn(n) / 3))) - xn(Math.abs(t)));
  }function Sn(t, n) {
    return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, xn(n) - xn(t)) + 1;
  }function An(t, n, e) {
    var i,
        r = t[0],
        a = t[t.length - 1],
        o = vt(r, a, null == n ? 10 : n);switch ((e = Mn(null == e ? ",f" : e)).type) {case "s":
        var c = Math.max(Math.abs(r), Math.abs(a));return null != e.precision || isNaN(i = Cn(o, c)) || (e.precision = i), gr(e, c);case "":case "e":case "g":case "p":case "r":
        null != e.precision || isNaN(i = Sn(o, Math.max(Math.abs(r), Math.abs(a)))) || (e.precision = i - ("e" === e.type));break;case "f":case "%":
        null != e.precision || isNaN(i = Nn(o)) || (e.precision = i - 2 * ("%" === e.type));}return yr(e);
  }function En(t) {
    var n = t.domain;return t.ticks = function (t) {
      var e = n();return xt(e[0], e[e.length - 1], null == t ? 10 : t);
    }, t.tickFormat = function (t, e) {
      return An(n(), t, e);
    }, t.nice = function (e) {
      null == e && (e = 10);var i,
          r = n(),
          a = 0,
          o = r.length - 1,
          c = r[a],
          u = r[o];return u < c && (i = c, c = u, u = i, i = a, a = o, o = i), (i = mt(c, u, e)) > 0 ? i = mt(c = Math.floor(c / i) * i, u = Math.ceil(u / i) * i, e) : i < 0 && (i = mt(c = Math.ceil(c * i) / i, u = Math.floor(u * i) / i, e)), i > 0 ? (r[a] = Math.floor(c / i) * i, r[o] = Math.ceil(u / i) * i, n(r)) : i < 0 && (r[a] = Math.ceil(c * i) / i, r[o] = Math.floor(u * i) / i, n(r)), t;
    }, t;
  }function Un() {
    var t = bn(fn, Kt);return t.copy = function () {
      return pn(t, Un());
    }, En(t);
  }function Dn(t, n, e, i) {
    function r(n) {
      return t(n = new Date(+n)), n;
    }return r.floor = r, r.ceil = function (e) {
      return t(e = new Date(e - 1)), n(e, 1), t(e), e;
    }, r.round = function (t) {
      var n = r(t),
          e = r.ceil(t);return t - n < e - t ? n : e;
    }, r.offset = function (t, e) {
      return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t;
    }, r.range = function (e, i, a) {
      var o = [];if (e = r.ceil(e), a = null == a ? 1 : Math.floor(a), !(e < i && a > 0)) return o;do {
        o.push(new Date(+e));
      } while ((n(e, a), t(e), e < i));return o;
    }, r.filter = function (e) {
      return Dn(function (n) {
        if (n >= n) for (; t(n), !e(n);) {
          n.setTime(n - 1);
        }
      }, function (t, i) {
        if (t >= t) if (i < 0) for (; ++i <= 0;) {
          for (; n(t, -1), !e(t);) {}
        } else for (; --i >= 0;) {
          for (; n(t, 1), !e(t);) {}
        }
      });
    }, e && (r.count = function (n, i) {
      return mr.setTime(+n), vr.setTime(+i), t(mr), t(vr), Math.floor(e(mr, vr));
    }, r.every = function (t) {
      return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? r.filter(i ? function (n) {
        return i(n) % t == 0;
      } : function (n) {
        return r.count(0, n) % t == 0;
      }) : r : null;
    }), r;
  }function Fn(t) {
    return Dn(function (n) {
      n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setDate(t.getDate() + 7 * n);
    }, function (t, n) {
      return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Mr) / Tr;
    });
  }function Hn(t) {
    return Dn(function (n) {
      n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setUTCDate(t.getUTCDate() + 7 * n);
    }, function (t, n) {
      return (n - t) / Tr;
    });
  }function Pn(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);return n.setFullYear(t.y), n;
    }return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
  }function Ln(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));return n.setUTCFullYear(t.y), n;
    }return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
  }function Yn(t) {
    return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
  }function qn(t) {
    function n(t, n) {
      return function (e) {
        var i,
            r,
            a,
            o = [],
            c = -1,
            u = 0,
            s = t.length;for (e instanceof Date || (e = new Date(+e)); ++c < s;) {
          37 === t.charCodeAt(c) && (o.push(t.slice(u, c)), null != (r = qr[i = t.charAt(++c)]) ? i = t.charAt(++c) : r = "e" === i ? " " : "0", (a = n[i]) && (i = a(e, r)), o.push(i), u = c + 1);
        }return o.push(t.slice(u, c)), o.join("");
      };
    }function e(t, n) {
      return function (e) {
        var r = Yn(1900);if (i(r, t, e += "", 0) != e.length) return null;if ("p" in r && (r.H = r.H % 12 + 12 * r.p), "W" in r || "U" in r) {
          "w" in r || (r.w = "W" in r ? 1 : 0);var a = "Z" in r ? Ln(Yn(r.y)).getUTCDay() : n(Yn(r.y)).getDay();r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + 7 * r.W - (a + 5) % 7 : r.w + 7 * r.U - (a + 6) % 7;
        }return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, Ln(r)) : n(r);
      };
    }function i(t, n, e, i) {
      for (var r, a, o = 0, c = n.length, u = e.length; o < c;) {
        if (i >= u) return -1;if (37 === (r = n.charCodeAt(o++))) {
          if (r = n.charAt(o++), !(a = T[r in qr ? n.charAt(o++) : r]) || (i = a(t, e, i)) < 0) return -1;
        } else if (r != e.charCodeAt(i++)) return -1;
      }return i;
    }var r = t.dateTime,
        a = t.date,
        o = t.time,
        c = t.periods,
        u = t.days,
        s = t.shortDays,
        f = t.months,
        h = t.shortMonths,
        l = zn(c),
        _ = $n(c),
        d = zn(u),
        p = $n(u),
        b = zn(s),
        y = $n(s),
        g = zn(f),
        x = $n(f),
        m = zn(h),
        v = $n(h),
        w = { a: function a(t) {
        return s[t.getDay()];
      }, A: function A(t) {
        return u[t.getDay()];
      }, b: function b(t) {
        return h[t.getMonth()];
      }, B: function B(t) {
        return f[t.getMonth()];
      }, c: null, d: ie, e: ie, H: re, I: ae, j: oe, L: ce, m: ue, M: se, p: function p(t) {
        return c[+(t.getHours() >= 12)];
      }, S: fe, U: he, w: le, W: _e, x: null, X: null, y: de, Y: pe, Z: be, "%": Ue },
        M = { a: function a(t) {
        return s[t.getUTCDay()];
      }, A: function A(t) {
        return u[t.getUTCDay()];
      }, b: function b(t) {
        return h[t.getUTCMonth()];
      }, B: function B(t) {
        return f[t.getUTCMonth()];
      }, c: null, d: ye, e: ye, H: ge, I: xe, j: me, L: ve, m: we, M: Me, p: function p(t) {
        return c[+(t.getUTCHours() >= 12)];
      }, S: Te, U: ke, w: Ne, W: Ce, x: null, X: null, y: Se, Y: Ae, Z: Ee, "%": Ue },
        T = { a: function a(t, n, e) {
        var i = b.exec(n.slice(e));return i ? (t.w = y[i[0].toLowerCase()], e + i[0].length) : -1;
      }, A: function A(t, n, e) {
        var i = d.exec(n.slice(e));return i ? (t.w = p[i[0].toLowerCase()], e + i[0].length) : -1;
      }, b: function b(t, n, e) {
        var i = m.exec(n.slice(e));return i ? (t.m = v[i[0].toLowerCase()], e + i[0].length) : -1;
      }, B: function B(t, n, e) {
        var i = g.exec(n.slice(e));return i ? (t.m = x[i[0].toLowerCase()], e + i[0].length) : -1;
      }, c: function c(t, n, e) {
        return i(t, r, n, e);
      }, d: Jn, e: Jn, H: Qn, I: Qn, j: Gn, L: ne, m: Vn, M: Kn, p: function p(t, n, e) {
        var i = l.exec(n.slice(e));return i ? (t.p = _[i[0].toLowerCase()], e + i[0].length) : -1;
      }, S: te, U: In, w: Rn, W: Zn, x: function x(t, n, e) {
        return i(t, a, n, e);
      }, X: function X(t, n, e) {
        return i(t, o, n, e);
      }, y: Bn, Y: Xn, Z: Wn, "%": ee };return w.x = n(a, w), w.X = n(o, w), w.c = n(r, w), M.x = n(a, M), M.X = n(o, M), M.c = n(r, M), { format: function format(t) {
        var e = n(t += "", w);return e.toString = function () {
          return t;
        }, e;
      }, parse: function parse(t) {
        var n = e(t += "", Pn);return n.toString = function () {
          return t;
        }, n;
      }, utcFormat: function utcFormat(t) {
        var e = n(t += "", M);return e.toString = function () {
          return t;
        }, e;
      }, utcParse: function utcParse(t) {
        var n = e(t, Ln);return n.toString = function () {
          return t;
        }, n;
      } };
  }function On(t, n, e) {
    var i = t < 0 ? "-" : "",
        r = (i ? -t : t) + "",
        a = r.length;return i + (a < e ? new Array(e - a + 1).join(n) + r : r);
  }function jn(t) {
    return t.replace(zr, "\\$&");
  }function zn(t) {
    return new RegExp("^(?:" + t.map(jn).join("|") + ")", "i");
  }function $n(t) {
    for (var n = {}, e = -1, i = t.length; ++e < i;) {
      n[t[e].toLowerCase()] = e;
    }return n;
  }function Rn(t, n, e) {
    var i = Or.exec(n.slice(e, e + 1));return i ? (t.w = +i[0], e + i[0].length) : -1;
  }function In(t, n, e) {
    var i = Or.exec(n.slice(e));return i ? (t.U = +i[0], e + i[0].length) : -1;
  }function Zn(t, n, e) {
    var i = Or.exec(n.slice(e));return i ? (t.W = +i[0], e + i[0].length) : -1;
  }function Xn(t, n, e) {
    var i = Or.exec(n.slice(e, e + 4));return i ? (t.y = +i[0], e + i[0].length) : -1;
  }function Bn(t, n, e) {
    var i = Or.exec(n.slice(e, e + 2));return i ? (t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3), e + i[0].length) : -1;
  }function Wn(t, n, e) {
    var i = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e, e + 6));return i ? (t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00")), e + i[0].length) : -1;
  }function Vn(t, n, e) {
    var i = Or.exec(n.slice(e, e + 2));return i ? (t.m = i[0] - 1, e + i[0].length) : -1;
  }function Jn(t, n, e) {
    var i = Or.exec(n.slice(e, e + 2));return i ? (t.d = +i[0], e + i[0].length) : -1;
  }function Gn(t, n, e) {
    var i = Or.exec(n.slice(e, e + 3));return i ? (t.m = 0, t.d = +i[0], e + i[0].length) : -1;
  }function Qn(t, n, e) {
    var i = Or.exec(n.slice(e, e + 2));return i ? (t.H = +i[0], e + i[0].length) : -1;
  }function Kn(t, n, e) {
    var i = Or.exec(n.slice(e, e + 2));return i ? (t.M = +i[0], e + i[0].length) : -1;
  }function te(t, n, e) {
    var i = Or.exec(n.slice(e, e + 2));return i ? (t.S = +i[0], e + i[0].length) : -1;
  }function ne(t, n, e) {
    var i = Or.exec(n.slice(e, e + 3));return i ? (t.L = +i[0], e + i[0].length) : -1;
  }function ee(t, n, e) {
    var i = jr.exec(n.slice(e, e + 1));return i ? e + i[0].length : -1;
  }function ie(t, n) {
    return On(t.getDate(), n, 2);
  }function re(t, n) {
    return On(t.getHours(), n, 2);
  }function ae(t, n) {
    return On(t.getHours() % 12 || 12, n, 2);
  }function oe(t, n) {
    return On(1 + kr.count(Sr(t), t), n, 3);
  }function ce(t, n) {
    return On(t.getMilliseconds(), n, 3);
  }function ue(t, n) {
    return On(t.getMonth() + 1, n, 2);
  }function se(t, n) {
    return On(t.getMinutes(), n, 2);
  }function fe(t, n) {
    return On(t.getSeconds(), n, 2);
  }function he(t, n) {
    return On(Nr.count(Sr(t), t), n, 2);
  }function le(t) {
    return t.getDay();
  }function _e(t, n) {
    return On(Cr.count(Sr(t), t), n, 2);
  }function de(t, n) {
    return On(t.getFullYear() % 100, n, 2);
  }function pe(t, n) {
    return On(t.getFullYear() % 1e4, n, 4);
  }function be(t) {
    var n = t.getTimezoneOffset();return (n > 0 ? "-" : (n *= -1, "+")) + On(n / 60 | 0, "0", 2) + On(n % 60, "0", 2);
  }function ye(t, n) {
    return On(t.getUTCDate(), n, 2);
  }function ge(t, n) {
    return On(t.getUTCHours(), n, 2);
  }function xe(t, n) {
    return On(t.getUTCHours() % 12 || 12, n, 2);
  }function me(t, n) {
    return On(1 + Ar.count(Dr(t), t), n, 3);
  }function ve(t, n) {
    return On(t.getUTCMilliseconds(), n, 3);
  }function we(t, n) {
    return On(t.getUTCMonth() + 1, n, 2);
  }function Me(t, n) {
    return On(t.getUTCMinutes(), n, 2);
  }function Te(t, n) {
    return On(t.getUTCSeconds(), n, 2);
  }function ke(t, n) {
    return On(Er.count(Dr(t), t), n, 2);
  }function Ne(t) {
    return t.getUTCDay();
  }function Ce(t, n) {
    return On(Ur.count(Dr(t), t), n, 2);
  }function Se(t, n) {
    return On(t.getUTCFullYear() % 100, n, 2);
  }function Ae(t, n) {
    return On(t.getUTCFullYear() % 1e4, n, 4);
  }function Ee() {
    return "+0000";
  }function Ue() {
    return "%";
  }function De(t) {
    return t.match(/.{6}/g).map(function (t) {
      return "#" + t;
    });
  }function Fe(t) {
    var n = t.length;return function (e) {
      return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
    };
  }function He() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
  }function Pe() {
    return new He();
  }function Le(t) {
    return function () {
      return t;
    };
  }function Ye(t) {
    this._context = t;
  }function qe(t) {
    return new Ye(t);
  }function Oe(t) {
    return t[0];
  }function je(t) {
    return t[1];
  }function ze() {}function $e(t, n, e) {
    t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6);
  }function Re(t) {
    this._context = t;
  }function Ie(t, n) {
    this._basis = new Re(t), this._beta = n;
  }function Ze(t, n, e) {
    t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2);
  }function Xe(t, n) {
    this._context = t, this._k = (1 - n) / 6;
  }function Be(t, n) {
    this._context = t, this._k = (1 - n) / 6;
  }function We(t, n) {
    this._context = t, this._k = (1 - n) / 6;
  }function Ve(t, n, e) {
    var i = t._x1,
        r = t._y1,
        a = t._x2,
        o = t._y2;if (t._l01_a > Zr) {
      var c = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
          u = 3 * t._l01_a * (t._l01_a + t._l12_a);i = (i * c - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / u, r = (r * c - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / u;
    }if (t._l23_a > Zr) {
      var s = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
          f = 3 * t._l23_a * (t._l23_a + t._l12_a);a = (a * s + t._x1 * t._l23_2a - n * t._l12_2a) / f, o = (o * s + t._y1 * t._l23_2a - e * t._l12_2a) / f;
    }t._context.bezierCurveTo(i, r, a, o, t._x2, t._y2);
  }function Je(t, n) {
    this._context = t, this._alpha = n;
  }function Ge(t, n) {
    this._context = t, this._alpha = n;
  }function Qe(t, n) {
    this._context = t, this._alpha = n;
  }function Ke(t) {
    return t < 0 ? -1 : 1;
  }function ti(t, n, e) {
    var i = t._x1 - t._x0,
        r = n - t._x1,
        a = (t._y1 - t._y0) / (i || r < 0 && -0),
        o = (e - t._y1) / (r || i < 0 && -0),
        c = (a * r + o * i) / (i + r);return (Ke(a) + Ke(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(c)) || 0;
  }function ni(t, n) {
    var e = t._x1 - t._x0;return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n;
  }function ei(t, n, e) {
    var i = t._x0,
        r = t._y0,
        a = t._x1,
        o = t._y1,
        c = (a - i) / 3;t._context.bezierCurveTo(i + c, r + c * n, a - c, o - c * e, a, o);
  }function ii(t) {
    this._context = t;
  }function ri(t) {
    this._context = t;
  }function ai(t) {
    return t;
  }function oi(t) {
    return "translate(" + (t + .5) + ",0)";
  }function ci(t) {
    return "translate(0," + (t + .5) + ")";
  }function ui(t) {
    return function (n) {
      return +t(n);
    };
  }function si(t) {
    var n = Math.max(0, t.bandwidth() - 1) / 2;return t.round() && (n = Math.round(n)), function (e) {
      return +t(e) + n;
    };
  }function fi() {
    return !this.__axis;
  }function hi(t, n) {
    function e(e) {
      var l = null == r ? n.ticks ? n.ticks.apply(n, i) : n.domain() : r,
          _ = null == a ? n.tickFormat ? n.tickFormat.apply(n, i) : ai : a,
          d = Math.max(o, 0) + u,
          p = n.range(),
          b = +p[0] + .5,
          y = +p[p.length - 1] + .5,
          g = (n.bandwidth ? si : ui)(n.copy()),
          x = e.selection ? e.selection() : e,
          m = x.selectAll(".domain").data([null]),
          v = x.selectAll(".tick").data(l, n).order(),
          w = v.exit(),
          M = v.enter().append("g").attr("class", "tick"),
          T = v.select("line"),
          k = v.select("text");m = m.merge(m.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), v = v.merge(M), T = T.merge(M.append("line").attr("stroke", "#000").attr(f + "2", s * o)), k = k.merge(M.append("text").attr("fill", "#000").attr(f, s * d).attr("dy", t === Br ? "0em" : t === Vr ? "0.71em" : "0.32em")), e !== x && (m = m.transition(e), v = v.transition(e), T = T.transition(e), k = k.transition(e), w = w.transition(e).attr("opacity", Gr).attr("transform", function (t) {
        return isFinite(t = g(t)) ? h(t) : this.getAttribute("transform");
      }), M.attr("opacity", Gr).attr("transform", function (t) {
        var n = this.parentNode.__axis;return h(n && isFinite(n = n(t)) ? n : g(t));
      })), w.remove(), m.attr("d", t === Jr || t == Wr ? "M" + s * c + "," + b + "H0.5V" + y + "H" + s * c : "M" + b + "," + s * c + "V0.5H" + y + "V" + s * c), v.attr("opacity", 1).attr("transform", function (t) {
        return h(g(t));
      }), T.attr(f + "2", s * o), k.attr(f, s * d).text(_), x.filter(fi).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Wr ? "start" : t === Jr ? "end" : "middle"), x.each(function () {
        this.__axis = g;
      });
    }var i = [],
        r = null,
        a = null,
        o = 6,
        c = 6,
        u = 3,
        s = t === Br || t === Jr ? -1 : 1,
        f = t === Jr || t === Wr ? "x" : "y",
        h = t === Br || t === Vr ? oi : ci;return e.scale = function (t) {
      return arguments.length ? (n = t, e) : n;
    }, e.ticks = function () {
      return i = Xr.call(arguments), e;
    }, e.tickArguments = function (t) {
      return arguments.length ? (i = null == t ? [] : Xr.call(t), e) : i.slice();
    }, e.tickValues = function (t) {
      return arguments.length ? (r = null == t ? null : Xr.call(t), e) : r && r.slice();
    }, e.tickFormat = function (t) {
      return arguments.length ? (a = t, e) : a;
    }, e.tickSize = function (t) {
      return arguments.length ? (o = c = +t, e) : o;
    }, e.tickSizeInner = function (t) {
      return arguments.length ? (o = +t, e) : o;
    }, e.tickSizeOuter = function (t) {
      return arguments.length ? (c = +t, e) : c;
    }, e.tickPadding = function (t) {
      return arguments.length ? (u = +t, e) : u;
    }, e;
  }var li = "http://www.w3.org/1999/xhtml",
      _i = { svg: "http://www.w3.org/2000/svg", xhtml: li, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
      di = function di(t) {
    return function () {
      return this.matches(t);
    };
  };if ("undefined" != typeof document) {
    var pi = document.documentElement;if (!pi.matches) {
      var bi = pi.webkitMatchesSelector || pi.msMatchesSelector || pi.mozMatchesSelector || pi.oMatchesSelector;di = function di(t) {
        return function () {
          return bi.call(this, t);
        };
      };
    }
  }var yi = di,
      gi = {},
      xi = null;"undefined" != typeof document && ("onmouseenter" in document.documentElement || (gi = { mouseenter: "mouseover", mouseleave: "mouseout" })), S.prototype = { add: function add(t) {
      this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
    }, remove: function remove(t) {
      var n = this._names.indexOf(t);n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
    }, contains: function contains(t) {
      return this._names.indexOf(t) >= 0;
    } }, V.prototype = { constructor: V, appendChild: function appendChild(t) {
      return this._parent.insertBefore(t, this._next);
    }, insertBefore: function insertBefore(t, n) {
      return this._parent.insertBefore(t, n);
    }, querySelector: function querySelector(t) {
      return this._parent.querySelector(t);
    }, querySelectorAll: function querySelectorAll(t) {
      return this._parent.querySelectorAll(t);
    } };var mi = "$",
      vi = [null];nt.prototype = function () {
    return new nt([[document.documentElement]], vi);
  }.prototype = { constructor: nt, select: function select(t) {
      "function" != typeof t && (t = b(t));for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r) {
        for (var a, o, c = n[r], u = c.length, s = i[r] = new Array(u), f = 0; f < u; ++f) {
          (a = c[f]) && (o = t.call(a, a.__data__, f, c)) && ("__data__" in a && (o.__data__ = a.__data__), s[f] = o);
        }
      }return new nt(i, this._parents);
    }, selectAll: function selectAll(t) {
      "function" != typeof t && (t = tt(t));for (var n = this._groups, e = n.length, i = [], r = [], a = 0; a < e; ++a) {
        for (var o, c = n[a], u = c.length, s = 0; s < u; ++s) {
          (o = c[s]) && (i.push(t.call(o, o.__data__, s, c)), r.push(o));
        }
      }return new nt(i, r);
    }, filter: function filter(t) {
      "function" != typeof t && (t = yi(t));for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r) {
        for (var a, o = n[r], c = o.length, u = i[r] = [], s = 0; s < c; ++s) {
          (a = o[s]) && t.call(a, a.__data__, s, o) && u.push(a);
        }
      }return new nt(i, this._parents);
    }, data: function data(t, n) {
      if (!t) return _ = new Array(this.size()), s = -1, this.each(function (t) {
        _[++s] = t;
      }), _;var e = n ? Q : G,
          i = this._parents,
          r = this._groups;"function" != typeof t && (t = J(t));for (var a = r.length, o = new Array(a), c = new Array(a), u = new Array(a), s = 0; s < a; ++s) {
        var f = i[s],
            h = r[s],
            l = h.length,
            _ = t.call(f, f && f.__data__, s, i),
            d = _.length,
            p = c[s] = new Array(d),
            b = o[s] = new Array(d);e(f, h, p, b, u[s] = new Array(l), _, n);for (var y, g, x = 0, m = 0; x < d; ++x) {
          if (y = p[x]) {
            for (x >= m && (m = x + 1); !(g = b[m]) && ++m < d;) {}y._next = g || null;
          }
        }
      }return o = new nt(o, i), o._enter = c, o._exit = u, o;
    }, enter: function enter() {
      return new nt(this._enter || this._groups.map(W), this._parents);
    }, exit: function exit() {
      return new nt(this._exit || this._groups.map(W), this._parents);
    }, merge: function merge(t) {
      for (var n = this._groups, e = t._groups, i = n.length, r = e.length, a = Math.min(i, r), o = new Array(i), c = 0; c < a; ++c) {
        for (var u, s = n[c], f = e[c], h = s.length, l = o[c] = new Array(h), _ = 0; _ < h; ++_) {
          (u = s[_] || f[_]) && (l[_] = u);
        }
      }for (; c < i; ++c) {
        o[c] = n[c];
      }return new nt(o, this._parents);
    }, order: function order() {
      for (var t = this._groups, n = -1, e = t.length; ++n < e;) {
        for (var i, r = t[n], a = r.length - 1, o = r[a]; --a >= 0;) {
          (i = r[a]) && (o && o !== i.nextSibling && o.parentNode.insertBefore(i, o), o = i);
        }
      }return this;
    }, sort: function sort(t) {
      t || (t = B);for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r) {
        for (var a, o = n[r], c = o.length, u = i[r] = new Array(c), s = 0; s < c; ++s) {
          (a = o[s]) && (u[s] = a);
        }u.sort(function (n, e) {
          return n && e ? t(n.__data__, e.__data__) : !n - !e;
        });
      }return new nt(i, this._parents).order();
    }, call: function call() {
      var t = arguments[0];return arguments[0] = this, t.apply(null, arguments), this;
    }, nodes: function nodes() {
      var t = new Array(this.size()),
          n = -1;return this.each(function () {
        t[++n] = this;
      }), t;
    }, node: function node() {
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n) {
        for (var i = t[n], r = 0, a = i.length; r < a; ++r) {
          var o = i[r];if (o) return o;
        }
      }return null;
    }, size: function size() {
      var t = 0;return this.each(function () {
        ++t;
      }), t;
    }, empty: function empty() {
      return !this.node();
    }, each: function each(t) {
      for (var n = this._groups, e = 0, i = n.length; e < i; ++e) {
        for (var r, a = n[e], o = 0, c = a.length; o < c; ++o) {
          (r = a[o]) && t.call(r, r.__data__, o, a);
        }
      }return this;
    }, attr: function attr(t, e) {
      var i = n(t);if (arguments.length < 2) {
        var r = this.node();return i.local ? r.getAttributeNS(i.space, i.local) : r.getAttribute(i);
      }return this.each((null == e ? i.local ? $ : z : "function" == typeof e ? i.local ? X : Z : i.local ? I : R)(i, e));
    }, style: function style(t, n, e) {
      return arguments.length > 1 ? this.each((null == n ? Y : "function" == typeof n ? O : q)(t, n, null == e ? "" : e)) : j(this.node(), t);
    }, property: function property(t, n) {
      return arguments.length > 1 ? this.each((null == n ? H : "function" == typeof n ? L : P)(t, n)) : this.node()[t];
    }, classed: function classed(t, n) {
      var e = N(t + "");if (arguments.length < 2) {
        for (var i = C(this.node()), r = -1, a = e.length; ++r < a;) {
          if (!i.contains(e[r])) return !1;
        }return !0;
      }return this.each(("function" == typeof n ? F : n ? U : D)(e, n));
    }, text: function text(t) {
      return arguments.length ? this.each(null == t ? M : ("function" == typeof t ? k : T)(t)) : this.node().textContent;
    }, html: function html(t) {
      return arguments.length ? this.each(null == t ? m : ("function" == typeof t ? w : v)(t)) : this.node().innerHTML;
    }, raise: function raise() {
      return this.each(x);
    }, lower: function lower() {
      return this.each(g);
    }, append: function append(t) {
      var n = "function" == typeof t ? t : r(t);return this.select(function () {
        return this.appendChild(n.apply(this, arguments));
      });
    }, insert: function insert(t, n) {
      var e = "function" == typeof t ? t : r(t),
          i = null == n ? y : "function" == typeof n ? n : b(n);return this.select(function () {
        return this.insertBefore(e.apply(this, arguments), i.apply(this, arguments) || null);
      });
    }, remove: function remove() {
      return this.each(d);
    }, datum: function datum(t) {
      return arguments.length ? this.property("__data__", t) : this.node().__data__;
    }, on: function on(t, n, e) {
      var i,
          r,
          a = c(t + ""),
          o = a.length;{
        if (!(arguments.length < 2)) {
          for (f = n ? s : u, null == e && (e = !1), i = 0; i < o; ++i) {
            this.each(f(a[i], n, e));
          }return this;
        }var f = this.node().__on;if (f) for (var h, l = 0, _ = f.length; l < _; ++l) {
          for (i = 0, h = f[l]; i < o; ++i) {
            if ((r = a[i]).type === h.type && r.name === h.name) return h.value;
          }
        }
      }
    }, dispatch: function dispatch(t, n) {
      return this.each(("function" == typeof n ? _ : l)(t, n));
    } };et.prototype = it.prototype = { constructor: et, has: function has(t) {
      return "$" + t in this;
    }, get: function get(t) {
      return this["$" + t];
    }, set: function set(t, n) {
      return this["$" + t] = n, this;
    }, remove: function remove(t) {
      var n = "$" + t;return n in this && delete this[n];
    }, clear: function clear() {
      for (var t in this) {
        "$" === t[0] && delete this[t];
      }
    }, keys: function keys() {
      var t = [];for (var n in this) {
        "$" === n[0] && t.push(n.slice(1));
      }return t;
    }, values: function values() {
      var t = [];for (var n in this) {
        "$" === n[0] && t.push(this[n]);
      }return t;
    }, entries: function entries() {
      var t = [];for (var n in this) {
        "$" === n[0] && t.push({ key: n.slice(1), value: this[n] });
      }return t;
    }, size: function size() {
      var t = 0;for (var n in this) {
        "$" === n[0] && ++t;
      }return t;
    }, empty: function empty() {
      for (var t in this) {
        if ("$" === t[0]) return !1;
      }return !0;
    }, each: function each(t) {
      for (var n in this) {
        "$" === n[0] && t(this[n], n.slice(1), this);
      }
    } };it.prototype;var wi = { value: function value() {} };at.prototype = rt.prototype = { constructor: at, on: function on(t, n) {
      var e,
          i = this._,
          r = ot(t + "", i),
          a = -1,
          o = r.length;{
        if (!(arguments.length < 2)) {
          if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);for (; ++a < o;) {
            if (e = (t = r[a]).type) i[e] = ut(i[e], t.name, n);else if (null == n) for (e in i) {
              i[e] = ut(i[e], t.name, null);
            }
          }return this;
        }for (; ++a < o;) {
          if ((e = (t = r[a]).type) && (e = ct(i[e], t.name))) return e;
        }
      }
    }, copy: function copy() {
      var t = {},
          n = this._;for (var e in n) {
        t[e] = n[e].slice();
      }return new at(t);
    }, call: function call(t, n) {
      if ((e = arguments.length - 2) > 0) for (var e, i, r = new Array(e), a = 0; a < e; ++a) {
        r[a] = arguments[a + 2];
      }if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (a = 0, e = (i = this._[t]).length; a < e; ++a) {
        i[a].value.apply(n, r);
      }
    }, apply: function apply(t, n, e) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (var i = this._[t], r = 0, a = i.length; r < a; ++r) {
        i[r].value.apply(n, e);
      }
    } };var Mi = function (t, n) {
    return function (e, i) {
      var r = st(e).mimeType(t).response(n);if (null != i) {
        if ("function" != typeof i) throw new Error("invalid callback: " + i);return r.get(i);
      }return r;
    };
  }("text/plain", function (t) {
    return t.responseText;
  }),
      Ti = pt(",").parse,
      ki = (pt("\t"), function (t, n) {
    return function (e, i, r) {
      arguments.length < 3 && (r = i, i = null);var a = st(e).mimeType(t);return a.row = function (t) {
        return arguments.length ? a.response(bt(n, i = t)) : i;
      }, a.row(i), r ? a.get(r) : a;
    };
  }("text/csv", Ti)),
      Ni = function (t) {
    return 1 === t.length && (t = gt(t)), { left: function left(n, e, i, r) {
        for (null == i && (i = 0), null == r && (r = n.length); i < r;) {
          var a = i + r >>> 1;t(n[a], e) < 0 ? i = a + 1 : r = a;
        }return i;
      }, right: function right(n, e, i, r) {
        for (null == i && (i = 0), null == r && (r = n.length); i < r;) {
          var a = i + r >>> 1;t(n[a], e) > 0 ? r = a : i = a + 1;
        }return i;
      } };
  }(yt).right,
      Ci = Math.sqrt(50),
      Si = Math.sqrt(10),
      Ai = Math.sqrt(2),
      Ei = Array.prototype,
      Ui = Ei.map,
      Di = Ei.slice,
      Fi = "\\s*([+-]?\\d+)\\s*",
      Hi = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      Pi = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      Li = /^#([0-9a-f]{3})$/,
      Yi = /^#([0-9a-f]{6})$/,
      qi = new RegExp("^rgb\\(" + [Fi, Fi, Fi] + "\\)$"),
      Oi = new RegExp("^rgb\\(" + [Pi, Pi, Pi] + "\\)$"),
      ji = new RegExp("^rgba\\(" + [Fi, Fi, Fi, Hi] + "\\)$"),
      zi = new RegExp("^rgba\\(" + [Pi, Pi, Pi, Hi] + "\\)$"),
      $i = new RegExp("^hsl\\(" + [Hi, Pi, Pi] + "\\)$"),
      Ri = new RegExp("^hsla\\(" + [Hi, Pi, Pi, Hi] + "\\)$"),
      Ii = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };wt(Tt, kt, { displayable: function displayable() {
      return this.rgb().displayable();
    }, toString: function toString() {
      return this.rgb() + "";
    } }), wt(Et, At, Mt(Tt, { brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Et(this.r * t, this.g * t, this.b * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new Et(this.r * t, this.g * t, this.b * t, this.opacity);
    }, rgb: function rgb() {
      return this;
    }, displayable: function displayable() {
      return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
    }, toString: function toString() {
      var t = this.opacity;return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")");
    } })), wt(Ft, function (t, n, e, i) {
    return 1 === arguments.length ? Dt(t) : new Ft(t, n, e, null == i ? 1 : i);
  }, Mt(Tt, { brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Ft(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new Ft(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = this.h % 360 + 360 * (this.h < 0),
          n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          e = this.l,
          i = e + (e < .5 ? e : 1 - e) * n,
          r = 2 * e - i;return new Et(Ht(t >= 240 ? t - 240 : t + 120, r, i), Ht(t, r, i), Ht(t < 120 ? t + 240 : t - 120, r, i), this.opacity);
    }, displayable: function displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    } }));var Zi = Math.PI / 180,
      Xi = 180 / Math.PI,
      Bi = .95047,
      Wi = 1,
      Vi = 1.08883,
      Ji = 4 / 29,
      Gi = 6 / 29,
      Qi = 3 * Gi * Gi,
      Ki = Gi * Gi * Gi;wt(Lt, function (t, n, e, i) {
    return 1 === arguments.length ? Pt(t) : new Lt(t, n, e, null == i ? 1 : i);
  }, Mt(Tt, { brighter: function brighter(t) {
      return new Lt(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, darker: function darker(t) {
      return new Lt(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, rgb: function rgb() {
      var t = (this.l + 16) / 116,
          n = isNaN(this.a) ? t : t + this.a / 500,
          e = isNaN(this.b) ? t : t - this.b / 200;return t = Wi * qt(t), n = Bi * qt(n), e = Vi * qt(e), new Et(Ot(3.2404542 * n - 1.5371385 * t - .4985314 * e), Ot(-.969266 * n + 1.8760108 * t + .041556 * e), Ot(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity);
    } })), wt($t, function (t, n, e, i) {
    return 1 === arguments.length ? zt(t) : new $t(t, n, e, null == i ? 1 : i);
  }, Mt(Tt, { brighter: function brighter(t) {
      return new $t(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
    }, darker: function darker(t) {
      return new $t(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
    }, rgb: function rgb() {
      return Pt(this).rgb();
    } }));var tr = -.14861,
      nr = 1.78277,
      er = -.29227,
      ir = -.90649,
      rr = 1.97294,
      ar = rr * ir,
      or = rr * nr,
      cr = nr * er - ir * tr;wt(Zt, It, Mt(Tt, { brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Zt(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new Zt(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * Zi,
          n = +this.l,
          e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
          i = Math.cos(t),
          r = Math.sin(t);return new Et(255 * (n + e * (tr * i + nr * r)), 255 * (n + e * (er * i + ir * r)), 255 * (n + e * (rr * i)), this.opacity);
    } }));var ur = function t(n) {
    function e(t, n) {
      var e = i((t = At(t)).r, (n = At(n)).r),
          r = i(t.g, n.g),
          a = i(t.b, n.b),
          o = Jt(t.opacity, n.opacity);return function (n) {
        return t.r = e(n), t.g = r(n), t.b = a(n), t.opacity = o(n), t + "";
      };
    }var i = Vt(n);return e.gamma = t, e;
  }(1),
      sr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      fr = new RegExp(sr.source, "g");cn(function (t, n) {
    var e = n - t;return e ? Bt(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Xt(isNaN(t) ? n : t);
  });var hr,
      lr = cn(Jt),
      _r = [0, 1],
      dr = { "": function _(t, n) {
      t: for (var e, i = (t = t.toPrecision(n)).length, r = 1, a = -1; r < i; ++r) {
        switch (t[r]) {case ".":
            a = e = r;break;case "0":
            0 === a && (a = r), e = r;break;case "e":
            break t;default:
            a > 0 && (a = 0);}
      }return a > 0 ? t.slice(0, a) + t.slice(e + 1) : t;
    }, "%": function _(t, n) {
      return (100 * t).toFixed(n);
    }, b: function b(t) {
      return Math.round(t).toString(2);
    }, c: function c(t) {
      return t + "";
    }, d: function d(t) {
      return Math.round(t).toString(10);
    }, e: function e(t, n) {
      return t.toExponential(n);
    }, f: function f(t, n) {
      return t.toFixed(n);
    }, g: function g(t, n) {
      return t.toPrecision(n);
    }, o: function o(t) {
      return Math.round(t).toString(8);
    }, p: function p(t, n) {
      return wn(100 * t, n);
    }, r: wn, s: function s(t, n) {
      var e = gn(t, n);if (!e) return t + "";var i = e[0],
          r = e[1],
          a = r - (hr = 3 * Math.max(-8, Math.min(8, Math.floor(r / 3)))) + 1,
          o = i.length;return a === o ? i : a > o ? i + new Array(a - o + 1).join("0") : a > 0 ? i.slice(0, a) + "." + i.slice(a) : "0." + new Array(1 - a).join("0") + gn(t, Math.max(0, n + a - 1))[0];
    }, X: function X(t) {
      return Math.round(t).toString(16).toUpperCase();
    }, x: function x(t) {
      return Math.round(t).toString(16);
    } },
      pr = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;Mn.prototype = Tn.prototype, Tn.prototype.toString = function () {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type;
  };var br,
      yr,
      gr,
      xr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];!function (t) {
    br = kn(t), yr = br.format, gr = br.formatPrefix;
  }({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""] });var mr = new Date(),
      vr = new Date(),
      wr = Dn(function () {}, function (t, n) {
    t.setTime(+t + n);
  }, function (t, n) {
    return n - t;
  });wr.every = function (t) {
    return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Dn(function (n) {
      n.setTime(Math.floor(n / t) * t);
    }, function (n, e) {
      n.setTime(+n + e * t);
    }, function (n, e) {
      return (e - n) / t;
    }) : wr : null;
  };var Mr = 6e4,
      Tr = 6048e5,
      kr = (Dn(function (t) {
    t.setTime(1e3 * Math.floor(t / 1e3));
  }, function (t, n) {
    t.setTime(+t + 1e3 * n);
  }, function (t, n) {
    return (n - t) / 1e3;
  }, function (t) {
    return t.getUTCSeconds();
  }), Dn(function (t) {
    t.setTime(Math.floor(t / Mr) * Mr);
  }, function (t, n) {
    t.setTime(+t + n * Mr);
  }, function (t, n) {
    return (n - t) / Mr;
  }, function (t) {
    return t.getMinutes();
  }), Dn(function (t) {
    var n = t.getTimezoneOffset() * Mr % 36e5;n < 0 && (n += 36e5), t.setTime(36e5 * Math.floor((+t - n) / 36e5) + n);
  }, function (t, n) {
    t.setTime(+t + 36e5 * n);
  }, function (t, n) {
    return (n - t) / 36e5;
  }, function (t) {
    return t.getHours();
  }), Dn(function (t) {
    t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setDate(t.getDate() + n);
  }, function (t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Mr) / 864e5;
  }, function (t) {
    return t.getDate() - 1;
  })),
      Nr = Fn(0),
      Cr = Fn(1),
      Sr = (Dn(function (t) {
    t.setDate(1), t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setMonth(t.getMonth() + n);
  }, function (t, n) {
    return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear());
  }, function (t) {
    return t.getMonth();
  }), Dn(function (t) {
    t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setFullYear(t.getFullYear() + n);
  }, function (t, n) {
    return n.getFullYear() - t.getFullYear();
  }, function (t) {
    return t.getFullYear();
  }));Sr.every = function (t) {
    return isFinite(t = Math.floor(t)) && t > 0 ? Dn(function (n) {
      n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
    }, function (n, e) {
      n.setFullYear(n.getFullYear() + e * t);
    }) : null;
  };Dn(function (t) {
    t.setUTCSeconds(0, 0);
  }, function (t, n) {
    t.setTime(+t + n * Mr);
  }, function (t, n) {
    return (n - t) / Mr;
  }, function (t) {
    return t.getUTCMinutes();
  }), Dn(function (t) {
    t.setUTCMinutes(0, 0, 0);
  }, function (t, n) {
    t.setTime(+t + 36e5 * n);
  }, function (t, n) {
    return (n - t) / 36e5;
  }, function (t) {
    return t.getUTCHours();
  });var Ar = Dn(function (t) {
    t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCDate(t.getUTCDate() + n);
  }, function (t, n) {
    return (n - t) / 864e5;
  }, function (t) {
    return t.getUTCDate() - 1;
  }),
      Er = Hn(0),
      Ur = Hn(1),
      Dr = (Dn(function (t) {
    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCMonth(t.getUTCMonth() + n);
  }, function (t, n) {
    return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear());
  }, function (t) {
    return t.getUTCMonth();
  }), Dn(function (t) {
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n);
  }, function (t, n) {
    return n.getUTCFullYear() - t.getUTCFullYear();
  }, function (t) {
    return t.getUTCFullYear();
  }));Dr.every = function (t) {
    return isFinite(t = Math.floor(t)) && t > 0 ? Dn(function (n) {
      n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
    }, function (n, e) {
      n.setUTCFullYear(n.getUTCFullYear() + e * t);
    }) : null;
  };var Fr,
      Hr,
      Pr,
      Lr,
      Yr,
      qr = { "-": "", _: " ", 0: "0" },
      Or = /^\s*\d+/,
      jr = /^%/,
      zr = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;!function (t) {
    Fr = qn(t), Hr = Fr.format, Pr = Fr.parse, Lr = Fr.utcFormat, Yr = Fr.utcParse;
  }({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });Date.prototype.toISOString || Lr("%Y-%m-%dT%H:%M:%S.%LZ"), +new Date("2000-01-01T00:00:00.000Z") || Yr("%Y-%m-%dT%H:%M:%S.%LZ");De("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), De("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"), De("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"), De("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"), lr(It(300, .5, 0), It(-240, .5, 1));lr(It(-100, .75, .35), It(80, 1.5, .8)), lr(It(260, .75, .35), It(80, 1.5, .8)), It();Fe(De("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));Fe(De("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), Fe(De("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), Fe(De("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));var $r = Math.PI,
      Rr = 2 * $r,
      Ir = Rr - 1e-6;He.prototype = Pe.prototype = { constructor: He, moveTo: function moveTo(t, n) {
      this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n);
    }, closePath: function closePath() {
      null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
    }, lineTo: function lineTo(t, n) {
      this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
    }, quadraticCurveTo: function quadraticCurveTo(t, n, e, i) {
      this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +i);
    }, bezierCurveTo: function bezierCurveTo(t, n, e, i, r, a) {
      this._ += "C" + +t + "," + +n + "," + +e + "," + +i + "," + (this._x1 = +r) + "," + (this._y1 = +a);
    }, arcTo: function arcTo(t, n, e, i, r) {
      t = +t, n = +n, e = +e, i = +i, r = +r;var a = this._x1,
          o = this._y1,
          c = e - t,
          u = i - n,
          s = a - t,
          f = o - n,
          h = s * s + f * f;if (r < 0) throw new Error("negative radius: " + r);if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);else if (h > 1e-6) {
        if (Math.abs(f * c - u * s) > 1e-6 && r) {
          var l = e - a,
              _ = i - o,
              d = c * c + u * u,
              p = l * l + _ * _,
              b = Math.sqrt(d),
              y = Math.sqrt(h),
              g = r * Math.tan(($r - Math.acos((d + h - p) / (2 * b * y))) / 2),
              x = g / y,
              m = g / b;Math.abs(x - 1) > 1e-6 && (this._ += "L" + (t + x * s) + "," + (n + x * f)), this._ += "A" + r + "," + r + ",0,0," + +(f * l > s * _) + "," + (this._x1 = t + m * c) + "," + (this._y1 = n + m * u);
        } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
      } else ;
    }, arc: function arc(t, n, e, i, r, a) {
      t = +t, n = +n;var o = (e = +e) * Math.cos(i),
          c = e * Math.sin(i),
          u = t + o,
          s = n + c,
          f = 1 ^ a,
          h = a ? i - r : r - i;if (e < 0) throw new Error("negative radius: " + e);null === this._x1 ? this._ += "M" + u + "," + s : (Math.abs(this._x1 - u) > 1e-6 || Math.abs(this._y1 - s) > 1e-6) && (this._ += "L" + u + "," + s), e && (h < 0 && (h = h % Rr + Rr), h > Ir ? this._ += "A" + e + "," + e + ",0,1," + f + "," + (t - o) + "," + (n - c) + "A" + e + "," + e + ",0,1," + f + "," + (this._x1 = u) + "," + (this._y1 = s) : h > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(h >= $r) + "," + f + "," + (this._x1 = t + e * Math.cos(r)) + "," + (this._y1 = n + e * Math.sin(r))));
    }, rect: function rect(t, n, e, i) {
      this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +i + "h" + -e + "Z";
    }, toString: function toString() {
      return this._;
    } };var Zr = 1e-12;Ye.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._point = 0;
    }, lineEnd: function lineEnd() {
      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);break;case 1:
          this._point = 2;default:
          this._context.lineTo(t, n);}
    } }, Re.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 3:
          $e(this, this._x1, this._y1);case 2:
          this._context.lineTo(this._x1, this._y1);}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);break;case 1:
          this._point = 2;break;case 2:
          this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);default:
          $e(this, t, n);}this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n;
    } }, Ie.prototype = { lineStart: function lineStart() {
      this._x = [], this._y = [], this._basis.lineStart();
    }, lineEnd: function lineEnd() {
      var t = this._x,
          n = this._y,
          e = t.length - 1;if (e > 0) for (var i, r = t[0], a = n[0], o = t[e] - r, c = n[e] - a, u = -1; ++u <= e;) {
        i = u / e, this._basis.point(this._beta * t[u] + (1 - this._beta) * (r + i * o), this._beta * n[u] + (1 - this._beta) * (a + i * c));
      }this._x = this._y = null, this._basis.lineEnd();
    }, point: function point(t, n) {
      this._x.push(+t), this._y.push(+n);
    } }, function t(n) {
    function e(t) {
      return 1 === n ? new Re(t) : new Ie(t, n);
    }return e.beta = function (n) {
      return t(+n);
    }, e;
  }(.85), Xe.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 2:
          this._context.lineTo(this._x2, this._y2);break;case 3:
          Ze(this, this._x1, this._y1);}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);break;case 1:
          this._point = 2, this._x1 = t, this._y1 = n;break;case 2:
          this._point = 3;default:
          Ze(this, t, n);}this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    } }, function t(n) {
    function e(t) {
      return new Xe(t, n);
    }return e.tension = function (n) {
      return t(+n);
    }, e;
  }(0), Be.prototype = { areaStart: ze, areaEnd: ze, lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 1:
          this._context.moveTo(this._x3, this._y3), this._context.closePath();break;case 2:
          this._context.lineTo(this._x3, this._y3), this._context.closePath();break;case 3:
          this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);}
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1, this._x3 = t, this._y3 = n;break;case 1:
          this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);break;case 2:
          this._point = 3, this._x5 = t, this._y5 = n;break;default:
          Ze(this, t, n);}this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    } }, function t(n) {
    function e(t) {
      return new Be(t, n);
    }return e.tension = function (n) {
      return t(+n);
    }, e;
  }(0), We.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1;break;case 1:
          this._point = 2;break;case 2:
          this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);break;case 3:
          this._point = 4;default:
          Ze(this, t, n);}this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    } }, function t(n) {
    function e(t) {
      return new We(t, n);
    }return e.tension = function (n) {
      return t(+n);
    }, e;
  }(0), Je.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 2:
          this._context.lineTo(this._x2, this._y2);break;case 3:
          this.point(this._x2, this._y2);}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      if (t = +t, n = +n, this._point) {
        var e = this._x2 - t,
            i = this._y2 - n;this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + i * i, this._alpha));
      }switch (this._point) {case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);break;case 1:
          this._point = 2;break;case 2:
          this._point = 3;default:
          Ve(this, t, n);}this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    } }, function t(n) {
    function e(t) {
      return n ? new Je(t, n) : new Xe(t, 0);
    }return e.alpha = function (n) {
      return t(+n);
    }, e;
  }(.5), Ge.prototype = { areaStart: ze, areaEnd: ze, lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 1:
          this._context.moveTo(this._x3, this._y3), this._context.closePath();break;case 2:
          this._context.lineTo(this._x3, this._y3), this._context.closePath();break;case 3:
          this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);}
    }, point: function point(t, n) {
      if (t = +t, n = +n, this._point) {
        var e = this._x2 - t,
            i = this._y2 - n;this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + i * i, this._alpha));
      }switch (this._point) {case 0:
          this._point = 1, this._x3 = t, this._y3 = n;break;case 1:
          this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);break;case 2:
          this._point = 3, this._x5 = t, this._y5 = n;break;default:
          Ve(this, t, n);}this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    } }, function t(n) {
    function e(t) {
      return n ? new Ge(t, n) : new Be(t, 0);
    }return e.alpha = function (n) {
      return t(+n);
    }, e;
  }(.5), Qe.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    }, lineEnd: function lineEnd() {
      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      if (t = +t, n = +n, this._point) {
        var e = this._x2 - t,
            i = this._y2 - n;this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + i * i, this._alpha));
      }switch (this._point) {case 0:
          this._point = 1;break;case 1:
          this._point = 2;break;case 2:
          this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);break;case 3:
          this._point = 4;default:
          Ve(this, t, n);}this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    } }, function t(n) {
    function e(t) {
      return n ? new Qe(t, n) : new We(t, 0);
    }return e.alpha = function (n) {
      return t(+n);
    }, e;
  }(.5), ii.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 2:
          this._context.lineTo(this._x1, this._y1);break;case 3:
          ei(this, this._t0, ni(this, this._t0));}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      var e = NaN;if (t = +t, n = +n, t !== this._x1 || n !== this._y1) {
        switch (this._point) {case 0:
            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);break;case 1:
            this._point = 2;break;case 2:
            this._point = 3, ei(this, ni(this, e = ti(this, t, n)), e);break;default:
            ei(this, this._t0, e = ti(this, t, n));}this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e;
      }
    } }, (function (t) {
    this._context = new ri(t);
  }.prototype = Object.create(ii.prototype)).point = function (t, n) {
    ii.prototype.point.call(this, n, t);
  }, ri.prototype = { moveTo: function moveTo(t, n) {
      this._context.moveTo(n, t);
    }, closePath: function closePath() {
      this._context.closePath();
    }, lineTo: function lineTo(t, n) {
      this._context.lineTo(n, t);
    }, bezierCurveTo: function bezierCurveTo(t, n, e, i, r, a) {
      this._context.bezierCurveTo(n, t, i, e, a, r);
    } };var Xr = Array.prototype.slice,
      Br = 1,
      Wr = 2,
      Vr = 3,
      Jr = 4,
      Gr = 1e-6;t.select = function (t) {
    return "string" == typeof t ? new nt([[document.querySelector(t)]], [document.documentElement]) : new nt([[t]], vi);
  }, t.selectAll = function (t) {
    return "string" == typeof t ? new nt([document.querySelectorAll(t)], [document.documentElement]) : new nt([null == t ? [] : t], vi);
  }, t.csv = ki, t.text = Mi, t.max = function (t, n) {
    var e,
        i,
        r = t.length,
        a = -1;if (null == n) {
      for (; ++a < r;) {
        if (null != (e = t[a]) && e >= e) for (i = e; ++a < r;) {
          null != (e = t[a]) && e > i && (i = e);
        }
      }
    } else for (; ++a < r;) {
      if (null != (e = n(t[a], a, t)) && e >= e) for (i = e; ++a < r;) {
        null != (e = n(t[a], a, t)) && e > i && (i = e);
      }
    }return i;
  }, t.min = function (t, n) {
    var e,
        i,
        r = t.length,
        a = -1;if (null == n) {
      for (; ++a < r;) {
        if (null != (e = t[a]) && e >= e) for (i = e; ++a < r;) {
          null != (e = t[a]) && i > e && (i = e);
        }
      }
    } else for (; ++a < r;) {
      if (null != (e = n(t[a], a, t)) && e >= e) for (i = e; ++a < r;) {
        null != (e = n(t[a], a, t)) && i > e && (i = e);
      }
    }return i;
  }, t.sum = function (t, n) {
    var e,
        i = t.length,
        r = -1,
        a = 0;if (null == n) for (; ++r < i;) {
      (e = +t[r]) && (a += e);
    } else for (; ++r < i;) {
      (e = +n(t[r], r, t)) && (a += e);
    }return a;
  }, t.scaleLinear = Un, t.line = function () {
    function t(t) {
      var c,
          u,
          s,
          f = t.length,
          h = !1;for (null == r && (o = a(s = Pe())), c = 0; c <= f; ++c) {
        !(c < f && i(u = t[c], c, t)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()), h && o.point(+n(u, c, t), +e(u, c, t));
      }if (s) return o = null, s + "" || null;
    }var n = Oe,
        e = je,
        i = Le(!0),
        r = null,
        a = qe,
        o = null;return t.x = function (e) {
      return arguments.length ? (n = "function" == typeof e ? e : Le(+e), t) : n;
    }, t.y = function (n) {
      return arguments.length ? (e = "function" == typeof n ? n : Le(+n), t) : e;
    }, t.defined = function (n) {
      return arguments.length ? (i = "function" == typeof n ? n : Le(!!n), t) : i;
    }, t.curve = function (n) {
      return arguments.length ? (a = n, null != r && (o = a(r)), t) : a;
    }, t.context = function (n) {
      return arguments.length ? (null == n ? r = o = null : o = a(r = n), t) : r;
    }, t;
  }, t.axisTop = function (t) {
    return hi(Br, t);
  }, t.axisRight = function (t) {
    return hi(Wr, t);
  }, t.axisBottom = function (t) {
    return hi(Vr, t);
  }, t.axisLeft = function (t) {
    return hi(Jr, t);
  };
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dataGenerator = __webpack_require__(2);

var d3 = __webpack_require__(0);

(0, _dataGenerator.dataGenerator)('table', 'src/data/memory-span.csv', 'src/template/table.html', 'TWO-GROUPS');
(0, _dataGenerator.dataGenerator)('freq-table', 'src/data/scores.csv', 'src/template/table.html', 'FREQ-DIST');
(0, _dataGenerator.dataGenerator)('freq-polygon-2', 'src/data/engineering-interest.csv', 'src/template/graph.html', 'FREQ-POLY-ENG');
(0, _dataGenerator.dataGenerator)('freq-polygon-3', 'src/data/engineering-interest.csv', 'src/template/graph.html', 'FREQ-POLY-FRESH');

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataGenerator = undefined;

var _FrequencyDistTable = __webpack_require__(3);

var _FrequencyPolygon = __webpack_require__(4);

var _TwoGroupsTable = __webpack_require__(5);

var d3 = __webpack_require__(0);

var dataGenerator = exports.dataGenerator = function dataGenerator(mount, dataPath, template, caseName) {
  d3.csv(dataPath, function (error, data) {
    if (error) throw error;

    d3.text(template, function (str) {
      d3.select('.container').append('div').attr('id', mount).html(str);

      switchcaseF({
        'FREQ-DIST': function FREQDIST() {
          return new _FrequencyDistTable.FrequencyDistTable('#freq-table tbody', data, '#freq-table', 'SCORE', 'Table 2.1   /   Simple Frequency Distribution of Anxiety Scores for 100 College Students', 'Ahana, E. Y. A study on the reliability and internal consistency of a manifest anxiety scale. M.A. thesis, Northwestern Univeristy, 1952.').init();
        },
        'TWO-GROUPS': function TWOGROUPS() {
          return new _TwoGroupsTable.TwoGroupsTable('#table tbody', data, '#table', 'Table 1.1  /  Scores Made by the Neutral and the Anxious Group on Memory Span for Digits', 'Moldawsky, S., and Moldawsky, P.C. Digit span as an anxiety indicator. J. consult. Psychol., 1952, 16, 115-118. Raw data courtesy of the authors.').init();
        },
        'FREQ-POLY': function FREQPOLY() {
          return new _FrequencyPolygon.FrequencyPolygon('#freq-polygon-1 svg', data, 'both', '#freq-polygon-1', { top: 20, right: 20, bottom: 60, left: 45 }, 570, 465, '', 'Strong, E. K., Jr. Nineteen-year followup of engineer interests. J. appl. Psychol., 1952, 36, 65-74.').init();
        },
        'FREQ-POLY-ENG': function FREQPOLYENG() {
          return new _FrequencyPolygon.FrequencyPolygon('#freq-polygon-2 svg', data, 'engineers', '#freq-polygon-2', { top: 20, right: 20, bottom: 60, left: 45 }, 375, 265, '', '').init();
        },
        'FREQ-POLY-FRESH': function FREQPOLYFRESH() {
          return new _FrequencyPolygon.FrequencyPolygon('#freq-polygon-3 svg', data, 'freshmen', '#freq-polygon-3', { top: 20, right: 20, bottom: 60, left: 45 }, 375, 265, '', '').init();
        }
      })(caseName);
    });
  });
};

var switchcase = function switchcase(cases) {
  return function (key) {
    return key in cases ? cases[key] : null;
  };
};

var switchcaseF = function switchcaseF(cases) {
  return function (key) {
    return switchcase(cases)(key)();
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var d3 = __webpack_require__(0);

/*
 * Frequency Distribution Tables – How frequently is data distributed at each measure?
 *
 * The first column contains the measure ordered from highest to lowest, the second column contains the number of cases of that measure.
 * Use the symbol N to represent the total number of cases in a group.
 */

var FrequencyDistTable = exports.FrequencyDistTable = function () {
  function FrequencyDistTable(el, d, i, m, c, a) {
    _classCallCheck(this, FrequencyDistTable);

    this.mount = el;
    this.data = d;
    this.identity = i;
    this.measure = m.toLowerCase();
    this.caption = c;
    this.attribution = a;
  }

  _createClass(FrequencyDistTable, [{
    key: 'init',
    value: function init() {
      d3.select(this.identity + ' figcaption').text(this.caption);

      d3.select(this.identity + ' thead').html('<tr><th>' + this.measure + '</th><th>&#402;</th><th>' + this.measure + '</th><th>&#402;</th><th>' + this.measure + '</th><th>&#402;</th></tr>');

      var maxValue = d3.max(this.data, function (d) {
        return +d.score;
      });
      var minValue = d3.min(this.data, function (d) {
        return +d.score;
      });

      var scores = this.rangeOfMeasures(maxValue, minValue);
      var row_data = this.createRowData(this.createColumns(scores));
      var rows = row_data[0];
      var lastColumnLength = row_data[1];

      d3.select(this.mount).selectAll('.row').data(rows).enter().append('tr').attr('class', 'row').html(function (d) {
        return '<td>' + d[0] + '</td><td>' + d[1] + '</td><td>' + d[2] + '</td><td>' + d[3] + '</td><td>' + d[4] + '</td><td>' + d[5] + '</td>';
      });

      d3.select(this.identity + ' small').text(this.attribution);

      d3.select('#freq-table tbody tr:nth-child(' + (lastColumnLength + 1) + ') td:nth-child(5)').attr('data-symbol', 'N').append('span').text('N=');

      d3.select('#freq-table tbody tr:nth-child(' + (lastColumnLength + 1) + ') td:nth-child(6)').append('span').attr('class', 'lineover').text('' + d3.sum(scores, function (d) {
        return d[1];
      }));
    }
  }, {
    key: 'rangeOfMeasures',
    value: function rangeOfMeasures(max, min) {
      // map range of measures to zero values in order from highest to lowest measure
      var scores = new Map();
      for (var i = max; i >= min; i--) {
        scores.set(i, 0);
      }

      // for every instance of measure in dataset increment map by one
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var d = _step.value;

          var key = +d[this.measure];
          if (scores.has(key)) {
            var val = scores.get(key);
            val += 1;
            scores.set(key, val);
          }
        }

        // convert map to an array of pairs
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      scores = [].concat(_toConsumableArray(scores));
      return scores;
    }
  }, {
    key: 'createColumns',
    value: function createColumns(data) {
      // calculate column length
      var tdLength = data.length + 1;
      var columnLength = Math.ceil(tdLength / 3);
      var lastColumnLength = data.length % columnLength;

      var columns = [lastColumnLength, columnLength];
      columns.push(data.slice(0, columnLength));
      columns.push(data.slice(columnLength, columnLength * 2));
      columns.push(data.slice(columnLength * 2, columnLength * 3));
      return columns;
    }
  }, {
    key: 'createRowData',
    value: function createRowData(columns) {
      var rows = [];
      for (var i = 0; i < columns[1]; i++) {
        var row_data = [columns[2][i][0], columns[2][i][1], columns[3][i][0], columns[3][i][1], columns[4][i] ? columns[4][i][0] : '', columns[4][i] ? columns[4][i][1] : ''];
        rows.push(row_data);
      }
      return [rows, columns[0]];
    }
  }]);

  return FrequencyDistTable;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var d3 = __webpack_require__(0);

var FrequencyPolygon = exports.FrequencyPolygon = function () {
    function FrequencyPolygon(el, d, s, i, m, w, h, c, a) {
        _classCallCheck(this, FrequencyPolygon);

        this.mount = el;
        this.data = this.coerce(d);
        this.selection = s;
        this.identity = i;
        this.margin = m;
        this.width = w - this.margin.right - this.margin.left;
        this.height = h - this.margin.bottom - this.margin.top;
        this.caption = c;
        this.attribution = a;
    }

    _createClass(FrequencyPolygon, [{
        key: 'init',
        value: function init() {
            var _this = this;

            d3.select(this.identity + ' figcaption').text(this.caption);

            var graph = d3.select(this.mount).attr('width', this.width + this.margin.right + this.margin.left).attr('height', this.height + this.margin.bottom + this.margin.top).append('g').attr('transform', 'translate(' + this.margin.left + ', ' + this.margin.top + ')');

            graph.append('rect').attr('class', 'polygon-background').attr('width', this.width + this.margin.right + this.margin.left - 11.5).attr('height', this.height).attr('transform', 'translate(0, 0)');

            var x = d3.scaleLinear().range([0, this.width]);

            var y = d3.scaleLinear().range([this.height, 0]);

            var xAxis = d3.axisBottom(x).ticks(16).tickSize(-this.height - 50);

            var yAxis = d3.axisLeft(y).ticks(4).tickSize(-this.width - 50);

            var data = void 0;
            this.selection === 'both' ? data = this.data : data = this.data.filter(function (d) {
                return d.group === _this.selection;
            });

            x.domain([d3.min(data, function (d) {
                return d.midpoint;
            }) - 5, d3.max(data, function (d) {
                return d.midpoint;
            })]);
            y.domain([0, 20]);

            graph.append('g').attr('class', 'x-axis').attr('transform', 'translate(0, ' + this.height + ')').call(xAxis).append('text').attr('x', 93).attr('y', 45).style('fill', '#000').style('font-family', 'Baskerville').style('font-size', 14).text('midpoint of class interval').attr('text-anchor', 'start');

            graph.append('g').attr('class', 'y-axis').call(yAxis).append('text').attr('x', -52).attr('y', -35).style('fill', '#000').style('font-family', 'Baskerville').style('font-size', 14).text('percent of cases').attr('text-anchor', 'end').attr('transform', 'rotate(-90)');

            var firstXAxis = d3.selectAll(this.identity + ' svg g.x-axis .tick').nodes()[0];
            d3.select(firstXAxis).attr('visibility', 'hidden');
            var firstYAxis = d3.selectAll(this.identity + ' svg g.y-axis .tick').nodes()[0];
            d3.select(firstYAxis).attr('visibility', 'hidden');

            var line = d3.line().x(function (d) {
                return x(d.midpoint);
            }).y(function (d) {
                return y(d.percent);
            });

            graph.append('path').datum(data.reverse()).attr('d', line).style('fill', 'none').style('stroke', '#000').style('stroke-width', 2);

            graph.selectAll('.datum-point').data(data.reverse()).enter().append('circle').attr('cx', function (d) {
                return x(d.midpoint);
            }).attr('cy', function (d) {
                return y(d.percent);
            }).attr('r', 2).style('fill', '#fff').style('stroke', '#000').style('stroke-width', 1.2);

            graph.append('text').attr('x', 24).attr('y', 27).text(this.selection);

            d3.select(this.identity + ' small').text(this.attribution);
        }
    }, {
        key: 'coerce',
        value: function coerce(data) {
            data.forEach(function (d) {
                d.midpoint = +d.midpoint;
                d.percent = +d.percent;
            });
            return data;
        }
    }]);

    return FrequencyPolygon;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var d3 = __webpack_require__(0);

var TwoGroupsTable = exports.TwoGroupsTable = function () {
  function TwoGroupsTable(el, d, i, c, a) {
    _classCallCheck(this, TwoGroupsTable);

    this.mount = el;
    this.data = d;
    this.identity = i;
    this.caption = c;
    this.attribution = a;
  }

  _createClass(TwoGroupsTable, [{
    key: 'init',
    value: function init() {
      d3.select(this.identity + ' figcaption').text(this.caption);

      // get a collection of unique property values
      var groups = [].concat(_toConsumableArray(new Set(this.data.map(function (d) {
        return d.group;
      }))));

      var rows = this.createRowData(this.createColumns());

      d3.select(this.identity + ' thead').html('<tr><th colspan="2">' + groups[0].toUpperCase() + ' GROUP</th><th></th><th colspan="2">' + groups[1].toUpperCase() + ' GROUP</th></tr>');

      d3.select(this.mount).selectAll('.row').data(rows).enter().append('tr').attr('class', 'row').html(function (d) {
        return '<td>' + d[0] + '</td><td>' + d[1] + '</td><td></td><td>' + d[2] + '</td><td>' + d[3] + '</td>';
      });

      d3.select(this.identity + ' small').text(this.attribution);
    }
  }, {
    key: 'createColumns',
    value: function createColumns() {
      // calculate column length
      var tdLength = this.data.length;;
      var columnLength = Math.ceil(tdLength / 4);

      var columns = [columnLength];
      columns.push(this.data.slice(0, columnLength));
      columns.push(this.data.slice(columnLength, columnLength * 2));
      columns.push(this.data.slice(columnLength * 2, columnLength * 3));
      columns.push(this.data.slice(columnLength * 3));
      return columns;
    }
  }, {
    key: 'createRowData',
    value: function createRowData(columns) {
      var rows = [];
      for (var i = 0; i < columns[0]; i++) {
        var row_data = [columns[1][i].score, columns[2][i].score, columns[3][i].score, columns[4][i].score];
        rows[rows.length] = row_data;
      }
      return rows;
    }
  }]);

  return TwoGroupsTable;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map