var zmq = require('zmq')
  , socket = zmq.socket('sub')
  , address = 'tcp://localhost:5560';

socket.identity = 'worker.' + process.pid;
socket.subscribe('');
socket.on('message', function(request) {
    console.log("Worker Received Request: ", request.toString());
});

socket.connect(address);
console.log("Worker connected to: ", address);

process.on('SIGINT', function() {
    socket.close();
})

