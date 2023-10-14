---
title: 软件
icon: softwarePackage
date: 2023-04-11
breadcrumb: false
sidebar: false
article: false
pageInfo: ["Author", "Date", "PageView"]
---

:::info
免费的、无广告、无病毒、无插件的软件安装包 :candy:
:::

## 电脑系统

<MyLink :links="software_system"/> 

## 数据库

<MyLink :links="software_database"/>

## 开发编程

<MyLink :links="software_develop"/> 

## 办公软件

<MyLink :links="software_work"/> 

<script setup lang="ts">
import MyLink from "@MyLink";
import {software_system, software_database, software_develop, software_work} from "@Software";
</script>