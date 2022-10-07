const express = require("express");
const {
  getAllProductService,
} = require("../controller/ProductServiceController");
const ProdSrouter = express.Router();

ProdSrouter.get("/product-services", getAllProductService);

module.exports = ProdSrouter;
