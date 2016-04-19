var http = require("http");
var through = require("through2");

var tr = through(function (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
});

http.createServer(function (req, res) {
  if (req.method === "POST") {
    req.pipe(tr).pipe(res);
  } else {
    res.end();
  }
}).listen(Number(process.argv[2]));