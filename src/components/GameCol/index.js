import React, { useContext } from 'react';
import StoryContext from '../../utils/StoryContext'

function GameCol(props) {
    const { image, title, text, options } = useContext(StoryContext);
    console.log(props);
    return (
        <div className="col s6 game-col">
            <div className="event-image">
                <img className="event-img-file" src={image} alt="event-x" />
                {/* <img className="event-img-file" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/apocalypse1.webp" alt="event-x" /> */}
            </div>
            <div className="progress">
                <div className="determinate" style={{ width: 70 + "%" }}></div>
            </div>
            <div className="text-window">
                <p className="event-text" style={{ color: "gold" }}>{title}</p>
                <p className="event-text" style={{ fontFamily: 'Arcade', textTransform: 'initial' }}>{text}</p>
                {options.map(opt =>
                    <button className="option-button" key={opt.text} onClick={() => { props.actionMethod(opt.action); props.storyMethod(opt.nextText); }}>{opt.text}</button>
                )}
                {/* <p className="event-text" style={{ fontFamily: 'Arcade', textTransform: 'initial' }}>“I still don’t see why you believe in that safezone nonsense,”a gruff voice bellows out from behind his scruffy moustache.</p> */}
            </div>
        </div >
    );
}

export default GameCol;