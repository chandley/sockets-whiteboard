var socket = function(io){

	io.on('connection', function(socket) {
    socket.on('username', function(name) {
      io.emit('username', name);
    });
	  socket.on('chat message', function(msg) {
	  	io.emit('chat message', msg.username + ' says... ' + msg.message);
	  });
    socket.on('sendDrawing', function(coOrdinates) {
      io.emit('shareDrawing', coOrdinates);
      console.log('coordinates shared')
    });
    socket.on('sendLine', function(x, y) {
      io.emit('shareLine', x, y);
    });
    socket.on('sendMove', function(x, y) {
      io.emit('shareMove', x, y);     
    });
	});
};

module.exports = socket;

