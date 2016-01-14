var messages = [];

var addMessage = function(msg) {
  messages.push(msg);
};

var getMessages = function() {
  return messages.map(function(msg) {
    return msg;
  });
};

module.exports = function(msg) {
  if (msg === undefined) {
    return getMessages();
  } else {
    addMessage(msg);
  }
};
