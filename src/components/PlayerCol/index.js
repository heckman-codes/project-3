import React from 'react';

function PlayerCol(props) {
    return (
        <div className="col s3 player-col center-align" {...props}>
            <div>
                <img alt="Profile" className="player-pic" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/character-test.png" />
            </div>
            <div className="row">
                <p>Adventurer</p>
                <div className="col s6">
                    <p className="right-align">HP:</p>
                    <p className="right-align">HP:</p>
                    <p className="right-align">HP:</p>
                    <p className="right-align">HP:</p>
                </div>
                <div className="col s6">
                    <p className="left-align">3000</p>
                    <p className="left-align">3000</p>
                    <p className="left-align">3000</p>
                    <p className="left-align">3000</p>
                </div>
            </div>
        </div>
    );
}

export default PlayerCol;