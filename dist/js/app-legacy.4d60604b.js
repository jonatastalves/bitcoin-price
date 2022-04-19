(function(){"use strict";var e={184:function(e,t,r){r(6992),r(8674),r(9601),r(7727);var n=r(8935),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view",{attrs:{path:"$router.key"}}),r("Footer")],1)},c=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("nav",{staticClass:"container"},[r("router-link",{attrs:{to:"/"}},[r("img",{attrs:{alt:"Bitcoin-price",id:"logo",src:"https://theme.zdassets.com/theme_assets/2284639/4b20ea7e1106988b0e6b99903a770e49692d7080.png"}})]),r("img",{attrs:{alt:"Abrir menu",id:"menu-button",src:"https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg"},on:{click:e.openMenu}}),e.menuActive?r("div",{attrs:{id:"menu-overlay"},on:{click:e.closeMenu}}):e._e(),r("div",{class:{active:e.menuActive},attrs:{id:"menu-items"}},[r("img",{attrs:{alt:"Bitcoin-price",id:"menu-logo",src:"https://cdn-images-1.medium.com/max/1200/1*UlDujYjQ6qMTV_b2klTOYg.png"}}),r("ul",[r("li",[r("router-link",{attrs:{to:"/historical"}},[e._v("Search for date")])],1)])])],1)])},a=[],s={name:"Header",data:function(){return{menuActive:!1}},methods:{openMenu:function(){this.menuActive=!0},closeMenu:function(){this.menuActive=!1}}},u=s,d=r(1001),l=(0,d.Z)(u,o,a,!1,null,"75a7ac5c",null),h=l.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[e._v(" Bitcoin Price ")])},m=[],p={name:"Footer"},_=p,f=(0,d.Z)(_,v,m,!1,null,"319b5e70",null),b=f.exports,P={name:"App",components:{Header:h,Footer:b}},g=P,C=(0,d.Z)(g,i,c,!1,null,null,null),k=C.exports,x=r(2809),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("main",e._l(e.coinsPrice,(function(t,n){return r("div",{key:n,staticClass:"card"},[r("h2",[e._v(e._s(n.toUpperCase()))]),r("p",[e._v("USD: "+e._s(t.usd))]),r("p",[e._v("BRL: "+e._s(t.brl))]),r("p",[e._v("EUR: "+e._s(t.eur))])])})),0)])},U=[],E=r(6166),R=r.n(E),w=R().create({baseURL:"https://api.coingecko.com/api/v3/"}),O=w,D={name:"home",data:function(){return{coinsPrice:{}}},methods:{getCoinsPrice:function(){var e=this;O.get("simple/price?ids=bitcoin%2Cethereum%2Ccosmos%2Cdacxi%2Cterra-luna&vs_currencies=usd%2Cbrl%2Ceur").then((function(t){e.coinsPrice=t.data})),this.liveInfo()},liveInfo:function(){var e=this;setTimeout((function(){e.getCoinsPrice()}),1e4)}},mounted:function(){this.getCoinsPrice()}},I=D,A=(0,d.Z)(I,y,U,!1,null,"1de5cd00",null),B=A.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("div",{attrs:{id:"search-api"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.dateID,expression:"dateID"}],attrs:{type:"date",name:"date-search",id:"date-search"},domProps:{value:e.dateID},on:{input:function(t){t.target.composing||(e.dateID=t.target.value)}}}),r("button",{attrs:{id:"button-search"},on:{click:e.dateChoose}},[e._v("Search for date")])]),r("div",{staticClass:"amount-card"},[r("div",{staticClass:"card"},[r("h2",[e._v("BITCOIN")]),r("p",[e._v("USD: "+e._s(e.bitcoinPrice.usd))]),r("p",[e._v("BRL: "+e._s(e.bitcoinPrice.brl))]),r("p",[e._v("EUR: "+e._s(e.bitcoinPrice.eur))])]),r("div",{staticClass:"card"},[r("h2",[e._v("DACXI")]),r("p",[e._v("USD: "+e._s(e.dacxiPrice.usd))]),r("p",[e._v("BRL: "+e._s(e.dacxiPrice.brl))]),r("p",[e._v("EUR: "+e._s(e.dacxiPrice.eur))])]),r("div",{staticClass:"card"},[r("h2",[e._v("ETHEREUM")]),r("p",[e._v("USD: "+e._s(e.ethereumPrice.usd))]),r("p",[e._v("BRL: "+e._s(e.ethereumPrice.brl))]),r("p",[e._v("EUR: "+e._s(e.ethereumPrice.eur))])]),r("div",{staticClass:"card"},[r("h2",[e._v("TERRA-LUNA")]),r("p",[e._v("USD: "+e._s(e.terra_lunaPrice.usd))]),r("p",[e._v("BRL: "+e._s(e.terra_lunaPrice.brl))]),r("p",[e._v("EUR: "+e._s(e.terra_lunaPrice.eur))])]),r("div",{staticClass:"card"},[r("h2",[e._v("COSMOS")]),r("p",[e._v("USD: "+e._s(e.cosmosPrice.usd))]),r("p",[e._v("BRL: "+e._s(e.cosmosPrice.brl))]),r("p",[e._v("EUR: "+e._s(e.cosmosPrice.eur))])])])])},Z=[],j=(r(9600),r(4916),r(3123),{name:"Historical",data:function(){return{bitcoinPrice:{},dacxiPrice:{},ethereumPrice:{},terra_lunaPrice:{},cosmosPrice:{},dateChoosen:"",dateID:""}},methods:{dateChoose:function(){var e=this;this.dateChoosen=this.dateID.split("-").reverse().join("-"),O.get("coins/bitcoin/history?date=".concat(this.dateChoosen)).then((function(t){e.bitcoinPrice=t.data.market_data.current_price})),O.get("coins/ethereum/history?date=".concat(this.dateChoosen)).then((function(t){e.ethereumPrice=t.data.market_data.current_price})),O.get("coins/cosmos/history?date=".concat(this.dateChoosen)).then((function(t){e.cosmosPrice=t.data.market_data.current_price})),O.get("coins/dacxi/history?date=".concat(this.dateChoosen)).then((function(t){e.dacxiPrice=t.data.market_data.current_price})),O.get("coins/terra-luna/history?date=".concat(this.dateChoosen)).then((function(t){e.terra_lunaPrice=t.data.market_data.current_price}))}}}),T=j,L=(0,d.Z)(T,S,Z,!1,null,"9eac2a1a",null),M=L.exports;n.Z.use(x.Z);var $=[{path:"/",component:B},{path:"/historical",component:M}],H=new x.Z({routes:$,mode:"history"}),F=H;n.Z.config.productionTip=!1,new n.Z({router:F,render:function(e){return e(k)}}).$mount("#app")}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,r),c.exports}r.m=e,function(){var e=[];r.O=function(t,n,i,c){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],c=e[d][2];for(var a=!0,s=0;s<n.length;s++)(!1&c||o>=c)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(a=!1,c<o&&(o=c));if(a){e.splice(d--,1);var u=i();void 0!==u&&(t=u)}}return t}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[n,i,c]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,c,o=n[0],a=n[1],s=n[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(s)var d=s(r)}for(t&&t(n);u<o.length;u++)c=o[u],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(d)},n=self["webpackChunkbitcoin_price"]=self["webpackChunkbitcoin_price"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(184)}));n=r.O(n)})();
//# sourceMappingURL=app-legacy.4d60604b.js.map