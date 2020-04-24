let express=require('express');
var mysqlConnection=require('./config/config');
var  flash= require('connect-flash');
const bodyparser=require('body-parser')
const session = require('express-session');

let router = express.Router();

//middleware
router.use(bodyparser.urlencoded({extended:false}));
router.use(bodyparser.json());
router.use(session({
    secret:'nnnnnnn ',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}));


//ADD QUESTION (create table message(id INT PRIMARY KEY AUTO_INCREMENT,content VARCHAR(255),createdat datetime);)
router.post('/question',(request,response)=>{
  let content = 'INSERT INTO message SET content=?,createdat=?';
         let todo = request.body.message;

         mysqlConnection.query(content, [todo,new Date()], (err, results, fields) => {
          if (err) {
            return console.error(err.message);
          }

          console.log('Todo Id:' + results.insertId);
         response.redirect('question')
      });

})
//AFICHER QUESTION
router.get('/question',(request,response)=>{
  var sql = "SELECT * FROM message ORDER BY id DESC";
  var message = request.body.message;
  mysqlConnection.query(sql, function(error, results) {
      if (error) {
          throw error;
      }

      response.render('pages/question',{question:results})

  });})

        //Delete QUESTION
        router.get('/delete/:id', (req, res) => {
          mysqlConnection.query('DELETE  FROM message WHERE id= ?', [req.params.id], (err, rows, fields) => {
            if (err) {
              return console.error(err.message);
            }
        res.redirect('back')

});
});

//AFICHER ANSWERS
router.get('/answer/:id',(request,response)=>{

  function find(j){
     var sql = 'SELECT A.*, B.* FROM message A ,reply B WHERE A.id=? ';
     mysqlConnection.query(sql, [j], function(error, results, fields) {
        if (error) {response.render('pages/question',()=>{

          console.log('no answer');
          response.send('There is no Answers for this Question')
        })}


          console.log(results[0]);
          console.log(results[1]);
          var i=results.length;
          console.log(results[2]);
          var v=[];
         for(var i=1;i<results.length;i++){v[i]=results[i]}
         response.render('answer/answer',{question:results[0],answer:v})


     })};
     find(request.params.id);

     })

//ADD REPLY (create table reply(idr INT PRIMARY KEY AUTO_INCREMENT,cont VARCHAR(255),qid INT);)
router.post('/answer/:id',(request,response)=>{
  let id=request.params.id;
  let cont = request.body.reply;
mysqlConnection.query('INSERT INTO reply SET cont=?, qid=?', [cont,id], (err, results) => {
   if (err) {
     return console.error(err.message);
   }
   response.redirect('back');


 });
})


module.exports = router;
