const express = require ('express');
const app = express();
const userModel = require("./models/user.js");
const postModel = require("./models/post.js");
const cookieParser = require('cookie-parser');
const bcrypt  = require('bcrypt');
const jwt = require('jsonwebtoken');
const Post = require('./models/post');
const User = require('./models/user'); 

app.set("view engine", "ejs");
app.use(express.json());  // For parsing application/json
app.use(express.urlencoded({ extended: true }));  // For parsing application/x-www-form-urlencoded

app.use(cookieParser());

app.get("/",(req, res)=>{
    res.send("  ");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});