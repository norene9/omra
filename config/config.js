//---------------Dependencies-----------------
let mysql = require('mysql')

//Create a connection with database
//this configuration is depends on my local server MySql
var mysqlConnection = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  port:'3310',
  password:'ismail',
  database:'hadj_omra'
});

//Connect to the database
mysqlConnection.connect((err)=>{
  if (!err)
    console.log('DB connection succeded');
  else {
    console.log('DB connection failed \n Error : '
         +JSON.stringify(err, undefined,2));
  }
});

//========= The structur of the Database==============:
/*The Name of DB :hadj_omra;
  *The Name of tables :users,...;
  *specification for the tables:
   -users =>:
          #idUsers     :INT(11) Primary key ,NOT NULL,UNIQUE,AUTO INCREMENT;
          #UserName    :VARCHAR(45) NOT NULL;
          #UserMail    :VARCHAR(45) NOT NULL,UNIQUE;
          #UserPassword:VARCHAR(20) NOT NULL,UNIQUE;
          #tokenKey    :varchar(45) NOT NULL ,
		      #status      :varchar(45) ,
          #country     :varchar(45) ,
		      #genre       :varchar(20) ,
          #date_naiss  :date ,
          #img         :blob,
   -message =>:
          #id       :INT PRIMARY KEY AUTO_INCREMENT;
          #content  : VARCHAR(255);
          #createdat: datetime;
          #idUserqst: int(11) NOT NULL ,
          #userNameQst: varchar(45) NOT NULL,
   -reply =>:
          #idr : INT PRIMARY KEY AUTO_INCREMENT;
          #cont: VARCHAR(255);
          #qid : INT;
          #userNameRes varchar(45) NOT NULL,
*/

module.exports= mysqlConnection
