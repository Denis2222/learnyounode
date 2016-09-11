var fs = require('fs');
var path = require('path');
module.exports = function (dir, ext, callback)
{
	function readcallback (err, list)
	{
		if (err)
		{
			callback(err);
		}
		else
		{
			list = list.filter(function (file) {
				return (path.extname(file) === '.' + ext);
			})
			callback(null, list);
		}
	}

	if (dir)
		fs.readdir(dir, readcallback);
	else
		callback('no dir');

}
