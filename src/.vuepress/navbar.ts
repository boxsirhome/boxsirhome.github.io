import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "笔记",
    icon: "notes",
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
    icon: "project",
    prefix: "/item",
    children: [
      {
        text: "web项目",
        prefix: "/web",
        children: [
          { text: "JAVA", icon: "java", link: "/java" }
        ],
      },
      {
        text: "物联网项目",
        prefix: "/IoT",
        children: [
          { text: "ESP32", icon: "vue", link: "/ESP32" },
          { text: "ESP8266", icon: "vue", link: "/ESP8266" },
        ],
      },
    ],
  },
  {
    text: "仓库", icon: "warehouse", prefix: "/link",
    children: [
      { text: "工具", icon: "toolBox", link: "/tool" },
      { text: "软件", icon: "softwarePackage", link: "/software" },
      { text: "文档", icon: "devDocs", link: "/doc" },
    ]
  },
  {
    text: "交友", icon: "makeFriends", prefix: "/social",
    children: [
      { text: "友链", icon: "friendLink", link: "/friend" },
      { text: "留言", icon: "comment", link: "/guestbook" },
    ]
  },
  {
    text: "关于",
    icon: "about",
    prefix: "/about",
    children: [
      { text: "关于我", icon: "aboutMe", link: "/intro" },
      { text: "关于本站", icon: "aboutSite", link: "/site/pushBlog" },
    ]
  },
]);
