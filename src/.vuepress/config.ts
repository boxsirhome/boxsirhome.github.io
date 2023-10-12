import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme.js";
import { popperPlugin } from "./plugins/vuepress-plugin-popper";
import { PopperShape } from "@moefy-canvas/theme-popper";
import { getDirname, path } from "@vuepress/utils";
import {canvasPlugin, CanvasPluginType,} from "./plugins/vuepress-plugin-canvas";
import { gradientCoverPlugin } from "./plugins/vuepress-plugin-gradient-cover";
import { shikiPlugin } from "@vuepress/plugin-shiki";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "盒子小屋",
  description: "盒子先生的博客",
  port: 8088,

  theme,

  plugins: [
    
    shikiPlugin({                                 //代码高亮插件
      theme: "one-dark-pro",
    }),

    popperPlugin({                                // 鼠标特效插件
      config: {
        shape: PopperShape.Star,
        size: 1.95,
        numParticles: 8,
      },
    }),

    docsearchPlugin({                             // Algolia全文搜索
      appId: "0VQDGS0S4K",                        // 应用程序标识
      apiKey: "cfa11ad05ae34956f4464beaa5bfce2c", // 搜索接口密钥
      indexName: "boxsir-gitee",                  // 索引名称
      locales: {
        "/": {
          placeholder: "搜素文档",
          translations: {
            button: {
              buttonText: "搜索",
              buttonAriaLabel: "搜索",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    }),

     canvasPlugin({                               // 背景插件
      type: CanvasPluginType.Figure,
      ribbonOption: {
        zIndex: 1,
        alpha: 0.8,
        size: 90,
      },
    }),

    gradientCoverPlugin({}),                      // 模糊背景 

  ],
  
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(__dirname, "./components/BlogHero.vue",), //主页描述替换为一言词句
    "@MyCoverLink": path.resolve(__dirname, "./components/MyCoverLink.vue"),  //自定义友链组件
    "@MyLink": path.resolve(__dirname, "./components/Mylink.vue"),            //自定义卡片组件
    "@Tool": path.resolve(__dirname, "./data/tool.ts"),                       //工具数据
    "@Doc": path.resolve(__dirname, "./data/doc.ts"),                         //文档数据
    "@Software": path.resolve(__dirname, "./data/software.ts"),               //软件数据
  },

  shouldPrefetch: false,      // 使用pwa推荐设置为 shouldPrefetch: false
});
