const mongoose = require("mongoose")

const User = new mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
})

const model = mongoose.model("User",User)

module.exports = model;