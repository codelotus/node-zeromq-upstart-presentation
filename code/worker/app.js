var zmq = require('zmq')
  , socket = zmq.socket('sub')
  , address = 'tcp://*:5555';

socket.on('message', function(request) {
    console.log("received request: ", request);
});

socket.bind(address, function(err) {
    if(err) {
        console.log(err);
    }
    else {
        console.log('Response Socket bound to ' + address);
    }
});

process.on('SIGINT', function() {
    socket.close();
})

