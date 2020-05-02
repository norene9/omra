//---------------(Dependencies)-------------------
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const bcrypt = require('bcrypt')
const sgMail = require('@sendgrid/mail');
let mysqlConnection= require('./config')
//------------------------------------------------

//----------middelware
let router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
router.use(session({
  name: 'sid',
  resave: false,
  saveUninitialized: false,
  secret: 'is a secret',
  cookie:{
    maxAge: 1000 * 60 * 60 * 2,
    sameSite: true,
    secure: false
  }
}))
//
// const redirectLogin =(req,res,next)=>{
//   if (!req.session.userId){
//     res.redirect('/signup')
//   }else {
//     next()
//   }
// }
//
// const redirectHome =(req,res,next)=>{
//   if (req.session.userId){
//     res.redirect('/user')
//   }else {
//     next()
//   }
// }

//-------------(Send mail:forgot password)-------------
//you get your SENDGRID_API_KEY when u create new AÏ_KEY in Send Grid
//you had to add SENDGRID_API_KEY in your variabales environnemet

sgMail.setApiKey(process.env._SENDGRID_API_KEY);
var msg = {
  to: '',
  from: '',
  subject: '',
  text: '',
  html: '',
};

//------------------------------------------------------

///------------------(Routes: SQl Query)-----------------

//Post login data (Add user in DB)
router.post('/register', async (req,res,next)=>{
  try{
    user=req.body
    //This methodes for generate a random string to our token for forgot password feature
    let token = Math.random().toString(36).substring(1);
    //const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(user.password, 10)
    var sql =" INSERT INTO users (UserName,UserMail,UserPassword,tokenKey) VALUES ( ?,?,?,?)";
    mysqlConnection.query(sql, [user.name,user.mail,hashedPassword,token],(err,rows,fields)=>{
      if (!err) {
        console.log('Succes');
    }
      else {
        console.log(err);
      }
    });
    sql ="SELECT * from users WHERE UserMail = ? ";
    mysqlConnection.query(sql, [user.mail],async (err,rows,fields)=>{
      if (!err) {
          req.session.userId = rows[0].idUsers
          console.log('User Id ==> ',req.session.userId);
          res.redirect('/user')
         }
      else {
        console.log(err);

      }});
  }catch{
    res.status(500).send(error.message)
  }

});

//Post login : to get the users infos
router.post('/login',async (req,res,next)=>{
  try {
    const bcrypt = require('bcrypt')
    user=req.body
    var sql ="SELECT * from users WHERE UserMail = ? ";
    mysqlConnection.query(sql, [user.mail2],async (err,rows,fields)=>{
      if (!err) {
        if ( (await bcrypt.compare(user.password2,rows[0].UserPassword)) || (user.password2 === rows[0].tokenKey) )
         {  req.session.userId = rows[0].idUsers
            console.log('User Id ==> ',req.session.userId);
            res.redirect('/user')
            console.log({mail:user.mail2,
                         psw:user.password2});}
         }
      else {
        console.log(err);
      }
      });
  } catch {
    res.status(500).send(error.message)
  }

})

//Forgot a password
router.post('/forgotPSW', async(request, response) => {
  var mail=request.body
  var sql =" SELECT * from users WHERE UserMail = ?";
  mysqlConnection.query(sql, [mail.forgot],async(err,rows,fields)=>{
    if (!err) {

        console.log(rows[0].tokenKey);
        sgMail.send(msg={
           to: mail.forgot,
           from: 'i.bellaouedj@esi-sba.dz',
           subject: 'Sending with Twilio SendGrid is Fun',
           text: 'Hello m Yonko i m glad you read that this is ur Token : \n ' + rows[0].tokenKey,
           html: '<strong>Hello m Yonko i m glad you read that this is ur Token :</strong>  \n ' + rows[0].tokenKey,
         }).then(() => {
              console.log('Message sent')
         }).catch((error) => {
            console.log(error.response.body)
           // console.log(error.response.body.errors[0].message)
        })
        response.render('Home page/forgot-pass',{msg:"Check Your Email "})
        response.end()
  }
  else {
    console.log(err);
  }
});
})

//-----------------------------------------------------------------------------

//Aficher la derniere question
router.get('/',(request,response)=>{
  var sql = "SELECT * FROM message ORDER BY id DESC LIMIT 1";
  var message=request.body.message;
  mysqlConnection.query(sql, function(error, results) {
      if (error) {
          throw error;
      }

      response.render('Home page/index',{comment:results})

  });})
  router.get('/user',(request,response)=>{
    var sql = "SELECT * FROM message ORDER BY id DESC LIMIT 1";
    var message=request.body.message;
    mysqlConnection.query(sql, function(error, results) {
        if (error) {
            throw error;
        }

        response.render('UserPages/index',{comment:results})

    });})

module.exports = router;
