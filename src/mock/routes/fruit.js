const express = require("express")
const router = express.Router()
var fruit = require("../public/fruit.js")

router.get("/api/fruit", function (req, res) {
  res.send({
    code: 200,
    message: "成功获取水果",
    data: fruit,
  })
})

router.post("/api/fruit", function (req, res) {
  res.send({
    code: 200,
    message: "新增成功水果",
    data: {},
  })
})
router.put("/api/fruit", function (req, res) {
  res.send({
    code: 200,
    message: "修改成功水果",
    data: {},
  })
})
router.delete("/api/fruit", function (req, res) {
  res.send({
    code: 200,
    message: "删除成功水果",
    data: {},
  })
})

module.exports = router
