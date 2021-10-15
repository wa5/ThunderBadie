var mongo=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/'


mongo.connect(url,(err,db)=>{
    if(err)throw err;
    console.log('db conected')

var dba=db.db('hero')
dba.createCollection('heroins',(err,res)=>{
    if(err)throw err;
    console.log('collection created')
    db.close();
})




 
})