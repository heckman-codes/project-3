import axios from "axios";

export default {

    // Gets the Users with the given id
    getLogin: function (userLoginData) {
        console.log(userLoginData);
        return axios.get("/api/login/", userLoginData);
    },
    // Deletes the User with the given id
    deleteLogin: function (id) {
        return axios.delete("/api/login/" + id);
    },
    // Saves a User to the database
    saveLogin: function (loginData) {
        return axios.get("/api/login", loginData);
    },
    // Saves a User to the database
    addUser: function (signupData) {
        return axios.post("/api/signup", signupData);
    },
    saveLogin: function (loginData) {
        console.log(loginData);
        const url = encodeURIComponent(JSON.stringify(loginData))
        return axios.get("/api/login/" + url)
    }
};
