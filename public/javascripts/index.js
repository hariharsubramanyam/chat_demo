var showMessages = function() {
  window.Chat.API.getMessages(function(err, data) {
    if (err) {
      alert(err.toString());
    } else {
      var html = Handlebars.templates["chat"]({
        "chat": data
      });
      $("#chat-div").html(html);
    }
  });
};

var sendMessageHandler = function() {
  var msg = $("#message").val();
  if (msg.length === 0) {
    alert("You must enter a message");
  } else {
    window.Chat.API.sendMessage(msg, showMessages);
  }
};

$(document).ready(function() {
  showMessages();
  $("#form-div").html(Handlebars.templates["form"]());
  $(document).on("click", "#send", sendMessageHandler)
  setInterval(showMessages, 2000);
});
