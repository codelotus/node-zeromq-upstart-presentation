
var express = require('express')
  , zmq = require('zmq')
  , timesSocket = zmq.socket('req')
  , divideSocket = zmq.socket('req')
  , address = 'tcp://localhost:5555';

var app = express();
app.use(express.bodyParser());
app.use(express.methodOverride());

app.get('/message', function(req, res){
  res.send('Hello World');
});

app.post('/timesTwo', function(req, res) {
    var value = req.body.value
    console.log("Sending: ", value);
    timesSocket.on('message', function(msg) {
        console.log("received: ", msg.toString());
        res.send(msg);
    });
    timesSocket.send(value);
});

app.post('/divideTwo', function(req, res) {
});

app.listen(3000);
console.log('Listening on port 3000');
timesSocket.connect(address);
console.log("Req timesSocket connected to: ", address);

process.on('SIGINT', function() {
  timesSocket.close();
  divideSocket.close();
});
