const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/apartdb"
);

const householdSeed = [
  {
    name: "Test House",
    dateCreated: new Date(Date.now())
  }
];

db.Household
  .remove({})
  .then(() => db.Household.collection.insertMany(householdSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
