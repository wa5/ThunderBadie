var url=require('url')

var address='http://localhost:3006/home?name=kong&class=mernclass'
var baba=url.parse(address,true)

console.log(baba.host)
console.log(baba.pathname)
var data=baba.query
console.log(data.name)
console.log(data.class)