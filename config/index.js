const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const uri =
  process.env.MONGODB_URI || "mongodb://localhost/apartdb";
//"mongodb://user:apart1@ds141198.mlab.com:41198/heroku_9q7wwp10";



mongoose.connect(uri).then(
  () => {
    console.log("Connected to Mongo");
  },
  err => {
    console.log(err);
  }
);

module.exports = mongoose.connection;
