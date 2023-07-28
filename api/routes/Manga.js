const router = require("express").Router()
const mongoose = require("mongoose")
const MangaModel = require("../models/Manga.model")
const UserModel = require("../models/User.model")
const CommentModel = require("../models/Comment.model")


router.get("/all/page", async (req,res) =>{
    const LIMIT = 20
    const page = parseInt(req.query.page || "0")
    
    const totalPages = await calculateTotalPages(LIMIT)
    const all = await MangaModel.find().limit(LIMIT).skip(LIMIT*page)
    res.json({all,totalPages})
})

router.get("/search", async (req, res) =>{
    try {
        const key = req.query.key
        const result = await MangaModel.find({name:{ $regex: key, $options: 'i' }}).limit(4)
        res.json(result)

    } catch (error) {
        res.json(error)
    }
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

router.get("/save/getall/:userId", async (req,res)=>{
    const userId = req.params.userId;
    try {
        const user = await UserModel.findById(userId).populate('saved');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const savedMangas = user.saved.map(manga => manga.toObject());
        res.json(savedMangas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while retrieving saved mangas' });
    }
})

router.get("/check/:user&:manga", async (req, res) => {
    const userId = req.params.user;
    const mangaId = req.params.manga;

    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if mangaId exists in the saved array
        const isMangaSaved = user.saved.includes(mangaId);
        if (isMangaSaved) {
            return res.json({issaved:true});
        } else {
            return res.json({issaved:false});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while checking the manga' });
    }
});

router.get("/save/:user&:manga", async (req, res) => {
    const userId = req.params.user;
    const mangaId = req.params.manga;

    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if mangaId exists in the saved array
        const mangaIndex = user.saved.indexOf(mangaId);
        if (mangaIndex !== -1) {
            // Manga is already saved, so remove it from the array
            user.saved.splice(mangaIndex, 1);
            await user.save();
            return res.json({ issaved: false });
        }

        // Push mangaId to the saved array
        user.saved.push(mangaId);
        await user.save();
        
        res.json({ issaved: true }); // Send success status code
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while saving the manga' });
    }
});

router.get("/comments/:manga", async (req,res)=>{
    const manga = req.params.manga
    const comments = await CommentModel.find({manga:manga}).populate("user")
    res.json(comments)
})

router.post("/comments/add", async (req,res)=>{
    const content = req.body.content
    const user = req.body.user
    const manga = req.body.manga
    
    await CommentModel.create({content:content,manga:manga,user:user})
    const comments = await CommentModel.find({manga:manga}).populate("user")
    res.json(comments)
})

router.post("/comments/delete", async (req,res)=>{
    const id = req.body.id
    const manga = req.body.manga
    
    await CommentModel.deleteOne({_id:id})
    const comments = await CommentModel.find({manga:manga}).populate("user")
    res.json(comments)
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