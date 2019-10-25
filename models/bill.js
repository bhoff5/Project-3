const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
  household: { type: String },
  title: { type: String, required: true },
  description: String,
  amount: { type: Number, required: true },
  dueDate: String,
  dateCreated: { type: Date, default: Date.now },
  creator: { type: String, required: true },
  assignedToPay: { any: Array }
});

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;
