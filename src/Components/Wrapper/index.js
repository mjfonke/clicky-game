import React from "react";

import "./style.css";

function Wrapper(props) {
  return (
  <div  className={
    props.animated ? "wrapper justify-content-center animated": "wrapper justify-content-center"}>{props.children}</div>
  )
}

export default Wrapper;