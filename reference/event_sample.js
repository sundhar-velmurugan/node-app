const EventEmitter = require('events');

// Create Class
class MyEmitter extends EventEmitter {}

// Init Object
const myEmitter = new MyEmitter();

// Create event listener
myEmitter.on('event', () => {
  console.log('Event Fired!');
});

// Init event
myEmitter.emit('event');
