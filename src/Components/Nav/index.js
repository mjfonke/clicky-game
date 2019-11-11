import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <div className="navbar sticky-top text-white">
            <div>Solar System Clicky Game</div>
            <div className={props.color}>{props.message}</div>
            <div>Score: {props.score} | Top Score: {props.topScore}</div>
        </div>
    )
}

export default Nav;