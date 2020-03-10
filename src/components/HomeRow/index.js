import React from "react";
import "../../pages/Home/style.css";

function Row(props) {
    return <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Row;
