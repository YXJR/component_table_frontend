const express = require("express")
const router = express.Router()
var table = require("../public/table.js")
router.get("/api/tableData", function (req, res) {
  res.send({
    code: 200,
    message: "成功获取表格数据",
    data: table,
  })
})

router.post("/api/tableData", function (req, res) {
  res.send({
    code: 200,
    message: "新增成功表格数据",
    data: {},
  })
})
router.put("/api/tableData", function (req, res) {
  res.send({
    code: 200,
    message: "修改成功表格数据",
    data: {},
  })
})
router.delete("/api/tableData", function (req, res) {
  res.send({
    code: 200,
    message: "删除成功表格数据",
    data: {},
  })
})

module.exports = router
