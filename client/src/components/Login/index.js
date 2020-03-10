import React, { useState } from "react";
import HomeContainer from "../HomeContainer";
import HomeCol from "../HomeCol";
import HomeRow from "../HomeRow";
import "../../pages/Home/style.css";

const Login = (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <HomeContainer className="mt-3 px-5" id="login-container">
                    <HomeRow>
                        <h3>Please Enter your Username and Password.</h3>
                    </HomeRow>
                    <HomeRow className="form-group">
                        <HomeCol size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Username"
                                name="username"
                                onChange={e => setUsername(e.target.value)}
                            />
                        </HomeCol>
                    </HomeRow>
                    <HomeRow className="form-group">
                        <HomeCol size="12">
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </HomeCol>
                    </HomeRow>

                    <button className="btn btn-success" type="submit">
                        Login
                    </button>
                </HomeContainer>

            </form>
        </div>
    );
};

export default Login;