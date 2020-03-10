import React, { useState } from "react";
import HomeContainer from "../../components/HomeContainer";
import HomeCol from "../../components/HomeCol";
import HomeRow from "../../components/HomeRow";
import "../../pages/Home/style.css";

const Signup = (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <HomeContainer className="mt-3 px-5" id="sign-up-container">
                    <HomeRow>
                        <h3>Please Sign Up Below.</h3>
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

                    <HomeRow className="form-group">
                        <HomeCol size="12">
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={password}
                                onChange={e => setPassword(e.target.value)}

                            />
                        </HomeCol>
                    </HomeRow>

                    <button className="btn btn-success" type="submit" id="signUpBtn">
                        Sign Up
                    </button>
                </HomeContainer>
            </form>
        </div>
    );
};

export default Signup;