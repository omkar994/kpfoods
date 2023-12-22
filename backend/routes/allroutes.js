const express = require('express');
const router = express.Router();
const User = require('../models/User');
const FoodItm = require('../models/Fooditem');

router.post("/createuser", async(req, res)=>{
    
    try {
        console.log("REQUEST", req.body);
        await User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            location : req.body.location
        });
        res.json({success : true});
    } catch (err) {
        console.log(err);
        res.json({success : false});
    }
});

router.post("/createfooitm", async(req ,res)=>{
    console.log("THIS IS REQUEST BODY",req.body);
    try {
        await FoodItm.create({
            name : req.body.name,
            img : req.body.img,
           // option : req.body.option,
            description : req.body.description
        });
        res.json({success : true});
    } catch (err) {
        console.log(err);
        res.json({success : false});
    }
})

module.exports= router;
