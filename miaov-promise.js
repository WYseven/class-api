const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const promiseRouter = require('./api/promiseApi.js');


app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())  // 解析json的格式

app.get("/", (req,res) => {
	res.sendFile(__dirname+'/views/promise-test.html');
});


app.use('/promise',promiseRouter);

app.listen(8888, () => {
	console.log('8888')
});

