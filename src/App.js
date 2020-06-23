import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from './components/UI/NavBar';
import Image from 'react-bootstrap/Image';
import photo from './assets/MCA.jpg';
import {Helmet} from 'react-helmet';

import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
import MyArt from './components/pages/MyArt';
import Experiences from './components/pages/Experiences';
import MyGitHub from './components/pages/MyGitHub';

import './App.css';


const App = () => {
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: black; color: white; }'}</style>
      </Helmet>
      <Router>
        <NavBar/>
        <Image src={photo} fluid></Image>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path={"/home"} component={Home}/>
          <Route path={"/skills"} component={Skills}/>
          <Route path={"/experiences"} component={Experiences}/>
          <Route path={"/art"} component={MyArt}/>
          <Route path={"/github"} component={MyGitHub}/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
