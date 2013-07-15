/*
 * distributed-node
 * https://github.com/behmann/code
 *
 * Copyright (c) 2013 Brian Ehmann
 * Licensed under the MIT license.
 */

'use strict';

var zmq = require('zmq')
  , server_socket = zmq.socket('pub')
  , client_socket = zmq.socket('sub')
  , filter = 'pubsub';


exports.server = function() {
  server_socket.connect('tcp://127.0.0.1:3000');
  console.log('Producer bound to port 3000');

  setInterval(function() {
    console.log("sending work");
    server_socket.send("pubsub work");
    server_socket.send("bogus work");
  }, 500);
};

exports.client = function() {
  client_socket.subscribe(filter);
  client_socket.bind('tcp://127.0.0.1:3000', function() {
    console.log('Worker connected to port 3000');

    client_socket.on('message', function(msg) {
      console.log('work: %s', msg.toString());
    });
  });
}