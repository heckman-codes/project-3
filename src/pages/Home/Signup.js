import React, { useState } from "react";
import HomeContainer from "../../components/HomeContainer";
import HomeCol from "../../components/HomeCol";
import HomeRow from "../../components/HomeRow";

const Signup = (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <HomeContainer className="mt-3 px-5">
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
                                onChange={e => setPassword(e.target.value)}
                            />
                        </HomeCol>
                    </HomeRow>
                    <button className="btn btn-success" type="submit">
                        Submit
                    </button>
                </HomeContainer>
                <HomeContainer className="mt-4">
                    <h3>Hello {username}!</h3>
                    <p>I probably shouldn't tell you this, but your password is {password}!</p>
                </HomeContainer>
            </form>
        </div>
    );
};

export default Signup;