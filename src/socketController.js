var socket = function(io){
var chatname = null;

	io.on('connection', function(socket) {
    socket.on('username', function(name) {
      chatname = name;
      io.emit('username', name);
    });
	  socket.on('chat message', function(msg) {
	  	io.emit('chat message', chatname + ' says... ' + msg);
	  });
	});
};

module.exports = socket;