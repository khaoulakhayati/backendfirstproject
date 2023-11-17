var express=require("express")
const{getProduct, AddProduct,DeleteProduct, UpdateProduct,FindProduct, DeleteManyProducts}=require("../Controllers/Controller")
const { deleteMany } = require("../Module/module")
var router=express.Router()
router.get("/get/",getProduct)
router.post("/post",AddProduct)
router.delete("/delete/:id",DeleteProduct)
router.put("/update/:id",UpdateProduct)
router.get("/find/:id",FindProduct)
router.get("/get/:id",DeleteManyProducts)

module.exports = router;




