// Demo reducer theo dạng function
import React, { useReducer } from "react";

const initialState = { number: 0 };

// child reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "increment": {
            return { number: state.number + 1 };
        }

        case "decrement": {
            return { number: state.number - 1 };
        }

        default:
            return { ...state };
    }
};

export default function DemoUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Demo Use Reducer</h1>
            <h4>Number: {state.number}</h4>

            <button
                className="btn btn-primary mr-2"
                onClick={() => {
                    dispatch({ type: "increment" });
                }}
            >
                Increment
            </button>

            <button
                className="btn btn-danger"
                onClick={() => {
                    dispatch({ type: "decrement" });
                }}
            >
                Decrement
            </button>
        </div>
    );
}
