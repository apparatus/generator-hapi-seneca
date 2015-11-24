'use strict';


module.exports = function (server, options, next) {
  server.dependency('chairo');

  server.seneca.client({
    host: options.host,
    port: options.port1,
    pin: { role: 'service1' }
  });

  server.seneca.client({
    host: options.host,
    port: options.port2,
    pin: { role: 'service2' }
  });

  server.route([{
    method: 'GET',
    path: '/route1',
    handler: (request, reply) => {
      request.seneca.act({ role: 'service1', cmd: 'action1' }, (err) => {
        reply({
          result: err ? 'error' : 'ok',
          err: err
        });
      });
    }
  },
  {
    method: 'GET',
    path: '/route2',
    handler: (request, reply) => {
      request.seneca.act({ role: 'service1', cmd: 'action1' }, (err) => {
        reply({
          result: err ? 'error' : 'ok',
          err: err
        });
      });
    }
  }]);

  next();
};


module.exports.attributes = {
  name: 'services',
  version: '0.0.0'
};
