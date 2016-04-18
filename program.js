var split = require("split");
var through2 = require("through2");
var even = false;

process.stdin.pipe(split()).pipe(through2(function (buffer, _, next) {
  if( even )
    this.push(buffer.toString().toUpperCase() + "\n");
  else
    this.push(buffer.toString().toLowerCase() + "\n");
  even = !even;
  next();
})).pipe(process.stdout);