var trumpet = require('trumpet');
var through = require('through2');


function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

var tr = trumpet();
var loudStream = tr.select('.loud').createStream();
var throughStream = through(write, end);

loudStream.pipe(throughStream).pipe(loudStream);
process.stdin.pipe(tr).pipe(process.stdout);
