var socket = function(io){

  io.on('connection', function(socket){
    socket.emit('names', { name: "rich", age: '29' });
    socket.on('stuff', function(data) {
      console.log(data.climb)
    });
  });

};

module.exports = socket;