import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

function WelcomePage(props) {
    const startWorkout = () => {
        props.history.push("/Exercises");
    };

    return (
        <div className="welcome-wrapper">
            <img
                className="home-image"
                src="https://images.unsplash.com/photo-1544033527-b192daee1f5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="Weight rack"
            />
            <button className="start-Workout-Button" onClick={startWorkout}>
                Start Workout!
            </button>
        </div>
    );
}

export default WelcomePage;