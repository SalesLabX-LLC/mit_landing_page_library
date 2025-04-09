function Bv(n,o){for(var i=0;i<o.length;i++){const a=o[i];if(typeof a!="string"&&!Array.isArray(a)){for(const l in a)if(l!=="default"&&!(l in n)){const c=Object.getOwnPropertyDescriptor(a,l);c&&Object.defineProperty(n,l,c.get?c:{enumerable:!0,get:()=>a[l]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Yr(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function er(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var o=n.default;if(typeof o=="function"){var i=function a(){return this instanceof a?Reflect.construct(o,arguments,this.constructor):o.apply(this,arguments)};i.prototype=o.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(n).forEach(function(a){var l=Object.getOwnPropertyDescriptor(n,a);Object.defineProperty(i,a,l.get?l:{enumerable:!0,get:function(){return n[a]}})}),i}var Wu={exports:{}},$i={},Uu={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f;function Fv(){if(_f)return ke;_f=1;var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),p=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function S(R){return R===null||typeof R!="object"?null:(R=b&&R[b]||R["@@iterator"],typeof R=="function"?R:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function M(R,U,fe){this.props=R,this.context=U,this.refs=y,this.updater=fe||_}M.prototype.isReactComponent={},M.prototype.setState=function(R,U){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,U,"setState")},M.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function F(){}F.prototype=M.prototype;function H(R,U,fe){this.props=R,this.context=U,this.refs=y,this.updater=fe||_}var A=H.prototype=new F;A.constructor=H,C(A,M.prototype),A.isPureReactComponent=!0;var N=Array.isArray,k=Object.prototype.hasOwnProperty,B={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function z(R,U,fe){var ae,pe={},le=null,ye=null;if(U!=null)for(ae in U.ref!==void 0&&(ye=U.ref),U.key!==void 0&&(le=""+U.key),U)k.call(U,ae)&&!x.hasOwnProperty(ae)&&(pe[ae]=U[ae]);var he=arguments.length-2;if(he===1)pe.children=fe;else if(1<he){for(var me=Array(he),Oe=0;Oe<he;Oe++)me[Oe]=arguments[Oe+2];pe.children=me}if(R&&R.defaultProps)for(ae in he=R.defaultProps,he)pe[ae]===void 0&&(pe[ae]=he[ae]);return{$$typeof:n,type:R,key:le,ref:ye,props:pe,_owner:B.current}}function W(R,U){return{$$typeof:n,type:R.type,key:U,ref:R.ref,props:R.props,_owner:R._owner}}function L(R){return typeof R=="object"&&R!==null&&R.$$typeof===n}function q(R){var U={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(fe){return U[fe]})}var oe=/\/+/g;function ee(R,U){return typeof R=="object"&&R!==null&&R.key!=null?q(""+R.key):U.toString(36)}function re(R,U,fe,ae,pe){var le=typeof R;(le==="undefined"||le==="boolean")&&(R=null);var ye=!1;if(R===null)ye=!0;else switch(le){case"string":case"number":ye=!0;break;case"object":switch(R.$$typeof){case n:case o:ye=!0}}if(ye)return ye=R,pe=pe(ye),R=ae===""?"."+ee(ye,0):ae,N(pe)?(fe="",R!=null&&(fe=R.replace(oe,"$&/")+"/"),re(pe,U,fe,"",function(Oe){return Oe})):pe!=null&&(L(pe)&&(pe=W(pe,fe+(!pe.key||ye&&ye.key===pe.key?"":(""+pe.key).replace(oe,"$&/")+"/")+R)),U.push(pe)),1;if(ye=0,ae=ae===""?".":ae+":",N(R))for(var he=0;he<R.length;he++){le=R[he];var me=ae+ee(le,he);ye+=re(le,U,fe,me,pe)}else if(me=S(R),typeof me=="function")for(R=me.call(R),he=0;!(le=R.next()).done;)le=le.value,me=ae+ee(le,he++),ye+=re(le,U,fe,me,pe);else if(le==="object")throw U=String(R),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.");return ye}function ne(R,U,fe){if(R==null)return R;var ae=[],pe=0;return re(R,ae,"","",function(le){return U.call(fe,le,pe++)}),ae}function X(R){if(R._status===-1){var U=R._result;U=U(),U.then(function(fe){(R._status===0||R._status===-1)&&(R._status=1,R._result=fe)},function(fe){(R._status===0||R._status===-1)&&(R._status=2,R._result=fe)}),R._status===-1&&(R._status=0,R._result=U)}if(R._status===1)return R._result.default;throw R._result}var te={current:null},j={transition:null},Q={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:j,ReactCurrentOwner:B};function Z(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:ne,forEach:function(R,U,fe){ne(R,function(){U.apply(this,arguments)},fe)},count:function(R){var U=0;return ne(R,function(){U++}),U},toArray:function(R){return ne(R,function(U){return U})||[]},only:function(R){if(!L(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},ke.Component=M,ke.Fragment=i,ke.Profiler=l,ke.PureComponent=H,ke.StrictMode=a,ke.Suspense=h,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,ke.act=Z,ke.cloneElement=function(R,U,fe){if(R==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+R+".");var ae=C({},R.props),pe=R.key,le=R.ref,ye=R._owner;if(U!=null){if(U.ref!==void 0&&(le=U.ref,ye=B.current),U.key!==void 0&&(pe=""+U.key),R.type&&R.type.defaultProps)var he=R.type.defaultProps;for(me in U)k.call(U,me)&&!x.hasOwnProperty(me)&&(ae[me]=U[me]===void 0&&he!==void 0?he[me]:U[me])}var me=arguments.length-2;if(me===1)ae.children=fe;else if(1<me){he=Array(me);for(var Oe=0;Oe<me;Oe++)he[Oe]=arguments[Oe+2];ae.children=he}return{$$typeof:n,type:R.type,key:pe,ref:le,props:ae,_owner:ye}},ke.createContext=function(R){return R={$$typeof:p,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},R.Provider={$$typeof:c,_context:R},R.Consumer=R},ke.createElement=z,ke.createFactory=function(R){var U=z.bind(null,R);return U.type=R,U},ke.createRef=function(){return{current:null}},ke.forwardRef=function(R){return{$$typeof:f,render:R}},ke.isValidElement=L,ke.lazy=function(R){return{$$typeof:v,_payload:{_status:-1,_result:R},_init:X}},ke.memo=function(R,U){return{$$typeof:g,type:R,compare:U===void 0?null:U}},ke.startTransition=function(R){var U=j.transition;j.transition={};try{R()}finally{j.transition=U}},ke.unstable_act=Z,ke.useCallback=function(R,U){return te.current.useCallback(R,U)},ke.useContext=function(R){return te.current.useContext(R)},ke.useDebugValue=function(){},ke.useDeferredValue=function(R){return te.current.useDeferredValue(R)},ke.useEffect=function(R,U){return te.current.useEffect(R,U)},ke.useId=function(){return te.current.useId()},ke.useImperativeHandle=function(R,U,fe){return te.current.useImperativeHandle(R,U,fe)},ke.useInsertionEffect=function(R,U){return te.current.useInsertionEffect(R,U)},ke.useLayoutEffect=function(R,U){return te.current.useLayoutEffect(R,U)},ke.useMemo=function(R,U){return te.current.useMemo(R,U)},ke.useReducer=function(R,U,fe){return te.current.useReducer(R,U,fe)},ke.useRef=function(R){return te.current.useRef(R)},ke.useState=function(R){return te.current.useState(R)},ke.useSyncExternalStore=function(R,U,fe){return te.current.useSyncExternalStore(R,U,fe)},ke.useTransition=function(){return te.current.useTransition()},ke.version="18.3.1",ke}var Of;function Ua(){return Of||(Of=1,Uu.exports=Fv()),Uu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf;function Wv(){if(Mf)return $i;Mf=1;var n=Ua(),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(f,h,g){var v,b={},S=null,_=null;g!==void 0&&(S=""+g),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(_=h.ref);for(v in h)a.call(h,v)&&!c.hasOwnProperty(v)&&(b[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)b[v]===void 0&&(b[v]=h[v]);return{$$typeof:o,type:f,key:S,ref:_,props:b,_owner:l.current}}return $i.Fragment=i,$i.jsx=p,$i.jsxs=p,$i}var If;function Ec(){return If||(If=1,Wu.exports=Wv()),Wu.exports}var V=Ec(),P=Ua();const kn=Yr(P),sc=Bv({__proto__:null,default:kn},[P]);var Ca={},Hu={exports:{}},It={},Vu={exports:{}},Ku={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f;function Uv(){return $f||($f=1,function(n){function o(j,Q){var Z=j.length;j.push(Q);e:for(;0<Z;){var R=Z-1>>>1,U=j[R];if(0<l(U,Q))j[R]=Q,j[Z]=U,Z=R;else break e}}function i(j){return j.length===0?null:j[0]}function a(j){if(j.length===0)return null;var Q=j[0],Z=j.pop();if(Z!==Q){j[0]=Z;e:for(var R=0,U=j.length,fe=U>>>1;R<fe;){var ae=2*(R+1)-1,pe=j[ae],le=ae+1,ye=j[le];if(0>l(pe,Z))le<U&&0>l(ye,pe)?(j[R]=ye,j[le]=Z,R=le):(j[R]=pe,j[ae]=Z,R=ae);else if(le<U&&0>l(ye,Z))j[R]=ye,j[le]=Z,R=le;else break e}}return Q}function l(j,Q){var Z=j.sortIndex-Q.sortIndex;return Z!==0?Z:j.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var p=Date,f=p.now();n.unstable_now=function(){return p.now()-f}}var h=[],g=[],v=1,b=null,S=3,_=!1,C=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(j){for(var Q=i(g);Q!==null;){if(Q.callback===null)a(g);else if(Q.startTime<=j)a(g),Q.sortIndex=Q.expirationTime,o(h,Q);else break;Q=i(g)}}function N(j){if(y=!1,A(j),!C)if(i(h)!==null)C=!0,X(k);else{var Q=i(g);Q!==null&&te(N,Q.startTime-j)}}function k(j,Q){C=!1,y&&(y=!1,F(z),z=-1),_=!0;var Z=S;try{for(A(Q),b=i(h);b!==null&&(!(b.expirationTime>Q)||j&&!q());){var R=b.callback;if(typeof R=="function"){b.callback=null,S=b.priorityLevel;var U=R(b.expirationTime<=Q);Q=n.unstable_now(),typeof U=="function"?b.callback=U:b===i(h)&&a(h),A(Q)}else a(h);b=i(h)}if(b!==null)var fe=!0;else{var ae=i(g);ae!==null&&te(N,ae.startTime-Q),fe=!1}return fe}finally{b=null,S=Z,_=!1}}var B=!1,x=null,z=-1,W=5,L=-1;function q(){return!(n.unstable_now()-L<W)}function oe(){if(x!==null){var j=n.unstable_now();L=j;var Q=!0;try{Q=x(!0,j)}finally{Q?ee():(B=!1,x=null)}}else B=!1}var ee;if(typeof H=="function")ee=function(){H(oe)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ne=re.port2;re.port1.onmessage=oe,ee=function(){ne.postMessage(null)}}else ee=function(){M(oe,0)};function X(j){x=j,B||(B=!0,ee())}function te(j,Q){z=M(function(){j(n.unstable_now())},Q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(j){j.callback=null},n.unstable_continueExecution=function(){C||_||(C=!0,X(k))},n.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<j?Math.floor(1e3/j):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return i(h)},n.unstable_next=function(j){switch(S){case 1:case 2:case 3:var Q=3;break;default:Q=S}var Z=S;S=Q;try{return j()}finally{S=Z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(j,Q){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Z=S;S=j;try{return Q()}finally{S=Z}},n.unstable_scheduleCallback=function(j,Q,Z){var R=n.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?R+Z:R):Z=R,j){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Z+U,j={id:v++,callback:Q,priorityLevel:j,startTime:Z,expirationTime:U,sortIndex:-1},Z>R?(j.sortIndex=Z,o(g,j),i(h)===null&&j===i(g)&&(y?(F(z),z=-1):y=!0,te(N,Z-R))):(j.sortIndex=U,o(h,j),C||_||(C=!0,X(k))),j},n.unstable_shouldYield=q,n.unstable_wrapCallback=function(j){var Q=S;return function(){var Z=S;S=Q;try{return j.apply(this,arguments)}finally{S=Z}}}}(Ku)),Ku}var Nf;function Hv(){return Nf||(Nf=1,Vu.exports=Uv()),Vu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zf;function Vv(){if(zf)return It;zf=1;var n=Ua(),o=Hv();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,l={};function c(e,t){p(e,t),p(e+"Capture",t)}function p(e,t){for(l[e]=t,e=0;e<t.length;e++)a.add(t[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},b={};function S(e){return h.call(b,e)?!0:h.call(v,e)?!1:g.test(e)?b[e]=!0:(v[e]=!0,!1)}function _(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function C(e,t,r,s){if(t===null||typeof t>"u"||_(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function y(e,t,r,s,u,d,m){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=u,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=m}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){M[e]=new y(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];M[t]=new y(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){M[e]=new y(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){M[e]=new y(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){M[e]=new y(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){M[e]=new y(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){M[e]=new y(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){M[e]=new y(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){M[e]=new y(e,5,!1,e.toLowerCase(),null,!1,!1)});var F=/[\-:]([a-z])/g;function H(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(F,H);M[t]=new y(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(F,H);M[t]=new y(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(F,H);M[t]=new y(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){M[e]=new y(e,1,!1,e.toLowerCase(),null,!1,!1)}),M.xlinkHref=new y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){M[e]=new y(e,1,!1,e.toLowerCase(),null,!0,!0)});function A(e,t,r,s){var u=M.hasOwnProperty(t)?M[t]:null;(u!==null?u.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(C(t,r,u,s)&&(r=null),s||u===null?S(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):u.mustUseProperty?e[u.propertyName]=r===null?u.type===3?!1:"":r:(t=u.attributeName,s=u.attributeNamespace,r===null?e.removeAttribute(t):(u=u.type,r=u===3||u===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var N=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),B=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),q=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),j=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,R;function U(e){if(R===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);R=t&&t[1]||""}return`
`+R+e}var fe=!1;function ae(e,t){if(!e||fe)return"";fe=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(D){var s=D}Reflect.construct(e,[],t)}else{try{t.call()}catch(D){s=D}e.call(t.prototype)}else{try{throw Error()}catch(D){s=D}e()}}catch(D){if(D&&s&&typeof D.stack=="string"){for(var u=D.stack.split(`
`),d=s.stack.split(`
`),m=u.length-1,w=d.length-1;1<=m&&0<=w&&u[m]!==d[w];)w--;for(;1<=m&&0<=w;m--,w--)if(u[m]!==d[w]){if(m!==1||w!==1)do if(m--,w--,0>w||u[m]!==d[w]){var E=`
`+u[m].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=m&&0<=w);break}}}finally{fe=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?U(e):""}function pe(e){switch(e.tag){case 5:return U(e.type);case 16:return U("Lazy");case 13:return U("Suspense");case 19:return U("SuspenseList");case 0:case 2:case 15:return e=ae(e.type,!1),e;case 11:return e=ae(e.type.render,!1),e;case 1:return e=ae(e.type,!0),e;default:return""}}function le(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case x:return"Fragment";case B:return"Portal";case W:return"Profiler";case z:return"StrictMode";case ee:return"Suspense";case re:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case q:return(e.displayName||"Context")+".Consumer";case L:return(e._context.displayName||"Context")+".Provider";case oe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ne:return t=e.displayName||null,t!==null?t:le(e.type)||"Memo";case X:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}function ye(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(t);case 8:return t===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oe(e){var t=me(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,d=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(m){s=""+m,d.call(this,m)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(m){s=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function He(e){e._valueTracker||(e._valueTracker=Oe(e))}function tt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=me(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Me(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qe(e,t){var r=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function nt(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=he(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gt(e,t){t=t.checked,t!=null&&A(e,"checked",t,!1)}function qt(e,t){Gt(e,t);var r=he(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tn(e,t.type,r):t.hasOwnProperty("defaultValue")&&Tn(e,t.type,he(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yt(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Tn(e,t,r){(t!=="number"||Me(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Ye=Array.isArray;function ft(e,t,r,s){if(e=e.options,t){t={};for(var u=0;u<r.length;u++)t["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=t.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&s&&(e[r].defaultSelected=!0)}else{for(r=""+he(r),t=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function Lt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pn(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(i(92));if(Ye(r)){if(1<r.length)throw Error(i(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:he(r)}}function Tt(e,t){var r=he(t.value),s=he(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function kt(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qt(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xt(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qt(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fn,we=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,u){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,u)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fn=fn||document.createElement("div"),fn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ut(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pn=["Webkit","ms","Moz","O"];Object.keys(mn).forEach(function(e){Pn.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mn[t]=mn[e]})});function tr(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||mn.hasOwnProperty(e)&&mn[e]?(""+t).trim():t+"px"}function Go(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,u=tr(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,u):e[r]=u}}var Xr=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nr(e,t){if(t){if(Xr[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function Rr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zr=null;function qo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yo=null,rr=null,Fn=null;function Qo(e){if(e=yi(e)){if(typeof Yo!="function")throw Error(i(280));var t=e.stateNode;t&&(t=js(t),Yo(e.stateNode,e.type,t))}}function Xo(e){rr?Fn?Fn.push(e):Fn=[e]:rr=e}function Zo(){if(rr){var e=rr,t=Fn;if(Fn=rr=null,Qo(e),t)for(e=0;e<t.length;e++)Qo(t[e])}}function ds(e,t){return e(t)}function ps(){}var Jo=!1;function Jr(e,t,r){if(Jo)return e(t,r);Jo=!0;try{return ds(e,t,r)}finally{Jo=!1,(rr!==null||Fn!==null)&&(ps(),Zo())}}function _r(e,t){var r=e.stateNode;if(r===null)return null;var s=js(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(i(231,t,typeof r));return r}var Wn=!1;if(f)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){Wn=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{Wn=!1}function Dt(e,t,r,s,u,d,m,w,E){var D=Array.prototype.slice.call(arguments,3);try{t.apply(r,D)}catch(G){this.onError(G)}}var hn=!1,eo=null,Rn=!1,Or=null,fs={onError:function(e){hn=!0,eo=e}};function ms(e,t,r,s,u,d,m,w,E){hn=!1,eo=null,Dt.apply(fs,arguments)}function hs(e,t,r,s,u,d,m,w,E){if(ms.apply(this,arguments),hn){if(hn){var D=eo;hn=!1,eo=null}else throw Error(i(198));Rn||(Rn=!0,Or=D)}}function _n(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function gs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vs(e){if(_n(e)!==e)throw Error(i(188))}function al(e){var t=e.alternate;if(!t){if(t=_n(e),t===null)throw Error(i(188));return t!==e?null:e}for(var r=e,s=t;;){var u=r.return;if(u===null)break;var d=u.alternate;if(d===null){if(s=u.return,s!==null){r=s;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===r)return vs(u),e;if(d===s)return vs(u),t;d=d.sibling}throw Error(i(188))}if(r.return!==s.return)r=u,s=d;else{for(var m=!1,w=u.child;w;){if(w===r){m=!0,r=u,s=d;break}if(w===s){m=!0,s=u,r=d;break}w=w.sibling}if(!m){for(w=d.child;w;){if(w===r){m=!0,r=d,s=u;break}if(w===s){m=!0,s=d,r=u;break}w=w.sibling}if(!m)throw Error(i(189))}}if(r.alternate!==s)throw Error(i(190))}if(r.tag!==3)throw Error(i(188));return r.stateNode.current===r?e:t}function ys(e){return e=al(e),e!==null?be(e):null}function be(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=be(e);if(t!==null)return t;e=e.sibling}return null}var vt=o.unstable_scheduleCallback,nd=o.unstable_cancelCallback,Xh=o.unstable_shouldYield,Zh=o.unstable_requestPaint,Qe=o.unstable_now,Jh=o.unstable_getCurrentPriorityLevel,ll=o.unstable_ImmediatePriority,rd=o.unstable_UserBlockingPriority,xs=o.unstable_NormalPriority,eg=o.unstable_LowPriority,od=o.unstable_IdlePriority,ws=null,On=null;function tg(e){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(ws,e,void 0,(e.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:og,ng=Math.log,rg=Math.LN2;function og(e){return e>>>=0,e===0?32:31-(ng(e)/rg|0)|0}var bs=64,Ss=4194304;function ei(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ks(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,u=e.suspendedLanes,d=e.pingedLanes,m=r&268435455;if(m!==0){var w=m&~u;w!==0?s=ei(w):(d&=m,d!==0&&(s=ei(d)))}else m=r&~u,m!==0?s=ei(m):d!==0&&(s=ei(d));if(s===0)return 0;if(t!==0&&t!==s&&(t&u)===0&&(u=s&-s,d=t&-t,u>=d||u===16&&(d&4194240)!==0))return t;if((s&4)!==0&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-gn(t),u=1<<r,s|=e[r],t&=~u;return s}function ig(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sg(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes;0<d;){var m=31-gn(d),w=1<<m,E=u[m];E===-1?((w&r)===0||(w&s)!==0)&&(u[m]=ig(w,t)):E<=t&&(e.expiredLanes|=w),d&=~w}}function ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function id(){var e=bs;return bs<<=1,(bs&4194240)===0&&(bs=64),e}function cl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ti(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gn(t),e[t]=r}function ag(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var u=31-gn(r),d=1<<u;t[u]=0,s[u]=-1,e[u]=-1,r&=~d}}function dl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-gn(r),u=1<<s;u&t|e[s]&t&&(e[s]|=t),r&=~u}}var Ie=0;function sd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ad,pl,ld,ud,cd,fl=!1,Cs=[],or=null,ir=null,sr=null,ni=new Map,ri=new Map,ar=[],lg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dd(e,t){switch(e){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ri.delete(t.pointerId)}}function oi(e,t,r,s,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:d,targetContainers:[u]},t!==null&&(t=yi(t),t!==null&&pl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function ug(e,t,r,s,u){switch(t){case"focusin":return or=oi(or,e,t,r,s,u),!0;case"dragenter":return ir=oi(ir,e,t,r,s,u),!0;case"mouseover":return sr=oi(sr,e,t,r,s,u),!0;case"pointerover":var d=u.pointerId;return ni.set(d,oi(ni.get(d)||null,e,t,r,s,u)),!0;case"gotpointercapture":return d=u.pointerId,ri.set(d,oi(ri.get(d)||null,e,t,r,s,u)),!0}return!1}function pd(e){var t=Mr(e.target);if(t!==null){var r=_n(t);if(r!==null){if(t=r.tag,t===13){if(t=gs(r),t!==null){e.blockedOn=t,cd(e.priority,function(){ld(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Es(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=hl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);Zr=s,r.target.dispatchEvent(s),Zr=null}else return t=yi(r),t!==null&&pl(t),e.blockedOn=r,!1;t.shift()}return!0}function fd(e,t,r){Es(e)&&r.delete(t)}function cg(){fl=!1,or!==null&&Es(or)&&(or=null),ir!==null&&Es(ir)&&(ir=null),sr!==null&&Es(sr)&&(sr=null),ni.forEach(fd),ri.forEach(fd)}function ii(e,t){e.blockedOn===t&&(e.blockedOn=null,fl||(fl=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,cg)))}function si(e){function t(u){return ii(u,e)}if(0<Cs.length){ii(Cs[0],e);for(var r=1;r<Cs.length;r++){var s=Cs[r];s.blockedOn===e&&(s.blockedOn=null)}}for(or!==null&&ii(or,e),ir!==null&&ii(ir,e),sr!==null&&ii(sr,e),ni.forEach(t),ri.forEach(t),r=0;r<ar.length;r++)s=ar[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<ar.length&&(r=ar[0],r.blockedOn===null);)pd(r),r.blockedOn===null&&ar.shift()}var to=N.ReactCurrentBatchConfig,Ts=!0;function dg(e,t,r,s){var u=Ie,d=to.transition;to.transition=null;try{Ie=1,ml(e,t,r,s)}finally{Ie=u,to.transition=d}}function pg(e,t,r,s){var u=Ie,d=to.transition;to.transition=null;try{Ie=4,ml(e,t,r,s)}finally{Ie=u,to.transition=d}}function ml(e,t,r,s){if(Ts){var u=hl(e,t,r,s);if(u===null)Il(e,t,s,Ps,r),dd(e,s);else if(ug(u,e,t,r,s))s.stopPropagation();else if(dd(e,s),t&4&&-1<lg.indexOf(e)){for(;u!==null;){var d=yi(u);if(d!==null&&ad(d),d=hl(e,t,r,s),d===null&&Il(e,t,s,Ps,r),d===u)break;u=d}u!==null&&s.stopPropagation()}else Il(e,t,s,null,r)}}var Ps=null;function hl(e,t,r,s){if(Ps=null,e=qo(s),e=Mr(e),e!==null)if(t=_n(e),t===null)e=null;else if(r=t.tag,r===13){if(e=gs(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ps=e,null}function md(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jh()){case ll:return 1;case rd:return 4;case xs:case eg:return 16;case od:return 536870912;default:return 16}default:return 16}}var lr=null,gl=null,Rs=null;function hd(){if(Rs)return Rs;var e,t=gl,r=t.length,s,u="value"in lr?lr.value:lr.textContent,d=u.length;for(e=0;e<r&&t[e]===u[e];e++);var m=r-e;for(s=1;s<=m&&t[r-s]===u[d-s];s++);return Rs=u.slice(e,1<s?1-s:void 0)}function _s(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Os(){return!0}function gd(){return!1}function jt(e){function t(r,s,u,d,m){this._reactName=r,this._targetInst=u,this.type=s,this.nativeEvent=d,this.target=m,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(r=e[w],this[w]=r?r(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Os:gd,this.isPropagationStopped=gd,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Os)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Os)},persist:function(){},isPersistent:Os}),t}var no={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=jt(no),ai=Z({},no,{view:0,detail:0}),fg=jt(ai),yl,xl,li,Ms=Z({},ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==li&&(li&&e.type==="mousemove"?(yl=e.screenX-li.screenX,xl=e.screenY-li.screenY):xl=yl=0,li=e),yl)},movementY:function(e){return"movementY"in e?e.movementY:xl}}),vd=jt(Ms),mg=Z({},Ms,{dataTransfer:0}),hg=jt(mg),gg=Z({},ai,{relatedTarget:0}),wl=jt(gg),vg=Z({},no,{animationName:0,elapsedTime:0,pseudoElement:0}),yg=jt(vg),xg=Z({},no,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wg=jt(xg),bg=Z({},no,{data:0}),yd=jt(bg),Sg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cg[e])?!!t[e]:!1}function bl(){return Eg}var Tg=Z({},ai,{key:function(e){if(e.key){var t=Sg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_s(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bl,charCode:function(e){return e.type==="keypress"?_s(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_s(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pg=jt(Tg),Rg=Z({},Ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xd=jt(Rg),_g=Z({},ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bl}),Og=jt(_g),Mg=Z({},no,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ig=jt(Mg),$g=Z({},Ms,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ng=jt($g),zg=[9,13,27,32],Sl=f&&"CompositionEvent"in window,ui=null;f&&"documentMode"in document&&(ui=document.documentMode);var Ag=f&&"TextEvent"in window&&!ui,wd=f&&(!Sl||ui&&8<ui&&11>=ui),bd=" ",Sd=!1;function kd(e,t){switch(e){case"keyup":return zg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ro=!1;function Lg(e,t){switch(e){case"compositionend":return Cd(t);case"keypress":return t.which!==32?null:(Sd=!0,bd);case"textInput":return e=t.data,e===bd&&Sd?null:e;default:return null}}function Dg(e,t){if(ro)return e==="compositionend"||!Sl&&kd(e,t)?(e=hd(),Rs=gl=lr=null,ro=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wd&&t.locale!=="ko"?null:t.data;default:return null}}var jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jg[e.type]:t==="textarea"}function Td(e,t,r,s){Xo(s),t=As(t,"onChange"),0<t.length&&(r=new vl("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var ci=null,di=null;function Bg(e){Hd(e,0)}function Is(e){var t=lo(e);if(tt(t))return e}function Fg(e,t){if(e==="change")return t}var Pd=!1;if(f){var kl;if(f){var Cl="oninput"in document;if(!Cl){var Rd=document.createElement("div");Rd.setAttribute("oninput","return;"),Cl=typeof Rd.oninput=="function"}kl=Cl}else kl=!1;Pd=kl&&(!document.documentMode||9<document.documentMode)}function _d(){ci&&(ci.detachEvent("onpropertychange",Od),di=ci=null)}function Od(e){if(e.propertyName==="value"&&Is(di)){var t=[];Td(t,di,e,qo(e)),Jr(Bg,t)}}function Wg(e,t,r){e==="focusin"?(_d(),ci=t,di=r,ci.attachEvent("onpropertychange",Od)):e==="focusout"&&_d()}function Ug(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Is(di)}function Hg(e,t){if(e==="click")return Is(t)}function Vg(e,t){if(e==="input"||e==="change")return Is(t)}function Kg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vn=typeof Object.is=="function"?Object.is:Kg;function pi(e,t){if(vn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var u=r[s];if(!h.call(t,u)||!vn(e[u],t[u]))return!1}return!0}function Md(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Id(e,t){var r=Md(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Md(r)}}function $d(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$d(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nd(){for(var e=window,t=Me();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Me(e.document)}return t}function El(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gg(e){var t=Nd(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&$d(r.ownerDocument.documentElement,r)){if(s!==null&&El(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var u=r.textContent.length,d=Math.min(s.start,u);s=s.end===void 0?d:Math.min(s.end,u),!e.extend&&d>s&&(u=s,s=d,d=u),u=Id(r,d);var m=Id(r,s);u&&m&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),e.removeAllRanges(),d>s?(e.addRange(t),e.extend(m.node,m.offset)):(t.setEnd(m.node,m.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qg=f&&"documentMode"in document&&11>=document.documentMode,oo=null,Tl=null,fi=null,Pl=!1;function zd(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Pl||oo==null||oo!==Me(s)||(s=oo,"selectionStart"in s&&El(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),fi&&pi(fi,s)||(fi=s,s=As(Tl,"onSelect"),0<s.length&&(t=new vl("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=oo)))}function $s(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var io={animationend:$s("Animation","AnimationEnd"),animationiteration:$s("Animation","AnimationIteration"),animationstart:$s("Animation","AnimationStart"),transitionend:$s("Transition","TransitionEnd")},Rl={},Ad={};f&&(Ad=document.createElement("div").style,"AnimationEvent"in window||(delete io.animationend.animation,delete io.animationiteration.animation,delete io.animationstart.animation),"TransitionEvent"in window||delete io.transitionend.transition);function Ns(e){if(Rl[e])return Rl[e];if(!io[e])return e;var t=io[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Ad)return Rl[e]=t[r];return e}var Ld=Ns("animationend"),Dd=Ns("animationiteration"),jd=Ns("animationstart"),Bd=Ns("transitionend"),Fd=new Map,Wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(e,t){Fd.set(e,t),c(t,[e])}for(var _l=0;_l<Wd.length;_l++){var Ol=Wd[_l],Yg=Ol.toLowerCase(),Qg=Ol[0].toUpperCase()+Ol.slice(1);ur(Yg,"on"+Qg)}ur(Ld,"onAnimationEnd"),ur(Dd,"onAnimationIteration"),ur(jd,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(Bd,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xg=new Set("cancel close invalid load scroll toggle".split(" ").concat(mi));function Ud(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,hs(s,t,void 0,e),e.currentTarget=null}function Hd(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],u=s.event;s=s.listeners;e:{var d=void 0;if(t)for(var m=s.length-1;0<=m;m--){var w=s[m],E=w.instance,D=w.currentTarget;if(w=w.listener,E!==d&&u.isPropagationStopped())break e;Ud(u,w,D),d=E}else for(m=0;m<s.length;m++){if(w=s[m],E=w.instance,D=w.currentTarget,w=w.listener,E!==d&&u.isPropagationStopped())break e;Ud(u,w,D),d=E}}}if(Rn)throw e=Or,Rn=!1,Or=null,e}function Le(e,t){var r=t[Dl];r===void 0&&(r=t[Dl]=new Set);var s=e+"__bubble";r.has(s)||(Vd(t,e,2,!1),r.add(s))}function Ml(e,t,r){var s=0;t&&(s|=4),Vd(r,e,s,t)}var zs="_reactListening"+Math.random().toString(36).slice(2);function hi(e){if(!e[zs]){e[zs]=!0,a.forEach(function(r){r!=="selectionchange"&&(Xg.has(r)||Ml(r,!1,e),Ml(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zs]||(t[zs]=!0,Ml("selectionchange",!1,t))}}function Vd(e,t,r,s){switch(md(t)){case 1:var u=dg;break;case 4:u=pg;break;default:u=ml}r=u.bind(null,t,r,e),u=void 0,!Wn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(t,r,{capture:!0,passive:u}):e.addEventListener(t,r,!0):u!==void 0?e.addEventListener(t,r,{passive:u}):e.addEventListener(t,r,!1)}function Il(e,t,r,s,u){var d=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var m=s.tag;if(m===3||m===4){var w=s.stateNode.containerInfo;if(w===u||w.nodeType===8&&w.parentNode===u)break;if(m===4)for(m=s.return;m!==null;){var E=m.tag;if((E===3||E===4)&&(E=m.stateNode.containerInfo,E===u||E.nodeType===8&&E.parentNode===u))return;m=m.return}for(;w!==null;){if(m=Mr(w),m===null)return;if(E=m.tag,E===5||E===6){s=d=m;continue e}w=w.parentNode}}s=s.return}Jr(function(){var D=d,G=qo(r),Y=[];e:{var K=Fd.get(e);if(K!==void 0){var ie=vl,ue=e;switch(e){case"keypress":if(_s(r)===0)break e;case"keydown":case"keyup":ie=Pg;break;case"focusin":ue="focus",ie=wl;break;case"focusout":ue="blur",ie=wl;break;case"beforeblur":case"afterblur":ie=wl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=hg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=Og;break;case Ld:case Dd:case jd:ie=yg;break;case Bd:ie=Ig;break;case"scroll":ie=fg;break;case"wheel":ie=Ng;break;case"copy":case"cut":case"paste":ie=wg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=xd}var ce=(t&4)!==0,Xe=!ce&&e==="scroll",I=ce?K!==null?K+"Capture":null:K;ce=[];for(var T=D,$;T!==null;){$=T;var J=$.stateNode;if($.tag===5&&J!==null&&($=J,I!==null&&(J=_r(T,I),J!=null&&ce.push(gi(T,J,$)))),Xe)break;T=T.return}0<ce.length&&(K=new ie(K,ue,null,r,G),Y.push({event:K,listeners:ce}))}}if((t&7)===0){e:{if(K=e==="mouseover"||e==="pointerover",ie=e==="mouseout"||e==="pointerout",K&&r!==Zr&&(ue=r.relatedTarget||r.fromElement)&&(Mr(ue)||ue[Hn]))break e;if((ie||K)&&(K=G.window===G?G:(K=G.ownerDocument)?K.defaultView||K.parentWindow:window,ie?(ue=r.relatedTarget||r.toElement,ie=D,ue=ue?Mr(ue):null,ue!==null&&(Xe=_n(ue),ue!==Xe||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(ie=null,ue=D),ie!==ue)){if(ce=vd,J="onMouseLeave",I="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(ce=xd,J="onPointerLeave",I="onPointerEnter",T="pointer"),Xe=ie==null?K:lo(ie),$=ue==null?K:lo(ue),K=new ce(J,T+"leave",ie,r,G),K.target=Xe,K.relatedTarget=$,J=null,Mr(G)===D&&(ce=new ce(I,T+"enter",ue,r,G),ce.target=$,ce.relatedTarget=Xe,J=ce),Xe=J,ie&&ue)t:{for(ce=ie,I=ue,T=0,$=ce;$;$=so($))T++;for($=0,J=I;J;J=so(J))$++;for(;0<T-$;)ce=so(ce),T--;for(;0<$-T;)I=so(I),$--;for(;T--;){if(ce===I||I!==null&&ce===I.alternate)break t;ce=so(ce),I=so(I)}ce=null}else ce=null;ie!==null&&Kd(Y,K,ie,ce,!1),ue!==null&&Xe!==null&&Kd(Y,Xe,ue,ce,!0)}}e:{if(K=D?lo(D):window,ie=K.nodeName&&K.nodeName.toLowerCase(),ie==="select"||ie==="input"&&K.type==="file")var de=Fg;else if(Ed(K))if(Pd)de=Vg;else{de=Ug;var ge=Wg}else(ie=K.nodeName)&&ie.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(de=Hg);if(de&&(de=de(e,D))){Td(Y,de,r,G);break e}ge&&ge(e,K,D),e==="focusout"&&(ge=K._wrapperState)&&ge.controlled&&K.type==="number"&&Tn(K,"number",K.value)}switch(ge=D?lo(D):window,e){case"focusin":(Ed(ge)||ge.contentEditable==="true")&&(oo=ge,Tl=D,fi=null);break;case"focusout":fi=Tl=oo=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,zd(Y,r,G);break;case"selectionchange":if(qg)break;case"keydown":case"keyup":zd(Y,r,G)}var ve;if(Sl)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else ro?kd(e,r)&&(xe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(xe="onCompositionStart");xe&&(wd&&r.locale!=="ko"&&(ro||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&ro&&(ve=hd()):(lr=G,gl="value"in lr?lr.value:lr.textContent,ro=!0)),ge=As(D,xe),0<ge.length&&(xe=new yd(xe,e,null,r,G),Y.push({event:xe,listeners:ge}),ve?xe.data=ve:(ve=Cd(r),ve!==null&&(xe.data=ve)))),(ve=Ag?Lg(e,r):Dg(e,r))&&(D=As(D,"onBeforeInput"),0<D.length&&(G=new yd("onBeforeInput","beforeinput",null,r,G),Y.push({event:G,listeners:D}),G.data=ve))}Hd(Y,t)})}function gi(e,t,r){return{instance:e,listener:t,currentTarget:r}}function As(e,t){for(var r=t+"Capture",s=[];e!==null;){var u=e,d=u.stateNode;u.tag===5&&d!==null&&(u=d,d=_r(e,r),d!=null&&s.unshift(gi(e,d,u)),d=_r(e,t),d!=null&&s.push(gi(e,d,u))),e=e.return}return s}function so(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Kd(e,t,r,s,u){for(var d=t._reactName,m=[];r!==null&&r!==s;){var w=r,E=w.alternate,D=w.stateNode;if(E!==null&&E===s)break;w.tag===5&&D!==null&&(w=D,u?(E=_r(r,d),E!=null&&m.unshift(gi(r,E,w))):u||(E=_r(r,d),E!=null&&m.push(gi(r,E,w)))),r=r.return}m.length!==0&&e.push({event:t,listeners:m})}var Zg=/\r\n?/g,Jg=/\u0000|\uFFFD/g;function Gd(e){return(typeof e=="string"?e:""+e).replace(Zg,`
`).replace(Jg,"")}function Ls(e,t,r){if(t=Gd(t),Gd(e)!==t&&r)throw Error(i(425))}function Ds(){}var $l=null,Nl=null;function zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Al=typeof setTimeout=="function"?setTimeout:void 0,ev=typeof clearTimeout=="function"?clearTimeout:void 0,qd=typeof Promise=="function"?Promise:void 0,tv=typeof queueMicrotask=="function"?queueMicrotask:typeof qd<"u"?function(e){return qd.resolve(null).then(e).catch(nv)}:Al;function nv(e){setTimeout(function(){throw e})}function Ll(e,t){var r=t,s=0;do{var u=r.nextSibling;if(e.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"){if(s===0){e.removeChild(u),si(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=u}while(r);si(t)}function cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var ao=Math.random().toString(36).slice(2),Mn="__reactFiber$"+ao,vi="__reactProps$"+ao,Hn="__reactContainer$"+ao,Dl="__reactEvents$"+ao,rv="__reactListeners$"+ao,ov="__reactHandles$"+ao;function Mr(e){var t=e[Mn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Hn]||r[Mn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Yd(e);e!==null;){if(r=e[Mn])return r;e=Yd(e)}return t}e=r,r=e.parentNode}return null}function yi(e){return e=e[Mn]||e[Hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function js(e){return e[vi]||null}var jl=[],uo=-1;function dr(e){return{current:e}}function De(e){0>uo||(e.current=jl[uo],jl[uo]=null,uo--)}function Ne(e,t){uo++,jl[uo]=e.current,e.current=t}var pr={},yt=dr(pr),Pt=dr(!1),Ir=pr;function co(e,t){var r=e.type.contextTypes;if(!r)return pr;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var u={},d;for(d in r)u[d]=t[d];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),u}function Rt(e){return e=e.childContextTypes,e!=null}function Bs(){De(Pt),De(yt)}function Qd(e,t,r){if(yt.current!==pr)throw Error(i(168));Ne(yt,t),Ne(Pt,r)}function Xd(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var u in s)if(!(u in t))throw Error(i(108,ye(e)||"Unknown",u));return Z({},r,s)}function Fs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pr,Ir=yt.current,Ne(yt,e),Ne(Pt,Pt.current),!0}function Zd(e,t,r){var s=e.stateNode;if(!s)throw Error(i(169));r?(e=Xd(e,t,Ir),s.__reactInternalMemoizedMergedChildContext=e,De(Pt),De(yt),Ne(yt,e)):De(Pt),Ne(Pt,r)}var Vn=null,Ws=!1,Bl=!1;function Jd(e){Vn===null?Vn=[e]:Vn.push(e)}function iv(e){Ws=!0,Jd(e)}function fr(){if(!Bl&&Vn!==null){Bl=!0;var e=0,t=Ie;try{var r=Vn;for(Ie=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}Vn=null,Ws=!1}catch(u){throw Vn!==null&&(Vn=Vn.slice(e+1)),vt(ll,fr),u}finally{Ie=t,Bl=!1}}return null}var po=[],fo=0,Us=null,Hs=0,Zt=[],Jt=0,$r=null,Kn=1,Gn="";function Nr(e,t){po[fo++]=Hs,po[fo++]=Us,Us=e,Hs=t}function ep(e,t,r){Zt[Jt++]=Kn,Zt[Jt++]=Gn,Zt[Jt++]=$r,$r=e;var s=Kn;e=Gn;var u=32-gn(s)-1;s&=~(1<<u),r+=1;var d=32-gn(t)+u;if(30<d){var m=u-u%5;d=(s&(1<<m)-1).toString(32),s>>=m,u-=m,Kn=1<<32-gn(t)+u|r<<u|s,Gn=d+e}else Kn=1<<d|r<<u|s,Gn=e}function Fl(e){e.return!==null&&(Nr(e,1),ep(e,1,0))}function Wl(e){for(;e===Us;)Us=po[--fo],po[fo]=null,Hs=po[--fo],po[fo]=null;for(;e===$r;)$r=Zt[--Jt],Zt[Jt]=null,Gn=Zt[--Jt],Zt[Jt]=null,Kn=Zt[--Jt],Zt[Jt]=null}var Bt=null,Ft=null,je=!1,yn=null;function tp(e,t){var r=rn(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function np(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Bt=e,Ft=cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Bt=e,Ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=$r!==null?{id:Kn,overflow:Gn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=rn(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Bt=e,Ft=null,!0):!1;default:return!1}}function Ul(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hl(e){if(je){var t=Ft;if(t){var r=t;if(!np(e,t)){if(Ul(e))throw Error(i(418));t=cr(r.nextSibling);var s=Bt;t&&np(e,t)?tp(s,r):(e.flags=e.flags&-4097|2,je=!1,Bt=e)}}else{if(Ul(e))throw Error(i(418));e.flags=e.flags&-4097|2,je=!1,Bt=e}}}function rp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Bt=e}function Vs(e){if(e!==Bt)return!1;if(!je)return rp(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zl(e.type,e.memoizedProps)),t&&(t=Ft)){if(Ul(e))throw op(),Error(i(418));for(;t;)tp(e,t),t=cr(t.nextSibling)}if(rp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ft=cr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ft=null}}else Ft=Bt?cr(e.stateNode.nextSibling):null;return!0}function op(){for(var e=Ft;e;)e=cr(e.nextSibling)}function mo(){Ft=Bt=null,je=!1}function Vl(e){yn===null?yn=[e]:yn.push(e)}var sv=N.ReactCurrentBatchConfig;function xi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(i(309));var s=r.stateNode}if(!s)throw Error(i(147,e));var u=s,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(m){var w=u.refs;m===null?delete w[d]:w[d]=m},t._stringRef=d,t)}if(typeof e!="string")throw Error(i(284));if(!r._owner)throw Error(i(290,e))}return e}function Ks(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ip(e){var t=e._init;return t(e._payload)}function sp(e){function t(I,T){if(e){var $=I.deletions;$===null?(I.deletions=[T],I.flags|=16):$.push(T)}}function r(I,T){if(!e)return null;for(;T!==null;)t(I,T),T=T.sibling;return null}function s(I,T){for(I=new Map;T!==null;)T.key!==null?I.set(T.key,T):I.set(T.index,T),T=T.sibling;return I}function u(I,T){return I=br(I,T),I.index=0,I.sibling=null,I}function d(I,T,$){return I.index=$,e?($=I.alternate,$!==null?($=$.index,$<T?(I.flags|=2,T):$):(I.flags|=2,T)):(I.flags|=1048576,T)}function m(I){return e&&I.alternate===null&&(I.flags|=2),I}function w(I,T,$,J){return T===null||T.tag!==6?(T=Au($,I.mode,J),T.return=I,T):(T=u(T,$),T.return=I,T)}function E(I,T,$,J){var de=$.type;return de===x?G(I,T,$.props.children,J,$.key):T!==null&&(T.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===X&&ip(de)===T.type)?(J=u(T,$.props),J.ref=xi(I,T,$),J.return=I,J):(J=ga($.type,$.key,$.props,null,I.mode,J),J.ref=xi(I,T,$),J.return=I,J)}function D(I,T,$,J){return T===null||T.tag!==4||T.stateNode.containerInfo!==$.containerInfo||T.stateNode.implementation!==$.implementation?(T=Lu($,I.mode,J),T.return=I,T):(T=u(T,$.children||[]),T.return=I,T)}function G(I,T,$,J,de){return T===null||T.tag!==7?(T=Wr($,I.mode,J,de),T.return=I,T):(T=u(T,$),T.return=I,T)}function Y(I,T,$){if(typeof T=="string"&&T!==""||typeof T=="number")return T=Au(""+T,I.mode,$),T.return=I,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case k:return $=ga(T.type,T.key,T.props,null,I.mode,$),$.ref=xi(I,null,T),$.return=I,$;case B:return T=Lu(T,I.mode,$),T.return=I,T;case X:var J=T._init;return Y(I,J(T._payload),$)}if(Ye(T)||Q(T))return T=Wr(T,I.mode,$,null),T.return=I,T;Ks(I,T)}return null}function K(I,T,$,J){var de=T!==null?T.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return de!==null?null:w(I,T,""+$,J);if(typeof $=="object"&&$!==null){switch($.$$typeof){case k:return $.key===de?E(I,T,$,J):null;case B:return $.key===de?D(I,T,$,J):null;case X:return de=$._init,K(I,T,de($._payload),J)}if(Ye($)||Q($))return de!==null?null:G(I,T,$,J,null);Ks(I,$)}return null}function ie(I,T,$,J,de){if(typeof J=="string"&&J!==""||typeof J=="number")return I=I.get($)||null,w(T,I,""+J,de);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case k:return I=I.get(J.key===null?$:J.key)||null,E(T,I,J,de);case B:return I=I.get(J.key===null?$:J.key)||null,D(T,I,J,de);case X:var ge=J._init;return ie(I,T,$,ge(J._payload),de)}if(Ye(J)||Q(J))return I=I.get($)||null,G(T,I,J,de,null);Ks(T,J)}return null}function ue(I,T,$,J){for(var de=null,ge=null,ve=T,xe=T=0,pt=null;ve!==null&&xe<$.length;xe++){ve.index>xe?(pt=ve,ve=null):pt=ve.sibling;var Te=K(I,ve,$[xe],J);if(Te===null){ve===null&&(ve=pt);break}e&&ve&&Te.alternate===null&&t(I,ve),T=d(Te,T,xe),ge===null?de=Te:ge.sibling=Te,ge=Te,ve=pt}if(xe===$.length)return r(I,ve),je&&Nr(I,xe),de;if(ve===null){for(;xe<$.length;xe++)ve=Y(I,$[xe],J),ve!==null&&(T=d(ve,T,xe),ge===null?de=ve:ge.sibling=ve,ge=ve);return je&&Nr(I,xe),de}for(ve=s(I,ve);xe<$.length;xe++)pt=ie(ve,I,xe,$[xe],J),pt!==null&&(e&&pt.alternate!==null&&ve.delete(pt.key===null?xe:pt.key),T=d(pt,T,xe),ge===null?de=pt:ge.sibling=pt,ge=pt);return e&&ve.forEach(function(Sr){return t(I,Sr)}),je&&Nr(I,xe),de}function ce(I,T,$,J){var de=Q($);if(typeof de!="function")throw Error(i(150));if($=de.call($),$==null)throw Error(i(151));for(var ge=de=null,ve=T,xe=T=0,pt=null,Te=$.next();ve!==null&&!Te.done;xe++,Te=$.next()){ve.index>xe?(pt=ve,ve=null):pt=ve.sibling;var Sr=K(I,ve,Te.value,J);if(Sr===null){ve===null&&(ve=pt);break}e&&ve&&Sr.alternate===null&&t(I,ve),T=d(Sr,T,xe),ge===null?de=Sr:ge.sibling=Sr,ge=Sr,ve=pt}if(Te.done)return r(I,ve),je&&Nr(I,xe),de;if(ve===null){for(;!Te.done;xe++,Te=$.next())Te=Y(I,Te.value,J),Te!==null&&(T=d(Te,T,xe),ge===null?de=Te:ge.sibling=Te,ge=Te);return je&&Nr(I,xe),de}for(ve=s(I,ve);!Te.done;xe++,Te=$.next())Te=ie(ve,I,xe,Te.value,J),Te!==null&&(e&&Te.alternate!==null&&ve.delete(Te.key===null?xe:Te.key),T=d(Te,T,xe),ge===null?de=Te:ge.sibling=Te,ge=Te);return e&&ve.forEach(function(jv){return t(I,jv)}),je&&Nr(I,xe),de}function Xe(I,T,$,J){if(typeof $=="object"&&$!==null&&$.type===x&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case k:e:{for(var de=$.key,ge=T;ge!==null;){if(ge.key===de){if(de=$.type,de===x){if(ge.tag===7){r(I,ge.sibling),T=u(ge,$.props.children),T.return=I,I=T;break e}}else if(ge.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===X&&ip(de)===ge.type){r(I,ge.sibling),T=u(ge,$.props),T.ref=xi(I,ge,$),T.return=I,I=T;break e}r(I,ge);break}else t(I,ge);ge=ge.sibling}$.type===x?(T=Wr($.props.children,I.mode,J,$.key),T.return=I,I=T):(J=ga($.type,$.key,$.props,null,I.mode,J),J.ref=xi(I,T,$),J.return=I,I=J)}return m(I);case B:e:{for(ge=$.key;T!==null;){if(T.key===ge)if(T.tag===4&&T.stateNode.containerInfo===$.containerInfo&&T.stateNode.implementation===$.implementation){r(I,T.sibling),T=u(T,$.children||[]),T.return=I,I=T;break e}else{r(I,T);break}else t(I,T);T=T.sibling}T=Lu($,I.mode,J),T.return=I,I=T}return m(I);case X:return ge=$._init,Xe(I,T,ge($._payload),J)}if(Ye($))return ue(I,T,$,J);if(Q($))return ce(I,T,$,J);Ks(I,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,T!==null&&T.tag===6?(r(I,T.sibling),T=u(T,$),T.return=I,I=T):(r(I,T),T=Au($,I.mode,J),T.return=I,I=T),m(I)):r(I,T)}return Xe}var ho=sp(!0),ap=sp(!1),Gs=dr(null),qs=null,go=null,Kl=null;function Gl(){Kl=go=qs=null}function ql(e){var t=Gs.current;De(Gs),e._currentValue=t}function Yl(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function vo(e,t){qs=e,Kl=go=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(_t=!0),e.firstContext=null)}function en(e){var t=e._currentValue;if(Kl!==e)if(e={context:e,memoizedValue:t,next:null},go===null){if(qs===null)throw Error(i(308));go=e,qs.dependencies={lanes:0,firstContext:e}}else go=go.next=e;return t}var zr=null;function Ql(e){zr===null?zr=[e]:zr.push(e)}function lp(e,t,r,s){var u=t.interleaved;return u===null?(r.next=r,Ql(t)):(r.next=u.next,u.next=r),t.interleaved=r,qn(e,s)}function qn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var mr=!1;function Xl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function up(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hr(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ee&2)!==0){var u=s.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),s.pending=t,qn(e,r)}return u=s.interleaved,u===null?(t.next=t,Ql(s)):(t.next=u.next,u.next=t),s.interleaved=t,qn(e,r)}function Ys(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,dl(e,r)}}function cp(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var u=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var m={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};d===null?u=d=m:d=d.next=m,r=r.next}while(r!==null);d===null?u=d=t:d=d.next=t}else u=d=t;r={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Qs(e,t,r,s){var u=e.updateQueue;mr=!1;var d=u.firstBaseUpdate,m=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var E=w,D=E.next;E.next=null,m===null?d=D:m.next=D,m=E;var G=e.alternate;G!==null&&(G=G.updateQueue,w=G.lastBaseUpdate,w!==m&&(w===null?G.firstBaseUpdate=D:w.next=D,G.lastBaseUpdate=E))}if(d!==null){var Y=u.baseState;m=0,G=D=E=null,w=d;do{var K=w.lane,ie=w.eventTime;if((s&K)===K){G!==null&&(G=G.next={eventTime:ie,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var ue=e,ce=w;switch(K=t,ie=r,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){Y=ue.call(ie,Y,K);break e}Y=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,K=typeof ue=="function"?ue.call(ie,Y,K):ue,K==null)break e;Y=Z({},Y,K);break e;case 2:mr=!0}}w.callback!==null&&w.lane!==0&&(e.flags|=64,K=u.effects,K===null?u.effects=[w]:K.push(w))}else ie={eventTime:ie,lane:K,tag:w.tag,payload:w.payload,callback:w.callback,next:null},G===null?(D=G=ie,E=Y):G=G.next=ie,m|=K;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;K=w,w=K.next,K.next=null,u.lastBaseUpdate=K,u.shared.pending=null}}while(!0);if(G===null&&(E=Y),u.baseState=E,u.firstBaseUpdate=D,u.lastBaseUpdate=G,t=u.shared.interleaved,t!==null){u=t;do m|=u.lane,u=u.next;while(u!==t)}else d===null&&(u.shared.lanes=0);Dr|=m,e.lanes=m,e.memoizedState=Y}}function dp(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],u=s.callback;if(u!==null){if(s.callback=null,s=r,typeof u!="function")throw Error(i(191,u));u.call(s)}}}var wi={},In=dr(wi),bi=dr(wi),Si=dr(wi);function Ar(e){if(e===wi)throw Error(i(174));return e}function Zl(e,t){switch(Ne(Si,t),Ne(bi,e),Ne(In,wi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xt(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xt(t,e)}De(In),Ne(In,t)}function yo(){De(In),De(bi),De(Si)}function pp(e){Ar(Si.current);var t=Ar(In.current),r=Xt(t,e.type);t!==r&&(Ne(bi,e),Ne(In,r))}function Jl(e){bi.current===e&&(De(In),De(bi))}var Fe=dr(0);function Xs(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var eu=[];function tu(){for(var e=0;e<eu.length;e++)eu[e]._workInProgressVersionPrimary=null;eu.length=0}var Zs=N.ReactCurrentDispatcher,nu=N.ReactCurrentBatchConfig,Lr=0,We=null,st=null,ct=null,Js=!1,ki=!1,Ci=0,av=0;function xt(){throw Error(i(321))}function ru(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!vn(e[r],t[r]))return!1;return!0}function ou(e,t,r,s,u,d){if(Lr=d,We=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zs.current=e===null||e.memoizedState===null?dv:pv,e=r(s,u),ki){d=0;do{if(ki=!1,Ci=0,25<=d)throw Error(i(301));d+=1,ct=st=null,t.updateQueue=null,Zs.current=fv,e=r(s,u)}while(ki)}if(Zs.current=na,t=st!==null&&st.next!==null,Lr=0,ct=st=We=null,Js=!1,t)throw Error(i(300));return e}function iu(){var e=Ci!==0;return Ci=0,e}function $n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?We.memoizedState=ct=e:ct=ct.next=e,ct}function tn(){if(st===null){var e=We.alternate;e=e!==null?e.memoizedState:null}else e=st.next;var t=ct===null?We.memoizedState:ct.next;if(t!==null)ct=t,st=e;else{if(e===null)throw Error(i(310));st=e,e={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},ct===null?We.memoizedState=ct=e:ct=ct.next=e}return ct}function Ei(e,t){return typeof t=="function"?t(e):t}function su(e){var t=tn(),r=t.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=e;var s=st,u=s.baseQueue,d=r.pending;if(d!==null){if(u!==null){var m=u.next;u.next=d.next,d.next=m}s.baseQueue=u=d,r.pending=null}if(u!==null){d=u.next,s=s.baseState;var w=m=null,E=null,D=d;do{var G=D.lane;if((Lr&G)===G)E!==null&&(E=E.next={lane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),s=D.hasEagerState?D.eagerState:e(s,D.action);else{var Y={lane:G,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null};E===null?(w=E=Y,m=s):E=E.next=Y,We.lanes|=G,Dr|=G}D=D.next}while(D!==null&&D!==d);E===null?m=s:E.next=w,vn(s,t.memoizedState)||(_t=!0),t.memoizedState=s,t.baseState=m,t.baseQueue=E,r.lastRenderedState=s}if(e=r.interleaved,e!==null){u=e;do d=u.lane,We.lanes|=d,Dr|=d,u=u.next;while(u!==e)}else u===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function au(e){var t=tn(),r=t.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=e;var s=r.dispatch,u=r.pending,d=t.memoizedState;if(u!==null){r.pending=null;var m=u=u.next;do d=e(d,m.action),m=m.next;while(m!==u);vn(d,t.memoizedState)||(_t=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),r.lastRenderedState=d}return[d,s]}function fp(){}function mp(e,t){var r=We,s=tn(),u=t(),d=!vn(s.memoizedState,u);if(d&&(s.memoizedState=u,_t=!0),s=s.queue,lu(vp.bind(null,r,s,e),[e]),s.getSnapshot!==t||d||ct!==null&&ct.memoizedState.tag&1){if(r.flags|=2048,Ti(9,gp.bind(null,r,s,u,t),void 0,null),dt===null)throw Error(i(349));(Lr&30)!==0||hp(r,t,u)}return u}function hp(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=We.updateQueue,t===null?(t={lastEffect:null,stores:null},We.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function gp(e,t,r,s){t.value=r,t.getSnapshot=s,yp(t)&&xp(e)}function vp(e,t,r){return r(function(){yp(t)&&xp(e)})}function yp(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!vn(e,r)}catch{return!0}}function xp(e){var t=qn(e,1);t!==null&&Sn(t,e,1,-1)}function wp(e){var t=$n();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ei,lastRenderedState:e},t.queue=e,e=e.dispatch=cv.bind(null,We,e),[t.memoizedState,e]}function Ti(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=We.updateQueue,t===null?(t={lastEffect:null,stores:null},We.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function bp(){return tn().memoizedState}function ea(e,t,r,s){var u=$n();We.flags|=e,u.memoizedState=Ti(1|t,r,void 0,s===void 0?null:s)}function ta(e,t,r,s){var u=tn();s=s===void 0?null:s;var d=void 0;if(st!==null){var m=st.memoizedState;if(d=m.destroy,s!==null&&ru(s,m.deps)){u.memoizedState=Ti(t,r,d,s);return}}We.flags|=e,u.memoizedState=Ti(1|t,r,d,s)}function Sp(e,t){return ea(8390656,8,e,t)}function lu(e,t){return ta(2048,8,e,t)}function kp(e,t){return ta(4,2,e,t)}function Cp(e,t){return ta(4,4,e,t)}function Ep(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tp(e,t,r){return r=r!=null?r.concat([e]):null,ta(4,4,Ep.bind(null,t,e),r)}function uu(){}function Pp(e,t){var r=tn();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&ru(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Rp(e,t){var r=tn();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&ru(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function _p(e,t,r){return(Lr&21)===0?(e.baseState&&(e.baseState=!1,_t=!0),e.memoizedState=r):(vn(r,t)||(r=id(),We.lanes|=r,Dr|=r,e.baseState=!0),t)}function lv(e,t){var r=Ie;Ie=r!==0&&4>r?r:4,e(!0);var s=nu.transition;nu.transition={};try{e(!1),t()}finally{Ie=r,nu.transition=s}}function Op(){return tn().memoizedState}function uv(e,t,r){var s=xr(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Mp(e))Ip(t,r);else if(r=lp(e,t,r,s),r!==null){var u=Et();Sn(r,e,s,u),$p(r,t,s)}}function cv(e,t,r){var s=xr(e),u={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Mp(e))Ip(t,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var m=t.lastRenderedState,w=d(m,r);if(u.hasEagerState=!0,u.eagerState=w,vn(w,m)){var E=t.interleaved;E===null?(u.next=u,Ql(t)):(u.next=E.next,E.next=u),t.interleaved=u;return}}catch{}finally{}r=lp(e,t,u,s),r!==null&&(u=Et(),Sn(r,e,s,u),$p(r,t,s))}}function Mp(e){var t=e.alternate;return e===We||t!==null&&t===We}function Ip(e,t){ki=Js=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function $p(e,t,r){if((r&4194240)!==0){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,dl(e,r)}}var na={readContext:en,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},dv={readContext:en,useCallback:function(e,t){return $n().memoizedState=[e,t===void 0?null:t],e},useContext:en,useEffect:Sp,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ea(4194308,4,Ep.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ea(4194308,4,e,t)},useInsertionEffect:function(e,t){return ea(4,2,e,t)},useMemo:function(e,t){var r=$n();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=$n();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=uv.bind(null,We,e),[s.memoizedState,e]},useRef:function(e){var t=$n();return e={current:e},t.memoizedState=e},useState:wp,useDebugValue:uu,useDeferredValue:function(e){return $n().memoizedState=e},useTransition:function(){var e=wp(!1),t=e[0];return e=lv.bind(null,e[1]),$n().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=We,u=$n();if(je){if(r===void 0)throw Error(i(407));r=r()}else{if(r=t(),dt===null)throw Error(i(349));(Lr&30)!==0||hp(s,t,r)}u.memoizedState=r;var d={value:r,getSnapshot:t};return u.queue=d,Sp(vp.bind(null,s,d,e),[e]),s.flags|=2048,Ti(9,gp.bind(null,s,d,r,t),void 0,null),r},useId:function(){var e=$n(),t=dt.identifierPrefix;if(je){var r=Gn,s=Kn;r=(s&~(1<<32-gn(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Ci++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=av++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pv={readContext:en,useCallback:Pp,useContext:en,useEffect:lu,useImperativeHandle:Tp,useInsertionEffect:kp,useLayoutEffect:Cp,useMemo:Rp,useReducer:su,useRef:bp,useState:function(){return su(Ei)},useDebugValue:uu,useDeferredValue:function(e){var t=tn();return _p(t,st.memoizedState,e)},useTransition:function(){var e=su(Ei)[0],t=tn().memoizedState;return[e,t]},useMutableSource:fp,useSyncExternalStore:mp,useId:Op,unstable_isNewReconciler:!1},fv={readContext:en,useCallback:Pp,useContext:en,useEffect:lu,useImperativeHandle:Tp,useInsertionEffect:kp,useLayoutEffect:Cp,useMemo:Rp,useReducer:au,useRef:bp,useState:function(){return au(Ei)},useDebugValue:uu,useDeferredValue:function(e){var t=tn();return st===null?t.memoizedState=e:_p(t,st.memoizedState,e)},useTransition:function(){var e=au(Ei)[0],t=tn().memoizedState;return[e,t]},useMutableSource:fp,useSyncExternalStore:mp,useId:Op,unstable_isNewReconciler:!1};function xn(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function cu(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:Z({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ra={isMounted:function(e){return(e=e._reactInternals)?_n(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=Et(),u=xr(e),d=Yn(s,u);d.payload=t,r!=null&&(d.callback=r),t=hr(e,d,u),t!==null&&(Sn(t,e,u,s),Ys(t,e,u))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=Et(),u=xr(e),d=Yn(s,u);d.tag=1,d.payload=t,r!=null&&(d.callback=r),t=hr(e,d,u),t!==null&&(Sn(t,e,u,s),Ys(t,e,u))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Et(),s=xr(e),u=Yn(r,s);u.tag=2,t!=null&&(u.callback=t),t=hr(e,u,s),t!==null&&(Sn(t,e,s,r),Ys(t,e,s))}};function Np(e,t,r,s,u,d,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,d,m):t.prototype&&t.prototype.isPureReactComponent?!pi(r,s)||!pi(u,d):!0}function zp(e,t,r){var s=!1,u=pr,d=t.contextType;return typeof d=="object"&&d!==null?d=en(d):(u=Rt(t)?Ir:yt.current,s=t.contextTypes,d=(s=s!=null)?co(e,u):pr),t=new t(r,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ra,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=d),t}function Ap(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&ra.enqueueReplaceState(t,t.state,null)}function du(e,t,r,s){var u=e.stateNode;u.props=r,u.state=e.memoizedState,u.refs={},Xl(e);var d=t.contextType;typeof d=="object"&&d!==null?u.context=en(d):(d=Rt(t)?Ir:yt.current,u.context=co(e,d)),u.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(cu(e,t,d,r),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(t=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),t!==u.state&&ra.enqueueReplaceState(u,u.state,null),Qs(e,r,u,s),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function xo(e,t){try{var r="",s=t;do r+=pe(s),s=s.return;while(s);var u=r}catch(d){u=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:u,digest:null}}function pu(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function fu(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var mv=typeof WeakMap=="function"?WeakMap:Map;function Lp(e,t,r){r=Yn(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){ca||(ca=!0,Ru=s),fu(e,t)},r}function Dp(e,t,r){r=Yn(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var u=t.value;r.payload=function(){return s(u)},r.callback=function(){fu(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(r.callback=function(){fu(e,t),typeof s!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var m=t.stack;this.componentDidCatch(t.value,{componentStack:m!==null?m:""})}),r}function jp(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new mv;var u=new Set;s.set(t,u)}else u=s.get(t),u===void 0&&(u=new Set,s.set(t,u));u.has(r)||(u.add(r),e=Rv.bind(null,e,t,r),t.then(e,e))}function Bp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fp(e,t,r,s,u){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Yn(-1,1),t.tag=2,hr(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var hv=N.ReactCurrentOwner,_t=!1;function Ct(e,t,r,s){t.child=e===null?ap(t,null,r,s):ho(t,e.child,r,s)}function Wp(e,t,r,s,u){r=r.render;var d=t.ref;return vo(t,u),s=ou(e,t,r,s,d,u),r=iu(),e!==null&&!_t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,Qn(e,t,u)):(je&&r&&Fl(t),t.flags|=1,Ct(e,t,s,u),t.child)}function Up(e,t,r,s,u){if(e===null){var d=r.type;return typeof d=="function"&&!zu(d)&&d.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=d,Hp(e,t,d,s,u)):(e=ga(r.type,null,s,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,(e.lanes&u)===0){var m=d.memoizedProps;if(r=r.compare,r=r!==null?r:pi,r(m,s)&&e.ref===t.ref)return Qn(e,t,u)}return t.flags|=1,e=br(d,s),e.ref=t.ref,e.return=t,t.child=e}function Hp(e,t,r,s,u){if(e!==null){var d=e.memoizedProps;if(pi(d,s)&&e.ref===t.ref)if(_t=!1,t.pendingProps=s=d,(e.lanes&u)!==0)(e.flags&131072)!==0&&(_t=!0);else return t.lanes=e.lanes,Qn(e,t,u)}return mu(e,t,r,s,u)}function Vp(e,t,r){var s=t.pendingProps,u=s.children,d=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(bo,Wt),Wt|=r;else{if((r&1073741824)===0)return e=d!==null?d.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ne(bo,Wt),Wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=d!==null?d.baseLanes:r,Ne(bo,Wt),Wt|=s}else d!==null?(s=d.baseLanes|r,t.memoizedState=null):s=r,Ne(bo,Wt),Wt|=s;return Ct(e,t,u,r),t.child}function Kp(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function mu(e,t,r,s,u){var d=Rt(r)?Ir:yt.current;return d=co(t,d),vo(t,u),r=ou(e,t,r,s,d,u),s=iu(),e!==null&&!_t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,Qn(e,t,u)):(je&&s&&Fl(t),t.flags|=1,Ct(e,t,r,u),t.child)}function Gp(e,t,r,s,u){if(Rt(r)){var d=!0;Fs(t)}else d=!1;if(vo(t,u),t.stateNode===null)ia(e,t),zp(t,r,s),du(t,r,s,u),s=!0;else if(e===null){var m=t.stateNode,w=t.memoizedProps;m.props=w;var E=m.context,D=r.contextType;typeof D=="object"&&D!==null?D=en(D):(D=Rt(r)?Ir:yt.current,D=co(t,D));var G=r.getDerivedStateFromProps,Y=typeof G=="function"||typeof m.getSnapshotBeforeUpdate=="function";Y||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==s||E!==D)&&Ap(t,m,s,D),mr=!1;var K=t.memoizedState;m.state=K,Qs(t,s,m,u),E=t.memoizedState,w!==s||K!==E||Pt.current||mr?(typeof G=="function"&&(cu(t,r,G,s),E=t.memoizedState),(w=mr||Np(t,r,w,s,K,E,D))?(Y||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(t.flags|=4194308)):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=E),m.props=s,m.state=E,m.context=D,s=w):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{m=t.stateNode,up(e,t),w=t.memoizedProps,D=t.type===t.elementType?w:xn(t.type,w),m.props=D,Y=t.pendingProps,K=m.context,E=r.contextType,typeof E=="object"&&E!==null?E=en(E):(E=Rt(r)?Ir:yt.current,E=co(t,E));var ie=r.getDerivedStateFromProps;(G=typeof ie=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==Y||K!==E)&&Ap(t,m,s,E),mr=!1,K=t.memoizedState,m.state=K,Qs(t,s,m,u);var ue=t.memoizedState;w!==Y||K!==ue||Pt.current||mr?(typeof ie=="function"&&(cu(t,r,ie,s),ue=t.memoizedState),(D=mr||Np(t,r,D,s,K,ue,E)||!1)?(G||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(s,ue,E),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(s,ue,E)),typeof m.componentDidUpdate=="function"&&(t.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof m.componentDidUpdate!="function"||w===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=ue),m.props=s,m.state=ue,m.context=E,s=D):(typeof m.componentDidUpdate!="function"||w===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),s=!1)}return hu(e,t,r,s,d,u)}function hu(e,t,r,s,u,d){Kp(e,t);var m=(t.flags&128)!==0;if(!s&&!m)return u&&Zd(t,r,!1),Qn(e,t,d);s=t.stateNode,hv.current=t;var w=m&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&m?(t.child=ho(t,e.child,null,d),t.child=ho(t,null,w,d)):Ct(e,t,w,d),t.memoizedState=s.state,u&&Zd(t,r,!0),t.child}function qp(e){var t=e.stateNode;t.pendingContext?Qd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qd(e,t.context,!1),Zl(e,t.containerInfo)}function Yp(e,t,r,s,u){return mo(),Vl(u),t.flags|=256,Ct(e,t,r,s),t.child}var gu={dehydrated:null,treeContext:null,retryLane:0};function vu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qp(e,t,r){var s=t.pendingProps,u=Fe.current,d=!1,m=(t.flags&128)!==0,w;if((w=m)||(w=e!==null&&e.memoizedState===null?!1:(u&2)!==0),w?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),Ne(Fe,u&1),e===null)return Hl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(m=s.children,e=s.fallback,d?(s=t.mode,d=t.child,m={mode:"hidden",children:m},(s&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=m):d=va(m,s,0,null),e=Wr(e,s,r,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=vu(r),t.memoizedState=gu,e):yu(t,m));if(u=e.memoizedState,u!==null&&(w=u.dehydrated,w!==null))return gv(e,t,m,s,w,u,r);if(d){d=s.fallback,m=t.mode,u=e.child,w=u.sibling;var E={mode:"hidden",children:s.children};return(m&1)===0&&t.child!==u?(s=t.child,s.childLanes=0,s.pendingProps=E,t.deletions=null):(s=br(u,E),s.subtreeFlags=u.subtreeFlags&14680064),w!==null?d=br(w,d):(d=Wr(d,m,r,null),d.flags|=2),d.return=t,s.return=t,s.sibling=d,t.child=s,s=d,d=t.child,m=e.child.memoizedState,m=m===null?vu(r):{baseLanes:m.baseLanes|r,cachePool:null,transitions:m.transitions},d.memoizedState=m,d.childLanes=e.childLanes&~r,t.memoizedState=gu,s}return d=e.child,e=d.sibling,s=br(d,{mode:"visible",children:s.children}),(t.mode&1)===0&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function yu(e,t){return t=va({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oa(e,t,r,s){return s!==null&&Vl(s),ho(t,e.child,null,r),e=yu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gv(e,t,r,s,u,d,m){if(r)return t.flags&256?(t.flags&=-257,s=pu(Error(i(422))),oa(e,t,m,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=s.fallback,u=t.mode,s=va({mode:"visible",children:s.children},u,0,null),d=Wr(d,u,m,null),d.flags|=2,s.return=t,d.return=t,s.sibling=d,t.child=s,(t.mode&1)!==0&&ho(t,e.child,null,m),t.child.memoizedState=vu(m),t.memoizedState=gu,d);if((t.mode&1)===0)return oa(e,t,m,null);if(u.data==="$!"){if(s=u.nextSibling&&u.nextSibling.dataset,s)var w=s.dgst;return s=w,d=Error(i(419)),s=pu(d,s,void 0),oa(e,t,m,s)}if(w=(m&e.childLanes)!==0,_t||w){if(s=dt,s!==null){switch(m&-m){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(s.suspendedLanes|m))!==0?0:u,u!==0&&u!==d.retryLane&&(d.retryLane=u,qn(e,u),Sn(s,e,u,-1))}return Nu(),s=pu(Error(i(421))),oa(e,t,m,s)}return u.data==="$?"?(t.flags|=128,t.child=e.child,t=_v.bind(null,e),u._reactRetry=t,null):(e=d.treeContext,Ft=cr(u.nextSibling),Bt=t,je=!0,yn=null,e!==null&&(Zt[Jt++]=Kn,Zt[Jt++]=Gn,Zt[Jt++]=$r,Kn=e.id,Gn=e.overflow,$r=t),t=yu(t,s.children),t.flags|=4096,t)}function Xp(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Yl(e.return,t,r)}function xu(e,t,r,s,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:u}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=r,d.tailMode=u)}function Zp(e,t,r){var s=t.pendingProps,u=s.revealOrder,d=s.tail;if(Ct(e,t,s.children,r),s=Fe.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xp(e,r,t);else if(e.tag===19)Xp(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Ne(Fe,s),(t.mode&1)===0)t.memoizedState=null;else switch(u){case"forwards":for(r=t.child,u=null;r!==null;)e=r.alternate,e!==null&&Xs(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=t.child,t.child=null):(u=r.sibling,r.sibling=null),xu(t,!1,u,r,d);break;case"backwards":for(r=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&Xs(e)===null){t.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}xu(t,!0,r,null,d);break;case"together":xu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ia(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Dr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,r=br(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=br(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function vv(e,t,r){switch(t.tag){case 3:qp(t),mo();break;case 5:pp(t);break;case 1:Rt(t.type)&&Fs(t);break;case 4:Zl(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,u=t.memoizedProps.value;Ne(Gs,s._currentValue),s._currentValue=u;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Ne(Fe,Fe.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Qp(e,t,r):(Ne(Fe,Fe.current&1),e=Qn(e,t,r),e!==null?e.sibling:null);Ne(Fe,Fe.current&1);break;case 19:if(s=(r&t.childLanes)!==0,(e.flags&128)!==0){if(s)return Zp(e,t,r);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ne(Fe,Fe.current),s)break;return null;case 22:case 23:return t.lanes=0,Vp(e,t,r)}return Qn(e,t,r)}var Jp,wu,ef,tf;Jp=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},wu=function(){},ef=function(e,t,r,s){var u=e.memoizedProps;if(u!==s){e=t.stateNode,Ar(In.current);var d=null;switch(r){case"input":u=qe(e,u),s=qe(e,s),d=[];break;case"select":u=Z({},u,{value:void 0}),s=Z({},s,{value:void 0}),d=[];break;case"textarea":u=Lt(e,u),s=Lt(e,s),d=[];break;default:typeof u.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ds)}nr(r,s);var m;r=null;for(D in u)if(!s.hasOwnProperty(D)&&u.hasOwnProperty(D)&&u[D]!=null)if(D==="style"){var w=u[D];for(m in w)w.hasOwnProperty(m)&&(r||(r={}),r[m]="")}else D!=="dangerouslySetInnerHTML"&&D!=="children"&&D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&D!=="autoFocus"&&(l.hasOwnProperty(D)?d||(d=[]):(d=d||[]).push(D,null));for(D in s){var E=s[D];if(w=u!=null?u[D]:void 0,s.hasOwnProperty(D)&&E!==w&&(E!=null||w!=null))if(D==="style")if(w){for(m in w)!w.hasOwnProperty(m)||E&&E.hasOwnProperty(m)||(r||(r={}),r[m]="");for(m in E)E.hasOwnProperty(m)&&w[m]!==E[m]&&(r||(r={}),r[m]=E[m])}else r||(d||(d=[]),d.push(D,r)),r=E;else D==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,w=w?w.__html:void 0,E!=null&&w!==E&&(d=d||[]).push(D,E)):D==="children"?typeof E!="string"&&typeof E!="number"||(d=d||[]).push(D,""+E):D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&(l.hasOwnProperty(D)?(E!=null&&D==="onScroll"&&Le("scroll",e),d||w===E||(d=[])):(d=d||[]).push(D,E))}r&&(d=d||[]).push("style",r);var D=d;(t.updateQueue=D)&&(t.flags|=4)}},tf=function(e,t,r,s){r!==s&&(t.flags|=4)};function Pi(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function wt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,s|=u.subtreeFlags&14680064,s|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function yv(e,t,r){var s=t.pendingProps;switch(Wl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(t),null;case 1:return Rt(t.type)&&Bs(),wt(t),null;case 3:return s=t.stateNode,yo(),De(Pt),De(yt),tu(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Vs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,yn!==null&&(Mu(yn),yn=null))),wu(e,t),wt(t),null;case 5:Jl(t);var u=Ar(Si.current);if(r=t.type,e!==null&&t.stateNode!=null)ef(e,t,r,s,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(i(166));return wt(t),null}if(e=Ar(In.current),Vs(t)){s=t.stateNode,r=t.type;var d=t.memoizedProps;switch(s[Mn]=t,s[vi]=d,e=(t.mode&1)!==0,r){case"dialog":Le("cancel",s),Le("close",s);break;case"iframe":case"object":case"embed":Le("load",s);break;case"video":case"audio":for(u=0;u<mi.length;u++)Le(mi[u],s);break;case"source":Le("error",s);break;case"img":case"image":case"link":Le("error",s),Le("load",s);break;case"details":Le("toggle",s);break;case"input":nt(s,d),Le("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!d.multiple},Le("invalid",s);break;case"textarea":pn(s,d),Le("invalid",s)}nr(r,d),u=null;for(var m in d)if(d.hasOwnProperty(m)){var w=d[m];m==="children"?typeof w=="string"?s.textContent!==w&&(d.suppressHydrationWarning!==!0&&Ls(s.textContent,w,e),u=["children",w]):typeof w=="number"&&s.textContent!==""+w&&(d.suppressHydrationWarning!==!0&&Ls(s.textContent,w,e),u=["children",""+w]):l.hasOwnProperty(m)&&w!=null&&m==="onScroll"&&Le("scroll",s)}switch(r){case"input":He(s),Yt(s,d,!0);break;case"textarea":He(s),kt(s);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(s.onclick=Ds)}s=u,t.updateQueue=s,s!==null&&(t.flags|=4)}else{m=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qt(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=m.createElement(r,{is:s.is}):(e=m.createElement(r),r==="select"&&(m=e,s.multiple?m.multiple=!0:s.size&&(m.size=s.size))):e=m.createElementNS(e,r),e[Mn]=t,e[vi]=s,Jp(e,t,!1,!1),t.stateNode=e;e:{switch(m=Rr(r,s),r){case"dialog":Le("cancel",e),Le("close",e),u=s;break;case"iframe":case"object":case"embed":Le("load",e),u=s;break;case"video":case"audio":for(u=0;u<mi.length;u++)Le(mi[u],e);u=s;break;case"source":Le("error",e),u=s;break;case"img":case"image":case"link":Le("error",e),Le("load",e),u=s;break;case"details":Le("toggle",e),u=s;break;case"input":nt(e,s),u=qe(e,s),Le("invalid",e);break;case"option":u=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},u=Z({},s,{value:void 0}),Le("invalid",e);break;case"textarea":pn(e,s),u=Lt(e,s),Le("invalid",e);break;default:u=s}nr(r,u),w=u;for(d in w)if(w.hasOwnProperty(d)){var E=w[d];d==="style"?Go(e,E):d==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&we(e,E)):d==="children"?typeof E=="string"?(r!=="textarea"||E!=="")&&ut(e,E):typeof E=="number"&&ut(e,""+E):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(l.hasOwnProperty(d)?E!=null&&d==="onScroll"&&Le("scroll",e):E!=null&&A(e,d,E,m))}switch(r){case"input":He(e),Yt(e,s,!1);break;case"textarea":He(e),kt(e);break;case"option":s.value!=null&&e.setAttribute("value",""+he(s.value));break;case"select":e.multiple=!!s.multiple,d=s.value,d!=null?ft(e,!!s.multiple,d,!1):s.defaultValue!=null&&ft(e,!!s.multiple,s.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Ds)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return wt(t),null;case 6:if(e&&t.stateNode!=null)tf(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(i(166));if(r=Ar(Si.current),Ar(In.current),Vs(t)){if(s=t.stateNode,r=t.memoizedProps,s[Mn]=t,(d=s.nodeValue!==r)&&(e=Bt,e!==null))switch(e.tag){case 3:Ls(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ls(s.nodeValue,r,(e.mode&1)!==0)}d&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[Mn]=t,t.stateNode=s}return wt(t),null;case 13:if(De(Fe),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&Ft!==null&&(t.mode&1)!==0&&(t.flags&128)===0)op(),mo(),t.flags|=98560,d=!1;else if(d=Vs(t),s!==null&&s.dehydrated!==null){if(e===null){if(!d)throw Error(i(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[Mn]=t}else mo(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;wt(t),d=!1}else yn!==null&&(Mu(yn),yn=null),d=!0;if(!d)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Fe.current&1)!==0?at===0&&(at=3):Nu())),t.updateQueue!==null&&(t.flags|=4),wt(t),null);case 4:return yo(),wu(e,t),e===null&&hi(t.stateNode.containerInfo),wt(t),null;case 10:return ql(t.type._context),wt(t),null;case 17:return Rt(t.type)&&Bs(),wt(t),null;case 19:if(De(Fe),d=t.memoizedState,d===null)return wt(t),null;if(s=(t.flags&128)!==0,m=d.rendering,m===null)if(s)Pi(d,!1);else{if(at!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(m=Xs(e),m!==null){for(t.flags|=128,Pi(d,!1),s=m.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)d=r,e=s,d.flags&=14680066,m=d.alternate,m===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=m.childLanes,d.lanes=m.lanes,d.child=m.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=m.memoizedProps,d.memoizedState=m.memoizedState,d.updateQueue=m.updateQueue,d.type=m.type,e=m.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ne(Fe,Fe.current&1|2),t.child}e=e.sibling}d.tail!==null&&Qe()>So&&(t.flags|=128,s=!0,Pi(d,!1),t.lanes=4194304)}else{if(!s)if(e=Xs(m),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Pi(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!je)return wt(t),null}else 2*Qe()-d.renderingStartTime>So&&r!==1073741824&&(t.flags|=128,s=!0,Pi(d,!1),t.lanes=4194304);d.isBackwards?(m.sibling=t.child,t.child=m):(r=d.last,r!==null?r.sibling=m:t.child=m,d.last=m)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=Qe(),t.sibling=null,r=Fe.current,Ne(Fe,s?r&1|2:r&1),t):(wt(t),null);case 22:case 23:return $u(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&(t.mode&1)!==0?(Wt&1073741824)!==0&&(wt(t),t.subtreeFlags&6&&(t.flags|=8192)):wt(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function xv(e,t){switch(Wl(t),t.tag){case 1:return Rt(t.type)&&Bs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yo(),De(Pt),De(yt),tu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Jl(t),null;case 13:if(De(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));mo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return De(Fe),null;case 4:return yo(),null;case 10:return ql(t.type._context),null;case 22:case 23:return $u(),null;case 24:return null;default:return null}}var sa=!1,bt=!1,wv=typeof WeakSet=="function"?WeakSet:Set,se=null;function wo(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){Ve(e,t,s)}else r.current=null}function bu(e,t,r){try{r()}catch(s){Ve(e,t,s)}}var nf=!1;function bv(e,t){if($l=Ts,e=Nd(),El(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var u=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var m=0,w=-1,E=-1,D=0,G=0,Y=e,K=null;t:for(;;){for(var ie;Y!==r||u!==0&&Y.nodeType!==3||(w=m+u),Y!==d||s!==0&&Y.nodeType!==3||(E=m+s),Y.nodeType===3&&(m+=Y.nodeValue.length),(ie=Y.firstChild)!==null;)K=Y,Y=ie;for(;;){if(Y===e)break t;if(K===r&&++D===u&&(w=m),K===d&&++G===s&&(E=m),(ie=Y.nextSibling)!==null)break;Y=K,K=Y.parentNode}Y=ie}r=w===-1||E===-1?null:{start:w,end:E}}else r=null}r=r||{start:0,end:0}}else r=null;for(Nl={focusedElem:e,selectionRange:r},Ts=!1,se=t;se!==null;)if(t=se,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,se=e;else for(;se!==null;){t=se;try{var ue=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,Xe=ue.memoizedState,I=t.stateNode,T=I.getSnapshotBeforeUpdate(t.elementType===t.type?ce:xn(t.type,ce),Xe);I.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var $=t.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(J){Ve(t,t.return,J)}if(e=t.sibling,e!==null){e.return=t.return,se=e;break}se=t.return}return ue=nf,nf=!1,ue}function Ri(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var u=s=s.next;do{if((u.tag&e)===e){var d=u.destroy;u.destroy=void 0,d!==void 0&&bu(t,r,d)}u=u.next}while(u!==s)}}function aa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function Su(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function rf(e){var t=e.alternate;t!==null&&(e.alternate=null,rf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mn],delete t[vi],delete t[Dl],delete t[rv],delete t[ov])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function of(e){return e.tag===5||e.tag===3||e.tag===4}function sf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||of(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ku(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ds));else if(s!==4&&(e=e.child,e!==null))for(ku(e,t,r),e=e.sibling;e!==null;)ku(e,t,r),e=e.sibling}function Cu(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Cu(e,t,r),e=e.sibling;e!==null;)Cu(e,t,r),e=e.sibling}var mt=null,wn=!1;function gr(e,t,r){for(r=r.child;r!==null;)af(e,t,r),r=r.sibling}function af(e,t,r){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(ws,r)}catch{}switch(r.tag){case 5:bt||wo(r,t);case 6:var s=mt,u=wn;mt=null,gr(e,t,r),mt=s,wn=u,mt!==null&&(wn?(e=mt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):mt.removeChild(r.stateNode));break;case 18:mt!==null&&(wn?(e=mt,r=r.stateNode,e.nodeType===8?Ll(e.parentNode,r):e.nodeType===1&&Ll(e,r),si(e)):Ll(mt,r.stateNode));break;case 4:s=mt,u=wn,mt=r.stateNode.containerInfo,wn=!0,gr(e,t,r),mt=s,wn=u;break;case 0:case 11:case 14:case 15:if(!bt&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){u=s=s.next;do{var d=u,m=d.destroy;d=d.tag,m!==void 0&&((d&2)!==0||(d&4)!==0)&&bu(r,t,m),u=u.next}while(u!==s)}gr(e,t,r);break;case 1:if(!bt&&(wo(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(w){Ve(r,t,w)}gr(e,t,r);break;case 21:gr(e,t,r);break;case 22:r.mode&1?(bt=(s=bt)||r.memoizedState!==null,gr(e,t,r),bt=s):gr(e,t,r);break;default:gr(e,t,r)}}function lf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new wv),t.forEach(function(s){var u=Ov.bind(null,e,s);r.has(s)||(r.add(s),s.then(u,u))})}}function bn(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var u=r[s];try{var d=e,m=t,w=m;e:for(;w!==null;){switch(w.tag){case 5:mt=w.stateNode,wn=!1;break e;case 3:mt=w.stateNode.containerInfo,wn=!0;break e;case 4:mt=w.stateNode.containerInfo,wn=!0;break e}w=w.return}if(mt===null)throw Error(i(160));af(d,m,u),mt=null,wn=!1;var E=u.alternate;E!==null&&(E.return=null),u.return=null}catch(D){Ve(u,t,D)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)uf(t,e),t=t.sibling}function uf(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bn(t,e),Nn(e),s&4){try{Ri(3,e,e.return),aa(3,e)}catch(ce){Ve(e,e.return,ce)}try{Ri(5,e,e.return)}catch(ce){Ve(e,e.return,ce)}}break;case 1:bn(t,e),Nn(e),s&512&&r!==null&&wo(r,r.return);break;case 5:if(bn(t,e),Nn(e),s&512&&r!==null&&wo(r,r.return),e.flags&32){var u=e.stateNode;try{ut(u,"")}catch(ce){Ve(e,e.return,ce)}}if(s&4&&(u=e.stateNode,u!=null)){var d=e.memoizedProps,m=r!==null?r.memoizedProps:d,w=e.type,E=e.updateQueue;if(e.updateQueue=null,E!==null)try{w==="input"&&d.type==="radio"&&d.name!=null&&Gt(u,d),Rr(w,m);var D=Rr(w,d);for(m=0;m<E.length;m+=2){var G=E[m],Y=E[m+1];G==="style"?Go(u,Y):G==="dangerouslySetInnerHTML"?we(u,Y):G==="children"?ut(u,Y):A(u,G,Y,D)}switch(w){case"input":qt(u,d);break;case"textarea":Tt(u,d);break;case"select":var K=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!d.multiple;var ie=d.value;ie!=null?ft(u,!!d.multiple,ie,!1):K!==!!d.multiple&&(d.defaultValue!=null?ft(u,!!d.multiple,d.defaultValue,!0):ft(u,!!d.multiple,d.multiple?[]:"",!1))}u[vi]=d}catch(ce){Ve(e,e.return,ce)}}break;case 6:if(bn(t,e),Nn(e),s&4){if(e.stateNode===null)throw Error(i(162));u=e.stateNode,d=e.memoizedProps;try{u.nodeValue=d}catch(ce){Ve(e,e.return,ce)}}break;case 3:if(bn(t,e),Nn(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{si(t.containerInfo)}catch(ce){Ve(e,e.return,ce)}break;case 4:bn(t,e),Nn(e);break;case 13:bn(t,e),Nn(e),u=e.child,u.flags&8192&&(d=u.memoizedState!==null,u.stateNode.isHidden=d,!d||u.alternate!==null&&u.alternate.memoizedState!==null||(Pu=Qe())),s&4&&lf(e);break;case 22:if(G=r!==null&&r.memoizedState!==null,e.mode&1?(bt=(D=bt)||G,bn(t,e),bt=D):bn(t,e),Nn(e),s&8192){if(D=e.memoizedState!==null,(e.stateNode.isHidden=D)&&!G&&(e.mode&1)!==0)for(se=e,G=e.child;G!==null;){for(Y=se=G;se!==null;){switch(K=se,ie=K.child,K.tag){case 0:case 11:case 14:case 15:Ri(4,K,K.return);break;case 1:wo(K,K.return);var ue=K.stateNode;if(typeof ue.componentWillUnmount=="function"){s=K,r=K.return;try{t=s,ue.props=t.memoizedProps,ue.state=t.memoizedState,ue.componentWillUnmount()}catch(ce){Ve(s,r,ce)}}break;case 5:wo(K,K.return);break;case 22:if(K.memoizedState!==null){pf(Y);continue}}ie!==null?(ie.return=K,se=ie):pf(Y)}G=G.sibling}e:for(G=null,Y=e;;){if(Y.tag===5){if(G===null){G=Y;try{u=Y.stateNode,D?(d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(w=Y.stateNode,E=Y.memoizedProps.style,m=E!=null&&E.hasOwnProperty("display")?E.display:null,w.style.display=tr("display",m))}catch(ce){Ve(e,e.return,ce)}}}else if(Y.tag===6){if(G===null)try{Y.stateNode.nodeValue=D?"":Y.memoizedProps}catch(ce){Ve(e,e.return,ce)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===e)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===e)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===e)break e;G===Y&&(G=null),Y=Y.return}G===Y&&(G=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:bn(t,e),Nn(e),s&4&&lf(e);break;case 21:break;default:bn(t,e),Nn(e)}}function Nn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(of(r)){var s=r;break e}r=r.return}throw Error(i(160))}switch(s.tag){case 5:var u=s.stateNode;s.flags&32&&(ut(u,""),s.flags&=-33);var d=sf(e);Cu(e,d,u);break;case 3:case 4:var m=s.stateNode.containerInfo,w=sf(e);ku(e,w,m);break;default:throw Error(i(161))}}catch(E){Ve(e,e.return,E)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sv(e,t,r){se=e,cf(e)}function cf(e,t,r){for(var s=(e.mode&1)!==0;se!==null;){var u=se,d=u.child;if(u.tag===22&&s){var m=u.memoizedState!==null||sa;if(!m){var w=u.alternate,E=w!==null&&w.memoizedState!==null||bt;w=sa;var D=bt;if(sa=m,(bt=E)&&!D)for(se=u;se!==null;)m=se,E=m.child,m.tag===22&&m.memoizedState!==null?ff(u):E!==null?(E.return=m,se=E):ff(u);for(;d!==null;)se=d,cf(d),d=d.sibling;se=u,sa=w,bt=D}df(e)}else(u.subtreeFlags&8772)!==0&&d!==null?(d.return=u,se=d):df(e)}}function df(e){for(;se!==null;){var t=se;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:bt||aa(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!bt)if(r===null)s.componentDidMount();else{var u=t.elementType===t.type?r.memoizedProps:xn(t.type,r.memoizedProps);s.componentDidUpdate(u,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&dp(t,d,s);break;case 3:var m=t.updateQueue;if(m!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}dp(t,m,r)}break;case 5:var w=t.stateNode;if(r===null&&t.flags&4){r=w;var E=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&r.focus();break;case"img":E.src&&(r.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var D=t.alternate;if(D!==null){var G=D.memoizedState;if(G!==null){var Y=G.dehydrated;Y!==null&&si(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}bt||t.flags&512&&Su(t)}catch(K){Ve(t,t.return,K)}}if(t===e){se=null;break}if(r=t.sibling,r!==null){r.return=t.return,se=r;break}se=t.return}}function pf(e){for(;se!==null;){var t=se;if(t===e){se=null;break}var r=t.sibling;if(r!==null){r.return=t.return,se=r;break}se=t.return}}function ff(e){for(;se!==null;){var t=se;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{aa(4,t)}catch(E){Ve(t,r,E)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var u=t.return;try{s.componentDidMount()}catch(E){Ve(t,u,E)}}var d=t.return;try{Su(t)}catch(E){Ve(t,d,E)}break;case 5:var m=t.return;try{Su(t)}catch(E){Ve(t,m,E)}}}catch(E){Ve(t,t.return,E)}if(t===e){se=null;break}var w=t.sibling;if(w!==null){w.return=t.return,se=w;break}se=t.return}}var kv=Math.ceil,la=N.ReactCurrentDispatcher,Eu=N.ReactCurrentOwner,nn=N.ReactCurrentBatchConfig,Ee=0,dt=null,rt=null,ht=0,Wt=0,bo=dr(0),at=0,_i=null,Dr=0,ua=0,Tu=0,Oi=null,Ot=null,Pu=0,So=1/0,Xn=null,ca=!1,Ru=null,vr=null,da=!1,yr=null,pa=0,Mi=0,_u=null,fa=-1,ma=0;function Et(){return(Ee&6)!==0?Qe():fa!==-1?fa:fa=Qe()}function xr(e){return(e.mode&1)===0?1:(Ee&2)!==0&&ht!==0?ht&-ht:sv.transition!==null?(ma===0&&(ma=id()),ma):(e=Ie,e!==0||(e=window.event,e=e===void 0?16:md(e.type)),e)}function Sn(e,t,r,s){if(50<Mi)throw Mi=0,_u=null,Error(i(185));ti(e,r,s),((Ee&2)===0||e!==dt)&&(e===dt&&((Ee&2)===0&&(ua|=r),at===4&&wr(e,ht)),Mt(e,s),r===1&&Ee===0&&(t.mode&1)===0&&(So=Qe()+500,Ws&&fr()))}function Mt(e,t){var r=e.callbackNode;sg(e,t);var s=ks(e,e===dt?ht:0);if(s===0)r!==null&&nd(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&nd(r),t===1)e.tag===0?iv(hf.bind(null,e)):Jd(hf.bind(null,e)),tv(function(){(Ee&6)===0&&fr()}),r=null;else{switch(sd(s)){case 1:r=ll;break;case 4:r=rd;break;case 16:r=xs;break;case 536870912:r=od;break;default:r=xs}r=kf(r,mf.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function mf(e,t){if(fa=-1,ma=0,(Ee&6)!==0)throw Error(i(327));var r=e.callbackNode;if(ko()&&e.callbackNode!==r)return null;var s=ks(e,e===dt?ht:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||t)t=ha(e,s);else{t=s;var u=Ee;Ee|=2;var d=vf();(dt!==e||ht!==t)&&(Xn=null,So=Qe()+500,Br(e,t));do try{Tv();break}catch(w){gf(e,w)}while(!0);Gl(),la.current=d,Ee=u,rt!==null?t=0:(dt=null,ht=0,t=at)}if(t!==0){if(t===2&&(u=ul(e),u!==0&&(s=u,t=Ou(e,u))),t===1)throw r=_i,Br(e,0),wr(e,s),Mt(e,Qe()),r;if(t===6)wr(e,s);else{if(u=e.current.alternate,(s&30)===0&&!Cv(u)&&(t=ha(e,s),t===2&&(d=ul(e),d!==0&&(s=d,t=Ou(e,d))),t===1))throw r=_i,Br(e,0),wr(e,s),Mt(e,Qe()),r;switch(e.finishedWork=u,e.finishedLanes=s,t){case 0:case 1:throw Error(i(345));case 2:Fr(e,Ot,Xn);break;case 3:if(wr(e,s),(s&130023424)===s&&(t=Pu+500-Qe(),10<t)){if(ks(e,0)!==0)break;if(u=e.suspendedLanes,(u&s)!==s){Et(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=Al(Fr.bind(null,e,Ot,Xn),t);break}Fr(e,Ot,Xn);break;case 4:if(wr(e,s),(s&4194240)===s)break;for(t=e.eventTimes,u=-1;0<s;){var m=31-gn(s);d=1<<m,m=t[m],m>u&&(u=m),s&=~d}if(s=u,s=Qe()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*kv(s/1960))-s,10<s){e.timeoutHandle=Al(Fr.bind(null,e,Ot,Xn),s);break}Fr(e,Ot,Xn);break;case 5:Fr(e,Ot,Xn);break;default:throw Error(i(329))}}}return Mt(e,Qe()),e.callbackNode===r?mf.bind(null,e):null}function Ou(e,t){var r=Oi;return e.current.memoizedState.isDehydrated&&(Br(e,t).flags|=256),e=ha(e,t),e!==2&&(t=Ot,Ot=r,t!==null&&Mu(t)),e}function Mu(e){Ot===null?Ot=e:Ot.push.apply(Ot,e)}function Cv(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var u=r[s],d=u.getSnapshot;u=u.value;try{if(!vn(d(),u))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wr(e,t){for(t&=~Tu,t&=~ua,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-gn(t),s=1<<r;e[r]=-1,t&=~s}}function hf(e){if((Ee&6)!==0)throw Error(i(327));ko();var t=ks(e,0);if((t&1)===0)return Mt(e,Qe()),null;var r=ha(e,t);if(e.tag!==0&&r===2){var s=ul(e);s!==0&&(t=s,r=Ou(e,s))}if(r===1)throw r=_i,Br(e,0),wr(e,t),Mt(e,Qe()),r;if(r===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fr(e,Ot,Xn),Mt(e,Qe()),null}function Iu(e,t){var r=Ee;Ee|=1;try{return e(t)}finally{Ee=r,Ee===0&&(So=Qe()+500,Ws&&fr())}}function jr(e){yr!==null&&yr.tag===0&&(Ee&6)===0&&ko();var t=Ee;Ee|=1;var r=nn.transition,s=Ie;try{if(nn.transition=null,Ie=1,e)return e()}finally{Ie=s,nn.transition=r,Ee=t,(Ee&6)===0&&fr()}}function $u(){Wt=bo.current,De(bo)}function Br(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,ev(r)),rt!==null)for(r=rt.return;r!==null;){var s=r;switch(Wl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Bs();break;case 3:yo(),De(Pt),De(yt),tu();break;case 5:Jl(s);break;case 4:yo();break;case 13:De(Fe);break;case 19:De(Fe);break;case 10:ql(s.type._context);break;case 22:case 23:$u()}r=r.return}if(dt=e,rt=e=br(e.current,null),ht=Wt=t,at=0,_i=null,Tu=ua=Dr=0,Ot=Oi=null,zr!==null){for(t=0;t<zr.length;t++)if(r=zr[t],s=r.interleaved,s!==null){r.interleaved=null;var u=s.next,d=r.pending;if(d!==null){var m=d.next;d.next=u,s.next=m}r.pending=s}zr=null}return e}function gf(e,t){do{var r=rt;try{if(Gl(),Zs.current=na,Js){for(var s=We.memoizedState;s!==null;){var u=s.queue;u!==null&&(u.pending=null),s=s.next}Js=!1}if(Lr=0,ct=st=We=null,ki=!1,Ci=0,Eu.current=null,r===null||r.return===null){at=1,_i=t,rt=null;break}e:{var d=e,m=r.return,w=r,E=t;if(t=ht,w.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var D=E,G=w,Y=G.tag;if((G.mode&1)===0&&(Y===0||Y===11||Y===15)){var K=G.alternate;K?(G.updateQueue=K.updateQueue,G.memoizedState=K.memoizedState,G.lanes=K.lanes):(G.updateQueue=null,G.memoizedState=null)}var ie=Bp(m);if(ie!==null){ie.flags&=-257,Fp(ie,m,w,d,t),ie.mode&1&&jp(d,D,t),t=ie,E=D;var ue=t.updateQueue;if(ue===null){var ce=new Set;ce.add(E),t.updateQueue=ce}else ue.add(E);break e}else{if((t&1)===0){jp(d,D,t),Nu();break e}E=Error(i(426))}}else if(je&&w.mode&1){var Xe=Bp(m);if(Xe!==null){(Xe.flags&65536)===0&&(Xe.flags|=256),Fp(Xe,m,w,d,t),Vl(xo(E,w));break e}}d=E=xo(E,w),at!==4&&(at=2),Oi===null?Oi=[d]:Oi.push(d),d=m;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var I=Lp(d,E,t);cp(d,I);break e;case 1:w=E;var T=d.type,$=d.stateNode;if((d.flags&128)===0&&(typeof T.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(vr===null||!vr.has($)))){d.flags|=65536,t&=-t,d.lanes|=t;var J=Dp(d,w,t);cp(d,J);break e}}d=d.return}while(d!==null)}xf(r)}catch(de){t=de,rt===r&&r!==null&&(rt=r=r.return);continue}break}while(!0)}function vf(){var e=la.current;return la.current=na,e===null?na:e}function Nu(){(at===0||at===3||at===2)&&(at=4),dt===null||(Dr&268435455)===0&&(ua&268435455)===0||wr(dt,ht)}function ha(e,t){var r=Ee;Ee|=2;var s=vf();(dt!==e||ht!==t)&&(Xn=null,Br(e,t));do try{Ev();break}catch(u){gf(e,u)}while(!0);if(Gl(),Ee=r,la.current=s,rt!==null)throw Error(i(261));return dt=null,ht=0,at}function Ev(){for(;rt!==null;)yf(rt)}function Tv(){for(;rt!==null&&!Xh();)yf(rt)}function yf(e){var t=Sf(e.alternate,e,Wt);e.memoizedProps=e.pendingProps,t===null?xf(e):rt=t,Eu.current=null}function xf(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=yv(r,t,Wt),r!==null){rt=r;return}}else{if(r=xv(r,t),r!==null){r.flags&=32767,rt=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{at=6,rt=null;return}}if(t=t.sibling,t!==null){rt=t;return}rt=t=e}while(t!==null);at===0&&(at=5)}function Fr(e,t,r){var s=Ie,u=nn.transition;try{nn.transition=null,Ie=1,Pv(e,t,r,s)}finally{nn.transition=u,Ie=s}return null}function Pv(e,t,r,s){do ko();while(yr!==null);if((Ee&6)!==0)throw Error(i(327));r=e.finishedWork;var u=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var d=r.lanes|r.childLanes;if(ag(e,d),e===dt&&(rt=dt=null,ht=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||da||(da=!0,kf(xs,function(){return ko(),null})),d=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||d){d=nn.transition,nn.transition=null;var m=Ie;Ie=1;var w=Ee;Ee|=4,Eu.current=null,bv(e,r),uf(r,e),Gg(Nl),Ts=!!$l,Nl=$l=null,e.current=r,Sv(r),Zh(),Ee=w,Ie=m,nn.transition=d}else e.current=r;if(da&&(da=!1,yr=e,pa=u),d=e.pendingLanes,d===0&&(vr=null),tg(r.stateNode),Mt(e,Qe()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)u=t[r],s(u.value,{componentStack:u.stack,digest:u.digest});if(ca)throw ca=!1,e=Ru,Ru=null,e;return(pa&1)!==0&&e.tag!==0&&ko(),d=e.pendingLanes,(d&1)!==0?e===_u?Mi++:(Mi=0,_u=e):Mi=0,fr(),null}function ko(){if(yr!==null){var e=sd(pa),t=nn.transition,r=Ie;try{if(nn.transition=null,Ie=16>e?16:e,yr===null)var s=!1;else{if(e=yr,yr=null,pa=0,(Ee&6)!==0)throw Error(i(331));var u=Ee;for(Ee|=4,se=e.current;se!==null;){var d=se,m=d.child;if((se.flags&16)!==0){var w=d.deletions;if(w!==null){for(var E=0;E<w.length;E++){var D=w[E];for(se=D;se!==null;){var G=se;switch(G.tag){case 0:case 11:case 15:Ri(8,G,d)}var Y=G.child;if(Y!==null)Y.return=G,se=Y;else for(;se!==null;){G=se;var K=G.sibling,ie=G.return;if(rf(G),G===D){se=null;break}if(K!==null){K.return=ie,se=K;break}se=ie}}}var ue=d.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var Xe=ce.sibling;ce.sibling=null,ce=Xe}while(ce!==null)}}se=d}}if((d.subtreeFlags&2064)!==0&&m!==null)m.return=d,se=m;else e:for(;se!==null;){if(d=se,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:Ri(9,d,d.return)}var I=d.sibling;if(I!==null){I.return=d.return,se=I;break e}se=d.return}}var T=e.current;for(se=T;se!==null;){m=se;var $=m.child;if((m.subtreeFlags&2064)!==0&&$!==null)$.return=m,se=$;else e:for(m=T;se!==null;){if(w=se,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:aa(9,w)}}catch(de){Ve(w,w.return,de)}if(w===m){se=null;break e}var J=w.sibling;if(J!==null){J.return=w.return,se=J;break e}se=w.return}}if(Ee=u,fr(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(ws,e)}catch{}s=!0}return s}finally{Ie=r,nn.transition=t}}return!1}function wf(e,t,r){t=xo(r,t),t=Lp(e,t,1),e=hr(e,t,1),t=Et(),e!==null&&(ti(e,1,t),Mt(e,t))}function Ve(e,t,r){if(e.tag===3)wf(e,e,r);else for(;t!==null;){if(t.tag===3){wf(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(vr===null||!vr.has(s))){e=xo(r,e),e=Dp(t,e,1),t=hr(t,e,1),e=Et(),t!==null&&(ti(t,1,e),Mt(t,e));break}}t=t.return}}function Rv(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=Et(),e.pingedLanes|=e.suspendedLanes&r,dt===e&&(ht&r)===r&&(at===4||at===3&&(ht&130023424)===ht&&500>Qe()-Pu?Br(e,0):Tu|=r),Mt(e,t)}function bf(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ss,Ss<<=1,(Ss&130023424)===0&&(Ss=4194304)));var r=Et();e=qn(e,t),e!==null&&(ti(e,t,r),Mt(e,r))}function _v(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),bf(e,r)}function Ov(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(i(314))}s!==null&&s.delete(t),bf(e,r)}var Sf;Sf=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pt.current)_t=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return _t=!1,vv(e,t,r);_t=(e.flags&131072)!==0}else _t=!1,je&&(t.flags&1048576)!==0&&ep(t,Hs,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;ia(e,t),e=t.pendingProps;var u=co(t,yt.current);vo(t,r),u=ou(null,t,s,e,u,r);var d=iu();return t.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Rt(s)?(d=!0,Fs(t)):d=!1,t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Xl(t),u.updater=ra,t.stateNode=u,u._reactInternals=t,du(t,s,e,r),t=hu(null,t,s,!0,d,r)):(t.tag=0,je&&d&&Fl(t),Ct(null,t,u,r),t=t.child),t;case 16:s=t.elementType;e:{switch(ia(e,t),e=t.pendingProps,u=s._init,s=u(s._payload),t.type=s,u=t.tag=Iv(s),e=xn(s,e),u){case 0:t=mu(null,t,s,e,r);break e;case 1:t=Gp(null,t,s,e,r);break e;case 11:t=Wp(null,t,s,e,r);break e;case 14:t=Up(null,t,s,xn(s.type,e),r);break e}throw Error(i(306,s,""))}return t;case 0:return s=t.type,u=t.pendingProps,u=t.elementType===s?u:xn(s,u),mu(e,t,s,u,r);case 1:return s=t.type,u=t.pendingProps,u=t.elementType===s?u:xn(s,u),Gp(e,t,s,u,r);case 3:e:{if(qp(t),e===null)throw Error(i(387));s=t.pendingProps,d=t.memoizedState,u=d.element,up(e,t),Qs(t,s,null,r);var m=t.memoizedState;if(s=m.element,d.isDehydrated)if(d={element:s,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){u=xo(Error(i(423)),t),t=Yp(e,t,s,r,u);break e}else if(s!==u){u=xo(Error(i(424)),t),t=Yp(e,t,s,r,u);break e}else for(Ft=cr(t.stateNode.containerInfo.firstChild),Bt=t,je=!0,yn=null,r=ap(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(mo(),s===u){t=Qn(e,t,r);break e}Ct(e,t,s,r)}t=t.child}return t;case 5:return pp(t),e===null&&Hl(t),s=t.type,u=t.pendingProps,d=e!==null?e.memoizedProps:null,m=u.children,zl(s,u)?m=null:d!==null&&zl(s,d)&&(t.flags|=32),Kp(e,t),Ct(e,t,m,r),t.child;case 6:return e===null&&Hl(t),null;case 13:return Qp(e,t,r);case 4:return Zl(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=ho(t,null,s,r):Ct(e,t,s,r),t.child;case 11:return s=t.type,u=t.pendingProps,u=t.elementType===s?u:xn(s,u),Wp(e,t,s,u,r);case 7:return Ct(e,t,t.pendingProps,r),t.child;case 8:return Ct(e,t,t.pendingProps.children,r),t.child;case 12:return Ct(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,u=t.pendingProps,d=t.memoizedProps,m=u.value,Ne(Gs,s._currentValue),s._currentValue=m,d!==null)if(vn(d.value,m)){if(d.children===u.children&&!Pt.current){t=Qn(e,t,r);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var w=d.dependencies;if(w!==null){m=d.child;for(var E=w.firstContext;E!==null;){if(E.context===s){if(d.tag===1){E=Yn(-1,r&-r),E.tag=2;var D=d.updateQueue;if(D!==null){D=D.shared;var G=D.pending;G===null?E.next=E:(E.next=G.next,G.next=E),D.pending=E}}d.lanes|=r,E=d.alternate,E!==null&&(E.lanes|=r),Yl(d.return,r,t),w.lanes|=r;break}E=E.next}}else if(d.tag===10)m=d.type===t.type?null:d.child;else if(d.tag===18){if(m=d.return,m===null)throw Error(i(341));m.lanes|=r,w=m.alternate,w!==null&&(w.lanes|=r),Yl(m,r,t),m=d.sibling}else m=d.child;if(m!==null)m.return=d;else for(m=d;m!==null;){if(m===t){m=null;break}if(d=m.sibling,d!==null){d.return=m.return,m=d;break}m=m.return}d=m}Ct(e,t,u.children,r),t=t.child}return t;case 9:return u=t.type,s=t.pendingProps.children,vo(t,r),u=en(u),s=s(u),t.flags|=1,Ct(e,t,s,r),t.child;case 14:return s=t.type,u=xn(s,t.pendingProps),u=xn(s.type,u),Up(e,t,s,u,r);case 15:return Hp(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,u=t.pendingProps,u=t.elementType===s?u:xn(s,u),ia(e,t),t.tag=1,Rt(s)?(e=!0,Fs(t)):e=!1,vo(t,r),zp(t,s,u),du(t,s,u,r),hu(null,t,s,!0,e,r);case 19:return Zp(e,t,r);case 22:return Vp(e,t,r)}throw Error(i(156,t.tag))};function kf(e,t){return vt(e,t)}function Mv(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(e,t,r,s){return new Mv(e,t,r,s)}function zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Iv(e){if(typeof e=="function")return zu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===oe)return 11;if(e===ne)return 14}return 2}function br(e,t){var r=e.alternate;return r===null?(r=rn(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ga(e,t,r,s,u,d){var m=2;if(s=e,typeof e=="function")zu(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case x:return Wr(r.children,u,d,t);case z:m=8,u|=8;break;case W:return e=rn(12,r,t,u|2),e.elementType=W,e.lanes=d,e;case ee:return e=rn(13,r,t,u),e.elementType=ee,e.lanes=d,e;case re:return e=rn(19,r,t,u),e.elementType=re,e.lanes=d,e;case te:return va(r,u,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:m=10;break e;case q:m=9;break e;case oe:m=11;break e;case ne:m=14;break e;case X:m=16,s=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=rn(m,r,t,u),t.elementType=e,t.type=s,t.lanes=d,t}function Wr(e,t,r,s){return e=rn(7,e,s,t),e.lanes=r,e}function va(e,t,r,s){return e=rn(22,e,s,t),e.elementType=te,e.lanes=r,e.stateNode={isHidden:!1},e}function Au(e,t,r){return e=rn(6,e,null,t),e.lanes=r,e}function Lu(e,t,r){return t=rn(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $v(e,t,r,s,u){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cl(0),this.expirationTimes=cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.identifierPrefix=s,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Du(e,t,r,s,u,d,m,w,E){return e=new $v(e,t,r,w,E),t===1?(t=1,d===!0&&(t|=8)):t=0,d=rn(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xl(d),e}function Nv(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function Cf(e){if(!e)return pr;e=e._reactInternals;e:{if(_n(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var r=e.type;if(Rt(r))return Xd(e,r,t)}return t}function Ef(e,t,r,s,u,d,m,w,E){return e=Du(r,s,!0,e,u,d,m,w,E),e.context=Cf(null),r=e.current,s=Et(),u=xr(r),d=Yn(s,u),d.callback=t??null,hr(r,d,u),e.current.lanes=u,ti(e,u,s),Mt(e,s),e}function ya(e,t,r,s){var u=t.current,d=Et(),m=xr(u);return r=Cf(r),t.context===null?t.context=r:t.pendingContext=r,t=Yn(d,m),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=hr(u,t,m),e!==null&&(Sn(e,u,m,d),Ys(e,u,m)),m}function xa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ju(e,t){Tf(e,t),(e=e.alternate)&&Tf(e,t)}function zv(){return null}var Pf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bu(e){this._internalRoot=e}wa.prototype.render=Bu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));ya(e,t,null,null)},wa.prototype.unmount=Bu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jr(function(){ya(null,e,null,null)}),t[Hn]=null}};function wa(e){this._internalRoot=e}wa.prototype.unstable_scheduleHydration=function(e){if(e){var t=ud();e={blockedOn:null,target:e,priority:t};for(var r=0;r<ar.length&&t!==0&&t<ar[r].priority;r++);ar.splice(r,0,e),r===0&&pd(e)}};function Fu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rf(){}function Av(e,t,r,s,u){if(u){if(typeof s=="function"){var d=s;s=function(){var D=xa(m);d.call(D)}}var m=Ef(t,s,e,0,null,!1,!1,"",Rf);return e._reactRootContainer=m,e[Hn]=m.current,hi(e.nodeType===8?e.parentNode:e),jr(),m}for(;u=e.lastChild;)e.removeChild(u);if(typeof s=="function"){var w=s;s=function(){var D=xa(E);w.call(D)}}var E=Du(e,0,!1,null,null,!1,!1,"",Rf);return e._reactRootContainer=E,e[Hn]=E.current,hi(e.nodeType===8?e.parentNode:e),jr(function(){ya(t,E,r,s)}),E}function Sa(e,t,r,s,u){var d=r._reactRootContainer;if(d){var m=d;if(typeof u=="function"){var w=u;u=function(){var E=xa(m);w.call(E)}}ya(t,m,e,u)}else m=Av(r,t,e,u,s);return xa(m)}ad=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ei(t.pendingLanes);r!==0&&(dl(t,r|1),Mt(t,Qe()),(Ee&6)===0&&(So=Qe()+500,fr()))}break;case 13:jr(function(){var s=qn(e,1);if(s!==null){var u=Et();Sn(s,e,1,u)}}),ju(e,1)}},pl=function(e){if(e.tag===13){var t=qn(e,134217728);if(t!==null){var r=Et();Sn(t,e,134217728,r)}ju(e,134217728)}},ld=function(e){if(e.tag===13){var t=xr(e),r=qn(e,t);if(r!==null){var s=Et();Sn(r,e,t,s)}ju(e,t)}},ud=function(){return Ie},cd=function(e,t){var r=Ie;try{return Ie=e,t()}finally{Ie=r}},Yo=function(e,t,r){switch(t){case"input":if(qt(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var u=js(s);if(!u)throw Error(i(90));tt(s),qt(s,u)}}}break;case"textarea":Tt(e,r);break;case"select":t=r.value,t!=null&&ft(e,!!r.multiple,t,!1)}},ds=Iu,ps=jr;var Lv={usingClientEntryPoint:!1,Events:[yi,lo,js,Xo,Zo,Iu]},Ii={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dv={bundleType:Ii.bundleType,version:Ii.version,rendererPackageName:Ii.rendererPackageName,rendererConfig:Ii.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ys(e),e===null?null:e.stateNode},findFiberByHostInstance:Ii.findFiberByHostInstance||zv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{ws=ka.inject(Dv),On=ka}catch{}}return It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lv,It.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fu(t))throw Error(i(200));return Nv(e,t,null,r)},It.createRoot=function(e,t){if(!Fu(e))throw Error(i(299));var r=!1,s="",u=Pf;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Du(e,1,!1,null,null,r,!1,s,u),e[Hn]=t.current,hi(e.nodeType===8?e.parentNode:e),new Bu(t)},It.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=ys(t),e=e===null?null:e.stateNode,e},It.flushSync=function(e){return jr(e)},It.hydrate=function(e,t,r){if(!ba(t))throw Error(i(200));return Sa(null,e,t,!0,r)},It.hydrateRoot=function(e,t,r){if(!Fu(e))throw Error(i(405));var s=r!=null&&r.hydratedSources||null,u=!1,d="",m=Pf;if(r!=null&&(r.unstable_strictMode===!0&&(u=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),t=Ef(t,null,e,1,r??null,u,!1,d,m),e[Hn]=t.current,hi(e),s)for(e=0;e<s.length;e++)r=s[e],u=r._getVersion,u=u(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,u]:t.mutableSourceEagerHydrationData.push(r,u);return new wa(t)},It.render=function(e,t,r){if(!ba(t))throw Error(i(200));return Sa(null,e,t,!1,r)},It.unmountComponentAtNode=function(e){if(!ba(e))throw Error(i(40));return e._reactRootContainer?(jr(function(){Sa(null,null,e,!1,function(){e._reactRootContainer=null,e[Hn]=null})}),!0):!1},It.unstable_batchedUpdates=Iu,It.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!ba(r))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return Sa(e,t,r,!1,s)},It.version="18.3.1-next-f1338f8080-20240426",It}var Af;function Ym(){if(Af)return Hu.exports;Af=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Hu.exports=Vv(),Hu.exports}var Lf;function Kv(){if(Lf)return Ca;Lf=1;var n=Ym();return Ca.createRoot=n.createRoot,Ca.hydrateRoot=n.hydrateRoot,Ca}var Gv=Kv();const qv=Yr(Gv),Yi={black:"#000",white:"#fff"},Co={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},Eo={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},To={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},Po={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},Ro={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},Ni={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},Yv={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function Qi(n){let o="https://mui.com/production-error/?code="+n;for(let i=1;i<arguments.length;i+=1)o+="&args[]="+encodeURIComponent(arguments[i]);return"Minified MUI error #"+n+"; visit "+o+" for the full message."}const Qv=Object.freeze(Object.defineProperty({__proto__:null,default:Qi},Symbol.toStringTag,{value:"Module"})),zo="$$material";function O(){return O=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var a in i)({}).hasOwnProperty.call(i,a)&&(n[a]=i[a])}return n},O.apply(null,arguments)}function Se(n,o){if(n==null)return{};var i={};for(var a in n)if({}.hasOwnProperty.call(n,a)){if(o.indexOf(a)!==-1)continue;i[a]=n[a]}return i}function Xv(n){if(n.sheet)return n.sheet;for(var o=0;o<document.styleSheets.length;o++)if(document.styleSheets[o].ownerNode===n)return document.styleSheets[o]}function Zv(n){var o=document.createElement("style");return o.setAttribute("data-emotion",n.key),n.nonce!==void 0&&o.setAttribute("nonce",n.nonce),o.appendChild(document.createTextNode("")),o.setAttribute("data-s",""),o}var Jv=function(){function n(i){var a=this;this._insertTag=function(l){var c;a.tags.length===0?a.insertionPoint?c=a.insertionPoint.nextSibling:a.prepend?c=a.container.firstChild:c=a.before:c=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(l,c),a.tags.push(l)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var o=n.prototype;return o.hydrate=function(a){a.forEach(this._insertTag)},o.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Zv(this));var l=this.tags[this.tags.length-1];if(this.isSpeedy){var c=Xv(l);try{c.insertRule(a,c.cssRules.length)}catch{}}else l.appendChild(document.createTextNode(a));this.ctr++},o.flush=function(){this.tags.forEach(function(a){var l;return(l=a.parentNode)==null?void 0:l.removeChild(a)}),this.tags=[],this.ctr=0},n}(),St="-ms-",Aa="-moz-",Pe="-webkit-",Qm="comm",Tc="rule",Pc="decl",e0="@import",Xm="@keyframes",t0="@layer",n0=Math.abs,Ha=String.fromCharCode,r0=Object.assign;function o0(n,o){return gt(n,0)^45?(((o<<2^gt(n,0))<<2^gt(n,1))<<2^gt(n,2))<<2^gt(n,3):0}function Zm(n){return n.trim()}function i0(n,o){return(n=o.exec(n))?n[0]:n}function Re(n,o,i){return n.replace(o,i)}function ac(n,o){return n.indexOf(o)}function gt(n,o){return n.charCodeAt(o)|0}function Xi(n,o,i){return n.slice(o,i)}function zn(n){return n.length}function Rc(n){return n.length}function Ea(n,o){return o.push(n),n}function s0(n,o){return n.map(o).join("")}var Va=1,Ao=1,Jm=0,zt=0,ot=0,Uo="";function Ka(n,o,i,a,l,c,p){return{value:n,root:o,parent:i,type:a,props:l,children:c,line:Va,column:Ao,length:p,return:""}}function zi(n,o){return r0(Ka("",null,null,"",null,null,0),n,{length:-n.length},o)}function a0(){return ot}function l0(){return ot=zt>0?gt(Uo,--zt):0,Ao--,ot===10&&(Ao=1,Va--),ot}function Vt(){return ot=zt<Jm?gt(Uo,zt++):0,Ao++,ot===10&&(Ao=1,Va++),ot}function Ln(){return gt(Uo,zt)}function Ia(){return zt}function rs(n,o){return Xi(Uo,n,o)}function Zi(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function eh(n){return Va=Ao=1,Jm=zn(Uo=n),zt=0,[]}function th(n){return Uo="",n}function $a(n){return Zm(rs(zt-1,lc(n===91?n+2:n===40?n+1:n)))}function u0(n){for(;(ot=Ln())&&ot<33;)Vt();return Zi(n)>2||Zi(ot)>3?"":" "}function c0(n,o){for(;--o&&Vt()&&!(ot<48||ot>102||ot>57&&ot<65||ot>70&&ot<97););return rs(n,Ia()+(o<6&&Ln()==32&&Vt()==32))}function lc(n){for(;Vt();)switch(ot){case n:return zt;case 34:case 39:n!==34&&n!==39&&lc(ot);break;case 40:n===41&&lc(n);break;case 92:Vt();break}return zt}function d0(n,o){for(;Vt()&&n+ot!==57;)if(n+ot===84&&Ln()===47)break;return"/*"+rs(o,zt-1)+"*"+Ha(n===47?n:Vt())}function p0(n){for(;!Zi(Ln());)Vt();return rs(n,zt)}function f0(n){return th(Na("",null,null,null,[""],n=eh(n),0,[0],n))}function Na(n,o,i,a,l,c,p,f,h){for(var g=0,v=0,b=p,S=0,_=0,C=0,y=1,M=1,F=1,H=0,A="",N=l,k=c,B=a,x=A;M;)switch(C=H,H=Vt()){case 40:if(C!=108&&gt(x,b-1)==58){ac(x+=Re($a(H),"&","&\f"),"&\f")!=-1&&(F=-1);break}case 34:case 39:case 91:x+=$a(H);break;case 9:case 10:case 13:case 32:x+=u0(C);break;case 92:x+=c0(Ia()-1,7);continue;case 47:switch(Ln()){case 42:case 47:Ea(m0(d0(Vt(),Ia()),o,i),h);break;default:x+="/"}break;case 123*y:f[g++]=zn(x)*F;case 125*y:case 59:case 0:switch(H){case 0:case 125:M=0;case 59+v:F==-1&&(x=Re(x,/\f/g,"")),_>0&&zn(x)-b&&Ea(_>32?jf(x+";",a,i,b-1):jf(Re(x," ","")+";",a,i,b-2),h);break;case 59:x+=";";default:if(Ea(B=Df(x,o,i,g,v,l,f,A,N=[],k=[],b),c),H===123)if(v===0)Na(x,o,B,B,N,c,b,f,k);else switch(S===99&&gt(x,3)===110?100:S){case 100:case 108:case 109:case 115:Na(n,B,B,a&&Ea(Df(n,B,B,0,0,l,f,A,l,N=[],b),k),l,k,b,f,a?N:k);break;default:Na(x,B,B,B,[""],k,0,f,k)}}g=v=_=0,y=F=1,A=x="",b=p;break;case 58:b=1+zn(x),_=C;default:if(y<1){if(H==123)--y;else if(H==125&&y++==0&&l0()==125)continue}switch(x+=Ha(H),H*y){case 38:F=v>0?1:(x+="\f",-1);break;case 44:f[g++]=(zn(x)-1)*F,F=1;break;case 64:Ln()===45&&(x+=$a(Vt())),S=Ln(),v=b=zn(A=x+=p0(Ia())),H++;break;case 45:C===45&&zn(x)==2&&(y=0)}}return c}function Df(n,o,i,a,l,c,p,f,h,g,v){for(var b=l-1,S=l===0?c:[""],_=Rc(S),C=0,y=0,M=0;C<a;++C)for(var F=0,H=Xi(n,b+1,b=n0(y=p[C])),A=n;F<_;++F)(A=Zm(y>0?S[F]+" "+H:Re(H,/&\f/g,S[F])))&&(h[M++]=A);return Ka(n,o,i,l===0?Tc:f,h,g,v)}function m0(n,o,i){return Ka(n,o,i,Qm,Ha(a0()),Xi(n,2,-2),0)}function jf(n,o,i,a){return Ka(n,o,i,Pc,Xi(n,0,a),Xi(n,a+1,-1),a)}function Io(n,o){for(var i="",a=Rc(n),l=0;l<a;l++)i+=o(n[l],l,n,o)||"";return i}function h0(n,o,i,a){switch(n.type){case t0:if(n.children.length)break;case e0:case Pc:return n.return=n.return||n.value;case Qm:return"";case Xm:return n.return=n.value+"{"+Io(n.children,a)+"}";case Tc:n.value=n.props.join(",")}return zn(i=Io(n.children,a))?n.return=n.value+"{"+i+"}":""}function g0(n){var o=Rc(n);return function(i,a,l,c){for(var p="",f=0;f<o;f++)p+=n[f](i,a,l,c)||"";return p}}function v0(n){return function(o){o.root||(o=o.return)&&n(o)}}function nh(n){var o=Object.create(null);return function(i){return o[i]===void 0&&(o[i]=n(i)),o[i]}}var y0=function(o,i,a){for(var l=0,c=0;l=c,c=Ln(),l===38&&c===12&&(i[a]=1),!Zi(c);)Vt();return rs(o,zt)},x0=function(o,i){var a=-1,l=44;do switch(Zi(l)){case 0:l===38&&Ln()===12&&(i[a]=1),o[a]+=y0(zt-1,i,a);break;case 2:o[a]+=$a(l);break;case 4:if(l===44){o[++a]=Ln()===58?"&\f":"",i[a]=o[a].length;break}default:o[a]+=Ha(l)}while(l=Vt());return o},w0=function(o,i){return th(x0(eh(o),i))},Bf=new WeakMap,b0=function(o){if(!(o.type!=="rule"||!o.parent||o.length<1)){for(var i=o.value,a=o.parent,l=o.column===a.column&&o.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(o.props.length===1&&i.charCodeAt(0)!==58&&!Bf.get(a))&&!l){Bf.set(o,!0);for(var c=[],p=w0(i,c),f=a.props,h=0,g=0;h<p.length;h++)for(var v=0;v<f.length;v++,g++)o.props[g]=c[h]?p[h].replace(/&\f/g,f[v]):f[v]+" "+p[h]}}},S0=function(o){if(o.type==="decl"){var i=o.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(o.return="",o.value="")}};function rh(n,o){switch(o0(n,o)){case 5103:return Pe+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Pe+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Pe+n+Aa+n+St+n+n;case 6828:case 4268:return Pe+n+St+n+n;case 6165:return Pe+n+St+"flex-"+n+n;case 5187:return Pe+n+Re(n,/(\w+).+(:[^]+)/,Pe+"box-$1$2"+St+"flex-$1$2")+n;case 5443:return Pe+n+St+"flex-item-"+Re(n,/flex-|-self/,"")+n;case 4675:return Pe+n+St+"flex-line-pack"+Re(n,/align-content|flex-|-self/,"")+n;case 5548:return Pe+n+St+Re(n,"shrink","negative")+n;case 5292:return Pe+n+St+Re(n,"basis","preferred-size")+n;case 6060:return Pe+"box-"+Re(n,"-grow","")+Pe+n+St+Re(n,"grow","positive")+n;case 4554:return Pe+Re(n,/([^-])(transform)/g,"$1"+Pe+"$2")+n;case 6187:return Re(Re(Re(n,/(zoom-|grab)/,Pe+"$1"),/(image-set)/,Pe+"$1"),n,"")+n;case 5495:case 3959:return Re(n,/(image-set\([^]*)/,Pe+"$1$`$1");case 4968:return Re(Re(n,/(.+:)(flex-)?(.*)/,Pe+"box-pack:$3"+St+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Pe+n+n;case 4095:case 3583:case 4068:case 2532:return Re(n,/(.+)-inline(.+)/,Pe+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zn(n)-1-o>6)switch(gt(n,o+1)){case 109:if(gt(n,o+4)!==45)break;case 102:return Re(n,/(.+:)(.+)-([^]+)/,"$1"+Pe+"$2-$3$1"+Aa+(gt(n,o+3)==108?"$3":"$2-$3"))+n;case 115:return~ac(n,"stretch")?rh(Re(n,"stretch","fill-available"),o)+n:n}break;case 4949:if(gt(n,o+1)!==115)break;case 6444:switch(gt(n,zn(n)-3-(~ac(n,"!important")&&10))){case 107:return Re(n,":",":"+Pe)+n;case 101:return Re(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Pe+(gt(n,14)===45?"inline-":"")+"box$3$1"+Pe+"$2$3$1"+St+"$2box$3")+n}break;case 5936:switch(gt(n,o+11)){case 114:return Pe+n+St+Re(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Pe+n+St+Re(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Pe+n+St+Re(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return Pe+n+St+n+n}return n}var k0=function(o,i,a,l){if(o.length>-1&&!o.return)switch(o.type){case Pc:o.return=rh(o.value,o.length);break;case Xm:return Io([zi(o,{value:Re(o.value,"@","@"+Pe)})],l);case Tc:if(o.length)return s0(o.props,function(c){switch(i0(c,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Io([zi(o,{props:[Re(c,/:(read-\w+)/,":"+Aa+"$1")]})],l);case"::placeholder":return Io([zi(o,{props:[Re(c,/:(plac\w+)/,":"+Pe+"input-$1")]}),zi(o,{props:[Re(c,/:(plac\w+)/,":"+Aa+"$1")]}),zi(o,{props:[Re(c,/:(plac\w+)/,St+"input-$1")]})],l)}return""})}},C0=[k0],oh=function(o){var i=o.key;if(i==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(y){var M=y.getAttribute("data-emotion");M.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var l=o.stylisPlugins||C0,c={},p,f=[];p=o.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(y){for(var M=y.getAttribute("data-emotion").split(" "),F=1;F<M.length;F++)c[M[F]]=!0;f.push(y)});var h,g=[b0,S0];{var v,b=[h0,v0(function(y){v.insert(y)})],S=g0(g.concat(l,b)),_=function(M){return Io(f0(M),S)};h=function(M,F,H,A){v=H,_(M?M+"{"+F.styles+"}":F.styles),A&&(C.inserted[F.name]=!0)}}var C={key:i,sheet:new Jv({key:i,container:p,nonce:o.nonce,speedy:o.speedy,prepend:o.prepend,insertionPoint:o.insertionPoint}),nonce:o.nonce,inserted:c,registered:{},insert:h};return C.sheet.hydrate(f),C},Gu={exports:{}},_e={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ff;function E0(){if(Ff)return _e;Ff=1;var n=typeof Symbol=="function"&&Symbol.for,o=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,l=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,p=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,h=n?Symbol.for("react.async_mode"):60111,g=n?Symbol.for("react.concurrent_mode"):60111,v=n?Symbol.for("react.forward_ref"):60112,b=n?Symbol.for("react.suspense"):60113,S=n?Symbol.for("react.suspense_list"):60120,_=n?Symbol.for("react.memo"):60115,C=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,M=n?Symbol.for("react.fundamental"):60117,F=n?Symbol.for("react.responder"):60118,H=n?Symbol.for("react.scope"):60119;function A(k){if(typeof k=="object"&&k!==null){var B=k.$$typeof;switch(B){case o:switch(k=k.type,k){case h:case g:case a:case c:case l:case b:return k;default:switch(k=k&&k.$$typeof,k){case f:case v:case C:case _:case p:return k;default:return B}}case i:return B}}}function N(k){return A(k)===g}return _e.AsyncMode=h,_e.ConcurrentMode=g,_e.ContextConsumer=f,_e.ContextProvider=p,_e.Element=o,_e.ForwardRef=v,_e.Fragment=a,_e.Lazy=C,_e.Memo=_,_e.Portal=i,_e.Profiler=c,_e.StrictMode=l,_e.Suspense=b,_e.isAsyncMode=function(k){return N(k)||A(k)===h},_e.isConcurrentMode=N,_e.isContextConsumer=function(k){return A(k)===f},_e.isContextProvider=function(k){return A(k)===p},_e.isElement=function(k){return typeof k=="object"&&k!==null&&k.$$typeof===o},_e.isForwardRef=function(k){return A(k)===v},_e.isFragment=function(k){return A(k)===a},_e.isLazy=function(k){return A(k)===C},_e.isMemo=function(k){return A(k)===_},_e.isPortal=function(k){return A(k)===i},_e.isProfiler=function(k){return A(k)===c},_e.isStrictMode=function(k){return A(k)===l},_e.isSuspense=function(k){return A(k)===b},_e.isValidElementType=function(k){return typeof k=="string"||typeof k=="function"||k===a||k===g||k===c||k===l||k===b||k===S||typeof k=="object"&&k!==null&&(k.$$typeof===C||k.$$typeof===_||k.$$typeof===p||k.$$typeof===f||k.$$typeof===v||k.$$typeof===M||k.$$typeof===F||k.$$typeof===H||k.$$typeof===y)},_e.typeOf=A,_e}var Wf;function T0(){return Wf||(Wf=1,Gu.exports=E0()),Gu.exports}var qu,Uf;function P0(){if(Uf)return qu;Uf=1;var n=T0(),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};c[n.ForwardRef]=a,c[n.Memo]=l;function p(C){return n.isMemo(C)?l:c[C.$$typeof]||o}var f=Object.defineProperty,h=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,b=Object.getPrototypeOf,S=Object.prototype;function _(C,y,M){if(typeof y!="string"){if(S){var F=b(y);F&&F!==S&&_(C,F,M)}var H=h(y);g&&(H=H.concat(g(y)));for(var A=p(C),N=p(y),k=0;k<H.length;++k){var B=H[k];if(!i[B]&&!(M&&M[B])&&!(N&&N[B])&&!(A&&A[B])){var x=v(y,B);try{f(C,B,x)}catch{}}}}return C}return qu=_,qu}P0();var R0=!0;function ih(n,o,i){var a="";return i.split(" ").forEach(function(l){n[l]!==void 0?o.push(n[l]+";"):l&&(a+=l+" ")}),a}var _c=function(o,i,a){var l=o.key+"-"+i.name;(a===!1||R0===!1)&&o.registered[l]===void 0&&(o.registered[l]=i.styles)},Oc=function(o,i,a){_c(o,i,a);var l=o.key+"-"+i.name;if(o.inserted[i.name]===void 0){var c=i;do o.insert(i===c?"."+l:"",c,o.sheet,!0),c=c.next;while(c!==void 0)}};function _0(n){for(var o=0,i,a=0,l=n.length;l>=4;++a,l-=4)i=n.charCodeAt(a)&255|(n.charCodeAt(++a)&255)<<8|(n.charCodeAt(++a)&255)<<16|(n.charCodeAt(++a)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,o=(i&65535)*1540483477+((i>>>16)*59797<<16)^(o&65535)*1540483477+((o>>>16)*59797<<16);switch(l){case 3:o^=(n.charCodeAt(a+2)&255)<<16;case 2:o^=(n.charCodeAt(a+1)&255)<<8;case 1:o^=n.charCodeAt(a)&255,o=(o&65535)*1540483477+((o>>>16)*59797<<16)}return o^=o>>>13,o=(o&65535)*1540483477+((o>>>16)*59797<<16),((o^o>>>15)>>>0).toString(36)}var O0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},M0=/[A-Z]|^ms/g,I0=/_EMO_([^_]+?)_([^]*?)_EMO_/g,sh=function(o){return o.charCodeAt(1)===45},Hf=function(o){return o!=null&&typeof o!="boolean"},Yu=nh(function(n){return sh(n)?n:n.replace(M0,"-$&").toLowerCase()}),Vf=function(o,i){switch(o){case"animation":case"animationName":if(typeof i=="string")return i.replace(I0,function(a,l,c){return An={name:l,styles:c,next:An},l})}return O0[o]!==1&&!sh(o)&&typeof i=="number"&&i!==0?i+"px":i};function Ji(n,o,i){if(i==null)return"";var a=i;if(a.__emotion_styles!==void 0)return a;switch(typeof i){case"boolean":return"";case"object":{var l=i;if(l.anim===1)return An={name:l.name,styles:l.styles,next:An},l.name;var c=i;if(c.styles!==void 0){var p=c.next;if(p!==void 0)for(;p!==void 0;)An={name:p.name,styles:p.styles,next:An},p=p.next;var f=c.styles+";";return f}return $0(n,o,i)}case"function":{if(n!==void 0){var h=An,g=i(n);return An=h,Ji(n,o,g)}break}}var v=i;if(o==null)return v;var b=o[v];return b!==void 0?b:v}function $0(n,o,i){var a="";if(Array.isArray(i))for(var l=0;l<i.length;l++)a+=Ji(n,o,i[l])+";";else for(var c in i){var p=i[c];if(typeof p!="object"){var f=p;o!=null&&o[f]!==void 0?a+=c+"{"+o[f]+"}":Hf(f)&&(a+=Yu(c)+":"+Vf(c,f)+";")}else if(Array.isArray(p)&&typeof p[0]=="string"&&(o==null||o[p[0]]===void 0))for(var h=0;h<p.length;h++)Hf(p[h])&&(a+=Yu(c)+":"+Vf(c,p[h])+";");else{var g=Ji(n,o,p);switch(c){case"animation":case"animationName":{a+=Yu(c)+":"+g+";";break}default:a+=c+"{"+g+"}"}}}return a}var Kf=/label:\s*([^\s;{]+)\s*(;|$)/g,An;function Ga(n,o,i){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var a=!0,l="";An=void 0;var c=n[0];if(c==null||c.raw===void 0)a=!1,l+=Ji(i,o,c);else{var p=c;l+=p[0]}for(var f=1;f<n.length;f++)if(l+=Ji(i,o,n[f]),a){var h=c;l+=h[f]}Kf.lastIndex=0;for(var g="",v;(v=Kf.exec(l))!==null;)g+="-"+v[1];var b=_0(l)+g;return{name:b,styles:l,next:An}}var N0=function(o){return o()},ah=sc.useInsertionEffect?sc.useInsertionEffect:!1,lh=ah||N0,Gf=ah||P.useLayoutEffect,uh=P.createContext(typeof HTMLElement<"u"?oh({key:"css"}):null),z0=uh.Provider,Mc=function(o){return P.forwardRef(function(i,a){var l=P.useContext(uh);return o(i,l,a)})},Ho=P.createContext({}),Ic={}.hasOwnProperty,uc="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",A0=function(o,i){var a={};for(var l in i)Ic.call(i,l)&&(a[l]=i[l]);return a[uc]=o,a},L0=function(o){var i=o.cache,a=o.serialized,l=o.isStringTag;return _c(i,a,l),lh(function(){return Oc(i,a,l)}),null},D0=Mc(function(n,o,i){var a=n.css;typeof a=="string"&&o.registered[a]!==void 0&&(a=o.registered[a]);var l=n[uc],c=[a],p="";typeof n.className=="string"?p=ih(o.registered,c,n.className):n.className!=null&&(p=n.className+" ");var f=Ga(c,void 0,P.useContext(Ho));p+=o.key+"-"+f.name;var h={};for(var g in n)Ic.call(n,g)&&g!=="css"&&g!==uc&&(h[g]=n[g]);return h.className=p,i&&(h.ref=i),P.createElement(P.Fragment,null,P.createElement(L0,{cache:o,serialized:f,isStringTag:typeof l=="string"}),P.createElement(l,h))}),j0=D0,qf=function(o,i){var a=arguments;if(i==null||!Ic.call(i,"css"))return P.createElement.apply(void 0,a);var l=a.length,c=new Array(l);c[0]=j0,c[1]=A0(o,i);for(var p=2;p<l;p++)c[p]=a[p];return P.createElement.apply(null,c)};(function(n){var o;o||(o=n.JSX||(n.JSX={}))})(qf||(qf={}));var B0=Mc(function(n,o){var i=n.styles,a=Ga([i],void 0,P.useContext(Ho)),l=P.useRef();return Gf(function(){var c=o.key+"-global",p=new o.sheet.constructor({key:c,nonce:o.sheet.nonce,container:o.sheet.container,speedy:o.sheet.isSpeedy}),f=!1,h=document.querySelector('style[data-emotion="'+c+" "+a.name+'"]');return o.sheet.tags.length&&(p.before=o.sheet.tags[0]),h!==null&&(f=!0,h.setAttribute("data-emotion",c),p.hydrate([h])),l.current=[p,f],function(){p.flush()}},[o]),Gf(function(){var c=l.current,p=c[0],f=c[1];if(f){c[1]=!1;return}if(a.next!==void 0&&Oc(o,a.next,!0),p.tags.length){var h=p.tags[p.tags.length-1].nextElementSibling;p.before=h,p.flush()}o.insert("",a,p,!1)},[o,a.name]),null});function ch(){for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return Ga(o)}function qa(){var n=ch.apply(void 0,arguments),o="animation-"+n.name;return{name:o,styles:"@keyframes "+o+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var F0=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,W0=nh(function(n){return F0.test(n)||n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)<91}),U0=W0,H0=function(o){return o!=="theme"},Yf=function(o){return typeof o=="string"&&o.charCodeAt(0)>96?U0:H0},Qf=function(o,i,a){var l;if(i){var c=i.shouldForwardProp;l=o.__emotion_forwardProp&&c?function(p){return o.__emotion_forwardProp(p)&&c(p)}:c}return typeof l!="function"&&a&&(l=o.__emotion_forwardProp),l},V0=function(o){var i=o.cache,a=o.serialized,l=o.isStringTag;return _c(i,a,l),lh(function(){return Oc(i,a,l)}),null},K0=function n(o,i){var a=o.__emotion_real===o,l=a&&o.__emotion_base||o,c,p;i!==void 0&&(c=i.label,p=i.target);var f=Qf(o,i,a),h=f||Yf(l),g=!h("as");return function(){var v=arguments,b=a&&o.__emotion_styles!==void 0?o.__emotion_styles.slice(0):[];if(c!==void 0&&b.push("label:"+c+";"),v[0]==null||v[0].raw===void 0)b.push.apply(b,v);else{var S=v[0];b.push(S[0]);for(var _=v.length,C=1;C<_;C++)b.push(v[C],S[C])}var y=Mc(function(M,F,H){var A=g&&M.as||l,N="",k=[],B=M;if(M.theme==null){B={};for(var x in M)B[x]=M[x];B.theme=P.useContext(Ho)}typeof M.className=="string"?N=ih(F.registered,k,M.className):M.className!=null&&(N=M.className+" ");var z=Ga(b.concat(k),F.registered,B);N+=F.key+"-"+z.name,p!==void 0&&(N+=" "+p);var W=g&&f===void 0?Yf(A):h,L={};for(var q in M)g&&q==="as"||W(q)&&(L[q]=M[q]);return L.className=N,H&&(L.ref=H),P.createElement(P.Fragment,null,P.createElement(V0,{cache:F,serialized:z,isStringTag:typeof A=="string"}),P.createElement(A,L))});return y.displayName=c!==void 0?c:"Styled("+(typeof l=="string"?l:l.displayName||l.name||"Component")+")",y.defaultProps=o.defaultProps,y.__emotion_real=y,y.__emotion_base=l,y.__emotion_styles=b,y.__emotion_forwardProp=f,Object.defineProperty(y,"toString",{value:function(){return"."+p}}),y.withComponent=function(M,F){var H=n(M,O({},i,F,{shouldForwardProp:Qf(y,F,!0)}));return H.apply(void 0,b)},y}},G0=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],cc=K0.bind(null);G0.forEach(function(n){cc[n]=cc(n)});let dc;typeof document=="object"&&(dc=oh({key:"css",prepend:!0}));function q0(n){const{injectFirst:o,children:i}=n;return o&&dc?V.jsx(z0,{value:dc,children:i}):i}function Y0(n){return n==null||Object.keys(n).length===0}function dh(n){const{styles:o,defaultTheme:i={}}=n,a=typeof o=="function"?l=>o(Y0(l)?i:l):o;return V.jsx(B0,{styles:a})}function ph(n,o){return cc(n,o)}const Q0=(n,o)=>{Array.isArray(n.__emotion_styles)&&(n.__emotion_styles=o(n.__emotion_styles))},X0=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:dh,StyledEngineProvider:q0,ThemeContext:Ho,css:ch,default:ph,internal_processStyles:Q0,keyframes:qa},Symbol.toStringTag,{value:"Module"}));function kr(n){if(typeof n!="object"||n===null)return!1;const o=Object.getPrototypeOf(n);return(o===null||o===Object.prototype||Object.getPrototypeOf(o)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function fh(n){if(P.isValidElement(n)||!kr(n))return n;const o={};return Object.keys(n).forEach(i=>{o[i]=fh(n[i])}),o}function Dn(n,o,i={clone:!0}){const a=i.clone?O({},n):n;return kr(n)&&kr(o)&&Object.keys(o).forEach(l=>{P.isValidElement(o[l])?a[l]=o[l]:kr(o[l])&&Object.prototype.hasOwnProperty.call(n,l)&&kr(n[l])?a[l]=Dn(n[l],o[l],i):i.clone?a[l]=kr(o[l])?fh(o[l]):o[l]:a[l]=o[l]}),a}const Z0=Object.freeze(Object.defineProperty({__proto__:null,default:Dn,isPlainObject:kr},Symbol.toStringTag,{value:"Module"})),J0=["values","unit","step"],ey=n=>{const o=Object.keys(n).map(i=>({key:i,val:n[i]}))||[];return o.sort((i,a)=>i.val-a.val),o.reduce((i,a)=>O({},i,{[a.key]:a.val}),{})};function mh(n){const{values:o={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:i="px",step:a=5}=n,l=Se(n,J0),c=ey(o),p=Object.keys(c);function f(S){return`@media (min-width:${typeof o[S]=="number"?o[S]:S}${i})`}function h(S){return`@media (max-width:${(typeof o[S]=="number"?o[S]:S)-a/100}${i})`}function g(S,_){const C=p.indexOf(_);return`@media (min-width:${typeof o[S]=="number"?o[S]:S}${i}) and (max-width:${(C!==-1&&typeof o[p[C]]=="number"?o[p[C]]:_)-a/100}${i})`}function v(S){return p.indexOf(S)+1<p.length?g(S,p[p.indexOf(S)+1]):f(S)}function b(S){const _=p.indexOf(S);return _===0?f(p[1]):_===p.length-1?h(p[_]):g(S,p[p.indexOf(S)+1]).replace("@media","@media not all and")}return O({keys:p,values:c,up:f,down:h,between:g,only:v,not:b,unit:i},l)}const ty={borderRadius:4};function Vi(n,o){return o?Dn(n,o,{clone:!1}):n}const $c={xs:0,sm:600,md:900,lg:1200,xl:1536},Xf={keys:["xs","sm","md","lg","xl"],up:n=>`@media (min-width:${$c[n]}px)`};function ln(n,o,i){const a=n.theme||{};if(Array.isArray(o)){const c=a.breakpoints||Xf;return o.reduce((p,f,h)=>(p[c.up(c.keys[h])]=i(o[h]),p),{})}if(typeof o=="object"){const c=a.breakpoints||Xf;return Object.keys(o).reduce((p,f)=>{if(Object.keys(c.values||$c).indexOf(f)!==-1){const h=c.up(f);p[h]=i(o[f],f)}else{const h=f;p[h]=o[h]}return p},{})}return i(o)}function ny(n={}){var o;return((o=n.keys)==null?void 0:o.reduce((a,l)=>{const c=n.up(l);return a[c]={},a},{}))||{}}function ry(n,o){return n.reduce((i,a)=>{const l=i[a];return(!l||Object.keys(l).length===0)&&delete i[a],i},o)}function oy(n,o){if(typeof n!="object")return{};const i={},a=Object.keys(o);return Array.isArray(n)?a.forEach((l,c)=>{c<n.length&&(i[l]=!0)}):a.forEach(l=>{n[l]!=null&&(i[l]=!0)}),i}function Ya({values:n,breakpoints:o,base:i}){const a=i||oy(n,o),l=Object.keys(a);if(l.length===0)return n;let c;return l.reduce((p,f,h)=>(Array.isArray(n)?(p[f]=n[h]!=null?n[h]:n[c],c=h):typeof n=="object"?(p[f]=n[f]!=null?n[f]:n[c],c=f):p[f]=n,p),{})}function ze(n){if(typeof n!="string")throw new Error(Qi(7));return n.charAt(0).toUpperCase()+n.slice(1)}const iy=Object.freeze(Object.defineProperty({__proto__:null,default:ze},Symbol.toStringTag,{value:"Module"}));function Qa(n,o,i=!0){if(!o||typeof o!="string")return null;if(n&&n.vars&&i){const a=`vars.${o}`.split(".").reduce((l,c)=>l&&l[c]?l[c]:null,n);if(a!=null)return a}return o.split(".").reduce((a,l)=>a&&a[l]!=null?a[l]:null,n)}function La(n,o,i,a=i){let l;return typeof n=="function"?l=n(i):Array.isArray(n)?l=n[i]||a:l=Qa(n,i)||a,o&&(l=o(l,a,n)),l}function Ze(n){const{prop:o,cssProperty:i=n.prop,themeKey:a,transform:l}=n,c=p=>{if(p[o]==null)return null;const f=p[o],h=p.theme,g=Qa(h,a)||{};return ln(p,f,b=>{let S=La(g,l,b);return b===S&&typeof b=="string"&&(S=La(g,l,`${o}${b==="default"?"":ze(b)}`,b)),i===!1?S:{[i]:S}})};return c.propTypes={},c.filterProps=[o],c}function sy(n){const o={};return i=>(o[i]===void 0&&(o[i]=n(i)),o[i])}const ay={m:"margin",p:"padding"},ly={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Zf={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},uy=sy(n=>{if(n.length>2)if(Zf[n])n=Zf[n];else return[n];const[o,i]=n.split(""),a=ay[o],l=ly[i]||"";return Array.isArray(l)?l.map(c=>a+c):[a+l]}),Nc=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],zc=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Nc,...zc];function os(n,o,i,a){var l;const c=(l=Qa(n,o,!1))!=null?l:i;return typeof c=="number"?p=>typeof p=="string"?p:c*p:Array.isArray(c)?p=>typeof p=="string"?p:c[p]:typeof c=="function"?c:()=>{}}function hh(n){return os(n,"spacing",8)}function is(n,o){if(typeof o=="string"||o==null)return o;const i=Math.abs(o),a=n(i);return o>=0?a:typeof a=="number"?-a:`-${a}`}function cy(n,o){return i=>n.reduce((a,l)=>(a[l]=is(o,i),a),{})}function dy(n,o,i,a){if(o.indexOf(i)===-1)return null;const l=uy(i),c=cy(l,a),p=n[i];return ln(n,p,c)}function gh(n,o){const i=hh(n.theme);return Object.keys(n).map(a=>dy(n,o,a,i)).reduce(Vi,{})}function Ke(n){return gh(n,Nc)}Ke.propTypes={};Ke.filterProps=Nc;function Ge(n){return gh(n,zc)}Ge.propTypes={};Ge.filterProps=zc;function py(n=8){if(n.mui)return n;const o=hh({spacing:n}),i=(...a)=>(a.length===0?[1]:a).map(c=>{const p=o(c);return typeof p=="number"?`${p}px`:p}).join(" ");return i.mui=!0,i}function Xa(...n){const o=n.reduce((a,l)=>(l.filterProps.forEach(c=>{a[c]=l}),a),{}),i=a=>Object.keys(a).reduce((l,c)=>o[c]?Vi(l,o[c](a)):l,{});return i.propTypes={},i.filterProps=n.reduce((a,l)=>a.concat(l.filterProps),[]),i}function sn(n){return typeof n!="number"?n:`${n}px solid`}function dn(n,o){return Ze({prop:n,themeKey:"borders",transform:o})}const fy=dn("border",sn),my=dn("borderTop",sn),hy=dn("borderRight",sn),gy=dn("borderBottom",sn),vy=dn("borderLeft",sn),yy=dn("borderColor"),xy=dn("borderTopColor"),wy=dn("borderRightColor"),by=dn("borderBottomColor"),Sy=dn("borderLeftColor"),ky=dn("outline",sn),Cy=dn("outlineColor"),Za=n=>{if(n.borderRadius!==void 0&&n.borderRadius!==null){const o=os(n.theme,"shape.borderRadius",4),i=a=>({borderRadius:is(o,a)});return ln(n,n.borderRadius,i)}return null};Za.propTypes={};Za.filterProps=["borderRadius"];Xa(fy,my,hy,gy,vy,yy,xy,wy,by,Sy,Za,ky,Cy);const Ja=n=>{if(n.gap!==void 0&&n.gap!==null){const o=os(n.theme,"spacing",8),i=a=>({gap:is(o,a)});return ln(n,n.gap,i)}return null};Ja.propTypes={};Ja.filterProps=["gap"];const el=n=>{if(n.columnGap!==void 0&&n.columnGap!==null){const o=os(n.theme,"spacing",8),i=a=>({columnGap:is(o,a)});return ln(n,n.columnGap,i)}return null};el.propTypes={};el.filterProps=["columnGap"];const tl=n=>{if(n.rowGap!==void 0&&n.rowGap!==null){const o=os(n.theme,"spacing",8),i=a=>({rowGap:is(o,a)});return ln(n,n.rowGap,i)}return null};tl.propTypes={};tl.filterProps=["rowGap"];const Ey=Ze({prop:"gridColumn"}),Ty=Ze({prop:"gridRow"}),Py=Ze({prop:"gridAutoFlow"}),Ry=Ze({prop:"gridAutoColumns"}),_y=Ze({prop:"gridAutoRows"}),Oy=Ze({prop:"gridTemplateColumns"}),My=Ze({prop:"gridTemplateRows"}),Iy=Ze({prop:"gridTemplateAreas"}),$y=Ze({prop:"gridArea"});Xa(Ja,el,tl,Ey,Ty,Py,Ry,_y,Oy,My,Iy,$y);function $o(n,o){return o==="grey"?o:n}const Ny=Ze({prop:"color",themeKey:"palette",transform:$o}),zy=Ze({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:$o}),Ay=Ze({prop:"backgroundColor",themeKey:"palette",transform:$o});Xa(Ny,zy,Ay);function Ut(n){return n<=1&&n!==0?`${n*100}%`:n}const Ly=Ze({prop:"width",transform:Ut}),Ac=n=>{if(n.maxWidth!==void 0&&n.maxWidth!==null){const o=i=>{var a,l;const c=((a=n.theme)==null||(a=a.breakpoints)==null||(a=a.values)==null?void 0:a[i])||$c[i];return c?((l=n.theme)==null||(l=l.breakpoints)==null?void 0:l.unit)!=="px"?{maxWidth:`${c}${n.theme.breakpoints.unit}`}:{maxWidth:c}:{maxWidth:Ut(i)}};return ln(n,n.maxWidth,o)}return null};Ac.filterProps=["maxWidth"];const Dy=Ze({prop:"minWidth",transform:Ut}),jy=Ze({prop:"height",transform:Ut}),By=Ze({prop:"maxHeight",transform:Ut}),Fy=Ze({prop:"minHeight",transform:Ut});Ze({prop:"size",cssProperty:"width",transform:Ut});Ze({prop:"size",cssProperty:"height",transform:Ut});const Wy=Ze({prop:"boxSizing"});Xa(Ly,Ac,Dy,jy,By,Fy,Wy);const ss={border:{themeKey:"borders",transform:sn},borderTop:{themeKey:"borders",transform:sn},borderRight:{themeKey:"borders",transform:sn},borderBottom:{themeKey:"borders",transform:sn},borderLeft:{themeKey:"borders",transform:sn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:sn},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Za},color:{themeKey:"palette",transform:$o},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:$o},backgroundColor:{themeKey:"palette",transform:$o},p:{style:Ge},pt:{style:Ge},pr:{style:Ge},pb:{style:Ge},pl:{style:Ge},px:{style:Ge},py:{style:Ge},padding:{style:Ge},paddingTop:{style:Ge},paddingRight:{style:Ge},paddingBottom:{style:Ge},paddingLeft:{style:Ge},paddingX:{style:Ge},paddingY:{style:Ge},paddingInline:{style:Ge},paddingInlineStart:{style:Ge},paddingInlineEnd:{style:Ge},paddingBlock:{style:Ge},paddingBlockStart:{style:Ge},paddingBlockEnd:{style:Ge},m:{style:Ke},mt:{style:Ke},mr:{style:Ke},mb:{style:Ke},ml:{style:Ke},mx:{style:Ke},my:{style:Ke},margin:{style:Ke},marginTop:{style:Ke},marginRight:{style:Ke},marginBottom:{style:Ke},marginLeft:{style:Ke},marginX:{style:Ke},marginY:{style:Ke},marginInline:{style:Ke},marginInlineStart:{style:Ke},marginInlineEnd:{style:Ke},marginBlock:{style:Ke},marginBlockStart:{style:Ke},marginBlockEnd:{style:Ke},displayPrint:{cssProperty:!1,transform:n=>({"@media print":{display:n}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Ja},rowGap:{style:tl},columnGap:{style:el},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Ut},maxWidth:{style:Ac},minWidth:{transform:Ut},height:{transform:Ut},maxHeight:{transform:Ut},minHeight:{transform:Ut},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function Uy(...n){const o=n.reduce((a,l)=>a.concat(Object.keys(l)),[]),i=new Set(o);return n.every(a=>i.size===Object.keys(a).length)}function Hy(n,o){return typeof n=="function"?n(o):n}function vh(){function n(i,a,l,c){const p={[i]:a,theme:l},f=c[i];if(!f)return{[i]:a};const{cssProperty:h=i,themeKey:g,transform:v,style:b}=f;if(a==null)return null;if(g==="typography"&&a==="inherit")return{[i]:a};const S=Qa(l,g)||{};return b?b(p):ln(p,a,C=>{let y=La(S,v,C);return C===y&&typeof C=="string"&&(y=La(S,v,`${i}${C==="default"?"":ze(C)}`,C)),h===!1?y:{[h]:y}})}function o(i){var a;const{sx:l,theme:c={}}=i||{};if(!l)return null;const p=(a=c.unstable_sxConfig)!=null?a:ss;function f(h){let g=h;if(typeof h=="function")g=h(c);else if(typeof h!="object")return h;if(!g)return null;const v=ny(c.breakpoints),b=Object.keys(v);let S=v;return Object.keys(g).forEach(_=>{const C=Hy(g[_],c);if(C!=null)if(typeof C=="object")if(p[_])S=Vi(S,n(_,C,c,p));else{const y=ln({theme:c},C,M=>({[_]:M}));Uy(y,C)?S[_]=o({sx:C,theme:c}):S=Vi(S,y)}else S=Vi(S,n(_,C,c,p))}),ry(b,S)}return Array.isArray(l)?l.map(f):f(l)}return o}const as=vh();as.filterProps=["sx"];function yh(n,o){const i=this;return i.vars&&typeof i.getColorSchemeSelector=="function"?{[i.getColorSchemeSelector(n).replace(/(\[[^\]]+\])/,"*:where($1)")]:o}:i.palette.mode===n?o:{}}const Vy=["breakpoints","palette","spacing","shape"];function Lc(n={},...o){const{breakpoints:i={},palette:a={},spacing:l,shape:c={}}=n,p=Se(n,Vy),f=mh(i),h=py(l);let g=Dn({breakpoints:f,direction:"ltr",components:{},palette:O({mode:"light"},a),spacing:h,shape:O({},ty,c)},p);return g.applyStyles=yh,g=o.reduce((v,b)=>Dn(v,b),g),g.unstable_sxConfig=O({},ss,p==null?void 0:p.unstable_sxConfig),g.unstable_sx=function(b){return as({sx:b,theme:this})},g}const Ky=Object.freeze(Object.defineProperty({__proto__:null,default:Lc,private_createBreakpoints:mh,unstable_applyStyles:yh},Symbol.toStringTag,{value:"Module"}));function Gy(n){return Object.keys(n).length===0}function Dc(n=null){const o=P.useContext(Ho);return!o||Gy(o)?n:o}const qy=Lc();function jc(n=qy){return Dc(n)}function Yy({styles:n,themeId:o,defaultTheme:i={}}){const a=jc(i),l=typeof n=="function"?n(o&&a[o]||a):n;return V.jsx(dh,{styles:l})}const Qy=["sx"],Xy=n=>{var o,i;const a={systemProps:{},otherProps:{}},l=(o=n==null||(i=n.theme)==null?void 0:i.unstable_sxConfig)!=null?o:ss;return Object.keys(n).forEach(c=>{l[c]?a.systemProps[c]=n[c]:a.otherProps[c]=n[c]}),a};function nl(n){const{sx:o}=n,i=Se(n,Qy),{systemProps:a,otherProps:l}=Xy(i);let c;return Array.isArray(o)?c=[a,...o]:typeof o=="function"?c=(...p)=>{const f=o(...p);return kr(f)?O({},a,f):a}:c=O({},a,o),O({},l,{sx:c})}const Zy=Object.freeze(Object.defineProperty({__proto__:null,default:as,extendSxProp:nl,unstable_createStyleFunctionSx:vh,unstable_defaultSxConfig:ss},Symbol.toStringTag,{value:"Module"})),Jf=n=>n,Jy=()=>{let n=Jf;return{configure(o){n=o},generate(o){return n(o)},reset(){n=Jf}}},Bc=Jy();function xh(n){var o,i,a="";if(typeof n=="string"||typeof n=="number")a+=n;else if(typeof n=="object")if(Array.isArray(n)){var l=n.length;for(o=0;o<l;o++)n[o]&&(i=xh(n[o]))&&(a&&(a+=" "),a+=i)}else for(i in n)n[i]&&(a&&(a+=" "),a+=i);return a}function Ce(){for(var n,o,i=0,a="",l=arguments.length;i<l;i++)(n=arguments[i])&&(o=xh(n))&&(a&&(a+=" "),a+=o);return a}const ex=["className","component"];function tx(n={}){const{themeId:o,defaultTheme:i,defaultClassName:a="MuiBox-root",generateClassName:l}=n,c=ph("div",{shouldForwardProp:f=>f!=="theme"&&f!=="sx"&&f!=="as"})(as);return P.forwardRef(function(h,g){const v=jc(i),b=nl(h),{className:S,component:_="div"}=b,C=Se(b,ex);return V.jsx(c,O({as:_,ref:g,className:Ce(S,l?l(a):a),theme:o&&v[o]||v},C))})}const nx={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function it(n,o,i="Mui"){const a=nx[o];return a?`${i}-${a}`:`${Bc.generate(n)}-${o}`}function Je(n,o,i="Mui"){const a={};return o.forEach(l=>{a[l]=it(n,l,i)}),a}var Qu={exports:{}},$e={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function rx(){if(em)return $e;em=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),p=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),S=Symbol.for("react.view_transition"),_=Symbol.for("react.client.reference");function C(y){if(typeof y=="object"&&y!==null){var M=y.$$typeof;switch(M){case n:switch(y=y.type,y){case i:case l:case a:case h:case g:case S:return y;default:switch(y=y&&y.$$typeof,y){case p:case f:case b:case v:return y;case c:return y;default:return M}}case o:return M}}}return $e.ContextConsumer=c,$e.ContextProvider=p,$e.Element=n,$e.ForwardRef=f,$e.Fragment=i,$e.Lazy=b,$e.Memo=v,$e.Portal=o,$e.Profiler=l,$e.StrictMode=a,$e.Suspense=h,$e.SuspenseList=g,$e.isContextConsumer=function(y){return C(y)===c},$e.isContextProvider=function(y){return C(y)===p},$e.isElement=function(y){return typeof y=="object"&&y!==null&&y.$$typeof===n},$e.isForwardRef=function(y){return C(y)===f},$e.isFragment=function(y){return C(y)===i},$e.isLazy=function(y){return C(y)===b},$e.isMemo=function(y){return C(y)===v},$e.isPortal=function(y){return C(y)===o},$e.isProfiler=function(y){return C(y)===l},$e.isStrictMode=function(y){return C(y)===a},$e.isSuspense=function(y){return C(y)===h},$e.isSuspenseList=function(y){return C(y)===g},$e.isValidElementType=function(y){return typeof y=="string"||typeof y=="function"||y===i||y===l||y===a||y===h||y===g||typeof y=="object"&&y!==null&&(y.$$typeof===b||y.$$typeof===v||y.$$typeof===p||y.$$typeof===c||y.$$typeof===f||y.$$typeof===_||y.getModuleId!==void 0)},$e.typeOf=C,$e}var tm;function ox(){return tm||(tm=1,Qu.exports=rx()),Qu.exports}var nm=ox();const ix=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function wh(n){const o=`${n}`.match(ix);return o&&o[1]||""}function bh(n,o=""){return n.displayName||n.name||wh(n)||o}function rm(n,o,i){const a=bh(o);return n.displayName||(a!==""?`${i}(${a})`:i)}function sx(n){if(n!=null){if(typeof n=="string")return n;if(typeof n=="function")return bh(n,"Component");if(typeof n=="object")switch(n.$$typeof){case nm.ForwardRef:return rm(n,n.render,"ForwardRef");case nm.Memo:return rm(n,n.type,"memo");default:return}}}const ax=Object.freeze(Object.defineProperty({__proto__:null,default:sx,getFunctionName:wh},Symbol.toStringTag,{value:"Module"}));function Da(n,o){const i=O({},o);return Object.keys(n).forEach(a=>{if(a.toString().match(/^(components|slots)$/))i[a]=O({},n[a],i[a]);else if(a.toString().match(/^(componentsProps|slotProps)$/)){const l=n[a]||{},c=o[a];i[a]={},!c||!Object.keys(c)?i[a]=l:!l||!Object.keys(l)?i[a]=c:(i[a]=O({},c),Object.keys(l).forEach(p=>{i[a][p]=Da(l[p],c[p])}))}else i[a]===void 0&&(i[a]=n[a])}),i}function lx(n){const{theme:o,name:i,props:a}=n;return!o||!o.components||!o.components[i]||!o.components[i].defaultProps?a:Da(o.components[i].defaultProps,a)}const Tr=typeof window<"u"?P.useLayoutEffect:P.useEffect;function ux(n,o,i,a,l){const[c,p]=P.useState(()=>l&&i?i(n).matches:a?a(n).matches:o);return Tr(()=>{let f=!0;if(!i)return;const h=i(n),g=()=>{f&&p(h.matches)};return g(),h.addListener(g),()=>{f=!1,h.removeListener(g)}},[n,i]),c}const Sh=P.useSyncExternalStore;function cx(n,o,i,a,l){const c=P.useCallback(()=>o,[o]),p=P.useMemo(()=>{if(l&&i)return()=>i(n).matches;if(a!==null){const{matches:v}=a(n);return()=>v}return c},[c,n,a,l,i]),[f,h]=P.useMemo(()=>{if(i===null)return[c,()=>()=>{}];const v=i(n);return[()=>v.matches,b=>(v.addListener(b),()=>{v.removeListener(b)})]},[c,i,n]);return Sh(h,f,p)}function dx(n,o={}){const i=Dc(),a=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:l=!1,matchMedia:c=a?window.matchMedia:null,ssrMatchMedia:p=null,noSsr:f=!1}=lx({name:"MuiUseMediaQuery",props:o,theme:i});let h=typeof n=="function"?n(i):n;return h=h.replace(/^@media( ?)/m,""),(Sh!==void 0?cx:ux)(h,l,c,p,f)}function px(n,o=Number.MIN_SAFE_INTEGER,i=Number.MAX_SAFE_INTEGER){return Math.max(o,Math.min(n,i))}const fx=Object.freeze(Object.defineProperty({__proto__:null,default:px},Symbol.toStringTag,{value:"Module"}));function pc(...n){return n.reduce((o,i)=>i==null?o:function(...l){o.apply(this,l),i.apply(this,l)},()=>{})}function kh(n,o=166){let i;function a(...l){const c=()=>{n.apply(this,l)};clearTimeout(i),i=setTimeout(c,o)}return a.clear=()=>{clearTimeout(i)},a}function mx(n,o){return()=>null}function hx(n,o){var i,a;return P.isValidElement(n)&&o.indexOf((i=n.type.muiName)!=null?i:(a=n.type)==null||(a=a._payload)==null||(a=a.value)==null?void 0:a.muiName)!==-1}function Cn(n){return n&&n.ownerDocument||document}function Vo(n){return Cn(n).defaultView||window}function gx(n,o){return()=>null}function ja(n,o){typeof n=="function"?n(o):n&&(n.current=o)}let om=0;function vx(n){const[o,i]=P.useState(n),a=n||o;return P.useEffect(()=>{o==null&&(om+=1,i(`mui-${om}`))},[o]),a}const im=sc.useId;function Ch(n){if(im!==void 0){const o=im();return n??o}return vx(n)}function yx(n,o,i,a,l){return null}function Eh({controlled:n,default:o,name:i,state:a="value"}){const{current:l}=P.useRef(n!==void 0),[c,p]=P.useState(o),f=l?n:c,h=P.useCallback(g=>{l||p(g)},[]);return[f,h]}function Zn(n){const o=P.useRef(n);return Tr(()=>{o.current=n}),P.useRef((...i)=>(0,o.current)(...i)).current}function At(...n){return P.useMemo(()=>n.every(o=>o==null)?null:o=>{n.forEach(i=>{ja(i,o)})},n)}const sm={};function xx(n,o){const i=P.useRef(sm);return i.current===sm&&(i.current=n(o)),i}const wx=[];function bx(n){P.useEffect(n,wx)}class ls{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new ls}start(o,i){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,i()},o)}}function Mo(){const n=xx(ls.create).current;return bx(n.disposeEffect),n}let rl=!0,fc=!1;const Sx=new ls,kx={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Cx(n){const{type:o,tagName:i}=n;return!!(i==="INPUT"&&kx[o]&&!n.readOnly||i==="TEXTAREA"&&!n.readOnly||n.isContentEditable)}function Ex(n){n.metaKey||n.altKey||n.ctrlKey||(rl=!0)}function Xu(){rl=!1}function Tx(){this.visibilityState==="hidden"&&fc&&(rl=!0)}function Px(n){n.addEventListener("keydown",Ex,!0),n.addEventListener("mousedown",Xu,!0),n.addEventListener("pointerdown",Xu,!0),n.addEventListener("touchstart",Xu,!0),n.addEventListener("visibilitychange",Tx,!0)}function Rx(n){const{target:o}=n;try{return o.matches(":focus-visible")}catch{}return rl||Cx(o)}function Fc(){const n=P.useCallback(l=>{l!=null&&Px(l.ownerDocument)},[]),o=P.useRef(!1);function i(){return o.current?(fc=!0,Sx.start(100,()=>{fc=!1}),o.current=!1,!0):!1}function a(l){return Rx(l)?(o.current=!0,!0):!1}return{isFocusVisibleRef:o,onFocus:a,onBlur:i,ref:n}}function _x(n){const o=n.documentElement.clientWidth;return Math.abs(window.innerWidth-o)}function lt(n,o,i=void 0){const a={};return Object.keys(n).forEach(l=>{a[l]=n[l].reduce((c,p)=>{if(p){const f=o(p);f!==""&&c.push(f),i&&i[p]&&c.push(i[p])}return c},[]).join(" ")}),a}function Ox(n){return typeof n=="string"}function Ui(n,o,i){return n===void 0||Ox(n)?o:O({},o,{ownerState:O({},o.ownerState,i)})}function Th(n,o=[]){if(n===void 0)return{};const i={};return Object.keys(n).filter(a=>a.match(/^on[A-Z]/)&&typeof n[a]=="function"&&!o.includes(a)).forEach(a=>{i[a]=n[a]}),i}function am(n){if(n===void 0)return{};const o={};return Object.keys(n).filter(i=>!(i.match(/^on[A-Z]/)&&typeof n[i]=="function")).forEach(i=>{o[i]=n[i]}),o}function Mx(n){const{getSlotProps:o,additionalProps:i,externalSlotProps:a,externalForwardedProps:l,className:c}=n;if(!o){const _=Ce(i==null?void 0:i.className,c,l==null?void 0:l.className,a==null?void 0:a.className),C=O({},i==null?void 0:i.style,l==null?void 0:l.style,a==null?void 0:a.style),y=O({},i,l,a);return _.length>0&&(y.className=_),Object.keys(C).length>0&&(y.style=C),{props:y,internalRef:void 0}}const p=Th(O({},l,a)),f=am(a),h=am(l),g=o(p),v=Ce(g==null?void 0:g.className,i==null?void 0:i.className,c,l==null?void 0:l.className,a==null?void 0:a.className),b=O({},g==null?void 0:g.style,i==null?void 0:i.style,l==null?void 0:l.style,a==null?void 0:a.style),S=O({},g,i,h,f);return v.length>0&&(S.className=v),Object.keys(b).length>0&&(S.style=b),{props:S,internalRef:g.ref}}function Ix(n,o,i){return typeof n=="function"?n(o,i):n}const $x=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function mc(n){var o;const{elementType:i,externalSlotProps:a,ownerState:l,skipResolvingSlotProps:c=!1}=n,p=Se(n,$x),f=c?{}:Ix(a,l),{props:h,internalRef:g}=Mx(O({},p,{externalSlotProps:f})),v=At(g,f==null?void 0:f.ref,(o=n.additionalProps)==null?void 0:o.ref);return Ui(i,O({},h,{ref:v}),l)}function Ko(n){if(parseInt(P.version,10)>=19){var o;return(n==null||(o=n.props)==null?void 0:o.ref)||null}return(n==null?void 0:n.ref)||null}const Ph=P.createContext(null);function Rh(){return P.useContext(Ph)}const Nx=typeof Symbol=="function"&&Symbol.for,zx=Nx?Symbol.for("mui.nested"):"__THEME_NESTED__";function Ax(n,o){return typeof o=="function"?o(n):O({},n,o)}function Lx(n){const{children:o,theme:i}=n,a=Rh(),l=P.useMemo(()=>{const c=a===null?i:Ax(a,i);return c!=null&&(c[zx]=a!==null),c},[i,a]);return V.jsx(Ph.Provider,{value:l,children:o})}const Dx=["value"],_h=P.createContext();function jx(n){let{value:o}=n,i=Se(n,Dx);return V.jsx(_h.Provider,O({value:o??!0},i))}const Oh=()=>{const n=P.useContext(_h);return n??!1},Mh=P.createContext(void 0);function Bx({value:n,children:o}){return V.jsx(Mh.Provider,{value:n,children:o})}function Fx(n){const{theme:o,name:i,props:a}=n;if(!o||!o.components||!o.components[i])return a;const l=o.components[i];return l.defaultProps?Da(l.defaultProps,a):!l.styleOverrides&&!l.variants?Da(l,a):a}function Wx({props:n,name:o}){const i=P.useContext(Mh);return Fx({props:n,name:o,theme:{components:i}})}const lm={};function um(n,o,i,a=!1){return P.useMemo(()=>{const l=n&&o[n]||o;if(typeof i=="function"){const c=i(l),p=n?O({},o,{[n]:c}):c;return a?()=>p:p}return n?O({},o,{[n]:i}):O({},o,i)},[n,o,i,a])}function Ux(n){const{children:o,theme:i,themeId:a}=n,l=Dc(lm),c=Rh()||lm,p=um(a,l,i),f=um(a,c,i,!0),h=p.direction==="rtl";return V.jsx(Lx,{theme:f,children:V.jsx(Ho.Provider,{value:p,children:V.jsx(jx,{value:h,children:V.jsx(Bx,{value:p==null?void 0:p.components,children:o})})})})}function Hx(n,o){return O({toolbar:{minHeight:56,[n.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[n.up("sm")]:{minHeight:64}}},o)}var Ue={},Zu={exports:{}},cm;function ol(){return cm||(cm=1,function(n){function o(i){return i&&i.__esModule?i:{default:i}}n.exports=o,n.exports.__esModule=!0,n.exports.default=n.exports}(Zu)),Zu.exports}const Vx=er(Qv),Kx=er(fx);var dm;function Gx(){if(dm)return Ue;dm=1;var n=ol();Object.defineProperty(Ue,"__esModule",{value:!0}),Ue.alpha=C,Ue.blend=B,Ue.colorChannel=void 0,Ue.darken=M,Ue.decomposeColor=p,Ue.emphasize=N,Ue.getContrastRatio=_,Ue.getLuminance=S,Ue.hexToRgb=l,Ue.hslToRgb=b,Ue.lighten=H,Ue.private_safeAlpha=y,Ue.private_safeColorChannel=void 0,Ue.private_safeDarken=F,Ue.private_safeEmphasize=k,Ue.private_safeLighten=A,Ue.recomposeColor=g,Ue.rgbToHex=v;var o=n(Vx),i=n(Kx);function a(x,z=0,W=1){return(0,i.default)(x,z,W)}function l(x){x=x.slice(1);const z=new RegExp(`.{1,${x.length>=6?2:1}}`,"g");let W=x.match(z);return W&&W[0].length===1&&(W=W.map(L=>L+L)),W?`rgb${W.length===4?"a":""}(${W.map((L,q)=>q<3?parseInt(L,16):Math.round(parseInt(L,16)/255*1e3)/1e3).join(", ")})`:""}function c(x){const z=x.toString(16);return z.length===1?`0${z}`:z}function p(x){if(x.type)return x;if(x.charAt(0)==="#")return p(l(x));const z=x.indexOf("("),W=x.substring(0,z);if(["rgb","rgba","hsl","hsla","color"].indexOf(W)===-1)throw new Error((0,o.default)(9,x));let L=x.substring(z+1,x.length-1),q;if(W==="color"){if(L=L.split(" "),q=L.shift(),L.length===4&&L[3].charAt(0)==="/"&&(L[3]=L[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(q)===-1)throw new Error((0,o.default)(10,q))}else L=L.split(",");return L=L.map(oe=>parseFloat(oe)),{type:W,values:L,colorSpace:q}}const f=x=>{const z=p(x);return z.values.slice(0,3).map((W,L)=>z.type.indexOf("hsl")!==-1&&L!==0?`${W}%`:W).join(" ")};Ue.colorChannel=f;const h=(x,z)=>{try{return f(x)}catch{return x}};Ue.private_safeColorChannel=h;function g(x){const{type:z,colorSpace:W}=x;let{values:L}=x;return z.indexOf("rgb")!==-1?L=L.map((q,oe)=>oe<3?parseInt(q,10):q):z.indexOf("hsl")!==-1&&(L[1]=`${L[1]}%`,L[2]=`${L[2]}%`),z.indexOf("color")!==-1?L=`${W} ${L.join(" ")}`:L=`${L.join(", ")}`,`${z}(${L})`}function v(x){if(x.indexOf("#")===0)return x;const{values:z}=p(x);return`#${z.map((W,L)=>c(L===3?Math.round(255*W):W)).join("")}`}function b(x){x=p(x);const{values:z}=x,W=z[0],L=z[1]/100,q=z[2]/100,oe=L*Math.min(q,1-q),ee=(X,te=(X+W/30)%12)=>q-oe*Math.max(Math.min(te-3,9-te,1),-1);let re="rgb";const ne=[Math.round(ee(0)*255),Math.round(ee(8)*255),Math.round(ee(4)*255)];return x.type==="hsla"&&(re+="a",ne.push(z[3])),g({type:re,values:ne})}function S(x){x=p(x);let z=x.type==="hsl"||x.type==="hsla"?p(b(x)).values:x.values;return z=z.map(W=>(x.type!=="color"&&(W/=255),W<=.03928?W/12.92:((W+.055)/1.055)**2.4)),Number((.2126*z[0]+.7152*z[1]+.0722*z[2]).toFixed(3))}function _(x,z){const W=S(x),L=S(z);return(Math.max(W,L)+.05)/(Math.min(W,L)+.05)}function C(x,z){return x=p(x),z=a(z),(x.type==="rgb"||x.type==="hsl")&&(x.type+="a"),x.type==="color"?x.values[3]=`/${z}`:x.values[3]=z,g(x)}function y(x,z,W){try{return C(x,z)}catch{return x}}function M(x,z){if(x=p(x),z=a(z),x.type.indexOf("hsl")!==-1)x.values[2]*=1-z;else if(x.type.indexOf("rgb")!==-1||x.type.indexOf("color")!==-1)for(let W=0;W<3;W+=1)x.values[W]*=1-z;return g(x)}function F(x,z,W){try{return M(x,z)}catch{return x}}function H(x,z){if(x=p(x),z=a(z),x.type.indexOf("hsl")!==-1)x.values[2]+=(100-x.values[2])*z;else if(x.type.indexOf("rgb")!==-1)for(let W=0;W<3;W+=1)x.values[W]+=(255-x.values[W])*z;else if(x.type.indexOf("color")!==-1)for(let W=0;W<3;W+=1)x.values[W]+=(1-x.values[W])*z;return g(x)}function A(x,z,W){try{return H(x,z)}catch{return x}}function N(x,z=.15){return S(x)>.5?M(x,z):H(x,z)}function k(x,z,W){try{return N(x,z)}catch{return x}}function B(x,z,W,L=1){const q=(ne,X)=>Math.round((ne**(1/L)*(1-W)+X**(1/L)*W)**L),oe=p(x),ee=p(z),re=[q(oe.values[0],ee.values[0]),q(oe.values[1],ee.values[1]),q(oe.values[2],ee.values[2])];return g({type:"rgb",values:re})}return Ue}var Ht=Gx();const qx=["mode","contrastThreshold","tonalOffset"],pm={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Yi.white,default:Yi.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Ju={text:{primary:Yi.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Yi.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function fm(n,o,i,a){const l=a.light||a,c=a.dark||a*1.5;n[o]||(n.hasOwnProperty(i)?n[o]=n[i]:o==="light"?n.light=Ht.lighten(n.main,l):o==="dark"&&(n.dark=Ht.darken(n.main,c)))}function Yx(n="light"){return n==="dark"?{main:To[200],light:To[50],dark:To[400]}:{main:To[700],light:To[400],dark:To[800]}}function Qx(n="light"){return n==="dark"?{main:Eo[200],light:Eo[50],dark:Eo[400]}:{main:Eo[500],light:Eo[300],dark:Eo[700]}}function Xx(n="light"){return n==="dark"?{main:Co[500],light:Co[300],dark:Co[700]}:{main:Co[700],light:Co[400],dark:Co[800]}}function Zx(n="light"){return n==="dark"?{main:Po[400],light:Po[300],dark:Po[700]}:{main:Po[700],light:Po[500],dark:Po[900]}}function Jx(n="light"){return n==="dark"?{main:Ro[400],light:Ro[300],dark:Ro[700]}:{main:Ro[800],light:Ro[500],dark:Ro[900]}}function e1(n="light"){return n==="dark"?{main:Ni[400],light:Ni[300],dark:Ni[700]}:{main:"#ed6c02",light:Ni[500],dark:Ni[900]}}function t1(n){const{mode:o="light",contrastThreshold:i=3,tonalOffset:a=.2}=n,l=Se(n,qx),c=n.primary||Yx(o),p=n.secondary||Qx(o),f=n.error||Xx(o),h=n.info||Zx(o),g=n.success||Jx(o),v=n.warning||e1(o);function b(y){return Ht.getContrastRatio(y,Ju.text.primary)>=i?Ju.text.primary:pm.text.primary}const S=({color:y,name:M,mainShade:F=500,lightShade:H=300,darkShade:A=700})=>{if(y=O({},y),!y.main&&y[F]&&(y.main=y[F]),!y.hasOwnProperty("main"))throw new Error(Qi(11,M?` (${M})`:"",F));if(typeof y.main!="string")throw new Error(Qi(12,M?` (${M})`:"",JSON.stringify(y.main)));return fm(y,"light",H,a),fm(y,"dark",A,a),y.contrastText||(y.contrastText=b(y.main)),y},_={dark:Ju,light:pm};return Dn(O({common:O({},Yi),mode:o,primary:S({color:c,name:"primary"}),secondary:S({color:p,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:S({color:f,name:"error"}),warning:S({color:v,name:"warning"}),info:S({color:h,name:"info"}),success:S({color:g,name:"success"}),grey:Yv,contrastThreshold:i,getContrastText:b,augmentColor:S,tonalOffset:a},_[o]),l)}const n1=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function r1(n){return Math.round(n*1e5)/1e5}const mm={textTransform:"uppercase"},hm='"Roboto", "Helvetica", "Arial", sans-serif';function o1(n,o){const i=typeof o=="function"?o(n):o,{fontFamily:a=hm,fontSize:l=14,fontWeightLight:c=300,fontWeightRegular:p=400,fontWeightMedium:f=500,fontWeightBold:h=700,htmlFontSize:g=16,allVariants:v,pxToRem:b}=i,S=Se(i,n1),_=l/14,C=b||(F=>`${F/g*_}rem`),y=(F,H,A,N,k)=>O({fontFamily:a,fontWeight:F,fontSize:C(H),lineHeight:A},a===hm?{letterSpacing:`${r1(N/H)}em`}:{},k,v),M={h1:y(c,96,1.167,-1.5),h2:y(c,60,1.2,-.5),h3:y(p,48,1.167,0),h4:y(p,34,1.235,.25),h5:y(p,24,1.334,0),h6:y(f,20,1.6,.15),subtitle1:y(p,16,1.75,.15),subtitle2:y(f,14,1.57,.1),body1:y(p,16,1.5,.15),body2:y(p,14,1.43,.15),button:y(f,14,1.75,.4,mm),caption:y(p,12,1.66,.4),overline:y(p,12,2.66,1,mm),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Dn(O({htmlFontSize:g,pxToRem:C,fontFamily:a,fontSize:l,fontWeightLight:c,fontWeightRegular:p,fontWeightMedium:f,fontWeightBold:h},M),S,{clone:!1})}const i1=.2,s1=.14,a1=.12;function Be(...n){return[`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${i1})`,`${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${s1})`,`${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${a1})`].join(",")}const l1=["none",Be(0,2,1,-1,0,1,1,0,0,1,3,0),Be(0,3,1,-2,0,2,2,0,0,1,5,0),Be(0,3,3,-2,0,3,4,0,0,1,8,0),Be(0,2,4,-1,0,4,5,0,0,1,10,0),Be(0,3,5,-1,0,5,8,0,0,1,14,0),Be(0,3,5,-1,0,6,10,0,0,1,18,0),Be(0,4,5,-2,0,7,10,1,0,2,16,1),Be(0,5,5,-3,0,8,10,1,0,3,14,2),Be(0,5,6,-3,0,9,12,1,0,3,16,2),Be(0,6,6,-3,0,10,14,1,0,4,18,3),Be(0,6,7,-4,0,11,15,1,0,4,20,3),Be(0,7,8,-4,0,12,17,2,0,5,22,4),Be(0,7,8,-4,0,13,19,2,0,5,24,4),Be(0,7,9,-4,0,14,21,2,0,5,26,4),Be(0,8,9,-5,0,15,22,2,0,6,28,5),Be(0,8,10,-5,0,16,24,2,0,6,30,5),Be(0,8,11,-5,0,17,26,2,0,6,32,5),Be(0,9,11,-5,0,18,28,2,0,7,34,6),Be(0,9,12,-6,0,19,29,2,0,7,36,6),Be(0,10,13,-6,0,20,31,3,0,8,38,7),Be(0,10,13,-6,0,21,33,3,0,8,40,7),Be(0,10,14,-6,0,22,35,3,0,8,42,7),Be(0,11,14,-7,0,23,36,3,0,9,44,8),Be(0,11,15,-7,0,24,38,3,0,9,46,8)],u1=["duration","easing","delay"],c1={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},d1={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function gm(n){return`${Math.round(n)}ms`}function p1(n){if(!n)return 0;const o=n/36;return Math.round((4+15*o**.25+o/5)*10)}function f1(n){const o=O({},c1,n.easing),i=O({},d1,n.duration);return O({getAutoHeightDuration:p1,create:(l=["all"],c={})=>{const{duration:p=i.standard,easing:f=o.easeInOut,delay:h=0}=c;return Se(c,u1),(Array.isArray(l)?l:[l]).map(g=>`${g} ${typeof p=="string"?p:gm(p)} ${f} ${typeof h=="string"?h:gm(h)}`).join(",")}},n,{easing:o,duration:i})}const m1={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},h1=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Wc(n={},...o){const{mixins:i={},palette:a={},transitions:l={},typography:c={}}=n,p=Se(n,h1);if(n.vars&&n.generateCssVars===void 0)throw new Error(Qi(18));const f=t1(a),h=Lc(n);let g=Dn(h,{mixins:Hx(h.breakpoints,i),palette:f,shadows:l1.slice(),typography:o1(f,c),transitions:f1(l),zIndex:O({},m1)});return g=Dn(g,p),g=o.reduce((v,b)=>Dn(v,b),g),g.unstable_sxConfig=O({},ss,p==null?void 0:p.unstable_sxConfig),g.unstable_sx=function(b){return as({sx:b,theme:this})},g}const Uc=Wc();function Qr(){const n=jc(Uc);return n[zo]||n}var Ur={},ec={exports:{}},vm;function g1(){return vm||(vm=1,function(n){function o(){return n.exports=o=Object.assign?Object.assign.bind():function(i){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var c in l)({}).hasOwnProperty.call(l,c)&&(i[c]=l[c])}return i},n.exports.__esModule=!0,n.exports.default=n.exports,o.apply(null,arguments)}n.exports=o,n.exports.__esModule=!0,n.exports.default=n.exports}(ec)),ec.exports}var tc={exports:{}},ym;function v1(){return ym||(ym=1,function(n){function o(i,a){if(i==null)return{};var l={};for(var c in i)if({}.hasOwnProperty.call(i,c)){if(a.indexOf(c)!==-1)continue;l[c]=i[c]}return l}n.exports=o,n.exports.__esModule=!0,n.exports.default=n.exports}(tc)),tc.exports}const Ih=er(X0),y1=er(Z0),x1=er(iy),w1=er(ax),b1=er(Ky),S1=er(Zy);var xm;function k1(){if(xm)return Ur;xm=1;var n=ol();Object.defineProperty(Ur,"__esModule",{value:!0}),Ur.default=N,Ur.shouldForwardProp=C,Ur.systemDefaultTheme=void 0;var o=n(g1()),i=n(v1()),a=b(Ih),l=y1;n(x1),n(w1);var c=n(b1),p=n(S1);const f=["ownerState"],h=["variants"],g=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function v(k){if(typeof WeakMap!="function")return null;var B=new WeakMap,x=new WeakMap;return(v=function(z){return z?x:B})(k)}function b(k,B){if(k&&k.__esModule)return k;if(k===null||typeof k!="object"&&typeof k!="function")return{default:k};var x=v(B);if(x&&x.has(k))return x.get(k);var z={__proto__:null},W=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var L in k)if(L!=="default"&&Object.prototype.hasOwnProperty.call(k,L)){var q=W?Object.getOwnPropertyDescriptor(k,L):null;q&&(q.get||q.set)?Object.defineProperty(z,L,q):z[L]=k[L]}return z.default=k,x&&x.set(k,z),z}function S(k){return Object.keys(k).length===0}function _(k){return typeof k=="string"&&k.charCodeAt(0)>96}function C(k){return k!=="ownerState"&&k!=="theme"&&k!=="sx"&&k!=="as"}const y=Ur.systemDefaultTheme=(0,c.default)(),M=k=>k&&k.charAt(0).toLowerCase()+k.slice(1);function F({defaultTheme:k,theme:B,themeId:x}){return S(B)?k:B[x]||B}function H(k){return k?(B,x)=>x[k]:null}function A(k,B){let{ownerState:x}=B,z=(0,i.default)(B,f);const W=typeof k=="function"?k((0,o.default)({ownerState:x},z)):k;if(Array.isArray(W))return W.flatMap(L=>A(L,(0,o.default)({ownerState:x},z)));if(W&&typeof W=="object"&&Array.isArray(W.variants)){const{variants:L=[]}=W;let oe=(0,i.default)(W,h);return L.forEach(ee=>{let re=!0;typeof ee.props=="function"?re=ee.props((0,o.default)({ownerState:x},z,x)):Object.keys(ee.props).forEach(ne=>{(x==null?void 0:x[ne])!==ee.props[ne]&&z[ne]!==ee.props[ne]&&(re=!1)}),re&&(Array.isArray(oe)||(oe=[oe]),oe.push(typeof ee.style=="function"?ee.style((0,o.default)({ownerState:x},z,x)):ee.style))}),oe}return W}function N(k={}){const{themeId:B,defaultTheme:x=y,rootShouldForwardProp:z=C,slotShouldForwardProp:W=C}=k,L=q=>(0,p.default)((0,o.default)({},q,{theme:F((0,o.default)({},q,{defaultTheme:x,themeId:B}))}));return L.__mui_systemSx=!0,(q,oe={})=>{(0,a.internal_processStyles)(q,le=>le.filter(ye=>!(ye!=null&&ye.__mui_systemSx)));const{name:ee,slot:re,skipVariantsResolver:ne,skipSx:X,overridesResolver:te=H(M(re))}=oe,j=(0,i.default)(oe,g),Q=ne!==void 0?ne:re&&re!=="Root"&&re!=="root"||!1,Z=X||!1;let R,U=C;re==="Root"||re==="root"?U=z:re?U=W:_(q)&&(U=void 0);const fe=(0,a.default)(q,(0,o.default)({shouldForwardProp:U,label:R},j)),ae=le=>typeof le=="function"&&le.__emotion_real!==le||(0,l.isPlainObject)(le)?ye=>A(le,(0,o.default)({},ye,{theme:F({theme:ye.theme,defaultTheme:x,themeId:B})})):le,pe=(le,...ye)=>{let he=ae(le);const me=ye?ye.map(ae):[];ee&&te&&me.push(tt=>{const Me=F((0,o.default)({},tt,{defaultTheme:x,themeId:B}));if(!Me.components||!Me.components[ee]||!Me.components[ee].styleOverrides)return null;const qe=Me.components[ee].styleOverrides,nt={};return Object.entries(qe).forEach(([Gt,qt])=>{nt[Gt]=A(qt,(0,o.default)({},tt,{theme:Me}))}),te(tt,nt)}),ee&&!Q&&me.push(tt=>{var Me;const qe=F((0,o.default)({},tt,{defaultTheme:x,themeId:B})),nt=qe==null||(Me=qe.components)==null||(Me=Me[ee])==null?void 0:Me.variants;return A({variants:nt},(0,o.default)({},tt,{theme:qe}))}),Z||me.push(L);const Oe=me.length-ye.length;if(Array.isArray(le)&&Oe>0){const tt=new Array(Oe).fill("");he=[...le,...tt],he.raw=[...le.raw,...tt]}const He=fe(he,...me);return q.muiName&&(He.muiName=q.muiName),He};return fe.withConfig&&(pe.withConfig=fe.withConfig),pe}}return Ur}var C1=k1();const E1=Yr(C1);function T1(n){return n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"}const Hc=n=>T1(n)&&n!=="classes",Ae=E1({themeId:zo,defaultTheme:Uc,rootShouldForwardProp:Hc}),P1=["theme"];function R1(n){let{theme:o}=n,i=Se(n,P1);const a=o[zo];let l=a||o;return typeof o!="function"&&(a&&!a.vars?l=O({},a,{vars:null}):o&&!o.vars&&(l=O({},o,{vars:null}))),V.jsx(Ux,O({},i,{themeId:a?zo:void 0,theme:l}))}const wm=n=>{let o;return n<1?o=5.11916*n**2:o=4.5*Math.log(n+1)+2,(o/100).toFixed(2)};function et(n){return Wx(n)}function _1(n){return it("MuiSvgIcon",n)}Je("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const O1=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],M1=n=>{const{color:o,fontSize:i,classes:a}=n,l={root:["root",o!=="inherit"&&`color${ze(o)}`,`fontSize${ze(i)}`]};return lt(l,_1,a)},I1=Ae("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:i}=n;return[o.root,i.color!=="inherit"&&o[`color${ze(i.color)}`],o[`fontSize${ze(i.fontSize)}`]]}})(({theme:n,ownerState:o})=>{var i,a,l,c,p,f,h,g,v,b,S,_,C;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:o.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(i=n.transitions)==null||(a=i.create)==null?void 0:a.call(i,"fill",{duration:(l=n.transitions)==null||(l=l.duration)==null?void 0:l.shorter}),fontSize:{inherit:"inherit",small:((c=n.typography)==null||(p=c.pxToRem)==null?void 0:p.call(c,20))||"1.25rem",medium:((f=n.typography)==null||(h=f.pxToRem)==null?void 0:h.call(f,24))||"1.5rem",large:((g=n.typography)==null||(v=g.pxToRem)==null?void 0:v.call(g,35))||"2.1875rem"}[o.fontSize],color:(b=(S=(n.vars||n).palette)==null||(S=S[o.color])==null?void 0:S.main)!=null?b:{action:(_=(n.vars||n).palette)==null||(_=_.action)==null?void 0:_.active,disabled:(C=(n.vars||n).palette)==null||(C=C.action)==null?void 0:C.disabled,inherit:void 0}[o.color]}}),hc=P.forwardRef(function(o,i){const a=et({props:o,name:"MuiSvgIcon"}),{children:l,className:c,color:p="inherit",component:f="svg",fontSize:h="medium",htmlColor:g,inheritViewBox:v=!1,titleAccess:b,viewBox:S="0 0 24 24"}=a,_=Se(a,O1),C=P.isValidElement(l)&&l.type==="svg",y=O({},a,{color:p,component:f,fontSize:h,instanceFontSize:o.fontSize,inheritViewBox:v,viewBox:S,hasSvgAsChild:C}),M={};v||(M.viewBox=S);const F=M1(y);return V.jsxs(I1,O({as:f,className:Ce(F.root,c),focusable:"false",color:g,"aria-hidden":b?void 0:!0,role:b?"img":void 0,ref:i},M,_,C&&l.props,{ownerState:y,children:[C?l.props.children:l,b?V.jsx("title",{children:b}):null]}))});hc.muiName="SvgIcon";function $1(n,o){function i(a,l){return V.jsx(hc,O({"data-testid":`${o}Icon`,ref:l},a,{children:n}))}return i.muiName=hc.muiName,P.memo(P.forwardRef(i))}const N1={configure:n=>{Bc.configure(n)}},z1=Object.freeze(Object.defineProperty({__proto__:null,capitalize:ze,createChainedFunction:pc,createSvgIcon:$1,debounce:kh,deprecatedPropType:mx,isMuiElement:hx,ownerDocument:Cn,ownerWindow:Vo,requirePropFactory:gx,setRef:ja,unstable_ClassNameGenerator:N1,unstable_useEnhancedEffect:Tr,unstable_useId:Ch,unsupportedProp:yx,useControlled:Eh,useEventCallback:Zn,useForkRef:At,useIsFocusVisible:Fc},Symbol.toStringTag,{value:"Module"}));function gc(n,o){return gc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,a){return i.__proto__=a,i},gc(n,o)}function $h(n,o){n.prototype=Object.create(o.prototype),n.prototype.constructor=n,gc(n,o)}var Nh=Ym();const Ta=Yr(Nh),bm={disabled:!1},Ba=kn.createContext(null);var A1=function(o){return o.scrollTop},Hi="unmounted",Hr="exited",Vr="entering",Oo="entered",vc="exiting",En=function(n){$h(o,n);function o(a,l){var c;c=n.call(this,a,l)||this;var p=l,f=p&&!p.isMounting?a.enter:a.appear,h;return c.appearStatus=null,a.in?f?(h=Hr,c.appearStatus=Vr):h=Oo:a.unmountOnExit||a.mountOnEnter?h=Hi:h=Hr,c.state={status:h},c.nextCallback=null,c}o.getDerivedStateFromProps=function(l,c){var p=l.in;return p&&c.status===Hi?{status:Hr}:null};var i=o.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(l){var c=null;if(l!==this.props){var p=this.state.status;this.props.in?p!==Vr&&p!==Oo&&(c=Vr):(p===Vr||p===Oo)&&(c=vc)}this.updateStatus(!1,c)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var l=this.props.timeout,c,p,f;return c=p=f=l,l!=null&&typeof l!="number"&&(c=l.exit,p=l.enter,f=l.appear!==void 0?l.appear:p),{exit:c,enter:p,appear:f}},i.updateStatus=function(l,c){if(l===void 0&&(l=!1),c!==null)if(this.cancelNextCallback(),c===Vr){if(this.props.unmountOnExit||this.props.mountOnEnter){var p=this.props.nodeRef?this.props.nodeRef.current:Ta.findDOMNode(this);p&&A1(p)}this.performEnter(l)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Hr&&this.setState({status:Hi})},i.performEnter=function(l){var c=this,p=this.props.enter,f=this.context?this.context.isMounting:l,h=this.props.nodeRef?[f]:[Ta.findDOMNode(this),f],g=h[0],v=h[1],b=this.getTimeouts(),S=f?b.appear:b.enter;if(!l&&!p||bm.disabled){this.safeSetState({status:Oo},function(){c.props.onEntered(g)});return}this.props.onEnter(g,v),this.safeSetState({status:Vr},function(){c.props.onEntering(g,v),c.onTransitionEnd(S,function(){c.safeSetState({status:Oo},function(){c.props.onEntered(g,v)})})})},i.performExit=function(){var l=this,c=this.props.exit,p=this.getTimeouts(),f=this.props.nodeRef?void 0:Ta.findDOMNode(this);if(!c||bm.disabled){this.safeSetState({status:Hr},function(){l.props.onExited(f)});return}this.props.onExit(f),this.safeSetState({status:vc},function(){l.props.onExiting(f),l.onTransitionEnd(p.exit,function(){l.safeSetState({status:Hr},function(){l.props.onExited(f)})})})},i.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(l,c){c=this.setNextCallback(c),this.setState(l,c)},i.setNextCallback=function(l){var c=this,p=!0;return this.nextCallback=function(f){p&&(p=!1,c.nextCallback=null,l(f))},this.nextCallback.cancel=function(){p=!1},this.nextCallback},i.onTransitionEnd=function(l,c){this.setNextCallback(c);var p=this.props.nodeRef?this.props.nodeRef.current:Ta.findDOMNode(this),f=l==null&&!this.props.addEndListener;if(!p||f){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var h=this.props.nodeRef?[this.nextCallback]:[p,this.nextCallback],g=h[0],v=h[1];this.props.addEndListener(g,v)}l!=null&&setTimeout(this.nextCallback,l)},i.render=function(){var l=this.state.status;if(l===Hi)return null;var c=this.props,p=c.children;c.in,c.mountOnEnter,c.unmountOnExit,c.appear,c.enter,c.exit,c.timeout,c.addEndListener,c.onEnter,c.onEntering,c.onEntered,c.onExit,c.onExiting,c.onExited,c.nodeRef;var f=Se(c,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return kn.createElement(Ba.Provider,{value:null},typeof p=="function"?p(l,f):kn.cloneElement(kn.Children.only(p),f))},o}(kn.Component);En.contextType=Ba;En.propTypes={};function _o(){}En.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:_o,onEntering:_o,onEntered:_o,onExit:_o,onExiting:_o,onExited:_o};En.UNMOUNTED=Hi;En.EXITED=Hr;En.ENTERING=Vr;En.ENTERED=Oo;En.EXITING=vc;function L1(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Vc(n,o){var i=function(c){return o&&P.isValidElement(c)?o(c):c},a=Object.create(null);return n&&P.Children.map(n,function(l){return l}).forEach(function(l){a[l.key]=i(l)}),a}function D1(n,o){n=n||{},o=o||{};function i(v){return v in o?o[v]:n[v]}var a=Object.create(null),l=[];for(var c in n)c in o?l.length&&(a[c]=l,l=[]):l.push(c);var p,f={};for(var h in o){if(a[h])for(p=0;p<a[h].length;p++){var g=a[h][p];f[a[h][p]]=i(g)}f[h]=i(h)}for(p=0;p<l.length;p++)f[l[p]]=i(l[p]);return f}function Kr(n,o,i){return i[o]!=null?i[o]:n.props[o]}function j1(n,o){return Vc(n.children,function(i){return P.cloneElement(i,{onExited:o.bind(null,i),in:!0,appear:Kr(i,"appear",n),enter:Kr(i,"enter",n),exit:Kr(i,"exit",n)})})}function B1(n,o,i){var a=Vc(n.children),l=D1(o,a);return Object.keys(l).forEach(function(c){var p=l[c];if(P.isValidElement(p)){var f=c in o,h=c in a,g=o[c],v=P.isValidElement(g)&&!g.props.in;h&&(!f||v)?l[c]=P.cloneElement(p,{onExited:i.bind(null,p),in:!0,exit:Kr(p,"exit",n),enter:Kr(p,"enter",n)}):!h&&f&&!v?l[c]=P.cloneElement(p,{in:!1}):h&&f&&P.isValidElement(g)&&(l[c]=P.cloneElement(p,{onExited:i.bind(null,p),in:g.props.in,exit:Kr(p,"exit",n),enter:Kr(p,"enter",n)}))}}),l}var F1=Object.values||function(n){return Object.keys(n).map(function(o){return n[o]})},W1={component:"div",childFactory:function(o){return o}},Kc=function(n){$h(o,n);function o(a,l){var c;c=n.call(this,a,l)||this;var p=c.handleExited.bind(L1(c));return c.state={contextValue:{isMounting:!0},handleExited:p,firstRender:!0},c}var i=o.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(l,c){var p=c.children,f=c.handleExited,h=c.firstRender;return{children:h?j1(l,f):B1(l,p,f),firstRender:!1}},i.handleExited=function(l,c){var p=Vc(this.props.children);l.key in p||(l.props.onExited&&l.props.onExited(c),this.mounted&&this.setState(function(f){var h=O({},f.children);return delete h[l.key],{children:h}}))},i.render=function(){var l=this.props,c=l.component,p=l.childFactory,f=Se(l,["component","childFactory"]),h=this.state.contextValue,g=F1(this.state.children).map(p);return delete f.appear,delete f.enter,delete f.exit,c===null?kn.createElement(Ba.Provider,{value:h},g):kn.createElement(Ba.Provider,{value:h},kn.createElement(c,f,g))},o}(kn.Component);Kc.propTypes={};Kc.defaultProps=W1;const Gc=n=>n.scrollTop;function Lo(n,o){var i,a;const{timeout:l,easing:c,style:p={}}=n;return{duration:(i=p.transitionDuration)!=null?i:typeof l=="number"?l:l[o.mode]||0,easing:(a=p.transitionTimingFunction)!=null?a:typeof c=="object"?c[o.mode]:c,delay:p.transitionDelay}}function U1(n){return it("MuiPaper",n)}Je("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const H1=["className","component","elevation","square","variant"],V1=n=>{const{square:o,elevation:i,variant:a,classes:l}=n,c={root:["root",a,!o&&"rounded",a==="elevation"&&`elevation${i}`]};return lt(c,U1,l)},K1=Ae("div",{name:"MuiPaper",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:i}=n;return[o.root,o[i.variant],!i.square&&o.rounded,i.variant==="elevation"&&o[`elevation${i.elevation}`]]}})(({theme:n,ownerState:o})=>{var i;return O({backgroundColor:(n.vars||n).palette.background.paper,color:(n.vars||n).palette.text.primary,transition:n.transitions.create("box-shadow")},!o.square&&{borderRadius:n.shape.borderRadius},o.variant==="outlined"&&{border:`1px solid ${(n.vars||n).palette.divider}`},o.variant==="elevation"&&O({boxShadow:(n.vars||n).shadows[o.elevation]},!n.vars&&n.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Ht.alpha("#fff",wm(o.elevation))}, ${Ht.alpha("#fff",wm(o.elevation))})`},n.vars&&{backgroundImage:(i=n.vars.overlays)==null?void 0:i[o.elevation]}))}),qc=P.forwardRef(function(o,i){const a=et({props:o,name:"MuiPaper"}),{className:l,component:c="div",elevation:p=1,square:f=!1,variant:h="elevation"}=a,g=Se(a,H1),v=O({},a,{component:c,elevation:p,square:f,variant:h}),b=V1(v);return V.jsx(K1,O({as:c,ownerState:v,className:Ce(b.root,l),ref:i},g))});function G1(n){const{className:o,classes:i,pulsate:a=!1,rippleX:l,rippleY:c,rippleSize:p,in:f,onExited:h,timeout:g}=n,[v,b]=P.useState(!1),S=Ce(o,i.ripple,i.rippleVisible,a&&i.ripplePulsate),_={width:p,height:p,top:-(p/2)+c,left:-(p/2)+l},C=Ce(i.child,v&&i.childLeaving,a&&i.childPulsate);return!f&&!v&&b(!0),P.useEffect(()=>{if(!f&&h!=null){const y=setTimeout(h,g);return()=>{clearTimeout(y)}}},[h,f,g]),V.jsx("span",{className:S,style:_,children:V.jsx("span",{className:C})})}const on=Je("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),q1=["center","classes","className"];let il=n=>n,Sm,km,Cm,Em;const yc=550,Y1=80,Q1=qa(Sm||(Sm=il`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),X1=qa(km||(km=il`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Z1=qa(Cm||(Cm=il`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),J1=Ae("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ew=Ae(G1,{name:"MuiTouchRipple",slot:"Ripple"})(Em||(Em=il`
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
`),on.rippleVisible,Q1,yc,({theme:n})=>n.transitions.easing.easeInOut,on.ripplePulsate,({theme:n})=>n.transitions.duration.shorter,on.child,on.childLeaving,X1,yc,({theme:n})=>n.transitions.easing.easeInOut,on.childPulsate,Z1,({theme:n})=>n.transitions.easing.easeInOut),tw=P.forwardRef(function(o,i){const a=et({props:o,name:"MuiTouchRipple"}),{center:l=!1,classes:c={},className:p}=a,f=Se(a,q1),[h,g]=P.useState([]),v=P.useRef(0),b=P.useRef(null);P.useEffect(()=>{b.current&&(b.current(),b.current=null)},[h]);const S=P.useRef(!1),_=Mo(),C=P.useRef(null),y=P.useRef(null),M=P.useCallback(N=>{const{pulsate:k,rippleX:B,rippleY:x,rippleSize:z,cb:W}=N;g(L=>[...L,V.jsx(ew,{classes:{ripple:Ce(c.ripple,on.ripple),rippleVisible:Ce(c.rippleVisible,on.rippleVisible),ripplePulsate:Ce(c.ripplePulsate,on.ripplePulsate),child:Ce(c.child,on.child),childLeaving:Ce(c.childLeaving,on.childLeaving),childPulsate:Ce(c.childPulsate,on.childPulsate)},timeout:yc,pulsate:k,rippleX:B,rippleY:x,rippleSize:z},v.current)]),v.current+=1,b.current=W},[c]),F=P.useCallback((N={},k={},B=()=>{})=>{const{pulsate:x=!1,center:z=l||k.pulsate,fakeElement:W=!1}=k;if((N==null?void 0:N.type)==="mousedown"&&S.current){S.current=!1;return}(N==null?void 0:N.type)==="touchstart"&&(S.current=!0);const L=W?null:y.current,q=L?L.getBoundingClientRect():{width:0,height:0,left:0,top:0};let oe,ee,re;if(z||N===void 0||N.clientX===0&&N.clientY===0||!N.clientX&&!N.touches)oe=Math.round(q.width/2),ee=Math.round(q.height/2);else{const{clientX:ne,clientY:X}=N.touches&&N.touches.length>0?N.touches[0]:N;oe=Math.round(ne-q.left),ee=Math.round(X-q.top)}if(z)re=Math.sqrt((2*q.width**2+q.height**2)/3),re%2===0&&(re+=1);else{const ne=Math.max(Math.abs((L?L.clientWidth:0)-oe),oe)*2+2,X=Math.max(Math.abs((L?L.clientHeight:0)-ee),ee)*2+2;re=Math.sqrt(ne**2+X**2)}N!=null&&N.touches?C.current===null&&(C.current=()=>{M({pulsate:x,rippleX:oe,rippleY:ee,rippleSize:re,cb:B})},_.start(Y1,()=>{C.current&&(C.current(),C.current=null)})):M({pulsate:x,rippleX:oe,rippleY:ee,rippleSize:re,cb:B})},[l,M,_]),H=P.useCallback(()=>{F({},{pulsate:!0})},[F]),A=P.useCallback((N,k)=>{if(_.clear(),(N==null?void 0:N.type)==="touchend"&&C.current){C.current(),C.current=null,_.start(0,()=>{A(N,k)});return}C.current=null,g(B=>B.length>0?B.slice(1):B),b.current=k},[_]);return P.useImperativeHandle(i,()=>({pulsate:H,start:F,stop:A}),[H,F,A]),V.jsx(J1,O({className:Ce(on.root,c.root,p),ref:y},f,{children:V.jsx(Kc,{component:null,exit:!0,children:h})}))});function nw(n){return it("MuiButtonBase",n)}const rw=Je("MuiButtonBase",["root","disabled","focusVisible"]),ow=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],iw=n=>{const{disabled:o,focusVisible:i,focusVisibleClassName:a,classes:l}=n,p=lt({root:["root",o&&"disabled",i&&"focusVisible"]},nw,l);return i&&a&&(p.root+=` ${a}`),p},sw=Ae("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(n,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${rw.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),zh=P.forwardRef(function(o,i){const a=et({props:o,name:"MuiButtonBase"}),{action:l,centerRipple:c=!1,children:p,className:f,component:h="button",disabled:g=!1,disableRipple:v=!1,disableTouchRipple:b=!1,focusRipple:S=!1,LinkComponent:_="a",onBlur:C,onClick:y,onContextMenu:M,onDragLeave:F,onFocus:H,onFocusVisible:A,onKeyDown:N,onKeyUp:k,onMouseDown:B,onMouseLeave:x,onMouseUp:z,onTouchEnd:W,onTouchMove:L,onTouchStart:q,tabIndex:oe=0,TouchRippleProps:ee,touchRippleRef:re,type:ne}=a,X=Se(a,ow),te=P.useRef(null),j=P.useRef(null),Q=At(j,re),{isFocusVisibleRef:Z,onFocus:R,onBlur:U,ref:fe}=Fc(),[ae,pe]=P.useState(!1);g&&ae&&pe(!1),P.useImperativeHandle(l,()=>({focusVisible:()=>{pe(!0),te.current.focus()}}),[]);const[le,ye]=P.useState(!1);P.useEffect(()=>{ye(!0)},[]);const he=le&&!v&&!g;P.useEffect(()=>{ae&&S&&!v&&le&&j.current.pulsate()},[v,S,ae,le]);function me(we,ut,mn=b){return Zn(Pn=>(ut&&ut(Pn),!mn&&j.current&&j.current[we](Pn),!0))}const Oe=me("start",B),He=me("stop",M),tt=me("stop",F),Me=me("stop",z),qe=me("stop",we=>{ae&&we.preventDefault(),x&&x(we)}),nt=me("start",q),Gt=me("stop",W),qt=me("stop",L),Yt=me("stop",we=>{U(we),Z.current===!1&&pe(!1),C&&C(we)},!1),Tn=Zn(we=>{te.current||(te.current=we.currentTarget),R(we),Z.current===!0&&(pe(!0),A&&A(we)),H&&H(we)}),Ye=()=>{const we=te.current;return h&&h!=="button"&&!(we.tagName==="A"&&we.href)},ft=P.useRef(!1),Lt=Zn(we=>{S&&!ft.current&&ae&&j.current&&we.key===" "&&(ft.current=!0,j.current.stop(we,()=>{j.current.start(we)})),we.target===we.currentTarget&&Ye()&&we.key===" "&&we.preventDefault(),N&&N(we),we.target===we.currentTarget&&Ye()&&we.key==="Enter"&&!g&&(we.preventDefault(),y&&y(we))}),pn=Zn(we=>{S&&we.key===" "&&j.current&&ae&&!we.defaultPrevented&&(ft.current=!1,j.current.stop(we,()=>{j.current.pulsate(we)})),k&&k(we),y&&we.target===we.currentTarget&&Ye()&&we.key===" "&&!we.defaultPrevented&&y(we)});let Tt=h;Tt==="button"&&(X.href||X.to)&&(Tt=_);const kt={};Tt==="button"?(kt.type=ne===void 0?"button":ne,kt.disabled=g):(!X.href&&!X.to&&(kt.role="button"),g&&(kt["aria-disabled"]=g));const Qt=At(i,fe,te),Xt=O({},a,{centerRipple:c,component:h,disabled:g,disableRipple:v,disableTouchRipple:b,focusRipple:S,tabIndex:oe,focusVisible:ae}),fn=iw(Xt);return V.jsxs(sw,O({as:Tt,className:Ce(fn.root,f),ownerState:Xt,onBlur:Yt,onClick:y,onContextMenu:He,onFocus:Tn,onKeyDown:Lt,onKeyUp:pn,onMouseDown:Oe,onMouseLeave:qe,onMouseUp:Me,onDragLeave:tt,onTouchEnd:Gt,onTouchMove:qt,onTouchStart:nt,ref:Qt,tabIndex:g?-1:oe,type:ne},kt,X,{children:[p,he?V.jsx(tw,O({ref:Q,center:c},ee)):null]}))});function aw(n){return it("MuiIconButton",n)}const lw=Je("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),uw=["edge","children","className","color","disabled","disableFocusRipple","size"],cw=n=>{const{classes:o,disabled:i,color:a,edge:l,size:c}=n,p={root:["root",i&&"disabled",a!=="default"&&`color${ze(a)}`,l&&`edge${ze(l)}`,`size${ze(c)}`]};return lt(p,aw,o)},dw=Ae(zh,{name:"MuiIconButton",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:i}=n;return[o.root,i.color!=="default"&&o[`color${ze(i.color)}`],i.edge&&o[`edge${ze(i.edge)}`],o[`size${ze(i.size)}`]]}})(({theme:n,ownerState:o})=>O({textAlign:"center",flex:"0 0 auto",fontSize:n.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(n.vars||n).palette.action.active,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:n.vars?`rgba(${n.vars.palette.action.activeChannel} / ${n.vars.palette.action.hoverOpacity})`:Ht.alpha(n.palette.action.active,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.edge==="start"&&{marginLeft:o.size==="small"?-3:-12},o.edge==="end"&&{marginRight:o.size==="small"?-3:-12}),({theme:n,ownerState:o})=>{var i;const a=(i=(n.vars||n).palette)==null?void 0:i[o.color];return O({},o.color==="inherit"&&{color:"inherit"},o.color!=="inherit"&&o.color!=="default"&&O({color:a==null?void 0:a.main},!o.disableRipple&&{"&:hover":O({},a&&{backgroundColor:n.vars?`rgba(${a.mainChannel} / ${n.vars.palette.action.hoverOpacity})`:Ht.alpha(a.main,n.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),o.size==="small"&&{padding:5,fontSize:n.typography.pxToRem(18)},o.size==="large"&&{padding:12,fontSize:n.typography.pxToRem(28)},{[`&.${lw.disabled}`]:{backgroundColor:"transparent",color:(n.vars||n).palette.action.disabled}})}),xc=P.forwardRef(function(o,i){const a=et({props:o,name:"MuiIconButton"}),{edge:l=!1,children:c,className:p,color:f="default",disabled:h=!1,disableFocusRipple:g=!1,size:v="medium"}=a,b=Se(a,uw),S=O({},a,{edge:l,color:f,disabled:h,disableFocusRipple:g,size:v}),_=cw(S);return V.jsx(dw,O({className:Ce(_.root,p),centerRipple:!0,focusRipple:!g,disabled:h,ref:i},b,{ownerState:S,children:c}))});function pw(n){return it("MuiTypography",n)}Je("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const fw=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],mw=n=>{const{align:o,gutterBottom:i,noWrap:a,paragraph:l,variant:c,classes:p}=n,f={root:["root",c,n.align!=="inherit"&&`align${ze(o)}`,i&&"gutterBottom",a&&"noWrap",l&&"paragraph"]};return lt(f,pw,p)},hw=Ae("span",{name:"MuiTypography",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:i}=n;return[o.root,i.variant&&o[i.variant],i.align!=="inherit"&&o[`align${ze(i.align)}`],i.noWrap&&o.noWrap,i.gutterBottom&&o.gutterBottom,i.paragraph&&o.paragraph]}})(({theme:n,ownerState:o})=>O({margin:0},o.variant==="inherit"&&{font:"inherit"},o.variant!=="inherit"&&n.typography[o.variant],o.align!=="inherit"&&{textAlign:o.align},o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.gutterBottom&&{marginBottom:"0.35em"},o.paragraph&&{marginBottom:16})),Tm={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},gw={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},vw=n=>gw[n]||n,Cr=P.forwardRef(function(o,i){const a=et({props:o,name:"MuiTypography"}),l=vw(a.color),c=nl(O({},a,{color:l})),{align:p="inherit",className:f,component:h,gutterBottom:g=!1,noWrap:v=!1,paragraph:b=!1,variant:S="body1",variantMapping:_=Tm}=c,C=Se(c,fw),y=O({},c,{align:p,color:l,className:f,component:h,gutterBottom:g,noWrap:v,paragraph:b,variant:S,variantMapping:_}),M=h||(b?"p":_[S]||Tm[S])||"span",F=mw(y);return V.jsx(hw,O({as:M,ref:i,ownerState:y,className:Ce(F.root,f)},C))});function yw(n){return it("MuiAppBar",n)}Je("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const xw=["className","color","enableColorOnDark","position"],ww=n=>{const{color:o,position:i,classes:a}=n,l={root:["root",`color${ze(o)}`,`position${ze(i)}`]};return lt(l,yw,a)},Pa=(n,o)=>n?`${n==null?void 0:n.replace(")","")}, ${o})`:o,bw=Ae(qc,{name:"MuiAppBar",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:i}=n;return[o.root,o[`position${ze(i.position)}`],o[`color${ze(i.color)}`]]}})(({theme:n,ownerState:o})=>{const i=n.palette.mode==="light"?n.palette.grey[100]:n.palette.grey[900];return O({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},o.position==="fixed"&&{position:"fixed",zIndex:(n.vars||n).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},o.position==="absolute"&&{position:"absolute",zIndex:(n.vars||n).zIndex.appBar,top:0,left:"auto",right:0},o.position==="sticky"&&{position:"sticky",zIndex:(n.vars||n).zIndex.appBar,top:0,left:"auto",right:0},o.position==="static"&&{position:"static"},o.position==="relative"&&{position:"relative"},!n.vars&&O({},o.color==="default"&&{backgroundColor:i,color:n.palette.getContrastText(i)},o.color&&o.color!=="default"&&o.color!=="inherit"&&o.color!=="transparent"&&{backgroundColor:n.palette[o.color].main,color:n.palette[o.color].contrastText},o.color==="inherit"&&{color:"inherit"},n.palette.mode==="dark"&&!o.enableColorOnDark&&{backgroundColor:null,color:null},o.color==="transparent"&&O({backgroundColor:"transparent",color:"inherit"},n.palette.mode==="dark"&&{backgroundImage:"none"})),n.vars&&O({},o.color==="default"&&{"--AppBar-background":o.enableColorOnDark?n.vars.palette.AppBar.defaultBg:Pa(n.vars.palette.AppBar.darkBg,n.vars.palette.AppBar.defaultBg),"--AppBar-color":o.enableColorOnDark?n.vars.palette.text.primary:Pa(n.vars.palette.AppBar.darkColor,n.vars.palette.text.primary)},o.color&&!o.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":o.enableColorOnDark?n.vars.palette[o.color].main:Pa(n.vars.palette.AppBar.darkBg,n.vars.palette[o.color].main),"--AppBar-color":o.enableColorOnDark?n.vars.palette[o.color].contrastText:Pa(n.vars.palette.AppBar.darkColor,n.vars.palette[o.color].contrastText)},!["inherit","transparent"].includes(o.color)&&{backgroundColor:"var(--AppBar-background)"},{color:o.color==="inherit"?"inherit":"var(--AppBar-color)"},o.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),Sw=P.forwardRef(function(o,i){const a=et({props:o,name:"MuiAppBar"}),{className:l,color:c="primary",enableColorOnDark:p=!1,position:f="fixed"}=a,h=Se(a,xw),g=O({},a,{color:c,position:f,enableColorOnDark:p}),v=ww(g);return V.jsx(bw,O({square:!0,component:"header",ownerState:g,elevation:4,className:Ce(v.root,l,f==="fixed"&&"mui-fixed"),ref:i},h))});var Ai={},Pm;function kw(){if(Pm)return Ai;Pm=1,Object.defineProperty(Ai,"__esModule",{value:!0}),Ai.default=void 0;var n=a(Ua()),o=Ih;function i(p){if(typeof WeakMap!="function")return null;var f=new WeakMap,h=new WeakMap;return(i=function(g){return g?h:f})(p)}function a(p,f){if(p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var h=i(f);if(h&&h.has(p))return h.get(p);var g={__proto__:null},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var b in p)if(b!=="default"&&Object.prototype.hasOwnProperty.call(p,b)){var S=v?Object.getOwnPropertyDescriptor(p,b):null;S&&(S.get||S.set)?Object.defineProperty(g,b,S):g[b]=p[b]}return g.default=p,h&&h.set(p,g),g}function l(p){return Object.keys(p).length===0}function c(p=null){const f=n.useContext(o.ThemeContext);return!f||l(f)?p:f}return Ai.default=c,Ai}var Cw=kw();const Ew=Yr(Cw);var $t="top",un="bottom",cn="right",Nt="left",Yc="auto",us=[$t,un,cn,Nt],Do="start",es="end",Tw="clippingParents",Ah="viewport",Li="popper",Pw="reference",Rm=us.reduce(function(n,o){return n.concat([o+"-"+Do,o+"-"+es])},[]),Lh=[].concat(us,[Yc]).reduce(function(n,o){return n.concat([o,o+"-"+Do,o+"-"+es])},[]),Rw="beforeRead",_w="read",Ow="afterRead",Mw="beforeMain",Iw="main",$w="afterMain",Nw="beforeWrite",zw="write",Aw="afterWrite",Lw=[Rw,_w,Ow,Mw,Iw,$w,Nw,zw,Aw];function Bn(n){return n?(n.nodeName||"").toLowerCase():null}function Kt(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var o=n.ownerDocument;return o&&o.defaultView||window}return n}function qr(n){var o=Kt(n).Element;return n instanceof o||n instanceof Element}function an(n){var o=Kt(n).HTMLElement;return n instanceof o||n instanceof HTMLElement}function Qc(n){if(typeof ShadowRoot>"u")return!1;var o=Kt(n).ShadowRoot;return n instanceof o||n instanceof ShadowRoot}function Dw(n){var o=n.state;Object.keys(o.elements).forEach(function(i){var a=o.styles[i]||{},l=o.attributes[i]||{},c=o.elements[i];!an(c)||!Bn(c)||(Object.assign(c.style,a),Object.keys(l).forEach(function(p){var f=l[p];f===!1?c.removeAttribute(p):c.setAttribute(p,f===!0?"":f)}))})}function jw(n){var o=n.state,i={popper:{position:o.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(o.elements.popper.style,i.popper),o.styles=i,o.elements.arrow&&Object.assign(o.elements.arrow.style,i.arrow),function(){Object.keys(o.elements).forEach(function(a){var l=o.elements[a],c=o.attributes[a]||{},p=Object.keys(o.styles.hasOwnProperty(a)?o.styles[a]:i[a]),f=p.reduce(function(h,g){return h[g]="",h},{});!an(l)||!Bn(l)||(Object.assign(l.style,f),Object.keys(c).forEach(function(h){l.removeAttribute(h)}))})}}const Bw={name:"applyStyles",enabled:!0,phase:"write",fn:Dw,effect:jw,requires:["computeStyles"]};function jn(n){return n.split("-")[0]}var Gr=Math.max,Fa=Math.min,jo=Math.round;function wc(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(o){return o.brand+"/"+o.version}).join(" "):navigator.userAgent}function Dh(){return!/^((?!chrome|android).)*safari/i.test(wc())}function Bo(n,o,i){o===void 0&&(o=!1),i===void 0&&(i=!1);var a=n.getBoundingClientRect(),l=1,c=1;o&&an(n)&&(l=n.offsetWidth>0&&jo(a.width)/n.offsetWidth||1,c=n.offsetHeight>0&&jo(a.height)/n.offsetHeight||1);var p=qr(n)?Kt(n):window,f=p.visualViewport,h=!Dh()&&i,g=(a.left+(h&&f?f.offsetLeft:0))/l,v=(a.top+(h&&f?f.offsetTop:0))/c,b=a.width/l,S=a.height/c;return{width:b,height:S,top:v,right:g+b,bottom:v+S,left:g,x:g,y:v}}function Xc(n){var o=Bo(n),i=n.offsetWidth,a=n.offsetHeight;return Math.abs(o.width-i)<=1&&(i=o.width),Math.abs(o.height-a)<=1&&(a=o.height),{x:n.offsetLeft,y:n.offsetTop,width:i,height:a}}function jh(n,o){var i=o.getRootNode&&o.getRootNode();if(n.contains(o))return!0;if(i&&Qc(i)){var a=o;do{if(a&&n.isSameNode(a))return!0;a=a.parentNode||a.host}while(a)}return!1}function Jn(n){return Kt(n).getComputedStyle(n)}function Fw(n){return["table","td","th"].indexOf(Bn(n))>=0}function Pr(n){return((qr(n)?n.ownerDocument:n.document)||window.document).documentElement}function sl(n){return Bn(n)==="html"?n:n.assignedSlot||n.parentNode||(Qc(n)?n.host:null)||Pr(n)}function _m(n){return!an(n)||Jn(n).position==="fixed"?null:n.offsetParent}function Ww(n){var o=/firefox/i.test(wc()),i=/Trident/i.test(wc());if(i&&an(n)){var a=Jn(n);if(a.position==="fixed")return null}var l=sl(n);for(Qc(l)&&(l=l.host);an(l)&&["html","body"].indexOf(Bn(l))<0;){var c=Jn(l);if(c.transform!=="none"||c.perspective!=="none"||c.contain==="paint"||["transform","perspective"].indexOf(c.willChange)!==-1||o&&c.willChange==="filter"||o&&c.filter&&c.filter!=="none")return l;l=l.parentNode}return null}function cs(n){for(var o=Kt(n),i=_m(n);i&&Fw(i)&&Jn(i).position==="static";)i=_m(i);return i&&(Bn(i)==="html"||Bn(i)==="body"&&Jn(i).position==="static")?o:i||Ww(n)||o}function Zc(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Ki(n,o,i){return Gr(n,Fa(o,i))}function Uw(n,o,i){var a=Ki(n,o,i);return a>i?i:a}function Bh(){return{top:0,right:0,bottom:0,left:0}}function Fh(n){return Object.assign({},Bh(),n)}function Wh(n,o){return o.reduce(function(i,a){return i[a]=n,i},{})}var Hw=function(o,i){return o=typeof o=="function"?o(Object.assign({},i.rects,{placement:i.placement})):o,Fh(typeof o!="number"?o:Wh(o,us))};function Vw(n){var o,i=n.state,a=n.name,l=n.options,c=i.elements.arrow,p=i.modifiersData.popperOffsets,f=jn(i.placement),h=Zc(f),g=[Nt,cn].indexOf(f)>=0,v=g?"height":"width";if(!(!c||!p)){var b=Hw(l.padding,i),S=Xc(c),_=h==="y"?$t:Nt,C=h==="y"?un:cn,y=i.rects.reference[v]+i.rects.reference[h]-p[h]-i.rects.popper[v],M=p[h]-i.rects.reference[h],F=cs(c),H=F?h==="y"?F.clientHeight||0:F.clientWidth||0:0,A=y/2-M/2,N=b[_],k=H-S[v]-b[C],B=H/2-S[v]/2+A,x=Ki(N,B,k),z=h;i.modifiersData[a]=(o={},o[z]=x,o.centerOffset=x-B,o)}}function Kw(n){var o=n.state,i=n.options,a=i.element,l=a===void 0?"[data-popper-arrow]":a;l!=null&&(typeof l=="string"&&(l=o.elements.popper.querySelector(l),!l)||jh(o.elements.popper,l)&&(o.elements.arrow=l))}const Gw={name:"arrow",enabled:!0,phase:"main",fn:Vw,effect:Kw,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Fo(n){return n.split("-")[1]}var qw={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Yw(n,o){var i=n.x,a=n.y,l=o.devicePixelRatio||1;return{x:jo(i*l)/l||0,y:jo(a*l)/l||0}}function Om(n){var o,i=n.popper,a=n.popperRect,l=n.placement,c=n.variation,p=n.offsets,f=n.position,h=n.gpuAcceleration,g=n.adaptive,v=n.roundOffsets,b=n.isFixed,S=p.x,_=S===void 0?0:S,C=p.y,y=C===void 0?0:C,M=typeof v=="function"?v({x:_,y}):{x:_,y};_=M.x,y=M.y;var F=p.hasOwnProperty("x"),H=p.hasOwnProperty("y"),A=Nt,N=$t,k=window;if(g){var B=cs(i),x="clientHeight",z="clientWidth";if(B===Kt(i)&&(B=Pr(i),Jn(B).position!=="static"&&f==="absolute"&&(x="scrollHeight",z="scrollWidth")),B=B,l===$t||(l===Nt||l===cn)&&c===es){N=un;var W=b&&B===k&&k.visualViewport?k.visualViewport.height:B[x];y-=W-a.height,y*=h?1:-1}if(l===Nt||(l===$t||l===un)&&c===es){A=cn;var L=b&&B===k&&k.visualViewport?k.visualViewport.width:B[z];_-=L-a.width,_*=h?1:-1}}var q=Object.assign({position:f},g&&qw),oe=v===!0?Yw({x:_,y},Kt(i)):{x:_,y};if(_=oe.x,y=oe.y,h){var ee;return Object.assign({},q,(ee={},ee[N]=H?"0":"",ee[A]=F?"0":"",ee.transform=(k.devicePixelRatio||1)<=1?"translate("+_+"px, "+y+"px)":"translate3d("+_+"px, "+y+"px, 0)",ee))}return Object.assign({},q,(o={},o[N]=H?y+"px":"",o[A]=F?_+"px":"",o.transform="",o))}function Qw(n){var o=n.state,i=n.options,a=i.gpuAcceleration,l=a===void 0?!0:a,c=i.adaptive,p=c===void 0?!0:c,f=i.roundOffsets,h=f===void 0?!0:f,g={placement:jn(o.placement),variation:Fo(o.placement),popper:o.elements.popper,popperRect:o.rects.popper,gpuAcceleration:l,isFixed:o.options.strategy==="fixed"};o.modifiersData.popperOffsets!=null&&(o.styles.popper=Object.assign({},o.styles.popper,Om(Object.assign({},g,{offsets:o.modifiersData.popperOffsets,position:o.options.strategy,adaptive:p,roundOffsets:h})))),o.modifiersData.arrow!=null&&(o.styles.arrow=Object.assign({},o.styles.arrow,Om(Object.assign({},g,{offsets:o.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:h})))),o.attributes.popper=Object.assign({},o.attributes.popper,{"data-popper-placement":o.placement})}const Xw={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Qw,data:{}};var Ra={passive:!0};function Zw(n){var o=n.state,i=n.instance,a=n.options,l=a.scroll,c=l===void 0?!0:l,p=a.resize,f=p===void 0?!0:p,h=Kt(o.elements.popper),g=[].concat(o.scrollParents.reference,o.scrollParents.popper);return c&&g.forEach(function(v){v.addEventListener("scroll",i.update,Ra)}),f&&h.addEventListener("resize",i.update,Ra),function(){c&&g.forEach(function(v){v.removeEventListener("scroll",i.update,Ra)}),f&&h.removeEventListener("resize",i.update,Ra)}}const Jw={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Zw,data:{}};var e2={left:"right",right:"left",bottom:"top",top:"bottom"};function za(n){return n.replace(/left|right|bottom|top/g,function(o){return e2[o]})}var t2={start:"end",end:"start"};function Mm(n){return n.replace(/start|end/g,function(o){return t2[o]})}function Jc(n){var o=Kt(n),i=o.pageXOffset,a=o.pageYOffset;return{scrollLeft:i,scrollTop:a}}function ed(n){return Bo(Pr(n)).left+Jc(n).scrollLeft}function n2(n,o){var i=Kt(n),a=Pr(n),l=i.visualViewport,c=a.clientWidth,p=a.clientHeight,f=0,h=0;if(l){c=l.width,p=l.height;var g=Dh();(g||!g&&o==="fixed")&&(f=l.offsetLeft,h=l.offsetTop)}return{width:c,height:p,x:f+ed(n),y:h}}function r2(n){var o,i=Pr(n),a=Jc(n),l=(o=n.ownerDocument)==null?void 0:o.body,c=Gr(i.scrollWidth,i.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),p=Gr(i.scrollHeight,i.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0),f=-a.scrollLeft+ed(n),h=-a.scrollTop;return Jn(l||i).direction==="rtl"&&(f+=Gr(i.clientWidth,l?l.clientWidth:0)-c),{width:c,height:p,x:f,y:h}}function td(n){var o=Jn(n),i=o.overflow,a=o.overflowX,l=o.overflowY;return/auto|scroll|overlay|hidden/.test(i+l+a)}function Uh(n){return["html","body","#document"].indexOf(Bn(n))>=0?n.ownerDocument.body:an(n)&&td(n)?n:Uh(sl(n))}function Gi(n,o){var i;o===void 0&&(o=[]);var a=Uh(n),l=a===((i=n.ownerDocument)==null?void 0:i.body),c=Kt(a),p=l?[c].concat(c.visualViewport||[],td(a)?a:[]):a,f=o.concat(p);return l?f:f.concat(Gi(sl(p)))}function bc(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function o2(n,o){var i=Bo(n,!1,o==="fixed");return i.top=i.top+n.clientTop,i.left=i.left+n.clientLeft,i.bottom=i.top+n.clientHeight,i.right=i.left+n.clientWidth,i.width=n.clientWidth,i.height=n.clientHeight,i.x=i.left,i.y=i.top,i}function Im(n,o,i){return o===Ah?bc(n2(n,i)):qr(o)?o2(o,i):bc(r2(Pr(n)))}function i2(n){var o=Gi(sl(n)),i=["absolute","fixed"].indexOf(Jn(n).position)>=0,a=i&&an(n)?cs(n):n;return qr(a)?o.filter(function(l){return qr(l)&&jh(l,a)&&Bn(l)!=="body"}):[]}function s2(n,o,i,a){var l=o==="clippingParents"?i2(n):[].concat(o),c=[].concat(l,[i]),p=c[0],f=c.reduce(function(h,g){var v=Im(n,g,a);return h.top=Gr(v.top,h.top),h.right=Fa(v.right,h.right),h.bottom=Fa(v.bottom,h.bottom),h.left=Gr(v.left,h.left),h},Im(n,p,a));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}function Hh(n){var o=n.reference,i=n.element,a=n.placement,l=a?jn(a):null,c=a?Fo(a):null,p=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,h;switch(l){case $t:h={x:p,y:o.y-i.height};break;case un:h={x:p,y:o.y+o.height};break;case cn:h={x:o.x+o.width,y:f};break;case Nt:h={x:o.x-i.width,y:f};break;default:h={x:o.x,y:o.y}}var g=l?Zc(l):null;if(g!=null){var v=g==="y"?"height":"width";switch(c){case Do:h[g]=h[g]-(o[v]/2-i[v]/2);break;case es:h[g]=h[g]+(o[v]/2-i[v]/2);break}}return h}function ts(n,o){o===void 0&&(o={});var i=o,a=i.placement,l=a===void 0?n.placement:a,c=i.strategy,p=c===void 0?n.strategy:c,f=i.boundary,h=f===void 0?Tw:f,g=i.rootBoundary,v=g===void 0?Ah:g,b=i.elementContext,S=b===void 0?Li:b,_=i.altBoundary,C=_===void 0?!1:_,y=i.padding,M=y===void 0?0:y,F=Fh(typeof M!="number"?M:Wh(M,us)),H=S===Li?Pw:Li,A=n.rects.popper,N=n.elements[C?H:S],k=s2(qr(N)?N:N.contextElement||Pr(n.elements.popper),h,v,p),B=Bo(n.elements.reference),x=Hh({reference:B,element:A,placement:l}),z=bc(Object.assign({},A,x)),W=S===Li?z:B,L={top:k.top-W.top+F.top,bottom:W.bottom-k.bottom+F.bottom,left:k.left-W.left+F.left,right:W.right-k.right+F.right},q=n.modifiersData.offset;if(S===Li&&q){var oe=q[l];Object.keys(L).forEach(function(ee){var re=[cn,un].indexOf(ee)>=0?1:-1,ne=[$t,un].indexOf(ee)>=0?"y":"x";L[ee]+=oe[ne]*re})}return L}function a2(n,o){o===void 0&&(o={});var i=o,a=i.placement,l=i.boundary,c=i.rootBoundary,p=i.padding,f=i.flipVariations,h=i.allowedAutoPlacements,g=h===void 0?Lh:h,v=Fo(a),b=v?f?Rm:Rm.filter(function(C){return Fo(C)===v}):us,S=b.filter(function(C){return g.indexOf(C)>=0});S.length===0&&(S=b);var _=S.reduce(function(C,y){return C[y]=ts(n,{placement:y,boundary:l,rootBoundary:c,padding:p})[jn(y)],C},{});return Object.keys(_).sort(function(C,y){return _[C]-_[y]})}function l2(n){if(jn(n)===Yc)return[];var o=za(n);return[Mm(n),o,Mm(o)]}function u2(n){var o=n.state,i=n.options,a=n.name;if(!o.modifiersData[a]._skip){for(var l=i.mainAxis,c=l===void 0?!0:l,p=i.altAxis,f=p===void 0?!0:p,h=i.fallbackPlacements,g=i.padding,v=i.boundary,b=i.rootBoundary,S=i.altBoundary,_=i.flipVariations,C=_===void 0?!0:_,y=i.allowedAutoPlacements,M=o.options.placement,F=jn(M),H=F===M,A=h||(H||!C?[za(M)]:l2(M)),N=[M].concat(A).reduce(function(ae,pe){return ae.concat(jn(pe)===Yc?a2(o,{placement:pe,boundary:v,rootBoundary:b,padding:g,flipVariations:C,allowedAutoPlacements:y}):pe)},[]),k=o.rects.reference,B=o.rects.popper,x=new Map,z=!0,W=N[0],L=0;L<N.length;L++){var q=N[L],oe=jn(q),ee=Fo(q)===Do,re=[$t,un].indexOf(oe)>=0,ne=re?"width":"height",X=ts(o,{placement:q,boundary:v,rootBoundary:b,altBoundary:S,padding:g}),te=re?ee?cn:Nt:ee?un:$t;k[ne]>B[ne]&&(te=za(te));var j=za(te),Q=[];if(c&&Q.push(X[oe]<=0),f&&Q.push(X[te]<=0,X[j]<=0),Q.every(function(ae){return ae})){W=q,z=!1;break}x.set(q,Q)}if(z)for(var Z=C?3:1,R=function(pe){var le=N.find(function(ye){var he=x.get(ye);if(he)return he.slice(0,pe).every(function(me){return me})});if(le)return W=le,"break"},U=Z;U>0;U--){var fe=R(U);if(fe==="break")break}o.placement!==W&&(o.modifiersData[a]._skip=!0,o.placement=W,o.reset=!0)}}const c2={name:"flip",enabled:!0,phase:"main",fn:u2,requiresIfExists:["offset"],data:{_skip:!1}};function $m(n,o,i){return i===void 0&&(i={x:0,y:0}),{top:n.top-o.height-i.y,right:n.right-o.width+i.x,bottom:n.bottom-o.height+i.y,left:n.left-o.width-i.x}}function Nm(n){return[$t,cn,un,Nt].some(function(o){return n[o]>=0})}function d2(n){var o=n.state,i=n.name,a=o.rects.reference,l=o.rects.popper,c=o.modifiersData.preventOverflow,p=ts(o,{elementContext:"reference"}),f=ts(o,{altBoundary:!0}),h=$m(p,a),g=$m(f,l,c),v=Nm(h),b=Nm(g);o.modifiersData[i]={referenceClippingOffsets:h,popperEscapeOffsets:g,isReferenceHidden:v,hasPopperEscaped:b},o.attributes.popper=Object.assign({},o.attributes.popper,{"data-popper-reference-hidden":v,"data-popper-escaped":b})}const p2={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:d2};function f2(n,o,i){var a=jn(n),l=[Nt,$t].indexOf(a)>=0?-1:1,c=typeof i=="function"?i(Object.assign({},o,{placement:n})):i,p=c[0],f=c[1];return p=p||0,f=(f||0)*l,[Nt,cn].indexOf(a)>=0?{x:f,y:p}:{x:p,y:f}}function m2(n){var o=n.state,i=n.options,a=n.name,l=i.offset,c=l===void 0?[0,0]:l,p=Lh.reduce(function(v,b){return v[b]=f2(b,o.rects,c),v},{}),f=p[o.placement],h=f.x,g=f.y;o.modifiersData.popperOffsets!=null&&(o.modifiersData.popperOffsets.x+=h,o.modifiersData.popperOffsets.y+=g),o.modifiersData[a]=p}const h2={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:m2};function g2(n){var o=n.state,i=n.name;o.modifiersData[i]=Hh({reference:o.rects.reference,element:o.rects.popper,placement:o.placement})}const v2={name:"popperOffsets",enabled:!0,phase:"read",fn:g2,data:{}};function y2(n){return n==="x"?"y":"x"}function x2(n){var o=n.state,i=n.options,a=n.name,l=i.mainAxis,c=l===void 0?!0:l,p=i.altAxis,f=p===void 0?!1:p,h=i.boundary,g=i.rootBoundary,v=i.altBoundary,b=i.padding,S=i.tether,_=S===void 0?!0:S,C=i.tetherOffset,y=C===void 0?0:C,M=ts(o,{boundary:h,rootBoundary:g,padding:b,altBoundary:v}),F=jn(o.placement),H=Fo(o.placement),A=!H,N=Zc(F),k=y2(N),B=o.modifiersData.popperOffsets,x=o.rects.reference,z=o.rects.popper,W=typeof y=="function"?y(Object.assign({},o.rects,{placement:o.placement})):y,L=typeof W=="number"?{mainAxis:W,altAxis:W}:Object.assign({mainAxis:0,altAxis:0},W),q=o.modifiersData.offset?o.modifiersData.offset[o.placement]:null,oe={x:0,y:0};if(B){if(c){var ee,re=N==="y"?$t:Nt,ne=N==="y"?un:cn,X=N==="y"?"height":"width",te=B[N],j=te+M[re],Q=te-M[ne],Z=_?-z[X]/2:0,R=H===Do?x[X]:z[X],U=H===Do?-z[X]:-x[X],fe=o.elements.arrow,ae=_&&fe?Xc(fe):{width:0,height:0},pe=o.modifiersData["arrow#persistent"]?o.modifiersData["arrow#persistent"].padding:Bh(),le=pe[re],ye=pe[ne],he=Ki(0,x[X],ae[X]),me=A?x[X]/2-Z-he-le-L.mainAxis:R-he-le-L.mainAxis,Oe=A?-x[X]/2+Z+he+ye+L.mainAxis:U+he+ye+L.mainAxis,He=o.elements.arrow&&cs(o.elements.arrow),tt=He?N==="y"?He.clientTop||0:He.clientLeft||0:0,Me=(ee=q==null?void 0:q[N])!=null?ee:0,qe=te+me-Me-tt,nt=te+Oe-Me,Gt=Ki(_?Fa(j,qe):j,te,_?Gr(Q,nt):Q);B[N]=Gt,oe[N]=Gt-te}if(f){var qt,Yt=N==="x"?$t:Nt,Tn=N==="x"?un:cn,Ye=B[k],ft=k==="y"?"height":"width",Lt=Ye+M[Yt],pn=Ye-M[Tn],Tt=[$t,Nt].indexOf(F)!==-1,kt=(qt=q==null?void 0:q[k])!=null?qt:0,Qt=Tt?Lt:Ye-x[ft]-z[ft]-kt+L.altAxis,Xt=Tt?Ye+x[ft]+z[ft]-kt-L.altAxis:pn,fn=_&&Tt?Uw(Qt,Ye,Xt):Ki(_?Qt:Lt,Ye,_?Xt:pn);B[k]=fn,oe[k]=fn-Ye}o.modifiersData[a]=oe}}const w2={name:"preventOverflow",enabled:!0,phase:"main",fn:x2,requiresIfExists:["offset"]};function b2(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function S2(n){return n===Kt(n)||!an(n)?Jc(n):b2(n)}function k2(n){var o=n.getBoundingClientRect(),i=jo(o.width)/n.offsetWidth||1,a=jo(o.height)/n.offsetHeight||1;return i!==1||a!==1}function C2(n,o,i){i===void 0&&(i=!1);var a=an(o),l=an(o)&&k2(o),c=Pr(o),p=Bo(n,l,i),f={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(a||!a&&!i)&&((Bn(o)!=="body"||td(c))&&(f=S2(o)),an(o)?(h=Bo(o,!0),h.x+=o.clientLeft,h.y+=o.clientTop):c&&(h.x=ed(c))),{x:p.left+f.scrollLeft-h.x,y:p.top+f.scrollTop-h.y,width:p.width,height:p.height}}function E2(n){var o=new Map,i=new Set,a=[];n.forEach(function(c){o.set(c.name,c)});function l(c){i.add(c.name);var p=[].concat(c.requires||[],c.requiresIfExists||[]);p.forEach(function(f){if(!i.has(f)){var h=o.get(f);h&&l(h)}}),a.push(c)}return n.forEach(function(c){i.has(c.name)||l(c)}),a}function T2(n){var o=E2(n);return Lw.reduce(function(i,a){return i.concat(o.filter(function(l){return l.phase===a}))},[])}function P2(n){var o;return function(){return o||(o=new Promise(function(i){Promise.resolve().then(function(){o=void 0,i(n())})})),o}}function R2(n){var o=n.reduce(function(i,a){var l=i[a.name];return i[a.name]=l?Object.assign({},l,a,{options:Object.assign({},l.options,a.options),data:Object.assign({},l.data,a.data)}):a,i},{});return Object.keys(o).map(function(i){return o[i]})}var zm={placement:"bottom",modifiers:[],strategy:"absolute"};function Am(){for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return!o.some(function(a){return!(a&&typeof a.getBoundingClientRect=="function")})}function _2(n){n===void 0&&(n={});var o=n,i=o.defaultModifiers,a=i===void 0?[]:i,l=o.defaultOptions,c=l===void 0?zm:l;return function(f,h,g){g===void 0&&(g=c);var v={placement:"bottom",orderedModifiers:[],options:Object.assign({},zm,c),modifiersData:{},elements:{reference:f,popper:h},attributes:{},styles:{}},b=[],S=!1,_={state:v,setOptions:function(F){var H=typeof F=="function"?F(v.options):F;y(),v.options=Object.assign({},c,v.options,H),v.scrollParents={reference:qr(f)?Gi(f):f.contextElement?Gi(f.contextElement):[],popper:Gi(h)};var A=T2(R2([].concat(a,v.options.modifiers)));return v.orderedModifiers=A.filter(function(N){return N.enabled}),C(),_.update()},forceUpdate:function(){if(!S){var F=v.elements,H=F.reference,A=F.popper;if(Am(H,A)){v.rects={reference:C2(H,cs(A),v.options.strategy==="fixed"),popper:Xc(A)},v.reset=!1,v.placement=v.options.placement,v.orderedModifiers.forEach(function(L){return v.modifiersData[L.name]=Object.assign({},L.data)});for(var N=0;N<v.orderedModifiers.length;N++){if(v.reset===!0){v.reset=!1,N=-1;continue}var k=v.orderedModifiers[N],B=k.fn,x=k.options,z=x===void 0?{}:x,W=k.name;typeof B=="function"&&(v=B({state:v,options:z,name:W,instance:_})||v)}}}},update:P2(function(){return new Promise(function(M){_.forceUpdate(),M(v)})}),destroy:function(){y(),S=!0}};if(!Am(f,h))return _;_.setOptions(g).then(function(M){!S&&g.onFirstUpdate&&g.onFirstUpdate(M)});function C(){v.orderedModifiers.forEach(function(M){var F=M.name,H=M.options,A=H===void 0?{}:H,N=M.effect;if(typeof N=="function"){var k=N({state:v,name:F,instance:_,options:A}),B=function(){};b.push(k||B)}})}function y(){b.forEach(function(M){return M()}),b=[]}return _}}var O2=[Jw,v2,Xw,Bw,h2,c2,w2,Gw,p2],M2=_2({defaultModifiers:O2});function I2(n){return typeof n=="function"?n():n}const Vh=P.forwardRef(function(o,i){const{children:a,container:l,disablePortal:c=!1}=o,[p,f]=P.useState(null),h=At(P.isValidElement(a)?Ko(a):null,i);if(Tr(()=>{c||f(I2(l)||document.body)},[l,c]),Tr(()=>{if(p&&!c)return ja(i,p),()=>{ja(i,null)}},[i,p,c]),c){if(P.isValidElement(a)){const g={ref:h};return P.cloneElement(a,g)}return V.jsx(P.Fragment,{children:a})}return V.jsx(P.Fragment,{children:p&&Nh.createPortal(a,p)})});function $2(n){return it("MuiPopper",n)}Je("MuiPopper",["root"]);const N2=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],z2=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function A2(n,o){if(o==="ltr")return n;switch(n){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return n}}function Sc(n){return typeof n=="function"?n():n}function L2(n){return n.nodeType!==void 0}const D2=n=>{const{classes:o}=n;return lt({root:["root"]},$2,o)},j2={},B2=P.forwardRef(function(o,i){var a;const{anchorEl:l,children:c,direction:p,disablePortal:f,modifiers:h,open:g,placement:v,popperOptions:b,popperRef:S,slotProps:_={},slots:C={},TransitionProps:y}=o,M=Se(o,N2),F=P.useRef(null),H=At(F,i),A=P.useRef(null),N=At(A,S),k=P.useRef(N);Tr(()=>{k.current=N},[N]),P.useImperativeHandle(S,()=>A.current,[]);const B=A2(v,p),[x,z]=P.useState(B),[W,L]=P.useState(Sc(l));P.useEffect(()=>{A.current&&A.current.forceUpdate()}),P.useEffect(()=>{l&&L(Sc(l))},[l]),Tr(()=>{if(!W||!g)return;const ne=j=>{z(j.placement)};let X=[{name:"preventOverflow",options:{altBoundary:f}},{name:"flip",options:{altBoundary:f}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:j})=>{ne(j)}}];h!=null&&(X=X.concat(h)),b&&b.modifiers!=null&&(X=X.concat(b.modifiers));const te=M2(W,F.current,O({placement:B},b,{modifiers:X}));return k.current(te),()=>{te.destroy(),k.current(null)}},[W,f,h,g,b,B]);const q={placement:x};y!==null&&(q.TransitionProps=y);const oe=D2(o),ee=(a=C.root)!=null?a:"div",re=mc({elementType:ee,externalSlotProps:_.root,externalForwardedProps:M,additionalProps:{role:"tooltip",ref:H},ownerState:o,className:oe.root});return V.jsx(ee,O({},re,{children:typeof c=="function"?c(q):c}))}),F2=P.forwardRef(function(o,i){const{anchorEl:a,children:l,container:c,direction:p="ltr",disablePortal:f=!1,keepMounted:h=!1,modifiers:g,open:v,placement:b="bottom",popperOptions:S=j2,popperRef:_,style:C,transition:y=!1,slotProps:M={},slots:F={}}=o,H=Se(o,z2),[A,N]=P.useState(!0),k=()=>{N(!1)},B=()=>{N(!0)};if(!h&&!v&&(!y||A))return null;let x;if(c)x=c;else if(a){const L=Sc(a);x=L&&L2(L)?Cn(L).body:Cn(null).body}const z=!v&&h&&(!y||A)?"none":void 0,W=y?{in:v,onEnter:k,onExited:B}:void 0;return V.jsx(Vh,{disablePortal:f,container:x,children:V.jsx(B2,O({anchorEl:a,direction:p,disablePortal:f,modifiers:g,ref:i,open:y?!A:v,placement:b,popperOptions:S,popperRef:_,slotProps:M,slots:F},H,{style:O({position:"fixed",top:0,left:0,display:z},C),TransitionProps:W,children:l}))})}),W2=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],U2=Ae(F2,{name:"MuiPopper",slot:"Root",overridesResolver:(n,o)=>o.root})({}),Kh=P.forwardRef(function(o,i){var a;const l=Ew(),c=et({props:o,name:"MuiPopper"}),{anchorEl:p,component:f,components:h,componentsProps:g,container:v,disablePortal:b,keepMounted:S,modifiers:_,open:C,placement:y,popperOptions:M,popperRef:F,transition:H,slots:A,slotProps:N}=c,k=Se(c,W2),B=(a=A==null?void 0:A.root)!=null?a:h==null?void 0:h.Root,x=O({anchorEl:p,container:v,disablePortal:b,keepMounted:S,modifiers:_,open:C,placement:y,popperOptions:M,popperRef:F,transition:H},k);return V.jsx(U2,O({as:f,direction:l==null?void 0:l.direction,slots:{root:B},slotProps:N??g},x,{ref:i}))});function H2(n){return V.jsx(Yy,O({},n,{defaultTheme:Uc,themeId:zo}))}const V2=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],K2={entering:{opacity:1},entered:{opacity:1}},G2=P.forwardRef(function(o,i){const a=Qr(),l={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{addEndListener:c,appear:p=!0,children:f,easing:h,in:g,onEnter:v,onEntered:b,onEntering:S,onExit:_,onExited:C,onExiting:y,style:M,timeout:F=l,TransitionComponent:H=En}=o,A=Se(o,V2),N=P.useRef(null),k=At(N,Ko(f),i),B=re=>ne=>{if(re){const X=N.current;ne===void 0?re(X):re(X,ne)}},x=B(S),z=B((re,ne)=>{Gc(re);const X=Lo({style:M,timeout:F,easing:h},{mode:"enter"});re.style.webkitTransition=a.transitions.create("opacity",X),re.style.transition=a.transitions.create("opacity",X),v&&v(re,ne)}),W=B(b),L=B(y),q=B(re=>{const ne=Lo({style:M,timeout:F,easing:h},{mode:"exit"});re.style.webkitTransition=a.transitions.create("opacity",ne),re.style.transition=a.transitions.create("opacity",ne),_&&_(re)}),oe=B(C),ee=re=>{c&&c(N.current,re)};return V.jsx(H,O({appear:p,in:g,nodeRef:N,onEnter:z,onEntered:W,onEntering:x,onExit:q,onExited:oe,onExiting:L,addEndListener:ee,timeout:F},A,{children:(re,ne)=>P.cloneElement(f,O({style:O({opacity:0,visibility:re==="exited"&&!g?"hidden":void 0},K2[re],M,f.props.style),ref:k},ne))}))});function q2(n){return it("MuiBackdrop",n)}Je("MuiBackdrop",["root","invisible"]);const Y2=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],Q2=n=>{const{classes:o,invisible:i}=n;return lt({root:["root",i&&"invisible"]},q2,o)},X2=Ae("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:i}=n;return[o.root,i.invisible&&o.invisible]}})(({ownerState:n})=>O({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},n.invisible&&{backgroundColor:"transparent"})),Z2=P.forwardRef(function(o,i){var a,l,c;const p=et({props:o,name:"MuiBackdrop"}),{children:f,className:h,component:g="div",components:v={},componentsProps:b={},invisible:S=!1,open:_,slotProps:C={},slots:y={},TransitionComponent:M=G2,transitionDuration:F}=p,H=Se(p,Y2),A=O({},p,{component:g,invisible:S}),N=Q2(A),k=(a=C.root)!=null?a:b.root;return V.jsx(M,O({in:_,timeout:F},H,{children:V.jsx(X2,O({"aria-hidden":!0},k,{as:(l=(c=y.root)!=null?c:v.Root)!=null?l:g,className:Ce(N.root,h,k==null?void 0:k.className),ownerState:O({},A,k==null?void 0:k.ownerState),classes:N,ref:i,children:f}))}))}),J2=Je("MuiBox",["root"]),eb=Wc(),Wo=tx({themeId:zo,defaultTheme:eb,defaultClassName:J2.root,generateClassName:Bc.generate});function tb(n){return it("MuiCard",n)}Je("MuiCard",["root"]);const nb=["className","raised"],rb=n=>{const{classes:o}=n;return lt({root:["root"]},tb,o)},ob=Ae(qc,{name:"MuiCard",slot:"Root",overridesResolver:(n,o)=>o.root})(()=>({overflow:"hidden"})),ib=P.forwardRef(function(o,i){const a=et({props:o,name:"MuiCard"}),{className:l,raised:c=!1}=a,p=Se(a,nb),f=O({},a,{raised:c}),h=rb(f);return V.jsx(ob,O({className:Ce(h.root,l),elevation:c?8:void 0,ref:i,ownerState:f},p))});function sb(n){return it("MuiCardContent",n)}Je("MuiCardContent",["root"]);const ab=["className","component"],lb=n=>{const{classes:o}=n;return lt({root:["root"]},sb,o)},ub=Ae("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(n,o)=>o.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),cb=P.forwardRef(function(o,i){const a=et({props:o,name:"MuiCardContent"}),{className:l,component:c="div"}=a,p=Se(a,ab),f=O({},a,{component:c}),h=lb(f);return V.jsx(ub,O({as:c,className:Ce(h.root,l),ownerState:f,ref:i},p))});function db(n){return it("MuiCardMedia",n)}Je("MuiCardMedia",["root","media","img"]);const pb=["children","className","component","image","src","style"],fb=n=>{const{classes:o,isMediaComponent:i,isImageComponent:a}=n;return lt({root:["root",i&&"media",a&&"img"]},db,o)},mb=Ae("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:i}=n,{isMediaComponent:a,isImageComponent:l}=i;return[o.root,a&&o.media,l&&o.img]}})(({ownerState:n})=>O({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},n.isMediaComponent&&{width:"100%"},n.isImageComponent&&{objectFit:"cover"})),hb=["video","audio","picture","iframe","img"],gb=["picture","img"],vb=P.forwardRef(function(o,i){const a=et({props:o,name:"MuiCardMedia"}),{children:l,className:c,component:p="div",image:f,src:h,style:g}=a,v=Se(a,pb),b=hb.indexOf(p)!==-1,S=!b&&f?O({backgroundImage:`url("${f}")`},g):g,_=O({},a,{component:p,isMediaComponent:b,isImageComponent:gb.indexOf(p)!==-1}),C=fb(_);return V.jsx(mb,O({className:Ce(C.root,c),as:p,role:!b&&f?"img":void 0,ref:i,style:S,ownerState:_,src:b?f||h:void 0},v,{children:l}))}),yb=(n,o)=>O({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},o&&!n.vars&&{colorScheme:n.palette.mode}),xb=n=>O({color:(n.vars||n).palette.text.primary},n.typography.body1,{backgroundColor:(n.vars||n).palette.background.default,"@media print":{backgroundColor:(n.vars||n).palette.common.white}}),wb=(n,o=!1)=>{var i;const a={};o&&n.colorSchemes&&Object.entries(n.colorSchemes).forEach(([p,f])=>{var h;a[n.getColorSchemeSelector(p).replace(/\s*&/,"")]={colorScheme:(h=f.palette)==null?void 0:h.mode}});let l=O({html:yb(n,o),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:n.typography.fontWeightBold},body:O({margin:0},xb(n),{"&::backdrop":{backgroundColor:(n.vars||n).palette.background.default}})},a);const c=(i=n.components)==null||(i=i.MuiCssBaseline)==null?void 0:i.styleOverrides;return c&&(l=[l,c]),l};function bb(n){const o=et({props:n,name:"MuiCssBaseline"}),{children:i,enableColorScheme:a=!1}=o;return V.jsxs(P.Fragment,{children:[V.jsx(H2,{styles:l=>wb(l,a)}),i]})}function Sb(n){const o=Cn(n);return o.body===n?Vo(n).innerWidth>o.documentElement.clientWidth:n.scrollHeight>n.clientHeight}function qi(n,o){o?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden")}function Lm(n){return parseInt(Vo(n).getComputedStyle(n).paddingRight,10)||0}function kb(n){const i=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(n.tagName)!==-1,a=n.tagName==="INPUT"&&n.getAttribute("type")==="hidden";return i||a}function Dm(n,o,i,a,l){const c=[o,i,...a];[].forEach.call(n.children,p=>{const f=c.indexOf(p)===-1,h=!kb(p);f&&h&&qi(p,l)})}function nc(n,o){let i=-1;return n.some((a,l)=>o(a)?(i=l,!0):!1),i}function Cb(n,o){const i=[],a=n.container;if(!o.disableScrollLock){if(Sb(a)){const p=_x(Cn(a));i.push({value:a.style.paddingRight,property:"padding-right",el:a}),a.style.paddingRight=`${Lm(a)+p}px`;const f=Cn(a).querySelectorAll(".mui-fixed");[].forEach.call(f,h=>{i.push({value:h.style.paddingRight,property:"padding-right",el:h}),h.style.paddingRight=`${Lm(h)+p}px`})}let c;if(a.parentNode instanceof DocumentFragment)c=Cn(a).body;else{const p=a.parentElement,f=Vo(a);c=(p==null?void 0:p.nodeName)==="HTML"&&f.getComputedStyle(p).overflowY==="scroll"?p:a}i.push({value:c.style.overflow,property:"overflow",el:c},{value:c.style.overflowX,property:"overflow-x",el:c},{value:c.style.overflowY,property:"overflow-y",el:c}),c.style.overflow="hidden"}return()=>{i.forEach(({value:c,el:p,property:f})=>{c?p.style.setProperty(f,c):p.style.removeProperty(f)})}}function Eb(n){const o=[];return[].forEach.call(n.children,i=>{i.getAttribute("aria-hidden")==="true"&&o.push(i)}),o}class Tb{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(o,i){let a=this.modals.indexOf(o);if(a!==-1)return a;a=this.modals.length,this.modals.push(o),o.modalRef&&qi(o.modalRef,!1);const l=Eb(i);Dm(i,o.mount,o.modalRef,l,!0);const c=nc(this.containers,p=>p.container===i);return c!==-1?(this.containers[c].modals.push(o),a):(this.containers.push({modals:[o],container:i,restore:null,hiddenSiblings:l}),a)}mount(o,i){const a=nc(this.containers,c=>c.modals.indexOf(o)!==-1),l=this.containers[a];l.restore||(l.restore=Cb(l,i))}remove(o,i=!0){const a=this.modals.indexOf(o);if(a===-1)return a;const l=nc(this.containers,p=>p.modals.indexOf(o)!==-1),c=this.containers[l];if(c.modals.splice(c.modals.indexOf(o),1),this.modals.splice(a,1),c.modals.length===0)c.restore&&c.restore(),o.modalRef&&qi(o.modalRef,i),Dm(c.container,o.mount,o.modalRef,c.hiddenSiblings,!1),this.containers.splice(l,1);else{const p=c.modals[c.modals.length-1];p.modalRef&&qi(p.modalRef,!1)}return a}isTopModal(o){return this.modals.length>0&&this.modals[this.modals.length-1]===o}}const Pb=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Rb(n){const o=parseInt(n.getAttribute("tabindex")||"",10);return Number.isNaN(o)?n.contentEditable==="true"||(n.nodeName==="AUDIO"||n.nodeName==="VIDEO"||n.nodeName==="DETAILS")&&n.getAttribute("tabindex")===null?0:n.tabIndex:o}function _b(n){if(n.tagName!=="INPUT"||n.type!=="radio"||!n.name)return!1;const o=a=>n.ownerDocument.querySelector(`input[type="radio"]${a}`);let i=o(`[name="${n.name}"]:checked`);return i||(i=o(`[name="${n.name}"]`)),i!==n}function Ob(n){return!(n.disabled||n.tagName==="INPUT"&&n.type==="hidden"||_b(n))}function Mb(n){const o=[],i=[];return Array.from(n.querySelectorAll(Pb)).forEach((a,l)=>{const c=Rb(a);c===-1||!Ob(a)||(c===0?o.push(a):i.push({documentOrder:l,tabIndex:c,node:a}))}),i.sort((a,l)=>a.tabIndex===l.tabIndex?a.documentOrder-l.documentOrder:a.tabIndex-l.tabIndex).map(a=>a.node).concat(o)}function Ib(){return!0}function $b(n){const{children:o,disableAutoFocus:i=!1,disableEnforceFocus:a=!1,disableRestoreFocus:l=!1,getTabbable:c=Mb,isEnabled:p=Ib,open:f}=n,h=P.useRef(!1),g=P.useRef(null),v=P.useRef(null),b=P.useRef(null),S=P.useRef(null),_=P.useRef(!1),C=P.useRef(null),y=At(Ko(o),C),M=P.useRef(null);P.useEffect(()=>{!f||!C.current||(_.current=!i)},[i,f]),P.useEffect(()=>{if(!f||!C.current)return;const A=Cn(C.current);return C.current.contains(A.activeElement)||(C.current.hasAttribute("tabIndex")||C.current.setAttribute("tabIndex","-1"),_.current&&C.current.focus()),()=>{l||(b.current&&b.current.focus&&(h.current=!0,b.current.focus()),b.current=null)}},[f]),P.useEffect(()=>{if(!f||!C.current)return;const A=Cn(C.current),N=x=>{M.current=x,!(a||!p()||x.key!=="Tab")&&A.activeElement===C.current&&x.shiftKey&&(h.current=!0,v.current&&v.current.focus())},k=()=>{const x=C.current;if(x===null)return;if(!A.hasFocus()||!p()||h.current){h.current=!1;return}if(x.contains(A.activeElement)||a&&A.activeElement!==g.current&&A.activeElement!==v.current)return;if(A.activeElement!==S.current)S.current=null;else if(S.current!==null)return;if(!_.current)return;let z=[];if((A.activeElement===g.current||A.activeElement===v.current)&&(z=c(C.current)),z.length>0){var W,L;const q=!!((W=M.current)!=null&&W.shiftKey&&((L=M.current)==null?void 0:L.key)==="Tab"),oe=z[0],ee=z[z.length-1];typeof oe!="string"&&typeof ee!="string"&&(q?ee.focus():oe.focus())}else x.focus()};A.addEventListener("focusin",k),A.addEventListener("keydown",N,!0);const B=setInterval(()=>{A.activeElement&&A.activeElement.tagName==="BODY"&&k()},50);return()=>{clearInterval(B),A.removeEventListener("focusin",k),A.removeEventListener("keydown",N,!0)}},[i,a,l,p,f,c]);const F=A=>{b.current===null&&(b.current=A.relatedTarget),_.current=!0,S.current=A.target;const N=o.props.onFocus;N&&N(A)},H=A=>{b.current===null&&(b.current=A.relatedTarget),_.current=!0};return V.jsxs(P.Fragment,{children:[V.jsx("div",{tabIndex:f?0:-1,onFocus:H,ref:g,"data-testid":"sentinelStart"}),P.cloneElement(o,{ref:y,onFocus:F}),V.jsx("div",{tabIndex:f?0:-1,onFocus:H,ref:v,"data-testid":"sentinelEnd"})]})}function Nb(n){return typeof n=="function"?n():n}function zb(n){return n?n.props.hasOwnProperty("in"):!1}const Ab=new Tb;function Lb(n){const{container:o,disableEscapeKeyDown:i=!1,disableScrollLock:a=!1,manager:l=Ab,closeAfterTransition:c=!1,onTransitionEnter:p,onTransitionExited:f,children:h,onClose:g,open:v,rootRef:b}=n,S=P.useRef({}),_=P.useRef(null),C=P.useRef(null),y=At(C,b),[M,F]=P.useState(!v),H=zb(h);let A=!0;(n["aria-hidden"]==="false"||n["aria-hidden"]===!1)&&(A=!1);const N=()=>Cn(_.current),k=()=>(S.current.modalRef=C.current,S.current.mount=_.current,S.current),B=()=>{l.mount(k(),{disableScrollLock:a}),C.current&&(C.current.scrollTop=0)},x=Zn(()=>{const X=Nb(o)||N().body;l.add(k(),X),C.current&&B()}),z=P.useCallback(()=>l.isTopModal(k()),[l]),W=Zn(X=>{_.current=X,X&&(v&&z()?B():C.current&&qi(C.current,A))}),L=P.useCallback(()=>{l.remove(k(),A)},[A,l]);P.useEffect(()=>()=>{L()},[L]),P.useEffect(()=>{v?x():(!H||!c)&&L()},[v,L,H,c,x]);const q=X=>te=>{var j;(j=X.onKeyDown)==null||j.call(X,te),!(te.key!=="Escape"||te.which===229||!z())&&(i||(te.stopPropagation(),g&&g(te,"escapeKeyDown")))},oe=X=>te=>{var j;(j=X.onClick)==null||j.call(X,te),te.target===te.currentTarget&&g&&g(te,"backdropClick")};return{getRootProps:(X={})=>{const te=Th(n);delete te.onTransitionEnter,delete te.onTransitionExited;const j=O({},te,X);return O({role:"presentation"},j,{onKeyDown:q(j),ref:y})},getBackdropProps:(X={})=>{const te=X;return O({"aria-hidden":!0},te,{onClick:oe(te),open:v})},getTransitionProps:()=>{const X=()=>{F(!1),p&&p()},te=()=>{F(!0),f&&f(),c&&L()};return{onEnter:pc(X,h==null?void 0:h.props.onEnter),onExited:pc(te,h==null?void 0:h.props.onExited)}},rootRef:y,portalRef:W,isTopModal:z,exited:M,hasTransition:H}}function Db(n){return it("MuiModal",n)}Je("MuiModal",["root","hidden","backdrop"]);const jb=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],Bb=n=>{const{open:o,exited:i,classes:a}=n;return lt({root:["root",!o&&i&&"hidden"],backdrop:["backdrop"]},Db,a)},Fb=Ae("div",{name:"MuiModal",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:i}=n;return[o.root,!i.open&&i.exited&&o.hidden]}})(({theme:n,ownerState:o})=>O({position:"fixed",zIndex:(n.vars||n).zIndex.modal,right:0,bottom:0,top:0,left:0},!o.open&&o.exited&&{visibility:"hidden"})),Wb=Ae(Z2,{name:"MuiModal",slot:"Backdrop",overridesResolver:(n,o)=>o.backdrop})({zIndex:-1}),Ub=P.forwardRef(function(o,i){var a,l,c,p,f,h;const g=et({name:"MuiModal",props:o}),{BackdropComponent:v=Wb,BackdropProps:b,className:S,closeAfterTransition:_=!1,children:C,container:y,component:M,components:F={},componentsProps:H={},disableAutoFocus:A=!1,disableEnforceFocus:N=!1,disableEscapeKeyDown:k=!1,disablePortal:B=!1,disableRestoreFocus:x=!1,disableScrollLock:z=!1,hideBackdrop:W=!1,keepMounted:L=!1,onBackdropClick:q,open:oe,slotProps:ee,slots:re}=g,ne=Se(g,jb),X=O({},g,{closeAfterTransition:_,disableAutoFocus:A,disableEnforceFocus:N,disableEscapeKeyDown:k,disablePortal:B,disableRestoreFocus:x,disableScrollLock:z,hideBackdrop:W,keepMounted:L}),{getRootProps:te,getBackdropProps:j,getTransitionProps:Q,portalRef:Z,isTopModal:R,exited:U,hasTransition:fe}=Lb(O({},X,{rootRef:i})),ae=O({},X,{exited:U}),pe=Bb(ae),le={};if(C.props.tabIndex===void 0&&(le.tabIndex="-1"),fe){const{onEnter:Me,onExited:qe}=Q();le.onEnter=Me,le.onExited=qe}const ye=(a=(l=re==null?void 0:re.root)!=null?l:F.Root)!=null?a:Fb,he=(c=(p=re==null?void 0:re.backdrop)!=null?p:F.Backdrop)!=null?c:v,me=(f=ee==null?void 0:ee.root)!=null?f:H.root,Oe=(h=ee==null?void 0:ee.backdrop)!=null?h:H.backdrop,He=mc({elementType:ye,externalSlotProps:me,externalForwardedProps:ne,getSlotProps:te,additionalProps:{ref:i,as:M},ownerState:ae,className:Ce(S,me==null?void 0:me.className,pe==null?void 0:pe.root,!ae.open&&ae.exited&&(pe==null?void 0:pe.hidden))}),tt=mc({elementType:he,externalSlotProps:Oe,additionalProps:b,getSlotProps:Me=>j(O({},Me,{onClick:qe=>{q&&q(qe),Me!=null&&Me.onClick&&Me.onClick(qe)}})),className:Ce(Oe==null?void 0:Oe.className,b==null?void 0:b.className,pe==null?void 0:pe.backdrop),ownerState:ae});return!L&&!oe&&(!fe||U)?null:V.jsx(Vh,{ref:Z,container:y,disablePortal:B,children:V.jsxs(ye,O({},He,{children:[!W&&v?V.jsx(he,O({},tt)):null,V.jsx($b,{disableEnforceFocus:N,disableAutoFocus:A,disableRestoreFocus:x,isEnabled:R,open:oe,children:P.cloneElement(C,le)})]}))})}),Hb=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Vb(n,o,i){const a=o.getBoundingClientRect(),l=i&&i.getBoundingClientRect(),c=Vo(o);let p;if(o.fakeTransform)p=o.fakeTransform;else{const g=c.getComputedStyle(o);p=g.getPropertyValue("-webkit-transform")||g.getPropertyValue("transform")}let f=0,h=0;if(p&&p!=="none"&&typeof p=="string"){const g=p.split("(")[1].split(")")[0].split(",");f=parseInt(g[4],10),h=parseInt(g[5],10)}return n==="left"?l?`translateX(${l.right+f-a.left}px)`:`translateX(${c.innerWidth+f-a.left}px)`:n==="right"?l?`translateX(-${a.right-l.left-f}px)`:`translateX(-${a.left+a.width-f}px)`:n==="up"?l?`translateY(${l.bottom+h-a.top}px)`:`translateY(${c.innerHeight+h-a.top}px)`:l?`translateY(-${a.top-l.top+a.height-h}px)`:`translateY(-${a.top+a.height-h}px)`}function Kb(n){return typeof n=="function"?n():n}function _a(n,o,i){const a=Kb(i),l=Vb(n,o,a);l&&(o.style.webkitTransform=l,o.style.transform=l)}const Gb=P.forwardRef(function(o,i){const a=Qr(),l={enter:a.transitions.easing.easeOut,exit:a.transitions.easing.sharp},c={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{addEndListener:p,appear:f=!0,children:h,container:g,direction:v="down",easing:b=l,in:S,onEnter:_,onEntered:C,onEntering:y,onExit:M,onExited:F,onExiting:H,style:A,timeout:N=c,TransitionComponent:k=En}=o,B=Se(o,Hb),x=P.useRef(null),z=At(Ko(h),x,i),W=j=>Q=>{j&&(Q===void 0?j(x.current):j(x.current,Q))},L=W((j,Q)=>{_a(v,j,g),Gc(j),_&&_(j,Q)}),q=W((j,Q)=>{const Z=Lo({timeout:N,style:A,easing:b},{mode:"enter"});j.style.webkitTransition=a.transitions.create("-webkit-transform",O({},Z)),j.style.transition=a.transitions.create("transform",O({},Z)),j.style.webkitTransform="none",j.style.transform="none",y&&y(j,Q)}),oe=W(C),ee=W(H),re=W(j=>{const Q=Lo({timeout:N,style:A,easing:b},{mode:"exit"});j.style.webkitTransition=a.transitions.create("-webkit-transform",Q),j.style.transition=a.transitions.create("transform",Q),_a(v,j,g),M&&M(j)}),ne=W(j=>{j.style.webkitTransition="",j.style.transition="",F&&F(j)}),X=j=>{p&&p(x.current,j)},te=P.useCallback(()=>{x.current&&_a(v,x.current,g)},[v,g]);return P.useEffect(()=>{if(S||v==="down"||v==="right")return;const j=kh(()=>{x.current&&_a(v,x.current,g)}),Q=Vo(x.current);return Q.addEventListener("resize",j),()=>{j.clear(),Q.removeEventListener("resize",j)}},[v,S,g]),P.useEffect(()=>{S||te()},[S,te]),V.jsx(k,O({nodeRef:x,onEnter:L,onEntered:oe,onEntering:q,onExit:re,onExited:ne,onExiting:ee,addEndListener:X,appear:f,in:S,timeout:N},B,{children:(j,Q)=>P.cloneElement(h,O({ref:z,style:O({visibility:j==="exited"&&!S?"hidden":void 0},A,h.props.style)},Q))}))});function qb(n){return it("MuiDrawer",n)}Je("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Yb=["BackdropProps"],Qb=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],Gh=(n,o)=>{const{ownerState:i}=n;return[o.root,(i.variant==="permanent"||i.variant==="persistent")&&o.docked,o.modal]},Xb=n=>{const{classes:o,anchor:i,variant:a}=n,l={root:["root"],docked:[(a==="permanent"||a==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${ze(i)}`,a!=="temporary"&&`paperAnchorDocked${ze(i)}`]};return lt(l,qb,o)},Zb=Ae(Ub,{name:"MuiDrawer",slot:"Root",overridesResolver:Gh})(({theme:n})=>({zIndex:(n.vars||n).zIndex.drawer})),jm=Ae("div",{shouldForwardProp:Hc,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:Gh})({flex:"0 0 auto"}),Jb=Ae(qc,{name:"MuiDrawer",slot:"Paper",overridesResolver:(n,o)=>{const{ownerState:i}=n;return[o.paper,o[`paperAnchor${ze(i.anchor)}`],i.variant!=="temporary"&&o[`paperAnchorDocked${ze(i.anchor)}`]]}})(({theme:n,ownerState:o})=>O({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(n.vars||n).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},o.anchor==="left"&&{left:0},o.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},o.anchor==="right"&&{right:0},o.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},o.anchor==="left"&&o.variant!=="temporary"&&{borderRight:`1px solid ${(n.vars||n).palette.divider}`},o.anchor==="top"&&o.variant!=="temporary"&&{borderBottom:`1px solid ${(n.vars||n).palette.divider}`},o.anchor==="right"&&o.variant!=="temporary"&&{borderLeft:`1px solid ${(n.vars||n).palette.divider}`},o.anchor==="bottom"&&o.variant!=="temporary"&&{borderTop:`1px solid ${(n.vars||n).palette.divider}`})),qh={left:"right",right:"left",top:"down",bottom:"up"};function eS(n){return["left","right"].indexOf(n)!==-1}function tS({direction:n},o){return n==="rtl"&&eS(o)?qh[o]:o}const nS=P.forwardRef(function(o,i){const a=et({props:o,name:"MuiDrawer"}),l=Qr(),c=Oh(),p={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{anchor:f="left",BackdropProps:h,children:g,className:v,elevation:b=16,hideBackdrop:S=!1,ModalProps:{BackdropProps:_}={},onClose:C,open:y=!1,PaperProps:M={},SlideProps:F,TransitionComponent:H=Gb,transitionDuration:A=p,variant:N="temporary"}=a,k=Se(a.ModalProps,Yb),B=Se(a,Qb),x=P.useRef(!1);P.useEffect(()=>{x.current=!0},[]);const z=tS({direction:c?"rtl":"ltr"},f),L=O({},a,{anchor:f,elevation:b,open:y,variant:N},B),q=Xb(L),oe=V.jsx(Jb,O({elevation:N==="temporary"?b:0,square:!0},M,{className:Ce(q.paper,M.className),ownerState:L,children:g}));if(N==="permanent")return V.jsx(jm,O({className:Ce(q.root,q.docked,v),ownerState:L,ref:i},B,{children:oe}));const ee=V.jsx(H,O({in:y,direction:qh[z],timeout:A,appear:x.current},F,{children:oe}));return N==="persistent"?V.jsx(jm,O({className:Ce(q.root,q.docked,v),ownerState:L,ref:i},B,{children:ee})):V.jsx(Zb,O({BackdropProps:O({},h,_,{transitionDuration:A}),className:Ce(q.root,q.modal,v),open:y,ownerState:L,onClose:C,hideBackdrop:S,ref:i},B,k,{children:ee}))}),Bm=P.createContext();function rS(n){return it("MuiGrid",n)}const oS=[0,1,2,3,4,5,6,7,8,9,10],iS=["column-reverse","column","row-reverse","row"],sS=["nowrap","wrap-reverse","wrap"],Di=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],ns=Je("MuiGrid",["root","container","item","zeroMinWidth",...oS.map(n=>`spacing-xs-${n}`),...iS.map(n=>`direction-xs-${n}`),...sS.map(n=>`wrap-xs-${n}`),...Di.map(n=>`grid-xs-${n}`),...Di.map(n=>`grid-sm-${n}`),...Di.map(n=>`grid-md-${n}`),...Di.map(n=>`grid-lg-${n}`),...Di.map(n=>`grid-xl-${n}`)]),aS=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function No(n){const o=parseFloat(n);return`${o}${String(n).replace(String(o),"")||"px"}`}function lS({theme:n,ownerState:o}){let i;return n.breakpoints.keys.reduce((a,l)=>{let c={};if(o[l]&&(i=o[l]),!i)return a;if(i===!0)c={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")c={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const p=Ya({values:o.columns,breakpoints:n.breakpoints.values}),f=typeof p=="object"?p[l]:p;if(f==null)return a;const h=`${Math.round(i/f*1e8)/1e6}%`;let g={};if(o.container&&o.item&&o.columnSpacing!==0){const v=n.spacing(o.columnSpacing);if(v!=="0px"){const b=`calc(${h} + ${No(v)})`;g={flexBasis:b,maxWidth:b}}}c=O({flexBasis:h,flexGrow:0,maxWidth:h},g)}return n.breakpoints.values[l]===0?Object.assign(a,c):a[n.breakpoints.up(l)]=c,a},{})}function uS({theme:n,ownerState:o}){const i=Ya({values:o.direction,breakpoints:n.breakpoints.values});return ln({theme:n},i,a=>{const l={flexDirection:a};return a.indexOf("column")===0&&(l[`& > .${ns.item}`]={maxWidth:"none"}),l})}function Yh({breakpoints:n,values:o}){let i="";Object.keys(o).forEach(l=>{i===""&&o[l]!==0&&(i=l)});const a=Object.keys(n).sort((l,c)=>n[l]-n[c]);return a.slice(0,a.indexOf(i))}function cS({theme:n,ownerState:o}){const{container:i,rowSpacing:a}=o;let l={};if(i&&a!==0){const c=Ya({values:a,breakpoints:n.breakpoints.values});let p;typeof c=="object"&&(p=Yh({breakpoints:n.breakpoints.values,values:c})),l=ln({theme:n},c,(f,h)=>{var g;const v=n.spacing(f);return v!=="0px"?{marginTop:`-${No(v)}`,[`& > .${ns.item}`]:{paddingTop:No(v)}}:(g=p)!=null&&g.includes(h)?{}:{marginTop:0,[`& > .${ns.item}`]:{paddingTop:0}}})}return l}function dS({theme:n,ownerState:o}){const{container:i,columnSpacing:a}=o;let l={};if(i&&a!==0){const c=Ya({values:a,breakpoints:n.breakpoints.values});let p;typeof c=="object"&&(p=Yh({breakpoints:n.breakpoints.values,values:c})),l=ln({theme:n},c,(f,h)=>{var g;const v=n.spacing(f);return v!=="0px"?{width:`calc(100% + ${No(v)})`,marginLeft:`-${No(v)}`,[`& > .${ns.item}`]:{paddingLeft:No(v)}}:(g=p)!=null&&g.includes(h)?{}:{width:"100%",marginLeft:0,[`& > .${ns.item}`]:{paddingLeft:0}}})}return l}function pS(n,o,i={}){if(!n||n<=0)return[];if(typeof n=="string"&&!Number.isNaN(Number(n))||typeof n=="number")return[i[`spacing-xs-${String(n)}`]];const a=[];return o.forEach(l=>{const c=n[l];Number(c)>0&&a.push(i[`spacing-${l}-${String(c)}`])}),a}const fS=Ae("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:i}=n,{container:a,direction:l,item:c,spacing:p,wrap:f,zeroMinWidth:h,breakpoints:g}=i;let v=[];a&&(v=pS(p,g,o));const b=[];return g.forEach(S=>{const _=i[S];_&&b.push(o[`grid-${S}-${String(_)}`])}),[o.root,a&&o.container,c&&o.item,h&&o.zeroMinWidth,...v,l!=="row"&&o[`direction-xs-${String(l)}`],f!=="wrap"&&o[`wrap-xs-${String(f)}`],...b]}})(({ownerState:n})=>O({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},n.wrap!=="wrap"&&{flexWrap:n.wrap}),uS,cS,dS,lS);function mS(n,o){if(!n||n<=0)return[];if(typeof n=="string"&&!Number.isNaN(Number(n))||typeof n=="number")return[`spacing-xs-${String(n)}`];const i=[];return o.forEach(a=>{const l=n[a];if(Number(l)>0){const c=`spacing-${a}-${String(l)}`;i.push(c)}}),i}const hS=n=>{const{classes:o,container:i,direction:a,item:l,spacing:c,wrap:p,zeroMinWidth:f,breakpoints:h}=n;let g=[];i&&(g=mS(c,h));const v=[];h.forEach(S=>{const _=n[S];_&&v.push(`grid-${S}-${String(_)}`)});const b={root:["root",i&&"container",l&&"item",f&&"zeroMinWidth",...g,a!=="row"&&`direction-xs-${String(a)}`,p!=="wrap"&&`wrap-xs-${String(p)}`,...v]};return lt(b,rS,o)},Fm=P.forwardRef(function(o,i){const a=et({props:o,name:"MuiGrid"}),{breakpoints:l}=Qr(),c=nl(a),{className:p,columns:f,columnSpacing:h,component:g="div",container:v=!1,direction:b="row",item:S=!1,rowSpacing:_,spacing:C=0,wrap:y="wrap",zeroMinWidth:M=!1}=c,F=Se(c,aS),H=_||C,A=h||C,N=P.useContext(Bm),k=v?f||12:N,B={},x=O({},F);l.keys.forEach(L=>{F[L]!=null&&(B[L]=F[L],delete x[L])});const z=O({},c,{columns:k,container:v,direction:b,item:S,rowSpacing:H,columnSpacing:A,wrap:y,zeroMinWidth:M,spacing:C},B,{breakpoints:l.keys}),W=hS(z);return V.jsx(Bm.Provider,{value:k,children:V.jsx(fS,O({ownerState:z,className:Ce(W.root,p),as:g,ref:i},x))})}),gS=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function kc(n){return`scale(${n}, ${n**2})`}const vS={entering:{opacity:1,transform:kc(1)},entered:{opacity:1,transform:"none"}},rc=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Cc=P.forwardRef(function(o,i){const{addEndListener:a,appear:l=!0,children:c,easing:p,in:f,onEnter:h,onEntered:g,onEntering:v,onExit:b,onExited:S,onExiting:_,style:C,timeout:y="auto",TransitionComponent:M=En}=o,F=Se(o,gS),H=Mo(),A=P.useRef(),N=Qr(),k=P.useRef(null),B=At(k,Ko(c),i),x=ne=>X=>{if(ne){const te=k.current;X===void 0?ne(te):ne(te,X)}},z=x(v),W=x((ne,X)=>{Gc(ne);const{duration:te,delay:j,easing:Q}=Lo({style:C,timeout:y,easing:p},{mode:"enter"});let Z;y==="auto"?(Z=N.transitions.getAutoHeightDuration(ne.clientHeight),A.current=Z):Z=te,ne.style.transition=[N.transitions.create("opacity",{duration:Z,delay:j}),N.transitions.create("transform",{duration:rc?Z:Z*.666,delay:j,easing:Q})].join(","),h&&h(ne,X)}),L=x(g),q=x(_),oe=x(ne=>{const{duration:X,delay:te,easing:j}=Lo({style:C,timeout:y,easing:p},{mode:"exit"});let Q;y==="auto"?(Q=N.transitions.getAutoHeightDuration(ne.clientHeight),A.current=Q):Q=X,ne.style.transition=[N.transitions.create("opacity",{duration:Q,delay:te}),N.transitions.create("transform",{duration:rc?Q:Q*.666,delay:rc?te:te||Q*.333,easing:j})].join(","),ne.style.opacity=0,ne.style.transform=kc(.75),b&&b(ne)}),ee=x(S),re=ne=>{y==="auto"&&H.start(A.current||0,ne),a&&a(k.current,ne)};return V.jsx(M,O({appear:l,in:f,nodeRef:k,onEnter:W,onEntered:L,onEntering:z,onExit:oe,onExited:ee,onExiting:q,addEndListener:re,timeout:y==="auto"?null:y},F,{children:(ne,X)=>P.cloneElement(c,O({style:O({opacity:0,transform:kc(.75),visibility:ne==="exited"&&!f?"hidden":void 0},vS[ne],C,c.props.style),ref:B},X))}))});Cc.muiSupportAuto=!0;const Wa=P.createContext({});function yS(n){return it("MuiList",n)}Je("MuiList",["root","padding","dense","subheader"]);const xS=["children","className","component","dense","disablePadding","subheader"],wS=n=>{const{classes:o,disablePadding:i,dense:a,subheader:l}=n;return lt({root:["root",!i&&"padding",a&&"dense",l&&"subheader"]},yS,o)},bS=Ae("ul",{name:"MuiList",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:i}=n;return[o.root,!i.disablePadding&&o.padding,i.dense&&o.dense,i.subheader&&o.subheader]}})(({ownerState:n})=>O({listStyle:"none",margin:0,padding:0,position:"relative"},!n.disablePadding&&{paddingTop:8,paddingBottom:8},n.subheader&&{paddingTop:0})),SS=P.forwardRef(function(o,i){const a=et({props:o,name:"MuiList"}),{children:l,className:c,component:p="ul",dense:f=!1,disablePadding:h=!1,subheader:g}=a,v=Se(a,xS),b=P.useMemo(()=>({dense:f}),[f]),S=O({},a,{component:p,dense:f,disablePadding:h}),_=wS(S);return V.jsx(Wa.Provider,{value:b,children:V.jsxs(bS,O({as:p,className:Ce(_.root,c),ref:i,ownerState:S},v,{children:[g,l]}))})});function kS(n){return it("MuiListItemButton",n)}const ji=Je("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),CS=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],ES=(n,o)=>{const{ownerState:i}=n;return[o.root,i.dense&&o.dense,i.alignItems==="flex-start"&&o.alignItemsFlexStart,i.divider&&o.divider,!i.disableGutters&&o.gutters]},TS=n=>{const{alignItems:o,classes:i,dense:a,disabled:l,disableGutters:c,divider:p,selected:f}=n,g=lt({root:["root",a&&"dense",!c&&"gutters",p&&"divider",l&&"disabled",o==="flex-start"&&"alignItemsFlexStart",f&&"selected"]},kS,i);return O({},i,g)},PS=Ae(zh,{shouldForwardProp:n=>Hc(n)||n==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:ES})(({theme:n,ownerState:o})=>O({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${ji.selected}`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`:Ht.alpha(n.palette.primary.main,n.palette.action.selectedOpacity),[`&.${ji.focusVisible}`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.focusOpacity}))`:Ht.alpha(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)}},[`&.${ji.selected}:hover`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.hoverOpacity}))`:Ht.alpha(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`:Ht.alpha(n.palette.primary.main,n.palette.action.selectedOpacity)}},[`&.${ji.focusVisible}`]:{backgroundColor:(n.vars||n).palette.action.focus},[`&.${ji.disabled}`]:{opacity:(n.vars||n).palette.action.disabledOpacity}},o.divider&&{borderBottom:`1px solid ${(n.vars||n).palette.divider}`,backgroundClip:"padding-box"},o.alignItems==="flex-start"&&{alignItems:"flex-start"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.dense&&{paddingTop:4,paddingBottom:4})),RS=P.forwardRef(function(o,i){const a=et({props:o,name:"MuiListItemButton"}),{alignItems:l="center",autoFocus:c=!1,component:p="div",children:f,dense:h=!1,disableGutters:g=!1,divider:v=!1,focusVisibleClassName:b,selected:S=!1,className:_}=a,C=Se(a,CS),y=P.useContext(Wa),M=P.useMemo(()=>({dense:h||y.dense||!1,alignItems:l,disableGutters:g}),[l,y.dense,h,g]),F=P.useRef(null);Tr(()=>{c&&F.current&&F.current.focus()},[c]);const H=O({},a,{alignItems:l,dense:M.dense,disableGutters:g,divider:v,selected:S}),A=TS(H),N=At(F,i);return V.jsx(Wa.Provider,{value:M,children:V.jsx(PS,O({ref:N,href:C.href||C.to,component:(C.href||C.to)&&p==="div"?"button":p,focusVisibleClassName:Ce(A.focusVisible,b),ownerState:H,className:Ce(A.root,_)},C,{classes:A,children:f}))})});function _S(n){return it("MuiListItemText",n)}const Wm=Je("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),OS=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],MS=n=>{const{classes:o,inset:i,primary:a,secondary:l,dense:c}=n;return lt({root:["root",i&&"inset",c&&"dense",a&&l&&"multiline"],primary:["primary"],secondary:["secondary"]},_S,o)},IS=Ae("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:i}=n;return[{[`& .${Wm.primary}`]:o.primary},{[`& .${Wm.secondary}`]:o.secondary},o.root,i.inset&&o.inset,i.primary&&i.secondary&&o.multiline,i.dense&&o.dense]}})(({ownerState:n})=>O({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},n.primary&&n.secondary&&{marginTop:6,marginBottom:6},n.inset&&{paddingLeft:56})),$S=P.forwardRef(function(o,i){const a=et({props:o,name:"MuiListItemText"}),{children:l,className:c,disableTypography:p=!1,inset:f=!1,primary:h,primaryTypographyProps:g,secondary:v,secondaryTypographyProps:b}=a,S=Se(a,OS),{dense:_}=P.useContext(Wa);let C=h??l,y=v;const M=O({},a,{disableTypography:p,inset:f,primary:!!C,secondary:!!y,dense:_}),F=MS(M);return C!=null&&C.type!==Cr&&!p&&(C=V.jsx(Cr,O({variant:_?"body2":"body1",className:F.primary,component:g!=null&&g.variant?void 0:"span",display:"block"},g,{children:C}))),y!=null&&y.type!==Cr&&!p&&(y=V.jsx(Cr,O({variant:"body2",className:F.secondary,color:"text.secondary",display:"block"},b,{children:y}))),V.jsxs(IS,O({className:Ce(F.root,c),ownerState:M,ref:i},S,{children:[C,y]}))});function NS(n){return it("MuiTooltip",n)}const Er=Je("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),zS=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function AS(n){return Math.round(n*1e5)/1e5}const LS=n=>{const{classes:o,disableInteractive:i,arrow:a,touch:l,placement:c}=n,p={popper:["popper",!i&&"popperInteractive",a&&"popperArrow"],tooltip:["tooltip",a&&"tooltipArrow",l&&"touch",`tooltipPlacement${ze(c.split("-")[0])}`],arrow:["arrow"]};return lt(p,NS,o)},DS=Ae(Kh,{name:"MuiTooltip",slot:"Popper",overridesResolver:(n,o)=>{const{ownerState:i}=n;return[o.popper,!i.disableInteractive&&o.popperInteractive,i.arrow&&o.popperArrow,!i.open&&o.popperClose]}})(({theme:n,ownerState:o,open:i})=>O({zIndex:(n.vars||n).zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!i&&{pointerEvents:"none"},o.arrow&&{[`&[data-popper-placement*="bottom"] .${Er.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${Er.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${Er.arrow}`]:O({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${Er.arrow}`]:O({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),jS=Ae("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(n,o)=>{const{ownerState:i}=n;return[o.tooltip,i.touch&&o.touch,i.arrow&&o.tooltipArrow,o[`tooltipPlacement${ze(i.placement.split("-")[0])}`]]}})(({theme:n,ownerState:o})=>O({backgroundColor:n.vars?n.vars.palette.Tooltip.bg:Ht.alpha(n.palette.grey[700],.92),borderRadius:(n.vars||n).shape.borderRadius,color:(n.vars||n).palette.common.white,fontFamily:n.typography.fontFamily,padding:"4px 8px",fontSize:n.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:n.typography.fontWeightMedium},o.arrow&&{position:"relative",margin:0},o.touch&&{padding:"8px 16px",fontSize:n.typography.pxToRem(14),lineHeight:`${AS(16/14)}em`,fontWeight:n.typography.fontWeightRegular},{[`.${Er.popper}[data-popper-placement*="left"] &`]:O({transformOrigin:"right center"},o.isRtl?O({marginLeft:"14px"},o.touch&&{marginLeft:"24px"}):O({marginRight:"14px"},o.touch&&{marginRight:"24px"})),[`.${Er.popper}[data-popper-placement*="right"] &`]:O({transformOrigin:"left center"},o.isRtl?O({marginRight:"14px"},o.touch&&{marginRight:"24px"}):O({marginLeft:"14px"},o.touch&&{marginLeft:"24px"})),[`.${Er.popper}[data-popper-placement*="top"] &`]:O({transformOrigin:"center bottom",marginBottom:"14px"},o.touch&&{marginBottom:"24px"}),[`.${Er.popper}[data-popper-placement*="bottom"] &`]:O({transformOrigin:"center top",marginTop:"14px"},o.touch&&{marginTop:"24px"})})),BS=Ae("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(n,o)=>o.arrow})(({theme:n})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:n.vars?n.vars.palette.Tooltip.bg:Ht.alpha(n.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let Oa=!1;const Um=new ls;let Bi={x:0,y:0};function Ma(n,o){return(i,...a)=>{o&&o(i,...a),n(i,...a)}}const Hm=P.forwardRef(function(o,i){var a,l,c,p,f,h,g,v,b,S,_,C,y,M,F,H,A,N,k;const B=et({props:o,name:"MuiTooltip"}),{arrow:x=!1,children:z,components:W={},componentsProps:L={},describeChild:q=!1,disableFocusListener:oe=!1,disableHoverListener:ee=!1,disableInteractive:re=!1,disableTouchListener:ne=!1,enterDelay:X=100,enterNextDelay:te=0,enterTouchDelay:j=700,followCursor:Q=!1,id:Z,leaveDelay:R=0,leaveTouchDelay:U=1500,onClose:fe,onOpen:ae,open:pe,placement:le="bottom",PopperComponent:ye,PopperProps:he={},slotProps:me={},slots:Oe={},title:He,TransitionComponent:tt=Cc,TransitionProps:Me}=B,qe=Se(B,zS),nt=P.isValidElement(z)?z:V.jsx("span",{children:z}),Gt=Qr(),qt=Oh(),[Yt,Tn]=P.useState(),[Ye,ft]=P.useState(null),Lt=P.useRef(!1),pn=re||Q,Tt=Mo(),kt=Mo(),Qt=Mo(),Xt=Mo(),[fn,we]=Eh({controlled:pe,default:!1,name:"Tooltip",state:"open"});let ut=fn;const mn=Ch(Z),Pn=P.useRef(),tr=Zn(()=>{Pn.current!==void 0&&(document.body.style.WebkitUserSelect=Pn.current,Pn.current=void 0),Xt.clear()});P.useEffect(()=>tr,[tr]);const Go=be=>{Um.clear(),Oa=!0,we(!0),ae&&!ut&&ae(be)},Xr=Zn(be=>{Um.start(800+R,()=>{Oa=!1}),we(!1),fe&&ut&&fe(be),Tt.start(Gt.transitions.duration.shortest,()=>{Lt.current=!1})}),nr=be=>{Lt.current&&be.type!=="touchstart"||(Yt&&Yt.removeAttribute("title"),kt.clear(),Qt.clear(),X||Oa&&te?kt.start(Oa?te:X,()=>{Go(be)}):Go(be))},Rr=be=>{kt.clear(),Qt.start(R,()=>{Xr(be)})},{isFocusVisibleRef:Zr,onBlur:qo,onFocus:Yo,ref:rr}=Fc(),[,Fn]=P.useState(!1),Qo=be=>{qo(be),Zr.current===!1&&(Fn(!1),Rr(be))},Xo=be=>{Yt||Tn(be.currentTarget),Yo(be),Zr.current===!0&&(Fn(!0),nr(be))},Zo=be=>{Lt.current=!0;const vt=nt.props;vt.onTouchStart&&vt.onTouchStart(be)},ds=be=>{Zo(be),Qt.clear(),Tt.clear(),tr(),Pn.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Xt.start(j,()=>{document.body.style.WebkitUserSelect=Pn.current,nr(be)})},ps=be=>{nt.props.onTouchEnd&&nt.props.onTouchEnd(be),tr(),Qt.start(U,()=>{Xr(be)})};P.useEffect(()=>{if(!ut)return;function be(vt){(vt.key==="Escape"||vt.key==="Esc")&&Xr(vt)}return document.addEventListener("keydown",be),()=>{document.removeEventListener("keydown",be)}},[Xr,ut]);const Jo=At(Ko(nt),rr,Tn,i);!He&&He!==0&&(ut=!1);const Jr=P.useRef(),_r=be=>{const vt=nt.props;vt.onMouseMove&&vt.onMouseMove(be),Bi={x:be.clientX,y:be.clientY},Jr.current&&Jr.current.update()},Wn={},Un=typeof He=="string";q?(Wn.title=!ut&&Un&&!ee?He:null,Wn["aria-describedby"]=ut?mn:null):(Wn["aria-label"]=Un?He:null,Wn["aria-labelledby"]=ut&&!Un?mn:null);const Dt=O({},Wn,qe,nt.props,{className:Ce(qe.className,nt.props.className),onTouchStart:Zo,ref:Jo},Q?{onMouseMove:_r}:{}),hn={};ne||(Dt.onTouchStart=ds,Dt.onTouchEnd=ps),ee||(Dt.onMouseOver=Ma(nr,Dt.onMouseOver),Dt.onMouseLeave=Ma(Rr,Dt.onMouseLeave),pn||(hn.onMouseOver=nr,hn.onMouseLeave=Rr)),oe||(Dt.onFocus=Ma(Xo,Dt.onFocus),Dt.onBlur=Ma(Qo,Dt.onBlur),pn||(hn.onFocus=Xo,hn.onBlur=Qo));const eo=P.useMemo(()=>{var be;let vt=[{name:"arrow",enabled:!!Ye,options:{element:Ye,padding:4}}];return(be=he.popperOptions)!=null&&be.modifiers&&(vt=vt.concat(he.popperOptions.modifiers)),O({},he.popperOptions,{modifiers:vt})},[Ye,he]),Rn=O({},B,{isRtl:qt,arrow:x,disableInteractive:pn,placement:le,PopperComponentProp:ye,touch:Lt.current}),Or=LS(Rn),fs=(a=(l=Oe.popper)!=null?l:W.Popper)!=null?a:DS,ms=(c=(p=(f=Oe.transition)!=null?f:W.Transition)!=null?p:tt)!=null?c:Cc,hs=(h=(g=Oe.tooltip)!=null?g:W.Tooltip)!=null?h:jS,_n=(v=(b=Oe.arrow)!=null?b:W.Arrow)!=null?v:BS,gs=Ui(fs,O({},he,(S=me.popper)!=null?S:L.popper,{className:Ce(Or.popper,he==null?void 0:he.className,(_=(C=me.popper)!=null?C:L.popper)==null?void 0:_.className)}),Rn),vs=Ui(ms,O({},Me,(y=me.transition)!=null?y:L.transition),Rn),al=Ui(hs,O({},(M=me.tooltip)!=null?M:L.tooltip,{className:Ce(Or.tooltip,(F=(H=me.tooltip)!=null?H:L.tooltip)==null?void 0:F.className)}),Rn),ys=Ui(_n,O({},(A=me.arrow)!=null?A:L.arrow,{className:Ce(Or.arrow,(N=(k=me.arrow)!=null?k:L.arrow)==null?void 0:N.className)}),Rn);return V.jsxs(P.Fragment,{children:[P.cloneElement(nt,Dt),V.jsx(fs,O({as:ye??Kh,placement:le,anchorEl:Q?{getBoundingClientRect:()=>({top:Bi.y,left:Bi.x,right:Bi.x,bottom:Bi.y,width:0,height:0})}:Yt,popperRef:Jr,open:Yt?ut:!1,id:mn,transition:!0},hn,gs,{popperOptions:eo,children:({TransitionProps:be})=>V.jsx(ms,O({timeout:Gt.transitions.duration.shorter},be,vs,{children:V.jsxs(hs,O({},al,{children:[He,x?V.jsx(_n,O({},ys,{ref:ft})):null]}))}))}))]})});function FS(n){return it("MuiToolbar",n)}Je("MuiToolbar",["root","gutters","regular","dense"]);const WS=["className","component","disableGutters","variant"],US=n=>{const{classes:o,disableGutters:i,variant:a}=n;return lt({root:["root",!i&&"gutters",a]},FS,o)},HS=Ae("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:i}=n;return[o.root,!i.disableGutters&&o.gutters,o[i.variant]]}})(({theme:n,ownerState:o})=>O({position:"relative",display:"flex",alignItems:"center"},!o.disableGutters&&{paddingLeft:n.spacing(2),paddingRight:n.spacing(2),[n.breakpoints.up("sm")]:{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}},o.variant==="dense"&&{minHeight:48}),({theme:n,ownerState:o})=>o.variant==="regular"&&n.mixins.toolbar),VS=P.forwardRef(function(o,i){const a=et({props:o,name:"MuiToolbar"}),{className:l,component:c="div",disableGutters:p=!1,variant:f="regular"}=a,h=Se(a,WS),g=O({},a,{component:c,disableGutters:p,variant:f}),v=US(g);return V.jsx(HS,O({as:c,className:Ce(v.root,l),ref:i,ownerState:g},h))});var Fi={},oc={};const KS=er(z1);var Vm;function Qh(){return Vm||(Vm=1,function(n){"use client";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=KS}(oc)),oc}var Km;function GS(){if(Km)return Fi;Km=1;var n=ol();Object.defineProperty(Fi,"__esModule",{value:!0}),Fi.default=void 0;var o=n(Qh()),i=Ec();return Fi.default=(0,o.default)((0,i.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu"),Fi}var qS=GS();const YS=Yr(qS),QS=({drawerWidth:n,mobileOpen:o,onDrawerToggle:i,isMobile:a,categories:l,selectedCategoryId:c,onSelectCategory:p})=>V.jsx(nS,{variant:a?"temporary":"permanent",open:a?o:!0,onClose:a?i:void 0,ModalProps:{keepMounted:!0},sx:{width:n,flexShrink:0,"& .MuiDrawer-paper":{width:n,boxSizing:"border-box"}},children:V.jsx(Wo,{sx:{p:2},children:V.jsx(SS,{children:l.map(f=>V.jsx(RS,{selected:f.id===c,onClick:()=>{p(f.id),a&&i()},children:V.jsx($S,{primary:f.name})},f.id))})})});var Wi={},Gm;function XS(){if(Gm)return Wi;Gm=1;var n=ol();Object.defineProperty(Wi,"__esModule",{value:!0}),Wi.default=void 0;var o=n(Qh()),i=Ec();return Wi.default=(0,o.default)((0,i.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy"),Wi}var ZS=XS();const qm=Yr(ZS),JS=({section:n})=>{const[o,i]=P.useState(!1),a=l=>{navigator.clipboard.writeText(l),alert("Copied to clipboard!")};return V.jsxs(ib,{sx:{position:"relative"},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[V.jsx(vb,{component:"img",sx:{width:"100%",height:140,objectFit:"cover"},image:n.previewImg,alt:n.title}),V.jsx(cb,{children:V.jsx(Cr,{variant:"subtitle1",children:n.title})}),o&&V.jsxs(Wo,{sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",bgcolor:"rgba(0,0,0,0.3)",display:"flex",justifyContent:"center",alignItems:"center"},children:[V.jsx(Hm,{title:"Copy HTML",children:V.jsx(xc,{sx:{color:"#fff",mx:1},onClick:()=>a(n.htmlCode),children:V.jsx(qm,{})})}),V.jsx(Hm,{title:"Copy CSS",children:V.jsx(xc,{sx:{color:"#fff",mx:1},onClick:()=>a(n.cssCode),children:V.jsx(qm,{})})})]})]})},ek=({category:n})=>n?V.jsxs(Wo,{p:2,children:[V.jsxs(Cr,{variant:"h5",gutterBottom:!0,children:[n.name," Sections"]}),V.jsx(Fm,{container:!0,spacing:2,children:n.sections.map(o=>V.jsx(Fm,{item:!0,xs:6,children:V.jsx(JS,{section:o})},o.id))})]}):V.jsx(Wo,{p:2,children:V.jsx(Cr,{variant:"h6",children:"No Category Selected"})}),tk={id:"cat-header",name:"Header",sections:[{id:"sec-header-1",title:"Header Section 1",htmlCode:`<!-- Header Section -->
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
}`,previewImg:"header-1.png"},{id:"sec-header-2",title:"Header Section 2",htmlCode:"",cssCode:"",previewImg:"header-2.png"},{id:"sec-header-3",title:"Header Section 3",htmlCode:"",cssCode:"",previewImg:"header-3.png"},{id:"sec-header-4",title:"Header Section 4",htmlCode:"",cssCode:"",previewImg:"header-4.png"}]},nk={id:"cat-hero",name:"Hero",sections:[{id:"sec-hero-1",title:"Hero Section 1",htmlCode:`<!-- Hero Section -->
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
}`,previewImg:"hero-2.png"},{id:"sec-hero-3",title:"Hero Section 3",htmlCode:"",cssCode:"",previewImg:"hero-3.png"},{id:"sec-hero-4",title:"Hero Section 4",htmlCode:"",cssCode:"",previewImg:"hero-4.png"}]},rk={id:"cat-feature",name:"Feature Icons",sections:[{id:"sec-feature-1",title:"Feature Icons 1",htmlCode:"",cssCode:"",previewImg:"src/assets/images/feature-1.png"},{id:"sec-feature-2",title:"Feature Icons 2",htmlCode:"",cssCode:"",previewImg:"src/assets/images/feature-2.png"},{id:"sec-feature-3",title:"Feature Icons 3",htmlCode:"",cssCode:"",previewImg:"src/assets/images/feature-3.png"},{id:"sec-feature-4",title:"Feature Icons 4",htmlCode:"",cssCode:"",previewImg:"src/assets/images/feature-4.png"}]},ok={id:"cat-grid",name:"Grid with Lines",sections:[{id:"sec-grid-1",title:"Grid with Lines 1",htmlCode:"",cssCode:"",previewImg:"src/assets/images/grid-1.png"},{id:"sec-grid-2",title:"Grid with Lines 2",htmlCode:"",cssCode:"",previewImg:"src/assets/images/grid-2.png"},{id:"sec-grid-3",title:"Grid with Lines 3",htmlCode:"",cssCode:"",previewImg:"src/assets/images/grid-3.png"},{id:"sec-grid-4",title:"Grid with Lines 4",htmlCode:"",cssCode:"",previewImg:"src/assets/images/grid-4.png"}]},ik={id:"cat-instructors",name:"Instructors",sections:[{id:"sec-instructors-1",title:"Instructors 1",htmlCode:`<!-- Instructor Section -->
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
}`,previewImg:"instructors-1.png"},{id:"sec-instructors-2",title:"Instructors 2",htmlCode:"",cssCode:"",previewImg:"instructors-2.png"}]},sk={id:"cat-text-image",name:"Text-Image Overlap",sections:[{id:"sec-textimg-1",title:"Text-Image 1",htmlCode:`<section class="digital-age-section">
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
}`,previewImg:"textimg-1.png"},{id:"sec-textimg-2",title:"Text-Image 2",htmlCode:"",cssCode:"",previewImg:"src/assets/images/textimg-2.png"},{id:"sec-textimg-3",title:"Text-Image 3",htmlCode:"",cssCode:"",previewImg:"src/assets/images/textimg-3.png"},{id:"sec-textimg-4",title:"Text-Image 4",htmlCode:"",cssCode:"",previewImg:"src/assets/images/textimg-4.png"}]},ak={id:"cat-download",name:"Download",sections:[{id:"sec-download-1",title:"Download Section 1",htmlCode:`<!-- Download Section -->
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
}`,previewImg:"download-2.png"},{id:"sec-download-3",title:"Download Section 3",htmlCode:"",cssCode:"",previewImg:"=download-3.png"}]},lk={id:"cat-courseDetails",name:"course-details",sections:[{id:"sec-course-details-1",title:"Course Details Section 1",htmlCode:`<!-- Course Details Section -->
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

}`,previewImg:"course-details-1.png"},{id:"sec-course-details-2",title:"Course Details Section 2",htmlCode:"",cssCode:"",previewImg:"course-details-2.png"}]},uk={id:"cat-expertise",name:"Expertise",sections:[{id:"sec-expertise-1",title:"Download Section 1",htmlCode:`<!-- Expertise Section -->
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
`,previewImg:"expertise-2.png"},{id:"sec-expertise-3",title:"Download Section 3",htmlCode:"",cssCode:"",previewImg:"expertise-3.png"}]},ck={id:"cat-benefits",name:"Benefits",sections:[{id:"sec-benefits-1",title:"benefits 1",htmlCode:`<!-- Benefits Grid Section - 4 Areas -->
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
`,previewImg:"benefits-1.png"}]},dk={id:"cat-about",name:"About",sections:[{id:"sec-about-1",title:"About 1",htmlCode:`<section class="about-mit-section">
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
`,previewImg:"about-1.png"},{id:"sec-about-2",title:"About 2",htmlCode:"",cssCode:"",previewImg:"about-2.png"}]},pk={id:"cat-footer",name:"Footer",sections:[{id:"sec-footer-1",title:"Footer 1",htmlCode:`<!-- Footer -->
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
}`,previewImg:"footer-1.png"},{id:"sec-footer-2",title:"Footer 2",htmlCode:"",cssCode:"",previewImg:"footer-2.png"}]},fk={id:"cat-subhero",name:"Sub Hero",sections:[{id:"sec-subhero-1",title:"Sub Hero Section 1",htmlCode:`<section class="subhero">
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
`,previewImg:"subhero-1.png"},{id:"sec-subhero-2",title:"Sub Hero Section 2",htmlCode:"",cssCode:"",previewImg:"subhero-2.png"}]},mk={id:"cat-experts",name:"Experts",sections:[{id:"sec-experts-1",title:"experts 1",htmlCode:`<section class="mit-expert-section">

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
}`,previewImg:"experts-1.png"},{id:"sec-experts-2",title:"experts 2",htmlCode:"",cssCode:"",previewImg:"experts-2.png"}]},hk={id:"cat-byTheNumbers",name:"By The Numbers",sections:[{id:"sec-byTheNumbers-1",title:"By The Numbers 1",htmlCode:`<section class="numbers-section">
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

`,previewImg:"by-the-numbers-1.png"},{id:"sec-byTheNumbers-2",title:"By The Numbers 2",htmlCode:"",cssCode:"",previewImg:"by-the-numbers-2.png"}]},ic=[tk,nk,rk,ok,ik,sk,ak,lk,uk,ck,dk,pk,fk,mk,hk];function gk(){const[n,o]=P.useState(ic[0].id),[i,a]=P.useState(!1),l=Qr(),c=dx(l.breakpoints.down("sm")),p=240,f=()=>a(!i),h=ic.find(g=>g.id===n);return V.jsxs(Wo,{sx:{display:"flex"},children:[V.jsx(bb,{}),V.jsx(Sw,{position:"fixed",sx:{ml:c?0:`${p}px`,width:c?"100%":`calc(100% - ${p}px)`},children:V.jsxs(VS,{children:[c&&V.jsx(xc,{color:"inherit",edge:"start",onClick:f,sx:{mr:2},children:V.jsx(YS,{})}),V.jsx(Cr,{variant:"h6",noWrap:!0,component:"div",children:"MIT Landing Page Library"})]})}),V.jsx(QS,{drawerWidth:p,mobileOpen:i,onDrawerToggle:f,isMobile:c,categories:ic,selectedCategoryId:n,onSelectCategory:o}),V.jsx(Wo,{component:"main",sx:{flexGrow:1,p:2,mt:"64px"},children:V.jsx(ek,{category:h})})]})}const vk=Wc({palette:{primary:{main:"#001C39"}}});qv.createRoot(document.getElementById("root")).render(V.jsx(kn.StrictMode,{children:V.jsx(R1,{theme:vk,children:V.jsx(gk,{})})}));
