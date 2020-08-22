(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["p-Page-vue","p-IframeOperate-vue"],{1874:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" 你在 "),a("strong",{staticClass:"text-strong"},[t._v(t._s(t.pageTime))]),t._v(" 秒前打开本页面 ")])},r=[],s={name:"PageTimer",data:function(){return{openTime:new Date,pageTime:0}},mounted:function(){this.updatePageTime()},activated:function(){this.updatePageTime()},deactivated:function(){this.clearPageTimer()},beforeDestroy:function(){this.clearPageTimer()},methods:{calcPageTime:function(){this.pageTime=Math.floor((new Date-this.openTime)/1e3)},updatePageTime:function(){this.calcPageTime(),this.clearPageTimer(),this.pageTimer=setInterval(this.calcPageTime,1e3)},clearPageTimer:function(){clearInterval(this.pageTimer)}}},i=s,c=a("2877"),o=Object(c["a"])(i,n,r,!1,null,null,null);e["a"]=o.exports},2048:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{on:{click:t.click}},[t._v("页面"+t._s(t.pageId))]),a("page-timer"),a("h3",[t._v("页签操作")]),a("p",[a("router-link",{staticClass:"demo-btn",attrs:{to:t.nextId}},[t._v(" 打开“页面"+t._s(t.nextId)+"” ")]),a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$tabs.open(t.nextId,!0)}}},[t._v(" 全新打开“页面"+t._s(t.nextId)+"” ")])],1),t.prevId>0?a("p",[a("router-link",{staticClass:"demo-btn",attrs:{to:t.prevId}},[t._v(" 打开“页面"+t._s(t.prevId)+"” ")]),a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$tabs.open(t.prevId,!0)}}},[t._v(" 全新打开“页面"+t._s(t.prevId)+"” ")])],1):t._e(),a("p",[a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$router.push("../tab-dynamic")}}},[t._v(" 打开“动态更新页签” ")]),a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$tabs.close("../tab-dynamic")}}},[t._v(" 关闭“动态更新页签” ")])]),a("p",[a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$tabs.refresh()}}},[t._v("刷新当前页面")]),a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$tabs.close()}}},[t._v("关闭当前页面")]),a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$tabs.close(null,"../tab-dynamic")}}},[t._v(" 关闭当前并跳转 ")])]),a("p",[a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$tabs.refreshAll()}}},[t._v("刷新所有页面")]),a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$tabs.reset()}}},[t._v("重置页签")])]),a("iframe-operate"),a("h3",[t._v("路由信息")]),a("page-route-info")],1)},r=[],s=a("1874"),i=a("ce92"),c=a("ccdb"),o={name:"Page",components:{PageTimer:s["a"],PageRouteInfo:i["a"],IframeOperate:c["default"]},data:function(){var t=this.$route.params.id;return{pageId:t,nextId:+t+1+"",prevId:+t-1+""}},methods:{click:function(){console.log("页面".concat(this.pageId))}}},l=o,u=a("2877"),m=Object(u["a"])(l,n,r,!1,null,null,null);e["default"]=m.exports},7694:function(t,e,a){"use strict";var n=a("9612"),r=a.n(n);r.a},9612:function(t,e,a){},ccdb:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Iframe 页签操作")]),a("p",[a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$tabs.openIframe(t.site.src,t.site.title,t.icon)}}},[t._v(" 打开“"+t._s(t.site.title)+"” ")]),a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$tabs.refreshIframe(t.site.src)}}},[t._v(" 刷新“"+t._s(t.site.title)+"” ")]),a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$tabs.closeIframe(t.site.src)}}},[t._v(" 关闭“"+t._s(t.site.title)+"” ")])]),a("p",[a("a",{staticClass:"demo-btn",attrs:{title:"XSS 跨站链接的 iframe 将展示空白页面"},on:{click:function(e){t.$tabs.openIframe("javascript:alert(window.parent.document.body.innerHTML)","XSS 跨站",t.icon)}}},[t._v(" XSS 跨站 ")])]),a("h3",[t._v("打开 Iframe 页签")]),a("div",{staticClass:"custom-iframe"},[a("label",[t._v(" 名称： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.iframe.title,expression:"iframe.title"}],attrs:{name:"title",placeholder:"页签标题"},domProps:{value:t.iframe.title},on:{input:function(e){e.target.composing||t.$set(t.iframe,"title",e.target.value)}}})]),a("label",[t._v(" 网址： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.iframe.src,expression:"iframe.src"}],attrs:{name:"src",placeholder:"请输入完整的网址"},domProps:{value:t.iframe.src},on:{input:function(e){e.target.composing||t.$set(t.iframe,"src",e.target.value)}}})]),a("a",{staticClass:"demo-btn primary",on:{click:function(e){t.iframe.src&&t.$tabs.openIframe(t.iframe.src,t.iframe.title,t.icon)}}},[t._v(" 打开页签 ")])]),/^\/iframe\//.test(t.$route.path)?[a("h3",{staticClass:"text-strong"},[t._v(" 提示： ")]),t._m(0)]:t._e()],2)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" 开启浏览器开发者工具的 console 页签，打开 Iframe 页签并查看 "),a("code",[t._v("iframe-mounted")]),t._v(" 和 "),a("code",[t._v("iframe-loaded")]),t._v(" 事件的参数打印 ")])}],s={name:"IframeOperate",data:function(){return{icon:"rt-icon-web",site:{src:"https://cn.vuejs.org",title:"Vue.js"},iframe:{src:"https://router.vuejs.org/zh/",title:"Vue Router"}}}},i=s,c=(a("7694"),a("2877")),o=Object(c["a"])(i,n,r,!1,null,"0a34e7f4",null);e["default"]=o.exports},ce92:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"demo-table"},[a("tr",[a("th",{attrs:{width:"80"}},[t._v(" name ")]),a("td",[t._v(t._s(t.$route.name))])]),a("tr",[a("th",[t._v("path")]),a("td",[t._v(t._s(t.$route.path))])]),a("tr",[a("th",[t._v("params")]),a("td",[t._v(t._s(t.$route.params))])]),a("tr",[a("th",[t._v("query")]),a("td",[t._v(t._s(t.$route.query))])]),a("tr",[a("th",[t._v("hash")]),a("td",[t._v(t._s(t.$route.hash))])]),a("tr",[a("th",[t._v("fullPath")]),a("td",[t._v(t._s(t.$route.fullPath))])]),a("tr",[t._m(0),a("td",[t._v(t._s(t.$route.meta))])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",[a("b",[t._v("meta")])])}],s=a("2877"),i={},c=Object(s["a"])(i,n,r,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=p-Page-vue.5527003f.js.map