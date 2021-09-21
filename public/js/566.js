"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[566],{5182:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var s=i(7757),n=i.n(s);function a(t,e,i,s,n,a,r){try{var o=t[a](r),l=o.value}catch(t){return void i(t)}o.done?e(l):Promise.resolve(l).then(s,n)}function r(t){return function(){var e=this,i=arguments;return new Promise((function(s,n){var r=t.apply(e,i);function o(t){a(r,s,n,o,l,"next",t)}function l(t){a(r,s,n,o,l,"throw",t)}o(void 0)}))}}const o={name:"CustomDishes",data:function(){return{dishes:[],dish:{name:"",time:0,description:"",ingredients:[]},ingredients:[],rations:[{id:1,name:"Завтрак 1"},{id:2,name:"Завтрак 2"},{id:3,name:"Обед суп"},{id:4,name:"Обед основной"},{id:8,name:"Обед гарнир"},{id:5,name:"Обед салат"},{id:6,name:"Полдник"},{id:7,name:"Ужин основной"},{id:9,name:"Ужин овощи"}],dish_ings:[],errors:[],edit:-1,dialog:!1,dialogDelete:!1}},mounted:function(){this.getDishes(),this.getIngredients()},methods:{getDishes:function(){var t=this;return r(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/custom_dishes").then((function(e){t.dishes=e.data.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},getIngredients:function(){var t=this;return r(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/ingredients").then((function(e){t.ingredients=e.data.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},addDish:function(){var t=this,e=1===this.edit?"/api/dish/update":"/api/dish/create";this.dish.ingredients=this.dish_ings,axios.post(e,this.dish).then((function(e){e.data.status?(t.close(),t.getDishes()):t.errors=e.data.errors,t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:"green",type:"success"})})).catch((function(e){console.log(e),t.errors=e.response.data.errors}))},close:function(){this.dialog=!1,this.dialogDelete=!1,this.dish={name:"",time:0,description:"",ingredients:[]},this.dish_ings=[]},editItem:function(t){this.edit=1,this.dish=t,this.dialog=!0,this.dish_ings=t.ingredients},deleteDish:function(t){this.dish=t,this.dialogDelete=!0},deleteConfirm:function(){var t=this;axios.post("/api/dish/delete",{id:this.dish.id}).then((function(e){e.data.status?(t.close(),t.getDishes()):t.errors=e.data.errors,t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:"green",type:"success"})})).catch((function(e){console.log(e),t.errors=e.response.data.errors}))}}};const l=(0,i(1900).Z)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-row",[i("v-col",[i("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.dialog=!0}}},[t._v("\n                Добавить блюдо\n            ")])],1)],1),t._v(" "),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[i("thead",[i("tr",[i("th",{staticClass:"text-left"},[t._v("\n                            #\n                        ")]),t._v(" "),i("th",{staticClass:"text-left"},[t._v("\n                            Название\n                        ")]),t._v(" "),i("th",{staticClass:"text-left"},[t._v("\n                            Рацион\n                        ")]),t._v(" "),i("th",{staticClass:"text-left"},[t._v("\n                            Ингредиенты\n                        ")]),t._v(" "),i("th",{staticClass:"text-left"},[t._v("\n                            Actions\n                        ")])])]),t._v(" "),i("tbody",t._l(t.dishes,(function(e,s){return i("tr",{key:e.id},[i("td",[t._v(t._s(s+1))]),t._v(" "),i("td",[t._v(t._s(e.name))]),t._v(" "),i("td",[t._v(t._s(e.ration))]),t._v(" "),i("td",[t._v(t._s(e.ingredients.length))]),t._v(" "),i("td",[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(i){return t.editItem(e)}}},[t._v("\n                                mdi-pencil\n                            ")]),t._v(" "),i("v-icon",{attrs:{small:""},on:{click:function(i){return t.deleteDish(e)}}},[t._v("\n                                mdi-delete\n                            ")])],1)])})),0)]},proxy:!0}])}),t._v(" "),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5"},[t._v("Вы уверены?")]),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialogDelete=!1}}},[t._v("Отмена")]),t._v(" "),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteConfirm}},[t._v("Да")]),t._v(" "),i("v-spacer")],1)],1)],1)],1)],1),t._v(" "),i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-toolbar",{attrs:{dark:"",color:"primary"}},[i("v-btn",{attrs:{icon:"",dark:""},on:{click:t.close}},[i("v-icon",[t._v("mdi-close")])],1),t._v(" "),i("v-toolbar-title",[t._v("Settings")]),t._v(" "),i("v-spacer"),t._v(" "),i("v-toolbar-items",[i("v-btn",{attrs:{dark:"",text:""},on:{click:t.addDish}},[t._v("\n                            Сохранить\n                        ")])],1)],1),t._v(" "),i("v-card-title",[i("span",{staticClass:"text-h5"},[t._v(" "+t._s(1===t.edit?"Редактировать":"Добавить блюдо"))])]),t._v(" "),i("v-card-text",[i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{sm:"12",lg:"4"}},[i("v-text-field",{attrs:{label:"Название","error-messages":t.errors.name,outlined:"",dense:"",clearable:""},model:{value:t.dish.name,callback:function(e){t.$set(t.dish,"name",e)},expression:"dish.name"}}),t._v(" "),i("v-select",{attrs:{items:t.rations,"item-text":"name","item-value":"id",label:"Рацион","error-messages":t.errors.time,dense:"",clearable:"",outlined:""},model:{value:t.dish.time,callback:function(e){t.$set(t.dish,"time",e)},expression:"dish.time"}}),t._v(" "),i("v-textarea",{attrs:{outlined:"",clearable:"",label:"Доп. инфо"},model:{value:t.dish.description,callback:function(e){t.$set(t.dish,"description",e)},expression:"dish.description"}})],1),t._v(" "),i("v-col",{attrs:{sm:"12",lg:"8"}},[i("v-autocomplete",{attrs:{items:t.ingredients,"item-text":"name","item-value":"id",clearable:"",outlined:"","small-chips":"",label:"Ингредиенты",multiple:""},model:{value:t.dish_ings,callback:function(e){t.dish_ings=e},expression:"dish_ings"}})],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);