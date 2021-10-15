var mongo=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/'


mongo.connect(url,(err,db)=>{
    if(err)throw err;
    console.log('db conected')

var dba=db.db('hero')

var todelet={name:'superman'}

dba.collection('heroins').deleteOne(todelet,(err,res)=>{
    if(err)throw err;
console.log('record got deleted')
db.close()
})



})





 
