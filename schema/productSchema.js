const mongoose=require('mongoose');

const productsSchema=mongoose.Schema({
    name:String,
    type:String,
    description:{
        type:String,
        required:[true,"This field is required"]
    }
});

module.exports=mongoose.model("myProductsModel",productsSchema);