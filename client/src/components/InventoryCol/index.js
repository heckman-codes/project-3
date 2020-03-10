import React, { useContext } from 'react';
import PlayerContext from '../../utils/PlayerContext'

function InventoryCol(props) {

    const { inventory } = useContext(PlayerContext);

    var toolytip = document.getElementsByClassName('.toolytip');

    document.addEventListener('mousemove', toolyTip, false);

    function toolyTip(e) {
        for (var i = toolytip.length; i--;) {
            toolytip[i].style.left = e.pageX + 'px';
            toolytip[i].style.top = e.pageY + 'px';
        }
    }

    // console.log(props)

    return (
        <div className="col s1 inventory-col">
            <p id="inventory" className="center-align">Items</p>
            <ul>
                {inventory.map(el =>
                    <li className="col s10 offset-s1 container toolytip" key={el.item_id}>
                        <img alt="inventory-item" className="inventory-item" src={el.image} />
                        <span className="toolytipdata">
                            <h4>{el.name}</h4>
                            <p className="toolytip-body-text">{el.desc}</p>
                        </span>
                    </li>
                )}
            </ul>
        </div >
    );
}

export default InventoryCol;