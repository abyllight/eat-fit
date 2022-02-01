"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[936],{7936:(e,r,s)=>{s.r(r),s.d(r,{default:()=>i});var o=s(7757),n=s.n(o);function t(e,r,s,o,n,t,a){try{var i=e[t](a),c=i.value}catch(e){return void s(e)}i.done?r(c):Promise.resolve(c).then(o,n)}const a={name:"Login",data:function(){return{phone:"",password:"",showPass:!1,loading:!1,errors:[]}},methods:{submit:function(){var e,r=this;return(e=n().mark((function e(){var s;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.loading=!0,s=r.getPhone(),axios.get("/csrf-cookie").then((function(){axios.post("/api/login",{phone:s,password:r.password}).then((function(e){r.loading=!1,e.data.status?(r.$store.dispatch("auth/login",e.data.user),r.$router.push({name:"dashboard"})):r.errors=e.data.errors})).catch((function(e){r.loading=!1,r.errors=e.response.data.errors}))})).catch((function(){r.$store.dispatch("showAlert",{isVisible:!0,msg:"CSRF error",color:"error",type:"error"})}));case 3:case"end":return e.stop()}}),e)})),function(){var r=this,s=arguments;return new Promise((function(o,n){var a=e.apply(r,s);function i(e){t(a,o,n,i,c,"next",e)}function c(e){t(a,o,n,i,c,"throw",e)}i(void 0)}))})()},getPhone:function(){return this.phone.replace(/[^0-9]/g,"")}}};const i=(0,s(1900).Z)(a,(function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",[s("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[s("v-card-title",[e._v("Логин")]),e._v(" "),s("form",{staticClass:"pa-4"},[s("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"+7 (###) ###-##-##",expression:"'+7 (###) ###-##-##'"}],attrs:{"error-messages":e.errors.phone,label:"Телефон",outlined:"","prepend-inner-icon":"mdi-cellphone"},model:{value:e.phone,callback:function(r){e.phone=r},expression:"phone"}}),e._v(" "),s("v-text-field",{attrs:{"error-messages":e.errors.password,"append-icon":e.showPass?"mdi-eye":"mdi-eye-off",type:e.showPass?"text":"password",label:"Пароль",counter:"",outlined:"","prepend-inner-icon":"mdi-lock"},on:{"click:append":function(r){e.showPass=!e.showPass}},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}}),e._v(" "),s("v-btn",{staticClass:"mt-4",attrs:{loading:e.loading,disabled:e.loading,color:"primary"},on:{click:e.submit}},[e._v("\n                Войти\n            ")])],1)],1)],1)}),[],!1,null,null,null).exports}}]);