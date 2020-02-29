import Modal from "../../components/Modal"
import "../Home/style.css"
import React from 'react';

function Home() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Would you like to play a game?</h1>
                    <p className="lead">This is a gentle game full of unicorns and butterflies.</p>
                </div>
                <button type="button" className="btn btn-primary" id="enter-game-btn" data-toggle="modal"
                    data-target="#exampleModalCenter">
                    Enter Game?
            </button>
            </div>
            <div className="footer footer-fluid">
                <footer>
                    <h3 id="footer" className="white-text"> &copy; <span id="footerLogo">(Game Name)</span></h3>
                </footer>
            </div>
            <Modal />
        </div>
    );
}

export default Home;

//     < !--Modal Pop - Up to Login or Sign - Up-- >
//     <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
//         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//         <div className="modal-dialog modal-dialog-centered" role="document">
//             <div className="modal-content">
//                 <div className="modal-header">
//                     <h5 className="modal-title" id="exampleModalCenterTitle">Welcome! Please Login or Sign-Up below.</h5>
//                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">&times;</span>
//                     </button>
//                 </div>
//                 <div className="modal-footer">
//                     <button type="button" className="btn btn-primary">Login</button>
//                     <button type="button" className="btn btn-secondary">Sign-Up</button>
//                 </div>
//                 <div className="login-form">
//                     <form>
//                         <div className="form-group">
//                             <label for="exampleInputEmail1">Username</label>
//                             <input type="email" className="form-control" id="username-login" aria-describedby="Username">
//                         </div>
//                             <div className="form-group">
//                                 <label for="exampleInputPassword1">Password</label>
//                                 <input type="password" className="form-control" id="password-login">
//                         </div>
//                                 <button type="submit-login" className="btn btn-primary">Login</button>
//                     </form>
//                         </div>
//                         <div className="sign-up-form">
//                             <form>
//                                 <div className="form-group">
//                                     <label for="exampleInputEmail1">Username</label>
//                                     <input type="email" className="form-control" id="username-signup" aria-describedby="Username">
//                         </div>
//                                     <div className="form-group">
//                                         <label for="exampleInputPassword1">Password</label>
//                                         <input type="password" className="form-control" id="password-signup">
//                         </div>
//                                         <div className="form-group">
//                                             <label for="exampleInputPassword1">Confirm Password</label>
//                                             <input type="password" className="form-control" id="password-signup-confirm">
//                         </div>
//                                             <button type="submit-signup" className="btn btn-primary">Sign-Up</button>
//                     </form>
//                                     </div>
//                                 </div>
//         </div>
// </div>