---
title: Fork项目更新合并                     # 当前页面内容标题，默认为 Markdown 文件中的第一个 h1 标签内容
article: true                               # 是否将该文章添加至文章列表中，默认true
sticky: false
star: true
timeline: false
date: 2024-9-7                          # 写作时间
category:                                   # 分类
  - 笔记
tag:                                        # 标签
  - Git
---


> 当你 `Fork` 了一个项目并进行了二次开发，如果原始项目有更新，你可以将原项目的更新合并到你自己的 `Fork` 项目中。
> 这个过程通常包括以下几个步骤：

<!-- more -->
## 配置原项目的远程仓库 (Upstream)
> 首先，你需要将原项目（也称为 `upstream`）配置为你 `Fork` 项目的远程仓库之一，这样可以从原项目拉取最新的代码。

1.打开你 `Fork` 项目的目录。

2.使用以下命令添加原始项目（`upstream`）为远程仓库：
```sh
git remote add upstream https://gitee.com/原项目路径.git
```
如果你是在 GitHub 上：
```sh
git remote add upstream https://github.com/原项目路径.git
```

3.确认 `upstream` 已成功添加：
```sh
git remote -v
```
你应该可以看到 `origin`（你的 `Fork`仓库）和 `upstream`（原始项目）的信息。

## 从原项目获取最新代码
> 接下来，你需要从 `upstream` 仓库拉取原始项目的更新。

1.拉取原项目的最新更新：
```sh
git fetch upstream
```

2.切换到你的本地主分支（假设为 `main` 或 `master`）：
```sh
git checkout main
```

3.将 `upstream` 的主分支与本地的 `main` 分支合并：
```sh
git merge upstream/main
```
如果原项目的主分支是 `master`，则使用：
```sh
git merge upstream/master
```

## 解决冲突（如有）
> 如果你在 `Fork` 项目中进行了二次开发，有可能在合并时出现代码冲突。此时，你需要手动解决冲突。

1.Git 会提示哪些文件存在冲突，打开这些文件并手动解决冲突。

2.解决冲突后，添加解决的文件：
```sh
git add <冲突文件>
```

3.提交合并结果：
```sh
git commit -m "合并 upstream 到本地"
```

## 推送更新到你的 Fork 仓库
> 完成本地合并并解决冲突后，你可以将这些更改推送到你的 `Fork` 仓库。

推送本地更改到远程 `origin` 仓库（即你的 `Fork` 项目）：
```sh
git push origin main
```
或者，如果主分支是 `master`：
```sh
git push origin master
```
