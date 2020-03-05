import React from 'react';
import playableCharacters from '../../data/Characters'

function CharSelection(props) {
    return (
        <div className="container">
            <div className="row center-align">
                <h4 style={{ marginTop: 30 + "px" }}>CHOOSE YOUR CHARACTER</h4>
            </div>
            <div className="row center-align">
                {playableCharacters.map(el =>
                    <button className="char-select col s5ths s2" key={el.name}>
                        <img style={{ paddingTop: 15 + "px" }} src={el.image} alt={el.name} className="player-pic" />
                        <h4>{el.name}</h4>
                        <h4 className="player-job" style={{ color: "goldenrod" }}>{el.occupation}</h4>
                        <p className="event-text">HP: {el.hp}</p>
                        <p className="event-text">Money: {el.money}</p>
                        <p className="event-text">Fuel: {el.fuel}</p>
                        <p className="event-text">Food: {el.food}</p>
                    </button>
                )}
            </div>
            <div className="row center-align">
                <button className="continue-btn"><h4>CONTINUE</h4></button>
            </div>
        </div>
    );
}

export default CharSelection;