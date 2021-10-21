const express=require('express')

const app=express()


app.get("/",(req,res)=>{

    res.send('hello world')
})
app.post("/insert",(req,res)=>{

    res.send('hello world im post')
})
app.put("/edit",(req,res)=>{

    res.send('hello world im edit')
})
app.delete("/delete",(req,res)=>{

    res.send('hello  im delete')
})


app.listen(8000,()=>{
    console.log('server started on port no 8000')
})