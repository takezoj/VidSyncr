var express = require('express'); 
var socket = require('socket.io')

//app setup
var app = express();
var server = app.listen(5000,function(){
    console.log('listening');
});

//static files
app.use(express.static(__dirname + '/public'));

//socket stuff
var io = socket(server);
io.on('connection', function(socket){
    console.log('user connected');
});