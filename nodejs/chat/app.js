var express = require('express');
var app     = express();
var server  = require('http').createServer(app);
var io      = require('socket.io')(server);


app.use('/public', express.static('static'));

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});


var chat = io.of('/chat').on('connection', function(socket) {
    socket.on('chat message', function(data){
        
        console.log('message from client: ', data);

        var name = socket.name = data.name;
        var room = socket.room = data.room;
  
        // room에 join한다
        socket.join(room);
        // room에 join되어 있는 클라이언트에게 메시지를 전송한다
        chat.to(room).emit('chat message', data.msg);
    });
});

// io.on('connection', function(socket) {

// });

server.listen(3000, function() {
    console.log('Socket IO Server listening on port 3000!!');
});