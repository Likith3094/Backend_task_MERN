const mongoose = require("mongoose")

const connectdb = async()=>{
    try{
         await mongoose.connect(process.env.CONNECTION_STRING)
         console.log("connnected to DB")
    }
    catch(err)
    {
        console.log(err)
    }
    
}

module.exports = connectdb;