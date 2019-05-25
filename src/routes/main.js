const route = require('express').Router()
const Users = require('../models/user').Users

route.get('/', (req, res, next) => {

   Users.findAll()
      .then((users) => {
         // console.log(users[0].name)
         res.render('view_users', { users: users })
      })
})

route.get('/user/:id', (req, res, next) => {
   // console.log(req.params.id)
   Users.findOne({
      where: {
         id: req.params.id
      }
      })
      .then((user) => {
         res.render('user', { user: user })
      })

})

route.post('/transfer_credits',(req,res,next)=>{

   Users.findAll()
      .then((users) => {
         res.render('transfer_credits',{ users:users , s_id:req.body.id})
      })
})

route.post('/credits_management/',(req,res,next)=>{
   console.log(req.params)
   console.log('body')
   console.log(req.body)
   res.send('here')
})

module.exports = route