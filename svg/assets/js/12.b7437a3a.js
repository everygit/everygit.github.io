(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{366:function(a,t,e){"use strict";e.r(t);var r=e(42),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"曲线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#曲线"}},[a._v("#")]),a._v(" 曲线")]),a._v(" "),e("p",[a._v("曲线分为大曲和特曲，啊呸，曲线分为贝塞尔曲线和弧形；贝塞尔曲线的话，用过 Photoshop 的话，里面的钢笔用的就是贝塞尔曲线了；这里不做太多的解释，后面找个时间具体研究下贝塞尔曲线，以及其中的一些数学公式。")]),a._v(" "),e("h2",{attrs:{id:"三次贝塞尔"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三次贝塞尔"}},[a._v("#")]),a._v(" 三次贝塞尔")]),a._v(" "),e("p",[a._v("三次贝塞尔曲线需要定义一个点和两个控制点，三次贝塞尔使用 C 命令")]),a._v(" "),e("h3",{attrs:{id:"代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[a._v("#")]),a._v(" 代码")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("C x1 y1, x2 y2, x y\nc dx1 dy1, dx2 dy2, dx dy\n")])])]),e("ul",[e("li",[a._v("x1 y1 第一个控制点的位置坐标")]),a._v(" "),e("li",[a._v("x2 y2 第二个控制点的位置坐标")]),a._v(" "),e("li",[a._v("x y 终点的位置坐标")])]),a._v(" "),e("blockquote",[e("p",[a._v("简单点理解就好了")])]),a._v(" "),e("h3",{attrs:{id:"s-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#s-命令"}},[a._v("#")]),a._v(" S 命令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("S x2 y2, x y\ns dx2 dy2, dx dy\n")])])]),e("p",[a._v("当 S 命令在 C 命令或者 S 命令后面，那么它的第一个控制点会是前一个曲线的第二个控制点的对称点；当 S 是孤独的存在时，当前起始点就是第一个控制点")]),a._v(" "),e("h3",{attrs:{id:"实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://codepen.io/everygit/pen/MWozLgy",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://codepen.io/everygit/pen/MWozLgy"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"二次贝塞尔"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二次贝塞尔"}},[a._v("#")]),a._v(" 二次贝塞尔")]),a._v(" "),e("p",[a._v("二次贝塞尔只有一个控制点")]),a._v(" "),e("h3",{attrs:{id:"语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Q x1 y1, x y\nq dx1 dy1, dx dy\n")])])]),e("ul",[e("li",[a._v("x1 y1 控制点位置坐标")]),a._v(" "),e("li",[a._v("x y 终点位置坐标")])]),a._v(" "),e("h3",{attrs:{id:"t-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#t-命令"}},[a._v("#")]),a._v(" T 命令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("T x y\nt dx dy\n")])])]),e("p",[a._v("和 S 命令的效果类似，控制点的位置也是对称的。什么？ T 命令单独出现会怎样，不会怎么，就是一条直线而已")]),a._v(" "),e("h2",{attrs:{id:"弧形"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#弧形"}},[a._v("#")]),a._v(" 弧形")]),a._v(" "),e("p",[a._v("弧形是圆或者椭圆的一部分，画弧形会用到 A 命令")]),a._v(" "),e("h3",{attrs:{id:"代码-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码-2"}},[a._v("#")]),a._v(" 代码")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("A rx ry x-axis-rotation large-arc-flag sweep-flag x y\na rx ry x-axis-rotation large-arc-flag sweep-flag dx dy\n")])])]),e("ul",[e("li",[a._v("rx 长轴半径")]),a._v(" "),e("li",[a._v("ry 短轴半径")]),a._v(" "),e("li",[a._v("x-axis-rotation 旋转的角度")]),a._v(" "),e("li",[a._v("large-arc-flag 是否为大角圆弧 0 表示小角圆弧 1 表示大角圆弧")]),a._v(" "),e("li",[a._v("sweep-flag 弧线的防线 0 表示从起点到终点为逆时针，1 表示从起点到终点为顺时针")]),a._v(" "),e("li",[a._v("x y 终点的位置坐标")])]),a._v(" "),e("h3",{attrs:{id:"实例-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例-2"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://codepen.io/everygit/pen/wveQZam",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://codepen.io/everygit/pen/wveQZam"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);