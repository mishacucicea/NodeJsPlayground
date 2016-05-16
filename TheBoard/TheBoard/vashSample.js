var http = require("http");
var express = require("express");
var app = new express();

// Setup the View Engine.
app.set("view engine", "vash"); // view engine

app.get("/", function (req, res) {
	res.render("vash/index", { title: "Express + Vash" });
});

var server = http.createServer(app);

server.listen(3000);