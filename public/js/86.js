"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86],{5086:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var n=i(7757),o=i.n(n);function l(t,e,i,n,o,l,a){try{var r=t[l](a),s=r.value}catch(t){return void i(t)}r.done?e(s):Promise.resolve(s).then(n,o)}const a={name:"ProductCategory",components:{CRUD:i(6060).Z},data:function(){return{loading:!0,dialog:!1,dialogDelete:!1,title:"Категория",headers:[{text:"#",value:"index"},{text:"Имя",value:"title"},{text:"Действия",value:"actions",sortable:!1}],items:[],id:null,models:[{model:"title",label:"Название",type:"v-text-field",value:null},{model:"image",label:"Картинка",type:"v-file-input",value:null}],link:"/api/product-categories/",is_edit:!1}},mounted:function(){this.fetchCategories()},methods:{fetchCategories:function(){var t,e=this;return(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/api/product-categories").then((function(t){e.items=t.data})).catch((function(t){console.log(t)})).finally((function(){return e.loading=!1}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,i=arguments;return new Promise((function(n,o){var a=t.apply(e,i);function r(t){l(a,n,o,r,s,"next",t)}function s(t){l(a,n,o,r,s,"throw",t)}r(void 0)}))})()},create:function(){this.dialog=!0},edit:function(t){this.models.map((function(e){e.value=t[e.model]})),this.id=t.id,this.is_edit=!0,this.dialog=!0},close:function(){this.dialog=!1,this.dialogDelete=!1,this.is_edit=!1,this.models.map((function(t){t.value=null}))},refresh:function(){this.close(),this.fetchCategories()},deleteItem:function(t){this.id=t,this.dialogDelete=!0}}};const r=(0,i(1900).Z)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",[i("v-col",[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,loading:t.loading,"loading-text":"Загрузка..."},scopedSlots:t._u([{key:"item.index",fn:function(e){var i=e.index;return[t._v("\n                "+t._s(i+1)+"\n            ")]}},{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[t._v("Категории")]),t._v(" "),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),i("v-spacer"),t._v(" "),i("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:t.create}},[t._v("\n                        Добавить\n                    ")])],1)]},proxy:!0},{key:"item.actions",fn:function(e){var n=e.item;return[i("v-btn",{staticClass:"mr-2",attrs:{"x-small":""},on:{click:function(e){return t.edit(n)}}},[t._v("\n                    редактировать\n                ")]),t._v(" "),i("v-btn",{attrs:{"x-small":""},on:{click:function(e){return t.deleteItem(n.id)}}},[t._v("\n                    удалить\n                ")])]}}])}),t._v(" "),i("CRUD",{attrs:{dialog:t.dialog,"dialog-delete":t.dialogDelete,title:t.title,models:t.models,link:t.link,id:t.id,"is-edit":t.is_edit},on:{close:t.close,refresh:t.refresh}})],1)],1)}),[],!1,null,null,null).exports},6060:(t,e,i)=>{i.d(e,{Z:()=>o});const n={name:"CRUD",props:{title:String,dialog:Boolean,dialogDelete:Boolean,id:Number,models:Array,link:String,isEdit:Boolean,multipart:Boolean},data:function(){return{errors:[]}},computed:{method:function(){return this.isEdit?"PATCH":"POST"},action_link:function(){return this.isEdit?this.link+this.id:this.link},delete_link:function(){return this.link+this.id},hasImage:function(){return null!==this.models.find((function(t){return"image"===t.model})).value},image:function(){var t=this.models.find((function(t){return"image"===t.model}));return null!==t.value?"storage/"+t.value:""}},methods:{close:function(){this.errors=[],this.$emit("close")},save:function(){var t=this,e={},i=new FormData;this.models.map((function(n){return"phone"===n.model&&(n.value=t.getPhone(n.value)),i.append(n.model,n.value),e[n.model]=n.value})),console.log(this.multipart,i),axios({method:this.method,url:this.action_link,data:this.multipart?i:e,headers:{"Content-Type":this.multipart?"multipart/form-data":"application/json"}}).then((function(e){t.$emit("refresh"),t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:e.data.status?"green":"error",type:e.data.status?"success":"error"})})).catch((function(e){t.errors=e.response.data.errors}))},deleteItemConfirm:function(){var t=this;axios.delete(this.delete_link).then((function(e){t.$emit("refresh"),t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:e.data.status?"green":"error",type:e.data.status?"success":"error"})})).catch((function(t){console.log(t)}))},getPhone:function(t){return t.replace(/[^0-9]/g,"")}}};const o=(0,i(1900).Z)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-toolbar",{attrs:{dark:"",color:"primary"}},[i("v-btn",{attrs:{icon:"",dark:""},on:{click:t.close}},[i("v-icon",[t._v("mdi-close")])],1),t._v(" "),i("v-toolbar-title",[t._v(t._s(t.title))])],1),t._v(" "),i("v-card-text",[i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{sm:"12",lg:"4","offset-lg":"4"}},[i("img",{attrs:{src:t.image,width:"320"}}),t._v(" "),t._l(t.models,(function(e){return i(e.type,{key:e.model,tag:"component",attrs:{label:e.label,"error-messages":t.errors[e.model],"v-mask":"phone"===e.model?"+7 (###) ###-##-##":"",chips:e.chips,items:e.items,"item-text":e.item_name,"item-value":"id",multiple:e.multiple,outlined:"",clearable:""},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"model.value"}})})),t._v(" "),i("v-btn",{attrs:{color:"primary"},on:{click:t.save}},[t._v("\n                                Сохранить\n                            ")])],2)],1)],1)],1)],1)],1),t._v(" "),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5"},[t._v("Вы уверены, что хотите удалить?")]),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Отмена")]),t._v(" "),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("ДА")]),t._v(" "),i("v-spacer")],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);