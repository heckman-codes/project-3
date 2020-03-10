import React from "react";
// default context object with properties corresponding to Provider values

const StoryContext = React.createContext({
    id: 0,
    image: "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/breakingbad.gif",
    title: "STORY TEXT",
    text: "Body Copy",
    options: []
});

export default StoryContext;