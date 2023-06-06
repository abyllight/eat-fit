"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[218],{6218:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});var n=a(9669),i=a.n(n);const s={name:"Payments",data:function(){return{dialog:!1,has_diff:!1,menu:!1,date:(new Date).toISOString().split("T")[0],items:[],item:{},types:[],payType:null,payLoading:!1,loading:!1}},created:function(){this.fetchItems()},computed:{total:function(){return this.items.reduce((function(t,e){return t+e.pay_fact}),0)},totalDiff:function(){return this.items.reduce((function(t,e){return t+e.fact_diff}),0)}},methods:{fetchItems:function(){var t=this;this.menu=!1,i().get("/api/payments",{params:{date:this.date,pay_type:this.payType,has_diff:this.has_diff}}).then((function(e){t.types=e.data.types,t.items=e.data.items})).catch((function(t){console.log(t)}))},fetchLeads:function(){var t=this;this.loading=!0,i().get("/api/payments/leads").then((function(){t.fetchItems()})).catch((function(t){console.log(t)})).finally((function(){t.loading=!1}))},showDetails:function(t){this.item=t,this.dialog=!0},closeDialog:function(){this.item={},this.dialog=!1},setPayFact:function(){var t=this;this.payLoading=!0,i().post("/api/payments",{id:this.item.id,pay_fact:this.item.pay_fact,pay_type:this.item.pay_type}).then((function(){t.closeDialog(),t.fetchItems()})).catch((function(t){console.log(t)})).finally((function(){t.payLoading=!1}))}}};const l=(0,a(1900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",[a("div",{staticClass:"d-flex justify-space-between align-start"},[a("v-btn",{attrs:{color:"primary",loading:t.loading,disabled:t.loading},on:{click:t.fetchLeads}},[t._v("Получить сделки")]),t._v(" "),a("div",[a("h4",{staticClass:"mb-0"},[t._v(t._s(t.totalDiff)+"тг")]),t._v(" "),a("v-checkbox",{staticClass:"mt-0",attrs:{label:"Сверхоплаты"},on:{click:t.fetchItems},model:{value:t.has_diff,callback:function(e){t.has_diff=e},expression:"has_diff"}})],1)],1)])],1),t._v(" "),a("v-row",[a("v-col",[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"Выберите дату","prepend-icon":"mdi-calendar",readonly:"",outlined:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",i,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),a("v-date-picker",{on:{input:function(e){t.menu=!1},change:t.fetchItems},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),t._v(" "),a("v-col",[a("v-select",{attrs:{items:t.types,"item-value":"id","item-text":"name",label:"Тип оплаты",outlined:"",clearable:""},on:{change:t.fetchItems},model:{value:t.payType,callback:function(e){t.payType=e},expression:"payType"}})],1)],1),t._v(" "),a("v-row",[a("v-col",[a("h2",[t._v(t._s(t.total))]),t._v(" "),a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("\n                                #\n                            ")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("\n                                Имя\n                            ")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("\n                                Курс\n                            ")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("\n                                Фактический оплачено\n                            ")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("\n                                Тип оплаты\n                            ")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("\n                                Оплата\n                            ")])])]),t._v(" "),a("tbody",[t._l(t.items,(function(e,n){return[a("tr",{class:e.fact>e.course?"light-green lighten-4":"",on:{click:function(a){return t.showDetails(e)}}},[a("td",[t._v(t._s(n+1))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.course))]),t._v(" "),a("td",[t._v(t._s(e.fact))]),t._v(" "),a("td",[t._v(t._s(e.pay_type))]),t._v(" "),a("td",[t._v(t._s(e.pay_fact))])])]}))],2)]},proxy:!0}])})],1)],1),t._v(" "),a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{disabled:t.payLoading,loading:t.payLoading}},[a("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v("\n                    "+t._s(t.item.name)+"\n                ")]),t._v(" "),a("v-card-text",[a("v-select",{staticClass:"mt-5",attrs:{items:t.types,"item-value":"id","item-text":"name",label:"Тип оплаты",outlined:"",clearable:""},model:{value:t.item.pay_type,callback:function(e){t.$set(t.item,"pay_type",e)},expression:"item.pay_type"}}),t._v(" "),a("v-text-field",{attrs:{type:"number",label:"Фактический оплачено",outlined:"",clearable:""},model:{value:t.item.pay_fact,callback:function(e){t.$set(t.item,"pay_fact",e)},expression:"item.pay_fact"}})],1),t._v(" "),a("v-divider"),t._v(" "),a("v-card-actions",[a("v-btn",{attrs:{color:"red",text:""},on:{click:t.closeDialog}},[t._v("\n                        Закрыть\n                    ")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.setPayFact}},[t._v("\n                        Сохранить\n                    ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);