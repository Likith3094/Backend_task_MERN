const Hero = require("../models/hero")
const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: process.env.CLOUD_KEY,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})


exports.addhero = async(req,res) =>{
    try{
        const result = await cloudinary.uploader.upload(req.file.path,{folder: "store"})
        const hero = await Hero.create({
            id:req.body.id,
            name:req.body.name,
            power:req.body.power,
            gender:req.body.gender,
            work:req.body.work,
            image:result.secure_url
        })
         res.status(201).json({
             message: "hero added",
             hero
            })
    }catch(err)
    {
        console.error("Add Hero Error:", err);
        res.status(500).json({
        message: err
    })
    }
}

exports.getheroes = async (req,res)=>{
    
    try{

        const hero = await Hero.find()
        res.status(201).json({
    message: "Heroes ",
    hero
 })

    }catch(err){
res.status(500).json({
    message: err,
    
 })
}
}

exports.getbyname = async (req,res)=>{
    
    try{
        const hero = await Hero.findOne({ name: req.params.name })

        res.status(200).json({
    message: "details of hero ",
    hero
 })

    }catch(err){
res.status(500).json({
    message: err  
 })
}
}
    
exports.updatehero = async(req,res)=>{
    try{

        const hero = await Hero.findOneAndUpdate(
            {id: req.params.id },
            req.body,
            {
              new: true,
            runValidators: true,
            }
        )

        res.status(201).json({
    message: "details of hero ",
    hero
 })

    }catch(err){
res.status(500).json({
    message: err,
    
 })
}
}

exports.deletehero =async (req,res)=>{
    
    try{

        const hero = await Hero.findOneAndDelete({id: req.params.id})
        res.status(201).json({
    message: " deleted ",
   
 })

    }catch(err){
res.status(500).json({
    message: err,
    
 })
}
}