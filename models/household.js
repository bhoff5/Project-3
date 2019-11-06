const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const householdSchema = new Schema({
  name: { type: String, required: true, unique: true },
  dateCreated: { type: Date, default: Date.now },
  tenants: [String]
});

const User = mongoose.model("Household", householdSchema);

module.exports = User;
