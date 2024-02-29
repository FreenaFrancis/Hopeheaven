const mongoose=require('mongoose')

const GiveRequestSchema=mongoose.Schema({
    name:String,
    volunteername: String,  
    volunteeremail:String,
    purpose:String,
    Description:String,

})

const GetRequestModel=mongoose.model("giverequest",GiveRequestSchema)
module.exports=GetRequestModel;