"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[584],{9584:(n,t,e)=>{e.r(t),e.d(t,{default:()=>s});var o=e(7757),c=e.n(o),r=e(9669),a=e.n(r);function i(n,t,e,o,c,r,a){try{var i=n[r](a),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(o,c)}const u={name:"Dashboard",mounted:function(){this.getBrand()},methods:{getBrand:function(){a().get("/api/brand/2").then((function(n){console.log(n)}))},me:function(){return(n=c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null==(t=localStorage.getItem("v_device"))&&(t="123",window.localStorage.setItem("v_device",t)),n.next=4,a().get("/api/customer/"+t).then((function(n){console.log(n)}));case 4:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(o,c){var r=n.apply(t,e);function a(n){i(r,o,c,a,u,"next",n)}function u(n){i(r,o,c,a,u,"throw",n)}a(void 0)}))})();var n},add:function(){a().post("/api/cart-item/add",{customer_id:1,product_id:3}).then((function(n){console.log(n)}))},getCartById:function(){a().get("/api/cart/df444f88-a4fd-11ec-8c7e-1e009a1ab465").then((function(n){console.log(n)}))},increment:function(){a().post("/api/cart-item/increment/",{id:"255cc886-a500-11ec-a507-1e009a1ab465"}).then((function(n){console.log(n)}))}}};const s=(0,e(1900).Z)(u,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("h2",[n._v("Здравствуй, "+n._s(this.$store.state.auth.user.name)+"!")])])}),[],!1,null,null,null).exports}}]);