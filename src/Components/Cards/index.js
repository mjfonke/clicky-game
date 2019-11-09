import React from "react";
import "./style.css";

function Cards (props) {
    return (
        <div className = "container">
            <div className = "img-container">
                <img className="imgSize" alt={props.name} src={props.image}/>
            </div>
        </div>
    )
}

export default Cards;