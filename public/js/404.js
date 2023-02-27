"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[404],{2725:(t,e,s)=>{s.d(e,{Z:()=>n});const r={name:"Stat",props:{stat:Object}};const n=(0,s(1900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-chip",{staticClass:"mr-2",attrs:{color:"teal","text-color":"white",label:""}},[t._v("\n        Итого: "+t._s(t.stat.total)+"\n    ")]),t._v(" "),s("v-chip",{staticClass:"mr-2",attrs:{label:""}},[t._v("\n        XS: "+t._s(t.stat.xs)+"\n    ")]),t._v(" "),s("v-chip",{staticClass:"mr-2",attrs:{label:""}},[t._v("\n        S: "+t._s(t.stat.s)+"\n    ")]),t._v(" "),s("v-chip",{staticClass:"mr-2",attrs:{label:""}},[t._v("\n        M: "+t._s(t.stat.m)+"\n    ")]),t._v(" "),s("v-chip",{staticClass:"mr-2",attrs:{label:""}},[t._v("\n        L: "+t._s(t.stat.l)+"\n    ")]),t._v(" "),s("v-chip",{attrs:{label:""}},[t._v("\n        XL: "+t._s(t.stat.xl)+"\n    ")])],1)}),[],!1,null,null,null).exports},6404:(t,e,s)=>{s.r(e),s.d(e,{default:()=>v});var r=s(7757),n=s.n(r),a=s(9669),i=s.n(a);function o(t,e,s,r,n,a,i){try{var o=t[a](i),c=o.value}catch(t){return void s(t)}o.done?e(c):Promise.resolve(c).then(r,n)}function c(t){return function(){var e=this,s=arguments;return new Promise((function(r,n){var a=t.apply(e,s);function i(t){o(a,r,n,i,c,"next",t)}function c(t){o(a,r,n,i,c,"throw",t)}i(void 0)}))}}const l={name:"Grid",components:{Stat:s(2725).Z},data:function(){return{loading:!0,isSelect:!0,orders:[],stat:{},rations:[],cuisine:{},dialog:!1,order:{ration:{},tableware:{},wishlist:[]},ration:{},panel:[]}},mounted:function(){this.getSelects(),this.getStat(),this.getCuisine()},methods:{getSelects:function(){var t=this;return c(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/api/select/all").then((function(e){t.orders=e.data})).catch((function(e){t.$store.dispatch("showAlert",{isVisible:!0,msg:e.message,color:"error",type:"error"})})).finally((function(){return t.loading=!1}));case 2:case"end":return e.stop()}}),e)})))()},getStat:function(){var t=this;return c(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/api/orders/select").then((function(e){t.stat=e.data.stat})).catch((function(e){t.$store.dispatch("showAlert",{isVisible:!0,msg:e.message,color:"error",type:"error"})})).finally((function(){return t.loading=!1}));case 2:case"end":return e.stop()}}),e)})))()},getCuisine:function(){var t=this;return c(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/api/cuisine/duty").then((function(e){t.cuisine=e.data.cuisine,t.rations=e.data.dishes})).catch((function(e){t.$store.dispatch("showAlert",{isVisible:!0,msg:e.message,color:"error",type:"error"})}));case 2:case"end":return e.stop()}}),e)})))()},openDialog:function(t){t.is_active&&(this.order=t,console.log(t),this.dialog=!0)},done:function(t){var e=this;i().post("/api/select/"+t.id+"/done").then((function(t){e.getSelects()}))}}};const v=(0,s(1900).Z)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-row",[s("v-col",{staticClass:"d-flex justify-space-between"},[s("stat",{attrs:{stat:t.stat}}),t._v(" "),s("a",{attrs:{type:"button",href:"/api/select/export/stickers"}},[s("v-btn",{attrs:{color:"primary"}},[t._v("\n                        Excel\n                    ")])],1)],1)],1),t._v(" "),s("v-row",[s("v-col",[s("h2",[t._v(t._s(t.cuisine.name))])])],1),t._v(" "),t.loading?s("v-row",{staticClass:"d-flex justify-center"},[s("v-progress-circular",{attrs:{size:70,width:7,color:"primary",indeterminate:""}})],1):s("v-row",[s("v-expansion-panels",{attrs:{multiple:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},t._l(t.orders,(function(e,r){return s("v-expansion-panel",{key:r},[s("v-expansion-panel-header",[s("p",[s("span",{staticClass:"text-sm-body-2 font-weight-bold"},[t._v(t._s(e[0].order_name)+" - "+t._s(e[0].order_tag))])])]),t._v(" "),s("v-expansion-panel-content",[s("v-row",t._l(e,(function(e){return s("v-col",{key:e.name,attrs:{cols:"12",md:"3"}},[s("v-card",{staticClass:"mb-3",staticStyle:{cursor:"pointer"},attrs:{color:e.done?"teal":e.color,dark:1===e.done},on:{click:function(s){return t.openDialog(e)}}},[s("v-card-text",[s("div",{staticClass:"d-flex justify-space-between mb-2"},[e.is_active?s("h2",{staticClass:"mb-2"},[t._v(t._s(e.code))]):t._e(),t._v(" "),s("p",{staticClass:"text-sm-body-2 mb-0"},[t._v(t._s(e.ration.name))])]),t._v(" "),s("p",{staticClass:"mb-2"},[t._v(t._s(e.dish_name))]),t._v(" "),s("p",{staticClass:"font-weight-bold mb-0"},[t._v(t._s(e.weight)+"гр")])])],1),t._v(" "),e.is_active?s("v-btn",{attrs:{color:"teal",dark:"",block:""},on:{click:function(s){return t.done(e)}}},[t._v("\n                                    сделано\n                                    "),e.done?s("v-icon",{attrs:{right:""}},[t._v("mdi-check")]):t._e()],1):t._e()],1)})),1)],1)],1)})),1)],1),t._v(" "),s("v-row"),t._v(" "),s("v-row",{attrs:{justify:"space-around"}},[s("v-col",{attrs:{cols:"auto"}},[s("v-dialog",{attrs:{"max-width":"720"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-toolbar",{attrs:{color:"primary",dark:""}},[t._v("\n                            "+t._s(t.order.order_name)+"\n                            "),s("v-spacer"),t._v(" "),s("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[s("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),s("v-card-title",[t._v(t._s(t.order.dish_name))]),t._v(" "),s("v-card-subtitle",[t._v(t._s(t.order.ration.name))]),t._v(" "),s("v-card-text",[s("v-row",[s("v-col",t._l(t.order.ingredients,(function(e,r){return s("v-sheet",{key:e.name,staticClass:"mb-2"},[s("strong",[t._v(t._s(r+1)+".")]),t._v("\n                                        "+t._s(e.name)+"\n                                    ")])})),1),t._v(" "),s("v-col",[t.order.weight?s("div",{staticClass:"mb-3 rounded pa-2",staticStyle:{border:"1px solid grey"}},[s("h4",[t._v("Вес:")]),t._v("\n                                        "+t._s(t.order.weight)+" грамм\n                                    ")]):t._e(),t._v(" "),t.order.description?s("div",{staticClass:"mb-3 rounded pa-2",staticStyle:{border:"1px solid grey"}},[s("h4",[t._v("Описание:")]),t._v("\n                                        "+t._s(t.order.description)+"\n                                    ")]):t._e(),t._v(" "),t.order.wishlist.length>0?s("div",{staticClass:"mb-3 rounded pa-2",staticStyle:{border:"1px solid darkseagreen"}},[s("h4",[t._v("Хотелки:")]),t._v(" "),t._l(t.order.wishlist,(function(e,r){return s("p",{key:e.id,staticClass:"mb-0"},[s("strong",[t._v(t._s(r+1)+".")]),t._v(" "+t._s(e.wish)+"\n                                        ")])}))],2):t._e(),t._v(" "),t.order.tableware?s("div",{staticClass:"mb-3 rounded pa-2",staticStyle:{border:"1px solid dodgerblue"}},[s("h4",[t._v("Посуда:")]),t._v(" "),s("p",{staticClass:"mb-1"},[t._v(t._s(t.order.tableware.name))]),t._v(" "),s("img",{attrs:{src:/storage/+t.order.tableware.img,width:"100"}})]):t._e()])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);