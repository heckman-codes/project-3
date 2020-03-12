import axios from "axios";

export default {
    // Gets all Users
    getLogins: function () {
        return axios.get("/api/login");
    },
    // Gets the Users with the given id
    getLogin: function (id) {
        return axios.get("/api/login" + id);
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