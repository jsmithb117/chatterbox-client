var Friends = {

  initialize: function() {
    Friends.friendsList = [];
  },

  addFriend: function(event) {
    var usernames = $(".username");
    var friend = event.target.innerText;
    if (!Friends.friendsList.includes(friend)) {
      Friends.friendsList.push(friend);
      for (let i = 0; i < usernames.length; i++) {
        if (usernames[i].innerText === friend) {
          usernames[i].style.fontWeight = "bold";
          usernames[i].nextElementSibling.nextElementSibling.style.fontWeight = "bold";
        }
      }
    } else {
      var index = Friends.friendsList.indexOf(friend);
      Friends.friendsList.splice(index, 1);
      for (let i = 0; i < usernames.length; i++) {
        if (usernames[i].innerText === friend) {
          usernames[i].style.fontWeight = "normal";
          usernames[i].nextElementSibling.nextElementSibling.style.fontWeight = "normal";
        }
      }
    }
  }
};
