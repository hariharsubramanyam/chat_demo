window.Chat = window.Chat || {};
window.Chat.API = function() {
  var that = {};
  that.getMessages = function(callback) {
    $.get("/chat", function(data) {
      if (data.success) {
        callback(null, data.content);
      } else {
        callback(new Error(data.error));
      }
    });
  };
  that.sendMessage = function(message, callback) {
    $.post("/chat", {
      "message": message,
    }, function(data) {
      if (data.success) {
        callback(null);
      } else {
        callback(new Error(data.error));
      }
    });
  };
  return that;
}();
