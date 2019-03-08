var split = require('split');
var through2 = require('through2');

var stream = through2(write, end);
var lineCount = 0;
function write(buffer, encoding, next) {
  if (lineCount % 2 === 1) {
    this.push(buffer.toString().toUpperCase() + '\n');
  } else{
    this.push(buffer.toString().toLowerCase() + '\n');
  }
  lineCount++;
  next();
}

function end(done) {
  done();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
