"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[629],{8629:(t,e,i)=>{i.r(e),i.d(e,{default:()=>p});var n=i(7757),s=i.n(n),r=i(9669),a=i.n(r);function o(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return l(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function c(t,e,i,n,s,r,a){try{var o=t[r](a),l=o.value}catch(t){return void i(t)}o.done?e(l):Promise.resolve(l).then(n,s)}function d(t){return function(){var e=this,i=arguments;return new Promise((function(n,s){var r=t.apply(e,i);function a(t){c(r,n,s,a,o,"next",t)}function o(t){c(r,n,s,a,o,"throw",t)}a(void 0)}))}}const u={name:"SelectModal",props:{dialog:Boolean,order:Object,cuisine:Object,ration:Object,blacklist:Array,wishlist:Array,result:Object,previous:Object,dishes:Array,dish:Object},data:function(){return{categories:[],ingredients:[],applied_categories:[],errors:[],tag:"",rations:[],ration_id:null}},created:function(){this.getCategories(),this.getIngredients(),this.getRations()},methods:{getIngredients:function(){var t=this;return d(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("/api/ingredients").then((function(e){t.ingredients=e.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},getCategories:function(){var t=this;return d(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("/api/categories").then((function(e){t.categories=e.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},getRations:function(){var t=this;return d(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("/api/rations/required").then((function(e){t.rations=e.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},applyCategories:function(){var t=this,e=this.applied_categories.map((function(e){return t.categories.find((function(t){return t.id===e})).ingredient_ids}));e=(e=e.flat()).concat(this.blacklist),this.$emit("update-blacklist",o(new Set(e)))},remove:function(t){var e=this.blacklist.filter((function(e){return e!==t}));this.$emit("update-blacklist",e)},addTag:function(){var t=this;a().post("/api/wishlist",{id:this.order.id,tag:this.tag}).then((function(e){t.$emit("add-tag",t.tag),t.tag="",t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:e.data.status?"green":"error",type:e.data.status?"success":"error"}),t.errors=[]})).catch((function(e){t.errors=e.response.data.errors}))},removeTag:function(t){var e=this;a().post("/api/wishlist/remove",{id:this.order.id,tag:t}).then((function(i){e.$emit("remove-tag",t),e.tag="",e.$store.dispatch("showAlert",{isVisible:!0,msg:i.data.msg,color:i.data.status?"green":"error",type:i.data.status?"success":"error"})})).catch((function(t){e.errors=t.response.data.errors}))},hasResultIncludeIngredient:function(t){if(this.result.ingredient_ids)return this.result.ingredient_ids.includes(t)},setDish:function(){var t=this;a().post("/api/select/add/dish",{select_id:this.result.id,ration_id:this.ration.iiko_id,dish_id:this.dish.id}).then((function(e){e.data.status||t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:"error",type:"error"}),t.$emit("update-result",e.data.data)})).catch((function(t){console.log(t)}))},showAnalogs:function(t){this.getCategoriesByIngredient(t),this.target_ingredient=t,this.dialog2=!0},hasAnalog:function(t){if(this.result.ingredient_ids)return this.result.ingredients.findIndex((function(e){return e.pivot.analog_id===t}))>=0},getAnalogId:function(t){return this.result.ingredients.find((function(e){return e.pivot.analog_id===t})).id},getAnalogName:function(t){return this.result.ingredients.find((function(e){return e.pivot.analog_id===t})).name},addIngredient:function(t){var e=this;a().post("/api/select/add/ingredient",{select_id:this.result.id,ingredient_id:t}).then((function(t){t.data.status||e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:"error",type:"error"}),e.result=t.data.data})).catch((function(t){console.log(t)}))},removeIngredient:function(t){var e=this;a().post("/api/select/remove/ingredient",{select_id:this.result.id,ingredient_id:t}).then((function(t){t.data.status||e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:"error",type:"error"}),e.result=t.data.data})).catch((function(t){console.log(t)}))},replaceIngredient:function(t){var e=this;a().post("/api/select/replace/ingredient",{select_id:this.result.id,ingredient_id:this.target_ingredient,analog_id:t}).then((function(t){t.data.status&&(e.result=t.data.select,e.closeDialog2())})).catch((function(t){console.log(t)}))},returnIngredient:function(t){var e=this;a().post("/api/select/return/ingredient",{select_id:this.result.id,ingredient_id:t,analog_id:this.getAnalogId(t)}).then((function(t){t.data.status&&(e.result=t.data.select)})).catch((function(t){console.log(t)}))},getDishesByRation:function(t){this.$emit("update-dishes",t)}}};var v=i(1900);function h(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return g(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return g(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function _(t,e,i,n,s,r,a){try{var o=t[r](a),l=o.value}catch(t){return void i(t)}o.done?e(l):Promise.resolve(l).then(n,s)}function f(t){return function(){var e=this,i=arguments;return new Promise((function(n,s){var r=t.apply(e,i);function a(t){_(r,n,s,a,o,"next",t)}function o(t){_(r,n,s,a,o,"throw",t)}a(void 0)}))}}const m={name:"Select",components:{SelectModal:(0,v.Z)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-toolbar",{attrs:{dark:"",color:"primary"}},[i("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.$emit("close")}}},[i("v-icon",[t._v("mdi-close")])],1),t._v(" "),i("v-toolbar-title",[t._v("Диета - "+t._s(t.ration.name))]),t._v(" "),i("v-spacer")],1),t._v(" "),i("v-card-title",[t._v(t._s(t.order.name)+" - "+t._s(t.order.tag))]),t._v(" "),t.order?i("v-card-text",[i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",lg:"4   "}},[t.order.diet?i("v-card",{staticClass:"mb-4",attrs:{color:"lime lighten-4"}},[i("v-card-text",[t._v("\n                                        "+t._s(t.order.diet)+"\n                                    ")])],1):t._e()],1),t._v(" "),i("v-col",{attrs:{cols:"12",sm:"12",lg:"4   "}},[t.order.diet_old?i("v-card",{attrs:{color:"red lighten-4"}},[i("v-card-text",[t._v("\n                                        "+t._s(t.order.diet_old)+"\n                                    ")])],1):t._e()],1)],1),t._v(" "),i("v-divider",{staticClass:"my-8"}),t._v(" "),i("h3",{staticClass:"mb-5"},[t._v("Черный список")]),t._v(" "),i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",lg:"4"}},[i("v-autocomplete",{attrs:{items:t.categories,"item-text":"name","item-value":"id",clearable:"",outlined:"",label:"Категории",multiple:""},on:{change:t.applyCategories},model:{value:t.applied_categories,callback:function(e){t.applied_categories=e},expression:"applied_categories"}})],1),t._v(" "),i("v-col",{attrs:{cols:"12",sm:"12",lg:"8"}},[i("v-autocomplete",{attrs:{items:t.ingredients,"item-text":"name","item-value":"id",clearable:"",outlined:"","small-chips":"",label:"Ингредиенты",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[i("v-chip",t._b({attrs:{small:"","input-value":e.selected,close:""},on:{click:e.select,"click:close":function(i){return t.remove(e.item.id)}}},"v-chip",e.attrs,!1),[t._v("\n                                            "+t._s(e.item.name)+"\n                                        ")])]}}],null,!1,2740152871),model:{value:t.blacklist,callback:function(e){t.blacklist=e},expression:"blacklist"}}),t._v(" "),i("v-btn",{attrs:{dark:""},on:{click:function(e){return t.$emit("save-blacklist")}}},[t._v("\n                                    Сохранить\n                                ")])],1)],1),t._v(" "),i("h3",{staticClass:"my-5"},[t._v("Зеленый список")]),t._v(" "),i("v-row",{staticClass:"mb-4"},[i("v-col",{attrs:{sm:"12",lg:"4"}},[i("v-text-field",{attrs:{clearable:"",label:"Тэг",outlined:"","error-messages":t.errors.tag},model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}}),t._v(" "),i("v-btn",{attrs:{color:"primary"},on:{click:t.addTag}},[t._v("\n                                    Добавить\n                                ")])],1),t._v(" "),i("v-col",{attrs:{sm:"12",lg:"8"}},t._l(t.wishlist,(function(e){return i("v-chip",{key:e,staticClass:"ma-2",attrs:{close:""},on:{"click:close":function(i){return t.removeTag(e)}}},[t._v("\n                                    "+t._s(e)+"\n                                ")])})),1)],1),t._v(" "),i("v-divider",{staticClass:"my-6"}),t._v(" "),i("h2",{staticClass:"mb-6"},[t._v(t._s(t.cuisine.name)+" - "+t._s(t.ration.name))]),t._v(" "),i("v-row",{staticClass:"py-3"},[Object.keys(t.previous).length>0?i("v-col",{attrs:{cols:"3"}},[i("h4",[t._v(t._s(t.previous.created_at))]),t._v(" "),i("span",[t._v(t._s(t.previous.cuisine))]),t._v(" "),t.previous.dish_name?i("v-card",{staticClass:"mb-5 mt-3",attrs:{color:"blue-grey lighten-5"}},[i("v-card-title",[t._v(t._s(t.previous.dish_name))]),t._v(" "),i("v-card-subtitle",[t._v(t._s(t.previous.description))])],1):t._e(),t._v(" "),i("v-list",{attrs:{dense:""}},t._l(t.previous.ingredients,(function(e,n){return i("v-list-item",{key:n,class:t.hasResultIncludeIngredient(e.id)?"yellow lighten-3":""},[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(n+1)+". "+t._s(e.name))])],1)],1)})),1)],1):t._e(),t._v(" "),i("v-col",{attrs:{cols:"5"}},[i("h4",[t._v("Сегодня")]),t._v(" "),i("span",[t._v(t._s(t.cuisine.name))]),t._v(" "),i("v-row",{staticClass:"mt-2"},[i("v-col",{attrs:{cols:"3"}},[i("v-select",{attrs:{items:t.rations,dense:"","item-text":"name","item-value":"iiko_id",outlined:"",label:"Рационы"},on:{change:function(e){return t.getDishesByRation(t.ration_id)}},model:{value:t.ration_id,callback:function(e){t.ration_id=e},expression:"ration_id"}})],1),t._v(" "),t.dish?i("v-col",{attrs:{cols:"6"}},[i("v-select",{attrs:{dense:"",items:t.dishes,"item-text":"name","return-object":"",outlined:"",label:"Блюда"},model:{value:t.dish,callback:function(e){t.dish=e},expression:"dish"}})],1):t._e(),t._v(" "),t.dish?i("v-col",{attrs:{cols:"3"}},[i("v-btn",{attrs:{color:"primary",small:"",disabled:t.dish.id===t.result.dish_id},on:{click:t.setDish}},[t._v("\n                                            Выбрать\n                                        ")])],1):t._e()],1),t._v(" "),t.dish&&t.result?i("div",t._l(t.dish.ingredients,(function(e,n){return i("v-sheet",{key:e.id,staticClass:"pa-3 mb-3 flex justify-center",attrs:{elevation:"1",color:t.blacklist.includes(e.id)?"red lighten-3":""}},[i("div",{staticClass:"flex flex-row"},[i("p",{class:t.hasResultIncludeIngredient(e.id)?"":"text-decoration-line-through"},[t._v("\n                                                "+t._s(n+1)+". "+t._s(e.name)+"\n                                            ")]),t._v(" "),t.hasAnalog(e.id)?i("span",[t._v("\n                                                    "+t._s(t.getAnalogName(e.id))+"\n                                                ")]):t._e()]),t._v(" "),t.dish.id===t.result.dish_id?i("div",{staticClass:"mt-2"},[t.hasAnalog(e.id)?t._e():i("v-btn",{class:t.hasResultIncludeIngredient(e.id)?"red white&#45;&#45;text":"green",attrs:{"x-small":""},on:{click:function(i){t.hasResultIncludeIngredient(e.id)?t.removeIngredient(e.id):t.addIngredient(e.id)}}},[t._v("\n                                                "+t._s(t.hasResultIncludeIngredient(e.id)?"Убрать":"Вернуть")+"\n                                            ")]),t._v(" "),t.hasResultIncludeIngredient(e.id)||t.hasAnalog(e.id)?i("v-btn",{staticClass:"ml-2",attrs:{"x-small":""},on:{click:function(i){t.hasAnalog(e.id)?t.returnIngredient(e.id):t.showAnalogs(e.id)}}},[t._v("\n                                                "+t._s(t.hasAnalog(e.id)?"Отменить замену":"Замена")+"\n                                            ")]):t._e()],1):t._e()])})),1):t._e()],1)],1)],1)],1):t._e()],1)],1)],1)}),[],!1,null,null,null).exports},data:function(){return{amo_loading:!1,orders:[],order:{},select_stat:[],itemsPerPage:300,search:"",headers:[{text:"#",value:"index"},{text:"Имя",value:"name"},{text:"Тэг",value:"tag"}],loading:!0,select_loading:!1,dialog:!1,dialog2:!1,dialog3:!1,ingredients:[],categories:[],dishes:[],dish:{},rations:[],select_previous:[],select_result:[],previous:{},result:{},blacklist:[],mix:[],wishlist:[],wish_ids:[],tag:"",tags:[],cuisine:{},ration:{},applied_categories:[],ration_id:null,ingredient_categories:[],chosen_category:{},chosen_ingredient:{},target_ingredient:null,errors:[],r1_val:null,r2_val:null}},created:function(){this.getOrders(),this.getCuisine(),this.getCategories(),this.getIngredients(),this.getRations()},computed:{isDutyDishId:function(){return this.dishes[0].id===this.dish.id}},methods:{fetchOrdersFromAmo:function(){var t=this;return f(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.amo_loading=!0,e.next=3,a().get("/api/orders/eat-fit").then((function(){t.getOrders()})).catch((function(e){t.$store.dispatch("showAlert",{isVisible:!0,msg:e.message,color:"error",type:"error"})})).finally((function(){return t.amo_loading=!1}));case 3:case"end":return e.stop()}}),e)})))()},getOrders:function(){var t=this;return f(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,a().get("/api/orders/select").then((function(e){t.orders=e.data.orders,t.select_stat=e.data.stat})).catch((function(e){t.loading=!1,t.$store.dispatch("showAlert",{isVisible:!0,msg:e.message,color:"error",type:"error"})})).finally((function(){return t.loading=!1}));case 3:case"end":return e.stop()}}),e)})))()},getIngredients:function(){var t=this;return f(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("/api/ingredients").then((function(e){t.ingredients=e.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},getCategories:function(){var t=this;return f(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("/api/categories").then((function(e){t.categories=e.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},getRations:function(){var t=this;return f(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("/api/rations/required").then((function(e){t.rations=e.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},getCuisine:function(){var t=this;return f(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("/api/cuisine/duty").then((function(e){t.cuisine=e.data})).catch((function(e){t.loading=!1,t.$store.dispatch("showAlert",{isVisible:!0,msg:e.message,color:"error",type:"error"})}));case 2:case"end":return e.stop()}}),e)})))()},showOrderDetails:function(t){this.order=t,this.getSelectDetailsByOrder(t.id)},getSelectDetailsByOrder:function(t){var e=this;return f(s().mark((function i(){return s().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return e.select_loading=!0,i.next=3,a().get("/api/select/order/"+t).then((function(t){e.select_previous=t.data.previous,e.select_result=t.data.result,e.blacklist=t.data.blacklist,e.mix=t.data.blacklist,e.wishlist=t.data.wishlist,e.select_loading=!1})).catch((function(t){console.log(t)}));case 3:case"end":return i.stop()}}),i)})))()},openSettings:function(t){var e,i;this.ration=t,this.ration_id=t.iiko_id,this.previous=null!==(e=this.select_previous.find((function(e){return e.ration.id===t.id})))&&void 0!==e?e:{},this.result=null!==(i=this.select_result.find((function(e){return e.ration.id===t.id})))&&void 0!==i?i:{},this.wish_ids=this.result.wishes,this.getDishesByRation(this.ration.iiko_id),this.dialog=!0},activateDeactivate:function(t){var e=this;a().post("/api/select/activate-deactivate",{select_id:t}).then((function(t){e.getSelectDetailsByOrder(e.order.id)})).catch((function(t){console.log(t)}))},applyCategories:function(){var t=this,e=this.applied_categories.map((function(e){return t.categories.find((function(t){return t.id===e})).ingredient_ids}));e=(e=e.flat()).concat(this.blacklist),this.mix=h(new Set(e))},removeIngredientFromBlacklist:function(t){this.mix=this.mix.filter((function(e){return e!==t}))},saveBlacklist:function(){var t=this;a().post("/api/blacklist",{id:this.order.id,blacklist:this.mix}).then((function(e){t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:"green",type:"success"})})).catch((function(e){console.log(e),t.errors=e.response.data.errors}))},addTag:function(){var t=this;a().post("/api/wishlist",{id:this.order.id,tag:this.tag}).then((function(e){t.getSelectDetailsByOrder(t.order.id),t.tag="",t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:e.data.status?"green":"error",type:e.data.status?"success":"error"}),t.errors=[]})).catch((function(e){t.errors=e.response.data.errors}))},removeTag:function(t){var e=this;a().post("/api/wishlist/remove",{id:this.order.id,tag:t.wish}).then((function(i){e.wishlist=e.wishlist.filter((function(e){return e!==t})),e.getSelectDetailsByOrder(e.order.id),e.$store.dispatch("showAlert",{isVisible:!0,msg:i.data.msg,color:i.data.status?"green":"error",type:i.data.status?"success":"error"})})).catch((function(t){console.log(t),e.errors=t.response.data.errors}))},addWishToSelect:function(t){var e=this;0!==Object.keys(this.result).length&&a().post("/api/select/wish",{s_id:this.result.id,w_id:t}).then((function(t){e.wish_ids=t.data.data,e.getSelectDetailsByOrder(e.order.id)})).catch((function(t){e.errors=t.response.data.errors}))},hasResultIncludeIngredient:function(t){if(this.result.ingredient_ids)return this.result.ingredient_ids.includes(t)},getDishesByRation:function(t){var e=this;return f(s().mark((function i(){return s().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,a().get("/api/dishes/ration/"+t).then((function(t){e.dishes=t.data,e.dishes.length>0?(e.dish=e.dishes.find((function(t){return t.id===e.result.dish_id})),e.dish||(e.dish=e.dishes[0])):e.dish.ingredients=[]})).catch((function(t){console.log(t)}));case 2:case"end":return i.stop()}}),i)})))()},setDish:function(){var t=this;a().post("/api/select/add/dish",{select_id:this.result.id,ration_id:this.ration_id,dish_id:this.dish.id}).then((function(e){e.data.status||t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:"error",type:"error"}),t.result=e.data.data,t.getSelectDetailsByOrder(t.order.id)})).catch((function(t){console.log(t)}))},getAnalogName:function(t){return this.result.ingredients.find((function(e){return e.pivot.analog_id===t})).name},hasAnalog:function(t){if(this.result.ingredient_ids)return this.result.ingredients.findIndex((function(e){return e.pivot.analog_id===t}))>=0},addIngredient:function(t){var e=this;a().post("/api/select/add/ingredient",{select_id:this.result.id,ingredient_id:t}).then((function(t){t.data.status||e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:"error",type:"error"}),e.result=t.data.data,e.getSelectDetailsByOrder(e.order.id)})).catch((function(t){console.log(t)}))},removeIngredient:function(t){var e=this;a().post("/api/select/remove/ingredient",{select_id:this.result.id,ingredient_id:t}).then((function(t){t.data.status||e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:"error",type:"error"}),e.result=t.data.data,e.getSelectDetailsByOrder(e.order.id)})).catch((function(t){console.log(t)}))},showAnalogs:function(t){this.getCategoriesByIngredient(t),this.target_ingredient=t,this.dialog2=!0},getAnalogId:function(t){return this.result.ingredients.find((function(e){return e.pivot.analog_id===t})).id},replaceIngredient:function(t){var e=this;a().post("/api/select/replace/ingredient",{select_id:this.result.id,ingredient_id:this.target_ingredient,analog_id:t}).then((function(t){t.data.status&&(e.result=t.data.select,e.getSelectDetailsByOrder(e.order.id),e.closeDialog2())})).catch((function(t){console.log(t)}))},returnIngredient:function(t){var e=this;a().post("/api/select/return/ingredient",{select_id:this.result.id,ingredient_id:t,analog_id:this.getAnalogId(t)}).then((function(t){t.data.status&&(e.result=t.data.select,e.getSelectDetailsByOrder(e.order.id))})).catch((function(t){console.log(t)}))},getCategoriesByIngredient:function(t){var e=this;return f(s().mark((function i(){return s().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,a().get("/api/categories/ingredient/"+t).then((function(t){e.ingredient_categories=t.data})).catch((function(t){console.log(t)}));case 2:case"end":return i.stop()}}),i)})))()},getSelectColor:function(t){if(this.select_result.length>0){var e=this.select_result.find((function(e){return e.ration_id===t}));return e?e.color:""}return""},isActive:function(t){if(this.select_result.length>0){var e=this.select_result.find((function(e){return e.ration_id===t}));return!e||e.is_active}return!0},getSelectName:function(t){if(this.select_result.length>0){var e=this.select_result.find((function(e){return e.ration_id===t}));return e?e.dish_name:""}return""},closeDialog:function(){this.dish={},this.dialog=!1,this.getSelectDetailsByOrder(this.order.id)},closeDialog2:function(){this.ingredient_categories=[],this.chosen_category={},this.chosen_ingredient={},this.target_ingredient=null,this.r1_val=null,this.dialog2=!1},saveDetails:function(){var t=this;a().post("/api/select/add/details",this.result).then((function(e){t.result=e.data.data,t.dialog3=!1})).catch((function(t){console.log(t)}))},exportExcel:function(){},r1:function(){this.replaceIngredient(this.r1_val)},addExtra:function(t){var e=this;t&&a().post("/api/select/add/extra",{select_id:this.result.id,ingredient_id:t}).then((function(t){e.result=t.data.data,e.getSelectDetailsByOrder(e.order.id),e.r2_val=null})).catch((function(t){console.log(t)}))},removeExtra:function(t){var e=this;a().post("/api/select/remove/extra",{select_id:this.result.id,ingredient_id:t}).then((function(t){e.result=t.data.data,e.getSelectDetailsByOrder(e.order.id)})).catch((function(t){console.log(t)}))},showIngredient:function(t){var e=this;a().post("/api/select/show/ingredient",{select_id:this.result.id,ingredient_id:t}).then((function(t){e.result=t.data.data})).catch((function(t){console.log(t)}))},hideIngredient:function(t){var e=this;a().post("/api/select/hide/ingredient",{select_id:this.result.id,ingredient_id:t}).then((function(t){e.result=t.data.data})).catch((function(t){console.log(t)}))}}};const p=(0,v.Z)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-row",[i("v-col",[i("v-btn",{staticClass:"ma-3",attrs:{loading:t.amo_loading,disabled:t.amo_loading,color:"primary"},on:{click:t.fetchOrdersFromAmo}},[t._v("\n                    Получить данные с AMOCRM\n                ")]),t._v(" "),i("a",{attrs:{type:"button",href:"/api/select/export"}},[i("v-btn",{staticClass:"my-3 mr-7",attrs:{color:"primary"},on:{click:t.exportExcel}},[t._v("\n                        Excel\n                    ")])],1),t._v(" "),i("v-chip",{staticClass:"ma-2",attrs:{color:"teal","text-color":"white",label:""}},[t._v("\n                    Итого: "+t._s(t.select_stat.total)+"\n                ")]),t._v(" "),i("v-chip",{staticClass:"ma-2",attrs:{label:""}},[t._v("\n                    XS: "+t._s(t.select_stat.xs)+"\n                ")]),t._v(" "),i("v-chip",{staticClass:"ma-2",attrs:{label:""}},[t._v("\n                    S: "+t._s(t.select_stat.s)+"\n                ")]),t._v(" "),i("v-chip",{staticClass:"ma-2",attrs:{label:""}},[t._v("\n                    M: "+t._s(t.select_stat.m)+"\n                ")]),t._v(" "),i("v-chip",{staticClass:"ma-2",attrs:{label:""}},[t._v("\n                    L: "+t._s(t.select_stat.l)+"\n                ")]),t._v(" "),i("v-chip",{staticClass:"ma-2",attrs:{label:""}},[t._v("\n                    XL: "+t._s(t.select_stat.xl)+"\n                ")])],1)],1),t._v(" "),i("v-row",[i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-card",[i("v-card-title",[i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Поиск","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),i("v-data-table",{attrs:{height:"90vh",loading:t.loading,"loading-text":"Loading... Please wait",headers:t.headers,items:t.orders,"items-per-page":t.itemsPerPage,"item-key":"id",search:t.search,"hide-default-footer":""},on:{"click:row":t.showOrderDetails},scopedSlots:t._u([{key:"item.index",fn:function(e){var i=e.index;return[t._v("\n                            "+t._s(i+1)+"\n                        ")]}}])})],1)],1),t._v(" "),Object.keys(t.order).length>0?i("v-col",[i("h3",{staticClass:"mb-3"},[t._v(t._s(t.order.name))]),t._v(" "),i("v-row",t._l(t.select_result,(function(e,n){return i("v-col",{key:n,attrs:{cols:"12",md:"4"}},[i("v-card",{attrs:{color:e.color,loading:t.select_loading}},[i("v-card-title",[t._v(t._s(e.ration.name))]),t._v(" "),i("v-card-subtitle",[t._v(t._s(e.dish_name))]),t._v(" "),i("v-card-actions",[e.is_active?i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(i){return t.openSettings(e.ration)}}},[t._v("\n                                    настроить\n                                ")]):t._e(),t._v(" "),i("v-btn",{attrs:{color:"black",text:""},on:{click:function(i){return t.activateDeactivate(e.id)}}},[t._v("\n                                    "+t._s(e.is_active?"Убрать":"Вернуть")+"\n                                ")])],1)],1)],1)})),1)],1):t._e()],1),t._v(" "),i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-toolbar",{attrs:{dark:"",color:"primary"}},[i("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[i("v-icon",[t._v("mdi-close")])],1),t._v(" "),i("v-toolbar-title",[t._v("Диета - "+t._s(t.ration.name))]),t._v(" "),i("v-spacer")],1),t._v(" "),i("v-card-title",[t._v(t._s(t.order.name)+" - "+t._s(t.order.tag))]),t._v(" "),t.order?i("v-card-text",[i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",lg:"4   "}},[t.order.diet?i("v-card",{staticClass:"mb-4",attrs:{color:"lime lighten-4"}},[i("v-card-text",[t._v("\n                                            "+t._s(t.order.diet)+"\n                                        ")])],1):t._e()],1),t._v(" "),i("v-col",{attrs:{cols:"12",sm:"12",lg:"4   "}},[t.order.diet_old?i("v-card",{attrs:{color:"red lighten-4"}},[i("v-card-text",[t._v("\n                                            "+t._s(t.order.diet_old)+"\n                                        ")])],1):t._e()],1)],1),t._v(" "),i("v-divider",{staticClass:"my-8"}),t._v(" "),i("h3",{staticClass:"mb-5"},[t._v("Черный список")]),t._v(" "),i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",lg:"4"}},[i("v-autocomplete",{attrs:{items:t.categories,"item-text":"name","item-value":"id",clearable:"",outlined:"",label:"Категории",multiple:""},on:{change:t.applyCategories},model:{value:t.applied_categories,callback:function(e){t.applied_categories=e},expression:"applied_categories"}})],1),t._v(" "),i("v-col",{attrs:{cols:"12",sm:"12",lg:"8"}},[i("v-autocomplete",{attrs:{items:t.ingredients,"item-text":"name","item-value":"id",clearable:"",outlined:"","small-chips":"",label:"Ингредиенты",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[i("v-chip",t._b({attrs:{small:"","input-value":e.selected,close:""},on:{click:e.select,"click:close":function(i){return t.removeIngredientFromBlacklist(e.item.id)}}},"v-chip",e.attrs,!1),[t._v("\n                                                "+t._s(e.item.name)+"\n                                            ")])]}}],null,!1,222228305),model:{value:t.mix,callback:function(e){t.mix=e},expression:"mix"}}),t._v(" "),i("v-btn",{attrs:{dark:""},on:{click:t.saveBlacklist}},[t._v("\n                                        Сохранить\n                                    ")])],1)],1),t._v(" "),i("h3",{staticClass:"my-5"},[t._v("Зеленый список")]),t._v(" "),i("v-row",{staticClass:"mb-4"},[i("v-col",{attrs:{sm:"12",lg:"4"}},[i("v-text-field",{attrs:{clearable:"",label:"Тэг",outlined:"","error-messages":t.errors.tag},model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}}),t._v(" "),i("v-btn",{attrs:{color:"primary"},on:{click:t.addTag}},[t._v("\n                                        Добавить\n                                    ")])],1),t._v(" "),i("v-col",{attrs:{sm:"12",lg:"8"}},t._l(t.wishlist,(function(e){return i("v-chip",{key:e.wish,staticClass:"ma-2",attrs:{color:t.wish_ids.includes(e.id)?"lime":"",close:""},on:{click:function(i){return t.addWishToSelect(e.id)},"click:close":function(i){return t.removeTag(e)}}},[t._v("\n                                        "+t._s(e.wish)+"\n                                    ")])})),1)],1),t._v(" "),i("v-divider",{staticClass:"my-6"}),t._v(" "),i("h2",{staticClass:"mb-6"},[t._v(t._s(t.cuisine.name)+" - "+t._s(t.ration.name))]),t._v(" "),i("v-row",{staticClass:"py-3"},[Object.keys(t.previous).length>0?i("v-col",{attrs:{cols:"3"}},[i("h4",[t._v(t._s(t.previous.created_at))]),t._v(" "),i("span",[t._v(t._s(t.previous.cuisine))]),t._v(" "),t.previous.dish_name?i("v-card",{staticClass:"mb-5 mt-3",attrs:{color:"blue-grey lighten-5"}},[i("v-card-title",[t._v(t._s(t.previous.dish_name))]),t._v(" "),i("v-card-subtitle",[t._v(t._s(t.previous.description))])],1):t._e(),t._v(" "),i("v-list",{attrs:{dense:""}},t._l(t.previous.ingredients,(function(e,n){return i("v-list-item",{key:n,class:t.hasResultIncludeIngredient(e.id)?"yellow lighten-3":""},[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(n+1)+". "+t._s(e.name))])],1)],1)})),1)],1):t._e(),t._v(" "),i("v-col",{attrs:{cols:"5"}},[i("h4",[t._v("Сегодня")]),t._v(" "),i("span",[t._v(t._s(t.cuisine.name))]),t._v(" "),i("v-row",{staticClass:"mt-2"},[i("v-col",{attrs:{cols:"3"}},[i("v-select",{attrs:{items:t.rations,dense:"","item-text":"name","item-value":"iiko_id",outlined:"",label:"Рационы"},on:{change:function(e){return t.getDishesByRation(t.ration_id)}},model:{value:t.ration_id,callback:function(e){t.ration_id=e},expression:"ration_id"}})],1),t._v(" "),t.dish?i("v-col",{attrs:{cols:"6"}},[i("v-select",{attrs:{dense:"",items:t.dishes,"item-text":"name","return-object":"",outlined:"",label:"Блюда"},model:{value:t.dish,callback:function(e){t.dish=e},expression:"dish"}})],1):t._e(),t._v(" "),t.dish?i("v-col",{attrs:{cols:"3"}},[i("v-btn",{attrs:{color:"primary",small:"",disabled:t.dish.id===t.result.dish_id},on:{click:t.setDish}},[t._v("\n                                                Выбрать\n                                            ")])],1):t._e()],1),t._v(" "),t.dish&&t.result?i("div",t._l(t.dish.ingredients,(function(e,n){return i("v-sheet",{key:e.id,staticClass:"pa-3 mb-3 flex justify-center",attrs:{elevation:"1",color:t.mix.includes(e.id)?"red lighten-3":""}},[i("div",{staticClass:"flex flex-row"},[i("p",{class:t.hasResultIncludeIngredient(e.id)?"":"text-decoration-line-through"},[t._v("\n                                                    "+t._s(n+1)+". "+t._s(e.name)+"\n                                                ")]),t._v(" "),t.hasAnalog(e.id)?i("span",[t._v("\n                                                    "+t._s(t.getAnalogName(e.id))+"\n                                                ")]):t._e()]),t._v(" "),t.dish.id===t.result.dish_id?i("div",{staticClass:"mt-2"},[t.hasAnalog(e.id)?t._e():i("v-btn",{class:t.hasResultIncludeIngredient(e.id)?"red white--text":"green",attrs:{"x-small":""},on:{click:function(i){t.hasResultIncludeIngredient(e.id)?t.removeIngredient(e.id):t.addIngredient(e.id)}}},[t._v("\n                                                    "+t._s(t.hasResultIncludeIngredient(e.id)?"Убрать":"Вернуть")+"\n                                                ")]),t._v(" "),t.isDutyDishId?t._e():i("v-btn",{staticClass:"ml-2",attrs:{"x-small":""},on:{click:function(i){t.hasAnalog(e.id)?t.returnIngredient(e.id):t.showAnalogs(e.id)}}},[t._v("\n                                                    "+t._s(t.hasAnalog(e.id)?"Отменить замену":"Замена")+"\n                                                ")])],1):t._e()])})),1):t._e()],1),t._v(" "),i("v-col",{attrs:{cols:"4"}},[i("h4",[t._v("Итог")]),t._v(" "),i("span",[t._v(t._s(t.cuisine.name))]),t._v(" "),Object.keys(t.result).length>0?i("div",[i("v-card",{staticClass:"mb-5 mt-3",attrs:{color:"blue-grey lighten-3"}},[i("v-card-title",[t._v(t._s(t.result.dish_name))]),t._v(" "),i("v-card-subtitle",[t._v(t._s(t.result.description))]),t._v(" "),i("v-card-actions",[i("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog3=!0}}},[t._v("\n                                                    редактировать\n                                                ")])],1)],1),t._v(" "),2===t.result.status?i("v-autocomplete",{attrs:{items:t.ingredients,"item-text":"name","item-value":"id",clearable:"",outlined:"",label:"Добавить ингредиент"},on:{change:t.addExtra},model:{value:t.r2_val,callback:function(e){t.r2_val=e},expression:"r2_val"}}):t._e(),t._v(" "),t._l(t.result.ingredients,(function(e,n){return i("v-sheet",{key:n,staticClass:"pa-3 mb-3",attrs:{elevation:"1",color:t.mix.includes(e.id)?"red lighten-3":""}},[i("v-row",[e.pivot.is_visible?i("v-col",{attrs:{cols:"1"}},[i("v-icon",{attrs:{left:""}},[t._v("\n                                                        mdi-checkbox-marked-circle\n                                                    ")])],1):t._e(),t._v(" "),i("v-col",[t._v("\n                                                    "+t._s(n+1)+". "+t._s(e.name)+"\n                                                ")])],1),t._v(" "),i("v-row",[e.pivot.editable?i("v-col",[i("v-btn",{attrs:{"x-small":""},on:{click:function(i){return t.removeExtra(e.id)}}},[t._v("убрать")])],1):t._e()],1)],1)}))],2):t._e()])],1)],1)],1):t._e()],1)],1)],1),t._v(" "),i("v-dialog",{attrs:{scrollable:"",persistent:"","max-width":"800px"},model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[i("v-card",[i("v-card-title",[t._v("\n                    Замена\n                ")]),t._v(" "),i("v-card-text",{staticStyle:{height:"400px"}},[i("v-row",{staticClass:"mt-3"},[i("v-col",{attrs:{cols:"12",md:"4"}},[t.ingredient_categories.length>0?i("v-select",{attrs:{items:t.ingredient_categories,label:"Категории","item-text":"name","return-object":"",outlined:"",clearable:""},model:{value:t.chosen_category,callback:function(e){t.chosen_category=e},expression:"chosen_category"}}):t._e(),t._v(" "),i("v-autocomplete",{attrs:{items:t.ingredients,"item-text":"name","item-value":"id",clearable:"",outlined:"",label:"Ингредиенты"},on:{change:t.r1},model:{value:t.r1_val,callback:function(e){t.r1_val=e},expression:"r1_val"}})],1),t._v(" "),t.chosen_category?i("v-col",t._l(t.chosen_category.ingredients,(function(e,n){return i("v-sheet",{key:n,staticClass:"pa-3 mb-3 flex justify-center",class:t.mix.includes(e.id)?"red lighten-3":"",attrs:{elevation:"1"}},[i("p",[t._v("\n                                    "+t._s(n+1)+". "+t._s(e.name)+"\n                                ")]),t._v(" "),i("div",{staticClass:"mt-2"},[i("v-btn",{attrs:{"x-small":""},on:{click:function(i){return t.replaceIngredient(e.id)}}},[t._v("\n                                        выбрать\n                                    ")])],1)])})),1):t._e()],1)],1),t._v(" "),i("v-card-actions",[i("v-btn",{attrs:{color:"primary",text:""},on:{click:t.closeDialog2}},[t._v("\n                        Закрыть\n                    ")])],1)],1)],1),t._v(" "),i("v-dialog",{attrs:{"max-width":"700px"},model:{value:t.dialog3,callback:function(e){t.dialog3=e},expression:"dialog3"}},[i("v-card",[i("v-card-title",[t._v("\n                    Редактировать\n                ")]),t._v(" "),i("v-card-text",[i("v-text-field",{attrs:{clearable:"",outlined:"",label:"Название"},model:{value:t.result.dish_name,callback:function(e){t.$set(t.result,"dish_name",e)},expression:"result.dish_name"}}),t._v(" "),i("v-textarea",{attrs:{outlined:"",clearable:"",label:"Дополнительная информация"},model:{value:t.result.description,callback:function(e){t.$set(t.result,"description",e)},expression:"result.description"}})],1),t._v(" "),i("v-card-actions",[i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog3=!1}}},[t._v("\n                        Закрыть\n                    ")]),t._v(" "),i("v-btn",{attrs:{color:"primary",text:""},on:{click:t.saveDetails}},[t._v("\n                        Сохранить\n                    ")])],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);