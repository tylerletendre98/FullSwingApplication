const express = require('express')
const User = require('../models/user');
const GolfClub = require('../models/golfClub')
const Round = require('../models/round');
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

router.post('/addGolfClub/:userId', async(req,res)=>{
    try{
        const user = await User.findById(req.params.userId)
        const golfClub = new GolfClub({
            brand: req.body.brand,
            model: req.body.model,
            type: req.body.type
        })
        user.golfBag.push(golfClub)
        user.save()
        return res.send(user)
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
});

router.post('/addRound/:userId', async (req,res)=>{
    try{
        const user = await User.findById(req.params.userId)
        const newRound = new Round({
            holeOne: req.body.holeOne,
            holeTwo: req.body.holeTwo,
            holeThree: req.body.holeThree,
            holeFour: req.body.holeFour,
            holeFive: req.body.holeFive,
            holeSix: req.body.holeSix,
            holeSeven: req.body.holeSeven,
            holeEight: req.body.holeEight,
            holeNine: req.body.holeNine,
            holeTen: req.body.holeTen,
            holeEleven: req.body.holeEleven,
            holeTwelve: req.body.holeTwelve,
            holeThirteen: req.body.holeThirteen,
            holeFourteen: req.body.holeFourteen,
            holeFifteen: req.body.holeFifteen,
            holeSixteen: req.body.holeSixteen,
            holeSeventeen: req.body.holeSeventeen,
            holeEighteen: req.body.holeEighteen,
            roundScore: req.body.roundScore,
            underPar: req.body.underPar,
            courseName: req.body.courseName
        })
        newRound.save()
        user.rounds.push(newRound)
        user.save()
        return res.send(user)
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

module.exports = router;