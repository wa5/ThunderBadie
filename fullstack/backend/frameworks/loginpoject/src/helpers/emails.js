
function sendmail(name,emailid){

    var nodemailer=require('nodemailer')

    var transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'waseemahmed116@gmail.com',
            pass:'hhh'
        }
    });
    
    var mailoption={
        from:'waseemahmed116@gmail.com',
        to:emailid,
        subject:'u just loged in to portel',
        text:`hi ${name} welcom`
    };
    
    
    transporter.sendMail(mailoption,(err,info)=>{
        if(err){
            console.log(err)
        }else{
            console.log('mail send')
        }
    })
}


module.exports=sendmail;