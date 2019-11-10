import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <div className="navbar sticky-top">
            <div className="text-white">Solar System Clicky Game</div>
            <div className="text-white">{props.message}</div>
            <div className="text-white">Score: {props.score} | Top Score: {props.topScore}</div>
        </div>
    )
}

export default Nav;