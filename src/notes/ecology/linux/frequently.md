---
title: Linux常用命令
icon: 
date: 2023-09-23
article: true
sticky: true
star: true
timeline: false
category:
  - 笔记
tag:
  - Linux
---

<!-- more -->

```sh
cd                                            # 改变目录

cd ../                                        # 回退到上一个目录
pwd                                           # 显示当前所在文件路径
touch                                         # 新建一个文件 如touch index.js 就会在当前目录下新建一个index.js文件
rm                                            # 删除一个文件 ，rm index.js就会删除index.js文件
rm -r                                         # 删除一个文件夹，rm -r src删除src文件夹
rm -r *                                       # 删除文件夹下所有文件
mkdir                                         # 新建一个文件夹，mkdir src新建一个src文件夹
cat congfig.txt                               # 查看文件
vim congfig.txt                               # 编辑文件
ll                                            # 查看目录下文件详情
ls                                            # 查看目录下文件简略
su - root                                     # 切换到root用户
tar -zvxf redis-5.0.7.tar.gz                  # 解压目录下文件
mv  /root/redis-5.0.7  /usr/local/redis-5.0.7 # 移动一个目录到另一个目录下mv index.html /use/local/src移动一个文件到目录下
reboot                                        # 重启服务器
clear                                         # 清屏
history                                       # 查看命令历史
help                                          # 帮助
exit                                          # 退出
ctrl+c                                        # 中断执行
```