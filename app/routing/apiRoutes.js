var path = require("path");
var express = require("express");
var parser = require("body-parser");

var app = express();

app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

app.post('/api/friends', function (req, res) {
    res.sendFile(path.join(__dirname, "/api/friends"));
})