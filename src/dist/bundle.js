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

!function (n, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(n.d3 = {});
}(undefined, function (n) {
  "use strict";
  function t(n) {
    var t = n += "",
        e = t.indexOf(":");return e >= 0 && "xmlns" !== (t = n.slice(0, e)) && (n = n.slice(e + 1)), An.hasOwnProperty(t) ? { space: An[t], local: n } : n;
  }function e(n) {
    return function () {
      var t = this.ownerDocument,
          e = this.namespaceURI;return e === wn && t.documentElement.namespaceURI === wn ? t.createElement(n) : t.createElementNS(e, n);
    };
  }function r(n) {
    return function () {
      return this.ownerDocument.createElementNS(n.space, n.local);
    };
  }function i(n) {
    var i = t(n);return (i.local ? r : e)(i);
  }function o(n, t, e) {
    return n = u(n, t, e), function (t) {
      var e = t.relatedTarget;e && (e === this || 8 & e.compareDocumentPosition(this)) || n.call(this, t);
    };
  }function u(n, t, e) {
    return function (r) {
      var i = Tn;Tn = r;try {
        n.call(this, this.__data__, t, e);
      } finally {
        Tn = i;
      }
    };
  }function l(n) {
    return n.trim().split(/^|\s+/).map(function (n) {
      var t = "",
          e = n.indexOf(".");return e >= 0 && (t = n.slice(e + 1), n = n.slice(0, e)), { type: n, name: t };
    });
  }function s(n) {
    return function () {
      var t = this.__on;if (t) {
        for (var e, r = 0, i = -1, o = t.length; r < o; ++r) {
          e = t[r], n.type && e.type !== n.type || e.name !== n.name ? t[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
        }++i ? t.length = i : delete this.__on;
      }
    };
  }function c(n, t, e) {
    var r = Cn.hasOwnProperty(n.type) ? o : u;return function (i, o, u) {
      var l,
          s = this.__on,
          c = r(t, o, u);if (s) for (var a = 0, f = s.length; a < f; ++a) {
        if ((l = s[a]).type === n.type && l.name === n.name) return this.removeEventListener(l.type, l.listener, l.capture), this.addEventListener(l.type, l.listener = c, l.capture = e), void (l.value = t);
      }this.addEventListener(n.type, c, e), l = { type: n.type, name: n.name, value: t, listener: c, capture: e }, s ? s.push(l) : this.__on = [l];
    };
  }function a(n) {
    return n.ownerDocument && n.ownerDocument.defaultView || n.document && n || n.defaultView;
  }function f(n, t, e) {
    var r = a(n),
        i = r.CustomEvent;"function" == typeof i ? i = new i(t, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(t, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(t, !1, !1)), n.dispatchEvent(i);
  }function h(n, t) {
    return function () {
      return f(this, n, t);
    };
  }function p(n, t) {
    return function () {
      return f(this, n, t.apply(this, arguments));
    };
  }function v() {
    var n = this.parentNode;n && n.removeChild(this);
  }function d() {}function y(n) {
    return null == n ? d : function () {
      return this.querySelector(n);
    };
  }function m() {
    return null;
  }function _() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }function g() {
    this.nextSibling && this.parentNode.appendChild(this);
  }function w() {
    this.innerHTML = "";
  }function A(n) {
    return function () {
      this.innerHTML = n;
    };
  }function x(n) {
    return function () {
      var t = n.apply(this, arguments);this.innerHTML = null == t ? "" : t;
    };
  }function b() {
    this.textContent = "";
  }function E(n) {
    return function () {
      this.textContent = n;
    };
  }function S(n) {
    return function () {
      var t = n.apply(this, arguments);this.textContent = null == t ? "" : t;
    };
  }function C(n) {
    return n.trim().split(/^|\s+/);
  }function T(n) {
    return n.classList || new N(n);
  }function N(n) {
    this._node = n, this._names = C(n.getAttribute("class") || "");
  }function O(n, t) {
    for (var e = T(n), r = -1, i = t.length; ++r < i;) {
      e.add(t[r]);
    }
  }function k(n, t) {
    for (var e = T(n), r = -1, i = t.length; ++r < i;) {
      e.remove(t[r]);
    }
  }function q(n) {
    return function () {
      O(this, n);
    };
  }function M(n) {
    return function () {
      k(this, n);
    };
  }function P(n, t) {
    return function () {
      (t.apply(this, arguments) ? O : k)(this, n);
    };
  }function L(n) {
    return function () {
      delete this[n];
    };
  }function R(n, t) {
    return function () {
      this[n] = t;
    };
  }function $(n, t) {
    return function () {
      var e = t.apply(this, arguments);null == e ? delete this[n] : this[n] = e;
    };
  }function j(n) {
    return function () {
      this.style.removeProperty(n);
    };
  }function D(n, t, e) {
    return function () {
      this.style.setProperty(n, t, e);
    };
  }function H(n, t, e) {
    return function () {
      var r = t.apply(this, arguments);null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e);
    };
  }function B(n, t) {
    return n.style.getPropertyValue(t) || a(n).getComputedStyle(n, null).getPropertyValue(t);
  }function z(n) {
    return function () {
      this.removeAttribute(n);
    };
  }function I(n) {
    return function () {
      this.removeAttributeNS(n.space, n.local);
    };
  }function U(n, t) {
    return function () {
      this.setAttribute(n, t);
    };
  }function V(n, t) {
    return function () {
      this.setAttributeNS(n.space, n.local, t);
    };
  }function X(n, t) {
    return function () {
      var e = t.apply(this, arguments);null == e ? this.removeAttribute(n) : this.setAttribute(n, e);
    };
  }function F(n, t) {
    return function () {
      var e = t.apply(this, arguments);null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e);
    };
  }function G(n, t) {
    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
  }function J(n) {
    return new Array(n.length);
  }function K(n, t) {
    this.ownerDocument = n.ownerDocument, this.namespaceURI = n.namespaceURI, this._next = null, this._parent = n, this.__data__ = t;
  }function Q(n) {
    return function () {
      return n;
    };
  }function W(n, t, e, r, i, o) {
    for (var u, l = 0, s = t.length, c = o.length; l < c; ++l) {
      (u = t[l]) ? (u.__data__ = o[l], r[l] = u) : e[l] = new K(n, o[l]);
    }for (; l < s; ++l) {
      (u = t[l]) && (i[l] = u);
    }
  }function Y(n, t, e, r, i, o, u) {
    var l,
        s,
        c,
        a = {},
        f = t.length,
        h = o.length,
        p = new Array(f);for (l = 0; l < f; ++l) {
      (s = t[l]) && (p[l] = c = Nn + u.call(s, s.__data__, l, t), c in a ? i[l] = s : a[c] = s);
    }for (l = 0; l < h; ++l) {
      (s = a[c = Nn + u.call(n, o[l], l, o)]) ? (r[l] = s, s.__data__ = o[l], a[c] = null) : e[l] = new K(n, o[l]);
    }for (l = 0; l < f; ++l) {
      (s = t[l]) && a[p[l]] === s && (i[l] = s);
    }
  }function Z() {
    return [];
  }function nn(n) {
    return null == n ? Z : function () {
      return this.querySelectorAll(n);
    };
  }function tn(n, t) {
    this._groups = n, this._parents = t;
  }function en() {}function rn(n, t) {
    var e = new en();if (n instanceof en) n.each(function (n, t) {
      e.set(t, n);
    });else if (Array.isArray(n)) {
      var r,
          i = -1,
          o = n.length;if (null == t) for (; ++i < o;) {
        e.set(i, n[i]);
      } else for (; ++i < o;) {
        e.set(t(r = n[i], i, n), r);
      }
    } else if (n) for (var u in n) {
      e.set(u, n[u]);
    }return e;
  }function on() {
    for (var n, t = 0, e = arguments.length, r = {}; t < e; ++t) {
      if (!(n = arguments[t] + "") || n in r) throw new Error("illegal type: " + n);r[n] = [];
    }return new un(r);
  }function un(n) {
    this._ = n;
  }function ln(n, t) {
    return n.trim().split(/^|\s+/).map(function (n) {
      var e = "",
          r = n.indexOf(".");if (r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);return { type: n, name: e };
    });
  }function sn(n, t) {
    for (var e, r = 0, i = n.length; r < i; ++r) {
      if ((e = n[r]).name === t) return e.value;
    }
  }function cn(n, t, e) {
    for (var r = 0, i = n.length; r < i; ++r) {
      if (n[r].name === t) {
        n[r] = kn, n = n.slice(0, r).concat(n.slice(r + 1));break;
      }
    }return null != e && n.push({ name: t, value: e }), n;
  }function an(n, t) {
    function e(n) {
      var t,
          e = c.status;if (!e && hn(c) || e >= 200 && e < 300 || 304 === e) {
        if (o) try {
          t = o.call(r, c);
        } catch (n) {
          return void l.call("error", r, n);
        } else t = c;l.call("load", r, t);
      } else l.call("error", r, n);
    }var r,
        i,
        o,
        u,
        l = on("beforesend", "progress", "load", "error"),
        s = rn(),
        c = new XMLHttpRequest(),
        a = null,
        f = null,
        h = 0;if ("undefined" == typeof XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(n) || (c = new XDomainRequest()), "onload" in c ? c.onload = c.onerror = c.ontimeout = e : c.onreadystatechange = function (n) {
      c.readyState > 3 && e(n);
    }, c.onprogress = function (n) {
      l.call("progress", r, n);
    }, r = { header: function header(n, t) {
        return n = (n + "").toLowerCase(), arguments.length < 2 ? s.get(n) : (null == t ? s.remove(n) : s.set(n, t + ""), r);
      }, mimeType: function mimeType(n) {
        return arguments.length ? (i = null == n ? null : n + "", r) : i;
      }, responseType: function responseType(n) {
        return arguments.length ? (u = n, r) : u;
      }, timeout: function timeout(n) {
        return arguments.length ? (h = +n, r) : h;
      }, user: function user(n) {
        return arguments.length < 1 ? a : (a = null == n ? null : n + "", r);
      }, password: function password(n) {
        return arguments.length < 1 ? f : (f = null == n ? null : n + "", r);
      }, response: function response(n) {
        return o = n, r;
      }, get: function get(n, t) {
        return r.send("GET", n, t);
      }, post: function post(n, t) {
        return r.send("POST", n, t);
      }, send: function send(t, e, o) {
        return c.open(t, n, !0, a, f), null == i || s.has("accept") || s.set("accept", i + ",*/*"), c.setRequestHeader && s.each(function (n, t) {
          c.setRequestHeader(t, n);
        }), null != i && c.overrideMimeType && c.overrideMimeType(i), null != u && (c.responseType = u), h > 0 && (c.timeout = h), null == o && "function" == typeof e && (o = e, e = null), null != o && 1 === o.length && (o = fn(o)), null != o && r.on("error", o).on("load", function (n) {
          o(null, n);
        }), l.call("beforesend", r, c), c.send(null == e ? null : e), r;
      }, abort: function abort() {
        return c.abort(), r;
      }, on: function on() {
        var n = l.on.apply(l, arguments);return n === l ? r : n;
      } }, null != t) {
      if ("function" != typeof t) throw new Error("invalid callback: " + t);return r.get(t);
    }return r;
  }function fn(n) {
    return function (t, e) {
      n(null == t ? e : null);
    };
  }function hn(n) {
    var t = n.responseType;return t && "text" !== t ? n.response : n.responseText;
  }function pn(n) {
    return new Function("d", "return {" + n.map(function (n, t) {
      return JSON.stringify(n) + ": d[" + t + "]";
    }).join(",") + "}");
  }function vn(n, t) {
    var e = pn(n);return function (r, i) {
      return t(e(r), i, n);
    };
  }function dn(n) {
    var t = Object.create(null),
        e = [];return n.forEach(function (n) {
      for (var r in n) {
        r in t || e.push(t[r] = r);
      }
    }), e;
  }function yn(n) {
    function t(n, t) {
      function e() {
        if (a >= c) return l;if (i) return i = !1, u;var t,
            e = a;if (34 === n.charCodeAt(e)) {
          for (var r = e; r++ < c;) {
            if (34 === n.charCodeAt(r)) {
              if (34 !== n.charCodeAt(r + 1)) break;++r;
            }
          }return a = r + 2, 13 === (t = n.charCodeAt(r + 1)) ? (i = !0, 10 === n.charCodeAt(r + 2) && ++a) : 10 === t && (i = !0), n.slice(e + 1, r).replace(/""/g, '"');
        }for (; a < c;) {
          var s = 1;if (10 === (t = n.charCodeAt(a++))) i = !0;else if (13 === t) i = !0, 10 === n.charCodeAt(a) && (++a, ++s);else if (t !== o) continue;return n.slice(e, a - s);
        }return n.slice(e);
      }for (var r, i, u = {}, l = {}, s = [], c = n.length, a = 0, f = 0; (r = e()) !== l;) {
        for (var h = []; r !== u && r !== l;) {
          h.push(r), r = e();
        }t && null == (h = t(h, f++)) || s.push(h);
      }return s;
    }function e(t) {
      return t.map(r).join(n);
    }function r(n) {
      return null == n ? "" : i.test(n += "") ? '"' + n.replace(/\"/g, '""') + '"' : n;
    }var i = new RegExp('["' + n + "\n\r]"),
        o = n.charCodeAt(0);return { parse: function parse(n, e) {
        var r,
            i,
            o = t(n, function (n, t) {
          if (r) return r(n, t - 1);i = n, r = e ? vn(n, e) : pn(n);
        });return o.columns = i, o;
      }, parseRows: t, format: function format(t, e) {
        return null == e && (e = dn(t)), [e.map(r).join(n)].concat(t.map(function (t) {
          return e.map(function (n) {
            return r(t[n]);
          }).join(n);
        })).join("\n");
      }, formatRows: function formatRows(n) {
        return n.map(e).join("\n");
      } };
  }function mn(n, t) {
    return function (e) {
      return n(e.responseText, t);
    };
  }function _n(n, t) {
    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
  }function gn(n) {
    return function (t, e) {
      return _n(n(t), e);
    };
  }var wn = "http://www.w3.org/1999/xhtml",
      An = { svg: "http://www.w3.org/2000/svg", xhtml: wn, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
      xn = function xn(n) {
    return function () {
      return this.matches(n);
    };
  };if ("undefined" != typeof document) {
    var bn = document.documentElement;if (!bn.matches) {
      var En = bn.webkitMatchesSelector || bn.msMatchesSelector || bn.mozMatchesSelector || bn.oMatchesSelector;xn = function xn(n) {
        return function () {
          return En.call(this, n);
        };
      };
    }
  }var Sn = xn,
      Cn = {},
      Tn = null;"undefined" != typeof document && ("onmouseenter" in document.documentElement || (Cn = { mouseenter: "mouseover", mouseleave: "mouseout" })), N.prototype = { add: function add(n) {
      this._names.indexOf(n) < 0 && (this._names.push(n), this._node.setAttribute("class", this._names.join(" ")));
    }, remove: function remove(n) {
      var t = this._names.indexOf(n);t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
    }, contains: function contains(n) {
      return this._names.indexOf(n) >= 0;
    } }, K.prototype = { constructor: K, appendChild: function appendChild(n) {
      return this._parent.insertBefore(n, this._next);
    }, insertBefore: function insertBefore(n, t) {
      return this._parent.insertBefore(n, t);
    }, querySelector: function querySelector(n) {
      return this._parent.querySelector(n);
    }, querySelectorAll: function querySelectorAll(n) {
      return this._parent.querySelectorAll(n);
    } };var Nn = "$",
      On = [null];tn.prototype = function () {
    return new tn([[document.documentElement]], On);
  }.prototype = { constructor: tn, select: function select(n) {
      "function" != typeof n && (n = y(n));for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, u, l = t[i], s = l.length, c = r[i] = new Array(s), a = 0; a < s; ++a) {
          (o = l[a]) && (u = n.call(o, o.__data__, a, l)) && ("__data__" in o && (u.__data__ = o.__data__), c[a] = u);
        }
      }return new tn(r, this._parents);
    }, selectAll: function selectAll(n) {
      "function" != typeof n && (n = nn(n));for (var t = this._groups, e = t.length, r = [], i = [], o = 0; o < e; ++o) {
        for (var u, l = t[o], s = l.length, c = 0; c < s; ++c) {
          (u = l[c]) && (r.push(n.call(u, u.__data__, c, l)), i.push(u));
        }
      }return new tn(r, i);
    }, filter: function filter(n) {
      "function" != typeof n && (n = Sn(n));for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, u = t[i], l = u.length, s = r[i] = [], c = 0; c < l; ++c) {
          (o = u[c]) && n.call(o, o.__data__, c, u) && s.push(o);
        }
      }return new tn(r, this._parents);
    }, data: function data(n, t) {
      if (!n) return p = new Array(this.size()), c = -1, this.each(function (n) {
        p[++c] = n;
      }), p;var e = t ? Y : W,
          r = this._parents,
          i = this._groups;"function" != typeof n && (n = Q(n));for (var o = i.length, u = new Array(o), l = new Array(o), s = new Array(o), c = 0; c < o; ++c) {
        var a = r[c],
            f = i[c],
            h = f.length,
            p = n.call(a, a && a.__data__, c, r),
            v = p.length,
            d = l[c] = new Array(v),
            y = u[c] = new Array(v);e(a, f, d, y, s[c] = new Array(h), p, t);for (var m, _, g = 0, w = 0; g < v; ++g) {
          if (m = d[g]) {
            for (g >= w && (w = g + 1); !(_ = y[w]) && ++w < v;) {}m._next = _ || null;
          }
        }
      }return u = new tn(u, r), u._enter = l, u._exit = s, u;
    }, enter: function enter() {
      return new tn(this._enter || this._groups.map(J), this._parents);
    }, exit: function exit() {
      return new tn(this._exit || this._groups.map(J), this._parents);
    }, merge: function merge(n) {
      for (var t = this._groups, e = n._groups, r = t.length, i = e.length, o = Math.min(r, i), u = new Array(r), l = 0; l < o; ++l) {
        for (var s, c = t[l], a = e[l], f = c.length, h = u[l] = new Array(f), p = 0; p < f; ++p) {
          (s = c[p] || a[p]) && (h[p] = s);
        }
      }for (; l < r; ++l) {
        u[l] = t[l];
      }return new tn(u, this._parents);
    }, order: function order() {
      for (var n = this._groups, t = -1, e = n.length; ++t < e;) {
        for (var r, i = n[t], o = i.length - 1, u = i[o]; --o >= 0;) {
          (r = i[o]) && (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u), u = r);
        }
      }return this;
    }, sort: function sort(n) {
      n || (n = G);for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, u = t[i], l = u.length, s = r[i] = new Array(l), c = 0; c < l; ++c) {
          (o = u[c]) && (s[c] = o);
        }s.sort(function (t, e) {
          return t && e ? n(t.__data__, e.__data__) : !t - !e;
        });
      }return new tn(r, this._parents).order();
    }, call: function call() {
      var n = arguments[0];return arguments[0] = this, n.apply(null, arguments), this;
    }, nodes: function nodes() {
      var n = new Array(this.size()),
          t = -1;return this.each(function () {
        n[++t] = this;
      }), n;
    }, node: function node() {
      for (var n = this._groups, t = 0, e = n.length; t < e; ++t) {
        for (var r = n[t], i = 0, o = r.length; i < o; ++i) {
          var u = r[i];if (u) return u;
        }
      }return null;
    }, size: function size() {
      var n = 0;return this.each(function () {
        ++n;
      }), n;
    }, empty: function empty() {
      return !this.node();
    }, each: function each(n) {
      for (var t = this._groups, e = 0, r = t.length; e < r; ++e) {
        for (var i, o = t[e], u = 0, l = o.length; u < l; ++u) {
          (i = o[u]) && n.call(i, i.__data__, u, o);
        }
      }return this;
    }, attr: function attr(n, e) {
      var r = t(n);if (arguments.length < 2) {
        var i = this.node();return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
      }return this.each((null == e ? r.local ? I : z : "function" == typeof e ? r.local ? F : X : r.local ? V : U)(r, e));
    }, style: function style(n, t, e) {
      return arguments.length > 1 ? this.each((null == t ? j : "function" == typeof t ? H : D)(n, t, null == e ? "" : e)) : B(this.node(), n);
    }, property: function property(n, t) {
      return arguments.length > 1 ? this.each((null == t ? L : "function" == typeof t ? $ : R)(n, t)) : this.node()[n];
    }, classed: function classed(n, t) {
      var e = C(n + "");if (arguments.length < 2) {
        for (var r = T(this.node()), i = -1, o = e.length; ++i < o;) {
          if (!r.contains(e[i])) return !1;
        }return !0;
      }return this.each(("function" == typeof t ? P : t ? q : M)(e, t));
    }, text: function text(n) {
      return arguments.length ? this.each(null == n ? b : ("function" == typeof n ? S : E)(n)) : this.node().textContent;
    }, html: function html(n) {
      return arguments.length ? this.each(null == n ? w : ("function" == typeof n ? x : A)(n)) : this.node().innerHTML;
    }, raise: function raise() {
      return this.each(g);
    }, lower: function lower() {
      return this.each(_);
    }, append: function append(n) {
      var t = "function" == typeof n ? n : i(n);return this.select(function () {
        return this.appendChild(t.apply(this, arguments));
      });
    }, insert: function insert(n, t) {
      var e = "function" == typeof n ? n : i(n),
          r = null == t ? m : "function" == typeof t ? t : y(t);return this.select(function () {
        return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
      });
    }, remove: function remove() {
      return this.each(v);
    }, datum: function datum(n) {
      return arguments.length ? this.property("__data__", n) : this.node().__data__;
    }, on: function on(n, t, e) {
      var r,
          i,
          o = l(n + ""),
          u = o.length;{
        if (!(arguments.length < 2)) {
          for (a = t ? c : s, null == e && (e = !1), r = 0; r < u; ++r) {
            this.each(a(o[r], t, e));
          }return this;
        }var a = this.node().__on;if (a) for (var f, h = 0, p = a.length; h < p; ++h) {
          for (r = 0, f = a[h]; r < u; ++r) {
            if ((i = o[r]).type === f.type && i.name === f.name) return f.value;
          }
        }
      }
    }, dispatch: function dispatch(n, t) {
      return this.each(("function" == typeof t ? p : h)(n, t));
    } };en.prototype = rn.prototype = { constructor: en, has: function has(n) {
      return "$" + n in this;
    }, get: function get(n) {
      return this["$" + n];
    }, set: function set(n, t) {
      return this["$" + n] = t, this;
    }, remove: function remove(n) {
      var t = "$" + n;return t in this && delete this[t];
    }, clear: function clear() {
      for (var n in this) {
        "$" === n[0] && delete this[n];
      }
    }, keys: function keys() {
      var n = [];for (var t in this) {
        "$" === t[0] && n.push(t.slice(1));
      }return n;
    }, values: function values() {
      var n = [];for (var t in this) {
        "$" === t[0] && n.push(this[t]);
      }return n;
    }, entries: function entries() {
      var n = [];for (var t in this) {
        "$" === t[0] && n.push({ key: t.slice(1), value: this[t] });
      }return n;
    }, size: function size() {
      var n = 0;for (var t in this) {
        "$" === t[0] && ++n;
      }return n;
    }, empty: function empty() {
      for (var n in this) {
        if ("$" === n[0]) return !1;
      }return !0;
    }, each: function each(n) {
      for (var t in this) {
        "$" === t[0] && n(this[t], t.slice(1), this);
      }
    } };rn.prototype;var kn = { value: function value() {} };un.prototype = on.prototype = { constructor: un, on: function on(n, t) {
      var e,
          r = this._,
          i = ln(n + "", r),
          o = -1,
          u = i.length;{
        if (!(arguments.length < 2)) {
          if (null != t && "function" != typeof t) throw new Error("invalid callback: " + t);for (; ++o < u;) {
            if (e = (n = i[o]).type) r[e] = cn(r[e], n.name, t);else if (null == t) for (e in r) {
              r[e] = cn(r[e], n.name, null);
            }
          }return this;
        }for (; ++o < u;) {
          if ((e = (n = i[o]).type) && (e = sn(r[e], n.name))) return e;
        }
      }
    }, copy: function copy() {
      var n = {},
          t = this._;for (var e in t) {
        n[e] = t[e].slice();
      }return new un(n);
    }, call: function call(n, t) {
      if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), o = 0; o < e; ++o) {
        i[o] = arguments[o + 2];
      }if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);for (o = 0, e = (r = this._[n]).length; o < e; ++o) {
        r[o].value.apply(t, i);
      }
    }, apply: function apply(n, t, e) {
      if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);for (var r = this._[n], i = 0, o = r.length; i < o; ++i) {
        r[i].value.apply(t, e);
      }
    } };var qn = function (n, t) {
    return function (e, r) {
      var i = an(e).mimeType(n).response(t);if (null != r) {
        if ("function" != typeof r) throw new Error("invalid callback: " + r);return i.get(r);
      }return i;
    };
  }("text/plain", function (n) {
    return n.responseText;
  }),
      Mn = yn(",").parse,
      Pn = (yn("\t"), function (n, t) {
    return function (e, r, i) {
      arguments.length < 3 && (i = r, r = null);var o = an(e).mimeType(n);return o.row = function (n) {
        return arguments.length ? o.response(mn(t, r = n)) : r;
      }, o.row(r), i ? o.get(i) : o;
    };
  }("text/csv", Mn));!function (n) {
    1 === n.length && (n = gn(n));
  }(_n);n.select = function (n) {
    return "string" == typeof n ? new tn([[document.querySelector(n)]], [document.documentElement]) : new tn([[n]], On);
  }, n.selectAll = function (n) {
    return "string" == typeof n ? new tn([document.querySelectorAll(n)], [document.documentElement]) : new tn([null == n ? [] : n], On);
  }, n.csv = Pn, n.text = qn, n.max = function (n, t) {
    var e,
        r,
        i = n.length,
        o = -1;if (null == t) {
      for (; ++o < i;) {
        if (null != (e = n[o]) && e >= e) for (r = e; ++o < i;) {
          null != (e = n[o]) && e > r && (r = e);
        }
      }
    } else for (; ++o < i;) {
      if (null != (e = t(n[o], o, n)) && e >= e) for (r = e; ++o < i;) {
        null != (e = t(n[o], o, n)) && e > r && (r = e);
      }
    }return r;
  }, n.min = function (n, t) {
    var e,
        r,
        i = n.length,
        o = -1;if (null == t) {
      for (; ++o < i;) {
        if (null != (e = n[o]) && e >= e) for (r = e; ++o < i;) {
          null != (e = n[o]) && r > e && (r = e);
        }
      }
    } else for (; ++o < i;) {
      if (null != (e = t(n[o], o, n)) && e >= e) for (r = e; ++o < i;) {
        null != (e = t(n[o], o, n)) && r > e && (r = e);
      }
    }return r;
  }, n.sum = function (n, t) {
    var e,
        r = n.length,
        i = -1,
        o = 0;if (null == t) for (; ++i < r;) {
      (e = +n[i]) && (o += e);
    } else for (; ++i < r;) {
      (e = +t(n[i], i, n)) && (o += e);
    }return o;
  };
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _frequencyDistData = __webpack_require__(2);

