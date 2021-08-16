(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{368:function(t,a,s){"use strict";s.r(a);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"配置标题栏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置标题栏"}},[t._v("#")]),t._v(" 配置标题栏")]),t._v(" "),s("p",[t._v("我们已经看到了如何配置标题，但让我们再来一遍，然后继续其他选项-重复是学习的关键!")]),t._v(" "),s("h2",{attrs:{id:"设置标题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置标题"}},[t._v("#")]),t._v(" 设置标题")]),t._v(" "),s("p",[t._v("Screen 组件接受 "),s("code",[t._v("options")]),t._v(" 属性，它可以是一个对象，也可以是一个返回对象的函数，该对象包含各种配置选项。我们在标头标题中使用的是 "),s("code",[t._v("title")]),t._v(" ，如下面的示例所示。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StackScreen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Navigator"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Screen\n        name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Home"')]),t._v("\n        component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("HomeScreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My home"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Navigator"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"在标题中使用参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在标题中使用参数"}},[t._v("#")]),t._v(" 在标题中使用参数")]),t._v(" "),s("p",[t._v("为了在标题中使用参数，我们需要为屏幕的 "),s("code",[t._v("options")]),t._v(" 设置一个返回配置对象的函数。 在 "),s("code",[t._v("options")]),t._v(" 属性中使用 "),s("code",[t._v("this.props")]),t._v(" 可能很诱人，但是因为它是在组件呈现之前定义的，所以 "),s("code",[t._v("this")]),t._v(" 不能引用组件的实例，因此没有属性可用。相反，如果我们将 "),s("code",[t._v("options")]),t._v(" 作为一个函数，那么 React Navigation 将使用一个包含 "),s("code",[t._v("{ navigation, route }")]),t._v(" 的对象来调用它 —— 在本例中，我们只关心 "),s("code",[t._v("route")]),t._v("，这是与传递到您的屏幕 "),s("code",[t._v("props")]),t._v(" 中的 "),s("code",[t._v("route")]),t._v(" 是同一个对象。你可能还记得，我们可以通过路由得到参数。下面我们这样做是为了提取一个参数并将它用作一个标题。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StackScreen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Navigator"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Screen\n        name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Home"')]),t._v("\n        component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("HomeScreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My home"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Screen\n        name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Profile"')]),t._v("\n        component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ProfileScreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" route "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Navigator"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("传递给 "),s("code",[t._v("options")]),t._v(" 函数的参数是一个具有以下属性的对象:")]),t._v(" "),s("ul",[s("li",[t._v("navigation — 屏幕上的 "),s("code",[t._v("navigation prop")]),t._v("。")]),t._v(" "),s("li",[t._v("route - 屏幕的 "),s("code",[t._v("route prop")])])]),t._v(" "),s("p",[t._v("在上面的例子中，我们只需要 "),s("code",[t._v("route")]),t._v("，但是在某些情况下，你可能也想使用 "),s("code",[t._v("navigation")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"使用-setoptions-更新-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-setoptions-更新-options"}},[t._v("#")]),t._v(" 使用 "),s("code",[t._v("setOptions")]),t._v(" 更新 "),s("code",[t._v("options")])]),t._v(" "),s("p",[t._v("通常需要从挂载的屏幕组件本身更新活动屏幕的 "),s("code",[t._v("options")]),t._v(" 配置。我们可以使用 "),s("code",[t._v("navigation.setOptions")]),t._v(" 来实现这一点")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Inside of render() of React class */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Button\n  title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Update the title"')]),t._v("\n  onPress"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" navigation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Updated!"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"调整页眉样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调整页眉样式"}},[t._v("#")]),t._v(" 调整页眉样式")]),t._v(" "),s("p",[t._v("有三个关键属性用于自定义你的标题的样式: "),s("code",[t._v("headerStyle")]),t._v(", "),s("code",[t._v("headerTintColor")]),t._v(" 和 "),s("code",[t._v("headerTitleStyle")]),t._v("。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("headerStyle")]),t._v(": 一个样式对象，将被应用到包装头部的 "),s("code",[t._v("View")]),t._v(" 中。如果你设置了 "),s("code",[t._v("backgroundColor")]),t._v("，它就会成为你 "),s("code",[t._v("header")]),t._v(" 的颜色。")]),t._v(" "),s("li",[s("code",[t._v("headerTintColor")]),t._v(": 后退按钮和标题都使用这个属性作为它们的颜色。在下面的例子中，我们将颜色设置为白色("),s("code",[t._v("#fff")]),t._v(")，这样后退按钮和标题将是白色的。")]),t._v(" "),s("li",[s("code",[t._v("headerTitleStyle")]),t._v(": 如果我们想定制标题的 "),s("code",[t._v("fontFamily")]),t._v(", "),s("code",[t._v("fontWeight")]),t._v(" 和其他 "),s("code",[t._v("Text")]),t._v(" 样式属性，我们可以使用这个来做。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StackScreen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Navigator"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Screen\n        name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Home"')]),t._v("\n        component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("HomeScreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My home"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          headerStyle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            backgroundColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#f4511e"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          headerTintColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#fff"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          headerTitleStyle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            fontWeight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bold"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Navigator"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://reactnavigation.org/assets/images/custom_headers-70512af908cc5083811ae478a1d36425.png",alt:""}})]),t._v(" "),s("p",[t._v("这里有几件事需要注意:")]),t._v(" "),s("ol",[s("li",[t._v("在 iOS 上，状态栏的文本和图标都是黑色的，这在深色背景下看起来不太好。我们不会在这里讨论它，但是您应该确保配置状态栏以适应您的屏幕颜色，如 "),s("a",{attrs:{href:"https://reactnavigation.org/docs/status-bar",target:"_blank",rel:"noopener noreferrer"}},[t._v("状态栏指南"),s("OutboundLink")],1),t._v(" 中所述。")]),t._v(" "),s("li",[t._v("我们设置的配置只适用于主屏幕;当我们导航到细节屏幕时，默认的样式又回来了。现在我们来看一下如何在屏幕之间共享选项。")])]),t._v(" "),s("h1",{attrs:{id:"跨屏幕共享公共选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨屏幕共享公共选项"}},[t._v("#")]),t._v(" 跨屏幕共享公共选项")]),t._v(" "),s("p",[t._v("通常希望以类似的方式在多个屏幕上配置标题。例如，您的公司品牌颜色可能是红色的，因此您希望标题背景色为红色，色调为白色。这些就是我们正在运行的示例中使用的颜色，您会注意到，当您导航到"),s("code",[t._v("DetailsScreen")]),t._v("时，颜色返回到默认值。如果我们必须将 "),s("code",[t._v("options")]),t._v(" 标题样式属性从 "),s("code",[t._v("HomeScreen")]),t._v(" 复制到 "),s("code",[t._v("DetailsScreen")]),t._v("，并为我们在应用中使用的每个屏幕组件复制选项，这不是很糟糕吗?谢天谢地，我们没有。我们可以将配置移到堆栈导航器的 "),s("code",[t._v("screenOptions")]),t._v(" 属性下面。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StackScreen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Navigator\n      screenOptions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        headerStyle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          backgroundColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#f4511e"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        headerTintColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#fff"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        headerTitleStyle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          fontWeight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bold"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Screen\n        name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Home"')]),t._v("\n        component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("HomeScreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My home"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Navigator"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("现在，任何屏幕属于 "),s("code",[t._v("StackScreen")]),t._v(" 将有我们美妙的品牌风格。当然，如果我们需要的话，一定有办法推翻这些选项吧?")]),t._v(" "),s("h2",{attrs:{id:"用自定义组件替换标题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用自定义组件替换标题"}},[t._v("#")]),t._v(" 用自定义组件替换标题")]),t._v(" "),s("p",[t._v("有时您需要更多的控制，而不仅仅是更改标题的文本和样式——例如，您可能想要渲染一个图像来代替标题，或将标题变成一个按钮。在这些情况下，您可以完全覆盖用于标题的组件，并提供您自己的组件。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("LogoTitle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Image\n      style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      source"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@expo/snack-static/react-native-logo.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StackScreen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Navigator"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Screen\n        name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Home"')]),t._v("\n        component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("HomeScreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("headerTitle")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("LogoTitle "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Navigator"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("您可能想知道，当我们提供组件而不是像以前那样提供 "),s("code",[t._v("title")]),t._v(" 时，为什么要提供 "),s("code",[t._v("headerTitle")]),t._v(" 呢? 原因是，"),s("code",[t._v("headerTitle")]),t._v(" 是一个特定于堆栈导航器的属性，"),s("code",[t._v("headerTitle")]),t._v(" 默认为一个显示标题的 "),s("code",[t._v("Text")]),t._v(" 组件。")])]),t._v(" "),s("h2",{attrs:{id:"额外的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#额外的配置"}},[t._v("#")]),t._v(" 额外的配置")]),t._v(" "),s("p",[t._v("您可以在 "),s("a",{attrs:{href:"https://reactnavigation.org/docs/stack-navigator#navigationoptions-used-by-stacknavigator",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("createStackNavigator")]),s("OutboundLink")],1),t._v(" 引用中阅读堆栈导航器中屏幕的可用 "),s("code",[t._v("options")]),t._v(" 的完整列表。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ul",[s("li",[t._v("您可以自定义屏幕组件的 "),s("code",[t._v("options")]),t._v(" 属性内部的标题。请阅读 "),s("a",{attrs:{href:"https://reactnavigation.org/docs/stack-navigator#navigationoptions-used-by-stacknavigator",target:"_blank",rel:"noopener noreferrer"}},[t._v("API 参考"),s("OutboundLink")],1),t._v(" 中的完整选项列表。")]),t._v(" "),s("li",[s("code",[t._v("options")]),t._v(" 可以是对象或函数。当它是一个函数时，它会提供一个带有 "),s("code",[t._v("navigation")]),t._v(" 和 "),s("code",[t._v("route")]),t._v(" 属性的对象。")]),t._v(" "),s("li",[t._v("初始化堆栈导航器时，还可以在堆栈导航器配置中指定共享 "),s("code",[t._v("screenOptions")]),t._v("。这个属性优先于配置。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);