const express=require('express');
const handle=require('express-handlebars');
const app=express();
app.engine("handlebars",handle());
app.set("view engine","handlebars");
app.get("/",(req,res)=>{
    res.render("home");
})
const PORT =process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Server started");
})
