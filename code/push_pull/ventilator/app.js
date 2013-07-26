
var express = require('express')
  , zmq = require('zmq')
  , push_socket = zmq.socket('push')
  , address = 'tcp://*:5559';

var app = express();
app.use(express.bodyParser());
app.use(express.methodOverride());

app.get('/message', function(req, res){
  res.send('Hello World');
});

app.post('/process', function(req, res) {
    var batchSize = req.body.value
    console.log("Batch Size: ", batchSize);
    push_socket.send(0); // signal start of batch
    var i = 0;
    while(i < batchSize) {
        var workload = batchSize * 1000;
        console.log("Sending workload: ", workload);
        push_socket.send( workload );
        i++;
    }

    res.send('processed');
});

app.listen(3000);
console.log('Listening on port 3000');
push_socket.bindSync(address);
console.log("push_socket bound to: ", address);

push_socket.on('error', function(err) {
    console.error("Publish Socket Err: ", err);
});

process.on('SIGINT', function() {
  push_socket.close();
});
