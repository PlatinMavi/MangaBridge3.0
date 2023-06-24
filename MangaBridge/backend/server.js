//requirements
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

//middleware
const app = express()
app.use(cors())
app.use(express.json())

//database
const uri = process.env.URI
mongoose.connect(uri)
const connection = mongoose.connection
connection.once("open",()=>{
    console.log("mongoose connection have been made!")
})

//routers
const userRouter = require("./Routers/user")
// const mangaRouter = require("./Routers/manga")
// app.use("/manga", mangaRouter)
app.use("/user", userRouter)

app.listen(5000, ()=>{
    console.log("5000 portu dinleniyor")
})