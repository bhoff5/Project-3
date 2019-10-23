const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  dueDate: String,
  dateCreated: { type: Date, default: Date.now },
  assignedToPay: { type: [String], required: true }
});

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;