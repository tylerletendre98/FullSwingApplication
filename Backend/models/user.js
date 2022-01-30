const mongoose = require('mongoose');
const GolfClubSchema = require('./golfClub')

const UserSchema = new mongoose.Schema({
    username:{type:String, required:true, minlength:4, maxlength:25},
    email:{type:String, required:true,minlength:4,maxlength:55},
    password:{type:String, required:true,minlength:6,maxlength:35},
    fullname:{type:String, required:true},
    dexterity:{type:String, required:true},
    golfBag :{type:[GolfClubSchema], default:[]},
    rounds:{type:Array, default:[]},
    dateModified:{type:Date,default:Date.now}
});

const User = mongoose.model('User', UserSchema);
exports.UserSchema = UserSchema
exports.User = User;