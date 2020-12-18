(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{362:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"根证书私钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#根证书私钥"}},[t._v("#")]),t._v(" 根证书私钥")]),t._v(" "),e("p",[t._v("证书主要使用了非对称加密的方式，在这里我们使用 rsa")]),t._v(" "),e("h2",{attrs:{id:"命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("openssl genrsa -aes256 -out ca.key 2048\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("genrsa")]),t._v(" "),e("td",[t._v("使用RSA算法产生私钥")])]),t._v(" "),e("tr",[e("td",[t._v("-aes256")]),t._v(" "),e("td",[t._v("使用256位密钥的AES算法对私钥进行加密")])]),t._v(" "),e("tr",[e("td",[t._v("-out")]),t._v(" "),e("td",[t._v("输出文件的路径")])]),t._v(" "),e("tr",[e("td",[t._v("2048")]),t._v(" "),e("td",[t._v("指定私钥长度")])])])]),t._v(" "),e("p",[t._v("在私钥创建结束后，输入 aes256 加密的密码，这个需要记住，在后续的操作中要用到，这里假设是123123")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Generating RSA private key, 2048 bit long modulus\n.+++\n..........+++\ne is 65537 (0x10001)\nEnter pass phrase for ca.key:123123\nVerifying - Enter pass phrase for ca.key:123123\n")])])]),e("p",[t._v("私钥内容，实际长度要比这个长很多，为了显示方便只保留几行")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("-----BEGIN RSA PRIVATE KEY-----\nProc-Type: 4,ENCRYPTED\nDEK-Info: AES-256-CBC,68ED24445CEE11869CC90BD2916C4193\n\no0tYAXRzsRRld2DOJ65U5NZH0dYvG6jDsMY4aA14+A18NKyAZVRoNvQ5KFV12kxL\nFcH/bpppPb5Yk7GxGWZZLV3VIR+EDj+1d0n3FpnpJxfc2WQAeAah3wW1+vDV3eso\n9XCdxJyQyVXBFKZxg0XgCVmRO9olJvwL0APvtuHeKDeCLvsaoIhg98zEYvEie1p7\n+WdtkaphqdzteDhpB+MM/GTpiSJA7K7MmdkJpObtsWiZyWt3m2w6d1DT5p+lADf0\noKmNRZMDOlQIb8PTr6XiSSTFHPaxKCfvDpC4fQrqgUI9JglHw3xJaRachaTnrdCi\nnknDoYpcgUoHdgZJ83RmbM0N9kW/eyjUaZspYZj026rBbMpyr3VRunQ7PP7tFvXx\n-----END RSA PRIVATE KEY-----\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);