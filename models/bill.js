const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
  household: Array,
  title: { type: String, required: true },
  description: String,
  amount: { type: Number, required: true },
  dueDate: String,
  dateCreated: { type: Date, default: Date.now },
  creator: { type: String, required: true },
  assignedToPay: [
    {
      name: String,
      paid: { type: Boolean, default: false }
    }
  ]
});

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;
