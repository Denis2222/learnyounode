const BufferList = require('bl');
var bl = new BufferList();
var http = require('http');
var url = process.argv[2];

http.get(url, function (response) {
	response.setEncoding("utf8");
	response.on("data", function (data) {
		bl.append(data);
	});
	response.on("error", function (data) {
	});
	response.on("end", function (data) {
		console.log(bl.length);
		console.log(bl.toString());
	});
});

