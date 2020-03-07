import React from "react";
import "../../pages/Home/style.css";

function Container(props) {
    return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Container;
