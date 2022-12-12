"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//const express = require('express')

var app = (0, _express["default"])();
var port = process.env.port || 3000;
app.get('/', function (req, res) {
  res.send('<h1> helo world!, Como estamos</h1>');
});
app.listen(port, function () {
  return console.log("Server is ready up on: https://localhost:".concat(port));
});