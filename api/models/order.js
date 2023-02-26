const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    title : String,
    price : Number,
    date : String
});

module.exports = mongoose.model('Order', orderSchema);