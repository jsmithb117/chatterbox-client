var MessageView = {

  render: _.template(`
      <div id= <%= objectId %> class="chat">
        <div class="username"><%= username %></div>
        <span class="message"><%= text %></span>
        <div class="roomname"><%= roomname %> </div>
        <div class="createdAt" ><%= createdAt %></div>
      </div>
    `),
  filter: function(string) {
    var replacements = {
      '&': '&amp',
      '<': '&lt',
      '>': '&gt',
      '"': '&quot',
      "'": '&#x27'
    };
    var newString = string;
    //iterate replacements
    for (let char in replacements) {
      //call replaceAll(), passing in key and value
      newString = newString.replaceAll(char, replacements[char]);
    }
    return newString;
  }
};