var redis = require("redis");
var redisClient = redis.createClient();

var redisClient = redis.createClient(6379, "localhost");

redisClient.auth("", function (err) {
    if (err) throw err;
});
redisClient.on('error', function(err) {
    console.log('Redis error: ' + err);
});

module.exports = redisClient;
