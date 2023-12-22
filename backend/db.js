const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/KpFoods';

const mongoDB = async()=>{
    await mongoose.connect(mongoURI, {useNewUrlParser: true}, async(err, result)=>{
        if(err){
            console.log("ERROR--", err);
        }
        else{
            console.log("CONNECTED");
            const fetchedData = await mongoose.connection.db.collection("fooditems");
            fetchedData.find({}).toArray((err, data)=>{
                if(err){
                    console.log("ERROR", err);
                }
                else{
                    console.log();
                }
            })
        }
    });
};
module.exports = mongoDB;