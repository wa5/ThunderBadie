var express=require('express')
let router=express.Router()


router.route('/contact')
    .get((req, res) => {
        res.render('contact')
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