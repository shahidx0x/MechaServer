const WpInformation = require("../model/WpInformation");

exports.addWpInfo = async (req, res, next) => {
  const {
    full_name,
    cont_no,
    pre_add,
    par_add,
    mail,
    nid,
    image,
    srv_area,
    v_service,
    inst_type,
  } = req.body;
  let data;
  try {
    data = new WpInformation({
      full_name,
      cont_no,
      pre_add,
      par_add,
      mail,
      nid,
      image,
      srv_area,
      exp_area,
      v_service,
      inst_type,
    });
    data = await data.save();
  } catch (error) {
    return next(error);
  }
};

exports.allWpInfo = async (req, res, next) => {
  let allWpInfo;
  try {
    allWpInfo = await WpInformation.find();
  } catch (error) {
    return next(error);
  }
  if (!allWpInfo) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ allWpInfo });
};
exports.deleteOne = async (req, res, next) => {
  let data;
  try {
    data = await WpInformation.findById(req.params.id);
    await data.remove();
    res.send({ data: "deleted" });
  } catch (error) {
    return next(error);
  }
};

exports.updateOne = async (req, res, next) => {
  let data;
  try {
    data = await WpInformation.findById(req.params.id);
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
    data = await WpInformation.findById(req.params.id);
  } catch (error) {
    return next(error);
  }
  if (!data) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ data });
};
