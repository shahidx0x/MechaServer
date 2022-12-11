const TechInfomation = require("../model/TechInfomation");

const addTechInfo = async (req, res, next) => {
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

const allTechInfo = async (req, res, next) => {
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

exports.allTechInfo = allTechInfo;
exports.addTechInfo = addTechInfo;
