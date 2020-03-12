import axios from "axios";

export default {
    // Gets all books
    getLogins: function () {
        return axios.get("/api/login");
    },
    // Gets the book with the given id
    getLogin: function (id) {
        return axios.get("/api/login" + id);
    },
    // Deletes the book with the given id
    deleteLogin: function (id) {
        return axios.delete("/api/login/" + id);
    },
    // Saves a book to the database
    saveLogin: function (loginData) {
        return axios.post("/api/login", loginData);
    }
};