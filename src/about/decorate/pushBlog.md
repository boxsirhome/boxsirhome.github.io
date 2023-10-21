---
title: 上传博客
icon: upload
date: 2023-10-06
isOriginal: true 
breadcrumb: false
article: true
sticky: false
star: false
timeline: false
category:
  - 小屋装修
---

## 运行博客

### 环境准备

安装 [Node.js](https://nodejs.org/zh-cn)

安装 [VSCode](https://code.visualstudio.com/)

安装 Pnpm，在终端中输入下列命令安装 pnpm:

```sh
corepack enable
corepack prepare pnpm@latest --activate
```



### 下载远程仓库

在本地仓下执行

git clone [https://gitee.com/boxsir/boxsir.git](https://gitee.com/boxsir/boxsir.git)  #克隆远程项目



### 运行项目

使用 **vscode** 打开项目后在终端执行命令：

```sh
pnpm install   #下载依赖
pnpm docs:dev  #启动开发服务器
```

此时可以在浏览器中访问 [http://localhost:8080](http://localhost:8080) 看到项目启动 



## 推送博客

项目部署在Gitee Pages服务中 ，访问目录是 `src/.vuepress/dist` ，所以需要先把项目构建到 `dist` 文件夹下。

在终端执行命令

```sh
pnpm docs:build  #构建项目并输出
```

构建完成后通过 **git** 推送到自己的远程仓库

```sh
git add .                                 #添加所有文件到暂存区
git commit -m "first commit"              #提交暂存区内容到本地仓库
git remote add origin <remote-url>        #关联到远程仓库（已关联省略这一步）
git push -u origin "master"               #推送到远程maste分支
```



## 部署博客

项目上传成功后，并没有部署完成。

前往  **gitee>项目仓库>服务>Gitee Pages>更新**

更新完成后，可通过提供的网站地址，访问最新的博客啦🎉



## 更新博客 :pushpin:

- 在vscode中更新博客内容后，需要重复 [推送博客](#推送博客) 和 [部署博客](#部署博客) 中的操作
- 如果希望博客的搜索功能，立即实现对新文章的搜索，需要前往 [Algolia Crawler](https://crawler.algolia.com/admin/crawlers/) 来手动重启爬虫，实现对新文章的索引。具体步骤，参考 **Algolia搜索>[执行爬虫](/about/site/algolia.html#执行爬虫)**