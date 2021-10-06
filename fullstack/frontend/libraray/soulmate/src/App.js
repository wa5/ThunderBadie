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
function App() {
  return (

    <>
    <Router>
<Route exact path="/" component={Home}/>

<Route exact path="/about" component={About}/>

<Route exact path="/basket" component={Basket}/>

<Route exact path="/rest" component={FireWaterResrtrount}/>
<Route exact path="/hooks" component={Dance}/>
<Route exact path="/api" component={Getdata}/>
</Router>
{/* 
 */}
    </>


  );
}

export default App;
