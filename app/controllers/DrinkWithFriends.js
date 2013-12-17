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
	if (localStorage.getItem("signIn") && localStorage.getItem("signIn") == "success") {
    } else {
      localStorage.setItem("signIn", "false");
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
		"isFriend bit, " +
		"lastSeen VARCHAR(50), " +
		"findMe VARCHAR(50), " +
		"favoriteDrink VARCHAR(50) " +
		")";
      tx.executeSql(sql);
	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend,lastSeen,findMe,favoriteDrink) VALUES (1,'Jessica','Mullins','jessica@gmail.com','jess.jpg',1,'Murphys','Bartini','Shirley Temple')");
	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend,lastSeen,findMe,favoriteDrink) VALUES (2,'Daniel','Garcia-Carrillo','daniel@gmail.com','daniel.jpg',1,'Rock Bottom','BWW','PBR')");  
	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend,lastSeen,findMe,favoriteDrink) VALUES (3,'Helen','Zhou','helen@gmail.com','helen.jpg',1,'ChaChaCha','Bartini','Wine')");  
  	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend,lastSeen,findMe,favoriteDrink) VALUES (4,'Alex','Camargo','alex@gmail.com','alex.jpg',1,'Murphys','Joes','Whiskey')");  
	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend,lastSeen,findMe,favoriteDrink) VALUES (5,'Adam','Smith','adam@gmail.com','adam.jpg',0,'Cheers','The Blind Pig','Whatever is cheapest')");
	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend,lastSeen,findMe,favoriteDrink) VALUES (6,'Katie','Jones','katie@gmail.com','katie.jpg',0,'Cowboy Monkey','Cheers','Guinness')");  
	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend,lastSeen,findMe,favoriteDrink) VALUES (7,'Emma','Preston','emma@gmail.com','emma.jpg',0,'Twisted','Twisted','Rum and Coke')");  
  	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend,lastSeen,findMe,favoriteDrink) VALUES (8,'Joe','Lamping','joe@gmail.com','joe.jpg',0,'Bunnys','The Blind Pig','Sprite')"); 
	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend,lastSeen,findMe,favoriteDrink) VALUES (9,'Kevin','Waters','kevin@gmail.com','kevin.jpg',0,'Iron Post','Joes','Whiskey')");
	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend,lastSeen,findMe,favoriteDrink) VALUES (10,'Lisa','Anderson','lisa@gmail.com','lisa.jpg',0,'Black Dog','Seven Saints','Anything cold')");  
	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend,lastSeen,findMe,favoriteDrink) VALUES (11,'Noah','Last','noah@gmail.com','noah.jpg',0,'Farrens','Black Dog','Incredible Hulk')");  
  	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend,lastSeen,findMe,favoriteDrink) VALUES (12,'Joy','Thomas','joy@gmail.com','joy.jpg',0,'Seven Saints','The Blind Pig','Red Wine')"); 
	}

    // Wait for Cordova to load
    document.addEventListener("deviceready", onDeviceReady, false);
	
    // Cordova is ready
    function onDeviceReady() {
      // Create a new database
      var db = window.openDatabase(
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
      
      db = window.openDatabase("bars", "1.0", "Bars DB", 1000000);
      db.transaction(function(tx) {
        tx.executeSql('DROP TABLE IF EXISTS Bars');
        tx.executeSql('CREATE TABLE IF NOT EXISTS Bars (id, name, rating, desc, specials, icon_loc)');
        tx.executeSql('INSERT INTO Bars (id, name, rating, desc, specials, icon_loc) VALUES (1,"Murphy\'s", 4, "lakdjfa", "$4 Leinenkugel Orange Shandy","/icons/barIcons/murphys.jpg")');
        tx.executeSql('INSERT INTO Bars (id, name, rating, desc, specials, icon_loc) VALUES (2,"Clybourne", 3, "lakdsjflk", "$1 wells", "/icons/barIcons/clybourne.png")');
        tx.executeSql('INSERT INTO Bars (id, name, rating, desc, specials, icon_loc) VALUES (3,"Blind Pig", 5, "Local craft brews and brewery", "Mug Night", "/icons/barIcons/blindPig.png")');
        tx.executeSql('INSERT INTO Bars (id, name, rating, desc, specials, icon_loc) VALUES (4,"FireHaus", 3, "", "$1 wells", "/icons/barIcons/firehaus.png")');
        tx.executeSql('INSERT INTO Bars (id, name, rating, desc, specials, icon_loc) VALUES (5,"Brothers", 5, "", "$2 Jager Bombs $1.50 High Life", "/icons/barIcons/brothers.png")');
        tx.executeSql('INSERT INTO Bars (id, name, rating, desc, specials, icon_loc) VALUES (6,"Canopy Club", 4, "", "$4 Hennessey/Ginger ale", "/icons/barIcons/canopyClub.png")');
        tx.executeSql('INSERT INTO Bars (id, name, rating, desc, specials, icon_loc) VALUES (7,"Legends", 2, "Bar and grill", "$2 All Drafts", "/icons/barIcons/legends.png")');
      });
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
