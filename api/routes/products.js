const express = require('express')
const router = express.Router();
const Product = require('../models/product');
const mongoose = require('mongoose');
const product = require('../models/product');

const uri = 'mongodb+srv://AgPriyanshu18:' + 
process.env.MONGO_ATLAS_PW + 
'@cluster0.o52m8h5.mongodb.net/?retryWrites=true&w=majority&&ssl=true'

const client = new MongoClient(uri)



router.get('/', (req,res,next) => {
    res.status(200).json({
        message : 'Handling GET requests to /products'
    })
})


router.post('/', async (req,res,next) => {

    const databse = client.db("test")
    const col = databse.collection("products")  
      
    const product = new Product({
        _id : new mongoose.Types.ObjectId(),
        name : req.body.name,
        price : req.body.price
    });
    
    product.save().then(result => {
        console.log(result);
        res.status(201).json({
            message : "Handliing POST request to /products",
            createdProducts : result
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        })
    });

})

router.get('/:productId', (req,res,next) => {
    const id = req.params.productId;
    // console.log(`Handling get request ${id}`)
    Product.findById(id).exec().then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error : err});
    })
})


module.exports = router;