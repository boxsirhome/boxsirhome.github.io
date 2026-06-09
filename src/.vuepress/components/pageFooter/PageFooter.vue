<template>
  <footer class="vp-footer-wrapper" v-show="enable">
    <div class="vp-footer">
      <span id="runtime_span"></span>
      <!-- 替换原有的 cutercounter 图片统计，使用不蒜子统计 -->
      <div class="busuanzi">
        <span id="busuanzi_container_site_pv" style="display: none">
          本站总访问量
          <span id="busuanzi_value_site_pv"></span>次
          <span class="post-meta-divider">|</span>
        </span>
        <span id="busuanzi_container_site_uv" style="display: none">
          您是本站第
          <span id="busuanzi_value_site_uv"></span>位访问者
        </span>
      </div>
    </div>
    <div class="vp-copyright">
      <div class="footer" v-html="content"></div>
      <div class="copyright">
        {{ copyright }}&nbsp;|&nbsp;
        <a href="/about/copyright">
          <img alt="CC" src="/assets/bgImage/25px-Cc.logo.circle.svg.png" width="15" height="15"
            style="vertical-align:middle;">&nbsp;
          <img alt="BY" src="/assets/bgImage/25px-Cc-by_new.svg.png" width="15" height="15"
            style="vertical-align:middle;">&nbsp;
          <img alt="NC" src="/assets/bgImage/25px-Cc-nc.svg.png" width="15" height="15"
            style="vertical-align:middle;">&nbsp;
          <img alt="ND" src="/assets/bgImage/25px-Cc-nd.svg.png" width="15" height="15" style="vertical-align:middle;">
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { usePageFrontmatter } from "@vuepress/client";
import { isString } from "@vuepress/shared";
import { computed, onMounted, watch } from "vue";
import {
  usePageAuthor,
  useThemeLocaleData,
} from "@theme-hope/composables/index";
import { useRouter } from "vue-router";
import { show_runtime } from "./utils/time";

// 不蒜子脚本加载与刷新逻辑
let busuanziLoaded = false;

const loadBusuanziScript = (): void => {
  // 如果已经存在 busuanzi 全局对象，标记并返回
  if (window.busuanzi) {
    busuanziLoaded = true;
    // 初次加载完成调用一次 fetch 确保数据更新
    if (typeof window.busuanzi.fetch === 'function') {
      window.busuanzi.fetch();
    }
    return;
  }

  // 避免重复添加脚本
  if (document.querySelector('script[src*="busuanzi.pure.mini.js"]')) {
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
  script.async = true;
  script.onload = () => {
    busuanziLoaded = true;
    // 脚本加载完成后调用 fetch 更新数据
    if (window.busuanzi && typeof window.busuanzi.fetch === 'function') {
      window.busuanzi.fetch();
    }
  };
  document.head.appendChild(script);
};

const refreshBusuanzi = (): void => {
  if (busuanziLoaded && window.busuanzi && typeof window.busuanzi.fetch === 'function') {
    window.busuanzi.fetch();
  }
};

const router = useRouter();
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

// 监听路由变化，刷新不蒜子数据
watch(
  () => router.currentRoute.value.path,
  () => {
    refreshBusuanzi();
  }
);

onMounted(() => {
  // 初始化运行时统计
  show_runtime();
  // 加载不蒜子脚本
  loadBusuanziScript();
});
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
  font-size: 14px;
}

@media print {
  .vp-footer {
    display: none
  }
}

.vp-copyright {
  font-size: 13px;
}

.vp-page:not(.not-found)+.vp-footer-wrapper {
  margin-top: -2rem;
}

/* 不蒜子统计样式，保持与原有文本风格一致 */
.busuanzi {
  margin: 0.2rem 0;
  line-height: 1.5;

  span {
    font-size: 14px;
  }

  .post-meta-divider {
    margin: 0 0.3rem;
  }
}
</style>