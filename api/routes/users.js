const express = require('express')
const router = express.Router();
const Order = require('../models/order');
const mongoose = require('mongoose');

router.post('/', async (req,res,next) => {
    const user = new user({
        _id : req.body.id,
        name : req.body.name,
        email : req.body.email,
        image : req.body.image,
        mobile : req.body.mobile,
        fcmToken : req.body.fcmToken
    });
    await user.save().then(result => {
        console.log(result);
        res.status(201).json({
            message : "Handling POST request to /user",
            createdUsers : user
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        })
    });
})

router.get('/:UserId', async (req,res,next) => {
    const userID = req.params.UserId;
    await User.findById(userID).exec().then(doc =>{
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err => {
        console.log(err);
        res.status(500).json({error : err});
    })
    
})

router.delete('/:userID', async (req,res,next) => {

    const userID = req.params.userID;
    await Order.deleteOne({}).where("_id").equals(userID).exec().then(doc =>{
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err => {
        console.log(err);
        res.status(500).json({error : err});
    })
})

module.exports = router;