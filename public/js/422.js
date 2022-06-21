"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[422],{6422:(t,n,i)=>{i.r(n),i.d(n,{default:()=>r});var s=i(7757),e=i.n(s);function o(t,n,i,s,e,o,c){try{var a=t[o](c),r=a.value}catch(t){return void i(t)}a.done?n(r):Promise.resolve(r).then(s,e)}function c(t){return function(){var n=this,i=arguments;return new Promise((function(s,e){var c=t.apply(n,i);function a(t){o(c,s,e,a,r,"next",t)}function r(t){o(c,s,e,a,r,"throw",t)}a(void 0)}))}}const a={name:"Cuisine",data:function(){return{cuisines:[],btn_loading:!1,loading:!1,disabled:!1}},created:function(){this.getCuisines()},methods:{getCuisines:function(){var t=this;return c(e().mark((function n(){return e().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,axios.get("/api/cuisines").then((function(n){t.cuisines=n.data})).catch((function(t){console.log(t)}));case 2:case"end":return n.stop()}}),n)})))()},setDuty:function(t){var n=this;axios.post("/api/cuisine/duty",{id:t}).then((function(t){n.getCuisines()})).catch((function(t){console.log(t)}))},goToCuisineDishes:function(t){this.$router.push({name:"cuisine_dishes",params:{id:t}})},fetchCuisines:function(){var t=this;return c(e().mark((function n(){return e().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.btn_loading=!0,t.disabled=!0,n.next=4,axios.get("/api/cuisine/iiko").then((function(n){t.$store.dispatch("showAlert",{isVisible:!0,msg:n.data.msg,color:n.data.status?"green":"error",type:n.data.status?"success":"error"}),t.getCuisines()})).catch((function(t){console.log(t)})).finally((function(){t.btn_loading=!1,t.disabled=!1}));case 4:case"end":return n.stop()}}),n)})))()},setDate:function(t){var n=this;axios.post("/api/cuisine/date",{id:t,date:this.date}).then((function(t){n.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:"success",type:"success"}),n.getCuisines()})).catch((function(t){console.log(t)}))}}};const r=(0,i(1900).Z)(a,(function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("v-row",[i("v-btn",{staticClass:"ma-3",attrs:{loading:t.btn_loading,disabled:t.disabled,color:"primary"},on:{click:t.fetchCuisines}},[t._v("\n            Получить Кухни\n        ")])],1),t._v(" "),i("v-row",t._l(t.cuisines,(function(n,s){return i("v-col",{key:s,attrs:{cols:"12",md:"3"}},[i("h3",{staticClass:"mb-4"},[t._v("Неделя #"+t._s(s))]),t._v(" "),t._l(n,(function(n){return i("v-card",{key:n.name,staticClass:"mb-3",attrs:{color:n.is_on_duty?"green":"grey"}},[i("v-card-title",[t._v(t._s(n.position)+". "+t._s(n.name))]),t._v(" "),i("v-card-subtitle",[t._v(t._s(n.date))]),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{icon:"",color:"white"},on:{click:function(i){return t.setDuty(n.id)}}},[i("v-icon",[t._v("mdi-star")])],1),t._v(" "),i("v-btn",{attrs:{color:"white",icon:""},on:{click:function(i){return t.goToCuisineDishes(n.id)}}},[i("v-icon",[t._v("mdi-tune")])],1)],1)],1)}))],2)})),1)],1)}),[],!1,null,null,null).exports}}]);