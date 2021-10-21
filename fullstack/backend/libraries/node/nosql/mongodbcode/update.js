var mongo=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/'


mongo.connect(url,(err,db)=>{
    if(err)throw err;
    console.log('db conected')

var dba=db.db('hero')

var idtofind={name:'superman1'}
var newvalue={$set:{comics:'dc'}}

dba.collection('heroins').updateOne(idtofind,newvalue,(err,res)=>{
if(err)throw err;
console.log('updated')
db.close()
})
})





 
