import React, { FC } from "react";
import { Button, StyleSheet, View } from "react-native";

interface ScoreIncrementProps {
    increment: number
    team: string
    handleClick: (i: number) => void
}

const ScoreIncrement: FC<ScoreIncrementProps> = (props: ScoreIncrementProps) => {
    let color = "#FF0000"
    if (props.team === "blue") {
        color = "#0000FF"
    }
    return (
        <View style={styles.margined}>
            <Button
                title={`+${props.increment}`}
                onPress={() => {props.handleClick(props.increment) } }
                color={color}
            />
        </View>
    )
}

export default ScoreIncrement;

const styles = StyleSheet.create({
    margined: {
        margin: 5
    }
});