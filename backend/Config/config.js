const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URL = process.env.MONGODB_URL;

const run = async () => {
  await mongoose.connect(MONGODB_URL);
  console.log("anoop");
};
run();
