
$(document).ready(function() {
  var socket = io();
  var c = document.getElementById("whiteboard");
  var context = c.getContext("2d");
  var draw = false;
  var coOordinates;

  $("#whiteboard").mousedown(function (e) {
    context.moveTo((e.clientX), (e.clientY));
    socket.emit('sendMove', [e.clientX, e.clientY]) 
    draw = true;
  });

  $("#whiteboard").mousemove(function (e) {
      
      if(draw) {      
        socket.emit('sendLine', [e.clientX, e.clientY]) 
        context.lineTo((e.clientX), (e.clientY));
        context.stroke();
      }; 
                       
  });  

  $("#whiteboard").mouseup(function () {
    draw = false;
  });

  socket.on('shareLine', function(xypair){
    context.lineTo(xypair[0], xypair[1]);
    context.stroke();
  });

  socket.on('shareMove', function(xypair){
    context.moveTo(xypair[0], xypair[1]);
  });

});