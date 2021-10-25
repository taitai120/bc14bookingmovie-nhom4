import { useState, useEffect } from "react";

function useMagicColor() {
    const [state, setState] = useState("blue");

    useEffect(() => {
        const interval = setInterval(() => {
            const newColor = Math.floor(Math.random() * 999999);

            setState(`#${newColor}`);
        }, 1000);

        // tương đương với componentWillUnmount bên class
        return () => {
            clearInterval(interval);
        };
    }, []);

    return state;
}

export { useMagicColor };
