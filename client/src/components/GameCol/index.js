import React, { useContext, useState } from 'react';
import Typist from 'react-typist'
import StoryContext from '../../utils/StoryContext'
import PlayerContext from '../../utils/PlayerContext';

function GameCol(props) {
    const { image, title, text, options, progress } = useContext(StoryContext);
    const { inventory } = useContext(PlayerContext);
    console.log(props);
    const [showTyping, setShowTyping] = useState(0);

    // const Switch = () => {
    //     props.storyState({ text: text, options: options })
    // }

    // function useForceUpdate() {
    //     const [value, setValue] = useState(0); // integer state
    //     return () => setValue(value => ++value); // update the state to force render
    // }

    // function updateText() {
    //     this.setStory({ text: text })
    // }

    return (
        <div className="col s6 game-col">
            <div className="event-image">
                <img className="event-img-file" src={image} alt="event-x" />
            </div>
            <div className="progress">
                <div className="determinate" style={{ width: progress + "%" }}></div>
            </div>
            <div className="text-window">
                <p className="event-text" style={{ color: "gold" }}>{title}</p>
                <Typist avgTypingDelay={1} key={showTyping}>
                    <p className="event-text" style={{ fontFamily: 'Arcade', textTransform: 'initial' }}>{text}</p>
                    {options.map(opt => {
                        if (!opt.showIfInventoryHas) {
                            return <button className="option-button" key={opt.text} onClick={() => { props.actionMethod(opt.action, opt.nextText); setShowTyping(showTyping + 1); }}>{opt.text}</button>
                        }
                        else if (inventory.map((x) => x.item_id).indexOf(opt.showIfInventoryHas) > -1) {
                            return <button className="option-button" key={opt.text} onClick={() => { props.actionMethod(opt.action, opt.nextText); setShowTyping(showTyping + 1); }}>{opt.text}</button>
                        }
                    }
                    )}
                </Typist>
            </div>
        </div >
    );
}

export default GameCol;