import logo from './logo.svg';
import './App.css';
import Test from './components/testcomponent/Test';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About/About';
import Basket from './pages/Basket/Basket';
import { Route } from 'react-router';
import {BrowserRouter as Router } from 'react-router-dom'
import FireWaterResrtrount from './components/classcomponet/FireWaterResrtrount';
import Dance from './components/hooks/Dance';
import Getdata from './components/api/Getdata';
import Putdata from './components/api/Putdata';

import {increaseNumber,decreaseNumber} from './actions/NumberPlay'
import {useDispatch,useSelector} from 'react-redux'

function App() {
  const myval=useSelector((state)=>state.changeNamber)
  const dispatch=useDispatch()
  return (

    <>
<button onClick={()=>dispatch(increaseNumber())}>click me to increament</button>
<h2>{myval}</h2>
<button onClick={()=>dispatch(decreaseNumber())}>click me to decreament</button>
<br/>




    <Router>
<Route exact path="/" component={Home}/> 

<Route exact path="/about" component={About}/>

<Route exact path="/basket" component={Basket}/>

<Route exact path="/rest" component={FireWaterResrtrount}/>
<Route exact path="/hooks" component={Dance}/>
<Route exact path="/api" component={Getdata}/>
<Route exact path="/api/edit" component={Putdata}/>





</Router>


{/* 
 */}
    </>


  );
}

export default App;
