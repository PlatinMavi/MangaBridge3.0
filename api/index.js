const express = require("express")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const dotenv = require("dotenv").configDotenv()
const cors = require("cors")
// requirements

const app = express()

app.use(cors({credentials:true,origin:"http://localhost:3000"}))
app.use(express.json())
app.use(cookieParser())
// middleware

const userRoutes = require("./routes/User")
const mangaRoutes = require("./routes/Manga")

app.use("/",userRoutes)
app.use("/manga", mangaRoutes)

mongoose.connect(process.env.DB_URI)
const connection = mongoose.connection
connection.once("open",()=>{
    console.log("mongoose connection have been made!")
})
// database

app.listen("4000", ()=>{
    console.log("4000 port on")
})