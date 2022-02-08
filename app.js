const express=require('express');
const app=express();
const fs=require('fs');
const path=require('path');
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",function(req,res){} //-->for single path

app.get("/",function(req,res){
    res.send("App running successfully !!")
})
app.get("/createdir",function(req,res){
    if (!fs.existsSync(path.join(__dirname,'/testfolder'))) {
        fs.mkdirSync(path.join(__dirname,'/testfolder'));
        res.send("directory created successfully !!")
    }
})

app.listen(3000 || process.env.PORT ,function(){
    console.log("server is running at http://localhost:3000/")
});
