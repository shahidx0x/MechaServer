const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductServiceSchema = new Schema({
  prod_name: {
    type: String,
    required: true,
  },
  prod_cat: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("ProdService", ProductServiceSchema);
