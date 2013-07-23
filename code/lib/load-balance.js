/*
 * distributed-node
 * https://github.com/behmann/code
 *
 * Copyright (c) 2013 Brian Ehmann
 * Licensed under the MIT license.
 */

'use strict';

var zmq = require('zmq')
  , worker = zmq.socket('req')
  , broker = zmq.socket('router')
  , address = "inproc://load_balance";

exports.worker = function() {
  worker.connect(address);
  console.log("worker sending init message");
  worker.send(""); //, zmq.ZMQ_IDENTITY);

  setTimeout(function() {
    console.log("Worker sending msg");
    worker.send("ready"); //, zmq.ZMQ_IDENTITY);
  }, 1000);

  worker.on('message', function(msg) {
    console.log("Received Job: " + msg);
    setTimeout(function() {
        console.log("Job processed, requesting more work");
        worker.send("ready");
    }, 500)
  });
};

exports.broker = function() {
  broker.bindSync(address);

  broker.on('message', function(msg){
    console.log("broker receive: " + msg.toString());
    broker.send(msg.toString() + " World!!", zmq.ZMQ_IDENTITY);
    console.log("broker sent job");
  });

};

//exports.client = function() {
//  client_socket.connect('inproc://req_rep');
//
//  setInterval(function() {
//    client_socket.send('Hello');
//  }, 500);
//
//  client_socket.on('message', function(msg) {
//    console.log('msg: %s', msg.toString());
//  });
//}
