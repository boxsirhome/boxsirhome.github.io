import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "盒子先生",
  description: "盒子先生的博客",

  theme,

  
  // Enable it with pwa
  // shouldPrefetch: false,
});
