const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tenantSchema = new Schema({
  name: { type: String, required: true }
});

const Tenant = mongoose.model("Tenant", tenantSchema);

module.exports = Tenant;