---
title: 添加仓库
icon: warehouse
date: 2023-10-07
breadcrumb: false
article: false
---

## 引入卡片组件
1. 将卡片组件添加到项目目录下
> **盒子小屋**:house: 的卡片组件放置在 .vuepress/components 下。
::: details 卡片组件
```vue
// .vuepress/components/Mylink.vue
<!-- 卡片组件 -->
<template>
  <div class="vp-project-panel">
    <template
      v-if="linkDatas.length > 0"
      v-for="(item, index) in linkDatas"
      :key="index"
    >
      <a
        class="item vp-project-card"
        :class="GetColorClassName(index)"
        :href="item.link"
        target="_blank"
      >
        <img
          class="vp-project-image"
          :src="item.ico"
          alt=""
          onerror='this.onerror=null,this.src=this.srcset="/assets/default/loading.webp"'
        />
        <div class="vp-project-name">{{ item.name }}</div>
        <div class="vp-project-desc">{{ item.desc }}</div>
      </a>
    </template>
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { LinkData } from "../data/friendData";
const props = defineProps({
  type: String,
  links:Object as PropType<LinkData[]>,
});
let linkDatas: LinkData[];
console.log(props.links);

linkDatas = props.links

const GetColorClassName = (index) => {
  const Idx = index % 9;
  return `project${Idx}`;
};
</script>
<style lang="scss" scoped>
a.item {
  text-decoration: none;
}
.project-card .image {
  border-radius: 50%;
}
</style>

```
:::

2. 将卡片组件添加到 `alias` 方法中
```ts{3}
export default defineUserConfig({
  alias: {
    "@MyLink": path.resolve(__dirname, "./components/Mylink.vue"),  //自定义卡片组件
  },
});
```
3. 使用卡片组件
> 在md中配合 **数据** 使用卡片组件
```md{13,16}
---
title: 软件
icon: softwarePackage
date: 2023-04-11
breadcrumb: false
sidebar: false
article: false
pageInfo: ["Author", "Date", "PageView"]
---

## 电脑系统

<MyLink :links="software_system"/> 

<script setup lang="ts">
import MyLink from "@MyLink";
import {software_system} from "@Software";
</script>
```

## 添加数据 :pushpin:

### 创建新仓库类别并添加数据

> 例如添加**文档**分类

1. 在 `src\.vuepress\data` 目录下创建 **文档类别** 数据文件 `doc.ts`，包含`前端文档`和`后端文档`

   ```ts
   /* 文档数据 */
   //引入数据格式类
   import { LinkData } from "./friendData";

   //定义doc_front方法，前端文档数据
   export const doc_front: LinkData[] = [
     {
       name: "Vue2中文文档",
       desc: "易学易用，性能出色，适用场景丰富的 Web 前端框架。",
       ico: "https://cn.vuejs.org/logo.svg",
       link: "https://cn.vuejs.org/",
     },
     {
       name: "Element",
       desc: "一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库",
       ico: "https://element.eleme.cn/favicon.ico",
       link: "https://element.eleme.cn/#/zh-CN",
     },
   ];

   //定义doc_after方法，后端文档数据
   export const doc_after: LinkData[] = [
     {
       name: "mybatis",
       desc: "MyBatis 是一款优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。",
       ico: "https://files.codelife.cc/icons/f5a900cb9c904a94.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp",
       link: "https://mybatis.org/mybatis-3/zh/",
     },
     {
       name: "Redis",
       desc: "一个开源的内存数据存储系统，通常被用作数据库、缓存和消息中间件。",
       ico: "https://redis.io/images/favicons/favicon-32x32.png",
       link: "https://redis.io/",
     },
   ];
   ```


2. 在 `src\.vuepress\config.ts` 文件的**alias:{}** 方法下引入：

   ```ts{3}
     alias: {
       "@MyLink": path.resolve(__dirname, "./components/Mylink.vue"),       //卡片组件
       "@Doc": path.resolve(__dirname, "./data/doc.ts"),                    //文档数据
     },
   ```

