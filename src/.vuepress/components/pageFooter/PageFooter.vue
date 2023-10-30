<template>
  <footer class="vp-footer-wrapper" v-show="enable">
    <div class="vp-footer">
      <span>您是第
        <img src="https://www.cutercounter.com/hits.php?id=hxoafpc&nd=1&style=113" alt="xxxx">位访客
      </span>
      <span id="runtime_span"></span>
    </div>
    <div class="vp-copyright">
      <div class="footer" v-html="content"></div>
      <div class="copyright">
        {{ copyright }}&nbsp;|&nbsp;
        <a href="/about/copyright">
          <img alt="CC"
            src="/assets/bgImage/25px-Cc.logo.circle.svg.png"
            width="15" height="15" style="vertical-align:middle;">&nbsp;
          <img alt="BY"
            src="/assets/bgImage/25px-Cc-by_new.svg.png"
            width="15" height="15" style="vertical-align:middle;">&nbsp;
          <img alt="NC" src="/assets/bgImage/25px-Cc-nc.svg.png"
            width="15" height="15" style="vertical-align:middle;">&nbsp;
          <img alt="ND" src="/assets/bgImage/25px-Cc-nd.svg.png"
            width="15" height="15" style="vertical-align:middle;">
        </a>
      </div>
    </div>
  </footer>
</template>
  
<script setup lang="ts">
import { usePageFrontmatter } from "@vuepress/client";
import { isString } from "@vuepress/shared";
import { computed, onMounted } from "vue";
import {
  usePageAuthor,
  useThemeLocaleData,
} from "@theme-hope/composables/index";
import { show_runtime } from "./utils/time";

onMounted(() => {
  show_runtime();
});
const frontmatter = usePageFrontmatter();
const themeLocale = useThemeLocaleData();
const author = usePageAuthor();
const enable = computed(() => {
  const { copyright, footer } = frontmatter.value;
  return (
    footer !== false &&
    Boolean(copyright || footer || themeLocale.value.displayFooter)
  );
});
const content = computed(() => {
  const { footer } = frontmatter.value;
  return footer === false
    ? false
    : isString(footer)
      ? footer
      : themeLocale.value.footer || "";
});
const copyright = computed(() =>
  "copyright" in frontmatter.value
    ? frontmatter.value.copyright
    : "copyright" in themeLocale.value
      ? themeLocale.value.copyright
      : author.value.length
        ? `Copyright © 2023-${new Date().getFullYear()} ${author.value[0].name}`
        : false
);
</script>

<style lang="scss">
.vp-footer-wrapper {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding-top: .75rem;
  padding-bottom: .75rem;
  padding-inline-start: calc(var(--sidebar-space) + 2rem);
  padding-inline-end: 2rem;
  border-top: 1px solid var(--border-color);
  background: var(--bg-color);
  color: var(--dark-grey);
  text-align: center;
  transition: border-top-color var(--color-transition), background var(--color-transition), padding var(--transform-transition)
}

@media (max-width: 719px) {
  .vp-footer-wrapper {
    padding-inline-start: 2rem;
  }
}

@media (min-width: 1440px) {
  .vp-footer-wrapper {
    z-index: 50;
    padding-inline-start: 2rem
  }
}

@media print {
  .vp-footer-wrapper {
    margin: 0 !important;
    padding: 0 !important
  }
}

@media (max-width: 419px) {
  .vp-footer-wrapper {
    display: block;
  }
}

.no-sidebar .vp-footer-wrapper,
.sidebar-collapsed .vp-footer-wrapper {
  padding-inline-start: 2rem
}

.vp-footer {
  position: relative;
  display: flex;
  flex-direction: column;
  // margin: .5rem 1rem;
  font-size: 14px
}

@media print {
  .vp-footer {
    display: none
  }
}

.vp-copyright {
  // margin: 6px 0;
  font-size: 13px
}

.vp-page:not(.not-found)+.vp-footer-wrapper {
  margin-top: -2rem
}
</style>