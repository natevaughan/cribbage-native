import React from "react";
import Pegboard from "./Pegboard";
import ScoreIncrementGrid from "./ScoreIncrementGrid";
import Scoreboard from "./Scoreboard";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

class GameState {
    constructor(history: Scores[]) {
        this.history = history
    }

    history: Scores[];
}

class Scores {
    red: number = 0
    blue: number = 0
}

export default class Game extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = new GameState([new Scores()])
    }

    state: GameState

    increment(team: string, points: number) {
        let history = this.state.history.slice();
        let last = history[history.length - 1] || {};
        if (this.winner(last)) {
            return
        }
        let newItem = new Scores();
        switch (team) {
            case "red":
                newItem.red = last.red + points;
                newItem.blue = last.blue || 0;
                break;
            case "blue":
                newItem.blue = last.blue + points;
                newItem.red = last.red || 0;
                break;
        }
        history.push(newItem)
        this.setState({history: history})
    }

    winner(last: Scores) {
        if (last.red >= 121) {
            return "red";
        } else if (last.blue >= 121) {
            return "blue";
        } else {
            return null;
        }
    }

    render() {
        let last = this.state.history[this.state.history.length - 1] || new Scores();
        let previousTotals = new Scores();
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
        let titleStyles = Object.assign({}, styles.title);
        let winner = this.winner(last)
        if (winner) {
            message = `${winner} wins!`
            if (winner === "red") {
                titleStyles.color = '#FF0000';
            } else if (winner === "blue") {
                titleStyles.color = '#0000FF'
            }
        }
        return (
            <ScrollView contentContainerStyle={[styles.container]}>
                <Text style={[titleStyles]}>{message}</Text>
                <Button
                    title="reset"
                    onPress={() => {this.setState(new GameState([new Scores()]))} }
                    color="#999999"
                />
                <Scoreboard redScore={last.red} blueScore={last.blue} />
                <Pegboard redScore={last.red} blueScore={last.blue} previousRedScore={previousTotals.red} previousBlueScore={previousTotals.blue} />
                <ScoreIncrementGrid
                    incrementRed={(i) => {this.increment("red", i.valueOf())}}
                    incrementBlue={(i) => {this.increment("blue", i.valueOf())}}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#666666'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});