/*
 * distributed-node
 * https://github.com/behmann/code
 *
 * Copyright (c) 2013 Brian Ehmann
 * Licensed under the MIT license.
 */

'use strict';

var zmq = require('zmq')
  , server_socket = zmq.socket('rep')
  , client_socket = zmq.socket('req');


exports.server = function() {
  server_socket.bindSync('inproc://req_rep');

  server_socket.on('message', function(msg){
    server_socket.send(msg.toString() + " World!!");
  });

};

exports.client = function() {
  client_socket.connect('inproc://req_rep');

  setInterval(function() {
    client_socket.send('Hello');
  }, 500);

  client_socket.on('message', function(msg) {
    console.log('msg: %s', msg.toString());
  });
}
