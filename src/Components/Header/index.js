import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="jumbotron">
            <h1 className="display-4 text-center">Solar System Clicky Game</h1>
            <h3 className="text-center">Click on an image to earn points, but don't click on any more than once!</h3>
        </div>
    )
}
export default Header;