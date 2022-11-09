var express = require("express")
var app = express()
var table = require("./routes/table.js")
var fruit = require("./routes/fruit.js")

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

app.use(table)
app.use(fruit)

app.listen(7001, function () {
  console.log(`poot: 7001 start`)
})
