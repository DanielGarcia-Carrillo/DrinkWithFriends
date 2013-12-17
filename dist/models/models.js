// The contents of individual model .js files will be concatenated into dist/models.js
  
  function getBarsAlphabetical(tx) {
    tx.executeSql('SELECT * FROM Bars ORDER BY UPPER(name)', [], selectQuerySuccess);
  }