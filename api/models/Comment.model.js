const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    content:{type:String},
    manga:{type: mongoose.Schema.Types.ObjectId, ref: 'Manga'},//manga id
    user:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
}, {
    timestamps: true,
     // Specify the collection name here
  })

const CommentModel = mongoose.model("Comment",CommentSchema)

module.exports = CommentModel