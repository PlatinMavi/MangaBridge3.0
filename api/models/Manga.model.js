const mongoose = require("mongoose")

const MangaSchema = new mongoose.Schema({
    name:{type:String},
    image:{type:String},
    desc:{type:String},
    category:{type:[String]},
    view:{type:Number, default:0,},
    browser:{type:String}
}, {
    timestamps: true,
     // Specify the collection name here
  })

const MangaModel = mongoose.model("Manga", MangaSchema)

module.exports = MangaModel