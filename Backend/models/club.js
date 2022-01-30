const mongoose = require('mongoose');
const UserSchema = require('./user')
const MessageSchema = require('./message')

const ClubSchema = new mongoose.Schema({
    name:{type:String, required:true, minlength: 4, maxlength:250},
    owner:{type:UserSchema, required:true},
    members:{type:[UserSchema], default:[]},
    messages:{type:[MessageSchema], default:[]},
    dateCreated:{type:Date, default:Date.now},    
})

const Club = mongoose.model('Club', ClubSchema);
exports.ClubSchema = ClubSchema
exports.Club = Club;