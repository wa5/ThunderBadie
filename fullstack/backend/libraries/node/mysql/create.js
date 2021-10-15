var mysql=require('mysql')

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''

})

con.connect((err)=>{
    if(err)throw err;
    console.log("connected to db")

    // con.query("CREATE DATABASE robot2",(err,result)=>{
    //     if(err) throw err;
    //     console.log("db created")
    // })

var tab="CREATE TABLE stud(name VARCHAR(255),address VARCHAR(255))"

    con.query(tab,(err)=>{
        if(err)throw err;
        console.log("table created")
    })

})