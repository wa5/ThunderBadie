var express=require('express')
var sendmail=require('../../helpers/emails')
var {getHome,posttHome,deletHome,putHome}=require('../../controller/home.Ctrl')
let router=express.Router()



router.route('/home')
    .get(getHome)

    .post(posttHome)

    .put(putHome)

    .delete(deletHome)

    module.exports=router;