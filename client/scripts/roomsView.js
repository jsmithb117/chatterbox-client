var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(roomName) {
    RoomsView.$select.append(`<option value='${MessageView.filter(roomName)}'> ${MessageView.filter(roomName)} </option>`);
  }

};
