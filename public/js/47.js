"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47],{6047:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});const n={name:"BroadcastMenu",data:function(){return{items:[],cuisine:"",dialog:!1,loading:!1}},mounted:function(){this.getItems()},computed:{isActive:function(){var t=(new Date).getHours();return t>=17&&t<=20}},methods:{getItems:function(){var t=this;axios.get("/api/broadcast-select").then((function(e){t.cuisine=e.data.cuisine,t.items=e.data.data}))},send:function(){var t=this;this.dialog=!1,this.loading=!0,axios.post("/api/broadcast-select").then((function(e){console.log(e),t.loading=!1}))}}};const i=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{staticClass:"d-flex justify-space-between"},[a("h3",[t._v(t._s(t.cuisine))]),t._v(" "),t.isActive?a("v-btn",{attrs:{color:"primary",loading:t.loading,disabled:t.loading},on:{click:function(e){t.dialog=!0}}},[t._v("Отправить")]):t._e()],1)],1),t._v(" "),a("v-row",t._l(t.items,(function(e){return a("v-col",{key:e.name,attrs:{cols:"3"}},[a("v-card",[a("v-card-title",[t._v(t._s(e.name))]),t._v(" "),a("v-card-text",{domProps:{innerHTML:t._s(e.text)}})],1)],1)})),1),t._v(" "),a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v("Вы уверены, что хотите продолжить действие?")]),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Отмена")]),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.send}},[t._v("ДА")]),t._v(" "),a("v-spacer")],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);