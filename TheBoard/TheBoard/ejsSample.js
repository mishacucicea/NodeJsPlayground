var http = require("http");
var express = require("express");
var app = new express();
var ejsEngine = require("ejs-locals");

// Setup the View Engine.
app.engine("ejs", ejsEngine); // support the master pages
app.set("view engine", "ejs"); // ejs view engine

app.get("/", function (req, res) {
	res.render("ejs/index", { title: "Express + EJS" });
});

var server = http.createServer(app);

server.listen(3000);