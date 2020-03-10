import React, { useContext } from 'react';
import PlayerContext from '../../utils/PlayerContext';



function PlayerCol() {
    const { hp, money, fuel, name, occupation, food, image } = useContext(PlayerContext);
    return (
        <div className="col s2 offset-s1 player-col center-align">
            <div className="player-pic-container">
                <img alt="Profile" className="player-pic" src={image} />
            </div>
            <div className="row">
                <h1 id="player-name" style={{ marginTop: "20px" }}>{name}</h1>
                <h4 className="player-job" style={{ color: "goldenrod" }}>{occupation}</h4>
                <div className="row" id="stat-container" style={{ margin: 0 + "auto" }}>
                    <div className="container">
                        <div className="col s6">
                            <img className="right-align" style={{ maxWidth: 40 + "px" }} alt="HP" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/beatingheart.gif" />
                        </div>
                        <div className="col s6">
                            <h5 className="left-align" id="hp-value">{hp}</h5>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ margin: 0 + "auto" }}>
                    <div className="container">
                        <div className="col s6">
                            <img className="right-align" style={{ maxWidth: 40 + "px" }} alt="HP" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/spinning-coin-2.gif" />
                        </div>
                        <div className="col s6">
                            <h5 className="left-align" id="money-value">{money}</h5>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ margin: 0 + "auto" }}>
                    <div className="container">
                        <div className="col s6">
                            <img className="right-align" style={{ maxWidth: 40 + "px" }} alt="HP" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/gascan.gif" />
                        </div>
                        <div className="col s6">
                            <h5 className="left-align" id="gas-value">{fuel}</h5>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ margin: 0 + "auto" }}>
                    <div className="container">
                        <div className="col s6">
                            <img className="right-align" style={{ maxWidth: 40 + "px" }} alt="HP" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/food-icon.png" />
                        </div>
                        <div className="col s6">
                            <h5 className="left-align" id="food-value">{food}</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PlayerCol;