var express = require('express');
var app = express();

//Express 템플릿 엔진 설정
app.set('view engine', 'jade');
app.set('views', './view');

var requestTime = function (req, res, next) {
	req.requestTime = Date.now();
	next();
};

app.use(requestTime);

app.get('/', function(req, res) {
	res.render('index', {title:'HELLO NODE WORLD', message : 'HELLO THERE'});
});

app.listen(80);
