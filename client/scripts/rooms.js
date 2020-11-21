var Rooms = {
  $button: $('.addbutton'),
  currentRoom: 'lobby',

  initialize: function() {
    Rooms.roomsList = [];
    Rooms.$button.on('click', Rooms.add);
  },
  add: function() {
    var newRoom = prompt('Enter new room name', 'lobby');
    if (!Rooms.roomsList.includes(newRoom)) {
      Rooms.roomsList.push(newRoom);
      RoomsView.renderRoom(newRoom);
    }
  }
};