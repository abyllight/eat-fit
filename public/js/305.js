"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[305],{4305:(t,n,a)=>{a.r(n),a.d(n,{default:()=>s});const i={name:"Management",data:function(){return{plus:null,saturday:null,trial:null,work:null,select:null,plus_loading:!1,saturday_loading:!1,trial_loading:!1,work_loading:!1,select_loading:!1,prompt:!1,type:1,link:"/api/management/plus-one"}},mounted:function(){this.index()},methods:{index:function(){var t=this;axios.get("/api/management").then((function(n){t.plus=n.data.plus,t.trial=n.data.trial,t.work=n.data.work,t.select=n.data.select})).catch((function(t){console.log(t)}))},doAction:function(){var t=this;this.prompt=!1,this.plus=!0,this.trial=!0,this.work=!0,this.select=!0,this.saturday=!0,axios.post(this.link).then((function(n){t.$store.dispatch("showAlert",{isVisible:!0,msg:n.data.msg,color:"success",type:"success"}),location.reload()})).catch((function(t){console.log(t)}))},plusOne:function(){this.link="/api/management/plus-one",this.type=1,this.prompt=!0,this.plus_loading=!0},plusOneSaturday:function(){this.link="/api/management/plus-one-saturday",this.type=4,this.prompt=!0,this.saturday_loading=!0},shiftTrial:function(){this.link="/api/management/trial",this.type=2,this.prompt=!0,this.trial_loading=!0},shiftWork:function(){this.link="/api/management/work",this.type=3,this.prompt=!0,this.work_loading=!0},sendSelect:function(){this.link="/api/management/select",this.type=5,this.prompt=!0,this.select_loading=!0},close:function(){this.prompt=!1}}};const s=(0,a(1900).Z)(i,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("v-row",[a("v-col",[a("v-btn",{staticClass:"mr-10",attrs:{disabled:t.plus,color:"green",dark:!t.plus,loading:t.plus_loading},on:{click:t.plusOne}},[t._v("\n                +1\n                "),t.plus?a("v-icon",{attrs:{right:"",dark:""}},[t._v("\n                    mdi-check\n                ")]):t._e()],1)],1),t._v(" "),a("v-col",[a("v-btn",{staticClass:"mr-10",attrs:{disabled:t.saturday,color:"green",dark:!t.saturday,loading:t.saturday_loading},on:{click:t.plusOneSaturday}},[t._v("\n                +1 суббота\n                "),t.saturday?a("v-icon",{attrs:{right:"",dark:""}},[t._v("\n                    mdi-check\n                ")]):t._e()],1)],1),t._v(" "),a("v-col",[a("v-btn",{staticClass:"mr-10",attrs:{disabled:t.trial,color:"indigo",dark:!t.trial,loading:t.trial_loading},on:{click:t.shiftTrial}},[t._v("\n                Закрытие смены(Пробный)\n                "),t.trial?a("v-icon",{attrs:{right:"",dark:""}},[t._v("\n                    mdi-check\n                ")]):t._e()],1)],1),t._v(" "),a("v-col",[a("v-btn",{attrs:{disabled:t.work,color:"indigo",dark:!t.work,loading:t.work_loading},on:{click:t.shiftWork}},[t._v("\n                Закрытие смены(В работе)\n                "),t.work?a("v-icon",{attrs:{right:"",dark:""}},[t._v("\n                    mdi-check\n                ")]):t._e()],1)],1)],1),t._v(" "),a("v-row",[a("v-col",[a("v-btn",{staticClass:"mr-10",attrs:{disabled:t.select,color:"green",dark:!t.select,loading:t.select_loading},on:{click:t.sendSelect}},[t._v("\n                Меню Селект\n                "),t.select?a("v-icon",{attrs:{right:"",dark:""}},[t._v("\n                    mdi-check\n                ")]):t._e()],1)],1)],1),t._v(" "),a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.prompt,callback:function(n){t.prompt=n},expression:"prompt"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v("Вы уверены, что хотите продолжить действие?")]),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Отмена")]),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.doAction}},[t._v("ДА")]),t._v(" "),a("v-spacer")],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);