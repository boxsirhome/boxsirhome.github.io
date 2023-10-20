---
title: 其它
icon: others
date: 2023-10-19
breadcrumb: false
article: false
order: -1
---

## 留言插图
> [留言页](/social/guestbook) 的顶部插图来自于 [TenAPI](https://docs.tenapi.cn/) 免费提供API服务

接口地址

```js
https://tenapi.cn/v2/acg
```

请求示例

```sh
curl https://tenapi.cn/v2/acg -X POST -d 'format=json'
```

请求参数

| 参数名    | 类型     | 必填   | 说明                        |
| ------ | ------ | ---- | ------------------------- |
| format | string | 否    | 返回数据格式, 可选值 `json` 默认返回图片 |

返回数据

```json
{
  "code": 200,
  "msg": "success",
  "data": {
    "width": 1920,
    "height": 1200,
    "url": "https://tvax1.sinaimg.cn/large/9bd9b167gy1g4lhi9v5wdj21hc0xcamc.jpg"
  }
}
```

返回参数

| 参数名    | 类型     | 说明   |
| ------ | ------ | ---- |
| width  | int    | 图片宽度 |
| height | int    | 图片高度 |
| url    | string | 图片地址 |


## 页脚访问量统计

> 来自 [cutercounter.com](https://www.cutercounter.com/)

- 网站和博客 100% 免费访客点击计数器
- 数字与图像一起显示。
- 有 152 种款式可供选择。
- 只需将 HTML 代码放在您的网站上即可。

## 主页一言描述

> 来自 **theme-hope** 主题文档 [一言描述](https://theme-hope.vuejs.press/zh/guide/advanced/presets.html#%E4%B8%80%E8%A8%80%E6%8F%8F%E8%BF%B0)

- 博客主页的描述替换为随机的一言词句。
- 一言名句组件"vuepress-theme-hope/presets/HitokotoBlogHero.js"
- 使用方法：覆盖 @theme-hope/modules/blog/components/BlogHero，将上方组件导入原 BlogHero 的 heroInfo 插槽，同时原样传入插槽属性。

::: details 示例

```ts
// .vuepress/config.ts
import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  // ...

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },
});
```
```vue
<!-- .vuepress/components/BlogHero.vue -->
<script setup lang="ts">
import BlogHero from "vuepress-theme-hope/blog/components/BlogHero.js";
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";
</script>

<template>
  <BlogHero>
    <template #heroInfo="heroInfo">
      <HitokotoBlogHero v-bind="heroInfo" />
    </template>
  </BlogHero>
</template>
```
:::