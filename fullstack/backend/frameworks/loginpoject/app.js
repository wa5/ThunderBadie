require('dotenv').config()
const express = require('express')

//connection to db
require('./config/db.config')


// const port=process.env.PORT
var app = express()
app.set('port', process.env.PORT || 3000)

//ejs coding
const ejs=require('ejs')
const path=require('path')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'src/views'))
//console.log(path.join(__dirname,'src/views'))
//routes
const data=require('./src/routes')




app.get('/', (req, res) => {
    var name=req.query.name
    console.log(name)
    res.render('home',{name:name})

})




//all the routes or api

app.use('/api',data.about)

app.use('/api',data.contact)

app.use('/api',data.home)

app.use('/api',data.login)

app.use('/api',data.register)














app.get('*', (req, res) => {
    res.send('404')
})


app.listen(app.get('port'), () => {
    console.log(`server startted12  ${app.get('port')}`)
})