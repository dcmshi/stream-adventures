var concat = require('concat-stream');

var stream = concat(reverse);
function reverse(body) {
  console.log(body);
  return body.split("").reverse().join("");
}

process.stdin.pipe(concat(function (body) {
  process.stdout.write(body.toString().split("").reverse().join(""));
}));
