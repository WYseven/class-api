const express = require('express');
const router = express.Router();
const {usersObj,userModel} = require('../model/userModel')

// 存用户信息
router.post("/saveUsers", (req,res) => {
  let {userName,age,sex} = req.body;
  if(userName === '' || age === '' || sex === ''){
    res.send({
      code: 1,
      message: '不能为空'
    });
    return;
  }
  userModel.create(req.body)
  .then((data) => {
    res.send({
      code: 0,
      user:data,
      message: 'ok'
    });
  })
});

// 删除用户信息
router.get("/delectUser", (req,res) => {
  let {id} = req.query;
  if(id.trim() === ''){
    res.send({
      code: 1,
      message: '请输入要删除的数据的id'
    })
    return;
  }
  userModel.findById(id)
  .then((data) => {
    if(data){
      userModel.findByIdAndRemove(id)
      .then(() => {
        res.send({
          code: 0,
          message: '删除成功'
        })
      })
    }else{
      res.send({
        code: 1,
        message: '请输入正确的id'
      })
    }
    
  })
  
});

// 获取所有用户信息
router.get("/getAllUsers", (req,res) => {
  userModel.find()
  .then((data) => {
    res.send({
      code:1,
      users:data
    })
  })
});

module.exports = router;

