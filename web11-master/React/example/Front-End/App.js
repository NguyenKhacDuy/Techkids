import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Game from './components/Game';

class App extends Component {
  state = {
    initializing: true,
    players: [],
    rounds: [[]]
  }

  _createNewGame = (players) => {
    this.setState({
      initializing: false,
      players: players
    });
  }
  render() {
    return (
      this.state.initializing ? <Home createNewGame={this._createNewGame}
      /> : <Game playersName={this.state.players} roundsNumber={this.state.rounds} />
    );
  }
}

export default App;
