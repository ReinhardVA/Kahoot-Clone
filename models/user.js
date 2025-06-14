const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter a username"],
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter a strong password"]
    }
},
    { timestamps: true }
)

const User = mongoose.model("User", UserSchema)

module.exports = User