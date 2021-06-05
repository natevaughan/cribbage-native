import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

interface PegHoleProps {
    filled: boolean
    team: string
    padRight: boolean
    key: number
}

const PegHole: FC<PegHoleProps> = (props: PegHoleProps) => {
    let pegStyles = Object.assign({}, styles.peg)
    if (props.filled && props.team === "red") {
        pegStyles.backgroundColor = "#FF0000"
    } else if (props.filled && props.team === "blue") {
        pegStyles.backgroundColor = "#0000FF"
    }
    if (props.padRight) {
        pegStyles.marginRight = 10
    }

    return (
        <View style={[pegStyles]} />
    );
}

export default PegHole;

const styles = StyleSheet.create({
    peg: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor:'#ccc',
        marginRight: 3
    }
});