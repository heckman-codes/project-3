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

    // const [playerState, setPlayerState] = useState({
    //     player_id: 1,
    //     name: "Adam",
    //     occupation: "Rapper",
    //     image: "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/character-test.png",
    //     hp: 100,
    //     money: 100,
    //     fuel: 100,
    //     food: 100,
    //     state: 1,
    //     inventory: [{ name: "Gun", desc: "This is a gun", image: "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/item_gun.gif", item_id: 2 }, { name: "Map", desc: "This is a Map", image: "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/item_map.gif", item_id: 3 }]
    // });

    const [playerState, setPlayerState] = useState(playableCharacters[3]);
    const [storyState, setStoryState] = useState({
        id: 0,
        image: "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/breakingbad.gif",
        title: "Introduction",
        text: "It’s been five years since the cataclysm.You’ve been etching out a living in what remains of Sacramento.The landscape of skyscrapers and towering structures had been reduced to smoldering piles of rubble from the near daily earthquakes.You’ve scraped by on supplies from various looting runs, but everything seems to be running out.The time to journey east is now.You’ve been modifying an old ford to make the journey, welding on armor and siphoning what gas you can.Before the signal died out last year, you picked up a radio signal repeating the message “Washington D.C.is the last remaining safe zone.For anyone listening, if you can make it here, we can help you.” You could hit the road now, or make one last stop at old Pete’s and buy additional supplies.",
        options: [{ text: "Leave without visiting the shop.", action: [50, 1, 2, 3, 4], nextText: 1.1 }, { text: "Visit Old Pete's Shop.", action: 2, nextText: 1.2 }]
    });

    const fetchState = (nextText) => GameStory.filter(instance => nextText === instance.id)[0];

    const setStory = (nextText) => {
        var storyStatus = fetchState(nextText);
        setStoryState(storyStatus);
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
                    health = health - 10;
                    break;
                case 2:
                    food = food + 10;
                    break;
                case 3:
                    fuel = fuel + 10;
                    break;
                case 4:
                    money = money + 10;
                    break;
                case 50:
                    console.log(inventoryArr);
                    if (inventoryArr.filter(e => e.item_id === 0).length === 0) {
                        inventoryArr = playerState.inventory.concat([useableItems[0]]);
                    }
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
                            storyMethod={setStory} />
                    </Row>
                </PlayerContext.Provider>
            </StoryContext.Provider>
        </div>
    );
}

export default Game;