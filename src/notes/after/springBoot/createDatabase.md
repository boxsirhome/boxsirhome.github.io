---
title: 工程启动时建表和填充数据
icon: pen-to-square
date: 2023-09-23
article: true
sticky: false 
star: false 
timeline: false
category:
  - 笔记
tag:
  - SpringBoot
---


:::info
java项目启动 建表和填充数据
:::

<!-- more -->

本例适用版本：

SpringBoot：2.7.4

Kingbase：8.6.0

不保证本例在其它版本依然适用

先决条件：

SpringBoot工程能与目标DB顺畅连接。

下面正文开始：

1.在application.properties中加入以下文字：

```yaml
spring:
  datasource:
    driver-class-name: com.kingbase8.Driver
    url: jdbc:kingbase8://127.0.0.1:54321/test
    username: system
    password: 123456
  #建表和填充数据
  sql:
    init:
      mode: always
      schema-locations: classpath:db/schema-kingbase.sql
      data-locations: classpath:db/data-kingbase.sql
```

sql.init.mode有always、embedded、never三个选项，一般再需要建表时填always，如果表已经建立完毕须改成never；

schema-locations是建表语句文件所在，本例中的schema.sql是这样书写的：

```sql
DROP TABLE IF EXISTS user_test;
CREATE TABLE user_test(
	id bigint NOT NULL ,
	name VARCHAR(30)  ,
	age int NULL  ,
	email VARCHAR(50),
	PRIMARY KEY (id)
);
```

data-locations是给表充值文件所在，本例中data.sql是这样书写的：

```sql
INSERT INTO user_test (id, name, age, email) VALUES
(1, 'Jone', 18, 'test1@baomidou.com'),
(2, 'Jack', 20, 'test2@baomidou.com'),
(3, 'Tom', 28, 'test3@baomidou.com'),
(4, 'Sandy', 21, 'test4@baomidou.com'),
(5, 'Billie', 24, 'test5@baomidou.com');
```

以上文件的物理位置见下图：
  ![weizhi](./createDatabase/weizhi.png)

2.以上三处就绪后运行程序，如果报错就检查sql语句有没有纰漏，如果不报错就表示建表成功了