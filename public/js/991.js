"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[991],{991:(t,i,e)=>{e.r(i),e.d(i,{default:()=>c});var s=e(7757),n=e.n(s);function a(t,i,e,s,n,a,r){try{var o=t[a](r),c=o.value}catch(t){return void e(t)}o.done?i(c):Promise.resolve(c).then(s,n)}function r(t){return function(){var i=this,e=arguments;return new Promise((function(s,n){var r=t.apply(i,e);function o(t){a(r,s,n,o,c,"next",t)}function c(t){a(r,s,n,o,c,"throw",t)}o(void 0)}))}}const o={name:"Cuisine",data:function(){return{cuisines:[],cuisine:{},dish:{},btn_loading:!1,loading:!1,disabled:!1,dialog:!1,name:"",errors:[]}},mounted:function(){this.getCuisines()},methods:{getCuisines:function(){var t=this;axios.get("/api/cuisines").then((function(i){t.cuisines=i.data.data,0===Object.keys(t.cuisine).length?t.cuisine=t.cuisines[0]:t.cuisine=t.cuisines.find((function(i){return i.id===t.cuisine.id})),t.dish=t.cuisine.dishes[0]})).catch((function(t){console.log(t)}))},fetchCuisines:function(){var t=this;return r(n().mark((function i(){return n().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t.btn_loading=!0,t.disabled=!0,i.next=4,axios.get("/api/iiko/cuisines").then((function(i){console.log(i),t.$store.dispatch("showAlert",{isVisible:!0,msg:i.data.msg,color:i.data.status?"green":"error",type:i.data.status?"success":"error"}),t.getCuisines()})).catch((function(t){console.log(t)})).finally((function(){t.btn_loading=!1,t.disabled=!1}));case 4:case"end":return i.stop()}}),i)})))()},fetchDishes:function(){var t=this;return r(n().mark((function i(){return n().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t.btn_loading=!0,t.disabled=!0,i.next=4,axios.get("/api/iiko/dishes").then((function(i){t.$store.dispatch("showAlert",{isVisible:!0,msg:i.data.msg,color:i.data.status?"green":"error",type:i.data.status?"success":"error"})})).catch((function(t){console.log(t)})).finally((function(){t.btn_loading=!1,t.disabled=!1}));case 4:case"end":return i.stop()}}),i)})))()},fetchIngredients:function(t){var i=this;return r(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.disabled=!0,i.loading=!0,e.next=4,axios.post("/api/iiko/ingredients",{id:t}).then((function(t){i.getCuisines(),i.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:t.status?"green":"error",type:t.status?"success":"error"})})).catch((function(t){console.log(t)})).finally((function(){i.disabled=!1,i.loading=!1}));case 4:case"end":return e.stop()}}),e)})))()},showDetails:function(t){this.disabled||(this.cuisine=t,this.dish=t.dishes[0])},setCuisine:function(t){var i=this;return r(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.post("/api/cuisine/set",{id:t}).then((function(t){i.cuisine=t.data,i.getCuisines(),i.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.name,color:"green",type:"success"})})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},setDish:function(t){this.dish=t},close:function(){this.dialog=!1,this.name=""},editDish:function(t){this.dish=t,this.dialog=!0,this.name=this.dish.name},saveDish:function(){var t=this;axios.post("/api/dish/update",{id:this.dish.id,name:this.name}).then((function(i){t.$store.dispatch("showAlert",{isVisible:!0,msg:i.data.msg,color:"green",type:"success"}),i.data.status?(t.dialog=!1,t.name="",t.getCuisines()):t.errors=i.data.errors})).catch((function(i){console.log(i),t.errors=i.response.data.errors}))}}};const c=(0,e(1900).Z)(o,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("v-row",[e("v-btn",{staticClass:"ma-3",attrs:{loading:t.btn_loading,disabled:t.disabled,color:"primary"},on:{click:t.fetchCuisines}},[t._v("\n            Получить Кухни\n        ")]),t._v(" "),e("v-btn",{staticClass:"ma-3",attrs:{loading:t.btn_loading,disabled:t.disabled,color:"primary"},on:{click:t.fetchDishes}},[t._v("\n            Получить Блюда\n        ")])],1),t._v(" "),e("v-row",[e("v-col",{attrs:{sm:"12",md:"2"}},[e("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("\n                                #\n                            ")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("\n                                Name\n                            ")])])]),t._v(" "),e("tbody",t._l(t.cuisines,(function(i,s){return e("tr",{key:i.id,class:i.active?"light-green lighten-3":"",on:{click:function(e){return t.showDetails(i)}}},[e("td",[t._v(t._s(s+1))]),t._v(" "),e("td",[t._v(t._s(i.name))])])})),0)]},proxy:!0}])})],1),t._v(" "),e("v-col",{attrs:{sm:"12",md:"10",lg:"6"}},[e("v-card",{attrs:{color:t.cuisine.active?"light-green lighten-3":"light-blue lighten-3",disabled:t.disabled,loading:t.disabled}},[e("v-card-title",[t._v(t._s(t.cuisine.name))]),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{text:""},on:{click:function(i){return t.fetchIngredients(t.cuisine.id)}}},[e("v-icon",{attrs:{dark:"",left:""}},[t._v("\n                            mdi-silverware\n                        ")]),t._v("\n                        Получить Ингредиенты\n                    ")],1),t._v(" "),e("v-btn",{attrs:{text:""},on:{click:function(i){return t.setCuisine(t.cuisine.id)}}},[e("v-icon",{attrs:{dark:"",left:""}},[t._v("\n                            mdi-checkbox-marked-circle\n                        ")]),t._v("\n                        Назначить\n                    ")],1)],1)],1),t._v(" "),e("v-card",{staticClass:"mt-4",attrs:{disabled:t.disabled,loading:t.loading}},[e("v-list",t._l(t.cuisine.dishes,(function(i,s){return e("v-list-item",{key:i.id,on:{click:function(e){return t.setDish(i)}}},[e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(s+1)+". "+t._s(i.name))]),t._v(" "),e("v-list-item-subtitle",[e("span",{staticClass:"font-weight-bold"},[t._v("["+t._s(i.ration)+"]")]),t._v(" "+t._s(i.i_name))])],1),t._v(" "),e("v-list-item-action",[e("v-btn",{attrs:{icon:""},on:{click:function(e){return t.editDish(i)}}},[e("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-pencil")])],1)],1)],1)})),1)],1)],1),t._v(" "),e("v-col",{attrs:{sm:"12",lg:"4"}},[e("v-card",{attrs:{disabled:t.disabled,loading:t.loading}},[e("v-card-title",[t._v(t._s(t.dish.name))])],1),t._v(" "),e("v-card",{staticClass:"mt-4",attrs:{disabled:t.disabled,loading:t.loading}},[e("v-list",t._l(t.dish.ingredients,(function(i,s){return e("v-list-item",{key:i.id},[e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(s+1)+". "+t._s(i.name))])],1)],1)})),1)],1)],1)],1),t._v(" "),e("v-row",{attrs:{justify:"center"}},[e("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(i){t.dialog=i},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"text-h5"},[t._v("Редактировать")])]),t._v(" "),e("v-card-text",[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{label:"Название",required:"",clearable:"","error-messages":t.errors.name},model:{value:t.name,callback:function(i){t.name=i},expression:"name"}})],1)],1)],1)],1),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("\n                        Закрыть\n                    ")]),t._v(" "),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.saveDish}},[t._v("\n                        Сохранить\n                    ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);