const router = require("express").Router()
const User = require("../models/user.model")

router.get("/",(req, res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("error:"+ err))
})

router.post("/add",(req,res)=>{
    const username = req.body.username

    const newUser = new User({username})
    
    newUser.save()
    .then(()=>res.json("user added"))
    .catch(err => res.status(400).json("error:"+ err))
})

module.exports = router