var express = require("express")
var table = require("./public/table.js")
var fruit = require("./public/fruit.js")
var app = express()

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "content-type")
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS")
  if (req.method.toLowerCase() == "options") {
    res.send(200)
  } else {
    next()
  }
})

app.get("/api/tableData", function (req, res) {
  res.send({
    code: 200,
    message: "成功获取表格数据",
    data: table,
  })
})

app.post("/api/tableData", function (req, res) {
  res.send({
    code: 200,
    message: "新增成功表格数据",
    data: {},
  })
})
app.put("/api/tableData", function (req, res) {
  res.send({
    code: 200,
    message: "修改成功表格数据",
    data: {},
  })
})
app.delete("/api/tableData", function (req, res) {
  res.send({
    code: 200,
    message: "删除成功表格数据",
    data: {},
  })
})

app.get("/api/fruit", function (req, res) {
  res.send({
    code: 200,
    message: "成功获取水果",
    data: fruit,
  })
})

app.post("/api/fruit", function (req, res) {
  res.send({
    code: 200,
    message: "新增成功水果",
    data: {},
  })
})
app.put("/api/fruit", function (req, res) {
  res.send({
    code: 200,
    message: "修改成功水果",
    data: {},
  })
})
app.delete("/api/fruit", function (req, res) {
  res.send({
    code: 200,
    message: "删除成功水果",
    data: {},
  })
})

app.listen(7001, function () {
  console.log(`poot: 7001 start`)
})
