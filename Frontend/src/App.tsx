import React from 'react';
import './App.css';
import Head from './components/Head';
import './index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import HomeImg from './components/HomeImg/HomeImg';



function App() {
  return (
    <Router>

      <Switch>
        <Route path="/">
        <Head/>
          <HomeImg/>
        </Route>
      </Switch>
    </Router>

      
    
  
      
    
  );
}

export default App;
