import React, { FC } from "react";
import range from "../utils/range"
import ScoreIncrement from "./ScoreIncrement";
import { StyleSheet, View } from "react-native";

interface ScoreIncrementGridProps {
    incrementRed: (i: Number) => void
    incrementBlue: (i: Number) => void
}

const ScoreIncrementGrid: FC<ScoreIncrementGridProps> = (props: ScoreIncrementGridProps) => {
    let redButtons = range(1, 20).map((i) => {
        return (
           <ScoreIncrement increment={i} handleClick={props.incrementRed} team="red" />
        )
    })
    let blueButtons = range(1, 20).map((i) => {
        return (
            <ScoreIncrement increment={i} handleClick={props.incrementBlue} team="blue" />
        )
    })
    return (
        <View style={[styles.colsTwo]}>
            <View style={[styles.colsTwo]}>
                {redButtons}
            </View>
            <View style={[styles.colsTwo]}>
                {blueButtons}
            </View>
        </View>
    )
}

export default ScoreIncrementGrid;


const styles = StyleSheet.create({
    colsTwo: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    }
});