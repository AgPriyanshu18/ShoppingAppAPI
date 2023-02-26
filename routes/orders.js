const express = require('express')
const router = express.Router();
const Order = require('../models/order');
const mongoose = require('mongoose');

router.get('/', (req,res,next) => {
    res.status(200).json({
        message : 'Handling GET requests to /orders'
    })
})

router.post('/', async (req,res,next) => {
    const order = new Order({
        _id : new mongoose.Types.ObjectId(),
        name : req.body.name,
        price : req.body.price
    });
    await order.save().then(result => {
        console.log(result);
        res.status(201).json({
            message : "Handling POST request to /orders",
            createdOrders : order
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        })
    });
})

router.get('/:orderId', async (req,res,next) => {
    const search_order = await Order.findOne({
        id : orderId
    })
    res.status(200).json({
        message : 'Handling GET requests to /orders',
        order : search_order
    });
})

router.delete('/:orderId', (req,res,next) => {
    res.status(200).json({
        message : 'Order deleted',
        orderId : req.params.orderId
    })
})

module.exports = router;