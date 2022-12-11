const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerInformationSchema = new Schema({
  full_name: {
    type: String,
    required: true,
  },
  cont_no: {
    type: Number,
    required: true,
    minLength: 11,
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
});

module.exports = mongoose.model("CusInformation", CustomerInformationSchema);
