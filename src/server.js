const express = require('express')
const app = express()
const db = require('./models/user').db

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'hbs')

app.use('/',express.static(__dirname + "/public"))

app.get('/',(req,res,next)=>{
  res.render('home')
})

app.use('/', require('./routes/main'))
app.use('/', require('./routes/admin'))

db.sync()
  .then(app.listen(3000, () => { console.log('http://localhost:3000/') }))
