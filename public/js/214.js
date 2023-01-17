"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[214],{6214:(t,i,n)=>{n.r(i),n.d(i,{default:()=>r});var e=n(7757),s=n.n(e);function c(t,i,n,e,s,c,o){try{var a=t[c](o),r=a.value}catch(t){return void n(t)}a.done?i(r):Promise.resolve(r).then(e,s)}function o(t){return function(){var i=this,n=arguments;return new Promise((function(e,s){var o=t.apply(i,n);function a(t){c(o,e,s,a,r,"next",t)}function r(t){c(o,e,s,a,r,"throw",t)}a(void 0)}))}}const a={name:"Cuisine",data:function(){return{cuisines:[],btn_loading:!1,loading:!1,disabled:!1,dialog:!1,cuisine:{},file:null}},created:function(){this.getCuisines()},methods:{getCuisines:function(){var t=this;return o(s().mark((function i(){return s().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,axios.get("/api/cuisines").then((function(i){t.cuisines=i.data})).catch((function(t){console.log(t)}));case 2:case"end":return i.stop()}}),i)})))()},setDuty:function(t){var i=this;axios.post("/api/cuisine/duty",{id:t}).then((function(t){i.getCuisines()})).catch((function(t){console.log(t)}))},goToCuisineDishes:function(t){this.$router.push({name:"cuisine_dishes",params:{id:t}})},fetchCuisines:function(){var t=this;return o(s().mark((function i(){return s().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t.btn_loading=!0,t.disabled=!0,i.next=4,axios.get("/api/cuisine/iiko").then((function(i){t.$store.dispatch("showAlert",{isVisible:!0,msg:i.data.msg,color:i.data.status?"green":"error",type:i.data.status?"success":"error"}),t.getCuisines()})).catch((function(t){console.log(t)})).finally((function(){t.btn_loading=!1,t.disabled=!1}));case 4:case"end":return i.stop()}}),i)})))()},setPurchase:function(t){var i=this;axios.post("/api/cuisine/purchase",{id:t}).then((function(t){i.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:"success",type:"success"}),i.getCuisines()})).catch((function(t){console.log(t)}))},openFile:function(t){this.cuisine=t,this.dialog=!0},saveFile:function(){var t=this,i=new FormData;i.append("file",this.file),i.append("_method","POST"),axios({method:"POST",url:"/api/cuisine/"+this.cuisine.id+"/file",data:i,headers:{"content-type":"multipart/form-data"}}).then((function(i){t.$store.dispatch("showAlert",{isVisible:!0,msg:i.data.msg,color:"success",type:"success"}),t.dialog=!1,t.file=null,t.getCuisines()})).catch((function(t){console.log(t)}))}}};const r=(0,n(1900).Z)(a,(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("v-row",[n("v-btn",{staticClass:"ma-3",attrs:{loading:t.btn_loading,disabled:t.disabled,color:"primary"},on:{click:t.fetchCuisines}},[t._v("\n            Получить Кухни\n        ")])],1),t._v(" "),n("v-row",t._l(t.cuisines,(function(i,e){return n("v-col",{key:e,attrs:{cols:"12",md:"3"}},[n("h3",{staticClass:"mb-4"},[t._v("Неделя #"+t._s(e))]),t._v(" "),t._l(i,(function(i){return n("v-card",{key:i.name,staticClass:"mb-3",attrs:{color:i.is_on_duty?"green":i.purchase_duty?"amber":"grey"}},[n("v-card-title",[t._v(t._s(i.position)+". "+t._s(i.name))]),t._v(" "),n("v-card-subtitle",[t._v(t._s(i.is_on_duty?i.date:i.purchase_duty?i.purchase_date:""))]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"white",icon:""},on:{click:function(n){return t.openFile(i)}}},[n("v-icon",[t._v("mdi-file")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",color:"white"},on:{click:function(n){return t.setDuty(i.id)}}},[n("v-icon",[t._v("mdi-star")])],1),t._v(" "),n("v-btn",{attrs:{icon:"",color:"white"},on:{click:function(n){return t.setPurchase(i.id)}}},[n("v-icon",[t._v("mdi-cart")])],1),t._v(" "),n("v-btn",{attrs:{color:"white",icon:""},on:{click:function(n){return t.goToCuisineDishes(i.id)}}},[n("v-icon",[t._v("mdi-tune")])],1)],1)],1)}))],2)})),1),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"480"},model:{value:t.dialog,callback:function(i){t.dialog=i},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 mb-4"},[t._v("\n                    Файл для "+t._s(t.cuisine.name)+"\n                ")]),t._v(" "),n("v-card-text",{staticClass:"mb-0 pb-0"},[t.cuisine.file?n("a",{attrs:{href:/storage/+t.cuisine.file,target:"_blank"}},[t._v("\n                        "+t._s(t.cuisine.file)+"\n                    ")]):t._e(),t._v(" "),n("v-file-input",{staticClass:"mt-4",attrs:{label:"File input",outlined:"",dense:""},model:{value:t.file,callback:function(i){t.file=i},expression:"file"}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red",text:""},on:{click:function(i){t.dialog=!1}}},[t._v("\n                        Закрыть\n                    ")]),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.saveFile}},[t._v("\n                        Сохранить\n                    ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);