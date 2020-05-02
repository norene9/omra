//---------------Dependencies-----------------
let express = require('express')
let bodyParser = require('body-parser')
let livereload = require('livereload')
let connectLivereload = require('connect-livereload')
//--------------------------------------------

let app = express()
var liveReloadServer = livereload.createServer()
liveReloadServer.watch([__dirname +'./assets',__dirname +'./views/Home page'])

//--------------------(middelware)-----------------------
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//this calling api.js which is contain sql commandes
app.use('/',require('./config/api'))
app.use('/',require('./question'))
//this calling question.js which is contain sql comma
app.use('/question',require('./question'))
//this for calling the static files .js .css images
app.use( express.static("./assets"))
//Reload the pages
app.use(connectLivereload())
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
app.get('/manasik_hadj', (request, response) => {
  response.render('Home page/manasik-hadj')
})
app.get('/ad3iya', (request, response) => {
  response.render('Home page/ad3iya')
})
app.get('/salat', (request, response) => {
  response.render('Home page/salat')
})
app.get('/forgot', (request, response) => {
  response.render('Home page/forgot-pass')
})
app.get('/loisir', (request, response) => {
  response.render('Home page/loisir')
})
app.get('/loisir2', (request, response) => {
  response.render('Home page/loisir2')
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
