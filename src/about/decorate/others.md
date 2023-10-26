---
title: 其它
icon: others
date: 2023-10-19
isOriginal: true 
breadcrumb: false
article: true
sticky: false
star: false
timeline: false
category:
  - 小屋装修
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


## 通知组件

> 来自 **theme-hope** 主题文档 [components插件](https://plugin-components.vuejs.press/zh/guide/notice.html)
> 参考了 [dromara](https://github.com/dromara/fast-request) 路径下 `/fast-request/blob/master/docs/.vuepress/theme.ts`

你可以为站点的不同路径设置多个公告，请设置插件选项的`rootComponents.notice`为公告配置数组。
每个公告配置需要包含一个`path`或`match`选项，用于匹配路径。`path`选项为字符串，匹配所有以此开头的路径，`match`选项为正则表达式，匹配相符的所有路路径。
其他的公告配置包括:
- `title`: 通知标题，支持文本和 HTMLString
- `content`: 通知内容，支持文本和 HTMLString
- `actions`: 通知操作
包含以下内容的对象数组:
  - `text`: 动作文本
  - `link` (可选): 操作链接。
  - `Pathname` 会被当作内部路由链接由 router 处理，绝对链接会被当作外部链接在新窗口打开。
  - `type` (可选): "default" 或 "primary"，默认值为 "default"。

::: details 示例
```ts
export default hopeTheme({
plugins: {
  components: { 
    rootComponents:{
          notice: [
            {
              path: "/",
              title: "通知",
              content:
                '这是一则新通知',
              actions: [
                {
                  text: "跳转到",
                  link: "/",
                  type: "default",
                },
              ],
              showOnce: false,
              key: "2023.10.25",
            },
          ]
      }
  }
}
})
```
:::


## 健康监控
::: info
**盒子小屋**🏠所有动态数据都是取自网络，「盒子先生」无法保证这些接口永久有效。
期望定期检查指定网站、服务器或其他网络资源的可用性，并提供实时的监控报告和通知。
所以引用了[uptimerobot](https://uptimerobot.com/)平台。
:::
- 网站监控：UptimeRobot 可以定期检测指定网站或服务器的可用性，并记录它们的响应时间和状态。如果网站或服务器无法访问或出现故障，UptimeRobot 将发送通知给管理员。

- 多种监控类型：除了简单的HTTP和HTTPS监控外，UptimeRobot 还支持诸如Ping、TCP端口、关键词和文件完整性等多种监控类型，以帮助用户全面了解目标资源的可用性和运行状况。

- 多个监控节点：UptimeRobot 在全球范围内拥有多个监控节点，可以从不同的地理位置进行监测，确保准确地测试目标资源的可用性。

- 实时报告和统计信息：UptimeRobot 提供实时的监控报告和统计信息，可通过仪表板查看监控历史、平均响应时间、故障次数等指标，帮助用户分析目标资源的性能和可靠性。

- 通知和集成：UptimeRobot 可以通过电子邮件、短信、Slack等多种途径向管理员发送监控报警和通知。此外，UptimeRobot 还支持与其他工具和服务的集成，如Webhooks、API 和第三方整合等。