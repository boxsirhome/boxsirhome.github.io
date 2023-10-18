<template>
    <footer class="footer-wrapper" v-show="enable">
      <div class="footer-left">
        <span id="runtime_span"></span>
        <div class="busuanzi">
          <span id="busuanzi_container_site_pv" style="display: none">
            总访问量
            <span id="busuanzi_value_site_pv"></span>次
            <span class="post-meta-divider">|</span>
          </span>
          <span id="busuanzi_container_site_uv" style="display: none">
            您是第
            <span id="busuanzi_value_site_uv"></span>位客人
          </span>
        </div>
      </div>
      <div class="footer-right footer-content">
        <div class="copyright">{{ copyright }}</div>
        <div class="footer" v-html="content"></div>
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
  .footer-wrapper:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  [data-theme="light"] .footer-wrapper:before {
    background: #fff;
  }
  [data-theme="dark"] .footer-wrapper:before {
    background: #0d1117;
  }
  .footer-wrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 0rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-inline-start: calc(var(--sidebar-space) + 2rem);
    padding-inline-end: 2rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: bottom;
    text-align: center;
    border-top: 1px solid var(--border-color);
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    background: var(--bg-color);
    transition: border-top-color var(--color-transition),
      background var(--color-transition), padding var(--transform-transition);
  
    @media (max-width: hope-config.$tablet) {
      z-index: 2;
      padding-inline-start: 2rem;
    }
  
    @media (min-width: hope-config.$pad) {
      z-index: 50;
      padding-inline-start: 2rem;
    }
  
    @media print {
      margin: 0 !important;
      padding: 0 !important;
    }
  
    @media (max-width: hope-config.$mobile) {
      // display: block;
      min-height: 136px;
    }
    .footer-content {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;
      z-index: 1;
      .footer {
        margin: 0.5rem 1rem;
        font-size: 14px;
  
        @media print {
          display: none;
        }
      }
      .copyright {
        font-size: 14px;
      }
    }
    .no-sidebar &,
    .sidebar-collapsed & {
      padding-inline-start: 2rem;
    }

    .footer-left  {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      font-size: 14px;
      z-index: 1;
    }
    .footer-right{
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }
    #runtime_span {
      font-size: 14px;
      z-index: 1;
    }
  }
  .vp-page:not(.not-found) + .footer-wrapper {
    margin-top: -2rem;
  }
  </style>
  