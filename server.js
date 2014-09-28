
//basic web image/file server
var connect = require('connect');
var port = 1337;
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(port);

console.log('serving at ' + port);
