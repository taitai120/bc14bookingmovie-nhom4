import React from "react";
import Circle from "./circle";
import Square from "./square";
import "./style.css";

export default function CustomHooks() {
    return (
        <div>
            <h1>Custom Hooks</h1>
            <Square />

            <hr />

            <Circle />
        </div>
    );
}
