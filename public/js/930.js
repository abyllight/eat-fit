"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[930],{5930:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a});var i=n(7757),o=n.n(i);function r(t,e,n,i,o,r,s){try{var a=t[r](s),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(i,o)}const s={name:"SelectRations",data:function(){return{rations:[],dialog:!1,item:{},ingredients:[]}},created:function(){this.generateCode(),this.getList()},methods:{generateCode:function(){axios.get("/api/select/generate-code").then((function(t){})).catch((function(t){console.log(t)}))},getList:function(){var t,e=this;return(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/api/select/rations").then((function(t){e.rations=t.data})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(i,o){var s=t.apply(e,n);function a(t){r(s,i,o,a,c,"next",t)}function c(t){r(s,i,o,a,c,"throw",t)}a(void 0)}))})()},openDetails:function(t){this.$router.push({name:"stickers",params:{id:t}})}}};const a=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[0===t.rations.length?n("p",[t._v("Пусто")]):n("v-row",t._l(t.rations,(function(e){return n("v-col",{key:e.ration,attrs:{cols:"12",sm:"4"}},[n("v-sheet",{staticClass:"d-flex flex-column align-center justify-center text-center pa-5",staticStyle:{cursor:"pointer"},attrs:{color:"blue-grey lighten-5",elevation:"2",rounded:""},on:{click:function(n){return t.openDetails(e.ration_id)}}},[n("h1",{staticClass:"display-1 mb-5"},[t._v(t._s(e.ration))]),t._v(" "),n("h1",{staticClass:"display-1 font-weight-bold"},[t._v(t._s(e.items.length))])])],1)})),1)],1)}),[],!1,null,null,null).exports}}]);