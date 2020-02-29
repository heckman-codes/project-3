import React from 'react';

function Home() {
    return (
        <div>
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
            <div class="footer footer-fluid">
                <footer>
                    <h3 id="footer" class="white-text"> &copy; <span id="footerLogo">(Game Name)</span></h3>
                </footer>
            </div>
        </div>
    );
}

export default Home;

//     < !--Modal Pop - Up to Login or Sign - Up-- >
//     <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
//         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//         <div class="modal-dialog modal-dialog-centered" role="document">
//             <div class="modal-content">
//                 <div class="modal-header">
//                     <h5 class="modal-title" id="exampleModalCenterTitle">Welcome! Please Login or Sign-Up below.</h5>
//                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">&times;</span>
//                     </button>
//                 </div>
//                 <div class="modal-footer">
//                     <button type="button" class="btn btn-primary">Login</button>
//                     <button type="button" class="btn btn-secondary">Sign-Up</button>
//                 </div>
//                 <div class="login-form">
//                     <form>
//                         <div class="form-group">
//                             <label for="exampleInputEmail1">Username</label>
//                             <input type="email" class="form-control" id="username-login" aria-describedby="Username">
//                         </div>
//                             <div class="form-group">
//                                 <label for="exampleInputPassword1">Password</label>
//                                 <input type="password" class="form-control" id="password-login">
//                         </div>
//                                 <button type="submit-login" class="btn btn-primary">Login</button>
//                     </form>
//                         </div>
//                         <div class="sign-up-form">
//                             <form>
//                                 <div class="form-group">
//                                     <label for="exampleInputEmail1">Username</label>
//                                     <input type="email" class="form-control" id="username-signup" aria-describedby="Username">
//                         </div>
//                                     <div class="form-group">
//                                         <label for="exampleInputPassword1">Password</label>
//                                         <input type="password" class="form-control" id="password-signup">
//                         </div>
//                                         <div class="form-group">
//                                             <label for="exampleInputPassword1">Confirm Password</label>
//                                             <input type="password" class="form-control" id="password-signup-confirm">
//                         </div>
//                                             <button type="submit-signup" class="btn btn-primary">Sign-Up</button>
//                     </form>
//                                     </div>
//                                 </div>
//         </div>
// </div>