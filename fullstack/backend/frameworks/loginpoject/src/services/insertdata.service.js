const {UserDetails}=require('../models')
function idata(name,email,password,pnumber){
   

    const user1=new UserDetails({name:name,email:email,password:password,phonNumber:pnumber})
    user1.save()

    
}

module.exports=idata
