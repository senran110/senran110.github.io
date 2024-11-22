(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{442:function(t,s,a){"use strict";a.r(s);var n=a(21),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("早在一年多以前我就喜欢上了 "),s("code",[t._v("hexo-theme-sagiri")]),t._v(" 这个主题（效果可以参见 "),s("a",{attrs:{href:"https://diygod.me/",target:"_blank",rel:"noopener noreferrer"}},[t._v("diygod.me"),s("OutboundLink")],1),t._v("），不过当时还什么都不懂啦，不会用 GitHub ，更不知道这居然是静态博客做出来的效果（如果当时知道那么简单的话，我也许现在用的就是 hexo 了 😂）")]),t._v(" "),s("p",[t._v("前些日子因为机缘巧合发现了 "),s("code",[t._v("sagiri")]),t._v(" 中的彩带背景的开源实现，原来其出自若干年前 Evan 的个人主页背景，之后我试着简单阅读 "),s("code",[t._v("vuepress-plugin-nest")]),t._v(" 插件源码，照喵画虎地摹了个 "),s("code",[t._v("vuepress-plugin-ribbon")]),t._v(" 插件，居然真的成功了！这使我萌生了把 "),s("code",[t._v("sagiri")]),t._v(" 中一些小组件作为 VuePress 插件实现的想法，之后的几天……")]),t._v(" "),s("p",[t._v("废话说太多了，还是说说怎么用吧 😂")]),t._v(" "),s("p",[t._v("⚠️ 本文章仅针对 VuePress V1，对于 VuePress V2 及 VitePress 没有太多参考意义")])]),t._v(" "),s("h2",{attrs:{id:"在背景添加一条彩带"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在背景添加一条彩带"}},[t._v("#")]),t._v(" 在背景添加一条彩带")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/moefyit/vuepress-plugin-ribbon",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-ribbon"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("只需要简单的配置就可以在你的 VuePress 中添加一条背景彩带~")]),t._v(" "),s("p",[t._v("首先使用 yarn 安装~")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress-plugin-ribbon "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v("\n")])])]),s("p",[t._v("然后在 "),s("code",[t._v("config.js")]),t._v(" 中添加以下配置~")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ribbon'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 彩带的宽度，默认为 90")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("opacity")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 彩带的不透明度，默认为 0.3")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("zIndex")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 彩带的 z-index 属性，默认值为 -1")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("然后再次 "),s("code",[t._v("dev")]),t._v(" 你就可以发现你的背景多一条彩带啦~")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("如果你的彩带会把博客文字覆盖掉，请先尝试调整 "),s("code",[t._v("z-index")]),t._v(" 属性，如果无论如何调整都不能有合适的效果，请使用 CSS 为你的主题添加样式覆盖，最简单的方法就是为不想显示彩带的位置添加背景，因为博客主题样式大多不一致，这里就不贴具体修改方式了")])]),t._v(" "),s("h2",{attrs:{id:"添加一个动态的标题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加一个动态的标题"}},[t._v("#")]),t._v(" 添加一个动态的标题")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/moefyit/vuepress-plugin-dynamic-title",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-dynamic-title"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("如果你现在使用的是 PC 端的话，试着切换浏览器到其它标签页~")]),t._v(" "),s("p",[t._v("唔，欢迎回来，你应该已经看到效果了~这就是 "),s("code",[t._v("dynamic-title")]),t._v(" 的效果~")]),t._v(" "),s("p",[t._v("想要把它装到你的 VuePress 的话，就 yarn 一下吧~")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress-plugin-dynamic-title "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v("\n")])])]),s("p",[t._v("配置稍微有点麻烦，需要提供图标以及相应的文字，不提供时默认是不显示图标的，图标放在 "),s("code",[t._v(".vuepress/public/")]),t._v(" 下就好")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dynamic-title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("showIcon")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/favicon.ico'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("showText")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'(/≧▽≦/)咦！又好了！'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("hideIcon")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/failure.ico'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("hideText")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'(●—●)喔哟，崩溃啦！'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("recoverTime")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"增加鼠标点击动效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增加鼠标点击动效"}},[t._v("#")]),t._v(" 增加鼠标点击动效")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/moefyit/vuepress-plugin-cursor-effects",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-cursor-effects"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("只需要简单的安装就可以在你的 VuePress 添加鼠标点击后散落彩色粒子的效果~")]),t._v(" "),s("p",[t._v("插件名是 "),s("code",[t._v("vuepress-plugin-cursor-effects")]),t._v("，安装方法应该不用说了吧，配置也很简单，按照下面配置就好")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cursor-effects'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 粒子大小")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("shape")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'star'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 粒子形状（可选 'star' 和 'circle'）")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("zIndex")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("999999999")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"修改你的鼠标为更可爱的样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改你的鼠标为更可爱的样式"}},[t._v("#")]),t._v(" 修改你的鼠标为更可爱的样式")]),t._v(" "),s("p",[t._v("这个就不用插件实现了，自己配置下 "),s("code",[t._v("style/index.styl")]),t._v(" 就可以了")]),t._v(" "),s("div",{staticClass:"language-stylus extra-class"},[s("pre",{pre:!0,attrs:{class:"language-stylus"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("cursor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("url('/cursor.ico')")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("找一个你喜欢的鼠标指针放在 "),s("code",[t._v("public")]),t._v(" 下就好，当然图片名也记得修改")]),t._v(" "),s("h2",{attrs:{id:"使用悬挂喵作为返回顶部按钮"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用悬挂喵作为返回顶部按钮"}},[t._v("#")]),t._v(" 使用悬挂喵作为返回顶部按钮")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/moefyit/vuepress-plugin-go-top",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-go-top"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("相信你看到这个位置应该已经能看到它啦，点一下就可以返回顶部哦~")]),t._v(" "),s("p",[t._v("安装方法就不必说了，由于没什么配置项，直接像下面这样就行")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'go-top'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("值得注意的是，由于猫猫在窄屏设备上很容易遮挡内容，因此设计了两个响应式变化点，当屏幕变窄时会依次显示“猫猫” -> 显示“猫爪爪” -> 不显示，具体的响应式变化点你可以在 "),s("code",[t._v(".vuepress/styles/palette.styl")]),t._v(" 中自行修改")]),t._v(" "),s("div",{staticClass:"language-stylus extra-class"},[s("pre",{pre:!0,attrs:{class:"language-stylus"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 显示猫猫")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$MQWide")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1440")]),s("span",{pre:!0,attrs:{class:"token unit"}},[t._v("px")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 显示猫爪爪")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$MQMobile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("768")]),s("span",{pre:!0,attrs:{class:"token unit"}},[t._v("px")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 啥都不显示")]),t._v("\n")])])]),s("h2",{attrs:{id:"添加一个萌萌哒看板娘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加一个萌萌哒看板娘"}},[t._v("#")]),t._v(" 添加一个萌萌哒看板娘")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/yanjun0501/vuepress-plugin-live2d",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-live2d"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/yanjun0501/vuepress-plugin-live2d",target:"_blank",rel:"noopener noreferrer"}},[t._v("Author 聆歌"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-live2d'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("modelName")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模型名称，可传入一个字符串或者数组")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mobileShow")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否在移动设备上显示")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'right'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 显示在左下角还是右下角")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("配置详情请在"),s("a",{attrs:{href:"https://github.com/yanjun0501/vuepress-plugin-live2d",target:"_blank",rel:"noopener noreferrer"}},[t._v("项目主页"),s("OutboundLink")],1),t._v("查看")]),t._v(" "),s("p",[t._v("感谢聆歌提供本插件，感觉效果不错的可以给他一个 Star 哟~")]),t._v(" "),s("h2",{attrs:{id:"添加一个漂亮的音乐播放器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加一个漂亮的音乐播放器"}},[t._v("#")]),t._v(" 添加一个漂亮的音乐播放器")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/moefyit/vuepress-plugin-meting",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-meting"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("这个插件是利用 Meting 接口来获取音乐资源，传入 Vue-APlayer，解决 APlayer 的音源问题，当然如果你有合适的音源也可以直接用 Vue-APlayer 哒~")]),t._v(" "),s("p",[t._v("如果你想添加一个全局的吸底播放器，直接在 "),s("code",[t._v("config.js")]),t._v(" 中配置即可")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meting'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("meting")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'netease'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 音乐源")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'playlist'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 资源类型")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mid")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2539599584'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 资源 id")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("aplayer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lrcType")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("另外，它也支持在任何页面单独引入播放器，当然你需要首先在 "),s("code",[t._v("config.js")]),t._v(" 启用它（但不必填写配置项，配置项只与全局吸底播放器有关，不配置便不会出现该播放器）")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- my-music.md --\x3e")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Meting")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("netease"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("playlist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("mid")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2539599584"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":lrc-type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 这样就可以在 my-music.html 页面单独引入一个播放器咯～ --\x3e")]),t._v("\n")])])]),s("h2",{attrs:{id:"最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),s("p",[t._v("再次感谢 "),s("a",{attrs:{href:"https://github.com/DIYgod",target:"_blank",rel:"noopener noreferrer"}},[t._v("DIYGod"),s("OutboundLink")],1),t._v("~")])])}),[],!1,null,null,null);s.default=e.exports}}]);