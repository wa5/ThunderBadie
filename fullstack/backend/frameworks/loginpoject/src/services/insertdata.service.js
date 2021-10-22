const {UserDetails}=require('../models')
function idata(name,email,password){
   

    const user1=new UserDetails({name:name,email:email,password:password})
    user1.save()
}

module.exports=idata
