


const mongoose=require('mongoose')
const volunteerSchema=new mongoose.Schema({
    name:String,
    volunteername: String,
    volunteeremail:String,
    password:String,
    
})

const VolunteerModel=mongoose.model("volunteer", volunteerSchema)
module.exports=VolunteerModel;