"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[780],{3780:(t,e,l)=>{l.r(e),l.d(e,{default:()=>s});var i=l(7757),a=l.n(i);function n(t,e,l,i,a,n,o){try{var r=t[n](o),s=r.value}catch(t){return void l(t)}r.done?e(s):Promise.resolve(s).then(i,a)}function o(t){return function(){var e=this,l=arguments;return new Promise((function(i,a){var o=t.apply(e,l);function r(t){n(o,i,a,r,s,"next",t)}function s(t){n(o,i,a,r,s,"throw",t)}r(void 0)}))}}const r={name:"Products",components:{CRUD:l(9321).Z},data:function(){return{loading:!0,dialog:!1,dialogDelete:!1,title:"Продукт",categories:[],brands:[],headers:[{text:"#",value:"index"},{text:"Image",value:"image"},{text:"Имя",value:"title"},{text:"Цена",value:"price"},{text:"Брэнд",value:"brand_name"},{text:"Категория",value:"category_name"},{text:"Действия",value:"actions",sortable:!1}],items:[],id:null,multipart:!0,models:[{model:"title",label:"Название",type:"v-text-field",value:null},{model:"category_id",label:"Категория",type:"v-select",chips:!1,multiple:!1,item_name:"title",items:[],value:null},{model:"brand_id",label:"Брэнд",type:"v-select",chips:!1,multiple:!1,item_name:"title",items:[],value:null},{model:"image",label:"Картинка",type:"v-file-input",value:null},{model:"price",label:"Цена",type:"v-text-field",value:null},{model:"wholesale_price",label:"Цена оптовая",type:"v-text-field",value:null},{model:"description",label:"Описание",type:"v-textarea",value:null},{model:"composition",label:"Состав",type:"v-textarea",value:null},{model:"weight",label:"Вес",type:"v-text-field",value:null},{model:"kcal",label:"Ккал",type:"v-text-field",value:null},{model:"fat",label:"Жиры",type:"v-text-field",value:null},{model:"protein",label:"Белки",type:"v-text-field",value:null},{model:"carbohydrate",label:"Углеводы",type:"v-text-field",value:null}],link:"/api/products",is_edit:!1}},mounted:function(){this.fetchProducts(),this.fetchBrands(),this.fetchCategories()},methods:{fetchProducts:function(){var t=this;return o(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/products").then((function(e){t.items=e.data})).catch((function(t){console.log(t)})).finally((function(){return t.loading=!1}));case 2:case"end":return e.stop()}}),e)})))()},fetchBrands:function(){var t=this;return o(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/brands").then((function(e){t.brands=e.data,t.models[2].items=e.data})).catch((function(t){console.log(t)})).finally((function(){return t.loading=!1}));case 2:case"end":return e.stop()}}),e)})))()},fetchCategories:function(){var t=this;return o(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/product-categories").then((function(e){t.categories=e.data,t.models[1].items=e.data})).catch((function(t){console.log(t)})).finally((function(){return t.loading=!1}));case 2:case"end":return e.stop()}}),e)})))()},create:function(){this.dialog=!0},edit:function(t){this.models.map((function(e){e.value=t[e.model]})),this.id=t.id,this.is_edit=!0,this.dialog=!0},close:function(){this.dialog=!1,this.dialogDelete=!1,this.is_edit=!1,this.models.map((function(t){t.value=null}))},refresh:function(){this.close(),this.fetchProducts()},deleteItem:function(t){this.id=t,this.dialogDelete=!0}}};const s=(0,l(1900).Z)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-row",[l("v-col",[l("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,loading:t.loading,"loading-text":"Загрузка..."},scopedSlots:t._u([{key:"item.index",fn:function(e){var l=e.index;return[t._v("\n                "+t._s(l+1)+"\n            ")]}},{key:"item.image",fn:function(t){var e=t.item;return[l("img",{attrs:{src:"storage/"+e.image,width:"40"}})]}},{key:"top",fn:function(){return[l("v-toolbar",{attrs:{flat:""}},[l("v-toolbar-title",[t._v("Продукты")]),t._v(" "),l("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),l("v-spacer"),t._v(" "),l("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:t.create}},[t._v("\n                        Добавить\n                    ")])],1)]},proxy:!0},{key:"item.actions",fn:function(e){var i=e.item;return[l("v-btn",{staticClass:"mr-2",attrs:{"x-small":""},on:{click:function(e){return t.edit(i)}}},[t._v("\n                    редактировать\n                ")]),t._v(" "),l("v-btn",{attrs:{"x-small":""},on:{click:function(e){return t.deleteItem(i.id)}}},[t._v("\n                    удалить\n                ")])]}}])}),t._v(" "),l("CRUD",{attrs:{dialog:t.dialog,"dialog-delete":t.dialogDelete,title:t.title,models:t.models,link:t.link,id:t.id,"is-edit":t.is_edit,multipart:t.multipart},on:{close:t.close,refresh:t.refresh}})],1)],1)}),[],!1,null,null,null).exports},9321:(t,e,l)=>{l.d(e,{Z:()=>a});const i={name:"CRUD",props:{title:String,dialog:Boolean,dialogDelete:Boolean,id:Number,models:Array,link:String,isEdit:Boolean,multipart:Boolean},data:function(){return{errors:[]}},computed:{method:function(){return this.multipart?"POST":this.isEdit?"PATCH":"POST"},multipart_method:function(){return this.isEdit?"PATCH":"POST"},action_link:function(){return this.isEdit?this.link+"/"+this.id:this.link},delete_link:function(){return this.link+"/"+this.id}},methods:{close:function(){this.errors=[],this.$emit("close")},isInputFile:function(t){return"v-file-input"===t.type&&t.value},save:function(){var t=this,e={},l=new FormData;this.models.map((function(t){return l.append(t.model,t.value),e[t.model]=t.value})),l.append("_method",this.multipart_method);var i=this.multipart?l:e;axios({method:this.method,url:this.action_link,data:i,headers:{"content-type":this.multipart?"multipart/form-data":"application/json"}}).then((function(e){t.$emit("refresh"),t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:e.data.status?"green":"error",type:e.data.status?"success":"error"})})).catch((function(e){t.errors=e.response.data.errors}))},deleteItemConfirm:function(){var t=this;axios.delete(this.delete_link).then((function(e){t.$emit("refresh"),t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:e.data.status?"green":"error",type:e.data.status?"success":"error"})})).catch((function(t){console.log(t)}))}}};const a=(0,l(1900).Z)(i,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-row",{attrs:{justify:"center"}},[l("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[l("v-card",[l("v-toolbar",{attrs:{dark:"",color:"primary"}},[l("v-btn",{attrs:{icon:"",dark:""},on:{click:t.close}},[l("v-icon",[t._v("mdi-close")])],1),t._v(" "),l("v-toolbar-title",[t._v(t._s(t.title))])],1),t._v(" "),l("v-card-text",[l("v-container",{attrs:{fluid:""}},[l("v-row",[l("v-col",{attrs:{sm:"12",lg:"4","offset-lg":"4"}},[t._l(t.models,(function(e){return[t.isInputFile(e)?l("img",{attrs:{src:"storage/"+e.value,width:"128"}}):t._e(),t._v(" "),e.mask?l(e.type,{directives:[{name:"mask",rawName:"v-mask",value:e.mask,expression:"model.mask"}],key:e.model,tag:"component",attrs:{label:e.label,"error-messages":t.errors[e.model],chips:e.chips,items:e.items,"item-text":e.item_name,"item-value":"id",multiple:e.multiple,outlined:"",clearable:""},model:{value:e.value,callback:function(l){t.$set(e,"value",l)},expression:"model.value"}}):l(e.type,{key:e.model,tag:"component",attrs:{label:e.label,"error-messages":t.errors[e.model],chips:e.chips,items:e.items,"item-text":e.item_name,"item-value":"id",multiple:e.multiple,outlined:"",clearable:""},model:{value:e.value,callback:function(l){t.$set(e,"value",l)},expression:"model.value"}})]})),t._v(" "),l("v-btn",{attrs:{color:"primary"},on:{click:t.save}},[t._v("\n                                Сохранить\n                            ")])],2)],1)],1)],1)],1)],1),t._v(" "),l("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[l("v-card",[l("v-card-title",{staticClass:"text-h5"},[t._v("Вы уверены, что хотите удалить?")]),t._v(" "),l("v-card-actions",[l("v-spacer"),t._v(" "),l("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Отмена")]),t._v(" "),l("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("ДА")]),t._v(" "),l("v-spacer")],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);