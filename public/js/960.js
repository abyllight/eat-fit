"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[960],{9960:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r});var s=n(7757),i=n.n(s);function a(t,e,n,s,i,a,c){try{var o=t[a](c),r=o.value}catch(t){return void n(t)}o.done?e(r):Promise.resolve(r).then(s,i)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(s,i){var c=t.apply(e,n);function o(t){a(c,s,i,o,r,"next",t)}function r(t){a(c,s,i,o,r,"throw",t)}o(void 0)}))}}const o={name:"PurchaseList",data:function(){return{purchase:{},loading:!1,modal:!1,item:{},left:null,extra:null,dialog:!1,ingredients:[],chosen:[]}},mounted:function(){this.fetchIngredients(),this.getIngredients()},methods:{fetchIngredients:function(){var t=this;axios.get("/api/purchase-list-kitchen").then((function(e){t.purchase=e.data})).catch((function(t){console.log(t)}))},getIngredients:function(){var t=this;return c(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/ingredients").then((function(e){t.ingredients=e.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},calculatePurchase:function(){var t=this;return c(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,axios.get("/api/purchase-list-kitchen/calculate").then((function(e){t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:"success",type:"success"}),t.loading=!1,t.fetchIngredients()})).catch((function(t){}));case 3:case"end":return e.stop()}}),e)})))()},openModal:function(t){this.modal=!0,this.item=t,this.left=t.left,this.extra=t.extra},save:function(){var t=this;axios.post("/api/purchase-list-kitchen/left",{i_id:this.item.id,p_id:this.purchase.id,left:this.left,extra:this.extra}).then((function(e){t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:"success",type:"success"}),t.modal=!1,t.item={},t.fetchIngredients()})).catch((function(t){console.log(t)}))},addIngredients:function(){var t=this;axios.post("/api/purchase-list-kitchen/set/ingredients",{p_id:this.purchase.id,ingredients:this.chosen}).then((function(e){t.dialog=!1,t.fetchIngredients()})).catch((function(t){console.log(t)}))},removeIngredient:function(t){var e=this;axios.post("/api/purchase-list-kitchen/remove/ingredient",{p_id:this.purchase.id,i_id:t}).then((function(t){e.fetchIngredients()})).catch((function(t){console.log(t)}))}}};const r=(0,n(1900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"d-flex align-center justify-space-between mb-10"},[n("h1",{},[t._v(t._s(t.purchase.cuisine)+" - "+t._s(t.purchase.date))]),t._v(" "),n("v-btn",{attrs:{color:"primary",loading:t.loading,disabled:t.loading},on:{click:t.calculatePurchase}},[t._v("\n                    Get\n                ")])],1)])],1),t._v(" "),n("v-btn",{attrs:{color:"pink",dark:"",fixed:"",bottom:"",right:"",fab:""},on:{click:function(e){t.dialog=!0}}},[n("v-icon",[t._v("mdi-plus")])],1),t._v(" "),t._l(t.purchase.ingredients,(function(e,s){return n("v-row",{key:e.id},[n("v-col",[e.is_custom?n("v-btn",{attrs:{icon:"",color:"red"},on:{click:function(n){return t.removeIngredient(e.id)}}},[n("v-icon",[t._v("mdi-close")])],1):t._e()],1),t._v(" "),n("v-col",{attrs:{cols:"11"}},[n("v-card",{staticClass:"mb-4",attrs:{color:e.diff?"":"grey lighten-1"},on:{click:function(n){return t.openModal(e)}}},[n("v-card-text",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("h3",[t._v(t._s(s+1)+". "+t._s(e.name))])]),t._v(" "),n("v-col",{attrs:{cols:"6",md:"2"}},[n("h5",{staticClass:"text-uppercase"},[t._v("Остаток:")]),t._v(" "),n("strong",{staticClass:"blue--text"},[t._v(t._s(e.left))])]),t._v(" "),n("v-col",{attrs:{cols:"6",md:"2"}},[n("h5",{staticClass:"text-uppercase"},[t._v("Экстра:")]),t._v(" "),n("strong",{staticClass:"blue--text"},[t._v(t._s(e.extra))])]),t._v(" "),n("v-col",{attrs:{cols:"6",md:"2"}},[n("h5",{staticClass:"text-uppercase"},[t._v("Итого:")]),t._v(" "),null!=e.left?n("strong",{staticClass:"red--text"},[t._v(t._s(e.total))]):t._e()]),t._v(" "),n("v-col",{staticClass:"elevation-3 blue-grey lighten-5",attrs:{cols:"6",md:"2"}},[n("h5",{staticClass:"text-uppercase"},[t._v("Нужно взять:")]),t._v(" "),n("strong",{staticClass:"green--text"},[t._v(t._s(e.diff))])])],1)],1)],1)],1)],1)})),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{scrollable:"","max-width":"500px"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[n("v-card",[n("v-card-title",[t._v(t._s(t.item.name))]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[n("v-row",[n("v-col",[n("v-text-field",{staticClass:"mt-5",attrs:{outlined:"",clearable:"",type:"number",label:"Остаток"},model:{value:t.left,callback:function(e){t.left=e},expression:"left"}})],1)],1),t._v(" "),n("v-row",[n("v-col",[n("v-text-field",{staticClass:"mt-5",attrs:{outlined:"",clearable:"",type:"number",label:"Экстра"},model:{value:t.extra,callback:function(e){t.extra=e},expression:"extra"}})],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.modal=!1}}},[t._v("\n                        Закрыть\n                    ")]),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("\n                        Сохранить\n                    ")])],1)],1)],1)],1),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{scrollable:"",persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[t._v("Добавить ингредиенты")]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[n("v-row",[n("v-col",[n("v-autocomplete",{staticClass:"mt-5",attrs:{items:t.ingredients,"item-value":"id","item-text":"name",outlined:"",clearable:"",multiple:"",chips:""},model:{value:t.chosen,callback:function(e){t.chosen=e},expression:"chosen"}})],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                        Закрыть\n                    ")]),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:0===t.chosen.length},on:{click:t.addIngredients}},[t._v("\n                        Добавить\n                    ")])],1)],1)],1)],1)],2)}),[],!1,null,null,null).exports}}]);