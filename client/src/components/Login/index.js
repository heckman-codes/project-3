import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import API from "../../utils/API"
import HomeContainer from "../HomeContainer";
import HomeCol from "../HomeCol";
import HomeRow from "../HomeRow";
import "../../pages/Home/style.css";

const Login = (props) => {

    const [formObject, setFormObject] = useState({
        username: "",
        password: "",
    })

    const history = useHistory();


    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.username && formObject.password) {
            API.getLogin({

                username: formObject.username,
                password: formObject.password
            })
                // insert play game history thing here...
                .then(res => history.push("/game"))
                .catch(err => console.log(err));
        }
        else (
            console.log("You failed to Login!")
        )
    };

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
                                value={formObject.username}
                                onChange={handleInputChange}
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
                                value={formObject.password}
                                onChange={handleInputChange}
                            />
                        </HomeCol>
                    </HomeRow>

                    <button onClick={handleFormSubmit} className="btn btn-success" type="submit">
                        Login
                    </button>
                </HomeContainer>

            </form>
        </div>
    );
};

export default Login;