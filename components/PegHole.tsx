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
    } else {
        pegStyles.backgroundColor = "#0000FF"
    }

    return (
        <View style={[pegStyles]} />
    );
}

export default PegHole;

const styles = StyleSheet.create({
    peg: {
        width: "3%",
        height: "3%",
        borderRadius: 10,
        backgroundColor:'#666666'
    }
});