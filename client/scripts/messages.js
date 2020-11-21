var Messages = {

  length: 0,

  renderAll: function() {
    for (let message in Messages) {
      MessagesView.renderMessage(Messages[message]);
    }
  }

};