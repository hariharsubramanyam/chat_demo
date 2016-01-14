var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var chat = require("./routes/chat");
var resHelper = require("./util/res-helper");

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(resHelper);

app.use("/chat", chat);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).json({
    "success": false,
    "error": "Could not find page"
  });
});


module.exports = app;
