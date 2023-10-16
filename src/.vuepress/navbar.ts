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
          { text: "SpringBoot", icon: "springBoot", link: "/springBoot" }
        ],
      },
      {
        text: "前端笔记",
        prefix: "/front",
        children: [
          { text: "Vue", icon: "vue", link: "/vue" },
        ],
      },
      {
        text: "生态笔记",
        prefix: "/ecology",
        children: [
          { text: "Linux", icon: "linux", link: "/linux" },
          { text: "Git", icon: "git", link: "/git" },
        ],
      },
      {
        text: "物联网笔记",
        prefix: "/iot",
        children: [
          { text: "嵌入式", icon: "embedded", link: "/embedded" },
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
          { text: "SpringBoot", icon: "springBoot", link: "/springBoot" }
        ],
      },
      {
        text: "物联网项目",
        prefix: "/IoT",
        children: [
          { text: "物联网", icon: "IOT", link: "/" },
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
      { text: "关于屋主", icon: "aboutMe", link: "/intro" },
      { text: "关于小屋", icon: "aboutSite", link: "/site" },
      { text: "小屋地图", icon: "map", link: "/map" },
    ]
  },
]);
