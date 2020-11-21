var MessagesView = {

  $chats: $('#chats'),

  initialize: function(data) {
    var html = '';
    for (let i = data.length - 1; i > 0; i--) {
      MessagesView.renderMessage(data[i]);
    }
    $('#chats').prepend(html);
  },

  renderMessage: function(data) {
    var html = '';
    var renderData = {};
    if (data.roomname === MessageView.filter(data.roomname) && data.username === MessageView.filter(data.username) && data.text === MessageView.filter(data.text)) {
      renderData.roomname = data.roomname ? MessageView.filter(data.roomname) : '';
      renderData.username = data.username ? MessageView.filter(data.username) : '';
      renderData.createdAt = data.createdAt ? data.createdAt : '';
      renderData.objectId = data.objectId ? data.objectId : '';
      renderData.text = data.text ? MessageView.filter(data.text) : '';
      Messages[renderData.objectId] = renderData;
      Messages.length++;
      html += MessageView.render(renderData);
      if (!Rooms.roomsList.includes(data.roomname) && data.roomname) {
        Rooms.roomsList.push(MessageView.filter(data.roomname));
        RoomsView.renderRoom(MessageView.filter(data.roomname));
      }
    }
    $('#chats').prepend(html);
  }
};

