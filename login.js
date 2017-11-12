const path = require('path')
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')
const config = require('config-lite')(__dirname)

// 加密函数

const sha1 = require('sha1');



const app = express()

app.use(session({
  name: config.session.key, // 设置 cookie 中保存 session id 的字段名称
  secret: config.session.secret, // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
  resave: true, // 强制更新 session
  saveUninitialized: false, // 设置为 false，强制创建一个 session，即使用户未登录
  cookie: {
    maxAge: config.session.maxAge// 过期时间，过期后 cookie 中的 session id 自动删除
  },
  store: new MongoStore({// 将 session 存储到 mongodb
    url: config.mongodb// mongodb 地址
  })
}))

// flash 中间件，用来显示通知
app.use(flash())

app.use((req,res,next) => {
  res.locals.success = req.flash('success').toString()
  res.locals.error = req.flash('error').toString()
  next();
})

app.use((req,res,next) => {
  try{
    console.log(abc)
  }catch(e){
    next()
  }
})


app.get('/login', (req, res, next) => {
  console.log(req.session.user)
  //res.send('ok1');
  next();
},(req, res) => {
  res.send('ok2');
})

app.post('/reg', (req, res, next) => {
  req.session.user = {
    name:'wang'
  }
  req.flash('success', '注册成功')
  res.redirect('/login')
})

// 错误处理机制

app.use((err) => {
  console.log
})


app.listen(config.port, function () {
  console.log(`my listening on port ${config.port}`)
})