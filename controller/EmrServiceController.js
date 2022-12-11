const EmergencyService = require("../model/EmergencyService");

exports.getAllEmrService = async (req, res, next) => {
  let allEmrServices;
  try {
    allEmrServices = await EmergencyService.find();
  } catch (error) {
    return next(error);
  }
  if (!allEmrServices) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ allEmrServices });
};

exports.addEmrServices = async (req, res, next) => {
  const { tech_name, srv_area, cont_no, image, exp_area } = req.body;
  if (
    !tech_name &&
    tech_name.trim == "" &&
    !srv_area &&
    srv_area.trim == "" &&
    !cont_no &&
    cont_no > 11 &&
    !image &&
    image.trim == "" &&
    !exp_area &&
    exp_area.trim == ""
  ) {
    res.status(422).json({ message: "invalid data" });
  }
  let em_service;
  try {
    em_service = new EmergencyService({
      tech_name,
      srv_area,
      cont_no,
      image,
      exp_area,
    });
    em_service = await em_service.save();
  } catch (error) {
    return next(error);
  }
  if (!em_service) {
    return res.status(500).json({ message: "unable to save the data" });
  }
  return res.status(201).json({ message: "data saved sucessfully" });
};
exports.deleteOne = async (req, res, next) => {
  let data;
  try {
    data = await EmergencyService.findById(req.params.id);
    await data.remove();
    res.send({ data: "deleted" });
  } catch (error) {
    return next(error);
  }
};

exports.updateOne = async (req, res, next) => {
  let data;
  try {
    data = await EmergencyService.findById(req.params.id);
    Object.assign(data, req.body);
    data.save();
    res.send({ res: "patched" });
  } catch (error) {
    return next(error);
  }
};
exports.findOneWp = async (req, res, next) => {
  let data;
  try {
    data = await EmergencyService.findById(req.params.id);
  } catch (error) {
    return next(error);
  }
  if (!data) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ data });
};

