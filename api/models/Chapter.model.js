const mongoose = require("mongoose")

const ChapterSchema = new mongoose.Schema({
    number:{type:Number},
    url:{type:String},
    manga:{type: mongoose.Schema.Types.ObjectId, ref: 'Manga'},//manga id
    fansub:{type:String},//fansub 
}, {
    timestamps: true,
     // Specify the collection name here
  })

const ChapterModel = mongoose.model("Chapter",ChapterSchema)

module.exports = ChapterModel