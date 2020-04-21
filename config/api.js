//---------------(Dependencies)-------------------
const express = require('express')
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');
let mysqlConnection= require('./config')
//------------------------------------------------

//----------middelware
let router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


//-------------(Send mail:forgot password)-------------
//you get your SENDGRID_API_KEY when u create new AÏ_KEY in Send Grid
//you had to add SENDGRID_API_KEY in your variabales environnemet

sgMail.setApiKey('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');
var msg = {
  to: '',
  from: '',
  subject: '',
  text: '',
  html: '',
};
router.post('/forgotPSW', (request, response) => {
  var mail=request.body
  var sql =" SELECT * from users WHERE UserMail = ?";
  mysqlConnection.query(sql, [mail.forgot],(err,rows,fields)=>{
    if (!err) {
        console.log(rows[0].UserPassword);
        sgMail.send(msg={
           to: mail.forgot,
           from: 'i.bellaouedj@esi-sba.dz',
           subject: 'Sending with Twilio SendGrid is Fun',
           text: 'Hello m Yonko i m glad you read that this is ur password ' + rows[0].UserPassword,
           html: '<strong>Hello m Yonko i m glad you read that this is ur password :</strong> ' + rows[0].UserPassword,
         }).then(() => {
              console.log('Message sent')
         }).catch((error) => {
            console.log(error.response.body)
           // console.log(error.response.body.errors[0].message)
        })
        response.render('Home page/forgot-pass')
        response.end()
  }
  else {
    console.log(err);
  }
});
})
//------------------------------------------------------

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
