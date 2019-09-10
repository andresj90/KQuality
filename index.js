var express = require('express');
var server = express();
server.use('/', express.static(__dirname + '/production'));
server.listen(process.env.PORT || 8000);
console.log('Lanzando servidor en: ' + process.env.PORT || 8000);