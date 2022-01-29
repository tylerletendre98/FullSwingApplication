const mongoose = require('mongoose');

const GolfClubSchema = new mongoose.Schema({
    brand:{type:String, required:true},
    model:{type:String, required:true},
    type:{type:String, required:true},
});

const GolfClub = mongoose.model('GolfClub', GolfClubSchema);
module.exports  = GolfClubSchema;