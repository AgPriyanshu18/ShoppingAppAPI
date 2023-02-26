const express = require('express')
const router = express.Router();
const Order = require('../models/order');
const mongoose = require('mongoose');

router.get('/', async (req,res,next) => {
    await Order.find().exec().then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        })
    });
})

router.post('/:orderID', async (req,res,next) => {
    const order = new Order({
        _id : req.params.orderID,
        history : req.body.history
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
    const orderId = req.params.orderId;
    await Order.findById(orderId).exec().then(doc =>{
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err => {
        console.log(err);
        res.status(500).json({error : err});
    })
    
})

router.delete('/:orderId', async (req,res,next) => {

    const OrderId = req.params.orderId;
    await Order.deleteOne({}).where("_id").equals(OrderId).exec().then(doc =>{
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err => {
        console.log(err);
        res.status(500).json({error : err});
    })
})

module.exports = router;