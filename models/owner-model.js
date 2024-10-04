const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const ownerSchema = mongoose.Schema({
fullname:{
    type:string,
    minLength: 3,
    trim: true
},
email:string,
password:string,

products: {
   type: Array,
   default:[] 
},
picture: string,
gstin: string,
});

module.exports= mongoose.model("owner",ownerSchema);