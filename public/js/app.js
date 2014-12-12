$(document).ready(function() {
	var socket = io();

	$('#username').submit(function(){
		socket.emit('username', $('#user').val());
		$('#message').val('');
		return false;
	});
	
	socket.on('username', function(name){
		$('#messages').append($('<li>').text(name + ' has entered the room'));
	});

	$('#messagesend').submit(function(){
		socket.emit('chat message', $('#message').val());
		$('#message').val('');
		return false;
	});

	socket.on('chat message', function(msg){
		$('#messages').append($('<li>').text(msg));
	});

});