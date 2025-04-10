function q0(n,r){for(var o=0;o<r.length;o++){const s=r[o];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in n)){const u=Object.getOwnPropertyDescriptor(s,l);u&&Object.defineProperty(n,l,u.get?u:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const p of u.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function o(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=o(l);fetch(l.href,u)}})();function Qr(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function er(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var r=n.default;if(typeof r=="function"){var o=function s(){return this instanceof s?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};o.prototype=r.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(n).forEach(function(s){var l=Object.getOwnPropertyDescriptor(n,s);Object.defineProperty(o,s,l.get?l:{enumerable:!0,get:function(){return n[s]}})}),o}var qc={exports:{}},Ao={},Gc={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f;function G0(){if(_f)return Se;_f=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),p=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function k(z){return z===null||typeof z!="object"?null:(z=y&&z[y]||z["@@iterator"],typeof z=="function"?z:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,x={};function I(z,V,fe){this.props=z,this.context=V,this.refs=x,this.updater=fe||M}I.prototype.isReactComponent={},I.prototype.setState=function(z,V){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,V,"setState")},I.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function _(){}_.prototype=I.prototype;function W(z,V,fe){this.props=z,this.context=V,this.refs=x,this.updater=fe||M}var O=W.prototype=new _;O.constructor=W,C(O,I.prototype),O.isPureReactComponent=!0;var $=Array.isArray,S=Object.prototype.hasOwnProperty,F={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function N(z,V,fe){var se,pe={},le=null,xe=null;if(V!=null)for(se in V.ref!==void 0&&(xe=V.ref),V.key!==void 0&&(le=""+V.key),V)S.call(V,se)&&!w.hasOwnProperty(se)&&(pe[se]=V[se]);var he=arguments.length-2;if(he===1)pe.children=fe;else if(1<he){for(var me=Array(he),_e=0;_e<he;_e++)me[_e]=arguments[_e+2];pe.children=me}if(z&&z.defaultProps)for(se in he=z.defaultProps,he)pe[se]===void 0&&(pe[se]=he[se]);return{$$typeof:n,type:z,key:le,ref:xe,props:pe,_owner:F.current}}function U(z,V){return{$$typeof:n,type:z.type,key:V,ref:z.ref,props:z.props,_owner:z._owner}}function L(z){return typeof z=="object"&&z!==null&&z.$$typeof===n}function q(z){var V={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(fe){return V[fe]})}var ie=/\/+/g;function Q(z,V){return typeof z=="object"&&z!==null&&z.key!=null?q(""+z.key):V.toString(36)}function re(z,V,fe,se,pe){var le=typeof z;(le==="undefined"||le==="boolean")&&(z=null);var xe=!1;if(z===null)xe=!0;else switch(le){case"string":case"number":xe=!0;break;case"object":switch(z.$$typeof){case n:case r:xe=!0}}if(xe)return xe=z,pe=pe(xe),z=se===""?"."+Q(xe,0):se,$(pe)?(fe="",z!=null&&(fe=z.replace(ie,"$&/")+"/"),re(pe,V,fe,"",function(_e){return _e})):pe!=null&&(L(pe)&&(pe=U(pe,fe+(!pe.key||xe&&xe.key===pe.key?"":(""+pe.key).replace(ie,"$&/")+"/")+z)),V.push(pe)),1;if(xe=0,se=se===""?".":se+":",$(z))for(var he=0;he<z.length;he++){le=z[he];var me=se+Q(le,he);xe+=re(le,V,fe,me,pe)}else if(me=k(z),typeof me=="function")for(z=me.call(z),he=0;!(le=z.next()).done;)le=le.value,me=se+Q(le,he++),xe+=re(le,V,fe,me,pe);else if(le==="object")throw V=String(z),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return xe}function ne(z,V,fe){if(z==null)return z;var se=[],pe=0;return re(z,se,"","",function(le){return V.call(fe,le,pe++)}),se}function Y(z){if(z._status===-1){var V=z._result;V=V(),V.then(function(fe){(z._status===0||z._status===-1)&&(z._status=1,z._result=fe)},function(fe){(z._status===0||z._status===-1)&&(z._status=2,z._result=fe)}),z._status===-1&&(z._status=0,z._result=V)}if(z._status===1)return z._result.default;throw z._result}var J={current:null},j={transition:null},Z={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:j,ReactCurrentOwner:F};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:ne,forEach:function(z,V,fe){ne(z,function(){V.apply(this,arguments)},fe)},count:function(z){var V=0;return ne(z,function(){V++}),V},toArray:function(z){return ne(z,function(V){return V})||[]},only:function(z){if(!L(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},Se.Component=I,Se.Fragment=o,Se.Profiler=l,Se.PureComponent=W,Se.StrictMode=s,Se.Suspense=m,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,Se.act=ee,Se.cloneElement=function(z,V,fe){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var se=C({},z.props),pe=z.key,le=z.ref,xe=z._owner;if(V!=null){if(V.ref!==void 0&&(le=V.ref,xe=F.current),V.key!==void 0&&(pe=""+V.key),z.type&&z.type.defaultProps)var he=z.type.defaultProps;for(me in V)S.call(V,me)&&!w.hasOwnProperty(me)&&(se[me]=V[me]===void 0&&he!==void 0?he[me]:V[me])}var me=arguments.length-2;if(me===1)se.children=fe;else if(1<me){he=Array(me);for(var _e=0;_e<me;_e++)he[_e]=arguments[_e+2];se.children=he}return{$$typeof:n,type:z.type,key:pe,ref:le,props:se,_owner:xe}},Se.createContext=function(z){return z={$$typeof:p,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:u,_context:z},z.Consumer=z},Se.createElement=N,Se.createFactory=function(z){var V=N.bind(null,z);return V.type=z,V},Se.createRef=function(){return{current:null}},Se.forwardRef=function(z){return{$$typeof:f,render:z}},Se.isValidElement=L,Se.lazy=function(z){return{$$typeof:v,_payload:{_status:-1,_result:z},_init:Y}},Se.memo=function(z,V){return{$$typeof:g,type:z,compare:V===void 0?null:V}},Se.startTransition=function(z){var V=j.transition;j.transition={};try{z()}finally{j.transition=V}},Se.unstable_act=ee,Se.useCallback=function(z,V){return J.current.useCallback(z,V)},Se.useContext=function(z){return J.current.useContext(z)},Se.useDebugValue=function(){},Se.useDeferredValue=function(z){return J.current.useDeferredValue(z)},Se.useEffect=function(z,V){return J.current.useEffect(z,V)},Se.useId=function(){return J.current.useId()},Se.useImperativeHandle=function(z,V,fe){return J.current.useImperativeHandle(z,V,fe)},Se.useInsertionEffect=function(z,V){return J.current.useInsertionEffect(z,V)},Se.useLayoutEffect=function(z,V){return J.current.useLayoutEffect(z,V)},Se.useMemo=function(z,V){return J.current.useMemo(z,V)},Se.useReducer=function(z,V,fe){return J.current.useReducer(z,V,fe)},Se.useRef=function(z){return J.current.useRef(z)},Se.useState=function(z){return J.current.useState(z)},Se.useSyncExternalStore=function(z,V,fe){return J.current.useSyncExternalStore(z,V,fe)},Se.useTransition=function(){return J.current.useTransition()},Se.version="18.3.1",Se}var Of;function Gs(){return Of||(Of=1,Gc.exports=G0()),Gc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Af;function K0(){if(Af)return Ao;Af=1;var n=Gs(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function p(f,m,g){var v,y={},k=null,M=null;g!==void 0&&(k=""+g),m.key!==void 0&&(k=""+m.key),m.ref!==void 0&&(M=m.ref);for(v in m)s.call(m,v)&&!u.hasOwnProperty(v)&&(y[v]=m[v]);if(f&&f.defaultProps)for(v in m=f.defaultProps,m)y[v]===void 0&&(y[v]=m[v]);return{$$typeof:r,type:f,key:k,ref:M,props:y,_owner:l.current}}return Ao.Fragment=o,Ao.jsx=p,Ao.jsxs=p,Ao}var $f;function Ru(){return $f||($f=1,qc.exports=K0()),qc.exports}var H=Ru(),E=Gs();const En=Qr(E),du=q0({__proto__:null,default:En},[E]);var Es={},Kc={exports:{}},Ot={},Yc={exports:{}},Xc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf;function Y0(){return Nf||(Nf=1,function(n){function r(j,Z){var ee=j.length;j.push(Z);e:for(;0<ee;){var z=ee-1>>>1,V=j[z];if(0<l(V,Z))j[z]=Z,j[ee]=V,ee=z;else break e}}function o(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var Z=j[0],ee=j.pop();if(ee!==Z){j[0]=ee;e:for(var z=0,V=j.length,fe=V>>>1;z<fe;){var se=2*(z+1)-1,pe=j[se],le=se+1,xe=j[le];if(0>l(pe,ee))le<V&&0>l(xe,pe)?(j[z]=xe,j[le]=ee,z=le):(j[z]=pe,j[se]=ee,z=se);else if(le<V&&0>l(xe,ee))j[z]=xe,j[le]=ee,z=le;else break e}}return Z}function l(j,Z){var ee=j.sortIndex-Z.sortIndex;return ee!==0?ee:j.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var p=Date,f=p.now();n.unstable_now=function(){return p.now()-f}}var m=[],g=[],v=1,y=null,k=3,M=!1,C=!1,x=!1,I=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(j){for(var Z=o(g);Z!==null;){if(Z.callback===null)s(g);else if(Z.startTime<=j)s(g),Z.sortIndex=Z.expirationTime,r(m,Z);else break;Z=o(g)}}function $(j){if(x=!1,O(j),!C)if(o(m)!==null)C=!0,Y(S);else{var Z=o(g);Z!==null&&J($,Z.startTime-j)}}function S(j,Z){C=!1,x&&(x=!1,_(N),N=-1),M=!0;var ee=k;try{for(O(Z),y=o(m);y!==null&&(!(y.expirationTime>Z)||j&&!q());){var z=y.callback;if(typeof z=="function"){y.callback=null,k=y.priorityLevel;var V=z(y.expirationTime<=Z);Z=n.unstable_now(),typeof V=="function"?y.callback=V:y===o(m)&&s(m),O(Z)}else s(m);y=o(m)}if(y!==null)var fe=!0;else{var se=o(g);se!==null&&J($,se.startTime-Z),fe=!1}return fe}finally{y=null,k=ee,M=!1}}var F=!1,w=null,N=-1,U=5,L=-1;function q(){return!(n.unstable_now()-L<U)}function ie(){if(w!==null){var j=n.unstable_now();L=j;var Z=!0;try{Z=w(!0,j)}finally{Z?Q():(F=!1,w=null)}}else F=!1}var Q;if(typeof W=="function")Q=function(){W(ie)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ne=re.port2;re.port1.onmessage=ie,Q=function(){ne.postMessage(null)}}else Q=function(){I(ie,0)};function Y(j){w=j,F||(F=!0,Q())}function J(j,Z){N=I(function(){j(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(j){j.callback=null},n.unstable_continueExecution=function(){C||M||(C=!0,Y(S))},n.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<j?Math.floor(1e3/j):5},n.unstable_getCurrentPriorityLevel=function(){return k},n.unstable_getFirstCallbackNode=function(){return o(m)},n.unstable_next=function(j){switch(k){case 1:case 2:case 3:var Z=3;break;default:Z=k}var ee=k;k=Z;try{return j()}finally{k=ee}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(j,Z){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var ee=k;k=j;try{return Z()}finally{k=ee}},n.unstable_scheduleCallback=function(j,Z,ee){var z=n.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?z+ee:z):ee=z,j){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=ee+V,j={id:v++,callback:Z,priorityLevel:j,startTime:ee,expirationTime:V,sortIndex:-1},ee>z?(j.sortIndex=ee,r(g,j),o(m)===null&&j===o(g)&&(x?(_(N),N=-1):x=!0,J($,ee-z))):(j.sortIndex=V,r(m,j),C||M||(C=!0,Y(S))),j},n.unstable_shouldYield=q,n.unstable_wrapCallback=function(j){var Z=k;return function(){var ee=k;k=Z;try{return j.apply(this,arguments)}finally{k=ee}}}}(Xc)),Xc}var Df;function X0(){return Df||(Df=1,Yc.exports=Y0()),Yc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf;function Q0(){if(Lf)return Ot;Lf=1;var n=Gs(),r=X0();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(e,t){p(e,t),p(e+"Capture",t)}function p(e,t){for(l[e]=t,e=0;e<t.length;e++)s.add(t[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function k(e){return m.call(y,e)?!0:m.call(v,e)?!1:g.test(e)?y[e]=!0:(v[e]=!0,!1)}function M(e,t,i,a){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function C(e,t,i,a){if(t===null||typeof t>"u"||M(e,t,i,a))return!0;if(a)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function x(e,t,i,a,c,d,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=h}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){I[e]=new x(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];I[t]=new x(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){I[e]=new x(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){I[e]=new x(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){I[e]=new x(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){I[e]=new x(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){I[e]=new x(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){I[e]=new x(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){I[e]=new x(e,5,!1,e.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function W(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_,W);I[t]=new x(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_,W);I[t]=new x(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_,W);I[t]=new x(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){I[e]=new x(e,1,!1,e.toLowerCase(),null,!1,!1)}),I.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){I[e]=new x(e,1,!1,e.toLowerCase(),null,!0,!0)});function O(e,t,i,a){var c=I.hasOwnProperty(t)?I[t]:null;(c!==null?c.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(C(t,i,c,a)&&(i=null),a||c===null?k(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):c.mustUseProperty?e[c.propertyName]=i===null?c.type===3?!1:"":i:(t=c.attributeName,a=c.attributeNamespace,i===null?e.removeAttribute(t):(c=c.type,i=c===3||c===4&&i===!0?"":""+i,a?e.setAttributeNS(a,t,i):e.setAttribute(t,i))))}var $=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,S=Symbol.for("react.element"),F=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),q=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),j=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,z;function V(e){if(z===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);z=t&&t[1]||""}return`
`+z+e}var fe=!1;function se(e,t){if(!e||fe)return"";fe=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(B){var a=B}Reflect.construct(e,[],t)}else{try{t.call()}catch(B){a=B}e.call(t.prototype)}else{try{throw Error()}catch(B){a=B}e()}}catch(B){if(B&&a&&typeof B.stack=="string"){for(var c=B.stack.split(`
`),d=a.stack.split(`
`),h=c.length-1,b=d.length-1;1<=h&&0<=b&&c[h]!==d[b];)b--;for(;1<=h&&0<=b;h--,b--)if(c[h]!==d[b]){if(h!==1||b!==1)do if(h--,b--,0>b||c[h]!==d[b]){var T=`
`+c[h].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=h&&0<=b);break}}}finally{fe=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?V(e):""}function pe(e){switch(e.tag){case 5:return V(e.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return e=se(e.type,!1),e;case 11:return e=se(e.type.render,!1),e;case 1:return e=se(e.type,!0),e;default:return""}}function le(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case F:return"Portal";case U:return"Profiler";case N:return"StrictMode";case Q:return"Suspense";case re:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case q:return(e.displayName||"Context")+".Consumer";case L:return(e._context.displayName||"Context")+".Provider";case ie:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ne:return t=e.displayName||null,t!==null?t:le(e.type)||"Memo";case Y:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}function xe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(t);case 8:return t===N?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _e(e){var t=me(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,d=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(h){a=""+h,d.call(this,h)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(h){a=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ke(e){e._valueTracker||(e._valueTracker=_e(e))}function rt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),a="";return e&&(a=me(e)?e.checked?"true":"false":e.value),e=a,e!==i?(t.setValue(e),!0):!1}function Oe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ze(e,t){var i=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function it(e,t){var i=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;i=he(t.value!=null?t.value:i),e._wrapperState={initialChecked:a,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kt(e,t){t=t.checked,t!=null&&O(e,"checked",t,!1)}function Yt(e,t){Kt(e,t);var i=he(t.value),a=t.type;if(i!=null)a==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pn(e,t.type,i):t.hasOwnProperty("defaultValue")&&Pn(e,t.type,he(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xt(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Pn(e,t,i){(t!=="number"||Oe(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Je=Array.isArray;function ft(e,t,i,a){if(e=e.options,t){t={};for(var c=0;c<i.length;c++)t["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=t.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&a&&(e[i].defaultSelected=!0)}else{for(i=""+he(i),t=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,a&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function jt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mn(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(o(92));if(Je(i)){if(1<i.length)throw Error(o(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:he(i)}}function Pt(e,t){var i=he(t.value),a=he(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),a!=null&&(e.defaultValue=""+a)}function Ct(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qt(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zt(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qt(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hn,we=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,a,c){MSApp.execUnsafeLocalFunction(function(){return e(t,i,a,c)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hn=hn||document.createElement("div"),hn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ct(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var gn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rn=["Webkit","ms","Moz","O"];Object.keys(gn).forEach(function(e){Rn.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gn[t]=gn[e]})});function nr(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||gn.hasOwnProperty(e)&&gn[e]?(""+t).trim():t+"px"}function Gi(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var a=i.indexOf("--")===0,c=nr(i,t[i],a);i==="float"&&(i="cssFloat"),a?e.setProperty(i,c):e[i]=c}}var Jr=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rr(e,t){if(t){if(Jr[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function Mr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ei=null;function Ki(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yi=null,ir=null,Wn=null;function Xi(e){if(e=yo(e)){if(typeof Yi!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Ba(t),Yi(e.stateNode,e.type,t))}}function Qi(e){ir?Wn?Wn.push(e):Wn=[e]:ir=e}function Zi(){if(ir){var e=ir,t=Wn;if(Wn=ir=null,Xi(e),t)for(e=0;e<t.length;e++)Xi(t[e])}}function pa(e,t){return e(t)}function fa(){}var Ji=!1;function ti(e,t,i){if(Ji)return e(t,i);Ji=!0;try{return pa(e,t,i)}finally{Ji=!1,(ir!==null||Wn!==null)&&(fa(),Zi())}}function Ir(e,t){var i=e.stateNode;if(i===null)return null;var a=Ba(i);if(a===null)return null;i=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,t,typeof i));return i}var Un=!1;if(f)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){Un=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{Un=!1}function Bt(e,t,i,a,c,d,h,b,T){var B=Array.prototype.slice.call(arguments,3);try{t.apply(i,B)}catch(K){this.onError(K)}}var vn=!1,ni=null,Mn=!1,zr=null,ma={onError:function(e){vn=!0,ni=e}};function ha(e,t,i,a,c,d,h,b,T){vn=!1,ni=null,Bt.apply(ma,arguments)}function ga(e,t,i,a,c,d,h,b,T){if(ha.apply(this,arguments),vn){if(vn){var B=ni;vn=!1,ni=null}else throw Error(o(198));Mn||(Mn=!0,zr=B)}}function In(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function va(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xa(e){if(In(e)!==e)throw Error(o(188))}function dl(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error(o(188));return t!==e?null:e}for(var i=e,a=t;;){var c=i.return;if(c===null)break;var d=c.alternate;if(d===null){if(a=c.return,a!==null){i=a;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===i)return xa(c),e;if(d===a)return xa(c),t;d=d.sibling}throw Error(o(188))}if(i.return!==a.return)i=c,a=d;else{for(var h=!1,b=c.child;b;){if(b===i){h=!0,i=c,a=d;break}if(b===a){h=!0,a=c,i=d;break}b=b.sibling}if(!h){for(b=d.child;b;){if(b===i){h=!0,i=d,a=c;break}if(b===a){h=!0,a=d,i=c;break}b=b.sibling}if(!h)throw Error(o(189))}}if(i.alternate!==a)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:t}function ya(e){return e=dl(e),e!==null?Ce(e):null}function Ce(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ce(e);if(t!==null)return t;e=e.sibling}return null}var vt=r.unstable_scheduleCallback,od=r.unstable_cancelCallback,rg=r.unstable_shouldYield,ig=r.unstable_requestPaint,et=r.unstable_now,og=r.unstable_getCurrentPriorityLevel,pl=r.unstable_ImmediatePriority,ad=r.unstable_UserBlockingPriority,wa=r.unstable_NormalPriority,ag=r.unstable_LowPriority,sd=r.unstable_IdlePriority,ba=null,zn=null;function sg(e){if(zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(ba,e,void 0,(e.current.flags&128)===128)}catch{}}var xn=Math.clz32?Math.clz32:ug,lg=Math.log,cg=Math.LN2;function ug(e){return e>>>=0,e===0?32:31-(lg(e)/cg|0)|0}var ka=64,Ca=4194304;function eo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Sa(e,t){var i=e.pendingLanes;if(i===0)return 0;var a=0,c=e.suspendedLanes,d=e.pingedLanes,h=i&268435455;if(h!==0){var b=h&~c;b!==0?a=eo(b):(d&=h,d!==0&&(a=eo(d)))}else h=i&~c,h!==0?a=eo(h):d!==0&&(a=eo(d));if(a===0)return 0;if(t!==0&&t!==a&&(t&c)===0&&(c=a&-a,d=t&-t,c>=d||c===16&&(d&4194240)!==0))return t;if((a&4)!==0&&(a|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)i=31-xn(t),c=1<<i,a|=e[i],t&=~c;return a}function dg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pg(e,t){for(var i=e.suspendedLanes,a=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes;0<d;){var h=31-xn(d),b=1<<h,T=c[h];T===-1?((b&i)===0||(b&a)!==0)&&(c[h]=dg(b,t)):T<=t&&(e.expiredLanes|=b),d&=~b}}function fl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ld(){var e=ka;return ka<<=1,(ka&4194240)===0&&(ka=64),e}function ml(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function to(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xn(t),e[t]=i}function fg(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<i;){var c=31-xn(i),d=1<<c;t[c]=0,a[c]=-1,e[c]=-1,i&=~d}}function hl(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var a=31-xn(i),c=1<<a;c&t|e[a]&t&&(e[a]|=t),i&=~c}}var Ae=0;function cd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ud,gl,dd,pd,fd,vl=!1,Ea=[],or=null,ar=null,sr=null,no=new Map,ro=new Map,lr=[],mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function md(e,t){switch(e){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":no.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(t.pointerId)}}function io(e,t,i,a,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:i,eventSystemFlags:a,nativeEvent:d,targetContainers:[c]},t!==null&&(t=yo(t),t!==null&&gl(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function hg(e,t,i,a,c){switch(t){case"focusin":return or=io(or,e,t,i,a,c),!0;case"dragenter":return ar=io(ar,e,t,i,a,c),!0;case"mouseover":return sr=io(sr,e,t,i,a,c),!0;case"pointerover":var d=c.pointerId;return no.set(d,io(no.get(d)||null,e,t,i,a,c)),!0;case"gotpointercapture":return d=c.pointerId,ro.set(d,io(ro.get(d)||null,e,t,i,a,c)),!0}return!1}function hd(e){var t=_r(e.target);if(t!==null){var i=In(t);if(i!==null){if(t=i.tag,t===13){if(t=va(i),t!==null){e.blockedOn=t,fd(e.priority,function(){dd(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ta(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=yl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var a=new i.constructor(i.type,i);ei=a,i.target.dispatchEvent(a),ei=null}else return t=yo(i),t!==null&&gl(t),e.blockedOn=i,!1;t.shift()}return!0}function gd(e,t,i){Ta(e)&&i.delete(t)}function gg(){vl=!1,or!==null&&Ta(or)&&(or=null),ar!==null&&Ta(ar)&&(ar=null),sr!==null&&Ta(sr)&&(sr=null),no.forEach(gd),ro.forEach(gd)}function oo(e,t){e.blockedOn===t&&(e.blockedOn=null,vl||(vl=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,gg)))}function ao(e){function t(c){return oo(c,e)}if(0<Ea.length){oo(Ea[0],e);for(var i=1;i<Ea.length;i++){var a=Ea[i];a.blockedOn===e&&(a.blockedOn=null)}}for(or!==null&&oo(or,e),ar!==null&&oo(ar,e),sr!==null&&oo(sr,e),no.forEach(t),ro.forEach(t),i=0;i<lr.length;i++)a=lr[i],a.blockedOn===e&&(a.blockedOn=null);for(;0<lr.length&&(i=lr[0],i.blockedOn===null);)hd(i),i.blockedOn===null&&lr.shift()}var ri=$.ReactCurrentBatchConfig,Pa=!0;function vg(e,t,i,a){var c=Ae,d=ri.transition;ri.transition=null;try{Ae=1,xl(e,t,i,a)}finally{Ae=c,ri.transition=d}}function xg(e,t,i,a){var c=Ae,d=ri.transition;ri.transition=null;try{Ae=4,xl(e,t,i,a)}finally{Ae=c,ri.transition=d}}function xl(e,t,i,a){if(Pa){var c=yl(e,t,i,a);if(c===null)Nl(e,t,a,Ra,i),md(e,a);else if(hg(c,e,t,i,a))a.stopPropagation();else if(md(e,a),t&4&&-1<mg.indexOf(e)){for(;c!==null;){var d=yo(c);if(d!==null&&ud(d),d=yl(e,t,i,a),d===null&&Nl(e,t,a,Ra,i),d===c)break;c=d}c!==null&&a.stopPropagation()}else Nl(e,t,a,null,i)}}var Ra=null;function yl(e,t,i,a){if(Ra=null,e=Ki(a),e=_r(e),e!==null)if(t=In(e),t===null)e=null;else if(i=t.tag,i===13){if(e=va(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ra=e,null}function vd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(og()){case pl:return 1;case ad:return 4;case wa:case ag:return 16;case sd:return 536870912;default:return 16}default:return 16}}var cr=null,wl=null,Ma=null;function xd(){if(Ma)return Ma;var e,t=wl,i=t.length,a,c="value"in cr?cr.value:cr.textContent,d=c.length;for(e=0;e<i&&t[e]===c[e];e++);var h=i-e;for(a=1;a<=h&&t[i-a]===c[d-a];a++);return Ma=c.slice(e,1<a?1-a:void 0)}function Ia(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function za(){return!0}function yd(){return!1}function Ft(e){function t(i,a,c,d,h){this._reactName=i,this._targetInst=c,this.type=a,this.nativeEvent=d,this.target=h,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(i=e[b],this[b]=i?i(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?za:yd,this.isPropagationStopped=yd,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),t}var ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=Ft(ii),so=ee({},ii,{view:0,detail:0}),yg=Ft(so),kl,Cl,lo,_a=ee({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:El,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lo&&(lo&&e.type==="mousemove"?(kl=e.screenX-lo.screenX,Cl=e.screenY-lo.screenY):Cl=kl=0,lo=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:Cl}}),wd=Ft(_a),wg=ee({},_a,{dataTransfer:0}),bg=Ft(wg),kg=ee({},so,{relatedTarget:0}),Sl=Ft(kg),Cg=ee({},ii,{animationName:0,elapsedTime:0,pseudoElement:0}),Sg=Ft(Cg),Eg=ee({},ii,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tg=Ft(Eg),Pg=ee({},ii,{data:0}),bd=Ft(Pg),Rg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ig={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ig[e])?!!t[e]:!1}function El(){return zg}var _g=ee({},so,{key:function(e){if(e.key){var t=Rg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ia(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:El,charCode:function(e){return e.type==="keypress"?Ia(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ia(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Og=Ft(_g),Ag=ee({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kd=Ft(Ag),$g=ee({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:El}),Ng=Ft($g),Dg=ee({},ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lg=Ft(Dg),jg=ee({},_a,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bg=Ft(jg),Fg=[9,13,27,32],Tl=f&&"CompositionEvent"in window,co=null;f&&"documentMode"in document&&(co=document.documentMode);var Wg=f&&"TextEvent"in window&&!co,Cd=f&&(!Tl||co&&8<co&&11>=co),Sd=" ",Ed=!1;function Td(e,t){switch(e){case"keyup":return Fg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var oi=!1;function Ug(e,t){switch(e){case"compositionend":return Pd(t);case"keypress":return t.which!==32?null:(Ed=!0,Sd);case"textInput":return e=t.data,e===Sd&&Ed?null:e;default:return null}}function Hg(e,t){if(oi)return e==="compositionend"||!Tl&&Td(e,t)?(e=xd(),Ma=wl=cr=null,oi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cd&&t.locale!=="ko"?null:t.data;default:return null}}var Vg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vg[e.type]:t==="textarea"}function Md(e,t,i,a){Qi(a),t=Da(t,"onChange"),0<t.length&&(i=new bl("onChange","change",null,i,a),e.push({event:i,listeners:t}))}var uo=null,po=null;function qg(e){Gd(e,0)}function Oa(e){var t=ui(e);if(rt(t))return e}function Gg(e,t){if(e==="change")return t}var Id=!1;if(f){var Pl;if(f){var Rl="oninput"in document;if(!Rl){var zd=document.createElement("div");zd.setAttribute("oninput","return;"),Rl=typeof zd.oninput=="function"}Pl=Rl}else Pl=!1;Id=Pl&&(!document.documentMode||9<document.documentMode)}function _d(){uo&&(uo.detachEvent("onpropertychange",Od),po=uo=null)}function Od(e){if(e.propertyName==="value"&&Oa(po)){var t=[];Md(t,po,e,Ki(e)),ti(qg,t)}}function Kg(e,t,i){e==="focusin"?(_d(),uo=t,po=i,uo.attachEvent("onpropertychange",Od)):e==="focusout"&&_d()}function Yg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oa(po)}function Xg(e,t){if(e==="click")return Oa(t)}function Qg(e,t){if(e==="input"||e==="change")return Oa(t)}function Zg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yn=typeof Object.is=="function"?Object.is:Zg;function fo(e,t){if(yn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var c=i[a];if(!m.call(t,c)||!yn(e[c],t[c]))return!1}return!0}function Ad(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $d(e,t){var i=Ad(e);e=0;for(var a;i;){if(i.nodeType===3){if(a=e+i.textContent.length,e<=t&&a>=t)return{node:i,offset:t-e};e=a}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Ad(i)}}function Nd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dd(){for(var e=window,t=Oe();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Oe(e.document)}return t}function Ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Jg(e){var t=Dd(),i=e.focusedElem,a=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Nd(i.ownerDocument.documentElement,i)){if(a!==null&&Ml(i)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=i.textContent.length,d=Math.min(a.start,c);a=a.end===void 0?d:Math.min(a.end,c),!e.extend&&d>a&&(c=a,a=d,d=c),c=$d(i,d);var h=$d(i,a);c&&h&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),d>a?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var e0=f&&"documentMode"in document&&11>=document.documentMode,ai=null,Il=null,mo=null,zl=!1;function Ld(e,t,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;zl||ai==null||ai!==Oe(a)||(a=ai,"selectionStart"in a&&Ml(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),mo&&fo(mo,a)||(mo=a,a=Da(Il,"onSelect"),0<a.length&&(t=new bl("onSelect","select",null,t,i),e.push({event:t,listeners:a}),t.target=ai)))}function Aa(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var si={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionend:Aa("Transition","TransitionEnd")},_l={},jd={};f&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),"TransitionEvent"in window||delete si.transitionend.transition);function $a(e){if(_l[e])return _l[e];if(!si[e])return e;var t=si[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in jd)return _l[e]=t[i];return e}var Bd=$a("animationend"),Fd=$a("animationiteration"),Wd=$a("animationstart"),Ud=$a("transitionend"),Hd=new Map,Vd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(e,t){Hd.set(e,t),u(t,[e])}for(var Ol=0;Ol<Vd.length;Ol++){var Al=Vd[Ol],t0=Al.toLowerCase(),n0=Al[0].toUpperCase()+Al.slice(1);ur(t0,"on"+n0)}ur(Bd,"onAnimationEnd"),ur(Fd,"onAnimationIteration"),ur(Wd,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(Ud,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function qd(e,t,i){var a=e.type||"unknown-event";e.currentTarget=i,ga(a,t,void 0,e),e.currentTarget=null}function Gd(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var a=e[i],c=a.event;a=a.listeners;e:{var d=void 0;if(t)for(var h=a.length-1;0<=h;h--){var b=a[h],T=b.instance,B=b.currentTarget;if(b=b.listener,T!==d&&c.isPropagationStopped())break e;qd(c,b,B),d=T}else for(h=0;h<a.length;h++){if(b=a[h],T=b.instance,B=b.currentTarget,b=b.listener,T!==d&&c.isPropagationStopped())break e;qd(c,b,B),d=T}}}if(Mn)throw e=zr,Mn=!1,zr=null,e}function Le(e,t){var i=t[Wl];i===void 0&&(i=t[Wl]=new Set);var a=e+"__bubble";i.has(a)||(Kd(t,e,2,!1),i.add(a))}function $l(e,t,i){var a=0;t&&(a|=4),Kd(i,e,a,t)}var Na="_reactListening"+Math.random().toString(36).slice(2);function go(e){if(!e[Na]){e[Na]=!0,s.forEach(function(i){i!=="selectionchange"&&(r0.has(i)||$l(i,!1,e),$l(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Na]||(t[Na]=!0,$l("selectionchange",!1,t))}}function Kd(e,t,i,a){switch(vd(t)){case 1:var c=vg;break;case 4:c=xg;break;default:c=xl}i=c.bind(null,t,i,e),c=void 0,!Un||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),a?c!==void 0?e.addEventListener(t,i,{capture:!0,passive:c}):e.addEventListener(t,i,!0):c!==void 0?e.addEventListener(t,i,{passive:c}):e.addEventListener(t,i,!1)}function Nl(e,t,i,a,c){var d=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var h=a.tag;if(h===3||h===4){var b=a.stateNode.containerInfo;if(b===c||b.nodeType===8&&b.parentNode===c)break;if(h===4)for(h=a.return;h!==null;){var T=h.tag;if((T===3||T===4)&&(T=h.stateNode.containerInfo,T===c||T.nodeType===8&&T.parentNode===c))return;h=h.return}for(;b!==null;){if(h=_r(b),h===null)return;if(T=h.tag,T===5||T===6){a=d=h;continue e}b=b.parentNode}}a=a.return}ti(function(){var B=d,K=Ki(i),X=[];e:{var G=Hd.get(e);if(G!==void 0){var oe=bl,ce=e;switch(e){case"keypress":if(Ia(i)===0)break e;case"keydown":case"keyup":oe=Og;break;case"focusin":ce="focus",oe=Sl;break;case"focusout":ce="blur",oe=Sl;break;case"beforeblur":case"afterblur":oe=Sl;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=bg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=Ng;break;case Bd:case Fd:case Wd:oe=Sg;break;case Ud:oe=Lg;break;case"scroll":oe=yg;break;case"wheel":oe=Bg;break;case"copy":case"cut":case"paste":oe=Tg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=kd}var ue=(t&4)!==0,tt=!ue&&e==="scroll",A=ue?G!==null?G+"Capture":null:G;ue=[];for(var P=B,D;P!==null;){D=P;var te=D.stateNode;if(D.tag===5&&te!==null&&(D=te,A!==null&&(te=Ir(P,A),te!=null&&ue.push(vo(P,te,D)))),tt)break;P=P.return}0<ue.length&&(G=new oe(G,ce,null,i,K),X.push({event:G,listeners:ue}))}}if((t&7)===0){e:{if(G=e==="mouseover"||e==="pointerover",oe=e==="mouseout"||e==="pointerout",G&&i!==ei&&(ce=i.relatedTarget||i.fromElement)&&(_r(ce)||ce[Vn]))break e;if((oe||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,oe?(ce=i.relatedTarget||i.toElement,oe=B,ce=ce?_r(ce):null,ce!==null&&(tt=In(ce),ce!==tt||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(oe=null,ce=B),oe!==ce)){if(ue=wd,te="onMouseLeave",A="onMouseEnter",P="mouse",(e==="pointerout"||e==="pointerover")&&(ue=kd,te="onPointerLeave",A="onPointerEnter",P="pointer"),tt=oe==null?G:ui(oe),D=ce==null?G:ui(ce),G=new ue(te,P+"leave",oe,i,K),G.target=tt,G.relatedTarget=D,te=null,_r(K)===B&&(ue=new ue(A,P+"enter",ce,i,K),ue.target=D,ue.relatedTarget=tt,te=ue),tt=te,oe&&ce)t:{for(ue=oe,A=ce,P=0,D=ue;D;D=li(D))P++;for(D=0,te=A;te;te=li(te))D++;for(;0<P-D;)ue=li(ue),P--;for(;0<D-P;)A=li(A),D--;for(;P--;){if(ue===A||A!==null&&ue===A.alternate)break t;ue=li(ue),A=li(A)}ue=null}else ue=null;oe!==null&&Yd(X,G,oe,ue,!1),ce!==null&&tt!==null&&Yd(X,tt,ce,ue,!0)}}e:{if(G=B?ui(B):window,oe=G.nodeName&&G.nodeName.toLowerCase(),oe==="select"||oe==="input"&&G.type==="file")var de=Gg;else if(Rd(G))if(Id)de=Qg;else{de=Yg;var ge=Kg}else(oe=G.nodeName)&&oe.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(de=Xg);if(de&&(de=de(e,B))){Md(X,de,i,K);break e}ge&&ge(e,G,B),e==="focusout"&&(ge=G._wrapperState)&&ge.controlled&&G.type==="number"&&Pn(G,"number",G.value)}switch(ge=B?ui(B):window,e){case"focusin":(Rd(ge)||ge.contentEditable==="true")&&(ai=ge,Il=B,mo=null);break;case"focusout":mo=Il=ai=null;break;case"mousedown":zl=!0;break;case"contextmenu":case"mouseup":case"dragend":zl=!1,Ld(X,i,K);break;case"selectionchange":if(e0)break;case"keydown":case"keyup":Ld(X,i,K)}var ve;if(Tl)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else oi?Td(e,i)&&(ye="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(ye="onCompositionStart");ye&&(Cd&&i.locale!=="ko"&&(oi||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&oi&&(ve=xd()):(cr=K,wl="value"in cr?cr.value:cr.textContent,oi=!0)),ge=Da(B,ye),0<ge.length&&(ye=new bd(ye,e,null,i,K),X.push({event:ye,listeners:ge}),ve?ye.data=ve:(ve=Pd(i),ve!==null&&(ye.data=ve)))),(ve=Wg?Ug(e,i):Hg(e,i))&&(B=Da(B,"onBeforeInput"),0<B.length&&(K=new bd("onBeforeInput","beforeinput",null,i,K),X.push({event:K,listeners:B}),K.data=ve))}Gd(X,t)})}function vo(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Da(e,t){for(var i=t+"Capture",a=[];e!==null;){var c=e,d=c.stateNode;c.tag===5&&d!==null&&(c=d,d=Ir(e,i),d!=null&&a.unshift(vo(e,d,c)),d=Ir(e,t),d!=null&&a.push(vo(e,d,c))),e=e.return}return a}function li(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yd(e,t,i,a,c){for(var d=t._reactName,h=[];i!==null&&i!==a;){var b=i,T=b.alternate,B=b.stateNode;if(T!==null&&T===a)break;b.tag===5&&B!==null&&(b=B,c?(T=Ir(i,d),T!=null&&h.unshift(vo(i,T,b))):c||(T=Ir(i,d),T!=null&&h.push(vo(i,T,b)))),i=i.return}h.length!==0&&e.push({event:t,listeners:h})}var i0=/\r\n?/g,o0=/\u0000|\uFFFD/g;function Xd(e){return(typeof e=="string"?e:""+e).replace(i0,`
`).replace(o0,"")}function La(e,t,i){if(t=Xd(t),Xd(e)!==t&&i)throw Error(o(425))}function ja(){}var Dl=null,Ll=null;function jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bl=typeof setTimeout=="function"?setTimeout:void 0,a0=typeof clearTimeout=="function"?clearTimeout:void 0,Qd=typeof Promise=="function"?Promise:void 0,s0=typeof queueMicrotask=="function"?queueMicrotask:typeof Qd<"u"?function(e){return Qd.resolve(null).then(e).catch(l0)}:Bl;function l0(e){setTimeout(function(){throw e})}function Fl(e,t){var i=t,a=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(a===0){e.removeChild(c),ao(t);return}a--}else i!=="$"&&i!=="$?"&&i!=="$!"||a++;i=c}while(i);ao(t)}function dr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var ci=Math.random().toString(36).slice(2),_n="__reactFiber$"+ci,xo="__reactProps$"+ci,Vn="__reactContainer$"+ci,Wl="__reactEvents$"+ci,c0="__reactListeners$"+ci,u0="__reactHandles$"+ci;function _r(e){var t=e[_n];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Vn]||i[_n]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Zd(e);e!==null;){if(i=e[_n])return i;e=Zd(e)}return t}e=i,i=e.parentNode}return null}function yo(e){return e=e[_n]||e[Vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ui(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Ba(e){return e[xo]||null}var Ul=[],di=-1;function pr(e){return{current:e}}function je(e){0>di||(e.current=Ul[di],Ul[di]=null,di--)}function Ne(e,t){di++,Ul[di]=e.current,e.current=t}var fr={},xt=pr(fr),Rt=pr(!1),Or=fr;function pi(e,t){var i=e.type.contextTypes;if(!i)return fr;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var c={},d;for(d in i)c[d]=t[d];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function Mt(e){return e=e.childContextTypes,e!=null}function Fa(){je(Rt),je(xt)}function Jd(e,t,i){if(xt.current!==fr)throw Error(o(168));Ne(xt,t),Ne(Rt,i)}function ep(e,t,i){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return i;a=a.getChildContext();for(var c in a)if(!(c in t))throw Error(o(108,xe(e)||"Unknown",c));return ee({},i,a)}function Wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fr,Or=xt.current,Ne(xt,e),Ne(Rt,Rt.current),!0}function tp(e,t,i){var a=e.stateNode;if(!a)throw Error(o(169));i?(e=ep(e,t,Or),a.__reactInternalMemoizedMergedChildContext=e,je(Rt),je(xt),Ne(xt,e)):je(Rt),Ne(Rt,i)}var qn=null,Ua=!1,Hl=!1;function np(e){qn===null?qn=[e]:qn.push(e)}function d0(e){Ua=!0,np(e)}function mr(){if(!Hl&&qn!==null){Hl=!0;var e=0,t=Ae;try{var i=qn;for(Ae=1;e<i.length;e++){var a=i[e];do a=a(!0);while(a!==null)}qn=null,Ua=!1}catch(c){throw qn!==null&&(qn=qn.slice(e+1)),vt(pl,mr),c}finally{Ae=t,Hl=!1}}return null}var fi=[],mi=0,Ha=null,Va=0,Jt=[],en=0,Ar=null,Gn=1,Kn="";function $r(e,t){fi[mi++]=Va,fi[mi++]=Ha,Ha=e,Va=t}function rp(e,t,i){Jt[en++]=Gn,Jt[en++]=Kn,Jt[en++]=Ar,Ar=e;var a=Gn;e=Kn;var c=32-xn(a)-1;a&=~(1<<c),i+=1;var d=32-xn(t)+c;if(30<d){var h=c-c%5;d=(a&(1<<h)-1).toString(32),a>>=h,c-=h,Gn=1<<32-xn(t)+c|i<<c|a,Kn=d+e}else Gn=1<<d|i<<c|a,Kn=e}function Vl(e){e.return!==null&&($r(e,1),rp(e,1,0))}function ql(e){for(;e===Ha;)Ha=fi[--mi],fi[mi]=null,Va=fi[--mi],fi[mi]=null;for(;e===Ar;)Ar=Jt[--en],Jt[en]=null,Kn=Jt[--en],Jt[en]=null,Gn=Jt[--en],Jt[en]=null}var Wt=null,Ut=null,Fe=!1,wn=null;function ip(e,t){var i=on(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function op(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Wt=e,Ut=dr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Wt=e,Ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Ar!==null?{id:Gn,overflow:Kn}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=on(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,Wt=e,Ut=null,!0):!1;default:return!1}}function Gl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kl(e){if(Fe){var t=Ut;if(t){var i=t;if(!op(e,t)){if(Gl(e))throw Error(o(418));t=dr(i.nextSibling);var a=Wt;t&&op(e,t)?ip(a,i):(e.flags=e.flags&-4097|2,Fe=!1,Wt=e)}}else{if(Gl(e))throw Error(o(418));e.flags=e.flags&-4097|2,Fe=!1,Wt=e}}}function ap(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Wt=e}function qa(e){if(e!==Wt)return!1;if(!Fe)return ap(e),Fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jl(e.type,e.memoizedProps)),t&&(t=Ut)){if(Gl(e))throw sp(),Error(o(418));for(;t;)ip(e,t),t=dr(t.nextSibling)}if(ap(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Ut=dr(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Ut=null}}else Ut=Wt?dr(e.stateNode.nextSibling):null;return!0}function sp(){for(var e=Ut;e;)e=dr(e.nextSibling)}function hi(){Ut=Wt=null,Fe=!1}function Yl(e){wn===null?wn=[e]:wn.push(e)}var p0=$.ReactCurrentBatchConfig;function wo(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var a=i.stateNode}if(!a)throw Error(o(147,e));var c=a,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(h){var b=c.refs;h===null?delete b[d]:b[d]=h},t._stringRef=d,t)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function Ga(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function lp(e){var t=e._init;return t(e._payload)}function cp(e){function t(A,P){if(e){var D=A.deletions;D===null?(A.deletions=[P],A.flags|=16):D.push(P)}}function i(A,P){if(!e)return null;for(;P!==null;)t(A,P),P=P.sibling;return null}function a(A,P){for(A=new Map;P!==null;)P.key!==null?A.set(P.key,P):A.set(P.index,P),P=P.sibling;return A}function c(A,P){return A=kr(A,P),A.index=0,A.sibling=null,A}function d(A,P,D){return A.index=D,e?(D=A.alternate,D!==null?(D=D.index,D<P?(A.flags|=2,P):D):(A.flags|=2,P)):(A.flags|=1048576,P)}function h(A){return e&&A.alternate===null&&(A.flags|=2),A}function b(A,P,D,te){return P===null||P.tag!==6?(P=Bc(D,A.mode,te),P.return=A,P):(P=c(P,D),P.return=A,P)}function T(A,P,D,te){var de=D.type;return de===w?K(A,P,D.props.children,te,D.key):P!==null&&(P.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Y&&lp(de)===P.type)?(te=c(P,D.props),te.ref=wo(A,P,D),te.return=A,te):(te=vs(D.type,D.key,D.props,null,A.mode,te),te.ref=wo(A,P,D),te.return=A,te)}function B(A,P,D,te){return P===null||P.tag!==4||P.stateNode.containerInfo!==D.containerInfo||P.stateNode.implementation!==D.implementation?(P=Fc(D,A.mode,te),P.return=A,P):(P=c(P,D.children||[]),P.return=A,P)}function K(A,P,D,te,de){return P===null||P.tag!==7?(P=Ur(D,A.mode,te,de),P.return=A,P):(P=c(P,D),P.return=A,P)}function X(A,P,D){if(typeof P=="string"&&P!==""||typeof P=="number")return P=Bc(""+P,A.mode,D),P.return=A,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case S:return D=vs(P.type,P.key,P.props,null,A.mode,D),D.ref=wo(A,null,P),D.return=A,D;case F:return P=Fc(P,A.mode,D),P.return=A,P;case Y:var te=P._init;return X(A,te(P._payload),D)}if(Je(P)||Z(P))return P=Ur(P,A.mode,D,null),P.return=A,P;Ga(A,P)}return null}function G(A,P,D,te){var de=P!==null?P.key:null;if(typeof D=="string"&&D!==""||typeof D=="number")return de!==null?null:b(A,P,""+D,te);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case S:return D.key===de?T(A,P,D,te):null;case F:return D.key===de?B(A,P,D,te):null;case Y:return de=D._init,G(A,P,de(D._payload),te)}if(Je(D)||Z(D))return de!==null?null:K(A,P,D,te,null);Ga(A,D)}return null}function oe(A,P,D,te,de){if(typeof te=="string"&&te!==""||typeof te=="number")return A=A.get(D)||null,b(P,A,""+te,de);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case S:return A=A.get(te.key===null?D:te.key)||null,T(P,A,te,de);case F:return A=A.get(te.key===null?D:te.key)||null,B(P,A,te,de);case Y:var ge=te._init;return oe(A,P,D,ge(te._payload),de)}if(Je(te)||Z(te))return A=A.get(D)||null,K(P,A,te,de,null);Ga(P,te)}return null}function ce(A,P,D,te){for(var de=null,ge=null,ve=P,ye=P=0,pt=null;ve!==null&&ye<D.length;ye++){ve.index>ye?(pt=ve,ve=null):pt=ve.sibling;var Re=G(A,ve,D[ye],te);if(Re===null){ve===null&&(ve=pt);break}e&&ve&&Re.alternate===null&&t(A,ve),P=d(Re,P,ye),ge===null?de=Re:ge.sibling=Re,ge=Re,ve=pt}if(ye===D.length)return i(A,ve),Fe&&$r(A,ye),de;if(ve===null){for(;ye<D.length;ye++)ve=X(A,D[ye],te),ve!==null&&(P=d(ve,P,ye),ge===null?de=ve:ge.sibling=ve,ge=ve);return Fe&&$r(A,ye),de}for(ve=a(A,ve);ye<D.length;ye++)pt=oe(ve,A,ye,D[ye],te),pt!==null&&(e&&pt.alternate!==null&&ve.delete(pt.key===null?ye:pt.key),P=d(pt,P,ye),ge===null?de=pt:ge.sibling=pt,ge=pt);return e&&ve.forEach(function(Cr){return t(A,Cr)}),Fe&&$r(A,ye),de}function ue(A,P,D,te){var de=Z(D);if(typeof de!="function")throw Error(o(150));if(D=de.call(D),D==null)throw Error(o(151));for(var ge=de=null,ve=P,ye=P=0,pt=null,Re=D.next();ve!==null&&!Re.done;ye++,Re=D.next()){ve.index>ye?(pt=ve,ve=null):pt=ve.sibling;var Cr=G(A,ve,Re.value,te);if(Cr===null){ve===null&&(ve=pt);break}e&&ve&&Cr.alternate===null&&t(A,ve),P=d(Cr,P,ye),ge===null?de=Cr:ge.sibling=Cr,ge=Cr,ve=pt}if(Re.done)return i(A,ve),Fe&&$r(A,ye),de;if(ve===null){for(;!Re.done;ye++,Re=D.next())Re=X(A,Re.value,te),Re!==null&&(P=d(Re,P,ye),ge===null?de=Re:ge.sibling=Re,ge=Re);return Fe&&$r(A,ye),de}for(ve=a(A,ve);!Re.done;ye++,Re=D.next())Re=oe(ve,A,ye,Re.value,te),Re!==null&&(e&&Re.alternate!==null&&ve.delete(Re.key===null?ye:Re.key),P=d(Re,P,ye),ge===null?de=Re:ge.sibling=Re,ge=Re);return e&&ve.forEach(function(V0){return t(A,V0)}),Fe&&$r(A,ye),de}function tt(A,P,D,te){if(typeof D=="object"&&D!==null&&D.type===w&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case S:e:{for(var de=D.key,ge=P;ge!==null;){if(ge.key===de){if(de=D.type,de===w){if(ge.tag===7){i(A,ge.sibling),P=c(ge,D.props.children),P.return=A,A=P;break e}}else if(ge.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Y&&lp(de)===ge.type){i(A,ge.sibling),P=c(ge,D.props),P.ref=wo(A,ge,D),P.return=A,A=P;break e}i(A,ge);break}else t(A,ge);ge=ge.sibling}D.type===w?(P=Ur(D.props.children,A.mode,te,D.key),P.return=A,A=P):(te=vs(D.type,D.key,D.props,null,A.mode,te),te.ref=wo(A,P,D),te.return=A,A=te)}return h(A);case F:e:{for(ge=D.key;P!==null;){if(P.key===ge)if(P.tag===4&&P.stateNode.containerInfo===D.containerInfo&&P.stateNode.implementation===D.implementation){i(A,P.sibling),P=c(P,D.children||[]),P.return=A,A=P;break e}else{i(A,P);break}else t(A,P);P=P.sibling}P=Fc(D,A.mode,te),P.return=A,A=P}return h(A);case Y:return ge=D._init,tt(A,P,ge(D._payload),te)}if(Je(D))return ce(A,P,D,te);if(Z(D))return ue(A,P,D,te);Ga(A,D)}return typeof D=="string"&&D!==""||typeof D=="number"?(D=""+D,P!==null&&P.tag===6?(i(A,P.sibling),P=c(P,D),P.return=A,A=P):(i(A,P),P=Bc(D,A.mode,te),P.return=A,A=P),h(A)):i(A,P)}return tt}var gi=cp(!0),up=cp(!1),Ka=pr(null),Ya=null,vi=null,Xl=null;function Ql(){Xl=vi=Ya=null}function Zl(e){var t=Ka.current;je(Ka),e._currentValue=t}function Jl(e,t,i){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===i)break;e=e.return}}function xi(e,t){Ya=e,Xl=vi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(It=!0),e.firstContext=null)}function tn(e){var t=e._currentValue;if(Xl!==e)if(e={context:e,memoizedValue:t,next:null},vi===null){if(Ya===null)throw Error(o(308));vi=e,Ya.dependencies={lanes:0,firstContext:e}}else vi=vi.next=e;return t}var Nr=null;function ec(e){Nr===null?Nr=[e]:Nr.push(e)}function dp(e,t,i,a){var c=t.interleaved;return c===null?(i.next=i,ec(t)):(i.next=c.next,c.next=i),t.interleaved=i,Yn(e,a)}function Yn(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var hr=!1;function tc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gr(e,t,i){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Pe&2)!==0){var c=a.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),a.pending=t,Yn(e,i)}return c=a.interleaved,c===null?(t.next=t,ec(a)):(t.next=c.next,c.next=t),a.interleaved=t,Yn(e,i)}function Xa(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,i|=a,t.lanes=i,hl(e,i)}}function fp(e,t){var i=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var c=null,d=null;if(i=i.firstBaseUpdate,i!==null){do{var h={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};d===null?c=d=h:d=d.next=h,i=i.next}while(i!==null);d===null?c=d=t:d=d.next=t}else c=d=t;i={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:a.shared,effects:a.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function Qa(e,t,i,a){var c=e.updateQueue;hr=!1;var d=c.firstBaseUpdate,h=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var T=b,B=T.next;T.next=null,h===null?d=B:h.next=B,h=T;var K=e.alternate;K!==null&&(K=K.updateQueue,b=K.lastBaseUpdate,b!==h&&(b===null?K.firstBaseUpdate=B:b.next=B,K.lastBaseUpdate=T))}if(d!==null){var X=c.baseState;h=0,K=B=T=null,b=d;do{var G=b.lane,oe=b.eventTime;if((a&G)===G){K!==null&&(K=K.next={eventTime:oe,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var ce=e,ue=b;switch(G=t,oe=i,ue.tag){case 1:if(ce=ue.payload,typeof ce=="function"){X=ce.call(oe,X,G);break e}X=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=ue.payload,G=typeof ce=="function"?ce.call(oe,X,G):ce,G==null)break e;X=ee({},X,G);break e;case 2:hr=!0}}b.callback!==null&&b.lane!==0&&(e.flags|=64,G=c.effects,G===null?c.effects=[b]:G.push(b))}else oe={eventTime:oe,lane:G,tag:b.tag,payload:b.payload,callback:b.callback,next:null},K===null?(B=K=oe,T=X):K=K.next=oe,h|=G;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;G=b,b=G.next,G.next=null,c.lastBaseUpdate=G,c.shared.pending=null}}while(!0);if(K===null&&(T=X),c.baseState=T,c.firstBaseUpdate=B,c.lastBaseUpdate=K,t=c.shared.interleaved,t!==null){c=t;do h|=c.lane,c=c.next;while(c!==t)}else d===null&&(c.shared.lanes=0);jr|=h,e.lanes=h,e.memoizedState=X}}function mp(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],c=a.callback;if(c!==null){if(a.callback=null,a=i,typeof c!="function")throw Error(o(191,c));c.call(a)}}}var bo={},On=pr(bo),ko=pr(bo),Co=pr(bo);function Dr(e){if(e===bo)throw Error(o(174));return e}function nc(e,t){switch(Ne(Co,t),Ne(ko,e),Ne(On,bo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zt(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zt(t,e)}je(On),Ne(On,t)}function yi(){je(On),je(ko),je(Co)}function hp(e){Dr(Co.current);var t=Dr(On.current),i=Zt(t,e.type);t!==i&&(Ne(ko,e),Ne(On,i))}function rc(e){ko.current===e&&(je(On),je(ko))}var He=pr(0);function Za(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ic=[];function oc(){for(var e=0;e<ic.length;e++)ic[e]._workInProgressVersionPrimary=null;ic.length=0}var Ja=$.ReactCurrentDispatcher,ac=$.ReactCurrentBatchConfig,Lr=0,Ve=null,st=null,ut=null,es=!1,So=!1,Eo=0,f0=0;function yt(){throw Error(o(321))}function sc(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!yn(e[i],t[i]))return!1;return!0}function lc(e,t,i,a,c,d){if(Lr=d,Ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ja.current=e===null||e.memoizedState===null?v0:x0,e=i(a,c),So){d=0;do{if(So=!1,Eo=0,25<=d)throw Error(o(301));d+=1,ut=st=null,t.updateQueue=null,Ja.current=y0,e=i(a,c)}while(So)}if(Ja.current=rs,t=st!==null&&st.next!==null,Lr=0,ut=st=Ve=null,es=!1,t)throw Error(o(300));return e}function cc(){var e=Eo!==0;return Eo=0,e}function An(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Ve.memoizedState=ut=e:ut=ut.next=e,ut}function nn(){if(st===null){var e=Ve.alternate;e=e!==null?e.memoizedState:null}else e=st.next;var t=ut===null?Ve.memoizedState:ut.next;if(t!==null)ut=t,st=e;else{if(e===null)throw Error(o(310));st=e,e={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},ut===null?Ve.memoizedState=ut=e:ut=ut.next=e}return ut}function To(e,t){return typeof t=="function"?t(e):t}function uc(e){var t=nn(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var a=st,c=a.baseQueue,d=i.pending;if(d!==null){if(c!==null){var h=c.next;c.next=d.next,d.next=h}a.baseQueue=c=d,i.pending=null}if(c!==null){d=c.next,a=a.baseState;var b=h=null,T=null,B=d;do{var K=B.lane;if((Lr&K)===K)T!==null&&(T=T.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),a=B.hasEagerState?B.eagerState:e(a,B.action);else{var X={lane:K,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};T===null?(b=T=X,h=a):T=T.next=X,Ve.lanes|=K,jr|=K}B=B.next}while(B!==null&&B!==d);T===null?h=a:T.next=b,yn(a,t.memoizedState)||(It=!0),t.memoizedState=a,t.baseState=h,t.baseQueue=T,i.lastRenderedState=a}if(e=i.interleaved,e!==null){c=e;do d=c.lane,Ve.lanes|=d,jr|=d,c=c.next;while(c!==e)}else c===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function dc(e){var t=nn(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var a=i.dispatch,c=i.pending,d=t.memoizedState;if(c!==null){i.pending=null;var h=c=c.next;do d=e(d,h.action),h=h.next;while(h!==c);yn(d,t.memoizedState)||(It=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),i.lastRenderedState=d}return[d,a]}function gp(){}function vp(e,t){var i=Ve,a=nn(),c=t(),d=!yn(a.memoizedState,c);if(d&&(a.memoizedState=c,It=!0),a=a.queue,pc(wp.bind(null,i,a,e),[e]),a.getSnapshot!==t||d||ut!==null&&ut.memoizedState.tag&1){if(i.flags|=2048,Po(9,yp.bind(null,i,a,c,t),void 0,null),dt===null)throw Error(o(349));(Lr&30)!==0||xp(i,t,c)}return c}function xp(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=Ve.updateQueue,t===null?(t={lastEffect:null,stores:null},Ve.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function yp(e,t,i,a){t.value=i,t.getSnapshot=a,bp(t)&&kp(e)}function wp(e,t,i){return i(function(){bp(t)&&kp(e)})}function bp(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!yn(e,i)}catch{return!0}}function kp(e){var t=Yn(e,1);t!==null&&Sn(t,e,1,-1)}function Cp(e){var t=An();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:e},t.queue=e,e=e.dispatch=g0.bind(null,Ve,e),[t.memoizedState,e]}function Po(e,t,i,a){return e={tag:e,create:t,destroy:i,deps:a,next:null},t=Ve.updateQueue,t===null?(t={lastEffect:null,stores:null},Ve.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(a=i.next,i.next=e,e.next=a,t.lastEffect=e)),e}function Sp(){return nn().memoizedState}function ts(e,t,i,a){var c=An();Ve.flags|=e,c.memoizedState=Po(1|t,i,void 0,a===void 0?null:a)}function ns(e,t,i,a){var c=nn();a=a===void 0?null:a;var d=void 0;if(st!==null){var h=st.memoizedState;if(d=h.destroy,a!==null&&sc(a,h.deps)){c.memoizedState=Po(t,i,d,a);return}}Ve.flags|=e,c.memoizedState=Po(1|t,i,d,a)}function Ep(e,t){return ts(8390656,8,e,t)}function pc(e,t){return ns(2048,8,e,t)}function Tp(e,t){return ns(4,2,e,t)}function Pp(e,t){return ns(4,4,e,t)}function Rp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mp(e,t,i){return i=i!=null?i.concat([e]):null,ns(4,4,Rp.bind(null,t,e),i)}function fc(){}function Ip(e,t){var i=nn();t=t===void 0?null:t;var a=i.memoizedState;return a!==null&&t!==null&&sc(t,a[1])?a[0]:(i.memoizedState=[e,t],e)}function zp(e,t){var i=nn();t=t===void 0?null:t;var a=i.memoizedState;return a!==null&&t!==null&&sc(t,a[1])?a[0]:(e=e(),i.memoizedState=[e,t],e)}function _p(e,t,i){return(Lr&21)===0?(e.baseState&&(e.baseState=!1,It=!0),e.memoizedState=i):(yn(i,t)||(i=ld(),Ve.lanes|=i,jr|=i,e.baseState=!0),t)}function m0(e,t){var i=Ae;Ae=i!==0&&4>i?i:4,e(!0);var a=ac.transition;ac.transition={};try{e(!1),t()}finally{Ae=i,ac.transition=a}}function Op(){return nn().memoizedState}function h0(e,t,i){var a=wr(e);if(i={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null},Ap(e))$p(t,i);else if(i=dp(e,t,i,a),i!==null){var c=Et();Sn(i,e,a,c),Np(i,t,a)}}function g0(e,t,i){var a=wr(e),c={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null};if(Ap(e))$p(t,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var h=t.lastRenderedState,b=d(h,i);if(c.hasEagerState=!0,c.eagerState=b,yn(b,h)){var T=t.interleaved;T===null?(c.next=c,ec(t)):(c.next=T.next,T.next=c),t.interleaved=c;return}}catch{}finally{}i=dp(e,t,c,a),i!==null&&(c=Et(),Sn(i,e,a,c),Np(i,t,a))}}function Ap(e){var t=e.alternate;return e===Ve||t!==null&&t===Ve}function $p(e,t){So=es=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Np(e,t,i){if((i&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,i|=a,t.lanes=i,hl(e,i)}}var rs={readContext:tn,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},v0={readContext:tn,useCallback:function(e,t){return An().memoizedState=[e,t===void 0?null:t],e},useContext:tn,useEffect:Ep,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,ts(4194308,4,Rp.bind(null,t,e),i)},useLayoutEffect:function(e,t){return ts(4194308,4,e,t)},useInsertionEffect:function(e,t){return ts(4,2,e,t)},useMemo:function(e,t){var i=An();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var a=An();return t=i!==void 0?i(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=h0.bind(null,Ve,e),[a.memoizedState,e]},useRef:function(e){var t=An();return e={current:e},t.memoizedState=e},useState:Cp,useDebugValue:fc,useDeferredValue:function(e){return An().memoizedState=e},useTransition:function(){var e=Cp(!1),t=e[0];return e=m0.bind(null,e[1]),An().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var a=Ve,c=An();if(Fe){if(i===void 0)throw Error(o(407));i=i()}else{if(i=t(),dt===null)throw Error(o(349));(Lr&30)!==0||xp(a,t,i)}c.memoizedState=i;var d={value:i,getSnapshot:t};return c.queue=d,Ep(wp.bind(null,a,d,e),[e]),a.flags|=2048,Po(9,yp.bind(null,a,d,i,t),void 0,null),i},useId:function(){var e=An(),t=dt.identifierPrefix;if(Fe){var i=Kn,a=Gn;i=(a&~(1<<32-xn(a)-1)).toString(32)+i,t=":"+t+"R"+i,i=Eo++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=f0++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},x0={readContext:tn,useCallback:Ip,useContext:tn,useEffect:pc,useImperativeHandle:Mp,useInsertionEffect:Tp,useLayoutEffect:Pp,useMemo:zp,useReducer:uc,useRef:Sp,useState:function(){return uc(To)},useDebugValue:fc,useDeferredValue:function(e){var t=nn();return _p(t,st.memoizedState,e)},useTransition:function(){var e=uc(To)[0],t=nn().memoizedState;return[e,t]},useMutableSource:gp,useSyncExternalStore:vp,useId:Op,unstable_isNewReconciler:!1},y0={readContext:tn,useCallback:Ip,useContext:tn,useEffect:pc,useImperativeHandle:Mp,useInsertionEffect:Tp,useLayoutEffect:Pp,useMemo:zp,useReducer:dc,useRef:Sp,useState:function(){return dc(To)},useDebugValue:fc,useDeferredValue:function(e){var t=nn();return st===null?t.memoizedState=e:_p(t,st.memoizedState,e)},useTransition:function(){var e=dc(To)[0],t=nn().memoizedState;return[e,t]},useMutableSource:gp,useSyncExternalStore:vp,useId:Op,unstable_isNewReconciler:!1};function bn(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function mc(e,t,i,a){t=e.memoizedState,i=i(a,t),i=i==null?t:ee({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var is={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var a=Et(),c=wr(e),d=Xn(a,c);d.payload=t,i!=null&&(d.callback=i),t=gr(e,d,c),t!==null&&(Sn(t,e,c,a),Xa(t,e,c))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var a=Et(),c=wr(e),d=Xn(a,c);d.tag=1,d.payload=t,i!=null&&(d.callback=i),t=gr(e,d,c),t!==null&&(Sn(t,e,c,a),Xa(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Et(),a=wr(e),c=Xn(i,a);c.tag=2,t!=null&&(c.callback=t),t=gr(e,c,a),t!==null&&(Sn(t,e,a,i),Xa(t,e,a))}};function Dp(e,t,i,a,c,d,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,d,h):t.prototype&&t.prototype.isPureReactComponent?!fo(i,a)||!fo(c,d):!0}function Lp(e,t,i){var a=!1,c=fr,d=t.contextType;return typeof d=="object"&&d!==null?d=tn(d):(c=Mt(t)?Or:xt.current,a=t.contextTypes,d=(a=a!=null)?pi(e,c):fr),t=new t(i,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=d),t}function jp(e,t,i,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,a),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function hc(e,t,i,a){var c=e.stateNode;c.props=i,c.state=e.memoizedState,c.refs={},tc(e);var d=t.contextType;typeof d=="object"&&d!==null?c.context=tn(d):(d=Mt(t)?Or:xt.current,c.context=pi(e,d)),c.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(mc(e,t,d,i),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&is.enqueueReplaceState(c,c.state,null),Qa(e,i,c,a),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function wi(e,t){try{var i="",a=t;do i+=pe(a),a=a.return;while(a);var c=i}catch(d){c=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:c,digest:null}}function gc(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function vc(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var w0=typeof WeakMap=="function"?WeakMap:Map;function Bp(e,t,i){i=Xn(-1,i),i.tag=3,i.payload={element:null};var a=t.value;return i.callback=function(){ds||(ds=!0,_c=a),vc(e,t)},i}function Fp(e,t,i){i=Xn(-1,i),i.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var c=t.value;i.payload=function(){return a(c)},i.callback=function(){vc(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(i.callback=function(){vc(e,t),typeof a!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),i}function Wp(e,t,i){var a=e.pingCache;if(a===null){a=e.pingCache=new w0;var c=new Set;a.set(t,c)}else c=a.get(t),c===void 0&&(c=new Set,a.set(t,c));c.has(i)||(c.add(i),e=A0.bind(null,e,t,i),t.then(e,e))}function Up(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hp(e,t,i,a,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=Xn(-1,1),t.tag=2,gr(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var b0=$.ReactCurrentOwner,It=!1;function St(e,t,i,a){t.child=e===null?up(t,null,i,a):gi(t,e.child,i,a)}function Vp(e,t,i,a,c){i=i.render;var d=t.ref;return xi(t,c),a=lc(e,t,i,a,d,c),i=cc(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Qn(e,t,c)):(Fe&&i&&Vl(t),t.flags|=1,St(e,t,a,c),t.child)}function qp(e,t,i,a,c){if(e===null){var d=i.type;return typeof d=="function"&&!jc(d)&&d.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=d,Gp(e,t,d,a,c)):(e=vs(i.type,null,a,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,(e.lanes&c)===0){var h=d.memoizedProps;if(i=i.compare,i=i!==null?i:fo,i(h,a)&&e.ref===t.ref)return Qn(e,t,c)}return t.flags|=1,e=kr(d,a),e.ref=t.ref,e.return=t,t.child=e}function Gp(e,t,i,a,c){if(e!==null){var d=e.memoizedProps;if(fo(d,a)&&e.ref===t.ref)if(It=!1,t.pendingProps=a=d,(e.lanes&c)!==0)(e.flags&131072)!==0&&(It=!0);else return t.lanes=e.lanes,Qn(e,t,c)}return xc(e,t,i,a,c)}function Kp(e,t,i){var a=t.pendingProps,c=a.children,d=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(ki,Ht),Ht|=i;else{if((i&1073741824)===0)return e=d!==null?d.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ne(ki,Ht),Ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=d!==null?d.baseLanes:i,Ne(ki,Ht),Ht|=a}else d!==null?(a=d.baseLanes|i,t.memoizedState=null):a=i,Ne(ki,Ht),Ht|=a;return St(e,t,c,i),t.child}function Yp(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function xc(e,t,i,a,c){var d=Mt(i)?Or:xt.current;return d=pi(t,d),xi(t,c),i=lc(e,t,i,a,d,c),a=cc(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Qn(e,t,c)):(Fe&&a&&Vl(t),t.flags|=1,St(e,t,i,c),t.child)}function Xp(e,t,i,a,c){if(Mt(i)){var d=!0;Wa(t)}else d=!1;if(xi(t,c),t.stateNode===null)as(e,t),Lp(t,i,a),hc(t,i,a,c),a=!0;else if(e===null){var h=t.stateNode,b=t.memoizedProps;h.props=b;var T=h.context,B=i.contextType;typeof B=="object"&&B!==null?B=tn(B):(B=Mt(i)?Or:xt.current,B=pi(t,B));var K=i.getDerivedStateFromProps,X=typeof K=="function"||typeof h.getSnapshotBeforeUpdate=="function";X||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b!==a||T!==B)&&jp(t,h,a,B),hr=!1;var G=t.memoizedState;h.state=G,Qa(t,a,h,c),T=t.memoizedState,b!==a||G!==T||Rt.current||hr?(typeof K=="function"&&(mc(t,i,K,a),T=t.memoizedState),(b=hr||Dp(t,i,b,a,G,T,B))?(X||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=T),h.props=a,h.state=T,h.context=B,a=b):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{h=t.stateNode,pp(e,t),b=t.memoizedProps,B=t.type===t.elementType?b:bn(t.type,b),h.props=B,X=t.pendingProps,G=h.context,T=i.contextType,typeof T=="object"&&T!==null?T=tn(T):(T=Mt(i)?Or:xt.current,T=pi(t,T));var oe=i.getDerivedStateFromProps;(K=typeof oe=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b!==X||G!==T)&&jp(t,h,a,T),hr=!1,G=t.memoizedState,h.state=G,Qa(t,a,h,c);var ce=t.memoizedState;b!==X||G!==ce||Rt.current||hr?(typeof oe=="function"&&(mc(t,i,oe,a),ce=t.memoizedState),(B=hr||Dp(t,i,B,a,G,ce,T)||!1)?(K||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(a,ce,T),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(a,ce,T)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||b===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ce),h.props=a,h.state=ce,h.context=T,a=B):(typeof h.componentDidUpdate!="function"||b===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),a=!1)}return yc(e,t,i,a,d,c)}function yc(e,t,i,a,c,d){Yp(e,t);var h=(t.flags&128)!==0;if(!a&&!h)return c&&tp(t,i,!1),Qn(e,t,d);a=t.stateNode,b0.current=t;var b=h&&typeof i.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&h?(t.child=gi(t,e.child,null,d),t.child=gi(t,null,b,d)):St(e,t,b,d),t.memoizedState=a.state,c&&tp(t,i,!0),t.child}function Qp(e){var t=e.stateNode;t.pendingContext?Jd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jd(e,t.context,!1),nc(e,t.containerInfo)}function Zp(e,t,i,a,c){return hi(),Yl(c),t.flags|=256,St(e,t,i,a),t.child}var wc={dehydrated:null,treeContext:null,retryLane:0};function bc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jp(e,t,i){var a=t.pendingProps,c=He.current,d=!1,h=(t.flags&128)!==0,b;if((b=h)||(b=e!==null&&e.memoizedState===null?!1:(c&2)!==0),b?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Ne(He,c&1),e===null)return Kl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(h=a.children,e=a.fallback,d?(a=t.mode,d=t.child,h={mode:"hidden",children:h},(a&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=h):d=xs(h,a,0,null),e=Ur(e,a,i,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=bc(i),t.memoizedState=wc,e):kc(t,h));if(c=e.memoizedState,c!==null&&(b=c.dehydrated,b!==null))return k0(e,t,h,a,b,c,i);if(d){d=a.fallback,h=t.mode,c=e.child,b=c.sibling;var T={mode:"hidden",children:a.children};return(h&1)===0&&t.child!==c?(a=t.child,a.childLanes=0,a.pendingProps=T,t.deletions=null):(a=kr(c,T),a.subtreeFlags=c.subtreeFlags&14680064),b!==null?d=kr(b,d):(d=Ur(d,h,i,null),d.flags|=2),d.return=t,a.return=t,a.sibling=d,t.child=a,a=d,d=t.child,h=e.child.memoizedState,h=h===null?bc(i):{baseLanes:h.baseLanes|i,cachePool:null,transitions:h.transitions},d.memoizedState=h,d.childLanes=e.childLanes&~i,t.memoizedState=wc,a}return d=e.child,e=d.sibling,a=kr(d,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=i),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a}function kc(e,t){return t=xs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function os(e,t,i,a){return a!==null&&Yl(a),gi(t,e.child,null,i),e=kc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function k0(e,t,i,a,c,d,h){if(i)return t.flags&256?(t.flags&=-257,a=gc(Error(o(422))),os(e,t,h,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=a.fallback,c=t.mode,a=xs({mode:"visible",children:a.children},c,0,null),d=Ur(d,c,h,null),d.flags|=2,a.return=t,d.return=t,a.sibling=d,t.child=a,(t.mode&1)!==0&&gi(t,e.child,null,h),t.child.memoizedState=bc(h),t.memoizedState=wc,d);if((t.mode&1)===0)return os(e,t,h,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var b=a.dgst;return a=b,d=Error(o(419)),a=gc(d,a,void 0),os(e,t,h,a)}if(b=(h&e.childLanes)!==0,It||b){if(a=dt,a!==null){switch(h&-h){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(a.suspendedLanes|h))!==0?0:c,c!==0&&c!==d.retryLane&&(d.retryLane=c,Yn(e,c),Sn(a,e,c,-1))}return Lc(),a=gc(Error(o(421))),os(e,t,h,a)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=$0.bind(null,e),c._reactRetry=t,null):(e=d.treeContext,Ut=dr(c.nextSibling),Wt=t,Fe=!0,wn=null,e!==null&&(Jt[en++]=Gn,Jt[en++]=Kn,Jt[en++]=Ar,Gn=e.id,Kn=e.overflow,Ar=t),t=kc(t,a.children),t.flags|=4096,t)}function ef(e,t,i){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Jl(e.return,t,i)}function Cc(e,t,i,a,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:c}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=i,d.tailMode=c)}function tf(e,t,i){var a=t.pendingProps,c=a.revealOrder,d=a.tail;if(St(e,t,a.children,i),a=He.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ef(e,i,t);else if(e.tag===19)ef(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ne(He,a),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(i=t.child,c=null;i!==null;)e=i.alternate,e!==null&&Za(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=t.child,t.child=null):(c=i.sibling,i.sibling=null),Cc(t,!1,c,i,d);break;case"backwards":for(i=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&Za(e)===null){t.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}Cc(t,!0,i,null,d);break;case"together":Cc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function as(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qn(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),jr|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,i=kr(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=kr(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function C0(e,t,i){switch(t.tag){case 3:Qp(t),hi();break;case 5:hp(t);break;case 1:Mt(t.type)&&Wa(t);break;case 4:nc(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,c=t.memoizedProps.value;Ne(Ka,a._currentValue),a._currentValue=c;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Ne(He,He.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?Jp(e,t,i):(Ne(He,He.current&1),e=Qn(e,t,i),e!==null?e.sibling:null);Ne(He,He.current&1);break;case 19:if(a=(i&t.childLanes)!==0,(e.flags&128)!==0){if(a)return tf(e,t,i);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ne(He,He.current),a)break;return null;case 22:case 23:return t.lanes=0,Kp(e,t,i)}return Qn(e,t,i)}var nf,Sc,rf,of;nf=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Sc=function(){},rf=function(e,t,i,a){var c=e.memoizedProps;if(c!==a){e=t.stateNode,Dr(On.current);var d=null;switch(i){case"input":c=Ze(e,c),a=Ze(e,a),d=[];break;case"select":c=ee({},c,{value:void 0}),a=ee({},a,{value:void 0}),d=[];break;case"textarea":c=jt(e,c),a=jt(e,a),d=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=ja)}rr(i,a);var h;i=null;for(B in c)if(!a.hasOwnProperty(B)&&c.hasOwnProperty(B)&&c[B]!=null)if(B==="style"){var b=c[B];for(h in b)b.hasOwnProperty(h)&&(i||(i={}),i[h]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(l.hasOwnProperty(B)?d||(d=[]):(d=d||[]).push(B,null));for(B in a){var T=a[B];if(b=c!=null?c[B]:void 0,a.hasOwnProperty(B)&&T!==b&&(T!=null||b!=null))if(B==="style")if(b){for(h in b)!b.hasOwnProperty(h)||T&&T.hasOwnProperty(h)||(i||(i={}),i[h]="");for(h in T)T.hasOwnProperty(h)&&b[h]!==T[h]&&(i||(i={}),i[h]=T[h])}else i||(d||(d=[]),d.push(B,i)),i=T;else B==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,b=b?b.__html:void 0,T!=null&&b!==T&&(d=d||[]).push(B,T)):B==="children"?typeof T!="string"&&typeof T!="number"||(d=d||[]).push(B,""+T):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(l.hasOwnProperty(B)?(T!=null&&B==="onScroll"&&Le("scroll",e),d||b===T||(d=[])):(d=d||[]).push(B,T))}i&&(d=d||[]).push("style",i);var B=d;(t.updateQueue=B)&&(t.flags|=4)}},of=function(e,t,i,a){i!==a&&(t.flags|=4)};function Ro(e,t){if(!Fe)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function wt(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,a=0;if(t)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=a,e.childLanes=i,t}function S0(e,t,i){var a=t.pendingProps;switch(ql(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(t),null;case 1:return Mt(t.type)&&Fa(),wt(t),null;case 3:return a=t.stateNode,yi(),je(Rt),je(xt),oc(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(qa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,wn!==null&&($c(wn),wn=null))),Sc(e,t),wt(t),null;case 5:rc(t);var c=Dr(Co.current);if(i=t.type,e!==null&&t.stateNode!=null)rf(e,t,i,a,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(o(166));return wt(t),null}if(e=Dr(On.current),qa(t)){a=t.stateNode,i=t.type;var d=t.memoizedProps;switch(a[_n]=t,a[xo]=d,e=(t.mode&1)!==0,i){case"dialog":Le("cancel",a),Le("close",a);break;case"iframe":case"object":case"embed":Le("load",a);break;case"video":case"audio":for(c=0;c<ho.length;c++)Le(ho[c],a);break;case"source":Le("error",a);break;case"img":case"image":case"link":Le("error",a),Le("load",a);break;case"details":Le("toggle",a);break;case"input":it(a,d),Le("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!d.multiple},Le("invalid",a);break;case"textarea":mn(a,d),Le("invalid",a)}rr(i,d),c=null;for(var h in d)if(d.hasOwnProperty(h)){var b=d[h];h==="children"?typeof b=="string"?a.textContent!==b&&(d.suppressHydrationWarning!==!0&&La(a.textContent,b,e),c=["children",b]):typeof b=="number"&&a.textContent!==""+b&&(d.suppressHydrationWarning!==!0&&La(a.textContent,b,e),c=["children",""+b]):l.hasOwnProperty(h)&&b!=null&&h==="onScroll"&&Le("scroll",a)}switch(i){case"input":Ke(a),Xt(a,d,!0);break;case"textarea":Ke(a),Ct(a);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(a.onclick=ja)}a=c,t.updateQueue=a,a!==null&&(t.flags|=4)}else{h=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qt(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=h.createElement(i,{is:a.is}):(e=h.createElement(i),i==="select"&&(h=e,a.multiple?h.multiple=!0:a.size&&(h.size=a.size))):e=h.createElementNS(e,i),e[_n]=t,e[xo]=a,nf(e,t,!1,!1),t.stateNode=e;e:{switch(h=Mr(i,a),i){case"dialog":Le("cancel",e),Le("close",e),c=a;break;case"iframe":case"object":case"embed":Le("load",e),c=a;break;case"video":case"audio":for(c=0;c<ho.length;c++)Le(ho[c],e);c=a;break;case"source":Le("error",e),c=a;break;case"img":case"image":case"link":Le("error",e),Le("load",e),c=a;break;case"details":Le("toggle",e),c=a;break;case"input":it(e,a),c=Ze(e,a),Le("invalid",e);break;case"option":c=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},c=ee({},a,{value:void 0}),Le("invalid",e);break;case"textarea":mn(e,a),c=jt(e,a),Le("invalid",e);break;default:c=a}rr(i,c),b=c;for(d in b)if(b.hasOwnProperty(d)){var T=b[d];d==="style"?Gi(e,T):d==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&we(e,T)):d==="children"?typeof T=="string"?(i!=="textarea"||T!=="")&&ct(e,T):typeof T=="number"&&ct(e,""+T):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(l.hasOwnProperty(d)?T!=null&&d==="onScroll"&&Le("scroll",e):T!=null&&O(e,d,T,h))}switch(i){case"input":Ke(e),Xt(e,a,!1);break;case"textarea":Ke(e),Ct(e);break;case"option":a.value!=null&&e.setAttribute("value",""+he(a.value));break;case"select":e.multiple=!!a.multiple,d=a.value,d!=null?ft(e,!!a.multiple,d,!1):a.defaultValue!=null&&ft(e,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=ja)}switch(i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return wt(t),null;case 6:if(e&&t.stateNode!=null)of(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(i=Dr(Co.current),Dr(On.current),qa(t)){if(a=t.stateNode,i=t.memoizedProps,a[_n]=t,(d=a.nodeValue!==i)&&(e=Wt,e!==null))switch(e.tag){case 3:La(a.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&La(a.nodeValue,i,(e.mode&1)!==0)}d&&(t.flags|=4)}else a=(i.nodeType===9?i:i.ownerDocument).createTextNode(a),a[_n]=t,t.stateNode=a}return wt(t),null;case 13:if(je(He),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Fe&&Ut!==null&&(t.mode&1)!==0&&(t.flags&128)===0)sp(),hi(),t.flags|=98560,d=!1;else if(d=qa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!d)throw Error(o(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[_n]=t}else hi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;wt(t),d=!1}else wn!==null&&($c(wn),wn=null),d=!0;if(!d)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(He.current&1)!==0?lt===0&&(lt=3):Lc())),t.updateQueue!==null&&(t.flags|=4),wt(t),null);case 4:return yi(),Sc(e,t),e===null&&go(t.stateNode.containerInfo),wt(t),null;case 10:return Zl(t.type._context),wt(t),null;case 17:return Mt(t.type)&&Fa(),wt(t),null;case 19:if(je(He),d=t.memoizedState,d===null)return wt(t),null;if(a=(t.flags&128)!==0,h=d.rendering,h===null)if(a)Ro(d,!1);else{if(lt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=Za(e),h!==null){for(t.flags|=128,Ro(d,!1),a=h.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=i,i=t.child;i!==null;)d=i,e=a,d.flags&=14680066,h=d.alternate,h===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=h.childLanes,d.lanes=h.lanes,d.child=h.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=h.memoizedProps,d.memoizedState=h.memoizedState,d.updateQueue=h.updateQueue,d.type=h.type,e=h.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Ne(He,He.current&1|2),t.child}e=e.sibling}d.tail!==null&&et()>Ci&&(t.flags|=128,a=!0,Ro(d,!1),t.lanes=4194304)}else{if(!a)if(e=Za(h),e!==null){if(t.flags|=128,a=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),Ro(d,!0),d.tail===null&&d.tailMode==="hidden"&&!h.alternate&&!Fe)return wt(t),null}else 2*et()-d.renderingStartTime>Ci&&i!==1073741824&&(t.flags|=128,a=!0,Ro(d,!1),t.lanes=4194304);d.isBackwards?(h.sibling=t.child,t.child=h):(i=d.last,i!==null?i.sibling=h:t.child=h,d.last=h)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=et(),t.sibling=null,i=He.current,Ne(He,a?i&1|2:i&1),t):(wt(t),null);case 22:case 23:return Dc(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(Ht&1073741824)!==0&&(wt(t),t.subtreeFlags&6&&(t.flags|=8192)):wt(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function E0(e,t){switch(ql(t),t.tag){case 1:return Mt(t.type)&&Fa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yi(),je(Rt),je(xt),oc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return rc(t),null;case 13:if(je(He),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(He),null;case 4:return yi(),null;case 10:return Zl(t.type._context),null;case 22:case 23:return Dc(),null;case 24:return null;default:return null}}var ss=!1,bt=!1,T0=typeof WeakSet=="function"?WeakSet:Set,ae=null;function bi(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(a){Ye(e,t,a)}else i.current=null}function Ec(e,t,i){try{i()}catch(a){Ye(e,t,a)}}var af=!1;function P0(e,t){if(Dl=Pa,e=Dd(),Ml(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var c=a.anchorOffset,d=a.focusNode;a=a.focusOffset;try{i.nodeType,d.nodeType}catch{i=null;break e}var h=0,b=-1,T=-1,B=0,K=0,X=e,G=null;t:for(;;){for(var oe;X!==i||c!==0&&X.nodeType!==3||(b=h+c),X!==d||a!==0&&X.nodeType!==3||(T=h+a),X.nodeType===3&&(h+=X.nodeValue.length),(oe=X.firstChild)!==null;)G=X,X=oe;for(;;){if(X===e)break t;if(G===i&&++B===c&&(b=h),G===d&&++K===a&&(T=h),(oe=X.nextSibling)!==null)break;X=G,G=X.parentNode}X=oe}i=b===-1||T===-1?null:{start:b,end:T}}else i=null}i=i||{start:0,end:0}}else i=null;for(Ll={focusedElem:e,selectionRange:i},Pa=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){t=ae;try{var ce=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var ue=ce.memoizedProps,tt=ce.memoizedState,A=t.stateNode,P=A.getSnapshotBeforeUpdate(t.elementType===t.type?ue:bn(t.type,ue),tt);A.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var D=t.stateNode.containerInfo;D.nodeType===1?D.textContent="":D.nodeType===9&&D.documentElement&&D.removeChild(D.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(te){Ye(t,t.return,te)}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}return ce=af,af=!1,ce}function Mo(e,t,i){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&e)===e){var d=c.destroy;c.destroy=void 0,d!==void 0&&Ec(t,i,d)}c=c.next}while(c!==a)}}function ls(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var a=i.create;i.destroy=a()}i=i.next}while(i!==t)}}function Tc(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function sf(e){var t=e.alternate;t!==null&&(e.alternate=null,sf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_n],delete t[xo],delete t[Wl],delete t[c0],delete t[u0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lf(e){return e.tag===5||e.tag===3||e.tag===4}function cf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pc(e,t,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=ja));else if(a!==4&&(e=e.child,e!==null))for(Pc(e,t,i),e=e.sibling;e!==null;)Pc(e,t,i),e=e.sibling}function Rc(e,t,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Rc(e,t,i),e=e.sibling;e!==null;)Rc(e,t,i),e=e.sibling}var mt=null,kn=!1;function vr(e,t,i){for(i=i.child;i!==null;)uf(e,t,i),i=i.sibling}function uf(e,t,i){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(ba,i)}catch{}switch(i.tag){case 5:bt||bi(i,t);case 6:var a=mt,c=kn;mt=null,vr(e,t,i),mt=a,kn=c,mt!==null&&(kn?(e=mt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):mt.removeChild(i.stateNode));break;case 18:mt!==null&&(kn?(e=mt,i=i.stateNode,e.nodeType===8?Fl(e.parentNode,i):e.nodeType===1&&Fl(e,i),ao(e)):Fl(mt,i.stateNode));break;case 4:a=mt,c=kn,mt=i.stateNode.containerInfo,kn=!0,vr(e,t,i),mt=a,kn=c;break;case 0:case 11:case 14:case 15:if(!bt&&(a=i.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var d=c,h=d.destroy;d=d.tag,h!==void 0&&((d&2)!==0||(d&4)!==0)&&Ec(i,t,h),c=c.next}while(c!==a)}vr(e,t,i);break;case 1:if(!bt&&(bi(i,t),a=i.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=i.memoizedProps,a.state=i.memoizedState,a.componentWillUnmount()}catch(b){Ye(i,t,b)}vr(e,t,i);break;case 21:vr(e,t,i);break;case 22:i.mode&1?(bt=(a=bt)||i.memoizedState!==null,vr(e,t,i),bt=a):vr(e,t,i);break;default:vr(e,t,i)}}function df(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new T0),t.forEach(function(a){var c=N0.bind(null,e,a);i.has(a)||(i.add(a),a.then(c,c))})}}function Cn(e,t){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var c=i[a];try{var d=e,h=t,b=h;e:for(;b!==null;){switch(b.tag){case 5:mt=b.stateNode,kn=!1;break e;case 3:mt=b.stateNode.containerInfo,kn=!0;break e;case 4:mt=b.stateNode.containerInfo,kn=!0;break e}b=b.return}if(mt===null)throw Error(o(160));uf(d,h,c),mt=null,kn=!1;var T=c.alternate;T!==null&&(T.return=null),c.return=null}catch(B){Ye(c,t,B)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pf(t,e),t=t.sibling}function pf(e,t){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Cn(t,e),$n(e),a&4){try{Mo(3,e,e.return),ls(3,e)}catch(ue){Ye(e,e.return,ue)}try{Mo(5,e,e.return)}catch(ue){Ye(e,e.return,ue)}}break;case 1:Cn(t,e),$n(e),a&512&&i!==null&&bi(i,i.return);break;case 5:if(Cn(t,e),$n(e),a&512&&i!==null&&bi(i,i.return),e.flags&32){var c=e.stateNode;try{ct(c,"")}catch(ue){Ye(e,e.return,ue)}}if(a&4&&(c=e.stateNode,c!=null)){var d=e.memoizedProps,h=i!==null?i.memoizedProps:d,b=e.type,T=e.updateQueue;if(e.updateQueue=null,T!==null)try{b==="input"&&d.type==="radio"&&d.name!=null&&Kt(c,d),Mr(b,h);var B=Mr(b,d);for(h=0;h<T.length;h+=2){var K=T[h],X=T[h+1];K==="style"?Gi(c,X):K==="dangerouslySetInnerHTML"?we(c,X):K==="children"?ct(c,X):O(c,K,X,B)}switch(b){case"input":Yt(c,d);break;case"textarea":Pt(c,d);break;case"select":var G=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!d.multiple;var oe=d.value;oe!=null?ft(c,!!d.multiple,oe,!1):G!==!!d.multiple&&(d.defaultValue!=null?ft(c,!!d.multiple,d.defaultValue,!0):ft(c,!!d.multiple,d.multiple?[]:"",!1))}c[xo]=d}catch(ue){Ye(e,e.return,ue)}}break;case 6:if(Cn(t,e),$n(e),a&4){if(e.stateNode===null)throw Error(o(162));c=e.stateNode,d=e.memoizedProps;try{c.nodeValue=d}catch(ue){Ye(e,e.return,ue)}}break;case 3:if(Cn(t,e),$n(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{ao(t.containerInfo)}catch(ue){Ye(e,e.return,ue)}break;case 4:Cn(t,e),$n(e);break;case 13:Cn(t,e),$n(e),c=e.child,c.flags&8192&&(d=c.memoizedState!==null,c.stateNode.isHidden=d,!d||c.alternate!==null&&c.alternate.memoizedState!==null||(zc=et())),a&4&&df(e);break;case 22:if(K=i!==null&&i.memoizedState!==null,e.mode&1?(bt=(B=bt)||K,Cn(t,e),bt=B):Cn(t,e),$n(e),a&8192){if(B=e.memoizedState!==null,(e.stateNode.isHidden=B)&&!K&&(e.mode&1)!==0)for(ae=e,K=e.child;K!==null;){for(X=ae=K;ae!==null;){switch(G=ae,oe=G.child,G.tag){case 0:case 11:case 14:case 15:Mo(4,G,G.return);break;case 1:bi(G,G.return);var ce=G.stateNode;if(typeof ce.componentWillUnmount=="function"){a=G,i=G.return;try{t=a,ce.props=t.memoizedProps,ce.state=t.memoizedState,ce.componentWillUnmount()}catch(ue){Ye(a,i,ue)}}break;case 5:bi(G,G.return);break;case 22:if(G.memoizedState!==null){hf(X);continue}}oe!==null?(oe.return=G,ae=oe):hf(X)}K=K.sibling}e:for(K=null,X=e;;){if(X.tag===5){if(K===null){K=X;try{c=X.stateNode,B?(d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(b=X.stateNode,T=X.memoizedProps.style,h=T!=null&&T.hasOwnProperty("display")?T.display:null,b.style.display=nr("display",h))}catch(ue){Ye(e,e.return,ue)}}}else if(X.tag===6){if(K===null)try{X.stateNode.nodeValue=B?"":X.memoizedProps}catch(ue){Ye(e,e.return,ue)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===e)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===e)break e;for(;X.sibling===null;){if(X.return===null||X.return===e)break e;K===X&&(K=null),X=X.return}K===X&&(K=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Cn(t,e),$n(e),a&4&&df(e);break;case 21:break;default:Cn(t,e),$n(e)}}function $n(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(lf(i)){var a=i;break e}i=i.return}throw Error(o(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(ct(c,""),a.flags&=-33);var d=cf(e);Rc(e,d,c);break;case 3:case 4:var h=a.stateNode.containerInfo,b=cf(e);Pc(e,b,h);break;default:throw Error(o(161))}}catch(T){Ye(e,e.return,T)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function R0(e,t,i){ae=e,ff(e)}function ff(e,t,i){for(var a=(e.mode&1)!==0;ae!==null;){var c=ae,d=c.child;if(c.tag===22&&a){var h=c.memoizedState!==null||ss;if(!h){var b=c.alternate,T=b!==null&&b.memoizedState!==null||bt;b=ss;var B=bt;if(ss=h,(bt=T)&&!B)for(ae=c;ae!==null;)h=ae,T=h.child,h.tag===22&&h.memoizedState!==null?gf(c):T!==null?(T.return=h,ae=T):gf(c);for(;d!==null;)ae=d,ff(d),d=d.sibling;ae=c,ss=b,bt=B}mf(e)}else(c.subtreeFlags&8772)!==0&&d!==null?(d.return=c,ae=d):mf(e)}}function mf(e){for(;ae!==null;){var t=ae;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:bt||ls(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!bt)if(i===null)a.componentDidMount();else{var c=t.elementType===t.type?i.memoizedProps:bn(t.type,i.memoizedProps);a.componentDidUpdate(c,i.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&mp(t,d,a);break;case 3:var h=t.updateQueue;if(h!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}mp(t,h,i)}break;case 5:var b=t.stateNode;if(i===null&&t.flags&4){i=b;var T=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&i.focus();break;case"img":T.src&&(i.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var B=t.alternate;if(B!==null){var K=B.memoizedState;if(K!==null){var X=K.dehydrated;X!==null&&ao(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}bt||t.flags&512&&Tc(t)}catch(G){Ye(t,t.return,G)}}if(t===e){ae=null;break}if(i=t.sibling,i!==null){i.return=t.return,ae=i;break}ae=t.return}}function hf(e){for(;ae!==null;){var t=ae;if(t===e){ae=null;break}var i=t.sibling;if(i!==null){i.return=t.return,ae=i;break}ae=t.return}}function gf(e){for(;ae!==null;){var t=ae;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{ls(4,t)}catch(T){Ye(t,i,T)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var c=t.return;try{a.componentDidMount()}catch(T){Ye(t,c,T)}}var d=t.return;try{Tc(t)}catch(T){Ye(t,d,T)}break;case 5:var h=t.return;try{Tc(t)}catch(T){Ye(t,h,T)}}}catch(T){Ye(t,t.return,T)}if(t===e){ae=null;break}var b=t.sibling;if(b!==null){b.return=t.return,ae=b;break}ae=t.return}}var M0=Math.ceil,cs=$.ReactCurrentDispatcher,Mc=$.ReactCurrentOwner,rn=$.ReactCurrentBatchConfig,Pe=0,dt=null,ot=null,ht=0,Ht=0,ki=pr(0),lt=0,Io=null,jr=0,us=0,Ic=0,zo=null,zt=null,zc=0,Ci=1/0,Zn=null,ds=!1,_c=null,xr=null,ps=!1,yr=null,fs=0,_o=0,Oc=null,ms=-1,hs=0;function Et(){return(Pe&6)!==0?et():ms!==-1?ms:ms=et()}function wr(e){return(e.mode&1)===0?1:(Pe&2)!==0&&ht!==0?ht&-ht:p0.transition!==null?(hs===0&&(hs=ld()),hs):(e=Ae,e!==0||(e=window.event,e=e===void 0?16:vd(e.type)),e)}function Sn(e,t,i,a){if(50<_o)throw _o=0,Oc=null,Error(o(185));to(e,i,a),((Pe&2)===0||e!==dt)&&(e===dt&&((Pe&2)===0&&(us|=i),lt===4&&br(e,ht)),_t(e,a),i===1&&Pe===0&&(t.mode&1)===0&&(Ci=et()+500,Ua&&mr()))}function _t(e,t){var i=e.callbackNode;pg(e,t);var a=Sa(e,e===dt?ht:0);if(a===0)i!==null&&od(i),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(i!=null&&od(i),t===1)e.tag===0?d0(xf.bind(null,e)):np(xf.bind(null,e)),s0(function(){(Pe&6)===0&&mr()}),i=null;else{switch(cd(a)){case 1:i=pl;break;case 4:i=ad;break;case 16:i=wa;break;case 536870912:i=sd;break;default:i=wa}i=Tf(i,vf.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function vf(e,t){if(ms=-1,hs=0,(Pe&6)!==0)throw Error(o(327));var i=e.callbackNode;if(Si()&&e.callbackNode!==i)return null;var a=Sa(e,e===dt?ht:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=gs(e,a);else{t=a;var c=Pe;Pe|=2;var d=wf();(dt!==e||ht!==t)&&(Zn=null,Ci=et()+500,Fr(e,t));do try{_0();break}catch(b){yf(e,b)}while(!0);Ql(),cs.current=d,Pe=c,ot!==null?t=0:(dt=null,ht=0,t=lt)}if(t!==0){if(t===2&&(c=fl(e),c!==0&&(a=c,t=Ac(e,c))),t===1)throw i=Io,Fr(e,0),br(e,a),_t(e,et()),i;if(t===6)br(e,a);else{if(c=e.current.alternate,(a&30)===0&&!I0(c)&&(t=gs(e,a),t===2&&(d=fl(e),d!==0&&(a=d,t=Ac(e,d))),t===1))throw i=Io,Fr(e,0),br(e,a),_t(e,et()),i;switch(e.finishedWork=c,e.finishedLanes=a,t){case 0:case 1:throw Error(o(345));case 2:Wr(e,zt,Zn);break;case 3:if(br(e,a),(a&130023424)===a&&(t=zc+500-et(),10<t)){if(Sa(e,0)!==0)break;if(c=e.suspendedLanes,(c&a)!==a){Et(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=Bl(Wr.bind(null,e,zt,Zn),t);break}Wr(e,zt,Zn);break;case 4:if(br(e,a),(a&4194240)===a)break;for(t=e.eventTimes,c=-1;0<a;){var h=31-xn(a);d=1<<h,h=t[h],h>c&&(c=h),a&=~d}if(a=c,a=et()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*M0(a/1960))-a,10<a){e.timeoutHandle=Bl(Wr.bind(null,e,zt,Zn),a);break}Wr(e,zt,Zn);break;case 5:Wr(e,zt,Zn);break;default:throw Error(o(329))}}}return _t(e,et()),e.callbackNode===i?vf.bind(null,e):null}function Ac(e,t){var i=zo;return e.current.memoizedState.isDehydrated&&(Fr(e,t).flags|=256),e=gs(e,t),e!==2&&(t=zt,zt=i,t!==null&&$c(t)),e}function $c(e){zt===null?zt=e:zt.push.apply(zt,e)}function I0(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var a=0;a<i.length;a++){var c=i[a],d=c.getSnapshot;c=c.value;try{if(!yn(d(),c))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function br(e,t){for(t&=~Ic,t&=~us,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-xn(t),a=1<<i;e[i]=-1,t&=~a}}function xf(e){if((Pe&6)!==0)throw Error(o(327));Si();var t=Sa(e,0);if((t&1)===0)return _t(e,et()),null;var i=gs(e,t);if(e.tag!==0&&i===2){var a=fl(e);a!==0&&(t=a,i=Ac(e,a))}if(i===1)throw i=Io,Fr(e,0),br(e,t),_t(e,et()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wr(e,zt,Zn),_t(e,et()),null}function Nc(e,t){var i=Pe;Pe|=1;try{return e(t)}finally{Pe=i,Pe===0&&(Ci=et()+500,Ua&&mr())}}function Br(e){yr!==null&&yr.tag===0&&(Pe&6)===0&&Si();var t=Pe;Pe|=1;var i=rn.transition,a=Ae;try{if(rn.transition=null,Ae=1,e)return e()}finally{Ae=a,rn.transition=i,Pe=t,(Pe&6)===0&&mr()}}function Dc(){Ht=ki.current,je(ki)}function Fr(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,a0(i)),ot!==null)for(i=ot.return;i!==null;){var a=i;switch(ql(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Fa();break;case 3:yi(),je(Rt),je(xt),oc();break;case 5:rc(a);break;case 4:yi();break;case 13:je(He);break;case 19:je(He);break;case 10:Zl(a.type._context);break;case 22:case 23:Dc()}i=i.return}if(dt=e,ot=e=kr(e.current,null),ht=Ht=t,lt=0,Io=null,Ic=us=jr=0,zt=zo=null,Nr!==null){for(t=0;t<Nr.length;t++)if(i=Nr[t],a=i.interleaved,a!==null){i.interleaved=null;var c=a.next,d=i.pending;if(d!==null){var h=d.next;d.next=c,a.next=h}i.pending=a}Nr=null}return e}function yf(e,t){do{var i=ot;try{if(Ql(),Ja.current=rs,es){for(var a=Ve.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}es=!1}if(Lr=0,ut=st=Ve=null,So=!1,Eo=0,Mc.current=null,i===null||i.return===null){lt=1,Io=t,ot=null;break}e:{var d=e,h=i.return,b=i,T=t;if(t=ht,b.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var B=T,K=b,X=K.tag;if((K.mode&1)===0&&(X===0||X===11||X===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var oe=Up(h);if(oe!==null){oe.flags&=-257,Hp(oe,h,b,d,t),oe.mode&1&&Wp(d,B,t),t=oe,T=B;var ce=t.updateQueue;if(ce===null){var ue=new Set;ue.add(T),t.updateQueue=ue}else ce.add(T);break e}else{if((t&1)===0){Wp(d,B,t),Lc();break e}T=Error(o(426))}}else if(Fe&&b.mode&1){var tt=Up(h);if(tt!==null){(tt.flags&65536)===0&&(tt.flags|=256),Hp(tt,h,b,d,t),Yl(wi(T,b));break e}}d=T=wi(T,b),lt!==4&&(lt=2),zo===null?zo=[d]:zo.push(d),d=h;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var A=Bp(d,T,t);fp(d,A);break e;case 1:b=T;var P=d.type,D=d.stateNode;if((d.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||D!==null&&typeof D.componentDidCatch=="function"&&(xr===null||!xr.has(D)))){d.flags|=65536,t&=-t,d.lanes|=t;var te=Fp(d,b,t);fp(d,te);break e}}d=d.return}while(d!==null)}kf(i)}catch(de){t=de,ot===i&&i!==null&&(ot=i=i.return);continue}break}while(!0)}function wf(){var e=cs.current;return cs.current=rs,e===null?rs:e}function Lc(){(lt===0||lt===3||lt===2)&&(lt=4),dt===null||(jr&268435455)===0&&(us&268435455)===0||br(dt,ht)}function gs(e,t){var i=Pe;Pe|=2;var a=wf();(dt!==e||ht!==t)&&(Zn=null,Fr(e,t));do try{z0();break}catch(c){yf(e,c)}while(!0);if(Ql(),Pe=i,cs.current=a,ot!==null)throw Error(o(261));return dt=null,ht=0,lt}function z0(){for(;ot!==null;)bf(ot)}function _0(){for(;ot!==null&&!rg();)bf(ot)}function bf(e){var t=Ef(e.alternate,e,Ht);e.memoizedProps=e.pendingProps,t===null?kf(e):ot=t,Mc.current=null}function kf(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=S0(i,t,Ht),i!==null){ot=i;return}}else{if(i=E0(i,t),i!==null){i.flags&=32767,ot=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{lt=6,ot=null;return}}if(t=t.sibling,t!==null){ot=t;return}ot=t=e}while(t!==null);lt===0&&(lt=5)}function Wr(e,t,i){var a=Ae,c=rn.transition;try{rn.transition=null,Ae=1,O0(e,t,i,a)}finally{rn.transition=c,Ae=a}return null}function O0(e,t,i,a){do Si();while(yr!==null);if((Pe&6)!==0)throw Error(o(327));i=e.finishedWork;var c=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var d=i.lanes|i.childLanes;if(fg(e,d),e===dt&&(ot=dt=null,ht=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||ps||(ps=!0,Tf(wa,function(){return Si(),null})),d=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||d){d=rn.transition,rn.transition=null;var h=Ae;Ae=1;var b=Pe;Pe|=4,Mc.current=null,P0(e,i),pf(i,e),Jg(Ll),Pa=!!Dl,Ll=Dl=null,e.current=i,R0(i),ig(),Pe=b,Ae=h,rn.transition=d}else e.current=i;if(ps&&(ps=!1,yr=e,fs=c),d=e.pendingLanes,d===0&&(xr=null),sg(i.stateNode),_t(e,et()),t!==null)for(a=e.onRecoverableError,i=0;i<t.length;i++)c=t[i],a(c.value,{componentStack:c.stack,digest:c.digest});if(ds)throw ds=!1,e=_c,_c=null,e;return(fs&1)!==0&&e.tag!==0&&Si(),d=e.pendingLanes,(d&1)!==0?e===Oc?_o++:(_o=0,Oc=e):_o=0,mr(),null}function Si(){if(yr!==null){var e=cd(fs),t=rn.transition,i=Ae;try{if(rn.transition=null,Ae=16>e?16:e,yr===null)var a=!1;else{if(e=yr,yr=null,fs=0,(Pe&6)!==0)throw Error(o(331));var c=Pe;for(Pe|=4,ae=e.current;ae!==null;){var d=ae,h=d.child;if((ae.flags&16)!==0){var b=d.deletions;if(b!==null){for(var T=0;T<b.length;T++){var B=b[T];for(ae=B;ae!==null;){var K=ae;switch(K.tag){case 0:case 11:case 15:Mo(8,K,d)}var X=K.child;if(X!==null)X.return=K,ae=X;else for(;ae!==null;){K=ae;var G=K.sibling,oe=K.return;if(sf(K),K===B){ae=null;break}if(G!==null){G.return=oe,ae=G;break}ae=oe}}}var ce=d.alternate;if(ce!==null){var ue=ce.child;if(ue!==null){ce.child=null;do{var tt=ue.sibling;ue.sibling=null,ue=tt}while(ue!==null)}}ae=d}}if((d.subtreeFlags&2064)!==0&&h!==null)h.return=d,ae=h;else e:for(;ae!==null;){if(d=ae,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:Mo(9,d,d.return)}var A=d.sibling;if(A!==null){A.return=d.return,ae=A;break e}ae=d.return}}var P=e.current;for(ae=P;ae!==null;){h=ae;var D=h.child;if((h.subtreeFlags&2064)!==0&&D!==null)D.return=h,ae=D;else e:for(h=P;ae!==null;){if(b=ae,(b.flags&2048)!==0)try{switch(b.tag){case 0:case 11:case 15:ls(9,b)}}catch(de){Ye(b,b.return,de)}if(b===h){ae=null;break e}var te=b.sibling;if(te!==null){te.return=b.return,ae=te;break e}ae=b.return}}if(Pe=c,mr(),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(ba,e)}catch{}a=!0}return a}finally{Ae=i,rn.transition=t}}return!1}function Cf(e,t,i){t=wi(i,t),t=Bp(e,t,1),e=gr(e,t,1),t=Et(),e!==null&&(to(e,1,t),_t(e,t))}function Ye(e,t,i){if(e.tag===3)Cf(e,e,i);else for(;t!==null;){if(t.tag===3){Cf(t,e,i);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(xr===null||!xr.has(a))){e=wi(i,e),e=Fp(t,e,1),t=gr(t,e,1),e=Et(),t!==null&&(to(t,1,e),_t(t,e));break}}t=t.return}}function A0(e,t,i){var a=e.pingCache;a!==null&&a.delete(t),t=Et(),e.pingedLanes|=e.suspendedLanes&i,dt===e&&(ht&i)===i&&(lt===4||lt===3&&(ht&130023424)===ht&&500>et()-zc?Fr(e,0):Ic|=i),_t(e,t)}function Sf(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ca,Ca<<=1,(Ca&130023424)===0&&(Ca=4194304)));var i=Et();e=Yn(e,t),e!==null&&(to(e,t,i),_t(e,i))}function $0(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),Sf(e,i)}function N0(e,t){var i=0;switch(e.tag){case 13:var a=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(o(314))}a!==null&&a.delete(t),Sf(e,i)}var Ef;Ef=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||Rt.current)It=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return It=!1,C0(e,t,i);It=(e.flags&131072)!==0}else It=!1,Fe&&(t.flags&1048576)!==0&&rp(t,Va,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;as(e,t),e=t.pendingProps;var c=pi(t,xt.current);xi(t,i),c=lc(null,t,a,e,c,i);var d=cc();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Mt(a)?(d=!0,Wa(t)):d=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,tc(t),c.updater=is,t.stateNode=c,c._reactInternals=t,hc(t,a,e,i),t=yc(null,t,a,!0,d,i)):(t.tag=0,Fe&&d&&Vl(t),St(null,t,c,i),t=t.child),t;case 16:a=t.elementType;e:{switch(as(e,t),e=t.pendingProps,c=a._init,a=c(a._payload),t.type=a,c=t.tag=L0(a),e=bn(a,e),c){case 0:t=xc(null,t,a,e,i);break e;case 1:t=Xp(null,t,a,e,i);break e;case 11:t=Vp(null,t,a,e,i);break e;case 14:t=qp(null,t,a,bn(a.type,e),i);break e}throw Error(o(306,a,""))}return t;case 0:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:bn(a,c),xc(e,t,a,c,i);case 1:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:bn(a,c),Xp(e,t,a,c,i);case 3:e:{if(Qp(t),e===null)throw Error(o(387));a=t.pendingProps,d=t.memoizedState,c=d.element,pp(e,t),Qa(t,a,null,i);var h=t.memoizedState;if(a=h.element,d.isDehydrated)if(d={element:a,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){c=wi(Error(o(423)),t),t=Zp(e,t,a,i,c);break e}else if(a!==c){c=wi(Error(o(424)),t),t=Zp(e,t,a,i,c);break e}else for(Ut=dr(t.stateNode.containerInfo.firstChild),Wt=t,Fe=!0,wn=null,i=up(t,null,a,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(hi(),a===c){t=Qn(e,t,i);break e}St(e,t,a,i)}t=t.child}return t;case 5:return hp(t),e===null&&Kl(t),a=t.type,c=t.pendingProps,d=e!==null?e.memoizedProps:null,h=c.children,jl(a,c)?h=null:d!==null&&jl(a,d)&&(t.flags|=32),Yp(e,t),St(e,t,h,i),t.child;case 6:return e===null&&Kl(t),null;case 13:return Jp(e,t,i);case 4:return nc(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=gi(t,null,a,i):St(e,t,a,i),t.child;case 11:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:bn(a,c),Vp(e,t,a,c,i);case 7:return St(e,t,t.pendingProps,i),t.child;case 8:return St(e,t,t.pendingProps.children,i),t.child;case 12:return St(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(a=t.type._context,c=t.pendingProps,d=t.memoizedProps,h=c.value,Ne(Ka,a._currentValue),a._currentValue=h,d!==null)if(yn(d.value,h)){if(d.children===c.children&&!Rt.current){t=Qn(e,t,i);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var b=d.dependencies;if(b!==null){h=d.child;for(var T=b.firstContext;T!==null;){if(T.context===a){if(d.tag===1){T=Xn(-1,i&-i),T.tag=2;var B=d.updateQueue;if(B!==null){B=B.shared;var K=B.pending;K===null?T.next=T:(T.next=K.next,K.next=T),B.pending=T}}d.lanes|=i,T=d.alternate,T!==null&&(T.lanes|=i),Jl(d.return,i,t),b.lanes|=i;break}T=T.next}}else if(d.tag===10)h=d.type===t.type?null:d.child;else if(d.tag===18){if(h=d.return,h===null)throw Error(o(341));h.lanes|=i,b=h.alternate,b!==null&&(b.lanes|=i),Jl(h,i,t),h=d.sibling}else h=d.child;if(h!==null)h.return=d;else for(h=d;h!==null;){if(h===t){h=null;break}if(d=h.sibling,d!==null){d.return=h.return,h=d;break}h=h.return}d=h}St(e,t,c.children,i),t=t.child}return t;case 9:return c=t.type,a=t.pendingProps.children,xi(t,i),c=tn(c),a=a(c),t.flags|=1,St(e,t,a,i),t.child;case 14:return a=t.type,c=bn(a,t.pendingProps),c=bn(a.type,c),qp(e,t,a,c,i);case 15:return Gp(e,t,t.type,t.pendingProps,i);case 17:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:bn(a,c),as(e,t),t.tag=1,Mt(a)?(e=!0,Wa(t)):e=!1,xi(t,i),Lp(t,a,c),hc(t,a,c,i),yc(null,t,a,!0,e,i);case 19:return tf(e,t,i);case 22:return Kp(e,t,i)}throw Error(o(156,t.tag))};function Tf(e,t){return vt(e,t)}function D0(e,t,i,a){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(e,t,i,a){return new D0(e,t,i,a)}function jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function L0(e){if(typeof e=="function")return jc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ie)return 11;if(e===ne)return 14}return 2}function kr(e,t){var i=e.alternate;return i===null?(i=on(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function vs(e,t,i,a,c,d){var h=2;if(a=e,typeof e=="function")jc(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case w:return Ur(i.children,c,d,t);case N:h=8,c|=8;break;case U:return e=on(12,i,t,c|2),e.elementType=U,e.lanes=d,e;case Q:return e=on(13,i,t,c),e.elementType=Q,e.lanes=d,e;case re:return e=on(19,i,t,c),e.elementType=re,e.lanes=d,e;case J:return xs(i,c,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:h=10;break e;case q:h=9;break e;case ie:h=11;break e;case ne:h=14;break e;case Y:h=16,a=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=on(h,i,t,c),t.elementType=e,t.type=a,t.lanes=d,t}function Ur(e,t,i,a){return e=on(7,e,a,t),e.lanes=i,e}function xs(e,t,i,a){return e=on(22,e,a,t),e.elementType=J,e.lanes=i,e.stateNode={isHidden:!1},e}function Bc(e,t,i){return e=on(6,e,null,t),e.lanes=i,e}function Fc(e,t,i){return t=on(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function j0(e,t,i,a,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ml(0),this.expirationTimes=ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ml(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Wc(e,t,i,a,c,d,h,b,T){return e=new j0(e,t,i,b,T),t===1?(t=1,d===!0&&(t|=8)):t=0,d=on(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:a,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},tc(d),e}function B0(e,t,i){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:a==null?null:""+a,children:e,containerInfo:t,implementation:i}}function Pf(e){if(!e)return fr;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(Mt(i))return ep(e,i,t)}return t}function Rf(e,t,i,a,c,d,h,b,T){return e=Wc(i,a,!0,e,c,d,h,b,T),e.context=Pf(null),i=e.current,a=Et(),c=wr(i),d=Xn(a,c),d.callback=t??null,gr(i,d,c),e.current.lanes=c,to(e,c,a),_t(e,a),e}function ys(e,t,i,a){var c=t.current,d=Et(),h=wr(c);return i=Pf(i),t.context===null?t.context=i:t.pendingContext=i,t=Xn(d,h),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=gr(c,t,h),e!==null&&(Sn(e,c,h,d),Xa(e,c,h)),h}function ws(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Uc(e,t){Mf(e,t),(e=e.alternate)&&Mf(e,t)}function F0(){return null}var If=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hc(e){this._internalRoot=e}bs.prototype.render=Hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));ys(e,t,null,null)},bs.prototype.unmount=Hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Br(function(){ys(null,e,null,null)}),t[Vn]=null}};function bs(e){this._internalRoot=e}bs.prototype.unstable_scheduleHydration=function(e){if(e){var t=pd();e={blockedOn:null,target:e,priority:t};for(var i=0;i<lr.length&&t!==0&&t<lr[i].priority;i++);lr.splice(i,0,e),i===0&&hd(e)}};function Vc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zf(){}function W0(e,t,i,a,c){if(c){if(typeof a=="function"){var d=a;a=function(){var B=ws(h);d.call(B)}}var h=Rf(t,a,e,0,null,!1,!1,"",zf);return e._reactRootContainer=h,e[Vn]=h.current,go(e.nodeType===8?e.parentNode:e),Br(),h}for(;c=e.lastChild;)e.removeChild(c);if(typeof a=="function"){var b=a;a=function(){var B=ws(T);b.call(B)}}var T=Wc(e,0,!1,null,null,!1,!1,"",zf);return e._reactRootContainer=T,e[Vn]=T.current,go(e.nodeType===8?e.parentNode:e),Br(function(){ys(t,T,i,a)}),T}function Cs(e,t,i,a,c){var d=i._reactRootContainer;if(d){var h=d;if(typeof c=="function"){var b=c;c=function(){var T=ws(h);b.call(T)}}ys(t,h,e,c)}else h=W0(i,t,e,c,a);return ws(h)}ud=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=eo(t.pendingLanes);i!==0&&(hl(t,i|1),_t(t,et()),(Pe&6)===0&&(Ci=et()+500,mr()))}break;case 13:Br(function(){var a=Yn(e,1);if(a!==null){var c=Et();Sn(a,e,1,c)}}),Uc(e,1)}},gl=function(e){if(e.tag===13){var t=Yn(e,134217728);if(t!==null){var i=Et();Sn(t,e,134217728,i)}Uc(e,134217728)}},dd=function(e){if(e.tag===13){var t=wr(e),i=Yn(e,t);if(i!==null){var a=Et();Sn(i,e,t,a)}Uc(e,t)}},pd=function(){return Ae},fd=function(e,t){var i=Ae;try{return Ae=e,t()}finally{Ae=i}},Yi=function(e,t,i){switch(t){case"input":if(Yt(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var a=i[t];if(a!==e&&a.form===e.form){var c=Ba(a);if(!c)throw Error(o(90));rt(a),Yt(a,c)}}}break;case"textarea":Pt(e,i);break;case"select":t=i.value,t!=null&&ft(e,!!i.multiple,t,!1)}},pa=Nc,fa=Br;var U0={usingClientEntryPoint:!1,Events:[yo,ui,Ba,Qi,Zi,Nc]},Oo={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},H0={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ya(e),e===null?null:e.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||F0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ss.isDisabled&&Ss.supportsFiber)try{ba=Ss.inject(H0),zn=Ss}catch{}}return Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U0,Ot.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vc(t))throw Error(o(200));return B0(e,t,null,i)},Ot.createRoot=function(e,t){if(!Vc(e))throw Error(o(299));var i=!1,a="",c=If;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Wc(e,1,!1,null,null,i,!1,a,c),e[Vn]=t.current,go(e.nodeType===8?e.parentNode:e),new Hc(t)},Ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=ya(t),e=e===null?null:e.stateNode,e},Ot.flushSync=function(e){return Br(e)},Ot.hydrate=function(e,t,i){if(!ks(t))throw Error(o(200));return Cs(null,e,t,!0,i)},Ot.hydrateRoot=function(e,t,i){if(!Vc(e))throw Error(o(405));var a=i!=null&&i.hydratedSources||null,c=!1,d="",h=If;if(i!=null&&(i.unstable_strictMode===!0&&(c=!0),i.identifierPrefix!==void 0&&(d=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),t=Rf(t,null,e,1,i??null,c,!1,d,h),e[Vn]=t.current,go(e),a)for(e=0;e<a.length;e++)i=a[e],c=i._getVersion,c=c(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,c]:t.mutableSourceEagerHydrationData.push(i,c);return new bs(t)},Ot.render=function(e,t,i){if(!ks(t))throw Error(o(200));return Cs(null,e,t,!1,i)},Ot.unmountComponentAtNode=function(e){if(!ks(e))throw Error(o(40));return e._reactRootContainer?(Br(function(){Cs(null,null,e,!1,function(){e._reactRootContainer=null,e[Vn]=null})}),!0):!1},Ot.unstable_batchedUpdates=Nc,Ot.unstable_renderSubtreeIntoContainer=function(e,t,i,a){if(!ks(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Cs(e,t,i,!1,a)},Ot.version="18.3.1-next-f1338f8080-20240426",Ot}var jf;function eh(){if(jf)return Kc.exports;jf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Kc.exports=Q0(),Kc.exports}var Bf;function Z0(){if(Bf)return Es;Bf=1;var n=eh();return Es.createRoot=n.createRoot,Es.hydrateRoot=n.hydrateRoot,Es}var J0=Z0();const ev=Qr(J0),Xo={black:"#000",white:"#fff"},Ei={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},Ti={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},Pi={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},Ri={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},Mi={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},$o={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},tv={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function Qo(n){let r="https://mui.com/production-error/?code="+n;for(let o=1;o<arguments.length;o+=1)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified MUI error #"+n+"; visit "+r+" for the full message."}const nv=Object.freeze(Object.defineProperty({__proto__:null,default:Qo},Symbol.toStringTag,{value:"Module"})),$i="$$material";function R(){return R=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var s in o)({}).hasOwnProperty.call(o,s)&&(n[s]=o[s])}return n},R.apply(null,arguments)}function be(n,r){if(n==null)return{};var o={};for(var s in n)if({}.hasOwnProperty.call(n,s)){if(r.indexOf(s)!==-1)continue;o[s]=n[s]}return o}function rv(n){if(n.sheet)return n.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===n)return document.styleSheets[r]}function iv(n){var r=document.createElement("style");return r.setAttribute("data-emotion",n.key),n.nonce!==void 0&&r.setAttribute("nonce",n.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var ov=function(){function n(o){var s=this;this._insertTag=function(l){var u;s.tags.length===0?s.insertionPoint?u=s.insertionPoint.nextSibling:s.prepend?u=s.container.firstChild:u=s.before:u=s.tags[s.tags.length-1].nextSibling,s.container.insertBefore(l,u),s.tags.push(l)},this.isSpeedy=o.speedy===void 0?!0:o.speedy,this.tags=[],this.ctr=0,this.nonce=o.nonce,this.key=o.key,this.container=o.container,this.prepend=o.prepend,this.insertionPoint=o.insertionPoint,this.before=null}var r=n.prototype;return r.hydrate=function(s){s.forEach(this._insertTag)},r.insert=function(s){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(iv(this));var l=this.tags[this.tags.length-1];if(this.isSpeedy){var u=rv(l);try{u.insertRule(s,u.cssRules.length)}catch{}}else l.appendChild(document.createTextNode(s));this.ctr++},r.flush=function(){this.tags.forEach(function(s){var l;return(l=s.parentNode)==null?void 0:l.removeChild(s)}),this.tags=[],this.ctr=0},n}(),kt="-ms-",Ds="-moz-",Me="-webkit-",th="comm",Mu="rule",Iu="decl",av="@import",nh="@keyframes",sv="@layer",lv=Math.abs,Ks=String.fromCharCode,cv=Object.assign;function uv(n,r){return gt(n,0)^45?(((r<<2^gt(n,0))<<2^gt(n,1))<<2^gt(n,2))<<2^gt(n,3):0}function rh(n){return n.trim()}function dv(n,r){return(n=r.exec(n))?n[0]:n}function Ie(n,r,o){return n.replace(r,o)}function pu(n,r){return n.indexOf(r)}function gt(n,r){return n.charCodeAt(r)|0}function Zo(n,r,o){return n.slice(r,o)}function Nn(n){return n.length}function zu(n){return n.length}function Ts(n,r){return r.push(n),n}function pv(n,r){return n.map(r).join("")}var Ys=1,Ni=1,ih=0,Lt=0,at=0,Ui="";function Xs(n,r,o,s,l,u,p){return{value:n,root:r,parent:o,type:s,props:l,children:u,line:Ys,column:Ni,length:p,return:""}}function No(n,r){return cv(Xs("",null,null,"",null,null,0),n,{length:-n.length},r)}function fv(){return at}function mv(){return at=Lt>0?gt(Ui,--Lt):0,Ni--,at===10&&(Ni=1,Ys--),at}function qt(){return at=Lt<ih?gt(Ui,Lt++):0,Ni++,at===10&&(Ni=1,Ys++),at}function Ln(){return gt(Ui,Lt)}function Os(){return Lt}function ia(n,r){return Zo(Ui,n,r)}function Jo(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function oh(n){return Ys=Ni=1,ih=Nn(Ui=n),Lt=0,[]}function ah(n){return Ui="",n}function As(n){return rh(ia(Lt-1,fu(n===91?n+2:n===40?n+1:n)))}function hv(n){for(;(at=Ln())&&at<33;)qt();return Jo(n)>2||Jo(at)>3?"":" "}function gv(n,r){for(;--r&&qt()&&!(at<48||at>102||at>57&&at<65||at>70&&at<97););return ia(n,Os()+(r<6&&Ln()==32&&qt()==32))}function fu(n){for(;qt();)switch(at){case n:return Lt;case 34:case 39:n!==34&&n!==39&&fu(at);break;case 40:n===41&&fu(n);break;case 92:qt();break}return Lt}function vv(n,r){for(;qt()&&n+at!==57;)if(n+at===84&&Ln()===47)break;return"/*"+ia(r,Lt-1)+"*"+Ks(n===47?n:qt())}function xv(n){for(;!Jo(Ln());)qt();return ia(n,Lt)}function yv(n){return ah($s("",null,null,null,[""],n=oh(n),0,[0],n))}function $s(n,r,o,s,l,u,p,f,m){for(var g=0,v=0,y=p,k=0,M=0,C=0,x=1,I=1,_=1,W=0,O="",$=l,S=u,F=s,w=O;I;)switch(C=W,W=qt()){case 40:if(C!=108&&gt(w,y-1)==58){pu(w+=Ie(As(W),"&","&\f"),"&\f")!=-1&&(_=-1);break}case 34:case 39:case 91:w+=As(W);break;case 9:case 10:case 13:case 32:w+=hv(C);break;case 92:w+=gv(Os()-1,7);continue;case 47:switch(Ln()){case 42:case 47:Ts(wv(vv(qt(),Os()),r,o),m);break;default:w+="/"}break;case 123*x:f[g++]=Nn(w)*_;case 125*x:case 59:case 0:switch(W){case 0:case 125:I=0;case 59+v:_==-1&&(w=Ie(w,/\f/g,"")),M>0&&Nn(w)-y&&Ts(M>32?Wf(w+";",s,o,y-1):Wf(Ie(w," ","")+";",s,o,y-2),m);break;case 59:w+=";";default:if(Ts(F=Ff(w,r,o,g,v,l,f,O,$=[],S=[],y),u),W===123)if(v===0)$s(w,r,F,F,$,u,y,f,S);else switch(k===99&&gt(w,3)===110?100:k){case 100:case 108:case 109:case 115:$s(n,F,F,s&&Ts(Ff(n,F,F,0,0,l,f,O,l,$=[],y),S),l,S,y,f,s?$:S);break;default:$s(w,F,F,F,[""],S,0,f,S)}}g=v=M=0,x=_=1,O=w="",y=p;break;case 58:y=1+Nn(w),M=C;default:if(x<1){if(W==123)--x;else if(W==125&&x++==0&&mv()==125)continue}switch(w+=Ks(W),W*x){case 38:_=v>0?1:(w+="\f",-1);break;case 44:f[g++]=(Nn(w)-1)*_,_=1;break;case 64:Ln()===45&&(w+=As(qt())),k=Ln(),v=y=Nn(O=w+=xv(Os())),W++;break;case 45:C===45&&Nn(w)==2&&(x=0)}}return u}function Ff(n,r,o,s,l,u,p,f,m,g,v){for(var y=l-1,k=l===0?u:[""],M=zu(k),C=0,x=0,I=0;C<s;++C)for(var _=0,W=Zo(n,y+1,y=lv(x=p[C])),O=n;_<M;++_)(O=rh(x>0?k[_]+" "+W:Ie(W,/&\f/g,k[_])))&&(m[I++]=O);return Xs(n,r,o,l===0?Mu:f,m,g,v)}function wv(n,r,o){return Xs(n,r,o,th,Ks(fv()),Zo(n,2,-2),0)}function Wf(n,r,o,s){return Xs(n,r,o,Iu,Zo(n,0,s),Zo(n,s+1,-1),s)}function _i(n,r){for(var o="",s=zu(n),l=0;l<s;l++)o+=r(n[l],l,n,r)||"";return o}function bv(n,r,o,s){switch(n.type){case sv:if(n.children.length)break;case av:case Iu:return n.return=n.return||n.value;case th:return"";case nh:return n.return=n.value+"{"+_i(n.children,s)+"}";case Mu:n.value=n.props.join(",")}return Nn(o=_i(n.children,s))?n.return=n.value+"{"+o+"}":""}function kv(n){var r=zu(n);return function(o,s,l,u){for(var p="",f=0;f<r;f++)p+=n[f](o,s,l,u)||"";return p}}function Cv(n){return function(r){r.root||(r=r.return)&&n(r)}}function sh(n){var r=Object.create(null);return function(o){return r[o]===void 0&&(r[o]=n(o)),r[o]}}var Sv=function(r,o,s){for(var l=0,u=0;l=u,u=Ln(),l===38&&u===12&&(o[s]=1),!Jo(u);)qt();return ia(r,Lt)},Ev=function(r,o){var s=-1,l=44;do switch(Jo(l)){case 0:l===38&&Ln()===12&&(o[s]=1),r[s]+=Sv(Lt-1,o,s);break;case 2:r[s]+=As(l);break;case 4:if(l===44){r[++s]=Ln()===58?"&\f":"",o[s]=r[s].length;break}default:r[s]+=Ks(l)}while(l=qt());return r},Tv=function(r,o){return ah(Ev(oh(r),o))},Uf=new WeakMap,Pv=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var o=r.value,s=r.parent,l=r.column===s.column&&r.line===s.line;s.type!=="rule";)if(s=s.parent,!s)return;if(!(r.props.length===1&&o.charCodeAt(0)!==58&&!Uf.get(s))&&!l){Uf.set(r,!0);for(var u=[],p=Tv(o,u),f=s.props,m=0,g=0;m<p.length;m++)for(var v=0;v<f.length;v++,g++)r.props[g]=u[m]?p[m].replace(/&\f/g,f[v]):f[v]+" "+p[m]}}},Rv=function(r){if(r.type==="decl"){var o=r.value;o.charCodeAt(0)===108&&o.charCodeAt(2)===98&&(r.return="",r.value="")}};function lh(n,r){switch(uv(n,r)){case 5103:return Me+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Me+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+n+Ds+n+kt+n+n;case 6828:case 4268:return Me+n+kt+n+n;case 6165:return Me+n+kt+"flex-"+n+n;case 5187:return Me+n+Ie(n,/(\w+).+(:[^]+)/,Me+"box-$1$2"+kt+"flex-$1$2")+n;case 5443:return Me+n+kt+"flex-item-"+Ie(n,/flex-|-self/,"")+n;case 4675:return Me+n+kt+"flex-line-pack"+Ie(n,/align-content|flex-|-self/,"")+n;case 5548:return Me+n+kt+Ie(n,"shrink","negative")+n;case 5292:return Me+n+kt+Ie(n,"basis","preferred-size")+n;case 6060:return Me+"box-"+Ie(n,"-grow","")+Me+n+kt+Ie(n,"grow","positive")+n;case 4554:return Me+Ie(n,/([^-])(transform)/g,"$1"+Me+"$2")+n;case 6187:return Ie(Ie(Ie(n,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),n,"")+n;case 5495:case 3959:return Ie(n,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return Ie(Ie(n,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+kt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Me+n+n;case 4095:case 3583:case 4068:case 2532:return Ie(n,/(.+)-inline(.+)/,Me+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Nn(n)-1-r>6)switch(gt(n,r+1)){case 109:if(gt(n,r+4)!==45)break;case 102:return Ie(n,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+Ds+(gt(n,r+3)==108?"$3":"$2-$3"))+n;case 115:return~pu(n,"stretch")?lh(Ie(n,"stretch","fill-available"),r)+n:n}break;case 4949:if(gt(n,r+1)!==115)break;case 6444:switch(gt(n,Nn(n)-3-(~pu(n,"!important")&&10))){case 107:return Ie(n,":",":"+Me)+n;case 101:return Ie(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Me+(gt(n,14)===45?"inline-":"")+"box$3$1"+Me+"$2$3$1"+kt+"$2box$3")+n}break;case 5936:switch(gt(n,r+11)){case 114:return Me+n+kt+Ie(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Me+n+kt+Ie(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Me+n+kt+Ie(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return Me+n+kt+n+n}return n}var Mv=function(r,o,s,l){if(r.length>-1&&!r.return)switch(r.type){case Iu:r.return=lh(r.value,r.length);break;case nh:return _i([No(r,{value:Ie(r.value,"@","@"+Me)})],l);case Mu:if(r.length)return pv(r.props,function(u){switch(dv(u,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return _i([No(r,{props:[Ie(u,/:(read-\w+)/,":"+Ds+"$1")]})],l);case"::placeholder":return _i([No(r,{props:[Ie(u,/:(plac\w+)/,":"+Me+"input-$1")]}),No(r,{props:[Ie(u,/:(plac\w+)/,":"+Ds+"$1")]}),No(r,{props:[Ie(u,/:(plac\w+)/,kt+"input-$1")]})],l)}return""})}},Iv=[Mv],ch=function(r){var o=r.key;if(o==="css"){var s=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(s,function(x){var I=x.getAttribute("data-emotion");I.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var l=r.stylisPlugins||Iv,u={},p,f=[];p=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+o+' "]'),function(x){for(var I=x.getAttribute("data-emotion").split(" "),_=1;_<I.length;_++)u[I[_]]=!0;f.push(x)});var m,g=[Pv,Rv];{var v,y=[bv,Cv(function(x){v.insert(x)})],k=kv(g.concat(l,y)),M=function(I){return _i(yv(I),k)};m=function(I,_,W,O){v=W,M(I?I+"{"+_.styles+"}":_.styles),O&&(C.inserted[_.name]=!0)}}var C={key:o,sheet:new ov({key:o,container:p,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:u,registered:{},insert:m};return C.sheet.hydrate(f),C},Qc={exports:{}},ze={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf;function zv(){if(Hf)return ze;Hf=1;var n=typeof Symbol=="function"&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,s=n?Symbol.for("react.fragment"):60107,l=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,p=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,m=n?Symbol.for("react.async_mode"):60111,g=n?Symbol.for("react.concurrent_mode"):60111,v=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,k=n?Symbol.for("react.suspense_list"):60120,M=n?Symbol.for("react.memo"):60115,C=n?Symbol.for("react.lazy"):60116,x=n?Symbol.for("react.block"):60121,I=n?Symbol.for("react.fundamental"):60117,_=n?Symbol.for("react.responder"):60118,W=n?Symbol.for("react.scope"):60119;function O(S){if(typeof S=="object"&&S!==null){var F=S.$$typeof;switch(F){case r:switch(S=S.type,S){case m:case g:case s:case u:case l:case y:return S;default:switch(S=S&&S.$$typeof,S){case f:case v:case C:case M:case p:return S;default:return F}}case o:return F}}}function $(S){return O(S)===g}return ze.AsyncMode=m,ze.ConcurrentMode=g,ze.ContextConsumer=f,ze.ContextProvider=p,ze.Element=r,ze.ForwardRef=v,ze.Fragment=s,ze.Lazy=C,ze.Memo=M,ze.Portal=o,ze.Profiler=u,ze.StrictMode=l,ze.Suspense=y,ze.isAsyncMode=function(S){return $(S)||O(S)===m},ze.isConcurrentMode=$,ze.isContextConsumer=function(S){return O(S)===f},ze.isContextProvider=function(S){return O(S)===p},ze.isElement=function(S){return typeof S=="object"&&S!==null&&S.$$typeof===r},ze.isForwardRef=function(S){return O(S)===v},ze.isFragment=function(S){return O(S)===s},ze.isLazy=function(S){return O(S)===C},ze.isMemo=function(S){return O(S)===M},ze.isPortal=function(S){return O(S)===o},ze.isProfiler=function(S){return O(S)===u},ze.isStrictMode=function(S){return O(S)===l},ze.isSuspense=function(S){return O(S)===y},ze.isValidElementType=function(S){return typeof S=="string"||typeof S=="function"||S===s||S===g||S===u||S===l||S===y||S===k||typeof S=="object"&&S!==null&&(S.$$typeof===C||S.$$typeof===M||S.$$typeof===p||S.$$typeof===f||S.$$typeof===v||S.$$typeof===I||S.$$typeof===_||S.$$typeof===W||S.$$typeof===x)},ze.typeOf=O,ze}var Vf;function _v(){return Vf||(Vf=1,Qc.exports=zv()),Qc.exports}var Zc,qf;function Ov(){if(qf)return Zc;qf=1;var n=_v(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};u[n.ForwardRef]=s,u[n.Memo]=l;function p(C){return n.isMemo(C)?l:u[C.$$typeof]||r}var f=Object.defineProperty,m=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,k=Object.prototype;function M(C,x,I){if(typeof x!="string"){if(k){var _=y(x);_&&_!==k&&M(C,_,I)}var W=m(x);g&&(W=W.concat(g(x)));for(var O=p(C),$=p(x),S=0;S<W.length;++S){var F=W[S];if(!o[F]&&!(I&&I[F])&&!($&&$[F])&&!(O&&O[F])){var w=v(x,F);try{f(C,F,w)}catch{}}}}return C}return Zc=M,Zc}Ov();var Av=!0;function uh(n,r,o){var s="";return o.split(" ").forEach(function(l){n[l]!==void 0?r.push(n[l]+";"):l&&(s+=l+" ")}),s}var _u=function(r,o,s){var l=r.key+"-"+o.name;(s===!1||Av===!1)&&r.registered[l]===void 0&&(r.registered[l]=o.styles)},Ou=function(r,o,s){_u(r,o,s);var l=r.key+"-"+o.name;if(r.inserted[o.name]===void 0){var u=o;do r.insert(o===u?"."+l:"",u,r.sheet,!0),u=u.next;while(u!==void 0)}};function $v(n){for(var r=0,o,s=0,l=n.length;l>=4;++s,l-=4)o=n.charCodeAt(s)&255|(n.charCodeAt(++s)&255)<<8|(n.charCodeAt(++s)&255)<<16|(n.charCodeAt(++s)&255)<<24,o=(o&65535)*1540483477+((o>>>16)*59797<<16),o^=o>>>24,r=(o&65535)*1540483477+((o>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(l){case 3:r^=(n.charCodeAt(s+2)&255)<<16;case 2:r^=(n.charCodeAt(s+1)&255)<<8;case 1:r^=n.charCodeAt(s)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Nv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Dv=/[A-Z]|^ms/g,Lv=/_EMO_([^_]+?)_([^]*?)_EMO_/g,dh=function(r){return r.charCodeAt(1)===45},Gf=function(r){return r!=null&&typeof r!="boolean"},Jc=sh(function(n){return dh(n)?n:n.replace(Dv,"-$&").toLowerCase()}),Kf=function(r,o){switch(r){case"animation":case"animationName":if(typeof o=="string")return o.replace(Lv,function(s,l,u){return Dn={name:l,styles:u,next:Dn},l})}return Nv[r]!==1&&!dh(r)&&typeof o=="number"&&o!==0?o+"px":o};function ea(n,r,o){if(o==null)return"";var s=o;if(s.__emotion_styles!==void 0)return s;switch(typeof o){case"boolean":return"";case"object":{var l=o;if(l.anim===1)return Dn={name:l.name,styles:l.styles,next:Dn},l.name;var u=o;if(u.styles!==void 0){var p=u.next;if(p!==void 0)for(;p!==void 0;)Dn={name:p.name,styles:p.styles,next:Dn},p=p.next;var f=u.styles+";";return f}return jv(n,r,o)}case"function":{if(n!==void 0){var m=Dn,g=o(n);return Dn=m,ea(n,r,g)}break}}var v=o;if(r==null)return v;var y=r[v];return y!==void 0?y:v}function jv(n,r,o){var s="";if(Array.isArray(o))for(var l=0;l<o.length;l++)s+=ea(n,r,o[l])+";";else for(var u in o){var p=o[u];if(typeof p!="object"){var f=p;r!=null&&r[f]!==void 0?s+=u+"{"+r[f]+"}":Gf(f)&&(s+=Jc(u)+":"+Kf(u,f)+";")}else if(Array.isArray(p)&&typeof p[0]=="string"&&(r==null||r[p[0]]===void 0))for(var m=0;m<p.length;m++)Gf(p[m])&&(s+=Jc(u)+":"+Kf(u,p[m])+";");else{var g=ea(n,r,p);switch(u){case"animation":case"animationName":{s+=Jc(u)+":"+g+";";break}default:s+=u+"{"+g+"}"}}}return s}var Yf=/label:\s*([^\s;{]+)\s*(;|$)/g,Dn;function Qs(n,r,o){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var s=!0,l="";Dn=void 0;var u=n[0];if(u==null||u.raw===void 0)s=!1,l+=ea(o,r,u);else{var p=u;l+=p[0]}for(var f=1;f<n.length;f++)if(l+=ea(o,r,n[f]),s){var m=u;l+=m[f]}Yf.lastIndex=0;for(var g="",v;(v=Yf.exec(l))!==null;)g+="-"+v[1];var y=$v(l)+g;return{name:y,styles:l,next:Dn}}var Bv=function(r){return r()},ph=du.useInsertionEffect?du.useInsertionEffect:!1,fh=ph||Bv,Xf=ph||E.useLayoutEffect,mh=E.createContext(typeof HTMLElement<"u"?ch({key:"css"}):null),Fv=mh.Provider,Au=function(r){return E.forwardRef(function(o,s){var l=E.useContext(mh);return r(o,l,s)})},Hi=E.createContext({}),$u={}.hasOwnProperty,mu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Wv=function(r,o){var s={};for(var l in o)$u.call(o,l)&&(s[l]=o[l]);return s[mu]=r,s},Uv=function(r){var o=r.cache,s=r.serialized,l=r.isStringTag;return _u(o,s,l),fh(function(){return Ou(o,s,l)}),null},Hv=Au(function(n,r,o){var s=n.css;typeof s=="string"&&r.registered[s]!==void 0&&(s=r.registered[s]);var l=n[mu],u=[s],p="";typeof n.className=="string"?p=uh(r.registered,u,n.className):n.className!=null&&(p=n.className+" ");var f=Qs(u,void 0,E.useContext(Hi));p+=r.key+"-"+f.name;var m={};for(var g in n)$u.call(n,g)&&g!=="css"&&g!==mu&&(m[g]=n[g]);return m.className=p,o&&(m.ref=o),E.createElement(E.Fragment,null,E.createElement(Uv,{cache:r,serialized:f,isStringTag:typeof l=="string"}),E.createElement(l,m))}),Vv=Hv,Qf=function(r,o){var s=arguments;if(o==null||!$u.call(o,"css"))return E.createElement.apply(void 0,s);var l=s.length,u=new Array(l);u[0]=Vv,u[1]=Wv(r,o);for(var p=2;p<l;p++)u[p]=s[p];return E.createElement.apply(null,u)};(function(n){var r;r||(r=n.JSX||(n.JSX={}))})(Qf||(Qf={}));var qv=Au(function(n,r){var o=n.styles,s=Qs([o],void 0,E.useContext(Hi)),l=E.useRef();return Xf(function(){var u=r.key+"-global",p=new r.sheet.constructor({key:u,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),f=!1,m=document.querySelector('style[data-emotion="'+u+" "+s.name+'"]');return r.sheet.tags.length&&(p.before=r.sheet.tags[0]),m!==null&&(f=!0,m.setAttribute("data-emotion",u),p.hydrate([m])),l.current=[p,f],function(){p.flush()}},[r]),Xf(function(){var u=l.current,p=u[0],f=u[1];if(f){u[1]=!1;return}if(s.next!==void 0&&Ou(r,s.next,!0),p.tags.length){var m=p.tags[p.tags.length-1].nextElementSibling;p.before=m,p.flush()}r.insert("",s,p,!1)},[r,s.name]),null});function hh(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return Qs(r)}function Zs(){var n=hh.apply(void 0,arguments),r="animation-"+n.name;return{name:r,styles:"@keyframes "+r+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Gv=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Kv=sh(function(n){return Gv.test(n)||n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)<91}),Yv=Kv,Xv=function(r){return r!=="theme"},Zf=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?Yv:Xv},Jf=function(r,o,s){var l;if(o){var u=o.shouldForwardProp;l=r.__emotion_forwardProp&&u?function(p){return r.__emotion_forwardProp(p)&&u(p)}:u}return typeof l!="function"&&s&&(l=r.__emotion_forwardProp),l},Qv=function(r){var o=r.cache,s=r.serialized,l=r.isStringTag;return _u(o,s,l),fh(function(){return Ou(o,s,l)}),null},Zv=function n(r,o){var s=r.__emotion_real===r,l=s&&r.__emotion_base||r,u,p;o!==void 0&&(u=o.label,p=o.target);var f=Jf(r,o,s),m=f||Zf(l),g=!m("as");return function(){var v=arguments,y=s&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(u!==void 0&&y.push("label:"+u+";"),v[0]==null||v[0].raw===void 0)y.push.apply(y,v);else{var k=v[0];y.push(k[0]);for(var M=v.length,C=1;C<M;C++)y.push(v[C],k[C])}var x=Au(function(I,_,W){var O=g&&I.as||l,$="",S=[],F=I;if(I.theme==null){F={};for(var w in I)F[w]=I[w];F.theme=E.useContext(Hi)}typeof I.className=="string"?$=uh(_.registered,S,I.className):I.className!=null&&($=I.className+" ");var N=Qs(y.concat(S),_.registered,F);$+=_.key+"-"+N.name,p!==void 0&&($+=" "+p);var U=g&&f===void 0?Zf(O):m,L={};for(var q in I)g&&q==="as"||U(q)&&(L[q]=I[q]);return L.className=$,W&&(L.ref=W),E.createElement(E.Fragment,null,E.createElement(Qv,{cache:_,serialized:N,isStringTag:typeof O=="string"}),E.createElement(O,L))});return x.displayName=u!==void 0?u:"Styled("+(typeof l=="string"?l:l.displayName||l.name||"Component")+")",x.defaultProps=r.defaultProps,x.__emotion_real=x,x.__emotion_base=l,x.__emotion_styles=y,x.__emotion_forwardProp=f,Object.defineProperty(x,"toString",{value:function(){return"."+p}}),x.withComponent=function(I,_){var W=n(I,R({},o,_,{shouldForwardProp:Jf(x,_,!0)}));return W.apply(void 0,y)},x}},Jv=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],hu=Zv.bind(null);Jv.forEach(function(n){hu[n]=hu(n)});let gu;typeof document=="object"&&(gu=ch({key:"css",prepend:!0}));function ex(n){const{injectFirst:r,children:o}=n;return r&&gu?H.jsx(Fv,{value:gu,children:o}):o}function tx(n){return n==null||Object.keys(n).length===0}function gh(n){const{styles:r,defaultTheme:o={}}=n,s=typeof r=="function"?l=>r(tx(l)?o:l):r;return H.jsx(qv,{styles:s})}function vh(n,r){return hu(n,r)}const nx=(n,r)=>{Array.isArray(n.__emotion_styles)&&(n.__emotion_styles=r(n.__emotion_styles))},rx=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:gh,StyledEngineProvider:ex,ThemeContext:Hi,css:hh,default:vh,internal_processStyles:nx,keyframes:Zs},Symbol.toStringTag,{value:"Module"}));function Sr(n){if(typeof n!="object"||n===null)return!1;const r=Object.getPrototypeOf(n);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function xh(n){if(E.isValidElement(n)||!Sr(n))return n;const r={};return Object.keys(n).forEach(o=>{r[o]=xh(n[o])}),r}function jn(n,r,o={clone:!0}){const s=o.clone?R({},n):n;return Sr(n)&&Sr(r)&&Object.keys(r).forEach(l=>{E.isValidElement(r[l])?s[l]=r[l]:Sr(r[l])&&Object.prototype.hasOwnProperty.call(n,l)&&Sr(n[l])?s[l]=jn(n[l],r[l],o):o.clone?s[l]=Sr(r[l])?xh(r[l]):r[l]:s[l]=r[l]}),s}const ix=Object.freeze(Object.defineProperty({__proto__:null,default:jn,isPlainObject:Sr},Symbol.toStringTag,{value:"Module"})),ox=["values","unit","step"],ax=n=>{const r=Object.keys(n).map(o=>({key:o,val:n[o]}))||[];return r.sort((o,s)=>o.val-s.val),r.reduce((o,s)=>R({},o,{[s.key]:s.val}),{})};function yh(n){const{values:r={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:o="px",step:s=5}=n,l=be(n,ox),u=ax(r),p=Object.keys(u);function f(k){return`@media (min-width:${typeof r[k]=="number"?r[k]:k}${o})`}function m(k){return`@media (max-width:${(typeof r[k]=="number"?r[k]:k)-s/100}${o})`}function g(k,M){const C=p.indexOf(M);return`@media (min-width:${typeof r[k]=="number"?r[k]:k}${o}) and (max-width:${(C!==-1&&typeof r[p[C]]=="number"?r[p[C]]:M)-s/100}${o})`}function v(k){return p.indexOf(k)+1<p.length?g(k,p[p.indexOf(k)+1]):f(k)}function y(k){const M=p.indexOf(k);return M===0?f(p[1]):M===p.length-1?m(p[M]):g(k,p[p.indexOf(k)+1]).replace("@media","@media not all and")}return R({keys:p,values:u,up:f,down:m,between:g,only:v,not:y,unit:o},l)}const sx={borderRadius:4};function qo(n,r){return r?jn(n,r,{clone:!1}):n}const Nu={xs:0,sm:600,md:900,lg:1200,xl:1536},em={keys:["xs","sm","md","lg","xl"],up:n=>`@media (min-width:${Nu[n]}px)`};function un(n,r,o){const s=n.theme||{};if(Array.isArray(r)){const u=s.breakpoints||em;return r.reduce((p,f,m)=>(p[u.up(u.keys[m])]=o(r[m]),p),{})}if(typeof r=="object"){const u=s.breakpoints||em;return Object.keys(r).reduce((p,f)=>{if(Object.keys(u.values||Nu).indexOf(f)!==-1){const m=u.up(f);p[m]=o(r[f],f)}else{const m=f;p[m]=r[m]}return p},{})}return o(r)}function lx(n={}){var r;return((r=n.keys)==null?void 0:r.reduce((s,l)=>{const u=n.up(l);return s[u]={},s},{}))||{}}function cx(n,r){return n.reduce((o,s)=>{const l=o[s];return(!l||Object.keys(l).length===0)&&delete o[s],o},r)}function ux(n,r){if(typeof n!="object")return{};const o={},s=Object.keys(r);return Array.isArray(n)?s.forEach((l,u)=>{u<n.length&&(o[l]=!0)}):s.forEach(l=>{n[l]!=null&&(o[l]=!0)}),o}function Js({values:n,breakpoints:r,base:o}){const s=o||ux(n,r),l=Object.keys(s);if(l.length===0)return n;let u;return l.reduce((p,f,m)=>(Array.isArray(n)?(p[f]=n[m]!=null?n[m]:n[u],u=m):typeof n=="object"?(p[f]=n[f]!=null?n[f]:n[u],u=f):p[f]=n,p),{})}function Ee(n){if(typeof n!="string")throw new Error(Qo(7));return n.charAt(0).toUpperCase()+n.slice(1)}const dx=Object.freeze(Object.defineProperty({__proto__:null,default:Ee},Symbol.toStringTag,{value:"Module"}));function el(n,r,o=!0){if(!r||typeof r!="string")return null;if(n&&n.vars&&o){const s=`vars.${r}`.split(".").reduce((l,u)=>l&&l[u]?l[u]:null,n);if(s!=null)return s}return r.split(".").reduce((s,l)=>s&&s[l]!=null?s[l]:null,n)}function Ls(n,r,o,s=o){let l;return typeof n=="function"?l=n(o):Array.isArray(n)?l=n[o]||s:l=el(n,o)||s,r&&(l=r(l,s,n)),l}function nt(n){const{prop:r,cssProperty:o=n.prop,themeKey:s,transform:l}=n,u=p=>{if(p[r]==null)return null;const f=p[r],m=p.theme,g=el(m,s)||{};return un(p,f,y=>{let k=Ls(g,l,y);return y===k&&typeof y=="string"&&(k=Ls(g,l,`${r}${y==="default"?"":Ee(y)}`,y)),o===!1?k:{[o]:k}})};return u.propTypes={},u.filterProps=[r],u}function px(n){const r={};return o=>(r[o]===void 0&&(r[o]=n(o)),r[o])}const fx={m:"margin",p:"padding"},mx={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},tm={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},hx=px(n=>{if(n.length>2)if(tm[n])n=tm[n];else return[n];const[r,o]=n.split(""),s=fx[r],l=mx[o]||"";return Array.isArray(l)?l.map(u=>s+u):[s+l]}),Du=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Lu=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Du,...Lu];function oa(n,r,o,s){var l;const u=(l=el(n,r,!1))!=null?l:o;return typeof u=="number"?p=>typeof p=="string"?p:u*p:Array.isArray(u)?p=>typeof p=="string"?p:u[p]:typeof u=="function"?u:()=>{}}function wh(n){return oa(n,"spacing",8)}function aa(n,r){if(typeof r=="string"||r==null)return r;const o=Math.abs(r),s=n(o);return r>=0?s:typeof s=="number"?-s:`-${s}`}function gx(n,r){return o=>n.reduce((s,l)=>(s[l]=aa(r,o),s),{})}function vx(n,r,o,s){if(r.indexOf(o)===-1)return null;const l=hx(o),u=gx(l,s),p=n[o];return un(n,p,u)}function bh(n,r){const o=wh(n.theme);return Object.keys(n).map(s=>vx(n,r,s,o)).reduce(qo,{})}function Xe(n){return bh(n,Du)}Xe.propTypes={};Xe.filterProps=Du;function Qe(n){return bh(n,Lu)}Qe.propTypes={};Qe.filterProps=Lu;function xx(n=8){if(n.mui)return n;const r=wh({spacing:n}),o=(...s)=>(s.length===0?[1]:s).map(u=>{const p=r(u);return typeof p=="number"?`${p}px`:p}).join(" ");return o.mui=!0,o}function tl(...n){const r=n.reduce((s,l)=>(l.filterProps.forEach(u=>{s[u]=l}),s),{}),o=s=>Object.keys(s).reduce((l,u)=>r[u]?qo(l,r[u](s)):l,{});return o.propTypes={},o.filterProps=n.reduce((s,l)=>s.concat(l.filterProps),[]),o}function sn(n){return typeof n!="number"?n:`${n}px solid`}function fn(n,r){return nt({prop:n,themeKey:"borders",transform:r})}const yx=fn("border",sn),wx=fn("borderTop",sn),bx=fn("borderRight",sn),kx=fn("borderBottom",sn),Cx=fn("borderLeft",sn),Sx=fn("borderColor"),Ex=fn("borderTopColor"),Tx=fn("borderRightColor"),Px=fn("borderBottomColor"),Rx=fn("borderLeftColor"),Mx=fn("outline",sn),Ix=fn("outlineColor"),nl=n=>{if(n.borderRadius!==void 0&&n.borderRadius!==null){const r=oa(n.theme,"shape.borderRadius",4),o=s=>({borderRadius:aa(r,s)});return un(n,n.borderRadius,o)}return null};nl.propTypes={};nl.filterProps=["borderRadius"];tl(yx,wx,bx,kx,Cx,Sx,Ex,Tx,Px,Rx,nl,Mx,Ix);const rl=n=>{if(n.gap!==void 0&&n.gap!==null){const r=oa(n.theme,"spacing",8),o=s=>({gap:aa(r,s)});return un(n,n.gap,o)}return null};rl.propTypes={};rl.filterProps=["gap"];const il=n=>{if(n.columnGap!==void 0&&n.columnGap!==null){const r=oa(n.theme,"spacing",8),o=s=>({columnGap:aa(r,s)});return un(n,n.columnGap,o)}return null};il.propTypes={};il.filterProps=["columnGap"];const ol=n=>{if(n.rowGap!==void 0&&n.rowGap!==null){const r=oa(n.theme,"spacing",8),o=s=>({rowGap:aa(r,s)});return un(n,n.rowGap,o)}return null};ol.propTypes={};ol.filterProps=["rowGap"];const zx=nt({prop:"gridColumn"}),_x=nt({prop:"gridRow"}),Ox=nt({prop:"gridAutoFlow"}),Ax=nt({prop:"gridAutoColumns"}),$x=nt({prop:"gridAutoRows"}),Nx=nt({prop:"gridTemplateColumns"}),Dx=nt({prop:"gridTemplateRows"}),Lx=nt({prop:"gridTemplateAreas"}),jx=nt({prop:"gridArea"});tl(rl,il,ol,zx,_x,Ox,Ax,$x,Nx,Dx,Lx,jx);function Oi(n,r){return r==="grey"?r:n}const Bx=nt({prop:"color",themeKey:"palette",transform:Oi}),Fx=nt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Oi}),Wx=nt({prop:"backgroundColor",themeKey:"palette",transform:Oi});tl(Bx,Fx,Wx);function Vt(n){return n<=1&&n!==0?`${n*100}%`:n}const Ux=nt({prop:"width",transform:Vt}),ju=n=>{if(n.maxWidth!==void 0&&n.maxWidth!==null){const r=o=>{var s,l;const u=((s=n.theme)==null||(s=s.breakpoints)==null||(s=s.values)==null?void 0:s[o])||Nu[o];return u?((l=n.theme)==null||(l=l.breakpoints)==null?void 0:l.unit)!=="px"?{maxWidth:`${u}${n.theme.breakpoints.unit}`}:{maxWidth:u}:{maxWidth:Vt(o)}};return un(n,n.maxWidth,r)}return null};ju.filterProps=["maxWidth"];const Hx=nt({prop:"minWidth",transform:Vt}),Vx=nt({prop:"height",transform:Vt}),qx=nt({prop:"maxHeight",transform:Vt}),Gx=nt({prop:"minHeight",transform:Vt});nt({prop:"size",cssProperty:"width",transform:Vt});nt({prop:"size",cssProperty:"height",transform:Vt});const Kx=nt({prop:"boxSizing"});tl(Ux,ju,Hx,Vx,qx,Gx,Kx);const sa={border:{themeKey:"borders",transform:sn},borderTop:{themeKey:"borders",transform:sn},borderRight:{themeKey:"borders",transform:sn},borderBottom:{themeKey:"borders",transform:sn},borderLeft:{themeKey:"borders",transform:sn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:sn},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:nl},color:{themeKey:"palette",transform:Oi},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Oi},backgroundColor:{themeKey:"palette",transform:Oi},p:{style:Qe},pt:{style:Qe},pr:{style:Qe},pb:{style:Qe},pl:{style:Qe},px:{style:Qe},py:{style:Qe},padding:{style:Qe},paddingTop:{style:Qe},paddingRight:{style:Qe},paddingBottom:{style:Qe},paddingLeft:{style:Qe},paddingX:{style:Qe},paddingY:{style:Qe},paddingInline:{style:Qe},paddingInlineStart:{style:Qe},paddingInlineEnd:{style:Qe},paddingBlock:{style:Qe},paddingBlockStart:{style:Qe},paddingBlockEnd:{style:Qe},m:{style:Xe},mt:{style:Xe},mr:{style:Xe},mb:{style:Xe},ml:{style:Xe},mx:{style:Xe},my:{style:Xe},margin:{style:Xe},marginTop:{style:Xe},marginRight:{style:Xe},marginBottom:{style:Xe},marginLeft:{style:Xe},marginX:{style:Xe},marginY:{style:Xe},marginInline:{style:Xe},marginInlineStart:{style:Xe},marginInlineEnd:{style:Xe},marginBlock:{style:Xe},marginBlockStart:{style:Xe},marginBlockEnd:{style:Xe},displayPrint:{cssProperty:!1,transform:n=>({"@media print":{display:n}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:rl},rowGap:{style:ol},columnGap:{style:il},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Vt},maxWidth:{style:ju},minWidth:{transform:Vt},height:{transform:Vt},maxHeight:{transform:Vt},minHeight:{transform:Vt},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function Yx(...n){const r=n.reduce((s,l)=>s.concat(Object.keys(l)),[]),o=new Set(r);return n.every(s=>o.size===Object.keys(s).length)}function Xx(n,r){return typeof n=="function"?n(r):n}function kh(){function n(o,s,l,u){const p={[o]:s,theme:l},f=u[o];if(!f)return{[o]:s};const{cssProperty:m=o,themeKey:g,transform:v,style:y}=f;if(s==null)return null;if(g==="typography"&&s==="inherit")return{[o]:s};const k=el(l,g)||{};return y?y(p):un(p,s,C=>{let x=Ls(k,v,C);return C===x&&typeof C=="string"&&(x=Ls(k,v,`${o}${C==="default"?"":Ee(C)}`,C)),m===!1?x:{[m]:x}})}function r(o){var s;const{sx:l,theme:u={}}=o||{};if(!l)return null;const p=(s=u.unstable_sxConfig)!=null?s:sa;function f(m){let g=m;if(typeof m=="function")g=m(u);else if(typeof m!="object")return m;if(!g)return null;const v=lx(u.breakpoints),y=Object.keys(v);let k=v;return Object.keys(g).forEach(M=>{const C=Xx(g[M],u);if(C!=null)if(typeof C=="object")if(p[M])k=qo(k,n(M,C,u,p));else{const x=un({theme:u},C,I=>({[M]:I}));Yx(x,C)?k[M]=r({sx:C,theme:u}):k=qo(k,x)}else k=qo(k,n(M,C,u,p))}),cx(y,k)}return Array.isArray(l)?l.map(f):f(l)}return r}const la=kh();la.filterProps=["sx"];function Ch(n,r){const o=this;return o.vars&&typeof o.getColorSchemeSelector=="function"?{[o.getColorSchemeSelector(n).replace(/(\[[^\]]+\])/,"*:where($1)")]:r}:o.palette.mode===n?r:{}}const Qx=["breakpoints","palette","spacing","shape"];function Bu(n={},...r){const{breakpoints:o={},palette:s={},spacing:l,shape:u={}}=n,p=be(n,Qx),f=yh(o),m=xx(l);let g=jn({breakpoints:f,direction:"ltr",components:{},palette:R({mode:"light"},s),spacing:m,shape:R({},sx,u)},p);return g.applyStyles=Ch,g=r.reduce((v,y)=>jn(v,y),g),g.unstable_sxConfig=R({},sa,p==null?void 0:p.unstable_sxConfig),g.unstable_sx=function(y){return la({sx:y,theme:this})},g}const Zx=Object.freeze(Object.defineProperty({__proto__:null,default:Bu,private_createBreakpoints:yh,unstable_applyStyles:Ch},Symbol.toStringTag,{value:"Module"}));function Jx(n){return Object.keys(n).length===0}function Fu(n=null){const r=E.useContext(Hi);return!r||Jx(r)?n:r}const ey=Bu();function Wu(n=ey){return Fu(n)}function ty({styles:n,themeId:r,defaultTheme:o={}}){const s=Wu(o),l=typeof n=="function"?n(r&&s[r]||s):n;return H.jsx(gh,{styles:l})}const ny=["sx"],ry=n=>{var r,o;const s={systemProps:{},otherProps:{}},l=(r=n==null||(o=n.theme)==null?void 0:o.unstable_sxConfig)!=null?r:sa;return Object.keys(n).forEach(u=>{l[u]?s.systemProps[u]=n[u]:s.otherProps[u]=n[u]}),s};function al(n){const{sx:r}=n,o=be(n,ny),{systemProps:s,otherProps:l}=ry(o);let u;return Array.isArray(r)?u=[s,...r]:typeof r=="function"?u=(...p)=>{const f=r(...p);return Sr(f)?R({},s,f):s}:u=R({},s,r),R({},l,{sx:u})}const iy=Object.freeze(Object.defineProperty({__proto__:null,default:la,extendSxProp:al,unstable_createStyleFunctionSx:kh,unstable_defaultSxConfig:sa},Symbol.toStringTag,{value:"Module"})),nm=n=>n,oy=()=>{let n=nm;return{configure(r){n=r},generate(r){return n(r)},reset(){n=nm}}},Uu=oy();function Sh(n){var r,o,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var l=n.length;for(r=0;r<l;r++)n[r]&&(o=Sh(n[r]))&&(s&&(s+=" "),s+=o)}else for(o in n)n[o]&&(s&&(s+=" "),s+=o);return s}function ke(){for(var n,r,o=0,s="",l=arguments.length;o<l;o++)(n=arguments[o])&&(r=Sh(n))&&(s&&(s+=" "),s+=r);return s}const ay=["className","component"];function sy(n={}){const{themeId:r,defaultTheme:o,defaultClassName:s="MuiBox-root",generateClassName:l}=n,u=vh("div",{shouldForwardProp:f=>f!=="theme"&&f!=="sx"&&f!=="as"})(la);return E.forwardRef(function(m,g){const v=Wu(o),y=al(m),{className:k,component:M="div"}=y,C=be(y,ay);return H.jsx(u,R({as:M,ref:g,className:ke(k,l?l(s):s),theme:r&&v[r]||v},C))})}const ly={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Ue(n,r,o="Mui"){const s=ly[r];return s?`${o}-${s}`:`${Uu.generate(n)}-${r}`}function De(n,r,o="Mui"){const s={};return r.forEach(l=>{s[l]=Ue(n,l,o)}),s}var eu={exports:{}},$e={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function cy(){if(rm)return $e;rm=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),p=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),k=Symbol.for("react.view_transition"),M=Symbol.for("react.client.reference");function C(x){if(typeof x=="object"&&x!==null){var I=x.$$typeof;switch(I){case n:switch(x=x.type,x){case o:case l:case s:case m:case g:case k:return x;default:switch(x=x&&x.$$typeof,x){case p:case f:case y:case v:return x;case u:return x;default:return I}}case r:return I}}}return $e.ContextConsumer=u,$e.ContextProvider=p,$e.Element=n,$e.ForwardRef=f,$e.Fragment=o,$e.Lazy=y,$e.Memo=v,$e.Portal=r,$e.Profiler=l,$e.StrictMode=s,$e.Suspense=m,$e.SuspenseList=g,$e.isContextConsumer=function(x){return C(x)===u},$e.isContextProvider=function(x){return C(x)===p},$e.isElement=function(x){return typeof x=="object"&&x!==null&&x.$$typeof===n},$e.isForwardRef=function(x){return C(x)===f},$e.isFragment=function(x){return C(x)===o},$e.isLazy=function(x){return C(x)===y},$e.isMemo=function(x){return C(x)===v},$e.isPortal=function(x){return C(x)===r},$e.isProfiler=function(x){return C(x)===l},$e.isStrictMode=function(x){return C(x)===s},$e.isSuspense=function(x){return C(x)===m},$e.isSuspenseList=function(x){return C(x)===g},$e.isValidElementType=function(x){return typeof x=="string"||typeof x=="function"||x===o||x===l||x===s||x===m||x===g||typeof x=="object"&&x!==null&&(x.$$typeof===y||x.$$typeof===v||x.$$typeof===p||x.$$typeof===u||x.$$typeof===f||x.$$typeof===M||x.getModuleId!==void 0)},$e.typeOf=C,$e}var im;function uy(){return im||(im=1,eu.exports=cy()),eu.exports}var om=uy();const dy=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function Eh(n){const r=`${n}`.match(dy);return r&&r[1]||""}function Th(n,r=""){return n.displayName||n.name||Eh(n)||r}function am(n,r,o){const s=Th(r);return n.displayName||(s!==""?`${o}(${s})`:o)}function py(n){if(n!=null){if(typeof n=="string")return n;if(typeof n=="function")return Th(n,"Component");if(typeof n=="object")switch(n.$$typeof){case om.ForwardRef:return am(n,n.render,"ForwardRef");case om.Memo:return am(n,n.type,"memo");default:return}}}const fy=Object.freeze(Object.defineProperty({__proto__:null,default:py,getFunctionName:Eh},Symbol.toStringTag,{value:"Module"}));function js(n,r){const o=R({},r);return Object.keys(n).forEach(s=>{if(s.toString().match(/^(components|slots)$/))o[s]=R({},n[s],o[s]);else if(s.toString().match(/^(componentsProps|slotProps)$/)){const l=n[s]||{},u=r[s];o[s]={},!u||!Object.keys(u)?o[s]=l:!l||!Object.keys(l)?o[s]=u:(o[s]=R({},u),Object.keys(l).forEach(p=>{o[s][p]=js(l[p],u[p])}))}else o[s]===void 0&&(o[s]=n[s])}),o}function my(n){const{theme:r,name:o,props:s}=n;return!r||!r.components||!r.components[o]||!r.components[o].defaultProps?s:js(r.components[o].defaultProps,s)}const Pr=typeof window<"u"?E.useLayoutEffect:E.useEffect;function hy(n,r,o,s,l){const[u,p]=E.useState(()=>l&&o?o(n).matches:s?s(n).matches:r);return Pr(()=>{let f=!0;if(!o)return;const m=o(n),g=()=>{f&&p(m.matches)};return g(),m.addListener(g),()=>{f=!1,m.removeListener(g)}},[n,o]),u}const Ph=E.useSyncExternalStore;function gy(n,r,o,s,l){const u=E.useCallback(()=>r,[r]),p=E.useMemo(()=>{if(l&&o)return()=>o(n).matches;if(s!==null){const{matches:v}=s(n);return()=>v}return u},[u,n,s,l,o]),[f,m]=E.useMemo(()=>{if(o===null)return[u,()=>()=>{}];const v=o(n);return[()=>v.matches,y=>(v.addListener(y),()=>{v.removeListener(y)})]},[u,o,n]);return Ph(m,f,p)}function vy(n,r={}){const o=Fu(),s=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:l=!1,matchMedia:u=s?window.matchMedia:null,ssrMatchMedia:p=null,noSsr:f=!1}=my({name:"MuiUseMediaQuery",props:r,theme:o});let m=typeof n=="function"?n(o):n;return m=m.replace(/^@media( ?)/m,""),(Ph!==void 0?gy:hy)(m,l,u,p,f)}function xy(n,r=Number.MIN_SAFE_INTEGER,o=Number.MAX_SAFE_INTEGER){return Math.max(r,Math.min(n,o))}const yy=Object.freeze(Object.defineProperty({__proto__:null,default:xy},Symbol.toStringTag,{value:"Module"}));function vu(...n){return n.reduce((r,o)=>o==null?r:function(...l){r.apply(this,l),o.apply(this,l)},()=>{})}function Rh(n,r=166){let o;function s(...l){const u=()=>{n.apply(this,l)};clearTimeout(o),o=setTimeout(u,r)}return s.clear=()=>{clearTimeout(o)},s}function wy(n,r){return()=>null}function by(n,r){var o,s;return E.isValidElement(n)&&r.indexOf((o=n.type.muiName)!=null?o:(s=n.type)==null||(s=s._payload)==null||(s=s.value)==null?void 0:s.muiName)!==-1}function $t(n){return n&&n.ownerDocument||document}function Vi(n){return $t(n).defaultView||window}function ky(n,r){return()=>null}function Bs(n,r){typeof n=="function"?n(r):n&&(n.current=r)}let sm=0;function Cy(n){const[r,o]=E.useState(n),s=n||r;return E.useEffect(()=>{r==null&&(sm+=1,o(`mui-${sm}`))},[r]),s}const lm=du.useId;function Hu(n){if(lm!==void 0){const r=lm();return n??r}return Cy(n)}function Sy(n,r,o,s,l){return null}function Mh({controlled:n,default:r,name:o,state:s="value"}){const{current:l}=E.useRef(n!==void 0),[u,p]=E.useState(r),f=l?n:u,m=E.useCallback(g=>{l||p(g)},[]);return[f,m]}function ln(n){const r=E.useRef(n);return Pr(()=>{r.current=n}),E.useRef((...o)=>(0,r.current)(...o)).current}function Tt(...n){return E.useMemo(()=>n.every(r=>r==null)?null:r=>{n.forEach(o=>{Bs(o,r)})},n)}const cm={};function Ey(n,r){const o=E.useRef(cm);return o.current===cm&&(o.current=n(r)),o}const Ty=[];function Py(n){E.useEffect(n,Ty)}class ca{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new ca}start(r,o){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,o()},r)}}function Gr(){const n=Ey(ca.create).current;return Py(n.disposeEffect),n}let sl=!0,xu=!1;const Ry=new ca,My={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Iy(n){const{type:r,tagName:o}=n;return!!(o==="INPUT"&&My[r]&&!n.readOnly||o==="TEXTAREA"&&!n.readOnly||n.isContentEditable)}function zy(n){n.metaKey||n.altKey||n.ctrlKey||(sl=!0)}function tu(){sl=!1}function _y(){this.visibilityState==="hidden"&&xu&&(sl=!0)}function Oy(n){n.addEventListener("keydown",zy,!0),n.addEventListener("mousedown",tu,!0),n.addEventListener("pointerdown",tu,!0),n.addEventListener("touchstart",tu,!0),n.addEventListener("visibilitychange",_y,!0)}function Ay(n){const{target:r}=n;try{return r.matches(":focus-visible")}catch{}return sl||Iy(r)}function Vu(){const n=E.useCallback(l=>{l!=null&&Oy(l.ownerDocument)},[]),r=E.useRef(!1);function o(){return r.current?(xu=!0,Ry.start(100,()=>{xu=!1}),r.current=!1,!0):!1}function s(l){return Ay(l)?(r.current=!0,!0):!1}return{isFocusVisibleRef:r,onFocus:s,onBlur:o,ref:n}}function $y(n){const r=n.documentElement.clientWidth;return Math.abs(window.innerWidth-r)}function Ge(n,r,o=void 0){const s={};return Object.keys(n).forEach(l=>{s[l]=n[l].reduce((u,p)=>{if(p){const f=r(p);f!==""&&u.push(f),o&&o[p]&&u.push(o[p])}return u},[]).join(" ")}),s}function Ny(n){return typeof n=="string"}function Ho(n,r,o){return n===void 0||Ny(n)?r:R({},r,{ownerState:R({},r.ownerState,o)})}function Fs(n,r=[]){if(n===void 0)return{};const o={};return Object.keys(n).filter(s=>s.match(/^on[A-Z]/)&&typeof n[s]=="function"&&!r.includes(s)).forEach(s=>{o[s]=n[s]}),o}function um(n){if(n===void 0)return{};const r={};return Object.keys(n).filter(o=>!(o.match(/^on[A-Z]/)&&typeof n[o]=="function")).forEach(o=>{r[o]=n[o]}),r}function Dy(n){const{getSlotProps:r,additionalProps:o,externalSlotProps:s,externalForwardedProps:l,className:u}=n;if(!r){const M=ke(o==null?void 0:o.className,u,l==null?void 0:l.className,s==null?void 0:s.className),C=R({},o==null?void 0:o.style,l==null?void 0:l.style,s==null?void 0:s.style),x=R({},o,l,s);return M.length>0&&(x.className=M),Object.keys(C).length>0&&(x.style=C),{props:x,internalRef:void 0}}const p=Fs(R({},l,s)),f=um(s),m=um(l),g=r(p),v=ke(g==null?void 0:g.className,o==null?void 0:o.className,u,l==null?void 0:l.className,s==null?void 0:s.className),y=R({},g==null?void 0:g.style,o==null?void 0:o.style,l==null?void 0:l.style,s==null?void 0:s.style),k=R({},g,o,m,f);return v.length>0&&(k.className=v),Object.keys(y).length>0&&(k.style=y),{props:k,internalRef:g.ref}}function Ly(n,r,o){return typeof n=="function"?n(r,o):n}const jy=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function Ws(n){var r;const{elementType:o,externalSlotProps:s,ownerState:l,skipResolvingSlotProps:u=!1}=n,p=be(n,jy),f=u?{}:Ly(s,l),{props:m,internalRef:g}=Dy(R({},p,{externalSlotProps:f})),v=Tt(g,f==null?void 0:f.ref,(r=n.additionalProps)==null?void 0:r.ref);return Ho(o,R({},m,{ref:v}),l)}function Zr(n){if(parseInt(E.version,10)>=19){var r;return(n==null||(r=n.props)==null?void 0:r.ref)||null}return(n==null?void 0:n.ref)||null}const Ih=E.createContext(null);function zh(){return E.useContext(Ih)}const By=typeof Symbol=="function"&&Symbol.for,Fy=By?Symbol.for("mui.nested"):"__THEME_NESTED__";function Wy(n,r){return typeof r=="function"?r(n):R({},n,r)}function Uy(n){const{children:r,theme:o}=n,s=zh(),l=E.useMemo(()=>{const u=s===null?o:Wy(s,o);return u!=null&&(u[Fy]=s!==null),u},[o,s]);return H.jsx(Ih.Provider,{value:l,children:r})}const Hy=["value"],_h=E.createContext();function Vy(n){let{value:r}=n,o=be(n,Hy);return H.jsx(_h.Provider,R({value:r??!0},o))}const Oh=()=>{const n=E.useContext(_h);return n??!1},Ah=E.createContext(void 0);function qy({value:n,children:r}){return H.jsx(Ah.Provider,{value:n,children:r})}function Gy(n){const{theme:r,name:o,props:s}=n;if(!r||!r.components||!r.components[o])return s;const l=r.components[o];return l.defaultProps?js(l.defaultProps,s):!l.styleOverrides&&!l.variants?js(l,s):s}function Ky({props:n,name:r}){const o=E.useContext(Ah);return Gy({props:n,name:r,theme:{components:o}})}const dm={};function pm(n,r,o,s=!1){return E.useMemo(()=>{const l=n&&r[n]||r;if(typeof o=="function"){const u=o(l),p=n?R({},r,{[n]:u}):u;return s?()=>p:p}return n?R({},r,{[n]:o}):R({},r,o)},[n,r,o,s])}function Yy(n){const{children:r,theme:o,themeId:s}=n,l=Fu(dm),u=zh()||dm,p=pm(s,l,o),f=pm(s,u,o,!0),m=p.direction==="rtl";return H.jsx(Uy,{theme:f,children:H.jsx(Hi.Provider,{value:p,children:H.jsx(Vy,{value:m,children:H.jsx(qy,{value:p==null?void 0:p.components,children:r})})})})}function Xy(n,r){return R({toolbar:{minHeight:56,[n.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[n.up("sm")]:{minHeight:64}}},r)}var qe={},nu={exports:{}},fm;function ll(){return fm||(fm=1,function(n){function r(o){return o&&o.__esModule?o:{default:o}}n.exports=r,n.exports.__esModule=!0,n.exports.default=n.exports}(nu)),nu.exports}const Qy=er(nv),Zy=er(yy);var mm;function Jy(){if(mm)return qe;mm=1;var n=ll();Object.defineProperty(qe,"__esModule",{value:!0}),qe.alpha=C,qe.blend=F,qe.colorChannel=void 0,qe.darken=I,qe.decomposeColor=p,qe.emphasize=$,qe.getContrastRatio=M,qe.getLuminance=k,qe.hexToRgb=l,qe.hslToRgb=y,qe.lighten=W,qe.private_safeAlpha=x,qe.private_safeColorChannel=void 0,qe.private_safeDarken=_,qe.private_safeEmphasize=S,qe.private_safeLighten=O,qe.recomposeColor=g,qe.rgbToHex=v;var r=n(Qy),o=n(Zy);function s(w,N=0,U=1){return(0,o.default)(w,N,U)}function l(w){w=w.slice(1);const N=new RegExp(`.{1,${w.length>=6?2:1}}`,"g");let U=w.match(N);return U&&U[0].length===1&&(U=U.map(L=>L+L)),U?`rgb${U.length===4?"a":""}(${U.map((L,q)=>q<3?parseInt(L,16):Math.round(parseInt(L,16)/255*1e3)/1e3).join(", ")})`:""}function u(w){const N=w.toString(16);return N.length===1?`0${N}`:N}function p(w){if(w.type)return w;if(w.charAt(0)==="#")return p(l(w));const N=w.indexOf("("),U=w.substring(0,N);if(["rgb","rgba","hsl","hsla","color"].indexOf(U)===-1)throw new Error((0,r.default)(9,w));let L=w.substring(N+1,w.length-1),q;if(U==="color"){if(L=L.split(" "),q=L.shift(),L.length===4&&L[3].charAt(0)==="/"&&(L[3]=L[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(q)===-1)throw new Error((0,r.default)(10,q))}else L=L.split(",");return L=L.map(ie=>parseFloat(ie)),{type:U,values:L,colorSpace:q}}const f=w=>{const N=p(w);return N.values.slice(0,3).map((U,L)=>N.type.indexOf("hsl")!==-1&&L!==0?`${U}%`:U).join(" ")};qe.colorChannel=f;const m=(w,N)=>{try{return f(w)}catch{return w}};qe.private_safeColorChannel=m;function g(w){const{type:N,colorSpace:U}=w;let{values:L}=w;return N.indexOf("rgb")!==-1?L=L.map((q,ie)=>ie<3?parseInt(q,10):q):N.indexOf("hsl")!==-1&&(L[1]=`${L[1]}%`,L[2]=`${L[2]}%`),N.indexOf("color")!==-1?L=`${U} ${L.join(" ")}`:L=`${L.join(", ")}`,`${N}(${L})`}function v(w){if(w.indexOf("#")===0)return w;const{values:N}=p(w);return`#${N.map((U,L)=>u(L===3?Math.round(255*U):U)).join("")}`}function y(w){w=p(w);const{values:N}=w,U=N[0],L=N[1]/100,q=N[2]/100,ie=L*Math.min(q,1-q),Q=(Y,J=(Y+U/30)%12)=>q-ie*Math.max(Math.min(J-3,9-J,1),-1);let re="rgb";const ne=[Math.round(Q(0)*255),Math.round(Q(8)*255),Math.round(Q(4)*255)];return w.type==="hsla"&&(re+="a",ne.push(N[3])),g({type:re,values:ne})}function k(w){w=p(w);let N=w.type==="hsl"||w.type==="hsla"?p(y(w)).values:w.values;return N=N.map(U=>(w.type!=="color"&&(U/=255),U<=.03928?U/12.92:((U+.055)/1.055)**2.4)),Number((.2126*N[0]+.7152*N[1]+.0722*N[2]).toFixed(3))}function M(w,N){const U=k(w),L=k(N);return(Math.max(U,L)+.05)/(Math.min(U,L)+.05)}function C(w,N){return w=p(w),N=s(N),(w.type==="rgb"||w.type==="hsl")&&(w.type+="a"),w.type==="color"?w.values[3]=`/${N}`:w.values[3]=N,g(w)}function x(w,N,U){try{return C(w,N)}catch{return w}}function I(w,N){if(w=p(w),N=s(N),w.type.indexOf("hsl")!==-1)w.values[2]*=1-N;else if(w.type.indexOf("rgb")!==-1||w.type.indexOf("color")!==-1)for(let U=0;U<3;U+=1)w.values[U]*=1-N;return g(w)}function _(w,N,U){try{return I(w,N)}catch{return w}}function W(w,N){if(w=p(w),N=s(N),w.type.indexOf("hsl")!==-1)w.values[2]+=(100-w.values[2])*N;else if(w.type.indexOf("rgb")!==-1)for(let U=0;U<3;U+=1)w.values[U]+=(255-w.values[U])*N;else if(w.type.indexOf("color")!==-1)for(let U=0;U<3;U+=1)w.values[U]+=(1-w.values[U])*N;return g(w)}function O(w,N,U){try{return W(w,N)}catch{return w}}function $(w,N=.15){return k(w)>.5?I(w,N):W(w,N)}function S(w,N,U){try{return $(w,N)}catch{return w}}function F(w,N,U,L=1){const q=(ne,Y)=>Math.round((ne**(1/L)*(1-U)+Y**(1/L)*U)**L),ie=p(w),Q=p(N),re=[q(ie.values[0],Q.values[0]),q(ie.values[1],Q.values[1]),q(ie.values[2],Q.values[2])];return g({type:"rgb",values:re})}return qe}var At=Jy();const ew=["mode","contrastThreshold","tonalOffset"],hm={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Xo.white,default:Xo.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},ru={text:{primary:Xo.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Xo.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function gm(n,r,o,s){const l=s.light||s,u=s.dark||s*1.5;n[r]||(n.hasOwnProperty(o)?n[r]=n[o]:r==="light"?n.light=At.lighten(n.main,l):r==="dark"&&(n.dark=At.darken(n.main,u)))}function tw(n="light"){return n==="dark"?{main:Pi[200],light:Pi[50],dark:Pi[400]}:{main:Pi[700],light:Pi[400],dark:Pi[800]}}function nw(n="light"){return n==="dark"?{main:Ti[200],light:Ti[50],dark:Ti[400]}:{main:Ti[500],light:Ti[300],dark:Ti[700]}}function rw(n="light"){return n==="dark"?{main:Ei[500],light:Ei[300],dark:Ei[700]}:{main:Ei[700],light:Ei[400],dark:Ei[800]}}function iw(n="light"){return n==="dark"?{main:Ri[400],light:Ri[300],dark:Ri[700]}:{main:Ri[700],light:Ri[500],dark:Ri[900]}}function ow(n="light"){return n==="dark"?{main:Mi[400],light:Mi[300],dark:Mi[700]}:{main:Mi[800],light:Mi[500],dark:Mi[900]}}function aw(n="light"){return n==="dark"?{main:$o[400],light:$o[300],dark:$o[700]}:{main:"#ed6c02",light:$o[500],dark:$o[900]}}function sw(n){const{mode:r="light",contrastThreshold:o=3,tonalOffset:s=.2}=n,l=be(n,ew),u=n.primary||tw(r),p=n.secondary||nw(r),f=n.error||rw(r),m=n.info||iw(r),g=n.success||ow(r),v=n.warning||aw(r);function y(x){return At.getContrastRatio(x,ru.text.primary)>=o?ru.text.primary:hm.text.primary}const k=({color:x,name:I,mainShade:_=500,lightShade:W=300,darkShade:O=700})=>{if(x=R({},x),!x.main&&x[_]&&(x.main=x[_]),!x.hasOwnProperty("main"))throw new Error(Qo(11,I?` (${I})`:"",_));if(typeof x.main!="string")throw new Error(Qo(12,I?` (${I})`:"",JSON.stringify(x.main)));return gm(x,"light",W,s),gm(x,"dark",O,s),x.contrastText||(x.contrastText=y(x.main)),x},M={dark:ru,light:hm};return jn(R({common:R({},Xo),mode:r,primary:k({color:u,name:"primary"}),secondary:k({color:p,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:k({color:f,name:"error"}),warning:k({color:v,name:"warning"}),info:k({color:m,name:"info"}),success:k({color:g,name:"success"}),grey:tv,contrastThreshold:o,getContrastText:y,augmentColor:k,tonalOffset:s},M[r]),l)}const lw=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function cw(n){return Math.round(n*1e5)/1e5}const vm={textTransform:"uppercase"},xm='"Roboto", "Helvetica", "Arial", sans-serif';function uw(n,r){const o=typeof r=="function"?r(n):r,{fontFamily:s=xm,fontSize:l=14,fontWeightLight:u=300,fontWeightRegular:p=400,fontWeightMedium:f=500,fontWeightBold:m=700,htmlFontSize:g=16,allVariants:v,pxToRem:y}=o,k=be(o,lw),M=l/14,C=y||(_=>`${_/g*M}rem`),x=(_,W,O,$,S)=>R({fontFamily:s,fontWeight:_,fontSize:C(W),lineHeight:O},s===xm?{letterSpacing:`${cw($/W)}em`}:{},S,v),I={h1:x(u,96,1.167,-1.5),h2:x(u,60,1.2,-.5),h3:x(p,48,1.167,0),h4:x(p,34,1.235,.25),h5:x(p,24,1.334,0),h6:x(f,20,1.6,.15),subtitle1:x(p,16,1.75,.15),subtitle2:x(f,14,1.57,.1),body1:x(p,16,1.5,.15),body2:x(p,14,1.43,.15),button:x(f,14,1.75,.4,vm),caption:x(p,12,1.66,.4),overline:x(p,12,2.66,1,vm),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return jn(R({htmlFontSize:g,pxToRem:C,fontFamily:s,fontSize:l,fontWeightLight:u,fontWeightRegular:p,fontWeightMedium:f,fontWeightBold:m},I),k,{clone:!1})}const dw=.2,pw=.14,fw=.12;function We(...n){return[`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${dw})`,`${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${pw})`,`${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${fw})`].join(",")}const mw=["none",We(0,2,1,-1,0,1,1,0,0,1,3,0),We(0,3,1,-2,0,2,2,0,0,1,5,0),We(0,3,3,-2,0,3,4,0,0,1,8,0),We(0,2,4,-1,0,4,5,0,0,1,10,0),We(0,3,5,-1,0,5,8,0,0,1,14,0),We(0,3,5,-1,0,6,10,0,0,1,18,0),We(0,4,5,-2,0,7,10,1,0,2,16,1),We(0,5,5,-3,0,8,10,1,0,3,14,2),We(0,5,6,-3,0,9,12,1,0,3,16,2),We(0,6,6,-3,0,10,14,1,0,4,18,3),We(0,6,7,-4,0,11,15,1,0,4,20,3),We(0,7,8,-4,0,12,17,2,0,5,22,4),We(0,7,8,-4,0,13,19,2,0,5,24,4),We(0,7,9,-4,0,14,21,2,0,5,26,4),We(0,8,9,-5,0,15,22,2,0,6,28,5),We(0,8,10,-5,0,16,24,2,0,6,30,5),We(0,8,11,-5,0,17,26,2,0,6,32,5),We(0,9,11,-5,0,18,28,2,0,7,34,6),We(0,9,12,-6,0,19,29,2,0,7,36,6),We(0,10,13,-6,0,20,31,3,0,8,38,7),We(0,10,13,-6,0,21,33,3,0,8,40,7),We(0,10,14,-6,0,22,35,3,0,8,42,7),We(0,11,14,-7,0,23,36,3,0,9,44,8),We(0,11,15,-7,0,24,38,3,0,9,46,8)],hw=["duration","easing","delay"],gw={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},vw={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function ym(n){return`${Math.round(n)}ms`}function xw(n){if(!n)return 0;const r=n/36;return Math.round((4+15*r**.25+r/5)*10)}function yw(n){const r=R({},gw,n.easing),o=R({},vw,n.duration);return R({getAutoHeightDuration:xw,create:(l=["all"],u={})=>{const{duration:p=o.standard,easing:f=r.easeInOut,delay:m=0}=u;return be(u,hw),(Array.isArray(l)?l:[l]).map(g=>`${g} ${typeof p=="string"?p:ym(p)} ${f} ${typeof m=="string"?m:ym(m)}`).join(",")}},n,{easing:r,duration:o})}const ww={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},bw=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function qu(n={},...r){const{mixins:o={},palette:s={},transitions:l={},typography:u={}}=n,p=be(n,bw);if(n.vars&&n.generateCssVars===void 0)throw new Error(Qo(18));const f=sw(s),m=Bu(n);let g=jn(m,{mixins:Xy(m.breakpoints,o),palette:f,shadows:mw.slice(),typography:uw(f,u),transitions:yw(l),zIndex:R({},ww)});return g=jn(g,p),g=r.reduce((v,y)=>jn(v,y),g),g.unstable_sxConfig=R({},sa,p==null?void 0:p.unstable_sxConfig),g.unstable_sx=function(y){return la({sx:y,theme:this})},g}const Gu=qu();function tr(){const n=Wu(Gu);return n[$i]||n}var Hr={},iu={exports:{}},wm;function kw(){return wm||(wm=1,function(n){function r(){return n.exports=r=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var u in l)({}).hasOwnProperty.call(l,u)&&(o[u]=l[u])}return o},n.exports.__esModule=!0,n.exports.default=n.exports,r.apply(null,arguments)}n.exports=r,n.exports.__esModule=!0,n.exports.default=n.exports}(iu)),iu.exports}var ou={exports:{}},bm;function Cw(){return bm||(bm=1,function(n){function r(o,s){if(o==null)return{};var l={};for(var u in o)if({}.hasOwnProperty.call(o,u)){if(s.indexOf(u)!==-1)continue;l[u]=o[u]}return l}n.exports=r,n.exports.__esModule=!0,n.exports.default=n.exports}(ou)),ou.exports}const $h=er(rx),Sw=er(ix),Ew=er(dx),Tw=er(fy),Pw=er(Zx),Rw=er(iy);var km;function Mw(){if(km)return Hr;km=1;var n=ll();Object.defineProperty(Hr,"__esModule",{value:!0}),Hr.default=$,Hr.shouldForwardProp=C,Hr.systemDefaultTheme=void 0;var r=n(kw()),o=n(Cw()),s=y($h),l=Sw;n(Ew),n(Tw);var u=n(Pw),p=n(Rw);const f=["ownerState"],m=["variants"],g=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function v(S){if(typeof WeakMap!="function")return null;var F=new WeakMap,w=new WeakMap;return(v=function(N){return N?w:F})(S)}function y(S,F){if(S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var w=v(F);if(w&&w.has(S))return w.get(S);var N={__proto__:null},U=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var L in S)if(L!=="default"&&Object.prototype.hasOwnProperty.call(S,L)){var q=U?Object.getOwnPropertyDescriptor(S,L):null;q&&(q.get||q.set)?Object.defineProperty(N,L,q):N[L]=S[L]}return N.default=S,w&&w.set(S,N),N}function k(S){return Object.keys(S).length===0}function M(S){return typeof S=="string"&&S.charCodeAt(0)>96}function C(S){return S!=="ownerState"&&S!=="theme"&&S!=="sx"&&S!=="as"}const x=Hr.systemDefaultTheme=(0,u.default)(),I=S=>S&&S.charAt(0).toLowerCase()+S.slice(1);function _({defaultTheme:S,theme:F,themeId:w}){return k(F)?S:F[w]||F}function W(S){return S?(F,w)=>w[S]:null}function O(S,F){let{ownerState:w}=F,N=(0,o.default)(F,f);const U=typeof S=="function"?S((0,r.default)({ownerState:w},N)):S;if(Array.isArray(U))return U.flatMap(L=>O(L,(0,r.default)({ownerState:w},N)));if(U&&typeof U=="object"&&Array.isArray(U.variants)){const{variants:L=[]}=U;let ie=(0,o.default)(U,m);return L.forEach(Q=>{let re=!0;typeof Q.props=="function"?re=Q.props((0,r.default)({ownerState:w},N,w)):Object.keys(Q.props).forEach(ne=>{(w==null?void 0:w[ne])!==Q.props[ne]&&N[ne]!==Q.props[ne]&&(re=!1)}),re&&(Array.isArray(ie)||(ie=[ie]),ie.push(typeof Q.style=="function"?Q.style((0,r.default)({ownerState:w},N,w)):Q.style))}),ie}return U}function $(S={}){const{themeId:F,defaultTheme:w=x,rootShouldForwardProp:N=C,slotShouldForwardProp:U=C}=S,L=q=>(0,p.default)((0,r.default)({},q,{theme:_((0,r.default)({},q,{defaultTheme:w,themeId:F}))}));return L.__mui_systemSx=!0,(q,ie={})=>{(0,s.internal_processStyles)(q,le=>le.filter(xe=>!(xe!=null&&xe.__mui_systemSx)));const{name:Q,slot:re,skipVariantsResolver:ne,skipSx:Y,overridesResolver:J=W(I(re))}=ie,j=(0,o.default)(ie,g),Z=ne!==void 0?ne:re&&re!=="Root"&&re!=="root"||!1,ee=Y||!1;let z,V=C;re==="Root"||re==="root"?V=N:re?V=U:M(q)&&(V=void 0);const fe=(0,s.default)(q,(0,r.default)({shouldForwardProp:V,label:z},j)),se=le=>typeof le=="function"&&le.__emotion_real!==le||(0,l.isPlainObject)(le)?xe=>O(le,(0,r.default)({},xe,{theme:_({theme:xe.theme,defaultTheme:w,themeId:F})})):le,pe=(le,...xe)=>{let he=se(le);const me=xe?xe.map(se):[];Q&&J&&me.push(rt=>{const Oe=_((0,r.default)({},rt,{defaultTheme:w,themeId:F}));if(!Oe.components||!Oe.components[Q]||!Oe.components[Q].styleOverrides)return null;const Ze=Oe.components[Q].styleOverrides,it={};return Object.entries(Ze).forEach(([Kt,Yt])=>{it[Kt]=O(Yt,(0,r.default)({},rt,{theme:Oe}))}),J(rt,it)}),Q&&!Z&&me.push(rt=>{var Oe;const Ze=_((0,r.default)({},rt,{defaultTheme:w,themeId:F})),it=Ze==null||(Oe=Ze.components)==null||(Oe=Oe[Q])==null?void 0:Oe.variants;return O({variants:it},(0,r.default)({},rt,{theme:Ze}))}),ee||me.push(L);const _e=me.length-xe.length;if(Array.isArray(le)&&_e>0){const rt=new Array(_e).fill("");he=[...le,...rt],he.raw=[...le.raw,...rt]}const Ke=fe(he,...me);return q.muiName&&(Ke.muiName=q.muiName),Ke};return fe.withConfig&&(pe.withConfig=fe.withConfig),pe}}return Hr}var Iw=Mw();const zw=Qr(Iw);function _w(n){return n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"}const Ku=n=>_w(n)&&n!=="classes",Te=zw({themeId:$i,defaultTheme:Gu,rootShouldForwardProp:Ku}),Ow=["theme"];function Aw(n){let{theme:r}=n,o=be(n,Ow);const s=r[$i];let l=s||r;return typeof r!="function"&&(s&&!s.vars?l=R({},s,{vars:null}):r&&!r.vars&&(l=R({},r,{vars:null}))),H.jsx(Yy,R({},o,{themeId:s?$i:void 0,theme:l}))}const Cm=n=>{let r;return n<1?r=5.11916*n**2:r=4.5*Math.log(n+1)+2,(r/100).toFixed(2)};function Be(n){return Ky(n)}function $w(n){return Ue("MuiSvgIcon",n)}De("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Nw=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],Dw=n=>{const{color:r,fontSize:o,classes:s}=n,l={root:["root",r!=="inherit"&&`color${Ee(r)}`,`fontSize${Ee(o)}`]};return Ge(l,$w,s)},Lw=Te("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,o.color!=="inherit"&&r[`color${Ee(o.color)}`],r[`fontSize${Ee(o.fontSize)}`]]}})(({theme:n,ownerState:r})=>{var o,s,l,u,p,f,m,g,v,y,k,M,C;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:r.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(o=n.transitions)==null||(s=o.create)==null?void 0:s.call(o,"fill",{duration:(l=n.transitions)==null||(l=l.duration)==null?void 0:l.shorter}),fontSize:{inherit:"inherit",small:((u=n.typography)==null||(p=u.pxToRem)==null?void 0:p.call(u,20))||"1.25rem",medium:((f=n.typography)==null||(m=f.pxToRem)==null?void 0:m.call(f,24))||"1.5rem",large:((g=n.typography)==null||(v=g.pxToRem)==null?void 0:v.call(g,35))||"2.1875rem"}[r.fontSize],color:(y=(k=(n.vars||n).palette)==null||(k=k[r.color])==null?void 0:k.main)!=null?y:{action:(M=(n.vars||n).palette)==null||(M=M.action)==null?void 0:M.active,disabled:(C=(n.vars||n).palette)==null||(C=C.action)==null?void 0:C.disabled,inherit:void 0}[r.color]}}),yu=E.forwardRef(function(r,o){const s=Be({props:r,name:"MuiSvgIcon"}),{children:l,className:u,color:p="inherit",component:f="svg",fontSize:m="medium",htmlColor:g,inheritViewBox:v=!1,titleAccess:y,viewBox:k="0 0 24 24"}=s,M=be(s,Nw),C=E.isValidElement(l)&&l.type==="svg",x=R({},s,{color:p,component:f,fontSize:m,instanceFontSize:r.fontSize,inheritViewBox:v,viewBox:k,hasSvgAsChild:C}),I={};v||(I.viewBox=k);const _=Dw(x);return H.jsxs(Lw,R({as:f,className:ke(_.root,u),focusable:"false",color:g,"aria-hidden":y?void 0:!0,role:y?"img":void 0,ref:o},I,M,C&&l.props,{ownerState:x,children:[C?l.props.children:l,y?H.jsx("title",{children:y}):null]}))});yu.muiName="SvgIcon";function jw(n,r){function o(s,l){return H.jsx(yu,R({"data-testid":`${r}Icon`,ref:l},s,{children:n}))}return o.muiName=yu.muiName,E.memo(E.forwardRef(o))}const Bw={configure:n=>{Uu.configure(n)}},Fw=Object.freeze(Object.defineProperty({__proto__:null,capitalize:Ee,createChainedFunction:vu,createSvgIcon:jw,debounce:Rh,deprecatedPropType:wy,isMuiElement:by,ownerDocument:$t,ownerWindow:Vi,requirePropFactory:ky,setRef:Bs,unstable_ClassNameGenerator:Bw,unstable_useEnhancedEffect:Pr,unstable_useId:Hu,unsupportedProp:Sy,useControlled:Mh,useEventCallback:ln,useForkRef:Tt,useIsFocusVisible:Vu},Symbol.toStringTag,{value:"Module"}));function wu(n,r){return wu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,s){return o.__proto__=s,o},wu(n,r)}function Nh(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,wu(n,r)}var Dh=eh();const Ps=Qr(Dh),Sm={disabled:!1},Us=En.createContext(null);var Ww=function(r){return r.scrollTop},Vo="unmounted",Vr="exited",qr="entering",zi="entered",bu="exiting",Tn=function(n){Nh(r,n);function r(s,l){var u;u=n.call(this,s,l)||this;var p=l,f=p&&!p.isMounting?s.enter:s.appear,m;return u.appearStatus=null,s.in?f?(m=Vr,u.appearStatus=qr):m=zi:s.unmountOnExit||s.mountOnEnter?m=Vo:m=Vr,u.state={status:m},u.nextCallback=null,u}r.getDerivedStateFromProps=function(l,u){var p=l.in;return p&&u.status===Vo?{status:Vr}:null};var o=r.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(l){var u=null;if(l!==this.props){var p=this.state.status;this.props.in?p!==qr&&p!==zi&&(u=qr):(p===qr||p===zi)&&(u=bu)}this.updateStatus(!1,u)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var l=this.props.timeout,u,p,f;return u=p=f=l,l!=null&&typeof l!="number"&&(u=l.exit,p=l.enter,f=l.appear!==void 0?l.appear:p),{exit:u,enter:p,appear:f}},o.updateStatus=function(l,u){if(l===void 0&&(l=!1),u!==null)if(this.cancelNextCallback(),u===qr){if(this.props.unmountOnExit||this.props.mountOnEnter){var p=this.props.nodeRef?this.props.nodeRef.current:Ps.findDOMNode(this);p&&Ww(p)}this.performEnter(l)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Vr&&this.setState({status:Vo})},o.performEnter=function(l){var u=this,p=this.props.enter,f=this.context?this.context.isMounting:l,m=this.props.nodeRef?[f]:[Ps.findDOMNode(this),f],g=m[0],v=m[1],y=this.getTimeouts(),k=f?y.appear:y.enter;if(!l&&!p||Sm.disabled){this.safeSetState({status:zi},function(){u.props.onEntered(g)});return}this.props.onEnter(g,v),this.safeSetState({status:qr},function(){u.props.onEntering(g,v),u.onTransitionEnd(k,function(){u.safeSetState({status:zi},function(){u.props.onEntered(g,v)})})})},o.performExit=function(){var l=this,u=this.props.exit,p=this.getTimeouts(),f=this.props.nodeRef?void 0:Ps.findDOMNode(this);if(!u||Sm.disabled){this.safeSetState({status:Vr},function(){l.props.onExited(f)});return}this.props.onExit(f),this.safeSetState({status:bu},function(){l.props.onExiting(f),l.onTransitionEnd(p.exit,function(){l.safeSetState({status:Vr},function(){l.props.onExited(f)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(l,u){u=this.setNextCallback(u),this.setState(l,u)},o.setNextCallback=function(l){var u=this,p=!0;return this.nextCallback=function(f){p&&(p=!1,u.nextCallback=null,l(f))},this.nextCallback.cancel=function(){p=!1},this.nextCallback},o.onTransitionEnd=function(l,u){this.setNextCallback(u);var p=this.props.nodeRef?this.props.nodeRef.current:Ps.findDOMNode(this),f=l==null&&!this.props.addEndListener;if(!p||f){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var m=this.props.nodeRef?[this.nextCallback]:[p,this.nextCallback],g=m[0],v=m[1];this.props.addEndListener(g,v)}l!=null&&setTimeout(this.nextCallback,l)},o.render=function(){var l=this.state.status;if(l===Vo)return null;var u=this.props,p=u.children;u.in,u.mountOnEnter,u.unmountOnExit,u.appear,u.enter,u.exit,u.timeout,u.addEndListener,u.onEnter,u.onEntering,u.onEntered,u.onExit,u.onExiting,u.onExited,u.nodeRef;var f=be(u,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return En.createElement(Us.Provider,{value:null},typeof p=="function"?p(l,f):En.cloneElement(En.Children.only(p),f))},r}(En.Component);Tn.contextType=Us;Tn.propTypes={};function Ii(){}Tn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ii,onEntering:Ii,onEntered:Ii,onExit:Ii,onExiting:Ii,onExited:Ii};Tn.UNMOUNTED=Vo;Tn.EXITED=Vr;Tn.ENTERING=qr;Tn.ENTERED=zi;Tn.EXITING=bu;function Uw(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Yu(n,r){var o=function(u){return r&&E.isValidElement(u)?r(u):u},s=Object.create(null);return n&&E.Children.map(n,function(l){return l}).forEach(function(l){s[l.key]=o(l)}),s}function Hw(n,r){n=n||{},r=r||{};function o(v){return v in r?r[v]:n[v]}var s=Object.create(null),l=[];for(var u in n)u in r?l.length&&(s[u]=l,l=[]):l.push(u);var p,f={};for(var m in r){if(s[m])for(p=0;p<s[m].length;p++){var g=s[m][p];f[s[m][p]]=o(g)}f[m]=o(m)}for(p=0;p<l.length;p++)f[l[p]]=o(l[p]);return f}function Kr(n,r,o){return o[r]!=null?o[r]:n.props[r]}function Vw(n,r){return Yu(n.children,function(o){return E.cloneElement(o,{onExited:r.bind(null,o),in:!0,appear:Kr(o,"appear",n),enter:Kr(o,"enter",n),exit:Kr(o,"exit",n)})})}function qw(n,r,o){var s=Yu(n.children),l=Hw(r,s);return Object.keys(l).forEach(function(u){var p=l[u];if(E.isValidElement(p)){var f=u in r,m=u in s,g=r[u],v=E.isValidElement(g)&&!g.props.in;m&&(!f||v)?l[u]=E.cloneElement(p,{onExited:o.bind(null,p),in:!0,exit:Kr(p,"exit",n),enter:Kr(p,"enter",n)}):!m&&f&&!v?l[u]=E.cloneElement(p,{in:!1}):m&&f&&E.isValidElement(g)&&(l[u]=E.cloneElement(p,{onExited:o.bind(null,p),in:g.props.in,exit:Kr(p,"exit",n),enter:Kr(p,"enter",n)}))}}),l}var Gw=Object.values||function(n){return Object.keys(n).map(function(r){return n[r]})},Kw={component:"div",childFactory:function(r){return r}},Xu=function(n){Nh(r,n);function r(s,l){var u;u=n.call(this,s,l)||this;var p=u.handleExited.bind(Uw(u));return u.state={contextValue:{isMounting:!0},handleExited:p,firstRender:!0},u}var o=r.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(l,u){var p=u.children,f=u.handleExited,m=u.firstRender;return{children:m?Vw(l,f):qw(l,p,f),firstRender:!1}},o.handleExited=function(l,u){var p=Yu(this.props.children);l.key in p||(l.props.onExited&&l.props.onExited(u),this.mounted&&this.setState(function(f){var m=R({},f.children);return delete m[l.key],{children:m}}))},o.render=function(){var l=this.props,u=l.component,p=l.childFactory,f=be(l,["component","childFactory"]),m=this.state.contextValue,g=Gw(this.state.children).map(p);return delete f.appear,delete f.enter,delete f.exit,u===null?En.createElement(Us.Provider,{value:m},g):En.createElement(Us.Provider,{value:m},En.createElement(u,f,g))},r}(En.Component);Xu.propTypes={};Xu.defaultProps=Kw;const Qu=n=>n.scrollTop;function Di(n,r){var o,s;const{timeout:l,easing:u,style:p={}}=n;return{duration:(o=p.transitionDuration)!=null?o:typeof l=="number"?l:l[r.mode]||0,easing:(s=p.transitionTimingFunction)!=null?s:typeof u=="object"?u[r.mode]:u,delay:p.transitionDelay}}function Yw(n){return Ue("MuiPaper",n)}De("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Xw=["className","component","elevation","square","variant"],Qw=n=>{const{square:r,elevation:o,variant:s,classes:l}=n,u={root:["root",s,!r&&"rounded",s==="elevation"&&`elevation${o}`]};return Ge(u,Yw,l)},Zw=Te("div",{name:"MuiPaper",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,r[o.variant],!o.square&&r.rounded,o.variant==="elevation"&&r[`elevation${o.elevation}`]]}})(({theme:n,ownerState:r})=>{var o;return R({backgroundColor:(n.vars||n).palette.background.paper,color:(n.vars||n).palette.text.primary,transition:n.transitions.create("box-shadow")},!r.square&&{borderRadius:n.shape.borderRadius},r.variant==="outlined"&&{border:`1px solid ${(n.vars||n).palette.divider}`},r.variant==="elevation"&&R({boxShadow:(n.vars||n).shadows[r.elevation]},!n.vars&&n.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${At.alpha("#fff",Cm(r.elevation))}, ${At.alpha("#fff",Cm(r.elevation))})`},n.vars&&{backgroundImage:(o=n.vars.overlays)==null?void 0:o[r.elevation]}))}),qi=E.forwardRef(function(r,o){const s=Be({props:r,name:"MuiPaper"}),{className:l,component:u="div",elevation:p=1,square:f=!1,variant:m="elevation"}=s,g=be(s,Xw),v=R({},s,{component:u,elevation:p,square:f,variant:m}),y=Qw(v);return H.jsx(Zw,R({as:u,ownerState:v,className:ke(y.root,l),ref:o},g))});function Jw(n){const{className:r,classes:o,pulsate:s=!1,rippleX:l,rippleY:u,rippleSize:p,in:f,onExited:m,timeout:g}=n,[v,y]=E.useState(!1),k=ke(r,o.ripple,o.rippleVisible,s&&o.ripplePulsate),M={width:p,height:p,top:-(p/2)+u,left:-(p/2)+l},C=ke(o.child,v&&o.childLeaving,s&&o.childPulsate);return!f&&!v&&y(!0),E.useEffect(()=>{if(!f&&m!=null){const x=setTimeout(m,g);return()=>{clearTimeout(x)}}},[m,f,g]),H.jsx("span",{className:k,style:M,children:H.jsx("span",{className:C})})}const an=De("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),e1=["center","classes","className"];let cl=n=>n,Em,Tm,Pm,Rm;const ku=550,t1=80,n1=Zs(Em||(Em=cl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),r1=Zs(Tm||(Tm=cl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),i1=Zs(Pm||(Pm=cl`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),o1=Te("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),a1=Te(Jw,{name:"MuiTouchRipple",slot:"Ripple"})(Rm||(Rm=cl`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),an.rippleVisible,n1,ku,({theme:n})=>n.transitions.easing.easeInOut,an.ripplePulsate,({theme:n})=>n.transitions.duration.shorter,an.child,an.childLeaving,r1,ku,({theme:n})=>n.transitions.easing.easeInOut,an.childPulsate,i1,({theme:n})=>n.transitions.easing.easeInOut),s1=E.forwardRef(function(r,o){const s=Be({props:r,name:"MuiTouchRipple"}),{center:l=!1,classes:u={},className:p}=s,f=be(s,e1),[m,g]=E.useState([]),v=E.useRef(0),y=E.useRef(null);E.useEffect(()=>{y.current&&(y.current(),y.current=null)},[m]);const k=E.useRef(!1),M=Gr(),C=E.useRef(null),x=E.useRef(null),I=E.useCallback($=>{const{pulsate:S,rippleX:F,rippleY:w,rippleSize:N,cb:U}=$;g(L=>[...L,H.jsx(a1,{classes:{ripple:ke(u.ripple,an.ripple),rippleVisible:ke(u.rippleVisible,an.rippleVisible),ripplePulsate:ke(u.ripplePulsate,an.ripplePulsate),child:ke(u.child,an.child),childLeaving:ke(u.childLeaving,an.childLeaving),childPulsate:ke(u.childPulsate,an.childPulsate)},timeout:ku,pulsate:S,rippleX:F,rippleY:w,rippleSize:N},v.current)]),v.current+=1,y.current=U},[u]),_=E.useCallback(($={},S={},F=()=>{})=>{const{pulsate:w=!1,center:N=l||S.pulsate,fakeElement:U=!1}=S;if(($==null?void 0:$.type)==="mousedown"&&k.current){k.current=!1;return}($==null?void 0:$.type)==="touchstart"&&(k.current=!0);const L=U?null:x.current,q=L?L.getBoundingClientRect():{width:0,height:0,left:0,top:0};let ie,Q,re;if(N||$===void 0||$.clientX===0&&$.clientY===0||!$.clientX&&!$.touches)ie=Math.round(q.width/2),Q=Math.round(q.height/2);else{const{clientX:ne,clientY:Y}=$.touches&&$.touches.length>0?$.touches[0]:$;ie=Math.round(ne-q.left),Q=Math.round(Y-q.top)}if(N)re=Math.sqrt((2*q.width**2+q.height**2)/3),re%2===0&&(re+=1);else{const ne=Math.max(Math.abs((L?L.clientWidth:0)-ie),ie)*2+2,Y=Math.max(Math.abs((L?L.clientHeight:0)-Q),Q)*2+2;re=Math.sqrt(ne**2+Y**2)}$!=null&&$.touches?C.current===null&&(C.current=()=>{I({pulsate:w,rippleX:ie,rippleY:Q,rippleSize:re,cb:F})},M.start(t1,()=>{C.current&&(C.current(),C.current=null)})):I({pulsate:w,rippleX:ie,rippleY:Q,rippleSize:re,cb:F})},[l,I,M]),W=E.useCallback(()=>{_({},{pulsate:!0})},[_]),O=E.useCallback(($,S)=>{if(M.clear(),($==null?void 0:$.type)==="touchend"&&C.current){C.current(),C.current=null,M.start(0,()=>{O($,S)});return}C.current=null,g(F=>F.length>0?F.slice(1):F),y.current=S},[M]);return E.useImperativeHandle(o,()=>({pulsate:W,start:_,stop:O}),[W,_,O]),H.jsx(o1,R({className:ke(an.root,u.root,p),ref:x},f,{children:H.jsx(Xu,{component:null,exit:!0,children:m})}))});function l1(n){return Ue("MuiButtonBase",n)}const c1=De("MuiButtonBase",["root","disabled","focusVisible"]),u1=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],d1=n=>{const{disabled:r,focusVisible:o,focusVisibleClassName:s,classes:l}=n,p=Ge({root:["root",r&&"disabled",o&&"focusVisible"]},l1,l);return o&&s&&(p.root+=` ${s}`),p},p1=Te("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(n,r)=>r.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${c1.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Lh=E.forwardRef(function(r,o){const s=Be({props:r,name:"MuiButtonBase"}),{action:l,centerRipple:u=!1,children:p,className:f,component:m="button",disabled:g=!1,disableRipple:v=!1,disableTouchRipple:y=!1,focusRipple:k=!1,LinkComponent:M="a",onBlur:C,onClick:x,onContextMenu:I,onDragLeave:_,onFocus:W,onFocusVisible:O,onKeyDown:$,onKeyUp:S,onMouseDown:F,onMouseLeave:w,onMouseUp:N,onTouchEnd:U,onTouchMove:L,onTouchStart:q,tabIndex:ie=0,TouchRippleProps:Q,touchRippleRef:re,type:ne}=s,Y=be(s,u1),J=E.useRef(null),j=E.useRef(null),Z=Tt(j,re),{isFocusVisibleRef:ee,onFocus:z,onBlur:V,ref:fe}=Vu(),[se,pe]=E.useState(!1);g&&se&&pe(!1),E.useImperativeHandle(l,()=>({focusVisible:()=>{pe(!0),J.current.focus()}}),[]);const[le,xe]=E.useState(!1);E.useEffect(()=>{xe(!0)},[]);const he=le&&!v&&!g;E.useEffect(()=>{se&&k&&!v&&le&&j.current.pulsate()},[v,k,se,le]);function me(we,ct,gn=y){return ln(Rn=>(ct&&ct(Rn),!gn&&j.current&&j.current[we](Rn),!0))}const _e=me("start",F),Ke=me("stop",I),rt=me("stop",_),Oe=me("stop",N),Ze=me("stop",we=>{se&&we.preventDefault(),w&&w(we)}),it=me("start",q),Kt=me("stop",U),Yt=me("stop",L),Xt=me("stop",we=>{V(we),ee.current===!1&&pe(!1),C&&C(we)},!1),Pn=ln(we=>{J.current||(J.current=we.currentTarget),z(we),ee.current===!0&&(pe(!0),O&&O(we)),W&&W(we)}),Je=()=>{const we=J.current;return m&&m!=="button"&&!(we.tagName==="A"&&we.href)},ft=E.useRef(!1),jt=ln(we=>{k&&!ft.current&&se&&j.current&&we.key===" "&&(ft.current=!0,j.current.stop(we,()=>{j.current.start(we)})),we.target===we.currentTarget&&Je()&&we.key===" "&&we.preventDefault(),$&&$(we),we.target===we.currentTarget&&Je()&&we.key==="Enter"&&!g&&(we.preventDefault(),x&&x(we))}),mn=ln(we=>{k&&we.key===" "&&j.current&&se&&!we.defaultPrevented&&(ft.current=!1,j.current.stop(we,()=>{j.current.pulsate(we)})),S&&S(we),x&&we.target===we.currentTarget&&Je()&&we.key===" "&&!we.defaultPrevented&&x(we)});let Pt=m;Pt==="button"&&(Y.href||Y.to)&&(Pt=M);const Ct={};Pt==="button"?(Ct.type=ne===void 0?"button":ne,Ct.disabled=g):(!Y.href&&!Y.to&&(Ct.role="button"),g&&(Ct["aria-disabled"]=g));const Qt=Tt(o,fe,J),Zt=R({},s,{centerRipple:u,component:m,disabled:g,disableRipple:v,disableTouchRipple:y,focusRipple:k,tabIndex:ie,focusVisible:se}),hn=d1(Zt);return H.jsxs(p1,R({as:Pt,className:ke(hn.root,f),ownerState:Zt,onBlur:Xt,onClick:x,onContextMenu:Ke,onFocus:Pn,onKeyDown:jt,onKeyUp:mn,onMouseDown:_e,onMouseLeave:Ze,onMouseUp:Oe,onDragLeave:rt,onTouchEnd:Kt,onTouchMove:Yt,onTouchStart:it,ref:Qt,tabIndex:g?-1:ie,type:ne},Ct,Y,{children:[p,he?H.jsx(s1,R({ref:Z,center:u},Q)):null]}))});function f1(n){return Ue("MuiIconButton",n)}const m1=De("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),h1=["edge","children","className","color","disabled","disableFocusRipple","size"],g1=n=>{const{classes:r,disabled:o,color:s,edge:l,size:u}=n,p={root:["root",o&&"disabled",s!=="default"&&`color${Ee(s)}`,l&&`edge${Ee(l)}`,`size${Ee(u)}`]};return Ge(p,f1,r)},v1=Te(Lh,{name:"MuiIconButton",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,o.color!=="default"&&r[`color${Ee(o.color)}`],o.edge&&r[`edge${Ee(o.edge)}`],r[`size${Ee(o.size)}`]]}})(({theme:n,ownerState:r})=>R({textAlign:"center",flex:"0 0 auto",fontSize:n.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(n.vars||n).palette.action.active,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest})},!r.disableRipple&&{"&:hover":{backgroundColor:n.vars?`rgba(${n.vars.palette.action.activeChannel} / ${n.vars.palette.action.hoverOpacity})`:At.alpha(n.palette.action.active,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},r.edge==="start"&&{marginLeft:r.size==="small"?-3:-12},r.edge==="end"&&{marginRight:r.size==="small"?-3:-12}),({theme:n,ownerState:r})=>{var o;const s=(o=(n.vars||n).palette)==null?void 0:o[r.color];return R({},r.color==="inherit"&&{color:"inherit"},r.color!=="inherit"&&r.color!=="default"&&R({color:s==null?void 0:s.main},!r.disableRipple&&{"&:hover":R({},s&&{backgroundColor:n.vars?`rgba(${s.mainChannel} / ${n.vars.palette.action.hoverOpacity})`:At.alpha(s.main,n.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),r.size==="small"&&{padding:5,fontSize:n.typography.pxToRem(18)},r.size==="large"&&{padding:12,fontSize:n.typography.pxToRem(28)},{[`&.${m1.disabled}`]:{backgroundColor:"transparent",color:(n.vars||n).palette.action.disabled}})}),Cu=E.forwardRef(function(r,o){const s=Be({props:r,name:"MuiIconButton"}),{edge:l=!1,children:u,className:p,color:f="default",disabled:m=!1,disableFocusRipple:g=!1,size:v="medium"}=s,y=be(s,h1),k=R({},s,{edge:l,color:f,disabled:m,disableFocusRipple:g,size:v}),M=g1(k);return H.jsx(v1,R({className:ke(M.root,p),centerRipple:!0,focusRipple:!g,disabled:m,ref:o},y,{ownerState:k,children:u}))});function x1(n){return Ue("MuiTypography",n)}De("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const y1=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],w1=n=>{const{align:r,gutterBottom:o,noWrap:s,paragraph:l,variant:u,classes:p}=n,f={root:["root",u,n.align!=="inherit"&&`align${Ee(r)}`,o&&"gutterBottom",s&&"noWrap",l&&"paragraph"]};return Ge(f,x1,p)},b1=Te("span",{name:"MuiTypography",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,o.variant&&r[o.variant],o.align!=="inherit"&&r[`align${Ee(o.align)}`],o.noWrap&&r.noWrap,o.gutterBottom&&r.gutterBottom,o.paragraph&&r.paragraph]}})(({theme:n,ownerState:r})=>R({margin:0},r.variant==="inherit"&&{font:"inherit"},r.variant!=="inherit"&&n.typography[r.variant],r.align!=="inherit"&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})),Mm={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},k1={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},C1=n=>k1[n]||n,Er=E.forwardRef(function(r,o){const s=Be({props:r,name:"MuiTypography"}),l=C1(s.color),u=al(R({},s,{color:l})),{align:p="inherit",className:f,component:m,gutterBottom:g=!1,noWrap:v=!1,paragraph:y=!1,variant:k="body1",variantMapping:M=Mm}=u,C=be(u,y1),x=R({},u,{align:p,color:l,className:f,component:m,gutterBottom:g,noWrap:v,paragraph:y,variant:k,variantMapping:M}),I=m||(y?"p":M[k]||Mm[k])||"span",_=w1(x);return H.jsx(b1,R({as:I,ref:o,ownerState:x,className:ke(_.root,f)},C))});function S1(n){return Ue("MuiAppBar",n)}De("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const E1=["className","color","enableColorOnDark","position"],T1=n=>{const{color:r,position:o,classes:s}=n,l={root:["root",`color${Ee(r)}`,`position${Ee(o)}`]};return Ge(l,S1,s)},Rs=(n,r)=>n?`${n==null?void 0:n.replace(")","")}, ${r})`:r,P1=Te(qi,{name:"MuiAppBar",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,r[`position${Ee(o.position)}`],r[`color${Ee(o.color)}`]]}})(({theme:n,ownerState:r})=>{const o=n.palette.mode==="light"?n.palette.grey[100]:n.palette.grey[900];return R({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},r.position==="fixed"&&{position:"fixed",zIndex:(n.vars||n).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},r.position==="absolute"&&{position:"absolute",zIndex:(n.vars||n).zIndex.appBar,top:0,left:"auto",right:0},r.position==="sticky"&&{position:"sticky",zIndex:(n.vars||n).zIndex.appBar,top:0,left:"auto",right:0},r.position==="static"&&{position:"static"},r.position==="relative"&&{position:"relative"},!n.vars&&R({},r.color==="default"&&{backgroundColor:o,color:n.palette.getContrastText(o)},r.color&&r.color!=="default"&&r.color!=="inherit"&&r.color!=="transparent"&&{backgroundColor:n.palette[r.color].main,color:n.palette[r.color].contrastText},r.color==="inherit"&&{color:"inherit"},n.palette.mode==="dark"&&!r.enableColorOnDark&&{backgroundColor:null,color:null},r.color==="transparent"&&R({backgroundColor:"transparent",color:"inherit"},n.palette.mode==="dark"&&{backgroundImage:"none"})),n.vars&&R({},r.color==="default"&&{"--AppBar-background":r.enableColorOnDark?n.vars.palette.AppBar.defaultBg:Rs(n.vars.palette.AppBar.darkBg,n.vars.palette.AppBar.defaultBg),"--AppBar-color":r.enableColorOnDark?n.vars.palette.text.primary:Rs(n.vars.palette.AppBar.darkColor,n.vars.palette.text.primary)},r.color&&!r.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":r.enableColorOnDark?n.vars.palette[r.color].main:Rs(n.vars.palette.AppBar.darkBg,n.vars.palette[r.color].main),"--AppBar-color":r.enableColorOnDark?n.vars.palette[r.color].contrastText:Rs(n.vars.palette.AppBar.darkColor,n.vars.palette[r.color].contrastText)},!["inherit","transparent"].includes(r.color)&&{backgroundColor:"var(--AppBar-background)"},{color:r.color==="inherit"?"inherit":"var(--AppBar-color)"},r.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),R1=E.forwardRef(function(r,o){const s=Be({props:r,name:"MuiAppBar"}),{className:l,color:u="primary",enableColorOnDark:p=!1,position:f="fixed"}=s,m=be(s,E1),g=R({},s,{color:u,position:f,enableColorOnDark:p}),v=T1(g);return H.jsx(P1,R({square:!0,component:"header",ownerState:g,elevation:4,className:ke(v.root,l,f==="fixed"&&"mui-fixed"),ref:o},m))});var Do={},Im;function M1(){if(Im)return Do;Im=1,Object.defineProperty(Do,"__esModule",{value:!0}),Do.default=void 0;var n=s(Gs()),r=$h;function o(p){if(typeof WeakMap!="function")return null;var f=new WeakMap,m=new WeakMap;return(o=function(g){return g?m:f})(p)}function s(p,f){if(p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var m=o(f);if(m&&m.has(p))return m.get(p);var g={__proto__:null},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in p)if(y!=="default"&&Object.prototype.hasOwnProperty.call(p,y)){var k=v?Object.getOwnPropertyDescriptor(p,y):null;k&&(k.get||k.set)?Object.defineProperty(g,y,k):g[y]=p[y]}return g.default=p,m&&m.set(p,g),g}function l(p){return Object.keys(p).length===0}function u(p=null){const f=n.useContext(r.ThemeContext);return!f||l(f)?p:f}return Do.default=u,Do}var I1=M1();const z1=Qr(I1);var Nt="top",dn="bottom",pn="right",Dt="left",Zu="auto",ua=[Nt,dn,pn,Dt],Li="start",ta="end",_1="clippingParents",jh="viewport",Lo="popper",O1="reference",zm=ua.reduce(function(n,r){return n.concat([r+"-"+Li,r+"-"+ta])},[]),Bh=[].concat(ua,[Zu]).reduce(function(n,r){return n.concat([r,r+"-"+Li,r+"-"+ta])},[]),A1="beforeRead",$1="read",N1="afterRead",D1="beforeMain",L1="main",j1="afterMain",B1="beforeWrite",F1="write",W1="afterWrite",U1=[A1,$1,N1,D1,L1,j1,B1,F1,W1];function Fn(n){return n?(n.nodeName||"").toLowerCase():null}function Gt(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var r=n.ownerDocument;return r&&r.defaultView||window}return n}function Xr(n){var r=Gt(n).Element;return n instanceof r||n instanceof Element}function cn(n){var r=Gt(n).HTMLElement;return n instanceof r||n instanceof HTMLElement}function Ju(n){if(typeof ShadowRoot>"u")return!1;var r=Gt(n).ShadowRoot;return n instanceof r||n instanceof ShadowRoot}function H1(n){var r=n.state;Object.keys(r.elements).forEach(function(o){var s=r.styles[o]||{},l=r.attributes[o]||{},u=r.elements[o];!cn(u)||!Fn(u)||(Object.assign(u.style,s),Object.keys(l).forEach(function(p){var f=l[p];f===!1?u.removeAttribute(p):u.setAttribute(p,f===!0?"":f)}))})}function V1(n){var r=n.state,o={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(r.elements.popper.style,o.popper),r.styles=o,r.elements.arrow&&Object.assign(r.elements.arrow.style,o.arrow),function(){Object.keys(r.elements).forEach(function(s){var l=r.elements[s],u=r.attributes[s]||{},p=Object.keys(r.styles.hasOwnProperty(s)?r.styles[s]:o[s]),f=p.reduce(function(m,g){return m[g]="",m},{});!cn(l)||!Fn(l)||(Object.assign(l.style,f),Object.keys(u).forEach(function(m){l.removeAttribute(m)}))})}}const q1={name:"applyStyles",enabled:!0,phase:"write",fn:H1,effect:V1,requires:["computeStyles"]};function Bn(n){return n.split("-")[0]}var Yr=Math.max,Hs=Math.min,ji=Math.round;function Su(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(r){return r.brand+"/"+r.version}).join(" "):navigator.userAgent}function Fh(){return!/^((?!chrome|android).)*safari/i.test(Su())}function Bi(n,r,o){r===void 0&&(r=!1),o===void 0&&(o=!1);var s=n.getBoundingClientRect(),l=1,u=1;r&&cn(n)&&(l=n.offsetWidth>0&&ji(s.width)/n.offsetWidth||1,u=n.offsetHeight>0&&ji(s.height)/n.offsetHeight||1);var p=Xr(n)?Gt(n):window,f=p.visualViewport,m=!Fh()&&o,g=(s.left+(m&&f?f.offsetLeft:0))/l,v=(s.top+(m&&f?f.offsetTop:0))/u,y=s.width/l,k=s.height/u;return{width:y,height:k,top:v,right:g+y,bottom:v+k,left:g,x:g,y:v}}function ed(n){var r=Bi(n),o=n.offsetWidth,s=n.offsetHeight;return Math.abs(r.width-o)<=1&&(o=r.width),Math.abs(r.height-s)<=1&&(s=r.height),{x:n.offsetLeft,y:n.offsetTop,width:o,height:s}}function Wh(n,r){var o=r.getRootNode&&r.getRootNode();if(n.contains(r))return!0;if(o&&Ju(o)){var s=r;do{if(s&&n.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function Jn(n){return Gt(n).getComputedStyle(n)}function G1(n){return["table","td","th"].indexOf(Fn(n))>=0}function Rr(n){return((Xr(n)?n.ownerDocument:n.document)||window.document).documentElement}function ul(n){return Fn(n)==="html"?n:n.assignedSlot||n.parentNode||(Ju(n)?n.host:null)||Rr(n)}function _m(n){return!cn(n)||Jn(n).position==="fixed"?null:n.offsetParent}function K1(n){var r=/firefox/i.test(Su()),o=/Trident/i.test(Su());if(o&&cn(n)){var s=Jn(n);if(s.position==="fixed")return null}var l=ul(n);for(Ju(l)&&(l=l.host);cn(l)&&["html","body"].indexOf(Fn(l))<0;){var u=Jn(l);if(u.transform!=="none"||u.perspective!=="none"||u.contain==="paint"||["transform","perspective"].indexOf(u.willChange)!==-1||r&&u.willChange==="filter"||r&&u.filter&&u.filter!=="none")return l;l=l.parentNode}return null}function da(n){for(var r=Gt(n),o=_m(n);o&&G1(o)&&Jn(o).position==="static";)o=_m(o);return o&&(Fn(o)==="html"||Fn(o)==="body"&&Jn(o).position==="static")?r:o||K1(n)||r}function td(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Go(n,r,o){return Yr(n,Hs(r,o))}function Y1(n,r,o){var s=Go(n,r,o);return s>o?o:s}function Uh(){return{top:0,right:0,bottom:0,left:0}}function Hh(n){return Object.assign({},Uh(),n)}function Vh(n,r){return r.reduce(function(o,s){return o[s]=n,o},{})}var X1=function(r,o){return r=typeof r=="function"?r(Object.assign({},o.rects,{placement:o.placement})):r,Hh(typeof r!="number"?r:Vh(r,ua))};function Q1(n){var r,o=n.state,s=n.name,l=n.options,u=o.elements.arrow,p=o.modifiersData.popperOffsets,f=Bn(o.placement),m=td(f),g=[Dt,pn].indexOf(f)>=0,v=g?"height":"width";if(!(!u||!p)){var y=X1(l.padding,o),k=ed(u),M=m==="y"?Nt:Dt,C=m==="y"?dn:pn,x=o.rects.reference[v]+o.rects.reference[m]-p[m]-o.rects.popper[v],I=p[m]-o.rects.reference[m],_=da(u),W=_?m==="y"?_.clientHeight||0:_.clientWidth||0:0,O=x/2-I/2,$=y[M],S=W-k[v]-y[C],F=W/2-k[v]/2+O,w=Go($,F,S),N=m;o.modifiersData[s]=(r={},r[N]=w,r.centerOffset=w-F,r)}}function Z1(n){var r=n.state,o=n.options,s=o.element,l=s===void 0?"[data-popper-arrow]":s;l!=null&&(typeof l=="string"&&(l=r.elements.popper.querySelector(l),!l)||Wh(r.elements.popper,l)&&(r.elements.arrow=l))}const J1={name:"arrow",enabled:!0,phase:"main",fn:Q1,effect:Z1,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Fi(n){return n.split("-")[1]}var eb={top:"auto",right:"auto",bottom:"auto",left:"auto"};function tb(n,r){var o=n.x,s=n.y,l=r.devicePixelRatio||1;return{x:ji(o*l)/l||0,y:ji(s*l)/l||0}}function Om(n){var r,o=n.popper,s=n.popperRect,l=n.placement,u=n.variation,p=n.offsets,f=n.position,m=n.gpuAcceleration,g=n.adaptive,v=n.roundOffsets,y=n.isFixed,k=p.x,M=k===void 0?0:k,C=p.y,x=C===void 0?0:C,I=typeof v=="function"?v({x:M,y:x}):{x:M,y:x};M=I.x,x=I.y;var _=p.hasOwnProperty("x"),W=p.hasOwnProperty("y"),O=Dt,$=Nt,S=window;if(g){var F=da(o),w="clientHeight",N="clientWidth";if(F===Gt(o)&&(F=Rr(o),Jn(F).position!=="static"&&f==="absolute"&&(w="scrollHeight",N="scrollWidth")),F=F,l===Nt||(l===Dt||l===pn)&&u===ta){$=dn;var U=y&&F===S&&S.visualViewport?S.visualViewport.height:F[w];x-=U-s.height,x*=m?1:-1}if(l===Dt||(l===Nt||l===dn)&&u===ta){O=pn;var L=y&&F===S&&S.visualViewport?S.visualViewport.width:F[N];M-=L-s.width,M*=m?1:-1}}var q=Object.assign({position:f},g&&eb),ie=v===!0?tb({x:M,y:x},Gt(o)):{x:M,y:x};if(M=ie.x,x=ie.y,m){var Q;return Object.assign({},q,(Q={},Q[$]=W?"0":"",Q[O]=_?"0":"",Q.transform=(S.devicePixelRatio||1)<=1?"translate("+M+"px, "+x+"px)":"translate3d("+M+"px, "+x+"px, 0)",Q))}return Object.assign({},q,(r={},r[$]=W?x+"px":"",r[O]=_?M+"px":"",r.transform="",r))}function nb(n){var r=n.state,o=n.options,s=o.gpuAcceleration,l=s===void 0?!0:s,u=o.adaptive,p=u===void 0?!0:u,f=o.roundOffsets,m=f===void 0?!0:f,g={placement:Bn(r.placement),variation:Fi(r.placement),popper:r.elements.popper,popperRect:r.rects.popper,gpuAcceleration:l,isFixed:r.options.strategy==="fixed"};r.modifiersData.popperOffsets!=null&&(r.styles.popper=Object.assign({},r.styles.popper,Om(Object.assign({},g,{offsets:r.modifiersData.popperOffsets,position:r.options.strategy,adaptive:p,roundOffsets:m})))),r.modifiersData.arrow!=null&&(r.styles.arrow=Object.assign({},r.styles.arrow,Om(Object.assign({},g,{offsets:r.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:m})))),r.attributes.popper=Object.assign({},r.attributes.popper,{"data-popper-placement":r.placement})}const rb={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:nb,data:{}};var Ms={passive:!0};function ib(n){var r=n.state,o=n.instance,s=n.options,l=s.scroll,u=l===void 0?!0:l,p=s.resize,f=p===void 0?!0:p,m=Gt(r.elements.popper),g=[].concat(r.scrollParents.reference,r.scrollParents.popper);return u&&g.forEach(function(v){v.addEventListener("scroll",o.update,Ms)}),f&&m.addEventListener("resize",o.update,Ms),function(){u&&g.forEach(function(v){v.removeEventListener("scroll",o.update,Ms)}),f&&m.removeEventListener("resize",o.update,Ms)}}const ob={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ib,data:{}};var ab={left:"right",right:"left",bottom:"top",top:"bottom"};function Ns(n){return n.replace(/left|right|bottom|top/g,function(r){return ab[r]})}var sb={start:"end",end:"start"};function Am(n){return n.replace(/start|end/g,function(r){return sb[r]})}function nd(n){var r=Gt(n),o=r.pageXOffset,s=r.pageYOffset;return{scrollLeft:o,scrollTop:s}}function rd(n){return Bi(Rr(n)).left+nd(n).scrollLeft}function lb(n,r){var o=Gt(n),s=Rr(n),l=o.visualViewport,u=s.clientWidth,p=s.clientHeight,f=0,m=0;if(l){u=l.width,p=l.height;var g=Fh();(g||!g&&r==="fixed")&&(f=l.offsetLeft,m=l.offsetTop)}return{width:u,height:p,x:f+rd(n),y:m}}function cb(n){var r,o=Rr(n),s=nd(n),l=(r=n.ownerDocument)==null?void 0:r.body,u=Yr(o.scrollWidth,o.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),p=Yr(o.scrollHeight,o.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0),f=-s.scrollLeft+rd(n),m=-s.scrollTop;return Jn(l||o).direction==="rtl"&&(f+=Yr(o.clientWidth,l?l.clientWidth:0)-u),{width:u,height:p,x:f,y:m}}function id(n){var r=Jn(n),o=r.overflow,s=r.overflowX,l=r.overflowY;return/auto|scroll|overlay|hidden/.test(o+l+s)}function qh(n){return["html","body","#document"].indexOf(Fn(n))>=0?n.ownerDocument.body:cn(n)&&id(n)?n:qh(ul(n))}function Ko(n,r){var o;r===void 0&&(r=[]);var s=qh(n),l=s===((o=n.ownerDocument)==null?void 0:o.body),u=Gt(s),p=l?[u].concat(u.visualViewport||[],id(s)?s:[]):s,f=r.concat(p);return l?f:f.concat(Ko(ul(p)))}function Eu(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function ub(n,r){var o=Bi(n,!1,r==="fixed");return o.top=o.top+n.clientTop,o.left=o.left+n.clientLeft,o.bottom=o.top+n.clientHeight,o.right=o.left+n.clientWidth,o.width=n.clientWidth,o.height=n.clientHeight,o.x=o.left,o.y=o.top,o}function $m(n,r,o){return r===jh?Eu(lb(n,o)):Xr(r)?ub(r,o):Eu(cb(Rr(n)))}function db(n){var r=Ko(ul(n)),o=["absolute","fixed"].indexOf(Jn(n).position)>=0,s=o&&cn(n)?da(n):n;return Xr(s)?r.filter(function(l){return Xr(l)&&Wh(l,s)&&Fn(l)!=="body"}):[]}function pb(n,r,o,s){var l=r==="clippingParents"?db(n):[].concat(r),u=[].concat(l,[o]),p=u[0],f=u.reduce(function(m,g){var v=$m(n,g,s);return m.top=Yr(v.top,m.top),m.right=Hs(v.right,m.right),m.bottom=Hs(v.bottom,m.bottom),m.left=Yr(v.left,m.left),m},$m(n,p,s));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}function Gh(n){var r=n.reference,o=n.element,s=n.placement,l=s?Bn(s):null,u=s?Fi(s):null,p=r.x+r.width/2-o.width/2,f=r.y+r.height/2-o.height/2,m;switch(l){case Nt:m={x:p,y:r.y-o.height};break;case dn:m={x:p,y:r.y+r.height};break;case pn:m={x:r.x+r.width,y:f};break;case Dt:m={x:r.x-o.width,y:f};break;default:m={x:r.x,y:r.y}}var g=l?td(l):null;if(g!=null){var v=g==="y"?"height":"width";switch(u){case Li:m[g]=m[g]-(r[v]/2-o[v]/2);break;case ta:m[g]=m[g]+(r[v]/2-o[v]/2);break}}return m}function na(n,r){r===void 0&&(r={});var o=r,s=o.placement,l=s===void 0?n.placement:s,u=o.strategy,p=u===void 0?n.strategy:u,f=o.boundary,m=f===void 0?_1:f,g=o.rootBoundary,v=g===void 0?jh:g,y=o.elementContext,k=y===void 0?Lo:y,M=o.altBoundary,C=M===void 0?!1:M,x=o.padding,I=x===void 0?0:x,_=Hh(typeof I!="number"?I:Vh(I,ua)),W=k===Lo?O1:Lo,O=n.rects.popper,$=n.elements[C?W:k],S=pb(Xr($)?$:$.contextElement||Rr(n.elements.popper),m,v,p),F=Bi(n.elements.reference),w=Gh({reference:F,element:O,placement:l}),N=Eu(Object.assign({},O,w)),U=k===Lo?N:F,L={top:S.top-U.top+_.top,bottom:U.bottom-S.bottom+_.bottom,left:S.left-U.left+_.left,right:U.right-S.right+_.right},q=n.modifiersData.offset;if(k===Lo&&q){var ie=q[l];Object.keys(L).forEach(function(Q){var re=[pn,dn].indexOf(Q)>=0?1:-1,ne=[Nt,dn].indexOf(Q)>=0?"y":"x";L[Q]+=ie[ne]*re})}return L}function fb(n,r){r===void 0&&(r={});var o=r,s=o.placement,l=o.boundary,u=o.rootBoundary,p=o.padding,f=o.flipVariations,m=o.allowedAutoPlacements,g=m===void 0?Bh:m,v=Fi(s),y=v?f?zm:zm.filter(function(C){return Fi(C)===v}):ua,k=y.filter(function(C){return g.indexOf(C)>=0});k.length===0&&(k=y);var M=k.reduce(function(C,x){return C[x]=na(n,{placement:x,boundary:l,rootBoundary:u,padding:p})[Bn(x)],C},{});return Object.keys(M).sort(function(C,x){return M[C]-M[x]})}function mb(n){if(Bn(n)===Zu)return[];var r=Ns(n);return[Am(n),r,Am(r)]}function hb(n){var r=n.state,o=n.options,s=n.name;if(!r.modifiersData[s]._skip){for(var l=o.mainAxis,u=l===void 0?!0:l,p=o.altAxis,f=p===void 0?!0:p,m=o.fallbackPlacements,g=o.padding,v=o.boundary,y=o.rootBoundary,k=o.altBoundary,M=o.flipVariations,C=M===void 0?!0:M,x=o.allowedAutoPlacements,I=r.options.placement,_=Bn(I),W=_===I,O=m||(W||!C?[Ns(I)]:mb(I)),$=[I].concat(O).reduce(function(se,pe){return se.concat(Bn(pe)===Zu?fb(r,{placement:pe,boundary:v,rootBoundary:y,padding:g,flipVariations:C,allowedAutoPlacements:x}):pe)},[]),S=r.rects.reference,F=r.rects.popper,w=new Map,N=!0,U=$[0],L=0;L<$.length;L++){var q=$[L],ie=Bn(q),Q=Fi(q)===Li,re=[Nt,dn].indexOf(ie)>=0,ne=re?"width":"height",Y=na(r,{placement:q,boundary:v,rootBoundary:y,altBoundary:k,padding:g}),J=re?Q?pn:Dt:Q?dn:Nt;S[ne]>F[ne]&&(J=Ns(J));var j=Ns(J),Z=[];if(u&&Z.push(Y[ie]<=0),f&&Z.push(Y[J]<=0,Y[j]<=0),Z.every(function(se){return se})){U=q,N=!1;break}w.set(q,Z)}if(N)for(var ee=C?3:1,z=function(pe){var le=$.find(function(xe){var he=w.get(xe);if(he)return he.slice(0,pe).every(function(me){return me})});if(le)return U=le,"break"},V=ee;V>0;V--){var fe=z(V);if(fe==="break")break}r.placement!==U&&(r.modifiersData[s]._skip=!0,r.placement=U,r.reset=!0)}}const gb={name:"flip",enabled:!0,phase:"main",fn:hb,requiresIfExists:["offset"],data:{_skip:!1}};function Nm(n,r,o){return o===void 0&&(o={x:0,y:0}),{top:n.top-r.height-o.y,right:n.right-r.width+o.x,bottom:n.bottom-r.height+o.y,left:n.left-r.width-o.x}}function Dm(n){return[Nt,pn,dn,Dt].some(function(r){return n[r]>=0})}function vb(n){var r=n.state,o=n.name,s=r.rects.reference,l=r.rects.popper,u=r.modifiersData.preventOverflow,p=na(r,{elementContext:"reference"}),f=na(r,{altBoundary:!0}),m=Nm(p,s),g=Nm(f,l,u),v=Dm(m),y=Dm(g);r.modifiersData[o]={referenceClippingOffsets:m,popperEscapeOffsets:g,isReferenceHidden:v,hasPopperEscaped:y},r.attributes.popper=Object.assign({},r.attributes.popper,{"data-popper-reference-hidden":v,"data-popper-escaped":y})}const xb={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:vb};function yb(n,r,o){var s=Bn(n),l=[Dt,Nt].indexOf(s)>=0?-1:1,u=typeof o=="function"?o(Object.assign({},r,{placement:n})):o,p=u[0],f=u[1];return p=p||0,f=(f||0)*l,[Dt,pn].indexOf(s)>=0?{x:f,y:p}:{x:p,y:f}}function wb(n){var r=n.state,o=n.options,s=n.name,l=o.offset,u=l===void 0?[0,0]:l,p=Bh.reduce(function(v,y){return v[y]=yb(y,r.rects,u),v},{}),f=p[r.placement],m=f.x,g=f.y;r.modifiersData.popperOffsets!=null&&(r.modifiersData.popperOffsets.x+=m,r.modifiersData.popperOffsets.y+=g),r.modifiersData[s]=p}const bb={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:wb};function kb(n){var r=n.state,o=n.name;r.modifiersData[o]=Gh({reference:r.rects.reference,element:r.rects.popper,placement:r.placement})}const Cb={name:"popperOffsets",enabled:!0,phase:"read",fn:kb,data:{}};function Sb(n){return n==="x"?"y":"x"}function Eb(n){var r=n.state,o=n.options,s=n.name,l=o.mainAxis,u=l===void 0?!0:l,p=o.altAxis,f=p===void 0?!1:p,m=o.boundary,g=o.rootBoundary,v=o.altBoundary,y=o.padding,k=o.tether,M=k===void 0?!0:k,C=o.tetherOffset,x=C===void 0?0:C,I=na(r,{boundary:m,rootBoundary:g,padding:y,altBoundary:v}),_=Bn(r.placement),W=Fi(r.placement),O=!W,$=td(_),S=Sb($),F=r.modifiersData.popperOffsets,w=r.rects.reference,N=r.rects.popper,U=typeof x=="function"?x(Object.assign({},r.rects,{placement:r.placement})):x,L=typeof U=="number"?{mainAxis:U,altAxis:U}:Object.assign({mainAxis:0,altAxis:0},U),q=r.modifiersData.offset?r.modifiersData.offset[r.placement]:null,ie={x:0,y:0};if(F){if(u){var Q,re=$==="y"?Nt:Dt,ne=$==="y"?dn:pn,Y=$==="y"?"height":"width",J=F[$],j=J+I[re],Z=J-I[ne],ee=M?-N[Y]/2:0,z=W===Li?w[Y]:N[Y],V=W===Li?-N[Y]:-w[Y],fe=r.elements.arrow,se=M&&fe?ed(fe):{width:0,height:0},pe=r.modifiersData["arrow#persistent"]?r.modifiersData["arrow#persistent"].padding:Uh(),le=pe[re],xe=pe[ne],he=Go(0,w[Y],se[Y]),me=O?w[Y]/2-ee-he-le-L.mainAxis:z-he-le-L.mainAxis,_e=O?-w[Y]/2+ee+he+xe+L.mainAxis:V+he+xe+L.mainAxis,Ke=r.elements.arrow&&da(r.elements.arrow),rt=Ke?$==="y"?Ke.clientTop||0:Ke.clientLeft||0:0,Oe=(Q=q==null?void 0:q[$])!=null?Q:0,Ze=J+me-Oe-rt,it=J+_e-Oe,Kt=Go(M?Hs(j,Ze):j,J,M?Yr(Z,it):Z);F[$]=Kt,ie[$]=Kt-J}if(f){var Yt,Xt=$==="x"?Nt:Dt,Pn=$==="x"?dn:pn,Je=F[S],ft=S==="y"?"height":"width",jt=Je+I[Xt],mn=Je-I[Pn],Pt=[Nt,Dt].indexOf(_)!==-1,Ct=(Yt=q==null?void 0:q[S])!=null?Yt:0,Qt=Pt?jt:Je-w[ft]-N[ft]-Ct+L.altAxis,Zt=Pt?Je+w[ft]+N[ft]-Ct-L.altAxis:mn,hn=M&&Pt?Y1(Qt,Je,Zt):Go(M?Qt:jt,Je,M?Zt:mn);F[S]=hn,ie[S]=hn-Je}r.modifiersData[s]=ie}}const Tb={name:"preventOverflow",enabled:!0,phase:"main",fn:Eb,requiresIfExists:["offset"]};function Pb(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function Rb(n){return n===Gt(n)||!cn(n)?nd(n):Pb(n)}function Mb(n){var r=n.getBoundingClientRect(),o=ji(r.width)/n.offsetWidth||1,s=ji(r.height)/n.offsetHeight||1;return o!==1||s!==1}function Ib(n,r,o){o===void 0&&(o=!1);var s=cn(r),l=cn(r)&&Mb(r),u=Rr(r),p=Bi(n,l,o),f={scrollLeft:0,scrollTop:0},m={x:0,y:0};return(s||!s&&!o)&&((Fn(r)!=="body"||id(u))&&(f=Rb(r)),cn(r)?(m=Bi(r,!0),m.x+=r.clientLeft,m.y+=r.clientTop):u&&(m.x=rd(u))),{x:p.left+f.scrollLeft-m.x,y:p.top+f.scrollTop-m.y,width:p.width,height:p.height}}function zb(n){var r=new Map,o=new Set,s=[];n.forEach(function(u){r.set(u.name,u)});function l(u){o.add(u.name);var p=[].concat(u.requires||[],u.requiresIfExists||[]);p.forEach(function(f){if(!o.has(f)){var m=r.get(f);m&&l(m)}}),s.push(u)}return n.forEach(function(u){o.has(u.name)||l(u)}),s}function _b(n){var r=zb(n);return U1.reduce(function(o,s){return o.concat(r.filter(function(l){return l.phase===s}))},[])}function Ob(n){var r;return function(){return r||(r=new Promise(function(o){Promise.resolve().then(function(){r=void 0,o(n())})})),r}}function Ab(n){var r=n.reduce(function(o,s){var l=o[s.name];return o[s.name]=l?Object.assign({},l,s,{options:Object.assign({},l.options,s.options),data:Object.assign({},l.data,s.data)}):s,o},{});return Object.keys(r).map(function(o){return r[o]})}var Lm={placement:"bottom",modifiers:[],strategy:"absolute"};function jm(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return!r.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function $b(n){n===void 0&&(n={});var r=n,o=r.defaultModifiers,s=o===void 0?[]:o,l=r.defaultOptions,u=l===void 0?Lm:l;return function(f,m,g){g===void 0&&(g=u);var v={placement:"bottom",orderedModifiers:[],options:Object.assign({},Lm,u),modifiersData:{},elements:{reference:f,popper:m},attributes:{},styles:{}},y=[],k=!1,M={state:v,setOptions:function(_){var W=typeof _=="function"?_(v.options):_;x(),v.options=Object.assign({},u,v.options,W),v.scrollParents={reference:Xr(f)?Ko(f):f.contextElement?Ko(f.contextElement):[],popper:Ko(m)};var O=_b(Ab([].concat(s,v.options.modifiers)));return v.orderedModifiers=O.filter(function($){return $.enabled}),C(),M.update()},forceUpdate:function(){if(!k){var _=v.elements,W=_.reference,O=_.popper;if(jm(W,O)){v.rects={reference:Ib(W,da(O),v.options.strategy==="fixed"),popper:ed(O)},v.reset=!1,v.placement=v.options.placement,v.orderedModifiers.forEach(function(L){return v.modifiersData[L.name]=Object.assign({},L.data)});for(var $=0;$<v.orderedModifiers.length;$++){if(v.reset===!0){v.reset=!1,$=-1;continue}var S=v.orderedModifiers[$],F=S.fn,w=S.options,N=w===void 0?{}:w,U=S.name;typeof F=="function"&&(v=F({state:v,options:N,name:U,instance:M})||v)}}}},update:Ob(function(){return new Promise(function(I){M.forceUpdate(),I(v)})}),destroy:function(){x(),k=!0}};if(!jm(f,m))return M;M.setOptions(g).then(function(I){!k&&g.onFirstUpdate&&g.onFirstUpdate(I)});function C(){v.orderedModifiers.forEach(function(I){var _=I.name,W=I.options,O=W===void 0?{}:W,$=I.effect;if(typeof $=="function"){var S=$({state:v,name:_,instance:M,options:O}),F=function(){};y.push(S||F)}})}function x(){y.forEach(function(I){return I()}),y=[]}return M}}var Nb=[ob,Cb,rb,q1,bb,gb,Tb,J1,xb],Db=$b({defaultModifiers:Nb});function Lb(n){return typeof n=="function"?n():n}const Kh=E.forwardRef(function(r,o){const{children:s,container:l,disablePortal:u=!1}=r,[p,f]=E.useState(null),m=Tt(E.isValidElement(s)?Zr(s):null,o);if(Pr(()=>{u||f(Lb(l)||document.body)},[l,u]),Pr(()=>{if(p&&!u)return Bs(o,p),()=>{Bs(o,null)}},[o,p,u]),u){if(E.isValidElement(s)){const g={ref:m};return E.cloneElement(s,g)}return H.jsx(E.Fragment,{children:s})}return H.jsx(E.Fragment,{children:p&&Dh.createPortal(s,p)})});function jb(n){return Ue("MuiPopper",n)}De("MuiPopper",["root"]);const Bb=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],Fb=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function Wb(n,r){if(r==="ltr")return n;switch(n){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return n}}function Tu(n){return typeof n=="function"?n():n}function Ub(n){return n.nodeType!==void 0}const Hb=n=>{const{classes:r}=n;return Ge({root:["root"]},jb,r)},Vb={},qb=E.forwardRef(function(r,o){var s;const{anchorEl:l,children:u,direction:p,disablePortal:f,modifiers:m,open:g,placement:v,popperOptions:y,popperRef:k,slotProps:M={},slots:C={},TransitionProps:x}=r,I=be(r,Bb),_=E.useRef(null),W=Tt(_,o),O=E.useRef(null),$=Tt(O,k),S=E.useRef($);Pr(()=>{S.current=$},[$]),E.useImperativeHandle(k,()=>O.current,[]);const F=Wb(v,p),[w,N]=E.useState(F),[U,L]=E.useState(Tu(l));E.useEffect(()=>{O.current&&O.current.forceUpdate()}),E.useEffect(()=>{l&&L(Tu(l))},[l]),Pr(()=>{if(!U||!g)return;const ne=j=>{N(j.placement)};let Y=[{name:"preventOverflow",options:{altBoundary:f}},{name:"flip",options:{altBoundary:f}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:j})=>{ne(j)}}];m!=null&&(Y=Y.concat(m)),y&&y.modifiers!=null&&(Y=Y.concat(y.modifiers));const J=Db(U,_.current,R({placement:F},y,{modifiers:Y}));return S.current(J),()=>{J.destroy(),S.current(null)}},[U,f,m,g,y,F]);const q={placement:w};x!==null&&(q.TransitionProps=x);const ie=Hb(r),Q=(s=C.root)!=null?s:"div",re=Ws({elementType:Q,externalSlotProps:M.root,externalForwardedProps:I,additionalProps:{role:"tooltip",ref:W},ownerState:r,className:ie.root});return H.jsx(Q,R({},re,{children:typeof u=="function"?u(q):u}))}),Gb=E.forwardRef(function(r,o){const{anchorEl:s,children:l,container:u,direction:p="ltr",disablePortal:f=!1,keepMounted:m=!1,modifiers:g,open:v,placement:y="bottom",popperOptions:k=Vb,popperRef:M,style:C,transition:x=!1,slotProps:I={},slots:_={}}=r,W=be(r,Fb),[O,$]=E.useState(!0),S=()=>{$(!1)},F=()=>{$(!0)};if(!m&&!v&&(!x||O))return null;let w;if(u)w=u;else if(s){const L=Tu(s);w=L&&Ub(L)?$t(L).body:$t(null).body}const N=!v&&m&&(!x||O)?"none":void 0,U=x?{in:v,onEnter:S,onExited:F}:void 0;return H.jsx(Kh,{disablePortal:f,container:w,children:H.jsx(qb,R({anchorEl:s,direction:p,disablePortal:f,modifiers:g,ref:o,open:x?!O:v,placement:y,popperOptions:k,popperRef:M,slotProps:I,slots:_},W,{style:R({position:"fixed",top:0,left:0,display:N},C),TransitionProps:U,children:l}))})}),Kb=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],Yb=Te(Gb,{name:"MuiPopper",slot:"Root",overridesResolver:(n,r)=>r.root})({}),Yh=E.forwardRef(function(r,o){var s;const l=z1(),u=Be({props:r,name:"MuiPopper"}),{anchorEl:p,component:f,components:m,componentsProps:g,container:v,disablePortal:y,keepMounted:k,modifiers:M,open:C,placement:x,popperOptions:I,popperRef:_,transition:W,slots:O,slotProps:$}=u,S=be(u,Kb),F=(s=O==null?void 0:O.root)!=null?s:m==null?void 0:m.Root,w=R({anchorEl:p,container:v,disablePortal:y,keepMounted:k,modifiers:M,open:C,placement:x,popperOptions:I,popperRef:_,transition:W},S);return H.jsx(Yb,R({as:f,direction:l==null?void 0:l.direction,slots:{root:F},slotProps:$??g},w,{ref:o}))});function Xb(n){return H.jsx(ty,R({},n,{defaultTheme:Gu,themeId:$i}))}const Qb=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Zb={entering:{opacity:1},entered:{opacity:1}},Xh=E.forwardRef(function(r,o){const s=tr(),l={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{addEndListener:u,appear:p=!0,children:f,easing:m,in:g,onEnter:v,onEntered:y,onEntering:k,onExit:M,onExited:C,onExiting:x,style:I,timeout:_=l,TransitionComponent:W=Tn}=r,O=be(r,Qb),$=E.useRef(null),S=Tt($,Zr(f),o),F=re=>ne=>{if(re){const Y=$.current;ne===void 0?re(Y):re(Y,ne)}},w=F(k),N=F((re,ne)=>{Qu(re);const Y=Di({style:I,timeout:_,easing:m},{mode:"enter"});re.style.webkitTransition=s.transitions.create("opacity",Y),re.style.transition=s.transitions.create("opacity",Y),v&&v(re,ne)}),U=F(y),L=F(x),q=F(re=>{const ne=Di({style:I,timeout:_,easing:m},{mode:"exit"});re.style.webkitTransition=s.transitions.create("opacity",ne),re.style.transition=s.transitions.create("opacity",ne),M&&M(re)}),ie=F(C),Q=re=>{u&&u($.current,re)};return H.jsx(W,R({appear:p,in:g,nodeRef:$,onEnter:N,onEntered:U,onEntering:w,onExit:q,onExited:ie,onExiting:L,addEndListener:Q,timeout:_},O,{children:(re,ne)=>E.cloneElement(f,R({style:R({opacity:0,visibility:re==="exited"&&!g?"hidden":void 0},Zb[re],I,f.props.style),ref:S},ne))}))});function Jb(n){return Ue("MuiBackdrop",n)}De("MuiBackdrop",["root","invisible"]);const e2=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],t2=n=>{const{classes:r,invisible:o}=n;return Ge({root:["root",o&&"invisible"]},Jb,r)},n2=Te("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,o.invisible&&r.invisible]}})(({ownerState:n})=>R({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},n.invisible&&{backgroundColor:"transparent"})),Qh=E.forwardRef(function(r,o){var s,l,u;const p=Be({props:r,name:"MuiBackdrop"}),{children:f,className:m,component:g="div",components:v={},componentsProps:y={},invisible:k=!1,open:M,slotProps:C={},slots:x={},TransitionComponent:I=Xh,transitionDuration:_}=p,W=be(p,e2),O=R({},p,{component:g,invisible:k}),$=t2(O),S=(s=C.root)!=null?s:y.root;return H.jsx(I,R({in:M,timeout:_},W,{children:H.jsx(n2,R({"aria-hidden":!0},S,{as:(l=(u=x.root)!=null?u:v.Root)!=null?l:g,className:ke($.root,m,S==null?void 0:S.className),ownerState:R({},O,S==null?void 0:S.ownerState),classes:$,ref:o,children:f}))}))}),r2=De("MuiBox",["root"]),i2=qu(),Wi=sy({themeId:$i,defaultTheme:i2,defaultClassName:r2.root,generateClassName:Uu.generate});function o2(n){return Ue("MuiCard",n)}De("MuiCard",["root"]);const a2=["className","raised"],s2=n=>{const{classes:r}=n;return Ge({root:["root"]},o2,r)},l2=Te(qi,{name:"MuiCard",slot:"Root",overridesResolver:(n,r)=>r.root})(()=>({overflow:"hidden"})),c2=E.forwardRef(function(r,o){const s=Be({props:r,name:"MuiCard"}),{className:l,raised:u=!1}=s,p=be(s,a2),f=R({},s,{raised:u}),m=s2(f);return H.jsx(l2,R({className:ke(m.root,l),elevation:u?8:void 0,ref:o,ownerState:f},p))});function u2(n){return Ue("MuiCardContent",n)}De("MuiCardContent",["root"]);const d2=["className","component"],p2=n=>{const{classes:r}=n;return Ge({root:["root"]},u2,r)},f2=Te("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(n,r)=>r.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),m2=E.forwardRef(function(r,o){const s=Be({props:r,name:"MuiCardContent"}),{className:l,component:u="div"}=s,p=be(s,d2),f=R({},s,{component:u}),m=p2(f);return H.jsx(f2,R({as:u,className:ke(m.root,l),ownerState:f,ref:o},p))});function h2(n){return Ue("MuiCardMedia",n)}De("MuiCardMedia",["root","media","img"]);const g2=["children","className","component","image","src","style"],v2=n=>{const{classes:r,isMediaComponent:o,isImageComponent:s}=n;return Ge({root:["root",o&&"media",s&&"img"]},h2,r)},x2=Te("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n,{isMediaComponent:s,isImageComponent:l}=o;return[r.root,s&&r.media,l&&r.img]}})(({ownerState:n})=>R({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},n.isMediaComponent&&{width:"100%"},n.isImageComponent&&{objectFit:"cover"})),y2=["video","audio","picture","iframe","img"],w2=["picture","img"],b2=E.forwardRef(function(r,o){const s=Be({props:r,name:"MuiCardMedia"}),{children:l,className:u,component:p="div",image:f,src:m,style:g}=s,v=be(s,g2),y=y2.indexOf(p)!==-1,k=!y&&f?R({backgroundImage:`url("${f}")`},g):g,M=R({},s,{component:p,isMediaComponent:y,isImageComponent:w2.indexOf(p)!==-1}),C=v2(M);return H.jsx(x2,R({className:ke(C.root,u),as:p,role:!y&&f?"img":void 0,ref:o,style:k,ownerState:M,src:y?f||m:void 0},v,{children:l}))});function Bm(n){return n.substring(2).toLowerCase()}function k2(n,r){return r.documentElement.clientWidth<n.clientX||r.documentElement.clientHeight<n.clientY}function C2(n){const{children:r,disableReactTree:o=!1,mouseEvent:s="onClick",onClickAway:l,touchEvent:u="onTouchEnd"}=n,p=E.useRef(!1),f=E.useRef(null),m=E.useRef(!1),g=E.useRef(!1);E.useEffect(()=>(setTimeout(()=>{m.current=!0},0),()=>{m.current=!1}),[]);const v=Tt(Zr(r),f),y=ln(C=>{const x=g.current;g.current=!1;const I=$t(f.current);if(!m.current||!f.current||"clientX"in C&&k2(C,I))return;if(p.current){p.current=!1;return}let _;C.composedPath?_=C.composedPath().indexOf(f.current)>-1:_=!I.documentElement.contains(C.target)||f.current.contains(C.target),!_&&(o||!x)&&l(C)}),k=C=>x=>{g.current=!0;const I=r.props[C];I&&I(x)},M={ref:v};return u!==!1&&(M[u]=k(u)),E.useEffect(()=>{if(u!==!1){const C=Bm(u),x=$t(f.current),I=()=>{p.current=!0};return x.addEventListener(C,y),x.addEventListener("touchmove",I),()=>{x.removeEventListener(C,y),x.removeEventListener("touchmove",I)}}},[y,u]),s!==!1&&(M[s]=k(s)),E.useEffect(()=>{if(s!==!1){const C=Bm(s),x=$t(f.current);return x.addEventListener(C,y),()=>{x.removeEventListener(C,y)}}},[y,s]),H.jsx(E.Fragment,{children:E.cloneElement(r,M)})}const S2=(n,r)=>R({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},r&&!n.vars&&{colorScheme:n.palette.mode}),E2=n=>R({color:(n.vars||n).palette.text.primary},n.typography.body1,{backgroundColor:(n.vars||n).palette.background.default,"@media print":{backgroundColor:(n.vars||n).palette.common.white}}),T2=(n,r=!1)=>{var o;const s={};r&&n.colorSchemes&&Object.entries(n.colorSchemes).forEach(([p,f])=>{var m;s[n.getColorSchemeSelector(p).replace(/\s*&/,"")]={colorScheme:(m=f.palette)==null?void 0:m.mode}});let l=R({html:S2(n,r),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:n.typography.fontWeightBold},body:R({margin:0},E2(n),{"&::backdrop":{backgroundColor:(n.vars||n).palette.background.default}})},s);const u=(o=n.components)==null||(o=o.MuiCssBaseline)==null?void 0:o.styleOverrides;return u&&(l=[l,u]),l};function P2(n){const r=Be({props:n,name:"MuiCssBaseline"}),{children:o,enableColorScheme:s=!1}=r;return H.jsxs(E.Fragment,{children:[H.jsx(Xb,{styles:l=>T2(l,s)}),o]})}function R2(n){const r=$t(n);return r.body===n?Vi(n).innerWidth>r.documentElement.clientWidth:n.scrollHeight>n.clientHeight}function Yo(n,r){r?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden")}function Fm(n){return parseInt(Vi(n).getComputedStyle(n).paddingRight,10)||0}function M2(n){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(n.tagName)!==-1,s=n.tagName==="INPUT"&&n.getAttribute("type")==="hidden";return o||s}function Wm(n,r,o,s,l){const u=[r,o,...s];[].forEach.call(n.children,p=>{const f=u.indexOf(p)===-1,m=!M2(p);f&&m&&Yo(p,l)})}function au(n,r){let o=-1;return n.some((s,l)=>r(s)?(o=l,!0):!1),o}function I2(n,r){const o=[],s=n.container;if(!r.disableScrollLock){if(R2(s)){const p=$y($t(s));o.push({value:s.style.paddingRight,property:"padding-right",el:s}),s.style.paddingRight=`${Fm(s)+p}px`;const f=$t(s).querySelectorAll(".mui-fixed");[].forEach.call(f,m=>{o.push({value:m.style.paddingRight,property:"padding-right",el:m}),m.style.paddingRight=`${Fm(m)+p}px`})}let u;if(s.parentNode instanceof DocumentFragment)u=$t(s).body;else{const p=s.parentElement,f=Vi(s);u=(p==null?void 0:p.nodeName)==="HTML"&&f.getComputedStyle(p).overflowY==="scroll"?p:s}o.push({value:u.style.overflow,property:"overflow",el:u},{value:u.style.overflowX,property:"overflow-x",el:u},{value:u.style.overflowY,property:"overflow-y",el:u}),u.style.overflow="hidden"}return()=>{o.forEach(({value:u,el:p,property:f})=>{u?p.style.setProperty(f,u):p.style.removeProperty(f)})}}function z2(n){const r=[];return[].forEach.call(n.children,o=>{o.getAttribute("aria-hidden")==="true"&&r.push(o)}),r}class _2{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(r,o){let s=this.modals.indexOf(r);if(s!==-1)return s;s=this.modals.length,this.modals.push(r),r.modalRef&&Yo(r.modalRef,!1);const l=z2(o);Wm(o,r.mount,r.modalRef,l,!0);const u=au(this.containers,p=>p.container===o);return u!==-1?(this.containers[u].modals.push(r),s):(this.containers.push({modals:[r],container:o,restore:null,hiddenSiblings:l}),s)}mount(r,o){const s=au(this.containers,u=>u.modals.indexOf(r)!==-1),l=this.containers[s];l.restore||(l.restore=I2(l,o))}remove(r,o=!0){const s=this.modals.indexOf(r);if(s===-1)return s;const l=au(this.containers,p=>p.modals.indexOf(r)!==-1),u=this.containers[l];if(u.modals.splice(u.modals.indexOf(r),1),this.modals.splice(s,1),u.modals.length===0)u.restore&&u.restore(),r.modalRef&&Yo(r.modalRef,o),Wm(u.container,r.mount,r.modalRef,u.hiddenSiblings,!1),this.containers.splice(l,1);else{const p=u.modals[u.modals.length-1];p.modalRef&&Yo(p.modalRef,!1)}return s}isTopModal(r){return this.modals.length>0&&this.modals[this.modals.length-1]===r}}const O2=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function A2(n){const r=parseInt(n.getAttribute("tabindex")||"",10);return Number.isNaN(r)?n.contentEditable==="true"||(n.nodeName==="AUDIO"||n.nodeName==="VIDEO"||n.nodeName==="DETAILS")&&n.getAttribute("tabindex")===null?0:n.tabIndex:r}function $2(n){if(n.tagName!=="INPUT"||n.type!=="radio"||!n.name)return!1;const r=s=>n.ownerDocument.querySelector(`input[type="radio"]${s}`);let o=r(`[name="${n.name}"]:checked`);return o||(o=r(`[name="${n.name}"]`)),o!==n}function N2(n){return!(n.disabled||n.tagName==="INPUT"&&n.type==="hidden"||$2(n))}function D2(n){const r=[],o=[];return Array.from(n.querySelectorAll(O2)).forEach((s,l)=>{const u=A2(s);u===-1||!N2(s)||(u===0?r.push(s):o.push({documentOrder:l,tabIndex:u,node:s}))}),o.sort((s,l)=>s.tabIndex===l.tabIndex?s.documentOrder-l.documentOrder:s.tabIndex-l.tabIndex).map(s=>s.node).concat(r)}function L2(){return!0}function j2(n){const{children:r,disableAutoFocus:o=!1,disableEnforceFocus:s=!1,disableRestoreFocus:l=!1,getTabbable:u=D2,isEnabled:p=L2,open:f}=n,m=E.useRef(!1),g=E.useRef(null),v=E.useRef(null),y=E.useRef(null),k=E.useRef(null),M=E.useRef(!1),C=E.useRef(null),x=Tt(Zr(r),C),I=E.useRef(null);E.useEffect(()=>{!f||!C.current||(M.current=!o)},[o,f]),E.useEffect(()=>{if(!f||!C.current)return;const O=$t(C.current);return C.current.contains(O.activeElement)||(C.current.hasAttribute("tabIndex")||C.current.setAttribute("tabIndex","-1"),M.current&&C.current.focus()),()=>{l||(y.current&&y.current.focus&&(m.current=!0,y.current.focus()),y.current=null)}},[f]),E.useEffect(()=>{if(!f||!C.current)return;const O=$t(C.current),$=w=>{I.current=w,!(s||!p()||w.key!=="Tab")&&O.activeElement===C.current&&w.shiftKey&&(m.current=!0,v.current&&v.current.focus())},S=()=>{const w=C.current;if(w===null)return;if(!O.hasFocus()||!p()||m.current){m.current=!1;return}if(w.contains(O.activeElement)||s&&O.activeElement!==g.current&&O.activeElement!==v.current)return;if(O.activeElement!==k.current)k.current=null;else if(k.current!==null)return;if(!M.current)return;let N=[];if((O.activeElement===g.current||O.activeElement===v.current)&&(N=u(C.current)),N.length>0){var U,L;const q=!!((U=I.current)!=null&&U.shiftKey&&((L=I.current)==null?void 0:L.key)==="Tab"),ie=N[0],Q=N[N.length-1];typeof ie!="string"&&typeof Q!="string"&&(q?Q.focus():ie.focus())}else w.focus()};O.addEventListener("focusin",S),O.addEventListener("keydown",$,!0);const F=setInterval(()=>{O.activeElement&&O.activeElement.tagName==="BODY"&&S()},50);return()=>{clearInterval(F),O.removeEventListener("focusin",S),O.removeEventListener("keydown",$,!0)}},[o,s,l,p,f,u]);const _=O=>{y.current===null&&(y.current=O.relatedTarget),M.current=!0,k.current=O.target;const $=r.props.onFocus;$&&$(O)},W=O=>{y.current===null&&(y.current=O.relatedTarget),M.current=!0};return H.jsxs(E.Fragment,{children:[H.jsx("div",{tabIndex:f?0:-1,onFocus:W,ref:g,"data-testid":"sentinelStart"}),E.cloneElement(r,{ref:x,onFocus:_}),H.jsx("div",{tabIndex:f?0:-1,onFocus:W,ref:v,"data-testid":"sentinelEnd"})]})}function B2(n){return typeof n=="function"?n():n}function F2(n){return n?n.props.hasOwnProperty("in"):!1}const W2=new _2;function U2(n){const{container:r,disableEscapeKeyDown:o=!1,disableScrollLock:s=!1,manager:l=W2,closeAfterTransition:u=!1,onTransitionEnter:p,onTransitionExited:f,children:m,onClose:g,open:v,rootRef:y}=n,k=E.useRef({}),M=E.useRef(null),C=E.useRef(null),x=Tt(C,y),[I,_]=E.useState(!v),W=F2(m);let O=!0;(n["aria-hidden"]==="false"||n["aria-hidden"]===!1)&&(O=!1);const $=()=>$t(M.current),S=()=>(k.current.modalRef=C.current,k.current.mount=M.current,k.current),F=()=>{l.mount(S(),{disableScrollLock:s}),C.current&&(C.current.scrollTop=0)},w=ln(()=>{const Y=B2(r)||$().body;l.add(S(),Y),C.current&&F()}),N=E.useCallback(()=>l.isTopModal(S()),[l]),U=ln(Y=>{M.current=Y,Y&&(v&&N()?F():C.current&&Yo(C.current,O))}),L=E.useCallback(()=>{l.remove(S(),O)},[O,l]);E.useEffect(()=>()=>{L()},[L]),E.useEffect(()=>{v?w():(!W||!u)&&L()},[v,L,W,u,w]);const q=Y=>J=>{var j;(j=Y.onKeyDown)==null||j.call(Y,J),!(J.key!=="Escape"||J.which===229||!N())&&(o||(J.stopPropagation(),g&&g(J,"escapeKeyDown")))},ie=Y=>J=>{var j;(j=Y.onClick)==null||j.call(Y,J),J.target===J.currentTarget&&g&&g(J,"backdropClick")};return{getRootProps:(Y={})=>{const J=Fs(n);delete J.onTransitionEnter,delete J.onTransitionExited;const j=R({},J,Y);return R({role:"presentation"},j,{onKeyDown:q(j),ref:x})},getBackdropProps:(Y={})=>{const J=Y;return R({"aria-hidden":!0},J,{onClick:ie(J),open:v})},getTransitionProps:()=>{const Y=()=>{_(!1),p&&p()},J=()=>{_(!0),f&&f(),u&&L()};return{onEnter:vu(Y,m==null?void 0:m.props.onEnter),onExited:vu(J,m==null?void 0:m.props.onExited)}},rootRef:x,portalRef:U,isTopModal:N,exited:I,hasTransition:W}}function H2(n){return Ue("MuiModal",n)}De("MuiModal",["root","hidden","backdrop"]);const V2=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],q2=n=>{const{open:r,exited:o,classes:s}=n;return Ge({root:["root",!r&&o&&"hidden"],backdrop:["backdrop"]},H2,s)},G2=Te("div",{name:"MuiModal",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,!o.open&&o.exited&&r.hidden]}})(({theme:n,ownerState:r})=>R({position:"fixed",zIndex:(n.vars||n).zIndex.modal,right:0,bottom:0,top:0,left:0},!r.open&&r.exited&&{visibility:"hidden"})),K2=Te(Qh,{name:"MuiModal",slot:"Backdrop",overridesResolver:(n,r)=>r.backdrop})({zIndex:-1}),Zh=E.forwardRef(function(r,o){var s,l,u,p,f,m;const g=Be({name:"MuiModal",props:r}),{BackdropComponent:v=K2,BackdropProps:y,className:k,closeAfterTransition:M=!1,children:C,container:x,component:I,components:_={},componentsProps:W={},disableAutoFocus:O=!1,disableEnforceFocus:$=!1,disableEscapeKeyDown:S=!1,disablePortal:F=!1,disableRestoreFocus:w=!1,disableScrollLock:N=!1,hideBackdrop:U=!1,keepMounted:L=!1,onBackdropClick:q,open:ie,slotProps:Q,slots:re}=g,ne=be(g,V2),Y=R({},g,{closeAfterTransition:M,disableAutoFocus:O,disableEnforceFocus:$,disableEscapeKeyDown:S,disablePortal:F,disableRestoreFocus:w,disableScrollLock:N,hideBackdrop:U,keepMounted:L}),{getRootProps:J,getBackdropProps:j,getTransitionProps:Z,portalRef:ee,isTopModal:z,exited:V,hasTransition:fe}=U2(R({},Y,{rootRef:o})),se=R({},Y,{exited:V}),pe=q2(se),le={};if(C.props.tabIndex===void 0&&(le.tabIndex="-1"),fe){const{onEnter:Oe,onExited:Ze}=Z();le.onEnter=Oe,le.onExited=Ze}const xe=(s=(l=re==null?void 0:re.root)!=null?l:_.Root)!=null?s:G2,he=(u=(p=re==null?void 0:re.backdrop)!=null?p:_.Backdrop)!=null?u:v,me=(f=Q==null?void 0:Q.root)!=null?f:W.root,_e=(m=Q==null?void 0:Q.backdrop)!=null?m:W.backdrop,Ke=Ws({elementType:xe,externalSlotProps:me,externalForwardedProps:ne,getSlotProps:J,additionalProps:{ref:o,as:I},ownerState:se,className:ke(k,me==null?void 0:me.className,pe==null?void 0:pe.root,!se.open&&se.exited&&(pe==null?void 0:pe.hidden))}),rt=Ws({elementType:he,externalSlotProps:_e,additionalProps:y,getSlotProps:Oe=>j(R({},Oe,{onClick:Ze=>{q&&q(Ze),Oe!=null&&Oe.onClick&&Oe.onClick(Ze)}})),className:ke(_e==null?void 0:_e.className,y==null?void 0:y.className,pe==null?void 0:pe.backdrop),ownerState:se});return!L&&!ie&&(!fe||V)?null:H.jsx(Kh,{ref:ee,container:x,disablePortal:F,children:H.jsxs(xe,R({},Ke,{children:[!U&&v?H.jsx(he,R({},rt)):null,H.jsx(j2,{disableEnforceFocus:$,disableAutoFocus:O,disableRestoreFocus:w,isEnabled:z,open:ie,children:E.cloneElement(C,le)})]}))})});function Y2(n){return Ue("MuiDialog",n)}const su=De("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),X2=E.createContext({}),Q2=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],Z2=Te(Qh,{name:"MuiDialog",slot:"Backdrop",overrides:(n,r)=>r.backdrop})({zIndex:-1}),J2=n=>{const{classes:r,scroll:o,maxWidth:s,fullWidth:l,fullScreen:u}=n,p={root:["root"],container:["container",`scroll${Ee(o)}`],paper:["paper",`paperScroll${Ee(o)}`,`paperWidth${Ee(String(s))}`,l&&"paperFullWidth",u&&"paperFullScreen"]};return Ge(p,Y2,r)},ek=Te(Zh,{name:"MuiDialog",slot:"Root",overridesResolver:(n,r)=>r.root})({"@media print":{position:"absolute !important"}}),tk=Te("div",{name:"MuiDialog",slot:"Container",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.container,r[`scroll${Ee(o.scroll)}`]]}})(({ownerState:n})=>R({height:"100%","@media print":{height:"auto"},outline:0},n.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},n.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),nk=Te(qi,{name:"MuiDialog",slot:"Paper",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.paper,r[`scrollPaper${Ee(o.scroll)}`],r[`paperWidth${Ee(String(o.maxWidth))}`],o.fullWidth&&r.paperFullWidth,o.fullScreen&&r.paperFullScreen]}})(({theme:n,ownerState:r})=>R({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},r.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},r.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!r.maxWidth&&{maxWidth:"calc(100% - 64px)"},r.maxWidth==="xs"&&{maxWidth:n.breakpoints.unit==="px"?Math.max(n.breakpoints.values.xs,444):`max(${n.breakpoints.values.xs}${n.breakpoints.unit}, 444px)`,[`&.${su.paperScrollBody}`]:{[n.breakpoints.down(Math.max(n.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},r.maxWidth&&r.maxWidth!=="xs"&&{maxWidth:`${n.breakpoints.values[r.maxWidth]}${n.breakpoints.unit}`,[`&.${su.paperScrollBody}`]:{[n.breakpoints.down(n.breakpoints.values[r.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},r.fullWidth&&{width:"calc(100% - 64px)"},r.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${su.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),rk=E.forwardRef(function(r,o){const s=Be({props:r,name:"MuiDialog"}),l=tr(),u={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{"aria-describedby":p,"aria-labelledby":f,BackdropComponent:m,BackdropProps:g,children:v,className:y,disableEscapeKeyDown:k=!1,fullScreen:M=!1,fullWidth:C=!1,maxWidth:x="sm",onBackdropClick:I,onClick:_,onClose:W,open:O,PaperComponent:$=qi,PaperProps:S={},scroll:F="paper",TransitionComponent:w=Xh,transitionDuration:N=u,TransitionProps:U}=s,L=be(s,Q2),q=R({},s,{disableEscapeKeyDown:k,fullScreen:M,fullWidth:C,maxWidth:x,scroll:F}),ie=J2(q),Q=E.useRef(),re=j=>{Q.current=j.target===j.currentTarget},ne=j=>{_&&_(j),Q.current&&(Q.current=null,I&&I(j),W&&W(j,"backdropClick"))},Y=Hu(f),J=E.useMemo(()=>({titleId:Y}),[Y]);return H.jsx(ek,R({className:ke(ie.root,y),closeAfterTransition:!0,components:{Backdrop:Z2},componentsProps:{backdrop:R({transitionDuration:N,as:m},g)},disableEscapeKeyDown:k,onClose:W,open:O,ref:o,onClick:ne,ownerState:q},L,{children:H.jsx(w,R({appear:!0,in:O,timeout:N,role:"presentation"},U,{children:H.jsx(tk,{className:ke(ie.container),onMouseDown:re,ownerState:q,children:H.jsx(nk,R({as:$,elevation:24,role:"dialog","aria-describedby":p,"aria-labelledby":Y},S,{className:ke(ie.paper,S.className),ownerState:q,children:H.jsx(X2.Provider,{value:J,children:v})}))})}))}))});function ik(n){return Ue("MuiDialogContent",n)}De("MuiDialogContent",["root","dividers"]);const ok=De("MuiDialogTitle",["root"]),ak=["className","dividers"],sk=n=>{const{classes:r,dividers:o}=n;return Ge({root:["root",o&&"dividers"]},ik,r)},lk=Te("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,o.dividers&&r.dividers]}})(({theme:n,ownerState:r})=>R({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},r.dividers?{padding:"16px 24px",borderTop:`1px solid ${(n.vars||n).palette.divider}`,borderBottom:`1px solid ${(n.vars||n).palette.divider}`}:{[`.${ok.root} + &`]:{paddingTop:0}})),ck=E.forwardRef(function(r,o){const s=Be({props:r,name:"MuiDialogContent"}),{className:l,dividers:u=!1}=s,p=be(s,ak),f=R({},s,{dividers:u}),m=sk(f);return H.jsx(lk,R({className:ke(m.root,l),ownerState:f,ref:o},p))}),uk=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function dk(n,r,o){const s=r.getBoundingClientRect(),l=o&&o.getBoundingClientRect(),u=Vi(r);let p;if(r.fakeTransform)p=r.fakeTransform;else{const g=u.getComputedStyle(r);p=g.getPropertyValue("-webkit-transform")||g.getPropertyValue("transform")}let f=0,m=0;if(p&&p!=="none"&&typeof p=="string"){const g=p.split("(")[1].split(")")[0].split(",");f=parseInt(g[4],10),m=parseInt(g[5],10)}return n==="left"?l?`translateX(${l.right+f-s.left}px)`:`translateX(${u.innerWidth+f-s.left}px)`:n==="right"?l?`translateX(-${s.right-l.left-f}px)`:`translateX(-${s.left+s.width-f}px)`:n==="up"?l?`translateY(${l.bottom+m-s.top}px)`:`translateY(${u.innerHeight+m-s.top}px)`:l?`translateY(-${s.top-l.top+s.height-m}px)`:`translateY(-${s.top+s.height-m}px)`}function pk(n){return typeof n=="function"?n():n}function Is(n,r,o){const s=pk(o),l=dk(n,r,s);l&&(r.style.webkitTransform=l,r.style.transform=l)}const fk=E.forwardRef(function(r,o){const s=tr(),l={enter:s.transitions.easing.easeOut,exit:s.transitions.easing.sharp},u={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{addEndListener:p,appear:f=!0,children:m,container:g,direction:v="down",easing:y=l,in:k,onEnter:M,onEntered:C,onEntering:x,onExit:I,onExited:_,onExiting:W,style:O,timeout:$=u,TransitionComponent:S=Tn}=r,F=be(r,uk),w=E.useRef(null),N=Tt(Zr(m),w,o),U=j=>Z=>{j&&(Z===void 0?j(w.current):j(w.current,Z))},L=U((j,Z)=>{Is(v,j,g),Qu(j),M&&M(j,Z)}),q=U((j,Z)=>{const ee=Di({timeout:$,style:O,easing:y},{mode:"enter"});j.style.webkitTransition=s.transitions.create("-webkit-transform",R({},ee)),j.style.transition=s.transitions.create("transform",R({},ee)),j.style.webkitTransform="none",j.style.transform="none",x&&x(j,Z)}),ie=U(C),Q=U(W),re=U(j=>{const Z=Di({timeout:$,style:O,easing:y},{mode:"exit"});j.style.webkitTransition=s.transitions.create("-webkit-transform",Z),j.style.transition=s.transitions.create("transform",Z),Is(v,j,g),I&&I(j)}),ne=U(j=>{j.style.webkitTransition="",j.style.transition="",_&&_(j)}),Y=j=>{p&&p(w.current,j)},J=E.useCallback(()=>{w.current&&Is(v,w.current,g)},[v,g]);return E.useEffect(()=>{if(k||v==="down"||v==="right")return;const j=Rh(()=>{w.current&&Is(v,w.current,g)}),Z=Vi(w.current);return Z.addEventListener("resize",j),()=>{j.clear(),Z.removeEventListener("resize",j)}},[v,k,g]),E.useEffect(()=>{k||J()},[k,J]),H.jsx(S,R({nodeRef:w,onEnter:L,onEntered:ie,onEntering:q,onExit:re,onExited:ne,onExiting:Q,addEndListener:Y,appear:f,in:k,timeout:$},F,{children:(j,Z)=>E.cloneElement(m,R({ref:N,style:R({visibility:j==="exited"&&!k?"hidden":void 0},O,m.props.style)},Z))}))});function mk(n){return Ue("MuiDrawer",n)}De("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const hk=["BackdropProps"],gk=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],Jh=(n,r)=>{const{ownerState:o}=n;return[r.root,(o.variant==="permanent"||o.variant==="persistent")&&r.docked,r.modal]},vk=n=>{const{classes:r,anchor:o,variant:s}=n,l={root:["root"],docked:[(s==="permanent"||s==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${Ee(o)}`,s!=="temporary"&&`paperAnchorDocked${Ee(o)}`]};return Ge(l,mk,r)},xk=Te(Zh,{name:"MuiDrawer",slot:"Root",overridesResolver:Jh})(({theme:n})=>({zIndex:(n.vars||n).zIndex.drawer})),Um=Te("div",{shouldForwardProp:Ku,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:Jh})({flex:"0 0 auto"}),yk=Te(qi,{name:"MuiDrawer",slot:"Paper",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.paper,r[`paperAnchor${Ee(o.anchor)}`],o.variant!=="temporary"&&r[`paperAnchorDocked${Ee(o.anchor)}`]]}})(({theme:n,ownerState:r})=>R({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(n.vars||n).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},r.anchor==="left"&&{left:0},r.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},r.anchor==="right"&&{right:0},r.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},r.anchor==="left"&&r.variant!=="temporary"&&{borderRight:`1px solid ${(n.vars||n).palette.divider}`},r.anchor==="top"&&r.variant!=="temporary"&&{borderBottom:`1px solid ${(n.vars||n).palette.divider}`},r.anchor==="right"&&r.variant!=="temporary"&&{borderLeft:`1px solid ${(n.vars||n).palette.divider}`},r.anchor==="bottom"&&r.variant!=="temporary"&&{borderTop:`1px solid ${(n.vars||n).palette.divider}`})),eg={left:"right",right:"left",top:"down",bottom:"up"};function wk(n){return["left","right"].indexOf(n)!==-1}function bk({direction:n},r){return n==="rtl"&&wk(r)?eg[r]:r}const kk=E.forwardRef(function(r,o){const s=Be({props:r,name:"MuiDrawer"}),l=tr(),u=Oh(),p={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{anchor:f="left",BackdropProps:m,children:g,className:v,elevation:y=16,hideBackdrop:k=!1,ModalProps:{BackdropProps:M}={},onClose:C,open:x=!1,PaperProps:I={},SlideProps:_,TransitionComponent:W=fk,transitionDuration:O=p,variant:$="temporary"}=s,S=be(s.ModalProps,hk),F=be(s,gk),w=E.useRef(!1);E.useEffect(()=>{w.current=!0},[]);const N=bk({direction:u?"rtl":"ltr"},f),L=R({},s,{anchor:f,elevation:y,open:x,variant:$},F),q=vk(L),ie=H.jsx(yk,R({elevation:$==="temporary"?y:0,square:!0},I,{className:ke(q.paper,I.className),ownerState:L,children:g}));if($==="permanent")return H.jsx(Um,R({className:ke(q.root,q.docked,v),ownerState:L,ref:o},F,{children:ie}));const Q=H.jsx(W,R({in:x,direction:eg[N],timeout:O,appear:w.current},_,{children:ie}));return $==="persistent"?H.jsx(Um,R({className:ke(q.root,q.docked,v),ownerState:L,ref:o},F,{children:Q})):H.jsx(xk,R({BackdropProps:R({},m,M,{transitionDuration:O}),className:ke(q.root,q.modal,v),open:x,ownerState:L,onClose:C,hideBackdrop:k,ref:o},F,S,{children:Q}))}),Hm=E.createContext();function Ck(n){return Ue("MuiGrid",n)}const Sk=[0,1,2,3,4,5,6,7,8,9,10],Ek=["column-reverse","column","row-reverse","row"],Tk=["nowrap","wrap-reverse","wrap"],jo=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],ra=De("MuiGrid",["root","container","item","zeroMinWidth",...Sk.map(n=>`spacing-xs-${n}`),...Ek.map(n=>`direction-xs-${n}`),...Tk.map(n=>`wrap-xs-${n}`),...jo.map(n=>`grid-xs-${n}`),...jo.map(n=>`grid-sm-${n}`),...jo.map(n=>`grid-md-${n}`),...jo.map(n=>`grid-lg-${n}`),...jo.map(n=>`grid-xl-${n}`)]),Pk=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function Ai(n){const r=parseFloat(n);return`${r}${String(n).replace(String(r),"")||"px"}`}function Rk({theme:n,ownerState:r}){let o;return n.breakpoints.keys.reduce((s,l)=>{let u={};if(r[l]&&(o=r[l]),!o)return s;if(o===!0)u={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(o==="auto")u={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const p=Js({values:r.columns,breakpoints:n.breakpoints.values}),f=typeof p=="object"?p[l]:p;if(f==null)return s;const m=`${Math.round(o/f*1e8)/1e6}%`;let g={};if(r.container&&r.item&&r.columnSpacing!==0){const v=n.spacing(r.columnSpacing);if(v!=="0px"){const y=`calc(${m} + ${Ai(v)})`;g={flexBasis:y,maxWidth:y}}}u=R({flexBasis:m,flexGrow:0,maxWidth:m},g)}return n.breakpoints.values[l]===0?Object.assign(s,u):s[n.breakpoints.up(l)]=u,s},{})}function Mk({theme:n,ownerState:r}){const o=Js({values:r.direction,breakpoints:n.breakpoints.values});return un({theme:n},o,s=>{const l={flexDirection:s};return s.indexOf("column")===0&&(l[`& > .${ra.item}`]={maxWidth:"none"}),l})}function tg({breakpoints:n,values:r}){let o="";Object.keys(r).forEach(l=>{o===""&&r[l]!==0&&(o=l)});const s=Object.keys(n).sort((l,u)=>n[l]-n[u]);return s.slice(0,s.indexOf(o))}function Ik({theme:n,ownerState:r}){const{container:o,rowSpacing:s}=r;let l={};if(o&&s!==0){const u=Js({values:s,breakpoints:n.breakpoints.values});let p;typeof u=="object"&&(p=tg({breakpoints:n.breakpoints.values,values:u})),l=un({theme:n},u,(f,m)=>{var g;const v=n.spacing(f);return v!=="0px"?{marginTop:`-${Ai(v)}`,[`& > .${ra.item}`]:{paddingTop:Ai(v)}}:(g=p)!=null&&g.includes(m)?{}:{marginTop:0,[`& > .${ra.item}`]:{paddingTop:0}}})}return l}function zk({theme:n,ownerState:r}){const{container:o,columnSpacing:s}=r;let l={};if(o&&s!==0){const u=Js({values:s,breakpoints:n.breakpoints.values});let p;typeof u=="object"&&(p=tg({breakpoints:n.breakpoints.values,values:u})),l=un({theme:n},u,(f,m)=>{var g;const v=n.spacing(f);return v!=="0px"?{width:`calc(100% + ${Ai(v)})`,marginLeft:`-${Ai(v)}`,[`& > .${ra.item}`]:{paddingLeft:Ai(v)}}:(g=p)!=null&&g.includes(m)?{}:{width:"100%",marginLeft:0,[`& > .${ra.item}`]:{paddingLeft:0}}})}return l}function _k(n,r,o={}){if(!n||n<=0)return[];if(typeof n=="string"&&!Number.isNaN(Number(n))||typeof n=="number")return[o[`spacing-xs-${String(n)}`]];const s=[];return r.forEach(l=>{const u=n[l];Number(u)>0&&s.push(o[`spacing-${l}-${String(u)}`])}),s}const Ok=Te("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n,{container:s,direction:l,item:u,spacing:p,wrap:f,zeroMinWidth:m,breakpoints:g}=o;let v=[];s&&(v=_k(p,g,r));const y=[];return g.forEach(k=>{const M=o[k];M&&y.push(r[`grid-${k}-${String(M)}`])}),[r.root,s&&r.container,u&&r.item,m&&r.zeroMinWidth,...v,l!=="row"&&r[`direction-xs-${String(l)}`],f!=="wrap"&&r[`wrap-xs-${String(f)}`],...y]}})(({ownerState:n})=>R({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},n.wrap!=="wrap"&&{flexWrap:n.wrap}),Mk,Ik,zk,Rk);function Ak(n,r){if(!n||n<=0)return[];if(typeof n=="string"&&!Number.isNaN(Number(n))||typeof n=="number")return[`spacing-xs-${String(n)}`];const o=[];return r.forEach(s=>{const l=n[s];if(Number(l)>0){const u=`spacing-${s}-${String(l)}`;o.push(u)}}),o}const $k=n=>{const{classes:r,container:o,direction:s,item:l,spacing:u,wrap:p,zeroMinWidth:f,breakpoints:m}=n;let g=[];o&&(g=Ak(u,m));const v=[];m.forEach(k=>{const M=n[k];M&&v.push(`grid-${k}-${String(M)}`)});const y={root:["root",o&&"container",l&&"item",f&&"zeroMinWidth",...g,s!=="row"&&`direction-xs-${String(s)}`,p!=="wrap"&&`wrap-xs-${String(p)}`,...v]};return Ge(y,Ck,r)},Vm=E.forwardRef(function(r,o){const s=Be({props:r,name:"MuiGrid"}),{breakpoints:l}=tr(),u=al(s),{className:p,columns:f,columnSpacing:m,component:g="div",container:v=!1,direction:y="row",item:k=!1,rowSpacing:M,spacing:C=0,wrap:x="wrap",zeroMinWidth:I=!1}=u,_=be(u,Pk),W=M||C,O=m||C,$=E.useContext(Hm),S=v?f||12:$,F={},w=R({},_);l.keys.forEach(L=>{_[L]!=null&&(F[L]=_[L],delete w[L])});const N=R({},u,{columns:S,container:v,direction:y,item:k,rowSpacing:W,columnSpacing:O,wrap:x,zeroMinWidth:I,spacing:C},F,{breakpoints:l.keys}),U=$k(N);return H.jsx(Hm.Provider,{value:S,children:H.jsx(Ok,R({ownerState:N,className:ke(U.root,p),as:g,ref:o},w))})}),Nk=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Pu(n){return`scale(${n}, ${n**2})`}const Dk={entering:{opacity:1,transform:Pu(1)},entered:{opacity:1,transform:"none"}},lu=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Vs=E.forwardRef(function(r,o){const{addEndListener:s,appear:l=!0,children:u,easing:p,in:f,onEnter:m,onEntered:g,onEntering:v,onExit:y,onExited:k,onExiting:M,style:C,timeout:x="auto",TransitionComponent:I=Tn}=r,_=be(r,Nk),W=Gr(),O=E.useRef(),$=tr(),S=E.useRef(null),F=Tt(S,Zr(u),o),w=ne=>Y=>{if(ne){const J=S.current;Y===void 0?ne(J):ne(J,Y)}},N=w(v),U=w((ne,Y)=>{Qu(ne);const{duration:J,delay:j,easing:Z}=Di({style:C,timeout:x,easing:p},{mode:"enter"});let ee;x==="auto"?(ee=$.transitions.getAutoHeightDuration(ne.clientHeight),O.current=ee):ee=J,ne.style.transition=[$.transitions.create("opacity",{duration:ee,delay:j}),$.transitions.create("transform",{duration:lu?ee:ee*.666,delay:j,easing:Z})].join(","),m&&m(ne,Y)}),L=w(g),q=w(M),ie=w(ne=>{const{duration:Y,delay:J,easing:j}=Di({style:C,timeout:x,easing:p},{mode:"exit"});let Z;x==="auto"?(Z=$.transitions.getAutoHeightDuration(ne.clientHeight),O.current=Z):Z=Y,ne.style.transition=[$.transitions.create("opacity",{duration:Z,delay:J}),$.transitions.create("transform",{duration:lu?Z:Z*.666,delay:lu?J:J||Z*.333,easing:j})].join(","),ne.style.opacity=0,ne.style.transform=Pu(.75),y&&y(ne)}),Q=w(k),re=ne=>{x==="auto"&&W.start(O.current||0,ne),s&&s(S.current,ne)};return H.jsx(I,R({appear:l,in:f,nodeRef:S,onEnter:U,onEntered:L,onEntering:N,onExit:ie,onExited:Q,onExiting:q,addEndListener:re,timeout:x==="auto"?null:x},_,{children:(ne,Y)=>E.cloneElement(u,R({style:R({opacity:0,transform:Pu(.75),visibility:ne==="exited"&&!f?"hidden":void 0},Dk[ne],C,u.props.style),ref:F},Y))}))});Vs.muiSupportAuto=!0;const qs=E.createContext({});function Lk(n){return Ue("MuiList",n)}De("MuiList",["root","padding","dense","subheader"]);const jk=["children","className","component","dense","disablePadding","subheader"],Bk=n=>{const{classes:r,disablePadding:o,dense:s,subheader:l}=n;return Ge({root:["root",!o&&"padding",s&&"dense",l&&"subheader"]},Lk,r)},Fk=Te("ul",{name:"MuiList",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,!o.disablePadding&&r.padding,o.dense&&r.dense,o.subheader&&r.subheader]}})(({ownerState:n})=>R({listStyle:"none",margin:0,padding:0,position:"relative"},!n.disablePadding&&{paddingTop:8,paddingBottom:8},n.subheader&&{paddingTop:0})),Wk=E.forwardRef(function(r,o){const s=Be({props:r,name:"MuiList"}),{children:l,className:u,component:p="ul",dense:f=!1,disablePadding:m=!1,subheader:g}=s,v=be(s,jk),y=E.useMemo(()=>({dense:f}),[f]),k=R({},s,{component:p,dense:f,disablePadding:m}),M=Bk(k);return H.jsx(qs.Provider,{value:y,children:H.jsxs(Fk,R({as:p,className:ke(M.root,u),ref:o,ownerState:k},v,{children:[g,l]}))})});function Uk(n){return Ue("MuiListItemButton",n)}const Bo=De("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),Hk=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],Vk=(n,r)=>{const{ownerState:o}=n;return[r.root,o.dense&&r.dense,o.alignItems==="flex-start"&&r.alignItemsFlexStart,o.divider&&r.divider,!o.disableGutters&&r.gutters]},qk=n=>{const{alignItems:r,classes:o,dense:s,disabled:l,disableGutters:u,divider:p,selected:f}=n,g=Ge({root:["root",s&&"dense",!u&&"gutters",p&&"divider",l&&"disabled",r==="flex-start"&&"alignItemsFlexStart",f&&"selected"]},Uk,o);return R({},o,g)},Gk=Te(Lh,{shouldForwardProp:n=>Ku(n)||n==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:Vk})(({theme:n,ownerState:r})=>R({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Bo.selected}`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`:At.alpha(n.palette.primary.main,n.palette.action.selectedOpacity),[`&.${Bo.focusVisible}`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.focusOpacity}))`:At.alpha(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)}},[`&.${Bo.selected}:hover`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.hoverOpacity}))`:At.alpha(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`:At.alpha(n.palette.primary.main,n.palette.action.selectedOpacity)}},[`&.${Bo.focusVisible}`]:{backgroundColor:(n.vars||n).palette.action.focus},[`&.${Bo.disabled}`]:{opacity:(n.vars||n).palette.action.disabledOpacity}},r.divider&&{borderBottom:`1px solid ${(n.vars||n).palette.divider}`,backgroundClip:"padding-box"},r.alignItems==="flex-start"&&{alignItems:"flex-start"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.dense&&{paddingTop:4,paddingBottom:4})),Kk=E.forwardRef(function(r,o){const s=Be({props:r,name:"MuiListItemButton"}),{alignItems:l="center",autoFocus:u=!1,component:p="div",children:f,dense:m=!1,disableGutters:g=!1,divider:v=!1,focusVisibleClassName:y,selected:k=!1,className:M}=s,C=be(s,Hk),x=E.useContext(qs),I=E.useMemo(()=>({dense:m||x.dense||!1,alignItems:l,disableGutters:g}),[l,x.dense,m,g]),_=E.useRef(null);Pr(()=>{u&&_.current&&_.current.focus()},[u]);const W=R({},s,{alignItems:l,dense:I.dense,disableGutters:g,divider:v,selected:k}),O=qk(W),$=Tt(_,o);return H.jsx(qs.Provider,{value:I,children:H.jsx(Gk,R({ref:$,href:C.href||C.to,component:(C.href||C.to)&&p==="div"?"button":p,focusVisibleClassName:ke(O.focusVisible,y),ownerState:W,className:ke(O.root,M)},C,{classes:O,children:f}))})});function Yk(n){return Ue("MuiListItemText",n)}const qm=De("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),Xk=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],Qk=n=>{const{classes:r,inset:o,primary:s,secondary:l,dense:u}=n;return Ge({root:["root",o&&"inset",u&&"dense",s&&l&&"multiline"],primary:["primary"],secondary:["secondary"]},Yk,r)},Zk=Te("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[{[`& .${qm.primary}`]:r.primary},{[`& .${qm.secondary}`]:r.secondary},r.root,o.inset&&r.inset,o.primary&&o.secondary&&r.multiline,o.dense&&r.dense]}})(({ownerState:n})=>R({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},n.primary&&n.secondary&&{marginTop:6,marginBottom:6},n.inset&&{paddingLeft:56})),Jk=E.forwardRef(function(r,o){const s=Be({props:r,name:"MuiListItemText"}),{children:l,className:u,disableTypography:p=!1,inset:f=!1,primary:m,primaryTypographyProps:g,secondary:v,secondaryTypographyProps:y}=s,k=be(s,Xk),{dense:M}=E.useContext(qs);let C=m??l,x=v;const I=R({},s,{disableTypography:p,inset:f,primary:!!C,secondary:!!x,dense:M}),_=Qk(I);return C!=null&&C.type!==Er&&!p&&(C=H.jsx(Er,R({variant:M?"body2":"body1",className:_.primary,component:g!=null&&g.variant?void 0:"span",display:"block"},g,{children:C}))),x!=null&&x.type!==Er&&!p&&(x=H.jsx(Er,R({variant:"body2",className:_.secondary,color:"text.secondary",display:"block"},y,{children:x}))),H.jsxs(Zk,R({className:ke(_.root,u),ownerState:I,ref:o},k,{children:[C,x]}))});function eC(n={}){const{autoHideDuration:r=null,disableWindowBlurListener:o=!1,onClose:s,open:l,resumeHideDuration:u}=n,p=Gr();E.useEffect(()=>{if(!l)return;function _(W){W.defaultPrevented||(W.key==="Escape"||W.key==="Esc")&&(s==null||s(W,"escapeKeyDown"))}return document.addEventListener("keydown",_),()=>{document.removeEventListener("keydown",_)}},[l,s]);const f=ln((_,W)=>{s==null||s(_,W)}),m=ln(_=>{!s||_==null||p.start(_,()=>{f(null,"timeout")})});E.useEffect(()=>(l&&m(r),p.clear),[l,r,m,p]);const g=_=>{s==null||s(_,"clickaway")},v=p.clear,y=E.useCallback(()=>{r!=null&&m(u??r*.5)},[r,u,m]),k=_=>W=>{const O=_.onBlur;O==null||O(W),y()},M=_=>W=>{const O=_.onFocus;O==null||O(W),v()},C=_=>W=>{const O=_.onMouseEnter;O==null||O(W),v()},x=_=>W=>{const O=_.onMouseLeave;O==null||O(W),y()};return E.useEffect(()=>{if(!o&&l)return window.addEventListener("focus",y),window.addEventListener("blur",v),()=>{window.removeEventListener("focus",y),window.removeEventListener("blur",v)}},[o,l,y,v]),{getRootProps:(_={})=>{const W=R({},Fs(n),Fs(_));return R({role:"presentation"},_,W,{onBlur:k(W),onFocus:M(W),onMouseEnter:C(W),onMouseLeave:x(W)})},onClickAway:g}}function tC(n){return Ue("MuiSnackbarContent",n)}De("MuiSnackbarContent",["root","message","action"]);const nC=["action","className","message","role"],rC=n=>{const{classes:r}=n;return Ge({root:["root"],action:["action"],message:["message"]},tC,r)},iC=Te(qi,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(n,r)=>r.root})(({theme:n})=>{const r=n.palette.mode==="light"?.8:.98,o=At.emphasize(n.palette.background.default,r);return R({},n.typography.body2,{color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(o),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),oC=Te("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(n,r)=>r.message})({padding:"8px 0"}),aC=Te("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(n,r)=>r.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),sC=E.forwardRef(function(r,o){const s=Be({props:r,name:"MuiSnackbarContent"}),{action:l,className:u,message:p,role:f="alert"}=s,m=be(s,nC),g=s,v=rC(g);return H.jsxs(iC,R({role:f,square:!0,elevation:6,className:ke(v.root,u),ownerState:g,ref:o},m,{children:[H.jsx(oC,{className:v.message,ownerState:g,children:p}),l?H.jsx(aC,{className:v.action,ownerState:g,children:l}):null]}))});function lC(n){return Ue("MuiSnackbar",n)}De("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const cC=["onEnter","onExited"],uC=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],dC=n=>{const{classes:r,anchorOrigin:o}=n,s={root:["root",`anchorOrigin${Ee(o.vertical)}${Ee(o.horizontal)}`]};return Ge(s,lC,r)},Gm=Te("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,r[`anchorOrigin${Ee(o.anchorOrigin.vertical)}${Ee(o.anchorOrigin.horizontal)}`]]}})(({theme:n,ownerState:r})=>{const o={left:"50%",right:"auto",transform:"translateX(-50%)"};return R({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},r.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},r.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},r.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[n.breakpoints.up("sm")]:R({},r.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},r.anchorOrigin.horizontal==="center"&&o,r.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},r.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),pC=E.forwardRef(function(r,o){const s=Be({props:r,name:"MuiSnackbar"}),l=tr(),u={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{action:p,anchorOrigin:{vertical:f,horizontal:m}={vertical:"bottom",horizontal:"left"},autoHideDuration:g=null,children:v,className:y,ClickAwayListenerProps:k,ContentProps:M,disableWindowBlurListener:C=!1,message:x,open:I,TransitionComponent:_=Vs,transitionDuration:W=u,TransitionProps:{onEnter:O,onExited:$}={}}=s,S=be(s.TransitionProps,cC),F=be(s,uC),w=R({},s,{anchorOrigin:{vertical:f,horizontal:m},autoHideDuration:g,disableWindowBlurListener:C,TransitionComponent:_,transitionDuration:W}),N=dC(w),{getRootProps:U,onClickAway:L}=eC(R({},w)),[q,ie]=E.useState(!0),Q=Ws({elementType:Gm,getSlotProps:U,externalForwardedProps:F,ownerState:w,additionalProps:{ref:o},className:[N.root,y]}),re=Y=>{ie(!0),$&&$(Y)},ne=(Y,J)=>{ie(!1),O&&O(Y,J)};return!I&&q?null:H.jsx(C2,R({onClickAway:L},k,{children:H.jsx(Gm,R({},Q,{children:H.jsx(_,R({appear:!0,in:I,timeout:W,direction:f==="top"?"down":"up",onEnter:ne,onExited:re},S,{children:v||H.jsx(sC,R({message:x,action:p},M))}))}))}))});function fC(n){return Ue("MuiTooltip",n)}const Tr=De("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),mC=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function hC(n){return Math.round(n*1e5)/1e5}const gC=n=>{const{classes:r,disableInteractive:o,arrow:s,touch:l,placement:u}=n,p={popper:["popper",!o&&"popperInteractive",s&&"popperArrow"],tooltip:["tooltip",s&&"tooltipArrow",l&&"touch",`tooltipPlacement${Ee(u.split("-")[0])}`],arrow:["arrow"]};return Ge(p,fC,r)},vC=Te(Yh,{name:"MuiTooltip",slot:"Popper",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.popper,!o.disableInteractive&&r.popperInteractive,o.arrow&&r.popperArrow,!o.open&&r.popperClose]}})(({theme:n,ownerState:r,open:o})=>R({zIndex:(n.vars||n).zIndex.tooltip,pointerEvents:"none"},!r.disableInteractive&&{pointerEvents:"auto"},!o&&{pointerEvents:"none"},r.arrow&&{[`&[data-popper-placement*="bottom"] .${Tr.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${Tr.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${Tr.arrow}`]:R({},r.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${Tr.arrow}`]:R({},r.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),xC=Te("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.tooltip,o.touch&&r.touch,o.arrow&&r.tooltipArrow,r[`tooltipPlacement${Ee(o.placement.split("-")[0])}`]]}})(({theme:n,ownerState:r})=>R({backgroundColor:n.vars?n.vars.palette.Tooltip.bg:At.alpha(n.palette.grey[700],.92),borderRadius:(n.vars||n).shape.borderRadius,color:(n.vars||n).palette.common.white,fontFamily:n.typography.fontFamily,padding:"4px 8px",fontSize:n.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:n.typography.fontWeightMedium},r.arrow&&{position:"relative",margin:0},r.touch&&{padding:"8px 16px",fontSize:n.typography.pxToRem(14),lineHeight:`${hC(16/14)}em`,fontWeight:n.typography.fontWeightRegular},{[`.${Tr.popper}[data-popper-placement*="left"] &`]:R({transformOrigin:"right center"},r.isRtl?R({marginLeft:"14px"},r.touch&&{marginLeft:"24px"}):R({marginRight:"14px"},r.touch&&{marginRight:"24px"})),[`.${Tr.popper}[data-popper-placement*="right"] &`]:R({transformOrigin:"left center"},r.isRtl?R({marginRight:"14px"},r.touch&&{marginRight:"24px"}):R({marginLeft:"14px"},r.touch&&{marginLeft:"24px"})),[`.${Tr.popper}[data-popper-placement*="top"] &`]:R({transformOrigin:"center bottom",marginBottom:"14px"},r.touch&&{marginBottom:"24px"}),[`.${Tr.popper}[data-popper-placement*="bottom"] &`]:R({transformOrigin:"center top",marginTop:"14px"},r.touch&&{marginTop:"24px"})})),yC=Te("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(n,r)=>r.arrow})(({theme:n})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:n.vars?n.vars.palette.Tooltip.bg:At.alpha(n.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let zs=!1;const Km=new ca;let Fo={x:0,y:0};function _s(n,r){return(o,...s)=>{r&&r(o,...s),n(o,...s)}}const Ym=E.forwardRef(function(r,o){var s,l,u,p,f,m,g,v,y,k,M,C,x,I,_,W,O,$,S;const F=Be({props:r,name:"MuiTooltip"}),{arrow:w=!1,children:N,components:U={},componentsProps:L={},describeChild:q=!1,disableFocusListener:ie=!1,disableHoverListener:Q=!1,disableInteractive:re=!1,disableTouchListener:ne=!1,enterDelay:Y=100,enterNextDelay:J=0,enterTouchDelay:j=700,followCursor:Z=!1,id:ee,leaveDelay:z=0,leaveTouchDelay:V=1500,onClose:fe,onOpen:se,open:pe,placement:le="bottom",PopperComponent:xe,PopperProps:he={},slotProps:me={},slots:_e={},title:Ke,TransitionComponent:rt=Vs,TransitionProps:Oe}=F,Ze=be(F,mC),it=E.isValidElement(N)?N:H.jsx("span",{children:N}),Kt=tr(),Yt=Oh(),[Xt,Pn]=E.useState(),[Je,ft]=E.useState(null),jt=E.useRef(!1),mn=re||Z,Pt=Gr(),Ct=Gr(),Qt=Gr(),Zt=Gr(),[hn,we]=Mh({controlled:pe,default:!1,name:"Tooltip",state:"open"});let ct=hn;const gn=Hu(ee),Rn=E.useRef(),nr=ln(()=>{Rn.current!==void 0&&(document.body.style.WebkitUserSelect=Rn.current,Rn.current=void 0),Zt.clear()});E.useEffect(()=>nr,[nr]);const Gi=Ce=>{Km.clear(),zs=!0,we(!0),se&&!ct&&se(Ce)},Jr=ln(Ce=>{Km.start(800+z,()=>{zs=!1}),we(!1),fe&&ct&&fe(Ce),Pt.start(Kt.transitions.duration.shortest,()=>{jt.current=!1})}),rr=Ce=>{jt.current&&Ce.type!=="touchstart"||(Xt&&Xt.removeAttribute("title"),Ct.clear(),Qt.clear(),Y||zs&&J?Ct.start(zs?J:Y,()=>{Gi(Ce)}):Gi(Ce))},Mr=Ce=>{Ct.clear(),Qt.start(z,()=>{Jr(Ce)})},{isFocusVisibleRef:ei,onBlur:Ki,onFocus:Yi,ref:ir}=Vu(),[,Wn]=E.useState(!1),Xi=Ce=>{Ki(Ce),ei.current===!1&&(Wn(!1),Mr(Ce))},Qi=Ce=>{Xt||Pn(Ce.currentTarget),Yi(Ce),ei.current===!0&&(Wn(!0),rr(Ce))},Zi=Ce=>{jt.current=!0;const vt=it.props;vt.onTouchStart&&vt.onTouchStart(Ce)},pa=Ce=>{Zi(Ce),Qt.clear(),Pt.clear(),nr(),Rn.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Zt.start(j,()=>{document.body.style.WebkitUserSelect=Rn.current,rr(Ce)})},fa=Ce=>{it.props.onTouchEnd&&it.props.onTouchEnd(Ce),nr(),Qt.start(V,()=>{Jr(Ce)})};E.useEffect(()=>{if(!ct)return;function Ce(vt){(vt.key==="Escape"||vt.key==="Esc")&&Jr(vt)}return document.addEventListener("keydown",Ce),()=>{document.removeEventListener("keydown",Ce)}},[Jr,ct]);const Ji=Tt(Zr(it),ir,Pn,o);!Ke&&Ke!==0&&(ct=!1);const ti=E.useRef(),Ir=Ce=>{const vt=it.props;vt.onMouseMove&&vt.onMouseMove(Ce),Fo={x:Ce.clientX,y:Ce.clientY},ti.current&&ti.current.update()},Un={},Hn=typeof Ke=="string";q?(Un.title=!ct&&Hn&&!Q?Ke:null,Un["aria-describedby"]=ct?gn:null):(Un["aria-label"]=Hn?Ke:null,Un["aria-labelledby"]=ct&&!Hn?gn:null);const Bt=R({},Un,Ze,it.props,{className:ke(Ze.className,it.props.className),onTouchStart:Zi,ref:Ji},Z?{onMouseMove:Ir}:{}),vn={};ne||(Bt.onTouchStart=pa,Bt.onTouchEnd=fa),Q||(Bt.onMouseOver=_s(rr,Bt.onMouseOver),Bt.onMouseLeave=_s(Mr,Bt.onMouseLeave),mn||(vn.onMouseOver=rr,vn.onMouseLeave=Mr)),ie||(Bt.onFocus=_s(Qi,Bt.onFocus),Bt.onBlur=_s(Xi,Bt.onBlur),mn||(vn.onFocus=Qi,vn.onBlur=Xi));const ni=E.useMemo(()=>{var Ce;let vt=[{name:"arrow",enabled:!!Je,options:{element:Je,padding:4}}];return(Ce=he.popperOptions)!=null&&Ce.modifiers&&(vt=vt.concat(he.popperOptions.modifiers)),R({},he.popperOptions,{modifiers:vt})},[Je,he]),Mn=R({},F,{isRtl:Yt,arrow:w,disableInteractive:mn,placement:le,PopperComponentProp:xe,touch:jt.current}),zr=gC(Mn),ma=(s=(l=_e.popper)!=null?l:U.Popper)!=null?s:vC,ha=(u=(p=(f=_e.transition)!=null?f:U.Transition)!=null?p:rt)!=null?u:Vs,ga=(m=(g=_e.tooltip)!=null?g:U.Tooltip)!=null?m:xC,In=(v=(y=_e.arrow)!=null?y:U.Arrow)!=null?v:yC,va=Ho(ma,R({},he,(k=me.popper)!=null?k:L.popper,{className:ke(zr.popper,he==null?void 0:he.className,(M=(C=me.popper)!=null?C:L.popper)==null?void 0:M.className)}),Mn),xa=Ho(ha,R({},Oe,(x=me.transition)!=null?x:L.transition),Mn),dl=Ho(ga,R({},(I=me.tooltip)!=null?I:L.tooltip,{className:ke(zr.tooltip,(_=(W=me.tooltip)!=null?W:L.tooltip)==null?void 0:_.className)}),Mn),ya=Ho(In,R({},(O=me.arrow)!=null?O:L.arrow,{className:ke(zr.arrow,($=(S=me.arrow)!=null?S:L.arrow)==null?void 0:$.className)}),Mn);return H.jsxs(E.Fragment,{children:[E.cloneElement(it,Bt),H.jsx(ma,R({as:xe??Yh,placement:le,anchorEl:Z?{getBoundingClientRect:()=>({top:Fo.y,left:Fo.x,right:Fo.x,bottom:Fo.y,width:0,height:0})}:Xt,popperRef:ti,open:Xt?ct:!1,id:gn,transition:!0},vn,va,{popperOptions:ni,children:({TransitionProps:Ce})=>H.jsx(ha,R({timeout:Kt.transitions.duration.shorter},Ce,xa,{children:H.jsxs(ga,R({},dl,{children:[Ke,w?H.jsx(In,R({},ya,{ref:ft})):null]}))}))}))]})});function wC(n){return Ue("MuiToolbar",n)}De("MuiToolbar",["root","gutters","regular","dense"]);const bC=["className","component","disableGutters","variant"],kC=n=>{const{classes:r,disableGutters:o,variant:s}=n;return Ge({root:["root",!o&&"gutters",s]},wC,r)},CC=Te("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,!o.disableGutters&&r.gutters,r[o.variant]]}})(({theme:n,ownerState:r})=>R({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&{paddingLeft:n.spacing(2),paddingRight:n.spacing(2),[n.breakpoints.up("sm")]:{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}},r.variant==="dense"&&{minHeight:48}),({theme:n,ownerState:r})=>r.variant==="regular"&&n.mixins.toolbar),SC=E.forwardRef(function(r,o){const s=Be({props:r,name:"MuiToolbar"}),{className:l,component:u="div",disableGutters:p=!1,variant:f="regular"}=s,m=be(s,bC),g=R({},s,{component:u,disableGutters:p,variant:f}),v=kC(g);return H.jsx(CC,R({as:u,className:ke(v.root,l),ref:o,ownerState:g},m))});var Wo={},cu={};const EC=er(Fw);var Xm;function ng(){return Xm||(Xm=1,function(n){"use client";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=EC}(cu)),cu}var Qm;function TC(){if(Qm)return Wo;Qm=1;var n=ll();Object.defineProperty(Wo,"__esModule",{value:!0}),Wo.default=void 0;var r=n(ng()),o=Ru();return Wo.default=(0,r.default)((0,o.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu"),Wo}var PC=TC();const RC=Qr(PC),MC=({drawerWidth:n,mobileOpen:r,onDrawerToggle:o,isMobile:s,categories:l,selectedCategoryId:u,onSelectCategory:p})=>H.jsx(kk,{variant:s?"temporary":"permanent",open:s?r:!0,onClose:s?o:void 0,ModalProps:{keepMounted:!0},sx:{width:n,flexShrink:0,"& .MuiDrawer-paper":{width:n,boxSizing:"border-box"}},children:H.jsx(Wi,{sx:{p:2},children:H.jsx(Wk,{children:l.map(f=>H.jsx(Kk,{selected:f.id===u,onClick:()=>{p(f.id),s&&o()},children:H.jsx(Jk,{primary:f.name})},f.id))})})});var Uo={},Zm;function IC(){if(Zm)return Uo;Zm=1;var n=ll();Object.defineProperty(Uo,"__esModule",{value:!0}),Uo.default=void 0;var r=n(ng()),o=Ru();return Uo.default=(0,r.default)((0,o.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy"),Uo}var zC=IC();const Jm=Qr(zC),_C=({section:n})=>{const[r,o]=E.useState(!1),[s,l]=E.useState(!1),[u,p]=E.useState(!1),f=()=>{console.log("Card clicked!"),l(!0)},m=()=>l(!1),g=(y,k)=>{k&&k.stopPropagation(),navigator.clipboard.writeText(y),p(!0)},v=()=>{p(!1)};return H.jsxs(H.Fragment,{children:[H.jsxs(c2,{sx:{position:"relative",cursor:"pointer"},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:f,children:[H.jsx(b2,{component:"img",sx:{width:"100%",height:140,objectFit:"cover"},image:n.previewImg,alt:n.title}),H.jsx(m2,{children:H.jsx(Er,{variant:"subtitle1",children:n.title})}),r&&H.jsxs(Wi,{sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",bgcolor:"rgba(0,0,0,0.3)",display:"flex",justifyContent:"center",alignItems:"center",pointerEvents:"none"},children:[H.jsx(Ym,{title:"Copy HTML",children:H.jsx(Cu,{sx:{color:"#fff",mx:1,pointerEvents:"auto"},onClick:y=>g(n.htmlCode,y),children:H.jsx(Jm,{})})}),H.jsx(Ym,{title:"Copy CSS",children:H.jsx(Cu,{sx:{color:"#fff",mx:1,pointerEvents:"auto"},onClick:y=>g(n.cssCode,y),children:H.jsx(Jm,{})})})]})]}),H.jsx(rk,{open:s,onClose:m,maxWidth:"lg",children:H.jsx(ck,{sx:{p:0},children:H.jsx("img",{src:n.previewImg,alt:n.title,style:{width:"100%",height:"auto",display:"block"}})})}),H.jsx(pC,{open:u,autoHideDuration:2e3,onClose:v,message:"Copied to clipboard!",anchorOrigin:{vertical:"bottom",horizontal:"center"}})]})},OC=({category:n})=>n?H.jsxs(Wi,{p:2,children:[H.jsxs(Er,{variant:"h5",gutterBottom:!0,children:[n.name," Sections"]}),H.jsx(Vm,{container:!0,spacing:2,children:n.sections.map(r=>H.jsx(Vm,{item:!0,xs:6,children:H.jsx(_C,{section:r})},r.id))})]}):H.jsx(Wi,{p:2,children:H.jsx(Er,{variant:"h6",children:"No Category Selected"})}),AC={id:"cat-header",name:"Header",sections:[{id:"sec-header-1",title:"Header Section 1",htmlCode:`<!-- Header Section -->
<header class="header">
  <div class="container">
    <a
      href="https://professional.mit.edu/?utm_medium=pardotLP&utm_campaign=sp-pcb-2025-brochure"
      class="logo-link"
    >
      <img
        src="src/assets/images/header-1.png"
        alt="MIT Professional Education Logo"
        class="logo"
      />
    </a>
  </div>
</header>`,cssCode:`/* Header section styles */
.header {
  height: 100px;
  background-color: white;
  display: flex;
  align-items: center;
}

.logo-link {
  display: block;
}

.logo {
  max-width: 212px;
}`,previewImg:"header-1.png"}]},$C={id:"cat-hero",name:"Hero",sections:[{id:"sec-hero-1",title:"Hero Section 1",htmlCode:`<!-- Hero Section -->
<img 
  src="src/assets/images/hero-1-mobile.png" 
  alt="Breakthrough Innovation"
  class="hero-mobile-image"
/>
<section class="hero">
  <div class="hero-content">
    <h1 class="hero-title">Breakthrough Innovation</h1>
    <p class="hero-subtitle">Harnessing AI+ to Create Value</p>
    <div class="date-container-wrapper">
      <div class="date-container">
        <img 
          src="src/assets/images/Cal-icon.png"
          alt="Calendar Icon"
          class="calendar-icon"
        />
        <span class="date-text">
          Jul 07 - <span class="nowrap"></span>09, 2025
        </span>
      </div>
      <div class="date-container">
        <img 
          src="src/assets/images/Location-icon.png"
          alt="Location Icon"
          class="calendar-icon"
        />
        <span class="date-text">On Campus at MIT</span>
      </div>
    </div>
    <div class="date-container">
      <a href="#form" class="brochure-button">
        DOWNLOAD <span class="nowrap">BROCHURE</span>
      </a>
    </div>
  </div>
  <img 
    src="src/assets/images/hero-1-arrow.png"
    alt="arrow"
    class="hero-arrow"
/>
</section>

<section class="value-section">
  <div class="container">
    <div class="value-grid">
      <div class="heading-column">
        <h2 class="section-heading">
          Maximize the value of your organization's digital tools. Create powerful solutions.
        </h2>
      </div>
      <div class="divider"></div>
      <div class="text-column">
        <p class="value-text">
          COVID-19. Climate change. Cutting-edge technologies. Global disruptions are
          profoundly impacting the way that organizations do business. Yet, one thing
          remains unaltered—your responsibility to provide value to your customers. 
          Learn to foster an innovative, resilient organization that not only survives 
          but thrives amid difficult circumstances in this three-day course.
        </p>
      </div>
    </div>
  </div>
</section>`,cssCode:`/* Hero section styles */
.hero {
  background-image: url("src/assets/images/hero-1-bg.png");
  background-size: cover;
  background-position: center top;
  width: 100%;
  padding: 150px 0 170px;
  position: relative;
  display: block;
}

.hero-mobile-image {
  display: none;
  width: 100%;
}

.hero-arrow {
  position: absolute;
  max-width: 300px;
  bottom: -5%;
  left: 35%;
  z-index: 1;
}

.hero-content {
  width: 95vw;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .hero-content {
    width: 85vw;
  }
}

@media (min-width: 1440px) {
  .hero-content {
    width: 1240px;
  }
}

.hero-title {
  color: white;
  font-size: 64px;
  line-height: 110%;
  max-width: 530px;
  font-weight: 900;
  margin-bottom: 5px;
}

.hero-subtitle {
  line-height: 130%;
  color: white;
  font-size: 40px;
  font-style: italic;
  font-weight: 500;
}

.date-container {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
}

.calendar-icon {
  margin-right: 15px;
  width: auto;
  height: 36px;
}

.date-text {
  color: white;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 110%;
  font-weight: 700;
}

.date-container-wrapper {
  display: flex;
  gap: 45px;
}`,previewImg:"hero-1.png"},{id:"sec-hero-2",title:"Hero Section 2",htmlCode:`<!-- Hero Section -->

    <a href="#form"><img src="https://slxcloud.app/MIT/2025/Course-2025-mstn/images/Mobile.jpg"
            alt="Breakthrough Innovation" class="hero-mobile-image" /></a>
    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Future Transportation Systems: User-Centric, Green, Automated <span style="font-weight: 300; font-style: italic">&</span> AI-Driven</h1>

            <div class="date-container-wrapper">
                <div class="date-container">
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-pcb/images/Cal-icon.png" alt="Calendar Icon"
                        class="calendar-icon">
                    <span class="date-text">Jul 28 - Aug <span class="nowrap"></span>01, 2025</span></span>
                </div>
                <div class="date-container">
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-mstn/images/Location-icon%20%281%29.png"
                        alt="Location Icon" class="calendar-icon">
                    <span class="date-text">Live Online</span>
                </div>

            </div>
            <div class="date-container">
                <a href="#form" class="brochure-button">DOWNLOAD <span class="nowrap">BROCHURE</span></a>
            </div>
        </div>

    </section>

    <section class="subhero">
        <div class="container">
            <div class="subhero-container">
                <div>
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-mstn/images/LearnOnTheForefrontModelImage.png"
                        alt="Woman" class="subhero-img" />
                </div>
                <div>
                    <h2>Learn On The Forefront Of Transportation Innovation</h2>
                    <p>Dive into the latest research from MIT's Intelligent Transportation Systems Lab and learn to
                        translate real-time data into real-world results that mitigate traffic congestion and other
                        transportation challenges.</p>
                </div>
            </div>
        </div>
    </section>`,cssCode:`/* Hero section styles */
.hero {
    background-image: url("https://slxcloud.app/MIT/2025/Course-2025-mstn/images/Desktop.jpg");
    background-size: cover;
    background-position: center top;
    width: 100%;
    padding: 150px 0 170px;
    position: relative;
    display: block;
}

.hero-mobile-image {
    display: none;
    width: 100%;
}

.hero-arrow {
    position: absolute;
    max-width: 300px;
    bottom: -5%;
    left: 35%;
    z-index: 1;
}

.hero-content {
    width: 95vw;
    margin: 0 auto;
}

@media (min-width: 768px) {
    .hero-content {
        width: 85vw;
    }


}

@media (max-width: 768px) {


    .hero {
        background-image: url("https://slxcloud.app/MIT/2025/Course-2025-mstn/images/Tablet.jpg");
        background-position: left 85% top 10%
    }
}

@media (min-width: 1440px) {
    .hero-content {
        width: 1240px;
    }
}

.hero-title {
    color: white;
    font-size: 48px;
    line-height: 110%;
    max-width: 550px;
    font-weight: 800;
    margin-bottom: 5px;
}

.hero-subtitle {
    line-height: 130%;
    color: white;
    font-size: 40px;
    font-weight: 400;

}

.date-container {
    display: flex;
    align-items: center;
    padding-top: 25px;
}

.calendar-icon {
    margin-right: 15px;
    width: auto;
    height: 36px;
}

.date-text {
    color: white;
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 110%;
    font-weight: 700;
}

.date-container-wrapper {
    display: flex;
    gap: 0;
    flex-direction: column;
}

/* Media query for smaller screens */
@media (max-width: 767px) {
    .hero-title {
        font-size: 42px;
    }

    .date-text {
        font-size: 16px;
    }
}

@media (max-width: 468px) {

    .hero,
    .header {
        display: none;
    }

    .date-container-wrapper {
        flex-direction: column;
        gap: 5px;
    }

    .date-container {
        padding-bottom: 0px;
        margin-top: 20px !important;
    }


    .hero-mobile-image {
        display: block;
        width: 100%;
    }
}`,previewImg:"hero-2.png"},{id:"sec-hero-3",title:"Hero Section 3",htmlCode:`<!-- Hero Section -->

    <a href="#form"><img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/Mobile%20Header.jpg"
            alt="Learning Algorithms, Design and Safety" class="hero-mobile-image" /></a>
    <section class="hero">
        <div class="hero-content">
            <p class="hero-subtitle">AI in Robotics: </p>
            <h1 class="hero-title">Learning Algorithms,<br> Design and Safety </h1>

            <div class="date-container-wrapper">
                <div class="date-container">

                    <span class="date-text">Jul 09 - 11, 2025 | On Campus</span>
                </div>

            </div>
            <div class="date-container">
                <a href="#form" class="brochure-button">DOWNLOAD <span class="nowrap">BROCHURE</span></a>
            </div>
        </div>

    </section>`,cssCode:`
/* Hero section styles */
.hero {
    background-image: url("https://slxcloud.app/MIT/2025/Course-2025-air/images/MIT%2003.31%20AI%20in%20Robotics%20Learning%20Algorithms%2C%20Design%20and%20Safety%20%20am-HERO.png");
    background-size: cover;
    background-position: center top;
    width: 100%;
    padding: 150px 0 170px;
    position: relative;
    display: block;
}

.hero-mobile-image {
    display: none;
    width: 100%;
}

.hero-arrow {
    position: absolute;
    max-width: 300px;
    bottom: -5%;
    left: 35%;
    z-index: 1;
}

.hero-content {
    width: 95vw;
    margin: 0 auto;
}

@media (min-width: 768px) {
    .hero-content {
        width: 85vw;
    }


}

@media (max-width: 768px) {


    .hero {
        background-image: url("https://slxcloud.app/MIT/2025/Course-2025-air/images/MIT%20LP%203.21.25%20AI%20for%20Scientific%20Discovery%20LP-tablet.jpg");
        background-position: left 85% top 10%
    }
}

@media (min-width: 1440px) {
    .hero-content {
        width: 1240px;
    }
}

.hero-title {
    color: white;
    font-size: 60px;
    line-height: 110%;
    max-width: 630px;
    font-weight: 800;
    margin-bottom: 5px;
}

.hero-subtitle {
    line-height: 130%;
    color: white;
    font-size: 36px;
    font-weight: 400;

}

.date-container {
    display: flex;
    align-items: center;
    padding-top: 25px;
}

.calendar-icon {
    margin-right: 15px;
    width: auto;
    height: 36px;
}

.date-text {
    color: white;
    font-size: 32px;
    letter-spacing: 1px;
    line-height: 110%;
    font-weight: 500;
}

.date-container-wrapper {
    display: flex;
    gap: 45px;
}

/* Media query for smaller screens */
@media (max-width: 767px) {
    .hero-title {
        font-size: 42px;
    }

    .date-text {
        font-size: 16px;
    }
}

@media (max-width: 468px) {

    .hero,
    .header {
        display: none;
    }

    .date-container-wrapper {
        flex-direction: column;
        gap: 5px;
    }

    .date-container {
        padding-bottom: 0px;
        margin-top: 20px !important;
    }


    .hero-mobile-image {
        display: block;
        width: 100%;
    }
}


/* Brochure button styles */
.brochure-button {
    display: inline-block;
    background-color: #D6E040;
    color: black;
    width: 292px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0.5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-weight: 900;
    z-index: 99;
}

.brochure-button:hover {
    background-color: #c5ce37;
}

@media (max-width: 767px) {
    .brochure-button {
        width: 100%;
        max-width: 292px;
    }
}





/* Additional responsive improvements */
@media (max-width: 480px) {
    .hero-title {
        font-size: 36px;
    }

    .date-text {
        font-size: 14px;
    }


}
`,previewImg:"hero-3.png"},{id:"sec-hero-4",title:"Hero Section 4",htmlCode:`<!-- Hero Section -->

    <a href="#form"><img src="https://slxcloud.app/MIT/2025/Course-2025-merai/images/Mobile.jpg"
            alt="Breakthrough Innovation" class="hero-mobile-image" /></a>
    <section class="hero">
        <div class="hero-content">
            <p class="hero-subtitle">Ethics of AI:</p>
            <h1 class="hero-title">Building Responsible<br> AI, Machine Learning,<br> and GPTs</h1>

            <div class="date-container-wrapper">
                <div class="date-container">
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-pcb/images/Cal-icon.png" alt="Calendar Icon"
                        class="calendar-icon">
                    <span class="date-text">July 21-<span class="nowrap"></span>23, 2025</span></span>
                </div>

            </div>
            <div class="date-container">
                <a href="#form" class="brochure-button">DOWNLOAD <span class="nowrap">BROCHURE</span></a>
            </div>
        </div>

    </section>`,cssCode:`
/* Hero section styles */
.hero {
    background-image: url("https://slxcloud.app/MIT/2025/Course-2025-merai/images/Desktop.jpg");
    background-size: cover;
    background-position: center top;
    width: 100%;
    padding: 150px 0 170px;
    position: relative;
    display: block;
}

.hero-mobile-image {
    display: none;
    width: 100%;
}

.hero-arrow {
    position: absolute;
    max-width: 300px;
    bottom: -5%;
    left: 35%;
    z-index: 1;
}

.hero-content {
    width: 95vw;
    margin: 0 auto;
}

@media (min-width: 768px) {
    .hero-content {
        width: 85vw;
    }


}

@media (max-width: 768px) {


    .hero {
        background-image: url("https://slxcloud.app/MIT/2025/Course-2025-merai/images/Tablet.jpg");
        background-position: left 85% top 10%
    }
}

@media (min-width: 1440px) {
    .hero-content {
        width: 1240px;
    }
}

.hero-title {
    color: white;
    font-size: 45px;
    line-height: 110%;
    max-width: 530px;
    font-weight: 800;
    margin-bottom: 5px;
}

.hero-subtitle {
    line-height: 130%;
    color: white;
    font-size: 40px;
    font-weight: 400;

}

.date-container {
    display: flex;
    align-items: center;
    padding-top: 25px;
}

.calendar-icon {
    margin-right: 15px;
    width: auto;
    height: 36px;
}

.date-text {
    color: white;
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 110%;
    font-weight: 700;
}

.date-container-wrapper {
    display: flex;
    gap: 45px;
}

/* Media query for smaller screens */
@media (max-width: 767px) {
    .hero-title {
        font-size: 42px;
    }

    .date-text {
        font-size: 16px;
    }
}

@media (max-width: 468px) {

    .hero,
    .header {
        display: none;
    }

    .date-container-wrapper {
        flex-direction: column;
        gap: 5px;
    }

    .date-container {
        padding-bottom: 0px;
        margin-top: 20px !important;
    }


    .hero-mobile-image {
        display: block;
        width: 100%;
    }
}
`,previewImg:"hero-4.png"}]},NC={id:"cat-instructors",name:"Instructors",sections:[{id:"sec-instructors-1",title:"Instructors 1",htmlCode:`<!-- Instructor Section -->
    <section class="instructor-section">
        <div class="container">
            <h2 class="section-heading">Lead Faculty</h2>
        </div>

        <div class="instructor-container">
            <div class="content-wrapper">

                <div class="instructor-details">
                    <div class="instructor-info">
                        <h3 class="instructor-name">Michael A M Davies</h3>
                        <p class="instructor-bio">Michael A M Daviesteaches the engineering and business elements of the
                            Integrated Design andManagement (IDM) program at MIT. He is the founder and chairman of
                            Endeavour Partners, a boutique business strategy consulting firm that empowers global
                            business leaders to create value and drive growth through innovation. Davies' current
                            research focuses on the rapid shift toward smartphones, cloud services, the Internet of
                            Things, artificial intelligence, and robotics, with a particular emphasis on the forces
                            driving this shift and their implications over the next
                            <span class="nowrap">few years.</span>
                        </p>
                    </div>
                    <div class="instructor-image-container">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/Michael-A-M-Davies.png"
                            alt="Michael A M Davies" class="instructor-image">
                    </div>
                </div>
            </div>
        </div>

        <div class="instructor-container-right">
            <div class="content-wrapper-right">
                <div class="instructor-details-right">
                    <div class="instructor-image-container-right">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/Blade-Kotelly.png"
                            alt="Blade Kotelly" class="instructor-image-right">
                    </div>
                    <div class="instructor-info-right">
                        <h3 class="instructor-name-right">Blade Kotelly</h3>
                        <p class="instructor-bio-right">Blade Kotelly
                            is an innovation and user-experience expert and Senior Lecturer at MIT. He provides
                            consulting services in design-thinking, helps top brands radically innovate their products
                            and services, and teaches corporate teams how to create solutions that customers love. His
                            prior clients include Bose, CPIInternational, Whirlpool, and Lufthansa. He is the author of
                            a book focused on speech-recognition interface design,
                            The Art and Business of Speech Recognition: Creating the <span class="nowrap"> Noble
                                Voice.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>`,cssCode:`/* Instructor Section styles */
.instructor-section {
    background-color: white;
    padding: 0;
    overflow-x: hidden;
    position: relative;
}

.section-heading {
    font-size: 36px;
    font-weight: 800;
    color: #252525;
    margin-bottom: 50px;
}

.instructor-container {
    width: 75%;
    background-color: #C64A1E;
    padding: 20px 20px 20px;
    position: relative;
    left: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-image: url("https://slxcloud.app/MIT/2025/Course-2025-bicv/images/arrow%204.png");
    background-position: top 30px left 70%;
    /* Added to position the background properly */
    background-size: 400px;
    background-repeat: no-repeat;

}

.content-wrapper {
    /* padding-left: calc(5vw + 20px); */
    padding-right: 0px;
    padding-left: 2.5vw;
}

.instructor-arrow {
    height: 50px;
    position: absolute;
    top: 30px;
}

.instructor-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    /* This should be uncommented */

    padding: 0;
    /* Add padding to ensure content doesn't overlap with the background */
    min-height: 300px;
    /* Set a minimum height to ensure the background is visible */
}

.instructor-info {
    width: 66.666%;
    /* 2/3 of the container width */
    padding-right: 40px;
}

.instructor-name {
    color: white;
    font-size: 24px;
    font-weight: 700;
    /* bold */
    margin-bottom: 15px;
}

.instructor-bio {
    color: white;
    font-size: 16px;
    line-height: 150%;
    font-weight: 400;
    /* regular */
}

.instructor-image-container {
    width: 33.333%;
    position: static;

}

.instructor-image {
    max-width: 300px;
    width: 100%;
    position: absolute;
    bottom: 20px;
}

/* Media queries for different screen sizes */
@media (min-width: 768px) {
    .content-wrapper {
        padding-left: 0;
        /* Tablet and small desktop padding */
    }

    .instructor-container {
        padding-left: 0;
    }

    .instructor-details {
        margin-left: 7.5vw;
    }

}

@media (min-width: 1440px) {
    .content-wrapper {
        padding-left: calc((100vw - 1240px) / 2);
        /* Desktop larger than 1440px */
    }

    .instructor-details {
        margin-left: 0;
    }


}

@media (max-width: 1480px) {
    .instructor-container {
        width: 90%;
        padding-bottom: 20px;
    }
    .instructor-container-right {
        width: 90% !important;
    }
    .instructor-image {
        max-width: 330px;
        width: 100%;
        position: absolute;
        bottom: -30px;
    }
    .instructor-container-right {
        margin-top: -36px  !important;
    }
}



/* Mobile adjustments */
@media (max-width: 991px) {

    .instructor-container {
        width: 80%;
        padding-bottom: 0;
        padding-top: 60px;
    }

    .instructor-details {
        flex-direction: column;
    }

    .instructor-container-right {
        width: 80% !important;
    }

    .instructor-info {
        width: 100%;
        padding-right: 0;
        margin-bottom: 320px;
        /* Make space for the image below */
    }

    .instructor-image-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .instructor-image {
        position: static;
        max-width: 300px;
        margin-top: -280px;
    }
}

@media (max-width: 767px) {

    .instructor-container {
        width: 890%;
    }

    .section-heading {
        font-size: 30px;
        margin-bottom: 30px;
    }

    .instructor-section {
        padding: 70px 0;
    }

    .instructor-container {
        width: 100%;
        /* Full width on mobile */
        padding: 40px 0 0;
    }

    .instructor-name {
        font-size: 22px;
    }

    .instructor-bio {
        font-size: 15px;
        padding-bottom: 100px;
    }

    .instructor-info {
        margin-bottom: 220px;
        max-width: 80vw;
    }

    /* .instructor-image {
        max-width: 300px;
        margin-top: -250px;
    } */
}

@media (max-width: 480px) {
    .section-heading {
        font-size: 26px;
    }

    .instructor-section {
        padding: 50px 0;
    }

    .instructor-container {
        padding: 30px 0 0;
    }

    .instructor-info {
        margin-bottom: 180px;
    }

    .instructor-image {
        max-width: 270px;
        margin-top: -210px;
    }
}


/* Right-Aligned Instructor Section styles */
.instructor-section-right {
    background-color: white;
    padding: 100px 0;
    overflow-x: hidden;
    position: relative;

}

.section-heading {
    font-size: 36px;
    font-weight: 800;
    color: #252525;
    margin-bottom: 50px;
}

.instructor-container-right {
    width: 75%;
    background-color: #842619;
    padding: 60px 0;
    position: relative;
    right: 0;
    margin-left: auto;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-top: -40px;
    overflow: hidden;
    background-image: url(https://slxcloud.app/MIT/2025/Course-2025-bicv/images/arrow%205.png);
    background-repeat: no-repeat;
    background-size: 150px;
    background-position: left 18% center;

}

.content-wrapper-right {
    padding-right: 5vw;
    /* Default mobile padding on right */
    padding-left: 20px;
}

.instructor-details-right {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
}

.instructor-info-right {
    width: 66.666%;
    /* 2/3 of the container width */
    padding-left: 40px;
}

.instructor-name-right {
    color: white;
    font-size: 24px;
    font-weight: 700;
    /* bold */
    margin-bottom: 15px;
}

.instructor-bio-right {
    color: white;
    font-size: 16px;
    line-height: 150%;
    font-weight: 400;
    /* regular */
}

.instructor-image-container-right {
    width: 33.333%;
    /* 1/3 of the container width */

}

.instructor-image-right {
    max-width: 300px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 60px;
    max-width: 230px;
    /* 50px above the container + 60px padding top */
}

/* Media queries for different screen sizes */
@media (min-width: 768px) {
    .content-wrapper-right {
        padding-right: 7.5vw;
        /* Tablet and small desktop padding */
    }
}

@media (min-width: 1440px) {
    .content-wrapper-right {
        padding-right: calc((100vw - 1240px) / 2);
        /* Desktop larger than 1440px */
    }
}

/* Mobile adjustments */
@media (max-width: 991px) {
    .instructor-details-right {
        flex-direction: column;
    }

    .instructor-info-right {
        width: 100%;
        padding-left: 0;
        margin-bottom: 250px;
        /* Make space for the image below */
        order: 1;
    }

    .instructor-image-container-right {
        width: 100%;
        display: flex;
        justify-content: center;
        order: 2;
    }

    .instructor-container-right {
        background-position: left 80% bottom 15%;
        padding-bottom: 0;
    }

    .instructor-image-right {
        position: static;
        max-width: 250px;
        margin-top: -220px;
        /* Overlap with the space created above */
    }
}

@media (max-width: 767px) {
    .section-heading {
        font-size: 30px;
        margin-bottom: 30px;
    }

    .instructor-section-right {
        padding: 70px 0;
    }

    .instructor-container-right {
        width: 100%;
        /* Full width on mobile */
        padding: 40px 0 0;

    }

    .instructor-name-right {
        font-size: 22px;
    }

    .instructor-bio-right {
        font-size: 15px;
    }

    .instructor-info-right {
        margin-bottom: 220px;
    }

    .instructor-image-right {
        max-width: 300px;
        margin-top: -200px;
    }
}

@media (max-width: 480px) {
    .section-heading {
        font-size: 26px;
    }

    .instructor-section-right {
        padding: 50px 0;
    }

    .instructor-container-right {
        padding: 30px 0;
        background-size: 60px;
    }

    .instructor-info-right {
        margin-bottom: 180px;
    }

    .instructor-image-right {
        max-width: 180px;
        margin-top: -210px;
    }
}`,previewImg:"instructors-1.png"},{id:"sec-instructors-2",title:"Instructors 2",htmlCode:`<!-- Instructor Section -->
    <section class="instructor-section">
        <div class="container">
            <h2 class="section-heading">Lead Faculty</h2>
        </div>

        <div class="instructor-container">
            <div class="content-wrapper">

                <div class="instructor-details">
                    <div class="instructor-info">
                        <h3 class="instructor-name">Moshe Ben-Akiva</h3>
                        <p class="instructor-bio"><a
                                href="https://cee.mit.edu/ben-akiva-honored-for-lifetime-achievement-in-transportation-research/"
                                target="_blank">Moshe Ben-Akiva</a> is the Edmund K. Turner Professor of Civil and
                            Environmental Engineering at the
                            Massachusetts Institute of Technology (MIT), and Director of the MIT Intelligent
                            Transportation Systems (ITS) Lab, and Principal Investigator at the Singapore-MIT Alliance
                            for Research and Technology. Professor Ben-Akiva has co-authored two books, including the
                            textbook Discrete Choice Analysis, published by MIT Press, and nearly 400 papers in refereed
                            journals or refereed conferences. He has worked as a consultant in industries such as
                            transportation, energy, telecommunications, financial services and marketing for a number of
                            private and public organizations, including Hague Consulting Group, RAND Europe, and
                            Cambridge Systematics, where he was previously a Senior Principal and member of the Board of
                            Directors. He also was an advisor to Memetrics and ChoiceStream, provided litigation support
                            to Analysis Group and Brattle Group and is the Chief Scientific Advisor to Mobile
                            <span class="nowrap">Market Monitor.</span>
                        </p>
                    </div>
                    <div class="instructor-image-container">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-mstn/images/MosheHeadshot.png"
                            alt="Moshe Ben-Akiva" class="instructor-image">
                    </div>
                </div>
            </div>
        </div>


    </section>`,cssCode:`
/* Instructor Section styles */
.instructor-section {
    background-color: white;
    padding: 30px 0 0;
    position: relative;
}

.instructor-section .section-heading {
    margin-bottom: 35px;
}

.section-heading {
    font-size: 36px;
    font-weight: 800;
    color: #252525;
    margin-bottom: 50px;
}

.instructor-container {
    width: 85%;
    background-color: #55031A;
    padding: 50px 20px 50px;
    position: relative;
    left: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;



}

.content-wrapper {
    /* padding-left: calc(5vw + 20px); */
    padding-right: 0px;
    padding-left: 2.5vw;
}

.instructor-arrow {
    height: 50px;
    position: absolute;
    top: 30px;
}

.instructor-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    /* This should be uncommented */

    padding: 0;
    /* Add padding to ensure content doesn't overlap with the background */
    min-height: 300px;
    /* Set a minimum height to ensure the background is visible */
}

.instructor-info {
    width: 56.666%;
    /* 2/3 of the container width */
    padding-right: 40px;
}

.instructor-name {
    color: white;
    font-size: 24px;
    font-weight: 700;
    /* bold */
    margin-bottom: 15px;
}

.instructor-bio {
    color: white;
    font-size: 16px;
    line-height: 150%;
    font-weight: 400;
    /* regular */
}

.instructor-bio a {
    color: white;
    font-size: 16px;
    text-decoration: underline;
}

.instructor-image-container {
    width: 43.333%;
    position: static;

}

.instructor-image {
    max-width: 600px;
    width: 100%;
    position: absolute;
    bottom: -80px;
}

/* Media queries for different screen sizes */
@media (min-width: 768px) {
    .content-wrapper {
        padding-left: 0;
        /* Tablet and small desktop padding */
    }

    .instructor-container {
        padding-left: 0;
    }

    .instructor-details {
        margin-left: 7.5vw;
    }
    .instructor-section {
        padding: 0px 0;
    }

}

@media (min-width: 1440px) {
    .content-wrapper {
        padding-left: calc((100vw - 1240px) / 2);
        /* Desktop larger than 1440px */
    }

    .instructor-details {
        margin-left: 0;
    }


}

@media (max-width: 1480px) {
    .instructor-container {
        width: 90%;
        padding-bottom: 60px;
    }

    .instructor-container-right {
        width: 90% !important;
    }

    .instructor-image {
        max-width: 550px;
        width: 100%;
        position: absolute;
        bottom: -90px;
    }

    .instructor-container-right {
        margin-top: -36px !important;
    }
}

@media (max-width: 1200px) {
    .instructor-image {
        max-width: 350px;

    }
}

/* Mobile adjustments */
@media (max-width: 991px) {

    .instructor-container {
        width: 80%;
        padding-bottom: 0;
        padding-top: 60px;
    }

    .instructor-details {
        flex-direction: column;
    }

    .instructor-container-right {
        width: 80% !important;
    }

    .instructor-info {
        width: 100%;
        padding-right: 0;
        margin-bottom: 320px;
        /* Make space for the image below */
    }

    .instructor-image-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .instructor-image {
        max-width: 300px;
        margin-top: -280px;
        position: absolute;
        bottom: 0px;
    }
}

@media (max-width: 767px) {

    .instructor-container {
        width: 890%;
    }

    .section-heading {
        font-size: 30px;
        margin-bottom: 30px;
    }

    .instructor-section {
        padding: 70px 0;
    }

    .instructor-container {
        width: 100%;
        /* Full width on mobile */
        padding: 40px 0 0;
    }

    .instructor-name {
        font-size: 22px;
    }

    .instructor-bio {
        font-size: 15px;
        padding-bottom: 100px;
    }

    .instructor-info {
        margin-bottom: 220px;
        max-width: 80vw;
    }

    /* .instructor-image {
        max-width: 300px;
        margin-top: -250px;
    } */
}

@media (max-width: 480px) {
    .section-heading {
        font-size: 26px;
    }

    .instructor-section {
        padding: 50px 0;
    }

    .instructor-container {
        padding: 30px 0 0;
    }

    .instructor-info {
        margin-bottom: 180px;
    }

    .instructor-image {
        max-width: 270px;
        margin-top: -210px;
    }
}


/* Right-Aligned Instructor Section styles */
.instructor-section-right {
    background-color: white;
    padding: 100px 0;
    overflow-x: hidden;
    position: relative;

}

.section-heading {
    font-size: 36px;
    font-weight: 800;
    color: #252525;
    margin-bottom: 50px;
}

.instructor-container-right {
    width: 75%;
    background-color: #7F0426;
    padding: 60px 0;
    position: relative;
    right: 0;
    margin-left: auto;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-top: -40px;
    overflow: hidden;


}

.content-wrapper-right {
    padding-right: 5vw;
    /* Default mobile padding on right */
    padding-left: 20px;
}

.instructor-details-right {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
}

.instructor-info-right {
    width: 66.666%;
    /* 2/3 of the container width */
    padding-left: 40px;
}

.instructor-name-right {
    color: white;
    font-size: 24px;
    font-weight: 700;
    /* bold */
    margin-bottom: 15px;
}

.instructor-bio-right {
    color: white;
    font-size: 16px;
    line-height: 150%;
    font-weight: 400;
    /* regular */
}

.instructor-image-container-right {
    width: 33.333%;
    /* 1/3 of the container width */

}

.instructor-image-right {
    max-width: 300px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 60px;
}

/* Media queries for different screen sizes */
@media (min-width: 768px) {
    .content-wrapper-right {
        padding-right: 7.5vw;
        /* Tablet and small desktop padding */
    }
}

@media (min-width: 1440px) {
    .content-wrapper-right {
        padding-right: calc((100vw - 1240px) / 2);
        /* Desktop larger than 1440px */
    }
}

/* Mobile adjustments */
@media (max-width: 991px) {
    .instructor-details-right {
        flex-direction: column;
    }

    .instructor-info-right {
        width: 100%;
        padding-left: 0;
        margin-bottom: 250px;
        /* Make space for the image below */
        order: 1;
    }




}

@media (max-width: 767px) {
    .section-heading {
        font-size: 30px;
        margin-bottom: 30px;
    }

    .instructor-section-right {
        padding: 70px 0;
    }

    .instructor-container-right {
        width: 100%;
        /* Full width on mobile */
        padding: 40px 0 0;

    }

    .instructor-name-right {
        font-size: 22px;
    }

    .instructor-bio-right {
        font-size: 15px;
    }

    .instructor-info-right {
        margin-bottom: 220px;
    }

    .instructor-image-right {
        max-width: 300px;
        margin-top: -200px;
    }
}

@media (max-width: 480px) {
    .section-heading {
        font-size: 26px;
    }

    .instructor-section-right {
        padding: 50px 0;
    }

    .instructor-container-right {
        padding: 30px 0;
        background-size: 60px;
    }

    .instructor-info-right {
        margin-bottom: 180px;
    }

    .instructor-image-right {
        max-width: 180px;
        margin-top: -210px;
    }
}`,previewImg:"instructors-2.png"},{id:"sec-instructors-3",title:"Instructors 3",htmlCode:` <!-- Instructor Section -->
    <section class="instructor-section">
        <div class="container">
            <h2 class="section-heading">Lead Faculty</h2>
        </div>

        <div class="instructor-container">
            <div class="content-wrapper">

                <div class="instructor-details">
                    <div class="instructor-info">
                        <h3 class="instructor-name">Pulkit Agrawal</h3>
                        <p class="instructor-bio">Pulkit Agrawal is assistant professor of electrical engineering and
                            computer science at MIT and leads the Improbable AI Lab, part of the Computer Science and
                            Artificial Intelligence Lab at MIT and affiliated with the Laboratory for Information and
                            Decision Systems. Agrawal also co-founded SafelyYou, an organization that builds fall
                            prevention technology, and the AI Foundry, an incubator for
                            <span class="nowrap">AI startups.</span>
                        </p>
                    </div>
                    <div class="instructor-image-container">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/MIT%2003.31%20AI%20in%20Robotics%20Learning%20Algorithms%2C%20Design%20and%20Safety-pulkit-cutout.png"
                            alt="Pulkit Agrawal" class="instructor-image">
                    </div>
                </div>
            </div>
        </div>

        <div class="instructor-container-right">
            <div class="content-wrapper-right">
                <div class="instructor-details-right">
                    <div class="instructor-image-container-right">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/MIT%2003.31%20AI%20in%20Robotics%20Learning%20Algorithms%2C%20Design%20and%20Safety-chuchu-cutout.png"
                            alt="Chuchu Fan" class="instructor-image-right">
                    </div>
                    <div class="instructor-info-right">
                        <h3 class="instructor-name-right">Chuchu Fan</h3>
                        <p class="instructor-bio-right">Chuchu Fan is an Assistant Professor in the Department of
                            Aeronautics and Astronautics (AeroAstro) and Laboratory for Information and Decision Systems
                            (LIDS) at MIT. Before that, she was a postdoc researcher at Caltech and got her Ph.D. from
                            ECE at the University of Illinois at Urbana-Champaign. She earned her bachelor’s degree from
                            Tsinghua University, Department of Automation. Her research group Realm at MIT works on
                            using rigorous mathematics, including formal methods, machine learning, and control theory,
                            for the design, analysis, and verification of safe <span class="nowrap"> autonomous
                                systems.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>`,cssCode:"",previewImg:"instructors-3.png"},{id:"sec-instructors-4",title:"Instructors 4",htmlCode:` <!-- Instructor Section -->
    <section class="instructor-section">
        <div class="container">
            <h2 class="section-heading">Core Competencies</h2>
        </div>

        <div class="instructor-container">
            <div class="content-wrapper">

                <div class="instructor-details">
                    <div class="instructor-info">
                        <h3 class="instructor-name"> Michael Davies </h3>
                        <p class="instructor-bio">Professor <a href="http://mamd.mit.edu/" target="_blank">Michael A M
                                Davies</a> teaches the engineering and
                            business elements of the <a href="https://sdm.mit.edu/Integrated" target="_blank">Integrated
                                Design
                                and Management (IDM)</a> program at MIT. He is an
                            expert on the connections between technology, innovation, product development, consumer
                            choice and behavior, the adoption and diffusion of new products, intellectual property, and
                            the emergence and evolution of platforms and business ecosystems. Michael has spent his
                            career helping top management make strategic decisions and drive innovation. Nowadays, he is
                            focused on the rapid shift toward smartphones, cloud services, the Internet of Things,
                            artificial intelligence, and robotics, particularly the forces driving this shift and its
                            impact and implications over the next
                            <span class="nowrap">few years.</span>
                        </p>
                    </div>
                    <div class="instructor-image-container">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-merai/images/MichaelDavies.png"
                            alt="Michael Davies" class="instructor-image">
                    </div>
                </div>
            </div>
        </div>


    </section>`,cssCode:`
/* Instructor Section styles */
.instructor-section {
    background-color: white;
    padding: 75px 0 0;
    overflow-x: hidden;
    position: relative;
}

.section-heading {
    font-size: 36px;
    font-weight: 800;
    color: #252525;
    margin-bottom: 50px;
}

.instructor-container {
    width: 75%;
    background-color: #01318C;
    padding: 50px 20px 50px;
    position: relative;
    left: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-image: url("https://slxcloud.app/MIT/2025/Course-2025-merai/images/LeadFacultyBox.png");
    background-size: cover;
    background-position: left 10% center;


}

.content-wrapper {
    /* padding-left: calc(5vw + 20px); */
    padding-right: 0px;
    padding-left: 2.5vw;
}

.instructor-arrow {
    height: 50px;
    position: absolute;
    top: 30px;
}

.instructor-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    /* This should be uncommented */

    padding: 0;
    /* Add padding to ensure content doesn't overlap with the background */
    min-height: 300px;
    /* Set a minimum height to ensure the background is visible */
}

.instructor-info {
    width: 56.666%;
    /* 2/3 of the container width */
    padding-right: 40px;
}

.instructor-name {
    color: white;
    font-size: 24px;
    font-weight: 700;
    /* bold */
    margin-bottom: 15px;
}

.instructor-bio {
    color: white;
    font-size: 16px;
    line-height: 150%;
    font-weight: 400;
    /* regular */
}

.instructor-bio a {
    color: white;
    font-size: 16px;
    text-decoration: underline;
}

.instructor-image-container {
    width: 43.333%;
    position: static;

}

.instructor-image {
    max-width: 430px;
    width: 100%;
    position: absolute;
    bottom: -80px;
}

/* Media queries for different screen sizes */
@media (min-width: 768px) {
    .content-wrapper {
        padding-left: 0;
        /* Tablet and small desktop padding */
    }

    .instructor-container {
        padding-left: 0;
    }

    .instructor-details {
        margin-left: 7.5vw;
    }

}

@media (min-width: 1440px) {
    .content-wrapper {
        padding-left: calc((100vw - 1240px) / 2);
        /* Desktop larger than 1440px */
    }

    .instructor-details {
        margin-left: 0;
    }


}

@media (max-width: 1480px) {
    .instructor-container {
        width: 90%;
        padding-bottom: 60px;
    }

    .instructor-container-right {
        width: 90% !important;
    }

    .instructor-image {
        max-width: 430px;
        width: 100%;
        position: absolute;
        bottom: -90px;
    }

    .instructor-container-right {
        margin-top: -36px !important;
    }
}

@media (max-width: 1200px) {
    .instructor-image {
        max-width: 350px;

    }
}
/* Mobile adjustments */
@media (max-width: 991px) {

    .instructor-container {
        width: 80%;
        padding-bottom: 0;
        padding-top: 60px;
    }

    .instructor-details {
        flex-direction: column;
    }

    .instructor-container-right {
        width: 80% !important;
    }

    .instructor-info {
        width: 100%;
        padding-right: 0;
        margin-bottom: 320px;
        /* Make space for the image below */
    }

    .instructor-image-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .instructor-image {
        max-width: 300px;
        margin-top: -280px;
        position: absolute;
        bottom: -20px;
    }
}

@media (max-width: 767px) {

    .instructor-container {
        width: 890%;
    }

    .section-heading {
        font-size: 30px;
        margin-bottom: 30px;
    }

    .instructor-section {
        padding: 70px 0;
    }

    .instructor-container {
        width: 100%;
        /* Full width on mobile */
        padding: 40px 0 0;
    }

    .instructor-name {
        font-size: 22px;
    }

    .instructor-bio {
        font-size: 15px;
        padding-bottom: 100px;
    }

    .instructor-info {
        margin-bottom: 220px;
        max-width: 80vw;
    }

    /* .instructor-image {
        max-width: 300px;
        margin-top: -250px;
    } */
}

@media (max-width: 480px) {
    .section-heading {
        font-size: 26px;
    }

    .instructor-section {
        padding: 50px 0;
    }

    .instructor-container {
        padding: 30px 0 0;
    }

    .instructor-info {
        margin-bottom: 180px;
    }

    .instructor-image {
        max-width: 270px;
        margin-top: -210px;
    }
}


/* Right-Aligned Instructor Section styles */
.instructor-section-right {
    background-color: white;
    padding: 100px 0;
    overflow-x: hidden;
    position: relative;

}

.section-heading {
    font-size: 36px;
    font-weight: 800;
    color: #252525;
    margin-bottom: 50px;
}

.instructor-container-right {
    width: 75%;
    background-color: #7F0426;
    padding: 60px 0;
    position: relative;
    right: 0;
    margin-left: auto;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-top: -40px;
    overflow: hidden;


}

.content-wrapper-right {
    padding-right: 5vw;
    /* Default mobile padding on right */
    padding-left: 20px;
}

.instructor-details-right {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
}

.instructor-info-right {
    width: 66.666%;
    /* 2/3 of the container width */
    padding-left: 40px;
}

.instructor-name-right {
    color: white;
    font-size: 24px;
    font-weight: 700;
    /* bold */
    margin-bottom: 15px;
}

.instructor-bio-right {
    color: white;
    font-size: 16px;
    line-height: 150%;
    font-weight: 400;
    /* regular */
}

.instructor-image-container-right {
    width: 33.333%;
    /* 1/3 of the container width */

}

.instructor-image-right {
    max-width: 300px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 60px;
}

/* Media queries for different screen sizes */
@media (min-width: 768px) {
    .content-wrapper-right {
        padding-right: 7.5vw;
        /* Tablet and small desktop padding */
    }
}

@media (min-width: 1440px) {
    .content-wrapper-right {
        padding-right: calc((100vw - 1240px) / 2);
        /* Desktop larger than 1440px */
    }
}

/* Mobile adjustments */
@media (max-width: 991px) {
    .instructor-details-right {
        flex-direction: column;
    }

    .instructor-info-right {
        width: 100%;
        padding-left: 0;
        margin-bottom: 250px;
        /* Make space for the image below */
        order: 1;
    }




}

@media (max-width: 767px) {
    .section-heading {
        font-size: 30px;
        margin-bottom: 30px;
    }

    .instructor-section-right {
        padding: 70px 0;
    }

    .instructor-container-right {
        width: 100%;
        /* Full width on mobile */
        padding: 40px 0 0;

    }

    .instructor-name-right {
        font-size: 22px;
    }

    .instructor-bio-right {
        font-size: 15px;
    }

    .instructor-info-right {
        margin-bottom: 220px;
    }

    .instructor-image-right {
        max-width: 300px;
        margin-top: -200px;
    }
}

@media (max-width: 480px) {
    .section-heading {
        font-size: 26px;
    }

    .instructor-section-right {
        padding: 50px 0;
    }

    .instructor-container-right {
        padding: 30px 0;
        background-size: 60px;
    }

    .instructor-info-right {
        margin-bottom: 180px;
    }

    .instructor-image-right {
        max-width: 180px;
        margin-top: -210px;
    }
}`,previewImg:"instructors-4.png"}]},DC={id:"cat-text-image",name:"Text Image Overlap",sections:[{id:"sec-textimg-1",title:"Text-Image 1",htmlCode:`<section class="digital-age-section">
        <div class="container">
            <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/arrow%203.png" alt="Arrow"
                class="digital-age-arrow" />
            <div class="digital-age-grid">
                <div class="image-column">
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/woman-digital-age.jpg"
                        alt="Woman in the digital age" class="digital-image">
                </div>
                <div class="text-column">
                    <div class="text-content">
                        <h2 class="digital-heading">Tap the Potential of the Digital Age.<br><em> Transform Your
                                Organization.</em></h2>
                        <p class="digital-text">In today's highly uncertain, increasingly digital world, it's more
                            essential than ever to understand how to enhance the value your business provides to <span
                                class="nowrap"></span>its
                            consumers.</span></p>
                        <p class="digital-text">In this three-day course, you'll acquire proven tools, skills, and
                            frameworks that can help you take your current product and services strategies to the next
                            level and future-proof your innovation efforts. You'll leave primed to use game-changing
                            technologies that can help you build better customer experiences and meet the unique,
                            evolving challenges of the<span class="nowrap"> digital age.</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>`,cssCode:`/* Digital Age Section with Image and Text */
.digital-age-section {
    margin-top: 75px;
    padding: 0px 0 0px;
    background-color: #fff;
    position: relative;
    /* Light background for the section */
}


.digital-age-grid {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 0px;
    align-items: center;
}


.digital-image {
    width: 55vw;
    height: auto;
    display: block;
    border-radius: 10px;
    position: absolute;
    left: 0;
    top: -70px;
    border-radius: 0 10px 10px 0;
    z-index: 1
}

.text-column {
    display: flex;
    align-items: center;
    padding-left: 40px;
}

.text-content {
    background-color: #C64A1E;
    border-radius: 10px;
    padding: 55px;
    color: white;
    z-index: 2;
}

.digital-heading {
    font-size: 32px;
    font-weight: 800;
    /* extra bold */
    line-height: 120%;
    color: white;
    margin-bottom: 20px;
}

.digital-text {
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 20px;
}

.digital-text:last-child {
    margin-bottom: 0;
}

@media (min-width: 1600px) {

    .text-content {
        background-color: #C64A1E;
        border-radius: 10px;
        padding: 120px 55px;

    }
}

/* Media query for tablet and below */
@media (max-width: 991px) {
    .digital-age-grid {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .text-content {
        padding: 40px;
        border-radius: 0 0 10px 10px;
    }

    .digital-heading {
        font-size: 30px;
    }

    .digital-image {
        position: unset;
        width: 100%;
        border-radius: 10px 10px 0 0;
    }

    .digital-age-section {
        margin-top: 0;
    }
}

/* Media query for mobile */
@media (max-width: 767px) {
    .digital-age-section {
        padding: 60px 0;
    }

    .text-content {
        padding: 30px;
        border-radius: 0 0 10px 10px;
    }

    .digital-heading {
        font-size: 26px;
        margin-bottom: 15px;
    }

    .digital-text {
        font-size: 15px;
        line-height: 145%;
    }
}

/* Additional adjustments for smaller screens */
@media (max-width: 480px) {
    .digital-age-section {
        padding: 40px 0;
    }

    .text-content {
        padding: 25px;
        border-radius: 0 0 10px 10px;
    }

    .digital-heading {
        font-size: 24px;
    }
}

.digital-age-arrow {
    width: 100%;
    max-width: 500px;
    position: absolute;
    top: 45%;
    left: 15%;
    z-index: 999;
}

@media (max-width: 1700px) {
    .digital-age-arrow {
        max-width: 450px;
        position: absolute;
        top: 45%;
        left: 15%;
    }
}

@media (max-width: 1440px) {
    .digital-age-arrow {
        max-width: 450px;
        position: absolute;
        top: 45%;
        left: 10%;
    }
}

@media (max-width: 1140px) {
    .digital-age-arrow {
        max-width: 450px;
        position: absolute;
        top: 45%;
        left: 5%;
    }
}

@media (max-width: 992px) {
    .digital-age-arrow {
        display: none;
    }
}`,previewImg:"textimg-1.png"},{id:"sec-textimg-2",title:"Text-Image 2",htmlCode:` <section class="digital-age-section">

        <div class="digital-age-grid">

            <div class="text-column">
                <div class="text-content">
                    <h2 class="digital-heading">Unlock AI for accelerated <br> scientific innovation</h2>
                    <p class="digital-text">Biology. Chemistry. Engineering. AI is transforming how scientific
                        discoveries are made across multiple disciplines, empowering researchers to enhance
                        workflows, generate hypotheses, speed up simulations, and automate experiment design.
                        Looking to harness the latest in AI to optimize your own research? Start here <span
                            class="nowrap"></span>at MIT.</span></p>
                    <p class="digital-text">In this high-impact three-day course—taught by MIT Professor Wojciech
                        Matusik and Harvard University Professor Hanspeter Pfister—you'll learn how to apply a range
                        of AI advancements to the scientific <span class="nowrap">discovery process.</span></p>
                    <p class="digital-text">Using generative and predictive AI models, you'll learn how to propose
                        innovative molecules, materials, and experimental designs, enabling you to optimize planning
                        and accelerate results. You'll also master AI techniques for solving common scientific
                        challenges, such as working with small datasets and automating repetitive tasks, freeing you
                        to focus on higher-value problem solving. Additionally, you'll dive into structured methods
                        for data visualization, making complex research findings easier to interpret <span
                            class="nowrap">and share.</span></p>
                </div>
            </div>
            <div class="image-column">
                <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/scientific-innovation.png" alt="Unlock AI for accelerated
                        scientific innovation" class="digital-image">
            </div>
        </div>
    </section>`,cssCode:`/* Digital Age Section with Image and Text */
.digital-age-section {
    margin-top: 75px;
    padding: 0px 0 0px;
    background-color: #fff;
    position: relative;
    /* Light background for the section */
}


.digital-age-grid {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 0px;
    align-items: center;
}


.digital-image {
    width: 50vw;

    border-radius: 0 10px 10px 0;
  
}

.text-column {
    display: flex;
    align-items: center;
}

.text-content {
    background-color: #EEEEEE;
    border-radius: 10px;
    color: #262525;
    z-index: 2;
}

.digital-heading {
    font-size: 32px;
    font-weight: 800;
    /* extra bold */
    line-height: 120%;
    color: 262525;
    margin-bottom: 20px;
}

.digital-text {
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 20px;
}

.digital-text:last-child {
    margin-bottom: 0;
}

@media (min-width: 1600px) {

    .text-content {
        border-radius: 10px;

    }
}

@media (min-width: 1440px) {

    .text-content {
        
        padding: 90px;
        padding-left: calc((100vw - 1240px)/2);
        padding-right: 80px;
        width: 55vw;
    }
}
@media (max-width: 1440px) {

    .text-content {
        
        padding: 70px 7.5vw;
        width: 55vw;
    }
}


@media (min-width: 991px) {
    .digital-image  {
        position: absolute;
    top: -100px;
    width: 50vw;
    left: 50%;
    }

    
}
/* Media query for tablet and below */
@media (max-width: 991px) {
    .digital-age-grid {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .text-content {
        border-radius:10px 10px 0 0;
        padding: 40px 7.5vw;
        width: 100%;

    }

    .digital-heading {
        font-size: 30px;
    }

    .digital-image {
        position: unset;
        width: 100%;
        border-radius:  0 0 10px 10px;
    }

    .digital-age-section {
        margin-top: 0;
    }
}

/* Media query for mobile */
@media (max-width: 767px) {
    .digital-age-section {
        padding: 60px 0;
    }

    .text-content {
        border-radius:10px 10px 0 0 ;
        padding: 40px 2.5vw;

    }

    .digital-heading {
        font-size: 26px;
        margin-bottom: 15px;
    }

    .digital-text {
        font-size: 15px;
        line-height: 145%;
    }
}

/* Additional adjustments for smaller screens */
@media (max-width: 480px) {
    .digital-age-section {
        padding: 40px 0;
    }

    .text-content {
        border-radius:10px 10px 0 0 ;
        padding: 40px 2.5vw;
    }

    .digital-heading {
        font-size: 24px;
    }
}

.digital-age-arrow {
    width: 100%;
    max-width: 500px;
    position: absolute;
    top: 45%;
    left: 15%;
    z-index: 999;
}

@media (max-width: 1700px) {
    .digital-age-arrow {
        max-width: 450px;
        position: absolute;
        top: 45%;
        left: 15%;
    }
}

@media (max-width: 1440px) {
    .digital-age-arrow {
        max-width: 450px;
        position: absolute;
        top: 45%;
        left: 10%;
    }
}

@media (max-width: 1140px) {
    .digital-age-arrow {
        max-width: 450px;
        position: absolute;
        top: 45%;
        left: 5%;
    }
}

@media (max-width: 992px) {
    .digital-age-arrow {
        display: none;
    }
}

`,previewImg:"textimg-2.png"}]},LC={id:"cat-download",name:"Download",sections:[{id:"sec-download-1",title:"Download Section 1",htmlCode:`<!-- Download Section -->
    <section class="download-section">
        <div class="container">
            <div class="download-columns">
                <div class="download-column left-column">
                    <h2 class="download-heading">
                        <span class="highlight">Submit the form</span> to download the Breakthrough Innovation:
                        Harnessing AI+ to Create
                        <span class="nowrap">Value brochure</span>
                    </h2>
                </div>
                <div class="download-column right-column" id="form">
                    <iframe src="https://professional-education.mit.edu/l/310211/2025-01-30/3s4zngq" width="100%"
                        height="500" type="text/html" frameborder="0" allowTransparency="true"
                        style="border: 0"></iframe>
                </div>
            </div>
        </div>
    </section>`,cssCode:`

/* Straight-cut white corner in the top right */
.download-section::before {
    content: "";
    position: absolute;
    top: -2px;
    right: 0;
    width: 130px;
    height: 100px;
    background-color: white;
    clip-path: polygon(100% 0, 0 0, 100% 100%);
}

.download-columns {
    display: grid;
    gap: 50px;
    position: relative;
    grid-template-columns: 1fr 1fr;
    /* Ensure content stays above the corner piece */
    z-index: 1;
}


.download-column.left-column {
    background-image: url("https://slxcloud.app/MIT/2025/Course-2025-bicv/images/arrow%202.png");
    background-position: bottom 16% center;
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
}

.download-heading {
    font-size: 36px;
    line-height: 120%;
    font-weight: 800;
    color: #ffffff;
    display: block;
}

.highlight {
    color: #D6E040;
}

/* Media query for smaller screens */
@media (max-width: 991px) {
    .download-columns {
        gap: 30px;
    }

    .download-heading {
        font-size: 30px;
    }

    .download-section::before {
        width: 100px;
        height: 80px;
    }
}

@media (max-width: 767px) {
    .download-columns {
        grid-template-columns: 1fr;
    }

    .download-column.left-column {
        background-image: none;

    }

    .download-heading {
        font-size: 26px;
        margin-bottom: 40px;
        display: block;
    }

    .download-section::before {
        width: 80px;
        height: 60px;
    }

    /* Ensure the download section left column is visible */
    .download-section .left-column {
        display: block;
    }
}

@media (max-width: 480px) {
    .download-section {
        padding: 80px 0;
    }

    .download-heading {
        font-size: 24px;
    }

    .download-section::before {
        width: 60px;
        height: 45px;
    }
}`,previewImg:"download-1.png"},{id:"sec-download-2",title:"Download Section 2",htmlCode:`<!-- Download Section -->
    <section class="download-section">
        <div class="container">
            <div class="download-columns">
                <div class="download-column left-column">
                    <h2 class="download-heading">
                        <span class="highlight">Submit the form</span> to<br> to download the Future Transportation
                        Systems: User-Centric, Green, Automated <span style="font-weight: 300; font-style: italic">&</span>
                        <span class="nowrap"> AI-Driven brochure</span>
                    </h2>
                </div>
                <div class="download-column right-column" id="form">
                   %%content%%
                </div>
            </div>
        </div>
    </section>`,cssCode:`/* Download section styles */
.download-section {
    background-color: #E8E8E8;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
    clip-path: polygon(0 0,
            /* top left */
            calc(100% - 150px) 0,
            /* top right minus triangle width */
            100% 150px,
            /* triangle point */
            100% 100%,
            /* bottom right */
            0 100%
            /* bottom left */

        );

}



.download-columns {
    display: grid;
    gap: 50px;
    position: relative;
    grid-template-columns: 1fr 1fr;
    /* Ensure content stays above the corner piece */
    z-index: 1;
}


.download-column.left-column {

    display: flex;
    align-items: flex-start;
}

.download-heading {
    font-size: 36px;
    line-height: 120%;
    font-weight: 800;
    color: #55031A;
    display: block;
}

.highlight {
    color: #A90533;
}

/* Media query for smaller screens */
@media (max-width: 991px) {
    .download-columns {
        gap: 30px;
    }

    .download-heading {
        font-size: 30px;
    }

    .download-section::before {
        width: 100px;
        height: 80px;
    }
}

@media (max-width: 767px) {
    .download-columns {
        grid-template-columns: 1fr;
    }

    .download-column.left-column {
        background-image: none;

    }

    .download-heading {
        font-size: 26px;
        margin-bottom: 40px;
        display: block;
    }

    .download-section::before {
        width: 80px;
        height: 60px;
    }

    /* Ensure the download section left column is visible */
    .download-section .left-column {
        display: block;
    }
}

@media (max-width: 480px) {
    .download-section {
        padding: 80px 0;
    }

    .download-heading {
        font-size: 24px;
    }

    .download-section::before {
        width: 60px;
        height: 45px;
    }
}`,previewImg:"download-2.png"},{id:"sec-download-3",title:"Download Section 3",htmlCode:` <!-- Download Section -->
    <section class="download-section">
        <div class="container">
            <div>
                <p class="pre-form-text">Discover how generative AI tools are revolutionizing robotic design in our
                    accelerated Short Programs course. Download our brochure to <span class="nowrap">learn more.</span></p>
            </div>
            <div class="download-columns">
                <div class="download-column left-column">
                    <h2 class="download-heading">
                        <span class="highlight">Learn on the<br>
                            cutting-edge of the <span class="nowrap"> AI revolution</span>
                    </h2>
                    <p class="download-subheading">Take a deep dive into the latest advances in robot learning, safety
                        certification, and testing—and explore the many ways generative AI is revolutionizing robotics
                        in this high-impact <span class="nowrap">three-day course.</span></p>
                </div>
                <div class="download-column right-column" id="form">
                    <iframe src="https://professional-education.mit.edu/l/310211/2025-01-30/3s4zngq" width="100%"
                        height="500" type="text/html" frameborder="0" allowTransparency="true"
                        style="border: 0"></iframe>
                </div>
            </div>
        </div>
    </section>`,cssCode:`
/* Download section styles */
.download-section {
    background-color: #ffffff;
    padding: 65px 0 0;
    position: relative;
    overflow: hidden;
    background-image: url("https://slxcloud.app/MIT/2025/Course-2025-air/images/MIT%2003.31%20AI%20in%20Robotics%20Learning%20Algorithms%2C%20Design%20and%20Safety%20%20am-NUMBERS.png?_t=1743695557");
    background-repeat: no-repeat;
    background-size: 40%;
    background-position: top 10% right;
}



.download-columns {
    display: grid;
    gap: 50px;
    position: relative;
    grid-template-columns: 1fr 1fr;
    /* Ensure content stays above the corner piece */
    z-index: 1;
}


.download-column.left-column {
    /* background-image: url("https://slxcloud.app/MIT/2025/Course-2025-bicv/images/arrow%202.png"); */
    background-position: bottom 16% center;
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 43px;
}

.download-heading {
    font-size: 52px;
    line-height: 120%;
    font-weight: 800;
    color: #01318C;
    display: block;
    max-width: 550px;
}

.download-subheading {
    font-size: 28px;
    line-height: 134%;
    font-weight: 500;
    color: #252525;
    display: block;
}

.pre-form-text {
    position: relative;
    /* Required for the pseudo-element positioning */
    font-size: 16px;
    font-weight: 500;
    line-height: 140%;
    max-width: 550px;
    background-color: transparent;
    /* Remove background from the main element */
    padding: 40px 70px 40px 0;
    margin-bottom: 50px;
    z-index: 222;
}

.pre-form-text::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: -100vw;
    /* Extend to the left edge of the viewport */
    background-color: #E4EAF5;
    z-index: -1;
    /* Place it behind the text */
    clip-path: polygon(0% 0%, 100% 0%, 99% 100%, 0% 100%);
}

.highlight {
    color: #01318C;
}

/* Media query for smaller screens */
@media (max-width: 991px) {
    .download-columns {
        gap: 30px;
    }

    .download-heading {
        font-size: 30px;
    }

    .download-section::before {
        width: 100px;
        height: 80px;
    }
}

@media (max-width: 767px) {
    .download-columns {
        grid-template-columns: 1fr;
    }

    .download-column.left-column {
        background-image: none;

    }

    .download-heading {
        font-size: 26px;
        margin-bottom: 40px;
        display: block;
    }

    .download-section::before {
        width: 80px;
        height: 60px;
    }

    /* Ensure the download section left column is visible */
    .download-section .left-column {
        display: block;
    }
}

@media (max-width: 480px) {
    .download-section {
        padding: 80px 0;
    }

    .download-heading {
        font-size: 24px;
    }

    .download-section::before {
        width: 60px;
        height: 45px;
    }
}
`,previewImg:"download-3.png"},{id:"sec-download-4",title:"Download Section 4",htmlCode:`<!-- Download Section -->
    <section class="download-section">
        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/arrows-gray.png" class="form-arrows-top" />
        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/arrows-gray.png" class="form-arrows-bottom" />
        <div class="container">

            <div class="download-columns">
                <div class="download-column left-column">
                    <h2 class="download-heading">
                        <span class="highlight">Submit the form</span> to<br> download the AI for
                        <span class="nowrap">Scientific Discovery</span>
                    </h2>
                </div>
                <div class="download-column right-column" id="form">
                    <iframe src="https://professional-education.mit.edu/l/310211/2025-01-30/3s4zngq" width="100%"
                        height="500" type="text/html" frameborder="0" allowTransparency="true"
                        style="border: 0"></iframe>
                </div>
            </div>
        </div>
    </section>`,cssCode:`
/* Download section styles */
.download-section {
    background-color: #ffffff;
    padding: 75px 0;
    position: relative;
    overflow: hidden;
}



.download-columns {
    display: grid;
    gap: 50px;
    position: relative;
    grid-template-columns: 1fr 1fr;
    /* Ensure content stays above the corner piece */
    z-index: 1;
}


.download-column.left-column {
    /* background-image: url("https://slxcloud.app/MIT/2025/Course-2025-bicv/images/arrow%202.png"); */
    background-position: bottom 16% center;
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
}

.download-heading {
    font-size: 36px;
    line-height: 120%;
    font-weight: 800;
    color: #262525;
    display: block;
}

.highlight {
    color: #A90533;
}

/* Media query for smaller screens */
@media (max-width: 991px) {
    .download-columns {
        gap: 30px;
    }

    .download-heading {
        font-size: 30px;
    }

    .download-section::before {
        width: 100px;
        height: 80px;
    }
}

@media (max-width: 767px) {
    .download-columns {
        grid-template-columns: 1fr;
    }

    .download-column.left-column {
        background-image: none;

    }

    .download-heading {
        font-size: 26px;
        margin-bottom: 40px;
        display: block;
    }

    .download-section::before {
        width: 80px;
        height: 60px;
    }

    /* Ensure the download section left column is visible */
    .download-section .left-column {
        display: block;
    }
}

@media (max-width: 480px) {
    .download-section {
        padding: 80px 0;
    }

    .download-heading {
        font-size: 24px;
    }

    .download-section::before {
        width: 60px;
        height: 45px;
    }
}`,previewImg:"download-4.png"},{id:"sec-download-5",title:"Download Section 5",htmlCode:`<!-- Download Section -->
    <section class="download-section">
        <div class="container">
            <div class="download-columns">
                <div class="download-column left-column">
                    <h2 class="download-heading">
                        <span class="highlight">Submit the form</span> to<br> to download the Ethics of AI: Building
                        Responsible AI, Machine Learning, and
                        <span class="nowrap"> GPTs Brochure</span>
                    </h2>
                </div>
                <div class="download-column right-column" id="form">
                    <iframe src="https://professional-education.mit.edu/l/310211/2025-01-30/3s4zngq" width="100%"
                        height="500" type="text/html" frameborder="0" allowTransparency="true"
                        style="border: 0"></iframe>
                </div>
            </div>
        </div>
    </section>`,cssCode:`
/* Download section styles */
.download-section {
    background-color: #E4EAF5;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
    clip-path: polygon(0 0,
            /* top left */
            calc(100% - 150px) 0,
            /* top right minus triangle width */
            100% 150px,
            /* triangle point */
            100% 100%,
            /* bottom right */
            0 100%
            /* bottom left */

        );
    background-image: url(https://slxcloud.app/MIT/2025/Course-2025-merai/images/Binary1.png);
    background-repeat: no-repeat;
    background-size: 40%;
    background-position: bottom 10% left;
}



.download-columns {
    display: grid;
    gap: 50px;
    position: relative;
    grid-template-columns: 1fr 1fr;
    /* Ensure content stays above the corner piece */
    z-index: 1;
}


.download-column.left-column {
    /* background-image: url("https://slxcloud.app/MIT/2025/Course-2025-bicv/images/arrow%202.png"); */
    background-position: bottom 16% center;
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: flex-start;
}

.download-heading {
    font-size: 36px;
    line-height: 120%;
    font-weight: 800;
    color: #01318C;
    display: block;
}

.highlight {
    color: #021944;
}

/* Media query for smaller screens */
@media (max-width: 991px) {
    .download-columns {
        gap: 30px;
    }

    .download-heading {
        font-size: 30px;
    }

    .download-section::before {
        width: 100px;
        height: 80px;
    }
}

@media (max-width: 767px) {
    .download-columns {
        grid-template-columns: 1fr;
    }

    .download-column.left-column {
        background-image: none;

    }

    .download-heading {
        font-size: 26px;
        margin-bottom: 40px;
        display: block;
    }

    .download-section::before {
        width: 80px;
        height: 60px;
    }

    /* Ensure the download section left column is visible */
    .download-section .left-column {
        display: block;
    }
}

@media (max-width: 480px) {
    .download-section {
        padding: 80px 0;
    }

    .download-heading {
        font-size: 24px;
    }

    .download-section::before {
        width: 60px;
        height: 45px;
    }
}
`,previewImg:"download-5.png"}]},jC={id:"cat-courseDetails",name:"Course Details",sections:[{id:"sec-course-details-1",title:"Course Details Section 1",htmlCode:`<!-- Course Details Section -->
    <section class="course-details-section">
        <div class="container">
            <div class="course-details-columns">
                <div class="course-title-column">
                    <h2 class="section-heading">Course<br>Details</h2>
                </div>
                <div class="course-info-column-wrapper">
                    <div class="course-info-column">
                        <div class="course-description">
                            <p>Featuring dynamics lectures, case study analysis, and interactive projects, this program
                                is grounded in the latest research from MIT's Intelligent Transportation Systems Lab.
                                With the guidance of engineering expert Professor Moshe Ben-Akiva, you'll focus on
                                today's most pressing mobility topics, including traffic simulation models (microscopic
                                to macroscopic), discrete choice modeling for travel behavior, and predictive analysis
                                using <span class="nowrap"> machine learning.</span></p>

                        </div>
                        <div class="course-specifics">
                            <div class="course-specifics-grid">
                                <div class="course-specific-item">
                                    <h3 class="specific-title">Course Dates</h3>
                                    <div class="divider"></div>
                                    <p class="specific-value">July 28-Aug. 1, 2025</p>
                                </div>
                                <div class="course-specific-item">
                                    <h3 class="specific-title">Duration</h3>
                                    <div class="divider"></div>
                                    <p class="specific-value">5 Days</p>
                                </div>
                                <div class="course-specific-item">
                                    <h3 class="specific-title">Format</h3>
                                    <div class="divider"></div>
                                    <p class="specific-value">Live Online</p>
                                </div>
                                <div class="course-specific-item">
                                    <h3 class="specific-title">Fee</h3>
                                    <div class="divider"></div>
                                    <p class="specific-value">$3,750</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`,cssCode:`/* Course Details Section Styles */



/* Course Details Section */
.course-details-section {
    background-color: white;
    padding: 0px 0 100px;
    overflow: hidden;
}

.course-details-columns {
    display: flex;
    align-items: center;
}

.course-title-column {
    width: 25%;
    padding-right: 30px;
}

.course-title {
    color: #252525;
    font-family: "Work Sans", sans-serif;
    font-size: 36px;
    font-weight: 800;
    line-height: 120%;
}

.course-info-column-wrapper {
    width: 75%;
    position: relative;
}

.course-info-column {
    background: #7F0426;
    border-radius: 10px 0 0 10px;
    padding: 40px 0 40px 40px;
    display: flex;
    position: relative;
    color: white;
    align-items: center;
}

/* Extend the background to the edge of screen */
.course-info-column::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 100%;
    width: 100vw;
    background: #7F0426;
}

.course-description {
    width: 50%;
    padding-right: 30px;
}

.course-description p {
    color: white;
    font-family: "Work Sans", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 20px;
}

.course-description p:last-child {
    margin-bottom: 0;
}

.course-specifics {
    width: 50%;
    padding-left: 30px;
}

.course-specifics-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
}

.course-specific-item {
    display: flex;
    flex-direction: column;
}

.specific-title {
    color: #FFF;
    font-family: "Work Sans", sans-serif;
    font-size: 23px;
    font-weight: 700;
    line-height: 200%;
    margin: 0;
}

.divider {
    height: 2px;
    background-color: #BA375C;
    margin: 5px 0;
    width: 100%;
}

.specific-value {
    color: #FFF;
    font-family: "Work Sans", sans-serif;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
}

/* Responsive adjustments */
@media (max-width: 992px) {
    .course-info-column {
        flex-direction: column;
    }

    .course-description,
    .course-specifics {
        width: 100%;
        padding: 0;
    }

    .course-description {
        margin-bottom: 30px;
    }

}

@media (min-width: 768px) {
    .course-specifics-grid {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
}

@media (max-width: 768px) {
    .course-details-columns {
        flex-direction: column;
    }

    .course-title-column {
        width: 100%;
        padding-right: 0;
        margin-bottom: 20px;
    }

    .course-info-column-wrapper {
        width: 100%;
    }

    .course-specifics-grid {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, auto);
    }

}`,previewImg:"course-details-1.png"},{id:"sec-course-details-2",title:"Course Details Section 2",htmlCode:` <!-- Course Details Section -->
    <section class="course-details-section">
        <div class="container">
            <div class="course-details-columns">
                <div class="course-title-column">
                    <h2 class="section-heading">Course<br>Details</h2>
                </div>
                <div class="course-info-column-wrapper">
                    <div class="course-info-column">
                        <div class="course-description">
                            <p>Through dynamic lectures and hands-on activities, you'll discover how to apply
                                reinforcement and imitation learning algorithms to create state-of-the-art robotics
                                applications—and learn how large language models, diffusion models, and other generative
                                AI tools are changing task planning, simulator design, and <span class="nowrap">reward
                                    design.</span></p>

                            <p> The program also features tours of MIT labs on the cutting-edge of robotic design—so you
                                can gain a deeper understanding of the latest breakthroughs in
                                <span class="nowrap">the field.</span>
                            </p>


                        </div>
                        <div class="course-specifics">
                            <div class="course-specifics-grid">
                                <div class="course-specific-item">
                                    <h3 class="specific-title">Course Dates</h3>
                                    <div class="divider"></div>
                                    <p class="specific-value">Jul 09 - 11, 2025</p>
                                </div>
                                <div class="course-specific-item">
                                    <h3 class="specific-title">Duration</h3>
                                    <div class="divider"></div>
                                    <p class="specific-value">3 days</p>
                                </div>
                                <div class="course-specific-item">
                                    <h3 class="specific-title">Format</h3>
                                    <div class="divider"></div>
                                    <p class="specific-value">On Campus</p>
                                </div>
                                <div class="course-specific-item">
                                    <h3 class="specific-title">Fee</h3>
                                    <div class="divider"></div>
                                    <p class="specific-value">$3,750</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`,cssCode:`/* Course Details Section */
.course-details-section {
    background-color: white;
    padding: 0px 0 60px;
    overflow: hidden;
}

.course-details-columns {
    display: flex;
    align-items: center;
}

.course-title-column {
    width: 25%;
    padding-right: 30px;
}

.course-title {
    color: #252525;
    font-family: "Work Sans", sans-serif;
    font-size: 36px;
    font-weight: 800;
    line-height: 120%;
}

.course-info-column-wrapper {
    width: 75%;
    position: relative;
}

.course-info-column {
    background: #01318C;
    border-radius: 10px 0 0 10px;
    padding: 40px 0 40px 40px;
    display: flex;
    position: relative;
    color: white;
    align-items: center;
}

/* Extend the background to the edge of screen */
.course-info-column::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 100%;
    width: 100vw;
    background: #01318C;
}

.course-description {
    width: 50%;
    padding-right: 30px;
}

.course-description p {
    color: white;
    font-family: "Work Sans", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 20px;
}

.course-description p:last-child {
    margin-bottom: 0;
}

.course-specifics {
    width: 50%;
    padding-left: 30px;
}

.course-specifics-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
}

.course-specific-item {
    display: flex;
    flex-direction: column;
}

.specific-title {
    color: #FFF;
    font-family: "Work Sans", sans-serif;
    font-size: 23px;
    font-weight: 700;
    line-height: 200%;
    margin: 0;
}

.divider {
    height: 2px;
    background-color: #FFF;
    margin: 5px 0;
    width: 100%;
}

.specific-value {
    color: #FFF;
    font-family: "Work Sans", sans-serif;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
}

/* Responsive adjustments */
@media (max-width: 992px) {
    .course-info-column {
        flex-direction: column;
    }

    .course-description,
    .course-specifics {
        width: 100%;
        padding: 0;
    }

    .course-description {
        margin-bottom: 30px;
    }

}

@media (min-width: 768px) {
    .course-specifics-grid {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
}

@media (max-width: 768px) {
    .course-details-columns {
        flex-direction: column;
    }

    .course-title-column {
        width: 100%;
        padding-right: 0;
        margin-bottom: 20px;
    }

    .course-info-column-wrapper {
        width: 100%;
    }

    .course-specifics-grid {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, auto);
    }

}
`,previewImg:"course-details-2.png"},{id:"sec-course-details-3",title:"Course Details Section 3",htmlCode:` <!-- Course Details Section -->
    <section class="course-details-section">
        <div class="container">
            <div class="course-details-columns">
                <div class="course-title-column">
                    <h2 class="course-title">Course Details</h2>
                    <p>Through a dynamic blend of lectures, hands-on labs, and case study analyses, you’ll explore a
                        number of advanced AI strategies. With a strong emphasis on practical applications, you'll also
                        examine real-world case studies in fields such as molecular discovery and materials science—and
                        participate in hands-on labs where you'll implement AI methods in realistic scenarios.</p>
                    <p>Beyond the core curriculum, this course fosters an environment of collaborative learning, giving
                        you the opportunity to engage with fellow professionals, exchange insights, and tackle
                        real-world research challenges together.</p>

                </div>
                <div class="course-info-column-wrapper">

                    <div class="course-specifics">
                        <div class="course-specifics-grid">
                            <div class="course-specific-item">
                                <img class="course-detais-icon" alt="Icon"
                                    src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/cal-icon-orange.png" />
                                <h3 class="specific-title">Course Dates</h3>
                                <div class="divider"></div>
                                <p class="specific-value">June 2-4, 2025</p>
                            </div>
                            <div class="course-specific-item">
                                <img class="course-detais-icon" alt="Icon"
                                    src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/time-icon.png" />

                                <h3 class="specific-title">Duration</h3>
                                <div class="divider"></div>
                                <p class="specific-value">3 days</p>
                            </div>
                            <div class="course-specific-item">
                                <img class="course-detais-icon" alt="Icon"
                                    src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/fee-icon.png" />

                                <h3 class="specific-title">Fee</h3>
                                <div class="divider"></div>
                                <p class="specific-value">$3600</p>
                            </div>
                            <div class="course-specific-item">
                                <img class="course-detais-icon" alt="Icon"
                                    src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/location%20icon.png" />

                                <h3 class="specific-title">Format</h3>
                                <div class="divider"></div>
                                <p class="specific-value">On Campus</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`,cssCode:`
/* Course Details Section */
.course-details-section {
    background-color: white;
    padding:0px 0 85px;
    overflow: hidden; /* Prevent horizontal scrollbar */
}

.course-details-columns {
    display: flex;
    align-items: flex-start;
    background-color: #7F0426;
    border-radius: 10px 0 0 10px;
    padding: 65px;
    position: relative; /* Add position relative */
}

/* Add pseudo-element to extend background */
.course-details-columns::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0%; /* Start from the right edge of the element */
    width: 100vw; /* Extend 100% of viewport width */
    background-color: #7F0426;
    right: -100vw;
    z-index: 2;
    border-radius: 10px 0 0 10px;

}

.course-title-column {
    width: 50%;
    padding-right: 30px;
    color: #FFF;
    z-index: 999;

}

.course-title {
    color: white;
    font-family: "Work Sans", sans-serif;
    font-size: 36px;
    font-weight: 800;
    line-height: 120%;
    padding-bottom: 30px;
}

.course-info-column-wrapper {
    width: 75%;
    position: relative;
    z-index: 999;

}

.course-info-column {
    z-index: 999;

    background: #7F0426;
    border-radius: 10px 0 0 10px;
    padding: 40px 0 40px 40px;
    display: flex;
    position: relative;
    color: white;
}

.course-description {
    z-index: 999;

    width: 50%;
    padding-right: 30px;
}

.course-detais-icon {
    height: 45px;
    width: auto;
    max-width: 45px;
}

.course-description p {
    color: white;
    font-family: "Work Sans", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 20px;
}

.course-description p:last-child {
    margin-bottom: 0;
}

.course-specifics {
    width: 100%;
    padding-left: 30px;
}

.course-specifics-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
}

.course-specific-item {
    display: flex;
    flex-direction: column;
}

.specific-title {
    color: #FFF;
    font-family: "Work Sans", sans-serif;
    font-size: 23px;
    font-weight: 700;
    line-height: 200%;
    margin: 0;
}

.divider {
    height: 2px;
    background-color: #FFF;
    margin: 5px 0;
    width: 100%;
}

.specific-value {
    color: #FFF;
    font-family: "Work Sans", sans-serif;
    font-size: 23px;
    font-weight: 700;
    line-height: 200%;
    margin: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .course-specifics-grid {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, auto);
    }
}

@media (max-width: 991px) {
    .course-info-column {
        flex-direction: column;
    }
    
    .course-description,
    .course-specifics {
        width: 100%;
        padding: 0;
    }
    
    .course-description {
        margin-bottom: 30px;
    }
    
    .course-details-columns {
        flex-direction: column;
        padding-inline-start: 30px;
    }
    
    .course-title-column {
        width: 100%;
        padding-right: 0;
        margin-bottom: 20px;
    }
    
    .course-info-column-wrapper {
        width: 100%;
    }
}
`,previewImg:"course-details-3.png"}]},BC={id:"cat-expertise",name:"Expertise",sections:[{id:"sec-expertise-1",title:"Download Section 1",htmlCode:`<!-- Expertise Section -->
    <section class="expertise-section">
        <div class="container">
            <h2 class="expertise-heading">
                In this program you will learn <span class="nowrap">how to: </span>
            </h2>
            <!-- Add this below the expertise-heading in the expertise-section -->
            <div class="expertise-grid">
                <div class="expertise-item">
                    <div class="expertise-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/implement0icon.png"
                            alt="Cutting-edge Innovations Icon">
                    </div>
                    <div class="expertise-content">
                        <p class="expertise-item-text">Implement the latest Design-Thinking techniques to power <span
                                class="nowrap">cutting-edge innovations.</span></p>
                    </div>
                </div>
                <div class="expertise-item">
                    <div class="expertise-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/harness-icon.png"
                            alt="Business Transformation Icon">
                    </div>
                    <div class="expertise-content">
                        <p class="expertise-item-text">Harness the power of digital technologies, including AI, IoT,
                            androbotics, to drive <span class="nowrap">business transformation.</span></p>
                    </div>
                </div>
                <div class="expertise-item">
                    <div class="expertise-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/drive-icon.png"
                            alt="Drive Increased Revenue Icon">
                    </div>
                    <div class="expertise-content">
                        <p class="expertise-item-text">Drive increased revenue for existing products, services,
                            <span class="nowrap">and customers.</span>
                        </p>
                    </div>
                </div>
                <div class="expertise-item">
                    <div class="expertise-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/build-icon.png"
                            alt="Forsustainable Growth Icon">
                    </div>
                    <div class="expertise-content">
                        <p class="expertise-item-text">Build new lines of business that position your organization
                            <span class="nowrap">forsustainable growth.</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </section>`,cssCode:`/* Expertise section styles */
.expertise-section {
    background-color: #ffffff;
    padding: 75px 0;
}

.expertise-heading {
    font-size: 28px;
    line-height: 140%;
    color: #252525;
    text-align: left;
    font-weight: 800;
    font-style: italic;
    margin-bottom: 40px;
}


/* Media query for smaller screens */
@media (max-width: 991px) {
    .expertise-heading {
        font-size: 26px;
    }
}

@media (max-width: 767px) {
    .expertise-heading {
        font-size: 24px;
        margin-bottom: 30px;
    }

    .expertise-section {
        padding: 60px 0;
    }
}

@media (max-width: 480px) {
    .expertise-heading {
        font-size: 22px;
    }

    .expertise-section {
        padding: 50px 0;
    }
}

/* Expertise grid styles */
.expertise-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    background-color: #ffffff;
    position: relative;
}

/* Add divider lines */
.expertise-grid::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background-color: #E9804B;
    transform: translateX(-50%);
}

.expertise-grid::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 2px;
    background-color: #E9804B;
    transform: translateY(-50%);
}

.expertise-item {
    display: flex;
    align-items: center;
    padding: 30px;
}

.expertise-icon {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    margin-right: 25px;
}

.expertise-icon img {
    max-width: 100%;
    height: auto;
}

.expertise-content {
    flex-grow: 1;
}

.expertise-item-heading {
    font-size: 20px;
    font-weight: 700;
    /* Bold */
    color: #252525;
    margin-bottom: 10px;
}

.expertise-item-text {
    font-size: 16px;
    line-height: 140%;
    font-weight: 500;
    /* Medium */
    color: #252525;
}

/* Media query for smaller screens */
@media (max-width: 767px) {
    .expertise-grid {
        grid-template-columns: 1fr;
        position: relative;
    }

    /* Remove vertical divider on mobile */
    .expertise-grid::before {
        display: none;
    }

    /* Keep horizontal dividers between items on mobile by replacing the single center line with multiple lines */
    .expertise-grid::after {
        display: none;
        /* Remove the original horizontal line */
    }

    /* Add horizontal lines between grid items */
    .expertise-item {
        position: relative;
    }

    /* Add bottom border to all items except the last one */
    .expertise-item:not(:last-child)::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 2px;
        background-color: #E9804B;
    }

    .expertise-item {
        padding: 25px 20px;
    }

    .expertise-icon {
        width: 50px;
        height: 50px;
        margin-right: 20px;
    }

    .expertise-item-heading {
        font-size: 18px;
    }

    .expertise-item-text {
        font-size: 15px;
    }
}

/* Additional adjustments for very small screens */
@media (max-width: 480px) {
    .expertise-icon {
        width: 40px;
        height: 40px;
        margin-right: 15px;
    }

    .expertise-item {
        padding: 20px 15px;
    }
}

/* Expertise footer styles */
.expertise-footer {
    margin-top: 40px;
}

.expertise-footer-text {
    text-align: right;
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    color: black;
    max-width: 60%;
    margin-left: auto;
}

/* Media query for smaller screens */
@media (max-width: 767px) {
    .expertise-footer {
        margin-top: 30px;
    }

    .expertise-footer-text {
        font-size: 18px;
        max-width: 100%;
    }
}

@media (max-width: 480px) {
    .expertise-footer-text {
        font-size: 16px;
    }
}`,previewImg:"expertise-1.png"},{id:"sec-expertise-2",title:"Download Section 2",htmlCode:`<!-- Expertise Section -->
    <section class="expertise-section">
        <div class="container">
            <h2 class="expertise-heading">
                In this program, <span class="nowrap">you will:</span>
            </h2>
            <div class="expertise-grid">
                <div class="expertise-item">
                    <div class="expertise-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-mstn/images/ApplyIcon.png"
                            alt="Program Icon">
                    </div>
                    <div class="expertise-content">
                        <p class="expertise-item-text">Apply fundamental methods to model, analyze, and design
                            transportation systems and <span class="nowrap">mobility services</span></p>
                    </div>
                </div>
                <div class="expertise-item">
                    <div class="expertise-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-mstn/images/AnalyzeIcon.png"
                            alt="Program Icon">
                    </div>
                    <div class="expertise-content">
                        <p class="expertise-item-text">Analyze individual mobility choices and evaluate transportation
                            network operations using various <span class="nowrap">modeling methods</span>
                        </p>
                    </div>
                </div>
                <div class="expertise-item">
                    <div class="expertise-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-mstn/images/ExploreIcon.png"
                            alt="Program Icon">
                    </div>
                    <div class="expertise-content">
                        <p class="expertise-item-text">Explore future transportation challenges, including green,
                            automated, and <span class="nowrap">AI-driven solutions</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </section>`,cssCode:`/* Expertise section styles */
.expertise-section {
    background-color: #ffffff;
    padding: 75px 0;
}

.expertise-heading {
    font-size: 28px;
    line-height: 140%;
    color: #252525;
    text-align: left;
    font-weight: 800;
    font-style: italic;
    margin-bottom: 40px;
}


/* Media query for smaller screens */
@media (max-width: 991px) {
    .expertise-heading {
        font-size: 26px;
    }
}

@media (max-width: 767px) {
    .expertise-heading {
        font-size: 24px;
        margin-bottom: 30px;
    }

    .expertise-section {
        padding: 60px 0;
    }
}

@media (max-width: 480px) {
    .expertise-heading {
        font-size: 22px;
    }

    .expertise-section {
        padding: 50px 0;
    }
}

/* Expertise grid styles */
.expertise-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0;
    background-color: #ffffff;
    position: relative;
}

/* Add vertical divider lines between columns */
.expertise-grid .expertise-item:not(:last-child) {
    position: relative;
}

.expertise-grid .expertise-item:nth-child(1):after,
.expertise-grid .expertise-item:nth-child(2):after {
    content: "";
    position: absolute;
    top: 15%;
    bottom: 15%;
    right: 0;
    width: 2px;
    background-color: #A90533;
}

.expertise-item {
    display: flex;
    align-items: center;
    padding: 30px;
}

.expertise-icon {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    margin-right: 25px;
}

.expertise-icon img {
    max-width: 100%;
    height: auto;
}

.expertise-content {
    flex-grow: 1;
}

.expertise-item-text {
    font-size: 16px;
    line-height: 140%;
    font-weight: 500;
    color: #252525;
}

/* Media query for smaller screens */
@media (max-width: 991px) {
    .expertise-grid {
        grid-template-columns: 1fr;
    }

    /* Remove vertical dividers on mobile */
    .expertise-grid .expertise-item:nth-child(1):after,
    .expertise-grid .expertise-item:nth-child(2):after {
        display: none;
    }

    /* Add horizontal dividers between items on mobile */
    .expertise-item:not(:last-child) {
        position: relative;
    }

    .expertise-item:not(:last-child):after {
        content: "";
        position: absolute;
        left: 15%;
        right: 15%;
        bottom: 0;
        height: 2px;
        background-color: #A90533;
    }

    .expertise-item {
        padding: 25px 20px;
    }

    .expertise-icon {
        width: 50px;
        height: 50px;
        margin-right: 20px;
    }

    .expertise-item-text {
        font-size: 15px;
    }
}

/* Additional adjustments for very small screens */
@media (max-width: 480px) {
    .expertise-icon {
        width: 40px;
        height: 40px;
        margin-right: 15px;
    }

    .expertise-item {
        padding: 20px 15px;
    }

    .expertise-item:not(:last-child):after {
        left: 10%;
        right: 10%;
    }
}
`,previewImg:"expertise-2.png"},{id:"sec-expertise-3",title:"Download Section 3",htmlCode:`<section class="cards-section">
        <div class="container">
            <h2 class="section-heading">In this program, <span class="nowrap">you will:</span></h2>
        </div>
        <div class="container">
            <div class="cards-grid">
                <!-- Card 1 -->
                <div class="card">
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/MIT%2003.31%20AI%20in%20Robotics%20Learning%20Algorithms%2C%20Design%20and%20Safety%20%20am-ICON1.png"
                        alt="Core Competencies" class="card-icon">
                    <div class="card-text">
                        Discover different ways to apply large language models and generative AI <span class="nowrap">in
                            robotics</span>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="card">
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/MIT%2003.31%20AI%20in%20Robotics%20Learning%20Algorithms%2C%20Design%20and%20Safety%20%20am-ICON2.png"
                        alt="Core Competencies" class="card-icon">
                    <div class="card-text">
                        Learn how to optimize the robot <span class="nowrap">design process</span>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="card">
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/MIT%2003.31%20AI%20in%20Robotics%20Learning%20Algorithms%2C%20Design%20and%20Safety%20%20am-%20ICON3.png"
                        alt="Core Competencies" class="card-icon">
                    <div class="card-text">
                        Acquire methods for verifying, testing, and ensuring safety protocols <span class="nowrap">for
                            robots</span>
                    </div>
                </div>

                <!-- Card 4 -->
                <div class="card">
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/MIT%2003.31%20AI%20in%20Robotics%20Learning%20Algorithms%2C%20Design%20and%20Safety%20%20am-ICON4.png"
                        alt="Core Competencies" class="card-icon">
                    <div class="card-text">
                        Tour MIT labs engaged in cutting-edge <span class="nowrap">robotics research</span>
                    </div>
                </div>
            </div>
        </div>
    </section>`,cssCode:`/* Cards Grid Section Styles */
.cards-section {
    padding: 60px 0;
}

.cards-section .section-heading {
    font-size: 32px;
    font-weight: 800;
    color: #01318C;
    margin-bottom: 37px;
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

.card {
    display: flex;
    align-items: center;
    background-color: #E4EAF5;
    padding: 25px;
    border-radius: 10px;
}

.card-icon {
    flex-shrink: 0;
    width: 55px;
    height: auto;
}

.card-text {
    margin-left: 10px;
    color: #252525;
    font-size: 15px;
    font-weight: 500;
    /* medium weight */
    line-height: 140%;
    text-align: left;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .cards-grid {
        grid-template-columns: 1fr;
    }

    .card {
        padding: 20px;
    }
}

@media (max-width: 480px) {
    .card {
        flex-direction: column;
        text-align: center;
    }

    .card-icon {
        margin-bottom: 15px;
    }

    .card-text {
        margin-left: 0;
    }
}
`,previewImg:"expertise-3.png"}]},FC={id:"cat-benefits",name:"Benefits",sections:[{id:"sec-benefits-1",title:"benefits 1",htmlCode:`<!-- Benefits Grid Section - 4 Areas -->
    <section class="benefits-grid-section">
        <div class="container">
            <h2 class="expertise-heading">
                Participant Takeaways
            </h2>
            <div class="benefits-grid">
                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/orange-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Learn to implement the latest design-thinking techniques to power
                            <span class="nowrap">cutting-edge innovations</span>
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/orange-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Conceive new user experiences in areas where there is no prior solution
                            <span class="nowrap">to leverage</span>
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/orange-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Develop robust and resilient business strategies amid global uncertainty
                            and rapid <span class="nowrap">cultural change</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/orange-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Overcome organizational obstacles and gain the traction to <span
                                class="nowrap">drive implementation</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/orange-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Leverage the power and potential of digital technologies—in particular,
                            AI/machine learning, IoT, and robotics—to drive business transformation and <span
                                class="nowrap">create value</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/orange-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Build a business that fosters mutually beneficial partnerships to create
                            robust ecosystems, develop new products, and enhance the <span class="nowrap">user
                                experience</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/orange-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Apply advanced Design-Thinking techniques to create
                            <span class="nowrap">breakthrough innovations</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="date-container">
                <a href="#form" class="brochure-button">DOWNLOAD <span class="nowrap">BROCHURE</span></a>
            </div>
        </div>
    </section>`,cssCode:`/* Benefits Grid section styles */
.benefits-grid-section {
    background-color: white;
    padding: 0 0 70px;
}

.expertise-heading {
    font-size: 28px;
    font-weight: 800;
    /* extra bold */
    color: #252525;
    margin-bottom: 20px;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, auto);
    position: relative;
    background-color: white;
}

/* Vertical line between columns */
.benefits-grid::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background-color: #E9804B;
    transform: translateX(-50%);
}

/* Horizontal lines for rows */
.benefit-item {
    display: flex;

    align-items: center;
    padding: 30px;
    position: relative;
}

/* Add horizontal lines between rows */
.benefit-item:nth-child(1)::after,
.benefit-item:nth-child(2)::after,
.benefit-item:nth-child(3)::after,
.benefit-item:nth-child(4)::after,
.benefit-item:nth-child(5)::after,
.benefit-item:nth-child(6)::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: #E9804B;
}

/* Remove horizontal line for the last item in each row when it's a 2-column layout */
.benefit-item:nth-child(7)::after {
    display: none;
}

.benefit-icon {
    flex-shrink: 0;
    width: auto;
    height: 24px;
    margin-right: 15px;
}

.benefit-icon img {
    max-width: 100%;
    height: 24px;
    width: auto;
}

.benefit-content {
    flex-grow: 1;
}

.benefit-text {
    font-size: 16px;
    line-height: 150%;
    font-weight: 500;
    /* medium */
    color: #252525;
}

.date-container {
    margin-top: 40px;
    text-align: center;
}



/* Media query for tablets */
@media (max-width: 991px) {
    .benefits-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Media query for mobile screens */
@media (max-width: 767px) {
    .benefits-grid {
        grid-template-columns: 1fr;
    }

    /* Remove vertical divider on mobile */
    .benefits-grid::before {
        display: none;
    }

    /* Reset horizontal lines styling for mobile */
    .benefit-item::after {
        left: 15px !important;
        right: 15px !important;
    }

    /* Ensure last item doesn't have a border */
    .benefit-item:last-child::after {
        display: none;
    }

    .benefit-item {
        padding: 25px 20px;
    }

    .benefit-icon {
        width: 20px;
        height: 20px;
        margin-right: 15px;
    }

    .benefit-text {
        font-size: 15px;
    }

    .expertise-heading {
        font-size: 30px;
        margin-bottom: 30px;
    }

    .benefits-grid-section {
        padding: 70px 0;
    }
}

/* Additional adjustments for very small screens */
@media (max-width: 480px) {
    .benefit-item {
        padding: 20px 15px;
    }

    .expertise-heading {
        font-size: 26px;
    }

    .benefits-grid-section {
        padding: 50px 0;
    }
}
`,previewImg:"benefits-1.png"},{id:"sec-benefits-2",title:"benefits 2",htmlCode:`<!-- Benefits Grid Section - 4 Areas -->
    <section class="benefits-grid-section">
        <div class="container">
            <h2 class="expertise-heading">
                Participant Takeaways
            </h2>
            <div class="benefits-grid">
                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/Vector%2029.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Tour MIT labs engaged in breakthrough
                            <span class="nowrap">robotics research </span>
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/Vector%2029.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Learn how to optimize the robot <span class="nowrap">design process
                            </span>
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/Vector%2029.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Find out more about training controllers via reinforcement learning and
                            <span class="nowrap">imitation learning</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/Vector%2029.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Explore multi-agent control and <span class="nowrap">safety
                                processes</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/Vector%2029.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Acquire a conceptual, hands-on understanding of how to leverage
                            simulators for training control <span class="nowrap">policies (sim-to-real) </span>
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/Vector%2029.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Discover methods for providing safety certificates to robots,
                            verification, <span class="nowrap">and testing </span>
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/Vector%2029.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">LExplore different ways to apply large language models and generative AI
                            <span class="nowrap">in robotics</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/Vector%2029.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Align robot objectives with your <span class="nowrap">organization's
                                objectives</span></p>
                    </div>
                </div>
            </div>

        </div>
    </section>`,cssCode:`
/* Benefits Grid section styles */
.benefits-grid-section {
    background-color: white;
    padding: 0 0 110px;
}

.expertise-heading {
    font-size: 32px;
    font-weight: 800;
    color: #252525;
    margin-bottom: 35px;
    font-style: italic;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, auto);
    position: relative;
    background-color: white;
}



/* Horizontal lines for rows */
.benefit-item {
    display: flex;

    align-items: center;
    padding: 13.5px 30px;
    position: relative;
}



/* Remove horizontal line for the last item in each row when it's a 2-column layout */
.benefit-item:nth-child(7)::after {
    display: none;
}

.benefit-icon {
    flex-shrink: 0;
    width: auto;
    height: 24px;
    margin-right: 15px;
}

.benefit-icon img {
    max-width: 100%;
    height: 45px;
    width: auto;
}

.benefit-content {
    flex-grow: 1;
}

.benefit-text {
    font-size: 16px;
    line-height: 150%;
    font-weight: 500;
    /* medium */
    color: #252525;
}

.date-container {
    text-align: center;
}



/* Media query for tablets */
@media (max-width: 991px) {
    .benefits-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Media query for mobile screens */
@media (max-width: 767px) {
    .benefits-grid {
        grid-template-columns: 1fr;
    }

    /* Remove vertical divider on mobile */
    .benefits-grid::before {
        display: none;
    }

    /* Reset horizontal lines styling for mobile */
    .benefit-item::after {
        left: 15px !important;
        right: 15px !important;
    }

    /* Ensure last item doesn't have a border */
    .benefit-item:last-child::after {
        display: none;
    }

    .benefit-item {
        padding: 25px 20px;
    }

    .benefit-icon {
        width: 20px;
        height: 20px;
        margin-right: 15px;
    }

    .benefit-text {
        font-size: 15px;
    }

    .expertise-heading {
        font-size: 30px;
        margin-bottom: 30px;
    }

    .benefits-grid-section {
        padding: 70px 0;
    }
}

/* Additional adjustments for very small screens */
@media (max-width: 480px) {
    .benefit-item {
        padding: 20px 15px;
    }

    .expertise-heading {
        font-size: 26px;
    }

    .benefits-grid-section {
        padding: 50px 0;
    }
}
`,previewImg:"benefits-2.png"},{id:"sec-benefits-3",title:"benefits 3",htmlCode:`<!-- Benefits Grid Section - 4 Areas -->
    <section class="benefits-grid-section">
        <div class="container">
            <h2 class="expertise-heading">
                Participant Takeaways
            </h2>
            <div class="benefits-grid">
                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/red-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Master key AI techniques, including the use of neural networks,
                            transformers, generative models, and Bayesian optimization, and understand their
                            applications in <span class="nowrap">scientific research</span>
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/red-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Apply generative AI tools for hypothesis generation, text analysis, and
                            data-driven <span class="nowrap">decision-making</span>
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/red-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Gain hands-on experience with large language models, predictive
                            modeling, and AI-driven <span class="nowrap">experiment planning</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/red-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Explore real-world AI applications in molecular discovery, materials
                            science, and protein <span class="nowrap">structure prediction</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/red-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Learn to handle and analyze large, high-dimensional datasets using <span
                                class="nowrap">AI methods</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/red-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Gain practical experience in overcoming research challenges, such as
                            working with limited experimental data and <span class="nowrap">optimizing workflows</span>
                        </p>
                    </div>
                </div>
                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/red-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Apply advanced Design-Thinking techniques to create <span
                                class="nowrap">breakthrough innovations</span>
                        </p>
                    </div>
                </div>
                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/red-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Explore real-world AI applications in molecular discovery, materials
                            science, and protein <span class="nowrap">structure prediction</span>
                        </p>
                    </div>
                </div>


            </div>

        </div>
    </section>`,cssCode:`
/* Benefits Grid section styles */
.benefits-grid-section {
    background-color: white;
    padding: 0 0 70px;
}

.benefits-grid-section.gray {
    background-color: #EEEEEE;
    padding: 75px 0 70px;
}


.expertise-heading {
    font-size: 28px;
    font-weight: 800;
    /* extra bold */
    color: #252525;
    margin-bottom: 20px;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, auto);
    position: relative;
}

/* Vertical line between columns */


/* Horizontal lines for rows */
.benefit-item {
    display: flex;

    align-items: center;
    padding: 13.5px 30px;
    position: relative;
}




.benefit-icon {
    flex-shrink: 0;
    width: auto;
    height: 24px;
    margin-right: 15px;
}

.benefit-icon img {
    max-width: 100%;
    height: 24px;
    width: auto;
}

.benefit-content {
    flex-grow: 1;
}

.benefit-text {
    font-size: 16px;
    line-height: 150%;
    font-weight: 500;
    /* medium */
    color: #252525;
}

.date-container {
    margin-top: 25px;
    text-align: center;
}



/* Media query for tablets */
@media (max-width: 991px) {
    .benefits-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Media query for mobile screens */
@media (max-width: 767px) {
    .benefits-grid {
        grid-template-columns: 1fr;
    }

    /* Remove vertical divider on mobile */
    .benefits-grid::before {
        display: none;
    }

    /* Reset horizontal lines styling for mobile */
    .benefit-item::after {
        left: 15px !important;
        right: 15px !important;
    }

    /* Ensure last item doesn't have a border */
    .benefit-item:last-child::after {
        display: none;
    }

    .benefit-item {
        padding: 25px 20px;
    }

    .benefit-icon {
        width: 20px;
        height: 20px;
        margin-right: 15px;
    }

    .benefit-text {
        font-size: 15px;
    }

    .expertise-heading {
        font-size: 30px;
        margin-bottom: 30px;
    }

    .benefits-grid-section {
        padding: 70px 0;
    }
}

/* Additional adjustments for very small screens */
@media (max-width: 480px) {
    .benefit-item {
        padding: 20px 15px;
    }

    .expertise-heading {
        font-size: 26px;
    }

    .benefits-grid-section {
        padding: 50px 0;
    }
}

`,previewImg:"benefits-3.png"},{id:"sec-benefits-4",title:"benefits 4",htmlCode:` <!-- Benefits Grid Section - 4 Areas -->
    <section class="benefits-grid-section">
        <div class="container">
            <h2 class="section-heading">
                Participant Takeaways
            </h2>
            <div class="benefits-grid">
                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-merai/images/Arrow.png" alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Gain a deeper understanding of the key characteristics of AI, ML, and
                            GPT technologies, including Large Language Models, and the challenges around their ethical
                            development, deployment, <span class="nowrap">and use </span>
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-merai/images/Arrow.png" alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Explore the specific ethical and practical challenges posed by
                            data-driven technologies, including bias, hallucinations, data leakage, privacy issues,
                            negative externalities, and other <span class="nowrap">unforeseen consequences</span>
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-merai/images/Arrow.png" alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Learn to critically assess these ethical challenges and apply
                            appropriate principles and practical guidelines for governance in AI development <span
                                class="nowrap">and deployment</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-merai/images/Arrow.png" alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Develop the skills you need to implement ethical frameworks and
                            governance strategies effectively in <span class="nowrap">real-world applications</span></p>
                    </div>
                </div>


            </div>
            <div class="date-container">
                <a href="#form" class="brochure-button">DOWNLOAD <span class="nowrap">BROCHURE</span></a>
            </div>
        </div>
    </section>`,cssCode:`
/* Benefits Grid section styles */
.benefits-grid-section {
    background-color: white;
    padding: 0 0 70px;
}

.expertise-heading {
    font-size: 28px;
    font-weight: 800;
    /* extra bold */
    color: #252525;
    margin-bottom: 20px;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, auto);
    position: relative;
    background-color: white;
}

/* Vertical line between columns */
.benefits-grid::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background-color: #01318C;
    transform: translateX(-50%);
}

/* Horizontal lines for rows */
.benefit-item {
    display: flex;

    align-items: center;
    padding: 13.5px 30px;
    position: relative;
}

/* Add horizontal lines between rows */
.benefit-item:nth-child(1)::after,
.benefit-item:nth-child(2)::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: #01318C;
}

/* Remove horizontal line for the last item in each row when it's a 2-column layout */
.benefit-item:nth-child(7)::after {
    display: none;
}

.benefit-icon {
    flex-shrink: 0;
    width: auto;
    height: 24px;
    margin-right: 15px;
}

.benefit-icon img {
    max-width: 100%;
    height: 24px;
    width: auto;
}

.benefit-content {
    flex-grow: 1;
}

.benefit-text {
    font-size: 16px;
    line-height: 150%;
    font-weight: 500;
    /* medium */
    color: #252525;
}

.date-container {
    text-align: center;
}



/* Media query for tablets */
@media (max-width: 991px) {
    .benefits-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Media query for mobile screens */
@media (max-width: 767px) {
    .benefits-grid {
        grid-template-columns: 1fr;
    }

    /* Remove vertical divider on mobile */
    .benefits-grid::before {
        display: none;
    }

    /* Reset horizontal lines styling for mobile */
    .benefit-item::after {
        left: 15px !important;
        right: 15px !important;
    }

    /* Ensure last item doesn't have a border */
    .benefit-item:last-child::after {
        display: none;
    }

    .benefit-item {
        padding: 25px 20px;
    }

    .benefit-icon {
        width: 20px;
        height: 20px;
        margin-right: 15px;
    }

    .benefit-text {
        font-size: 15px;
    }

    .expertise-heading {
        font-size: 30px;
        margin-bottom: 30px;
    }

    .benefits-grid-section {
        padding: 70px 0;
    }
}

/* Additional adjustments for very small screens */
@media (max-width: 480px) {
    .benefit-item {
        padding: 20px 15px;
    }

    .expertise-heading {
        font-size: 26px;
    }

    .benefits-grid-section {
        padding: 50px 0;
    }
}


`,previewImg:"benefits-4.png"}]},WC={id:"cat-about",name:"About",sections:[{id:"sec-about-1",title:"About 1",htmlCode:`<section class="about-mit-section">
        <div class="container">
            <div class="about-columns">
                <div class="about-column left-column">
                    <h2 class="about-heading">About MIT Professional Education </h2>
                    <div class="about-line"></div>
                </div>
                <div class="about-column middle-column">
                    <p class="about-text">For 75 years, MIT Professional Education has been providing technical
                        professionals worldwide a gateway to renowned MIT research, knowledge, and expertise, through
                        advanced education programs designed specifically for them. In addition to industry-focused,
                        two-to-five-day live virtual and on-campus courses through Short Programs, MIT Professional
                        Education offers professionals the opportunity to take online and blended learning courses
                        through Digital Plus Programs, attend courses abroad through International Programs, enroll in
                        regular MIT academic courses through the Advanced Study Program, or attend Corporate Programs
                        designed specifically for their companies. For more information, please
                        <span class="nowrap"> visit professional.mit.edu.</span>
                    </p>
                </div>
                <!-- Empty spacer column to prevent text overlap with image -->
                <div class="right-column-spacer"></div>
            </div>
        </div>

        <!-- Image positioned absolutely in the bottom right corner -->
        <div class="about-image-container">
            <img src="https://slxcloud.app/MIT/2025/Course-2025-pcb/images/dome-bottom.png" alt="MIT Dome"
                class="about-image">
        </div>
    </section>`,cssCode:`/* About MIT section styles - final version */
.about-mit-section {
    background-color: white;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
}

.about-columns {
    display: grid;
    gap: 40px;
}

.about-column {
    position: relative;
}

.left-column {
    flex: 1;
}

.middle-column {
    flex: 2;
}

/* Empty space column to prevent text overlap with image */
.right-column-spacer {
    flex: 1;
    min-width: 330px;
    /* Match image width to prevent text overlap */
}

.about-heading {
    font-size: 32px;
    line-height: 130%;
    font-weight: 800;
    color: #252525;
    margin-bottom: 30px;
    display: block;
}

.about-line {
    height: 2px;
    background-color: #A90533;
    position: absolute;
    left: -100vw;
    /* Extend to the left edge of the screen */
    width: auto;
    /* Let the line length be determined by position */
    right: 0;
    /* End exactly at the end of the heading */
}

.about-text {
    font-size: 17px;
    line-height: 150%;
    font-weight: 500;
    /* medium weight */
    color: #262525;
}

.about-image-container {
    position: absolute;
    bottom: -4px;
    right: 0;
    z-index: 1;
}

.about-image {
    max-width: 330px;
    height: auto;
}

/* Media query for smaller screens */
@media (max-width: 1200px) {
    .right-column-spacer {
        min-width: 280px;
    }

    .about-image {
        max-width: 280px;
    }
}

@media (min-width: 991px) {
    .about-columns {
        display: grid;
        gap: 40px;
        grid-template-columns: 208px 1fr 200px;
    }
}

@media (max-width: 991px) {
    .about-columns {
        flex-wrap: wrap;
        gap: 30px;
    }

    .left-column {
        flex: 0 0 100%;
    }

    .middle-column {
        flex: 0 0 calc(100% - 330px);
        /* Leave space for image */
    }

    .right-column-spacer {
        min-width: 0;
        flex: 0;
    }

    .about-heading {
        font-size: 28px;
    }

    .about-mit-section {
        padding-bottom: 240px;
        /* Add padding at the bottom for the image */
    }
}

@media (max-width: 767px) {
    .about-columns {
        flex-direction: column;
        gap: 30px;
    }

    .left-column,
    .middle-column {
        flex: 0 0 100%;
    }

    .about-heading {
        font-size: 26px;
        margin-bottom: 30px;
    }

    .about-line {
        width: 100vw;
        max-width: 100vw;
        left: 50%;
        transform: translateX(-50%);
        right: auto;
    }

    .about-text {
        font-size: 16px;
    }

    .about-image {
        max-width: 290px;
    }


}

@media (max-width: 480px) {
    .about-heading {
        font-size: 24px;
    }

    .about-text {
        font-size: 15px;
    }

    .about-mit-section {
        padding-bottom: 200px;
        /* Add padding at the bottom for the image */
    }

    .about-image {
        max-width: 250px;
    }
}
`,previewImg:"about-1.png"},{id:"sec-about-2",title:"About 2",htmlCode:`<section class="about-mit-section">
        <div class="container">
            <div class="about-columns">
                <div class="about-column left-column">
                    <h2 class="about-heading">About MIT Professional Education </h2>
                    <div class="about-line"></div>
                </div>
                <div class="about-column middle-column">
                    <p class="about-text">For 75 years, MIT Professional Education has been providing technical
                        professionals worldwide a gateway to renowned MIT research, knowledge, and expertise, through
                        advanced education programs designed specifically for them. In addition to industry-focused,
                        two-to-five-day live virtual and on-campus courses through Short Programs, MIT Professional
                        Education offers professionals the opportunity to take online and blended learning courses
                        through Digital Plus Programs, attend courses abroad through International Programs, enroll in
                        regular MIT academic courses through the Advanced Study Program, or attend Corporate Programs
                        designed specifically for their companies. For more information, please
                        <span class="nowrap"> visit professional.mit.edu.</span>
                    </p>
                </div>
                <!-- Empty spacer column to prevent text overlap with image -->
                <div class="right-column-spacer"></div>
            </div>
        </div>

        <!-- Image positioned absolutely in the bottom right corner -->
        <div class="about-image-container">
            <img src="https://slxcloud.app/MIT/2025/Course-2025-pcb/images/dome-bottom.png" alt="MIT Dome"
                class="about-image">
        </div>
    </section>`,cssCode:`
/* About MIT section styles - final version */
.about-mit-section {
    background-color: white;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
    background-image: url("https://slxcloud.app/MIT/2025/Course-2025-merai/images/Frame%20115.png?_t=1743629326");
    overflow: hidden;
    background-position: left -134% top -7%;
    background-size: 100%;
    background-repeat: no-repeat;
}


.about-mit-section {
    background-image: none;
    background-color: #E4EAF5;
    clip-path: polygon(0 0, calc(100% - 50px) 0, 100% 150px, 100% 100%, 0 100%);
    margin-top: 75px;
}


@media (min-width: 992px) {
    .about-mit-section {
        background-image: url("https://professional-education.mit.edu/l/310211/2025-04-02/3s586bf/310211/17436320826jQabgFv/Frame_116__2_.png");
        background-color: transparent;
    }
}

@media (min-width: 1520px) {
    .about-mit-section {
        background-position: left -134% top -7%;
        margin-top: 50px;
    }
}

.about-columns {
    display: grid;
    gap: 40px;
}

.about-column {
    position: relative;
}

.left-column {
    flex: 1;
}

.middle-column {
    flex: 2;
}

/* Empty space column to prevent text overlap with image */
.right-column-spacer {
    flex: 1;
    min-width: 330px;
    /* Match image width to prevent text overlap */
}

.about-heading {
    font-size: 32px;
    line-height: 130%;
    font-weight: 800;
    color: #252525;
    margin-bottom: 30px;
    display: block;
}

.about-line {
    height: 3px;
    background-color: #01318C;
    position: absolute;
    left: -100vw;
    /* Extend to the left edge of the screen */
    width: auto;
    /* Let the line length be determined by position */
    right: 0;
    /* End exactly at the end of the heading */
}

.about-text {
    font-size: 17px;
    line-height: 150%;
    font-weight: 500;
    /* medium weight */
    color: #262525;
}

.about-image-container {
    position: absolute;
    bottom: -4px;
    right: 0;
    z-index: 1;
}

.about-image {
    max-width: 330px;
    height: auto;
}

/* Media query for smaller screens */
@media (max-width: 1200px) {
    .right-column-spacer {
        min-width: 280px;
    }

    .about-image {
        max-width: 280px;
    }
}

@media (min-width: 991px) {
    .about-columns {
        display: grid;
        gap: 40px;
        grid-template-columns: 208px 1fr 200px;
    }
}

@media (max-width: 991px) {
    .about-columns {
        flex-wrap: wrap;
        gap: 30px;
    }

    .left-column {
        flex: 0 0 100%;
    }

    .middle-column {
        flex: 0 0 calc(100% - 330px);
        /* Leave space for image */
    }

    .right-column-spacer {
        min-width: 0;
        flex: 0;
    }

    .about-heading {
        font-size: 28px;
    }

    .about-mit-section {
        padding-bottom: 240px;
        /* Add padding at the bottom for the image */
    }
}

@media (max-width: 767px) {
    .about-columns {
        flex-direction: column;
        gap: 30px;
    }

    .left-column,
    .middle-column {
        flex: 0 0 100%;
    }

    .about-heading {
        font-size: 26px;
        margin-bottom: 30px;
    }

    .about-line {
        width: 100vw;
        max-width: 100vw;
        left: 50%;
        transform: translateX(-50%);
        right: auto;
    }

    .about-text {
        font-size: 16px;
    }

    .about-image {
        max-width: 290px;
    }


}

@media (max-width: 480px) {
    .about-heading {
        font-size: 24px;
    }

    .about-text {
        font-size: 15px;
    }

    .about-mit-section {
        padding-bottom: 200px;
        /* Add padding at the bottom for the image */
    }

    .about-image {
        max-width: 250px;
    }
}
`,previewImg:"about-2.png"}]},UC={id:"cat-footer",name:"Footer",sections:[{id:"sec-footer-1",title:"Footer 1",htmlCode:`<!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-container">
                <div class="footer-content">
                    <h3 class="footer-heading">MIT Professional <span class="nowrap">Education</span></h3>
                    <p class="footer-text">700 Technology Square Building NE48-200<br>Cambridge, MA 02139, <span
                            class="nowrap">USA</span></p>
                    <p class="footer-text">Copyright © 2025 All Rights <span class="nowrap">Reserved</span></p>
                </div>
                <div class="footer-links">
                    <p class="footer-link">
                        <a href="https://accessibility.mit.edu/" target="_blank" rel="noopener"><span
                                class="nowrap">Accessibility</span></a>
                    </p>
                    <p class="footer-link">
                        <a href="https://professional.mit.edu/policies" target="_blank" rel="noopener"><span
                                class="nowrap">Privacy</span></a>
                    </p>
                </div>
            </div>
        </div>
    </footer>`,cssCode:`/* Footer styles with right-aligned links */
.footer {
    background-color: #252525;
    padding: 40px 0;
    color: white;
}

.footer-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.footer-content {
    text-align: left;
}

.footer-heading {
    font-family: 'Libre Franklin', Arial, sans-serif;
    font-size: 18px;
    font-weight: 700;
    /* bold */
    margin-bottom: 22px;
}

.footer-text {
    font-size: 14px;
    font-weight: 400;
    /* regular */
    line-height: 1.5;
    margin-bottom: 15px;
}

.footer-text:last-child {
    margin-bottom: 0;
}

.footer-links {
    text-align: right;
}

.footer-link {
    font-size: 14px;
    font-weight: 400;
    /* regular */
    line-height: 1.5;
    margin-bottom: 8px;
}

.footer-link a {
    color: white;
    text-decoration: underline;
}

.footer-link a:hover {
    color: #f0f0f0;
}

/* Responsive adjustments */
@media (max-width: 767px) {
    .footer {
        padding: 30px 0;
    }

    .footer-container {
        flex-direction: column;
    }

    .footer-links {
        text-align: left;
        margin-top: 25px;
    }
}

@media (max-width: 480px) {
    .footer-heading {
        font-size: 16px;
        margin-bottom: 18px;
    }

    .footer-text,
    .footer-link {
        font-size: 13px;
    }
}`,previewImg:"footer-1.png"}]},HC={id:"cat-subhero",name:"Sub Hero",sections:[{id:"sec-subhero-1",title:"Sub Hero Section 1",htmlCode:`<section class="subhero">
        <div class="container">
            <div class="subhero-container">
                <div>
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-mstn/images/LearnOnTheForefrontModelImage.png"
                        alt="Woman" class="subhero-img" />
                </div>
                <div>
                    <h2>Learn On The Forefront Of Transportation Innovation</h2>
                    <p>Dive into the latest research from MIT's Intelligent Transportation Systems Lab and learn to
                        translate real-time data into real-world results that mitigate traffic congestion and other
                        transportation challenges.</p>
                </div>
            </div>
        </div>
    </section>`,cssCode:`/* Main section styling */
.subhero {
    background-color: #ffffff;
    padding: 100px 0 83px !important;
    display: flex;
    justify-content: center;
    align-items: center;
   
}


/* Inner container with padding */
.subhero-container {
    display: flex;
    flex-direction: row;
    padding: 80px 60px;
    position: relative;
    background-color: #7F0426;
    border-radius: 10px;
    max-width: 1104px;
    margin-inline: auto;
    align-items: center;

}

/* Left column - image container */
.subhero-container>div:first-child {
    flex: 1;
    position: relative;
    min-height: 300px;
}

/* Right column - text content */
.subhero-container>div:last-child {
    flex: 1;
    padding-left: 30px;
    position: relative;
}

/* The vertical divider line */
.subhero-container>div:last-child::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: #BA375C;
}

/* Image styling - absolute positioned */
.subhero-img {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 100%;
    height: auto;
    /* Make it taller than the container */
    max-width: 450px;
}

/* Typography styling */
.subhero-container>div:last-child p:first-child {
    font-size: 20px;
    font-style: italic;
    line-height: 110%;
    margin-bottom: 15px;
    color: white;
}

.subhero-container>div:last-child h2 {
    font-size: 36px;
    font-weight: 800;
    /* extra bold */
    margin-bottom: 15px;
    color: white;
    max-width: 440PX;
}

.subhero-container>div:last-child p:last-child {
    font-size: 16px;
    font-weight: 500;
    /* medium weight */
    line-height: 150%;
    color: white;
}


@media (max-width: 1230px) {
    .subhero-img {
        top: 50px;
        max-width: 430px;
    }
}


/* Responsive styling */
@media (max-width: 991px) {

    .subhero-container {
        flex-direction: column !important;
        padding: 60px 30px;
    }
    .subhero-container>div:last-child h2 {
        font-size: 32px;
    }

    .subhero-img {
        top: 12%;
        max-width: 330px;
    }

    .subhero-container>div:first-child {
        min-height: 250px;
        margin-bottom: 40px;
    }

    .subhero-container>div:last-child {
        padding-left: 0;
    }

    .subhero-container>div:last-child::before {
        left: 0;
        top: -20px;
        height: 2px;
        width: 100%;
    }

    .subhero-img {
        max-height: 350px;
        top: -22%;
    }
}

@media (max-width: 576px) {
    .subhero {
        padding: 60px 0;
    }

    .subhero-container {
        padding: 40px 20px;
    }

    .subhero-container>div:last-child p:first-child {
        font-size: 18px;
    }

    .subhero-container>div:last-child h2 {
        font-size: 28px;
    }
}
`,previewImg:"subhero-1.png"},{id:"sec-subhero-2",title:"Sub Hero Section 2",htmlCode:`<section class="sunbhero">
        <div class="container">
            <div class="subhero-container">
                <div>
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-merai/images/FirstModelImage.png" alt="Woman"
                        class="subhero-img" />
                </div>
                <div>
                    <p>Build AI applications that are</p>
                    <h2>Smart, Safe, and Responsible</h2>
                    <p>Discover how to develop and deploy AI systems in ways that are ethical, responsible, and
                        beneficial for all.</p>
                </div>
            </div>
        </div>
    </section>`,cssCode:`
/* Main section styling */
.sunbhero {
    background-color: #ffffff;
    padding: 100px 0 83px;
    display: flex;
    justify-content: center;
    align-items: center;
}


/* Inner container with padding */
.subhero-container {
    display: flex;
    padding: 80px 60px;
    position: relative;
    background-color: #01318C;
    border-radius: 10px;
    max-width: 848px;
    margin-inline: auto;
align-items: center;

}

/* Left column - image container */
.subhero-container>div:first-child {
    flex: 1;
    position: relative;
    min-height: 300px;
}

/* Right column - text content */
.subhero-container>div:last-child {
    flex: 1;
    padding-left: 30px;
    position: relative;
}

/* The vertical divider line */
.subhero-container>div:last-child::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: #5883BA;
}

/* Image styling - absolute positioned */
.subhero-img {
    position: absolute;
    top: -35%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 100%;
    height: auto;
    /* Make it taller than the container */
    max-width: 450px;
}

/* Typography styling */
.subhero-container>div:last-child p:first-child {
    font-size: 20px;
    font-style: italic;
    line-height: 110%;
    margin-bottom: 15px;
    color: white;
}

.subhero-container>div:last-child h2 {
    font-size: 36px;
    font-weight: 800;
    /* extra bold */
    margin-bottom: 15px;
    color: white;
}

.subhero-container>div:last-child p:last-child {
    font-size: 16px;
    font-weight: 500;
    /* medium weight */
    line-height: 150%;
    color: white;
}

/* Responsive styling */
@media (max-width: 992px) {
    .subhero-container {
        padding: 60px 40px;
    }

    .subhero-container>div:last-child h2 {
        font-size: 32px;
    }
}

@media (max-width: 768px) {
    .sunbhero {
        padding: 80px 0;
    }

    .subhero-container {
        flex-direction: column;
        padding: 60px 30px;
    }

    .subhero-container>div:first-child {
        min-height: 250px;
        margin-bottom: 40px;
    }

    .subhero-container>div:last-child {
        padding-left: 0;
    }

    .subhero-container>div:last-child::before {
        left: 0;
        top: -20px;
        height: 2px;
        width: 100%;
    }

    .subhero-img {
        max-height: 350px;
        top: -32%;
    }
}

@media (max-width: 576px) {
    .sunbhero {
        padding: 60px 0;
    }

    .subhero-container {
        padding: 40px 20px;
    }

    .subhero-container>div:last-child p:first-child {
        font-size: 18px;
    }

    .subhero-container>div:last-child h2 {
        font-size: 28px;
    }
}
`,previewImg:"subhero-2.png"},{id:"sec-subhero-3",title:"Sub Hero Section 3",htmlCode:`<section class="info-section">
        <div class="container">
            <div class="info-box">
                <div class="info-column left-column">
                </div>
                <div class="divider"></div>
                <div class="info-column right-column">
                    <h2 class="info-heading">Capture Attention. <br>Create Impact.<br> Drive <span
                            class="nowrap">Results.</span></h2>
                    <p class="info-text">When technical expertise meets exceptional communication, the results are
                        transformational. The Persuasive Communication Bootcamp is designed for technology and science
                        professionals ready to elevate their ability to present, persuade, and lead in <span
                            class="nowrap">any setting.</span></p>
                </div>
            </div>
        </div>
        <img src="https://slxcloud.app/MIT/2025/Course-2025-pcb/images/Model1%201.png" alt="Professional person"
            class="left-column-image">
    </section>`,cssCode:`
/* Info section styles */
.info-section {
    background-color: white;
    padding: 100px 0;
    position: relative;
}

.info-box {
    background-color: #7F0426;
    border-radius: 10px;
    display: flex;
    position: relative;
    overflow: hidden;
}

.info-column {
    flex: 1;
    padding: 50px;
}

.divider {
    width: 2px;
    height: 50%;
    background-color: #BA375C;
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translateX(-50%);
}

.info-heading {
    color: white;
    font-size: 36px;
    line-height: 120%;
    font-weight: 800;
    margin-bottom: 30px;
}

.info-text {
    color: white;
    font-size: 16px;
    line-height: 150%;
}

.left-column-image {
    max-width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    /* Makes the image overlap the bottom of the container */
    left: 10%;
    width: 50%;
    display: flex;
    justify-content: center;
    max-width: 500px;
}

/* Media query for smaller screens */
@media (max-width: 991px) {
    .info-box {
        flex-direction: column;
    }

    .info-column {
        padding: 40px;
    }

    .info-heading {
        font-size: 30px;
    }

    .divider {
        display: none;
    }

    .left-column-image {
        display: none;
    }
}

@media (max-width: 767px) {

    /* Adjust styles for mobile */
    .info-column {
        padding: 30px;
    }

    .info-heading {
        font-size: 26px;
    }

    /* Only hide left column in info section */
    .info-section .left-column {
        display: none;
    }

    .info-section .right-column {
        width: 100%;
    }

    .info-box {
        flex-direction: column;
    }
}

/* Additional responsive improvements */
@media (max-width: 480px) {
    .hero-title {
        font-size: 36px;
    }

    .date-text {
        font-size: 14px;
    }

    .info-heading {
        font-size: 24px;
    }

    .info-text {
        font-size: 15px;
    }

    .info-section {
        padding: 60px 0;
    }
}
`,previewImg:"subhero-3.png"}]},VC={id:"cat-experts",name:"Experts",sections:[{id:"sec-experts-1",title:"experts 1",htmlCode:`<section class="mit-expert-section">

        <div class="expert-container">
            <div class="expert-content">
                <div class="expert-contentleft-column">
                    <h2 class="expert-heading">Design Next-Generation Transportation Systems</h2>
                    <div class="heading-line"></div>
                </div>
                <div class="expert-contentright-column">
                    <p class="expert-paragraph">
                        Autonomous vehicles. Electric mobility. On-demand services. We’re in a transportation
                        revolution, the seventh in history, and these changes are pushing the boundaries of
                        transportation design. As intelligent mobility systems evolve, professionals need a deep
                        understanding of AI-driven analytics, predictive modeling, and connected vehicle
                        technologies—and the skills to align these tools and technologies with broader urban planning
                        and sustainability goals.
                    </p>
                    <p class="expert-paragraph">
                        In this dynamic live online course, you'll discover how to design next-generation mobility
                        systems across a range of scales using the latest methods—from demand and network modeling to AI
                        to simulation, optimization, and control. You'll leave the experience with the tools you need to
                        enhance your region's transportation infrastructure—and the knowledge to tackle the societal and
                        environmental challenges shaping tomorrow's transportation landscape.
                    </p>
                </div>
            </div>
        </div>
    </section>`,cssCode:`/* MIT Expert Section Styles */
.mit-expert-section {
    padding: 100px 0;
    position: relative;
    background-color: #751115;
}

.expert-container {
    max-width: 1015px;
    margin: 0 auto;
    padding: 0 15px;
}

.expert-content {
    display: flex;
    gap: 110px;
}

.expert-contentleft-column {
    position: relative;
    flex-shrink: 0;
}

.expert-heading {
    font-size: 32px;
    font-weight: 800;
    /* extra bold */
    line-height: 130%;
    color: #ffffff;
    max-width: 383px;
    margin: 0 0 20px 0;
}

.heading-line {
    height: 2px;
    background-color: #BA375C;
    position: absolute;
    left: -100vw;
    /* Extends to the left edge of the screen */
    right: 0;
    width: calc(100% + 100vw);
}

.expert-contentright-column {
    flex: 1;
}

.expert-paragraph {
    font-size: 17px;
    line-height: 150%;
    color: #ffffff;
    margin: 0 0 30px 0;
}

.expert-paragraph:last-child {
    margin-bottom: 0;
}

/* Responsive Styles */
@media (max-width: 992px) {
    .expert-content {
        flex-direction: column;
        gap: 40px;
    }

    .expert-contentleft-column {
        width: 100%;
    }

    .expert-heading {
        max-width: 100%;
    }


}

@media (max-width: 768px) {
    .mit-expert-section {
        padding: 40px 0;
    }

    .expert-heading {
        font-size: 28px;
    }

    .expert-paragraph {
        font-size: 16px;
    }
}`,previewImg:"experts-1.png"},{id:"sec-experts-2",title:"experts 2",htmlCode:`<section class="mit-expert-section">

        <div class="container">
            <div class="expert-content">
                <div class="expert-contentleft-column">
                    <h2 class="expert-heading">Discover how to design breakthrough generative <span class="nowrap">AI tools</span></h2>
                    <div class="heading-line"></div>
                </div>
                <div class="expert-contentright-column">
                    <p class="expert-paragraph">
                        Generative AI is now ubiquitous, with some estimates suggesting that the market will reach a
                        staggering $1.3 trillion by 2032. But alongside this remarkable growth comes profound
                        disruption, as generative AI is transforming conventional robotic algorithms and design. Acquire
                        the skills you need to keep pace in the generative AI revolution in this brand-new, <span
                            class="nowrap">high-impact
                            course.</span>
                    </p>
                    <p class="expert-paragraph">
                        Alongside accomplished global peers, you'll explore the key ways that generative AI is
                        disrupting conventional robot design, with a focus on robot learning, testing, and the
                        application of safety certificates. You'll emerge with the skills you need to create
                        cutting-edge generative AI applications of your own—tools that can help you stay competitive in
                        this rapidly<span class="nowrap">evolving field.</span>
                    </p>
                </div>
            </div>
        </div>
    </section>`,cssCode:`
/* MIT Expert Section Styles */
.mit-expert-section {
    position: relative;
    overflow: hidden;
}

.expert-container {
    max-width: 1015px;
    margin: 0 auto;
    padding: 0 15px;
}

.expert-content {
    display: flex;
    gap: 110px;
    padding: 60px 60px 60px 0;
    border-radius: 0 10px 10px 0;
    background: #021944;
    position: relative;
}


.expert-content::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 100%;
    width: 100vw;
    height: 100%;
    background: #021944;
}

.expert-contentleft-column {
    position: relative;
    flex-shrink: 0;
}

.expert-heading {
    font-size: 32px;
    font-weight: 800;
    /* extra bold */
    line-height: 130%;
    color: #ffffff;
    max-width: 340px;
    margin: 0 0 20px 0;
}

.heading-line {
    height: 2px;
    background-color: #5883BA;
    position: absolute;
    left: -100vw;
    /* Extends to the left edge of the screen */
    right: 0;
    width: calc(100% + 100vw);
}

.expert-contentright-column {
    flex: 1;
}

.expert-paragraph {
    font-size: 17px;
    line-height: 150%;
    color: #ffffff;
    margin: 0 0 30px 0;
}

.expert-paragraph:last-child {
    margin-bottom: 0;
}

/* Responsive Styles */
@media (max-width: 992px) {
    .expert-content {
        flex-direction: column;
        gap: 40px;
    }

    .expert-contentleft-column {
        width: 100%;
    }

    .expert-heading {
        max-width: 100%;
    }


}

@media (max-width: 768px) {
    .mit-expert-section {
        padding: 40px 0;
    }

    .expert-heading {
        font-size: 28px;
    }

    .expert-paragraph {
        font-size: 16px;
    }
}`,previewImg:"experts-2.png"}]},qC={id:"cat-byTheNumbers",name:"By The Numbers",sections:[{id:"sec-byTheNumbers-1",title:"By The Numbers 1",htmlCode:`<section class="numbers-section">
        <div class="container">
            <h2 class="section-heading">By the Numbers</h2>

            <div class="numbers-cards">
                <div class="number-card">
                    <div class="number">$34.83B</div>
                    <p class="card-text">The global AI in transportation market is estimated to grow from $4.50 billion
                        in 2024 to <strong>$34.83 billion</strong>
                        <span class="nowrap">by 2034.</span>
                    </p>
                    <p class="card-source">Source: <a
                            href="https://www.precedenceresearch.com/artificial-intelligence-in-transportation-market?utm_source=chatgpt.com"
                            target="_blank">Precedence Research</a>
                    </p>
                </div>

                <div class="number-card number-card-2">
                    <div class="number">192,000</div>
                    <p class="card-text"><strong>192,000 </strong>publicly available electric vehicle charging ports are
                        available in the U.S. as of August 2024—up from <strong>100,000</strong> in<span class="nowrap">
                            early
                            2021.</span>
                    </p>
                    <p class="card-source">Source: <a
                            href="https://www.theverge.com/2024/8/27/24229494/ev-charging-biden-funding-grants-infrastructure?utm_source=chatgpt.com"
                            target="_blank">The Verge</a> </p>
                </div>

                <div class="number-card">
                    <div class="number">15-20%</div>
                    <p class="card-text"><strong>15-20%</strong> reduction in commuting times in cities that harness
                        <span class="nowrap">smart-mobility applications </span>
                    </p>
                    <p class="card-source">Source: <a
                            href="https://www.mckinsey.com/capabilities/operations/our-insights/smart-cities-digital-solutions-for-a-more-livable-future"
                            target="_blank">McKinsey</a> </p>
                </div>
            </div>
        </div>
    </section>`,cssCode:`/* By the Numbers Section */
.numbers-section {
    background-color: white;
    padding: 100px 0;
    position: relative;
}

.numbers-title {
    color: #252525;
    font-family: "Work Sans", sans-serif;
    font-size: 36px;
    font-weight: 800;
    line-height: 120%;
    padding-bottom: 50px;
}

.numbers-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.number-card {
    border-radius: 10px;
    background: #55031A;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    overflow: hidden;
}

.number-card-2 {
    background: #7F0426;

}

.number-card:nth-child(1) {
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
}

.number-card:nth-child(2) {
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
}

.number-card:nth-child(3) {
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
}

.number {
    color: #ffffff;
    font-size: 64px;
    font-weight: 800;
    line-height: 120%;
}

.number-card .card-text {
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    margin-left: 0;
}

.card-source,
.card-source a {
    color: #ffffff;
    font-family: "Work Sans", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    margin-top: auto;
}

.card-source a {
    text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 992px) {
    .numbers-cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .numbers-cards {
        grid-template-columns: 1fr;
    }

    .numbers-title {
        position: relative;
        top: 0;
        margin-bottom: 30px;
    }

    .numbers-section {
        padding: 40px 0;
    }
}

`,previewImg:"by-the-numbers-1.png"},{id:"sec-byTheNumbers-2",title:"By The Numbers 2",htmlCode:`<section class="numbers-section">
        <div class="container">
            <h2 class="section-heading">By The Numbers</h2>

            <div class="numbers-cards">
                <div class="number-card">
                    <div class="number">79%</div>
                    <p class="card-text"><strong>79%</strong> of corporate strategists view AI and analytics as critical
                        to their success over the next <span class="nowrap">two years</span>
                    </p>
                    <p class="card-source">Source: <a
                            href="https://www.gartner.com/en/newsroom/press-releases/2023-07-05-gartner-survey-finds-79-percent-of-corporate-strategists-see-ai-and-analytics-as-critical-to-their-success-over-the-next-two-years"
                            target="_blank">Gartner</a>
                    </p>
                </div>

                <div class="number-card">
                    <div class="number">60%</div>
                    <p class="card-text"><strong>60%</strong>of organizations using AI tools report using
                        <span class="nowrap">generative AI</span>
                    </p>
                    <p class="card-source">Source: <a
                            href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-in-2023-generative-ais-breakout-year"
                            target="_blank">McKinsey</a> </p>
                </div>

                <div class="number-card">
                    <div class="number">$34%</div>
                    <p class="card-text"><strong>34%</strong> of millennials reported using generative AI <span
                            class="nowrap">in 2023 </span></p>
                    <p class="card-source">Source: <a
                            href="https://www.emarketer.com/content/generative-ai-climb-across-all-age-groups-millennials-gen-z"
                            target="_blank">Insider Intelligence</a> </p>
                </div>
            </div>
        </div>
    </section>`,cssCode:`/* By the Numbers Section */
.numbers-section {
    background-color: white;
    padding: 35px 0 85px;
    position: relative;
}

.numbers-title {
    color: #252525;
    font-family: "Work Sans", sans-serif;
    font-size: 36px;
    font-weight: 800;
    line-height: 120%;
    padding-bottom: 50px;
}

.numbers-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.number-card {
    border-radius: 10px;
    background: #D6EFFA;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    overflow: hidden;
}

.number-card:nth-child(1) {
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
}

.number-card:nth-child(2) {
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
}

.number-card:nth-child(3) {
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
}

.number {
    color: #01318C;
    font-family: "Work Sans", sans-serif;
    font-size: 75px;
    font-weight: 800;
    line-height: 120%;
}

.number-card .card-text {
    color: #252525;
    font-family: "Work Sans", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    margin-left: 0;
}

.card-source,
.card-source a {
    color: #252525;
    font-family: "Work Sans", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    margin-top: auto;
}

.card-source a {
    text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 992px) {
    .numbers-cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .numbers-cards {
        grid-template-columns: 1fr;
    }

    .numbers-title {
        position: relative;
        top: 0;
        margin-bottom: 30px;
    }

    .numbers-section {
        padding: 40px 0;
    }
}
`,previewImg:"by-the-numbers-2.png"},{id:"sec-byTheNumbers-3",title:"By The Numbers 3",htmlCode:`<section class="by-the-numbers-section">
        <div class="container">
            <div class="by-the-numbers-grid">
                <div class="heading-column">
                    <div class="section-header">
                        <h2 class="section-heading">By the Numbers</h2>
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/green-triangle.png"
                            alt="Green Triangle Icon" class="section-icon">

                    </div>
                </div>
                <div class="cards-column">
                    <div class="stat-card">
                        <h3 class="stat-number">$4.4 trillion</h3>
                        <p class="stat-description">Generative AI will add a staggering $4.4 trillion to the global
                            economy each year</p>
                        <p class="stat-source">Source: <a
                                href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/superagency-in-the-workplace-empowering-people-to-unlock-ais-full-potential-at-work"
                                target="_blank">McKinsey & Company</a></p>
                    </div>
                    <div class="stat-card">
                        <h3 class="stat-number">More than 60%</h3>
                        <p class="stat-description">More than 60% of companies with more 10,000 employees are using AI
                        </p>
                        <p class="stat-source">Source: <a
                                href="https://mitsloan.mit.edu/ideas-made-to-matter/who-what-and-where-ai-adoption-america#:~:text=More%20than%2050%25%20of%20companies,4%25%20in%20construction%20and%20retail."
                                target="_blank">MIT Sloan School of Management</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>`,cssCode:`/* By the Numbers Section */
.by-the-numbers-section {
    background-color: white;
    padding: 90px 0;
}

.by-the-numbers-grid {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 60px;
    align-items:center;
}

.heading-column {
    position: relative;
}

.section-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
}

.section-icon {
    width: 24px;
    height: auto;
}

.section-heading {
    font-size: 28px;
    font-weight: 800;
    color: #252525;
    margin: 0;
}

.cards-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.stat-card {
    background-color: #A90533;
    border-radius: 10px;
    padding:20px  40px;
    color: white;
}

.stat-number {
    font-size: 42px;
    font-weight: 800;
    color: white;
    margin: 0 0 20px 0;
    line-height: 1.1;
}

.stat-description {
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    color: white;
    margin: 0 0 30px 0;
}

.stat-source {
    font-size: 13px;
    color: white;
    margin: 0;
}

.stat-source a {
    color: white;
    text-decoration: underline;
}

.stat-source a:hover {
    opacity: 0.9;
}

/* Responsive adjustments */
@media (max-width: 991px) {
    .by-the-numbers-grid {
        grid-template-columns: 200px 1fr;
        gap: 40px;
    }
    
    .stat-number {
        font-size: 36px;
    }
    
    .stat-description {
        font-size: 15px;
    }
}

@media (max-width: 767px) {
    .by-the-numbers-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }
    
    .cards-column {
        grid-template-columns: 1fr;
        gap: 25px;
    }
    
    .section-heading {
        font-size: 26px;
    }
    
    .stat-card {
        padding: 30px;
    }
}

@media (max-width: 480px) {
    .section-heading {
        font-size: 24px;
    }
    
    .stat-number {
        font-size: 32px;
    }
    
    .stat-description {
        font-size: 14px;
        margin-bottom: 20px;
    }
    
    .stat-card {
        padding: 25px;
    }
}


 
.download-columns {position: unset;
}
 .form-arrows-top {
    position: absolute;
    top: 2%;
    left: 0;
    width: 180px
    
    
}
 .form-arrows-bottom {
    position: absolute;
    bottom: 2%;
    left: 20%;
    width: 180px
    
    
}

@media (max-width: 991px) {
      .form-arrows-top {

    top: 20px;

    
    
}
     .form-arrows-bottom {
    bottom: 20px;

    
    
}
}`,previewImg:"by-the-numbers-3.png"},{id:"sec-byTheNumbers-4",title:"By The Numbers 4",htmlCode:`    <section class="numbers-section">
        <div class="container">
            <h2 class="section-heading">By The Numbers</h2>

            <div class="numbers-cards">
                <div class="number-card">
                    <div class="number">93%</div>
                    <p class="card-text"><strong>93%</strong> of Fortune 500 CHROs are already integrating AI tools into
                        <span class="nowrap">their operations.</span>
                    </p>
                    <p class="card-source">Source: <a
                            href="https://www.gallup.com/workplace/651203/workplace-answering-big-questions.aspx"
                            target="_blank">Gallup</a>
                    </p>
                </div>

                <div class="number-card">
                    <div class="number">71%</div>
                    <p class="card-text"><strong>71%</strong>of employees trust their employers to act ethically as they
                        <span class="nowrap">develop AI.</span>
                    </p>
                    <p class="card-source">Source: McKinsey & Company </p>
                </div>

                <div class="number-card">
                    <div class="number">$4.4T</div>
                    <p class="card-text">Generative AI alone will add a staggering <strong>$4.4 trillion</strong> to the
                        global <span class="nowrap">economy—each year.</span></p>
                    <p class="card-source">Source: <a
                            href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/superagency-in-the-workplace-empowering-people-to-unlock-ais-full-potential-at-work"
                            target="_blank">McKinsey & Company</a> </p>
                </div>
            </div>
        </div>
    </section>`,cssCode:`
/* By the Numbers Section */
.numbers-section {
    background-color: white;
    padding: 35px 0 25px;
    position: relative;
}

.numbers-title {
    color: #252525;
    font-family: "Work Sans", sans-serif;
    font-size: 36px;
    font-weight: 800;
    line-height: 120%;
    padding-bottom: 50px;
}

.numbers-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.number-card {
    border-radius: 10px;
    background: #C1CFE5;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    overflow: hidden;
}

.number-card:nth-child(1) {
    background-image: url('https://slxcloud.app/MIT/2025/Course-2025-merai/images/ByTheNumbers1.png');
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
}

.number-card:nth-child(2) {
    background-image: url('https://slxcloud.app/MIT/2025/Course-2025-merai/images/ByTheNumbers2.png');
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
}

.number-card:nth-child(3) {
    background-image: url('https://slxcloud.app/MIT/2025/Course-2025-merai/images/ByTheNumbers3.png');
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
}

.number {
    color: #021944;
    font-family: "Work Sans", sans-serif;
    font-size: 84px;
    font-weight: 800;
    line-height: 120%;
}

.number-card .card-text {
    color: #021944;
    font-family: "Work Sans", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    margin-left: 0;
}

.card-source,
.card-source a {
    color: #021944;
    font-family: "Work Sans", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    margin-top: auto;
}

.card-source a {
    text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 992px) {
    .numbers-cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .numbers-cards {
        grid-template-columns: 1fr;
    }

    .numbers-title {
        position: relative;
        top: 0;
        margin-bottom: 30px;
    }

    .numbers-section {
        padding: 40px 0;
    }
}




/* Cards Grid Section Styles */
.cards-section {
    padding: 60px 0;
}



.cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

.card {
    display: flex;
    align-items: center;
    background-color: #E4EAF5;
    padding: 25px;
    border-radius: 10px;
}

.card-icon {
    flex-shrink: 0;
    width: 55px;
    height: auto;
}

.card-text {
    margin-left: 10px;
    color: #252525;
    font-size: 15px;
    font-weight: 500;
    /* medium weight */
    line-height: 140%;
    text-align: left;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .cards-grid {
        grid-template-columns: 1fr;
    }

    .card {
        padding: 20px;
    }
}

@media (max-width: 480px) {
    .card {
        flex-direction: column;
        text-align: center;
    }

    .card-icon {
        margin-bottom: 15px;
    }

    .card-text {
        margin-left: 0;
    }
}`,previewImg:"by-the-numbers-4.png"}]},GC={id:"cat-value",name:"Value",sections:[{id:"sec-value-1",title:"Value Section 1",htmlCode:`<section class="value-section">
        <div class="container">
            <div class="value-grid">
                <div class="heading-column">
                    <h2 class="section-heading">Discover the tools transforming research</h2>
                </div>
                <div class="divider"></div>
                <div class="text-column">
                    <p class="value-text">Master AI techniques for enhancing experiments, building generative and
                        predictive models, and streamlining data analysis for faster insights.</p>
                </div>
            </div>
        </div>
    </section>`,cssCode:`
/* Grid-based Two Column Section with Divider */
/* Flex-based Two Column Section with Divider */
.value-section {
    background-color: #55031A;
    padding: 80px 0;
    position: relative;
}



.value-grid {
    display: flex;
    align-items: center;
    position: relative;
}

.heading-column {
    flex: 0 0 auto; 
    padding-right: 40px;
}

.value-grid .section-heading {
    font-size: 28px;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.2;
    margin-bottom: 0;
    text-align: left;
    max-width: 252px;
}

.value-grid .divider {
    flex: 0 0 2px; /* 2px wide, don't grow, don't shrink */
    align-self: stretch; /* Fill the height */
    height: 120px;
    background-color: #A90533;
    margin: auto 20px; /* Add margin on both sides */
}



.value-text {
    font-size: 16px;
    padding-left: 40px;
    font-weight: 400;
    line-height: 160%;
    color: #ffffff;
    max-width: 600px;
}

/* Media query for tablet */
@media (max-width: 991px) {
    .value-grid {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .value-grid .section-heading {
        font-size: 24px;
        border-bottom: 2px solid #C64A1E;
        padding-bottom: 15px;
        margin-bottom: 20px;
        max-width: 80%;
    }

    .heading-column {
        padding-right: 0;
        width: 100%;
    }

    .value-grid .divider {
        display: none;
    }

    .text-column {
        padding-left: 0 !important;
        width: 100%;
    }
    .value-text {
        padding-left: 0;
    }
}

/* Media query for mobile */
@media (max-width: 767px) {
    .value-section {
        padding: 60px 0;
    }
    
    .value-text {
        max-width: 100%;
    }
}

/* Additional adjustments for smaller screens */
@media (max-width: 480px) {
    .value-section {
        padding: 50px 0;
    }

    .value-grid .section-heading {
        padding-bottom: 30px;
        font-size: 22px;
        
    }
}
`,previewImg:"value-1.png"}]},uu=[AC,$C,HC,LC,qC,NC,DC,jC,BC,VC,FC,WC,GC,UC];function KC(){const[n,r]=E.useState(uu[0].id),[o,s]=E.useState(!1),l=tr(),u=vy(l.breakpoints.down("sm")),p=240,f=()=>s(!o),m=uu.find(g=>g.id===n);return H.jsxs(Wi,{sx:{display:"flex"},children:[H.jsx(P2,{}),H.jsx(R1,{position:"fixed",sx:{ml:u?0:`${p}px`,width:u?"100%":`calc(100% - ${p}px)`},children:H.jsxs(SC,{children:[u&&H.jsx(Cu,{color:"inherit",edge:"start",onClick:f,sx:{mr:2},children:H.jsx(RC,{})}),H.jsx(Er,{variant:"h6",noWrap:!0,component:"div",children:"MIT Landing Page Library"})]})}),H.jsx(MC,{drawerWidth:p,mobileOpen:o,onDrawerToggle:f,isMobile:u,categories:uu,selectedCategoryId:n,onSelectCategory:r}),H.jsx(Wi,{component:"main",sx:{flexGrow:1,p:2,mt:"64px"},children:H.jsx(OC,{category:m})})]})}const YC=qu({palette:{primary:{main:"#001C39"}}});ev.createRoot(document.getElementById("root")).render(H.jsx(En.StrictMode,{children:H.jsx(Aw,{theme:YC,children:H.jsx(KC,{})})}));
