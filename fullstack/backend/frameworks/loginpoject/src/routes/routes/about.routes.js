
var express=require('express')
let router=express.Router()



router.route('/about')

.get((req, res) => {
    var data='hhh'
    res.render('about',{nana:data})
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

module.exports=router;