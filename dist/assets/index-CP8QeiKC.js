var j0=Object.defineProperty;var Q0=(s,e,n)=>e in s?j0(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var Je=(s,e,n)=>Q0(s,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Cm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var _c={exports:{}},La={},vc={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function J0(){if(Mp)return _t;Mp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.iterator;function g(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function v(L,te,Se){this.props=L,this.context=te,this.refs=C,this.updater=Se||y}v.prototype.isReactComponent={},v.prototype.setState=function(L,te){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,te,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function x(){}x.prototype=v.prototype;function b(L,te,Se){this.props=L,this.context=te,this.refs=C,this.updater=Se||y}var F=b.prototype=new x;F.constructor=b,T(F,v.prototype),F.isPureReactComponent=!0;var P=Array.isArray,U=Object.prototype.hasOwnProperty,D={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function R(L,te,Se){var ee,de={},Me=null,Ue=null;if(te!=null)for(ee in te.ref!==void 0&&(Ue=te.ref),te.key!==void 0&&(Me=""+te.key),te)U.call(te,ee)&&!M.hasOwnProperty(ee)&&(de[ee]=te[ee]);var _e=arguments.length-2;if(_e===1)de.children=Se;else if(1<_e){for(var ke=Array(_e),vt=0;vt<_e;vt++)ke[vt]=arguments[vt+2];de.children=ke}if(L&&L.defaultProps)for(ee in _e=L.defaultProps,_e)de[ee]===void 0&&(de[ee]=_e[ee]);return{$$typeof:s,type:L,key:Me,ref:Ue,props:de,_owner:D.current}}function W(L,te){return{$$typeof:s,type:L.type,key:te,ref:L.ref,props:L.props,_owner:L._owner}}function O(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function V(L){var te={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Se){return te[Se]})}var $=/\/+/g;function se(L,te){return typeof L=="object"&&L!==null&&L.key!=null?V(""+L.key):te.toString(36)}function k(L,te,Se,ee,de){var Me=typeof L;(Me==="undefined"||Me==="boolean")&&(L=null);var Ue=!1;if(L===null)Ue=!0;else switch(Me){case"string":case"number":Ue=!0;break;case"object":switch(L.$$typeof){case s:case e:Ue=!0}}if(Ue)return Ue=L,de=de(Ue),L=ee===""?"."+se(Ue,0):ee,P(de)?(Se="",L!=null&&(Se=L.replace($,"$&/")+"/"),k(de,te,Se,"",function(vt){return vt})):de!=null&&(O(de)&&(de=W(de,Se+(!de.key||Ue&&Ue.key===de.key?"":(""+de.key).replace($,"$&/")+"/")+L)),te.push(de)),1;if(Ue=0,ee=ee===""?".":ee+":",P(L))for(var _e=0;_e<L.length;_e++){Me=L[_e];var ke=ee+se(Me,_e);Ue+=k(Me,te,Se,ke,de)}else if(ke=g(L),typeof ke=="function")for(L=ke.call(L),_e=0;!(Me=L.next()).done;)Me=Me.value,ke=ee+se(Me,_e++),Ue+=k(Me,te,Se,ke,de);else if(Me==="object")throw te=String(L),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return Ue}function Z(L,te,Se){if(L==null)return L;var ee=[],de=0;return k(L,ee,"","",function(Me){return te.call(Se,Me,de++)}),ee}function ae(L){if(L._status===-1){var te=L._result;te=te(),te.then(function(Se){(L._status===0||L._status===-1)&&(L._status=1,L._result=Se)},function(Se){(L._status===0||L._status===-1)&&(L._status=2,L._result=Se)}),L._status===-1&&(L._status=0,L._result=te)}if(L._status===1)return L._result.default;throw L._result}var X={current:null},j={transition:null},H={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:j,ReactCurrentOwner:D};function K(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:Z,forEach:function(L,te,Se){Z(L,function(){te.apply(this,arguments)},Se)},count:function(L){var te=0;return Z(L,function(){te++}),te},toArray:function(L){return Z(L,function(te){return te})||[]},only:function(L){if(!O(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},_t.Component=v,_t.Fragment=n,_t.Profiler=o,_t.PureComponent=b,_t.StrictMode=r,_t.Suspense=p,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,_t.act=K,_t.cloneElement=function(L,te,Se){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var ee=T({},L.props),de=L.key,Me=L.ref,Ue=L._owner;if(te!=null){if(te.ref!==void 0&&(Me=te.ref,Ue=D.current),te.key!==void 0&&(de=""+te.key),L.type&&L.type.defaultProps)var _e=L.type.defaultProps;for(ke in te)U.call(te,ke)&&!M.hasOwnProperty(ke)&&(ee[ke]=te[ke]===void 0&&_e!==void 0?_e[ke]:te[ke])}var ke=arguments.length-2;if(ke===1)ee.children=Se;else if(1<ke){_e=Array(ke);for(var vt=0;vt<ke;vt++)_e[vt]=arguments[vt+2];ee.children=_e}return{$$typeof:s,type:L.type,key:de,ref:Me,props:ee,_owner:Ue}},_t.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},_t.createElement=R,_t.createFactory=function(L){var te=R.bind(null,L);return te.type=L,te},_t.createRef=function(){return{current:null}},_t.forwardRef=function(L){return{$$typeof:d,render:L}},_t.isValidElement=O,_t.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:ae}},_t.memo=function(L,te){return{$$typeof:m,type:L,compare:te===void 0?null:te}},_t.startTransition=function(L){var te=j.transition;j.transition={};try{L()}finally{j.transition=te}},_t.unstable_act=K,_t.useCallback=function(L,te){return X.current.useCallback(L,te)},_t.useContext=function(L){return X.current.useContext(L)},_t.useDebugValue=function(){},_t.useDeferredValue=function(L){return X.current.useDeferredValue(L)},_t.useEffect=function(L,te){return X.current.useEffect(L,te)},_t.useId=function(){return X.current.useId()},_t.useImperativeHandle=function(L,te,Se){return X.current.useImperativeHandle(L,te,Se)},_t.useInsertionEffect=function(L,te){return X.current.useInsertionEffect(L,te)},_t.useLayoutEffect=function(L,te){return X.current.useLayoutEffect(L,te)},_t.useMemo=function(L,te){return X.current.useMemo(L,te)},_t.useReducer=function(L,te,Se){return X.current.useReducer(L,te,Se)},_t.useRef=function(L){return X.current.useRef(L)},_t.useState=function(L){return X.current.useState(L)},_t.useSyncExternalStore=function(L,te,Se){return X.current.useSyncExternalStore(L,te,Se)},_t.useTransition=function(){return X.current.useTransition()},_t.version="18.3.1",_t}var yp;function zf(){return yp||(yp=1,vc.exports=J0()),vc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function e_(){if(Ep)return La;Ep=1;var s=zf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,m){var _,S={},g=null,y=null;m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(y=p.ref);for(_ in p)r.call(p,_)&&!l.hasOwnProperty(_)&&(S[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)S[_]===void 0&&(S[_]=p[_]);return{$$typeof:e,type:d,key:g,ref:y,props:S,_owner:o.current}}return La.Fragment=n,La.jsx=c,La.jsxs=c,La}var Tp;function t_(){return Tp||(Tp=1,_c.exports=e_()),_c.exports}var Q=t_(),st=zf();const n_=Cm(st);var Jo={},xc={exports:{}},Vn={},Sc={exports:{}},Mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function i_(){return wp||(wp=1,(function(s){function e(j,H){var K=j.length;j.push(H);e:for(;0<K;){var L=K-1>>>1,te=j[L];if(0<o(te,H))j[L]=H,j[K]=te,K=L;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var H=j[0],K=j.pop();if(K!==H){j[0]=K;e:for(var L=0,te=j.length,Se=te>>>1;L<Se;){var ee=2*(L+1)-1,de=j[ee],Me=ee+1,Ue=j[Me];if(0>o(de,K))Me<te&&0>o(Ue,de)?(j[L]=Ue,j[Me]=K,L=Me):(j[L]=de,j[ee]=K,L=ee);else if(Me<te&&0>o(Ue,K))j[L]=Ue,j[Me]=K,L=Me;else break e}}return H}function o(j,H){var K=j.sortIndex-H.sortIndex;return K!==0?K:j.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var p=[],m=[],_=1,S=null,g=3,y=!1,T=!1,C=!1,v=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(j){for(var H=n(m);H!==null;){if(H.callback===null)r(m);else if(H.startTime<=j)r(m),H.sortIndex=H.expirationTime,e(p,H);else break;H=n(m)}}function P(j){if(C=!1,F(j),!T)if(n(p)!==null)T=!0,ae(U);else{var H=n(m);H!==null&&X(P,H.startTime-j)}}function U(j,H){T=!1,C&&(C=!1,x(R),R=-1),y=!0;var K=g;try{for(F(H),S=n(p);S!==null&&(!(S.expirationTime>H)||j&&!V());){var L=S.callback;if(typeof L=="function"){S.callback=null,g=S.priorityLevel;var te=L(S.expirationTime<=H);H=s.unstable_now(),typeof te=="function"?S.callback=te:S===n(p)&&r(p),F(H)}else r(p);S=n(p)}if(S!==null)var Se=!0;else{var ee=n(m);ee!==null&&X(P,ee.startTime-H),Se=!1}return Se}finally{S=null,g=K,y=!1}}var D=!1,M=null,R=-1,W=5,O=-1;function V(){return!(s.unstable_now()-O<W)}function $(){if(M!==null){var j=s.unstable_now();O=j;var H=!0;try{H=M(!0,j)}finally{H?se():(D=!1,M=null)}}else D=!1}var se;if(typeof b=="function")se=function(){b($)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,Z=k.port2;k.port1.onmessage=$,se=function(){Z.postMessage(null)}}else se=function(){v($,0)};function ae(j){M=j,D||(D=!0,se())}function X(j,H){R=v(function(){j(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_continueExecution=function(){T||y||(T=!0,ae(U))},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(j){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var K=g;g=H;try{return j()}finally{g=K}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(j,H){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var K=g;g=j;try{return H()}finally{g=K}},s.unstable_scheduleCallback=function(j,H,K){var L=s.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?L+K:L):K=L,j){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=K+te,j={id:_++,callback:H,priorityLevel:j,startTime:K,expirationTime:te,sortIndex:-1},K>L?(j.sortIndex=K,e(m,j),n(p)===null&&j===n(m)&&(C?(x(R),R=-1):C=!0,X(P,K-L))):(j.sortIndex=te,e(p,j),T||y||(T=!0,ae(U))),j},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(j){var H=g;return function(){var K=g;g=H;try{return j.apply(this,arguments)}finally{g=K}}}})(Mc)),Mc}var Ap;function r_(){return Ap||(Ap=1,Sc.exports=i_()),Sc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function s_(){if(Rp)return Vn;Rp=1;var s=zf(),e=r_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},S={};function g(t){return p.call(S,t)?!0:p.call(_,t)?!1:m.test(t)?S[t]=!0:(_[t]=!0,!1)}function y(t,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,a,u){if(i===null||typeof i>"u"||y(t,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,a,u,f,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function b(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(x,b);v[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(x,b);v[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(x,b);v[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function F(t,i,a,u){var f=v.hasOwnProperty(i)?v[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,f,u)&&(a=null),u||f===null?g(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,u=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,u?t.setAttributeNS(u,i,a):t.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),D=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),V=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),j=Symbol.iterator;function H(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var K=Object.assign,L;function te(t){if(L===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+t}var Se=!1;function ee(t,i){if(!t||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var u=ue}Reflect.construct(t,[],i)}else{try{i.call()}catch(ue){u=ue}t.call(i.prototype)}else{try{throw Error()}catch(ue){u=ue}t()}}catch(ue){if(ue&&u&&typeof ue.stack=="string"){for(var f=ue.stack.split(`
`),h=u.stack.split(`
`),E=f.length-1,I=h.length-1;1<=E&&0<=I&&f[E]!==h[I];)I--;for(;1<=E&&0<=I;E--,I--)if(f[E]!==h[I]){if(E!==1||I!==1)do if(E--,I--,0>I||f[E]!==h[I]){var G=`
`+f[E].replace(" at new "," at ");return t.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",t.displayName)),G}while(1<=E&&0<=I);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?te(t):""}function de(t){switch(t.tag){case 5:return te(t.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return t=ee(t.type,!1),t;case 11:return t=ee(t.type.render,!1),t;case 1:return t=ee(t.type,!0),t;default:return""}}function Me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case D:return"Portal";case W:return"Profiler";case R:return"StrictMode";case se:return"Suspense";case k:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case O:return(t._context.displayName||"Context")+".Provider";case $:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Z:return i=t.displayName||null,i!==null?i:Me(t.type)||"Memo";case ae:i=t._payload,t=t._init;try{return Me(t(i))}catch{}}return null}function Ue(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ke(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function vt(t){var i=ke(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,h=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function tt(t){t._valueTracker||(t._valueTracker=vt(t))}function lt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return t&&(u=ke(t)?t.checked?"true":"false":t.value),t=u,t!==a?(i.setValue(t),!0):!1}function je(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nt(t,i){var a=i.checked;return K({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Dt(t,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=_e(i.value!=null?i.value:a),t._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Bt(t,i){i=i.checked,i!=null&&F(t,"checked",i,!1)}function Jt(t,i){Bt(t,i);var a=_e(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?An(t,i.type,a):i.hasOwnProperty("defaultValue")&&An(t,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ft(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function An(t,i,a){(i!=="number"||je(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var kt=Array.isArray;function sn(t,i,a,u){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&u&&(t[a].defaultSelected=!0)}else{for(a=""+_e(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,u&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function qt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return K({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function en(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(kt(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:_e(a)}}function q(t,i){var a=_e(i.value),u=_e(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),u!=null&&(t.defaultValue=""+u)}function $t(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function At(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tt(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?At(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Le,Vt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,u,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Le=Le||document.createElement("div"),Le.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Le.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function et(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var at={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},N=["Webkit","ms","Moz","O"];Object.keys(at).forEach(function(t){N.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),at[i]=at[t]})});function w(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||at.hasOwnProperty(t)&&at[t]?(""+i).trim():i+"px"}function ie(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,f=w(a,i[a],u);a==="float"&&(a="cssFloat"),u?t.setProperty(a,f):t[a]=f}}var Ee=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ge(t,i){if(i){if(Ee[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ce(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ne=null;function he(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pe=null,Ae=null,B=null;function me(t){if(t=ga(t)){if(typeof pe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=po(i),pe(t.stateNode,t.type,i))}}function fe(t){Ae?B?B.push(t):B=[t]:Ae=t}function Pe(){if(Ae){var t=Ae,i=B;if(B=Ae=null,me(t),i)for(t=0;t<i.length;t++)me(i[t])}}function we(t,i){return t(i)}function be(){}var $e=!1;function ht(t,i,a){if($e)return t(i,a);$e=!0;try{return we(t,i,a)}finally{$e=!1,(Ae!==null||B!==null)&&(be(),Pe())}}function ye(t,i){var a=t.stateNode;if(a===null)return null;var u=po(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Qe=!1;if(d)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){Qe=!0}}),window.addEventListener("test",ut,ut),window.removeEventListener("test",ut,ut)}catch{Qe=!1}function Oe(t,i,a,u,f,h,E,I,G){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(a,ue)}catch(xe){this.onError(xe)}}var Mt=!1,Kt=null,Yn=!1,is=null,Zs={onError:function(t){Mt=!0,Kt=t}};function Hl(t,i,a,u,f,h,E,I,G){Mt=!1,Kt=null,Oe.apply(Zs,arguments)}function $a(t,i,a,u,f,h,E,I,G){if(Hl.apply(this,arguments),Mt){if(Mt){var ue=Kt;Mt=!1,Kt=null}else throw Error(n(198));Yn||(Yn=!0,is=ue)}}function Ti(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function wi(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function rs(t){if(Ti(t)!==t)throw Error(n(188))}function Ka(t){var i=t.alternate;if(!i){if(i=Ti(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,u=i;;){var f=a.return;if(f===null)break;var h=f.alternate;if(h===null){if(u=f.return,u!==null){a=u;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===a)return rs(f),t;if(h===u)return rs(f),i;h=h.sibling}throw Error(n(188))}if(a.return!==u.return)a=f,u=h;else{for(var E=!1,I=f.child;I;){if(I===a){E=!0,a=f,u=h;break}if(I===u){E=!0,u=f,a=h;break}I=I.sibling}if(!E){for(I=h.child;I;){if(I===a){E=!0,a=h,u=f;break}if(I===u){E=!0,u=h,a=f;break}I=I.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==u)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function js(t){return t=Ka(t),t!==null?Nr(t):null}function Nr(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Nr(t);if(i!==null)return i;t=t.sibling}return null}var Qs=e.unstable_scheduleCallback,Js=e.unstable_cancelCallback,Dr=e.unstable_shouldYield,Gl=e.unstable_requestPaint,Wt=e.unstable_now,Za=e.unstable_getCurrentPriorityLevel,ea=e.unstable_ImmediatePriority,ja=e.unstable_UserBlockingPriority,ss=e.unstable_NormalPriority,Qa=e.unstable_LowPriority,A=e.unstable_IdlePriority,z=null,oe=null;function ne(t){if(oe&&typeof oe.onCommitFiberRoot=="function")try{oe.onCommitFiberRoot(z,t,void 0,(t.current.flags&128)===128)}catch{}}var J=Math.clz32?Math.clz32:De,Ie=Math.log,He=Math.LN2;function De(t){return t>>>=0,t===0?32:31-(Ie(t)/He|0)|0}var Fe=64,Ve=4194304;function ot(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pt(t,i){var a=t.pendingLanes;if(a===0)return 0;var u=0,f=t.suspendedLanes,h=t.pingedLanes,E=a&268435455;if(E!==0){var I=E&~f;I!==0?u=ot(I):(h&=E,h!==0&&(u=ot(h)))}else E=a&~f,E!==0?u=ot(E):h!==0&&(u=ot(h));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)a=31-J(i),f=1<<a,u|=t[a],i&=~f;return u}function We(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(t,i){for(var a=t.suspendedLanes,u=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-J(h),I=1<<E,G=f[E];G===-1?((I&a)===0||(I&u)!==0)&&(f[E]=We(I,i)):G<=i&&(t.expiredLanes|=I),h&=~I}}function Xt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function It(){var t=Fe;return Fe<<=1,(Fe&4194240)===0&&(Fe=64),t}function bt(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function tn(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-J(i),t[i]=a}function Xe(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-J(a),h=1<<f;i[f]=0,u[f]=-1,t[f]=-1,a&=~h}}function fn(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var u=31-J(a),f=1<<u;f&i|t[u]&i&&(t[u]|=i),a&=~f}}var Ke=0;function Ai(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var dn,rr,ci,Ri,St,an=!1,Rn=[],Rt=null,Ot=null,_n=null,sr=new Map,ta=new Map,ar=[],xg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rd(t,i){switch(t){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":sr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(i.pointerId)}}function na(t,i,a,u,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:h,targetContainers:[f]},i!==null&&(i=ga(i),i!==null&&rr(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Sg(t,i,a,u,f){switch(i){case"focusin":return Rt=na(Rt,t,i,a,u,f),!0;case"dragenter":return Ot=na(Ot,t,i,a,u,f),!0;case"mouseover":return _n=na(_n,t,i,a,u,f),!0;case"pointerover":var h=f.pointerId;return sr.set(h,na(sr.get(h)||null,t,i,a,u,f)),!0;case"gotpointercapture":return h=f.pointerId,ta.set(h,na(ta.get(h)||null,t,i,a,u,f)),!0}return!1}function sd(t){var i=Ir(t.target);if(i!==null){var a=Ti(i);if(a!==null){if(i=a.tag,i===13){if(i=wi(a),i!==null){t.blockedOn=i,St(t.priority,function(){ci(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ja(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Wl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var u=new a.constructor(a.type,a);Ne=u,a.target.dispatchEvent(u),Ne=null}else return i=ga(a),i!==null&&rr(i),t.blockedOn=a,!1;i.shift()}return!0}function ad(t,i,a){Ja(t)&&a.delete(i)}function Mg(){an=!1,Rt!==null&&Ja(Rt)&&(Rt=null),Ot!==null&&Ja(Ot)&&(Ot=null),_n!==null&&Ja(_n)&&(_n=null),sr.forEach(ad),ta.forEach(ad)}function ia(t,i){t.blockedOn===i&&(t.blockedOn=null,an||(an=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Mg)))}function ra(t){function i(f){return ia(f,t)}if(0<Rn.length){ia(Rn[0],t);for(var a=1;a<Rn.length;a++){var u=Rn[a];u.blockedOn===t&&(u.blockedOn=null)}}for(Rt!==null&&ia(Rt,t),Ot!==null&&ia(Ot,t),_n!==null&&ia(_n,t),sr.forEach(i),ta.forEach(i),a=0;a<ar.length;a++)u=ar[a],u.blockedOn===t&&(u.blockedOn=null);for(;0<ar.length&&(a=ar[0],a.blockedOn===null);)sd(a),a.blockedOn===null&&ar.shift()}var as=P.ReactCurrentBatchConfig,eo=!0;function yg(t,i,a,u){var f=Ke,h=as.transition;as.transition=null;try{Ke=1,Vl(t,i,a,u)}finally{Ke=f,as.transition=h}}function Eg(t,i,a,u){var f=Ke,h=as.transition;as.transition=null;try{Ke=4,Vl(t,i,a,u)}finally{Ke=f,as.transition=h}}function Vl(t,i,a,u){if(eo){var f=Wl(t,i,a,u);if(f===null)ou(t,i,u,to,a),rd(t,u);else if(Sg(f,t,i,a,u))u.stopPropagation();else if(rd(t,u),i&4&&-1<xg.indexOf(t)){for(;f!==null;){var h=ga(f);if(h!==null&&dn(h),h=Wl(t,i,a,u),h===null&&ou(t,i,u,to,a),h===f)break;f=h}f!==null&&u.stopPropagation()}else ou(t,i,u,null,a)}}var to=null;function Wl(t,i,a,u){if(to=null,t=he(u),t=Ir(t),t!==null)if(i=Ti(t),i===null)t=null;else if(a=i.tag,a===13){if(t=wi(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return to=t,null}function od(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Za()){case ea:return 1;case ja:return 4;case ss:case Qa:return 16;case A:return 536870912;default:return 16}default:return 16}}var or=null,Xl=null,no=null;function ld(){if(no)return no;var t,i=Xl,a=i.length,u,f="value"in or?or.value:or.textContent,h=f.length;for(t=0;t<a&&i[t]===f[t];t++);var E=a-t;for(u=1;u<=E&&i[a-u]===f[h-u];u++);return no=f.slice(t,1<u?1-u:void 0)}function io(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function ud(){return!1}function qn(t){function i(a,u,f,h,E){this._reactName=a,this._targetInst=f,this.type=u,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(a=t[I],this[I]=a?a(h):h[I]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ro:ud,this.isPropagationStopped=ud,this}return K(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),i}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=qn(os),sa=K({},os,{view:0,detail:0}),Tg=qn(sa),ql,$l,aa,so=K({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==aa&&(aa&&t.type==="mousemove"?(ql=t.screenX-aa.screenX,$l=t.screenY-aa.screenY):$l=ql=0,aa=t),ql)},movementY:function(t){return"movementY"in t?t.movementY:$l}}),cd=qn(so),wg=K({},so,{dataTransfer:0}),Ag=qn(wg),Rg=K({},sa,{relatedTarget:0}),Kl=qn(Rg),Cg=K({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),bg=qn(Cg),Pg=K({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lg=qn(Pg),Ng=K({},os,{data:0}),fd=qn(Ng),Dg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ig={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ug[t])?!!i[t]:!1}function Zl(){return Fg}var Og=K({},sa,{key:function(t){if(t.key){var i=Dg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ig[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zl,charCode:function(t){return t.type==="keypress"?io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bg=qn(Og),kg=K({},so,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dd=qn(kg),zg=K({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zl}),Hg=qn(zg),Gg=K({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vg=qn(Gg),Wg=K({},so,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xg=qn(Wg),Yg=[9,13,27,32],jl=d&&"CompositionEvent"in window,oa=null;d&&"documentMode"in document&&(oa=document.documentMode);var qg=d&&"TextEvent"in window&&!oa,hd=d&&(!jl||oa&&8<oa&&11>=oa),pd=" ",md=!1;function gd(t,i){switch(t){case"keyup":return Yg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _d(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function $g(t,i){switch(t){case"compositionend":return _d(i);case"keypress":return i.which!==32?null:(md=!0,pd);case"textInput":return t=i.data,t===pd&&md?null:t;default:return null}}function Kg(t,i){if(ls)return t==="compositionend"||!jl&&gd(t,i)?(t=ld(),no=Xl=or=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return hd&&i.locale!=="ko"?null:i.data;default:return null}}var Zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Zg[t.type]:i==="textarea"}function xd(t,i,a,u){fe(u),i=co(i,"onChange"),0<i.length&&(a=new Yl("onChange","change",null,a,u),t.push({event:a,listeners:i}))}var la=null,ua=null;function jg(t){Od(t,0)}function ao(t){var i=hs(t);if(lt(i))return t}function Qg(t,i){if(t==="change")return i}var Sd=!1;if(d){var Ql;if(d){var Jl="oninput"in document;if(!Jl){var Md=document.createElement("div");Md.setAttribute("oninput","return;"),Jl=typeof Md.oninput=="function"}Ql=Jl}else Ql=!1;Sd=Ql&&(!document.documentMode||9<document.documentMode)}function yd(){la&&(la.detachEvent("onpropertychange",Ed),ua=la=null)}function Ed(t){if(t.propertyName==="value"&&ao(ua)){var i=[];xd(i,ua,t,he(t)),ht(jg,i)}}function Jg(t,i,a){t==="focusin"?(yd(),la=i,ua=a,la.attachEvent("onpropertychange",Ed)):t==="focusout"&&yd()}function e0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ao(ua)}function t0(t,i){if(t==="click")return ao(i)}function n0(t,i){if(t==="input"||t==="change")return ao(i)}function i0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var fi=typeof Object.is=="function"?Object.is:i0;function ca(t,i){if(fi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var f=a[u];if(!p.call(i,f)||!fi(t[f],i[f]))return!1}return!0}function Td(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wd(t,i){var a=Td(t);t=0;for(var u;a;){if(a.nodeType===3){if(u=t+a.textContent.length,t<=i&&u>=i)return{node:a,offset:i-t};t=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Td(a)}}function Ad(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ad(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Rd(){for(var t=window,i=je();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=je(t.document)}return i}function eu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function r0(t){var i=Rd(),a=t.focusedElem,u=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Ad(a.ownerDocument.documentElement,a)){if(u!==null&&eu(a)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,h=Math.min(u.start,f);u=u.end===void 0?h:Math.min(u.end,f),!t.extend&&h>u&&(f=u,u=h,h=f),f=wd(a,h);var E=wd(a,u);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>u?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var s0=d&&"documentMode"in document&&11>=document.documentMode,us=null,tu=null,fa=null,nu=!1;function Cd(t,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nu||us==null||us!==je(u)||(u=us,"selectionStart"in u&&eu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),fa&&ca(fa,u)||(fa=u,u=co(tu,"onSelect"),0<u.length&&(i=new Yl("onSelect","select",null,i,a),t.push({event:i,listeners:u}),i.target=us)))}function oo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var cs={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},iu={},bd={};d&&(bd=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function lo(t){if(iu[t])return iu[t];if(!cs[t])return t;var i=cs[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in bd)return iu[t]=i[a];return t}var Pd=lo("animationend"),Ld=lo("animationiteration"),Nd=lo("animationstart"),Dd=lo("transitionend"),Id=new Map,Ud="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(t,i){Id.set(t,i),l(i,[t])}for(var ru=0;ru<Ud.length;ru++){var su=Ud[ru],a0=su.toLowerCase(),o0=su[0].toUpperCase()+su.slice(1);lr(a0,"on"+o0)}lr(Pd,"onAnimationEnd"),lr(Ld,"onAnimationIteration"),lr(Nd,"onAnimationStart"),lr("dblclick","onDoubleClick"),lr("focusin","onFocus"),lr("focusout","onBlur"),lr(Dd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l0=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function Fd(t,i,a){var u=t.type||"unknown-event";t.currentTarget=a,$a(u,i,void 0,t),t.currentTarget=null}function Od(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var u=t[a],f=u.event;u=u.listeners;e:{var h=void 0;if(i)for(var E=u.length-1;0<=E;E--){var I=u[E],G=I.instance,ue=I.currentTarget;if(I=I.listener,G!==h&&f.isPropagationStopped())break e;Fd(f,I,ue),h=G}else for(E=0;E<u.length;E++){if(I=u[E],G=I.instance,ue=I.currentTarget,I=I.listener,G!==h&&f.isPropagationStopped())break e;Fd(f,I,ue),h=G}}}if(Yn)throw t=is,Yn=!1,is=null,t}function Ht(t,i){var a=i[hu];a===void 0&&(a=i[hu]=new Set);var u=t+"__bubble";a.has(u)||(Bd(i,t,2,!1),a.add(u))}function au(t,i,a){var u=0;i&&(u|=4),Bd(a,t,u,i)}var uo="_reactListening"+Math.random().toString(36).slice(2);function ha(t){if(!t[uo]){t[uo]=!0,r.forEach(function(a){a!=="selectionchange"&&(l0.has(a)||au(a,!1,t),au(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[uo]||(i[uo]=!0,au("selectionchange",!1,i))}}function Bd(t,i,a,u){switch(od(i)){case 1:var f=yg;break;case 4:f=Eg;break;default:f=Vl}a=f.bind(null,i,a,t),f=void 0,!Qe||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function ou(t,i,a,u,f){var h=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var I=u.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(E===4)for(E=u.return;E!==null;){var G=E.tag;if((G===3||G===4)&&(G=E.stateNode.containerInfo,G===f||G.nodeType===8&&G.parentNode===f))return;E=E.return}for(;I!==null;){if(E=Ir(I),E===null)return;if(G=E.tag,G===5||G===6){u=h=E;continue e}I=I.parentNode}}u=u.return}ht(function(){var ue=h,xe=he(a),Te=[];e:{var ve=Id.get(t);if(ve!==void 0){var ze=Yl,Ye=t;switch(t){case"keypress":if(io(a)===0)break e;case"keydown":case"keyup":ze=Bg;break;case"focusin":Ye="focus",ze=Kl;break;case"focusout":Ye="blur",ze=Kl;break;case"beforeblur":case"afterblur":ze=Kl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=Ag;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=Hg;break;case Pd:case Ld:case Nd:ze=bg;break;case Dd:ze=Vg;break;case"scroll":ze=Tg;break;case"wheel":ze=Xg;break;case"copy":case"cut":case"paste":ze=Lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=dd}var qe=(i&4)!==0,on=!qe&&t==="scroll",re=qe?ve!==null?ve+"Capture":null:ve;qe=[];for(var Y=ue,le;Y!==null;){le=Y;var Re=le.stateNode;if(le.tag===5&&Re!==null&&(le=Re,re!==null&&(Re=ye(Y,re),Re!=null&&qe.push(pa(Y,Re,le)))),on)break;Y=Y.return}0<qe.length&&(ve=new ze(ve,Ye,null,a,xe),Te.push({event:ve,listeners:qe}))}}if((i&7)===0){e:{if(ve=t==="mouseover"||t==="pointerover",ze=t==="mouseout"||t==="pointerout",ve&&a!==Ne&&(Ye=a.relatedTarget||a.fromElement)&&(Ir(Ye)||Ye[zi]))break e;if((ze||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,ze?(Ye=a.relatedTarget||a.toElement,ze=ue,Ye=Ye?Ir(Ye):null,Ye!==null&&(on=Ti(Ye),Ye!==on||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(ze=null,Ye=ue),ze!==Ye)){if(qe=cd,Re="onMouseLeave",re="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(qe=dd,Re="onPointerLeave",re="onPointerEnter",Y="pointer"),on=ze==null?ve:hs(ze),le=Ye==null?ve:hs(Ye),ve=new qe(Re,Y+"leave",ze,a,xe),ve.target=on,ve.relatedTarget=le,Re=null,Ir(xe)===ue&&(qe=new qe(re,Y+"enter",Ye,a,xe),qe.target=le,qe.relatedTarget=on,Re=qe),on=Re,ze&&Ye)t:{for(qe=ze,re=Ye,Y=0,le=qe;le;le=fs(le))Y++;for(le=0,Re=re;Re;Re=fs(Re))le++;for(;0<Y-le;)qe=fs(qe),Y--;for(;0<le-Y;)re=fs(re),le--;for(;Y--;){if(qe===re||re!==null&&qe===re.alternate)break t;qe=fs(qe),re=fs(re)}qe=null}else qe=null;ze!==null&&kd(Te,ve,ze,qe,!1),Ye!==null&&on!==null&&kd(Te,on,Ye,qe,!0)}}e:{if(ve=ue?hs(ue):window,ze=ve.nodeName&&ve.nodeName.toLowerCase(),ze==="select"||ze==="input"&&ve.type==="file")var Ze=Qg;else if(vd(ve))if(Sd)Ze=n0;else{Ze=e0;var it=Jg}else(ze=ve.nodeName)&&ze.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Ze=t0);if(Ze&&(Ze=Ze(t,ue))){xd(Te,Ze,a,xe);break e}it&&it(t,ve,ue),t==="focusout"&&(it=ve._wrapperState)&&it.controlled&&ve.type==="number"&&An(ve,"number",ve.value)}switch(it=ue?hs(ue):window,t){case"focusin":(vd(it)||it.contentEditable==="true")&&(us=it,tu=ue,fa=null);break;case"focusout":fa=tu=us=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,Cd(Te,a,xe);break;case"selectionchange":if(s0)break;case"keydown":case"keyup":Cd(Te,a,xe)}var rt;if(jl)e:{switch(t){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else ls?gd(t,a)&&(ct="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ct="onCompositionStart");ct&&(hd&&a.locale!=="ko"&&(ls||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&ls&&(rt=ld()):(or=xe,Xl="value"in or?or.value:or.textContent,ls=!0)),it=co(ue,ct),0<it.length&&(ct=new fd(ct,t,null,a,xe),Te.push({event:ct,listeners:it}),rt?ct.data=rt:(rt=_d(a),rt!==null&&(ct.data=rt)))),(rt=qg?$g(t,a):Kg(t,a))&&(ue=co(ue,"onBeforeInput"),0<ue.length&&(xe=new fd("onBeforeInput","beforeinput",null,a,xe),Te.push({event:xe,listeners:ue}),xe.data=rt))}Od(Te,i)})}function pa(t,i,a){return{instance:t,listener:i,currentTarget:a}}function co(t,i){for(var a=i+"Capture",u=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=ye(t,a),h!=null&&u.unshift(pa(t,h,f)),h=ye(t,i),h!=null&&u.push(pa(t,h,f))),t=t.return}return u}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kd(t,i,a,u,f){for(var h=i._reactName,E=[];a!==null&&a!==u;){var I=a,G=I.alternate,ue=I.stateNode;if(G!==null&&G===u)break;I.tag===5&&ue!==null&&(I=ue,f?(G=ye(a,h),G!=null&&E.unshift(pa(a,G,I))):f||(G=ye(a,h),G!=null&&E.push(pa(a,G,I)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var u0=/\r\n?/g,c0=/\u0000|\uFFFD/g;function zd(t){return(typeof t=="string"?t:""+t).replace(u0,`
`).replace(c0,"")}function fo(t,i,a){if(i=zd(i),zd(t)!==i&&a)throw Error(n(425))}function ho(){}var lu=null,uu=null;function cu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var fu=typeof setTimeout=="function"?setTimeout:void 0,f0=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,d0=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(t){return Hd.resolve(null).then(t).catch(h0)}:fu;function h0(t){setTimeout(function(){throw t})}function du(t,i){var a=i,u=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(u===0){t.removeChild(f),ra(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=f}while(a);ra(i)}function ur(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Gd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var ds=Math.random().toString(36).slice(2),Ci="__reactFiber$"+ds,ma="__reactProps$"+ds,zi="__reactContainer$"+ds,hu="__reactEvents$"+ds,p0="__reactListeners$"+ds,m0="__reactHandles$"+ds;function Ir(t){var i=t[Ci];if(i)return i;for(var a=t.parentNode;a;){if(i=a[zi]||a[Ci]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Gd(t);t!==null;){if(a=t[Ci])return a;t=Gd(t)}return i}t=a,a=t.parentNode}return null}function ga(t){return t=t[Ci]||t[zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function po(t){return t[ma]||null}var pu=[],ps=-1;function cr(t){return{current:t}}function Gt(t){0>ps||(t.current=pu[ps],pu[ps]=null,ps--)}function zt(t,i){ps++,pu[ps]=t.current,t.current=i}var fr={},Cn=cr(fr),Bn=cr(!1),Ur=fr;function ms(t,i){var a=t.type.contextTypes;if(!a)return fr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in a)f[h]=i[h];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function kn(t){return t=t.childContextTypes,t!=null}function mo(){Gt(Bn),Gt(Cn)}function Vd(t,i,a){if(Cn.current!==fr)throw Error(n(168));zt(Cn,i),zt(Bn,a)}function Wd(t,i,a){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(n(108,Ue(t)||"Unknown",f));return K({},a,u)}function go(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fr,Ur=Cn.current,zt(Cn,t),zt(Bn,Bn.current),!0}function Xd(t,i,a){var u=t.stateNode;if(!u)throw Error(n(169));a?(t=Wd(t,i,Ur),u.__reactInternalMemoizedMergedChildContext=t,Gt(Bn),Gt(Cn),zt(Cn,t)):Gt(Bn),zt(Bn,a)}var Hi=null,_o=!1,mu=!1;function Yd(t){Hi===null?Hi=[t]:Hi.push(t)}function g0(t){_o=!0,Yd(t)}function dr(){if(!mu&&Hi!==null){mu=!0;var t=0,i=Ke;try{var a=Hi;for(Ke=1;t<a.length;t++){var u=a[t];do u=u(!0);while(u!==null)}Hi=null,_o=!1}catch(f){throw Hi!==null&&(Hi=Hi.slice(t+1)),Qs(ea,dr),f}finally{Ke=i,mu=!1}}return null}var gs=[],_s=0,vo=null,xo=0,ti=[],ni=0,Fr=null,Gi=1,Vi="";function Or(t,i){gs[_s++]=xo,gs[_s++]=vo,vo=t,xo=i}function qd(t,i,a){ti[ni++]=Gi,ti[ni++]=Vi,ti[ni++]=Fr,Fr=t;var u=Gi;t=Vi;var f=32-J(u)-1;u&=~(1<<f),a+=1;var h=32-J(i)+f;if(30<h){var E=f-f%5;h=(u&(1<<E)-1).toString(32),u>>=E,f-=E,Gi=1<<32-J(i)+f|a<<f|u,Vi=h+t}else Gi=1<<h|a<<f|u,Vi=t}function gu(t){t.return!==null&&(Or(t,1),qd(t,1,0))}function _u(t){for(;t===vo;)vo=gs[--_s],gs[_s]=null,xo=gs[--_s],gs[_s]=null;for(;t===Fr;)Fr=ti[--ni],ti[ni]=null,Vi=ti[--ni],ti[ni]=null,Gi=ti[--ni],ti[ni]=null}var $n=null,Kn=null,Yt=!1,di=null;function $d(t,i){var a=ai(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function Kd(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,$n=t,Kn=ur(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,$n=t,Kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Fr!==null?{id:Gi,overflow:Vi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ai(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,$n=t,Kn=null,!0):!1;default:return!1}}function vu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xu(t){if(Yt){var i=Kn;if(i){var a=i;if(!Kd(t,i)){if(vu(t))throw Error(n(418));i=ur(a.nextSibling);var u=$n;i&&Kd(t,i)?$d(u,a):(t.flags=t.flags&-4097|2,Yt=!1,$n=t)}}else{if(vu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Yt=!1,$n=t}}}function Zd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$n=t}function So(t){if(t!==$n)return!1;if(!Yt)return Zd(t),Yt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!cu(t.type,t.memoizedProps)),i&&(i=Kn)){if(vu(t))throw jd(),Error(n(418));for(;i;)$d(t,i),i=ur(i.nextSibling)}if(Zd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Kn=ur(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Kn=null}}else Kn=$n?ur(t.stateNode.nextSibling):null;return!0}function jd(){for(var t=Kn;t;)t=ur(t.nextSibling)}function vs(){Kn=$n=null,Yt=!1}function Su(t){di===null?di=[t]:di.push(t)}var _0=P.ReactCurrentBatchConfig;function _a(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var u=a.stateNode}if(!u)throw Error(n(147,t));var f=u,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var I=f.refs;E===null?delete I[h]:I[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Mo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Qd(t){var i=t._init;return i(t._payload)}function Jd(t){function i(re,Y){if(t){var le=re.deletions;le===null?(re.deletions=[Y],re.flags|=16):le.push(Y)}}function a(re,Y){if(!t)return null;for(;Y!==null;)i(re,Y),Y=Y.sibling;return null}function u(re,Y){for(re=new Map;Y!==null;)Y.key!==null?re.set(Y.key,Y):re.set(Y.index,Y),Y=Y.sibling;return re}function f(re,Y){return re=Sr(re,Y),re.index=0,re.sibling=null,re}function h(re,Y,le){return re.index=le,t?(le=re.alternate,le!==null?(le=le.index,le<Y?(re.flags|=2,Y):le):(re.flags|=2,Y)):(re.flags|=1048576,Y)}function E(re){return t&&re.alternate===null&&(re.flags|=2),re}function I(re,Y,le,Re){return Y===null||Y.tag!==6?(Y=fc(le,re.mode,Re),Y.return=re,Y):(Y=f(Y,le),Y.return=re,Y)}function G(re,Y,le,Re){var Ze=le.type;return Ze===M?xe(re,Y,le.props.children,Re,le.key):Y!==null&&(Y.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ae&&Qd(Ze)===Y.type)?(Re=f(Y,le.props),Re.ref=_a(re,Y,le),Re.return=re,Re):(Re=Xo(le.type,le.key,le.props,null,re.mode,Re),Re.ref=_a(re,Y,le),Re.return=re,Re)}function ue(re,Y,le,Re){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==le.containerInfo||Y.stateNode.implementation!==le.implementation?(Y=dc(le,re.mode,Re),Y.return=re,Y):(Y=f(Y,le.children||[]),Y.return=re,Y)}function xe(re,Y,le,Re,Ze){return Y===null||Y.tag!==7?(Y=Xr(le,re.mode,Re,Ze),Y.return=re,Y):(Y=f(Y,le),Y.return=re,Y)}function Te(re,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=fc(""+Y,re.mode,le),Y.return=re,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case U:return le=Xo(Y.type,Y.key,Y.props,null,re.mode,le),le.ref=_a(re,null,Y),le.return=re,le;case D:return Y=dc(Y,re.mode,le),Y.return=re,Y;case ae:var Re=Y._init;return Te(re,Re(Y._payload),le)}if(kt(Y)||H(Y))return Y=Xr(Y,re.mode,le,null),Y.return=re,Y;Mo(re,Y)}return null}function ve(re,Y,le,Re){var Ze=Y!==null?Y.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return Ze!==null?null:I(re,Y,""+le,Re);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case U:return le.key===Ze?G(re,Y,le,Re):null;case D:return le.key===Ze?ue(re,Y,le,Re):null;case ae:return Ze=le._init,ve(re,Y,Ze(le._payload),Re)}if(kt(le)||H(le))return Ze!==null?null:xe(re,Y,le,Re,null);Mo(re,le)}return null}function ze(re,Y,le,Re,Ze){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return re=re.get(le)||null,I(Y,re,""+Re,Ze);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case U:return re=re.get(Re.key===null?le:Re.key)||null,G(Y,re,Re,Ze);case D:return re=re.get(Re.key===null?le:Re.key)||null,ue(Y,re,Re,Ze);case ae:var it=Re._init;return ze(re,Y,le,it(Re._payload),Ze)}if(kt(Re)||H(Re))return re=re.get(le)||null,xe(Y,re,Re,Ze,null);Mo(Y,Re)}return null}function Ye(re,Y,le,Re){for(var Ze=null,it=null,rt=Y,ct=Y=0,Sn=null;rt!==null&&ct<le.length;ct++){rt.index>ct?(Sn=rt,rt=null):Sn=rt.sibling;var Ct=ve(re,rt,le[ct],Re);if(Ct===null){rt===null&&(rt=Sn);break}t&&rt&&Ct.alternate===null&&i(re,rt),Y=h(Ct,Y,ct),it===null?Ze=Ct:it.sibling=Ct,it=Ct,rt=Sn}if(ct===le.length)return a(re,rt),Yt&&Or(re,ct),Ze;if(rt===null){for(;ct<le.length;ct++)rt=Te(re,le[ct],Re),rt!==null&&(Y=h(rt,Y,ct),it===null?Ze=rt:it.sibling=rt,it=rt);return Yt&&Or(re,ct),Ze}for(rt=u(re,rt);ct<le.length;ct++)Sn=ze(rt,re,ct,le[ct],Re),Sn!==null&&(t&&Sn.alternate!==null&&rt.delete(Sn.key===null?ct:Sn.key),Y=h(Sn,Y,ct),it===null?Ze=Sn:it.sibling=Sn,it=Sn);return t&&rt.forEach(function(Mr){return i(re,Mr)}),Yt&&Or(re,ct),Ze}function qe(re,Y,le,Re){var Ze=H(le);if(typeof Ze!="function")throw Error(n(150));if(le=Ze.call(le),le==null)throw Error(n(151));for(var it=Ze=null,rt=Y,ct=Y=0,Sn=null,Ct=le.next();rt!==null&&!Ct.done;ct++,Ct=le.next()){rt.index>ct?(Sn=rt,rt=null):Sn=rt.sibling;var Mr=ve(re,rt,Ct.value,Re);if(Mr===null){rt===null&&(rt=Sn);break}t&&rt&&Mr.alternate===null&&i(re,rt),Y=h(Mr,Y,ct),it===null?Ze=Mr:it.sibling=Mr,it=Mr,rt=Sn}if(Ct.done)return a(re,rt),Yt&&Or(re,ct),Ze;if(rt===null){for(;!Ct.done;ct++,Ct=le.next())Ct=Te(re,Ct.value,Re),Ct!==null&&(Y=h(Ct,Y,ct),it===null?Ze=Ct:it.sibling=Ct,it=Ct);return Yt&&Or(re,ct),Ze}for(rt=u(re,rt);!Ct.done;ct++,Ct=le.next())Ct=ze(rt,re,ct,Ct.value,Re),Ct!==null&&(t&&Ct.alternate!==null&&rt.delete(Ct.key===null?ct:Ct.key),Y=h(Ct,Y,ct),it===null?Ze=Ct:it.sibling=Ct,it=Ct);return t&&rt.forEach(function(Z0){return i(re,Z0)}),Yt&&Or(re,ct),Ze}function on(re,Y,le,Re){if(typeof le=="object"&&le!==null&&le.type===M&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case U:e:{for(var Ze=le.key,it=Y;it!==null;){if(it.key===Ze){if(Ze=le.type,Ze===M){if(it.tag===7){a(re,it.sibling),Y=f(it,le.props.children),Y.return=re,re=Y;break e}}else if(it.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ae&&Qd(Ze)===it.type){a(re,it.sibling),Y=f(it,le.props),Y.ref=_a(re,it,le),Y.return=re,re=Y;break e}a(re,it);break}else i(re,it);it=it.sibling}le.type===M?(Y=Xr(le.props.children,re.mode,Re,le.key),Y.return=re,re=Y):(Re=Xo(le.type,le.key,le.props,null,re.mode,Re),Re.ref=_a(re,Y,le),Re.return=re,re=Re)}return E(re);case D:e:{for(it=le.key;Y!==null;){if(Y.key===it)if(Y.tag===4&&Y.stateNode.containerInfo===le.containerInfo&&Y.stateNode.implementation===le.implementation){a(re,Y.sibling),Y=f(Y,le.children||[]),Y.return=re,re=Y;break e}else{a(re,Y);break}else i(re,Y);Y=Y.sibling}Y=dc(le,re.mode,Re),Y.return=re,re=Y}return E(re);case ae:return it=le._init,on(re,Y,it(le._payload),Re)}if(kt(le))return Ye(re,Y,le,Re);if(H(le))return qe(re,Y,le,Re);Mo(re,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,Y!==null&&Y.tag===6?(a(re,Y.sibling),Y=f(Y,le),Y.return=re,re=Y):(a(re,Y),Y=fc(le,re.mode,Re),Y.return=re,re=Y),E(re)):a(re,Y)}return on}var xs=Jd(!0),eh=Jd(!1),yo=cr(null),Eo=null,Ss=null,Mu=null;function yu(){Mu=Ss=Eo=null}function Eu(t){var i=yo.current;Gt(yo),t._currentValue=i}function Tu(t,i,a){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===a)break;t=t.return}}function Ms(t,i){Eo=t,Mu=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(zn=!0),t.firstContext=null)}function ii(t){var i=t._currentValue;if(Mu!==t)if(t={context:t,memoizedValue:i,next:null},Ss===null){if(Eo===null)throw Error(n(308));Ss=t,Eo.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return i}var Br=null;function wu(t){Br===null?Br=[t]:Br.push(t)}function th(t,i,a,u){var f=i.interleaved;return f===null?(a.next=a,wu(i)):(a.next=f.next,f.next=a),i.interleaved=a,Wi(t,u)}function Wi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var hr=!1;function Au(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function pr(t,i,a){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(wt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,Wi(t,a)}return f=u.interleaved,f===null?(i.next=i,wu(u)):(i.next=f.next,f.next=i),u.interleaved=i,Wi(t,a)}function To(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,a|=u,i.lanes=a,fn(t,a)}}function ih(t,i){var a=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var f=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?f=h=E:h=h.next=E,a=a.next}while(a!==null);h===null?f=h=i:h=h.next=i}else f=h=i;a={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:u.shared,effects:u.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function wo(t,i,a,u){var f=t.updateQueue;hr=!1;var h=f.firstBaseUpdate,E=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var G=I,ue=G.next;G.next=null,E===null?h=ue:E.next=ue,E=G;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,I=xe.lastBaseUpdate,I!==E&&(I===null?xe.firstBaseUpdate=ue:I.next=ue,xe.lastBaseUpdate=G))}if(h!==null){var Te=f.baseState;E=0,xe=ue=G=null,I=h;do{var ve=I.lane,ze=I.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:ze,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ye=t,qe=I;switch(ve=i,ze=a,qe.tag){case 1:if(Ye=qe.payload,typeof Ye=="function"){Te=Ye.call(ze,Te,ve);break e}Te=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=qe.payload,ve=typeof Ye=="function"?Ye.call(ze,Te,ve):Ye,ve==null)break e;Te=K({},Te,ve);break e;case 2:hr=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ve=f.effects,ve===null?f.effects=[I]:ve.push(I))}else ze={eventTime:ze,lane:ve,tag:I.tag,payload:I.payload,callback:I.callback,next:null},xe===null?(ue=xe=ze,G=Te):xe=xe.next=ze,E|=ve;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;ve=I,I=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);if(xe===null&&(G=Te),f.baseState=G,f.firstBaseUpdate=ue,f.lastBaseUpdate=xe,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);Hr|=E,t.lanes=E,t.memoizedState=Te}}function rh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],f=u.callback;if(f!==null){if(u.callback=null,u=a,typeof f!="function")throw Error(n(191,f));f.call(u)}}}var va={},bi=cr(va),xa=cr(va),Sa=cr(va);function kr(t){if(t===va)throw Error(n(174));return t}function Ru(t,i){switch(zt(Sa,i),zt(xa,t),zt(bi,va),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Tt(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Tt(i,t)}Gt(bi),zt(bi,i)}function ys(){Gt(bi),Gt(xa),Gt(Sa)}function sh(t){kr(Sa.current);var i=kr(bi.current),a=Tt(i,t.type);i!==a&&(zt(xa,t),zt(bi,a))}function Cu(t){xa.current===t&&(Gt(bi),Gt(xa))}var Zt=cr(0);function Ao(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var bu=[];function Pu(){for(var t=0;t<bu.length;t++)bu[t]._workInProgressVersionPrimary=null;bu.length=0}var Ro=P.ReactCurrentDispatcher,Lu=P.ReactCurrentBatchConfig,zr=0,jt=null,hn=null,vn=null,Co=!1,Ma=!1,ya=0,v0=0;function bn(){throw Error(n(321))}function Nu(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!fi(t[a],i[a]))return!1;return!0}function Du(t,i,a,u,f,h){if(zr=h,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ro.current=t===null||t.memoizedState===null?y0:E0,t=a(u,f),Ma){h=0;do{if(Ma=!1,ya=0,25<=h)throw Error(n(301));h+=1,vn=hn=null,i.updateQueue=null,Ro.current=T0,t=a(u,f)}while(Ma)}if(Ro.current=Lo,i=hn!==null&&hn.next!==null,zr=0,vn=hn=jt=null,Co=!1,i)throw Error(n(300));return t}function Iu(){var t=ya!==0;return ya=0,t}function Pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?jt.memoizedState=vn=t:vn=vn.next=t,vn}function ri(){if(hn===null){var t=jt.alternate;t=t!==null?t.memoizedState:null}else t=hn.next;var i=vn===null?jt.memoizedState:vn.next;if(i!==null)vn=i,hn=t;else{if(t===null)throw Error(n(310));hn=t,t={memoizedState:hn.memoizedState,baseState:hn.baseState,baseQueue:hn.baseQueue,queue:hn.queue,next:null},vn===null?jt.memoizedState=vn=t:vn=vn.next=t}return vn}function Ea(t,i){return typeof i=="function"?i(t):i}function Uu(t){var i=ri(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var u=hn,f=u.baseQueue,h=a.pending;if(h!==null){if(f!==null){var E=f.next;f.next=h.next,h.next=E}u.baseQueue=f=h,a.pending=null}if(f!==null){h=f.next,u=u.baseState;var I=E=null,G=null,ue=h;do{var xe=ue.lane;if((zr&xe)===xe)G!==null&&(G=G.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),u=ue.hasEagerState?ue.eagerState:t(u,ue.action);else{var Te={lane:xe,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};G===null?(I=G=Te,E=u):G=G.next=Te,jt.lanes|=xe,Hr|=xe}ue=ue.next}while(ue!==null&&ue!==h);G===null?E=u:G.next=I,fi(u,i.memoizedState)||(zn=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=G,a.lastRenderedState=u}if(t=a.interleaved,t!==null){f=t;do h=f.lane,jt.lanes|=h,Hr|=h,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Fu(t){var i=ri(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var u=a.dispatch,f=a.pending,h=i.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do h=t(h,E.action),E=E.next;while(E!==f);fi(h,i.memoizedState)||(zn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,u]}function ah(){}function oh(t,i){var a=jt,u=ri(),f=i(),h=!fi(u.memoizedState,f);if(h&&(u.memoizedState=f,zn=!0),u=u.queue,Ou(ch.bind(null,a,u,t),[t]),u.getSnapshot!==i||h||vn!==null&&vn.memoizedState.tag&1){if(a.flags|=2048,Ta(9,uh.bind(null,a,u,f,i),void 0,null),xn===null)throw Error(n(349));(zr&30)!==0||lh(a,i,f)}return f}function lh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function uh(t,i,a,u){i.value=a,i.getSnapshot=u,fh(i)&&dh(t)}function ch(t,i,a){return a(function(){fh(i)&&dh(t)})}function fh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!fi(t,a)}catch{return!0}}function dh(t){var i=Wi(t,1);i!==null&&gi(i,t,1,-1)}function hh(t){var i=Pi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},i.queue=t,t=t.dispatch=M0.bind(null,jt,t),[i.memoizedState,t]}function Ta(t,i,a,u){return t={tag:t,create:i,destroy:a,deps:u,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(u=a.next,a.next=t,t.next=u,i.lastEffect=t)),t}function ph(){return ri().memoizedState}function bo(t,i,a,u){var f=Pi();jt.flags|=t,f.memoizedState=Ta(1|i,a,void 0,u===void 0?null:u)}function Po(t,i,a,u){var f=ri();u=u===void 0?null:u;var h=void 0;if(hn!==null){var E=hn.memoizedState;if(h=E.destroy,u!==null&&Nu(u,E.deps)){f.memoizedState=Ta(i,a,h,u);return}}jt.flags|=t,f.memoizedState=Ta(1|i,a,h,u)}function mh(t,i){return bo(8390656,8,t,i)}function Ou(t,i){return Po(2048,8,t,i)}function gh(t,i){return Po(4,2,t,i)}function _h(t,i){return Po(4,4,t,i)}function vh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function xh(t,i,a){return a=a!=null?a.concat([t]):null,Po(4,4,vh.bind(null,i,t),a)}function Bu(){}function Sh(t,i){var a=ri();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Nu(i,u[1])?u[0]:(a.memoizedState=[t,i],t)}function Mh(t,i){var a=ri();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Nu(i,u[1])?u[0]:(t=t(),a.memoizedState=[t,i],t)}function yh(t,i,a){return(zr&21)===0?(t.baseState&&(t.baseState=!1,zn=!0),t.memoizedState=a):(fi(a,i)||(a=It(),jt.lanes|=a,Hr|=a,t.baseState=!0),i)}function x0(t,i){var a=Ke;Ke=a!==0&&4>a?a:4,t(!0);var u=Lu.transition;Lu.transition={};try{t(!1),i()}finally{Ke=a,Lu.transition=u}}function Eh(){return ri().memoizedState}function S0(t,i,a){var u=vr(t);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Th(t))wh(i,a);else if(a=th(t,i,a,u),a!==null){var f=Fn();gi(a,t,u,f),Ah(a,i,u)}}function M0(t,i,a){var u=vr(t),f={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Th(t))wh(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,I=h(E,a);if(f.hasEagerState=!0,f.eagerState=I,fi(I,E)){var G=i.interleaved;G===null?(f.next=f,wu(i)):(f.next=G.next,G.next=f),i.interleaved=f;return}}catch{}finally{}a=th(t,i,f,u),a!==null&&(f=Fn(),gi(a,t,u,f),Ah(a,i,u))}}function Th(t){var i=t.alternate;return t===jt||i!==null&&i===jt}function wh(t,i){Ma=Co=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Ah(t,i,a){if((a&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,a|=u,i.lanes=a,fn(t,a)}}var Lo={readContext:ii,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useInsertionEffect:bn,useLayoutEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useMutableSource:bn,useSyncExternalStore:bn,useId:bn,unstable_isNewReconciler:!1},y0={readContext:ii,useCallback:function(t,i){return Pi().memoizedState=[t,i===void 0?null:i],t},useContext:ii,useEffect:mh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,bo(4194308,4,vh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return bo(4194308,4,t,i)},useInsertionEffect:function(t,i){return bo(4,2,t,i)},useMemo:function(t,i){var a=Pi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var u=Pi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=S0.bind(null,jt,t),[u.memoizedState,t]},useRef:function(t){var i=Pi();return t={current:t},i.memoizedState=t},useState:hh,useDebugValue:Bu,useDeferredValue:function(t){return Pi().memoizedState=t},useTransition:function(){var t=hh(!1),i=t[0];return t=x0.bind(null,t[1]),Pi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var u=jt,f=Pi();if(Yt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),xn===null)throw Error(n(349));(zr&30)!==0||lh(u,i,a)}f.memoizedState=a;var h={value:a,getSnapshot:i};return f.queue=h,mh(ch.bind(null,u,h,t),[t]),u.flags|=2048,Ta(9,uh.bind(null,u,h,a,i),void 0,null),a},useId:function(){var t=Pi(),i=xn.identifierPrefix;if(Yt){var a=Vi,u=Gi;a=(u&~(1<<32-J(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=ya++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=v0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},E0={readContext:ii,useCallback:Sh,useContext:ii,useEffect:Ou,useImperativeHandle:xh,useInsertionEffect:gh,useLayoutEffect:_h,useMemo:Mh,useReducer:Uu,useRef:ph,useState:function(){return Uu(Ea)},useDebugValue:Bu,useDeferredValue:function(t){var i=ri();return yh(i,hn.memoizedState,t)},useTransition:function(){var t=Uu(Ea)[0],i=ri().memoizedState;return[t,i]},useMutableSource:ah,useSyncExternalStore:oh,useId:Eh,unstable_isNewReconciler:!1},T0={readContext:ii,useCallback:Sh,useContext:ii,useEffect:Ou,useImperativeHandle:xh,useInsertionEffect:gh,useLayoutEffect:_h,useMemo:Mh,useReducer:Fu,useRef:ph,useState:function(){return Fu(Ea)},useDebugValue:Bu,useDeferredValue:function(t){var i=ri();return hn===null?i.memoizedState=t:yh(i,hn.memoizedState,t)},useTransition:function(){var t=Fu(Ea)[0],i=ri().memoizedState;return[t,i]},useMutableSource:ah,useSyncExternalStore:oh,useId:Eh,unstable_isNewReconciler:!1};function hi(t,i){if(t&&t.defaultProps){i=K({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function ku(t,i,a,u){i=t.memoizedState,a=a(u,i),a=a==null?i:K({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var No={isMounted:function(t){return(t=t._reactInternals)?Ti(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var u=Fn(),f=vr(t),h=Xi(u,f);h.payload=i,a!=null&&(h.callback=a),i=pr(t,h,f),i!==null&&(gi(i,t,f,u),To(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var u=Fn(),f=vr(t),h=Xi(u,f);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=pr(t,h,f),i!==null&&(gi(i,t,f,u),To(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Fn(),u=vr(t),f=Xi(a,u);f.tag=2,i!=null&&(f.callback=i),i=pr(t,f,u),i!==null&&(gi(i,t,u,a),To(i,t,u))}};function Rh(t,i,a,u,f,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,h,E):i.prototype&&i.prototype.isPureReactComponent?!ca(a,u)||!ca(f,h):!0}function Ch(t,i,a){var u=!1,f=fr,h=i.contextType;return typeof h=="object"&&h!==null?h=ii(h):(f=kn(i)?Ur:Cn.current,u=i.contextTypes,h=(u=u!=null)?ms(t,f):fr),i=new i(a,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=No,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function bh(t,i,a,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==t&&No.enqueueReplaceState(i,i.state,null)}function zu(t,i,a,u){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},Au(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=ii(h):(h=kn(i)?Ur:Cn.current,f.context=ms(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(ku(t,i,h,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&No.enqueueReplaceState(f,f.state,null),wo(t,a,f,u),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Es(t,i){try{var a="",u=i;do a+=de(u),u=u.return;while(u);var f=a}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function Hu(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Gu(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var w0=typeof WeakMap=="function"?WeakMap:Map;function Ph(t,i,a){a=Xi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){ko||(ko=!0,ic=u),Gu(t,i)},a}function Lh(t,i,a){a=Xi(-1,a),a.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;a.payload=function(){return u(f)},a.callback=function(){Gu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){Gu(t,i),typeof u!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Nh(t,i,a){var u=t.pingCache;if(u===null){u=t.pingCache=new w0;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(a)||(f.add(a),t=k0.bind(null,t,i,a),i.then(t,t))}function Dh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Ih(t,i,a,u,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Xi(-1,1),i.tag=2,pr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var A0=P.ReactCurrentOwner,zn=!1;function Un(t,i,a,u){i.child=t===null?eh(i,null,a,u):xs(i,t.child,a,u)}function Uh(t,i,a,u,f){a=a.render;var h=i.ref;return Ms(i,f),u=Du(t,i,a,u,h,f),a=Iu(),t!==null&&!zn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Yi(t,i,f)):(Yt&&a&&gu(i),i.flags|=1,Un(t,i,u,f),i.child)}function Fh(t,i,a,u,f){if(t===null){var h=a.type;return typeof h=="function"&&!cc(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,Oh(t,i,h,u,f)):(t=Xo(a.type,null,u,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var E=h.memoizedProps;if(a=a.compare,a=a!==null?a:ca,a(E,u)&&t.ref===i.ref)return Yi(t,i,f)}return i.flags|=1,t=Sr(h,u),t.ref=i.ref,t.return=i,i.child=t}function Oh(t,i,a,u,f){if(t!==null){var h=t.memoizedProps;if(ca(h,u)&&t.ref===i.ref)if(zn=!1,i.pendingProps=u=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(zn=!0);else return i.lanes=t.lanes,Yi(t,i,f)}return Vu(t,i,a,u,f)}function Bh(t,i,a){var u=i.pendingProps,f=u.children,h=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(ws,Zn),Zn|=a;else{if((a&1073741824)===0)return t=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,zt(ws,Zn),Zn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=h!==null?h.baseLanes:a,zt(ws,Zn),Zn|=u}else h!==null?(u=h.baseLanes|a,i.memoizedState=null):u=a,zt(ws,Zn),Zn|=u;return Un(t,i,f,a),i.child}function kh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Vu(t,i,a,u,f){var h=kn(a)?Ur:Cn.current;return h=ms(i,h),Ms(i,f),a=Du(t,i,a,u,h,f),u=Iu(),t!==null&&!zn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Yi(t,i,f)):(Yt&&u&&gu(i),i.flags|=1,Un(t,i,a,f),i.child)}function zh(t,i,a,u,f){if(kn(a)){var h=!0;go(i)}else h=!1;if(Ms(i,f),i.stateNode===null)Io(t,i),Ch(i,a,u),zu(i,a,u,f),u=!0;else if(t===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var G=E.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=ii(ue):(ue=kn(a)?Ur:Cn.current,ue=ms(i,ue));var xe=a.getDerivedStateFromProps,Te=typeof xe=="function"||typeof E.getSnapshotBeforeUpdate=="function";Te||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==u||G!==ue)&&bh(i,E,u,ue),hr=!1;var ve=i.memoizedState;E.state=ve,wo(i,u,E,f),G=i.memoizedState,I!==u||ve!==G||Bn.current||hr?(typeof xe=="function"&&(ku(i,a,xe,u),G=i.memoizedState),(I=hr||Rh(i,a,I,u,ve,G,ue))?(Te||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=G),E.props=u,E.state=G,E.context=ue,u=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,nh(t,i),I=i.memoizedProps,ue=i.type===i.elementType?I:hi(i.type,I),E.props=ue,Te=i.pendingProps,ve=E.context,G=a.contextType,typeof G=="object"&&G!==null?G=ii(G):(G=kn(a)?Ur:Cn.current,G=ms(i,G));var ze=a.getDerivedStateFromProps;(xe=typeof ze=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==Te||ve!==G)&&bh(i,E,u,G),hr=!1,ve=i.memoizedState,E.state=ve,wo(i,u,E,f);var Ye=i.memoizedState;I!==Te||ve!==Ye||Bn.current||hr?(typeof ze=="function"&&(ku(i,a,ze,u),Ye=i.memoizedState),(ue=hr||Rh(i,a,ue,u,ve,Ye,G)||!1)?(xe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,Ye,G),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,Ye,G)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ye),E.props=u,E.state=Ye,E.context=G,u=ue):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),u=!1)}return Wu(t,i,a,u,h,f)}function Wu(t,i,a,u,f,h){kh(t,i);var E=(i.flags&128)!==0;if(!u&&!E)return f&&Xd(i,a,!1),Yi(t,i,h);u=i.stateNode,A0.current=i;var I=E&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&E?(i.child=xs(i,t.child,null,h),i.child=xs(i,null,I,h)):Un(t,i,I,h),i.memoizedState=u.state,f&&Xd(i,a,!0),i.child}function Hh(t){var i=t.stateNode;i.pendingContext?Vd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Vd(t,i.context,!1),Ru(t,i.containerInfo)}function Gh(t,i,a,u,f){return vs(),Su(f),i.flags|=256,Un(t,i,a,u),i.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function Yu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vh(t,i,a){var u=i.pendingProps,f=Zt.current,h=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=t!==null&&t.memoizedState===null?!1:(f&2)!==0),I?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),zt(Zt,f&1),t===null)return xu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,t=u.fallback,h?(u=i.mode,h=i.child,E={mode:"hidden",children:E},(u&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=Yo(E,u,0,null),t=Xr(t,u,a,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Yu(a),i.memoizedState=Xu,t):qu(i,E));if(f=t.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return R0(t,i,E,u,I,f,a);if(h){h=u.fallback,E=i.mode,f=t.child,I=f.sibling;var G={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=G,i.deletions=null):(u=Sr(f,G),u.subtreeFlags=f.subtreeFlags&14680064),I!==null?h=Sr(I,h):(h=Xr(h,E,a,null),h.flags|=2),h.return=i,u.return=i,u.sibling=h,i.child=u,u=h,h=i.child,E=t.child.memoizedState,E=E===null?Yu(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~a,i.memoizedState=Xu,u}return h=t.child,t=h.sibling,u=Sr(h,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=u,i.memoizedState=null,u}function qu(t,i){return i=Yo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Do(t,i,a,u){return u!==null&&Su(u),xs(i,t.child,null,a),t=qu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function R0(t,i,a,u,f,h,E){if(a)return i.flags&256?(i.flags&=-257,u=Hu(Error(n(422))),Do(t,i,E,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=u.fallback,f=i.mode,u=Yo({mode:"visible",children:u.children},f,0,null),h=Xr(h,f,E,null),h.flags|=2,u.return=i,h.return=i,u.sibling=h,i.child=u,(i.mode&1)!==0&&xs(i,t.child,null,E),i.child.memoizedState=Yu(E),i.memoizedState=Xu,h);if((i.mode&1)===0)return Do(t,i,E,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var I=u.dgst;return u=I,h=Error(n(419)),u=Hu(h,u,void 0),Do(t,i,E,u)}if(I=(E&t.childLanes)!==0,zn||I){if(u=xn,u!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|E))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Wi(t,f),gi(u,t,f,-1))}return uc(),u=Hu(Error(n(421))),Do(t,i,E,u)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=z0.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,Kn=ur(f.nextSibling),$n=i,Yt=!0,di=null,t!==null&&(ti[ni++]=Gi,ti[ni++]=Vi,ti[ni++]=Fr,Gi=t.id,Vi=t.overflow,Fr=i),i=qu(i,u.children),i.flags|=4096,i)}function Wh(t,i,a){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Tu(t.return,i,a)}function $u(t,i,a,u,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=u,h.tail=a,h.tailMode=f)}function Xh(t,i,a){var u=i.pendingProps,f=u.revealOrder,h=u.tail;if(Un(t,i,u.children,a),u=Zt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wh(t,a,i);else if(t.tag===19)Wh(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(zt(Zt,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Ao(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),$u(i,!1,f,a,h);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Ao(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}$u(i,!0,a,null,h);break;case"together":$u(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Io(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Yi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Hr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=Sr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Sr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function C0(t,i,a){switch(i.tag){case 3:Hh(i),vs();break;case 5:sh(i);break;case 1:kn(i.type)&&go(i);break;case 4:Ru(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;zt(yo,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(zt(Zt,Zt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Vh(t,i,a):(zt(Zt,Zt.current&1),t=Yi(t,i,a),t!==null?t.sibling:null);zt(Zt,Zt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(t.flags&128)!==0){if(u)return Xh(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),zt(Zt,Zt.current),u)break;return null;case 22:case 23:return i.lanes=0,Bh(t,i,a)}return Yi(t,i,a)}var Yh,Ku,qh,$h;Yh=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ku=function(){},qh=function(t,i,a,u){var f=t.memoizedProps;if(f!==u){t=i.stateNode,kr(bi.current);var h=null;switch(a){case"input":f=nt(t,f),u=nt(t,u),h=[];break;case"select":f=K({},f,{value:void 0}),u=K({},u,{value:void 0}),h=[];break;case"textarea":f=qt(t,f),u=qt(t,u),h=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=ho)}ge(a,u);var E;a=null;for(ue in f)if(!u.hasOwnProperty(ue)&&f.hasOwnProperty(ue)&&f[ue]!=null)if(ue==="style"){var I=f[ue];for(E in I)I.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?h||(h=[]):(h=h||[]).push(ue,null));for(ue in u){var G=u[ue];if(I=f!=null?f[ue]:void 0,u.hasOwnProperty(ue)&&G!==I&&(G!=null||I!=null))if(ue==="style")if(I){for(E in I)!I.hasOwnProperty(E)||G&&G.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in G)G.hasOwnProperty(E)&&I[E]!==G[E]&&(a||(a={}),a[E]=G[E])}else a||(h||(h=[]),h.push(ue,a)),a=G;else ue==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,I=I?I.__html:void 0,G!=null&&I!==G&&(h=h||[]).push(ue,G)):ue==="children"?typeof G!="string"&&typeof G!="number"||(h=h||[]).push(ue,""+G):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(G!=null&&ue==="onScroll"&&Ht("scroll",t),h||I===G||(h=[])):(h=h||[]).push(ue,G))}a&&(h=h||[]).push("style",a);var ue=h;(i.updateQueue=ue)&&(i.flags|=4)}},$h=function(t,i,a,u){a!==u&&(i.flags|=4)};function wa(t,i){if(!Yt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function Pn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,u=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=u,t.childLanes=a,i}function b0(t,i,a){var u=i.pendingProps;switch(_u(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(i),null;case 1:return kn(i.type)&&mo(),Pn(i),null;case 3:return u=i.stateNode,ys(),Gt(Bn),Gt(Cn),Pu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(So(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,di!==null&&(ac(di),di=null))),Ku(t,i),Pn(i),null;case 5:Cu(i);var f=kr(Sa.current);if(a=i.type,t!==null&&i.stateNode!=null)qh(t,i,a,u,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return Pn(i),null}if(t=kr(bi.current),So(i)){u=i.stateNode,a=i.type;var h=i.memoizedProps;switch(u[Ci]=i,u[ma]=h,t=(i.mode&1)!==0,a){case"dialog":Ht("cancel",u),Ht("close",u);break;case"iframe":case"object":case"embed":Ht("load",u);break;case"video":case"audio":for(f=0;f<da.length;f++)Ht(da[f],u);break;case"source":Ht("error",u);break;case"img":case"image":case"link":Ht("error",u),Ht("load",u);break;case"details":Ht("toggle",u);break;case"input":Dt(u,h),Ht("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!h.multiple},Ht("invalid",u);break;case"textarea":en(u,h),Ht("invalid",u)}ge(a,h),f=null;for(var E in h)if(h.hasOwnProperty(E)){var I=h[E];E==="children"?typeof I=="string"?u.textContent!==I&&(h.suppressHydrationWarning!==!0&&fo(u.textContent,I,t),f=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(h.suppressHydrationWarning!==!0&&fo(u.textContent,I,t),f=["children",""+I]):o.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Ht("scroll",u)}switch(a){case"input":tt(u),Ft(u,h,!0);break;case"textarea":tt(u),$t(u);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(u.onclick=ho)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=At(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=E.createElement(a,{is:u.is}):(t=E.createElement(a),a==="select"&&(E=t,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):t=E.createElementNS(t,a),t[Ci]=i,t[ma]=u,Yh(t,i,!1,!1),i.stateNode=t;e:{switch(E=Ce(a,u),a){case"dialog":Ht("cancel",t),Ht("close",t),f=u;break;case"iframe":case"object":case"embed":Ht("load",t),f=u;break;case"video":case"audio":for(f=0;f<da.length;f++)Ht(da[f],t);f=u;break;case"source":Ht("error",t),f=u;break;case"img":case"image":case"link":Ht("error",t),Ht("load",t),f=u;break;case"details":Ht("toggle",t),f=u;break;case"input":Dt(t,u),f=nt(t,u),Ht("invalid",t);break;case"option":f=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},f=K({},u,{value:void 0}),Ht("invalid",t);break;case"textarea":en(t,u),f=qt(t,u),Ht("invalid",t);break;default:f=u}ge(a,f),I=f;for(h in I)if(I.hasOwnProperty(h)){var G=I[h];h==="style"?ie(t,G):h==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&Vt(t,G)):h==="children"?typeof G=="string"?(a!=="textarea"||G!=="")&&et(t,G):typeof G=="number"&&et(t,""+G):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?G!=null&&h==="onScroll"&&Ht("scroll",t):G!=null&&F(t,h,G,E))}switch(a){case"input":tt(t),Ft(t,u,!1);break;case"textarea":tt(t),$t(t);break;case"option":u.value!=null&&t.setAttribute("value",""+_e(u.value));break;case"select":t.multiple=!!u.multiple,h=u.value,h!=null?sn(t,!!u.multiple,h,!1):u.defaultValue!=null&&sn(t,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=ho)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Pn(i),null;case 6:if(t&&i.stateNode!=null)$h(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(a=kr(Sa.current),kr(bi.current),So(i)){if(u=i.stateNode,a=i.memoizedProps,u[Ci]=i,(h=u.nodeValue!==a)&&(t=$n,t!==null))switch(t.tag){case 3:fo(u.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fo(u.nodeValue,a,(t.mode&1)!==0)}h&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Ci]=i,i.stateNode=u}return Pn(i),null;case 13:if(Gt(Zt),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Yt&&Kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)jd(),vs(),i.flags|=98560,h=!1;else if(h=So(i),u!==null&&u.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Ci]=i}else vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Pn(i),h=!1}else di!==null&&(ac(di),di=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Zt.current&1)!==0?pn===0&&(pn=3):uc())),i.updateQueue!==null&&(i.flags|=4),Pn(i),null);case 4:return ys(),Ku(t,i),t===null&&ha(i.stateNode.containerInfo),Pn(i),null;case 10:return Eu(i.type._context),Pn(i),null;case 17:return kn(i.type)&&mo(),Pn(i),null;case 19:if(Gt(Zt),h=i.memoizedState,h===null)return Pn(i),null;if(u=(i.flags&128)!==0,E=h.rendering,E===null)if(u)wa(h,!1);else{if(pn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Ao(t),E!==null){for(i.flags|=128,wa(h,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)h=a,t=u,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return zt(Zt,Zt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Wt()>As&&(i.flags|=128,u=!0,wa(h,!1),i.lanes=4194304)}else{if(!u)if(t=Ao(E),t!==null){if(i.flags|=128,u=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),wa(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Yt)return Pn(i),null}else 2*Wt()-h.renderingStartTime>As&&a!==1073741824&&(i.flags|=128,u=!0,wa(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(a=h.last,a!==null?a.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Wt(),i.sibling=null,a=Zt.current,zt(Zt,u?a&1|2:a&1),i):(Pn(i),null);case 22:case 23:return lc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Zn&1073741824)!==0&&(Pn(i),i.subtreeFlags&6&&(i.flags|=8192)):Pn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function P0(t,i){switch(_u(i),i.tag){case 1:return kn(i.type)&&mo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ys(),Gt(Bn),Gt(Cn),Pu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Cu(i),null;case 13:if(Gt(Zt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));vs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Gt(Zt),null;case 4:return ys(),null;case 10:return Eu(i.type._context),null;case 22:case 23:return lc(),null;case 24:return null;default:return null}}var Uo=!1,Ln=!1,L0=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Ts(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){nn(t,i,u)}else a.current=null}function Zu(t,i,a){try{a()}catch(u){nn(t,i,u)}}var Kh=!1;function N0(t,i){if(lu=eo,t=Rd(),eu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var f=u.anchorOffset,h=u.focusNode;u=u.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var E=0,I=-1,G=-1,ue=0,xe=0,Te=t,ve=null;t:for(;;){for(var ze;Te!==a||f!==0&&Te.nodeType!==3||(I=E+f),Te!==h||u!==0&&Te.nodeType!==3||(G=E+u),Te.nodeType===3&&(E+=Te.nodeValue.length),(ze=Te.firstChild)!==null;)ve=Te,Te=ze;for(;;){if(Te===t)break t;if(ve===a&&++ue===f&&(I=E),ve===h&&++xe===u&&(G=E),(ze=Te.nextSibling)!==null)break;Te=ve,ve=Te.parentNode}Te=ze}a=I===-1||G===-1?null:{start:I,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(uu={focusedElem:t,selectionRange:a},eo=!1,Ge=i;Ge!==null;)if(i=Ge,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ge=t;else for(;Ge!==null;){i=Ge;try{var Ye=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var qe=Ye.memoizedProps,on=Ye.memoizedState,re=i.stateNode,Y=re.getSnapshotBeforeUpdate(i.elementType===i.type?qe:hi(i.type,qe),on);re.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var le=i.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Re){nn(i,i.return,Re)}if(t=i.sibling,t!==null){t.return=i.return,Ge=t;break}Ge=i.return}return Ye=Kh,Kh=!1,Ye}function Aa(t,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&Zu(i,a,h)}f=f.next}while(f!==u)}}function Fo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function ju(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function Zh(t){var i=t.alternate;i!==null&&(t.alternate=null,Zh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Ci],delete i[ma],delete i[hu],delete i[p0],delete i[m0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jh(t){return t.tag===5||t.tag===3||t.tag===4}function Qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qu(t,i,a){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ho));else if(u!==4&&(t=t.child,t!==null))for(Qu(t,i,a),t=t.sibling;t!==null;)Qu(t,i,a),t=t.sibling}function Ju(t,i,a){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Ju(t,i,a),t=t.sibling;t!==null;)Ju(t,i,a),t=t.sibling}var En=null,pi=!1;function mr(t,i,a){for(a=a.child;a!==null;)Jh(t,i,a),a=a.sibling}function Jh(t,i,a){if(oe&&typeof oe.onCommitFiberUnmount=="function")try{oe.onCommitFiberUnmount(z,a)}catch{}switch(a.tag){case 5:Ln||Ts(a,i);case 6:var u=En,f=pi;En=null,mr(t,i,a),En=u,pi=f,En!==null&&(pi?(t=En,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):En.removeChild(a.stateNode));break;case 18:En!==null&&(pi?(t=En,a=a.stateNode,t.nodeType===8?du(t.parentNode,a):t.nodeType===1&&du(t,a),ra(t)):du(En,a.stateNode));break;case 4:u=En,f=pi,En=a.stateNode.containerInfo,pi=!0,mr(t,i,a),En=u,pi=f;break;case 0:case 11:case 14:case 15:if(!Ln&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var h=f,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&Zu(a,i,E),f=f.next}while(f!==u)}mr(t,i,a);break;case 1:if(!Ln&&(Ts(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(I){nn(a,i,I)}mr(t,i,a);break;case 21:mr(t,i,a);break;case 22:a.mode&1?(Ln=(u=Ln)||a.memoizedState!==null,mr(t,i,a),Ln=u):mr(t,i,a);break;default:mr(t,i,a)}}function ep(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new L0),i.forEach(function(u){var f=H0.bind(null,t,u);a.has(u)||(a.add(u),u.then(f,f))})}}function mi(t,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var f=a[u];try{var h=t,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:En=I.stateNode,pi=!1;break e;case 3:En=I.stateNode.containerInfo,pi=!0;break e;case 4:En=I.stateNode.containerInfo,pi=!0;break e}I=I.return}if(En===null)throw Error(n(160));Jh(h,E,f),En=null,pi=!1;var G=f.alternate;G!==null&&(G.return=null),f.return=null}catch(ue){nn(f,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)tp(i,t),i=i.sibling}function tp(t,i){var a=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mi(i,t),Li(t),u&4){try{Aa(3,t,t.return),Fo(3,t)}catch(qe){nn(t,t.return,qe)}try{Aa(5,t,t.return)}catch(qe){nn(t,t.return,qe)}}break;case 1:mi(i,t),Li(t),u&512&&a!==null&&Ts(a,a.return);break;case 5:if(mi(i,t),Li(t),u&512&&a!==null&&Ts(a,a.return),t.flags&32){var f=t.stateNode;try{et(f,"")}catch(qe){nn(t,t.return,qe)}}if(u&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,E=a!==null?a.memoizedProps:h,I=t.type,G=t.updateQueue;if(t.updateQueue=null,G!==null)try{I==="input"&&h.type==="radio"&&h.name!=null&&Bt(f,h),Ce(I,E);var ue=Ce(I,h);for(E=0;E<G.length;E+=2){var xe=G[E],Te=G[E+1];xe==="style"?ie(f,Te):xe==="dangerouslySetInnerHTML"?Vt(f,Te):xe==="children"?et(f,Te):F(f,xe,Te,ue)}switch(I){case"input":Jt(f,h);break;case"textarea":q(f,h);break;case"select":var ve=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var ze=h.value;ze!=null?sn(f,!!h.multiple,ze,!1):ve!==!!h.multiple&&(h.defaultValue!=null?sn(f,!!h.multiple,h.defaultValue,!0):sn(f,!!h.multiple,h.multiple?[]:"",!1))}f[ma]=h}catch(qe){nn(t,t.return,qe)}}break;case 6:if(mi(i,t),Li(t),u&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(qe){nn(t,t.return,qe)}}break;case 3:if(mi(i,t),Li(t),u&4&&a!==null&&a.memoizedState.isDehydrated)try{ra(i.containerInfo)}catch(qe){nn(t,t.return,qe)}break;case 4:mi(i,t),Li(t);break;case 13:mi(i,t),Li(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(nc=Wt())),u&4&&ep(t);break;case 22:if(xe=a!==null&&a.memoizedState!==null,t.mode&1?(Ln=(ue=Ln)||xe,mi(i,t),Ln=ue):mi(i,t),Li(t),u&8192){if(ue=t.memoizedState!==null,(t.stateNode.isHidden=ue)&&!xe&&(t.mode&1)!==0)for(Ge=t,xe=t.child;xe!==null;){for(Te=Ge=xe;Ge!==null;){switch(ve=Ge,ze=ve.child,ve.tag){case 0:case 11:case 14:case 15:Aa(4,ve,ve.return);break;case 1:Ts(ve,ve.return);var Ye=ve.stateNode;if(typeof Ye.componentWillUnmount=="function"){u=ve,a=ve.return;try{i=u,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch(qe){nn(u,a,qe)}}break;case 5:Ts(ve,ve.return);break;case 22:if(ve.memoizedState!==null){rp(Te);continue}}ze!==null?(ze.return=ve,Ge=ze):rp(Te)}xe=xe.sibling}e:for(xe=null,Te=t;;){if(Te.tag===5){if(xe===null){xe=Te;try{f=Te.stateNode,ue?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(I=Te.stateNode,G=Te.memoizedProps.style,E=G!=null&&G.hasOwnProperty("display")?G.display:null,I.style.display=w("display",E))}catch(qe){nn(t,t.return,qe)}}}else if(Te.tag===6){if(xe===null)try{Te.stateNode.nodeValue=ue?"":Te.memoizedProps}catch(qe){nn(t,t.return,qe)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===t)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===t)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===t)break e;xe===Te&&(xe=null),Te=Te.return}xe===Te&&(xe=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:mi(i,t),Li(t),u&4&&ep(t);break;case 21:break;default:mi(i,t),Li(t)}}function Li(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(jh(a)){var u=a;break e}a=a.return}throw Error(n(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(et(f,""),u.flags&=-33);var h=Qh(t);Ju(t,h,f);break;case 3:case 4:var E=u.stateNode.containerInfo,I=Qh(t);Qu(t,I,E);break;default:throw Error(n(161))}}catch(G){nn(t,t.return,G)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function D0(t,i,a){Ge=t,np(t)}function np(t,i,a){for(var u=(t.mode&1)!==0;Ge!==null;){var f=Ge,h=f.child;if(f.tag===22&&u){var E=f.memoizedState!==null||Uo;if(!E){var I=f.alternate,G=I!==null&&I.memoizedState!==null||Ln;I=Uo;var ue=Ln;if(Uo=E,(Ln=G)&&!ue)for(Ge=f;Ge!==null;)E=Ge,G=E.child,E.tag===22&&E.memoizedState!==null?sp(f):G!==null?(G.return=E,Ge=G):sp(f);for(;h!==null;)Ge=h,np(h),h=h.sibling;Ge=f,Uo=I,Ln=ue}ip(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,Ge=h):ip(t)}}function ip(t){for(;Ge!==null;){var i=Ge;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ln||Fo(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Ln)if(a===null)u.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:hi(i.type,a.memoizedProps);u.componentDidUpdate(f,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&rh(i,h,u);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}rh(i,E,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var G=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&a.focus();break;case"img":G.src&&(a.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var xe=ue.memoizedState;if(xe!==null){var Te=xe.dehydrated;Te!==null&&ra(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Ln||i.flags&512&&ju(i)}catch(ve){nn(i,i.return,ve)}}if(i===t){Ge=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function rp(t){for(;Ge!==null;){var i=Ge;if(i===t){Ge=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function sp(t){for(;Ge!==null;){var i=Ge;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Fo(4,i)}catch(G){nn(i,a,G)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(G){nn(i,f,G)}}var h=i.return;try{ju(i)}catch(G){nn(i,h,G)}break;case 5:var E=i.return;try{ju(i)}catch(G){nn(i,E,G)}}}catch(G){nn(i,i.return,G)}if(i===t){Ge=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ge=I;break}Ge=i.return}}var I0=Math.ceil,Oo=P.ReactCurrentDispatcher,ec=P.ReactCurrentOwner,si=P.ReactCurrentBatchConfig,wt=0,xn=null,un=null,Tn=0,Zn=0,ws=cr(0),pn=0,Ra=null,Hr=0,Bo=0,tc=0,Ca=null,Hn=null,nc=0,As=1/0,qi=null,ko=!1,ic=null,gr=null,zo=!1,_r=null,Ho=0,ba=0,rc=null,Go=-1,Vo=0;function Fn(){return(wt&6)!==0?Wt():Go!==-1?Go:Go=Wt()}function vr(t){return(t.mode&1)===0?1:(wt&2)!==0&&Tn!==0?Tn&-Tn:_0.transition!==null?(Vo===0&&(Vo=It()),Vo):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:od(t.type)),t)}function gi(t,i,a,u){if(50<ba)throw ba=0,rc=null,Error(n(185));tn(t,a,u),((wt&2)===0||t!==xn)&&(t===xn&&((wt&2)===0&&(Bo|=a),pn===4&&xr(t,Tn)),Gn(t,u),a===1&&wt===0&&(i.mode&1)===0&&(As=Wt()+500,_o&&dr()))}function Gn(t,i){var a=t.callbackNode;gt(t,i);var u=pt(t,t===xn?Tn:0);if(u===0)a!==null&&Js(a),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(a!=null&&Js(a),i===1)t.tag===0?g0(op.bind(null,t)):Yd(op.bind(null,t)),d0(function(){(wt&6)===0&&dr()}),a=null;else{switch(Ai(u)){case 1:a=ea;break;case 4:a=ja;break;case 16:a=ss;break;case 536870912:a=A;break;default:a=ss}a=mp(a,ap.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function ap(t,i){if(Go=-1,Vo=0,(wt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Rs()&&t.callbackNode!==a)return null;var u=pt(t,t===xn?Tn:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=Wo(t,u);else{i=u;var f=wt;wt|=2;var h=up();(xn!==t||Tn!==i)&&(qi=null,As=Wt()+500,Vr(t,i));do try{O0();break}catch(I){lp(t,I)}while(!0);yu(),Oo.current=h,wt=f,un!==null?i=0:(xn=null,Tn=0,i=pn)}if(i!==0){if(i===2&&(f=Xt(t),f!==0&&(u=f,i=sc(t,f))),i===1)throw a=Ra,Vr(t,0),xr(t,u),Gn(t,Wt()),a;if(i===6)xr(t,u);else{if(f=t.current.alternate,(u&30)===0&&!U0(f)&&(i=Wo(t,u),i===2&&(h=Xt(t),h!==0&&(u=h,i=sc(t,h))),i===1))throw a=Ra,Vr(t,0),xr(t,u),Gn(t,Wt()),a;switch(t.finishedWork=f,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:Wr(t,Hn,qi);break;case 3:if(xr(t,u),(u&130023424)===u&&(i=nc+500-Wt(),10<i)){if(pt(t,0)!==0)break;if(f=t.suspendedLanes,(f&u)!==u){Fn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=fu(Wr.bind(null,t,Hn,qi),i);break}Wr(t,Hn,qi);break;case 4:if(xr(t,u),(u&4194240)===u)break;for(i=t.eventTimes,f=-1;0<u;){var E=31-J(u);h=1<<E,E=i[E],E>f&&(f=E),u&=~h}if(u=f,u=Wt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*I0(u/1960))-u,10<u){t.timeoutHandle=fu(Wr.bind(null,t,Hn,qi),u);break}Wr(t,Hn,qi);break;case 5:Wr(t,Hn,qi);break;default:throw Error(n(329))}}}return Gn(t,Wt()),t.callbackNode===a?ap.bind(null,t):null}function sc(t,i){var a=Ca;return t.current.memoizedState.isDehydrated&&(Vr(t,i).flags|=256),t=Wo(t,i),t!==2&&(i=Hn,Hn=a,i!==null&&ac(i)),t}function ac(t){Hn===null?Hn=t:Hn.push.apply(Hn,t)}function U0(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var f=a[u],h=f.getSnapshot;f=f.value;try{if(!fi(h(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function xr(t,i){for(i&=~tc,i&=~Bo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-J(i),u=1<<a;t[a]=-1,i&=~u}}function op(t){if((wt&6)!==0)throw Error(n(327));Rs();var i=pt(t,0);if((i&1)===0)return Gn(t,Wt()),null;var a=Wo(t,i);if(t.tag!==0&&a===2){var u=Xt(t);u!==0&&(i=u,a=sc(t,u))}if(a===1)throw a=Ra,Vr(t,0),xr(t,i),Gn(t,Wt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Wr(t,Hn,qi),Gn(t,Wt()),null}function oc(t,i){var a=wt;wt|=1;try{return t(i)}finally{wt=a,wt===0&&(As=Wt()+500,_o&&dr())}}function Gr(t){_r!==null&&_r.tag===0&&(wt&6)===0&&Rs();var i=wt;wt|=1;var a=si.transition,u=Ke;try{if(si.transition=null,Ke=1,t)return t()}finally{Ke=u,si.transition=a,wt=i,(wt&6)===0&&dr()}}function lc(){Zn=ws.current,Gt(ws)}function Vr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,f0(a)),un!==null)for(a=un.return;a!==null;){var u=a;switch(_u(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&mo();break;case 3:ys(),Gt(Bn),Gt(Cn),Pu();break;case 5:Cu(u);break;case 4:ys();break;case 13:Gt(Zt);break;case 19:Gt(Zt);break;case 10:Eu(u.type._context);break;case 22:case 23:lc()}a=a.return}if(xn=t,un=t=Sr(t.current,null),Tn=Zn=i,pn=0,Ra=null,tc=Bo=Hr=0,Hn=Ca=null,Br!==null){for(i=0;i<Br.length;i++)if(a=Br[i],u=a.interleaved,u!==null){a.interleaved=null;var f=u.next,h=a.pending;if(h!==null){var E=h.next;h.next=f,u.next=E}a.pending=u}Br=null}return t}function lp(t,i){do{var a=un;try{if(yu(),Ro.current=Lo,Co){for(var u=jt.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}Co=!1}if(zr=0,vn=hn=jt=null,Ma=!1,ya=0,ec.current=null,a===null||a.return===null){pn=1,Ra=i,un=null;break}e:{var h=t,E=a.return,I=a,G=i;if(i=Tn,I.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var ue=G,xe=I,Te=xe.tag;if((xe.mode&1)===0&&(Te===0||Te===11||Te===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var ze=Dh(E);if(ze!==null){ze.flags&=-257,Ih(ze,E,I,h,i),ze.mode&1&&Nh(h,ue,i),i=ze,G=ue;var Ye=i.updateQueue;if(Ye===null){var qe=new Set;qe.add(G),i.updateQueue=qe}else Ye.add(G);break e}else{if((i&1)===0){Nh(h,ue,i),uc();break e}G=Error(n(426))}}else if(Yt&&I.mode&1){var on=Dh(E);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),Ih(on,E,I,h,i),Su(Es(G,I));break e}}h=G=Es(G,I),pn!==4&&(pn=2),Ca===null?Ca=[h]:Ca.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var re=Ph(h,G,i);ih(h,re);break e;case 1:I=G;var Y=h.type,le=h.stateNode;if((h.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(gr===null||!gr.has(le)))){h.flags|=65536,i&=-i,h.lanes|=i;var Re=Lh(h,I,i);ih(h,Re);break e}}h=h.return}while(h!==null)}fp(a)}catch(Ze){i=Ze,un===a&&a!==null&&(un=a=a.return);continue}break}while(!0)}function up(){var t=Oo.current;return Oo.current=Lo,t===null?Lo:t}function uc(){(pn===0||pn===3||pn===2)&&(pn=4),xn===null||(Hr&268435455)===0&&(Bo&268435455)===0||xr(xn,Tn)}function Wo(t,i){var a=wt;wt|=2;var u=up();(xn!==t||Tn!==i)&&(qi=null,Vr(t,i));do try{F0();break}catch(f){lp(t,f)}while(!0);if(yu(),wt=a,Oo.current=u,un!==null)throw Error(n(261));return xn=null,Tn=0,pn}function F0(){for(;un!==null;)cp(un)}function O0(){for(;un!==null&&!Dr();)cp(un)}function cp(t){var i=pp(t.alternate,t,Zn);t.memoizedProps=t.pendingProps,i===null?fp(t):un=i,ec.current=null}function fp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=b0(a,i,Zn),a!==null){un=a;return}}else{if(a=P0(a,i),a!==null){a.flags&=32767,un=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pn=6,un=null;return}}if(i=i.sibling,i!==null){un=i;return}un=i=t}while(i!==null);pn===0&&(pn=5)}function Wr(t,i,a){var u=Ke,f=si.transition;try{si.transition=null,Ke=1,B0(t,i,a,u)}finally{si.transition=f,Ke=u}return null}function B0(t,i,a,u){do Rs();while(_r!==null);if((wt&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=a.lanes|a.childLanes;if(Xe(t,h),t===xn&&(un=xn=null,Tn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||zo||(zo=!0,mp(ss,function(){return Rs(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=si.transition,si.transition=null;var E=Ke;Ke=1;var I=wt;wt|=4,ec.current=null,N0(t,a),tp(a,t),r0(uu),eo=!!lu,uu=lu=null,t.current=a,D0(a),Gl(),wt=I,Ke=E,si.transition=h}else t.current=a;if(zo&&(zo=!1,_r=t,Ho=f),h=t.pendingLanes,h===0&&(gr=null),ne(a.stateNode),Gn(t,Wt()),i!==null)for(u=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],u(f.value,{componentStack:f.stack,digest:f.digest});if(ko)throw ko=!1,t=ic,ic=null,t;return(Ho&1)!==0&&t.tag!==0&&Rs(),h=t.pendingLanes,(h&1)!==0?t===rc?ba++:(ba=0,rc=t):ba=0,dr(),null}function Rs(){if(_r!==null){var t=Ai(Ho),i=si.transition,a=Ke;try{if(si.transition=null,Ke=16>t?16:t,_r===null)var u=!1;else{if(t=_r,_r=null,Ho=0,(wt&6)!==0)throw Error(n(331));var f=wt;for(wt|=4,Ge=t.current;Ge!==null;){var h=Ge,E=h.child;if((Ge.flags&16)!==0){var I=h.deletions;if(I!==null){for(var G=0;G<I.length;G++){var ue=I[G];for(Ge=ue;Ge!==null;){var xe=Ge;switch(xe.tag){case 0:case 11:case 15:Aa(8,xe,h)}var Te=xe.child;if(Te!==null)Te.return=xe,Ge=Te;else for(;Ge!==null;){xe=Ge;var ve=xe.sibling,ze=xe.return;if(Zh(xe),xe===ue){Ge=null;break}if(ve!==null){ve.return=ze,Ge=ve;break}Ge=ze}}}var Ye=h.alternate;if(Ye!==null){var qe=Ye.child;if(qe!==null){Ye.child=null;do{var on=qe.sibling;qe.sibling=null,qe=on}while(qe!==null)}}Ge=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,Ge=E;else e:for(;Ge!==null;){if(h=Ge,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Aa(9,h,h.return)}var re=h.sibling;if(re!==null){re.return=h.return,Ge=re;break e}Ge=h.return}}var Y=t.current;for(Ge=Y;Ge!==null;){E=Ge;var le=E.child;if((E.subtreeFlags&2064)!==0&&le!==null)le.return=E,Ge=le;else e:for(E=Y;Ge!==null;){if(I=Ge,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Fo(9,I)}}catch(Ze){nn(I,I.return,Ze)}if(I===E){Ge=null;break e}var Re=I.sibling;if(Re!==null){Re.return=I.return,Ge=Re;break e}Ge=I.return}}if(wt=f,dr(),oe&&typeof oe.onPostCommitFiberRoot=="function")try{oe.onPostCommitFiberRoot(z,t)}catch{}u=!0}return u}finally{Ke=a,si.transition=i}}return!1}function dp(t,i,a){i=Es(a,i),i=Ph(t,i,1),t=pr(t,i,1),i=Fn(),t!==null&&(tn(t,1,i),Gn(t,i))}function nn(t,i,a){if(t.tag===3)dp(t,t,a);else for(;i!==null;){if(i.tag===3){dp(i,t,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(gr===null||!gr.has(u))){t=Es(a,t),t=Lh(i,t,1),i=pr(i,t,1),t=Fn(),i!==null&&(tn(i,1,t),Gn(i,t));break}}i=i.return}}function k0(t,i,a){var u=t.pingCache;u!==null&&u.delete(i),i=Fn(),t.pingedLanes|=t.suspendedLanes&a,xn===t&&(Tn&a)===a&&(pn===4||pn===3&&(Tn&130023424)===Tn&&500>Wt()-nc?Vr(t,0):tc|=a),Gn(t,i)}function hp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ve,Ve<<=1,(Ve&130023424)===0&&(Ve=4194304)));var a=Fn();t=Wi(t,i),t!==null&&(tn(t,i,a),Gn(t,a))}function z0(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),hp(t,a)}function H0(t,i){var a=0;switch(t.tag){case 13:var u=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),hp(t,a)}var pp;pp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Bn.current)zn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return zn=!1,C0(t,i,a);zn=(t.flags&131072)!==0}else zn=!1,Yt&&(i.flags&1048576)!==0&&qd(i,xo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Io(t,i),t=i.pendingProps;var f=ms(i,Cn.current);Ms(i,a),f=Du(null,i,u,t,f,a);var h=Iu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,kn(u)?(h=!0,go(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Au(i),f.updater=No,i.stateNode=f,f._reactInternals=i,zu(i,u,t,a),i=Wu(null,i,u,!0,h,a)):(i.tag=0,Yt&&h&&gu(i),Un(null,i,f,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Io(t,i),t=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=V0(u),t=hi(u,t),f){case 0:i=Vu(null,i,u,t,a);break e;case 1:i=zh(null,i,u,t,a);break e;case 11:i=Uh(null,i,u,t,a);break e;case 14:i=Fh(null,i,u,hi(u.type,t),a);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:hi(u,f),Vu(t,i,u,f,a);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:hi(u,f),zh(t,i,u,f,a);case 3:e:{if(Hh(i),t===null)throw Error(n(387));u=i.pendingProps,h=i.memoizedState,f=h.element,nh(t,i),wo(i,u,null,a);var E=i.memoizedState;if(u=E.element,h.isDehydrated)if(h={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=Es(Error(n(423)),i),i=Gh(t,i,u,a,f);break e}else if(u!==f){f=Es(Error(n(424)),i),i=Gh(t,i,u,a,f);break e}else for(Kn=ur(i.stateNode.containerInfo.firstChild),$n=i,Yt=!0,di=null,a=eh(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(vs(),u===f){i=Yi(t,i,a);break e}Un(t,i,u,a)}i=i.child}return i;case 5:return sh(i),t===null&&xu(i),u=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,E=f.children,cu(u,f)?E=null:h!==null&&cu(u,h)&&(i.flags|=32),kh(t,i),Un(t,i,E,a),i.child;case 6:return t===null&&xu(i),null;case 13:return Vh(t,i,a);case 4:return Ru(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=xs(i,null,u,a):Un(t,i,u,a),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:hi(u,f),Uh(t,i,u,f,a);case 7:return Un(t,i,i.pendingProps,a),i.child;case 8:return Un(t,i,i.pendingProps.children,a),i.child;case 12:return Un(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,h=i.memoizedProps,E=f.value,zt(yo,u._currentValue),u._currentValue=E,h!==null)if(fi(h.value,E)){if(h.children===f.children&&!Bn.current){i=Yi(t,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var I=h.dependencies;if(I!==null){E=h.child;for(var G=I.firstContext;G!==null;){if(G.context===u){if(h.tag===1){G=Xi(-1,a&-a),G.tag=2;var ue=h.updateQueue;if(ue!==null){ue=ue.shared;var xe=ue.pending;xe===null?G.next=G:(G.next=xe.next,xe.next=G),ue.pending=G}}h.lanes|=a,G=h.alternate,G!==null&&(G.lanes|=a),Tu(h.return,a,i),I.lanes|=a;break}G=G.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=a,I=E.alternate,I!==null&&(I.lanes|=a),Tu(E,a,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}Un(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,Ms(i,a),f=ii(f),u=u(f),i.flags|=1,Un(t,i,u,a),i.child;case 14:return u=i.type,f=hi(u,i.pendingProps),f=hi(u.type,f),Fh(t,i,u,f,a);case 15:return Oh(t,i,i.type,i.pendingProps,a);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:hi(u,f),Io(t,i),i.tag=1,kn(u)?(t=!0,go(i)):t=!1,Ms(i,a),Ch(i,u,f),zu(i,u,f,a),Wu(null,i,u,!0,t,a);case 19:return Xh(t,i,a);case 22:return Bh(t,i,a)}throw Error(n(156,i.tag))};function mp(t,i){return Qs(t,i)}function G0(t,i,a,u){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(t,i,a,u){return new G0(t,i,a,u)}function cc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function V0(t){if(typeof t=="function")return cc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$)return 11;if(t===Z)return 14}return 2}function Sr(t,i){var a=t.alternate;return a===null?(a=ai(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Xo(t,i,a,u,f,h){var E=2;if(u=t,typeof t=="function")cc(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case M:return Xr(a.children,f,h,i);case R:E=8,f|=8;break;case W:return t=ai(12,a,i,f|2),t.elementType=W,t.lanes=h,t;case se:return t=ai(13,a,i,f),t.elementType=se,t.lanes=h,t;case k:return t=ai(19,a,i,f),t.elementType=k,t.lanes=h,t;case X:return Yo(a,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:E=10;break e;case V:E=9;break e;case $:E=11;break e;case Z:E=14;break e;case ae:E=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ai(E,a,i,f),i.elementType=t,i.type=u,i.lanes=h,i}function Xr(t,i,a,u){return t=ai(7,t,u,i),t.lanes=a,t}function Yo(t,i,a,u){return t=ai(22,t,u,i),t.elementType=X,t.lanes=a,t.stateNode={isHidden:!1},t}function fc(t,i,a){return t=ai(6,t,null,i),t.lanes=a,t}function dc(t,i,a){return i=ai(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function W0(t,i,a,u,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bt(0),this.expirationTimes=bt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function hc(t,i,a,u,f,h,E,I,G){return t=new W0(t,i,a,I,G),i===1?(i=1,h===!0&&(i|=8)):i=0,h=ai(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Au(h),t}function X0(t,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:u==null?null:""+u,children:t,containerInfo:i,implementation:a}}function gp(t){if(!t)return fr;t=t._reactInternals;e:{if(Ti(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(kn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(kn(a))return Wd(t,a,i)}return i}function _p(t,i,a,u,f,h,E,I,G){return t=hc(a,u,!0,t,f,h,E,I,G),t.context=gp(null),a=t.current,u=Fn(),f=vr(a),h=Xi(u,f),h.callback=i??null,pr(a,h,f),t.current.lanes=f,tn(t,f,u),Gn(t,u),t}function qo(t,i,a,u){var f=i.current,h=Fn(),E=vr(f);return a=gp(a),i.context===null?i.context=a:i.pendingContext=a,i=Xi(h,E),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=pr(f,i,E),t!==null&&(gi(t,f,E,h),To(t,f,E)),E}function $o(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function pc(t,i){vp(t,i),(t=t.alternate)&&vp(t,i)}function Y0(){return null}var xp=typeof reportError=="function"?reportError:function(t){console.error(t)};function mc(t){this._internalRoot=t}Ko.prototype.render=mc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));qo(t,i,null,null)},Ko.prototype.unmount=mc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Gr(function(){qo(null,t,null,null)}),i[zi]=null}};function Ko(t){this._internalRoot=t}Ko.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ri();t={blockedOn:null,target:t,priority:i};for(var a=0;a<ar.length&&i!==0&&i<ar[a].priority;a++);ar.splice(a,0,t),a===0&&sd(t)}};function gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sp(){}function q0(t,i,a,u,f){if(f){if(typeof u=="function"){var h=u;u=function(){var ue=$o(E);h.call(ue)}}var E=_p(i,u,t,0,null,!1,!1,"",Sp);return t._reactRootContainer=E,t[zi]=E.current,ha(t.nodeType===8?t.parentNode:t),Gr(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof u=="function"){var I=u;u=function(){var ue=$o(G);I.call(ue)}}var G=hc(t,0,!1,null,null,!1,!1,"",Sp);return t._reactRootContainer=G,t[zi]=G.current,ha(t.nodeType===8?t.parentNode:t),Gr(function(){qo(i,G,a,u)}),G}function jo(t,i,a,u,f){var h=a._reactRootContainer;if(h){var E=h;if(typeof f=="function"){var I=f;f=function(){var G=$o(E);I.call(G)}}qo(i,E,t,f)}else E=q0(a,i,t,f,u);return $o(E)}dn=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=ot(i.pendingLanes);a!==0&&(fn(i,a|1),Gn(i,Wt()),(wt&6)===0&&(As=Wt()+500,dr()))}break;case 13:Gr(function(){var u=Wi(t,1);if(u!==null){var f=Fn();gi(u,t,1,f)}}),pc(t,1)}},rr=function(t){if(t.tag===13){var i=Wi(t,134217728);if(i!==null){var a=Fn();gi(i,t,134217728,a)}pc(t,134217728)}},ci=function(t){if(t.tag===13){var i=vr(t),a=Wi(t,i);if(a!==null){var u=Fn();gi(a,t,i,u)}pc(t,i)}},Ri=function(){return Ke},St=function(t,i){var a=Ke;try{return Ke=t,i()}finally{Ke=a}},pe=function(t,i,a){switch(i){case"input":if(Jt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==t&&u.form===t.form){var f=po(u);if(!f)throw Error(n(90));lt(u),Jt(u,f)}}}break;case"textarea":q(t,a);break;case"select":i=a.value,i!=null&&sn(t,!!a.multiple,i,!1)}},we=oc,be=Gr;var $0={usingClientEntryPoint:!1,Events:[ga,hs,po,fe,Pe,oc]},Pa={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},K0={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=js(t),t===null?null:t.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||Y0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{z=Qo.inject(K0),oe=Qo}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$0,Vn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gc(i))throw Error(n(200));return X0(t,i,null,a)},Vn.createRoot=function(t,i){if(!gc(t))throw Error(n(299));var a=!1,u="",f=xp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=hc(t,1,!1,null,null,a,!1,u,f),t[zi]=i.current,ha(t.nodeType===8?t.parentNode:t),new mc(i)},Vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=js(i),t=t===null?null:t.stateNode,t},Vn.flushSync=function(t){return Gr(t)},Vn.hydrate=function(t,i,a){if(!Zo(i))throw Error(n(200));return jo(null,t,i,!0,a)},Vn.hydrateRoot=function(t,i,a){if(!gc(t))throw Error(n(405));var u=a!=null&&a.hydratedSources||null,f=!1,h="",E=xp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=_p(i,null,t,1,a??null,f,!1,h,E),t[zi]=i.current,ha(t),u)for(t=0;t<u.length;t++)a=u[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new Ko(i)},Vn.render=function(t,i,a){if(!Zo(i))throw Error(n(200));return jo(null,t,i,!1,a)},Vn.unmountComponentAtNode=function(t){if(!Zo(t))throw Error(n(40));return t._reactRootContainer?(Gr(function(){jo(null,null,t,!1,function(){t._reactRootContainer=null,t[zi]=null})}),!0):!1},Vn.unstable_batchedUpdates=oc,Vn.unstable_renderSubtreeIntoContainer=function(t,i,a,u){if(!Zo(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return jo(t,i,a,!1,u)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var Cp;function a_(){if(Cp)return xc.exports;Cp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),xc.exports=s_(),xc.exports}var bp;function o_(){if(bp)return Jo;bp=1;var s=a_();return Jo.createRoot=s.createRoot,Jo.hydrateRoot=s.hydrateRoot,Jo}var l_=o_();const u_=Cm(l_),c_="/assets/couple-Cihbu-jl.webp",f_="/assets/ganesha_sanctum-BSTvzxni.jpg",d_="/assets/interior-BZm6TDmi.webp",h_="/assets/facade-vJ4Xx-re.webp",p_="/assets/door-left-CvJlBkVO.webp",m_="/assets/door-right-z8SVD5jJ.webp",g_=({progress:s=0,opacity:e=1,px:n=0,py:r=0,reducedMotion:o=!1})=>{const l=st.useRef(null),c=st.useRef(null),d=st.useRef(null),p=st.useRef(null),m=st.useRef(null),_=st.useRef(null),S=st.useRef(null),g=st.useRef(null),y=st.useRef(null),T=st.useRef(null),C=st.useRef(null),v=st.useRef(null),x=st.useRef(null),b=st.useRef(null),F=st.useRef(null),P=st.useRef(null),U=st.useRef(null),D=st.useRef(null);st.useEffect(()=>{const R=()=>{if(!l.current)return;const W=Math.max(window.innerWidth/1920,window.innerHeight/1080);l.current.style.setProperty("--s",W.toString())};return R(),window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[]);const M=st.useRef({mx:0,my:0,tmx:0,tmy:0});return st.useEffect(()=>{if(o)return;const R=O=>{M.current.tmx=(O.clientX/window.innerWidth-.5)*2,M.current.tmy=(O.clientY/window.innerHeight-.5)*2},W=O=>{O.gamma!==null&&O.beta!==null&&(M.current.tmx=Math.max(-1,Math.min(1,O.gamma/22)),M.current.tmy=Math.max(-1,Math.min(1,(O.beta-45)/22)))};return window.addEventListener("pointermove",R,{passive:!0}),window.DeviceOrientationEvent&&window.addEventListener("deviceorientation",W,{passive:!0}),()=>{window.removeEventListener("pointermove",R),window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",W)}},[o]),st.useEffect(()=>{const R=c.current;if(!R)return;const W=R.getContext("2d");if(!W)return;const O=55,V=Array.from({length:O},()=>{const H=.25+Math.random()*1.95;return{x:Math.random()*1920,y:Math.random()*1080,z:H,baseZ:H,radius:H>1.7?4.5+Math.random()*3.5:H>.9?2.5+Math.random()*2:1.2+Math.random()*1.4,speedY:-(.18+Math.random()*.42),speedX:(Math.random()-.5)*.22,phase:Math.random()*Math.PI*2,twinkleSpeed:1.6+Math.random()*2.4,isPetal:Math.random()<.25,isSaffron:Math.random()<.35,petalAngle:Math.random()*Math.PI,petalRotSpeed:(Math.random()-.5)*.025}});let $,se=performance.now();const k=(H,K=0,L=1)=>Math.min(L,Math.max(K,H)),Z=(H,K,L)=>k((H-K)/(L-K)),ae=H=>H*H*(3-2*H),X=H=>H<.5?4*H*H*H:1-Math.pow(-2*H+2,3)/2,j=H=>{const K=Math.min(.05,(H-se)/1e3);se=H;const L=H/1e3,te=o?1:1-Math.exp(-K*5);M.current.mx+=(M.current.tmx-M.current.mx)*te,M.current.my+=(M.current.tmy-M.current.my)*te;const Se=n!==0?n:M.current.mx,ee=r!==0?r:M.current.my,de=s;if(l.current&&!o){const lt=(-ee*2.5).toFixed(2),je=(Se*3.5).toFixed(2);l.current.style.transform=`scale(var(--s,1)) rotateX(${lt}deg) rotateY(${je}deg)`}const Me=de<.45;if(x.current&&(x.current.style.visibility=Me?"visible":"hidden",Me)){const lt=1+1.55*ae(Z(de,0,.35)),je=-140*ae(Z(de,.05,.35)),nt=-Se*44,Dt=-ee*28+je,Bt=1-ae(Z(de,.2,.38));if(x.current.style.transform=`translate(${nt.toFixed(2)}px,${Dt.toFixed(2)}px) scale(${lt.toFixed(4)})`,x.current.style.opacity=Bt.toFixed(3),b.current&&F.current){const Jt=Math.sin(L*2.6)*1.8;b.current.style.transform=`rotate(${(Se*6+Jt).toFixed(2)}deg)`,F.current.style.transform=`rotate(${(Se*6+Math.sin(L*2.6+1.2)*1.8).toFixed(2)}deg)`}}const Ue=de<.52;if(_.current&&(_.current.style.visibility=Ue?"visible":"hidden",Ue)){const lt=1+ae(Z(de,0,.5))*3.9,je=1-Z(de,.28,.44);_.current.style.transform=`translate(${(-Se*24*je).toFixed(2)}px,${(-ee*16*je).toFixed(2)}px) scale(${lt.toFixed(4)})`;const nt=84*X(Z(de,.1,.3));if(d.current&&(d.current.style.transform=`rotateY(${nt.toFixed(2)}deg)`),p.current&&(p.current.style.transform=`rotateY(${(-nt).toFixed(2)}deg)`),m.current){const Dt=X(Z(de,.1,.3));m.current.style.transform=`scale(${Dt.toFixed(3)})`,m.current.style.opacity=(Dt*(1-Z(de,.34,.48))*.9).toFixed(3)}}const _e=.82+ae(Z(de,.08,.86))*2.4,ke=-53*ae(Z(de,.5,.9));if(S.current&&(S.current.style.transform=`translate(${(-Se*13).toFixed(2)}px,${(-ee*8+ke).toFixed(2)}px) scale(${_e.toFixed(4)})`),g.current){const lt=(_e*(.94+.06*ae(Z(de,.25,.85)))).toFixed(4);g.current.style.transform=`translate(${(-Se*6).toFixed(2)}px,${(-ee*4+ke*.88).toFixed(2)}px) scale(${lt})`}if(y.current){const lt=.96+ae(Z(de,.56,1))*.54,je=1-ae(Z(de,.88,.98)),nt=Math.sin(L*1.7)*3;y.current.style.transform=`translate(${(-Se*4).toFixed(2)}px,${(-ee*2.5+nt).toFixed(2)}px) scale(${lt.toFixed(4)})`,y.current.style.opacity=je.toFixed(3)}if(C.current){const lt=(L*2.8+Se*2).toFixed(2);C.current.style.transform=`translate(${(-Se*2.2).toFixed(2)}px,${(-ee*1.6).toFixed(2)}px) rotate(${lt}deg) scale(1.2)`,C.current.style.opacity=(ae(Z(de,.08,.28))*(1-ae(Z(de,.86,.98)))*.75).toFixed(3)}T.current&&(T.current.style.transform=`translate(${(-Se*2).toFixed(2)}px,${(-ee*1.5).toFixed(2)}px) scale(${(1+.7*ae(Z(de,.6,1))).toFixed(3)})`,T.current.style.opacity=(.78+.22*Z(de,.55,.9)).toFixed(3)),v.current&&(v.current.style.opacity=ae(Z(de,.82,.98)).toFixed(3)),P.current&&(P.current.style.opacity=(1-Z(de,0,.05)).toFixed(3));const vt=ae(Z(de,.64,.72))*(1-ae(Z(de,.8,.86)));U.current&&(U.current.style.opacity=vt.toFixed(3)),D.current&&(D.current.style.opacity=Math.max(vt,1-Z(de,0,.05)).toFixed(3)),W.clearRect(0,0,1920,1080);const tt=de*1.6;for(let lt=0;lt<O;lt++){const je=V[lt];let nt=(je.baseZ-tt)%2;nt<.15&&(nt+=2);const Dt=1/Math.max(.2,nt),Bt=-n*(nt*20),Jt=-r*(nt*14),Ft=Math.sin(L*.8+je.phase)*14+je.speedX*L*25%1920,An=Math.cos(L*.7+je.phase)*10+je.speedY*L*28%1080,kt=((je.x+Ft)%1920+1920)%1920,sn=((je.y+An)%1080+1080)%1080,qt=960+(kt-960+Bt)*(Dt*.48+.52),en=540+(sn-540+Jt)*(Dt*.48+.52);if(qt<-40||qt>1960||en<-40||en>1120)continue;const $t=(.65+.35*Math.sin(L*je.twinkleSpeed+je.phase))*k((nt-.15)/.4)*(1-ae(Z(de,.91,.99)));if($t<=.02)continue;const At=je.radius*(Dt*.5+.5);if(je.isPetal)je.petalAngle+=je.petalRotSpeed,W.save(),W.translate(qt,en),W.rotate(je.petalAngle),W.fillStyle=je.isSaffron?`rgba(255, 150, 40, ${$t.toFixed(3)})`:`rgba(255, 195, 70, ${$t.toFixed(3)})`,W.beginPath(),W.ellipse(0,0,At*1.8,At*.85,0,0,Math.PI*2),W.fill(),W.restore();else{const Tt=W.createRadialGradient(qt,en,0,qt,en,At*2.2),Le=je.isSaffron?`rgba(255, 230, 160, ${$t.toFixed(3)})`:`rgba(255, 250, 210, ${$t.toFixed(3)})`,Vt=je.isSaffron?`rgba(255, 140, 30, ${($t*.35).toFixed(3)})`:`rgba(255, 195, 60, ${($t*.35).toFixed(3)})`;Tt.addColorStop(0,Le),Tt.addColorStop(.45,Vt),Tt.addColorStop(1,"rgba(255, 170, 50, 0)"),W.fillStyle=Tt,W.beginPath(),W.arc(qt,en,At*2.2,0,Math.PI*2),W.fill()}}$=requestAnimationFrame(j)};return $=requestAnimationFrame(j),()=>cancelAnimationFrame($)},[s,o]),Q.jsxs("div",{className:"temple-stage",style:{opacity:e,visibility:e>0?"visible":"hidden"},"aria-label":"Temple entrance leading to the sacred sanctum",children:[Q.jsx("div",{className:"temple-viewport",children:Q.jsxs("div",{ref:l,className:"temple-world",children:[Q.jsxs("div",{ref:g,id:"deep",className:"temple-layer",children:[Q.jsx("div",{ref:C,id:"godrays"}),Q.jsx("div",{ref:T,id:"glow"}),Q.jsx("div",{className:"ganesha-sanctum-shrine",children:Q.jsx("img",{src:f_,alt:"Lord Ganesha Sanctum with Chandelier and Diyas",draggable:!1})}),Q.jsx("div",{ref:y,id:"couple",children:Q.jsx("img",{src:c_,alt:"Divine blessings",draggable:!1})})]}),Q.jsx("div",{ref:S,id:"interior",className:"temple-layer",children:Q.jsx("img",{src:d_,alt:"Temple hall with carved pillars and lamps",draggable:!1})}),Q.jsxs("div",{ref:_,id:"facade",className:"temple-layer",children:[Q.jsx("div",{ref:m,id:"door-spill"}),Q.jsx("img",{id:"wall",src:h_,alt:"Temple entrance with carved wooden doors",draggable:!1}),Q.jsx("div",{ref:d,id:"door-l",className:"door",children:Q.jsx("img",{src:p_,alt:"",draggable:!1})}),Q.jsx("div",{ref:p,id:"door-r",className:"door",children:Q.jsx("img",{src:m_,alt:"",draggable:!1})})]}),Q.jsx("canvas",{ref:c,id:"particles-canvas",className:"temple-layer",width:1920,height:1080}),Q.jsx("div",{ref:x,id:"foreground",className:"temple-layer",children:Q.jsxs("svg",{id:"toran-svg",viewBox:"0 0 1920 1080",preserveAspectRatio:"none","aria-hidden":"true",children:[Q.jsxs("defs",{children:[Q.jsxs("linearGradient",{id:"brass-grad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[Q.jsx("stop",{offset:"0%",stopColor:"#fff1c4"}),Q.jsx("stop",{offset:"35%",stopColor:"#d4982c"}),Q.jsx("stop",{offset:"70%",stopColor:"#9a6012"}),Q.jsx("stop",{offset:"100%",stopColor:"#f5d47a"})]}),Q.jsxs("linearGradient",{id:"marigold-orange",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[Q.jsx("stop",{offset:"0%",stopColor:"#ffb703"}),Q.jsx("stop",{offset:"60%",stopColor:"#fb8500"}),Q.jsx("stop",{offset:"100%",stopColor:"#d45b00"})]}),Q.jsxs("linearGradient",{id:"marigold-yellow",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[Q.jsx("stop",{offset:"0%",stopColor:"#fff07c"}),Q.jsx("stop",{offset:"60%",stopColor:"#ffbe0b"}),Q.jsx("stop",{offset:"100%",stopColor:"#e08e00"})]}),Q.jsxs("linearGradient",{id:"mango-leaf",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[Q.jsx("stop",{offset:"0%",stopColor:"#588157"}),Q.jsx("stop",{offset:"100%",stopColor:"#284b25"})]}),Q.jsx("filter",{id:"shadow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:Q.jsx("feDropShadow",{dx:"0",dy:"6",stdDeviation:"8",floodColor:"#140602",floodOpacity:"0.75"})})]}),Q.jsxs("g",{filter:"url(#shadow)",children:[Q.jsx("path",{d:"M0,0 L1920,0 L1920,18 L0,18 Z",fill:"url(#brass-grad)"}),Q.jsx("path",{d:"M0,18 Q240,95 480,22 Q720,105 960,25 Q1200,105 1440,22 Q1680,95 1920,18",fill:"none",stroke:"url(#marigold-orange)",strokeWidth:"22",strokeLinecap:"round",strokeDasharray:"1 14"}),Q.jsx("path",{d:"M0,18 Q240,95 480,22 Q720,105 960,25 Q1200,105 1440,22 Q1680,95 1920,18",fill:"none",stroke:"url(#marigold-yellow)",strokeWidth:"14",strokeLinecap:"round",strokeDasharray:"1 14"}),Q.jsx("path",{d:"M120,18 Q360,118 600,24 Q960,135 1320,24 Q1560,118 1800,18",fill:"none",stroke:"url(#marigold-orange)",strokeWidth:"18",strokeLinecap:"round",strokeDasharray:"1 13"}),Q.jsx("path",{d:"M120,18 Q360,118 600,24 Q960,135 1320,24 Q1560,118 1800,18",fill:"none",stroke:"url(#marigold-yellow)",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:"1 13"})]}),Q.jsxs("g",{id:"bell-assembly-l",filter:"url(#shadow)",children:[Q.jsx("path",{d:"M310,0 L310,180",stroke:"url(#brass-grad)",strokeWidth:"6",strokeDasharray:"12 4",strokeLinecap:"round"}),Q.jsxs("g",{ref:b,id:"bell-l",style:{transformOrigin:"310px 180px"},children:[Q.jsx("circle",{cx:"310",cy:"184",r:"9",fill:"none",stroke:"url(#brass-grad)",strokeWidth:"4"}),Q.jsx("path",{d:"M292,204 C292,188 300,185 310,185 C320,185 328,188 328,204 C328,228 340,240 344,248 L276,248 C280,240 292,228 292,204 Z",fill:"url(#brass-grad)"}),Q.jsx("ellipse",{cx:"310",cy:"248",rx:"35",ry:"8",fill:"url(#brass-grad)"}),Q.jsx("ellipse",{cx:"310",cy:"249",rx:"27",ry:"5",fill:"#422206"}),Q.jsx("circle",{cx:"310",cy:"260",r:"7",fill:"url(#brass-grad)"})]})]}),Q.jsxs("g",{id:"bell-assembly-r",filter:"url(#shadow)",children:[Q.jsx("path",{d:"M1610,0 L1610,180",stroke:"url(#brass-grad)",strokeWidth:"6",strokeDasharray:"12 4",strokeLinecap:"round"}),Q.jsxs("g",{ref:F,id:"bell-r",style:{transformOrigin:"1610px 180px"},children:[Q.jsx("circle",{cx:"1610",cy:"184",r:"9",fill:"none",stroke:"url(#brass-grad)",strokeWidth:"4"}),Q.jsx("path",{d:"M1592,204 C1592,188 1600,185 1610,185 C1620,185 1628,188 1628,204 C1628,228 1640,240 1644,248 L1576,248 C1580,240 1592,228 1592,204 Z",fill:"url(#brass-grad)"}),Q.jsx("ellipse",{cx:"1610",cy:"248",rx:"35",ry:"8",fill:"url(#brass-grad)"}),Q.jsx("ellipse",{cx:"1610",cy:"249",rx:"27",ry:"5",fill:"#422206"}),Q.jsx("circle",{cx:"1610",cy:"260",r:"7",fill:"url(#brass-grad)"})]})]})]})}),Q.jsx("div",{ref:v,id:"bloom",className:"temple-layer"})]})}),Q.jsx("div",{id:"vignette"}),Q.jsx("div",{ref:D,id:"scrim"}),Q.jsxs("p",{ref:P,id:"temple-hint",className:"temple-caption",children:[Q.jsx("span",{children:"Scroll to enter the temple"}),Q.jsx("b",{className:"line"})]}),Q.jsx("p",{ref:U,id:"temple-blessing",className:"temple-caption",children:"With the divine blessings of Lord Ganesha"})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hf="187",__=0,Pp=1,v_=2,yl=1,x_=2,Oa=3,jr=0,Xn=1,Ji=2,Gs=0,ka=1,Lp=2,Np=3,Dp=4,S_=5,Hs=100,M_=101,y_=102,E_=103,T_=104,w_=200,A_=201,R_=202,C_=203,bm=204,Pm=205,b_=206,P_=207,L_=208,N_=209,D_=210,I_=211,U_=212,F_=213,O_=214,jc=0,Qc=1,Jc=2,za=3,ef=4,tf=5,nf=6,rf=7,Lm=0,B_=1,k_=2,tr=0,Nm=1,Dm=2,Im=3,Um=4,Fm=5,Om=6,Bm=7,km=300,Ws=301,Ha=302,yc=303,Ec=304,sf=1e3,er=1001,af=1002,wn=1003,z_=1004,el=1005,Wn=1006,Tc=1007,br=1008,li=1009,zm=1010,Hm=1011,Ga=1012,Gf=1013,Bi=1014,Ui=1015,ki=1016,Vf=1017,Wf=1018,Xs=1020,Gm=35902,Vm=35899,Wm=1021,Xm=1022,Fi=1023,Lr=1026,Pr=1027,Ym=1028,Xf=1029,Qr=1030,Yf=1031,qf=1033,El=33776,Tl=33777,wl=33778,Al=33779,of=35840,lf=35841,uf=35842,cf=35843,ff=36196,df=37492,hf=37496,pf=37488,mf=37489,bl=37490,gf=37491,_f=37808,vf=37809,xf=37810,Sf=37811,Mf=37812,yf=37813,Ef=37814,Tf=37815,wf=37816,Af=37817,Rf=37818,Cf=37819,bf=37820,Pf=37821,Lf=36492,Nf=36494,Df=36495,If=36283,Uf=36284,Pl=36285,Ff=36286,H_=3200,Ip=0,G_=1,Cr="",Qt="srgb",Ll="srgb-linear",Nl="linear",Ut="srgb",wc=7680,V_=519,W_=512,X_=513,Y_=514,qm=515,q_=516,$_=517,$m=518,Km=519,K_=35044,Up="300 es",yi=2e3,Dl=2001;function Z_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Va(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function j_(){const s=Va("canvas");return s.style.display="block",s}const Fp={};function Op(...s){const e="THREE."+s.shift();console.log(e,...s)}function Zm(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ft(...s){s=Zm(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function Pt(...s){s=Zm(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function Rl(...s){const e=s.join(" ");e in Fp||(Fp[e]=!0,ft(...s))}function Q_(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}const J_={[jc]:jc,[Jc]:nf,[ef]:ef,[za]:tf,[Qc]:Qc,[nf]:Jc,[rf]:rf,[tf]:za};class ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ac=Math.PI/180,Of=180/Math.PI;function Wa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[n&63|128]+Nn[n>>8&255]+"-"+Nn[n>>16&255]+Nn[n>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function Et(s,e,n){return Math.max(e,Math.min(n,s))}function ev(s,e){return(s%e+e)%e}function Rc(s,e,n){return(1-n)*s+n*e}function tv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $f(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function nv(s,e){if(e.constructor===Float32Array)return s;const n=$f(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/n,-1)}function iv(s,e){if(e.constructor===Float32Array)return s;const n=$f(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*n)}const ed=class ed{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ed.prototype.isVector2=!0;let Lt=ed;class $s{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,c,d){let p=r[o+0],m=r[o+1],_=r[o+2],S=r[o+3],g=l[c+0],y=l[c+1],T=l[c+2],C=l[c+3];if(S!==C||p!==g||m!==y||_!==T){let v=p*g+m*y+_*T+S*C;v<0&&(g=-g,y=-y,T=-T,C=-C,v=-v);let x=1-d;if(v<.9995){const b=Math.acos(v),F=Math.sin(b);x=Math.sin(x*b)/F,d=Math.sin(d*b)/F,p=p*x+g*d,m=m*x+y*d,_=_*x+T*d,S=S*x+C*d}else{p=p*x+g*d,m=m*x+y*d,_=_*x+T*d,S=S*x+C*d;const b=1/Math.sqrt(p*p+m*m+_*_+S*S);p*=b,m*=b,_*=b,S*=b}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,o,l,c){const d=r[o],p=r[o+1],m=r[o+2],_=r[o+3],S=l[c],g=l[c+1],y=l[c+2],T=l[c+3];return e[n]=d*T+_*S+p*y-m*g,e[n+1]=p*T+_*g+m*S-d*y,e[n+2]=m*T+_*y+d*g-p*S,e[n+3]=_*T-d*S-p*g-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,c=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(o/2),S=d(l/2),g=p(r/2),y=p(o/2),T=p(l/2);switch(c){case"XYZ":this._x=g*_*S+m*y*T,this._y=m*y*S-g*_*T,this._z=m*_*T+g*y*S,this._w=m*_*S-g*y*T;break;case"YXZ":this._x=g*_*S+m*y*T,this._y=m*y*S-g*_*T,this._z=m*_*T-g*y*S,this._w=m*_*S+g*y*T;break;case"ZXY":this._x=g*_*S-m*y*T,this._y=m*y*S+g*_*T,this._z=m*_*T+g*y*S,this._w=m*_*S-g*y*T;break;case"ZYX":this._x=g*_*S-m*y*T,this._y=m*y*S+g*_*T,this._z=m*_*T-g*y*S,this._w=m*_*S+g*y*T;break;case"YZX":this._x=g*_*S+m*y*T,this._y=m*y*S+g*_*T,this._z=m*_*T-g*y*S,this._w=m*_*S-g*y*T;break;case"XZY":this._x=g*_*S-m*y*T,this._y=m*y*S-g*_*T,this._z=m*_*T+g*y*S,this._w=m*_*S+g*y*T;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],c=n[1],d=n[5],p=n[9],m=n[2],_=n[6],S=n[10],g=r+d+S;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-p)*y,this._y=(l-m)*y,this._z=(c-o)*y}else if(r>d&&r>S){const y=2*Math.sqrt(1+r-d-S);this._w=(_-p)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(l+m)/y}else if(d>S){const y=2*Math.sqrt(1+d-r-S);this._w=(l-m)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+S-r-d);this._w=(c-o)/y,this._x=(l+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,c=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+c*d+o*m-l*p,this._y=o*_+c*p+l*d-r*m,this._z=l*_+c*m+r*p-o*d,this._w=c*_-r*d-o*p-l*m,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,l=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,c=-c,d=-d);let p=1-n;if(d<.9995){const m=Math.acos(d),_=Math.sin(m);p=Math.sin(p*m)/_,n=Math.sin(n*m)/_,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+l*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+l*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const td=class td{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Bp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Bp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,c=e.y,d=e.z,p=e.w,m=2*(c*o-d*r),_=2*(d*n-l*o),S=2*(l*r-c*n);return this.x=n+p*m+c*S-d*_,this.y=r+p*_+d*m-l*S,this.z=o+p*S+l*_-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,c=n.x,d=n.y,p=n.z;return this.x=o*p-l*d,this.y=l*c-r*p,this.z=r*d-o*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};td.prototype.isVector3=!0;let ce=td;const Cc=new ce,Bp=new $s,nd=class nd{constructor(e,n,r,o,l,c,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,c,d,p,m)}set(e,n,r,o,l,c,d,p,m){const _=this.elements;return _[0]=e,_[1]=o,_[2]=d,_[3]=n,_[4]=l,_[5]=p,_[6]=r,_[7]=c,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,c=r[0],d=r[3],p=r[6],m=r[1],_=r[4],S=r[7],g=r[2],y=r[5],T=r[8],C=o[0],v=o[3],x=o[6],b=o[1],F=o[4],P=o[7],U=o[2],D=o[5],M=o[8];return l[0]=c*C+d*b+p*U,l[3]=c*v+d*F+p*D,l[6]=c*x+d*P+p*M,l[1]=m*C+_*b+S*U,l[4]=m*v+_*F+S*D,l[7]=m*x+_*P+S*M,l[2]=g*C+y*b+T*U,l[5]=g*v+y*F+T*D,l[8]=g*x+y*P+T*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*c*_-n*d*m-r*l*_+r*d*p+o*l*m-o*c*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8],S=_*c-d*m,g=d*p-_*l,y=m*l-c*p,T=n*S+r*g+o*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=S*C,e[1]=(o*m-_*r)*C,e[2]=(d*r-o*c)*C,e[3]=g*C,e[4]=(_*n-o*p)*C,e[5]=(o*l-d*n)*C,e[6]=y*C,e[7]=(r*p-m*n)*C,e[8]=(c*n-r*l)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,c,d){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*c+m*d)+c+e,-o*m,o*p,-o*(-m*c+p*d)+d+n,0,0,1),this}scale(e,n){return Rl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bc.makeScale(e,n)),this}rotate(e){return Rl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bc.makeRotation(-e)),this}translate(e,n){return Rl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};nd.prototype.isMatrix3=!0;let dt=nd;const bc=new dt,kp=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zp=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rv(){const s={enabled:!0,workingColorSpace:Ll,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ut&&(o.r=nr(o.r),o.g=nr(o.g),o.b=nr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ut&&(o.r=Vs(o.r),o.g=Vs(o.g),o.b=Vs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Cr?Nl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[c].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ll]:{primaries:e,whitePoint:r,transfer:Nl,toXYZ:kp,fromXYZ:zp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:r,transfer:Ut,toXYZ:kp,fromXYZ:zp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),s}const yt=rv();function nr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cs;class sv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Cs===void 0&&(Cs=Va("canvas")),Cs.width=e.width,Cs.height=e.height;const o=Cs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Cs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Va("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=nr(l[c]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(nr(n[r]/255)*255):n[r]=nr(n[r]);return{data:n,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let av=0;class Kf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=Wa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?l.push(Pc(o[c].image)):l.push(Pc(o[c]))}else l=Pc(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function Pc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let ov=0;const Lc=new ce;class In extends ts{constructor(e=In.DEFAULT_IMAGE,n=In.DEFAULT_MAPPING,r=er,o=er,l=Wn,c=br,d=Fi,p=li,m=In.DEFAULT_ANISOTROPY,_=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=Wa(),this.name="",this.source=new Kf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Lc).x}get height(){return this.source.getSize(Lc).y}get depth(){return this.source.getSize(Lc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ft(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ft(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==km)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sf:e.x=e.x-Math.floor(e.x);break;case er:e.x=e.x<0?0:1;break;case af:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sf:e.y=e.y-Math.floor(e.y);break;case er:e.y=e.y<0?0:1;break;case af:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=km;In.DEFAULT_ANISOTROPY=1;const id=class id{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*n+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*n+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*n+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const p=e.elements,m=p[0],_=p[4],S=p[8],g=p[1],y=p[5],T=p[9],C=p[2],v=p[6],x=p[10];if(Math.abs(_-g)<.01&&Math.abs(S-C)<.01&&Math.abs(T-v)<.01){if(Math.abs(_+g)<.1&&Math.abs(S+C)<.1&&Math.abs(T+v)<.1&&Math.abs(m+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const F=(m+1)/2,P=(y+1)/2,U=(x+1)/2,D=(_+g)/4,M=(S+C)/4,R=(T+v)/4;return F>P&&F>U?F<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(F),o=D/r,l=M/r):P>U?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=D/o,l=R/o):U<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),r=M/l,o=R/l),this.set(r,o,l,n),this}let b=Math.sqrt((v-T)*(v-T)+(S-C)*(S-C)+(g-_)*(g-_));return Math.abs(b)<.001&&(b=1),this.x=(v-T)/b,this.y=(S-C)/b,this.z=(g-_)/b,this.w=Math.acos((m+y+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this.w=Et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this.w=Et(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};id.prototype.isVector4=!0;let rn=id;class lv extends ts{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new rn(0,0,e,n),this.scissorTest=!1,this.viewport=new rn(0,0,e,n),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new In({width:e,height:n,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Kf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends lv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class jm extends In{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uv extends In{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ol=class Ol{constructor(e,n,r,o,l,c,d,p,m,_,S,g,y,T,C,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,c,d,p,m,_,S,g,y,T,C,v)}set(e,n,r,o,l,c,d,p,m,_,S,g,y,T,C,v){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=l,x[5]=c,x[9]=d,x[13]=p,x[2]=m,x[6]=_,x[10]=S,x[14]=g,x[3]=y,x[7]=T,x[11]=C,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ol().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/bs.setFromMatrixColumn(e,0).length(),l=1/bs.setFromMatrixColumn(e,1).length(),c=1/bs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),_=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const g=c*_,y=c*S,T=d*_,C=d*S;n[0]=p*_,n[4]=-p*S,n[8]=m,n[1]=y+T*m,n[5]=g-C*m,n[9]=-d*p,n[2]=C-g*m,n[6]=T+y*m,n[10]=c*p}else if(e.order==="YXZ"){const g=p*_,y=p*S,T=m*_,C=m*S;n[0]=g+C*d,n[4]=T*d-y,n[8]=c*m,n[1]=c*S,n[5]=c*_,n[9]=-d,n[2]=y*d-T,n[6]=C+g*d,n[10]=c*p}else if(e.order==="ZXY"){const g=p*_,y=p*S,T=m*_,C=m*S;n[0]=g-C*d,n[4]=-c*S,n[8]=T+y*d,n[1]=y+T*d,n[5]=c*_,n[9]=C-g*d,n[2]=-c*m,n[6]=d,n[10]=c*p}else if(e.order==="ZYX"){const g=c*_,y=c*S,T=d*_,C=d*S;n[0]=p*_,n[4]=T*m-y,n[8]=g*m+C,n[1]=p*S,n[5]=C*m+g,n[9]=y*m-T,n[2]=-m,n[6]=d*p,n[10]=c*p}else if(e.order==="YZX"){const g=c*p,y=c*m,T=d*p,C=d*m;n[0]=p*_,n[4]=C-g*S,n[8]=T*S+y,n[1]=S,n[5]=c*_,n[9]=-d*_,n[2]=-m*_,n[6]=y*S+T,n[10]=g-C*S}else if(e.order==="XZY"){const g=c*p,y=c*m,T=d*p,C=d*m;n[0]=p*_,n[4]=-S,n[8]=m*_,n[1]=g*S+C,n[5]=c*_,n[9]=y*S-T,n[2]=T*S-y,n[6]=d*_,n[10]=C*S+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cv,e,fv)}lookAt(e,n,r){const o=this.elements;return jn.subVectors(e,n),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),yr.crossVectors(r,jn),yr.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),yr.crossVectors(r,jn)),yr.normalize(),tl.crossVectors(jn,yr),o[0]=yr.x,o[4]=tl.x,o[8]=jn.x,o[1]=yr.y,o[5]=tl.y,o[9]=jn.y,o[2]=yr.z,o[6]=tl.z,o[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,c=r[0],d=r[4],p=r[8],m=r[12],_=r[1],S=r[5],g=r[9],y=r[13],T=r[2],C=r[6],v=r[10],x=r[14],b=r[3],F=r[7],P=r[11],U=r[15],D=o[0],M=o[4],R=o[8],W=o[12],O=o[1],V=o[5],$=o[9],se=o[13],k=o[2],Z=o[6],ae=o[10],X=o[14],j=o[3],H=o[7],K=o[11],L=o[15];return l[0]=c*D+d*O+p*k+m*j,l[4]=c*M+d*V+p*Z+m*H,l[8]=c*R+d*$+p*ae+m*K,l[12]=c*W+d*se+p*X+m*L,l[1]=_*D+S*O+g*k+y*j,l[5]=_*M+S*V+g*Z+y*H,l[9]=_*R+S*$+g*ae+y*K,l[13]=_*W+S*se+g*X+y*L,l[2]=T*D+C*O+v*k+x*j,l[6]=T*M+C*V+v*Z+x*H,l[10]=T*R+C*$+v*ae+x*K,l[14]=T*W+C*se+v*X+x*L,l[3]=b*D+F*O+P*k+U*j,l[7]=b*M+F*V+P*Z+U*H,l[11]=b*R+F*$+P*ae+U*K,l[15]=b*W+F*se+P*X+U*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],c=e[1],d=e[5],p=e[9],m=e[13],_=e[2],S=e[6],g=e[10],y=e[14],T=e[3],C=e[7],v=e[11],x=e[15],b=p*y-m*g,F=d*y-m*S,P=d*g-p*S,U=c*y-m*_,D=c*g-p*_,M=c*S-d*_;return n*(C*b-v*F+x*P)-r*(T*b-v*U+x*D)+o*(T*F-C*U+x*M)-l*(T*P-C*D+v*M)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[1],c=e[5],d=e[9],p=e[2],m=e[6],_=e[10];return n*(c*_-d*m)-r*(l*_-d*p)+o*(l*m-c*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8],S=e[9],g=e[10],y=e[11],T=e[12],C=e[13],v=e[14],x=e[15],b=n*d-r*c,F=n*p-o*c,P=n*m-l*c,U=r*p-o*d,D=r*m-l*d,M=o*m-l*p,R=_*C-S*T,W=_*v-g*T,O=_*x-y*T,V=S*v-g*C,$=S*x-y*C,se=g*x-y*v,k=b*se-F*$+P*V+U*O-D*W+M*R;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/k;return e[0]=(d*se-p*$+m*V)*Z,e[1]=(o*$-r*se-l*V)*Z,e[2]=(C*M-v*D+x*U)*Z,e[3]=(g*D-S*M-y*U)*Z,e[4]=(p*O-c*se-m*W)*Z,e[5]=(n*se-o*O+l*W)*Z,e[6]=(v*P-T*M-x*F)*Z,e[7]=(_*M-g*P+y*F)*Z,e[8]=(c*$-d*O+m*R)*Z,e[9]=(r*O-n*$-l*R)*Z,e[10]=(T*D-C*P+x*b)*Z,e[11]=(S*P-_*D-y*b)*Z,e[12]=(d*W-c*V-p*R)*Z,e[13]=(n*V-r*W+o*R)*Z,e[14]=(C*F-T*U-v*b)*Z,e[15]=(_*U-S*F+g*b)*Z,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,c=e.x,d=e.y,p=e.z,m=l*c,_=l*d;return this.set(m*c+r,m*d-o*p,m*p+o*d,0,m*d+o*p,_*d+r,_*p-o*c,0,m*p-o*d,_*p+o*c,l*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,c=n._y,d=n._z,p=n._w,m=l+l,_=c+c,S=d+d,g=l*m,y=l*_,T=l*S,C=c*_,v=c*S,x=d*S,b=p*m,F=p*_,P=p*S,U=r.x,D=r.y,M=r.z;return o[0]=(1-(C+x))*U,o[1]=(y+P)*U,o[2]=(T-F)*U,o[3]=0,o[4]=(y-P)*D,o[5]=(1-(g+x))*D,o[6]=(v+b)*D,o[7]=0,o[8]=(T+F)*M,o[9]=(v-b)*M,o[10]=(1-(g+C))*M,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),n.identity(),this;let c=bs.set(o[0],o[1],o[2]).length();const d=bs.set(o[4],o[5],o[6]).length(),p=bs.set(o[8],o[9],o[10]).length();l<0&&(c=-c),_i.copy(this);const m=1/c,_=1/d,S=1/p;return _i.elements[0]*=m,_i.elements[1]*=m,_i.elements[2]*=m,_i.elements[4]*=_,_i.elements[5]*=_,_i.elements[6]*=_,_i.elements[8]*=S,_i.elements[9]*=S,_i.elements[10]*=S,n.setFromRotationMatrix(_i),r.x=c,r.y=d,r.z=p,this}makePerspective(e,n,r,o,l,c,d=yi,p=!1){const m=this.elements,_=2*l/(n-e),S=2*l/(r-o),g=(n+e)/(n-e),y=(r+o)/(r-o);let T,C;if(p)T=l/(c-l),C=c*l/(c-l);else if(d===yi)T=-(c+l)/(c-l),C=-2*c*l/(c-l);else if(d===Dl)T=-c/(c-l),C=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=S,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,l,c,d=yi,p=!1){const m=this.elements,_=2/(n-e),S=2/(r-o),g=-(n+e)/(n-e),y=-(r+o)/(r-o);let T,C;if(p)T=1/(c-l),C=c/(c-l);else if(d===yi)T=-2/(c-l),C=-(c+l)/(c-l);else if(d===Dl)T=-1/(c-l),C=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=S,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Ol.prototype.isMatrix4=!0;let ln=Ol;const bs=new ce,_i=new ln,cv=new ce(0,0,0),fv=new ce(1,1,1),yr=new ce,tl=new ce,jn=new ce,Hp=new ln,Gp=new $s;class Jr{constructor(e=0,n=0,r=0,o=Jr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],d=o[8],p=o[1],m=o[5],_=o[9],S=o[2],g=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Et(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(Et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gp.setFromEuler(this),this.setFromQuaternion(Gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jr.DEFAULT_ORDER="XYZ";class Qm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dv=0;const Vp=new ce,Ps=new $s,$i=new ln,nl=new ce,Na=new ce,hv=new ce,pv=new $s,Wp=new ce(1,0,0),Xp=new ce(0,1,0),Yp=new ce(0,0,1),qp={type:"added"},mv={type:"removed"},Ls={type:"childadded",child:null},Nc={type:"childremoved",child:null};class Jn extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=Wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const e=new ce,n=new Jr,r=new $s,o=new ce(1,1,1);function l(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ln},normalMatrix:{value:new dt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(Wp,e)}rotateY(e){return this.rotateOnAxis(Xp,e)}rotateZ(e){return this.rotateOnAxis(Yp,e)}translateOnAxis(e,n){return Vp.copy(e).applyQuaternion(this.quaternion),this.position.add(Vp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Wp,e)}translateY(e){return this.translateOnAxis(Xp,e)}translateZ(e){return this.translateOnAxis(Yp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?nl.copy(e):nl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Na,nl,this.up):$i.lookAt(nl,Na,this.up),this.quaternion.setFromRotationMatrix($i),o&&($i.extractRotation(o.matrixWorld),Ps.setFromRotationMatrix($i),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qp),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(mv),Nc.child=e,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qp),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,e,hv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,pv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*r-l[8]*o,l[13]+=r-l[1]*n-l[5]*r-l[9]*o,l[14]+=o-l[2]*n-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const S=p[m];l(e.shapes,S)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(n){const d=c(e.geometries),p=c(e.materials),m=c(e.textures),_=c(e.images),S=c(e.shapes),g=c(e.skeletons),y=c(e.animations),T=c(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=o,r;function c(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Jn.DEFAULT_UP=new ce(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ei extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gv={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,c=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const C of e.hand.values()){const v=n.getJointPose(C,r),x=this._getHandJoint(m,C);v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=v.radius),x.visible=v!==null}const _=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],g=_.position.distanceTo(S.position),y=.02,T=.005;m.inputState.pinching&&g>y+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=y-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(gv)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Ei;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const Jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},il={h:0,s:0,l:0};function Ic(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Nt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=yt.workingColorSpace){return this.r=e,this.g=n,this.b=r,yt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=yt.workingColorSpace){if(e=ev(e,1),n=Et(n,0,1),r=Et(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,c=2*r-l;this.r=Ic(c,l,e+1/3),this.g=Ic(c,l,e),this.b=Ic(c,l,e-1/3)}return yt.colorSpaceToWorking(this,o),this}setStyle(e,n=Qt){function r(l){l!==void 0&&parseFloat(l)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,n);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:ft("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qt){const r=Jm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return yt.workingToColorSpace(Dn.copy(this),e),Math.round(Et(Dn.r*255,0,255))*65536+Math.round(Et(Dn.g*255,0,255))*256+Math.round(Et(Dn.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=yt.workingColorSpace){yt.workingToColorSpace(Dn.copy(this),n);const r=Dn.r,o=Dn.g,l=Dn.b,c=Math.max(r,o,l),d=Math.min(r,o,l);let p,m;const _=(d+c)/2;if(d===c)p=0,m=0;else{const S=c-d;switch(m=_<=.5?S/(c+d):S/(2-c-d),c){case r:p=(o-l)/S+(o<l?6:0);break;case o:p=(l-r)/S+2;break;case l:p=(r-o)/S+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=yt.workingColorSpace){return yt.workingToColorSpace(Dn.copy(this),n),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Qt){yt.workingToColorSpace(Dn.copy(this),e);const n=Dn.r,r=Dn.g,o=Dn.b;return e!==Qt?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+n,Er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Er),e.getHSL(il);const r=Rc(Er.h,il.h,n),o=Rc(Er.s,il.s,n),l=Rc(Er.l,il.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Nt;Nt.NAMES=Jm;class _v extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jr,this.environmentIntensity=1,this.environmentRotation=new Jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const vi=new ce,Ki=new ce,Uc=new ce,Zi=new ce,Ns=new ce,Ds=new ce,$p=new ce,Fc=new ce,Oc=new ce,Bc=new ce,kc=new rn,zc=new rn,Hc=new rn;class Mi{constructor(e=new ce,n=new ce,r=new ce){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),vi.subVectors(e,n),o.cross(vi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){vi.subVectors(o,n),Ki.subVectors(r,n),Uc.subVectors(e,n);const c=vi.dot(vi),d=vi.dot(Ki),p=vi.dot(Uc),m=Ki.dot(Ki),_=Ki.dot(Uc),S=c*m-d*d;if(S===0)return l.set(0,0,0),null;const g=1/S,y=(m*p-d*_)*g,T=(c*_-d*p)*g;return l.set(1-y-T,T,y)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,n,r,o,l,c,d,p){return this.getBarycoord(e,n,r,o,Zi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Zi.x),p.addScaledVector(c,Zi.y),p.addScaledVector(d,Zi.z),p)}static getInterpolatedAttribute(e,n,r,o,l,c){return kc.setScalar(0),zc.setScalar(0),Hc.setScalar(0),kc.fromBufferAttribute(e,n),zc.fromBufferAttribute(e,r),Hc.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(kc,l.x),c.addScaledVector(zc,l.y),c.addScaledVector(Hc,l.z),c}static isFrontFacing(e,n,r,o){return vi.subVectors(r,n),Ki.subVectors(e,n),vi.cross(Ki).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),vi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Mi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return Mi.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let c,d;Ns.subVectors(o,r),Ds.subVectors(l,r),Fc.subVectors(e,r);const p=Ns.dot(Fc),m=Ds.dot(Fc);if(p<=0&&m<=0)return n.copy(r);Oc.subVectors(e,o);const _=Ns.dot(Oc),S=Ds.dot(Oc);if(_>=0&&S<=_)return n.copy(o);const g=p*S-_*m;if(g<=0&&p>=0&&_<=0&&p-_>0)return c=p/(p-_),n.copy(r).addScaledVector(Ns,c);Bc.subVectors(e,l);const y=Ns.dot(Bc),T=Ds.dot(Bc);if(T>=0&&y<=T)return n.copy(l);const C=y*m-p*T;if(C<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Ds,d);const v=_*T-y*S;if(v<=0&&S-_>=0&&y-T>=0)return $p.subVectors(l,o),d=(S-_)/(S-_+(y-T)),n.copy(o).addScaledVector($p,d);const x=1/(v+C+g);return c=C*x,d=g*x,n.copy(r).addScaledVector(Ns,c).addScaledVector(Ds,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Xa{constructor(e=new ce(1/0,1/0,1/0),n=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(xi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(xi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=xi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,xi):xi.fromBufferAttribute(l,c),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rl.copy(r.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),sl.subVectors(this.max,Da),Is.subVectors(e.a,Da),Us.subVectors(e.b,Da),Fs.subVectors(e.c,Da),Tr.subVectors(Us,Is),wr.subVectors(Fs,Us),Yr.subVectors(Is,Fs);let n=[0,-Tr.z,Tr.y,0,-wr.z,wr.y,0,-Yr.z,Yr.y,Tr.z,0,-Tr.x,wr.z,0,-wr.x,Yr.z,0,-Yr.x,-Tr.y,Tr.x,0,-wr.y,wr.x,0,-Yr.y,Yr.x,0];return!Gc(n,Is,Us,Fs,sl)||(n=[1,0,0,0,1,0,0,0,1],!Gc(n,Is,Us,Fs,sl))?!1:(al.crossVectors(Tr,wr),n=[al.x,al.y,al.z],Gc(n,Is,Us,Fs,sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ji=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],xi=new ce,rl=new Xa,Is=new ce,Us=new ce,Fs=new ce,Tr=new ce,wr=new ce,Yr=new ce,Da=new ce,sl=new ce,al=new ce,qr=new ce;function Gc(s,e,n,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){qr.fromArray(s,l);const d=o.x*Math.abs(qr.x)+o.y*Math.abs(qr.y)+o.z*Math.abs(qr.z),p=e.dot(qr),m=n.dot(qr),_=r.dot(qr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const cn=new ce,ol=new Lt;let vv=0;class Zr extends ts{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=K_,this.updateRanges=[],this.gpuType=Ui,this.version=0,this._normalizationScale=e!==void 0?$f(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ol.fromBufferAttribute(this,n),ol.applyMatrix3(e),this.setXY(n,ol.x,ol.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix3(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,n,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):nv(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):iv(e,this.array)}}class eg extends Zr{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class tg extends Zr{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ir extends Zr{constructor(e,n,r){super(new Float32Array(e),n,r)}}const xv=new Xa,Ia=new ce,Vc=new ce;class Zf{constructor(e=new ce,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):xv.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ia.subVectors(e,this.center);const n=Ia.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ia,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ia.copy(e.center).add(Vc)),this.expandByPoint(Ia.copy(e.center).sub(Vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Sv=0;const oi=new ln,Wc=new Jn,Os=new ce,Qn=new Xa,Ua=new Xa,Mn=new ce;class ns extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=Wa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z_(e)?tg:eg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new dt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,n,r){return oi.makeTranslation(e,n,r),this.applyMatrix4(oi),this}scale(e,n,r){return oi.makeScale(e,n,r),this.applyMatrix4(oi),this}lookAt(e){return Wc.lookAt(e),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ir(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];Qn.setFromBufferAttribute(l),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const d=n[l];Ua.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(Qn.min,Ua.min),Qn.expandByPoint(Mn),Mn.addVectors(Qn.max,Ua.max),Qn.expandByPoint(Mn)):(Qn.expandByPoint(Ua.min),Qn.expandByPoint(Ua.max))}Qn.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)Mn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Mn));if(n)for(let l=0,c=n.length;l<c;l++){const d=n[l],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)Mn.fromBufferAttribute(d,m),p&&(Os.fromBufferAttribute(e,m),Mn.add(Os)),o=Math.max(o,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new Zr(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const d=[],p=[],m=new Uint8Array(r.count);for(let W=0;W<r.count;W++)d[W]=new ce,p[W]=new ce;const _=new ce,S=new ce,g=new ce,y=new Lt,T=new Lt,C=new Lt,v=new ce,x=new ce;function b(W,O,V){m[W]=m[O]=m[V]=1,_.fromBufferAttribute(r,W),S.fromBufferAttribute(r,O),g.fromBufferAttribute(r,V),y.fromBufferAttribute(l,W),T.fromBufferAttribute(l,O),C.fromBufferAttribute(l,V),S.sub(_),g.sub(_),T.sub(y),C.sub(y);const $=1/(T.x*C.y-C.x*T.y);isFinite($)&&(v.copy(S).multiplyScalar(C.y).addScaledVector(g,-T.y).multiplyScalar($),x.copy(g).multiplyScalar(T.x).addScaledVector(S,-C.x).multiplyScalar($),d[W].add(v),d[O].add(v),d[V].add(v),p[W].add(x),p[O].add(x),p[V].add(x))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let W=0,O=F.length;W<O;++W){const V=F[W],$=V.start,se=V.count;for(let k=$,Z=$+se;k<Z;k+=3)b(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const P=new ce,U=new ce,D=new ce,M=new ce;function R(W){D.fromBufferAttribute(o,W),M.copy(D);const O=d[W];P.copy(O),P.sub(D.multiplyScalar(D.dot(O))).normalize(),U.crossVectors(M,O);const $=U.dot(p[W])<0?-1:1;c.setXYZW(W,P.x,P.y,P.z,$)}for(let W=0,O=r.count;W<O;++W)m[W]&&R(W);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new Zr(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const o=new ce,l=new ce,c=new ce,d=new ce,p=new ce,m=new ce,_=new ce,S=new ce;if(e)for(let g=0,y=e.count;g<y;g+=3){const T=e.getX(g+0),C=e.getX(g+1),v=e.getX(g+2);o.fromBufferAttribute(n,T),l.fromBufferAttribute(n,C),c.fromBufferAttribute(n,v),_.subVectors(c,l),S.subVectors(o,l),_.cross(S),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,v),d.add(_),p.add(_),m.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let g=0,y=n.count;g<y;g+=3)o.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),c.fromBufferAttribute(n,g+2),_.subVectors(c,l),S.subVectors(o,l),_.cross(S),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Mn.fromBufferAttribute(e,n),Mn.normalize(),e.setXYZ(n,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,S=d.normalized,g=new m.constructor(p.length*_);let y=0,T=0;for(let C=0,v=p.length;C<v;C++){d.isInterleavedBufferAttribute?y=p[C]*d.data.stride+d.offset:y=p[C]*_;for(let x=0;x<_;x++)g[T++]=m[y++]}return new Zr(g,_,S)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ns,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);n.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let _=0,S=m.length;_<S;_++){const g=m[_],y=e(g,r);p.push(y)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,p=c.length;d<p;d++){const m=c[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let S=0,g=m.length;S<g;S++){const y=m[S];_.push(y.toJSON(e.data))}_.length>0&&(o[p]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const _=o[m];this.setAttribute(m,_.clone(n))}const l=e.morphAttributes;for(const m in l){const _=[],S=l[m];for(let g=0,y=S.length;g<y;g++)_.push(S[g].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,_=c.length;m<_;m++){const S=c[m];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xc=new ce,Mv=new ce,yv=new dt;class Rr{constructor(e=new ce(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Xc.subVectors(r,n).cross(Mv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(Xc),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:n.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||yv.getNormalMatrix(e),o=this.coplanarPoint(Xc).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Ev=0;class Bl extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Wa(),this.name="",this.type="Material",this.blending=ka,this.side=jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bm,this.blendDst=Pm,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=V_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wc,this.stencilZFail=wc,this.stencilZPass=wc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ft(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ft(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const d in l){const p=l[d];delete p.metadata,c.push(p)}return c}if(n){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Rr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Lt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qi=new ce,Yc=new ce,ll=new ce,ul=new ce;class Tv{constructor(e=new ce,n=new ce(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,n),Qi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Yc.copy(e).add(n).multiplyScalar(.5),ll.copy(n).sub(e).normalize(),ul.copy(this.origin).sub(Yc);const l=e.distanceTo(n)*.5,c=-this.direction.dot(ll),d=ul.dot(this.direction),p=-ul.dot(ll),m=ul.lengthSq(),_=Math.abs(1-c*c);let S,g,y,T;if(_>0)if(S=c*p-d,g=c*d-p,T=l*_,S>=0)if(g>=-T)if(g<=T){const C=1/_;S*=C,g*=C,y=S*(S+c*g+2*d)+g*(c*S+g+2*p)+m}else g=l,S=Math.max(0,-(c*g+d)),y=-S*S+g*(g+2*p)+m;else g=-l,S=Math.max(0,-(c*g+d)),y=-S*S+g*(g+2*p)+m;else g<=-T?(S=Math.max(0,-(-c*l+d)),g=S>0?-l:Math.min(Math.max(-l,-p),l),y=-S*S+g*(g+2*p)+m):g<=T?(S=0,g=Math.min(Math.max(-l,-p),l),y=g*(g+2*p)+m):(S=Math.max(0,-(c*l+d)),g=S>0?l:Math.min(Math.max(-l,-p),l),y=-S*S+g*(g+2*p)+m);else g=c>0?-l:l,S=Math.max(0,-(c*g+d)),y=-S*S+g*(g+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(Yc).addScaledVector(ll,g),y}intersectSphere(e,n){if(e.radius<0)return null;Qi.subVectors(e.center,this.origin);const r=Qi.dot(this.direction),o=Qi.dot(Qi)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),d=r-c,p=r+c;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,c,d,p;const m=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,o=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,o=(e.min.x-g.x)*m),_>=0?(l=(e.min.y-g.y)*_,c=(e.max.y-g.y)*_):(l=(e.max.y-g.y)*_,c=(e.min.y-g.y)*_),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),S>=0?(d=(e.min.z-g.z)*S,p=(e.max.z-g.z)*S):(d=(e.max.z-g.z)*S,p=(e.min.z-g.z)*S),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,n,r,o,l){const c=this.origin,d=this.direction,p=d.x,m=d.y,_=d.z,S=e.x-c.x,g=e.y-c.y,y=e.z-c.z,T=n.x-c.x,C=n.y-c.y,v=n.z-c.z,x=r.x-c.x,b=r.y-c.y,F=r.z-c.z,P=Math.abs(p),U=Math.abs(m),D=Math.abs(_);let M,R,W,O,V,$,se,k,Z,ae,X,j;if(P>=U&&P>=D?(W=p,$=S,Z=T,j=x,p>=0?(M=m,R=_,O=g,V=y,se=C,k=v,ae=b,X=F):(M=_,R=m,O=y,V=g,se=v,k=C,ae=F,X=b)):U>=D?(W=m,$=g,Z=C,j=b,m>=0?(M=_,R=p,O=y,V=S,se=v,k=T,ae=F,X=x):(M=p,R=_,O=S,V=y,se=T,k=v,ae=x,X=F)):(W=_,$=y,Z=v,j=F,_>=0?(M=p,R=m,O=S,V=g,se=T,k=C,ae=x,X=b):(M=m,R=p,O=g,V=S,se=C,k=T,ae=b,X=x)),W===0)return null;const H=M/W,K=R/W,L=1/W,te=O-H*$,Se=V-K*$,ee=se-H*Z,de=k-K*Z,Me=ae-H*j,Ue=X-K*j,_e=Me*de-Ue*ee,ke=te*Ue-Se*Me,vt=ee*Se-de*te;if(o){if(_e<0||ke<0||vt<0)return null}else if((_e<0||ke<0||vt<0)&&(_e>0||ke>0||vt>0))return null;const tt=_e+ke+vt;if(tt===0)return null;const lt=L*(_e*$+ke*Z+vt*j);return(tt>0?lt<0:lt>0)?null:this.at(lt/tt,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ui extends Bl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jr,this.combine=Lm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kp=new ln,$r=new Tv,cl=new Zf,Zp=new ce,fl=new ce,dl=new ce,hl=new ce,qc=new ce,pl=new ce,jp=new ce,ml=new ce;class yn extends Jn{constructor(e=new ns,n=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){pl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const _=d[p],S=l[p];_!==0&&(qc.fromBufferAttribute(S,e),c?pl.addScaledVector(qc,_):pl.addScaledVector(qc.sub(n),_))}n.add(pl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cl.copy(r.boundingSphere),cl.applyMatrix4(l),$r.copy(e.ray).recast(e.near),!(cl.containsPoint($r.origin)===!1&&($r.intersectSphere(cl,Zp)===null||$r.origin.distanceToSquared(Zp)>(e.far-e.near)**2))&&(Kp.copy(l).invert(),$r.copy(e.ray).applyMatrix4(Kp),!(r.boundingBox!==null&&$r.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,$r)))}_computeIntersections(e,n,r){let o;const l=this.geometry,c=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,S=l.attributes.normal,g=l.groups,y=l.drawRange;if(d!==null)if(Array.isArray(c))for(let T=0,C=g.length;T<C;T++){const v=g[T],x=c[v.materialIndex],b=Math.max(v.start,y.start),F=Math.min(d.count,Math.min(v.start+v.count,y.start+y.count));for(let P=b,U=F;P<U;P+=3){const D=d.getX(P),M=d.getX(P+1),R=d.getX(P+2);o=gl(this,x,e,r,m,_,S,D,M,R),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const T=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let v=T,x=C;v<x;v+=3){const b=d.getX(v),F=d.getX(v+1),P=d.getX(v+2);o=gl(this,c,e,r,m,_,S,b,F,P),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let T=0,C=g.length;T<C;T++){const v=g[T],x=c[v.materialIndex],b=Math.max(v.start,y.start),F=Math.min(p.count,Math.min(v.start+v.count,y.start+y.count));for(let P=b,U=F;P<U;P+=3){const D=P,M=P+1,R=P+2;o=gl(this,x,e,r,m,_,S,D,M,R),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const T=Math.max(0,y.start),C=Math.min(p.count,y.start+y.count);for(let v=T,x=C;v<x;v+=3){const b=v,F=v+1,P=v+2;o=gl(this,c,e,r,m,_,S,b,F,P),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}}}function wv(s,e,n,r,o,l,c,d){let p;if(e.side===Xn?p=r.intersectTriangle(c,l,o,!0,d):p=r.intersectTriangle(o,l,c,e.side===jr,d),p===null)return null;ml.copy(d),ml.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(ml);return m<n.near||m>n.far?null:{distance:m,point:ml.clone(),object:s}}function gl(s,e,n,r,o,l,c,d,p,m){s.getVertexPosition(d,fl),s.getVertexPosition(p,dl),s.getVertexPosition(m,hl);const _=wv(s,e,n,r,fl,dl,hl,jp);if(_){const S=new ce;Mi.getBarycoord(jp,fl,dl,hl,S),o&&(_.uv=Mi.getInterpolatedAttribute(o,d,p,m,S,new Lt)),l&&(_.uv1=Mi.getInterpolatedAttribute(l,d,p,m,S,new Lt)),c&&(_.normal=Mi.getInterpolatedAttribute(c,d,p,m,S,new ce),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:p,c:m,normal:new ce,materialIndex:0};Mi.getNormal(fl,dl,hl,g.normal),_.face=g,_.barycoord=S}return _}class Av extends In{constructor(e=null,n=1,r=1,o,l,c,d,p,m=wn,_=wn,S,g){super(null,c,d,p,m,_,o,l,S,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kr=new Zf,Rv=new Lt(.5,.5),_l=new ce;class Il{constructor(e=new Rr,n=new Rr,r=new Rr,o=new Rr,l=new Rr,c=new Rr){this.planes=[e,n,r,o,l,c]}set(e,n,r,o,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=yi,r=!1){const o=this.planes,l=e.elements,c=l[0],d=l[1],p=l[2],m=l[3],_=l[4],S=l[5],g=l[6],y=l[7],T=l[8],C=l[9],v=l[10],x=l[11],b=l[12],F=l[13],P=l[14],U=l[15];if(o[0].setComponents(m-c,y-_,x-T,U-b).normalize(),o[1].setComponents(m+c,y+_,x+T,U+b).normalize(),o[2].setComponents(m+d,y+S,x+C,U+F).normalize(),o[3].setComponents(m-d,y-S,x-C,U-F).normalize(),r)o[4].setComponents(p,g,v,P).normalize(),o[5].setComponents(m-p,y-g,x-v,U-P).normalize();else if(o[4].setComponents(m-p,y-g,x-v,U-P).normalize(),n===yi)o[5].setComponents(m+p,y+g,x+v,U+P).normalize();else if(n===Dl)o[5].setComponents(p,g,v,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const n=Rv.distanceTo(e.center);return Kr.radius=.7071067811865476+n,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(_l.x=o.normal.x>0?e.max.x:e.min.x,_l.y=o.normal.y>0?e.max.y:e.min.y,_l.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Qp=new ln;class jf{constructor(){this.coordinateSystem=yi,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,r=this._frustums;for(let o=0;o<n.length;o++){const l=n[o];Qp.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new Il),r[o].setFromProjectionMatrix(Qp,l.coordinateSystem,l.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let r=0;r<this._count;r++)if(n[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let r=0;r<this._count;r++)if(n[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let r=0;r<this._count;r++)if(n[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let r=0;r<this._count;r++)if(n[r].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let r=0;r<this._count;r++)if(n[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)n[o]===void 0&&(n[o]=new Il),n[o].copy(r[o]);return this._count=e._count,this}clone(){return new jf().copy(this)}}class ng extends In{constructor(e=[],n=Ws,r,o,l,c,d,p,m,_){super(e,n,r,o,l,c,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ys extends In{constructor(e,n,r=Bi,o,l,c,d=wn,p=wn,m,_=Lr,S=1){if(_!==Lr&&_!==Pr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:S};super(g,o,l,c,d,p,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class ig extends Ys{constructor(e,n=Bi,r=Ws,o,l,c=wn,d=wn,p,m=Lr){const _={width:e,height:e,depth:1},S=[_,_,_,_,_,_];super(e,e,n,r,o,l,c,d,p,m),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class rg extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ya extends ns{constructor(e=1,n=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const d=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const p=[],m=[],_=[],S=[];let g=0,y=0;T("z","y","x",-1,-1,r,n,e,c,l,0),T("z","y","x",1,-1,r,n,-e,c,l,1),T("x","z","y",1,1,e,r,n,o,c,2),T("x","z","y",1,-1,e,r,-n,o,c,3),T("x","y","z",1,-1,e,n,r,o,l,4),T("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new ir(m,3)),this.setAttribute("normal",new ir(_,3)),this.setAttribute("uv",new ir(S,2));function T(C,v,x,b,F,P,U,D,M,R,W){const O=P/M,V=U/R,$=P/2,se=U/2,k=D/2,Z=M+1,ae=R+1;let X=0,j=0;const H=new ce;for(let K=0;K<ae;K++){const L=K*V-se;for(let te=0;te<Z;te++){const Se=te*O-$;H[C]=Se*b,H[v]=L*F,H[x]=k,m.push(H.x,H.y,H.z),H[C]=0,H[v]=0,H[x]=D>0?1:-1,_.push(H.x,H.y,H.z),S.push(te/M),S.push(1-K/R),X+=1}}for(let K=0;K<R;K++)for(let L=0;L<M;L++){const te=g+L+Z*K,Se=g+L+Z*(K+1),ee=g+(L+1)+Z*(K+1),de=g+(L+1)+Z*K;p.push(te,Se,de),p.push(Se,ee,de),j+=6}d.addGroup(y,j,W),y+=j,g+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ei extends ns{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,c=n/2,d=Math.floor(r),p=Math.floor(o),m=d+1,_=p+1,S=e/d,g=n/p,y=[],T=[],C=[],v=[];for(let x=0;x<_;x++){const b=x*g-c;for(let F=0;F<m;F++){const P=F*S-l;T.push(P,-b,0),C.push(0,0,1),v.push(F/d),v.push(1-x/p)}}for(let x=0;x<p;x++)for(let b=0;b<d;b++){const F=b+m*x,P=b+m*(x+1),U=b+1+m*(x+1),D=b+1+m*x;y.push(F,P,D),y.push(P,U,D)}this.setIndex(y),this.setAttribute("position",new ir(T,3)),this.setAttribute("normal",new ir(C,3)),this.setAttribute("uv",new ir(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.widthSegments,e.heightSegments)}}function qs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];if(Jp(o))o.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(Jp(o[0])){const l=[];for(let c=0,d=o.length;c<d;c++)l[c]=o[c].clone();e[n][r]=l}else e[n][r]=o.slice();else e[n][r]=o}}return e}function On(s){const e={};for(let n=0;n<s.length;n++){const r=qs(s[n]);for(const o in r)e[o]=r[o]}return e}function Jp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Cv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function sg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const bv={clone:qs,merge:On};var Pv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class es extends Bl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pv,this.fragmentShader=Lv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=Cv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new Nt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Lt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ce().fromArray(o.value);break;case"v4":this.uniforms[r].value=new rn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new dt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new ln().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Nv extends es{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dv extends Bl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Iv extends Bl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $c={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(em(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!em(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function em(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class ag{constructor(e,n,r){const o=this;let l=!1,c=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this._abortController=null,this.itemStart=function(_){d++,l===!1&&o.onStart!==void 0&&o.onStart(_,c,d),l=!0},this.itemEnd=function(_){c++,o.onProgress!==void 0&&o.onProgress(_,c,d),c===d&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(_){o.onError!==void 0&&o.onError(_)},this.resolveURL=function(_){return _=_.normalize("NFC"),p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,S){return m.push(_,S),this},this.removeHandler=function(_){const S=m.indexOf(_);return S!==-1&&m.splice(S,2),this},this.getHandler=function(_){for(let S=0,g=m.length;S<g;S+=2){const y=m[S],T=m[S+1];if(y.global&&(y.lastIndex=0),y.test(_))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Uv=new ag;class Qf{constructor(e){this.manager=e!==void 0?e:Uv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const r=this;return new Promise(function(o,l){r.load(e,o,n,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Qf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bs=new WeakMap;class Fv extends Qf{constructor(e){super(e)}load(e,n,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=$c.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){n&&n(c),l.manager.itemEnd(e)},0);else{let S=Bs.get(c);S===void 0&&(S=[],Bs.set(c,S)),S.push({onLoad:n,onError:o})}return c}const d=Va("img");function p(){_(),n&&n(this);const S=Bs.get(this)||[];for(let g=0;g<S.length;g++){const y=S[g];y.onLoad&&y.onLoad(this)}Bs.delete(this),l.manager.itemEnd(e)}function m(S){_(),o&&o(S),$c.remove(`image:${e}`);const g=Bs.get(this)||[];for(let y=0;y<g.length;y++){const T=g[y];T.onError&&T.onError(S)}Bs.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function _(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),$c.add(`image:${e}`,d),l.manager.itemStart(e),d.fetchPriority=this.priority,d.src=e,d}}class Ov extends Qf{constructor(e){super(e)}load(e,n,r,o){const l=new In,c=new Fv(this.manager);return c.setPriority(this.priority),c.setCache(this.cache),c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){l.image=d,l.needsUpdate=!0,n!==void 0&&n(l)},r,o),l}}const vl=new ce,xl=new $s,Ni=new ce;class og extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vl,xl,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vl,xl,Ni.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(vl,xl,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vl,xl,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new ce,tm=new Lt,nm=new Lt;class Si extends og{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Of*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Of*2*Math.atan(Math.tan(Ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,n){return this.getViewBounds(e,tm,nm),n.subVectors(nm,tm)}setViewOffset(e,n,r,o,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ac*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,m=c.fullHeight;l+=c.offsetX*o/p,n-=c.offsetY*r/m,o*=c.width/p,r*=c.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Bv extends og{constructor(e=-1,n=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ks=-90,zs=1;class Bf extends Jn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Si(ks,zs,e,n);o.layers=this.layers,this.add(o);const l=new Si(ks,zs,e,n);l.layers=this.layers,this.add(l);const c=new Si(ks,zs,e,n);c.layers=this.layers,this.add(c);const d=new Si(ks,zs,e,n);d.layers=this.layers,this.add(d);const p=new Si(ks,zs,e,n);p.layers=this.layers,this.add(p);const m=new Si(ks,zs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,c,d,p]=n;for(const m of n)this.remove(m);if(e===yi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Dl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,p,m,_]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(r,1,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,2,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(r,3,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,4,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),r.texture.mipmapsAutoUpdate=C,e.setRenderTarget(r,5,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(S,g,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class kv extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class zv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ft("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function im(s,e,n,r){const o=Hv(r);switch(n){case Wm:return s*e;case Ym:return s*e/o.components*o.byteLength;case Xf:return s*e/o.components*o.byteLength;case Qr:return s*e*2/o.components*o.byteLength;case Yf:return s*e*2/o.components*o.byteLength;case Xm:return s*e*3/o.components*o.byteLength;case Fi:return s*e*4/o.components*o.byteLength;case qf:return s*e*4/o.components*o.byteLength;case El:case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wl:case Al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lf:case cf:return Math.max(s,16)*Math.max(e,8)/4;case of:case uf:return Math.max(s,8)*Math.max(e,8)/2;case ff:case df:case pf:case mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hf:case bl:case gf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _f:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case xf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Sf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case yf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case wf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Af:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Cf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case bf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Pf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Lf:case Nf:case Df:return Math.ceil(s/4)*Math.ceil(e/4)*16;case If:case Uf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Pl:case Ff:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Hv(s){switch(s){case li:case zm:return{byteLength:1,components:1};case Ga:case Hm:case ki:return{byteLength:2,components:1};case Vf:case Wf:return{byteLength:2,components:4};case Bi:case Gf:case Ui:return{byteLength:4,components:1};case Gm:case Vm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hf}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lg(){let s=null,e=!1,n=null,r=null;function o(l,c){r=s.requestAnimationFrame(o),n(l,c)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function Gv(s){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,S=m.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,m,_),d.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,p,m){const _=p.array,S=p.updateRanges;if(s.bindBuffer(m,d),S.length===0)s.bufferSubData(m,0,_);else{S.sort((y,T)=>y.start-T.start);let g=0;for(let y=1;y<S.length;y++){const T=S[g],C=S[y];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++g,S[g]=C)}S.length=g+1;for(let y=0,T=S.length;y<T;y++){const C=S[y];s.bufferSubData(m,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function c(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:l,update:c}}var Vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$v=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Qv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ix=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,px=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_x=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vx="gl_FragColor = linearToOutputTexel( gl_FragColor );",xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ix=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wx=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Xx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nS=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,oS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_S=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,vS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ES=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,RS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,US=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,HS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XS=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,KS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ZS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_M=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:Vv,alphahash_pars_fragment:Wv,alphamap_fragment:Xv,alphamap_pars_fragment:Yv,alphatest_fragment:qv,alphatest_pars_fragment:$v,aomap_fragment:Kv,aomap_pars_fragment:Zv,batching_pars_vertex:jv,batching_vertex:Qv,begin_vertex:Jv,beginnormal_vertex:ex,bsdfs:tx,iridescence_fragment:nx,bumpmap_pars_fragment:ix,clipping_planes_fragment:rx,clipping_planes_pars_fragment:sx,clipping_planes_pars_vertex:ax,clipping_planes_vertex:ox,color_fragment:lx,color_pars_fragment:ux,color_pars_vertex:cx,color_vertex:fx,common:dx,defaultnormal_vertex:hx,displacementmap_pars_vertex:px,displacementmap_vertex:mx,emissivemap_fragment:gx,emissivemap_pars_fragment:_x,colorspace_fragment:vx,colorspace_pars_fragment:xx,envmap_fragment:Sx,envmap_common_pars_fragment:Mx,envmap_pars_fragment:yx,envmap_pars_vertex:Ex,envmap_physical_pars_fragment:Ix,envmap_vertex:Tx,fog_vertex:wx,fog_pars_vertex:Ax,fog_fragment:Rx,fog_pars_fragment:Cx,gradientmap_pars_fragment:bx,lightmap_pars_fragment:Px,lights_lambert_fragment:Lx,lights_lambert_pars_fragment:Nx,lights_pars_begin:Dx,lights_toon_fragment:Ux,lights_toon_pars_fragment:Fx,lights_phong_fragment:Ox,lights_phong_pars_fragment:Bx,lights_physical_fragment:kx,lights_physical_pars_fragment:zx,lights_fragment_begin:Hx,lights_fragment_maps:Gx,lights_fragment_end:Vx,lightprobes_pars_fragment:Wx,logdepthbuf_fragment:Xx,logdepthbuf_pars_fragment:Yx,logdepthbuf_pars_vertex:qx,logdepthbuf_vertex:$x,map_fragment:Kx,map_pars_fragment:Zx,map_particle_fragment:jx,map_particle_pars_fragment:Qx,metalnessmap_fragment:Jx,metalnessmap_pars_fragment:eS,morphinstance_vertex:tS,morphcolor_vertex:nS,morphnormal_vertex:iS,morphtarget_pars_vertex:rS,morphtarget_vertex:sS,normal_fragment_begin:aS,normal_fragment_maps:oS,normal_pars_fragment:lS,normal_pars_vertex:uS,normal_vertex:cS,normalmap_pars_fragment:fS,clearcoat_normal_fragment_begin:dS,clearcoat_normal_fragment_maps:hS,clearcoat_pars_fragment:pS,iridescence_pars_fragment:mS,opaque_fragment:gS,packing:_S,premultiplied_alpha_fragment:vS,project_vertex:xS,dithering_fragment:SS,dithering_pars_fragment:MS,roughnessmap_fragment:yS,roughnessmap_pars_fragment:ES,shadowmap_pars_fragment:TS,shadowmap_pars_vertex:wS,shadowmap_vertex:AS,shadowmask_pars_fragment:RS,skinbase_vertex:CS,skinning_pars_vertex:bS,skinning_vertex:PS,skinnormal_vertex:LS,specularmap_fragment:NS,specularmap_pars_fragment:DS,tonemapping_fragment:IS,tonemapping_pars_fragment:US,transmission_fragment:FS,transmission_pars_fragment:OS,uv_pars_fragment:BS,uv_pars_vertex:kS,uv_vertex:zS,worldpos_vertex:HS,background_vert:GS,background_frag:VS,backgroundCube_vert:WS,backgroundCube_frag:XS,cube_vert:YS,cube_frag:qS,depth_vert:$S,depth_frag:KS,distance_vert:ZS,distance_frag:jS,equirect_vert:QS,equirect_frag:JS,linedashed_vert:eM,linedashed_frag:tM,meshbasic_vert:nM,meshbasic_frag:iM,meshlambert_vert:rM,meshlambert_frag:sM,meshmatcap_vert:aM,meshmatcap_frag:oM,meshnormal_vert:lM,meshnormal_frag:uM,meshphong_vert:cM,meshphong_frag:fM,meshphysical_vert:dM,meshphysical_frag:hM,meshtoon_vert:pM,meshtoon_frag:mM,points_vert:gM,points_frag:_M,shadow_vert:vM,shadow_frag:xM,sprite_vert:SM,sprite_frag:MM},Be={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ii={basic:{uniforms:On([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:On([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:On([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:On([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:On([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Nt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:On([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:On([Be.points,Be.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:On([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:On([Be.common,Be.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:On([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:On([Be.sprite,Be.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:On([Be.common,Be.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:On([Be.lights,Be.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ii.physical={uniforms:On([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Sl={r:0,b:0,g:0},yM=new ln,ug=new dt;ug.set(-1,0,0,0,1,0,0,0,1);function EM(s,e,n,r,o,l){const c=new Nt(0);let d=o===!0?0:1,p,m,_=null,S=0,g=null;function y(b){let F=b.isScene===!0?b.background:null;if(F&&F.isTexture){const P=b.backgroundBlurriness>0;F=e.get(F,P)}return F}function T(b){let F=!1;const P=y(b);P===null?v(c,d):P&&P.isColor&&(v(P,1),F=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(b,F){const P=y(F);P&&P.isCubeTexture?(m===void 0&&(m=new yn(new Ya(1,1,1),new es({name:"BackgroundCubeMaterial",uniforms:qs(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,D,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=P,m.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(yM.makeRotationFromEuler(F.backgroundRotation)).transpose(),P.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(ug),m.material.toneMapped=yt.getTransfer(P.colorSpace)!==Ut,(_!==P||S!==P.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,_=P,S=P.version,g=s.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new yn(new ei(2,2),new es({name:"BackgroundMaterial",uniforms:qs(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=yt.getTransfer(P.colorSpace)!==Ut,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||S!==P.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,_=P,S=P.version,g=s.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function v(b,F){b.getRGB(Sl,sg(s)),n.buffers.color.setClear(Sl.r,Sl.g,Sl.b,F,l)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(b,F=1){c.set(b),d=F,v(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,v(c,d)},render:T,addToRenderList:C,dispose:x}}function TM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,c=!1;function d(V,$,se,k,Z){let ae=!1;const X=S(V,k,se,$);l!==X&&(l=X,m(l.object)),ae=y(V,k,se,Z),ae&&T(V,k,se,Z),Z!==null&&e.update(Z,s.ELEMENT_ARRAY_BUFFER),(ae||c)&&(c=!1,P(V,$,se,k),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function p(){return s.createVertexArray()}function m(V){return s.bindVertexArray(V)}function _(V){return s.deleteVertexArray(V)}function S(V,$,se,k){const Z=k.wireframe===!0;let ae=r[$.id];ae===void 0&&(ae={},r[$.id]=ae);const X=V.isInstancedMesh===!0?V.id:0;let j=ae[X];j===void 0&&(j={},ae[X]=j);let H=j[se.id];H===void 0&&(H={},j[se.id]=H);let K=H[Z];return K===void 0&&(K=g(p()),H[Z]=K),K}function g(V){const $=[],se=[],k=[];for(let Z=0;Z<n;Z++)$[Z]=0,se[Z]=0,k[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:se,attributeDivisors:k,object:V,attributes:{},index:null}}function y(V,$,se,k){const Z=l.attributes,ae=$.attributes;let X=0;const j=se.getAttributes();for(const H in j)if(j[H].location>=0){const L=Z[H];let te=ae[H];if(te===void 0&&(H==="instanceMatrix"&&V.instanceMatrix&&(te=V.instanceMatrix),H==="instanceColor"&&V.instanceColor&&(te=V.instanceColor)),L===void 0||L.attribute!==te||te&&L.data!==te.data)return!0;X++}return l.attributesNum!==X||l.index!==k}function T(V,$,se,k){const Z={},ae=$.attributes;let X=0;const j=se.getAttributes();for(const H in j)if(j[H].location>=0){let L=ae[H];L===void 0&&(H==="instanceMatrix"&&V.instanceMatrix&&(L=V.instanceMatrix),H==="instanceColor"&&V.instanceColor&&(L=V.instanceColor));const te={};te.attribute=L,L&&L.data&&(te.data=L.data),Z[H]=te,X++}l.attributes=Z,l.attributesNum=X,l.index=k}function C(){const V=l.newAttributes;for(let $=0,se=V.length;$<se;$++)V[$]=0}function v(V){x(V,0)}function x(V,$){const se=l.newAttributes,k=l.enabledAttributes,Z=l.attributeDivisors;se[V]=1,k[V]===0&&(s.enableVertexAttribArray(V),k[V]=1),Z[V]!==$&&(s.vertexAttribDivisor(V,$),Z[V]=$)}function b(){const V=l.newAttributes,$=l.enabledAttributes;for(let se=0,k=$.length;se<k;se++)$[se]!==V[se]&&(s.disableVertexAttribArray(se),$[se]=0)}function F(V,$,se,k,Z,ae,X){X===!0?s.vertexAttribIPointer(V,$,se,Z,ae):s.vertexAttribPointer(V,$,se,k,Z,ae)}function P(V,$,se,k){C();const Z=k.attributes,ae=se.getAttributes(),X=$.defaultAttributeValues;for(const j in ae){const H=ae[j];if(H.location>=0){let K=Z[j];if(K===void 0&&(j==="instanceMatrix"&&V.instanceMatrix&&(K=V.instanceMatrix),j==="instanceColor"&&V.instanceColor&&(K=V.instanceColor)),K!==void 0){const L=K.normalized,te=K.itemSize,Se=e.get(K);if(Se===void 0)continue;const ee=Se.buffer,de=Se.type,Me=Se.bytesPerElement,Ue=de===s.INT||de===s.UNSIGNED_INT||K.gpuType===Gf;if(K.isInterleavedBufferAttribute){const _e=K.data,ke=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,vt=K.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let tt=0;tt<H.locationSize;tt++)x(H.location+tt,_e.meshPerAttribute);V.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let tt=0;tt<H.locationSize;tt++)v(H.location+tt);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let tt=0;tt<H.locationSize;tt++)F(H.location+tt,te/H.locationSize,de,L,ke*Me,(vt+te/H.locationSize*tt)*Me,Ue)}else{if(K.isInstancedBufferAttribute){for(let _e=0;_e<H.locationSize;_e++)x(H.location+_e,K.meshPerAttribute);V.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let _e=0;_e<H.locationSize;_e++)v(H.location+_e);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let _e=0;_e<H.locationSize;_e++)F(H.location+_e,te/H.locationSize,de,L,te*Me,te/H.locationSize*_e*Me,Ue)}}else if(X!==void 0){const L=X[j];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(H.location,L);break;case 3:s.vertexAttrib3fv(H.location,L);break;case 4:s.vertexAttrib4fv(H.location,L);break;default:s.vertexAttrib1fv(H.location,L)}}}}b()}function U(){W();for(const V in r){const $=r[V];for(const se in $){const k=$[se];for(const Z in k){const ae=k[Z];for(const X in ae)_(ae[X].object),delete ae[X];delete k[Z]}}delete r[V]}}function D(V){if(r[V.id]===void 0)return;const $=r[V.id];for(const se in $){const k=$[se];for(const Z in k){const ae=k[Z];for(const X in ae)_(ae[X].object),delete ae[X];delete k[Z]}}delete r[V.id]}function M(V){for(const $ in r){const se=r[$];for(const k in se){const Z=se[k];if(Z[V.id]===void 0)continue;const ae=Z[V.id];for(const X in ae)_(ae[X].object),delete ae[X];delete Z[V.id]}}}function R(V){for(const $ in r){const se=r[$],k=V.isInstancedMesh===!0?V.id:0,Z=se[k];if(Z!==void 0){for(const ae in Z){const X=Z[ae];for(const j in X)_(X[j].object),delete X[j];delete Z[ae]}delete se[k],Object.keys(se).length===0&&delete r[$]}}}function W(){O(),c=!0,l!==o&&(l=o,m(l.object))}function O(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:W,resetDefaultState:O,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfObject:R,releaseStatesOfProgram:M,initAttributes:C,enableAttribute:v,disableUnusedAttributes:b}}function wM(s,e,n){let r;function o(p){r=p}function l(p,m){s.drawArrays(r,p,m),n.update(m,r,1)}function c(p,m,_){_!==0&&(s.drawArraysInstanced(r,p,m,_),n.update(m,r,_))}function d(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,_);let g=0;for(let y=0;y<_;y++)g+=m[y];n.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function AM(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(M){return!(M!==Fi&&r.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(M){const R=M===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==li&&M!==Ui&&!R&&r.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function p(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(ft("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const S=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.logarithmicDepthBuffer===!0&&S===!1;n.reversedDepthBuffer===!0&&S===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&S===!0&&ft("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:b,maxVaryings:F,maxFragmentUniforms:P,maxSamples:U,samples:D}}function RM(s){const e=this;let n=null,r=0,o=!1,l=!1;const c=new Rr,d=new dt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const y=S.length!==0||g||r!==0||o;return o=g,r=S.length,y},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,g){n=_(S,g,0)},this.setState=function(S,g,y){const T=S.clippingPlanes,C=S.clipIntersection,v=S.clipShadows,x=s.get(S);if(!o||T===null||T.length===0||l&&!v)l?_(null):m();else{const b=l?0:r,F=b*4;let P=x.clippingState||null;p.value=P,P=_(T,g,F,y);for(let U=0;U!==F;++U)P[U]=n[U];x.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=b}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(S,g,y,T){const C=S!==null?S.length:0;let v=null;if(C!==0){if(v=p.value,T!==!0||v===null){const x=y+C*4,b=g.matrixWorldInverse;d.getNormalMatrix(b),(v===null||v.length<x)&&(v=new Float32Array(x));for(let F=0,P=y;F!==C;++F,P+=4)c.copy(S[F]).applyMatrix4(b,d),c.normal.toArray(v,P),v[P+3]=c.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,v}}class Jf extends Oi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new ng(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ya(5,5,5),l=new es({name:"CubemapFromEquirect",uniforms:qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:Gs});l.uniforms.tEquirect.value=n;const c=new yn(o,l),d=n.minFilter;return n.minFilter===br&&(n.minFilter=Wn),new Bf(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,o);e.setRenderTarget(l)}}const rm=256,CM=3,bM=20,cg=256,fg=16,PM=3,LM=new ce,NM=new Nt;class Ul{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Bf(1,10,null),this._boxMesh=new yn(new Ya(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,r=.1,o=100,l={}){const{size:c=256,position:d=LM}=l,p=this._renderer;this._setSize(c);const m=this._allocateTarget(),_=this._getSourceTarget(!0);n>0&&(_.texture.mipmapsAutoUpdate=!1);const S=p.autoClear,g=p.autoClearColor,y=p.autoClearDepth,T=p.autoClearStencil,C=e.background;p.autoClear=!0,p.autoClearColor=!0,p.autoClearDepth=!0,p.autoClearStencil=!0,C===null&&(e.background=p.getClearColor(NM));const v=new Bf(r,o,_);return v.position.copy(d),v.update(p,e),p.autoClear=S,p.autoClearColor=g,p.autoClearDepth=y,p.autoClearStencil=T,e.background=C,n>0&&(_.texture.mipmapsAutoUpdate=!0,this._blur(m,n)),this._applyPMREM(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(rm,tv(e))}_fromTexture(e,n){e.mapping===Ws||e.mapping===Ha?this._setSize(e.image.length===0?rm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,n=sm(e,!1,!1),r=Math.log2(e)-CM;for(let o=0;o<=r;o++)n.texture.mipmaps.push({width:e>>o,height:e>>o});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==n||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=sm(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=n;const c=e.width>>n;e.viewport.set(0,0,c,c),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===Ws||e.mapping===Ha?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=am()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=DM(),this._integrationMaterial=IM());const n=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(n/fg);for(let c=0;c<=r;c++){const d=Ul.lodToRoughness(c,r);if(c>r-PM)l.roughness.value=d,this._renderCube(e,c,this._integrationMaterial);else{const p=d>0?Math.log2(n)+.5*Math.log2(6/(cg*Math.pow(d,4)))+.5:0;o.roughness.value=d,o.lodBias.value=p,this._renderCube(e,c,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=UM());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function sm(s,e,n){return new Jf(s,{minFilter:br,generateMipmaps:e,type:ki,colorSpace:Ll,depthBuffer:n})}function qa(s,e,n){return new es({name:s,uniforms:e,vertexShader:mt.cube_vert,fragmentShader:n,side:Xn,blending:Gs,depthTest:!1,depthWrite:!1})}function DM(){return qa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${cg}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function IM(){return qa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:fg}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function UM(){return qa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${bM}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function am(){return qa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function om(){return qa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function FM(s){let e=new WeakMap,n=new WeakMap,r=null;function o(g,y=!1){return g==null?null:y?c(g):l(g)}function l(g){if(g&&g.isTexture){const y=g.mapping;if(y===yc||y===Ec)if(e.has(g)){const T=e.get(g).texture;return d(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const C=new Jf(T.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",m),d(C.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture&&g.isPMREMTexture!==!0){const y=g.mapping,T=y===yc||y===Ec,C=y===Ws||y===Ha;if(T||C){let v=n.get(g);const x=v!==void 0?v.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new Ul(s)),v=T?r.fromEquirectangular(g,v):r.fromCubemap(g,v),v.texture.pmremVersion=g.pmremVersion,n.set(g,v),v.texture;if(v!==void 0)return v.texture;{const b=g.image;return T&&b&&b.height>0||C&&b&&p(b)?(r===null&&(r=new Ul(s)),v=T?r.fromEquirectangular(g):r.fromCubemap(g),v.texture.pmremVersion=g.pmremVersion,n.set(g,v),g.addEventListener("dispose",_),v.texture):null}}}return g}function d(g,y){return y===yc?g.mapping=Ws:y===Ec&&(g.mapping=Ha),g}function p(g){let y=0;const T=6;for(let C=0;C<T;C++)g[C]!==void 0&&y++;return y===T}function m(g){const y=g.target;y.removeEventListener("dispose",m);const T=e.get(y);T!==void 0&&(e.delete(y),T.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const T=n.get(y);T!==void 0&&(n.delete(y),T.dispose())}function S(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function OM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Rl("WebGLRenderer: "+r+" extension not supported."),o}}}function BM(s,e,n,r){const o={},l=new WeakMap,c=new FinalizationRegistry(T=>delete o[T]);function d(T){p(T.target)}function p(T){T.index!==null&&e.remove(T.index);for(const v in T.attributes)e.remove(T.attributes[v]);T.removeEventListener("dispose",d),delete o[T.id],c.unregister(T);const C=l.get(T);C&&(e.remove(C),l.delete(T)),r.releaseStatesOfGeometry(T),T.isInstancedBufferGeometry===!0&&delete T._maxInstanceCount,n.memory.geometries--}function m(T,C){return o[C.id]!==void 0||(C.addEventListener("dispose",d),o[C.id]=new WeakRef(C),c.register(C,C.id,C),n.memory.geometries++),C}function _(T){const C=T.attributes;for(const v in C)e.update(C[v],s.ARRAY_BUFFER)}function S(T){const C=T.index,v=T.attributes.position;let x=0;if(v===void 0)return;const b=C!==null?C.array.length:v.array.length/3-1,F=v.count>=65535?tg:eg,P=new F(Math.ceil(b/3)*6,1),U=P.array;if(C!==null){const M=C.array;x=C.version;for(let R=0,W=0;R<b;R+=3){const O=M[R+0],V=M[R+1],$=M[R+2];U[W++]=O,U[W++]=V,U[W++]=V,U[W++]=$,U[W++]=$,U[W++]=O}}else{x=v.version;for(let M=0,R=0;M<b;M+=3){const W=M+0,O=M+1,V=M+2;U[R++]=W,U[R++]=O,U[R++]=O,U[R++]=V,U[R++]=V,U[R++]=W}}P.version=x;const D=l.get(T);D&&e.remove(D),l.set(T,P)}function g(T){const C=l.get(T);if(C){const v=T.index;v!==null&&C.version<v.version&&S(T)}else S(T);return l.get(T)}function y(){for(const T in o){const C=o[T].deref();C!==void 0&&p(C)}}return{get:m,update:_,getWireframeAttribute:g,dispose:y}}function kM(s,e,n){let r;function o(S){r=S}let l,c;function d(S){l=S.type,c=S.bytesPerElement}function p(S,g){s.drawElements(r,g,l,S*c),n.update(g,r,1)}function m(S,g,y){y!==0&&(s.drawElementsInstanced(r,g,l,S*c,y),n.update(g,r,y))}function _(S,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,S,0,y);let C=0;for(let v=0;v<y;v++)C+=g[v];n.update(C,r,1)}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_}function zM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:Pt("WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function HM(s,e,n){const r=new WeakMap,o=new rn;function l(c,d,p){const m=c.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=_!==void 0?_.length:0;let g=r.get(d);if(g===void 0||g.count!==S){let O=function(){R.dispose(),r.delete(d),d.removeEventListener("dispose",O)};var y=O;g!==void 0&&g.texture.dispose();const T=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let P=0;T===!0&&(P=1),C===!0&&(P=2),v===!0&&(P=3);let U=d.attributes.position.count*P,D=1;U>e.maxTextureSize&&(D=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const M=new Float32Array(U*D*4*S),R=new jm(M,U,D,S);R.type=Ui,R.needsUpdate=!0;const W=P*4;for(let V=0;V<S;V++){const $=x[V],se=b[V],k=F[V],Z=U*D*4*V;for(let ae=0;ae<$.count;ae++){const X=ae*W;T===!0&&(o.fromBufferAttribute($,ae),M[Z+X+0]=o.x,M[Z+X+1]=o.y,M[Z+X+2]=o.z,M[Z+X+3]=0),C===!0&&(o.fromBufferAttribute(se,ae),M[Z+X+4]=o.x,M[Z+X+5]=o.y,M[Z+X+6]=o.z,M[Z+X+7]=0),v===!0&&(o.fromBufferAttribute(k,ae),M[Z+X+8]=o.x,M[Z+X+9]=o.y,M[Z+X+10]=o.z,M[Z+X+11]=k.itemSize===4?o.w:1)}}g={count:S,texture:R,size:new Lt(U,D)},r.set(d,g),d.addEventListener("dispose",O)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let T=0;for(let v=0;v<m.length;v++)T+=m[v];const C=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function GM(s,e,n,r,o){let l=new WeakMap;function c(m){const _=o.render.frame,S=m.geometry,g=e.get(m,S);if(l.get(g)!==_&&(e.update(g),l.set(g,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==_&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,_))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==_&&(y.update(),l.set(y,_))}return g}function d(){l=new WeakMap}function p(m){const _=m.target;_.removeEventListener("dispose",p),r.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:c,dispose:d}}const VM={[Nm]:"LINEAR_TONE_MAPPING",[Dm]:"REINHARD_TONE_MAPPING",[Im]:"CINEON_TONE_MAPPING",[Um]:"ACES_FILMIC_TONE_MAPPING",[Om]:"AGX_TONE_MAPPING",[Bm]:"NEUTRAL_TONE_MAPPING",[Fm]:"CUSTOM_TONE_MAPPING"};function WM(s,e,n,r,o,l){const c=new Oi(e,n,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null,m=null;const _=new ns;_.setAttribute("position",new ir([-1,3,0,-1,-1,0,3,-1,0],3)),_.setAttribute("uv",new ir([0,2,0,0,2,0],2));const S=new Nv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new yn(_,S),y=new Bv(-1,1,1,-1,0,1);let T=null,C=null,v=!1,x,b=null,F=[],P=!1;this.setSize=function(U,D){c.setSize(U,D),d!==null&&d.setSize(U,D),p!==null&&p.setSize(U,D);for(let M=0;M<F.length;M++){const R=F[M];R.setSize&&R.setSize(U,D)}},this.setEffects=function(U){F=U,P=F.length>0&&F[0].isRenderPass===!0;const D=c.width,M=c.height;F.length>0&&d===null&&(d=new Oi(D,M,{type:ki,depthBuffer:!1,stencilBuffer:!1}),p=new Oi(D,M,{type:ki,depthBuffer:!1,stencilBuffer:!1}));const R=o===!0&&F.some(W=>W.needsDepthTexture===!0);R!==(c.depthTexture!==null)&&(R===!0&&m===null&&(m=new Ys(D,M),l===!0&&(m.format=Pr,m.type=Xs)),c.dispose(),c.depthTexture=R?m:null,c.resolveDepthBuffer=R,c.storeMultisampledDepthBuffer=R);for(let W=0;W<F.length;W++){const O=F[W];O.setSize&&O.setSize(D,M),R&&O.needsDepthTexture===!0&&O.setDepthTexture&&O.setDepthTexture(m)}},this.begin=function(U,D){if(v||U.toneMapping===tr&&F.length===0)return!1;if(b=D,D!==null){const M=D.width,R=D.height;(c.width!==M||c.height!==R)&&this.setSize(M,R)}return P===!1&&U.setRenderTarget(c),x=U.toneMapping,U.toneMapping=tr,!0},this.hasRenderPass=function(){return P},this.end=function(U,D){U.toneMapping=x,v=!0;let M=c,R=d;for(let W=0;W<F.length;W++){const O=F[W];O.enabled!==!1&&(O.render(U,R,M,D),O.needsSwap!==!1&&(M=R,R=R===d?p:d))}if(T!==U.outputColorSpace||C!==U.toneMapping){T=U.outputColorSpace,C=U.toneMapping,S.defines={},yt.getTransfer(T)===Ut&&(S.defines.SRGB_TRANSFER="");const W=VM[C];W&&(S.defines[W]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=M.texture,U.setRenderTarget(b),U.render(g,y),b=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){c.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),_.dispose(),S.dispose()}}const dg=new In,hg=new Ys(1,1),pg=new ig(1),mg=new jm,gg=new uv,_g=new ng,lm=[],um=[],cm=new Float32Array(16),fm=new Float32Array(9),dm=new Float32Array(4);function Ks(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=lm[o];if(l===void 0&&(l=new Float32Array(o),lm[o]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=n,s[c].toArray(l,d)}return l}function mn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function gn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function kl(s,e){let n=um[e];n===void 0&&(n=new Int32Array(e),um[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function XM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function YM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mn(n,e))return;s.uniform2fv(this.addr,e),gn(n,e)}}function qM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(mn(n,e))return;s.uniform3fv(this.addr,e),gn(n,e)}}function $M(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mn(n,e))return;s.uniform4fv(this.addr,e),gn(n,e)}}function KM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(mn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,r))return;dm.set(r),s.uniformMatrix2fv(this.addr,!1,dm),gn(n,r)}}function ZM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(mn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,r))return;fm.set(r),s.uniformMatrix3fv(this.addr,!1,fm),gn(n,r)}}function jM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(mn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,r))return;cm.set(r),s.uniformMatrix4fv(this.addr,!1,cm),gn(n,r)}}function QM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function JM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mn(n,e))return;s.uniform2iv(this.addr,e),gn(n,e)}}function ey(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(mn(n,e))return;s.uniform3iv(this.addr,e),gn(n,e)}}function ty(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mn(n,e))return;s.uniform4iv(this.addr,e),gn(n,e)}}function ny(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function iy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mn(n,e))return;s.uniform2uiv(this.addr,e),gn(n,e)}}function ry(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(mn(n,e))return;s.uniform3uiv(this.addr,e),gn(n,e)}}function sy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mn(n,e))return;s.uniform4uiv(this.addr,e),gn(n,e)}}function zl(s){return s.version===0&&(s.compareFunction=Km,s.needsUpdate=!0),s}function ay(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=zl(hg):l=dg,n.setTexture2D(e||l,o)}function oy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||gg,o)}function ly(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=zl(pg):l=_g,n.setTextureCube(e||l,o)}function uy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||mg,o)}function cy(s){switch(s){case 5126:return XM;case 35664:return YM;case 35665:return qM;case 35666:return $M;case 35674:return KM;case 35675:return ZM;case 35676:return jM;case 5124:case 35670:return QM;case 35667:case 35671:return JM;case 35668:case 35672:return ey;case 35669:case 35673:return ty;case 5125:return ny;case 36294:return iy;case 36295:return ry;case 36296:return sy;case 35678:case 36198:case 36298:case 36306:case 35682:return ay;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return ly;case 36289:case 36303:case 36311:case 36292:return uy}}function fy(s,e){s.uniform1fv(this.addr,e)}function dy(s,e){const n=Ks(e,this.size,2);s.uniform2fv(this.addr,n)}function hy(s,e){const n=Ks(e,this.size,3);s.uniform3fv(this.addr,n)}function py(s,e){const n=Ks(e,this.size,4);s.uniform4fv(this.addr,n)}function my(s,e){const n=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function gy(s,e){const n=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function _y(s,e){const n=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function vy(s,e){s.uniform1iv(this.addr,e)}function xy(s,e){s.uniform2iv(this.addr,e)}function Sy(s,e){s.uniform3iv(this.addr,e)}function My(s,e){s.uniform4iv(this.addr,e)}function yy(s,e){s.uniform1uiv(this.addr,e)}function Ey(s,e){s.uniform2uiv(this.addr,e)}function Ty(s,e){s.uniform3uiv(this.addr,e)}function wy(s,e){s.uniform4uiv(this.addr,e)}function Ay(s,e,n){const r=this.cache,o=e.length,l=kl(n,o);mn(r,l)||(s.uniform1iv(this.addr,l),gn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=zl(hg):c=dg;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||c,l[d])}function Ry(s,e,n){const r=this.cache,o=e.length,l=kl(n,o);mn(r,l)||(s.uniform1iv(this.addr,l),gn(r,l));for(let c=0;c!==o;++c)n.setTexture3D(e[c]||gg,l[c])}function Cy(s,e,n){const r=this.cache,o=e.length,l=kl(n,o);mn(r,l)||(s.uniform1iv(this.addr,l),gn(r,l));let c;this.type===s.SAMPLER_CUBE_SHADOW?c=zl(pg):c=_g;for(let d=0;d!==o;++d)n.setTextureCube(e[d]||c,l[d])}function by(s,e,n){const r=this.cache,o=e.length,l=kl(n,o);mn(r,l)||(s.uniform1iv(this.addr,l),gn(r,l));for(let c=0;c!==o;++c)n.setTexture2DArray(e[c]||mg,l[c])}function Py(s){switch(s){case 5126:return fy;case 35664:return dy;case 35665:return hy;case 35666:return py;case 35674:return my;case 35675:return gy;case 35676:return _y;case 5124:case 35670:return vy;case 35667:case 35671:return xy;case 35668:case 35672:return Sy;case 35669:case 35673:return My;case 5125:return yy;case 36294:return Ey;case 36295:return Ty;case 36296:return wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ay;case 35679:case 36299:case 36307:return Ry;case 35680:case 36300:case 36308:case 36293:return Cy;case 36289:case 36303:case 36311:case 36292:return by}}class Ly{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=cy(n.type)}}class Ny{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Py(n.type)}}class Dy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const d=o[l];d.setValue(e,n[d.id],r)}}}const Kc=/(\w+)(\])?(\[|\.)?/g;function hm(s,e){s.seq.push(e),s.map[e.id]=e}function Iy(s,e,n){const r=s.name,o=r.length;for(Kc.lastIndex=0;;){const l=Kc.exec(r),c=Kc.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&c+2===o){hm(n,m===void 0?new Ly(d,s,e):new Ny(d,s,e));break}else{let S=n.map[d];S===void 0&&(S=new Dy(d),hm(n,S)),n=S}}}class Cl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(n,c),p=e.getUniformLocation(n,d.name);Iy(d,p,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,c=n.length;l!==c;++l){const d=n[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in n&&r.push(c)}return r}}function pm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const Uy=37297;let Fy=0;function Oy(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=o;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return r.join(`
`)}const mm=new dt;function By(s){yt._getMatrix(mm,yt.workingColorSpace,s);const e=`mat3( ${mm.elements.map(n=>n.toFixed(4))} )`;switch(yt.getTransfer(s)){case Nl:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function gm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+Oy(s.getShaderSource(e),d)}else return l}function ky(s,e){const n=By(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const zy={[Nm]:"Linear",[Dm]:"Reinhard",[Im]:"Cineon",[Um]:"ACESFilmic",[Om]:"AgX",[Bm]:"Neutral",[Fm]:"Custom"};function Hy(s,e){const n=zy[e];return n===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ml=new ce;function Gy(){yt.getLuminanceCoefficients(Ml);const s=Ml.x.toFixed(4),e=Ml.y.toFixed(4),n=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function Wy(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function Xy(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:d}}return n}function Ba(s){return s!==""}function _m(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function vm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yy=/^[ \t]*#include +<([\w\d./]+)>/gm;function kf(s){return s.replace(Yy,qy)}function qy(s,e){const n=mt[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return kf(n)}const $y=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xm(s){return s.replace($y,Ky)}function Ky(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Sm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Zy={[yl]:"SHADOWMAP_TYPE_PCF",[Oa]:"SHADOWMAP_TYPE_VSM"};function jy(s){return Zy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Qy={[Ha]:"ENVMAP_MODE_REFRACTION"};function Jy(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Qy[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eE={[Lm]:"ENVMAP_BLENDING_MULTIPLY",[B_]:"ENVMAP_BLENDING_MIX",[k_]:"ENVMAP_BLENDING_ADD"};function tE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":eE[s.combine]||"ENVMAP_BLENDING_NONE"}function nE(s,e,n,r){const o=s.getContext(),l=n.defines;let c=n.vertexShader,d=n.fragmentShader;const p=jy(n),m=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",_=Jy(n),S=tE(n),g=Vy(n),y=Wy(l),T=o.createProgram();let C,v,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(C=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ba).join(`
`),C.length>0&&(C+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ba).join(`
`),v.length>0&&(v+=`
`)):(C=[Sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),v=[Sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+S:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==tr?"#define TONE_MAPPING":"",n.toneMapping!==tr?mt.tonemapping_pars_fragment:"",n.toneMapping!==tr?Hy("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,ky("linearToOutputTexel",n.outputColorSpace),Gy(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ba).join(`
`)),c=kf(c),c=_m(c,n),c=vm(c,n),d=kf(d),d=_m(d,n),d=vm(d,n),c=xm(c),d=xm(d),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,C=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+C,v=["#define varying in",n.glslVersion===Up?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Up?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=x+C+c,F=x+v+d,P=pm(o,o.VERTEX_SHADER,b),U=pm(o,o.FRAGMENT_SHADER,F);o.attachShader(T,P),o.attachShader(T,U),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function D(O){if(s.debug.checkShaderErrors){const V=o.getProgramInfoLog(T)||"",$=o.getShaderInfoLog(P)||"",se=o.getShaderInfoLog(U)||"",k=V.trim(),Z=$.trim(),ae=se.trim();let X=!0,j=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,P,U);else{const H=gm(o,P,"vertex"),K=gm(o,U,"fragment");Pt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+k+`
`+H+`
`+K)}else k!==""?ft("WebGLProgram: Program Info Log:",k):(Z===""||ae==="")&&(j=!1);j&&(O.diagnostics={runnable:X,programLog:k,vertexShader:{log:Z,prefix:C},fragmentShader:{log:ae,prefix:v}})}o.deleteShader(P),o.deleteShader(U),M=new Cl(o,T),R=Xy(o,T)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let R;this.getAttributes=function(){return R===void 0&&D(this),R};let W=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=o.getProgramParameter(T,Uy)),W},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Fy++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=U,this}let iE=0;class rE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new sE(e),n.set(e,r)),r}}class sE{constructor(e){this.id=iE++,this.code=e,this.usedTimes=0}}function aE(s){return s===Qr||s===bl||s===Pl}function oE(s,e,n,r,o,l){const c=new Qm,d=new rE,p=new Set,m=[],_=new Map,S=r.logarithmicDepthBuffer,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return p.add(M),M===0?"uv":`uv${M}`}function T(M,R,W,O,V,$){const se=O.fog,k=V.geometry,Z=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,ae=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,X=e.get(M.envMap||Z,ae),j=g[M.type];let H=r.precision;M.precision!==null&&(H=r.getMaxPrecision(M.precision),H!==M.precision&&ft("WebGLProgram.getParameters:",M.precision,"not supported, using",H,"instead."));const K=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,L=K!==void 0?K.length:0;let te=0;k.morphAttributes.position!==void 0&&(te=1),k.morphAttributes.normal!==void 0&&(te=2),k.morphAttributes.color!==void 0&&(te=3);let Se,ee,de,Me;if(j){const Oe=Ii[j];Se=Oe.vertexShader,ee=Oe.fragmentShader}else{Se=M.vertexShader,ee=M.fragmentShader;const Oe=d.getVertexShaderStage(M),Mt=d.getFragmentShaderStage(M);d.update(M,Oe,Mt),de=Oe.id,Me=Mt.id}const Ue=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),ke=V.isInstancedMesh===!0,vt=V.isBatchedMesh===!0,tt=!!M.map,lt=!!M.matcap,je=!!X,nt=je&&X.isPMREMTexture===!0,Dt=!!M.aoMap,Bt=!!M.lightMap,Jt=!!M.bumpMap&&M.wireframe===!1,Ft=!!M.normalMap,An=!!M.displacementMap,kt=!!M.emissiveMap,sn=!!M.metalnessMap,qt=!!M.roughnessMap,en=M.anisotropy>0,q=M.clearcoat>0,$t=M.diffuseRoughness>0,At=M.dispersion>0,Tt=M.retroreflectivity>0,Le=M.iridescence>0,Vt=M.sheen>0,et=M.transmission>0,at=en&&!!M.anisotropyMap,N=q&&!!M.clearcoatMap,w=q&&!!M.clearcoatNormalMap,ie=q&&!!M.clearcoatRoughnessMap,Ee=$t&&!!M.diffuseRoughnessMap,ge=Le&&!!M.iridescenceMap,Ce=Le&&!!M.iridescenceThicknessMap,Ne=Vt&&!!M.sheenColorMap,he=Vt&&!!M.sheenRoughnessMap,pe=!!M.specularMap,Ae=!!M.specularColorMap,B=!!M.specularIntensityMap,me=et&&!!M.transmissionMap,fe=et&&!!M.thicknessMap,Pe=!!M.gradientMap,we=!!M.alphaMap,be=M.alphaTest>0,$e=!!M.alphaHash,ht=!!M.extensions;let ye=tr;M.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(ye=s.toneMapping);const Qe=nt?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,ut={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:Se,fragmentShader:ee,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:H,batching:vt,batchingColor:vt&&V._colorsTexture!==null,instancing:ke,instancingColor:ke&&V.instanceColor!==null,instancingMorph:ke&&V.morphTexture!==null,outputColorSpace:Ue===null?s.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:tt,matcap:lt,envMap:je,envMapMode:je&&X.mapping,envMapPMREM:nt,envMapMaxLod:nt?Qe.length-1:null,envMapSize:nt?Qe[0].width:null,aoMap:Dt,lightMap:Bt,bumpMap:Jt,normalMap:Ft,displacementMap:An,emissiveMap:kt,normalMapObjectSpace:Ft&&M.normalMapType===G_,normalMapTangentSpace:Ft&&M.normalMapType===Ip,packedNormalMap:Ft&&M.normalMapType===Ip&&aE(M.normalMap.format),metalnessMap:sn,roughnessMap:qt,anisotropy:en,anisotropyMap:at,clearcoat:q,clearcoatMap:N,clearcoatNormalMap:w,clearcoatRoughnessMap:ie,diffuseRoughness:$t,diffuseRoughnessMap:Ee,dispersion:At,retroreflection:Tt,iridescence:Le,iridescenceMap:ge,iridescenceThicknessMap:Ce,sheen:Vt,sheenColorMap:Ne,sheenRoughnessMap:he,specularMap:pe,specularColorMap:Ae,specularIntensityMap:B,transmission:et,transmissionMap:me,thicknessMap:fe,gradientMap:Pe,opaque:M.transparent===!1&&M.blending===ka&&M.alphaToCoverage===!1,alphaMap:we,alphaTest:be,alphaHash:$e,combine:M.combine,mapUv:tt&&y(M.map.channel),aoMapUv:Dt&&y(M.aoMap.channel),lightMapUv:Bt&&y(M.lightMap.channel),bumpMapUv:Jt&&y(M.bumpMap.channel),normalMapUv:Ft&&y(M.normalMap.channel),displacementMapUv:An&&y(M.displacementMap.channel),emissiveMapUv:kt&&y(M.emissiveMap.channel),metalnessMapUv:sn&&y(M.metalnessMap.channel),roughnessMapUv:qt&&y(M.roughnessMap.channel),anisotropyMapUv:at&&y(M.anisotropyMap.channel),clearcoatMapUv:N&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:w&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ee&&y(M.diffuseRoughnessMap.channel),iridescenceMapUv:ge&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:he&&y(M.sheenRoughnessMap.channel),specularMapUv:pe&&y(M.specularMap.channel),specularColorMapUv:Ae&&y(M.specularColorMap.channel),specularIntensityMapUv:B&&y(M.specularIntensityMap.channel),transmissionMapUv:me&&y(M.transmissionMap.channel),thicknessMapUv:fe&&y(M.thicknessMap.channel),alphaMapUv:we&&y(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ft||en),vertexNormals:!!k.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!k.attributes.uv&&(tt||we),fog:!!se,useFog:M.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||k.attributes.normal===void 0&&Ft===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:_e,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:te,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:$.filter(Oe=>Oe.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:tt&&M.map.isVideoTexture===!0&&yt.getTransfer(M.map.colorSpace)===Ut,decodeVideoTextureEmissive:kt&&M.emissiveMap.isVideoTexture===!0&&yt.getTransfer(M.emissiveMap.colorSpace)===Ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ji,flipSided:M.side===Xn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ht&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&M.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ut.vertexUv1s=p.has(1),ut.vertexUv2s=p.has(2),ut.vertexUv3s=p.has(3),p.clear(),ut}function C(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const W in M.defines)R.push(W),R.push(M.defines[W]);return M.isRawShaderMaterial===!1&&(v(R,M),x(R,M),R.push(s.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function v(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapPMREM),M.push(R.envMapMaxLod),M.push(R.envMapSize),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.diffuseRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.numSunLights),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numSunLightShadows),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.numLightProbes),M.push(R.numLightProbeGrids),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function x(M,R){c.disableAll(),R.instancing&&c.enable(0),R.instancingColor&&c.enable(1),R.instancingMorph&&c.enable(2),R.matcap&&c.enable(3),R.envMap&&c.enable(4),R.normalMapObjectSpace&&c.enable(5),R.normalMapTangentSpace&&c.enable(6),R.clearcoat&&c.enable(7),R.iridescence&&c.enable(8),R.alphaTest&&c.enable(9),R.vertexColors&&c.enable(10),R.vertexAlphas&&c.enable(11),R.vertexUv1s&&c.enable(12),R.vertexUv2s&&c.enable(13),R.vertexUv3s&&c.enable(14),R.vertexTangents&&c.enable(15),R.anisotropy&&c.enable(16),R.alphaHash&&c.enable(17),R.batching&&c.enable(18),R.dispersion&&c.enable(19),R.retroreflection&&c.enable(24),R.diffuseRoughness&&c.enable(25),R.batchingColor&&c.enable(20),R.gradientMap&&c.enable(21),R.packedNormalMap&&c.enable(22),R.vertexNormals&&c.enable(23),M.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reversedDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),R.numLightProbeGrids>0&&c.enable(22),R.hasPositionAttribute&&c.enable(23),M.push(c.mask)}function b(M){const R=g[M.type];let W;if(R){const O=Ii[R];W=bv.clone(O.uniforms)}else W=M.uniforms;return W}function F(M,R){let W=_.get(R);return W!==void 0?++W.usedTimes:(W=new nE(s,R,M,o),m.push(W),_.set(R,W)),W}function P(M){if(--M.usedTimes===0){const R=m.indexOf(M);m[R]=m[m.length-1],m.pop(),_.delete(M.cacheKey),M.destroy()}}function U(M){d.remove(M)}function D(){d.dispose()}return{getParameters:T,getProgramCacheKey:C,getUniforms:b,acquireProgram:F,releaseProgram:P,releaseShaderCache:U,programs:m,dispose:D}}function lE(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function o(c,d,p){s.get(c)[d]=p}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function uE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Mm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ym(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function c(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,T,C,v,x){let b=s[e];return b===void 0?(b={id:g.id,object:g,geometry:y,material:T,materialVariant:c(g),groupOrder:C,renderOrder:g.renderOrder,z:v,group:x},s[e]=b):(b.id=g.id,b.object=g,b.geometry=y,b.material=T,b.materialVariant=c(g),b.groupOrder=C,b.renderOrder=g.renderOrder,b.z=v,b.group=x),e++,b}function p(g,y,T,C,v,x,b){b.reversedDepth===!0&&(v=-v);const F=d(g,y,T,C,v,x);T.transmission>0?r.push(F):T.transparent===!0?o.push(F):n.push(F)}function m(g,y,T,C,v,x){const b=d(g,y,T,C,v,x);T.transmission>0?r.unshift(b):T.transparent===!0?o.unshift(b):n.unshift(b)}function _(g,y){n.length>1&&n.sort(g||uE),r.length>1&&r.sort(y||Mm),o.length>1&&o.sort(y||Mm)}function S(){for(let g=e,y=s.length;g<y;g++){const T=s[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:p,unshift:m,finish:S,sort:_}}function cE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new ym,s.set(r,[c])):o>=l.length?(c=new ym,l.push(c)):c=l[o],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function fE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new ce,color:new Nt};break;case"SpotLight":n={position:new ce,direction:new ce,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ce,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ce,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":n={color:new Nt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return s[e.id]=n,n}}}function dE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let hE=0;function pE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function mE(s){const e=new fE,n=dE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ce);const o=new ce,l=new ln,c=new ln;function d(m){let _=0,S=0,g=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let y=0,T=0,C=0,v=0,x=0,b=0,F=0,P=0,U=0,D=0,M=0,R=0,W=0,O=0;m.sort(pE);for(let $=0,se=m.length;$<se;$++){const k=m[$],Z=k.color,ae=k.intensity,X=k.distance;let j=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Qr?j=k.shadow.map.texture:j=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=Z.r*ae,S+=Z.g*ae,g+=Z.b*ae;else if(k.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(k.sh.coefficients[H],ae);O++}else if(k.isSunLight){const H=e.get(k);if(H.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const K=k.shadow,L=n.get(k);L.shadowIntensity=K.intensity,L.shadowBias=K.bias,L.shadowNormalBias=K.normalBias,L.shadowRadius=K.radius,L.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),r.sunShadow[T]=L,r.sunShadowMap[T]=j;const te=K.getViewportCount();for(let Se=0;Se<te;Se++)r.sunShadowMatrix[C+Se]=K.getMatrix(Se),r.sunShadowCascade[C+Se]=K._cascadeData[Se];C+=te,T++}r.sun[y]=H,y++}else if(k.isDirectionalLight){const H=e.get(k);if(H.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const K=k.shadow,L=n.get(k);L.shadowIntensity=K.intensity,L.shadowBias=K.bias,L.shadowNormalBias=K.normalBias,L.shadowRadius=K.radius,L.shadowMapSize=K.mapSize,r.directionalShadow[v]=L,r.directionalShadowMap[v]=j,r.directionalShadowMatrix[v]=k.shadow.matrix,U++}r.directional[v]=H,v++}else if(k.isSpotLight){const H=e.get(k);H.position.setFromMatrixPosition(k.matrixWorld),H.color.copy(Z).multiplyScalar(ae),H.distance=X,H.coneCos=Math.cos(k.angle),H.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),H.decay=k.decay,r.spot[b]=H;const K=k.shadow;if(k.map&&(r.spotLightMap[R]=k.map,R++,K.updateMatrices(k),k.castShadow&&W++),r.spotLightMatrix[b]=K.matrix,k.castShadow){const L=n.get(k);L.shadowIntensity=K.intensity,L.shadowBias=K.bias,L.shadowNormalBias=K.normalBias,L.shadowRadius=K.radius,L.shadowMapSize=K.mapSize,r.spotShadow[b]=L,r.spotShadowMap[b]=j,M++}b++}else if(k.isRectAreaLight){const H=e.get(k);H.color.copy(Z).multiplyScalar(ae),H.halfWidth.set(k.width*.5,0,0),H.halfHeight.set(0,k.height*.5,0),r.rectArea[F]=H,F++}else if(k.isPointLight){const H=e.get(k);if(H.color.copy(k.color).multiplyScalar(k.intensity),H.distance=k.distance,H.decay=k.decay,k.castShadow){const K=k.shadow,L=n.get(k);L.shadowIntensity=K.intensity,L.shadowBias=K.bias,L.shadowNormalBias=K.normalBias,L.shadowRadius=K.radius,L.shadowMapSize=K.mapSize,L.shadowCameraNear=K.camera.near,L.shadowCameraFar=K.camera.far,r.pointShadow[x]=L,r.pointShadowMap[x]=j,r.pointShadowMatrix[x]=k.shadow.matrix,D++}r.point[x]=H,x++}else if(k.isHemisphereLight){const H=e.get(k);H.skyColor.copy(k.color).multiplyScalar(ae),H.groundColor.copy(k.groundColor).multiplyScalar(ae),r.hemi[P]=H,P++}}F>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=S,r.ambient[2]=g;const V=r.hash;(V.sunLength!==y||V.directionalLength!==v||V.pointLength!==x||V.spotLength!==b||V.rectAreaLength!==F||V.hemiLength!==P||V.numSunShadows!==T||V.numDirectionalShadows!==U||V.numPointShadows!==D||V.numSpotShadows!==M||V.numSpotMaps!==R||V.numLightProbes!==O)&&(r.sun.length=y,r.directional.length=v,r.spot.length=b,r.rectArea.length=F,r.point.length=x,r.hemi.length=P,r.sunShadow.length=T,r.sunShadowMap.length=T,r.sunShadowMatrix.length=C,r.sunShadowCascade.length=C,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.directionalShadowMatrix.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.pointShadowMatrix.length=D,r.spotShadow.length=M,r.spotShadowMap.length=M,r.spotLightMatrix.length=M+R-W,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=W,r.numLightProbes=O,V.sunLength=y,V.directionalLength=v,V.pointLength=x,V.spotLength=b,V.rectAreaLength=F,V.hemiLength=P,V.numSunShadows=T,V.numDirectionalShadows=U,V.numPointShadows=D,V.numSpotShadows=M,V.numSpotMaps=R,V.numLightProbes=O,r.version=hE++)}function p(m,_){let S=0,g=0,y=0,T=0,C=0,v=0;const x=_.matrixWorldInverse;for(let b=0,F=m.length;b<F;b++){const P=m[b];if(P.isSunLight){const U=r.sun[S];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(x),S++}else if(P.isDirectionalLight){const U=r.directional[g];U.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(x),g++}else if(P.isSpotLight){const U=r.spot[T];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(x),T++}else if(P.isRectAreaLight){const U=r.rectArea[C];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(x),c.identity(),l.copy(P.matrixWorld),l.premultiply(x),c.extractRotation(l),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(c),U.halfHeight.applyMatrix4(c),C++}else if(P.isPointLight){const U=r.point[y];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(x),y++}else if(P.isHemisphereLight){const U=r.hemi[v];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(x),v++}}}return{setup:d,setupView:p,state:r}}function Em(s){const e=new mE(s),n=[],r=[],o=[];function l(S){_.camera=S,n.length=0,r.length=0,o.length=0}function c(S){S.isLightProbeGrid?o.push(S):n.push(S)}function d(S){r.push(S)}function p(){e.setup(n),o.sort((S,g)=>S.priority-g.priority||S.id-g.id)}function m(S){e.setupView(n,S)}const _={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function gE(s){let e=new WeakMap;function n(o,l=0){const c=e.get(o);let d;return c===void 0?(d=new Em(s),e.set(o,[d])):l>=c.length?(d=new Em(s),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const _E=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xE=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],SE=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],Tm=new ln,Fa=new ce,Zc=new ce;function ME(s,e,n){let r=new Il;const o=new Lt,l=new Lt,c=new rn,d=new Dv,p=new Iv,m={},_=n.maxTextureSize,S={[jr]:Xn,[Xn]:jr,[Ji]:Ji},g=new es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:_E,fragmentShader:vE}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const T=new ns;T.setAttribute("position",new Zr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new yn(T,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yl;let x=this.type;this.render=function(D,M,R){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||D.length===0)return;this.type===x_&&(ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yl);const W=s.getRenderTarget(),O=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Gs),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const se=x!==this.type;se&&M.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(Z=>Z.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,Z=D.length;k<Z;k++){const ae=D[k],X=ae.shadow;if(X===void 0){ft("WebGLShadowMap:",ae,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const j=X.getFrameExtents();o.multiply(j),l.copy(X.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/j.x),o.x=l.x*j.x,X.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/j.y),o.y=l.y*j.y,X.mapSize.y=l.y));const H=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=H,X.map===null||se===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Oa){if(ae.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Oi(o.x,o.y,{format:Qr,type:ki,minFilter:Wn,magFilter:Wn,generateMipmaps:!1}),X.map.texture.name=ae.name+".shadowMap",X.map.depthTexture=new Ys(o.x,o.y,Ui),X.map.depthTexture.name=ae.name+".shadowMapDepth",X.map.depthTexture.format=Lr,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=wn,X.map.depthTexture.magFilter=wn}else ae.isPointLight?(X.map=new Jf(o.x),X.map.depthTexture=new ig(o.x,Bi)):(X.map=new Oi(o.x,o.y),X.map.depthTexture=new Ys(o.x,o.y,Bi)),X.map.depthTexture.name=ae.name+".shadowMap",X.map.depthTexture.format=Lr,this.type===yl?(X.map.depthTexture.compareFunction=H?$m:qm,X.map.depthTexture.minFilter=Wn,X.map.depthTexture.magFilter=Wn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=wn,X.map.depthTexture.magFilter=wn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==o.x||X.map.height!==o.y)&&X.map.setSize(o.x,o.y);const K=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();ae.isPointLight!==!0&&X.updateMatrices(ae,R);const L=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:R.layers;for(let te=0;te<K;te++){const Se=X.getCamera(te);if(ae.isPointLight){const ee=X.camera,de=X.matrix,Me=ae.distance||ee.far;Me!==ee.far&&(ee.far=Me,ee.updateProjectionMatrix()),Fa.setFromMatrixPosition(ae.matrixWorld),ee.position.copy(Fa),Zc.copy(ee.position),Zc.add(xE[te]),ee.up.copy(SE[te]),ee.lookAt(Zc),ee.updateMatrixWorld(),de.makeTranslation(-Fa.x,-Fa.y,-Fa.z),Tm.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Tm,ee.coordinateSystem,ee.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,te),s.clear();else{te===0&&(s.setRenderTarget(X.map),s.clear());const ee=X.getViewport(te);c.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),$.viewport(c)}r=X.getFrustum(te),P(M,R,Se,ae,L,this.type)}X.isPointLightShadow!==!0&&this.type===Oa&&b(X,R),X.needsUpdate=!1}x=this.type,v.needsUpdate=!1,s.setRenderTarget(W,O,V)};function b(D,M){const R=e.update(C);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null?D.mapPass=new Oi(o.x,o.y,{format:Qr,type:ki}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value.set(D.map.width,D.map.height),g.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(M,null,R,g,C,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value.set(D.map.width,D.map.height),y.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(M,null,R,y,C,null)}function F(D,M,R,W){let O=null;const V=R.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(V!==void 0)O=V;else if(O=R.isPointLight===!0?p:d,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const $=O.uuid,se=M.uuid;let k=m[$];k===void 0&&(k={},m[$]=k);let Z=k[se];Z===void 0&&(Z=O.clone(),k[se]=Z,M.addEventListener("dispose",U)),O=Z}if(O.visible=M.visible,O.wireframe=M.wireframe,W===Oa?O.side=M.shadowSide!==null?M.shadowSide:M.side:O.side=M.shadowSide!==null?M.shadowSide:S[M.side],O.alphaMap=M.alphaMap,O.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,O.map=M.map,O.clipShadows=M.clipShadows,O.clippingPlanes=M.clippingPlanes,O.clipIntersection=M.clipIntersection,O.displacementMap=M.displacementMap,O.displacementScale=M.displacementScale,O.displacementBias=M.displacementBias,O.wireframeLinewidth=M.wireframeLinewidth,O.linewidth=M.linewidth,R.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const $=s.properties.get(O);$.light=R}return O}function P(D,M,R,W,O,V){if(D.visible===!1)return;if(D.layers.test(O)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&V===Oa)&&(!D.frustumCulled||D.intersectsFrustum(r))){D.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,D.matrixWorld);const k=e.update(D),Z=D.material;if(Array.isArray(Z)){const ae=k.groups;for(let X=0,j=ae.length;X<j;X++){const H=ae[X],K=Z[H.materialIndex];if(K&&K.visible){const L=F(D,K,W,V);D.onBeforeShadow(s,D,M,R,k,L,H),s.renderBufferDirect(R,null,k,L,D,H),D.onAfterShadow(s,D,M,R,k,L,H)}}}else if(Z.visible){const ae=F(D,Z,W,V);D.onBeforeShadow(s,D,M,R,k,ae,null),s.renderBufferDirect(R,null,k,ae,D,null),D.onAfterShadow(s,D,M,R,k,ae,null)}}const se=D.children;for(let k=0,Z=se.length;k<Z;k++)P(se[k],M,R,W,O,V)}function U(D){D.target.removeEventListener("dispose",U);for(const R in m){const W=m[R],O=D.target.uuid;O in W&&(W[O].dispose(),delete W[O])}}}function yE(s,e){function n(){let B=!1;const me=new rn;let fe=null;const Pe=new rn(0,0,0,0);return{setMask:function(we){fe!==we&&!B&&(s.colorMask(we,we,we,we),fe=we)},setLocked:function(we){B=we},setClear:function(we,be,$e,ht,ye){ye===!0&&(we*=ht,be*=ht,$e*=ht),me.set(we,be,$e,ht),Pe.equals(me)===!1&&(s.clearColor(we,be,$e,ht),Pe.copy(me))},reset:function(){B=!1,fe=null,Pe.set(-1,0,0,0)}}}function r(){let B=!1,me=!1,fe=null,Pe=null,we=null;return{setReversed:function(be){if(me!==be){const $e=e.get("EXT_clip_control");be?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),me=be;const ht=we;we=null,this.setClear(ht)}},getReversed:function(){return me},setTest:function(be){be?_e(s.DEPTH_TEST):ke(s.DEPTH_TEST)},setMask:function(be){fe!==be&&!B&&(s.depthMask(be),fe=be)},setFunc:function(be){if(me&&(be=J_[be]),Pe!==be){switch(be){case jc:s.depthFunc(s.NEVER);break;case Qc:s.depthFunc(s.ALWAYS);break;case Jc:s.depthFunc(s.LESS);break;case za:s.depthFunc(s.LEQUAL);break;case ef:s.depthFunc(s.EQUAL);break;case tf:s.depthFunc(s.GEQUAL);break;case nf:s.depthFunc(s.GREATER);break;case rf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=be}},setLocked:function(be){B=be},setClear:function(be){we!==be&&(we=be,me&&(be=1-be),s.clearDepth(be))},reset:function(){B=!1,fe=null,Pe=null,we=null,me=!1}}}function o(){let B=!1,me=null,fe=null,Pe=null,we=null,be=null,$e=null,ht=null,ye=null;return{setTest:function(Qe){B||(Qe?_e(s.STENCIL_TEST):ke(s.STENCIL_TEST))},setMask:function(Qe){me!==Qe&&!B&&(s.stencilMask(Qe),me=Qe)},setFunc:function(Qe,ut,Oe){(fe!==Qe||Pe!==ut||we!==Oe)&&(s.stencilFunc(Qe,ut,Oe),fe=Qe,Pe=ut,we=Oe)},setOp:function(Qe,ut,Oe){(be!==Qe||$e!==ut||ht!==Oe)&&(s.stencilOp(Qe,ut,Oe),be=Qe,$e=ut,ht=Oe)},setLocked:function(Qe){B=Qe},setClear:function(Qe){ye!==Qe&&(s.clearStencil(Qe),ye=Qe)},reset:function(){B=!1,me=null,fe=null,Pe=null,we=null,be=null,$e=null,ht=null,ye=null}}}const l=new n,c=new r,d=new o;let p={};const m=new WeakMap;let _={},S={},g={},y=new WeakMap,T=[],C=null,v=!1,x=null,b=null,F=null,P=null,U=null,D=null,M=null,R=new Nt(0,0,0),W=0,O=!1,V=null,$=null,se=null,k=null,Z=null;const ae=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=j>=2);let K=null,L={};const te=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),ee=new rn().fromArray(te),de=new rn().fromArray(Se);function Me(B,me,fe,Pe){const we=new Uint8Array(4),be=s.createTexture();s.bindTexture(B,be),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<fe;$e++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(me,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(me+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return be}const Ue={};Ue[s.TEXTURE_2D]=Me(s.TEXTURE_2D,s.TEXTURE_2D,1),Ue[s.TEXTURE_CUBE_MAP]=Me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[s.TEXTURE_2D_ARRAY]=Me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ue[s.TEXTURE_3D]=Me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),_e(s.DEPTH_TEST),c.setFunc(za),Jt(!1),Ft(Pp),_e(s.CULL_FACE),Dt(Gs);function _e(B){_[B]!==!0&&(s.enable(B),_[B]=!0)}function ke(B){_[B]!==!1&&(s.disable(B),_[B]=!1)}function vt(B,me){return g[B]!==me?(s.bindFramebuffer(B,me),g[B]=me,B===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=me),B===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=me),!0):!1}function tt(B,me){let fe=T,Pe=!1;if(B){fe=y.get(me),fe===void 0&&(fe=[],y.set(me,fe));const we=B.textures;if(fe.length!==we.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let be=0,$e=we.length;be<$e;be++)fe[be]=s.COLOR_ATTACHMENT0+be;fe.length=we.length,Pe=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(fe)}function lt(B){return C!==B?(s.useProgram(B),C=B,!0):!1}const je={[Hs]:s.FUNC_ADD,[M_]:s.FUNC_SUBTRACT,[y_]:s.FUNC_REVERSE_SUBTRACT};je[E_]=s.MIN,je[T_]=s.MAX;const nt={[w_]:s.ZERO,[A_]:s.ONE,[R_]:s.SRC_COLOR,[bm]:s.SRC_ALPHA,[D_]:s.SRC_ALPHA_SATURATE,[L_]:s.DST_COLOR,[b_]:s.DST_ALPHA,[C_]:s.ONE_MINUS_SRC_COLOR,[Pm]:s.ONE_MINUS_SRC_ALPHA,[N_]:s.ONE_MINUS_DST_COLOR,[P_]:s.ONE_MINUS_DST_ALPHA,[I_]:s.CONSTANT_COLOR,[U_]:s.ONE_MINUS_CONSTANT_COLOR,[F_]:s.CONSTANT_ALPHA,[O_]:s.ONE_MINUS_CONSTANT_ALPHA};function Dt(B,me,fe,Pe,we,be,$e,ht,ye,Qe){if(B===Gs){v===!0&&(ke(s.BLEND),v=!1);return}if(v===!1&&(_e(s.BLEND),v=!0),B!==S_){if(B!==x||Qe!==O){if((b!==Hs||U!==Hs)&&(s.blendEquation(s.FUNC_ADD),b=Hs,U=Hs),Qe)switch(B){case ka:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lp:s.blendFunc(s.ONE,s.ONE);break;case Np:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Pt("WebGLState: Invalid blending: ",B);break}else switch(B){case ka:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lp:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Np:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dp:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",B);break}F=null,P=null,D=null,M=null,R.set(0,0,0),W=0,x=B,O=Qe}return}we=we||me,be=be||fe,$e=$e||Pe,(me!==b||we!==U)&&(s.blendEquationSeparate(je[me],je[we]),b=me,U=we),(fe!==F||Pe!==P||be!==D||$e!==M)&&(s.blendFuncSeparate(nt[fe],nt[Pe],nt[be],nt[$e]),F=fe,P=Pe,D=be,M=$e),(ht.equals(R)===!1||ye!==W)&&(s.blendColor(ht.r,ht.g,ht.b,ye),R.copy(ht),W=ye),x=B,O=!1}function Bt(B,me){B.side===Ji?ke(s.CULL_FACE):_e(s.CULL_FACE);let fe=B.side===Xn;me&&(fe=!fe),Jt(fe),B.blending===ka&&B.transparent===!1?Dt(Gs):Dt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),l.setMask(B.colorWrite);const Pe=B.stencilWrite;d.setTest(Pe),Pe&&(d.setMask(B.stencilWriteMask),d.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),d.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),kt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):ke(s.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(B){V!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),V=B)}function Ft(B){B!==__?(_e(s.CULL_FACE),B!==$&&(B===Pp?s.cullFace(s.BACK):B===v_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ke(s.CULL_FACE),$=B}function An(B){B!==se&&(X&&s.lineWidth(B),se=B)}function kt(B,me,fe){B?(_e(s.POLYGON_OFFSET_FILL),(k!==me||Z!==fe)&&(k=me,Z=fe,c.getReversed()&&(me=-me,fe=-fe),s.polygonOffset(me,fe))):ke(s.POLYGON_OFFSET_FILL)}function sn(B){B?_e(s.SCISSOR_TEST):ke(s.SCISSOR_TEST)}function qt(B){B===void 0&&(B=s.TEXTURE0+ae-1),K!==B&&(s.activeTexture(B),K=B)}function en(B,me,fe){fe===void 0&&(K===null?fe=s.TEXTURE0+ae-1:fe=K);let Pe=L[fe];Pe===void 0&&(Pe={type:void 0,texture:void 0},L[fe]=Pe),(Pe.type!==B||Pe.texture!==me)&&(K!==fe&&(s.activeTexture(fe),K=fe),s.bindTexture(B,me||Ue[B]),Pe.type=B,Pe.texture=me)}function q(){const B=L[K];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function $t(){try{s.compressedTexImage2D(...arguments)}catch(B){Pt("WebGLState:",B)}}function At(){try{s.compressedTexImage3D(...arguments)}catch(B){Pt("WebGLState:",B)}}function Tt(){try{s.texSubImage2D(...arguments)}catch(B){Pt("WebGLState:",B)}}function Le(){try{s.texSubImage3D(...arguments)}catch(B){Pt("WebGLState:",B)}}function Vt(){try{s.compressedTexSubImage2D(...arguments)}catch(B){Pt("WebGLState:",B)}}function et(){try{s.compressedTexSubImage3D(...arguments)}catch(B){Pt("WebGLState:",B)}}function at(){try{s.texStorage2D(...arguments)}catch(B){Pt("WebGLState:",B)}}function N(){try{s.texStorage3D(...arguments)}catch(B){Pt("WebGLState:",B)}}function w(){try{s.texImage2D(...arguments)}catch(B){Pt("WebGLState:",B)}}function ie(){try{s.texImage3D(...arguments)}catch(B){Pt("WebGLState:",B)}}function Ee(B){return S[B]!==void 0?S[B]:s.getParameter(B)}function ge(B,me){S[B]!==me&&(s.pixelStorei(B,me),S[B]=me)}function Ce(B){ee.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),ee.copy(B))}function Ne(B){de.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),de.copy(B))}function he(B,me){let fe=m.get(me);fe===void 0&&(fe=new WeakMap,m.set(me,fe));let Pe=fe.get(B);Pe===void 0&&(Pe=s.getUniformBlockIndex(me,B.name),s.uniformBlockBinding(me,Pe,Pe),fe.set(B,Pe))}function pe(B,me,fe){const we=m.get(me).get(B);p[we]!==fe&&(s.bindBufferBase(s.UNIFORM_BUFFER,we,fe),p[we]=fe)}function Ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},S={},K=null,L={},g={},p={},y=new WeakMap,T=[],C=null,v=!1,x=null,b=null,F=null,P=null,U=null,D=null,M=null,R=new Nt(0,0,0),W=0,O=!1,V=null,$=null,se=null,k=null,Z=null,ee.set(0,0,s.canvas.width,s.canvas.height),de.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:_e,disable:ke,bindFramebuffer:vt,drawBuffers:tt,useProgram:lt,setBlending:Dt,setMaterial:Bt,setFlipSided:Jt,setCullFace:Ft,setLineWidth:An,setPolygonOffset:kt,setScissorTest:sn,activeTexture:qt,bindTexture:en,unbindTexture:q,compressedTexImage2D:$t,compressedTexImage3D:At,texImage2D:w,texImage3D:ie,pixelStorei:ge,getParameter:Ee,updateUBOMapping:he,uniformBlockBinding:pe,texStorage2D:at,texStorage3D:N,texSubImage2D:Tt,texSubImage3D:Le,compressedTexSubImage2D:Vt,compressedTexSubImage3D:et,scissor:Ce,viewport:Ne,reset:Ae}}function EE(s,e,n,r,o,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Lt,_=new WeakMap,S=new Set;let g;const y=new WeakMap,T=new Set,C=new FinalizationRegistry(N=>T.delete(N));let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,w){return v?new OffscreenCanvas(N,w):Va("canvas")}function b(N,w,ie){let Ee=1;const ge=at(N);if((ge.width>ie||ge.height>ie)&&(Ee=ie/Math.max(ge.width,ge.height)),Ee<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Ce=Math.floor(Ee*ge.width),Ne=Math.floor(Ee*ge.height);g===void 0&&(g=x(Ce,Ne));const he=w?x(Ce,Ne):g;return he.width=Ce,he.height=Ne,he.getContext("2d").drawImage(N,0,0,Ce,Ne),ft("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ce+"x"+Ne+")."),he}else return"data"in N&&ft("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),N;return N}function F(N){return N.generateMipmaps}function P(N){s.generateMipmap(N)}function U(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(N,w,ie,Ee,ge,Ce=!1){if(N!==null){if(s[N]!==void 0)return s[N];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Ne;Ee&&(Ne=e.get("EXT_texture_norm16"),Ne||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=w;if(w===s.RED&&(ie===s.FLOAT&&(he=s.R32F),ie===s.HALF_FLOAT&&(he=s.R16F),ie===s.UNSIGNED_BYTE&&(he=s.R8),ie===s.UNSIGNED_SHORT&&Ne&&(he=Ne.R16_EXT),ie===s.SHORT&&Ne&&(he=Ne.R16_SNORM_EXT)),w===s.RED_INTEGER&&(ie===s.UNSIGNED_BYTE&&(he=s.R8UI),ie===s.UNSIGNED_SHORT&&(he=s.R16UI),ie===s.UNSIGNED_INT&&(he=s.R32UI),ie===s.BYTE&&(he=s.R8I),ie===s.SHORT&&(he=s.R16I),ie===s.INT&&(he=s.R32I)),w===s.RG&&(ie===s.FLOAT&&(he=s.RG32F),ie===s.HALF_FLOAT&&(he=s.RG16F),ie===s.UNSIGNED_BYTE&&(he=s.RG8),ie===s.UNSIGNED_SHORT&&Ne&&(he=Ne.RG16_EXT),ie===s.SHORT&&Ne&&(he=Ne.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(ie===s.UNSIGNED_BYTE&&(he=s.RG8UI),ie===s.UNSIGNED_SHORT&&(he=s.RG16UI),ie===s.UNSIGNED_INT&&(he=s.RG32UI),ie===s.BYTE&&(he=s.RG8I),ie===s.SHORT&&(he=s.RG16I),ie===s.INT&&(he=s.RG32I)),w===s.RGB_INTEGER&&(ie===s.UNSIGNED_BYTE&&(he=s.RGB8UI),ie===s.UNSIGNED_SHORT&&(he=s.RGB16UI),ie===s.UNSIGNED_INT&&(he=s.RGB32UI),ie===s.BYTE&&(he=s.RGB8I),ie===s.SHORT&&(he=s.RGB16I),ie===s.INT&&(he=s.RGB32I)),w===s.RGBA_INTEGER&&(ie===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),ie===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),ie===s.UNSIGNED_INT&&(he=s.RGBA32UI),ie===s.BYTE&&(he=s.RGBA8I),ie===s.SHORT&&(he=s.RGBA16I),ie===s.INT&&(he=s.RGBA32I)),w===s.RGB&&(ie===s.UNSIGNED_SHORT&&Ne&&(he=Ne.RGB16_EXT),ie===s.SHORT&&Ne&&(he=Ne.RGB16_SNORM_EXT),ie===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),ie===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),w===s.RGBA){const pe=Ce?Nl:yt.getTransfer(ge);ie===s.FLOAT&&(he=s.RGBA32F),ie===s.HALF_FLOAT&&(he=s.RGBA16F),ie===s.UNSIGNED_BYTE&&(he=pe===Ut?s.SRGB8_ALPHA8:s.RGBA8),ie===s.UNSIGNED_SHORT&&Ne&&(he=Ne.RGBA16_EXT),ie===s.SHORT&&Ne&&(he=Ne.RGBA16_SNORM_EXT),ie===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),ie===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function M(N,w){let ie;return N?w===null||w===Bi||w===Xs?ie=s.DEPTH24_STENCIL8:w===Ui?ie=s.DEPTH32F_STENCIL8:w===Ga&&(ie=s.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Bi||w===Xs?ie=s.DEPTH_COMPONENT24:w===Ui?ie=s.DEPTH_COMPONENT32F:w===Ga&&(ie=s.DEPTH_COMPONENT16),ie}function R(N,w){return F(N)===!0||N.isFramebufferTexture&&N.minFilter!==wn&&N.minFilter!==Wn?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function W(N){const w=new WeakRef(N);r.get(N).__ref=w,T.add(w),C.register(N,w,w)}function O(N){const w=r.get(N).__ref;w!==void 0&&(T.delete(w),C.unregister(w))}function V(N){se(N.target)}function $(N){k(N.target)}function se(N){N.removeEventListener("dispose",V),O(N),ae(N),N.isVideoTexture&&_.delete(N),N.isHTMLTexture&&S.delete(N)}function k(N){N.removeEventListener("dispose",$),O(N),j(N)}function Z(){for(const N of T){const w=N.deref();w!==void 0&&(w.isRenderTarget===!0?k(w):se(w))}T.clear(),S.clear()}function ae(N){const w=r.get(N);if(w.__webglInit===void 0)return;const ie=N.source,Ee=y.get(ie);if(Ee){const ge=Ee[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&X(N),Object.keys(Ee).length===0&&y.delete(ie)}r.remove(N)}function X(N){const w=r.get(N);s.deleteTexture(w.__webglTexture);const ie=N.source,Ee=y.get(ie);delete Ee[w.__cacheKey],c.memory.textures--}function j(N){const w=r.get(N);w.__depthDisposeCallback&&w.__depthDisposeCallback();const ie=N.depthTexture;if(ie&&ie.renderTarget===N&&se(ie),N.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(w.__webglFramebuffer[ge]))for(let Ce=0;Ce<w.__webglFramebuffer[ge].length;Ce++)s.deleteFramebuffer(w.__webglFramebuffer[ge][Ce]);else s.deleteFramebuffer(w.__webglFramebuffer[ge]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ge])}else{if(Array.isArray(w.__webglFramebuffer))for(let ge=0;ge<w.__webglFramebuffer.length;ge++)s.deleteFramebuffer(w.__webglFramebuffer[ge]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ge=0;ge<w.__webglColorRenderbuffer.length;ge++)w.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ge]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Ee=N.textures;for(let ge=0,Ce=Ee.length;ge<Ce;ge++){const Ne=r.get(Ee[ge]);Ne.__webglTexture&&(s.deleteTexture(Ne.__webglTexture),c.memory.textures--),r.remove(Ee[ge])}r.remove(N)}let H=0;function K(){H=0}function L(){return H}function te(N){H=N}function Se(){const N=H;return N>=o.maxTextures&&ft("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+o.maxTextures),H+=1,N}function ee(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.mipmapsAutoUpdate),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function de(N,w){const ie=r.get(N);if(N.isVideoTexture&&Vt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&ie.__version!==N.version){const Ee=N.image;if(Ee===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Bt(ie,N,w);return}}else N.isExternalTexture&&(ie.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,ie.__webglTexture,s.TEXTURE0+w)}function Me(N,w){const ie=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ie.__version!==N.version){Bt(ie,N,w);return}else N.isExternalTexture&&(ie.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,ie.__webglTexture,s.TEXTURE0+w)}function Ue(N,w){const ie=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ie.__version!==N.version){Bt(ie,N,w);return}n.bindTexture(s.TEXTURE_3D,ie.__webglTexture,s.TEXTURE0+w)}function _e(N,w){const ie=r.get(N);if(N.version>0&&ie.__version!==N.version){Jt(ie,N,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture,s.TEXTURE0+w)}const ke={[sf]:s.REPEAT,[er]:s.CLAMP_TO_EDGE,[af]:s.MIRRORED_REPEAT},vt={[wn]:s.NEAREST,[z_]:s.NEAREST_MIPMAP_NEAREST,[el]:s.NEAREST_MIPMAP_LINEAR,[Wn]:s.LINEAR,[Tc]:s.LINEAR_MIPMAP_NEAREST,[br]:s.LINEAR_MIPMAP_LINEAR},tt={[W_]:s.NEVER,[Km]:s.ALWAYS,[X_]:s.LESS,[qm]:s.LEQUAL,[Y_]:s.EQUAL,[$m]:s.GEQUAL,[q_]:s.GREATER,[$_]:s.NOTEQUAL};function lt(N,w){if(w.type===Ui&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Wn||w.magFilter===Tc||w.magFilter===el||w.magFilter===br||w.minFilter===Wn||w.minFilter===Tc||w.minFilter===el||w.minFilter===br)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ke[w.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ke[w.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ke[w.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,vt[w.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,vt[w.minFilter]),w.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,tt[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===wn||w.minFilter!==el&&w.minFilter!==br||w.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function je(N,w){let ie=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",V),W(w));const Ee=w.source;let ge=y.get(Ee);ge===void 0&&(ge={},y.set(Ee,ge));const Ce=ee(w);if(Ce!==N.__cacheKey){ge[Ce]===void 0&&(ge[Ce]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ie=!0),ge[Ce].usedTimes++;const Ne=ge[N.__cacheKey];Ne!==void 0&&(ge[N.__cacheKey].usedTimes--,Ne.usedTimes===0&&X(w)),N.__cacheKey=Ce,N.__webglTexture=ge[Ce].texture}return ie}function nt(N,w,ie){return Math.floor(Math.floor(N/ie)/w)}function Dt(N,w,ie,Ee){const Ce=N.updateRanges;if(Ce.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,ie,Ee,w.data);else{Ce.sort((B,me)=>B.start-me.start);let Ne=0;for(let B=1;B<Ce.length;B++){const me=Ce[Ne],fe=Ce[B],Pe=me.start+me.count,we=nt(fe.start,w.width,4),be=nt(me.start,w.width,4);fe.start<=Pe+1&&we===be&&nt(fe.start+fe.count-1,w.width,4)===we?me.count=Math.max(me.count,fe.start+fe.count-me.start):(++Ne,Ce[Ne]=fe)}Ce.length=Ne+1;const he=n.getParameter(s.UNPACK_ROW_LENGTH),pe=n.getParameter(s.UNPACK_SKIP_PIXELS),Ae=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let B=0,me=Ce.length;B<me;B++){const fe=Ce[B],Pe=Math.floor(fe.start/4),we=Math.ceil(fe.count/4),be=Pe%w.width,$e=Math.floor(Pe/w.width),ht=we,ye=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,be),n.pixelStorei(s.UNPACK_SKIP_ROWS,$e),n.texSubImage2D(s.TEXTURE_2D,0,be,$e,ht,ye,ie,Ee,w.data)}N.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,he),n.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),n.pixelStorei(s.UNPACK_SKIP_ROWS,Ae)}}function Bt(N,w,ie){let Ee=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Ee=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Ee=s.TEXTURE_3D);const ge=je(N,w),Ce=w.source;n.bindTexture(Ee,N.__webglTexture,s.TEXTURE0+ie);const Ne=r.get(Ce);if(Ce.version!==Ne.__version||ge===!0){if(n.activeTexture(s.TEXTURE0+ie),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ye=yt.getPrimaries(yt.workingColorSpace),Qe=w.colorSpace===Cr?null:yt.getPrimaries(w.colorSpace),ut=w.colorSpace===Cr||ye===Qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}n.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let pe=b(w.image,!1,o.maxTextureSize);pe=et(w,pe);const Ae=l.convert(w.format,w.colorSpace),B=l.convert(w.type);let me=D(w.internalFormat,Ae,B,w.normalized,w.colorSpace,w.isVideoTexture);lt(Ee,w);let fe;const Pe=w.mipmaps,we=w.isVideoTexture!==!0,be=Ne.__version===void 0||ge===!0,$e=Ce.dataReady,ht=R(w,pe);if(w.isDepthTexture)me=M(w.format===Pr,w.type),be&&(we?n.texStorage2D(s.TEXTURE_2D,1,me,pe.width,pe.height):n.texImage2D(s.TEXTURE_2D,0,me,pe.width,pe.height,0,Ae,B,null));else if(w.isDataTexture)if(Pe.length>0){we&&be&&n.texStorage2D(s.TEXTURE_2D,ht,me,Pe[0].width,Pe[0].height);for(let ye=0,Qe=Pe.length;ye<Qe;ye++)fe=Pe[ye],we?$e&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,fe.width,fe.height,Ae,B,fe.data):n.texImage2D(s.TEXTURE_2D,ye,me,fe.width,fe.height,0,Ae,B,fe.data);w.generateMipmaps=!1}else we?(be&&n.texStorage2D(s.TEXTURE_2D,ht,me,pe.width,pe.height),$e&&Dt(w,pe,Ae,B)):n.texImage2D(s.TEXTURE_2D,0,me,pe.width,pe.height,0,Ae,B,pe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){we&&be&&n.texStorage3D(s.TEXTURE_2D_ARRAY,ht,me,Pe[0].width,Pe[0].height,pe.depth);for(let ye=0,Qe=Pe.length;ye<Qe;ye++)if(fe=Pe[ye],w.format!==Fi)if(Ae!==null)if(we){if($e)if(w.layerUpdates.size>0){const ut=im(fe.width,fe.height,w.format,w.type);for(const Oe of w.layerUpdates){const Mt=fe.data.subarray(Oe*ut/fe.data.BYTES_PER_ELEMENT,(Oe+1)*ut/fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,Oe,fe.width,fe.height,1,Ae,Mt)}}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,fe.width,fe.height,pe.depth,Ae,fe.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,me,fe.width,fe.height,pe.depth,0,fe.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?$e&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,fe.width,fe.height,pe.depth,Ae,B,fe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ye,me,fe.width,fe.height,pe.depth,0,Ae,B,fe.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{we&&be&&n.texStorage2D(s.TEXTURE_2D,ht,me,Pe[0].width,Pe[0].height);for(let ye=0,Qe=Pe.length;ye<Qe;ye++)fe=Pe[ye],w.format!==Fi?Ae!==null?we?$e&&n.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,fe.width,fe.height,Ae,fe.data):n.compressedTexImage2D(s.TEXTURE_2D,ye,me,fe.width,fe.height,0,fe.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?$e&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,fe.width,fe.height,Ae,B,fe.data):n.texImage2D(s.TEXTURE_2D,ye,me,fe.width,fe.height,0,Ae,B,fe.data)}else if(w.isDataArrayTexture)if(we){if(be&&n.texStorage3D(s.TEXTURE_2D_ARRAY,ht,me,pe.width,pe.height,pe.depth),$e)if(w.layerUpdates.size>0){const ye=im(pe.width,pe.height,w.format,w.type);for(const Qe of w.layerUpdates){const ut=pe.data.subarray(Qe*ye/pe.data.BYTES_PER_ELEMENT,(Qe+1)*ye/pe.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Qe,pe.width,pe.height,1,Ae,B,ut)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ae,B,pe.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,me,pe.width,pe.height,pe.depth,0,Ae,B,pe.data);else if(w.isData3DTexture)we?(be&&n.texStorage3D(s.TEXTURE_3D,ht,me,pe.width,pe.height,pe.depth),$e&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ae,B,pe.data)):n.texImage3D(s.TEXTURE_3D,0,me,pe.width,pe.height,pe.depth,0,Ae,B,pe.data);else if(w.isFramebufferTexture){if(be)if(we)n.texStorage2D(s.TEXTURE_2D,ht,me,pe.width,pe.height);else{let ye=pe.width,Qe=pe.height;for(let ut=0;ut<ht;ut++)n.texImage2D(s.TEXTURE_2D,ut,me,ye,Qe,0,Ae,B,null),ye>>=1,Qe>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const ye=s.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),pe.parentNode!==ye){ye.appendChild(pe),S.add(w),ye.onpaint=Qe=>{const ut=Qe.changedElements;for(const Oe of S)ut.includes(Oe.image)&&(Oe.needsUpdate=!0)},ye.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,pe);else{const ut=s.RGBA,Oe=s.RGBA,Mt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ut,Oe,Mt,pe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(we&&be){const ye=at(Pe[0]);n.texStorage2D(s.TEXTURE_2D,ht,me,ye.width,ye.height)}for(let ye=0,Qe=Pe.length;ye<Qe;ye++)fe=Pe[ye],we?$e&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,Ae,B,fe):n.texImage2D(s.TEXTURE_2D,ye,me,Ae,B,fe);w.generateMipmaps=!1}else if(we){if(be){const ye=at(pe);n.texStorage2D(s.TEXTURE_2D,ht,me,ye.width,ye.height)}$e&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,B,pe)}else n.texImage2D(s.TEXTURE_2D,0,me,Ae,B,pe);F(w)&&w.mipmapsAutoUpdate===!0&&P(Ee),Ne.__version=Ce.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function Jt(N,w,ie){if(w.image.length!==6)return;const Ee=je(N,w),ge=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+ie);const Ce=r.get(ge);if(ge.version!==Ce.__version||Ee===!0){n.activeTexture(s.TEXTURE0+ie);const Ne=yt.getPrimaries(yt.workingColorSpace),he=w.colorSpace===Cr?null:yt.getPrimaries(w.colorSpace),pe=w.colorSpace===Cr||Ne===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ae=w.isCompressedTexture||w.image[0].isCompressedTexture,B=w.image[0]&&w.image[0].isDataTexture,me=[];for(let Oe=0;Oe<6;Oe++)!Ae&&!B?me[Oe]=b(w.image[Oe],!0,o.maxCubemapSize):me[Oe]=B?w.image[Oe].image:w.image[Oe],me[Oe]=et(w,me[Oe]);const fe=me[0],Pe=l.convert(w.format,w.colorSpace),we=l.convert(w.type);let be=D(w.internalFormat,Pe,we,w.normalized,w.colorSpace);const $e=w.isVideoTexture!==!0,ht=Ce.__version===void 0||Ee===!0,ye=ge.dataReady;let Qe=R(w,fe);lt(s.TEXTURE_CUBE_MAP,w);let ut;if(w.isDepthTexture){if(be=M(w.format===Pr,w.type),ht)if($e)n.texStorage2D(s.TEXTURE_CUBE_MAP,1,be,fe.width,fe.height);else for(let Oe=0;Oe<6;Oe++)n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,be,fe.width,fe.height,0,Pe,we,null)}else if(Ae){$e&&ht&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Qe,be,fe.width,fe.height);for(let Oe=0;Oe<6;Oe++){ut=me[Oe].mipmaps;for(let Mt=0;Mt<ut.length;Mt++){const Kt=ut[Mt];w.format!==Fi?Pe!==null?$e?ye&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Mt,0,0,Kt.width,Kt.height,Pe,Kt.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Mt,be,Kt.width,Kt.height,0,Kt.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?ye&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Mt,0,0,Kt.width,Kt.height,Pe,we,Kt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Mt,be,Kt.width,Kt.height,0,Pe,we,Kt.data)}}}else{if(ut=w.mipmaps,$e&&ht){ut.length>0&&Qe++;const Oe=at(me[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Qe,be,Oe.width,Oe.height)}for(let Oe=0;Oe<6;Oe++)if(B){$e?ye&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,me[Oe].width,me[Oe].height,Pe,we,me[Oe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,be,me[Oe].width,me[Oe].height,0,Pe,we,me[Oe].data);for(let Mt=0;Mt<ut.length;Mt++){const Yn=ut[Mt].image[Oe].image;$e?ye&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Mt+1,0,0,Yn.width,Yn.height,Pe,we,Yn.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Mt+1,be,Yn.width,Yn.height,0,Pe,we,Yn.data)}}else{$e?ye&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,Pe,we,me[Oe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,be,Pe,we,me[Oe]);for(let Mt=0;Mt<ut.length;Mt++){const Kt=ut[Mt];$e?ye&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Mt+1,0,0,Pe,we,Kt.image[Oe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Mt+1,be,Pe,we,Kt.image[Oe])}}}F(w)&&w.mipmapsAutoUpdate===!0&&P(s.TEXTURE_CUBE_MAP),Ce.__version=ge.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function Ft(N,w,ie,Ee,ge,Ce){const Ne=l.convert(ie.format,ie.colorSpace),he=l.convert(ie.type),pe=D(ie.internalFormat,Ne,he,ie.normalized,ie.colorSpace),Ae=r.get(w),B=r.get(ie);if(B.__renderTarget=w,!Ae.__hasExternalTextures){const me=Math.max(1,w.width>>Ce),fe=Math.max(1,w.height>>Ce);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?n.texImage3D(ge,Ce,pe,me,fe,w.depth,0,Ne,he,null):n.texImage2D(ge,Ce,pe,me,fe,0,Ne,he,null)}n.bindFramebuffer(s.FRAMEBUFFER,N),Le(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,ge,B.__webglTexture,0,Tt(w)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ee,ge,B.__webglTexture,Ce),n.bindFramebuffer(s.FRAMEBUFFER,null)}function An(N,w,ie){if(s.bindRenderbuffer(s.RENDERBUFFER,N),w.depthBuffer){const Ee=w.depthTexture,ge=Ee&&Ee.isDepthTexture?Ee.type:null,Ce=M(w.stencilBuffer,ge),Ne=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Le(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt(w),Ce,w.width,w.height):ie?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt(w),Ce,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ne,s.RENDERBUFFER,N)}else{const Ee=w.textures;for(let ge=0;ge<Ee.length;ge++){const Ce=Ee[ge],Ne=l.convert(Ce.format,Ce.colorSpace),he=l.convert(Ce.type),pe=D(Ce.internalFormat,Ne,he,Ce.normalized,Ce.colorSpace);Le(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt(w),pe,w.width,w.height):ie?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt(w),pe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,pe,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function kt(N,w,ie){const Ee=w.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=r.get(w.depthTexture);ge.__renderTarget=w;const Ce=Ee?w.depthTexture.image[0]:w.depthTexture.image;(!ge.__webglTexture||Ce.width!==w.width||Ce.height!==w.height)&&(Ce.width=w.width,Ce.height=w.height,w.depthTexture.needsUpdate=!0),Ee?_e(w.depthTexture,0):de(w.depthTexture,0);const Ne=ge.__webglTexture,he=Tt(w),pe=Ee?s.TEXTURE_CUBE_MAP_POSITIVE_X+ie:s.TEXTURE_2D,Ae=w.depthTexture.format===Pr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===Lr)Le(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ae,pe,Ne,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,Ae,pe,Ne,0);else if(w.depthTexture.format===Pr)Le(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ae,pe,Ne,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,Ae,pe,Ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function sn(N){const w=r.get(N),ie=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){const Ee=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Ee){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Ee.removeEventListener("dispose",ge)};Ee.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=Ee}if(N.depthTexture&&!w.__autoAllocateDepthBuffer)if(ie)for(let Ee=0;Ee<6;Ee++)kt(w.__webglFramebuffer[Ee],N,Ee);else N.texture.mipmaps.length>0?kt(w.__webglFramebuffer[0],N,0):kt(w.__webglFramebuffer,N,0);else if(ie){w.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Ee]),w.__webglDepthbuffer[Ee]===void 0)w.__webglDepthbuffer[Ee]=s.createRenderbuffer(),An(w.__webglDepthbuffer[Ee],N,!1);else{const ge=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=w.__webglDepthbuffer[Ee];s.bindRenderbuffer(s.RENDERBUFFER,Ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Ce)}}else if(N.texture.mipmaps.length>0?n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),An(w.__webglDepthbuffer,N,!1);else{const ge=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Ce)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(N,w,ie){const Ee=r.get(N);w!==void 0&&Ft(Ee.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ie!==void 0&&sn(N)}function en(N){const w=N.texture,ie=r.get(N),Ee=r.get(w);N.addEventListener("dispose",$),W(N);const ge=N.textures,Ce=N.isWebGLCubeRenderTarget===!0,Ne=ge.length>1;if(Ne||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture()),Ee.__version=w.version,c.memory.textures++),Ce){ie.__webglFramebuffer=[];for(let he=0;he<6;he++)if(w.mipmaps.length>0){ie.__webglFramebuffer[he]=[];for(let pe=0;pe<w.mipmaps.length;pe++)ie.__webglFramebuffer[he][pe]=s.createFramebuffer()}else ie.__webglFramebuffer[he]=s.createFramebuffer()}else{if(w.mipmaps.length>0){ie.__webglFramebuffer=[];for(let he=0;he<w.mipmaps.length;he++)ie.__webglFramebuffer[he]=s.createFramebuffer()}else ie.__webglFramebuffer=s.createFramebuffer();if(Ne)for(let he=0,pe=ge.length;he<pe;he++){const Ae=r.get(ge[he]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=s.createTexture(),c.memory.textures++)}if(N.samples>0&&Le(N)===!1){ie.__webglMultisampledFramebuffer=s.createFramebuffer(),ie.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let he=0;he<ge.length;he++){const pe=ge[he];ie.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ie.__webglColorRenderbuffer[he]);const Ae=l.convert(pe.format,pe.colorSpace),B=l.convert(pe.type),me=D(pe.internalFormat,Ae,B,pe.normalized,pe.colorSpace,N.isXRRenderTarget===!0),fe=Tt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,me,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,ie.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(ie.__webglDepthRenderbuffer=s.createRenderbuffer(),An(ie.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ce){n.bindTexture(s.TEXTURE_CUBE_MAP,Ee.__webglTexture),lt(s.TEXTURE_CUBE_MAP,w);for(let he=0;he<6;he++)if(w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)Ft(ie.__webglFramebuffer[he][pe],N,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,pe);else Ft(ie.__webglFramebuffer[he],N,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);F(w)?P(s.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),n.unbindTexture()}else if(Ne){for(let he=0,pe=ge.length;he<pe;he++){const Ae=ge[he],B=r.get(Ae);let me=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(me=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(me,B.__webglTexture),lt(me,Ae),Ft(ie.__webglFramebuffer,N,Ae,s.COLOR_ATTACHMENT0+he,me,0),F(Ae)&&P(me)}n.unbindTexture()}else{let he=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(he=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(he,Ee.__webglTexture),lt(he,w),w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)Ft(ie.__webglFramebuffer[pe],N,w,s.COLOR_ATTACHMENT0,he,pe);else Ft(ie.__webglFramebuffer,N,w,s.COLOR_ATTACHMENT0,he,0);F(w)?P(he):w.mipmaps.length>0&&s.texParameteri(he,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),n.unbindTexture()}N.depthBuffer&&sn(N)}function q(N){const w=N.textures;for(let ie=0,Ee=w.length;ie<Ee;ie++){const ge=w[ie];if(F(ge)&&ge.mipmapsAutoUpdate===!0){const Ce=U(N),Ne=r.get(ge).__webglTexture;n.bindTexture(Ce,Ne),P(Ce),n.unbindTexture()}}}const $t=[];function At(N){if(N.samples>0){if(Le(N)===!1){const w=N.textures,ie=N.width,Ee=N.height;let ge=s.COLOR_BUFFER_BIT;const Ce=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=r.get(N),he=w.length>1;if(he)for(let Ae=0;Ae<w.length;Ae++)n.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ae=0;Ae<w.length;Ae++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ae]);const B=r.get(w[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,B,0)}s.blitFramebuffer(0,0,ie,Ee,0,0,ie,Ee,ge,s.NEAREST),p===!0&&($t.length=0,$t.push(s.COLOR_ATTACHMENT0+Ae),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&$t.push(Ce),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$t))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let Ae=0;Ae<w.length;Ae++){n.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ae]);const B=r.get(w[Ae]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,B,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&p){const w=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Tt(N){return Math.min(o.maxSamples,N.samples)}function Le(N){const w=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Vt(N){const w=c.render.frame;_.get(N)!==w&&(_.set(N,w),N.update())}function et(N,w){const ie=N.colorSpace,Ee=N.format,ge=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ie!==Ll&&ie!==Cr&&(yt.getTransfer(ie)===Ut?(Ee!==Fi||ge!==li)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",ie)),w}function at(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=Se,this.resetTextureUnits=K,this.getTextureUnits=L,this.setTextureUnits=te,this.setTexture2D=de,this.setTexture2DArray=Me,this.setTexture3D=Ue,this.setTextureCube=_e,this.rebindTextures=qt,this.setupRenderTarget=en,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=sn,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=Le,this.dispose=Z}function TE(s,e){function n(r,o=Cr){let l;const c=yt.getTransfer(o);if(r===li)return s.UNSIGNED_BYTE;if(r===Vf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Wf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Gm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Vm)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===zm)return s.BYTE;if(r===Hm)return s.SHORT;if(r===Ga)return s.UNSIGNED_SHORT;if(r===Gf)return s.INT;if(r===Bi)return s.UNSIGNED_INT;if(r===Ui)return s.FLOAT;if(r===ki)return s.HALF_FLOAT;if(r===Wm)return s.ALPHA;if(r===Xm)return s.RGB;if(r===Fi)return s.RGBA;if(r===Lr)return s.DEPTH_COMPONENT;if(r===Pr)return s.DEPTH_STENCIL;if(r===Ym)return s.RED;if(r===Xf)return s.RED_INTEGER;if(r===Qr)return s.RG;if(r===Yf)return s.RG_INTEGER;if(r===qf)return s.RGBA_INTEGER;if(r===El||r===Tl||r===wl||r===Al)if(c===Ut)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===El)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Tl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Al)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===El)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Tl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Al)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===of||r===lf||r===uf||r===cf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===of)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===lf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===uf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ff||r===df||r===hf||r===pf||r===mf||r===bl||r===gf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===ff||r===df)return c===Ut?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===hf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===pf)return l.COMPRESSED_R11_EAC;if(r===mf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===bl)return l.COMPRESSED_RG11_EAC;if(r===gf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===_f||r===vf||r===xf||r===Sf||r===Mf||r===yf||r===Ef||r===Tf||r===wf||r===Af||r===Rf||r===Cf||r===bf||r===Pf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===_f)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Mf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ef)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Tf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Af)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Rf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Pf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lf||r===Nf||r===Df)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Lf)return c===Ut?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Df)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===If||r===Uf||r===Pl||r===Ff)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===If)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Uf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ff)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const wE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new rg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new es({vertexShader:wE,fragmentShader:AE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new yn(new ei(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CE extends ts{constructor(e,n){super();const r=this;let o=null,l=1,c=null,d="local-floor",p=1,m=null,_=null,S=null,g=null,y=null,T=null;const C=typeof XRWebGLBinding<"u",v=new RE,x={},b=n.getContextAttributes();let F=null,P=null;const U=[],D=[],M=new Lt;let R=null,W=null;const O=new Si;O.viewport=new rn;const V=new Si;V.viewport=new rn;const $=[O,V],se=new kv;let k=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let de=U[ee];return de===void 0&&(de=new Dc,U[ee]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ee){let de=U[ee];return de===void 0&&(de=new Dc,U[ee]=de),de.getGripSpace()},this.getHand=function(ee){let de=U[ee];return de===void 0&&(de=new Dc,U[ee]=de),de.getHandSpace()};function ae(ee){const de=D.indexOf(ee.inputSource);if(de===-1)return;const Me=U[de];Me!==void 0&&(Me.update(ee.inputSource,ee.frame,m||c),Me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function X(){o.removeEventListener("select",ae),o.removeEventListener("selectstart",ae),o.removeEventListener("selectend",ae),o.removeEventListener("squeeze",ae),o.removeEventListener("squeezestart",ae),o.removeEventListener("squeezeend",ae),o.removeEventListener("end",X),o.removeEventListener("inputsourceschange",j);for(let ee=0;ee<U.length;ee++){const de=D[ee];de!==null&&(D[ee]=null,U[ee].disconnect(de))}k=null,Z=null,v.reset();for(const ee in x)delete x[ee];if(e.setRenderTarget(F),y=null,g=null,S=null,o=null,P=null,Se.stop(),r.isPresenting=!1,e.setPixelRatio(R),e.setSize(M.width,M.height,!1),W!==null){const ee=W.camera;ee.fov=W.fov,ee.zoom=W.zoom,ee.updateProjectionMatrix(),W=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){l=ee,r.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){d=ee,r.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(ee){m=ee},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(o,n)),S},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(ee){if(o=ee,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",ae),o.addEventListener("selectstart",ae),o.addEventListener("selectend",ae),o.addEventListener("squeeze",ae),o.addEventListener("squeezestart",ae),o.addEventListener("squeezeend",ae),o.addEventListener("end",X),o.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(M),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ue=null,_e=null;b.depth&&(_e=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=b.stencil?Pr:Lr,Ue=b.stencil?Xs:Bi);const ke={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:l};S=this.getBinding(),g=S.createProjectionLayer(ke),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Oi(g.textureWidth,g.textureHeight,{format:Fi,type:li,depthTexture:new Ys(g.textureWidth,g.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,n,Me),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new Oi(y.framebufferWidth,y.framebufferHeight,{format:Fi,type:li,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,c=await o.requestReferenceSpace(d),Se.setContext(o),Se.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(ee){for(let de=0;de<ee.removed.length;de++){const Me=ee.removed[de],Ue=D.indexOf(Me);Ue>=0&&(D[Ue]=null,U[Ue].disconnect(Me))}for(let de=0;de<ee.added.length;de++){const Me=ee.added[de];let Ue=D.indexOf(Me);if(Ue===-1){for(let ke=0;ke<U.length;ke++)if(ke>=D.length){D.push(Me),Ue=ke;break}else if(D[ke]===null){D[ke]=Me,Ue=ke;break}if(Ue===-1)break}const _e=U[Ue];_e&&_e.connect(Me)}}function H(ee,de){de===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(de.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(o===null)return;let de=ee.near,Me=ee.far;v.texture!==null&&(v.depthNear>0&&(de=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),se.near=V.near=O.near=de,se.far=V.far=O.far=Me,(k!==se.near||Z!==se.far)&&(o.updateRenderState({depthNear:se.near,depthFar:se.far}),k=se.near,Z=se.far),se.layers.mask=ee.layers.mask|6,O.layers.mask=se.layers.mask&-5,V.layers.mask=se.layers.mask&-3;const Ue=ee.parent,_e=se.cameras;H(se,Ue);for(let ke=0;ke<_e.length;ke++)H(_e[ke],Ue);se.projectionMatrix.copy(O.projectionMatrix),se.projectionMatrixInverse.copy(O.projectionMatrixInverse),W===null&&ee.isPerspectiveCamera&&(W={camera:ee,fov:ee.fov,zoom:ee.zoom}),K(ee,se,Ue)};function K(ee,de,Me){Me===null?ee.matrix.copy(de.matrixWorld):(ee.matrix.copy(Me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(de.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Of*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(g===null&&y===null))return p},this.setFoveation=function(ee){p=ee,g!==null&&(g.fixedFoveation=ee),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ee)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(se)},this.getCameraTexture=function(ee){return x[ee]};let L=null;function te(ee,de){if(_=de.getViewerPose(m||c),T=de,_!==null){const Me=_.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let Ue=!1;Me.length!==se.cameras.length&&(se.cameras.length=0,Ue=!0);for(let tt=0;tt<Me.length;tt++){const lt=Me[tt];let je=null;if(y!==null)je=y.getViewport(lt);else{const Dt=S.getViewSubImage(g,lt);je=Dt.viewport,tt===0&&(e.setRenderTargetTextures(P,Dt.colorTexture,Dt.depthStencilTexture),e.setRenderTarget(P))}let nt=$[tt];nt===void 0&&(nt=new Si,nt.layers.enable(tt),nt.viewport=new rn,$[tt]=nt),nt.matrix.fromArray(lt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(lt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(je.x,je.y,je.width,je.height),tt===0&&(se.matrix.copy(nt.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),Ue===!0&&se.cameras.push(nt)}const _e=o.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){S=r.getBinding();const tt=S.getDepthInformation(Me[0]);tt&&tt.isValid&&tt.texture&&v.init(tt,o.renderState)}if(_e&&_e.includes("camera-access")&&C){e.state.unbindTexture(),S=r.getBinding();for(let tt=0;tt<Me.length;tt++){const lt=Me[tt].camera;if(lt){let je=x[lt];je||(je=new rg,x[lt]=je);const nt=S.getCameraImage(lt);je.sourceTexture=nt}}}}for(let Me=0;Me<U.length;Me++){const Ue=D[Me],_e=U[Me];Ue!==null&&_e!==void 0&&_e.update(Ue,de,m||c)}L&&L(ee,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),T=null}const Se=new lg;Se.setAnimationLoop(te),this.setAnimationLoop=function(ee){L=ee},this.dispose=function(){}}}const bE=new ln,vg=new dt;vg.set(-1,0,0,0,1,0,0,0,1);function PE(s,e){function n(v,x){v.matrixAutoUpdate===!0&&v.updateMatrix(),x.value.copy(v.matrix)}function r(v,x){x.color.getRGB(v.fogColor.value,sg(s)),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function o(v,x,b,F,P){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(v,x):x.isMeshLambertMaterial?(l(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(v,x),S(v,x)):x.isMeshPhongMaterial?(l(v,x),_(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(v,x),g(v,x),x.isMeshPhysicalMaterial&&y(v,x,P)):x.isMeshMatcapMaterial?(l(v,x),T(v,x)):x.isMeshDepthMaterial?l(v,x):x.isMeshDistanceMaterial?(l(v,x),C(v,x)):x.isMeshNormalMaterial?l(v,x):x.isLineBasicMaterial?(c(v,x),x.isLineDashedMaterial&&d(v,x)):x.isPointsMaterial?p(v,x,b,F):x.isSpriteMaterial?m(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map,n(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,n(x.alphaMap,v.alphaMapTransform)),x.bumpMap&&(v.bumpMap.value=x.bumpMap,n(x.bumpMap,v.bumpMapTransform),v.bumpScale.value=x.bumpScale,x.side===Xn&&(v.bumpScale.value*=-1)),x.normalMap&&(v.normalMap.value=x.normalMap,n(x.normalMap,v.normalMapTransform),v.normalScale.value.copy(x.normalScale),x.side===Xn&&v.normalScale.value.negate()),x.displacementMap&&(v.displacementMap.value=x.displacementMap,n(x.displacementMap,v.displacementMapTransform),v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,v.emissiveMapTransform)),x.specularMap&&(v.specularMap.value=x.specularMap,n(x.specularMap,v.specularMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const b=e.get(x),F=b.envMap,P=b.envMapRotation;F&&(v.envMap.value=F,v.envMapRotation.value.setFromMatrix4(bE.makeRotationFromEuler(P)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(vg),v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap&&(v.lightMap.value=x.lightMap,v.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,v.lightMapTransform)),x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,v.aoMapTransform))}function c(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,x.map&&(v.map.value=x.map,n(x.map,v.mapTransform))}function d(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function p(v,x,b,F){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*b,v.scale.value=F*.5,x.map&&(v.map.value=x.map,n(x.map,v.uvTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,n(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function m(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map,n(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,n(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function _(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function S(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function g(v,x){v.metalness.value=x.metalness,x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,v.metalnessMapTransform)),v.roughness.value=x.roughness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,v.roughnessMapTransform)),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function y(v,x,b){v.ior.value=x.ior,x.diffuseRoughness>0&&(v.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(v.diffuseRoughnessMap.value=x.diffuseRoughnessMap,n(x.diffuseRoughnessMap,v.diffuseRoughnessMapTransform))),x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,v.sheenColorMapTransform)),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,v.sheenRoughnessMapTransform))),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,v.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(v.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Xn&&v.clearcoatNormalScale.value.negate())),x.dispersion>0&&(v.dispersion.value=x.dispersion),x.retroreflectivity>0&&(v.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,v.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,v.iridescenceMapTransform)),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,v.transmissionMapTransform)),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(v.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(v.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,v.specularColorMapTransform)),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,v.specularIntensityMapTransform))}function T(v,x){x.matcap&&(v.matcap.value=x.matcap)}function C(v,x){const b=e.get(x).light;v.referencePosition.value.setFromMatrixPosition(b.matrixWorld),v.nearDistance.value=b.shadow.camera.near,v.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function LE(s,e,n,r){let o={},l={};function c(b,F){const P=F.program;r.uniformBlockBinding(b,P,o[b.id])}function d(b,F){let P=o[b.id];P===void 0&&(T(b),P=p(b),o[b.id]=P,b.addEventListener("dispose",v));const U=F.program;r.updateUBOMapping(b,U);const D=e.render.frame;l[b.id]!==D&&(m(b),l[b.id]=D)}function p(b){const F=s.createBuffer(),P=b.__size,U=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,F),s.bufferData(s.UNIFORM_BUFFER,P,U),s.bindBuffer(s.UNIFORM_BUFFER,null),F}function m(b){const F=o[b.id],P=b.uniforms,U=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let D=0,M=P.length;D<M;D++){const R=P[D];if(Array.isArray(R))for(let W=0,O=R.length;W<O;W++)_(R[W],D,W,U);else _(R,D,0,U)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(b,F,P,U){if(g(b,F,P,U)===!0){const D=b.__offset,M=b.value;if(Array.isArray(M)){let R=0;for(let W=0;W<M.length;W++){const O=M[W],V=C(O,!0);S(O,b.__data,R),R+=V.storage/Float32Array.BYTES_PER_ELEMENT}}else S(M,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,D,b.__data)}}function S(b,F,P){typeof b=="number"||typeof b=="boolean"?F[P]=b:b.isMatrix3?(F[P]=b.elements[0],F[P+1]=b.elements[1],F[P+2]=b.elements[2],F[P+3]=0,F[P+4]=b.elements[3],F[P+5]=b.elements[4],F[P+6]=b.elements[5],F[P+7]=0,F[P+8]=b.elements[6],F[P+9]=b.elements[7],F[P+10]=b.elements[8],F[P+11]=0):ArrayBuffer.isView(b)?F.set(b.subarray(0,F.length-P),P):b.toArray(F,P)}function g(b,F,P,U){const D=b.value,M=F+"_"+P;if(Array.isArray(D)){U[M]===void 0&&(U[M]=[]);const R=U[M];let W=!1;for(let O=0;O<D.length;O++)y(D[O],R,O)===!0&&(W=!0);return W}return y(D,U,M)}function y(b,F,P){if(F[P]===void 0)return typeof b=="number"||typeof b=="boolean"?F[P]=b:ArrayBuffer.isView(b)?F[P]=b.slice():F[P]=b.clone(),!0;{const U=F[P];if(typeof b=="number"||typeof b=="boolean"){if(U!==b)return F[P]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(U.equals(b)===!1)return U.copy(b),!0}}return!1}function T(b){const F=b.uniforms;let P=0;const U=16;for(let M=0,R=F.length;M<R;M++){const W=Array.isArray(F[M])?F[M]:[F[M]];for(let O=0,V=W.length;O<V;O++){const $=W[O],se=Array.isArray($.value)?$.value:[$.value],k=Array.isArray(F[M])||Array.isArray($.value);let Z=P;for(let X=0,j=se.length;X<j;X++){const H=se[X],K=C(H,k),L=P%U,te=L%K.boundary,Se=L+te;P+=te,Se!==0&&U-Se<K.storage&&(P+=U-Se),X===0&&(Z=P),P+=K.storage}const ae=$.type==="int"?Int32Array:$.type==="uint"?Uint32Array:Float32Array;$.__data=new ae((P-Z)/Float32Array.BYTES_PER_ELEMENT),$.__offset=Z}}const D=P%U;return D>0&&(P+=U-D),b.__size=P,b.__cache={},this}function C(b,F){const P={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(P.boundary=4,P.storage=4):b.isVector2?(P.boundary=8,P.storage=8):b.isVector3||b.isColor?(P.boundary=16,P.storage=12):b.isVector4?(P.boundary=16,P.storage=16):b.isMatrix3?(P.boundary=16,P.storage=48):b.isMatrix4?(P.boundary=16,P.storage=64):b.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(P.boundary=16,P.storage=b.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",b),F===!0&&(P.boundary=16,P.storage=Math.ceil(P.storage/16)*16),P}function v(b){const F=b.target;F.removeEventListener("dispose",v),s.deleteBuffer(o[F.id]),delete o[F.id],delete l[F.id]}function x(){for(const b in o)s.deleteBuffer(o[b]);o={},l={}}return{bind:c,update:d,dispose:x}}const NE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Di=null;function DE(){return Di===null&&(Di=new Av(NE,16,16,Qr,ki),Di.name="DFG_LUT",Di.minFilter=Wn,Di.magFilter=Wn,Di.wrapS=er,Di.wrapT=er,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}class IE{constructor(e={}){const{canvas:n=j_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:y=li}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=c;const C=y,v=new Set([qf,Yf,Xf]),x=new Set([li,Bi,Ga,Xs,Vf,Wf]),b=new Uint32Array(4),F=new Int32Array(4),P={textures:[],min:[],max:[],resolution:[]};let U=null,D=null;const M=[],R=[];let W=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let V=!1,$=null,se=null,k=null,Z=null;this._outputColorSpace=Qt;let ae=0,X=0,j=null,H=-1,K=null;const L=new rn,te=new rn;let Se=null;const ee=new Nt(0);let de=0,Me=n.width,Ue=n.height,_e=1,ke=null,vt=null;const tt=new rn(0,0,Me,Ue),lt=new rn(0,0,Me,Ue);let je=!1;const nt=new Il,Dt=new jf;let Bt=!1,Jt=!1;const Ft=new ln,An=new ce,kt=new rn,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function en(){return j===null?_e:1}let q=r;function $t(A,z){return n.getContext(A,z)}let At,Tt,Le,Vt,et,at,N,w,ie,Ee,ge,Ce,Ne,he,pe,Ae,B,me,fe,Pe,we,be,$e;try{const A={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hf}`),n.addEventListener("webglcontextlost",Qe,!1),n.addEventListener("webglcontextrestored",ut,!1),n.addEventListener("webglcontextcreationerror",Oe,!1),q===null){const z="webgl2";if(q=$t(z,A),q===null)throw $t(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ht()}catch(A){throw n.removeEventListener("webglcontextlost",Qe,!1),n.removeEventListener("webglcontextrestored",ut,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),Pt("WebGLRenderer: "+A.message),A}function ht(){At=new OM(q),At.init(),we=new TE(q,At),Tt=new AM(q,At,e,we),Le=new yE(q,At),Tt.reversedDepthBuffer&&g&&Le.buffers.depth.setReversed(!0),se=q.createFramebuffer(),k=q.createFramebuffer(),Z=q.createFramebuffer(),Vt=new zM(q),et=new lE,at=new EE(q,At,Le,et,Tt,we,Vt),N=new FM(O),w=new Gv(q),be=new TM(q,w),ie=new BM(q,w,Vt,be),Ee=new GM(q,ie,w,be,Vt),me=new HM(q,Tt,at),pe=new RM(et),ge=new oE(O,N,At,Tt,be,pe),Ce=new PE(O,et),Ne=new cE,he=new gE(At),B=new EM(O,N,Le,Ee,T,p),Ae=new ME(O,Ee,Tt),$e=new LE(q,Vt,Tt,Le),fe=new wM(q,At,Vt),Pe=new kM(q,At,Vt),Vt.programs=ge.programs,O.capabilities=Tt,O.extensions=At,O.properties=et,O.renderLists=Ne,O.shadowMap=Ae,O.state=Le,O.info=Vt}C!==li&&(W=new WM(C,n.width,n.height,d,o,l));const ye=new CE(O,q);this.xr=ye,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=At.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=At.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(A){A!==void 0&&(_e=A,this.setSize(Me,Ue,!1))},this.getSize=function(A){return A.set(Me,Ue)},this.setSize=function(A,z,oe=!0){if(ye.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=A,Ue=z,n.width=Math.floor(A*_e),n.height=Math.floor(z*_e),oe===!0&&(n.style.width=A+"px",n.style.height=z+"px"),W!==null&&W.setSize(n.width,n.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(Me*_e,Ue*_e).floor()},this.setDrawingBufferSize=function(A,z,oe){Me=A,Ue=z,_e=oe,n.width=Math.floor(A*oe),n.height=Math.floor(z*oe),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(C===li){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}W.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(tt)},this.setViewport=function(A,z,oe,ne){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,z,oe,ne),Le.viewport(L.copy(tt).multiplyScalar(en()).round())},this.getScissor=function(A){return A.copy(lt)},this.setScissor=function(A,z,oe,ne){A.isVector4?lt.set(A.x,A.y,A.z,A.w):lt.set(A,z,oe,ne),Le.scissor(te.copy(lt).multiplyScalar(en()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(A){Le.setScissorTest(je=A)},this.setOpaqueSort=function(A){ke=A},this.setTransparentSort=function(A){vt=A},this.getClearColor=function(A){return A.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,oe=!0){let ne=0;if(A){let J=!1;if(j!==null){const Ie=j.texture.format;J=v.has(Ie)}if(J){const Ie=j.texture.type,He=x.has(Ie),De=B.getClearColor(),Fe=B.getClearAlpha(),Ve=De.r,ot=De.g,pt=De.b;He?(b[0]=Ve,b[1]=ot,b[2]=pt,b[3]=Fe,q.clearBufferuiv(q.COLOR,0,b)):(F[0]=Ve,F[1]=ot,F[2]=pt,F[3]=Fe,q.clearBufferiv(q.COLOR,0,F))}else ne|=q.COLOR_BUFFER_BIT}z&&(ne|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ne|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&q.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),$=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Qe,!1),n.removeEventListener("webglcontextrestored",ut,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),B.dispose(),Ne.dispose(),he.dispose(),at.dispose(),et.dispose(),N.dispose(),Ee.dispose(),ie.dispose(),be.dispose(),$e.dispose(),ge.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",$a),ye.removeEventListener("sessionend",Ti),wi.stop()};function Qe(A){A.preventDefault(),Op("WebGLRenderer: Context Lost."),V=!0}function ut(){Op("WebGLRenderer: Context Restored."),V=!1;const A=Vt.autoReset,z=Ae.enabled,oe=Ae.autoUpdate,ne=Ae.needsUpdate,J=Ae.type;ht(),Vt.autoReset=A,Ae.enabled=z,Ae.autoUpdate=oe,Ae.needsUpdate=ne,Ae.type=J}function Oe(A){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Mt(A){const z=A.target;z.removeEventListener("dispose",Mt),Kt(z)}function Kt(A){Yn(A),et.remove(A)}function Yn(A){const z=et.get(A).programs;z!==void 0&&(z.forEach(function(oe){ge.releaseProgram(oe)}),A.isShaderMaterial&&ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,oe,ne,J,Ie){z===null&&(z=sn);const He=J.isMesh&&J.matrixWorld.determinantAffine()<0,De=ea(A,z,oe,ne,J);Le.setMaterial(ne,He);let Fe=oe.index,Ve=1;if(ne.wireframe===!0){if(Fe=ie.getWireframeAttribute(oe),Fe===void 0)return;Ve=2}const ot=oe.drawRange,pt=oe.attributes.position;let We=ot.start*Ve,gt=(ot.start+ot.count)*Ve;Ie!==null&&(We=Math.max(We,Ie.start*Ve),gt=Math.min(gt,(Ie.start+Ie.count)*Ve)),Fe!==null?(We=Math.max(We,0),gt=Math.min(gt,Fe.count)):pt!=null&&(We=Math.max(We,0),gt=Math.min(gt,pt.count));const Xt=gt-We;if(Xt<0||Xt===1/0)return;be.setup(J,ne,De,oe,Fe);let It,bt=fe;if(Fe!==null&&(It=w.get(Fe),bt=Pe,bt.setIndex(It)),J.isMesh)ne.wireframe===!0?(Le.setLineWidth(ne.wireframeLinewidth*en()),bt.setMode(q.LINES)):bt.setMode(q.TRIANGLES);else if(J.isLine){let tn=ne.linewidth;tn===void 0&&(tn=1),Le.setLineWidth(tn*en()),J.isLineSegments?bt.setMode(q.LINES):J.isLineLoop?bt.setMode(q.LINE_LOOP):bt.setMode(q.LINE_STRIP)}else J.isPoints?bt.setMode(q.POINTS):J.isSprite&&bt.setMode(q.TRIANGLES);if(J.isBatchedMesh)if(At.get("WEBGL_multi_draw"))bt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const tn=J._multiDrawStarts,Xe=J._multiDrawCounts,fn=J._multiDrawCount,Ke=Fe?w.get(Fe).bytesPerElement:1,Ai=et.get(ne).currentProgram.getUniforms();for(let dn=0;dn<fn;dn++)Ai.setValue(q,"_gl_DrawID",dn),bt.render(tn[dn]/Ke,Xe[dn])}else if(J.isInstancedMesh)bt.renderInstances(We,Xt,J.count);else if(oe.isInstancedBufferGeometry){const tn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Xe=Math.min(oe.instanceCount,tn);bt.renderInstances(We,Xt,Xe)}else bt.render(We,Xt)};function is(A,z,oe,ne){$!==null&&A.isNodeMaterial&&$.setObject(ne,A),Bt===!0&&pe.setState(A,oe,!1),A.transparent===!0&&A.side===Ji&&A.forceSinglePass===!1?(A.side=Xn,A.needsUpdate=!0,Dr(A,z,ne),A.side=jr,A.needsUpdate=!0,Dr(A,z,ne),A.side=Ji):Dr(A,z,ne)}this.compile=function(A,z,oe=null){oe===null&&(oe=A),$!==null&&$.renderStart(A,z,oe),D=he.get(oe),D.init(z),R.push(D),oe.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(D.pushLight(J),J.castShadow&&D.pushShadow(J))}),A!==oe&&A.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(D.pushLight(J),J.castShadow&&D.pushShadow(J))}),D.setupLights(),$!==null&&$.updateLights(D.state.lightsArray),Jt=this.localClippingEnabled,Bt=pe.init(this.clippingPlanes,Jt),Bt===!0&&pe.setGlobalState(this.clippingPlanes,z),$!==null&&Ae.render(D.state.shadowsArray,oe,z);const ne=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ie=J.material;if(Ie)if(Array.isArray(Ie))for(let He=0;He<Ie.length;He++){const De=Ie[He];is(De,oe,z,J),ne.add(De)}else is(Ie,oe,z,J),ne.add(Ie)}),D=R.pop(),$!==null&&$.renderEnd(),ne},this.compileAsync=function(A,z,oe=null){const ne=this.compile(A,z,oe);return new Promise(J=>{function Ie(){if(ne.forEach(function(He){const Fe=et.get(He).currentProgram;(Fe===void 0||Fe.isReady())&&ne.delete(He)}),ne.size===0){J(A);return}setTimeout(Ie,10)}At.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Zs=null;function Hl(A){Zs&&Zs(A)}function $a(){wi.stop()}function Ti(){wi.start()}const wi=new lg;wi.setAnimationLoop(Hl),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(A){Zs=A,ye.setAnimationLoop(A),A===null?wi.stop():wi.start()},ye.addEventListener("sessionstart",$a),ye.addEventListener("sessionend",Ti),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;$!==null&&$.renderStart(A,z);const oe=ye.enabled===!0&&ye.isPresenting===!0,ne=W!==null&&(j===null||oe)&&W.begin(O,j);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(W===null||W.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(z),z=ye.getCamera()),A.isScene===!0&&A.onBeforeRender(O,A,z,j),D=he.get(A,R.length),D.init(z),D.state.textureUnits=at.getTextureUnits(),R.push(D),Ft.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?Dt.setFromArrayCamera(z):nt.setFromProjectionMatrix(Ft,yi,z.reversedDepth),Jt=this.localClippingEnabled,Bt=pe.init(this.clippingPlanes,Jt),U=Ne.get(A,M.length),U.init(),M.push(U),this.info.render.frame++,ye.enabled===!0&&ye.isPresenting===!0){const He=O.xr.getDepthSensingMesh();He!==null&&rs(He,z,-1/0,O.sortObjects)}rs(A,z,0,O.sortObjects),U.finish(),$!==null&&$.updateLights(D.state.lightsArray),O.sortObjects===!0&&U.sort(ke,vt),qt=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,qt&&B.addToRenderList(U,A),this.info.autoReset===!0&&this.info.reset(),Bt===!0&&pe.beginShadows();const J=D.state.shadowsArray;if(Ae.render(J,A,z),Bt===!0&&pe.endShadows(),(ne&&W.hasRenderPass())===!1){const He=U.opaque,De=U.transmissive;if(D.setupLights(),z.isArrayCamera){const Fe=z.cameras;if(De.length>0)for(let Ve=0,ot=Fe.length;Ve<ot;Ve++){const pt=Fe[Ve];js(He,De,A,pt)}qt&&B.render(A);for(let Ve=0,ot=Fe.length;Ve<ot;Ve++){const pt=Fe[Ve];Ka(U,A,pt,pt.viewport)}}else De.length>0&&js(He,De,A,z),qt&&B.render(A),Ka(U,A,z)}j!==null&&X===0&&(at.updateMultisampleRenderTarget(j),at.updateRenderTargetMipmap(j)),ne&&W.end(O),A.isScene===!0&&A.onAfterRender(O,A,z),be.resetDefaultState(),H=-1,K=null,R.pop(),R.length>0?(D=R[R.length-1],at.setTextureUnits(D.state.textureUnits),Bt===!0&&pe.setGlobalState(O.clippingPlanes,D.state.camera)):D=null,M.pop(),M.length>0?U=M[M.length-1]:U=null,$!==null&&$.renderEnd()};function rs(A,z,oe,ne){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){const He=z.isArrayCamera?Dt:nt;if(!A.frustumCulled||A.intersectsFrustum(He)){ne&&kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ft);const De=Ee.update(A),Fe=A.material;Fe.visible&&U.push(A,De,Fe,oe,kt.z,null,z)}}else if(A.isMesh||A.isLine||A.isPoints){const He=z.isArrayCamera?Dt:nt;if(!A.frustumCulled||A.intersectsFrustum(He)){const De=Ee.update(A),Fe=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),kt.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),kt.copy(De.boundingSphere.center)),kt.applyMatrix4(A.matrixWorld).applyMatrix4(Ft)),Array.isArray(Fe)){const Ve=De.groups;for(let ot=0,pt=Ve.length;ot<pt;ot++){const We=Ve[ot],gt=Fe[We.materialIndex];gt&&gt.visible&&U.push(A,De,gt,oe,kt.z,We,z)}}else Fe.visible&&U.push(A,De,Fe,oe,kt.z,null,z)}}}const Ie=A.children;for(let He=0,De=Ie.length;He<De;He++)rs(Ie[He],z,oe,ne)}function Ka(A,z,oe,ne){const{opaque:J,transmissive:Ie,transparent:He}=A;D.setupLightsView(oe),Bt===!0&&pe.setGlobalState(O.clippingPlanes,oe),ne&&Le.viewport(L.copy(ne)),J.length>0&&Nr(J,z,oe),Ie.length>0&&Nr(Ie,z,oe),He.length>0&&Nr(He,z,oe),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function js(A,z,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ne.id]===void 0){const We=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ne.id]=new Oi(1,1,{generateMipmaps:!0,type:We?ki:li,minFilter:br,samples:Math.max(4,Tt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const Ie=D.state.transmissionRenderTarget[ne.id],He=ne.viewport||L;Ie.setSize(He.z*O.transmissionResolutionScale,He.w*O.transmissionResolutionScale);const De=O.getRenderTarget(),Fe=O.getActiveCubeFace(),Ve=O.getActiveMipmapLevel();O.setRenderTarget(Ie),O.getClearColor(ee),de=O.getClearAlpha(),de<1&&O.setClearColor(16777215,.5),O.clear(),qt&&B.render(oe);const ot=O.toneMapping;O.toneMapping=tr;const pt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),D.setupLightsView(ne),Bt===!0&&pe.setGlobalState(O.clippingPlanes,ne),Nr(A,oe,ne),at.updateMultisampleRenderTarget(Ie),at.updateRenderTargetMipmap(Ie),At.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let gt=0,Xt=z.length;gt<Xt;gt++){const It=z[gt],{object:bt,geometry:tn,material:Xe,group:fn}=It;if(Xe.side===Ji&&bt.layers.test(ne.layers)){const Ke=Xe.side;Xe.side=Xn,Xe.needsUpdate=!0,Qs(bt,oe,ne,tn,Xe,fn),Xe.side=Ke,Xe.needsUpdate=!0,We=!0}}We===!0&&(at.updateMultisampleRenderTarget(Ie),at.updateRenderTargetMipmap(Ie))}O.setRenderTarget(De,Fe,Ve),O.setClearColor(ee,de),pt!==void 0&&(ne.viewport=pt),O.toneMapping=ot}function Nr(A,z,oe){const ne=z.isScene===!0?z.overrideMaterial:null;for(let J=0,Ie=A.length;J<Ie;J++){const He=A[J],{object:De,geometry:Fe,group:Ve}=He;let ot=He.material;ot.allowOverride===!0&&ne!==null&&(ot=ne),De.layers.test(oe.layers)&&Qs(De,z,oe,Fe,ot,Ve)}}function Qs(A,z,oe,ne,J,Ie){$!==null&&J.isNodeMaterial&&$.setObject(A,J),A.onBeforeRender(O,z,oe,ne,J,Ie),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(O,z,oe,ne,A,Ie),J.transparent===!0&&J.side===Ji&&J.forceSinglePass===!1?(J.side=Xn,J.needsUpdate=!0,O.renderBufferDirect(oe,z,ne,J,A,Ie),J.side=jr,J.needsUpdate=!0,O.renderBufferDirect(oe,z,ne,J,A,Ie),J.side=Ji):O.renderBufferDirect(oe,z,ne,J,A,Ie),A.onAfterRender(O,z,oe,ne,J,Ie)}function Js(A){let z=0;for(const oe of A)oe.texture!==null&&z++;return z}function Dr(A,z,oe){z.isScene!==!0&&(z=sn);const ne=et.get(A),J=D.state.lights,Ie=D.state.shadowsArray,He=J.state.version,De=ge.getParameters(A,J.state,Ie,z,oe,D.state.lightProbeGridArray),Fe=ge.getProgramCacheKey(De);let Ve=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,ne.fog=z.fog;const ot=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=N.get(A.envMap||ne.environment,ot),ne.envMapRotation=ne.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",Mt),Ve=new Map,ne.programs=Ve,ne.programVariants=new Map);let pt=Ve.get(Fe);if(pt!==void 0){if(ne.currentProgram===pt&&ne.lightsStateVersion===He)return Za(A,De),pt}else De.uniforms=ge.getUniforms(A),$!==null&&A.isNodeMaterial&&$.build(A,oe,De),A.onBeforeCompile(De,O),pt=ge.acquireProgram(De,Fe),Ve.set(Fe,pt),ne.uniforms=De.uniforms;const We=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=pe.uniform),Za(A,De),ne.needsLights=ss(A),ne.lightsStateVersion=He,ne.needsLights&&(We.ambientLightColor.value=J.state.ambient,We.lightProbe.value=J.state.probe,We.sunLights.value=J.state.sun,We.sunLightShadows.value=J.state.sunShadow,We.directionalLights.value=J.state.directional,We.directionalLightShadows.value=J.state.directionalShadow,We.spotLights.value=J.state.spot,We.spotLightShadows.value=J.state.spotShadow,We.rectAreaLights.value=J.state.rectArea,We.ltc_1.value=J.state.rectAreaLTC1,We.ltc_2.value=J.state.rectAreaLTC2,We.pointLights.value=J.state.point,We.pointLightShadows.value=J.state.pointShadow,We.hemisphereLights.value=J.state.hemi,We.sunShadowMatrix.value=J.state.sunShadowMatrix,We.sunShadowCascade.value=J.state.sunShadowCascade,We.directionalShadowMatrix.value=J.state.directionalShadowMatrix,We.spotLightMatrix.value=J.state.spotLightMatrix,We.spotLightMap.value=J.state.spotLightMap,We.pointShadowMatrix.value=J.state.pointShadowMatrix),ne.numLightProbeGrids=Js(D.state.lightProbeGridArray),ne.currentProgram=pt,ne.uniformsList=null,pt}function Gl(A,z,oe,ne,J){const Ie=et.get(A),He=Ie.currentProgram.id+","+ne+","+J;let De=Ie.programVariants.get(He);return De===void 0?(De=Dr(A,z,oe),Ie.programVariants.set(He,De)):(Ie.currentProgram=De,Ie.uniformsList=null,Ie.outputColorSpace=ne,Ie.toneMapping=J),De}function Wt(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=Cl.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Za(A,z){const oe=et.get(A);oe.outputColorSpace=z.outputColorSpace,oe.batching=z.batching,oe.batchingColor=z.batchingColor,oe.instancing=z.instancing,oe.instancingColor=z.instancingColor,oe.instancingMorph=z.instancingMorph,oe.skinning=z.skinning,oe.morphTargets=z.morphTargets,oe.morphNormals=z.morphNormals,oe.morphColors=z.morphColors,oe.morphTargetsCount=z.morphTargetsCount,oe.numClippingPlanes=z.numClippingPlanes,oe.numIntersection=z.numClipIntersection,oe.vertexAlphas=z.vertexAlphas,oe.vertexTangents=z.vertexTangents,oe.toneMapping=z.toneMapping}function ea(A,z,oe,ne,J){z.isScene!==!0&&(z=sn),at.resetTextureUnits();const Ie=z.fog,He=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?z.environment:null,De=j===null?O.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:yt.workingColorSpace,Fe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ve=N.get(ne.envMap||He,Fe),ot=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pt=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),We=!!oe.morphAttributes.position,gt=!!oe.morphAttributes.normal,Xt=!!oe.morphAttributes.color;let It=tr;ne.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(It=O.toneMapping);const bt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,tn=bt!==void 0?bt.length:0,Xe=et.get(ne),fn=D.state.lights;if(Bt===!0&&(Jt===!0||A!==K)){const Rt=A===K&&ne.id===H;pe.setState(ne,A,Rt)}let Ke=!1,Ai=!1;ne.version===Xe.__version?Xe.needsLights&&Xe.lightsStateVersion!==fn.state.version||J.isBatchedMesh&&Xe.batching===!1||!J.isBatchedMesh&&Xe.batching===!0||J.isBatchedMesh&&Xe.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Xe.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Xe.instancing===!1||!J.isInstancedMesh&&Xe.instancing===!0||J.isSkinnedMesh&&Xe.skinning===!1||!J.isSkinnedMesh&&Xe.skinning===!0||J.isInstancedMesh&&Xe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Xe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Xe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Xe.instancingMorph===!1&&J.morphTexture!==null||Xe.envMap!==Ve||ne.fog===!0&&Xe.fog!==Ie||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==pe.numPlanes||Xe.numIntersection!==pe.numIntersection)||Xe.vertexAlphas!==ot||Xe.vertexTangents!==pt||Xe.morphTargets!==We||Xe.morphNormals!==gt||Xe.morphColors!==Xt||Xe.morphTargetsCount!==tn||Xe.numLightProbeGrids!==Js(D.state.lightProbeGridArray)?Ke=!0:(Xe.outputColorSpace!==De||Xe.toneMapping!==It)&&(Ai=!0):(Ke=!0,Xe.__version=ne.version);let dn=Xe.currentProgram;(Ke===!0||Ai===!0)&&(dn=Ai===!0?Gl(ne,z,J,De,It):Dr(ne,z,J),$&&ne.isNodeMaterial&&$.onUpdateProgram(ne,dn,Xe));let rr=!1,ci=!1,Ri=!1;const St=dn.getUniforms(),an=Xe.uniforms;if(Le.useProgram(dn.program)&&(rr=!0,ci=!0,Ri=!0),ne.id!==H&&(H=ne.id,ci=!0),rr||K!==A){Le.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),St.setValue(q,"projectionMatrix",A.projectionMatrix),St.setValue(q,"viewMatrix",A.matrixWorldInverse);const Ot=St.map.cameraPosition;Ot!==void 0&&Ot.setValue(q,An.setFromMatrixPosition(A.matrixWorld)),Tt.logarithmicDepthBuffer&&St.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&St.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),K!==A&&(K=A,ci=!0,Ri=!0)}if(Xe.needsLights&&(fn.state.sunShadowMap.length>0&&St.setValue(q,"sunShadowMap",fn.state.sunShadowMap,at),fn.state.directionalShadowMap.length>0&&St.setValue(q,"directionalShadowMap",fn.state.directionalShadowMap,at),fn.state.spotShadowMap.length>0&&St.setValue(q,"spotShadowMap",fn.state.spotShadowMap,at),fn.state.pointShadowMap.length>0&&St.setValue(q,"pointShadowMap",fn.state.pointShadowMap,at)),J.isSkinnedMesh){St.setOptional(q,J,"bindMatrix"),St.setOptional(q,J,"bindMatrixInverse");const Rt=J.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),St.setValue(q,"boneTexture",Rt.boneTexture,at))}J.isBatchedMesh&&(St.setOptional(q,J,"batchingTexture"),St.setValue(q,"batchingTexture",J._matricesTexture,at),St.setOptional(q,J,"batchingIdTexture"),St.setValue(q,"batchingIdTexture",J._indirectTexture,at),St.setOptional(q,J,"batchingColorTexture"),J._colorsTexture!==null&&St.setValue(q,"batchingColorTexture",J._colorsTexture,at));const Rn=oe.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&me.update(J,oe,dn),(ci||Xe.receiveShadow!==J.receiveShadow)&&(Xe.receiveShadow=J.receiveShadow,St.setValue(q,"receiveShadow",J.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&z.environment!==null&&(an.envMapIntensity.value=z.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=DE()),ci){if(St.setValue(q,"toneMappingExposure",O.toneMappingExposure),Xe.needsLights&&ja(an,Ri),Ie&&ne.fog===!0&&Ce.refreshFogUniforms(an,Ie),Ce.refreshMaterialUniforms(an,ne,_e,Ue,D.state.transmissionRenderTarget[A.id]),Xe.needsLights&&Xe.numLightProbeGrids>0){const Rt=P;let Ot=0;for(const _n of D.state.lightProbeGridArray)_n.texture!==null&&(Rt.textures[Ot]=_n.texture,Rt.min[Ot]=_n.boundingBox.min,Rt.max[Ot]=_n.boundingBox.max,Rt.resolution[Ot]=_n.resolution,Ot++);for(const _n in Rt)Rt[_n].length=Ot;an.probesSH.value=Rt.textures,an.probesMin.value=Rt.min,an.probesMax.value=Rt.max,an.probesResolution.value=Rt.resolution}Cl.upload(q,Wt(Xe),an,at)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Cl.upload(q,Wt(Xe),an,at),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&St.setValue(q,"center",J.center),St.setValue(q,"modelViewMatrix",J.modelViewMatrix),St.setValue(q,"normalMatrix",J.normalMatrix),St.setValue(q,"modelMatrix",J.matrixWorld),ne.uniformsGroups!==void 0){const Rt=ne.uniformsGroups;for(let Ot=0,_n=Rt.length;Ot<_n;Ot++){const sr=Rt[Ot];$e.update(sr,dn),$e.bind(sr,dn)}}return dn}function ja(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function ss(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,z,oe){const ne=et.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),et.get(A.texture).__webglTexture=z,et.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const oe=et.get(A);oe.__webglFramebuffer=z,oe.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,oe=0){j=A,ae=z,X=oe;let ne=null,J=!1,Ie=!1;if(A){const De=et.get(A);if(De.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(q.FRAMEBUFFER,De.__webglFramebuffer),L.copy(A.viewport),te.copy(A.scissor),Se=A.scissorTest,Le.viewport(L),Le.scissor(te),Le.setScissorTest(Se),H=-1;return}else if(De.__webglFramebuffer===void 0)at.setupRenderTarget(A);else if(De.__hasExternalTextures)at.rebindTextures(A,et.get(A.texture).__webglTexture,et.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ot=A.depthTexture;if(De.__boundDepthTexture!==ot){if(ot!==null&&et.has(ot)&&(A.width!==ot.image.width||A.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(A)}}const Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ie=!0);const Ve=et.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?ne=Ve[z][oe]:ne=Ve[z],J=!0):A.samples>0&&at.useMultisampledRTT(A)===!1?ne=et.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?ne=Ve[oe]:ne=Ve,L.copy(A.viewport),te.copy(A.scissor),Se=A.scissorTest}else L.copy(tt).multiplyScalar(_e).floor(),te.copy(lt).multiplyScalar(_e).floor(),Se=je;if(oe!==0&&(ne=se),Le.bindFramebuffer(q.FRAMEBUFFER,ne)&&Le.drawBuffers(A,ne),Le.viewport(L),Le.scissor(te),Le.setScissorTest(Se),J){const De=et.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+z,De.__webglTexture,oe)}else if(Ie){const De=z;for(let Fe=0;Fe<A.textures.length;Fe++){const Ve=et.get(A.textures[Fe]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Fe,Ve.__webglTexture,oe,De)}}else if(A!==null&&oe!==0){const De=et.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,De.__webglTexture,oe)}H=-1};function Qa(A){const z=et.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=Tt.textureFormatReadable(A.format),z.__typeReadable=Tt.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,oe,ne,J,Ie,He,De=0){if(!(A&&A.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=et.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Fe=Fe[He],Array.isArray(Fe)&&(Fe=Fe[0])),Fe){Le.bindFramebuffer(q.FRAMEBUFFER,Fe);try{const Ve=A.textures[De],ot=Ve.format,pt=Ve.type;A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+De);const We=Qa(Ve);if(We.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-ne&&oe>=0&&oe<=A.height-J&&q.readPixels(z,oe,ne,J,we.convert(ot),we.convert(pt),Ie)}finally{const Ve=j!==null?et.get(j).__webglFramebuffer:null;Le.bindFramebuffer(q.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,z,oe,ne,J,Ie,He,De=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=et.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Fe=Fe[He],Array.isArray(Fe)&&(Fe=Fe[0])),Fe)if(z>=0&&z<=A.width-ne&&oe>=0&&oe<=A.height-J){Le.bindFramebuffer(q.FRAMEBUFFER,Fe);const Ve=A.textures[De],ot=Ve.format,pt=Ve.type;A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+De);const We=Qa(Ve);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,gt),q.bufferData(q.PIXEL_PACK_BUFFER,Ie.byteLength,q.STREAM_READ),q.readPixels(z,oe,ne,J,we.convert(ot),we.convert(pt),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const Xt=j!==null?et.get(j).__webglFramebuffer:null;Le.bindFramebuffer(q.FRAMEBUFFER,Xt);const It=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Q_(q,It,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,gt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ie),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(gt),q.deleteSync(It),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,oe=0){const ne=Math.pow(2,-oe),J=Math.floor(A.image.width*ne),Ie=Math.floor(A.image.height*ne),He=z!==null?z.x:0,De=z!==null?z.y:0;at.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,oe,0,0,He,De,J,Ie),Le.unbindTexture()},this.copyTextureToTexture=function(A,z,oe=null,ne=null,J=0,Ie=0){let He,De,Fe,Ve,ot,pt,We,gt,Xt;const It=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(oe!==null)He=oe.max.x-oe.min.x,De=oe.max.y-oe.min.y,Fe=oe.isBox3?oe.max.z-oe.min.z:1,Ve=oe.min.x,ot=oe.min.y,pt=oe.isBox3?oe.min.z:0;else{const St=Math.pow(2,-J);He=Math.floor(It.width*St),De=Math.floor(It.height*St),A.isDataArrayTexture?Fe=It.depth:A.isData3DTexture?Fe=Math.floor(It.depth*St):Fe=1,Ve=0,ot=0,pt=0}ne!==null?(We=ne.x,gt=ne.y,Xt=ne.z):(We=0,gt=0,Xt=0);const bt=we.convert(z.format),tn=we.convert(z.type);let Xe;z.isData3DTexture?(at.setTexture3D(z,0),Xe=q.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(at.setTexture2DArray(z,0),Xe=q.TEXTURE_2D_ARRAY):(at.setTexture2D(z,0),Xe=q.TEXTURE_2D),Le.activeTexture(q.TEXTURE0),Le.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,z.flipY),Le.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),Le.pixelStorei(q.UNPACK_ALIGNMENT,z.unpackAlignment);const fn=Le.getParameter(q.UNPACK_ROW_LENGTH),Ke=Le.getParameter(q.UNPACK_IMAGE_HEIGHT),Ai=Le.getParameter(q.UNPACK_SKIP_PIXELS),dn=Le.getParameter(q.UNPACK_SKIP_ROWS),rr=Le.getParameter(q.UNPACK_SKIP_IMAGES);Le.pixelStorei(q.UNPACK_ROW_LENGTH,It.width),Le.pixelStorei(q.UNPACK_IMAGE_HEIGHT,It.height),Le.pixelStorei(q.UNPACK_SKIP_PIXELS,Ve),Le.pixelStorei(q.UNPACK_SKIP_ROWS,ot),Le.pixelStorei(q.UNPACK_SKIP_IMAGES,pt);const ci=A.isDataArrayTexture||A.isData3DTexture,Ri=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const St=et.get(A),an=et.get(z),Rn=et.get(St.__renderTarget),Rt=et.get(an.__renderTarget);Le.bindFramebuffer(q.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Le.bindFramebuffer(q.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Ot=0;Ot<Fe;Ot++)ci&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,et.get(A).__webglTexture,J,pt+Ot),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,et.get(z).__webglTexture,Ie,Xt+Ot)),q.blitFramebuffer(Ve,ot,Ve+He,ot+De,We,gt,We+He,gt+De,q.DEPTH_BUFFER_BIT,q.NEAREST);Le.bindFramebuffer(q.READ_FRAMEBUFFER,null),Le.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||et.has(A)){const St=et.get(A),an=et.get(z);Le.bindFramebuffer(q.READ_FRAMEBUFFER,k),Le.bindFramebuffer(q.DRAW_FRAMEBUFFER,Z);for(let Rn=0;Rn<Fe;Rn++)ci?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,St.__webglTexture,J,pt+Rn):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,St.__webglTexture,J),Ri?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,an.__webglTexture,Ie,Xt+Rn):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,an.__webglTexture,Ie),J!==0?q.blitFramebuffer(Ve,ot,Ve+He,ot+De,We,gt,We+He,gt+De,q.COLOR_BUFFER_BIT,q.NEAREST):Ri?q.copyTexSubImage3D(Xe,Ie,We,gt,Xt+Rn,Ve,ot,He,De):q.copyTexSubImage2D(Xe,Ie,We,gt,Ve,ot,He,De);Le.bindFramebuffer(q.READ_FRAMEBUFFER,null),Le.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ri?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Xe,Ie,We,gt,Xt,He,De,Fe,bt,tn,It.data):z.isCompressedArrayTexture?q.compressedTexSubImage3D(Xe,Ie,We,gt,Xt,He,De,Fe,bt,It.data):q.texSubImage3D(Xe,Ie,We,gt,Xt,He,De,Fe,bt,tn,It):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ie,We,gt,He,De,bt,tn,It.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ie,We,gt,It.width,It.height,bt,It.data):q.texSubImage2D(q.TEXTURE_2D,Ie,We,gt,He,De,bt,tn,It);Le.pixelStorei(q.UNPACK_ROW_LENGTH,fn),Le.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ke),Le.pixelStorei(q.UNPACK_SKIP_PIXELS,Ai),Le.pixelStorei(q.UNPACK_SKIP_ROWS,dn),Le.pixelStorei(q.UNPACK_SKIP_IMAGES,rr),Ie===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&q.generateMipmap(Xe),Le.unbindTexture()},this.initRenderTarget=function(A){et.get(A).__webglFramebuffer===void 0&&at.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?at.setTextureCube(A,0):A.isData3DTexture?at.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?at.setTexture2DArray(A,0):at.setTexture2D(A,0),Le.unbindTexture()},this.resetState=function(){ae=0,X=0,j=null,Le.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),n.unpackColorSpace=yt._getUnpackColorSpace()}}const xt={depths:{sky:-30,clouds:-24,birds:-20,trees:-10,mandap:-5,branches:0,lotus:4,garden:7},parallax:{sky:.03,clouds:.12,birds:.18,trees:.22,mandap:.08,branches:.35,lotus:.38,garden:.45},camera:{fov:48,near:.1,far:100,initialPos:{x:0,y:.6,z:12.5},lookAt:{x:0,y:0,z:-5}},wind:{baseFrequency:.85,gustFrequency:.22}};class UE{constructor(e){Je(this,"camera");Je(this,"targetPosition");Je(this,"currentPosition");Je(this,"targetLookAt");Je(this,"currentLookAt");const n=e<.9,r=n?58:xt.camera.fov;this.camera=new Si(r,e,xt.camera.near,xt.camera.far);const o=xt.camera.initialPos;this.currentPosition=new ce(o.x,o.y,n?o.z+2.5:o.z),this.targetPosition=this.currentPosition.clone(),this.currentLookAt=new ce(xt.camera.lookAt.x,xt.camera.lookAt.y,xt.camera.lookAt.z),this.targetLookAt=this.currentLookAt.clone(),this.camera.position.copy(this.currentPosition),this.camera.lookAt(this.currentLookAt)}updateAspect(e){const n=e<.9;this.camera.fov=n?58:xt.camera.fov,this.camera.aspect=e,this.camera.updateProjectionMatrix()}update(e,n,r=!1){const o=Math.max(0,Math.min(1,e)),c=this.camera.aspect<.9?2.5:0;let d=0,p=.6,m=12.5+c,_=0;if(o<=.2){const g=o/.2;d=Math.sin(g*Math.PI*.5)*-.15,p=.6-g*.08,m=12.5-g*1.2+c,_=.1*(1-g)}else if(o<=.4){const g=(o-.2)/.2;d=-.15+g*.35,p=.52-g*.14,m=11.3-g*1.5+c,_=-.1*g}else if(o<=.6){const g=(o-.4)/.2;d=.2-g*.2,p=.38+g*.12,m=9.8-g*1.8+c,_=.05*g}else if(o<=.8){const g=(o-.6)/.2;d=Math.sin(g*Math.PI)*.12,p=.5-g*.18,m=8-g*1.4+c,_=.08*(1-g)}else{const g=(o-.8)/.2,y=g*g*(3-2*g);d=0,p=.32-y*.12,m=6.6-y*.8+c,_=0}r||(d+=n.x*.35,p+=n.y*.22),this.targetPosition.set(d,p,m),this.targetLookAt.set(r?0:n.x*.15,_+(r?0:n.y*.1),-5);const S=r?1:.085;this.currentPosition.lerp(this.targetPosition,S),this.currentLookAt.lerp(this.targetLookAt,S),this.camera.position.copy(this.currentPosition),this.camera.lookAt(this.currentLookAt)}}class FE{constructor(){Je(this,"baseFreq");Je(this,"gustFreq");this.baseFreq=xt.wind.baseFrequency,this.gustFreq=xt.wind.gustFrequency}getWind(e,n=!1){if(n)return{globalIntensity:0,branchesLeft:0,branchesRight:0,lotus:0,trees:0,grass:0};const r=Math.sin(e*this.baseFreq),o=Math.cos(e*this.baseFreq*1.62+.4),l=Math.sin(e*this.gustFreq)*.45,c=r*.55+o*.35+l*.25,d=Math.sin(e*1.25)*1.4+Math.cos(e*2.3+.8)*.6,p=Math.sin(e*1.05+1.2)*1.6+Math.sin(e*2.1)*.5+.4,m=Math.sin(e*1.4+2.1)*2.2+Math.cos(e*.7)*.8,_=Math.sin(e*.9+.5)*.04,S=Math.sin(e*1.8)*.05+Math.cos(e*3.1)*.02;return{globalIntensity:c,branchesLeft:d*(Math.PI/180),branchesRight:p*(Math.PI/180),lotus:m*(Math.PI/180),trees:_,grass:S}}}const OE="/assets/B01_sky-CZRCBKxz.jpg";class BE{constructor(e){Je(this,"mesh");Je(this,"material");const n=new ei(68,42),r=e.load(OE);r.colorSpace=Qt,this.material=new ui({map:r,depthWrite:!1,depthTest:!0}),this.mesh=new yn(n,this.material),this.mesh.position.set(0,1.5,xt.depths.sky)}update(e,n,r){const o=Math.sin(e*.05)*.4,l=-r.x*xt.parallax.sky*2,c=-r.y*xt.parallax.sky*1.5;this.mesh.position.x=o+l,this.mesh.position.y=1.5+c+n*.3}dispose(){this.mesh.geometry.dispose(),this.material.map&&this.material.map.dispose(),this.material.dispose()}}const kE="/assets/B02_clouds-BT37jPfr.png";class zE{constructor(e){Je(this,"mesh");Je(this,"clouds",[]);Je(this,"geometry");Je(this,"texture");this.mesh=new Ei,this.texture=e.load(kE),this.texture.colorSpace=Qt,this.geometry=new ei(36,14),[{z:xt.depths.clouds-2,scale:1.15,opacity:.55,startX:-14,startY:6.5,speedX:.35,speedY:.05,phase:0},{z:xt.depths.clouds,scale:.95,opacity:.85,startX:8,startY:4.8,speedX:-.25,speedY:-.04,phase:2.1},{z:xt.depths.clouds+2,scale:1.35,opacity:.65,startX:-4,startY:7.8,speedX:.18,speedY:.08,phase:4.2}].forEach(r=>{const o=new ui({map:this.texture,transparent:!0,opacity:r.opacity,depthWrite:!1,depthTest:!0}),l=new yn(this.geometry,o);l.scale.set(r.scale,r.scale,1),l.position.set(r.startX,r.startY,r.z),this.mesh.add(l),this.clouds.push({mesh:l,baseX:r.startX,baseY:r.startY,baseZ:r.z,speedX:r.speedX,speedY:r.speedY,phase:r.phase})})}update(e,n,r){const o=xt.parallax.clouds;this.clouds.forEach((l,c)=>{const d=Math.sin(e*l.speedX*.15+l.phase)*6,p=Math.cos(e*l.speedY*.25+l.phase)*.4,m=-r.x*o*(1+c*.2)*2,_=-r.y*o*(1+c*.2)*1.5;l.mesh.position.x=l.baseX+d+m,l.mesh.position.y=l.baseY+p+_+n*.6})}dispose(){this.geometry.dispose(),this.texture.dispose(),this.clouds.forEach(e=>{e.mesh.material.dispose()})}}const HE="/assets/B03_birds-DUQSgzGH.png";class GE{constructor(e){Je(this,"mesh");Je(this,"flocks",[]);Je(this,"geometry");Je(this,"texture");this.mesh=new Ei,this.texture=e.load(HE),this.texture.colorSpace=Qt,this.geometry=new ei(5.5,3.2),[{z:xt.depths.birds-1.5,scale:.9,speed:.22,yOffset:6.2,path:0},{z:xt.depths.birds+1.2,scale:1.15,speed:.28,yOffset:4.8,path:1}].forEach(r=>{const o=new ui({map:this.texture,transparent:!0,opacity:.92,depthWrite:!1,depthTest:!0}),l=new yn(this.geometry,o);l.scale.set(r.scale,r.scale,1),this.mesh.add(l),this.flocks.push({mesh:l,speed:r.speed,yOffset:r.yOffset,zPos:r.z,flightPath:r.path,baseScale:r.scale})})}update(e,n,r){const o=xt.parallax.birds;this.flocks.forEach((l,c)=>{const d=18/l.speed,p=(e+c*8)%d/d,m=-22+p*44,_=l.flightPath===0?2.2:1.7,S=l.yOffset+Math.sin(p*Math.PI*_)*.9,g=Math.cos(p*Math.PI*_)*.05,y=-r.x*o*2,T=-r.y*o*1.5;l.mesh.position.set(m+y,S+T+n*.5,l.zPos),l.mesh.rotation.z=g;const C=Math.sin(p*Math.PI);l.mesh.material.opacity=Math.max(0,Math.min(1,C*1.4))})}dispose(){this.geometry.dispose(),this.texture.dispose(),this.flocks.forEach(e=>{e.mesh.material.dispose()})}}const VE="/assets/B07_left_trees-ZX0xKilQ.png",WE="/assets/B08_right_trees-2uJYuW7x.png";class XE{constructor(e){Je(this,"mesh");Je(this,"leftTree");Je(this,"rightTree");Je(this,"leftMat");Je(this,"rightMat");Je(this,"leftTex");Je(this,"rightTex");Je(this,"geometry");this.mesh=new Ei,this.geometry=new ei(16.5,20),this.leftTex=e.load(VE),this.leftTex.colorSpace=Qt,this.leftMat=new ui({map:this.leftTex,transparent:!0,depthWrite:!1,depthTest:!0}),this.leftTree=new yn(this.geometry,this.leftMat),this.leftTree.position.set(-10.2,-1.2,xt.depths.trees),this.mesh.add(this.leftTree),this.rightTex=e.load(WE),this.rightTex.colorSpace=Qt,this.rightMat=new ui({map:this.rightTex,transparent:!0,depthWrite:!1,depthTest:!0}),this.rightTree=new yn(this.geometry,this.rightMat),this.rightTree.position.set(10.2,-1.2,xt.depths.trees),this.mesh.add(this.rightTree)}update(e,n,r,o){const l=xt.parallax.trees,c=n*1.5,d=-r.x*l*2,p=-r.y*l*1.5,m=Math.sin(e*.95)*.015+o*.2;this.leftTree.position.x=-10.2-c+d,this.leftTree.position.y=-1.2+p+n*.4,this.leftTree.rotation.z=m;const _=Math.cos(e*1.1+.7)*.018-o*.25;this.rightTree.position.x=10.2+c+d,this.rightTree.position.y=-1.2+p+n*.4,this.rightTree.rotation.z=_}dispose(){this.geometry.dispose(),this.leftTex.dispose(),this.rightTex.dispose(),this.leftMat.dispose(),this.rightMat.dispose()}}const YE="/assets/B06_mandap-B8ZPBoNK.png";class qE{constructor(e){Je(this,"mesh");Je(this,"material");Je(this,"texture");Je(this,"geometry");this.geometry=new ei(16,17),this.texture=e.load(YE),this.texture.colorSpace=Qt,this.material=new ui({map:this.texture,transparent:!0,depthWrite:!1,depthTest:!0}),this.mesh=new yn(this.geometry,this.material),this.mesh.position.set(0,-.6,xt.depths.mandap)}update(e,n,r){const o=xt.parallax.mandap,l=1+n*.12;this.mesh.scale.set(l,l,1);const c=Math.sin(e*.8)*.03,d=-r.x*o*2,p=-r.y*o*1.5;this.mesh.position.set(d,-.6+c+p+n*.25,xt.depths.mandap)}dispose(){this.geometry.dispose(),this.texture.dispose(),this.material.dispose()}}const $E="/assets/B04_left_branches-mp6L3_0H.png",KE="/assets/B05_right_branches-BS1PTo5n.png";class ZE{constructor(e){Je(this,"mesh");Je(this,"leftPivot");Je(this,"rightPivot");Je(this,"leftMesh");Je(this,"rightMesh");Je(this,"leftMat");Je(this,"rightMat");Je(this,"leftTex");Je(this,"rightTex");Je(this,"geometry");this.mesh=new Ei;const n=11.5,r=13.5;this.geometry=new ei(n,r),this.leftTex=e.load($E),this.leftTex.colorSpace=Qt,this.leftMat=new ui({map:this.leftTex,transparent:!0,depthWrite:!1,depthTest:!0}),this.leftMesh=new yn(this.geometry,this.leftMat),this.leftMesh.position.set(n*.42,-r*.48,0),this.leftPivot=new Ei,this.leftPivot.position.set(-8.8,5.8,xt.depths.branches),this.leftPivot.add(this.leftMesh),this.mesh.add(this.leftPivot),this.rightTex=e.load(KE),this.rightTex.colorSpace=Qt,this.rightMat=new ui({map:this.rightTex,transparent:!0,depthWrite:!1,depthTest:!0}),this.rightMesh=new yn(this.geometry,this.rightMat),this.rightMesh.position.set(-n*.42,-r*.48,0),this.rightPivot=new Ei,this.rightPivot.position.set(8.8,5.8,xt.depths.branches),this.rightPivot.add(this.rightMesh),this.mesh.add(this.rightPivot)}update(e,n,r,o,l){const c=xt.parallax.branches,d=n*1.8,p=-r.x*c*2,m=-r.y*c*1.5;this.leftPivot.rotation.z=o,this.leftPivot.position.set(-8.8-d+p,5.8+m+n*.3,xt.depths.branches),this.rightPivot.rotation.z=-l,this.rightPivot.position.set(8.8+d+p,5.8+m+n*.3,xt.depths.branches)}dispose(){this.geometry.dispose(),this.leftTex.dispose(),this.rightTex.dispose(),this.leftMat.dispose(),this.rightMat.dispose()}}const jE="/assets/B10_lotus-C2gh-wth.png";class QE{constructor(e){Je(this,"mesh");Je(this,"lotusMesh");Je(this,"rippleMesh");Je(this,"material");Je(this,"rippleMat");Je(this,"texture");Je(this,"geometry");this.mesh=new Ei,this.geometry=new ei(6.5,4.2),this.texture=e.load(jE),this.texture.colorSpace=Qt,this.material=new ui({map:this.texture,transparent:!0,depthWrite:!1,depthTest:!0}),this.lotusMesh=new yn(this.geometry,this.material);const n=new ei(8,2.5);this.rippleMat=new ui({color:11064818,transparent:!0,opacity:.28,depthWrite:!1}),this.rippleMesh=new yn(n,this.rippleMat),this.rippleMesh.position.set(0,-1.8,-.1),this.mesh.add(this.rippleMesh),this.mesh.add(this.lotusMesh),this.mesh.position.set(4.8,-3.2,xt.depths.lotus)}update(e,n,r,o){const l=xt.parallax.lotus,c=Math.sin(e*1.6)*.12,d=Math.cos(e*1.2)*(Math.PI/60),p=-r.x*l*2,m=-r.y*l*1.5;this.lotusMesh.rotation.z=o+d,this.mesh.position.set(4.8+p,-3.2+c+m-n*.6,xt.depths.lotus),this.rippleMesh.scale.x=1+Math.sin(e*2)*.12,this.rippleMesh.scale.y=1+Math.cos(e*1.8)*.08}dispose(){this.geometry.dispose(),this.texture.dispose(),this.material.dispose(),this.rippleMat.dispose()}}const JE="/assets/B09_foreground_garden-rcpHgm70.png";class eT{constructor(e){Je(this,"mesh");Je(this,"material");Je(this,"texture");Je(this,"geometry");this.geometry=new ei(28,9.5),this.texture=e.load(JE),this.texture.colorSpace=Qt,this.material=new ui({map:this.texture,transparent:!0,depthWrite:!1,depthTest:!0}),this.mesh=new yn(this.geometry,this.material),this.mesh.position.set(0,-3.8,xt.depths.garden)}update(e,n,r,o){const l=xt.parallax.garden,c=n*2.8,d=-r.x*l*2.4,p=-r.y*l*1.8,m=Math.sin(e*1.8)*.015+o*.3;this.mesh.position.set(d,-3.8-c+p,xt.depths.garden),this.mesh.rotation.z=m}dispose(){this.geometry.dispose(),this.texture.dispose(),this.material.dispose()}}const tT=({scrollProgress:s,mouse:e,opacity:n,reducedMotion:r})=>{const o=st.useRef(null),l=st.useRef({scrollProgress:s,mouse:e,opacity:n,reducedMotion:r});return st.useEffect(()=>{l.current={scrollProgress:s,mouse:e,opacity:n,reducedMotion:r}},[s,e,n,r]),st.useEffect(()=>{const c=o.current;if(!c)return;const d=new _v,p=c.clientWidth||window.innerWidth,m=c.clientHeight||window.innerHeight,_=p/m,S=new IE({antialias:!0,alpha:!0,powerPreference:"high-performance"});S.setSize(p,m),S.setPixelRatio(Math.min(window.devicePixelRatio,2)),S.outputColorSpace=Qt,c.appendChild(S.domElement);const g=new UE(_),y=new ag,T=new Ov(y),C=new BE(T);d.add(C.mesh);const v=new zE(T);d.add(v.mesh);const x=new GE(T);d.add(x.mesh);const b=new XE(T);d.add(b.mesh);const F=new qE(T);d.add(F.mesh);const P=new ZE(T);d.add(P.mesh);const U=new QE(T);d.add(U.mesh);const D=new eT(T);d.add(D.mesh);const M=new FE,R=()=>{if(!c)return;const $=c.clientWidth||window.innerWidth,se=c.clientHeight||window.innerHeight;g.updateAspect($/se),S.setSize($,se)};window.addEventListener("resize",R);let W,O=new zv;const V=()=>{if(W=requestAnimationFrame(V),l.current.opacity<=.005)return;const $=O.getElapsedTime(),{scrollProgress:se,mouse:k,reducedMotion:Z}=l.current;g.update(se,k,Z);const ae=M.getWind($,Z);C.update($,se,k),v.update($,se,k),x.update($,se,k),b.update($,se,k,ae.trees),F.update($,se,k),P.update($,se,k,ae.branchesLeft,ae.branchesRight),U.update($,se,k,ae.lotus),D.update($,se,k,ae.grass),S.render(d,g.camera)};return W=requestAnimationFrame(V),()=>{cancelAnimationFrame(W),window.removeEventListener("resize",R),C.dispose(),v.dispose(),x.dispose(),b.dispose(),F.dispose(),P.dispose(),U.dispose(),D.dispose(),S.dispose(),S.domElement&&c.contains(S.domElement)&&c.removeChild(S.domElement)}},[]),Q.jsx("div",{ref:o,className:"daytime-three-canvas-container",style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}})},nT=()=>{const[s,e]=st.useState(()=>typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches);return st.useEffect(()=>{const n=window.matchMedia("(prefers-reduced-motion: reduce)"),r=o=>e(o.matches);return n.addEventListener("change",r),()=>n.removeEventListener("change",r)},[]),s},iT=({progress:s=0,opacity:e=1,px:n=0,py:r=0,reducedMotion:o})=>{const l=nT(),c=o??l,d=st.useRef(null),p={x:n,y:r},m=Math.min(1,Math.max(0,(s-.55)/.35));return Q.jsxs("div",{ref:d,className:`daytime-viewport ${e>.02?"active":""}`,style:{opacity:e,visibility:e>0?"visible":"hidden"},"aria-label":"Daytime 3D garden wedding scene with ivory mandap",children:[Q.jsx(tT,{scrollProgress:s,mouse:p,opacity:e,reducedMotion:c}),Q.jsx("div",{className:"daytime-intro-badge",style:{opacity:m,transform:`translate3d(${(-n*12).toFixed(2)}px, ${(-r*8).toFixed(2)}px, 0)`},"aria-hidden":"true",children:Q.jsxs("div",{className:"mandap-intro-chip",children:[Q.jsx("span",{className:"chip-accent",children:"❖"}),Q.jsx("span",{children:"Daytime Mandap Ceremony"}),Q.jsx("span",{className:"chip-accent",children:"❖"})]})})]})},wm="/assets/Ornate%20Peacock%20on%20Floral%20Pedestal-D7oqy7t9.png",rT="/assets/Ornate%20Pink%20and%20Jasmine%20Wedding%20Garland-_N_BGIwQ.png",sT="/assets/Lush%20Floral%20Corner%20Border-CJAoNH_J.png",aT="/assets/Elegant%20Pink%20Floral%20Corner%20Border-CyYNjRtY.png",oT=({progress:s=0,opacity:e=1,px:n=0,py:r=0,reducedMotion:o=!1})=>{const l=st.useRef(null),c=st.useRef(null),d=st.useRef(null),p=st.useRef(null),m=st.useRef(null);st.useEffect(()=>{const v=l.current;if(!v)return;const x=v.getContext("2d");if(!x)return;let b;const P=Array.from({length:24},()=>({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,size:7+Math.random()*9,speedY:.6+Math.random()*1.2,speedX:(Math.random()-.5)*.8,angle:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*.03,alpha:.4+Math.random()*.5,color:Math.random()>.45?"rgba(240, 110, 140,":"rgba(255, 230, 210,"})),U=()=>{v.width=window.innerWidth,v.height=window.innerHeight};U(),window.addEventListener("resize",U),performance.now();const D=M=>{x.clearRect(0,0,v.width,v.height),e>.02&&P.forEach(R=>{R.y+=R.speedY*(1+s*.5),R.x+=R.speedX+Math.sin(R.y*.015)*.6,R.angle+=R.rotSpeed,R.y>v.height+20&&(R.y=-20,R.x=Math.random()*v.width),x.save(),x.translate(R.x,R.y),x.rotate(R.angle),x.fillStyle=`${R.color} ${(R.alpha*e).toFixed(3)})`,x.beginPath(),x.ellipse(0,0,R.size,R.size*.55,0,0,Math.PI*2),x.fill(),x.restore()}),b=requestAnimationFrame(D)};return b=requestAnimationFrame(D),()=>{window.removeEventListener("resize",U),cancelAnimationFrame(b)}},[e,s]);const _=Math.min(1,Math.max(0,s*1.5)),S=.94+_*.06,g=(1-_)*80,y=o?0:n*8,T=o?0:n*14,C=o?0:n*-14;return Q.jsxs("section",{className:"invitation-stage",style:{opacity:e,visibility:e>0?"visible":"hidden",pointerEvents:e>.4?"auto":"none"},"aria-label":"Wedding Invitation Announcement",children:[Q.jsx("div",{className:"invitation-bg-glow","aria-hidden":"true"}),Q.jsx("div",{ref:c,className:"invitation-garland-wrap",style:{transform:`translate3d(${y}px, ${r*-4}px, 0)`},children:Q.jsx("img",{src:rT,alt:"Ornate pink and jasmine wedding garland with bells",className:"invitation-garland-img",draggable:!1})}),Q.jsx("div",{className:"invitation-corner corner-top-left",style:{transform:`translate3d(${n*-10}px, ${r*-8}px, 0)`},children:Q.jsx("img",{src:sT,alt:"Lush pink hibiscus corner border",className:"corner-img",draggable:!1})}),Q.jsx("div",{className:"invitation-corner corner-top-right",style:{transform:`translate3d(${n*10}px, ${r*-8}px, 0)`},children:Q.jsx("img",{src:aT,alt:"Elegant floral corner border",className:"corner-img",draggable:!1})}),Q.jsx("div",{ref:m,className:"invitation-card-container",style:{transform:`translate3d(${n*-6}px, ${r*-6}px, 0) scale(${S})`},children:Q.jsxs("div",{className:"invitation-card-inner",children:[Q.jsxs("header",{className:"invitation-header",children:[Q.jsxs("h3",{className:"invitation-hosts",children:["Smt. Saraswati Devi",Q.jsx("br",{}),"& Utsavlal Ji Bagrecha"]}),Q.jsx("p",{className:"invitation-pleasure",children:"requests the pleasure of your company at the"}),Q.jsxs("div",{className:"invitation-event-badge",children:[Q.jsx("span",{className:"badge-flourish",children:"✦"}),Q.jsx("h2",{className:"invitation-main-heading",children:"W E D D I N G"}),Q.jsx("span",{className:"badge-flourish",children:"✦"})]}),Q.jsx("p",{className:"invitation-relation",children:"of her grandson"})]}),Q.jsxs("main",{className:"invitation-couple",children:[Q.jsxs("div",{className:"couple-name-box groom-box",children:[Q.jsx("h1",{className:"couple-name groom-name",children:"Siddharth"}),Q.jsx("p",{className:"couple-parents",children:"S/o Sangeetha & Mukesh Bagrecha"})]}),Q.jsxs("div",{className:"couple-connector",children:[Q.jsx("span",{className:"connector-line"}),Q.jsx("span",{className:"connector-text",children:"with"}),Q.jsx("span",{className:"connector-line"})]}),Q.jsxs("div",{className:"couple-name-box bride-box",children:[Q.jsx("h1",{className:"couple-name bride-name",children:"Manisha"}),Q.jsxs("p",{className:"couple-parents",children:["Gd/o Smt. Madan Bai & Parasmal Bohara",Q.jsx("br",{}),"D/o Chandra Ji & Anand Kumar Ji Bohara"]})]})]}),Q.jsx("footer",{className:"invitation-card-footer",children:Q.jsx("div",{className:"auspicious-mantra",children:"|| Mangalam Bhagwan Vishnu, Mangalam Garudadhwaja ||"})})]})}),Q.jsx("aside",{ref:d,className:"invitation-peacock peacock-left",style:{transform:`translate3d(${n*-24}px, ${g+r*-12}px, 0) rotate(${T*.08}deg)`},children:Q.jsx("img",{src:wm,alt:"Royal ornate peacock on floral sandstone pedestal",className:"peacock-img",draggable:!1})}),Q.jsx("aside",{ref:p,className:"invitation-peacock peacock-right",style:{transform:`translate3d(${n*24}px, ${g+r*-12}px, 0) scaleX(-1) rotate(${C*.08}deg)`},children:Q.jsx("img",{src:wm,alt:"Royal ornate peacock on floral pedestal",className:"peacock-img",draggable:!1})}),Q.jsx("canvas",{ref:l,className:"invitation-petals-canvas","aria-hidden":"true"})]})},lT="/assets/reception_bg-Xpd4L4s3.jpg";class uT{constructor(){Je(this,"ctx",null);Je(this,"isMuted",!0);Je(this,"isInitialized",!1);Je(this,"masterGain",null);Je(this,"droneGain",null);Je(this,"bellCooldown",0);Je(this,"fireworkCooldown",0)}init(){if(!this.isInitialized)try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(0,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.setupTanpuraDrone(),this.isInitialized=!0,this.isMuted=!1,this.masterGain.gain.linearRampToValueAtTime(.35,this.ctx.currentTime+1.5)}catch(e){console.warn("Web Audio API not supported or blocked:",e)}}setupTanpuraDrone(){if(!this.ctx||!this.masterGain)return;this.droneGain=this.ctx.createGain(),this.droneGain.gain.setValueAtTime(.2,this.ctx.currentTime);const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(380,this.ctx.currentTime),[130.81,131.2,196,261.63,392].forEach((r,o)=>{if(!this.ctx||!this.droneGain)return;const l=this.ctx.createOscillator();l.type=o===0?"sine":"triangle",l.frequency.setValueAtTime(r,this.ctx.currentTime);const c=this.ctx.createGain(),d=this.ctx.createOscillator();d.frequency.setValueAtTime(.15+o*.08,this.ctx.currentTime);const p=this.ctx.createGain();p.gain.setValueAtTime(.04,this.ctx.currentTime),d.connect(p.gain),c.gain.setValueAtTime(.08/(o+1),this.ctx.currentTime),l.connect(c),c.connect(e),l.start(),d.start()}),e.connect(this.droneGain),this.droneGain.connect(this.masterGain)}playTempleBell(){if(!this.ctx||this.isMuted||!this.masterGain)return;const e=performance.now();if(e-this.bellCooldown<2500)return;this.bellCooldown=e;const n=this.ctx.currentTime;[880,1760,2640,3520].forEach((o,l)=>{if(!this.ctx||!this.masterGain)return;const c=this.ctx.createOscillator(),d=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(o+(Math.random()-.5)*6,n);const p=2.5/(l*.6+1);d.gain.setValueAtTime(.08/(l+1),n),d.gain.exponentialRampToValueAtTime(1e-4,n+p),c.connect(d),d.connect(this.masterGain),c.start(n),c.stop(n+p)})}playFireworkPop(){if(!this.ctx||this.isMuted||!this.masterGain)return;const e=performance.now();if(e-this.fireworkCooldown<350)return;this.fireworkCooldown=e;const n=this.ctx.currentTime,r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(140,n),r.frequency.exponentialRampToValueAtTime(35,n+.18),o.gain.setValueAtTime(.18,n),o.gain.exponentialRampToValueAtTime(.001,n+.22),r.connect(o),o.connect(this.masterGain),r.start(n),r.stop(n+.22);for(let l=0;l<3;l++){const c=this.ctx.createOscillator(),d=this.ctx.createGain();c.type="triangle",c.frequency.setValueAtTime(1200+Math.random()*1800,n+.08+l*.04),d.gain.setValueAtTime(.03,n+.08+l*.04),d.gain.exponentialRampToValueAtTime(1e-4,n+.25+l*.05),c.connect(d),d.connect(this.masterGain),c.start(n+.08+l*.04),c.stop(n+.35)}}updateProgress(e){!this.ctx||!this.droneGain||e>.08&&e<.2&&this.playTempleBell()}toggleMute(){return this.isInitialized?!this.ctx||!this.masterGain?!1:(this.ctx.state==="suspended"&&this.ctx.resume(),this.isMuted?(this.masterGain.gain.linearRampToValueAtTime(.35,this.ctx.currentTime+.4),this.isMuted=!1):(this.masterGain.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.4),this.isMuted=!0),!this.isMuted):(this.init(),!0)}getMuted(){return this.isMuted}}const Fl=new uT,cT=({progress:s=0,opacity:e=1,px:n=0,py:r=0,reducedMotion:o=!1})=>{const l=st.useRef(null),c=st.useRef(null),d=st.useRef([]),[p,m]=st.useState(!0);st.useEffect(()=>{const T=l.current;if(!T)return;const C=T.getContext("2d");if(!C)return;let v,x=0;const b=()=>{T.width=window.innerWidth,T.height=window.innerHeight};b(),window.addEventListener("resize",b);const F=[["#ffd700","#ffeb3b","#fff8e1","#ffa000"],["#ff4081","#ff80ab","#f8bbd0","#ffffff"],["#00e676","#69f0ae","#b9f6ca","#ffffff"],["#ff9100","#ffab40","#ffe0b2","#ffffff"],["#e040fb","#ea80fc","#f3e5f5","#ffd54f"]],P=(D,M,R=48)=>{Fl.playFireworkPop();const W=F[Math.floor(Math.random()*F.length)];for(let O=0;O<R;O++){const V=Math.PI*2*O/R+(Math.random()-.5)*.2,$=2.5+Math.random()*5.5,se=W[Math.floor(Math.random()*W.length)];d.current.push({x:D,y:M,vx:Math.cos(V)*$,vy:Math.sin(V)*$,alpha:1,color:se,size:2+Math.random()*2.5,decay:.012+Math.random()*.018,gravity:.08,trail:[]})}};performance.now();const U=D=>{if(C.clearRect(0,0,T.width,T.height),e>.05){if(D-x>1600&&!o){x=D;const M=T.width*(.2+Math.random()*.6),R=T.height*(.12+Math.random()*.28);P(M,R,52)}for(let M=d.current.length-1;M>=0;M--){const R=d.current[M];if(R.trail.push({x:R.x,y:R.y}),R.trail.length>5&&R.trail.shift(),R.x+=R.vx,R.y+=R.vy,R.vy+=R.gravity,R.vx*=.985,R.vy*=.985,R.alpha-=R.decay,R.alpha<=0){d.current.splice(M,1);continue}if(R.trail.length>1){C.beginPath(),C.moveTo(R.trail[0].x,R.trail[0].y);for(let W=1;W<R.trail.length;W++)C.lineTo(R.trail[W].x,R.trail[W].y);C.strokeStyle=R.color,C.lineWidth=R.size*.55,C.globalAlpha=R.alpha*.45*e,C.stroke()}C.beginPath(),C.arc(R.x,R.y,R.size,0,Math.PI*2),C.fillStyle=R.color,C.globalAlpha=R.alpha*e,C.shadowBlur=8,C.shadowColor=R.color,C.fill(),C.shadowBlur=0}C.globalAlpha=1}v=requestAnimationFrame(U)};return v=requestAnimationFrame(U),()=>{window.removeEventListener("resize",b),cancelAnimationFrame(v)}},[e,o]);const _=T=>{Fl.playFireworkPop();const C=T.currentTarget.getBoundingClientRect(),v=T.clientX-C.left,x=T.clientY-C.top,b=[["#ffd700","#ffffff","#ffab00"],["#ff4081","#ffeb3b","#ffffff"]],F=b[Math.floor(Math.random()*b.length)];for(let P=0;P<60;P++){const U=Math.PI*2*P/60+(Math.random()-.5)*.15,D=3+Math.random()*6.5;d.current.push({x:v,y:x,vx:Math.cos(U)*D,vy:Math.sin(U)*D,alpha:1,color:F[Math.floor(Math.random()*F.length)],size:2.2+Math.random()*2.8,decay:.01+Math.random()*.015,gravity:.08,trail:[]})}m(!1)},S=Math.min(1,Math.max(0,s*1.3)),g=1.05-S*.03,y=(1-S)*60;return Q.jsxs("section",{ref:c,className:"reception-stage",onClick:_,style:{opacity:e,visibility:e>0?"visible":"hidden",pointerEvents:e>.4?"auto":"none"},"aria-label":"Evening Reception Celebration and Details",children:[Q.jsxs("div",{className:"reception-bg-layer",style:{transform:`translate3d(${n*-16}px, ${r*-10}px, 0) scale(${g})`},children:[Q.jsx("img",{src:lT,alt:"Palace courtyard at night with illuminated arches and couple Siddharth and Manisha",className:"reception-bg-img",draggable:!1}),Q.jsx("div",{className:"reception-night-tint"})]}),Q.jsx("div",{className:"reception-stars","aria-hidden":"true",children:Array.from({length:40}).map((T,C)=>Q.jsx("span",{className:"star",style:{top:`${C*19%55}%`,left:`${C*23%100}%`,animationDelay:`${C*.35%3}s`,transform:`scale(${.6+C%3*.4})`}},C))}),Q.jsx("canvas",{ref:l,className:"reception-fireworks-canvas","aria-hidden":"true"}),Q.jsxs("div",{className:"reception-content-wrap",style:{transform:`translate3d(${n*-8}px, ${y+r*-6}px, 0)`},children:[Q.jsxs("div",{className:"reception-date-badge",children:[Q.jsx("span",{className:"sat-text",children:"SAT."}),Q.jsx("span",{className:"day-number",children:"3"}),Q.jsx("span",{className:"rd-sup",children:"RD"}),Q.jsx("span",{className:"may-script",children:"May"}),Q.jsx("span",{className:"year-number",children:"2025"})]}),Q.jsx("h2",{className:"reception-title",children:"BLISSFUL BEGINNINGS"}),Q.jsxs("p",{className:"reception-tagline",children:["LET'S KICK OFF THE FESTIVITIES",Q.jsx("br",{}),"WITH RHYTHMS OF ROMANCE"]}),Q.jsxs("div",{className:"reception-flourish-divider",children:[Q.jsx("span",{className:"flourish-diamond",children:"◆"}),Q.jsx("span",{className:"flourish-line"}),Q.jsx("span",{className:"flourish-diamond",children:"◆"})]}),Q.jsxs("div",{className:"reception-time-venue",children:[Q.jsxs("div",{className:"time-badge",children:[Q.jsx("h3",{className:"event-heading",children:"RECEPTION"}),Q.jsx("p",{className:"event-timing",children:"7:00 PM ONWARDS"})]}),Q.jsxs("div",{className:"venue-badge",children:[Q.jsx("span",{className:"venue-at",children:"AT"}),Q.jsx("h4",{className:"venue-name",children:"MARAKATA CHAMARA VAJRA"}),Q.jsx("p",{className:"venue-location",children:"JAYAMAHAL, BENGALURU"})]})]}),Q.jsx("div",{className:"reception-action-row",children:Q.jsxs("a",{href:"https://maps.google.com/?q=Marakata+Chamara+Vajra+Jayamahal+Bengaluru",target:"_blank",rel:"noopener noreferrer",className:"reception-btn",onClick:T=>T.stopPropagation(),children:[Q.jsx("span",{children:"📍"}),Q.jsx("span",{children:"View Venue on Google Maps"})]})})]}),p&&Q.jsx("div",{className:"tap-fireworks-prompt","aria-hidden":"true",children:Q.jsx("span",{children:"✨ Tap anywhere to burst fireworks ✨"})})]})},Am=[{at:0,label:"Temple Entrance"},{at:.18,label:"Ganesha Sanctum"},{at:.38,label:"Daytime Mandap"},{at:.62,label:"Wedding Invitation"},{at:.88,label:"Evening Reception"}],fT=()=>{const[s,e]=st.useState(0),[n,r]=st.useState({px:0,py:0}),[o,l]=st.useState(!1),[c,d]=st.useState(0),[p,m]=st.useState(!1),[_,S]=st.useState(!1),g=st.useRef({mx:0,my:0,tmx:0,tmy:0}),y=st.useRef(!1);st.useEffect(()=>{const O=window.matchMedia("(prefers-reduced-motion: reduce)");l(O.matches);const V=$=>l($.matches);return O.addEventListener("change",V),()=>O.removeEventListener("change",V)},[]),st.useEffect(()=>{if(o)return;const O=X=>{g.current.tmx=(X.clientX/window.innerWidth-.5)*2,g.current.tmy=(X.clientY/window.innerHeight-.5)*2},V=X=>{X.gamma!==null&&X.beta!==null&&(g.current.tmx=Math.max(-1,Math.min(1,X.gamma/22)),g.current.tmy=Math.max(-1,Math.min(1,(X.beta-45)/22)))};let $=0,se=0;const k=X=>{X.touches.length>0&&($=X.touches[0].clientX,se=X.touches[0].clientY)},Z=X=>{if(X.touches.length>0){const j=(X.touches[0].clientX-$)/window.innerWidth,H=(X.touches[0].clientY-se)/window.innerHeight;g.current.tmx=Math.max(-1,Math.min(1,j*2.5)),g.current.tmy=Math.max(-1,Math.min(1,H*2.5))}},ae=()=>{g.current.tmx=0,g.current.tmy=0};return window.addEventListener("pointermove",O,{passive:!0}),window.addEventListener("touchstart",k,{passive:!0}),window.addEventListener("touchmove",Z,{passive:!0}),window.addEventListener("touchend",ae,{passive:!0}),window.DeviceOrientationEvent&&window.addEventListener("deviceorientation",V,{passive:!0}),()=>{window.removeEventListener("pointermove",O),window.removeEventListener("touchstart",k),window.removeEventListener("touchmove",Z),window.removeEventListener("touchend",ae),window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",V)}},[o]),st.useEffect(()=>{let O,V=0,$=0;const se=()=>Math.max(1,document.documentElement.scrollHeight-window.innerHeight),k=()=>{y.current||(V=Math.min(1,Math.max(0,window.scrollY/se())))};window.addEventListener("scroll",k,{passive:!0});const Z=()=>{const ae=se();if(y.current){const L=window.scrollY+2.4;L>=ae?(y.current=!1,S(!1)):(window.scrollTo(0,L),V=Math.min(1,L/ae))}const X=o?1:.085;$+=(V-$)*X,Math.abs(V-$)<1e-4&&($=V);const j=o?1:.09;g.current.mx+=(g.current.tmx-g.current.mx)*j,g.current.my+=(g.current.tmy-g.current.my)*j,e($),r({px:g.current.mx,py:g.current.my}),Fl.updateProgress($);let H=0,K=999;Am.forEach((L,te)=>{const Se=Math.abs(L.at-$);Se<K&&(K=Se,H=te)}),d(H),O=requestAnimationFrame(Z)};return O=requestAnimationFrame(Z),()=>{window.removeEventListener("scroll",k),cancelAnimationFrame(O)}},[o]);const T=O=>{y.current=!1,S(!1);const V=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({top:O*V,behavior:o?"auto":"smooth"})},C=()=>{const O=Fl.toggleMute();m(O)},v=()=>{const O=!_;S(O),y.current=O},x=Math.min(1,s/.24),b=s<.22?1:Math.max(0,1-(s-.22)/.06),F=Math.min(1,Math.max(0,(s-.24)/.24)),P=s<.24?0:s<.46?Math.min(1,(s-.24)/.05):Math.max(0,1-(s-.46)/.07),U=Math.min(1,Math.max(0,(s-.48)/.22)),D=s<.48?0:s<.7?Math.min(1,(s-.48)/.05):Math.max(0,1-(s-.7)/.06),M=Math.min(1,Math.max(0,(s-.72)/.28)),R=s<.72?0:Math.min(1,(s-.72)/.06),W=s>=.24&&s<.72;return Q.jsxs(Q.Fragment,{children:[Q.jsx("div",{id:"scroll-track","aria-hidden":"true"}),Q.jsxs("header",{className:`app-controls-bar ${W?"light-mode":""}`,children:[Q.jsxs("button",{type:"button",className:`app-ctrl-btn ${_?"active":""}`,onClick:v,"aria-label":_?"Pause cinematic tour":"Start cinematic tour",children:[Q.jsx("span",{children:_?"❚❚":"▶"}),Q.jsx("span",{children:_?"Pause":"Tour"})]}),Q.jsxs("button",{type:"button",className:`app-ctrl-btn ${p?"active":""}`,onClick:C,"aria-label":p?"Mute ambient soundscape":"Play ambient soundscape",children:[Q.jsx("span",{children:p?"♪":"♫"}),Q.jsx("span",{children:p?"Sound On":"Music"})]})]}),Q.jsxs("main",{className:"app-container",children:[Q.jsx(g_,{progress:x,opacity:b,px:n.px,py:n.py,reducedMotion:o}),Q.jsx(iT,{progress:F,opacity:P,px:n.px,py:n.py,reducedMotion:o}),Q.jsx(oT,{progress:U,opacity:D,px:n.px,py:n.py,reducedMotion:o}),Q.jsx(cT,{progress:M,opacity:R,px:n.px,py:n.py,reducedMotion:o}),Q.jsx("nav",{className:`app-chapters ${W?"light-mode":""}`,"aria-label":"Wedding Invitation Scene Chapters",children:Am.map((O,V)=>Q.jsxs("button",{type:"button",className:c===V?"active":"",onClick:()=>T(O.at),"aria-label":O.label,children:[Q.jsx("span",{children:O.label}),Q.jsx("i",{})]},O.label))})]})]})},Rm=document.getElementById("root");Rm&&u_.createRoot(Rm).render(Q.jsx(n_.StrictMode,{children:Q.jsx(fT,{})}));
