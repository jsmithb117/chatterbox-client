var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    // MessagesView.initialize();
    Rooms.initialize();
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);


  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data.results);
      //html variable, empty string
      // debugger;
      MessagesView.initialize(data.results);
      callback();
    });
  },

  fetchNew: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      for (let i = 0; i < data.results.length; i++) {
        if (!Messages[data.results[i].objectId]) {
          MessagesView.renderMessage(data.results[i]);
        }
      }
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
