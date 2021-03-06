﻿var http = require("http");
var express = require("express");
var app = new express();
var controllers = require("./controllers");

// Setup the View Engine.
app.set("view engine", "vash");

// Set the public static resource folder.
app.use(express.static(__dirname + "/public"));

// Map the routes.
controllers.init(app);

var server = http.createServer(app);

server.listen(3000);