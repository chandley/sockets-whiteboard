$(document).ready(function() {
	var socket = io();
	var chatname = null;

	$('#username').submit(function(){
		chatname = $('#user').val();
		socket.emit('username', chatname);
		$('#user').val('');
		return false;
	});
	
	socket.on('username', function(name){
		$('#messages').append($('<li>').text(name + ' has entered the room'));
	});

	$('#messagesend').submit(function(){
		var message = $('#message').val();
		socket.emit('chat message', { username: chatname, message: message });
		$('#message').val('');
		return false;
	});

	socket.on('chat message', function(msg){
		$('#messages').append($('<li>').text(msg));
	});

});

