var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data.results);
      //html variable, empty string
      var html = '';
      //for loop over data.results
      for (let i = 0; i < data.results.length; i++) {
        //concat the results of messageView function to html
        console.log (this)
        // debugger;
        html += MessageView.render({username: data.results[i].username});
      }
        //(jquery) append html to dom
        $("#chats").append(html);
      callback();
    });
  },
// }

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};