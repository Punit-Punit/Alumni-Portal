const mongoose = require("mongoose");
const galSchema = mongoose.Schema({
  img: String,
});
module.exports = mongoose.model("gal", galSchema);
