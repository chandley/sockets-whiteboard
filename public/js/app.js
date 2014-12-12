$(document).ready(function() {
	var socket = io();
	var chatname = null;

	$('#username').submit(function(){
		event.preventDefault();
		chatname = $('#user').val();
		socket.emit('username', chatname);
		$('#user').val('');
		$(this).fadeOut(500, function() {
			$('#messagesend').fadeIn(500);	
		});
	});

	socket.on('username', function(name){
		$('#messages').append($('<li>').text(name + ' has entered the room'));
	});

	$('#messagesend').submit(function(){
		event.preventDefault();
		var message = $('#message').val();
		socket.emit('chat message', { username: chatname, message: message });
		$('#message').val('');
	});

	socket.on('chat message', function(msg){
		$('#messages').append($('<li>').text(msg));
	});

});

