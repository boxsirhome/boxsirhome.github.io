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
  "/notes/iot": "structure",

  "/item": "structure",
  "/item/web/springBoot": "structure",
  "/item/IoT": "structure",

  "/about/site": "structure",
  "/about/map": [
    {
      text: "笔记",
      icon: "notes",
      prefix: "/notes",
      link: "/notes",
      children: "structure",
    },
    {
      text: "项目",
      icon: "project",
      prefix: "/item",
      link: "/item",
      children: "structure",
    },
  ],

});
