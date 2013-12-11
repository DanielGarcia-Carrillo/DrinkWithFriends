//steroids.tabBar.show();
window.DrinkWithFriendsController = {

  index: function () {
  },

  show: function () {

    // Fetch a value from query parameters ?id=x
    var showId = steroids.view.params.id;
    steroids.view.navigationBar.show("DrinkWithFriends #" + showId);

    // Just to demonstrate the control flow of the application, hook your own code here
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("show-id").textContent = showId;
    });

  },
  
  tabOn: function () {
    steroids.config.tabBar.enabled = true;
  },
  
  bars: function () {
  },
  
  barPage: function () {

  },
  
   addFriend: function () {

    // Fetch a value from query parameters ?id=x
    var showId = steroids.view.params.id;
    steroids.view.navigationBar.show("Add Friends");

    // Just to demonstrate the control flow of the application, hook your own code here
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("show-id").textContent = showId;
    });

  },
};


// Handle tap events on views

document.addEventListener("DOMContentLoaded", function() {

  $(".opensLayer").hammer().on("tap", function() {
    // Create a new WebView that...
    webView = new steroids.views.WebView({ location: this.getAttribute("data-location") });

    // ...is pushed to the navigation stack, opening on top of the current WebView.
    steroids.layers.push({
      tabBar: true,
      view: webView
    });
  });

});
