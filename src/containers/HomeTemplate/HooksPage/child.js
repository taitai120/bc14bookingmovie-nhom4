import React, { memo } from "react";

function Child() {
    console.log("Child");

    return (
        <div>
            <h1>Child Component</h1>
        </div>
    );
}

// Tương đương với PureComponent
export default memo(Child);
