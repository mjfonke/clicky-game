import React from "react";
import "./style.css";

function Cards (props) {
    return (
        <div className = "container">
            <div className = "img-container">
                <img className="imgSize" alt={props.id} src={props.image} onClick={() => props.handleImgClick(props.id)}/>
            </div>
        </div>
    )
}

export default Cards;