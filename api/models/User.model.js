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
    salt:{
        type:String,
        required:true
    }
}, { timestamps: true })

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel