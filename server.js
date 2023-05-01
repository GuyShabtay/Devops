const express=require('express')

const app=express()

app.get('/',async (req,res)=>{

await res.send('Hello')
})

app.get('/test',(req,res)=>{

res.send('test Hello')
})

module.exports=app