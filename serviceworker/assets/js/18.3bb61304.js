(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{367:function(e,t,a){"use strict";a.r(t);var n=a(42),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"extendableevent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extendableevent"}},[e._v("#")]),e._v(" ExtendableEvent")]),e._v(" "),a("p",[e._v("作为 service worker 生命周期的一部分，ExtendableEvent接口延长了在全局范围上install和activate事件的生命周期。这样可以确保在升级数据库架构并删除过时的caches之前，不会调度任何函数事件（如FetchEvent）。\n如果在ExtendableEvent处理程序之外调用waitUntil()，浏览器应该抛出一个InvalidStateError；还要注意，多个调用将堆积起来，结果promises 将添加到extend lifetime promises.")]),e._v(" "),a("h2",{attrs:{id:"方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[e._v("#")]),e._v(" 方法")]),e._v(" "),a("p",[e._v("ExtendableEvent.waitUntil()")]),e._v(" "),a("p",[e._v("延长事件的生存期。它将在service worker 的 install 和 activate 事件中被调用。")])])}),[],!1,null,null,null);t.default=r.exports}}]);