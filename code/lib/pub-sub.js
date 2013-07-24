/*
 * distributed-node
 * https://github.com/behmann/code
 *
 * Copyright (c) 2013 Brian Ehmann
 * Licensed under the MIT license.
 */

'use strict';

var zmq = require('zmq')
  , pub_socket = zmq.socket('pub')
  , sub_socket = zmq.socket('sub')
  , filter = 'pubsub';


exports.pub = function() {
  pub_socket.connect('tcp://127.0.0.1:3000');
  console.log('Producer bound to port 3000');

  setInterval(function() {
    console.log("sending work");
    pub_socket.send("pubsub work");
    pub_socket.send("bogus work");
  }, 500);
};

exports.sub = function() {
  sub_socket.subscribe(filter);
  sub_socket.bind('tcp://127.0.0.1:3000', function() {
    console.log('Worker connected to port 3000');

    sub_socket.on('message', function(msg) {
      console.log('work: %s', msg.toString());
    });
  });
}
