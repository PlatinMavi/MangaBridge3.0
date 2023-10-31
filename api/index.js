const express = require("express")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const dotenv = require("dotenv").configDotenv()
const cors = require("cors")
const path = require('path');
// requirements

const app = express()
app.use("Collection",express.static(path.join(__dirname, 'Collection')))

app.use(cors({credentials:true,origin:"http://localhost:3000", methods:["GET","POST"]}))
app.use(express.json())
app.use(cookieParser())
// middleware

const userRoutes = require("./routes/User")
const mangaRoutes = require("./routes/Manga")
const chapterRoutes  = require("./routes/Chapter")

app.use("/user",userRoutes)
app.use("/manga", mangaRoutes)
app.use("/chapter", chapterRoutes)

app.get("/Collection/:ad", (req,res)=>{
    try{
        res.sendFile(path.join(__dirname, `Collection/${req.params.ad}`))
    }catch{}
})

app.get("/",(req,res)=>{
    res.json("Welcome to MangaBridge API !")
})

mongoose.connect(process.env.DB_URI)
const connection = mongoose.connection
connection.once("open",()=>{
    console.log("mongoose connection have been made!")
})
// database

app.listen("4000", ()=>{
    console.log("4000 port on")
})