import React from "react";

export default class Scoreboard extends React.Component {
    render() {
        return (
            <div>
                {}
                <div className="grid grid-cols-2">
                    <div>
                        Red score:
                    </div>
                    <div>
                        Blue score:
                    </div>
                    <div>
                        {this.props.redScore}
                    </div>
                    <div>
                        {this.props.blueScore}
                    </div>
                </div>
            </div>
        )
    }
}