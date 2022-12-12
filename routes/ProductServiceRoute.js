const express = require("express");
const {
  getAllProductService,
  addProduct,
  findOneProduct,
  updateOne,
  deleteOne,
} = require("../controller/ProductServiceController");
const product_router = express.Router();

product_router.get("/prod-services", getAllProductService);
product_router.post("/add-prod-services", addProduct);
product_router.get("/prod-services/:id", findOneProduct);
product_router.patch("/prod-services/update/:id", updateOne);
product_router.delete("/prod-services/remove/:id", deleteOne);


module.exports = product_router;
