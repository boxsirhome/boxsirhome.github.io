import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "笔记",
    icon: "edit",
    prefix: "/notes",
    children: [
      {
        text: "后端笔记",
        prefix: "/after",
        children: [
          { text: "JAVA", icon: "java", link: "/java" }
        ],
      },
      {
        text: "前端笔记",
        prefix: "/front",
        children: [
          { text: "VUE", icon: "vue", link: "/vue" },
        ],
      },
      {
        text: "生态笔记",
        prefix: "/ecology",
        children: [
          { text: "LINUX", icon: "linux", link: "/linux" },
          { text: "GIT", icon: "git", link: "/git" },
        ],
      },
    ],
  },
  {
    text: "项目",
    icon: "app",
    prefix: "/notes",
    children: [
      {
        text: "web项目",
        prefix: "/after",
        children: [
          { text: "JAVA", icon: "java", link: "/java" }
        ],
      },
      {
        text: "物联网项目",
        prefix: "/front",
        children: [
          { text: "VUE", icon: "vue", link: "/vue" },
        ],
      },
    ],
  },
  {
    text: "仓库", icon: "box", prefix: "/link",
    children: [
      { text: "工具", icon: "tool", link: "/tool" },
      { text: "软件", icon: "software", link: "/software" },
      { text: "文档", icon: "article", link: "/doc" },
    ]
  },
  { text: "友链", icon: "link", link: "/social/friend" },
  { text: "留言", icon: "mark", link: "/social/guestbook" },
  {
    text: "关于",
    icon: "info",
    prefix: "/about",
    children: [
      { text: "关于我", icon: "people", link: "/intro" },
      { text: "关于本站", icon: "computer", link: "/site" },
    ]
  },
]);
