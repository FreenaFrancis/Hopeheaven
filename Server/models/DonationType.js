const mongoose=require('mongoose')
const donateCategorySchema=mongoose.Schema({
    donateCategory:{
        type:String
    },
    image:{
        type:String
    },
    
})

const donateCategoryModel=mongoose.model('donatecategory',donateCategorySchema)
module.exports=donateCategoryModel