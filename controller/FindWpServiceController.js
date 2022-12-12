const FindWpService = require("../model/FindWpService");

exports.getAllFwpService = async (req, res, next) => {
  let allFwpServices;
  try {
    allFwpServices = await FindWpService.find();
  } catch (error) {
    return next(error);
  }
  if (!allFwpServices) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ allFwpServices });
};
exports.addFwpServices = async (req, res, next) => {
  const { wp_name, srv_area, cont_no, image } = req.body;
  if (
    !wp_name &&
    wp_name.trim == "" &&
    !srv_area &&
    srv_area.trim == "" &&
    !cont_no &&
    cont_no > 11 &&
    !image &&
    image.trim == ""
  ) {
    res.status(422).json({ message: "invalid data" });
  }
  let wp_service;
  try {
    wp_service = new FindWpService({
      wp_name,
      srv_area,
      cont_no,
      image,
    });
    wp_service = await wp_service.save();
  } catch (error) {
    return next(error);
  }
  if (!wp_service) {
    return res.status(500).json({ message: "unable to save the data" });
  }
  return res.status(201).json({ message: "data saved sucessfully" });
};
exports.deleteOne = async (req, res, next) => {
  let data;
  try {
    data = await FindWpService.findById(req.params.id);
    await data.remove();
    res.send({ data: "deleted" });
  } catch (error) {
    return next(error);
  }
};

exports.updateOne = async (req, res, next) => {
  let data;
  try {
    data = await FindWpService.findById(req.params.id);
    Object.assign(data, req.body);
    data.save();
    res.send({ res: "patched" });
  } catch (error) {
    return next(error);
  }
};
exports.findOneWpService = async (req, res, next) => {
  let data;
  try {
    data = await FindWpService.findById(req.params.id);
  } catch (error) {
    return next(error);
  }
  if (!data) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ data });
};
