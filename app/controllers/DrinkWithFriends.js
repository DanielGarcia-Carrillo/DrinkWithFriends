//steroids.tabBar.show();
window.DrinkWithFriendsController = {

  index: function () {
    steroids.navigationBar.hide();
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
  
  checkIn: function () {
    
    steroids.navigationBar.hide();
	if (localStorage.getItem("firstVisit") && localStorage.getItem("firstVisit") == "success") {
    } else {
      localStorage.setItem("firstVisit", "false");
      var signupLoginView = new steroids.views.WebView("http://localhost/first.html");
	  steroids.modal.show(signupLoginView);
    }
      
   // Define our Database object
    var db = null;
	
    function populateDB(tx) {
      tx.executeSql('DROP TABLE IF EXISTS friends');
	  var sql = 
		"CREATE TABLE IF NOT EXISTS friends ( "+
		"id unique, " +
		"firstName VARCHAR(50), " +
		"lastName VARCHAR(50), " +
		"email VARCHAR(30), " + 
		"icon VARCHAR(200), " +
		"isFriend bit)";
      tx.executeSql(sql);
	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend) VALUES (1,'Jessica','Mullins','jessica@gmail.com','jess.jpg',1)");
	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend) VALUES (2,'Daniel','Garcia-Carrillo','daniel@gmail.com','daniel.jpg',1)");  
	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend) VALUES (3,'Helen','Zhou','helen@gmail.com','helen.jpg',1)");  
  	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend) VALUES (4,'Alex','Camargo','alex@gmail.com','alex.jpg',1)");  
	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend) VALUES (5,'Adam','Smith','adam@gmail.com','adam.jpg',0)");
	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend) VALUES (6,'Katie','Jones','katie@gmail.com','katie.jpg',0)");  
	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend) VALUES (7,'Emma','Preston','emma@gmail.com','emma.jpg',0)");  
  	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend) VALUES (8,'Joe','Lamping','joe@gmail.com','joe.jpg',0)"); 
	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend) VALUES (9,'Kevin','Waters','kevin@gmail.com','kevin.jpg',0)");
	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend) VALUES (10,'Lisa','Anderson','lisa@gmail.com','lisa.jpg',0)");  
	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend) VALUES (11,'Noah','Last','noah@gmail.com','noah.jpg',0)");  
  	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend) VALUES (12,'Joy','Thomas','joy@gmail.com','joy.jpg',0)"); 
	}

    // Wait for Cordova to load
    document.addEventListener("deviceready", onDeviceReady, false);
	
    // Cordova is ready
    function onDeviceReady() {
      // Create a new database
      db = window.openDatabase(
        "FriendDatabase",       // database name
        "1.0",            // database version
        "Friend ListDB",   // database display name
        200000            // database size in bytes
      );

      // populate the DB, then run a query
      db.transaction(
        populateDB,     // transaction to run; a SQLTransaction object is passed to the callback function
        databaseError,  // error callback function
        populatingDone  // success callback function; ran after the the transaction is done
      );
    }


    function populatingDone(){
      //db.transaction(queryDB, databaseError);
	  $('#busy').hide();
    }
	
	// Transaction error callback
    function databaseError(err) {
      alert("Error code: " + err.code + "; message: " + err.message);
    }
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
