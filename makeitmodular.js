var mymodule = require('./makeitmodular.module.js');

function callback(err, data)
{
	if (err)
	{
		console.log('error');
		return (0);
	}
	data.forEach(function (file){
		console.log(file);
	});
}

mymodule(process.argv[2],process.argv[3],callback);
