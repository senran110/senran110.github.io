/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a156feb45d781107ee7597caa710fbe2"
  },
  {
    "url": "assets/css/0.styles.ea459612.css",
    "revision": "95d655c249370d357aef40a9721b79fb"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.cffb1564.js",
    "revision": "f6a9142aa8a5253d92bd8b2c45db82b1"
  },
  {
    "url": "assets/js/10.b18bca2e.js",
    "revision": "f17a20c8448932dea24b3896f6465349"
  },
  {
    "url": "assets/js/11.2c78f6f0.js",
    "revision": "c6c61160a620225d1e77f484e72e6b2b"
  },
  {
    "url": "assets/js/12.24021ae4.js",
    "revision": "d72d408e155d6c0cb29b967c3c14ba93"
  },
  {
    "url": "assets/js/13.97affbe4.js",
    "revision": "35f34cc6a7d024dcb988d9fb16458b15"
  },
  {
    "url": "assets/js/14.c90263bc.js",
    "revision": "1caa1c2c790f25f84463e9742707a766"
  },
  {
    "url": "assets/js/15.55229333.js",
    "revision": "67a54f5211de5a9b4e7ba4ee36c1fc06"
  },
  {
    "url": "assets/js/16.610bf085.js",
    "revision": "2d31a25c77eeb212c93c29abb452bd58"
  },
  {
    "url": "assets/js/17.1eed782c.js",
    "revision": "821c403c2a828b875648d6b2bc299796"
  },
  {
    "url": "assets/js/18.7f8ea92b.js",
    "revision": "cc41a14cab7d6188c6c4a50f7c592fd7"
  },
  {
    "url": "assets/js/19.1681e396.js",
    "revision": "c8800ba9d6f8018e09ede61e60d7047e"
  },
  {
    "url": "assets/js/20.2077eac1.js",
    "revision": "bcde4b1b041cf226278c9a3cd828ae16"
  },
  {
    "url": "assets/js/21.887a1b17.js",
    "revision": "68ca97ad495aed23a3bcf8c6f0a47c24"
  },
  {
    "url": "assets/js/4.80f274c3.js",
    "revision": "f3b44871ec66a3549c71f9cc986dc263"
  },
  {
    "url": "assets/js/5.d08bdfe0.js",
    "revision": "fc3c9983c3dc2045ecbbe39095c36290"
  },
  {
    "url": "assets/js/6.02f109e8.js",
    "revision": "53730a4b04d992764b3a5be4fb8bbb39"
  },
  {
    "url": "assets/js/7.cfb5ce27.js",
    "revision": "0ac9387173a052954642ad0d7a28c673"
  },
  {
    "url": "assets/js/8.0777042d.js",
    "revision": "a7f1d6f5263f03629d1ae2a6b288ce49"
  },
  {
    "url": "assets/js/9.4471816a.js",
    "revision": "ddd7f74891eb5cc3d5c8d0dea10485f6"
  },
  {
    "url": "assets/js/app.10ff9e10.js",
    "revision": "4261243b025517a3ee67999c8d570050"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.dfbb8bca.js",
    "revision": "d41b2b50318acbb26d90d6bb1a5ba41e"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "f408de7963a078ad9b6cc27ca11f84b8"
  },
  {
    "url": "categories/VuePress -/index.html",
    "revision": "68b4c29f6e690cd5fb03b8b6965d8d17"
  },
  {
    "url": "categories/vuepress教程/index.html",
    "revision": "c503793a22764a944048b55fec5325fe"
  },
  {
    "url": "categories/作者/index.html",
    "revision": "7351ba80d0458c3b4d0072c66f05d929"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "37d63e9081a6ce88c0323409c4e60e36"
  },
  {
    "url": "categories/电商/index.html",
    "revision": "b4e1f45a1af3aec3e43378d4a80bad44"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "51922cf66eb5c9671683ad9bcf33193d"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/dai.jpg",
    "revision": "a81288680eaf1dc79d2c32120dfba7ee"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "775c1bf45f227dfb72d86ebd8c71787e"
  },
  {
    "url": "img/qq.jpg",
    "revision": "4da9b6218f03d46f2341062bb74e9a65"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "img/wx.png",
    "revision": "bcfeaa485eb3cf2a73d60e83e744751a"
  },
  {
    "url": "img/赛博朋克.jpg",
    "revision": "4da10fc6dd98f96340053b0b9dd963a7"
  },
  {
    "url": "index.html",
    "revision": "8e8dc1fb4166ea98b47f5010e98c23b1"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "python/首页.html",
    "revision": "4807f06a78f25ddd410a5c0b227f109b"
  },
  {
    "url": "tag/index.html",
    "revision": "70dbd047f3ad18337665f266076fbbe3"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "c33fa50ff8114e07c5e9458c30c44c65"
  },
  {
    "url": "tags/python/index.html",
    "revision": "36120c0af57c2ba1d3713acabad2b8a8"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "20f57c7f9614b2c5af5fe12f3737e256"
  },
  {
    "url": "tags/作者/index.html",
    "revision": "7b7fdb904aa6190edf25b8f6aaf18732"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "a49cba75fbe4a2645bca6b1dd4a7ee9e"
  },
  {
    "url": "tags/大数据/index.html",
    "revision": "bb42c59aca54551cd9b5331db25480cc"
  },
  {
    "url": "tags/抖音/index.html",
    "revision": "bab59d0ffbe872afd4b435682c626765"
  },
  {
    "url": "tags/持续集成/index.html",
    "revision": "c335a98bc1776cea8743db04930dcf26"
  },
  {
    "url": "tags/教程/index.html",
    "revision": "f6cba71f6ddf7bb150db182b0eeb7064"
  },
  {
    "url": "tags/电商/index.html",
    "revision": "5f85c3efe112d5ef7e25b9b4d906342b"
  },
  {
    "url": "tags/评论/index.html",
    "revision": "ebbe81ea7b7ebb6ecdf23022e42a9693"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "062af4dae07f1d6749d6fb0c14d6c2a4"
  },
  {
    "url": "timeline/index.html",
    "revision": "6a03ebed934948de32d6faf92486ff18"
  },
  {
    "url": "大数据技术/首页.html",
    "revision": "93a4125a1fa2e25a0be4fd61d9186bd7"
  },
  {
    "url": "技术文章/博客插件/插件文章.html",
    "revision": "215cd6471d64e6ea06eef1fb06b112e8"
  },
  {
    "url": "技术文章/建站指南/pl.html",
    "revision": "6b04b12b33a72cccff1cc6cc8f30f168"
  },
  {
    "url": "技术文章/建站指南/senran02.html",
    "revision": "c3b1e4e02e64d5f578ddbcfaf1e0de57"
  },
  {
    "url": "技术文章/建站指南/senran03.html",
    "revision": "859ea8fac2a87344cc558e0cc8cd566b"
  },
  {
    "url": "技术文章/建站指南/vuepress.html",
    "revision": "5cd356a0e6833fc87a45da017b7a3916"
  },
  {
    "url": "电商自媒体/life.html",
    "revision": "f67466f3793672c98ec375f45f414fd9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
