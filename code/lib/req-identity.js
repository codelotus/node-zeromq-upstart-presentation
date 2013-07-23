/*
 * distributed-node
 * https://github.com/behmann/code
 *
 * Copyright (c) 2013 Brian Ehmann
 * Licensed under the MIT license.
 */

'use strict';

var zmq        = require('zmq')
  , sink       = zmq.socket('router')
  , anonymous  = zmq.socket('req'),
  , identified = zmq.socket('req'),
  , address    = "inproc://identity-check";


exports.sink = function() {
  sink.bindSync(address);

  server_socket.on('message', function(msg){
      console.log("received: " + msg.toString());
  });

};

exports.anonymous = function() {
  anonymouse.connect(address);
  anonymouse.send("anonymous UUID");
};

exports.identified = function() {
  identified.setsockopt(zmq.ZMQ_IDENTITY, "PEER1");
  identified.connect(address);
  identified.send("Identified Socket...");
};
