"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[250],{8250:(t,e,i)=>{i.r(e),i.d(e,{default:()=>c});var n=i(7757),s=i.n(n);function r(t,e,i,n,s,r,a){try{var o=t[r](a),c=o.value}catch(t){return void i(t)}o.done?e(c):Promise.resolve(c).then(n,s)}function a(t){return function(){var e=this,i=arguments;return new Promise((function(n,s){var a=t.apply(e,i);function o(t){r(a,n,s,o,c,"next",t)}function c(t){r(a,n,s,o,c,"throw",t)}o(void 0)}))}}const o={name:"CuisineDishes",props:["id"],data:function(){return{ingredients:[],departments:[],left_rations:[],all_rations:[],cuisine:{},dish:{name:"",cuisine_id:0,ration_id:0,code:"",department_id:0,ingredients:[],is_custom:!1},dishes:[],btn_loading:!1,loading:!1,disabled:!1,dialog:!1,errors:[]}},mounted:function(){this.getCuisine(),this.getIngredients(),this.getDepartments(),this.getAllRations()},methods:{getCuisine:function(){var t=this;return a(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/cuisines/"+t.id).then((function(e){t.cuisine=e.data.data,t.dishes=t.cuisine.dishes,t.dish=t.dishes[0],t.left_rations=t.cuisine.left_rations})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},getIngredients:function(){var t=this;return a(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/ingredients").then((function(e){t.ingredients=e.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},getDepartments:function(){var t=this;return a(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/departments").then((function(e){t.departments=e.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},getAllRations:function(){var t=this;return a(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/rations/required").then((function(e){t.all_rations=e.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},fetchCuisines:function(){var t=this;return a(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.btn_loading=!0,t.disabled=!0,e.next=4,axios.get("/api/cuisines/iiko").then((function(e){t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:e.data.status?"green":"error",type:e.data.status?"success":"error"}),t.getCuisine()})).catch((function(t){console.log(t)})).finally((function(){t.btn_loading=!1,t.disabled=!1}));case 4:case"end":return e.stop()}}),e)})))()},fetchDishesByCuisineId:function(t){var e=this;return a(s().mark((function i(){return s().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return e.btn_loading=!0,e.disabled=!0,i.next=4,axios.get("/api/cuisines/"+t+"/dishes/iiko").then((function(t){e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:t.data.status?"green":"error",type:t.data.status?"success":"error"}),e.getCuisines()})).catch((function(t){console.log(t)})).finally((function(){e.btn_loading=!1,e.disabled=!1}));case 4:case"end":return i.stop()}}),i)})))()},fetchIngredients:function(t){var e=this;return a(s().mark((function i(){return s().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return e.disabled=!0,e.loading=!0,i.next=4,axios.get("/api/ingredients/iiko/"+t).then((function(t){e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:t.status?"green":"error",type:t.status?"success":"error"}),location.reload()})).catch((function(t){console.log(t)})).finally((function(){e.disabled=!1,e.loading=!1}));case 4:case"end":return i.stop()}}),i)})))()},setCuisine:function(t){var e=this;return a(s().mark((function i(){return s().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,axios.post("/api/cuisine/duty",{id:t}).then((function(t){e.cuisine=t.data,e.getCuisine(),e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.name,color:"green",type:"success"})})).catch((function(t){console.log(t)}));case 2:case"end":return i.stop()}}),i)})))()},setDish:function(t){this.dish=t},close:function(){this.dialog=!1,this.dish={id:null,name:"",cuisine_id:0,ration_id:0,code:"",department_id:null,ingredients:[],is_custom:!1}},editDish:function(t){this.dish=t,this.dialog=!0},save:function(){null===this.dish.id?this.create():this.update()},update:function(){var t=this;axios.patch("/api/dishes/"+this.dish.id,this.dish).then((function(e){t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:"green",type:"success"}),e.data.status?(t.dialog=!1,t.getCuisine()):t.errors=e.data.errors})).catch((function(e){console.log(e),t.errors=e.response.data.errors}))},create:function(){var t=this;axios.post("/api/dishes",this.dish).then((function(e){t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:"green",type:"success"}),e.data.status?(t.dialog=!1,t.getCuisine()):t.errors=e.data.errors})).catch((function(e){console.log(e),t.errors=e.response.data.errors}))},addDish:function(t){this.dish={id:null,name:"",cuisine_id:this.cuisine.id,ration_id:t.iiko_id,code:"",department_id:0,ingredients:[],is_custom:!1,ration:t},this.dialog=!0}}};const c=(0,i(1900).Z)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-row",[i("v-col",[i("v-btn",{on:{click:function(e){return t.$router.back()}}},[t._v("\n                Назад к кухням мира\n            ")])],1)],1),t._v(" "),0!==Object.keys(t.cuisine).length?i("v-row",[i("v-col",{attrs:{sm:"12",md:"6"}},[i("v-card",{attrs:{color:t.cuisine.duty?"light-green lighten-3":"grey lighten-3",disabled:t.disabled,loading:t.disabled}},[i("v-card-title",[t._v(t._s(t.cuisine.name))]),t._v(" "),i("v-card-actions",[i("v-btn",{attrs:{text:""},on:{click:function(e){return t.setCuisine(t.cuisine.id)}}},[i("v-icon",{attrs:{dark:"",left:""}},[t._v("\n                            mdi-checkbox-marked-circle\n                        ")]),t._v("\n                        Назначить\n                    ")],1),t._v(" "),i("v-btn",{attrs:{text:""},on:{click:function(e){return t.fetchDishesByCuisineId(t.cuisine.id)}}},[i("v-icon",{attrs:{dark:"",left:""}},[t._v("\n                            mdi-refresh\n                        ")]),t._v("\n                        Блюда\n                    ")],1),t._v(" "),i("v-btn",{attrs:{text:""},on:{click:function(e){return t.fetchIngredients(t.cuisine.id)}}},[i("v-icon",{attrs:{dark:"",left:""}},[t._v("\n                            mdi-refresh\n                        ")]),t._v("\n                        Ингредиенты\n                    ")],1)],1)],1),t._v(" "),i("v-card",{staticClass:"mt-4",attrs:{disabled:t.disabled,loading:t.loading}},[t.cuisine?i("v-list",t._l(t.dishes,(function(e,n){return i("v-list-item",{key:e.id,on:{click:function(i){return t.setDish(e)}}},[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(n+1)+". "+t._s(e.name))]),t._v(" "),e.ration?i("v-list-item-subtitle",[i("span",{staticClass:"font-weight-bold"},[t._v("["+t._s(e.ration.name)+"] "+t._s(e.i_name))])]):t._e()],1),t._v(" "),i("v-list-item-action",[i("v-btn",{attrs:{icon:""},on:{click:function(i){return t.editDish(e)}}},[i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-pencil")])],1)],1)],1)})),1):t._e()],1),t._v(" "),t._l(t.left_rations,(function(e){return i("v-card",{key:e.id,staticClass:"mt-4"},[i("v-card-title",[t._v(t._s(e.name))]),t._v(" "),i("v-card-actions",[i("v-btn",{attrs:{text:"",rounded:"",outlined:""},on:{click:function(i){return t.addDish(e)}}},[t._v("\n                        Добавить\n                    ")])],1)],1)}))],2),t._v(" "),i("v-col",{attrs:{sm:"12",md:"6"}},[t.dish?i("v-card",{attrs:{disabled:t.disabled,loading:t.loading}},[i("v-card-title",[t._v(t._s(t.dish.name))])],1):t._e(),t._v(" "),t.dish?i("v-card",{staticClass:"mt-4",attrs:{disabled:t.disabled,loading:t.loading}},[i("v-list",t._l(t.dish.ingredients,(function(e,n){return i("v-list-item",{key:e.id},[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(n+1)+". "+t._s(e.name))])],1)],1)})),1)],1):t._e()],1)],1):t._e(),t._v(" "),i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-toolbar",{attrs:{dark:"",color:"primary"}},[i("v-btn",{attrs:{icon:"",dark:""},on:{click:t.close}},[i("v-icon",[t._v("mdi-close")])],1),t._v(" "),i("v-toolbar-title",[t._v("Блюдо")])],1),t._v(" "),i("v-card-text",[i("v-container",{attrs:{fluid:""}},[t.dish?i("v-row",[t.dish.i_name?i("v-col",{attrs:{sm:"12",lg:"4"}},[i("h3",[t._v(t._s(t.dish.i_name))]),t._v(" "),t._l(t.dish.i_ingredients,(function(e,n){return i("v-list-item",{key:e.id,class:t.dish.ingredient_ids.includes(e.id)?"":"yellow lighten-3",attrs:{dense:""}},[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(n+1)+". "+t._s(e.name))])],1)],1)}))],2):t._e(),t._v(" "),i("v-col",{attrs:{sm:"12",lg:"8"}},[i("h2",{staticClass:"mb-5"},[t._v(t._s(t.dish.ration?t.dish.ration.name:""))]),t._v(" "),i("v-text-field",{attrs:{label:"Название","error-messages":t.errors.name,outlined:"",dense:"",clearable:""},model:{value:t.dish.name,callback:function(e){t.$set(t.dish,"name",e)},expression:"dish.name"}}),t._v(" "),i("v-text-field",{attrs:{label:"Код","error-messages":t.errors.code,outlined:"",dense:"",clearable:""},model:{value:t.dish.code,callback:function(e){t.$set(t.dish,"code",e)},expression:"dish.code"}}),t._v(" "),i("v-select",{attrs:{items:t.all_rations,dense:"","item-text":"name","item-value":"iiko_id",outlined:"",label:"Рационы"},model:{value:t.dish.ration_id,callback:function(e){t.$set(t.dish,"ration_id",e)},expression:"dish.ration_id"}}),t._v(" "),i("v-autocomplete",{attrs:{items:t.departments,"item-text":"name","item-value":"id",clearable:"",outlined:"",label:"Цех","error-messages":t.errors.department_id},model:{value:t.dish.department_id,callback:function(e){t.$set(t.dish,"department_id",e)},expression:"dish.department_id"}}),t._v(" "),i("v-autocomplete",{attrs:{items:t.ingredients,"item-text":"name","item-value":"id",clearable:"",outlined:"","small-chips":"",label:"Ингредиенты","error-messages":t.errors.ingredient_ids,multiple:""},model:{value:t.dish.ingredient_ids,callback:function(e){t.$set(t.dish,"ingredient_ids",e)},expression:"dish.ingredient_ids"}}),t._v(" "),i("v-btn",{attrs:{color:"primary"},on:{click:t.save}},[t._v("\n                                    Сохранить\n                                ")])],1)],1):t._e()],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);