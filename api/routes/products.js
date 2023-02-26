const express = require('express')
const router = express.Router();
const Product = require('../models/product');
const mongoose = require('mongoose');
const product = require('../models/product');



router.get('/', async (req,res,next) => {
    const ans = await Product.find().exec().then(doc =>{
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        })
    });
})

router.get('/:productId', (req,res,next) => {
    const id = req.params.productId;
    Product.findById(id).exec().then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err => {
        console.log(err);
        res.status(500).json({error : err});
    })
})


module.exports = router;