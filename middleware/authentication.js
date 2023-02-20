const jwt = require("jsonwebtoken")


const authentication = (req,res,next)=>{
    const token = req.headers.as
    if(token){
        jwt.verify(token,'masai',(err,decoder)=>{
if(decoder){
    req.body.user=decoder.userID
    next()
}else{
    res.send({"msg":"login first"})
}

 }) }
 else{
    res.send({"msg":"login first"})
 }
    }
module.exports={
    authentication
}