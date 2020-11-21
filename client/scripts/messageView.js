var MessageView = {

  render: _.template(`
      <div id= <%= objectId %> class="chats" >
        <button class="username" onclick="Friends.addFriend(event)"><%= username %></button>
        <br>
        <span class="message">Message: <%= text %></span>
        <div class="roomname">Room name: <%= roomname %> </div>
        <div class="createdAt" >Created at: <%= createdAt %></div>
      </div>
    `),
  filter: function(string) {
    var replacements = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    };
    var newString = string;
    if (newString) {
      for (let char in replacements) {
        newString = newString.replaceAll(char, replacements[char]);
      }
    }
    return newString;
  }
};