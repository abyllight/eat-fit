"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[712],{9712:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var o=n(7757),r=n.n(o),c=n(9669),u=n.n(c);function a(e,t,n,o,r,c,u){try{var a=e[c](u),s=a.value}catch(e){return void n(e)}a.done?t(s):Promise.resolve(s).then(o,r)}const s={name:"Dashboard",mounted:function(){this.me()},methods:{me:function(){return(e=r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null==(t=localStorage.getItem("v_device"))&&(t="123",window.localStorage.setItem("v_device",t)),e.next=4,u().get("/api/customer/"+t).then((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,r){var c=e.apply(t,n);function u(e){a(c,o,r,u,s,"next",e)}function s(e){a(c,o,r,u,s,"throw",e)}u(void 0)}))})();var e},add:function(){u().post("/api/cart-item/add",{customer_id:1,product_id:3}).then((function(e){console.log(e)}))}}};const i=(0,n(1900).Z)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Здравствуй, "+e._s(this.$store.state.auth.user.name)+"!")])])}),[],!1,null,null,null).exports}}]);