const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title : String,
    desc : String,
    image : String,
    price : Number,
    inStock : Boolean,
    inCart : Boolean
});

module.exports = mongoose.model('Product', productSchema);