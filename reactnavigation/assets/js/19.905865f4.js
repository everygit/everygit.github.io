(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{386:function(t,a,e){"use strict";e.r(a);var s=e(45),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"入门指南"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#入门指南"}},[t._v("#")]),t._v(" 入门指南")]),t._v(" "),e("p",[t._v("在本文档的“基础知识”部分是 React Navigation 最重要内容。 它应该涵盖了足够的知识，使您知道如何构建典型的小型移动应用程序，并为您提供了深入研究 React Navigation 的更高级部分所需的背景知识。")]),t._v(" "),e("h2",{attrs:{id:"先决条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#先决条件"}},[t._v("#")]),t._v(" 先决条件")]),t._v(" "),e("p",[t._v("如果您已经熟悉 JavaScript，React 和 React Native，那么您将能够快速使用 React Navigation！ 如果没有，我们强烈建议您先获得一些基本知识，然后在完成后再回到这里。")]),t._v(" "),e("p",[t._v("以下是一些可以帮助您的资源：")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"http://reactnativeexpress.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Native Express"),e("OutboundLink")],1),t._v(" (Sections 1 to 4)")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://reactjs.org/docs/hello-world.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Main Concepts of React"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://reactjs.org/docs/hooks-intro.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Hooks"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://reactjs.org/docs/context.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Context"),e("OutboundLink")],1),t._v(" (Advanced)")])]),t._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("p",[t._v("在 React Native 项目中安装所需的包:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @react-navigation/native\n")])])]),e("p",[t._v("React Navigation 由一些核心实用程序组成，然后，导航程序将这些实用程序用于在您的应用程序中创建导航结构。 现在不必为此担心太多，它很快就会变得清楚起来！ 为了提前完成安装工作，我们还要安装和配置大多数导航器使用的依赖项，然后我们就可以开始编写一些代码了。")]),t._v(" "),e("p",[t._v("我们现在将安装的库是 "),e("code",[t._v("react-native-gesture-handler")]),t._v("，"),e("code",[t._v("react-native-reanimated")]),t._v("，"),e("code",[t._v("react-native-screens")]),t._v(" 和 "),e("code",[t._v("react-native-safe-area-context")]),t._v(" 和 "),e("code",[t._v("@react-native-community/masked-view")]),t._v("。 如果您已经安装了这些库，并且已安装了最新版本，则在这里完成！ 否则，请继续阅读。")]),t._v(" "),e("h2",{attrs:{id:"将依赖项安装到-expo-管理的项目中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将依赖项安装到-expo-管理的项目中"}},[t._v("#")]),t._v(" 将依赖项安装到 Expo 管理的项目中")]),t._v(" "),e("p",[t._v("在你的项目目录下，运行:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view\n")])])]),e("p",[t._v("这将安装这些兼容库的版本。")]),t._v(" "),e("p",[t._v("现在，您可以继续 “Hello React Navigation” 以开始编写一些代码。")]),t._v(" "),e("h2",{attrs:{id:"将依赖项安装到空-react-native-项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将依赖项安装到空-react-native-项目"}},[t._v("#")]),t._v(" 将依赖项安装到空 React Native 项目")]),t._v(" "),e("p",[t._v("在你的项目目录下，运行:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view\n")])])]),e("blockquote",[e("p",[t._v("注意：安装后，您可能会收到与对等项依赖项有关的警告。 它们通常是由某些软件包中指定的版本范围不正确引起的。 只要您的应用可以构建，您就可以放心地忽略大多数警告。")])]),t._v(" "),e("blockquote",[e("p",[t._v("注意：如果将此项目与 "),e("code",[t._v("react-native-windows")]),t._v(" 一起使用，请省略 "),e("code",[t._v("react-native-gesture-handler")]),t._v("。")])]),t._v(" "),e("p",[t._v("从 React Native 0.60 及更高版本开始，链接是自动的。 因此，您不需要运行 react-native 链接。")]),t._v(" "),e("p",[t._v("如果您使用 Mac 并正在为 iOS 开发，则需要安装 Pod（通过 Cocoapods）以完成链接。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npx pod-install ios\n")])])]),e("p",[t._v("要完成 "),e("code",[t._v("react-native-gesture-handler")]),t._v(" 的安装，请在入口文件（例如 index.js 或 App.js）的顶部（确保它位于顶部，并且没有其他内容）之前添加以下内容：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import 'react-native-gesture-handler';\n")])])]),e("blockquote",[e("p",[t._v("注意：如果要针对 Android 或 iOS 进行构建，请不要跳过此步骤，否则即使在开发中工作正常，您的应用也可能会在生产中崩溃。 这不适用于其他平台。")])]),t._v(" "),e("p",[t._v("现在，我们需要将整个应用程序包装在 "),e("code",[t._v("NavigationContainer")]),t._v(" 中。 通常，您可以在入口文件（例如 index.js 或 App.js）中执行此操作：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-native-gesture-handler"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" React "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" NavigationContainer "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@react-navigation/native"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("NavigationContainer"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Rest of your app code */")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("NavigationContainer"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("st-quote",[e("p",[t._v("注意：使用导航器（例如堆栈导航器 "),e("code",[t._v("stack navigator")]),t._v("）时，您需要按照该导航器的安装说明进行操作，以获取任何其他依赖项。 如果出现错误 “Unable to resolve module”，则需要在项目中安装该模块。")])]),t._v(" "),e("p",[t._v("现在，您可以在设备/模拟器上构建并运行您的应用程序了。")]),t._v(" "),e("p",[t._v("继续 "),e("RouterLink",{attrs:{to:"/HELLO.html"}},[t._v("“Hello React Navigation”")]),t._v(" 以开始编写一些代码。")],1)],1)}),[],!1,null,null,null);a.default=r.exports}}]);