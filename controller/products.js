const myProductsModel=require('../schema/productSchema');

exports.getProducts=async(req,res)=>{
    console.log("started hitting");
    const data=await myProductsModel.find();
    res.status(200).json(data);
}
exports.addProducts=async(req,res)=>{
    console.log("started adding products");
    const {name,type,description}=req.body;
    const data=await myProductsModel.create({
        name,type,description
    });
    if(data){return res.status(200).json({message:"added"})}
    return res.status(404).json({error:"not added"})
}
exports.updateProduct=async(req,res)=>{
    console.log("started updating products");
    const {name,description,type}=req.body;
    const id=req.params.id;
    const updatedata=await myProductsModel.findByIdAndUpdate(
        id,{
            name,description,type
        }
    );
    if(updatedata){return res.status(200).json({message:"updated"})}
    return res.status(404).json({error:"not updated"})
}
