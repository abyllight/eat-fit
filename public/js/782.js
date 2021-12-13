"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[782],{2952:(t,i,s)=>{s.r(i),s.d(i,{default:()=>c});var n=s(7757),e=s.n(n);function a(t,i,s,n,e,a,r){try{var o=t[a](r),c=o.value}catch(t){return void s(t)}o.done?i(c):Promise.resolve(c).then(n,e)}function r(t){return function(){var i=this,s=arguments;return new Promise((function(n,e){var r=t.apply(i,s);function o(t){a(r,n,e,o,c,"next",t)}function c(t){a(r,n,e,o,c,"throw",t)}o(void 0)}))}}const o={name:"Cuisine",data:function(){return{cuisines:[],cuisine:{},dish:{},btn_loading:!1,loading:!1,disabled:!1,dialog:!1,name:"",errors:[]}},created:function(){this.getCuisines()},methods:{getCuisines:function(){var t=this;axios.get("/api/cuisines").then((function(i){t.cuisines=i.data.data,t.cuisine=t.cuisines[0],t.dish=t.cuisine.dishes[0]})).catch((function(t){console.log(t)}))},fetchCuisines:function(){var t=this;return r(e().mark((function i(){return e().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t.btn_loading=!0,t.disabled=!0,i.next=4,axios.get("/api/iiko/cuisines").then((function(i){console.log(i),t.$store.dispatch("showAlert",{isVisible:!0,msg:i.data.msg,color:i.data.status?"green":"error",type:i.data.status?"success":"error"}),t.getCuisines()})).catch((function(t){console.log(t)})).finally((function(){t.btn_loading=!1,t.disabled=!1}));case 4:case"end":return i.stop()}}),i)})))()},fetchDishes:function(){var t=this;return r(e().mark((function i(){return e().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t.btn_loading=!0,t.disabled=!0,i.next=4,axios.get("/api/iiko/dishes").then((function(i){t.$store.dispatch("showAlert",{isVisible:!0,msg:i.data.msg,color:i.data.status?"green":"error",type:i.data.status?"success":"error"})})).catch((function(t){console.log(t)})).finally((function(){t.btn_loading=!1,t.disabled=!1}));case 4:case"end":return i.stop()}}),i)})))()},fetchIngredients:function(t){var i=this;return r(e().mark((function s(){return e().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return i.disabled=!0,i.loading=!0,s.next=4,axios.post("/api/iiko/ingredients",{id:t}).then((function(t){i.getCuisines(),i.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:t.status?"green":"error",type:t.status?"success":"error"})})).catch((function(t){console.log(t)})).finally((function(){i.disabled=!1,i.loading=!1}));case 4:case"end":return s.stop()}}),s)})))()},showDetails:function(t){this.disabled||(this.cuisine=t,this.dish=t.dishes[0])},setCuisine:function(t){var i=this;return r(e().mark((function s(){return e().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,axios.post("/api/cuisine/set",{id:t}).then((function(t){i.cuisine=t.data,i.getCuisines(),i.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.name,color:"green",type:"success"})})).catch((function(t){console.log(t)}));case 2:case"end":return s.stop()}}),s)})))()},setDish:function(t){this.dish=t},close:function(){this.dialog=!1,this.name=""},editDish:function(t){this.dish=t,this.dialog=!0,this.name=this.dish.name},saveDish:function(){var t=this;axios.post("/api/dish/update",{id:this.dish.id,name:this.name}).then((function(i){t.$store.dispatch("showAlert",{isVisible:!0,msg:i.data.msg,color:"green",type:"success"}),i.data.status?(t.dialog=!1,t.name="",t.getCuisines()):t.errors=i.data.errors})).catch((function(i){console.log(i),t.errors=i.response.data.errors}))}}};const c=(0,s(1900).Z)(o,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("v-row",[s("v-btn",{staticClass:"ma-3",attrs:{loading:t.btn_loading,disabled:t.disabled,color:"primary"},on:{click:t.fetchCuisines}},[t._v("\n                Получить Кухни\n            ")]),t._v(" "),s("v-btn",{staticClass:"ma-3",attrs:{loading:t.btn_loading,disabled:t.disabled,color:"primary"},on:{click:t.fetchDishes}},[t._v("\n                Получить Блюда\n            ")])],1),t._v(" "),s("v-row",[s("v-col",{attrs:{sm:"12",md:"2",lg:"2"}},[s("v-list",{attrs:{dense:""}},[s("v-subheader",[t._v("Кухни мира")]),t._v(" "),s("v-list-item-group",{attrs:{color:"primary"}},t._l(t.cuisines,(function(i,n){return s("v-list-item",{key:n,class:i.active?"light-green lighten-3":"",on:{click:function(s){return t.showDetails(i)}}},[s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(n+1)+". "+t._s(i.name))])],1)],1)})),1)],1)],1),t._v(" "),s("v-col",{attrs:{sm:"12",md:"10",lg:"6"}},[s("v-card",{attrs:{color:t.cuisine.active?"light-green lighten-3":"light-blue lighten-3",disabled:t.disabled,loading:t.disabled}},[s("v-card-title",[t._v(t._s(t.cuisine.name))]),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{text:""},on:{click:function(i){return t.fetchIngredients(t.cuisine.id)}}},[s("v-icon",{attrs:{dark:"",left:""}},[t._v("\n                                mdi-silverware\n                            ")]),t._v("\n                            Получить Ингредиенты\n                        ")],1),t._v(" "),s("v-btn",{attrs:{text:""},on:{click:function(i){return t.setCuisine(t.cuisine.id)}}},[s("v-icon",{attrs:{dark:"",left:""}},[t._v("\n                                mdi-checkbox-marked-circle\n                            ")]),t._v("\n                            Назначить\n                        ")],1)],1)],1),t._v(" "),s("v-card",{staticClass:"mt-4",attrs:{disabled:t.disabled,loading:t.loading}},[s("v-list",t._l(t.cuisine.dishes,(function(i,n){return s("v-list-item",{key:i.id,on:{click:function(s){return t.setDish(i)}}},[s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(n+1)+". "+t._s(i.name))]),t._v(" "),s("v-list-item-subtitle",[s("span",{staticClass:"font-weight-bold"},[t._v("["+t._s(i.ration)+"]")]),t._v(" "+t._s(i.i_name))])],1),t._v(" "),s("v-list-item-action",[s("v-btn",{attrs:{icon:""},on:{click:function(s){return t.editDish(i)}}},[s("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-pencil")])],1)],1)],1)})),1)],1)],1),t._v(" "),s("v-col",{attrs:{sm:"12",lg:"4"}},[s("v-card",{attrs:{disabled:t.disabled,loading:t.loading}},[s("v-card-title",[t._v(t._s(t.dish.name))])],1),t._v(" "),s("v-card",{staticClass:"mt-4",attrs:{disabled:t.disabled,loading:t.loading}},[s("v-list",t._l(t.dish.ingredients,(function(i,n){return s("v-list-item",{key:i.id},[s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(n+1)+". "+t._s(i.name))])],1)],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);