import React, { Component } from "react";
// import Mouse from "./Mouse";
// import MouseWithCat from "./MouseWithCat";
import Cat from "./Cat";
import WithMouse from "./WithMouse";

const WrapperMouse = WithMouse(Cat);

export default class MouseTracker extends Component {
    // get info from state of Mouse component
    getXY = (mouse) => {
        // Send info mouse => Cat component
        return <Cat mouse={mouse} />;
    };

    render() {
        return (
            <>
                <h1>Move the mouse around!</h1>
                {/* <Mouse render={this.getXY} /> */}

                {/* <MouseWithCat /> */}

                <WrapperMouse />
            </>
        );
    }
}
