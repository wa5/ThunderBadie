var sendmail=require('../helpers/emails')

function serviceEmail(name,emailid){
    sendmail(name,emailid)
}

module.exports=serviceEmail