var _memorySpanForDigits = __webpack_require__(4);

(0, _memorySpanForDigits.memorySpan)();
(0, _frequencyDistData.frequencyData)();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.frequencyData = undefined;

var _FrequencyDistTable = __webpack_require__(3);

var d3 = __webpack_require__(0);

/*
 * Frequency Distribution Tables – How frequently is data distributed at each measure?
 *
 * The first column contains the measure ordered from highest to lowest, the second column contains the number of cases of that measure.
 * Use the symbol N to represent the total number of cases in a group.
 */

var frequencyData = exports.frequencyData = function frequencyData() {
  d3.csv('../data/scores.csv', function (error, data) {
    if (error) throw error;

    d3.text('src/template/table.html', function (str) {
      d3.select('.container').append('div').attr('id', 'freq-table').html(str);

      new _FrequencyDistTable.FrequencyDistTable('#freq-table tbody', data, '#freq-table', 'SCORE', 'Table 2.1   /   Simple Frequency Distribution of Anxiety Scores for 100 College Students', 'Ahana, E. Y. A study on the reliability and internal consistency of a manifest anxiety scale. M.A. thesis, Northwestern Univeristy, 1952.').init();
    });
  });
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
exports.memorySpan = undefined;

var _TwoGroupsTable = __webpack_require__(5);

var d3 = __webpack_require__(0);

var memorySpan = exports.memorySpan = function memorySpan() {
  d3.csv('../data/memory-span.csv', function (error, data) {
    if (error) throw error;

    d3.text('src/template/table.html', function (str) {
      d3.select('.container').append('div').attr('id', 'table').html(str);

      new _TwoGroupsTable.TwoGroupsTable('#table tbody', data, '#table', 'Table 1.1  /  Scores Made by the Neutral and the Anxious Group on Memory Span for Digits', 'Moldawsky, S., and Moldawsky, P.C. Digit span as an anxiety indicator. J. consult. Psychol., 1952, 16, 115-118. Raw data courtesy of the authors.').init();
    });
  });
};

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