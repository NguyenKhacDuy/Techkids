import React, { Component } from 'react';

class Game extends Component {
    state = {
        rounds: [[0, 0, 0, 0]]
    }

    addRound = e => {
        e.preventDefault()
        let rounds = this.state.rounds
        // rounds.push({ roundNumber: 1 })
        rounds.push([0, 0, 0, 0])
        console.log(rounds)
        this.setState({ rounds: rounds })
    }

    handleChangeScore = (roundIndex, playerIndex, value) => {
        console.log(roundIndex)
        console.log(playerIndex)
        let rounds = this.state.rounds
        // let p2score = this.state.rounds.p2score
        // let p3score = this.state.rounds.p3score
        // let p4score = this.state.rounds.p4score
        rounds[roundIndex][playerIndex] = value
        // this.setState({ rounds: rounds })
    }


    render() {
        var tmp = [];
        var sumP1Score = 0;
        var sumP2Score = 0;
        var sumP3Score = 0;
        var sumP4Score = 0;
        for (var i = 0; i < this.state.rounds.length; i++) {
            const roundNumber = i + 1;
            const roundIndex = i;
            tmp.push(<tr>
                <th>Round {roundNumber}</th>
                <td>
                    <input data-round="{idRound}" value={this.state.rounds.p1score} type="text" onChange={e => this.handleChangeScore(roundIndex, 0, e.target.value)} />
                </td>
                <td >
                    <input data-round="{idRound}" value={this.state.rounds.p2score} type="text" onChange={e => this.handleChangeScore(roundIndex, 1, e.target.value)} />
                </td>
                <td>
                    <input data-round="{idRound}" value={this.state.rounds.p3score} type="text" onChange={e => this.handleChangeScore(roundIndex, 2, e.target.value)} />
                </td>
                <td>
                    <input data-round="{idRound}" value={this.state.rounds.p4score} type="text" onChange={e => this.handleChangeScore(roundIndex, 3, e.target.value)} />
                </td>
            </tr>)
            sumP1Score += parseInt(this.state.rounds[roundIndex][0]);
            sumP2Score += parseInt(this.state.rounds[roundIndex][1]);
            sumP3Score += parseInt(this.state.rounds[roundIndex][2]);
            sumP4Score += parseInt(this.state.rounds[roundIndex][3]);
            console.log(this.state.rounds.p1score);
        }
        return (
            <div className="container text-center" >
                <h1 className="title text-left">
                    ScoreKeeper
                            </h1>
                <table className="table table-striped w100 text-left">
                    <tr>
                        <th></th>
                        <th>{this.props.playersName[0]}</th>
                        <th>{this.props.playersName[1]}</th>
                        <th>{this.props.playersName[2]}</th>
                        <th>{this.props.playersName[3]}</th>
                    </tr>
                    <tr className="head">
                        <th>Sum of Score</th>
                        <td>
                            <span>{sumP1Score}</span>
                        </td>
                        <td>
                            <span>{sumP2Score}</span>
                        </td>
                        <td>
                            <span>{sumP3Score}</span>
                        </td>
                        <td>
                            <span>{sumP4Score}</span>
                        </td>
                    </tr>
                    {tmp}
                </table>
                <a href="">
                    <button className="btn" onClick={this.addRound}>ADD ROUND</button>
                </a>
            </div>
        )
    }
}

export default Game;