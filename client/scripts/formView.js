var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var message = {};
    message.text = event.originalEvent.target[0].value;
    message.username = MessageView.filter(App.username);
    message.roomname = Rooms.currentRoom;
    message.createdAt = new Date();
    var successCB = function(event) {
      message.objectId = event.objectId;
      message.createdAt = event.createdAt;
      MessagesView.renderMessage(message);
    };
    Parse.create(message, successCB);
    //
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};
