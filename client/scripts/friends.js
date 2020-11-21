var Friends = {

  initialize: function() {
    Friends.friendsList = [];
  },

  addFriend: function(event) {

    var friend = event.target.innerText;
    if (!Friends.friendsList.includes(friend)) {
      Friends.friendsList.push(friend);
    }
    //look for all elements in #chats where username = friend -> .css
    var usernames = $(".username");
    for (let i = 0; i < usernames.length; i++) {
      if (usernames[i].innerText === friend) {
        usernames[i].style.fontWeight = "bold";
        usernames[i].nextElementSibling.style.fontWeight = "bold";
      }
    }
  }
};
