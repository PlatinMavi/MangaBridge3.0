const router = require("express").Router()
const mongoose = require("mongoose")
const ChapterModel = require("../models/Chapter.model")

router.post("/add", async (req,res)=>{
    const {number,Url,Manga,Fansub} = req.body
    try {
        const ChapterDoc = await ChapterModel.create({number:number,url:Url,manga:Manga,fansub:Fansub})
        res.json("ok")
    } catch (error) {
        res.json(error)
    }
})

router.get("/lasttw", async (req, res) => {
    try {
        const latestChapters = await ChapterModel.aggregate([
            { $sort: { createdAt: -1 } }, // Sort by createdAt in descending order
            { $group: { _id: "$manga", chapter: { $first: "$$ROOT" } } }, // Group by manga and get the first document (latest chapter) for each manga
            { $replaceRoot: { newRoot: "$chapter" } }, // Replace the root to get the complete chapter documents
            {
                $lookup: {
                    from: 'mangas', // Use the actual name of the 'mangas' collection
                    localField: 'manga',
                    foreignField: '_id',
                    as: 'manga'
                }
            },
            { $unwind: '$manga' }, // Deconstruct the 'manga' array created by the $lookup stage
        ]);

        res.json(latestChapters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the latest chapters.' });
    }
});

router.get("/relevant/:id", async (req,res) =>{
    const manga = req.params.id
    const chapters = await ChapterModel.find({manga:manga}) 
    res.json(chapters)
})

module.exports = router