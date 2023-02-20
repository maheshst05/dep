const mongoose = require("mongoose")

const empSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    city:{type:String,required:true}
})

const empModel = mongoose.model("emp",empSchema)

module.exports={
    empModel
}