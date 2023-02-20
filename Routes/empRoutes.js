
const express = require("express")
const empRoutes = express.Router()
const {empModel} = require("../Model/empModel")

//adding emp info
empRoutes.post("/add",async(req,res)=>{
let payload = req.body
try{
let newemp = new empModel(payload)
await newemp.save()
res.send({"msg":"new employe register done.."})
}catch(err){
    res.send({"error":err.message})
}

})

//geting emp info
empRoutes.get("/get",async(req,res)=>{
    try{
const emp = await empModel.find()
res.send(emp)
    }catch(err){
    res.send({"error":err.message})
}

})

//update
empRoutes.patch("/update/:id",async(req,res)=>{
    const id = req.params.id
    const payload =req.body
    try{
        const query = await empModel.findByIdAndUpdate({_id:id},payload)
   res.send({"sms":"update."})
    }catch(err){
    res.send({"error":err.message})
}

})

//delete
empRoutes.delete("/delete/:id",async(req,res)=>{
    const _id =req.params.id
    try{
let user =await empModel.findByIdAndDelete({_id})
res.send("delete")
    }catch(err){
    res.send({"error":err.message})
}
})
module.exports={
    empRoutes
}








module.exports ={
    empRoutes
}