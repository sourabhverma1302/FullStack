const express=require('express');
const {getProducts,addProducts,updateProduct}=require('./controller/products');

const router=express.Router();

router.route('/products').get(getProducts);
router.route('/addProduct').post(addProducts);
router.route('/updateProduct/:id').put(updateProduct);

module.exports=router;