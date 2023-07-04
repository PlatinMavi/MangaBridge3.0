const router = require("express").Router()
const mongoose = require("mongoose")
const MangaModel = require("../models/Manga.model")


router.get("/all", async (req,res) =>{
    const all = await MangaModel.find()
    res.json(all)
})

router.get("/:name", async (req, res)=>{
    const name = req.params.name
    try {
        const MangaQuery = await MangaModel.findOne({name:name})
        const update = await MangaModel.findOneAndUpdate({name:name, view:MangaQuery.view+1})
        res.json(update)

    } catch (error) {
        res.json(error)
    }
})

router.post("/add", async (req, res)=>{
    const {Name,Img,Desc,Categorys} = req.body
    try {
        const MangaDoc = await MangaModel.create({name:Name,image:Img,desc:Desc,category:Categorys})
        console.log(MangaDoc)
        res.json("ok")
    } catch (error) {
        res.json(error)
    }
})

module.exports = router