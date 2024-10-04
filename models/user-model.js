const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
fullname:{
    type:string,
    minLength: 3,
    trim: true
},
email:string,
password:string,
cart:{
    type: Array,
    default:[] 
},
isadmin :Boolean,
orders: {
   type: Array,
   default:[] 
},
contect:  Number,
picture: string,
});

module.exports= mongoose.model("user",userSchema);