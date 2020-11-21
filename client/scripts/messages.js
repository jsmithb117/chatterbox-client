var Messages = {

  length: 0,

  renderAll: function() {
    //iterate Messages
    for (let message in Messages) {
      //render each
      MessagesView.renderMessage(Messages[message]);
    }
  }

};