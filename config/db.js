let mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'hadjapp',
    password : '',
    database:'post',
    
    insecureAuth : true
  }); 
  
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });
  module.exports=connection