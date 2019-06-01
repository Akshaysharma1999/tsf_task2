const route = require('express').Router()
const Users = require('../models/user').Users
const Transactions = require('../models/user').Transactions

route.get('/view_user', (req, res, next) => {
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
let qty

route.post('/transfer_credits', (req, res, next) => {

   // console.log(req.body.quantity)
   qty = parseInt(req.body.quantity)
   s_id = req.body.id
   Users.findAll()
      .then((users) => {
         res.render('transfer_credits', { users: users, s_id: req.body.id })
      })
})

route.post('/credits_management/:id', (req, res, next) => {

   // console.log(s_id)
   // console.log(req.params)
   let f_usert
   Users.findOne({ where: { id: s_id } })
      .then((f_user) => {
         f_usert = f_user
         // console.log('fuser')
         // console.log(f_user)
         f_user.credit -= qty
         f_user.save()
               .then(() => {
                  Users.findOne({ where: { id: req.params.id } })
                     .then((t_user) => {
                        // console.log('t_user')
                        // console.log(t_user)
                        t_user.credit += qty
                        t_user.save()
                           .then(() => {
                              // console.log(t_user)
                              Transactions.create(
                                 {
                                    from: f_usert.name,
                                    to: t_user.name,
                                    time: t_user.updatedAt,
                                 }
                              ).then((t) => {
                                 // console.log(t)
                                 res.redirect('/view_user')
                              })

                           })

                     })
               })
         // console.log(f_user)
      })

})

route.get('/transaction', (req, res, next) => {
   Transactions.findAll()
      .then((table) => {
         res.send(table)

      })
})

module.exports = route