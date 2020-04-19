//---------------Dependencies-----------------
let express = require('express')
let bodyParser = require('body-parser')
//--------------------------------------------

let app = express()

//--------------------(middelware)-----------------------
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//this calling api.js which is contain sql commandes
app.use('/api',require('./api'))
//this for calling the static files .js .css images
app.use('/', express.static('assets'))
//--------------------------------------------------------

//moteur de view
app.set('view engine', 'ejs')

//-------------(Routes for pages)------------------------
app.get('/', (request, response) => {
  response.render('Home page/index')
})

app.get('/avant_voyage', (request, response) => {
  response.render('Home page/avant_voyage')
})

app.get('/signup', (request, response) => {
  response.render('Home page/signup')
})

app.get('/manasik_omra', (request, response) => {
  response.render('Home page/manasik_omra')
})
app.get('/signup', (request, response) => {
  response.render('Home page/signup')
})
app.post('/', (request, response) => {
  console.log(request.body);
  if (request.body.message === undefined || request.body.message === '') {
    response.redirect('/')
  }
})
//----------------------------------------------------------------------

//Listing to the server
app.listen(8080, ()=>{
  console.log('Server is running on port 8080...');
})
