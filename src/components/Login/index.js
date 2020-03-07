
import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    return (
        <div>
            <form>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="btn btn-success" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;