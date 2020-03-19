import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className="container">
                <div className="nav-wrapper">
                    <img href="/" className="brand-logo logo-img valign-wrapper" alt="logo" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/longwaylog.png" />
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/Game"}>Play</Link></li>
                        <li><Link to={"/About"}>About</Link></li>
                        <li><Link to={"/Credits"}>Credits</Link></li>
                        <li><Link to={"/CharSelection"}>Characters</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar