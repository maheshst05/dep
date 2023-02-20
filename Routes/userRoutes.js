//const mongoose = require("mongoose")
const express = require("express")
const userRoute = express.Router()
const {userModel} =require("../Model/userModel")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
userRoute.get("/",async(req,res)=>{
    res.send("Routes heree.....")
})
//registration part
userRoute.post("/register",async(req,res)=>{
let {name,email,pass}= req.body
try{
    bcrypt.hash(pass, 5, async function(err, hash) {
        // Store hash in your password DB.
    if(err){
        res.send({"error":err.message}) 
    }else{
        const newuser = new userModel({name,email,pass:hash})
          await newuser.save()
          res.send({"msg":"new user has been register done..."})
    }
    
    });

}catch(err){
    res.send({"error":err.message})
}

})


//login
userRoute.post("/login",async(req,res)=>{
    try{
        const {email,pass}= req.body

const user = await userModel.find({email})
if(user.length>0){
    bcrypt.compare(pass, user[0].pass, function(err, result) {
        if(result){
        const token = jwt.sign({ userID: user[0]._id }, 'masai');
        res.send({"msg":"Login Successfull","token":token})
        } 
        else {res.send({"msg":"Wrong creadiancial"})}
        });
}
else{
    res.send({"msg":"Wrong creadiancial"})
}

    }catch(err){
        res.send({"error":err.message})
    }
})


module.exports={
    userRoute
}