import axios from "axios";

export default {

    // Gets the Users with the given id
    getLogin: function (user) {
        console.log(user);
        return axios.get("/api/login/", user);
    },
    // Deletes the User with the given id
    deleteLogin: function (id) {
        return axios.delete("/api/login/" + id);
    },
    // Saves a User to the database
    saveLogin: function (loginData) {
        return axios.post("/api/login", loginData);
    },
    // Saves a User to the database
    addUser: function (signupData) {
        return axios.post("/api/signup", signupData);
    }
    // startGame: function (signupData) {
    //     return axios.get("/api/character-select")
    // }
};