const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_id: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
});


const User = mongoose.model("User", UserSchema);

module.exports = User; 