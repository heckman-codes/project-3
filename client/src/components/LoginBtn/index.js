import React from "react";
import "../../pages/Home/style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function LoginBtn(props) {
    return (
        <div className="modal-footer">
            <button className="btn btn-primary"{...props} role="button" tabIndex="0">
                Login
            </button>
        </div>
    );
}

export default LoginBtn;