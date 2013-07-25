var zmq = require('zmq')
  , socket = zmq.socket('rep')
  , address = 'tcp://*:5555';

socket.on('message', function(request) {
    console.log("received request: ", request);
    setTimeout(function() {
        socket.send(request * 2);
    }, 1000);
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

