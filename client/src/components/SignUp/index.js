import React, { useState } from "react";
import HomeContainer from "../HomeContainer";
import HomeCol from "../HomeCol";
import HomeRow from "../HomeRow";
import "../../pages/Home/style.css";

const Signup = (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    // const [formObject, setFormObject] = useState({})

    // useEffect(() => {
    //     addUser()
    // }, [])


    // function addUser() {
    //     API.loadUser()
    //         .then(res =>
    //             setUsers(res.data)
    //         )
    //         .catch(err => console.log(err));
    // };

    // // Handles updating component state when the user types into the input field
    // function handleInputChange(event) {
    //     const { name, value } = event.target;
    //     setFormObject({ ...formObject, [name]: value })
    // };

    // // When the form is submitted, use the API.saveBook method to save the book data
    // // Then reload books from the database
    // function handleFormSubmit(event) {
    //     event.preventDefault();
    //     if (formObject.name && formObject.password) {
    //         API.saveUser({
    //             name: formObject.name,
    //             password: formObject.password
    //         })
    //             .then(res => loadUser())
    //             .catch(err => console.log(err));
    //     }
    // };


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