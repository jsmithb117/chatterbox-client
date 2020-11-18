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
      '&':  '&amp',
      '<':  '&lt',
      '>': '&gt',
      '"': '&quot',
      "'": '&#x27'
    };
    var newString = '';
    var inner = function(string, char, replacement) {

      //inner-recursive function
      //base case (if indexOf returns -1)
      var index = string.indexOf(char);
      if (index === -1) {
        return string;
      } else {
        newString += string.slice(0, index) + replacements[char];
        if (index + 1) {
          newString += inner(string.slice(index + 1), char, replacement);
        } else {
          return;
        }
      }
    };

    for (let char in replacements) {
      inner(string, char, replacements[char]);
    }
    return newString;
  }
};