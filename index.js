const express = require('express');
const app = express()
const dotenv = require('dotenv');
dotenv.config()
const connectdb = require('./config/db')
const Hero = require('./models/hero')
const herorouter = require("./routes/herorouter")

connectdb()

app.use("/api",herorouter)

app.get("/",(req,res)=>{
   res.send("server is working ")
})

app.listen(3002,()=>{
    console.log("server .started")
})