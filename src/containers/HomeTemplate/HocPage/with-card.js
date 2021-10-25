import React from "react";

// High Order Component (HOC)
export default function WithCard(Component) {
    return function () {
        return (
            <div className="card mb-5">
                <div className="card-header">Header</div>
                <div className="card-body">
                    <Component />
                </div>
                <div className="card-footer text-muted">Footer</div>
            </div>
        );
    };
}
