const express = require('express');
const Club = require('../models/club');
const User = require('../models/user');
const router = express.Router();

router.post('/newClub/:ownerId', async(req,res)=>{
    try{
        const owner = await User.findById(req.params.ownerId)
        const newClub = new Club({
            name:req.body.name,
            owner:owner.username
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

module.exports = router;