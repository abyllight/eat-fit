"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[844],{5844:(t,e,a)=>{a.r(e),a.d(e,{default:()=>o});const n={name:"MyOrders",data:function(){return{orders:[],dialog:!1,lead:{},delivered:"0",comment:"",amount:null,payment_type:"Без оплаты",types:[]}},created:function(){this.fetchOrders()},computed:{isActive:function(){var t=(new Date).getHours();return t>=5&&t<=10}},methods:{fetchOrders:function(){var t=this;axios.get("/api/my-orders").then((function(e){e.data.status&&(t.orders=e.data.data,t.types=e.data.payment_types)})).catch((function(t){console.log(t)}))},notify:function(t){var e=this;axios.post("/api/my-orders/notify",{order_id:t}).then((function(t){e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.msg,color:t.status?"green":"error",type:t.status?"success":"error"}),e.fetchOrders()})).catch((function(t){console.log(t)}))},openDialog:function(t){this.lead=t,this.dialog=!0},report:function(){var t=this;axios.post("/api/my-orders/report",{status:this.delivered,order_id:this.lead.id,comment:this.comment,amount:this.amount,payment_type:this.payment_type}).then((function(e){t.delivered="0",t.comment="",t.amount=null,t.payment_type="Без оплаты",t.dialog=!1,t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:e.status?"green":"error",type:e.status?"success":"error"}),t.fetchOrders()})).catch((function(t){console.log(t)}))},closeDialog:function(){this.dialog=!1,this.delivered="0",this.comment="",this.amount=null,this.payment_type="Без оплаты"}}};const o=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[t._l(t.orders,(function(e,n){return a("v-col",{key:e.id,attrs:{cols:"12",sm:"4"}},[a("v-card",[a("div",{staticClass:"d-flex align-start justify-space-between"},[a("div",[a("v-card-title",[t._v(t._s(e.name))]),t._v(" "),a("v-card-subtitle",[a("v-chip",{attrs:{label:"",color:e.color,small:""}},[t._v("\n                            "+t._s(e.tag)+"\n                        ")]),t._v(" "),a("v-chip",{attrs:{label:"",color:e.color,small:""}},[t._v("\n                            "+t._s(e.time)+"\n                        ")])],1)],1),t._v(" "),a("div",[a("v-card-title",[t._v(t._s(n+1))])],1)]),t._v(" "),a("v-card-text",[t._v("\n                "+t._s(e.logistic)+"\n            ")]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",[a("strong",[t._v(t._s(e.address))])]),t._v(" "),a("v-card-actions",[a("v-btn",{attrs:{href:"tel:"+e.phone,small:""}},[t._v("\n                    Тел\n                ")]),t._v(" "),a("v-btn",{attrs:{href:"https://api.whatsapp.com/send?phone="+e.whatsapp+"&text="+encodeURIComponent("Здравствуйте! Это, EAT&FIT "),small:"",target:"_blank"}},[t._v("\n                    Ватсап\n                ")]),t._v(" "),a("v-btn",{attrs:{href:"yandexmaps://maps.yandex.ru/?rtext=~"+e.lat+","+e.lng,small:""}},[t._v("\n                    Yndx\n                ")]),t._v(" "),a("v-btn",{attrs:{href:"dgis://2gis.ru/routeSearch/rsType/car/to/"+e.lng+","+e.lat,small:""}},[t._v("\n                    2GIS\n                ")])],1),t._v(" "),a("v-card-actions",[t.isActive?a("v-btn",{staticClass:"white--text",attrs:{color:"blue-grey",small:"",disabled:e.is_notified},on:{click:function(a){return t.notify(e.id)}}},[t._v("\n                    Еду\n                    "),e.is_notified?a("v-icon",{attrs:{right:""}},[t._v("\n                        mdi-check\n                    ")]):t._e()],1):t._e(),t._v(" "),a("v-btn",{staticClass:"white--text",attrs:{color:"blue-grey",small:""},on:{click:function(a){return a.stopPropagation(),t.openDialog(e)}}},[t._v("\n                    Отчет\n                    "),e.is_reported?a("v-icon",{attrs:{right:""}},[t._v("\n                        mdi-check\n                    ")]):t._e()],1)],1)],1)],1)})),t._v(" "),a("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"600"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{color:"primary",dark:""}},[t._v("\n                Отчет "+t._s(t.lead.name)+"\n                "),a("v-spacer"),t._v(" "),a("v-toolbar-items",[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1)],1),t._v(" "),a("v-card-text",[a("v-radio-group",{attrs:{row:""},model:{value:t.delivered,callback:function(e){t.delivered=e},expression:"delivered"}},[a("v-radio",{staticClass:"mb-1",attrs:{label:"Доставлено",value:"0"}}),t._v(" "),a("v-radio",{attrs:{label:"Не доставлено",value:"1"}})],1),t._v(" "),a("v-textarea",{attrs:{outlined:"",label:"Комментарий"},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}}),t._v(" "),"0"===t.delivered?a("v-radio-group",{attrs:{row:""},model:{value:t.payment_type,callback:function(e){t.payment_type=e},expression:"payment_type"}},t._l(t.types,(function(t){return a("v-radio",{key:t.name,staticClass:"mb-2",attrs:{label:t.name,value:t.name}})})),1):t._e(),t._v(" "),"Без оплаты"!==t.payment_type?a("v-text-field",{attrs:{label:"Сумма",type:"number",outlined:""},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}):t._e()],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDialog}},[t._v("\n                    Закрыть\n                ")]),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.report}},[t._v("\n                    Отправить\n                ")])],1)],1)],1)],2)}),[],!1,null,null,null).exports}}]);