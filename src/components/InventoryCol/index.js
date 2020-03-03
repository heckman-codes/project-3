import React from 'react';

function InventoryCol(props) {

    // const [toolTip, setTooltip] = useState();

    var toolytip = document.getElementsByClassName('.toolytip');

    document.addEventListener('mousemove', toolyTip, false);

    function toolyTip(e) {
        for (var i = toolytip.length; i--;) {
            toolytip[i].style.left = e.pageX + 'px';
            toolytip[i].style.top = e.pageY + 'px';
        }
    }

    return (
        <div className="col s1 inventory-col" {...props}>
            <p id="inventory" className="center-align">Items</p>
            <ul>
                <li className="col s10 offset-s1 container toolytip">
                    <img alt="inventory-item" className="inventory-item" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/item_gun.gif" />
                    <span className="toolytipdata">
                        <h4>Gun</h4>
                        <p className="toolytip-body-text">Defeat any combat encounter with this.</p>
                    </span>
                </li>
                <li className="col s10 offset-s1 container toolytip">
                    <img alt="inventory-item" className="inventory-item" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/item_walkieTalkie.gif" />
                    <span className="toolytipdata">
                        <h4>Walkie Talkie</h4>
                        <p className="toolytip-body-text">Call in Old Pete any time you need him. Remember, he owes you. Big time.</p>
                    </span>
                </li>
                <li className="col s10 offset-s1 container toolytip">
                    <img alt="inventory-item" className="inventory-item" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/item_map.gif" />
                    <span className="toolytipdata">
                        <h4>Map</h4>
                        <p className="toolytip-body-text">I'm not a cartographer but someone might be able to read this.</p>
                    </span>
                </li>
                <li className="col s10 offset-s1 container toolytip">
                    <img alt="inventory-item" className="inventory-item" src="https://project-3-arcade-game.s3-us-west-2.amazonaws.com/item_key.gif" />
                    <span className="toolytipdata">
                        <h4>Key</h4>
                        <p className="toolytip-body-text">This looks like it can unlock something.</p>
                    </span>
                </li>

            </ul>
        </div>
    );
}

export default InventoryCol;