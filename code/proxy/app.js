var zmq = require('zmq')
  , frontend = zmq.socket('sub')
  , frontend_address = 'tcp://localhost:5559' 
  , backend = zmq.socket('pub')
  , backend_address = 'tcp://*:5560';

frontend.subscribe('');
frontend.connect(frontend_address);
console.log("frontend connected to:", frontend_address);
backend.bindSync(backend_address);
console.log("backend bound to: ", backend_address);

frontend.on('message', function(data) {
  console.log("Proxy received: ", data);
  backend.send(data);
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
