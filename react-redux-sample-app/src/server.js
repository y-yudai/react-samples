var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
  setTimeout(() => res.end('[{"id": 0, "text": "Hello, World!"}, {"id": 1, "text": "Good"}]'), 1000);
}).listen(8080);
