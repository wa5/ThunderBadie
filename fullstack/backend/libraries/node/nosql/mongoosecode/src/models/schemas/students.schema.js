require('../../../config/db.config')
const mongoose=require('mongoose')
const {Schema}=mongoose

const studetndStructrure=new Schema({
name:String,
class:String,
id:Number
})


module.exports=mongoose.model('students',studetndStructrure)


