var express=require('express')
let router=express.Router()



router.route('/home')
    .get((req, res) => {
        res.render('home')
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