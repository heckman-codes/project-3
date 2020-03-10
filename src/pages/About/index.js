import React from 'react';

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 center-align">
                    <img alt="logo" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/longwaylog.png" style={{ marginTop: 50 + "px", marginBottom: 50 + "px" }} />
                    <p className="event-text" style={{ fontFamily: "Arcade" }}>
                        Welcome to The Long Way, an oregon-trail style survival game in which you try to
                        navigate your way through a post-apocalyptic wasteland and make your way to safety.
                        Along the way, you’ll face choices that will affect your health, fuel levels, food,
                        or money. Be careful, if your health, fuel, or food hit zero, it will be game over.
                        Can you survive The Long Way?</p>
                </div>
            </div>
        </div>
    );
}

export default About;