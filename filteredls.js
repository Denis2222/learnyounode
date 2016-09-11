var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var filter = process.argv[3];

function readcallback (err, list)
{
	if (err)
	{
		console.log('error');
	}
	else
	{
		for (var i = 0; i < list.length; i ++)
		{
			if (path.extname(list[i]) === ('.' + filter))
			{
				console.log(list[i]);
			}
		}
	}
}

if (dir)
	fs.readdir(dir, readcallback);
