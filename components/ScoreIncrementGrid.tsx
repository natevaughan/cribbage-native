import React from "react";
import range from "../util/range"
import ScoreIncrement from "./ScoreIncrement";

export default class ScoreIncrementGrid extends React.Component {
    render() {
        let redButtons = range(1, 20).map((i) => {
            return (
               <ScoreIncrement increment={i} handleClick={this.props.incrementRed} team="red" />
            )
        })
        let blueButtons = range(1, 20).map((i) => {
            return (
                <ScoreIncrement increment={i} handleClick={this.props.incrementBlue} team="blue" />
            )
        })
        return (
            <div className="flex mx-auto">
                <div className="w-3/6 grid grid-cols-3">
                    {redButtons}
                </div>
                <div className="w-3/6 grid grid-cols-3">
                    {blueButtons}
                </div>
            </div>
        )
    }
}