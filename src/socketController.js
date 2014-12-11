var socket = function(io){

  // io.on('connection', function(socket){
  //   socket.emit('names', { name: "rich", age: '29' });
  //   socket.on('stuff', function(data) {
  //     console.log(data.climb)
  //   });
  // });

	io.on('connection', function(socket) {
	  socket.on('chat message', function(msg) {
	  	io.emit('chat message', msg)
	  });
	});
};

module.exports = socket;