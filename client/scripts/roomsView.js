var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(roomName) {
    // var option = `<option onclick="console.log('stuff')" "value='${MessageView.filter(roomName)}'> ${MessageView.filter(roomName)} </option>`;
    // // option.addEventListener("select, setCurrentRoom(event)")
    // RoomsView.$select.append(option);
    var button = `<button onclick="RoomsView.filterRooms(event)" value='${MessageView.filter(roomName)}'> ${MessageView.filter(roomName)} </button>`;
    $("#rooms").append(button);
  },

  filterRooms: function(event) {
    // console.log('filterRooms');
    // var room = roomName.target.previousElementSibling[roomName.target.previousElementSibling.selectedIndex].value;
    // //remove everything from the dom that is not in that room
    // var notRoomName = $('#chats').not(roomName);
    // var parent = notRoomName.parent(notRoomName);
    // console.log ('notRoomName: ', notRoomName);
    // console.log ('parent: ', parent);

    var roomName = event.target.value;
    Rooms.currentRoom = roomName;
    //remove #chats from dom
    $('#chats').children().remove();

    //iterate Messages, append all messages in Rooms.currentRoom
    for (let message in Messages) {
      //if message.roomname is currentRoom
      if (Messages[message].roomname === Rooms.currentRoom) {
        MessagesView.renderMessage(Messages[message]);
      }
    }
    //append html to #chats
  },

  setCurrentRoom: function(event) {
    debugger;
    // console.log (event)
  }

};
