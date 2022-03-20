const express = require("express");
const app=express();

app.use(allbooks)

app.get("/book1",(req,res)=>{
    res.send("Harry Potter")
})
app.get("/book2",(req,res)=>{
    res.send("Ikigai")
})
app.get("/book3",(req,res)=>{
    res.send("A man who Sold his ferrari")
})
 function allbooks(req,res,next){
     console.log("Fetching all books")
     next();
 }

 app.get("/books/:bookName",(req,res)=>{
     res.send(req.params);
 })
app.listen(2712 ,()=>{
    console.log("Listening on port 2712")
})