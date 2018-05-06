import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
      
    );
  }
}

export default App;
