var MessagesView = {

  $chats: $('#chats'),

  initialize: function(data) {
    var html = '';
    //for loop over data
    for (let i = 0; i < data.length; i++) {
      //concat the results of messageView function to html
      console.log (this);
      MessagesView.renderMessage(data[i]);
    }
    //(jquery) append html to dom
    $('#chats').append(html);
  },

  renderMessage: function(data) {
    var html = '';
    var renderData = {};
    renderData.roomname = data.roomname ? data.roomname : '';
    renderData.username = data.username;
    renderData.createdAt = data.createdAt;
    renderData.objectId = data.objectId;
    renderData.text = data.text;
    Messages[renderData.objectId] = renderData;
    html += MessageView.render(renderData);
    $('#chats').append(html);
  }

};