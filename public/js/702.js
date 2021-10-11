"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[702],{2702:(e,r,t)=>{t.r(r),t.d(r,{default:()=>i});var s=t(7757),n=t.n(s);function o(e,r,t,s,n,o,a){try{var i=e[o](a),l=i.value}catch(e){return void t(e)}i.done?r(l):Promise.resolve(l).then(s,n)}const a={name:"AddUser",data:function(){return{name:"",phone:"",password:"",roles:[],items:[],errors:[]}},mounted:function(){this.fetchRoles()},methods:{fetchRoles:function(){var e,r=this;return(e=n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/roles").then((function(e){var t;r.items=null!==(t=e.data)&&void 0!==t?t:[]})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})),function(){var r=this,t=arguments;return new Promise((function(s,n){var a=e.apply(r,t);function i(e){o(a,s,n,i,l,"next",e)}function l(e){o(a,s,n,i,l,"throw",e)}i(void 0)}))})()},create:function(){var e=this,r=this.getPhone();axios.post("api/users",{name:this.name,phone:r,password:this.password,roles:this.roles}).then((function(r){e.$store.dispatch("showAlert",{isVisible:!0,msg:r.data.msg,color:r.data.status?"green":"error",type:r.data.status?"success":"error"}),e.$router.push("/users")})).catch((function(r){e.errors=r.response.data.errors}))},getPhone:function(){return this.phone.replace(/[^0-9]/g,"")}}};const i=(0,t(1900).Z)(a,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-row",{attrs:{align:"center",justify:"center"}},[t("v-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"6"}},[t("v-card",[t("v-card-title",[e._v("\n                Создать пользователя\n            ")]),e._v(" "),t("v-card-text",[t("v-text-field",{attrs:{"error-messages":e.errors.name,label:"Имя",outlined:"",required:""},model:{value:e.name,callback:function(r){e.name=r},expression:"name"}}),e._v(" "),t("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"+7 (###) ###-##-##",expression:"'+7 (###) ###-##-##'"}],attrs:{"error-messages":e.errors.phone,outlined:"",label:"Телефон",required:""},model:{value:e.phone,callback:function(r){e.phone=r},expression:"phone"}}),e._v(" "),t("v-select",{attrs:{items:e.items,"item-text":"name","item-value":"id","error-messages":e.errors.roles,outlined:"",chips:"",label:"Роли",multiple:""},model:{value:e.roles,callback:function(r){e.roles=r},expression:"roles"}}),e._v(" "),t("v-text-field",{attrs:{"error-messages":e.errors.password,label:"Пароль",outlined:"",required:""},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}}),e._v(" "),t("v-btn",{attrs:{color:"primary",type:"submit"},on:{click:e.create}},[e._v("\n                    Создать\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);