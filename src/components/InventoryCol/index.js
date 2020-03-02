import React from 'react';

function InventoryCol(props) {

    var tooltip = document.getElementsByClassName('.toolytip');

    document.addEventListener('mousemove', toolTip, false);

    function toolTip(e) {
        for (var i = tooltip.length; i--;) {
            tooltip[i].style.left = e.pageX + 'px';
            tooltip[i].style.top = e.pageY + 'px';
        }
    }

    return (
        <div className="col s1 center-align inventory-col" {...props}>
            <p id="inventory">Items</p>
            <ul>
                <li className="col s10 offset-s1 container">
                    <img alt="inventory-item" className="inventory-item toolytip" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/item_gun.gif" />
                    <span className="toolytipdata">Gun</span>
                </li>
                <li className="col s10 offset-s1 container">
                    <img alt="inventory-item" className="inventory-item" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/item_walkieTalkie.gif" />
                </li>
                <li className="col s10 offset-s1 container">
                    <img alt="inventory-item" className="inventory-item" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/item_map.gif" />
                </li>
                <li className="col s10 offset-s1 container">
                    <img alt="inventory-item" className="inventory-item" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/item_key.gif" />
                </li>

            </ul>
        </div>
    );
}

export default InventoryCol;