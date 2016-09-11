var fs = require('fs');
function readcallback (err, data)
{
	console.log(data.split('\n').length - 1);
}
var Buffer = fs.readFile(process.argv[2], 'utf8', readcallback);
