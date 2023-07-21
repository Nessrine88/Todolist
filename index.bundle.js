"use strict";(self.webpackChunkwebpack_demo=self.webpackChunkwebpack_demo||[]).push([[826],{426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"\n* {\n  text-decoration: none;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  color: #403f3ff1;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgb(234, 234, 234);\n}\n\nli {\n  padding: 20px;\n  border: 1px solid rgba(168, 127, 127, 0.41);\n  box-sizing: border-box;\n}\n\np {\n  font-family: 'intel', sans-serif;\n  font-weight: 300;\n}\n\n.checkbox {\n  margin-right: 20px;\n}\n\n#todoList {\n  width: 80%;\n  background-color: #fff;\n  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);\n  padding-top: 10px;\n  margin-top: 25vh;\n}\n\n.header {\n  font-size: 24px;\n  margin: 45px 0 0 10px;\n  font-family: 'Arial', sans-serif;\n  font-weight: bold;\n  color: #333;\n  margin-bottom: 20px;\n}\n\n#icons {\n  float: right;\n  width: 20px;\n  cursor: grab;\n}\n\n.headerIcon {\n  float: right;\n  width: 20px;\n  margin: 30px 40px 5px 0;\n}\n\n.fa-solid {\n  float: right;\n}\n\n.fa-arrows-rotate {\n  margin: 50px 10px 20px 0;\n}\n\ninput {\n  border: none;\n}\n\n.input-form input {\n  width: 100%;\n  font-size: 18px;\n  padding: 15px 10px;\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  font-style: italic;\n}\n\n.fa-rotate-270 {\n  position: relative;\n  right: 10px;\n  bottom: 20px;\n}\n\n#xbtn {\n  width: 80%;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);\n  padding: 20px 20px;\n  font-size: 20px;\n}\n\n.overline {\n  text-decoration: line-through;\n}\n\n.fa-trash-can {\n  cursor: pointer;\n}\n\n.fa-ellipsis-vertical {\n  cursor: move;\n}\n",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},570:(n,e,t)=>{var r=t(379),o=t.n(r),i=t(795),a=t.n(i),c=t(569),s=t.n(c),d=t(565),l=t.n(d),p=t(216),u=t.n(p),f=t(589),m=t.n(f),h=t(426),v={};v.styleTagTransform=m(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const x=()=>{let n=y();const e=document.getElementById("todoList"),t=document.querySelector(".list-container");n.sort(((n,e)=>n.index-e.index)),t.innerHTML="",n.forEach((e=>{const r=document.createElement("li");r.innerHTML=`\n      <p>\n        <input class='checkbox' type='checkbox' ${e.completed?"checked":""}>\n        ${e.description}\n        <i class="fa-solid fa-ellipsis-vertical"></i>\n      </p>\n    `;const o=r.querySelector(".fa-ellipsis-vertical"),i=document.createElement("i");i.classList.add("fa-solid","fa-trash-can"),o.addEventListener("click",(n=>{n.stopPropagation(),o.replaceWith(i),r.style.backgroundColor="#FFF9C4"})),i.addEventListener("click",(()=>{n=n.filter((n=>n.index!==e.index)),n.forEach(((n,e)=>{n.index=e+1})),b(),t.removeChild(r)}));const a=r.querySelector(".checkbox");a.addEventListener("click",(n=>{n.stopPropagation(),r.classList.toggle("overline"),e.completed=a.checked,b()})),r.addEventListener("click",(()=>{k(r,e)})),t.appendChild(r)})),e.appendChild(t)};let g=JSON.parse(localStorage.getItem("tasks"))||[];const b=()=>{localStorage.setItem("tasks",JSON.stringify(g))},y=()=>g,k=(n,e)=>{const t=n.querySelector("p"),r=e.description,o=document.createElement("input");o.type="text",o.value=r,t.replaceWith(o),o.focus(),o.addEventListener("keypress",(n=>{"Enter"===n.key&&(e.description=o.value.trim(),b(),x())})),o.addEventListener("blur",(()=>{e.description=o.value.trim(),b(),x()}))},E=document.querySelector(".input-list");document.querySelector("form").addEventListener("submit",(n=>{n.preventDefault(),(n=>{const e=n.trim();if(""!==e){const n={description:e,completed:!1,index:g.length+1};g.push(n),b(),x()}})(E.value),E.value=""})),document.getElementById("xbtn").addEventListener("click",(()=>{g=g.filter((n=>!n.completed)),g.forEach(((n,e)=>{n.index=e+1})),b(),x()})),window.onload=()=>{x()}}},n=>{n(n.s=570)}]);