"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[630],{5630:(t,e,s)=>{s.r(e),s.d(e,{default:()=>c});var n=s(7757),i=s.n(n);function r(t,e,s,n,i,r,a){try{var o=t[r](a),c=o.value}catch(t){return void s(t)}o.done?e(c):Promise.resolve(c).then(n,i)}function a(t){return function(){var e=this,s=arguments;return new Promise((function(n,i){var a=t.apply(e,s);function o(t){r(a,n,i,o,c,"next",t)}function c(t){r(a,n,i,o,c,"throw",t)}o(void 0)}))}}const o={name:"Dishes",data:function(){return{dishes:[],dish:{name:"",time:0,description:"",department:null,code:"",ingredients:[]},ingredients:[],departments:[],rations:[],errors:[],edit:-1,dialog:!1}},mounted:function(){this.getDishes(),this.getIngredients(),this.getRations(),this.getDepartments()},methods:{getDishes:function(){var t=this;return a(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/dishes").then((function(e){t.dishes=e.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},getIngredients:function(){var t=this;return a(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/ingredients").then((function(e){t.ingredients=e.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},getRations:function(){var t=this;return a(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/rations/required").then((function(e){t.rations=e.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},getDepartments:function(){var t=this;return a(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/departments").then((function(e){t.departments=e.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},action:function(){1===this.edit?this.update():this.store()},store:function(){var t=this;axios.post("/api/dishes",this.dish).then((function(e){e.data.status?(t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:"green",type:"success"}),t.close(),t.getDishes()):t.errors=e.data.errors})).catch((function(e){console.log(e),t.errors=e.response.data.errors}))},update:function(){var t=this;axios.patch("/api/dishes/"+this.dish.id,this.dish).then((function(e){e.data.status?(t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:"green",type:"success"}),t.close(),t.getDishes()):t.errors=e.data.errors})).catch((function(e){console.log(e),t.errors=e.response.data.errors}))},close:function(){this.dialog=!1,this.edit=-1,this.dish={name:"",ration_id:0,description:"",ingredient_ids:[]},this.errors=[]},editItem:function(t){this.edit=1,this.dish=t,this.dialog=!0}}};const c=(0,s(1900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-row",[s("v-col",[s("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.dialog=!0}}},[t._v("\n                Добавить блюдо\n            ")])],1)],1),t._v(" "),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v("\n                            #\n                        ")]),t._v(" "),s("th",{staticClass:"text-left"},[t._v("\n                            Название\n                        ")]),t._v(" "),s("th",{staticClass:"text-left"},[t._v("\n                            Рацион\n                        ")]),t._v(" "),s("th",{staticClass:"text-left"},[t._v("\n                            Ингредиенты\n                        ")]),t._v(" "),s("th",{staticClass:"text-left"},[t._v("\n                            Actions\n                        ")])])]),t._v(" "),s("tbody",t._l(t.dishes,(function(e,n){return s("tr",{key:e.id},[s("td",[t._v(t._s(n+1))]),t._v(" "),s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.ration?e.ration.name:""))]),t._v(" "),s("td",[t._v(t._s(e.ingredient_ids.length))]),t._v(" "),s("td",[s("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(s){return t.editItem(e)}}},[t._v("\n                                mdi-pencil\n                            ")])],1)])})),0)]},proxy:!0}])})],1)],1),t._v(" "),s("v-row",{attrs:{justify:"center"}},[s("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-toolbar",{attrs:{dark:"",color:"primary"}},[s("v-btn",{attrs:{icon:"",dark:""},on:{click:t.close}},[s("v-icon",[t._v("mdi-close")])],1),t._v(" "),s("v-toolbar-title",[t._v("Блюдо")])],1),t._v(" "),s("v-card-title",[s("span",{staticClass:"text-h5"},[t._v(" "+t._s(1===t.edit?"Редактировать":"Добавить"))])]),t._v(" "),s("v-card-text",[s("v-container",{attrs:{fluid:""}},[s("v-row",[s("v-col",{attrs:{sm:"12",lg:"4"}},[s("v-text-field",{attrs:{label:"Название","error-messages":t.errors.name,outlined:"",clearable:""},model:{value:t.dish.name,callback:function(e){t.$set(t.dish,"name",e)},expression:"dish.name"}}),t._v(" "),s("v-select",{attrs:{items:t.rations,"item-text":"name","item-value":"iiko_id",label:"Рацион","error-messages":t.errors.ration_id,clearable:"",outlined:""},model:{value:t.dish.ration_id,callback:function(e){t.$set(t.dish,"ration_id",e)},expression:"dish.ration_id"}}),t._v(" "),s("v-text-field",{attrs:{label:"Code","error-messages":t.errors.code,outlined:"",clearable:""},model:{value:t.dish.code,callback:function(e){t.$set(t.dish,"code",e)},expression:"dish.code"}}),t._v(" "),s("v-select",{attrs:{items:t.departments,"item-text":"name","item-value":"id",label:"Цех","error-messages":t.errors.department_id,clearable:"",outlined:""},model:{value:t.dish.department_id,callback:function(e){t.$set(t.dish,"department_id",e)},expression:"dish.department_id"}}),t._v(" "),s("v-textarea",{attrs:{outlined:"",clearable:"",label:"Доп. инфо"},model:{value:t.dish.description,callback:function(e){t.$set(t.dish,"description",e)},expression:"dish.description"}})],1),t._v(" "),s("v-col",{attrs:{sm:"12",lg:"8"}},[s("v-autocomplete",{attrs:{items:t.ingredients,"item-text":"name","item-value":"id","error-messages":t.errors.ingredient_ids,clearable:"",outlined:"","small-chips":"",label:"Ингредиенты",multiple:""},model:{value:t.dish.ingredient_ids,callback:function(e){t.$set(t.dish,"ingredient_ids",e)},expression:"dish.ingredient_ids"}}),t._v(" "),s("v-btn",{attrs:{color:"primary"},on:{click:t.action}},[t._v("\n                                    Сохранить\n                                ")])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);