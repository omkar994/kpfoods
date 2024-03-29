const express = require('express');
const router = express.Router();
const User = require('../models/User');
const FoodItm = require('../models/Fooditem');
const FoodCat = require('../models/Foodcategory');
const Order = require('../models/Orders');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const secret = 'your-secret-key';

router.post("/createuser",
    [body('email').isEmail(), body('password').isLength({ min: 5 })],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const salt = bcrypt.genSalt(5);
            let hashedPasswd = await bcrypt.hash(req.body.password, parseInt(salt));
            req.body.password = hashedPasswd;

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

});

router.post("/login", async (req, res) => {
    const email = req.body.email;
    try {
        const user = await User.findOne({ email });
        const unHashedPasswd = await bcrypt.compare(req.body.password, user.password);
        if (!user || user.email !== req.body.email || !unHashedPasswd) {
            return res.status(400).json({ error: "Invalid Creds" });
        }
        else {
            const payload = {
                id: user.ObjectId
            };
            const authToken = jwt.sign(payload, secret);
            res.json({ success: true, authToken: authToken });
        }
    } catch (err) {
        console.log("ERROR", err);
    }
});

router.get("/getfooitems", async (req, res) => {
    try {
        const foodItems = await FoodItm.find({});
        res.send(foodItems);
    } catch (err) {
        console.log("ERROR", err.message);
        res.send("Something went wrong");
    }

});

router.post("/cretefoocat", async (req, res) => {
    try {
        await new FoodCat(req.body).save();
        res.json({ success: true });
    } catch (err) {
        console.log(err);
        res.json({ success: false });
    }
});

router.get("/getfoocategory", async (req, res) => {
    try {
        const foodCategory = await FoodCat.find({});
        res.send(foodCategory);
    } catch (err) {
        console.log("ERROR", err.message);
        res.send("Something went wrong");
    }
});

router.post("/createorder", async(req, res)=>{
    const data = req.body.order_data;
    await data.splice(0, 0, {Order_date : req.body.order_date});
  

    const eId = await Order.findOne({'email' : req.body.email}); 
    if(eId==null){

        try {
            await Order.create({
                email : req.body.email,
                order_data : [data]
            }).then(()=>{
                res.json({success : true})
            })
        } catch (error) {
            console.error(error.message);
            //res.send(status, body);
            
        }
      
    }

    else{
        try {
            await Order.findOneAndUpdate({email : req.body.email},
                { $push : {order_data : data} }).then(()=>{
                    res.send({success : true});
                })
        } catch (error) {
            console.error(error.message);
            res.send("Server error", error.message);
        }
    }
});

router.post("/myorders", async(req, res)=>{

    try {
        const myOrders = await Order.findOne({"email" : req.body.email});
        res.json({myOrders : myOrders});
    } catch (error) {
        console.error(error.message);
            res.send("Server error", error.message);
    }
});

module.exports = router;
