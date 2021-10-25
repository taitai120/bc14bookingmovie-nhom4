import React, { Component } from "react";

export default class Mouse extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY,
        });
    }

    render() {
        return (
            <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
                {/* Send info state to MouseTracker component */}
                {this.props.render(this.state)}
            </div>
        );
    }
}
