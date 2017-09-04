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
app.get("/upload", (req,res) => {
	res.sendFile(__dirname+'/views/upload.html');
});


// 上传
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' });
app.post('/upload',upload.single('file'), function(req,res){
	res.send('ok');
})

app.use('/api',usersRouter);

app.listen(8888);

