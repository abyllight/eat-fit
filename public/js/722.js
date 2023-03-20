"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[722],{722:(t,e,n)=>{n.r(e),n.d(e,{default:()=>u});var i=n(7757),s=n.n(i),r=n(9669),a=n.n(r),o=n(7014);function c(t,e,n,i,s,r,a){try{var o=t[r](a),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(i,s)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(i,s){var r=t.apply(e,n);function a(t){c(r,i,s,a,o,"next",t)}function o(t){c(r,i,s,a,o,"throw",t)}a(void 0)}))}}const d={name:"Select",components:{Stat:n(2725).Z,SelectModal:o.Z},data:function(){return{amo_loading:!1,orders:[],order:{},select_stat:{},itemsPerPage:300,search:"",headers:[{text:"#",value:"index"},{text:"Имя",value:"name"},{text:"Тэг",value:"tag"},{text:"Город",value:"city"}],select_result:[],loading:!0,select_loading:!1,cuisine:{},isSelect:!0,dialog:!1,rations:[],extra:{r_id:null,c_id:null,o_id:null}}},created:function(){this.getSelect(),this.getCuisine(),this.getRations(),this.generateCode()},computed:{isDutyDishId:function(){return this.dishes[0].id===this.dish.id},isActive:function(){var t=(new Date).getHours();return t<5||t>=10}},methods:{addExtra:function(){var t=this;a().post("/api/select/extra",this.extra).then((function(e){t.dialog=!1,window.location.reload()})).catch((function(t){console.log(t)}))},deleteSelect:function(t){a().delete("/api/select/"+t).then((function(t){window.location.reload()})).catch((function(t){console.log(t)}))},fetchOrdersFromAmo:function(){var t=this;return l(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.amo_loading=!0,e.next=3,a().get("/api/orders/eat-fit").then((function(){t.getSelect()})).catch((function(e){t.$store.dispatch("showAlert",{isVisible:!0,msg:e.message,color:"error",type:"error"})})).finally((function(){return t.amo_loading=!1}));case 3:case"end":return e.stop()}}),e)})))()},getCuisine:function(){var t=this;return l(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("/api/cuisine/duty").then((function(e){t.cuisine=e.data.cuisine,t.extra.c_id=t.cuisine.id})).catch((function(e){t.loading=!1,t.$store.dispatch("showAlert",{isVisible:!0,msg:e.message,color:"error",type:"error"})}));case 2:case"end":return e.stop()}}),e)})))()},getRations:function(){var t=this;return l(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("/api/rations").then((function(e){t.rations=e.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},generateCode:function(){a().get("/api/select/generate-code")},showOrderDetails:function(t){this.order=t,this.extra.o_id=t.id,this.getSelectDetailsByOrder(t.id)},getSelectDetailsByOrder:function(t){var e=this;return l(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.select_loading=!0,n.next=3,a().get("/api/selects/order/"+t).then((function(t){e.select_previous=t.data.previous,e.select_result=t.data.result,e.blacklist=t.data.blacklist,e.mix=t.data.blacklist,e.wishlist=t.data.wishlist,e.select_loading=!1})).catch((function(t){console.log(t)}));case 3:case"end":return n.stop()}}),n)})))()},openSettings:function(t,e){this.$router.push({name:"select-details",params:{id:t,r_id:e}})},activateDeactivate:function(t){var e=this;a().post("/api/select/activate-deactivate",{select_id:t}).then((function(t){e.getSelectDetailsByOrder(e.order.id)})).catch((function(t){console.log(t)}))},getDishesByRation:function(t){var e=this;return l(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("/api/dishes/ration/"+t).then((function(t){e.dishes=t.data,e.dishes.length>0?(e.dish=e.dishes.find((function(t){return t.id===e.result.dish_id})),e.dish||(e.dish=e.dishes[0])):e.dish.ingredients=[]})).catch((function(t){console.log(t)}));case 2:case"end":return n.stop()}}),n)})))()},getSelectColor:function(t){if(this.select_result.length>0){var e=this.select_result.find((function(e){return e.ration_id===t}));return e?e.color:""}return""},exportExcel:function(){},whatsapp:function(t,e,n){window.open("https://api.whatsapp.com/send?phone="+t+"&text=Рацион:%20"+e+"%0D%0AНазвание:%20"+n,"_blank")},resetResult:function(t){var e=this;a().post("/api/select/reset",{id:t}).then((function(t){e.getSelect()}))},getSelect:function(){var t=this;a().get("/api/orders/select").then((function(e){t.loading=!1,t.orders=e.data.orders,t.select_stat=e.data.stat,t.isSelect=!0}))},getLite:function(){var t=this;a().get("/api/orders/lite").then((function(e){t.loading=!1,t.orders=e.data.orders,t.select_stat=e.data.stat,t.isSelect=!1}))},sendMessage:function(t,e){a().get("/api/select/message/"+t).then((function(t){window.open("https://api.whatsapp.com/send?phone=".concat(e,"&text=").concat(encodeURIComponent(t.data)),"_blank")}))}}};const u=(0,n(1900).Z)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{staticClass:"d-flex justify-space-between"},[n("div",[n("div",{staticClass:"d-flex"},[n("v-btn",{staticClass:"mr-3",attrs:{disabled:t.isSelect,color:"primary",small:""},on:{click:t.getSelect}},[t._v("\n                            Select\n                        ")]),t._v(" "),n("v-btn",{staticClass:"mr-5",attrs:{disabled:!t.isSelect,color:"primary",small:""},on:{click:t.getLite}},[t._v("\n                            Lite\n                        ")]),t._v(" "),n("h3",[t._v(t._s(t.cuisine.name))])],1),t._v(" "),n("stat",{staticClass:"my-3",attrs:{stat:t.select_stat}})],1),t._v(" "),n("div",{staticClass:"mt-2"},[t.isActive?n("v-btn",{staticClass:"mr-4",attrs:{loading:t.amo_loading,disabled:t.amo_loading,color:"primary"},on:{click:t.fetchOrdersFromAmo}},[t._v("\n                        Получить данные с AMOCRM\n                    ")]):t._e(),t._v(" "),n("a",{attrs:{type:"button",href:"/api/select/export/stickers"}},[n("v-btn",{attrs:{color:"primary"}},[t._v("\n                            Стикеры\n                        ")])],1)],1)])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-card",[n("v-card-title",[n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Поиск","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("v-data-table",{attrs:{height:"90vh",loading:t.loading,"loading-text":"Loading... Please wait",headers:t.headers,items:t.orders,"items-per-page":t.itemsPerPage,"item-key":"id",search:t.search,"hide-default-footer":""},on:{"click:row":t.showOrderDetails},scopedSlots:t._u([{key:"item.index",fn:function(e){var n=e.index;return[t._v("\n                            "+t._s(n+1)+"\n                        ")]}}])})],1)],1),t._v(" "),Object.keys(t.order).length>0?n("v-col",[n("div",{staticClass:"mb-5 d-flex justify-space-between"},[n("h3",[t._v(t._s(t.order.name)+" | "+t._s(t.order.whatsapp))])]),t._v(" "),n("v-row",[t._l(t.select_result,(function(e,i){return n("v-col",{key:i,attrs:{cols:"12",md:"4"}},[n("v-card",{attrs:{color:e.color,loading:t.select_loading}},[n("div",{staticClass:"d-flex justify-space-between align-center pt-4 px-4"},[n("h3",[t._v(t._s(e.ration.name))]),t._v(" "),n("span",[t._v(t._s(e.weight)+" гр")])]),t._v(" "),n("v-card-subtitle",[t._v(t._s(e.dish_name))]),t._v(" "),n("v-card-text",[t._v(t._s(e.description))]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:""},on:{click:function(n){return t.openSettings(e.id,e.r_id)}}},[t._v("\n                                    настроить\n                                ")]),t._v(" "),e.is_extra?n("v-btn",{attrs:{color:"black",text:""},on:{click:function(n){return t.deleteSelect(e.id)}}},[t._v("\n                                    Удалить\n                                ")]):n("v-btn",{attrs:{color:"black",text:""},on:{click:function(n){return t.activateDeactivate(e.id)}}},[t._v("\n                                    "+t._s(e.is_active?"Убрать":"Вернуть")+"\n                                ")])],1)],1)],1)})),t._v(" "),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-card",[n("v-card-title",[t._v("Дополнительно")]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!0}}},[t._v("\n                                    Добавить\n                                ")])],1)],1)],1)],2)],1):t._e()],1),t._v(" "),n("v-row",[n("v-col",[n("v-dialog",{attrs:{"max-width":"400px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[t._v("\n                            Дополнительно\n                        ")]),t._v(" "),n("v-card-text",[n("v-select",{attrs:{items:t.rations,dense:"","item-text":"name","item-value":"id",outlined:"",label:"Рационы"},model:{value:t.extra.r_id,callback:function(e){t.$set(t.extra,"r_id",e)},expression:"extra.r_id"}})],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                                Закрыть\n                            ")]),t._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:t.addExtra}},[t._v("\n                                Сохранить\n                            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports},2725:(t,e,n)=>{n.d(e,{Z:()=>s});const i={name:"Stat",props:{stat:Object}};const s=(0,n(1900).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-chip",{staticClass:"mr-2",attrs:{color:"teal","text-color":"white",label:""}},[t._v("\n        Итого: "+t._s(t.stat.total)+"\n    ")]),t._v(" "),n("v-chip",{staticClass:"mr-2",attrs:{label:""}},[t._v("\n        XS: "+t._s(t.stat.xs)+"\n    ")]),t._v(" "),n("v-chip",{staticClass:"mr-2",attrs:{label:""}},[t._v("\n        S: "+t._s(t.stat.s)+"\n    ")]),t._v(" "),n("v-chip",{staticClass:"mr-2",attrs:{label:""}},[t._v("\n        M: "+t._s(t.stat.m)+"\n    ")]),t._v(" "),n("v-chip",{staticClass:"mr-2",attrs:{label:""}},[t._v("\n        L: "+t._s(t.stat.l)+"\n    ")]),t._v(" "),n("v-chip",{attrs:{label:""}},[t._v("\n        XL: "+t._s(t.stat.xl)+"\n    ")])],1)}),[],!1,null,null,null).exports},7014:(t,e,n)=>{n.d(e,{Z:()=>v});var i=n(7757),s=n.n(i),r=n(9669),a=n.n(r);function o(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function l(t,e,n,i,s,r,a){try{var o=t[r](a),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(i,s)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(i,s){var r=t.apply(e,n);function a(t){l(r,i,s,a,o,"next",t)}function o(t){l(r,i,s,a,o,"throw",t)}a(void 0)}))}}const u={name:"SelectModal",props:{dialog:Boolean,order:Object,cuisine:Object,ration:Object,blacklist:Array,wishlist:Array,result:Object,previous:Object,dishes:Array,dish:Object},data:function(){return{categories:[],ingredients:[],applied_categories:[],errors:[],tag:"",rations:[],ration_id:null}},created:function(){this.getCategories(),this.getIngredients(),this.getRations()},methods:{getIngredients:function(){var t=this;return d(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("/api/ingredients").then((function(e){t.ingredients=e.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},getCategories:function(){var t=this;return d(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("/api/categories").then((function(e){t.categories=e.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},getRations:function(){var t=this;return d(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("/api/rations/required").then((function(e){t.rations=e.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},applyCategories:function(){var t=this,e=this.applied_categories.map((function(e){return t.categories.find((function(t){return t.id===e})).ingredient_ids}));e=(e=e.flat()).concat(this.blacklist),this.$emit("update-blacklist",o(new Set(e)))},remove:function(t){var e=this.blacklist.filter((function(e){return e!==t}));this.$emit("update-blacklist",e)},addTag:function(){var t=this;a().post("/api/wishlist",{id:this.order.id,tag:this.tag}).then((function(e){t.$emit("add-tag",t.tag),t.tag="",t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:e.data.status?"green":"error",type:e.data.status?"success":"error"}),t.errors=[]})).catch((function(e){t.errors=e.response.data.errors}))},removeTag:function(t){var e=this;a().post("/api/wishlist/remove",{id:this.order.id,tag:t}).then((function(n){e.$emit("remove-tag",t),e.tag="",e.$store.dispatch("showAlert",{isVisible:!0,msg:n.data.msg,color:n.data.status?"green":"error",type:n.data.status?"success":"error"})})).catch((function(t){e.errors=t.response.data.errors}))},hasResultIncludeIngredient:function(t){if(this.result.ingredient_ids)return this.result.ingredient_ids.includes(t)},setDish:function(){var t=this;a().post("/api/select/add/dish",{select_id:this.result.id,ration_id:this.ration.iiko_id,dish_id:this.dish.id}).then((function(e){e.data.status||t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:"error",type:"error"}),t.$emit("update-result",e.data.data)})).catch((function(t){console.log(t)}))},showAnalogs:function(t){this.getCategoriesByIngredient(t),this.target_ingredient=t,this.dialog2=!0},hasAnalog:function(t){if(this.result.ingredient_ids)return this.result.ingredients.findIndex((function(e){return e.pivot.analog_id===t}))>=0},getAnalogId:function(t){return this.result.ingredients.find((function(e){return e.pivot.analog_id===t})).id},getAnalogName:function(t){return this.result.ingredients.find((function(e){return e.pivot.analog_id===t})).name},addIngredient:function(t){var e=this;a().post("/api/select/add/ingredient",{select_id:this.result.id,ingredient_id:t}).then((function(t){t.data.status||e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:"error",type:"error"}),e.result=t.data.data})).catch((function(t){console.log(t)}))},removeIngredient:function(t){var e=this;a().post("/api/select/remove/ingredient",{select_id:this.result.id,ingredient_id:t}).then((function(t){t.data.status||e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:"error",type:"error"}),e.result=t.data.data})).catch((function(t){console.log(t)}))},replaceIngredient:function(t){var e=this;a().post("/api/select/replace/ingredient",{select_id:this.result.id,ingredient_id:this.target_ingredient,analog_id:t}).then((function(t){t.data.status&&(e.result=t.data.select,e.closeDialog2())})).catch((function(t){console.log(t)}))},returnIngredient:function(t){var e=this;a().post("/api/select/return/ingredient",{select_id:this.result.id,ingredient_id:t,analog_id:this.getAnalogId(t)}).then((function(t){t.data.status&&(e.result=t.data.select)})).catch((function(t){console.log(t)}))},getDishesByRation:function(t){this.$emit("update-dishes",t)}}};const v=(0,n(1900).Z)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.$emit("close")}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v("Диета - "+t._s(t.ration.name))]),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-card-title",[t._v(t._s(t.order.name)+" - "+t._s(t.order.tag))]),t._v(" "),t.order?n("v-card-text",[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",lg:"4   "}},[t.order.diet?n("v-card",{staticClass:"mb-4",attrs:{color:"lime lighten-4"}},[n("v-card-text",[t._v("\n                                        "+t._s(t.order.diet)+"\n                                    ")])],1):t._e()],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",lg:"4   "}},[t.order.diet_old?n("v-card",{attrs:{color:"red lighten-4"}},[n("v-card-text",[t._v("\n                                        "+t._s(t.order.diet_old)+"\n                                    ")])],1):t._e()],1)],1),t._v(" "),n("v-divider",{staticClass:"my-8"}),t._v(" "),n("h3",{staticClass:"mb-5"},[t._v("Черный список")]),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",lg:"4"}},[n("v-autocomplete",{attrs:{items:t.categories,"item-text":"name","item-value":"id",clearable:"",outlined:"",label:"Категории",multiple:""},on:{change:t.applyCategories},model:{value:t.applied_categories,callback:function(e){t.applied_categories=e},expression:"applied_categories"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",lg:"8"}},[n("v-autocomplete",{attrs:{items:t.ingredients,"item-text":"name","item-value":"id",clearable:"",outlined:"","small-chips":"",label:"Ингредиенты",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[n("v-chip",t._b({attrs:{small:"","input-value":e.selected,close:""},on:{click:e.select,"click:close":function(n){return t.remove(e.item.id)}}},"v-chip",e.attrs,!1),[t._v("\n                                            "+t._s(e.item.name)+"\n                                        ")])]}}],null,!1,2740152871),model:{value:t.blacklist,callback:function(e){t.blacklist=e},expression:"blacklist"}}),t._v(" "),n("v-btn",{attrs:{dark:""},on:{click:function(e){return t.$emit("save-blacklist")}}},[t._v("\n                                    Сохранить\n                                ")])],1)],1),t._v(" "),n("h3",{staticClass:"my-5"},[t._v("Зеленый список")]),t._v(" "),n("v-row",{staticClass:"mb-4"},[n("v-col",{attrs:{sm:"12",lg:"4"}},[n("v-text-field",{attrs:{clearable:"",label:"Тэг",outlined:"","error-messages":t.errors.tag},model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}}),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:t.addTag}},[t._v("\n                                    Добавить\n                                ")])],1),t._v(" "),n("v-col",{attrs:{sm:"12",lg:"8"}},t._l(t.wishlist,(function(e){return n("v-chip",{key:e,staticClass:"ma-2",attrs:{close:""},on:{"click:close":function(n){return t.removeTag(e)}}},[t._v("\n                                    "+t._s(e)+"\n                                ")])})),1)],1),t._v(" "),n("v-divider",{staticClass:"my-6"}),t._v(" "),n("h2",{staticClass:"mb-6"},[t._v(t._s(t.cuisine.name)+" - "+t._s(t.ration.name))]),t._v(" "),n("v-row",{staticClass:"py-3"},[Object.keys(t.previous).length>0?n("v-col",{attrs:{cols:"3"}},[n("h4",[t._v(t._s(t.previous.created_at))]),t._v(" "),n("span",[t._v(t._s(t.previous.cuisine))]),t._v(" "),t.previous.dish_name?n("v-card",{staticClass:"mb-5 mt-3",attrs:{color:"blue-grey lighten-5"}},[n("v-card-title",[t._v(t._s(t.previous.dish_name))]),t._v(" "),n("v-card-subtitle",[t._v(t._s(t.previous.description))])],1):t._e(),t._v(" "),n("v-list",{attrs:{dense:""}},t._l(t.previous.ingredients,(function(e,i){return n("v-list-item",{key:i,class:t.hasResultIncludeIngredient(e.id)?"yellow lighten-3":""},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(i+1)+". "+t._s(e.name))])],1)],1)})),1)],1):t._e(),t._v(" "),n("v-col",{attrs:{cols:"5"}},[n("h4",[t._v("Сегодня")]),t._v(" "),n("span",[t._v(t._s(t.cuisine.name))]),t._v(" "),n("v-row",{staticClass:"mt-2"},[n("v-col",{attrs:{cols:"3"}},[n("v-select",{attrs:{items:t.rations,dense:"","item-text":"name","item-value":"iiko_id",outlined:"",label:"Рационы"},on:{change:function(e){return t.getDishesByRation(t.ration_id)}},model:{value:t.ration_id,callback:function(e){t.ration_id=e},expression:"ration_id"}})],1),t._v(" "),t.dish?n("v-col",{attrs:{cols:"6"}},[n("v-select",{attrs:{dense:"",items:t.dishes,"item-text":"name","return-object":"",outlined:"",label:"Блюда"},model:{value:t.dish,callback:function(e){t.dish=e},expression:"dish"}})],1):t._e(),t._v(" "),t.dish?n("v-col",{attrs:{cols:"3"}},[n("v-btn",{attrs:{color:"primary",small:"",disabled:t.dish.id===t.result.dish_id},on:{click:t.setDish}},[t._v("\n                                            Выбрать\n                                        ")])],1):t._e()],1),t._v(" "),t.dish&&t.result?n("div",t._l(t.dish.ingredients,(function(e,i){return n("v-sheet",{key:e.id,staticClass:"pa-3 mb-3 flex justify-center",attrs:{elevation:"1",color:t.blacklist.includes(e.id)?"red lighten-3":""}},[n("div",{staticClass:"flex flex-row"},[n("p",{class:t.hasResultIncludeIngredient(e.id)?"":"text-decoration-line-through"},[t._v("\n                                                "+t._s(i+1)+". "+t._s(e.name)+"\n                                            ")]),t._v(" "),t.hasAnalog(e.id)?n("span",[t._v("\n                                                    "+t._s(t.getAnalogName(e.id))+"\n                                                ")]):t._e()]),t._v(" "),t.dish.id===t.result.dish_id?n("div",{staticClass:"mt-2"},[t.hasAnalog(e.id)?t._e():n("v-btn",{class:t.hasResultIncludeIngredient(e.id)?"red white&#45;&#45;text":"green",attrs:{"x-small":""},on:{click:function(n){t.hasResultIncludeIngredient(e.id)?t.removeIngredient(e.id):t.addIngredient(e.id)}}},[t._v("\n                                                "+t._s(t.hasResultIncludeIngredient(e.id)?"Убрать":"Вернуть")+"\n                                            ")]),t._v(" "),t.hasResultIncludeIngredient(e.id)||t.hasAnalog(e.id)?n("v-btn",{staticClass:"ml-2",attrs:{"x-small":""},on:{click:function(n){t.hasAnalog(e.id)?t.returnIngredient(e.id):t.showAnalogs(e.id)}}},[t._v("\n                                                "+t._s(t.hasAnalog(e.id)?"Отменить замену":"Замена")+"\n                                            ")]):t._e()],1):t._e()])})),1):t._e()],1)],1)],1)],1):t._e()],1)],1)],1)}),[],!1,null,null,null).exports}}]);