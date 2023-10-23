const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{type:String,unique:true},
    age:{type:String,unique:true},
    phoneNumber:{type:Number,unique:true},
    gender:{type:String,unique:true}
});

module.exports=mongoose.model("myUserSchema",userSchema);

