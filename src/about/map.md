---
icon: map
breadcrumb: false
article: true
sticky: false
star: false
timeline: true
category:
  - 站点地图
---

# 站点地图

::: echarts 笔记类别占比

```json
{
  "legend": {
    "top": "bottom"
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
      "radius": [20, 100],
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

