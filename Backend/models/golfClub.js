const mongoose = require('mongoose');

const golfClubSchema = new mongoose.Schema({
    brand:{type:String, required:true},
    model:{type:String, required:true},
    type:{type:String, required:true},
});

module.exports = mongoose.model('GolfClub', golfClubSchema);