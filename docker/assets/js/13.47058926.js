(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{367:function(s,t,a){"use strict";a.r(t);var e=a(42),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"创建镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建镜像"}},[s._v("#")]),s._v(" 创建镜像")]),s._v(" "),a("p",[s._v("有很多中创建镜像的方式")]),s._v(" "),a("h2",{attrs:{id:"从现有的容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从现有的容器"}},[s._v("#")]),s._v(" 从现有的容器")]),s._v(" "),a("p",[s._v("从已有的容器，可能又安装一些应用，比如 node 的镜像，安装很多的依赖，可以直接创建一个镜像")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sss"')]),s._v(" -a "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sbt"')]),s._v(" 9216e4a2967a sbt0198/ubuntu:v3\n")])])]),a("blockquote",[a("p",[s._v("9216e4a2967a 为容器 ID，而不是镜像 ID")])]),s._v(" "),a("h2",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),a("p",[s._v("先看命令：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker build -t sbt0198/centos:6.7 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])])]),a("ul",[a("li",[s._v("-t 是指定要创建的镜像名")]),s._v(" "),a("li",[s._v(". 代表 Dockerfile 的路径")])]),s._v(" "),a("p",[s._v("关于 Dockerfile 的配置，后面专门介绍")])])}),[],!1,null,null,null);t.default=r.exports}}]);