const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  dueDate: String,
  dateCreated: { type: Date, default: Date.now },
  creator: { type: String, required: true },
  assignedToPay: { type: [String], required: true },
  unpaidTenants: [String],
  paidTenants: [String]
});

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;