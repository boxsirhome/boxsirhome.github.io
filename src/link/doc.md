---
title: 文档
icon: devDocs
date: 2023-03-28
breadcrumb: false
sidebar: false
article: false
comment: false
pageInfo: ["Author", "Date", "PageView"]
---

:::info
免费公开的API网站，提供多种公共接口服务
:::

## 前端

<MyLink :links="doc_front"/>

## 后端

<MyLink :links="doc_after"/>

<script setup lang="ts">
import MyLink from "@MyLink";
import { doc_front, doc_after } from "@Doc";  
</script>