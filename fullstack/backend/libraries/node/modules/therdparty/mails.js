var nodemailer=require('nodemailer')

var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'waseemahmed116@gmail.com',
        pass:'ggggg'
    }
});

var mailoption={
    from:'waseemahmed116@gmail.com',
    to:'Gokulranjith777@gmail.com',
    subject:'hi akil test mail from 360',
    text:'hi which candy is ur faverait'
};


transporter.sendMail(mailoption,(err,info)=>{
    if(err){
        console.log(err)
    }else{
        console.log('mail send')
    }
})