import React, { Component } from 'react';

class Home extends Component {
    state = {
        players: []
    }

    onClick = e => {
        e.preventDefault()
        this.props.createNewGame(this.state.players)
    }

    handleChangeText = (index, value) => {
        let players = this.state.players
        players[index] = value
        this.setState({ players: players })
    }

    render() {
        return (
            <div className="container">
                <h1 className="title">
                    ScoreKeeper
        </h1>
                <form className="form-group text-center mt-5" onSubmit={this.onClick}>
                    <input type="text" className="form-control rounded mb-3" name="player1" id="" placeholder="Player 1....." onChange={e => this.handleChangeText(0, e.target.value)} />
                    <input type="text" className="form-control rounded mb-3" name="player2" id="" placeholder="Player 2....." onChange={e => this.handleChangeText(1, e.target.value)} />
                    <input type="text" className="form-control rounded mb-3" name="player3" id="" placeholder="Player 3....." onChange={e => this.handleChangeText(2, e.target.value)} />
                    <input type="text" className="form-control rounded mb-3" name="player4" id="" placeholder="Player 4....." onChange={e => this.handleChangeText(3, e.target.value)} />
                    <button className="btn">CREATE NEW GAME</button>
                    {/* button trong form thì không nhận */}
                </form>
            </div>
        )
    }
}

export default Home;