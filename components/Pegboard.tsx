import React from "react";
import PegHole from "./PegHole";
import range from "../util/range"

export default class Pegboard extends React.Component {

    render() {
        let redPostions = [this.props.redScore || 0, this.props.previousRedScore || 0].map(i => (i - 1) % 60 + 1);
        let bluePositions = [this.props.blueScore || 0, this.props.previousBlueScore || 0].map(i => (i - 1) % 60 + 1);

        let row1 = range(1, 30).map((i) => { return (<PegHole i={i} filled={redPostions.includes(i)} team="red" className={i % 5 === 0 ? ' mr-4' : ''} />) });
        let row2 = range(1, 30).map((i) => { return (<PegHole i={i} filled={bluePositions.includes(i)} team="blue" className={i % 5 === 0 ? ' mr-4' : ''} />) });
        let row3 = range(60, 31).map((i) => { return (<PegHole i={i} filled={bluePositions.includes(i)} team="blue" className={i % 5 - 1 === 0 ? ' mr-4' : ''} />) });
        let row4 = range(60, 31).map((i) => { return (<PegHole i={i} filled={redPostions.includes(i)} team="red" className={i % 5 - 1 === 0 ? ' mr-4' : ''} />) });

        return (
            <div className="cribbage-board inline-block">
                <div>
                    {row1}
                </div>
                <div className="pb-4">
                    {row2}
                </div>
                <div>
                    {row3}
                </div>
                <div>
                    {row4}
                </div>
            </div>
        );
    }
}