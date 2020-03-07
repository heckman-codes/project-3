const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    player_id: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
});


const Player = mongoose.model("User", UserSchema);

module.exports = User;