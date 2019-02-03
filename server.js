var express = require("express");
var app = express();
var port = 80;
var path = require("path");
app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "index.html"))
)}


app.listen(port, function(){
	console.log("listening on port" + port);
});

