import React from "react";

export default class ScoreIncrement extends React.Component {
    render() {
        return (
            <button
                onClick={() => {this.props.handleClick(this.props.increment) } }
                className={`text-white m-2 p-2 rounded-sm bg-${this.props.team}`}
            >
                +{this.props.increment}
            </button>
        )
    }
}