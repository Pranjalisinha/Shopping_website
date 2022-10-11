const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();
require("dotenv").config();
const orderController = require("./Routes/orderRoute")
const register = require("./Routes/registerRoute")
app.use(cors());
app.use(express.json({limit:"30mb", extended: true}));
app.use(express.urlencoded({extended: false}));

app.listen(process.env.PORT || 3001,(err)=>{
    if(!err){
        console.log("Server connected succesfully at 3001")
    }
    else{
        console.log(err)
    }
});
const url = "mongodb+srv://test1:test12@test1.bewchyb.mongodb.net/commercial?retryWrites=true&w=majority"
mongoose.connect(url, (data) => {
  console.log("Successfully connected to db");
}, (err) => {
  console.log(err)
});


app.use("/userRegister",register);
app.use("/order", orderController);

app.get("/",(req,res)=>{
    res.status(200).send("Commercial")
},(err)=>{
    console.log(err)
})

