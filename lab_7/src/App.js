import React, { Component } from 'react';
import MyHeader from './components/MyHeader';
import SortPart from './components/SortPart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyHeader />
        <SortPart />
      </div>
    );
  }
}

export default App;
