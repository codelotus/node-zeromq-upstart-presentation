
var express = require('express')
  , zmq = require('zmq')
  , publish_socket = zmq.socket('pub')
  , address = 'tcp://localhost:5555';

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
});

app.listen(3000);
console.log('Listening on port 3000');
timesSocket.connect(address);
console.log("Req timesSocket connected to: ", address);

process.on('SIGINT', function() {
  publish_socket.close();
});
