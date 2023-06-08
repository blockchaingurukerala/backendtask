const express=require('express');
const app=new express();
app.get('/getData',(req,res)=>{
    res.send({'name':'Prince','age':35})
})
app.listen(80,()=>{
    console.log('listening at 80')
})
