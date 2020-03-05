import React from 'react';

function Navbar() {
    return (
        <nav>
            <div className="container">
                <div className="nav-wrapper">
                    <img href="/" className="brand-logo logo-img valign-wrapper" alt="logo" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/longwaylog.png" />
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a href="/game">Play</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/credits">Credits</a></li>
                        <li><a href="/characters">Characters</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar