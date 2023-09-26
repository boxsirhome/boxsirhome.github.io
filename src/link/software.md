---
title: "软件"
icon: "creative"
date: 2023-04-11
breadcrumb: false
sidebar: false
article: false
comment: false
pageInfo: ["Author", "Date", "PageView"]
---

:::info
软件
:::

## 数据库

<MyLink :links="software_database"/>

## 开发编程

<MyLink :links="software_develop"/> 

<script setup lang="ts">
import MyLink from "@MyLink";
import {software_database, software_develop} from "@Software";
</script>