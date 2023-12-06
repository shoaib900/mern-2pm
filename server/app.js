const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./Models/user.model");
const jwt = require("jsonwebtoken")

mongoose.connect("mongodb+srv://shoaib:1234567.@cluster0.sj98cl3.mongodb.net/myusers");

app.use(cors());
app.use(express.json());

app.post("/api/register", async (req, res) => {
try {
   await User.create({
      username: req.body.username,
      email:req.body.email,
      password:req.body.password
   })
   return res.json({status:"ok"})
} catch (error) {
   return res.json({status:"error",error:"Duplicate Email"})
}
});

app.post("/api/login", async (req, res) => {

     const user = await User.findOne({
         email:req.body.email,
         password:req.body.password
      })
      if(user){
         const token = jwt.sign({
            username:user.username,
            email:user.email
         },"secret123")

         return res.json({status:"ok",user:token})
      }else{
         return res.json({status:"error",user:false})
      }

})

app.listen(1200, () => console.log("your server is running..."));
