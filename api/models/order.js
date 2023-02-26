const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id : String,
    history : [{
        title : String,
        price : Number,
        date : String
    }]
})

module.exports = mongoose.model('Order', orderSchema);