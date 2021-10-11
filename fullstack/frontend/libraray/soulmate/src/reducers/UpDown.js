const initalState=0


const changeNamber=(state=initalState,action)=>{

switch(action.type){
    case "INCREAMENT": return state +1;
    case "DECREAMENT": return state -1;
    default:return state

}

}
export default changeNamber