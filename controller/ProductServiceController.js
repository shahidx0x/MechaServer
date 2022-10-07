const ProductService = require("../model/ProductService");

const getAllProductService = async (req, res, next) => {
  let allProductServices;
  try {
    allProductServices = await ProductService.find();
  } catch (error) {
    return next(error);
  }
  if (!allProductServices) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ allProductServices });
};

exports.getAllProductService = getAllProductService;
