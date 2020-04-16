var app=require('express')();
app.set('view engine', 'ejs');
var connection=require('./config/db');
var  flash= require('connect-flash');
const bodyparser=require('body-parser')
const session = require('express-session');
app.set('view engine','ejs');
//middleware
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(session({
    secret:'nnnnnnn ',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}));
app.post('/',(request,response)=>{
    let content = 'INSERT INTO message SET content=?,createdat=?';
           let todo = request.body.message;
             
           connection.query(content, [todo,new Date()], (err, results, fields) => {
            if (err) {
              return console.error(err.message);
            }
            // get inserted id
            console.log('Todo Id:' + results.insertId);
            response.redirect('/');
          });
})

          app.get('/',(request,response)=>{
            var sql = "SELECT * FROM message";
            var message=request.body.message;
            connection.query(sql, function(error, results) {
                if (error) {
                    throw error;
                }
                response.render('pages/question',{question:results})
               
            });
             
         
          })
          //Delete an employees
app.get('/delete/:id', (req, res) => {
  connection.query('DELETE  FROM message WHERE id= ?', [req.params.id], (err, rows, fields) => {
      if (err) throw err
          res.send('Deleted successfully.');
      
  })
  res.redirect('/');
});
          app.post('/answer/:id',(request,response)=>{
            let id=request.params.id;
            let cont = request.body.reply;
         connection.query('INSERT INTO reply SET cont=?, qid=?', [cont,id], (err, results) => {
             if (err) {
               return console.error(err.message);
             }
             // get inserted id
            
           });
 })
         
          app.get('/answer/:id',(request,response)=>{
            
           function find(id){
                var sql = 'SELECT A.* , B.* FROM message A ,reply B WHERE A.id=?  ';
        
connection.query(sql, [id,id], function(error, results, fields) {
    if (error) {
        throw error;}
        
        console.log(results[0]);
    console.log(results[1]);
    var i=results.length;
    console.log(results[2]);
    var v=[];
    for(var i=1;i<results.length;i++){v[i]=results[i]}
    response.render('answer/answer',{message:results[0],answer:v})
                                                             })
                                    }    find(request.params.id);
                                                     
                                })
                               
                               
           
          
          const PORT = process.env.PORT ||3000;
app.listen(PORT, console.log('Server started on port '+PORT));
          