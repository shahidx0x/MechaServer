const ProductService = require("../model/ProductService");

exports.getAllProductService = async (req, res, next) => {
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

exports.addProduct = async (req, res, next) => {
  const { prod_name, prod_cat, price, image } = req.body;
  if (
    !prod_name &&
    prod_name.trim == "" &&
    !prod_cat &&
    prod_cat.trim == "" &&
    !price &&
    !image &&
    image.trim == ""
  ) {
    res.status(422).json({ message: "invalid data" });
  }
  let products;
  try {
    products = new ProductService({
      prod_name,
      prod_cat,
      price,
      image,
    });
    products = await products.save();
  } catch (error) {
    return next(error);
  }
  if (!products) {
    return res.status(500).json({ message: "unable to save the data" });
  }
  return res.status(201).json({ message: "data saved sucessfully" });
};
exports.deleteOne = async (req, res, next) => {
  let data;
  try {
    data = await ProductService.findById(req.params.id);
    await data.remove();
    res.send({ data: "deleted" });
  } catch (error) {
    return next(error);
  }
};

exports.updateOne = async (req, res, next) => {
  let data;
  try {
    data = await ProductService.findById(req.params.id);
    Object.assign(data, req.body);
    data.save();
    res.send({ res: "patched" });
  } catch (error) {
    return next(error);
  }
};
exports.findOneProduct = async (req, res, next) => {
  let data;
  try {
    data = await ProductService.findById(req.params.id);
  } catch (error) {
    return next(error);
  }
  if (!data) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ data });
};

