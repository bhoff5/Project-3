const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const householdchema = new Schema({
  name: { type: String, required: true, unique: true },
  dateCreated: { type: Date, default: Date.now },
  tenants: [String]
});

const User = mongoose.model("Household", householdchema);

module.exports = User;
