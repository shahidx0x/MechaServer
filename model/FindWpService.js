const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FindWpServiceSchema = new Schema({
  wp_name: {
    type: String,
    required: true,
  },
  srv_area: {
    type: String,
    required: true,
  },
  cont_no: {
    type: Number,
    required: true,
    minLength: 11,
  },
  image: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("WpService", FindWpServiceSchema);
