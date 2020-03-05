import React, { useState } from 'react';
import Row from '../../components/Row';
import PlayerCol from '../../components/PlayerCol';
import GameCol from '../../components/GameCol';
import InventoryCol from '../../components/InventoryCol';
import PlayerContext from '../../utils/PlayerContext'
import StoryContext from '../../utils/StoryContext'
import GameStory from '../../data/GameStory';
import useableItems from '../../data/useableItems';
import playableCharacters from '../../data/Characters';

function Game() {

    const [playerState, setPlayerState] = useState(playableCharacters[3]);
    const [storyState, setStoryState] = useState(GameStory[0]);


    const fetchState = (nextText) => GameStory.filter(instance => nextText === instance.id)[0];

    const setStory = (nextText) => {
        var storyStatus = fetchState(nextText);
        setStoryState(storyStatus);
    }

    const removeItem = (item_id) => {
        if (playerState.inventory.length === 1) {
            playerState.inventory = [];
        } else if (playerState.inventory.length >= 2) {
            playerState.inventory.splice(item_id, 1);
        }
    }


    const actions = (actions) => {
        console.log(actions);
        let health = playerState.hp;
        let food = playerState.food;
        let fuel = playerState.fuel;
        let money = playerState.money;
        let inventoryArr = playerState.inventory;
        // console.log(inventory)
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
        setPlayerState({ ...playerState, food: food, hp: health, inventory: inventoryArr, money: money, fuel: fuel });
        // console.log(inventoryArr);


    }


    return (
        <div>
            <StoryContext.Provider value={storyState}>
                <PlayerContext.Provider value={playerState}>
                    <Row>
                        <PlayerCol />
                        <GameCol actionMethod={actions}
                            storyMethod={setStory} />
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