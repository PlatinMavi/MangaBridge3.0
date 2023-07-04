const mongoose = require("mongoose")

const ChapterSchema = new mongoose.Schema({
    number:{type:Number},
    url:{type:String},
    manga:{type:String},//manga id
    fansub:{type:String},//fansub 
}, { timestamps: true })

const ChapterModel = mongoose.Model("Chapter",ChapterSchema)

module.exports = ChapterModel