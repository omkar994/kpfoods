const express = require('express');
const router = express.Router();
const User = require('../models/User');
const FoodItm = require('../models/Fooditem');
const { body, validationResult } = require('express-validator');

router.post("/createuser",
            [body('email').isEmail(), body('password').isLength({min:5})] ,
            async (req, res) => {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({errors : errors.array()});
        }
        await new User(req.body).save();
        console.log("user created");
        res.json({ success: true });
    } catch (err) {
        console.log(err);
        res.json({ success: false });
    }
});


router.post("/createfooitm", async (req, res) => {
    try {
        await new FoodItm(req.body).save();
        // await FoodItm.create({
        //     name: req.body.name,
        //     img: req.body.img,
        //     description: req.body.description,
        //     options: req.body.options
        // })
        console.log("food itm Created");
        res.json({ success: true });
    } catch (err) {
        console.log(err);
        res.json({ success: false });
    }

})

module.exports = router;
