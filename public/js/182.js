"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[182],{2170:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r});const a={name:"Report",data:function(){return{date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),menu:!1}}};const r=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{attrs:{cols:"3"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"Выберите дату","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",r,!1),a))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("\n                        Cancel\n                    ")]),t._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("\n                        OK\n                    ")])],1)],1)],1),t._v(" "),n("v-col",[n("a",{attrs:{type:"button",href:"/api/report/export/"}},[n("v-btn",{attrs:{color:"primary"},on:{click:function(t){}}},[t._v("\n                    Скачать отчет\n                ")])],1)])],1),t._v(" "),n("v-row")],1)}),[],!1,null,null,null).exports}}]);