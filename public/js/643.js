"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[643],{3643:(t,n,e)=>{e.r(n),e.d(n,{default:()=>c});var i=e(7757),r=e.n(i);function o(t,n,e,i,r,o,a){try{var c=t[o](a),l=c.value}catch(t){return void e(t)}c.done?n(l):Promise.resolve(l).then(i,r)}const a={name:"Ingredients",data:function(){return{ingredients:[],ingredient:{},errors:[],edit:-1,dialog:!1,dialogDelete:!1}},mounted:function(){this.getIngredients()},methods:{getIngredients:function(){var t,n=this;return(t=r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/api/ingredients").then((function(t){n.ingredients=t.data.data})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(i,r){var a=t.apply(n,e);function c(t){o(a,i,r,c,l,"next",t)}function l(t){o(a,i,r,c,l,"throw",t)}c(void 0)}))})()},deleteConfirm:function(){},editIng:function(){},deleteIng:function(){}}};const c=(0,e(1900).Z)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-row",[e("v-col",[e("v-btn",{attrs:{color:"primary"},on:{click:function(n){t.dialog=!0}}},[t._v("\n                Добавить ингредиент\n            ")])],1)],1),t._v(" "),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("\n                            #\n                        ")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("\n                            Название\n                        ")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("\n                            Actions\n                        ")])])]),t._v(" "),e("tbody",t._l(t.ingredients,(function(n,i){return e("tr",{key:n.id},[e("td",[t._v(t._s(i+1))]),t._v(" "),e("td",[t._v(t._s(n.name))]),t._v(" "),e("td",[e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editIng(n)}}},[t._v("\n                                mdi-pencil\n                            ")]),t._v(" "),e("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteIng(n)}}},[t._v("\n                                mdi-delete\n                            ")])],1)])})),0)]},proxy:!0}])}),t._v(" "),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(n){t.dialogDelete=n},expression:"dialogDelete"}},[e("v-card",[e("v-card-title",{staticClass:"text-h5"},[t._v("Вы уверены?")]),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(n){t.dialogDelete=!1}}},[t._v("Отмена")]),t._v(" "),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteConfirm}},[t._v("Да")]),t._v(" "),e("v-spacer")],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);