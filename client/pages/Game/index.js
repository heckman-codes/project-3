import React, { useState } from 'react';
import Row from '../../components/Row';
import PlayerCol from '../../components/PlayerCol';
import GameCol from '../../components/GameCol';
import InventoryCol from '../../components/InventoryCol';
import PlayerContext from '../../src/utils/PlayerContext'
import StoryContext from '../../src/utils/StoryContext'
import GameStory from '../../src/data/GameStory';
import useableItems from '../../src/data/useableItems';
import playableCharacters from '../../src/data/Characters';

function Game() {

    // The code below is intended to load the player's state from MongoDB and then set that as the view state.
    // Eventually, if you die or win it loads a new storyState and you can choose a new character by clicking and option that
    // takes you to the character selection menu

    // const setGameState = () => {
    //If Logged in = true
    //GET player profile where token equal player_id
    //playerProfile = player file that was retrieved
    //setPlayerState(playerProfile)

    // for (let i =0; i < GameStory.length; i++){
    //     if (playerProfile.state === GameStory[i].id){
    //         setStoryState(GameStory[i])
    //     }
    // }
    // }

    // let playerProfile;

    // document.onload(setGameState);


    const [playerState, setPlayerState] = useState(playableCharacters[3]);
    // const [playerState, setPlayerState] = useState(playerProfile);

    const [storyState, setStoryState] = useState(GameStory[0]);
    console.log(storyState.text)


    const fetchState = (nextText) => GameStory.filter(instance => nextText === instance.id)[0];

    const setStory = (nextText) => {
        let storyStatus = fetchState(nextText);
        setStoryState(storyStatus);
    }



    // const storyShow = () => {

    // }

    const removeItem = (name) => {
        if (playerState.inventory.length === 1) {
            playerState.inventory = [];
        } else {
            // for (var i = 0; i < playerState.inventory.length; i++) {
            //     var obj = playerState.inventory[i];

            //     if (listToDelete.indexOf(obj.id) !== -1) {
            //         playerState.inventory.splice(i, 1);
            //         i--;
            //     }
            // }
            playerState.inventory.splice(name, 1);
        }
    }




    const actions = (actions) => {
        // console.log(actions);
        let health = playerState.hp;
        let food = playerState.food;
        let fuel = playerState.fuel;
        let money = playerState.money;
        let inventoryArr = playerState.inventory;
        let stateNum = storyState.id;
        console.log(stateNum);
        for (let i = 0; i < actions.length; i++) {
            const action = actions[i];

            switch (action) {

                case 1:
                    if (inventoryArr.filter(e => e.item_id === 0).length === 0) {
                        inventoryArr = playerState.inventory.concat([useableItems[0]]);
                    }
                    break;
                case 2:
                    if (inventoryArr.filter(e => e.item_id === 1).length === 0) {
                        inventoryArr = playerState.inventory.concat([useableItems[1]]);
                    }
                    break;
                case 3:
                    if (inventoryArr.filter(e => e.item_id === 2).length === 0) {
                        inventoryArr = playerState.inventory.concat([useableItems[2]]);
                    }
                    break;
                case 4:
                    if (inventoryArr.filter(e => e.item_id === 3).length === 0) {
                        inventoryArr = playerState.inventory.concat([useableItems[3]]);
                    }
                    break;
                case 5:
                    if (inventoryArr.filter(e => e.item_id === 4).length === 0) {
                        inventoryArr = playerState.inventory.concat([useableItems[4]]);
                    }
                    break;
                case 6:
                    if (inventoryArr.filter(e => e.item_id === 5).length === 0) {
                        inventoryArr = playerState.inventory.concat([useableItems[5]]);
                    }
                    break;
                case 7:
                    food = food - 15;
                    break;
                case 8:
                    food = food - 5;
                    break;
                case 9:
                    food = food + 10;
                    break;
                case 10:
                    food = food + 4
                    break;
                case 11:
                    food = food + 5
                    break;
                case 12:
                    fuel = fuel - 5;
                    break;
                case 13:
                    fuel = fuel + 10;
                    break;
                case 14:
                    fuel = fuel + 3
                    break;
                case 15:
                    health = health - 10;
                    break;
                case 16:
                    health = health - 15;
                    break;
                case 17:
                    health = health - 5;
                    break;
                case 18:
                    health = health + 1;
                    break;
                case 19:
                    health = health + 10;
                    break;
                case 20:
                    health = health + 5;
                    break;
                case 21:
                    money = money + 10;
                    break;
                case 22:
                    money = money + 20;
                    break;
                case 23:
                    money = money + 25;
                    break;
                case 24:
                    money = money + 5;
                    break;
                case 25:
                    money = money - 5;
                    break;
                case 26:
                    money = money - 10;
                    break;
                case 27:
                    money = money - 15;
                    break;
                case 28:
                    money = money - 20;
                    break;
                case 29:
                    money = money - 25;
                    break;
                case 30:
                    money = money - 50;
                    break;
                case 31:
                    food = food + 10;
                    break;
                case 32:
                    fuel = fuel + 15;
                    break;

                default:
                    break
            }
        }
        setPlayerState({ ...playerState, food: food, hp: health, inventory: inventoryArr, money: money, fuel: fuel, state: stateNum });
        console.log({ playerState });


    }


    return (
        <div>
            <StoryContext.Provider value={storyState}>
                <PlayerContext.Provider value={playerState}>
                    <Row>
                        <PlayerCol />
                        <GameCol actionMethod={actions}
                            storyMethod={setStory}
                            storyState={setStoryState} />
                        <InventoryCol actionMethod={actions}
                            storyMethod={setStory}
                            removeItem={removeItem} />
                    </Row>
                </PlayerContext.Provider>
            </StoryContext.Provider>
        </div>
    );
}

export default Game;