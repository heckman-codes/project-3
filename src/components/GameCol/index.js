import React from 'react';

function GameCol(props) {
    return (
        <div className="col s6 game-col" {...props}>
            <div className="event-image">
                <img className="event-img-file" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/breakingbad.gif" alt="event-x" />
                {/* <img className="event-img-file" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/apocalypse1.webp" alt="event-x" /> */}
            </div>
            <div className="progress">
                <div className="determinate" style={{ width: 70 + "%" }}></div>
            </div>
            <div className="text-window">
                <p className="event-text" style={{ color: "gold" }}>Old Pete's Mobile Home</p>
                <p className="event-text" style={{ fontFamily: 'Arcade', textTransform: 'initial' }}>You enter old Pete’s mobile home, greeted by a familiar but still overwhelming stench. Pete had a way of scavenging and crafting useful supplies, and was one of the few folks out there still accepting paper currency. </p>
                <p className="event-text" style={{ fontFamily: 'Arcade', textTransform: 'initial' }}>“I still don’t see why you believe in that safezone nonsense,”a gruff voice bellows out from behind his scruffy moustache.</p>
            </div>
        </div >
    );
}

export default GameCol;