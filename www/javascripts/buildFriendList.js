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
	// Filler method
    	}

    function populatingDone(){
      db.transaction(queryDB, databaseError);
	  $('#busy').hide();
    }


    function runQuery() {
      db.transaction(queryDB, databaseError);
    }

    // Query the database
    function queryDB(tx) {
      tx.executeSql('SELECT * FROM friends', [], gotQueryResults, databaseError);
    }

    // Show the results of the database query
    function gotQueryResults(tx, results) {
	var len = results.rows.length;
      var result = "";
      result += ("friends table: " + len + " rows found. \n\n");
      for (var i=0; i<len; i++){
		var friend = results.rows.item(i);
		if (friend.isFriend == 1)
		{
			$('#friendList').append('<li>' +
				'<a href="friendDetails.html?id=' + friend.id + '">' +
				'<img src="http://localhost/icons/friendIcons/' + friend.icon + '" class="list-icon"/>' +
				'<p class="line1">' + friend.firstName + ' ' + friend.lastName + '</p>' +
				'<p class="line2">' + friend.email + '</p>' +
				'</a></li>');
		}
	  }
		$('#status').hide();
	}

    // Transaction error callback
    function databaseError(err) {
      alert("Error code: " + err.code + "; message: " + err.message);
    }