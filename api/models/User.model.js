const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required: true,
    },
    // salt:{
    //     type:String,
    // },
    saved:[{
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Manga'
    }],
}, { timestamps: true })

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel