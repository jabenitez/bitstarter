var express = require('express');

var app = express.createServer(express.logger());
var fs = require("fs");
app.get('/', function(request, response) {
    try {
	var data = new Buffer(fs.readFileSync('index.html'));
    } catch (err) {
	if (err.code != 'ENOENT') throw err;
	console.log("File not found ");
    }
    response.send(data.toString("utf8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});