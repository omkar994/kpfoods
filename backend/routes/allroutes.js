const express = require('express');
const router = express.Router();
const User = require('../models/User');

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

module.exports= router;
