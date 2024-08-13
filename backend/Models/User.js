const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    immutable: true,
  },
  email: {
    type: String,
    require: true,
    immutable: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  phone: String,
  company: String,
  position: String,
  link: String,
  batch: {
    type: String,
    require: true,
    immutable: true,
  },
  picture: { type: String, require: true },
});

userSchema.pre("save", async function (next) {
  {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashpassword = await bcrypt.hash(this.password, salt);
      this.password = hashpassword;
      next();
    } catch (error) {
      next(error);
    }
  }
});
module.exports = mongoose.model("user", userSchema);
