const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    sender:{type:String, required:true},
    text:{type:String},
    dateSent:{type:Date, default:Date.now}
});

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
module.exports = MessageSchema;