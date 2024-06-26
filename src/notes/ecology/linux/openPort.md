---
title: Linux开放端口
icon: 
date: 2023-09-23
article: true
sticky: false
star: false
timeline: false
category:
  - 笔记
tag:
  - Linux
---

<!-- more -->

以下命令,适用 Centos7开放或者关闭具体端口
首先查看现在所有已开放的端口

```sh
firewall-cmd --zone=public --list-ports
```

开放指定端口 
```sh
firewall-cmd --zone=public --add-port=8080/tcp --permanent
firewall-cmd --zone=public --add-port=8080-8090/tcp --permanent    
```
设置完成,下面会出现success,但是这时只是设置成功,还没生效。生效需要重启以下防火墙:

```sh
firewall-cmd --reload
```

移除指定端口

```sh
firewall-cmd --zone=public --remove-port=8080/tcp --permanent  
```

重启防火墙

```sh
firewall-cmd --reload
```

关闭防火墙
当需要的端口无法一一开启时,可以直接关闭防火墙
```sh
systemctl stop firewalld.service
```

关闭之后,使用
```sh
firewall-cmd --state 
```
命令查看防火墙的状态