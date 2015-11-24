'use strict';

const Handlebars = require('handlebars');


module.exports = function (server, options, next) {
  server.dependency('vision');

  server.views({
    engines: {
      html: Handlebars
    },
    relativeTo: __dirname + '/../public/views',
    path: '.',
    helpersPath: 'helpers'
  });

  server.route({
    method: 'GET',
    path: '/public/basic.html',
    handler: (request, reply) => {
      reply.view('basic');
    }
  });

  next();
};

module.exports.attributes = {
  name: 'templates',
  version: '0.0.0'
};
