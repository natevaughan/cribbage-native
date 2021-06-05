import React, { FC } from "react";
import PegHole from "./PegHole";
import range from "../utils/range"
import { StyleSheet, View } from "react-native";

interface PegboardProps {
    redScore: number
    previousRedScore: number
    blueScore: number
    previousBlueScore: number
}

const Pegboard: FC<PegboardProps> = (props: PegboardProps) => {
    let redPostions = [props.redScore || 0, props.previousRedScore || 0].map(i => (i - 1) % 60 + 1);
    let bluePositions = [props.blueScore || 0, props.previousBlueScore || 0].map(i => (i - 1) % 60 + 1);

    let row1 = range(1, 30).map((i: number) => { return <PegHole key={i} filled={redPostions.includes(i)} team="red" padRight={i % 5 === 0} /> });
    let row2 = range(1, 30).map((i: number) => { return <PegHole key={i}  filled={bluePositions.includes(i)} team="blue" padRight={i % 5 === 0} /> });
    let row3 = range(60, 31).map((i: number) => { return <PegHole key={i}  filled={bluePositions.includes(i)} team="blue" padRight={i % 5 - 1 === 0} /> });
    let row4 = range(60, 31).map((i: number) => { return <PegHole key={i}  filled={redPostions.includes(i)} team="red" padRight={i % 5 - 1 === 0} /> });

    return (
        <View style={[styles.board]}>
            <View style={[styles.row]}>
                {row1}
            </View>
            <View style={[styles.row]}>
                {row2}
            </View>
            <View style={[styles.row]}>
                {row3}
            </View>
            <View style={[styles.row]}>
                {row4}
            </View>
        </View>
    );
}

export default Pegboard;

const styles = StyleSheet.create({
    board: {
        borderWidth:  1
    },
    row: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    }
});