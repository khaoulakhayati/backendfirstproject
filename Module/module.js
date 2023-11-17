const mongoose = require("mongoose");

const product_schema = new mongoose.Schema({
    name:{type:String,required:true},
    description:String,
    price: Number,
    Image:String
},
     {
        // date de la creation ou bien de la modification dee cet objet la base de donnes
        timestamps: true
     }

)
module.exports=mongoose.model("products",product_schema) // asna3li collection samiha products w  hot f wostha l schema mte3na