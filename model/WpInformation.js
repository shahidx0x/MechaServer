const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WpInformationSchema = new Schema({
  full_name: {
    type: String,
    required: true,
  },
  cont_no: {
    type: Number,
    required: true,
    minLength: 11,
  },
  pre_add: {
    type: String,
    required: true,
  },
  par_add: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  nid: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  srv_area: {
    type: String,
    required: true,
  },
  v_service: {
    type: String,
    required: true,
  },
  inst_type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("WpInformation", WpInformationSchema);
