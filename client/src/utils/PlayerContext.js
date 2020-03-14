import React from "react";
// default context object with properties corresponding to Provider values

const PlayerContext = React.createContext({
  player_id: 1,
  name: "Chad",
  occupation: "Sandwich Artist",
  image:
    "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/character-test.png",
  hp: 100,
  money: 100,
  fuel: 5,
  food: 100,
  state: 1,
  inventory: [
    {
      name: "Gun",
      desc: "This is a gun",
      image:
        "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/item_gun.gif"
    }
  ]
});

export default PlayerContext;
