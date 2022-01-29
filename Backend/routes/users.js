const express = require('express')
const User = require('../models/user');
const router = express.Router()

router.post('/', async(req,res)=>{
    try{
        const user = new User({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            fullname:req.body.fullname,
            dexterity:req.body.dexterity
        })
        await user.save();
        return res.send(user)
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
});

router.get('/getUsers', async(req,res)=>{
    try{
        const users = await User.find()
        return res.send(users)
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

router.get('/findUser/:userId', async(req,res)=>{
    try{
        const user = await User.findById(req.params.userId)
        return res.send(user)
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`) 
    }
})

module.exports = router;