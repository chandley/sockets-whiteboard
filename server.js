var express = require ('express');
var app     = express(); 
var server  = require('http').createServer(app);
var io      = require('socket.io')(server);
var socket  = require('./src/socketController')(io);

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/sockets', function(request, response) {
  response.render('sockets');
});

server.listen(3000, function() {
  console.log("Server listening on port 3000");
});

module.exports = server;