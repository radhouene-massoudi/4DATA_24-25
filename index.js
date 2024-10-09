const express=require('express');
const fs=require('fs')

const app=express();
function getProduct()
{
   var products=fs.readFileSync('data.json')
return JSON.parse(products)
}
app.get('/products',(req,res)=>{
    res.status(200).json(getProduct())
})
app.get('/st',(req,res)=>{
res.json('msg')
})
app.listen(4000,()=>{
    console.log("server run on the port 4000")
})