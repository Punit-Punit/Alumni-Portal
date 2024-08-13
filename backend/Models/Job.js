const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  user_id: String,
  branch: {
    type: String,
    require: true,
  },
  company: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Job", jobSchema);
