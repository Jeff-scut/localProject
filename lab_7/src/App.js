import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Community from './components/Community';
import Food from './components/Food';
import Custom from './components/Custom';
import Scenery from './components/Scenery';
import Economy from './components/Economy';
import Education from './components/Education';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/community" component={Community} />
          <Route path="/food" component={Food} />
          <Route path="/custom" component={Custom} />
          <Route path="/scenery" component={Scenery} />
          <Route path="/economy" component={Economy} />
          <Route path="/education" component={Education} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
