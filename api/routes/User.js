const router = require("express").Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const UserModel = require("../models/User.model")

const JWTsecret = process.env.JWT_SECRET

router.post("/login", async(req,res)=>{
    const {username, password} = req.body
    const passwordStabilazed = password
    const usernameStabilazed = username
    const Userdoc = await UserModel.findOne({username:usernameStabilazed})

    if(Userdoc === null){
        res.json({msg:"invalid Username"})
    }else{
        const isOK = bcrypt.compareSync(passwordStabilazed, Userdoc.password)
        if (isOK) {
            jwt.sign({usernameStabilazed,id:Userdoc._id},JWTsecret,{},(err,token)=>{
                if(err){console.log(err)}
                else{res.cookie("token",token).json({msg:"cookie has been applied"}) }
                  
            })
        } else {
            res.json({msg:"invalid password",isOK:isOK})
        }
    }
})
router.post("/register", async(req,res)=>{
    try {
        const {username, password} = req.body
        const salt = bcrypt.genSaltSync(10)
        const hp = bcrypt.hashSync(password, salt)
        const UserDoc = await UserModel.create({username,password:hp,salt})
        console.log(UserDoc)
        res.json({msg:"user created"})
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
})
router.post("/logout", (req,res)=>{
    res.cookie("token","").json({msg:"cookie has been reseted"})
})
router.get('/profile', (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, JWTsecret, {}, (err,info) => {
      if (err){res.status(200).json("")};
    //   res.json(info);
    });
  });

module.exports = router