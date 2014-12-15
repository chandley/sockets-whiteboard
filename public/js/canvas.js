
$(document).ready(function() {
  var socket = io();
  var c = document.getElementById("whiteboard");
  var context = c.getContext("2d");
  var draw = false;
  context.moveTo(20, 20);
  context.lineTo(150, 50);
  context.stroke();
  var coOordinates;

$("#whiteboard").mousedown(function (e) {
  context.moveTo((e.clientX), (e.clientY));
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
    console.log('incoming line ' + xypair );
    context.lineTo(xypair[0], xypair[1]);
    context.stroke();

  });

});