import React from "react";
import "../../pages/Home/style.css";

function Col(props) {
    const size = props.size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ");

    return <div className={size} {...props} />;
}

export default Col;
