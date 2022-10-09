const express = require("express");
const {
  getAllProductService, addProduct,
} = require("../controller/ProductServiceController");
const product_router = express.Router();

product_router.get("/prod-services", getAllProductService);
product_router.post("/prod-services",addProduct);

module.exports = product_router;
