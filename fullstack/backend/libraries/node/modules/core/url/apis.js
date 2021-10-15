var http=require('http')

var server=http.createServer((req,res)=>{
    if(req.url=='/home'){
        res.write('im home')
        res.end()
    }
    if(req.url=='/about'){
        res.write('im about')
        res.end()
    }
    if(req.url=='/contact'){
        res.write('im contact')
        res.end()
    }
    
})
server.listen(3007,()=>{
    console.log("serer got started on port 3007")
})