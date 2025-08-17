import express from "express";

const app = express();


app.get('/', (req, res)=>{
    res.send('this is testing');
})









const port = 3000;
app.listen(port, ()=>{
    console.log("your app is running...");
    
})