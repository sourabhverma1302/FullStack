const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{type:String,unique:true},
    age:{type:String},
    phoneNumber:{type:Number,unique:true},
    gender:{type:String}
});

module.exports=mongoose.model("myUserSchema",userSchema);

