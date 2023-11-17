const products=require("../Module/module")
exports.getProduct=async(req,res)=>{
try {
   const Allproducts=await products.find //bsh trajaali un tableau li fih l products mteaana 
res.status(200).send({message:"ok",Allproducts}) // shnabathou tableau keml fi objet ki yabda cas de success status =200

} catch (error) {
    res.status(500) //500 yaani erreur m serveur w 400 yaani erreur men partie front (redux)
    .send({message:"erreur"})
}

}
exports.AddProduct=async(req,res)=>{
    try {
        const product=new products(req.body)
        await product.save()
        res.status(200).send({message:"ok",product})

    } catch (error) {
        res.status(500) 
        .send({message:"erreur"})
    }
}
exports.DeleteProduct=async(req,res)=>{
    try {
        const product=await products.findByIdAndDelete(req.params.id)
        res.status(200).send({message:"product deleted",product})

    } catch (error) {
        res.status(500) 
        .send({message:"erreur"})
    }
}

exports.UpdateProduct=async(req,res)=>{
    try {
        const product=await products.findByIdAndUpdate(req.params.id,{$set:req.body})// maneha emshi l objet li id mteou edheka w set f blastou l object li f req.body

        res.status(200).send({message:"product updated",product})



    } catch (error) {
        res.status(500) 
        .send({message:"erreur"})
    }
}

exports.FindProduct=async(req,res)=>{
    try {
        const product=await products.findById(req.params.id)
        res.status(200).send({message:"product existant",product})



    } catch (error) {
        res.status(500) 
        .send({message:"product non existant"})
    }
}


exports.DeleteManyProducts=async(req,res)=>{
    const {data}=req.body
    try {
        const product=await products.deleteMany({_id:{$in:data}})
        res.status(200).send({message:"products deleted",product})



    } catch (error) {
        res.status(500) 
        .send({message:"erreur"})
    }
}

