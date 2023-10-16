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
  "legend": {
    "top": "top"
  },
  "toolbox": {
    "show": true,
    "feature": {
      "mark": {
        "show": true
      },
      "dataView": {
        "show": true,
        "readOnly": false
      },
      "restore": {
        "show": true
      },
      "saveAsImage": {
        "show": true
      }
    }
  },
  "series": [
    {
      "name": "Nightingale Chart",
      "type": "pie",
      "radius": [50, 100],
      "center": ["50%", "50%"],
      "roseType": "area",
      "itemStyle": {
        "borderRadius": 8
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

::: chart 仓库

```json
{
  "type": "bar",
  "data": {
    "labels": ["工具", "软件", "文档"],
    "datasets": [
      {
        "label": "数量",
        "data": [23, 41, 11],
        "backgroundColor": [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)"
        ],
        "borderColor": [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)"
        ],
        "borderWidth": 1
      }
    ]
  },
  "options": {
    "scales": {
      "y": {
        "beginAtZero": true
      }
    }
  }
}
```

:::