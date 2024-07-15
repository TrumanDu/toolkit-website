---
title: 插件开发
group:
  title: 开发者文档
  order: 0
---

## 新建 plugin.json

```
{
  "pluginName": "wechat-format",
  "version": "1.5.9",
  "description": "微信公众号排版工具",
  "keywords": [
    "wechat-format"
  ],
  "entry": "index.html",
  "pluginType": "ui",
  "mode": "multi",
  "author": "",
  "homepage": "https://github.com/doocs/md"
}
```

核心字段说明：

| 字段         | 类型    | 详解                                                                                         | 案例                          |
| :----------- | :------ | :------------------------------------------------------------------------------------------- | :---------------------------- |
| pluginName   | string  | 插件名称                                                                                     | "wechat-format"               |
| version      | string  | 插件版本，推荐三位，太长会导致页面不美观                                                     | 1.5.9                         |
| keywords     | array   | 关键字                                                                                       | ['wechat-format']             |
| entry        | string  | 首页文件，地址                                                                               | 'index.html', '/', 'index.js' |
| mode         | string  | 是否打开多个窗口，值有： multi,single                                                        | "multi"                       |
| logo         | string  | 插件 logo                                                                                    | "./mstile-70x70.png"          |
| webContainer | boolean | 是否需要 web 容器加载插件，该模式为了解决部分前端项目编译路由问题，对于 web 插件，兼容性最高 | true                          |

更多信息详见已经开源的[插件地址](https://github.com/app-toolkit)
