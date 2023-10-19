---
title: 铭心石刻二次元随机图API
icon: 
date: 2023-09-23
article: true
sticky: false 
star: false 
timeline: false
category:
  - 资料
tag:
  - API
---

:::info
铭心石刻 - 二次元随机图API食用说明
[访问原文](https://imgapi.kouseki.cn/)🙏
:::

远道而来的你世界第一可爱!
不来这里抽个卡嘛~( •̀ ω •́ )y → [Gacha](https://imgapi.kouseki.cn/gacha)

本随机图API基于[Kouseki](https://kouseki.cn) 自主上传的数据，图片绿色健康（不完全）

随机图API及图床均为保障使用体验和稳定性，API有一定的调用限制，具体见下文

食用方法
API地址：https://imgapi.kouseki.cn/random
调用方法：GET

速率和每日额度限制说明：
API限制：每IP每5秒内可以调用3次API，超出返回429

此外，请注意，每个IP每24小时内仅可通过API获取5000张图片
达到限度后将无法使用API，API地址返回状态码403并给出恢复时间

您可以 [访问这里](https://imgapi.kouseki.cn/random?only_check=true) 以在不消耗额度的情况下查询您IP的剩余可用额度或可用额度恢复倒计时

传入参数说明：
| 键          | 键描述                                  | 值类型     | 可用的值                                     | 值描述                                      |
| ---------- | ------------------------------------ | ------- | ---------------------------------------- | ---------------------------------------- |
| sort       | 索引的图片集<br>(可选，默认为approve)            | Text    | random<br />approve<br />top<br />cat<br />yin<br />mp<br />pc<br />tuzi | 索引全部图片<br />索引过审图片 (76268P) 暂时关闭<br />索引精选图片 (3945P) 暂时关闭<br />索引兽耳图片 (2510P) 暂时关闭<br />索引银发图片 (2060P) 暂时关闭<br />索引竖屏壁纸 (1813P)<br />索引横屏壁纸 (1770P)<br />索引点兔图片 (2384P) 暂时关闭 |
| type       | 输出方法<br />(可选，默认为重定向)                | Text    | text<br />json                           | 输出文本<br />输出JSON格式                       |
| num        | 输出图片数量<br />(可选，当num大于1时type固定为json) | Integer | -                                        | 小于等于100的任意正整数<br />若不携带num则默认为1          |
| thumbnail  | 使用缩略图(失效)                            | Text    | large<br />medium<br />small             | 最长边重设为800px<br />最长边重设为176px<br />最长边重设为96px |
| only_check | 检查可用额度(可选，当此参数为任意真值时其它参数无效)          | Any     | -                                        | 任意真值，或不携带此参数                             |

Note：
更新时间：2023年6月29日(UTC+0)
图片审核使用 <a href="https://www.aliyun.com" style="color:#ff6a00;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAADhSURBVDhPzVI7CsJAEH0ggqCgXkPPYyfYaWIUsU3tDQTPIHbewNZKEGw8hoJFIDvOmwwWglhsoQ+GHd5nNrtZ/Ad2A9RkilYYoikjNCRFV8aouwz2xqlmHvUyY2KYoFcmOIQUD61CFhBdzxpqm0HB3rhKK+i1jGYRMpxkCZE5pExxVXETpuh79gVy1OihlxlmKZQkQoKVe7+CXstoFpLZZ931fB3Xv4Jey2gWMrMBN16M69xhrdxF6+h1Iecy7MKZ0eynAblye123VlWfu/w2IPYI0ZcY/xtjHxIR9ZR/DOAJl4Pzry8lqaIAAAAASUVORK5CYII=" style="vertical-align:middle;height:16px;width:auto;">阿里云内容安全API</a>
图片均来自互联网，来源众多无法确认版权信息，侵删

Demo：
```js
GET https://imgapi.kouseki.cn/random
GET https://imgapi.kouseki.cn/random?thumbnail=large
GET https://imgapi.kouseki.cn/random?sort=top
GET https://imgapi.kouseki.cn/random?sort=cat&type=text
GET https://imgapi.kouseki.cn/random?sort=yin&num=100
GET https://imgapi.kouseki.cn/random?only_check=true
```

返回参数说明：
注意：当携带num参数且num参数大于等于2时，API只会输出JSON格式

| 传入type | 返回值                                   | Demo                                     |
| ------ | ------------------------------------- | ---------------------------------------- |
| text   | 图片URL                                 | https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/52b698e4f4256d50bb8af7a0b90895207907806.webp |
| json   | pic: 图片URL(s)数组<br />remain_num: 剩余额度 | {<br />     "pic": ["https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/52b698e4f4256d50bb8af7a0b90895207907806.webp"], <br />    "remain_num": 2333<br /> } |
| 其它     | 重定向到图片URL                             | <img src="https://gitcode.net/RedStone_Kun/apicx/raw/master/imgs/moe/52b698e4f4256d50bb8af7a0b90895207907806.webp" style="max-width:180px;"> |

将随机图API设置为网页背景
Demo(CSS)：

```css
html:before {
    background: url(https://imgapi.kouseki.cn/random) no-repeat center 0/cover;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    content: "";
}
```

为了避免页面加载被过大的背景图阻塞导致加载缓慢，也可换用下面的方法

Demo(HTML)：

```html
<style>
.withBg:before {
    background: url(https://imgapi.kouseki.cn/random) no-repeat center 0/cover;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    content: "";
}
</style>
<script>window.onload = () => document.documentElement.classList.add("withBg");</script>
```

一个输出壁纸轮播HTML的API
API地址：https://imgapi.kouseki.cn/player
调用方法：GET

传入参数说明：

| 键    | 键描述                      | 值类型     | 值描述                      |
| ---- | ------------------------ | ------- | ------------------------ |
| time | 每张图片的持续时间，单位为秒(可选，默认为10) | Integer | 大于等于5的任意正整数若不携带time则默认为5 |

以下是在网页中插入随机轮播背景的使用例

Demo(HTML)：

```html
<iframe src="https://imgapi.kouseki.cn/player?time=10" style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;border:none;overflow:hidden;"></iframe>
```
