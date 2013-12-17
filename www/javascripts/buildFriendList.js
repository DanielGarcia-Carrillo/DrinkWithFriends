   // Define our Database object
    var db = null;
	
    // Wait for Cordova to load
    document.addEventListener("deviceready", onDeviceReady, false);
	
    // Cordova is ready
    function onDeviceReady() {
      // Create a new database
	  db = window.openDatabase("FriendDatabase", "1.0","Friend ListDB", 200000);
      db.transaction(queryDB, databaseError);
    }

    // Query the database
    function queryDB(tx) {
	$('#busy').hide();
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