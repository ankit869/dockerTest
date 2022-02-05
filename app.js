const express=require('express');
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",function(req,res){} //-->for single path

app.get("/",function(req,res){
    res.send("App running successfully !!")
})

app.listen(3000 || process.env.PORT ,function(){
    console.log("server is running at http://localhost:3000/")
});
