
//basic web image/file server
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(1337);

console.log('serving at l33t');
