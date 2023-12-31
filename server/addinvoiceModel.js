let mongoose = require("mongoose")

let AddinvoiceModel = mongoose.Schema({
    invoiceno : {
        type : String,
        require : true,
        unique : true
    },
    dateofpurchase : {
        type : String,
        require : true
    },
    paymentstatus : {
        type : String,
        require : true
    },
    lotnumber : {
        type : String,
        require : true
    },
    vendorname : {
        type : String,
        require : true
    },
    vendorGSTno : {
        type : String,
        require : true
    },
    vendoremail : {
        type : String,
        require : true
    },
    vendornumber :{
        type : String,
        require : true
    },
    vendoraddress : {
        type : String,
        require : true
    },
    paymentmethod : {
        type : String,
        require : true
    }, 
    holdername :  {
        type : String,
        require : true
    }, 
    cardnumber : {
        type : String,
        require : true
    },
    // subtotal : {
    //     type : String,
    //     require : true
    // }, 
    // SGST : {
    //     type : String,
    //     require : true
    // }, 
    // CGST : {
    //     type : String,
    //     require : true
    // }, 
    totalAmount : {
        type : String,
        require : true
    }, 
    receiveAmount : {
        type : String,
        require : true
    },
    producttype : {
        type : String,
        require : true
    },
    rows : {
        type : Array,
        require : true
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("AddinvoiceModel", AddinvoiceModel)