const express=require('express');
const app=new express();
const port = process.env.PORT || 3000;
app.get('/getData',(req,res)=>{
    res.send({'name':'Prince','age':35})
})
app.listen(port,()=>{
    console.log('listening at 80')
})
module.exports = app;