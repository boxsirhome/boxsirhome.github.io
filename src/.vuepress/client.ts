import { defineClientConfig } from "@vuepress/client";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import Layout from "./components/layout/Layout.vue";
export default defineClientConfig({
  layouts: {
    Layout,
  },
});
