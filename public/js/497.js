"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[497],{7497:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});var s=o(7757),a=o.n(s);function i(e,t,o,s,a,i,r){try{var n=e[i](r),d=n.value}catch(e){return void o(e)}n.done?t(d):Promise.resolve(d).then(s,a)}const r={name:"Promocodes",data:function(){return{dialog:!1,dialogDelete:!1,loading:!0,headers:[{text:"#",value:"index"},{text:"Название",value:"name"},{text:"Код",value:"code",sortable:!1},{text:"Значение",value:"sum",sortable:!1},{text:"Тип",value:"is_fixed",sortable:!1},{text:"Начало",value:"date_from",sortable:!1},{text:"Конец",value:"date_to",sortable:!1},{text:"Статус",value:"is_active",sortable:!1},{text:"Действия",value:"actions",sortable:!1}],promocodes:[],date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),first:!1,second:!1,types:[{type:0,name:"Процент"},{type:1,name:"Сумма"},{type:2,name:"Текст"}],editedIndex:-1,editedItem:{id:null,name:"",code:"",type:0,sum:0,msg:"",date_from:"",date_to:""},defaultItem:{id:0,name:null,code:null,sum:0,type:0,msg:"",date_from:null,date_to:null},errors:[]}},created:function(){this.fetchPromocodes()},methods:{fetchPromocodes:function(){var e,t=this;return(e=a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/promocodes").then((function(e){var o;t.promocodes=null!==(o=e.data)&&void 0!==o?o:[]})).catch((function(e){console.log(e)})).finally((function(){return t.loading=!1}));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,o=arguments;return new Promise((function(s,a){var r=e.apply(t,o);function n(e){i(r,s,a,n,d,"next",e)}function d(e){i(r,s,a,n,d,"throw",e)}n(void 0)}))})()},editItem:function(e){this.editedIndex=this.promocodes.indexOf(e),this.editedItem=Object.assign({},e),this.editedItem.id=e.id,this.dialog=!0},activate:function(e){var t=this;axios.post("/api/promocode/"+e.id+"/activate").then((function(e){e.data.status?(t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:"green",type:"success"}),t.fetchPromocodes()):t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:"error",type:"error"})})).catch((function(e){t.$store.commit("SET_ALERT",{isVisible:!0,msg:e.message,color:"error",type:"error"})})),this.close()},deleteItem:function(e){this.editedIndex=this.promocodes.indexOf(e),this.editedItem=Object.assign({},e),this.editedItem.id=e.id,this.dialogDelete=!0},deleteItemConfirm:function(){var e=this;axios.delete("/api/promocodes/"+this.editedItem.id).then((function(t){e.close(),t.data.status?(e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:"green",type:"success"}),e.fetchPromocodes()):e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:"error",type:"error"})})).catch((function(t){e.$store.commit("SET_ALERT",{isVisible:!0,msg:t.message,color:"error",type:"error"})})),this.close()},close:function(){var e=this;this.dialog=!1,this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=this,t="/api/promocodes";this.editedIndex>-1&&(t+="/"+this.editedItem.id),axios({method:this.editedIndex>-1?"PATCH":"POST",url:t,data:{name:this.editedItem.name,code:this.editedItem.code,sum:this.editedItem.sum,type:this.editedItem.type,msg:this.editedItem.msg,date_from:this.editedItem.date_from,date_to:this.editedItem.date_to}}).then((function(t){e.close(),e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:t.data.status?"green":"error",type:t.data.status?"success":"error"}),e.fetchPromocodes()})).catch((function(t){e.errors=t.response.data.errors}))}}};const n=(0,o(1900).Z)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.promocodes,loading:e.loading,"loading-text":"Loading... Please wait"},scopedSlots:e._u([{key:"item.index",fn:function(t){var o=t.index;return[e._v("\n        "+e._s(o+1)+"\n    ")]}},{key:"item.is_fixed",fn:function(t){var o=t.item;return[e._v("\n        "+e._s(1===o.type?"тг":0===o.type?"%":"Текст")+"\n    ")]}},{key:"item.is_active",fn:function(t){var o=t.item;return[e._v("\n        "+e._s(o.is_active?"Активирован":"Деактивирован")+"\n    ")]}},{key:"top",fn:function(){return[o("v-toolbar",{attrs:{flat:""}},[o("v-toolbar-title",[e._v("Промокоды")]),e._v(" "),o("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),o("v-spacer"),e._v(" "),o("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,a=t.attrs;return[o("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",a,!1),s),[e._v("\n                        Добавить\n                    ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),o("v-card",[o("v-card-title",[o("span",{staticClass:"text-h5"},[e._v("Промокод")])]),e._v(" "),o("v-card-text",[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-text-field",{attrs:{label:"Имя","error-messages":e.errors.name},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name","string"==typeof t?t.trim():t)},expression:"editedItem.name"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-text-field",{attrs:{label:"Код","error-messages":e.errors.code},model:{value:e.editedItem.code,callback:function(t){e.$set(e.editedItem,"code","string"==typeof t?t.trim():t)},expression:"editedItem.code"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-autocomplete",{attrs:{items:e.types,"item-text":"name","item-value":"type"},model:{value:e.editedItem.type,callback:function(t){e.$set(e.editedItem,"type",t)},expression:"editedItem.type"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"6"}},[2!==e.editedItem.type?o("v-text-field",{attrs:{label:"Значение","error-messages":e.errors.sum},model:{value:e.editedItem.sum,callback:function(t){e.$set(e.editedItem,"sum","string"==typeof t?t.trim():t)},expression:"editedItem.sum"}}):e._e()],1),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"12"}},[o("v-text-field",{attrs:{label:"Текст","error-messages":e.errors.msg},model:{value:e.editedItem.msg,callback:function(t){e.$set(e.editedItem,"msg","string"==typeof t?t.trim():t)},expression:"editedItem.msg"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-menu",{ref:"first",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,a=t.attrs;return[o("v-text-field",e._g(e._b({attrs:{label:"Начало","prepend-icon":"mdi-calendar",readonly:"","error-messages":e.errors.date_from},model:{value:e.editedItem.date_from,callback:function(t){e.$set(e.editedItem,"date_from",t)},expression:"editedItem.date_from"}},"v-text-field",a,!1),s))]}}]),model:{value:e.first,callback:function(t){e.first=t},expression:"first"}},[e._v(" "),o("v-date-picker",{attrs:{"no-title":"",scrollable:"",min:e.date},model:{value:e.editedItem.date_from,callback:function(t){e.$set(e.editedItem,"date_from",t)},expression:"editedItem.date_from"}},[o("v-spacer"),e._v(" "),o("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.first=!1}}},[e._v("\n                                                Cancel\n                                            ")]),e._v(" "),o("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.first.save(e.editedItem.date_from)}}},[e._v("\n                                                OK\n                                            ")])],1)],1)],1),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-menu",{ref:"second",attrs:{"close-on-content-click":!1,"return-value":e.editedItem.date_to,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(e.editedItem,"date_to",t)},"update:return-value":function(t){return e.$set(e.editedItem,"date_to",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,a=t.attrs;return[o("v-text-field",e._g(e._b({attrs:{label:"Конец","prepend-icon":"mdi-calendar",readonly:"","error-messages":e.errors.date_to},model:{value:e.editedItem.date_to,callback:function(t){e.$set(e.editedItem,"date_to",t)},expression:"editedItem.date_to"}},"v-text-field",a,!1),s))]}}]),model:{value:e.second,callback:function(t){e.second=t},expression:"second"}},[e._v(" "),o("v-date-picker",{attrs:{"no-title":"",scrollable:"",min:e.date},model:{value:e.editedItem.date_to,callback:function(t){e.$set(e.editedItem,"date_to",t)},expression:"editedItem.date_to"}},[o("v-spacer"),e._v(" "),o("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.second=!1}}},[e._v("\n                                                Cancel\n                                            ")]),e._v(" "),o("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.second.save(e.editedItem.date_to)}}},[e._v("\n                                                OK\n                                            ")])],1)],1)],1)],1)],1)],1),e._v(" "),o("v-card-actions",[o("v-spacer"),e._v(" "),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("\n                            Отмена\n                        ")]),e._v(" "),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("\n                            Сохранить\n                        ")])],1)],1)],1),e._v(" "),o("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[o("v-card",[o("v-card-title",{staticClass:"text-h5"},[e._v("Вы уверены, что хотите удалить?")]),e._v(" "),o("v-card-actions",[o("v-spacer"),e._v(" "),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Отмена")]),e._v(" "),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),o("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var s=t.item;return[o("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(s)}}},[e._v("\n            mdi-pencil\n        ")]),e._v(" "),o("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.activate(s)}}},[e._v("\n            "+e._s(s.is_active?"mdi-stop":"mdi-play")+"\n        ")]),e._v(" "),o("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(s)}}},[e._v("\n            mdi-delete\n        ")])]}}])})}),[],!1,null,null,null).exports}}]);