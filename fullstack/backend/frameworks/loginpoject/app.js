require('dotenv').config()
const express=require('express')

// const port=process.env.PORT
var app=express()
app.set('port',process.env.PORT || 3000)


let router=express.Router()
app.get('/',(req,res)=>{
    res.send('hello im hers')
})


//midele ware only give req,res,next
var checkUrl=(req,res,next)=>{
    console.log('hahaah im midel capturing ur data so tat i can sell ')
    console.log(req.originalUrl)
    next()
 
}

app.use(checkUrl)

app.get('/test',(req,res)=>{
    res.send('im a middle ware example')
})
app.get('/test1',(req,res)=>{
    res.send('im a middle ware example')
})
app.get('/test2',(req,res)=>{
    res.send('im a middle ware example')
})





app.get('*',(req,res)=>{
res.send('404')
})


app.listen(app.get('port'),()=>{
    console.log(`server startted12  ${app.get('port')}` )
})