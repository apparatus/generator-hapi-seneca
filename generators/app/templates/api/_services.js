'use strict';

var seneca = require('seneca')();

seneca.client({host: process.env.PROXY_HOST, port: process.env.service1_PORT, pin: {role: 'service1'}});
seneca.client({host: process.env.PROXY_HOST, port: process.env.service2_PORT, pin: {role: 'service2'}});

module.exports = function(server) {
  server.route({
    method: 'GET',
    path: '/route1',
    handler: function(request, reply) {
      seneca.act({role: 'service1', cmd: 'action1'}, function(err) {
        reply({result: err ? 'error' : 'ok', err: err});
      });
    }
  });
  server.route({
    method: 'GET',
    path: '/route2',
    handler: function(request, reply) {
      seneca.act({role: 'service1', cmd: 'action1'}, function(err) {
        reply({result: err ? 'error' : 'ok', err: err});
      });
    }
  });
};

