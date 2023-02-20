const express = require("express")
const app = express()
app.use(express.json())
const cors=require("cors")
app.use(cors())
const {connection} = require("./db")
const{userRoute}= require("./Routes/userRoutes")
const{empRoutes} =require("./Routes/empRoutes")
const{authentication}= require("./middleware/authentication")
app.get("/",(req,res)=>{
    res.send("welcome")
})

app.use("/user",userRoute)
app.use(authentication)
app.use("/emp",empRoutes)











app.listen(9090,async()=>{
try{
    await connection
console.log("connect To the DB.")
}catch(err){
    console.log(err.message)
}

    console.log("server is runnning the port on 9090")
})
