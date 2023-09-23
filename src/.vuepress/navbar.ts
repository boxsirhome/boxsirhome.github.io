import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "笔记分类",
    icon: "edit",
    prefix: "/notes/",
    children: [
      {
        text: "后端笔记",
        prefix: "after/",
        children: [
          { text: "JAVA", icon: "java", link: "java/" }
        ],
      },
      {
        text: "前端笔记",
        prefix: "front/",
        children: [
          { text: "VUE", icon: "vue", link: "vue/" },
        ],
      },
      {
        text: "生态笔记",
        prefix: "ecology/",
        children: [
          { text: "LINUX", icon: "linux", link: "linux/" },
          { text: "GIT", icon: "git", link: "git/" },
        ],
      },
    ],
  },
  {
    text: "关于",
    icon: "info",
    prefix: "/about/",
    children: [
      { text: "关于我", icon: "people", link: "intro" },
      { text: "关于本站", icon: "computer", link: "site" },
    ]
  },
  "/demo/",
]);
