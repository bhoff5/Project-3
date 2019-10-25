const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const householdSchema = new Schema({
  _id: {type: ObjectId },
  name: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
  tenants: [String]
});

const User = mongoose.model("Household", householdSchema);

module.exports = User;
