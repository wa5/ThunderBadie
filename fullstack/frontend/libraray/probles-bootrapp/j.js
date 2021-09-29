function eleme(name){
    <h1>hello</h1>
    var h1=document.createElement("h1")
h1.innerHTML=name
document.getElementById("root").append(h1)
}
eleme("hahah")
eleme("hello")
eleme("world")

