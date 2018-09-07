var path = require("path");
var express = require("express");
var parser = require("body-parser");

var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/survey', function (req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
})

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, "home.html"));
  })