const express = require('express');
const router = express.Router();

express().use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

// 获取所有用户信息
router.get("/userName", (req, res) => {
  res.send({
    id: 123456,
    userName: 'leo',
    age: 30,
    sex: '男'
  })
});

// 根据用户的id获取用户的购物商品
router.post("/shopListById", (req, res) => {
  let {
    userId
  } = req.body;

  res.send([{
    id: 12044885857888,
    name: '笔记本'
  }, {
    id: 1204488585,
    name: '鼠标'
  }, ])
});

// 获取商品之后，获取送货地址
router.get("/dress", (req, res) => {
  res.send({
    dress: '北京西二旗辉煌国际'
  })
});

module.exports = router;