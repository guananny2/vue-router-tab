(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{409:function(v,_,e){"use strict";e.r(_);var o=e(27),t=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方案"}},[v._v("#")]),v._v(" 方案")]),v._v(" "),e("p",[v._v("Vue Router Tab 实现过程中遇到的"),e("strong",[v._v("问题及解决方案")]),v._v("，也欢迎提出更好的点子。")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("相同路由需要根据 "),e("code",[v._v("route.params")]),v._v(" 或 "),e("code",[v._v("route.query")]),v._v(" 不同，根据规则生成不同的缓存：")]),v._v(" "),e("p",[e("code",[v._v("<router-view>")]),v._v(" 添加 "),e("code",[v._v("key")]),v._v(" 属性，根据 "),e("code",[v._v("key")]),v._v(" 不同生成不同的实例。")])]),v._v(" "),e("li",[e("p",[v._v("通过 "),e("code",[v._v("<keep-alive>")]),v._v(" 组件实例，精准控制缓存：")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("获取 "),e("code",[v._v("<keep-alive>")]),v._v(" 实例：")]),v._v(" "),e("p",[v._v("在 "),e("code",[v._v("<transition>")]),v._v(" 过渡组件包裹下，通过 "),e("code",[v._v("this._vnode.children[0].child._vnode.componentInstance")]),v._v(" 获取 "),e("code",[v._v("<keep-alive>")]),v._v(" 组件实例。")])]),v._v(" "),e("li",[e("p",[v._v("匹配并移除缓存：")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("根据缓存 "),e("code",[v._v("$alive.cache[i].data.key")]),v._v(" 来匹配缓存。")])]),v._v(" "),e("li",[e("p",[v._v("销毁当前缓存组件实例："),e("code",[v._v("$alive.cache[key].componentInstance.$destroy()")]),v._v("。")])]),v._v(" "),e("li",[e("p",[v._v("从 "),e("code",[v._v("$alive.keys")]),v._v(" 数组中移除当前 "),e("code",[v._v("key")]),v._v("。")])])])])])]),v._v(" "),e("li",[e("p",[v._v("页面组件强制刷新：")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("移除当前页面组件缓存。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("router-view")]),v._v(" 组件通过 "),e("code",[v._v("v-if")]),v._v(" 隐藏，在过渡效果结束或 "),e("code",[v._v("nextTick")]),v._v(" 后再显示。")])])])]),v._v(" "),e("li",[e("p",[v._v("获取当前组件所在的路由深度：")]),v._v(" "),e("p",[v._v("递归查找最近的拥有 "),e("code",[v._v("$vnode.data.routerViewDepth")]),v._v(" 的父组件的对应值。")])]),v._v(" "),e("li",[e("p",[v._v("嵌套路由 "),e("code",[v._v("<router-view>")]),v._v(" 的 "),e("code",[v._v("key")]),v._v("，如果直接从 "),e("code",[v._v("$route")]),v._v(" 中获取，子路由切换时会生成不同缓存：")]),v._v(" "),e("p",[v._v("应该从 "),e("code",[v._v("$route.matched")]),v._v(" 中匹配当前嵌套深度所在路由的 "),e("code",[v._v("path")]),v._v("。")])]),v._v(" "),e("li",[e("p",[v._v("打开开启缓存的嵌套路由的一个子路由页面 "),e("strong",[v._v("a")]),v._v("，然后访问其他路由页面，再直接访问嵌套路由的另一个子路由页面 "),e("strong",[v._v("b")]),v._v("，此时展示的依然是 "),e("strong",[v._v("a")]),v._v("，与路由地址不匹配")]),v._v(" "),e("p",[v._v("通过 "),e("code",[v._v("activated")]),v._v(" 钩子，页面组件执行 "),e("code",[v._v("$forceUpdate")]),v._v(" 强制更新。")]),v._v(" "),e("p",[v._v("副作用：子路由页面 "),e("strong",[v._v("a")]),v._v(" 仍会触发 "),e("code",[v._v("activated")]),v._v(" 钩子")])]),v._v(" "),e("li",[e("p",[v._v("iframe 页面页签切换后会重新加载：")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("将 "),e("code",[v._v("<iframe>")]),v._v(" 节点放在页面所在 "),e("code",[v._v("<router-view>")]),v._v(" 的外层，通过 "),e("code",[v._v("v-show")]),v._v(" 控制显示隐藏。")])]),v._v(" "),e("li",[e("p",[v._v("建立 iframe 路由页面组件，通过生命周期钩子来添加、显示、隐藏、移除 "),e("code",[v._v("<iframe>")]),v._v(" dom 节点。")])])])]),v._v(" "),e("li",[e("p",[v._v("打包后的 js 文件太庞大：")]),v._v(" "),e("p",[v._v("构建库时，配置 "),e("code",[v._v("babel.config.js")]),v._v(" 中 "),e("code",[v._v("useBuiltIns")]),v._v(" 为 "),e("code",[v._v("false")]),v._v("，打包时不包含 Polyfill。")])])])])}),[],!1,null,null,null);_.default=t.exports}}]);