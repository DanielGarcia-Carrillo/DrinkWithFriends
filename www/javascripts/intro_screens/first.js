document.addEventListener('DOMContentLoaded', function(ev) {
  $(document).hammer().on('swipeleft', function(e) {
    var secondIntro = new steroids.views.WebView({
      location: '/second.html'
	});
    var slideFromRight = new steroids.Animation('slideFromRight');
    steroids.layers.push({
      view: secondIntro,
      animation: slideFromRight
    });
  });
});

   // Define our Database object
    var db = null;
	
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
		"favoriteDrink VARCHAR(50)" +
		")";
      tx.executeSql(sql);
	  tx.executeSql("INSERT INTO friends (id,firstName,lastName,email,icon,isFriend,lastSeen,findMe,favoriteDrink) VALUES (13,'Pamela','Kim','pamela@gmail.com','pamela.png',3,'Iron Post','Bartini','Mango Mojito')");
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


    function populatingDone(){
      //db.transaction(queryDB, databaseError);
	  $('#busy').hide();
    }
	
	// Transaction error callback
    function databaseError(err) {
      alert("Error code: " + err.code + "; message: " + err.message);
    }