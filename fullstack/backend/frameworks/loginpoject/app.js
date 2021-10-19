require('dotenv').config()
const express=require('express')

// const port=process.env.PORT
var app=express()
app.set('port',process.env.PORT || 3000)


let router=express.Router()
app.get('/',(req,res)=>{
    res.send('hello im hers')
})





app
.get('/home',(req,res)=>{
    res.send("im home page")
}).post((req,res)=>{
    res.send("im home page")
}).put((req,res)=>{
    res.send("im home page")
}).delete((req,res)=>{
    res.send("im home page")
})

router.route("/home1")
.get((req,res)=>{
    res.send("im home page")
})





app.listen(app.get('port'),()=>{
    console.log(`server startted12  ${app.get('port')}` )
})