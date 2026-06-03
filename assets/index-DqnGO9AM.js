var lc = e => {
    throw TypeError(e)
}
;
var el = (e, t, n) => t.has(e) || lc("Cannot " + n);
var P = (e, t, n) => (el(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , q = (e, t, n) => t.has(e) ? lc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , H = (e, t, n, r) => (el(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , ke = (e, t, n) => (el(e, t, "access private method"),
n);
var oi = (e, t, n, r) => ({
    set _(o) {
        H(e, t, o, n)
    },
    get _() {
        return P(e, t, r)
    }
});
function g0(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function mf(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var vf = {
    exports: {}
}
  , ws = {}
  , gf = {
    exports: {}
}
  , Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ko = Symbol.for("react.element")
  , y0 = Symbol.for("react.portal")
  , x0 = Symbol.for("react.fragment")
  , w0 = Symbol.for("react.strict_mode")
  , S0 = Symbol.for("react.profiler")
  , b0 = Symbol.for("react.provider")
  , E0 = Symbol.for("react.context")
  , C0 = Symbol.for("react.forward_ref")
  , k0 = Symbol.for("react.suspense")
  , N0 = Symbol.for("react.memo")
  , P0 = Symbol.for("react.lazy")
  , ac = Symbol.iterator;
function T0(e) {
    return e === null || typeof e != "object" ? null : (e = ac && e[ac] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var yf = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , xf = Object.assign
  , wf = {};
function Qr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = wf,
    this.updater = n || yf
}
Qr.prototype.isReactComponent = {};
Qr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Qr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Sf() {}
Sf.prototype = Qr.prototype;
function Ha(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = wf,
    this.updater = n || yf
}
var Wa = Ha.prototype = new Sf;
Wa.constructor = Ha;
xf(Wa, Qr.prototype);
Wa.isPureReactComponent = !0;
var uc = Array.isArray
  , bf = Object.prototype.hasOwnProperty
  , Qa = {
    current: null
}
  , Ef = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Cf(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            bf.call(t, r) && !Ef.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        o.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: Ko,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Qa.current
    }
}
function j0(e, t) {
    return {
        $$typeof: Ko,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Ka(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ko
}
function R0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var cc = /\/+/g;
function tl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? R0("" + e.key) : t.toString(36)
}
function Pi(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Ko:
            case y0:
                s = !0
            }
        }
    if (s)
        return s = e,
        o = o(s),
        e = r === "" ? "." + tl(s, 0) : r,
        uc(o) ? (n = "",
        e != null && (n = e.replace(cc, "$&/") + "/"),
        Pi(o, t, n, "", function(u) {
            return u
        })) : o != null && (Ka(o) && (o = j0(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(cc, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    uc(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var a = r + tl(i, l);
            s += Pi(i, t, n, a, o)
        }
    else if (a = T0(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(i = e.next()).done; )
            i = i.value,
            a = r + tl(i, l++),
            s += Pi(i, t, n, a, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function ii(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Pi(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function M0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var De = {
    current: null
}
  , Ti = {
    transition: null
}
  , O0 = {
    ReactCurrentDispatcher: De,
    ReactCurrentBatchConfig: Ti,
    ReactCurrentOwner: Qa
};
function kf() {
    throw Error("act(...) is not supported in production builds of React.")
}
Y.Children = {
    map: ii,
    forEach: function(e, t, n) {
        ii(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ii(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return ii(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Ka(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Y.Component = Qr;
Y.Fragment = x0;
Y.Profiler = S0;
Y.PureComponent = Ha;
Y.StrictMode = w0;
Y.Suspense = k0;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O0;
Y.act = kf;
Y.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = xf({}, e.props)
      , o = e.key
      , i = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        s = Qa.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            bf.call(t, a) && !Ef.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: Ko,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
;
Y.createContext = function(e) {
    return e = {
        $$typeof: E0,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: b0,
        _context: e
    },
    e.Consumer = e
}
;
Y.createElement = Cf;
Y.createFactory = function(e) {
    var t = Cf.bind(null, e);
    return t.type = e,
    t
}
;
Y.createRef = function() {
    return {
        current: null
    }
}
;
Y.forwardRef = function(e) {
    return {
        $$typeof: C0,
        render: e
    }
}
;
Y.isValidElement = Ka;
Y.lazy = function(e) {
    return {
        $$typeof: P0,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: M0
    }
}
;
Y.memo = function(e, t) {
    return {
        $$typeof: N0,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
Y.startTransition = function(e) {
    var t = Ti.transition;
    Ti.transition = {};
    try {
        e()
    } finally {
        Ti.transition = t
    }
}
;
Y.unstable_act = kf;
Y.useCallback = function(e, t) {
    return De.current.useCallback(e, t)
}
;
Y.useContext = function(e) {
    return De.current.useContext(e)
}
;
Y.useDebugValue = function() {}
;
Y.useDeferredValue = function(e) {
    return De.current.useDeferredValue(e)
}
;
Y.useEffect = function(e, t) {
    return De.current.useEffect(e, t)
}
;
Y.useId = function() {
    return De.current.useId()
}
;
Y.useImperativeHandle = function(e, t, n) {
    return De.current.useImperativeHandle(e, t, n)
}
;
Y.useInsertionEffect = function(e, t) {
    return De.current.useInsertionEffect(e, t)
}
;
Y.useLayoutEffect = function(e, t) {
    return De.current.useLayoutEffect(e, t)
}
;
Y.useMemo = function(e, t) {
    return De.current.useMemo(e, t)
}
;
Y.useReducer = function(e, t, n) {
    return De.current.useReducer(e, t, n)
}
;
Y.useRef = function(e) {
    return De.current.useRef(e)
}
;
Y.useState = function(e) {
    return De.current.useState(e)
}
;
Y.useSyncExternalStore = function(e, t, n) {
    return De.current.useSyncExternalStore(e, t, n)
}
;
Y.useTransition = function() {
    return De.current.useTransition()
}
;
Y.version = "18.3.1";
gf.exports = Y;
var x = gf.exports;
const M = mf(x)
  , _0 = g0({
    __proto__: null,
    default: M
}, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var A0 = x
  , D0 = Symbol.for("react.element")
  , L0 = Symbol.for("react.fragment")
  , I0 = Object.prototype.hasOwnProperty
  , z0 = A0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , F0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Nf(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        I0.call(t, r) && !F0.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: D0,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: z0.current
    }
}
ws.Fragment = L0;
ws.jsx = Nf;
ws.jsxs = Nf;
vf.exports = ws;
var f = vf.exports
  , Pf = {
    exports: {}
}
  , Je = {}
  , Tf = {
    exports: {}
}
  , jf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(C, R) {
        var z = C.length;
        C.push(R);
        e: for (; 0 < z; ) {
            var D = z - 1 >>> 1
              , F = C[D];
            if (0 < o(F, R))
                C[D] = R,
                C[z] = F,
                z = D;
            else
                break e
        }
    }
    function n(C) {
        return C.length === 0 ? null : C[0]
    }
    function r(C) {
        if (C.length === 0)
            return null;
        var R = C[0]
          , z = C.pop();
        if (z !== R) {
            C[0] = z;
            e: for (var D = 0, F = C.length, G = F >>> 1; D < G; ) {
                var le = 2 * (D + 1) - 1
                  , He = C[le]
                  , Z = le + 1
                  , at = C[Z];
                if (0 > o(He, z))
                    Z < F && 0 > o(at, He) ? (C[D] = at,
                    C[Z] = z,
                    D = Z) : (C[D] = He,
                    C[le] = z,
                    D = le);
                else if (Z < F && 0 > o(at, z))
                    C[D] = at,
                    C[Z] = z,
                    D = Z;
                else
                    break e
            }
        }
        return R
    }
    function o(C, R) {
        var z = C.sortIndex - R.sortIndex;
        return z !== 0 ? z : C.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = []
      , u = []
      , p = 1
      , d = null
      , c = 3
      , y = !1
      , w = !1
      , g = !1
      , S = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(C) {
        for (var R = n(u); R !== null; ) {
            if (R.callback === null)
                r(u);
            else if (R.startTime <= C)
                r(u),
                R.sortIndex = R.expirationTime,
                t(a, R);
            else
                break;
            R = n(u)
        }
    }
    function b(C) {
        if (g = !1,
        v(C),
        !w)
            if (n(a) !== null)
                w = !0,
                B(E);
            else {
                var R = n(u);
                R !== null && K(b, R.startTime - C)
            }
    }
    function E(C, R) {
        w = !1,
        g && (g = !1,
        m(T),
        T = -1),
        y = !0;
        var z = c;
        try {
            for (v(R),
            d = n(a); d !== null && (!(d.expirationTime > R) || C && !$()); ) {
                var D = d.callback;
                if (typeof D == "function") {
                    d.callback = null,
                    c = d.priorityLevel;
                    var F = D(d.expirationTime <= R);
                    R = e.unstable_now(),
                    typeof F == "function" ? d.callback = F : d === n(a) && r(a),
                    v(R)
                } else
                    r(a);
                d = n(a)
            }
            if (d !== null)
                var G = !0;
            else {
                var le = n(u);
                le !== null && K(b, le.startTime - R),
                G = !1
            }
            return G
        } finally {
            d = null,
            c = z,
            y = !1
        }
    }
    var k = !1
      , N = null
      , T = -1
      , L = 5
      , O = -1;
    function $() {
        return !(e.unstable_now() - O < L)
    }
    function I() {
        if (N !== null) {
            var C = e.unstable_now();
            O = C;
            var R = !0;
            try {
                R = N(!0, C)
            } finally {
                R ? W() : (k = !1,
                N = null)
            }
        } else
            k = !1
    }
    var W;
    if (typeof h == "function")
        W = function() {
            h(I)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var _ = new MessageChannel
          , Q = _.port2;
        _.port1.onmessage = I,
        W = function() {
            Q.postMessage(null)
        }
    } else
        W = function() {
            S(I, 0)
        }
        ;
    function B(C) {
        N = C,
        k || (k = !0,
        W())
    }
    function K(C, R) {
        T = S(function() {
            C(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(C) {
        C.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || y || (w = !0,
        B(E))
    }
    ,
    e.unstable_forceFrameRate = function(C) {
        0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < C ? Math.floor(1e3 / C) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return c
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(C) {
        switch (c) {
        case 1:
        case 2:
        case 3:
            var R = 3;
            break;
        default:
            R = c
        }
        var z = c;
        c = R;
        try {
            return C()
        } finally {
            c = z
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(C, R) {
        switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            C = 3
        }
        var z = c;
        c = C;
        try {
            return R()
        } finally {
            c = z
        }
    }
    ,
    e.unstable_scheduleCallback = function(C, R, z) {
        var D = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay,
        z = typeof z == "number" && 0 < z ? D + z : D) : z = D,
        C) {
        case 1:
            var F = -1;
            break;
        case 2:
            F = 250;
            break;
        case 5:
            F = 1073741823;
            break;
        case 4:
            F = 1e4;
            break;
        default:
            F = 5e3
        }
        return F = z + F,
        C = {
            id: p++,
            callback: R,
            priorityLevel: C,
            startTime: z,
            expirationTime: F,
            sortIndex: -1
        },
        z > D ? (C.sortIndex = z,
        t(u, C),
        n(a) === null && C === n(u) && (g ? (m(T),
        T = -1) : g = !0,
        K(b, z - D))) : (C.sortIndex = F,
        t(a, C),
        w || y || (w = !0,
        B(E))),
        C
    }
    ,
    e.unstable_shouldYield = $,
    e.unstable_wrapCallback = function(C) {
        var R = c;
        return function() {
            var z = c;
            c = R;
            try {
                return C.apply(this, arguments)
            } finally {
                c = z
            }
        }
    }
}
)(jf);
Tf.exports = jf;
var $0 = Tf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B0 = x
  , Ze = $0;
function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Rf = new Set
  , Co = {};
function Jn(e, t) {
    Ir(e, t),
    Ir(e + "Capture", t)
}
function Ir(e, t) {
    for (Co[e] = t,
    e = 0; e < t.length; e++)
        Rf.add(t[e])
}
var Bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Ll = Object.prototype.hasOwnProperty
  , U0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , dc = {}
  , fc = {};
function V0(e) {
    return Ll.call(fc, e) ? !0 : Ll.call(dc, e) ? !1 : U0.test(e) ? fc[e] = !0 : (dc[e] = !0,
    !1)
}
function H0(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function W0(e, t, n, r) {
    if (t === null || typeof t > "u" || H0(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Le(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ee[e] = new Le(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ee[t] = new Le(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ee[e] = new Le(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ee[e] = new Le(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ee[e] = new Le(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ee[e] = new Le(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ee[e] = new Le(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ee[e] = new Le(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ee[e] = new Le(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Ya = /[\-:]([a-z])/g;
function Ga(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Ya, Ga);
    Ee[t] = new Le(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ya, Ga);
    Ee[t] = new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Ya, Ga);
    Ee[t] = new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ee[e] = new Le(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ee.xlinkHref = new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ee[e] = new Le(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Xa(e, t, n, r) {
    var o = Ee.hasOwnProperty(t) ? Ee[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (W0(t, n, o, r) && (n = null),
    r || o === null ? V0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Kt = B0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , si = Symbol.for("react.element")
  , lr = Symbol.for("react.portal")
  , ar = Symbol.for("react.fragment")
  , qa = Symbol.for("react.strict_mode")
  , Il = Symbol.for("react.profiler")
  , Mf = Symbol.for("react.provider")
  , Of = Symbol.for("react.context")
  , Za = Symbol.for("react.forward_ref")
  , zl = Symbol.for("react.suspense")
  , Fl = Symbol.for("react.suspense_list")
  , Ja = Symbol.for("react.memo")
  , rn = Symbol.for("react.lazy")
  , _f = Symbol.for("react.offscreen")
  , pc = Symbol.iterator;
function Jr(e) {
    return e === null || typeof e != "object" ? null : (e = pc && e[pc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ce = Object.assign, nl;
function uo(e) {
    if (nl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            nl = t && t[1] || ""
        }
    return `
` + nl + e
}
var rl = !1;
function ol(e, t) {
    if (!e || rl)
        return "";
    rl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (o[s] !== i[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || o[s] !== i[l]) {
                                var a = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        rl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? uo(e) : ""
}
function Q0(e) {
    switch (e.tag) {
    case 5:
        return uo(e.type);
    case 16:
        return uo("Lazy");
    case 13:
        return uo("Suspense");
    case 19:
        return uo("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = ol(e.type, !1),
        e;
    case 11:
        return e = ol(e.type.render, !1),
        e;
    case 1:
        return e = ol(e.type, !0),
        e;
    default:
        return ""
    }
}
function $l(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case ar:
        return "Fragment";
    case lr:
        return "Portal";
    case Il:
        return "Profiler";
    case qa:
        return "StrictMode";
    case zl:
        return "Suspense";
    case Fl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Of:
            return (e.displayName || "Context") + ".Consumer";
        case Mf:
            return (e._context.displayName || "Context") + ".Provider";
        case Za:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Ja:
            return t = e.displayName || null,
            t !== null ? t : $l(e.type) || "Memo";
        case rn:
            t = e._payload,
            e = e._init;
            try {
                return $l(e(t))
            } catch {}
        }
    return null
}
function K0(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return $l(t);
    case 8:
        return t === qa ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Cn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Af(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Y0(e) {
    var t = Af(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function li(e) {
    e._valueTracker || (e._valueTracker = Y0(e))
}
function Df(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Af(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Ui(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Bl(e, t) {
    var n = t.checked;
    return ce({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function hc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Cn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Lf(e, t) {
    t = t.checked,
    t != null && Xa(e, "checked", t, !1)
}
function Ul(e, t) {
    Lf(e, t);
    var n = Cn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Vl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Vl(e, t.type, Cn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function mc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Vl(e, t, n) {
    (t !== "number" || Ui(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var co = Array.isArray;
function xr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Cn(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Hl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(j(91));
    return ce({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function vc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(j(92));
            if (co(n)) {
                if (1 < n.length)
                    throw Error(j(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Cn(n)
    }
}
function If(e, t) {
    var n = Cn(t.value)
      , r = Cn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function gc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function zf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Wl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? zf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ai, Ff = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (ai = ai || document.createElement("div"),
        ai.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = ai.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function ko(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var ho = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , G0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ho).forEach(function(e) {
    G0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        ho[t] = ho[e]
    })
});
function $f(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ho.hasOwnProperty(e) && ho[e] ? ("" + t).trim() : t + "px"
}
function Bf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = $f(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var X0 = ce({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Ql(e, t) {
    if (t) {
        if (X0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(j(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(j(62))
    }
}
function Kl(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Yl = null;
function eu(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Gl = null
  , wr = null
  , Sr = null;
function yc(e) {
    if (e = Xo(e)) {
        if (typeof Gl != "function")
            throw Error(j(280));
        var t = e.stateNode;
        t && (t = ks(t),
        Gl(e.stateNode, e.type, t))
    }
}
function Uf(e) {
    wr ? Sr ? Sr.push(e) : Sr = [e] : wr = e
}
function Vf() {
    if (wr) {
        var e = wr
          , t = Sr;
        if (Sr = wr = null,
        yc(e),
        t)
            for (e = 0; e < t.length; e++)
                yc(t[e])
    }
}
function Hf(e, t) {
    return e(t)
}
function Wf() {}
var il = !1;
function Qf(e, t, n) {
    if (il)
        return e(t, n);
    il = !0;
    try {
        return Hf(e, t, n)
    } finally {
        il = !1,
        (wr !== null || Sr !== null) && (Wf(),
        Vf())
    }
}
function No(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = ks(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(j(231, t, typeof n));
    return n
}
var Xl = !1;
if (Bt)
    try {
        var eo = {};
        Object.defineProperty(eo, "passive", {
            get: function() {
                Xl = !0
            }
        }),
        window.addEventListener("test", eo, eo),
        window.removeEventListener("test", eo, eo)
    } catch {
        Xl = !1
    }
function q0(e, t, n, r, o, i, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (p) {
        this.onError(p)
    }
}
var mo = !1
  , Vi = null
  , Hi = !1
  , ql = null
  , Z0 = {
    onError: function(e) {
        mo = !0,
        Vi = e
    }
};
function J0(e, t, n, r, o, i, s, l, a) {
    mo = !1,
    Vi = null,
    q0.apply(Z0, arguments)
}
function ev(e, t, n, r, o, i, s, l, a) {
    if (J0.apply(this, arguments),
    mo) {
        if (mo) {
            var u = Vi;
            mo = !1,
            Vi = null
        } else
            throw Error(j(198));
        Hi || (Hi = !0,
        ql = u)
    }
}
function er(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Kf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function xc(e) {
    if (er(e) !== e)
        throw Error(j(188))
}
function tv(e) {
    var t = e.alternate;
    if (!t) {
        if (t = er(e),
        t === null)
            throw Error(j(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return xc(o),
                    e;
                if (i === r)
                    return xc(o),
                    t;
                i = i.sibling
            }
            throw Error(j(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var s = !1, l = o.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = o,
                    r = i;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = o,
                    n = i;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = i.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = i,
                        n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(j(189))
            }
        }
        if (n.alternate !== r)
            throw Error(j(190))
    }
    if (n.tag !== 3)
        throw Error(j(188));
    return n.stateNode.current === n ? e : t
}
function Yf(e) {
    return e = tv(e),
    e !== null ? Gf(e) : null
}
function Gf(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Gf(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Xf = Ze.unstable_scheduleCallback
  , wc = Ze.unstable_cancelCallback
  , nv = Ze.unstable_shouldYield
  , rv = Ze.unstable_requestPaint
  , pe = Ze.unstable_now
  , ov = Ze.unstable_getCurrentPriorityLevel
  , tu = Ze.unstable_ImmediatePriority
  , qf = Ze.unstable_UserBlockingPriority
  , Wi = Ze.unstable_NormalPriority
  , iv = Ze.unstable_LowPriority
  , Zf = Ze.unstable_IdlePriority
  , Ss = null
  , jt = null;
function sv(e) {
    if (jt && typeof jt.onCommitFiberRoot == "function")
        try {
            jt.onCommitFiberRoot(Ss, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var mt = Math.clz32 ? Math.clz32 : uv
  , lv = Math.log
  , av = Math.LN2;
function uv(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (lv(e) / av | 0) | 0
}
var ui = 64
  , ci = 4194304;
function fo(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Qi(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? r = fo(l) : (i &= s,
        i !== 0 && (r = fo(i)))
    } else
        s = n & ~o,
        s !== 0 ? r = fo(s) : i !== 0 && (r = fo(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - mt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function cv(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function dv(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - mt(i)
          , l = 1 << s
          , a = o[s];
        a === -1 ? (!(l & n) || l & r) && (o[s] = cv(l, t)) : a <= t && (e.expiredLanes |= l),
        i &= ~l
    }
}
function Zl(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Jf() {
    var e = ui;
    return ui <<= 1,
    !(ui & 4194240) && (ui = 64),
    e
}
function sl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Yo(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - mt(t),
    e[t] = n
}
function fv(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - mt(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function nu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - mt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var J = 0;
function ep(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var tp, ru, np, rp, op, Jl = !1, di = [], vn = null, gn = null, yn = null, Po = new Map, To = new Map, sn = [], pv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        vn = null;
        break;
    case "dragenter":
    case "dragleave":
        gn = null;
        break;
    case "mouseover":
    case "mouseout":
        yn = null;
        break;
    case "pointerover":
    case "pointerout":
        Po.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        To.delete(t.pointerId)
    }
}
function to(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = Xo(t),
    t !== null && ru(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function hv(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return vn = to(vn, e, t, n, r, o),
        !0;
    case "dragenter":
        return gn = to(gn, e, t, n, r, o),
        !0;
    case "mouseover":
        return yn = to(yn, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return Po.set(i, to(Po.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        To.set(i, to(To.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function ip(e) {
    var t = Ln(e.target);
    if (t !== null) {
        var n = er(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Kf(n),
                t !== null) {
                    e.blockedOn = t,
                    op(e.priority, function() {
                        np(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ji(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ea(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Yl = r,
            n.target.dispatchEvent(r),
            Yl = null
        } else
            return t = Xo(n),
            t !== null && ru(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function bc(e, t, n) {
    ji(e) && n.delete(t)
}
function mv() {
    Jl = !1,
    vn !== null && ji(vn) && (vn = null),
    gn !== null && ji(gn) && (gn = null),
    yn !== null && ji(yn) && (yn = null),
    Po.forEach(bc),
    To.forEach(bc)
}
function no(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Jl || (Jl = !0,
    Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, mv)))
}
function jo(e) {
    function t(o) {
        return no(o, e)
    }
    if (0 < di.length) {
        no(di[0], e);
        for (var n = 1; n < di.length; n++) {
            var r = di[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (vn !== null && no(vn, e),
    gn !== null && no(gn, e),
    yn !== null && no(yn, e),
    Po.forEach(t),
    To.forEach(t),
    n = 0; n < sn.length; n++)
        r = sn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < sn.length && (n = sn[0],
    n.blockedOn === null); )
        ip(n),
        n.blockedOn === null && sn.shift()
}
var br = Kt.ReactCurrentBatchConfig
  , Ki = !0;
function vv(e, t, n, r) {
    var o = J
      , i = br.transition;
    br.transition = null;
    try {
        J = 1,
        ou(e, t, n, r)
    } finally {
        J = o,
        br.transition = i
    }
}
function gv(e, t, n, r) {
    var o = J
      , i = br.transition;
    br.transition = null;
    try {
        J = 4,
        ou(e, t, n, r)
    } finally {
        J = o,
        br.transition = i
    }
}
function ou(e, t, n, r) {
    if (Ki) {
        var o = ea(e, t, n, r);
        if (o === null)
            vl(e, t, r, Yi, n),
            Sc(e, r);
        else if (hv(o, e, t, n, r))
            r.stopPropagation();
        else if (Sc(e, r),
        t & 4 && -1 < pv.indexOf(e)) {
            for (; o !== null; ) {
                var i = Xo(o);
                if (i !== null && tp(i),
                i = ea(e, t, n, r),
                i === null && vl(e, t, r, Yi, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            vl(e, t, r, null, n)
    }
}
var Yi = null;
function ea(e, t, n, r) {
    if (Yi = null,
    e = eu(r),
    e = Ln(e),
    e !== null)
        if (t = er(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Kf(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Yi = e,
    null
}
function sp(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (ov()) {
        case tu:
            return 1;
        case qf:
            return 4;
        case Wi:
        case iv:
            return 16;
        case Zf:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var pn = null
  , iu = null
  , Ri = null;
function lp() {
    if (Ri)
        return Ri;
    var e, t = iu, n = t.length, r, o = "value"in pn ? pn.value : pn.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return Ri = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Mi(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function fi() {
    return !0
}
function Ec() {
    return !1
}
function et(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? fi : Ec,
        this.isPropagationStopped = Ec,
        this
    }
    return ce(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = fi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = fi)
        },
        persist: function() {},
        isPersistent: fi
    }),
    t
}
var Kr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, su = et(Kr), Go = ce({}, Kr, {
    view: 0,
    detail: 0
}), yv = et(Go), ll, al, ro, bs = ce({}, Go, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: lu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== ro && (ro && e.type === "mousemove" ? (ll = e.screenX - ro.screenX,
        al = e.screenY - ro.screenY) : al = ll = 0,
        ro = e),
        ll)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : al
    }
}), Cc = et(bs), xv = ce({}, bs, {
    dataTransfer: 0
}), wv = et(xv), Sv = ce({}, Go, {
    relatedTarget: 0
}), ul = et(Sv), bv = ce({}, Kr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Ev = et(bv), Cv = ce({}, Kr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), kv = et(Cv), Nv = ce({}, Kr, {
    data: 0
}), kc = et(Nv), Pv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Tv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, jv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Rv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = jv[e]) ? !!t[e] : !1
}
function lu() {
    return Rv
}
var Mv = ce({}, Go, {
    key: function(e) {
        if (e.key) {
            var t = Pv[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Mi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Tv[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: lu,
    charCode: function(e) {
        return e.type === "keypress" ? Mi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Mi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Ov = et(Mv)
  , _v = ce({}, bs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Nc = et(_v)
  , Av = ce({}, Go, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lu
})
  , Dv = et(Av)
  , Lv = ce({}, Kr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Iv = et(Lv)
  , zv = ce({}, bs, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Fv = et(zv)
  , $v = [9, 13, 27, 32]
  , au = Bt && "CompositionEvent"in window
  , vo = null;
Bt && "documentMode"in document && (vo = document.documentMode);
var Bv = Bt && "TextEvent"in window && !vo
  , ap = Bt && (!au || vo && 8 < vo && 11 >= vo)
  , Pc = " "
  , Tc = !1;
function up(e, t) {
    switch (e) {
    case "keyup":
        return $v.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function cp(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var ur = !1;
function Uv(e, t) {
    switch (e) {
    case "compositionend":
        return cp(t);
    case "keypress":
        return t.which !== 32 ? null : (Tc = !0,
        Pc);
    case "textInput":
        return e = t.data,
        e === Pc && Tc ? null : e;
    default:
        return null
    }
}
function Vv(e, t) {
    if (ur)
        return e === "compositionend" || !au && up(e, t) ? (e = lp(),
        Ri = iu = pn = null,
        ur = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return ap && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Hv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function jc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Hv[e.type] : t === "textarea"
}
function dp(e, t, n, r) {
    Uf(r),
    t = Gi(t, "onChange"),
    0 < t.length && (n = new su("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var go = null
  , Ro = null;
function Wv(e) {
    bp(e, 0)
}
function Es(e) {
    var t = fr(e);
    if (Df(t))
        return e
}
function Qv(e, t) {
    if (e === "change")
        return t
}
var fp = !1;
if (Bt) {
    var cl;
    if (Bt) {
        var dl = "oninput"in document;
        if (!dl) {
            var Rc = document.createElement("div");
            Rc.setAttribute("oninput", "return;"),
            dl = typeof Rc.oninput == "function"
        }
        cl = dl
    } else
        cl = !1;
    fp = cl && (!document.documentMode || 9 < document.documentMode)
}
function Mc() {
    go && (go.detachEvent("onpropertychange", pp),
    Ro = go = null)
}
function pp(e) {
    if (e.propertyName === "value" && Es(Ro)) {
        var t = [];
        dp(t, Ro, e, eu(e)),
        Qf(Wv, t)
    }
}
function Kv(e, t, n) {
    e === "focusin" ? (Mc(),
    go = t,
    Ro = n,
    go.attachEvent("onpropertychange", pp)) : e === "focusout" && Mc()
}
function Yv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Es(Ro)
}
function Gv(e, t) {
    if (e === "click")
        return Es(t)
}
function Xv(e, t) {
    if (e === "input" || e === "change")
        return Es(t)
}
function qv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var gt = typeof Object.is == "function" ? Object.is : qv;
function Mo(e, t) {
    if (gt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Ll.call(t, o) || !gt(e[o], t[o]))
            return !1
    }
    return !0
}
function Oc(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function _c(e, t) {
    var n = Oc(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Oc(n)
    }
}
function hp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? hp(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function mp() {
    for (var e = window, t = Ui(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ui(e.document)
    }
    return t
}
function uu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Zv(e) {
    var t = mp()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && hp(n.ownerDocument.documentElement, n)) {
        if (r !== null && uu(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = _c(n, i);
                var s = _c(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Jv = Bt && "documentMode"in document && 11 >= document.documentMode
  , cr = null
  , ta = null
  , yo = null
  , na = !1;
function Ac(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    na || cr == null || cr !== Ui(r) || (r = cr,
    "selectionStart"in r && uu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    yo && Mo(yo, r) || (yo = r,
    r = Gi(ta, "onSelect"),
    0 < r.length && (t = new su("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = cr)))
}
function pi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var dr = {
    animationend: pi("Animation", "AnimationEnd"),
    animationiteration: pi("Animation", "AnimationIteration"),
    animationstart: pi("Animation", "AnimationStart"),
    transitionend: pi("Transition", "TransitionEnd")
}
  , fl = {}
  , vp = {};
Bt && (vp = document.createElement("div").style,
"AnimationEvent"in window || (delete dr.animationend.animation,
delete dr.animationiteration.animation,
delete dr.animationstart.animation),
"TransitionEvent"in window || delete dr.transitionend.transition);
function Cs(e) {
    if (fl[e])
        return fl[e];
    if (!dr[e])
        return e;
    var t = dr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in vp)
            return fl[e] = t[n];
    return e
}
var gp = Cs("animationend")
  , yp = Cs("animationiteration")
  , xp = Cs("animationstart")
  , wp = Cs("transitionend")
  , Sp = new Map
  , Dc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Rn(e, t) {
    Sp.set(e, t),
    Jn(t, [e])
}
for (var pl = 0; pl < Dc.length; pl++) {
    var hl = Dc[pl]
      , eg = hl.toLowerCase()
      , tg = hl[0].toUpperCase() + hl.slice(1);
    Rn(eg, "on" + tg)
}
Rn(gp, "onAnimationEnd");
Rn(yp, "onAnimationIteration");
Rn(xp, "onAnimationStart");
Rn("dblclick", "onDoubleClick");
Rn("focusin", "onFocus");
Rn("focusout", "onBlur");
Rn(wp, "onTransitionEnd");
Ir("onMouseEnter", ["mouseout", "mouseover"]);
Ir("onMouseLeave", ["mouseout", "mouseover"]);
Ir("onPointerEnter", ["pointerout", "pointerover"]);
Ir("onPointerLeave", ["pointerout", "pointerover"]);
Jn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Jn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Jn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Jn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var po = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , ng = new Set("cancel close invalid load scroll toggle".split(" ").concat(po));
function Lc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    ev(r, t, void 0, e),
    e.currentTarget = null
}
function bp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    Lc(o, l, u),
                    i = a
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    Lc(o, l, u),
                    i = a
                }
        }
    }
    if (Hi)
        throw e = ql,
        Hi = !1,
        ql = null,
        e
}
function oe(e, t) {
    var n = t[la];
    n === void 0 && (n = t[la] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Ep(t, e, 2, !1),
    n.add(r))
}
function ml(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Ep(n, e, r, t)
}
var hi = "_reactListening" + Math.random().toString(36).slice(2);
function Oo(e) {
    if (!e[hi]) {
        e[hi] = !0,
        Rf.forEach(function(n) {
            n !== "selectionchange" && (ng.has(n) || ml(n, !1, e),
            ml(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[hi] || (t[hi] = !0,
        ml("selectionchange", !1, t))
    }
}
function Ep(e, t, n, r) {
    switch (sp(t)) {
    case 1:
        var o = vv;
        break;
    case 4:
        o = gv;
        break;
    default:
        o = ou
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !Xl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function vl(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || l.nodeType === 8 && l.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === o || a.nodeType === 8 && a.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = Ln(l),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        r = i = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    Qf(function() {
        var u = i
          , p = eu(n)
          , d = [];
        e: {
            var c = Sp.get(e);
            if (c !== void 0) {
                var y = su
                  , w = e;
                switch (e) {
                case "keypress":
                    if (Mi(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    y = Ov;
                    break;
                case "focusin":
                    w = "focus",
                    y = ul;
                    break;
                case "focusout":
                    w = "blur",
                    y = ul;
                    break;
                case "beforeblur":
                case "afterblur":
                    y = ul;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    y = Cc;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    y = wv;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    y = Dv;
                    break;
                case gp:
                case yp:
                case xp:
                    y = Ev;
                    break;
                case wp:
                    y = Iv;
                    break;
                case "scroll":
                    y = yv;
                    break;
                case "wheel":
                    y = Fv;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    y = kv;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    y = Nc
                }
                var g = (t & 4) !== 0
                  , S = !g && e === "scroll"
                  , m = g ? c !== null ? c + "Capture" : null : c;
                g = [];
                for (var h = u, v; h !== null; ) {
                    v = h;
                    var b = v.stateNode;
                    if (v.tag === 5 && b !== null && (v = b,
                    m !== null && (b = No(h, m),
                    b != null && g.push(_o(h, b, v)))),
                    S)
                        break;
                    h = h.return
                }
                0 < g.length && (c = new y(c,w,null,n,p),
                d.push({
                    event: c,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (c = e === "mouseover" || e === "pointerover",
                y = e === "mouseout" || e === "pointerout",
                c && n !== Yl && (w = n.relatedTarget || n.fromElement) && (Ln(w) || w[Ut]))
                    break e;
                if ((y || c) && (c = p.window === p ? p : (c = p.ownerDocument) ? c.defaultView || c.parentWindow : window,
                y ? (w = n.relatedTarget || n.toElement,
                y = u,
                w = w ? Ln(w) : null,
                w !== null && (S = er(w),
                w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null,
                w = u),
                y !== w)) {
                    if (g = Cc,
                    b = "onMouseLeave",
                    m = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (g = Nc,
                    b = "onPointerLeave",
                    m = "onPointerEnter",
                    h = "pointer"),
                    S = y == null ? c : fr(y),
                    v = w == null ? c : fr(w),
                    c = new g(b,h + "leave",y,n,p),
                    c.target = S,
                    c.relatedTarget = v,
                    b = null,
                    Ln(p) === u && (g = new g(m,h + "enter",w,n,p),
                    g.target = v,
                    g.relatedTarget = S,
                    b = g),
                    S = b,
                    y && w)
                        t: {
                            for (g = y,
                            m = w,
                            h = 0,
                            v = g; v; v = sr(v))
                                h++;
                            for (v = 0,
                            b = m; b; b = sr(b))
                                v++;
                            for (; 0 < h - v; )
                                g = sr(g),
                                h--;
                            for (; 0 < v - h; )
                                m = sr(m),
                                v--;
                            for (; h--; ) {
                                if (g === m || m !== null && g === m.alternate)
                                    break t;
                                g = sr(g),
                                m = sr(m)
                            }
                            g = null
                        }
                    else
                        g = null;
                    y !== null && Ic(d, c, y, g, !1),
                    w !== null && S !== null && Ic(d, S, w, g, !0)
                }
            }
            e: {
                if (c = u ? fr(u) : window,
                y = c.nodeName && c.nodeName.toLowerCase(),
                y === "select" || y === "input" && c.type === "file")
                    var E = Qv;
                else if (jc(c))
                    if (fp)
                        E = Xv;
                    else {
                        E = Yv;
                        var k = Kv
                    }
                else
                    (y = c.nodeName) && y.toLowerCase() === "input" && (c.type === "checkbox" || c.type === "radio") && (E = Gv);
                if (E && (E = E(e, u))) {
                    dp(d, E, n, p);
                    break e
                }
                k && k(e, c, u),
                e === "focusout" && (k = c._wrapperState) && k.controlled && c.type === "number" && Vl(c, "number", c.value)
            }
            switch (k = u ? fr(u) : window,
            e) {
            case "focusin":
                (jc(k) || k.contentEditable === "true") && (cr = k,
                ta = u,
                yo = null);
                break;
            case "focusout":
                yo = ta = cr = null;
                break;
            case "mousedown":
                na = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                na = !1,
                Ac(d, n, p);
                break;
            case "selectionchange":
                if (Jv)
                    break;
            case "keydown":
            case "keyup":
                Ac(d, n, p)
            }
            var N;
            if (au)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                    }
                    T = void 0
                }
            else
                ur ? up(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
            T && (ap && n.locale !== "ko" && (ur || T !== "onCompositionStart" ? T === "onCompositionEnd" && ur && (N = lp()) : (pn = p,
            iu = "value"in pn ? pn.value : pn.textContent,
            ur = !0)),
            k = Gi(u, T),
            0 < k.length && (T = new kc(T,e,null,n,p),
            d.push({
                event: T,
                listeners: k
            }),
            N ? T.data = N : (N = cp(n),
            N !== null && (T.data = N)))),
            (N = Bv ? Uv(e, n) : Vv(e, n)) && (u = Gi(u, "onBeforeInput"),
            0 < u.length && (p = new kc("onBeforeInput","beforeinput",null,n,p),
            d.push({
                event: p,
                listeners: u
            }),
            p.data = N))
        }
        bp(d, t)
    })
}
function _o(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Gi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = No(e, n),
        i != null && r.unshift(_o(e, i, o)),
        i = No(e, t),
        i != null && r.push(_o(e, i, o))),
        e = e.return
    }
    return r
}
function sr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Ic(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        o ? (a = No(n, i),
        a != null && s.unshift(_o(n, a, l))) : o || (a = No(n, i),
        a != null && s.push(_o(n, a, l)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var rg = /\r\n?/g
  , og = /\u0000|\uFFFD/g;
function zc(e) {
    return (typeof e == "string" ? e : "" + e).replace(rg, `
`).replace(og, "")
}
function mi(e, t, n) {
    if (t = zc(t),
    zc(e) !== t && n)
        throw Error(j(425))
}
function Xi() {}
var ra = null
  , oa = null;
function ia(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var sa = typeof setTimeout == "function" ? setTimeout : void 0
  , ig = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Fc = typeof Promise == "function" ? Promise : void 0
  , sg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fc < "u" ? function(e) {
    return Fc.resolve(null).then(e).catch(lg)
}
: sa;
function lg(e) {
    setTimeout(function() {
        throw e
    })
}
function gl(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    jo(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    jo(t)
}
function xn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function $c(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Yr = Math.random().toString(36).slice(2)
  , Tt = "__reactFiber$" + Yr
  , Ao = "__reactProps$" + Yr
  , Ut = "__reactContainer$" + Yr
  , la = "__reactEvents$" + Yr
  , ag = "__reactListeners$" + Yr
  , ug = "__reactHandles$" + Yr;
function Ln(e) {
    var t = e[Tt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Ut] || n[Tt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = $c(e); e !== null; ) {
                    if (n = e[Tt])
                        return n;
                    e = $c(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Xo(e) {
    return e = e[Tt] || e[Ut],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function fr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(j(33))
}
function ks(e) {
    return e[Ao] || null
}
var aa = []
  , pr = -1;
function Mn(e) {
    return {
        current: e
    }
}
function ie(e) {
    0 > pr || (e.current = aa[pr],
    aa[pr] = null,
    pr--)
}
function te(e, t) {
    pr++,
    aa[pr] = e.current,
    e.current = t
}
var kn = {}
  , Re = Mn(kn)
  , Fe = Mn(!1)
  , Qn = kn;
function zr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return kn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function $e(e) {
    return e = e.childContextTypes,
    e != null
}
function qi() {
    ie(Fe),
    ie(Re)
}
function Bc(e, t, n) {
    if (Re.current !== kn)
        throw Error(j(168));
    te(Re, t),
    te(Fe, n)
}
function Cp(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(j(108, K0(e) || "Unknown", o));
    return ce({}, n, r)
}
function Zi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || kn,
    Qn = Re.current,
    te(Re, e),
    te(Fe, Fe.current),
    !0
}
function Uc(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(j(169));
    n ? (e = Cp(e, t, Qn),
    r.__reactInternalMemoizedMergedChildContext = e,
    ie(Fe),
    ie(Re),
    te(Re, e)) : ie(Fe),
    te(Fe, n)
}
var It = null
  , Ns = !1
  , yl = !1;
function kp(e) {
    It === null ? It = [e] : It.push(e)
}
function cg(e) {
    Ns = !0,
    kp(e)
}
function On() {
    if (!yl && It !== null) {
        yl = !0;
        var e = 0
          , t = J;
        try {
            var n = It;
            for (J = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            It = null,
            Ns = !1
        } catch (o) {
            throw It !== null && (It = It.slice(e + 1)),
            Xf(tu, On),
            o
        } finally {
            J = t,
            yl = !1
        }
    }
    return null
}
var hr = []
  , mr = 0
  , Ji = null
  , es = 0
  , nt = []
  , rt = 0
  , Kn = null
  , zt = 1
  , Ft = "";
function An(e, t) {
    hr[mr++] = es,
    hr[mr++] = Ji,
    Ji = e,
    es = t
}
function Np(e, t, n) {
    nt[rt++] = zt,
    nt[rt++] = Ft,
    nt[rt++] = Kn,
    Kn = e;
    var r = zt;
    e = Ft;
    var o = 32 - mt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - mt(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        o -= s,
        zt = 1 << 32 - mt(t) + o | n << o | r,
        Ft = i + e
    } else
        zt = 1 << i | n << o | r,
        Ft = e
}
function cu(e) {
    e.return !== null && (An(e, 1),
    Np(e, 1, 0))
}
function du(e) {
    for (; e === Ji; )
        Ji = hr[--mr],
        hr[mr] = null,
        es = hr[--mr],
        hr[mr] = null;
    for (; e === Kn; )
        Kn = nt[--rt],
        nt[rt] = null,
        Ft = nt[--rt],
        nt[rt] = null,
        zt = nt[--rt],
        nt[rt] = null
}
var Xe = null
  , Ge = null
  , se = !1
  , ht = null;
function Pp(e, t) {
    var n = ot(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Vc(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Xe = e,
        Ge = xn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Xe = e,
        Ge = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Kn !== null ? {
            id: zt,
            overflow: Ft
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = ot(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Xe = e,
        Ge = null,
        !0) : !1;
    default:
        return !1
    }
}
function ua(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ca(e) {
    if (se) {
        var t = Ge;
        if (t) {
            var n = t;
            if (!Vc(e, t)) {
                if (ua(e))
                    throw Error(j(418));
                t = xn(n.nextSibling);
                var r = Xe;
                t && Vc(e, t) ? Pp(r, n) : (e.flags = e.flags & -4097 | 2,
                se = !1,
                Xe = e)
            }
        } else {
            if (ua(e))
                throw Error(j(418));
            e.flags = e.flags & -4097 | 2,
            se = !1,
            Xe = e
        }
    }
}
function Hc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Xe = e
}
function vi(e) {
    if (e !== Xe)
        return !1;
    if (!se)
        return Hc(e),
        se = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !ia(e.type, e.memoizedProps)),
    t && (t = Ge)) {
        if (ua(e))
            throw Tp(),
            Error(j(418));
        for (; t; )
            Pp(e, t),
            t = xn(t.nextSibling)
    }
    if (Hc(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(j(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ge = xn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ge = null
        }
    } else
        Ge = Xe ? xn(e.stateNode.nextSibling) : null;
    return !0
}
function Tp() {
    for (var e = Ge; e; )
        e = xn(e.nextSibling)
}
function Fr() {
    Ge = Xe = null,
    se = !1
}
function fu(e) {
    ht === null ? ht = [e] : ht.push(e)
}
var dg = Kt.ReactCurrentBatchConfig;
function oo(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(j(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(j(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var l = o.refs;
                s === null ? delete l[i] : l[i] = s
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(j(284));
        if (!n._owner)
            throw Error(j(290, e))
    }
    return e
}
function gi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Wc(e) {
    var t = e._init;
    return t(e._payload)
}
function jp(e) {
    function t(m, h) {
        if (e) {
            var v = m.deletions;
            v === null ? (m.deletions = [h],
            m.flags |= 16) : v.push(h)
        }
    }
    function n(m, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(m, h),
            h = h.sibling;
        return null
    }
    function r(m, h) {
        for (m = new Map; h !== null; )
            h.key !== null ? m.set(h.key, h) : m.set(h.index, h),
            h = h.sibling;
        return m
    }
    function o(m, h) {
        return m = En(m, h),
        m.index = 0,
        m.sibling = null,
        m
    }
    function i(m, h, v) {
        return m.index = v,
        e ? (v = m.alternate,
        v !== null ? (v = v.index,
        v < h ? (m.flags |= 2,
        h) : v) : (m.flags |= 2,
        h)) : (m.flags |= 1048576,
        h)
    }
    function s(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function l(m, h, v, b) {
        return h === null || h.tag !== 6 ? (h = kl(v, m.mode, b),
        h.return = m,
        h) : (h = o(h, v),
        h.return = m,
        h)
    }
    function a(m, h, v, b) {
        var E = v.type;
        return E === ar ? p(m, h, v.props.children, b, v.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === rn && Wc(E) === h.type) ? (b = o(h, v.props),
        b.ref = oo(m, h, v),
        b.return = m,
        b) : (b = zi(v.type, v.key, v.props, null, m.mode, b),
        b.ref = oo(m, h, v),
        b.return = m,
        b)
    }
    function u(m, h, v, b) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = Nl(v, m.mode, b),
        h.return = m,
        h) : (h = o(h, v.children || []),
        h.return = m,
        h)
    }
    function p(m, h, v, b, E) {
        return h === null || h.tag !== 7 ? (h = Hn(v, m.mode, b, E),
        h.return = m,
        h) : (h = o(h, v),
        h.return = m,
        h)
    }
    function d(m, h, v) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = kl("" + h, m.mode, v),
            h.return = m,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case si:
                return v = zi(h.type, h.key, h.props, null, m.mode, v),
                v.ref = oo(m, null, h),
                v.return = m,
                v;
            case lr:
                return h = Nl(h, m.mode, v),
                h.return = m,
                h;
            case rn:
                var b = h._init;
                return d(m, b(h._payload), v)
            }
            if (co(h) || Jr(h))
                return h = Hn(h, m.mode, v, null),
                h.return = m,
                h;
            gi(m, h)
        }
        return null
    }
    function c(m, h, v, b) {
        var E = h !== null ? h.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return E !== null ? null : l(m, h, "" + v, b);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case si:
                return v.key === E ? a(m, h, v, b) : null;
            case lr:
                return v.key === E ? u(m, h, v, b) : null;
            case rn:
                return E = v._init,
                c(m, h, E(v._payload), b)
            }
            if (co(v) || Jr(v))
                return E !== null ? null : p(m, h, v, b, null);
            gi(m, v)
        }
        return null
    }
    function y(m, h, v, b, E) {
        if (typeof b == "string" && b !== "" || typeof b == "number")
            return m = m.get(v) || null,
            l(h, m, "" + b, E);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
            case si:
                return m = m.get(b.key === null ? v : b.key) || null,
                a(h, m, b, E);
            case lr:
                return m = m.get(b.key === null ? v : b.key) || null,
                u(h, m, b, E);
            case rn:
                var k = b._init;
                return y(m, h, v, k(b._payload), E)
            }
            if (co(b) || Jr(b))
                return m = m.get(v) || null,
                p(h, m, b, E, null);
            gi(h, b)
        }
        return null
    }
    function w(m, h, v, b) {
        for (var E = null, k = null, N = h, T = h = 0, L = null; N !== null && T < v.length; T++) {
            N.index > T ? (L = N,
            N = null) : L = N.sibling;
            var O = c(m, N, v[T], b);
            if (O === null) {
                N === null && (N = L);
                break
            }
            e && N && O.alternate === null && t(m, N),
            h = i(O, h, T),
            k === null ? E = O : k.sibling = O,
            k = O,
            N = L
        }
        if (T === v.length)
            return n(m, N),
            se && An(m, T),
            E;
        if (N === null) {
            for (; T < v.length; T++)
                N = d(m, v[T], b),
                N !== null && (h = i(N, h, T),
                k === null ? E = N : k.sibling = N,
                k = N);
            return se && An(m, T),
            E
        }
        for (N = r(m, N); T < v.length; T++)
            L = y(N, m, T, v[T], b),
            L !== null && (e && L.alternate !== null && N.delete(L.key === null ? T : L.key),
            h = i(L, h, T),
            k === null ? E = L : k.sibling = L,
            k = L);
        return e && N.forEach(function($) {
            return t(m, $)
        }),
        se && An(m, T),
        E
    }
    function g(m, h, v, b) {
        var E = Jr(v);
        if (typeof E != "function")
            throw Error(j(150));
        if (v = E.call(v),
        v == null)
            throw Error(j(151));
        for (var k = E = null, N = h, T = h = 0, L = null, O = v.next(); N !== null && !O.done; T++,
        O = v.next()) {
            N.index > T ? (L = N,
            N = null) : L = N.sibling;
            var $ = c(m, N, O.value, b);
            if ($ === null) {
                N === null && (N = L);
                break
            }
            e && N && $.alternate === null && t(m, N),
            h = i($, h, T),
            k === null ? E = $ : k.sibling = $,
            k = $,
            N = L
        }
        if (O.done)
            return n(m, N),
            se && An(m, T),
            E;
        if (N === null) {
            for (; !O.done; T++,
            O = v.next())
                O = d(m, O.value, b),
                O !== null && (h = i(O, h, T),
                k === null ? E = O : k.sibling = O,
                k = O);
            return se && An(m, T),
            E
        }
        for (N = r(m, N); !O.done; T++,
        O = v.next())
            O = y(N, m, T, O.value, b),
            O !== null && (e && O.alternate !== null && N.delete(O.key === null ? T : O.key),
            h = i(O, h, T),
            k === null ? E = O : k.sibling = O,
            k = O);
        return e && N.forEach(function(I) {
            return t(m, I)
        }),
        se && An(m, T),
        E
    }
    function S(m, h, v, b) {
        if (typeof v == "object" && v !== null && v.type === ar && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case si:
                e: {
                    for (var E = v.key, k = h; k !== null; ) {
                        if (k.key === E) {
                            if (E = v.type,
                            E === ar) {
                                if (k.tag === 7) {
                                    n(m, k.sibling),
                                    h = o(k, v.props.children),
                                    h.return = m,
                                    m = h;
                                    break e
                                }
                            } else if (k.elementType === E || typeof E == "object" && E !== null && E.$$typeof === rn && Wc(E) === k.type) {
                                n(m, k.sibling),
                                h = o(k, v.props),
                                h.ref = oo(m, k, v),
                                h.return = m,
                                m = h;
                                break e
                            }
                            n(m, k);
                            break
                        } else
                            t(m, k);
                        k = k.sibling
                    }
                    v.type === ar ? (h = Hn(v.props.children, m.mode, b, v.key),
                    h.return = m,
                    m = h) : (b = zi(v.type, v.key, v.props, null, m.mode, b),
                    b.ref = oo(m, h, v),
                    b.return = m,
                    m = b)
                }
                return s(m);
            case lr:
                e: {
                    for (k = v.key; h !== null; ) {
                        if (h.key === k)
                            if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                                n(m, h.sibling),
                                h = o(h, v.children || []),
                                h.return = m,
                                m = h;
                                break e
                            } else {
                                n(m, h);
                                break
                            }
                        else
                            t(m, h);
                        h = h.sibling
                    }
                    h = Nl(v, m.mode, b),
                    h.return = m,
                    m = h
                }
                return s(m);
            case rn:
                return k = v._init,
                S(m, h, k(v._payload), b)
            }
            if (co(v))
                return w(m, h, v, b);
            if (Jr(v))
                return g(m, h, v, b);
            gi(m, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        h !== null && h.tag === 6 ? (n(m, h.sibling),
        h = o(h, v),
        h.return = m,
        m = h) : (n(m, h),
        h = kl(v, m.mode, b),
        h.return = m,
        m = h),
        s(m)) : n(m, h)
    }
    return S
}
var $r = jp(!0)
  , Rp = jp(!1)
  , ts = Mn(null)
  , ns = null
  , vr = null
  , pu = null;
function hu() {
    pu = vr = ns = null
}
function mu(e) {
    var t = ts.current;
    ie(ts),
    e._currentValue = t
}
function da(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Er(e, t) {
    ns = e,
    pu = vr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (ze = !0),
    e.firstContext = null)
}
function st(e) {
    var t = e._currentValue;
    if (pu !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        vr === null) {
            if (ns === null)
                throw Error(j(308));
            vr = e,
            ns.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            vr = vr.next = e;
    return t
}
var In = null;
function vu(e) {
    In === null ? In = [e] : In.push(e)
}
function Mp(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    vu(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Vt(e, r)
}
function Vt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var on = !1;
function gu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Op(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function $t(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function wn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    X & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Vt(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    vu(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Vt(e, n)
}
function Oi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        nu(e, n)
    }
}
function Qc(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function rs(e, t, n, r) {
    var o = e.updateQueue;
    on = !1;
    var i = o.firstBaseUpdate
      , s = o.lastBaseUpdate
      , l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        s === null ? i = u : s.next = u,
        s = a;
        var p = e.alternate;
        p !== null && (p = p.updateQueue,
        l = p.lastBaseUpdate,
        l !== s && (l === null ? p.firstBaseUpdate = u : l.next = u,
        p.lastBaseUpdate = a))
    }
    if (i !== null) {
        var d = o.baseState;
        s = 0,
        p = u = a = null,
        l = i;
        do {
            var c = l.lane
              , y = l.eventTime;
            if ((r & c) === c) {
                p !== null && (p = p.next = {
                    eventTime: y,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var w = e
                      , g = l;
                    switch (c = t,
                    y = n,
                    g.tag) {
                    case 1:
                        if (w = g.payload,
                        typeof w == "function") {
                            d = w.call(y, d, c);
                            break e
                        }
                        d = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = g.payload,
                        c = typeof w == "function" ? w.call(y, d, c) : w,
                        c == null)
                            break e;
                        d = ce({}, d, c);
                        break e;
                    case 2:
                        on = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                c = o.effects,
                c === null ? o.effects = [l] : c.push(l))
            } else
                y = {
                    eventTime: y,
                    lane: c,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                p === null ? (u = p = y,
                a = d) : p = p.next = y,
                s |= c;
            if (l = l.next,
            l === null) {
                if (l = o.shared.pending,
                l === null)
                    break;
                c = l,
                l = c.next,
                c.next = null,
                o.lastBaseUpdate = c,
                o.shared.pending = null
            }
        } while (!0);
        if (p === null && (a = d),
        o.baseState = a,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = p,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                s |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        Gn |= s,
        e.lanes = s,
        e.memoizedState = d
    }
}
function Kc(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(j(191, o));
                o.call(r)
            }
        }
}
var qo = {}
  , Rt = Mn(qo)
  , Do = Mn(qo)
  , Lo = Mn(qo);
function zn(e) {
    if (e === qo)
        throw Error(j(174));
    return e
}
function yu(e, t) {
    switch (te(Lo, t),
    te(Do, e),
    te(Rt, qo),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Wl(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Wl(t, e)
    }
    ie(Rt),
    te(Rt, t)
}
function Br() {
    ie(Rt),
    ie(Do),
    ie(Lo)
}
function _p(e) {
    zn(Lo.current);
    var t = zn(Rt.current)
      , n = Wl(t, e.type);
    t !== n && (te(Do, e),
    te(Rt, n))
}
function xu(e) {
    Do.current === e && (ie(Rt),
    ie(Do))
}
var ae = Mn(0);
function os(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var xl = [];
function wu() {
    for (var e = 0; e < xl.length; e++)
        xl[e]._workInProgressVersionPrimary = null;
    xl.length = 0
}
var _i = Kt.ReactCurrentDispatcher
  , wl = Kt.ReactCurrentBatchConfig
  , Yn = 0
  , ue = null
  , me = null
  , ye = null
  , is = !1
  , xo = !1
  , Io = 0
  , fg = 0;
function Ne() {
    throw Error(j(321))
}
function Su(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!gt(e[n], t[n]))
            return !1;
    return !0
}
function bu(e, t, n, r, o, i) {
    if (Yn = i,
    ue = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    _i.current = e === null || e.memoizedState === null ? vg : gg,
    e = n(r, o),
    xo) {
        i = 0;
        do {
            if (xo = !1,
            Io = 0,
            25 <= i)
                throw Error(j(301));
            i += 1,
            ye = me = null,
            t.updateQueue = null,
            _i.current = yg,
            e = n(r, o)
        } while (xo)
    }
    if (_i.current = ss,
    t = me !== null && me.next !== null,
    Yn = 0,
    ye = me = ue = null,
    is = !1,
    t)
        throw Error(j(300));
    return e
}
function Eu() {
    var e = Io !== 0;
    return Io = 0,
    e
}
function Ct() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ye === null ? ue.memoizedState = ye = e : ye = ye.next = e,
    ye
}
function lt() {
    if (me === null) {
        var e = ue.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = me.next;
    var t = ye === null ? ue.memoizedState : ye.next;
    if (t !== null)
        ye = t,
        me = e;
    else {
        if (e === null)
            throw Error(j(310));
        me = e,
        e = {
            memoizedState: me.memoizedState,
            baseState: me.baseState,
            baseQueue: me.baseQueue,
            queue: me.queue,
            next: null
        },
        ye === null ? ue.memoizedState = ye = e : ye = ye.next = e
    }
    return ye
}
function zo(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Sl(e) {
    var t = lt()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = me
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
            i.next = s
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var l = s = null
          , a = null
          , u = i;
        do {
            var p = u.lane;
            if ((Yn & p) === p)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: p,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = d,
                s = r) : a = a.next = d,
                ue.lanes |= p,
                Gn |= p
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? s = r : a.next = l,
        gt(r, t.memoizedState) || (ze = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            ue.lanes |= i,
            Gn |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function bl(e) {
    var t = lt()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
            s = s.next;
        while (s !== o);
        gt(i, t.memoizedState) || (ze = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Ap() {}
function Dp(e, t) {
    var n = ue
      , r = lt()
      , o = t()
      , i = !gt(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    ze = !0),
    r = r.queue,
    Cu(zp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || ye !== null && ye.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Fo(9, Ip.bind(null, n, r, o, t), void 0, null),
        xe === null)
            throw Error(j(349));
        Yn & 30 || Lp(n, t, o)
    }
    return o
}
function Lp(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ue.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ue.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Ip(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Fp(t) && $p(e)
}
function zp(e, t, n) {
    return n(function() {
        Fp(t) && $p(e)
    })
}
function Fp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !gt(e, n)
    } catch {
        return !0
    }
}
function $p(e) {
    var t = Vt(e, 1);
    t !== null && vt(t, e, 1, -1)
}
function Yc(e) {
    var t = Ct();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zo,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = mg.bind(null, ue, e),
    [t.memoizedState, e]
}
function Fo(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ue.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ue.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Bp() {
    return lt().memoizedState
}
function Ai(e, t, n, r) {
    var o = Ct();
    ue.flags |= e,
    o.memoizedState = Fo(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ps(e, t, n, r) {
    var o = lt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (me !== null) {
        var s = me.memoizedState;
        if (i = s.destroy,
        r !== null && Su(r, s.deps)) {
            o.memoizedState = Fo(t, n, i, r);
            return
        }
    }
    ue.flags |= e,
    o.memoizedState = Fo(1 | t, n, i, r)
}
function Gc(e, t) {
    return Ai(8390656, 8, e, t)
}
function Cu(e, t) {
    return Ps(2048, 8, e, t)
}
function Up(e, t) {
    return Ps(4, 2, e, t)
}
function Vp(e, t) {
    return Ps(4, 4, e, t)
}
function Hp(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Wp(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ps(4, 4, Hp.bind(null, t, e), n)
}
function ku() {}
function Qp(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Su(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Kp(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Su(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Yp(e, t, n) {
    return Yn & 21 ? (gt(n, t) || (n = Jf(),
    ue.lanes |= n,
    Gn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    ze = !0),
    e.memoizedState = n)
}
function pg(e, t) {
    var n = J;
    J = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = wl.transition;
    wl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        J = n,
        wl.transition = r
    }
}
function Gp() {
    return lt().memoizedState
}
function hg(e, t, n) {
    var r = bn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Xp(e))
        qp(t, n);
    else if (n = Mp(e, t, n, r),
    n !== null) {
        var o = Ae();
        vt(n, e, r, o),
        Zp(n, t, r)
    }
}
function mg(e, t, n) {
    var r = bn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Xp(e))
        qp(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var s = t.lastRenderedState
                  , l = i(s, n);
                if (o.hasEagerState = !0,
                o.eagerState = l,
                gt(l, s)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o,
                    vu(t)) : (o.next = a.next,
                    a.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Mp(e, t, o, r),
        n !== null && (o = Ae(),
        vt(n, e, r, o),
        Zp(n, t, r))
    }
}
function Xp(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue
}
function qp(e, t) {
    xo = is = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Zp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        nu(e, n)
    }
}
var ss = {
    readContext: st,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1
}
  , vg = {
    readContext: st,
    useCallback: function(e, t) {
        return Ct().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: st,
    useEffect: Gc,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Ai(4194308, 4, Hp.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Ai(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Ai(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Ct();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Ct();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = hg.bind(null, ue, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Ct();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Yc,
    useDebugValue: ku,
    useDeferredValue: function(e) {
        return Ct().memoizedState = e
    },
    useTransition: function() {
        var e = Yc(!1)
          , t = e[0];
        return e = pg.bind(null, e[1]),
        Ct().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ue
          , o = Ct();
        if (se) {
            if (n === void 0)
                throw Error(j(407));
            n = n()
        } else {
            if (n = t(),
            xe === null)
                throw Error(j(349));
            Yn & 30 || Lp(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        Gc(zp.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        Fo(9, Ip.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Ct()
          , t = xe.identifierPrefix;
        if (se) {
            var n = Ft
              , r = zt;
            n = (r & ~(1 << 32 - mt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Io++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = fg++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , gg = {
    readContext: st,
    useCallback: Qp,
    useContext: st,
    useEffect: Cu,
    useImperativeHandle: Wp,
    useInsertionEffect: Up,
    useLayoutEffect: Vp,
    useMemo: Kp,
    useReducer: Sl,
    useRef: Bp,
    useState: function() {
        return Sl(zo)
    },
    useDebugValue: ku,
    useDeferredValue: function(e) {
        var t = lt();
        return Yp(t, me.memoizedState, e)
    },
    useTransition: function() {
        var e = Sl(zo)[0]
          , t = lt().memoizedState;
        return [e, t]
    },
    useMutableSource: Ap,
    useSyncExternalStore: Dp,
    useId: Gp,
    unstable_isNewReconciler: !1
}
  , yg = {
    readContext: st,
    useCallback: Qp,
    useContext: st,
    useEffect: Cu,
    useImperativeHandle: Wp,
    useInsertionEffect: Up,
    useLayoutEffect: Vp,
    useMemo: Kp,
    useReducer: bl,
    useRef: Bp,
    useState: function() {
        return bl(zo)
    },
    useDebugValue: ku,
    useDeferredValue: function(e) {
        var t = lt();
        return me === null ? t.memoizedState = e : Yp(t, me.memoizedState, e)
    },
    useTransition: function() {
        var e = bl(zo)[0]
          , t = lt().memoizedState;
        return [e, t]
    },
    useMutableSource: Ap,
    useSyncExternalStore: Dp,
    useId: Gp,
    unstable_isNewReconciler: !1
};
function ct(e, t) {
    if (e && e.defaultProps) {
        t = ce({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function fa(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ce({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ts = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? er(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ae()
          , o = bn(e)
          , i = $t(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = wn(e, i, o),
        t !== null && (vt(t, e, o, r),
        Oi(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ae()
          , o = bn(e)
          , i = $t(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = wn(e, i, o),
        t !== null && (vt(t, e, o, r),
        Oi(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ae()
          , r = bn(e)
          , o = $t(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = wn(e, o, r),
        t !== null && (vt(t, e, r, n),
        Oi(t, e, r))
    }
};
function Xc(e, t, n, r, o, i, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Mo(n, r) || !Mo(o, i) : !0
}
function Jp(e, t, n) {
    var r = !1
      , o = kn
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = st(i) : (o = $e(t) ? Qn : Re.current,
    r = t.contextTypes,
    i = (r = r != null) ? zr(e, o) : kn),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ts,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function qc(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ts.enqueueReplaceState(t, t.state, null)
}
function pa(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    gu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = st(i) : (i = $e(t) ? Qn : Re.current,
    o.context = zr(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (fa(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && Ts.enqueueReplaceState(o, o.state, null),
    rs(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function Ur(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Q0(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function El(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ha(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var xg = typeof WeakMap == "function" ? WeakMap : Map;
function eh(e, t, n) {
    n = $t(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        as || (as = !0,
        Ca = r),
        ha(e, t)
    }
    ,
    n
}
function th(e, t, n) {
    n = $t(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            ha(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        ha(e, t),
        typeof r != "function" && (Sn === null ? Sn = new Set([this]) : Sn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function Zc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new xg;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = _g.bind(null, e, t, n),
    t.then(e, e))
}
function Jc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function ed(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = $t(-1, 1),
    t.tag = 2,
    wn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var wg = Kt.ReactCurrentOwner
  , ze = !1;
function Oe(e, t, n, r) {
    t.child = e === null ? Rp(t, null, n, r) : $r(t, e.child, n, r)
}
function td(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Er(t, o),
    r = bu(e, t, n, r, i, o),
    n = Eu(),
    e !== null && !ze ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Ht(e, t, o)) : (se && n && cu(t),
    t.flags |= 1,
    Oe(e, t, r, o),
    t.child)
}
function nd(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !_u(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        nh(e, t, i, r, o)) : (e = zi(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Mo,
        n(s, r) && e.ref === t.ref)
            return Ht(e, t, o)
    }
    return t.flags |= 1,
    e = En(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function nh(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Mo(i, r) && e.ref === t.ref)
            if (ze = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (ze = !0);
            else
                return t.lanes = e.lanes,
                Ht(e, t, o)
    }
    return ma(e, t, n, r, o)
}
function rh(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            te(yr, Ke),
            Ke |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                te(yr, Ke),
                Ke |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            te(yr, Ke),
            Ke |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        te(yr, Ke),
        Ke |= r;
    return Oe(e, t, o, n),
    t.child
}
function oh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function ma(e, t, n, r, o) {
    var i = $e(n) ? Qn : Re.current;
    return i = zr(t, i),
    Er(t, o),
    n = bu(e, t, n, r, i, o),
    r = Eu(),
    e !== null && !ze ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Ht(e, t, o)) : (se && r && cu(t),
    t.flags |= 1,
    Oe(e, t, n, o),
    t.child)
}
function rd(e, t, n, r, o) {
    if ($e(n)) {
        var i = !0;
        Zi(t)
    } else
        i = !1;
    if (Er(t, o),
    t.stateNode === null)
        Di(e, t),
        Jp(t, n, r),
        pa(t, n, r, o),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , l = t.memoizedProps;
        s.props = l;
        var a = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = st(u) : (u = $e(n) ? Qn : Re.current,
        u = zr(t, u));
        var p = n.getDerivedStateFromProps
          , d = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && qc(t, s, r, u),
        on = !1;
        var c = t.memoizedState;
        s.state = c,
        rs(t, r, s, o),
        a = t.memoizedState,
        l !== r || c !== a || Fe.current || on ? (typeof p == "function" && (fa(t, n, p, r),
        a = t.memoizedState),
        (l = on || Xc(t, n, l, r, c, a, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Op(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : ct(t.type, l),
        s.props = u,
        d = t.pendingProps,
        c = s.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = st(a) : (a = $e(n) ? Qn : Re.current,
        a = zr(t, a));
        var y = n.getDerivedStateFromProps;
        (p = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== d || c !== a) && qc(t, s, r, a),
        on = !1,
        c = t.memoizedState,
        s.state = c,
        rs(t, r, s, o);
        var w = t.memoizedState;
        l !== d || c !== w || Fe.current || on ? (typeof y == "function" && (fa(t, n, y, r),
        w = t.memoizedState),
        (u = on || Xc(t, n, u, r, c, w, a) || !1) ? (p || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, a)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = w),
        s.props = r,
        s.state = w,
        s.context = a,
        r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return va(e, t, n, r, i, o)
}
function va(e, t, n, r, o, i) {
    oh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && Uc(t, n, !1),
        Ht(e, t, i);
    r = t.stateNode,
    wg.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = $r(t, e.child, null, i),
    t.child = $r(t, null, l, i)) : Oe(e, t, l, i),
    t.memoizedState = r.state,
    o && Uc(t, n, !0),
    t.child
}
function ih(e) {
    var t = e.stateNode;
    t.pendingContext ? Bc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Bc(e, t.context, !1),
    yu(e, t.containerInfo)
}
function od(e, t, n, r, o) {
    return Fr(),
    fu(o),
    t.flags |= 256,
    Oe(e, t, n, r),
    t.child
}
var ga = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function ya(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function sh(e, t, n) {
    var r = t.pendingProps, o = ae.current, i = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    te(ae, o & 1),
    e === null)
        return ca(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = Ms(s, r, 0, null),
        e = Hn(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = ya(n),
        t.memoizedState = ga,
        e) : Nu(t, s));
    if (o = e.memoizedState,
    o !== null && (l = o.dehydrated,
    l !== null))
        return Sg(e, t, s, r, l, o, n);
    if (i) {
        i = r.fallback,
        s = t.mode,
        o = e.child,
        l = o.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = En(o, a),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        l !== null ? i = En(l, i) : (i = Hn(i, s, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        s = e.child.memoizedState,
        s = s === null ? ya(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = ga,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = En(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Nu(e, t) {
    return t = Ms({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function yi(e, t, n, r) {
    return r !== null && fu(r),
    $r(t, e.child, null, n),
    e = Nu(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Sg(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = El(Error(j(422))),
        yi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = Ms({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = Hn(i, o, s, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && $r(t, e.child, null, s),
        t.child.memoizedState = ya(s),
        t.memoizedState = ga,
        i);
    if (!(t.mode & 1))
        return yi(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        i = Error(j(419)),
        r = El(i, r, void 0),
        yi(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0,
    ze || l) {
        if (r = xe,
        r !== null) {
            switch (s & -s) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            Vt(e, o),
            vt(r, e, o, -1))
        }
        return Ou(),
        r = El(Error(j(421))),
        yi(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Ag.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    Ge = xn(o.nextSibling),
    Xe = t,
    se = !0,
    ht = null,
    e !== null && (nt[rt++] = zt,
    nt[rt++] = Ft,
    nt[rt++] = Kn,
    zt = e.id,
    Ft = e.overflow,
    Kn = t),
    t = Nu(t, r.children),
    t.flags |= 4096,
    t)
}
function id(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    da(e.return, t, n)
}
function Cl(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function lh(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (Oe(e, t, r.children, n),
    r = ae.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && id(e, n, t);
                else if (e.tag === 19)
                    id(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (te(ae, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && os(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Cl(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && os(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Cl(t, !0, n, null, i);
            break;
        case "together":
            Cl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Di(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Ht(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Gn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child,
        n = En(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = En(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function bg(e, t, n) {
    switch (t.tag) {
    case 3:
        ih(t),
        Fr();
        break;
    case 5:
        _p(t);
        break;
    case 1:
        $e(t.type) && Zi(t);
        break;
    case 4:
        yu(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        te(ts, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (te(ae, ae.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? sh(e, t, n) : (te(ae, ae.current & 1),
            e = Ht(e, t, n),
            e !== null ? e.sibling : null);
        te(ae, ae.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return lh(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        te(ae, ae.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        rh(e, t, n)
    }
    return Ht(e, t, n)
}
var ah, xa, uh, ch;
ah = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
xa = function() {}
;
uh = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        zn(Rt.current);
        var i = null;
        switch (n) {
        case "input":
            o = Bl(e, o),
            r = Bl(e, r),
            i = [];
            break;
        case "select":
            o = ce({}, o, {
                value: void 0
            }),
            r = ce({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = Hl(e, o),
            r = Hl(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Xi)
        }
        Ql(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Co.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                            n[s] = a[s])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Co.hasOwnProperty(u) ? (a != null && u === "onScroll" && oe("scroll", e),
                    i || l === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
ch = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function io(e, t) {
    if (!se)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Pe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Eg(e, t, n) {
    var r = t.pendingProps;
    switch (du(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Pe(t),
        null;
    case 1:
        return $e(t.type) && qi(),
        Pe(t),
        null;
    case 3:
        return r = t.stateNode,
        Br(),
        ie(Fe),
        ie(Re),
        wu(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (vi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        ht !== null && (Pa(ht),
        ht = null))),
        xa(e, t),
        Pe(t),
        null;
    case 5:
        xu(t);
        var o = zn(Lo.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            uh(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(j(166));
                return Pe(t),
                null
            }
            if (e = zn(Rt.current),
            vi(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[Tt] = t,
                r[Ao] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    oe("cancel", r),
                    oe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    oe("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < po.length; o++)
                        oe(po[o], r);
                    break;
                case "source":
                    oe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    oe("error", r),
                    oe("load", r);
                    break;
                case "details":
                    oe("toggle", r);
                    break;
                case "input":
                    hc(r, i),
                    oe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    oe("invalid", r);
                    break;
                case "textarea":
                    vc(r, i),
                    oe("invalid", r)
                }
                Ql(n, i),
                o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var l = i[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && mi(r.textContent, l, e),
                        o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && mi(r.textContent, l, e),
                        o = ["children", "" + l]) : Co.hasOwnProperty(s) && l != null && s === "onScroll" && oe("scroll", r)
                    }
                switch (n) {
                case "input":
                    li(r),
                    mc(r, i, !0);
                    break;
                case "textarea":
                    li(r),
                    gc(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Xi)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = zf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[Tt] = t,
                e[Ao] = r,
                ah(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = Kl(n, r),
                    n) {
                    case "dialog":
                        oe("cancel", e),
                        oe("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        oe("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < po.length; o++)
                            oe(po[o], e);
                        o = r;
                        break;
                    case "source":
                        oe("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        oe("error", e),
                        oe("load", e),
                        o = r;
                        break;
                    case "details":
                        oe("toggle", e),
                        o = r;
                        break;
                    case "input":
                        hc(e, r),
                        o = Bl(e, r),
                        oe("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = ce({}, r, {
                            value: void 0
                        }),
                        oe("invalid", e);
                        break;
                    case "textarea":
                        vc(e, r),
                        o = Hl(e, r),
                        oe("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    Ql(n, o),
                    l = o;
                    for (i in l)
                        if (l.hasOwnProperty(i)) {
                            var a = l[i];
                            i === "style" ? Bf(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Ff(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && ko(e, a) : typeof a == "number" && ko(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Co.hasOwnProperty(i) ? a != null && i === "onScroll" && oe("scroll", e) : a != null && Xa(e, i, a, s))
                        }
                    switch (n) {
                    case "input":
                        li(e),
                        mc(e, r, !1);
                        break;
                    case "textarea":
                        li(e),
                        gc(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Cn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? xr(e, !!r.multiple, i, !1) : r.defaultValue != null && xr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Xi)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Pe(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            ch(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(j(166));
            if (n = zn(Lo.current),
            zn(Rt.current),
            vi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Tt] = t,
                (i = r.nodeValue !== n) && (e = Xe,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        mi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && mi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Tt] = t,
                t.stateNode = r
        }
        return Pe(t),
        null;
    case 13:
        if (ie(ae),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (se && Ge !== null && t.mode & 1 && !(t.flags & 128))
                Tp(),
                Fr(),
                t.flags |= 98560,
                i = !1;
            else if (i = vi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(j(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(j(317));
                    i[Tt] = t
                } else
                    Fr(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Pe(t),
                i = !1
            } else
                ht !== null && (Pa(ht),
                ht = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ae.current & 1 ? ge === 0 && (ge = 3) : Ou())),
        t.updateQueue !== null && (t.flags |= 4),
        Pe(t),
        null);
    case 4:
        return Br(),
        xa(e, t),
        e === null && Oo(t.stateNode.containerInfo),
        Pe(t),
        null;
    case 10:
        return mu(t.type._context),
        Pe(t),
        null;
    case 17:
        return $e(t.type) && qi(),
        Pe(t),
        null;
    case 19:
        if (ie(ae),
        i = t.memoizedState,
        i === null)
            return Pe(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                io(i, !1);
            else {
                if (ge !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = os(e),
                        s !== null) {
                            for (t.flags |= 128,
                            io(i, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return te(ae, ae.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && pe() > Vr && (t.flags |= 128,
                r = !0,
                io(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = os(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    io(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !se)
                        return Pe(t),
                        null
                } else
                    2 * pe() - i.renderingStartTime > Vr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    io(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = i.last,
            n !== null ? n.sibling = s : t.child = s,
            i.last = s)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = pe(),
        t.sibling = null,
        n = ae.current,
        te(ae, r ? n & 1 | 2 : n & 1),
        t) : (Pe(t),
        null);
    case 22:
    case 23:
        return Mu(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ke & 1073741824 && (Pe(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Pe(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(j(156, t.tag))
}
function Cg(e, t) {
    switch (du(t),
    t.tag) {
    case 1:
        return $e(t.type) && qi(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Br(),
        ie(Fe),
        ie(Re),
        wu(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return xu(t),
        null;
    case 13:
        if (ie(ae),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(j(340));
            Fr()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ie(ae),
        null;
    case 4:
        return Br(),
        null;
    case 10:
        return mu(t.type._context),
        null;
    case 22:
    case 23:
        return Mu(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var xi = !1
  , je = !1
  , kg = typeof WeakSet == "function" ? WeakSet : Set
  , A = null;
function gr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                fe(e, t, r)
            }
        else
            n.current = null
}
function wa(e, t, n) {
    try {
        n()
    } catch (r) {
        fe(e, t, r)
    }
}
var sd = !1;
function Ng(e, t) {
    if (ra = Ki,
    e = mp(),
    uu(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , p = 0
                      , d = e
                      , c = null;
                    t: for (; ; ) {
                        for (var y; d !== n || o !== 0 && d.nodeType !== 3 || (l = s + o),
                        d !== i || r !== 0 && d.nodeType !== 3 || (a = s + r),
                        d.nodeType === 3 && (s += d.nodeValue.length),
                        (y = d.firstChild) !== null; )
                            c = d,
                            d = y;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (c === n && ++u === o && (l = s),
                            c === i && ++p === r && (a = s),
                            (y = d.nextSibling) !== null)
                                break;
                            d = c,
                            c = d.parentNode
                        }
                        d = y
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (oa = {
        focusedElem: e,
        selectionRange: n
    },
    Ki = !1,
    A = t; A !== null; )
        if (t = A,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            A = e;
        else
            for (; A !== null; ) {
                t = A;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var g = w.memoizedProps
                                  , S = w.memoizedState
                                  , m = t.stateNode
                                  , h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : ct(t.type, g), S);
                                m.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(j(163))
                        }
                } catch (b) {
                    fe(t, t.return, b)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    A = e;
                    break
                }
                A = t.return
            }
    return w = sd,
    sd = !1,
    w
}
function wo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && wa(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function js(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Sa(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function dh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    dh(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Tt],
    delete t[Ao],
    delete t[la],
    delete t[ag],
    delete t[ug])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function fh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function ld(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || fh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function ba(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Xi));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ba(e, t, n),
        e = e.sibling; e !== null; )
            ba(e, t, n),
            e = e.sibling
}
function Ea(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ea(e, t, n),
        e = e.sibling; e !== null; )
            Ea(e, t, n),
            e = e.sibling
}
var Se = null
  , pt = !1;
function Jt(e, t, n) {
    for (n = n.child; n !== null; )
        ph(e, t, n),
        n = n.sibling
}
function ph(e, t, n) {
    if (jt && typeof jt.onCommitFiberUnmount == "function")
        try {
            jt.onCommitFiberUnmount(Ss, n)
        } catch {}
    switch (n.tag) {
    case 5:
        je || gr(n, t);
    case 6:
        var r = Se
          , o = pt;
        Se = null,
        Jt(e, t, n),
        Se = r,
        pt = o,
        Se !== null && (pt ? (e = Se,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Se.removeChild(n.stateNode));
        break;
    case 18:
        Se !== null && (pt ? (e = Se,
        n = n.stateNode,
        e.nodeType === 8 ? gl(e.parentNode, n) : e.nodeType === 1 && gl(e, n),
        jo(e)) : gl(Se, n.stateNode));
        break;
    case 4:
        r = Se,
        o = pt,
        Se = n.stateNode.containerInfo,
        pt = !0,
        Jt(e, t, n),
        Se = r,
        pt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!je && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && (i & 2 || i & 4) && wa(n, t, s),
                o = o.next
            } while (o !== r)
        }
        Jt(e, t, n);
        break;
    case 1:
        if (!je && (gr(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                fe(n, t, l)
            }
        Jt(e, t, n);
        break;
    case 21:
        Jt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (je = (r = je) || n.memoizedState !== null,
        Jt(e, t, n),
        je = r) : Jt(e, t, n);
        break;
    default:
        Jt(e, t, n)
    }
}
function ad(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new kg),
        t.forEach(function(r) {
            var o = Dg.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function ut(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , s = t
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        Se = l.stateNode,
                        pt = !1;
                        break e;
                    case 3:
                        Se = l.stateNode.containerInfo,
                        pt = !0;
                        break e;
                    case 4:
                        Se = l.stateNode.containerInfo,
                        pt = !0;
                        break e
                    }
                    l = l.return
                }
                if (Se === null)
                    throw Error(j(160));
                ph(i, s, o),
                Se = null,
                pt = !1;
                var a = o.alternate;
                a !== null && (a.return = null),
                o.return = null
            } catch (u) {
                fe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            hh(t, e),
            t = t.sibling
}
function hh(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ut(t, e),
        Et(e),
        r & 4) {
            try {
                wo(3, e, e.return),
                js(3, e)
            } catch (g) {
                fe(e, e.return, g)
            }
            try {
                wo(5, e, e.return)
            } catch (g) {
                fe(e, e.return, g)
            }
        }
        break;
    case 1:
        ut(t, e),
        Et(e),
        r & 512 && n !== null && gr(n, n.return);
        break;
    case 5:
        if (ut(t, e),
        Et(e),
        r & 512 && n !== null && gr(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                ko(o, "")
            } catch (g) {
                fe(e, e.return, g)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , s = n !== null ? n.memoizedProps : i
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && i.type === "radio" && i.name != null && Lf(o, i),
                    Kl(l, s);
                    var u = Kl(l, i);
                    for (s = 0; s < a.length; s += 2) {
                        var p = a[s]
                          , d = a[s + 1];
                        p === "style" ? Bf(o, d) : p === "dangerouslySetInnerHTML" ? Ff(o, d) : p === "children" ? ko(o, d) : Xa(o, p, d, u)
                    }
                    switch (l) {
                    case "input":
                        Ul(o, i);
                        break;
                    case "textarea":
                        If(o, i);
                        break;
                    case "select":
                        var c = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var y = i.value;
                        y != null ? xr(o, !!i.multiple, y, !1) : c !== !!i.multiple && (i.defaultValue != null ? xr(o, !!i.multiple, i.defaultValue, !0) : xr(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Ao] = i
                } catch (g) {
                    fe(e, e.return, g)
                }
        }
        break;
    case 6:
        if (ut(t, e),
        Et(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(j(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (g) {
                fe(e, e.return, g)
            }
        }
        break;
    case 3:
        if (ut(t, e),
        Et(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                jo(t.containerInfo)
            } catch (g) {
                fe(e, e.return, g)
            }
        break;
    case 4:
        ut(t, e),
        Et(e);
        break;
    case 13:
        ut(t, e),
        Et(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (ju = pe())),
        r & 4 && ad(e);
        break;
    case 22:
        if (p = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (je = (u = je) || p,
        ut(t, e),
        je = u) : ut(t, e),
        Et(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !p && e.mode & 1)
                for (A = e,
                p = e.child; p !== null; ) {
                    for (d = A = p; A !== null; ) {
                        switch (c = A,
                        y = c.child,
                        c.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            wo(4, c, c.return);
                            break;
                        case 1:
                            gr(c, c.return);
                            var w = c.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = c,
                                n = c.return;
                                try {
                                    t = r,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (g) {
                                    fe(r, n, g)
                                }
                            }
                            break;
                        case 5:
                            gr(c, c.return);
                            break;
                        case 22:
                            if (c.memoizedState !== null) {
                                cd(d);
                                continue
                            }
                        }
                        y !== null ? (y.return = c,
                        A = y) : cd(d)
                    }
                    p = p.sibling
                }
            e: for (p = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (p === null) {
                        p = d;
                        try {
                            o = d.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = d.stateNode,
                            a = d.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = $f("display", s))
                        } catch (g) {
                            fe(e, e.return, g)
                        }
                    }
                } else if (d.tag === 6) {
                    if (p === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (g) {
                            fe(e, e.return, g)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    p === d && (p = null),
                    d = d.return
                }
                p === d && (p = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        ut(t, e),
        Et(e),
        r & 4 && ad(e);
        break;
    case 21:
        break;
    default:
        ut(t, e),
        Et(e)
    }
}
function Et(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (fh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(j(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (ko(o, ""),
                r.flags &= -33);
                var i = ld(e);
                Ea(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = ld(e);
                ba(e, l, s);
                break;
            default:
                throw Error(j(161))
            }
        } catch (a) {
            fe(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Pg(e, t, n) {
    A = e,
    mh(e)
}
function mh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; A !== null; ) {
        var o = A
          , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || xi;
            if (!s) {
                var l = o.alternate
                  , a = l !== null && l.memoizedState !== null || je;
                l = xi;
                var u = je;
                if (xi = s,
                (je = a) && !u)
                    for (A = o; A !== null; )
                        s = A,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? dd(o) : a !== null ? (a.return = s,
                        A = a) : dd(o);
                for (; i !== null; )
                    A = i,
                    mh(i),
                    i = i.sibling;
                A = o,
                xi = l,
                je = u
            }
            ud(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            A = i) : ud(e)
    }
}
function ud(e) {
    for (; A !== null; ) {
        var t = A;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        je || js(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !je)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : ct(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Kc(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Kc(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var p = u.memoizedState;
                                if (p !== null) {
                                    var d = p.dehydrated;
                                    d !== null && jo(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(j(163))
                    }
                je || t.flags & 512 && Sa(t)
            } catch (c) {
                fe(t, t.return, c)
            }
        }
        if (t === e) {
            A = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            A = n;
            break
        }
        A = t.return
    }
}
function cd(e) {
    for (; A !== null; ) {
        var t = A;
        if (t === e) {
            A = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            A = n;
            break
        }
        A = t.return
    }
}
function dd(e) {
    for (; A !== null; ) {
        var t = A;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    js(4, t)
                } catch (a) {
                    fe(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        fe(t, o, a)
                    }
                }
                var i = t.return;
                try {
                    Sa(t)
                } catch (a) {
                    fe(t, i, a)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    Sa(t)
                } catch (a) {
                    fe(t, s, a)
                }
            }
        } catch (a) {
            fe(t, t.return, a)
        }
        if (t === e) {
            A = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            A = l;
            break
        }
        A = t.return
    }
}
var Tg = Math.ceil
  , ls = Kt.ReactCurrentDispatcher
  , Pu = Kt.ReactCurrentOwner
  , it = Kt.ReactCurrentBatchConfig
  , X = 0
  , xe = null
  , he = null
  , be = 0
  , Ke = 0
  , yr = Mn(0)
  , ge = 0
  , $o = null
  , Gn = 0
  , Rs = 0
  , Tu = 0
  , So = null
  , Ie = null
  , ju = 0
  , Vr = 1 / 0
  , Lt = null
  , as = !1
  , Ca = null
  , Sn = null
  , wi = !1
  , hn = null
  , us = 0
  , bo = 0
  , ka = null
  , Li = -1
  , Ii = 0;
function Ae() {
    return X & 6 ? pe() : Li !== -1 ? Li : Li = pe()
}
function bn(e) {
    return e.mode & 1 ? X & 2 && be !== 0 ? be & -be : dg.transition !== null ? (Ii === 0 && (Ii = Jf()),
    Ii) : (e = J,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : sp(e.type)),
    e) : 1
}
function vt(e, t, n, r) {
    if (50 < bo)
        throw bo = 0,
        ka = null,
        Error(j(185));
    Yo(e, n, r),
    (!(X & 2) || e !== xe) && (e === xe && (!(X & 2) && (Rs |= n),
    ge === 4 && ln(e, be)),
    Be(e, r),
    n === 1 && X === 0 && !(t.mode & 1) && (Vr = pe() + 500,
    Ns && On()))
}
function Be(e, t) {
    var n = e.callbackNode;
    dv(e, t);
    var r = Qi(e, e === xe ? be : 0);
    if (r === 0)
        n !== null && wc(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && wc(n),
        t === 1)
            e.tag === 0 ? cg(fd.bind(null, e)) : kp(fd.bind(null, e)),
            sg(function() {
                !(X & 6) && On()
            }),
            n = null;
        else {
            switch (ep(r)) {
            case 1:
                n = tu;
                break;
            case 4:
                n = qf;
                break;
            case 16:
                n = Wi;
                break;
            case 536870912:
                n = Zf;
                break;
            default:
                n = Wi
            }
            n = Eh(n, vh.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function vh(e, t) {
    if (Li = -1,
    Ii = 0,
    X & 6)
        throw Error(j(327));
    var n = e.callbackNode;
    if (Cr() && e.callbackNode !== n)
        return null;
    var r = Qi(e, e === xe ? be : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = cs(e, r);
    else {
        t = r;
        var o = X;
        X |= 2;
        var i = yh();
        (xe !== e || be !== t) && (Lt = null,
        Vr = pe() + 500,
        Vn(e, t));
        do
            try {
                Mg();
                break
            } catch (l) {
                gh(e, l)
            }
        while (!0);
        hu(),
        ls.current = i,
        X = o,
        he !== null ? t = 0 : (xe = null,
        be = 0,
        t = ge)
    }
    if (t !== 0) {
        if (t === 2 && (o = Zl(e),
        o !== 0 && (r = o,
        t = Na(e, o))),
        t === 1)
            throw n = $o,
            Vn(e, 0),
            ln(e, r),
            Be(e, pe()),
            n;
        if (t === 6)
            ln(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !jg(o) && (t = cs(e, r),
            t === 2 && (i = Zl(e),
            i !== 0 && (r = i,
            t = Na(e, i))),
            t === 1))
                throw n = $o,
                Vn(e, 0),
                ln(e, r),
                Be(e, pe()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(j(345));
            case 2:
                Dn(e, Ie, Lt);
                break;
            case 3:
                if (ln(e, r),
                (r & 130023424) === r && (t = ju + 500 - pe(),
                10 < t)) {
                    if (Qi(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Ae(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = sa(Dn.bind(null, e, Ie, Lt), t);
                    break
                }
                Dn(e, Ie, Lt);
                break;
            case 4:
                if (ln(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var s = 31 - mt(r);
                    i = 1 << s,
                    s = t[s],
                    s > o && (o = s),
                    r &= ~i
                }
                if (r = o,
                r = pe() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Tg(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = sa(Dn.bind(null, e, Ie, Lt), r);
                    break
                }
                Dn(e, Ie, Lt);
                break;
            case 5:
                Dn(e, Ie, Lt);
                break;
            default:
                throw Error(j(329))
            }
        }
    }
    return Be(e, pe()),
    e.callbackNode === n ? vh.bind(null, e) : null
}
function Na(e, t) {
    var n = So;
    return e.current.memoizedState.isDehydrated && (Vn(e, t).flags |= 256),
    e = cs(e, t),
    e !== 2 && (t = Ie,
    Ie = n,
    t !== null && Pa(t)),
    e
}
function Pa(e) {
    Ie === null ? Ie = e : Ie.push.apply(Ie, e)
}
function jg(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!gt(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function ln(e, t) {
    for (t &= ~Tu,
    t &= ~Rs,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - mt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function fd(e) {
    if (X & 6)
        throw Error(j(327));
    Cr();
    var t = Qi(e, 0);
    if (!(t & 1))
        return Be(e, pe()),
        null;
    var n = cs(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Zl(e);
        r !== 0 && (t = r,
        n = Na(e, r))
    }
    if (n === 1)
        throw n = $o,
        Vn(e, 0),
        ln(e, t),
        Be(e, pe()),
        n;
    if (n === 6)
        throw Error(j(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Dn(e, Ie, Lt),
    Be(e, pe()),
    null
}
function Ru(e, t) {
    var n = X;
    X |= 1;
    try {
        return e(t)
    } finally {
        X = n,
        X === 0 && (Vr = pe() + 500,
        Ns && On())
    }
}
function Xn(e) {
    hn !== null && hn.tag === 0 && !(X & 6) && Cr();
    var t = X;
    X |= 1;
    var n = it.transition
      , r = J;
    try {
        if (it.transition = null,
        J = 1,
        e)
            return e()
    } finally {
        J = r,
        it.transition = n,
        X = t,
        !(X & 6) && On()
    }
}
function Mu() {
    Ke = yr.current,
    ie(yr)
}
function Vn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    ig(n)),
    he !== null)
        for (n = he.return; n !== null; ) {
            var r = n;
            switch (du(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && qi();
                break;
            case 3:
                Br(),
                ie(Fe),
                ie(Re),
                wu();
                break;
            case 5:
                xu(r);
                break;
            case 4:
                Br();
                break;
            case 13:
                ie(ae);
                break;
            case 19:
                ie(ae);
                break;
            case 10:
                mu(r.type._context);
                break;
            case 22:
            case 23:
                Mu()
            }
            n = n.return
        }
    if (xe = e,
    he = e = En(e.current, null),
    be = Ke = t,
    ge = 0,
    $o = null,
    Tu = Rs = Gn = 0,
    Ie = So = null,
    In !== null) {
        for (t = 0; t < In.length; t++)
            if (n = In[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                    r.next = s
                }
                n.pending = r
            }
        In = null
    }
    return e
}
function gh(e, t) {
    do {
        var n = he;
        try {
            if (hu(),
            _i.current = ss,
            is) {
                for (var r = ue.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                is = !1
            }
            if (Yn = 0,
            ye = me = ue = null,
            xo = !1,
            Io = 0,
            Pu.current = null,
            n === null || n.return === null) {
                ge = 1,
                $o = t,
                he = null;
                break
            }
            e: {
                var i = e
                  , s = n.return
                  , l = n
                  , a = t;
                if (t = be,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , p = l
                      , d = p.tag;
                    if (!(p.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var c = p.alternate;
                        c ? (p.updateQueue = c.updateQueue,
                        p.memoizedState = c.memoizedState,
                        p.lanes = c.lanes) : (p.updateQueue = null,
                        p.memoizedState = null)
                    }
                    var y = Jc(s);
                    if (y !== null) {
                        y.flags &= -257,
                        ed(y, s, l, i, t),
                        y.mode & 1 && Zc(i, u, t),
                        t = y,
                        a = u;
                        var w = t.updateQueue;
                        if (w === null) {
                            var g = new Set;
                            g.add(a),
                            t.updateQueue = g
                        } else
                            w.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Zc(i, u, t),
                            Ou();
                            break e
                        }
                        a = Error(j(426))
                    }
                } else if (se && l.mode & 1) {
                    var S = Jc(s);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                        ed(S, s, l, i, t),
                        fu(Ur(a, l));
                        break e
                    }
                }
                i = a = Ur(a, l),
                ge !== 4 && (ge = 2),
                So === null ? So = [i] : So.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var m = eh(i, a, t);
                        Qc(i, m);
                        break e;
                    case 1:
                        l = a;
                        var h = i.type
                          , v = i.stateNode;
                        if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Sn === null || !Sn.has(v)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var b = th(i, l, t);
                            Qc(i, b);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            wh(n)
        } catch (E) {
            t = E,
            he === n && n !== null && (he = n = n.return);
            continue
        }
        break
    } while (!0)
}
function yh() {
    var e = ls.current;
    return ls.current = ss,
    e === null ? ss : e
}
function Ou() {
    (ge === 0 || ge === 3 || ge === 2) && (ge = 4),
    xe === null || !(Gn & 268435455) && !(Rs & 268435455) || ln(xe, be)
}
function cs(e, t) {
    var n = X;
    X |= 2;
    var r = yh();
    (xe !== e || be !== t) && (Lt = null,
    Vn(e, t));
    do
        try {
            Rg();
            break
        } catch (o) {
            gh(e, o)
        }
    while (!0);
    if (hu(),
    X = n,
    ls.current = r,
    he !== null)
        throw Error(j(261));
    return xe = null,
    be = 0,
    ge
}
function Rg() {
    for (; he !== null; )
        xh(he)
}
function Mg() {
    for (; he !== null && !nv(); )
        xh(he)
}
function xh(e) {
    var t = bh(e.alternate, e, Ke);
    e.memoizedProps = e.pendingProps,
    t === null ? wh(e) : he = t,
    Pu.current = null
}
function wh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Cg(n, t),
            n !== null) {
                n.flags &= 32767,
                he = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ge = 6,
                he = null;
                return
            }
        } else if (n = Eg(n, t, Ke),
        n !== null) {
            he = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            he = t;
            return
        }
        he = t = e
    } while (t !== null);
    ge === 0 && (ge = 5)
}
function Dn(e, t, n) {
    var r = J
      , o = it.transition;
    try {
        it.transition = null,
        J = 1,
        Og(e, t, n, r)
    } finally {
        it.transition = o,
        J = r
    }
    return null
}
function Og(e, t, n, r) {
    do
        Cr();
    while (hn !== null);
    if (X & 6)
        throw Error(j(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(j(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (fv(e, i),
    e === xe && (he = xe = null,
    be = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || wi || (wi = !0,
    Eh(Wi, function() {
        return Cr(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = it.transition,
        it.transition = null;
        var s = J;
        J = 1;
        var l = X;
        X |= 4,
        Pu.current = null,
        Ng(e, n),
        hh(n, e),
        Zv(oa),
        Ki = !!ra,
        oa = ra = null,
        e.current = n,
        Pg(n),
        rv(),
        X = l,
        J = s,
        it.transition = i
    } else
        e.current = n;
    if (wi && (wi = !1,
    hn = e,
    us = o),
    i = e.pendingLanes,
    i === 0 && (Sn = null),
    sv(n.stateNode),
    Be(e, pe()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (as)
        throw as = !1,
        e = Ca,
        Ca = null,
        e;
    return us & 1 && e.tag !== 0 && Cr(),
    i = e.pendingLanes,
    i & 1 ? e === ka ? bo++ : (bo = 0,
    ka = e) : bo = 0,
    On(),
    null
}
function Cr() {
    if (hn !== null) {
        var e = ep(us)
          , t = it.transition
          , n = J;
        try {
            if (it.transition = null,
            J = 16 > e ? 16 : e,
            hn === null)
                var r = !1;
            else {
                if (e = hn,
                hn = null,
                us = 0,
                X & 6)
                    throw Error(j(331));
                var o = X;
                for (X |= 4,
                A = e.current; A !== null; ) {
                    var i = A
                      , s = i.child;
                    if (A.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (A = u; A !== null; ) {
                                    var p = A;
                                    switch (p.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        wo(8, p, i)
                                    }
                                    var d = p.child;
                                    if (d !== null)
                                        d.return = p,
                                        A = d;
                                    else
                                        for (; A !== null; ) {
                                            p = A;
                                            var c = p.sibling
                                              , y = p.return;
                                            if (dh(p),
                                            p === u) {
                                                A = null;
                                                break
                                            }
                                            if (c !== null) {
                                                c.return = y,
                                                A = c;
                                                break
                                            }
                                            A = y
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var g = w.child;
                                if (g !== null) {
                                    w.child = null;
                                    do {
                                        var S = g.sibling;
                                        g.sibling = null,
                                        g = S
                                    } while (g !== null)
                                }
                            }
                            A = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                        A = s;
                    else
                        e: for (; A !== null; ) {
                            if (i = A,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    wo(9, i, i.return)
                                }
                            var m = i.sibling;
                            if (m !== null) {
                                m.return = i.return,
                                A = m;
                                break e
                            }
                            A = i.return
                        }
                }
                var h = e.current;
                for (A = h; A !== null; ) {
                    s = A;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null)
                        v.return = s,
                        A = v;
                    else
                        e: for (s = h; A !== null; ) {
                            if (l = A,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        js(9, l)
                                    }
                                } catch (E) {
                                    fe(l, l.return, E)
                                }
                            if (l === s) {
                                A = null;
                                break e
                            }
                            var b = l.sibling;
                            if (b !== null) {
                                b.return = l.return,
                                A = b;
                                break e
                            }
                            A = l.return
                        }
                }
                if (X = o,
                On(),
                jt && typeof jt.onPostCommitFiberRoot == "function")
                    try {
                        jt.onPostCommitFiberRoot(Ss, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            J = n,
            it.transition = t
        }
    }
    return !1
}
function pd(e, t, n) {
    t = Ur(n, t),
    t = eh(e, t, 1),
    e = wn(e, t, 1),
    t = Ae(),
    e !== null && (Yo(e, 1, t),
    Be(e, t))
}
function fe(e, t, n) {
    if (e.tag === 3)
        pd(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                pd(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Sn === null || !Sn.has(r))) {
                    e = Ur(n, e),
                    e = th(t, e, 1),
                    t = wn(t, e, 1),
                    e = Ae(),
                    t !== null && (Yo(t, 1, e),
                    Be(t, e));
                    break
                }
            }
            t = t.return
        }
}
function _g(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ae(),
    e.pingedLanes |= e.suspendedLanes & n,
    xe === e && (be & n) === n && (ge === 4 || ge === 3 && (be & 130023424) === be && 500 > pe() - ju ? Vn(e, 0) : Tu |= n),
    Be(e, t)
}
function Sh(e, t) {
    t === 0 && (e.mode & 1 ? (t = ci,
    ci <<= 1,
    !(ci & 130023424) && (ci = 4194304)) : t = 1);
    var n = Ae();
    e = Vt(e, t),
    e !== null && (Yo(e, t, n),
    Be(e, n))
}
function Ag(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Sh(e, n)
}
function Dg(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(j(314))
    }
    r !== null && r.delete(t),
    Sh(e, n)
}
var bh;
bh = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Fe.current)
            ze = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return ze = !1,
                bg(e, t, n);
            ze = !!(e.flags & 131072)
        }
    else
        ze = !1,
        se && t.flags & 1048576 && Np(t, es, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Di(e, t),
        e = t.pendingProps;
        var o = zr(t, Re.current);
        Er(t, n),
        o = bu(null, t, r, e, o, n);
        var i = Eu();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        $e(r) ? (i = !0,
        Zi(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        gu(t),
        o.updater = Ts,
        t.stateNode = o,
        o._reactInternals = t,
        pa(t, r, e, n),
        t = va(null, t, r, !0, i, n)) : (t.tag = 0,
        se && i && cu(t),
        Oe(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Di(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = Ig(r),
            e = ct(r, e),
            o) {
            case 0:
                t = ma(null, t, r, e, n);
                break e;
            case 1:
                t = rd(null, t, r, e, n);
                break e;
            case 11:
                t = td(null, t, r, e, n);
                break e;
            case 14:
                t = nd(null, t, r, ct(r.type, e), n);
                break e
            }
            throw Error(j(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ct(r, o),
        ma(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ct(r, o),
        rd(e, t, r, o, n);
    case 3:
        e: {
            if (ih(t),
            e === null)
                throw Error(j(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            Op(e, t),
            rs(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = Ur(Error(j(423)), t),
                    t = od(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = Ur(Error(j(424)), t),
                    t = od(e, t, r, n, o);
                    break e
                } else
                    for (Ge = xn(t.stateNode.containerInfo.firstChild),
                    Xe = t,
                    se = !0,
                    ht = null,
                    n = Rp(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Fr(),
                r === o) {
                    t = Ht(e, t, n);
                    break e
                }
                Oe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return _p(t),
        e === null && ca(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        s = o.children,
        ia(r, o) ? s = null : i !== null && ia(r, i) && (t.flags |= 32),
        oh(e, t),
        Oe(e, t, s, n),
        t.child;
    case 6:
        return e === null && ca(t),
        null;
    case 13:
        return sh(e, t, n);
    case 4:
        return yu(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = $r(t, null, r, n) : Oe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ct(r, o),
        td(e, t, r, o, n);
    case 7:
        return Oe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Oe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Oe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            s = o.value,
            te(ts, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (gt(i.value, s)) {
                    if (i.children === o.children && !Fe.current) {
                        t = Ht(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var l = i.dependencies;
                        if (l !== null) {
                            s = i.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (i.tag === 1) {
                                        a = $t(-1, n & -n),
                                        a.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var p = u.pending;
                                            p === null ? a.next = a : (a.next = p.next,
                                            p.next = a),
                                            u.pending = a
                                        }
                                    }
                                    i.lanes |= n,
                                    a = i.alternate,
                                    a !== null && (a.lanes |= n),
                                    da(i.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(j(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            da(s, n, t),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            Oe(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Er(t, n),
        o = st(o),
        r = r(o),
        t.flags |= 1,
        Oe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = ct(r, t.pendingProps),
        o = ct(r.type, o),
        nd(e, t, r, o, n);
    case 15:
        return nh(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ct(r, o),
        Di(e, t),
        t.tag = 1,
        $e(r) ? (e = !0,
        Zi(t)) : e = !1,
        Er(t, n),
        Jp(t, r, o),
        pa(t, r, o, n),
        va(null, t, r, !0, e, n);
    case 19:
        return lh(e, t, n);
    case 22:
        return rh(e, t, n)
    }
    throw Error(j(156, t.tag))
}
;
function Eh(e, t) {
    return Xf(e, t)
}
function Lg(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function ot(e, t, n, r) {
    return new Lg(e,t,n,r)
}
function _u(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Ig(e) {
    if (typeof e == "function")
        return _u(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Za)
            return 11;
        if (e === Ja)
            return 14
    }
    return 2
}
function En(e, t) {
    var n = e.alternate;
    return n === null ? (n = ot(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function zi(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        _u(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case ar:
            return Hn(n.children, o, i, t);
        case qa:
            s = 8,
            o |= 8;
            break;
        case Il:
            return e = ot(12, n, t, o | 2),
            e.elementType = Il,
            e.lanes = i,
            e;
        case zl:
            return e = ot(13, n, t, o),
            e.elementType = zl,
            e.lanes = i,
            e;
        case Fl:
            return e = ot(19, n, t, o),
            e.elementType = Fl,
            e.lanes = i,
            e;
        case _f:
            return Ms(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Mf:
                    s = 10;
                    break e;
                case Of:
                    s = 9;
                    break e;
                case Za:
                    s = 11;
                    break e;
                case Ja:
                    s = 14;
                    break e;
                case rn:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(j(130, e == null ? e : typeof e, ""))
        }
    return t = ot(s, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Hn(e, t, n, r) {
    return e = ot(7, e, r, t),
    e.lanes = n,
    e
}
function Ms(e, t, n, r) {
    return e = ot(22, e, r, t),
    e.elementType = _f,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function kl(e, t, n) {
    return e = ot(6, e, null, t),
    e.lanes = n,
    e
}
function Nl(e, t, n) {
    return t = ot(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function zg(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = sl(0),
    this.expirationTimes = sl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = sl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Au(e, t, n, r, o, i, s, l, a) {
    return e = new zg(e,t,n,l,a),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = ot(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    gu(i),
    e
}
function Fg(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: lr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Ch(e) {
    if (!e)
        return kn;
    e = e._reactInternals;
    e: {
        if (er(e) !== e || e.tag !== 1)
            throw Error(j(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if ($e(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(j(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if ($e(n))
            return Cp(e, n, t)
    }
    return t
}
function kh(e, t, n, r, o, i, s, l, a) {
    return e = Au(n, r, !0, e, o, i, s, l, a),
    e.context = Ch(null),
    n = e.current,
    r = Ae(),
    o = bn(n),
    i = $t(r, o),
    i.callback = t ?? null,
    wn(n, i, o),
    e.current.lanes = o,
    Yo(e, o, r),
    Be(e, r),
    e
}
function Os(e, t, n, r) {
    var o = t.current
      , i = Ae()
      , s = bn(o);
    return n = Ch(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = $t(i, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = wn(o, t, s),
    e !== null && (vt(e, o, s, i),
    Oi(e, o, s)),
    s
}
function ds(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function hd(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Du(e, t) {
    hd(e, t),
    (e = e.alternate) && hd(e, t)
}
function $g() {
    return null
}
var Nh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Lu(e) {
    this._internalRoot = e
}
_s.prototype.render = Lu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(j(409));
    Os(e, t, null, null)
}
;
_s.prototype.unmount = Lu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Xn(function() {
            Os(null, e, null, null)
        }),
        t[Ut] = null
    }
}
;
function _s(e) {
    this._internalRoot = e
}
_s.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = rp();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < sn.length && t !== 0 && t < sn[n].priority; n++)
            ;
        sn.splice(n, 0, e),
        n === 0 && ip(e)
    }
}
;
function Iu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function As(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function md() {}
function Bg(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = ds(s);
                i.call(u)
            }
        }
        var s = kh(t, r, e, 0, null, !1, !1, "", md);
        return e._reactRootContainer = s,
        e[Ut] = s.current,
        Oo(e.nodeType === 8 ? e.parentNode : e),
        Xn(),
        s
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = ds(a);
            l.call(u)
        }
    }
    var a = Au(e, 0, !1, null, null, !1, !1, "", md);
    return e._reactRootContainer = a,
    e[Ut] = a.current,
    Oo(e.nodeType === 8 ? e.parentNode : e),
    Xn(function() {
        Os(t, a, n, r)
    }),
    a
}
function Ds(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var a = ds(s);
                l.call(a)
            }
        }
        Os(t, s, e, o)
    } else
        s = Bg(n, t, e, o, r);
    return ds(s)
}
tp = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = fo(t.pendingLanes);
            n !== 0 && (nu(t, n | 1),
            Be(t, pe()),
            !(X & 6) && (Vr = pe() + 500,
            On()))
        }
        break;
    case 13:
        Xn(function() {
            var r = Vt(e, 1);
            if (r !== null) {
                var o = Ae();
                vt(r, e, 1, o)
            }
        }),
        Du(e, 1)
    }
}
;
ru = function(e) {
    if (e.tag === 13) {
        var t = Vt(e, 134217728);
        if (t !== null) {
            var n = Ae();
            vt(t, e, 134217728, n)
        }
        Du(e, 134217728)
    }
}
;
np = function(e) {
    if (e.tag === 13) {
        var t = bn(e)
          , n = Vt(e, t);
        if (n !== null) {
            var r = Ae();
            vt(n, e, t, r)
        }
        Du(e, t)
    }
}
;
rp = function() {
    return J
}
;
op = function(e, t) {
    var n = J;
    try {
        return J = e,
        t()
    } finally {
        J = n
    }
}
;
Gl = function(e, t, n) {
    switch (t) {
    case "input":
        if (Ul(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = ks(r);
                    if (!o)
                        throw Error(j(90));
                    Df(r),
                    Ul(r, o)
                }
            }
        }
        break;
    case "textarea":
        If(e, n);
        break;
    case "select":
        t = n.value,
        t != null && xr(e, !!n.multiple, t, !1)
    }
}
;
Hf = Ru;
Wf = Xn;
var Ug = {
    usingClientEntryPoint: !1,
    Events: [Xo, fr, ks, Uf, Vf, Ru]
}
  , so = {
    findFiberByHostInstance: Ln,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Vg = {
    bundleType: so.bundleType,
    version: so.version,
    rendererPackageName: so.rendererPackageName,
    rendererConfig: so.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Kt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Yf(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: so.findFiberByHostInstance || $g,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Si.isDisabled && Si.supportsFiber)
        try {
            Ss = Si.inject(Vg),
            jt = Si
        } catch {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ug;
Je.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Iu(t))
        throw Error(j(200));
    return Fg(e, t, null, n)
}
;
Je.createRoot = function(e, t) {
    if (!Iu(e))
        throw Error(j(299));
    var n = !1
      , r = ""
      , o = Nh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Au(e, 1, !1, null, null, n, !1, r, o),
    e[Ut] = t.current,
    Oo(e.nodeType === 8 ? e.parentNode : e),
    new Lu(t)
}
;
Je.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","),
        Error(j(268, e)));
    return e = Yf(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Je.flushSync = function(e) {
    return Xn(e)
}
;
Je.hydrate = function(e, t, n) {
    if (!As(t))
        throw Error(j(200));
    return Ds(null, e, t, !0, n)
}
;
Je.hydrateRoot = function(e, t, n) {
    if (!Iu(e))
        throw Error(j(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , s = Nh;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = kh(t, null, e, 1, n ?? null, o, !1, i, s),
    e[Ut] = t.current,
    Oo(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new _s(t)
}
;
Je.render = function(e, t, n) {
    if (!As(t))
        throw Error(j(200));
    return Ds(null, e, t, !1, n)
}
;
Je.unmountComponentAtNode = function(e) {
    if (!As(e))
        throw Error(j(40));
    return e._reactRootContainer ? (Xn(function() {
        Ds(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Ut] = null
        })
    }),
    !0) : !1
}
;
Je.unstable_batchedUpdates = Ru;
Je.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!As(n))
        throw Error(j(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(j(38));
    return Ds(e, t, n, !1, r)
}
;
Je.version = "18.3.1-next-f1338f8080-20240426";
function Ph() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ph)
        } catch (e) {
            console.error(e)
        }
}
Ph(),
Pf.exports = Je;
var Zo = Pf.exports;
const Th = mf(Zo);
var jh, vd = Zo;
jh = vd.createRoot,
vd.hydrateRoot;
const Hg = 1
  , Wg = 1e6;
let Pl = 0;
function Qg() {
    return Pl = (Pl + 1) % Number.MAX_SAFE_INTEGER,
    Pl.toString()
}
const Tl = new Map
  , gd = e => {
    if (Tl.has(e))
        return;
    const t = setTimeout( () => {
        Tl.delete(e),
        Eo({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , Wg);
    Tl.set(e, t)
}
  , Kg = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, Hg)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? gd(n) : e.toasts.forEach(r => {
                gd(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , Fi = [];
let $i = {
    toasts: []
};
function Eo(e) {
    $i = Kg($i, e),
    Fi.forEach(t => {
        t($i)
    }
    )
}
function Yg({...e}) {
    const t = Qg()
      , n = o => Eo({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => Eo({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Eo({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function Gg() {
    const [e,t] = x.useState($i);
    return x.useEffect( () => (Fi.push(t),
    () => {
        const n = Fi.indexOf(t);
        n > -1 && Fi.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: Yg,
        dismiss: n => Eo({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function ve(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Xg(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}
function Rh(...e) {
    return t => e.forEach(n => Xg(n, t))
}
function yt(...e) {
    return x.useCallback(Rh(...e), e)
}
function qg(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = x.createContext(s)
          , a = n.length;
        n = [...n, s];
        function u(d) {
            const {scope: c, children: y, ...w} = d
              , g = (c == null ? void 0 : c[e][a]) || l
              , S = x.useMemo( () => w, Object.values(w));
            return f.jsx(g.Provider, {
                value: S,
                children: y
            })
        }
        function p(d, c) {
            const y = (c == null ? void 0 : c[e][a]) || l
              , w = x.useContext(y);
            if (w)
                return w;
            if (s !== void 0)
                return s;
            throw new Error(`\`${d}\` must be used within \`${i}\``)
        }
        return u.displayName = i + "Provider",
        [u, p]
    }
    const o = () => {
        const i = n.map(s => x.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return x.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, Zg(o, ...t)]
}
function Zg(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const d = a(i)[`__scope${u}`];
                return {
                    ...l,
                    ...d
                }
            }
            , {});
            return x.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var fs = x.forwardRef( (e, t) => {
    const {children: n, ...r} = e
      , o = x.Children.toArray(n)
      , i = o.find(Jg);
    if (i) {
        const s = i.props.children
          , l = o.map(a => a === i ? x.Children.count(s) > 1 ? x.Children.only(null) : x.isValidElement(s) ? s.props.children : null : a);
        return f.jsx(Ta, {
            ...r,
            ref: t,
            children: x.isValidElement(s) ? x.cloneElement(s, void 0, l) : null
        })
    }
    return f.jsx(Ta, {
        ...r,
        ref: t,
        children: n
    })
}
);
fs.displayName = "Slot";
var Ta = x.forwardRef( (e, t) => {
    const {children: n, ...r} = e;
    if (x.isValidElement(n)) {
        const o = ty(n);
        return x.cloneElement(n, {
            ...ey(r, n.props),
            ref: t ? Rh(t, o) : o
        })
    }
    return x.Children.count(n) > 1 ? x.Children.only(null) : null
}
);
Ta.displayName = "SlotClone";
var Mh = ({children: e}) => f.jsx(f.Fragment, {
    children: e
});
function Jg(e) {
    return x.isValidElement(e) && e.type === Mh
}
function ey(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
            i(...l),
            o(...l)
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function ty(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function ny(e) {
    const t = e + "CollectionProvider"
      , [n,r] = qg(t)
      , [o,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = y => {
        const {scope: w, children: g} = y
          , S = M.useRef(null)
          , m = M.useRef(new Map).current;
        return f.jsx(o, {
            scope: w,
            itemMap: m,
            collectionRef: S,
            children: g
        })
    }
    ;
    s.displayName = t;
    const l = e + "CollectionSlot"
      , a = M.forwardRef( (y, w) => {
        const {scope: g, children: S} = y
          , m = i(l, g)
          , h = yt(w, m.collectionRef);
        return f.jsx(fs, {
            ref: h,
            children: S
        })
    }
    );
    a.displayName = l;
    const u = e + "CollectionItemSlot"
      , p = "data-radix-collection-item"
      , d = M.forwardRef( (y, w) => {
        const {scope: g, children: S, ...m} = y
          , h = M.useRef(null)
          , v = yt(w, h)
          , b = i(u, g);
        return M.useEffect( () => (b.itemMap.set(h, {
            ref: h,
            ...m
        }),
        () => void b.itemMap.delete(h))),
        f.jsx(fs, {
            [p]: "",
            ref: v,
            children: S
        })
    }
    );
    d.displayName = u;
    function c(y) {
        const w = i(e + "CollectionConsumer", y);
        return M.useCallback( () => {
            const S = w.collectionRef.current;
            if (!S)
                return [];
            const m = Array.from(S.querySelectorAll(`[${p}]`));
            return Array.from(w.itemMap.values()).sort( (b, E) => m.indexOf(b.ref.current) - m.indexOf(E.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: s,
        Slot: a,
        ItemSlot: d
    }, c, r]
}
function Oh(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = x.createContext(s)
          , a = n.length;
        n = [...n, s];
        const u = d => {
            var m;
            const {scope: c, children: y, ...w} = d
              , g = ((m = c == null ? void 0 : c[e]) == null ? void 0 : m[a]) || l
              , S = x.useMemo( () => w, Object.values(w));
            return f.jsx(g.Provider, {
                value: S,
                children: y
            })
        }
        ;
        u.displayName = i + "Provider";
        function p(d, c) {
            var g;
            const y = ((g = c == null ? void 0 : c[e]) == null ? void 0 : g[a]) || l
              , w = x.useContext(y);
            if (w)
                return w;
            if (s !== void 0)
                return s;
            throw new Error(`\`${d}\` must be used within \`${i}\``)
        }
        return [u, p]
    }
    const o = () => {
        const i = n.map(s => x.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return x.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, ry(o, ...t)]
}
function ry(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const d = a(i)[`__scope${u}`];
                return {
                    ...l,
                    ...d
                }
            }
            , {});
            return x.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var oy = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , Ve = oy.reduce( (e, t) => {
    const n = x.forwardRef( (r, o) => {
        const {asChild: i, ...s} = r
          , l = i ? fs : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        f.jsx(l, {
            ...s,
            ref: o
        })
    }
    );
    return n.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: n
    }
}
, {});
function _h(e, t) {
    e && Zo.flushSync( () => e.dispatchEvent(t))
}
function Mt(e) {
    const t = x.useRef(e);
    return x.useEffect( () => {
        t.current = e
    }
    ),
    x.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function iy(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Mt(e);
    x.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var sy = "DismissableLayer", ja = "dismissableLayer.update", ly = "dismissableLayer.pointerDownOutside", ay = "dismissableLayer.focusOutside", yd, Ah = x.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), zu = x.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: l, ...a} = e
      , u = x.useContext(Ah)
      , [p,d] = x.useState(null)
      , c = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,y] = x.useState({})
      , w = yt(t, N => d(N))
      , g = Array.from(u.layers)
      , [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , m = g.indexOf(S)
      , h = p ? g.indexOf(p) : -1
      , v = u.layersWithOutsidePointerEventsDisabled.size > 0
      , b = h >= m
      , E = cy(N => {
        const T = N.target
          , L = [...u.branches].some(O => O.contains(T));
        !b || L || (o == null || o(N),
        s == null || s(N),
        N.defaultPrevented || l == null || l())
    }
    , c)
      , k = dy(N => {
        const T = N.target;
        [...u.branches].some(O => O.contains(T)) || (i == null || i(N),
        s == null || s(N),
        N.defaultPrevented || l == null || l())
    }
    , c);
    return iy(N => {
        h === u.layers.size - 1 && (r == null || r(N),
        !N.defaultPrevented && l && (N.preventDefault(),
        l()))
    }
    , c),
    x.useEffect( () => {
        if (p)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (yd = c.body.style.pointerEvents,
            c.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(p)),
            u.layers.add(p),
            xd(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (c.body.style.pointerEvents = yd)
            }
    }
    , [p, c, n, u]),
    x.useEffect( () => () => {
        p && (u.layers.delete(p),
        u.layersWithOutsidePointerEventsDisabled.delete(p),
        xd())
    }
    , [p, u]),
    x.useEffect( () => {
        const N = () => y({});
        return document.addEventListener(ja, N),
        () => document.removeEventListener(ja, N)
    }
    , []),
    f.jsx(Ve.div, {
        ...a,
        ref: w,
        style: {
            pointerEvents: v ? b ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: ve(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: ve(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: ve(e.onPointerDownCapture, E.onPointerDownCapture)
    })
}
);
zu.displayName = sy;
var uy = "DismissableLayerBranch"
  , Dh = x.forwardRef( (e, t) => {
    const n = x.useContext(Ah)
      , r = x.useRef(null)
      , o = yt(t, r);
    return x.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    f.jsx(Ve.div, {
        ...e,
        ref: o
    })
}
);
Dh.displayName = uy;
function cy(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Mt(e)
      , r = x.useRef(!1)
      , o = x.useRef( () => {}
    );
    return x.useEffect( () => {
        const i = l => {
            if (l.target && !r.current) {
                let a = function() {
                    Lh(ly, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: l
                };
                l.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = a,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : a()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , s = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(s),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function dy(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Mt(e)
      , r = x.useRef(!1);
    return x.useEffect( () => {
        const o = i => {
            i.target && !r.current && Lh(ay, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function xd() {
    const e = new CustomEvent(ja);
    document.dispatchEvent(e)
}
function Lh(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? _h(o, i) : o.dispatchEvent(i)
}
var fy = zu
  , py = Dh
  , qn = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {}
  , hy = "Portal"
  , Ih = x.forwardRef( (e, t) => {
    var l;
    const {container: n, ...r} = e
      , [o,i] = x.useState(!1);
    qn( () => i(!0), []);
    const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return s ? Th.createPortal(f.jsx(Ve.div, {
        ...r,
        ref: t
    }), s) : null
}
);
Ih.displayName = hy;
function my(e, t) {
    return x.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Fu = e => {
    const {present: t, children: n} = e
      , r = vy(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : x.Children.only(n)
      , i = yt(r.ref, gy(o));
    return typeof n == "function" || r.isPresent ? x.cloneElement(o, {
        ref: i
    }) : null
}
;
Fu.displayName = "Presence";
function vy(e) {
    const [t,n] = x.useState()
      , r = x.useRef({})
      , o = x.useRef(e)
      , i = x.useRef("none")
      , s = e ? "mounted" : "unmounted"
      , [l,a] = my(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return x.useEffect( () => {
        const u = bi(r.current);
        i.current = l === "mounted" ? u : "none"
    }
    , [l]),
    qn( () => {
        const u = r.current
          , p = o.current;
        if (p !== e) {
            const c = i.current
              , y = bi(u);
            e ? a("MOUNT") : y === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(p && c !== y ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, a]),
    qn( () => {
        if (t) {
            let u;
            const p = t.ownerDocument.defaultView ?? window
              , d = y => {
                const g = bi(r.current).includes(y.animationName);
                if (y.target === t && g && (a("ANIMATION_END"),
                !o.current)) {
                    const S = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = p.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S)
                    }
                    )
                }
            }
              , c = y => {
                y.target === t && (i.current = bi(r.current))
            }
            ;
            return t.addEventListener("animationstart", c),
            t.addEventListener("animationcancel", d),
            t.addEventListener("animationend", d),
            () => {
                p.clearTimeout(u),
                t.removeEventListener("animationstart", c),
                t.removeEventListener("animationcancel", d),
                t.removeEventListener("animationend", d)
            }
        } else
            a("ANIMATION_END")
    }
    , [t, a]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: x.useCallback(u => {
            u && (r.current = getComputedStyle(u)),
            n(u)
        }
        , [])
    }
}
function bi(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function gy(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function yy({prop: e, defaultProp: t, onChange: n= () => {}
}) {
    const [r,o] = xy({
        defaultProp: t,
        onChange: n
    })
      , i = e !== void 0
      , s = i ? e : r
      , l = Mt(n)
      , a = x.useCallback(u => {
        if (i) {
            const d = typeof u == "function" ? u(e) : u;
            d !== e && l(d)
        } else
            o(u)
    }
    , [i, e, o, l]);
    return [s, a]
}
function xy({defaultProp: e, onChange: t}) {
    const n = x.useState(e)
      , [r] = n
      , o = x.useRef(r)
      , i = Mt(t);
    return x.useEffect( () => {
        o.current !== r && (i(r),
        o.current = r)
    }
    , [r, o, i]),
    n
}
var wy = "VisuallyHidden"
  , Ls = x.forwardRef( (e, t) => f.jsx(Ve.span, {
    ...e,
    ref: t,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
    }
}));
Ls.displayName = wy;
var Sy = Ls
  , $u = "ToastProvider"
  , [Bu,by,Ey] = ny("Toast")
  , [zh,X2] = Oh("Toast", [Ey])
  , [Cy,Is] = zh($u)
  , Fh = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: i=50, children: s} = e
      , [l,a] = x.useState(null)
      , [u,p] = x.useState(0)
      , d = x.useRef(!1)
      , c = x.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${$u}\`. Expected non-empty \`string\`.`),
    f.jsx(Bu.Provider, {
        scope: t,
        children: f.jsx(Cy, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: l,
            onViewportChange: a,
            onToastAdd: x.useCallback( () => p(y => y + 1), []),
            onToastRemove: x.useCallback( () => p(y => y - 1), []),
            isFocusedToastEscapeKeyDownRef: d,
            isClosePausedRef: c,
            children: s
        })
    })
}
;
Fh.displayName = $u;
var $h = "ToastViewport"
  , ky = ["F8"]
  , Ra = "toast.viewportPause"
  , Ma = "toast.viewportResume"
  , Bh = x.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=ky, label: o="Notifications ({hotkey})", ...i} = e
      , s = Is($h, n)
      , l = by(n)
      , a = x.useRef(null)
      , u = x.useRef(null)
      , p = x.useRef(null)
      , d = x.useRef(null)
      , c = yt(t, d, s.onViewportChange)
      , y = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , w = s.toastCount > 0;
    x.useEffect( () => {
        const S = m => {
            var v;
            r.length !== 0 && r.every(b => m[b] || m.code === b) && ((v = d.current) == null || v.focus())
        }
        ;
        return document.addEventListener("keydown", S),
        () => document.removeEventListener("keydown", S)
    }
    , [r]),
    x.useEffect( () => {
        const S = a.current
          , m = d.current;
        if (w && S && m) {
            const h = () => {
                if (!s.isClosePausedRef.current) {
                    const k = new CustomEvent(Ra);
                    m.dispatchEvent(k),
                    s.isClosePausedRef.current = !0
                }
            }
              , v = () => {
                if (s.isClosePausedRef.current) {
                    const k = new CustomEvent(Ma);
                    m.dispatchEvent(k),
                    s.isClosePausedRef.current = !1
                }
            }
              , b = k => {
                !S.contains(k.relatedTarget) && v()
            }
              , E = () => {
                S.contains(document.activeElement) || v()
            }
            ;
            return S.addEventListener("focusin", h),
            S.addEventListener("focusout", b),
            S.addEventListener("pointermove", h),
            S.addEventListener("pointerleave", E),
            window.addEventListener("blur", h),
            window.addEventListener("focus", v),
            () => {
                S.removeEventListener("focusin", h),
                S.removeEventListener("focusout", b),
                S.removeEventListener("pointermove", h),
                S.removeEventListener("pointerleave", E),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", v)
            }
        }
    }
    , [w, s.isClosePausedRef]);
    const g = x.useCallback( ({tabbingDirection: S}) => {
        const h = l().map(v => {
            const b = v.ref.current
              , E = [b, ...zy(b)];
            return S === "forwards" ? E : E.reverse()
        }
        );
        return (S === "forwards" ? h.reverse() : h).flat()
    }
    , [l]);
    return x.useEffect( () => {
        const S = d.current;
        if (S) {
            const m = h => {
                var E, k, N;
                const v = h.altKey || h.ctrlKey || h.metaKey;
                if (h.key === "Tab" && !v) {
                    const T = document.activeElement
                      , L = h.shiftKey;
                    if (h.target === S && L) {
                        (E = u.current) == null || E.focus();
                        return
                    }
                    const I = g({
                        tabbingDirection: L ? "backwards" : "forwards"
                    })
                      , W = I.findIndex(_ => _ === T);
                    jl(I.slice(W + 1)) ? h.preventDefault() : L ? (k = u.current) == null || k.focus() : (N = p.current) == null || N.focus()
                }
            }
            ;
            return S.addEventListener("keydown", m),
            () => S.removeEventListener("keydown", m)
        }
    }
    , [l, g]),
    f.jsxs(py, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", y),
        tabIndex: -1,
        style: {
            pointerEvents: w ? void 0 : "none"
        },
        children: [w && f.jsx(Oa, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const S = g({
                    tabbingDirection: "forwards"
                });
                jl(S)
            }
        }), f.jsx(Bu.Slot, {
            scope: n,
            children: f.jsx(Ve.ol, {
                tabIndex: -1,
                ...i,
                ref: c
            })
        }), w && f.jsx(Oa, {
            ref: p,
            onFocusFromOutsideViewport: () => {
                const S = g({
                    tabbingDirection: "backwards"
                });
                jl(S)
            }
        })]
    })
}
);
Bh.displayName = $h;
var Uh = "ToastFocusProxy"
  , Oa = x.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , i = Is(Uh, n);
    return f.jsx(Ls, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: s => {
            var u;
            const l = s.relatedTarget;
            !((u = i.viewport) != null && u.contains(l)) && r()
        }
    })
}
);
Oa.displayName = Uh;
var zs = "Toast"
  , Ny = "toast.swipeStart"
  , Py = "toast.swipeMove"
  , Ty = "toast.swipeCancel"
  , jy = "toast.swipeEnd"
  , Vh = x.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s} = e
      , [l=!0,a] = yy({
        prop: r,
        defaultProp: o,
        onChange: i
    });
    return f.jsx(Fu, {
        present: n || l,
        children: f.jsx(Oy, {
            open: l,
            ...s,
            ref: t,
            onClose: () => a(!1),
            onPause: Mt(e.onPause),
            onResume: Mt(e.onResume),
            onSwipeStart: ve(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: ve(e.onSwipeMove, u => {
                const {x: p, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${p}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
            }
            ),
            onSwipeCancel: ve(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: ve(e.onSwipeEnd, u => {
                const {x: p, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${p}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                a(!1)
            }
            )
        })
    })
}
);
Vh.displayName = zs;
var [Ry,My] = zh(zs, {
    onClose() {}
})
  , Oy = x.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: l, onPause: a, onResume: u, onSwipeStart: p, onSwipeMove: d, onSwipeCancel: c, onSwipeEnd: y, ...w} = e
      , g = Is(zs, n)
      , [S,m] = x.useState(null)
      , h = yt(t, _ => m(_))
      , v = x.useRef(null)
      , b = x.useRef(null)
      , E = o || g.duration
      , k = x.useRef(0)
      , N = x.useRef(E)
      , T = x.useRef(0)
      , {onToastAdd: L, onToastRemove: O} = g
      , $ = Mt( () => {
        var Q;
        (S == null ? void 0 : S.contains(document.activeElement)) && ((Q = g.viewport) == null || Q.focus()),
        s()
    }
    )
      , I = x.useCallback(_ => {
        !_ || _ === 1 / 0 || (window.clearTimeout(T.current),
        k.current = new Date().getTime(),
        T.current = window.setTimeout($, _))
    }
    , [$]);
    x.useEffect( () => {
        const _ = g.viewport;
        if (_) {
            const Q = () => {
                I(N.current),
                u == null || u()
            }
              , B = () => {
                const K = new Date().getTime() - k.current;
                N.current = N.current - K,
                window.clearTimeout(T.current),
                a == null || a()
            }
            ;
            return _.addEventListener(Ra, B),
            _.addEventListener(Ma, Q),
            () => {
                _.removeEventListener(Ra, B),
                _.removeEventListener(Ma, Q)
            }
        }
    }
    , [g.viewport, E, a, u, I]),
    x.useEffect( () => {
        i && !g.isClosePausedRef.current && I(E)
    }
    , [i, E, g.isClosePausedRef, I]),
    x.useEffect( () => (L(),
    () => O()), [L, O]);
    const W = x.useMemo( () => S ? Xh(S) : null, [S]);
    return g.viewport ? f.jsxs(f.Fragment, {
        children: [W && f.jsx(_y, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: W
        }), f.jsx(Ry, {
            scope: n,
            onClose: $,
            children: Zo.createPortal(f.jsx(Bu.ItemSlot, {
                scope: n,
                children: f.jsx(fy, {
                    asChild: !0,
                    onEscapeKeyDown: ve(l, () => {
                        g.isFocusedToastEscapeKeyDownRef.current || $(),
                        g.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: f.jsx(Ve.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": g.swipeDirection,
                        ...w,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: ve(e.onKeyDown, _ => {
                            _.key === "Escape" && (l == null || l(_.nativeEvent),
                            _.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0,
                            $()))
                        }
                        ),
                        onPointerDown: ve(e.onPointerDown, _ => {
                            _.button === 0 && (v.current = {
                                x: _.clientX,
                                y: _.clientY
                            })
                        }
                        ),
                        onPointerMove: ve(e.onPointerMove, _ => {
                            if (!v.current)
                                return;
                            const Q = _.clientX - v.current.x
                              , B = _.clientY - v.current.y
                              , K = !!b.current
                              , C = ["left", "right"].includes(g.swipeDirection)
                              , R = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max
                              , z = C ? R(0, Q) : 0
                              , D = C ? 0 : R(0, B)
                              , F = _.pointerType === "touch" ? 10 : 2
                              , G = {
                                x: z,
                                y: D
                            }
                              , le = {
                                originalEvent: _,
                                delta: G
                            };
                            K ? (b.current = G,
                            Ei(Py, d, le, {
                                discrete: !1
                            })) : wd(G, g.swipeDirection, F) ? (b.current = G,
                            Ei(Ny, p, le, {
                                discrete: !1
                            }),
                            _.target.setPointerCapture(_.pointerId)) : (Math.abs(Q) > F || Math.abs(B) > F) && (v.current = null)
                        }
                        ),
                        onPointerUp: ve(e.onPointerUp, _ => {
                            const Q = b.current
                              , B = _.target;
                            if (B.hasPointerCapture(_.pointerId) && B.releasePointerCapture(_.pointerId),
                            b.current = null,
                            v.current = null,
                            Q) {
                                const K = _.currentTarget
                                  , C = {
                                    originalEvent: _,
                                    delta: Q
                                };
                                wd(Q, g.swipeDirection, g.swipeThreshold) ? Ei(jy, y, C, {
                                    discrete: !0
                                }) : Ei(Ty, c, C, {
                                    discrete: !0
                                }),
                                K.addEventListener("click", R => R.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), g.viewport)
        })]
    }) : null
}
)
  , _y = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = Is(zs, t)
      , [i,s] = x.useState(!1)
      , [l,a] = x.useState(!1);
    return Ly( () => s(!0)),
    x.useEffect( () => {
        const u = window.setTimeout( () => a(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    l ? null : f.jsx(Ih, {
        asChild: !0,
        children: f.jsx(Ls, {
            ...r,
            children: i && f.jsxs(f.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , Ay = "ToastTitle"
  , Hh = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return f.jsx(Ve.div, {
        ...r,
        ref: t
    })
}
);
Hh.displayName = Ay;
var Dy = "ToastDescription"
  , Wh = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return f.jsx(Ve.div, {
        ...r,
        ref: t
    })
}
);
Wh.displayName = Dy;
var Qh = "ToastAction"
  , Kh = x.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? f.jsx(Gh, {
        altText: n,
        asChild: !0,
        children: f.jsx(Uu, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Qh}\`. Expected non-empty \`string\`.`),
    null)
}
);
Kh.displayName = Qh;
var Yh = "ToastClose"
  , Uu = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = My(Yh, n);
    return f.jsx(Gh, {
        asChild: !0,
        children: f.jsx(Ve.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: ve(e.onClick, o.onClose)
        })
    })
}
);
Uu.displayName = Yh;
var Gh = x.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return f.jsx(Ve.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function Xh(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        Iy(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...Xh(r))
        }
    }
    ),
    t
}
function Ei(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? _h(o, i) : o.dispatchEvent(i)
}
var wd = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}
;
function Ly(e= () => {}
) {
    const t = Mt(e);
    qn( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function Iy(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function zy(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function jl(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var Fy = Fh
  , qh = Bh
  , Zh = Vh
  , Jh = Hh
  , em = Wh
  , tm = Kh
  , nm = Uu;
function rm(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = rm(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function om() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = rm(e)) && (r && (r += " "),
        r += t);
    return r
}
const Sd = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , bd = om
  , $y = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return bd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: i} = t
      , s = Object.keys(o).map(u => {
        const p = n == null ? void 0 : n[u]
          , d = i == null ? void 0 : i[u];
        if (p === null)
            return null;
        const c = Sd(p) || Sd(d);
        return o[u][c]
    }
    )
      , l = n && Object.entries(n).reduce( (u, p) => {
        let[d,c] = p;
        return c === void 0 || (u[d] = c),
        u
    }
    , {})
      , a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, p) => {
        let {class: d, className: c, ...y} = p;
        return Object.entries(y).every(w => {
            let[g,S] = w;
            return Array.isArray(S) ? S.includes({
                ...i,
                ...l
            }[g]) : {
                ...i,
                ...l
            }[g] === S
        }
        ) ? [...u, d, c] : u
    }
    , []);
    return bd(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const By = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , im = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Uy = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vy = x.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: i, iconNode: s, ...l}, a) => x.createElement("svg", {
    ref: a,
    ...Uy,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: im("lucide", o),
    ...l
}, [...s.map( ([u,p]) => x.createElement(u, p)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ce = (e, t) => {
    const n = x.forwardRef( ({className: r, ...o}, i) => x.createElement(Vy, {
        ref: i,
        iconNode: t,
        className: im(`lucide-${By(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hy = Ce("Bot", [["path", {
    d: "M12 8V4H8",
    key: "hb8ula"
}], ["rect", {
    width: "16",
    height: "12",
    x: "4",
    y: "8",
    rx: "2",
    key: "enze0r"
}], ["path", {
    d: "M2 14h2",
    key: "vft8re"
}], ["path", {
    d: "M20 14h2",
    key: "4cs60a"
}], ["path", {
    d: "M15 13v2",
    key: "1xurst"
}], ["path", {
    d: "M9 13v2",
    key: "rq6x2g"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wy = Ce("Code", [["polyline", {
    points: "16 18 22 12 16 6",
    key: "z7tu5w"
}], ["polyline", {
    points: "8 6 2 12 8 18",
    key: "1eg1df"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qy = Ce("Copy", [["rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2",
    key: "17jyea"
}], ["path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
    key: "zix9uf"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ed = Ce("Crown", [["path", {
    d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
    key: "1vdc57"
}], ["path", {
    d: "M5 21h14",
    key: "11awu3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cd = Ce("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ky = Ce("Globe", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sm = Ce("Heart", [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kd = Ce("Info", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 16v-4",
    key: "1dtifu"
}], ["path", {
    d: "M12 8h.01",
    key: "e9boi3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yy = Ce("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lm = Ce("MessageCircle", [["path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
    key: "vv11sd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rl = Ce("Server", [["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "2",
    rx: "2",
    ry: "2",
    key: "ngkwjq"
}], ["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "14",
    rx: "2",
    ry: "2",
    key: "iecqi9"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "6",
    y2: "6",
    key: "16zg32"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "18",
    y2: "18",
    key: "nzw8ys"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wn = Ce("Sparkles", [["path", {
    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
    key: "4pj2yx"
}], ["path", {
    d: "M20 3v4",
    key: "1olli1"
}], ["path", {
    d: "M22 5h-4",
    key: "1gvqau"
}], ["path", {
    d: "M4 17v2",
    key: "vumght"
}], ["path", {
    d: "M5 18H3",
    key: "zchphs"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vu = Ce("Star", [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ml = Ce("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nd = Ce("WandSparkles", [["path", {
    d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
    key: "ul74o6"
}], ["path", {
    d: "m14 7 3 3",
    key: "1r5n42"
}], ["path", {
    d: "M5 6v4",
    key: "ilb8ba"
}], ["path", {
    d: "M19 14v4",
    key: "blhpug"
}], ["path", {
    d: "M10 2v2",
    key: "7u0qdc"
}], ["path", {
    d: "M7 8H3",
    key: "zfb6yr"
}], ["path", {
    d: "M21 16h-4",
    key: "1cnmox"
}], ["path", {
    d: "M11 3H9",
    key: "1obp7u"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const am = Ce("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = Ce("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , Hu = "-"
  , Gy = e => {
    const t = qy(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: s => {
            const l = s.split(Hu);
            return l[0] === "" && l.length !== 1 && l.shift(),
            um(l, t) || Xy(s)
        }
        ,
        getConflictingClassGroupIds: (s, l) => {
            const a = n[s] || [];
            return l && r[s] ? [...a, ...r[s]] : a
        }
    }
}
  , um = (e, t) => {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? um(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const i = e.join(Hu);
    return (s = t.validators.find( ({validator: l}) => l(i))) == null ? void 0 : s.classGroupId
}
  , Pd = /^\[(.+)\]$/
  , Xy = e => {
    if (Pd.test(e)) {
        const t = Pd.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , qy = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return Jy(Object.entries(e.classGroups), n).forEach( ([i,s]) => {
        _a(s, r, i, t)
    }
    ),
    r
}
  , _a = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : Td(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (Zy(o)) {
                _a(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([i,s]) => {
            _a(s, Td(t, i), n, r)
        }
        )
    }
    )
}
  , Td = (e, t) => {
    let n = e;
    return t.split(Hu).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , Zy = e => e.isThemeGetter
  , Jy = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([s,l]) => [t + s, l])) : i);
    return [n, o]
}
) : e
  , ex = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (i, s) => {
        n.set(i, s),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(i) {
            let s = n.get(i);
            if (s !== void 0)
                return s;
            if ((s = r.get(i)) !== void 0)
                return o(i, s),
                s
        },
        set(i, s) {
            n.has(i) ? n.set(i, s) : o(i, s)
        }
    }
}
  , cm = "!"
  , tx = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , i = t.length
      , s = l => {
        const a = [];
        let u = 0, p = 0, d;
        for (let S = 0; S < l.length; S++) {
            let m = l[S];
            if (u === 0) {
                if (m === o && (r || l.slice(S, S + i) === t)) {
                    a.push(l.slice(p, S)),
                    p = S + i;
                    continue
                }
                if (m === "/") {
                    d = S;
                    continue
                }
            }
            m === "[" ? u++ : m === "]" && u--
        }
        const c = a.length === 0 ? l : l.substring(p)
          , y = c.startsWith(cm)
          , w = y ? c.substring(1) : c
          , g = d && d > p ? d - p : void 0;
        return {
            modifiers: a,
            hasImportantModifier: y,
            baseClassName: w,
            maybePostfixModifierPosition: g
        }
    }
    ;
    return n ? l => n({
        className: l,
        parseClassName: s
    }) : s
}
  , nx = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , rx = e => ({
    cache: ex(e.cacheSize),
    parseClassName: tx(e),
    ...Gy(e)
})
  , ox = /\s+/
  , ix = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , i = []
      , s = e.trim().split(ox);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
        const u = s[a]
          , {modifiers: p, hasImportantModifier: d, baseClassName: c, maybePostfixModifierPosition: y} = n(u);
        let w = !!y
          , g = r(w ? c.substring(0, y) : c);
        if (!g) {
            if (!w) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            if (g = r(c),
            !g) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            w = !1
        }
        const S = nx(p).join(":")
          , m = d ? S + cm : S
          , h = m + g;
        if (i.includes(h))
            continue;
        i.push(h);
        const v = o(g, w);
        for (let b = 0; b < v.length; ++b) {
            const E = v[b];
            i.push(m + E)
        }
        l = u + (l.length > 0 ? " " + l : l)
    }
    return l
}
;
function sx() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = dm(t)) && (r && (r += " "),
        r += n);
    return r
}
const dm = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = dm(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function lx(e, ...t) {
    let n, r, o, i = s;
    function s(a) {
        const u = t.reduce( (p, d) => d(p), e());
        return n = rx(u),
        r = n.cache.get,
        o = n.cache.set,
        i = l,
        l(a)
    }
    function l(a) {
        const u = r(a);
        if (u)
            return u;
        const p = ix(a, n);
        return o(a, p),
        p
    }
    return function() {
        return i(sx.apply(null, arguments))
    }
}
const re = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , fm = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , ax = /^\d+\/\d+$/
  , ux = new Set(["px", "full", "screen"])
  , cx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , dx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , fx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , px = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , hx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , At = e => kr(e) || ux.has(e) || ax.test(e)
  , en = e => Gr(e, "length", bx)
  , kr = e => !!e && !Number.isNaN(Number(e))
  , Ol = e => Gr(e, "number", kr)
  , lo = e => !!e && Number.isInteger(Number(e))
  , mx = e => e.endsWith("%") && kr(e.slice(0, -1))
  , V = e => fm.test(e)
  , tn = e => cx.test(e)
  , vx = new Set(["length", "size", "percentage"])
  , gx = e => Gr(e, vx, pm)
  , yx = e => Gr(e, "position", pm)
  , xx = new Set(["image", "url"])
  , wx = e => Gr(e, xx, Cx)
  , Sx = e => Gr(e, "", Ex)
  , ao = () => !0
  , Gr = (e, t, n) => {
    const r = fm.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , bx = e => dx.test(e) && !fx.test(e)
  , pm = () => !1
  , Ex = e => px.test(e)
  , Cx = e => hx.test(e)
  , kx = () => {
    const e = re("colors")
      , t = re("spacing")
      , n = re("blur")
      , r = re("brightness")
      , o = re("borderColor")
      , i = re("borderRadius")
      , s = re("borderSpacing")
      , l = re("borderWidth")
      , a = re("contrast")
      , u = re("grayscale")
      , p = re("hueRotate")
      , d = re("invert")
      , c = re("gap")
      , y = re("gradientColorStops")
      , w = re("gradientColorStopPositions")
      , g = re("inset")
      , S = re("margin")
      , m = re("opacity")
      , h = re("padding")
      , v = re("saturate")
      , b = re("scale")
      , E = re("sepia")
      , k = re("skew")
      , N = re("space")
      , T = re("translate")
      , L = () => ["auto", "contain", "none"]
      , O = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , $ = () => ["auto", V, t]
      , I = () => [V, t]
      , W = () => ["", At, en]
      , _ = () => ["auto", kr, V]
      , Q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , B = () => ["solid", "dashed", "dotted", "double", "none"]
      , K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , C = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , R = () => ["", "0", V]
      , z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , D = () => [kr, V];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [ao],
            spacing: [At, en],
            blur: ["none", "", tn, V],
            brightness: D(),
            borderColor: [e],
            borderRadius: ["none", "", "full", tn, V],
            borderSpacing: I(),
            borderWidth: W(),
            contrast: D(),
            grayscale: R(),
            hueRotate: D(),
            invert: R(),
            gap: I(),
            gradientColorStops: [e],
            gradientColorStopPositions: [mx, en],
            inset: $(),
            margin: $(),
            opacity: D(),
            padding: I(),
            saturate: D(),
            scale: D(),
            sepia: R(),
            skew: D(),
            space: I(),
            translate: I()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", V]
            }],
            container: ["container"],
            columns: [{
                columns: [tn]
            }],
            "break-after": [{
                "break-after": z()
            }],
            "break-before": [{
                "break-before": z()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...Q(), V]
            }],
            overflow: [{
                overflow: O()
            }],
            "overflow-x": [{
                "overflow-x": O()
            }],
            "overflow-y": [{
                "overflow-y": O()
            }],
            overscroll: [{
                overscroll: L()
            }],
            "overscroll-x": [{
                "overscroll-x": L()
            }],
            "overscroll-y": [{
                "overscroll-y": L()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [g]
            }],
            "inset-x": [{
                "inset-x": [g]
            }],
            "inset-y": [{
                "inset-y": [g]
            }],
            start: [{
                start: [g]
            }],
            end: [{
                end: [g]
            }],
            top: [{
                top: [g]
            }],
            right: [{
                right: [g]
            }],
            bottom: [{
                bottom: [g]
            }],
            left: [{
                left: [g]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", lo, V]
            }],
            basis: [{
                basis: $()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", V]
            }],
            grow: [{
                grow: R()
            }],
            shrink: [{
                shrink: R()
            }],
            order: [{
                order: ["first", "last", "none", lo, V]
            }],
            "grid-cols": [{
                "grid-cols": [ao]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", lo, V]
                }, V]
            }],
            "col-start": [{
                "col-start": _()
            }],
            "col-end": [{
                "col-end": _()
            }],
            "grid-rows": [{
                "grid-rows": [ao]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [lo, V]
                }, V]
            }],
            "row-start": [{
                "row-start": _()
            }],
            "row-end": [{
                "row-end": _()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", V]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", V]
            }],
            gap: [{
                gap: [c]
            }],
            "gap-x": [{
                "gap-x": [c]
            }],
            "gap-y": [{
                "gap-y": [c]
            }],
            "justify-content": [{
                justify: ["normal", ...C()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...C(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...C(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [h]
            }],
            px: [{
                px: [h]
            }],
            py: [{
                py: [h]
            }],
            ps: [{
                ps: [h]
            }],
            pe: [{
                pe: [h]
            }],
            pt: [{
                pt: [h]
            }],
            pr: [{
                pr: [h]
            }],
            pb: [{
                pb: [h]
            }],
            pl: [{
                pl: [h]
            }],
            m: [{
                m: [S]
            }],
            mx: [{
                mx: [S]
            }],
            my: [{
                my: [S]
            }],
            ms: [{
                ms: [S]
            }],
            me: [{
                me: [S]
            }],
            mt: [{
                mt: [S]
            }],
            mr: [{
                mr: [S]
            }],
            mb: [{
                mb: [S]
            }],
            ml: [{
                ml: [S]
            }],
            "space-x": [{
                "space-x": [N]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [N]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", V, t]
            }],
            "min-w": [{
                "min-w": [V, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [V, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [tn]
                }, tn]
            }],
            h: [{
                h: [V, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [V, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", tn, en]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ol]
            }],
            "font-family": [{
                font: [ao]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", V]
            }],
            "line-clamp": [{
                "line-clamp": ["none", kr, Ol]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", At, V]
            }],
            "list-image": [{
                "list-image": ["none", V]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", V]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [m]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [m]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...B(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", At, en]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", At, V]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: I()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", V]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [m]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...Q(), yx]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", gx]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, wx]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [w]
            }],
            "gradient-via-pos": [{
                via: [w]
            }],
            "gradient-to-pos": [{
                to: [w]
            }],
            "gradient-from": [{
                from: [y]
            }],
            "gradient-via": [{
                via: [y]
            }],
            "gradient-to": [{
                to: [y]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [l]
            }],
            "border-w-x": [{
                "border-x": [l]
            }],
            "border-w-y": [{
                "border-y": [l]
            }],
            "border-w-s": [{
                "border-s": [l]
            }],
            "border-w-e": [{
                "border-e": [l]
            }],
            "border-w-t": [{
                "border-t": [l]
            }],
            "border-w-r": [{
                "border-r": [l]
            }],
            "border-w-b": [{
                "border-b": [l]
            }],
            "border-w-l": [{
                "border-l": [l]
            }],
            "border-opacity": [{
                "border-opacity": [m]
            }],
            "border-style": [{
                border: [...B(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [l]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [l]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [m]
            }],
            "divide-style": [{
                divide: B()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...B()]
            }],
            "outline-offset": [{
                "outline-offset": [At, V]
            }],
            "outline-w": [{
                outline: [At, en]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: W()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [m]
            }],
            "ring-offset-w": [{
                "ring-offset": [At, en]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", tn, Sx]
            }],
            "shadow-color": [{
                shadow: [ao]
            }],
            opacity: [{
                opacity: [m]
            }],
            "mix-blend": [{
                "mix-blend": [...K(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": K()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [a]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", tn, V]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [p]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [v]
            }],
            sepia: [{
                sepia: [E]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [a]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [p]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [m]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [v]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [E]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", V]
            }],
            duration: [{
                duration: D()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", V]
            }],
            delay: [{
                delay: D()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", V]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [b]
            }],
            "scale-x": [{
                "scale-x": [b]
            }],
            "scale-y": [{
                "scale-y": [b]
            }],
            rotate: [{
                rotate: [lo, V]
            }],
            "translate-x": [{
                "translate-x": [T]
            }],
            "translate-y": [{
                "translate-y": [T]
            }],
            "skew-x": [{
                "skew-x": [k]
            }],
            "skew-y": [{
                "skew-y": [k]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", V]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", V]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": I()
            }],
            "scroll-mx": [{
                "scroll-mx": I()
            }],
            "scroll-my": [{
                "scroll-my": I()
            }],
            "scroll-ms": [{
                "scroll-ms": I()
            }],
            "scroll-me": [{
                "scroll-me": I()
            }],
            "scroll-mt": [{
                "scroll-mt": I()
            }],
            "scroll-mr": [{
                "scroll-mr": I()
            }],
            "scroll-mb": [{
                "scroll-mb": I()
            }],
            "scroll-ml": [{
                "scroll-ml": I()
            }],
            "scroll-p": [{
                "scroll-p": I()
            }],
            "scroll-px": [{
                "scroll-px": I()
            }],
            "scroll-py": [{
                "scroll-py": I()
            }],
            "scroll-ps": [{
                "scroll-ps": I()
            }],
            "scroll-pe": [{
                "scroll-pe": I()
            }],
            "scroll-pt": [{
                "scroll-pt": I()
            }],
            "scroll-pr": [{
                "scroll-pr": I()
            }],
            "scroll-pb": [{
                "scroll-pb": I()
            }],
            "scroll-pl": [{
                "scroll-pl": I()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", V]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [At, en, Ol]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , Nx = lx(kx);
function tr(...e) {
    return Nx(om(e))
}
const Px = Fy
  , hm = x.forwardRef( ({className: e, ...t}, n) => f.jsx(qh, {
    ref: n,
    className: tr("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
hm.displayName = qh.displayName;
const Tx = $y("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , mm = x.forwardRef( ({className: e, variant: t, ...n}, r) => f.jsx(Zh, {
    ref: r,
    className: tr(Tx({
        variant: t
    }), e),
    ...n
}));
mm.displayName = Zh.displayName;
const jx = x.forwardRef( ({className: e, ...t}, n) => f.jsx(tm, {
    ref: n,
    className: tr("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
jx.displayName = tm.displayName;
const vm = x.forwardRef( ({className: e, ...t}, n) => f.jsx(nm, {
    ref: n,
    className: tr("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: f.jsx(am, {
        className: "h-4 w-4"
    })
}));
vm.displayName = nm.displayName;
const gm = x.forwardRef( ({className: e, ...t}, n) => f.jsx(Jh, {
    ref: n,
    className: tr("text-sm font-semibold", e),
    ...t
}));
gm.displayName = Jh.displayName;
const ym = x.forwardRef( ({className: e, ...t}, n) => f.jsx(em, {
    ref: n,
    className: tr("text-sm opacity-90", e),
    ...t
}));
ym.displayName = em.displayName;
function Rx() {
    const {toasts: e} = Gg();
    return f.jsxs(Px, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...i}) {
            return f.jsxs(mm, {
                ...i,
                children: [f.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && f.jsx(gm, {
                        children: n
                    }), r && f.jsx(ym, {
                        children: r
                    })]
                }), o, f.jsx(vm, {})]
            }, t)
        }), f.jsx(hm, {})]
    })
}
var jd = ["light", "dark"]
  , Mx = "(prefers-color-scheme: dark)"
  , Ox = x.createContext(void 0)
  , _x = {
    setTheme: e => {}
    ,
    themes: []
}
  , Ax = () => {
    var e;
    return (e = x.useContext(Ox)) != null ? e : _x
}
;
x.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: i, value: s, attrs: l, nonce: a}) => {
    let u = i === "system"
      , p = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(w => `'${w}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , d = o ? jd.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , c = (w, g=!1, S=!0) => {
        let m = s ? s[w] : w
          , h = g ? w + "|| ''" : `'${m}'`
          , v = "";
        return o && S && !g && jd.includes(w) && (v += `d.style.colorScheme = '${w}';`),
        n === "class" ? g || m ? v += `c.add(${h})` : v += "null" : m && (v += `d[s](n,${h})`),
        v
    }
      , y = e ? `!function(){${p}${c(e)}}()` : r ? `!function(){try{${p}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Mx}',m=window.matchMedia(t);if(m.media!==t||m.matches){${c("dark")}}else{${c("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${c(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + c(i, !1, !1) + "}"}${d}}catch(e){}}()` : `!function(){try{${p}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${c(s ? "x[e]" : "e", !0)}}else{${c(i, !1, !1)};}${d}}catch(t){}}();`;
    return x.createElement("script", {
        nonce: a,
        dangerouslySetInnerHTML: {
            __html: y
        }
    })
}
);
var Dx = e => {
    switch (e) {
    case "success":
        return zx;
    case "info":
        return $x;
    case "warning":
        return Fx;
    case "error":
        return Bx;
    default:
        return null
    }
}
  , Lx = Array(12).fill(0)
  , Ix = ({visible: e}) => M.createElement("div", {
    className: "sonner-loading-wrapper",
    "data-visible": e
}, M.createElement("div", {
    className: "sonner-spinner"
}, Lx.map( (t, n) => M.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${n}`
}))))
  , zx = M.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, M.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , Fx = M.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, M.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , $x = M.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, M.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , Bx = M.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, M.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , Ux = () => {
    let[e,t] = M.useState(document.hidden);
    return M.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Aa = 1
  , Vx = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Aa++
              , i = this.toasts.find(l => l.id === o)
              , s = e.dismissible === void 0 ? !0 : e.dismissible;
            return i ? this.toasts = this.toasts.map(l => l.id === o ? (this.publish({
                ...l,
                ...e,
                id: o,
                title: n
            }),
            {
                ...l,
                ...e,
                id: o,
                dismissible: s,
                title: n
            }) : l) : this.addToast({
                title: n,
                ...r,
                dismissible: s,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e()
              , o = n !== void 0;
            return r.then(async i => {
                if (Wx(i) && !i.ok) {
                    o = !1;
                    let s = typeof t.error == "function" ? await t.error(`HTTP error! status: ${i.status}`) : t.error
                      , l = typeof t.description == "function" ? await t.description(`HTTP error! status: ${i.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: s,
                        description: l
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let s = typeof t.success == "function" ? await t.success(i) : t.success
                      , l = typeof t.description == "function" ? await t.description(i) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: s,
                        description: l
                    })
                }
            }
            ).catch(async i => {
                if (t.error !== void 0) {
                    o = !1;
                    let s = typeof t.error == "function" ? await t.error(i) : t.error
                      , l = typeof t.description == "function" ? await t.description(i) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: s,
                        description: l
                    })
                }
            }
            ).finally( () => {
                var i;
                o && (this.dismiss(n),
                n = void 0),
                (i = t.finally) == null || i.call(t)
            }
            ),
            n
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Aa++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.subscribers = [],
        this.toasts = []
    }
}
  , Qe = new Vx
  , Hx = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Aa++;
    return Qe.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , Wx = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , Qx = Hx
  , Kx = () => Qe.toasts;
Object.assign(Qx, {
    success: Qe.success,
    info: Qe.info,
    warning: Qe.warning,
    error: Qe.error,
    custom: Qe.custom,
    message: Qe.message,
    promise: Qe.promise,
    dismiss: Qe.dismiss,
    loading: Qe.loading
}, {
    getHistory: Kx
});
function Yx(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
Yx(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Ci(e) {
    return e.label !== void 0
}
var Gx = 3
  , Xx = "32px"
  , qx = 4e3
  , Zx = 356
  , Jx = 14
  , e1 = 20
  , t1 = 200;
function n1(...e) {
    return e.filter(Boolean).join(" ")
}
var r1 = e => {
    var t, n, r, o, i, s, l, a, u, p;
    let {invert: d, toast: c, unstyled: y, interacting: w, setHeights: g, visibleToasts: S, heights: m, index: h, toasts: v, expanded: b, removeToast: E, defaultRichColors: k, closeButton: N, style: T, cancelButtonStyle: L, actionButtonStyle: O, className: $="", descriptionClassName: I="", duration: W, position: _, gap: Q, loadingIcon: B, expandByDefault: K, classNames: C, icons: R, closeButtonAriaLabel: z="Close toast", pauseWhenPageIsHidden: D, cn: F} = e
      , [G,le] = M.useState(!1)
      , [He,Z] = M.useState(!1)
      , [at,Yt] = M.useState(!1)
      , [Gt,Xt] = M.useState(!1)
      , [ei,nr] = M.useState(0)
      , [_n,Zr] = M.useState(0)
      , ti = M.useRef(null)
      , qt = M.useRef(null)
      , Xs = h === 0
      , qs = h + 1 <= S
      , we = c.type
      , rr = c.dismissible !== !1
      , c0 = c.className || ""
      , d0 = c.descriptionClassName || ""
      , ni = M.useMemo( () => m.findIndex(U => U.toastId === c.id) || 0, [m, c.id])
      , f0 = M.useMemo( () => {
        var U;
        return (U = c.closeButton) != null ? U : N
    }
    , [c.closeButton, N])
      , nc = M.useMemo( () => c.duration || W || qx, [c.duration, W])
      , Zs = M.useRef(0)
      , or = M.useRef(0)
      , rc = M.useRef(0)
      , ir = M.useRef(null)
      , [oc,p0] = _.split("-")
      , ic = M.useMemo( () => m.reduce( (U, ne, ee) => ee >= ni ? U : U + ne.height, 0), [m, ni])
      , sc = Ux()
      , h0 = c.invert || d
      , Js = we === "loading";
    or.current = M.useMemo( () => ni * Q + ic, [ni, ic]),
    M.useEffect( () => {
        le(!0)
    }
    , []),
    M.useLayoutEffect( () => {
        if (!G)
            return;
        let U = qt.current
          , ne = U.style.height;
        U.style.height = "auto";
        let ee = U.getBoundingClientRect().height;
        U.style.height = ne,
        Zr(ee),
        g(St => St.find(bt => bt.toastId === c.id) ? St.map(bt => bt.toastId === c.id ? {
            ...bt,
            height: ee
        } : bt) : [{
            toastId: c.id,
            height: ee,
            position: c.position
        }, ...St])
    }
    , [G, c.title, c.description, g, c.id]);
    let Zt = M.useCallback( () => {
        Z(!0),
        nr(or.current),
        g(U => U.filter(ne => ne.toastId !== c.id)),
        setTimeout( () => {
            E(c)
        }
        , t1)
    }
    , [c, E, g, or]);
    M.useEffect( () => {
        if (c.promise && we === "loading" || c.duration === 1 / 0 || c.type === "loading")
            return;
        let U, ne = nc;
        return b || w || D && sc ? ( () => {
            if (rc.current < Zs.current) {
                let ee = new Date().getTime() - Zs.current;
                ne = ne - ee
            }
            rc.current = new Date().getTime()
        }
        )() : ne !== 1 / 0 && (Zs.current = new Date().getTime(),
        U = setTimeout( () => {
            var ee;
            (ee = c.onAutoClose) == null || ee.call(c, c),
            Zt()
        }
        , ne)),
        () => clearTimeout(U)
    }
    , [b, w, K, c, nc, Zt, c.promise, we, D, sc]),
    M.useEffect( () => {
        let U = qt.current;
        if (U) {
            let ne = U.getBoundingClientRect().height;
            return Zr(ne),
            g(ee => [{
                toastId: c.id,
                height: ne,
                position: c.position
            }, ...ee]),
            () => g(ee => ee.filter(St => St.toastId !== c.id))
        }
    }
    , [g, c.id]),
    M.useEffect( () => {
        c.delete && Zt()
    }
    , [Zt, c.delete]);
    function m0() {
        return R != null && R.loading ? M.createElement("div", {
            className: "sonner-loader",
            "data-visible": we === "loading"
        }, R.loading) : B ? M.createElement("div", {
            className: "sonner-loader",
            "data-visible": we === "loading"
        }, B) : M.createElement(Ix, {
            visible: we === "loading"
        })
    }
    return M.createElement("li", {
        "aria-live": c.important ? "assertive" : "polite",
        "aria-atomic": "true",
        role: "status",
        tabIndex: 0,
        ref: qt,
        className: F($, c0, C == null ? void 0 : C.toast, (t = c == null ? void 0 : c.classNames) == null ? void 0 : t.toast, C == null ? void 0 : C.default, C == null ? void 0 : C[we], (n = c == null ? void 0 : c.classNames) == null ? void 0 : n[we]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = c.richColors) != null ? r : k,
        "data-styled": !(c.jsx || c.unstyled || y),
        "data-mounted": G,
        "data-promise": !!c.promise,
        "data-removed": He,
        "data-visible": qs,
        "data-y-position": oc,
        "data-x-position": p0,
        "data-index": h,
        "data-front": Xs,
        "data-swiping": at,
        "data-dismissible": rr,
        "data-type": we,
        "data-invert": h0,
        "data-swipe-out": Gt,
        "data-expanded": !!(b || K && G),
        style: {
            "--index": h,
            "--toasts-before": h,
            "--z-index": v.length - h,
            "--offset": `${He ? ei : or.current}px`,
            "--initial-height": K ? "auto" : `${_n}px`,
            ...T,
            ...c.style
        },
        onPointerDown: U => {
            Js || !rr || (ti.current = new Date,
            nr(or.current),
            U.target.setPointerCapture(U.pointerId),
            U.target.tagName !== "BUTTON" && (Yt(!0),
            ir.current = {
                x: U.clientX,
                y: U.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var U, ne, ee, St;
            if (Gt || !rr)
                return;
            ir.current = null;
            let bt = Number(((U = qt.current) == null ? void 0 : U.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0)
              , ri = new Date().getTime() - ((ne = ti.current) == null ? void 0 : ne.getTime())
              , v0 = Math.abs(bt) / ri;
            if (Math.abs(bt) >= e1 || v0 > .11) {
                nr(or.current),
                (ee = c.onDismiss) == null || ee.call(c, c),
                Zt(),
                Xt(!0);
                return
            }
            (St = qt.current) == null || St.style.setProperty("--swipe-amount", "0px"),
            Yt(!1)
        }
        ,
        onPointerMove: U => {
            var ne;
            if (!ir.current || !rr)
                return;
            let ee = U.clientY - ir.current.y
              , St = U.clientX - ir.current.x
              , bt = (oc === "top" ? Math.min : Math.max)(0, ee)
              , ri = U.pointerType === "touch" ? 10 : 2;
            Math.abs(bt) > ri ? (ne = qt.current) == null || ne.style.setProperty("--swipe-amount", `${ee}px`) : Math.abs(St) > ri && (ir.current = null)
        }
    }, f0 && !c.jsx ? M.createElement("button", {
        "aria-label": z,
        "data-disabled": Js,
        "data-close-button": !0,
        onClick: Js || !rr ? () => {}
        : () => {
            var U;
            Zt(),
            (U = c.onDismiss) == null || U.call(c, c)
        }
        ,
        className: F(C == null ? void 0 : C.closeButton, (o = c == null ? void 0 : c.classNames) == null ? void 0 : o.closeButton)
    }, M.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, M.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), M.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    }))) : null, c.jsx || M.isValidElement(c.title) ? c.jsx || c.title : M.createElement(M.Fragment, null, we || c.icon || c.promise ? M.createElement("div", {
        "data-icon": "",
        className: F(C == null ? void 0 : C.icon, (i = c == null ? void 0 : c.classNames) == null ? void 0 : i.icon)
    }, c.promise || c.type === "loading" && !c.icon ? c.icon || m0() : null, c.type !== "loading" ? c.icon || (R == null ? void 0 : R[we]) || Dx(we) : null) : null, M.createElement("div", {
        "data-content": "",
        className: F(C == null ? void 0 : C.content, (s = c == null ? void 0 : c.classNames) == null ? void 0 : s.content)
    }, M.createElement("div", {
        "data-title": "",
        className: F(C == null ? void 0 : C.title, (l = c == null ? void 0 : c.classNames) == null ? void 0 : l.title)
    }, c.title), c.description ? M.createElement("div", {
        "data-description": "",
        className: F(I, d0, C == null ? void 0 : C.description, (a = c == null ? void 0 : c.classNames) == null ? void 0 : a.description)
    }, c.description) : null), M.isValidElement(c.cancel) ? c.cancel : c.cancel && Ci(c.cancel) ? M.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: c.cancelButtonStyle || L,
        onClick: U => {
            var ne, ee;
            Ci(c.cancel) && rr && ((ee = (ne = c.cancel).onClick) == null || ee.call(ne, U),
            Zt())
        }
        ,
        className: F(C == null ? void 0 : C.cancelButton, (u = c == null ? void 0 : c.classNames) == null ? void 0 : u.cancelButton)
    }, c.cancel.label) : null, M.isValidElement(c.action) ? c.action : c.action && Ci(c.action) ? M.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: c.actionButtonStyle || O,
        onClick: U => {
            var ne, ee;
            Ci(c.action) && (U.defaultPrevented || ((ee = (ne = c.action).onClick) == null || ee.call(ne, U),
            Zt()))
        }
        ,
        className: F(C == null ? void 0 : C.actionButton, (p = c == null ? void 0 : c.classNames) == null ? void 0 : p.actionButton)
    }, c.action.label) : null))
}
;
function Rd() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
var o1 = e => {
    let {invert: t, position: n="bottom-right", hotkey: r=["altKey", "KeyT"], expand: o, closeButton: i, className: s, offset: l, theme: a="light", richColors: u, duration: p, style: d, visibleToasts: c=Gx, toastOptions: y, dir: w=Rd(), gap: g=Jx, loadingIcon: S, icons: m, containerAriaLabel: h="Notifications", pauseWhenPageIsHidden: v, cn: b=n1} = e
      , [E,k] = M.useState([])
      , N = M.useMemo( () => Array.from(new Set([n].concat(E.filter(D => D.position).map(D => D.position)))), [E, n])
      , [T,L] = M.useState([])
      , [O,$] = M.useState(!1)
      , [I,W] = M.useState(!1)
      , [_,Q] = M.useState(a !== "system" ? a : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , B = M.useRef(null)
      , K = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , C = M.useRef(null)
      , R = M.useRef(!1)
      , z = M.useCallback(D => {
        var F;
        (F = E.find(G => G.id === D.id)) != null && F.delete || Qe.dismiss(D.id),
        k(G => G.filter( ({id: le}) => le !== D.id))
    }
    , [E]);
    return M.useEffect( () => Qe.subscribe(D => {
        if (D.dismiss) {
            k(F => F.map(G => G.id === D.id ? {
                ...G,
                delete: !0
            } : G));
            return
        }
        setTimeout( () => {
            Th.flushSync( () => {
                k(F => {
                    let G = F.findIndex(le => le.id === D.id);
                    return G !== -1 ? [...F.slice(0, G), {
                        ...F[G],
                        ...D
                    }, ...F.slice(G + 1)] : [D, ...F]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    M.useEffect( () => {
        if (a !== "system") {
            Q(a);
            return
        }
        a === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Q("dark") : Q("light")),
        typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({matches: D}) => {
            Q(D ? "dark" : "light")
        }
        )
    }
    , [a]),
    M.useEffect( () => {
        E.length <= 1 && $(!1)
    }
    , [E]),
    M.useEffect( () => {
        let D = F => {
            var G, le;
            r.every(He => F[He] || F.code === He) && ($(!0),
            (G = B.current) == null || G.focus()),
            F.code === "Escape" && (document.activeElement === B.current || (le = B.current) != null && le.contains(document.activeElement)) && $(!1)
        }
        ;
        return document.addEventListener("keydown", D),
        () => document.removeEventListener("keydown", D)
    }
    , [r]),
    M.useEffect( () => {
        if (B.current)
            return () => {
                C.current && (C.current.focus({
                    preventScroll: !0
                }),
                C.current = null,
                R.current = !1)
            }
    }
    , [B.current]),
    E.length ? M.createElement("section", {
        "aria-label": `${h} ${K}`,
        tabIndex: -1
    }, N.map( (D, F) => {
        var G;
        let[le,He] = D.split("-");
        return M.createElement("ol", {
            key: D,
            dir: w === "auto" ? Rd() : w,
            tabIndex: -1,
            ref: B,
            className: s,
            "data-sonner-toaster": !0,
            "data-theme": _,
            "data-y-position": le,
            "data-x-position": He,
            style: {
                "--front-toast-height": `${((G = T[0]) == null ? void 0 : G.height) || 0}px`,
                "--offset": typeof l == "number" ? `${l}px` : l || Xx,
                "--width": `${Zx}px`,
                "--gap": `${g}px`,
                ...d
            },
            onBlur: Z => {
                R.current && !Z.currentTarget.contains(Z.relatedTarget) && (R.current = !1,
                C.current && (C.current.focus({
                    preventScroll: !0
                }),
                C.current = null))
            }
            ,
            onFocus: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || R.current || (R.current = !0,
                C.current = Z.relatedTarget)
            }
            ,
            onMouseEnter: () => $(!0),
            onMouseMove: () => $(!0),
            onMouseLeave: () => {
                I || $(!1)
            }
            ,
            onPointerDown: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || W(!0)
            }
            ,
            onPointerUp: () => W(!1)
        }, E.filter(Z => !Z.position && F === 0 || Z.position === D).map( (Z, at) => {
            var Yt, Gt;
            return M.createElement(r1, {
                key: Z.id,
                icons: m,
                index: at,
                toast: Z,
                defaultRichColors: u,
                duration: (Yt = y == null ? void 0 : y.duration) != null ? Yt : p,
                className: y == null ? void 0 : y.className,
                descriptionClassName: y == null ? void 0 : y.descriptionClassName,
                invert: t,
                visibleToasts: c,
                closeButton: (Gt = y == null ? void 0 : y.closeButton) != null ? Gt : i,
                interacting: I,
                position: D,
                style: y == null ? void 0 : y.style,
                unstyled: y == null ? void 0 : y.unstyled,
                classNames: y == null ? void 0 : y.classNames,
                cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                removeToast: z,
                toasts: E.filter(Xt => Xt.position == Z.position),
                heights: T.filter(Xt => Xt.position == Z.position),
                setHeights: L,
                expandByDefault: o,
                gap: g,
                loadingIcon: S,
                expanded: O,
                pauseWhenPageIsHidden: v,
                cn: b
            })
        }
        ))
    }
    )) : null
}
;
const i1 = ({...e}) => {
    const {theme: t="system"} = Ax();
    return f.jsx(o1, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , s1 = ["top", "right", "bottom", "left"]
  , Nn = Math.min
  , Ye = Math.max
  , ps = Math.round
  , ki = Math.floor
  , Pn = e => ({
    x: e,
    y: e
})
  , l1 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , a1 = {
    start: "end",
    end: "start"
};
function Da(e, t, n) {
    return Ye(e, Nn(t, n))
}
function Wt(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Qt(e) {
    return e.split("-")[0]
}
function Xr(e) {
    return e.split("-")[1]
}
function Wu(e) {
    return e === "x" ? "y" : "x"
}
function Qu(e) {
    return e === "y" ? "height" : "width"
}
function Tn(e) {
    return ["top", "bottom"].includes(Qt(e)) ? "y" : "x"
}
function Ku(e) {
    return Wu(Tn(e))
}
function u1(e, t, n) {
    n === void 0 && (n = !1);
    const r = Xr(e)
      , o = Ku(e)
      , i = Qu(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = hs(s)),
    [s, hs(s)]
}
function c1(e) {
    const t = hs(e);
    return [La(e), t, La(t)]
}
function La(e) {
    return e.replace(/start|end/g, t => a1[t])
}
function d1(e, t, n) {
    const r = ["left", "right"]
      , o = ["right", "left"]
      , i = ["top", "bottom"]
      , s = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
        return t ? i : s;
    default:
        return []
    }
}
function f1(e, t, n, r) {
    const o = Xr(e);
    let i = d1(Qt(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o),
    t && (i = i.concat(i.map(La)))),
    i
}
function hs(e) {
    return e.replace(/left|right|bottom|top/g, t => l1[t])
}
function p1(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function xm(e) {
    return typeof e != "number" ? p1(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function ms(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function Md(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = Tn(t)
      , s = Ku(t)
      , l = Qu(s)
      , a = Qt(t)
      , u = i === "y"
      , p = r.x + r.width / 2 - o.width / 2
      , d = r.y + r.height / 2 - o.height / 2
      , c = r[l] / 2 - o[l] / 2;
    let y;
    switch (a) {
    case "top":
        y = {
            x: p,
            y: r.y - o.height
        };
        break;
    case "bottom":
        y = {
            x: p,
            y: r.y + r.height
        };
        break;
    case "right":
        y = {
            x: r.x + r.width,
            y: d
        };
        break;
    case "left":
        y = {
            x: r.x - o.width,
            y: d
        };
        break;
    default:
        y = {
            x: r.x,
            y: r.y
        }
    }
    switch (Xr(t)) {
    case "start":
        y[s] -= c * (n && u ? -1 : 1);
        break;
    case "end":
        y[s] += c * (n && u ? -1 : 1);
        break
    }
    return y
}
const h1 = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: s} = n
      , l = i.filter(Boolean)
      , a = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: p, y: d} = Md(u, r, a)
      , c = r
      , y = {}
      , w = 0;
    for (let g = 0; g < l.length; g++) {
        const {name: S, fn: m} = l[g]
          , {x: h, y: v, data: b, reset: E} = await m({
            x: p,
            y: d,
            initialPlacement: r,
            placement: c,
            strategy: o,
            middlewareData: y,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        p = h ?? p,
        d = v ?? d,
        y = {
            ...y,
            [S]: {
                ...y[S],
                ...b
            }
        },
        E && w <= 50 && (w++,
        typeof E == "object" && (E.placement && (c = E.placement),
        E.rects && (u = E.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : E.rects),
        {x: p, y: d} = Md(u, c, a)),
        g = -1)
    }
    return {
        x: p,
        y: d,
        placement: c,
        strategy: o,
        middlewareData: y
    }
}
;
async function Bo(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: s, elements: l, strategy: a} = e
      , {boundary: u="clippingAncestors", rootBoundary: p="viewport", elementContext: d="floating", altBoundary: c=!1, padding: y=0} = Wt(t, e)
      , w = xm(y)
      , S = l[c ? d === "floating" ? "reference" : "floating" : d]
      , m = ms(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(S))) == null || n ? S : S.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
        boundary: u,
        rootBoundary: p,
        strategy: a
    }))
      , h = d === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating))
      , b = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , E = ms(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: h,
        offsetParent: v,
        strategy: a
    }) : h);
    return {
        top: (m.top - E.top + w.top) / b.y,
        bottom: (E.bottom - m.bottom + w.bottom) / b.y,
        left: (m.left - E.left + w.left) / b.x,
        right: (E.right - m.right + w.right) / b.x
    }
}
const m1 = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: s, elements: l, middlewareData: a} = t
          , {element: u, padding: p=0} = Wt(e, t) || {};
        if (u == null)
            return {};
        const d = xm(p)
          , c = {
            x: n,
            y: r
        }
          , y = Ku(o)
          , w = Qu(y)
          , g = await s.getDimensions(u)
          , S = y === "y"
          , m = S ? "top" : "left"
          , h = S ? "bottom" : "right"
          , v = S ? "clientHeight" : "clientWidth"
          , b = i.reference[w] + i.reference[y] - c[y] - i.floating[w]
          , E = c[y] - i.reference[y]
          , k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let N = k ? k[v] : 0;
        (!N || !await (s.isElement == null ? void 0 : s.isElement(k))) && (N = l.floating[v] || i.floating[w]);
        const T = b / 2 - E / 2
          , L = N / 2 - g[w] / 2 - 1
          , O = Nn(d[m], L)
          , $ = Nn(d[h], L)
          , I = O
          , W = N - g[w] - $
          , _ = N / 2 - g[w] / 2 + T
          , Q = Da(I, _, W)
          , B = !a.arrow && Xr(o) != null && _ !== Q && i.reference[w] / 2 - (_ < I ? O : $) - g[w] / 2 < 0
          , K = B ? _ < I ? _ - I : _ - W : 0;
        return {
            [y]: c[y] + K,
            data: {
                [y]: Q,
                centerOffset: _ - Q - K,
                ...B && {
                    alignmentOffset: K
                }
            },
            reset: B
        }
    }
})
  , v1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: i, rects: s, initialPlacement: l, platform: a, elements: u} = t
              , {mainAxis: p=!0, crossAxis: d=!0, fallbackPlacements: c, fallbackStrategy: y="bestFit", fallbackAxisSideDirection: w="none", flipAlignment: g=!0, ...S} = Wt(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            const m = Qt(o)
              , h = Tn(l)
              , v = Qt(l) === l
              , b = await (a.isRTL == null ? void 0 : a.isRTL(u.floating))
              , E = c || (v || !g ? [hs(l)] : c1(l))
              , k = w !== "none";
            !c && k && E.push(...f1(l, g, w, b));
            const N = [l, ...E]
              , T = await Bo(t, S)
              , L = [];
            let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (p && L.push(T[m]),
            d) {
                const _ = u1(o, s, b);
                L.push(T[_[0]], T[_[1]])
            }
            if (O = [...O, {
                placement: o,
                overflows: L
            }],
            !L.every(_ => _ <= 0)) {
                var $, I;
                const _ = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1
                  , Q = N[_];
                if (Q)
                    return {
                        data: {
                            index: _,
                            overflows: O
                        },
                        reset: {
                            placement: Q
                        }
                    };
                let B = (I = O.filter(K => K.overflows[0] <= 0).sort( (K, C) => K.overflows[1] - C.overflows[1])[0]) == null ? void 0 : I.placement;
                if (!B)
                    switch (y) {
                    case "bestFit":
                        {
                            var W;
                            const K = (W = O.filter(C => {
                                if (k) {
                                    const R = Tn(C.placement);
                                    return R === h || R === "y"
                                }
                                return !0
                            }
                            ).map(C => [C.placement, C.overflows.filter(R => R > 0).reduce( (R, z) => R + z, 0)]).sort( (C, R) => C[1] - R[1])[0]) == null ? void 0 : W[0];
                            K && (B = K);
                            break
                        }
                    case "initialPlacement":
                        B = l;
                        break
                    }
                if (o !== B)
                    return {
                        reset: {
                            placement: B
                        }
                    }
            }
            return {}
        }
    }
};
function Od(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function _d(e) {
    return s1.some(t => e[t] >= 0)
}
const g1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = Wt(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const i = await Bo(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , s = Od(i, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: s,
                            referenceHidden: _d(s)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await Bo(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , s = Od(i, n.floating);
                    return {
                        data: {
                            escapedOffsets: s,
                            escaped: _d(s)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function y1(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , s = Qt(n)
      , l = Xr(n)
      , a = Tn(n) === "y"
      , u = ["left", "top"].includes(s) ? -1 : 1
      , p = i && a ? -1 : 1
      , d = Wt(t, e);
    let {mainAxis: c, crossAxis: y, alignmentAxis: w} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return l && typeof w == "number" && (y = l === "end" ? w * -1 : w),
    a ? {
        x: y * p,
        y: c * u
    } : {
        x: c * u,
        y: y * p
    }
}
const x1 = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: i, placement: s, middlewareData: l} = t
              , a = await y1(t, e);
            return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
                x: o + a.x,
                y: i + a.y,
                data: {
                    ...a,
                    placement: s
                }
            }
        }
    }
}
  , w1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: i=!0, crossAxis: s=!1, limiter: l={
                fn: S => {
                    let {x: m, y: h} = S;
                    return {
                        x: m,
                        y: h
                    }
                }
            }, ...a} = Wt(e, t)
              , u = {
                x: n,
                y: r
            }
              , p = await Bo(t, a)
              , d = Tn(Qt(o))
              , c = Wu(d);
            let y = u[c]
              , w = u[d];
            if (i) {
                const S = c === "y" ? "top" : "left"
                  , m = c === "y" ? "bottom" : "right"
                  , h = y + p[S]
                  , v = y - p[m];
                y = Da(h, y, v)
            }
            if (s) {
                const S = d === "y" ? "top" : "left"
                  , m = d === "y" ? "bottom" : "right"
                  , h = w + p[S]
                  , v = w - p[m];
                w = Da(h, w, v)
            }
            const g = l.fn({
                ...t,
                [c]: y,
                [d]: w
            });
            return {
                ...g,
                data: {
                    x: g.x - n,
                    y: g.y - r,
                    enabled: {
                        [c]: i,
                        [d]: s
                    }
                }
            }
        }
    }
}
  , S1 = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: i, middlewareData: s} = t
              , {offset: l=0, mainAxis: a=!0, crossAxis: u=!0} = Wt(e, t)
              , p = {
                x: n,
                y: r
            }
              , d = Tn(o)
              , c = Wu(d);
            let y = p[c]
              , w = p[d];
            const g = Wt(l, t)
              , S = typeof g == "number" ? {
                mainAxis: g,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...g
            };
            if (a) {
                const v = c === "y" ? "height" : "width"
                  , b = i.reference[c] - i.floating[v] + S.mainAxis
                  , E = i.reference[c] + i.reference[v] - S.mainAxis;
                y < b ? y = b : y > E && (y = E)
            }
            if (u) {
                var m, h;
                const v = c === "y" ? "width" : "height"
                  , b = ["top", "left"].includes(Qt(o))
                  , E = i.reference[d] - i.floating[v] + (b && ((m = s.offset) == null ? void 0 : m[d]) || 0) + (b ? 0 : S.crossAxis)
                  , k = i.reference[d] + i.reference[v] + (b ? 0 : ((h = s.offset) == null ? void 0 : h[d]) || 0) - (b ? S.crossAxis : 0);
                w < E ? w = E : w > k && (w = k)
            }
            return {
                [c]: y,
                [d]: w
            }
        }
    }
}
  , b1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: i, platform: s, elements: l} = t
              , {apply: a= () => {}
            , ...u} = Wt(e, t)
              , p = await Bo(t, u)
              , d = Qt(o)
              , c = Xr(o)
              , y = Tn(o) === "y"
              , {width: w, height: g} = i.floating;
            let S, m;
            d === "top" || d === "bottom" ? (S = d,
            m = c === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (m = d,
            S = c === "end" ? "top" : "bottom");
            const h = g - p.top - p.bottom
              , v = w - p.left - p.right
              , b = Nn(g - p[S], h)
              , E = Nn(w - p[m], v)
              , k = !t.middlewareData.shift;
            let N = b
              , T = E;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (N = h),
            k && !c) {
                const O = Ye(p.left, 0)
                  , $ = Ye(p.right, 0)
                  , I = Ye(p.top, 0)
                  , W = Ye(p.bottom, 0);
                y ? T = w - 2 * (O !== 0 || $ !== 0 ? O + $ : Ye(p.left, p.right)) : N = g - 2 * (I !== 0 || W !== 0 ? I + W : Ye(p.top, p.bottom))
            }
            await a({
                ...t,
                availableWidth: T,
                availableHeight: N
            });
            const L = await s.getDimensions(l.floating);
            return w !== L.width || g !== L.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function $s() {
    return typeof window < "u"
}
function qr(e) {
    return wm(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function qe(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function _t(e) {
    var t;
    return (t = (wm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function wm(e) {
    return $s() ? e instanceof Node || e instanceof qe(e).Node : !1
}
function xt(e) {
    return $s() ? e instanceof Element || e instanceof qe(e).Element : !1
}
function Ot(e) {
    return $s() ? e instanceof HTMLElement || e instanceof qe(e).HTMLElement : !1
}
function Ad(e) {
    return !$s() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof qe(e).ShadowRoot
}
function Jo(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = wt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}
function E1(e) {
    return ["table", "td", "th"].includes(qr(e))
}
function Bs(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function Yu(e) {
    const t = Gu()
      , n = xt(e) ? wt(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function C1(e) {
    let t = jn(e);
    for (; Ot(t) && !Hr(t); ) {
        if (Yu(t))
            return t;
        if (Bs(t))
            return null;
        t = jn(t)
    }
    return null
}
function Gu() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Hr(e) {
    return ["html", "body", "#document"].includes(qr(e))
}
function wt(e) {
    return qe(e).getComputedStyle(e)
}
function Us(e) {
    return xt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function jn(e) {
    if (qr(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Ad(e) && e.host || _t(e);
    return Ad(t) ? t.host : t
}
function Sm(e) {
    const t = jn(e);
    return Hr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ot(t) && Jo(t) ? t : Sm(t)
}
function Uo(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = Sm(e)
      , i = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , s = qe(o);
    if (i) {
        const l = Ia(s);
        return t.concat(s, s.visualViewport || [], Jo(o) ? o : [], l && n ? Uo(l) : [])
    }
    return t.concat(o, Uo(o, [], n))
}
function Ia(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function bm(e) {
    const t = wt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = Ot(e)
      , i = o ? e.offsetWidth : n
      , s = o ? e.offsetHeight : r
      , l = ps(n) !== i || ps(r) !== s;
    return l && (n = i,
    r = s),
    {
        width: n,
        height: r,
        $: l
    }
}
function Xu(e) {
    return xt(e) ? e : e.contextElement
}
function Nr(e) {
    const t = Xu(e);
    if (!Ot(t))
        return Pn(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: i} = bm(t);
    let s = (i ? ps(n.width) : n.width) / r
      , l = (i ? ps(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    {
        x: s,
        y: l
    }
}
const k1 = Pn(0);
function Em(e) {
    const t = qe(e);
    return !Gu() || !t.visualViewport ? k1 : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function N1(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== qe(e) ? !1 : t
}
function Zn(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , i = Xu(e);
    let s = Pn(1);
    t && (r ? xt(r) && (s = Nr(r)) : s = Nr(e));
    const l = N1(i, n, r) ? Em(i) : Pn(0);
    let a = (o.left + l.x) / s.x
      , u = (o.top + l.y) / s.y
      , p = o.width / s.x
      , d = o.height / s.y;
    if (i) {
        const c = qe(i)
          , y = r && xt(r) ? qe(r) : r;
        let w = c
          , g = Ia(w);
        for (; g && r && y !== w; ) {
            const S = Nr(g)
              , m = g.getBoundingClientRect()
              , h = wt(g)
              , v = m.left + (g.clientLeft + parseFloat(h.paddingLeft)) * S.x
              , b = m.top + (g.clientTop + parseFloat(h.paddingTop)) * S.y;
            a *= S.x,
            u *= S.y,
            p *= S.x,
            d *= S.y,
            a += v,
            u += b,
            w = qe(g),
            g = Ia(w)
        }
    }
    return ms({
        width: p,
        height: d,
        x: a,
        y: u
    })
}
function P1(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const i = o === "fixed"
      , s = _t(r)
      , l = t ? Bs(t.floating) : !1;
    if (r === s || l && i)
        return n;
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = Pn(1);
    const p = Pn(0)
      , d = Ot(r);
    if ((d || !d && !i) && ((qr(r) !== "body" || Jo(s)) && (a = Us(r)),
    Ot(r))) {
        const c = Zn(r);
        u = Nr(r),
        p.x = c.x + r.clientLeft,
        p.y = c.y + r.clientTop
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - a.scrollLeft * u.x + p.x,
        y: n.y * u.y - a.scrollTop * u.y + p.y
    }
}
function T1(e) {
    return Array.from(e.getClientRects())
}
function za(e, t) {
    const n = Us(e).scrollLeft;
    return t ? t.left + n : Zn(_t(e)).left + n
}
function j1(e) {
    const t = _t(e)
      , n = Us(e)
      , r = e.ownerDocument.body
      , o = Ye(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , i = Ye(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + za(e);
    const l = -n.scrollTop;
    return wt(r).direction === "rtl" && (s += Ye(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: i,
        x: s,
        y: l
    }
}
function R1(e, t) {
    const n = qe(e)
      , r = _t(e)
      , o = n.visualViewport;
    let i = r.clientWidth
      , s = r.clientHeight
      , l = 0
      , a = 0;
    if (o) {
        i = o.width,
        s = o.height;
        const u = Gu();
        (!u || u && t === "fixed") && (l = o.offsetLeft,
        a = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: l,
        y: a
    }
}
function M1(e, t) {
    const n = Zn(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , i = Ot(e) ? Nr(e) : Pn(1)
      , s = e.clientWidth * i.x
      , l = e.clientHeight * i.y
      , a = o * i.x
      , u = r * i.y;
    return {
        width: s,
        height: l,
        x: a,
        y: u
    }
}
function Dd(e, t, n) {
    let r;
    if (t === "viewport")
        r = R1(e, n);
    else if (t === "document")
        r = j1(_t(e));
    else if (xt(t))
        r = M1(t, n);
    else {
        const o = Em(e);
        r = {
            ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return ms(r)
}
function Cm(e, t) {
    const n = jn(e);
    return n === t || !xt(n) || Hr(n) ? !1 : wt(n).position === "fixed" || Cm(n, t)
}
function O1(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Uo(e, [], !1).filter(l => xt(l) && qr(l) !== "body")
      , o = null;
    const i = wt(e).position === "fixed";
    let s = i ? jn(e) : e;
    for (; xt(s) && !Hr(s); ) {
        const l = wt(s)
          , a = Yu(s);
        !a && l.position === "fixed" && (o = null),
        (i ? !a && !o : !a && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Jo(s) && !a && Cm(e, s)) ? r = r.filter(p => p !== s) : o = l,
        s = jn(s)
    }
    return t.set(e, r),
    r
}
function _1(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const s = [...n === "clippingAncestors" ? Bs(t) ? [] : O1(t, this._c) : [].concat(n), r]
      , l = s[0]
      , a = s.reduce( (u, p) => {
        const d = Dd(t, p, o);
        return u.top = Ye(d.top, u.top),
        u.right = Nn(d.right, u.right),
        u.bottom = Nn(d.bottom, u.bottom),
        u.left = Ye(d.left, u.left),
        u
    }
    , Dd(t, l, o));
    return {
        width: a.right - a.left,
        height: a.bottom - a.top,
        x: a.left,
        y: a.top
    }
}
function A1(e) {
    const {width: t, height: n} = bm(e);
    return {
        width: t,
        height: n
    }
}
function D1(e, t, n) {
    const r = Ot(t)
      , o = _t(t)
      , i = n === "fixed"
      , s = Zn(e, !0, i, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = Pn(0);
    if (r || !r && !i)
        if ((qr(t) !== "body" || Jo(o)) && (l = Us(t)),
        r) {
            const y = Zn(t, !0, i, t);
            a.x = y.x + t.clientLeft,
            a.y = y.y + t.clientTop
        } else
            o && (a.x = za(o));
    let u = 0
      , p = 0;
    if (o && !r && !i) {
        const y = o.getBoundingClientRect();
        p = y.top + l.scrollTop,
        u = y.left + l.scrollLeft - za(o, y)
    }
    const d = s.left + l.scrollLeft - a.x - u
      , c = s.top + l.scrollTop - a.y - p;
    return {
        x: d,
        y: c,
        width: s.width,
        height: s.height
    }
}
function _l(e) {
    return wt(e).position === "static"
}
function Ld(e, t) {
    if (!Ot(e) || wt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return _t(e) === n && (n = n.ownerDocument.body),
    n
}
function km(e, t) {
    const n = qe(e);
    if (Bs(e))
        return n;
    if (!Ot(e)) {
        let o = jn(e);
        for (; o && !Hr(o); ) {
            if (xt(o) && !_l(o))
                return o;
            o = jn(o)
        }
        return n
    }
    let r = Ld(e, t);
    for (; r && E1(r) && _l(r); )
        r = Ld(r, t);
    return r && Hr(r) && _l(r) && !Yu(r) ? n : r || C1(e) || n
}
const L1 = async function(e) {
    const t = this.getOffsetParent || km
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: D1(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function I1(e) {
    return wt(e).direction === "rtl"
}
const z1 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: P1,
    getDocumentElement: _t,
    getClippingRect: _1,
    getOffsetParent: km,
    getElementRects: L1,
    getClientRects: T1,
    getDimensions: A1,
    getScale: Nr,
    isElement: xt,
    isRTL: I1
};
function F1(e, t) {
    let n = null, r;
    const o = _t(e);
    function i() {
        var l;
        clearTimeout(r),
        (l = n) == null || l.disconnect(),
        n = null
    }
    function s(l, a) {
        l === void 0 && (l = !1),
        a === void 0 && (a = 1),
        i();
        const {left: u, top: p, width: d, height: c} = e.getBoundingClientRect();
        if (l || t(),
        !d || !c)
            return;
        const y = ki(p)
          , w = ki(o.clientWidth - (u + d))
          , g = ki(o.clientHeight - (p + c))
          , S = ki(u)
          , h = {
            rootMargin: -y + "px " + -w + "px " + -g + "px " + -S + "px",
            threshold: Ye(0, Nn(1, a)) || 1
        };
        let v = !0;
        function b(E) {
            const k = E[0].intersectionRatio;
            if (k !== a) {
                if (!v)
                    return s();
                k ? s(!1, k) : r = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            v = !1
        }
        try {
            n = new IntersectionObserver(b,{
                ...h,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(b,h)
        }
        n.observe(e)
    }
    return s(!0),
    i
}
function $1(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: s=typeof ResizeObserver == "function", layoutShift: l=typeof IntersectionObserver == "function", animationFrame: a=!1} = r
      , u = Xu(e)
      , p = o || i ? [...u ? Uo(u) : [], ...Uo(t)] : [];
    p.forEach(m => {
        o && m.addEventListener("scroll", n, {
            passive: !0
        }),
        i && m.addEventListener("resize", n)
    }
    );
    const d = u && l ? F1(u, n) : null;
    let c = -1
      , y = null;
    s && (y = new ResizeObserver(m => {
        let[h] = m;
        h && h.target === u && y && (y.unobserve(t),
        cancelAnimationFrame(c),
        c = requestAnimationFrame( () => {
            var v;
            (v = y) == null || v.observe(t)
        }
        )),
        n()
    }
    ),
    u && !a && y.observe(u),
    y.observe(t));
    let w, g = a ? Zn(e) : null;
    a && S();
    function S() {
        const m = Zn(e);
        g && (m.x !== g.x || m.y !== g.y || m.width !== g.width || m.height !== g.height) && n(),
        g = m,
        w = requestAnimationFrame(S)
    }
    return n(),
    () => {
        var m;
        p.forEach(h => {
            o && h.removeEventListener("scroll", n),
            i && h.removeEventListener("resize", n)
        }
        ),
        d == null || d(),
        (m = y) == null || m.disconnect(),
        y = null,
        a && cancelAnimationFrame(w)
    }
}
const B1 = x1
  , U1 = w1
  , V1 = v1
  , H1 = b1
  , W1 = g1
  , Id = m1
  , Q1 = S1
  , K1 = (e, t, n) => {
    const r = new Map
      , o = {
        platform: z1,
        ...n
    }
      , i = {
        ...o.platform,
        _c: r
    };
    return h1(e, t, {
        ...o,
        platform: i
    })
}
;
var Bi = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function vs(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!vs(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !vs(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Nm(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function zd(e, t) {
    const n = Nm(e);
    return Math.round(t * n) / n
}
function Al(e) {
    const t = x.useRef(e);
    return Bi( () => {
        t.current = e
    }
    ),
    t
}
function Y1(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: s}={}, transform: l=!0, whileElementsMounted: a, open: u} = e
      , [p,d] = x.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [c,y] = x.useState(r);
    vs(c, r) || y(r);
    const [w,g] = x.useState(null)
      , [S,m] = x.useState(null)
      , h = x.useCallback(C => {
        C !== k.current && (k.current = C,
        g(C))
    }
    , [])
      , v = x.useCallback(C => {
        C !== N.current && (N.current = C,
        m(C))
    }
    , [])
      , b = i || w
      , E = s || S
      , k = x.useRef(null)
      , N = x.useRef(null)
      , T = x.useRef(p)
      , L = a != null
      , O = Al(a)
      , $ = Al(o)
      , I = Al(u)
      , W = x.useCallback( () => {
        if (!k.current || !N.current)
            return;
        const C = {
            placement: t,
            strategy: n,
            middleware: c
        };
        $.current && (C.platform = $.current),
        K1(k.current, N.current, C).then(R => {
            const z = {
                ...R,
                isPositioned: I.current !== !1
            };
            _.current && !vs(T.current, z) && (T.current = z,
            Zo.flushSync( () => {
                d(z)
            }
            ))
        }
        )
    }
    , [c, t, n, $, I]);
    Bi( () => {
        u === !1 && T.current.isPositioned && (T.current.isPositioned = !1,
        d(C => ({
            ...C,
            isPositioned: !1
        })))
    }
    , [u]);
    const _ = x.useRef(!1);
    Bi( () => (_.current = !0,
    () => {
        _.current = !1
    }
    ), []),
    Bi( () => {
        if (b && (k.current = b),
        E && (N.current = E),
        b && E) {
            if (O.current)
                return O.current(b, E, W);
            W()
        }
    }
    , [b, E, W, O, L]);
    const Q = x.useMemo( () => ({
        reference: k,
        floating: N,
        setReference: h,
        setFloating: v
    }), [h, v])
      , B = x.useMemo( () => ({
        reference: b,
        floating: E
    }), [b, E])
      , K = x.useMemo( () => {
        const C = {
            position: n,
            left: 0,
            top: 0
        };
        if (!B.floating)
            return C;
        const R = zd(B.floating, p.x)
          , z = zd(B.floating, p.y);
        return l ? {
            ...C,
            transform: "translate(" + R + "px, " + z + "px)",
            ...Nm(B.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: R,
            top: z
        }
    }
    , [n, l, B.floating, p.x, p.y]);
    return x.useMemo( () => ({
        ...p,
        update: W,
        refs: Q,
        elements: B,
        floatingStyles: K
    }), [p, W, Q, B, K])
}
const G1 = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Id({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? Id({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , X1 = (e, t) => ({
    ...B1(e),
    options: [e, t]
})
  , q1 = (e, t) => ({
    ...U1(e),
    options: [e, t]
})
  , Z1 = (e, t) => ({
    ...Q1(e),
    options: [e, t]
})
  , J1 = (e, t) => ({
    ...V1(e),
    options: [e, t]
})
  , ew = (e, t) => ({
    ...H1(e),
    options: [e, t]
})
  , tw = (e, t) => ({
    ...W1(e),
    options: [e, t]
})
  , nw = (e, t) => ({
    ...G1(e),
    options: [e, t]
});
var rw = "Arrow"
  , Pm = x.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...i} = e;
    return f.jsx(Ve.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : f.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Pm.displayName = rw;
var ow = Pm;
function iw(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = x.createContext(s)
          , a = n.length;
        n = [...n, s];
        function u(d) {
            const {scope: c, children: y, ...w} = d
              , g = (c == null ? void 0 : c[e][a]) || l
              , S = x.useMemo( () => w, Object.values(w));
            return f.jsx(g.Provider, {
                value: S,
                children: y
            })
        }
        function p(d, c) {
            const y = (c == null ? void 0 : c[e][a]) || l
              , w = x.useContext(y);
            if (w)
                return w;
            if (s !== void 0)
                return s;
            throw new Error(`\`${d}\` must be used within \`${i}\``)
        }
        return u.displayName = i + "Provider",
        [u, p]
    }
    const o = () => {
        const i = n.map(s => x.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return x.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, sw(o, ...t)]
}
function sw(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const d = a(i)[`__scope${u}`];
                return {
                    ...l,
                    ...d
                }
            }
            , {});
            return x.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function lw(e) {
    const [t,n] = x.useState(void 0);
    return qn( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const i = o[0];
                let s, l;
                if ("borderBoxSize"in i) {
                    const a = i.borderBoxSize
                      , u = Array.isArray(a) ? a[0] : a;
                    s = u.inlineSize,
                    l = u.blockSize
                } else
                    s = e.offsetWidth,
                    l = e.offsetHeight;
                n({
                    width: s,
                    height: l
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var Tm = "Popper"
  , [jm,Rm] = iw(Tm)
  , [q2,Mm] = jm(Tm)
  , Om = "PopperAnchor"
  , _m = x.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , i = Mm(Om, n)
      , s = x.useRef(null)
      , l = yt(t, s);
    return x.useEffect( () => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
    }
    ),
    r ? null : f.jsx(Ve.div, {
        ...o,
        ref: l
    })
}
);
_m.displayName = Om;
var qu = "PopperContent"
  , [aw,uw] = jm(qu)
  , Am = x.forwardRef( (e, t) => {
    var at, Yt, Gt, Xt, ei, nr;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: i="center", alignOffset: s=0, arrowPadding: l=0, avoidCollisions: a=!0, collisionBoundary: u=[], collisionPadding: p=0, sticky: d="partial", hideWhenDetached: c=!1, updatePositionStrategy: y="optimized", onPlaced: w, ...g} = e
      , S = Mm(qu, n)
      , [m,h] = x.useState(null)
      , v = yt(t, _n => h(_n))
      , [b,E] = x.useState(null)
      , k = lw(b)
      , N = (k == null ? void 0 : k.width) ?? 0
      , T = (k == null ? void 0 : k.height) ?? 0
      , L = r + (i !== "center" ? "-" + i : "")
      , O = typeof p == "number" ? p : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...p
    }
      , $ = Array.isArray(u) ? u : [u]
      , I = $.length > 0
      , W = {
        padding: O,
        boundary: $.filter(dw),
        altBoundary: I
    }
      , {refs: _, floatingStyles: Q, placement: B, isPositioned: K, middlewareData: C} = Y1({
        strategy: "fixed",
        placement: L,
        whileElementsMounted: (..._n) => $1(..._n, {
            animationFrame: y === "always"
        }),
        elements: {
            reference: S.anchor
        },
        middleware: [X1({
            mainAxis: o + T,
            alignmentAxis: s
        }), a && q1({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === "partial" ? Z1() : void 0,
            ...W
        }), a && J1({
            ...W
        }), ew({
            ...W,
            apply: ({elements: _n, rects: Zr, availableWidth: ti, availableHeight: qt}) => {
                const {width: Xs, height: qs} = Zr.reference
                  , we = _n.floating.style;
                we.setProperty("--radix-popper-available-width", `${ti}px`),
                we.setProperty("--radix-popper-available-height", `${qt}px`),
                we.setProperty("--radix-popper-anchor-width", `${Xs}px`),
                we.setProperty("--radix-popper-anchor-height", `${qs}px`)
            }
        }), b && nw({
            element: b,
            padding: l
        }), fw({
            arrowWidth: N,
            arrowHeight: T
        }), c && tw({
            strategy: "referenceHidden",
            ...W
        })]
    })
      , [R,z] = Im(B)
      , D = Mt(w);
    qn( () => {
        K && (D == null || D())
    }
    , [K, D]);
    const F = (at = C.arrow) == null ? void 0 : at.x
      , G = (Yt = C.arrow) == null ? void 0 : Yt.y
      , le = ((Gt = C.arrow) == null ? void 0 : Gt.centerOffset) !== 0
      , [He,Z] = x.useState();
    return qn( () => {
        m && Z(window.getComputedStyle(m).zIndex)
    }
    , [m]),
    f.jsx("div", {
        ref: _.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...Q,
            transform: K ? Q.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: He,
            "--radix-popper-transform-origin": [(Xt = C.transformOrigin) == null ? void 0 : Xt.x, (ei = C.transformOrigin) == null ? void 0 : ei.y].join(" "),
            ...((nr = C.hide) == null ? void 0 : nr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: f.jsx(aw, {
            scope: n,
            placedSide: R,
            onArrowChange: E,
            arrowX: F,
            arrowY: G,
            shouldHideArrow: le,
            children: f.jsx(Ve.div, {
                "data-side": R,
                "data-align": z,
                ...g,
                ref: v,
                style: {
                    ...g.style,
                    animation: K ? void 0 : "none"
                }
            })
        })
    })
}
);
Am.displayName = qu;
var Dm = "PopperArrow"
  , cw = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Lm = x.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , i = uw(Dm, r)
      , s = cw[i.placedSide];
    return f.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [s]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: f.jsx(ow, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
Lm.displayName = Dm;
function dw(e) {
    return e !== null
}
var fw = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var S, m, h;
        const {placement: n, rects: r, middlewareData: o} = t
          , s = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0
          , l = s ? 0 : e.arrowWidth
          , a = s ? 0 : e.arrowHeight
          , [u,p] = Im(n)
          , d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[p]
          , c = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + l / 2
          , y = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + a / 2;
        let w = ""
          , g = "";
        return u === "bottom" ? (w = s ? d : `${c}px`,
        g = `${-a}px`) : u === "top" ? (w = s ? d : `${c}px`,
        g = `${r.floating.height + a}px`) : u === "right" ? (w = `${-a}px`,
        g = s ? d : `${y}px`) : u === "left" && (w = `${r.floating.width + a}px`,
        g = s ? d : `${y}px`),
        {
            data: {
                x: w,
                y: g
            }
        }
    }
});
function Im(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var pw = _m
  , hw = Am
  , mw = Lm
  , [Vs,Z2] = Oh("Tooltip", [Rm])
  , Zu = Rm()
  , zm = "TooltipProvider"
  , vw = 700
  , Fd = "tooltip.open"
  , [gw,Fm] = Vs(zm)
  , $m = e => {
    const {__scopeTooltip: t, delayDuration: n=vw, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: i} = e
      , [s,l] = x.useState(!0)
      , a = x.useRef(!1)
      , u = x.useRef(0);
    return x.useEffect( () => {
        const p = u.current;
        return () => window.clearTimeout(p)
    }
    , []),
    f.jsx(gw, {
        scope: t,
        isOpenDelayed: s,
        delayDuration: n,
        onOpen: x.useCallback( () => {
            window.clearTimeout(u.current),
            l(!1)
        }
        , []),
        onClose: x.useCallback( () => {
            window.clearTimeout(u.current),
            u.current = window.setTimeout( () => l(!0), r)
        }
        , [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: x.useCallback(p => {
            a.current = p
        }
        , []),
        disableHoverableContent: o,
        children: i
    })
}
;
$m.displayName = zm;
var Bm = "Tooltip"
  , [J2,Hs] = Vs(Bm)
  , Fa = "TooltipTrigger"
  , yw = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Hs(Fa, n)
      , i = Fm(Fa, n)
      , s = Zu(n)
      , l = x.useRef(null)
      , a = yt(t, l, o.onTriggerChange)
      , u = x.useRef(!1)
      , p = x.useRef(!1)
      , d = x.useCallback( () => u.current = !1, []);
    return x.useEffect( () => () => document.removeEventListener("pointerup", d), [d]),
    f.jsx(pw, {
        asChild: !0,
        ...s,
        children: f.jsx(Ve.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: a,
            onPointerMove: ve(e.onPointerMove, c => {
                c.pointerType !== "touch" && !p.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(),
                p.current = !0)
            }
            ),
            onPointerLeave: ve(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                p.current = !1
            }
            ),
            onPointerDown: ve(e.onPointerDown, () => {
                u.current = !0,
                document.addEventListener("pointerup", d, {
                    once: !0
                })
            }
            ),
            onFocus: ve(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: ve(e.onBlur, o.onClose),
            onClick: ve(e.onClick, o.onClose)
        })
    })
}
);
yw.displayName = Fa;
var xw = "TooltipPortal"
  , [eS,ww] = Vs(xw, {
    forceMount: void 0
})
  , Wr = "TooltipContent"
  , Um = x.forwardRef( (e, t) => {
    const n = ww(Wr, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...i} = e
      , s = Hs(Wr, e.__scopeTooltip);
    return f.jsx(Fu, {
        present: r || s.open,
        children: s.disableHoverableContent ? f.jsx(Vm, {
            side: o,
            ...i,
            ref: t
        }) : f.jsx(Sw, {
            side: o,
            ...i,
            ref: t
        })
    })
}
)
  , Sw = x.forwardRef( (e, t) => {
    const n = Hs(Wr, e.__scopeTooltip)
      , r = Fm(Wr, e.__scopeTooltip)
      , o = x.useRef(null)
      , i = yt(t, o)
      , [s,l] = x.useState(null)
      , {trigger: a, onClose: u} = n
      , p = o.current
      , {onPointerInTransitChange: d} = r
      , c = x.useCallback( () => {
        l(null),
        d(!1)
    }
    , [d])
      , y = x.useCallback( (w, g) => {
        const S = w.currentTarget
          , m = {
            x: w.clientX,
            y: w.clientY
        }
          , h = kw(m, S.getBoundingClientRect())
          , v = Nw(m, h)
          , b = Pw(g.getBoundingClientRect())
          , E = jw([...v, ...b]);
        l(E),
        d(!0)
    }
    , [d]);
    return x.useEffect( () => () => c(), [c]),
    x.useEffect( () => {
        if (a && p) {
            const w = S => y(S, p)
              , g = S => y(S, a);
            return a.addEventListener("pointerleave", w),
            p.addEventListener("pointerleave", g),
            () => {
                a.removeEventListener("pointerleave", w),
                p.removeEventListener("pointerleave", g)
            }
        }
    }
    , [a, p, y, c]),
    x.useEffect( () => {
        if (s) {
            const w = g => {
                const S = g.target
                  , m = {
                    x: g.clientX,
                    y: g.clientY
                }
                  , h = (a == null ? void 0 : a.contains(S)) || (p == null ? void 0 : p.contains(S))
                  , v = !Tw(m, s);
                h ? c() : v && (c(),
                u())
            }
            ;
            return document.addEventListener("pointermove", w),
            () => document.removeEventListener("pointermove", w)
        }
    }
    , [a, p, s, u, c]),
    f.jsx(Vm, {
        ...e,
        ref: i
    })
}
)
  , [bw,Ew] = Vs(Bm, {
    isInside: !1
})
  , Vm = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: s, ...l} = e
      , a = Hs(Wr, n)
      , u = Zu(n)
      , {onClose: p} = a;
    return x.useEffect( () => (document.addEventListener(Fd, p),
    () => document.removeEventListener(Fd, p)), [p]),
    x.useEffect( () => {
        if (a.trigger) {
            const d = c => {
                const y = c.target;
                y != null && y.contains(a.trigger) && p()
            }
            ;
            return window.addEventListener("scroll", d, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", d, {
                capture: !0
            })
        }
    }
    , [a.trigger, p]),
    f.jsx(zu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: d => d.preventDefault(),
        onDismiss: p,
        children: f.jsxs(hw, {
            "data-state": a.stateAttribute,
            ...u,
            ...l,
            ref: t,
            style: {
                ...l.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [f.jsx(Mh, {
                children: r
            }), f.jsx(bw, {
                scope: n,
                isInside: !0,
                children: f.jsx(Sy, {
                    id: a.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
Um.displayName = Wr;
var Hm = "TooltipArrow"
  , Cw = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Zu(n);
    return Ew(Hm, n).isInside ? null : f.jsx(mw, {
        ...o,
        ...r,
        ref: t
    })
}
);
Cw.displayName = Hm;
function kw(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
    case i:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function Nw(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function Pw(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function Tw(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const l = t[i].x
          , a = t[i].y
          , u = t[s].x
          , p = t[s].y;
        a > r != p > r && n < (u - l) * (r - a) / (p - a) + l && (o = !o)
    }
    return o
}
function jw(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    Rw(t)
}
function Rw(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1]
              , s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1]
              , s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var Mw = $m
  , Wm = Um;
const Ow = Mw
  , _w = x.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => f.jsx(Wm, {
    ref: r,
    sideOffset: t,
    className: tr("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
_w.displayName = Wm.displayName;
var Ws = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Qs = typeof window > "u" || "Deno"in globalThis;
function dt() {}
function Aw(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Dw(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function Lw(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function $d(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Iw(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Bd(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: l} = e;
    if (s) {
        if (r) {
            if (t.queryHash !== Ju(s, t.options))
                return !1
        } else if (!Ho(t.queryKey, s))
            return !1
    }
    if (n !== "all") {
        const a = t.isActive();
        if (n === "active" && !a || n === "inactive" && a)
            return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || i && !i(t))
}
function Ud(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: i} = e;
    if (i) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Vo(t.options.mutationKey) !== Vo(i))
                return !1
        } else if (!Ho(t.options.mutationKey, i))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function Ju(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Vo)(e)
}
function Vo(e) {
    return JSON.stringify(e, (t, n) => $a(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function Ho(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !Ho(e[n], t[n])) : !1
}
function Qm(e, t) {
    if (e === t)
        return e;
    const n = Vd(e) && Vd(t);
    if (n || $a(e) && $a(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , i = n ? t : Object.keys(t)
          , s = i.length
          , l = n ? [] : {};
        let a = 0;
        for (let u = 0; u < s; u++) {
            const p = n ? u : i[u];
            (!n && r.includes(p) || n) && e[p] === void 0 && t[p] === void 0 ? (l[p] = void 0,
            a++) : (l[p] = Qm(e[p], t[p]),
            l[p] === e[p] && e[p] !== void 0 && a++)
        }
        return o === s && a === o ? e : l
    }
    return t
}
function Vd(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function $a(e) {
    if (!Hd(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Hd(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Hd(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function zw(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function Fw(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Qm(e, t) : t
}
function $w(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function Bw(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var ec = Symbol();
function Km(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === ec ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Fn, an, Tr, lf, Uw = (lf = class extends Ws {
    constructor() {
        super();
        q(this, Fn);
        q(this, an);
        q(this, Tr);
        H(this, Tr, t => {
            if (!Qs && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        P(this, an) || this.setEventListener(P(this, Tr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = P(this, an)) == null || t.call(this),
        H(this, an, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, Tr, t),
        (n = P(this, an)) == null || n.call(this),
        H(this, an, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        P(this, Fn) !== t && (H(this, Fn, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof P(this, Fn) == "boolean" ? P(this, Fn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Fn = new WeakMap,
an = new WeakMap,
Tr = new WeakMap,
lf), Ym = new Uw, jr, un, Rr, af, Vw = (af = class extends Ws {
    constructor() {
        super();
        q(this, jr, !0);
        q(this, un);
        q(this, Rr);
        H(this, Rr, t => {
            if (!Qs && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        P(this, un) || this.setEventListener(P(this, Rr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = P(this, un)) == null || t.call(this),
        H(this, un, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, Rr, t),
        (n = P(this, un)) == null || n.call(this),
        H(this, un, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        P(this, jr) !== t && (H(this, jr, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return P(this, jr)
    }
}
,
jr = new WeakMap,
un = new WeakMap,
Rr = new WeakMap,
af), gs = new Vw;
function Hw() {
    let e, t;
    const n = new Promise( (o, i) => {
        e = o,
        t = i
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function Ww(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Gm(e) {
    return (e ?? "online") === "online" ? gs.isOnline() : !0
}
var Xm = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Dl(e) {
    return e instanceof Xm
}
function qm(e) {
    let t = !1, n = 0, r = !1, o;
    const i = Hw()
      , s = g => {
        var S;
        r || (c(new Xm(g)),
        (S = e.abort) == null || S.call(e))
    }
      , l = () => {
        t = !0
    }
      , a = () => {
        t = !1
    }
      , u = () => Ym.isFocused() && (e.networkMode === "always" || gs.isOnline()) && e.canRun()
      , p = () => Gm(e.networkMode) && e.canRun()
      , d = g => {
        var S;
        r || (r = !0,
        (S = e.onSuccess) == null || S.call(e, g),
        o == null || o(),
        i.resolve(g))
    }
      , c = g => {
        var S;
        r || (r = !0,
        (S = e.onError) == null || S.call(e, g),
        o == null || o(),
        i.reject(g))
    }
      , y = () => new Promise(g => {
        var S;
        o = m => {
            (r || u()) && g(m)
        }
        ,
        (S = e.onPause) == null || S.call(e)
    }
    ).then( () => {
        var g;
        o = void 0,
        r || (g = e.onContinue) == null || g.call(e)
    }
    )
      , w = () => {
        if (r)
            return;
        let g;
        const S = n === 0 ? e.initialPromise : void 0;
        try {
            g = S ?? e.fn()
        } catch (m) {
            g = Promise.reject(m)
        }
        Promise.resolve(g).then(d).catch(m => {
            var k;
            if (r)
                return;
            const h = e.retry ?? (Qs ? 0 : 3)
              , v = e.retryDelay ?? Ww
              , b = typeof v == "function" ? v(n, m) : v
              , E = h === !0 || typeof h == "number" && n < h || typeof h == "function" && h(n, m);
            if (t || !E) {
                c(m);
                return
            }
            n++,
            (k = e.onFail) == null || k.call(e, n, m),
            zw(b).then( () => u() ? void 0 : y()).then( () => {
                t ? c(m) : w()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(),
        i),
        cancelRetry: l,
        continueRetry: a,
        canStart: p,
        start: () => (p() ? w() : y().then(w),
        i)
    }
}
function Qw() {
    let e = []
      , t = 0
      , n = l => {
        l()
    }
      , r = l => {
        l()
    }
      , o = l => setTimeout(l, 0);
    const i = l => {
        t ? e.push(l) : o( () => {
            n(l)
        }
        )
    }
      , s = () => {
        const l = e;
        e = [],
        l.length && o( () => {
            r( () => {
                l.forEach(a => {
                    n(a)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: l => {
            let a;
            t++;
            try {
                a = l()
            } finally {
                t--,
                t || s()
            }
            return a
        }
        ,
        batchCalls: l => (...a) => {
            i( () => {
                l(...a)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: l => {
            n = l
        }
        ,
        setBatchNotifyFunction: l => {
            r = l
        }
        ,
        setScheduler: l => {
            o = l
        }
    }
}
var _e = Qw(), $n, uf, Zm = (uf = class {
    constructor() {
        q(this, $n)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Dw(this.gcTime) && H(this, $n, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Qs ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        P(this, $n) && (clearTimeout(P(this, $n)),
        H(this, $n, void 0))
    }
}
,
$n = new WeakMap,
uf), Mr, Or, tt, Te, Wo, Bn, ft, Dt, cf, Kw = (cf = class extends Zm {
    constructor(t) {
        super();
        q(this, ft);
        q(this, Mr);
        q(this, Or);
        q(this, tt);
        q(this, Te);
        q(this, Wo);
        q(this, Bn);
        H(this, Bn, !1),
        H(this, Wo, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        H(this, tt, t.cache),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        H(this, Mr, Gw(this.options)),
        this.state = t.state ?? P(this, Mr),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = P(this, Te)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...P(this, Wo),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && P(this, tt).remove(this)
    }
    setData(t, n) {
        const r = Fw(this.state.data, t, this.options);
        return ke(this, ft, Dt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        ke(this, ft, Dt).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = P(this, Te)) == null ? void 0 : r.promise;
        return (o = P(this, Te)) == null || o.cancel(t),
        n ? n.then(dt).catch(dt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(P(this, Mr))
    }
    isActive() {
        return this.observers.some(t => Iw(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === ec || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStale() {
        return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(t=0) {
        return this.state.isInvalidated || this.state.data === void 0 || !Lw(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = P(this, Te)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = P(this, Te)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        P(this, tt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (P(this, Te) && (P(this, Bn) ? P(this, Te).cancel({
            revert: !0
        }) : P(this, Te).cancelRetry()),
        this.scheduleGc()),
        P(this, tt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || ke(this, ft, Dt).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var a, u, p;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (P(this, Te))
                return P(this, Te).continueRetry(),
                P(this, Te).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const d = this.observers.find(c => c.options.queryFn);
            d && this.setOptions(d.options)
        }
        const r = new AbortController
          , o = d => {
            Object.defineProperty(d, "signal", {
                enumerable: !0,
                get: () => (H(this, Bn, !0),
                r.signal)
            })
        }
          , i = () => {
            const d = Km(this.options, n)
              , c = {
                queryKey: this.queryKey,
                meta: this.meta
            };
            return o(c),
            H(this, Bn, !1),
            this.options.persister ? this.options.persister(d, c, this) : d(c)
        }
          , s = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i
        };
        o(s),
        (a = this.options.behavior) == null || a.onFetch(s, this),
        H(this, Or, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = s.fetchOptions) == null ? void 0 : u.meta)) && ke(this, ft, Dt).call(this, {
            type: "fetch",
            meta: (p = s.fetchOptions) == null ? void 0 : p.meta
        });
        const l = d => {
            var c, y, w, g;
            Dl(d) && d.silent || ke(this, ft, Dt).call(this, {
                type: "error",
                error: d
            }),
            Dl(d) || ((y = (c = P(this, tt).config).onError) == null || y.call(c, d, this),
            (g = (w = P(this, tt).config).onSettled) == null || g.call(w, this.state.data, d, this)),
            this.scheduleGc()
        }
        ;
        return H(this, Te, qm({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: s.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: d => {
                var c, y, w, g;
                if (d === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(d)
                } catch (S) {
                    l(S);
                    return
                }
                (y = (c = P(this, tt).config).onSuccess) == null || y.call(c, d, this),
                (g = (w = P(this, tt).config).onSettled) == null || g.call(w, d, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (d, c) => {
                ke(this, ft, Dt).call(this, {
                    type: "failed",
                    failureCount: d,
                    error: c
                })
            }
            ,
            onPause: () => {
                ke(this, ft, Dt).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                ke(this, ft, Dt).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: s.options.retry,
            retryDelay: s.options.retryDelay,
            networkMode: s.options.networkMode,
            canRun: () => !0
        })),
        P(this, Te).start()
    }
}
,
Mr = new WeakMap,
Or = new WeakMap,
tt = new WeakMap,
Te = new WeakMap,
Wo = new WeakMap,
Bn = new WeakMap,
ft = new WeakSet,
Dt = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...Yw(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return Dl(o) && o.revert && P(this, Or) ? {
                ...P(this, Or),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    _e.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        P(this, tt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
cf);
function Yw(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Gm(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Gw(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var kt, df, Xw = (df = class extends Ws {
    constructor(t={}) {
        super();
        q(this, kt);
        this.config = t,
        H(this, kt, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , i = n.queryHash ?? Ju(o, n);
        let s = this.get(i);
        return s || (s = new Kw({
            cache: this,
            queryKey: o,
            queryHash: i,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(s)),
        s
    }
    add(t) {
        P(this, kt).has(t.queryHash) || (P(this, kt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = P(this, kt).get(t.queryHash);
        n && (t.destroy(),
        n === t && P(this, kt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        _e.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return P(this, kt).get(t)
    }
    getAll() {
        return [...P(this, kt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Bd(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Bd(t, r)) : n
    }
    notify(t) {
        _e.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        _e.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        _e.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
kt = new WeakMap,
df), Nt, Me, Un, Pt, nn, ff, qw = (ff = class extends Zm {
    constructor(t) {
        super();
        q(this, Pt);
        q(this, Nt);
        q(this, Me);
        q(this, Un);
        this.mutationId = t.mutationId,
        H(this, Me, t.mutationCache),
        H(this, Nt, []),
        this.state = t.state || Zw(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        P(this, Nt).includes(t) || (P(this, Nt).push(t),
        this.clearGcTimeout(),
        P(this, Me).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        H(this, Nt, P(this, Nt).filter(n => n !== t)),
        this.scheduleGc(),
        P(this, Me).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        P(this, Nt).length || (this.state.status === "pending" ? this.scheduleGc() : P(this, Me).remove(this))
    }
    continue() {
        var t;
        return ((t = P(this, Un)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var o, i, s, l, a, u, p, d, c, y, w, g, S, m, h, v, b, E, k, N;
        H(this, Un, qm({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (T, L) => {
                ke(this, Pt, nn).call(this, {
                    type: "failed",
                    failureCount: T,
                    error: L
                })
            }
            ,
            onPause: () => {
                ke(this, Pt, nn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                ke(this, Pt, nn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, Me).canRun(this)
        }));
        const n = this.state.status === "pending"
          , r = !P(this, Un).canStart();
        try {
            if (!n) {
                ke(this, Pt, nn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: r
                }),
                await ((i = (o = P(this, Me).config).onMutate) == null ? void 0 : i.call(o, t, this));
                const L = await ((l = (s = this.options).onMutate) == null ? void 0 : l.call(s, t));
                L !== this.state.context && ke(this, Pt, nn).call(this, {
                    type: "pending",
                    context: L,
                    variables: t,
                    isPaused: r
                })
            }
            const T = await P(this, Un).start();
            return await ((u = (a = P(this, Me).config).onSuccess) == null ? void 0 : u.call(a, T, t, this.state.context, this)),
            await ((d = (p = this.options).onSuccess) == null ? void 0 : d.call(p, T, t, this.state.context)),
            await ((y = (c = P(this, Me).config).onSettled) == null ? void 0 : y.call(c, T, null, this.state.variables, this.state.context, this)),
            await ((g = (w = this.options).onSettled) == null ? void 0 : g.call(w, T, null, t, this.state.context)),
            ke(this, Pt, nn).call(this, {
                type: "success",
                data: T
            }),
            T
        } catch (T) {
            try {
                throw await ((m = (S = P(this, Me).config).onError) == null ? void 0 : m.call(S, T, t, this.state.context, this)),
                await ((v = (h = this.options).onError) == null ? void 0 : v.call(h, T, t, this.state.context)),
                await ((E = (b = P(this, Me).config).onSettled) == null ? void 0 : E.call(b, void 0, T, this.state.variables, this.state.context, this)),
                await ((N = (k = this.options).onSettled) == null ? void 0 : N.call(k, void 0, T, t, this.state.context)),
                T
            } finally {
                ke(this, Pt, nn).call(this, {
                    type: "error",
                    error: T
                })
            }
        } finally {
            P(this, Me).runNext(this)
        }
    }
}
,
Nt = new WeakMap,
Me = new WeakMap,
Un = new WeakMap,
Pt = new WeakSet,
nn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    _e.batch( () => {
        P(this, Nt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        P(this, Me).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
ff);
function Zw() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var We, Qo, pf, Jw = (pf = class extends Ws {
    constructor(t={}) {
        super();
        q(this, We);
        q(this, Qo);
        this.config = t,
        H(this, We, new Map),
        H(this, Qo, Date.now())
    }
    build(t, n, r) {
        const o = new qw({
            mutationCache: this,
            mutationId: ++oi(this, Qo)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        const n = Ni(t)
          , r = P(this, We).get(n) ?? [];
        r.push(t),
        P(this, We).set(n, r),
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        var r;
        const n = Ni(t);
        if (P(this, We).has(n)) {
            const o = (r = P(this, We).get(n)) == null ? void 0 : r.filter(i => i !== t);
            o && (o.length === 0 ? P(this, We).delete(n) : P(this, We).set(n, o))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        var r;
        const n = (r = P(this, We).get(Ni(t))) == null ? void 0 : r.find(o => o.state.status === "pending");
        return !n || n === t
    }
    runNext(t) {
        var r;
        const n = (r = P(this, We).get(Ni(t))) == null ? void 0 : r.find(o => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve()
    }
    clear() {
        _e.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    getAll() {
        return [...P(this, We).values()].flat()
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Ud(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Ud(t, n))
    }
    notify(t) {
        _e.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return _e.batch( () => Promise.all(t.map(n => n.continue().catch(dt))))
    }
}
,
We = new WeakMap,
Qo = new WeakMap,
pf);
function Ni(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
}
function Wd(e) {
    return {
        onFetch: (t, n) => {
            var p, d, c, y, w;
            const r = t.options
              , o = (c = (d = (p = t.fetchOptions) == null ? void 0 : p.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : c.direction
              , i = ((y = t.state.data) == null ? void 0 : y.pages) || []
              , s = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
            let l = {
                pages: [],
                pageParams: []
            }
              , a = 0;
            const u = async () => {
                let g = !1;
                const S = v => {
                    Object.defineProperty(v, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , m = Km(t.options, t.fetchOptions)
                  , h = async (v, b, E) => {
                    if (g)
                        return Promise.reject();
                    if (b == null && v.pages.length)
                        return Promise.resolve(v);
                    const k = {
                        queryKey: t.queryKey,
                        pageParam: b,
                        direction: E ? "backward" : "forward",
                        meta: t.options.meta
                    };
                    S(k);
                    const N = await m(k)
                      , {maxPages: T} = t.options
                      , L = E ? Bw : $w;
                    return {
                        pages: L(v.pages, N, T),
                        pageParams: L(v.pageParams, b, T)
                    }
                }
                ;
                if (o && i.length) {
                    const v = o === "backward"
                      , b = v ? e2 : Qd
                      , E = {
                        pages: i,
                        pageParams: s
                    }
                      , k = b(r, E);
                    l = await h(E, k, v)
                } else {
                    const v = e ?? i.length;
                    do {
                        const b = a === 0 ? s[0] ?? r.initialPageParam : Qd(r, l);
                        if (a > 0 && b == null)
                            break;
                        l = await h(l, b),
                        a++
                    } while (a < v)
                }
                return l
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var g, S;
                return (S = (g = t.options).persister) == null ? void 0 : S.call(g, u, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Qd(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function e2(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var de, cn, dn, _r, Ar, fn, Dr, Lr, hf, t2 = (hf = class {
    constructor(e={}) {
        q(this, de);
        q(this, cn);
        q(this, dn);
        q(this, _r);
        q(this, Ar);
        q(this, fn);
        q(this, Dr);
        q(this, Lr);
        H(this, de, e.queryCache || new Xw),
        H(this, cn, e.mutationCache || new Jw),
        H(this, dn, e.defaultOptions || {}),
        H(this, _r, new Map),
        H(this, Ar, new Map),
        H(this, fn, 0)
    }
    mount() {
        oi(this, fn)._++,
        P(this, fn) === 1 && (H(this, Dr, Ym.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            P(this, de).onFocus())
        }
        )),
        H(this, Lr, gs.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            P(this, de).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        oi(this, fn)._--,
        P(this, fn) === 0 && ((e = P(this, Dr)) == null || e.call(this),
        H(this, Dr, void 0),
        (t = P(this, Lr)) == null || t.call(this),
        H(this, Lr, void 0))
    }
    isFetching(e) {
        return P(this, de).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return P(this, cn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = P(this, de).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0)
            return this.fetchQuery(e);
        {
            const n = this.defaultQueryOptions(e)
              , r = P(this, de).build(this, n);
            return e.revalidateIfStale && r.isStaleByTime($d(n.staleTime, r)) && this.prefetchQuery(n),
            Promise.resolve(t)
        }
    }
    getQueriesData(e) {
        return P(this, de).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = P(this, de).get(r.queryHash)
          , i = o == null ? void 0 : o.state.data
          , s = Aw(t, i);
        if (s !== void 0)
            return P(this, de).build(this, r).setData(s, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return _e.batch( () => P(this, de).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = P(this, de).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = P(this, de);
        _e.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = P(this, de)
          , r = {
            type: "active",
            ...e
        };
        return _e.batch( () => (n.findAll(e).forEach(o => {
            o.reset()
        }
        ),
        this.refetchQueries(r, t)))
    }
    cancelQueries(e={}, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = _e.batch( () => P(this, de).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(dt).catch(dt)
    }
    invalidateQueries(e={}, t={}) {
        return _e.batch( () => {
            if (P(this, de).findAll(e).forEach(r => {
                r.invalidate()
            }
            ),
            e.refetchType === "none")
                return Promise.resolve();
            const n = {
                ...e,
                type: e.refetchType ?? e.type ?? "active"
            };
            return this.refetchQueries(n, t)
        }
        )
    }
    refetchQueries(e={}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
        }
          , r = _e.batch( () => P(this, de).findAll(e).filter(o => !o.isDisabled()).map(o => {
            let i = o.fetch(void 0, n);
            return n.throwOnError || (i = i.catch(dt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(r).then(dt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = P(this, de).build(this, t);
        return n.isStaleByTime($d(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(dt).catch(dt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Wd(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(dt).catch(dt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Wd(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return gs.isOnline() ? P(this, cn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return P(this, de)
    }
    getMutationCache() {
        return P(this, cn)
    }
    getDefaultOptions() {
        return P(this, dn)
    }
    setDefaultOptions(e) {
        H(this, dn, e)
    }
    setQueryDefaults(e, t) {
        P(this, _r).set(Vo(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...P(this, _r).values()];
        let n = {};
        return t.forEach(r => {
            Ho(e, r.queryKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        P(this, Ar).set(Vo(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...P(this, Ar).values()];
        let n = {};
        return t.forEach(r => {
            Ho(e, r.mutationKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...P(this, dn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Ju(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.enabled !== !0 && t.queryFn === ec && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...P(this, dn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        P(this, de).clear(),
        P(this, cn).clear()
    }
}
,
de = new WeakMap,
cn = new WeakMap,
dn = new WeakMap,
_r = new WeakMap,
Ar = new WeakMap,
fn = new WeakMap,
Dr = new WeakMap,
Lr = new WeakMap,
hf), n2 = x.createContext(void 0), r2 = ({client: e, children: t}) => (x.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
f.jsx(n2.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ys() {
    return ys = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ys.apply(this, arguments)
}
var mn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(mn || (mn = {}));
const Kd = "popstate";
function o2(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: i, search: s, hash: l} = r.location;
        return Ba("", {
            pathname: i,
            search: s,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : e0(o)
    }
    return s2(t, n, null, e)
}
function Ue(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Jm(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function i2() {
    return Math.random().toString(36).substr(2, 8)
}
function Yd(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Ba(e, t, n, r) {
    return n === void 0 && (n = null),
    ys({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Ks(t) : t, {
        state: n,
        key: t && t.key || r || i2()
    })
}
function e0(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Ks(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function s2(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = r
      , s = o.history
      , l = mn.Pop
      , a = null
      , u = p();
    u == null && (u = 0,
    s.replaceState(ys({}, s.state, {
        idx: u
    }), ""));
    function p() {
        return (s.state || {
            idx: null
        }).idx
    }
    function d() {
        l = mn.Pop;
        let S = p()
          , m = S == null ? null : S - u;
        u = S,
        a && a({
            action: l,
            location: g.location,
            delta: m
        })
    }
    function c(S, m) {
        l = mn.Push;
        let h = Ba(g.location, S, m);
        u = p() + 1;
        let v = Yd(h, u)
          , b = g.createHref(h);
        try {
            s.pushState(v, "", b)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError")
                throw E;
            o.location.assign(b)
        }
        i && a && a({
            action: l,
            location: g.location,
            delta: 1
        })
    }
    function y(S, m) {
        l = mn.Replace;
        let h = Ba(g.location, S, m);
        u = p();
        let v = Yd(h, u)
          , b = g.createHref(h);
        s.replaceState(v, "", b),
        i && a && a({
            action: l,
            location: g.location,
            delta: 0
        })
    }
    function w(S) {
        let m = o.location.origin !== "null" ? o.location.origin : o.location.href
          , h = typeof S == "string" ? S : e0(S);
        return h = h.replace(/ $/, "%20"),
        Ue(m, "No window.location.(origin|href) available to create URL for href: " + h),
        new URL(h,m)
    }
    let g = {
        get action() {
            return l
        },
        get location() {
            return e(o, s)
        },
        listen(S) {
            if (a)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Kd, d),
            a = S,
            () => {
                o.removeEventListener(Kd, d),
                a = null
            }
        },
        createHref(S) {
            return t(o, S)
        },
        createURL: w,
        encodeLocation(S) {
            let m = w(S);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: c,
        replace: y,
        go(S) {
            return s.go(S)
        }
    };
    return g
}
var Gd;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Gd || (Gd = {}));
function l2(e, t, n) {
    return n === void 0 && (n = "/"),
    a2(e, t, n, !1)
}
function a2(e, t, n, r) {
    let o = typeof t == "string" ? Ks(t) : t
      , i = r0(o.pathname || "/", n);
    if (i == null)
        return null;
    let s = t0(e);
    u2(s);
    let l = null;
    for (let a = 0; l == null && a < s.length; ++a) {
        let u = w2(i);
        l = y2(s[a], u, r)
    }
    return l
}
function t0(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (i, s, l) => {
        let a = {
            relativePath: l === void 0 ? i.path || "" : l,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        a.relativePath.startsWith("/") && (Ue(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        a.relativePath = a.relativePath.slice(r.length));
        let u = Pr([r, a.relativePath])
          , p = n.concat(a);
        i.children && i.children.length > 0 && (Ue(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        t0(i.children, t, p, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: v2(u, i.index),
            routesMeta: p
        })
    }
    ;
    return e.forEach( (i, s) => {
        var l;
        if (i.path === "" || !((l = i.path) != null && l.includes("?")))
            o(i, s);
        else
            for (let a of n0(i.path))
                o(i, s, a)
    }
    ),
    t
}
function n0(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [i, ""] : [i];
    let s = n0(r.join("/"))
      , l = [];
    return l.push(...s.map(a => a === "" ? i : [i, a].join("/"))),
    o && l.push(...s),
    l.map(a => e.startsWith("/") && a === "" ? "/" : a)
}
function u2(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : g2(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const c2 = /^:[\w-]+$/
  , d2 = 3
  , f2 = 2
  , p2 = 1
  , h2 = 10
  , m2 = -2
  , Xd = e => e === "*";
function v2(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Xd) && (r += m2),
    t && (r += f2),
    n.filter(o => !Xd(o)).reduce( (o, i) => o + (c2.test(i) ? d2 : i === "" ? p2 : h2), r)
}
function g2(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function y2(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , i = "/"
      , s = [];
    for (let l = 0; l < r.length; ++l) {
        let a = r[l]
          , u = l === r.length - 1
          , p = i === "/" ? t : t.slice(i.length) || "/"
          , d = qd({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: u
        }, p)
          , c = a.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = qd({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: !1
        }, p)),
        !d)
            return null;
        Object.assign(o, d.params),
        s.push({
            params: o,
            pathname: Pr([i, d.pathname]),
            pathnameBase: S2(Pr([i, d.pathnameBase])),
            route: c
        }),
        d.pathnameBase !== "/" && (i = Pr([i, d.pathnameBase]))
    }
    return s
}
function qd(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = x2(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let i = o[0]
      , s = i.replace(/(.)\/+$/, "$1")
      , l = o.slice(1);
    return {
        params: r.reduce( (u, p, d) => {
            let {paramName: c, isOptional: y} = p;
            if (c === "*") {
                let g = l[d] || "";
                s = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const w = l[d];
            return y && !w ? u[c] = void 0 : u[c] = (w || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}
function x2(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Jm(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, a) => (r.push({
        paramName: l,
        isOptional: a != null
    }),
    a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function w2(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Jm(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function r0(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Pr = e => e.join("/").replace(/\/\/+/g, "/")
  , S2 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function b2(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const o0 = ["post", "put", "patch", "delete"];
new Set(o0);
const E2 = ["get", ...o0];
new Set(E2);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function xs() {
    return xs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    xs.apply(this, arguments)
}
const C2 = x.createContext(null)
  , k2 = x.createContext(null)
  , i0 = x.createContext(null)
  , Ys = x.createContext(null)
  , Gs = x.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , s0 = x.createContext(null);
function tc() {
    return x.useContext(Ys) != null
}
function N2() {
    return tc() || Ue(!1),
    x.useContext(Ys).location
}
function P2(e, t) {
    return T2(e, t)
}
function T2(e, t, n, r) {
    tc() || Ue(!1);
    let {navigator: o} = x.useContext(i0)
      , {matches: i} = x.useContext(Gs)
      , s = i[i.length - 1]
      , l = s ? s.params : {};
    s && s.pathname;
    let a = s ? s.pathnameBase : "/";
    s && s.route;
    let u = N2(), p;
    if (t) {
        var d;
        let S = typeof t == "string" ? Ks(t) : t;
        a === "/" || (d = S.pathname) != null && d.startsWith(a) || Ue(!1),
        p = S
    } else
        p = u;
    let c = p.pathname || "/"
      , y = c;
    if (a !== "/") {
        let S = a.replace(/^\//, "").split("/");
        y = "/" + c.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let w = l2(e, {
        pathname: y
    })
      , g = _2(w && w.map(S => Object.assign({}, S, {
        params: Object.assign({}, l, S.params),
        pathname: Pr([a, o.encodeLocation ? o.encodeLocation(S.pathname).pathname : S.pathname]),
        pathnameBase: S.pathnameBase === "/" ? a : Pr([a, o.encodeLocation ? o.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
    })), i, n, r);
    return t && g ? x.createElement(Ys.Provider, {
        value: {
            location: xs({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, p),
            navigationType: mn.Pop
        }
    }, g) : g
}
function j2() {
    let e = I2()
      , t = b2(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? x.createElement("pre", {
        style: o
    }, n) : null, null)
}
const R2 = x.createElement(j2, null);
class M2 extends x.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? x.createElement(Gs.Provider, {
            value: this.props.routeContext
        }, x.createElement(s0.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function O2(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = x.useContext(C2);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(Gs.Provider, {
        value: t
    }, r)
}
function _2(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let p = s.findIndex(d => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0);
        p >= 0 || Ue(!1),
        s = s.slice(0, Math.min(s.length, p + 1))
    }
    let a = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let p = 0; p < s.length; p++) {
            let d = s[p];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = p),
            d.route.id) {
                let {loaderData: c, errors: y} = n
                  , w = d.route.loader && c[d.route.id] === void 0 && (!y || y[d.route.id] === void 0);
                if (d.route.lazy || w) {
                    a = !0,
                    u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (p, d, c) => {
        let y, w = !1, g = null, S = null;
        n && (y = l && d.route.id ? l[d.route.id] : void 0,
        g = d.route.errorElement || R2,
        a && (u < 0 && c === 0 ? (w = !0,
        S = null) : u === c && (w = !0,
        S = d.route.hydrateFallbackElement || null)));
        let m = t.concat(s.slice(0, c + 1))
          , h = () => {
            let v;
            return y ? v = g : w ? v = S : d.route.Component ? v = x.createElement(d.route.Component, null) : d.route.element ? v = d.route.element : v = p,
            x.createElement(O2, {
                match: d,
                routeContext: {
                    outlet: p,
                    matches: m,
                    isDataRoute: n != null
                },
                children: v
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || c === 0) ? x.createElement(M2, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: y,
            children: h(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : h()
    }
    , null)
}
var Ua = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Ua || {});
function A2(e) {
    let t = x.useContext(k2);
    return t || Ue(!1),
    t
}
function D2(e) {
    let t = x.useContext(Gs);
    return t || Ue(!1),
    t
}
function L2(e) {
    let t = D2()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Ue(!1),
    n.route.id
}
function I2() {
    var e;
    let t = x.useContext(s0)
      , n = A2(Ua.UseRouteError)
      , r = L2(Ua.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function l0(e) {
    Ue(!1)
}
function z2(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=mn.Pop, navigator: i, static: s=!1, future: l} = e;
    tc() && Ue(!1);
    let a = t.replace(/^\/*/, "/")
      , u = x.useMemo( () => ({
        basename: a,
        navigator: i,
        static: s,
        future: xs({
            v7_relativeSplatPath: !1
        }, l)
    }), [a, l, i, s]);
    typeof r == "string" && (r = Ks(r));
    let {pathname: p="/", search: d="", hash: c="", state: y=null, key: w="default"} = r
      , g = x.useMemo( () => {
        let S = r0(p, a);
        return S == null ? null : {
            location: {
                pathname: S,
                search: d,
                hash: c,
                state: y,
                key: w
            },
            navigationType: o
        }
    }
    , [a, p, d, c, y, w, o]);
    return g == null ? null : x.createElement(i0.Provider, {
        value: u
    }, x.createElement(Ys.Provider, {
        children: n,
        value: g
    }))
}
function F2(e) {
    let {children: t, location: n} = e;
    return P2(Va(t), n)
}
new Promise( () => {}
);
function Va(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return x.Children.forEach(e, (r, o) => {
        if (!x.isValidElement(r))
            return;
        let i = [...t, o];
        if (r.type === x.Fragment) {
            n.push.apply(n, Va(r.props.children, i));
            return
        }
        r.type !== l0 && Ue(!1),
        !r.props.index || !r.props.children || Ue(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = Va(r.props.children, i)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const $2 = "6";
try {
    window.__reactRouterVersion = $2
} catch {}
const B2 = "startTransition"
  , Zd = _0[B2];
function U2(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , i = x.useRef();
    i.current == null && (i.current = o2({
        window: o,
        v5Compat: !0
    }));
    let s = i.current
      , [l,a] = x.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: u} = r || {}
      , p = x.useCallback(d => {
        u && Zd ? Zd( () => a(d)) : a(d)
    }
    , [a, u]);
    return x.useLayoutEffect( () => s.listen(p), [s, p]),
    x.createElement(z2, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
        future: r
    })
}
var Jd;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Jd || (Jd = {}));
var ef;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(ef || (ef = {}));
const a0 = x.createContext(void 0)
  , u0 = () => {
    const e = x.useContext(a0);
    if (!e)
        throw new Error("useTheme must be used within a ThemeProvider");
    return e
}
  , V2 = ({children: e}) => {
    const [t,n] = x.useState(!1)
      , r = () => {
        n(!t)
    }
    ;
    return f.jsx(a0.Provider, {
        value: {
            isOldTheme: t,
            toggleTheme: r
        },
        children: e
    })
}
  , tf = () => {
    const [e,t] = x.useState(!1)
      , [n,r] = x.useState(!1);
    x.useEffect( () => {
        const s = () => {
            t(window.scrollY > 50)
        }
        ;
        return window.addEventListener("scroll", s),
        () => window.removeEventListener("scroll", s)
    }
    , []);
    const o = [{
        name: "Home",
        href: "#home"
    }, {
        name: "About",
        href: "#about"
    }, {
        name: "Text Decorator",
        href: "#text-decorator"
    }, {
        name: "My Servers",
        href: "#servers"
    }]
      , i = s => {
        const l = document.querySelector(s);
        l && l.scrollIntoView({
            behavior: "smooth"
        }),
        r(!1)
    }
    ;
    return f.jsx("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${e ? "glass-effect border-b border-cyan-400/30 shadow-2xl shadow-cyan-500/10" : "bg-transparent"}`,
        children: f.jsxs("div", {
            className: "section-padding",
            children: [f.jsxs("div", {
                className: "flex items-center justify-between h-20",
                children: [f.jsxs("button", {
                    onClick: () => i("#home"),
                    className: "group flex items-center gap-3 text-3xl font-montserrat font-bold transition-all duration-500 hover:scale-110",
                    children: [f.jsx(Fs, {
                        className: "w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 group-hover:rotate-12"
                    }), f.jsx("span", {
                        className: "text-white group-hover:text-cyan-400 transition-colors duration-300",
                        children: "TheRealVenom"
                    }), f.jsx("span", {
                        className: "text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 animate-pulse",
                        children: "."
                    })]
                }), f.jsx("div", {
                    className: "hidden md:flex space-x-10",
                    children: o.map( (s, l) => f.jsx("button", {
                        onClick: () => i(s.href),
                        className: "relative text-base font-semibold transition-all duration-500 hover:text-cyan-400 text-slate-200 hover:scale-110 nav-link",
                        style: {
                            animationDelay: `${l * .1}s`
                        },
                        children: s.name
                    }, s.name))
                }), f.jsx("button", {
                    className: "md:hidden text-white hover:text-cyan-400 transition-all duration-500 hover:scale-125 hover:rotate-180",
                    onClick: () => r(!n),
                    children: n ? f.jsx(am, {
                        size: 28
                    }) : f.jsx(Yy, {
                        size: 28
                    })
                })]
            }), f.jsx("div", {
                className: `md:hidden transition-all duration-700 overflow-hidden ${n ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
                children: f.jsx("div", {
                    className: "py-6 space-y-4 glass-effect rounded-2xl mt-4 border border-cyan-400/20 shadow-2xl",
                    children: o.map( (s, l) => f.jsx("button", {
                        onClick: () => i(s.href),
                        className: "block w-full px-6 py-3 text-center transition-all duration-500 hover:text-cyan-400 hover:bg-cyan-400/10 text-slate-200 font-medium hover:scale-105 rounded-lg mx-4",
                        style: {
                            animationDelay: `${l * .1}s`,
                            animation: n ? "fade-in-up 0.5s ease-out forwards" : "none"
                        },
                        children: s.name
                    }, s.name))
                })
            })]
        })
    })
}
  , H2 = () => {
    const [e,t] = x.useState([])
      , [n,r] = x.useState({
        x: 0,
        y: 0
    });
    x.useEffect( () => {
        ( () => {
            const l = Array.from({
                length: 80
            }, (a, u) => ({
                id: u,
                left: Math.random() * 100,
                top: Math.random() * 100,
                delay: Math.random() * 12,
                size: Math.random() * 4 + 1
            }));
            t(l)
        }
        )();
        const s = l => {
            r({
                x: l.clientX / window.innerWidth * 100,
                y: l.clientY / window.innerHeight * 100
            })
        }
        ;
        return window.addEventListener("mousemove", s),
        () => window.removeEventListener("mousemove", s)
    }
    , []);
    const o = i => {
        const s = document.querySelector(i);
        s && s.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return f.jsxs("section", {
        id: "home",
        className: "relative min-h-screen flex items-center gradient-bg overflow-hidden",
        children: [f.jsx("div", {
            className: "absolute inset-0",
            children: e.map(i => f.jsx("div", {
                className: "absolute rounded-full animate-pulse",
                style: {
                    left: `${i.left}%`,
                    top: `${i.top}%`,
                    width: `${i.size}px`,
                    height: `${i.size}px`,
                    background: "radial-gradient(circle, rgba(6, 182, 212, 0.8), rgba(59, 130, 246, 0.4))",
                    animationDelay: `${i.delay}s`,
                    animationDuration: "6s",
                    filter: "blur(0.5px)"
                }
            }, i.id))
        }), f.jsx("div", {
            className: "absolute inset-0 opacity-30 transition-all duration-1000",
            style: {
                background: `radial-gradient(circle at ${n.x}% ${n.y}%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)`
            }
        }), f.jsx("div", {
            className: "relative z-10 section-padding w-full",
            children: f.jsx("div", {
                className: "max-w-5xl mx-auto text-center",
                children: f.jsxs("div", {
                    className: "animate-bounce-in",
                    children: [f.jsx("div", {
                        className: "mb-12 floating-animation",
                        children: f.jsx("div", {
                            className: "w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-2 shadow-2xl animate-glow mb-8 pulse-glow",
                            children: f.jsx("img", {
                                src: "/lovable-uploads/7c3c4bae-c8ce-4497-8217-a759cb11c627.png",
                                alt: "_VortexShadow Profile",
                                className: "w-full h-full rounded-full object-cover border-4 border-white/20"
                            })
                        })
                    }), f.jsx("h1", {
                        className: "text-8xl md:text-[12rem] font-montserrat font-bold mb-8 animate-scale-in",
                        children: f.jsx("span", {
                            className: "text-shimmer",
                            children: "_VortexShadow"
                        })
                    }), f.jsxs("div", {
                        className: "relative mb-10",
                        children: [f.jsx(Wn, {
                            className: "absolute -top-4 -left-4 w-8 h-8 text-cyan-400 animate-pulse"
                        }), f.jsx("h2", {
                            className: "text-3xl md:text-5xl font-montserrat font-light gradient-text mb-2 animate-fade-in-up",
                            style: {
                                animationDelay: "0.3s"
                            },
                            children: "Discord Bot & Websites Developer"
                        }), f.jsx(Wn, {
                            className: "absolute -bottom-4 -right-4 w-6 h-6 text-blue-400 animate-pulse",
                            style: {
                                animationDelay: "1s"
                            }
                        })]
                    }), f.jsx("div", {
                        className: "glass-effect rounded-2xl p-8 mb-16 animate-fade-in-up border border-cyan-400/20",
                        style: {
                            animationDelay: "0.6s"
                        },
                        children: f.jsxs("p", {
                            className: "text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto",
                            children: ["Hello, I am ", f.jsx("span", {
                                className: "gradient-text font-semibold",
                                children: "kiro"
                            }), ", nicknamed ", f.jsx("span", {
                                className: "gradient-text font-semibold",
                                children: "_VortexShadow"
                            }), ". My skills are design and programming professionally. I program on my phone and design on my phone at the", f.jsx("span", {
                                className: "text-cyan-400 font-semibold",
                                children: " cheapest prices"
                            }), ". I live in ", f.jsx("span", {
                                className: "text-cyan-400 font-semibold",
                                children: "Egypt"
                            }), "."]
                        })
                    }), f.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-8 justify-center mb-20 animate-slide-in-left",
                        style: {
                            animationDelay: "0.9s"
                        },
                        children: [f.jsxs("button", {
                            onClick: () => o("#servers"),
                            className: "group px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-2 relative overflow-hidden text-lg",
                            children: [f.jsx("span", {
                                className: "relative z-10",
                                children: "View My Servers"
                            }), f.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            })]
                        }), f.jsx("button", {
                            onClick: () => o("#text-decorator"),
                            className: "group px-10 py-5 glass-effect border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl transition-all duration-500 hover:bg-cyan-400 hover:text-slate-900 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-400/40 hover:-translate-y-2 text-lg",
                            children: f.jsx("span", {
                                className: "relative z-10",
                                children: "Text Decorator"
                            })
                        })]
                    }), f.jsx("div", {
                        className: "flex justify-center animate-slide-in-right",
                        style: {
                            animationDelay: "1.2s"
                        },
                        children: f.jsx("a", {
                            href: "https://discord.com/users/vm__k",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "group w-20 h-20 glass-effect rounded-3xl flex items-center justify-center transition-all duration-500 hover:bg-cyan-500 hover:scale-125 hover:shadow-2xl hover:shadow-cyan-500/50 border border-cyan-400/20 hover:border-cyan-400 hover:rotate-12",
                            children: f.jsx(lm, {
                                className: "w-8 h-8 text-cyan-400 group-hover:text-white transition-all duration-500 group-hover:scale-110"
                            })
                        })
                    })]
                })
            })
        }), f.jsx("div", {
            className: "absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-pulse floating-animation opacity-60"
        }), f.jsx("div", {
            className: "absolute top-40 right-20 w-6 h-6 bg-blue-500 rounded-full animate-pulse floating-animation opacity-40",
            style: {
                animationDelay: "2s"
            }
        }), f.jsx("div", {
            className: "absolute bottom-32 left-1/4 w-3 h-3 bg-purple-500 rounded-full animate-pulse floating-animation opacity-50",
            style: {
                animationDelay: "4s"
            }
        }), f.jsx("div", {
            className: "absolute bottom-20 right-1/3 w-5 h-5 bg-cyan-300 rounded-full animate-pulse floating-animation opacity-30",
            style: {
                animationDelay: "1s"
            }
        })]
    })
}
  , W2 = () => {
    const [e,t] = x.useState([])
      , [n,r] = x.useState({
        x: 0,
        y: 0
    })
      , {toggleTheme: o} = u0();
    x.useEffect( () => {
        ( () => {
            const a = Array.from({
                length: 150
            }, (u, p) => ({
                id: p,
                left: Math.random() * 100,
                top: Math.random() * 100,
                delay: Math.random() * 12,
                size: Math.random() * 8 + 1
            }));
            t(a)
        }
        )();
        const l = a => {
            r({
                x: a.clientX / window.innerWidth * 100,
                y: a.clientY / window.innerHeight * 100
            })
        }
        ;
        return window.addEventListener("mousemove", l),
        () => window.removeEventListener("mousemove", l)
    }
    , []);
    const i = s => {
        const l = document.querySelector(s);
        l && l.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return f.jsxs("section", {
        id: "home",
        className: "relative min-h-screen flex items-center overflow-hidden modern-theme modern-pattern-dots",
        style: {
            background: "var(--modern-gradient-secondary)"
        },
        children: [f.jsx("div", {
            className: "absolute inset-0",
            children: e.map(s => f.jsx("div", {
                className: "absolute rounded-full modern-particle modern-glow opacity-40",
                style: {
                    left: `${s.left}%`,
                    top: `${s.top}%`,
                    width: `${s.size}px`,
                    height: `${s.size}px`,
                    background: `hsl(${280 + Math.random() * 80} ${85 + Math.random() * 15}% ${60 + Math.random() * 25}%)`,
                    animationDelay: `${s.delay}s`,
                    animationDuration: `${8 + Math.random() * 8}s`,
                    filter: "blur(0.5px)",
                    boxShadow: `0 0 ${s.size * 2}px hsl(${280 + Math.random() * 80} 85% 65% / 0.6)`
                }
            }, s.id))
        }), f.jsx("div", {
            className: "absolute inset-0 opacity-50 transition-all duration-1500 pointer-events-none",
            style: {
                background: `
            radial-gradient(circle at ${n.x}% ${n.y}%, 
              hsl(var(--modern-primary) / 0.3) 0%, 
              hsl(var(--modern-accent) / 0.2) 30%, 
              transparent 70%),
            radial-gradient(circle at ${100 - n.x}% ${100 - n.y}%, 
              hsl(var(--modern-secondary) / 0.2) 0%, 
              transparent 50%)`
            }
        }), f.jsx("div", {
            className: "relative z-10 section-padding w-full",
            children: f.jsxs("div", {
                className: "max-w-6xl mx-auto text-center",
                children: [f.jsx("div", {
                    className: "absolute top-4 right-4",
                    children: f.jsx("button", {
                        onClick: o,
                        className: "modern-button px-6 py-3 rounded-2xl text-sm font-semibold",
                        children: "View Website Old"
                    })
                }), f.jsxs("div", {
                    className: "modern-scale-bounce",
                    children: [f.jsx("div", {
                        className: "mb-20 relative",
                        children: f.jsxs("div", {
                            className: "w-72 h-72 mx-auto rounded-full p-4 modern-glow modern-breath relative group",
                            children: [f.jsx("div", {
                                className: "w-full h-full rounded-full overflow-hidden modern-glass border-4 border-white/30 group-hover:border-white/50 transition-all duration-700 modern-morphing",
                                children: f.jsx("img", {
                                    src: "/lovable-uploads/7c3c4bae-c8ce-4497-8217-a759cb11c627.png",
                                    alt: "TheRealVenom Profile",
                                    className: "w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                                })
                            }), f.jsx("div", {
                                className: "absolute -top-8 -right-8 w-16 h-16 rounded-full flex items-center justify-center modern-glass modern-floating",
                                children: f.jsx(Vu, {
                                    className: "w-8 h-8 text-yellow-400"
                                })
                            }), f.jsx("div", {
                                className: "absolute -bottom-8 -left-8 w-12 h-12 rounded-full flex items-center justify-center modern-glass modern-floating",
                                style: {
                                    animationDelay: "2s"
                                },
                                children: f.jsx(sm, {
                                    className: "w-6 h-6 text-pink-400"
                                })
                            }), f.jsx("div", {
                                className: "absolute top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center modern-glass modern-floating",
                                style: {
                                    animationDelay: "4s"
                                },
                                children: f.jsx(Wn, {
                                    className: "w-4 h-4 text-cyan-400"
                                })
                            })]
                        })
                    }), f.jsx("h1", {
                        className: "text-9xl md:text-[16rem] font-montserrat font-black mb-16 modern-text-gradient leading-none tracking-tighter transform hover:scale-105 transition-all duration-700 cursor-default",
                        children: "Venom"
                    }), f.jsxs("div", {
                        className: "relative mb-12",
                        children: [f.jsx("div", {
                            className: "absolute -top-8 left-1/2 transform -translate-x-1/2",
                            children: f.jsx(Wn, {
                                className: "w-12 h-12 text-purple-400 modern-floating"
                            })
                        }), f.jsx("h2", {
                            className: "text-4xl md:text-6xl font-montserrat font-light mb-4 modern-slide-up",
                            style: {
                                color: "hsl(var(--modern-text-primary))",
                                animationDelay: "0.3s"
                            },
                            children: "Discord Bots & Website Developer"
                        }), f.jsx("div", {
                            className: "w-32 h-1 mx-auto rounded-full",
                            style: {
                                background: "var(--modern-gradient-1)"
                            }
                        })]
                    }), f.jsx("div", {
                        className: "modern-card p-12 mb-24 max-w-5xl mx-auto modern-slide-up modern-interactive",
                        style: {
                            animationDelay: "0.6s"
                        },
                        children: f.jsxs("p", {
                            className: "text-3xl leading-relaxed font-light",
                            style: {
                                color: "hsl(var(--modern-text-secondary))"
                            },
                            children: ["Hello, I am ", f.jsx("span", {
                                className: "modern-text-gradient font-bold text-4xl",
                                children: "kiro"
                            }), ", nicknamed ", f.jsx("span", {
                                className: "modern-text-gradient font-bold text-4xl",
                                children: "_VortexShadow"
                            }), ". My expertise lies in ", f.jsx("span", {
                                className: "modern-text-gradient font-semibold",
                                children: "revolutionary design"
                            }), " and ", f.jsx("span", {
                                className: "modern-text-gradient font-semibold",
                                children: "cutting-edge programming"
                            }), ". I create magic on mobile devices, delivering professional solutions at", f.jsx("span", {
                                className: "modern-text-gradient font-bold",
                                children: " unbeatable prices"
                            }), ". Based in the heart of ", f.jsx("span", {
                                className: "modern-text-gradient font-bold",
                                children: "Egypt"
                            }), "."]
                        })
                    }), f.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-10 justify-center mb-24 modern-slide-up",
                        style: {
                            animationDelay: "0.9s"
                        },
                        children: [f.jsx("button", {
                            onClick: () => i("#servers"),
                            className: "modern-button text-xl font-bold group relative overflow-hidden",
                            children: f.jsxs("span", {
                                className: "relative z-10 flex items-center",
                                children: [f.jsx(Fs, {
                                    className: "w-7 h-7 mr-4 group-hover:rotate-12 transition-transform duration-500"
                                }), "Explore My Servers"]
                            })
                        }), f.jsx("button", {
                            onClick: () => i("#text-decorator"),
                            className: "px-14 py-6 rounded-3xl text-xl font-bold transition-all duration-700 modern-glass border-2 modern-interactive group relative overflow-hidden",
                            style: {
                                borderColor: "hsl(var(--modern-primary))",
                                color: "hsl(var(--modern-primary))"
                            },
                            children: f.jsxs("span", {
                                className: "relative z-10 flex items-center",
                                children: [f.jsx(Wn, {
                                    className: "w-7 h-7 mr-4 group-hover:rotate-12 transition-transform duration-500"
                                }), "Text Magic Studio"]
                            })
                        })]
                    }), f.jsx("div", {
                        className: "flex justify-center modern-slide-up",
                        style: {
                            animationDelay: "1.2s"
                        },
                        children: f.jsx("a", {
                            href: "https://discord.com/users/1240656132578480179",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "group w-24 h-24 modern-glass rounded-3xl flex items-center justify-center transition-all duration-500 hover:scale-125 hover:-translate-y-3 modern-glow",
                            children: f.jsx(lm, {
                                className: "w-10 h-10 text-purple-400 group-hover:text-white transition-all duration-500 group-hover:scale-110"
                            })
                        })
                    })]
                })]
            })
        }), f.jsx("div", {
            className: "absolute top-20 left-10 w-8 h-8 rounded-full modern-floating modern-glow opacity-80",
            style: {
                background: "hsl(var(--modern-primary))",
                animationDelay: "0s",
                boxShadow: "0 0 20px hsl(var(--modern-primary) / 0.6)"
            }
        }), f.jsx("div", {
            className: "absolute top-40 right-20 w-12 h-12 rounded-full modern-floating modern-glow opacity-60",
            style: {
                background: "hsl(var(--modern-accent))",
                animationDelay: "2s",
                boxShadow: "0 0 25px hsl(var(--modern-accent) / 0.6)"
            }
        }), f.jsx("div", {
            className: "absolute bottom-32 left-1/4 w-6 h-6 rounded-full modern-floating modern-glow opacity-70",
            style: {
                background: "hsl(var(--modern-secondary))",
                animationDelay: "4s",
                boxShadow: "0 0 18px hsl(var(--modern-secondary) / 0.6)"
            }
        }), f.jsx("div", {
            className: "absolute bottom-20 right-1/3 w-14 h-14 rounded-full modern-floating modern-glow opacity-50",
            style: {
                background: "hsl(var(--modern-accent-light))",
                animationDelay: "1s",
                boxShadow: "0 0 30px hsl(var(--modern-accent-light) / 0.6)"
            }
        }), f.jsx("div", {
            className: "absolute top-1/3 left-1/5 w-4 h-4 rounded-full modern-floating modern-glow opacity-60",
            style: {
                background: "hsl(var(--modern-primary-light))",
                animationDelay: "3s",
                boxShadow: "0 0 15px hsl(var(--modern-primary-light) / 0.6)"
            }
        }), f.jsx("div", {
            className: "absolute bottom-1/3 right-1/5 w-10 h-10 rounded-full modern-floating modern-glow opacity-55",
            style: {
                background: "hsl(var(--modern-primary-dark))",
                animationDelay: "5s",
                boxShadow: "0 0 22px hsl(var(--modern-primary-dark) / 0.6)"
            }
        })]
    })
}
  , nf = () => {
    const [e,t] = x.useState(!1)
      , n = x.useRef(null);
    return x.useEffect( () => {
        const r = new IntersectionObserver( ([o]) => {
            o.isIntersecting && t(!0)
        }
        ,{
            threshold: .3
        });
        return n.current && r.observe(n.current),
        () => r.disconnect()
    }
    , []),
    f.jsxs("section", {
        id: "about",
        ref: n,
        className: "section-spacing modern-theme relative overflow-hidden modern-pattern-grid",
        style: {
            background: "var(--modern-gradient-secondary)"
        },
        children: [f.jsx("div", {
            className: "absolute top-10 left-10 w-48 h-48 rounded-full modern-floating modern-glow opacity-30",
            style: {
                background: "hsl(var(--modern-primary))",
                filter: "blur(40px)",
                animationDelay: "0s"
            }
        }), f.jsx("div", {
            className: "absolute bottom-10 right-10 w-64 h-64 rounded-full modern-floating modern-glow opacity-25",
            style: {
                background: "hsl(var(--modern-accent))",
                filter: "blur(50px)",
                animationDelay: "3s"
            }
        }), f.jsx("div", {
            className: "section-padding relative z-10",
            children: f.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [f.jsx("div", {
                    className: "text-center mb-20",
                    children: f.jsxs("div", {
                        className: `transition-all duration-1000 ${e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                        children: [f.jsxs("div", {
                            className: "flex items-center justify-center gap-6 mb-8",
                            children: [f.jsx(Vu, {
                                className: "w-12 h-12 modern-floating modern-glow",
                                style: {
                                    color: "hsl(var(--modern-accent))",
                                    animationDelay: "0s"
                                }
                            }), f.jsx("h2", {
                                className: "text-7xl md:text-8xl font-montserrat font-black modern-text-gradient",
                                children: "About Me"
                            }), f.jsx(sm, {
                                className: "w-12 h-12 modern-floating modern-glow",
                                style: {
                                    color: "hsl(var(--modern-secondary))",
                                    animationDelay: "2s"
                                }
                            })]
                        }), f.jsx("div", {
                            className: "w-48 h-2 mx-auto rounded-full modern-glow",
                            style: {
                                background: "var(--modern-gradient-primary)",
                                boxShadow: "var(--modern-shadow-glow)"
                            }
                        })]
                    })
                }), f.jsx("div", {
                    className: "text-center mb-20",
                    children: f.jsx("div", {
                        className: `transition-all duration-1500 ${e ? "opacity-100 scale-100" : "opacity-0 scale-95"}`,
                        children: f.jsxs("div", {
                            className: "relative group inline-block",
                            children: [f.jsx("div", {
                                className: "w-96 h-96 mx-auto rounded-3xl p-3 modern-interactive modern-glow modern-breath",
                                style: {
                                    background: "var(--modern-gradient-surface)",
                                    boxShadow: "var(--modern-shadow-xl), var(--modern-shadow-glow)"
                                },
                                children: f.jsx("img", {
                                    src: "/lovable-uploads/7c3c4bae-c8ce-4497-8217-a759cb11c627.png",
                                    alt: "kiro Front Image",
                                    className: "w-full h-full rounded-3xl object-cover border-4 border-white/20 group-hover:border-white/40 transition-all duration-700 group-hover:scale-105"
                                })
                            }), f.jsx("div", {
                                className: "absolute -top-6 -right-6 w-12 h-12 rounded-full modern-floating modern-glow",
                                style: {
                                    background: "hsl(var(--modern-accent))",
                                    animationDelay: "0s"
                                }
                            }), f.jsx("div", {
                                className: "absolute -bottom-6 -left-6 w-10 h-10 rounded-full modern-floating modern-glow",
                                style: {
                                    background: "hsl(var(--modern-secondary))",
                                    animationDelay: "2s"
                                }
                            })]
                        })
                    })
                }), f.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-16 items-center mb-20",
                    children: [f.jsx("div", {
                        className: `transition-all duration-1200 ${e ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`,
                        children: f.jsxs("div", {
                            className: "relative group",
                            children: [f.jsx("div", {
                                className: "w-96 h-96 mx-auto rounded-3xl bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 p-2 shadow-2xl shadow-cyan-500/25 interactive-card pulse-glow",
                                children: f.jsx("img", {
                                    src: "/lovable-uploads/9238297a-ce55-433f-81d2-f9a9c3e1d451.png",
                                    alt: "kiro Profile",
                                    className: "w-full h-full rounded-3xl object-cover border-2 border-cyan-400/30"
                                })
                            }), f.jsx("div", {
                                className: "absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"
                            }), f.jsx("div", {
                                className: "absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse",
                                style: {
                                    animationDelay: "1s"
                                }
                            })]
                        })
                    }), f.jsxs("div", {
                        className: `space-y-10 transition-all duration-1500 ${e ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`,
                        style: {
                            animationDelay: "0.3s"
                        },
                        children: [f.jsxs("div", {
                            className: "modern-card p-12 modern-interactive",
                            style: {
                                borderColor: "hsl(var(--modern-border-accent))"
                            },
                            children: [f.jsx("h3", {
                                className: "text-5xl font-montserrat font-black mb-8 modern-text-gradient",
                                children: 'kiro "TheRealVenom" - Revolutionary Developer'
                            }), f.jsxs("p", {
                                className: "text-2xl leading-relaxed mb-8",
                                style: {
                                    color: "hsl(var(--modern-text-secondary))"
                                },
                                children: ["Hello, I am ", f.jsx("span", {
                                    className: "modern-text-gradient font-bold text-3xl",
                                    children: "kiro"
                                }), ", nicknamed ", f.jsx("span", {
                                    className: "modern-text-gradient font-bold text-3xl",
                                    children: "_VortexShadow"
                                }), ". My expertise encompasses ", f.jsx("span", {
                                    className: "modern-text-gradient font-semibold",
                                    children: "revolutionary design"
                                }), " and ", f.jsx("span", {
                                    className: "modern-text-gradient font-semibold",
                                    children: "cutting-edge programming"
                                }), ". I create digital magic on mobile devices at", f.jsx("span", {
                                    className: "modern-text-gradient font-bold",
                                    children: " unbeatable prices"
                                }), ". Based in ", f.jsx("span", {
                                    className: "modern-text-gradient font-bold",
                                    children: "Egypt"
                                }), "."]
                            }), f.jsxs("p", {
                                className: "text-xl leading-relaxed",
                                style: {
                                    color: "hsl(var(--modern-text-tertiary))"
                                },
                                children: ["I specialize in crafting ", f.jsx("span", {
                                    className: "modern-text-gradient font-semibold",
                                    children: "Discord bots"
                                }), " and", f.jsx("span", {
                                    className: "modern-text-gradient font-semibold",
                                    children: " futuristic websites"
                                }), " with innovative solutions. My passion drives me to deliver extraordinary work at accessible prices, democratizing professional development for everyone."]
                            })]
                        }), f.jsx("div", {
                            className: "flex flex-wrap gap-4",
                            children: ["Discord Bots", "Web Design", "Mobile Development", "Affordable Pricing", "Egyptian Developer"].map( (r, o) => f.jsx("span", {
                                className: "px-6 py-3 glass-effect text-cyan-300 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/60 hover:bg-cyan-400/10 transition-all duration-500 hover:scale-110 font-semibold text-lg",
                                style: {
                                    animationDelay: `${.5 + o * .1}s`
                                },
                                children: r
                            }, r))
                        })]
                    })]
                }), f.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: [{
                        icon: Hy,
                        title: "Discord Bots",
                        description: "Custom Discord bots with advanced features and seamless integration",
                        color: "from-cyan-500 to-blue-500"
                    }, {
                        icon: Ky,
                        title: "Web Development",
                        description: "Modern, responsive websites built with latest technologies",
                        color: "from-blue-500 to-purple-500"
                    }, {
                        icon: Wy,
                        title: "Mobile Coding",
                        description: "Professional development done entirely on mobile devices",
                        color: "from-purple-500 to-pink-500"
                    }, {
                        icon: Fs,
                        title: "Affordable Prices",
                        description: "High-quality work at the most competitive prices",
                        color: "from-pink-500 to-cyan-500"
                    }].map( (r, o) => f.jsxs("div", {
                        className: `glass-effect rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-700 hover:scale-110 hover:-translate-y-4 interactive-card group ${e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                        style: {
                            animationDelay: `${.6 + o * .2}s`
                        },
                        children: [f.jsx("div", {
                            className: `w-16 h-16 bg-gradient-to-br ${r.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`,
                            children: f.jsx(r.icon, {
                                className: "w-8 h-8 text-white"
                            })
                        }), f.jsx("h4", {
                            className: "text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300",
                            children: r.title
                        }), f.jsx("p", {
                            className: "text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300",
                            children: r.description
                        })]
                    }, r.title))
                })]
            })
        })]
    })
}
  , rf = () => {
    const [e,t] = x.useState(!1)
      , [n,r] = x.useState("")
      , [o,i] = x.useState([])
      , s = x.useRef(null);
    x.useEffect( () => {
        const d = new IntersectionObserver( ([c]) => {
            c.isIntersecting && t(!0)
        }
        ,{
            threshold: .3
        });
        return s.current && d.observe(s.current),
        () => d.disconnect()
    }
    , []);
    const l = d => {
        if (!d.trim())
            return [];
        const c = {
            A: "𝐀",
            B: "𝐁",
            C: "𝐂",
            D: "𝐃",
            E: "𝐄",
            F: "𝐅",
            G: "𝐆",
            H: "𝐇",
            I: "𝐈",
            J: "𝐉",
            K: "𝐊",
            L: "𝐋",
            M: "𝐌",
            N: "𝐍",
            O: "𝐎",
            P: "𝐏",
            Q: "𝐐",
            R: "𝐑",
            S: "𝐒",
            T: "𝐓",
            U: "𝐔",
            V: "𝐕",
            W: "𝐖",
            X: "𝐗",
            Y: "𝐘",
            Z: "𝐙",
            a: "𝐚",
            b: "𝐛",
            c: "𝐜",
            d: "𝐝",
            e: "𝐞",
            f: "𝐟",
            g: "𝐠",
            h: "𝐡",
            i: "𝐢",
            j: "𝐣",
            k: "𝐤",
            l: "𝐥",
            m: "𝐦",
            n: "𝐧",
            o: "𝐨",
            p: "𝐩",
            q: "𝐪",
            r: "𝐫",
            s: "𝐬",
            t: "𝐭",
            u: "𝐮",
            v: "𝐯",
            w: "𝐰",
            x: "𝐱",
            y: "𝐲",
            z: "𝐳"
        }
          , y = {
            A: "𝐴",
            B: "𝐵",
            C: "𝐶",
            D: "𝐷",
            E: "𝐸",
            F: "𝐹",
            G: "𝐺",
            H: "𝐻",
            I: "𝐼",
            J: "𝐽",
            K: "𝐾",
            L: "𝐿",
            M: "𝑀",
            N: "𝑁",
            O: "𝑂",
            P: "𝑃",
            Q: "𝑄",
            R: "𝑅",
            S: "𝑆",
            T: "𝑇",
            U: "𝑈",
            V: "𝑉",
            W: "𝑊",
            X: "𝑋",
            Y: "𝑌",
            Z: "𝑍",
            a: "𝑎",
            b: "𝑏",
            c: "𝑐",
            d: "𝑑",
            e: "𝑒",
            f: "𝑓",
            g: "𝑔",
            h: "ℎ",
            i: "𝑖",
            j: "𝑗",
            k: "𝑘",
            l: "𝑙",
            m: "𝑚",
            n: "𝑛",
            o: "𝑜",
            p: "𝑝",
            q: "𝑞",
            r: "𝑟",
            s: "𝑠",
            t: "𝑡",
            u: "𝑢",
            v: "𝑣",
            w: "𝑤",
            x: "𝑥",
            y: "𝑦",
            z: "𝑧"
        }
          , w = {
            A: "𝑨",
            B: "𝑩",
            C: "𝑪",
            D: "𝑫",
            E: "𝑬",
            F: "𝑭",
            G: "𝑮",
            H: "𝑯",
            I: "𝑰",
            J: "𝑱",
            K: "𝑲",
            L: "𝑳",
            M: "𝑴",
            N: "𝑵",
            O: "𝑶",
            P: "𝑷",
            Q: "𝑸",
            R: "𝑹",
            S: "𝑺",
            T: "𝑻",
            U: "𝑼",
            V: "𝑽",
            W: "𝑾",
            X: "𝑿",
            Y: "𝒀",
            Z: "𝒁",
            a: "𝒂",
            b: "𝒃",
            c: "𝒄",
            d: "𝒅",
            e: "𝒆",
            f: "𝒇",
            g: "𝒈",
            h: "𝒉",
            i: "𝒊",
            j: "𝒋",
            k: "𝒌",
            l: "𝒍",
            m: "𝒎",
            n: "𝒏",
            o: "𝒐",
            p: "𝒑",
            q: "𝒒",
            r: "𝒓",
            s: "𝒔",
            t: "𝒕",
            u: "𝒖",
            v: "𝒗",
            w: "𝒘",
            x: "𝒙",
            y: "𝒚",
            z: "𝒛"
        }
          , g = {
            A: "𝗔",
            B: "𝗕",
            C: "𝗖",
            D: "𝗗",
            E: "𝗘",
            F: "𝗙",
            G: "𝗚",
            H: "𝗛",
            I: "𝗜",
            J: "𝗝",
            K: "𝗞",
            L: "𝗟",
            M: "𝗠",
            N: "𝗡",
            O: "𝗢",
            P: "𝗣",
            Q: "𝗤",
            R: "𝗥",
            S: "𝗦",
            T: "𝗧",
            U: "𝗨",
            V: "𝗩",
            W: "𝗪",
            X: "𝗫",
            Y: "𝗬",
            Z: "𝗭",
            a: "𝗮",
            b: "𝗯",
            c: "𝗰",
            d: "𝗱",
            e: "𝗲",
            f: "𝗳",
            g: "𝗴",
            h: "𝗵",
            i: "𝗶",
            j: "𝗷",
            k: "𝗸",
            l: "𝗹",
            m: "𝗺",
            n: "𝗻",
            o: "𝗼",
            p: "𝗽",
            q: "𝗾",
            r: "𝗿",
            s: "𝘀",
            t: "𝘁",
            u: "𝘂",
            v: "𝘃",
            w: "𝘄",
            x: "𝘅",
            y: "𝘆",
            z: "𝘇"
        }
          , S = {
            A: "𝘈",
            B: "𝘉",
            C: "𝘊",
            D: "𝘋",
            E: "𝘌",
            F: "𝘍",
            G: "𝘎",
            H: "𝘏",
            I: "𝘐",
            J: "𝘑",
            K: "𝘒",
            L: "𝘓",
            M: "𝘔",
            N: "𝘕",
            O: "𝘖",
            P: "𝘗",
            Q: "𝘘",
            R: "𝘙",
            S: "𝘚",
            T: "𝘛",
            U: "𝘜",
            V: "𝘝",
            W: "𝘞",
            X: "𝘟",
            Y: "𝘠",
            Z: "𝘡",
            a: "𝘢",
            b: "𝘣",
            c: "𝘤",
            d: "𝘥",
            e: "𝘦",
            f: "𝘧",
            g: "𝘨",
            h: "𝘩",
            i: "𝘪",
            j: "𝘫",
            k: "𝘬",
            l: "𝘭",
            m: "𝘮",
            n: "𝘯",
            o: "𝘰",
            p: "𝘱",
            q: "𝘲",
            r: "𝘳",
            s: "𝘴",
            t: "𝘵",
            u: "𝘶",
            v: "𝘷",
            w: "𝘸",
            x: "𝘹",
            y: "𝘺",
            z: "𝘻"
        }
          , m = {
            A: "𝙰",
            B: "𝙱",
            C: "𝙲",
            D: "𝙳",
            E: "𝙴",
            F: "𝙵",
            G: "𝙶",
            H: "𝙷",
            I: "𝙸",
            J: "𝙹",
            K: "𝙺",
            L: "𝙻",
            M: "𝙼",
            N: "𝙽",
            O: "𝙾",
            P: "𝙿",
            Q: "𝚀",
            R: "𝚁",
            S: "𝚂",
            T: "𝚃",
            U: "𝚄",
            V: "𝚅",
            W: "𝚆",
            X: "𝚇",
            Y: "𝚈",
            Z: "𝚉",
            a: "𝚊",
            b: "𝚋",
            c: "𝚌",
            d: "𝚍",
            e: "𝚎",
            f: "𝚏",
            g: "𝚐",
            h: "𝚑",
            i: "𝚒",
            j: "𝚓",
            k: "𝚔",
            l: "𝚕",
            m: "𝚖",
            n: "𝚗",
            o: "𝚘",
            p: "𝚙",
            q: "𝚚",
            r: "𝚛",
            s: "𝚜",
            t: "𝚝",
            u: "𝚞",
            v: "𝚟",
            w: "𝚠",
            x: "𝚡",
            y: "𝚢",
            z: "𝚣"
        }
          , h = (b, E) => b.split("").map(k => E[k] || k).join("");
        return [h(d, c), h(d, y), h(d, w), h(d, g), h(d, S), h(d, m)]
    }
      , a = () => {
        n.trim() && i(l(n))
    }
      , u = d => {
        navigator.clipboard.writeText(d)
    }
      , p = ["Bold", "Italic", "Bold Italic", "Sans Bold", "Sans Italic", "Monospace"];
    return f.jsxs("section", {
        id: "text-decorator",
        ref: s,
        className: "section-spacing modern-theme relative overflow-hidden modern-pattern-dots",
        style: {
            background: "var(--modern-gradient-secondary)"
        },
        children: [f.jsx("div", {
            className: "absolute top-10 left-10 w-56 h-56 rounded-full modern-floating modern-glow opacity-20",
            style: {
                background: "hsl(var(--modern-primary))",
                filter: "blur(50px)",
                animationDelay: "1s"
            }
        }), f.jsx("div", {
            className: "absolute bottom-10 right-10 w-72 h-72 rounded-full modern-floating modern-glow opacity-15",
            style: {
                background: "hsl(var(--modern-accent))",
                filter: "blur(60px)",
                animationDelay: "4s"
            }
        }), f.jsx("div", {
            className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full modern-breath opacity-10",
            style: {
                background: "var(--modern-gradient-primary)",
                filter: "blur(80px)"
            }
        }), f.jsx("div", {
            className: "section-padding relative z-10",
            children: f.jsxs("div", {
                className: "max-w-6xl mx-auto",
                children: [f.jsx("div", {
                    className: "text-center mb-20",
                    children: f.jsxs("div", {
                        className: `transition-all duration-1000 ${e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                        children: [f.jsxs("div", {
                            className: "flex items-center justify-center gap-6 mb-8",
                            children: [f.jsx(Wn, {
                                className: "w-12 h-12 modern-floating modern-glow",
                                style: {
                                    color: "hsl(var(--modern-primary))",
                                    animationDelay: "0s"
                                }
                            }), f.jsx("h2", {
                                className: "text-7xl md:text-8xl font-montserrat font-black modern-text-gradient",
                                children: "Text Magic Studio"
                            }), f.jsx(Nd, {
                                className: "w-12 h-12 modern-floating modern-glow",
                                style: {
                                    color: "hsl(var(--modern-accent))",
                                    animationDelay: "2s"
                                }
                            })]
                        }), f.jsx("div", {
                            className: "w-48 h-2 mx-auto rounded-full modern-glow",
                            style: {
                                background: "var(--modern-gradient-primary)",
                                boxShadow: "var(--modern-shadow-glow)"
                            }
                        }), f.jsxs("p", {
                            className: "text-2xl mt-10 max-w-4xl mx-auto leading-relaxed",
                            style: {
                                color: "hsl(var(--modern-text-secondary))"
                            },
                            children: ["Transform your text with ", f.jsx("span", {
                                className: "modern-text-gradient font-bold",
                                children: "revolutionary decorative styles"
                            }), " and", f.jsx("span", {
                                className: "modern-text-gradient font-bold",
                                children: " Unicode enchantment"
                            })]
                        })]
                    })
                }), f.jsxs("div", {
                    className: `${e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-1000`,
                    children: [f.jsx("div", {
                        className: "modern-card p-12 mb-16 modern-interactive",
                        children: f.jsxs("div", {
                            className: "flex flex-col md:flex-row gap-6",
                            children: [f.jsx("input", {
                                type: "text",
                                value: n,
                                onChange: d => r(d.target.value),
                                placeholder: "Enter your text here to see the magic...",
                                className: "flex-1 px-6 py-4 glass-effect border border-cyan-400/30 rounded-2xl text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 text-lg font-medium backdrop-blur-xl"
                            }), f.jsxs("button", {
                                onClick: a,
                                className: "btn-primary flex items-center gap-3 text-lg font-semibold px-8 py-4",
                                children: [f.jsx(Nd, {
                                    className: "w-5 h-5"
                                }), "Transform Text"]
                            })]
                        })
                    }), o.length > 0 && f.jsx("div", {
                        className: "space-y-6 animate-fade-in-up",
                        children: o.map( (d, c) => f.jsx("div", {
                            className: "glass-effect rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 interactive-card group",
                            style: {
                                animationDelay: `${c * .1}s`
                            },
                            children: f.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [f.jsxs("div", {
                                    className: "flex-1 mr-6",
                                    children: [f.jsxs("div", {
                                        className: "flex items-center gap-3 mb-3",
                                        children: [f.jsx(Vu, {
                                            className: "w-4 h-4 text-cyan-400"
                                        }), f.jsx("span", {
                                            className: "text-cyan-400 text-sm font-bold uppercase tracking-wider",
                                            children: p[c]
                                        })]
                                    }), f.jsx("div", {
                                        className: "text-white text-xl font-medium break-all group-hover:text-cyan-100 transition-colors duration-300 leading-relaxed",
                                        children: d
                                    })]
                                }), f.jsx("button", {
                                    onClick: () => u(d),
                                    className: "p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-12 border border-cyan-400/20 hover:border-cyan-400/40 group",
                                    title: "Copy to clipboard",
                                    children: f.jsx(Qy, {
                                        className: "w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                                    })
                                })]
                            })
                        }, c))
                    }), o.length === 0 && n.trim() === "" && f.jsx("div", {
                        className: "text-center py-20",
                        children: f.jsxs("div", {
                            className: "glass-effect rounded-3xl p-12 border border-cyan-400/20 max-w-2xl mx-auto",
                            children: [f.jsx(Wn, {
                                className: "w-16 h-16 text-cyan-400 mx-auto mb-6 animate-pulse"
                            }), f.jsx("h3", {
                                className: "text-2xl font-montserrat font-bold text-white mb-4",
                                children: "Ready to Transform?"
                            }), f.jsx("p", {
                                className: "text-slate-300 text-lg leading-relaxed",
                                children: "Enter any text above and watch it transform into beautiful decorative styles using Unicode magic!"
                            })]
                        })
                    })]
                })]
            })
        })]
    })
}
  , of = () => {
    const [e,t] = x.useState(!1)
      , [n,r] = x.useState(!1)
      , [o,i] = x.useState(!1)
      , s = x.useRef(null);
    return x.useEffect( () => {
        const u = new IntersectionObserver( ([p]) => {
            p.isIntersecting && t(!0)
        }
        ,{
            threshold: .3
        });
        return s.current && u.observe(s.current),
        () => u.disconnect()
    }
    , []),
    f.jsxs("section", {
        id: "servers",
        ref: s,
        className: "section-spacing modern-theme relative overflow-hidden modern-pattern-grid",
        style: {
            background: "var(--modern-gradient-secondary)"
        },
        children: [f.jsx("div", {
            className: "absolute top-10 left-10 w-60 h-60 rounded-full modern-floating modern-glow opacity-25",
            style: {
                background: "hsl(var(--modern-primary))",
                filter: "blur(45px)",
                animationDelay: "2s"
            }
        }), f.jsx("div", {
            className: "absolute bottom-10 right-10 w-80 h-80 rounded-full modern-floating modern-glow opacity-20",
            style: {
                background: "hsl(var(--modern-accent))",
                filter: "blur(55px)",
                animationDelay: "5s"
            }
        }), f.jsx("div", {
            className: "absolute top-1/2 left-1/3 w-96 h-96 rounded-full modern-breath opacity-15",
            style: {
                background: "var(--modern-gradient-primary)",
                filter: "blur(70px)"
            }
        }), f.jsx("div", {
            className: "section-padding relative z-10",
            children: f.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [f.jsx("div", {
                    className: "text-center mb-20",
                    children: f.jsxs("div", {
                        className: `transition-all duration-1000 ${e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                        children: [f.jsxs("div", {
                            className: "flex items-center justify-center gap-6 mb-8",
                            children: [f.jsx(Ed, {
                                className: "w-12 h-12 modern-floating modern-glow",
                                style: {
                                    color: "hsl(var(--modern-accent))",
                                    animationDelay: "0s"
                                }
                            }), f.jsx("h2", {
                                className: "text-7xl md:text-8xl font-montserrat font-black modern-text-gradient",
                                children: "My Elite Servers"
                            }), f.jsx(Rl, {
                                className: "w-12 h-12 modern-floating modern-glow",
                                style: {
                                    color: "hsl(var(--modern-primary))",
                                    animationDelay: "2s"
                                }
                            })]
                        }), f.jsx("div", {
                            className: "w-48 h-2 mx-auto rounded-full modern-glow",
                            style: {
                                background: "var(--modern-gradient-primary)",
                                boxShadow: "var(--modern-shadow-glow)"
                            }
                        }), f.jsxs("p", {
                            className: "text-2xl mt-10 max-w-4xl mx-auto leading-relaxed",
                            style: {
                                color: "hsl(var(--modern-text-secondary))"
                            },
                            children: ["Discover the ", f.jsx("span", {
                                className: "modern-text-gradient font-bold",
                                children: "Discord empires"
                            }), " I own and manage with", f.jsx("span", {
                                className: "modern-text-gradient font-bold",
                                children: " unmatched passion and dedication"
                            })]
                        })]
                    })
                }), f.jsx("div", {
                    className: `${e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-1000`,
                    children: f.jsxs("div", {
                        className: "grid lg:grid-cols-2 gap-12",
                        children: [f.jsxs("div", {
                            className: "modern-card p-12 modern-interactive group",
                            children: [f.jsxs("div", {
                                className: "text-center mb-10",
                                children: [f.jsxs("div", {
                                    className: "relative mb-8",
                                    children: [f.jsx("div", {
                                        className: "w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-cyan-500/30",
                                        children: f.jsx(Fs, {
                                            className: "w-12 h-12 text-white"
                                        })
                                    }), f.jsx("div", {
                                        className: "absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full animate-pulse"
                                    })]
                                }), f.jsx("h3", {
                                    className: "text-4xl font-montserrat font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300",
                                    children: "Aetheria Network"
                                }), f.jsx("p", {
                                    className: "text-cyan-400 text-xl font-semibold",
                                    children: "Egyptian Network Server"
                                }), f.jsxs("div", {
                                    className: "flex items-center justify-center gap-2 mt-4 text-slate-300",
                                    children: [f.jsx(Ml, {
                                        className: "w-5 h-5"
                                    }), f.jsx("span", {
                                        className: "text-lg",
                                        children: "Premium Network Server"
                                    })]
                                })]
                            }), f.jsxs("div", {
                                className: "flex flex-col gap-5 justify-center mb-10",
                                children: [f.jsxs("button", {
                                    onClick: () => r(!n),
                                    className: "btn-primary flex items-center justify-center gap-3 text-lg font-semibold",
                                    children: [f.jsx(kd, {
                                        className: "w-5 h-5"
                                    }), n ? "Hide Details" : "Show Details"]
                                }), f.jsxs("a", {
                                    href: "https://discord.gg/uRt37RNh7Q",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl transition-all duration-500 hover:bg-cyan-400 hover:text-slate-900 hover:scale-110 hover:-translate-y-1 flex items-center justify-center gap-3 text-lg hover:shadow-2xl hover:shadow-cyan-400/30",
                                    children: [f.jsx(Cd, {
                                        className: "w-5 h-5"
                                    }), "Join Server"]
                                })]
                            }), n && f.jsx("div", {
                                className: "glass-effect rounded-2xl p-8 border border-cyan-400/30 animate-fade-in-up",
                                children: f.jsx("pre", {
                                    className: "text-slate-200 whitespace-pre-wrap text-base leading-relaxed font-mono hover:text-white transition-colors duration-300",
                                    children: ``
                                })
                            })]
                        }), f.jsxs("div", {
                            className: "modern-card p-12 modern-interactive group",
                            children: [f.jsxs("div", {
                                className: "text-center mb-10",
                                children: [f.jsxs("div", {
                                    className: "relative mb-8",
                                    children: [f.jsx("div", {
                                        className: "w-24 h-24 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-purple-500/30",
                                        children: f.jsx(Ml, {
                                            className: "w-12 h-12 text-white"
                                        })
                                    }), f.jsx("div", {
                                        className: "absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full animate-pulse",
                                        style: {
                                            animationDelay: "0.5s"
                                        }
                                    })]
                                }), f.jsx("h3", {
                                    className: "text-4xl font-montserrat font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300",
                                    children: "Shadow"
                                }), f.jsx("p", {
                                    className: "text-cyan-400 text-xl font-semibold",
                                    children: "Arabic Server"
                                }), f.jsxs("div", {
                                    className: "flex items-center justify-center gap-2 mt-4 text-slate-300",
                                    children: [f.jsx(Rl, {
                                        className: "w-5 h-5"
                                    }), f.jsx("span", {
                                        className: "text-lg",
                                        children: "Premium Server"
                                    })]
                                })]
                            }), f.jsxs("div", {
                                className: "flex flex-col gap-5 justify-center mb-10",
                                children: [f.jsxs("button", {
                                    onClick: () => i(!o),
                                    className: "btn-primary flex items-center justify-center gap-3 text-lg font-semibold",
                                    children: [f.jsx(kd, {
                                        className: "w-5 h-5"
                                    }), o ? "Hide Details" : "Show Details"]
                                }), f.jsxs("a", {
                                    href: "https://discord.gg/QJMqxNVe57",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl transition-all duration-500 hover:bg-cyan-400 hover:text-slate-900 hover:scale-110 hover:-translate-y-1 flex items-center justify-center gap-3 text-lg hover:shadow-2xl hover:shadow-cyan-400/30",
                                    children: [f.jsx(Cd, {
                                        className: "w-5 h-5"
                                    }), "Join Server"]
                                })]
                            }), o && f.jsx("div", {
                                className: "glass-effect rounded-2xl p-8 border border-cyan-400/30 animate-fade-in-up",
                                children: f.jsx("p", {
                                    className: "text-slate-200 text-base leading-relaxed hover:text-white transition-colors duration-300",
                                    children: ``
                                })
                            })]
                        })]
                    })
                }), f.jsx("div", {
                    className: "mt-20 grid md:grid-cols-3 gap-8",
                    children: [{
                        icon: Rl,
                        title: "Active Servers",
                        value: "2",
                        description: "Professionally managed Discord communities"
                    }, {
                        icon: Ml,
                        title: "Community Members",
                        value: "300+",
                        description: "Active users across all platforms"
                    }, {
                        icon: Ed,
                        title: "Years Experience",
                        value: "3+",
                        description: "Building and managing communities"
                    }].map( (u, p) => f.jsxs("div", {
                        className: `glass-effect rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-700 interactive-card group text-center ${e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                        style: {
                            animationDelay: `${1 + p * .2}s`
                        },
                        children: [f.jsx("div", {
                            className: "w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 border border-cyan-400/20",
                            children: f.jsx(u.icon, {
                                className: "w-8 h-8 text-cyan-400"
                            })
                        }), f.jsx("h4", {
                            className: "text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300",
                            children: u.value
                        }), f.jsx("h5", {
                            className: "text-xl font-semibold text-cyan-400 mb-3",
                            children: u.title
                        }), f.jsx("p", {
                            className: "text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300",
                            children: u.description
                        })]
                    }, u.title))
                })]
            })
        })]
    })
}
  , sf = () => {
    const e = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    ;
    return f.jsx("footer", {
        className: "modern-theme border-t-2",
        style: {
            background: "var(--modern-gradient-secondary)",
            borderColor: "hsl(var(--modern-border-accent))"
        },
        children: f.jsx("div", {
            className: "section-padding py-12",
            children: f.jsxs("div", {
                className: "max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center",
                children: [f.jsx("div", {
                    className: "text-2xl font-semibold mb-6 md:mb-0 modern-text-gradient",
                    children: "© 2026 _VortexShadow. All rights reserved."
                }), f.jsxs("div", {
                    className: "flex items-center gap-8",
                    children: [f.jsx("a", {
                        href: "#",
                        className: "text-xl font-medium transition-all duration-500 modern-interactive",
                        style: {
                            color: "hsl(var(--modern-text-secondary))"
                        },
                        children: "Privacy Policy"
                    }), f.jsx("a", {
                        href: "#",
                        className: "text-xl font-medium transition-all duration-500 modern-interactive",
                        style: {
                            color: "hsl(var(--modern-text-secondary))"
                        },
                        children: "Terms of Service"
                    }), f.jsx("button", {
                        onClick: e,
                        className: "modern-button text-lg font-bold px-8 py-4",
                        children: "Back to Top ↑"
                    })]
                })]
            })
        })
    })
}
  , Q2 = () => {
    const {isOldTheme: e} = u0();
    return e ? f.jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-900 via-black to-blue-900",
        children: [f.jsx(tf, {}), f.jsx(H2, {}), f.jsx(nf, {}), f.jsx(rf, {}), f.jsx(of, {}), f.jsx(sf, {})]
    }) : f.jsxs("div", {
        className: "min-h-screen modern-theme",
        children: [f.jsx("link", {
            rel: "stylesheet",
            href: "/src/styles/modern-theme.css"
        }), f.jsx(tf, {}), f.jsx(W2, {}), f.jsx(nf, {}), f.jsx(rf, {}), f.jsx(of, {}), f.jsx(sf, {})]
    })
}
  , K2 = new t2
  , Y2 = () => f.jsx(r2, {
    client: K2,
    children: f.jsx(Ow, {
        children: f.jsxs(V2, {
            children: [f.jsx(Rx, {}), f.jsx(i1, {}), f.jsx(U2, {
                children: f.jsx(F2, {
                    children: f.jsx(l0, {
                        path: "/",
                        element: f.jsx(Q2, {})
                    })
                })
            })]
        })
    })
});
jh(document.getElementById("root")).render(f.jsx(Y2, {}));





