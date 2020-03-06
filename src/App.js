import React from 'react';
import NavBar from './components/UI/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Skills from './components/pages/Skills';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar/>

        <Switch>
          <Route exact path="/skills" component={Skills}/>
          <Route exact path="/page2"/>
          <Route exact path="/page3"/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
