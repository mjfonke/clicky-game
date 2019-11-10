import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="jumbotron">
            <h1 className="display-4 text-center">SOLAR SYSTEM <br></br> CLICKY GAME</h1>
            <h3 className="text-center">Click on an image to earn points, <br></br>but don't click on any more than once!</h3>
        </div>
    )
}
export default Header;