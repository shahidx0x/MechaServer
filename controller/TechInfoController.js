const TechInfomation = require("../model/TechInfomation");

exports.addTechInfo = async (req, res, next) => {
  const {
    full_name,
    cont_no,
    pre_add,
    par_add,
    mail,
    nid,
    image,
    srv_area,
    exp_area,
  } = req.body;
  let data;
  try {
    data = new TechInfomation({
      full_name,
      cont_no,
      pre_add,
      par_add,
      mail,
      nid,
      image,
      srv_area,
      exp_area,
    });
    data = await data.save();
  } catch (error) {
    return next(error);
  }
};

exports.allTechInfo = async (req, res, next) => {
  let allTechInfo;
  try {
    allTechInfo = await TechInfomation.find();
  } catch (error) {
    return next(error);
  }
  if (!allTechInfo) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ allTechInfo });
};

exports.deleteOne = async (req, res, next) => {
  let data;
  try {
    data = await TechInfomation.findById(req.params.id);
    await data.remove();
    res.send({ data: "deleted" });
  } catch (error) {
    return next(error);
  }
};

exports.updateOne = async (req, res, next) => {
  let data;
  try {
    data = await TechInfomation.findById(req.params.id);
    Object.assign(data, req.body);
    data.save();
    res.send({ res: "patched" });
  } catch (error) {
    return next(error);
  }
};

exports.findOneTech = async (req, res, next) => {
  let data;
  try {
    data = await TechInfomation.findById(req.params.id);
  } catch (error) {
    return next(error);
  }
  if (!data) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ data });
};