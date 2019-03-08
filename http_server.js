var http = require('http');
var through = require('through2');

var stream = through(write, end);

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}


var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
     req.pipe(stream).pipe(res);
  }
});
server.listen(process.argv[2]);
