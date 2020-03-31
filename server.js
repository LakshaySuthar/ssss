const express = require("express");
const app = express();
const axios = require("axios");
const stringify = require("json-stringify-safe");
var port = 1439;
var server = app.listen(port, function(req, res) {
  log.info("Listening ", port);
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.post("/search-city", function(req, res) {});
module.exports = server;
