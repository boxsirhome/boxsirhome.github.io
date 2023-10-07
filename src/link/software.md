---
title: 软件
icon: softwarePackage
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

## 电脑系统

<MyLink :links="software_system"/> 

## 数据库

<MyLink :links="software_database"/>

## 开发编程

<MyLink :links="software_develop"/> 

<script setup lang="ts">
import MyLink from "@MyLink";
import {software_system, software_database, software_develop} from "@Software";
</script>