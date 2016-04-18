var fs = require('fs');

function run(filepath) {
  fs.createReadStream(filepath).pipe(process.stdout);
}

if( process.argv.length > 2 ) {
  run(process.argv[2]);
} else {
  console.log("Usage: node program.js <filepath>");
}

