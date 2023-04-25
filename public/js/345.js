"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[345],{628:(t,e,a)=>{a.d(e,{Z:()=>s});var n=a(1519),o=a.n(n)()((function(t){return t[1]}));o.push([t.id,"table[data-v-0a95cf8a],td[data-v-0a95cf8a]{border:1px solid #000}",""]);const s=o},8345:(t,e,a)=>{a.r(e),a.d(e,{default:()=>u});var n=a(9669),o=a.n(n);const s={name:"Report",data:function(){return{max:null,date:null,menu:!1,couriers:[],fact:null,fact_loading:!1}},created:function(){this.getFact(),this.fetchReports()},methods:{fetchReports:function(){var t=this;o().get("/api/reports").then((function(e){t.max=e.data.max,t.date=e.data.max,t.couriers=e.data.reports})).catch((function(t){console.log(t)}))},filter:function(){var t=this;o().post("/api/reports/filter",{date:this.date}).then((function(e){t.menu=!1,t.couriers=e.data.reports})).catch((function(t){console.log(t)}))},excel:function(){o().get("/api/reports/export/"+this.date).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},getFact:function(){var t=this;o().get("/api/management/fact/").then((function(e){t.fact=e.data.fact})).catch((function(t){console.log(t)}))},payFact:function(){var t=this;this.fact=!0,this.fact_loading=!0,o().post("/api/management/fact").then((function(e){t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:"success",type:"success"}),location.reload()})).catch((function(t){console.log(t)})).finally((function(){t.fact=!1,t.fact_loading=!1}))}}};var c=a(3379),l=a.n(c),r=a(628),i={insert:"head",singleton:!1};l()(r.Z,i);r.Z.locals;const u=(0,a(1900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",lg:"3"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"Выберите дату","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),a("v-date-picker",{attrs:{max:t.max,"no-title":"",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("\n                        Cancel\n                    ")]),t._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.filter}},[t._v("\n                        OK\n                    ")])],1)],1)],1),t._v(" "),a("v-col",{attrs:{sm:"12",lg:"3"}},[a("a",{attrs:{type:"button",href:"/api/reports/export/"+t.date}},[a("v-btn",{attrs:{color:"primary"},on:{click:t.excel}},[t._v("\n                    Скачать отчет\n                ")])],1)]),t._v(" "),a("v-col",{staticClass:"d-flex justify-space-between",attrs:{sm:"12",lg:"6"}},[a("p"),t._v(" "),a("v-btn",{attrs:{color:"primary",disabled:t.fact,loading:t.fact_loading},on:{click:t.payFact}},[t._v("\n                фактический оплачено\n            ")])],1)],1),t._v(" "),t._l(t.couriers,(function(e){return a("v-row",{key:e.id},[a("v-col",[a("h3",[t._v(t._s(e[0]?e[0].courier+" - "+e.length:""))]),t._v(" "),a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("\n                                Имя\n                            ")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("\n                                Время\n                            ")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("\n                                Адрес\n                            ")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("\n                                Тип\n                            ")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("\n                                Сумма\n                            ")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("\n                                Статус отчета\n                            ")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("\n                                Время отчета\n                            ")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("\n                                Время Еду\n                            ")])])]),t._v(" "),a("tbody",[t._l(e,(function(e){return[a("tr",[a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.time))]),t._v(" "),a("td",[t._v(t._s(e.address))]),t._v(" "),a("td",[t._v(t._s(e.type))]),t._v(" "),a("td",[t._v(t._s(e.amount))]),t._v(" "),a("td",[a("v-chip",{attrs:{label:"",small:"",color:e.report_color}},[t._v("\n                                     "+t._s(e.report_status)+"\n                                 ")])],1),t._v(" "),a("td",[t._v("\n                                 "+t._s(e.reported_at)+"\n                                 "),a("v-chip",{attrs:{label:"",small:"",color:e.report_time_color}},[t._v("\n                                     "+t._s(e.report_time_status)+"\n                                 ")])],1),t._v(" "),a("td",[t._v("\n                                 "+t._s(e.notified_at)+"\n                                 "),a("v-chip",{attrs:{label:"",small:"",color:e.notification_color}},[t._v("\n                                     "+t._s(e.notification_status)+"\n                                 ")])],1)]),t._v(" "),a("tr",{staticClass:"grey lighten-3"},[a("td",{attrs:{colspan:"10"}},[t._v(t._s(e.comment))])])]}))],2)]},proxy:!0}],null,!0)})],1)],1)}))],2)}),[],!1,null,"0a95cf8a",null).exports}}]);