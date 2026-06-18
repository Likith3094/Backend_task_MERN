const {addhero,getheroes,getbyname,updatehero,deletehero} = require("../controllers/herocontroller")
const express = require("express")
const router = express.Router()
const multer = require("multer")

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
       cb(null,"uploads/");
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now() + "-"+ file.originalname)
    }
})

const upload = multer({
    storage
})

router.post("/add/hero",upload.single("image"),addhero)

router.get("/get/heroes",getheroes)

router.get("/get/hero/:name",getbyname)

router.put("/update/hero/:id",updatehero)

router.delete("/del/hero/:id",deletehero)

module.exports = router