const router = require("express").Router()
const mongoose = require("mongoose")
const MangaModel = require("../models/Manga.model")


router.get("/all/page", async (req,res) =>{
    const LIMIT = 1
    const page = parseInt(req.query.page || "0")
    
    const totalPages = await calculateTotalPages(LIMIT)
    const all = await MangaModel.find().limit(LIMIT).skip(1*page)
    res.json({all,totalPages})
})

router.get("/all", async (req,res) =>{
    const all = await MangaModel.find()
    res.json(all)
})

router.get("/topfive", async (req,res)=>{
    const topfive = await MangaModel.find({}).sort({view:-1}).limit(4) 
    res.json(topfive)
})


router.get("/:name", async (req, res)=>{
    
    try {
        const name = req.params.name
        const MangaQuery = await MangaModel.findOne({browser:name})
        const id = MangaQuery._id
        const update = await MangaModel.findByIdAndUpdate(id,{ view:MangaQuery.view+1})
        
        res.json(update)

    } catch (error) {
        res.json(error)
    }
})

router.post("/add", async (req, res)=>{
    const {Name,Img,Desc,Categorys,Browser} = req.body
    try {
        const MangaDoc = await MangaModel.create({name:Name,image:Img,desc:Desc,category:Categorys,browser:Browser})
        
        res.json("ok")
    } catch (error) {
        res.json(error)
    }
})

// FUNCTIONSSSSS

async function calculateTotalPages(page) {
    try {
      const totalDocuments = await MangaModel.countDocuments({});
      const totalPages = Math.ceil(totalDocuments / page);
      return totalPages;
    } catch (error) {
      // Handle the error if necessary
      console.error("Error calculating total pages:", error);
      return 0; // Default value or error handling as needed
    }
  }

module.exports = router