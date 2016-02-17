module.exports = function(server) {
  server.route({
    method: '*',
    path: '/api/{path*}',
    handler: {
      proxy: {
        host: process.env.PROXY_HOST,
        port: process.env.api_PORT,
        protocol: 'http',
        passThrough: true,
        redirects: 5
      }
    }
  });
}
