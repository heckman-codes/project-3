import React from 'react';

function PlayerCol(props) {
    return (
        <div className="col s2 offset-s1 player-col center-align" {...props}>
            <div className="player-pic-container">
                <img alt="Profile" className="player-pic" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/character-test.png" />
            </div>
            <div className="row">
                <h1 id="player-name" style={{ marginTop: "20px" }}>Chad</h1>
                <h4 id="player-job" style={{ color: "goldenrod" }}>Sandwich Artist</h4>
                <div className="row" id="stat-container" style={{ margin: 0 + "auto" }}>
                    <div className="container">
                        <div className="col s6">
                            <img className="right-align" style={{ maxWidth: 40 + "px" }} alt="HP" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/beatingheart.gif" />
                        </div>
                        <div className="col s6">
                            <h5 className="left-align" id="hp-value">40</h5>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ margin: 0 + "auto" }}>
                    <div className="container">
                        <div className="col s6">
                            <img className="right-align" style={{ maxWidth: 40 + "px" }} alt="HP" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/spinning-coin-2.gif" />
                        </div>
                        <div className="col s6">
                            <h5 className="left-align" id="money-value">172</h5>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ margin: 0 + "auto" }}>
                    <div className="container">
                        <div className="col s6">
                            <img className="right-align" style={{ maxWidth: 40 + "px" }} alt="HP" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/gascan.gif" />
                        </div>
                        <div className="col s6">
                            <h5 className="left-align" id="gas-value">18%</h5>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ margin: 0 + "auto" }}>
                    <div className="container">
                        <div className="col s6">
                            <img className="right-align" style={{ maxWidth: 40 + "px" }} alt="HP" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/food-icon.png" />
                        </div>
                        <div className="col s6">
                            <h5 className="left-align" id="food-value">55</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PlayerCol;