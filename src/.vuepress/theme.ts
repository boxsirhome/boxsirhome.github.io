import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

const GONG_ZHONG_HAO =
  '<svg t="1694672773540" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26139" width="128" height="128"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#26BF4C" p-id="26140"></path><path d="M244.224 434.249143c1.609143-4.169143 22.893714 125.147429 121.417143 189.805714l-10.971429 59.904a86.308571 86.308571 0 0 0 70.582857-32.694857v-0.073143c57.636571 16.091429 133.851429 11.702857 233.398858-32.182857 0 0-29.403429 97.426286-85.211429 132.534857-103.424 64.877714-266.386286 34.523429-328.704-73.142857-17.773714-30.573714-46.518857-116.150857-0.512-244.150857z" fill="#FFFFFF" p-id="26141"></path><path d="M669.037714 365.714286a205.312 205.312 0 0 1 128 247.442285c-10.020571 33.865143-30.208 101.668571-154.770285 156.233143-6.656 2.925714 199.533714-250.660571-109.933715-400.310857A249.929143 249.929143 0 0 1 669.037714 365.714286z" fill="#FFFFFF" p-id="26142"></path><path d="M702.683429 323.072c4.681143 5.632-283.428571-72.118857-352.987429 219.428571v-0.219428H349.622857c-2.194286-2.56-57.051429-65.682286-54.784-130.267429A217.965714 217.965714 0 0 1 508.416 219.428571c35.474286 0 106.349714 0 194.267429 103.643429z" fill="#FFFFFF" p-id="26143"></path></svg>';
