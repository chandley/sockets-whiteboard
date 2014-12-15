
$(document).ready(function() {
        var c = document.getElementById("whiteboard");
        var context = c.getContext("2d");
        context.moveTo(20, 20);
        context.lineTo(150, 50);
        context.stroke();



$("#whiteboard").mousedown(function () {
  console.log('mousedown');
    draw = true;
    context.beginPath();
});

$("#whiteboard").mousemove(function (e) {
  console.log('move');
    context.lineTo((e.clientX), (e.clientY));
    if(draw) { context.stroke() };                 
});  

$("#whiteboard").mouseup(function () {
  console.log('mouseup');
  draw = false;
    // startDraw = false;
});

  // $("#whiteboard").drawMouse = function() {

  //     var clicked = 0;
  //     var start = function(e) {
  //       console.log('mousedown');
  //         clicked = 1;
  //         ctx.beginPath();
  //         ctx.moveTo(e.pageX, e.pageY);
  //     };
  //     var move = function(e) {
  //       console.log('move');
  //         if(clicked){
  //             ctx.lineTo(e.pageX, e.pageY);
  //             ctx.stroke();
  //         }
  //     };
  //     var stop = function(e) {
  //       console.log('mouseup');
  //         clicked = 0;
  //     };
  //     $(this).mousedown(start);
  //     $(this).mousemove(move);
  //     $(this).mouseup(stop);
  // };

});