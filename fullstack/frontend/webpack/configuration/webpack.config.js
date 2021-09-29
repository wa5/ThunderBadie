
const path=require('path')
module.exports={

mode:"production",
//mode:"development"
entry:'./src/index.js',

output:{
    path:path.resolve(__dirname,'build'),
    filename:'js/main.js',
    publicPath:'/assets/'

},
devServer:{
    port:1234,
    static:path.resolve(__dirname,'build')
}
}



  