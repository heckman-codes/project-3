const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: {
        type: String,
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
});


const User = mongoose.model("User", UserSchema);

module.exports = User;  