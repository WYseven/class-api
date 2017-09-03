const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 引入接口文件
const usersRouter = require('./api/userApi.js');

// 连接数据库
require('./mongodb/connet.js');

require('./model/userModel.js')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req,res) => {
	res.sendFile(__dirname+'/views/index.html');
});

app.use('/api',usersRouter);

app.listen(8888);

