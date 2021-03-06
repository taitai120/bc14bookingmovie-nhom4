import React from "react";
import { useMagicColor } from "./useMagicColor";

export default function Circle() {
    const color = useMagicColor();

    return (
        <div className="square circle" style={{ background: color }}>
            Circle
        </div>
    );
}
