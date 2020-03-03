import React, { useState, useEffect } from 'react';
// import Test from "../../components/Modal"
import "../Home/style.css"
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        padding: '0rem',
        transform: 'translate(-50%, -50%)',
    }
};

function Home() {

    useEffect(() => {
        Modal.setAppElement('body');
    }, []
    )

    // var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    function login() {
        setIsOpen(true)
        // ("modal-body-main").hide()
    }

    function signUp() {
        setIsOpen(true)
    }

    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Would you like to play a game?</h1>
                    <p className="lead">This is a gentle game full of unicorns and butterflies.</p>
                </div>
                <button onClick={openModal} type="button" className="btn btn-primary" id="enter-game-btn" data-toggle="modal"
                    data-target="#exampleModalCenter">
                    Enter Game?
                </button>
            </div>
            <div className="footer footer-fluid">
                <footer>
                    <h3 id="footer" className="white-text"> &copy; <span id="footerLogo">The Long Way</span></h3>
                </footer>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Ready to Play?</h5>
                    </div>
                    <div className="modal-body-main">
                        <p>Please Login Or Sign-Up!</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={login} type="button" className="btn btn-primary">Login</button>
                        <button onClick={signUp} type="button" className="btn btn-primary">Sign-Up</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Home;