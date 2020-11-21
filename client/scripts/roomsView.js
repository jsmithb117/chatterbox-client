var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(roomName) {
    var button = `<button onclick="RoomsView.filterRooms(event)" class="room-button" value='${(MessageView.filter)(roomName)}'> ${MessageView.filter(roomName)} </button>`;
    $("#rooms").append(button);
  },

  filterRooms: function(event) {
    var roomName = event.target.value;
    Rooms.currentRoom = roomName;
    $('#chats').children().remove();
    for (let message in Messages) {
      if (Messages[message].roomname === Rooms.currentRoom) {
        MessagesView.renderMessage(Messages[message]);
      }
    }
  }
};
