"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[892],{3644:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var a=i(7757),l=i.n(a);function n(t,e,i,a,l,n,s){try{var o=t[n](s),r=o.value}catch(t){return void i(t)}o.done?e(r):Promise.resolve(r).then(a,l)}function s(t){return function(){var e=this,i=arguments;return new Promise((function(a,l){var s=t.apply(e,i);function o(t){n(s,a,l,o,r,"next",t)}function r(t){n(s,a,l,o,r,"throw",t)}o(void 0)}))}}const o={name:"Builder",components:{CRUD:i(9321).Z},data:function(){return{loading:!0,dialog:!1,dialogDelete:!1,title:"Builder Values",headers:[{text:"#",value:"index"},{text:"Image",value:"image"},{text:"Имя",value:"name"},{text:"Код",value:"slug",sortable:!1},{text:"Действия",value:"actions",sortable:!1}],items:[],categories:[],multipart:!0,id:null,models:[{model:"category_id",label:"Категория",type:"v-select",chips:!1,multiple:!1,item_name:"name",items:[],value:null},{model:"name",label:"Название",type:"v-text-field",value:null},{model:"slug",label:"Код",type:"v-text-field",value:null},{model:"image",label:"Картинка",type:"v-file-input",value:null}],link:"/api/builder-values",is_edit:!1}},mounted:function(){this.fetchItems(),this.fetchCategories()},methods:{fetchItems:function(){var t=this;return s(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/builder-values").then((function(e){t.items=e.data})).catch((function(t){console.log(t)})).finally((function(){return t.loading=!1}));case 2:case"end":return e.stop()}}),e)})))()},fetchCategories:function(){var t=this;return s(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/builder-categories").then((function(e){t.categories=e.data,t.models[0].items=e.data})).catch((function(t){console.log(t)})).finally((function(){return t.loading=!1}));case 2:case"end":return e.stop()}}),e)})))()},create:function(){this.dialog=!0},edit:function(t){this.models.map((function(e){e.value=t[e.model]})),this.id=t.id,this.is_edit=!0,this.dialog=!0},close:function(){this.dialog=!1,this.dialogDelete=!1,this.is_edit=!1,this.models.map((function(t){t.value=null}))},refresh:function(){this.close(),this.fetchItems()},deleteItem:function(t){this.id=t,this.dialogDelete=!0}}};const r=(0,i(1900).Z)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",[i("v-col",[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,loading:t.loading,"loading-text":"Загрузка..."},scopedSlots:t._u([{key:"item.index",fn:function(e){var i=e.index;return[t._v("\n                "+t._s(i+1)+"\n            ")]}},{key:"item.image",fn:function(t){var e=t.item;return[i("img",{staticClass:"ma-1",attrs:{src:"storage/"+e.image,width:"40"}})]}},{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[t._v("Values")]),t._v(" "),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),i("v-spacer"),t._v(" "),i("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:t.create}},[t._v("\n                        Добавить\n                    ")])],1)]},proxy:!0},{key:"item.actions",fn:function(e){var a=e.item;return[i("v-btn",{staticClass:"mr-2",attrs:{"x-small":""},on:{click:function(e){return t.edit(a)}}},[t._v("\n                    редактировать\n                ")]),t._v(" "),i("v-btn",{attrs:{"x-small":""},on:{click:function(e){return t.deleteItem(a.id)}}},[t._v("\n                    удалить\n                ")])]}}])}),t._v(" "),i("CRUD",{attrs:{dialog:t.dialog,"dialog-delete":t.dialogDelete,title:t.title,models:t.models,link:t.link,id:t.id,"is-edit":t.is_edit,multipart:t.multipart},on:{close:t.close,refresh:t.refresh}})],1)],1)}),[],!1,null,null,null).exports},9321:(t,e,i)=>{i.d(e,{Z:()=>l});const a={name:"CRUD",props:{title:String,dialog:Boolean,dialogDelete:Boolean,id:Number,models:Array,link:String,isEdit:Boolean,multipart:Boolean},data:function(){return{errors:[]}},computed:{method:function(){return this.multipart?"POST":this.isEdit?"PATCH":"POST"},multipart_method:function(){return this.isEdit?"PATCH":"POST"},action_link:function(){return this.isEdit?this.link+"/"+this.id:this.link},delete_link:function(){return this.link+"/"+this.id}},methods:{close:function(){this.errors=[],this.$emit("close")},isInputFile:function(t){return"v-file-input"===t.type&&t.value},save:function(){var t=this,e={},i=new FormData;this.models.map((function(t){return i.append(t.model,t.value),e[t.model]=t.value})),i.append("_method",this.multipart_method);var a=this.multipart?i:e;axios({method:this.method,url:this.action_link,data:a,headers:{"content-type":this.multipart?"multipart/form-data":"application/json"}}).then((function(e){t.$emit("refresh"),t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:e.data.status?"green":"error",type:e.data.status?"success":"error"})})).catch((function(e){t.errors=e.response.data.errors}))},deleteItemConfirm:function(){var t=this;axios.delete(this.delete_link).then((function(e){t.$emit("refresh"),t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:e.data.status?"green":"error",type:e.data.status?"success":"error"})})).catch((function(t){console.log(t)}))}}};const l=(0,i(1900).Z)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-toolbar",{attrs:{dark:"",color:"primary"}},[i("v-btn",{attrs:{icon:"",dark:""},on:{click:t.close}},[i("v-icon",[t._v("mdi-close")])],1),t._v(" "),i("v-toolbar-title",[t._v(t._s(t.title))])],1),t._v(" "),i("v-card-text",[i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{sm:"12",lg:"4","offset-lg":"4"}},[t._l(t.models,(function(e){return[t.isInputFile(e)?i("img",{attrs:{src:"storage/"+e.value,width:"128"}}):t._e(),t._v(" "),e.mask?i(e.type,{directives:[{name:"mask",rawName:"v-mask",value:e.mask,expression:"model.mask"}],key:e.model,tag:"component",attrs:{label:e.label,"error-messages":t.errors[e.model],chips:e.chips,items:e.items,"item-text":e.item_name,"item-value":"id",multiple:e.multiple,outlined:"",clearable:""},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"model.value"}}):i(e.type,{key:e.model,tag:"component",attrs:{label:e.label,"error-messages":t.errors[e.model],chips:e.chips,items:e.items,"item-text":e.item_name,"item-value":"id",multiple:e.multiple,outlined:"",clearable:""},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"model.value"}})]})),t._v(" "),i("v-btn",{attrs:{color:"primary"},on:{click:t.save}},[t._v("\n                                Сохранить\n                            ")])],2)],1)],1)],1)],1)],1),t._v(" "),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5"},[t._v("Вы уверены, что хотите удалить?")]),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Отмена")]),t._v(" "),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("ДА")]),t._v(" "),i("v-spacer")],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);