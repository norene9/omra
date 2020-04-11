let express = require('express')
let app = express()
let bodyParser = require('body-parser')


//middelware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', express.static('assets'))



//moteur de view
app.set('view engine', 'ejs')


//Routes
app.get('/', (request, response) => {
  response.render('Home page/index')
})
app.get('/avant_voyage', (request, response) => {
  response.render('Home page/avant_voyage')
})

app.post('/', (request, response) => {
  console.log(request.body);
  if (request.body.message === undefined || request.body.message === '') {
    response.redirect('/')
  }
})
app.listen(8080)
