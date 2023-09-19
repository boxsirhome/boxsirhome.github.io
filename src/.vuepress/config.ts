import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme.js";
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "盒子先生",
  description: "盒子先生的博客",

  theme,

  plugins: [
    docsearchPlugin({       //Algolia全文搜索 | 教程地址 (https://blog.csdn.net/weixin_44495599/article/details/132022146）
      appId: "0VQDGS0S4K",                        //应用程序标识
      apiKey: "cfa11ad05ae34956f4464beaa5bfce2c", //搜索接口密钥
      indexName: "boxsir-gitee",                  //索引名称
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
  ],

  shouldPrefetch: false,      // 使用pwa推荐设置为 shouldPrefetch: false
});
