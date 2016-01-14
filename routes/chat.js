var express = require('express');
var router = express.Router();
var chat = require("../models/chatroom");
var resHelper = require("../util/res-helper");
var HttpStatus = require("http-status");

router.get('/', function(req, res, next) {
  res.success("chat messages", chat());
});

router.post('/', function(req, res, next) {
  var message = req.body.message;
  if (message) {
    chat(message);
    res.success("added message");
  } else {
    res.fail(HttpStatus.BAD_REQUEST);
  }
});

module.exports = router;
