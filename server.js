var express = require('express');
var app = express();
var port = 5150;

app.configure(function() {
	app.use("/", express.static(__dirname));
});
app.listen(port);
console.log("Express server running at http://localhost:" + port);
