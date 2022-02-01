const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender:{type:String, required:true},
    text:{type:String},
    dateSent:{type:Date, default:Date.now}
});

module.exports = mongoose.model('Message', messageSchema);
