const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require('./routes/api');
//set up express app
const app =express();
//middleware 
app.use(bodyParser.json());
//connect to MongoDB
const uri=
    'mongodb+srv://AdminDB:<password>@restapi.3ehu0z5.mongodb.net/';
mongoose.connect(uri,{useNewUrlParser:true});
mongoose.Promise=global.Promise;
//error HandLing middlware
//routes localhost:5000/users
app.use(routes);
//Listen for requests
app.listen(process.env.PORT || 5000,()=>{
    console.log('Now listen for requests');
});