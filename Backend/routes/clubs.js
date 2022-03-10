const express = require('express');
const Club = require('../models/club');
const User = require('../models/user');
const Message = require('../models/message')
const router = express.Router();

router.post('/newClub/:ownerId', async(req,res)=>{
    try{
        const owner = await User.findById(req.params.ownerId)
        const newClub = new Club({
            name:req.body.name,
            owner:owner.username,
            clubPassword: req.body.clubPassword
        })
        await newClub.save()
        return res.send(newClub)
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

router.get('/getClubs', async(req,res)=>{
    try{    
        const clubs = await Club.find()
        console.log(clubs)
        return res.send(clubs)
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

router.get('getClub/:clubId', async (req,res)=>{
    try{
        const club = await Club.findById(req.params.clubId)
        return res.send(club);
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

router.post('/newMember/:clubId/:memberId', async(req,res)=>{
    try{
        const club = await Club.findById(req.params.clubId)
        const newMember = await User.findById(req.params.memberId)
        club.members.push(newMember)
        club.save()
        return res.send(club)
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

router.post('/newMessage/:clubId/:senderId', async (req,res)=>{
    try{
        const club = await Club.findById(req.params.clubId);
        const sender = await User.findById(req.params.senderId)
        const newMessage = new Message({
            sender : sender.username,
            text : req.body.text
        })
        newMessage.save()
        club.messages.push(newMessage)
        club.save()
        return res.send(club)
    }catch(ex){

    }
})

module.exports = router;