const mongoose = require('mongoose');
const userSchema = require('./user')

const clubSchema = new mongoose.Schema({
    name:{type:String, required:true, minlength: 4, maxlength:250},
    owner:{type: userSchema, required:true},
    members:{type:[userSchema], default:[]},
    messages:{},
    events:{},
    dateCreated:{type:Date, default:Date.now},    
})

const Club = mongoose.model('Club', clubSchema);
module.exports = Club;