import React from "react";

export default class PegHole extends React.Component {
    render() {
        let color = "bg-gray";
        if (this.props.filled) {
            color = `bg-${this.props.team}`
        }
        let clazz = `inline-block hole ${color} `;

        return (
          <div className={clazz + this.props.className}>
          </div>
        );
    }
}