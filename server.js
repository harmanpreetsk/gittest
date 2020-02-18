const express=require('express');
const handle=require('express-handlebars');
const app=express();
app.engine("handlebars",handle());
app.set("view engine","handlebars");
app.get("/",(req,res)=>{
    res.render("home");
})
app.listen(3003,()=>{
    console.log("Server started");
})