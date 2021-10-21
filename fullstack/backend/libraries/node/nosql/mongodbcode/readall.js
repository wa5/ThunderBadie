var mongo=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/'


mongo.connect(url,(err,db)=>{
    if(err)throw err;
    console.log('db conected')

var dba=db.db('hero')

var qury={comics:'marvel'}


dba.collection('heroins').find(qury).toArray((err,rsult)=>{
    if(err)throw err;
    console.log(rsult)
    db.close()
})

})


gg


 
