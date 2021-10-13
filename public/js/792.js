"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[792],{2573:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(1519),a=n.n(r)()((function(t){return t[1]}));a.push([t.id,"table[data-v-4d3bc7fa],td[data-v-4d3bc7fa]{border:1px solid #000}",""]);const o=a},1519:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},3379:(t,e,n)=>{var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function s(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],a=0;a<t.length;a++){var o=t[a],c=e.base?o[0]+e.base:o[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=s(u),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:_(f,e),references:1}),r.push(u)}return r}function l(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var i=o(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var u,d=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function f(t,e,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=d(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function v(t,e,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var p=null,h=0;function _(t,e){var n,r,a;if(e.singleton){var o=h++;n=p||(p=l(e)),r=f.bind(null,n,o,!1),a=f.bind(null,n,o,!0)}else n=l(e),r=v.bind(null,n,e),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else a()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var a=s(n[r]);i[a].references--}for(var o=c(t,e),l=0;l<n.length;l++){var u=s(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=o}}}},1792:(t,e,n)=>{n.r(e),n.d(e,{default:()=>u});var r=n(9669),a=n.n(r);const o={name:"Report",data:function(){return{max:null,date:null,menu:!1,couriers:[]}},created:function(){this.fetchReports()},methods:{fetchReports:function(){var t=this;a().get("/api/reports").then((function(e){t.max=e.data.max,t.date=e.data.max,t.couriers=e.data.reports})).catch((function(t){console.log(t)}))},filter:function(){var t=this;a().post("/api/reports/filter",{date:this.date}).then((function(e){t.menu=!1,t.couriers=e.data.reports})).catch((function(t){console.log(t)}))},excel:function(){a().get("/api/reports/export/"+this.date).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}}};var i=n(3379),s=n.n(i),c=n(2573),l={insert:"head",singleton:!1};s()(c.Z,l);c.Z.locals;const u=(0,n(1900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",lg:"3"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"Выберите дату","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",a,!1),r))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),n("v-date-picker",{attrs:{max:t.max,"no-title":"",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("\n                        Cancel\n                    ")]),t._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.filter}},[t._v("\n                        OK\n                    ")])],1)],1)],1),t._v(" "),n("v-col",{attrs:{sm:"12",lg:"3"}},[n("a",{attrs:{type:"button",href:"/api/reports/export/"+t.date}},[n("v-btn",{attrs:{color:"primary"},on:{click:t.excel}},[t._v("\n                    Скачать отчет\n                ")])],1)])],1),t._v(" "),t._l(t.couriers,(function(e){return n("v-row",{key:e.id},[n("v-col",[n("h3",[t._v(t._s(e[0]?e[0].courier+" - "+e.length:""))]),t._v(" "),n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("\n                                Имя\n                            ")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("\n                                Время\n                            ")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("\n                                Адрес\n                            ")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("\n                                Тип\n                            ")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("\n                                Сумма\n                            ")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("\n                                Статус отчета\n                            ")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("\n                                Время отчета\n                            ")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("\n                                Статус Еду\n                            ")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("\n                                Время Еду\n                            ")])])]),t._v(" "),n("tbody",[t._l(e,(function(e){return[n("tr",[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.time))]),t._v(" "),n("td",[t._v(t._s(e.address))]),t._v(" "),n("td",[t._v(t._s(e.type))]),t._v(" "),n("td",[t._v(t._s(e.amount))]),t._v(" "),n("td",[n("v-chip",{attrs:{label:"",small:"",color:e.report_color}},[t._v("\n                                     "+t._s(e.report_status)+"\n                                 ")])],1),t._v(" "),n("td",[t._v(t._s(e.reported_at))]),t._v(" "),n("td",[n("v-chip",{attrs:{label:"",small:"",color:e.notification_color}},[t._v("\n                                     "+t._s(e.notification_status)+"\n                                 ")])],1),t._v(" "),n("td",[t._v(t._s(e.notified_at))])]),t._v(" "),n("tr",{staticClass:"grey lighten-3"},[n("td",{attrs:{colspan:"10"}},[t._v(t._s(e.comment))])])]}))],2)]},proxy:!0}],null,!0)})],1)],1)}))],2)}),[],!1,null,"4d3bc7fa",null).exports}}]);