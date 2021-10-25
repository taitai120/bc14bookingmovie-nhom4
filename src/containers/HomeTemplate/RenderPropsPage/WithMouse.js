import React from "react";
import Mouse from "./Mouse";

export default function WithMouse(Component) {
    return class extends React.Component {
        render() {
            return <Mouse render={(mouse) => <Component mouse={mouse} />} />;
        }
    };
}
