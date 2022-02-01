const mongoose = require('mongoose');
const User =require('./user')
const Message = require('./message');

const clubSchema = new mongoose.Schema({
    name:{type:String, required:true, minlength: 4, maxlength:250},
    owner:{type: String, required:true},
    members:{type:[User.schema], default:[]},
    messages:{type:[Message.schema], default:[]},
    dateCreated:{type:Date, default:Date.now},    
})

module.exports = mongoose.model('Club', clubSchema);
