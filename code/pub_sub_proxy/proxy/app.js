var zmq = require('zmq')
  , frontend = zmq.socket('xsub')
  , frontend_address = 'tcp://*:5559' 
  , backend = zmq.socket('xpub')
  , backend_address = 'tcp://*:5560';

frontend.bindSync(frontend_address);
console.log("frontend connected to:", frontend_address);
backend.bindSync(backend_address);
console.log("backend bound to: ", backend_address);

frontend.on('message', function(data) {
  console.log("Proxy received: ", data);
  backend.send(data);
});

backend.on('message', function(data) {
  console.log("Proxy received: ", data);
  frontend.send(data);
});



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
