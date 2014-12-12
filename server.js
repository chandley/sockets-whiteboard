var express = require ('express');
var app     = express(); 
var server  = require('http').createServer(app);
var io      = require('socket.io')(server);
var socket  = require('./src/socketController')(io);

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('sockets');
});

var port = process.env.PORT || 3000;

server.listen(port, function() {
  console.log("Server listening on port 3000");
});

module.exports = server;