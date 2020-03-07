const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  player_id: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  hp: { type: Number, required: true },
  money: { type: Number, required: true },
  fuel: { type: Number, required: true },
  food: { type: Number, required: true },
  state: { type: Number, required: true },
  inventory: [{ name: String, desc: String, image: String, required: true }],
  date: { type: Date, default: Date.now }
});


const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
