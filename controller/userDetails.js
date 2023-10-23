const myUserSchema=require('../schema/formSchema');

exports.addUser=async(req,res)=>{
    console.log("user started adding");
    const {name,age,phoneNumber,gender}=req.body;
    console.log("myuserSchema",myUserSchema);
    const user=await myUserSchema.find({name});
    if(user){return res.status(404).json({error:"error"});};
    const data=await myUserSchema.create({
        name,age,phoneNumber,gender
    });
    if(data) {return res.status(200).json({message:"added"})}
    return res.status(404).json({error:"error"});
}