//事件驱动编程
var events = require('events');

var eventEmitter = new events.EventEmitter();
var connected = function connected(){
	console.log('connection successful.');
	eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connected);
eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
});

eventEmitter.emit('connection');

console.log("Program Ended.");
