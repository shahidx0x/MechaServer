const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmergencyServiceSchema = new Schema({
  tech_name: {
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
  },
  exp_area: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("EmrService", EmergencyServiceSchema);
