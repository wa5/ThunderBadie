
var serviceEmail=require('../services/email.service')
var idata=require('../services/insertdata.service')

var getHome=(req, res) => {
    var name=req.query.name
    var emailid=req.query.email
    var password=req.query.password
    
    serviceEmail(name,emailid)
    idata(name,emailid,password)

            res.render('home',{name:name})
        }
var posttHome=(req, res) => {
    res.send('hello')
}

var deletHome=(req, res) => {
    res.send('hello')
}

var putHome=(req, res) => {
    res.send('hello')
}

module.exports={getHome,posttHome,deletHome,putHome}