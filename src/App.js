import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Lvlone from './components/main/Lvlone';
import Timeline from './components/timeline/Timeline';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Services from './components/pages/Services';
import Lvl2 from './components/main/Lvl2';
import Lvl3 from './components/main/Lvl3';
import Lvl4 from './components/main/Lvl4';
import Lvl5 from './components/main/Lvl5';
import Lvl6 from './components/main/Lvl6';
import Lvl7 from './components/main/Lvl7';
import Lvl8 from './components/main/Lvl8';
import Lvl9 from './components/main/Lvl9';
import Lvl10 from './components/main/Lvl10';
import Lvl11 from './components/main/Lvl11';
import Lvl12 from './components/main/Lvl12';
import Lvl13 from './components/main/Lvl13';
import Lvl14 from './components/main/Lvl14';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/Login' component={Login} />
        </Switch>
        <Route path='/Timeline' component={Timeline}/>
        <Route path='/Lvlone' component={Lvlone}/>
        <Route path='/Lvl2' component={Lvl2}/>
        <Route path='/Lvl3' component={Lvl3}/>
        <Route path='/Lvl4' component={Lvl4}/>
        <Route path='/Lvl5' component={Lvl5}/>
        <Route path='/Lvl6' component={Lvl6}/>
        <Route path='/Lvl7' component={Lvl7}/>
        <Route path='/Lvl8' component={Lvl8}/>
        <Route path='/Lvl9' component={Lvl9}/>
        <Route path='/Lvl10' component={Lvl10}/>
        <Route path='/Lvl11' component={Lvl11}/>
        <Route path='/Lvl12' component={Lvl12}/>
        <Route path='/Lvl13' component={Lvl13}/>
        <Route path='/Lvl14' component={Lvl14}/>
      </Router>
    </>
  );
}

export default App;
