import React from 'react';

function PlayerCol(props) {
    return (
        <div className="col s3 player-col center-align" {...props}>
            <div className="player-pic-container">
                <img alt="Profile" className="player-pic" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/character-test.png" />
            </div>
            <div className="row">
                <h1 id="player-name">Adam</h1>
                <h4 id="player-job" style={{ color: "goldenrod" }}>Veterinarian</h4>
                <div className="col s6">
                    <p className="right-align">HP:</p>
                    <p className="right-align">Money:</p>
                    <p className="right-align">Gas:</p>
                    <p className="right-align">Food:</p>
                </div>
                <div className="col s6">
                    <p className="left-align" id="hp-value">100</p>
                    <p className="left-align" id="money-value">75</p>
                    <p className="left-align" id="gas-value">100</p>
                    <p className="left-align" id="food-value">100</p>
                </div>
            </div>
        </div>
    );
}

export default PlayerCol;