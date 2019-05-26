const route = require('express').Router()
const Users = require('../models/user').Users
const Transactions = require('../models/user').Transactions

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

let s_id

route.post('/transfer_credits', (req, res, next) => {

   s_id = req.body.id
   Users.findAll()
      .then((users) => {
         res.render('transfer_credits', { users: users, s_id: req.body.id })
      })
})

route.post('/credits_management/:id', (req, res, next) => {

   // console.log(s_id)
   // console.log(req.params)
   Users.findOne({ where: { id: req.params.id } })
      .then((t_user) => {

         Users.findOne({ where: { id: s_id } })
            .then((f_user) => {
               // console.log(t_user.name)
               // console.log(f_user.name)
               t_user.credit += 1
               f_user.credit -= 1
               t_user.save()
                  .then(() => {

                     f_user.save()
                        .then(() => {
                        //   console.log(t_user)
                        //   console.log(f_user)
                           Transactions.create(
                              {
                                 from:f_user.name,
                                 to : t_user.name,
                                 time : t_user.updatedAt,
                              }                              
                           ).then((t)=>{
                              console.log(t)
                              res.redirect('/')
                           })

                           
                        })
                  })
            })

      })
})





module.exports = route