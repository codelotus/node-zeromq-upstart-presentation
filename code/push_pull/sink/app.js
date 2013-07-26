var zmq = require('zmq')
  , pull_socket = zmq.socket('pull')
  , address = 'tcp://*:5560';

pull_socket.on('message', function(buf) {
    console.log("Sink received processed result:", buf.toString());
});

pull_socket.bindSync(address);
console.log("Worker bound to: ", address);

process.on('SIGINT', function() {
    pull_socket.close();
})

