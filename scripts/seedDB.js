const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/apartdb"
);

const householdSeed = [
  {
    name: "Test House",
    dateCreated: new Date(Date.now()),
    tenants: ["Brian", "Colin", "Paul", "Shannon"]
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

// Run "node scripts/seedDB.js" from terminal in the root directory to seed a household. Then, comment out the two blocks of code above, uncomment the code below and run "node scripts/seedDB.js" again to populate bills.

// const billSeed = [
//   {
//     description: "Monthly Rent",
//     amount: 1500,
//     dueDate: "11/1/2019",
//     creator: "Colin",
//     assignedToPay: ["Brian", "Paul", "Shannon"],
//     unpaidTenants: [],
//     paidTenants: []

//   },
//   {
//     description: "Electric Bill",
//     amount: 150,
//     dueDate: "11/3/2019",
//     creator: "Colin",
//     assignedToPay: ["Brian", "Paul", "Shannon"],
//     unpaidTenants: [],
//     paidTenants: []

//   }
// ];

// db.Bill
// .remove({})
// .then(() => db.Bill.collection.insertMany(billSeed))
// .then(data => {
//   console.log(data.result.n + " records inserted!");
//   process.exit(0);
// })
// .catch(err => {
//   console.error(err);
//   process.exit(1);
// })
