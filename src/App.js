import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import NavBar from './components/UI/NavBar';
import Image from 'react-bootstrap/Image';
import Canvas from './components/UI/Canvas';

import Skills from './components/pages/Skills';
import MyArt from './components/pages/MyArt';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Image src="MCA.jpg" fluid></Image>
        <Switch>
          <Route exact path="/skills" component={Skills}/>
          <Route exact path="/art" component={MyArt}/>
          <Route exact path="/page3"/>
        </Switch>

      </Router>
      <Canvas/>
    </div>
  );
}

export default App;
