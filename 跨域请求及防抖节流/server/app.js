var express = require("express");
// var cors = require("cors");

var app = express();
// app.use(cors());

app.get("/login", (req, res) => {
  console.log("有一个用户对我发起了请求，进来了");
  res.send({
    token: "fasdfsd.sdfewfe.sfefe",
    code: 10000,
    msg: "登录成功"
  });
});

app.listen(9001);
