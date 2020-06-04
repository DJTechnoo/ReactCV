import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/UI/NavBar';
import Image from 'react-bootstrap/Image';
import Skills from './components/pages/Skills';
import MyArt from './components/pages/MyArt';
import Experiences from './components/pages/Experiences';
import {Helmet} from 'react-helmet';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: black; color: white; }'}</style>
      </Helmet>
      <Router>
        <NavBar/>
        <Image src="MCA.jpg" fluid></Image>
        <Switch>
          <Route exact path="/skills" component={Skills}/>
          <Route exact path="/experiences" component={Experiences}/>
          <Route exact path="/art" component={MyArt}/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
