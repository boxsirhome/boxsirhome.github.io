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

  "/notes/": "structure",

  "/notes/after/": "structure",
  "/notes/after/java/": "structure",

  "/notes/front/": "structure",
  "/notes/front/vue/": "structure",

  "/notes/ecology/": "structure",
  "/notes/ecology/linux/": "structure",
  "/notes/ecology/git/": "structure",
});
