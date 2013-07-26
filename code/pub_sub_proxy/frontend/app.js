
var express = require('express')
  , zmq = require('zmq')
  , publish_socket = zmq.socket('pub')
  , address = 'tcp://*:5559';

var app = express();
app.use(express.bodyParser());
app.use(express.methodOverride());

app.get('/message', function(req, res){
  res.send('Hello World');
});

app.post('/process', function(req, res) {
    var value = req.body.value
    console.log("Sending: ", value);
    publish_socket.send(value);
    res.send('processed');
});

app.listen(3000);
console.log('Listening on port 3000');
publish_socket.bindSync(address);
console.log("publish_socket bound to: ", address);

publish_socket.on('error', function(err) {
    console.error("Publish Socket Err: ", err);
});

process.on('SIGINT', function() {
  publish_socket.close();
});
