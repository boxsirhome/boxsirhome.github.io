---
title: git合并提交代码                     # 当前页面内容标题，默认为 Markdown 文件中的第一个 h1 标签内容
article: true                               # 是否将该文章添加至文章列表中，默认true
sticky: false
star: true
timeline: false
date: 2023-9-23                            # 写作时间
category:                                   # 分类
  - 笔记
tag:                                        # 标签
  - Git
---

<!-- more -->

```sh
git add .                               #在自己的分支下暂存修改后的代码
git commit -m "提交"                    #提交到本地暂存区
git pull --rebase origin [branch-name]  #变基远程主分支如：master
git push                                #提交到本地仓库
git checkout [branch-name]              #切换到本地主分支如：master
git branch                              #查询当前分支-确实切换到主分支
git merge [my-branch-name]              #把本地自己的分支和主分支合并
git push -u origin [branch-name]        #push到远程主分支下如：master
git checkout [my-branch-name]           #切回自己的分支继续编写代码
```
