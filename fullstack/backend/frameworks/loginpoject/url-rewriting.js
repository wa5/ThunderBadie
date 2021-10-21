require('dotenv').config()
const express=require('express')

// const port=process.env.PORT
var app=express()
app.set('port',process.env.PORT || 3000)


let router=express.Router()
app.get('/',(req,res)=>{
    res.send('hello im hers')
})


app.get('/',(req,res)=>{
res.send('hello world')
})

//case one static path
app.get('/cars1',(req,res)=>{
res.send('hello im a cars')
})

//case two 
app.get('/c?ars',(req,res)=>{
    res.send('hello im a advance')
    })

    //case thred case
app.get('/ca+rs2',(req,res)=>{
    res.send('hello im a advance')
    })

      //case 4th
app.get("/ca?"+"rs2",(req,res)=>{
    res.send('hello im a advance')
    })

    
      //case 5th
app.get("/ca*rs3",(req,res)=>{
    res.send('hello im a advance')
    })


        //case 6th dynamic routin
app.get("/vehecals/:data",(req,res)=>{
    //geting data from url
    console.log(req.params)
    var userdata=req.params.data
    res.send(`hello im a advance dynamic apis ${userdata}`)
    })

app.get('*',(req,res)=>{
res.send('404')
})


app.listen(app.get('port'),()=>{
    console.log(`server startted12  ${app.get('port')}` )
})