const mongoose=require('mongoose')
const feedbackSchema=mongoose.Schema({

    name:{
        type:String
    },email:{
        type:String
    },
    feedback:{
        type:String
    }
})

const feedbackModel=mongoose.model("feedback",feedbackSchema)
module.exports=feedbackModel