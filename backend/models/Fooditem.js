const mongoose = require('mongoose');
const {Schema} = mongoose;

const FoodItemSchema = new Schema({
    
        name : {
            type : String,
            required : true
        },
        img : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        //option : [{half : Number, full:Number}]
    
});

module.exports= mongoose.model("fooditem", FoodItemSchema);