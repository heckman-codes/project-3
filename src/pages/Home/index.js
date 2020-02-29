import React from 'react';

function Home() {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Would you like to play a game?</h1>
                <p class="lead">This is a gentle game full of unicorns and butterflies.</p>
            </div>
            <button type="button" class="btn btn-primary" id="enter-game-btn" data-toggle="modal"
                data-target="#exampleModalCenter">
                Enter Game?
        </button>
        </div>



    );
}

export default Home;