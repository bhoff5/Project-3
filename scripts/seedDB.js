const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/apartdb");

const householdSeed = [
  {
    _id: "qwerty12345",
    name: "Test House",
    dateCreated: new Date(Date.now()),
    tenants: ["bhoff", "SpinningRobo", "pdlampe", "shanyon"]
  },
  {
    _id: "asfdjkl",
    name: "Test House 2: Test Houser",
    dateCreated: new Date(Date.now()),
    tenants: ["ElTester"]
  }
];

db.Household.remove({})
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

// const userSeed = [
//   {
//     username: "ElTester",
//     email: "test@test.test",
//     displayName: "Testman",
//     password: "bigtest",
//     households: ["asdfjkl"]
//   },
//   {
//     username: "SpinningRobo",
//     email: "colin@test.com",
//     displayName: "Colin",
//     password: "password",
//     households: ["qwerty12345"]
//   },
//   {
//     username: "shanyon",
//     email: "shannonburke.art@gmail.com",
//     displayName: "Shannon",
//     password: "password",
//     households: ["qwerty12345"]
//   },
//   {
//     username: "pdlampe",
//     email: "paul@test.com",
//     displayName: "Paul",
//     password: "password",
//     households: ["qwerty12345"]
//   },
//   {
//     username: "bhoff",
//     email: "brian@test.com",
//     displayName: "Brian",
//     password: "password",
//     households: ["qwerty12345"]
//   }
// ];

// db.User.remove({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
// });


// const billSeed = [
//   {
//     household: "qwerty12345",
//     title: "Monthly Rent",
//     description: "Rent for the month of November",
//     amount: 1500,
//     dueDate: "11/1/2019",
//     creator: "Colin",
//     assignedToPay: [
//       { name: "Brian", paid: false },
//       { name: "Paul", paid: false },
//       { name: "Shannon", paid: false }
//     ]
//   },
//   {
//     household: "asdfjkl",
//     title: "Electric Bill",
//     description: "MORE POWER",
//     amount: 150,
//     dueDate: "11/3/2019",
//     creator: "Albert",
//     assignedToPay: [
//       { name: "Brian", paid: false },
//       { name: "Shannon", paid: false },
//       { name: "Paul", paid: false }
//     ]
//   }
// ];

// db.Bill.remove({})
//   .then(() => db.Bill.collection.insertMany(billSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
