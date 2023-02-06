var http = require('http');
var dt = require('./data');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Data e hora: " + dt.myDateTime());
    res.end();
}).listen(8080);
