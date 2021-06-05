import React from "react";
import Pegboard from "./Pegboard";
import ScoreIncrementGrid from "./ScoreIncrementGrid";
import Scoreboard from "./Scoreboard";

export default class Game extends React.Component {

    zeros() {
        return { red: 0, blue: 0 };
    }

    constructor(props) {
        super(props);
        this.state = {
                history: [this.zeros()]
        };
    }

    increment(team, points) {
        let history = this.state.history.slice();
        let last = history[history.length - 1] || {};
        if (this.winner(last)) {
            return
        }
        let newItem = {}
        newItem[team] = last[team] + points;
        let otherTeam = this.otherTeam(team);
        newItem[otherTeam] = last[otherTeam] || 0;
        history.push(newItem)
        this.setState({history: history})
    }

    otherTeam(team) {
        if (team === "red") {
            return "blue"
        } else {
            return "red"
        }
    }

    winner(last) {
        if (last.red >= 121) {
            return "red";
        } else if (last.blue >= 121) {
            return "blue";
        } else {
            return null;
        }
    }

    render() {
        let last = this.state.history[this.state.history.length - 1] || this.zeros();
        let previousTotals = this.zeros();
        let i = this.state.history.length - 1
        while (i >= 0 && (previousTotals.red === 0 || previousTotals.blue === 0)) {
            if (this.state.history[i].red !== last.red && previousTotals.red === 0) {
                previousTotals.red = this.state.history[i].red
            }
            if (this.state.history[i].blue !== last.blue && previousTotals.blue === 0) {
                previousTotals.blue = this.state.history[i].blue
            }
            i--;
        }
        let message = "Cribbage";
        let messageClassName = "text-2xl text-center mb-4";
        let winner = this.winner(last)
        if (winner) {
            message = `${winner} wins!`
            messageClassName = `text-2xl text-center mb-4 text-${winner}`;
        }
        return (
            <div className="container">
                <div className="flex flex-col items-center justify-center">
                    <div className={messageClassName}>{message}</div>
                    <Scoreboard redScore={last.red} blueScore={last.blue} />
                    <Pegboard redScore={last.red} blueScore={last.blue} previousRedScore={previousTotals.red} previousBlueScore={previousTotals.blue} />
                    <ScoreIncrementGrid
                        incrementRed={(i) => {this.increment("red", i)}}
                        incrementBlue={(i) => {this.increment("blue", i)}}
                    />
                </div>
            </div>
        );
    }
}