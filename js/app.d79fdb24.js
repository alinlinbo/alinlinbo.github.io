(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"13296dfe"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"464dc491"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01a2":function(e,t,n){},"0354":function(e,t,n){},"0ab5":function(e,t,n){},"0cfe":function(e,t,n){"use strict";n("01a2")},"15c3":function(e,t,n){"use strict";n("5691")},"171e":function(e,t,n){e.exports=n.p+"img/head.47a958a2.jpg"},"38ea":function(e,t,n){},5691:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],i={name:"app"},c=i,u=(n("5c7f"),n("2877")),s=Object(u["a"])(c,a,o,!1,null,null,null),l=s.exports,f=n("8c4f"),p=function(){var e=this,t=e._self._c;return t("swipe",{ref:"swipe",staticClass:"swipe",attrs:{"indicator-color":"black",vertical:""},on:{change:e.swipeChange}},[t("swipe-item",[t("about-me")],1),t("swipe-item",[t("project")],1),t("swipe-item",[t("work")],1),t("swipe-item",[t("skill")],1),t("swipe-item",[t("paper")],1)],1)},d=[],m=(n("4b0a"),n("2bb1")),v=(n("7844"),n("5596")),h=function(){var e=this;e._self._c;return e._m(0)},b=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"root"},[t("img",{attrs:{id:"avatar",src:n("171e")}}),t("h1",[e._v("陈燕灵")]),t("div",{staticClass:"subTitle"},[e._v("前端开发")])])}],g={name:"AboutMe"},_=g,w=(n("decb"),Object(u["a"])(_,h,b,!1,null,"3142271b",null)),y=w.exports,k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"root"},[t("h1",[e._v("项目")]),t("div",{staticClass:"carousel"},[t("el-carousel",{attrs:{arrow:"always",trigger:"click",autoplay:!1,height:"360px"}},e._l(e.projects,(function(n,r){return t("el-carousel-item",{key:r,staticClass:"item"},[t("a",{staticClass:"projectTitle",class:{projectTitleUrl:n.url},attrs:{href:n.url,target:"_blank"}},[e._v(e._s(n.title))]),t("div",{staticClass:"content"},[e._v(e._s(n.content))])])})),1)],1)])},j=[],C={name:"Project",data:function(){return{projects:[{title:"1983抽盒机",icon:"",content:"基于原生微信小程序、支付宝小程序商城，项目使用小程序自带的组件，完成了优惠券红包领取、活动页主页、海报分享、抽盲盒等模块的接口对接及样式修改"},{title:"iSmart Mall小程序",icon:"",content:"基于uni-app框架开发的微信小程序商城，项目使用uview组件和uni-app自带的组件，完成了购物、详情、提交订单等模块的接口对接及样式修改"},{title:"商城管理后台",icon:"",content:"使用vue框架和element-ui开发的商城管理后台，实现了优惠券、文章管理、会员管理等模块部分接口对接与前端小程序页面的编写"},{title:"系统中台",icon:"",content:"基于vue框架，使用ant design组件开发的业务中台,完成商家参数、进口报关模块的交互与接口对接"},{title:"个人线上简历",url:"https://github.com/alinlinbo/resume",icon:"",content:"使用vue开发的个人线上简历，利用媒体查询和Rem特性同时适配了PC端和移动端，且实现了用户调用浏览器打印页面时自动隐藏交互按钮并显示网站二维码的功能"},{title:"寺院后台管理系统",icon:"",content:"使用jq和bootstrap开发的寺院后台管理系统，实现了文章管理，用户管理，项目管理等模块前端页面的编写与接口的对接，在项目中对ajax请求进行封装，为接口调用添加了token和loading动画，有效减少代码量并提高开发效率"},{title:"寺院公众号项目",icon:"",content:"使用jq开发的微信公众号微站，实现了首页，详情页，我的页面等的接口对接及样式修改，针对业务场景封装底部及顶部导航栏、头部返回等公用组件，提高代码复用"}]}}},x=C,S=(n("fd5b"),Object(u["a"])(x,k,j,!1,null,"eb0cb0ea",null)),O=S.exports,P=function(){var e=this,t=e._self._c;return t("div",{staticClass:"root"},[t("h1",[e._v("技能&工具")]),e._l(e.skills,(function(n,r){return t("div",{key:r,staticClass:"skills"},e._l(n,(function(n,r){return t("div",{key:r,staticClass:"word"},[e._v("\n            "+e._s(n)+"\n        ")])})),0)}))],2)},T=[],A={name:"Skill",data:function(){return{skills:[["HTML","CSS","Stylus","JavaScript","jQuery","Webpack"],["Vue","uni-app","Avue","Antd"],["Git","PhotoShop","WebStorm"]]}}},E=A,I=(n("cfdd"),Object(u["a"])(E,P,T,!1,null,"50712ae8",null)),M=I.exports,q=function(){var e=this,t=e._self._c;return t("div",{staticClass:"root"},[t("h1",[e._v("工作经历")]),t("el-timeline",{staticClass:"timeline"},[t("el-timeline-item",{attrs:{placement:"top",timestamp:"2020-11",size:"large"}},[t("div",{staticClass:"company"},[e._v("珠海横琴智恒运通网络科技有限公司")]),t("div",{staticClass:"content"},[e._v("使用vue、element ui、uniapp、uview框架还原设计图、页面交互以及接口对接.\n          ")])]),t("el-timeline-item",{attrs:{placement:"top",timestamp:"2021-03",size:"large"}},[t("div",{staticClass:"company"},[e._v("珠海唐佛科技有限公司")]),t("div",{staticClass:"content"},[e._v("使用vue、jq、bootstrap框架还原设计图、页面交互以及接口对接.\n          ")])]),t("el-timeline-item",{attrs:{timestamp:"2022-07",size:"large"}})],1)],1)},L=[],N={name:"Work"},W=N,z=(n("15c3"),n("5f90"),Object(u["a"])(W,q,L,!1,null,"3d3a6568",null)),B=z.exports,D=function(){var e=this,t=e._self._c;return t("div",{staticClass:"root"},[e._l(3,(function(e){return t("font-awesome-icon",{key:e,attrs:{icon:"chevron-right"}})})),e._v(" \n    "),t("router-link",{attrs:{to:"/paper"}},[e._v("纸质版简历")]),e._v("\n     "),e._l([4,5,6],(function(e){return t("font-awesome-icon",{key:e,attrs:{icon:"chevron-left"}})}))],2)},J=[],H={name:"Paper"},U=H,$=(n("b5e4"),Object(u["a"])(U,D,J,!1,null,"9ddf721e",null)),F=$.exports,G={name:"home",components:{Paper:F,Work:B,Skill:M,AboutMe:y,Project:O,Swipe:v["a"],SwipeItem:m["a"]},data:function(){return{lock:!1,currentIndex:0}},methods:{swipeChange:function(e){this.currentIndex=e}},mounted:function(){var e=this;document.body.onmousewheel=function(t){if(!e.lock){var n=t||window.event,r=n.wheelDelta||n.detail;e.lock=!0,r>0&&e.currentIndex>0&&e.currentIndex--,r<0&&e.currentIndex<4&&e.currentIndex++,e.$refs.swipe.swipeTo(e.currentIndex),setTimeout((function(){e.lock=!1}),1e3)}}},watch:{}},K=G,Q=(n("0cfe"),Object(u["a"])(K,p,d,!1,null,"04c7ec4d",null)),R=Q.exports;r["default"].use(f["a"]);var V=new f["a"]({routes:[{path:"/",name:"home",component:R},{path:"/paper",name:"paper",component:function(){return n.e("about").then(n.bind(null,"112a"))}}]}),X=(n("ed7b"),n("450d"),n("e1a5")),Y=n.n(X),Z=(n("2f02"),n("fe11")),ee=n.n(Z),te=(n("186a"),n("301f")),ne=n.n(te),re=(n("96dc"),n("9cea")),ae=n.n(re),oe=(n("8bd8"),n("4cb2")),ie=n.n(oe),ce=(n("4ca3"),n("443e")),ue=n.n(ce);r["default"].use(ue.a),r["default"].use(ie.a),r["default"].use(ae.a),r["default"].use(ne.a),r["default"].use(Y.a).use(ee.a);var se=n("ecee"),le=n("c074"),fe=n("ad3d");se["c"].add(le["b"],le["k"],le["p"],le["c"],le["d"],le["m"],le["i"],le["g"],le["q"],le["o"],le["a"],le["j"],le["h"],le["n"],le["l"],le["f"],le["e"],le["r"]),r["default"].component("font-awesome-icon",fe["a"]),r["default"].config.productionTip=!1,new r["default"]({router:V,render:function(e){return e(l)}}).$mount("#app")},"5c7f":function(e,t,n){"use strict";n("38ea")},"5f90":function(e,t,n){"use strict";n("7d87")},"7d87":function(e,t,n){},"8f87":function(e,t,n){},"97ec":function(e,t,n){},b5e4:function(e,t,n){"use strict";n("0354")},cfdd:function(e,t,n){"use strict";n("0ab5")},decb:function(e,t,n){"use strict";n("97ec")},fd5b:function(e,t,n){"use strict";n("8f87")}});
//# sourceMappingURL=app.d79fdb24.js.map