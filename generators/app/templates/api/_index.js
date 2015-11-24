'use strict';

const Chairo = require('chairo');
const Good = require('good');
const GoodConsole = require('good-console');
const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Static = require('./static');
const Templates = require('./templates');
const Services = require('./services');

const server = new Hapi.Server();
const port = Number(process.env.SERVICE_PORT) || 3000;
const host = process.env.SERVICE_HOST || '0.0.0.0'

server.connection({
  port: port,
  host: host
});

const goodOptions = {
  register: Good,
  options: {
    opsInterval: 1000,
    reporters: [{reporter: GoodConsole, events: { log: '*', response: '*' }}]
  }
};

const serviceOptions = {
  register: Services,
  options: {
    host: process.env.PROXY_HOST,
    port1: process.env.service1_PORT,
    port2: process.env.service2_PORT
  }
};

server.register([goodOptions, serviceOptions, Chairo, Inert, Templates, Static, Vision],
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    server.start(() => {
      console.log('listening on port: ' + port);
    });
  }
);
