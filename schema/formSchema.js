const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:String,
    age:String,
    phoneNumber:Number,
    gender:String
});

module.exports=mongoose.model("myUserSchema",userSchema);