3. 在 `src\link` 目录下新建`doc.md`文件并使用：

   ```md{17,21,24-25}
   ---
   title: "官网文档"
   icon: "api"
   date: 2023-03-28
   category:
     - 链接
   tag:
     - 文档
   ---

   :::info
   开发文档
   :::

   ## 前端

   <MyLink :links="doc_front"/>                   //使用前端数据

   ## 后端

   <MyLink :links="doc_after"/>                   //使用后端数据

   <script setup lang="ts">
   import MyLink from "@MyLink";                  //引入组件
   import { doc_front, doc_after } from "@Doc";   //引入数据
   </script>
   ```

4. 在 `src\.vuepress\navbar.ts` 文件中挂载到下拉菜单

   ```ts{7}
   import { navbar } from "vuepress-theme-hope";

   export default navbar([
    {
       text: "仓库", icon: "group", prefix: "/link",
       children: [
         { text: "文档", icon: "computer", link: "/doc" },  //文档挂载到下拉菜单中
       ]
     },
   ]);
   ```

   ​


### 添加已有仓库类别下的子分类

> 例如在**软件**分类下添加**开发编程**子类

1. 在 `src\.vuepress\data\software.ts` 文件下，添加 `software_develop` 方法

   ```ts{20-33}
   import { LinkData } from "./friendData";

   //数据库类软件
   export const software_database: LinkData[] = [
     {
       name: "MySql5.7",
       desc: "提取码：8eph",
       ico: "https://labs.mysql.com/common/themes/sakila/favicon.ico",
       link: "https://pan.baidu.com/s/1XwEE89pi7BQmtWxdM6aDKQ",
     },
     {
       name: "MySql8.0",
       desc: "提取码：9pwa",
       ico: "https://labs.mysql.com/common/themes/sakila/favicon.ico",
       link: "https://pan.baidu.com/s/1BabN8he2eIHkPE8HMyMJ9A",
     },
   ];

   //新增的，开发编程类软件
   export const software_develop : LinkData[] = [
     {
       name: "IDEA2020",
       desc: "提取码：y3bu",
       ico: "https://vimsky.com/wp-content/uploads/2019/11/cbefc898779560aaf7d799770a76f1b2.jpg",
       link: "https://pan.baidu.com/s/11reNNTp8X7-vSE0qzMOh7Q",
     },
     {
       name: "JetBrains2021",
       desc: "提取码：6789",
       ico: "https://www.downkr.com/uploadfile/2021/0803/202108031219569018.png",
       link: "https://pan.baidu.com/s/1-ZeAndWpUL0wpWJwXddVSg?pwd=6789",
     },
   ];
   ```

2. 在 `src\link\software.md` 文件中使用

   ```md{21,25}
   ---
   title: "软件"
   icon: "creative"
   date: 2023-04-11
   category:
     - 软件
   tag:
     - 工具
   ---

   :::info
   软件
   :::

   ## 数据库

   <MyLink :links="software_database"/>       <!-- 使用software_database数据 -->

   ## 开发编程

   <MyLink :links="software_develop"/>        <!-- 使用software_develop数据 -->

   <script setup lang="ts">
   import MyLink from "@MyLink";                                   <!-- 引入卡片组件 -->
   import {software_database, software_develop} from "@Software";  <!-- 引入数据 -->
   </script>
   ```

   ​

### 添加已有仓库类别数据

> 例如在**工具**分类下添加新工具

在 `src\.vuepress\data\tool.ts` 文件中添加json

  ```ts{11-16}
  import { LinkData } from "./friendData";

  export const tool: LinkData[] = [
    {
      name: "Smallpdf",
      desc: "利用我们的PDF工具集来处理数字文档，并无缝地简化您的工作流程。",
      ico: "https://s.smallpdf.com/static/e42e3ce3bd662d323c57.svg",
      link: "https://smallpdf.com/cn",
    },
    //新增的json数据
    {
      name: "json工具",
      desc: "网站部分工具是站长整合网上已有工具、开源包等，并全部遵循原有协议发布，著作权归属原作者或是团队。",
      ico: "https://www.bejson.com/static/bejson/img/qq/bejson-q.png",
      link: "https://www.bejson.com/",
    },
  ];
  ```


