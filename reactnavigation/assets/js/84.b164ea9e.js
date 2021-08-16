(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{439:function(t,a,s){"use strict";s.r(a);var n=s(45),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用-typescript-进行类型检查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-typescript-进行类型检查"}},[t._v("#")]),t._v(" 使用 TypeScript 进行类型检查")]),t._v(" "),s("p",[t._v("React Navigation 是用 TypeScript 编写的，它为 TypeScript 项目导出类型定义。")]),t._v(" "),s("h2",{attrs:{id:"导航器的类型检查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导航器的类型检查"}},[t._v("#")]),t._v(" 导航器的类型检查")]),t._v(" "),s("p",[t._v("要检查路由名称和参数的类型，我们需要做的第一件事是创建一个对象类型，将路由名称映射到路由的参数。例如，假设我们在根导航中有一个名为 "),s("code",[t._v("Profile")]),t._v(" 的路由，它应该有一个参数 "),s("code",[t._v("userId")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("type RootStackParamList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Profile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" userId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("类似地，我们需要对每个路由做同样的事情:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("type RootStackParamList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Home"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Profile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" userId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Feed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sort"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"latest"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"top"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("指定 "),s("code",[t._v("undefined")]),t._v(" 意味着路由没有参数。带有 "),s("code",[t._v("undefined")]),t._v(" 的联合类型 ("),s("code",[t._v("例如，SomeType | undefined")]),t._v(") 意味着参数是可选的。")]),t._v(" "),s("p",[t._v("在定义了映射之后，我们需要告诉导航器使用它。为此，我们可以将它作为泛型传递给 "),s("code",[t._v("createXNavigator")]),t._v(" 函数:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createStackNavigator "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@react-navigation/stack'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" RootStack "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" createStackNavigator"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("RootStackParamList"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("然后我们可以使用它:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("RootStack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Navigator initialRouteName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Home"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("RootStack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Screen name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Home"')]),t._v(" component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Home"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("RootStack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Screen\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Profile"')]),t._v("\n    component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Profile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    initialParams"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" userId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("RootStack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Screen name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Feed"')]),t._v(" component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Feed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("RootStack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Navigator"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("这将为 "),s("code",[t._v("Navigator")]),t._v(" 和 "),s("code",[t._v("Screen")]),t._v(" 组件的 props 提供类型检查和智能提示。")]),t._v(" "),s("h2",{attrs:{id:"屏幕的类型检查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#屏幕的类型检查"}},[t._v("#")]),t._v(" 屏幕的类型检查")]),t._v(" "),s("p",[t._v("要检查屏幕，我们需要注解屏幕接收到的 "),s("code",[t._v("navigation")]),t._v("和 "),s("code",[t._v("route")]),t._v("。\n要注解导航道具，我们需要从导航器中导入相应的类型。例如，"),s("code",[t._v("@react-navigation/stack")]),t._v(" 中的 "),s("code",[t._v("StackNavigationProp")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" StackNavigationProp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@react-navigation/stack"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntype ProfileScreenNavigationProp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" StackNavigationProp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("\n  RootStackParamList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Profile"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntype Props "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  navigation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ProfileScreenNavigationProp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("code",[t._v("navigation")]),t._v(" 的类型接受 2 个泛型，我们在前面定义的参数列表对象，以及当前路由的名称。这允许我们输入检查路由名称和参数，你正在使用 "),s("code",[t._v("navigate")]),t._v("，"),s("code",[t._v("push")]),t._v(" 等。当你调用 "),s("code",[t._v("setParams")]),t._v(" 时，当前路由的名称是必要的。")]),t._v(" "),s("p",[t._v("类似地，你可以从"),s("code",[t._v("@react-navigation/drawer")]),t._v(" 中导入 "),s("code",[t._v("DrawerNavigationProp")]),t._v("，从"),s("code",[t._v("@react-navigation/bottom-tabs")]),t._v(" 中导入 "),s("code",[t._v("BottomTabNavigationProp")]),t._v(" 等等。")]),t._v(" "),s("p",[t._v("要注解这个 "),s("code",[t._v("route")]),t._v("，我们需要使用 "),s("code",[t._v("@react-navigation/native")]),t._v(" 中的 "),s("code",[t._v("RouteProp")]),t._v(" 类型:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" RouteProp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@react-navigation/native"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntype ProfileScreenRouteProp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" RouteProp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("RootStackParamList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Profile"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntype Props "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  route"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ProfileScreenRouteProp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("这允许我们输入检查路由对象，例如 "),s("code",[t._v("route.params")]),t._v("。")]),t._v(" "),s("p",[t._v("总而言之:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" RouteProp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@react-navigation/native"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" StackNavigationProp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@react-navigation/stack"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntype RootStackParamList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Home"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Profile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" userId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Feed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sort"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"latest"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"top"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntype ProfileScreenRouteProp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" RouteProp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("RootStackParamList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Profile"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntype ProfileScreenNavigationProp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" StackNavigationProp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("\n  RootStackParamList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Profile"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntype Props "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  route"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ProfileScreenRouteProp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  navigation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ProfileScreenNavigationProp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("或者，你也可以导入一个泛型类型来定义相应导航器中的 "),s("code",[t._v("navigation")]),t._v(" 和 "),s("code",[t._v("route")]),t._v(" 的类型:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" StackScreenProps "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@react-navigation/stack"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntype RootStackParamList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Home"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Profile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" userId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Feed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sort"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"latest"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"top"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntype Props "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" StackScreenProps"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("RootStackParamList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Profile"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("类似地，你可以从 "),s("code",[t._v("@react-navigation/drawer")]),t._v(" 导入 "),s("code",[t._v("DrawerScreenProps")]),t._v("，从 "),s("code",[t._v("@react-navigation/bottom-tabs")]),t._v(" 导入 "),s("code",[t._v("BottomTabScreenProps")]),t._v(" 等。")]),t._v(" "),s("p",[t._v("然后可以使用 "),s("code",[t._v("Props")]),t._v(" 类型来注解组件。")]),t._v(" "),s("p",[t._v("对于函数组件:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ProfileScreen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" navigation "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Props")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("对于 class 组件")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProfileScreen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("我们建议创建一个单独的 "),s("code",[t._v("types.tsx")]),t._v(" 文件，保存类型并将它们导入到组件文件中，而不是在每个文件中重复它们。")]),t._v(" "),s("h2",{attrs:{id:"嵌套导航器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#嵌套导航器"}},[t._v("#")]),t._v(" 嵌套导航器")]),t._v(" "),s("p",[s("strong",[t._v("嵌套导航器中的类型检查屏幕和参数")])]),t._v(" "),s("p",[t._v("你可以通过为嵌套屏幕传递 "),s("code",[t._v("screen")]),t._v(" 和 "),s("code",[t._v("params")]),t._v(" 属性来在嵌套导航器中导航到屏幕:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("navigation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("navigate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Home"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  screen"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Feed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  params"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sort"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"latest"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("为了能够检查它，我们需要从包含嵌套导航器的屏幕中提取参数。这可以使用 "),s("code",[t._v("NavigatorScreenParams")]),t._v(" 工具来完成:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" NavigatorScreenParams "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@react-navigation/native"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntype TabParamList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Home"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" NavigatorScreenParams"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("StackParamList"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Profile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" userId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("组合导航的 props")])]),t._v(" "),s("p",[t._v("当您嵌套导航器时，屏幕上的导航 prop 是多个导航 props 的组合。例如，如果我们在堆栈中有一个选项卡，"),s("code",[t._v("navigation")]),t._v(" 将同时具有 "),s("code",[t._v("jumpTo")]),t._v("(来自选项卡导航器)和 "),s("code",[t._v("push")]),t._v("(来自堆栈导航器)。为了更容易地组合多个导航器的类型，你可以使用 "),s("code",[t._v("CompositeNavigationProp")]),t._v(" 类型:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CompositeNavigationProp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@react-navigation/native"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" BottomTabNavigationProp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@react-navigation/bottom-tabs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" StackNavigationProp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@react-navigation/stack"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntype ProfileScreenNavigationProp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CompositeNavigationProp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("\n  BottomTabNavigationProp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("TabParamList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Profile"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  StackNavigationProp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("StackParamList"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("code",[t._v("CompositeNavigationProp")]),t._v(" 类型有 2 个参数，第一个参数是主导航类型(拥有这个屏幕的导航器的类型，在我们的例子中是包含 "),s("code",[t._v("Profile")]),t._v(" 屏幕的选项卡导航器)，第二个参数是辅助导航类型(父导航器的类型)。主导航类型应该始终将屏幕的路由名作为第二个参数。")]),t._v(" "),s("p",[t._v("对于多个父导航器，次要类型应该是嵌套的:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("type ProfileScreenNavigationProp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CompositeNavigationProp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("\n  BottomTabNavigationProp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("TabParamList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Profile"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  CompositeNavigationProp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("\n    StackNavigationProp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("StackParamList"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    DrawerNavigationProp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DrawerParamList"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"注解-usenavigation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注解-usenavigation"}},[t._v("#")]),t._v(" 注解 "),s("code",[t._v("useNavigation")])]),t._v(" "),s("p",[t._v("要注释我们从 "),s("code",[t._v("useNavigation")]),t._v(" 中获得的 "),s("code",[t._v("navigation")]),t._v("，我们可以使用类型参数:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" navigation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" useNavigation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ProfileScreenNavigationProp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("需要注意的是，这并不是完全类型安全的，因为您使用的类型参数可能不正确，我们无法静态验证它。")]),t._v(" "),s("h2",{attrs:{id:"注解-useroute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注解-useroute"}},[t._v("#")]),t._v(" 注解 "),s("code",[t._v("useRoute")])]),t._v(" "),s("p",[t._v("要注释我们从 "),s("code",[t._v("useRoute")]),t._v(" 中获得的 "),s("code",[t._v("route")]),t._v("，我们可以使用类型参数:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" route "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" useRoute"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ProfileScreenRouteProp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("需要注意的是，这并不是完全类型安全的，类似于 "),s("code",[t._v("useNavigation")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"注解-options-和-screenoptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注解-options-和-screenoptions"}},[t._v("#")]),t._v(" 注解 "),s("code",[t._v("options")]),t._v(" 和 "),s("code",[t._v("screenOptions")])]),t._v(" "),s("p",[t._v("当您将选项传递给 "),s("code",[t._v("Screen")]),t._v(" 或 "),s("code",[t._v("screenOptions")]),t._v(" 给 "),s("code",[t._v("Navigator")]),t._v(" 组件时，它们已经进行了类型检查，不需要做任何特殊操作。但是，有时您可能希望将选项提取到一个单独的对象，并且您可能希望对它进行注释。")]),t._v(" "),s("p",[t._v("为了注释选项，我们需要从导航器中导入相应的类型。例如，"),s("code",[t._v("@react-navigation/stack")]),t._v(" 的 "),s("code",[t._v("StackNavigationOptions")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" StackNavigationOptions "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@react-navigation/stack"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" StackNavigationOptions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  headerShown"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("类似地，你可以从 "),s("code",[t._v("@react-navigation/drawer")]),t._v(" 中导入 "),s("code",[t._v("DrawerNavigationOptions")]),t._v("，从"),s("code",[t._v("@react-navigation/bottom-tabs")]),t._v(" 中导入 "),s("code",[t._v("BottomTabNavigationOptions")]),t._v(" 等")]),t._v(" "),s("h2",{attrs:{id:"注解-ref-和-navigationcontainer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注解-ref-和-navigationcontainer"}},[t._v("#")]),t._v(" 注解 "),s("code",[t._v("ref")]),t._v(" 和 "),s("code",[t._v("NavigationContainer")])]),t._v(" "),s("p",[t._v("当向 "),s("code",[t._v("NavigationContainer")]),t._v(" 添加参考时，可以使用 "),s("code",[t._v("NavigationContainerRef")]),t._v(" 类型对其进行注解。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" NavigationContainerRef "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@react-navigation/native"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" navigationRef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("useRef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" NavigationContainerRef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("使用 "),s("code",[t._v("React.createRef")]),t._v(" 的例子")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" NavigationContainerRef "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@react-navigation/native'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" navigationRef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("createRef"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("NavigationContainerRef"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);