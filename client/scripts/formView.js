var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    console.log(event.target.value);
    var message = {};
    message.text = event.originalEvent.target[0].value;
    message.username = MessageView.filter(App.username);
    message.roomname = Rooms.currentRoom;
    message.createdAt = new Date();
    var successCB = function(event) {
      // console.log (event);
      // debugger;
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

// originalEvent.target[0].value

{/* <div id= <%= objectId %> class="chat">
<div class="username"><%= username %></div>
<span class="message"><%= text %></span>
<div class="roomname"><%= roomname %> </div>
<div class="createdAt" ><%= createdAt %></div>
</div> */}