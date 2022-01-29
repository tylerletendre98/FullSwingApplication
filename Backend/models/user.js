const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{type:String, required:true, minlength:4, maxlength:25},
    email:{type:String, required:true,minlength:4,maxlength:55},
    password:{type:String, required:true,minlength:6,maxlength:35},
    fullname:{type:String, required:true},
    rounds:{type:Array, default:[]},
    friends:{type:Array,default:[]},
    dateModified:{type:Date,default:Date.now}
});

const User = mongoose.model('User', userSchema);
module.exports = User;