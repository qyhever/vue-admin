webpackJsonp([23],{"+aT9":function(t,n){t.exports=AMap},0:function(t,n){},"CO/s":function(t,n){},IcnI:function(t,n,e){"use strict";var a=e("7+uW"),r=e("NYxO"),o=e("VKKs"),s={state:{isCollapse:Object(o.b)(),language:localStorage.getItem("language")||"zh",loading:!1},getters:{isCollapse:function(t){return t.isCollapse},language:function(t){return t.language}},mutations:{TOGGLE_MENU:function(t){Object(o.e)(!t.isCollapse),t.isCollapse=!t.isCollapse},TOGGLE_LANGUAGE:function(t,n){t.language=n,localStorage.setItem("language",n)},TOGGLE_LOADING:function(t,n){t.loading=n}},actions:{}},i=e("+6Bu"),u=e.n(i),c=e("//Fk"),l=e.n(c),m=e("vMJZ"),f=e("zHze"),p=e.n(f),d={state:{token:o.c(),userId:o.d(),userInfo:{},roles:[]},getters:{token:function(t){return t.token},user:function(t){return t.user}},mutations:{SET_TOKEN:function(t,n){t.token=n,o.g(n)},SET_USER_ID:function(t,n){t.userId=n,o.h(n)},SET_USER_INFO:function(t,n){t.userInfo=n},SET_ROLES:function(t,n){t.roles=n}},actions:{login:function(t,n){var e=t.commit;return new l.a(function(t,a){var r,o,s=n.userName,i=n.password,u={userName:s,password:(r=i,o=p.a.md.md5.create(),o.update(r),o.digest().toHex())};m.b(u).then(function(n){if(n.success){var a=n.data,r=a.token,o=a.userInfo._id;e("SET_TOKEN",r),e("SET_USER_ID",o),t()}}).catch(function(t){a(t)})})},logout:function(t){var n=t.commit;u()(t,["commit"]);return new l.a(function(t){n("SET_TOKEN",""),n("SET_USER_ID",""),n("SET_ROLES",[]),o.a(),t()})},getUserInfo:function(t){var n=t.state,e=t.commit;return new l.a(function(t,a){m.a(n.userId).then(function(n){if(n.success){var a=n.data,r=a.authority,o=[];Array.isArray(r)&&(o=r),"string"==typeof r&&(o=[r]),e("SET_ROLES",o),e("SET_USER_INFO",a),t()}}).catch(function(t){a(t)})})}}},h=e("YaEn");var j={state:{routers:h.b,addRoutes:[]},mutations:{SET_ROUTES:function(t,n){t.addRoutes=n,t.routers=h.b.concat(n)}},actions:{generateRoutes:function(t,n){var e=t.commit;return new l.a(function(t){var a=function t(n,e){return n.filter(function(n){return!!function(t,n){return!n.meta||!n.meta.roles||t.some(function(t){return n.meta.roles.includes(t)})}(e,n)&&(n.children&&n.children.length&&(n.children=t(n.children,e)),!0)})}(h.a,n);e("SET_ROUTES",a),t()})}}};a.default.use(r.a);n.a=new r.a.Store({modules:{common:s,user:d,permission:j},getters:{userId:function(t){return t.user.userId},userInfo:function(t){return t.user.userInfo},roles:function(t){return t.user.roles},addRoutes:function(t){return t.permission.addRoutes},routers:function(t){return t.permission.routers},loading:function(t){return t.common.loading}}})},MjQC:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={};e.d(a,"format",function(){return S.b}),e.d(a,"formatDate",function(){return S.c}),e.d(a,"formatTime",function(){return S.d});var r={};e.d(r,"QINIU_PREFIX",function(){return x}),e.d(r,"QINIU_UPLOAD_URL",function(){return M});var o=e("fZjL"),s=e.n(o),i=e("7+uW"),u={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var c=e("VU/8")({name:"App"},u,!1,function(t){e("CO/s")},"data-v-2301d272",null).exports,l=e("YaEn"),m=e("IcnI"),f=e("Dd8w"),p=e.n(f),d=e("Y81h"),h=e.n(d),j=(e("UVIz"),e("VKKs")),g=e("vMJZ"),v=["/login","/404"];l.c.beforeEach(function(t,n,e){h.a.start();var a=t.meta.title;a&&(document.title=a),Object(j.c)()?"/login"===t.path?e({path:"/"}):0===m.a.getters.roles.length?m.a.dispatch("getUserInfo").then(function(){m.a.dispatch("generateRoutes",m.a.getters.roles).then(function(){l.c.addRoutes(m.a.getters.addRoutes),e(p()({},t,{replace:!0}))})}):Object(g.c)().then(function(t){if(t.success){var n=t.data.token;n&&m.a.commit("SET_TOKEN",n)}e()}).catch(function(){e()}):v.includes(t.path)?e():(e("/login?redirect="+t.path),h.a.done())}),l.c.afterEach(function(){h.a.done()});e("Qbok"),e("aTvC"),e("erWL"),e("fWXo"),e("MjQC"),e("tvR6");var b=e("zL8q"),w=e.n(b),E=e("vXZn"),k=e.n(E),y=e("LKcQ"),I=e.n(y),R=e("L8Lv"),O=e.n(R),S=e("oAV5"),z=e("woOf"),T=e.n(z),x="https://qiniu.qyhever.com/",M="https://upload-z2.qiniup.com",N={install:function(t){T()(t.prototype,r)}},A={install:function(t){t.prototype.validNumber=function(t){return/^\d*$/.test(t)},t.prototype.scrollTo=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,r=arguments[4];window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)});var o=Math.abs(n-e);!function n(e,a,o){if(e!==a){var s=e+o>a?a:e+o;e>a&&(s=e-o<a?a:e-o),t===window?window.scrollTo(s,s):t.scrollTop=s,window.requestAnimationFrame(function(){return n(s,a,o)})}else r&&r()}(n,e,Math.ceil(o/a*50))}}};i.default.use(w.a),i.default.component(k.a.name,k.a),i.default.component(I.a.name,I.a),i.default.component(O.a.name,O.a),s()(a).forEach(function(t){i.default.filter(t,a[t])}),i.default.use(N),i.default.use({install:function(t){var n,e,a;t.prototype.ENUM_MAP={},t.prototype.ENUM_ARR={},n="status",e={},a=[],[{k:0,v:"全部"},{k:1,v:"待接单"},{k:2,v:"待排产 "},{k:3,v:"待入库 "},{k:4,v:"待发货 "}].forEach(function(t){e[t.k]=t.v,a.push({value:t.k,text:t.v})}),t.prototype.ENUM_MAP[n]=e,t.prototype.ENUM_ARR[n]=a}}),i.default.use(A),new i.default({el:"#app",router:l.c,store:m.a,components:{App:c},template:"<App/>"})},Qbok:function(t,n){},UVIz:function(t,n){},VKKs:function(t,n,e){"use strict";n.c=function(){return window.localStorage.getItem(o)},n.g=function(t){return window.localStorage.setItem(o,t)},n.d=function(){return window.localStorage.getItem(s)},n.h=function(t){return window.localStorage.setItem(s,t)},n.b=function(){return JSON.parse(window.localStorage.getItem(i))},n.e=function(t){return window.localStorage.setItem(i,r()(t))},n.f=function(t){var n="/login"===t?"":t;return window.localStorage.setItem(u,n)},n.a=function(){window.localStorage.removeItem(o),window.localStorage.removeItem(s)};var a=e("mvHQ"),r=e.n(a),o="admin-token",s="admin-user-id",i="is-collapse",u="from-path"},YaEn:function(t,n,e){"use strict";e.d(n,"b",function(){return u}),e.d(n,"a",function(){return c});var a=e("7+uW"),r=e("/ocq");a.default.use(r.a);var o=function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"jUyA"))},s=function(){return Promise.all([e.e(0),e.e(7)]).then(e.bind(null,"4WWV"))},i=function(){return e.e(5).then(e.bind(null,"TlMM"))},u=[{path:"/",redirect:"/dashboard",hidden:!0},{path:"/login",name:"Login",component:function(){return e.e(11).then(e.bind(null,"Luci"))},meta:{title:"登录"},hidden:!0},{path:"/404",component:i,hidden:!0}];n.c=new r.a({scrollBehavior:function(){return{y:0}},routes:u});var c=[{path:"/",name:"BasicLayout",component:o,meta:{title:"首页"},children:[{path:"/dashboard",name:"Dashboard",component:function(){return e.e(9).then(e.bind(null,"G6No"))},icon:"fa fa-dashboard",meta:{title:"仪表盘"}}]},{path:"/table",component:o,icon:"fa fa-table",name:"Table",meta:{title:"表格"},children:[{path:"/table/query",name:"TableQuery",component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"7gBB"))},meta:{title:"查询表格"}},{path:"/table/user",name:"RegisterUser",component:function(){return Promise.all([e.e(0),e.e(6)]).then(e.bind(null,"Als6"))},meta:{title:"注册用户"}}]},{path:"/richtext",component:o,icon:"fa fa-file-text-o",name:"Richtext",meta:{title:"富文本"},children:[{path:"/richtext/tinymce",name:"Tinymce",component:function(){return e.e(8).then(e.bind(null,"h4YS"))},meta:{title:"tinymce"}},{path:"/richtext/ckeditor",name:"Ckeditor",component:function(){return e.e(14).then(e.bind(null,"qXHH"))},meta:{title:"ckeditor"}}]},{path:"/base",component:o,icon:"fa fa-th-large",name:"Base",meta:{title:"常用组件"},children:[{path:"/base/cropper",name:"Cropper",component:s,meta:{title:"图片裁剪"}},{path:"/base/upload",name:"Upload",component:s,meta:{title:"上传"}}]},{path:"/excel",component:o,icon:"fa fa-cloud-upload",name:"Excel",meta:{title:"Excel"},children:[{path:"/excel/import",name:"Import",component:function(){return e.e(1).then(e.bind(null,"V5f3"))},meta:{title:"导入"}},{path:"/excel/export",name:"Export",component:function(){return Promise.all([e.e(0),e.e(3)]).then(e.bind(null,"jchC"))},meta:{title:"导出"}}]},{path:"/charts",component:o,icon:"fa fa-area-chart",name:"Charts",meta:{title:"图表"},children:[{path:"/echarts/colmun",name:"Colmun",component:function(){return Promise.all([e.e(0),e.e(19)]).then(e.bind(null,"2XC+"))},meta:{title:"柱状图"}},{path:"/echarts/bar",name:"Bar",component:function(){return Promise.all([e.e(0),e.e(21)]).then(e.bind(null,"V3wC"))},meta:{title:"条形图"}},{path:"/echarts/line",name:"Line",component:function(){return Promise.all([e.e(0),e.e(18)]).then(e.bind(null,"I6K6"))},meta:{title:"折线图"}},{path:"/echarts/pie",name:"Pie",component:function(){return Promise.all([e.e(0),e.e(17)]).then(e.bind(null,"0ypp"))},meta:{title:"饼图"}},{path:"/echarts/circle",name:"ChartCircle",component:function(){return Promise.all([e.e(0),e.e(20)]).then(e.bind(null,"tpR5"))},meta:{title:"圆环"}}]},{path:"/bmap",component:o,icon:"fa fa-map-marker",name:"BMap",meta:{title:"百度地图"},children:[{path:"/bmap/point2coordinate",name:"Pinot2Coordinate",component:function(){return e.e(15).then(e.bind(null,"FRop"))},meta:{title:"鼠标拾取坐标"}},{path:"/bmap/suggest-render-map",name:"SuggestRenderMap",component:function(){return e.e(10).then(e.bind(null,"5Bpx"))},meta:{title:"关键字输入"}}]},{path:"/amap",component:o,icon:"fa fa-map",name:"AMap",meta:{title:"高德地图"},children:[{path:"/amap/point2coordinate",name:"APinot2Coordinate",component:function(){return e.e(13).then(e.bind(null,"KrnM"))},meta:{title:"鼠标拾取坐标"}},{path:"/amap/suggest-render-map",name:"ASuggestRenderMap",component:function(){return e.e(12).then(e.bind(null,"3Vu/"))},meta:{title:"关键字输入"}}]},{path:"/authority",component:o,icon:"fa fa-map",name:"Authority",meta:{title:"admin页面",roles:["admin"]},children:[{path:"/authority/admin",name:"Admin",component:function(){return e.e(16).then(e.bind(null,"zM5v"))},meta:{title:"admin测试页面"}}]},{path:"*",component:i,hidden:!0}]},aTvC:function(t,n){},cKc3:function(t,n,e){"use strict";var a=e("//Fk"),r=e.n(a),o=e("mtWM"),s=e.n(o),i=e("IcnI"),u=e("YaEn"),c=e("zL8q"),l=(e.n(c),e("VKKs")),m=s.a.create({baseURL:"https://api.qyhever.com"});m.interceptors.request.use(function(t){var n=Object(l.c)();return n&&(t.headers.Authorization=n),i.a.commit("TOGGLE_LOADING",!0),t},function(t){return r.a.reject(t)}),m.interceptors.response.use(function(t){return 1===t.data.code?t.data.success=!0:(c.Message.closeAll(),c.Message.error(t.data.msg)),i.a.commit("TOGGLE_LOADING",!1),t.data},function(t){i.a.commit("TOGGLE_LOADING",!1);var n=t.response.status;return 401===n&&c.MessageBox.alert("登录状态失效，请重新登录","温馨提示",{confirmButtonText:"确定",callback:function(t){"confirm"===t&&i.a.dispatch("logout").then(function(){Object(l.f)(u.c.currentRoute.fullPath),u.c.replace({path:"/login",query:{redirect:u.c.currentRoute.fullPath}}),setTimeout(function(){window.location.reload()},20)})}}),404===n&&c.Message.error("404"),500===n&&c.Message.error("服务器异常"),r.a.reject(t)}),n.a=m},erWL:function(t,n){},fWXo:function(t,n){},jkKj:function(t,n){t.exports=BMap},nAIH:function(t,n){t.exports=window.CKEDITOR},oAV5:function(t,n,e){"use strict";e.d(n,"e",function(){return i}),n.b=function(t,n){return s()(t).format(n)},n.c=function(t){return s()(t).format("YYYY-MM-DD")},n.d=function(t){return s()(t).format("YYYY-MM-DD hh:mm:ss")},n.a=function(){return new r.a(function(t){var n=document.createElement("input");n.setAttribute("type","file"),n.setAttribute("accept","application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),n.onchange=function(n){var e=n.target.files[0];t(e)},n.click()})};var a=e("//Fk"),r=e.n(a),o=e("PJh5"),s=e.n(o),i=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/},tvR6:function(t,n){},uslO:function(t,n,e){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(t){return e(o(t))}function o(t){var n=a[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="uslO"},vMJZ:function(t,n,e){"use strict";e.d(n,"b",function(){return f}),e.d(n,"a",function(){return p}),e.d(n,"c",function(){return d});var a,r,o,s,i=e("Xxa5"),u=e.n(i),c=e("exGp"),l=e.n(c),m=e("cKc3"),f=(a=l()(u.a.mark(function t(n){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/user/login",t.abrupt("return",m.a.post(e,n));case 2:case"end":return t.stop()}},t,this)})),function(t){return a.apply(this,arguments)}),p=(r=l()(u.a.mark(function t(){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="/user/logout",t.abrupt("return",m.a.post(n));case 2:case"end":return t.stop()}},t,this)})),o=l()(u.a.mark(function t(n){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="/user/"+n,t.abrupt("return",m.a.get(e));case 2:case"end":return t.stop()}},t,this)})),function(t){return o.apply(this,arguments)}),d=(s=l()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",m.a.get("/refreshToken"));case 1:case"end":return t.stop()}},t,this)})),function(){return s.apply(this,arguments)})}},["NHnr"]);