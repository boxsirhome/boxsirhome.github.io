---
title: Sponsor赞赏
icon: sponsor
date: 2023-09-24
breadcrumb: false
article: false
---

VuePress-Theme-Hope主题，当在 [行为选项](https://theme-hope.vuejs.press/zh/config/theme/behavior.html) 中设置 `{ custom: true }` 时，主题将通过 `@theme-hope` 别名来引入组件，所以你可以利用这一点来替换主题的任何一个组件。

## 替换组件的方式

你需要在自己的 VuePress 配置文件通过 `alias` 替换主题中使用的组件别名。

具体步骤参考官方文档 [替换组件的方式](https://theme-hope.vuejs.press/zh/guide/advanced/replace.html#%E6%9B%BF%E6%8D%A2%E7%BB%84%E4%BB%B6%E7%9A%84%E6%96%B9%E5%BC%8F) 

本章要说的是对于 **插槽利用**，以实现 **赞赏** 的功能。

## 插槽利用

关于插槽的详细使用参考官方文档  [插槽利用](https://theme-hope.vuejs.press/zh/guide/advanced/replace.html#%E6%8F%92%E6%A7%BD%E5%88%A9%E7%94%A8) 

有些组件提供了插槽，在这种情况下，你可以在覆盖组件时直接引入原组件，并通过插槽传入你需要的内容。通过这个特性可以实现传入**赞赏组件**。

::: details 插槽位置示例

 常用插槽位置示例，详见 [主布局插槽演示](https://theme-hope.vuejs.press/zh/demo/slot.html)。

![1](./sponsor/1.png)

:::

::: details 提供插槽的组件

**主题**:

- `AutoLink`: `default`, `before`, `after`
- `CommonWrapper`: `default`, `navbarStartBefore`, `navbarStartAfter`, `navbarCenterBefore`, `navbarCenterAfter`, `navbarEndBefore`, `navbarEndAfter`, `navScreenTop`, `navScreenBottom`, `sidebar`, `sidebarTop`, `sidebarBottom`
- `HeroInfo`: `heroImage`, `heroInfo`, `heroBg`
  - `heroInfo` 插槽将接收 `text` `tagline` 和 `isFullScreen` 属性。
  - `heroImage` 插槽将接收 `image` `imageDark` `heroStyle` `alt` 和 `isFullScreen` 属性。
  - `heroBg` 插槽将接收 `image` `bgStyle` 和 `isFullScreen` 属性。
- `HomePage`: `top`, `center`, `bottom`
- `NormalPage`: `top`, `contentBefore`, `contentAfter`, `bottom`, `tocBefore`, `tocAfter`

**博客**：

- `ArticleItem`: `title`, `cover`, `info`, `excerpt`
  - `title` 插槽将接收 `title` `isEncrypted` 和 `type` 属性。
  - `excerpt` 插槽将接收 `excerpt` 属性。
  - `cover` 插槽将接收 `cover` 属性。
  - `info` 插槽将接收 `info` 属性。
- `BlogHero`: `heroBg`, `heroInfo`
  - `heroInfo` 插槽将接收 `text` `tagline` `image` `imageDark` `heroStyle` `alt` 和 `isFullScreen` 属性。
  - `heroBg` 插槽将接收 `image` `bgStyle` 和 `isFullScreen` 属性。

**导航栏**:

- `DropdownLink`: `title`
- `NavActions`: `before`, `after`
- `Navbar`: `startBefore`, `startAfter`, `centerBefore`, `centerAfter`, `endBefore`, `endAfter`
- `NavbarBrand`: `default`
- `NavScreen`: `before`, `after`
- `NavScreenDropdown`: `before`, `after`

**侧边栏**:

- `Sidebar`: `top`, `default`, `bottom`

**TOC**:

- `TOC`: `before`, `after`
  :::


::: info

对于每个插槽的对应位置和功能，请详见 [主题源码](https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/packages/theme/src/client/) 。

:::


## 实现赞赏

::: tip 思路
  1. 下载赞赏组件 `Sponsor.vue`，添加到项目组件目录下。[组件](https://github.com/OrageKK/sponsor-page)
  2. 赞赏使用在所有页面，创建`Layout.vue`布局，覆盖掉主题默认同名`Layout.vue`布局
  3. 将`Sponsor.vue`组件传入到`Layout.vue`布局的`NormalPage:contentAfter`中
  4. 在`.vuepress/client.ts`文件下，覆盖掉的默认的布局`layouts:{ Layout }`
  :::