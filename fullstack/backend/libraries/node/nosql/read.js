var mongo=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/'


mongo.connect(url,(err,db)=>{
    if(err)throw err;
    console.log('db conected')

var dba=db.db('hero')
dba.collection('heroins').findOne({},(err,res)=>{
if(err)throw err;
console.log(res.name)
db.close()
})





 
})