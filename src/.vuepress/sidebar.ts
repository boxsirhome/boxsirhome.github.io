import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    "/about/intro",
    "slides",
  ],

  
  "/notes": "structure",
  "/notes/after": "structure",
  "/notes/after/springBoot": "structure",
  "/notes/ecology": "structure",
  "/notes/ecology/linux": "structure",
  "/notes/ecology/git": "structure",
  "/notes/front": "structure",
  "/notes/front/vue": "structure",

  "/docs": "structure",
  "/docs/api": "structure",
  "/docs/iot": "structure",

  "/item": "structure",
  "/item/web": "structure",
  "/item/web/springBoot": "structure",
  "/item/IoT": "structure",

  "/link": "structure",

  "/social": "structure",

  "/about": "structure",
  "/about/decorate": "structure",
  "/about/map": [
    {
      text: "首页",
      icon: "home",
      prefix: "/",
      link: "/",
    },
    {
      text: "笔记",
      icon: "notes",
      prefix: "/notes",
      link: "/notes",
      children: "structure",
    },    
    {
      text: "资料",
      icon: "docs",
      prefix: "/docs",
      link: "/docs",
      children: "structure",
    },
    {
      text: "项目",
      icon: "project",
      prefix: "/item",
      link: "/item",
      children: "structure",
    },
    {
      text: "仓库",
      icon: "project",
      prefix: "/link",
      children: "structure",
    },
    {
      text: "交友",
      icon: "makeFriends",
      prefix: "/social",
      children: "structure",
    },
    {
      text: "关于",
      icon: "about",
      prefix: "/about",
      children: "structure",
    },
  ],

});
