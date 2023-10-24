"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[605],{1605:(e,t,r)=>{r.r(t),r.d(t,{default:()=>I});var o=r(7757),n=r.n(o);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=t.options,o=t.callbacks,n=t.map,a=t.useObjectManager,i=t.objectManagerClusterize,s={},c=[];if(e.forEach((function(e){e.clusterName?s[e.clusterName]=s[e.clusterName]?[].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(s[e.clusterName]),[e]):[e]:c.push(e)})),Object.keys(s).forEach((function(e){var t=r[e]||{},c=o[e]||{},l=t.layout||"\n      <div>{{ properties.balloonContentHeader }}</div>\n      <div>{{ properties.balloonContentBody }}</div>\n      <div>{{ properties.balloonContentFooter }}</div>\n    ";t.clusterBalloonItemContentLayout=ymaps.templateLayoutFactory.createClass(l);var u=t.clusterBalloonLayout||t.clusterLayout;delete t.clusterBalloonLayout;var d=u?ymaps.templateLayoutFactory.createClass(u):t.clusterBalloonContentLayout||"cluster#balloonTwoColumns";t.clusterBalloonContentLayout=d;var p=t.clusterIconContentLayout;if(t.clusterIconContentLayout=p&&ymaps.templateLayoutFactory.createClass(p),a){var m=new ymaps.ObjectManager(Object.assign({clusterize:i},t));Object.keys(c).forEach((function(e){m.clusters.events.add(e,c[e])})),m.add(s[e]),n.geoObjects.add(m)}else{var h=new ymaps.Clusterer(t);Object.keys(c).forEach((function(e){h.events.add(e,c[e])})),t.createCluster&&(h.createCluster=t.createCluster),h.add(s[e]),n.geoObjects.add(h)}})),c.length){var l=a?new ymaps.ObjectManager({clusterize:!1}):new ymaps.GeoObjectCollection;c.forEach((function(e){return l.add(e)})),n.geoObjects.add(l)}}function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}function u(e){return(e.icon.color||"blue")+(e.icon.glyph?l(e.icon.glyph):e.icon.content?"Stretchy":"")}function d(e){return e.map((function(e){return Array.isArray(e)?d(e):+e}))}function p(e,t){var r=[];return function e(t,o){if(t===o)return!0;if(t instanceof Date&&o instanceof Date)return+t==+o;if("object"!==a(t)||"object"!==a(o))return!1;if(function(e,t){for(var o=r.length;o--;)if(!(r[o][0]!==e&&r[o][0]!==t||r[o][1]!==t&&r[o][1]!==e))return!0;return!1}(t,o))return!0;r.push([t,o]);var n=Object.keys(t),i=n.length;if(Object.keys(o).length!==i)return!1;for(;i--;)if(!e(t[n[i]],o[n[i]]))return!1;return!0}(e,t)}var m=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.events={},this.ymapReady=!1,this.scriptIsNotAttached=!0}var t,r;return t=e,(r=[{key:"$on",value:function(e,t){var r=this;return this.events[e]||(this.events[e]=[]),this.events[e].push(t),function(){r.events[e]=r.events[e].filter((function(e){return t!==e}))}}},{key:"$emit",value:function(e,t){var r=this.events[e];r&&r.forEach((function(e){return e(t)}))}}])&&i(t.prototype,r),e}()),h=["fullscreenControl","geolocationControl","routeEditor","rulerControl","searchControl","trafficControl","typeSelector","zoomControl","routeButtonControl","routePanelControl"];function f(e){return 0===e.filter((function(e){return![].concat(h,["default"]).includes(e)})).length}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,r){if(window.ymaps)return t();if(document.getElementById("vue-yandex-maps"))m.$on("scriptIsLoaded",t);else{var o=document.createElement("SCRIPT"),n=e.apiKey,a=void 0===n?"":n,i=e.lang,s=void 0===i?"ru_RU":i,c=e.version,l=void 0===c?"2.1":c,u=e.coordorder,d=void 0===u?"latlong":u,p=e.debug,h=void 0!==p&&p,f=e.enterprise,y=void 0!==f&&f,v=h?"debug":"release",b="lang=".concat(s).concat(a&&"&apikey=".concat(a),"&mode=").concat(v,"&coordorder=").concat(d),g="https://".concat(y?"enterprise.":"","api-maps.yandex.ru/").concat(l,"/?").concat(b);o.setAttribute("src",g),o.setAttribute("async",""),o.setAttribute("defer",""),o.setAttribute("id","vue-yandex-maps"),document.head.appendChild(o),m.scriptIsNotAttached=!1,o.onload=function(){ymaps.ready((function(){m.ymapReady=!0,m.$emit("scriptIsLoaded"),t()}))},o.onerror=r}}))}var v=m,b=["actionend","balloonclose","balloonopen","click","contextmenu","dblclick","destroy","hintclose","hintopen","optionschange","sizechange","typechange"],g={pluginOptions:{},provide:function(){var e,t,r=this,o=[],n=[];return{useObjectManager:this.useObjectManager,addMarker:this.addMarker,deleteMarker:function(t){r.myMap.geoObjects&&(o.push(t),e&&clearTimeout(e),e=setTimeout((function(){r.deleteMarkers(o),o=[]}),0))},compareValues:function(e){var o=e.newVal,a=e.oldVal,i=e.marker;p(o,a)||(n.push(i),t&&clearTimeout(t),t=setTimeout((function(){r.setMarkers(n),n=[]}),0))}}},data:function(){return{ymapId:"yandexMap".concat(Math.round(1e5*Math.random())),myMap:{},style:this.ymapClass?"":"width: 100%; height: 100%;",isReady:!1,debounce:null,markers:[]}},props:{coords:{type:Array,required:!0},zoom:{validator:function(e){return!Number.isNaN(e)},default:18},bounds:Array,clusterOptions:{type:Object,default:function(){return{}}},clusterCallbacks:{type:Object,default:function(){return{}}},behaviors:{type:Array,default:function(){return["default"]}},controls:{type:Array,default:function(){return["default"]},validator:function(e){return f(e)}},detailedControls:{type:Object,validator:function(e){return f(Object.keys(e))}},scrollZoom:{type:Boolean,default:!0},mapType:{type:String,default:"map",validator:function(e){return["map","satellite","hybrid"].includes(e)}},placemarks:{type:Array,default:function(){return[]}},useObjectManager:{type:Boolean,default:!1},objectManagerClusterize:{type:Boolean,default:!0},ymapClass:String,initWithoutMarkers:{type:Boolean,default:!0},debug:{type:Boolean,default:!1},settings:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}},showAllMarkers:Boolean,disablePan:Boolean},computed:{coordinates:function(){return this.coords.map((function(e){return+e}))}},methods:{init:function(){var e=this;window.ymaps&&ymaps.GeoObjectCollection&&(this.initWithoutMarkers||this.$slots.default||this.placemarks.length)&&(this.$emit("map-initialization-started"),this.myMap=new ymaps.Map(this.ymapId,{center:this.coordinates,zoom:+this.zoom,bounds:this.bounds,behaviors:this.behaviors,controls:this.controls,type:"yandex#".concat(this.mapType)},this.options),b.forEach((function(t){return e.myMap.events.add(t,(function(r){return e.$emit(t,r)}))})),this.myMap.events.add("boundschange",(function(t){var r=t.originalEvent,o=r.newZoom,n=r.newCenter,a=r.newBounds;e.$emit("boundschange",t),e.$emit("update:zoom",o),e.$emit("update:coords",n),e.$emit("update:bounds",a)})),this.detailedControls&&Object.keys(this.detailedControls).forEach((function(t){e.myMap.controls.remove(t),e.myMap.controls.add(t,e.detailedControls[t])})),!1===this.scrollZoom&&this.myMap.behaviors.disable("scrollZoom"),this.isReady=!0,this.$emit("map-was-initialized",this.myMap))},addMarker:function(e){var t=this;this.markers.push(e),this.debounce&&clearTimeout(this.debounce),this.debounce=setTimeout((function(){t.setMarkers(t.markers)}),0)},setMarkers:function(e){var t=this,r={options:this.clusterOptions,callbacks:this.clusterCallbacks,map:this.myMap,useObjectManager:this.useObjectManager,objectManagerClusterize:this.objectManagerClusterize};if(this.markers!==e){var o=e.map((function(e){return t.useObjectManager?e.id:e.properties.get("markerId")}));this.deleteMarkers(o),c(e,r),this.$emit("markers-was-change",o)}else c(e,r);this.markers=[],this.showAllMarkers&&this.myMap.setBounds(this.myMap.geoObjects.getBounds())},deleteMarkers:function(e){var t=this;this.myMap.geoObjects.each((function(r){var o=[];if(t.useObjectManager)r.remove(e);else{var n,a=function(t){var r=t.properties.get("markerId");e.includes(r)&&o.push(t)};if(r.each)r.each(a),n=r.getLength();else if(r.getGeoObjects){var i=r.getGeoObjects();i.forEach(a),n=i.length}0===n||n===o.length?t.myMap.geoObjects.remove(r):o.length&&o.forEach((function(e){return r.remove(e)}))}})),this.$emit("markers-was-delete",e)}},watch:{coordinates:function(e){this.disablePan?this.myMap.setCenter&&this.myMap.setCenter(e):this.myMap.panTo&&this.myMap.getZoom()&&this.myMap.panTo(e,{checkZoomRange:!0})},zoom:function(){this.myMap.setZoom(this.zoom)},bounds:function(e){this.myMap.setBounds&&this.myMap.setBounds(e)}},render:function(e){return e("section",{class:"ymap-container",ref:"mapContainer"},[e("div",{attrs:{id:this.ymapId,class:this.ymapClass,style:this.style}}),this.isReady&&e("div",{ref:"markersContainer",attrs:{class:"ymap-markers"}},[this.$slots.default])])},mounted:function(){var e=this;if(this.$attrs["map-link"]||this.$attrs.mapLink)throw new Error("Vue-yandex-maps: Attribute mapLink is not supported. Use settings.");if(this.placemarks&&this.placemarks.length)throw new Error("Vue-yandex-maps: Attribute placemarks is not supported. Use marker component.");this.mapObserver=new MutationObserver((function(){e.myMap.container&&e.myMap.container.fitToViewport()}));var t=this.$refs.mapContainer;if(this.mapObserver.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!1}),v.scriptIsNotAttached){var r=this.debug;y(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){s(e,t,r[t])}))}return e}({},this.$options.pluginOptions,this.settings,{debug:r}))}v.ymapReady?ymaps.ready(this.init):v.$on("scriptIsLoaded",(function(){ymaps.ready(e.init)}))},beforeDestroy:function(){this.myMap.geoObjects&&this.myMap.geoObjects.removeAll()}},k=["placemark","polyline","rectangle","polygon","circle"],C=["balloonclose","balloonopen","click","contextmenu","dblclick","drag","dragend","dragstart","hintclose","hintopen","mouseenter","mouseleave"],O={inject:["useObjectManager","addMarker","deleteMarker","compareValues"],props:{coords:Array,hintContent:String,icon:Object,balloon:Object,markerType:{type:String,validator:function(e){return k.includes(e.toLowerCase())},default:"placemark"},markerFill:Object,markerStroke:Object,clusterName:[String,Number],circleRadius:{validator:function(e){return!Number.isNaN(e)},default:1e3},balloonTemplate:String,markerId:{type:[String,Number],required:!0},properties:Object,options:Object},data:function(){return{unwatchArr:[]}},render:function(e){return this.$slots.balloon&&e("div",{style:"display: none;"},[this.$slots.balloon])},mounted:function(){var e=this;Object.keys(this.$props).forEach((function(t){e.unwatchArr.push(e.$watch(t,(function(t,r){return e.compareValues({newVal:t,oldVal:r,marker:e.defineMarker()})})))})),this.addMarker(this.defineMarker())},methods:{defineMarker:function(){var e=this,t={};this.balloonTemplate&&(t={balloonContentLayout:ymaps.templateLayoutFactory.createClass(this.balloonTemplate)}),this.$slots.balloon&&(t={balloonContentLayout:ymaps.templateLayoutFactory.createClass(this.$slots.balloon[0].elm.outerHTML)});var r={markerId:this.markerId,markerType:this.markerType||"placemark",coords:d(this.coords),hintContent:this.hintContent,markerFill:this.markerFill,circleRadius:+this.circleRadius,clusterName:this.clusterName,markerStroke:this.markerStroke,balloon:this.balloon,properties:this.properties,options:this.options,balloonOptions:t};this.icon&&["default#image","default#imageWithContent"].includes(this.icon.layout)?(r.iconContent=this.icon.content,r.iconLayout=this.icon.layout,r.iconImageHref=this.icon.imageHref,r.iconImageSize=this.icon.imageSize,r.iconImageOffset=this.icon.imageOffset,r.iconContentOffset=this.icon.contentOffset,this.icon.contentLayout&&"string"==typeof this.icon.contentLayout&&(r.iconContentLayout=ymaps.templateLayoutFactory.createClass(this.icon.contentLayout))):r.icon=this.icon;var o=function(e,t){var r=l(e);if(!t)return r;switch(r){case"Placemark":return"Point";case"Polyline":return"LineString";default:return r}}(r.markerType,this.useObjectManager),n={hintContent:r.hintContent,iconContent:r.icon?r.icon.content:r.iconContent,markerId:r.markerId},a=r.balloon?{balloonContentHeader:r.balloon.header,balloonContentBody:r.balloon.body,balloonContentFooter:r.balloon.footer}:{},i=Object.assign(n,a,r.properties),s=r.iconLayout?{iconLayout:r.iconLayout,iconImageHref:r.iconImageHref,iconImageSize:r.iconImageSize,iconImageOffset:r.iconImageOffset,iconContentOffset:r.iconContentOffset,iconContentLayout:r.iconContentLayout}:{preset:r.icon&&"islands#".concat(u(r),"Icon")},c=r.markerStroke?{strokeColor:r.markerStroke.color||"0066ffff",strokeOpacity:parseFloat(r.markerStroke.opacity)>=0?parseFloat(r.markerStroke.opacity):1,strokeStyle:r.markerStroke.style,strokeWidth:parseFloat(r.markerStroke.width)>=0?parseFloat(r.markerStroke.width):1}:{},p=r.markerFill?{fill:r.markerFill.enabled||!0,fillColor:r.markerFill.color||"0066ff99",fillOpacity:parseFloat(r.markerFill.opacity)>=0?parseFloat(r.markerFill.opacity):1,fillImageHref:r.markerFill.imageHref||""}:{},m=Object.assign(s,c,p,r.balloonOptions,r.options);"Circle"===o&&(r.coords=[r.coords,r.circleRadius]);var h=function(e,t){var r=t?{type:"Feature",id:e.properties.markerId,geometry:{type:e.markerType,coordinates:e.coords},properties:e.properties,options:e.options}:new ymaps[e.markerType](e.coords,e.properties,e.options);return r.clusterName=e.clusterName,r}({properties:i,options:m,markerType:o,coords:r.coords,clusterName:r.clusterName},this.useObjectManager,this.$emit);return this.useObjectManager||C.forEach((function(t){return h.events.add(t,(function(r){return e.$emit(t,r)}))})),h}},beforeDestroy:function(){this.unwatchArr.forEach((function(e){return e()})),this.deleteMarker(this.markerId)}};g.install=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.installed||(e.installed=!0,g.pluginOptions=r,t.component("yandex-map",g),t.component("ymap-marker",O))},"undefined"!=typeof window&&window.Vue&&window.Vue.use(g);var w=y;function M(e,t,r,o,n,a,i){try{var s=e[a](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(o,n)}function j(e){return function(){var t=this,r=arguments;return new Promise((function(o,n){var a=e.apply(t,r);function i(e){M(a,o,n,i,s,"next",e)}function s(e){M(a,o,n,i,s,"throw",e)}i(void 0)}))}}const _={name:"Map",components:{loadYmap:w,yandexMap:g,ymapMarker:O},data:function(){return{loading:!1,settings:{apiKey:"3ccab634-2c6f-4506-9294-dc6811844c51",lang:"ru_RU",version:"2.1"},colors:["islands#blackStretchyIcon","islands#redStretchyIcon","islands#darkOrangeStretchyIcon","islands#yellowStretchyIcon","islands#darkGreenStretchyIcon","islands#lightBlueStretchyIcon","islands#darkBlueStretchyIcon","islands#violetStretchyIcon","islands#blackStretchyIcon"],intervals:[],clusterer:{},map:{},orders:[],order:{},couriers:[],user_id:[],courier_id:0,items:[{time:"0. не задан",val:0},{time:"1. 06.30-07.00",val:1},{time:"2. 07.00-07.30",val:2},{time:"3. 07.30-08.00",val:3},{time:"4. 08.00-08.30",val:4},{time:"5. 08.30-09.00",val:5},{time:"6. 09.00-09.30",val:6},{time:"7. 09.30-10.00",val:7}],total:0}},mounted:function(){var e=this;return j(n().mark((function t(){var r,o,a,i,s,c;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchCouriers();case 2:return t.next=4,w(e.settings);case 4:r=[{name:"Astana",coords:[51.1801,71.44598]},{name:"Almaty",coords:[43.237163,76.945627]}],o=e.$store.state.auth.user.city_id,e.map=new ymaps.Map("map",{center:r[o-1].coords,zoom:11}),a=new ymaps.control.SearchControl({options:{provider:"yandex#search"}}),i=new ymaps.Circle([[51.059496,71.426799],650],{balloonContent:"Family village",hintContent:"Family village"},{draggable:!1,fillColor:"#00FF00",strokeColor:"#0000FF",opacity:.5,strokeWidth:5,strokeStyle:"shortdash"}),s=new ymaps.GeoObject({geometry:{type:"Polygon",coordinates:[[[51.183672,71.39463],[51.177513,71.389668],[51.170547,71.368844],[51.12651,71.359811],[51.084045,71.389438],[51.074404,71.421354],[51.097147,71.468311],[51.10777,71.497896],[51.130314,71.501945],[51.145034,71.528984],[51.186674,71.421104]]],fillRule:"nonZero"},properties:{balloonContent:"Многоугольник"}},{fillColor:"#00FF00",strokeColor:"#0000FF",opacity:.5,strokeWidth:5,strokeStyle:"shortdash"}),e.map.geoObjects.add(s),e.map.geoObjects.add(i),e.map.controls.add(a),e.clusterer=new ymaps.Clusterer({clusterDisableClickZoom:!0,groupByCoordinates:!0,clusterIconLayout:"default#pieChart",zIndex:10}),c=e,e.map.events.add("boundschange",(function(){var e=c.clusterer.getClusters(),t=e.length,r=0;if(t>0)for(var o=t;o>0;o--){for(var n=e[o-1].properties.get("geoObjects"),a=n.length,i=a;i>0;i--){var s=n[i-1].properties.get("balloonContentFooter").split(" ");parseInt(s[1])>0&&r++}e[o-1].properties.set("iconContent",r+"/"+a),r=0}})),e.clusterer.events.add("click",(function(e){var t=e.get("target");void 0===t._clusterBounds?c.setOrder(t):t.getGeoObjects()&&(t.state.set("activeObject",t.getGeoObjects()[0]),t.state.events.add("change",(function(){var e=t.state.get("activeObject");c.setOrder(e)})))}));case 17:case"end":return t.stop()}}),t)})))()},computed:{all:function(){return this.intervals.length===this.items.length},some:function(){return this.intervals.length>0&&!this.all},icon:function(){return this.all?"mdi-close-box":this.some?"mdi-minus-box":"mdi-checkbox-blank-outline"}},methods:{toggle:function(){var e=this;this.$nextTick((function(){e.all?e.intervals=[]:e.intervals=e.items.map((function(e){return e.val})),e.filter()}))},filter:function(){var e=this;return j(n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.orders=[],t.next=3,axios.post("/api/map/filter",{intervals:e.intervals,user_id:e.user_id}).then((function(t){e.total=t.data.length,e.displayPlaceMarks(t.data),e.orders=t.data})).catch((function(t){e.$store.dispatch("showAlert",{isVisible:!0,msg:t.message,color:"error",type:"error"})}));case 3:case"end":return t.stop()}}),t)})))()},setOrder:function(e){var t=e.properties.get("balloonContentFooter").split(" "),r=parseInt(t[0]);this.order=this.orders.find((function(e){return e.id===r})),this.courier_id=this.order.courier_id},fetchCouriers:function(){var e=this;return j(n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.couriers=[],t.next=3,axios.get("/api/couriers").then((function(t){e.couriers=t.data.data,e.couriers.unshift({id:0,name:"Не выбрано"})})).catch((function(e){console.log(e)}));case 3:case"end":return t.stop()}}),t)})))()},setCourier:function(){var e=this;axios.post("/api/map/courier",{order_id:this.order.id,courier_id:this.courier_id}).then((function(t){e.order.courier=t.data,e.filter()})).catch((function(e){console.log(e)}))},createPlaceMark:function(e){return new ymaps.Placemark([e.lat,e.lng],{balloonContentHeader:e.name,balloonContentBody:e.time+"<br/>"+e.phone+"<br/>"+e.tag+"<br/>"+e.yaddress,balloonContentFooter:e.id+" "+e.courier_id,iconContent:e.courier_name,hintContent:e.name+"<br/"+e.tag+"<br/>"+e.time},{preset:this.colors[e.interval],zIndex:e.courier_id?1:1e3})},displayPlaceMarks:function(e){this.clusterer.removeAll();for(var t=e.length;t--;){var r=this.createPlaceMark(e[t]);this.clusterer.add(r)}this.map.geoObjects.add(this.clusterer)}}},S=_;const I=(0,r(1900).Z)(S,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-row",[r("v-col",{staticStyle:{"margin-bottom":"-40px"},attrs:{sm:"12",lg:"8"}},[r("v-select",{attrs:{items:e.items,dense:"","item-text":"time","item-value":"val",label:"Интервал",multiple:"",outlined:""},on:{change:e.filter},scopedSlots:e._u([{key:"prepend-item",fn:function(){return[r("v-list-item",{attrs:{ripple:""},on:{click:e.toggle}},[r("v-list-item-action",[r("v-icon",{attrs:{color:e.intervals.length>0?"indigo darken-4":""}},[e._v("\n                                "+e._s(e.icon)+"\n                            ")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("\n                                Выбрать все\n                            ")])],1)],1),e._v(" "),r("v-divider",{staticClass:"mt-2"})]},proxy:!0}]),model:{value:e.intervals,callback:function(t){e.intervals=t},expression:"intervals"}})],1),e._v(" "),r("v-col",{attrs:{sm:"12",lg:"3"}},[r("v-select",{attrs:{items:e.couriers,dense:"","item-text":"name","item-value":"id",label:"Курьеры",outlined:""},on:{change:e.filter},model:{value:e.user_id,callback:function(t){e.user_id=t},expression:"user_id"}})],1),e._v(" "),r("v-col",{attrs:{sm:"12",lg:"1"}},[r("h3",[e._v(e._s(e.total))])])],1),e._v(" "),r("v-row",[r("v-col",{attrs:{sm:"12",lg:"8"}},[r("div",{staticStyle:{width:"100%",height:"700px"},attrs:{id:"map"}})]),e._v(" "),r("v-col",{attrs:{sm:"12",lg:"4"}},[r("v-row",[r("v-col",{attrs:{cols:"3"}},[e._v("\n                    Имя\n                ")]),e._v(" "),r("v-col",[e._v("\n                    "+e._s(e.order?e.order.name:"")+"\n                ")])],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"3"}},[e._v("\n                    Адрес\n                ")]),e._v(" "),r("v-col",[r("p",[e._v(e._s(e.order?e.order.yaddress:""))]),e._v(" "),r("span",{staticClass:"red--text"},[e._v(e._s(e.order?e.order.yaddress_old:""))])])],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"3"}},[e._v("\n                    Интервал\n                ")]),e._v(" "),r("v-col",[r("p",[e._v(e._s(e.order?e.order.time:""))]),e._v(" "),r("span",{staticClass:"red--text"},[e._v(e._s(e.order?e.order.time_old:""))])])],1),e._v(" "),r("v-row",{staticClass:"mt-5"},[r("v-col",[r("v-autocomplete",{attrs:{items:e.couriers,"item-text":"name","item-value":"id",label:"Курьеры",dense:"",outlined:""},model:{value:e.courier_id,callback:function(t){e.courier_id=t},expression:"courier_id"}})],1),e._v(" "),r("v-col",[r("v-btn",{attrs:{disabled:0===Object.keys(e.order).length,color:"primary"},on:{click:e.setCourier}},[e._v("\n                        Назначить\n                    ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);