var fs = require('fs');
var Buffer = fs.readFileSync(process.argv[2]).toString();
console.log(Buffer.split('\n').length - 1);
