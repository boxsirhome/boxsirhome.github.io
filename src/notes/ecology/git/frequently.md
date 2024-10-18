---
title: 常用的git命令大全                     # 当前页面内容标题，默认为 Markdown 文件中的第一个 h1 标签内容
article: true
sticky: false 
star: false 
timeline: false
date: 2023-9-23                            # 写作时间
category:                                   # 分类
  - 笔记
tag:                                        # 标签
  - Git
---


<!-- more -->

## 常用命令

```sh
git init   #初始化
git clone https://gitee.com/Cai_xiaozhan/springboot_maven_demo.git   #克隆远程项目 
git add .  #添加所有文件到暂存区
git commit -m "信息内容"   #提交暂存区内容到本地仓库
git push    #上传本地仓库文件到远程  
git push --force    #强制push
git push -u origin "master"   #上传本地仓库文件到远程  
git remote -v      #查看远程仓库地址
git remote set-url origin "仓库地址"     #修改仓库对应的远程仓库地址
 
git pull   #从远程拉取
git reset   #从本地仓库拉取
git checkout   #从暂存区拉取

git status [filename]   #查看指定文件状态
git status    #查看所有文件状态

git branch #列出所有本地分支
git branch -r #列出所有远程分支
git checkout [branch-name]  #切换分支
git branch [branch-name]  #新建一个分支，但依然保留在当前分支
git checkout -b [branch-name]   #新建一个分支，并切换到该分支
git push --set-upstream origin [branch-name]  #上传一个本地创建好的[branch-name] 分支到远程
git branch -d [branch-name]    #删除分支
git push origin --delete [branch-name]   #删除远程分支
git merge [branch]   #合并指定分支到当前分支
git pull --rebase origin dev  #拉取dev分支并且和本地分支做比较
```

## 停止追踪本地文件
```sh
git update-index --assume-unchanged .\box\src\main\resources\application.yml
```

## 重新追踪该文件
```sh
git update-index --no-assume-unchanged .\box\src\main\resources\application.yml
```