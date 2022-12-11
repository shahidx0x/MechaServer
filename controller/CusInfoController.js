const CusInformation = require("../model/CusInformation");
const ObjectId = require("mongodb").ObjectId;
exports.addCusInfo = async (req, res, next) => {
  const { full_name, cont_no, mail, nid, image } = req.body;
  let data;
  try {
    data = new CusInformation({
      full_name,
      cont_no,
      mail,
      nid,
      image,
    });
    data = await data.save();
  } catch (error) {
    return next(error);
  }
};
exports.allCusInfo = async (req, res, next) => {
  let allCusInfo;
  try {
    allCusInfo = await CusInformation.find();
  } catch (error) {
    return next(error);
  }
  if (!allCusInfo) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ allCusInfo });
};

exports.findOneCus = async (req, res, next) => {
  let data;
  try {
    data = await CusInformation.findById(req.params.id);
  } catch (error) {
    return next(error);
  }
  if (!data) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ data });
};

exports.deleteOne = async (req, res, next) => {
  let data;
  try {
    data = await CusInformation.findById(req.params.id);
    await data.remove();
    res.send({ data: "deleted" });
  } catch (error) {
    return next(error);
  }
};

exports.updateOne = async (req, res, next) => {
  let data;
  try {
    data = await CusInformation.findById(req.params.id);
    Object.assign(data, req.body);
    data.save();
    res.send({ res: "patched" });
  } catch (error) {
    return next(error);
  }
};


