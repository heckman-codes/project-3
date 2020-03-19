import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API"
import HomeContainer from "../HomeContainer";
import HomeCol from "../HomeCol";
import HomeRow from "../HomeRow";
import SignUpBtn from "../SignUpBtn";
import "../../pages/Home/style.css";

const Signup = (props) => {

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

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.username && formObject.password === formObject.confirmPassword) {
            API.addUser({
                username: formObject.username,
                password: formObject.password
            })
                .then(res => history.push("/characters"))
                .catch(err => console.log(err));
        }
        else (
            console.log("You failed to Sign-Up.")
        )
    };


    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <HomeContainer className="mt-3 px-5" id="sign-up-container">
                    <HomeRow>
                        <div className="modal-header">
                            <h5 className="modal-title">Please Sign-Up To Create An Account!</h5>
                        </div>
                    </HomeRow>
                    <HomeRow className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={formObject.username}
                            onChange={handleInputChange}
                        />
                    </HomeRow>
                    <HomeRow className="form-group">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formObject.password}
                            onChange={handleInputChange}
                        />
                    </HomeRow>

                    <HomeRow className="form-group">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={formObject.confirmPassword}
                            onChange={handleInputChange}
                        />
                    </HomeRow>

                    <SignUpBtn onClick={handleFormSubmit}></SignUpBtn>

                </HomeContainer>
            </form>
        </div>
    );
};

export default Signup;