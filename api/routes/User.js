const router = require("express").Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const UserModel = require("../models/User.model")

const JWTsecret = process.env.JWT_SECRET

router.post('/login', async (req,res) => {
    const {username,password} = req.body;

    try{
      const userDoc = await UserModel.findOne({username});
      const passOk = bcrypt.compareSync(password, userDoc.password);
      if (passOk) {
        // logged in
        jwt.sign({username,id:userDoc._id}, JWTsecret, {}, (err,token) => {
          if (err) throw err;
          res.cookie('token', token).json({
            id:userDoc._id,
            username,
          });
        });
      } else {
        res.status(400).json('wrong credentials');
      }
    } catch(e){
      res.status(400).json("error")
    }

  });

router.post('/register', async (req,res) => {
    const {username,password} = req.body;
    const salt = bcrypt.genSaltSync(10)
    try{
      const userDoc = await UserModel.create({
        username,
        password:bcrypt.hashSync(password,salt),
      });
      res.json(userDoc);
    } catch(e) {
      console.log(e);
      res.status(400).json(e);
    }
  });

router.post('/logout', (req,res) => {
    res.cookie('token', '').json('ok');
});

router.get('/profile', (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, JWTsecret, {}, (err,info) => {
      if (err) {res.status(400).json("Couldn't get profile")};
      res.json(info);
    });
});

module.exports = router