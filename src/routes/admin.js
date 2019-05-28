const route = require('express').Router()
const Users = require('../models/user').Users

route.post('/add',(req,res,next)=>{
    Users.create({
        name:req.body.name,
        email:req.body.email,
        
    }).then( (createduser)=>{
        console.log(createduser)
        res.send('Added')
    })   
})

module.exports = route