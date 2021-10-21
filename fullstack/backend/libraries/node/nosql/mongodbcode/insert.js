var mongo=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/'


mongo.connect(url,(err,db)=>{
    if(err)throw err;
    console.log('db conected')

var dba=db.db('hero')

var obj={name:'ironman',heroin:'miss.marvel',comics:'marvel'}

dba.collection('heroins').insertOne(obj,(err,res)=>{
    if(err)throw err;
    console.log('1 abject got inserted')
    db.close()
})




 
})