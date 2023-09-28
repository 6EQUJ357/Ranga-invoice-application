let mongoose = require("mongoose")

let addproductschema = mongoose.Schema({
    productname : {
        type : String,
        require:true
    },
    producttype : {
        type : String,
        require:true
    },
    productprice : {
        type : String,
        require:true
    },
    items : {
        type : Number,
        require:true
    },
    productdesc : {
        type : String,
        require:true
    },
    img : {
        type:Array,
        require:true 
    },
    date: {
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("addproducts", addproductschema)