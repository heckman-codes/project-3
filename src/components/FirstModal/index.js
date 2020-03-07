import React, { useState, useEffect } from 'react';

import Login from '../Login';
import SignUp from '../SignUp';

function FirstModal(props) {
    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Ready to Play?</h5>
            </div>
            <div className="modal-body-main">
                <p>Please Login Or Sign-Up!</p>
            </div>
            <div className="modal-footer">
                <button onClick={Login} type="button" className="btn btn-primary">Login</button>
                <button onClick={SignUp} type="button" className="btn btn-primary">Sign-Up</button>
            </div>
        </div>
    );
};

export default FirstModal;