import React from 'react';
import playableCharacters from '../../data/Characters'

function CharSelection(props) {
    let playerObject;

    const charSelect = (name) => {
        for (let i = 0; i < playableCharacters.length; i++) {
            if (name === playableCharacters[i].name)
                playerObject = playableCharacters[i]
        }
        // playerObject.player_id = /* USERNAME COOKIE ID OR WHATEVER */
        console.log(playerObject);
    }

    const setStartState = () => {
        // console.log(playerObject)
        if (playerObject === undefined) {
            console.log("Pick a character first")
            alert("Pick a character before your continue");
            //Modal or alert that tells you to pick a character first
        } else {
            console.log("You chose: " + playerObject.name)
            //save to MongoDB and then switch to game page
        }
    }

    return (
        <div className="container">
            <div className="row center-align">
                <h4 style={{ marginTop: 30 + "px" }}>CHOOSE YOUR CHARACTER</h4>
            </div>
            <div className="row center-align">
                {playableCharacters.map(el =>
                    <button className="char-select col s5ths s2" key={el.name} id={el.name} onClick={() => { charSelect(el.name) }}>
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
                <button className="continue-btn" onClick={() => { setStartState() }}><h4>CONTINUE</h4></button>
            </div>
        </div>
    );
}

export default CharSelection;