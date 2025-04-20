const mongoose = require("mongoose");

MONGO_URI = "mongodb://localhost:27017/L5SODSTUDENT"

const connection = async () => {
    try{
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB")
    }catch(e){
        console.log("Connection failed", e);
    }
}

connection();
