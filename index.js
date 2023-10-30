
const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./controller/studentRoute");
const bodyParser = require("body-parser");
const cors = require("cors");
//We have installed the cors and body-parser in backend folder.

const app = express();

mongoose.set("strictQuery",true);  //To supress the deprecation warning
mongoose.connect("mongodb+srv://test:1234@cluster0.xuf8nos.mongodb.net/schooldb");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to db"));
db.on("err",()=>console.log("Error Occured"));

app.use(bodyParser.json()); //converts the things into the json format
app.use(bodyParser.urlencoded({extended:true})); //if suppose any special characters exist in our url it will be encoded here.
app.use(cors());
app.use("/studentRoute",studentRoute); //Middleware


app.listen(4000,()=>{
    console.log("Server started at 4000");
})
