const mongoose = require('mongoose');
const GolfClub = require('./golfClub')

const userSchema = new mongoose.Schema({
    username:{type:String, required:true, minlength:4, maxlength:25},
    email:{type:String, required:true,minlength:4,maxlength:55},
    password:{type:String, required:true,minlength:6,maxlength:35},
    fullname:{type:String, required:true},
    dexterity:{type:String, required:true},
    golfBag :{type:[GolfClub.schema], default:[]},
    rounds:{type:Array, default:[]},
    clubsBelongedTo:{type:Array, default:[]},
    dateModified:{type:Date,default:Date.now}
});

module.exports = mongoose.model('User', userSchema);
