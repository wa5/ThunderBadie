var mysql=require('mysql')



var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'robot2'
})

con.connect((err)=>{

    if(err)throw err;
    console.log('db is connected')
    var del="DELETE FROM `stud` WHERE address='asiya'"


    con.query(del,(err,resl)=>{
        if(err)throw err;
        console.log('deleted')
    })
})