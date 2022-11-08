## 项目运行
```
git clone git@github.com:YXJR/component_table_frontend.git 

npm install (安装依赖包)

npm start (启动服务)

```

## 功能：
- 围绕表格的增删改查进行的封装

## 技术栈：
- vue.js(2) + elementUI + axios + sass + express

## 说明
- 将表格的数据，表格的操作，及字段的配置封装在了 table 类下；
- 将分页的配置和操作放在了 pagination 的类下
- 通过 tableMixin 将页面级的重复代码封装

## 说明
- 现只是实现简单的表格，表格的拓展如样式的拓展，初步设想可以通过配置 mapList


