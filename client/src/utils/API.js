import axios from "axios";

export default {

    // Gets the Users with the given id
<<<<<<< HEAD
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
        return axios.post("/api/login", loginData);
=======
    getLogin: function (id) {
        console.log(id);
        return axios.get("/api/login/" + id);
>>>>>>> 9aaa3097e6366d6489769b53696bf8a35a96ac0b
    },
    // Saves a User to the database
    addUser: function (signupData) {
        return axios.post("/api/signup", signupData);
    }
};