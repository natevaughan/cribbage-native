import React, { FC } from 'react';
import { View, Text, StyleSheet } from "react-native";

interface ScoreboardProps {
    redScore: number
    blueScore: number
}

const Scoreboard: FC<ScoreboardProps> = (props: ScoreboardProps) => {
    return (
        <View style={[styles.scoreboard]}>
            <Text style={[styles.neutral]}>
                Red score:
            </Text>
            <Text style={[styles.neutral]}>
                Blue score:
            </Text>
            <Text style={[styles.red]}>
                {props.redScore}
            </Text>
            <Text style={[styles.blue]}>
                {props.blueScore}
            </Text>
        </View>
    )
}

export default Scoreboard;


const styles = StyleSheet.create({
    scoreboard: {
        flex: 1,
        flexDirection: "row"
    },
    red: {
        color: "#FF0000"
    },
    blue: {
        color: "#0000FF"
    },
    neutral: {
        color: "#333333"
    }
});