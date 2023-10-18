---
icon: map
breadcrumb: false
article: true
sticky: false
star: false
timeline: true
category:
  - 小屋地图
---

# 小屋地图

::: echarts 笔记

```json
{
  "tooltip": {
    "trigger": "item"
  },
  "legend": {
    "top": "5%",
    "left": "center"
  },
  "series": [
    {
      "name": "笔记量",
      "type": "pie",
      "radius": ["40%", "70%"],
      "avoidLabelOverlap": false,
      "itemStyle": {
        "borderRadius": 10,
        "borderColor": "#fff",
        "borderWidth": 2
      },
      "label": {
        "show": false,
        "position": "center"
      },
      "emphasis": {
        "label": {
          "show": true,
          "fontSize": 20,
          "fontWeight": "bold"
        }
      },
      "labelLine": {
        "show": false
      },
      "data": [
        {
          "value": 3,
          "name": "SpringBoot"
        },
        {
          "value": 1,
          "name": "Vue"
        },
        {
          "value": 3,
          "name": "Git"
        },
        {
          "value": 5,
          "name": "Linux"
        },
        {
          "value": 1,
          "name": "嵌入式"
        }
      ]
    }
  ]
}
```

:::

::: echarts 仓库

```js

const XLCId = '1PXJmYmdN9qYmeql0kOsoUTF-MdYXbMMI'
const XLCKey = 'sZASC4u1yZFapF2Tz06lnBnb'
const data = await fetch("https://lcapi.cailei.site/1.1/classes/Counter",{
              headers: {
                'Content-Type': 'application/json',
                'X-LC-Id': XLCId,
                'X-LC-Key': XLCKey,
              }
            }
).then((res) => res.json());
// console.log(data.results);
let counter = data.results;
let urlList = [];
let timeList = [];
for (let key in counter) {
  timeList.push(counter[key].time);
  urlList.push(counter[key].url);
}
// console.log(urlList,timeList)



const option = {
  grid:{
    top: 10
  },
  xAxis: {
    type: "category",
    data: ["工具", "软件", "文档"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [23, 41, 30],
      type: "bar",
      label: {
        show: true,
        position: "top"
      }
    }
  ]
}
```

:::

::: echarts 项目

```js
const data = await fetch(
  "/json/item.json",
).then((res) => res.json());

const option = {
  tooltip: {
    trigger: "item",
    triggerOn: "mousemove",
  },
      series: [
        {
          type: 'tree',
          data: [data],
          top: '0',
          left: '15%',
          bottom: '1%',
          right: '20%',
          symbolSize: 10,
          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 15
          },
          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left'
            }
          },
          emphasis: {
            focus: 'descendant'
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750
        }
      ]
};

const height = 600;
```

:::
