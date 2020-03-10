const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_id: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
});


const User = mongoose.model("User", UserSchema);

module.exports = User;  