var zmq = require('zmq')
  , frontend = zmq.socket('pull')
  , frontend_address = 'tcp://localhost:5559' 
  , backend = zmq.socket('push')
  , backend_address = 'tcp://localhost:5560';

frontend.on('message', function(buf) {
  var msec = parseInt(buf.toString(), 10);
  console.log("Worker received: " + buf.toString() + ".");
  setTimeout(function() {
      var value = parseInt(buf.toString(), 10);
      backend.send( value * 2 );
  }, msec);
});

frontend.connect(frontend_address);
console.log("frontend connected to:", frontend_address);
backend.connect(backend_address);
console.log("backend connected to: ", backend_address);

frontend.on('error', function(err) {
  console.log("Frontend Proxy Error: ", err);
});

backend.on('error', function(err) {
  console.log("Backend Proxy Error: ", err);
});

process.on('SIGINT', function() {
  frontend.close();
});
process.on('SIGINT', function() {
  backend.close();
});
