import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API"
import HomeContainer from "../HomeContainer";
import HomeCol from "../HomeCol";
import HomeRow from "../HomeRow";
import "../../pages/Home/style.css";

const Signup = (props) => {
    // const [username, setUsername] = useState();
    // const [password, setPassword] = useState();
    const [formObject, setFormObject] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    })
    const history = useHistory();

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name && formObject.password) {
            API.addUser({
                username: formObject.username,
                password: formObject.password
            })
                .then(res => history.push("/characters"))
                .catch(err => console.log(err));
        }
    };


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

                    <HomeRow className="form-group">
                        <HomeCol size="12">
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={formObject.confirmPassword}
                                onChange={handleInputChange}

                            />
                        </HomeCol>
                    </HomeRow>

                    <button onClick={handleFormSubmit} className="btn btn-success" type="submit" id="signUpBtn">
                        Sign Up
                    </button>
                </HomeContainer>
            </form>
        </div>
    );
};

export default Signup;