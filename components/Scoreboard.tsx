import React, { FC } from 'react';
import { View, Text, StyleSheet } from "react-native";

interface ScoreboardProps {
    redScore: number
    blueScore: number
}

const Scoreboard: FC<ScoreboardProps> = (props: ScoreboardProps) => {
    return (
        <View style={[styles.scoreboard]}>
            <View style={[styles.textInline]}>
                <Text style={[styles.neutral]}>
                    Red score:
                </Text>
                <Text style={[styles.red]}>
                    {props.redScore}
                </Text>
            </View>
            <View style={[styles.textInline]}>
                <Text style={[styles.neutral]}>
                    Blue score:
                </Text>
                <Text style={[styles.blue]}>
                    {props.blueScore}
                </Text>
            </View>
        </View>
    )
}

export default Scoreboard;


const styles = StyleSheet.create({
    scoreboard: {
        marginTop: 10,
        marginBottom: 20
    },
    textInline: {
        flexDirection: "row",
        alignItems: "center"
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