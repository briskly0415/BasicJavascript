var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var session     = require("express-session");
var redisStore  = require("connect-redis")(session);
var redisClient = require("./redis.js");
var passport    = require("./api/passport.js");

app.use(passport.initialize());

// 세션 레디스 연결
app.use(session({
    secret: 'ssshhhhh',
    // create new redis store.
    store: new redisStore({ host: 'localhost', port: 6379, client: redisClient}),
    saveUninitialized: false,
    resave: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var server     = require('http').createServer(app);
var io         = require('socket.io')(server);

app.use("/public", express.static("static"));

app.get('/', function(req, res) {

    if(!req.session.key) {
        res.redirect("/login");
    }
    else {
        res.sendfile(__dirname + '/static/index.html');
    }

});

app.get('/login', function(req, res) {
    res.sendfile(__dirname + '/static/member/login.html');
});

app.post("/login", passport.authenticate("local", {
    failureRedirect: "/login"
}), (req, res) => {
    res.redirect("/");
});

app.get('/logout',function(req, res) {
    req.session.destroy(function(err) {
        if(err){
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
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

server.listen(3000, function() {
    console.log('Socket IO Server listening on port 3000!!');
});