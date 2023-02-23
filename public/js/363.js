"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[363],{1363:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var a=s(7757),r=s.n(a);function i(e,t,s,a,r,i,n){try{var l=e[i](n),o=l.value}catch(e){return void s(e)}l.done?t(o):Promise.resolve(o).then(a,r)}const n={name:"CrudOrder",props:{dialog:Boolean,link:String,id:Number,isEdit:Boolean},data:function(){return{products:[{id:1,name:"Lite"},{id:2,name:"Select"},{id:3,name:"Detox"},{id:4,name:"Go"},{id:5,name:"Chill"},{id:6,name:"Cakes"}],sizes:[{id:1,name:"XS"},{id:2,name:"S"},{id:3,name:"M"},{id:4,name:"L"},{id:5,name:"XL"},{id:6,name:"EAT"}],cities:[{id:1,name:"Астана"},{id:2,name:"Алматы"}],city_id:null,type:null,size:null,name:null,phone:null,whatsapp:null,day:null,course:null,diet:null,time1_start:null,time2_start:null,time1_end:null,time2_end:null,yaddress1:null,yaddress2:null,address1:null,address2:null,logistic:null,timeModal1:!1,timeModal2:!1,timeModal3:!1,timeModal4:!1,errors:[]}},computed:{isEatFit:function(){return 1===this.type||2===this.type||3===this.type},method:function(){return this.isEdit?"PATCH":"POST"},action_link:function(){return this.isEdit?this.link+this.id:this.link}},methods:{fetchOrder:function(e){var t,s=this;return(t=r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,axios.get("/api/order/"+e).then((function(e){if(e.data.status){var t=e.data.order;if(s.type=t.type,s.city_id=t.city_id,s.size=t.size,s.name=t.name,s.phone=t.phone,s.whatsapp=t.whatsapp,s.day=t.day,s.course=t.course,s.diet=t.diet,s.yaddress1=t.yaddress1,s.address1=t.address1,s.logistic=t.logistic,null!=t.time1){var a=t.time1.split("-");s.time1_start=a[0],s.time1_end=a[1]}if(s.yaddress2=t.yaddress2,s.address2=t.address2,null!=t.time2){var r=t.time2.split("-");s.time2_start=r[0],s.time2_end=r[1]}}else s.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:e.data.status?"green":"error",type:e.data.status?"success":"error"})})).catch((function(e){console.log(e)}));case 4:case"end":return t.stop()}}),t)})),function(){var e=this,s=arguments;return new Promise((function(a,r){var n=t.apply(e,s);function l(e){i(n,a,r,l,o,"next",e)}function o(e){i(n,a,r,l,o,"throw",e)}l(void 0)}))})()},close:function(){this.name=null,this.city_id=null,this.phone=null,this.whatsapp=null,this.type=null,this.size=null,this.day=null,this.course=null,this.yaddress1=null,this.yaddress2=null,this.address1=null,this.address2=null,this.logistic=null,this.time1_start=null,this.time2_start=null,this.time1_end=null,this.time2_end=null,this.errors=[],this.$emit("close")},save:function(){var e=this,t={name:this.name,city_id:this.city_id,phone:this.phone,whatsapp:this.whatsapp,type:this.type,size:this.size,day:this.day,course:this.course,yaddress1:this.yaddress1,yaddress2:this.yaddress2,address1:this.address1,address2:this.address2,logistic:this.logistic,time1_start:this.time1_start,time2_start:this.time2_start,time1_end:this.time1_end,time2_end:this.time2_end};axios({method:this.method,url:this.action_link,data:t}).then((function(t){e.$emit("refresh"),e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:t.data.status?"green":"error",type:t.data.status?"success":"error"})})).catch((function(t){e.errors=t.response.data.errors}))},deactivate:function(){var e=this;axios.post("/api/order/"+this.id+"/deactivate").then((function(t){e.$emit("refresh"),e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:t.data.status?"green":"error",type:t.data.status?"success":"error"})})).catch((function(e){console.log(e)}))}}};var l=s(1900);function o(e,t,s,a,r,i,n){try{var l=e[i](n),o=l.value}catch(e){return void s(e)}l.done?t(o):Promise.resolve(o).then(a,r)}function c(e){return function(){var t=this,s=arguments;return new Promise((function(a,r){var i=e.apply(t,s);function n(e){o(i,a,r,n,l,"next",e)}function l(e){o(i,a,r,n,l,"throw",e)}n(void 0)}))}}const d={name:"Client",components:{CrudOrder:(0,l.Z)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-row",{attrs:{justify:"center"}},[s("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",[s("v-toolbar",{attrs:{dark:"",color:"primary"}},[s("v-btn",{attrs:{icon:"",dark:""},on:{click:e.close}},[s("v-icon",[e._v("mdi-close")])],1),e._v(" "),s("v-toolbar-title",[e._v("Заказ")])],1),e._v(" "),s("v-card-text",[s("v-container",{attrs:{fluid:""}},[s("v-row",[s("v-col",{attrs:{sm:"12",lg:"4"}},[s("h4",{staticClass:"mb-3"},[e._v("Анкета")]),e._v(" "),s("v-select",{attrs:{items:e.cities,"item-text":"name","item-value":"id",label:"Город",outlined:"","error-messages":e.errors.city_id},model:{value:e.city_id,callback:function(t){e.city_id=t},expression:"city_id"}}),e._v(" "),s("v-select",{attrs:{items:e.products,"item-text":"name","item-value":"id",label:"Продукт",outlined:"","error-messages":e.errors.type},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}}),e._v(" "),1===e.type||2===e.type?s("v-select",{attrs:{items:e.sizes,"item-text":"name","item-value":"id",label:"Размер",outlined:"","error-messages":e.errors.size},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}}):e._e(),e._v(" "),s("v-text-field",{attrs:{label:"Имя",outlined:"","error-messages":e.errors.name},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),s("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"+7 (###) ###-##-##",expression:"'+7 (###) ###-##-##'"}],attrs:{"error-messages":e.errors.phone,label:"Телефон",outlined:"","prepend-inner-icon":"mdi-cellphone"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._v(" "),s("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"+7 (###) ###-##-##",expression:"'+7 (###) ###-##-##'"}],attrs:{"error-messages":e.errors.whatsapp,label:"Whatsapp",outlined:"","prepend-inner-icon":"mdi-cellphone"},model:{value:e.whatsapp,callback:function(t){e.whatsapp=t},expression:"whatsapp"}}),e._v(" "),e.isEatFit?s("v-text-field",{attrs:{label:"День",type:"number",outlined:"","error-messages":e.errors.day},model:{value:e.day,callback:function(t){e.day=t},expression:"day"}}):e._e(),e._v(" "),e.isEatFit?s("v-text-field",{attrs:{label:"Курс",type:"number",outlined:"","error-messages":e.errors.course},model:{value:e.course,callback:function(t){e.course=t},expression:"course"}}):e._e(),e._v(" "),2===e.type?s("v-textarea",{attrs:{label:"Диета",outlined:"","error-messages":e.errors.diet},model:{value:e.diet,callback:function(t){e.diet=t},expression:"diet"}}):e._e()],1),e._v(" "),s("v-col",{attrs:{sm:"12",lg:"4"}},[s("h4",{staticClass:"mb-3"},[e._v("Адрес 1")]),e._v(" "),s("v-text-field",{attrs:{label:"Яндекс адрес",outlined:"","error-messages":e.errors.yaddress1},model:{value:e.yaddress1,callback:function(t){e.yaddress1=t},expression:"yaddress1"}}),e._v(" "),s("v-text-field",{attrs:{label:"Адрес",outlined:"","error-messages":e.errors.address1},model:{value:e.address1,callback:function(t){e.address1=t},expression:"address1"}}),e._v(" "),s("v-textarea",{attrs:{label:"Комментарий",outlined:"","error-messages":e.errors.logistic},model:{value:e.logistic,callback:function(t){e.logistic=t},expression:"logistic"}}),e._v(" "),s("v-dialog",{ref:"start",attrs:{"return-value":e.time1_start,persistent:"",width:"290px"},on:{"update:returnValue":function(t){e.time1_start=t},"update:return-value":function(t){e.time1_start=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[s("v-text-field",e._g(e._b({attrs:{label:"С",readonly:"",outlined:""},model:{value:e.time1_start,callback:function(t){e.time1_start=t},expression:"time1_start"}},"v-text-field",r,!1),a))]}}]),model:{value:e.timeModal1,callback:function(t){e.timeModal1=t},expression:"timeModal1"}},[e._v(" "),e.timeModal1?s("v-time-picker",{attrs:{"full-width":""},model:{value:e.time1_start,callback:function(t){e.time1_start=t},expression:"time1_start"}},[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.timeModal1=!1}}},[e._v("\n                                        Cancel\n                                    ")]),e._v(" "),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.start.save(e.time1_start)}}},[e._v("\n                                        OK\n                                    ")])],1):e._e()],1),e._v(" "),s("v-dialog",{ref:"end",attrs:{"return-value":e.time1_end,persistent:"",width:"290px"},on:{"update:returnValue":function(t){e.time1_end=t},"update:return-value":function(t){e.time1_end=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[s("v-text-field",e._g(e._b({attrs:{label:"До",readonly:"",outlined:""},model:{value:e.time1_end,callback:function(t){e.time1_end=t},expression:"time1_end"}},"v-text-field",r,!1),a))]}}]),model:{value:e.timeModal2,callback:function(t){e.timeModal2=t},expression:"timeModal2"}},[e._v(" "),e.timeModal2?s("v-time-picker",{attrs:{"full-width":""},model:{value:e.time1_end,callback:function(t){e.time1_end=t},expression:"time1_end"}},[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.timeModal2=!1}}},[e._v("\n                                        Cancel\n                                    ")]),e._v(" "),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.end.save(e.time1_end)}}},[e._v("\n                                        OK\n                                    ")])],1):e._e()],1)],1),e._v(" "),e.isEatFit?s("v-col",{attrs:{sm:"12",lg:"4"}},[s("h4",{staticClass:"mb-3"},[e._v("Адрес 2")]),e._v(" "),s("v-text-field",{attrs:{label:"Яндекс адрес",outlined:"","error-messages":e.errors.yaddress2},model:{value:e.yaddress2,callback:function(t){e.yaddress2=t},expression:"yaddress2"}}),e._v(" "),s("v-text-field",{attrs:{label:"Адрес",outlined:"","error-messages":e.errors.address2},model:{value:e.address2,callback:function(t){e.address2=t},expression:"address2"}}),e._v(" "),s("v-dialog",{ref:"start2",attrs:{"return-value":e.time2_start,persistent:"",width:"290px"},on:{"update:returnValue":function(t){e.time2_start=t},"update:return-value":function(t){e.time2_start=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[s("v-text-field",e._g(e._b({attrs:{label:"С",readonly:"",outlined:""},model:{value:e.time2_start,callback:function(t){e.time2_start=t},expression:"time2_start"}},"v-text-field",r,!1),a))]}}],null,!1,503019722),model:{value:e.timeModal3,callback:function(t){e.timeModal3=t},expression:"timeModal3"}},[e._v(" "),e.timeModal3?s("v-time-picker",{attrs:{"full-width":""},model:{value:e.time2_start,callback:function(t){e.time2_start=t},expression:"time2_start"}},[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.timeModal3=!1}}},[e._v("\n                                        Cancel\n                                    ")]),e._v(" "),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.start2.save(e.time2_start)}}},[e._v("\n                                        OK\n                                    ")])],1):e._e()],1),e._v(" "),s("v-dialog",{ref:"end2",attrs:{"return-value":e.time2_end,persistent:"",width:"290px"},on:{"update:returnValue":function(t){e.time2_end=t},"update:return-value":function(t){e.time2_end=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[s("v-text-field",e._g(e._b({attrs:{label:"До",readonly:"",outlined:""},model:{value:e.time2_end,callback:function(t){e.time2_end=t},expression:"time2_end"}},"v-text-field",r,!1),a))]}}],null,!1,4125835918),model:{value:e.timeModal4,callback:function(t){e.timeModal4=t},expression:"timeModal4"}},[e._v(" "),e.timeModal4?s("v-time-picker",{attrs:{"full-width":""},model:{value:e.time2_end,callback:function(t){e.time2_end=t},expression:"time2_end"}},[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.timeModal4=!1}}},[e._v("\n                                        Cancel\n                                    ")]),e._v(" "),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.end2.save(e.time2_end)}}},[e._v("\n                                        OK\n                                    ")])],1):e._e()],1)],1):e._e()],1),e._v(" "),s("v-row",[s("v-col",[s("v-btn",{attrs:{color:"primary"},on:{click:e.save}},[e._v("\n                                Сохранить\n                            ")])],1),e._v(" "),e.id?s("v-col",[s("v-btn",{attrs:{color:"red",dark:""},on:{click:e.deactivate}},[e._v("\n                                Деактивировать\n                            ")])],1):e._e()],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports},data:function(){return{orders:[],lite:[],select:[],detox:0,go:0,cakes:0,week:"",is_weekend:!1,itemsPerPage:300,search:"",headers:[{text:"#",value:"index"},{text:"Имя",value:"name"},{text:"Тэг",value:"tag"},{text:"Время",value:"time"},{text:"Yandex",value:"yaddress"},{text:"Курьер",value:"courier_name"},{text:"Geo",value:"geo"},{text:"Gap",value:"interval"}],amo_loading:!1,loading:!0,dialog:!1,link:"/api/orders/",id:null,is_edit:!1}},mounted:function(){this.getWeek(),this.getLeads(),this.getOrderStat()},computed:{isActive:function(){var e=(new Date).getHours();return e<5||e>=10}},methods:{getLeads:function(){var e=this;return c(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,axios.get("/api/orders").then((function(t){e.orders=t.data})).catch((function(t){e.loading=!1,e.$store.dispatch("showAlert",{isVisible:!0,msg:t.message,color:"error",type:"error"})})).finally((function(){return e.loading=!1}));case 3:case"end":return t.stop()}}),t)})))()},fetchLeads:function(){var e=this;return c(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.amo_loading=!0,t.next=3,axios.get("/api/orders/eat-fit").then((function(t){t.data.status?e.getLeads():e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:"error",type:"error"})})).catch((function(t){e.$store.dispatch("showAlert",{isVisible:!0,msg:t.message,color:"error",type:"error"})})).finally((function(){return e.amo_loading=!1}));case 3:case"end":return t.stop()}}),t)})))()},getOrderStat:function(){var e=this;return c(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/api/orders/stat").then((function(t){e.lite=t.data.lite,e.select=t.data.select,e.detox=t.data.detox,e.go=t.data.go,e.cakes=t.data.cakes})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})))()},geocode:function(){var e=this;return c(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.amo_loading=!0,t.next=3,axios.get("/api/map/geocode").then((function(t){e.getLeads(),e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.message,color:t.status?"green":"error",type:t.status?"success":"error"})})).catch((function(t){e.$store.dispatch("showAlert",{isVisible:!0,msg:t.message,color:"error",type:"error"})})).finally((function(){return e.amo_loading=!1}));case 3:case"end":return t.stop()}}),t)})))()},setInterval:function(){var e=this;return c(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.amo_loading=!0,t.next=3,axios.get("/api/map/interval").then((function(t){e.getLeads(),e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.message,color:t.status?"green":"error",type:t.status?"success":"error"})})).catch((function(t){e.$store.dispatch("showAlert",{isVisible:!0,msg:t.message,color:"error",type:"error"})})).finally((function(){return e.amo_loading=!1}));case 3:case"end":return t.stop()}}),t)})))()},getWeek:function(){var e=this;axios.get("/api/week/get").then((function(t){e.is_weekend=t.data.is_weekend,e.week=e.is_weekend?"Выходные":"Будни"})).catch((function(t){e.$store.dispatch("showAlert",{isVisible:!0,msg:t.message,color:"error",type:"error"})}))},setWeek:function(){var e=this;axios.post("/api/week/set").then((function(){e.getWeek(),e.getLeads()})).catch((function(t){e.$store.dispatch("showAlert",{isVisible:!0,msg:t.message,color:"error",type:"error"})}))},closeDialog:function(){this.dialog=!1},refresh:function(){this.closeDialog(),this.getLeads()},openOrder:function(e){this.id=e.id,this.is_edit=!0,this.$refs.child.fetchOrder(e.id),this.dialog=!0}}};const u=(0,l.Z)(d,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-row",[e.isActive?s("v-btn",{staticClass:"ma-3",attrs:{loading:e.amo_loading,disabled:e.amo_loading,color:"primary"},on:{click:e.fetchLeads}},[e._v("\n            Получить данные\n        ")]):e._e(),e._v(" "),s("v-btn",{staticClass:"ma-3",attrs:{loading:e.amo_loading,disabled:e.amo_loading,color:"primary"},on:{click:e.geocode}},[e._v("\n            Геокодировать\n        ")]),e._v(" "),s("v-btn",{staticClass:"ma-3",attrs:{loading:e.amo_loading,disabled:e.amo_loading,color:"primary"},on:{click:e.setInterval}},[e._v("\n            Интервал\n        ")]),e._v(" "),s("v-switch",{staticClass:"ma-3",attrs:{color:"primary",label:e.week},on:{change:e.setWeek},model:{value:e.is_weekend,callback:function(t){e.is_weekend=t},expression:"is_weekend"}})],1),e._v(" "),s("v-row",[s("v-col",{attrs:{cols:"12",md:"10"}},[s("v-card",[s("v-card-title",[s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Поиск","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),s("v-spacer"),e._v(" "),s("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(t){e.dialog=!0}}},[e._v("\n                        Добавить заказ\n                    ")])],1),e._v(" "),s("v-data-table",{attrs:{loading:e.loading,"loading-text":"Loading... Please wait",headers:e.headers,items:e.orders,"items-per-page":e.itemsPerPage,"item-key":"id",search:e.search,"hide-default-footer":""},on:{"click:row":e.openOrder},scopedSlots:e._u([{key:"item.index",fn:function(t){var s=t.index;return[e._v("\n                        "+e._s(s+1)+"\n                    ")]}},{key:"item.time",fn:function(t){var a=t.item;return[s("span",{class:a.time_old?"green--text":""},[e._v(e._s(a.time))]),e._v(" "),s("p",{staticClass:"red--text caption"},[e._v(e._s(a.time_old))])]}},{key:"item.yaddress",fn:function(t){var a=t.item;return[s("span",{class:a.yaddress_old?"green--text":""},[e._v(e._s(a.yaddress))]),e._v(" "),s("p",{staticClass:"red--text caption"},[e._v(e._s(a.yaddress_old))])]}},{key:"item.geo",fn:function(t){var a=t.item;return[s("v-chip",{attrs:{color:a.geo?"green":"red",label:"","x-small":"","text-color":"white"}},[e._v("geo")])]}},{key:"item.interval",fn:function(t){var a=t.item;return[s("v-chip",{attrs:{color:a.interval>0?"green":"red",label:"","x-small":"","text-color":"white"}},[e._v("\n                            "+e._s(a.interval)+"\n                        ")])]}}])})],1)],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"2"}},[s("v-card",{staticClass:"mb-5",attrs:{color:"#385F73",dark:""}},[s("v-card-title",{staticClass:"text-h5"},[e._v("\n                    Итого: "+e._s(e.orders.length)+"\n                ")])],1),e._v(" "),s("v-card",{staticClass:"mb-5"},[s("v-card-title",{staticClass:"text-h5"},[e._v("\n                    Lite: "+e._s(e.lite.total)+"\n                ")]),e._v(" "),s("v-card-text",[s("div",[s("v-chip",{staticClass:"ma-2",attrs:{label:""}},[e._v("\n                            XS: "+e._s(e.lite.xs)+"\n                        ")]),e._v(" "),s("v-chip",{staticClass:"ma-2",attrs:{label:""}},[e._v("\n                            S: "+e._s(e.lite.s)+"\n                        ")]),e._v(" "),s("v-chip",{staticClass:"ma-2",attrs:{label:""}},[e._v("\n                            M: "+e._s(e.lite.m)+"\n                        ")]),e._v(" "),s("v-chip",{staticClass:"ma-2",attrs:{label:""}},[e._v("\n                            L: "+e._s(e.lite.l)+"\n                        ")]),e._v(" "),s("v-chip",{staticClass:"ma-2",attrs:{label:""}},[e._v("\n                            XL: "+e._s(e.lite.xl)+"\n                        ")])],1)])],1),e._v(" "),s("v-card",{staticClass:"mb-5"},[s("v-card-title",{staticClass:"text-h5"},[e._v("\n                    Select: "+e._s(e.select.total)+"\n                ")]),e._v(" "),s("v-card-text",[s("div",[s("v-chip",{staticClass:"ma-2",attrs:{label:""}},[e._v("\n                            XS: "+e._s(e.select.xs)+"\n                        ")]),e._v(" "),s("v-chip",{staticClass:"ma-2",attrs:{label:""}},[e._v("\n                            S: "+e._s(e.select.s)+"\n                        ")]),e._v(" "),s("v-chip",{staticClass:"ma-2",attrs:{label:""}},[e._v("\n                            M: "+e._s(e.select.m)+"\n                        ")]),e._v(" "),s("v-chip",{staticClass:"ma-2",attrs:{label:""}},[e._v("\n                            L: "+e._s(e.select.l)+"\n                        ")]),e._v(" "),s("v-chip",{staticClass:"ma-2",attrs:{label:""}},[e._v("\n                            XL: "+e._s(e.select.xl)+"\n                        ")])],1)])],1),e._v(" "),s("v-card",{staticClass:"mb-5"},[s("v-card-title",{staticClass:"text-h5"},[e._v("\n                    Detox: "+e._s(e.detox)+"\n                ")])],1),e._v(" "),s("v-card",{staticClass:"mb-5"},[s("v-card-title",{staticClass:"text-h5"},[e._v("\n                    GO: "+e._s(e.go)+"\n                ")])],1),e._v(" "),s("v-card",[s("v-card-title",{staticClass:"text-h5"},[e._v("\n                    Cakes: "+e._s(e.cakes)+"\n                ")])],1)],1)],1),e._v(" "),s("CrudOrder",{ref:"child",attrs:{dialog:e.dialog,link:e.link,id:e.id,"is-edit":e.is_edit},on:{close:e.closeDialog,refresh:e.refresh}})],1)}),[],!1,null,null,null).exports}}]);