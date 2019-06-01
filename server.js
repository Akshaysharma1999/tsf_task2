const express = require('express')
const app = express()
const db = require('./models/user').db

const server_port = process.env.PORT || 3000

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
  .then(app.listen(server_port, () => { console.log('http://localhost:3000/') }))
