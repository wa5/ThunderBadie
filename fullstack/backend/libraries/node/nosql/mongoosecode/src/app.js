require('../config/db.config')

const {Students}=require('../src/models')







// const student1=new Students({name:'gokul',class:'mern',id:1})
// student1.save()
const student2=new Students({name:'kong',class:'mern',id:2})
//student2.save()
const student3=new Students({name:'akhil',class:'mern',id:3})
//student3.save()


//to display on the console
Students.findOne({name:'kong'},(err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log("this data",res)
    }
})


//editing
Students.findOneAndUpdate({id:'1'},
{name:'gokul don'},{overwrite:false,new:true},

(err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log("this data",res)
    }
})


//to display on the console
Students.findOneAndDelete({name:'akhil'},(err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log("this data",res)
    }
})