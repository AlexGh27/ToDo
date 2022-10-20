(()=>{"use strict";var e,n,t,r,o,a,i,c,s,d,l,p,u,m,f={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"* {\n    box-sizing: border-box;\n}\n\nbody, html {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n}\n\n.container {\n    width: 100%;\n    height: 100%;\n    background-color: red;\n    display: grid;\n    grid-template: 1fr 9fr / 1fr 6.5fr;\n}\n\n.titleBar {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    background-color: navy;\n    font-size: 60px;\n    font-weight: bold;\n    color: white;\n    padding-left: 0.5em;\n    padding-top: 0.25em;\n}\n\n.sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.5em;\n    padding-top: 1em;\n}\n\n.sideButton {\n    height: 2.5em;\n    width: 180px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 1em;\n    padding-left: 0.5em;\n    border: 1px solid white;\n    border-radius: 5px;\n}\n\n.sideButton:hover {\n    cursor: pointer;\n    background-color: rgb(241, 241, 241);\n}\n\n\n.icon {\n    height: 30px;\n    width: 30px;\n}\n\n.text {\n    display: inline-block;\n    font-size: 25px;\n}\n\n#project {\n    width: 180px;\n    margin-top: 5em;\n    gap: 0.75em;\n}\n\n.plus {\n    height: 32px;\n    width: 32px;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},h={};function v(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return f[e](t,t.exports,v),t.exports}v.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return v.d(n,{a:n}),n},v.d=(e,n)=>{for(var t in n)v.o(n,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},v.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),v.nc=void 0,e=v(379),n=v.n(e),t=v(795),r=v.n(t),o=v(569),a=v.n(o),i=v(565),c=v.n(i),s=v(216),d=v.n(s),l=v(589),p=v.n(l),u=v(426),(m={}).styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),n()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals,function(){const e=document.querySelector(".container"),n=document.createElement("div");n.className="titleBar",n.innerHTML="TO DO LIST",e.appendChild(n);const t=document.createElement("div");t.className="sidebar",e.appendChild(t);const r=document.createElement("div");r.className="sideButton",t.appendChild(r);const o=document.createElement("img");o.className="icon",o.src="inbox.png",r.appendChild(o);const a=document.createElement("div");a.className="text",a.innerHTML="Inbox",r.appendChild(a);const i=document.createElement("div");i.className="sideButton",t.appendChild(i);const c=document.createElement("img");c.className="icon",c.src="today.png",i.appendChild(c);const s=document.createElement("div");s.className="text",s.innerHTML="Today",i.appendChild(s);const d=document.createElement("div");d.className="sideButton",t.appendChild(d);const l=document.createElement("img");l.className="icon",l.src="week.png",d.appendChild(l);const p=document.createElement("div");p.className="text",p.innerHTML="This Week",d.appendChild(p);const u=document.createElement("div");u.className="sideButton",u.id="project",t.appendChild(u);const m=document.createElement("img");m.className="icon",m.src="project.png",u.appendChild(m);const f=document.createElement("div");f.className="text",f.innerHTML="My Projects",u.appendChild(f);const h=document.createElement("img");h.className="plus",h.src="plus.png",t.appendChild(h)}()})();