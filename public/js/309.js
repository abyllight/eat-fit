"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[309],{5309:(e,t,l)=>{l.r(t),l.d(t,{default:()=>s});var i=l(7757),a=l.n(i);function n(e,t,l,i,a,n,o){try{var r=e[n](o),s=r.value}catch(e){return void l(e)}r.done?t(s):Promise.resolve(s).then(i,a)}function o(e){return function(){var t=this,l=arguments;return new Promise((function(i,a){var o=e.apply(t,l);function r(e){n(o,i,a,r,s,"next",e)}function s(e){n(o,i,a,r,s,"throw",e)}r(void 0)}))}}const r={name:"Products",components:{CRUD:l(4848).Z},data:function(){return{loading:!0,dialog:!1,dialogDelete:!1,title:"Продукт",categories:[],headers:[{text:"#",value:"index"},{text:"Image",value:"image"},{text:"Имя",value:"title"},{text:"Цена",value:"price"},{text:"Категория",value:"category_name"},{text:"Действия",value:"actions",sortable:!1}],items:[],id:null,multipart:!0,models:[{model:"title",label:"Название",type:"v-text-field",value:null},{model:"category_id",label:"Категория",type:"v-select",chips:!1,multiple:!1,item_name:"title",items:[],value:null},{model:"image",label:"Картинка",type:"v-file-input",value:null},{model:"price",label:"Цена",type:"v-text-field",value:null},{model:"wholesale_price",label:"Цена оптовая",type:"v-text-field",value:null},{model:"description",label:"Описание",type:"v-textarea",value:null},{model:"composition",label:"Состав",type:"v-textarea",value:null},{model:"weight",label:"Вес",type:"v-text-field",value:null},{model:"kcal",label:"Ккал",type:"v-text-field",value:null},{model:"fat",label:"Жиры",type:"v-text-field",value:null},{model:"protein",label:"Белки",type:"v-text-field",value:null},{model:"carbohydrate",label:"Углеводы",type:"v-text-field",value:null}],link:"/api/products/",is_edit:!1}},mounted:function(){this.fetchProducts(),this.fetchCategories()},methods:{fetchProducts:function(){var e=this;return o(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/api/products").then((function(t){e.items=t.data})).catch((function(e){console.log(e)})).finally((function(){return e.loading=!1}));case 2:case"end":return t.stop()}}),t)})))()},fetchCategories:function(){var e=this;return o(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/api/product-categories").then((function(t){e.categories=t.data,e.models[1].items=t.data})).catch((function(e){console.log(e)})).finally((function(){return e.loading=!1}));case 2:case"end":return t.stop()}}),t)})))()},create:function(){this.dialog=!0},edit:function(e){this.models.map((function(t){t.value=e[t.model]})),this.id=e.id,this.is_edit=!0,this.dialog=!0},close:function(){this.dialog=!1,this.dialogDelete=!1,this.is_edit=!1,this.models.map((function(e){e.value=null}))},refresh:function(){this.close(),this.fetchCategories()},deleteItem:function(e){this.id=e,this.dialogDelete=!0}}};const s=(0,l(1900).Z)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-row",[l("v-col",[l("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,loading:e.loading,"loading-text":"Загрузка..."},scopedSlots:e._u([{key:"item.index",fn:function(t){var l=t.index;return[e._v("\n                "+e._s(l+1)+"\n            ")]}},{key:"item.image",fn:function(e){var t=e.item;return[l("img",{attrs:{src:"storage/"+t.image,width:"40"}})]}},{key:"top",fn:function(){return[l("v-toolbar",{attrs:{flat:""}},[l("v-toolbar-title",[e._v("Продукты")]),e._v(" "),l("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),l("v-spacer"),e._v(" "),l("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:e.create}},[e._v("\n                        Добавить\n                    ")])],1)]},proxy:!0},{key:"item.actions",fn:function(t){var i=t.item;return[l("v-btn",{staticClass:"mr-2",attrs:{"x-small":""},on:{click:function(t){return e.edit(i)}}},[e._v("\n                    редактировать\n                ")]),e._v(" "),l("v-btn",{attrs:{"x-small":""},on:{click:function(t){return e.deleteItem(i.id)}}},[e._v("\n                    удалить\n                ")])]}}])}),e._v(" "),l("CRUD",{attrs:{dialog:e.dialog,"dialog-delete":e.dialogDelete,title:e.title,models:e.models,link:e.link,id:e.id,"is-edit":e.is_edit,multipart:e.multipart},on:{close:e.close,refresh:e.refresh}})],1)],1)}),[],!1,null,null,null).exports},4848:(e,t,l)=>{l.d(t,{Z:()=>a});const i={name:"CRUD",props:{title:String,dialog:Boolean,dialogDelete:Boolean,id:Number,models:Array,link:String,isEdit:Boolean,multipart:Boolean},data:function(){return{errors:[]}},computed:{method:function(){return this.isEdit?"PATCH":"POST"},action_link:function(){return this.isEdit?this.link+this.id:this.link},delete_link:function(){return this.link+this.id},hasImage:function(){var e=this.models.find((function(e){return"image"===e.model}));return!!e&&null!==e.value},image:function(){return""}},methods:{close:function(){this.errors=[],this.$emit("close")},save:function(){var e=this,t={},l=new FormData;this.models.map((function(i){return"phone"===i.model&&(i.value=e.getPhone(i.value)),l.append(i.model,i.value),t[i.model]=i.value})),axios({method:this.method,url:this.action_link,data:this.multipart?l:t,headers:{"Content-Type":this.multipart?"multipart/form-data":"application/json"}}).then((function(t){e.$emit("refresh"),e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:t.data.status?"green":"error",type:t.data.status?"success":"error"})})).catch((function(t){e.errors=t.response.data.errors}))},deleteItemConfirm:function(){var e=this;axios.delete(this.delete_link).then((function(t){e.$emit("refresh"),e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:t.data.status?"green":"error",type:t.data.status?"success":"error"})})).catch((function(e){console.log(e)}))},getPhone:function(e){return e.replace(/[^0-9]/g,"")}}};const a=(0,l(1900).Z)(i,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-row",{attrs:{justify:"center"}},[l("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[l("v-card",[l("v-toolbar",{attrs:{dark:"",color:"primary"}},[l("v-btn",{attrs:{icon:"",dark:""},on:{click:e.close}},[l("v-icon",[e._v("mdi-close")])],1),e._v(" "),l("v-toolbar-title",[e._v(e._s(e.title))])],1),e._v(" "),l("v-card-text",[l("v-container",{attrs:{fluid:""}},[l("v-row",[l("v-col",{attrs:{sm:"12",lg:"4","offset-lg":"4"}},[e.hasImage?l("img",{attrs:{src:e.image,width:"320"}}):e._e(),e._v(" "),e._l(e.models,(function(t){return l(t.type,{directives:[{name:"mask",rawName:"v-mask",value:"phone"===t.model?"+7 (###) ###-##-##":"",expression:"model.model === 'phone' ? '+7 (###) ###-##-##' : ''"}],key:t.model,tag:"component",attrs:{label:t.label,"error-messages":e.errors[t.model],chips:t.chips,items:t.items,"item-text":t.item_name,"item-value":"id",multiple:t.multiple,outlined:"",clearable:""},model:{value:t.value,callback:function(l){e.$set(t,"value",l)},expression:"model.value"}})})),e._v(" "),l("v-btn",{attrs:{color:"primary"},on:{click:e.save}},[e._v("\n                                Сохранить\n                            ")])],2)],1)],1)],1)],1)],1),e._v(" "),l("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[l("v-card",[l("v-card-title",{staticClass:"text-h5"},[e._v("Вы уверены, что хотите удалить?")]),e._v(" "),l("v-card-actions",[l("v-spacer"),e._v(" "),l("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Отмена")]),e._v(" "),l("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("ДА")]),e._v(" "),l("v-spacer")],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);