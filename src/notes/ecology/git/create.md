---
title: 创建仓库                     # 当前页面内容标题，默认为 Markdown 文件中的第一个 h1 标签内容
article: true                               # 是否将该文章添加至文章列表中，默认true
sticky: false 
star: false 
timeline: false
date: 2023-9-23                            # 写作时间
category:                                   # 分类
  - 笔记
tag:                                        # 标签
  - git
---

<!-- more -->

```sh

----------------------------Git 全局设置:---------------------------------------
git config --global user.name "蔡磊"
git config --global user.email "1796535192@qq.com"

----------------------------创建 git 仓库---------------------------------------
mkdir test
cd test
git init 
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/dangerouspeople/test.git
git push -u origin "master"

-------------------------------已有仓库---------------------------------------
cd existing_git_repo
git remote add origin https://gitee.com/dangerouspeople/test.git
git push -u origin "master"

```