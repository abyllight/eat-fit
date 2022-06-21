"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[124],{7124:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});const o={name:"List",data:function(){return{purchase:{},loading:!1,modal:!1,item:{},msg:null,provider:{}}},mounted:function(){this.fetchIngredients()},methods:{fetchIngredients:function(){var t=this;axios.get("/api/purchase-list-kitchen").then((function(e){t.purchase=e.data})).catch((function(t){console.log(t)}))},openWhatsapp:function(t){this.item=t,this.provider=t.providers[0],this.modal=!0,this.msg=t.name+" - "+t.diff},done:function(t){var e=this;axios.post("/api/purchase-list-kitchen/done",{i_id:t.id,p_id:this.purchase.id}).then((function(t){e.modal=!1,e.item={},e.fetchIngredients()})).catch((function(t){console.log(t)}))}}};const s=(0,n(1900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",[n("h1",{},[t._v(t._s(t.purchase.cuisine)+" - "+t._s(t.purchase.date))])])],1),t._v(" "),t._l(t.purchase.ingredients,(function(e,o){return e.diff>0?n("v-row",{key:e.id},[n("v-col",{attrs:{cols:"1"}},[n("v-checkbox",{on:{change:function(n){return t.done(e)}},model:{value:e.done,callback:function(n){t.$set(e,"done",n)},expression:"i.done"}})],1),t._v(" "),n("v-col",{attrs:{cols:"11"}},[n("v-card",{attrs:{disabled:1===e.done}},[n("v-card-text",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("h3",[t._v(t._s(o+1)+". "+t._s(e.name))])]),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"4"}},[n("h5",{staticClass:"text-uppercase"},[t._v("Нужно взять:")]),t._v(" "),n("strong",{staticClass:"green--text"},[t._v(t._s(e.diff))])]),t._v(" "),e.providers.length>0?n("v-col",{attrs:{sm:"1"}},[n("v-btn",{attrs:{icon:"",color:"green",dark:""},on:{click:function(n){return t.openWhatsapp(e)}}},[n("v-icon",[t._v("\n                                        mdi-whatsapp\n                                    ")])],1)],1):t._e()],1)],1)],1)],1)],1):t._e()})),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{scrollable:"","max-width":"500px"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[n("v-card",[n("v-card-title",[t._v(t._s(t.item.name))]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[n("v-row",[n("v-col",[n("v-select",{staticClass:"mt-5",attrs:{items:t.item.providers,"item-text":"name","item-value":"id",outlined:""},model:{value:t.provider.id,callback:function(e){t.$set(t.provider,"id",e)},expression:"provider.id"}}),t._v(" "),n("v-textarea",{attrs:{outlined:"",clearable:""},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}})],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.modal=!1}}},[t._v("\n                            Закрыть\n                        ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:"",href:"https://api.whatsapp.com/send?phone="+t.provider.phone+"&text="+encodeURIComponent(this.msg),target:"_blank"},on:{click:function(e){t.modal=!1}}},[t._v("\n                            Отправить\n                        ")])],1)],1)],1)],1)],2)}),[],!1,null,null,null).exports}}]);