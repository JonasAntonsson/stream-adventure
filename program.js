var through = require("through2");
var trumpet = require("trumpet")();

var toUpper = through(function (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
});


var selectedStream = process.stdin.pipe(trumpet).select(".loud").createStream();

selectedStream.pipe(toUpper).pipe(selectedStream);

trumpet.pipe(process.stdout);
