*Project description:
...

*How to run this project:
1/Make sure that you had NodeJs in your machine if not Download it from : https://nodejs.org/en/.
 And MySql Server if not Download it from : https://www.mysql.com/fr/downloads/
 (it's recommended to install MySql WorkBench, it's eazy to controll the data from it)

2/Then install the Dependencies :
 -Open your command line and go to the project repository: cd C:/UserName/.../Hadj-Omra-Project
 -then execute this commandes:
   * npm install
   * npm nodemon
 -In your database commande line or in WorkBench (MySql Server):
   *Create a new Schema

   *Create the tables: (this are instructions ready to execute)
      create table users(idUsers INT(11) PRIMARY KEY AUTO_INCREMENT,
	     UserName varchar(45) NOT NULL ,
		   UserMail varchar(45) NOT NULL UNIQUE,
	     UserPassword varchar(60) NOT NULL UNIQUE,
		   tokenKey varchar(45) NOT NULL ,
		   status varchar(45) ,country varchar(45) ,
		   genre varchar(20) ,date_naiss date ,img blob
      );
      create table message(id INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
        content VARCHAR(255)NOT NULL UNIQUE,
		    createdat datetime,
		    idUserqst int(11) NOT NULL ,
		    userNameQst varchar(45) NOT NULL
      );
      create table reply(idr INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
		   cont VARCHAR(255),
		   qid int(11) ,
       userNameRes varchar(45) NOT NULL
       );

    *Go to hadj_omra_repo/config/config.js ==> then change:
    Ligne 6: "var mysqlConnection = mysql.createConnection({
                 host:'127.0.0.1',
  				       user:'root',
 				         port:'3310',
  			       	 password:'ismail',
  				       database:'hadj_omra' //(This is the name of your schema)
     Ligne 12:	 });"
          #######Change this data to correspend to your Connection data##########     

3/run this command in your command line:
   nodemon server  

4/Go to your Browser and write this:
 localhost:8080
