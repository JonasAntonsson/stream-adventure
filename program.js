var transform = require('through2')(function (buffer, _, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}, function (done) {
  done();
});

process.stdin.pipe(transform).pipe(process.stdout);