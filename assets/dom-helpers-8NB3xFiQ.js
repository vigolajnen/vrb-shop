var w=Function.prototype.bind.call(Function.prototype.call,[].slice);function O(t,e){return w(t.querySelectorAll(e))}const d=!!(typeof window<"u"&&window.document&&window.document.createElement);var f=!1,v=!1;try{var c={get passive(){return f=!0},get once(){return v=f=!0}};d&&(window.addEventListener("test",c,c),window.removeEventListener("test",c,!0))}catch{}function L(t,e,r,n){if(n&&typeof n!="boolean"&&!v){var s=n.once,a=n.capture,u=r;!v&&s&&(u=r.__once||function y(E){this.removeEventListener(e,y,a),r.call(this,E)},r.__once=u),t.addEventListener(e,u,f?n:a)}t.addEventListener(e,r,n)}function q(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}function g(t,e,r,n){var s=n&&typeof n!="boolean"?n.capture:n;t.removeEventListener(e,r,s),r.__once&&t.removeEventListener(e,r.__once,s)}function m(t,e,r,n){return L(t,e,r,n),function(){g(t,e,r,n)}}function p(t){return t&&t.ownerDocument||document}function h(t,e){return t.classList?!!e&&t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function C(t){var e=p(t);return e&&e.defaultView||window}function _(t,e){return C(t).getComputedStyle(t,e)}var b=/([A-Z])/g;function S(t){return t.replace(b,"-$1").toLowerCase()}var T=/^ms-/;function i(t){return S(t).replace(T,"-ms-")}var P=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function V(t){return!!(t&&P.test(t))}function x(t,e){var r="",n="";if(typeof e=="string")return t.style.getPropertyValue(i(e))||_(t).getPropertyValue(i(e));Object.keys(e).forEach(function(s){var a=e[s];!a&&a!==0?t.style.removeProperty(i(s)):V(s)?n+=s+"("+a+") ":r+=i(s)+": "+a+";"}),n&&(r+="transform: "+n+";"),t.style.cssText+=";"+r}function A(t,e,r,n){if(r===void 0&&(r=!1),n===void 0&&(n=!0),t){var s=document.createEvent("HTMLEvents");s.initEvent(e,r,n),t.dispatchEvent(s)}}function $(t){var e=x(t,"transitionDuration")||"",r=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*r}function N(t,e,r){r===void 0&&(r=5);var n=!1,s=setTimeout(function(){n||A(t,"transitionend",!0)},e+r),a=m(t,"transitionend",function(){n=!0},{once:!0});return function(){clearTimeout(s),a()}}function F(t,e,r,n){r==null&&(r=$(t)||0);var s=N(t,r,n),a=m(t,"transitionend",e);return function(){s(),a()}}var o;function W(t){if((!o&&o!==0||t)&&d){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),o=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return o}function z(t){t===void 0&&(t=p());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function M(t,e){t.classList?t.classList.add(e):h(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function l(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function U(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=l(t.className,e):t.setAttribute("class",l(t.className&&t.className.baseVal||"",e))}export{d as a,L as b,q as c,z as d,M as e,g as f,W as g,h,m as l,p as o,O as q,U as r,x as s,F as t};