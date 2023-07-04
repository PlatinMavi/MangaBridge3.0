const router = require("express").Router()
const mongoose = require("mongoose")
const MangaModel = require("../models/Manga.model")


router.get("/all", async (req,res) =>{
    const all = await MangaModel.find()
    res.json(all)
})

router.get("/topfive", async (req,res)=>{
    const topfive = await MangaModel.find({}).sort({view:-1}).limit(5) 
    res.json(topfive)
})

// router.get("")

router.get("/:name", async (req, res)=>{
    
    try {
        const name = req.params.name
        const MangaQuery = await MangaModel.findOne({browser:name})
        const id = MangaQuery._id
        const update = await MangaModel.findByIdAndUpdate({id, view:MangaQuery.view+1})
        console.log(update)
        res.json(update)

    } catch (error) {
        res.json(error)
    }
})

router.post("/add", async (req, res)=>{
    const {Name,Img,Desc,Categorys,Browser} = req.body
    try {
        const MangaDoc = await MangaModel.create({name:Name,image:Img,desc:Desc,category:Categorys,browser:Browser})
        console.log(MangaDoc)
        res.json("ok")
    } catch (error) {
        res.json(error)
    }
})

module.exports = router