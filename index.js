var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./frontend/dist/frontend/");

var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});


console.log('Lanzando servidor en: ' + process.env.PORT || 8000);
server.listen(process.env.PORT || 8000);