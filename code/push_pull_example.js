var zmq = require('zmq'),
    push_socket = zmq.socket('push')
  , pull_socket1 = zmq.socket('pull')
  , pull_socket2 = zmq.socket('pull')
  , pull_socket3 = zmq.socket('pull')
  , pull_socket4 = zmq.socket('pull')
  , address = "tcp://127.0.0.1:3045";
  //, address = "ipc://somework";

pull_socket1.connect(address);
console.log("Pull Socket 1 connected...");
pull_socket1.on('message', function(msg) { console.log("pull on socket 1: ", msg); });

pull_socket2.connect(address);
console.log("Pull Socket 2 connected...");
pull_socket2.on('message', function(msg) { console.log("pull on socket 2: ", msg); });

pull_socket3.connect(address);
console.log("Pull Socket 3 connected...");
pull_socket3.on('message', function(msg) { console.log("pull on socket 3: ", msg); });

pull_socket4.connect(address);
console.log("Pull Socket 4 connected...");
pull_socket4.on('message', function(msg) { console.log("pull on socket 4: ", msg); });

push_socket.bindSync(address);
console.log("Push socket bound...");
setInterval(function() {
  push_socket.send("some work");
}, 1000);


