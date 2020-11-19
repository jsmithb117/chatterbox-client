var MessagesView = {

  $chats: $('#chats'),

  initialize: function(data) {
    var html = '';
    //for loop over data
    for (let i = data.length - 1; i > 0; i--) {
      //concat the results of messageView function to html
      // console.log (this);
      MessagesView.renderMessage(data[i]);
    }
    //(jquery) append html to dom
    $('#chats').prepend(html);
  },

  renderMessage: function(data) {
    var html = '';
    var renderData = {};
    renderData.roomname = data.roomname ? data.roomname : '';
    renderData.username = data.username ? data.username : '';
    renderData.createdAt = data.createdAt ? data.createdAt : '';
    renderData.objectId = data.objectId ? data.objectId : '';
    renderData.text = data.text ? data.text : '';
    Messages[renderData.objectId] = renderData;
    Messages.length++;
    html += MessageView.render(renderData);
    // html = html.concat(MessageView.render(renderData));

    $('#chats').prepend(html);
  }

};