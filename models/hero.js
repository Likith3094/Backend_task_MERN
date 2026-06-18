const mongoose = require("mongoose")

const Heroschema = new mongoose.Schema({
    id:{
        type:Number
    },
    name:{
        type:String
    },
    power:{
        type:String
    },
    gender:{
        type:String
    },
    work:{
        type:String
    },
    image:{
        type:String
    }

})

module.exports = mongoose.model("Heroes",Heroschema)