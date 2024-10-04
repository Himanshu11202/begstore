const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
image:string,
 name:string,
 price:Number,
 discount:{
    type: Number,
    default:0
},  
 bgcolor:string,
 textcolor:string,
 penalcolor:string,
});

module.exports= mongoose.model("product",productSchema);