var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(roomName) {
    var option = `<option onclick="console.log('stuff')" "value='${MessageView.filter(roomName)}'> ${MessageView.filter(roomName)} </option>`;
    // option.addEventListener("select, setCurrentRoom(event)")
    RoomsView.$select.append(option);
  },

  filterRooms: function(roomName) {
    console.log('filterRooms');
    var room = roomName.target.previousElementSibling[roomName.target.previousElementSibling.selectedIndex].value;
    //remove everything from the dom that is not in that room
    var notRoomName = $('#chats').not(roomName);
    var parent = notRoomName.parent(notRoomName);
    console.log ('notRoomName: ', notRoomName);
    console.log ('parent: ', parent);

  },

  setCurrentRoom: function(event) {
    debugger;
    // console.log (event)
  }

};
