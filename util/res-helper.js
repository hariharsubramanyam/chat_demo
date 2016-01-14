var HttpStatus = require("http-status");

module.exports = function(req, res, next) {
  var fail = function(status, message) {
    res.status(status).json({
      "success": false,
      "message": message,
    });
  };

  var success = function(message, content) {
    res.status(HttpStatus.OK).json({
      "success": true,
      "message": message,
      "content": content,
    });
  };
  res.success = success;
  res.fail = fail;
  next();
};
