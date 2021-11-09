import React from 'react';
import Head from './components/Head';
import './index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import HomeImg from './components/HomeImg/HomeImg';
import Login from './components/Login/Login';



function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
        <Head/>
          <HomeImg/>
        </Route>
        <Switch>
        <Route path="/Login">
          <Login/>
        </Route>
        </Switch>
        
      </Switch>
    </Router>

      
    
  
      
    
  );
}

export default App;
