(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function na(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const X={},wt=[],Oe=()=>{},_s=()=>!1,ws=/^on[^a-z]/,Jn=e=>ws.test(e),ra=e=>e.startsWith("onUpdate:"),re=Object.assign,aa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ks=Object.prototype.hasOwnProperty,$=(e,t)=>ks.call(e,t),F=Array.isArray,kt=e=>sn(e)==="[object Map]",Gn=e=>sn(e)==="[object Set]",$a=e=>sn(e)==="[object Date]",D=e=>typeof e=="function",te=e=>typeof e=="string",Xt=e=>typeof e=="symbol",K=e=>e!==null&&typeof e=="object",Xi=e=>K(e)&&D(e.then)&&D(e.catch),qi=Object.prototype.toString,sn=e=>qi.call(e),As=e=>sn(e).slice(8,-1),Vi=e=>sn(e)==="[object Object]",ia=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Nn=na(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Os=/-(\w)/g,Me=Zn(e=>e.replace(Os,(t,n)=>n?n.toUpperCase():"")),Es=/\B([A-Z])/g,It=Zn(e=>e.replace(Es,"-$1").toLowerCase()),Qn=Zn(e=>e.charAt(0).toUpperCase()+e.slice(1)),br=Zn(e=>e?`on${Qn(e)}`:""),qt=(e,t)=>!Object.is(e,t),Mn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$n=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ji=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ua;const Sr=()=>Ua||(Ua=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function oa(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=te(r)?Ts(r):oa(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(te(e))return e;if(K(e))return e}}const Ps=/;(?![^(]*\))/g,Cs=/:([^]+)/,Ss=/\/\*[^]*?\*\//g;function Ts(e){const t={};return e.replace(Ss,"").split(Ps).forEach(n=>{if(n){const r=n.split(Cs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function er(e){let t="";if(te(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=er(e[n]);r&&(t+=r+" ")}else if(K(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Is="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ns=na(Is);function Gi(e){return!!e||e===""}function Ms(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=tr(e[r],t[r]);return n}function tr(e,t){if(e===t)return!0;let n=$a(e),r=$a(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Xt(e),r=Xt(t),n||r)return e===t;if(n=F(e),r=F(t),n||r)return n&&r?Ms(e,t):!1;if(n=K(e),r=K(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!tr(e[o],t[o]))return!1}}return String(e)===String(t)}function Fs(e,t){return e.findIndex(n=>tr(n,t))}const Ht=e=>te(e)?e:e==null?"":F(e)||K(e)&&(e.toString===qi||!D(e.toString))?JSON.stringify(e,Zi,2):String(e),Zi=(e,t)=>t&&t.__v_isRef?Zi(e,t.value):kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Gn(t)?{[`Set(${t.size})`]:[...t.values()]}:K(t)&&!F(t)&&!Vi(t)?String(t):t;let _e;class Rs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_e,!t&&_e&&(this.index=(_e.scopes||(_e.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=_e;try{return _e=this,t()}finally{_e=n}}}on(){_e=this}off(){_e=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ls(e,t=_e){t&&t.active&&t.effects.push(e)}function Ds(){return _e}const sa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Qi=e=>(e.w&Ge)>0,eo=e=>(e.n&Ge)>0,js=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ge},zs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Qi(a)&&!eo(a)?a.delete(e):t[n++]=a,a.w&=~Ge,a.n&=~Ge}t.length=n}},Tr=new WeakMap;let zt=0,Ge=1;const Ir=30;let we;const dt=Symbol(""),Nr=Symbol("");class la{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ls(this,r)}run(){if(!this.active)return this.fn();let t=we,n=Ve;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=we,we=this,Ve=!0,Ge=1<<++zt,zt<=Ir?js(this):Ha(this),this.fn()}finally{zt<=Ir&&zs(this),Ge=1<<--zt,we=this.parent,Ve=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(Ha(this),this.onStop&&this.onStop(),this.active=!1)}}function Ha(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ve=!0;const to=[];function Nt(){to.push(Ve),Ve=!1}function Mt(){const e=to.pop();Ve=e===void 0?!0:e}function me(e,t,n){if(Ve&&we){let r=Tr.get(e);r||Tr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=sa()),no(a)}}function no(e,t){let n=!1;zt<=Ir?eo(e)||(e.n|=Ge,n=!Qi(e)):n=!e.has(we),n&&(e.add(we),we.deps.push(e))}function je(e,t,n,r,a,i){const o=Tr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?ia(n)&&s.push(o.get("length")):(s.push(o.get(dt)),kt(e)&&s.push(o.get(Nr)));break;case"delete":F(e)||(s.push(o.get(dt)),kt(e)&&s.push(o.get(Nr)));break;case"set":kt(e)&&s.push(o.get(dt));break}if(s.length===1)s[0]&&Mr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Mr(sa(l))}}function Mr(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Ba(r);for(const r of n)r.computed||Ba(r)}function Ba(e,t){(e!==we||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const $s=na("__proto__,__v_isRef,__isVue"),ro=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xt)),Us=fa(),Hs=fa(!1,!0),Bs=fa(!0),Ya=Ys();function Ys(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Nt();const r=U(this)[t].apply(this,n);return Mt(),r}}),e}function Ws(e){const t=U(this);return me(t,"has",e),t.hasOwnProperty(e)}function fa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?sl:lo:t?so:oo).get(r))return r;const o=F(r);if(!e){if(o&&$(Ya,a))return Reflect.get(Ya,a,i);if(a==="hasOwnProperty")return Ws}const s=Reflect.get(r,a,i);return(Xt(a)?ro.has(a):$s(a))||(e||me(r,"get",a),t)?s:le(s)?o&&ia(a)?s:s.value:K(s)?e?fo(s):rr(s):s}}const Ks=ao(),Xs=ao(!0);function ao(e=!1){return function(n,r,a,i){let o=n[r];if(Pt(o)&&le(o)&&!le(a))return!1;if(!e&&(!Un(a)&&!Pt(a)&&(o=U(o),a=U(a)),!F(n)&&le(o)&&!le(a)))return o.value=a,!0;const s=F(n)&&ia(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?qt(a,o)&&je(n,"set",r,a):je(n,"add",r,a)),l}}function qs(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&je(e,"delete",t,void 0),r}function Vs(e,t){const n=Reflect.has(e,t);return(!Xt(t)||!ro.has(t))&&me(e,"has",t),n}function Js(e){return me(e,"iterate",F(e)?"length":dt),Reflect.ownKeys(e)}const io={get:Us,set:Ks,deleteProperty:qs,has:Vs,ownKeys:Js},Gs={get:Bs,set(e,t){return!0},deleteProperty(e,t){return!0}},Zs=re({},io,{get:Hs,set:Xs}),ca=e=>e,nr=e=>Reflect.getPrototypeOf(e);function hn(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&me(a,"get",t),me(a,"get",i));const{has:o}=nr(a),s=r?ca:n?ma:Vt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function gn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function vn(e,t=!1){return e=e.__v_raw,!t&&me(U(e),"iterate",dt),Reflect.get(e,"size",e)}function Wa(e){e=U(e);const t=U(this);return nr(t).has.call(t,e)||(t.add(e),je(t,"add",e,e)),this}function Ka(e,t){t=U(t);const n=U(this),{has:r,get:a}=nr(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?qt(t,o)&&je(n,"set",e,t):je(n,"add",e,t),this}function Xa(e){const t=U(this),{has:n,get:r}=nr(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&je(t,"delete",e,void 0),i}function qa(){const e=U(this),t=e.size!==0,n=e.clear();return t&&je(e,"clear",void 0,void 0),n}function bn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?ca:e?ma:Vt;return!e&&me(s,"iterate",dt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function yn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=kt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?ca:t?ma:Vt;return!t&&me(i,"iterate",l?Nr:dt),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:s?[d(m[0]),d(m[1])]:d(m),done:h}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:this}}function Qs(){const e={get(i){return hn(this,i)},get size(){return vn(this)},has:gn,add:Wa,set:Ka,delete:Xa,clear:qa,forEach:bn(!1,!1)},t={get(i){return hn(this,i,!1,!0)},get size(){return vn(this)},has:gn,add:Wa,set:Ka,delete:Xa,clear:qa,forEach:bn(!1,!0)},n={get(i){return hn(this,i,!0)},get size(){return vn(this,!0)},has(i){return gn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:bn(!0,!1)},r={get(i){return hn(this,i,!0,!0)},get size(){return vn(this,!0)},has(i){return gn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:bn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=yn(i,!1,!1),n[i]=yn(i,!0,!1),t[i]=yn(i,!1,!0),r[i]=yn(i,!0,!0)}),[e,n,t,r]}const[el,tl,nl,rl]=Qs();function ua(e,t){const n=t?e?rl:nl:e?tl:el;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const al={get:ua(!1,!1)},il={get:ua(!1,!0)},ol={get:ua(!0,!1)},oo=new WeakMap,so=new WeakMap,lo=new WeakMap,sl=new WeakMap;function ll(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fl(e){return e.__v_skip||!Object.isExtensible(e)?0:ll(As(e))}function rr(e){return Pt(e)?e:da(e,!1,io,al,oo)}function cl(e){return da(e,!1,Zs,il,so)}function fo(e){return da(e,!0,Gs,ol,lo)}function da(e,t,n,r,a){if(!K(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=fl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function At(e){return Pt(e)?At(e.__v_raw):!!(e&&e.__v_isReactive)}function Pt(e){return!!(e&&e.__v_isReadonly)}function Un(e){return!!(e&&e.__v_isShallow)}function co(e){return At(e)||Pt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function uo(e){return $n(e,"__v_skip",!0),e}const Vt=e=>K(e)?rr(e):e,ma=e=>K(e)?fo(e):e;function mo(e){Ve&&we&&(e=U(e),no(e.dep||(e.dep=sa())))}function po(e,t){e=U(e);const n=e.dep;n&&Mr(n)}function le(e){return!!(e&&e.__v_isRef===!0)}function xn(e){return ul(e,!1)}function ul(e,t){return le(e)?e:new dl(e,t)}class dl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:Vt(t)}get value(){return mo(this),this._value}set value(t){const n=this.__v_isShallow||Un(t)||Pt(t);t=n?t:U(t),qt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Vt(t),po(this))}}function ml(e){return le(e)?e.value:e}const pl={get:(e,t,n)=>ml(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return le(a)&&!le(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ho(e){return At(e)?e:new Proxy(e,pl)}class hl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new la(t,()=>{this._dirty||(this._dirty=!0,po(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return mo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function gl(e,t,n=!1){let r,a;const i=D(e);return i?(r=e,a=Oe):(r=e.get,a=e.set),new hl(r,a,i||!a,n)}function Je(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){ar(i,t,n)}return a}function Ee(e,t,n,r){if(D(e)){const i=Je(e,t,n,r);return i&&Xi(i)&&i.catch(o=>{ar(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ee(e[i],t,n,r));return a}function ar(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Je(l,null,10,[e,o,s]);return}}vl(e,n,a,r)}function vl(e,t,n,r=!0){console.error(e)}let Jt=!1,Fr=!1;const se=[];let Ie=0;const Ot=[];let Le=null,st=0;const go=Promise.resolve();let pa=null;function bl(e){const t=pa||go;return e?t.then(this?e.bind(this):e):t}function yl(e){let t=Ie+1,n=se.length;for(;t<n;){const r=t+n>>>1;Gt(se[r])<e?t=r+1:n=r}return t}function ha(e){(!se.length||!se.includes(e,Jt&&e.allowRecurse?Ie+1:Ie))&&(e.id==null?se.push(e):se.splice(yl(e.id),0,e),vo())}function vo(){!Jt&&!Fr&&(Fr=!0,pa=go.then(yo))}function xl(e){const t=se.indexOf(e);t>Ie&&se.splice(t,1)}function _l(e){F(e)?Ot.push(...e):(!Le||!Le.includes(e,e.allowRecurse?st+1:st))&&Ot.push(e),vo()}function Va(e,t=Jt?Ie+1:0){for(;t<se.length;t++){const n=se[t];n&&n.pre&&(se.splice(t,1),t--,n())}}function bo(e){if(Ot.length){const t=[...new Set(Ot)];if(Ot.length=0,Le){Le.push(...t);return}for(Le=t,Le.sort((n,r)=>Gt(n)-Gt(r)),st=0;st<Le.length;st++)Le[st]();Le=null,st=0}}const Gt=e=>e.id==null?1/0:e.id,wl=(e,t)=>{const n=Gt(e)-Gt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function yo(e){Fr=!1,Jt=!0,se.sort(wl);const t=Oe;try{for(Ie=0;Ie<se.length;Ie++){const n=se[Ie];n&&n.active!==!1&&Je(n,null,14)}}finally{Ie=0,se.length=0,bo(),Jt=!1,pa=null,(se.length||Ot.length)&&yo()}}function kl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||X;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[d]||X;h&&(a=n.map(y=>te(y)?y.trim():y)),m&&(a=n.map(Ji))}let s,l=r[s=br(t)]||r[s=br(Me(t))];!l&&i&&(l=r[s=br(It(t))]),l&&Ee(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ee(c,e,6,a)}}function xo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!D(e)){const l=c=>{const d=xo(c,t,!0);d&&(s=!0,re(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(K(e)&&r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):re(o,i),K(e)&&r.set(e,o),o)}function ir(e,t){return!e||!Jn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,It(t))||$(e,t))}let be=null,or=null;function Hn(e){const t=be;return be=e,or=e&&e.type.__scopeId||null,t}function _o(e){or=e}function wo(){or=null}function Al(e,t=be,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&oi(-1);const i=Hn(t);let o;try{o=e(...a)}finally{Hn(i),r._d&&oi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function yr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:h,setupState:y,ctx:P,inheritAttrs:I}=e;let z,k;const O=Hn(e);try{if(n.shapeFlag&4){const T=a||r;z=Te(d.call(T,T,m,i,y,h,P)),k=l}else{const T=t;z=Te(T.length>1?T(i,{attrs:l,slots:s,emit:c}):T(i,null)),k=t.props?l:Ol(l)}}catch(T){Yt.length=0,ar(T,e,1),z=Q(Zt)}let R=z;if(k&&I!==!1){const T=Object.keys(k),{shapeFlag:H}=R;T.length&&H&7&&(o&&T.some(ra)&&(k=El(k,o)),R=Ct(R,k))}return n.dirs&&(R=Ct(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),z=R,Hn(O),z}const Ol=e=>{let t;for(const n in e)(n==="class"||n==="style"||Jn(n))&&((t||(t={}))[n]=e[n]);return t},El=(e,t)=>{const n={};for(const r in e)(!ra(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Pl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ja(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const h=d[m];if(o[h]!==r[h]&&!ir(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ja(r,o,c):!0:!!o;return!1}function Ja(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!ir(n,i))return!0}return!1}function Cl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Sl=e=>e.__isSuspense;function Tl(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):_l(e)}const _n={};function Fn(e,t,n){return ko(e,t,n)}function ko(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=X){var s;const l=Ds()===((s=ae)==null?void 0:s.scope)?ae:null;let c,d=!1,m=!1;if(le(e)?(c=()=>e.value,d=Un(e)):At(e)?(c=()=>e,r=!0):F(e)?(m=!0,d=e.some(T=>At(T)||Un(T)),c=()=>e.map(T=>{if(le(T))return T.value;if(At(T))return ft(T);if(D(T))return Je(T,l,2)})):D(e)?t?c=()=>Je(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Ee(e,l,3,[y])}:c=Oe,t&&r){const T=c;c=()=>ft(T())}let h,y=T=>{h=O.onStop=()=>{Je(T,l,4)}},P;if(en)if(y=Oe,t?n&&Ee(t,l,3,[c(),m?[]:void 0,y]):c(),a==="sync"){const T=Cf();P=T.__watcherHandles||(T.__watcherHandles=[])}else return Oe;let I=m?new Array(e.length).fill(_n):_n;const z=()=>{if(O.active)if(t){const T=O.run();(r||d||(m?T.some((H,ie)=>qt(H,I[ie])):qt(T,I)))&&(h&&h(),Ee(t,l,3,[T,I===_n?void 0:m&&I[0]===_n?[]:I,y]),I=T)}else O.run()};z.allowRecurse=!!t;let k;a==="sync"?k=z:a==="post"?k=()=>de(z,l&&l.suspense):(z.pre=!0,l&&(z.id=l.uid),k=()=>ha(z));const O=new la(c,k);t?n?z():I=O.run():a==="post"?de(O.run.bind(O),l&&l.suspense):O.run();const R=()=>{O.stop(),l&&l.scope&&aa(l.scope.effects,O)};return P&&P.push(R),R}function Il(e,t,n){const r=this.proxy,a=te(e)?e.includes(".")?Ao(r,e):()=>r[e]:e.bind(r,r);let i;D(t)?i=t:(i=t.handler,n=t);const o=ae;St(this);const s=ko(a,i.bind(r),n);return o?St(o):mt(),s}function Ao(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ft(e,t){if(!K(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),le(e))ft(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)ft(e[n],t);else if(Gn(e)||kt(e))e.forEach(n=>{ft(n,t)});else if(Vi(e))for(const n in e)ft(e[n],t);return e}function bt(e,t){const n=be;if(n===null)return e;const r=cr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=X]=t[i];o&&(D(o)&&(o={mounted:o,updated:o}),o.deep&&ft(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function rt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Nt(),Ee(l,n,8,[e.el,s,e,t]),Mt())}}function Nl(e,t){return D(e)?(()=>re({name:e.name},t,{setup:e}))():e}const Rn=e=>!!e.type.__asyncLoader,Oo=e=>e.type.__isKeepAlive;function Ml(e,t){Eo(e,"a",t)}function Fl(e,t){Eo(e,"da",t)}function Eo(e,t,n=ae){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(sr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Oo(a.parent.vnode)&&Rl(r,t,n,a),a=a.parent}}function Rl(e,t,n,r){const a=sr(t,e,r,!0);Co(()=>{aa(r[t],a)},n)}function sr(e,t,n=ae,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Nt(),St(n);const s=Ee(t,n,e,o);return mt(),Mt(),s});return r?a.unshift(i):a.push(i),i}}const He=e=>(t,n=ae)=>(!en||e==="sp")&&sr(e,(...r)=>t(...r),n),Ll=He("bm"),Po=He("m"),Dl=He("bu"),jl=He("u"),zl=He("bum"),Co=He("um"),$l=He("sp"),Ul=He("rtg"),Hl=He("rtc");function Bl(e,t=ae){sr("ec",e,t)}const So="components";function Yl(e,t){return Kl(So,e,!0,t)||e}const Wl=Symbol.for("v-ndc");function Kl(e,t,n=!0,r=!1){const a=be||ae;if(a){const i=a.type;if(e===So){const s=Af(i,!1);if(s&&(s===t||s===Me(t)||s===Qn(Me(t))))return i}const o=Ga(a[e]||i[e],t)||Ga(a.appContext[e],t);return!o&&r?i:o}}function Ga(e,t){return e&&(e[t]||e[Me(t)]||e[Qn(Me(t))])}function Rr(e,t,n,r){let a;const i=n&&n[r];if(F(e)||te(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(K(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Lr=e=>e?zo(e)?cr(e)||e.proxy:Lr(e.parent):null,Bt=re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Lr(e.parent),$root:e=>Lr(e.root),$emit:e=>e.emit,$options:e=>ga(e),$forceUpdate:e=>e.f||(e.f=()=>ha(e.update)),$nextTick:e=>e.n||(e.n=bl.bind(e.proxy)),$watch:e=>Il.bind(e)}),xr=(e,t)=>e!==X&&!e.__isScriptSetup&&$(e,t),Xl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const y=o[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(xr(r,t))return o[t]=1,r[t];if(a!==X&&$(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return o[t]=3,i[t];if(n!==X&&$(n,t))return o[t]=4,n[t];Dr&&(o[t]=0)}}const d=Bt[t];let m,h;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==X&&$(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,$(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return xr(a,t)?(a[t]=n,!0):r!==X&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==X&&$(e,o)||xr(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(Bt,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Za(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Dr=!0;function ql(e){const t=ga(e),n=e.proxy,r=e.ctx;Dr=!1,t.beforeCreate&&Qa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:h,beforeUpdate:y,updated:P,activated:I,deactivated:z,beforeDestroy:k,beforeUnmount:O,destroyed:R,unmounted:T,render:H,renderTracked:ie,renderTriggered:oe,errorCaptured:ye,serverPrefetch:ve,expose:Fe,inheritAttrs:Rt,components:un,directives:dn,filters:hr}=t;if(c&&Vl(c,r,null),o)for(const J in o){const Y=o[J];D(Y)&&(r[J]=Y.bind(n))}if(a){const J=a.call(n,n);K(J)&&(e.data=rr(J))}if(Dr=!0,i)for(const J in i){const Y=i[J],tt=D(Y)?Y.bind(n,n):D(Y.get)?Y.get.bind(n,n):Oe,mn=!D(Y)&&D(Y.set)?Y.set.bind(n):Oe,nt=ot({get:tt,set:mn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Pe=>nt.value=Pe})}if(s)for(const J in s)To(s[J],r,n,J);if(l){const J=D(l)?l.call(n):l;Reflect.ownKeys(J).forEach(Y=>{tf(Y,J[Y])})}d&&Qa(d,e,"c");function fe(J,Y){F(Y)?Y.forEach(tt=>J(tt.bind(n))):Y&&J(Y.bind(n))}if(fe(Ll,m),fe(Po,h),fe(Dl,y),fe(jl,P),fe(Ml,I),fe(Fl,z),fe(Bl,ye),fe(Hl,ie),fe(Ul,oe),fe(zl,O),fe(Co,T),fe($l,ve),F(Fe))if(Fe.length){const J=e.exposed||(e.exposed={});Fe.forEach(Y=>{Object.defineProperty(J,Y,{get:()=>n[Y],set:tt=>n[Y]=tt})})}else e.exposed||(e.exposed={});H&&e.render===Oe&&(e.render=H),Rt!=null&&(e.inheritAttrs=Rt),un&&(e.components=un),dn&&(e.directives=dn)}function Vl(e,t,n=Oe){F(e)&&(e=jr(e));for(const r in e){const a=e[r];let i;K(a)?"default"in a?i=Ln(a.from||r,a.default,!0):i=Ln(a.from||r):i=Ln(a),le(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Qa(e,t,n){Ee(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function To(e,t,n,r){const a=r.includes(".")?Ao(n,r):()=>n[r];if(te(e)){const i=t[e];D(i)&&Fn(a,i)}else if(D(e))Fn(a,e.bind(n));else if(K(e))if(F(e))e.forEach(i=>To(i,t,n,r));else{const i=D(e.handler)?e.handler.bind(n):t[e.handler];D(i)&&Fn(a,i,e)}}function ga(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Bn(l,c,o,!0)),Bn(l,t,o)),K(t)&&i.set(t,l),l}function Bn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Bn(e,i,n,!0),a&&a.forEach(o=>Bn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Jl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Jl={data:ei,props:ti,emits:ti,methods:$t,computed:$t,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:$t,directives:$t,watch:Zl,provide:ei,inject:Gl};function ei(e,t){return t?e?function(){return re(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function Gl(e,t){return $t(jr(e),jr(t))}function jr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ce(e,t){return e?[...new Set([].concat(e,t))]:t}function $t(e,t){return e?re(Object.create(null),e,t):t}function ti(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:re(Object.create(null),Za(e),Za(t??{})):t}function Zl(e,t){if(!e)return t;if(!t)return e;const n=re(Object.create(null),e);for(const r in t)n[r]=ce(e[r],t[r]);return n}function Io(){return{app:null,config:{isNativeTag:_s,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ql=0;function ef(e,t){return function(r,a=null){D(r)||(r=re({},r)),a!=null&&!K(a)&&(a=null);const i=Io(),o=new Set;let s=!1;const l=i.app={_uid:Ql++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Sf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&D(c.install)?(o.add(c),c.install(l,...d)):D(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const h=Q(r,a);return h.appContext=i,d&&t?t(h,c):e(h,c,m),s=!0,l._container=c,c.__vue_app__=l,cr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Yn=l;try{return c()}finally{Yn=null}}};return l}}let Yn=null;function tf(e,t){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[e]=t}}function Ln(e,t,n=!1){const r=ae||be;if(r||Yn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Yn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&D(t)?t.call(r&&r.proxy):t}}function nf(e,t,n,r=!1){const a={},i={};$n(i,fr,1),e.propsDefaults=Object.create(null),No(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:cl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function rf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let h=d[m];if(ir(e.emitsOptions,h))continue;const y=t[h];if(l)if($(i,h))y!==i[h]&&(i[h]=y,c=!0);else{const P=Me(h);a[P]=zr(l,s,P,y,e,!1)}else y!==i[h]&&(i[h]=y,c=!0)}}}else{No(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!$(t,m)&&((d=It(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=zr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&je(e,"set","$attrs")}function No(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Nn(l))continue;const c=t[l];let d;a&&$(a,d=Me(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:ir(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||X;for(let d=0;d<i.length;d++){const m=i[d];n[m]=zr(a,l,m,c[m],e,!$(c,m))}}return o}function zr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&D(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(St(a),r=c[n]=l.call(null,t),mt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===It(n))&&(r=!0))}return r}function Mo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!D(e)){const d=m=>{l=!0;const[h,y]=Mo(m,t,!0);re(o,h),y&&s.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return K(e)&&r.set(e,wt),wt;if(F(i))for(let d=0;d<i.length;d++){const m=Me(i[d]);ni(m)&&(o[m]=X)}else if(i)for(const d in i){const m=Me(d);if(ni(m)){const h=i[d],y=o[m]=F(h)||D(h)?{type:h}:re({},h);if(y){const P=ii(Boolean,y.type),I=ii(String,y.type);y[0]=P>-1,y[1]=I<0||P<I,(P>-1||$(y,"default"))&&s.push(m)}}}const c=[o,s];return K(e)&&r.set(e,c),c}function ni(e){return e[0]!=="$"}function ri(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ai(e,t){return ri(e)===ri(t)}function ii(e,t){return F(t)?t.findIndex(n=>ai(n,e)):D(t)&&ai(t,e)?0:-1}const Fo=e=>e[0]==="_"||e==="$stable",va=e=>F(e)?e.map(Te):[Te(e)],af=(e,t,n)=>{if(t._n)return t;const r=Al((...a)=>va(t(...a)),n);return r._c=!1,r},Ro=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Fo(a))continue;const i=e[a];if(D(i))t[a]=af(a,i,r);else if(i!=null){const o=va(i);t[a]=()=>o}}},Lo=(e,t)=>{const n=va(t);e.slots.default=()=>n},of=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),$n(t,"_",n)):Ro(t,e.slots={})}else e.slots={},t&&Lo(e,t);$n(e.slots,fr,1)},sf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=X;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(re(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Ro(t,a)),o=t}else t&&(Lo(e,t),o={default:1});if(i)for(const s in a)!Fo(s)&&!(s in o)&&delete a[s]};function $r(e,t,n,r,a=!1){if(F(e)){e.forEach((h,y)=>$r(h,t&&(F(t)?t[y]:t),n,r,a));return}if(Rn(r)&&!a)return;const i=r.shapeFlag&4?cr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===X?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(te(c)?(d[c]=null,$(m,c)&&(m[c]=null)):le(c)&&(c.value=null)),D(l))Je(l,s,12,[o,d]);else{const h=te(l),y=le(l);if(h||y){const P=()=>{if(e.f){const I=h?$(m,l)?m[l]:d[l]:l.value;a?F(I)&&aa(I,i):F(I)?I.includes(i)||I.push(i):h?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else h?(d[l]=o,$(m,l)&&(m[l]=o)):y&&(l.value=o,e.k&&(d[e.k]=o))};o?(P.id=-1,de(P,n)):P()}}}const de=Tl;function lf(e){return ff(e)}function ff(e,t){const n=Sr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:h,setScopeId:y=Oe,insertStaticContent:P}=e,I=(f,u,p,v=null,g=null,_=null,A=!1,x=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!Dt(f,u)&&(v=pn(f),Pe(f,g,_,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:N,shapeFlag:C}=u;switch(b){case lr:z(f,u,p,v);break;case Zt:k(f,u,p,v);break;case _r:f==null&&O(u,p,v,A);break;case he:un(f,u,p,v,g,_,A,x,w);break;default:C&1?H(f,u,p,v,g,_,A,x,w):C&6?dn(f,u,p,v,g,_,A,x,w):(C&64||C&128)&&b.process(f,u,p,v,g,_,A,x,w,gt)}N!=null&&g&&$r(N,f&&f.ref,_,u||f,!u)},z=(f,u,p,v)=>{if(f==null)r(u.el=s(u.children),p,v);else{const g=u.el=f.el;u.children!==f.children&&c(g,u.children)}},k=(f,u,p,v)=>{f==null?r(u.el=l(u.children||""),p,v):u.el=f.el},O=(f,u,p,v)=>{[f.el,f.anchor]=P(f.children,u,p,v,f.el,f.anchor)},R=({el:f,anchor:u},p,v)=>{let g;for(;f&&f!==u;)g=h(f),r(f,p,v),f=g;r(u,p,v)},T=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=h(f),a(f),f=p;a(u)},H=(f,u,p,v,g,_,A,x,w)=>{A=A||u.type==="svg",f==null?ie(u,p,v,g,_,A,x,w):ve(f,u,g,_,A,x,w)},ie=(f,u,p,v,g,_,A,x)=>{let w,b;const{type:N,props:C,shapeFlag:M,transition:L,dirs:j}=f;if(w=f.el=o(f.type,_,C&&C.is,C),M&8?d(w,f.children):M&16&&ye(f.children,w,null,v,g,_&&N!=="foreignObject",A,x),j&&rt(f,null,v,"created"),oe(w,f,f.scopeId,A,v),C){for(const B in C)B!=="value"&&!Nn(B)&&i(w,B,null,C[B],_,f.children,v,g,Re);"value"in C&&i(w,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Se(b,v,f)}j&&rt(f,null,v,"beforeMount");const W=(!g||g&&!g.pendingBranch)&&L&&!L.persisted;W&&L.beforeEnter(w),r(w,u,p),((b=C&&C.onVnodeMounted)||W||j)&&de(()=>{b&&Se(b,v,f),W&&L.enter(w),j&&rt(f,null,v,"mounted")},g)},oe=(f,u,p,v,g)=>{if(p&&y(f,p),v)for(let _=0;_<v.length;_++)y(f,v[_]);if(g){let _=g.subTree;if(u===_){const A=g.vnode;oe(f,A,A.scopeId,A.slotScopeIds,g.parent)}}},ye=(f,u,p,v,g,_,A,x,w=0)=>{for(let b=w;b<f.length;b++){const N=f[b]=x?Ke(f[b]):Te(f[b]);I(null,N,u,p,v,g,_,A,x)}},ve=(f,u,p,v,g,_,A)=>{const x=u.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:N}=u;w|=f.patchFlag&16;const C=f.props||X,M=u.props||X;let L;p&&at(p,!1),(L=M.onVnodeBeforeUpdate)&&Se(L,p,u,f),N&&rt(u,f,p,"beforeUpdate"),p&&at(p,!0);const j=g&&u.type!=="foreignObject";if(b?Fe(f.dynamicChildren,b,x,p,v,j,_):A||Y(f,u,x,null,p,v,j,_,!1),w>0){if(w&16)Rt(x,u,C,M,p,v,g);else if(w&2&&C.class!==M.class&&i(x,"class",null,M.class,g),w&4&&i(x,"style",C.style,M.style,g),w&8){const W=u.dynamicProps;for(let B=0;B<W.length;B++){const Z=W[B],xe=C[Z],vt=M[Z];(vt!==xe||Z==="value")&&i(x,Z,xe,vt,g,f.children,p,v,Re)}}w&1&&f.children!==u.children&&d(x,u.children)}else!A&&b==null&&Rt(x,u,C,M,p,v,g);((L=M.onVnodeUpdated)||N)&&de(()=>{L&&Se(L,p,u,f),N&&rt(u,f,p,"updated")},v)},Fe=(f,u,p,v,g,_,A)=>{for(let x=0;x<u.length;x++){const w=f[x],b=u[x],N=w.el&&(w.type===he||!Dt(w,b)||w.shapeFlag&70)?m(w.el):p;I(w,b,N,null,v,g,_,A,!0)}},Rt=(f,u,p,v,g,_,A)=>{if(p!==v){if(p!==X)for(const x in p)!Nn(x)&&!(x in v)&&i(f,x,p[x],null,A,u.children,g,_,Re);for(const x in v){if(Nn(x))continue;const w=v[x],b=p[x];w!==b&&x!=="value"&&i(f,x,b,w,A,u.children,g,_,Re)}"value"in v&&i(f,"value",p.value,v.value)}},un=(f,u,p,v,g,_,A,x,w)=>{const b=u.el=f?f.el:s(""),N=u.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:M,slotScopeIds:L}=u;L&&(x=x?x.concat(L):L),f==null?(r(b,p,v),r(N,p,v),ye(u.children,p,N,g,_,A,x,w)):C>0&&C&64&&M&&f.dynamicChildren?(Fe(f.dynamicChildren,M,p,g,_,A,x),(u.key!=null||g&&u===g.subTree)&&Do(f,u,!0)):Y(f,u,p,N,g,_,A,x,w)},dn=(f,u,p,v,g,_,A,x,w)=>{u.slotScopeIds=x,f==null?u.shapeFlag&512?g.ctx.activate(u,p,v,A,w):hr(u,p,v,g,_,A,w):Fa(f,u,w)},hr=(f,u,p,v,g,_,A)=>{const x=f.component=yf(f,v,g);if(Oo(f)&&(x.ctx.renderer=gt),xf(x),x.asyncDep){if(g&&g.registerDep(x,fe),!f.el){const w=x.subTree=Q(Zt);k(null,w,u,p)}return}fe(x,f,u,p,g,_,A)},Fa=(f,u,p)=>{const v=u.component=f.component;if(Pl(f,u,p))if(v.asyncDep&&!v.asyncResolved){J(v,u,p);return}else v.next=u,xl(v.update),v.update();else u.el=f.el,v.vnode=u},fe=(f,u,p,v,g,_,A)=>{const x=()=>{if(f.isMounted){let{next:N,bu:C,u:M,parent:L,vnode:j}=f,W=N,B;at(f,!1),N?(N.el=j.el,J(f,N,A)):N=j,C&&Mn(C),(B=N.props&&N.props.onVnodeBeforeUpdate)&&Se(B,L,N,j),at(f,!0);const Z=yr(f),xe=f.subTree;f.subTree=Z,I(xe,Z,m(xe.el),pn(xe),f,g,_),N.el=Z.el,W===null&&Cl(f,Z.el),M&&de(M,g),(B=N.props&&N.props.onVnodeUpdated)&&de(()=>Se(B,L,N,j),g)}else{let N;const{el:C,props:M}=u,{bm:L,m:j,parent:W}=f,B=Rn(u);if(at(f,!1),L&&Mn(L),!B&&(N=M&&M.onVnodeBeforeMount)&&Se(N,W,u),at(f,!0),C&&vr){const Z=()=>{f.subTree=yr(f),vr(C,f.subTree,f,g,null)};B?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Z()):Z()}else{const Z=f.subTree=yr(f);I(null,Z,p,v,f,g,_),u.el=Z.el}if(j&&de(j,g),!B&&(N=M&&M.onVnodeMounted)){const Z=u;de(()=>Se(N,W,Z),g)}(u.shapeFlag&256||W&&Rn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&de(f.a,g),f.isMounted=!0,u=p=v=null}},w=f.effect=new la(x,()=>ha(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,at(f,!0),b()},J=(f,u,p)=>{u.component=f;const v=f.vnode.props;f.vnode=u,f.next=null,rf(f,u.props,v,p),sf(f,u.children,p),Nt(),Va(),Mt()},Y=(f,u,p,v,g,_,A,x,w=!1)=>{const b=f&&f.children,N=f?f.shapeFlag:0,C=u.children,{patchFlag:M,shapeFlag:L}=u;if(M>0){if(M&128){mn(b,C,p,v,g,_,A,x,w);return}else if(M&256){tt(b,C,p,v,g,_,A,x,w);return}}L&8?(N&16&&Re(b,g,_),C!==b&&d(p,C)):N&16?L&16?mn(b,C,p,v,g,_,A,x,w):Re(b,g,_,!0):(N&8&&d(p,""),L&16&&ye(C,p,v,g,_,A,x,w))},tt=(f,u,p,v,g,_,A,x,w)=>{f=f||wt,u=u||wt;const b=f.length,N=u.length,C=Math.min(b,N);let M;for(M=0;M<C;M++){const L=u[M]=w?Ke(u[M]):Te(u[M]);I(f[M],L,p,null,g,_,A,x,w)}b>N?Re(f,g,_,!0,!1,C):ye(u,p,v,g,_,A,x,w,C)},mn=(f,u,p,v,g,_,A,x,w)=>{let b=0;const N=u.length;let C=f.length-1,M=N-1;for(;b<=C&&b<=M;){const L=f[b],j=u[b]=w?Ke(u[b]):Te(u[b]);if(Dt(L,j))I(L,j,p,null,g,_,A,x,w);else break;b++}for(;b<=C&&b<=M;){const L=f[C],j=u[M]=w?Ke(u[M]):Te(u[M]);if(Dt(L,j))I(L,j,p,null,g,_,A,x,w);else break;C--,M--}if(b>C){if(b<=M){const L=M+1,j=L<N?u[L].el:v;for(;b<=M;)I(null,u[b]=w?Ke(u[b]):Te(u[b]),p,j,g,_,A,x,w),b++}}else if(b>M)for(;b<=C;)Pe(f[b],g,_,!0),b++;else{const L=b,j=b,W=new Map;for(b=j;b<=M;b++){const pe=u[b]=w?Ke(u[b]):Te(u[b]);pe.key!=null&&W.set(pe.key,b)}let B,Z=0;const xe=M-j+1;let vt=!1,Da=0;const Lt=new Array(xe);for(b=0;b<xe;b++)Lt[b]=0;for(b=L;b<=C;b++){const pe=f[b];if(Z>=xe){Pe(pe,g,_,!0);continue}let Ce;if(pe.key!=null)Ce=W.get(pe.key);else for(B=j;B<=M;B++)if(Lt[B-j]===0&&Dt(pe,u[B])){Ce=B;break}Ce===void 0?Pe(pe,g,_,!0):(Lt[Ce-j]=b+1,Ce>=Da?Da=Ce:vt=!0,I(pe,u[Ce],p,null,g,_,A,x,w),Z++)}const ja=vt?cf(Lt):wt;for(B=ja.length-1,b=xe-1;b>=0;b--){const pe=j+b,Ce=u[pe],za=pe+1<N?u[pe+1].el:v;Lt[b]===0?I(null,Ce,p,za,g,_,A,x,w):vt&&(B<0||b!==ja[B]?nt(Ce,p,za,2):B--)}}},nt=(f,u,p,v,g=null)=>{const{el:_,type:A,transition:x,children:w,shapeFlag:b}=f;if(b&6){nt(f.component.subTree,u,p,v);return}if(b&128){f.suspense.move(u,p,v);return}if(b&64){A.move(f,u,p,gt);return}if(A===he){r(_,u,p);for(let C=0;C<w.length;C++)nt(w[C],u,p,v);r(f.anchor,u,p);return}if(A===_r){R(f,u,p);return}if(v!==2&&b&1&&x)if(v===0)x.beforeEnter(_),r(_,u,p),de(()=>x.enter(_),g);else{const{leave:C,delayLeave:M,afterLeave:L}=x,j=()=>r(_,u,p),W=()=>{C(_,()=>{j(),L&&L()})};M?M(_,j,W):W()}else r(_,u,p)},Pe=(f,u,p,v=!1,g=!1)=>{const{type:_,props:A,ref:x,children:w,dynamicChildren:b,shapeFlag:N,patchFlag:C,dirs:M}=f;if(x!=null&&$r(x,null,p,f,!0),N&256){u.ctx.deactivate(f);return}const L=N&1&&M,j=!Rn(f);let W;if(j&&(W=A&&A.onVnodeBeforeUnmount)&&Se(W,u,f),N&6)xs(f.component,p,v);else{if(N&128){f.suspense.unmount(p,v);return}L&&rt(f,null,u,"beforeUnmount"),N&64?f.type.remove(f,u,p,g,gt,v):b&&(_!==he||C>0&&C&64)?Re(b,u,p,!1,!0):(_===he&&C&384||!g&&N&16)&&Re(w,u,p),v&&Ra(f)}(j&&(W=A&&A.onVnodeUnmounted)||L)&&de(()=>{W&&Se(W,u,f),L&&rt(f,null,u,"unmounted")},p)},Ra=f=>{const{type:u,el:p,anchor:v,transition:g}=f;if(u===he){ys(p,v);return}if(u===_r){T(f);return}const _=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:x}=g,w=()=>A(p,_);x?x(f.el,_,w):w()}else _()},ys=(f,u)=>{let p;for(;f!==u;)p=h(f),a(f),f=p;a(u)},xs=(f,u,p)=>{const{bum:v,scope:g,update:_,subTree:A,um:x}=f;v&&Mn(v),g.stop(),_&&(_.active=!1,Pe(A,f,u,p)),x&&de(x,u),de(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Re=(f,u,p,v=!1,g=!1,_=0)=>{for(let A=_;A<f.length;A++)Pe(f[A],u,p,v,g)},pn=f=>f.shapeFlag&6?pn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),La=(f,u,p)=>{f==null?u._vnode&&Pe(u._vnode,null,null,!0):I(u._vnode||null,f,u,null,null,null,p),Va(),bo(),u._vnode=f},gt={p:I,um:Pe,m:nt,r:Ra,mt:hr,mc:ye,pc:Y,pbc:Fe,n:pn,o:e};let gr,vr;return t&&([gr,vr]=t(gt)),{render:La,hydrate:gr,createApp:ef(La,gr)}}function at({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Do(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ke(a[i]),s.el=o.el),n||Do(o,s)),s.type===lr&&(s.el=o.el)}}function cf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const uf=e=>e.__isTeleport,he=Symbol.for("v-fgt"),lr=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),_r=Symbol.for("v-stc"),Yt=[];let ke=null;function Xe(e=!1){Yt.push(ke=e?null:[])}function df(){Yt.pop(),ke=Yt[Yt.length-1]||null}let Qt=1;function oi(e){Qt+=e}function mf(e){return e.dynamicChildren=Qt>0?ke||wt:null,df(),Qt>0&&ke&&ke.push(e),e}function qe(e,t,n,r,a,i){return mf(ee(e,t,n,r,a,i,!0))}function Ur(e){return e?e.__v_isVNode===!0:!1}function Dt(e,t){return e.type===t.type&&e.key===t.key}const fr="__vInternal",jo=({key:e})=>e??null,Dn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?te(e)||le(e)||D(e)?{i:be,r:e,k:t,f:!!n}:e:null);function ee(e,t=null,n=null,r=0,a=null,i=e===he?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&jo(t),ref:t&&Dn(t),scopeId:or,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:be};return s?(ba(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=te(n)?8:16),Qt>0&&!o&&ke&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ke.push(l),l}const Q=pf;function pf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Wl)&&(e=Zt),Ur(e)){const s=Ct(e,t,!0);return n&&ba(s,n),Qt>0&&!i&&ke&&(s.shapeFlag&6?ke[ke.indexOf(e)]=s:ke.push(s)),s.patchFlag|=-2,s}if(Of(e)&&(e=e.__vccOpts),t){t=hf(t);let{class:s,style:l}=t;s&&!te(s)&&(t.class=er(s)),K(l)&&(co(l)&&!F(l)&&(l=re({},l)),t.style=oa(l))}const o=te(e)?1:Sl(e)?128:uf(e)?64:K(e)?4:D(e)?2:0;return ee(e,t,n,r,a,o,i,!0)}function hf(e){return e?co(e)||fr in e?re({},e):e:null}function Ct(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?gf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&jo(s),ref:t&&t.ref?n&&a?F(a)?a.concat(Dn(t)):[a,Dn(t)]:Dn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==he?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ct(e.ssContent),ssFallback:e.ssFallback&&Ct(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Hr(e=" ",t=0){return Q(lr,null,e,t)}function Te(e){return e==null||typeof e=="boolean"?Q(Zt):F(e)?Q(he,null,e.slice()):typeof e=="object"?Ke(e):Q(lr,null,String(e))}function Ke(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ct(e)}function ba(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ba(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(fr in t)?t._ctx=be:a===3&&be&&(be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else D(t)?(t={default:t,_ctx:be},n=32):(t=String(t),r&64?(n=16,t=[Hr(t)]):n=8);e.children=t,e.shapeFlag|=n}function gf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=er([t.class,r.class]));else if(a==="style")t.style=oa([t.style,r.style]);else if(Jn(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Se(e,t,n,r=null){Ee(e,t,7,[n,r])}const vf=Io();let bf=0;function yf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||vf,i={uid:bf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mo(r,a),emitsOptions:xo(r,a),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=kl.bind(null,i),e.ce&&e.ce(i),i}let ae=null,ya,yt,si="__VUE_INSTANCE_SETTERS__";(yt=Sr()[si])||(yt=Sr()[si]=[]),yt.push(e=>ae=e),ya=e=>{yt.length>1?yt.forEach(t=>t(e)):yt[0](e)};const St=e=>{ya(e),e.scope.on()},mt=()=>{ae&&ae.scope.off(),ya(null)};function zo(e){return e.vnode.shapeFlag&4}let en=!1;function xf(e,t=!1){en=t;const{props:n,children:r}=e.vnode,a=zo(e);nf(e,n,a,t),of(e,r);const i=a?_f(e,t):void 0;return en=!1,i}function _f(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=uo(new Proxy(e.ctx,Xl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?kf(e):null;St(e),Nt();const i=Je(r,e,0,[e.props,a]);if(Mt(),mt(),Xi(i)){if(i.then(mt,mt),t)return i.then(o=>{li(e,o,t)}).catch(o=>{ar(o,e,0)});e.asyncDep=i}else li(e,i,t)}else $o(e,t)}function li(e,t,n){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:K(t)&&(e.setupState=ho(t)),$o(e,n)}let fi;function $o(e,t,n){const r=e.type;if(!e.render){if(!t&&fi&&!r.render){const a=r.template||ga(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=re(re({isCustomElement:i,delimiters:s},o),l);r.render=fi(a,c)}}e.render=r.render||Oe}St(e),Nt(),ql(e),Mt(),mt()}function wf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}}))}function kf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return wf(e)},slots:e.slots,emit:e.emit,expose:t}}function cr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ho(uo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Bt)return Bt[n](e)},has(t,n){return n in t||n in Bt}}))}function Af(e,t=!0){return D(e)?e.displayName||e.name:e.name||t&&e.__name}function Of(e){return D(e)&&"__vccOpts"in e}const ot=(e,t)=>gl(e,t,en);function Ef(e,t,n){const r=arguments.length;return r===2?K(t)&&!F(t)?Ur(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ur(n)&&(n=[n]),Q(e,t,n))}const Pf=Symbol.for("v-scx"),Cf=()=>Ln(Pf),Sf="3.3.4",Tf="http://www.w3.org/2000/svg",lt=typeof document<"u"?document:null,ci=lt&&lt.createElement("template"),If={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?lt.createElementNS(Tf,e):lt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>lt.createTextNode(e),createComment:e=>lt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>lt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ci.innerHTML=r?`<svg>${e}</svg>`:e;const s=ci.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Nf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Mf(e,t,n){const r=e.style,a=te(n);if(n&&!a){if(t&&!te(t))for(const i in t)n[i]==null&&Br(r,i,"");for(const i in n)Br(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ui=/\s*!important$/;function Br(e,t,n){if(F(n))n.forEach(r=>Br(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ff(e,t);ui.test(n)?e.setProperty(It(r),n.replace(ui,""),"important"):e[r]=n}}const di=["Webkit","Moz","ms"],wr={};function Ff(e,t){const n=wr[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return wr[t]=r;r=Qn(r);for(let a=0;a<di.length;a++){const i=di[a]+r;if(i in e)return wr[t]=i}return t}const mi="http://www.w3.org/1999/xlink";function Rf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(mi,t.slice(6,t.length)):e.setAttributeNS(mi,t,n);else{const i=Ns(t);n==null||i&&!Gi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Lf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Gi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Uo(e,t,n,r){e.addEventListener(t,n,r)}function Df(e,t,n,r){e.removeEventListener(t,n,r)}function jf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=zf(t);if(r){const c=i[t]=Hf(r,a);Uo(e,s,c,l)}else o&&(Df(e,s,o,l),i[t]=void 0)}}const pi=/(?:Once|Passive|Capture)$/;function zf(e){let t;if(pi.test(e)){t={};let r;for(;r=e.match(pi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):It(e.slice(2)),t]}let kr=0;const $f=Promise.resolve(),Uf=()=>kr||($f.then(()=>kr=0),kr=Date.now());function Hf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(Bf(r,n.value),t,5,[r])};return n.value=e,n.attached=Uf(),n}function Bf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const hi=/^on[a-z]/,Yf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Nf(e,r,a):t==="style"?Mf(e,n,r):Jn(t)?ra(t)||jf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Wf(e,t,r,a))?Lf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Rf(e,t,r,a))};function Wf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&hi.test(t)&&D(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||hi.test(t)&&te(n)?!1:t in e}const gi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>Mn(t,n):t},vi={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const a=Gn(t);Uo(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Ji(Wn(o)):Wn(o));e._assign(e.multiple?a?new Set(i):i:i[0])}),e._assign=gi(r)},mounted(e,{value:t}){bi(e,t)},beforeUpdate(e,t,n){e._assign=gi(n)},updated(e,{value:t}){bi(e,t)}};function bi(e,t){const n=e.multiple;if(!(n&&!F(t)&&!Gn(t))){for(let r=0,a=e.options.length;r<a;r++){const i=e.options[r],o=Wn(i);if(n)F(t)?i.selected=Fs(t,o)>-1:i.selected=t.has(o);else if(tr(Wn(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Wn(e){return"_value"in e?e._value:e.value}const wn={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):jt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),jt(e,!0),r.enter(e)):r.leave(e,()=>{jt(e,!1)}):jt(e,t))},beforeUnmount(e,{value:t}){jt(e,t)}};function jt(e,t){e.style.display=t?e._vod:"none"}const Kf=re({patchProp:Yf},If);let yi;function Xf(){return yi||(yi=lf(Kf))}const qf=(...e)=>{const t=Xf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Vf(r);if(!a)return;const i=t._component;!D(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Vf(e){return te(e)?document.querySelector(e):e}const Ho=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},xa=e=>(_o("data-v-a50a8d4e"),e=e(),wo(),e),Jf={class:"week"},Gf={class:"day_switch"},Zf={class:"provide_msg"},Qf={class:"time_select"},ec=xa(()=>ee("option",{disabled:""},"請選擇時間",-1)),tc=["value","selected"],nc=xa(()=>ee("span",null,"-",-1)),rc=xa(()=>ee("option",{disabled:""},"請選擇時間",-1)),ac=["value"],ic={__name:"WeekComponent",props:{day:String,dayNum:Number},emits:["sendTimeData"],setup(e,{emit:t}){const n=e,r=xn(!0),a=()=>{if(r.value=!r.value,r.value)c(s,l);else{let m="";for(let h=0;h<48;h++)m+="0";t("sendTimeData",n.dayNum,m)}},i=()=>{let m=[];for(let h=0;h<24;h++){let y=`${h}`;y=y.padStart(2,"0")+":";for(let P=0;P<2;P++){let I=P*30,z=y+I.toString().padStart(2,"0");m.push(z)}}return m},o=()=>{let m=i();return m.splice(0,1),m.push("23:59"),m},s=xn(0),l=xn(1),c=(m,h)=>{m>=h&&(l.value=s.value+1,h=m+1);let y="";for(let P=0;P<m;P++)y+="0";for(let P=m;P<h;P++)y+="1";y=y.padEnd(48,"0"),d.value=y,t("sendTimeData",n.dayNum,y)},d=xn("000000000000000000000000000000000000000000000000");return Po(()=>{c(s,l)}),(m,h)=>{const y=Yl("font-awesome-icon");return Xe(),qe("li",Jf,[ee("h2",null,"星期"+Ht(e.day),1),ee("div",Gf,[ee("div",{class:er(["switch_bar",{on:r.value}])},[ee("div",{class:"switch_btn",onClick:a},[bt(Q(y,{icon:"fa-solid fa-check"},null,512),[[wn,r.value]]),bt(Q(y,{icon:"fa-solid fa-xmark"},null,512),[[wn,!r.value]])])],2),ee("span",Zf,[Hr("本日"),bt(ee("span",null,"不",512),[[wn,!r.value]]),Hr("供餐")])]),bt(ee("div",Qf,[bt(ee("select",{name:"start-time",id:"start-time",onChange:h[0]||(h[0]=P=>c(s.value,l.value)),"onUpdate:modelValue":h[1]||(h[1]=P=>s.value=P)},[ec,(Xe(!0),qe(he,null,Rr(i(),(P,I)=>(Xe(),qe("option",{key:P,value:I,selected:I},Ht(P),9,tc))),128))],544),[[vi,s.value]]),nc,bt(ee("select",{name:"end-time",id:"end-time",onChange:h[2]||(h[2]=P=>c(s.value,l.value)),"onUpdate:modelValue":h[3]||(h[3]=P=>l.value=P)},[rc,(Xe(!0),qe(he,null,Rr(o(),(P,I)=>(Xe(),qe("option",{key:P,value:I+1},Ht(P),9,ac))),128))],544),[[vi,l.value]])],512),[[wn,r.value]])])}}},it=Ho(ic,[["__scopeId","data-v-a50a8d4e"]]);const oc=e=>(_o("data-v-2abac8c0"),e=e(),wo(),e),sc=oc(()=>ee("h1",null,"供餐時間選擇器",-1)),lc={class:"weeks"},fc={class:"result"},cc={class:"key_name"},uc={class:"data_str"},dc={__name:"App",setup(e){const t=rr({week_day0:"000000000000000000000000000000000000000000000000",week_day1:"000000000000000000000000000000000000000000000000",week_day2:"000000000000000000000000000000000000000000000000",week_day3:"000000000000000000000000000000000000000000000000",week_day4:"000000000000000000000000000000000000000000000000",week_day5:"000000000000000000000000000000000000000000000000",week_day6:"000000000000000000000000000000000000000000000000"}),n=(r,a)=>{console.log(`${r}, ${a}`),t[`week_day${r}`]=a};return(r,a)=>(Xe(),qe(he,null,[sc,ee("ol",lc,[Q(it,{day:"日",dayNum:0,onSendTimeData:n}),Q(it,{day:"一",dayNum:1,onSendTimeData:n}),Q(it,{day:"二",dayNum:2,onSendTimeData:n}),Q(it,{day:"三",dayNum:3,onSendTimeData:n}),Q(it,{day:"四",dayNum:4,onSendTimeData:n}),Q(it,{day:"五",dayNum:5,onSendTimeData:n}),Q(it,{day:"六",dayNum:6,onSendTimeData:n})]),ee("div",fc,[(Xe(!0),qe(he,null,Rr(t,(i,o)=>(Xe(),qe("p",{key:o},[ee("span",cc,Ht(o)+":",1),ee("span",uc,Ht(i),1)]))),128))])],64))}},mc=Ho(dc,[["__scopeId","data-v-2abac8c0"]]);function xi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xi(Object(n),!0).forEach(function(r){ne(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Kn(e){"@babel/helpers - typeof";return Kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Kn(e)}function pc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function hc(e,t,n){return t&&_i(e.prototype,t),n&&_i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _a(e,t){return vc(e)||yc(e,t)||Bo(e,t)||_c()}function ln(e){return gc(e)||bc(e)||Bo(e)||xc()}function gc(e){if(Array.isArray(e))return Yr(e)}function vc(e){if(Array.isArray(e))return e}function bc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Bo(e,t){if(e){if(typeof e=="string")return Yr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yr(e,t)}}function Yr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function xc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var wi=function(){},wa={},Yo={},Wo=null,Ko={mark:wi,measure:wi};try{typeof window<"u"&&(wa=window),typeof document<"u"&&(Yo=document),typeof MutationObserver<"u"&&(Wo=MutationObserver),typeof performance<"u"&&(Ko=performance)}catch{}var wc=wa.navigator||{},ki=wc.userAgent,Ai=ki===void 0?"":ki,Ze=wa,V=Yo,Oi=Wo,kn=Ko;Ze.document;var Be=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",Xo=~Ai.indexOf("MSIE")||~Ai.indexOf("Trident/"),An,On,En,Pn,Cn,ze="___FONT_AWESOME___",Wr=16,qo="fa",Vo="svg-inline--fa",pt="data-fa-i2svg",Kr="data-fa-pseudo-element",kc="data-fa-pseudo-element-pending",ka="data-prefix",Aa="data-icon",Ei="fontawesome-i2svg",Ac="async",Oc=["HTML","HEAD","STYLE","SCRIPT"],Jo=function(){try{return!0}catch{return!1}}(),q="classic",G="sharp",Oa=[q,G];function fn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[q]}})}var tn=fn((An={},ne(An,q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ne(An,G,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),An)),nn=fn((On={},ne(On,q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ne(On,G,{solid:"fass",regular:"fasr",light:"fasl"}),On)),rn=fn((En={},ne(En,q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ne(En,G,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),En)),Ec=fn((Pn={},ne(Pn,q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ne(Pn,G,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Pn)),Pc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Go="fa-layers-text",Cc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Sc=fn((Cn={},ne(Cn,q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ne(Cn,G,{900:"fass",400:"fasr",300:"fasl"}),Cn)),Zo=[1,2,3,4,5,6,7,8,9,10],Tc=Zo.concat([11,12,13,14,15,16,17,18,19,20]),Ic=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ct={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},an=new Set;Object.keys(nn[q]).map(an.add.bind(an));Object.keys(nn[G]).map(an.add.bind(an));var Nc=[].concat(Oa,ln(an),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ct.GROUP,ct.SWAP_OPACITY,ct.PRIMARY,ct.SECONDARY]).concat(Zo.map(function(e){return"".concat(e,"x")})).concat(Tc.map(function(e){return"w-".concat(e)})),Wt=Ze.FontAwesomeConfig||{};function Mc(e){var t=V.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Fc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(V&&typeof V.querySelector=="function"){var Rc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Rc.forEach(function(e){var t=_a(e,2),n=t[0],r=t[1],a=Fc(Mc(n));a!=null&&(Wt[r]=a)})}var Qo={styleDefault:"solid",familyDefault:"classic",cssPrefix:qo,replacementClass:Vo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Wt.familyPrefix&&(Wt.cssPrefix=Wt.familyPrefix);var Tt=E(E({},Qo),Wt);Tt.autoReplaceSvg||(Tt.observeMutations=!1);var S={};Object.keys(Qo).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){Tt[e]=n,Kt.forEach(function(r){return r(S)})},get:function(){return Tt[e]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){Tt.cssPrefix=t,Kt.forEach(function(n){return n(S)})},get:function(){return Tt.cssPrefix}});Ze.FontAwesomeConfig=S;var Kt=[];function Lc(e){return Kt.push(e),function(){Kt.splice(Kt.indexOf(e),1)}}var We=Wr,Ne={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Dc(e){if(!(!e||!Be)){var t=V.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=V.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return V.head.insertBefore(t,r),e}}var jc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function on(){for(var e=12,t="";e-- >0;)t+=jc[Math.random()*62|0];return t}function Ft(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ea(e){return e.classList?Ft(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function es(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(es(e[n]),'" ')},"").trim()}function ur(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Pa(e){return e.size!==Ne.size||e.x!==Ne.x||e.y!==Ne.y||e.rotate!==Ne.rotate||e.flipX||e.flipY}function $c(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Uc(e){var t=e.transform,n=e.width,r=n===void 0?Wr:n,a=e.height,i=a===void 0?Wr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Xo?l+="translate(".concat(t.x/We-r/2,"em, ").concat(t.y/We-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/We,"em), calc(-50% + ").concat(t.y/We,"em)) "):l+="translate(".concat(t.x/We,"em, ").concat(t.y/We,"em) "),l+="scale(".concat(t.size/We*(t.flipX?-1:1),", ").concat(t.size/We*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Hc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ts(){var e=qo,t=Vo,n=S.cssPrefix,r=S.replacementClass,a=Hc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Pi=!1;function Ar(){S.autoAddCss&&!Pi&&(Dc(ts()),Pi=!0)}var Bc={mixout:function(){return{dom:{css:ts,insertCss:Ar}}},hooks:function(){return{beforeDOMElementCreation:function(){Ar()},beforeI2svg:function(){Ar()}}}},$e=Ze||{};$e[ze]||($e[ze]={});$e[ze].styles||($e[ze].styles={});$e[ze].hooks||($e[ze].hooks={});$e[ze].shims||($e[ze].shims=[]);var Ae=$e[ze],ns=[],Yc=function e(){V.removeEventListener("DOMContentLoaded",e),Xn=1,ns.map(function(t){return t()})},Xn=!1;Be&&(Xn=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),Xn||V.addEventListener("DOMContentLoaded",Yc));function Wc(e){Be&&(Xn?setTimeout(e,0):ns.push(e))}function cn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?es(e):"<".concat(t," ").concat(zc(r),">").concat(i.map(cn).join(""),"</").concat(t,">")}function Ci(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Kc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Or=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Kc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Xc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Xr(e){var t=Xc(e);return t.length===1?t[0].toString(16):null}function qc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Si(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function qr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Si(t);typeof Ae.hooks.addPack=="function"&&!a?Ae.hooks.addPack(e,Si(t)):Ae.styles[e]=E(E({},Ae.styles[e]||{}),i),e==="fas"&&qr("fa",t)}var Sn,Tn,In,xt=Ae.styles,Vc=Ae.shims,Jc=(Sn={},ne(Sn,q,Object.values(rn[q])),ne(Sn,G,Object.values(rn[G])),Sn),Ca=null,rs={},as={},is={},os={},ss={},Gc=(Tn={},ne(Tn,q,Object.keys(tn[q])),ne(Tn,G,Object.keys(tn[G])),Tn);function Zc(e){return~Nc.indexOf(e)}function Qc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Zc(a)?a:null}var ls=function(){var t=function(i){return Or(xt,function(o,s,l){return o[l]=Or(s,i,{}),o},{})};rs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),as=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ss=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in xt||S.autoFetchSvg,r=Or(Vc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});is=r.names,os=r.unicodes,Ca=dr(S.styleDefault,{family:S.familyDefault})};Lc(function(e){Ca=dr(e.styleDefault,{family:S.familyDefault})});ls();function Sa(e,t){return(rs[e]||{})[t]}function eu(e,t){return(as[e]||{})[t]}function ut(e,t){return(ss[e]||{})[t]}function fs(e){return is[e]||{prefix:null,iconName:null}}function tu(e){var t=os[e],n=Sa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qe(){return Ca}var Ta=function(){return{prefix:null,iconName:null,rest:[]}};function dr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?q:n,a=tn[r][e],i=nn[r][e]||nn[r][a],o=e in Ae.styles?e:null;return i||o||null}var Ti=(In={},ne(In,q,Object.keys(rn[q])),ne(In,G,Object.keys(rn[G])),In);function mr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ne(t,q,"".concat(S.cssPrefix,"-").concat(q)),ne(t,G,"".concat(S.cssPrefix,"-").concat(G)),t),o=null,s=q;(e.includes(i[q])||e.some(function(c){return Ti[q].includes(c)}))&&(s=q),(e.includes(i[G])||e.some(function(c){return Ti[G].includes(c)}))&&(s=G);var l=e.reduce(function(c,d){var m=Qc(S.cssPrefix,d);if(xt[d]?(d=Jc[s].includes(d)?Ec[s][d]:d,o=d,c.prefix=d):Gc[s].indexOf(d)>-1?(o=d,c.prefix=dr(d,{family:s})):m?c.iconName=m:d!==S.replacementClass&&d!==i[q]&&d!==i[G]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var h=o==="fa"?fs(c.iconName):{},y=ut(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||y||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!xt.far&&xt.fas&&!S.autoFetchSvg&&(c.prefix="fas")}return c},Ta());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===G&&(xt.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=ut(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Qe()||"fas"),l}var nu=function(){function e(){pc(this,e),this.definitions={}}return hc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),qr(s,o[s]);var l=rn[q][s];l&&qr(l,o[s]),ls()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Ii=[],_t={},Et={},ru=Object.keys(Et);function au(e,t){var n=t.mixoutsTo;return Ii=e,_t={},Object.keys(Et).forEach(function(r){ru.indexOf(r)===-1&&delete Et[r]}),Ii.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Kn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){_t[o]||(_t[o]=[]),_t[o].push(i[o])})}r.provides&&r.provides(Et)}),n}function Vr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=_t[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ht(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=_t[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Et[e]?Et[e].apply(null,t):void 0}function Jr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Qe();if(t)return t=ut(n,t)||t,Ci(cs.definitions,n,t)||Ci(Ae.styles,n,t)}var cs=new nu,iu=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,ht("noAuto")},ou={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Be?(ht("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,Wc(function(){lu({autoReplaceSvgRoot:n}),ht("watch",t)})}},su={icon:function(t){if(t===null)return null;if(Kn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ut(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=dr(t[0]);return{prefix:r,iconName:ut(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match(Pc))){var a=mr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Qe(),iconName:ut(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Qe();return{prefix:i,iconName:ut(i,t)||t}}}},ge={noAuto:iu,config:S,dom:ou,parse:su,library:cs,findIconDefinition:Jr,toHtml:cn},lu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?V:n;(Object.keys(Ae.styles).length>0||S.autoFetchSvg)&&Be&&S.autoReplaceSvg&&ge.dom.i2svg({node:r})};function pr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return cn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Be){var r=V.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function fu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Pa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=ur(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function cu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(S.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Ia(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,h=e.watchable,y=h===void 0?!1:h,P=r.found?r:n,I=P.width,z=P.height,k=a==="fak",O=[S.replacementClass,i?"".concat(S.cssPrefix,"-").concat(i):""].filter(function(ve){return m.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(m.classes).join(" "),R={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(z)})},T=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(I/z*16*.0625,"em")}:{};y&&(R.attributes[pt]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(d||on())},children:[l]}),delete R.attributes.title);var H=E(E({},R),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},T),m.styles)}),ie=r.found&&n.found?Ue("generateAbstractMask",H)||{children:[],attributes:{}}:Ue("generateAbstractIcon",H)||{children:[],attributes:{}},oe=ie.children,ye=ie.attributes;return H.children=oe,H.attributes=ye,s?cu(H):fu(H)}function Ni(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[pt]="");var d=E({},o.styles);Pa(a)&&(d.transform=Uc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=ur(d);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function uu(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=ur(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Er=Ae.styles;function Gr(e){var t=e[0],n=e[1],r=e.slice(4),a=_a(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(ct.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(ct.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var du={found:!1,width:512,height:512};function mu(e,t){!Jo&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Zr(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=Qe()),new Promise(function(r,a){if(Ue("missingIconAbstract"),n==="fa"){var i=fs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Er[t]&&Er[t][e]){var o=Er[t][e];return r(Gr(o))}mu(e,t),r(E(E({},du),{},{icon:S.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var Mi=function(){},Qr=S.measurePerformance&&kn&&kn.mark&&kn.measure?kn:{mark:Mi,measure:Mi},Ut='FA "6.4.2"',pu=function(t){return Qr.mark("".concat(Ut," ").concat(t," begins")),function(){return us(t)}},us=function(t){Qr.mark("".concat(Ut," ").concat(t," ends")),Qr.measure("".concat(Ut," ").concat(t),"".concat(Ut," ").concat(t," begins"),"".concat(Ut," ").concat(t," ends"))},Na={begin:pu,end:us},jn=function(){};function Fi(e){var t=e.getAttribute?e.getAttribute(pt):null;return typeof t=="string"}function hu(e){var t=e.getAttribute?e.getAttribute(ka):null,n=e.getAttribute?e.getAttribute(Aa):null;return t&&n}function gu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function vu(){if(S.autoReplaceSvg===!0)return zn.replace;var e=zn[S.autoReplaceSvg];return e||zn.replace}function bu(e){return V.createElementNS("http://www.w3.org/2000/svg",e)}function yu(e){return V.createElement(e)}function ds(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?bu:yu:n;if(typeof e=="string")return V.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ds(o,{ceFn:r}))}),a}function xu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var zn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ds(a),n)}),n.getAttribute(pt)===null&&S.keepOriginalSource){var r=V.createComment(xu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ea(n).indexOf(S.replacementClass))return zn.replace(t);var a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===S.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return cn(s)}).join(`
`);n.setAttribute(pt,""),n.innerHTML=o}};function Ri(e){e()}function ms(e,t){var n=typeof t=="function"?t:jn;if(e.length===0)n();else{var r=Ri;S.mutateApproach===Ac&&(r=Ze.requestAnimationFrame||Ri),r(function(){var a=vu(),i=Na.begin("mutate");e.map(a),i(),n()})}}var Ma=!1;function ps(){Ma=!0}function ea(){Ma=!1}var qn=null;function Li(e){if(Oi&&S.observeMutations){var t=e.treeCallback,n=t===void 0?jn:t,r=e.nodeCallback,a=r===void 0?jn:r,i=e.pseudoElementsCallback,o=i===void 0?jn:i,s=e.observeMutationsRoot,l=s===void 0?V:s;qn=new Oi(function(c){if(!Ma){var d=Qe();Ft(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Fi(m.addedNodes[0])&&(S.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Fi(m.target)&&~Ic.indexOf(m.attributeName))if(m.attributeName==="class"&&hu(m.target)){var h=mr(Ea(m.target)),y=h.prefix,P=h.iconName;m.target.setAttribute(ka,y||d),P&&m.target.setAttribute(Aa,P)}else gu(m.target)&&a(m.target)})}}),Be&&qn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function _u(){qn&&qn.disconnect()}function wu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ku(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=mr(Ea(e));return a.prefix||(a.prefix=Qe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=eu(a.prefix,e.innerText)||Sa(a.prefix,Xr(e.innerText))),!a.iconName&&S.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Au(e){var t=Ft(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||on()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ou(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ne,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Di(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ku(e),r=n.iconName,a=n.prefix,i=n.rest,o=Au(e),s=Vr("parseNodeAttributes",{},e),l=t.styleParser?wu(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ne,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Eu=Ae.styles;function hs(e){var t=S.autoReplaceSvg==="nest"?Di(e,{styleParser:!1}):Di(e);return~t.extra.classes.indexOf(Go)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}var et=new Set;Oa.map(function(e){et.add("fa-".concat(e))});Object.keys(tn[q]).map(et.add.bind(et));Object.keys(tn[G]).map(et.add.bind(et));et=ln(et);function ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Be)return Promise.resolve();var n=V.documentElement.classList,r=function(m){return n.add("".concat(Ei,"-").concat(m))},a=function(m){return n.remove("".concat(Ei,"-").concat(m))},i=S.autoFetchSvg?et:Oa.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Eu));i.includes("fa")||i.push("fa");var o=[".".concat(Go,":not([").concat(pt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(pt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ft(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Na.begin("onTree"),c=s.reduce(function(d,m){try{var h=hs(m);h&&d.push(h)}catch(y){Jo||y.name==="MissingIcon"&&console.error(y)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(h){ms(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(h){l(),m(h)})})}function Pu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hs(e).then(function(n){n&&ms([n],t)})}function Cu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Jr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Jr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Su=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ne:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,h=m===void 0?null:m,y=n.titleId,P=y===void 0?null:y,I=n.classes,z=I===void 0?[]:I,k=n.attributes,O=k===void 0?{}:k,R=n.styles,T=R===void 0?{}:R;if(t){var H=t.prefix,ie=t.iconName,oe=t.icon;return pr(E({type:"icon"},t),function(){return ht("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(h?O["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(P||on()):(O["aria-hidden"]="true",O.focusable="false")),Ia({icons:{main:Gr(oe),mask:l?Gr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:ie,transform:E(E({},Ne),a),symbol:o,title:h,maskId:d,titleId:P,extra:{attributes:O,styles:T,classes:z}})})}},Tu={mixout:function(){return{icon:Cu(Su)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ji,n.nodeCallback=Pu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?V:r,i=n.callback,o=i===void 0?function(){}:i;return ji(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,h=r.extra;return new Promise(function(y,P){Promise.all([Zr(a,s),d.iconName?Zr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var z=_a(I,2),k=z[0],O=z[1];y([n,Ia({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(P)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ur(s);l.length>0&&(a.style=l);var c;return Pa(o)&&(c=Ue("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Iu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return pr({type:"layer"},function(){ht("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(ln(i)).join(" ")},children:o}]})}}}},Nu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return pr({type:"counter",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),uu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(ln(s))}})})}}}},Mu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ne:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,h=r.styles,y=h===void 0?{}:h;return pr({type:"text",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),Ni({content:n,transform:E(E({},Ne),i),title:s,extra:{attributes:m,styles:y,classes:["".concat(S.cssPrefix,"-layers-text")].concat(ln(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Xo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return S.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ni({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Fu=new RegExp('"',"ug"),zi=[1105920,1112319];function Ru(e){var t=e.replace(Fu,""),n=qc(t,0),r=n>=zi[0]&&n<=zi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Xr(a?t[0]:t),isSecondary:r||a}}function $i(e,t){var n="".concat(kc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ft(e.children),o=i.filter(function(oe){return oe.getAttribute(Kr)===t})[0],s=Ze.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Cc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?G:q,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?nn[h][l[2].toLowerCase()]:Sc[h][c],P=Ru(m),I=P.value,z=P.isSecondary,k=l[0].startsWith("FontAwesome"),O=Sa(y,I),R=O;if(k){var T=tu(I);T.iconName&&T.prefix&&(O=T.iconName,y=T.prefix)}if(O&&!z&&(!o||o.getAttribute(ka)!==y||o.getAttribute(Aa)!==R)){e.setAttribute(n,R),o&&e.removeChild(o);var H=Ou(),ie=H.extra;ie.attributes[Kr]=t,Zr(O,y).then(function(oe){var ye=Ia(E(E({},H),{},{icons:{main:oe,mask:Ta()},prefix:y,iconName:R,extra:ie,watchable:!0})),ve=V.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=ye.map(function(Fe){return cn(Fe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Lu(e){return Promise.all([$i(e,"::before"),$i(e,"::after")])}function Du(e){return e.parentNode!==document.head&&!~Oc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Kr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ui(e){if(Be)return new Promise(function(t,n){var r=Ft(e.querySelectorAll("*")).filter(Du).map(Lu),a=Na.begin("searchPseudoElements");ps(),Promise.all(r).then(function(){a(),ea(),t()}).catch(function(){a(),ea(),n()})})}var ju={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ui,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?V:r;S.searchPseudoElements&&Ui(a)}}},Hi=!1,zu={mixout:function(){return{dom:{unwatch:function(){ps(),Hi=!0}}}},hooks:function(){return{bootstrap:function(){Li(Vr("mutationObserverCallbacks",{}))},noAuto:function(){_u()},watch:function(n){var r=n.observeMutationsRoot;Hi?ea():Li(Vr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Bi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},$u={mixout:function(){return{parse:{transform:function(n){return Bi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Bi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},h={transform:"translate(".concat(o/2*-1," -256)")},y={outer:s,inner:m,path:h};return{tag:"g",attributes:E({},y.outer),children:[{tag:"g",attributes:E({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),y.path)}]}]}}}},Pr={x:0,y:0,width:"100%",height:"100%"};function Yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Uu(e){return e.tag==="g"?e.children:[e]}var Hu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?mr(a.split(" ").map(function(o){return o.trim()})):Ta();return i.prefix||(i.prefix=Qe()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,h=o.icon,y=$c({transform:l,containerWidth:m,iconWidth:c}),P={tag:"rect",attributes:E(E({},Pr),{},{fill:"white"})},I=d.children?{children:d.children.map(Yi)}:{},z={tag:"g",attributes:E({},y.inner),children:[Yi(E({tag:d.tag,attributes:E(E({},d.attributes),y.path)},I))]},k={tag:"g",attributes:E({},y.outer),children:[z]},O="mask-".concat(s||on()),R="clip-".concat(s||on()),T={tag:"mask",attributes:E(E({},Pr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,k]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:Uu(h)},T]};return r.push(H,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(O,")")},Pr)}),{children:r,attributes:a}}}},Bu={provides:function(t){var n=!1;Ze.matchMedia&&(n=Ze.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Yu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Wu=[Bc,Tu,Iu,Nu,Mu,ju,zu,$u,Hu,Bu,Yu];au(Wu,{mixoutsTo:ge});ge.noAuto;ge.config;var Ku=ge.library;ge.dom;var ta=ge.parse;ge.findIconDefinition;ge.toHtml;var Xu=ge.icon;ge.layer;ge.text;ge.counter;function Wi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wi(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Vn(e){"@babel/helpers - typeof";return Vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vn(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Vu(e,t){if(e==null)return{};var n=qu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},gs={exports:{}};(function(e){(function(t){var n=function(k,O,R){if(!c(O)||m(O)||h(O)||y(O)||l(O))return O;var T,H=0,ie=0;if(d(O))for(T=[],ie=O.length;H<ie;H++)T.push(n(k,O[H],R));else{T={};for(var oe in O)Object.prototype.hasOwnProperty.call(O,oe)&&(T[k(oe,R)]=n(k,O[oe],R))}return T},r=function(k,O){O=O||{};var R=O.separator||"_",T=O.split||/(?=[A-Z])/;return k.split(T).join(R)},a=function(k){return P(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,R){return R?R.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},h=function(k){return s.call(k)=="[object RegExp]"},y=function(k){return s.call(k)=="[object Boolean]"},P=function(k){return k=k-0,k===k},I=function(k,O){var R=O&&"process"in O?O.process:O;return typeof R!="function"?k:function(T,H){return R(T,k,H)}},z={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(I(a,O),k)},decamelizeKeys:function(k,O){return n(I(o,O),k,O)},pascalizeKeys:function(k,O){return n(I(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=z:t.humps=z})(Ju)})(gs);var Gu=gs.exports,Zu=["class","style"];function Qu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Gu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function ed(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function vs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return vs(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=ed(d);break;case"style":l.style=Qu(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Vu(n,Zu);return Ef(e.tag,De(De(De({},t),{},{class:a.class,style:De(De({},a.style),o)},a.attrs),s),r)}var bs=!1;try{bs=!0}catch{}function td(){if(!bs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Cr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function nd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ki(e){if(e&&Vn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ta.icon)return ta.icon(e);if(e===null)return null;if(Vn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var rd=Nl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ot(function(){return Ki(t.icon)}),i=ot(function(){return Cr("classes",nd(t))}),o=ot(function(){return Cr("transform",typeof t.transform=="string"?ta.transform(t.transform):t.transform)}),s=ot(function(){return Cr("mask",Ki(t.mask))}),l=ot(function(){return Xu(a.value,De(De(De(De({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Fn(l,function(d){if(!d)return td("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ot(function(){return l.value?vs(l.value.abstract[0],{},r):null});return function(){return c.value}}}),ad={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},id={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};Ku.add(id,ad);qf(mc).component("font-awesome-icon",rd).mount("#app");
