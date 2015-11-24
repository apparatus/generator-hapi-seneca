'use strict';

module.exports = function (server, options, next) {
  server.dependency('inert');

  server.route([{
    method: 'GET',
    path: '/public/css/{param}',
    handler: {
      directory: {
        path: __dirname + '/../public/css',
        listing: false
      }
    }
  },
  {
    method: 'GET',
    path: '/public/js/{param}',
    handler: {
      directory: {
        path: __dirname + '/../public/js',
        listing: false
      }
    }
  },
  {
    method: 'GET',
    path: '/public/bower_components/{param*}',
    handler: {
      directory: {
        path: __dirname + '/../public/bower_components',
        listing: false
      }
    }
  },
  {
    method: 'GET',
    path: '/public/img/{param}',
    handler: {
      directory: {
        path: __dirname + '/../public/img',
        listing: false
      }
    }
  }]);

  next();
};

module.exports.attributes = {
  name: 'static',
  version: '0.0.0'
};
