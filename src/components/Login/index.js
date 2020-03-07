
// import React, { useState } from "react";

// const Login = () => {
//     const [username, setUsername] = useState();
//     const [password, setPassword] = useState();


//     return (
//         <div>
//             <form>
//                 <input
//                     className="form-control"
//                     type="text"
//                     placeholder="Username"
//                     name="username"
//                     onChange={e => setUsername(e.target.value)}
//                 />
//                 <input
//                     className="form-control"
//                     type="password"
//                     placeholder="Password"
//                     name="password"
//                     onChange={e => setPassword(e.target.value)}
//                 />
//                 <button className="btn btn-success" type="submit">
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Login;

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);