var express = require('express')
let router = express.Router()

var sendemail=require('../../services/email.service')
var idata=require('../../services/insertdata.service')

router.route('/login')
    .get((req, res) => {
console.log(req.query)
        let name=req.query.name
       let email= req.query.email
     let password= req.query.password
      let pnumber= req.query.pnumber
        idata(name,email,password,pnumber)
        sendemail(name,email)
        res.render('login',{name:name,email:email,password:password})
    })
    .post((req, res) => {
        res.send('hello')
    })

    .put((req, res) => {
        res.send('hello')
    })

    .delete((req, res) => {
        res.send('hello')
    })
module.exports = router;