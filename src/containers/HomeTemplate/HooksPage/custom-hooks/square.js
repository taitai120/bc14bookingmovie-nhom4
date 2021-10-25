import React from "react";
import { useMagicColor } from "./useMagicColor";

export default function Square() {
    const color = useMagicColor();

    return (
        <div className="square" style={{ background: color }}>
            Square
        </div>
    );
}
