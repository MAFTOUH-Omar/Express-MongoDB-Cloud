const express=require('express');
const router =express.Router();
// models
const User = require('../models/Users');
// get a list of users from database
router.get('/users/affiche',(req,res,next)=>{
    User.find({}).then((user)=>{
        res.send(user);
    });
});
// Add new user to the database
router.post('/users/ajoute' , (req,res)=>{
    User.create(req.body).then((user)=>{
        res.send(user);
    }).catch((err)=>{
        res.send({
            error : err.message
        });
    });
});
// Update a user to the database
router.put('users/update/:id',(req,res)=>{
    User.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>{
        User.findOne({_id:req.params.id}).then((user)=>{
            res.send(user);
        })
    })
})
// delete a user from a dataBase
router.delete('/users/delete/:id',(req,res,next)=>{
    User.findByIdAndDelete({_id:req.params.id})
    .then((user)=>(res.send(user)));
})
module.exports = router;