const DOU_YIN =
  '<svg t="1694673759706" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27189" width="128" height="128"><path d="M32 511.776c0 264.96 214.784 479.744 479.776 479.744 264.96 0 479.744-214.784 479.744-479.744C991.52 246.816 776.736 32 511.776 32 246.816 32 32 246.784 32 511.776z" fill="#170B1A" p-id="27190"></path><path d="M512.256 347.2c0.448-50.368 0-101.216 0.448-151.616h103.168c-0.48 9.12 0.96 17.76 2.4 26.4l-70.528 5.76 5.76 403.968c0.48 17.28-12 56.128-20.64 71.008-13.44 23.04-54.208 44.128-81.088 46.528-16.768 1.44-29.248-2.88-44.608-11.04-11.52-6.24-17.76-40.768-21.12-49.92 26.4 14.912 60.96 13.44 86.4-3.328a88.128 88.128 0 0 0 40.736-73.408c-0.96-88.288-0.96-176.544-0.96-264.32z m169.824-29.248c14.4 9.088 30.72 16.32 47.488 19.648 10.08 2.4 19.68 3.36 29.76 3.36v27.84c-29.76-6.72-94.048-25.44-77.248-50.88z" fill="#25F4EE" p-id="27191"></path><path d="M326.08 447.008a188.032 188.032 0 0 1 125.216-26.4v31.68c-40.288 0.96-73.856 18.24-106.496 42.208-24.448 18.24-41.28 36.928-54.208 64.768-12.48 26.368-17.76 48.448-17.28 77.728 0 32.128 8.64 55.168 24 83.456 7.2 12.96 21.12 32.64 17.76 47.04a185.92 185.92 0 0 1-53.76-59.04 193.6 193.6 0 0 1-26.368-103.136 195.52 195.52 0 0 1 28.288-94.496 186.08 186.08 0 0 1 62.848-63.808z" fill="#25F4EE" p-id="27192"></path><path d="M541.984 221.984h77.248c12 20.64 11.04 28.32 17.76 41.28 10.56 20.608 18.688 28.288 41.728 51.328a11.2 11.2 0 0 1 3.36 3.36c20.16 23.04 47.488 39.328 77.248 46.048 17.28 12.48 5.28 62.848 5.28 89.696-50.4 0.48-101.728-19.2-142.496-48.928 0 64.32 0 123.776 0.48 188.544 0 8.64 0.48 16.8 0 25.92-2.4 31.168-16.8 76.768-32.64 103.616a197.888 197.888 0 0 1-53.728 60.928 172 172 0 0 1-97.856 33.6 219.936 219.936 0 0 1-53.28-4.32c-24.448-5.28-47.968-29.76-68.576-44.16l-1.44-1.408c-10.08-10.56-19.2-22.56-25.92-36-15.36-27.84-24-59.488-24-91.616a192 192 0 0 1 18.24-84.928c12.96-27.84 32.16-52.8 56.128-71.04a194.24 194.24 0 0 1 111.296-38.816c11.04 5.248 3.36 86.336 3.36 86.336-12.928-4.32-30.208-2.88-43.648 0.48-16.32 3.36-24.96 12.96-37.44 23.52-7.68 6.72-14.4 13.92-18.688 23.04-8.16 15.36-7.68 17.28-6.24 34.528 1.92 16.32 4.8 34.048 15.84 46.528 7.2 9.12 12 23.04 21.568 29.28 7.68 12.48 17.76 21.568 28.8 26.88 15.36 8.128 32.64 11.52 49.408 10.048 26.88-1.92 51.84-18.24 65.28-41.728 8.64-15.36 12.448-35.04 12.448-51.84 0-141.504 0.48-410.176 0.48-410.176z" fill="#FFFFFF" p-id="27193"></path><path d="M618.24 221.984c9.152 0.48 17.792 0 27.36 0 0 29.76 9.6 59.968 26.88 84.448 2.4 3.36 4.32 6.24 6.72 8.64-19.68-12-35.04-30.72-45.568-51.36-6.72-12.48-12-26.88-15.36-41.728z m141.088 142.016c10.048 2.4 19.648 3.36 29.76 3.36v104.096c-50.88 0.48-101.76-16.32-143.488-46.528v206.784c0.48 15.808-0.96 31.168-4.32 46.528a192 192 0 0 1-75.776 115.616 181.216 181.216 0 0 1-68.16 30.24c-29.728 6.72-60.416 6.24-89.216-1.44a189.888 189.888 0 0 1-91.136-54.72c20.608 14.88 44.128 24.48 69.056 29.76 17.28 3.84 35.52 4.8 53.28 4.32a172 172 0 0 0 97.856-33.6 198.624 198.624 0 0 0 53.76-60.928 211.136 211.136 0 0 0 27.808-89.216 233.28 233.28 0 0 0 0-25.92c-0.96-63.808-0.96-128.096-0.96-192.384a240.32 240.32 0 0 0 142.016 45.12c-0.48-26.88 0-54.24-0.48-81.088z" fill="#FE2C55" p-id="27194"></path><path d="M451.296 444.608c10.08 0 20.64 0.48 30.24 1.92v106.976a84.672 84.672 0 0 0-45.12-1.92c-28.288 6.24-51.808 27.84-61.856 55.168-10.08 26.88-6.24 58.56 10.56 81.568-10.08-5.76-18.24-13.44-25.44-22.56-10.56-12.48-17.76-28.8-19.68-45.12-1.92-16.768 0.96-35.008 9.12-49.856 4.32-9.12 11.04-16.8 18.72-23.52 12.48-10.56 28.288-17.28 43.648-21.6 12.96-2.88 26.88-3.36 39.36 0.96 0.448-4.32 0.448-71.488 0.448-82.016z" fill="#FE2C55" p-id="27195"></path></svg>';
  const footerICP_HTML = `
  <a class="footer-icp" href="https://beian.miit.gov.cn" target="_blank">
  <img alt="备案号" src="/assets/images/beian.png" style="width: 14px;margin-right: 4px;"/>皖ICP备2022002531号
  </a>&nbsp;|&nbsp;<a href="/about/intro">关于我的故事</a>`;

export default hopeTheme({
  navbar,                                                       // 导航栏配置
  sidebar,                                                      // 侧边栏配置
  
  hostname: "https://boxsir.gitee.io",                          // 部署的域名
  iconAssets: [                                                 // 全局设置图标资地址，默认的设置：iconAssets: "iconfont"
    "//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css",          // 默认图标的地址
    "//at.alicdn.com/t/c/font_4261008_me3d57wgtp.css",         // Iconfont 平台,我的项目中"navbar"的图标
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
  pageInfo: ['Author', 'Original', 'Date', 'ReadingTime', 'Word', 'Category', 'Tag', 'PageView'],  // 文章信息展示项目
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
      Gitee: "https://gitee.com/boxsir",
      GitHub: "https://github.com/leekboxsir",
      QQ: "http://wpa.qq.com/msgrd?v=3&uin=1796535192&site=qq&menu=yes",
      Wechat: "assets/medias/Wechat.png",
      GongZhongHao: ["assets/medias/GongZhongHao.png", GONG_ZHONG_HAO],
      DouYin: ["https://v.douyin.com/ie57FQwa", DOU_YIN]
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
      license: "CC BY-NC-SA 4.0",
      triggerLength: 50,         // 触发附加版权的最小内容长度
      global: true,              // 开启全局，允许在页面的 frontmatter 中单独设置 copy: false 禁用
    },

    feed: {                      // feed支持
      rss: true
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
