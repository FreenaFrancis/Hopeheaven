const mongoose=require('mongoose')
const donateSchema=mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String
    },
    description:{
        type:String
    },
    name:{
        type:String
    },
    donateCategory:{
        type:String
    },
    amount:{
        type:Number
    }

})
const donationModel=mongoose.model('donation',donateSchema)
module.exports=donationModel