import axios from "axios";

export default {

    // Gets the Users with the given id
    getLogin: function (id) {
        console.log(id);
        return axios.get("/api/login/" + id);
    },
    // Saves a User to the database
    addUser: function (signupData) {
        return axios.post("/api/signup", signupData);
    },
    saveLogin: function (loginData) {
        console.log(loginData);
        return axios.get("/api/login", loginData)
    }
};
