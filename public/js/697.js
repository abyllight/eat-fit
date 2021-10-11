"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[697],{2697:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var a=s(7757),n=s.n(a);function i(t,e,s,a,n,i,r){try{var o=t[i](r),l=o.value}catch(t){return void s(t)}o.done?e(l):Promise.resolve(l).then(a,n)}function r(t){return function(){var e=this,s=arguments;return new Promise((function(a,n){var r=t.apply(e,s);function o(t){i(r,a,n,o,l,"next",t)}function l(t){i(r,a,n,o,l,"throw",t)}o(void 0)}))}}const o={name:"Client",data:function(){return{orders:[],lite:[],select:[],detox:0,go:0,week:"",is_weekend:!1,itemsPerPage:200,search:"",headers:[{text:"#",value:"index"},{text:"Имя",value:"name"},{text:"Тэг",value:"tag"},{text:"Время",value:"time"},{text:"Yandex",value:"yaddress"},{text:"Geo",value:"geo"},{text:"Int",value:"int"}],amo_loading:!1,loading:!0,dialog:!1,ingredients:[],blacklist:[],order:{},duty:{},t:[]}},mounted:function(){this.getWeek(),this.getLeads(),this.getIngredients()},methods:{getLeads:function(){var t=this;return r(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,axios.get("/api/orders").then((function(e){t.orders=e.data.orders,t.lite=e.data.lite,t.select=e.data.select,t.detox=e.data.detox,t.go=e.data.go})).catch((function(e){t.loading=!1,t.$store.dispatch("showAlert",{isVisible:!0,msg:e.message,color:"error",type:"error"})})).finally((function(){return t.loading=!1}));case 3:case"end":return e.stop()}}),e)})))()},fetchLeads:function(){var t=this;return r(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.amo_loading=!0,e.next=3,axios.get("/api/amo/leads").then((function(){t.getLeads()})).catch((function(e){t.$store.dispatch("showAlert",{isVisible:!0,msg:e.message,color:"error",type:"error"})})).finally((function(){return t.amo_loading=!1}));case 3:case"end":return e.stop()}}),e)})))()},showDetails:function(t){this.order=t,this.blacklist=t.blacklist.map((function(t){return t.id})),this.dialog=!0},geocode:function(){var t=this;return r(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.amo_loading=!0,e.next=3,axios.get("/api/map/geocode").then((function(e){t.getLeads(),t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.message,color:e.status?"green":"error",type:e.status?"success":"error"})})).catch((function(e){t.$store.dispatch("showAlert",{isVisible:!0,msg:e.message,color:"error",type:"error"})})).finally((function(){return t.amo_loading=!1}));case 3:case"end":return e.stop()}}),e)})))()},setInterval:function(){var t=this;return r(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.amo_loading=!0,e.next=3,axios.get("/api/map/interval").then((function(e){t.getLeads(),t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.message,color:e.status?"green":"error",type:e.status?"success":"error"})})).catch((function(e){t.$store.dispatch("showAlert",{isVisible:!0,msg:e.message,color:"error",type:"error"})})).finally((function(){return t.amo_loading=!1}));case 3:case"end":return e.stop()}}),e)})))()},getWeek:function(){var t=this;axios.get("/api/week/get").then((function(e){t.is_weekend=e.data.is_weekend,t.week=t.is_weekend?"Выходные":"Будни",t.duty=e.data.duty})).catch((function(e){t.$store.dispatch("showAlert",{isVisible:!0,msg:e.message,color:"error",type:"error"})}))},setWeek:function(){var t=this;axios.post("/api/week/set").then((function(){t.getWeek(),t.getLeads()})).catch((function(e){t.$store.dispatch("showAlert",{isVisible:!0,msg:e.message,color:"error",type:"error"})}))},getIngredients:function(){var t=this;return r(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/ingredients").then((function(e){t.ingredients=e.data.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},close:function(){this.order={},this.blacklist=[],this.dialog=!1},save:function(){var t=this;axios.post("/api/blacklist",{id:this.order.id,blacklist:this.blacklist}).then((function(e){t.close(),t.$store.dispatch("showAlert",{isVisible:!0,msg:e.data.msg,color:"green",type:"success"}),t.getLeads()})).catch((function(e){console.log(e),t.errors=e.response.data.errors}))}}};const l=(0,s(1900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-row",[s("v-btn",{staticClass:"ma-3",attrs:{loading:t.amo_loading,disabled:t.amo_loading,color:"primary"},on:{click:t.fetchLeads}},[t._v("\n            Получить данные\n        ")]),t._v(" "),s("v-btn",{staticClass:"ma-3",attrs:{loading:t.amo_loading,disabled:t.amo_loading,color:"primary"},on:{click:t.geocode}},[t._v("\n            Геокодировать\n        ")]),t._v(" "),s("v-btn",{staticClass:"ma-3",attrs:{loading:t.amo_loading,disabled:t.amo_loading,color:"primary"},on:{click:t.setInterval}},[t._v("\n            Интервал\n        ")]),t._v(" "),s("v-switch",{attrs:{color:"primary",label:t.week},on:{change:t.setWeek},model:{value:t.is_weekend,callback:function(e){t.is_weekend=e},expression:"is_weekend"}})],1),t._v(" "),s("v-row",[s("v-col",{attrs:{cols:"9",sm:"12",lg:"9"}},[s("v-card",[s("v-card-title",[s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Поиск","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),s("v-data-table",{attrs:{loading:t.loading,"loading-text":"Loading... Please wait",headers:t.headers,items:t.orders,"items-per-page":t.itemsPerPage,"item-key":"id",search:t.search,"hide-default-footer":""},on:{"click:row":t.showDetails},scopedSlots:t._u([{key:"item.index",fn:function(e){var s=e.index;return[t._v("\n                        "+t._s(s+1)+"\n                    ")]}},{key:"item.tag",fn:function(e){var a=e.item;return[s("span",{class:a.diet_color},[t._v(t._s(a.tag))])]}},{key:"item.time",fn:function(e){var a=e.item;return[s("span",{class:a.time_old?"green--text":""},[t._v(t._s(a.time))]),t._v(" "),s("p",{staticClass:"red--text caption"},[t._v(t._s(a.time_old))])]}},{key:"item.yaddress",fn:function(e){var a=e.item;return[s("span",{class:a.yaddress_old?"green--text":""},[t._v(t._s(a.yaddress))]),t._v(" "),s("p",{staticClass:"red--text caption"},[t._v(t._s(a.yaddress_old))])]}},{key:"item.geo",fn:function(e){var a=e.item;return[s("v-chip",{attrs:{color:a.lat?"green":"red",label:"","x-small":"","text-color":"white"}},[t._v("\n                            geo\n                        ")])]}},{key:"item.int",fn:function(e){var a=e.item;return[s("v-chip",{attrs:{color:a.interval>0?"green":"red",label:"","x-small":"","text-color":"white"}},[t._v("\n                            "+t._s(a.interval)+"\n                        ")])]}}])})],1)],1),t._v(" "),s("v-col",[s("v-card",{staticClass:"mb-5",attrs:{color:"#385F73",dark:""}},[s("v-card-title",{staticClass:"text-h5"},[t._v("\n                    Итого: "+t._s(t.orders.length)+"\n                ")])],1),t._v(" "),s("v-card",{staticClass:"mb-5"},[s("v-card-title",{staticClass:"text-h5"},[t._v("\n                    Lite: "+t._s(t.lite.total)+"\n                ")]),t._v(" "),s("v-card-text",[s("div",[s("v-chip",{staticClass:"ma-2",attrs:{label:""}},[t._v("\n                            XS: "+t._s(t.lite.xs)+"\n                        ")]),t._v(" "),s("v-chip",{staticClass:"ma-2",attrs:{label:""}},[t._v("\n                            S: "+t._s(t.lite.s)+"\n                        ")]),t._v(" "),s("v-chip",{staticClass:"ma-2",attrs:{label:""}},[t._v("\n                            M: "+t._s(t.lite.m)+"\n                        ")]),t._v(" "),s("v-chip",{staticClass:"ma-2",attrs:{label:""}},[t._v("\n                            L: "+t._s(t.lite.l)+"\n                        ")]),t._v(" "),s("v-chip",{staticClass:"ma-2",attrs:{label:""}},[t._v("\n                            XL: "+t._s(t.lite.xl)+"\n                        ")])],1)])],1),t._v(" "),s("v-card",{staticClass:"mb-5"},[s("v-card-title",{staticClass:"text-h5"},[t._v("\n                    Select: "+t._s(t.select.total)+"\n                ")]),t._v(" "),s("v-card-text",[s("div",[s("v-chip",{staticClass:"ma-2",attrs:{label:""}},[t._v("\n                            XS: "+t._s(t.select.xs)+"\n                        ")]),t._v(" "),s("v-chip",{staticClass:"ma-2",attrs:{label:""}},[t._v("\n                            S: "+t._s(t.select.s)+"\n                        ")]),t._v(" "),s("v-chip",{staticClass:"ma-2",attrs:{label:""}},[t._v("\n                            M: "+t._s(t.select.m)+"\n                        ")]),t._v(" "),s("v-chip",{staticClass:"ma-2",attrs:{label:""}},[t._v("\n                            L: "+t._s(t.select.l)+"\n                        ")]),t._v(" "),s("v-chip",{staticClass:"ma-2",attrs:{label:""}},[t._v("\n                            XL: "+t._s(t.select.xl)+"\n                        ")])],1)])],1),t._v(" "),s("v-card",{staticClass:"mb-5"},[s("v-card-title",{staticClass:"text-h5"},[t._v("\n                    Detox: "+t._s(t.detox)+"\n                ")])],1),t._v(" "),s("v-card",[s("v-card-title",{staticClass:"text-h5"},[t._v("\n                    GO: "+t._s(t.go)+"\n                ")])],1)],1)],1),t._v(" "),s("v-row",{attrs:{justify:"center"}},[s("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-toolbar",{attrs:{dark:"",color:"primary"}},[s("v-btn",{attrs:{icon:"",dark:""},on:{click:t.close}},[s("v-icon",[t._v("mdi-close")])],1),t._v(" "),s("v-toolbar-title",[t._v("Анкета")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-toolbar-items",[s("v-btn",{attrs:{dark:"",text:""},on:{click:t.save}},[t._v("\n                            Сохранить\n                        ")])],1)],1),t._v(" "),s("v-card-title",[s("span",{staticClass:"text-h5"},[t._v(" "+t._s(t.order.name)+" "+t._s(t.order.tag))])]),t._v(" "),s("v-card-text",[s("v-container",{attrs:{fluid:""}},[s("v-row",[s("v-col",{attrs:{sm:"12",lg:"6"}},[t.order.diet?s("v-card",{attrs:{color:"lime lighten-4"}},[s("v-card-text",[t._v("\n                                        "+t._s(t.order.diet)+"\n                                    ")])],1):t._e()],1),t._v(" "),s("v-col",[t.order.diet_old?s("v-card",{staticClass:"mt-4",attrs:{color:"red lighten-4"}},[s("v-card-text",[t._v("\n                                        "+t._s(t.order.diet_old)+"\n                                    ")])],1):t._e()],1)],1),t._v(" "),s("v-row",{staticClass:"mb-4"},[s("v-col",{attrs:{cols:"12"}},[s("h3",{staticClass:"mb-4"},[t._v("Черный список")]),t._v(" "),s("v-autocomplete",{attrs:{items:t.ingredients,"item-text":"name","item-value":"id",clearable:"",outlined:"","small-chips":"",label:"Ингредиенты",multiple:""},model:{value:t.blacklist,callback:function(e){t.blacklist=e},expression:"blacklist"}}),t._v(" "),s("v-btn",{attrs:{dark:""},on:{click:t.save}},[t._v("\n                                    Сохранить\n                                ")])],1)],1),t._v(" "),s("v-divider",{staticClass:"my-6"}),t._v(" "),s("h2",{staticClass:"mb-3"},[t._v(t._s(t.duty.name))]),t._v(" "),Object.keys(t.duty).length>0?s("v-row",{staticClass:"py-3"},[s("v-expansion-panels",[s("v-expansion-panel",[s("v-expansion-panel-header",[t._v("\n                                        Завтрак 1\n                                    ")]),t._v(" "),s("v-expansion-panel-content",[s("v-row",[s("v-col"),t._v(" "),s("v-col",[s("v-list",{attrs:{dense:""}},[s("v-list-item-group",{attrs:{multiple:""},model:{value:t.t,callback:function(e){t.t=e},expression:"t"}},t._l(t.duty.dishes[0].ingredients,(function(e,a){return s("v-list-item",{key:e.id,class:t.blacklist.includes(e.id)?"red lighten-3":"",attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(n){var i=n.active;return[s("v-list-item-action",[s("v-checkbox",{attrs:{"input-value":i}})],1),t._v(" "),s("v-list-item-title",[t._v(t._s(a+1)+". "+t._s(e.name))])]}}],null,!0)})})),1)],1)],1),t._v(" "),s("v-col")],1)],1)],1)],1)],1):t._e()],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);