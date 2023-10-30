---
title: Linux下安装Redis
icon: 
date: 2023-10-10
article: true
sticky: false
star: false
timeline: false
category:
  - 笔记
tag:
  - Linux
  - Redis
---

## 1.安装依赖环境
```sh
yum install -y gcc
```
## 2.下载redis包并解压
官网下载地址：Download | Redis

```sh
# 下载redis最新版本压缩包（这边是在线下载，离线环境就手动下载上传）
wget https://download.redis.io/redis-stable.tar.gz
#  解压
tar -zxvf redis-stable.tar.gz
```

## 3.进入解压目录并编译
```sh
# 进入解压目录
cd redis-stable
# 编译
make
```

## 4.指定安装目录安装
```sh
make install PREFIX=/usr/local/redis
```

## 5.通过守护进程方式启动
```sh
# 第一步：从 redis 的源码目录中复制 redis.conf 到 redis 的安装目录
cp /redis-stable/redis.conf /usr/local/redis/bin/
# 第二步：修改redis.conf配置文件
cd /usr/local/redis/bin/
vi redis.conf
# 修改内容如下：
#bind127.0.0.1注释（远程访问必改）
#daemonize的值从no修改成yes
#protected-mode的值从yes修改成no
#logfile "/var/log/redis.log"
#需要设置密码的话就去掉注释，将foobared改成密码
#requirepass foobared
```

## 6.设置开机自启动
切换到/lib/systemd/system/目录，创建redis.service文件。
```sh
cd /lib/systemd/system/
vim redis.service
```

文件内容如下：
```sh
[Unit]
Description=redis-server
After=network.target
 
[Service]
# ExecStart需要按照实际情况修改成自己的地址
ExecStart=/usr/local/redis/bin/redis-server /usr/local/redis/bin/redis.conf
Type=forking
 
[Install]
WantedBy=multi-user.target
```

PS：Type=forking这一句很关键，之前网上试了好多方法都不行。

## 7.设置开机启动命令
```sh
# 开机自动启动
systemctl enable redis.service
# 启动redis服务
systemctl start redis.service
# 查看服务状态
systemctl status redis.service
# 停止服务
systemctl stop redis.service
# 取消开机自动启动(卸载服务)
systemctl disabled redis.service
#修改配置后重新加载
systemctl daemon-reload
#查看redis状态
ps aux | grep redis
```

## 8.开放端口
防火墙没开的无视
```sh
#开放6379端口
firewall-cmd --zone=public --add-port=6379/tcp --permanent 
#重新加载防火墙
firewall-cmd --reload 
9.重启服务器
reboot
```

## 9.参考文件

<PDF url="/pdf/linux_install_redis.pdf"/>