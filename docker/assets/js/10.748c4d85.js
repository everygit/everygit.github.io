(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{366:function(a,t,e){"use strict";e.r(t);var s=e(42),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[a._v("#")]),a._v(" Dockerfile")]),a._v(" "),e("p",[a._v("Dockerfile 是一个用来构建镜像的文本文件")]),a._v(" "),e("h2",{attrs:{id:"简单的例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单的例子"}},[a._v("#")]),a._v(" 简单的例子")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("FROM nginx\nRUN echo '这是一个本地构建的nginx镜像' > /usr/share/nginx/html/index.html\n")])])]),e("h2",{attrs:{id:"指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[a._v("#")]),a._v(" 指令")]),a._v(" "),e("h3",{attrs:{id:"from"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[a._v("#")]),a._v(" FROM")]),a._v(" "),e("p",[a._v("定制镜像所需要的基础镜像")]),a._v(" "),e("h3",{attrs:{id:"run"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[a._v("#")]),a._v(" RUN")]),a._v(" "),e("p",[a._v("用于执行后面跟着的命令行命令")]),a._v(" "),e("ul",[e("li",[a._v("shell 格式 直接的命令格式")]),a._v(" "),e("li",[a._v("exec 格式 将命令拆分为数组")])]),a._v(" "),e("h3",{attrs:{id:"copy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copy"}},[a._v("#")]),a._v(" COPY")]),a._v(" "),e("p",[a._v("复制指令，从上下文目录中复制文件或者目录到容器里指定路径。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("COPY hom* /mydir/\n")])])]),e("h3",{attrs:{id:"add"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[a._v("#")]),a._v(" ADD")]),a._v(" "),e("p",[a._v("类似于 COPY，官方建议用 COPY，对于压缩文件会自动解压。")]),a._v(" "),e("h3",{attrs:{id:"cmd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[a._v("#")]),a._v(" CMD")]),a._v(" "),e("p",[a._v("类似于 RUN，但不同于 RUN。")]),a._v(" "),e("p",[a._v("RUN 作用于 docker build 的过程中"),e("br"),a._v("\nCMD 作用于 docker 运行时")]),a._v(" "),e("blockquote",[e("p",[a._v("会被 docker run 的命令覆盖，并且有多个 CMD 时，仅最后一个生效")])]),a._v(" "),e("h3",{attrs:{id:"entrypoint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint"}},[a._v("#")]),a._v(" ENTRYPOINT")]),a._v(" "),e("p",[a._v("类似于 CMD ，但不会被 docker run 的命令覆盖， docker run 的命令可以当做变参传递给 ENTRYPOINT")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('FROM nginx\n\nENTRYPOINT ["nginx", "-c"] # 定参\nCMD ["/etc/nginx/nginx.conf"] # 变参\n')])])]),e("p",[a._v("相当于")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("nginx -c /etc/nginx/nginx.conf\n")])])]),e("p",[a._v("传递参数时")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker run  nginx:test -c /etc/nginx/new.conf\n")])])]),e("p",[a._v("相当于")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("nginx -c /etc/nginx/new.conf\n")])])]),e("h3",{attrs:{id:"env"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[a._v("#")]),a._v(" ENV")]),a._v(" "),e("p",[a._v("设置环境变量，定义了环境变量，那么在后续的指令中，就可以使用这个环境变量。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ENV NODE_VERSION 7.2.0\n")])])]),e("h3",{attrs:{id:"arg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arg"}},[a._v("#")]),a._v(" ARG")]),a._v(" "),e("p",[a._v("类似于 ENV，仅在 Dockerfile 中有效，镜像内部不存在次环境变量")]),a._v(" "),e("h3",{attrs:{id:"volume"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volume"}},[a._v("#")]),a._v(" VOLUME")]),a._v(" "),e("p",[a._v("定义匿名数据卷。在启动容器时忘记挂载数据卷，会自动挂载到匿名卷。")]),a._v(" "),e("h3",{attrs:{id:"expose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expose"}},[a._v("#")]),a._v(" EXPOSE")]),a._v(" "),e("p",[a._v("仅仅只是声明端口，当 docker run -P 是，可以自动随机映射端口")]),a._v(" "),e("h3",{attrs:{id:"workdir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#workdir"}},[a._v("#")]),a._v(" WORKDIR")]),a._v(" "),e("p",[a._v("指定工作目录。用 WORKDIR 指定的工作目录，会在构建镜像的每一层中都存在。（WORKDIR 指定的工作目录，必须是提前创建好的）。")]),a._v(" "),e("p",[a._v("docker build 构建镜像过程中的，每一个 RUN 命令都是新建的一层。只有通过 WORKDIR 创建的目录才会一直存在。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("WORKDIR <工作目录路径>\n")])])]),e("h3",{attrs:{id:"user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[a._v("#")]),a._v(" USER")]),a._v(" "),e("p",[a._v("用于指定执行后续命令的用户和用户组，这边只是切换后续命令执行的用户（用户和用户组必须提前已经存在）。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("USER <用户名>[:<用户组>]\n")])])]),e("h3",{attrs:{id:"label"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#label"}},[a._v("#")]),a._v(" LABEL")]),a._v(" "),e("p",[a._v("LABEL 指令用来给镜像添加一些元数据（metadata），以键值对的形式，语法格式如下：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('LABEL org.opencontainers.image.authors="runoob"\n')])])]),e("h3",{attrs:{id:"healthcheck"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#healthcheck"}},[a._v("#")]),a._v(" HEALTHCHECK")]),a._v(" "),e("p",[a._v("用于指定某个程序或者指令来监控 docker 容器服务的运行状态。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("HEALTHCHECK [选项] CMD <命令>：设置检查容器健康状况的命令\nHEALTHCHECK NONE：如果基础镜像有健康检查指令，使用这行可以屏蔽掉其健康检查指令\n\nHEALTHCHECK [选项] CMD <命令> : 这边 CMD 后面跟随的命令使用，可以参考 CMD 的用法。\n")])])]),e("h3",{attrs:{id:"onbuild"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#onbuild"}},[a._v("#")]),a._v(" ONBUILD")]),a._v(" "),e("p",[a._v("用于延迟构建命令的执行。简单的说，就是 Dockerfile 里用 ONBUILD 指定的命令，在本次构建镜像的过程中不会执行（假设镜像为 test-build）。当有新的 Dockerfile 使用了之前构建的镜像 FROM test-build ，这时执行新镜像的 Dockerfile 构建时候，会执行 test-build 的 Dockerfile 里的 ONBUILD 指定的命令。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ONBUILD <其它指令>\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);