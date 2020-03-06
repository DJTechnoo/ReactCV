import React from 'react';
import NavBar from './components/UI/NavBar';
import Image from 'react-bootstrap/Image';
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
        <Image src="MCA.jpg" fluid></Image>
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
