const mongoose=require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/robot',(err,con)=>{
    if(err)throw err;
    console.log("db connected")
})