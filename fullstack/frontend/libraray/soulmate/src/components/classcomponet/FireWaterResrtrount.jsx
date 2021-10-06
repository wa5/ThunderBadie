import { Component } from "react";
import Gokul from "./Gokul";


class FireWaterResrtrount extends Component{
constructor(){
    super()
    console.log("water no: 1 customer cameeeeee")
this.state={
    count:0,
    io:true
}

}

componentDidMount(){
    console.log(" water no :3 customer taken the seat")
}


componentDidUpdate(preProps,prevState){
    console.log(" water no :4 customer has given the order",`privous order:${prevState.count} current order no:${this.state.count}`)
}

// shouldComponentUpdate(){
//     console.log("water 5: no more disshes for u")
//     return false
// }

render(){

    console.log("water no: 2 im  monitoring customers all moves")
    return (
        <>
        <h1>{this.state.count}</h1>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>click me to increasae count</button>
        
        <br/>
        <h1>
            { this.state.io==true?<Gokul/>:<h1> customer outside of restrunt</h1>  }
        </h1>
        <button onClick={()=>{this.setState({io:!this.state.io})}}>click me pay eith customer</button>
        </>
    )
}

}

export default FireWaterResrtrount