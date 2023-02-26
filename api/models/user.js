const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : String,
    email : String,
    image : String,
    mobile : Number,
    fcmToken : String
});

module.exports = mongoose.model('User', userSchema);