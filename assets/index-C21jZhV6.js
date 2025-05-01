function I0(n,r){for(var o=0;o<r.length;o++){const a=r[o];if(typeof a!="string"&&!Array.isArray(a)){for(const l in a)if(l!=="default"&&!(l in n)){const u=Object.getOwnPropertyDescriptor(a,l);u&&Object.defineProperty(n,l,u.get?u:{enumerable:!0,get:()=>a[l]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const p of u.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function o(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(l){if(l.ep)return;l.ep=!0;const u=o(l);fetch(l.href,u)}})();function Io(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Un(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var r=n.default;if(typeof r=="function"){var o=function a(){return this instanceof a?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};o.prototype=r.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(n).forEach(function(a){var l=Object.getOwnPropertyDescriptor(n,a);Object.defineProperty(o,a,l.get?l:{enumerable:!0,get:function(){return n[a]}})}),o}var pc={exports:{}},so={},fc={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cf;function T0(){if(cf)return Pe;cf=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),p=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.iterator;function k(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,v={};function M(O,V,pe){this.props=O,this.context=V,this.refs=v,this.updater=pe||$}M.prototype.isReactComponent={},M.prototype.setState=function(O,V){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,V,"setState")},M.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=M.prototype;function j(O,V,pe){this.props=O,this.context=V,this.refs=v,this.updater=pe||$}var R=j.prototype=new _;R.constructor=j,E(R,M.prototype),R.isPureReactComponent=!0;var z=Array.isArray,I=Object.prototype.hasOwnProperty,F={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function L(O,V,pe){var se,he={},ae=null,Se=null;if(V!=null)for(se in V.ref!==void 0&&(Se=V.ref),V.key!==void 0&&(ae=""+V.key),V)I.call(V,se)&&!w.hasOwnProperty(se)&&(he[se]=V[se]);var Ie=arguments.length-2;if(Ie===1)he.children=pe;else if(1<Ie){for(var xe=Array(Ie),Le=0;Le<Ie;Le++)xe[Le]=arguments[Le+2];he.children=xe}if(O&&O.defaultProps)for(se in Ie=O.defaultProps,Ie)he[se]===void 0&&(he[se]=Ie[se]);return{$$typeof:n,type:O,key:ae,ref:Se,props:he,_owner:F.current}}function H(O,V){return{$$typeof:n,type:O.type,key:V,ref:O.ref,props:O.props,_owner:O._owner}}function U(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function G(O){var V={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(pe){return V[pe]})}var ee=/\/+/g;function Y(O,V){return typeof O=="object"&&O!==null&&O.key!=null?G(""+O.key):V.toString(36)}function Q(O,V,pe,se,he){var ae=typeof O;(ae==="undefined"||ae==="boolean")&&(O=null);var Se=!1;if(O===null)Se=!0;else switch(ae){case"string":case"number":Se=!0;break;case"object":switch(O.$$typeof){case n:case r:Se=!0}}if(Se)return Se=O,he=he(Se),O=se===""?"."+Y(Se,0):se,z(he)?(pe="",O!=null&&(pe=O.replace(ee,"$&/")+"/"),Q(he,V,pe,"",function(Le){return Le})):he!=null&&(U(he)&&(he=H(he,pe+(!he.key||Se&&Se.key===he.key?"":(""+he.key).replace(ee,"$&/")+"/")+O)),V.push(he)),1;if(Se=0,se=se===""?".":se+":",z(O))for(var Ie=0;Ie<O.length;Ie++){ae=O[Ie];var xe=se+Y(ae,Ie);Se+=Q(ae,V,pe,xe,he)}else if(xe=k(O),typeof xe=="function")for(O=xe.call(O),Ie=0;!(ae=O.next()).done;)ae=ae.value,xe=se+Y(ae,Ie++),Se+=Q(ae,V,pe,xe,he);else if(ae==="object")throw V=String(O),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return Se}function te(O,V,pe){if(O==null)return O;var se=[],he=0;return Q(O,se,"","",function(ae){return V.call(pe,ae,he++)}),se}function ie(O){if(O._status===-1){var V=O._result;V=V(),V.then(function(pe){(O._status===0||O._status===-1)&&(O._status=1,O._result=pe)},function(pe){(O._status===0||O._status===-1)&&(O._status=2,O._result=pe)}),O._status===-1&&(O._status=0,O._result=V)}if(O._status===1)return O._result.default;throw O._result}var ne={current:null},A={transition:null},Z={ReactCurrentDispatcher:ne,ReactCurrentBatchConfig:A,ReactCurrentOwner:F};function J(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:te,forEach:function(O,V,pe){te(O,function(){V.apply(this,arguments)},pe)},count:function(O){var V=0;return te(O,function(){V++}),V},toArray:function(O){return te(O,function(V){return V})||[]},only:function(O){if(!U(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Pe.Component=M,Pe.Fragment=o,Pe.Profiler=l,Pe.PureComponent=j,Pe.StrictMode=a,Pe.Suspense=h,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,Pe.act=J,Pe.cloneElement=function(O,V,pe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var se=E({},O.props),he=O.key,ae=O.ref,Se=O._owner;if(V!=null){if(V.ref!==void 0&&(ae=V.ref,Se=F.current),V.key!==void 0&&(he=""+V.key),O.type&&O.type.defaultProps)var Ie=O.type.defaultProps;for(xe in V)I.call(V,xe)&&!w.hasOwnProperty(xe)&&(se[xe]=V[xe]===void 0&&Ie!==void 0?Ie[xe]:V[xe])}var xe=arguments.length-2;if(xe===1)se.children=pe;else if(1<xe){Ie=Array(xe);for(var Le=0;Le<xe;Le++)Ie[Le]=arguments[Le+2];se.children=Ie}return{$$typeof:n,type:O.type,key:he,ref:ae,props:se,_owner:Se}},Pe.createContext=function(O){return O={$$typeof:p,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Pe.createElement=L,Pe.createFactory=function(O){var V=L.bind(null,O);return V.type=O,V},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(O){return{$$typeof:f,render:O}},Pe.isValidElement=U,Pe.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:ie}},Pe.memo=function(O,V){return{$$typeof:g,type:O,compare:V===void 0?null:V}},Pe.startTransition=function(O){var V=A.transition;A.transition={};try{O()}finally{A.transition=V}},Pe.unstable_act=J,Pe.useCallback=function(O,V){return ne.current.useCallback(O,V)},Pe.useContext=function(O){return ne.current.useContext(O)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(O){return ne.current.useDeferredValue(O)},Pe.useEffect=function(O,V){return ne.current.useEffect(O,V)},Pe.useId=function(){return ne.current.useId()},Pe.useImperativeHandle=function(O,V,pe){return ne.current.useImperativeHandle(O,V,pe)},Pe.useInsertionEffect=function(O,V){return ne.current.useInsertionEffect(O,V)},Pe.useLayoutEffect=function(O,V){return ne.current.useLayoutEffect(O,V)},Pe.useMemo=function(O,V){return ne.current.useMemo(O,V)},Pe.useReducer=function(O,V,pe){return ne.current.useReducer(O,V,pe)},Pe.useRef=function(O){return ne.current.useRef(O)},Pe.useState=function(O){return ne.current.useState(O)},Pe.useSyncExternalStore=function(O,V,pe){return ne.current.useSyncExternalStore(O,V,pe)},Pe.useTransition=function(){return ne.current.useTransition()},Pe.version="18.3.1",Pe}var uf;function Gc(){return uf||(uf=1,fc.exports=T0()),fc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var df;function R0(){if(df)return so;df=1;var n=Gc(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function p(f,h,g){var x,y={},k=null,$=null;g!==void 0&&(k=""+g),h.key!==void 0&&(k=""+h.key),h.ref!==void 0&&($=h.ref);for(x in h)a.call(h,x)&&!u.hasOwnProperty(x)&&(y[x]=h[x]);if(f&&f.defaultProps)for(x in h=f.defaultProps,h)y[x]===void 0&&(y[x]=h[x]);return{$$typeof:r,type:f,key:k,ref:$,props:y,_owner:l.current}}return so.Fragment=o,so.jsx=p,so.jsxs=p,so}var pf;function Pm(){return pf||(pf=1,pc.exports=R0()),pc.exports}var N=Pm(),b=Gc();const bn=Io(b),_c=I0({__proto__:null,default:bn},[b]);var Fs={},mc={exports:{}},jt={},hc={exports:{}},gc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ff;function P0(){return ff||(ff=1,function(n){function r(A,Z){var J=A.length;A.push(Z);e:for(;0<J;){var O=J-1>>>1,V=A[O];if(0<l(V,Z))A[O]=Z,A[J]=V,J=O;else break e}}function o(A){return A.length===0?null:A[0]}function a(A){if(A.length===0)return null;var Z=A[0],J=A.pop();if(J!==Z){A[0]=J;e:for(var O=0,V=A.length,pe=V>>>1;O<pe;){var se=2*(O+1)-1,he=A[se],ae=se+1,Se=A[ae];if(0>l(he,J))ae<V&&0>l(Se,he)?(A[O]=Se,A[ae]=J,O=ae):(A[O]=he,A[se]=J,O=se);else if(ae<V&&0>l(Se,J))A[O]=Se,A[ae]=J,O=ae;else break e}}return Z}function l(A,Z){var J=A.sortIndex-Z.sortIndex;return J!==0?J:A.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var p=Date,f=p.now();n.unstable_now=function(){return p.now()-f}}var h=[],g=[],x=1,y=null,k=3,$=!1,E=!1,v=!1,M=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(A){for(var Z=o(g);Z!==null;){if(Z.callback===null)a(g);else if(Z.startTime<=A)a(g),Z.sortIndex=Z.expirationTime,r(h,Z);else break;Z=o(g)}}function z(A){if(v=!1,R(A),!E)if(o(h)!==null)E=!0,ie(I);else{var Z=o(g);Z!==null&&ne(z,Z.startTime-A)}}function I(A,Z){E=!1,v&&(v=!1,_(L),L=-1),$=!0;var J=k;try{for(R(Z),y=o(h);y!==null&&(!(y.expirationTime>Z)||A&&!G());){var O=y.callback;if(typeof O=="function"){y.callback=null,k=y.priorityLevel;var V=O(y.expirationTime<=Z);Z=n.unstable_now(),typeof V=="function"?y.callback=V:y===o(h)&&a(h),R(Z)}else a(h);y=o(h)}if(y!==null)var pe=!0;else{var se=o(g);se!==null&&ne(z,se.startTime-Z),pe=!1}return pe}finally{y=null,k=J,$=!1}}var F=!1,w=null,L=-1,H=5,U=-1;function G(){return!(n.unstable_now()-U<H)}function ee(){if(w!==null){var A=n.unstable_now();U=A;var Z=!0;try{Z=w(!0,A)}finally{Z?Y():(F=!1,w=null)}}else F=!1}var Y;if(typeof j=="function")Y=function(){j(ee)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,te=Q.port2;Q.port1.onmessage=ee,Y=function(){te.postMessage(null)}}else Y=function(){M(ee,0)};function ie(A){w=A,F||(F=!0,Y())}function ne(A,Z){L=M(function(){A(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(A){A.callback=null},n.unstable_continueExecution=function(){E||$||(E=!0,ie(I))},n.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<A?Math.floor(1e3/A):5},n.unstable_getCurrentPriorityLevel=function(){return k},n.unstable_getFirstCallbackNode=function(){return o(h)},n.unstable_next=function(A){switch(k){case 1:case 2:case 3:var Z=3;break;default:Z=k}var J=k;k=Z;try{return A()}finally{k=J}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(A,Z){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var J=k;k=A;try{return Z()}finally{k=J}},n.unstable_scheduleCallback=function(A,Z,J){var O=n.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?O+J:O):J=O,A){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=J+V,A={id:x++,callback:Z,priorityLevel:A,startTime:J,expirationTime:V,sortIndex:-1},J>O?(A.sortIndex=J,r(g,A),o(h)===null&&A===o(g)&&(v?(_(L),L=-1):v=!0,ne(z,J-O))):(A.sortIndex=V,r(h,A),E||$||(E=!0,ie(I))),A},n.unstable_shouldYield=G,n.unstable_wrapCallback=function(A){var Z=k;return function(){var J=k;k=Z;try{return A.apply(this,arguments)}finally{k=J}}}}(gc)),gc}var mf;function M0(){return mf||(mf=1,hc.exports=P0()),hc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf;function z0(){if(hf)return jt;hf=1;var n=Gc(),r=M0();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,l={};function u(e,t){p(e,t),p(e+"Capture",t)}function p(e,t){for(l[e]=t,e=0;e<t.length;e++)a.add(t[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},y={};function k(e){return h.call(y,e)?!0:h.call(x,e)?!1:g.test(e)?y[e]=!0:(x[e]=!0,!1)}function $(e,t,i,s){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E(e,t,i,s){if(t===null||typeof t>"u"||$(e,t,i,s))return!0;if(s)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,i,s,c,d,m){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=c,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=m}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){M[e]=new v(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];M[t]=new v(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){M[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){M[e]=new v(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){M[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){M[e]=new v(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){M[e]=new v(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){M[e]=new v(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){M[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function j(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_,j);M[t]=new v(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_,j);M[t]=new v(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_,j);M[t]=new v(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){M[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),M.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){M[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function R(e,t,i,s){var c=M.hasOwnProperty(t)?M[t]:null;(c!==null?c.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(E(t,i,c,s)&&(i=null),s||c===null?k(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):c.mustUseProperty?e[c.propertyName]=i===null?c.type===3?!1:"":i:(t=c.attributeName,s=c.attributeNamespace,i===null?e.removeAttribute(t):(c=c.type,i=c===3||c===4&&i===!0?"":""+i,s?e.setAttributeNS(s,t,i):e.setAttribute(t,i))))}var z=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),F=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),G=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),ne=Symbol.for("react.offscreen"),A=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=A&&e[A]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,O;function V(e){if(O===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);O=t&&t[1]||""}return`
`+O+e}var pe=!1;function se(e,t){if(!e||pe)return"";pe=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(W){var s=W}Reflect.construct(e,[],t)}else{try{t.call()}catch(W){s=W}e.call(t.prototype)}else{try{throw Error()}catch(W){s=W}e()}}catch(W){if(W&&s&&typeof W.stack=="string"){for(var c=W.stack.split(`
`),d=s.stack.split(`
`),m=c.length-1,S=d.length-1;1<=m&&0<=S&&c[m]!==d[S];)S--;for(;1<=m&&0<=S;m--,S--)if(c[m]!==d[S]){if(m!==1||S!==1)do if(m--,S--,0>S||c[m]!==d[S]){var T=`
`+c[m].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=m&&0<=S);break}}}finally{pe=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?V(e):""}function he(e){switch(e.tag){case 5:return V(e.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return e=se(e.type,!1),e;case 11:return e=se(e.type.render,!1),e;case 1:return e=se(e.type,!0),e;default:return""}}function ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case F:return"Portal";case H:return"Profiler";case L:return"StrictMode";case Y:return"Suspense";case Q:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case G:return(e.displayName||"Context")+".Consumer";case U:return(e._context.displayName||"Context")+".Provider";case ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return t=e.displayName||null,t!==null?t:ae(e.type)||"Memo";case ie:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}function Se(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(t);case 8:return t===L?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ie(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Le(e){var t=xe(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,d=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(m){s=""+m,d.call(this,m)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(m){s=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Te(e){e._valueTracker||(e._valueTracker=Le(e))}function ze(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),s="";return e&&(s=xe(e)?e.checked?"true":"false":e.value),e=s,e!==i?(t.setValue(e),!0):!1}function ye(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Re(e,t){var i=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Ne(e,t){var i=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;i=Ie(t.value!=null?t.value:i),e._wrapperState={initialChecked:s,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wt(e,t){t=t.checked,t!=null&&R(e,"checked",t,!1)}function ht(e,t){Wt(e,t);var i=Ie(t.value),s=t.type;if(i!=null)s==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?zt(e,t.type,i):t.hasOwnProperty("defaultValue")&&zt(e,t.type,Ie(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mt(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function zt(e,t,i){(t!=="number"||ye(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var gt=Array.isArray;function We(e,t,i,s){if(e=e.options,t){t={};for(var c=0;c<i.length;c++)t["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=t.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&s&&(e[i].defaultSelected=!0)}else{for(i=""+Ie(i),t=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function Ut(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bt(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(o(92));if(gt(i)){if(1<i.length)throw Error(o(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:Ie(i)}}function Ge(e,t){var i=Ie(t.value),s=Ie(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),s!=null&&(e.defaultValue=""+s)}function Ht(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vt(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dn(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fe,ke=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,s,c){MSApp.execUnsafeLocalFunction(function(){return e(t,i,s,c)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fe=Fe||document.createElement("div"),Fe.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _t(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var pn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fr=["Webkit","ms","Moz","O"];Object.keys(pn).forEach(function(e){fr.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pn[t]=pn[e]})});function be(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||pn.hasOwnProperty(e)&&pn[e]?(""+t).trim():t+"px"}function Ve(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var s=i.indexOf("--")===0,c=be(i,t[i],s);i==="float"&&(i="cssFloat"),s?e.setProperty(i,c):e[i]=c}}var dt=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sn(e,t){if(t){if(dt[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function Nr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ia=null;function Ta(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ra=null,Dr=null,Lr=null;function Eu(e){if(e=Vi(e)){if(typeof Ra!="function")throw Error(o(280));var t=e.stateNode;t&&(t=es(t),Ra(e.stateNode,e.type,t))}}function Iu(e){Dr?Lr?Lr.push(e):Lr=[e]:Dr=e}function Tu(){if(Dr){var e=Dr,t=Lr;if(Lr=Dr=null,Eu(e),t)for(e=0;e<t.length;e++)Eu(t[e])}}function Ru(e,t){return e(t)}function Pu(){}var Pa=!1;function Mu(e,t,i){if(Pa)return e(t,i);Pa=!0;try{return Ru(e,t,i)}finally{Pa=!1,(Dr!==null||Lr!==null)&&(Pu(),Tu())}}function Si(e,t){var i=e.stateNode;if(i===null)return null;var s=es(i);if(s===null)return null;i=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,t,typeof i));return i}var Ma=!1;if(f)try{var Ei={};Object.defineProperty(Ei,"passive",{get:function(){Ma=!0}}),window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{Ma=!1}function _h(e,t,i,s,c,d,m,S,T){var W=Array.prototype.slice.call(arguments,3);try{t.apply(i,W)}catch(q){this.onError(q)}}var Ii=!1,_o=null,$o=!1,za=null,$h={onError:function(e){Ii=!0,_o=e}};function Oh(e,t,i,s,c,d,m,S,T){Ii=!1,_o=null,_h.apply($h,arguments)}function Ah(e,t,i,s,c,d,m,S,T){if(Oh.apply(this,arguments),Ii){if(Ii){var W=_o;Ii=!1,_o=null}else throw Error(o(198));$o||($o=!0,za=W)}}function mr(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function zu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _u(e){if(mr(e)!==e)throw Error(o(188))}function Nh(e){var t=e.alternate;if(!t){if(t=mr(e),t===null)throw Error(o(188));return t!==e?null:e}for(var i=e,s=t;;){var c=i.return;if(c===null)break;var d=c.alternate;if(d===null){if(s=c.return,s!==null){i=s;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===i)return _u(c),e;if(d===s)return _u(c),t;d=d.sibling}throw Error(o(188))}if(i.return!==s.return)i=c,s=d;else{for(var m=!1,S=c.child;S;){if(S===i){m=!0,i=c,s=d;break}if(S===s){m=!0,s=c,i=d;break}S=S.sibling}if(!m){for(S=d.child;S;){if(S===i){m=!0,i=d,s=c;break}if(S===s){m=!0,s=d,i=c;break}S=S.sibling}if(!m)throw Error(o(189))}}if(i.alternate!==s)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:t}function $u(e){return e=Nh(e),e!==null?Ou(e):null}function Ou(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ou(e);if(t!==null)return t;e=e.sibling}return null}var Au=r.unstable_scheduleCallback,Nu=r.unstable_cancelCallback,Dh=r.unstable_shouldYield,Lh=r.unstable_requestPaint,ot=r.unstable_now,Fh=r.unstable_getCurrentPriorityLevel,_a=r.unstable_ImmediatePriority,Du=r.unstable_UserBlockingPriority,Oo=r.unstable_NormalPriority,jh=r.unstable_LowPriority,Lu=r.unstable_IdlePriority,Ao=null,En=null;function Bh(e){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(Ao,e,void 0,(e.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:Hh,Wh=Math.log,Uh=Math.LN2;function Hh(e){return e>>>=0,e===0?32:31-(Wh(e)/Uh|0)|0}var No=64,Do=4194304;function Ti(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lo(e,t){var i=e.pendingLanes;if(i===0)return 0;var s=0,c=e.suspendedLanes,d=e.pingedLanes,m=i&268435455;if(m!==0){var S=m&~c;S!==0?s=Ti(S):(d&=m,d!==0&&(s=Ti(d)))}else m=i&~c,m!==0?s=Ti(m):d!==0&&(s=Ti(d));if(s===0)return 0;if(t!==0&&t!==s&&(t&c)===0&&(c=s&-s,d=t&-t,c>=d||c===16&&(d&4194240)!==0))return t;if((s&4)!==0&&(s|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)i=31-fn(t),c=1<<i,s|=e[i],t&=~c;return s}function Vh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kh(e,t){for(var i=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes;0<d;){var m=31-fn(d),S=1<<m,T=c[m];T===-1?((S&i)===0||(S&s)!==0)&&(c[m]=Vh(S,t)):T<=t&&(e.expiredLanes|=S),d&=~S}}function $a(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fu(){var e=No;return No<<=1,(No&4194240)===0&&(No=64),e}function Oa(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Ri(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-fn(t),e[t]=i}function Gh(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<i;){var c=31-fn(i),d=1<<c;t[c]=0,s[c]=-1,e[c]=-1,i&=~d}}function Aa(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var s=31-fn(i),c=1<<s;c&t|e[s]&t&&(e[s]|=t),i&=~c}}var He=0;function ju(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Bu,Na,Wu,Uu,Hu,Da=!1,Fo=[],Vn=null,Kn=null,Gn=null,Pi=new Map,Mi=new Map,qn=[],qh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vu(e,t){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":Pi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mi.delete(t.pointerId)}}function zi(e,t,i,s,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:i,eventSystemFlags:s,nativeEvent:d,targetContainers:[c]},t!==null&&(t=Vi(t),t!==null&&Na(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function Yh(e,t,i,s,c){switch(t){case"focusin":return Vn=zi(Vn,e,t,i,s,c),!0;case"dragenter":return Kn=zi(Kn,e,t,i,s,c),!0;case"mouseover":return Gn=zi(Gn,e,t,i,s,c),!0;case"pointerover":var d=c.pointerId;return Pi.set(d,zi(Pi.get(d)||null,e,t,i,s,c)),!0;case"gotpointercapture":return d=c.pointerId,Mi.set(d,zi(Mi.get(d)||null,e,t,i,s,c)),!0}return!1}function Ku(e){var t=hr(e.target);if(t!==null){var i=mr(t);if(i!==null){if(t=i.tag,t===13){if(t=zu(i),t!==null){e.blockedOn=t,Hu(e.priority,function(){Wu(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Fa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var s=new i.constructor(i.type,i);Ia=s,i.target.dispatchEvent(s),Ia=null}else return t=Vi(i),t!==null&&Na(t),e.blockedOn=i,!1;t.shift()}return!0}function Gu(e,t,i){jo(e)&&i.delete(t)}function Xh(){Da=!1,Vn!==null&&jo(Vn)&&(Vn=null),Kn!==null&&jo(Kn)&&(Kn=null),Gn!==null&&jo(Gn)&&(Gn=null),Pi.forEach(Gu),Mi.forEach(Gu)}function _i(e,t){e.blockedOn===t&&(e.blockedOn=null,Da||(Da=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Xh)))}function $i(e){function t(c){return _i(c,e)}if(0<Fo.length){_i(Fo[0],e);for(var i=1;i<Fo.length;i++){var s=Fo[i];s.blockedOn===e&&(s.blockedOn=null)}}for(Vn!==null&&_i(Vn,e),Kn!==null&&_i(Kn,e),Gn!==null&&_i(Gn,e),Pi.forEach(t),Mi.forEach(t),i=0;i<qn.length;i++)s=qn[i],s.blockedOn===e&&(s.blockedOn=null);for(;0<qn.length&&(i=qn[0],i.blockedOn===null);)Ku(i),i.blockedOn===null&&qn.shift()}var Fr=z.ReactCurrentBatchConfig,Bo=!0;function Qh(e,t,i,s){var c=He,d=Fr.transition;Fr.transition=null;try{He=1,La(e,t,i,s)}finally{He=c,Fr.transition=d}}function Zh(e,t,i,s){var c=He,d=Fr.transition;Fr.transition=null;try{He=4,La(e,t,i,s)}finally{He=c,Fr.transition=d}}function La(e,t,i,s){if(Bo){var c=Fa(e,t,i,s);if(c===null)nl(e,t,s,Wo,i),Vu(e,s);else if(Yh(c,e,t,i,s))s.stopPropagation();else if(Vu(e,s),t&4&&-1<qh.indexOf(e)){for(;c!==null;){var d=Vi(c);if(d!==null&&Bu(d),d=Fa(e,t,i,s),d===null&&nl(e,t,s,Wo,i),d===c)break;c=d}c!==null&&s.stopPropagation()}else nl(e,t,s,null,i)}}var Wo=null;function Fa(e,t,i,s){if(Wo=null,e=Ta(s),e=hr(e),e!==null)if(t=mr(e),t===null)e=null;else if(i=t.tag,i===13){if(e=zu(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wo=e,null}function qu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fh()){case _a:return 1;case Du:return 4;case Oo:case jh:return 16;case Lu:return 536870912;default:return 16}default:return 16}}var Yn=null,ja=null,Uo=null;function Yu(){if(Uo)return Uo;var e,t=ja,i=t.length,s,c="value"in Yn?Yn.value:Yn.textContent,d=c.length;for(e=0;e<i&&t[e]===c[e];e++);var m=i-e;for(s=1;s<=m&&t[i-s]===c[d-s];s++);return Uo=c.slice(e,1<s?1-s:void 0)}function Ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vo(){return!0}function Xu(){return!1}function Kt(e){function t(i,s,c,d,m){this._reactName=i,this._targetInst=c,this.type=s,this.nativeEvent=d,this.target=m,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(i=e[S],this[S]=i?i(d):d[S]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Vo:Xu,this.isPropagationStopped=Xu,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),t}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ba=Kt(jr),Oi=J({},jr,{view:0,detail:0}),Jh=Kt(Oi),Wa,Ua,Ai,Ko=J({},Oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Va,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ai&&(Ai&&e.type==="mousemove"?(Wa=e.screenX-Ai.screenX,Ua=e.screenY-Ai.screenY):Ua=Wa=0,Ai=e),Wa)},movementY:function(e){return"movementY"in e?e.movementY:Ua}}),Qu=Kt(Ko),eg=J({},Ko,{dataTransfer:0}),tg=Kt(eg),ng=J({},Oi,{relatedTarget:0}),Ha=Kt(ng),rg=J({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),ig=Kt(rg),og=J({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sg=Kt(og),ag=J({},jr,{data:0}),Zu=Kt(ag),lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ug[e])?!!t[e]:!1}function Va(){return dg}var pg=J({},Oi,{key:function(e){if(e.key){var t=lg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Va,charCode:function(e){return e.type==="keypress"?Ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fg=Kt(pg),mg=J({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ju=Kt(mg),hg=J({},Oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Va}),gg=Kt(hg),vg=J({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),xg=Kt(vg),yg=J({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bg=Kt(yg),wg=[9,13,27,32],Ka=f&&"CompositionEvent"in window,Ni=null;f&&"documentMode"in document&&(Ni=document.documentMode);var Cg=f&&"TextEvent"in window&&!Ni,ed=f&&(!Ka||Ni&&8<Ni&&11>=Ni),td=" ",nd=!1;function rd(e,t){switch(e){case"keyup":return wg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function kg(e,t){switch(e){case"compositionend":return id(t);case"keypress":return t.which!==32?null:(nd=!0,td);case"textInput":return e=t.data,e===td&&nd?null:e;default:return null}}function Sg(e,t){if(Br)return e==="compositionend"||!Ka&&rd(e,t)?(e=Yu(),Uo=ja=Yn=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ed&&t.locale!=="ko"?null:t.data;default:return null}}var Eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Eg[e.type]:t==="textarea"}function sd(e,t,i,s){Iu(s),t=Qo(t,"onChange"),0<t.length&&(i=new Ba("onChange","change",null,i,s),e.push({event:i,listeners:t}))}var Di=null,Li=null;function Ig(e){Sd(e,0)}function Go(e){var t=Kr(e);if(ze(t))return e}function Tg(e,t){if(e==="change")return t}var ad=!1;if(f){var Ga;if(f){var qa="oninput"in document;if(!qa){var ld=document.createElement("div");ld.setAttribute("oninput","return;"),qa=typeof ld.oninput=="function"}Ga=qa}else Ga=!1;ad=Ga&&(!document.documentMode||9<document.documentMode)}function cd(){Di&&(Di.detachEvent("onpropertychange",ud),Li=Di=null)}function ud(e){if(e.propertyName==="value"&&Go(Li)){var t=[];sd(t,Li,e,Ta(e)),Mu(Ig,t)}}function Rg(e,t,i){e==="focusin"?(cd(),Di=t,Li=i,Di.attachEvent("onpropertychange",ud)):e==="focusout"&&cd()}function Pg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Go(Li)}function Mg(e,t){if(e==="click")return Go(t)}function zg(e,t){if(e==="input"||e==="change")return Go(t)}function _g(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mn=typeof Object.is=="function"?Object.is:_g;function Fi(e,t){if(mn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),s=Object.keys(t);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var c=i[s];if(!h.call(t,c)||!mn(e[c],t[c]))return!1}return!0}function dd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pd(e,t){var i=dd(e);e=0;for(var s;i;){if(i.nodeType===3){if(s=e+i.textContent.length,e<=t&&s>=t)return{node:i,offset:t-e};e=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=dd(i)}}function fd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function md(){for(var e=window,t=ye();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=ye(e.document)}return t}function Ya(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $g(e){var t=md(),i=e.focusedElem,s=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&fd(i.ownerDocument.documentElement,i)){if(s!==null&&Ya(i)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=i.textContent.length,d=Math.min(s.start,c);s=s.end===void 0?d:Math.min(s.end,c),!e.extend&&d>s&&(c=s,s=d,d=c),c=pd(i,d);var m=pd(i,s);c&&m&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),d>s?(e.addRange(t),e.extend(m.node,m.offset)):(t.setEnd(m.node,m.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Og=f&&"documentMode"in document&&11>=document.documentMode,Wr=null,Xa=null,ji=null,Qa=!1;function hd(e,t,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Qa||Wr==null||Wr!==ye(s)||(s=Wr,"selectionStart"in s&&Ya(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ji&&Fi(ji,s)||(ji=s,s=Qo(Xa,"onSelect"),0<s.length&&(t=new Ba("onSelect","select",null,t,i),e.push({event:t,listeners:s}),t.target=Wr)))}function qo(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Ur={animationend:qo("Animation","AnimationEnd"),animationiteration:qo("Animation","AnimationIteration"),animationstart:qo("Animation","AnimationStart"),transitionend:qo("Transition","TransitionEnd")},Za={},gd={};f&&(gd=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function Yo(e){if(Za[e])return Za[e];if(!Ur[e])return e;var t=Ur[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in gd)return Za[e]=t[i];return e}var vd=Yo("animationend"),xd=Yo("animationiteration"),yd=Yo("animationstart"),bd=Yo("transitionend"),wd=new Map,Cd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(e,t){wd.set(e,t),u(t,[e])}for(var Ja=0;Ja<Cd.length;Ja++){var el=Cd[Ja],Ag=el.toLowerCase(),Ng=el[0].toUpperCase()+el.slice(1);Xn(Ag,"on"+Ng)}Xn(vd,"onAnimationEnd"),Xn(xd,"onAnimationIteration"),Xn(yd,"onAnimationStart"),Xn("dblclick","onDoubleClick"),Xn("focusin","onFocus"),Xn("focusout","onBlur"),Xn(bd,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));function kd(e,t,i){var s=e.type||"unknown-event";e.currentTarget=i,Ah(s,t,void 0,e),e.currentTarget=null}function Sd(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var s=e[i],c=s.event;s=s.listeners;e:{var d=void 0;if(t)for(var m=s.length-1;0<=m;m--){var S=s[m],T=S.instance,W=S.currentTarget;if(S=S.listener,T!==d&&c.isPropagationStopped())break e;kd(c,S,W),d=T}else for(m=0;m<s.length;m++){if(S=s[m],T=S.instance,W=S.currentTarget,S=S.listener,T!==d&&c.isPropagationStopped())break e;kd(c,S,W),d=T}}}if($o)throw e=za,$o=!1,za=null,e}function Ye(e,t){var i=t[ll];i===void 0&&(i=t[ll]=new Set);var s=e+"__bubble";i.has(s)||(Ed(t,e,2,!1),i.add(s))}function tl(e,t,i){var s=0;t&&(s|=4),Ed(i,e,s,t)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function Wi(e){if(!e[Xo]){e[Xo]=!0,a.forEach(function(i){i!=="selectionchange"&&(Dg.has(i)||tl(i,!1,e),tl(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xo]||(t[Xo]=!0,tl("selectionchange",!1,t))}}function Ed(e,t,i,s){switch(qu(t)){case 1:var c=Qh;break;case 4:c=Zh;break;default:c=La}i=c.bind(null,t,i,e),c=void 0,!Ma||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(t,i,{capture:!0,passive:c}):e.addEventListener(t,i,!0):c!==void 0?e.addEventListener(t,i,{passive:c}):e.addEventListener(t,i,!1)}function nl(e,t,i,s,c){var d=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var m=s.tag;if(m===3||m===4){var S=s.stateNode.containerInfo;if(S===c||S.nodeType===8&&S.parentNode===c)break;if(m===4)for(m=s.return;m!==null;){var T=m.tag;if((T===3||T===4)&&(T=m.stateNode.containerInfo,T===c||T.nodeType===8&&T.parentNode===c))return;m=m.return}for(;S!==null;){if(m=hr(S),m===null)return;if(T=m.tag,T===5||T===6){s=d=m;continue e}S=S.parentNode}}s=s.return}Mu(function(){var W=d,q=Ta(i),X=[];e:{var K=wd.get(e);if(K!==void 0){var oe=Ba,ce=e;switch(e){case"keypress":if(Ho(i)===0)break e;case"keydown":case"keyup":oe=fg;break;case"focusin":ce="focus",oe=Ha;break;case"focusout":ce="blur",oe=Ha;break;case"beforeblur":case"afterblur":oe=Ha;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=gg;break;case vd:case xd:case yd:oe=ig;break;case bd:oe=xg;break;case"scroll":oe=Jh;break;case"wheel":oe=bg;break;case"copy":case"cut":case"paste":oe=sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=Ju}var ue=(t&4)!==0,st=!ue&&e==="scroll",D=ue?K!==null?K+"Capture":null:K;ue=[];for(var P=W,B;P!==null;){B=P;var re=B.stateNode;if(B.tag===5&&re!==null&&(B=re,D!==null&&(re=Si(P,D),re!=null&&ue.push(Ui(P,re,B)))),st)break;P=P.return}0<ue.length&&(K=new oe(K,ce,null,i,q),X.push({event:K,listeners:ue}))}}if((t&7)===0){e:{if(K=e==="mouseover"||e==="pointerover",oe=e==="mouseout"||e==="pointerout",K&&i!==Ia&&(ce=i.relatedTarget||i.fromElement)&&(hr(ce)||ce[On]))break e;if((oe||K)&&(K=q.window===q?q:(K=q.ownerDocument)?K.defaultView||K.parentWindow:window,oe?(ce=i.relatedTarget||i.toElement,oe=W,ce=ce?hr(ce):null,ce!==null&&(st=mr(ce),ce!==st||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(oe=null,ce=W),oe!==ce)){if(ue=Qu,re="onMouseLeave",D="onMouseEnter",P="mouse",(e==="pointerout"||e==="pointerover")&&(ue=Ju,re="onPointerLeave",D="onPointerEnter",P="pointer"),st=oe==null?K:Kr(oe),B=ce==null?K:Kr(ce),K=new ue(re,P+"leave",oe,i,q),K.target=st,K.relatedTarget=B,re=null,hr(q)===W&&(ue=new ue(D,P+"enter",ce,i,q),ue.target=B,ue.relatedTarget=st,re=ue),st=re,oe&&ce)t:{for(ue=oe,D=ce,P=0,B=ue;B;B=Hr(B))P++;for(B=0,re=D;re;re=Hr(re))B++;for(;0<P-B;)ue=Hr(ue),P--;for(;0<B-P;)D=Hr(D),B--;for(;P--;){if(ue===D||D!==null&&ue===D.alternate)break t;ue=Hr(ue),D=Hr(D)}ue=null}else ue=null;oe!==null&&Id(X,K,oe,ue,!1),ce!==null&&st!==null&&Id(X,st,ce,ue,!0)}}e:{if(K=W?Kr(W):window,oe=K.nodeName&&K.nodeName.toLowerCase(),oe==="select"||oe==="input"&&K.type==="file")var fe=Tg;else if(od(K))if(ad)fe=zg;else{fe=Pg;var we=Rg}else(oe=K.nodeName)&&oe.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(fe=Mg);if(fe&&(fe=fe(e,W))){sd(X,fe,i,q);break e}we&&we(e,K,W),e==="focusout"&&(we=K._wrapperState)&&we.controlled&&K.type==="number"&&zt(K,"number",K.value)}switch(we=W?Kr(W):window,e){case"focusin":(od(we)||we.contentEditable==="true")&&(Wr=we,Xa=W,ji=null);break;case"focusout":ji=Xa=Wr=null;break;case"mousedown":Qa=!0;break;case"contextmenu":case"mouseup":case"dragend":Qa=!1,hd(X,i,q);break;case"selectionchange":if(Og)break;case"keydown":case"keyup":hd(X,i,q)}var Ce;if(Ka)e:{switch(e){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Br?rd(e,i)&&(Ee="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Ee="onCompositionStart");Ee&&(ed&&i.locale!=="ko"&&(Br||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Br&&(Ce=Yu()):(Yn=q,ja="value"in Yn?Yn.value:Yn.textContent,Br=!0)),we=Qo(W,Ee),0<we.length&&(Ee=new Zu(Ee,e,null,i,q),X.push({event:Ee,listeners:we}),Ce?Ee.data=Ce:(Ce=id(i),Ce!==null&&(Ee.data=Ce)))),(Ce=Cg?kg(e,i):Sg(e,i))&&(W=Qo(W,"onBeforeInput"),0<W.length&&(q=new Zu("onBeforeInput","beforeinput",null,i,q),X.push({event:q,listeners:W}),q.data=Ce))}Sd(X,t)})}function Ui(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Qo(e,t){for(var i=t+"Capture",s=[];e!==null;){var c=e,d=c.stateNode;c.tag===5&&d!==null&&(c=d,d=Si(e,i),d!=null&&s.unshift(Ui(e,d,c)),d=Si(e,t),d!=null&&s.push(Ui(e,d,c))),e=e.return}return s}function Hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Id(e,t,i,s,c){for(var d=t._reactName,m=[];i!==null&&i!==s;){var S=i,T=S.alternate,W=S.stateNode;if(T!==null&&T===s)break;S.tag===5&&W!==null&&(S=W,c?(T=Si(i,d),T!=null&&m.unshift(Ui(i,T,S))):c||(T=Si(i,d),T!=null&&m.push(Ui(i,T,S)))),i=i.return}m.length!==0&&e.push({event:t,listeners:m})}var Lg=/\r\n?/g,Fg=/\u0000|\uFFFD/g;function Td(e){return(typeof e=="string"?e:""+e).replace(Lg,`
`).replace(Fg,"")}function Zo(e,t,i){if(t=Td(t),Td(e)!==t&&i)throw Error(o(425))}function Jo(){}var rl=null,il=null;function ol(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sl=typeof setTimeout=="function"?setTimeout:void 0,jg=typeof clearTimeout=="function"?clearTimeout:void 0,Rd=typeof Promise=="function"?Promise:void 0,Bg=typeof queueMicrotask=="function"?queueMicrotask:typeof Rd<"u"?function(e){return Rd.resolve(null).then(e).catch(Wg)}:sl;function Wg(e){setTimeout(function(){throw e})}function al(e,t){var i=t,s=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(s===0){e.removeChild(c),$i(t);return}s--}else i!=="$"&&i!=="$?"&&i!=="$!"||s++;i=c}while(i);$i(t)}function Qn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),In="__reactFiber$"+Vr,Hi="__reactProps$"+Vr,On="__reactContainer$"+Vr,ll="__reactEvents$"+Vr,Ug="__reactListeners$"+Vr,Hg="__reactHandles$"+Vr;function hr(e){var t=e[In];if(t)return t;for(var i=e.parentNode;i;){if(t=i[On]||i[In]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Pd(e);e!==null;){if(i=e[In])return i;e=Pd(e)}return t}e=i,i=e.parentNode}return null}function Vi(e){return e=e[In]||e[On],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function es(e){return e[Hi]||null}var cl=[],Gr=-1;function Zn(e){return{current:e}}function Xe(e){0>Gr||(e.current=cl[Gr],cl[Gr]=null,Gr--)}function qe(e,t){Gr++,cl[Gr]=e.current,e.current=t}var Jn={},Et=Zn(Jn),At=Zn(!1),gr=Jn;function qr(e,t){var i=e.type.contextTypes;if(!i)return Jn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var c={},d;for(d in i)c[d]=t[d];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function Nt(e){return e=e.childContextTypes,e!=null}function ts(){Xe(At),Xe(Et)}function Md(e,t,i){if(Et.current!==Jn)throw Error(o(168));qe(Et,t),qe(At,i)}function zd(e,t,i){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return i;s=s.getChildContext();for(var c in s)if(!(c in t))throw Error(o(108,Se(e)||"Unknown",c));return J({},i,s)}function ns(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jn,gr=Et.current,qe(Et,e),qe(At,At.current),!0}function _d(e,t,i){var s=e.stateNode;if(!s)throw Error(o(169));i?(e=zd(e,t,gr),s.__reactInternalMemoizedMergedChildContext=e,Xe(At),Xe(Et),qe(Et,e)):Xe(At),qe(At,i)}var An=null,rs=!1,ul=!1;function $d(e){An===null?An=[e]:An.push(e)}function Vg(e){rs=!0,$d(e)}function er(){if(!ul&&An!==null){ul=!0;var e=0,t=He;try{var i=An;for(He=1;e<i.length;e++){var s=i[e];do s=s(!0);while(s!==null)}An=null,rs=!1}catch(c){throw An!==null&&(An=An.slice(e+1)),Au(_a,er),c}finally{He=t,ul=!1}}return null}var Yr=[],Xr=0,is=null,os=0,en=[],tn=0,vr=null,Nn=1,Dn="";function xr(e,t){Yr[Xr++]=os,Yr[Xr++]=is,is=e,os=t}function Od(e,t,i){en[tn++]=Nn,en[tn++]=Dn,en[tn++]=vr,vr=e;var s=Nn;e=Dn;var c=32-fn(s)-1;s&=~(1<<c),i+=1;var d=32-fn(t)+c;if(30<d){var m=c-c%5;d=(s&(1<<m)-1).toString(32),s>>=m,c-=m,Nn=1<<32-fn(t)+c|i<<c|s,Dn=d+e}else Nn=1<<d|i<<c|s,Dn=e}function dl(e){e.return!==null&&(xr(e,1),Od(e,1,0))}function pl(e){for(;e===is;)is=Yr[--Xr],Yr[Xr]=null,os=Yr[--Xr],Yr[Xr]=null;for(;e===vr;)vr=en[--tn],en[tn]=null,Dn=en[--tn],en[tn]=null,Nn=en[--tn],en[tn]=null}var Gt=null,qt=null,Qe=!1,hn=null;function Ad(e,t){var i=sn(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function Nd(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Gt=e,qt=Qn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Gt=e,qt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=vr!==null?{id:Nn,overflow:Dn}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=sn(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,Gt=e,qt=null,!0):!1;default:return!1}}function fl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ml(e){if(Qe){var t=qt;if(t){var i=t;if(!Nd(e,t)){if(fl(e))throw Error(o(418));t=Qn(i.nextSibling);var s=Gt;t&&Nd(e,t)?Ad(s,i):(e.flags=e.flags&-4097|2,Qe=!1,Gt=e)}}else{if(fl(e))throw Error(o(418));e.flags=e.flags&-4097|2,Qe=!1,Gt=e}}}function Dd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Gt=e}function ss(e){if(e!==Gt)return!1;if(!Qe)return Dd(e),Qe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ol(e.type,e.memoizedProps)),t&&(t=qt)){if(fl(e))throw Ld(),Error(o(418));for(;t;)Ad(e,t),t=Qn(t.nextSibling)}if(Dd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){qt=Qn(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}qt=null}}else qt=Gt?Qn(e.stateNode.nextSibling):null;return!0}function Ld(){for(var e=qt;e;)e=Qn(e.nextSibling)}function Qr(){qt=Gt=null,Qe=!1}function hl(e){hn===null?hn=[e]:hn.push(e)}var Kg=z.ReactCurrentBatchConfig;function Ki(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var s=i.stateNode}if(!s)throw Error(o(147,e));var c=s,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(m){var S=c.refs;m===null?delete S[d]:S[d]=m},t._stringRef=d,t)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function as(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fd(e){var t=e._init;return t(e._payload)}function jd(e){function t(D,P){if(e){var B=D.deletions;B===null?(D.deletions=[P],D.flags|=16):B.push(P)}}function i(D,P){if(!e)return null;for(;P!==null;)t(D,P),P=P.sibling;return null}function s(D,P){for(D=new Map;P!==null;)P.key!==null?D.set(P.key,P):D.set(P.index,P),P=P.sibling;return D}function c(D,P){return D=lr(D,P),D.index=0,D.sibling=null,D}function d(D,P,B){return D.index=B,e?(B=D.alternate,B!==null?(B=B.index,B<P?(D.flags|=2,P):B):(D.flags|=2,P)):(D.flags|=1048576,P)}function m(D){return e&&D.alternate===null&&(D.flags|=2),D}function S(D,P,B,re){return P===null||P.tag!==6?(P=sc(B,D.mode,re),P.return=D,P):(P=c(P,B),P.return=D,P)}function T(D,P,B,re){var fe=B.type;return fe===w?q(D,P,B.props.children,re,B.key):P!==null&&(P.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===ie&&Fd(fe)===P.type)?(re=c(P,B.props),re.ref=Ki(D,P,B),re.return=D,re):(re=zs(B.type,B.key,B.props,null,D.mode,re),re.ref=Ki(D,P,B),re.return=D,re)}function W(D,P,B,re){return P===null||P.tag!==4||P.stateNode.containerInfo!==B.containerInfo||P.stateNode.implementation!==B.implementation?(P=ac(B,D.mode,re),P.return=D,P):(P=c(P,B.children||[]),P.return=D,P)}function q(D,P,B,re,fe){return P===null||P.tag!==7?(P=Ir(B,D.mode,re,fe),P.return=D,P):(P=c(P,B),P.return=D,P)}function X(D,P,B){if(typeof P=="string"&&P!==""||typeof P=="number")return P=sc(""+P,D.mode,B),P.return=D,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case I:return B=zs(P.type,P.key,P.props,null,D.mode,B),B.ref=Ki(D,null,P),B.return=D,B;case F:return P=ac(P,D.mode,B),P.return=D,P;case ie:var re=P._init;return X(D,re(P._payload),B)}if(gt(P)||Z(P))return P=Ir(P,D.mode,B,null),P.return=D,P;as(D,P)}return null}function K(D,P,B,re){var fe=P!==null?P.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return fe!==null?null:S(D,P,""+B,re);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case I:return B.key===fe?T(D,P,B,re):null;case F:return B.key===fe?W(D,P,B,re):null;case ie:return fe=B._init,K(D,P,fe(B._payload),re)}if(gt(B)||Z(B))return fe!==null?null:q(D,P,B,re,null);as(D,B)}return null}function oe(D,P,B,re,fe){if(typeof re=="string"&&re!==""||typeof re=="number")return D=D.get(B)||null,S(P,D,""+re,fe);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case I:return D=D.get(re.key===null?B:re.key)||null,T(P,D,re,fe);case F:return D=D.get(re.key===null?B:re.key)||null,W(P,D,re,fe);case ie:var we=re._init;return oe(D,P,B,we(re._payload),fe)}if(gt(re)||Z(re))return D=D.get(B)||null,q(P,D,re,fe,null);as(P,re)}return null}function ce(D,P,B,re){for(var fe=null,we=null,Ce=P,Ee=P=0,yt=null;Ce!==null&&Ee<B.length;Ee++){Ce.index>Ee?(yt=Ce,Ce=null):yt=Ce.sibling;var De=K(D,Ce,B[Ee],re);if(De===null){Ce===null&&(Ce=yt);break}e&&Ce&&De.alternate===null&&t(D,Ce),P=d(De,P,Ee),we===null?fe=De:we.sibling=De,we=De,Ce=yt}if(Ee===B.length)return i(D,Ce),Qe&&xr(D,Ee),fe;if(Ce===null){for(;Ee<B.length;Ee++)Ce=X(D,B[Ee],re),Ce!==null&&(P=d(Ce,P,Ee),we===null?fe=Ce:we.sibling=Ce,we=Ce);return Qe&&xr(D,Ee),fe}for(Ce=s(D,Ce);Ee<B.length;Ee++)yt=oe(Ce,D,Ee,B[Ee],re),yt!==null&&(e&&yt.alternate!==null&&Ce.delete(yt.key===null?Ee:yt.key),P=d(yt,P,Ee),we===null?fe=yt:we.sibling=yt,we=yt);return e&&Ce.forEach(function(cr){return t(D,cr)}),Qe&&xr(D,Ee),fe}function ue(D,P,B,re){var fe=Z(B);if(typeof fe!="function")throw Error(o(150));if(B=fe.call(B),B==null)throw Error(o(151));for(var we=fe=null,Ce=P,Ee=P=0,yt=null,De=B.next();Ce!==null&&!De.done;Ee++,De=B.next()){Ce.index>Ee?(yt=Ce,Ce=null):yt=Ce.sibling;var cr=K(D,Ce,De.value,re);if(cr===null){Ce===null&&(Ce=yt);break}e&&Ce&&cr.alternate===null&&t(D,Ce),P=d(cr,P,Ee),we===null?fe=cr:we.sibling=cr,we=cr,Ce=yt}if(De.done)return i(D,Ce),Qe&&xr(D,Ee),fe;if(Ce===null){for(;!De.done;Ee++,De=B.next())De=X(D,De.value,re),De!==null&&(P=d(De,P,Ee),we===null?fe=De:we.sibling=De,we=De);return Qe&&xr(D,Ee),fe}for(Ce=s(D,Ce);!De.done;Ee++,De=B.next())De=oe(Ce,D,Ee,De.value,re),De!==null&&(e&&De.alternate!==null&&Ce.delete(De.key===null?Ee:De.key),P=d(De,P,Ee),we===null?fe=De:we.sibling=De,we=De);return e&&Ce.forEach(function(E0){return t(D,E0)}),Qe&&xr(D,Ee),fe}function st(D,P,B,re){if(typeof B=="object"&&B!==null&&B.type===w&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case I:e:{for(var fe=B.key,we=P;we!==null;){if(we.key===fe){if(fe=B.type,fe===w){if(we.tag===7){i(D,we.sibling),P=c(we,B.props.children),P.return=D,D=P;break e}}else if(we.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===ie&&Fd(fe)===we.type){i(D,we.sibling),P=c(we,B.props),P.ref=Ki(D,we,B),P.return=D,D=P;break e}i(D,we);break}else t(D,we);we=we.sibling}B.type===w?(P=Ir(B.props.children,D.mode,re,B.key),P.return=D,D=P):(re=zs(B.type,B.key,B.props,null,D.mode,re),re.ref=Ki(D,P,B),re.return=D,D=re)}return m(D);case F:e:{for(we=B.key;P!==null;){if(P.key===we)if(P.tag===4&&P.stateNode.containerInfo===B.containerInfo&&P.stateNode.implementation===B.implementation){i(D,P.sibling),P=c(P,B.children||[]),P.return=D,D=P;break e}else{i(D,P);break}else t(D,P);P=P.sibling}P=ac(B,D.mode,re),P.return=D,D=P}return m(D);case ie:return we=B._init,st(D,P,we(B._payload),re)}if(gt(B))return ce(D,P,B,re);if(Z(B))return ue(D,P,B,re);as(D,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,P!==null&&P.tag===6?(i(D,P.sibling),P=c(P,B),P.return=D,D=P):(i(D,P),P=sc(B,D.mode,re),P.return=D,D=P),m(D)):i(D,P)}return st}var Zr=jd(!0),Bd=jd(!1),ls=Zn(null),cs=null,Jr=null,gl=null;function vl(){gl=Jr=cs=null}function xl(e){var t=ls.current;Xe(ls),e._currentValue=t}function yl(e,t,i){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===i)break;e=e.return}}function ei(e,t){cs=e,gl=Jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Dt=!0),e.firstContext=null)}function nn(e){var t=e._currentValue;if(gl!==e)if(e={context:e,memoizedValue:t,next:null},Jr===null){if(cs===null)throw Error(o(308));Jr=e,cs.dependencies={lanes:0,firstContext:e}}else Jr=Jr.next=e;return t}var yr=null;function bl(e){yr===null?yr=[e]:yr.push(e)}function Wd(e,t,i,s){var c=t.interleaved;return c===null?(i.next=i,bl(t)):(i.next=c.next,c.next=i),t.interleaved=i,Ln(e,s)}function Ln(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var tr=!1;function wl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ud(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nr(e,t,i){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Oe&2)!==0){var c=s.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),s.pending=t,Ln(e,i)}return c=s.interleaved,c===null?(t.next=t,bl(s)):(t.next=c.next,c.next=t),s.interleaved=t,Ln(e,i)}function us(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,Aa(e,i)}}function Hd(e,t){var i=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var c=null,d=null;if(i=i.firstBaseUpdate,i!==null){do{var m={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};d===null?c=d=m:d=d.next=m,i=i.next}while(i!==null);d===null?c=d=t:d=d.next=t}else c=d=t;i={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:s.shared,effects:s.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function ds(e,t,i,s){var c=e.updateQueue;tr=!1;var d=c.firstBaseUpdate,m=c.lastBaseUpdate,S=c.shared.pending;if(S!==null){c.shared.pending=null;var T=S,W=T.next;T.next=null,m===null?d=W:m.next=W,m=T;var q=e.alternate;q!==null&&(q=q.updateQueue,S=q.lastBaseUpdate,S!==m&&(S===null?q.firstBaseUpdate=W:S.next=W,q.lastBaseUpdate=T))}if(d!==null){var X=c.baseState;m=0,q=W=T=null,S=d;do{var K=S.lane,oe=S.eventTime;if((s&K)===K){q!==null&&(q=q.next={eventTime:oe,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ce=e,ue=S;switch(K=t,oe=i,ue.tag){case 1:if(ce=ue.payload,typeof ce=="function"){X=ce.call(oe,X,K);break e}X=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=ue.payload,K=typeof ce=="function"?ce.call(oe,X,K):ce,K==null)break e;X=J({},X,K);break e;case 2:tr=!0}}S.callback!==null&&S.lane!==0&&(e.flags|=64,K=c.effects,K===null?c.effects=[S]:K.push(S))}else oe={eventTime:oe,lane:K,tag:S.tag,payload:S.payload,callback:S.callback,next:null},q===null?(W=q=oe,T=X):q=q.next=oe,m|=K;if(S=S.next,S===null){if(S=c.shared.pending,S===null)break;K=S,S=K.next,K.next=null,c.lastBaseUpdate=K,c.shared.pending=null}}while(!0);if(q===null&&(T=X),c.baseState=T,c.firstBaseUpdate=W,c.lastBaseUpdate=q,t=c.shared.interleaved,t!==null){c=t;do m|=c.lane,c=c.next;while(c!==t)}else d===null&&(c.shared.lanes=0);Cr|=m,e.lanes=m,e.memoizedState=X}}function Vd(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],c=s.callback;if(c!==null){if(s.callback=null,s=i,typeof c!="function")throw Error(o(191,c));c.call(s)}}}var Gi={},Tn=Zn(Gi),qi=Zn(Gi),Yi=Zn(Gi);function br(e){if(e===Gi)throw Error(o(174));return e}function Cl(e,t){switch(qe(Yi,t),qe(qi,e),qe(Tn,Gi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vt(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vt(t,e)}Xe(Tn),qe(Tn,t)}function ti(){Xe(Tn),Xe(qi),Xe(Yi)}function Kd(e){br(Yi.current);var t=br(Tn.current),i=Vt(t,e.type);t!==i&&(qe(qi,e),qe(Tn,i))}function kl(e){qi.current===e&&(Xe(Tn),Xe(qi))}var Je=Zn(0);function ps(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sl=[];function El(){for(var e=0;e<Sl.length;e++)Sl[e]._workInProgressVersionPrimary=null;Sl.length=0}var fs=z.ReactCurrentDispatcher,Il=z.ReactCurrentBatchConfig,wr=0,et=null,pt=null,vt=null,ms=!1,Xi=!1,Qi=0,Gg=0;function It(){throw Error(o(321))}function Tl(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!mn(e[i],t[i]))return!1;return!0}function Rl(e,t,i,s,c,d){if(wr=d,et=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fs.current=e===null||e.memoizedState===null?Qg:Zg,e=i(s,c),Xi){d=0;do{if(Xi=!1,Qi=0,25<=d)throw Error(o(301));d+=1,vt=pt=null,t.updateQueue=null,fs.current=Jg,e=i(s,c)}while(Xi)}if(fs.current=vs,t=pt!==null&&pt.next!==null,wr=0,vt=pt=et=null,ms=!1,t)throw Error(o(300));return e}function Pl(){var e=Qi!==0;return Qi=0,e}function Rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?et.memoizedState=vt=e:vt=vt.next=e,vt}function rn(){if(pt===null){var e=et.alternate;e=e!==null?e.memoizedState:null}else e=pt.next;var t=vt===null?et.memoizedState:vt.next;if(t!==null)vt=t,pt=e;else{if(e===null)throw Error(o(310));pt=e,e={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},vt===null?et.memoizedState=vt=e:vt=vt.next=e}return vt}function Zi(e,t){return typeof t=="function"?t(e):t}function Ml(e){var t=rn(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var s=pt,c=s.baseQueue,d=i.pending;if(d!==null){if(c!==null){var m=c.next;c.next=d.next,d.next=m}s.baseQueue=c=d,i.pending=null}if(c!==null){d=c.next,s=s.baseState;var S=m=null,T=null,W=d;do{var q=W.lane;if((wr&q)===q)T!==null&&(T=T.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),s=W.hasEagerState?W.eagerState:e(s,W.action);else{var X={lane:q,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};T===null?(S=T=X,m=s):T=T.next=X,et.lanes|=q,Cr|=q}W=W.next}while(W!==null&&W!==d);T===null?m=s:T.next=S,mn(s,t.memoizedState)||(Dt=!0),t.memoizedState=s,t.baseState=m,t.baseQueue=T,i.lastRenderedState=s}if(e=i.interleaved,e!==null){c=e;do d=c.lane,et.lanes|=d,Cr|=d,c=c.next;while(c!==e)}else c===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function zl(e){var t=rn(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var s=i.dispatch,c=i.pending,d=t.memoizedState;if(c!==null){i.pending=null;var m=c=c.next;do d=e(d,m.action),m=m.next;while(m!==c);mn(d,t.memoizedState)||(Dt=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),i.lastRenderedState=d}return[d,s]}function Gd(){}function qd(e,t){var i=et,s=rn(),c=t(),d=!mn(s.memoizedState,c);if(d&&(s.memoizedState=c,Dt=!0),s=s.queue,_l(Qd.bind(null,i,s,e),[e]),s.getSnapshot!==t||d||vt!==null&&vt.memoizedState.tag&1){if(i.flags|=2048,Ji(9,Xd.bind(null,i,s,c,t),void 0,null),xt===null)throw Error(o(349));(wr&30)!==0||Yd(i,t,c)}return c}function Yd(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=et.updateQueue,t===null?(t={lastEffect:null,stores:null},et.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function Xd(e,t,i,s){t.value=i,t.getSnapshot=s,Zd(t)&&Jd(e)}function Qd(e,t,i){return i(function(){Zd(t)&&Jd(e)})}function Zd(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!mn(e,i)}catch{return!0}}function Jd(e){var t=Ln(e,1);t!==null&&yn(t,e,1,-1)}function ep(e){var t=Rn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e},t.queue=e,e=e.dispatch=Xg.bind(null,et,e),[t.memoizedState,e]}function Ji(e,t,i,s){return e={tag:e,create:t,destroy:i,deps:s,next:null},t=et.updateQueue,t===null?(t={lastEffect:null,stores:null},et.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(s=i.next,i.next=e,e.next=s,t.lastEffect=e)),e}function tp(){return rn().memoizedState}function hs(e,t,i,s){var c=Rn();et.flags|=e,c.memoizedState=Ji(1|t,i,void 0,s===void 0?null:s)}function gs(e,t,i,s){var c=rn();s=s===void 0?null:s;var d=void 0;if(pt!==null){var m=pt.memoizedState;if(d=m.destroy,s!==null&&Tl(s,m.deps)){c.memoizedState=Ji(t,i,d,s);return}}et.flags|=e,c.memoizedState=Ji(1|t,i,d,s)}function np(e,t){return hs(8390656,8,e,t)}function _l(e,t){return gs(2048,8,e,t)}function rp(e,t){return gs(4,2,e,t)}function ip(e,t){return gs(4,4,e,t)}function op(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sp(e,t,i){return i=i!=null?i.concat([e]):null,gs(4,4,op.bind(null,t,e),i)}function $l(){}function ap(e,t){var i=rn();t=t===void 0?null:t;var s=i.memoizedState;return s!==null&&t!==null&&Tl(t,s[1])?s[0]:(i.memoizedState=[e,t],e)}function lp(e,t){var i=rn();t=t===void 0?null:t;var s=i.memoizedState;return s!==null&&t!==null&&Tl(t,s[1])?s[0]:(e=e(),i.memoizedState=[e,t],e)}function cp(e,t,i){return(wr&21)===0?(e.baseState&&(e.baseState=!1,Dt=!0),e.memoizedState=i):(mn(i,t)||(i=Fu(),et.lanes|=i,Cr|=i,e.baseState=!0),t)}function qg(e,t){var i=He;He=i!==0&&4>i?i:4,e(!0);var s=Il.transition;Il.transition={};try{e(!1),t()}finally{He=i,Il.transition=s}}function up(){return rn().memoizedState}function Yg(e,t,i){var s=sr(e);if(i={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null},dp(e))pp(t,i);else if(i=Wd(e,t,i,s),i!==null){var c=Ot();yn(i,e,s,c),fp(i,t,s)}}function Xg(e,t,i){var s=sr(e),c={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null};if(dp(e))pp(t,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var m=t.lastRenderedState,S=d(m,i);if(c.hasEagerState=!0,c.eagerState=S,mn(S,m)){var T=t.interleaved;T===null?(c.next=c,bl(t)):(c.next=T.next,T.next=c),t.interleaved=c;return}}catch{}finally{}i=Wd(e,t,c,s),i!==null&&(c=Ot(),yn(i,e,s,c),fp(i,t,s))}}function dp(e){var t=e.alternate;return e===et||t!==null&&t===et}function pp(e,t){Xi=ms=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function fp(e,t,i){if((i&4194240)!==0){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,Aa(e,i)}}var vs={readContext:nn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},Qg={readContext:nn,useCallback:function(e,t){return Rn().memoizedState=[e,t===void 0?null:t],e},useContext:nn,useEffect:np,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,hs(4194308,4,op.bind(null,t,e),i)},useLayoutEffect:function(e,t){return hs(4194308,4,e,t)},useInsertionEffect:function(e,t){return hs(4,2,e,t)},useMemo:function(e,t){var i=Rn();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var s=Rn();return t=i!==void 0?i(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Yg.bind(null,et,e),[s.memoizedState,e]},useRef:function(e){var t=Rn();return e={current:e},t.memoizedState=e},useState:ep,useDebugValue:$l,useDeferredValue:function(e){return Rn().memoizedState=e},useTransition:function(){var e=ep(!1),t=e[0];return e=qg.bind(null,e[1]),Rn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var s=et,c=Rn();if(Qe){if(i===void 0)throw Error(o(407));i=i()}else{if(i=t(),xt===null)throw Error(o(349));(wr&30)!==0||Yd(s,t,i)}c.memoizedState=i;var d={value:i,getSnapshot:t};return c.queue=d,np(Qd.bind(null,s,d,e),[e]),s.flags|=2048,Ji(9,Xd.bind(null,s,d,i,t),void 0,null),i},useId:function(){var e=Rn(),t=xt.identifierPrefix;if(Qe){var i=Dn,s=Nn;i=(s&~(1<<32-fn(s)-1)).toString(32)+i,t=":"+t+"R"+i,i=Qi++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=Gg++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zg={readContext:nn,useCallback:ap,useContext:nn,useEffect:_l,useImperativeHandle:sp,useInsertionEffect:rp,useLayoutEffect:ip,useMemo:lp,useReducer:Ml,useRef:tp,useState:function(){return Ml(Zi)},useDebugValue:$l,useDeferredValue:function(e){var t=rn();return cp(t,pt.memoizedState,e)},useTransition:function(){var e=Ml(Zi)[0],t=rn().memoizedState;return[e,t]},useMutableSource:Gd,useSyncExternalStore:qd,useId:up,unstable_isNewReconciler:!1},Jg={readContext:nn,useCallback:ap,useContext:nn,useEffect:_l,useImperativeHandle:sp,useInsertionEffect:rp,useLayoutEffect:ip,useMemo:lp,useReducer:zl,useRef:tp,useState:function(){return zl(Zi)},useDebugValue:$l,useDeferredValue:function(e){var t=rn();return pt===null?t.memoizedState=e:cp(t,pt.memoizedState,e)},useTransition:function(){var e=zl(Zi)[0],t=rn().memoizedState;return[e,t]},useMutableSource:Gd,useSyncExternalStore:qd,useId:up,unstable_isNewReconciler:!1};function gn(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function Ol(e,t,i,s){t=e.memoizedState,i=i(s,t),i=i==null?t:J({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var xs={isMounted:function(e){return(e=e._reactInternals)?mr(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var s=Ot(),c=sr(e),d=Fn(s,c);d.payload=t,i!=null&&(d.callback=i),t=nr(e,d,c),t!==null&&(yn(t,e,c,s),us(t,e,c))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var s=Ot(),c=sr(e),d=Fn(s,c);d.tag=1,d.payload=t,i!=null&&(d.callback=i),t=nr(e,d,c),t!==null&&(yn(t,e,c,s),us(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Ot(),s=sr(e),c=Fn(i,s);c.tag=2,t!=null&&(c.callback=t),t=nr(e,c,s),t!==null&&(yn(t,e,s,i),us(t,e,s))}};function mp(e,t,i,s,c,d,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,d,m):t.prototype&&t.prototype.isPureReactComponent?!Fi(i,s)||!Fi(c,d):!0}function hp(e,t,i){var s=!1,c=Jn,d=t.contextType;return typeof d=="object"&&d!==null?d=nn(d):(c=Nt(t)?gr:Et.current,s=t.contextTypes,d=(s=s!=null)?qr(e,c):Jn),t=new t(i,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xs,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=d),t}function gp(e,t,i,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,s),t.state!==e&&xs.enqueueReplaceState(t,t.state,null)}function Al(e,t,i,s){var c=e.stateNode;c.props=i,c.state=e.memoizedState,c.refs={},wl(e);var d=t.contextType;typeof d=="object"&&d!==null?c.context=nn(d):(d=Nt(t)?gr:Et.current,c.context=qr(e,d)),c.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(Ol(e,t,d,i),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&xs.enqueueReplaceState(c,c.state,null),ds(e,i,c,s),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function ni(e,t){try{var i="",s=t;do i+=he(s),s=s.return;while(s);var c=i}catch(d){c=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:c,digest:null}}function Nl(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function Dl(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var e0=typeof WeakMap=="function"?WeakMap:Map;function vp(e,t,i){i=Fn(-1,i),i.tag=3,i.payload={element:null};var s=t.value;return i.callback=function(){Es||(Es=!0,Zl=s),Dl(e,t)},i}function xp(e,t,i){i=Fn(-1,i),i.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var c=t.value;i.payload=function(){return s(c)},i.callback=function(){Dl(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(i.callback=function(){Dl(e,t),typeof s!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var m=t.stack;this.componentDidCatch(t.value,{componentStack:m!==null?m:""})}),i}function yp(e,t,i){var s=e.pingCache;if(s===null){s=e.pingCache=new e0;var c=new Set;s.set(t,c)}else c=s.get(t),c===void 0&&(c=new Set,s.set(t,c));c.has(i)||(c.add(i),e=m0.bind(null,e,t,i),t.then(e,e))}function bp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wp(e,t,i,s,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=Fn(-1,1),t.tag=2,nr(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var t0=z.ReactCurrentOwner,Dt=!1;function $t(e,t,i,s){t.child=e===null?Bd(t,null,i,s):Zr(t,e.child,i,s)}function Cp(e,t,i,s,c){i=i.render;var d=t.ref;return ei(t,c),s=Rl(e,t,i,s,d,c),i=Pl(),e!==null&&!Dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,jn(e,t,c)):(Qe&&i&&dl(t),t.flags|=1,$t(e,t,s,c),t.child)}function kp(e,t,i,s,c){if(e===null){var d=i.type;return typeof d=="function"&&!oc(d)&&d.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=d,Sp(e,t,d,s,c)):(e=zs(i.type,null,s,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,(e.lanes&c)===0){var m=d.memoizedProps;if(i=i.compare,i=i!==null?i:Fi,i(m,s)&&e.ref===t.ref)return jn(e,t,c)}return t.flags|=1,e=lr(d,s),e.ref=t.ref,e.return=t,t.child=e}function Sp(e,t,i,s,c){if(e!==null){var d=e.memoizedProps;if(Fi(d,s)&&e.ref===t.ref)if(Dt=!1,t.pendingProps=s=d,(e.lanes&c)!==0)(e.flags&131072)!==0&&(Dt=!0);else return t.lanes=e.lanes,jn(e,t,c)}return Ll(e,t,i,s,c)}function Ep(e,t,i){var s=t.pendingProps,c=s.children,d=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(ii,Yt),Yt|=i;else{if((i&1073741824)===0)return e=d!==null?d.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,qe(ii,Yt),Yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=d!==null?d.baseLanes:i,qe(ii,Yt),Yt|=s}else d!==null?(s=d.baseLanes|i,t.memoizedState=null):s=i,qe(ii,Yt),Yt|=s;return $t(e,t,c,i),t.child}function Ip(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function Ll(e,t,i,s,c){var d=Nt(i)?gr:Et.current;return d=qr(t,d),ei(t,c),i=Rl(e,t,i,s,d,c),s=Pl(),e!==null&&!Dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,jn(e,t,c)):(Qe&&s&&dl(t),t.flags|=1,$t(e,t,i,c),t.child)}function Tp(e,t,i,s,c){if(Nt(i)){var d=!0;ns(t)}else d=!1;if(ei(t,c),t.stateNode===null)bs(e,t),hp(t,i,s),Al(t,i,s,c),s=!0;else if(e===null){var m=t.stateNode,S=t.memoizedProps;m.props=S;var T=m.context,W=i.contextType;typeof W=="object"&&W!==null?W=nn(W):(W=Nt(i)?gr:Et.current,W=qr(t,W));var q=i.getDerivedStateFromProps,X=typeof q=="function"||typeof m.getSnapshotBeforeUpdate=="function";X||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==s||T!==W)&&gp(t,m,s,W),tr=!1;var K=t.memoizedState;m.state=K,ds(t,s,m,c),T=t.memoizedState,S!==s||K!==T||At.current||tr?(typeof q=="function"&&(Ol(t,i,q,s),T=t.memoizedState),(S=tr||mp(t,i,S,s,K,T,W))?(X||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(t.flags|=4194308)):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=T),m.props=s,m.state=T,m.context=W,s=S):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{m=t.stateNode,Ud(e,t),S=t.memoizedProps,W=t.type===t.elementType?S:gn(t.type,S),m.props=W,X=t.pendingProps,K=m.context,T=i.contextType,typeof T=="object"&&T!==null?T=nn(T):(T=Nt(i)?gr:Et.current,T=qr(t,T));var oe=i.getDerivedStateFromProps;(q=typeof oe=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==X||K!==T)&&gp(t,m,s,T),tr=!1,K=t.memoizedState,m.state=K,ds(t,s,m,c);var ce=t.memoizedState;S!==X||K!==ce||At.current||tr?(typeof oe=="function"&&(Ol(t,i,oe,s),ce=t.memoizedState),(W=tr||mp(t,i,W,s,K,ce,T)||!1)?(q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(s,ce,T),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(s,ce,T)),typeof m.componentDidUpdate=="function"&&(t.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=ce),m.props=s,m.state=ce,m.context=T,s=W):(typeof m.componentDidUpdate!="function"||S===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),s=!1)}return Fl(e,t,i,s,d,c)}function Fl(e,t,i,s,c,d){Ip(e,t);var m=(t.flags&128)!==0;if(!s&&!m)return c&&_d(t,i,!1),jn(e,t,d);s=t.stateNode,t0.current=t;var S=m&&typeof i.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&m?(t.child=Zr(t,e.child,null,d),t.child=Zr(t,null,S,d)):$t(e,t,S,d),t.memoizedState=s.state,c&&_d(t,i,!0),t.child}function Rp(e){var t=e.stateNode;t.pendingContext?Md(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Md(e,t.context,!1),Cl(e,t.containerInfo)}function Pp(e,t,i,s,c){return Qr(),hl(c),t.flags|=256,$t(e,t,i,s),t.child}var jl={dehydrated:null,treeContext:null,retryLane:0};function Bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mp(e,t,i){var s=t.pendingProps,c=Je.current,d=!1,m=(t.flags&128)!==0,S;if((S=m)||(S=e!==null&&e.memoizedState===null?!1:(c&2)!==0),S?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),qe(Je,c&1),e===null)return ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(m=s.children,e=s.fallback,d?(s=t.mode,d=t.child,m={mode:"hidden",children:m},(s&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=m):d=_s(m,s,0,null),e=Ir(e,s,i,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=Bl(i),t.memoizedState=jl,e):Wl(t,m));if(c=e.memoizedState,c!==null&&(S=c.dehydrated,S!==null))return n0(e,t,m,s,S,c,i);if(d){d=s.fallback,m=t.mode,c=e.child,S=c.sibling;var T={mode:"hidden",children:s.children};return(m&1)===0&&t.child!==c?(s=t.child,s.childLanes=0,s.pendingProps=T,t.deletions=null):(s=lr(c,T),s.subtreeFlags=c.subtreeFlags&14680064),S!==null?d=lr(S,d):(d=Ir(d,m,i,null),d.flags|=2),d.return=t,s.return=t,s.sibling=d,t.child=s,s=d,d=t.child,m=e.child.memoizedState,m=m===null?Bl(i):{baseLanes:m.baseLanes|i,cachePool:null,transitions:m.transitions},d.memoizedState=m,d.childLanes=e.childLanes&~i,t.memoizedState=jl,s}return d=e.child,e=d.sibling,s=lr(d,{mode:"visible",children:s.children}),(t.mode&1)===0&&(s.lanes=i),s.return=t,s.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=s,t.memoizedState=null,s}function Wl(e,t){return t=_s({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ys(e,t,i,s){return s!==null&&hl(s),Zr(t,e.child,null,i),e=Wl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function n0(e,t,i,s,c,d,m){if(i)return t.flags&256?(t.flags&=-257,s=Nl(Error(o(422))),ys(e,t,m,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=s.fallback,c=t.mode,s=_s({mode:"visible",children:s.children},c,0,null),d=Ir(d,c,m,null),d.flags|=2,s.return=t,d.return=t,s.sibling=d,t.child=s,(t.mode&1)!==0&&Zr(t,e.child,null,m),t.child.memoizedState=Bl(m),t.memoizedState=jl,d);if((t.mode&1)===0)return ys(e,t,m,null);if(c.data==="$!"){if(s=c.nextSibling&&c.nextSibling.dataset,s)var S=s.dgst;return s=S,d=Error(o(419)),s=Nl(d,s,void 0),ys(e,t,m,s)}if(S=(m&e.childLanes)!==0,Dt||S){if(s=xt,s!==null){switch(m&-m){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(s.suspendedLanes|m))!==0?0:c,c!==0&&c!==d.retryLane&&(d.retryLane=c,Ln(e,c),yn(s,e,c,-1))}return ic(),s=Nl(Error(o(421))),ys(e,t,m,s)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=h0.bind(null,e),c._reactRetry=t,null):(e=d.treeContext,qt=Qn(c.nextSibling),Gt=t,Qe=!0,hn=null,e!==null&&(en[tn++]=Nn,en[tn++]=Dn,en[tn++]=vr,Nn=e.id,Dn=e.overflow,vr=t),t=Wl(t,s.children),t.flags|=4096,t)}function zp(e,t,i){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),yl(e.return,t,i)}function Ul(e,t,i,s,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:c}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=i,d.tailMode=c)}function _p(e,t,i){var s=t.pendingProps,c=s.revealOrder,d=s.tail;if($t(e,t,s.children,i),s=Je.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zp(e,i,t);else if(e.tag===19)zp(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(qe(Je,s),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(i=t.child,c=null;i!==null;)e=i.alternate,e!==null&&ps(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=t.child,t.child=null):(c=i.sibling,i.sibling=null),Ul(t,!1,c,i,d);break;case"backwards":for(i=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&ps(e)===null){t.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}Ul(t,!0,i,null,d);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jn(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Cr|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,i=lr(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=lr(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function r0(e,t,i){switch(t.tag){case 3:Rp(t),Qr();break;case 5:Kd(t);break;case 1:Nt(t.type)&&ns(t);break;case 4:Cl(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,c=t.memoizedProps.value;qe(ls,s._currentValue),s._currentValue=c;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(qe(Je,Je.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?Mp(e,t,i):(qe(Je,Je.current&1),e=jn(e,t,i),e!==null?e.sibling:null);qe(Je,Je.current&1);break;case 19:if(s=(i&t.childLanes)!==0,(e.flags&128)!==0){if(s)return _p(e,t,i);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),qe(Je,Je.current),s)break;return null;case 22:case 23:return t.lanes=0,Ep(e,t,i)}return jn(e,t,i)}var $p,Hl,Op,Ap;$p=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Hl=function(){},Op=function(e,t,i,s){var c=e.memoizedProps;if(c!==s){e=t.stateNode,br(Tn.current);var d=null;switch(i){case"input":c=Re(e,c),s=Re(e,s),d=[];break;case"select":c=J({},c,{value:void 0}),s=J({},s,{value:void 0}),d=[];break;case"textarea":c=Ut(e,c),s=Ut(e,s),d=[];break;default:typeof c.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Jo)}Sn(i,s);var m;i=null;for(W in c)if(!s.hasOwnProperty(W)&&c.hasOwnProperty(W)&&c[W]!=null)if(W==="style"){var S=c[W];for(m in S)S.hasOwnProperty(m)&&(i||(i={}),i[m]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(l.hasOwnProperty(W)?d||(d=[]):(d=d||[]).push(W,null));for(W in s){var T=s[W];if(S=c!=null?c[W]:void 0,s.hasOwnProperty(W)&&T!==S&&(T!=null||S!=null))if(W==="style")if(S){for(m in S)!S.hasOwnProperty(m)||T&&T.hasOwnProperty(m)||(i||(i={}),i[m]="");for(m in T)T.hasOwnProperty(m)&&S[m]!==T[m]&&(i||(i={}),i[m]=T[m])}else i||(d||(d=[]),d.push(W,i)),i=T;else W==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,S=S?S.__html:void 0,T!=null&&S!==T&&(d=d||[]).push(W,T)):W==="children"?typeof T!="string"&&typeof T!="number"||(d=d||[]).push(W,""+T):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(l.hasOwnProperty(W)?(T!=null&&W==="onScroll"&&Ye("scroll",e),d||S===T||(d=[])):(d=d||[]).push(W,T))}i&&(d=d||[]).push("style",i);var W=d;(t.updateQueue=W)&&(t.flags|=4)}},Ap=function(e,t,i,s){i!==s&&(t.flags|=4)};function eo(e,t){if(!Qe)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,s=0;if(t)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,s|=c.subtreeFlags&14680064,s|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=i,t}function i0(e,t,i){var s=t.pendingProps;switch(pl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(t),null;case 1:return Nt(t.type)&&ts(),Tt(t),null;case 3:return s=t.stateNode,ti(),Xe(At),Xe(Et),El(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ss(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,hn!==null&&(tc(hn),hn=null))),Hl(e,t),Tt(t),null;case 5:kl(t);var c=br(Yi.current);if(i=t.type,e!==null&&t.stateNode!=null)Op(e,t,i,s,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(o(166));return Tt(t),null}if(e=br(Tn.current),ss(t)){s=t.stateNode,i=t.type;var d=t.memoizedProps;switch(s[In]=t,s[Hi]=d,e=(t.mode&1)!==0,i){case"dialog":Ye("cancel",s),Ye("close",s);break;case"iframe":case"object":case"embed":Ye("load",s);break;case"video":case"audio":for(c=0;c<Bi.length;c++)Ye(Bi[c],s);break;case"source":Ye("error",s);break;case"img":case"image":case"link":Ye("error",s),Ye("load",s);break;case"details":Ye("toggle",s);break;case"input":Ne(s,d),Ye("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!d.multiple},Ye("invalid",s);break;case"textarea":bt(s,d),Ye("invalid",s)}Sn(i,d),c=null;for(var m in d)if(d.hasOwnProperty(m)){var S=d[m];m==="children"?typeof S=="string"?s.textContent!==S&&(d.suppressHydrationWarning!==!0&&Zo(s.textContent,S,e),c=["children",S]):typeof S=="number"&&s.textContent!==""+S&&(d.suppressHydrationWarning!==!0&&Zo(s.textContent,S,e),c=["children",""+S]):l.hasOwnProperty(m)&&S!=null&&m==="onScroll"&&Ye("scroll",s)}switch(i){case"input":Te(s),Mt(s,d,!0);break;case"textarea":Te(s),Ht(s);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(s.onclick=Jo)}s=c,t.updateQueue=s,s!==null&&(t.flags|=4)}else{m=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dn(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=m.createElement(i,{is:s.is}):(e=m.createElement(i),i==="select"&&(m=e,s.multiple?m.multiple=!0:s.size&&(m.size=s.size))):e=m.createElementNS(e,i),e[In]=t,e[Hi]=s,$p(e,t,!1,!1),t.stateNode=e;e:{switch(m=Nr(i,s),i){case"dialog":Ye("cancel",e),Ye("close",e),c=s;break;case"iframe":case"object":case"embed":Ye("load",e),c=s;break;case"video":case"audio":for(c=0;c<Bi.length;c++)Ye(Bi[c],e);c=s;break;case"source":Ye("error",e),c=s;break;case"img":case"image":case"link":Ye("error",e),Ye("load",e),c=s;break;case"details":Ye("toggle",e),c=s;break;case"input":Ne(e,s),c=Re(e,s),Ye("invalid",e);break;case"option":c=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},c=J({},s,{value:void 0}),Ye("invalid",e);break;case"textarea":bt(e,s),c=Ut(e,s),Ye("invalid",e);break;default:c=s}Sn(i,c),S=c;for(d in S)if(S.hasOwnProperty(d)){var T=S[d];d==="style"?Ve(e,T):d==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&ke(e,T)):d==="children"?typeof T=="string"?(i!=="textarea"||T!=="")&&_t(e,T):typeof T=="number"&&_t(e,""+T):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(l.hasOwnProperty(d)?T!=null&&d==="onScroll"&&Ye("scroll",e):T!=null&&R(e,d,T,m))}switch(i){case"input":Te(e),Mt(e,s,!1);break;case"textarea":Te(e),Ht(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Ie(s.value));break;case"select":e.multiple=!!s.multiple,d=s.value,d!=null?We(e,!!s.multiple,d,!1):s.defaultValue!=null&&We(e,!!s.multiple,s.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=Jo)}switch(i){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Tt(t),null;case 6:if(e&&t.stateNode!=null)Ap(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(o(166));if(i=br(Yi.current),br(Tn.current),ss(t)){if(s=t.stateNode,i=t.memoizedProps,s[In]=t,(d=s.nodeValue!==i)&&(e=Gt,e!==null))switch(e.tag){case 3:Zo(s.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zo(s.nodeValue,i,(e.mode&1)!==0)}d&&(t.flags|=4)}else s=(i.nodeType===9?i:i.ownerDocument).createTextNode(s),s[In]=t,t.stateNode=s}return Tt(t),null;case 13:if(Xe(Je),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Qe&&qt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ld(),Qr(),t.flags|=98560,d=!1;else if(d=ss(t),s!==null&&s.dehydrated!==null){if(e===null){if(!d)throw Error(o(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[In]=t}else Qr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Tt(t),d=!1}else hn!==null&&(tc(hn),hn=null),d=!0;if(!d)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Je.current&1)!==0?ft===0&&(ft=3):ic())),t.updateQueue!==null&&(t.flags|=4),Tt(t),null);case 4:return ti(),Hl(e,t),e===null&&Wi(t.stateNode.containerInfo),Tt(t),null;case 10:return xl(t.type._context),Tt(t),null;case 17:return Nt(t.type)&&ts(),Tt(t),null;case 19:if(Xe(Je),d=t.memoizedState,d===null)return Tt(t),null;if(s=(t.flags&128)!==0,m=d.rendering,m===null)if(s)eo(d,!1);else{if(ft!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(m=ps(e),m!==null){for(t.flags|=128,eo(d,!1),s=m.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=i,i=t.child;i!==null;)d=i,e=s,d.flags&=14680066,m=d.alternate,m===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=m.childLanes,d.lanes=m.lanes,d.child=m.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=m.memoizedProps,d.memoizedState=m.memoizedState,d.updateQueue=m.updateQueue,d.type=m.type,e=m.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return qe(Je,Je.current&1|2),t.child}e=e.sibling}d.tail!==null&&ot()>oi&&(t.flags|=128,s=!0,eo(d,!1),t.lanes=4194304)}else{if(!s)if(e=ps(m),e!==null){if(t.flags|=128,s=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),eo(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!Qe)return Tt(t),null}else 2*ot()-d.renderingStartTime>oi&&i!==1073741824&&(t.flags|=128,s=!0,eo(d,!1),t.lanes=4194304);d.isBackwards?(m.sibling=t.child,t.child=m):(i=d.last,i!==null?i.sibling=m:t.child=m,d.last=m)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=ot(),t.sibling=null,i=Je.current,qe(Je,s?i&1|2:i&1),t):(Tt(t),null);case 22:case 23:return rc(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&(t.mode&1)!==0?(Yt&1073741824)!==0&&(Tt(t),t.subtreeFlags&6&&(t.flags|=8192)):Tt(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function o0(e,t){switch(pl(t),t.tag){case 1:return Nt(t.type)&&ts(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ti(),Xe(At),Xe(Et),El(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return kl(t),null;case 13:if(Xe(Je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Xe(Je),null;case 4:return ti(),null;case 10:return xl(t.type._context),null;case 22:case 23:return rc(),null;case 24:return null;default:return null}}var ws=!1,Rt=!1,s0=typeof WeakSet=="function"?WeakSet:Set,le=null;function ri(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(s){nt(e,t,s)}else i.current=null}function Vl(e,t,i){try{i()}catch(s){nt(e,t,s)}}var Np=!1;function a0(e,t){if(rl=Bo,e=md(),Ya(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var c=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{i.nodeType,d.nodeType}catch{i=null;break e}var m=0,S=-1,T=-1,W=0,q=0,X=e,K=null;t:for(;;){for(var oe;X!==i||c!==0&&X.nodeType!==3||(S=m+c),X!==d||s!==0&&X.nodeType!==3||(T=m+s),X.nodeType===3&&(m+=X.nodeValue.length),(oe=X.firstChild)!==null;)K=X,X=oe;for(;;){if(X===e)break t;if(K===i&&++W===c&&(S=m),K===d&&++q===s&&(T=m),(oe=X.nextSibling)!==null)break;X=K,K=X.parentNode}X=oe}i=S===-1||T===-1?null:{start:S,end:T}}else i=null}i=i||{start:0,end:0}}else i=null;for(il={focusedElem:e,selectionRange:i},Bo=!1,le=t;le!==null;)if(t=le,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,le=e;else for(;le!==null;){t=le;try{var ce=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var ue=ce.memoizedProps,st=ce.memoizedState,D=t.stateNode,P=D.getSnapshotBeforeUpdate(t.elementType===t.type?ue:gn(t.type,ue),st);D.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var B=t.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(re){nt(t,t.return,re)}if(e=t.sibling,e!==null){e.return=t.return,le=e;break}le=t.return}return ce=Np,Np=!1,ce}function to(e,t,i){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var c=s=s.next;do{if((c.tag&e)===e){var d=c.destroy;c.destroy=void 0,d!==void 0&&Vl(t,i,d)}c=c.next}while(c!==s)}}function Cs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var s=i.create;i.destroy=s()}i=i.next}while(i!==t)}}function Kl(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function Dp(e){var t=e.alternate;t!==null&&(e.alternate=null,Dp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[In],delete t[Hi],delete t[ll],delete t[Ug],delete t[Hg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lp(e){return e.tag===5||e.tag===3||e.tag===4}function Fp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gl(e,t,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Jo));else if(s!==4&&(e=e.child,e!==null))for(Gl(e,t,i),e=e.sibling;e!==null;)Gl(e,t,i),e=e.sibling}function ql(e,t,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(ql(e,t,i),e=e.sibling;e!==null;)ql(e,t,i),e=e.sibling}var wt=null,vn=!1;function rr(e,t,i){for(i=i.child;i!==null;)jp(e,t,i),i=i.sibling}function jp(e,t,i){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(Ao,i)}catch{}switch(i.tag){case 5:Rt||ri(i,t);case 6:var s=wt,c=vn;wt=null,rr(e,t,i),wt=s,vn=c,wt!==null&&(vn?(e=wt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):wt.removeChild(i.stateNode));break;case 18:wt!==null&&(vn?(e=wt,i=i.stateNode,e.nodeType===8?al(e.parentNode,i):e.nodeType===1&&al(e,i),$i(e)):al(wt,i.stateNode));break;case 4:s=wt,c=vn,wt=i.stateNode.containerInfo,vn=!0,rr(e,t,i),wt=s,vn=c;break;case 0:case 11:case 14:case 15:if(!Rt&&(s=i.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){c=s=s.next;do{var d=c,m=d.destroy;d=d.tag,m!==void 0&&((d&2)!==0||(d&4)!==0)&&Vl(i,t,m),c=c.next}while(c!==s)}rr(e,t,i);break;case 1:if(!Rt&&(ri(i,t),s=i.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(S){nt(i,t,S)}rr(e,t,i);break;case 21:rr(e,t,i);break;case 22:i.mode&1?(Rt=(s=Rt)||i.memoizedState!==null,rr(e,t,i),Rt=s):rr(e,t,i);break;default:rr(e,t,i)}}function Bp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new s0),t.forEach(function(s){var c=g0.bind(null,e,s);i.has(s)||(i.add(s),s.then(c,c))})}}function xn(e,t){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var c=i[s];try{var d=e,m=t,S=m;e:for(;S!==null;){switch(S.tag){case 5:wt=S.stateNode,vn=!1;break e;case 3:wt=S.stateNode.containerInfo,vn=!0;break e;case 4:wt=S.stateNode.containerInfo,vn=!0;break e}S=S.return}if(wt===null)throw Error(o(160));jp(d,m,c),wt=null,vn=!1;var T=c.alternate;T!==null&&(T.return=null),c.return=null}catch(W){nt(c,t,W)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wp(t,e),t=t.sibling}function Wp(e,t){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xn(t,e),Pn(e),s&4){try{to(3,e,e.return),Cs(3,e)}catch(ue){nt(e,e.return,ue)}try{to(5,e,e.return)}catch(ue){nt(e,e.return,ue)}}break;case 1:xn(t,e),Pn(e),s&512&&i!==null&&ri(i,i.return);break;case 5:if(xn(t,e),Pn(e),s&512&&i!==null&&ri(i,i.return),e.flags&32){var c=e.stateNode;try{_t(c,"")}catch(ue){nt(e,e.return,ue)}}if(s&4&&(c=e.stateNode,c!=null)){var d=e.memoizedProps,m=i!==null?i.memoizedProps:d,S=e.type,T=e.updateQueue;if(e.updateQueue=null,T!==null)try{S==="input"&&d.type==="radio"&&d.name!=null&&Wt(c,d),Nr(S,m);var W=Nr(S,d);for(m=0;m<T.length;m+=2){var q=T[m],X=T[m+1];q==="style"?Ve(c,X):q==="dangerouslySetInnerHTML"?ke(c,X):q==="children"?_t(c,X):R(c,q,X,W)}switch(S){case"input":ht(c,d);break;case"textarea":Ge(c,d);break;case"select":var K=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!d.multiple;var oe=d.value;oe!=null?We(c,!!d.multiple,oe,!1):K!==!!d.multiple&&(d.defaultValue!=null?We(c,!!d.multiple,d.defaultValue,!0):We(c,!!d.multiple,d.multiple?[]:"",!1))}c[Hi]=d}catch(ue){nt(e,e.return,ue)}}break;case 6:if(xn(t,e),Pn(e),s&4){if(e.stateNode===null)throw Error(o(162));c=e.stateNode,d=e.memoizedProps;try{c.nodeValue=d}catch(ue){nt(e,e.return,ue)}}break;case 3:if(xn(t,e),Pn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{$i(t.containerInfo)}catch(ue){nt(e,e.return,ue)}break;case 4:xn(t,e),Pn(e);break;case 13:xn(t,e),Pn(e),c=e.child,c.flags&8192&&(d=c.memoizedState!==null,c.stateNode.isHidden=d,!d||c.alternate!==null&&c.alternate.memoizedState!==null||(Ql=ot())),s&4&&Bp(e);break;case 22:if(q=i!==null&&i.memoizedState!==null,e.mode&1?(Rt=(W=Rt)||q,xn(t,e),Rt=W):xn(t,e),Pn(e),s&8192){if(W=e.memoizedState!==null,(e.stateNode.isHidden=W)&&!q&&(e.mode&1)!==0)for(le=e,q=e.child;q!==null;){for(X=le=q;le!==null;){switch(K=le,oe=K.child,K.tag){case 0:case 11:case 14:case 15:to(4,K,K.return);break;case 1:ri(K,K.return);var ce=K.stateNode;if(typeof ce.componentWillUnmount=="function"){s=K,i=K.return;try{t=s,ce.props=t.memoizedProps,ce.state=t.memoizedState,ce.componentWillUnmount()}catch(ue){nt(s,i,ue)}}break;case 5:ri(K,K.return);break;case 22:if(K.memoizedState!==null){Vp(X);continue}}oe!==null?(oe.return=K,le=oe):Vp(X)}q=q.sibling}e:for(q=null,X=e;;){if(X.tag===5){if(q===null){q=X;try{c=X.stateNode,W?(d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(S=X.stateNode,T=X.memoizedProps.style,m=T!=null&&T.hasOwnProperty("display")?T.display:null,S.style.display=be("display",m))}catch(ue){nt(e,e.return,ue)}}}else if(X.tag===6){if(q===null)try{X.stateNode.nodeValue=W?"":X.memoizedProps}catch(ue){nt(e,e.return,ue)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===e)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===e)break e;for(;X.sibling===null;){if(X.return===null||X.return===e)break e;q===X&&(q=null),X=X.return}q===X&&(q=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:xn(t,e),Pn(e),s&4&&Bp(e);break;case 21:break;default:xn(t,e),Pn(e)}}function Pn(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(Lp(i)){var s=i;break e}i=i.return}throw Error(o(160))}switch(s.tag){case 5:var c=s.stateNode;s.flags&32&&(_t(c,""),s.flags&=-33);var d=Fp(e);ql(e,d,c);break;case 3:case 4:var m=s.stateNode.containerInfo,S=Fp(e);Gl(e,S,m);break;default:throw Error(o(161))}}catch(T){nt(e,e.return,T)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function l0(e,t,i){le=e,Up(e)}function Up(e,t,i){for(var s=(e.mode&1)!==0;le!==null;){var c=le,d=c.child;if(c.tag===22&&s){var m=c.memoizedState!==null||ws;if(!m){var S=c.alternate,T=S!==null&&S.memoizedState!==null||Rt;S=ws;var W=Rt;if(ws=m,(Rt=T)&&!W)for(le=c;le!==null;)m=le,T=m.child,m.tag===22&&m.memoizedState!==null?Kp(c):T!==null?(T.return=m,le=T):Kp(c);for(;d!==null;)le=d,Up(d),d=d.sibling;le=c,ws=S,Rt=W}Hp(e)}else(c.subtreeFlags&8772)!==0&&d!==null?(d.return=c,le=d):Hp(e)}}function Hp(e){for(;le!==null;){var t=le;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Rt||Cs(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Rt)if(i===null)s.componentDidMount();else{var c=t.elementType===t.type?i.memoizedProps:gn(t.type,i.memoizedProps);s.componentDidUpdate(c,i.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&Vd(t,d,s);break;case 3:var m=t.updateQueue;if(m!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}Vd(t,m,i)}break;case 5:var S=t.stateNode;if(i===null&&t.flags&4){i=S;var T=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&i.focus();break;case"img":T.src&&(i.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var W=t.alternate;if(W!==null){var q=W.memoizedState;if(q!==null){var X=q.dehydrated;X!==null&&$i(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Rt||t.flags&512&&Kl(t)}catch(K){nt(t,t.return,K)}}if(t===e){le=null;break}if(i=t.sibling,i!==null){i.return=t.return,le=i;break}le=t.return}}function Vp(e){for(;le!==null;){var t=le;if(t===e){le=null;break}var i=t.sibling;if(i!==null){i.return=t.return,le=i;break}le=t.return}}function Kp(e){for(;le!==null;){var t=le;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{Cs(4,t)}catch(T){nt(t,i,T)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var c=t.return;try{s.componentDidMount()}catch(T){nt(t,c,T)}}var d=t.return;try{Kl(t)}catch(T){nt(t,d,T)}break;case 5:var m=t.return;try{Kl(t)}catch(T){nt(t,m,T)}}}catch(T){nt(t,t.return,T)}if(t===e){le=null;break}var S=t.sibling;if(S!==null){S.return=t.return,le=S;break}le=t.return}}var c0=Math.ceil,ks=z.ReactCurrentDispatcher,Yl=z.ReactCurrentOwner,on=z.ReactCurrentBatchConfig,Oe=0,xt=null,ct=null,Ct=0,Yt=0,ii=Zn(0),ft=0,no=null,Cr=0,Ss=0,Xl=0,ro=null,Lt=null,Ql=0,oi=1/0,Bn=null,Es=!1,Zl=null,ir=null,Is=!1,or=null,Ts=0,io=0,Jl=null,Rs=-1,Ps=0;function Ot(){return(Oe&6)!==0?ot():Rs!==-1?Rs:Rs=ot()}function sr(e){return(e.mode&1)===0?1:(Oe&2)!==0&&Ct!==0?Ct&-Ct:Kg.transition!==null?(Ps===0&&(Ps=Fu()),Ps):(e=He,e!==0||(e=window.event,e=e===void 0?16:qu(e.type)),e)}function yn(e,t,i,s){if(50<io)throw io=0,Jl=null,Error(o(185));Ri(e,i,s),((Oe&2)===0||e!==xt)&&(e===xt&&((Oe&2)===0&&(Ss|=i),ft===4&&ar(e,Ct)),Ft(e,s),i===1&&Oe===0&&(t.mode&1)===0&&(oi=ot()+500,rs&&er()))}function Ft(e,t){var i=e.callbackNode;Kh(e,t);var s=Lo(e,e===xt?Ct:0);if(s===0)i!==null&&Nu(i),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(i!=null&&Nu(i),t===1)e.tag===0?Vg(qp.bind(null,e)):$d(qp.bind(null,e)),Bg(function(){(Oe&6)===0&&er()}),i=null;else{switch(ju(s)){case 1:i=_a;break;case 4:i=Du;break;case 16:i=Oo;break;case 536870912:i=Lu;break;default:i=Oo}i=nf(i,Gp.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function Gp(e,t){if(Rs=-1,Ps=0,(Oe&6)!==0)throw Error(o(327));var i=e.callbackNode;if(si()&&e.callbackNode!==i)return null;var s=Lo(e,e===xt?Ct:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||t)t=Ms(e,s);else{t=s;var c=Oe;Oe|=2;var d=Xp();(xt!==e||Ct!==t)&&(Bn=null,oi=ot()+500,Sr(e,t));do try{p0();break}catch(S){Yp(e,S)}while(!0);vl(),ks.current=d,Oe=c,ct!==null?t=0:(xt=null,Ct=0,t=ft)}if(t!==0){if(t===2&&(c=$a(e),c!==0&&(s=c,t=ec(e,c))),t===1)throw i=no,Sr(e,0),ar(e,s),Ft(e,ot()),i;if(t===6)ar(e,s);else{if(c=e.current.alternate,(s&30)===0&&!u0(c)&&(t=Ms(e,s),t===2&&(d=$a(e),d!==0&&(s=d,t=ec(e,d))),t===1))throw i=no,Sr(e,0),ar(e,s),Ft(e,ot()),i;switch(e.finishedWork=c,e.finishedLanes=s,t){case 0:case 1:throw Error(o(345));case 2:Er(e,Lt,Bn);break;case 3:if(ar(e,s),(s&130023424)===s&&(t=Ql+500-ot(),10<t)){if(Lo(e,0)!==0)break;if(c=e.suspendedLanes,(c&s)!==s){Ot(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=sl(Er.bind(null,e,Lt,Bn),t);break}Er(e,Lt,Bn);break;case 4:if(ar(e,s),(s&4194240)===s)break;for(t=e.eventTimes,c=-1;0<s;){var m=31-fn(s);d=1<<m,m=t[m],m>c&&(c=m),s&=~d}if(s=c,s=ot()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*c0(s/1960))-s,10<s){e.timeoutHandle=sl(Er.bind(null,e,Lt,Bn),s);break}Er(e,Lt,Bn);break;case 5:Er(e,Lt,Bn);break;default:throw Error(o(329))}}}return Ft(e,ot()),e.callbackNode===i?Gp.bind(null,e):null}function ec(e,t){var i=ro;return e.current.memoizedState.isDehydrated&&(Sr(e,t).flags|=256),e=Ms(e,t),e!==2&&(t=Lt,Lt=i,t!==null&&tc(t)),e}function tc(e){Lt===null?Lt=e:Lt.push.apply(Lt,e)}function u0(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var s=0;s<i.length;s++){var c=i[s],d=c.getSnapshot;c=c.value;try{if(!mn(d(),c))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ar(e,t){for(t&=~Xl,t&=~Ss,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-fn(t),s=1<<i;e[i]=-1,t&=~s}}function qp(e){if((Oe&6)!==0)throw Error(o(327));si();var t=Lo(e,0);if((t&1)===0)return Ft(e,ot()),null;var i=Ms(e,t);if(e.tag!==0&&i===2){var s=$a(e);s!==0&&(t=s,i=ec(e,s))}if(i===1)throw i=no,Sr(e,0),ar(e,t),Ft(e,ot()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Er(e,Lt,Bn),Ft(e,ot()),null}function nc(e,t){var i=Oe;Oe|=1;try{return e(t)}finally{Oe=i,Oe===0&&(oi=ot()+500,rs&&er())}}function kr(e){or!==null&&or.tag===0&&(Oe&6)===0&&si();var t=Oe;Oe|=1;var i=on.transition,s=He;try{if(on.transition=null,He=1,e)return e()}finally{He=s,on.transition=i,Oe=t,(Oe&6)===0&&er()}}function rc(){Yt=ii.current,Xe(ii)}function Sr(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,jg(i)),ct!==null)for(i=ct.return;i!==null;){var s=i;switch(pl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&ts();break;case 3:ti(),Xe(At),Xe(Et),El();break;case 5:kl(s);break;case 4:ti();break;case 13:Xe(Je);break;case 19:Xe(Je);break;case 10:xl(s.type._context);break;case 22:case 23:rc()}i=i.return}if(xt=e,ct=e=lr(e.current,null),Ct=Yt=t,ft=0,no=null,Xl=Ss=Cr=0,Lt=ro=null,yr!==null){for(t=0;t<yr.length;t++)if(i=yr[t],s=i.interleaved,s!==null){i.interleaved=null;var c=s.next,d=i.pending;if(d!==null){var m=d.next;d.next=c,s.next=m}i.pending=s}yr=null}return e}function Yp(e,t){do{var i=ct;try{if(vl(),fs.current=vs,ms){for(var s=et.memoizedState;s!==null;){var c=s.queue;c!==null&&(c.pending=null),s=s.next}ms=!1}if(wr=0,vt=pt=et=null,Xi=!1,Qi=0,Yl.current=null,i===null||i.return===null){ft=1,no=t,ct=null;break}e:{var d=e,m=i.return,S=i,T=t;if(t=Ct,S.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var W=T,q=S,X=q.tag;if((q.mode&1)===0&&(X===0||X===11||X===15)){var K=q.alternate;K?(q.updateQueue=K.updateQueue,q.memoizedState=K.memoizedState,q.lanes=K.lanes):(q.updateQueue=null,q.memoizedState=null)}var oe=bp(m);if(oe!==null){oe.flags&=-257,wp(oe,m,S,d,t),oe.mode&1&&yp(d,W,t),t=oe,T=W;var ce=t.updateQueue;if(ce===null){var ue=new Set;ue.add(T),t.updateQueue=ue}else ce.add(T);break e}else{if((t&1)===0){yp(d,W,t),ic();break e}T=Error(o(426))}}else if(Qe&&S.mode&1){var st=bp(m);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),wp(st,m,S,d,t),hl(ni(T,S));break e}}d=T=ni(T,S),ft!==4&&(ft=2),ro===null?ro=[d]:ro.push(d),d=m;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var D=vp(d,T,t);Hd(d,D);break e;case 1:S=T;var P=d.type,B=d.stateNode;if((d.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(ir===null||!ir.has(B)))){d.flags|=65536,t&=-t,d.lanes|=t;var re=xp(d,S,t);Hd(d,re);break e}}d=d.return}while(d!==null)}Zp(i)}catch(fe){t=fe,ct===i&&i!==null&&(ct=i=i.return);continue}break}while(!0)}function Xp(){var e=ks.current;return ks.current=vs,e===null?vs:e}function ic(){(ft===0||ft===3||ft===2)&&(ft=4),xt===null||(Cr&268435455)===0&&(Ss&268435455)===0||ar(xt,Ct)}function Ms(e,t){var i=Oe;Oe|=2;var s=Xp();(xt!==e||Ct!==t)&&(Bn=null,Sr(e,t));do try{d0();break}catch(c){Yp(e,c)}while(!0);if(vl(),Oe=i,ks.current=s,ct!==null)throw Error(o(261));return xt=null,Ct=0,ft}function d0(){for(;ct!==null;)Qp(ct)}function p0(){for(;ct!==null&&!Dh();)Qp(ct)}function Qp(e){var t=tf(e.alternate,e,Yt);e.memoizedProps=e.pendingProps,t===null?Zp(e):ct=t,Yl.current=null}function Zp(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=i0(i,t,Yt),i!==null){ct=i;return}}else{if(i=o0(i,t),i!==null){i.flags&=32767,ct=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ft=6,ct=null;return}}if(t=t.sibling,t!==null){ct=t;return}ct=t=e}while(t!==null);ft===0&&(ft=5)}function Er(e,t,i){var s=He,c=on.transition;try{on.transition=null,He=1,f0(e,t,i,s)}finally{on.transition=c,He=s}return null}function f0(e,t,i,s){do si();while(or!==null);if((Oe&6)!==0)throw Error(o(327));i=e.finishedWork;var c=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var d=i.lanes|i.childLanes;if(Gh(e,d),e===xt&&(ct=xt=null,Ct=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||Is||(Is=!0,nf(Oo,function(){return si(),null})),d=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||d){d=on.transition,on.transition=null;var m=He;He=1;var S=Oe;Oe|=4,Yl.current=null,a0(e,i),Wp(i,e),$g(il),Bo=!!rl,il=rl=null,e.current=i,l0(i),Lh(),Oe=S,He=m,on.transition=d}else e.current=i;if(Is&&(Is=!1,or=e,Ts=c),d=e.pendingLanes,d===0&&(ir=null),Bh(i.stateNode),Ft(e,ot()),t!==null)for(s=e.onRecoverableError,i=0;i<t.length;i++)c=t[i],s(c.value,{componentStack:c.stack,digest:c.digest});if(Es)throw Es=!1,e=Zl,Zl=null,e;return(Ts&1)!==0&&e.tag!==0&&si(),d=e.pendingLanes,(d&1)!==0?e===Jl?io++:(io=0,Jl=e):io=0,er(),null}function si(){if(or!==null){var e=ju(Ts),t=on.transition,i=He;try{if(on.transition=null,He=16>e?16:e,or===null)var s=!1;else{if(e=or,or=null,Ts=0,(Oe&6)!==0)throw Error(o(331));var c=Oe;for(Oe|=4,le=e.current;le!==null;){var d=le,m=d.child;if((le.flags&16)!==0){var S=d.deletions;if(S!==null){for(var T=0;T<S.length;T++){var W=S[T];for(le=W;le!==null;){var q=le;switch(q.tag){case 0:case 11:case 15:to(8,q,d)}var X=q.child;if(X!==null)X.return=q,le=X;else for(;le!==null;){q=le;var K=q.sibling,oe=q.return;if(Dp(q),q===W){le=null;break}if(K!==null){K.return=oe,le=K;break}le=oe}}}var ce=d.alternate;if(ce!==null){var ue=ce.child;if(ue!==null){ce.child=null;do{var st=ue.sibling;ue.sibling=null,ue=st}while(ue!==null)}}le=d}}if((d.subtreeFlags&2064)!==0&&m!==null)m.return=d,le=m;else e:for(;le!==null;){if(d=le,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:to(9,d,d.return)}var D=d.sibling;if(D!==null){D.return=d.return,le=D;break e}le=d.return}}var P=e.current;for(le=P;le!==null;){m=le;var B=m.child;if((m.subtreeFlags&2064)!==0&&B!==null)B.return=m,le=B;else e:for(m=P;le!==null;){if(S=le,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Cs(9,S)}}catch(fe){nt(S,S.return,fe)}if(S===m){le=null;break e}var re=S.sibling;if(re!==null){re.return=S.return,le=re;break e}le=S.return}}if(Oe=c,er(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(Ao,e)}catch{}s=!0}return s}finally{He=i,on.transition=t}}return!1}function Jp(e,t,i){t=ni(i,t),t=vp(e,t,1),e=nr(e,t,1),t=Ot(),e!==null&&(Ri(e,1,t),Ft(e,t))}function nt(e,t,i){if(e.tag===3)Jp(e,e,i);else for(;t!==null;){if(t.tag===3){Jp(t,e,i);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ir===null||!ir.has(s))){e=ni(i,e),e=xp(t,e,1),t=nr(t,e,1),e=Ot(),t!==null&&(Ri(t,1,e),Ft(t,e));break}}t=t.return}}function m0(e,t,i){var s=e.pingCache;s!==null&&s.delete(t),t=Ot(),e.pingedLanes|=e.suspendedLanes&i,xt===e&&(Ct&i)===i&&(ft===4||ft===3&&(Ct&130023424)===Ct&&500>ot()-Ql?Sr(e,0):Xl|=i),Ft(e,t)}function ef(e,t){t===0&&((e.mode&1)===0?t=1:(t=Do,Do<<=1,(Do&130023424)===0&&(Do=4194304)));var i=Ot();e=Ln(e,t),e!==null&&(Ri(e,t,i),Ft(e,i))}function h0(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),ef(e,i)}function g0(e,t){var i=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(o(314))}s!==null&&s.delete(t),ef(e,i)}var tf;tf=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||At.current)Dt=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return Dt=!1,r0(e,t,i);Dt=(e.flags&131072)!==0}else Dt=!1,Qe&&(t.flags&1048576)!==0&&Od(t,os,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;bs(e,t),e=t.pendingProps;var c=qr(t,Et.current);ei(t,i),c=Rl(null,t,s,e,c,i);var d=Pl();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Nt(s)?(d=!0,ns(t)):d=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,wl(t),c.updater=xs,t.stateNode=c,c._reactInternals=t,Al(t,s,e,i),t=Fl(null,t,s,!0,d,i)):(t.tag=0,Qe&&d&&dl(t),$t(null,t,c,i),t=t.child),t;case 16:s=t.elementType;e:{switch(bs(e,t),e=t.pendingProps,c=s._init,s=c(s._payload),t.type=s,c=t.tag=x0(s),e=gn(s,e),c){case 0:t=Ll(null,t,s,e,i);break e;case 1:t=Tp(null,t,s,e,i);break e;case 11:t=Cp(null,t,s,e,i);break e;case 14:t=kp(null,t,s,gn(s.type,e),i);break e}throw Error(o(306,s,""))}return t;case 0:return s=t.type,c=t.pendingProps,c=t.elementType===s?c:gn(s,c),Ll(e,t,s,c,i);case 1:return s=t.type,c=t.pendingProps,c=t.elementType===s?c:gn(s,c),Tp(e,t,s,c,i);case 3:e:{if(Rp(t),e===null)throw Error(o(387));s=t.pendingProps,d=t.memoizedState,c=d.element,Ud(e,t),ds(t,s,null,i);var m=t.memoizedState;if(s=m.element,d.isDehydrated)if(d={element:s,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){c=ni(Error(o(423)),t),t=Pp(e,t,s,i,c);break e}else if(s!==c){c=ni(Error(o(424)),t),t=Pp(e,t,s,i,c);break e}else for(qt=Qn(t.stateNode.containerInfo.firstChild),Gt=t,Qe=!0,hn=null,i=Bd(t,null,s,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Qr(),s===c){t=jn(e,t,i);break e}$t(e,t,s,i)}t=t.child}return t;case 5:return Kd(t),e===null&&ml(t),s=t.type,c=t.pendingProps,d=e!==null?e.memoizedProps:null,m=c.children,ol(s,c)?m=null:d!==null&&ol(s,d)&&(t.flags|=32),Ip(e,t),$t(e,t,m,i),t.child;case 6:return e===null&&ml(t),null;case 13:return Mp(e,t,i);case 4:return Cl(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Zr(t,null,s,i):$t(e,t,s,i),t.child;case 11:return s=t.type,c=t.pendingProps,c=t.elementType===s?c:gn(s,c),Cp(e,t,s,c,i);case 7:return $t(e,t,t.pendingProps,i),t.child;case 8:return $t(e,t,t.pendingProps.children,i),t.child;case 12:return $t(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(s=t.type._context,c=t.pendingProps,d=t.memoizedProps,m=c.value,qe(ls,s._currentValue),s._currentValue=m,d!==null)if(mn(d.value,m)){if(d.children===c.children&&!At.current){t=jn(e,t,i);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var S=d.dependencies;if(S!==null){m=d.child;for(var T=S.firstContext;T!==null;){if(T.context===s){if(d.tag===1){T=Fn(-1,i&-i),T.tag=2;var W=d.updateQueue;if(W!==null){W=W.shared;var q=W.pending;q===null?T.next=T:(T.next=q.next,q.next=T),W.pending=T}}d.lanes|=i,T=d.alternate,T!==null&&(T.lanes|=i),yl(d.return,i,t),S.lanes|=i;break}T=T.next}}else if(d.tag===10)m=d.type===t.type?null:d.child;else if(d.tag===18){if(m=d.return,m===null)throw Error(o(341));m.lanes|=i,S=m.alternate,S!==null&&(S.lanes|=i),yl(m,i,t),m=d.sibling}else m=d.child;if(m!==null)m.return=d;else for(m=d;m!==null;){if(m===t){m=null;break}if(d=m.sibling,d!==null){d.return=m.return,m=d;break}m=m.return}d=m}$t(e,t,c.children,i),t=t.child}return t;case 9:return c=t.type,s=t.pendingProps.children,ei(t,i),c=nn(c),s=s(c),t.flags|=1,$t(e,t,s,i),t.child;case 14:return s=t.type,c=gn(s,t.pendingProps),c=gn(s.type,c),kp(e,t,s,c,i);case 15:return Sp(e,t,t.type,t.pendingProps,i);case 17:return s=t.type,c=t.pendingProps,c=t.elementType===s?c:gn(s,c),bs(e,t),t.tag=1,Nt(s)?(e=!0,ns(t)):e=!1,ei(t,i),hp(t,s,c),Al(t,s,c,i),Fl(null,t,s,!0,e,i);case 19:return _p(e,t,i);case 22:return Ep(e,t,i)}throw Error(o(156,t.tag))};function nf(e,t){return Au(e,t)}function v0(e,t,i,s){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(e,t,i,s){return new v0(e,t,i,s)}function oc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function x0(e){if(typeof e=="function")return oc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ee)return 11;if(e===te)return 14}return 2}function lr(e,t){var i=e.alternate;return i===null?(i=sn(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function zs(e,t,i,s,c,d){var m=2;if(s=e,typeof e=="function")oc(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case w:return Ir(i.children,c,d,t);case L:m=8,c|=8;break;case H:return e=sn(12,i,t,c|2),e.elementType=H,e.lanes=d,e;case Y:return e=sn(13,i,t,c),e.elementType=Y,e.lanes=d,e;case Q:return e=sn(19,i,t,c),e.elementType=Q,e.lanes=d,e;case ne:return _s(i,c,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:m=10;break e;case G:m=9;break e;case ee:m=11;break e;case te:m=14;break e;case ie:m=16,s=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=sn(m,i,t,c),t.elementType=e,t.type=s,t.lanes=d,t}function Ir(e,t,i,s){return e=sn(7,e,s,t),e.lanes=i,e}function _s(e,t,i,s){return e=sn(22,e,s,t),e.elementType=ne,e.lanes=i,e.stateNode={isHidden:!1},e}function sc(e,t,i){return e=sn(6,e,null,t),e.lanes=i,e}function ac(e,t,i){return t=sn(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function y0(e,t,i,s,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oa(0),this.expirationTimes=Oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oa(0),this.identifierPrefix=s,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function lc(e,t,i,s,c,d,m,S,T){return e=new y0(e,t,i,S,T),t===1?(t=1,d===!0&&(t|=8)):t=0,d=sn(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:s,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},wl(d),e}function b0(e,t,i){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:s==null?null:""+s,children:e,containerInfo:t,implementation:i}}function rf(e){if(!e)return Jn;e=e._reactInternals;e:{if(mr(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(Nt(i))return zd(e,i,t)}return t}function of(e,t,i,s,c,d,m,S,T){return e=lc(i,s,!0,e,c,d,m,S,T),e.context=rf(null),i=e.current,s=Ot(),c=sr(i),d=Fn(s,c),d.callback=t??null,nr(i,d,c),e.current.lanes=c,Ri(e,c,s),Ft(e,s),e}function $s(e,t,i,s){var c=t.current,d=Ot(),m=sr(c);return i=rf(i),t.context===null?t.context=i:t.pendingContext=i,t=Fn(d,m),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=nr(c,t,m),e!==null&&(yn(e,c,m,d),us(e,c,m)),m}function Os(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function cc(e,t){sf(e,t),(e=e.alternate)&&sf(e,t)}function w0(){return null}var af=typeof reportError=="function"?reportError:function(e){console.error(e)};function uc(e){this._internalRoot=e}As.prototype.render=uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));$s(e,t,null,null)},As.prototype.unmount=uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kr(function(){$s(null,e,null,null)}),t[On]=null}};function As(e){this._internalRoot=e}As.prototype.unstable_scheduleHydration=function(e){if(e){var t=Uu();e={blockedOn:null,target:e,priority:t};for(var i=0;i<qn.length&&t!==0&&t<qn[i].priority;i++);qn.splice(i,0,e),i===0&&Ku(e)}};function dc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lf(){}function C0(e,t,i,s,c){if(c){if(typeof s=="function"){var d=s;s=function(){var W=Os(m);d.call(W)}}var m=of(t,s,e,0,null,!1,!1,"",lf);return e._reactRootContainer=m,e[On]=m.current,Wi(e.nodeType===8?e.parentNode:e),kr(),m}for(;c=e.lastChild;)e.removeChild(c);if(typeof s=="function"){var S=s;s=function(){var W=Os(T);S.call(W)}}var T=lc(e,0,!1,null,null,!1,!1,"",lf);return e._reactRootContainer=T,e[On]=T.current,Wi(e.nodeType===8?e.parentNode:e),kr(function(){$s(t,T,i,s)}),T}function Ds(e,t,i,s,c){var d=i._reactRootContainer;if(d){var m=d;if(typeof c=="function"){var S=c;c=function(){var T=Os(m);S.call(T)}}$s(t,m,e,c)}else m=C0(i,t,e,c,s);return Os(m)}Bu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=Ti(t.pendingLanes);i!==0&&(Aa(t,i|1),Ft(t,ot()),(Oe&6)===0&&(oi=ot()+500,er()))}break;case 13:kr(function(){var s=Ln(e,1);if(s!==null){var c=Ot();yn(s,e,1,c)}}),cc(e,1)}},Na=function(e){if(e.tag===13){var t=Ln(e,134217728);if(t!==null){var i=Ot();yn(t,e,134217728,i)}cc(e,134217728)}},Wu=function(e){if(e.tag===13){var t=sr(e),i=Ln(e,t);if(i!==null){var s=Ot();yn(i,e,t,s)}cc(e,t)}},Uu=function(){return He},Hu=function(e,t){var i=He;try{return He=e,t()}finally{He=i}},Ra=function(e,t,i){switch(t){case"input":if(ht(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var s=i[t];if(s!==e&&s.form===e.form){var c=es(s);if(!c)throw Error(o(90));ze(s),ht(s,c)}}}break;case"textarea":Ge(e,i);break;case"select":t=i.value,t!=null&&We(e,!!i.multiple,t,!1)}},Ru=nc,Pu=kr;var k0={usingClientEntryPoint:!1,Events:[Vi,Kr,es,Iu,Tu,nc]},oo={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},S0={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$u(e),e===null?null:e.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||w0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ls.isDisabled&&Ls.supportsFiber)try{Ao=Ls.inject(S0),En=Ls}catch{}}return jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k0,jt.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dc(t))throw Error(o(200));return b0(e,t,null,i)},jt.createRoot=function(e,t){if(!dc(e))throw Error(o(299));var i=!1,s="",c=af;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lc(e,1,!1,null,null,i,!1,s,c),e[On]=t.current,Wi(e.nodeType===8?e.parentNode:e),new uc(t)},jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=$u(t),e=e===null?null:e.stateNode,e},jt.flushSync=function(e){return kr(e)},jt.hydrate=function(e,t,i){if(!Ns(t))throw Error(o(200));return Ds(null,e,t,!0,i)},jt.hydrateRoot=function(e,t,i){if(!dc(e))throw Error(o(405));var s=i!=null&&i.hydratedSources||null,c=!1,d="",m=af;if(i!=null&&(i.unstable_strictMode===!0&&(c=!0),i.identifierPrefix!==void 0&&(d=i.identifierPrefix),i.onRecoverableError!==void 0&&(m=i.onRecoverableError)),t=of(t,null,e,1,i??null,c,!1,d,m),e[On]=t.current,Wi(e),s)for(e=0;e<s.length;e++)i=s[e],c=i._getVersion,c=c(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,c]:t.mutableSourceEagerHydrationData.push(i,c);return new As(t)},jt.render=function(e,t,i){if(!Ns(t))throw Error(o(200));return Ds(null,e,t,!1,i)},jt.unmountComponentAtNode=function(e){if(!Ns(e))throw Error(o(40));return e._reactRootContainer?(kr(function(){Ds(null,null,e,!1,function(){e._reactRootContainer=null,e[On]=null})}),!0):!1},jt.unstable_batchedUpdates=nc,jt.unstable_renderSubtreeIntoContainer=function(e,t,i,s){if(!Ns(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Ds(e,t,i,!1,s)},jt.version="18.3.1-next-f1338f8080-20240426",jt}var gf;function Mm(){if(gf)return mc.exports;gf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),mc.exports=z0(),mc.exports}var vf;function _0(){if(vf)return Fs;vf=1;var n=Mm();return Fs.createRoot=n.createRoot,Fs.hydrateRoot=n.hydrateRoot,Fs}var $0=_0();const O0=Io($0),bo={black:"#000",white:"#fff"},ai={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},li={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},ci={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},ui={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},di={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},ao={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},A0={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function _r(n){let r="https://mui.com/production-error/?code="+n;for(let o=1;o<arguments.length;o+=1)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified MUI error #"+n+"; visit "+r+" for the full message."}const N0=Object.freeze(Object.defineProperty({__proto__:null,default:_r},Symbol.toStringTag,{value:"Module"})),vi="$$material";function C(){return C=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var a in o)({}).hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n},C.apply(null,arguments)}function me(n,r){if(n==null)return{};var o={};for(var a in n)if({}.hasOwnProperty.call(n,a)){if(r.indexOf(a)!==-1)continue;o[a]=n[a]}return o}function D0(n){if(n.sheet)return n.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===n)return document.styleSheets[r]}function L0(n){var r=document.createElement("style");return r.setAttribute("data-emotion",n.key),n.nonce!==void 0&&r.setAttribute("nonce",n.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var F0=function(){function n(o){var a=this;this._insertTag=function(l){var u;a.tags.length===0?a.insertionPoint?u=a.insertionPoint.nextSibling:a.prepend?u=a.container.firstChild:u=a.before:u=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(l,u),a.tags.push(l)},this.isSpeedy=o.speedy===void 0?!0:o.speedy,this.tags=[],this.ctr=0,this.nonce=o.nonce,this.key=o.key,this.container=o.container,this.prepend=o.prepend,this.insertionPoint=o.insertionPoint,this.before=null}var r=n.prototype;return r.hydrate=function(a){a.forEach(this._insertTag)},r.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(L0(this));var l=this.tags[this.tags.length-1];if(this.isSpeedy){var u=D0(l);try{u.insertRule(a,u.cssRules.length)}catch{}}else l.appendChild(document.createTextNode(a));this.ctr++},r.flush=function(){this.tags.forEach(function(a){var l;return(l=a.parentNode)==null?void 0:l.removeChild(a)}),this.tags=[],this.ctr=0},n}(),Pt="-ms-",Xs="-moz-",je="-webkit-",zm="comm",qc="rule",Yc="decl",j0="@import",_m="@keyframes",B0="@layer",W0=Math.abs,ia=String.fromCharCode,U0=Object.assign;function H0(n,r){return kt(n,0)^45?(((r<<2^kt(n,0))<<2^kt(n,1))<<2^kt(n,2))<<2^kt(n,3):0}function $m(n){return n.trim()}function V0(n,r){return(n=r.exec(n))?n[0]:n}function Be(n,r,o){return n.replace(r,o)}function $c(n,r){return n.indexOf(r)}function kt(n,r){return n.charCodeAt(r)|0}function wo(n,r,o){return n.slice(r,o)}function Mn(n){return n.length}function Xc(n){return n.length}function js(n,r){return r.push(n),n}function K0(n,r){return n.map(r).join("")}var oa=1,xi=1,Om=0,Bt=0,ut=0,Ci="";function sa(n,r,o,a,l,u,p){return{value:n,root:r,parent:o,type:a,props:l,children:u,line:oa,column:xi,length:p,return:""}}function lo(n,r){return U0(sa("",null,null,"",null,null,0),n,{length:-n.length},r)}function G0(){return ut}function q0(){return ut=Bt>0?kt(Ci,--Bt):0,xi--,ut===10&&(xi=1,oa--),ut}function Qt(){return ut=Bt<Om?kt(Ci,Bt++):0,xi++,ut===10&&(xi=1,oa++),ut}function _n(){return kt(Ci,Bt)}function Ks(){return Bt}function To(n,r){return wo(Ci,n,r)}function Co(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Am(n){return oa=xi=1,Om=Mn(Ci=n),Bt=0,[]}function Nm(n){return Ci="",n}function Gs(n){return $m(To(Bt-1,Oc(n===91?n+2:n===40?n+1:n)))}function Y0(n){for(;(ut=_n())&&ut<33;)Qt();return Co(n)>2||Co(ut)>3?"":" "}function X0(n,r){for(;--r&&Qt()&&!(ut<48||ut>102||ut>57&&ut<65||ut>70&&ut<97););return To(n,Ks()+(r<6&&_n()==32&&Qt()==32))}function Oc(n){for(;Qt();)switch(ut){case n:return Bt;case 34:case 39:n!==34&&n!==39&&Oc(ut);break;case 40:n===41&&Oc(n);break;case 92:Qt();break}return Bt}function Q0(n,r){for(;Qt()&&n+ut!==57;)if(n+ut===84&&_n()===47)break;return"/*"+To(r,Bt-1)+"*"+ia(n===47?n:Qt())}function Z0(n){for(;!Co(_n());)Qt();return To(n,Bt)}function J0(n){return Nm(qs("",null,null,null,[""],n=Am(n),0,[0],n))}function qs(n,r,o,a,l,u,p,f,h){for(var g=0,x=0,y=p,k=0,$=0,E=0,v=1,M=1,_=1,j=0,R="",z=l,I=u,F=a,w=R;M;)switch(E=j,j=Qt()){case 40:if(E!=108&&kt(w,y-1)==58){$c(w+=Be(Gs(j),"&","&\f"),"&\f")!=-1&&(_=-1);break}case 34:case 39:case 91:w+=Gs(j);break;case 9:case 10:case 13:case 32:w+=Y0(E);break;case 92:w+=X0(Ks()-1,7);continue;case 47:switch(_n()){case 42:case 47:js(ev(Q0(Qt(),Ks()),r,o),h);break;default:w+="/"}break;case 123*v:f[g++]=Mn(w)*_;case 125*v:case 59:case 0:switch(j){case 0:case 125:M=0;case 59+x:_==-1&&(w=Be(w,/\f/g,"")),$>0&&Mn(w)-y&&js($>32?yf(w+";",a,o,y-1):yf(Be(w," ","")+";",a,o,y-2),h);break;case 59:w+=";";default:if(js(F=xf(w,r,o,g,x,l,f,R,z=[],I=[],y),u),j===123)if(x===0)qs(w,r,F,F,z,u,y,f,I);else switch(k===99&&kt(w,3)===110?100:k){case 100:case 108:case 109:case 115:qs(n,F,F,a&&js(xf(n,F,F,0,0,l,f,R,l,z=[],y),I),l,I,y,f,a?z:I);break;default:qs(w,F,F,F,[""],I,0,f,I)}}g=x=$=0,v=_=1,R=w="",y=p;break;case 58:y=1+Mn(w),$=E;default:if(v<1){if(j==123)--v;else if(j==125&&v++==0&&q0()==125)continue}switch(w+=ia(j),j*v){case 38:_=x>0?1:(w+="\f",-1);break;case 44:f[g++]=(Mn(w)-1)*_,_=1;break;case 64:_n()===45&&(w+=Gs(Qt())),k=_n(),x=y=Mn(R=w+=Z0(Ks())),j++;break;case 45:E===45&&Mn(w)==2&&(v=0)}}return u}function xf(n,r,o,a,l,u,p,f,h,g,x){for(var y=l-1,k=l===0?u:[""],$=Xc(k),E=0,v=0,M=0;E<a;++E)for(var _=0,j=wo(n,y+1,y=W0(v=p[E])),R=n;_<$;++_)(R=$m(v>0?k[_]+" "+j:Be(j,/&\f/g,k[_])))&&(h[M++]=R);return sa(n,r,o,l===0?qc:f,h,g,x)}function ev(n,r,o){return sa(n,r,o,zm,ia(G0()),wo(n,2,-2),0)}function yf(n,r,o,a){return sa(n,r,o,Yc,wo(n,0,a),wo(n,a+1,-1),a)}function mi(n,r){for(var o="",a=Xc(n),l=0;l<a;l++)o+=r(n[l],l,n,r)||"";return o}function tv(n,r,o,a){switch(n.type){case B0:if(n.children.length)break;case j0:case Yc:return n.return=n.return||n.value;case zm:return"";case _m:return n.return=n.value+"{"+mi(n.children,a)+"}";case qc:n.value=n.props.join(",")}return Mn(o=mi(n.children,a))?n.return=n.value+"{"+o+"}":""}function nv(n){var r=Xc(n);return function(o,a,l,u){for(var p="",f=0;f<r;f++)p+=n[f](o,a,l,u)||"";return p}}function rv(n){return function(r){r.root||(r=r.return)&&n(r)}}function Dm(n){var r=Object.create(null);return function(o){return r[o]===void 0&&(r[o]=n(o)),r[o]}}var iv=function(r,o,a){for(var l=0,u=0;l=u,u=_n(),l===38&&u===12&&(o[a]=1),!Co(u);)Qt();return To(r,Bt)},ov=function(r,o){var a=-1,l=44;do switch(Co(l)){case 0:l===38&&_n()===12&&(o[a]=1),r[a]+=iv(Bt-1,o,a);break;case 2:r[a]+=Gs(l);break;case 4:if(l===44){r[++a]=_n()===58?"&\f":"",o[a]=r[a].length;break}default:r[a]+=ia(l)}while(l=Qt());return r},sv=function(r,o){return Nm(ov(Am(r),o))},bf=new WeakMap,av=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var o=r.value,a=r.parent,l=r.column===a.column&&r.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(r.props.length===1&&o.charCodeAt(0)!==58&&!bf.get(a))&&!l){bf.set(r,!0);for(var u=[],p=sv(o,u),f=a.props,h=0,g=0;h<p.length;h++)for(var x=0;x<f.length;x++,g++)r.props[g]=u[h]?p[h].replace(/&\f/g,f[x]):f[x]+" "+p[h]}}},lv=function(r){if(r.type==="decl"){var o=r.value;o.charCodeAt(0)===108&&o.charCodeAt(2)===98&&(r.return="",r.value="")}};function Lm(n,r){switch(H0(n,r)){case 5103:return je+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return je+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return je+n+Xs+n+Pt+n+n;case 6828:case 4268:return je+n+Pt+n+n;case 6165:return je+n+Pt+"flex-"+n+n;case 5187:return je+n+Be(n,/(\w+).+(:[^]+)/,je+"box-$1$2"+Pt+"flex-$1$2")+n;case 5443:return je+n+Pt+"flex-item-"+Be(n,/flex-|-self/,"")+n;case 4675:return je+n+Pt+"flex-line-pack"+Be(n,/align-content|flex-|-self/,"")+n;case 5548:return je+n+Pt+Be(n,"shrink","negative")+n;case 5292:return je+n+Pt+Be(n,"basis","preferred-size")+n;case 6060:return je+"box-"+Be(n,"-grow","")+je+n+Pt+Be(n,"grow","positive")+n;case 4554:return je+Be(n,/([^-])(transform)/g,"$1"+je+"$2")+n;case 6187:return Be(Be(Be(n,/(zoom-|grab)/,je+"$1"),/(image-set)/,je+"$1"),n,"")+n;case 5495:case 3959:return Be(n,/(image-set\([^]*)/,je+"$1$`$1");case 4968:return Be(Be(n,/(.+:)(flex-)?(.*)/,je+"box-pack:$3"+Pt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+je+n+n;case 4095:case 3583:case 4068:case 2532:return Be(n,/(.+)-inline(.+)/,je+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mn(n)-1-r>6)switch(kt(n,r+1)){case 109:if(kt(n,r+4)!==45)break;case 102:return Be(n,/(.+:)(.+)-([^]+)/,"$1"+je+"$2-$3$1"+Xs+(kt(n,r+3)==108?"$3":"$2-$3"))+n;case 115:return~$c(n,"stretch")?Lm(Be(n,"stretch","fill-available"),r)+n:n}break;case 4949:if(kt(n,r+1)!==115)break;case 6444:switch(kt(n,Mn(n)-3-(~$c(n,"!important")&&10))){case 107:return Be(n,":",":"+je)+n;case 101:return Be(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+je+(kt(n,14)===45?"inline-":"")+"box$3$1"+je+"$2$3$1"+Pt+"$2box$3")+n}break;case 5936:switch(kt(n,r+11)){case 114:return je+n+Pt+Be(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return je+n+Pt+Be(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return je+n+Pt+Be(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return je+n+Pt+n+n}return n}var cv=function(r,o,a,l){if(r.length>-1&&!r.return)switch(r.type){case Yc:r.return=Lm(r.value,r.length);break;case _m:return mi([lo(r,{value:Be(r.value,"@","@"+je)})],l);case qc:if(r.length)return K0(r.props,function(u){switch(V0(u,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return mi([lo(r,{props:[Be(u,/:(read-\w+)/,":"+Xs+"$1")]})],l);case"::placeholder":return mi([lo(r,{props:[Be(u,/:(plac\w+)/,":"+je+"input-$1")]}),lo(r,{props:[Be(u,/:(plac\w+)/,":"+Xs+"$1")]}),lo(r,{props:[Be(u,/:(plac\w+)/,Pt+"input-$1")]})],l)}return""})}},uv=[cv],Fm=function(r){var o=r.key;if(o==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(v){var M=v.getAttribute("data-emotion");M.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var l=r.stylisPlugins||uv,u={},p,f=[];p=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+o+' "]'),function(v){for(var M=v.getAttribute("data-emotion").split(" "),_=1;_<M.length;_++)u[M[_]]=!0;f.push(v)});var h,g=[av,lv];{var x,y=[tv,rv(function(v){x.insert(v)})],k=nv(g.concat(l,y)),$=function(M){return mi(J0(M),k)};h=function(M,_,j,R){x=j,$(M?M+"{"+_.styles+"}":_.styles),R&&(E.inserted[_.name]=!0)}}var E={key:o,sheet:new F0({key:o,container:p,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:u,registered:{},insert:h};return E.sheet.hydrate(f),E},vc={exports:{}},Ue={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf;function dv(){if(wf)return Ue;wf=1;var n=typeof Symbol=="function"&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,l=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,p=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,h=n?Symbol.for("react.async_mode"):60111,g=n?Symbol.for("react.concurrent_mode"):60111,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,k=n?Symbol.for("react.suspense_list"):60120,$=n?Symbol.for("react.memo"):60115,E=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,M=n?Symbol.for("react.fundamental"):60117,_=n?Symbol.for("react.responder"):60118,j=n?Symbol.for("react.scope"):60119;function R(I){if(typeof I=="object"&&I!==null){var F=I.$$typeof;switch(F){case r:switch(I=I.type,I){case h:case g:case a:case u:case l:case y:return I;default:switch(I=I&&I.$$typeof,I){case f:case x:case E:case $:case p:return I;default:return F}}case o:return F}}}function z(I){return R(I)===g}return Ue.AsyncMode=h,Ue.ConcurrentMode=g,Ue.ContextConsumer=f,Ue.ContextProvider=p,Ue.Element=r,Ue.ForwardRef=x,Ue.Fragment=a,Ue.Lazy=E,Ue.Memo=$,Ue.Portal=o,Ue.Profiler=u,Ue.StrictMode=l,Ue.Suspense=y,Ue.isAsyncMode=function(I){return z(I)||R(I)===h},Ue.isConcurrentMode=z,Ue.isContextConsumer=function(I){return R(I)===f},Ue.isContextProvider=function(I){return R(I)===p},Ue.isElement=function(I){return typeof I=="object"&&I!==null&&I.$$typeof===r},Ue.isForwardRef=function(I){return R(I)===x},Ue.isFragment=function(I){return R(I)===a},Ue.isLazy=function(I){return R(I)===E},Ue.isMemo=function(I){return R(I)===$},Ue.isPortal=function(I){return R(I)===o},Ue.isProfiler=function(I){return R(I)===u},Ue.isStrictMode=function(I){return R(I)===l},Ue.isSuspense=function(I){return R(I)===y},Ue.isValidElementType=function(I){return typeof I=="string"||typeof I=="function"||I===a||I===g||I===u||I===l||I===y||I===k||typeof I=="object"&&I!==null&&(I.$$typeof===E||I.$$typeof===$||I.$$typeof===p||I.$$typeof===f||I.$$typeof===x||I.$$typeof===M||I.$$typeof===_||I.$$typeof===j||I.$$typeof===v)},Ue.typeOf=R,Ue}var Cf;function pv(){return Cf||(Cf=1,vc.exports=dv()),vc.exports}var xc,kf;function fv(){if(kf)return xc;kf=1;var n=pv(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};u[n.ForwardRef]=a,u[n.Memo]=l;function p(E){return n.isMemo(E)?l:u[E.$$typeof]||r}var f=Object.defineProperty,h=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,x=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,k=Object.prototype;function $(E,v,M){if(typeof v!="string"){if(k){var _=y(v);_&&_!==k&&$(E,_,M)}var j=h(v);g&&(j=j.concat(g(v)));for(var R=p(E),z=p(v),I=0;I<j.length;++I){var F=j[I];if(!o[F]&&!(M&&M[F])&&!(z&&z[F])&&!(R&&R[F])){var w=x(v,F);try{f(E,F,w)}catch{}}}}return E}return xc=$,xc}fv();var mv=!0;function jm(n,r,o){var a="";return o.split(" ").forEach(function(l){n[l]!==void 0?r.push(n[l]+";"):l&&(a+=l+" ")}),a}var Qc=function(r,o,a){var l=r.key+"-"+o.name;(a===!1||mv===!1)&&r.registered[l]===void 0&&(r.registered[l]=o.styles)},Zc=function(r,o,a){Qc(r,o,a);var l=r.key+"-"+o.name;if(r.inserted[o.name]===void 0){var u=o;do r.insert(o===u?"."+l:"",u,r.sheet,!0),u=u.next;while(u!==void 0)}};function hv(n){for(var r=0,o,a=0,l=n.length;l>=4;++a,l-=4)o=n.charCodeAt(a)&255|(n.charCodeAt(++a)&255)<<8|(n.charCodeAt(++a)&255)<<16|(n.charCodeAt(++a)&255)<<24,o=(o&65535)*1540483477+((o>>>16)*59797<<16),o^=o>>>24,r=(o&65535)*1540483477+((o>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(l){case 3:r^=(n.charCodeAt(a+2)&255)<<16;case 2:r^=(n.charCodeAt(a+1)&255)<<8;case 1:r^=n.charCodeAt(a)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var gv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},vv=/[A-Z]|^ms/g,xv=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Bm=function(r){return r.charCodeAt(1)===45},Sf=function(r){return r!=null&&typeof r!="boolean"},yc=Dm(function(n){return Bm(n)?n:n.replace(vv,"-$&").toLowerCase()}),Ef=function(r,o){switch(r){case"animation":case"animationName":if(typeof o=="string")return o.replace(xv,function(a,l,u){return zn={name:l,styles:u,next:zn},l})}return gv[r]!==1&&!Bm(r)&&typeof o=="number"&&o!==0?o+"px":o};function ko(n,r,o){if(o==null)return"";var a=o;if(a.__emotion_styles!==void 0)return a;switch(typeof o){case"boolean":return"";case"object":{var l=o;if(l.anim===1)return zn={name:l.name,styles:l.styles,next:zn},l.name;var u=o;if(u.styles!==void 0){var p=u.next;if(p!==void 0)for(;p!==void 0;)zn={name:p.name,styles:p.styles,next:zn},p=p.next;var f=u.styles+";";return f}return yv(n,r,o)}case"function":{if(n!==void 0){var h=zn,g=o(n);return zn=h,ko(n,r,g)}break}}var x=o;if(r==null)return x;var y=r[x];return y!==void 0?y:x}function yv(n,r,o){var a="";if(Array.isArray(o))for(var l=0;l<o.length;l++)a+=ko(n,r,o[l])+";";else for(var u in o){var p=o[u];if(typeof p!="object"){var f=p;r!=null&&r[f]!==void 0?a+=u+"{"+r[f]+"}":Sf(f)&&(a+=yc(u)+":"+Ef(u,f)+";")}else if(Array.isArray(p)&&typeof p[0]=="string"&&(r==null||r[p[0]]===void 0))for(var h=0;h<p.length;h++)Sf(p[h])&&(a+=yc(u)+":"+Ef(u,p[h])+";");else{var g=ko(n,r,p);switch(u){case"animation":case"animationName":{a+=yc(u)+":"+g+";";break}default:a+=u+"{"+g+"}"}}}return a}var If=/label:\s*([^\s;{]+)\s*(;|$)/g,zn;function aa(n,r,o){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var a=!0,l="";zn=void 0;var u=n[0];if(u==null||u.raw===void 0)a=!1,l+=ko(o,r,u);else{var p=u;l+=p[0]}for(var f=1;f<n.length;f++)if(l+=ko(o,r,n[f]),a){var h=u;l+=h[f]}If.lastIndex=0;for(var g="",x;(x=If.exec(l))!==null;)g+="-"+x[1];var y=hv(l)+g;return{name:y,styles:l,next:zn}}var bv=function(r){return r()},Wm=_c.useInsertionEffect?_c.useInsertionEffect:!1,Um=Wm||bv,Tf=Wm||b.useLayoutEffect,Hm=b.createContext(typeof HTMLElement<"u"?Fm({key:"css"}):null),wv=Hm.Provider,Jc=function(r){return b.forwardRef(function(o,a){var l=b.useContext(Hm);return r(o,l,a)})},ki=b.createContext({}),eu={}.hasOwnProperty,Ac="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Cv=function(r,o){var a={};for(var l in o)eu.call(o,l)&&(a[l]=o[l]);return a[Ac]=r,a},kv=function(r){var o=r.cache,a=r.serialized,l=r.isStringTag;return Qc(o,a,l),Um(function(){return Zc(o,a,l)}),null},Sv=Jc(function(n,r,o){var a=n.css;typeof a=="string"&&r.registered[a]!==void 0&&(a=r.registered[a]);var l=n[Ac],u=[a],p="";typeof n.className=="string"?p=jm(r.registered,u,n.className):n.className!=null&&(p=n.className+" ");var f=aa(u,void 0,b.useContext(ki));p+=r.key+"-"+f.name;var h={};for(var g in n)eu.call(n,g)&&g!=="css"&&g!==Ac&&(h[g]=n[g]);return h.className=p,o&&(h.ref=o),b.createElement(b.Fragment,null,b.createElement(kv,{cache:r,serialized:f,isStringTag:typeof l=="string"}),b.createElement(l,h))}),Ev=Sv,Rf=function(r,o){var a=arguments;if(o==null||!eu.call(o,"css"))return b.createElement.apply(void 0,a);var l=a.length,u=new Array(l);u[0]=Ev,u[1]=Cv(r,o);for(var p=2;p<l;p++)u[p]=a[p];return b.createElement.apply(null,u)};(function(n){var r;r||(r=n.JSX||(n.JSX={}))})(Rf||(Rf={}));var Iv=Jc(function(n,r){var o=n.styles,a=aa([o],void 0,b.useContext(ki)),l=b.useRef();return Tf(function(){var u=r.key+"-global",p=new r.sheet.constructor({key:u,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),f=!1,h=document.querySelector('style[data-emotion="'+u+" "+a.name+'"]');return r.sheet.tags.length&&(p.before=r.sheet.tags[0]),h!==null&&(f=!0,h.setAttribute("data-emotion",u),p.hydrate([h])),l.current=[p,f],function(){p.flush()}},[r]),Tf(function(){var u=l.current,p=u[0],f=u[1];if(f){u[1]=!1;return}if(a.next!==void 0&&Zc(r,a.next,!0),p.tags.length){var h=p.tags[p.tags.length-1].nextElementSibling;p.before=h,p.flush()}r.insert("",a,p,!1)},[r,a.name]),null});function Vm(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return aa(r)}function la(){var n=Vm.apply(void 0,arguments),r="animation-"+n.name;return{name:r,styles:"@keyframes "+r+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Tv=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Rv=Dm(function(n){return Tv.test(n)||n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)<91}),Pv=Rv,Mv=function(r){return r!=="theme"},Pf=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?Pv:Mv},Mf=function(r,o,a){var l;if(o){var u=o.shouldForwardProp;l=r.__emotion_forwardProp&&u?function(p){return r.__emotion_forwardProp(p)&&u(p)}:u}return typeof l!="function"&&a&&(l=r.__emotion_forwardProp),l},zv=function(r){var o=r.cache,a=r.serialized,l=r.isStringTag;return Qc(o,a,l),Um(function(){return Zc(o,a,l)}),null},_v=function n(r,o){var a=r.__emotion_real===r,l=a&&r.__emotion_base||r,u,p;o!==void 0&&(u=o.label,p=o.target);var f=Mf(r,o,a),h=f||Pf(l),g=!h("as");return function(){var x=arguments,y=a&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(u!==void 0&&y.push("label:"+u+";"),x[0]==null||x[0].raw===void 0)y.push.apply(y,x);else{var k=x[0];y.push(k[0]);for(var $=x.length,E=1;E<$;E++)y.push(x[E],k[E])}var v=Jc(function(M,_,j){var R=g&&M.as||l,z="",I=[],F=M;if(M.theme==null){F={};for(var w in M)F[w]=M[w];F.theme=b.useContext(ki)}typeof M.className=="string"?z=jm(_.registered,I,M.className):M.className!=null&&(z=M.className+" ");var L=aa(y.concat(I),_.registered,F);z+=_.key+"-"+L.name,p!==void 0&&(z+=" "+p);var H=g&&f===void 0?Pf(R):h,U={};for(var G in M)g&&G==="as"||H(G)&&(U[G]=M[G]);return U.className=z,j&&(U.ref=j),b.createElement(b.Fragment,null,b.createElement(zv,{cache:_,serialized:L,isStringTag:typeof R=="string"}),b.createElement(R,U))});return v.displayName=u!==void 0?u:"Styled("+(typeof l=="string"?l:l.displayName||l.name||"Component")+")",v.defaultProps=r.defaultProps,v.__emotion_real=v,v.__emotion_base=l,v.__emotion_styles=y,v.__emotion_forwardProp=f,Object.defineProperty(v,"toString",{value:function(){return"."+p}}),v.withComponent=function(M,_){var j=n(M,C({},o,_,{shouldForwardProp:Mf(v,_,!0)}));return j.apply(void 0,y)},v}},$v=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Nc=_v.bind(null);$v.forEach(function(n){Nc[n]=Nc(n)});let Dc;typeof document=="object"&&(Dc=Fm({key:"css",prepend:!0}));function Ov(n){const{injectFirst:r,children:o}=n;return r&&Dc?N.jsx(wv,{value:Dc,children:o}):o}function Av(n){return n==null||Object.keys(n).length===0}function Km(n){const{styles:r,defaultTheme:o={}}=n,a=typeof r=="function"?l=>r(Av(l)?o:l):r;return N.jsx(Iv,{styles:a})}function Gm(n,r){return Nc(n,r)}const Nv=(n,r)=>{Array.isArray(n.__emotion_styles)&&(n.__emotion_styles=r(n.__emotion_styles))},Dv=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:Km,StyledEngineProvider:Ov,ThemeContext:ki,css:Vm,default:Gm,internal_processStyles:Nv,keyframes:la},Symbol.toStringTag,{value:"Module"}));function dr(n){if(typeof n!="object"||n===null)return!1;const r=Object.getPrototypeOf(n);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function qm(n){if(b.isValidElement(n)||!dr(n))return n;const r={};return Object.keys(n).forEach(o=>{r[o]=qm(n[o])}),r}function Zt(n,r,o={clone:!0}){const a=o.clone?C({},n):n;return dr(n)&&dr(r)&&Object.keys(r).forEach(l=>{b.isValidElement(r[l])?a[l]=r[l]:dr(r[l])&&Object.prototype.hasOwnProperty.call(n,l)&&dr(n[l])?a[l]=Zt(n[l],r[l],o):o.clone?a[l]=dr(r[l])?qm(r[l]):r[l]:a[l]=r[l]}),a}const Lv=Object.freeze(Object.defineProperty({__proto__:null,default:Zt,isPlainObject:dr},Symbol.toStringTag,{value:"Module"})),Fv=["values","unit","step"],jv=n=>{const r=Object.keys(n).map(o=>({key:o,val:n[o]}))||[];return r.sort((o,a)=>o.val-a.val),r.reduce((o,a)=>C({},o,{[a.key]:a.val}),{})};function Ym(n){const{values:r={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:o="px",step:a=5}=n,l=me(n,Fv),u=jv(r),p=Object.keys(u);function f(k){return`@media (min-width:${typeof r[k]=="number"?r[k]:k}${o})`}function h(k){return`@media (max-width:${(typeof r[k]=="number"?r[k]:k)-a/100}${o})`}function g(k,$){const E=p.indexOf($);return`@media (min-width:${typeof r[k]=="number"?r[k]:k}${o}) and (max-width:${(E!==-1&&typeof r[p[E]]=="number"?r[p[E]]:$)-a/100}${o})`}function x(k){return p.indexOf(k)+1<p.length?g(k,p[p.indexOf(k)+1]):f(k)}function y(k){const $=p.indexOf(k);return $===0?f(p[1]):$===p.length-1?h(p[$]):g(k,p[p.indexOf(k)+1]).replace("@media","@media not all and")}return C({keys:p,values:u,up:f,down:h,between:g,only:x,not:y,unit:o},l)}const Bv={borderRadius:4};function xo(n,r){return r?Zt(n,r,{clone:!1}):n}const tu={xs:0,sm:600,md:900,lg:1200,xl:1536},zf={keys:["xs","sm","md","lg","xl"],up:n=>`@media (min-width:${tu[n]}px)`};function cn(n,r,o){const a=n.theme||{};if(Array.isArray(r)){const u=a.breakpoints||zf;return r.reduce((p,f,h)=>(p[u.up(u.keys[h])]=o(r[h]),p),{})}if(typeof r=="object"){const u=a.breakpoints||zf;return Object.keys(r).reduce((p,f)=>{if(Object.keys(u.values||tu).indexOf(f)!==-1){const h=u.up(f);p[h]=o(r[f],f)}else{const h=f;p[h]=r[h]}return p},{})}return o(r)}function Wv(n={}){var r;return((r=n.keys)==null?void 0:r.reduce((a,l)=>{const u=n.up(l);return a[u]={},a},{}))||{}}function Uv(n,r){return n.reduce((o,a)=>{const l=o[a];return(!l||Object.keys(l).length===0)&&delete o[a],o},r)}function Hv(n,r){if(typeof n!="object")return{};const o={},a=Object.keys(r);return Array.isArray(n)?a.forEach((l,u)=>{u<n.length&&(o[l]=!0)}):a.forEach(l=>{n[l]!=null&&(o[l]=!0)}),o}function ca({values:n,breakpoints:r,base:o}){const a=o||Hv(n,r),l=Object.keys(a);if(l.length===0)return n;let u;return l.reduce((p,f,h)=>(Array.isArray(n)?(p[f]=n[h]!=null?n[h]:n[u],u=h):typeof n=="object"?(p[f]=n[f]!=null?n[f]:n[u],u=f):p[f]=n,p),{})}function ge(n){if(typeof n!="string")throw new Error(_r(7));return n.charAt(0).toUpperCase()+n.slice(1)}const Vv=Object.freeze(Object.defineProperty({__proto__:null,default:ge},Symbol.toStringTag,{value:"Module"}));function ua(n,r,o=!0){if(!r||typeof r!="string")return null;if(n&&n.vars&&o){const a=`vars.${r}`.split(".").reduce((l,u)=>l&&l[u]?l[u]:null,n);if(a!=null)return a}return r.split(".").reduce((a,l)=>a&&a[l]!=null?a[l]:null,n)}function Qs(n,r,o,a=o){let l;return typeof n=="function"?l=n(o):Array.isArray(n)?l=n[o]||a:l=ua(n,o)||a,r&&(l=r(l,a,n)),l}function lt(n){const{prop:r,cssProperty:o=n.prop,themeKey:a,transform:l}=n,u=p=>{if(p[r]==null)return null;const f=p[r],h=p.theme,g=ua(h,a)||{};return cn(p,f,y=>{let k=Qs(g,l,y);return y===k&&typeof y=="string"&&(k=Qs(g,l,`${r}${y==="default"?"":ge(y)}`,y)),o===!1?k:{[o]:k}})};return u.propTypes={},u.filterProps=[r],u}function Kv(n){const r={};return o=>(r[o]===void 0&&(r[o]=n(o)),r[o])}const Gv={m:"margin",p:"padding"},qv={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},_f={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Yv=Kv(n=>{if(n.length>2)if(_f[n])n=_f[n];else return[n];const[r,o]=n.split(""),a=Gv[r],l=qv[o]||"";return Array.isArray(l)?l.map(u=>a+u):[a+l]}),nu=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],ru=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...nu,...ru];function Ro(n,r,o,a){var l;const u=(l=ua(n,r,!1))!=null?l:o;return typeof u=="number"?p=>typeof p=="string"?p:u*p:Array.isArray(u)?p=>typeof p=="string"?p:u[p]:typeof u=="function"?u:()=>{}}function Xm(n){return Ro(n,"spacing",8)}function Po(n,r){if(typeof r=="string"||r==null)return r;const o=Math.abs(r),a=n(o);return r>=0?a:typeof a=="number"?-a:`-${a}`}function Xv(n,r){return o=>n.reduce((a,l)=>(a[l]=Po(r,o),a),{})}function Qv(n,r,o,a){if(r.indexOf(o)===-1)return null;const l=Yv(o),u=Xv(l,a),p=n[o];return cn(n,p,u)}function Qm(n,r){const o=Xm(n.theme);return Object.keys(n).map(a=>Qv(n,r,a,o)).reduce(xo,{})}function rt(n){return Qm(n,nu)}rt.propTypes={};rt.filterProps=nu;function it(n){return Qm(n,ru)}it.propTypes={};it.filterProps=ru;function Zv(n=8){if(n.mui)return n;const r=Xm({spacing:n}),o=(...a)=>(a.length===0?[1]:a).map(u=>{const p=r(u);return typeof p=="number"?`${p}px`:p}).join(" ");return o.mui=!0,o}function da(...n){const r=n.reduce((a,l)=>(l.filterProps.forEach(u=>{a[u]=l}),a),{}),o=a=>Object.keys(a).reduce((l,u)=>r[u]?xo(l,r[u](a)):l,{});return o.propTypes={},o.filterProps=n.reduce((a,l)=>a.concat(l.filterProps),[]),o}function ln(n){return typeof n!="number"?n:`${n}px solid`}function un(n,r){return lt({prop:n,themeKey:"borders",transform:r})}const Jv=un("border",ln),ex=un("borderTop",ln),tx=un("borderRight",ln),nx=un("borderBottom",ln),rx=un("borderLeft",ln),ix=un("borderColor"),ox=un("borderTopColor"),sx=un("borderRightColor"),ax=un("borderBottomColor"),lx=un("borderLeftColor"),cx=un("outline",ln),ux=un("outlineColor"),pa=n=>{if(n.borderRadius!==void 0&&n.borderRadius!==null){const r=Ro(n.theme,"shape.borderRadius",4),o=a=>({borderRadius:Po(r,a)});return cn(n,n.borderRadius,o)}return null};pa.propTypes={};pa.filterProps=["borderRadius"];da(Jv,ex,tx,nx,rx,ix,ox,sx,ax,lx,pa,cx,ux);const fa=n=>{if(n.gap!==void 0&&n.gap!==null){const r=Ro(n.theme,"spacing",8),o=a=>({gap:Po(r,a)});return cn(n,n.gap,o)}return null};fa.propTypes={};fa.filterProps=["gap"];const ma=n=>{if(n.columnGap!==void 0&&n.columnGap!==null){const r=Ro(n.theme,"spacing",8),o=a=>({columnGap:Po(r,a)});return cn(n,n.columnGap,o)}return null};ma.propTypes={};ma.filterProps=["columnGap"];const ha=n=>{if(n.rowGap!==void 0&&n.rowGap!==null){const r=Ro(n.theme,"spacing",8),o=a=>({rowGap:Po(r,a)});return cn(n,n.rowGap,o)}return null};ha.propTypes={};ha.filterProps=["rowGap"];const dx=lt({prop:"gridColumn"}),px=lt({prop:"gridRow"}),fx=lt({prop:"gridAutoFlow"}),mx=lt({prop:"gridAutoColumns"}),hx=lt({prop:"gridAutoRows"}),gx=lt({prop:"gridTemplateColumns"}),vx=lt({prop:"gridTemplateRows"}),xx=lt({prop:"gridTemplateAreas"}),yx=lt({prop:"gridArea"});da(fa,ma,ha,dx,px,fx,mx,hx,gx,vx,xx,yx);function hi(n,r){return r==="grey"?r:n}const bx=lt({prop:"color",themeKey:"palette",transform:hi}),wx=lt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:hi}),Cx=lt({prop:"backgroundColor",themeKey:"palette",transform:hi});da(bx,wx,Cx);function Xt(n){return n<=1&&n!==0?`${n*100}%`:n}const kx=lt({prop:"width",transform:Xt}),iu=n=>{if(n.maxWidth!==void 0&&n.maxWidth!==null){const r=o=>{var a,l;const u=((a=n.theme)==null||(a=a.breakpoints)==null||(a=a.values)==null?void 0:a[o])||tu[o];return u?((l=n.theme)==null||(l=l.breakpoints)==null?void 0:l.unit)!=="px"?{maxWidth:`${u}${n.theme.breakpoints.unit}`}:{maxWidth:u}:{maxWidth:Xt(o)}};return cn(n,n.maxWidth,r)}return null};iu.filterProps=["maxWidth"];const Sx=lt({prop:"minWidth",transform:Xt}),Ex=lt({prop:"height",transform:Xt}),Ix=lt({prop:"maxHeight",transform:Xt}),Tx=lt({prop:"minHeight",transform:Xt});lt({prop:"size",cssProperty:"width",transform:Xt});lt({prop:"size",cssProperty:"height",transform:Xt});const Rx=lt({prop:"boxSizing"});da(kx,iu,Sx,Ex,Ix,Tx,Rx);const Mo={border:{themeKey:"borders",transform:ln},borderTop:{themeKey:"borders",transform:ln},borderRight:{themeKey:"borders",transform:ln},borderBottom:{themeKey:"borders",transform:ln},borderLeft:{themeKey:"borders",transform:ln},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:ln},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:pa},color:{themeKey:"palette",transform:hi},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:hi},backgroundColor:{themeKey:"palette",transform:hi},p:{style:it},pt:{style:it},pr:{style:it},pb:{style:it},pl:{style:it},px:{style:it},py:{style:it},padding:{style:it},paddingTop:{style:it},paddingRight:{style:it},paddingBottom:{style:it},paddingLeft:{style:it},paddingX:{style:it},paddingY:{style:it},paddingInline:{style:it},paddingInlineStart:{style:it},paddingInlineEnd:{style:it},paddingBlock:{style:it},paddingBlockStart:{style:it},paddingBlockEnd:{style:it},m:{style:rt},mt:{style:rt},mr:{style:rt},mb:{style:rt},ml:{style:rt},mx:{style:rt},my:{style:rt},margin:{style:rt},marginTop:{style:rt},marginRight:{style:rt},marginBottom:{style:rt},marginLeft:{style:rt},marginX:{style:rt},marginY:{style:rt},marginInline:{style:rt},marginInlineStart:{style:rt},marginInlineEnd:{style:rt},marginBlock:{style:rt},marginBlockStart:{style:rt},marginBlockEnd:{style:rt},displayPrint:{cssProperty:!1,transform:n=>({"@media print":{display:n}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:fa},rowGap:{style:ha},columnGap:{style:ma},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Xt},maxWidth:{style:iu},minWidth:{transform:Xt},height:{transform:Xt},maxHeight:{transform:Xt},minHeight:{transform:Xt},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function Px(...n){const r=n.reduce((a,l)=>a.concat(Object.keys(l)),[]),o=new Set(r);return n.every(a=>o.size===Object.keys(a).length)}function Mx(n,r){return typeof n=="function"?n(r):n}function Zm(){function n(o,a,l,u){const p={[o]:a,theme:l},f=u[o];if(!f)return{[o]:a};const{cssProperty:h=o,themeKey:g,transform:x,style:y}=f;if(a==null)return null;if(g==="typography"&&a==="inherit")return{[o]:a};const k=ua(l,g)||{};return y?y(p):cn(p,a,E=>{let v=Qs(k,x,E);return E===v&&typeof E=="string"&&(v=Qs(k,x,`${o}${E==="default"?"":ge(E)}`,E)),h===!1?v:{[h]:v}})}function r(o){var a;const{sx:l,theme:u={}}=o||{};if(!l)return null;const p=(a=u.unstable_sxConfig)!=null?a:Mo;function f(h){let g=h;if(typeof h=="function")g=h(u);else if(typeof h!="object")return h;if(!g)return null;const x=Wv(u.breakpoints),y=Object.keys(x);let k=x;return Object.keys(g).forEach($=>{const E=Mx(g[$],u);if(E!=null)if(typeof E=="object")if(p[$])k=xo(k,n($,E,u,p));else{const v=cn({theme:u},E,M=>({[$]:M}));Px(v,E)?k[$]=r({sx:E,theme:u}):k=xo(k,v)}else k=xo(k,n($,E,u,p))}),Uv(y,k)}return Array.isArray(l)?l.map(f):f(l)}return r}const zo=Zm();zo.filterProps=["sx"];function Jm(n,r){const o=this;return o.vars&&typeof o.getColorSchemeSelector=="function"?{[o.getColorSchemeSelector(n).replace(/(\[[^\]]+\])/,"*:where($1)")]:r}:o.palette.mode===n?r:{}}const zx=["breakpoints","palette","spacing","shape"];function ou(n={},...r){const{breakpoints:o={},palette:a={},spacing:l,shape:u={}}=n,p=me(n,zx),f=Ym(o),h=Zv(l);let g=Zt({breakpoints:f,direction:"ltr",components:{},palette:C({mode:"light"},a),spacing:h,shape:C({},Bv,u)},p);return g.applyStyles=Jm,g=r.reduce((x,y)=>Zt(x,y),g),g.unstable_sxConfig=C({},Mo,p==null?void 0:p.unstable_sxConfig),g.unstable_sx=function(y){return zo({sx:y,theme:this})},g}const _x=Object.freeze(Object.defineProperty({__proto__:null,default:ou,private_createBreakpoints:Ym,unstable_applyStyles:Jm},Symbol.toStringTag,{value:"Module"}));function $x(n){return Object.keys(n).length===0}function su(n=null){const r=b.useContext(ki);return!r||$x(r)?n:r}const Ox=ou();function au(n=Ox){return su(n)}function Ax({styles:n,themeId:r,defaultTheme:o={}}){const a=au(o),l=typeof n=="function"?n(r&&a[r]||a):n;return N.jsx(Km,{styles:l})}const Nx=["sx"],Dx=n=>{var r,o;const a={systemProps:{},otherProps:{}},l=(r=n==null||(o=n.theme)==null?void 0:o.unstable_sxConfig)!=null?r:Mo;return Object.keys(n).forEach(u=>{l[u]?a.systemProps[u]=n[u]:a.otherProps[u]=n[u]}),a};function ga(n){const{sx:r}=n,o=me(n,Nx),{systemProps:a,otherProps:l}=Dx(o);let u;return Array.isArray(r)?u=[a,...r]:typeof r=="function"?u=(...p)=>{const f=r(...p);return dr(f)?C({},a,f):a}:u=C({},a,r),C({},l,{sx:u})}const Lx=Object.freeze(Object.defineProperty({__proto__:null,default:zo,extendSxProp:ga,unstable_createStyleFunctionSx:Zm,unstable_defaultSxConfig:Mo},Symbol.toStringTag,{value:"Module"})),$f=n=>n,Fx=()=>{let n=$f;return{configure(r){n=r},generate(r){return n(r)},reset(){n=$f}}},lu=Fx();function eh(n){var r,o,a="";if(typeof n=="string"||typeof n=="number")a+=n;else if(typeof n=="object")if(Array.isArray(n)){var l=n.length;for(r=0;r<l;r++)n[r]&&(o=eh(n[r]))&&(a&&(a+=" "),a+=o)}else for(o in n)n[o]&&(a&&(a+=" "),a+=o);return a}function ve(){for(var n,r,o=0,a="",l=arguments.length;o<l;o++)(n=arguments[o])&&(r=eh(n))&&(a&&(a+=" "),a+=r);return a}const jx=["className","component"];function Bx(n={}){const{themeId:r,defaultTheme:o,defaultClassName:a="MuiBox-root",generateClassName:l}=n,u=Gm("div",{shouldForwardProp:f=>f!=="theme"&&f!=="sx"&&f!=="as"})(zo);return b.forwardRef(function(h,g){const x=au(o),y=ga(h),{className:k,component:$="div"}=y,E=me(y,jx);return N.jsx(u,C({as:$,ref:g,className:ve(k,l?l(a):a),theme:r&&x[r]||x},E))})}const Wx={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function _e(n,r,o="Mui"){const a=Wx[r];return a?`${o}-${a}`:`${lu.generate(n)}-${r}`}function Me(n,r,o="Mui"){const a={};return r.forEach(l=>{a[l]=_e(n,l,o)}),a}var bc={exports:{}},Ke={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of;function Ux(){if(Of)return Ke;Of=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),p=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),k=Symbol.for("react.view_transition"),$=Symbol.for("react.client.reference");function E(v){if(typeof v=="object"&&v!==null){var M=v.$$typeof;switch(M){case n:switch(v=v.type,v){case o:case l:case a:case h:case g:case k:return v;default:switch(v=v&&v.$$typeof,v){case p:case f:case y:case x:return v;case u:return v;default:return M}}case r:return M}}}return Ke.ContextConsumer=u,Ke.ContextProvider=p,Ke.Element=n,Ke.ForwardRef=f,Ke.Fragment=o,Ke.Lazy=y,Ke.Memo=x,Ke.Portal=r,Ke.Profiler=l,Ke.StrictMode=a,Ke.Suspense=h,Ke.SuspenseList=g,Ke.isContextConsumer=function(v){return E(v)===u},Ke.isContextProvider=function(v){return E(v)===p},Ke.isElement=function(v){return typeof v=="object"&&v!==null&&v.$$typeof===n},Ke.isForwardRef=function(v){return E(v)===f},Ke.isFragment=function(v){return E(v)===o},Ke.isLazy=function(v){return E(v)===y},Ke.isMemo=function(v){return E(v)===x},Ke.isPortal=function(v){return E(v)===r},Ke.isProfiler=function(v){return E(v)===l},Ke.isStrictMode=function(v){return E(v)===a},Ke.isSuspense=function(v){return E(v)===h},Ke.isSuspenseList=function(v){return E(v)===g},Ke.isValidElementType=function(v){return typeof v=="string"||typeof v=="function"||v===o||v===l||v===a||v===h||v===g||typeof v=="object"&&v!==null&&(v.$$typeof===y||v.$$typeof===x||v.$$typeof===p||v.$$typeof===u||v.$$typeof===f||v.$$typeof===$||v.getModuleId!==void 0)},Ke.typeOf=E,Ke}var Af;function Hx(){return Af||(Af=1,bc.exports=Ux()),bc.exports}var Nf=Hx();const Vx=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function th(n){const r=`${n}`.match(Vx);return r&&r[1]||""}function nh(n,r=""){return n.displayName||n.name||th(n)||r}function Df(n,r,o){const a=nh(r);return n.displayName||(a!==""?`${o}(${a})`:o)}function Kx(n){if(n!=null){if(typeof n=="string")return n;if(typeof n=="function")return nh(n,"Component");if(typeof n=="object")switch(n.$$typeof){case Nf.ForwardRef:return Df(n,n.render,"ForwardRef");case Nf.Memo:return Df(n,n.type,"memo");default:return}}}const Gx=Object.freeze(Object.defineProperty({__proto__:null,default:Kx,getFunctionName:th},Symbol.toStringTag,{value:"Module"}));function So(n,r){const o=C({},r);return Object.keys(n).forEach(a=>{if(a.toString().match(/^(components|slots)$/))o[a]=C({},n[a],o[a]);else if(a.toString().match(/^(componentsProps|slotProps)$/)){const l=n[a]||{},u=r[a];o[a]={},!u||!Object.keys(u)?o[a]=l:!l||!Object.keys(l)?o[a]=u:(o[a]=C({},u),Object.keys(l).forEach(p=>{o[a][p]=So(l[p],u[p])}))}else o[a]===void 0&&(o[a]=n[a])}),o}function qx(n){const{theme:r,name:o,props:a}=n;return!r||!r.components||!r.components[o]||!r.components[o].defaultProps?a:So(r.components[o].defaultProps,a)}const Cn=typeof window<"u"?b.useLayoutEffect:b.useEffect;function Yx(n,r,o,a,l){const[u,p]=b.useState(()=>l&&o?o(n).matches:a?a(n).matches:r);return Cn(()=>{let f=!0;if(!o)return;const h=o(n),g=()=>{f&&p(h.matches)};return g(),h.addListener(g),()=>{f=!1,h.removeListener(g)}},[n,o]),u}const rh=b.useSyncExternalStore;function Xx(n,r,o,a,l){const u=b.useCallback(()=>r,[r]),p=b.useMemo(()=>{if(l&&o)return()=>o(n).matches;if(a!==null){const{matches:x}=a(n);return()=>x}return u},[u,n,a,l,o]),[f,h]=b.useMemo(()=>{if(o===null)return[u,()=>()=>{}];const x=o(n);return[()=>x.matches,y=>(x.addListener(y),()=>{x.removeListener(y)})]},[u,o,n]);return rh(h,f,p)}function Qx(n,r={}){const o=su(),a=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:l=!1,matchMedia:u=a?window.matchMedia:null,ssrMatchMedia:p=null,noSsr:f=!1}=qx({name:"MuiUseMediaQuery",props:r,theme:o});let h=typeof n=="function"?n(o):n;return h=h.replace(/^@media( ?)/m,""),(rh!==void 0?Xx:Yx)(h,l,u,p,f)}function Zx(n,r=Number.MIN_SAFE_INTEGER,o=Number.MAX_SAFE_INTEGER){return Math.max(r,Math.min(n,o))}const Jx=Object.freeze(Object.defineProperty({__proto__:null,default:Zx},Symbol.toStringTag,{value:"Module"}));function Lc(...n){return n.reduce((r,o)=>o==null?r:function(...l){r.apply(this,l),o.apply(this,l)},()=>{})}function va(n,r=166){let o;function a(...l){const u=()=>{n.apply(this,l)};clearTimeout(o),o=setTimeout(u,r)}return a.clear=()=>{clearTimeout(o)},a}function ey(n,r){return()=>null}function Ys(n,r){var o,a;return b.isValidElement(n)&&r.indexOf((o=n.type.muiName)!=null?o:(a=n.type)==null||(a=a._payload)==null||(a=a.value)==null?void 0:a.muiName)!==-1}function St(n){return n&&n.ownerDocument||document}function $n(n){return St(n).defaultView||window}function ty(n,r){return()=>null}function Zs(n,r){typeof n=="function"?n(r):n&&(n.current=r)}let Lf=0;function ny(n){const[r,o]=b.useState(n),a=n||r;return b.useEffect(()=>{r==null&&(Lf+=1,o(`mui-${Lf}`))},[r]),a}const Ff=_c.useId;function cu(n){if(Ff!==void 0){const r=Ff();return n??r}return ny(n)}function ry(n,r,o,a,l){return null}function Fc({controlled:n,default:r,name:o,state:a="value"}){const{current:l}=b.useRef(n!==void 0),[u,p]=b.useState(r),f=l?n:u,h=b.useCallback(g=>{l||p(g)},[]);return[f,h]}function wn(n){const r=b.useRef(n);return Cn(()=>{r.current=n}),b.useRef((...o)=>(0,r.current)(...o)).current}function mt(...n){return b.useMemo(()=>n.every(r=>r==null)?null:r=>{n.forEach(o=>{Zs(o,r)})},n)}const jf={};function iy(n,r){const o=b.useRef(jf);return o.current===jf&&(o.current=n(r)),o}const oy=[];function sy(n){b.useEffect(n,oy)}class xa{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new xa}start(r,o){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,o()},r)}}function uu(){const n=iy(xa.create).current;return sy(n.disposeEffect),n}let ya=!0,jc=!1;const ay=new xa,ly={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function cy(n){const{type:r,tagName:o}=n;return!!(o==="INPUT"&&ly[r]&&!n.readOnly||o==="TEXTAREA"&&!n.readOnly||n.isContentEditable)}function uy(n){n.metaKey||n.altKey||n.ctrlKey||(ya=!0)}function wc(){ya=!1}function dy(){this.visibilityState==="hidden"&&jc&&(ya=!0)}function py(n){n.addEventListener("keydown",uy,!0),n.addEventListener("mousedown",wc,!0),n.addEventListener("pointerdown",wc,!0),n.addEventListener("touchstart",wc,!0),n.addEventListener("visibilitychange",dy,!0)}function fy(n){const{target:r}=n;try{return r.matches(":focus-visible")}catch{}return ya||cy(r)}function ih(){const n=b.useCallback(l=>{l!=null&&py(l.ownerDocument)},[]),r=b.useRef(!1);function o(){return r.current?(jc=!0,ay.start(100,()=>{jc=!1}),r.current=!1,!0):!1}function a(l){return fy(l)?(r.current=!0,!0):!1}return{isFocusVisibleRef:r,onFocus:a,onBlur:o,ref:n}}function oh(n){const r=n.documentElement.clientWidth;return Math.abs(window.innerWidth-r)}function Ae(n,r,o=void 0){const a={};return Object.keys(n).forEach(l=>{a[l]=n[l].reduce((u,p)=>{if(p){const f=r(p);f!==""&&u.push(f),o&&o[p]&&u.push(o[p])}return u},[]).join(" ")}),a}function Js(n){return typeof n=="string"}function my(n,r,o){return n===void 0||Js(n)?r:C({},r,{ownerState:C({},r.ownerState,o)})}function ea(n,r=[]){if(n===void 0)return{};const o={};return Object.keys(n).filter(a=>a.match(/^on[A-Z]/)&&typeof n[a]=="function"&&!r.includes(a)).forEach(a=>{o[a]=n[a]}),o}function Bf(n){if(n===void 0)return{};const r={};return Object.keys(n).filter(o=>!(o.match(/^on[A-Z]/)&&typeof n[o]=="function")).forEach(o=>{r[o]=n[o]}),r}function hy(n){const{getSlotProps:r,additionalProps:o,externalSlotProps:a,externalForwardedProps:l,className:u}=n;if(!r){const $=ve(o==null?void 0:o.className,u,l==null?void 0:l.className,a==null?void 0:a.className),E=C({},o==null?void 0:o.style,l==null?void 0:l.style,a==null?void 0:a.style),v=C({},o,l,a);return $.length>0&&(v.className=$),Object.keys(E).length>0&&(v.style=E),{props:v,internalRef:void 0}}const p=ea(C({},l,a)),f=Bf(a),h=Bf(l),g=r(p),x=ve(g==null?void 0:g.className,o==null?void 0:o.className,u,l==null?void 0:l.className,a==null?void 0:a.className),y=C({},g==null?void 0:g.style,o==null?void 0:o.style,l==null?void 0:l.style,a==null?void 0:a.style),k=C({},g,o,h,f);return x.length>0&&(k.className=x),Object.keys(y).length>0&&(k.style=y),{props:k,internalRef:g.ref}}function gy(n,r,o){return typeof n=="function"?n(r,o):n}const vy=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function $r(n){var r;const{elementType:o,externalSlotProps:a,ownerState:l,skipResolvingSlotProps:u=!1}=n,p=me(n,vy),f=u?{}:gy(a,l),{props:h,internalRef:g}=hy(C({},p,{externalSlotProps:f})),x=mt(g,f==null?void 0:f.ref,(r=n.additionalProps)==null?void 0:r.ref);return my(o,C({},h,{ref:x}),l)}function Or(n){if(parseInt(b.version,10)>=19){var r;return(n==null||(r=n.props)==null?void 0:r.ref)||null}return(n==null?void 0:n.ref)||null}const sh=b.createContext(null);function ah(){return b.useContext(sh)}const xy=typeof Symbol=="function"&&Symbol.for,yy=xy?Symbol.for("mui.nested"):"__THEME_NESTED__";function by(n,r){return typeof r=="function"?r(n):C({},n,r)}function wy(n){const{children:r,theme:o}=n,a=ah(),l=b.useMemo(()=>{const u=a===null?o:by(a,o);return u!=null&&(u[yy]=a!==null),u},[o,a]);return N.jsx(sh.Provider,{value:l,children:r})}const Cy=["value"],lh=b.createContext();function ky(n){let{value:r}=n,o=me(n,Cy);return N.jsx(lh.Provider,C({value:r??!0},o))}const ch=()=>{const n=b.useContext(lh);return n??!1},uh=b.createContext(void 0);function Sy({value:n,children:r}){return N.jsx(uh.Provider,{value:n,children:r})}function Ey(n){const{theme:r,name:o,props:a}=n;if(!r||!r.components||!r.components[o])return a;const l=r.components[o];return l.defaultProps?So(l.defaultProps,a):!l.styleOverrides&&!l.variants?So(l,a):a}function Iy({props:n,name:r}){const o=b.useContext(uh);return Ey({props:n,name:r,theme:{components:o}})}const Wf={};function Uf(n,r,o,a=!1){return b.useMemo(()=>{const l=n&&r[n]||r;if(typeof o=="function"){const u=o(l),p=n?C({},r,{[n]:u}):u;return a?()=>p:p}return n?C({},r,{[n]:o}):C({},r,o)},[n,r,o,a])}function Ty(n){const{children:r,theme:o,themeId:a}=n,l=su(Wf),u=ah()||Wf,p=Uf(a,l,o),f=Uf(a,u,o,!0),h=p.direction==="rtl";return N.jsx(wy,{theme:f,children:N.jsx(ki.Provider,{value:p,children:N.jsx(ky,{value:h,children:N.jsx(Sy,{value:p==null?void 0:p.components,children:r})})})})}function Ry(n,r){return C({toolbar:{minHeight:56,[n.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[n.up("sm")]:{minHeight:64}}},r)}var tt={},Cc={exports:{}},Hf;function du(){return Hf||(Hf=1,function(n){function r(o){return o&&o.__esModule?o:{default:o}}n.exports=r,n.exports.__esModule=!0,n.exports.default=n.exports}(Cc)),Cc.exports}const Py=Un(N0),My=Un(Jx);var Vf;function zy(){if(Vf)return tt;Vf=1;var n=du();Object.defineProperty(tt,"__esModule",{value:!0}),tt.alpha=E,tt.blend=F,tt.colorChannel=void 0,tt.darken=M,tt.decomposeColor=p,tt.emphasize=z,tt.getContrastRatio=$,tt.getLuminance=k,tt.hexToRgb=l,tt.hslToRgb=y,tt.lighten=j,tt.private_safeAlpha=v,tt.private_safeColorChannel=void 0,tt.private_safeDarken=_,tt.private_safeEmphasize=I,tt.private_safeLighten=R,tt.recomposeColor=g,tt.rgbToHex=x;var r=n(Py),o=n(My);function a(w,L=0,H=1){return(0,o.default)(w,L,H)}function l(w){w=w.slice(1);const L=new RegExp(`.{1,${w.length>=6?2:1}}`,"g");let H=w.match(L);return H&&H[0].length===1&&(H=H.map(U=>U+U)),H?`rgb${H.length===4?"a":""}(${H.map((U,G)=>G<3?parseInt(U,16):Math.round(parseInt(U,16)/255*1e3)/1e3).join(", ")})`:""}function u(w){const L=w.toString(16);return L.length===1?`0${L}`:L}function p(w){if(w.type)return w;if(w.charAt(0)==="#")return p(l(w));const L=w.indexOf("("),H=w.substring(0,L);if(["rgb","rgba","hsl","hsla","color"].indexOf(H)===-1)throw new Error((0,r.default)(9,w));let U=w.substring(L+1,w.length-1),G;if(H==="color"){if(U=U.split(" "),G=U.shift(),U.length===4&&U[3].charAt(0)==="/"&&(U[3]=U[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(G)===-1)throw new Error((0,r.default)(10,G))}else U=U.split(",");return U=U.map(ee=>parseFloat(ee)),{type:H,values:U,colorSpace:G}}const f=w=>{const L=p(w);return L.values.slice(0,3).map((H,U)=>L.type.indexOf("hsl")!==-1&&U!==0?`${H}%`:H).join(" ")};tt.colorChannel=f;const h=(w,L)=>{try{return f(w)}catch{return w}};tt.private_safeColorChannel=h;function g(w){const{type:L,colorSpace:H}=w;let{values:U}=w;return L.indexOf("rgb")!==-1?U=U.map((G,ee)=>ee<3?parseInt(G,10):G):L.indexOf("hsl")!==-1&&(U[1]=`${U[1]}%`,U[2]=`${U[2]}%`),L.indexOf("color")!==-1?U=`${H} ${U.join(" ")}`:U=`${U.join(", ")}`,`${L}(${U})`}function x(w){if(w.indexOf("#")===0)return w;const{values:L}=p(w);return`#${L.map((H,U)=>u(U===3?Math.round(255*H):H)).join("")}`}function y(w){w=p(w);const{values:L}=w,H=L[0],U=L[1]/100,G=L[2]/100,ee=U*Math.min(G,1-G),Y=(ie,ne=(ie+H/30)%12)=>G-ee*Math.max(Math.min(ne-3,9-ne,1),-1);let Q="rgb";const te=[Math.round(Y(0)*255),Math.round(Y(8)*255),Math.round(Y(4)*255)];return w.type==="hsla"&&(Q+="a",te.push(L[3])),g({type:Q,values:te})}function k(w){w=p(w);let L=w.type==="hsl"||w.type==="hsla"?p(y(w)).values:w.values;return L=L.map(H=>(w.type!=="color"&&(H/=255),H<=.03928?H/12.92:((H+.055)/1.055)**2.4)),Number((.2126*L[0]+.7152*L[1]+.0722*L[2]).toFixed(3))}function $(w,L){const H=k(w),U=k(L);return(Math.max(H,U)+.05)/(Math.min(H,U)+.05)}function E(w,L){return w=p(w),L=a(L),(w.type==="rgb"||w.type==="hsl")&&(w.type+="a"),w.type==="color"?w.values[3]=`/${L}`:w.values[3]=L,g(w)}function v(w,L,H){try{return E(w,L)}catch{return w}}function M(w,L){if(w=p(w),L=a(L),w.type.indexOf("hsl")!==-1)w.values[2]*=1-L;else if(w.type.indexOf("rgb")!==-1||w.type.indexOf("color")!==-1)for(let H=0;H<3;H+=1)w.values[H]*=1-L;return g(w)}function _(w,L,H){try{return M(w,L)}catch{return w}}function j(w,L){if(w=p(w),L=a(L),w.type.indexOf("hsl")!==-1)w.values[2]+=(100-w.values[2])*L;else if(w.type.indexOf("rgb")!==-1)for(let H=0;H<3;H+=1)w.values[H]+=(255-w.values[H])*L;else if(w.type.indexOf("color")!==-1)for(let H=0;H<3;H+=1)w.values[H]+=(1-w.values[H])*L;return g(w)}function R(w,L,H){try{return j(w,L)}catch{return w}}function z(w,L=.15){return k(w)>.5?M(w,L):j(w,L)}function I(w,L,H){try{return z(w,L)}catch{return w}}function F(w,L,H,U=1){const G=(te,ie)=>Math.round((te**(1/U)*(1-H)+ie**(1/U)*H)**U),ee=p(w),Y=p(L),Q=[G(ee.values[0],Y.values[0]),G(ee.values[1],Y.values[1]),G(ee.values[2],Y.values[2])];return g({type:"rgb",values:Q})}return tt}var at=zy();const _y=["mode","contrastThreshold","tonalOffset"],Kf={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:bo.white,default:bo.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},kc={text:{primary:bo.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:bo.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Gf(n,r,o,a){const l=a.light||a,u=a.dark||a*1.5;n[r]||(n.hasOwnProperty(o)?n[r]=n[o]:r==="light"?n.light=at.lighten(n.main,l):r==="dark"&&(n.dark=at.darken(n.main,u)))}function $y(n="light"){return n==="dark"?{main:ci[200],light:ci[50],dark:ci[400]}:{main:ci[700],light:ci[400],dark:ci[800]}}function Oy(n="light"){return n==="dark"?{main:li[200],light:li[50],dark:li[400]}:{main:li[500],light:li[300],dark:li[700]}}function Ay(n="light"){return n==="dark"?{main:ai[500],light:ai[300],dark:ai[700]}:{main:ai[700],light:ai[400],dark:ai[800]}}function Ny(n="light"){return n==="dark"?{main:ui[400],light:ui[300],dark:ui[700]}:{main:ui[700],light:ui[500],dark:ui[900]}}function Dy(n="light"){return n==="dark"?{main:di[400],light:di[300],dark:di[700]}:{main:di[800],light:di[500],dark:di[900]}}function Ly(n="light"){return n==="dark"?{main:ao[400],light:ao[300],dark:ao[700]}:{main:"#ed6c02",light:ao[500],dark:ao[900]}}function Fy(n){const{mode:r="light",contrastThreshold:o=3,tonalOffset:a=.2}=n,l=me(n,_y),u=n.primary||$y(r),p=n.secondary||Oy(r),f=n.error||Ay(r),h=n.info||Ny(r),g=n.success||Dy(r),x=n.warning||Ly(r);function y(v){return at.getContrastRatio(v,kc.text.primary)>=o?kc.text.primary:Kf.text.primary}const k=({color:v,name:M,mainShade:_=500,lightShade:j=300,darkShade:R=700})=>{if(v=C({},v),!v.main&&v[_]&&(v.main=v[_]),!v.hasOwnProperty("main"))throw new Error(_r(11,M?` (${M})`:"",_));if(typeof v.main!="string")throw new Error(_r(12,M?` (${M})`:"",JSON.stringify(v.main)));return Gf(v,"light",j,a),Gf(v,"dark",R,a),v.contrastText||(v.contrastText=y(v.main)),v},$={dark:kc,light:Kf};return Zt(C({common:C({},bo),mode:r,primary:k({color:u,name:"primary"}),secondary:k({color:p,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:k({color:f,name:"error"}),warning:k({color:x,name:"warning"}),info:k({color:h,name:"info"}),success:k({color:g,name:"success"}),grey:A0,contrastThreshold:o,getContrastText:y,augmentColor:k,tonalOffset:a},$[r]),l)}const jy=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function By(n){return Math.round(n*1e5)/1e5}const qf={textTransform:"uppercase"},Yf='"Roboto", "Helvetica", "Arial", sans-serif';function Wy(n,r){const o=typeof r=="function"?r(n):r,{fontFamily:a=Yf,fontSize:l=14,fontWeightLight:u=300,fontWeightRegular:p=400,fontWeightMedium:f=500,fontWeightBold:h=700,htmlFontSize:g=16,allVariants:x,pxToRem:y}=o,k=me(o,jy),$=l/14,E=y||(_=>`${_/g*$}rem`),v=(_,j,R,z,I)=>C({fontFamily:a,fontWeight:_,fontSize:E(j),lineHeight:R},a===Yf?{letterSpacing:`${By(z/j)}em`}:{},I,x),M={h1:v(u,96,1.167,-1.5),h2:v(u,60,1.2,-.5),h3:v(p,48,1.167,0),h4:v(p,34,1.235,.25),h5:v(p,24,1.334,0),h6:v(f,20,1.6,.15),subtitle1:v(p,16,1.75,.15),subtitle2:v(f,14,1.57,.1),body1:v(p,16,1.5,.15),body2:v(p,14,1.43,.15),button:v(f,14,1.75,.4,qf),caption:v(p,12,1.66,.4),overline:v(p,12,2.66,1,qf),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Zt(C({htmlFontSize:g,pxToRem:E,fontFamily:a,fontSize:l,fontWeightLight:u,fontWeightRegular:p,fontWeightMedium:f,fontWeightBold:h},M),k,{clone:!1})}const Uy=.2,Hy=.14,Vy=.12;function Ze(...n){return[`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${Uy})`,`${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${Hy})`,`${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${Vy})`].join(",")}const Ky=["none",Ze(0,2,1,-1,0,1,1,0,0,1,3,0),Ze(0,3,1,-2,0,2,2,0,0,1,5,0),Ze(0,3,3,-2,0,3,4,0,0,1,8,0),Ze(0,2,4,-1,0,4,5,0,0,1,10,0),Ze(0,3,5,-1,0,5,8,0,0,1,14,0),Ze(0,3,5,-1,0,6,10,0,0,1,18,0),Ze(0,4,5,-2,0,7,10,1,0,2,16,1),Ze(0,5,5,-3,0,8,10,1,0,3,14,2),Ze(0,5,6,-3,0,9,12,1,0,3,16,2),Ze(0,6,6,-3,0,10,14,1,0,4,18,3),Ze(0,6,7,-4,0,11,15,1,0,4,20,3),Ze(0,7,8,-4,0,12,17,2,0,5,22,4),Ze(0,7,8,-4,0,13,19,2,0,5,24,4),Ze(0,7,9,-4,0,14,21,2,0,5,26,4),Ze(0,8,9,-5,0,15,22,2,0,6,28,5),Ze(0,8,10,-5,0,16,24,2,0,6,30,5),Ze(0,8,11,-5,0,17,26,2,0,6,32,5),Ze(0,9,11,-5,0,18,28,2,0,7,34,6),Ze(0,9,12,-6,0,19,29,2,0,7,36,6),Ze(0,10,13,-6,0,20,31,3,0,8,38,7),Ze(0,10,13,-6,0,21,33,3,0,8,40,7),Ze(0,10,14,-6,0,22,35,3,0,8,42,7),Ze(0,11,14,-7,0,23,36,3,0,9,44,8),Ze(0,11,15,-7,0,24,38,3,0,9,46,8)],Gy=["duration","easing","delay"],qy={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Yy={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Xf(n){return`${Math.round(n)}ms`}function Xy(n){if(!n)return 0;const r=n/36;return Math.round((4+15*r**.25+r/5)*10)}function Qy(n){const r=C({},qy,n.easing),o=C({},Yy,n.duration);return C({getAutoHeightDuration:Xy,create:(l=["all"],u={})=>{const{duration:p=o.standard,easing:f=r.easeInOut,delay:h=0}=u;return me(u,Gy),(Array.isArray(l)?l:[l]).map(g=>`${g} ${typeof p=="string"?p:Xf(p)} ${f} ${typeof h=="string"?h:Xf(h)}`).join(",")}},n,{easing:r,duration:o})}const Zy={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Jy=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function pu(n={},...r){const{mixins:o={},palette:a={},transitions:l={},typography:u={}}=n,p=me(n,Jy);if(n.vars&&n.generateCssVars===void 0)throw new Error(_r(18));const f=Fy(a),h=ou(n);let g=Zt(h,{mixins:Ry(h.breakpoints,o),palette:f,shadows:Ky.slice(),typography:Wy(f,u),transitions:Qy(l),zIndex:C({},Zy)});return g=Zt(g,p),g=r.reduce((x,y)=>Zt(x,y),g),g.unstable_sxConfig=C({},Mo,p==null?void 0:p.unstable_sxConfig),g.unstable_sx=function(y){return zo({sx:y,theme:this})},g}const fu=pu();function Hn(){const n=au(fu);return n[vi]||n}var Tr={},Sc={exports:{}},Qf;function e1(){return Qf||(Qf=1,function(n){function r(){return n.exports=r=Object.assign?Object.assign.bind():function(o){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var u in l)({}).hasOwnProperty.call(l,u)&&(o[u]=l[u])}return o},n.exports.__esModule=!0,n.exports.default=n.exports,r.apply(null,arguments)}n.exports=r,n.exports.__esModule=!0,n.exports.default=n.exports}(Sc)),Sc.exports}var Ec={exports:{}},Zf;function t1(){return Zf||(Zf=1,function(n){function r(o,a){if(o==null)return{};var l={};for(var u in o)if({}.hasOwnProperty.call(o,u)){if(a.indexOf(u)!==-1)continue;l[u]=o[u]}return l}n.exports=r,n.exports.__esModule=!0,n.exports.default=n.exports}(Ec)),Ec.exports}const n1=Un(Dv),r1=Un(Lv),i1=Un(Vv),o1=Un(Gx),s1=Un(_x),a1=Un(Lx);var Jf;function l1(){if(Jf)return Tr;Jf=1;var n=du();Object.defineProperty(Tr,"__esModule",{value:!0}),Tr.default=z,Tr.shouldForwardProp=E,Tr.systemDefaultTheme=void 0;var r=n(e1()),o=n(t1()),a=y(n1),l=r1;n(i1),n(o1);var u=n(s1),p=n(a1);const f=["ownerState"],h=["variants"],g=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function x(I){if(typeof WeakMap!="function")return null;var F=new WeakMap,w=new WeakMap;return(x=function(L){return L?w:F})(I)}function y(I,F){if(I&&I.__esModule)return I;if(I===null||typeof I!="object"&&typeof I!="function")return{default:I};var w=x(F);if(w&&w.has(I))return w.get(I);var L={__proto__:null},H=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var U in I)if(U!=="default"&&Object.prototype.hasOwnProperty.call(I,U)){var G=H?Object.getOwnPropertyDescriptor(I,U):null;G&&(G.get||G.set)?Object.defineProperty(L,U,G):L[U]=I[U]}return L.default=I,w&&w.set(I,L),L}function k(I){return Object.keys(I).length===0}function $(I){return typeof I=="string"&&I.charCodeAt(0)>96}function E(I){return I!=="ownerState"&&I!=="theme"&&I!=="sx"&&I!=="as"}const v=Tr.systemDefaultTheme=(0,u.default)(),M=I=>I&&I.charAt(0).toLowerCase()+I.slice(1);function _({defaultTheme:I,theme:F,themeId:w}){return k(F)?I:F[w]||F}function j(I){return I?(F,w)=>w[I]:null}function R(I,F){let{ownerState:w}=F,L=(0,o.default)(F,f);const H=typeof I=="function"?I((0,r.default)({ownerState:w},L)):I;if(Array.isArray(H))return H.flatMap(U=>R(U,(0,r.default)({ownerState:w},L)));if(H&&typeof H=="object"&&Array.isArray(H.variants)){const{variants:U=[]}=H;let ee=(0,o.default)(H,h);return U.forEach(Y=>{let Q=!0;typeof Y.props=="function"?Q=Y.props((0,r.default)({ownerState:w},L,w)):Object.keys(Y.props).forEach(te=>{(w==null?void 0:w[te])!==Y.props[te]&&L[te]!==Y.props[te]&&(Q=!1)}),Q&&(Array.isArray(ee)||(ee=[ee]),ee.push(typeof Y.style=="function"?Y.style((0,r.default)({ownerState:w},L,w)):Y.style))}),ee}return H}function z(I={}){const{themeId:F,defaultTheme:w=v,rootShouldForwardProp:L=E,slotShouldForwardProp:H=E}=I,U=G=>(0,p.default)((0,r.default)({},G,{theme:_((0,r.default)({},G,{defaultTheme:w,themeId:F}))}));return U.__mui_systemSx=!0,(G,ee={})=>{(0,a.internal_processStyles)(G,ae=>ae.filter(Se=>!(Se!=null&&Se.__mui_systemSx)));const{name:Y,slot:Q,skipVariantsResolver:te,skipSx:ie,overridesResolver:ne=j(M(Q))}=ee,A=(0,o.default)(ee,g),Z=te!==void 0?te:Q&&Q!=="Root"&&Q!=="root"||!1,J=ie||!1;let O,V=E;Q==="Root"||Q==="root"?V=L:Q?V=H:$(G)&&(V=void 0);const pe=(0,a.default)(G,(0,r.default)({shouldForwardProp:V,label:O},A)),se=ae=>typeof ae=="function"&&ae.__emotion_real!==ae||(0,l.isPlainObject)(ae)?Se=>R(ae,(0,r.default)({},Se,{theme:_({theme:Se.theme,defaultTheme:w,themeId:F})})):ae,he=(ae,...Se)=>{let Ie=se(ae);const xe=Se?Se.map(se):[];Y&&ne&&xe.push(ze=>{const ye=_((0,r.default)({},ze,{defaultTheme:w,themeId:F}));if(!ye.components||!ye.components[Y]||!ye.components[Y].styleOverrides)return null;const Re=ye.components[Y].styleOverrides,Ne={};return Object.entries(Re).forEach(([Wt,ht])=>{Ne[Wt]=R(ht,(0,r.default)({},ze,{theme:ye}))}),ne(ze,Ne)}),Y&&!Z&&xe.push(ze=>{var ye;const Re=_((0,r.default)({},ze,{defaultTheme:w,themeId:F})),Ne=Re==null||(ye=Re.components)==null||(ye=ye[Y])==null?void 0:ye.variants;return R({variants:Ne},(0,r.default)({},ze,{theme:Re}))}),J||xe.push(U);const Le=xe.length-Se.length;if(Array.isArray(ae)&&Le>0){const ze=new Array(Le).fill("");Ie=[...ae,...ze],Ie.raw=[...ae.raw,...ze]}const Te=pe(Ie,...xe);return G.muiName&&(Te.muiName=G.muiName),Te};return pe.withConfig&&(he.withConfig=pe.withConfig),he}}return Tr}var c1=l1();const u1=Io(c1);function dh(n){return n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"}const Jt=n=>dh(n)&&n!=="classes",de=u1({themeId:vi,defaultTheme:fu,rootShouldForwardProp:Jt}),d1=["theme"];function p1(n){let{theme:r}=n,o=me(n,d1);const a=r[vi];let l=a||r;return typeof r!="function"&&(a&&!a.vars?l=C({},a,{vars:null}):r&&!r.vars&&(l=C({},r,{vars:null}))),N.jsx(Ty,C({},o,{themeId:a?vi:void 0,theme:l}))}const em=n=>{let r;return n<1?r=5.11916*n**2:r=4.5*Math.log(n+1)+2,(r/100).toFixed(2)};function $e(n){return Iy(n)}function f1(n){return _e("MuiSvgIcon",n)}Me("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const m1=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],h1=n=>{const{color:r,fontSize:o,classes:a}=n,l={root:["root",r!=="inherit"&&`color${ge(r)}`,`fontSize${ge(o)}`]};return Ae(l,f1,a)},g1=de("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,o.color!=="inherit"&&r[`color${ge(o.color)}`],r[`fontSize${ge(o.fontSize)}`]]}})(({theme:n,ownerState:r})=>{var o,a,l,u,p,f,h,g,x,y,k,$,E;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:r.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(o=n.transitions)==null||(a=o.create)==null?void 0:a.call(o,"fill",{duration:(l=n.transitions)==null||(l=l.duration)==null?void 0:l.shorter}),fontSize:{inherit:"inherit",small:((u=n.typography)==null||(p=u.pxToRem)==null?void 0:p.call(u,20))||"1.25rem",medium:((f=n.typography)==null||(h=f.pxToRem)==null?void 0:h.call(f,24))||"1.5rem",large:((g=n.typography)==null||(x=g.pxToRem)==null?void 0:x.call(g,35))||"2.1875rem"}[r.fontSize],color:(y=(k=(n.vars||n).palette)==null||(k=k[r.color])==null?void 0:k.main)!=null?y:{action:($=(n.vars||n).palette)==null||($=$.action)==null?void 0:$.active,disabled:(E=(n.vars||n).palette)==null||(E=E.action)==null?void 0:E.disabled,inherit:void 0}[r.color]}}),Bc=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiSvgIcon"}),{children:l,className:u,color:p="inherit",component:f="svg",fontSize:h="medium",htmlColor:g,inheritViewBox:x=!1,titleAccess:y,viewBox:k="0 0 24 24"}=a,$=me(a,m1),E=b.isValidElement(l)&&l.type==="svg",v=C({},a,{color:p,component:f,fontSize:h,instanceFontSize:r.fontSize,inheritViewBox:x,viewBox:k,hasSvgAsChild:E}),M={};x||(M.viewBox=k);const _=h1(v);return N.jsxs(g1,C({as:f,className:ve(_.root,u),focusable:"false",color:g,"aria-hidden":y?void 0:!0,role:y?"img":void 0,ref:o},M,$,E&&l.props,{ownerState:v,children:[E?l.props.children:l,y?N.jsx("title",{children:y}):null]}))});Bc.muiName="SvgIcon";function ph(n,r){function o(a,l){return N.jsx(Bc,C({"data-testid":`${r}Icon`,ref:l},a,{children:n}))}return o.muiName=Bc.muiName,b.memo(b.forwardRef(o))}const v1={configure:n=>{lu.configure(n)}},x1=Object.freeze(Object.defineProperty({__proto__:null,capitalize:ge,createChainedFunction:Lc,createSvgIcon:ph,debounce:va,deprecatedPropType:ey,isMuiElement:Ys,ownerDocument:St,ownerWindow:$n,requirePropFactory:ty,setRef:Zs,unstable_ClassNameGenerator:v1,unstable_useEnhancedEffect:Cn,unstable_useId:cu,unsupportedProp:ry,useControlled:Fc,useEventCallback:wn,useForkRef:mt,useIsFocusVisible:ih},Symbol.toStringTag,{value:"Module"}));function Wc(n,r){return Wc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,a){return o.__proto__=a,o},Wc(n,r)}function fh(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,Wc(n,r)}var mh=Mm();const Bs=Io(mh),tm={disabled:!1},ta=bn.createContext(null);var y1=function(r){return r.scrollTop},vo="unmounted",Pr="exited",Mr="entering",fi="entered",Uc="exiting",kn=function(n){fh(r,n);function r(a,l){var u;u=n.call(this,a,l)||this;var p=l,f=p&&!p.isMounting?a.enter:a.appear,h;return u.appearStatus=null,a.in?f?(h=Pr,u.appearStatus=Mr):h=fi:a.unmountOnExit||a.mountOnEnter?h=vo:h=Pr,u.state={status:h},u.nextCallback=null,u}r.getDerivedStateFromProps=function(l,u){var p=l.in;return p&&u.status===vo?{status:Pr}:null};var o=r.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(l){var u=null;if(l!==this.props){var p=this.state.status;this.props.in?p!==Mr&&p!==fi&&(u=Mr):(p===Mr||p===fi)&&(u=Uc)}this.updateStatus(!1,u)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var l=this.props.timeout,u,p,f;return u=p=f=l,l!=null&&typeof l!="number"&&(u=l.exit,p=l.enter,f=l.appear!==void 0?l.appear:p),{exit:u,enter:p,appear:f}},o.updateStatus=function(l,u){if(l===void 0&&(l=!1),u!==null)if(this.cancelNextCallback(),u===Mr){if(this.props.unmountOnExit||this.props.mountOnEnter){var p=this.props.nodeRef?this.props.nodeRef.current:Bs.findDOMNode(this);p&&y1(p)}this.performEnter(l)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Pr&&this.setState({status:vo})},o.performEnter=function(l){var u=this,p=this.props.enter,f=this.context?this.context.isMounting:l,h=this.props.nodeRef?[f]:[Bs.findDOMNode(this),f],g=h[0],x=h[1],y=this.getTimeouts(),k=f?y.appear:y.enter;if(!l&&!p||tm.disabled){this.safeSetState({status:fi},function(){u.props.onEntered(g)});return}this.props.onEnter(g,x),this.safeSetState({status:Mr},function(){u.props.onEntering(g,x),u.onTransitionEnd(k,function(){u.safeSetState({status:fi},function(){u.props.onEntered(g,x)})})})},o.performExit=function(){var l=this,u=this.props.exit,p=this.getTimeouts(),f=this.props.nodeRef?void 0:Bs.findDOMNode(this);if(!u||tm.disabled){this.safeSetState({status:Pr},function(){l.props.onExited(f)});return}this.props.onExit(f),this.safeSetState({status:Uc},function(){l.props.onExiting(f),l.onTransitionEnd(p.exit,function(){l.safeSetState({status:Pr},function(){l.props.onExited(f)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(l,u){u=this.setNextCallback(u),this.setState(l,u)},o.setNextCallback=function(l){var u=this,p=!0;return this.nextCallback=function(f){p&&(p=!1,u.nextCallback=null,l(f))},this.nextCallback.cancel=function(){p=!1},this.nextCallback},o.onTransitionEnd=function(l,u){this.setNextCallback(u);var p=this.props.nodeRef?this.props.nodeRef.current:Bs.findDOMNode(this),f=l==null&&!this.props.addEndListener;if(!p||f){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var h=this.props.nodeRef?[this.nextCallback]:[p,this.nextCallback],g=h[0],x=h[1];this.props.addEndListener(g,x)}l!=null&&setTimeout(this.nextCallback,l)},o.render=function(){var l=this.state.status;if(l===vo)return null;var u=this.props,p=u.children;u.in,u.mountOnEnter,u.unmountOnExit,u.appear,u.enter,u.exit,u.timeout,u.addEndListener,u.onEnter,u.onEntering,u.onEntered,u.onExit,u.onExiting,u.onExited,u.nodeRef;var f=me(u,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return bn.createElement(ta.Provider,{value:null},typeof p=="function"?p(l,f):bn.cloneElement(bn.Children.only(p),f))},r}(bn.Component);kn.contextType=ta;kn.propTypes={};function pi(){}kn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:pi,onEntering:pi,onEntered:pi,onExit:pi,onExiting:pi,onExited:pi};kn.UNMOUNTED=vo;kn.EXITED=Pr;kn.ENTERING=Mr;kn.ENTERED=fi;kn.EXITING=Uc;function b1(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function mu(n,r){var o=function(u){return r&&b.isValidElement(u)?r(u):u},a=Object.create(null);return n&&b.Children.map(n,function(l){return l}).forEach(function(l){a[l.key]=o(l)}),a}function w1(n,r){n=n||{},r=r||{};function o(x){return x in r?r[x]:n[x]}var a=Object.create(null),l=[];for(var u in n)u in r?l.length&&(a[u]=l,l=[]):l.push(u);var p,f={};for(var h in r){if(a[h])for(p=0;p<a[h].length;p++){var g=a[h][p];f[a[h][p]]=o(g)}f[h]=o(h)}for(p=0;p<l.length;p++)f[l[p]]=o(l[p]);return f}function zr(n,r,o){return o[r]!=null?o[r]:n.props[r]}function C1(n,r){return mu(n.children,function(o){return b.cloneElement(o,{onExited:r.bind(null,o),in:!0,appear:zr(o,"appear",n),enter:zr(o,"enter",n),exit:zr(o,"exit",n)})})}function k1(n,r,o){var a=mu(n.children),l=w1(r,a);return Object.keys(l).forEach(function(u){var p=l[u];if(b.isValidElement(p)){var f=u in r,h=u in a,g=r[u],x=b.isValidElement(g)&&!g.props.in;h&&(!f||x)?l[u]=b.cloneElement(p,{onExited:o.bind(null,p),in:!0,exit:zr(p,"exit",n),enter:zr(p,"enter",n)}):!h&&f&&!x?l[u]=b.cloneElement(p,{in:!1}):h&&f&&b.isValidElement(g)&&(l[u]=b.cloneElement(p,{onExited:o.bind(null,p),in:g.props.in,exit:zr(p,"exit",n),enter:zr(p,"enter",n)}))}}),l}var S1=Object.values||function(n){return Object.keys(n).map(function(r){return n[r]})},E1={component:"div",childFactory:function(r){return r}},hu=function(n){fh(r,n);function r(a,l){var u;u=n.call(this,a,l)||this;var p=u.handleExited.bind(b1(u));return u.state={contextValue:{isMounting:!0},handleExited:p,firstRender:!0},u}var o=r.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(l,u){var p=u.children,f=u.handleExited,h=u.firstRender;return{children:h?C1(l,f):k1(l,p,f),firstRender:!1}},o.handleExited=function(l,u){var p=mu(this.props.children);l.key in p||(l.props.onExited&&l.props.onExited(u),this.mounted&&this.setState(function(f){var h=C({},f.children);return delete h[l.key],{children:h}}))},o.render=function(){var l=this.props,u=l.component,p=l.childFactory,f=me(l,["component","childFactory"]),h=this.state.contextValue,g=S1(this.state.children).map(p);return delete f.appear,delete f.enter,delete f.exit,u===null?bn.createElement(ta.Provider,{value:h},g):bn.createElement(ta.Provider,{value:h},bn.createElement(u,f,g))},r}(bn.Component);hu.propTypes={};hu.defaultProps=E1;const gu=n=>n.scrollTop;function yi(n,r){var o,a;const{timeout:l,easing:u,style:p={}}=n;return{duration:(o=p.transitionDuration)!=null?o:typeof l=="number"?l:l[r.mode]||0,easing:(a=p.transitionTimingFunction)!=null?a:typeof u=="object"?u[r.mode]:u,delay:p.transitionDelay}}function I1(n){return _e("MuiPaper",n)}Me("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const T1=["className","component","elevation","square","variant"],R1=n=>{const{square:r,elevation:o,variant:a,classes:l}=n,u={root:["root",a,!r&&"rounded",a==="elevation"&&`elevation${o}`]};return Ae(u,I1,l)},P1=de("div",{name:"MuiPaper",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,r[o.variant],!o.square&&r.rounded,o.variant==="elevation"&&r[`elevation${o.elevation}`]]}})(({theme:n,ownerState:r})=>{var o;return C({backgroundColor:(n.vars||n).palette.background.paper,color:(n.vars||n).palette.text.primary,transition:n.transitions.create("box-shadow")},!r.square&&{borderRadius:n.shape.borderRadius},r.variant==="outlined"&&{border:`1px solid ${(n.vars||n).palette.divider}`},r.variant==="elevation"&&C({boxShadow:(n.vars||n).shadows[r.elevation]},!n.vars&&n.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${at.alpha("#fff",em(r.elevation))}, ${at.alpha("#fff",em(r.elevation))})`},n.vars&&{backgroundImage:(o=n.vars.overlays)==null?void 0:o[r.elevation]}))}),Ar=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiPaper"}),{className:l,component:u="div",elevation:p=1,square:f=!1,variant:h="elevation"}=a,g=me(a,T1),x=C({},a,{component:u,elevation:p,square:f,variant:h}),y=R1(x);return N.jsx(P1,C({as:u,ownerState:x,className:ve(y.root,l),ref:o},g))});function M1(n){const{className:r,classes:o,pulsate:a=!1,rippleX:l,rippleY:u,rippleSize:p,in:f,onExited:h,timeout:g}=n,[x,y]=b.useState(!1),k=ve(r,o.ripple,o.rippleVisible,a&&o.ripplePulsate),$={width:p,height:p,top:-(p/2)+u,left:-(p/2)+l},E=ve(o.child,x&&o.childLeaving,a&&o.childPulsate);return!f&&!x&&y(!0),b.useEffect(()=>{if(!f&&h!=null){const v=setTimeout(h,g);return()=>{clearTimeout(v)}}},[h,f,g]),N.jsx("span",{className:k,style:$,children:N.jsx("span",{className:E})})}const an=Me("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),z1=["center","classes","className"];let ba=n=>n,nm,rm,im,om;const Hc=550,_1=80,$1=la(nm||(nm=ba`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),O1=la(rm||(rm=ba`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),A1=la(im||(im=ba`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),N1=de("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),D1=de(M1,{name:"MuiTouchRipple",slot:"Ripple"})(om||(om=ba`
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
`),an.rippleVisible,$1,Hc,({theme:n})=>n.transitions.easing.easeInOut,an.ripplePulsate,({theme:n})=>n.transitions.duration.shorter,an.child,an.childLeaving,O1,Hc,({theme:n})=>n.transitions.easing.easeInOut,an.childPulsate,A1,({theme:n})=>n.transitions.easing.easeInOut),L1=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiTouchRipple"}),{center:l=!1,classes:u={},className:p}=a,f=me(a,z1),[h,g]=b.useState([]),x=b.useRef(0),y=b.useRef(null);b.useEffect(()=>{y.current&&(y.current(),y.current=null)},[h]);const k=b.useRef(!1),$=uu(),E=b.useRef(null),v=b.useRef(null),M=b.useCallback(z=>{const{pulsate:I,rippleX:F,rippleY:w,rippleSize:L,cb:H}=z;g(U=>[...U,N.jsx(D1,{classes:{ripple:ve(u.ripple,an.ripple),rippleVisible:ve(u.rippleVisible,an.rippleVisible),ripplePulsate:ve(u.ripplePulsate,an.ripplePulsate),child:ve(u.child,an.child),childLeaving:ve(u.childLeaving,an.childLeaving),childPulsate:ve(u.childPulsate,an.childPulsate)},timeout:Hc,pulsate:I,rippleX:F,rippleY:w,rippleSize:L},x.current)]),x.current+=1,y.current=H},[u]),_=b.useCallback((z={},I={},F=()=>{})=>{const{pulsate:w=!1,center:L=l||I.pulsate,fakeElement:H=!1}=I;if((z==null?void 0:z.type)==="mousedown"&&k.current){k.current=!1;return}(z==null?void 0:z.type)==="touchstart"&&(k.current=!0);const U=H?null:v.current,G=U?U.getBoundingClientRect():{width:0,height:0,left:0,top:0};let ee,Y,Q;if(L||z===void 0||z.clientX===0&&z.clientY===0||!z.clientX&&!z.touches)ee=Math.round(G.width/2),Y=Math.round(G.height/2);else{const{clientX:te,clientY:ie}=z.touches&&z.touches.length>0?z.touches[0]:z;ee=Math.round(te-G.left),Y=Math.round(ie-G.top)}if(L)Q=Math.sqrt((2*G.width**2+G.height**2)/3),Q%2===0&&(Q+=1);else{const te=Math.max(Math.abs((U?U.clientWidth:0)-ee),ee)*2+2,ie=Math.max(Math.abs((U?U.clientHeight:0)-Y),Y)*2+2;Q=Math.sqrt(te**2+ie**2)}z!=null&&z.touches?E.current===null&&(E.current=()=>{M({pulsate:w,rippleX:ee,rippleY:Y,rippleSize:Q,cb:F})},$.start(_1,()=>{E.current&&(E.current(),E.current=null)})):M({pulsate:w,rippleX:ee,rippleY:Y,rippleSize:Q,cb:F})},[l,M,$]),j=b.useCallback(()=>{_({},{pulsate:!0})},[_]),R=b.useCallback((z,I)=>{if($.clear(),(z==null?void 0:z.type)==="touchend"&&E.current){E.current(),E.current=null,$.start(0,()=>{R(z,I)});return}E.current=null,g(F=>F.length>0?F.slice(1):F),y.current=I},[$]);return b.useImperativeHandle(o,()=>({pulsate:j,start:_,stop:R}),[j,_,R]),N.jsx(N1,C({className:ve(an.root,u.root,p),ref:v},f,{children:N.jsx(hu,{component:null,exit:!0,children:h})}))});function F1(n){return _e("MuiButtonBase",n)}const j1=Me("MuiButtonBase",["root","disabled","focusVisible"]),B1=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],W1=n=>{const{disabled:r,focusVisible:o,focusVisibleClassName:a,classes:l}=n,p=Ae({root:["root",r&&"disabled",o&&"focusVisible"]},F1,l);return o&&a&&(p.root+=` ${a}`),p},U1=de("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(n,r)=>r.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${j1.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),wa=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiButtonBase"}),{action:l,centerRipple:u=!1,children:p,className:f,component:h="button",disabled:g=!1,disableRipple:x=!1,disableTouchRipple:y=!1,focusRipple:k=!1,LinkComponent:$="a",onBlur:E,onClick:v,onContextMenu:M,onDragLeave:_,onFocus:j,onFocusVisible:R,onKeyDown:z,onKeyUp:I,onMouseDown:F,onMouseLeave:w,onMouseUp:L,onTouchEnd:H,onTouchMove:U,onTouchStart:G,tabIndex:ee=0,TouchRippleProps:Y,touchRippleRef:Q,type:te}=a,ie=me(a,B1),ne=b.useRef(null),A=b.useRef(null),Z=mt(A,Q),{isFocusVisibleRef:J,onFocus:O,onBlur:V,ref:pe}=ih(),[se,he]=b.useState(!1);g&&se&&he(!1),b.useImperativeHandle(l,()=>({focusVisible:()=>{he(!0),ne.current.focus()}}),[]);const[ae,Se]=b.useState(!1);b.useEffect(()=>{Se(!0)},[]);const Ie=ae&&!x&&!g;b.useEffect(()=>{se&&k&&!x&&ae&&A.current.pulsate()},[x,k,se,ae]);function xe(ke,_t,pn=y){return wn(fr=>(_t&&_t(fr),!pn&&A.current&&A.current[ke](fr),!0))}const Le=xe("start",F),Te=xe("stop",M),ze=xe("stop",_),ye=xe("stop",L),Re=xe("stop",ke=>{se&&ke.preventDefault(),w&&w(ke)}),Ne=xe("start",G),Wt=xe("stop",H),ht=xe("stop",U),Mt=xe("stop",ke=>{V(ke),J.current===!1&&he(!1),E&&E(ke)},!1),zt=wn(ke=>{ne.current||(ne.current=ke.currentTarget),O(ke),J.current===!0&&(he(!0),R&&R(ke)),j&&j(ke)}),gt=()=>{const ke=ne.current;return h&&h!=="button"&&!(ke.tagName==="A"&&ke.href)},We=b.useRef(!1),Ut=wn(ke=>{k&&!We.current&&se&&A.current&&ke.key===" "&&(We.current=!0,A.current.stop(ke,()=>{A.current.start(ke)})),ke.target===ke.currentTarget&&gt()&&ke.key===" "&&ke.preventDefault(),z&&z(ke),ke.target===ke.currentTarget&&gt()&&ke.key==="Enter"&&!g&&(ke.preventDefault(),v&&v(ke))}),bt=wn(ke=>{k&&ke.key===" "&&A.current&&se&&!ke.defaultPrevented&&(We.current=!1,A.current.stop(ke,()=>{A.current.pulsate(ke)})),I&&I(ke),v&&ke.target===ke.currentTarget&&gt()&&ke.key===" "&&!ke.defaultPrevented&&v(ke)});let Ge=h;Ge==="button"&&(ie.href||ie.to)&&(Ge=$);const Ht={};Ge==="button"?(Ht.type=te===void 0?"button":te,Ht.disabled=g):(!ie.href&&!ie.to&&(Ht.role="button"),g&&(Ht["aria-disabled"]=g));const dn=mt(o,pe,ne),Vt=C({},a,{centerRipple:u,component:h,disabled:g,disableRipple:x,disableTouchRipple:y,focusRipple:k,tabIndex:ee,focusVisible:se}),Fe=W1(Vt);return N.jsxs(U1,C({as:Ge,className:ve(Fe.root,f),ownerState:Vt,onBlur:Mt,onClick:v,onContextMenu:Te,onFocus:zt,onKeyDown:Ut,onKeyUp:bt,onMouseDown:Le,onMouseLeave:Re,onMouseUp:ye,onDragLeave:ze,onTouchEnd:Wt,onTouchMove:ht,onTouchStart:Ne,ref:dn,tabIndex:g?-1:ee,type:te},Ht,ie,{children:[p,Ie?N.jsx(L1,C({ref:Z,center:u},Y)):null]}))});function H1(n){return _e("MuiIconButton",n)}const V1=Me("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),K1=["edge","children","className","color","disabled","disableFocusRipple","size"],G1=n=>{const{classes:r,disabled:o,color:a,edge:l,size:u}=n,p={root:["root",o&&"disabled",a!=="default"&&`color${ge(a)}`,l&&`edge${ge(l)}`,`size${ge(u)}`]};return Ae(p,H1,r)},q1=de(wa,{name:"MuiIconButton",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,o.color!=="default"&&r[`color${ge(o.color)}`],o.edge&&r[`edge${ge(o.edge)}`],r[`size${ge(o.size)}`]]}})(({theme:n,ownerState:r})=>C({textAlign:"center",flex:"0 0 auto",fontSize:n.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(n.vars||n).palette.action.active,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest})},!r.disableRipple&&{"&:hover":{backgroundColor:n.vars?`rgba(${n.vars.palette.action.activeChannel} / ${n.vars.palette.action.hoverOpacity})`:at.alpha(n.palette.action.active,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},r.edge==="start"&&{marginLeft:r.size==="small"?-3:-12},r.edge==="end"&&{marginRight:r.size==="small"?-3:-12}),({theme:n,ownerState:r})=>{var o;const a=(o=(n.vars||n).palette)==null?void 0:o[r.color];return C({},r.color==="inherit"&&{color:"inherit"},r.color!=="inherit"&&r.color!=="default"&&C({color:a==null?void 0:a.main},!r.disableRipple&&{"&:hover":C({},a&&{backgroundColor:n.vars?`rgba(${a.mainChannel} / ${n.vars.palette.action.hoverOpacity})`:at.alpha(a.main,n.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),r.size==="small"&&{padding:5,fontSize:n.typography.pxToRem(18)},r.size==="large"&&{padding:12,fontSize:n.typography.pxToRem(28)},{[`&.${V1.disabled}`]:{backgroundColor:"transparent",color:(n.vars||n).palette.action.disabled}})}),Y1=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiIconButton"}),{edge:l=!1,children:u,className:p,color:f="default",disabled:h=!1,disableFocusRipple:g=!1,size:x="medium"}=a,y=me(a,K1),k=C({},a,{edge:l,color:f,disabled:h,disableFocusRipple:g,size:x}),$=G1(k);return N.jsx(q1,C({className:ve($.root,p),centerRipple:!0,focusRipple:!g,disabled:h,ref:o},y,{ownerState:k,children:u}))});function X1(n){return _e("MuiTypography",n)}Me("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Q1=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Z1=n=>{const{align:r,gutterBottom:o,noWrap:a,paragraph:l,variant:u,classes:p}=n,f={root:["root",u,n.align!=="inherit"&&`align${ge(r)}`,o&&"gutterBottom",a&&"noWrap",l&&"paragraph"]};return Ae(f,X1,p)},J1=de("span",{name:"MuiTypography",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,o.variant&&r[o.variant],o.align!=="inherit"&&r[`align${ge(o.align)}`],o.noWrap&&r.noWrap,o.gutterBottom&&r.gutterBottom,o.paragraph&&r.paragraph]}})(({theme:n,ownerState:r})=>C({margin:0},r.variant==="inherit"&&{font:"inherit"},r.variant!=="inherit"&&n.typography[r.variant],r.align!=="inherit"&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})),sm={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},eb={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},tb=n=>eb[n]||n,Wn=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiTypography"}),l=tb(a.color),u=ga(C({},a,{color:l})),{align:p="inherit",className:f,component:h,gutterBottom:g=!1,noWrap:x=!1,paragraph:y=!1,variant:k="body1",variantMapping:$=sm}=u,E=me(u,Q1),v=C({},u,{align:p,color:l,className:f,component:h,gutterBottom:g,noWrap:x,paragraph:y,variant:k,variantMapping:$}),M=h||(y?"p":$[k]||sm[k])||"span",_=Z1(v);return N.jsx(J1,C({as:M,ref:o,ownerState:v,className:ve(_.root,f)},E))});function nb(n){return _e("MuiAppBar",n)}Me("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const rb=["className","color","enableColorOnDark","position"],ib=n=>{const{color:r,position:o,classes:a}=n,l={root:["root",`color${ge(r)}`,`position${ge(o)}`]};return Ae(l,nb,a)},Ws=(n,r)=>n?`${n==null?void 0:n.replace(")","")}, ${r})`:r,ob=de(Ar,{name:"MuiAppBar",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,r[`position${ge(o.position)}`],r[`color${ge(o.color)}`]]}})(({theme:n,ownerState:r})=>{const o=n.palette.mode==="light"?n.palette.grey[100]:n.palette.grey[900];return C({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},r.position==="fixed"&&{position:"fixed",zIndex:(n.vars||n).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},r.position==="absolute"&&{position:"absolute",zIndex:(n.vars||n).zIndex.appBar,top:0,left:"auto",right:0},r.position==="sticky"&&{position:"sticky",zIndex:(n.vars||n).zIndex.appBar,top:0,left:"auto",right:0},r.position==="static"&&{position:"static"},r.position==="relative"&&{position:"relative"},!n.vars&&C({},r.color==="default"&&{backgroundColor:o,color:n.palette.getContrastText(o)},r.color&&r.color!=="default"&&r.color!=="inherit"&&r.color!=="transparent"&&{backgroundColor:n.palette[r.color].main,color:n.palette[r.color].contrastText},r.color==="inherit"&&{color:"inherit"},n.palette.mode==="dark"&&!r.enableColorOnDark&&{backgroundColor:null,color:null},r.color==="transparent"&&C({backgroundColor:"transparent",color:"inherit"},n.palette.mode==="dark"&&{backgroundImage:"none"})),n.vars&&C({},r.color==="default"&&{"--AppBar-background":r.enableColorOnDark?n.vars.palette.AppBar.defaultBg:Ws(n.vars.palette.AppBar.darkBg,n.vars.palette.AppBar.defaultBg),"--AppBar-color":r.enableColorOnDark?n.vars.palette.text.primary:Ws(n.vars.palette.AppBar.darkColor,n.vars.palette.text.primary)},r.color&&!r.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":r.enableColorOnDark?n.vars.palette[r.color].main:Ws(n.vars.palette.AppBar.darkBg,n.vars.palette[r.color].main),"--AppBar-color":r.enableColorOnDark?n.vars.palette[r.color].contrastText:Ws(n.vars.palette.AppBar.darkColor,n.vars.palette[r.color].contrastText)},!["inherit","transparent"].includes(r.color)&&{backgroundColor:"var(--AppBar-background)"},{color:r.color==="inherit"?"inherit":"var(--AppBar-color)"},r.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),sb=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiAppBar"}),{className:l,color:u="primary",enableColorOnDark:p=!1,position:f="fixed"}=a,h=me(a,rb),g=C({},a,{color:u,position:f,enableColorOnDark:p}),x=ib(g);return N.jsx(ob,C({square:!0,component:"header",ownerState:g,elevation:4,className:ve(x.root,l,f==="fixed"&&"mui-fixed"),ref:o},h))});function ab(n){return typeof n=="function"?n():n}const lb=b.forwardRef(function(r,o){const{children:a,container:l,disablePortal:u=!1}=r,[p,f]=b.useState(null),h=mt(b.isValidElement(a)?Or(a):null,o);if(Cn(()=>{u||f(ab(l)||document.body)},[l,u]),Cn(()=>{if(p&&!u)return Zs(o,p),()=>{Zs(o,null)}},[o,p,u]),u){if(b.isValidElement(a)){const g={ref:h};return b.cloneElement(a,g)}return N.jsx(b.Fragment,{children:a})}return N.jsx(b.Fragment,{children:p&&mh.createPortal(a,p)})}),cb=["onChange","maxRows","minRows","style","value"];function Us(n){return parseInt(n,10)||0}const ub={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function db(n){for(const r in n)return!1;return!0}function am(n){return db(n)||n.outerHeightStyle===0&&!n.overflowing}const pb=b.forwardRef(function(r,o){const{onChange:a,maxRows:l,minRows:u=1,style:p,value:f}=r,h=me(r,cb),{current:g}=b.useRef(f!=null),x=b.useRef(null),y=mt(o,x),k=b.useRef(null),$=b.useRef(null),E=b.useCallback(()=>{const R=x.current,z=$.current;if(!R||!z)return;const F=$n(R).getComputedStyle(R);if(F.width==="0px")return{outerHeightStyle:0,overflowing:!1};z.style.width=F.width,z.value=R.value||r.placeholder||"x",z.value.slice(-1)===`
`&&(z.value+=" ");const w=F.boxSizing,L=Us(F.paddingBottom)+Us(F.paddingTop),H=Us(F.borderBottomWidth)+Us(F.borderTopWidth),U=z.scrollHeight;z.value="x";const G=z.scrollHeight;let ee=U;u&&(ee=Math.max(Number(u)*G,ee)),l&&(ee=Math.min(Number(l)*G,ee)),ee=Math.max(ee,G);const Y=ee+(w==="border-box"?L+H:0),Q=Math.abs(ee-U)<=1;return{outerHeightStyle:Y,overflowing:Q}},[l,u,r.placeholder]),v=wn(()=>{const R=x.current,z=E();if(!R||!z||am(z))return!1;const I=z.outerHeightStyle;return k.current!=null&&k.current!==I}),M=b.useCallback(()=>{const R=x.current,z=E();if(!R||!z||am(z))return;const I=z.outerHeightStyle;k.current!==I&&(k.current=I,R.style.height=`${I}px`),R.style.overflow=z.overflowing?"hidden":""},[E]),_=b.useRef(-1);Cn(()=>{const R=va(M),z=x==null?void 0:x.current;if(!z)return;const I=$n(z);I.addEventListener("resize",R);let F;return typeof ResizeObserver<"u"&&(F=new ResizeObserver(()=>{v()&&(F.unobserve(z),cancelAnimationFrame(_.current),M(),_.current=requestAnimationFrame(()=>{F.observe(z)}))}),F.observe(z)),()=>{R.clear(),cancelAnimationFrame(_.current),I.removeEventListener("resize",R),F&&F.disconnect()}},[E,M,v]),Cn(()=>{M()});const j=R=>{g||M(),a&&a(R)};return N.jsxs(b.Fragment,{children:[N.jsx("textarea",C({value:f,onChange:j,ref:y,rows:u,style:p},h)),N.jsx("textarea",{"aria-hidden":!0,className:r.className,readOnly:!0,ref:$,tabIndex:-1,style:C({},ub.shadow,p,{paddingTop:0,paddingBottom:0})})]})});function vu({props:n,states:r,muiFormControl:o}){return r.reduce((a,l)=>(a[l]=n[l],o&&typeof n[l]>"u"&&(a[l]=o[l]),a),{})}const xu=b.createContext(void 0);function yu(){return b.useContext(xu)}function hh(n){return N.jsx(Ax,C({},n,{defaultTheme:fu,themeId:vi}))}function lm(n){return n!=null&&!(Array.isArray(n)&&n.length===0)}function na(n,r=!1){return n&&(lm(n.value)&&n.value!==""||r&&lm(n.defaultValue)&&n.defaultValue!=="")}function fb(n){return n.startAdornment}function mb(n){return _e("MuiInputBase",n)}const bi=Me("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),hb=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],Ca=(n,r)=>{const{ownerState:o}=n;return[r.root,o.formControl&&r.formControl,o.startAdornment&&r.adornedStart,o.endAdornment&&r.adornedEnd,o.error&&r.error,o.size==="small"&&r.sizeSmall,o.multiline&&r.multiline,o.color&&r[`color${ge(o.color)}`],o.fullWidth&&r.fullWidth,o.hiddenLabel&&r.hiddenLabel]},ka=(n,r)=>{const{ownerState:o}=n;return[r.input,o.size==="small"&&r.inputSizeSmall,o.multiline&&r.inputMultiline,o.type==="search"&&r.inputTypeSearch,o.startAdornment&&r.inputAdornedStart,o.endAdornment&&r.inputAdornedEnd,o.hiddenLabel&&r.inputHiddenLabel]},gb=n=>{const{classes:r,color:o,disabled:a,error:l,endAdornment:u,focused:p,formControl:f,fullWidth:h,hiddenLabel:g,multiline:x,readOnly:y,size:k,startAdornment:$,type:E}=n,v={root:["root",`color${ge(o)}`,a&&"disabled",l&&"error",h&&"fullWidth",p&&"focused",f&&"formControl",k&&k!=="medium"&&`size${ge(k)}`,x&&"multiline",$&&"adornedStart",u&&"adornedEnd",g&&"hiddenLabel",y&&"readOnly"],input:["input",a&&"disabled",E==="search"&&"inputTypeSearch",x&&"inputMultiline",k==="small"&&"inputSizeSmall",g&&"inputHiddenLabel",$&&"inputAdornedStart",u&&"inputAdornedEnd",y&&"readOnly"]};return Ae(v,mb,r)},Sa=de("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Ca})(({theme:n,ownerState:r})=>C({},n.typography.body1,{color:(n.vars||n).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${bi.disabled}`]:{color:(n.vars||n).palette.text.disabled,cursor:"default"}},r.multiline&&C({padding:"4px 0 5px"},r.size==="small"&&{paddingTop:1}),r.fullWidth&&{width:"100%"})),Ea=de("input",{name:"MuiInputBase",slot:"Input",overridesResolver:ka})(({theme:n,ownerState:r})=>{const o=n.palette.mode==="light",a=C({color:"currentColor"},n.vars?{opacity:n.vars.opacity.inputPlaceholder}:{opacity:o?.42:.5},{transition:n.transitions.create("opacity",{duration:n.transitions.duration.shorter})}),l={opacity:"0 !important"},u=n.vars?{opacity:n.vars.opacity.inputPlaceholder}:{opacity:o?.42:.5};return C({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":a,"&::-moz-placeholder":a,"&:-ms-input-placeholder":a,"&::-ms-input-placeholder":a,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${bi.formControl} &`]:{"&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus::-webkit-input-placeholder":u,"&:focus::-moz-placeholder":u,"&:focus:-ms-input-placeholder":u,"&:focus::-ms-input-placeholder":u},[`&.${bi.disabled}`]:{opacity:1,WebkitTextFillColor:(n.vars||n).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},r.size==="small"&&{paddingTop:1},r.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},r.type==="search"&&{MozAppearance:"textfield"})}),vb=N.jsx(hh,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),bu=b.forwardRef(function(r,o){var a;const l=$e({props:r,name:"MuiInputBase"}),{"aria-describedby":u,autoComplete:p,autoFocus:f,className:h,components:g={},componentsProps:x={},defaultValue:y,disabled:k,disableInjectingGlobalStyles:$,endAdornment:E,fullWidth:v=!1,id:M,inputComponent:_="input",inputProps:j={},inputRef:R,maxRows:z,minRows:I,multiline:F=!1,name:w,onBlur:L,onChange:H,onClick:U,onFocus:G,onKeyDown:ee,onKeyUp:Y,placeholder:Q,readOnly:te,renderSuffix:ie,rows:ne,slotProps:A={},slots:Z={},startAdornment:J,type:O="text",value:V}=l,pe=me(l,hb),se=j.value!=null?j.value:V,{current:he}=b.useRef(se!=null),ae=b.useRef(),Se=b.useCallback(Fe=>{},[]),Ie=mt(ae,R,j.ref,Se),[xe,Le]=b.useState(!1),Te=yu(),ze=vu({props:l,muiFormControl:Te,states:["color","disabled","error","hiddenLabel","size","required","filled"]});ze.focused=Te?Te.focused:xe,b.useEffect(()=>{!Te&&k&&xe&&(Le(!1),L&&L())},[Te,k,xe,L]);const ye=Te&&Te.onFilled,Re=Te&&Te.onEmpty,Ne=b.useCallback(Fe=>{na(Fe)?ye&&ye():Re&&Re()},[ye,Re]);Cn(()=>{he&&Ne({value:se})},[se,Ne,he]);const Wt=Fe=>{if(ze.disabled){Fe.stopPropagation();return}G&&G(Fe),j.onFocus&&j.onFocus(Fe),Te&&Te.onFocus?Te.onFocus(Fe):Le(!0)},ht=Fe=>{L&&L(Fe),j.onBlur&&j.onBlur(Fe),Te&&Te.onBlur?Te.onBlur(Fe):Le(!1)},Mt=(Fe,...ke)=>{if(!he){const _t=Fe.target||ae.current;if(_t==null)throw new Error(_r(1));Ne({value:_t.value})}j.onChange&&j.onChange(Fe,...ke),H&&H(Fe,...ke)};b.useEffect(()=>{Ne(ae.current)},[]);const zt=Fe=>{ae.current&&Fe.currentTarget===Fe.target&&ae.current.focus(),U&&U(Fe)};let gt=_,We=j;F&&gt==="input"&&(ne?We=C({type:void 0,minRows:ne,maxRows:ne},We):We=C({type:void 0,maxRows:z,minRows:I},We),gt=pb);const Ut=Fe=>{Ne(Fe.animationName==="mui-auto-fill-cancel"?ae.current:{value:"x"})};b.useEffect(()=>{Te&&Te.setAdornedStart(!!J)},[Te,J]);const bt=C({},l,{color:ze.color||"primary",disabled:ze.disabled,endAdornment:E,error:ze.error,focused:ze.focused,formControl:Te,fullWidth:v,hiddenLabel:ze.hiddenLabel,multiline:F,size:ze.size,startAdornment:J,type:O}),Ge=gb(bt),Ht=Z.root||g.Root||Sa,dn=A.root||x.root||{},Vt=Z.input||g.Input||Ea;return We=C({},We,(a=A.input)!=null?a:x.input),N.jsxs(b.Fragment,{children:[!$&&vb,N.jsxs(Ht,C({},dn,!Js(Ht)&&{ownerState:C({},bt,dn.ownerState)},{ref:o,onClick:zt},pe,{className:ve(Ge.root,dn.className,h,te&&"MuiInputBase-readOnly"),children:[J,N.jsx(xu.Provider,{value:null,children:N.jsx(Vt,C({ownerState:bt,"aria-invalid":ze.error,"aria-describedby":u,autoComplete:p,autoFocus:f,defaultValue:y,disabled:ze.disabled,id:M,onAnimationStart:Ut,name:w,placeholder:Q,readOnly:te,required:ze.required,rows:ne,value:se,onKeyDown:ee,onKeyUp:Y,type:O},We,!Js(Vt)&&{as:gt,ownerState:C({},bt,We.ownerState)},{ref:Ie,className:ve(Ge.input,We.className,te&&"MuiInputBase-readOnly"),onBlur:ht,onChange:Mt,onFocus:Wt}))}),E,ie?ie(C({},ze,{startAdornment:J})):null]}))]})});function xb(n){return _e("MuiInput",n)}const co=C({},bi,Me("MuiInput",["root","underline","input"]));function yb(n){return _e("MuiOutlinedInput",n)}const ur=C({},bi,Me("MuiOutlinedInput",["root","notchedOutline","input"]));function bb(n){return _e("MuiFilledInput",n)}const Rr=C({},bi,Me("MuiFilledInput",["root","underline","input"])),wb=ph(N.jsx("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown"),Cb=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],kb={entering:{opacity:1},entered:{opacity:1}},gh=b.forwardRef(function(r,o){const a=Hn(),l={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{addEndListener:u,appear:p=!0,children:f,easing:h,in:g,onEnter:x,onEntered:y,onEntering:k,onExit:$,onExited:E,onExiting:v,style:M,timeout:_=l,TransitionComponent:j=kn}=r,R=me(r,Cb),z=b.useRef(null),I=mt(z,Or(f),o),F=Q=>te=>{if(Q){const ie=z.current;te===void 0?Q(ie):Q(ie,te)}},w=F(k),L=F((Q,te)=>{gu(Q);const ie=yi({style:M,timeout:_,easing:h},{mode:"enter"});Q.style.webkitTransition=a.transitions.create("opacity",ie),Q.style.transition=a.transitions.create("opacity",ie),x&&x(Q,te)}),H=F(y),U=F(v),G=F(Q=>{const te=yi({style:M,timeout:_,easing:h},{mode:"exit"});Q.style.webkitTransition=a.transitions.create("opacity",te),Q.style.transition=a.transitions.create("opacity",te),$&&$(Q)}),ee=F(E),Y=Q=>{u&&u(z.current,Q)};return N.jsx(j,C({appear:p,in:g,nodeRef:z,onEnter:L,onEntered:H,onEntering:w,onExit:G,onExited:ee,onExiting:U,addEndListener:Y,timeout:_},R,{children:(Q,te)=>b.cloneElement(f,C({style:C({opacity:0,visibility:Q==="exited"&&!g?"hidden":void 0},kb[Q],M,f.props.style),ref:I},te))}))});function Sb(n){return _e("MuiBackdrop",n)}Me("MuiBackdrop",["root","invisible"]);const Eb=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],Ib=n=>{const{classes:r,invisible:o}=n;return Ae({root:["root",o&&"invisible"]},Sb,r)},Tb=de("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,o.invisible&&r.invisible]}})(({ownerState:n})=>C({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},n.invisible&&{backgroundColor:"transparent"})),vh=b.forwardRef(function(r,o){var a,l,u;const p=$e({props:r,name:"MuiBackdrop"}),{children:f,className:h,component:g="div",components:x={},componentsProps:y={},invisible:k=!1,open:$,slotProps:E={},slots:v={},TransitionComponent:M=gh,transitionDuration:_}=p,j=me(p,Eb),R=C({},p,{component:g,invisible:k}),z=Ib(R),I=(a=E.root)!=null?a:y.root;return N.jsx(M,C({in:$,timeout:_},j,{children:N.jsx(Tb,C({"aria-hidden":!0},I,{as:(l=(u=v.root)!=null?u:x.Root)!=null?l:g,className:ve(z.root,h,I==null?void 0:I.className),ownerState:C({},R,I==null?void 0:I.ownerState),classes:z,ref:o,children:f}))}))}),Rb=Me("MuiBox",["root"]),Pb=pu(),pr=Bx({themeId:vi,defaultTheme:Pb,defaultClassName:Rb.root,generateClassName:lu.generate});function Mb(n){return _e("MuiButton",n)}const Hs=Me("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),zb=b.createContext({}),_b=b.createContext(void 0),$b=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Ob=n=>{const{color:r,disableElevation:o,fullWidth:a,size:l,variant:u,classes:p}=n,f={root:["root",u,`${u}${ge(r)}`,`size${ge(l)}`,`${u}Size${ge(l)}`,`color${ge(r)}`,o&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${ge(l)}`],endIcon:["icon","endIcon",`iconSize${ge(l)}`]},h=Ae(f,Mb,p);return C({},p,h)},xh=n=>C({},n.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},n.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},n.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),Ab=de(wa,{shouldForwardProp:n=>Jt(n)||n==="classes",name:"MuiButton",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,r[o.variant],r[`${o.variant}${ge(o.color)}`],r[`size${ge(o.size)}`],r[`${o.variant}Size${ge(o.size)}`],o.color==="inherit"&&r.colorInherit,o.disableElevation&&r.disableElevation,o.fullWidth&&r.fullWidth]}})(({theme:n,ownerState:r})=>{var o,a;const l=n.palette.mode==="light"?n.palette.grey[300]:n.palette.grey[800],u=n.palette.mode==="light"?n.palette.grey.A100:n.palette.grey[700];return C({},n.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow","border-color","color"],{duration:n.transitions.duration.short}),"&:hover":C({textDecoration:"none",backgroundColor:n.vars?`rgba(${n.vars.palette.text.primaryChannel} / ${n.vars.palette.action.hoverOpacity})`:at.alpha(n.palette.text.primary,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},r.variant==="text"&&r.color!=="inherit"&&{backgroundColor:n.vars?`rgba(${n.vars.palette[r.color].mainChannel} / ${n.vars.palette.action.hoverOpacity})`:at.alpha(n.palette[r.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},r.variant==="outlined"&&r.color!=="inherit"&&{border:`1px solid ${(n.vars||n).palette[r.color].main}`,backgroundColor:n.vars?`rgba(${n.vars.palette[r.color].mainChannel} / ${n.vars.palette.action.hoverOpacity})`:at.alpha(n.palette[r.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},r.variant==="contained"&&{backgroundColor:n.vars?n.vars.palette.Button.inheritContainedHoverBg:u,boxShadow:(n.vars||n).shadows[4],"@media (hover: none)":{boxShadow:(n.vars||n).shadows[2],backgroundColor:(n.vars||n).palette.grey[300]}},r.variant==="contained"&&r.color!=="inherit"&&{backgroundColor:(n.vars||n).palette[r.color].dark,"@media (hover: none)":{backgroundColor:(n.vars||n).palette[r.color].main}}),"&:active":C({},r.variant==="contained"&&{boxShadow:(n.vars||n).shadows[8]}),[`&.${Hs.focusVisible}`]:C({},r.variant==="contained"&&{boxShadow:(n.vars||n).shadows[6]}),[`&.${Hs.disabled}`]:C({color:(n.vars||n).palette.action.disabled},r.variant==="outlined"&&{border:`1px solid ${(n.vars||n).palette.action.disabledBackground}`},r.variant==="contained"&&{color:(n.vars||n).palette.action.disabled,boxShadow:(n.vars||n).shadows[0],backgroundColor:(n.vars||n).palette.action.disabledBackground})},r.variant==="text"&&{padding:"6px 8px"},r.variant==="text"&&r.color!=="inherit"&&{color:(n.vars||n).palette[r.color].main},r.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},r.variant==="outlined"&&r.color!=="inherit"&&{color:(n.vars||n).palette[r.color].main,border:n.vars?`1px solid rgba(${n.vars.palette[r.color].mainChannel} / 0.5)`:`1px solid ${at.alpha(n.palette[r.color].main,.5)}`},r.variant==="contained"&&{color:n.vars?n.vars.palette.text.primary:(o=(a=n.palette).getContrastText)==null?void 0:o.call(a,n.palette.grey[300]),backgroundColor:n.vars?n.vars.palette.Button.inheritContainedBg:l,boxShadow:(n.vars||n).shadows[2]},r.variant==="contained"&&r.color!=="inherit"&&{color:(n.vars||n).palette[r.color].contrastText,backgroundColor:(n.vars||n).palette[r.color].main},r.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},r.size==="small"&&r.variant==="text"&&{padding:"4px 5px",fontSize:n.typography.pxToRem(13)},r.size==="large"&&r.variant==="text"&&{padding:"8px 11px",fontSize:n.typography.pxToRem(15)},r.size==="small"&&r.variant==="outlined"&&{padding:"3px 9px",fontSize:n.typography.pxToRem(13)},r.size==="large"&&r.variant==="outlined"&&{padding:"7px 21px",fontSize:n.typography.pxToRem(15)},r.size==="small"&&r.variant==="contained"&&{padding:"4px 10px",fontSize:n.typography.pxToRem(13)},r.size==="large"&&r.variant==="contained"&&{padding:"8px 22px",fontSize:n.typography.pxToRem(15)},r.fullWidth&&{width:"100%"})},({ownerState:n})=>n.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Hs.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Hs.disabled}`]:{boxShadow:"none"}}),Nb=de("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.startIcon,r[`iconSize${ge(o.size)}`]]}})(({ownerState:n})=>C({display:"inherit",marginRight:8,marginLeft:-4},n.size==="small"&&{marginLeft:-2},xh(n))),Db=de("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.endIcon,r[`iconSize${ge(o.size)}`]]}})(({ownerState:n})=>C({display:"inherit",marginRight:-4,marginLeft:8},n.size==="small"&&{marginRight:-2},xh(n))),cm=b.forwardRef(function(r,o){const a=b.useContext(zb),l=b.useContext(_b),u=So(a,r),p=$e({props:u,name:"MuiButton"}),{children:f,color:h="primary",component:g="button",className:x,disabled:y=!1,disableElevation:k=!1,disableFocusRipple:$=!1,endIcon:E,focusVisibleClassName:v,fullWidth:M=!1,size:_="medium",startIcon:j,type:R,variant:z="text"}=p,I=me(p,$b),F=C({},p,{color:h,component:g,disabled:y,disableElevation:k,disableFocusRipple:$,fullWidth:M,size:_,type:R,variant:z}),w=Ob(F),L=j&&N.jsx(Nb,{className:w.startIcon,ownerState:F,children:j}),H=E&&N.jsx(Db,{className:w.endIcon,ownerState:F,children:E}),U=l||"";return N.jsxs(Ab,C({ownerState:F,className:ve(a.className,w.root,x,U),component:g,disabled:y,focusRipple:!$,focusVisibleClassName:ve(w.focusVisible,v),ref:o,type:R},I,{classes:w,children:[L,f,H]}))});function Lb(n){return _e("MuiCard",n)}Me("MuiCard",["root"]);const Fb=["className","raised"],jb=n=>{const{classes:r}=n;return Ae({root:["root"]},Lb,r)},Bb=de(Ar,{name:"MuiCard",slot:"Root",overridesResolver:(n,r)=>r.root})(()=>({overflow:"hidden"})),Wb=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiCard"}),{className:l,raised:u=!1}=a,p=me(a,Fb),f=C({},a,{raised:u}),h=jb(f);return N.jsx(Bb,C({className:ve(h.root,l),elevation:u?8:void 0,ref:o,ownerState:f},p))});function Ub(n){return _e("MuiCardContent",n)}Me("MuiCardContent",["root"]);const Hb=["className","component"],Vb=n=>{const{classes:r}=n;return Ae({root:["root"]},Ub,r)},Kb=de("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(n,r)=>r.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),Gb=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiCardContent"}),{className:l,component:u="div"}=a,p=me(a,Hb),f=C({},a,{component:u}),h=Vb(f);return N.jsx(Kb,C({as:u,className:ve(h.root,l),ownerState:f,ref:o},p))});function qb(n){return _e("MuiCardMedia",n)}Me("MuiCardMedia",["root","media","img"]);const Yb=["children","className","component","image","src","style"],Xb=n=>{const{classes:r,isMediaComponent:o,isImageComponent:a}=n;return Ae({root:["root",o&&"media",a&&"img"]},qb,r)},Qb=de("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n,{isMediaComponent:a,isImageComponent:l}=o;return[r.root,a&&r.media,l&&r.img]}})(({ownerState:n})=>C({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},n.isMediaComponent&&{width:"100%"},n.isImageComponent&&{objectFit:"cover"})),Zb=["video","audio","picture","iframe","img"],Jb=["picture","img"],ew=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiCardMedia"}),{children:l,className:u,component:p="div",image:f,src:h,style:g}=a,x=me(a,Yb),y=Zb.indexOf(p)!==-1,k=!y&&f?C({backgroundImage:`url("${f}")`},g):g,$=C({},a,{component:p,isMediaComponent:y,isImageComponent:Jb.indexOf(p)!==-1}),E=Xb($);return N.jsx(Qb,C({className:ve(E.root,u),as:p,role:!y&&f?"img":void 0,ref:o,style:k,ownerState:$,src:y?f||h:void 0},x,{children:l}))});function um(n){return n.substring(2).toLowerCase()}function tw(n,r){return r.documentElement.clientWidth<n.clientX||r.documentElement.clientHeight<n.clientY}function nw(n){const{children:r,disableReactTree:o=!1,mouseEvent:a="onClick",onClickAway:l,touchEvent:u="onTouchEnd"}=n,p=b.useRef(!1),f=b.useRef(null),h=b.useRef(!1),g=b.useRef(!1);b.useEffect(()=>(setTimeout(()=>{h.current=!0},0),()=>{h.current=!1}),[]);const x=mt(Or(r),f),y=wn(E=>{const v=g.current;g.current=!1;const M=St(f.current);if(!h.current||!f.current||"clientX"in E&&tw(E,M))return;if(p.current){p.current=!1;return}let _;E.composedPath?_=E.composedPath().indexOf(f.current)>-1:_=!M.documentElement.contains(E.target)||f.current.contains(E.target),!_&&(o||!v)&&l(E)}),k=E=>v=>{g.current=!0;const M=r.props[E];M&&M(v)},$={ref:x};return u!==!1&&($[u]=k(u)),b.useEffect(()=>{if(u!==!1){const E=um(u),v=St(f.current),M=()=>{p.current=!0};return v.addEventListener(E,y),v.addEventListener("touchmove",M),()=>{v.removeEventListener(E,y),v.removeEventListener("touchmove",M)}}},[y,u]),a!==!1&&($[a]=k(a)),b.useEffect(()=>{if(a!==!1){const E=um(a),v=St(f.current);return v.addEventListener(E,y),()=>{v.removeEventListener(E,y)}}},[y,a]),N.jsx(b.Fragment,{children:b.cloneElement(r,$)})}const rw=(n,r)=>C({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},r&&!n.vars&&{colorScheme:n.palette.mode}),iw=n=>C({color:(n.vars||n).palette.text.primary},n.typography.body1,{backgroundColor:(n.vars||n).palette.background.default,"@media print":{backgroundColor:(n.vars||n).palette.common.white}}),ow=(n,r=!1)=>{var o;const a={};r&&n.colorSchemes&&Object.entries(n.colorSchemes).forEach(([p,f])=>{var h;a[n.getColorSchemeSelector(p).replace(/\s*&/,"")]={colorScheme:(h=f.palette)==null?void 0:h.mode}});let l=C({html:rw(n,r),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:n.typography.fontWeightBold},body:C({margin:0},iw(n),{"&::backdrop":{backgroundColor:(n.vars||n).palette.background.default}})},a);const u=(o=n.components)==null||(o=o.MuiCssBaseline)==null?void 0:o.styleOverrides;return u&&(l=[l,u]),l};function sw(n){const r=$e({props:n,name:"MuiCssBaseline"}),{children:o,enableColorScheme:a=!1}=r;return N.jsxs(b.Fragment,{children:[N.jsx(hh,{styles:l=>ow(l,a)}),o]})}function aw(n){const r=St(n);return r.body===n?$n(n).innerWidth>r.documentElement.clientWidth:n.scrollHeight>n.clientHeight}function yo(n,r){r?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden")}function dm(n){return parseInt($n(n).getComputedStyle(n).paddingRight,10)||0}function lw(n){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(n.tagName)!==-1,a=n.tagName==="INPUT"&&n.getAttribute("type")==="hidden";return o||a}function pm(n,r,o,a,l){const u=[r,o,...a];[].forEach.call(n.children,p=>{const f=u.indexOf(p)===-1,h=!lw(p);f&&h&&yo(p,l)})}function Ic(n,r){let o=-1;return n.some((a,l)=>r(a)?(o=l,!0):!1),o}function cw(n,r){const o=[],a=n.container;if(!r.disableScrollLock){if(aw(a)){const p=oh(St(a));o.push({value:a.style.paddingRight,property:"padding-right",el:a}),a.style.paddingRight=`${dm(a)+p}px`;const f=St(a).querySelectorAll(".mui-fixed");[].forEach.call(f,h=>{o.push({value:h.style.paddingRight,property:"padding-right",el:h}),h.style.paddingRight=`${dm(h)+p}px`})}let u;if(a.parentNode instanceof DocumentFragment)u=St(a).body;else{const p=a.parentElement,f=$n(a);u=(p==null?void 0:p.nodeName)==="HTML"&&f.getComputedStyle(p).overflowY==="scroll"?p:a}o.push({value:u.style.overflow,property:"overflow",el:u},{value:u.style.overflowX,property:"overflow-x",el:u},{value:u.style.overflowY,property:"overflow-y",el:u}),u.style.overflow="hidden"}return()=>{o.forEach(({value:u,el:p,property:f})=>{u?p.style.setProperty(f,u):p.style.removeProperty(f)})}}function uw(n){const r=[];return[].forEach.call(n.children,o=>{o.getAttribute("aria-hidden")==="true"&&r.push(o)}),r}class dw{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(r,o){let a=this.modals.indexOf(r);if(a!==-1)return a;a=this.modals.length,this.modals.push(r),r.modalRef&&yo(r.modalRef,!1);const l=uw(o);pm(o,r.mount,r.modalRef,l,!0);const u=Ic(this.containers,p=>p.container===o);return u!==-1?(this.containers[u].modals.push(r),a):(this.containers.push({modals:[r],container:o,restore:null,hiddenSiblings:l}),a)}mount(r,o){const a=Ic(this.containers,u=>u.modals.indexOf(r)!==-1),l=this.containers[a];l.restore||(l.restore=cw(l,o))}remove(r,o=!0){const a=this.modals.indexOf(r);if(a===-1)return a;const l=Ic(this.containers,p=>p.modals.indexOf(r)!==-1),u=this.containers[l];if(u.modals.splice(u.modals.indexOf(r),1),this.modals.splice(a,1),u.modals.length===0)u.restore&&u.restore(),r.modalRef&&yo(r.modalRef,o),pm(u.container,r.mount,r.modalRef,u.hiddenSiblings,!1),this.containers.splice(l,1);else{const p=u.modals[u.modals.length-1];p.modalRef&&yo(p.modalRef,!1)}return a}isTopModal(r){return this.modals.length>0&&this.modals[this.modals.length-1]===r}}const pw=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function fw(n){const r=parseInt(n.getAttribute("tabindex")||"",10);return Number.isNaN(r)?n.contentEditable==="true"||(n.nodeName==="AUDIO"||n.nodeName==="VIDEO"||n.nodeName==="DETAILS")&&n.getAttribute("tabindex")===null?0:n.tabIndex:r}function mw(n){if(n.tagName!=="INPUT"||n.type!=="radio"||!n.name)return!1;const r=a=>n.ownerDocument.querySelector(`input[type="radio"]${a}`);let o=r(`[name="${n.name}"]:checked`);return o||(o=r(`[name="${n.name}"]`)),o!==n}function hw(n){return!(n.disabled||n.tagName==="INPUT"&&n.type==="hidden"||mw(n))}function gw(n){const r=[],o=[];return Array.from(n.querySelectorAll(pw)).forEach((a,l)=>{const u=fw(a);u===-1||!hw(a)||(u===0?r.push(a):o.push({documentOrder:l,tabIndex:u,node:a}))}),o.sort((a,l)=>a.tabIndex===l.tabIndex?a.documentOrder-l.documentOrder:a.tabIndex-l.tabIndex).map(a=>a.node).concat(r)}function vw(){return!0}function xw(n){const{children:r,disableAutoFocus:o=!1,disableEnforceFocus:a=!1,disableRestoreFocus:l=!1,getTabbable:u=gw,isEnabled:p=vw,open:f}=n,h=b.useRef(!1),g=b.useRef(null),x=b.useRef(null),y=b.useRef(null),k=b.useRef(null),$=b.useRef(!1),E=b.useRef(null),v=mt(Or(r),E),M=b.useRef(null);b.useEffect(()=>{!f||!E.current||($.current=!o)},[o,f]),b.useEffect(()=>{if(!f||!E.current)return;const R=St(E.current);return E.current.contains(R.activeElement)||(E.current.hasAttribute("tabIndex")||E.current.setAttribute("tabIndex","-1"),$.current&&E.current.focus()),()=>{l||(y.current&&y.current.focus&&(h.current=!0,y.current.focus()),y.current=null)}},[f]),b.useEffect(()=>{if(!f||!E.current)return;const R=St(E.current),z=w=>{M.current=w,!(a||!p()||w.key!=="Tab")&&R.activeElement===E.current&&w.shiftKey&&(h.current=!0,x.current&&x.current.focus())},I=()=>{const w=E.current;if(w===null)return;if(!R.hasFocus()||!p()||h.current){h.current=!1;return}if(w.contains(R.activeElement)||a&&R.activeElement!==g.current&&R.activeElement!==x.current)return;if(R.activeElement!==k.current)k.current=null;else if(k.current!==null)return;if(!$.current)return;let L=[];if((R.activeElement===g.current||R.activeElement===x.current)&&(L=u(E.current)),L.length>0){var H,U;const G=!!((H=M.current)!=null&&H.shiftKey&&((U=M.current)==null?void 0:U.key)==="Tab"),ee=L[0],Y=L[L.length-1];typeof ee!="string"&&typeof Y!="string"&&(G?Y.focus():ee.focus())}else w.focus()};R.addEventListener("focusin",I),R.addEventListener("keydown",z,!0);const F=setInterval(()=>{R.activeElement&&R.activeElement.tagName==="BODY"&&I()},50);return()=>{clearInterval(F),R.removeEventListener("focusin",I),R.removeEventListener("keydown",z,!0)}},[o,a,l,p,f,u]);const _=R=>{y.current===null&&(y.current=R.relatedTarget),$.current=!0,k.current=R.target;const z=r.props.onFocus;z&&z(R)},j=R=>{y.current===null&&(y.current=R.relatedTarget),$.current=!0};return N.jsxs(b.Fragment,{children:[N.jsx("div",{tabIndex:f?0:-1,onFocus:j,ref:g,"data-testid":"sentinelStart"}),b.cloneElement(r,{ref:v,onFocus:_}),N.jsx("div",{tabIndex:f?0:-1,onFocus:j,ref:x,"data-testid":"sentinelEnd"})]})}function yw(n){return typeof n=="function"?n():n}function bw(n){return n?n.props.hasOwnProperty("in"):!1}const ww=new dw;function Cw(n){const{container:r,disableEscapeKeyDown:o=!1,disableScrollLock:a=!1,manager:l=ww,closeAfterTransition:u=!1,onTransitionEnter:p,onTransitionExited:f,children:h,onClose:g,open:x,rootRef:y}=n,k=b.useRef({}),$=b.useRef(null),E=b.useRef(null),v=mt(E,y),[M,_]=b.useState(!x),j=bw(h);let R=!0;(n["aria-hidden"]==="false"||n["aria-hidden"]===!1)&&(R=!1);const z=()=>St($.current),I=()=>(k.current.modalRef=E.current,k.current.mount=$.current,k.current),F=()=>{l.mount(I(),{disableScrollLock:a}),E.current&&(E.current.scrollTop=0)},w=wn(()=>{const ie=yw(r)||z().body;l.add(I(),ie),E.current&&F()}),L=b.useCallback(()=>l.isTopModal(I()),[l]),H=wn(ie=>{$.current=ie,ie&&(x&&L()?F():E.current&&yo(E.current,R))}),U=b.useCallback(()=>{l.remove(I(),R)},[R,l]);b.useEffect(()=>()=>{U()},[U]),b.useEffect(()=>{x?w():(!j||!u)&&U()},[x,U,j,u,w]);const G=ie=>ne=>{var A;(A=ie.onKeyDown)==null||A.call(ie,ne),!(ne.key!=="Escape"||ne.which===229||!L())&&(o||(ne.stopPropagation(),g&&g(ne,"escapeKeyDown")))},ee=ie=>ne=>{var A;(A=ie.onClick)==null||A.call(ie,ne),ne.target===ne.currentTarget&&g&&g(ne,"backdropClick")};return{getRootProps:(ie={})=>{const ne=ea(n);delete ne.onTransitionEnter,delete ne.onTransitionExited;const A=C({},ne,ie);return C({role:"presentation"},A,{onKeyDown:G(A),ref:v})},getBackdropProps:(ie={})=>{const ne=ie;return C({"aria-hidden":!0},ne,{onClick:ee(ne),open:x})},getTransitionProps:()=>{const ie=()=>{_(!1),p&&p()},ne=()=>{_(!0),f&&f(),u&&U()};return{onEnter:Lc(ie,h==null?void 0:h.props.onEnter),onExited:Lc(ne,h==null?void 0:h.props.onExited)}},rootRef:v,portalRef:H,isTopModal:L,exited:M,hasTransition:j}}function kw(n){return _e("MuiModal",n)}Me("MuiModal",["root","hidden","backdrop"]);const Sw=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],Ew=n=>{const{open:r,exited:o,classes:a}=n;return Ae({root:["root",!r&&o&&"hidden"],backdrop:["backdrop"]},kw,a)},Iw=de("div",{name:"MuiModal",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,!o.open&&o.exited&&r.hidden]}})(({theme:n,ownerState:r})=>C({position:"fixed",zIndex:(n.vars||n).zIndex.modal,right:0,bottom:0,top:0,left:0},!r.open&&r.exited&&{visibility:"hidden"})),Tw=de(vh,{name:"MuiModal",slot:"Backdrop",overridesResolver:(n,r)=>r.backdrop})({zIndex:-1}),wu=b.forwardRef(function(r,o){var a,l,u,p,f,h;const g=$e({name:"MuiModal",props:r}),{BackdropComponent:x=Tw,BackdropProps:y,className:k,closeAfterTransition:$=!1,children:E,container:v,component:M,components:_={},componentsProps:j={},disableAutoFocus:R=!1,disableEnforceFocus:z=!1,disableEscapeKeyDown:I=!1,disablePortal:F=!1,disableRestoreFocus:w=!1,disableScrollLock:L=!1,hideBackdrop:H=!1,keepMounted:U=!1,onBackdropClick:G,open:ee,slotProps:Y,slots:Q}=g,te=me(g,Sw),ie=C({},g,{closeAfterTransition:$,disableAutoFocus:R,disableEnforceFocus:z,disableEscapeKeyDown:I,disablePortal:F,disableRestoreFocus:w,disableScrollLock:L,hideBackdrop:H,keepMounted:U}),{getRootProps:ne,getBackdropProps:A,getTransitionProps:Z,portalRef:J,isTopModal:O,exited:V,hasTransition:pe}=Cw(C({},ie,{rootRef:o})),se=C({},ie,{exited:V}),he=Ew(se),ae={};if(E.props.tabIndex===void 0&&(ae.tabIndex="-1"),pe){const{onEnter:ye,onExited:Re}=Z();ae.onEnter=ye,ae.onExited=Re}const Se=(a=(l=Q==null?void 0:Q.root)!=null?l:_.Root)!=null?a:Iw,Ie=(u=(p=Q==null?void 0:Q.backdrop)!=null?p:_.Backdrop)!=null?u:x,xe=(f=Y==null?void 0:Y.root)!=null?f:j.root,Le=(h=Y==null?void 0:Y.backdrop)!=null?h:j.backdrop,Te=$r({elementType:Se,externalSlotProps:xe,externalForwardedProps:te,getSlotProps:ne,additionalProps:{ref:o,as:M},ownerState:se,className:ve(k,xe==null?void 0:xe.className,he==null?void 0:he.root,!se.open&&se.exited&&(he==null?void 0:he.hidden))}),ze=$r({elementType:Ie,externalSlotProps:Le,additionalProps:y,getSlotProps:ye=>A(C({},ye,{onClick:Re=>{G&&G(Re),ye!=null&&ye.onClick&&ye.onClick(Re)}})),className:ve(Le==null?void 0:Le.className,y==null?void 0:y.className,he==null?void 0:he.backdrop),ownerState:se});return!U&&!ee&&(!pe||V)?null:N.jsx(lb,{ref:J,container:v,disablePortal:F,children:N.jsxs(Se,C({},Te,{children:[!H&&x?N.jsx(Ie,C({},ze)):null,N.jsx(xw,{disableEnforceFocus:z,disableAutoFocus:R,disableRestoreFocus:w,isEnabled:O,open:ee,children:b.cloneElement(E,ae)})]}))})});function Rw(n){return _e("MuiDialog",n)}const Tc=Me("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),Pw=b.createContext({}),Mw=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],zw=de(vh,{name:"MuiDialog",slot:"Backdrop",overrides:(n,r)=>r.backdrop})({zIndex:-1}),_w=n=>{const{classes:r,scroll:o,maxWidth:a,fullWidth:l,fullScreen:u}=n,p={root:["root"],container:["container",`scroll${ge(o)}`],paper:["paper",`paperScroll${ge(o)}`,`paperWidth${ge(String(a))}`,l&&"paperFullWidth",u&&"paperFullScreen"]};return Ae(p,Rw,r)},$w=de(wu,{name:"MuiDialog",slot:"Root",overridesResolver:(n,r)=>r.root})({"@media print":{position:"absolute !important"}}),Ow=de("div",{name:"MuiDialog",slot:"Container",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.container,r[`scroll${ge(o.scroll)}`]]}})(({ownerState:n})=>C({height:"100%","@media print":{height:"auto"},outline:0},n.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},n.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),Aw=de(Ar,{name:"MuiDialog",slot:"Paper",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.paper,r[`scrollPaper${ge(o.scroll)}`],r[`paperWidth${ge(String(o.maxWidth))}`],o.fullWidth&&r.paperFullWidth,o.fullScreen&&r.paperFullScreen]}})(({theme:n,ownerState:r})=>C({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},r.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},r.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!r.maxWidth&&{maxWidth:"calc(100% - 64px)"},r.maxWidth==="xs"&&{maxWidth:n.breakpoints.unit==="px"?Math.max(n.breakpoints.values.xs,444):`max(${n.breakpoints.values.xs}${n.breakpoints.unit}, 444px)`,[`&.${Tc.paperScrollBody}`]:{[n.breakpoints.down(Math.max(n.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},r.maxWidth&&r.maxWidth!=="xs"&&{maxWidth:`${n.breakpoints.values[r.maxWidth]}${n.breakpoints.unit}`,[`&.${Tc.paperScrollBody}`]:{[n.breakpoints.down(n.breakpoints.values[r.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},r.fullWidth&&{width:"calc(100% - 64px)"},r.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${Tc.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),Nw=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiDialog"}),l=Hn(),u={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{"aria-describedby":p,"aria-labelledby":f,BackdropComponent:h,BackdropProps:g,children:x,className:y,disableEscapeKeyDown:k=!1,fullScreen:$=!1,fullWidth:E=!1,maxWidth:v="sm",onBackdropClick:M,onClick:_,onClose:j,open:R,PaperComponent:z=Ar,PaperProps:I={},scroll:F="paper",TransitionComponent:w=gh,transitionDuration:L=u,TransitionProps:H}=a,U=me(a,Mw),G=C({},a,{disableEscapeKeyDown:k,fullScreen:$,fullWidth:E,maxWidth:v,scroll:F}),ee=_w(G),Y=b.useRef(),Q=A=>{Y.current=A.target===A.currentTarget},te=A=>{_&&_(A),Y.current&&(Y.current=null,M&&M(A),j&&j(A,"backdropClick"))},ie=cu(f),ne=b.useMemo(()=>({titleId:ie}),[ie]);return N.jsx($w,C({className:ve(ee.root,y),closeAfterTransition:!0,components:{Backdrop:zw},componentsProps:{backdrop:C({transitionDuration:L,as:h},g)},disableEscapeKeyDown:k,onClose:j,open:R,ref:o,onClick:te,ownerState:G},U,{children:N.jsx(w,C({appear:!0,in:R,timeout:L,role:"presentation"},H,{children:N.jsx(Ow,{className:ve(ee.container),onMouseDown:Q,ownerState:G,children:N.jsx(Aw,C({as:z,elevation:24,role:"dialog","aria-describedby":p,"aria-labelledby":ie},I,{className:ve(ee.paper,I.className),ownerState:G,children:N.jsx(Pw.Provider,{value:ne,children:x})}))})}))}))});function Dw(n){return _e("MuiDialogContent",n)}Me("MuiDialogContent",["root","dividers"]);const Lw=Me("MuiDialogTitle",["root"]),Fw=["className","dividers"],jw=n=>{const{classes:r,dividers:o}=n;return Ae({root:["root",o&&"dividers"]},Dw,r)},Bw=de("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,o.dividers&&r.dividers]}})(({theme:n,ownerState:r})=>C({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},r.dividers?{padding:"16px 24px",borderTop:`1px solid ${(n.vars||n).palette.divider}`,borderBottom:`1px solid ${(n.vars||n).palette.divider}`}:{[`.${Lw.root} + &`]:{paddingTop:0}})),Ww=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiDialogContent"}),{className:l,dividers:u=!1}=a,p=me(a,Fw),f=C({},a,{dividers:u}),h=jw(f);return N.jsx(Bw,C({className:ve(h.root,l),ownerState:f,ref:o},p))});function Uw(n){return _e("MuiDivider",n)}const fm=Me("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),Hw=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],Vw=n=>{const{absolute:r,children:o,classes:a,flexItem:l,light:u,orientation:p,textAlign:f,variant:h}=n;return Ae({root:["root",r&&"absolute",h,u&&"light",p==="vertical"&&"vertical",l&&"flexItem",o&&"withChildren",o&&p==="vertical"&&"withChildrenVertical",f==="right"&&p!=="vertical"&&"textAlignRight",f==="left"&&p!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",p==="vertical"&&"wrapperVertical"]},Uw,a)},Kw=de("div",{name:"MuiDivider",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,o.absolute&&r.absolute,r[o.variant],o.light&&r.light,o.orientation==="vertical"&&r.vertical,o.flexItem&&r.flexItem,o.children&&r.withChildren,o.children&&o.orientation==="vertical"&&r.withChildrenVertical,o.textAlign==="right"&&o.orientation!=="vertical"&&r.textAlignRight,o.textAlign==="left"&&o.orientation!=="vertical"&&r.textAlignLeft]}})(({theme:n,ownerState:r})=>C({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(n.vars||n).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:n.vars?`rgba(${n.vars.palette.dividerChannel} / 0.08)`:at.alpha(n.palette.divider,.08)},r.variant==="inset"&&{marginLeft:72},r.variant==="middle"&&r.orientation==="horizontal"&&{marginLeft:n.spacing(2),marginRight:n.spacing(2)},r.variant==="middle"&&r.orientation==="vertical"&&{marginTop:n.spacing(1),marginBottom:n.spacing(1)},r.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:n})=>C({},n.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:n,ownerState:r})=>C({},r.children&&r.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(n.vars||n).palette.divider}`,borderTopStyle:"inherit"}}),({theme:n,ownerState:r})=>C({},r.children&&r.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(n.vars||n).palette.divider}`,borderLeftStyle:"inherit"}}),({ownerState:n})=>C({},n.textAlign==="right"&&n.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},n.textAlign==="left"&&n.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),Gw=de("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.wrapper,o.orientation==="vertical"&&r.wrapperVertical]}})(({theme:n,ownerState:r})=>C({display:"inline-block",paddingLeft:`calc(${n.spacing(1)} * 1.2)`,paddingRight:`calc(${n.spacing(1)} * 1.2)`},r.orientation==="vertical"&&{paddingTop:`calc(${n.spacing(1)} * 1.2)`,paddingBottom:`calc(${n.spacing(1)} * 1.2)`})),yh=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiDivider"}),{absolute:l=!1,children:u,className:p,component:f=u?"div":"hr",flexItem:h=!1,light:g=!1,orientation:x="horizontal",role:y=f!=="hr"?"separator":void 0,textAlign:k="center",variant:$="fullWidth"}=a,E=me(a,Hw),v=C({},a,{absolute:l,component:f,flexItem:h,light:g,orientation:x,role:y,textAlign:k,variant:$}),M=Vw(v);return N.jsx(Kw,C({as:f,className:ve(M.root,p),role:y,ref:o,ownerState:v},E,{children:u?N.jsx(Gw,{className:M.wrapper,ownerState:v,children:u}):null}))});yh.muiSkipListHighlight=!0;const qw=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Yw(n,r,o){const a=r.getBoundingClientRect(),l=o&&o.getBoundingClientRect(),u=$n(r);let p;if(r.fakeTransform)p=r.fakeTransform;else{const g=u.getComputedStyle(r);p=g.getPropertyValue("-webkit-transform")||g.getPropertyValue("transform")}let f=0,h=0;if(p&&p!=="none"&&typeof p=="string"){const g=p.split("(")[1].split(")")[0].split(",");f=parseInt(g[4],10),h=parseInt(g[5],10)}return n==="left"?l?`translateX(${l.right+f-a.left}px)`:`translateX(${u.innerWidth+f-a.left}px)`:n==="right"?l?`translateX(-${a.right-l.left-f}px)`:`translateX(-${a.left+a.width-f}px)`:n==="up"?l?`translateY(${l.bottom+h-a.top}px)`:`translateY(${u.innerHeight+h-a.top}px)`:l?`translateY(-${a.top-l.top+a.height-h}px)`:`translateY(-${a.top+a.height-h}px)`}function Xw(n){return typeof n=="function"?n():n}function Vs(n,r,o){const a=Xw(o),l=Yw(n,r,a);l&&(r.style.webkitTransform=l,r.style.transform=l)}const Qw=b.forwardRef(function(r,o){const a=Hn(),l={enter:a.transitions.easing.easeOut,exit:a.transitions.easing.sharp},u={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{addEndListener:p,appear:f=!0,children:h,container:g,direction:x="down",easing:y=l,in:k,onEnter:$,onEntered:E,onEntering:v,onExit:M,onExited:_,onExiting:j,style:R,timeout:z=u,TransitionComponent:I=kn}=r,F=me(r,qw),w=b.useRef(null),L=mt(Or(h),w,o),H=A=>Z=>{A&&(Z===void 0?A(w.current):A(w.current,Z))},U=H((A,Z)=>{Vs(x,A,g),gu(A),$&&$(A,Z)}),G=H((A,Z)=>{const J=yi({timeout:z,style:R,easing:y},{mode:"enter"});A.style.webkitTransition=a.transitions.create("-webkit-transform",C({},J)),A.style.transition=a.transitions.create("transform",C({},J)),A.style.webkitTransform="none",A.style.transform="none",v&&v(A,Z)}),ee=H(E),Y=H(j),Q=H(A=>{const Z=yi({timeout:z,style:R,easing:y},{mode:"exit"});A.style.webkitTransition=a.transitions.create("-webkit-transform",Z),A.style.transition=a.transitions.create("transform",Z),Vs(x,A,g),M&&M(A)}),te=H(A=>{A.style.webkitTransition="",A.style.transition="",_&&_(A)}),ie=A=>{p&&p(w.current,A)},ne=b.useCallback(()=>{w.current&&Vs(x,w.current,g)},[x,g]);return b.useEffect(()=>{if(k||x==="down"||x==="right")return;const A=va(()=>{w.current&&Vs(x,w.current,g)}),Z=$n(w.current);return Z.addEventListener("resize",A),()=>{A.clear(),Z.removeEventListener("resize",A)}},[x,k,g]),b.useEffect(()=>{k||ne()},[k,ne]),N.jsx(I,C({nodeRef:w,onEnter:U,onEntered:ee,onEntering:G,onExit:Q,onExited:te,onExiting:Y,addEndListener:ie,appear:f,in:k,timeout:z},F,{children:(A,Z)=>b.cloneElement(h,C({ref:L,style:C({visibility:A==="exited"&&!k?"hidden":void 0},R,h.props.style)},Z))}))});function Zw(n){return _e("MuiDrawer",n)}Me("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Jw=["BackdropProps"],e2=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],bh=(n,r)=>{const{ownerState:o}=n;return[r.root,(o.variant==="permanent"||o.variant==="persistent")&&r.docked,r.modal]},t2=n=>{const{classes:r,anchor:o,variant:a}=n,l={root:["root"],docked:[(a==="permanent"||a==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${ge(o)}`,a!=="temporary"&&`paperAnchorDocked${ge(o)}`]};return Ae(l,Zw,r)},n2=de(wu,{name:"MuiDrawer",slot:"Root",overridesResolver:bh})(({theme:n})=>({zIndex:(n.vars||n).zIndex.drawer})),mm=de("div",{shouldForwardProp:Jt,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:bh})({flex:"0 0 auto"}),r2=de(Ar,{name:"MuiDrawer",slot:"Paper",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.paper,r[`paperAnchor${ge(o.anchor)}`],o.variant!=="temporary"&&r[`paperAnchorDocked${ge(o.anchor)}`]]}})(({theme:n,ownerState:r})=>C({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(n.vars||n).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},r.anchor==="left"&&{left:0},r.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},r.anchor==="right"&&{right:0},r.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},r.anchor==="left"&&r.variant!=="temporary"&&{borderRight:`1px solid ${(n.vars||n).palette.divider}`},r.anchor==="top"&&r.variant!=="temporary"&&{borderBottom:`1px solid ${(n.vars||n).palette.divider}`},r.anchor==="right"&&r.variant!=="temporary"&&{borderLeft:`1px solid ${(n.vars||n).palette.divider}`},r.anchor==="bottom"&&r.variant!=="temporary"&&{borderTop:`1px solid ${(n.vars||n).palette.divider}`})),wh={left:"right",right:"left",top:"down",bottom:"up"};function i2(n){return["left","right"].indexOf(n)!==-1}function o2({direction:n},r){return n==="rtl"&&i2(r)?wh[r]:r}const s2=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiDrawer"}),l=Hn(),u=ch(),p={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{anchor:f="left",BackdropProps:h,children:g,className:x,elevation:y=16,hideBackdrop:k=!1,ModalProps:{BackdropProps:$}={},onClose:E,open:v=!1,PaperProps:M={},SlideProps:_,TransitionComponent:j=Qw,transitionDuration:R=p,variant:z="temporary"}=a,I=me(a.ModalProps,Jw),F=me(a,e2),w=b.useRef(!1);b.useEffect(()=>{w.current=!0},[]);const L=o2({direction:u?"rtl":"ltr"},f),U=C({},a,{anchor:f,elevation:y,open:v,variant:z},F),G=t2(U),ee=N.jsx(r2,C({elevation:z==="temporary"?y:0,square:!0},M,{className:ve(G.paper,M.className),ownerState:U,children:g}));if(z==="permanent")return N.jsx(mm,C({className:ve(G.root,G.docked,x),ownerState:U,ref:o},F,{children:ee}));const Y=N.jsx(j,C({in:v,direction:wh[L],timeout:R,appear:w.current},_,{children:ee}));return z==="persistent"?N.jsx(mm,C({className:ve(G.root,G.docked,x),ownerState:U,ref:o},F,{children:Y})):N.jsx(n2,C({BackdropProps:C({},h,$,{transitionDuration:R}),className:ve(G.root,G.modal,x),open:v,ownerState:U,onClose:E,hideBackdrop:k,ref:o},F,I,{children:Y}))}),a2=["disableUnderline","components","componentsProps","fullWidth","hiddenLabel","inputComponent","multiline","slotProps","slots","type"],l2=n=>{const{classes:r,disableUnderline:o}=n,l=Ae({root:["root",!o&&"underline"],input:["input"]},bb,r);return C({},r,l)},c2=de(Sa,{shouldForwardProp:n=>Jt(n)||n==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[...Ca(n,r),!o.disableUnderline&&r.underline]}})(({theme:n,ownerState:r})=>{var o;const a=n.palette.mode==="light",l=a?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",u=a?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",p=a?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",f=a?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return C({position:"relative",backgroundColor:n.vars?n.vars.palette.FilledInput.bg:u,borderTopLeftRadius:(n.vars||n).shape.borderRadius,borderTopRightRadius:(n.vars||n).shape.borderRadius,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),"&:hover":{backgroundColor:n.vars?n.vars.palette.FilledInput.hoverBg:p,"@media (hover: none)":{backgroundColor:n.vars?n.vars.palette.FilledInput.bg:u}},[`&.${Rr.focused}`]:{backgroundColor:n.vars?n.vars.palette.FilledInput.bg:u},[`&.${Rr.disabled}`]:{backgroundColor:n.vars?n.vars.palette.FilledInput.disabledBg:f}},!r.disableUnderline&&{"&::after":{borderBottom:`2px solid ${(o=(n.vars||n).palette[r.color||"primary"])==null?void 0:o.main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Rr.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${Rr.error}`]:{"&::before, &::after":{borderBottomColor:(n.vars||n).palette.error.main}},"&::before":{borderBottom:`1px solid ${n.vars?`rgba(${n.vars.palette.common.onBackgroundChannel} / ${n.vars.opacity.inputUnderline})`:l}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:n.transitions.create("border-bottom-color",{duration:n.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Rr.disabled}, .${Rr.error}):before`]:{borderBottom:`1px solid ${(n.vars||n).palette.text.primary}`},[`&.${Rr.disabled}:before`]:{borderBottomStyle:"dotted"}},r.startAdornment&&{paddingLeft:12},r.endAdornment&&{paddingRight:12},r.multiline&&C({padding:"25px 12px 8px"},r.size==="small"&&{paddingTop:21,paddingBottom:4},r.hiddenLabel&&{paddingTop:16,paddingBottom:17},r.hiddenLabel&&r.size==="small"&&{paddingTop:8,paddingBottom:9}))}),u2=de(Ea,{name:"MuiFilledInput",slot:"Input",overridesResolver:ka})(({theme:n,ownerState:r})=>C({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12},!n.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:n.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:n.palette.mode==="light"?null:"#fff",caretColor:n.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},n.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[n.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},r.size==="small"&&{paddingTop:21,paddingBottom:4},r.hiddenLabel&&{paddingTop:16,paddingBottom:17},r.startAdornment&&{paddingLeft:0},r.endAdornment&&{paddingRight:0},r.hiddenLabel&&r.size==="small"&&{paddingTop:8,paddingBottom:9},r.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0})),Ch=b.forwardRef(function(r,o){var a,l,u,p;const f=$e({props:r,name:"MuiFilledInput"}),{components:h={},componentsProps:g,fullWidth:x=!1,inputComponent:y="input",multiline:k=!1,slotProps:$,slots:E={},type:v="text"}=f,M=me(f,a2),_=C({},f,{fullWidth:x,inputComponent:y,multiline:k,type:v}),j=l2(f),R={root:{ownerState:_},input:{ownerState:_}},z=$??g?Zt(R,$??g):R,I=(a=(l=E.root)!=null?l:h.Root)!=null?a:c2,F=(u=(p=E.input)!=null?p:h.Input)!=null?u:u2;return N.jsx(bu,C({slots:{root:I,input:F},componentsProps:z,fullWidth:x,inputComponent:y,multiline:k,ref:o,type:v},M,{classes:j}))});Ch.muiName="Input";function d2(n){return _e("MuiFormControl",n)}Me("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const p2=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],f2=n=>{const{classes:r,margin:o,fullWidth:a}=n,l={root:["root",o!=="none"&&`margin${ge(o)}`,a&&"fullWidth"]};return Ae(l,d2,r)},m2=de("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:n},r)=>C({},r.root,r[`margin${ge(n.margin)}`],n.fullWidth&&r.fullWidth)})(({ownerState:n})=>C({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},n.margin==="normal"&&{marginTop:16,marginBottom:8},n.margin==="dense"&&{marginTop:8,marginBottom:4},n.fullWidth&&{width:"100%"})),h2=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiFormControl"}),{children:l,className:u,color:p="primary",component:f="div",disabled:h=!1,error:g=!1,focused:x,fullWidth:y=!1,hiddenLabel:k=!1,margin:$="none",required:E=!1,size:v="medium",variant:M="outlined"}=a,_=me(a,p2),j=C({},a,{color:p,component:f,disabled:h,error:g,fullWidth:y,hiddenLabel:k,margin:$,required:E,size:v,variant:M}),R=f2(j),[z,I]=b.useState(()=>{let Y=!1;return l&&b.Children.forEach(l,Q=>{if(!Ys(Q,["Input","Select"]))return;const te=Ys(Q,["Select"])?Q.props.input:Q;te&&fb(te.props)&&(Y=!0)}),Y}),[F,w]=b.useState(()=>{let Y=!1;return l&&b.Children.forEach(l,Q=>{Ys(Q,["Input","Select"])&&(na(Q.props,!0)||na(Q.props.inputProps,!0))&&(Y=!0)}),Y}),[L,H]=b.useState(!1);h&&L&&H(!1);const U=x!==void 0&&!h?x:L;let G;const ee=b.useMemo(()=>({adornedStart:z,setAdornedStart:I,color:p,disabled:h,error:g,filled:F,focused:U,fullWidth:y,hiddenLabel:k,size:v,onBlur:()=>{H(!1)},onEmpty:()=>{w(!1)},onFilled:()=>{w(!0)},onFocus:()=>{H(!0)},registerEffect:G,required:E,variant:M}),[z,p,h,g,F,U,y,k,G,E,v,M]);return N.jsx(xu.Provider,{value:ee,children:N.jsx(m2,C({as:f,ownerState:j,className:ve(R.root,u),ref:o},_,{children:l}))})}),hm=b.createContext();function g2(n){return _e("MuiGrid",n)}const v2=[0,1,2,3,4,5,6,7,8,9,10],x2=["column-reverse","column","row-reverse","row"],y2=["nowrap","wrap-reverse","wrap"],uo=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],Eo=Me("MuiGrid",["root","container","item","zeroMinWidth",...v2.map(n=>`spacing-xs-${n}`),...x2.map(n=>`direction-xs-${n}`),...y2.map(n=>`wrap-xs-${n}`),...uo.map(n=>`grid-xs-${n}`),...uo.map(n=>`grid-sm-${n}`),...uo.map(n=>`grid-md-${n}`),...uo.map(n=>`grid-lg-${n}`),...uo.map(n=>`grid-xl-${n}`)]),b2=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function gi(n){const r=parseFloat(n);return`${r}${String(n).replace(String(r),"")||"px"}`}function w2({theme:n,ownerState:r}){let o;return n.breakpoints.keys.reduce((a,l)=>{let u={};if(r[l]&&(o=r[l]),!o)return a;if(o===!0)u={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(o==="auto")u={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const p=ca({values:r.columns,breakpoints:n.breakpoints.values}),f=typeof p=="object"?p[l]:p;if(f==null)return a;const h=`${Math.round(o/f*1e8)/1e6}%`;let g={};if(r.container&&r.item&&r.columnSpacing!==0){const x=n.spacing(r.columnSpacing);if(x!=="0px"){const y=`calc(${h} + ${gi(x)})`;g={flexBasis:y,maxWidth:y}}}u=C({flexBasis:h,flexGrow:0,maxWidth:h},g)}return n.breakpoints.values[l]===0?Object.assign(a,u):a[n.breakpoints.up(l)]=u,a},{})}function C2({theme:n,ownerState:r}){const o=ca({values:r.direction,breakpoints:n.breakpoints.values});return cn({theme:n},o,a=>{const l={flexDirection:a};return a.indexOf("column")===0&&(l[`& > .${Eo.item}`]={maxWidth:"none"}),l})}function kh({breakpoints:n,values:r}){let o="";Object.keys(r).forEach(l=>{o===""&&r[l]!==0&&(o=l)});const a=Object.keys(n).sort((l,u)=>n[l]-n[u]);return a.slice(0,a.indexOf(o))}function k2({theme:n,ownerState:r}){const{container:o,rowSpacing:a}=r;let l={};if(o&&a!==0){const u=ca({values:a,breakpoints:n.breakpoints.values});let p;typeof u=="object"&&(p=kh({breakpoints:n.breakpoints.values,values:u})),l=cn({theme:n},u,(f,h)=>{var g;const x=n.spacing(f);return x!=="0px"?{marginTop:`-${gi(x)}`,[`& > .${Eo.item}`]:{paddingTop:gi(x)}}:(g=p)!=null&&g.includes(h)?{}:{marginTop:0,[`& > .${Eo.item}`]:{paddingTop:0}}})}return l}function S2({theme:n,ownerState:r}){const{container:o,columnSpacing:a}=r;let l={};if(o&&a!==0){const u=ca({values:a,breakpoints:n.breakpoints.values});let p;typeof u=="object"&&(p=kh({breakpoints:n.breakpoints.values,values:u})),l=cn({theme:n},u,(f,h)=>{var g;const x=n.spacing(f);return x!=="0px"?{width:`calc(100% + ${gi(x)})`,marginLeft:`-${gi(x)}`,[`& > .${Eo.item}`]:{paddingLeft:gi(x)}}:(g=p)!=null&&g.includes(h)?{}:{width:"100%",marginLeft:0,[`& > .${Eo.item}`]:{paddingLeft:0}}})}return l}function E2(n,r,o={}){if(!n||n<=0)return[];if(typeof n=="string"&&!Number.isNaN(Number(n))||typeof n=="number")return[o[`spacing-xs-${String(n)}`]];const a=[];return r.forEach(l=>{const u=n[l];Number(u)>0&&a.push(o[`spacing-${l}-${String(u)}`])}),a}const I2=de("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n,{container:a,direction:l,item:u,spacing:p,wrap:f,zeroMinWidth:h,breakpoints:g}=o;let x=[];a&&(x=E2(p,g,r));const y=[];return g.forEach(k=>{const $=o[k];$&&y.push(r[`grid-${k}-${String($)}`])}),[r.root,a&&r.container,u&&r.item,h&&r.zeroMinWidth,...x,l!=="row"&&r[`direction-xs-${String(l)}`],f!=="wrap"&&r[`wrap-xs-${String(f)}`],...y]}})(({ownerState:n})=>C({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},n.wrap!=="wrap"&&{flexWrap:n.wrap}),C2,k2,S2,w2);function T2(n,r){if(!n||n<=0)return[];if(typeof n=="string"&&!Number.isNaN(Number(n))||typeof n=="number")return[`spacing-xs-${String(n)}`];const o=[];return r.forEach(a=>{const l=n[a];if(Number(l)>0){const u=`spacing-${a}-${String(l)}`;o.push(u)}}),o}const R2=n=>{const{classes:r,container:o,direction:a,item:l,spacing:u,wrap:p,zeroMinWidth:f,breakpoints:h}=n;let g=[];o&&(g=T2(u,h));const x=[];h.forEach(k=>{const $=n[k];$&&x.push(`grid-${k}-${String($)}`)});const y={root:["root",o&&"container",l&&"item",f&&"zeroMinWidth",...g,a!=="row"&&`direction-xs-${String(a)}`,p!=="wrap"&&`wrap-xs-${String(p)}`,...x]};return Ae(y,g2,r)},gm=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiGrid"}),{breakpoints:l}=Hn(),u=ga(a),{className:p,columns:f,columnSpacing:h,component:g="div",container:x=!1,direction:y="row",item:k=!1,rowSpacing:$,spacing:E=0,wrap:v="wrap",zeroMinWidth:M=!1}=u,_=me(u,b2),j=$||E,R=h||E,z=b.useContext(hm),I=x?f||12:z,F={},w=C({},_);l.keys.forEach(U=>{_[U]!=null&&(F[U]=_[U],delete w[U])});const L=C({},u,{columns:I,container:x,direction:y,item:k,rowSpacing:j,columnSpacing:R,wrap:v,zeroMinWidth:M,spacing:E},F,{breakpoints:l.keys}),H=R2(L);return N.jsx(hm.Provider,{value:I,children:N.jsx(I2,C({ownerState:L,className:ve(H.root,p),as:g,ref:o},w))})}),P2=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Vc(n){return`scale(${n}, ${n**2})`}const M2={entering:{opacity:1,transform:Vc(1)},entered:{opacity:1,transform:"none"}},Rc=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Cu=b.forwardRef(function(r,o){const{addEndListener:a,appear:l=!0,children:u,easing:p,in:f,onEnter:h,onEntered:g,onEntering:x,onExit:y,onExited:k,onExiting:$,style:E,timeout:v="auto",TransitionComponent:M=kn}=r,_=me(r,P2),j=uu(),R=b.useRef(),z=Hn(),I=b.useRef(null),F=mt(I,Or(u),o),w=te=>ie=>{if(te){const ne=I.current;ie===void 0?te(ne):te(ne,ie)}},L=w(x),H=w((te,ie)=>{gu(te);const{duration:ne,delay:A,easing:Z}=yi({style:E,timeout:v,easing:p},{mode:"enter"});let J;v==="auto"?(J=z.transitions.getAutoHeightDuration(te.clientHeight),R.current=J):J=ne,te.style.transition=[z.transitions.create("opacity",{duration:J,delay:A}),z.transitions.create("transform",{duration:Rc?J:J*.666,delay:A,easing:Z})].join(","),h&&h(te,ie)}),U=w(g),G=w($),ee=w(te=>{const{duration:ie,delay:ne,easing:A}=yi({style:E,timeout:v,easing:p},{mode:"exit"});let Z;v==="auto"?(Z=z.transitions.getAutoHeightDuration(te.clientHeight),R.current=Z):Z=ie,te.style.transition=[z.transitions.create("opacity",{duration:Z,delay:ne}),z.transitions.create("transform",{duration:Rc?Z:Z*.666,delay:Rc?ne:ne||Z*.333,easing:A})].join(","),te.style.opacity=0,te.style.transform=Vc(.75),y&&y(te)}),Y=w(k),Q=te=>{v==="auto"&&j.start(R.current||0,te),a&&a(I.current,te)};return N.jsx(M,C({appear:l,in:f,nodeRef:I,onEnter:H,onEntered:U,onEntering:L,onExit:ee,onExited:Y,onExiting:G,addEndListener:Q,timeout:v==="auto"?null:v},_,{children:(te,ie)=>b.cloneElement(u,C({style:C({opacity:0,transform:Vc(.75),visibility:te==="exited"&&!f?"hidden":void 0},M2[te],E,u.props.style),ref:F},ie))}))});Cu.muiSupportAuto=!0;const z2=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],_2=n=>{const{classes:r,disableUnderline:o}=n,l=Ae({root:["root",!o&&"underline"],input:["input"]},xb,r);return C({},r,l)},$2=de(Sa,{shouldForwardProp:n=>Jt(n)||n==="classes",name:"MuiInput",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[...Ca(n,r),!o.disableUnderline&&r.underline]}})(({theme:n,ownerState:r})=>{let a=n.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return n.vars&&(a=`rgba(${n.vars.palette.common.onBackgroundChannel} / ${n.vars.opacity.inputUnderline})`),C({position:"relative"},r.formControl&&{"label + &":{marginTop:16}},!r.disableUnderline&&{"&::after":{borderBottom:`2px solid ${(n.vars||n).palette[r.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${co.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${co.error}`]:{"&::before, &::after":{borderBottomColor:(n.vars||n).palette.error.main}},"&::before":{borderBottom:`1px solid ${a}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:n.transitions.create("border-bottom-color",{duration:n.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${co.disabled}, .${co.error}):before`]:{borderBottom:`2px solid ${(n.vars||n).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${a}`}},[`&.${co.disabled}:before`]:{borderBottomStyle:"dotted"}})}),O2=de(Ea,{name:"MuiInput",slot:"Input",overridesResolver:ka})({}),Sh=b.forwardRef(function(r,o){var a,l,u,p;const f=$e({props:r,name:"MuiInput"}),{disableUnderline:h,components:g={},componentsProps:x,fullWidth:y=!1,inputComponent:k="input",multiline:$=!1,slotProps:E,slots:v={},type:M="text"}=f,_=me(f,z2),j=_2(f),z={root:{ownerState:{disableUnderline:h}}},I=E??x?Zt(E??x,z):z,F=(a=(l=v.root)!=null?l:g.Root)!=null?a:$2,w=(u=(p=v.input)!=null?p:g.Input)!=null?u:O2;return N.jsx(bu,C({slots:{root:F,input:w},slotProps:I,fullWidth:y,inputComponent:k,multiline:$,ref:o,type:M},_,{classes:j}))});Sh.muiName="Input";const wi=b.createContext({});function A2(n){return _e("MuiList",n)}Me("MuiList",["root","padding","dense","subheader"]);const N2=["children","className","component","dense","disablePadding","subheader"],D2=n=>{const{classes:r,disablePadding:o,dense:a,subheader:l}=n;return Ae({root:["root",!o&&"padding",a&&"dense",l&&"subheader"]},A2,r)},L2=de("ul",{name:"MuiList",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,!o.disablePadding&&r.padding,o.dense&&r.dense,o.subheader&&r.subheader]}})(({ownerState:n})=>C({listStyle:"none",margin:0,padding:0,position:"relative"},!n.disablePadding&&{paddingTop:8,paddingBottom:8},n.subheader&&{paddingTop:0})),Eh=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiList"}),{children:l,className:u,component:p="ul",dense:f=!1,disablePadding:h=!1,subheader:g}=a,x=me(a,N2),y=b.useMemo(()=>({dense:f}),[f]),k=C({},a,{component:p,dense:f,disablePadding:h}),$=D2(k);return N.jsx(wi.Provider,{value:y,children:N.jsxs(L2,C({as:p,className:ve($.root,u),ref:o,ownerState:k},x,{children:[g,l]}))})});function F2(n){return _e("MuiListItemButton",n)}const po=Me("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),j2=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],B2=(n,r)=>{const{ownerState:o}=n;return[r.root,o.dense&&r.dense,o.alignItems==="flex-start"&&r.alignItemsFlexStart,o.divider&&r.divider,!o.disableGutters&&r.gutters]},W2=n=>{const{alignItems:r,classes:o,dense:a,disabled:l,disableGutters:u,divider:p,selected:f}=n,g=Ae({root:["root",a&&"dense",!u&&"gutters",p&&"divider",l&&"disabled",r==="flex-start"&&"alignItemsFlexStart",f&&"selected"]},F2,o);return C({},o,g)},U2=de(wa,{shouldForwardProp:n=>Jt(n)||n==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:B2})(({theme:n,ownerState:r})=>C({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${po.selected}`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`:at.alpha(n.palette.primary.main,n.palette.action.selectedOpacity),[`&.${po.focusVisible}`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.focusOpacity}))`:at.alpha(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)}},[`&.${po.selected}:hover`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.hoverOpacity}))`:at.alpha(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`:at.alpha(n.palette.primary.main,n.palette.action.selectedOpacity)}},[`&.${po.focusVisible}`]:{backgroundColor:(n.vars||n).palette.action.focus},[`&.${po.disabled}`]:{opacity:(n.vars||n).palette.action.disabledOpacity}},r.divider&&{borderBottom:`1px solid ${(n.vars||n).palette.divider}`,backgroundClip:"padding-box"},r.alignItems==="flex-start"&&{alignItems:"flex-start"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.dense&&{paddingTop:4,paddingBottom:4})),H2=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiListItemButton"}),{alignItems:l="center",autoFocus:u=!1,component:p="div",children:f,dense:h=!1,disableGutters:g=!1,divider:x=!1,focusVisibleClassName:y,selected:k=!1,className:$}=a,E=me(a,j2),v=b.useContext(wi),M=b.useMemo(()=>({dense:h||v.dense||!1,alignItems:l,disableGutters:g}),[l,v.dense,h,g]),_=b.useRef(null);Cn(()=>{u&&_.current&&_.current.focus()},[u]);const j=C({},a,{alignItems:l,dense:M.dense,disableGutters:g,divider:x,selected:k}),R=W2(j),z=mt(_,o);return N.jsx(wi.Provider,{value:M,children:N.jsx(U2,C({ref:z,href:E.href||E.to,component:(E.href||E.to)&&p==="div"?"button":p,focusVisibleClassName:ve(R.focusVisible,y),ownerState:j,className:ve(R.root,$)},E,{classes:R,children:f}))})}),vm=Me("MuiListItemIcon",["root","alignItemsFlexStart"]);function V2(n){return _e("MuiListItemText",n)}const ra=Me("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),K2=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],G2=n=>{const{classes:r,inset:o,primary:a,secondary:l,dense:u}=n;return Ae({root:["root",o&&"inset",u&&"dense",a&&l&&"multiline"],primary:["primary"],secondary:["secondary"]},V2,r)},q2=de("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[{[`& .${ra.primary}`]:r.primary},{[`& .${ra.secondary}`]:r.secondary},r.root,o.inset&&r.inset,o.primary&&o.secondary&&r.multiline,o.dense&&r.dense]}})(({ownerState:n})=>C({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},n.primary&&n.secondary&&{marginTop:6,marginBottom:6},n.inset&&{paddingLeft:56})),Y2=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiListItemText"}),{children:l,className:u,disableTypography:p=!1,inset:f=!1,primary:h,primaryTypographyProps:g,secondary:x,secondaryTypographyProps:y}=a,k=me(a,K2),{dense:$}=b.useContext(wi);let E=h??l,v=x;const M=C({},a,{disableTypography:p,inset:f,primary:!!E,secondary:!!v,dense:$}),_=G2(M);return E!=null&&E.type!==Wn&&!p&&(E=N.jsx(Wn,C({variant:$?"body2":"body1",className:_.primary,component:g!=null&&g.variant?void 0:"span",display:"block"},g,{children:E}))),v!=null&&v.type!==Wn&&!p&&(v=N.jsx(Wn,C({variant:"body2",className:_.secondary,color:"text.secondary",display:"block"},y,{children:v}))),N.jsxs(q2,C({className:ve(_.root,u),ownerState:M,ref:o},k,{children:[E,v]}))}),X2=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Pc(n,r,o){return n===r?n.firstChild:r&&r.nextElementSibling?r.nextElementSibling:o?null:n.firstChild}function xm(n,r,o){return n===r?o?n.firstChild:n.lastChild:r&&r.previousElementSibling?r.previousElementSibling:o?null:n.lastChild}function Ih(n,r){if(r===void 0)return!0;let o=n.innerText;return o===void 0&&(o=n.textContent),o=o.trim().toLowerCase(),o.length===0?!1:r.repeating?o[0]===r.keys[0]:o.indexOf(r.keys.join(""))===0}function fo(n,r,o,a,l,u){let p=!1,f=l(n,r,r?o:!1);for(;f;){if(f===n.firstChild){if(p)return!1;p=!0}const h=a?!1:f.disabled||f.getAttribute("aria-disabled")==="true";if(!f.hasAttribute("tabindex")||!Ih(f,u)||h)f=l(n,f,o);else return f.focus(),!0}return!1}const Q2=b.forwardRef(function(r,o){const{actions:a,autoFocus:l=!1,autoFocusItem:u=!1,children:p,className:f,disabledItemsFocusable:h=!1,disableListWrap:g=!1,onKeyDown:x,variant:y="selectedMenu"}=r,k=me(r,X2),$=b.useRef(null),E=b.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Cn(()=>{l&&$.current.focus()},[l]),b.useImperativeHandle(a,()=>({adjustStyleForScrollbar:(R,{direction:z})=>{const I=!$.current.style.width;if(R.clientHeight<$.current.clientHeight&&I){const F=`${oh(St(R))}px`;$.current.style[z==="rtl"?"paddingLeft":"paddingRight"]=F,$.current.style.width=`calc(100% + ${F})`}return $.current}}),[]);const v=R=>{const z=$.current,I=R.key,F=St(z).activeElement;if(I==="ArrowDown")R.preventDefault(),fo(z,F,g,h,Pc);else if(I==="ArrowUp")R.preventDefault(),fo(z,F,g,h,xm);else if(I==="Home")R.preventDefault(),fo(z,null,g,h,Pc);else if(I==="End")R.preventDefault(),fo(z,null,g,h,xm);else if(I.length===1){const w=E.current,L=I.toLowerCase(),H=performance.now();w.keys.length>0&&(H-w.lastTime>500?(w.keys=[],w.repeating=!0,w.previousKeyMatched=!0):w.repeating&&L!==w.keys[0]&&(w.repeating=!1)),w.lastTime=H,w.keys.push(L);const U=F&&!w.repeating&&Ih(F,w);w.previousKeyMatched&&(U||fo(z,F,!1,h,Pc,w))?R.preventDefault():w.previousKeyMatched=!1}x&&x(R)},M=mt($,o);let _=-1;b.Children.forEach(p,(R,z)=>{if(!b.isValidElement(R)){_===z&&(_+=1,_>=p.length&&(_=-1));return}R.props.disabled||(y==="selectedMenu"&&R.props.selected||_===-1)&&(_=z),_===z&&(R.props.disabled||R.props.muiSkipListHighlight||R.type.muiSkipListHighlight)&&(_+=1,_>=p.length&&(_=-1))});const j=b.Children.map(p,(R,z)=>{if(z===_){const I={};return u&&(I.autoFocus=!0),R.props.tabIndex===void 0&&y==="selectedMenu"&&(I.tabIndex=0),b.cloneElement(R,I)}return R});return N.jsx(Eh,C({role:"menu",ref:M,className:f,onKeyDown:v,tabIndex:l?0:-1},k,{children:j}))});function Z2(n){return _e("MuiPopover",n)}Me("MuiPopover",["root","paper"]);const J2=["onEntering"],eC=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],tC=["slotProps"];function ym(n,r){let o=0;return typeof r=="number"?o=r:r==="center"?o=n.height/2:r==="bottom"&&(o=n.height),o}function bm(n,r){let o=0;return typeof r=="number"?o=r:r==="center"?o=n.width/2:r==="right"&&(o=n.width),o}function wm(n){return[n.horizontal,n.vertical].map(r=>typeof r=="number"?`${r}px`:r).join(" ")}function Mc(n){return typeof n=="function"?n():n}const nC=n=>{const{classes:r}=n;return Ae({root:["root"],paper:["paper"]},Z2,r)},rC=de(wu,{name:"MuiPopover",slot:"Root",overridesResolver:(n,r)=>r.root})({}),Th=de(Ar,{name:"MuiPopover",slot:"Paper",overridesResolver:(n,r)=>r.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),iC=b.forwardRef(function(r,o){var a,l,u;const p=$e({props:r,name:"MuiPopover"}),{action:f,anchorEl:h,anchorOrigin:g={vertical:"top",horizontal:"left"},anchorPosition:x,anchorReference:y="anchorEl",children:k,className:$,container:E,elevation:v=8,marginThreshold:M=16,open:_,PaperProps:j={},slots:R,slotProps:z,transformOrigin:I={vertical:"top",horizontal:"left"},TransitionComponent:F=Cu,transitionDuration:w="auto",TransitionProps:{onEntering:L}={},disableScrollLock:H=!1}=p,U=me(p.TransitionProps,J2),G=me(p,eC),ee=(a=z==null?void 0:z.paper)!=null?a:j,Y=b.useRef(),Q=mt(Y,ee.ref),te=C({},p,{anchorOrigin:g,anchorReference:y,elevation:v,marginThreshold:M,externalPaperSlotProps:ee,transformOrigin:I,TransitionComponent:F,transitionDuration:w,TransitionProps:U}),ie=nC(te),ne=b.useCallback(()=>{if(y==="anchorPosition")return x;const ye=Mc(h),Ne=(ye&&ye.nodeType===1?ye:St(Y.current).body).getBoundingClientRect();return{top:Ne.top+ym(Ne,g.vertical),left:Ne.left+bm(Ne,g.horizontal)}},[h,g.horizontal,g.vertical,x,y]),A=b.useCallback(ye=>({vertical:ym(ye,I.vertical),horizontal:bm(ye,I.horizontal)}),[I.horizontal,I.vertical]),Z=b.useCallback(ye=>{const Re={width:ye.offsetWidth,height:ye.offsetHeight},Ne=A(Re);if(y==="none")return{top:null,left:null,transformOrigin:wm(Ne)};const Wt=ne();let ht=Wt.top-Ne.vertical,Mt=Wt.left-Ne.horizontal;const zt=ht+Re.height,gt=Mt+Re.width,We=$n(Mc(h)),Ut=We.innerHeight-M,bt=We.innerWidth-M;if(M!==null&&ht<M){const Ge=ht-M;ht-=Ge,Ne.vertical+=Ge}else if(M!==null&&zt>Ut){const Ge=zt-Ut;ht-=Ge,Ne.vertical+=Ge}if(M!==null&&Mt<M){const Ge=Mt-M;Mt-=Ge,Ne.horizontal+=Ge}else if(gt>bt){const Ge=gt-bt;Mt-=Ge,Ne.horizontal+=Ge}return{top:`${Math.round(ht)}px`,left:`${Math.round(Mt)}px`,transformOrigin:wm(Ne)}},[h,y,ne,A,M]),[J,O]=b.useState(_),V=b.useCallback(()=>{const ye=Y.current;if(!ye)return;const Re=Z(ye);Re.top!==null&&(ye.style.top=Re.top),Re.left!==null&&(ye.style.left=Re.left),ye.style.transformOrigin=Re.transformOrigin,O(!0)},[Z]);b.useEffect(()=>(H&&window.addEventListener("scroll",V),()=>window.removeEventListener("scroll",V)),[h,H,V]);const pe=(ye,Re)=>{L&&L(ye,Re),V()},se=()=>{O(!1)};b.useEffect(()=>{_&&V()}),b.useImperativeHandle(f,()=>_?{updatePosition:()=>{V()}}:null,[_,V]),b.useEffect(()=>{if(!_)return;const ye=va(()=>{V()}),Re=$n(h);return Re.addEventListener("resize",ye),()=>{ye.clear(),Re.removeEventListener("resize",ye)}},[h,_,V]);let he=w;w==="auto"&&!F.muiSupportAuto&&(he=void 0);const ae=E||(h?St(Mc(h)).body:void 0),Se=(l=R==null?void 0:R.root)!=null?l:rC,Ie=(u=R==null?void 0:R.paper)!=null?u:Th,xe=$r({elementType:Ie,externalSlotProps:C({},ee,{style:J?ee.style:C({},ee.style,{opacity:0})}),additionalProps:{elevation:v,ref:Q},ownerState:te,className:ve(ie.paper,ee==null?void 0:ee.className)}),Le=$r({elementType:Se,externalSlotProps:(z==null?void 0:z.root)||{},externalForwardedProps:G,additionalProps:{ref:o,slotProps:{backdrop:{invisible:!0}},container:ae,open:_},ownerState:te,className:ve(ie.root,$)}),{slotProps:Te}=Le,ze=me(Le,tC);return N.jsx(Se,C({},ze,!Js(Se)&&{slotProps:Te,disableScrollLock:H},{children:N.jsx(F,C({appear:!0,in:_,onEntering:pe,onExited:se,timeout:he},U,{children:N.jsx(Ie,C({},xe,{children:k}))}))}))});function oC(n){return _e("MuiMenu",n)}Me("MuiMenu",["root","paper","list"]);const sC=["onEntering"],aC=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],lC={vertical:"top",horizontal:"right"},cC={vertical:"top",horizontal:"left"},uC=n=>{const{classes:r}=n;return Ae({root:["root"],paper:["paper"],list:["list"]},oC,r)},dC=de(iC,{shouldForwardProp:n=>Jt(n)||n==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(n,r)=>r.root})({}),pC=de(Th,{name:"MuiMenu",slot:"Paper",overridesResolver:(n,r)=>r.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),fC=de(Q2,{name:"MuiMenu",slot:"List",overridesResolver:(n,r)=>r.list})({outline:0}),mC=b.forwardRef(function(r,o){var a,l;const u=$e({props:r,name:"MuiMenu"}),{autoFocus:p=!0,children:f,className:h,disableAutoFocusItem:g=!1,MenuListProps:x={},onClose:y,open:k,PaperProps:$={},PopoverClasses:E,transitionDuration:v="auto",TransitionProps:{onEntering:M}={},variant:_="selectedMenu",slots:j={},slotProps:R={}}=u,z=me(u.TransitionProps,sC),I=me(u,aC),F=ch(),w=C({},u,{autoFocus:p,disableAutoFocusItem:g,MenuListProps:x,onEntering:M,PaperProps:$,transitionDuration:v,TransitionProps:z,variant:_}),L=uC(w),H=p&&!g&&k,U=b.useRef(null),G=(A,Z)=>{U.current&&U.current.adjustStyleForScrollbar(A,{direction:F?"rtl":"ltr"}),M&&M(A,Z)},ee=A=>{A.key==="Tab"&&(A.preventDefault(),y&&y(A,"tabKeyDown"))};let Y=-1;b.Children.map(f,(A,Z)=>{b.isValidElement(A)&&(A.props.disabled||(_==="selectedMenu"&&A.props.selected||Y===-1)&&(Y=Z))});const Q=(a=j.paper)!=null?a:pC,te=(l=R.paper)!=null?l:$,ie=$r({elementType:j.root,externalSlotProps:R.root,ownerState:w,className:[L.root,h]}),ne=$r({elementType:Q,externalSlotProps:te,ownerState:w,className:L.paper});return N.jsx(dC,C({onClose:y,anchorOrigin:{vertical:"bottom",horizontal:F?"right":"left"},transformOrigin:F?lC:cC,slots:{paper:Q,root:j.root},slotProps:{root:ie,paper:ne},open:k,ref:o,transitionDuration:v,TransitionProps:C({onEntering:G},z),ownerState:w},I,{classes:E,children:N.jsx(fC,C({onKeyDown:ee,actions:U,autoFocus:p&&(Y===-1||g),autoFocusItem:H,variant:_},x,{className:ve(L.list,x.className),children:f}))}))});function hC(n){return _e("MuiMenuItem",n)}const mo=Me("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),gC=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],vC=(n,r)=>{const{ownerState:o}=n;return[r.root,o.dense&&r.dense,o.divider&&r.divider,!o.disableGutters&&r.gutters]},xC=n=>{const{disabled:r,dense:o,divider:a,disableGutters:l,selected:u,classes:p}=n,h=Ae({root:["root",o&&"dense",r&&"disabled",!l&&"gutters",a&&"divider",u&&"selected"]},hC,p);return C({},p,h)},yC=de(wa,{shouldForwardProp:n=>Jt(n)||n==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:vC})(({theme:n,ownerState:r})=>C({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.divider&&{borderBottom:`1px solid ${(n.vars||n).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${mo.selected}`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`:at.alpha(n.palette.primary.main,n.palette.action.selectedOpacity),[`&.${mo.focusVisible}`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.focusOpacity}))`:at.alpha(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)}},[`&.${mo.selected}:hover`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.hoverOpacity}))`:at.alpha(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`:at.alpha(n.palette.primary.main,n.palette.action.selectedOpacity)}},[`&.${mo.focusVisible}`]:{backgroundColor:(n.vars||n).palette.action.focus},[`&.${mo.disabled}`]:{opacity:(n.vars||n).palette.action.disabledOpacity},[`& + .${fm.root}`]:{marginTop:n.spacing(1),marginBottom:n.spacing(1)},[`& + .${fm.inset}`]:{marginLeft:52},[`& .${ra.root}`]:{marginTop:0,marginBottom:0},[`& .${ra.inset}`]:{paddingLeft:36},[`& .${vm.root}`]:{minWidth:36}},!r.dense&&{[n.breakpoints.up("sm")]:{minHeight:"auto"}},r.dense&&C({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,{[`& .${vm.root} svg`]:{fontSize:"1.25rem"}}))),Cm=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiMenuItem"}),{autoFocus:l=!1,component:u="li",dense:p=!1,divider:f=!1,disableGutters:h=!1,focusVisibleClassName:g,role:x="menuitem",tabIndex:y,className:k}=a,$=me(a,gC),E=b.useContext(wi),v=b.useMemo(()=>({dense:p||E.dense||!1,disableGutters:h}),[E.dense,p,h]),M=b.useRef(null);Cn(()=>{l&&M.current&&M.current.focus()},[l]);const _=C({},a,{dense:v.dense,divider:f,disableGutters:h}),j=xC(a),R=mt(M,o);let z;return a.disabled||(z=y!==void 0?y:-1),N.jsx(wi.Provider,{value:v,children:N.jsx(yC,C({ref:R,role:x,tabIndex:z,component:u,focusVisibleClassName:ve(j.focusVisible,g),className:ve(j.root,k)},$,{ownerState:_,classes:j}))})});function bC(n){return _e("MuiNativeSelect",n)}const ku=Me("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),wC=["className","disabled","error","IconComponent","inputRef","variant"],CC=n=>{const{classes:r,variant:o,disabled:a,multiple:l,open:u,error:p}=n,f={select:["select",o,a&&"disabled",l&&"multiple",p&&"error"],icon:["icon",`icon${ge(o)}`,u&&"iconOpen",a&&"disabled"]};return Ae(f,bC,r)},Rh=({ownerState:n,theme:r})=>C({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":C({},r.vars?{backgroundColor:`rgba(${r.vars.palette.common.onBackgroundChannel} / 0.05)`}:{backgroundColor:r.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},{borderRadius:0}),"&::-ms-expand":{display:"none"},[`&.${ku.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(r.vars||r).palette.background.paper},"&&&":{paddingRight:24,minWidth:16}},n.variant==="filled"&&{"&&&":{paddingRight:32}},n.variant==="outlined"&&{borderRadius:(r.vars||r).shape.borderRadius,"&:focus":{borderRadius:(r.vars||r).shape.borderRadius},"&&&":{paddingRight:32}}),kC=de("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:Jt,overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.select,r[o.variant],o.error&&r.error,{[`&.${ku.multiple}`]:r.multiple}]}})(Rh),Ph=({ownerState:n,theme:r})=>C({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(r.vars||r).palette.action.active,[`&.${ku.disabled}`]:{color:(r.vars||r).palette.action.disabled}},n.open&&{transform:"rotate(180deg)"},n.variant==="filled"&&{right:7},n.variant==="outlined"&&{right:7}),SC=de("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.icon,o.variant&&r[`icon${ge(o.variant)}`],o.open&&r.iconOpen]}})(Ph),EC=b.forwardRef(function(r,o){const{className:a,disabled:l,error:u,IconComponent:p,inputRef:f,variant:h="standard"}=r,g=me(r,wC),x=C({},r,{disabled:l,variant:h,error:u}),y=CC(x);return N.jsxs(b.Fragment,{children:[N.jsx(kC,C({ownerState:x,className:ve(y.select,a),disabled:l,ref:f||o},g)),r.multiple?null:N.jsx(SC,{as:p,ownerState:x,className:y.icon})]})});var km;const IC=["children","classes","className","label","notched"],TC=de("fieldset",{shouldForwardProp:Jt})({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),RC=de("legend",{shouldForwardProp:Jt})(({ownerState:n,theme:r})=>C({float:"unset",width:"auto",overflow:"hidden"},!n.withLabel&&{padding:0,lineHeight:"11px",transition:r.transitions.create("width",{duration:150,easing:r.transitions.easing.easeOut})},n.withLabel&&C({display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:r.transitions.create("max-width",{duration:50,easing:r.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},n.notched&&{maxWidth:"100%",transition:r.transitions.create("max-width",{duration:100,easing:r.transitions.easing.easeOut,delay:50})})));function PC(n){const{className:r,label:o,notched:a}=n,l=me(n,IC),u=o!=null&&o!=="",p=C({},n,{notched:a,withLabel:u});return N.jsx(TC,C({"aria-hidden":!0,className:r,ownerState:p},l,{children:N.jsx(RC,{ownerState:p,children:u?N.jsx("span",{children:o}):km||(km=N.jsx("span",{className:"notranslate",children:"​"}))})}))}const MC=["components","fullWidth","inputComponent","label","multiline","notched","slots","type"],zC=n=>{const{classes:r}=n,a=Ae({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},yb,r);return C({},r,a)},_C=de(Sa,{shouldForwardProp:n=>Jt(n)||n==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:Ca})(({theme:n,ownerState:r})=>{const o=n.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return C({position:"relative",borderRadius:(n.vars||n).shape.borderRadius,[`&:hover .${ur.notchedOutline}`]:{borderColor:(n.vars||n).palette.text.primary},"@media (hover: none)":{[`&:hover .${ur.notchedOutline}`]:{borderColor:n.vars?`rgba(${n.vars.palette.common.onBackgroundChannel} / 0.23)`:o}},[`&.${ur.focused} .${ur.notchedOutline}`]:{borderColor:(n.vars||n).palette[r.color].main,borderWidth:2},[`&.${ur.error} .${ur.notchedOutline}`]:{borderColor:(n.vars||n).palette.error.main},[`&.${ur.disabled} .${ur.notchedOutline}`]:{borderColor:(n.vars||n).palette.action.disabled}},r.startAdornment&&{paddingLeft:14},r.endAdornment&&{paddingRight:14},r.multiline&&C({padding:"16.5px 14px"},r.size==="small"&&{padding:"8.5px 14px"}))}),$C=de(PC,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(n,r)=>r.notchedOutline})(({theme:n})=>{const r=n.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:n.vars?`rgba(${n.vars.palette.common.onBackgroundChannel} / 0.23)`:r}}),OC=de(Ea,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:ka})(({theme:n,ownerState:r})=>C({padding:"16.5px 14px"},!n.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:n.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:n.palette.mode==="light"?null:"#fff",caretColor:n.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},n.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[n.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},r.size==="small"&&{padding:"8.5px 14px"},r.multiline&&{padding:0},r.startAdornment&&{paddingLeft:0},r.endAdornment&&{paddingRight:0})),Mh=b.forwardRef(function(r,o){var a,l,u,p,f;const h=$e({props:r,name:"MuiOutlinedInput"}),{components:g={},fullWidth:x=!1,inputComponent:y="input",label:k,multiline:$=!1,notched:E,slots:v={},type:M="text"}=h,_=me(h,MC),j=zC(h),R=yu(),z=vu({props:h,muiFormControl:R,states:["color","disabled","error","focused","hiddenLabel","size","required"]}),I=C({},h,{color:z.color||"primary",disabled:z.disabled,error:z.error,focused:z.focused,formControl:R,fullWidth:x,hiddenLabel:z.hiddenLabel,multiline:$,size:z.size,type:M}),F=(a=(l=v.root)!=null?l:g.Root)!=null?a:_C,w=(u=(p=v.input)!=null?p:g.Input)!=null?u:OC;return N.jsx(bu,C({slots:{root:F,input:w},renderSuffix:L=>N.jsx($C,{ownerState:I,className:j.notchedOutline,label:k!=null&&k!==""&&z.required?f||(f=N.jsxs(b.Fragment,{children:[k," ","*"]})):k,notched:typeof E<"u"?E:!!(L.startAdornment||L.filled||L.focused)}),fullWidth:x,inputComponent:y,multiline:$,ref:o,type:M},_,{classes:C({},j,{notchedOutline:null})}))});Mh.muiName="Input";function AC(n){return _e("MuiSelect",n)}const ho=Me("MuiSelect",["root","select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]);var Sm;const NC=["aria-describedby","aria-label","autoFocus","autoWidth","children","className","defaultOpen","defaultValue","disabled","displayEmpty","error","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"],DC=de("div",{name:"MuiSelect",slot:"Select",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[{[`&.${ho.select}`]:r.select},{[`&.${ho.select}`]:r[o.variant]},{[`&.${ho.error}`]:r.error},{[`&.${ho.multiple}`]:r.multiple}]}})(Rh,{[`&.${ho.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),LC=de("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.icon,o.variant&&r[`icon${ge(o.variant)}`],o.open&&r.iconOpen]}})(Ph),FC=de("input",{shouldForwardProp:n=>dh(n)&&n!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(n,r)=>r.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function Em(n,r){return typeof r=="object"&&r!==null?n===r:String(n)===String(r)}function jC(n){return n==null||typeof n=="string"&&!n.trim()}const BC=n=>{const{classes:r,variant:o,disabled:a,multiple:l,open:u,error:p}=n,f={select:["select",o,a&&"disabled",l&&"multiple",p&&"error"],icon:["icon",`icon${ge(o)}`,u&&"iconOpen",a&&"disabled"],nativeInput:["nativeInput"]};return Ae(f,AC,r)},WC=b.forwardRef(function(r,o){var a;const{"aria-describedby":l,"aria-label":u,autoFocus:p,autoWidth:f,children:h,className:g,defaultOpen:x,defaultValue:y,disabled:k,displayEmpty:$,error:E=!1,IconComponent:v,inputRef:M,labelId:_,MenuProps:j={},multiple:R,name:z,onBlur:I,onChange:F,onClose:w,onFocus:L,onOpen:H,open:U,readOnly:G,renderValue:ee,SelectDisplayProps:Y={},tabIndex:Q,value:te,variant:ie="standard"}=r,ne=me(r,NC),[A,Z]=Fc({controlled:te,default:y,name:"Select"}),[J,O]=Fc({controlled:U,default:x,name:"Select"}),V=b.useRef(null),pe=b.useRef(null),[se,he]=b.useState(null),{current:ae}=b.useRef(U!=null),[Se,Ie]=b.useState(),xe=mt(o,M),Le=b.useCallback(be=>{pe.current=be,be&&he(be)},[]),Te=se==null?void 0:se.parentNode;b.useImperativeHandle(xe,()=>({focus:()=>{pe.current.focus()},node:V.current,value:A}),[A]),b.useEffect(()=>{x&&J&&se&&!ae&&(Ie(f?null:Te.clientWidth),pe.current.focus())},[se,f]),b.useEffect(()=>{p&&pe.current.focus()},[p]),b.useEffect(()=>{if(!_)return;const be=St(pe.current).getElementById(_);if(be){const Ve=()=>{getSelection().isCollapsed&&pe.current.focus()};return be.addEventListener("click",Ve),()=>{be.removeEventListener("click",Ve)}}},[_]);const ze=(be,Ve)=>{be?H&&H(Ve):w&&w(Ve),ae||(Ie(f?null:Te.clientWidth),O(be))},ye=be=>{be.button===0&&(be.preventDefault(),pe.current.focus(),ze(!0,be))},Re=be=>{ze(!1,be)},Ne=b.Children.toArray(h),Wt=be=>{const Ve=Ne.find(dt=>dt.props.value===be.target.value);Ve!==void 0&&(Z(Ve.props.value),F&&F(be,Ve))},ht=be=>Ve=>{let dt;if(Ve.currentTarget.hasAttribute("tabindex")){if(R){dt=Array.isArray(A)?A.slice():[];const Sn=A.indexOf(be.props.value);Sn===-1?dt.push(be.props.value):dt.splice(Sn,1)}else dt=be.props.value;if(be.props.onClick&&be.props.onClick(Ve),A!==dt&&(Z(dt),F)){const Sn=Ve.nativeEvent||Ve,Nr=new Sn.constructor(Sn.type,Sn);Object.defineProperty(Nr,"target",{writable:!0,value:{value:dt,name:z}}),F(Nr,be)}R||ze(!1,Ve)}},Mt=be=>{G||[" ","ArrowUp","ArrowDown","Enter"].indexOf(be.key)!==-1&&(be.preventDefault(),ze(!0,be))},zt=se!==null&&J,gt=be=>{!zt&&I&&(Object.defineProperty(be,"target",{writable:!0,value:{value:A,name:z}}),I(be))};delete ne["aria-invalid"];let We,Ut;const bt=[];let Ge=!1;(na({value:A})||$)&&(ee?We=ee(A):Ge=!0);const Ht=Ne.map(be=>{if(!b.isValidElement(be))return null;let Ve;if(R){if(!Array.isArray(A))throw new Error(_r(2));Ve=A.some(dt=>Em(dt,be.props.value)),Ve&&Ge&&bt.push(be.props.children)}else Ve=Em(A,be.props.value),Ve&&Ge&&(Ut=be.props.children);return b.cloneElement(be,{"aria-selected":Ve?"true":"false",onClick:ht(be),onKeyUp:dt=>{dt.key===" "&&dt.preventDefault(),be.props.onKeyUp&&be.props.onKeyUp(dt)},role:"option",selected:Ve,value:void 0,"data-value":be.props.value})});Ge&&(R?bt.length===0?We=null:We=bt.reduce((be,Ve,dt)=>(be.push(Ve),dt<bt.length-1&&be.push(", "),be),[]):We=Ut);let dn=Se;!f&&ae&&se&&(dn=Te.clientWidth);let Vt;typeof Q<"u"?Vt=Q:Vt=k?null:0;const Fe=Y.id||(z?`mui-component-select-${z}`:void 0),ke=C({},r,{variant:ie,value:A,open:zt,error:E}),_t=BC(ke),pn=C({},j.PaperProps,(a=j.slotProps)==null?void 0:a.paper),fr=cu();return N.jsxs(b.Fragment,{children:[N.jsx(DC,C({ref:Le,tabIndex:Vt,role:"combobox","aria-controls":fr,"aria-disabled":k?"true":void 0,"aria-expanded":zt?"true":"false","aria-haspopup":"listbox","aria-label":u,"aria-labelledby":[_,Fe].filter(Boolean).join(" ")||void 0,"aria-describedby":l,onKeyDown:Mt,onMouseDown:k||G?null:ye,onBlur:gt,onFocus:L},Y,{ownerState:ke,className:ve(Y.className,_t.select,g),id:Fe,children:jC(We)?Sm||(Sm=N.jsx("span",{className:"notranslate",children:"​"})):We})),N.jsx(FC,C({"aria-invalid":E,value:Array.isArray(A)?A.join(","):A,name:z,ref:V,"aria-hidden":!0,onChange:Wt,tabIndex:-1,disabled:k,className:_t.nativeInput,autoFocus:p,ownerState:ke},ne)),N.jsx(LC,{as:v,className:_t.icon,ownerState:ke}),N.jsx(mC,C({id:`menu-${z||""}`,anchorEl:Te,open:zt,onClose:Re,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},j,{MenuListProps:C({"aria-labelledby":_,role:"listbox","aria-multiselectable":R?"true":void 0,disableListWrap:!0,id:fr},j.MenuListProps),slotProps:C({},j.slotProps,{paper:C({},pn,{style:C({minWidth:dn},pn!=null?pn.style:null)})}),children:Ht}))]})}),UC=["autoWidth","children","classes","className","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"],HC=["root"],VC=n=>{const{classes:r}=n;return r},Su={name:"MuiSelect",overridesResolver:(n,r)=>r.root,shouldForwardProp:n=>Jt(n)&&n!=="variant",slot:"Root"},KC=de(Sh,Su)(""),GC=de(Mh,Su)(""),qC=de(Ch,Su)(""),zh=b.forwardRef(function(r,o){const a=$e({name:"MuiSelect",props:r}),{autoWidth:l=!1,children:u,classes:p={},className:f,defaultOpen:h=!1,displayEmpty:g=!1,IconComponent:x=wb,id:y,input:k,inputProps:$,label:E,labelId:v,MenuProps:M,multiple:_=!1,native:j=!1,onClose:R,onOpen:z,open:I,renderValue:F,SelectDisplayProps:w,variant:L="outlined"}=a,H=me(a,UC),U=j?EC:WC,G=yu(),ee=vu({props:a,muiFormControl:G,states:["variant","error"]}),Y=ee.variant||L,Q=C({},a,{variant:Y,classes:p}),te=VC(Q),ie=me(te,HC),ne=k||{standard:N.jsx(KC,{ownerState:Q}),outlined:N.jsx(GC,{label:E,ownerState:Q}),filled:N.jsx(qC,{ownerState:Q})}[Y],A=mt(o,Or(ne));return N.jsx(b.Fragment,{children:b.cloneElement(ne,C({inputComponent:U,inputProps:C({children:u,error:ee.error,IconComponent:x,variant:Y,type:void 0,multiple:_},j?{id:y}:{autoWidth:l,defaultOpen:h,displayEmpty:g,labelId:v,MenuProps:M,onClose:R,onOpen:z,open:I,renderValue:F,SelectDisplayProps:C({id:y},w)},$,{classes:$?Zt(ie,$.classes):ie},k?k.props.inputProps:{})},(_&&j||g)&&Y==="outlined"?{notched:!0}:{},{ref:A,className:ve(ne.props.className,f,te.root)},!k&&{variant:Y},H))})});zh.muiName="Select";function YC(n={}){const{autoHideDuration:r=null,disableWindowBlurListener:o=!1,onClose:a,open:l,resumeHideDuration:u}=n,p=uu();b.useEffect(()=>{if(!l)return;function _(j){j.defaultPrevented||(j.key==="Escape"||j.key==="Esc")&&(a==null||a(j,"escapeKeyDown"))}return document.addEventListener("keydown",_),()=>{document.removeEventListener("keydown",_)}},[l,a]);const f=wn((_,j)=>{a==null||a(_,j)}),h=wn(_=>{!a||_==null||p.start(_,()=>{f(null,"timeout")})});b.useEffect(()=>(l&&h(r),p.clear),[l,r,h,p]);const g=_=>{a==null||a(_,"clickaway")},x=p.clear,y=b.useCallback(()=>{r!=null&&h(u??r*.5)},[r,u,h]),k=_=>j=>{const R=_.onBlur;R==null||R(j),y()},$=_=>j=>{const R=_.onFocus;R==null||R(j),x()},E=_=>j=>{const R=_.onMouseEnter;R==null||R(j),x()},v=_=>j=>{const R=_.onMouseLeave;R==null||R(j),y()};return b.useEffect(()=>{if(!o&&l)return window.addEventListener("focus",y),window.addEventListener("blur",x),()=>{window.removeEventListener("focus",y),window.removeEventListener("blur",x)}},[o,l,y,x]),{getRootProps:(_={})=>{const j=C({},ea(n),ea(_));return C({role:"presentation"},_,j,{onBlur:k(j),onFocus:$(j),onMouseEnter:E(j),onMouseLeave:v(j)})},onClickAway:g}}function XC(n){return _e("MuiSnackbarContent",n)}Me("MuiSnackbarContent",["root","message","action"]);const QC=["action","className","message","role"],ZC=n=>{const{classes:r}=n;return Ae({root:["root"],action:["action"],message:["message"]},XC,r)},JC=de(Ar,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(n,r)=>r.root})(({theme:n})=>{const r=n.palette.mode==="light"?.8:.98,o=at.emphasize(n.palette.background.default,r);return C({},n.typography.body2,{color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(o),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),ek=de("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(n,r)=>r.message})({padding:"8px 0"}),tk=de("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(n,r)=>r.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),nk=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiSnackbarContent"}),{action:l,className:u,message:p,role:f="alert"}=a,h=me(a,QC),g=a,x=ZC(g);return N.jsxs(JC,C({role:f,square:!0,elevation:6,className:ve(x.root,u),ownerState:g,ref:o},h,{children:[N.jsx(ek,{className:x.message,ownerState:g,children:p}),l?N.jsx(tk,{className:x.action,ownerState:g,children:l}):null]}))});function rk(n){return _e("MuiSnackbar",n)}Me("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const ik=["onEnter","onExited"],ok=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],sk=n=>{const{classes:r,anchorOrigin:o}=n,a={root:["root",`anchorOrigin${ge(o.vertical)}${ge(o.horizontal)}`]};return Ae(a,rk,r)},Im=de("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,r[`anchorOrigin${ge(o.anchorOrigin.vertical)}${ge(o.anchorOrigin.horizontal)}`]]}})(({theme:n,ownerState:r})=>{const o={left:"50%",right:"auto",transform:"translateX(-50%)"};return C({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},r.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},r.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},r.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[n.breakpoints.up("sm")]:C({},r.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},r.anchorOrigin.horizontal==="center"&&o,r.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},r.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),ak=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiSnackbar"}),l=Hn(),u={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{action:p,anchorOrigin:{vertical:f,horizontal:h}={vertical:"bottom",horizontal:"left"},autoHideDuration:g=null,children:x,className:y,ClickAwayListenerProps:k,ContentProps:$,disableWindowBlurListener:E=!1,message:v,open:M,TransitionComponent:_=Cu,transitionDuration:j=u,TransitionProps:{onEnter:R,onExited:z}={}}=a,I=me(a.TransitionProps,ik),F=me(a,ok),w=C({},a,{anchorOrigin:{vertical:f,horizontal:h},autoHideDuration:g,disableWindowBlurListener:E,TransitionComponent:_,transitionDuration:j}),L=sk(w),{getRootProps:H,onClickAway:U}=YC(C({},w)),[G,ee]=b.useState(!0),Y=$r({elementType:Im,getSlotProps:H,externalForwardedProps:F,ownerState:w,additionalProps:{ref:o},className:[L.root,y]}),Q=ie=>{ee(!0),z&&z(ie)},te=(ie,ne)=>{ee(!1),R&&R(ie,ne)};return!M&&G?null:N.jsx(nw,C({onClickAway:U},k,{children:N.jsx(Im,C({},Y,{children:N.jsx(_,C({appear:!0,in:M,timeout:j,direction:f==="top"?"down":"up",onEnter:te,onExited:Q},I,{children:x||N.jsx(nk,C({message:v,action:p},$))}))}))}))});function lk(n){return _e("MuiToolbar",n)}Me("MuiToolbar",["root","gutters","regular","dense"]);const ck=["className","component","disableGutters","variant"],uk=n=>{const{classes:r,disableGutters:o,variant:a}=n;return Ae({root:["root",!o&&"gutters",a]},lk,r)},dk=de("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,!o.disableGutters&&r.gutters,r[o.variant]]}})(({theme:n,ownerState:r})=>C({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&{paddingLeft:n.spacing(2),paddingRight:n.spacing(2),[n.breakpoints.up("sm")]:{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}},r.variant==="dense"&&{minHeight:48}),({theme:n,ownerState:r})=>r.variant==="regular"&&n.mixins.toolbar),pk=b.forwardRef(function(r,o){const a=$e({props:r,name:"MuiToolbar"}),{className:l,component:u="div",disableGutters:p=!1,variant:f="regular"}=a,h=me(a,ck),g=C({},a,{component:u,disableGutters:p,variant:f}),x=uk(g);return N.jsx(dk,C({as:u,className:ve(x.root,l),ref:o,ownerState:g},h))});var go={},zc={};const fk=Un(x1);var Tm;function mk(){return Tm||(Tm=1,function(n){"use client";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=fk}(zc)),zc}var Rm;function hk(){if(Rm)return go;Rm=1;var n=du();Object.defineProperty(go,"__esModule",{value:!0}),go.default=void 0;var r=n(mk()),o=Pm();return go.default=(0,r.default)((0,o.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu"),go}var gk=hk();const vk=Io(gk),xk={id:"cat-header",name:"Header",sections:[{id:"sec-header-1",title:"Header Section 1",htmlCode:`<!-- Header Section -->
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
}`,previewImg:"header-1.png"}]},yk={id:"cat-hero",name:"Hero",sections:[{id:"sec-hero-1",title:"Hero Section 1",htmlCode:`<!-- Hero Section -->
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
`,previewImg:"hero-4.png"}]},bk={id:"cat-instructors",name:"Instructors",sections:[{id:"sec-instructors-1",title:"Instructors 1",htmlCode:`<!-- Instructor Section -->
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
    </section>`,cssCode:`
/* Instructor Section styles */
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
    width: 85%;
    background-color: #021944;
    padding: 20px 20px 20px;
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
        margin-top: -36px !important;
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
    width: 85%;
    background-color: #01318C;
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
    max-width: 300px;
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
}
`,previewImg:"instructors-3.png"},{id:"sec-instructors-4",title:"Instructors 4",htmlCode:` <!-- Instructor Section -->
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
}`,previewImg:"instructors-4.png"}]},wk={id:"cat-text-image",name:"Text Image Overlap",sections:[{id:"sec-textimg-1",title:"Text-Image 1",htmlCode:`<section class="digital-age-section">
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

`,previewImg:"textimg-2.png"}]},Ck={id:"cat-download",name:"Download",sections:[{id:"sec-download-1",title:"Download Section 1",htmlCode:`<!-- Download Section -->
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
`,previewImg:"download-5.png"}]},kk={id:"cat-courseDetails",name:"Course Details",sections:[{id:"sec-course-details-1",title:"Course Details Section 1",htmlCode:`<!-- Course Details Section -->
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
`,previewImg:"course-details-3.png"}]},Sk={id:"cat-expertise",name:"Expertise",sections:[{id:"sec-expertise-1",title:"Download Section 1",htmlCode:`<!-- Expertise Section -->
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
`,previewImg:"expertise-3.png"}]},Ek={id:"cat-benefits",name:"Benefits",sections:[{id:"sec-benefits-1",title:"benefits 1",htmlCode:`<!-- Benefits Grid Section - 4 Areas -->
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


`,previewImg:"benefits-4.png"}]},Ik={id:"cat-about",name:"About",sections:[{id:"sec-about-1",title:"About 1",htmlCode:`<section class="about-mit-section">
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
`,previewImg:"about-2.png"}]},Tk={id:"cat-footer",name:"Footer",sections:[{id:"sec-footer-1",title:"Footer 1",htmlCode:`<!-- Footer -->
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
}`,previewImg:"footer-1.png"}]},Rk={id:"cat-subhero",name:"Sub Hero",sections:[{id:"sec-subhero-1",title:"Sub Hero Section 1",htmlCode:`<section class="subhero">
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
`,previewImg:"subhero-3.png"}]},Pk={id:"cat-experts",name:"Experts",sections:[{id:"sec-experts-1",title:"experts 1",htmlCode:`<section class="mit-expert-section">

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
}`,previewImg:"experts-2.png"}]},Mk={id:"cat-byTheNumbers",name:"By The Numbers",sections:[{id:"sec-byTheNumbers-1",title:"By The Numbers 1",htmlCode:`<section class="numbers-section">
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
}`,previewImg:"by-the-numbers-4.png"}]},zk={id:"cat-value",name:"Value",sections:[{id:"sec-value-",title:"Value Section 2",htmlCode:`<section class="value-section">
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
`,previewImg:"value-1.png"},{id:"sec-value-2",title:"Value Section 2",htmlCode:"",cssCode:"",previewImg:"value-2.png"}]},_k={id:"cat-boilerplate",name:"Boiler Plate",sections:[{id:"sec-boilerplate-1",title:"HTML Boilerplate",htmlCode:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>%%title%%</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://slxcloud.app/MIT/2025/cell-therapy-2025-ty-lp/images/favicon.png" rel="shortcut icon" type="image/x-icon">
  <link href="https://slxcloud.app/MIT/2025/cell-therapy-2025-ty-lp/images/webclip.png" rel="apple-touch-icon">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>
<body>
  <!-- ENTER SECTIONS HERE -->
</body>
</html>`,cssCode:"",previewImg:"boiler-plate.png"}]},$k=[_k,xk,yk,Rk,Ck,Mk,bk,wk,kk,Sk,Pk,Ek,Ik,zk,Tk],Ok={id:"cat-clientexample1-header",name:"ClientExample1 - Header",sections:[{id:"sec-clientexample1-header-1",title:"Header Section",htmlCode:"<div>ClientExample1 Header Section</div>",cssCode:"",previewImg:"hero-1.png"}]},Ak={id:"cat-clientexample1-hero",name:"ClientExample1 - Hero",sections:[{id:"sec-clientexample1-hero-1",title:"Hero Section",htmlCode:"<div>ClientExample1 Hero Section</div>",cssCode:"",previewImg:"hero-1.png"}]},Nk={id:"cat-clientexample1-instructors",name:"ClientExample1 - Instructors",sections:[{id:"sec-clientexample1-instructors-1",title:"Instructors Section",htmlCode:"<div>ClientExample1 Instructors Section</div>",cssCode:"",previewImg:"hero-1.png"}]},Dk={id:"cat-clientexample1-textimage-overlap",name:"ClientExample1 - Text Image Overlap",sections:[{id:"sec-clientexample1-textimage-overlap-1",title:"Text Image Overlap Section",htmlCode:"<div>ClientExample1 Text Image Overlap Section</div>",cssCode:"",previewImg:"hero-1.png"}]},Lk={id:"cat-clientexample1-download",name:"ClientExample1 - Download",sections:[{id:"sec-clientexample1-download-1",title:"Download Section",htmlCode:"<div>ClientExample1 Download Section</div>",cssCode:"",previewImg:"hero-1.png"}]},Fk={id:"cat-clientexample1-course-details",name:"ClientExample1 - Course Details",sections:[{id:"sec-clientexample1-course-details-1",title:"Course Details Section",htmlCode:"<div>ClientExample1 Course Details Section</div>",cssCode:"",previewImg:"hero-1.png"}]},jk={id:"cat-clientexample1-expertise",name:"ClientExample1 - Expertise",sections:[{id:"sec-clientexample1-expertise-1",title:"Expertise Section",htmlCode:"<div>ClientExample1 Expertise Section</div>",cssCode:"",previewImg:"hero-1.png"}]},Bk={id:"cat-clientexample1-benefits",name:"ClientExample1 - Benefits",sections:[{id:"sec-clientexample1-benefits-1",title:"Benefits Section",htmlCode:"<div>ClientExample1 Benefits Section</div>",cssCode:"",previewImg:"hero-1.png"}]},Wk={id:"cat-clientexample1-about",name:"clientExample1 - About",sections:[{id:"sec-clientexample1-about-1",title:"About Section",htmlCode:"<div>clientExample1 About Section</div>",cssCode:"",previewImg:"hero-1.png"}]},Uk={id:"cat-clientexample1-footer",name:"ClientExample1 - Footer",sections:[{id:"sec-clientexample1-footer-1",title:"Footer Section",htmlCode:"<div>ClientExample1 Footer Section</div>",cssCode:"",previewImg:"hero-1.png"}]},Hk={id:"cat-clientexample1-subhero",name:"ClientExample1 - Subhero",sections:[{id:"sec-clientexample1-subhero-1",title:"Subhero Section",htmlCode:"<div>ClientExample1 Subhero Section</div>",cssCode:"",previewImg:"hero-1.png"}]},Vk={id:"cat-clientexample1-experts",name:"ClientExample1 - Experts",sections:[{id:"sec-clientexample1-experts-1",title:"Experts Section",htmlCode:"<div>ClientExample1 Experts Section</div>",cssCode:"",previewImg:"hero-1.png"}]},Kk={id:"cat-clientexample1-by-the-numbers",name:"ClientExample1 - By The Numbers",sections:[{id:"sec-clientexample1-by-the-numbers-1",title:"By The Numbers Section",htmlCode:"<div>ClientExample1 By The Numbers Section</div>",cssCode:"",previewImg:"hero-1.png"}]},Gk={id:"cat-clientexample1-value",name:"ClientExample1 - Value",sections:[{id:"sec-clientexample1-value-1",title:"Value Section",htmlCode:"<div>ClientExample1 Value Section</div>",cssCode:"",previewImg:"hero-1.png"}]},qk={id:"cat-clientexample1-boilerplate",name:"ClientExample1 - Boilerplate",sections:[{id:"sec-clientexample1-boilerplate-1",title:"Boilerplate Section",htmlCode:"<!DOCTYPE html><html><head><title>Client 1</title></head><body><!-- content --></body></html>",cssCode:"",previewImg:"hero-1.png"}]},Yk=[qk,Ok,Ak,Hk,Lk,Kk,Nk,Dk,Fk,jk,Vk,Bk,Wk,Gk,Uk],Kc=[{id:"mit",name:"MIT",categories:$k},{id:"clientExample1",name:"Client Example 1",categories:Yk}],Xk=({drawerWidth:n,mobileOpen:r,onDrawerToggle:o,isMobile:a,categories:l,selectedCategoryId:u,onSelectCategory:p,selectedClientId:f,onSelectClient:h})=>{const g=Hn(),x={light:"#A4DFF7",dark:"#011326"};return N.jsxs(s2,{variant:a?"temporary":"permanent",open:a?r:!0,onClose:a?o:void 0,ModalProps:{keepMounted:!0},sx:{width:n,flexShrink:0,"& .MuiDrawer-paper":{width:n,boxSizing:"border-box",borderRadius:"0 20px 20px 0",backgroundColor:g.palette.mode==="dark"?"#003463":"#E6F6FC",paddingTop:g.spacing(2),paddingX:g.spacing(2)}},children:[N.jsx(pr,{sx:{display:"flex",justifyContent:"flex-start",mb:2},children:N.jsx("img",{src:"/mit_landing_page_library/SLX-logo.png",alt:"SalesLabX",style:{height:20,objectFit:"contain"}})}),N.jsx(pr,{sx:{px:0,mb:1},children:N.jsx(h2,{fullWidth:!0,size:"medium",variant:"outlined",sx:{"& .MuiOutlinedInput-root":{backgroundColor:"#fff",borderRadius:2,boxShadow:"none","& fieldset":{border:"none"}}},children:N.jsxs(zh,{value:f,displayEmpty:!0,onChange:y=>h(y.target.value),renderValue:y=>{var k;return y?(k=Kc.find($=>$.id===y))==null?void 0:k.name:N.jsx("span",{style:{color:"#aaa"},children:"Choose Client"})},sx:{fontSize:14},children:[N.jsx(Cm,{disabled:!0,value:"",children:"Choose Client"}),Kc.map(y=>N.jsx(Cm,{value:y.id,children:y.name},y.id))]})})}),N.jsx(yh,{sx:{my:2}}),N.jsx(pr,{children:N.jsx(Eh,{children:l.map(y=>{const k=y.id===u;return N.jsx(H2,{selected:k,onClick:()=>{p(y.id),a&&o()},sx:{borderRadius:"10px",marginBottom:"6px",backgroundColor:k?x[g.palette.mode]:"transparent","&:hover":{backgroundColor:x[g.palette.mode]},paddingY:.5,paddingX:2},children:N.jsx(Y2,{primary:y.name,primaryTypographyProps:{fontWeight:k?700:500,fontSize:"0.95rem"}})},y.id)})})})]})},Qk=({section:n})=>{const[r,o]=b.useState(!1),[a,l]=b.useState(!1),[u,p]=b.useState(!1),f=()=>{l(!0)},h=()=>{l(!1)},g=(y,k)=>{k&&k.stopPropagation(),navigator.clipboard.writeText(y),p(!0)},x=()=>{p(!1)};return N.jsxs(N.Fragment,{children:[N.jsxs(Wb,{sx:{height:"90%",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative",cursor:"pointer"},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:f,children:[N.jsx(ew,{component:"img",sx:{width:"100%",height:"80%",objectFit:"cover"},image:n.previewImg,alt:n.title}),N.jsx(Gb,{sx:{backgroundColor:"#f5f5f5"},children:N.jsx(Wn,{variant:"subtitle1",children:n.title})}),r&&N.jsxs(pr,{sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",bgcolor:"rgba(0,0,0,0.3)",display:"flex",justifyContent:"center",alignItems:"center",gap:2,pointerEvents:"none",flexDirection:"row"},children:[N.jsx(cm,{onClick:y=>g(n.htmlCode,y),sx:{backgroundColor:"#001C39",color:"#ffffff",pointerEvents:"auto","&:hover":{backgroundColor:"#003366"}},children:"Copy HTML"}),n.cssCode&&N.jsx(cm,{onClick:y=>g(n.cssCode,y),sx:{backgroundColor:"#FF8000",color:"#ffffff",pointerEvents:"auto","&:hover":{backgroundColor:"#e67300"}},children:"Copy CSS"})]})]}),N.jsx(Nw,{open:a,onClose:h,maxWidth:"lg",children:N.jsx(Ww,{sx:{p:0},children:N.jsx("img",{src:n.previewImg,alt:n.title,style:{width:"100%",height:"auto",display:"block"}})})}),N.jsx(ak,{open:u,autoHideDuration:2e3,onClose:x,message:"Copied to clipboard!",anchorOrigin:{vertical:"bottom",horizontal:"center"}})]})},Zk=({category:n})=>n?N.jsxs(pr,{p:2,sx:{height:"calc(100vh - 64px)"},children:[N.jsxs(Wn,{variant:"h5",gutterBottom:!0,children:[n.name," Sections"]}),N.jsx(gm,{container:!0,spacing:2,sx:{height:"100%"},children:n.sections.map(r=>N.jsx(gm,{item:!0,xs:6,sx:{height:"50%"},children:N.jsx(Qk,{section:r})},r.id))})]}):N.jsx(pr,{p:2,children:N.jsx(Wn,{variant:"h6",children:"No Category Selected"})});function Jk(){const[n,r]=b.useState(""),o=Kc.find(k=>k.id===n)??null,[a,l]=b.useState(""),u=(o==null?void 0:o.categories.find(k=>k.id===a))??null;b.useEffect(()=>{o&&o.categories.length>0&&l(o.categories[0].id)},[n]);const[p,f]=b.useState(!1),h=Hn(),g=Qx(h.breakpoints.down("sm")),x=240,y=()=>f(!p);return N.jsxs(pr,{sx:{display:"flex",height:"100vh"},children:[N.jsx(sw,{}),N.jsx(sb,{position:"fixed",sx:{ml:g?0:`${x}px`,width:g?"100%":`calc(100% - ${x}px)`},children:N.jsxs(pk,{children:[g&&N.jsx(Y1,{color:"inherit",edge:"start",onClick:y,sx:{mr:2},children:N.jsx(vk,{})}),N.jsx(Wn,{variant:"h6",noWrap:!0,component:"div",children:"MIT Landing Page Library"})]})}),N.jsx(Xk,{drawerWidth:x,mobileOpen:p,onDrawerToggle:y,isMobile:g,categories:(o==null?void 0:o.categories)??[],selectedCategoryId:a,onSelectCategory:l,selectedClientId:n,onSelectClient:r}),N.jsx(pr,{component:"main",sx:{flexGrow:1,p:2,mt:"64px"},children:u?N.jsx(Zk,{category:u}):N.jsx(Wn,{variant:"h6",color:"textSecondary",children:"Please select a client to begin"})})]})}const eS=pu({palette:{primary:{main:"#001C39"}}});O0.createRoot(document.getElementById("root")).render(N.jsx(bn.StrictMode,{children:N.jsx(p1,{theme:eS,children:N.jsx(Jk,{})})}));
