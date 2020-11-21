var Rooms = {
  $button: $('.addbutton'),
  // roomsList: []
  currentRoom: 'lobby',

  initialize: function() {
    console.log ('initialized Rooms');
    Rooms.roomsList = [];
    // debugger;
    Rooms.$button.on('click', Rooms.add);
  },
  add: function() {
    // event.preventDefault();
    var newRoom = prompt('Enter new room name', 'lobby');
    // if roomsList doesn't include newRoom
    if (!Rooms.roomsList.includes(newRoom)) {
      Rooms.roomsList.push(newRoom);
      RoomsView.renderRoom(newRoom);
    }

  }
};