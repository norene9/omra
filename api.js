//---------------(Dependencies)------------------- 
const express = require('express')
const bodyParser = require('body-parser')
let mysqlConnection= require('./config')
//------------------------------------------------

//middelware
let router = express.Router();
router.use(bodyParser.json())


///------------------(Routes: SQl Query)-----------------

//Post login data (Add user in DB)
router.post('/register',(req,res,next)=>{
  user=req.body
  var sql =" INSERT INTO users (UserName,UserMail,UserPassword) VALUES ( ?,?,?)";
  mysqlConnection.query(sql, [user.name,user.mail,user.password],(err,rows,fields)=>{
    if (!err) {
      console.log('Succes');
  }
    else {
      console.log(err);
    }
  });
});

//Post login : to get the users infos
router.post('/login',(req,res,next)=>{
  user=req.body
  var sql ="SELECT * from users WHERE UserMail = ? AND UserPassword = ?";
  mysqlConnection.query(sql, [user.mail2,user.password2],(err,rows,fields)=>{
    if (!err) {
      res.send(rows);
      console.log({mail:user.mail2,
                   psw:user.password2});
  }
    else {
      console.log(err);
    }
  });
})
//-----------------------------------------------------------------------------

module.exports = router;
