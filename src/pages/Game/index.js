import React from 'react';
import Row from '../../components/Row';
import PlayerCol from '../../components/PlayerCol';
import GameCol from '../../components/GameCol';
import InventoryCol from '../../components/InventoryCol';

function Game(props) {
    return (
        <div>
            <Row>
                <PlayerCol />
                <GameCol />
                <InventoryCol />
            </Row>
        </div>
    );
}

export default Game;