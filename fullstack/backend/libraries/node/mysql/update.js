var mysql=require('mysql')

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
database:'robot2'
})

con.connect((err)=>{
    if(err)throw err;
    console.log("connected to db")

   
    var ins="UPDATE `stud` SET `address`='asiya' WHERE name='kong'" 
con.query(ins,(err)=>{
    if(err)throw err;
    console.log('value inserted')
})

})