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
- 免费、无广告、无病毒、无插件的软件安装包 :floppy_disk:
- 各版本都有，需要其他版本的评论区留言站长 :black_nib:
- 地址失效，劳烦下方评论区，通知站长修复 :wrench:
:::

## 电脑系统

<MyLink :links="software_system"/> 

## 数据库

<MyLink :links="software_database"/>

## 开发编程

<MyLink :links="software_develop"/> 

## 办公软件

<MyLink :links="software_work"/> 

## 图像处理

<MyLink :links="software_image"/> 

## 媒体工具

<MyLink :links="software_media"/> 

<script setup lang="ts">
import MyLink from "@MyLink";
import {software_system, software_database, software_develop, software_work, software_image, software_media} from "@Software";
</script>