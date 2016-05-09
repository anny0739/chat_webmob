
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//app.set('view engine', 'jade');
//app.set('views', './view');

app.get('/', function(req, res) {
console.log(__dirname);
	res.sendFile(__dirname +'/view/index.html');
});

io.on('connection', function(socket) {
	socket.broadcast.emit('toclient', {msg:'Welcome !'});
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
});


http.listen(80, function() {
	console.log('listening on <F3>:3000');
});
