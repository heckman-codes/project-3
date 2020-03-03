import React, { Component } from "react";
// import "./style.css";

class Login extends Component {
    // Setting the component's initial state
    state = {
        username: "",
        password: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        if (name === "password") {
            value = value.substring(0, 15);
        }
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!this.state.username) {
            alert("Please enter your username!");
        } else if (this.state.password.length < 6) {
            alert(
                `Choose a more secure password ${this.state.username}`
            );
        } else {
            alert(`Hello ${this.state.username}`);
        }

        this.setState({
            username: "",
            password: ""
        });
    };

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>
                <p>
                    Hello {this.state.username}
                </p>
                <form className="form">
                    <input
                        value={this.state.username}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        value={this.state.password}
                        name="password"
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="Password"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;
