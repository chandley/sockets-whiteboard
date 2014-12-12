var socket = function(io){

	io.on('connection', function(socket) {
    socket.on('username', function(name) {
      io.emit('username', name);
    });
	  socket.on('chat message', function(msg) {
	  	io.emit('chat message', msg.username + ' says... ' + msg.message);
	  });
	});
};

module.exports = socket;