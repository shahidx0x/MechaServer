const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  reg_mail: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
});

module.exports = mongoose.model("UsersServices", UserSchema);
