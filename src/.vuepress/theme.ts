import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

const GONG_ZHONG_HAO =
  '<svg t="1694672773540" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26139" width="128" height="128"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#26BF4C" p-id="26140"></path><path d="M244.224 434.249143c1.609143-4.169143 22.893714 125.147429 121.417143 189.805714l-10.971429 59.904a86.308571 86.308571 0 0 0 70.582857-32.694857v-0.073143c57.636571 16.091429 133.851429 11.702857 233.398858-32.182857 0 0-29.403429 97.426286-85.211429 132.534857-103.424 64.877714-266.386286 34.523429-328.704-73.142857-17.773714-30.573714-46.518857-116.150857-0.512-244.150857z" fill="#FFFFFF" p-id="26141"></path><path d="M669.037714 365.714286a205.312 205.312 0 0 1 128 247.442285c-10.020571 33.865143-30.208 101.668571-154.770285 156.233143-6.656 2.925714 199.533714-250.660571-109.933715-400.310857A249.929143 249.929143 0 0 1 669.037714 365.714286z" fill="#FFFFFF" p-id="26142"></path><path d="M702.683429 323.072c4.681143 5.632-283.428571-72.118857-352.987429 219.428571v-0.219428H349.622857c-2.194286-2.56-57.051429-65.682286-54.784-130.267429A217.965714 217.965714 0 0 1 508.416 219.428571c35.474286 0 106.349714 0 194.267429 103.643429z" fill="#FFFFFF" p-id="26143"></path></svg>';
const footerICP_HTML = `
  <a class="footer-icp" href="https://beian.miit.gov.cn" target="_blank">
  <img alt="备案号" src="/assets/images/beian.png" style="width: 14px;margin-right: 4px;"/>皖ICP备2022002531号
  </a>`;

export default hopeTheme({
  navbar,                                                       // 导航栏配置
  sidebar,                                                      // 侧边栏配置
  
  hostname: "https://boxsir.gitee.io",                          // 部署的域名
  iconAssets: [                                                 // 全局设置图标资地址，默认的设置：iconAssets: "iconfont"
    "//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css",          // 默认图标的地址
    "//at.alicdn.com/t/c/font_4261008_hi497lpmwml.css",         // Iconfont 平台,我的项目中"navbar"的图标
  ],
  
  logo: "/head.png",                                             // 导航栏图标
  repo: "https://github.com/leekboxsir",                         // 仓库地址
  repoLabel: "GitHub",                                           // 导航栏标签类型
  repoDisplay: true,                                             // 是否在导航栏显示仓库链接
  fullscreen: true,                                              // 是否开启全屏模式
  darkmode: "toggle",                                            // 主题在深色模式和浅色模式之间切换
  lastUpdated: true,                                             // 是否显示页面最后更新时间
  contributors: true,                                            // 是否显示页面贡献者
  editLink: false,                                               // 是否展示编辑此页链接
  docsDir: "src",                                                // 文档在仓库中的目录
  backToTop: true,                                               // 返回顶部按钮
  footer: footerICP_HTML,                                        // 页面页脚内容
  displayFooter: true,                                           // 是否打开页脚
  pageInfo: ['Original', 'Author', 'Date', 'ReadingTime', 'Word', 'Category', 'Tag', 'PageView'],  // 文章信息展示项目
  // hotReload: true,                                                                              // 是否在开发服务器中启用热重载

  metaLocales: {                                                   // page meta
    editLink: "在 GitHub 上编辑此页",
  },

  author: {                                                        // 文章显示的默认作者信息
    name: "盒子先生",
    url: "https://boxsir.gitee.io"
  },

  blog: {
    avatar: "/logo.png",                                           // 博主头像
    description: "心有山海，静而不争",                               // 博主描述
    intro: "/about/intro.html",                                    // 个人介绍地址
    roundAvatar: true,                                             // 剪裁头像为圆形形状
    timeline: "持续更新",                                           // 时间轴的顶部文字
    medias: {                                                      // 媒体链接配置,内置图标见官方文档
      Email: "mailto:1796535192@qq.com",
      Rss: "/rss.xml",
      Gitee: "https://gitee.com/boxsir",
      GitHub: "https://github.com/leekboxsir",
      QQ: "http://wpa.qq.com/msgrd?v=3&uin=1796535192&site=qq&menu=yes",
      Wechat: "/assets/medias/Wechat.png",
      公众号: ["/assets/medias/GongZhongHao.png", GONG_ZHONG_HAO],
    },
  },

  encrypt: {                                                        // 加密配置
    admin: "boxsir",                                                // 最高权限密码
    config: {
       "/demo": ["cl970812"],
    },
  },

  plugins: {
    blog: true,
    git: true,                   // 开发模式下启用,实现了页面创建时间、最后更新时间与贡献者的自动生成
    seo: true,                   // 全面增强站点的搜索引擎优化性
    prismjs: false,              // 禁用Prism的高亮，使用Shiki的高亮
         
    copyright: {                 // 开启复制文章，加入版权信息
      author: "「盒子先生」",
      license: "CC-BY-NC-ND 4.0",
      triggerLength: 50,         // 触发附加版权的最小内容长度
      global: true,              // 开启全局，允许在页面的 frontmatter 中单独设置 copy: false 禁用
    },

    feed: {                      // feed支持
      rss: true,
    },

    copyCode: {                  // 代码复制键
      showInMobile: true,        // 开启手机端
      duration: 1000
    },

    comment: {                  // 评论服务配置
      provider: "Waline",
      serverURL: "https://waline.cailei.site/", /* https://waline-comment.vuejs.press 官方自己的地址，放着备用*/
      copyright: false,                          // 是否显示页脚Waline的版权信息(Powered by Waline v2.15.7)
      reaction: true,                            // 开启反应（你认为这篇文章怎么样？）
    },

    mdEnhance: {                // MdEnhance 插件配置，Markdown增强
      align: true,
      container: true,
      footnote: true,
      tasklist: true,
      card: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
    },

    components: {                 // 你想使用的组件
      components: [
        "ArtPlayer",
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Replit",
        "Share",
        "SiteInfo",
        "StackBlitz",
        // "VidStack",
        "VideoPlayer",
        "XiGua",
        "YouTube",
      ],
    },

    pwa: {                           // PWA
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        // shortcuts: [
        //   {
        //     name: "Demo",
        //     short_name: "Demo",
        //     url: "/demo/",
        //     icons: [
        //       {
        //         src: "/assets/icon/guide-maskable.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //     ],
        //   },
        // ],
      },
    },
    
  },
}, { custom: true }  
);
